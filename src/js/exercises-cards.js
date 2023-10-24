import {filterCardsListRef} from './refs'
import { apendMarkup, insertHtml } from './fn-helpers'
import { fetchCards } from './api'
import { addClass, removeClass } from './components/classFunctions'
import {createCardsSkeleton, createCardsString} from './components/cards-template'


function replaceSpace(text) {
  const words = text.trim().split(" ");
  if (words.length === 2) {
    return words.join("%20");
  } else {
    return text;
  }
}
function minimiseFirstLetter(str) {
    const words = str.slice(0, 1).toLowerCase() + str.slice(1);
    const word = words.split(" ")
    if (word.length === 2) {
        return word.join("");
  } else {
    return words;
  }
    }




export const searchRefs = () => {
    const imgClick = document.querySelectorAll('.exercises__filter-card');
console.log(imgClick);
imgClick.forEach(needBtn => {
    needBtn.addEventListener('click', exercisesCard);
    console.log(needBtn);
})
}
 const exerciseCardListRef = document.querySelector('.exercises__cards-list');

 const exercisesCard = (e) => {
     const name = e.currentTarget.dataset;
     console.log(replaceSpace(name.name));
     console.log(minimiseFirstLetter(name.filter));
     let page = 1;
     let perPage = 10;
     fetchCards(page, perPage, minimiseFirstLetter(name.filter), replaceSpace(name.name)).then(data => {
         addClass(filterCardsListRef, 'is-hidden')
         removeClass(filterCardsListRef, 'exercises__filter-cards-list');
         apendMarkup(exerciseCardListRef, createCardsSkeleton(10));
          exerciseCardListRef.innerHTML= createCardsString(data.results)
       

         console.log(data);
     }).catch(er => er);

     console.log('asdx');
}


