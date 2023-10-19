import axios from 'axios';

axios.defaults.baseURL = 'https://your-energy.b.goit.study/api';

// запит по фільтрам
async function fetchFilter(page, perPage, filter) {
  return await axios
    .get(`/filters?filter=${filter}&page=${page}&limit=${perPage}`)
    .then(response => response.data);
}

// data.results.name
// data.results.imgURL
const filters = {
  bodyParts: 'Body%20parts',
  muscles: 'Muscles',
  equipment: 'Equipment',
};
fetchFilter(1, 12, filters.equipment)
  .then(data => console.log(data.results))
  .catch(error => console.log(error))
  .finally(console.log('If you see it, fetch works :)'));
  


//   запит на картки
async function fetchCards(page, perPage, filter, name) {
  return await axios
    .get(`/exercises?${filter}=${name}&${page}=1&limit=${perPage}`)
    .then(response => response.data);
}


const cardFilter = {
  bodyParts: 'bodypart',
  muscles: 'muscles',
  equipment: 'equipment',
};
fetchCards(1, 12, cardFilter.muscles, 'abs')
  .then(data => console.log(data.results))
  .catch(error => console.log(error))
    .finally(console.log('If you see it, fetch works :)'));
  

    // запит на повну інформацію

