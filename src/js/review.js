import { addClass, removeClass } from './components/fn-helpers';
import { scrollController } from './scrolls';
import { patchRating } from './api.js';
import Notiflix from 'notiflix';

const reviewModal = document.querySelector('[data-review-modal]');
const reviewBackdrop = document.querySelector('.js-backdrop');
// const reviewBtn = document.querySelector('.modal-form__send');
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
  removeClass(exerciseModal, 'is-hidden');
  document.removeEventListener('keydown', closeModalOnEsc);
  scrollController.enabledScroll();
}

function closeModalOnEsc(event) {
  if (event.code === 'Escape') {
    closeReviewModal();
  }
}

reviewForm.addEventListener('submit', onSubmit);

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

  let inputValue = e.currentTarget.elements.email.value;
  let textareaValue = e.target.elements.comment.value;
  let rating = Number(ratingValue.textContent);

  try {
    const formReview = {
      rate: rating,
      email: inputValue,
      review: textareaValue,
    };
    const form = await patchRating('64f389465ae26083f39b17a4', formReview);
    console.log(form);
    closeReviewModal();
    Notiflix.Notify.info('Thanks for your review');
  } catch (error) {
    console.log(error);
  }
  e.target.reset();
}
