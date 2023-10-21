import axios from 'axios';

import { fetchExercise } from './api';
import { renderExerciseModal } from './exercise-modal-create';

// const openModalData = document.querySelector('[data-exmod-open]');
// // const closeModalData = document.querySelector('[data-exmod-close]');
// const modalElement = document.querySelector('[data-exmodal]');

// openModalData.addEventListener('click', handleOpen);

// async function handleOpen() {
//   try {
//     const exerciseData = await fetchExercise(id);
//     renderExerciseModal(exerciseData, modalElement);
//   } catch (error) {
//     console.error(error);
//   }
// }

handleOpen();

const handleOpen = id => {
  fetchExercise(id)
    .then(data => {
      renderExerciseModal(data);
      console.log(data);
    })
    .catch(error => error);
};
