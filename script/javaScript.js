const swiper = new Swiper('.my-swiper-slider', {
  slidesPerView: 2,
  loop: false,
  spaceBetween: 30,
  navigation: {
    nextEl: '.my-swiper-btn-next',
    prevEl: '.my-swiper-btn-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});