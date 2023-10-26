import axios from 'axios';
import debounce from 'lodash.debounce';

const searchInput = document.querySelector('.exercises__filter-search-input');
let keyWord = '';

searchInput.addEventListener('input', debounce(searchValue, 300));
async function searchValue(e) {
  let keyWord = e.target.value.toLowerCase().trim();
  console.log(keyWord);
  const dataEl = serviceGetByKeyWord(keyWord);
  filterByKeyword(dataEl);
}
if (keyWord === '') {
}

async function serviceGetByKeyWord() {
  const BASE_URL = 'https://your-energy.b.goit.study/api';
  const response = await axios.get(`${BASE_URL}/exercises`);
  const dataEl = response.data.results.map(data =>
    console.log({
      name: data.name,
      equipment: data.equipment,
      bodyPart: data.bodyPart,
    })
  );
  return dataEl;
}
let object = [];
function filterByKeyword(objs) {
  let object = objs.forEach(obj => {
    if (
      obj.bodyPart.includes(keyWord) ||
      obj.name.includes(keyWord) ||
      obj.equipment.includes(keyWord)
    ) {
      object.push(obj);
      console.log(object);
    }
  });
}
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
