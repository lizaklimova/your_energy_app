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

export function minimiseFirstLetter(str) {
  const words = str.slice(0, 1).toLowerCase() + str.slice(1);
  const word = words.split(' ');
  if (word.length === 2) {
    return word.join('');
  } else {
    return words;
  }
}

export function spliceLastLetter(filter) {
  if (filter === 'Body parts') {
    return filter.slice(0, filter.length - 1);
  } else {
    return filter;
  }
}
