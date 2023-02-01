console.log('hey');

const mail = document.querySelector('input');
const message = document.querySelector('textarea');
console.log(mail);

mail.addEventListener('input', setMail);

function setMail({ target }) {
  localStorage.setItem('feedback-form-state', JSON.stringify(target.value));
}

localStorage.setItem('feedback-form-state', 'smth');
