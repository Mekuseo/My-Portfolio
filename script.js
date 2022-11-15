const toggleBtn = document.querySelector('#hamburger-toggle-btn');
const hamburgerImg = document.querySelector('#hamburger-img');
const navMenu = document.querySelector('#hamburger-menu');
const menuOptions = navMenu.querySelectorAll('a');

function toggleMenu() {
  navMenu.classList.toggle('show-hamburger');
  console.log('click');

  if (hamburgerImg.classList.contains('hamburger')) {
    hamburgerImg.src = 'images/Icon - Cancel.png';
    hamburgerImg.classList.remove('hamburger');
  } else {
    hamburgerImg.src = 'images/Union.png';
    hamburgerImg.classList.add('hamburger');
  }
}

toggleBtn.addEventListener('click', toggleMenu);

menuOptions.forEach((item) => item.addEventListener('click', toggleMenu));
