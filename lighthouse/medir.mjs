import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as chromeLauncher from 'chrome-launcher';
import lighthouse from 'lighthouse';
import desktopConfig from 'lighthouse/core/config/desktop-config.js';
import { computeMedianRun } from 'lighthouse/core/lib/median-run.js';

const [rotulo, url, rodadasArg] = process.argv.slice(2);
if (!rotulo || !url) {
  console.error('uso: node lighthouse/medir.mjs <rotulo> <url> [rodadas]');
  process.exit(1);
}

const rodadas = Number(rodadasArg) || 5;
const pasta = path.join(path.dirname(fileURLToPath(import.meta.url)), rotulo);
await fs.mkdir(pasta, { recursive: true });

const metricas = (lhr) => ({
  performance: Math.round(lhr.categories.performance.score * 100),
  accessibility: Math.round(lhr.categories.accessibility.score * 100),
  lcp_ms: Math.round(lhr.audits['largest-contentful-paint'].numericValue),
  fcp_ms: Math.round(lhr.audits['first-contentful-paint'].numericValue),
  tbt_ms: Math.round(lhr.audits['total-blocking-time'].numericValue),
  cls: Number(lhr.audits['cumulative-layout-shift'].numericValue.toFixed(3)),
  speed_index_ms: Math.round(lhr.audits['speed-index'].numericValue),
  bytes_kb: Math.round(lhr.audits['total-byte-weight'].numericValue / 1024),
  requests: lhr.audits['network-requests'].details?.items?.length ?? null,
  lcp_element: lhr.audits['largest-contentful-paint-element']?.details?.items?.[0]?.items?.[0]?.node?.snippet ?? null,
});

const mediana = (valores) => {
  const ordenados = [...valores].sort((a, b) => a - b);
  return ordenados[Math.floor(ordenados.length / 2)];
};

const resumo = { url, rodadas, medido_em: new Date().toISOString(), lighthouse: null };

for (const [modo, config] of [
  ['mobile', undefined],
  ['desktop', desktopConfig],
]) {
  const resultados = [];
  for (let i = 1; i <= rodadas; i += 1) {
    const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless=new', '--no-first-run'] });
    try {
      const { lhr, report } = await lighthouse(
        url,
        { port: chrome.port, output: 'html', logLevel: 'error', onlyCategories: ['performance', 'accessibility'] },
        config
      );
      resultados.push({ lhr, report });
      resumo.lighthouse = lhr.lighthouseVersion;
      const m = metricas(lhr);
      console.log(`${rotulo} ${modo} ${i}/${rodadas}: perf ${m.performance}, LCP ${m.lcp_ms} ms, TBT ${m.tbt_ms} ms, CLS ${m.cls}`);
    } finally {
      await chrome.kill();
    }
  }

  const escolhido = computeMedianRun(resultados.map((r) => r.lhr));
  const indice = resultados.findIndex((r) => r.lhr === escolhido);
  await fs.writeFile(path.join(pasta, `${modo}.html`), resultados[indice].report);
  await fs.writeFile(path.join(pasta, `${modo}.json`), JSON.stringify(escolhido, null, 2));

  const todas = resultados.map((r) => metricas(r.lhr));
  const chaves = ['performance', 'accessibility', 'lcp_ms', 'fcp_ms', 'tbt_ms', 'cls', 'speed_index_ms', 'bytes_kb', 'requests'];
  resumo[modo] = {
    mediana: Object.fromEntries(chaves.map((k) => [k, mediana(todas.map((m) => m[k]))])),
    rodada_mediana: metricas(escolhido),
    todas,
  };
}

await fs.writeFile(path.join(pasta, 'resumo.json'), JSON.stringify(resumo, null, 2));
console.log(JSON.stringify({ mobile: resumo.mobile.mediana, desktop: resumo.desktop.mediana }, null, 2));
