import axios from 'axios';

const listRef = document.querySelector('.exercises__filter-cards-list');
console.log(listRef);

axios.defaults.baseURL = 'https://your-energy.b.goit.study/api';

async function fetchFilter(page, perPage, filter) {
  return await axios
    .get(`/filters?filter=${filter}&page=${page}&limit=${perPage}`)
    .then(response => response.data);
}
console.log(await fetchFilter(1, 9, 'Body parts'));
getFilters();
async function getFilters() {
  const data = await fetchFilter(1, 9, 'Body parts');

  listRef.insertAdjacentHTML('beforeend', createFilterString(data.results));
}

function capitalizeFirstLetter(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

function createFilterString(arr) {
  const filterCardString = arr
    .map(({ imgURL, filter, name }) => {
      return `<li class="exercises__filter-card">

   <div class="exercises__filter-img-container" style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), 
              url('${imgURL}') ;
               background-size: cover;
background-position:center;
background-repeat: no-repeat;
              "
</div>
<div class="exercises__filter-text-wrap">
 <p class="exercises__filter-category">${capitalizeFirstLetter(name)}</p>
    <p class="exercises__filter-name">${filter}</p>
</div>
   


  </li>`;
    })
    .join('');

  return filterCardString;
}
