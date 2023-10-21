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
} from './refs';
import { addClass, removeClass } from './components/classFunctions';
// ******************************************************************

window.addEventListener('load', makeFilterActive);
filterListRef.addEventListener('click', getFilterNameAndMakeActive);

function makeFilterActive() {
  getFilters(activeFilter.textContent.trim());
  addClass(activeFilter, 'exercises__filter-btn_active');
}

function getFilterNameAndMakeActive(e) {
  if (e.target.tagName.toUpperCase() !== 'BUTTON') return;
  const filterName = e.target.textContent.trim();

  getFilters(filterName);

  filterFilterBtnsRefs.forEach(btn => {
    removeClass(btn, 'exercises__filter-btn_active');
  });

  addClass(e.target, 'exercises__filter-btn_active');
}

async function getFilters(filter) {
  filterCardsListRef.insertAdjacentHTML(
    'beforeend',
    createFiltersCardsSkeleton(9)
  );

  try {
    let data = await fetchFilter(1, 9, filter);
    if (screen.width > 767) {
      data = await fetchFilter(1, 12, filter);
    }
    filterCardsListRef.innerHTML = createFilterString(data.results);
  } catch (err) {
    console.log(err.message);
  }
}
