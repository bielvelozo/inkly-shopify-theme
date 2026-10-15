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
})();
