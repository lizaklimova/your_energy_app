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

function controlPagination(page, perPage, totalPages) {
  const paginList = document.getElementById('tui-pagination-container');
  const instance = new Pagination(paginList, {
    totalItems: totalPages * perPage,
    itemsPerPage: perPage,
    visiblePages: 5,
    centerAlign: true,
  });

  instance.on('afterMove', event => {
    exerciseCardListRef.innerHTML = '';
    page = event.page;
  });
}

let limit;
let currentPage = 1;

function exercisesCard(e) {
  let name = e.currentTarget.dataset;
  let minimisedFilter = minimiseFirstLetter(spliceLastLetter(name.filter));
  let minimisedName = minimiseFirstLetter(name.name);

  screen.width >= 768 ? (limit = 10) : (limit = 8);
  getCard(currentPage, limit, minimisedFilter, minimisedName);

  console.log(limit);
  console.log(currentPage);
  console.log(minimisedFilter);
  console.log(minimisedName);
}

async function getCard(page = 1, limit = 10, filter, name) {
  try {
    const data = await fetchCards(page, limit, filter, name);

    console.log(data);

    addClass(filterCardsListRef, 'is-hidden');
    removeClass(filterCardsListRef, 'exercises__filter-cards-list');
    apendMarkup(exerciseCardListRef, createCardsSkeleton(10));
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
