import{f as d,a as i,b as f,c as a,d as n,s as u,e as g}from"./quote-fc679219.js";function m(e){return e.slice(0,1).toUpperCase()+e.slice(1)}function p(e){return e.map(({imgURL:r,filter:s,name:o})=>`<li class="exercises__filter-card">

   <div class="exercises__filter-img-container" style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), 
              url('${r}') ;
               background-size: cover;
background-position:center;
background-repeat: no-repeat;
              "
</div>
<div class="exercises__filter-text-wrap">
 <p class="exercises__filter-category">${m(o)}</p>
    <p class="exercises__filter-name">${s}</p>
</div>
  </li>`).join("")}function _(e){let t="";for(let r=0;r<e;r++)t+='<li class="exercises__skeleton-loader"> <span class="skeleton-loader"></span></li>';return t}const c=(e,t)=>{e.classList.add(t)},b=(e,t)=>{e.classList.remove(t)};window.addEventListener("load",v);d.addEventListener("click",x);function v(){l(i.textContent.trim()),c(i,"exercises__filter-btn_active")}function x(e){if(e.target.tagName.toUpperCase()!=="BUTTON")return;const t=e.target.textContent.trim();l(t),f.forEach(r=>{b(r,"exercises__filter-btn_active")}),c(e.target,"exercises__filter-btn_active")}async function l(e){a.insertAdjacentHTML("beforeend",_(9));try{let t=await n(1,9,e);screen.width>767&&(t=await n(1,12,e)),a.innerHTML=p(t.results)}catch(t){console.log(t.message)}}u.addEventListener("submit",F);async function F(e){e.preventDefault();const t=e.currentTarget.elements.email.value;console.log(t);const r={email:t};JSON.stringify(r);try{const s=await g(r);alert(s.message)}catch(s){alert(s.message)}e.target.reset()}
