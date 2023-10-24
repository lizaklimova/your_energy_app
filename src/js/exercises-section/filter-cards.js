import Notiflix from 'notiflix';
import { fetchFilter } from '../api';
import { addClass, removeClass } from '../components/fn-helpers';
import { setActiveItem, apendMarkup } from '../components/fn-helpers';
import {
  createFilterString,
  createFiltersCardsSkeleton,
} from './filter-card-template';
import { filterCardsListRef, activeFilter } from '../components/refs';

// ******************************************************************

window.addEventListener('load', () => {
  addClass(activeFilter, 'exercises__filter-btn_active');
});

getFilters();
function getFilters() {
  let filterName = '';
  let data;
  let currentPage = 1;

  fetchDataFromFilter();
  async function fetchDataFromFilter(filter = 'Body parts', page = 1) {
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
    } catch (error) {
      console.log(error);
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
        filterName = event.target.textContent;
        fetchDataFromFilter(filterName.trim());

        setActiveItem(filterBtns, button, 'exercises__filter-btn_active');
        // event.target.disabled = true;
      });
    });
  }

  // ~ Створення кнопок для пагінації
  function displayPagination(totalPages) {
    const paginList = document.querySelector('.exercises__pagination');
    paginList.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
      const paginEl = displayPaginationBtn(i);

      paginList.appendChild(paginEl);
    }
  }

  // ~ Створення однієї кнопки пагінації
  function displayPaginationBtn(page) {
    const paginItem = document.createElement('li');
    paginItem.innerHTML = page;
    addClass(paginItem, 'exercises__pagination-item');

    if (currentPage === page) {
      paginItem.classList.add('exercises__pagination-item_active');
    }

    paginItem.addEventListener('click', () => {
      currentPage = page;

      let activeFilter = document.querySelector(
        '.exercises__filter-btn_active'
      );
      let activePaginItem = document.querySelector(
        '.exercises__pagination-item_active'
      );
      console.log(activeFilter.textContent.trim());
      fetchDataFromFilter(activeFilter.textContent.trim(), currentPage);

      activePaginItem.classList.remove('exercises__pagination-item_active');

      paginItem.classList.add('exercises__pagination-item_active');
    });

    return paginItem;
  }
}
