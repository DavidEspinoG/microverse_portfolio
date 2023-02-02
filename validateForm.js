const contactForm = document.getElementById('contactForm');
const emailInput = contactForm.elements.email;
function emailValidate(strng) {
  const toLower = strng.toLowerCase();
  if (strng === toLower) {
    return true;
  }
  return false;
}
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (emailValidate(emailInput.value)) {
    contactForm.submit();
  } else {
    const span = document.createElement('span');
    const submitButton = document.getElementById('submitButton');
    span.innerText = 'Please be sure the email is in lowercase.';
    span.setAttribute('id', 'emailError');
    span.classList.add('errorMessage');
    contactForm.insertBefore(span, submitButton);
    const emailError = document.getElementById('emailError');
    setTimeout(() => {
      emailError.remove();
    }, 4000)
  }
});