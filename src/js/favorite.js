import { addClass, removeClass } from './components/classFunctions';
import {favouriteTexte} from './refs'
 console.log(favouriteTexte);
let exerciseState = {};
let allEx = [];
const loadFavourite = () => {
  const keys = Object.keys(localStorage);
  if (!keys.length) {
    // removeClass();
    // addClass();
    return;
  } else {
    for (let key of keys) {
      try {
        const savedExercises = localStorage.getItem(key);
        exerciseState = JSON.parse(savedExercises);
      } catch {
        error;
      }
      allEx.push(exerciseState);
    }
  }
  //   markup(allEx); murkup function
  // removeClass();
  // addClass();
};
