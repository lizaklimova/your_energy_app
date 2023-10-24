export const addClass = (obj, className) => {
  obj.classList.add(className);
};
export const removeClass = (obj, className) => {
  obj.classList.remove(className);
};

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
};

export const apendMarkup = (element, html) => {
  element.innerHTML = html;
};

export function replaceSpace(text) {
  const words = text.trim().split(' ');
  if (words.length === 2) {
    return words.join('%20');
  } else {
    return text;
  }
}

export const cardBtnRef = () => {
  const cardBtns = document.querySelectorAll('.card__btn')
  cardBtns.forEach(cardBtn => {
    cardBtn.addEventListener('click', needFunction);
    console.log(cardBtn);
  });
}
