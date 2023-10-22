import{f as E,p as c,a as x,b as M,c as l,d as p,e as g,s as w,g as $,h as F}from"./quote-1ddaf7f9.js";const d=(e,t)=>{e.classList.add(t)},T=(e,t)=>{e.classList.remove(t)};function a(e){return e.slice(0,1).toUpperCase()+e.slice(1)}function m(e,t,s){e.forEach(i=>{T(i,s)}),d(t,s)}function S(e){return e.map(({imgURL:s,filter:i,name:n})=>`<li class="exercises__filter-card">

   <div class="exercises__filter-img-container" style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), 
              url('${s}') ;
               background-size: cover;
background-position:center;
background-repeat: no-repeat;
              "
</div>
<div class="exercises__filter-text-wrap">
 <p class="exercises__filter-category">${a(n)}</p>
    <p class="exercises__filter-name">${i}</p>
</div>
  </li>`).join("")}function o(e){let t="";for(let s=0;s<e;s++)t+='<li class="exercises__skeleton-loader"> <span class="skeleton-loader"></span></li>';return t}let u="";window.addEventListener("load",B);E.addEventListener("click",q);c.forEach(e=>{e.addEventListener("click",f)});function B(){_(x.textContent.trim()),d(x,"exercises__filter-btn_active"),d(g,"exercises__pagination-item_active")}function q(e){m(c,g,"exercises__pagination-item_active"),e.target.tagName.toUpperCase()==="BUTTON"&&(u=e.target.textContent.trim(),_(u),c.forEach(t=>{t.addEventListener("click",f)}),m(M,e.target,"exercises__filter-btn_active"))}async function _(e,t=1){l.innerHTML=o(9),screen.width>767&&(l.innerHTML=o(12));try{let s=await p(t,9,e);screen.width>767&&(s=await p(t,12,e)),l.innerHTML=S(s.results)}catch(s){l.innerHTML=o(9),console.log(s.message)}}function f(e){const t=e.target.textContent;_(u,t),m(c,e.target,"exercises__pagination-item_active")}w.addEventListener("submit",A);async function A(e){e.preventDefault();const t=e.currentTarget.elements.email.value;console.log(t);const s={email:t};JSON.stringify(s);try{const i=await $(s);alert(i.message)}catch(i){alert(i.message)}e.target.reset()}function H({bodyPart:e,equipment:t,gifUrl:s,name:i,target:n,description:b,rating:L,burnedCalories:y,time:k,popularity:C}){return` 
    <div class="exercise-modal-tumb">
            <img
              class="exercise-modal__img"
              src="${s}" 
              alt="exercise"
              width="295"
              height="259"
            />
            <div class="exercise-modal-tumb_card">
              <h2 class="exercise-modal__title">${a(i)}</h2>
              <p class="exercise-modal-rating__number">${L}</p>
              <ul class="exercise-modal-list">
                <li class="exercise-modal-list-item">
                  <h3 class="exercise-modal-list__title">Target</h3>
                  <p class="exercise-modal-list__text">${a(n)}</p>
                </li>
                <li class="exercise-modal-list-item">
                  <h3 class="exercise-modal-list__title">Body Part</h3>
                  <p class="exercise-modal-list__text">${a(e)}</p>
                </li>
                <li class="exercise-modal-list-item">
                  <h3 class="exercise-modal-list__title">Equipment</h3>
                  <p class="exercise-modal-list__text">${a(t)}</p>
                </li>
                <li class="exercise-modal-list-item">
                  <h3 class="exercise-modal-list__title">Popular</h3>
                  <p class="exercise-modal-list__text">${C}</p>
                </li>
                <li class="exercise-modal-list-item">
                  <h3 class="exercise-modal-list__title">Burned calories</h3>
                  <p class="exercise-modal-list__text">${y}/${k}min</p>
                </li>
              </ul>
              <p class="exercise-modal__description">
               ${a(b)}
              </p>
            </div>
          </div>
          <ul class="exercise-modal-button">
            <li class="exercise-modal_item">
              <button
                type="button"
                class="exercise-modal-favorite__button">
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
          </ul>`}const r={openModalBtn:document.querySelector("[data-exmod-open]"),closeModalBtn:document.querySelector("[data-exmod-close]"),modal:document.querySelector("[data-exmodal]"),modalContentContainer:document.querySelector(".exercise-modal__content")};r.openModalBtn.addEventListener("click",N);r.closeModalBtn.addEventListener("click",v);async function N(){try{const e=await F("64f389465ae26083f39b17a4");O(e)}catch{console.error("error.message")}}function O(e){const t=H(e);r.modalContentContainer.innerHTML=t,r.modal.classList.remove("is-hidden"),document.addEventListener("keydown",h)}function v(){r.modal.classList.add("is-hidden"),document.removeEventListener("keydown",h)}function h(e){e.code==="Escape"&&v()}
