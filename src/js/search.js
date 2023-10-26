import axios from 'axios';
import debounce from 'lodash.debounce';

const searchInput = document.querySelector('.exercises__filter-search-input');
let keyWord = '';

searchInput.addEventListener('input', debounce(searchValue, 300));
function searchValue(e) {
  let keyWord = e.target.value.toLowerCase().trim();
  console.log(keyWord);
}
if (keyWord === '') {
}

serviceGetByKeyWord(keyWord);

async function serviceGetByKeyWord(keyWord = '') {
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

// function reset() {
//   keyWord.value = '';
// }

//    Notiflix.Notify.failure(
//      'Sorry, there is nothing matching your search query. Please try again.'
//    );
