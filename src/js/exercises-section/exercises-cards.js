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

function exercisesCard(e) {
  let limit = 10;
  let currentPage = 1;

  addClass(filterCardsListRef, 'is-hidden');
  removeClass(filterCardsListRef, 'exercises__filter-cards-list');
  apendMarkup(exerciseCardListRef, createCardsSkeleton(10));

  let name = e.currentTarget.dataset;
  let minimisedFilter = minimiseFirstLetter(spliceLastLetter(name.filter));
  let minimisedName = minimiseFirstLetter(name.name);

  function controlPagination(currentPage, totalPages) {
    const paginList = document.querySelector('.exercises__pagination');
    let liEl = '';

    if (currentPage > 1) {
      liEl = `<li class="pagin-btn prev"><span></span></li>`;
    }
  }

  getCards(currentPage, limit, minimisedFilter, minimisedName);

  async function getCards(currentPage, limit, filter, name) {
    screen.width >= 768 ? (limit = 10) : (limit = 8);

    console.log(limit);
    console.log(currentPage);
    console.log(filter);
    console.log(name);

    try {
      const data = await fetchCards(currentPage, limit, filter, name);

      controlPagination(data.perPage, data.totalPages);

      apendMarkup(exerciseCardListRef, createCardsString(data.results));

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
}
