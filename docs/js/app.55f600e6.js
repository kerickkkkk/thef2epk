(function(t){function e(e){for(var s,i,c=e[0],o=e[1],l=e[2],d=0,f=[];d<c.length;d++)i=c[d],n[i]&&f.push(n[i][0]),n[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var o=a[i];0!==n[o]&&(s=!1)}s&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},n={app:0},r=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d0bacab":"50706ec4","chunk-2d0d6d35":"4ed207ed","chunk-5af736ae":"9f839819","chunk-650859df":"bf215b61"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise(function(e,s){a=n[t]=[e,s]});e.push(a[2]=s);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.src=i(t),r=function(e){o.onerror=o.onload=null,clearTimeout(l);var a=n[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+s+": "+r+")");i.type=s,i.request=r,a[1](i)}n[t]=void 0}};var l=setTimeout(function(){r({type:"timeout",target:o})},12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/thef2epk/",c.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1b18":function(t,e,a){t.exports=a.p+"img/logotype-sm-dark.a9a64a8c.svg"},"4f65":function(t,e,a){t.exports=a.p+"img/sm-今天是個吃甜點的好日子.b435e6f7.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("h1",{staticClass:"text-hide"},[t._v("Vue Dessert Ecommerce Webside")]),a("nav",{staticClass:"navbar navbar-expand-md bg-white"},[a("div",{staticClass:"container"},[t._m(0),t._m(1),t._m(2),a("router-link",{staticClass:"navbar-brand order-md-1 p-5 py-md-6 pl-md-6 pr-md-0",attrs:{to:"carts",href:"#"}},[a("span",{staticClass:"d-block",staticStyle:{padding:"5px 0"}},[a("i",{staticClass:"fas fa-shopping-cart"})])]),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item active"},[a("router-link",{staticClass:"nav-link py-6 px-5",attrs:{to:"/",href:"#"}},[a("span",{staticClass:"d-block",staticStyle:{padding:"8px 0"}},[t._v("首頁")])])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link py-6 px-5",attrs:{to:"/products",href:"#"}},[a("span",{staticClass:"d-block",staticStyle:{padding:"8px 0"}},[t._v("甜點")])])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link py-6 px-5",attrs:{to:"/register",href:"#"}},[a("span",{staticClass:"d-block",staticStyle:{padding:"8px 0"}},[t._v("登入")])])],1)])])],1)]),a("router-view"),t._m(3),t._m(4)],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler py-6 px-5",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon d-flex justify-content-center align-items-center"},[a("i",{staticClass:"fas fa-bars"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"navbar-brand d-none py-6 d-md-inline-block",attrs:{href:"#"}},[s("img",{attrs:{src:a("623d"),height:"40",alt:"甜點電商"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"navbar-brand d-md-none py-6",attrs:{href:"#"}},[s("img",{staticClass:"d-inline-block",attrs:{src:a("1b18"),width:"114",height:"33",alt:"甜點電商"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"bg-primary py-5"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center align-items-center"},[s("div",{staticClass:"col-md-5"},[s("div",{staticClass:"d-flex justify-content-center justify-content-md-start align-items-center mb-5 mb-md-0"},[s("img",{attrs:{src:a("e91d"),width:"40",height:"40",alt:""}}),s("span",{staticClass:"h4 text-white mx-5 mb-0"},[t._v("訂閱你我的甜蜜郵件")])])]),s("div",{staticClass:"col-md-5"},[s("div",{staticClass:"form-sqare d-flex justify-content-center align-items-center"},[s("label",{staticClass:"form-square-icon h4 mb-0 text-primary",attrs:{for:"subdescript"}},[s("i",{staticClass:"fas fa-envelope"})]),s("input",{staticClass:"form-sqare__input w-100",attrs:{id:"subdescript",type:"text"}}),s("button",{staticClass:"btn btn-accent p-4 text-primary"},[s("i",{staticClass:"fas fa-arrow-right"})])])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"bg-primary-lighter py-5"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-md-5 d-flex flex-column justify-content-between"},[s("img",{staticClass:"d-block my-md-0 my-4",attrs:{width:"171",height:"26",src:a("1b18"),alt:""}}),s("ul",{staticClass:"list-unstyled mt-4"},[s("li",[t._v("07-123-45678")]),s("li",[s("a",{attrs:{href:"mailto:sweetaste@email.com"}},[t._v("sweetaste@email.com")])]),s("li",[t._v("800 高雄市新興區幸福路 520 號")])])]),s("div",{staticClass:"col-md-5"},[s("div",{staticClass:"text-right d-none d-md-block"},[s("img",{attrs:{width:"60",src:a("4f65"),alt:"今天是個吃甜點的好日子"}})])])]),s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-md-10 d-md-flex align-items-baseline"},[s("ul",{staticClass:"list-unstyled d-flex my-1 mb-md-0"},[s("li",[s("a",{attrs:{href:"#"}},[s("img",{staticClass:"footer_img d-block",attrs:{src:a("b52d"),width:"32",height:"32",alt:"line"}})])]),s("li",[s("a",{attrs:{href:"#"}},[s("img",{staticClass:"d-block",attrs:{src:a("8185"),width:"32",height:"32",alt:"facebook"}})])])]),s("span",{staticClass:"ml-auto"},[t._v("© 2018 Sweetaste* All Rights Reserved")])])])])])}],i={},c=i,o=(a("5c0b"),a("2877")),l=Object(o["a"])(c,n,r,!1,null,null,null),d=l.exports,u=a("8c4f");s["a"].use(u["a"]);var f=new u["a"]({routes:[{path:"/",name:"Home",component:function(){return a.e("chunk-5af736ae").then(a.bind(null,"bb51"))}},{path:"/products",name:"Products",component:function(){return a.e("chunk-650859df").then(a.bind(null,"e6dc"))}},{path:"/register",name:"Register",component:function(){return a.e("chunk-2d0d6d35").then(a.bind(null,"73cf"))}},{path:"/carts",name:"Carts",component:function(){return a.e("chunk-2d0bacab").then(a.bind(null,"395d"))}}]}),p=a("2f62");s["a"].use(p["a"]);var m=new p["a"].Store({state:{},mutations:{},actions:{}});a("4989");s["a"].config.productionTip=!1,new s["a"]({router:f,store:m,render:function(t){return t(d)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("5e27"),n=a.n(s);n.a},"5e27":function(t,e,a){},"623d":function(t,e,a){t.exports=a.p+"img/logo-all-dark.6734d368.svg"},8185:function(t,e,a){t.exports=a.p+"img/ic-facebook.3d7755ce.svg"},b52d:function(t,e,a){t.exports=a.p+"img/ic-line@.b101abfd.svg"},e91d:function(t,e,a){t.exports=a.p+"img/logo-light.c0a6f030.svg"}});
//# sourceMappingURL=app.55f600e6.js.map