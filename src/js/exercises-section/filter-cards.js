import Notiflix from 'notiflix';
import { fetchFilter } from '../api';
import { addClass, removeClass } from '../components/classFunctions';
import {
  setActiveItem,
  apendMarkup,
  insertHtml,
} from '../components/fn-helpers';
import {
  createFilterString,
  createFiltersCardsSkeleton,
} from './filter-card-template';
import {
  filterCardsListRef,
  filterListRef,
  filterBtnsRefs,
  activeFilter,
  paginationList,
  activePagination,
  breadCrumbsList,
  breadCrumbsSlash,
} from '../components/refs';
import { addClass, removeClass } from './components/classFunctions';
import { setActiveItem, apendMarkup, insertHtml } from './fn-helpers';
import Notiflix from 'notiflix';
import {searchRefs} from './exercises-cards'

import { createSmoothScrollBottom, createSmoothScrollUp } from '../scrolls';
// ******************************************************************
let filterName = '';
let totalPages = null;
let dataLength;
let firstElementOfCards;

window.addEventListener('load', makeFilterActive);
filterListRef.addEventListener('click', getFilterNameAndMakeActive);
paginationList.forEach(el => {
  el.addEventListener('click', getCurrentPage);
});

//~ Підкреслення активного фільтру
function makeFilterActive() {
  getFilters(activeFilter.textContent.trim());
  addClass(activeFilter, 'exercises__filter-btn_active');
  addClass(activePagination, 'exercises__pagination-btn_active');
}

//~ Витягування текст контент кнопки фільтру
function getFilterNameAndMakeActive(e) {
  setActiveItem(
    paginationList,
    activePagination,
    'exercises__pagination-btn_active'
  );

  if (e.target.tagName.toUpperCase() !== 'BUTTON') return;
  filterName = e.target.textContent.trim();

  getFilters(filterName);
  createSmoothScrollBottom(
    filterCardsListRef.firstElementChild.getBoundingClientRect(),
    1
  );

  setActiveItem(filterBtnsRefs, e.target, 'exercises__filter-btn_active');
}

// function createBreadCrumbs(filter) {
//   return `<li class='exersises__breadcrumb-item'>${filter}</li>`;
// }

// ~ Запит на бек
async function getFilters(filter, page = 1) {
  let data;

  filterBtnsRefs.forEach(btn => (btn.disabled = true));
  paginationList.forEach(btn => (btn.disabled = false));

  try {
    if (screen.width > 767) {
      apendMarkup(filterCardsListRef, createFiltersCardsSkeleton(10));

      data = await fetchFilter(page, 12, filter);
      totalPages = data.totalPages;
      dataLength = data.results.length;

      if (page >= totalPages) {
        makePaginationItemsDisabled();
      }

      data.results.forEach(result => {
        //!!!!!!!!!!!!!!!!!!!
        if (result.filter === filter) {
          apendMarkup(filterCardsListRef, createFilterString(data.results));
        } else {
          makePaginationItemsDisabled();
          return;
        }
      });
    } else {
      apendMarkup(filterCardsListRef, createFiltersCardsSkeleton(9));

      data = await fetchFilter(page, 9, filter);
      dataLength = data.results.length;
      totalPages = data.totalPages;

      if (page >= totalPages) {
        makePaginationItemsDisabled();
        return;
      }

      data.results.forEach(result => {
        //!!!!!!!!!!!!!!!!!!!
        if (result.filter === filter) {
          apendMarkup(filterCardsListRef, createFilterString(data.results));
        } else {
          makePaginationItemsDisabled();
          return;
        }
      });
    }
  } catch (err) {
    if (screen.width > 767) {
      apendMarkup(filterCardsListRef, createFiltersCardsSkeleton(12));
    }
    apendMarkup(filterCardsListRef, createFiltersCardsSkeleton(9));

    console.log(err.message);
  } finally {
    searchRefs();
    filterBtnsRefs.forEach(btn => (btn.disabled = false));
    if (filter === 'Body parts' && page === 1) return;
  }
}

//~ Отримання поточної сторінки
function getCurrentPage(e) {
  const page = e.target.textContent;
  getFilters(filterName, page);

  createSmoothScrollUp(filterListRef);

  setActiveItem(paginationList, e.target, 'exercises__pagination-btn_active');
}

function makePaginationItemsDisabled() {
  notifyTheEnd();

  paginationList.forEach(btn => {
    if (btn.classList.contains('exercises__pagination-btn_active')) return;

    for (
      let i = findActivePaginationIndex() + 1;
      i < paginationList.length;
      i++
    ) {
      paginationList[i].setAttribute('disabled', true);
    }
  });
}

function notifyTheEnd() {
  let hasBeenCalled = false;
  if (!hasBeenCalled && document.documentElement.scrollTop > 1000) {
    Notiflix.Notify.info('Sorry,this is the end 😭');
    hasBeenCalled = true;
  }
}

function findActivePaginationIndex() {
  const arr = [...paginationList];
  const activePageIndex = arr.findIndex(btn =>
    btn.classList.contains('exercises__pagination-btn_active')
  );

  return activePageIndex;
}

function createSmoothScrollBottom() {
  const { height: cardHeight } =
    filterCardsListRef.firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2.5,
    behavior: 'smooth',
  });
}

