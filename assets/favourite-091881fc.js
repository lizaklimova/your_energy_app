import{a as r,f as o}from"./mode-56cd6a33.js";let l={};const c=()=>{const t=Object.keys(localStorage);if(t.length>=1&&localStorage.getItem("quote")){const a=t.filter(e=>e!=="quote");for(let e of a){try{const s=localStorage.getItem(e);l=JSON.parse(s)}catch{error}r(o,"is-hidden")}}else{r(o,"favourite__text");return}};window.addEventListener("load",c);
