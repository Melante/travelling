import Swiper from 'swiper';
import 'swiper/css';
import {Navigation, Keyboard} from 'swiper/modules';

const swiperWrapper = document.querySelector('.advantages__wrapper');
const slides = swiperWrapper.querySelectorAll('.advantages__slide');

let isSlidesDuplicated = false;

function duplicateSlides() {
  if (isSlidesDuplicated) {
    return;
  }

  slides.forEach((slide) => {
    const clonedSlide = slide.cloneNode(true);
    clonedSlide.classList.add('cloned');
    swiperWrapper.appendChild(clonedSlide);
  });

  isSlidesDuplicated = true;
}

if (window.innerWidth >= 1440) {
  duplicateSlides();
}

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
      initialSlide: 2,
      slidesPerView: 'auto',
      slidesPerGroup: 2,
      centeredSlides: true,
      spaceBetween:30,
      loopAddBlankSlides: false,

    }
  );

});


