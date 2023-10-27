import Notiflix from 'notiflix';

import { subscribe } from './api.js';
import { subscribeForm } from './components/refs.js';

subscribeForm.addEventListener('submit', onSubmit);

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
    console.log(error);
    if (error.message === 'Request failed with status code 409') {
      Notiflix.Notify.info(error.response.data.message);
    } else if (error.response.request.status === 404) {
      Notiflix.Notify.info('Error');
    }
  }
  e.target.reset();
}
