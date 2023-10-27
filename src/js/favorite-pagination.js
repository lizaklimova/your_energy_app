// let currentPage = 1;
// let perPage = 8;

// // ~ Створення кнопок для пагінації
// export function displayPagination(totalPages) {
//   const paginList = document.querySelector('.favorite__cards-pagination');
//   paginList.innerHTML = '';

//   for (let i = 1; i <= totalPages; i++) {
//     const paginEl = displayPaginationBtn(i);

//     paginList.appendChild(paginEl);
//   }
// }

// // ~ Створення однієї кнопки пагінації
// export function displayPaginationBtn(page) {
//   const paginItem = document.createElement('li');
//   paginItem.innerHTML = page;
//   addClass(paginItem, 'favorite__pagination-item');

//   console.log(currentPage);
//   if (currentPage === page) {
//     addClass(paginItem, 'favorite__pagination-item_active');
//   }

//   paginItem.addEventListener('click', () => {
//     currentPage = page;

//     loadFavourite();

//     let activePaginItem = document.querySelector(
//       '.favorite__pagination-item_active'
//     );
//     removeClass(activePaginItem, 'favorite__pagination-item_active');
//     addClass(paginItem, 'favorite__pagination-item_active');
//   });

//   return paginItem;
// }
// const startIndex = (currentPage - 1) * perPage;
// const endIndex = startIndex + perPage;
// const displayedCards = allEx.slice(startIndex, endIndex);
// let cardMarkup;
// for (let i = 0; i < displayedCards.length; i++) {
//   cardMarkup = createCardsString(displayedCards);
// }
// apendMarkup(favouriteCardRef, cardMarkup);
// if (allEx.length > perPage) {
//   displayPagination(Math.ceil(allEx.length / perPage));
// }
