import { fetchExercise } from '../api';
import { renderExerciseModal } from './exercise-modal-template';
import { addClass, removeClass } from '../components/fn-helpers';
import { scrollController } from '../scrolls';

const refs = {
  openModalBtn: document.querySelector('[data-exmod-open]'),
  closeModalBtn: document.querySelector('[data-exmod-close]'),
  modal: document.querySelector('[data-exmodal]'),
  modalContentContainer: document.querySelector('.exercise-modal__content'),
  modalBackdrop: document.querySelector('.js-backdrop'),
};

// refs.modalBackdrop.addEventListener('click', e => {
//   if (e.target === e.currentTarget) {
//     addClass(refs.modal, 'is-hidden');
//     scrollController.enabledScroll();
//   }
// });

refs.openModalBtn.addEventListener('click', handleModalOpen);
refs.closeModalBtn.addEventListener('click', closeModal);

async function handleModalOpen() {
  try {
    const data = await fetchExercise('64f389465ae26083f39b17a4');
    renderCard(data);
    scrollController.disabledScroll();
  } catch (error) {
    console.error(error.message);
  }
}

function renderCard(data) {
  const markup = renderExerciseModal(data);
  refs.modalContentContainer.innerHTML = markup;

  const addToFavoritesButton = document.querySelector(
    '.exercise-modal-button__favorite'
  );

  const removeFromFavoritesButton = document.querySelector(
    '.exercise-modal-button__remove'
  );

  addClass(removeFromFavoritesButton, 'is-hidden');

  addToFavoritesButton.addEventListener('click', function () {
    addClass(addToFavoritesButton, 'is-hidden');
    removeClass(removeFromFavoritesButton, 'is-hidden');
  });

  removeFromFavoritesButton.addEventListener('click', function () {
    addClass(removeFromFavoritesButton, 'is-hidden');
    removeClass(addToFavoritesButton, 'is-hidden');
  });

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
