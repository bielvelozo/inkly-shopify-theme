import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as chromeLauncher from 'chrome-launcher';
import lighthouse from 'lighthouse';
import desktopConfig from 'lighthouse/core/config/desktop-config.js';
import { computeMedianRun } from 'lighthouse/core/lib/median-run.js';

const [label, url, runsArg] = process.argv.slice(2);
if (!label || !url) {
  console.error('usage: node lighthouse/measure.mjs <label> <url> [runs]');
  process.exit(1);
}

const runs = Number(runsArg) || 5;
const folder = path.join(path.dirname(fileURLToPath(import.meta.url)), label);
await fs.mkdir(folder, { recursive: true });

const metrics = (lhr) => ({
  performance: Math.round(lhr.categories.performance.score * 100),
  accessibility: Math.round(lhr.categories.accessibility.score * 100),
  lcp_ms: Math.round(lhr.audits['largest-contentful-paint'].numericValue),
  fcp_ms: Math.round(lhr.audits['first-contentful-paint'].numericValue),
  tbt_ms: Math.round(lhr.audits['total-blocking-time'].numericValue),
  cls: Number(lhr.audits['cumulative-layout-shift'].numericValue.toFixed(3)),
  speed_index_ms: Math.round(lhr.audits['speed-index'].numericValue),
  bytes_kb: Math.round(lhr.audits['total-byte-weight'].numericValue / 1024),
  requests: lhr.audits['network-requests'].details?.items?.length ?? null,
});

const median = (values) => {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
};

const summary = { url, runs, measured_at: new Date().toISOString(), lighthouse: null };

for (const [mode, config] of [
  ['mobile', undefined],
  ['desktop', desktopConfig],
]) {
  const results = [];
  for (let i = 1; i <= runs; i += 1) {
    const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless=new', '--no-first-run'] });
    try {
      const { lhr, report } = await lighthouse(
        url,
        { port: chrome.port, output: 'html', logLevel: 'error', onlyCategories: ['performance', 'accessibility'] },
        config
      );
      results.push({ lhr, report });
      summary.lighthouse = lhr.lighthouseVersion;
      const m = metrics(lhr);
      console.log(`${label} ${mode} ${i}/${runs}: perf ${m.performance}, LCP ${m.lcp_ms} ms, TBT ${m.tbt_ms} ms, CLS ${m.cls}`);
    } finally {
      await chrome.kill();
    }
  }

  const chosen = computeMedianRun(results.map((r) => r.lhr));
  const index = results.findIndex((r) => r.lhr === chosen);
  await fs.writeFile(path.join(folder, `${mode}.html`), results[index].report);
  await fs.writeFile(path.join(folder, `${mode}.json`), JSON.stringify(chosen, null, 2));

  const all = results.map((r) => metrics(r.lhr));
  const keys = ['performance', 'accessibility', 'lcp_ms', 'fcp_ms', 'tbt_ms', 'cls', 'speed_index_ms', 'bytes_kb', 'requests'];
  summary[mode] = {
    median: Object.fromEntries(keys.map((k) => [k, median(all.map((m) => m[k]))])),
    median_run: metrics(chosen),
    all,
  };
}

await fs.writeFile(path.join(folder, 'summary.json'), JSON.stringify(summary, null, 2));
console.log(JSON.stringify({ mobile: summary.mobile.median, desktop: summary.desktop.median }, null, 2));
