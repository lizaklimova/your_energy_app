import axios from 'axios';
import { fetchFilter } from './api';
import {
  createFilterString,
  createFiltersCardsSkeleton,
} from './components/filter-card-template';
import { filterListRef } from './refs';

getFilters();

async function getFilters() {
  filterListRef.insertAdjacentHTML('beforeend', createFiltersCardsSkeleton(9));
  try {
    let data = await fetchFilter(1, 9, 'Body parts');
    if (screen.width > 767) {
      data = await fetchFilter(1, 12, 'Body parts');
    }
    filterListRef.innerHTML = createFilterString(data.results);
  } catch (err) {
    console.log(err.message);
  }
}
