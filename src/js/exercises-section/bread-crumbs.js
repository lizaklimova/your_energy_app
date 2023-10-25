import { fetchExercise } from '../api';
import { breadCrumbsRef } from './components/refs';

refs.breadCrumbsRef.addEventListener('click', breadCrumbs);

async function breadCrumbs() {
  try {
    const data = await fetchExercise('64f389465ae26083f39b17a6');
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}
