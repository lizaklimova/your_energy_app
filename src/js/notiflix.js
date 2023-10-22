import Notiflix from 'notiflix';

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