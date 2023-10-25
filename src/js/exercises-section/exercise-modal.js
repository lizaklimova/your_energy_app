import { fetchExercise } from '../api';
import { renderExerciseModal } from './exercise-modal-template';
import { addClass, removeClass } from '../components/fn-helpers';
import { scrollController } from '../scrolls';
import {findDivExercises} from '../favorite'

const refs = {
  closeModalBtn: document.querySelector('[data-exmod-close]'),
  modal: document.querySelector('[data-exmodal]'),
  modalContentContainer: document.querySelector('.exercise-modal__content'),
  modalBackdrop: document.querySelector('.js-backdrop'),
};
const addToFavoritesButton = document.querySelector(
    '.exercise-modal-button__favorite'
  );

  const removeFromFavoritesButton = document.querySelector(
    '.exercise-modal-button__remove'
  );


refs.modalBackdrop.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    addClass(refs.modal, 'is-hidden');
    scrollController.enabledScroll();
  }
});

refs.closeModalBtn.addEventListener('click', closeModal);

export async function handleModalOpen(exId) {
  try {
    const data = await fetchExercise(exId);
    renderCard(data);
    scrollController.disabledScroll();
    removeFromFavoritesButton.addEventListener('click', removeFavorite);
    addToFavoritesButton.addEventListener('click', addToFavorite);
  } catch (error) {
    console.error(error.message);
  }
}

function renderCard(data) {
  const markup = renderExerciseModal(data);
  refs.modalContentContainer.innerHTML = markup;

  // const addToFavoritesButton = document.querySelector(
  //   '.exercise-modal-button__favorite'
  // );

  // const removeFromFavoritesButton = document.querySelector(
  //   '.exercise-modal-button__remove'
  // );

  addClass(removeFromFavoritesButton, 'is-hidden');

  // addToFavoritesButton.addEventListener('click', function () {
  //   addClass(addToFavoritesButton, 'is-hidden');
  //   removeClass(removeFromFavoritesButton, 'is-hidden');
  // });

  // removeFromFavoritesButton.addEventListener('click', function () {
  //   addClass(removeFromFavoritesButton, 'is-hidden');
  //   removeClass(addToFavoritesButton, 'is-hidden');
  // });

  refs.modal.classList.remove('is-hidden');
  document.addEventListener('keydown', closeModalOnEsc);
}

function closeModal() {
  refs.modal.classList.add('is-hidden');
  document.removeEventListener('keydown', closeModalOnEsc);
  scrollController.enabledScroll();
}

function closeModalOnEsc(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}

const addToFavorite = (e) => {
  const divExercises = document.querySelector('.exercise-modal-tumb');
  const id = divExercises.dataset;
  fetchExercise(id.id)
  .then(data => {
    localStorage.setItem(data._id, JSON.stringify(data));
  })
  .catch(error => console.log(error))
    addClass(addToFavoritesButton, 'is-hidden');
    removeClass(removeFromFavoritesButton, 'is-hidden');
}

const removeFavorite = event => {
    const divExercises = document.querySelector('.exercise-modal-tumb');
  const id = divExercises.dataset;
  console.log(id);
  localStorage.removeItem(id.id);
  addClass(removeFromFavoritesButton, 'is-hidden');
    removeClass(addToFavoritesButton, 'is-hidden');
};