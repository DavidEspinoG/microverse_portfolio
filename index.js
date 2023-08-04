// Modal
// Portfolio
import data from './projectsData.js';

const menu = document.getElementById('burger-menu');
const navigation = document.getElementById('navigation');
const modal = document.getElementById('modal');
const body = document.querySelector('body');
const exitBtn = document.getElementById('exit-button');
const modalLnks = document.querySelectorAll('.modal__navigation__li');
const blur = document.getElementById('blur');
menu.addEventListener('click', (event) => {
  event.stopPropagation();
  navigation.classList.toggle('visible');
});

exitBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  modal.classList.add('display-none');
  body.classList.remove('stop-scrolling');
  blur.classList.remove('blur');
});

for (let i = 0; i < modalLnks.length; i += 1) {
  modalLnks[i].addEventListener('click', (event) => {
    event.stopPropagation();
    modal.classList.add('display-none');
    body.classList.remove('stop-scrolling');
    blur.classList.remove('blur');
  });
}

function projectDetails(obj) {
  const { tags } = obj;
  blur.classList.add('blur');
  body.classList.add('stop-scrolling');
  const container = document.getElementById('project-detail');
  container.classList.remove('display-none');
  // Creating elements
  const h2Div = document.createElement('div');
  h2Div.classList.add('projectDetails__h1Div');
  const h2 = document.createElement('h2');
  const exitButton = document.createElement('i');
  exitButton.setAttribute('id', 'projectDetails__exit');
  exitButton.classList.add('fa-solid');
  exitButton.classList.add('fa-xmark');
  exitButton.classList.add('fa-2xl');
  exitButton.addEventListener('click', () => {
    container.innerHTML = '';
    container.classList.add('display-none');
    container.classList.remove('card');
    body.classList.remove('stop-scrolling');
    blur.classList.remove('blur');
  });
  const tagsDiv = document.createElement('div');
  tagsDiv.classList.add('projectDetail__tags');
  const tag1 = document.createElement('p');
  const bullet1 = document.createElement('img');
  bullet1.classList.add('bullet');
  const tag2 = document.createElement('span');
  const bullet2 = document.createElement('img');
  bullet2.classList.add('bullet');
  const tag3 = document.createElement('span');
  const mainImg = document.createElement('img');
  const imgDiv = document.createElement('div');
  imgDiv.classList.add('projectDetail__imgDiv');
  mainImg.classList.add('projectDetails__img');
  const description = document.createElement('p');
  description.classList.add('description');
  const techDiv = document.createElement('ul');
  const textDiv = document.createElement('div');
  textDiv.classList.add('projectDetail__textDiv');
  techDiv.classList.add('technologies');
  for (let i = 0; i < obj.technologies.length; i += 1) {
    const li = document.createElement('li');
    li.innerText = obj.technologies[i];
    li.classList.add('technologies__li');
    techDiv.appendChild(li);
  }
  const buttonsDiv = document.createElement('div');
  const button1 = document.createElement('a');
  button1.href = obj.deployLink;
  const btnImg1 = document.createElement('img');
  const btnImg2 = document.createElement('img');
  const button2 = document.createElement('a');
  button2.href = obj.repoLink;
  const leftDiv = document.createElement('div');
  const line = document.createElement('hr');
  line.classList.add('projectDetail__hr');
  leftDiv.classList.add('projectDetail__leftDiv');
  // Add content
  h2.innerText = obj.title;
  const [tagText1, tagText2, tagText3] = tags;
  tag1.innerText = tagText1;
  tag2.innerText = tagText2;
  tag3.innerText = tagText3;
  bullet1.src = './img/Counter.png';
  bullet2.src = './img/Counter.png';
  mainImg.src = obj.image;
  description.innerText = obj.description;
  btnImg1.src = './img/see-live.svg';
  btnImg2.src = './img/github-in-button.svg';
  button1.classList.add('projectDetails__button');
  button2.classList.add('projectDetails__button');
  // Append
  container.append(h2Div, tagsDiv, imgDiv, textDiv);
  imgDiv.appendChild(mainImg);
  textDiv.append(description);
  leftDiv.append(techDiv, line, buttonsDiv);
  textDiv.append(leftDiv);
  h2Div.append(h2, exitButton);
  tagsDiv.append(tag1, bullet1, tag2, bullet2, tag3);
  buttonsDiv.append(button1, button2);
  buttonsDiv.classList.add('projectDetails__buttons');
  button1.innerText = 'See live';
  button1.appendChild(btnImg1);
  button2.innerText = 'See source';
  button2.appendChild(btnImg2);
}
const portfolio = document.getElementById('portfolio');

