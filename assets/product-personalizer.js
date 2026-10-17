(() => {
  const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
  const TEXT_POSITIONS = { top: 0.18, middle: 0.5, bottom: 0.82 };
  const EXPORT_SIZE = 900;
  const SVG_SIZE = 600;
  const KEY_STEP = 6;

  const luminance = (hex) => {
    const value = hex.replace('#', '');
    const full = value.length === 3 ? value.replace(/./g, '$&$&') : value.slice(0, 6);
    const channels = [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16) / 255);
    const [r, g, b] = channels.map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const contrast = (a, b) => {
    const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x);
    return (light + 0.05) / (dark + 0.05);
  };

  const rgbToHex = (rgb) => {
    const match = rgb.match(/\d+/g);
    if (!match) return rgb;
    return `#${match
      .slice(0, 3)
      .map((n) => Number(n).toString(16).padStart(2, '0'))
      .join('')}`;
  };

  const loadImage = (src, crossOrigin) =>
    new Promise((resolve, reject) => {
      const image = new Image();
      if (crossOrigin) image.crossOrigin = 'anonymous';
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = src;
    });

  class ProductPersonalizer extends HTMLElement {
    connectedCallback() {
      this.stage = document.getElementById(this.dataset.stageId);
      this.svg = this.stage?.querySelector('[data-mockup]');
      if (!this.svg) return;

      this.sectionId = this.dataset.stageId.replace('PersonalizerStage-', '');
      this.messages = JSON.parse(this.querySelector('[data-messages]').textContent);
      this.printCm = Number(this.dataset.printCm) || 10;
      this.minDpi = Number(this.dataset.minDpi) || 150;
      this.maxBytes = (Number(this.dataset.maxMb) || 15) * 1024 * 1024;

      const printGroup = this.svg.querySelector('[data-layer="print"]');
      const [x, y, w, h] = printGroup.dataset.printArea.split(' ').map(Number);
      this.area = { x, y, w, h };
      this.textEl = printGroup.querySelector('[data-text]');
      this.photoEl = printGroup.querySelector('[data-photo]');
      this.guideEl = printGroup.querySelector('[data-guide]');

      this.textInput = this.querySelector('[data-text-input]');
      this.textCount = this.querySelector('[data-text-count]');
      this.photoInput = this.querySelector('[data-photo-input]');
      this.photoName = this.querySelector('[data-photo-name]');
      this.photoTools = this.querySelector('[data-photo-tools]');
      this.zoomInput = this.querySelector('[data-zoom-input]');
      this.adjustInput = this.querySelector('[data-photo-adjust]');
      this.qualityEl = this.querySelector('[data-quality]');
      this.contrastEl = this.querySelector('[data-contrast]');
      this.errorEl = this.querySelector('[data-error]');
      this.dropzone = this.querySelector('[data-dropzone]');

      this.photo = null;
      this.offset = { x: 0, y: 0 };
      this.textState = null;
      this.requestedFonts = new Set();

      this.addEventListener('input', (event) => this.onInput(event));
      this.addEventListener('change', (event) => this.onChange(event));
      this.querySelector('[data-photo-remove]')?.addEventListener('click', () => this.removePhoto());
      this.bindDropzone();
      this.bindDrag();

      document.addEventListener('variant:change', (event) => {
        if (event.detail.sectionId !== this.sectionId || !event.detail.swatch) return;
        this.svg.style.color = event.detail.swatch;
        this.stage.dataset.tone = this.brightness(event.detail.swatch) < 110 ? 'dark' : 'light';
        this.render();
      });

      document.fonts?.addEventListener?.('loadingdone', () => this.render());

      const prefill = new URLSearchParams(location.search).get('text');
      if (prefill && this.textInput && !this.textInput.value) {
        this.textInput.value = prefill.slice(0, Number(this.textInput.maxLength) > 0 ? this.textInput.maxLength : 40);
      }
      this.render();
    }

    get previewProperty() {
      return this.messages.previewProperty;
    }

    onInput(event) {
      if (event.target === this.zoomInput) {
        this.renderPhoto();
        return;
      }
      if (event.target === this.textInput) this.clearError();
      this.render();
    }

    onChange(event) {
      if (event.target === this.photoInput) {
        this.readPhoto(this.photoInput.files[0]);
        return;
      }
      this.render();
    }

    bindDropzone() {
      if (!this.dropzone || !this.photoInput) return;
      ['dragenter', 'dragover'].forEach((type) =>
        this.dropzone.addEventListener(type, (event) => {
          event.preventDefault();
          this.dropzone.classList.add('is-dragover');
        })
      );
      ['dragleave', 'drop'].forEach((type) =>
        this.dropzone.addEventListener(type, () => this.dropzone.classList.remove('is-dragover'))
      );
      this.dropzone.addEventListener('drop', (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (!file) return;
        const transfer = new DataTransfer();
        transfer.items.add(file);
        this.photoInput.files = transfer.files;
        this.readPhoto(file);
      });
    }

    bindDrag() {
      let pointer = null;
      const onPrint = (event) => event.target.closest?.('[data-layer="print"]');

      // touch-action is ignored on SVG children, so a touch on the print area claims the gesture here and the rest of the mockup keeps scrolling the page.
      this.svg.addEventListener(
        'touchstart',
        (event) => {
          if (this.photo && onPrint(event)) event.preventDefault();
        },
        { passive: false }
      );

      this.svg.addEventListener('pointerdown', (event) => {
        if (!this.photo) return;
        if (event.pointerType === 'touch' && !onPrint(event)) return;
        pointer = { id: event.pointerId, x: event.clientX, y: event.clientY };
        this.svg.setPointerCapture(event.pointerId);
        this.stage.classList.add('is-dragging');
      });

      this.svg.addEventListener('pointermove', (event) => {
        if (!pointer || pointer.id !== event.pointerId) return;
        const ratio = SVG_SIZE / this.svg.getBoundingClientRect().width;
        this.offset.x += (event.clientX - pointer.x) * ratio;
        this.offset.y += (event.clientY - pointer.y) * ratio;
        pointer.x = event.clientX;
        pointer.y = event.clientY;
        this.renderPhoto();
      });

      const release = (event) => {
        if (!pointer || pointer.id !== event.pointerId) return;
        pointer = null;
        this.stage.classList.remove('is-dragging');
      };
      this.svg.addEventListener('pointerup', release);
      this.svg.addEventListener('pointercancel', release);

      this.svg.addEventListener('keydown', (event) => {
        if (!this.photo) return;
        const moves = {
          ArrowLeft: [-KEY_STEP, 0],
          ArrowRight: [KEY_STEP, 0],
          ArrowUp: [0, -KEY_STEP],
          ArrowDown: [0, KEY_STEP],
        };
        const move = moves[event.key];
        if (!move) return;
        event.preventDefault();
        this.offset.x += move[0];
        this.offset.y += move[1];
        this.renderPhoto();
      });
    }

    readPhoto(file) {
      this.clearError();
      if (!file) {
        this.removePhoto();
        return;
      }
      if (!ACCEPTED_TYPES.includes(file.type)) {
        this.removePhoto();
        this.showError(this.messages.fileType);
        return;
      }
      if (file.size > this.maxBytes) {
        this.removePhoto();
        this.showError(this.messages.fileSize);
        return;
      }

      const url = URL.createObjectURL(file);
      loadImage(url)
        .then((image) => {
          if (this.photo) URL.revokeObjectURL(this.photo.url);
          this.photo = { url, image, width: image.naturalWidth, height: image.naturalHeight, name: file.name };
          this.offset = { x: 0, y: 0 };
          if (this.zoomInput) this.zoomInput.value = '1';
          this.photoEl.setAttribute('href', url);
          this.photoEl.removeAttribute('display');
          this.photoTools.hidden = false;
          this.photoName.textContent = file.name;
          this.svg.setAttribute('tabindex', '0');
          this.stage.classList.add('has-photo');
          this.render();
        })
        .catch(() => {
          URL.revokeObjectURL(url);
          this.removePhoto();
          this.showError(this.messages.fileRead);
        });
    }

    removePhoto() {
      if (this.photo) URL.revokeObjectURL(this.photo.url);
      this.photo = null;
      if (this.photoInput) this.photoInput.value = '';
      this.photoEl.setAttribute('display', 'none');
      this.photoEl.removeAttribute('href');
      if (this.photoTools) this.photoTools.hidden = true;
      if (this.photoName) this.photoName.textContent = this.messages.photoCta;
      if (this.adjustInput) this.adjustInput.value = '';
      if (this.qualityEl) this.qualityEl.hidden = true;
      this.svg.removeAttribute('tabindex');
      this.stage.classList.remove('has-photo');
      this.render();
    }

    photoBox() {
      const { area, photo } = this;
      const zoom = Number(this.zoomInput?.value || 1);
      const cover = Math.max(area.w / photo.width, area.h / photo.height);
      const width = photo.width * cover * zoom;
      const height = photo.height * cover * zoom;
      const maxX = (width - area.w) / 2;
      const maxY = (height - area.h) / 2;
      this.offset.x = Math.min(maxX, Math.max(-maxX, this.offset.x));
      this.offset.y = Math.min(maxY, Math.max(-maxY, this.offset.y));
      return {
        x: area.x + (area.w - width) / 2 + this.offset.x,
        y: area.y + (area.h - height) / 2 + this.offset.y,
        width,
        height,
        zoom,
      };
    }

    renderPhoto() {
      if (!this.photo) return;
      const box = this.photoBox();
      this.photoEl.setAttribute('x', box.x.toFixed(2));
      this.photoEl.setAttribute('y', box.y.toFixed(2));
      this.photoEl.setAttribute('width', box.width.toFixed(2));
      this.photoEl.setAttribute('height', box.height.toFixed(2));

      if (this.adjustInput) {
        const dx = (this.offset.x / this.area.w) * 100;
        const dy = (this.offset.y / this.area.h) * 100;
        this.adjustInput.value = `zoom ${box.zoom.toFixed(2)}x; x ${dx.toFixed(1)}%; y ${dy.toFixed(1)}%`;
      }
      this.renderQuality(box);
    }

    renderQuality(box) {
      if (!this.qualityEl) return;
      const visiblePixels = this.photo.width * (this.area.w / box.width);
      const dpi = Math.round(visiblePixels / (this.printCm / 2.54));
      const low = dpi < this.minDpi;
      this.qualityEl.hidden = false;
      this.qualityEl.classList.toggle('is-low', low);
      this.qualityEl.textContent = (low ? this.messages.qualityLow : this.messages.qualityOk).replace('[dpi]', dpi);
    }

    currentFont() {
      const input = this.querySelector('[data-font-name]:checked');
      if (!input) return { name: 'sans-serif', fallback: '', weight: '400', style: 'normal' };
      return {
        name: input.dataset.fontName,
        fallback: input.dataset.fontFallback,
        weight: input.dataset.fontWeight,
        style: input.dataset.fontStyle,
      };
    }

    currentColor() {
      return this.querySelector('[data-color]:checked')?.dataset.color || '#1d1a16';
    }

    currentPosition() {
      return this.querySelector('[data-position]:checked')?.dataset.position || 'bottom';
    }

    fontShorthand(font, size) {
      const fallback = font.fallback ? `, ${font.fallback}` : '';
      return `${font.style} ${font.weight} ${size}px "${font.name}"${fallback}`;
    }

    render() {
      this.renderText();
      this.renderPhoto();
      const empty = !this.photo && !this.textState;
      this.guideEl.classList.toggle('is-visible', empty);
      this.renderStageTag(empty);
    }

    renderStageTag(empty) {
      const tag = this.stage.querySelector('[data-stage-tag]');
      if (!tag) return;
      const lowQuality = this.qualityEl && !this.qualityEl.hidden && this.qualityEl.classList.contains('is-low');
      const ready = !empty && !lowQuality;
      tag.classList.toggle('is-ready', ready);
      tag.textContent = ready ? tag.dataset.labelReady : tag.dataset.labelLive;
    }

    brightness(color) {
      const hex = color.replace('#', '');
      if (!/^[0-9a-f]{6}$/i.test(hex)) return 255;
      const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));
      return (r * 299 + g * 587 + b * 114) / 1000;
    }

    renderText() {
      const text = this.textInput?.value.trim() ?? '';
      const max = Number(this.textInput?.maxLength) || 0;

      if (this.textCount && max > 0) {
        const left = max - (this.textInput.value.length || 0);
        this.textCount.textContent = this.messages.charsLeft.replace('[count]', left);
      }

      if (!text) {
        this.textEl.textContent = '';
        this.textState = null;
        if (this.contrastEl) this.contrastEl.hidden = true;
        return;
      }

      const font = this.currentFont();
      const color = this.currentColor();
      const { area } = this;
      const baseSize = area.h * 0.16;
      const y = area.y + area.h * TEXT_POSITIONS[this.currentPosition()];

      this.textEl.textContent = text;
      this.textEl.setAttribute('x', area.x + area.w / 2);
      this.textEl.setAttribute('y', y);
      this.textEl.setAttribute('fill', color);
      this.textEl.style.fontFamily = `"${font.name}", ${font.fallback}`;
      this.textEl.style.fontWeight = font.weight;
      this.textEl.style.fontStyle = font.style;
      this.textEl.style.fontSize = `${baseSize}px`;

      // A CSS transition on font-size would make this measure the previous size, so scale by the size actually laid out.
      const current = parseFloat(getComputedStyle(this.textEl).fontSize) || baseSize;
      const length = this.textEl.getComputedTextLength() * (baseSize / current);
      const fit = length > 0 ? Math.min(1, (area.w * 0.86) / length) : 1;
      const size = Math.round(baseSize * fit * 100) / 100;
      this.textEl.style.fontSize = `${size}px`;
      this.textState = { text, font, color, size, x: area.x + area.w / 2, y };

      const shorthand = this.fontShorthand(font, 16);
      if (document.fonts && !this.requestedFonts.has(shorthand) && !document.fonts.check(shorthand, text)) {
        this.requestedFonts.add(shorthand);
        document.fonts.load(shorthand, text).then(() => this.renderText());
      }

      if (this.contrastEl) {
        const base = rgbToHex(getComputedStyle(this.svg).color);
        this.contrastEl.hidden = contrast(base, color) >= 1.8;
      }
    }

    showError(message) {
      this.errorEl.textContent = message;
      this.errorEl.hidden = false;
    }

    clearError() {
      this.errorEl.hidden = true;
      this.errorEl.textContent = '';
    }

    async prepare() {
      this.clearError();
      if (this.textInput?.required && !this.textInput.value.trim()) {
        this.showError(this.messages.textRequired);
        this.textInput.focus();
        return { ok: false };
      }
      if (this.photoInput?.required && !this.photo) {
        this.showError(this.messages.photoRequired);
        this.dropzone?.focus();
        return { ok: false };
      }
      if (!this.photo && !this.textState) return { ok: true, preview: null };

      try {
        return { ok: true, preview: await this.exportPreview() };
      } catch (error) {
        console.warn('[personalizer] preview export failed', error);
        return { ok: true, preview: null };
      }
    }

    async drawLayer(ctx, layer) {
      const source = this.svg.querySelector(`[data-layer="${layer}"]`);
      if (!source) return;

      const mockupImage = source.querySelector('image');
      if (mockupImage) {
        const image = await loadImage(mockupImage.getAttribute('href'), true);
        const scale = Math.min(SVG_SIZE / image.naturalWidth, SVG_SIZE / image.naturalHeight);
        const width = image.naturalWidth * scale;
        const height = image.naturalHeight * scale;
        ctx.drawImage(image, (SVG_SIZE - width) / 2, (SVG_SIZE - height) / 2, width, height);
        return;
      }

      const clone = this.svg.cloneNode(true);
      clone.querySelectorAll('[data-layer]').forEach((group) => {
        if (group.dataset.layer !== layer) group.remove();
      });
      clone.querySelector('title')?.remove();
      clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      clone.setAttribute('width', SVG_SIZE);
      clone.setAttribute('height', SVG_SIZE);
      clone.setAttribute('style', `color: ${getComputedStyle(this.svg).color}`);
      const markup = new XMLSerializer().serializeToString(clone);
      const image = await loadImage(`data:image/svg+xml;charset=utf-8,${encodeURIComponent(markup)}`);
      ctx.drawImage(image, 0, 0, SVG_SIZE, SVG_SIZE);
    }

    async exportPreview() {
      const canvas = document.createElement('canvas');
      canvas.width = EXPORT_SIZE;
      canvas.height = EXPORT_SIZE;
      const ctx = canvas.getContext('2d');
      const background = getComputedStyle(this.stage).backgroundColor;
      ctx.fillStyle = background && !background.endsWith(', 0)') ? background : '#ffffff';
      ctx.fillRect(0, 0, EXPORT_SIZE, EXPORT_SIZE);
      ctx.scale(EXPORT_SIZE / SVG_SIZE, EXPORT_SIZE / SVG_SIZE);

      await this.drawLayer(ctx, 'base');

      const { area } = this;
      ctx.save();
      ctx.beginPath();
      ctx.roundRect(area.x, area.y, area.w, area.h, 8);
      ctx.clip();
      if (this.photo) {
        const box = this.photoBox();
        ctx.drawImage(this.photo.image, box.x, box.y, box.width, box.height);
      }
      if (this.textState) {
        const { text, font, color, size, x, y } = this.textState;
        ctx.font = this.fontShorthand(font, size);
        await document.fonts?.load(ctx.font, text);
        ctx.fillStyle = color;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, x, y);
      }
      ctx.restore();

      await this.drawLayer(ctx, 'shade');

      return new Promise((resolve, reject) =>
        canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error('empty blob'))), 'image/jpeg', 0.88)
      );
    }
  }

  if (!customElements.get('product-personalizer')) {
    customElements.define('product-personalizer', ProductPersonalizer);
  }
})();
