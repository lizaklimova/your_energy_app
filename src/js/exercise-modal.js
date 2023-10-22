import { fetchExercise } from './api';
import { renderExerciseModal } from './exercuse-modal-template';

const refs = {
  openModalBtn: document.querySelector('[data-exmod-open]'),
  closeModalBtn: document.querySelector('[data-exmod-close]'),
  modal: document.querySelector('[data-exmodal]'),
  modalContentContainer: document.querySelector('.exercise-modal__content'),
};
const scrollController = {
  scrollPosition: 0,
  disabledScroll() {
    scrollController.scrollPosition = window.scrollY;
    document.body.style.cssText = `
      overflow:hidden;
      position:fixed;
      top: -${scrollController.scrollPosition}px;
      left:0;
      height:100vh;
      width:100vw;
      padding-right: ${window.innerWidth - document.body.offsetWidth}
      `;
    document.documentElement.style.scrollBehavior = 'unset';
  },
  enabledScroll() {
    document.body.style.cssText = '';
    window.scroll({ top: scrollController.scrollPosition });
    document.documentElement.style.scrollBehavior = '';
  },
};
refs.openModalBtn.addEventListener('click', handleModalOpen);
refs.closeModalBtn.addEventListener('click', closeModal);

async function handleModalOpen() {
  try {
    const data = await fetchExercise('64f389465ae26083f39b17a4');
    renderCard(data);
    scrollController.disabledScroll();
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
  scrollController.enabledScroll();
}

function closeModalOnEsc(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}
