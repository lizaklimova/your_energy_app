const reviewModal = document.querySelector('[data-review-modal]');
const openReviewModalButton = document.querySelector('.exercise-modal-button__rating');
const closeReviewModalButton = document.querySelector('[data-review-close]');


function openReviewModal() {
  reviewModal.classList.remove('is-hidden');
}

function closeReviewModal() {
  reviewModal.classList.add('is-hidden');
}

openReviewModalButton.addEventListener('click', openReviewModal);
closeReviewModalButton.addEventListener('click', closeReviewModal);