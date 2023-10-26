import { addClass, removeClass } from './components/fn-helpers';
import { scrollController } from './scrolls';
import { patchRating } from './api.js';
import Notiflix from 'notiflix';

const reviewModal = document.querySelector('[data-review-modal]');
const reviewBackdrop = document.querySelector('.js-backdrop');
const reviewForm = document.querySelector('.modal-form');
const ratingValue = document.querySelector('.rating__value');

const openReviewModalButton = document.querySelector(
  '.exercise-modal-button__rating'
);
const closeReviewModalButton = document.querySelector('[data-review-close]');
const exerciseModal = document.querySelector('[data-exmodal]');

openReviewModalButton.addEventListener('click', openReviewModal);
closeReviewModalButton.addEventListener('click', closeReviewModal);

reviewBackdrop.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    addClass(reviewModal, 'is-hidden');
    scrollController.enabledScroll();
  }
});

function openReviewModal() {
  scrollController.disabledScroll();
  removeClass(reviewModal, 'is-hidden');
  addClass(exerciseModal, 'is-hidden');
  document.addEventListener('keydown', closeModalOnEsc);
}

function closeReviewModal() {
  reviewModal.classList.add('is-hidden');
  // removeClass(exerciseModal, 'is-hidden');
  document.removeEventListener('keydown', closeModalOnEsc);
  scrollController.enabledScroll();
}

function closeModalOnEsc(event) {
  if (event.code === 'Escape') {
    closeReviewModal();
  }
}

reviewForm.addEventListener('submit', onSubmit);

async function onSubmit(e) {
  e.preventDefault();

  let inputValue = e.currentTarget.elements.email.value;
  let textareaValue = e.target.elements.comment.value;
  let rating = Number(ratingValue.textContent);

  const modal = document.querySelector('.exercise-modal-tumb');
  const id = modal.dataset.id;

  try {
    const formReview = {
      rate: rating,
      email: inputValue,
      review: textareaValue,
    };
    const form = await patchRating(id, formReview);
    Notiflix.Notify.info('Thanks for your review');
    closeReviewModal();
  } catch (error) {
    console.log(error);
  }
  e.target.reset();
}
