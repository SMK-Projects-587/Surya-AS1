import '../scss/main.scss';
const hamburger = document.querySelector('.navbar__hamburger');
const links = document.querySelector('.navbar__links');
hamburger.addEventListener('click', function () {
  links.classList.toggle('is-open');
  hamburger.classList.toggle('is-active');
});
