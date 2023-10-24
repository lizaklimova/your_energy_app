const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn__icon');

const theme = localStorage.getItem('theme');
theme && document.body.classList.add(theme);

btn.addEventListener('click', handleThemeToggle);
function handleThemeToggle() {
  body.classList.toggle('darkmode');
  if (document.body.classList.contains('darkmode')) {
    localStorage.setItem('theme', 'darkmode');
  } else {
    localStorage.removeItem('theme');
  }
}
