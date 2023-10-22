import Notiflix from 'notiflix';

import { subscribe } from '../api.js';
import { subscribeForm } from '../refs.js';

subscribeForm.addEventListener('submit', onSubmit);

Notiflix.Notify.init({
  timeout: 5000,
  clickToClose: true,
  cssAnimationStyle: 'from-bottom',
  width: '400px',
  fontSize: '14px',
  fontAwesomeIconStyle: 'shadow',
  info: {
    notiflixIconColor: '#f4f4f4',
    background: '#242424',
    textColor: '#f4f4f4',
  },
});

async function onSubmit(e) {
  e.preventDefault();

  const inputValue = e.currentTarget.elements.email.value;
  console.log(inputValue);

  try {
    const emailToAdd = {
      email: inputValue,
    };
    const email = await subscribe(emailToAdd);

    Notiflix.Notify.info(email.message);
  } catch (error) {
    if (error.message === 'Request failed with status code 409') {
      Notiflix.Notify.info(error.response.data.message);
    }
  }
  e.target.reset();
}
