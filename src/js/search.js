import axios from 'axios';
import debounce from 'lodash.debounce';

const searchInput = document.querySelector('.exercises__filter-search-input');
let keyWord = '';
let dataEl = [];

searchInput.addEventListener('input', debounce(searchValue, 300));
async function searchValue(e) {
  let keyWord = e.target.value.toLowerCase().trim();
  console.log(keyWord);
  dataEl = await serviceGetByKeyWord();
  // console.log(dataEl);
  filterByKeyword(keyWord);
}
if (keyWord === '') {
}

async function serviceGetByKeyWord() {
  const BASE_URL = 'https://your-energy.b.goit.study/api';
  const response = await axios.get(`${BASE_URL}/exercises`);
  const data = response.data.results.map(data => ({
    name: data.name,
    equipment: data.equipment,
    bodyPart: data.bodyPart,
  }));
  return data;
}

function filterByKeyword(keyWord) {
  let filteredData = dataEl.filter(({ bodyPart, name, equipment }) => {
    bodyPart.includes(keyWord) ||
      name.includes(keyWord) ||
      equipment.includes(keyWord);
  });
  return filteredData;
}
console.log(filteredData);
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
