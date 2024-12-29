import Swiper from 'swiper';
import 'swiper/css';
import {Navigation, Keyboard} from 'swiper/modules';


const toursSwiper = new Swiper('.reviews__swiper', {
  modules: [Navigation, Keyboard],
  direction: 'horizontal',
  speed: 500,
  navigation: {
    nextEl: '.reviews__next',
    prevEl: '.reviews__prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,

      centeredSlides: 1,

    },
    768: {
      slidesPerView: 'auto',

    },
    1366: {
      slidesPerView: 'auto',
      spaceBetween:105,

    },
  },
});

toursSwiper.slideReset();
