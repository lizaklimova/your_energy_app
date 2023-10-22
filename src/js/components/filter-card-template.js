import { capitalizeFirstLetter } from '../fn-helpers';

// ! Створення картки по фільтрам
export function createFilterString(arr) {
  const filterCardString = arr
    .map(({ imgURL, filter, name }) => {
      return `<li class="exercises__filter-card">

   <div class="exercises__filter-img-container" style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), 
              url('${imgURL}') ;
               background-size: cover;
background-position:center;
background-repeat: no-repeat;
              "
</div>
<div class="exercises__filter-text-wrap">
 <p class="exercises__filter-category">${capitalizeFirstLetter(name)}</p>
    <p class="exercises__filter-name">${filter}</p>
</div>
  </li>`;
    })
    .join('');

  return filterCardString;
}

export function createFiltersCardsSkeleton(amount) {
  let skeleton = '';
  for (let i = 0; i < amount; i++) {
    skeleton +=
      '<li class="exercises__skeleton-loader"><span class="skeleton-loader"><svg class="exercises__image-skeleton" width="30" height="30"><use href="./img/icons.svg#img-skeleton"></use></svg><span></span></span></li > ';
  }
  return skeleton;
}
