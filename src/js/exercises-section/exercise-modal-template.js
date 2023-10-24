import { capitalizeFirstLetter } from '../components/fn-helpers';

export function renderExerciseModal({
  bodyPart,
  equipment,
  gifUrl,
  name,
  target,
  description,
  rating,
  burnedCalories,
  time,
  popularity,
}) {
  return ` 
    <div class="exercise-modal-tumb">
            <img
              class="exercise-modal__img"
              src="${gifUrl}" 
              alt="exercise"
              width="295"
              height="259"
            />
            <div class="exercise-modal-tumb_card">
              <h2 class="exercise-modal__title">${capitalizeFirstLetter(
                name
              )}</h2>
              <p class="exercise-modal-rating__number">${rating}</p>

              <div class='exercise-modal-tumb_list'>
              <ul class="exercise-modal-list">
                <li class="exercise-modal-list-item">
                  <h3 class="exercise-modal-list__title">Target</h3>
                  <p class="exercise-modal-list__text">${capitalizeFirstLetter(
                    target
                  )}</p>
                </li>
                <li class="exercise-modal-list-item">
                  <h3 class="exercise-modal-list__title">Body Part</h3>
                  <p class="exercise-modal-list__text">${capitalizeFirstLetter(
                    bodyPart
                  )}</p>
                </li>
                <li class="exercise-modal-list-item">
                  <h3 class="exercise-modal-list__title">Equipment</h3>
                  <p class="exercise-modal-list__text">${capitalizeFirstLetter(
                    equipment
                  )}</p>
                </li>
                <li class="exercise-modal-list-item">
                  <h3 class="exercise-modal-list__title">Popular</h3>
                  <p class="exercise-modal-list__text">${popularity}</p>
                </li>
                <li class="exercise-modal-list-item">
                  <h3 class="exercise-modal-list__title">Burned calories</h3>
                  <p class="exercise-modal-list__text">${burnedCalories}/${time}min</p>
                </li>
              </ul>
              </div>
              <p class="exercise-modal__description">
               ${capitalizeFirstLetter(description)}
              </p>
            </div>
          </div>

          <ul class="exercise-modal-button">
            <li class="exercise-modal_item">
              <button
                type="button"
                class="exercise-modal-button__favorite">
                Add to favorites
                <span>
<svg class="modal-exercise-heart-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
<path d="M17.3666 2.84172C16.941 2.41589 16.4356 2.0781 15.8794 1.84763C15.3232 1.61716 14.727 1.49854 14.1249 1.49854C13.5229 1.49854 12.9267 1.61716 12.3705 1.84763C11.8143 2.0781 11.3089 2.41589 10.8833 2.84172L9.99994 3.72506L9.1166 2.84172C8.25686 1.98198 7.0908 1.49898 5.87494 1.49898C4.65907 1.49898 3.49301 1.98198 2.63327 2.84172C1.77353 3.70147 1.29053 4.86753 1.29053 6.08339C1.29053 7.29925 1.77353 8.46531 2.63327 9.32506L3.5166 10.2084L9.99994 16.6917L16.4833 10.2084L17.3666 9.32506C17.7924 8.89943 18.1302 8.39407 18.3607 7.83785C18.5912 7.28164 18.7098 6.68546 18.7098 6.08339C18.7098 5.48132 18.5912 4.88514 18.3607 4.32893C18.1302 3.77271 17.7924 3.26735 17.3666 2.84172Z" stroke="#242424" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </span>
              </button>
            </li>


             <li class="exercise-modal_item">
              <button
                type="button"
                class="exercise-modal-button__remove">
                Remove from favorites
                <span>
                  <svg class="exercise-modal-button__remove-icon">
                      <use href="./img/icons.svg#icon-trash" width="20" height="20"></use>
                  </svg>
                </span>
              </button>
            </li>

            <li class="exercise-modal_item">
<button type="button" class="exercise-modal-button__rating">
              Give a rating
            </button>
            </li></ul>
          <div>`;
}
