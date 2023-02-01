const contactForm = document.getElementById('contact');
const emailInput = contactForm.element['email'];

function emailValidate(strng) {
  const toLower = strng.toLowerCase();
  if (strng === toLower) {
    return true;
  }
}
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (emailValidate(emailInput.value)) {
    contactForm.submit();
  } else {
    const p = document.createElement('p');
    p.innerText = 'Please make sure the email is in lowercase.';
    contactForm.appendChild(p);
  }
});