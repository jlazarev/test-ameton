const swiper = new Swiper('.swiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    500: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    // when window width is >= 480px
    800: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 640px
    1140: {
      slidesPerView: 4,
      spaceBetween: 24
    }
  }
})
