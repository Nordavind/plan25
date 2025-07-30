document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navDeploy");
  const navLink = document.getElementById('navLink');
  const navList = navbar.querySelector('ul');

  const toggleNavBar = (navbarElement, navLink) => {
      navLink.classList.toggle("active");
      navbarElement.classList.toggle("open-c");
  };

  navLink.addEventListener('click', () => toggleNavBar(navbar, navLink));

  navList.addEventListener('click', (event) => {
      if (event.target.tagName === 'A' || event.target.tagName === 'BUTTON') {
          toggleNavBar(navbar, navLink);
      }
  });
});