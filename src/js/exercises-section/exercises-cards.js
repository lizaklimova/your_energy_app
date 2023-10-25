import 'tui-pagination/dist/tui-pagination.css';
import Pagination from 'tui-pagination';
import { filterCardsListRef } from '../components/refs';
import { apendMarkup, insertHtml } from '../components/fn-helpers';
import { fetchCards } from '../api';
import { addClass, removeClass } from '../components/fn-helpers';
import {
  createCardsSkeleton,
  createCardsString,
} from '../components/cards-template';
import { handleModalOpen } from './exercise-modal';

// function replaceSpace(text) {
//   const words = text.trim().split(' ');
//   if (words.length === 2) {
//     return words.join('%20');
//   } else {
//     return text;
//   }
// }

function minimiseFirstLetter(str) {
  const words = str.slice(0, 1).toLowerCase() + str.slice(1);
  const word = words.split(' ');
  if (word.length === 2) {
    return word.join('');
  } else {
    return words;
  }
}

function spliceLastLetter(filter) {
  if (filter === 'Body parts') {
    return filter.slice(0, filter.length - 1);
  } else {
    return filter;
  }
}

export const searchRefs = () => {
  const imgClick = document.querySelectorAll('.exercises__filter-card');
  imgClick.forEach(needBtn => {
    needBtn.addEventListener('click', exercisesCard);
  });
};
const exerciseCardListRef = document.querySelector('.exercises__cards-list');

const exercisesCard = e => {
  let name = e.currentTarget.dataset;
  console.log(name);
  let minimisedFilter = minimiseFirstLetter(spliceLastLetter(name.filter));

  getCard();

  let page = 1;
  let perPage = 10;

  const paginList = document.getElementById('tui-pagination-container');
  const instance = new Pagination(paginList, {
    totalItems: 21,
    itemsPerPage: perPage,
    visiblePages: 5,
    centerAlign: true,
  });

  instance.on('afterMove', event => {
    exerciseCardListRef.innerHTML = '';
    getCard(event.page);
  });

  function getCard(page = 1, perPage = 10) {
    fetchCards(page, perPage, minimisedFilter, minimiseFirstLetter(name.name))
      .then(data => {
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

        // cardBtnRef();
      })
      .catch(er => console.log(er));
  }
};
