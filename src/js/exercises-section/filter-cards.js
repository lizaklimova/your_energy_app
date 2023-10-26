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
} from '../components/refs';
import { createSmoothScrollUp, createSmoothScrollBottom } from '../scrolls';
import { searchRefs } from './exercises-cards';

// ********************************************************

window.addEventListener('load', () => {
  addClass(activeFilter, 'exercises__filter-btn_active');
});

fetchDataFromFilter();
let filterName = '';
let data;
let currentPage = 1;

 async function fetchDataFromFilter(filter = 'Body parts', page = 1) {
  filterBtnsRefs.forEach(btn => (btn.disabled = true));
  try {
    if (screen.width > 767) {
      apendMarkup(filterCardsListRef, createFiltersCardsSkeleton(10));
      data = await fetchFilter(page, 12, filter);
    } else {
      apendMarkup(filterCardsListRef, createFiltersCardsSkeleton(9));
      data = await fetchFilter(page, 9, filter);
    }
    apendMarkup(filterCardsListRef, createFilterString(data.results));
    underlineActiveFilter();

    displayPagination(data.totalPages);
    searchRefs();
  } catch (error) {
    console.log(error);
  } finally {
    filterBtnsRefs.forEach(btn => (btn.disabled = false));
  }
}

//~ Підкреслення активного фільтру
function underlineActiveFilter() {
  const exerFiltersList = document.querySelector('.exercises__filter-list');
  const filterBtns = exerFiltersList.querySelectorAll(
    '.exercises__filter-item button'
  );

  filterBtns.forEach(button => {
    button.addEventListener('click', event => {
      currentPage = 1;
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

// ~ Створення кнопок для пагінації
export function displayPagination(totalPages) {
  const paginList = document.querySelector('.exercises__pagination');
  paginList.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const paginEl = displayPaginationBtn(i);

    paginList.appendChild(paginEl);
  }
}

// ~ Створення однієї кнопки пагінації
export function displayPaginationBtn(page) {
  const paginItem = document.createElement('li');
  paginItem.innerHTML = page;
  addClass(paginItem, 'exercises__pagination-item');

  if (currentPage === page) {
    addClass(paginItem, 'exercises__pagination-item_active');
  }

  paginItem.addEventListener('click', () => {
    currentPage = page;

    let activeFilter = document.querySelector('.exercises__filter-btn_active');
    let activePaginItem = document.querySelector(
      '.exercises__pagination-item_active'
    );

    fetchDataFromFilter(activeFilter.textContent.trim(), currentPage);
    createSmoothScrollUp(filterCardsListRef);

    removeClass(activePaginItem, 'exercises__pagination-item_active');

    addClass(paginItem, 'exercises__pagination-item_active');
  });

  return paginItem;
}
