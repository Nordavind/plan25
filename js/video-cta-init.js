document.addEventListener("DOMContentLoaded", function () {
  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  // Seleccionamos ambos videos
  const videoDesktop = document.querySelector(".video-desktop");
  const videoMobile = document.querySelector(".video-mobile");

  // Si es móvil, removemos el de escritorio
  if (isMobile) {
    if (videoDesktop) videoDesktop.remove();
  } else {
    if (videoMobile) videoMobile.remove();
  }
});
