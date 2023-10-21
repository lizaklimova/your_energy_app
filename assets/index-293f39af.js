import{f as i,l as n,s as c,a as l}from"./quote-c9b8247a.js";function o(e){return e.slice(0,1).toUpperCase()+e.slice(1)}function d(e){return e.map(({imgURL:r,filter:t,name:s})=>`<li class="exercises__filter-card">

   <div class="exercises__filter-img-container" style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), 
              url('${r}') ;
               background-size: cover;
background-position:center;
background-repeat: no-repeat;
              "
</div>
<div class="exercises__filter-text-wrap">
 <p class="exercises__filter-category">${o(s)}</p>
    <p class="exercises__filter-name">${t}</p>
</div>
  </li>`).join("")}u();async function u(){let e=await i(1,9,"Body parts");screen.width>767&&(e=await i(1,12,"Body parts")),n.insertAdjacentHTML("beforeend",d(e.results))}c.addEventListener("submit",g);async function g(e){e.preventDefault();const a=e.currentTarget.elements.email.value;console.log(a);const r={email:a};JSON.stringify(r);try{const t=await l(r);alert(t.message)}catch(t){alert(t.message)}e.target.reset()}
