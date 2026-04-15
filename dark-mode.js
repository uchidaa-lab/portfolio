(function () {
  // ページ描画前にテーマを適用してちらつきを防ぐ
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  document.addEventListener('DOMContentLoaded', function () {
    // ── 星を生成 ──────────────────────────────
    var overlay = document.createElement('div');
    overlay.className = 'stars-overlay';
    overlay.setAttribute('aria-hidden', 'true');

    for (var i = 0; i < 88; i++) {
      var star = document.createElement('div');
      star.className = 'star';
      star.style.left   = (Math.random() * 100).toFixed(2) + '%';
      star.style.top    = (Math.random() * 68).toFixed(2) + '%';
      var size = (Math.random() * 2.2 + 0.8).toFixed(1);
      star.style.width  = size + 'px';
      star.style.height = size + 'px';
      star.style.animationDelay    = (Math.random() * 4).toFixed(2) + 's';
      star.style.animationDuration = (2 + Math.random() * 2.5).toFixed(2) + 's';
      overlay.appendChild(star);
    }
    document.body.appendChild(overlay);

    // ── トグルボタンを生成 ────────────────────
    var btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.setAttribute('aria-label', 'ダークモード切替');
    var dark = document.documentElement.getAttribute('data-theme') === 'dark';
    btn.textContent = dark ? '☀️' : '🌙';

    btn.addEventListener('click', function () {
      var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        btn.textContent = '🌙';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        btn.textContent = '☀️';
      }
    });

    document.body.appendChild(btn);
  });
})();
