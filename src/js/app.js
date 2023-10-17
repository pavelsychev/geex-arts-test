"use strict";

// Импорт webpack
 import * as flsFunctions from "./modules/function.js";
 flsFunctions.isWebp();
 import Swiper, { Pagination, EffectCoverflow } from 'swiper';

 import * as gsapJS from "./modules/gsap.js";



  const urlParams = new URLSearchParams(window.location.search);
const slideId = urlParams.get('slideId');
// Swiper
Swiper.use([Pagination, EffectCoverflow]);
const swiper = new Swiper( ".swiper", {
 slidesPerView: 1,
 effect: 'coverflow',
 grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2,
  coverflowEffect: {
    rotate: 10,
    stretch: 10,
    depth: 50,
    modifier: 2,
    slideShadows: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
});

if (slideId) {
  const slideIndex = parseInt(slideId.substring(5)) - 1;
  if (!isNaN(slideIndex) && slideIndex >= 0 && slideIndex < swiper.slides.length) {
    swiper.slideTo(slideIndex);
  }
}
// sidebar
document.addEventListener("DOMContentLoaded", function() {
  document.body.classList.add("collapsed");
});

const expand_btn = document.querySelector(".expand-btn");

expand_btn.addEventListener("click", () => {
  document.body.classList.toggle("collapsed");
});
