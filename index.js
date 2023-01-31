// Modal

const menu = document.getElementById('burger-menu');
const modal = document.getElementById('modal');
const body = document.querySelector('body');
const exitBtn = document.getElementById('exit-button');
const modalLnks = document.querySelectorAll('.modal__navigation__li');
const hero = document.getElementById('hero');
const header = document.querySelector('header');

menu.addEventListener('click', (event) => {
  event.stopPropagation();
  modal.classList.remove('display-none');
  body.classList.add('stop-scrolling');
  hero.classList.add('blur');
  header.classList.add('blur');
});

exitBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  modal.classList.add('display-none');
  body.classList.remove('stop-scrolling');
  hero.classList.remove('blur');
  header.classList.remove('blur');
});

for (let i = 0; i < modalLnks.length; i += 1) {
  modalLnks[i].addEventListener('click', (event) => {
    event.stopPropagation();
    modal.classList.add('display-none');
    body.classList.remove('stop-scrolling');
    hero.classList.remove('blur');
    header.classList.remove('blur');
  });
}

// Portfolio 
import data from './projectsData.js';
const portfolio = document.getElementById('portfolio');

for(let i = 0; i < data.length; i++) {
  const div = document.createElement('div');
  div.classList.add('card')
  const img = document.createElement('img');
  const contentDiv = document.createElement('div');
  const h2 = document.createElement('h2');
  //Tags div
  const tagsDiv = document.createElement('div');
  tagsDiv.classList.add('tags');
  const tag1 = document.createElement('p');
  const bullet = document.createElement('img');

}


