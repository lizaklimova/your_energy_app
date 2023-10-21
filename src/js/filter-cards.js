import axios from 'axios';
import { createFilterString } from './components/filter-card-template';

const listRef = document.querySelector('.exercises__filter-cards-list');
console.log(listRef);

axios.defaults.baseURL = 'https://your-energy.b.goit.study/api';

async function fetchFilter(page, perPage, filter) {
  return await axios
    .get(`/filters?filter=${filter}&page=${page}&limit=${perPage}`)
    .then(response => response.data);
}

getFilters();

async function getFilters() {
  let data = await fetchFilter(1, 9, 'Body parts');
  if (screen.width > 767) {
    data = await fetchFilter(1, 12, 'Body parts');
  }
  listRef.insertAdjacentHTML('beforeend', createFilterString(data.results));
}
