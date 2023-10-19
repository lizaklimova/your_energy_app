import axios from 'axios';

axios.defaults.baseURL = 'https://your-energy.b.goit.study/api';

// get for filter
export async function fetchFilter(page, perPage, filter) {
  return await axios
    .get(`/filters?filter=${filter}&page=${page}&limit=${perPage}`)
    .then(response => response.data);
}

// const filters = {
//   bodyParts: 'Body%20parts',
//   muscles: 'Muscles',
//   equipment: 'Equipment',
// };

//   get for cards
export async function fetchCards(page, perPage, filter, name) {
  return await axios
    .get(`/exercises?${filter}=${name}&${page}=1&limit=${perPage}`)
    .then(response => response.data);
}

// const cardFilter = {
//   bodyParts: 'bodypart',
//   muscles: 'muscles',
//   equipment: 'equipment',
// };

// get for exercise information
export async function fetchExercise(id) {
  return await axios.get(`/exercises/${id}`).then(response => response.data);
}

//quote of the day
export async function fetchQuote() {
  return await axios.get('/quote').then(response => response.data);
}

//add rating
export async function patchRating(id, data) {
  return await axios
      .patch(`/exercises/${id}/rating`, data, {
          headers: {
              'content-type': 'application/json'
          }
      })
    .then(response => response.data);
}

//subscribe
  export async function subscribe(data) {
  return await axios
      .post(`/subscription`, data, {
        headers: {
        'content-type': 'application/json'
    }
    })
    .then(response => response.data);
}
