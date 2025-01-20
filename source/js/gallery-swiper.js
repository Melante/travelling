import Swiper from 'swiper';
import 'swiper/css';
import {Navigation, Keyboard} from 'swiper/modules';

window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) {
          swiper.destroy(true, true);
        }

      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  };


  resizableSwiper(
    '(max-width: 1439px)',
    '.gallery__swiper',
    {
      modules: [Navigation, Keyboard],
      direction: 'horizontal',
      speed: 500,
      loop: true,
      navigation: {
        nextEl: '.gallery__next',
        prevEl: '.gallery__prev',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },

      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween:6,
        },
        768: {
          slidesPerView: 3,
          spaceBetween:5,
        }
      }
    }
  );
});


