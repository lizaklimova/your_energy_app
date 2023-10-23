import { fetchFilter } from './api';
import {
  createFilterString,
  createFiltersCardsSkeleton,
} from './components/filter-card-template';
import {
  filterCardsListRef,
  filterListRef,
  filterBtnsRefs,
  activeFilter,
  paginationList,
  activePagination,
} from './refs';
import { addClass, removeClass } from './components/classFunctions';
import { setActiveItem, apendMarkup } from './fn-helpers';
import Notiflix from 'notiflix';
// ******************************************************************
let filterName = '';
let totalPages = null;
let hasBeenCalled = false;

window.addEventListener('load', makeFilterActive);
filterListRef.addEventListener('click', getFilterNameAndMakeActive);
paginationList.forEach(el => {
  el.addEventListener('click', getCurrentPage);
});

// Підкреслення активного фільтру
function makeFilterActive() {
  // getCurrentPage();
  getFilters(activeFilter.textContent.trim());
  addClass(activeFilter, 'exercises__filter-btn_active');
  addClass(activePagination, 'exercises__pagination-btn_active');
}

// Витягування текст контент кнопки фільтру
function getFilterNameAndMakeActive(e) {
  setActiveItem(
    paginationList,
    activePagination,
    'exercises__pagination-btn_active'
  );

  if (e.target.tagName.toUpperCase() !== 'BUTTON') return;
  filterName = e.target.textContent.trim();

  getFilters(filterName);

  paginationList.forEach(item => {
    item.addEventListener('click', getCurrentPage);
  });

  setActiveItem(filterBtnsRefs, e.target, 'exercises__filter-btn_active');
}

// Запит на бек
async function getFilters(filter, page = 1) {
  let data;
  let dataLength;

  filterBtnsRefs.forEach(btn => (btn.disabled = true));
  paginationList.forEach(btn => (btn.disabled = false));

  try {
    if (screen.width > 767) {
      apendMarkup(filterCardsListRef, createFiltersCardsSkeleton(12));

      data = await fetchFilter(page, 12, filter);
      totalPages = data.totalPages;
      // dataLength = data.results.length;

      // Перевірка яка сторінка
      if (page >= totalPages && page === 1) {
        document.addEventListener('scroll', notifyTheEnd);
      }

      if (page >= totalPages) {
        // if (page === 1) return;
        makePaginationItemsDisabled();
      }
      // document.removeEventListener('scroll', notifyTheEnd);
    } else {
      apendMarkup(filterCardsListRef, createFiltersCardsSkeleton(9));
      data = await fetchFilter(page, 9, filter);
      // dataLength = data.results.length;

      totalPages = data.totalPages;

      if (page >= totalPages && page === 1) {
        document.addEventListener('scroll', notifyTheEnd);
      }

      if (page >= totalPages) {
        // if (page === 1) return;
        makePaginationItemsDisabled();
      }
    }
    apendMarkup(filterCardsListRef, createFilterString(data.results));
  } catch (err) {
    apendMarkup(filterCardsListRef, createFiltersCardsSkeleton(9));
    console.log(err.message);
  } finally {
    filterBtnsRefs.forEach(btn => (btn.disabled = false));
  }
}

// Отримання поточної сторінки
function getCurrentPage(e) {
  const page = e.target.textContent;
  getFilters(filterName, page);
  setActiveItem(paginationList, e.target, 'exercises__pagination-btn_active');
}

function makePaginationItemsDisabled() {
  // setTimeout(() => {
  Notiflix.Notify.info('Sorry,this is the end 😭');
  // }, 2000);
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
  if (!hasBeenCalled && document.documentElement.scrollTop > 900) {
    makePaginationItemsDisabled();
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
