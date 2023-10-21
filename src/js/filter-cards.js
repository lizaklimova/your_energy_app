import axios from 'axios';
import { fetchFilter } from './api';
import { createFilterString } from './components/filter-card-template';
import { listRef } from './refs';

getFilters();

async function getFilters() {
  let data = await fetchFilter(1, 9, 'Body parts');
  if (screen.width > 767) {
    data = await fetchFilter(1, 12, 'Body parts');
  }
  listRef.insertAdjacentHTML('beforeend', createFilterString(data.results));
}
