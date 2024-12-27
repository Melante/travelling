import Swiper from 'swiper';
import 'swiper/css';
import {Navigation, Pagination, Keyboard} from 'swiper/modules';


const toursSwiper = new Swiper('.trainer__swiper', {
  modules: [Navigation, Pagination, Keyboard],
  direction: 'horizontal',
  speed: 500,
  navigation: {
    nextEl: '.trainer__next',
    prevEl: '.trainer__prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween:15,
      initialSlide: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween:20,

    },
    1366: {
      slidesPerView: 4,
      spaceBetween:20,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
    },
  },
});

toursSwiper.slideReset();
