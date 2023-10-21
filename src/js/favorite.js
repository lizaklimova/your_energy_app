import { addClass, removeClass } from '../js/components/classFunctions';

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
