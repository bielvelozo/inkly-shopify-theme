(function () {
  var still = window.matchMedia('(prefers-reduced-motion: reduce)');

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
  document.addEventListener('pointerdown', function (e) {
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

  document.querySelectorAll('.case__toggle').forEach(function (b) {
    b.addEventListener('click', function () {
      var open = b.getAttribute('aria-expanded') !== 'true';
      b.setAttribute('aria-expanded', String(open));
      b.closest('.case').classList.toggle('is-open', open);
    });
  });

  var dock = document.querySelector('.dock');
  var from = dock && document.getElementById(dock.dataset.from);
  var until = dock && document.getElementById(dock.dataset.until);
  var skip = dock && document.getElementById(dock.dataset.skip);
  if (dock && from && until) {
    var queued = false;
    var place = function () {
      queued = false;
      var h = window.innerHeight;
      var over = skip && skip.getBoundingClientRect();
      var on = from.getBoundingClientRect().bottom < 0 && until.getBoundingClientRect().top > h
        && !(over && over.top < h && over.bottom > h - dock.offsetHeight);
      dock.classList.toggle('is-on', on);
    };
    var queue = function () {
      if (!queued) { queued = true; requestAnimationFrame(place); }
    };
    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', queue, { passive: true });
  }

  function addDots() {
    document.querySelectorAll('.prices').forEach(function (track) {
      var cards = Array.prototype.slice.call(track.children);
      var dots = document.createElement('div');
      dots.className = 'dots';
      var buttons = cards.map(function (card, i) {
        var b = document.createElement('button');
        b.type = 'button';
        b.setAttribute('aria-label', card.querySelector('h3').textContent);
        b.setAttribute('aria-current', String(i === 0));
        b.addEventListener('click', function () {
          track.scrollTo({ left: card.offsetLeft - cards[0].offsetLeft, behavior: still.matches ? 'auto' : 'smooth' });
        });
        dots.appendChild(b);
        return b;
      });
      track.after(dots);
      var pending = false;
      var mark = function () {
        pending = false;
        var best = 0;
        cards.forEach(function (card, i) {
          var d = Math.abs(card.offsetLeft - cards[0].offsetLeft - track.scrollLeft);
          if (d < Math.abs(cards[best].offsetLeft - cards[0].offsetLeft - track.scrollLeft)) best = i;
        });
        buttons.forEach(function (b, i) { b.setAttribute('aria-current', String(i === best)); });
      };
      track.addEventListener('scroll', function () {
        if (!pending) { pending = true; requestAnimationFrame(mark); }
      }, { passive: true });
    });
  }

  function addCounters() {
    if (still.matches || !('IntersectionObserver' in window)) return;
    var parse = function (text) {
      var m = text.match(/^([\d.,]+)(.*)$/);
      var comma = m[1].indexOf(',') > -1;
      var parts = m[1].split(comma ? ',' : '.');
      return { value: parseFloat(m[1].replace(',', '.')), places: parts[1] ? parts[1].length : 0, sep: comma ? ',' : '.', suffix: m[2] };
    };
    var format = function (n, t) {
      return n.toFixed(t.places).replace('.', t.sep) + t.suffix;
    };
    document.querySelectorAll('.stats').forEach(function (list) {
      var stats = Array.prototype.map.call(list.querySelectorAll('.stat'), function (s) {
        var to = s.querySelector('.stat__to');
        var end = to.textContent;
        var target = parse(end);
        var start = parse(s.querySelector('.stat__from').textContent).value;
        var spoken = document.createElement('span');
        spoken.className = 'sr';
        spoken.textContent = end;
        to.after(spoken);
        to.setAttribute('aria-hidden', 'true');
        to.textContent = format(start, target);
        return { el: to, end: end, start: start, target: target };
      });
      var seen = new IntersectionObserver(function (entries) {
        if (!entries[0].isIntersecting) return;
        seen.disconnect();
        var t0 = performance.now();
        var step = function (now) {
          var p = Math.min(1, (now - t0) / 1100);
          var k = 1 - Math.pow(1 - p, 3);
          stats.forEach(function (s) {
            s.el.textContent = p < 1 ? format(s.start + (s.target.value - s.start) * k, s.target) : s.end;
          });
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }, { threshold: 0.6 });
      seen.observe(list);
    });
  }

  var idle = window.requestIdleCallback || function (f) { setTimeout(f, 300); };
  idle(function () {
    addDots();
    addCounters();
  }, { timeout: 1500 });
})();
