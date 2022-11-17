const toggleBtn = document.querySelector('#hamburger-toggle-btn');
const hamburgerImg = document.querySelector('#hamburger-img');
const navMenu = document.querySelector('#hamburger-menu');
const menuOptions = navMenu.querySelectorAll('a');
const body = document.querySelector('body');
const portfolioGrid = document.querySelector('#portfolio-grid');
const popup = document.querySelector('#popup');
const portfolioButtons = document.querySelectorAll('.btn');
const workBtn = document.querySelector('#work-btn');

portfolioButtons.forEach((button) => {
  portfolioButtons.addEventListener('click', () => {
    popup.classList.add('open-work-card');
  })
});

workBtn.addEventListener('click', () => {
  body.classList.remove('open-work-card');
});


function showProjects(projectObject) {
  const cardDiv = document.createElement('div');
  const imgDiv = document.createElement('div');
  const image = document.createElement('img');
  const textDiv = document.createElement('div');
  const headerDiv = document.createElement('div');
  const title = document.createElement('h2');
  const headerList = document.createElement('div');
  const nameDiv = document.createElement('div');
  const counterImg = document.createElement('img');
  const devDiv = document.createElement('div');
  const yearDiv = document.createElement('div');
  const description = document.createElement('p');
  const techDiv = document.createElement('div');
  const techList = document.createElement('ul');
  const button = document.createElement('button');

  cardDiv.classList.add('card');
  imgDiv.classList.add('main-image');
  image.src = projectObject.image;
  textDiv.classList.add('card-text');
  title.innerText = projectObject.name;
  headerList.classList.add('sub-header-list');
  nameDiv.classList.add('main-sub1');
  nameDiv.innerText = 'Canopy';
  counterImg.src = './images/Counter.png';
  devDiv.classList.add('main-sub');
  devDiv.innerText = 'Back End Dev';
  yearDiv.classList.add('main-sub');
  yearDiv.innerText = '2015';

  description.innerText = projectObject.description;
  button.classList.add('btn');

  // Adding header elements
  const headerListElements = [nameDiv, counterImg, devDiv, counterImg, yearDiv];
  for (let elem of headerListElements) {
    headerList.appendChild(elem);
  }
  headerDiv.appendChild(title);
  headerDiv.appendChild(headerList);

  // Adding technologies from array
  for (let item of projectObject.technologies) {
    const listElem = document.createElement('li');
    listElem.innerText = item;
    techList.appendChild(listElem);
  }
  techDiv.appendChild(techList);
  // Button
  button.innerHTML = `<svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
  <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line"/>
  <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line"/>
  </svg><span class="btn-color">Get in Touch</span>`;

  // Image div
  imgDiv.append(image);

  // Card Text Div
  textDiv.appendChild(headerDiv);
  textDiv.appendChild(description);
  textDiv.appendChild(techDiv);
  textDiv.appendChild(button);

  // Main card Div
  cardDiv.appendChild(imgDiv);
  cardDiv.appendChild(textDiv);

  // Grid Div
  portfolioGrid.append(cardDiv);
}

const projectList = [
  {
    name: 'Project Title',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/Snapshoot Portfolio.png',
    technologies: ['html', 'css', 'js'],
    live_link: '#',
    source_link: '#',
  },
  {
    name: 'Project Title',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/Snapshoot Portfolio.png',
    technologies: ['html', 'css', 'js'],
    live_link: '#',
    source_link: '#',
  },
  {
    name: 'Project Title',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/Snapshoot Portfolio.png',
    technologies: ['html', 'css', 'js'],
    live_link: '#',
    source_link: '#',
  },
  {
    name: 'Project Title',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/Snapshoot Portfolio.png',
    technologies: ['html', 'css', 'js'],
    live_link: '#',
    source_link: '#',
  },
];

for (let project of projectList) {
  showProjects(project);
}

function toggleMenu() {
  navMenu.classList.toggle('show-hamburger');
  body.classList.toggle('fixed');
  body.classList.toggle('blur');

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

if (hamburgerImg.is(':visible')) {
  body.addClass('fixed-position');
} else {
  body.removeClass('fixed-position');
}
