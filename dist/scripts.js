!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=7)}([function(e,t){var r=document.createElement("div");r.className="grid",document.body.appendChild(r),document.addEventListener("keydown",(function(e){e.ctrlKey&&"KeyG"===e.code&&r.classList.toggle("grid_visible")}))},function(e,t){var r=document.querySelector(".js-slide.slider__carousel__active");document.querySelector(".js-slide-buttons").addEventListener("click",(function(e){var t=e.target.dataset.slideId;if(t&&r.dataset.slideId!==t){var n=document.querySelector('.js-slide[data-slide-id="'.concat(t,'"]'));n.classList.add("slider__carousel__show"),r.classList.add("slider__carousel__hide"),r.classList.add("slider__carousel__active");var i=r;r=n,document.querySelector('.js-slide-button[data-slide-id="'.concat(i.dataset.slideId,'"]')).classList.remove("slider__ellipse__active"),document.querySelector('.js-slide-button[data-slide-id="'.concat(t,'"]')).classList.add("slider__ellipse__active"),r.addEventListener("animationend",(function(){r.classList.add("slider__carousel__active"),r.classList.remove("slider__carousel__show"),i.classList.remove("slider__carousel__hide"),r.parentNode.insertBefore(r,i)}),{once:!0})}}))},function(e,t){var r;(r="https://api.hh.ru/areas/113",fetch(r).then((function(e){return e.json()}))).then((function(e){var t=[];e.areas.forEach((function(e){e.areas.forEach((function(e){return t.push({id:e.id,city:e.name})}))}));var r="";t.forEach((function(e){r+="<option>"+e.city+"</option>"})),document.querySelector(".js-cities-select").innerHTML=r}))},function(e,t){},function(e,t,r){var n=r(5),i=r(6);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1},a=(n(i,o),i.locals?i.locals:{});e.exports=a},function(e,t,r){"use strict";var n,i=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},o=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),a=[];function s(e){for(var t=-1,r=0;r<a.length;r++)if(a[r].identifier===e){t=r;break}return t}function c(e,t){for(var r={},n=[],i=0;i<e.length;i++){var o=e[i],c=t.base?o[0]+t.base:o[0],d=r[c]||0,l="".concat(c," ").concat(d);r[c]=d+1;var u=s(l),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:l,updater:_(f,t),references:1}),n.push(l)}return n}function d(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var i=r.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,r,n){var i=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function v(e,t,r){var n=r.css,i=r.media,o=r.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var m=null,p=0;function _(e,t){var r,n,i;if(t.singleton){var o=p++;r=m||(m=d(t)),n=f.bind(null,r,o,!1),i=f.bind(null,r,o,!0)}else r=d(t),n=v.bind(null,r,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var r=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var i=s(r[n]);a[i].references--}for(var o=c(e,t),d=0;d<r.length;d++){var l=s(r[d]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}r=o}}}},function(e,t,r){},function(e,t,r){"use strict";r.r(t);r(0),r(1),r(2);var n=document.querySelector(".order-form-wrapper"),i=document.querySelector(".order-form");function o(e){var t=e.sale?'<div class="product-card__sale checkout__sale">sale</div>':"",r=e.oldPrice?'<span class="product-card__old-price">'.concat(e.oldPrice,"</span>"):"",n=function(e){if(0===e.sizes.length)return"";var t='<div class="product-card__sizes">';return e.sizes.forEach((function(e){var r='<div class="product-card__size">\n            <label class="radio-box">\n                <input class="radio-box__input" type="radio" name="size" value="'.concat(e,'">\n                <span class="radio-box__text">').concat(e,"</span>\n            </label>\n        </div>");t+=r})),t+="</div>"}(e);return'<div class="product-card js-product-card" data-product-id="'.concat(e.id,'">\n    <div class="product-card__image-container">\n        <img class="product-card__image" src="').concat(e.image,'">\n        ').concat(t,'\n    </div>\n    <div class="product-card__name">').concat(e.name,'</div>\n    <div class="product-card__price">').concat(r," ").concat(e.price,'</div>\n    <div class="product-card__details__show-order-form">\n    <div class="product-card__description">').concat(e.description,"</div>\n    ").concat(n,"\n    </div>\n    </div>")}document.querySelector(".js-close-button-form").addEventListener("click",(function(){n.classList.add("order-form-wrapper_hidden"),document.body.style.overflow="auto",i.querySelector(".product-card__sale")&&i.querySelector(".product-card__sale").remove()}));var a={1:{id:1,name:"Зонт",description:"Красный зонт",price:"1990 ₽",image:"product-1.ec73aee6.jpg",sizes:[]},2:{id:2,name:"Сумка",description:"Красная сумка",price:"290 ₽",image:"product-2.521640d8.jpg",sizes:[]},3:{id:3,name:"Шлепанцы",description:"Красные шлепанцы",price:"790 ₽",image:"product-3.7dd26f69.jpg",sizes:["37","38","39","40","41","42"]},4:{id:4,name:"Футболка",description:"Красная хлопоковая футболка с коротким рукавом",sale:!0,price:"390 ₽",oldPrice:690,image:"product-4.0431c0da.jpg",sizes:["XS","S","M","L","XL","XXL"]},5:{id:5,name:"Толстовка",description:"Красная хлопоковая толстовка с логотипом HH",price:"3990 ₽",image:"product-5.50c4247e.jpg",sizes:["XS","S","M","L","XL","XXL"]},6:{id:6,name:"Подушка",description:"Красная подушка",price:"990 ₽",image:"product-6.00098820.jpg",sizes:[]}};window.onload=function(){document.querySelector(".js-popular-products")};var s,c=document.querySelectorAll(".js-card-button"),d=document.querySelector(".js-order-form-wrapper"),l=document.querySelector(".js-order-form"),u=document.querySelectorAll(".js-product-card");console.log(u);var f=!0,v=!1,m=void 0;try{for(var p,_=function(){var e=p.value,t=e.querySelector(".js-product-card-sizes");if(t){var r=t.querySelectorAll(".js-size-input"),n=!0,i=!1,o=void 0;try{for(var a,c=r[Symbol.iterator]();!(n=(a=c.next()).done);n=!0){a.value.addEventListener("click",(function(t){s=t.target.value,e.querySelector(".js-card-button").classList.remove("default-button__disabled")}))}}catch(e){i=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(i)throw o}}}else e.querySelector(".js-card-button").classList.remove("default-button__disabled");e.addEventListener("mouseover",(function(t){e.querySelector(".js-product-card-details").classList.add("product-card__details__show");var r=e.querySelector(".js-product-card-sizes"),n=!1;if(r){var i=r.querySelectorAll(".js-size-input"),o=!0,a=!1,s=void 0;try{for(var c,d=i[Symbol.iterator]();!(o=(c=d.next()).done);o=!0){c.value.checked&&(n=!0)}}catch(e){a=!0,s=e}finally{try{o||null==d.return||d.return()}finally{if(a)throw s}}}else n=!0;n?e.querySelector(".js-card-button").classList.remove("default-button__disabled"):e.querySelector(".js-card-button").classList.add("default-button__disabled")})),e.addEventListener("mouseout",(function(t){e.querySelector(".js-product-card-details").classList.remove("product-card__details__show")}))},h=u[Symbol.iterator]();!(f=(p=h.next()).done);f=!0)_()}catch(e){v=!0,m=e}finally{try{f||null==h.return||h.return()}finally{if(v)throw m}}var g=!0,y=!1,b=void 0;try{for(var L,S=function(){var e=L.value;e.addEventListener("click",(function(t){var r=t.target.dataset.productId,n={id:a[r].id,name:a[r].name,description:a[r].description,image:a[r].image,sale:a[r].sale,price:a[r].price,oldPrice:a[r].oldPrice,checkedSize:s,sizes:a[r].sizes};e.classList.contains("default-button__disabled")||(d.classList.remove("order-form-wrapper_hidden"),document.body.style.overflow="hidden");var i=o(n);l.querySelector(".js-product-card-template").innerHTML=i;var c=l.querySelector("input[value=".concat(n.checkedSize,"]"));c&&(c.checked=!0)}))},j=c[Symbol.iterator]();!(g=(L=j.next()).done);g=!0)S()}catch(e){y=!0,b=e}finally{try{g||null==j.return||j.return()}finally{if(y)throw b}}function E(){var e=document.getElementsByTagName("input"),t=document.getElementsByTagName("textarea");e=Array.from(e),t=Array.from(t),e.forEach((function(e){e.classList.remove("init"),e.classList.add("init"),null!=e.previousElementSibling&&e.previousElementSibling.classList.contains("form__note")&&e.parentNode.firstElementChild.remove()})),t.forEach((function(e){e.classList.remove("init"),e.classList.add("init")}))}E(),document.addEventListener("focusin",(function(e){e.target.classList.contains("init")&&e.target.classList.remove("init")}));var A,q,w=/^[А-Яа-яЁёA-Za-z]{1}[А-Яа-яЁёA-Za-z-]*[\s][А-Яа-яЁёA-Za-z]{1}[А-Яа-яЁёA-Za-z-]*([А-Яа-яЁёA-Za-z-\s])*$/,z=/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i,x=/^[+]{1}\d{1,5}$/,k=/^[\d]{3,7}$/;function M(e){return"name"===e.getAttribute("name")?[w.test(e.value),"Введите данные в формате Фамилия Имя Отчество"]:"email"===e.getAttribute("name")?[z.test(e.value),"Введите эл.почту в формате email@domen"]:"phone-pre"===e.getAttribute("name")?[x.test(e.value),"Введите код страны в формате +7, не более 5 цифр"]:"phone-code"===e.getAttribute("name")||"phone-number"===e.getAttribute("name")?[k.test(e.value),"Введите от 3 до 7 цифр"]:void 0}document.addEventListener("focusin",(function(e){void 0!==M(e.target)&&(A=e.target)})),document.addEventListener("focusout",(function(e){var t;if(null==(q=e.target)&&null==q||(t=M(q)),void 0!==t)if(t[0])q.previousElementSibling&&q.previousElementSibling.classList.contains("form__note")&&(q.previousElementSibling.remove(),q.parentNode.classList.remove("js-has-error"));else{var r=document.createElement("span");r.classList.add("form__note"),r.innerHTML=t[1],function e(t){var r;if(t.classList.contains("js-has-error"))return!1;if(t.classList.contains("js-form-item")){if(t.children.length>1){for(var n=0;n<t.children.length;n++)if(t.children[n].classList.contains("js-has-error"))return!1;r=!0}else r=!0;return r}return e(t.parentNode)}(q.parentNode)&&(q.parentNode.insertBefore(r,q),q.parentNode.classList.add("js-has-error"),q.classList.add("error"))}})),document.addEventListener("input",(function(e){void 0!==M(e.target)&&(A=e.target).previousElementSibling&&A.previousElementSibling.classList.contains("form__note")&&(A.previousElementSibling.remove(),A.classList.remove("error"),A.parentNode.classList.remove("js-has-error"))})),document.addEventListener("click",(function(e){if("delivery-01"==e.target.id||"delivery-02"==e.target.id){var t=e.target,r=t.closest(".form__block").nextElementSibling;if("delivery-01"===t.id){r.classList.add("visuallyhidden"),r.addEventListener("transitionend",(function(e){e.target==r&&r.classList.add("hidden")}));for(var n=0;n<r.children.length;n++)r.children[n].classList.contains("form__item")&&r.children[n].firstElementChild.removeAttribute("required")}else{r.classList.remove("hidden"),setTimeout((function(){r.classList.remove("visuallyhidden")}),100);for(var i=0;i<r.children.length;i++)r.children[i].classList.contains("form__item")&&r.children[i].firstElementChild.setAttribute("required","required")}}}));r(3);document.querySelector(".js-order-form").addEventListener("submit",(function(e){e.preventDefault();var t="";Array.from(e.target.elements).forEach((function(e){"checkbox"===e.getAttribute("type")&&e.checked?console.log(e.getAttribute("name"),":",e.value):"radio"===e.getAttribute("type")&&e.checked?console.log(e.getAttribute("name"),":",e.value):"phone-pre"===e.getAttribute("name")||"phone-code"===e.getAttribute("name")||"phone-number"===e.getAttribute("name")?t+=e.value:"text"===e.getAttribute("type")&&e.value.length>0?console.log(e.getAttribute("name"),":",e.value):"address"===e.getAttribute("name")&&e.value.length>0&&console.log(e.getAttribute("name"),":",e.value)})),console.log("phone :",t),console.log("product :",productCard.dataset.product),chosenSize&&console.log("chosen size :",chosenSize.innerText),console.log("orderForm submited"),closePopupOrder(),E()}));r(4)}]);