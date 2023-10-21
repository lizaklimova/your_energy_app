import{f as _,p as s,a as g,b as v,c as a,d as f,e as u,s as b,g as x}from"./quote-c6611aca.js";const c=(e,t)=>{e.classList.add(t)},L=(e,t)=>{e.classList.remove(t)};function k(e){return e.slice(0,1).toUpperCase()+e.slice(1)}function l(e,t,i){e.forEach(r=>{L(r,i)}),c(t,i)}function C(e){return e.map(({imgURL:i,filter:r,name:p})=>`<li class="exercises__filter-card">

   <div class="exercises__filter-img-container" style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), 
              url('${i}') ;
               background-size: cover;
background-position:center;
background-repeat: no-repeat;
              "
</div>
<div class="exercises__filter-text-wrap">
 <p class="exercises__filter-category">${k(p)}</p>
    <p class="exercises__filter-name">${r}</p>
</div>
  </li>`).join("")}function n(e){let t="";for(let i=0;i<e;i++)t+='<li class="exercises__skeleton-loader"> <span class="skeleton-loader"></span></li>';return t}let o="";window.addEventListener("load",F);_.addEventListener("click",h);s.forEach(e=>{e.addEventListener("click",m)});function F(){d(g.textContent.trim()),c(g,"exercises__filter-btn_active"),c(u,"exercises__pagination-item_active")}function h(e){l(s,u,"exercises__pagination-item_active"),e.target.tagName.toUpperCase()==="BUTTON"&&(o=e.target.textContent.trim(),d(o),s.forEach(t=>{t.addEventListener("click",m)}),l(v,e.target,"exercises__filter-btn_active"))}async function d(e,t=1){a.innerHTML=n(9),screen.width>767&&(a.innerHTML=n(12));try{let i=await f(t,9,e);screen.width>767&&(i=await f(t,12,e)),a.innerHTML=C(i.results)}catch(i){a.innerHTML=n(9),console.log(i.message)}}function m(e){const t=e.target.textContent;d(o,t),l(s,e.target,"exercises__pagination-item_active")}b.addEventListener("submit",T);async function T(e){e.preventDefault();const t=e.currentTarget.elements.email.value;console.log(t);const i={email:t};JSON.stringify(i);try{const r=await x(i);alert(r.message)}catch(r){alert(r.message)}e.target.reset()}
