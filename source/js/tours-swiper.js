import Swiper from 'swiper';
import 'swiper/css';
import {Navigation} from 'swiper/modules';


const toursSwiper = new Swiper('.tours__swiper', {
  modules: [Navigation],
  direction: 'horizontal',
  speed: 500,
  navigation: {
    nextEl: '.tours__next',
    prevEl: '.tours__prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween:15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween:18,

    },
    1366: {
      slidesPerView: 3,
      spaceBetween:30,
    },
  },
});

toursSwiper.slideReset();
