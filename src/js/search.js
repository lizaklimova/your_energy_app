import axios from 'axios';
import { exerciseCardListRef } from './components/refs';
import { createCardsString } from './components/cards-template';
import { createPaginItems } from './exercises-section/pagination';

// const searchInput = document.querySelector('.exercises__filter-search-input');

let cardName;
let filterName;
let currentPage = 1;
let keyWord = '';

const searchForm = document.querySelector('#exercises__search-form');
const searchInput = document.querySelector('.exercises__filter-search-input');
export const searchInputContainer = document.querySelector(
  '.exercises__input-div'
);

const searchIcon = document.querySelector('.exercises__form-submit-btn');
const resetIcon = document.querySelector('.exercises__form-reset-btn');

searchForm.addEventListener('submit', getInputValue);
resetIcon.addEventListener('click', onClick);
searchInput.addEventListener('input', onInputSearch);

function onInputSearch(e) {
  console.log(e.currentTarget.value);
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
    searchInput.reset();
  }
}
export function getNameAndFilter(category, filter) {
  cardName = category;
  filterName = filter;
}

function getInputValue(e) {
  e.preventDefault();

  keyWord = searchInput.value.toLowerCase().trim();

  serviceGetByKeyWord(filterName, cardName, keyWord).then(data => {
    console.log(data);
    exerciseCardListRef.innerHTML = createCardsString(data.results);
    createPaginItems(data.totalPages, currentPage);
  });
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
