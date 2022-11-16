const toggleBtn = document.querySelector('#hamburger-toggle-btn');
const hamburgerImg = document.querySelector('#hamburger-img');
const navMenu = document.querySelector('#hamburger-menu');
const menuOptions = navMenu.querySelectorAll('a');
const body = document.querySelector('body');
const form = document.querySelector('.contact-form');
const emailInput = document.querySelector('#email');
const errorMsg = document.querySelector('#error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    errorMsg.textContent = 'Please enter your email in all lowercase!';
  } else {
    errorMsg.textContent = '';
    form.submit();
  }
});

function toggleMenu() {
  navMenu.classList.toggle('show-hamburger');
  body.classList.toggle('fixed-position');
  navMenu.classList.toggle('blur');

  if (hamburgerImg.classList.contains('hamburger')) {
    hamburgerImg.src = 'images/Icon - Cancel.png';
    hamburgerImg.classList.remove('hamburger');
  } else {
    hamburgerImg.src = 'images/Union.png';
    hamburgerImg.classList.add('hamburger');
  }
}

toggleBtn.addEventListener('click', toggleMenu);

menuOptions.forEach((item) =>
  item.addEventListener('click', () => {
    if (!hamburgerImg.classList.contains('hamburger')) toggleMenu();
  })
);
