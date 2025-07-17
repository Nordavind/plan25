// document.addEventListener('DOMContentLoaded', () => {
//   const panels = document.querySelectorAll('.projects-accord-item');

//   function expandPanel(panelToExpand) {
//     panels.forEach(panel => {
//       const isTarget = panel === panelToExpand;
//       const expanded = panel.querySelector('.projects-accord-expanded');
//       const compact = panel.querySelector('.projects-accord-compact');

//       if (isTarget) {
//         gsap.to(panel, { flex: 3, duration: 0.6, ease: "power2.out" });
//         expanded.style.display = 'flex';
//         compact.style.display = 'none';
//       } else {
//         gsap.to(panel, { flex: 0, minWidth: 100, duration: 0.6, ease: "power2.out" });
//         expanded.style.display = 'none';
//         compact.style.display = 'flex';
//       }
//     });
//   }

//   panels.forEach(panel => {
//     panel.addEventListener('mouseenter', () => {
//       expandPanel(panel);
//     });
//   });

//   // Estado inicial: primer panel expandido
//   expandPanel(panels[0]);
// });

document.addEventListener('DOMContentLoaded', () => {
  const panels = document.querySelectorAll('.projects-accord-item');

  function expandPanel(panelToExpand) {
    panels.forEach(panel => {
      const isTarget = panel === panelToExpand;
      const expanded = panel.querySelector('.projects-accord-expanded');
      const compact = panel.querySelector('.projects-accord-compact');

      if (isTarget) {
        gsap.to(panel, { flex: 3, duration: 0.6, ease: "power2.out" });
        expanded.style.display = 'flex';
        compact.style.display = 'none';
      } else {
        gsap.to(panel, { flex: 0, minWidth: 100, duration: 0.6, ease: "power2.out" });
        expanded.style.display = 'none';
        compact.style.display = 'flex';
      }
    });
  }

  panels.forEach(panel => {
    panel.addEventListener('click', () => {
      expandPanel(panel);
    });
  });

  // Estado inicial: primer panel expandido
  expandPanel(panels[0]);
});