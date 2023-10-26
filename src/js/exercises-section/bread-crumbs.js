import { capitalizeFirstLetter } from '../components/fn-helpers';
export const breadCrumbs = () => {
  const filterImgCard = document.querySelectorAll('.exercises__filter-card');
  filterImgCard.forEach(img => {
    img.addEventListener('click', createBreadCrumbs);
  });
};
export function createBreadCrumbs(event) {
  const crumb = event.currentTarget.dataset.name;
  const capitalizedCrumb = capitalizeFirstLetter(crumb);

  let exerciseHeader;
}
