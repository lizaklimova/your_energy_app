import { capitalizeFirstLetter } from '../components/fn-helpers';

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
      '<li class="exercises__skeleton-loader"><span class="skeleton-loader"><symbol id="icon-image" viewBox="0 0 32 32"><path d="M29.996 4c0.001 0.001 0.003 0.002 0.004 0.004v23.993c-0.001 0.001-0.002 0.003-0.004 0.004h-27.993c-0.001-0.001-0.003-0.002-0.004-0.004v-23.993c0.001-0.001 0.002-0.003 0.004-0.004h27.993zM30 2h-28c-1.1 0-2 0.9-2 2v24c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-24c0-1.1-0.9-2-2-2v0z"></path><path d="M26 9c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"></path><path d="M28 26h-24v-4l7-12 8 10h2l7-6z"></path></symbol><span></span></span></li>';
  }
  return skeleton;
}
