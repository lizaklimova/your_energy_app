import{a,f as c,r,b as f,c as E,d as g,e as S}from"./quote-2ec0bffc.js";const n=document.querySelector('[data-name="card-block"]'),s=document.querySelector("[data-exmodal]");let m={},d=[],l=[];const y=["quote","theme","TOAST UI pagination for localhost: Statistics"],k=()=>{for(let e=0;e<localStorage.length;e++){let o=localStorage.key(e);y.includes(o)||l.push(o)}if(!l.length){a(c,"favourite__text-block"),r(c,"is-hidden"),a(n,"is-hidden"),r(n,"favourite__card-block");return}try{l.map(e=>{const o=localStorage.getItem(e);m=JSON.parse(o),d.push(m)})}catch{error}a(c,"is-hidden"),r(c,"favourite__text-block"),a(n,"favourite__card-block"),r(n,"is-hidden"),d.length>0&&(console.log(d),f(n,E(d))),b(),T(),L()};window.addEventListener("load",k);const h=document.querySelector('[data-name="modalfavourite"]'),x=document.querySelector(".exercise-modal-button__favorite"),_=document.querySelector("[data-exmod-close]"),p=document.querySelector(".exercise-modal-button__rating"),q=document.querySelector(".exercise-modal-button__remove"),T=()=>{document.querySelectorAll(".card_rating").forEach(t=>{a(t.firstElementChild,"is-hidden"),r(t.firstElementChild,"span_rating"),a(t.lastElementChild,"icon_trash"),r(t.lastElementChild,"is-hidden")}),document.querySelectorAll(".star").forEach(t=>{a(t,"is-hidden"),r(t,"star")})},L=()=>{document.querySelectorAll('[data-name="fovourite-delete"]').forEach(o=>{o.addEventListener("click",B)})};s.addEventListener("click",e=>{e.target===e.currentTarget&&a(s,"is-hidden")});function u(){s.classList.add("is-hidden"),document.removeEventListener("keydown",v)}function v(e){e.code==="Escape"&&u()}document.addEventListener("keydown",v);_.addEventListener("click",u);const b=()=>{document.querySelectorAll("[data-exmod-open]").forEach(o=>{o.addEventListener("click",M)})},M=e=>{const o=e.currentTarget.dataset.id;h.innerHTML=" ",g(o).then(t=>{const i=S(t);h.insertAdjacentHTML("beforeend",i),r(s,"is-hidden"),a(x,"is-hidden"),a(p,"is-hidden")}).catch(t=>console.log(t))},B=e=>{const o=e.currentTarget.dataset;localStorage.removeItem(o.id);const t=document.querySelector(`[data-name = "${o.id}"]`);t.innerHTML="",location.reload()},C=e=>{const t=document.querySelector(".exercise-modal-tumb").dataset;localStorage.removeItem(t.id);const i=document.querySelector(`.favourite__card-block [data-name = "${t.id}"]`);i.innerHTML="",u()};q.addEventListener("click",C);
