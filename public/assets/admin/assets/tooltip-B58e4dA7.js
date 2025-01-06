import{r as s,v as M,j as f,y as V,a as Y}from"./index-_xd8OyP8.js";import{c as q,a as C,u as X}from"./index-BwSRHYe4.js";import{P as K,D as W,u as J}from"./index-CcyXqhZ9.js";import{j as N,A as Q,C as Z,k as ee,l as te}from"./sidelinks-DLs_k-Mk.js";import{P as oe}from"./index-CX6PQ3zO.js";import{R as re}from"./index-kwEAqj-e.js";var[R,De]=q("Tooltip",[N]),O=N(),H="TooltipProvider",ne=700,A="tooltip.open",[se,k]=R(H),S=t=>{const{__scopeTooltip:o,delayDuration:e=ne,skipDelayDuration:r=300,disableHoverableContent:n=!1,children:l}=t,[i,v]=s.useState(!0),a=s.useRef(!1),u=s.useRef(0);return s.useEffect(()=>{const c=u.current;return()=>window.clearTimeout(c)},[]),f.jsx(se,{scope:o,isOpenDelayed:i,delayDuration:e,onOpen:s.useCallback(()=>{window.clearTimeout(u.current),v(!1)},[]),onClose:s.useCallback(()=>{window.clearTimeout(u.current),u.current=window.setTimeout(()=>v(!0),r)},[r]),isPointerInTransitRef:a,onPointerInTransitChange:s.useCallback(c=>{a.current=c},[]),disableHoverableContent:n,children:l})};S.displayName=H;var _="Tooltip",[ae,D]=R(_),G=t=>{const{__scopeTooltip:o,children:e,open:r,defaultOpen:n=!1,onOpenChange:l,disableHoverableContent:i,delayDuration:v}=t,a=k(_,t.__scopeTooltip),u=O(o),[c,p]=s.useState(null),h=J(),d=s.useRef(0),x=i??a.disableHoverableContent,T=v??a.delayDuration,m=s.useRef(!1),[g=!1,y]=X({prop:r,defaultProp:n,onChange:I=>{I?(a.onOpen(),document.dispatchEvent(new CustomEvent(A))):a.onClose(),l?.(I)}}),w=s.useMemo(()=>g?m.current?"delayed-open":"instant-open":"closed",[g]),E=s.useCallback(()=>{window.clearTimeout(d.current),d.current=0,m.current=!1,y(!0)},[y]),P=s.useCallback(()=>{window.clearTimeout(d.current),d.current=0,y(!1)},[y]),j=s.useCallback(()=>{window.clearTimeout(d.current),d.current=window.setTimeout(()=>{m.current=!0,y(!0),d.current=0},T)},[T,y]);return s.useEffect(()=>()=>{d.current&&(window.clearTimeout(d.current),d.current=0)},[]),f.jsx(te,{...u,children:f.jsx(ae,{scope:o,contentId:h,open:g,stateAttribute:w,trigger:c,onTriggerChange:p,onTriggerEnter:s.useCallback(()=>{a.isOpenDelayed?j():E()},[a.isOpenDelayed,j,E]),onTriggerLeave:s.useCallback(()=>{x?P():(window.clearTimeout(d.current),d.current=0)},[P,x]),onOpen:E,onClose:P,disableHoverableContent:x,children:e})})};G.displayName=_;var L="TooltipTrigger",F=s.forwardRef((t,o)=>{const{__scopeTooltip:e,...r}=t,n=D(L,e),l=k(L,e),i=O(e),v=s.useRef(null),a=M(o,v,n.onTriggerChange),u=s.useRef(!1),c=s.useRef(!1),p=s.useCallback(()=>u.current=!1,[]);return s.useEffect(()=>()=>document.removeEventListener("pointerup",p),[p]),f.jsx(Q,{asChild:!0,...i,children:f.jsx(oe.button,{"aria-describedby":n.open?n.contentId:void 0,"data-state":n.stateAttribute,...r,ref:a,onPointerMove:C(t.onPointerMove,h=>{h.pointerType!=="touch"&&!c.current&&!l.isPointerInTransitRef.current&&(n.onTriggerEnter(),c.current=!0)}),onPointerLeave:C(t.onPointerLeave,()=>{n.onTriggerLeave(),c.current=!1}),onPointerDown:C(t.onPointerDown,()=>{u.current=!0,document.addEventListener("pointerup",p,{once:!0})}),onFocus:C(t.onFocus,()=>{u.current||n.onOpen()}),onBlur:C(t.onBlur,n.onClose),onClick:C(t.onClick,n.onClose)})})});F.displayName=L;var ie="TooltipPortal",[Ae,le]=R(ie,{forceMount:void 0}),b="TooltipContent",B=s.forwardRef((t,o)=>{const e=le(b,t.__scopeTooltip),{forceMount:r=e.forceMount,side:n="top",...l}=t,i=D(b,t.__scopeTooltip);return f.jsx(K,{present:r||i.open,children:i.disableHoverableContent?f.jsx($,{side:n,...l,ref:o}):f.jsx(ce,{side:n,...l,ref:o})})}),ce=s.forwardRef((t,o)=>{const e=D(b,t.__scopeTooltip),r=k(b,t.__scopeTooltip),n=s.useRef(null),l=M(o,n),[i,v]=s.useState(null),{trigger:a,onClose:u}=e,c=n.current,{onPointerInTransitChange:p}=r,h=s.useCallback(()=>{v(null),p(!1)},[p]),d=s.useCallback((x,T)=>{const m=x.currentTarget,g={x:x.clientX,y:x.clientY},y=fe(g,m.getBoundingClientRect()),w=ve(g,y),E=xe(T.getBoundingClientRect()),P=me([...w,...E]);v(P),p(!0)},[p]);return s.useEffect(()=>()=>h(),[h]),s.useEffect(()=>{if(a&&c){const x=m=>d(m,c),T=m=>d(m,a);return a.addEventListener("pointerleave",x),c.addEventListener("pointerleave",T),()=>{a.removeEventListener("pointerleave",x),c.removeEventListener("pointerleave",T)}}},[a,c,d,h]),s.useEffect(()=>{if(i){const x=T=>{const m=T.target,g={x:T.clientX,y:T.clientY},y=a?.contains(m)||c?.contains(m),w=!he(g,i);y?h():w&&(h(),u())};return document.addEventListener("pointermove",x),()=>document.removeEventListener("pointermove",x)}},[a,c,i,u,h]),f.jsx($,{...t,ref:l})}),[ue,de]=R(_,{isInside:!1}),$=s.forwardRef((t,o)=>{const{__scopeTooltip:e,children:r,"aria-label":n,onEscapeKeyDown:l,onPointerDownOutside:i,...v}=t,a=D(b,e),u=O(e),{onClose:c}=a;return s.useEffect(()=>(document.addEventListener(A,c),()=>document.removeEventListener(A,c)),[c]),s.useEffect(()=>{if(a.trigger){const p=h=>{h.target?.contains(a.trigger)&&c()};return window.addEventListener("scroll",p,{capture:!0}),()=>window.removeEventListener("scroll",p,{capture:!0})}},[a.trigger,c]),f.jsx(W,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:l,onPointerDownOutside:i,onFocusOutside:p=>p.preventDefault(),onDismiss:c,children:f.jsxs(Z,{"data-state":a.stateAttribute,...u,...v,ref:o,style:{...v.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[f.jsx(V,{children:r}),f.jsx(ue,{scope:e,isInside:!0,children:f.jsx(re,{id:a.contentId,role:"tooltip",children:n||r})})]})})});B.displayName=b;var z="TooltipArrow",pe=s.forwardRef((t,o)=>{const{__scopeTooltip:e,...r}=t,n=O(e);return de(z,e).isInside?null:f.jsx(ee,{...n,...r,ref:o})});pe.displayName=z;function fe(t,o){const e=Math.abs(o.top-t.y),r=Math.abs(o.bottom-t.y),n=Math.abs(o.right-t.x),l=Math.abs(o.left-t.x);switch(Math.min(e,r,n,l)){case l:return"left";case n:return"right";case e:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function ve(t,o,e=5){const r=[];switch(o){case"top":r.push({x:t.x-e,y:t.y+e},{x:t.x+e,y:t.y+e});break;case"bottom":r.push({x:t.x-e,y:t.y-e},{x:t.x+e,y:t.y-e});break;case"left":r.push({x:t.x+e,y:t.y-e},{x:t.x+e,y:t.y+e});break;case"right":r.push({x:t.x-e,y:t.y-e},{x:t.x-e,y:t.y+e});break}return r}function xe(t){const{top:o,right:e,bottom:r,left:n}=t;return[{x:n,y:o},{x:e,y:o},{x:e,y:r},{x:n,y:r}]}function he(t,o){const{x:e,y:r}=t;let n=!1;for(let l=0,i=o.length-1;l<o.length;i=l++){const v=o[l].x,a=o[l].y,u=o[i].x,c=o[i].y;a>r!=c>r&&e<(u-v)*(r-a)/(c-a)+v&&(n=!n)}return n}function me(t){const o=t.slice();return o.sort((e,r)=>e.x<r.x?-1:e.x>r.x?1:e.y<r.y?-1:e.y>r.y?1:0),Te(o)}function Te(t){if(t.length<=1)return t.slice();const o=[];for(let r=0;r<t.length;r++){const n=t[r];for(;o.length>=2;){const l=o[o.length-1],i=o[o.length-2];if((l.x-i.x)*(n.y-i.y)>=(l.y-i.y)*(n.x-i.x))o.pop();else break}o.push(n)}o.pop();const e=[];for(let r=t.length-1;r>=0;r--){const n=t[r];for(;e.length>=2;){const l=e[e.length-1],i=e[e.length-2];if((l.x-i.x)*(n.y-i.y)>=(l.y-i.y)*(n.x-i.x))e.pop();else break}e.push(n)}return e.pop(),o.length===1&&e.length===1&&o[0].x===e[0].x&&o[0].y===e[0].y?o:o.concat(e)}var ye=S,ge=G,Ce=F,U=B;const Le=ye,ke=ge,je=Ce,be=s.forwardRef(({className:t,sideOffset:o=4,...e},r)=>f.jsx(U,{ref:r,sideOffset:o,className:Y("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...e}));be.displayName=U.displayName;export{Le as T,ke as a,je as b,be as c};
