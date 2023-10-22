import { capitalizeFirstLetter } from './fn-helpers';

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
                  <svg class="modal-exercise-heart-icon">
                      <use href="./img/icons.svg#icon-heart" width="18" height="18"></use>
                  </svg>
                </span>
              </button>
            </li>

            <li class="exercise-modal_item">
<button type="button" class="exercise-modal-button__rating">
              Give a rating
            </button>
            </li>
          </ul>`;
}
