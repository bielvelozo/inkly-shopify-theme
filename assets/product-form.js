(() => {
  class VariantPicker extends HTMLElement {
    connectedCallback() {
      this.variants = JSON.parse(this.querySelector('[data-variants]').textContent);
      this.fieldsets = Array.from(this.querySelectorAll('fieldset'));
      this.addEventListener('change', () => this.onChange());
      this.markAvailability(this.selectedOptions());
    }

    selectedOptions() {
      return this.fieldsets.map((fieldset) => fieldset.querySelector('input:checked')?.value);
    }

    onChange() {
      const selected = this.selectedOptions();
      this.fieldsets.forEach((fieldset, index) => {
        const label = fieldset.querySelector('[data-option-selected]');
        if (label) label.textContent = selected[index] ?? '';
      });

      const variant = this.variants.find((candidate) =>
        candidate.options.every((value, index) => value === selected[index])
      );
      const swatch = this.querySelector('input:checked[data-swatch]')?.dataset.swatch;

      if (variant) {
        const url = new URL(window.location.href);
        url.searchParams.set('variant', variant.id);
        window.history.replaceState(window.history.state, '', url);
      }

      this.markAvailability(selected);
      document.dispatchEvent(
        new CustomEvent('variant:change', {
          detail: { sectionId: this.dataset.sectionId, variant, swatch },
        })
      );
    }

    markAvailability(selected) {
      this.fieldsets.forEach((fieldset, optionIndex) => {
        fieldset.querySelectorAll('input[type="radio"]').forEach((input) => {
          const available = this.variants.some(
            (variant) =>
              variant.available &&
              variant.options.every((value, index) =>
                index === optionIndex ? value === input.value : value === selected[index]
              )
          );
          input.nextElementSibling?.classList.toggle('is-unavailable', !available);
        });
      });
    }
  }

  class ProductForm extends HTMLElement {
    connectedCallback() {
      this.form = this.querySelector('form');
      this.submitButton = this.querySelector('[data-add-button]');
      this.submitLabel = this.querySelector('[data-add-label]');
      this.errorEl = this.querySelector('[data-form-error]');
      this.variantInput = this.querySelector('[data-variant-id]');
      this.quantityInput = this.querySelector('input[name="quantity"]');
      this.labels = this.submitButton.dataset;

      this.form.addEventListener('submit', (event) => this.onSubmit(event));
      this.querySelectorAll('[data-quantity-step]').forEach((button) =>
        button.addEventListener('click', () => this.stepQuantity(Number(button.dataset.quantityStep)))
      );
      document.addEventListener('variant:change', (event) => {
        if (event.detail.sectionId === this.dataset.sectionId) this.updateVariant(event.detail.variant);
      });
    }

    stepQuantity(step) {
      const next = Math.max(1, (Number(this.quantityInput.value) || 1) + step);
      this.quantityInput.value = next;
    }

    updateVariant(variant) {
      const section = document.querySelector(`[data-section-id="${this.dataset.sectionId}"]`);
      const price = section?.querySelector('[data-price]');

      if (!variant) {
        this.submitButton.disabled = true;
        this.submitLabel.textContent = this.labels.labelUnavailable;
        return;
      }

      this.variantInput.value = variant.id;
      this.submitButton.disabled = !variant.available;
      this.submitLabel.textContent = variant.available ? this.labels.labelAdd : this.labels.labelSoldOut;

      if (price) {
        const { formatMoney } = window.theme;
        price.innerHTML =
          variant.compare_at_price > variant.price
            ? `${formatMoney(variant.price)} <s>${formatMoney(variant.compare_at_price)}</s>`
            : formatMoney(variant.price);
      }
    }

    setBusy(busy) {
      this.submitButton.setAttribute('aria-busy', String(busy));
      this.submitButton.disabled = busy;
    }

    showAdded() {
      const text = this.submitButton.dataset.labelAdded;
      if (!text) return;
      const wrapper = document.createElement('span');
      wrapper.className = 'product-form__added';
      [...text].forEach((char, index) => {
        const letter = document.createElement('span');
        letter.textContent = char === ' ' ? '\u00a0' : char;
        letter.style.setProperty('--i', index);
        letter.style.setProperty('--r', `${(index % 2 ? 1 : -1) * (6 + (index % 3) * 4)}deg`);
        wrapper.append(letter);
      });
      const original = this.submitLabel.textContent;
      this.submitButton.classList.add('is-added');
      this.submitLabel.replaceChildren(wrapper);
      clearTimeout(this.addedTimer);
      this.addedTimer = setTimeout(() => {
        this.submitButton.classList.remove('is-added');
        this.submitLabel.textContent = original;
      }, 1800);
    }

    showError(message) {
      this.errorEl.textContent = message || '';
      this.errorEl.hidden = !message;
    }

    signatureOf(body) {
      const parts = [];
      for (const [key, value] of body.entries()) {
        if (key !== 'id' && !key.startsWith('properties[')) continue;
        parts.push(`${key}=${value instanceof File ? `${value.name}:${value.size}:${value.lastModified}` : value}`);
      }
      return parts.some((part) => part.startsWith('properties[')) ? parts.join('|') : null;
    }

    rememberedLines() {
      try {
        return JSON.parse(sessionStorage.getItem('inkly:personalized-lines')) || {};
      } catch {
        return {};
      }
    }

    rememberLine(signature, key) {
      const lines = { ...this.rememberedLines(), [signature]: key };
      try {
        sessionStorage.setItem('inkly:personalized-lines', JSON.stringify(lines));
      } catch {}
    }

    // Uploaded files get a new URL on every add, so Shopify never merges two identical personalized lines on its own.
    async addToSameLine(signature, quantity, sections) {
      const key = this.rememberedLines()[signature];
      if (!key) return null;
      try {
        const cart = await fetch(`${window.theme.routes.cart}.js`, { headers: { Accept: 'application/json' } }).then(
          (response) => response.json()
        );
        const line = cart.items.find((item) => item.key === key);
        if (!line) return null;

        const response = await fetch(`${window.theme.routes.cartChange}.js`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            id: key,
            quantity: line.quantity + quantity,
            sections: sections.join(','),
            sections_url: window.location.pathname,
          }),
        });
        if (!response.ok) return null;
        const updated = await response.json();
        const item = updated.items.find((candidate) => candidate.key === key);
        if (!item) return null;
        return { ...item, quantity, final_line_price: item.final_price * quantity, sections: updated.sections };
      } catch {
        return null;
      }
    }

    async onSubmit(event) {
      event.preventDefault();
      if (this.submitButton.getAttribute('aria-busy') === 'true') return;
      this.showError('');

      const personalizer = this.querySelector('product-personalizer');
      this.setBusy(true);

      try {
        let preview = null;
        if (personalizer) {
          const result = await personalizer.prepare();
          if (!result.ok) return;
          preview = result.preview;
        }

        const body = new FormData(this.form);
        for (const [key, value] of Array.from(body.entries())) {
          if (!key.startsWith('properties[')) continue;
          if (value === '' || (value instanceof File && value.size === 0)) body.delete(key);
        }
        const signature = this.signatureOf(body);
        if (preview) {
          body.append(
            `properties[_${personalizer.previewProperty}]`,
            new File([preview], 'previa.jpg', { type: 'image/jpeg' })
          );
        }

        const sections = window.theme.sectionIds();
        if (sections.length > 0) {
          body.append('sections', sections.join(','));
          body.append('sections_url', window.location.pathname);
        }

        let data = signature ? await this.addToSameLine(signature, Number(body.get('quantity')) || 1, sections) : null;
        if (!data) {
          const response = await fetch(`${window.theme.routes.cartAdd}.js`, {
            method: 'POST',
            headers: { Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
            body,
          });
          data = await response.json();

          if (!response.ok) {
            this.showError(data.description || data.message || this.labels.labelError);
            return;
          }
          if (signature) this.rememberLine(signature, data.key);
        }

        window.theme.track('add_to_cart', {
          currency: window.theme.currency,
          value: data.final_line_price / 100,
          items: [window.theme.toAnalyticsItem(data)],
        });

        if (window.theme.cartType === 'drawer' && document.querySelector('cart-drawer')) {
          window.theme.publishCart({ source: 'product-form', sections: data.sections, open: true });
          personalizer?.dispatchEvent(new CustomEvent('personalizer:added'));
          this.showAdded();
        } else {
          window.location.href = window.theme.routes.cart;
        }
      } catch (error) {
        console.error('[product-form]', error);
        this.showError(this.labels.labelError);
      } finally {
        this.setBusy(false);
        if (this.variantInput && !this.submitButton.classList.contains('is-added')) {
          const unavailable = this.submitLabel.textContent.trim() !== this.labels.labelAdd;
          this.submitButton.disabled = unavailable;
        }
      }
    }
  }

  if (!customElements.get('variant-picker')) customElements.define('variant-picker', VariantPicker);
  if (!customElements.get('product-form')) customElements.define('product-form', ProductForm);
})();
