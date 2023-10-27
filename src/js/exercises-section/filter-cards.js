import { fetchFilter } from '../api';
import {
  addClass,
  removeClass,
  setActiveItem,
  apendMarkup,
} from '../components/fn-helpers';
import {
  createFilterString,
  createFiltersCardsSkeleton,
} from './filter-card-template';
import {
  filterCardsListRef,
  activeFilter,
  filterBtnsRefs,
  exerciseCardListRef,
  searchInputContainer,
} from '../components/refs';
import { createSmoothScrollBottom } from '../scrolls';
import { searchRefs } from './exercises-cards';
import { createPaginItems } from './pagination';
import { breadCrumbs } from './bread-crumbs';

// ********************************************************

window.addEventListener('load', () => {
  addClass(activeFilter, 'exercises__filter-btn_active');
});

fetchDataFromFilter();
let filterName = '';
let data;
let currentPage = 1;

export async function fetchDataFromFilter(filter = 'Body parts', page = 1) {
  filterBtnsRefs.forEach(btn => (btn.disabled = true));
  try {
    if (screen.width > 767) {
      apendMarkup(filterCardsListRef, createFiltersCardsSkeleton(12));
      data = await fetchFilter(page, 12, filter);
    } else {
      apendMarkup(filterCardsListRef, createFiltersCardsSkeleton(9));
      data = await fetchFilter(page, 9, filter);
    }
    apendMarkup(filterCardsListRef, createFilterString(data.results));
    underlineActiveFilter();
    createPaginItems(data.totalPages, page);
    searchRefs();
    breadCrumbs();
  } catch (error) {
    console.log(error);
  } finally {
    filterBtnsRefs.forEach(btn => (btn.disabled = false));
  }
}

//~ Підкреслення активного фільтру
export function underlineActiveFilter() {
  const exerFiltersList = document.querySelector('.exercises__filter-list');
  const filterBtns = exerFiltersList.querySelectorAll(
    '.exercises__filter-item button'
  );

  filterBtns.forEach(button => {
    button.addEventListener('click', event => {
      addClass(searchInputContainer, 'is-hidden');
      removeClass(filterCardsListRef, 'is-hidden');
      addClass(filterCardsListRef, 'exercises__filter-cards-list');
      addClass(exerciseCardListRef, 'is-hidden');
      removeClass(exerciseCardListRef, 'exercises__cards-list');
      let exHeaderInfo = document.querySelector(
        '.info__exercises__categories-subtitle'
      );
      let exHeader = document.querySelector('.exercises__categories-subtitle');
      exHeaderInfo.innerHTML = '';
      exHeader.innerHTML = '';
      filterName = event.target.textContent;
      fetchDataFromFilter(filterName.trim());
      createSmoothScrollBottom(
        filterCardsListRef.firstElementChild.getBoundingClientRect(),
        1
      );
      setActiveItem(filterBtns, button, 'exercises__filter-btn_active');
    });
  });
}

export function getCurrentPageFilter(page) {
  currentPage = page;
  const underlinedFilter = document.querySelector(
    '.exercises__filter-btn_active'
  );
  fetchDataFromFilter(underlinedFilter.textContent.trim(), currentPage);
}
