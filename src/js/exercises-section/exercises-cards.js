import 'tui-pagination/dist/tui-pagination.css';
import Pagination from 'tui-pagination';
import { filterCardsListRef } from '../components/refs';
import { apendMarkup, insertHtml } from '../components/fn-helpers';
import { fetchCards } from '../api';
import {
  addClass,
  removeClass,
  spliceLastLetter,
  minimiseFirstLetter,
} from '../components/fn-helpers';
import {
  createCardsSkeleton,
  createCardsString,
} from '../components/cards-template';
import { handleModalOpen } from './exercise-modal';

const exerciseCardListRef = document.querySelector('.exercises__cards-list');

export const searchRefs = () => {
  const imgClick = document.querySelectorAll('.exercises__filter-card');
  imgClick.forEach(needBtn => {
    needBtn.addEventListener('click', exercisesCard);
  });
};

// let name;
// let minimisedFilter;
// let page = 1;
// let perPage = 10;

function exercisesCard(e) {
  let name = e.currentTarget.dataset;
  let minimisedFilter = minimiseFirstLetter(spliceLastLetter(name.filter));

  const paginList = document.getElementById('tui-pagination-container');
  const instance = new Pagination(paginList, {
    totalItems: 17 * 10,
    itemsPerPage: 10,
    visiblePages: 5,
    centerAlign: true,
  });

  instance.on('afterMove', event => {
    exerciseCardListRef.innerHTML = '';
    getCard(event.page);
  });

  getCard();

  async function getCard(perPage = 1, limit = 10) {
    try {
      const data = await fetchCards(
        perPage,
        limit,
        minimisedFilter,
        minimiseFirstLetter(name.name)
      );

      console.log(data);

      addClass(filterCardsListRef, 'is-hidden');
      removeClass(filterCardsListRef, 'exercises__filter-cards-list');
      apendMarkup(exerciseCardListRef, createCardsSkeleton(10));
      exerciseCardListRef.innerHTML = createCardsString(data.results);

      const exerciseOpenBtn = document.querySelectorAll('[data-exmod-open]');
      exerciseOpenBtn.forEach(btn => {
        btn.addEventListener('click', e => {
          const data = e.currentTarget.dataset.id;
          handleModalOpen(data);
        });
      });
    } catch (error) {
      console.log(error);
    }
  }

  //   fetchCards(page, perPage, minimisedFilter, minimiseFirstLetter(name.name))
  //     .then(data => {
  //       console.log(data);

  //       addClass(filterCardsListRef, 'is-hidden');
  //       removeClass(filterCardsListRef, 'exercises__filter-cards-list');
  //       apendMarkup(exerciseCardListRef, createCardsSkeleton(10));
  //       exerciseCardListRef.innerHTML = createCardsString(data.results);

  //       const exerciseOpenBtn = document.querySelectorAll('[data-exmod-open]');
  //       exerciseOpenBtn.forEach(btn => {
  //         btn.addEventListener('click', e => {
  //           const data = e.currentTarget.dataset.id;
  //           handleModalOpen(data);
  //         });
  //       });

  //       // cardBtnRef();
  //     })
  //     .catch(er => console.log(er));
  // }
}
