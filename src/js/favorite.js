const favouriteTexte = document.querySelector('[data-name="text-block"]');
const favouriteCardRef = document.querySelector('[data-name="card-block"]');
const favouriteModalBackdrop = document.querySelector('[data-exmodal]')
import { createCardsString } from './components/cards-template';
import { addClass, removeClass, apendMarkup } from './components/fn-helpers';
import { renderExerciseModal } from './exercises-section/exercise-modal-template';
import { fetchExercise } from './api';

let exerciseState = {};
let allEx = [];
let exercisesKeys = [];
const knownKeys = [
  'quote',
  'theme',
  'TOAST UI pagination for localhost: Statistics',
];
const loadFavourite = () => {
  const keys = Object.keys(localStorage);
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (!knownKeys.includes(key)) {
      exercisesKeys.push(key);
    }
  }
  if (!exercisesKeys.length) {
    addClass(favouriteTexte, 'favourite__text');
    removeClass(favouriteTexte, 'is-hidden');
    addClass(favouriteCardRef, 'is-hidden');
    removeClass(favouriteCardRef, 'favourite__card-block');
    return;
  }
  try {
    exercisesKeys.map(key => {
      const savedExercises = localStorage.getItem(key);
      exerciseState = JSON.parse(savedExercises);
      allEx.push(exerciseState);
    });
  } catch {
    error;
  }
  addClass(favouriteTexte, 'is-hidden');
  removeClass(favouriteTexte, 'favourite__text');
  addClass(favouriteCardRef, 'favourite__card-block');
  removeClass(favouriteCardRef, 'is-hidden');
  apendMarkup(favouriteCardRef, createCardsString(allEx));
  // startExercises();
  remouveRating();
};
window.addEventListener('load', loadFavourite);
// const modalMarkup = document.querySelector('[data-name="modalfavourite"]');

const remouveRating = () => {
  const ratingTrash = document.querySelectorAll('.card_rating');
  ratingTrash.forEach(el => {
    addClass(el.firstElementChild, 'is-hidden');
    removeClass(el.firstElementChild, 'span_rating');
    addClass(el.lastElementChild, 'icon_trash');
    removeClass(el.lastElementChild, 'is-hidden');
  })
  const starRemouve = document.querySelectorAll('.star');
  starRemouve.forEach(el => {
    addClass(el, 'is-hidden');
    removeClass(el, 'star');
  })
}

// const startExercises = () => {
//   const startBtn = document.querySelectorAll('[data-exmod-open]');
//   startBtn.forEach(needBtn => {
//     needBtn.addEventListener('click', openExercises);
//   });
// };
// const openExercises = e => {
//   const data = e.currentTarget.dataset.id;
//   removeClass(favouriteModalBackdrop, 'js-backdrop');
//   fetchExercise(data)
//     .then(data => {
//       const markup = renderExerciseModal(data);
//       console.log(markup);
//       modalMarkup.insertAdjacentHTML('afterend', markup);
//       console.log(data);
//     })
//     .catch(er => console.log(er));
// };
