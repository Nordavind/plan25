// Swiper General
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // autoplay: {
  //     delay: 4000,
  //     disableOnInteraction: false,
  // },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  // Lazyload
   lazy: {
    loadPrevNext: true,
  },
});

// Botones personalizados
const nextButtons = document.querySelectorAll('.btn-slide-next');
const prevButtons = document.querySelectorAll('.btn-slide-prev');

nextButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    swiper.slideNext();
  });
});

prevButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    swiper.slidePrev();
  });
});