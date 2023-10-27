import axios from 'axios';
import Notiflix from 'notiflix';
import { addClass } from './components/fn-helpers';
import { exerciseCardListRef, searchInput } from './components/refs';
import { createCardsString } from './components/cards-template';
import { createPaginItems } from './exercises-section/pagination';
import { handleModalOpen } from './exercises-section/exercise-modal';

export function renderMarkupSearch(filter, naming, key, currentPage) {
  serviceGetByKeyWord(filter, naming, key, currentPage)
    .then(data => {
      let hasBeenClassAdded = false;
      if (!hasBeenClassAdded) {
        addClass(exerciseCardListRef, 'search-list');
        hasBeenClassAdded = true;
      }

      exerciseCardListRef.innerHTML = createCardsString(data.results);

      const dataLength = data.results.length;
      createPaginItems(data.totalPages, currentPage);
      if (!dataLength) {
        Notiflix.Notify.info('Sorry, there are no results 😭');

        const paginList = document.querySelector('.exercises__pagination');
        paginList.innerHTML =
          '<p class="exercises__undefined-text">Ooops...</p>';
      }
    })
    .catch(error => console.log(error))
    .finally(() => {
      const exerciseOpenBtns = document.querySelectorAll('[data-exmod-open]');
      exerciseOpenBtns.forEach(btn => {
        btn.addEventListener('click', e => {
          const data = e.currentTarget.dataset.id;
          handleModalOpen(data);
        });
      });
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
