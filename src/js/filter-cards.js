import axios from 'axios';
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
import { setActiveItem } from './fn-helpers';
// ******************************************************************
let filterName = '';

window.addEventListener('load', makeFilterActive);
filterListRef.addEventListener('click', getFilterNameAndMakeActive);
paginationList.forEach(el => {
  el.addEventListener('click', getCurrentPage);
});

function makeFilterActive() {
  getFilters(activeFilter.textContent.trim());
  addClass(activeFilter, 'exercises__filter-btn_active');
  addClass(activePagination, 'exercises__pagination-item_active');
}

function getFilterNameAndMakeActive(e) {
  setActiveItem(
    paginationList,
    activePagination,
    'exercises__pagination-item_active'
  );

  if (e.target.tagName.toUpperCase() !== 'BUTTON') return;
  filterName = e.target.textContent.trim();

  getFilters(filterName);

  paginationList.forEach(item => {
    item.addEventListener('click', getCurrentPage);
  });

  setActiveItem(filterFilterBtnsRefs, e.target, 'exercises__filter-btn_active');
}

async function getFilters(filter, page = 1) {
  filterCardsListRef.innerHTML = createFiltersCardsSkeleton(9);
  if (screen.width > 767) {
    filterCardsListRef.innerHTML = createFiltersCardsSkeleton(12);
  }

  try {
    let data = await fetchFilter(page, 9, filter);
    if (screen.width > 767) {
      data = await fetchFilter(page, 12, filter);
    }
    filterCardsListRef.innerHTML = createFilterString(data.results);
  } catch (err) {
    filterCardsListRef.innerHTML = createFiltersCardsSkeleton(9);
    console.log(err.message);
  }
}

function getCurrentPage(e) {
  const page = e.target.textContent;
  getFilters(filterName, page);
  setActiveItem(paginationList, e.target, 'exercises__pagination-item_active');
}
