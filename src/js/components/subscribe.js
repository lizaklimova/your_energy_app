import { subscribe } from '../api.js';
import { subscribeForm } from '../refs.js';

subscribeForm.addEventListener('submit', onSubmit);

async function onSubmit(e) {
  e.preventDefault();
  const inputValue = e.currentTarget.elements.email.value;
  console.log(inputValue);

  const email = {
    email: inputValue,
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(email),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };
  try {
    const emailFunction = await subscribe(email);
    alert(emailFunction.message);
  } catch (error) {
    alert(error.message);
  }
  e.target.reset();
}
