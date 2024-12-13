import Swiper from 'swiper';
import 'swiper/css';
import {Pagination} from 'swiper/modules';


const heroSwiper = new Swiper('.hero__swiper', {
  modules: [Pagination],
  direction: 'horizontal',
  loop: true,
  speed: 500,
  slidesPerView: 1,
  pagination: {
    el: '.hero__pagination',
  },
  breakpoints: {
    1440: {
      pagination: {
        clickable: true,
      },
    },
  },
});

heroSwiper.slideReset();
