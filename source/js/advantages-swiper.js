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
    '(min-width: 1440px)',
    '.advantages__swiper',
    {
      modules: [Navigation, Keyboard],
      direction: 'horizontal',
      speed: 500,
      loop: true,
      navigation: {
        nextEl: '.advantages__next',
        prevEl: '.advantages__prev',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
      initialSlide: 1,
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween:30,
    }
  );

});

// const advantagesSwiper = new Swiper('.advantages__swiper', {
//   breakpoints: {
//     1366: {
//       modules: [Navigation, Keyboard],
//       direction: 'horizontal',
//       speed: 500,
//       navigation: {
//         nextEl: '.advantages__next',
//         prevEl: '.advantages__prev',
//       },
//       keyboard: {
//         enabled: true,
//         onlyInViewport: true,
//         pageUpDown: true,
//       },
//       slidesPerView: 'auto',
//       spaceBetween:105,
//     },
//   },// });


