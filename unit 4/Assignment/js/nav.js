/* nav.js — mobil menü açma/kapama
   ------------------------------------------------------------
   Menü CSS'te değil, JS'te kapatılıyor. Sebebi şu: JavaScript
   yüklenmezse menü açık kalır ve site yine gezilebilir olur.
   Kapalı başlangıç durumunu CSS'e yazsaydık, JS çalışmadığında
   kullanıcı menüye hiç ulaşamazdı.
   ------------------------------------------------------------ */

export function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');

  if (!toggle || !nav) return;

  // Başlangıçta kapat
  nav.dataset.collapsed = 'true';
  toggle.setAttribute('aria-expanded', 'false');

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';

    toggle.setAttribute('aria-expanded', String(!isOpen));
    nav.dataset.collapsed = String(isOpen);
  });

  // Escape ile kapat, odağı butona geri ver
  nav.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (toggle.getAttribute('aria-expanded') !== 'true') return;

    toggle.setAttribute('aria-expanded', 'false');
    nav.dataset.collapsed = 'true';
    toggle.focus();
  });
}
