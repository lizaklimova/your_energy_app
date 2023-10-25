import { addClass, removeClass } from '../components/fn-helpers';

const inputRef = document.querySelector('#input-search');
const searchBtn = document.querySelector('.exercises__form-submit-btn');
const resetBtn = document.querySelector('.exercises__form-reset-btn');
inputRef.addEventListener('input', e => {
  removeClass(resetBtn, 'is-hidden');
  addClass(searchBtn, 'is-hidden');
});
//   <div class="exercises__input-div">
//         <label class="exercises__input-label" for="input-search"></label>
//         <input
//           id="input-search"
//           type="search"
//           name="filter-search"
//           placeholder="Search"
//           class="exercises__filter-search-input"
//         />

//         <button class="exercises__form-submit-btn" type="submit">
//           <svg class="exercises__form-submit-btn-icon" width="18" height="18">
//             <use href="./img/icons.svg#icon-search"></use>
//           </svg>
//         </button>
//         <button class="exercises__form-reset-btn is-hidden" type="reset">
//           <svg class="exercises__form-reset-btn-icon" width="18" height="18">
//             <use href="./img/icons.svg#icon-x"></use>
//           </svg>
//         </button>
//       </div>
