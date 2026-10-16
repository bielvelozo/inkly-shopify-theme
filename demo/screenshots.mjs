import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const IMAGES = path.join(HERE, 'images');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE = process.env.STORE_URL || 'http://127.0.0.1:9292';
const OUT = process.argv[2] || path.join(HERE, 'screenshots');

const VIEWPORTS = {
  desktop: { width: 1440, height: 900, deviceScaleFactor: 1.5 },
  mobile: { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
};

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function newPage(browser, viewport) {
  const context = await browser.createBrowserContext();
  const page = await context.newPage();
  await page.setViewport(VIEWPORTS[viewport]);
  page.on('pageerror', (error) => console.warn(`[${viewport}] page error:`, error.message));
  return { context, page };
}

async function open(page, pathname) {
  await page.goto(`${BASE}${pathname}`, { waitUntil: 'networkidle2', timeout: 90000 });
  await page.evaluate(() => document.fonts.ready);
  await page.addStyleTag({ content: '#preview-bar-iframe, #PBarNextFrameWrapper { display: none !important; }' });
}

async function personalize(page, { text, color, photo, zoom }) {
  await page.waitForSelector('product-personalizer');
  await page.type('[data-text-input]', text, { delay: 20 });
  await page.evaluate((name) => document.querySelector(`[data-color][value="${name}"]`).click(), color);
  if (photo) {
    const input = await page.$('[data-photo-input]');
    await input.uploadFile(path.join(IMAGES, photo));
    await page.waitForSelector('[data-photo]:not([display])');
  }
  if (zoom) {
    await page.evaluate((value) => {
      const range = document.querySelector('[data-zoom-input]');
      range.value = value;
      range.dispatchEvent(new Event('input', { bubbles: true }));
    }, zoom);
  }
  await wait(600);
}

async function addToCart(page) {
  await page.click('[data-add-button]');
  await page.waitForSelector('[data-cart-dialog][open] .cart-item', { timeout: 30000 });
  await page.waitForFunction(
    () => [...document.querySelectorAll('[data-cart-dialog] img')].every((img) => img.complete && img.naturalWidth > 0),
    { timeout: 30000 }
  );
  await wait(700);
}

async function save(page, name) {
  const file = path.join(OUT, `${name}.png`);
  await page.screenshot({ path: file });
  console.log('screenshot:', file);
}

async function productDesktop(browser) {
  const { context, page } = await newPage(browser, 'desktop');
  await open(page, '/products/custom-mug');
  await personalize(page, { text: 'Morning, Ana', color: 'Orange', photo: 'customer-photo.jpg', zoom: '1.15' });
  await page.evaluate(() => window.scrollTo(0, 0));
  await save(page, '01-product-desktop');

  await page.evaluate(() => document.querySelector('.personalizer__photo').scrollIntoView({ block: 'center' }));
  await wait(300);
  await save(page, '02-product-desktop-photo');

  await addToCart(page);
  await save(page, '05-cart-desktop');

  await page.evaluate(() => document.querySelector('[data-upsell-add]').click());
  await page.waitForFunction(() => document.querySelectorAll('[data-cart-dialog] .cart-item').length === 2);
  await open(page, '/products/custom-t-shirt');
  await page.evaluate(() => document.querySelector('label[title="Sand"]').click());
  await personalize(page, { text: 'good vibes', color: 'Black' });
  await addToCart(page);
  await page.evaluate(() => {
    document.querySelector('.cart-drawer__body').scrollTop = 0;
  });
  await wait(400);
  await save(page, '06-cart-free-shipping');
  await context.close();
}

async function productMobile(browser) {
  const { context, page } = await newPage(browser, 'mobile');
  await open(page, '/products/custom-mug');
  await personalize(page, { text: 'Morning, Ana', color: 'Orange', photo: 'customer-photo.jpg', zoom: '1.15' });
  await page.evaluate(() => {
    const card = document.querySelector('product-personalizer');
    window.scrollTo(0, card.getBoundingClientRect().top + window.scrollY - 380);
  });
  await wait(500);
  await save(page, '03-product-mobile');

  await addToCart(page);
  await save(page, '07-cart-mobile');
  await context.close();
}

async function photoQuality(browser) {
  const { context, page } = await newPage(browser, 'desktop');
  await open(page, '/products/custom-tote-bag');
  await personalize(page, { text: 'Farmers Market', color: 'Green', photo: 'customer-photo-small.jpg', zoom: '1.6' });
  await page.evaluate(() => document.querySelector('[data-quality]').scrollIntoView({ block: 'center' }));
  await wait(300);
  await save(page, '04-product-photo-quality');
  await context.close();
}

async function home(browser) {
  for (const viewport of ['desktop', 'mobile']) {
    const { context, page } = await newPage(browser, viewport);
    await open(page, '/');
    await save(page, `08-home-${viewport}`);
    await context.close();
  }
}

await fs.mkdir(OUT, { recursive: true });
const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--no-first-run'] });
try {
  const steps = { productDesktop, productMobile, photoQuality, home };
  const chosen = process.argv.slice(3);
  for (const [name, step] of Object.entries(steps)) {
    if (chosen.length && !chosen.includes(name)) continue;
    await step(browser);
  }
} finally {
  await browser.close();
}
