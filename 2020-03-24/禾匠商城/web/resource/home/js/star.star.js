(function(e){function t(t){for(var r,o,i=t[0],u=t[1],s=t[2],f=0,l=[];f<i.length;f++)o=i[f],a[o]&&l.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(l.length)l.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={star:0},a={star:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+".star.js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-17fcbe22":1,"chunk-225ab4a4":1,"chunk-43bc671b":1,"chunk-a7ffc2ce":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+".css",a=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===a))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],f=s.getAttribute("data-href");if(f===r||f===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],p.parentNode.removeChild(p),n(c)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=c);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=i(e),s=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");c.type=r,c.request=o,n[1](c)}a[e]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:f})},12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="resource/home/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=f;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("0588")},"0588":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=n("8c4f");r["default"].use(o["a"]);var a=new o["a"]({routes:[{path:"/appList/:uniacid",name:"app",component:function(){return n.e("chunk-43bc671b").then(n.bind(null,"ef9b"))},meta:{noCommon:!0}},{path:"/",name:"index",component:function(){return n.e("chunk-a7ffc2ce").then(n.bind(null,"452d"))},meta:{noCommon:!0},beforeEnter:function(e,t,n){if("/"==e.path){var r=window.localStorage.getItem("we7StarRoute")&&"/"!=window.localStorage.getItem("we7StarRoute")?window.localStorage.getItem("we7StarRoute"):"platform";n({path:r})}else n()},children:[{path:"/account_recycle",name:"accountRecycle",component:function(){return n.e("chunk-17fcbe22").then(n.bind(null,"4e8e"))},meta:{noCommon:!0}},{path:":key",name:"info",component:function(){return n.e("chunk-225ab4a4").then(n.bind(null,"f60e"))},meta:{noCommon:!0}},{path:":key/:type",name:"info",component:function(){return n.e("chunk-225ab4a4").then(n.bind(null,"f60e"))},meta:{noCommon:!0}}]}],mode:""}),c=(n("8e6e"),n("ac6a"),n("456d"),n("a481"),n("4917"),n("bd86")),i=n("7618"),u=(n("28a5"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"we7"}},[n("router-view")],1)}),s=[],f=n("2877"),l={},p=Object(f["a"])(l,u,s,!1,null,null,null),d=p.exports,A=n("4360"),m=n("5c96"),g=n.n(m),h=(n("24ab"),n("adcf"),n("a27e")),b={inserted:function(e,t){var n=t.value,r=A["a"].state&&A["a"].state.permission;"string"===typeof n&&(n=[n]);var o=!1;n&&n instanceof Array&&n.length>0&&r instanceof Array&&(o=n.some(function(e){return-1!==r.indexOf(e)})),o||e.parentNode&&e.parentNode.removeChild(e)},install:function(e){e.directive("permission",b)}},y=b,E=n("4eb5"),O=n.n(E),w=n("caf9");function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach(function(t){Object(c["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}r["default"].mixin({methods:{openRoute:function(e,t){var n=location.pathname.split("/");return location.origin+"/"+n[1]+"/"+n[2]+"/"+e+t}},data:function(){return{VUE_APP_FOR:"star"}}}),r["default"].prototype.$http=h["a"],r["default"].use(g.a),r["default"].use(y),r["default"].use(O.a),r["default"].use(w["a"],{preLoad:1.3,error:n("ca87"),attempt:1,filter:{index:function(e){-1!=e.el.className.indexOf("account-logo")&&(e.error=n("11ad")),-1!=e.el.className.indexOf("module-logo")&&(e.error=n("8d29")),-1!=e.el.className.indexOf("user-logo")&&(e.error=n("6c37"))}}}),r["default"].config.productionTip=!1,r["default"].prototype.$message=function(e){var t="object"==Object(i["a"])(e)?e:{title:e};return t=Object.assign({duration:500},t),Object(m["Message"])(t)},r["default"].prototype.$alert=function(e,t,n){return n=Object.assign({center:!0},n),m["MessageBox"].alert(e,t||"系统提示",n)},r["default"].prototype.$confirm=function(e,t,n){return m["MessageBox"].confirm(e,t||"系统提示",v({},n,{type:"warning",center:!0}))};var _=function(e){return e.beforeEach(function(e,t,n){if(e.meta.noCommon)n();else{var r=A["a"].state&&A["a"].state.permission;r&&r.length?n():A["a"].dispatch("getCommon").then(function(){n()}).catch(function(e){console.log("测试console1"+e)})}}),e.onError(function(t){var n=/Loading chunk (\d)+ failed/g;console.log(t);var r=t.message.match(n),o=e.history.pending.fullPath;r&&e.replace(o)}),window.test=Object({NODE_ENV:"production",VUE_APP_FOR:"star",BASE_URL:"resource/home/"}),new r["default"]({router:e,store:A["a"],render:function(e){return e(d)}}).$mount("#app")},N=_;N(a)},"11ad":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAAIVBMVEX3+PrMzMzc3N3k5OXS0tPy8/X09fft7e/g4eLX19fq6+wMXGroAAAApUlEQVQ4y2MYBQMGghwFBQWdQSwTIENEFVWWSxAM3BgYUiCsBSjSgRBBSQaGiRCWKIq0oiAEFLBDGUIo0o5Q0QYOKEMERVoQChSYYKxhIg3ztwEzVn8bQkUDWKEMYRRpFqggXKEDijTbRIjZDAwQ0yUTUGOUvUlJSckUxAoGMjQKKE0/hA0n7DTCHiMcLIhAHZmJCZGJCGRBAhmYQPYnUHiMgoECALOsNDOyCrlXAAAAAElFTkSuQmCC"},"24ab":function(e,t,n){},4360:function(e,t,n){"use strict";var r=n("2b0e"),o=n("2f62"),a=n("a27e");r["default"].use(o["a"]),t["a"]=new o["a"].Store({state:{permission:[],uni_account_type:{},uni_account_type_sign:{},role:"",accoutInfo:{},userInfo:{},extra_fileds:{},CONSTANT:{},COMMON:{},starMenu:{}},mutations:{SET_PERMISSION:function(e,t){e.permission=t},SET_UNI_ACCOUNT_TYPE:function(e,t){e.uni_account_type=t},SET_UNI_ACCOUNT_TYPE_SIGN:function(e,t){e.uni_account_type_sign=t},SET_CONSTANT:function(e,t){e.CONSTANT=t},SET_COMMON:function(e,t){e.COMMON=t},SET_ACCOUNT_INFO:function(e,t){e.accoutInfo=t},SET_USER_INFO:function(e,t){e.userInfo=t},SET_EXTRA_FILEDS:function(e,t){e.extra_fileds=t},SET_STAR_MENU_LIST:function(e,t){e.starMenu=t}},actions:{getCommon:function(e){var t=e.commit;return a["a"].get("index.php?c=account&a=common-info").then(function(e){t("SET_PERMISSION",e.permission),t("SET_UNI_ACCOUNT_TYPE",e.uni_account_type),t("SET_UNI_ACCOUNT_TYPE_SIGN",e.uni_account_type_sign),t("SET_CONSTANT",e.defined_constants),delete e.permission,delete e.uni_account_type,delete e.uni_account_type_sign,delete e.defined_constants,t("SET_COMMON",e)})},getAccountInfo:function(e,t){var n=e.commit,r=e.state;return a["a"].get("index.php?c=account&a=post",{params:{uniacid:t}}).then(function(e){r.uni_account_type_sign&&(e.type_text=r.uni_account_type_sign[e.type_sign]?r.uni_account_type_sign[e.type_sign]["title"]:"",e.type_class=r.uni_account_type_sign[e.type_sign]?r.uni_account_type_sign[e.type_sign]["icon"]:""),n("SET_ACCOUNT_INFO",e)})},getUserInfo:function(e,t){var n=e.commit;return a["a"].get("/index.php?c=user&a=edit&uid="+t).then(function(e){n("SET_USER_INFO",Object.assign(e.user,e.profile)),n("SET_EXTRA_FILEDS",e.extra_fileds)})},getStarMenu:function(e){var t=e.commit;return a["a"].get("/home.php?getmenu=1").then(function(e){return t("SET_STAR_MENU_LIST",e),e})}}})},"6c37":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAAIVBMVEXm5ub////7+/vv7+/p6en29vb4+Pjy8vLr6+vs7Ozx8fE6upbrAAAAsElEQVQ4y+3QzQqCUBCG4alO9LNqjhS1S4jWFrQXr6AIcltdQUQXYNtWdcfpGZED+im6FN/tAx/DUFebm971GevEZeYN5B3HaR+oYtMa8FDYAdwT1oB/LMHLJL8Rv8vH+6JzwCPhFYFcw0fEQaILQqlTzA/Cfgg9wn0u2zCCujcv9/Blxr+FOuA0B75cKpofc9YSfVzSaBuv3yy+5pmtZhVcezywLo/yrJ6Zvqirpf0B2jobVf8Ek0cAAAAASUVORK5CYII="},"8d29":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAAJ1BMVEX3+PrMzMzy8/XQ0NDd3d7Y2Nnw8fLi4uPq6+zm5+jl5efU1NTS0tPPbE0FAAAA3klEQVQ4y+3TPQ6CQBCG4YlR/InNJxoLLTTRA1AZrdQTiAU1DT3EC3AACxIvYMIJvIF2HkvUQWBgaSnkLffZ7M4WS3VV51hlugD2am0bgO6qtBtp5EGxajd8mthF2tiBG84K+IRfq7xekGottYVMB+leWsdS9zwZz7YQrLuaCW5ktw3B0INO/G6/a0AwrwK8TzCfCfAtgnkigGcUzO9xLPKgYmyIQqgZ9z7KeDD/MzazPBLceaR56pOoZySsXylXM+EtFeTErPjE5y8/SVH45g0p2w3mQ1KnHZc21VXbC7bOMldobTdrAAAAAElFTkSuQmCC"},a27e:function(e,t,n){"use strict";n("8e6e"),n("ac6a"),n("456d");var r=n("bd86"),o=n("7618"),a=n("bc3a"),c=n.n(a),i=n("4328"),u=n.n(i),s=n("5c96"),f=n("4360");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach(function(t){Object(r["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var d=c.a.create({baseURL:"/web/",withCredentials:!0,headers:{"X-Requested-With":"XMLHttpRequest"}});d.interceptors.request.use(function(e){return window.we7Info&&(e.baseURL=(window.we7Info.url||"")+"/web/"),e.transformRequest=[function(e){return"object"!==Object(o["a"])(e)||e instanceof FormData?e:u.a.stringify(e)}],e.params=p({},e.params,{token:f["a"].state.COMMON.submit_token,w7_request_secret:"{{$w7_request_secret}}",access_token:window.we7Info&&window.we7Info.access_token}),e}),d.interceptors.response.use(function(e){if(!e.data.message||e.data.message.errno){var t=e.data.message.errno;return 403==t?window.location.reload():401==t?window.location.href=e.data.message.message?e.data.message.message.login_url:"":e.data.message&&"string"===typeof e.data.message.message&&!e.config.params.hideError&&s["MessageBox"].alert(e.data.message.message,"系统提示",{center:!0,type:"warning",dangerouslyUseHTMLString:!0}),Promise.reject(e.data.message)}return e.data.message.message},function(e){return Promise.reject(e.response)}),t["a"]=d},adcf:function(e,t,n){},ca87:function(e,t){e.exports="data:image/png;base64,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"}});