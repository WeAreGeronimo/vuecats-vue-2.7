(function(t){function e(e){for(var a,o,n=e[0],c=e[1],l=e[2],d=0,m=[];d<n.length;d++)o=n[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,n=1;n<s.length;n++){var c=s[n];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"01f7":function(t,e,s){},"17f2":function(t,e,s){"use strict";s("9a00")},2777:function(t,e,s){},"46db":function(t,e,s){"use strict";s("2777")},"53d7":function(t,e,s){"use strict";s("01f7")},5452:function(t,e,s){"use strict";s("af35")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d"),s("2d26");var a=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Header",{attrs:{catsArrayCount:t.catsArrayFromBackend.length}}),s("Main",{attrs:{catsArrayFromBackend:t.catsArrayFromBackend,quantity:t.quantity,toggleFavorites:t.toggleFavorites,showNextCats:t.showNextCats,sortCats:t.sortCats},on:{upToTop:t.scrollToTop}}),s("Footer"),s("FavoritesModal",{attrs:{modal:t.favoritesModalSettings}})],1)},i=[],o=(s("c975"),s("4e82"),s("a434"),s("4795"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"header margin-0-auto flex"},[s("img",{staticClass:"header-logo",attrs:{src:"img/logo.png"}}),t._m(0),s("div",{staticClass:"header-bottom"},[s("span",[t._v("Найдено котов: "+t._s(t.catsArrayCount)+" ")])]),s("button",{staticClass:"header-burgerMenu",attrs:{id:"burgerButton"},on:{click:function(e){return t.openMenu()}}},[s("div",{staticClass:"header-buttonPart"})])])}),n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header-menuWrapper flex j-c-space-between",attrs:{id:"menuWrapper"}},[s("div",{staticClass:"header-menu flex margin-0-auto"},[s("a",{staticClass:"header-hrefs flex a-i-center j-c-center",attrs:{href:"#"}},[t._v("Main")]),s("a",{staticClass:"header-hrefs flex a-i-center j-c-center",attrs:{href:"#"}},[t._v("Gallery")]),s("a",{staticClass:"header-hrefs flex a-i-center j-c-center",attrs:{href:"#"}},[t._v("News")]),s("a",{staticClass:"header-hrefs flex a-i-center j-c-center",attrs:{href:"#"}},[t._v("Profile")])]),s("div",{staticClass:"header-call"},[s("a",{staticClass:"header-phone",attrs:{href:"tel:+544 3490 000000"}},[t._v("+544 3490 000000")]),s("div",{staticClass:"header-callUs"},[t._v("Звони скорее!")])])])}],c=(s("a9e3"),{name:"Header",props:{catsArrayCount:Number},methods:{openMenu:function(){document.getElementById("burgerButton").classList.toggle("openMenu"),document.getElementById("menuWrapper").classList.toggle("openMenu")}}}),l=c,u=(s("5452"),s("2877")),d=Object(u["a"])(l,o,n,!1,null,null,null),m=d.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"main",attrs:{id:"main"}},[s("div",{staticClass:"main-sort flex j-c-space-between"},[s("div",{staticClass:"main-choose"},[t._v("Сортировать по:")]),s("button",{staticClass:"main-chooseButton flex",attrs:{id:"priceSortButton"},on:{click:function(e){return t.sortCats("price")}}},[t._v(" Цене"),s("img",{staticClass:"main-arrow",attrs:{id:"priceSort",src:"img/arrow.png"}})]),s("button",{staticClass:"main-chooseButton flex",attrs:{id:"ageSortButton"},on:{click:function(e){return t.sortCats("age")}}},[t._v(" Возрасту"),s("img",{staticClass:"main-arrow",attrs:{id:"ageSort",src:"img/arrow.png"}})])]),s("div",{staticClass:"main-list flex",attrs:{id:"catList"}},t._l(t.catsToShow(t.catsArrayFromBackend,t.quantity),(function(e){return s("div",{key:e.id,staticClass:"main-item",attrs:{id:"item_"+e.id}},[s("button",{staticClass:"main-like",on:{click:function(s){e.liked=!e.liked,t.toggleFavorites(e.id)}}},[s("svg",{attrs:{width:"100%",height:"100%",viewBox:"0 0 46 42",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{staticClass:"main-heart",attrs:{width:"100%",height:"100%",d:"M33.7812 0.695312C31.2851 0.695312 28.9966 1.4863 26.9794 3.04634C25.0456 4.54197 23.758 6.44693 23\n                          7.83214C22.242 6.44684 20.9544 4.54197 19.0206 3.04634C17.0034 1.4863 14.7149 0.695312\n                          12.2188 0.695312C5.25298 0.695312 0 6.39293 0 13.9485C0 22.1112 6.55347 27.696 16.4746 36.1505C18.1593\n                          37.5863 20.0689 39.2138 22.0538 40.9494C22.3154 41.1785 22.6514 41.3047 23 41.3047C23.3486\n                          41.3047 23.6846 41.1785 23.9462 40.9495C25.9312 39.2136 27.8408 37.5862 29.5265\n                          36.1496C39.4465 27.696 46 22.1112 46 13.9485C46 6.39293 40.747 0.695312 33.7812 0.695312Z",fill:e.liked?"red":"white","fill-opacity":e.liked?"0.8":"0.5",stroke:"black","stroke-opacity":"0.5"}})])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.discount,expression:"cat.discount"}],staticClass:"main-discount flex j-c-center a-i-center"},[t._v(" "+t._s(e.discount)+" ")]),s("img",{staticClass:"main-picture block",attrs:{src:e.src}}),s("div",{staticClass:"main-infosWrapper"},[s("div",{staticClass:"main-name",style:{fontSize:e.name.length>24?"1rem":"1.5rem",lineHeight:e.name.length>24?"1.2rem":"1.875rem"}},[t._v(" "+t._s(e.name)+" ")]),s("div",{staticClass:"main-info flex j-c-space-evenly"},[s("div",{staticClass:"main-color",attrs:{title:""}},[t._v(t._s(e.color))]),s("div",{staticClass:"main-agesWrapper"},[s("span",{staticClass:"main-age block"},[t._v("Возраст")]),s("span",{staticClass:"main-yearsOld block"},[t._v(t._s(e.age)+" мес.")])]),s("div",{staticClass:"main-pawsWrapper"},[s("div",{staticClass:"main-paws block"},[t._v("Кол-во лап")]),s("div",{staticClass:"main-count block"},[t._v(t._s(e.paws))])])]),s("div",{staticClass:"main-price"},[t._v(t._s(e.price)+" руб.")])]),s("button",{staticClass:"main-buy block",attrs:{disabled:e.isSold}},[t._v(" "+t._s(e.isSold?"Продано":"Купить")+" ")])])})),0),s("div",{staticClass:"main-bottomBar flex j-c-center"},[s("button",{staticClass:"main-showMore",attrs:{id:"nextCats"},on:{click:function(e){return t.showNextCats(20)}}},[t._v(" Показать еще 20 ")])]),s("button",{staticClass:"main-up",attrs:{id:"up"},on:{click:function(e){return t.upToTop()}}})])},g=[],p=(s("4de4"),{name:"Main",props:{catsArrayFromBackend:Array,quantity:Number,toggleFavorites:Function,showNextCats:Function,sortCats:Function},methods:{upToTop:function(){this.$emit("upToTop",window.pageYOffset)},catsToShow:function(t,e){var s=t.filter((function(t,s){return s<e}));return console.log(t,e),s}}}),h=p,v=(s("17f2"),Object(u["a"])(h,f,g,!1,null,null,null)),b=v.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"footer flex a-i-flex-start j-c-space-around"},[t._m(0),s("div",{staticClass:"footer-container flex a-i-flex-start"},[s("div",{staticClass:"footer-emailsWrapper flex flex-d-column"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"footer-email block",attrs:{type:"email",placeholder:"Email",id:"emailForNews"},domProps:{value:t.email},on:{blur:function(e){return t.correctEmail()},input:function(e){e.target.composing||(t.email=e.target.value)}}}),s("input",{staticClass:"footer-check",attrs:{type:"checkbox",id:"news"}}),s("label",{staticClass:"footer-newsSubscribe",attrs:{for:"news"}},[t._v("Подписаться на новости")]),s("div",{staticClass:"footer-tips",attrs:{id:"tips"}}),s("span",{staticStyle:{display:"none"},attrs:{id:"accept"}},[t._v("✔")])]),s("button",{staticClass:"footer-subscribe",attrs:{id:"subscribe",disabled:t.isDisabled},on:{click:function(e){return t.subscribeToNews()}}},[t._v(" Подписаться ")])])])},y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer-buy flex flex-d-column j-c-center"},[s("span",{staticClass:"footer-haveTime block"},[t._v("Успей купить!")]),s("span",{staticClass:"footer-promotions block"},[t._v("Подпишись и успей словить все акции")])])}],w={name:"Footer",props:{msg:String},data:function(){return{email:null,isDisabled:!1}},methods:{subscribeToNews:function(){this.validateEmail(this.email)?this.correctEmail()&&(document.getElementById("subscribe").disabled=!0,document.getElementById("subscribe").innerText="Спасибо!"):(document.getElementById("accept").style.display="none",document.getElementById("tips").innerText="Введите, пожалуйста, действительный Email!",document.getElementById("emailForNews").style.background="#ff8585")},validateEmail:function(t){var e=/\S+@\S+\.\S+/;return e.test(t)},correctEmail:function(){return this.validateEmail(this.email)?(document.getElementById("tips").innerText="",document.getElementById("accept").style.display="block",document.getElementById("emailForNews").style.background="#a6e269",!0):(document.getElementById("accept").style.display="none",document.getElementById("tips").innerText="Введите, пожалуйста, действительный Email!",document.getElementById("emailForNews").style.background="#ff8585",!1)}}},k=w,B=(s("53d7"),Object(u["a"])(k,C,y,!1,null,null,null)),_=B.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.modal.isShow,expression:"modal.isShow"}],staticClass:"favorites-modal j-c-center a-i-center",attrs:{id:"favorites-modal"}},[t._v(" "+t._s(t.modal.message+" "+t.modal.counter)+" ")])},x=[],E={name:"FavoritesModal",props:{modal:Object}},I=E,F=(s("46db"),Object(u["a"])(I,S,x,!1,null,null,null)),M=F.exports,T={name:"App",components:{Header:m,Main:b,Footer:_,FavoritesModal:M},data:function(){return{quantity:6,favoritesCats:[],timerHolderForClosingModal:null,timerHolderForScroll:null,timerHolderForScroll2:null,catsArrayFromBackend:[],scrolled:null,scrollSpeed:.94,sortingPriceCriteria:"toHighPrice",sortingAgeCriteria:"toHighAge",favoritesModalSettings:{isShow:!1,message:"",counter:null}}},created:function(){this.randomCats(359),window.addEventListener("scroll",(function(){window.pageYOffset&&(document.getElementById("up").style.display="block"),window.pageYOffset||(document.getElementById("up").style.display="none")}))},methods:{getRandomNumber:function(t,e){return Math.floor(t+Math.random()*(e+1-t))},randomCats:function(t){for(var e=1,s=0;s<t;s++){var a=null,r=null,i=this.getRandomNumber(1,24),o=this.getRandomNumber(500,2e4),n=!!this.getRandomNumber(0,1),c=this.getRandomNumber(0,1)?"-".concat(this.getRandomNumber(1,40),"%"):"";switch(this.getRandomNumber(1,10)){case 1:a="Азиатская кошка";break;case 2:a="Той-бобтейл";break;case 3:a="Дракон Ли, Ли Хуа ( Ли Мао )";break;case 4:a="Американская многопалая кошка";break;case 5:a="Кольцехвостая кошка (Американский рингтейл)";break;case 6:a="Кохона (Гавайская бесшерстная кошка)";break;case 7:a="Той-бобтейл";break;case 8:a="Эгейская кошка";break;case 9:a="Рагамаффин";break;case 10:a="Анатолийская короткошерстная кошка (Турецкая короткошерстная кошка)";break}switch(this.getRandomNumber(1,10)){case 1:r="Темный окрас";break;case 2:r="Дымчатый окрас";break;case 3:r="Полосатый хвост";break;case 4:r="Кольцевой окрас";break;case 5:r="Трехцветный окрас";break;case 6:r="Белый окрас";break;case 7:r="Многоцветный окрас";break;case 8:r="Полосатый окрас";break;case 9:r="Пятнистый окрас";break;case 10:r="Однотонный окрас";break}this.catsArrayFromBackend.push({id:e++,discount:c,liked:!1,src:"img/cat".concat(this.getRandomNumber(1,3),".png"),name:a,color:r,age:i,paws:4,price:o,isSold:n})}},showNextCats:function(t){this.quantity+=t,this.catsArrayFromBackend.length<=this.quantity&&(this.quantity=this.catsArrayFromBackend.length)},toggleFavorites:function(t){var e=this,s=!0;this.favoritesCats.indexOf(t)>-1||(this.favoritesCats.push(t),this.favoritesCats.sort((function(t,e){return t-e})),s=!1,console.log("pushed",this.favoritesCats),this.favoritesModalSettings.isShow=!0,this.favoritesModalSettings.message="Добавлено в избранное! В избранном:",this.favoritesModalSettings.counter=this.favoritesCats.length),this.favoritesCats.indexOf(t)>-1&&s&&(this.favoritesCats.splice(this.favoritesCats.indexOf(t),1),this.favoritesCats.sort((function(t,e){return t-e})),console.log("deleted",this.favoritesCats),this.favoritesModalSettings.isShow=!0,this.favoritesModalSettings.message="Удалено из избранного! В избранном:",this.favoritesModalSettings.counter=this.favoritesCats.length),clearTimeout(this.timerHolderForClosingModal),this.timerHolderForClosingModal=setTimeout((function(){e.favoritesModalSettings.isShow=!1}),2e3)},scrollToTop:function(t){var e=this;t>10?(window.scrollTo(0,t),t*=this.scrollSpeed,this.timerHolderForScroll=setTimeout((function(){return e.scrollToTop(t)}),7)):(clearTimeout(this.timerHolderForScroll),window.scrollTo(0,0))},sortCats:function(t){if("price"==t)switch(this.sortingPriceCriteria){case"toHighPrice":this.catsArrayFromBackend.sort((function(t,e){return t.price-e.price})),this.sortingPriceCriteria="toLowPrice",document.getElementById("ageSortButton").classList.remove("sortInUse"),document.getElementById("priceSort").classList.remove("toLow"),document.getElementById("priceSort").classList.add("toBig"),document.getElementById("priceSortButton").classList.add("sortInUse");break;case"toLowPrice":this.catsArrayFromBackend.sort((function(t,e){return e.price-t.price})),this.sortingPriceCriteria="toHighPrice",document.getElementById("ageSortButton").classList.remove("sortInUse"),document.getElementById("priceSort").classList.remove("toBig"),document.getElementById("priceSort").classList.add("toLow"),document.getElementById("priceSortButton").classList.add("sortInUse");break}if("age"==t)switch(this.sortingAgeCriteria){case"toHighAge":this.catsArrayFromBackend.sort((function(t,e){return t.age-e.age})),this.sortingAgeCriteria="toLowAge",document.getElementById("priceSortButton").classList.remove("sortInUse"),document.getElementById("ageSort").classList.remove("toLow"),document.getElementById("ageSort").classList.add("toBig"),document.getElementById("ageSortButton").classList.add("sortInUse");break;case"toLowAge":this.catsArrayFromBackend.sort((function(t,e){return e.age-t.age})),this.sortingAgeCriteria="toHighAge",document.getElementById("priceSortButton").classList.remove("sortInUse"),document.getElementById("ageSort").classList.remove("toBig"),document.getElementById("ageSort").classList.add("toLow"),document.getElementById("ageSortButton").classList.add("sortInUse");break}}}},L=T,j=(s("5c0b"),Object(u["a"])(L,r,i,!1,null,null,null)),A=j.exports;new a["a"]({render:function(t){return t(A)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";s("9c0c")},"9a00":function(t,e,s){},"9c0c":function(t,e,s){},af35:function(t,e,s){}});
//# sourceMappingURL=app.45591d63.js.map