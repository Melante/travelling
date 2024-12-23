import Swiper from 'swiper';
import 'swiper/css';
import {Keyboard, Navigation, Pagination} from 'swiper/modules';


const heroSwiper = new Swiper('.hero__swiper', {
  modules: [Pagination, Navigation, Keyboard],
  direction: 'horizontal',
  loop: true,
  speed: 500,
  slidesPerView: 1,
  centeredSlides: 1,
  pagination: {
    el: '.hero__pagination',
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
