import Notiflix from 'notiflix';
import { fetchFilter } from '../api';
import { addClass, removeClass } from '../components/fn-helpers';
import { setActiveItem, apendMarkup } from '../components/fn-helpers';
import {
  createFilterString,
  createFiltersCardsSkeleton,
} from './filter-card-template';
import {
  filterCardsListRef,
  activeFilter,
  filterBtnsRefs,
  exerciseCardListRef,
} from '../components/refs';
import { createSmoothScrollBottom } from '../scrolls';
import { searchRefs } from './exercises-cards';
import { createPaginItems } from './pagination';

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

    searchRefs();
  } catch (error) {
    console.log(error);
  } finally {
    filterBtnsRefs.forEach(btn => (btn.disabled = false));
    createPaginItems(data.totalPages, page);
    createSmoothScrollUp(filterCardsListRef);
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
      removeClass(filterCardsListRef, 'is-hidden');
      addClass(filterCardsListRef, 'exercises__filter-cards-list');
      addClass(exerciseCardListRef, 'is-hidden');
      removeClass(exerciseCardListRef, 'exercises__cards-list');

      // filterCardsListRef.classList.toggle('exercises__filter-cards-list');
      // exerciseCardListRef.classList.toggle('exercises__cards-list');
      // exerciseCardListRef.classList.toggle('is-hidden');
      // filterCardsListRef.classList.toggle('is-hidden');

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
