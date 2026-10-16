# Inkly: a Shopify portfolio theme

A Shopify Online Store 2.0 theme for a fictional personalized-gifts store, built to show three things merchants and agencies keep asking for: **a product page with live personalization preview**, **a cart drawer with upsell and a free-shipping bar**, and **a speed fix measured with Lighthouse**.

- Demo store: `inkly-demo.myshopify.com` (a development store, so it's password protected; ask for the password).
- Products, prices and reviews are fictional. No orders are fulfilled.
- Base: [Shopify Skeleton Theme](https://github.com/Shopify/skeleton-theme) v1.0.0 (commit `8b8a1f4`, license in `LICENSE.md`). Everything else was written from scratch for this repository.
- Storefront strings ship in English (default) and Brazilian Portuguese.

---

## 1. Product personalizer with live preview

![Product page on desktop](docs/01-product-desktop.jpg)

<img src="docs/03-product-mobile.jpg" alt="Product page on mobile" width="260"> <img src="docs/04-product-photo-quality.jpg" alt="Low-resolution photo warning" width="560">

The customer types a line of text, picks a font, a color and a position, uploads a photo, drags and zooms it, and watches the mockup update as they go. On mobile the preview stays pinned to the top while they fill in the form.

- **SVG mockups** of a mug, a tee and a tote bag (`snippets/mockup.liquid`), tinted with the selected variant color. A merchant can also use their own mockup image and mark the print area in percentages.
- **Print quality check:** the theme computes DPI from the real print width (a setting) and warns before checkout when the photo will print blurry.
- **Contrast warning** when the text color nearly disappears on the product color.
- **Everything goes into the order** as line item properties: text, font, color, the original photo (uploaded through Shopify) and, hidden from the customer, the text position, the photo adjustment and a **preview image rendered in the browser** (canvas), which shows up in the cart and reaches production.
- Keyboard support: the photo also moves with the arrow keys; controls are `fieldset`s with `legend`s and errors go to `role="alert"`.
- Configurable in the theme editor: fonts (three pickers from the Shopify font library), text colors, required fields, character limit, minimum DPI and maximum file size.

Files: `sections/product.liquid`, `snippets/personalizer-controls.liquid`, `snippets/mockup.liquid`, `assets/product-personalizer.js`, `assets/product-form.js`, `assets/product.css`, `templates/product.personalized.json`.

## 2. Cart drawer with upsell and free-shipping bar

![Cart drawer with free shipping unlocked](docs/06-cart-free-shipping.jpg)

<img src="docs/07-cart-mobile.jpg" alt="Cart drawer on mobile" width="260">

- Native `<dialog>` (focus trapped, Esc closes, focus returns where it was), refreshed with the **Section Rendering API**: adding, changing quantity and removing return the drawer HTML in the same response, with no page reload.
- **Free-shipping bar** driven by a theme setting and compared with the cart total after discounts.
- **Upsell** of up to three products picked in the theme editor, skipping what's already in the cart or sold out; products with options or personalization link to their page.
- **Pix price** for Brazilian stores ("or R$ X with Pix") from a percentage setting. Display only, off by default and off in the demo store.
- **Events:** `add_to_cart`, `remove_from_cart`, `view_cart`, `view_item_list`, `upsell_added` and `free_shipping_unlocked` are published to Shopify customer events (`Shopify.analytics.publish`) and, when the setting is on, to `dataLayer` in GA4 ecommerce format.
- The `/cart` page reuses the same snippets and works without JavaScript.

Files: `sections/cart-drawer.liquid`, `snippets/cart-items.liquid`, `snippets/cart-upsell.liquid`, `snippets/free-shipping-bar.liquid`, `snippets/cart-summary.liquid`, `assets/cart-drawer.js`, `assets/cart.css`, `assets/theme.js`.

## 3. Speed: the same home page, before and after

![Home page on desktop](docs/08-home-desktop.jpg)

The home page was first built the way many slow stores reach a freelancer, measured, and then fixed. It is not a client's store.

**What the "before" version had** (commit `f901575`, tag `speed-before`):
- Google Fonts with every weight, no `preconnect` and no `font-display`, on top of the theme fonts;
- jQuery, Slick and AOS loaded synchronously in `<head>`, and the whole Font Awesome for a handful of icons;
- a 3840 px hero image as a CSS `background-image`, which the browser only discovers after the CSS, with the heading hidden by AOS until JavaScript runs;
- product grid images at 1500 px with no `srcset`, no `width`/`height` and no `loading="lazy"`;
- low-contrast gray text, an image with no `alt` and an icon link with no name.

**What changed** (commit `6613c96`, tag `speed-after`, plus the mobile hero layout in `dac6ad1`):
- only Shopify-hosted fonts, with `font-display: swap` and a preload for the two used above the fold;
- no jQuery, Slick, AOS or Font Awesome: testimonials use CSS `scroll-snap` and 30 lines of deferred JavaScript, icons are inline SVG;
- a responsive hero `<img>` (`srcset` from 600 to 2400 px, `sizes="100vw"`) with `fetchpriority="high"`, a preload and `width`/`height`; on mobile the copy comes before the image and shows without waiting for JavaScript;
- product grid with `srcset`, `sizes`, `loading="lazy"` and `width`/`height`;
- fixed contrast, named icon buttons and screen-reader-friendly ratings.

Theme Check: 4 errors and 8 warnings before (`ParserBlockingScript`, `ImgWidthAndHeight`, `RemoteAsset`), none after.

### Measured numbers

Lighthouse 13.5.0, 5 runs per side, **median** (the run chosen by `computeMedianRun`), on 2026-10-16.

| Mobile | Before | After |
|---|---|---|
| Performance | **37** (34–39) | **65** (54–70) |
| LCP | **11.6 s** (10.2–12.4) | **5.0 s** (4.6–5.8) |
| Total Blocking Time | **2,323 ms** (1,874–2,924) | **533 ms** (422–1,458) |
| First Contentful Paint | 2.9 s | 2.0 s |
| CLS | 0 | 0 |
| Accessibility | **91** | **96** |

| Desktop | Before | After |
|---|---|---|
| Performance | 76 (72–80) | 96 (93–96) |
| LCP | 2.2 s | 1.2 s |
| Total Blocking Time | 273 ms (228–338) | 102 ms (73–133) |
| Accessibility | 91 | 96 |

In parentheses: the lowest and highest value across the 5 runs. The run-to-run spread is wide on both sides, mostly from the Shopify scripts described below. An earlier measurement of the same code, on a previous copy of the demo store with Portuguese content, gave mobile 42 → 63 and LCP 10.8 s → 4.9 s, but left the desktop score flat (78 → 77), so treat the desktop gain as less certain than the mobile one.

**How it was measured.** Both versions ran on the same development theme, served by `shopify theme dev --live-reload off` at `http://127.0.0.1:9292/`, with Lighthouse's default mobile emulation and its desktop preset (simulated throttling in both). The measured "before" is the `speed/before` branch (commit `765839e`: the current theme with `theme.liquid` and the four home sections from `speed-before`); the "after" is `main` at commit `829445c`. Full reports live in `lighthouse/before/` and `lighthouse/after/` (HTML to open in a browser and the JSON of the median run, plus `summary.json` with all 5 runs). To measure again: `npm run measure -- <label> <url> 5`.

**What's left isn't the theme's.** The CLI's local server sends the HTML without compression and without a CDN, in both measurements; numbers on the published storefront should be better in absolute terms, but I didn't measure that. Most of the remaining weight and blocking time comes from the scripts Shopify injects through `content_for_header`: checkout prefetching (about 2.3 MB), perf-kit, the web pixels manager and analytics. No theme can remove those, and the checkout prefetch loads in some runs and not in others, which is why total page weight is left out of the tables: it swings by more than a megabyte between runs of the same code. On the parts the theme controls, the "after" report flags no oversized image, no render-blocking font and no third-party script.

---

## Run it locally

You need the [Shopify CLI](https://shopify.dev/docs/api/shopify-cli) and a development store.

```bash
shopify theme dev --store your-store.myshopify.com
```

```bash
shopify theme check
```

Demo data (products, photos, hero image and menu), after authorizing the CLI on the store with `shopify store auth`:

```bash
python demo/images.py
```

```bash
python demo/seed.py your-store.myshopify.com
```

Screenshots of each piece (Puppeteer with the installed Chrome, against `theme dev`):

```bash
node demo/screenshots.mjs demo/screenshots
```

## Structure

```
assets/      CSS and JavaScript for each piece, SVG icons
config/      theme settings (colors, fonts, cart, Pix, tracking)
layout/      theme.liquid
locales/     English and Brazilian Portuguese (storefront and editor)
sections/    product, cart (page and drawer), home, header, footer
snippets/    personalizer, mockups, cart items, upsell, shipping bar
templates/   JSON templates (OS 2.0), including product.personalized.json
demo/        fictional images, product seeding and screenshots
lighthouse/  measuring script and before/after reports
scripts/     Shopify CLI with a separate session (author's own setup)
```

Author: Gabriel Velozo.
