(function(t){function a(a){for(var s,r,o=a[0],c=a[1],l=a[2],d=0,p=[];d<o.length;d++)r=o[d],n[r]&&p.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(a);while(p.length)p.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],s=!0,r=1;r<e.length;r++){var c=e[r];0!==n[c]&&(s=!1)}s&&(i.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},n={app:0},i=[];function r(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d288b4f1","chunk-2d21a3d2":"782988cd"}[t]+".js"}function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.e=function(t){var a=[],e=n[t];if(0!==e)if(e)a.push(e[2]);else{var s=new Promise(function(a,s){e=n[t]=[a,s]});a.push(e[2]=s);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=r(t),i=function(a){c.onerror=c.onload=null,clearTimeout(l);var e=n[t];if(0!==e){if(e){var s=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src,r=new Error("Loading chunk "+t+" failed.\n("+s+": "+i+")");r.type=s,r.request=i,e[1](r)}n[t]=void 0}};var l=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(a)},o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=a,c=c.slice();for(var d=0;d<c.length;d++)a(c[d]);var u=l;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"1b18":function(t,a,e){t.exports=e.p+"img/logotype-sm-dark.a9a64a8c.svg"},"4f65":function(t,a,e){t.exports=e.p+"img/sm-今天是個吃甜點的好日子.b435e6f7.svg"},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var s=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[t._m(0),e("router-view"),t._m(1),t._m(2)],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"navbar navbar-expand-md bg-white"},[s("div",{staticClass:"container"},[s("button",{staticClass:"navbar-toggler py-6 px-5",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon d-flex justify-content-center align-items-center"},[s("i",{staticClass:"fas fa-bars"})])]),s("a",{staticClass:"navbar-brand d-none py-6 d-md-inline-block",attrs:{href:"#"}},[s("img",{attrs:{src:e("623d"),height:"40",alt:"甜點電商"}})]),s("a",{staticClass:"navbar-brand d-md-none py-6",attrs:{href:"#"}},[s("img",{staticClass:"d-inline-block",attrs:{src:e("1b18"),width:"114",height:"33",alt:"甜點電商"}})]),s("a",{staticClass:"navbar-brand order-md-1 p-5 py-md-6 pl-md-6 pr-md-0",attrs:{href:"#"}},[s("span",{staticClass:"d-block",staticStyle:{padding:"5px 0"}},[s("i",{staticClass:"fas fa-shopping-cart"})])]),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"navbar-nav ml-auto"},[s("li",{staticClass:"nav-item active"},[s("a",{staticClass:"nav-link py-6 px-5",attrs:{href:"#"}},[s("span",{staticClass:"d-block",staticStyle:{padding:"8px 0"}},[t._v("首頁")])])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link py-6 px-5",attrs:{href:"#"}},[s("span",{staticClass:"d-block",staticStyle:{padding:"8px 0"}},[t._v("甜點")])])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link py-6 px-5",attrs:{href:"#"}},[s("span",{staticClass:"d-block",staticStyle:{padding:"8px 0"}},[t._v("登入")])])])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"bg-primary py-5"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center align-items-center"},[s("div",{staticClass:"col-md-5"},[s("div",{staticClass:"d-flex justify-content-center justify-content-md-start align-items-center mb-5 mb-md-0"},[s("img",{attrs:{src:e("e91d"),width:"40",height:"40",alt:""}}),s("span",{staticClass:"h4 text-white mx-5 mb-0"},[t._v("訂閱你我的甜蜜郵件")])])]),s("div",{staticClass:"col-md-5"},[s("div",{staticClass:"form-sqare d-flex justify-content-center align-items-center"},[s("label",{staticClass:"form-square-icon h4 mb-0 text-primary",attrs:{for:"subdescript"}},[s("i",{staticClass:"fas fa-envelope"})]),s("input",{staticClass:"form-sqare__input w-100",attrs:{id:"subdescript",type:"text"}}),s("button",{staticClass:"btn btn-accent p-4 text-primary"},[s("i",{staticClass:"fas fa-arrow-right"})])])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("footer",{staticClass:"bg-primary-lighter py-5"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-md-5 d-flex flex-column justify-content-between"},[s("img",{staticClass:"d-block my-md-0 my-4",attrs:{width:"171",height:"26",src:e("1b18"),alt:""}}),s("ul",{staticClass:"list-unstyled mt-4"},[s("li",[t._v("07-123-45678")]),s("li",[s("a",{attrs:{href:"mailto:sweetaste@email.com"}},[t._v("sweetaste@email.com")])]),s("li",[t._v("800 高雄市新興區幸福路 520 號")])])]),s("div",{staticClass:"col-md-5"},[s("div",{staticClass:"text-right d-none d-md-block"},[s("img",{attrs:{width:"60",src:e("4f65"),alt:"今天是個吃甜點的好日子"}})])])]),s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-md-10 d-md-flex align-items-baseline"},[s("ul",{staticClass:"list-unstyled d-flex my-1 mb-md-0"},[s("li",[s("a",{attrs:{href:"#"}},[s("img",{staticClass:"footer_img d-block",attrs:{src:e("b52d"),width:"32",height:"32",alt:"line"}})])]),s("li",[s("a",{attrs:{href:"#"}},[s("img",{staticClass:"d-block",attrs:{src:e("8185"),width:"32",height:"32",alt:"facebook"}})])])]),s("span",{staticClass:"ml-auto"},[t._v("© 2018 Sweetaste* All Rights Reserved")])])])])])}],r={},o=r,c=(e("5c0b"),e("2877")),l=Object(c["a"])(o,n,i,!1,null,null,null),d=l.exports,u=e("8c4f");s["a"].use(u["a"]);var p=new u["a"]({routes:[{path:"/",name:"/Home",component:function(){return e.e("chunk-2d21a3d2").then(e.bind(null,"bb51"))}},{path:"/about",name:"about",component:function(){return e.e("about").then(e.bind(null,"f820"))}}]}),f=e("2f62");s["a"].use(f["a"]);var m=new f["a"].Store({state:{},mutations:{},actions:{}});e("4989");s["a"].config.productionTip=!1,new s["a"]({router:p,store:m,render:function(t){return t(d)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";var s=e("5e27"),n=e.n(s);n.a},"5e27":function(t,a,e){},"623d":function(t,a,e){t.exports=e.p+"img/logo-all-dark.6734d368.svg"},8185:function(t,a,e){t.exports=e.p+"img/ic-facebook.3d7755ce.svg"},b52d:function(t,a,e){t.exports=e.p+"img/ic-line@.b101abfd.svg"},e91d:function(t,a,e){t.exports=e.p+"img/logo-light.c0a6f030.svg"}});
//# sourceMappingURL=app.00196875.js.map