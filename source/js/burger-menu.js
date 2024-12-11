const button = document.querySelector('.header__button');
const menuBurger = document.querySelector('.header__menu');
const menu = document.querySelector('.header__nav');

button.onclick = function() {
  menu.classList.toggle('header__nav-open');
  menuBurger.classList.toggle('header__button-close');
};
