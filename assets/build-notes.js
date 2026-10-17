(() => {
  const videos = document.querySelectorAll('.build-piece__video');
  if (!videos.length || !('IntersectionObserver' in window)) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const pausedByUser = new WeakSet();
  const pausedByScroll = new WeakSet();

  videos.forEach((video) => {
    video.addEventListener('pause', () => {
      if (pausedByScroll.has(video)) pausedByScroll.delete(video);
      else pausedByUser.add(video);
    });
    video.addEventListener('play', () => pausedByUser.delete(video));
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          if (!pausedByUser.has(target)) target.play().catch(() => {});
        } else if (!target.paused) {
          pausedByScroll.add(target);
          target.pause();
        }
      });
    },
    { threshold: 0.45 }
  );
  videos.forEach((video) => observer.observe(video));
})();
