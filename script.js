const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navMenu');
const navRight  = document.getElementById('navRight');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('open');
  navRight.classList.toggle('open');
});

// Fecha ao clicar em link
navMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
    navRight.classList.remove('open');
  });
});
