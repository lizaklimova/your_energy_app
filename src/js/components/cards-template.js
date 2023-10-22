import { capitalizeFirstLetter } from '../fn-helpers';

function returnMarkup() {
  return `<li class="exercises__item-card">
      <h1>Hello</h1>
        <div class="card">
          <div class="card__top">
            <span class="card_tag">Workout</span>
            <span class="card_rating">
              <span>4.0</span>
              <svg width="34" height="32">
                <use href="./img/icons.svg#icon-star-yellow"></use>
              </svg>
            </span>
            <button class="card__btn">
              Start
              <svg class="card__btn-arrow" width="32" height="32">
                <use href="./img/icons.svg#icon-right-arrow"></use>
              </svg>
            </button>
          </div>
          <div class="card__middle">
            <svg class="card__title-svg" width="32" height="32">
              <use href="./img/icons.svg#icon-run-men2"></use>
            </svg>
            <h3 class="card__title">Air bike</h3>
          </div>
          <div class="card__bottom">
            <p class="card__text"><span>Burned calories:</span> 312 / 3 min</p>
            <p class="card__text"><span>Body part:</span> Waist</p>
            <p class="card__text"><span>Target:</span> Abs</p>
          </div>
        </div>
      </li>`;
}

// ! Створення картки по фільтрам
export function createCardsString(arr) {
  const cardsString = arr
    .map(({ imgURL, filter, name }) => {
      return returnMarkup();
    })
    .join('');

  return cardsString;
}

export function createCardsSkeleton(amount) {
  let skeleton = '';
  for (let i = 0; i < amount; i++) {
    skeleton +=
      '<li class="exercises__skeleton-loader"> <span class="skeleton-loader"></span></li>';
  }
  return skeleton;
}
