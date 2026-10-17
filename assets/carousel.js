(() => {
  class ScrollCarousel extends HTMLElement {
    connectedCallback() {
      this.track = this.querySelector('[data-track]');
      this.prev = this.querySelector('[data-prev]');
      this.next = this.querySelector('[data-next]');
      if (!this.track) return;

      this.prev?.addEventListener('click', () => this.step(-1));
      this.next?.addEventListener('click', () => this.step(1));
      this.track.addEventListener('scroll', () => this.update(), { passive: true });
      window.addEventListener('resize', () => this.update(), { passive: true });
      new IntersectionObserver(([entry], observer) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        this.update();
      }).observe(this);
    }

    step(direction) {
      const card = this.track.firstElementChild;
      if (!card) return;
      const gap = parseFloat(getComputedStyle(this.track).columnGap) || 0;
      const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: smooth ? 'smooth' : 'auto' });
    }

    update() {
      const max = this.track.scrollWidth - this.track.clientWidth - 2;
      if (this.prev) this.prev.disabled = this.track.scrollLeft <= 2;
      if (this.next) this.next.disabled = this.track.scrollLeft >= max;
    }
  }

  if (!customElements.get('scroll-carousel')) customElements.define('scroll-carousel', ScrollCarousel);
})();
