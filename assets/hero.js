(() => {
  const form = document.querySelector('[data-hero-form]');
  if (!form) return;

  const input = form.querySelector('[data-hero-input]');
  const text = document.querySelector('[data-hero-print]');
  const path = document.querySelector('[data-hero-print-path]');
  const namesNode = document.querySelector('[data-hero-names]');
  const names = (namesNode ? JSON.parse(namesNode.textContent) : []).map((name) => name.trim()).filter(Boolean);
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const BASE_SIZE = 64;
  const MAX_LENGTH = 300;

  const render = (value) => {
    path.textContent = value;
    text.style.fontSize = `${BASE_SIZE}px`;
    const length = path.getComputedTextLength?.() || 0;
    if (length > MAX_LENGTH) text.style.fontSize = `${Math.max(26, (BASE_SIZE * MAX_LENGTH) / length)}px`;
  };

  let typing = !reduced && names.length > 0;
  let timer;
  const wait = (ms) => new Promise((resolve) => (timer = setTimeout(resolve, ms)));

  const loop = async () => {
    let index = 0;
    await wait(1400);
    while (typing) {
      const name = names[index % names.length];
      for (let i = path.textContent.length; i > 0 && typing; i -= 1) {
        render(path.textContent.slice(0, -1));
        await wait(32);
      }
      for (let i = 1; i <= name.length && typing; i += 1) {
        render(name.slice(0, i));
        await wait(75);
      }
      await wait(2200);
      index += 1;
    }
  };

  const stopTyping = () => {
    typing = false;
    clearTimeout(timer);
  };

  input.addEventListener('focus', stopTyping, { once: true });
  input.addEventListener('input', () => {
    stopTyping();
    render(input.value.trim() || names[0] || '');
  });

  render(names[0] || '');
  if (typing) {
    new IntersectionObserver(([entry], observer) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      loop();
    }).observe(form);
  }
})();
