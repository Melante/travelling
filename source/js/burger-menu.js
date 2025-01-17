const button = document.querySelector('.header__button');
const menuBurger = document.querySelector('.header__menu');
const menu = document.querySelector('.header__nav');
const body = document.querySelector('.page__body');
const menuItem = document.querySelectorAll('.header__item');

button.onclick = function() {
  menu.classList.toggle('header__nav-open');
  menuBurger.classList.toggle('header__button-close');
  body.classList.toggle('page__body-menu');
  body.style.overflow = 'hidden';
};

menuItem.forEach((item) => {
  item.onclick = function(evt) {
    if (evt.target.closest('.header__item')) {
      menu.classList.remove('header__nav-open');
      menuBurger.classList.remove('header__button-close');
      body.classList.remove('page__body-menu');
      body.style.overflow = 'overlay';
    }
  };
});
