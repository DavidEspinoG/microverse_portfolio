const menu = document.getElementById('burger-menu');
const modal = document.getElementById('modal');
const body = document.querySelector('body');

menu.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('it works');
    modal.classList.remove('display-none');
    body.classList.add('stop-scrolling');
});


