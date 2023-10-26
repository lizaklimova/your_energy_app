import { addClass, capitalizeFirstLetter } from '../components/fn-helpers';
import { checkCurrentList } from './pagination';

export const breadCrumbs = () => {
  const filterImgCard = document.querySelectorAll('.exercises__filter-card');
  filterImgCard.forEach(img => {
    img.addEventListener('click', createBreadCrumbs);
  });
};
export function createBreadCrumbs(event) {
  const crumb = event.currentTarget.dataset.name;
  const capitalizedCrumb = capitalizeFirstLetter(crumb);

  let exHeaderInfo = document.querySelector(
    '.info__exercises__categories-subtitle'
  );
  let exHeader = document.querySelector('.exercises__categories-subtitle');

  if (checkCurrentList) {
    if (screen.width >= 1440) {
      exHeaderInfo.innerHTML = `&nbsp;/<span>${capitalizedCrumb}</span>`;
    } else {
      exHeader.innerHTML = `&nbsp;/<span>${capitalizedCrumb}</span>`;
    }
  }
}
