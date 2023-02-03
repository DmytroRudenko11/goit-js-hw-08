import throttle from 'lodash.throttle';

const mail = document.querySelector('input');
const comment = document.querySelector('textarea');
const form = document.querySelector('form');
const submitBtn = document.querySelector('button');

form.addEventListener('input', throttle(setData, 500));
submitBtn.addEventListener('click', onSubmitClick);

if (localStorage.getItem('feedback-form-state') !== null) {
  const storageData = JSON.parse(localStorage.getItem('feedback-form-state'));
  mail.value = storageData.email;
  comment.value = storageData.message;
}

function setData(e) {
  const formFields = {
    email: `${mail.value}`,
    message: `${comment.value}`,
  };

  formFields[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formFields));
}

function onSubmitClick(e) {
  e.preventDefault();

  if ((mail.value && comment.value) === '') {
    return alert('Fill up the form, please');
  }

  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

  localStorage.clear();
  form.reset();
}
