import { fetchFilter } from './api';
import {
  createFilterString,
  createFiltersCardsSkeleton,
} from './components/filter-card-template';
import {
  filterCardsListRef,
  filterListRef,
  filterFilterBtnsRefs,
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

window.addEventListener('load', makeFilterActive);
filterListRef.addEventListener('click', getFilterNameAndMakeActive);
paginationList.forEach(el => {
  el.addEventListener('click', getCurrentPage);
});

function makeFilterActive() {
  getFilters(activeFilter.textContent.trim());
  addClass(activeFilter, 'exercises__filter-btn_active');
  addClass(activePagination, 'exercises__pagination-btn_active');
}

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

  setActiveItem(filterFilterBtnsRefs, e.target, 'exercises__filter-btn_active');
}
console.log(activePagination.nextElementSibling);
async function getFilters(filter, page = 1) {
  apendMarkup(filterCardsListRef, createFiltersCardsSkeleton(9));

  if (screen.width > 767) {
    filterCardsListRef(filterCardsListRef, createFiltersCardsSkeleton(12));
  }

  try {
    let data = await fetchFilter(page, 9, filter);

    totalPages = data.totalPages;

    if (screen.width > 767) {
      data = await fetchFilter(page, 12, filter);
      totalPages = data.totalPages;
    }

    data.results.forEach(result => {
      if (result.filter !== filter) {
        // Notiflix.Notify.info('Ooops, this is the end😓');
        // setActiveItem();
        return;
      }
      apendMarkup(filterCardsListRef, createFilterString(data.results));
    });
  } catch (err) {
    filterCardsListRef.innerHTML = createFiltersCardsSkeleton(9);
    console.log(err.message);
  }
}

function getCurrentPage(e) {
  const page = e.target.textContent;
  getFilters(filterName, page);
  setActiveItem(paginationList, e.target, 'exercises__pagination-btn_active');

  if (page > totalPages) {
    Notiflix.Notify.info('Sorry,this i');
    return;
  }
}
