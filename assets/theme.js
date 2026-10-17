(() => {
  const theme = (window.theme = window.theme || {});

  theme.formatMoney = (cents) =>
    new Intl.NumberFormat(document.documentElement.lang || 'pt-BR', {
      style: 'currency',
      currency: theme.currency || 'BRL',
    }).format(cents / 100);

  theme.track = (name, payload) => {
    try {
      window.Shopify?.analytics?.publish?.(name, payload);
    } catch (error) {
      console.warn('[theme] analytics.publish', error);
    }

    if (!theme.dataLayer) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ ecommerce: null });
    window.dataLayer.push({ event: name, ecommerce: payload });
  };

  theme.toAnalyticsItem = (item, extra = {}) => ({
    item_id: String(item.sku || item.variant_id || item.id),
    item_name: item.product_title || item.title,
    item_variant: item.variant_title || undefined,
    price: (item.final_price ?? item.price) / 100,
    quantity: item.quantity ?? 1,
    ...extra,
  });

  theme.sectionIds = () =>
    Array.from(document.querySelectorAll('[data-cart-section]'), (el) => el.dataset.cartSection);

  theme.loadCartDrawer = () => {
    const drawer = document.querySelector('cart-drawer');
    if (!drawer?.dataset.script) return Promise.resolve();
    theme.cartDrawerReady ||= new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = drawer.dataset.script;
      script.onload = script.onerror = () => resolve();
      document.head.append(script);
    });
    return theme.cartDrawerReady;
  };

  theme.publishCart = async (detail) => {
    await theme.loadCartDrawer();
    document.dispatchEvent(new CustomEvent('cart:updated', { detail }));
  };

  document.addEventListener('click', (event) => {
    const toggle = event.target.closest('[data-cart-toggle]');
    if (!toggle || event.metaKey || event.ctrlKey || customElements.get('cart-drawer')) return;
    const drawer = document.querySelector('cart-drawer');
    if (!drawer?.dataset.script) return;
    event.preventDefault();
    theme.loadCartDrawer().then(() => drawer.open?.(toggle));
  });

  const warmCartDrawer = () =>
    'requestIdleCallback' in window
      ? requestIdleCallback(() => theme.loadCartDrawer(), { timeout: 3000 })
      : setTimeout(() => theme.loadCartDrawer(), 1500);
  if (document.readyState === 'complete') warmCartDrawer();
  else addEventListener('load', warmCartDrawer, { once: true });

  theme.observeReveals = (root = document) => {
    const targets = root.querySelectorAll('.reveal:not(.is-revealed)');
    if (!document.documentElement.classList.contains('js-motion')) {
      targets.forEach((el) => el.classList.add('is-revealed'));
      return;
    }
    if (!theme.revealObserver) {
      theme.revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-revealed');
            theme.revealObserver.unobserve(entry.target);
          });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
      );
    }
    targets.forEach((el) => {
      if (!el.style.transitionDelay && el.dataset.revealStagger !== undefined) {
        const index = Array.prototype.indexOf.call(el.parentElement.children, el);
        el.style.transitionDelay = `${Math.min(index, 6) * 80}ms`;
      }
      theme.revealObserver.observe(el);
    });
  };

  const header = document.querySelector('[data-header]');
  if (header) {
    const sentinel = document.createElement('div');
    sentinel.setAttribute('aria-hidden', 'true');
    sentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:80px;pointer-events:none';
    document.body.prepend(sentinel);
    new IntersectionObserver(([entry]) => header.classList.toggle('is-scrolled', !entry.isIntersecting)).observe(sentinel);

    const drawer = header.querySelector('.header__drawer');
    const closeDrawer = (returnFocus) => {
      if (!drawer?.open) return;
      drawer.open = false;
      if (returnFocus) drawer.querySelector('summary')?.focus();
    };
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeDrawer(drawer?.contains(document.activeElement));
    });
    document.addEventListener('click', (event) => {
      if (drawer && !drawer.contains(event.target)) closeDrawer(false);
    });
  }

  // iOS Safari only paints :active press states while the page has a touchstart listener.
  document.addEventListener('touchstart', () => {}, { passive: true });

  const dress = () => document.documentElement.classList.remove('is-dressing');
  const afterLoad = () => ('requestIdleCallback' in window ? requestIdleCallback(dress, { timeout: 1200 }) : setTimeout(dress, 300));
  if (document.readyState === 'complete') afterLoad();
  else addEventListener('load', afterLoad, { once: true });

  theme.observeReveals();
  theme.motionReady = true;
  document.addEventListener('shopify:section:load', (event) => theme.observeReveals(event.target));
})();
