import{r as o,$ as Oe,v as j,j as H,N as Ae}from"./index-_xd8OyP8.js";import{a as X,d as _,b as ee}from"./index-BwSRHYe4.js";import{P as K,d as Re}from"./index-CX6PQ3zO.js";var Te=globalThis?.document?o.useLayoutEffect:()=>{},Le=Oe.useId||(()=>{}),Me=0;function qt(e){const[t,n]=o.useState(Le());return Te(()=>{n(r=>r??String(Me++))},[e]),t?`radix-${t}`:""}function De(e){const t=o.useRef(e);return o.useEffect(()=>{t.current=e}),o.useMemo(()=>(...n)=>t.current?.(...n),[])}function ke(e,t=globalThis?.document){const n=De(e);o.useEffect(()=>{const r=a=>{a.key==="Escape"&&n(a)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var Ie="DismissableLayer",te="dismissableLayer.update",Fe="dismissableLayer.pointerDownOutside",xe="dismissableLayer.focusOutside",re,he=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),We=o.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:a,onFocusOutside:c,onInteractOutside:l,onDismiss:i,...p}=e,u=o.useContext(he),[d,v]=o.useState(null),m=d?.ownerDocument??globalThis?.document,[,h]=o.useState({}),C=j(t,E=>v(E)),s=Array.from(u.layers),[f]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),y=s.indexOf(f),w=d?s.indexOf(d):-1,g=u.layersWithOutsidePointerEventsDisabled.size>0,b=w>=y,S=_e(E=>{const O=E.target,D=[...u.branches].some(V=>V.contains(O));!b||D||(a?.(E),l?.(E),E.defaultPrevented||i?.())},m),N=je(E=>{const O=E.target;[...u.branches].some(V=>V.contains(O))||(c?.(E),l?.(E),E.defaultPrevented||i?.())},m);return ke(E=>{w===u.layers.size-1&&(r?.(E),!E.defaultPrevented&&i&&(E.preventDefault(),i()))},m),o.useEffect(()=>{if(d)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(re=m.body.style.pointerEvents,m.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(d)),u.layers.add(d),ae(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(m.body.style.pointerEvents=re)}},[d,m,n,u]),o.useEffect(()=>()=>{d&&(u.layers.delete(d),u.layersWithOutsidePointerEventsDisabled.delete(d),ae())},[d,u]),o.useEffect(()=>{const E=()=>h({});return document.addEventListener(te,E),()=>document.removeEventListener(te,E)},[]),H.jsx(K.div,{...p,ref:C,style:{pointerEvents:g?b?"auto":"none":void 0,...e.style},onFocusCapture:X(e.onFocusCapture,N.onFocusCapture),onBlurCapture:X(e.onBlurCapture,N.onBlurCapture),onPointerDownCapture:X(e.onPointerDownCapture,S.onPointerDownCapture)})});We.displayName=Ie;var Be="DismissableLayerBranch",Ue=o.forwardRef((e,t)=>{const n=o.useContext(he),r=o.useRef(null),a=j(t,r);return o.useEffect(()=>{const c=r.current;if(c)return n.branches.add(c),()=>{n.branches.delete(c)}},[n.branches]),H.jsx(K.div,{...e,ref:a})});Ue.displayName=Be;function _e(e,t=globalThis?.document){const n=_(e),r=o.useRef(!1),a=o.useRef(()=>{});return o.useEffect(()=>{const c=i=>{if(i.target&&!r.current){let p=function(){pe(Fe,n,u,{discrete:!0})};const u={originalEvent:i};i.pointerType==="touch"?(t.removeEventListener("click",a.current),a.current=p,t.addEventListener("click",a.current,{once:!0})):p()}else t.removeEventListener("click",a.current);r.current=!1},l=window.setTimeout(()=>{t.addEventListener("pointerdown",c)},0);return()=>{window.clearTimeout(l),t.removeEventListener("pointerdown",c),t.removeEventListener("click",a.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function je(e,t=globalThis?.document){const n=_(e),r=o.useRef(!1);return o.useEffect(()=>{const a=c=>{c.target&&!r.current&&pe(xe,n,{originalEvent:c},{discrete:!1})};return t.addEventListener("focusin",a),()=>t.removeEventListener("focusin",a)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function ae(){const e=new CustomEvent(te);document.dispatchEvent(e)}function pe(e,t,n,{discrete:r}){const a=n.originalEvent.target,c=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&a.addEventListener(e,t,{once:!0}),r?Re(a,c):a.dispatchEvent(c)}var Y="focusScope.autoFocusOnMount",z="focusScope.autoFocusOnUnmount",oe={bubbles:!1,cancelable:!0},He="FocusScope",Ke=o.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:a,onUnmountAutoFocus:c,...l}=e,[i,p]=o.useState(null),u=_(a),d=_(c),v=o.useRef(null),m=j(t,s=>p(s)),h=o.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;o.useEffect(()=>{if(r){let s=function(g){if(h.paused||!i)return;const b=g.target;i.contains(b)?v.current=b:A(v.current,{select:!0})},f=function(g){if(h.paused||!i)return;const b=g.relatedTarget;b!==null&&(i.contains(b)||A(v.current,{select:!0}))},y=function(g){if(document.activeElement===document.body)for(const S of g)S.removedNodes.length>0&&A(i)};document.addEventListener("focusin",s),document.addEventListener("focusout",f);const w=new MutationObserver(y);return i&&w.observe(i,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",s),document.removeEventListener("focusout",f),w.disconnect()}}},[r,i,h.paused]),o.useEffect(()=>{if(i){ce.add(h);const s=document.activeElement;if(!i.contains(s)){const y=new CustomEvent(Y,oe);i.addEventListener(Y,u),i.dispatchEvent(y),y.defaultPrevented||($e(Ge(ye(i)),{select:!0}),document.activeElement===s&&A(i))}return()=>{i.removeEventListener(Y,u),setTimeout(()=>{const y=new CustomEvent(z,oe);i.addEventListener(z,d),i.dispatchEvent(y),y.defaultPrevented||A(s??document.body,{select:!0}),i.removeEventListener(z,d),ce.remove(h)},0)}}},[i,u,d,h]);const C=o.useCallback(s=>{if(!n&&!r||h.paused)return;const f=s.key==="Tab"&&!s.altKey&&!s.ctrlKey&&!s.metaKey,y=document.activeElement;if(f&&y){const w=s.currentTarget,[g,b]=Ve(w);g&&b?!s.shiftKey&&y===b?(s.preventDefault(),n&&A(g,{select:!0})):s.shiftKey&&y===g&&(s.preventDefault(),n&&A(b,{select:!0})):y===w&&s.preventDefault()}},[n,r,h.paused]);return H.jsx(K.div,{tabIndex:-1,...l,ref:m,onKeyDown:C})});Ke.displayName=He;function $e(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(A(r,{select:t}),document.activeElement!==n)return}function Ve(e){const t=ye(e),n=ie(t,e),r=ie(t.reverse(),e);return[n,r]}function ye(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const a=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||a?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function ie(e,t){for(const n of e)if(!Xe(n,{upTo:t}))return n}function Xe(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Ye(e){return e instanceof HTMLInputElement&&"select"in e}function A(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&Ye(e)&&t&&e.select()}}var ce=ze();function ze(){let e=[];return{add(t){const n=e[0];t!==n&&n?.pause(),e=se(e,t),e.unshift(t)},remove(t){e=se(e,t),e[0]?.resume()}}}function se(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function Ge(e){return e.filter(t=>t.tagName!=="A")}var Ze="Portal",qe=o.forwardRef((e,t)=>{const{container:n,...r}=e,[a,c]=o.useState(!1);ee(()=>c(!0),[]);const l=n||a&&globalThis?.document?.body;return l?Ae.createPortal(H.jsx(K.div,{...r,ref:t}),l):null});qe.displayName=Ze;function Qe(e,t){return o.useReducer((n,r)=>t[n][r]??n,e)}var Je=e=>{const{present:t,children:n}=e,r=et(t),a=typeof n=="function"?n({present:r.isPresent}):o.Children.only(n),c=j(r.ref,tt(a));return typeof n=="function"||r.isPresent?o.cloneElement(a,{ref:c}):null};Je.displayName="Presence";function et(e){const[t,n]=o.useState(),r=o.useRef({}),a=o.useRef(e),c=o.useRef("none"),l=e?"mounted":"unmounted",[i,p]=Qe(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return o.useEffect(()=>{const u=k(r.current);c.current=i==="mounted"?u:"none"},[i]),ee(()=>{const u=r.current,d=a.current;if(d!==e){const m=c.current,h=k(u);e?p("MOUNT"):h==="none"||u?.display==="none"?p("UNMOUNT"):p(d&&m!==h?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,p]),ee(()=>{if(t){let u;const d=t.ownerDocument.defaultView??window,v=h=>{const s=k(r.current).includes(h.animationName);if(h.target===t&&s&&(p("ANIMATION_END"),!a.current)){const f=t.style.animationFillMode;t.style.animationFillMode="forwards",u=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=f)})}},m=h=>{h.target===t&&(c.current=k(r.current))};return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",v),t.addEventListener("animationend",v),()=>{d.clearTimeout(u),t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",v),t.removeEventListener("animationend",v)}}else p("ANIMATION_END")},[t,p]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:o.useCallback(u=>{u&&(r.current=getComputedStyle(u)),n(u)},[])}}function k(e){return e?.animationName||"none"}function tt(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var G=0;function Qt(){o.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??ue()),document.body.insertAdjacentElement("beforeend",e[1]??ue()),G++,()=>{G===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),G--}},[])}function ue(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var P=function(){return P=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(t[c]=n[c])}return t},P.apply(this,arguments)};function Ee(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function nt(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,c;r<a;r++)(c||!(r in t))&&(c||(c=Array.prototype.slice.call(t,0,r)),c[r]=t[r]);return e.concat(c||Array.prototype.slice.call(t))}var B="right-scroll-bar-position",U="width-before-scroll-bar",rt="with-scroll-bars-hidden",at="--removed-body-scroll-bar-size";function Z(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function ot(e,t){var n=o.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var a=n.value;a!==r&&(n.value=r,n.callback(r,a))}}}})[0];return n.callback=t,n.facade}var it=typeof window<"u"?o.useLayoutEffect:o.useEffect,le=new WeakMap;function ct(e,t){var n=ot(null,function(r){return e.forEach(function(a){return Z(a,r)})});return it(function(){var r=le.get(n);if(r){var a=new Set(r),c=new Set(e),l=n.current;a.forEach(function(i){c.has(i)||Z(i,null)}),c.forEach(function(i){a.has(i)||Z(i,l)})}le.set(n,e)},[e]),n}function st(e){return e}function ut(e,t){t===void 0&&(t=st);var n=[],r=!1,a={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(c){var l=t(c,r);return n.push(l),function(){n=n.filter(function(i){return i!==l})}},assignSyncMedium:function(c){for(r=!0;n.length;){var l=n;n=[],l.forEach(c)}n={push:function(i){return c(i)},filter:function(){return n}}},assignMedium:function(c){r=!0;var l=[];if(n.length){var i=n;n=[],i.forEach(c),l=n}var p=function(){var d=l;l=[],d.forEach(c)},u=function(){return Promise.resolve().then(p)};u(),n={push:function(d){l.push(d),u()},filter:function(d){return l=l.filter(d),n}}}};return a}function lt(e){e===void 0&&(e={});var t=ut(null);return t.options=P({async:!0,ssr:!1},e),t}var ge=function(e){var t=e.sideCar,n=Ee(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return o.createElement(r,P({},n))};ge.isSideCarExport=!0;function dt(e,t){return e.useMedium(t),ge}var be=lt(),q=function(){},$=o.forwardRef(function(e,t){var n=o.useRef(null),r=o.useState({onScrollCapture:q,onWheelCapture:q,onTouchMoveCapture:q}),a=r[0],c=r[1],l=e.forwardProps,i=e.children,p=e.className,u=e.removeScrollBar,d=e.enabled,v=e.shards,m=e.sideCar,h=e.noIsolation,C=e.inert,s=e.allowPinchZoom,f=e.as,y=f===void 0?"div":f,w=e.gapMode,g=Ee(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),b=m,S=ct([n,t]),N=P(P({},g),a);return o.createElement(o.Fragment,null,d&&o.createElement(b,{sideCar:be,removeScrollBar:u,shards:v,noIsolation:h,inert:C,setCallbacks:c,allowPinchZoom:!!s,lockRef:n,gapMode:w}),l?o.cloneElement(o.Children.only(i),P(P({},N),{ref:S})):o.createElement(y,P({},N,{className:p,ref:S}),i))});$.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};$.classNames={fullWidth:U,zeroRight:B};var Se=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function ft(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Se();return t&&e.setAttribute("nonce",t),e}function vt(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function mt(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var ht=function(){var e=0,t=null;return{add:function(n){e==0&&(t=ft())&&(vt(t,n),mt(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},pt=function(){var e=ht();return function(t,n){o.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},yt=function(){var e=pt(),t=function(n){var r=n.styles,a=n.dynamic;return e(r,a),null};return t},Et={left:0,top:0,right:0,gap:0},Q=function(e){return parseInt(e||"",10)||0},gt=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],a=t[e==="padding"?"paddingRight":"marginRight"];return[Q(n),Q(r),Q(a)]},bt=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Et;var t=gt(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},St=yt(),M="data-scroll-locked",wt=function(e,t,n,r){var a=e.left,c=e.top,l=e.right,i=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(rt,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(i,"px ").concat(r,`;
  }
  body[`).concat(M,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(c,`px;
    padding-right: `).concat(l,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(i,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(B,` {
    right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(U,` {
    margin-right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(B," .").concat(B,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(U," .").concat(U,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(M,`] {
    `).concat(at,": ").concat(i,`px;
  }
`)},de=function(){var e=parseInt(document.body.getAttribute(M)||"0",10);return isFinite(e)?e:0},Ct=function(){o.useEffect(function(){return document.body.setAttribute(M,(de()+1).toString()),function(){var e=de()-1;e<=0?document.body.removeAttribute(M):document.body.setAttribute(M,e.toString())}},[])},Pt=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,a=r===void 0?"margin":r;Ct();var c=o.useMemo(function(){return bt(a)},[a]);return o.createElement(St,{styles:wt(c,!t,a,n?"":"!important")})};function Nt(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Se();return t&&e.setAttribute("nonce",t),e}function Ot(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function At(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Rt=function(){var e=0,t=null;return{add:function(n){e==0&&(t=Nt())&&(Ot(t,n),At(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Tt=function(){var e=Rt();return function(t,n){o.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Lt=function(){var e=Tt(),t=function(n){var r=n.styles,a=n.dynamic;return e(r,a),null};return t},ne=!1;if(typeof window<"u")try{var I=Object.defineProperty({},"passive",{get:function(){return ne=!0,!0}});window.addEventListener("test",I,I),window.removeEventListener("test",I,I)}catch{ne=!1}var R=ne?{passive:!1}:!1,Mt=function(e){return e.tagName==="TEXTAREA"},we=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!Mt(e)&&n[t]==="visible")},Dt=function(e){return we(e,"overflowY")},kt=function(e){return we(e,"overflowX")},fe=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var a=Ce(e,r);if(a){var c=Pe(e,r),l=c[1],i=c[2];if(l>i)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},It=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},Ft=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Ce=function(e,t){return e==="v"?Dt(t):kt(t)},Pe=function(e,t){return e==="v"?It(t):Ft(t)},xt=function(e,t){return e==="h"&&t==="rtl"?-1:1},Wt=function(e,t,n,r,a){var c=xt(e,window.getComputedStyle(t).direction),l=c*r,i=n.target,p=t.contains(i),u=!1,d=l>0,v=0,m=0;do{var h=Pe(e,i),C=h[0],s=h[1],f=h[2],y=s-f-c*C;(C||y)&&Ce(e,i)&&(v+=y,m+=C),i instanceof ShadowRoot?i=i.host:i=i.parentNode}while(!p&&i!==document.body||p&&(t.contains(i)||t===i));return(d&&(Math.abs(v)<1||!a)||!d&&(Math.abs(m)<1||!a))&&(u=!0),u},F=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},ve=function(e){return[e.deltaX,e.deltaY]},me=function(e){return e&&"current"in e?e.current:e},Bt=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Ut=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},_t=0,T=[];function jt(e){var t=o.useRef([]),n=o.useRef([0,0]),r=o.useRef(),a=o.useState(_t++)[0],c=o.useState(Lt)[0],l=o.useRef(e);o.useEffect(function(){l.current=e},[e]),o.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var s=nt([e.lockRef.current],(e.shards||[]).map(me),!0).filter(Boolean);return s.forEach(function(f){return f.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),s.forEach(function(f){return f.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var i=o.useCallback(function(s,f){if("touches"in s&&s.touches.length===2||s.type==="wheel"&&s.ctrlKey)return!l.current.allowPinchZoom;var y=F(s),w=n.current,g="deltaX"in s?s.deltaX:w[0]-y[0],b="deltaY"in s?s.deltaY:w[1]-y[1],S,N=s.target,E=Math.abs(g)>Math.abs(b)?"h":"v";if("touches"in s&&E==="h"&&N.type==="range")return!1;var O=fe(E,N);if(!O)return!0;if(O?S=E:(S=E==="v"?"h":"v",O=fe(E,N)),!O)return!1;if(!r.current&&"changedTouches"in s&&(g||b)&&(r.current=S),!S)return!0;var D=r.current||S;return Wt(D,f,s,D==="h"?g:b,!0)},[]),p=o.useCallback(function(s){var f=s;if(!(!T.length||T[T.length-1]!==c)){var y="deltaY"in f?ve(f):F(f),w=t.current.filter(function(S){return S.name===f.type&&(S.target===f.target||f.target===S.shadowParent)&&Bt(S.delta,y)})[0];if(w&&w.should){f.cancelable&&f.preventDefault();return}if(!w){var g=(l.current.shards||[]).map(me).filter(Boolean).filter(function(S){return S.contains(f.target)}),b=g.length>0?i(f,g[0]):!l.current.noIsolation;b&&f.cancelable&&f.preventDefault()}}},[]),u=o.useCallback(function(s,f,y,w){var g={name:s,delta:f,target:y,should:w,shadowParent:Ht(y)};t.current.push(g),setTimeout(function(){t.current=t.current.filter(function(b){return b!==g})},1)},[]),d=o.useCallback(function(s){n.current=F(s),r.current=void 0},[]),v=o.useCallback(function(s){u(s.type,ve(s),s.target,i(s,e.lockRef.current))},[]),m=o.useCallback(function(s){u(s.type,F(s),s.target,i(s,e.lockRef.current))},[]);o.useEffect(function(){return T.push(c),e.setCallbacks({onScrollCapture:v,onWheelCapture:v,onTouchMoveCapture:m}),document.addEventListener("wheel",p,R),document.addEventListener("touchmove",p,R),document.addEventListener("touchstart",d,R),function(){T=T.filter(function(s){return s!==c}),document.removeEventListener("wheel",p,R),document.removeEventListener("touchmove",p,R),document.removeEventListener("touchstart",d,R)}},[]);var h=e.removeScrollBar,C=e.inert;return o.createElement(o.Fragment,null,C?o.createElement(c,{styles:Ut(a)}):null,h?o.createElement(Pt,{gapMode:e.gapMode}):null)}function Ht(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const Kt=dt(be,jt);var $t=o.forwardRef(function(e,t){return o.createElement($,P({},e,{ref:t,sideCar:Kt}))});$t.classNames=$.classNames;var Vt=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},L=new WeakMap,x=new WeakMap,W={},J=0,Ne=function(e){return e&&(e.host||Ne(e.parentNode))},Xt=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Ne(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},Yt=function(e,t,n,r){var a=Xt(t,Array.isArray(e)?e:[e]);W[n]||(W[n]=new WeakMap);var c=W[n],l=[],i=new Set,p=new Set(a),u=function(v){!v||i.has(v)||(i.add(v),u(v.parentNode))};a.forEach(u);var d=function(v){!v||p.has(v)||Array.prototype.forEach.call(v.children,function(m){if(i.has(m))d(m);else try{var h=m.getAttribute(r),C=h!==null&&h!=="false",s=(L.get(m)||0)+1,f=(c.get(m)||0)+1;L.set(m,s),c.set(m,f),l.push(m),s===1&&C&&x.set(m,!0),f===1&&m.setAttribute(n,"true"),C||m.setAttribute(r,"true")}catch(y){console.error("aria-hidden: cannot operate on ",m,y)}})};return d(t),i.clear(),J++,function(){l.forEach(function(v){var m=L.get(v)-1,h=c.get(v)-1;L.set(v,m),c.set(v,h),m||(x.has(v)||v.removeAttribute(r),x.delete(v)),h||v.removeAttribute(n)}),J--,J||(L=new WeakMap,L=new WeakMap,x=new WeakMap,W={})}},Jt=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=Vt(e);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live]"))),Yt(r,a,n,"aria-hidden")):function(){return null}};export{We as D,Ke as F,Je as P,$t as R,Ee as _,Qt as a,qe as b,lt as c,P as d,nt as e,dt as f,Jt as h,Lt as s,qt as u};
