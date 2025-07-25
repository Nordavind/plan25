document.addEventListener("DOMContentLoaded", function () {

  const observerTrigger = document.getElementById('observerTrigger');
  const navbarFixed = document.querySelector('.navbar-fixed');
  let isObserverTriggerOutOfView = false;
  let isInsideContact = false;

  // Muestra navbar
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        isObserverTriggerOutOfView = true;
      } else {
        isObserverTriggerOutOfView = false;
      }
    });
  });

  // Ejecuta el observer
  observer.observe(observerTrigger);

  // Detecta si esta dentro del formulario
  const contactSection = document.querySelector('.contact-main');
  if (contactSection) {
    const observerContact = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isInsideContact = true;
        } else {
          isInsideContact = false;
        }
      });
    });
    observerContact.observe(contactSection);
  }

  // Esconde navbar en scroll
  let lastScrollTop = 0;

  const handleScroll = () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (isInsideContact) {
      navbarFixed.classList.remove('show');
    } else if (isObserverTriggerOutOfView) {
      if (currentScroll > lastScrollTop) {
        navbarFixed.classList.remove('show');
      } else {
        navbarFixed.classList.add('show');
      }
    } else {
      navbarFixed.classList.remove('show');
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

  // Ejecuta una vez para setear estado inicial bien
  handleScroll();
});
