function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},r=t.parcelRequired76b;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},t.parcelRequired76b=r),r.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}}));var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e,t,o){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return o};var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){d.default(e,t),t.add(e)};var n,d=(n=r("7K24o"))&&n.__esModule?n:{default:n};var c=new WeakSet,s=new WeakSet;function u(){const e=localStorage.getItem("filmotekaPageState");if(e)try{const t=JSON.parse(e);for(const e of Object.keys(t))if(!["locale","mode","currentPage"].includes(e))throw new Error;return t}catch{localStorage.removeItem("filmotekaPageState")}}function h(){const e={locale:this._locale,mode:this._mode,currentPage:this._currentPage};localStorage.setItem("filmotekaPageState",JSON.stringify(e))}const f=new class{get locale(){return this._locale}set locale(t){["en","ua"].includes(t)&&(this._locale=t,e(l)(this,s,h).call(this))}get mode(){return this._mode}set mode(t){["light","dark"].includes(t)&&(this._mode=t,e(l)(this,s,h).call(this))}get currentPage(){return this._currentPage}set currentPage(t){["home","libraryA","libraryB"].includes(t)&&(this._currentPage=t,e(l)(this,s,h).call(this))}init(){const t=e(l)(this,c,u).call(this);t&&(this._locale=t.locale,this._mode=t.mode,this._currentPage=t.currentPage)}constructor(){e(i)(this,c),e(i)(this,s),this._locale="en",this._mode="light",this._currentPage="home"}},m={en:{header:{locale:"EN",home:"Home",library:"My library",signIn:"Sign In"}},ua:{header:{locale:"UA",home:"Головна",library:"Бібліотека",signIn:"Увійти"}}},g={headerContainer:document.querySelector("[data-header]")},{headerContainer:y}=g,_={headerLocaleFields:y.querySelectorAll("[data-locale_field]")},w=e=>{for(const t of Array.from(_.headerLocaleFields))t.textContent=m[e].header[t.dataset.locale_field]},b=e=>{if(bodyClassRef=document.body.classList,switchRef=document.querySelector("[data-mode_switch]"),"light"===e&&bodyClassRef.contains("dark-mode"))return bodyClassRef.remove("dark-mode"),void(switchRef.checked=!1);"dark"!==e||bodyClassRef.contains("dark-mode")||(bodyClassRef.add("dark-mode"),switchRef.checked=!0),bodyClassRef.contains("isLoaded")||setTimeout((()=>bodyClassRef.add("isLoaded")),250)},p={localeSwitch:document.querySelector("[data-locale_switch]"),modeSwitch:document.querySelector("[data-mode_switch]")};f.init(),b(f.mode),w(f.locale);p.localeSwitch.addEventListener("click",(()=>{f.locale="en"===f.locale?"ua":"en",w(f.locale)})),p.modeSwitch.addEventListener("change",(()=>{f.mode="light"===f.mode?"dark":"light",b(f.mode)}));
//# sourceMappingURL=index.b5a03d46.js.map
