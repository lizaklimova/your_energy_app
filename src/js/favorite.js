import { addClass, removeClass } from './components/fn-helpers';
// import { favouriteTexte } from './components/refs';
import { addToFavoritesButton, removeFromFavoritesButton } from './exercises-section/exercise-modal'
import { fetchExercise } from './api';
import { createCardsString } from './components/cards-template'

// const favouriteTexte = document.querySelector('[data="favourite__text"]');
// console.log(favouriteTexte);
export const findDivExercises = () => {
  const divExercises = document.querySelector('.exercise-modal-tumb');
  console.log(divExercises);
  return divExercises;
}

export const addToFavorite = (e) => {
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

let exerciseState = {};
let allEx = [];
const loadFavourite = () => {
  const keys = Object.keys(localStorage);
  if (!(keys.length >= 1 && localStorage.getItem('quote'))) {
    // addClass(favouriteTexte, 'favourite__text');
    return;
  } else {
    const arrKeys = keys.filter(key => {
      return key !== 'quote';
    });
    for (let key of arrKeys) {
      try {
        const savedExercises = localStorage.getItem(key);
        exerciseState = JSON.parse(savedExercises);
      } catch {
        error;
      }
      allEx.push(exerciseState);
      // addClass(favouriteTexte, 'is-hidden');
    }
    createCardsString(allEx);
  }
};
// loadFavourite();
