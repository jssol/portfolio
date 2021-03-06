const form = document.getElementById('contact-me');
const msg = document.getElementById('error');
const mail = form.elements.email;

function isLowerCase(string) {
  return string === string.toLowerCase();
}

function showError() {
  msg.style.display = 'block';
  msg.innerText = 'Email must be lowercase';
}

form.addEventListener('submit', (event) => {
  const result = isLowerCase(mail.value);
  if (!result) {
    event.preventDefault();
    showError();
  } else {
    form.submit();
  }
});

mail.addEventListener('input', () => {
  msg.style.display = 'none';
});
