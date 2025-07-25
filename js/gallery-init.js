// Funcion modular de galerias
function inicializarGaleria({ selector, jsonUrl, galleryName }) {
  const grid = document.querySelector(selector);
  if (!grid) return;

  // funcion fisher-yates (seleccion aleatoria)
  function mezclarArray(arr) {
    const copia = arr.slice();
    for (let i = copia.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
  }

  // Carga JSON, mezcla data, construye DOM
  fetch(jsonUrl)
    .then(res => res.json())
    .then(data => {
      const dataRandom = mezclarArray(data);

      dataRandom.forEach(img => {
        const div = document.createElement('div');
        div.classList.add('masonry-item');
        div.innerHTML = `
          <a href="${img.src}" class="glightbox" data-gallery="${galleryName}">
            <img src="${img.src}" alt="${img.alt}">
          </a>
        `;
        grid.appendChild(div);
      });

      // Esperar carga de imagenes
      imagesLoaded(grid, () => {
        new Masonry(grid, {
          itemSelector: '.masonry-item',
          columnWidth: '.masonry-item',
          percentPosition: true
        });

        GLightbox({
          selector: `${selector} .glightbox`,
          onOpen: () => {
            const activeElement = document.activeElement;
            if (activeElement) activeElement.blur();
          }
        });
      });
    })
    .catch(err => {
      console.error(`Error cargando la galería desde ${jsonUrl}`, err);
    });
}

// Inicializar galerias
document.addEventListener('DOMContentLoaded', () => {
  inicializarGaleria({
    selector: '#galeria-bernstein',
    jsonUrl: '/json/bernstein-gallery.json',
    galleryName: 'galeria-bernstein'
  });
});