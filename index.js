(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();new Swiper(".swiper",{slidesPerView:1,spaceBetween:24,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2},1280:{enabled:!1,slidesPerView:3}}});document.addEventListener("DOMContentLoaded",function(){const f=document.querySelector(".burger-btn"),d=document.querySelector(".burger-button-close"),r=document.querySelector(".burger-menu"),l=document.querySelector(".overlay"),t=document.querySelectorAll(".burger-menu-list-item");function s(){r.classList.remove("is-closing"),r.classList.add("is-open"),l.classList.add("is-open")}function c(){r.classList.remove("is-open"),l.classList.remove("is-open"),r.classList.add("is-closing")}f.addEventListener("click",s),d.addEventListener("click",c),l.addEventListener("click",c),t.forEach(e=>{e.addEventListener("click",c)});const b=document.querySelector(".cart-items"),k=document.querySelector(".total-price"),w=document.querySelectorAll(".vegetables-item"),n=document.querySelector(".shopping-cart"),C=document.querySelectorAll(".continue-shopping"),h=document.querySelector(".checkout-button"),B=document.querySelector(".header-btn"),O=document.querySelector(".burger-submit-button"),u=document.querySelector("header"),y=document.querySelector("main"),m=document.querySelector("footer"),L=document.querySelector(".your_order"),g=document.getElementById("vegetables");let a=[],p=0;n.classList.add("hidden");function v(){b.innerHTML="",p=0,a.forEach((e,o)=>{const i=document.createElement("li");i.className="cart-item",i.innerHTML=`
        <div class="cart-item-details">
          <span class="cart-item-name">${e.name}</span>
          <img src="${e.image}" alt="${e.name}" width="50" height="50">
        </div>
        <div class="cart-quantity-controls">
          <button class="cart-decrease-quantity" data-index="${o}">-</button>
          <input type="text" class="cart-item-quantity" value="${e.quantity}" readonly>
          <button class="cart-increase-quantity" data-index="${o}">+</button>
        </div>
        <span class="cart-item-price">${(e.price*e.quantity).toFixed(2)} USD</span>
      `,b.appendChild(i),i.querySelector(".cart-decrease-quantity").addEventListener("click",()=>{q(o,-1)}),i.querySelector(".cart-increase-quantity").addEventListener("click",()=>{q(o,1)}),p+=e.price*e.quantity}),k.textContent=`${p.toFixed(2)} USD`}function q(e,o){a[e].quantity+=o,a[e].quantity===0&&a.splice(e,1),v()}w.forEach(e=>{e.addEventListener("click",function(){const o=e.querySelector(".vegetables-item-titel").textContent,i=e.querySelector(".vegetables-item-price").textContent,P=parseFloat(i.replace(" USD / kg","")),$=e.querySelector("img").src,E=a.find(T=>T.name===o);E?E.quantity+=1:a.push({name:o,price:P,quantity:1,image:$}),v()})}),C.forEach(e=>{e.addEventListener("click",()=>{n.classList.remove("visible"),c(),setTimeout(()=>{n.classList.add("hidden"),u.style.display="block",y.style.display="block",m.style.display="block",g&&g.scrollIntoView({behavior:"smooth"})},500)})});function S(){n.classList.contains("hidden")?(n.classList.remove("hidden"),setTimeout(()=>{n.classList.add("visible")},10)):(n.classList.remove("visible"),setTimeout(()=>{n.classList.add("hidden")},500));const e=n.classList.contains("hidden")?"block":"none";u.style.display=e,y.style.display=e,m.style.display=e}B.addEventListener("click",S),O.addEventListener("click",()=>{S(),c()}),h&&h.addEventListener("click",()=>{n.classList.remove("visible"),c(),setTimeout(()=>{n.classList.add("hidden"),u.style.display="block",y.style.display="block",m.style.display="block",L&&L.scrollIntoView({behavior:"smooth"})},500)})});
//# sourceMappingURL=index.js.map
