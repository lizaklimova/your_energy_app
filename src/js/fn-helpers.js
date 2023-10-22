import { addClass, removeClass } from './components/classFunctions';

export function capitalizeFirstLetter(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

export function setActiveItem(arr, elem, cls) {
  arr.forEach(item => {
    removeClass(item, cls);
  });

  addClass(elem, cls);
}

export const insertHtml = (element, position, html) => {
  element.insertAdjacentHTML(position, html);
}

export const apendMarkup = (element, html) => {
  element.innerHTML = html;
}