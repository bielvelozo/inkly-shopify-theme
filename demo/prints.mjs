import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const PASTA = path.dirname(fileURLToPath(import.meta.url));
const IMAGENS = path.join(PASTA, 'imagens');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE = process.env.LOJA_URL || 'http://127.0.0.1:9292';
const SAIDA = process.argv[2] || path.join(PASTA, 'prints');

const TELAS = {
  desktop: { width: 1440, height: 900, deviceScaleFactor: 1.5 },
  celular: { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
};

const espera = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function novaPagina(browser, tela) {
  const contexto = await browser.createBrowserContext();
  const pagina = await contexto.newPage();
  await pagina.setViewport(TELAS[tela]);
  pagina.on('pageerror', (erro) => console.warn(`[${tela}] erro na página:`, erro.message));
  return { contexto, pagina };
}

async function abrir(pagina, caminho) {
  await pagina.goto(`${BASE}${caminho}`, { waitUntil: 'networkidle2', timeout: 90000 });
  await pagina.evaluate(() => document.fonts.ready);
  await pagina.addStyleTag({ content: '#preview-bar-iframe, #PBarNextFrameWrapper { display: none !important; }' });
}

async function personalizar(pagina, { texto, cor, foto, zoom }) {
  await pagina.waitForSelector('product-personalizer');
  await pagina.type('[data-text-input]', texto, { delay: 20 });
  await pagina.evaluate((nome) => document.querySelector(`[data-color][value="${nome}"]`).click(), cor);
  if (foto) {
    const input = await pagina.$('[data-photo-input]');
    await input.uploadFile(path.join(IMAGENS, foto));
    await pagina.waitForSelector('[data-photo]:not([display])');
  }
  if (zoom) {
    await pagina.evaluate((valor) => {
      const range = document.querySelector('[data-zoom-input]');
      range.value = valor;
      range.dispatchEvent(new Event('input', { bubbles: true }));
    }, zoom);
  }
  await espera(600);
}

async function adicionar(pagina) {
  await pagina.click('[data-add-button]');
  await pagina.waitForSelector('[data-cart-dialog][open] .cart-item', { timeout: 30000 });
  await pagina.waitForFunction(
    () => [...document.querySelectorAll('[data-cart-dialog] img')].every((img) => img.complete && img.naturalWidth > 0),
    { timeout: 30000 }
  );
  await espera(700);
}

async function salvar(pagina, nome) {
  const arquivo = path.join(SAIDA, `${nome}.png`);
  await pagina.screenshot({ path: arquivo });
  console.log('print:', arquivo);
}

async function produtoDesktop(browser) {
  const { contexto, pagina } = await novaPagina(browser, 'desktop');
  await abrir(pagina, '/products/caneca-personalizada');
  await personalizar(pagina, { texto: 'Bom dia, Ana', cor: 'Laranja', foto: 'foto-cliente.jpg', zoom: '1.15' });
  await pagina.evaluate(() => window.scrollTo(0, 0));
  await salvar(pagina, '01-produto-desktop');

  await pagina.evaluate(() => document.querySelector('.personalizer__photo').scrollIntoView({ block: 'center' }));
  await espera(300);
  await salvar(pagina, '02-produto-desktop-foto');

  await adicionar(pagina);
  await salvar(pagina, '05-carrinho-desktop');

  await pagina.evaluate(() => document.querySelector('[data-upsell-add]').click());
  await pagina.waitForFunction(() => document.querySelectorAll('[data-cart-dialog] .cart-item').length === 2);
  await abrir(pagina, '/products/camiseta-personalizada');
  await pagina.evaluate(() => document.querySelector('label[title="Areia"]').click());
  await personalizar(pagina, { texto: 'bom humor', cor: 'Preto' });
  await adicionar(pagina);
  await pagina.evaluate(() => {
    const corpo = document.querySelector('.cart-drawer__body');
    corpo.scrollTop = 0;
  });
  await espera(400);
  await salvar(pagina, '06-carrinho-frete-gratis');
  await contexto.close();
}

async function produtoCelular(browser) {
  const { contexto, pagina } = await novaPagina(browser, 'celular');
  await abrir(pagina, '/products/caneca-personalizada');
  await personalizar(pagina, { texto: 'Bom dia, Ana', cor: 'Laranja', foto: 'foto-cliente.jpg', zoom: '1.15' });
  await pagina.evaluate(() => {
    const cartao = document.querySelector('product-personalizer');
    window.scrollTo(0, cartao.getBoundingClientRect().top + window.scrollY - 380);
  });
  await espera(500);
  await salvar(pagina, '03-produto-celular');

  await adicionar(pagina);
  await salvar(pagina, '07-carrinho-celular');
  await contexto.close();
}

async function qualidadeFoto(browser) {
  const { contexto, pagina } = await novaPagina(browser, 'desktop');
  await abrir(pagina, '/products/ecobag-personalizada');
  await personalizar(pagina, { texto: 'Feira da Rua', cor: 'Verde', foto: 'foto-cliente-pequena.jpg', zoom: '1.6' });
  await pagina.evaluate(() => document.querySelector('[data-quality]').scrollIntoView({ block: 'center' }));
  await espera(300);
  await salvar(pagina, '04-produto-aviso-qualidade');
  await contexto.close();
}

async function home(browser) {
  for (const tela of ['desktop', 'celular']) {
    const { contexto, pagina } = await novaPagina(browser, tela);
    await abrir(pagina, '/');
    await salvar(pagina, `08-home-${tela}`);
    await contexto.close();
  }
}

await fs.mkdir(SAIDA, { recursive: true });
const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--no-first-run'] });
try {
  const etapas = { produtoDesktop, produtoCelular, qualidadeFoto, home };
  const escolhidas = process.argv.slice(3);
  for (const [nome, etapa] of Object.entries(etapas)) {
    if (escolhidas.length && !escolhidas.includes(nome)) continue;
    await etapa(browser);
  }
} finally {
  await browser.close();
}
