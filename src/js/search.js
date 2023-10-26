import axios from 'axios';
import Notiflix from 'notiflix';
import { exerciseCardListRef } from './components/refs';
import { createCardsString } from './components/cards-template';
import { createPaginItems } from './exercises-section/pagination';
import { addClass } from './components/fn-helpers';
import debounce from 'lodash.debounce';

let cardName;
let filterName;
let currentPage = 1;
let keyWord = '';

const searchInput = document.querySelector('.exercises__filter-search-input');
export const searchInputContainer = document.querySelector(
  '.exercises__input-div'
);

const searchIcon = document.querySelector('.exercises__form-submit-btn');
const resetIcon = document.querySelector('.exercises__form-reset-btn');

resetIcon.addEventListener('click', onClick);
searchInput.addEventListener('input', onInputSearch);
searchInput.addEventListener('input', debounce(getInputValue, 300));

function onInputSearch(e) {
  if (e.currentTarget.value !== '') {
    searchIcon.classList.add('is-hidden');
    resetIcon.classList.remove('is-hidden');
  } else {
    searchIcon.classList.remove('is-hidden');
    resetIcon.classList.add('is-hidden');
  }
}
function onClick(e) {
  if (e.currentTarget) {
    searchInput.value = '';
  }
}

export function getNameAndFilter(category, filter) {
  cardName = category;
  filterName = filter;
}

function getInputValue(e) {
  e.preventDefault();

  keyWord = searchInput.value.toLowerCase().trim();

  renderMarkupSearch(currentPage);
}

export function renderMarkupSearch(currentPage) {
  serviceGetByKeyWord(filterName, cardName, keyWord, currentPage)
    .then(data => {
      let hasBeenClassAdded = false;
      if (!hasBeenClassAdded) {
        addClass(exerciseCardListRef, 'search-list');
        hasBeenClassAdded = true;
      }

      exerciseCardListRef.innerHTML = createCardsString(data.results);
      createPaginItems(data.totalPages, currentPage);

      const dataLength = data.results.length;

      if (!dataLength) {
        Notiflix.Notify.info('Sorry, there are no results 😭');

        const paginList = document.querySelector('.exercises__pagination');
        paginList.innerHTML = '';
      }
    })
    .catch(error => console.log(error));
}

async function serviceGetByKeyWord(
  filter,
  name,
  keyword,
  page = 1,
  perPage = 10
) {
  const BASE_URL = 'https://your-energy.b.goit.study/api';
  const response = await axios.get(
    `${BASE_URL}/exercises?${filter}=${name}&page=${page}&limit=${perPage}&keyword=${keyword}`
  );

  return response.data;
}
