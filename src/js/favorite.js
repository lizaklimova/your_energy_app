import { addClass, removeClass } from './components/classFunctions';
import { favouriteTexte } from './components/refs';

let exerciseState = {};
let allEx = [];
const loadFavourite = () => {
  const keys = Object.keys(localStorage);
  if (!(keys.length >= 1 && localStorage.getItem('quote'))) {
    addClass(favouriteTexte, 'favourite__text');
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
      addClass(favouriteTexte, 'is-hidden');
    }
    //   markup(allEx); murkup function
  }
};
window.addEventListener('load', loadFavourite);
