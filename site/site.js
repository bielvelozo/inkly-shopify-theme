(function () {
  var warmed = false;
  function warm() {
    if (warmed) return;
    warmed = true;
    var l = document.createElement('link');
    l.rel = 'preconnect';
    l.href = 'https://www.youtube-nocookie.com';
    document.head.appendChild(l);
  }
  document.addEventListener('pointerover', function (e) {
    if (e.target.closest && e.target.closest('a[data-yt]')) warm();
  }, { passive: true });
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[data-yt]');
    if (!a || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    var box = document.createElement('div');
    box.className = 'video';
    var f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/' + a.dataset.yt + '?autoplay=1&mute=1&rel=0&playsinline=1';
    f.title = a.dataset.title;
    f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    f.allowFullscreen = true;
    box.appendChild(f);
    a.replaceWith(box);
    f.focus();
  });
})();