for (let i = 0; i < data.length; i += 1) {
  const div = document.createElement('div');
  div.classList.add('card');
  // div.classList.add('');
  const imgDiv = document.createElement('div');
  imgDiv.classList.add('card_image_div');
  const img = document.createElement('img');
  img.classList.add('card_image');
  const contentDiv = document.createElement('div');
  const h2 = document.createElement('h2');
  // Tags div
  const tagsDiv = document.createElement('div');
  tagsDiv.classList.add('tags');
  const tag1 = document.createElement('p');
  const bullet = document.createElement('img');
  bullet.classList.add('bullet');
  const bullet2 = document.createElement('img');
  bullet2.classList.add('bullet');
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');
  // End of tags div
  const pDscrptn = document.createElement('p');
  pDscrptn.classList.add('description');
  const technologies = document.createElement('ul');
  technologies.classList.add('technologies');
  const bttnDiv = document.createElement('div');
  const button = document.createElement('button');
  button.classList.add('project-button');
  button.classList.add('primary-button');
  button.type = 'button';
  button.innerText = 'See Project';
  // Add Content
  const { title, image, tags } = data[i];
  img.src = image;
  img.alt = `${title} img`;
  h2.innerText = title;
  const [tagText1, tagText2, tagText3] = tags;
  tag1.innerText = tagText1;
  bullet.src = './img/Counter.png';
  bullet2.src = './img/Counter.png';
  span1.innerText = tagText2;
  span2.innerText = tagText3;
  pDscrptn.innerText = data[i].description;
  // Technologies for loop
  for (let j = 0; j < data[i].technologies.length; j += 1) {
    const li = document.createElement('li');
    li.classList.add('technologies__li');
    li.innerText = data[i].technologies[j];
    technologies.appendChild(li);
  }
  // Append child
  imgDiv.appendChild(img)
  div.appendChild(imgDiv);
  div.appendChild(contentDiv);
  contentDiv.appendChild(h2);
  contentDiv.appendChild(tagsDiv);
  tagsDiv.appendChild(tag1);
  tagsDiv.appendChild(bullet);
  tagsDiv.appendChild(span1);
  tagsDiv.appendChild(bullet2);
  tagsDiv.appendChild(span2);
  contentDiv.appendChild(pDscrptn);
  contentDiv.appendChild(technologies);
  contentDiv.appendChild(bttnDiv);
  bttnDiv.appendChild(button);
  portfolio.appendChild(div);
  button.addEventListener('click', () => {
    projectDetails(data[i]);
  });
}


// Toggle buttons

// Toggle languages

const toggleLanguagesButton = document.getElementById('toggle-languages');

const languagesLi = document.getElementById('languages-li');

toggleLanguagesButton.addEventListener('click', () => {
  languagesLi.classList.toggle('appear');
});

// Toggle frameworks

const toggleFrameworksButton = document.getElementById('toggle-frameworks'); 

const frameworksLi = document.getElementById('frameworks-li');


toggleFrameworksButton.addEventListener('click', () => {
  frameworksLi.classList.toggle('appear');
}, false)
// Toggle skills

const toggleSkillsButton = document.getElementById('toggle-skills'); 

const skillsLi = document.getElementById('skills-li');


toggleSkillsButton.addEventListener('click', () => {
  skillsLi.classList.toggle('appear');
}, false)

//animations 

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    let element = entry.target;
    if(entry.isIntersecting){
      element.classList.add('fade-in');
    } else {
      element.classList.remove('fade-in');
    }
  })
})

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  observer.observe(card);
});