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
  const span = document.getElementById('contactErrors');
  span.innerHTML = 'Please be sure the email is in lowercase.';
  if (emailValidate(emailInput.value)) {
    contactForm.submit();
  } else {
    span.innerText = 'Please be sure the email is in lowercase.';
    setTimeout(() => {
      span.innerHTML = 'Please be sure the email is in lowercase.';
    }, 4000);
  }
});
