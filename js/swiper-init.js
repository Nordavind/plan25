document.addEventListener('DOMContentLoaded', () => {
  // Slider header
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

  // Slider header interior
  const headerIntSwiper = new Swiper('.swiper-header-int', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    nested: true,
    lazy: {
      loadPrevNext: true,
    },
  });

  const nextButtonsInt = document.querySelectorAll('.btn-slide-next');
  const prevButtonsInt = document.querySelectorAll('.btn-slide-prev');

  nextButtonsInt.forEach(btn => {
    btn.addEventListener('click', () => {
      headerIntSwiper.slideNext();
    });
  });

  prevButtonsInt.forEach(btn => {
    btn.addEventListener('click', () => {
      headerIntSwiper.slidePrev();
    });
  });

  // Projects slider
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

  // Plant slider
  const plantSliderSwiper = new Swiper('.swiper-plant-slider', {
    direction: 'horizontal',
    loop: true,
    autoHeight: true,
    spaceBetween: 60,
    lazy: {
      loadPrevNext: true,
    },
  });

  const nextButtonPlantSlider = document.querySelectorAll('.btn-plant-next');
  const prevButtonPlantSlider = document.querySelectorAll('.btn-plant-prev');

  nextButtonPlantSlider.forEach(btn => {
    btn.addEventListener('click', () => {
      plantSliderSwiper.slideNext();
    });
  });

  prevButtonPlantSlider.forEach(btn => {
    btn.addEventListener('click', () => {
      plantSliderSwiper.slidePrev();
    });
  });

  // Image slider
  const imgSliderSwiper = new Swiper('.swiper-img-slider', {
    direction: 'horizontal',
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    lazy: {
      loadPrevNext: true,
    },
  });
});