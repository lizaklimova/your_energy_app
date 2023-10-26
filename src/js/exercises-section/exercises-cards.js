import { filterCardsListRef, exerciseCardListRef } from '../components/refs';
import { fetchCards } from '../api';
import {
  apendMarkup,
  addClass,
  removeClass,
  spliceLastLetter,
  minimiseFirstLetter,
  replaceSpace,
} from '../components/fn-helpers';
import { createCardsString } from '../components/cards-template';
import { handleModalOpen } from './exercise-modal';
import { createPaginItems } from './pagination';
import { getCardsOnInput, searchInputContainer } from '../search';

export const searchRefs = () => {
  const imgClick = document.querySelectorAll('.exercises__filter-card');
  imgClick.forEach(needBtn => {
    needBtn.addEventListener('click', exercisesCard);
  });
};

let limit;
let currentPage = 1;
let name;
let minimisedFilter;
let minimisedName;

export function exercisesCard(e) {
  name = e.currentTarget.dataset;
  minimisedFilter = minimiseFirstLetter(spliceLastLetter(name.filter));
  minimisedName = minimiseFirstLetter(replaceSpace(name.name));

  getCardsOnInput(minimisedName, minimisedFilter);
  removeClass(searchInputContainer, 'is-hidden');

  screen.width >= 768 ? (limit = 10) : (limit = 8);
  getCard(currentPage);
}

export function getCard(currentPage) {
  fetchCards(currentPage, limit, minimisedFilter, minimisedName)
    .then(data => {
      addClass(filterCardsListRef, 'is-hidden');
      removeClass(filterCardsListRef, 'exercises__filter-cards-list');
      removeClass(exerciseCardListRef, 'is-hidden');
      addClass(exerciseCardListRef, 'exercises__cards-list');
      apendMarkup(exerciseCardListRef, createCardsString(data.results));

      const exerciseOpenBtn = document.querySelectorAll('[data-exmod-open]');
      exerciseOpenBtn.forEach(btn => {
        btn.addEventListener('click', e => {
          const data = e.currentTarget.dataset.id;
          handleModalOpen(data);
        });
      });
      return data;
    })
    .then(data => {
      createPaginItems(data.totalPages, currentPage);
    })
    .catch(error => console.log(error));
}
