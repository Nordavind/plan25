document.addEventListener('DOMContentLoaded', () => {
  // Swiper Slider Header
  const headerSwiper = new Swiper('.swiper-header-hero', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
    autoHeight: true,
    nested: true,
    lazy: {
      loadPrevNext: true,
    },
  });

  const nextButtons = document.querySelectorAll('.btn-slide-next');
  const prevButtons = document.querySelectorAll('.btn-slide-prev');

  nextButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      headerSwiper.slideNext();
    });
  });

  prevButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      headerSwiper.slidePrev();
    });
  });

  // Swiper Projects Slider
  const projectsSlider = new Swiper('.swiper-projects-slider', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    autoHeight: true,
    spaceBetween: 60,
    lazy: {
      loadPrevNext: true,
    },
    on: {
      init: function () {
        renderProjectsPagination(this);
        updateProjectsPagination(this.realIndex);
      },
      slideChange: function () {
        updateProjectsPagination(this.realIndex);
      },
    },
  });

  function renderProjectsPagination(swiperInstance) {
    const container = document.querySelector('.projects-slider-pagination');
    if (!container) return;

    container.innerHTML = '';
    const slidesCount = swiperInstance.slides.length;

    for (let i = 0; i < slidesCount; i++) {
      const bullet = document.createElement('div');
      bullet.classList.add('projects-slider-bullet');
      bullet.dataset.index = i;
      bullet.addEventListener('click', () => {
        swiperInstance.slideTo(i);
      });
      container.appendChild(bullet);
    }
  }

  function updateProjectsPagination(activeIndex) {
    const bullets = document.querySelectorAll('.projects-slider-bullet');
    bullets.forEach((bullet, i) => {
      bullet.classList.toggle('active', i === activeIndex);
    });
  }
});