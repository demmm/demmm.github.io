import{i as Ie}from"./index.hIESyhSu.js";var E=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ue(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var de="Expected a function",K=NaN,Ce="[object Symbol]",Re=/^\s+|\s+$/g,Pe=/^[-+]0x[0-9a-f]+$/i,Me=/^0b[01]+$/i,je=/^0o[0-7]+$/i,De=parseInt,$e=typeof E=="object"&&E&&E.Object===Object&&E,qe=typeof self=="object"&&self&&self.Object===Object&&self,He=$e||qe||Function("return this")(),_e=Object.prototype,ze=_e.toString,Fe=Math.max,Be=Math.min,_=function(){return He.Date.now()};function Ye(e,t,n){var r,o,a,l,i,c,u=0,f=!1,s=!1,b=!0;if(typeof e!="function")throw new TypeError(de);t=V(t)||0,j(n)&&(f=!!n.leading,s="maxWait"in n,a=s?Fe(V(n.maxWait)||0,t):a,b="trailing"in n?!!n.trailing:b);function h(d){var p=r,w=o;return r=o=void 0,u=d,l=e.apply(w,p),l}function v(d){return u=d,i=setTimeout(T,t),f?h(d):l}function A(d){var p=d-c,w=d-u,C=t-p;return s?Be(C,a-w):C}function g(d){var p=d-c,w=d-u;return c===void 0||p>=t||p<0||s&&w>=a}function T(){var d=_();if(g(d))return I(d);i=setTimeout(T,A(d))}function I(d){return i=void 0,b&&r?h(d):(r=o=void 0,l)}function q(){i!==void 0&&clearTimeout(i),u=0,r=c=o=i=void 0}function H(){return i===void 0?l:I(_())}function x(){var d=_(),p=g(d);if(r=arguments,o=this,c=d,p){if(i===void 0)return v(c);if(s)return i=setTimeout(T,t),h(c)}return i===void 0&&(i=setTimeout(T,t)),l}return x.cancel=q,x.flush=H,x}function We(e,t,n){var r=!0,o=!0;if(typeof e!="function")throw new TypeError(de);return j(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),Ye(e,t,{leading:r,maxWait:t,trailing:o})}function j(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Xe(e){return!!e&&typeof e=="object"}function Ue(e){return typeof e=="symbol"||Xe(e)&&ze.call(e)==Ce}function V(e){if(typeof e=="number")return e;if(Ue(e))return K;if(j(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=j(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Re,"");var n=Me.test(e);return n||je.test(e)?De(e.slice(2),n?2:8):Pe.test(e)?K:+e}var Ke=We;const Ve=ue(Ke);var Ge="Expected a function",G=NaN,Je="[object Symbol]",Qe=/^\s+|\s+$/g,Ze=/^[-+]0x[0-9a-f]+$/i,et=/^0b[01]+$/i,tt=/^0o[0-7]+$/i,nt=parseInt,rt=typeof E=="object"&&E&&E.Object===Object&&E,ot=typeof self=="object"&&self&&self.Object===Object&&self,it=rt||ot||Function("return this")(),at=Object.prototype,st=at.toString,ct=Math.max,lt=Math.min,z=function(){return it.Date.now()};function ut(e,t,n){var r,o,a,l,i,c,u=0,f=!1,s=!1,b=!0;if(typeof e!="function")throw new TypeError(Ge);t=J(t)||0,B(n)&&(f=!!n.leading,s="maxWait"in n,a=s?ct(J(n.maxWait)||0,t):a,b="trailing"in n?!!n.trailing:b);function h(d){var p=r,w=o;return r=o=void 0,u=d,l=e.apply(w,p),l}function v(d){return u=d,i=setTimeout(T,t),f?h(d):l}function A(d){var p=d-c,w=d-u,C=t-p;return s?lt(C,a-w):C}function g(d){var p=d-c,w=d-u;return c===void 0||p>=t||p<0||s&&w>=a}function T(){var d=z();if(g(d))return I(d);i=setTimeout(T,A(d))}function I(d){return i=void 0,b&&r?h(d):(r=o=void 0,l)}function q(){i!==void 0&&clearTimeout(i),u=0,r=c=o=i=void 0}function H(){return i===void 0?l:I(z())}function x(){var d=z(),p=g(d);if(r=arguments,o=this,c=d,p){if(i===void 0)return v(c);if(s)return i=setTimeout(T,t),h(c)}return i===void 0&&(i=setTimeout(T,t)),l}return x.cancel=q,x.flush=H,x}function B(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function dt(e){return!!e&&typeof e=="object"}function ft(e){return typeof e=="symbol"||dt(e)&&st.call(e)==Je}function J(e){if(typeof e=="number")return e;if(ft(e))return G;if(B(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=B(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Qe,"");var n=et.test(e);return n||tt.test(e)?nt(e.slice(2),n?2:8):Ze.test(e)?G:+e}var mt=ut;const Q=ue(mt);var fe=function(){};function me(e){var t=void 0,n=void 0,r=void 0;for(t=0;t<e.length;t+=1)if(n=e[t],n.dataset&&n.dataset.aos||(r=n.children&&me(n.children),r))return!0;return!1}function ht(e){e&&e.forEach(function(t){var n=Array.prototype.slice.call(t.addedNodes),r=Array.prototype.slice.call(t.removedNodes),o=n.concat(r);if(me(o))return fe()})}function he(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function bt(){return!!he()}function pt(e,t){var n=window.document,r=he(),o=new r(ht);fe=t,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}var Z={isSupported:bt,ready:pt},vt=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},gt=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),yt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wt=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,Tt=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,kt=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,Et=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function ee(){return navigator.userAgent||navigator.vendor||window.opera||""}var St=function(){function e(){vt(this,e)}return gt(e,[{key:"phone",value:function(){var n=ee();return!!(wt.test(n)||Tt.test(n.substr(0,4)))}},{key:"mobile",value:function(){var n=ee();return!!(kt.test(n)||Et.test(n.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}(),M=new St,At=function(t,n){return n&&n.forEach(function(r){return t.classList.add(r)})},xt=function(t,n){return n&&n.forEach(function(r){return t.classList.remove(r)})},P=function(t,n){var r=void 0;return M.ie11()?(r=document.createEvent("CustomEvent"),r.initCustomEvent(t,!0,!0,{detail:n})):r=new CustomEvent(t,{detail:n}),document.dispatchEvent(r)},Lt=function(t,n){var r=t.options,o=t.position,a=t.node;t.data;var l=function(){t.animated&&(xt(a,r.animatedClassNames),P("aos:out",a),t.options.id&&P("aos:in:"+t.options.id,a),t.animated=!1)},i=function(){t.animated||(At(a,r.animatedClassNames),P("aos:in",a),t.options.id&&P("aos:in:"+t.options.id,a),t.animated=!0)};r.mirror&&n>=o.out&&!r.once?l():n>=o.in?i():t.animated&&!r.once&&l()},te=function(t){return t.forEach(function(n,r){return Lt(n,window.pageYOffset)})},be=function(t){for(var n=0,r=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)n+=t.offsetLeft-(t.tagName!="BODY"?t.scrollLeft:0),r+=t.offsetTop-(t.tagName!="BODY"?t.scrollTop:0),t=t.offsetParent;return{top:r,left:n}},S=function(e,t,n){var r=e.getAttribute("data-aos-"+t);if(typeof r<"u"){if(r==="true")return!0;if(r==="false")return!1}return r||n},Ot=function(t,n,r){var o=window.innerHeight,a=S(t,"anchor"),l=S(t,"anchor-placement"),i=Number(S(t,"offset",l?0:n)),c=l||r,u=t;a&&document.querySelectorAll(a)&&(u=document.querySelectorAll(a)[0]);var f=be(u).top-o;switch(c){case"top-bottom":break;case"center-bottom":f+=u.offsetHeight/2;break;case"bottom-bottom":f+=u.offsetHeight;break;case"top-center":f+=o/2;break;case"center-center":f+=o/2+u.offsetHeight/2;break;case"bottom-center":f+=o/2+u.offsetHeight;break;case"top-top":f+=o;break;case"bottom-top":f+=o+u.offsetHeight;break;case"center-top":f+=o+u.offsetHeight/2;break}return f+i},Nt=function(t,n){var r=S(t,"anchor"),o=S(t,"offset",n),a=t;r&&document.querySelectorAll(r)&&(a=document.querySelectorAll(r)[0]);var l=be(a).top;return l+a.offsetHeight-o},It=function(t,n){return t.forEach(function(r,o){var a=S(r.node,"mirror",n.mirror),l=S(r.node,"once",n.once),i=S(r.node,"id"),c=n.useClassNames&&r.node.getAttribute("data-aos"),u=[n.animatedClassName].concat(c?c.split(" "):[]).filter(function(f){return typeof f=="string"});n.initClassName&&r.node.classList.add(n.initClassName),r.position={in:Ot(r.node,n.offset,n.anchorPlacement),out:a&&Nt(r.node,n.offset)},r.options={once:l,mirror:a,animatedClassNames:u,id:i}}),t},pe=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,function(t){return{node:t}})},k=[],ne=!1,m={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},ve=function(){return document.all&&!window.atob},Ct=function(){return k=It(k,m),te(k),window.addEventListener("scroll",Ve(function(){te(k,m.once)},m.throttleDelay)),k},O=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;t&&(ne=!0),ne&&Ct()},ge=function(){if(k=pe(),we(m.disable)||ve())return ye();O()},ye=function(){k.forEach(function(t,n){t.node.removeAttribute("data-aos"),t.node.removeAttribute("data-aos-easing"),t.node.removeAttribute("data-aos-duration"),t.node.removeAttribute("data-aos-delay"),m.initClassName&&t.node.classList.remove(m.initClassName),m.animatedClassName&&t.node.classList.remove(m.animatedClassName)})},we=function(t){return t===!0||t==="mobile"&&M.mobile()||t==="phone"&&M.phone()||t==="tablet"&&M.tablet()||typeof t=="function"&&t()===!0},Rt=function(t){return m=yt(m,t),k=pe(),!m.disableMutationObserver&&!Z.isSupported()&&(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),m.disableMutationObserver=!0),m.disableMutationObserver||Z.ready("[data-aos]",ge),we(m.disable)||ve()?ye():(document.querySelector("body").setAttribute("data-aos-easing",m.easing),document.querySelector("body").setAttribute("data-aos-duration",m.duration),document.querySelector("body").setAttribute("data-aos-delay",m.delay),["DOMContentLoaded","load"].indexOf(m.startEvent)===-1?document.addEventListener(m.startEvent,function(){O(!0)}):window.addEventListener("load",function(){O(!0)}),m.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1&&O(!0),window.addEventListener("resize",Q(O,m.debounceDelay,!0)),window.addEventListener("orientationchange",Q(O,m.debounceDelay,!0)),k)},fn={init:Rt,refresh:O,refreshHard:ge};Te();const Pt=document.querySelector("[data-switch-theme]");Pt.addEventListener("click",e=>{e.preventDefault(),Mt()});function Mt(){const e=localStorage.getItem("theme");e==="light"&&jt(),e==="dark"&&Dt(),e||(console.log("previously it was not set"),Te(!0))}function Te(e=!1){localStorage.getItem("theme")==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.classList.add("dark"),e&&localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),e&&localStorage.setItem("theme","light"))}function jt(){localStorage.setItem("theme","dark"),document.documentElement.classList.add("dark")}function Dt(){localStorage.setItem("theme","light"),document.documentElement.classList.remove("dark")}function ke(){const e=document.querySelector(".hamburger-menu"),t=document.querySelector(".menu-icon"),n=document.querySelector("#menu-items");e?.addEventListener("click",()=>{const r=e.getAttribute("aria-expanded")==="true";t?.classList.toggle("is-active"),e.setAttribute("aria-expanded",r?"false":"true"),e.setAttribute("aria-label",r?"Open Menu":"Close Menu"),n?.classList.toggle("hidden")})}ke();document.addEventListener("astro:after-swap",ke);class $t extends HTMLElement{buttonScroll;constructor(){super(),this.buttonScroll=this.querySelector(".scroll-top-btn"),this.buttonScroll&&(window.addEventListener("scroll",this.scrollToTop.bind(this)),this.buttonScroll.addEventListener("click",t=>{t.preventDefault(),window.scrollTo({top:0})}))}scrollToTop(){window.scrollY>=460?this?.classList.add("show-scroll"):this?.classList.remove("show-scroll")}}customElements.define("astro-scroll-top",$t);const N="data-astro-transition-persist";function qt(e){for(const t of document.scripts)for(const n of e.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!t.src&&t.textContent===n.textContent||t.src&&t.type===n.type&&t.src===n.src)){n.dataset.astroExec="";break}}function Ht(e){const t=document.documentElement,n=[...t.attributes].filter(({name:r})=>(t.removeAttribute(r),r.startsWith("data-astro-")));[...e.documentElement.attributes,...n].forEach(({name:r,value:o})=>t.setAttribute(r,o))}function _t(e){for(const t of Array.from(document.head.children)){const n=Bt(t,e);n?n.remove():t.remove()}document.head.append(...e.head.children)}function zt(e,t){t.replaceWith(e);for(const n of t.querySelectorAll(`[${N}]`)){const r=n.getAttribute(N),o=e.querySelector(`[${N}="${r}"]`);o&&(o.replaceWith(n),o.localName==="astro-island"&&Yt(n)&&!Wt(n,o)&&(n.setAttribute("ssr",""),n.setAttribute("props",o.getAttribute("props"))))}}const Ft=()=>{const e=document.activeElement;if(e?.closest(`[${N}]`)){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){const t=e.selectionStart,n=e.selectionEnd;return()=>F({activeElement:e,start:t,end:n})}return()=>F({activeElement:e})}else return()=>F({activeElement:null})},F=({activeElement:e,start:t,end:n})=>{e&&(e.focus(),(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)&&(typeof t=="number"&&(e.selectionStart=t),typeof n=="number"&&(e.selectionEnd=n)))},Bt=(e,t)=>{const n=e.getAttribute(N),r=n&&t.head.querySelector(`[${N}="${n}"]`);if(r)return r;if(e.matches("link[rel=stylesheet]")){const o=e.getAttribute("href");return t.head.querySelector(`link[rel=stylesheet][href="${o}"]`)}return null},Yt=e=>{const t=e.dataset.astroTransitionPersistProps;return t==null||t==="false"},Wt=(e,t)=>e.getAttribute("props")===t.getAttribute("props"),Xt=e=>{qt(e),Ht(e),_t(e);const t=Ft();zt(e.body,document.body),t()},Ut="astro:before-preparation",Kt="astro:after-preparation",Vt="astro:before-swap",Gt="astro:after-swap",Jt=e=>document.dispatchEvent(new Event(e));class Ee extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(t,n,r,o,a,l,i,c,u,f){super(t,n),this.from=r,this.to=o,this.direction=a,this.navigationType=l,this.sourceElement=i,this.info=c,this.newDocument=u,this.signal=f,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class Qt extends Ee{formData;loader;constructor(t,n,r,o,a,l,i,c,u,f){super(Ut,{cancelable:!0},t,n,r,o,a,l,i,c),this.formData=u,this.loader=f.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class Zt extends Ee{direction;viewTransition;swap;constructor(t,n){super(Vt,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument,t.signal),this.direction=t.direction,this.viewTransition=n,this.swap=()=>Xt(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function en(e,t,n,r,o,a,l,i,c){const u=new Qt(e,t,n,r,o,a,window.document,l,i,c);return document.dispatchEvent(u)&&(await u.loader(),u.defaultPrevented||(Jt(Kt),u.navigationType!=="traverse"&&W({scrollX,scrollY}))),u}function tn(e,t){const n=new Zt(e,t);return document.dispatchEvent(n),n.swap(),n}const nn=history.pushState.bind(history),D=history.replaceState.bind(history),W=e=>{history.state&&(history.scrollRestoration="manual",D({...history.state,...e},""))},X=!!document.startViewTransition,U=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),Se=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let y,L,$;const Ae=e=>document.dispatchEvent(new Event(e)),xe=()=>Ae("astro:page-load"),rn=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},re="data-astro-transition-persist",oe="data-astro-transition",Y="data-astro-transition-fallback";let ie,R=0;history.state?(R=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):U()&&(D({index:R,scrollX,scrollY},""),history.scrollRestoration="manual");async function on(e,t){try{const n=await fetch(e,t),o=(n.headers.get("content-type")??"").split(";",1)[0].trim();return o!=="text/html"&&o!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:o}}catch{return null}}function Le(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function an(){let e=Promise.resolve();for(const t of document.getElementsByTagName("script")){if(t.dataset.astroExec==="")continue;const n=t.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const r=document.createElement("script");r.innerHTML=t.innerHTML;for(const o of t.attributes){if(o.name==="src"){const a=new Promise(l=>{r.onload=r.onerror=l});e=e.then(()=>a)}r.setAttribute(o.name,o.value)}r.dataset.astroExec="",t.replaceWith(r)}return e}const Oe=(e,t,n,r,o)=>{const a=Se(t,e),l=document.title;document.title=r;let i=!1;if(e.href!==location.href&&!o)if(n.history==="replace"){const c=history.state;D({...n.state,index:c.index,scrollX:c.scrollX,scrollY:c.scrollY},"",e.href)}else nn({...n.state,index:++R,scrollX:0,scrollY:0},"",e.href);if(document.title=l,$=e,a||(scrollTo({left:0,top:0,behavior:"instant"}),i=!0),o)scrollTo(o.scrollX,o.scrollY);else{if(e.hash){history.scrollRestoration="auto";const c=history.state;location.href=e.href,history.state||(D(c,""),a&&window.dispatchEvent(new PopStateEvent("popstate")))}else i||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function sn(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${re}="${n.getAttribute(re)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const r=document.createElement("link");r.setAttribute("rel","preload"),r.setAttribute("as","style"),r.setAttribute("href",n.getAttribute("href")),t.push(new Promise(o=>{["load","error"].forEach(a=>r.addEventListener(a,o)),document.head.append(r)}))}return t}async function ae(e,t,n,r,o){async function a(c){function u(h){const v=h.effect;return!v||!(v instanceof KeyframeEffect)||!v.target?!1:window.getComputedStyle(v.target,v.pseudoElement).animationIterationCount==="infinite"}const f=document.getAnimations();document.documentElement.setAttribute(Y,c);const b=document.getAnimations().filter(h=>!f.includes(h)&&!u(h));return Promise.allSettled(b.map(h=>h.finished))}if(o==="animate"&&!n.transitionSkipped&&!e.signal.aborted)try{await a("old")}catch{}const l=document.title,i=tn(e,n.viewTransition);Oe(i.to,i.from,t,l,r),Ae(Gt),o==="animate"&&(!n.transitionSkipped&&!i.signal.aborted?a("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function cn(){return y?.controller.abort(),y={controller:new AbortController}}async function Ne(e,t,n,r,o){const a=cn();if(!U()||location.origin!==n.origin){a===y&&(y=void 0),location.href=n.href;return}const l=o?"traverse":r.history==="replace"?"replace":"push";if(l!=="traverse"&&W({scrollX,scrollY}),Se(t,n)&&(e!=="back"&&n.hash||e==="back"&&t.hash)){Oe(n,t,r,document.title,o),a===y&&(y=void 0);return}const i=await en(t,n,e,l,r.sourceElement,r.info,a.controller.signal,r.formData,c);if(i.defaultPrevented||i.signal.aborted){a===y&&(y=void 0),i.signal.aborted||(location.href=n.href);return}async function c(s){const b=s.to.href,h={signal:s.signal};if(s.formData){h.method="POST";const g=s.sourceElement instanceof HTMLFormElement?s.sourceElement:s.sourceElement instanceof HTMLElement&&"form"in s.sourceElement?s.sourceElement.form:s.sourceElement?.closest("form");h.body=g?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(s.formData):s.formData}const v=await on(b,h);if(v===null){s.preventDefault();return}if(v.redirected){const g=new URL(v.redirected);if(g.origin!==s.to.origin){s.preventDefault();return}s.to=g}if(ie??=new DOMParser,s.newDocument=ie.parseFromString(v.html,v.mediaType),s.newDocument.querySelectorAll("noscript").forEach(g=>g.remove()),!s.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!s.formData){s.preventDefault();return}const A=sn(s.newDocument);A.length&&!s.signal.aborted&&await Promise.all(A)}async function u(){if(L&&L.viewTransition){try{L.viewTransition.skipTransition()}catch{}try{await L.viewTransition.updateCallbackDone}catch{}}return L={transitionSkipped:!1}}const f=await u();if(i.signal.aborted){a===y&&(y=void 0);return}if(document.documentElement.setAttribute(oe,i.direction),X)f.viewTransition=document.startViewTransition(async()=>await ae(i,r,f,o));else{const s=(async()=>{await Promise.resolve(),await ae(i,r,f,o,Le())})();f.viewTransition={updateCallbackDone:s,ready:s,finished:new Promise(b=>f.viewTransitionFinished=b),skipTransition:()=>{f.transitionSkipped=!0,document.documentElement.removeAttribute(Y)}}}f.viewTransition?.updateCallbackDone.finally(async()=>{await an(),xe(),rn()}),f.viewTransition?.finished.finally(()=>{f.viewTransition=void 0,f===L&&(L=void 0),a===y&&(y=void 0),document.documentElement.removeAttribute(oe),document.documentElement.removeAttribute(Y)});try{await f.viewTransition?.updateCallbackDone}catch(s){const b=s;console.log("[astro]",b.name,b.message,b.stack)}}async function se(e,t){await Ne("forward",$,new URL(e,location.href),t??{})}function ln(e){if(!U()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,r=n>R?"forward":"back";R=n,Ne(r,$,new URL(location.href),{},t)}const ce=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&W({scrollX,scrollY})};{if(X||Le()!=="none")if($=new URL(location.href),addEventListener("popstate",ln),addEventListener("load",xe),"onscrollend"in window)addEventListener("scrollend",ce);else{let e,t,n,r;const o=()=>{if(r!==history.state?.index){clearInterval(e),e=void 0;return}if(t===scrollY&&n===scrollX){clearInterval(e),e=void 0,ce();return}else t=scrollY,n=scrollX};addEventListener("scroll",()=>{e===void 0&&(r=history.state.index,t=scrollY,n=scrollX,e=window.setInterval(o,50))},{passive:!0})}for(const e of document.getElementsByTagName("script"))e.dataset.astroExec=""}function un(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function le(e){return e.dataset.astroReload!==void 0}(X||un()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const n=t instanceof HTMLElement?t.target:t.target.baseVal,r=t instanceof HTMLElement?t.href:t.href.baseVal,o=new URL(r,location.href).origin;le(t)||t.hasAttribute("download")||!t.href||n&&n!=="_self"||o!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),se(r,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||le(t))return;const n=t,r=e.submitter,o=new FormData(n,r),a=typeof n.action=="string"?n.action:n.getAttribute("action"),l=typeof n.method=="string"?n.method:n.getAttribute("method");let i=r?.getAttribute("formaction")??a??location.pathname;const c=r?.getAttribute("formmethod")??l??"get";if(c==="dialog"||location.origin!==new URL(i,location.href).origin)return;const u={sourceElement:r??n};if(c==="get"){const f=new URLSearchParams(o),s=new URL(i);s.search=f.toString(),i=s.toString()}else u.formData=o;e.preventDefault(),se(i,u)}),Ie({prefetchAll:!0}));export{fn as a};
