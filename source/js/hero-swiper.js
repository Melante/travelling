import Swiper from 'swiper';
import 'swiper/css';
import {Keyboard, Navigation, Pagination} from 'swiper/modules';


const heroSwiper = new Swiper('.hero__swiper', {
  modules: [Pagination, Navigation, Keyboard],
  direction: 'horizontal',
  loop: true,
  speed: 500,
  slidesPerView: 1,
  pagination: {
    el: '.hero__pagination',
    bulletClass: 'hero__pagination-bullet',
    bulletActiveClass: 'hero__pagination-bullet--active',
    clickable: true
  },
  breakpoints: {
    1440: {
      pagination: {
        clickable: true,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
      slideToClickedSlide: true,
    },
  },
}

);


heroSwiper.slideReset();
