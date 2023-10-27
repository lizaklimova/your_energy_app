import { filterCardsListRef, exerciseCardListRef } from '../components/refs';
import { createSmoothScrollUp } from '../scrolls';
import { getCurrentPageCards } from './exercises-cards';
import { getCurrentPageFilter } from './filter-cards';
import { getCurrentPageSearch } from '../search';

export function createPaginItems(totalPages, currentPage) {
  const paginList = document.querySelector('.exercises__pagination');

  paginList.innerHTML = '';

  let paginItem = '';
  let beforePages = currentPage - 1;
  let afterPages = currentPage + 1;
  let activePagin;

  if (currentPage > 1) {
    paginItem += `<li class="pagin-btn prev"><span>←Prev</span></li>`;
  }

  if (currentPage > 2) {
    paginItem += `<li class="exercises__pagination-item">1</li>`;

    if (currentPage > 3) {
      paginItem += `<li class="pagin-dots">...</li>`;
    }
  }

  for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
    if (pageLength > totalPages) continue;
    if (pageLength === 0) pageLength += 1;

    if (currentPage === pageLength) {
      activePagin = 'exercises__pagination-item_active';
    } else {
      activePagin = '';
    }

    paginItem += `<li class="exercises__pagination-item ${activePagin}">${pageLength}</li>`;
  }

  if (currentPage < totalPages - 1) {
    if (currentPage < totalPages - 2) {
      paginItem += `<li class="pagin-dots">...</li>`;
    }
    paginItem += `<li class="exercises__pagination-item">${totalPages}</li>`;
  }

  if (currentPage < totalPages) {
    paginItem += `<li class="pagin-btn next"><span>Next→</span></li>`;
  }

  paginList.innerHTML = paginItem;
  const paginItems = paginList.querySelectorAll('.exercises__pagination-item');
  const prevButton = paginList.querySelector('.pagin-btn.prev');
  const nextButton = paginList.querySelector('.pagin-btn.next');

  paginItems.forEach(item => {
    item.addEventListener('click', event => {
      const pageNumber = Number(event.target.textContent);
      currentPage = pageNumber;
      createPaginItems(totalPages, pageNumber);

      if (!checkCurrentList()) {
        getCurrentPageFilter(currentPage);
      } else {
        getCurrentPageCards(currentPage);
      }

      getCurrentPageSearch(currentPage);
      createSmoothScrollUp(filterCardsListRef);

      return currentPage;
    });
  });

  if (prevButton) {
    prevButton.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        createPaginItems(totalPages, currentPage);

        if (!checkCurrentList()) {
          getCurrentPageFilter(currentPage);
        } else {
          getCurrentPageCards(currentPage);
        }

        getCurrentPageSearch(currentPage);

        createSmoothScrollUp(filterCardsListRef);
        return currentPage;
      }
    });
  }

  if (nextButton) {
    nextButton.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage++;
        createPaginItems(totalPages, currentPage);

        if (!checkCurrentList()) {
          getCurrentPageFilter(currentPage);
        } else {
          getCurrentPageCards(currentPage);
        }

        getCurrentPageSearch(currentPage);
        createSmoothScrollUp(filterCardsListRef);
        return currentPage;
      }
    });
  }

  return currentPage;
}

function checkCurrentList() {
  return filterCardsListRef.classList.contains('is-hidden') ? true : false;
}
