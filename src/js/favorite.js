// // const favouriteTexte = document.querySelector('[data-name="text-block"]');
// const favouriteCardRef = document.querySelector('[data-name="card-block"]');
// const favouriteModalBackdrop = document.querySelector('[data-exmodal]');
// import { createCardsString } from './components/cards-template';
// import { addClass, removeClass, apendMarkup } from './components/fn-helpers';
// import { renderExerciseModal } from './exercises-section/exercise-modal-template';
// import { fetchExercise } from './api';
// import { favouriteTexte } from './components/refs';
// let exerciseState = {};
// let allEx = [];
// let exercisesKeys = [];
// const knownKeys = [
//   'quote',
//   'theme',
//   'TOAST UI pagination for localhost: Statistics',
// ];
// const loadFavourite = () => {
//   for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i);
//     if (!knownKeys.includes(key)) {
//       exercisesKeys.push(key);
//     }
//   }
//   if (!exercisesKeys.length) {
//     addClass(favouriteTexte, 'favourite__text');
//     removeClass(favouriteTexte, 'is-hidden');
//     addClass(favouriteCardRef, 'is-hidden');
//     removeClass(favouriteCardRef, 'favourite__card-block');
//     return;
//   }

//   try {
//     exercisesKeys.map(key => {
//       const savedExercises = localStorage.getItem(key);
//       exerciseState = JSON.parse(savedExercises);
//       allEx.push(exerciseState);
//     });
//   } catch {
//     error;
//   }
//   addClass(favouriteTexte, 'is-hidden');
//   removeClass(favouriteTexte, 'favourite__text');
//   addClass(favouriteCardRef, 'favourite__card-block');
//   removeClass(favouriteCardRef, 'is-hidden');
//   apendMarkup(favouriteCardRef, createCardsString(allEx));
//   startExercises();
//   remouveRating();
//   findTrashBtn();
// };

// window.addEventListener('load', loadFavourite);
// const modalMarkup = document.querySelector('[data-name="modalfavourite"]');
// const addToFavoritesButton = document.querySelector(
//   '.exercise-modal-button__favorite'
// );
// const closeModalBtn = document.querySelector('[data-exmod-close]');
// const giveRating = document.querySelector('.exercise-modal-button__rating');
// const remouveFromTheFavourites = document.querySelector(
//   '.exercise-modal-button__remove'
// );
// const remouveRating = () => {
//   const ratingTrash = document.querySelectorAll('.card_rating');
//   ratingTrash.forEach(el => {
//     addClass(el.firstElementChild, 'is-hidden');
//     removeClass(el.firstElementChild, 'span_rating');
//     addClass(el.lastElementChild, 'icon_trash');
//     removeClass(el.lastElementChild, 'is-hidden');
//   });
//   const starRemouve = document.querySelectorAll('.star');
//   starRemouve.forEach(el => {
//     addClass(el, 'is-hidden');
//     removeClass(el, 'star');
//   });
// };
// const findTrashBtn = () => {
//   const trashBtn = document.querySelectorAll('[data-name="fovourite-delete"]');
//   trashBtn.forEach(btn => {
//     btn.addEventListener('click', deleteOne);
//   });
// };

// favouriteModalBackdrop.addEventListener('click', e => {
//   if (e.target === e.currentTarget) {
//     addClass(favouriteModalBackdrop, 'is-hidden');
//   }
// });
// function closeModal() {
//   favouriteModalBackdrop.classList.add('is-hidden');
//   document.removeEventListener('keydown', closeModalOnEsc);
// }
// function closeModalOnEsc(event) {
//   if (event.code === 'Escape') {
//     closeModal();
//   }
// }
// document.addEventListener('keydown', closeModalOnEsc);
// closeModalBtn.addEventListener('click', closeModal);

// const startExercises = () => {
//   const startBtn = document.querySelectorAll('[data-exmod-open]');
//   startBtn.forEach(needBtn => {
//     needBtn.addEventListener('click', openExercises);
//   });
// };
// const openExercises = e => {
//   const data = e.currentTarget.dataset.id;
//   modalMarkup.innerHTML = ' ';
//   fetchExercise(data)
//     .then(data => {
//       const markup = renderExerciseModal(data);
//       modalMarkup.insertAdjacentHTML('beforeend', markup);
//       removeClass(favouriteModalBackdrop, 'is-hidden');
//       addClass(addToFavoritesButton, 'is-hidden');
//       addClass(giveRating, 'is-hidden');
//     })
//     .catch(er => console.log(er));
// };

// const deleteOne = event => {
//   const id = event.currentTarget.dataset;
//   localStorage.removeItem(id.id);
//   const delet = document.querySelector(`[data-name = "${id.id}"]`);
//   delet.innerHTML = '';
// };

// const removeFavorite = event => {
//   const divExercises = document.querySelector('.exercise-modal-tumb');
//   const id = divExercises.dataset;
//   localStorage.removeItem(id.id);
//   const delet = document.querySelector(`[data-name = "${id.id}"]`);
//   delet.innerHTML = '';
//   closeModal();
// };
// remouveFromTheFavourites.addEventListener('click', removeFavorite);
