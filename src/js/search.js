import axios from 'axios';
import debounce from 'lodash.debounce';

const searchInput = document.querySelector('.exercises__filter-search-input');
let keyWord = '';
let dataEl = [];
function createBreadCrumbs(event) {
  const crumb = event.currentTarget.dataset.name;
  console.log(crumb);
  const capitalizedCrumb = capitalizeFirstLetter(crumb);

  let exHeaderInfo = document.querySelector(
    '.info__exercises__categories-subtitle'
  );
  let exHeader = document.querySelector('.exercises__categories-subtitle');

  let subCategoryInfo = document.querySelector(
    '.info__exercises__categories-subtitle span'
  );
  let subCategory = document.querySelector(
    '.exercises__categories-subtitle span'
  );
}

searchInput.addEventListener('input', debounce(searchValue, 300));
async function searchValue(e) {
  let keyWord = e.target.value.toLowerCase().trim();
  console.log(keyWord);
  dataEl = await serviceGetByKeyWord();
  console.log(dataEl);
  filterByKeyword(keyWord);
}
if (keyWord === '') {
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

  return response.data.results;
}
// serviceGetByKeyWord('bodypart', 'lower legs', 1, 10, 'body').then(data => {
//   dataEl = data;
//   console.log(dataEl);
// });

function filterByKeyword(keyWord) {
  let filteredData = dataEl.filter(({ bodyPart, name, equipment }) => {
    bodyPart.includes(keyWord) ||
      name.includes(keyWord) ||
      equipment.includes(keyWord);
  });
  return filteredData;
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
