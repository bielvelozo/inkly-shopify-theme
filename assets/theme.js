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

  theme.publishCart = (detail) => {
    document.dispatchEvent(new CustomEvent('cart:updated', { detail }));
  };

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
  }

  theme.observeReveals();
  theme.motionReady = true;
  document.addEventListener('shopify:section:load', (event) => theme.observeReveals(event.target));
})();
