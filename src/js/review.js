import { addClass, removeClass } from './components/fn-helpers';
// import { scrollController } from './scrolls';

const reviewModal = document.querySelector('[data-review-modal]');
const reviewBackdrop = document.querySelector('.js-backdrop');

const openReviewModalButton = document.querySelector(
  '.exercise-modal-button__rating'
);
const closeReviewModalButton = document.querySelector('[data-review-close]');
const exerciseModal = document.querySelector('[data-exmodal]');

openReviewModalButton.addEventListener('click', openReviewModal);
closeReviewModalButton.addEventListener('click', closeReviewModal);

reviewBackdrop.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    // addClass(reviewModal, 'is-hidden');
    reviewModal.style.display = 'none';
    // scrollController.enabledScroll();
  }
});

function openReviewModal() {
  removeClass(reviewModal, 'is-hidden');
  addClass(exerciseModal, 'is-hidden');
}

function closeReviewModal() {
  addClass(reviewModal, 'is-hidden');
  removeClass(exerciseModal, 'is-hidden');
}
