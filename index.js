const menuBtn = document.getElementById('menu-button');
const nav = document.getElementById('nav-menu');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});
