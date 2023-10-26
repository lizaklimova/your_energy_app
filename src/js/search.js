import axios from 'axios';
import debounce from 'lodash.debounce';

let cardName;
let filterName;
let currentPage = 1;
let keyWord = '';

const searchInput = document.querySelector('.exercises__filter-search-input');
export const searchInputContainer = document.querySelector(
  '.exercises__input-div'
);
searchInput.addEventListener('input', debounce(getInputValue, 300));

function getInputValue(e) {
  keyWord = e.target.value.toLowerCase().trim();
}

export function getCardsOnInput(name, filter, key = keyWord) {
  serviceGetByKeyWord(filter, name, currentPage, 10, key).then(data =>
    console.log(data)
  );
}

async function serviceGetByKeyWord(
  filter,
  name,
  page = 1,
  perPage = 10,
  keyWord
) {
  const BASE_URL = 'https://your-energy.b.goit.study/api';
  const response = await axios.get(
    `${BASE_URL}/exercises?${filter}=${name}&page=${page}&limit=${perPage}&keyword=${keyWord}`
  );

  return response.data;
}

// function filterByKeyword(keyWord) {
//   let filteredData = dataEl.filter(({ bodyPart, name, equipment }) => {
//     bodyPart.includes(keyWord) ||
//       name.includes(keyWord) ||
//       equipment.includes(keyWord);
//   });
//   return filteredData;
// }
// console.log(filteredData);
// export async function serviceGetByKeyWord(
//   bodyPart = '',
//   name = '',
//   equipment = '',
//   keyWord = ''
// ) {
//   const BASE_URL = 'https://your-energy.b.goit.study/api/exercises';
//   const response = await axios.get(`${BASE_URL}`, {
//     params: {
//       bodyPart: bodyPart,
//       name: name,
//       equipment: equipment,
//       keyWord: keyWord,
//     },
//   });
//   const dataEl = response.data;
//   console.log(dataEl);
// }

// function reset() {
//   keyWord.value = '';
// }

//    Notiflix.Notify.failure(
//      'Sorry, there is nothing matching your search query. Please try again.'
//    );
// import { addClass, removeClass } from '../components/fn-helpers';

// const inputRef = document.querySelector('#input-search');
// const searchBtn = document.querySelector('.exercises__form-submit-btn');
// const resetBtn = document.querySelector('.exercises__form-reset-btn');
// inputRef.addEventListener('input', e => {
//   removeClass(resetBtn, 'is-hidden');
//   addClass(searchBtn, 'is-hidden');
// });
