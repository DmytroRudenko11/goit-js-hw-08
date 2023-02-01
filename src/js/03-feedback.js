const mail = document.querySelector('input');
const message = document.querySelector('textarea');
const form = document.querySelector('form');

form.addEventListener('input', setData);

function setData({ target }) {
  localStorage.setItem('feedback-form-state', JSON.stringify(target.value));
  fillField();
}

// message.addEventListener('input', setMail);

// function setMessage({ target }) {
//   localStorage.setItem('feedback-form-state', JSON.stringify(target.value));
// }
