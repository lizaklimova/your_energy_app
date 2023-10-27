import debounce from 'lodash.debounce';
import { searchInput, searchIcon, resetIcon } from './components/refs';
import { renderMarkupSearch } from './search-service';
import { getCard } from './exercises-section/exercises-cards';

searchInput.addEventListener('input', onInputSearch);
searchInput.addEventListener('input', debounce(getInputValue, 300));

let currentPage = 1;
let keyWord = '';
let cardName;
let filterName;

function onClick(e) {
  if (e.currentTarget) {
    searchInput.value = '';
    getCard(1);
  }
}
resetIcon.addEventListener('click', onClick);
resetIcon.classList.add('is-hidden');

export function getNameAndFilter(category, filter) {
  cardName = category;
  filterName = filter;
}

function getInputValue(e) {
  e.preventDefault();

  keyWord = searchInput.value.toLowerCase().trim();
  getCurrentPageSearch(currentPage, keyWord);
}

export function getCurrentPageSearch(page = currentPage, key = keyWord) {
  renderMarkupSearch(filterName, cardName, keyWord, page);
}

function onInputSearch(e) {
  if (e.currentTarget.value !== '') {
    searchIcon.classList.add('is-hidden');
    resetIcon.classList.remove('is-hidden');
  } else {
    searchIcon.classList.remove('is-hidden');
    resetIcon.classList.add('is-hidden');
  }
}
