"use strict";(self["webpackChunkPractica1"]=self["webpackChunkPractica1"]||[]).push([[823],{6823:(e,t,o)=>{o.r(t),o.d(t,{startTapClick:()=>s});var n=o(6587);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const s=e=>{let t,o,s,v=10*-u,f=0;const p=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),h=new WeakMap,m=e=>{v=(0,n.u)(e),k(e)},L=e=>{v=(0,n.u)(e),T(e)},w=e=>{if(2===e.button)return;const t=(0,n.u)(e)-u;v<t&&k(e)},E=e=>{const t=(0,n.u)(e)-u;v<t&&T(e)},b=()=>{clearTimeout(s),s=void 0,t&&(R(!1),t=void 0)},k=e=>{t||g(i(e),e)},T=e=>{g(void 0,e)},g=(e,o)=>{if(e&&e===t)return;clearTimeout(s),s=void 0;const{x:i,y:c}=(0,n.p)(o);if(t){if(h.has(t))throw new Error("internal error");t.classList.contains(r)||C(t,i,c),R(!0)}if(e){const t=h.get(e);t&&(clearTimeout(t),h.delete(e));const o=a(e)?0:d;e.classList.remove(r),s=setTimeout((()=>{C(e,i,c),s=void 0}),o)}t=e},C=(e,t,n)=>{if(f=Date.now(),e.classList.add(r),!p)return;const s=c(e);null!==s&&(P(),o=s.addRipple(t,n))},P=()=>{void 0!==o&&(o.then((e=>e())),o=void 0)},R=e=>{P();const o=t;if(!o)return;const n=l-Date.now()+f;if(e&&n>0&&!a(o)){const e=setTimeout((()=>{o.classList.remove(r),h.delete(o)}),l);h.set(o,e)}else o.classList.remove(r)},y=document;y.addEventListener("ionGestureCaptured",b),y.addEventListener("touchstart",m,!0),y.addEventListener("touchcancel",L,!0),y.addEventListener("touchend",L,!0),y.addEventListener("pointercancel",b,!0),y.addEventListener("mousedown",w,!0),y.addEventListener("mouseup",E,!0)},i=e=>{if(void 0===e.composedPath)return e.target.closest(".ion-activatable");{const t=e.composedPath();for(let e=0;e<t.length-2;e++){const o=t[e];if(!(o instanceof ShadowRoot)&&o.classList.contains("ion-activatable"))return o}}},a=e=>e.classList.contains("ion-activatable-instant"),c=e=>{if(e.shadowRoot){const t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},r="ion-activated",d=200,l=200,u=2500}}]);
//# sourceMappingURL=823-legacy.14b4ad56.js.map