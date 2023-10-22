import axios from 'axios';

import { fetchExercise } from './api';
import { renderExerciseModal } from './exercuse-modal-template';

const refs = {
  openModalBtn: document.querySelector('[data-exmod-open]'),
  closeModalBtn: document.querySelector('[data-exmod-close]'),
  modal: document.querySelector('[data-exmodal]'),
  modalContentContainer: document.querySelector('.exercise-modal__content'),
};

refs.openModalBtn.addEventListener('click', handleModalOpen);
refs.closeModalBtn.addEventListener('click', closeModal);

async function handleModalOpen() {
  try {
    const data = await fetchExercise('64f389465ae26083f39b17a4');
    renderCard(data);
  } catch (error) {
    console.error('error.message');
  }
}

function renderCard(data) {
  const markup = renderExerciseModal(data);
  refs.modalContentContainer.innerHTML = markup;
  refs.modal.classList.remove('is-hidden');
  document.addEventListener('keydown', closeModalOnEsc);
}

function closeModal() {
  refs.modal.classList.add('is-hidden');
  document.removeEventListener('keydown', closeModalOnEsc);
}

function closeModalOnEsc(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}
