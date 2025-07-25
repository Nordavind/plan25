document.addEventListener("DOMContentLoaded", function () {

  const observerTrigger = document.getElementById('observerTrigger');
  const navbarFixed = document.querySelector('.navbar-fixed');
  let isObserverTriggerOutOfView = false;

  // Navbar show
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        navbarFixed.classList.add('show');
        isObserverTriggerOutOfView = true;
      } else {
        isObserverTriggerOutOfView = false;
        navbarFixed.classList.remove('show');
      }
    });
  });

  // Ejecuta el observer
  observer.observe(observerTrigger);

  // Navbar hide on sroll
  let lastScrollTop = 0;

  const handleScroll = () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (isObserverTriggerOutOfView) {
      if (currentScroll > lastScrollTop) {
        navbarFixed.classList.remove('show');
      } else {
        navbarFixed.classList.add('show');
      }
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  };

  // Debounce para mejorar rendimiento
  const debounce = (func, wait) => {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  window.addEventListener('scroll', debounce(handleScroll, 10));
});