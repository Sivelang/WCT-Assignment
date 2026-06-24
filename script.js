// Theme
const themeKey = 'monster-theme';
const saved = localStorage.getItem(themeKey);
if (saved === 'dark') document.documentElement.classList.add('dark');

function toggleTheme() {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem(themeKey, isDark ? 'dark' : 'light');
}

document.addEventListener('DOMContentLoaded', () => {
  const tBtn = document.getElementById('themeToggle');
  if (tBtn) tBtn.addEventListener('click', toggleTheme);

  // Scroll reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Active nav
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // Homepage can image carousel
  const canImages = [
    'assets/can.png',
    'assets/pink.png',
    'assets/blue.png',
    'assets/bluesky.png',
    'assets/darkblue.png',
    'assets/darkgreen.png',
    'assets/orange.png',
    'assets/purple.png'
  ];
  const canImgEl = document.querySelector('.hero-can');
  const prevBtn = document.getElementById('prevCan');
  const nextBtn = document.getElementById('nextCan');
  let canIndex = canImages.indexOf(canImgEl?.getAttribute('src'));
  if (canIndex === -1) canIndex = 0;

  function updateCanImage() {
    if (!canImgEl) return;
    canImgEl.setAttribute('src', canImages[canIndex]);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      canIndex = (canIndex - 1 + canImages.length) % canImages.length;
      updateCanImage();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      canIndex = (canIndex + 1) % canImages.length;
      updateCanImage();
    });
  }

  // Product page carousel (uses same canImages list)
  const productImgEl = document.querySelector('.product-main');
  const productPrev = document.getElementById('productPrev');
  const productNext = document.getElementById('productNext');
  let productIndex = canImages.indexOf(productImgEl?.getAttribute('src'));
  if (productIndex === -1) productIndex = 0;

  function updateProductImage() {
    if (!productImgEl) return;
    productImgEl.setAttribute('src', canImages[productIndex]);
  }

  if (productPrev) {
    productPrev.addEventListener('click', () => {
      productIndex = (productIndex - 1 + canImages.length) % canImages.length;
      updateProductImage();
    });
  }

  if (productNext) {
    productNext.addEventListener('click', () => {
      productIndex = (productIndex + 1) % canImages.length;
      updateProductImage();
    });
  }

  // Contact form removed
});
