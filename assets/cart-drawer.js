(() => {
  const parseItem = (element, attribute) => {
    try {
      return JSON.parse(element.getAttribute(attribute));
    } catch {
      return null;
    }
  };

  class CartDrawer extends HTMLElement {
    connectedCallback() {
      this.dialog = this.querySelector('[data-cart-dialog]');
      this.live = this.querySelector('[data-cart-live]');
      this.errorEl = this.querySelector('[data-cart-error]');
      this.queue = Promise.resolve();

      document.addEventListener('click', (event) => {
        const toggle = event.target.closest('[data-cart-toggle]');
        if (!toggle || event.metaKey || event.ctrlKey) return;
        event.preventDefault();
        this.open(toggle);
      });

      this.dialog.addEventListener('click', (event) => this.onClick(event));
      this.dialog.addEventListener('cancel', (event) => {
        event.preventDefault();
        this.close();
      });
      this.dialog.addEventListener('close', () => this.returnFocus?.focus?.());

      document.addEventListener('cart:updated', (event) => this.onCartUpdated(event.detail || {}));
    }

    get sectionId() {
      return this.dataset.cartSection;
    }

    get content() {
      return this.querySelector('[data-cart-content]');
    }

    open(trigger) {
      if (this.dialog.open) return;
      this.returnFocus = trigger || document.activeElement;
      this.dialog.classList.remove('is-closing');
      this.dialog.showModal();
      this.trackView();
    }

    close() {
      if (!this.dialog.open || this.dialog.classList.contains('is-closing')) return;
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) {
        this.dialog.close();
        return;
      }
      this.dialog.classList.add('is-closing');
      this.dialog.addEventListener(
        'animationend',
        () => {
          this.dialog.classList.remove('is-closing');
          this.dialog.close();
        },
        { once: true }
      );
    }

    onClick(event) {
      if (event.target === this.dialog) {
        this.close();
        return;
      }
      if (event.target.closest('[data-cart-close]')) {
        this.close();
        return;
      }

      const change = event.target.closest('[data-cart-change]');
      if (change) {
        event.preventDefault();
        this.change(change);
        return;
      }

      const upsell = event.target.closest('[data-upsell-add]');
      if (upsell) {
        event.preventDefault();
        this.addUpsell(upsell);
      }
    }

    request(path, payload) {
      const run = async () => {
        this.setBusy(true);
        try {
          const response = await fetch(`${path}.js`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({ ...payload, sections: this.sectionId, sections_url: window.location.pathname }),
          });
          const data = await response.json();
          if (!response.ok) throw new Error(data.description || data.message || response.statusText);
          return data;
        } finally {
          this.setBusy(false);
        }
      };
      const next = this.queue.then(run, run);
      this.queue = next.catch(() => {});
      return next;
    }

    async change(control) {
      const line = control.closest('[data-line-key]');
      const quantity = Number(control.dataset.quantity);
      const before = line ? Number(line.dataset.quantity) : 0;
      const item = line ? parseItem(line, 'data-item') : null;
      this.hideError();

      try {
        const data = await this.request(window.theme.routes.cartChange, { id: control.dataset.key, quantity });
        this.render(data.sections, control.dataset.focusId);

        if (item && quantity < before) {
          const removed = before - quantity;
          window.theme.track('remove_from_cart', {
            currency: window.theme.currency,
            value: item.price * removed,
            items: [{ ...item, quantity: removed }],
          });
        } else if (item && quantity > before) {
          window.theme.track('add_to_cart', {
            currency: window.theme.currency,
            value: item.price,
            items: [{ ...item, quantity: 1 }],
          });
        }
      } catch (error) {
        this.showError(error.message);
      }
    }

    async addUpsell(button) {
      const item = parseItem(button.closest('[data-upsell-item]'), 'data-upsell-item');
      button.setAttribute('aria-busy', 'true');
      this.hideError();

      try {
        const data = await this.request(window.theme.routes.cartAdd, {
          items: [{ id: Number(button.dataset.variantId), quantity: 1 }],
        });
        this.render(data.sections);
        if (item) {
          const payload = { currency: window.theme.currency, value: item.price, items: [{ ...item, quantity: 1 }] };
          window.theme.track('add_to_cart', payload);
          window.theme.track('upsell_added', payload);
        }
      } catch (error) {
        button.removeAttribute('aria-busy');
        this.showError(error.message);
      }
    }

    onCartUpdated({ sections, open }) {
      if (sections) this.render(sections);
      if (open) this.open();
    }

    render(sections, focusId) {
      const html = sections?.[this.sectionId];
      if (!html) return;

      const next = new DOMParser().parseFromString(html, 'text/html').querySelector('[data-cart-content]');
      const current = this.content;
      if (!next || !current) return;

      const scrollTop = current.querySelector('.cart-drawer__body')?.scrollTop ?? 0;
      const wasFree = current.querySelector('[data-free-shipping]')?.dataset.freeShipping === 'reached';
      current.replaceWith(next);

      const body = next.querySelector('.cart-drawer__body');
      if (body) body.scrollTop = scrollTop;

      this.updateCount(next);
      this.announce(next.dataset.cartLabel);

      const isFree = next.querySelector('[data-free-shipping]')?.dataset.freeShipping === 'reached';
      if (!wasFree && isFree) {
        window.theme.track('free_shipping_unlocked', {
          currency: window.theme.currency,
          value: Number(next.dataset.cartValue),
        });
      }

      const focusTarget = focusId ? next.querySelector(`[data-focus-id="${CSS.escape(focusId)}"]`) : null;
      if (focusTarget) {
        focusTarget.focus();
      } else if (this.dialog.open && !this.dialog.contains(document.activeElement)) {
        next.querySelector('[data-cart-close]')?.focus();
      }
    }

    updateCount(content) {
      const count = Number(content.dataset.cartCountValue);
      document.querySelectorAll('[data-cart-count]').forEach((badge) => {
        badge.textContent = count;
        badge.hidden = count === 0;
      });
      document.querySelectorAll('[data-cart-toggle]').forEach((toggle) => {
        toggle.setAttribute('aria-label', content.dataset.cartLabel);
      });
    }

    announce(message) {
      if (!this.live || !message) return;
      this.live.textContent = '';
      window.setTimeout(() => {
        this.live.textContent = message;
      }, 50);
    }

    setBusy(busy) {
      this.dialog.toggleAttribute('aria-busy', busy);
      this.content?.classList.toggle('is-busy', busy);
    }

    showError(message) {
      this.errorEl.textContent = message;
      this.errorEl.hidden = false;
    }

    hideError() {
      this.errorEl.hidden = true;
    }

    trackView() {
      const lines = Array.from(this.querySelectorAll('[data-line-key]'), (line) => parseItem(line, 'data-item')).filter(
        Boolean
      );
      if (lines.length > 0) {
        window.theme.track('view_cart', {
          currency: window.theme.currency,
          value: Number(this.content.dataset.cartValue),
          items: lines,
        });
      }

      const upsells = Array.from(this.querySelectorAll('[data-upsell-item]'), (item) =>
        parseItem(item, 'data-upsell-item')
      ).filter(Boolean);
      if (upsells.length > 0) {
        window.theme.track('view_item_list', {
          item_list_id: 'cart_upsell',
          item_list_name: 'cart_upsell',
          items: upsells,
        });
      }
    }
  }

  if (!customElements.get('cart-drawer')) customElements.define('cart-drawer', CartDrawer);
})();
