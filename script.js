const hamburger = document.querySelector('.menu-btn');
const navMenu = document.querySelector('#hamburger-menu');
const nav = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav-item');


let showMenu = false;

hamburger.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add('close');
    navMenu.classList.add('show');
    navMenu.classList.add('display-menu')
    nav.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    showMenu = true;
  } else {
    hamburger.classList.remove('close');
    navMenu.classList.remove('show');
    nav.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    showMenu = false;
  }
}
