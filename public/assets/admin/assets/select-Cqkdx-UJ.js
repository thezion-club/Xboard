import{r as o,v as L,j as r,M as Pe,z as mt,a as G}from"./index-_xd8OyP8.js";import{c as ht,a as N,b as z,d as vt,u as be}from"./index-BwSRHYe4.js";import{m as gt,j as Re,A as xt,C as St,k as wt,u as yt,l as Ct}from"./sidelinks-DLs_k-Mk.js";import{h as It,a as Tt,R as bt,F as Nt,D as Pt,u as Ie,b as Rt}from"./index-CcyXqhZ9.js";import{P as j}from"./index-CX6PQ3zO.js";import{u as Et}from"./index-CRh0M8qI.js";import{V as _t}from"./index-kwEAqj-e.js";import{C as Ee,k as jt,c as Mt}from"./react-icons.esm-rZq2pt7A.js";function Ne(t,[n,e]){return Math.min(e,Math.max(n,t))}var At=[" ","Enter","ArrowUp","ArrowDown"],Ot=[" ","Enter"],se="Select",[ie,de,Dt]=gt(se),[te,So]=ht(se,[Dt,Re]),ue=Re(),[Lt,Y]=te(se),[kt,Vt]=te(se),_e=t=>{const{__scopeSelect:n,children:e,open:l,defaultOpen:a,onOpenChange:u,value:s,defaultValue:c,onValueChange:i,dir:f,name:g,autoComplete:w,disabled:P,required:T,form:C}=t,d=ue(n),[h,x]=o.useState(null),[m,v]=o.useState(null),[W,M]=o.useState(!1),oe=yt(f),[R=!1,O]=be({prop:l,defaultProp:a,onChange:u}),[U,X]=be({prop:s,defaultProp:c,onChange:i}),k=o.useRef(null),V=h?C||!!h.closest("form"):!0,[K,B]=o.useState(new Set),H=Array.from(K).map(E=>E.props.value).join(";");return r.jsx(Ct,{...d,children:r.jsxs(Lt,{required:T,scope:n,trigger:h,onTriggerChange:x,valueNode:m,onValueNodeChange:v,valueNodeHasChildren:W,onValueNodeHasChildrenChange:M,contentId:Ie(),value:U,onValueChange:X,open:R,onOpenChange:O,dir:oe,triggerPointerDownPosRef:k,disabled:P,children:[r.jsx(ie.Provider,{scope:n,children:r.jsx(kt,{scope:t.__scopeSelect,onNativeOptionAdd:o.useCallback(E=>{B(D=>new Set(D).add(E))},[]),onNativeOptionRemove:o.useCallback(E=>{B(D=>{const F=new Set(D);return F.delete(E),F})},[]),children:e})}),V?r.jsxs(ot,{"aria-hidden":!0,required:T,tabIndex:-1,name:g,autoComplete:w,value:U,onChange:E=>X(E.target.value),disabled:P,form:C,children:[U===void 0?r.jsx("option",{value:""}):null,Array.from(K)]},H):null]})})};_e.displayName=se;var je="SelectTrigger",Me=o.forwardRef((t,n)=>{const{__scopeSelect:e,disabled:l=!1,...a}=t,u=ue(e),s=Y(je,e),c=s.disabled||l,i=L(n,s.onTriggerChange),f=de(e),g=o.useRef("touch"),[w,P,T]=nt(d=>{const h=f().filter(v=>!v.disabled),x=h.find(v=>v.value===s.value),m=rt(h,d,x);m!==void 0&&s.onValueChange(m.value)}),C=d=>{c||(s.onOpenChange(!0),T()),d&&(s.triggerPointerDownPosRef.current={x:Math.round(d.pageX),y:Math.round(d.pageY)})};return r.jsx(xt,{asChild:!0,...u,children:r.jsx(j.button,{type:"button",role:"combobox","aria-controls":s.contentId,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed",disabled:c,"data-disabled":c?"":void 0,"data-placeholder":tt(s.value)?"":void 0,...a,ref:i,onClick:N(a.onClick,d=>{d.currentTarget.focus(),g.current!=="mouse"&&C(d)}),onPointerDown:N(a.onPointerDown,d=>{g.current=d.pointerType;const h=d.target;h.hasPointerCapture(d.pointerId)&&h.releasePointerCapture(d.pointerId),d.button===0&&d.ctrlKey===!1&&d.pointerType==="mouse"&&(C(d),d.preventDefault())}),onKeyDown:N(a.onKeyDown,d=>{const h=w.current!=="";!(d.ctrlKey||d.altKey||d.metaKey)&&d.key.length===1&&P(d.key),!(h&&d.key===" ")&&At.includes(d.key)&&(C(),d.preventDefault())})})})});Me.displayName=je;var Ae="SelectValue",Oe=o.forwardRef((t,n)=>{const{__scopeSelect:e,className:l,style:a,children:u,placeholder:s="",...c}=t,i=Y(Ae,e),{onValueNodeHasChildrenChange:f}=i,g=u!==void 0,w=L(n,i.onValueNodeChange);return z(()=>{f(g)},[f,g]),r.jsx(j.span,{...c,ref:w,style:{pointerEvents:"none"},children:tt(i.value)?r.jsx(r.Fragment,{children:s}):u})});Oe.displayName=Ae;var Bt="SelectIcon",De=o.forwardRef((t,n)=>{const{__scopeSelect:e,children:l,...a}=t;return r.jsx(j.span,{"aria-hidden":!0,...a,ref:n,children:l||"▼"})});De.displayName=Bt;var Ht="SelectPortal",Le=t=>r.jsx(Rt,{asChild:!0,...t});Le.displayName=Ht;var Q="SelectContent",ke=o.forwardRef((t,n)=>{const e=Y(Q,t.__scopeSelect),[l,a]=o.useState();if(z(()=>{a(new DocumentFragment)},[]),!e.open){const u=l;return u?Pe.createPortal(r.jsx(Ve,{scope:t.__scopeSelect,children:r.jsx(ie.Slot,{scope:t.__scopeSelect,children:r.jsx("div",{children:t.children})})}),u):null}return r.jsx(Be,{...t,ref:n})});ke.displayName=Q;var A=10,[Ve,q]=te(Q),Ft="SelectContentImpl",Be=o.forwardRef((t,n)=>{const{__scopeSelect:e,position:l="item-aligned",onCloseAutoFocus:a,onEscapeKeyDown:u,onPointerDownOutside:s,side:c,sideOffset:i,align:f,alignOffset:g,arrowPadding:w,collisionBoundary:P,collisionPadding:T,sticky:C,hideWhenDetached:d,avoidCollisions:h,...x}=t,m=Y(Q,e),[v,W]=o.useState(null),[M,oe]=o.useState(null),R=L(n,p=>W(p)),[O,U]=o.useState(null),[X,k]=o.useState(null),V=de(e),[K,B]=o.useState(!1),H=o.useRef(!1);o.useEffect(()=>{if(v)return It(v)},[v]),Tt();const E=o.useCallback(p=>{const[I,..._]=V().map(b=>b.ref.current),[S]=_.slice(-1),y=document.activeElement;for(const b of p)if(b===y||(b?.scrollIntoView({block:"nearest"}),b===I&&M&&(M.scrollTop=0),b===S&&M&&(M.scrollTop=M.scrollHeight),b?.focus(),document.activeElement!==y))return},[V,M]),D=o.useCallback(()=>E([O,v]),[E,O,v]);o.useEffect(()=>{K&&D()},[K,D]);const{onOpenChange:F,triggerPointerDownPosRef:$}=m;o.useEffect(()=>{if(v){let p={x:0,y:0};const I=S=>{p={x:Math.abs(Math.round(S.pageX)-($.current?.x??0)),y:Math.abs(Math.round(S.pageY)-($.current?.y??0))}},_=S=>{p.x<=10&&p.y<=10?S.preventDefault():v.contains(S.target)||F(!1),document.removeEventListener("pointermove",I),$.current=null};return $.current!==null&&(document.addEventListener("pointermove",I),document.addEventListener("pointerup",_,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",I),document.removeEventListener("pointerup",_,{capture:!0})}}},[v,F,$]),o.useEffect(()=>{const p=()=>F(!1);return window.addEventListener("blur",p),window.addEventListener("resize",p),()=>{window.removeEventListener("blur",p),window.removeEventListener("resize",p)}},[F]);const[pe,ae]=nt(p=>{const I=V().filter(y=>!y.disabled),_=I.find(y=>y.ref.current===document.activeElement),S=rt(I,p,_);S&&setTimeout(()=>S.ref.current.focus())}),fe=o.useCallback((p,I,_)=>{const S=!H.current&&!_;(m.value!==void 0&&m.value===I||S)&&(U(p),S&&(H.current=!0))},[m.value]),me=o.useCallback(()=>v?.focus(),[v]),ee=o.useCallback((p,I,_)=>{const S=!H.current&&!_;(m.value!==void 0&&m.value===I||S)&&k(p)},[m.value]),le=l==="popper"?xe:He,ne=le===xe?{side:c,sideOffset:i,align:f,alignOffset:g,arrowPadding:w,collisionBoundary:P,collisionPadding:T,sticky:C,hideWhenDetached:d,avoidCollisions:h}:{};return r.jsx(Ve,{scope:e,content:v,viewport:M,onViewportChange:oe,itemRefCallback:fe,selectedItem:O,onItemLeave:me,itemTextRefCallback:ee,focusSelectedItem:D,selectedItemText:X,position:l,isPositioned:K,searchRef:pe,children:r.jsx(bt,{as:mt,allowPinchZoom:!0,children:r.jsx(Nt,{asChild:!0,trapped:m.open,onMountAutoFocus:p=>{p.preventDefault()},onUnmountAutoFocus:N(a,p=>{m.trigger?.focus({preventScroll:!0}),p.preventDefault()}),children:r.jsx(Pt,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:u,onPointerDownOutside:s,onFocusOutside:p=>p.preventDefault(),onDismiss:()=>m.onOpenChange(!1),children:r.jsx(le,{role:"listbox",id:m.contentId,"data-state":m.open?"open":"closed",dir:m.dir,onContextMenu:p=>p.preventDefault(),...x,...ne,onPlaced:()=>B(!0),ref:R,style:{display:"flex",flexDirection:"column",outline:"none",...x.style},onKeyDown:N(x.onKeyDown,p=>{const I=p.ctrlKey||p.altKey||p.metaKey;if(p.key==="Tab"&&p.preventDefault(),!I&&p.key.length===1&&ae(p.key),["ArrowUp","ArrowDown","Home","End"].includes(p.key)){let S=V().filter(y=>!y.disabled).map(y=>y.ref.current);if(["ArrowUp","End"].includes(p.key)&&(S=S.slice().reverse()),["ArrowUp","ArrowDown"].includes(p.key)){const y=p.target,b=S.indexOf(y);S=S.slice(b+1)}setTimeout(()=>E(S)),p.preventDefault()}})})})})})})});Be.displayName=Ft;var Wt="SelectItemAlignedPosition",He=o.forwardRef((t,n)=>{const{__scopeSelect:e,onPlaced:l,...a}=t,u=Y(Q,e),s=q(Q,e),[c,i]=o.useState(null),[f,g]=o.useState(null),w=L(n,R=>g(R)),P=de(e),T=o.useRef(!1),C=o.useRef(!0),{viewport:d,selectedItem:h,selectedItemText:x,focusSelectedItem:m}=s,v=o.useCallback(()=>{if(u.trigger&&u.valueNode&&c&&f&&d&&h&&x){const R=u.trigger.getBoundingClientRect(),O=f.getBoundingClientRect(),U=u.valueNode.getBoundingClientRect(),X=x.getBoundingClientRect();if(u.dir!=="rtl"){const y=X.left-O.left,b=U.left-y,Z=R.left-b,J=R.width+Z,he=Math.max(J,O.width),ve=window.innerWidth-A,ge=Ne(b,[A,Math.max(A,ve-he)]);c.style.minWidth=J+"px",c.style.left=ge+"px"}else{const y=O.right-X.right,b=window.innerWidth-U.right-y,Z=window.innerWidth-R.right-b,J=R.width+Z,he=Math.max(J,O.width),ve=window.innerWidth-A,ge=Ne(b,[A,Math.max(A,ve-he)]);c.style.minWidth=J+"px",c.style.right=ge+"px"}const k=P(),V=window.innerHeight-A*2,K=d.scrollHeight,B=window.getComputedStyle(f),H=parseInt(B.borderTopWidth,10),E=parseInt(B.paddingTop,10),D=parseInt(B.borderBottomWidth,10),F=parseInt(B.paddingBottom,10),$=H+E+K+F+D,pe=Math.min(h.offsetHeight*5,$),ae=window.getComputedStyle(d),fe=parseInt(ae.paddingTop,10),me=parseInt(ae.paddingBottom,10),ee=R.top+R.height/2-A,le=V-ee,ne=h.offsetHeight/2,p=h.offsetTop+ne,I=H+E+p,_=$-I;if(I<=ee){const y=k.length>0&&h===k[k.length-1].ref.current;c.style.bottom="0px";const b=f.clientHeight-d.offsetTop-d.offsetHeight,Z=Math.max(le,ne+(y?me:0)+b+D),J=I+Z;c.style.height=J+"px"}else{const y=k.length>0&&h===k[0].ref.current;c.style.top="0px";const Z=Math.max(ee,H+d.offsetTop+(y?fe:0)+ne)+_;c.style.height=Z+"px",d.scrollTop=I-ee+d.offsetTop}c.style.margin=`${A}px 0`,c.style.minHeight=pe+"px",c.style.maxHeight=V+"px",l?.(),requestAnimationFrame(()=>T.current=!0)}},[P,u.trigger,u.valueNode,c,f,d,h,x,u.dir,l]);z(()=>v(),[v]);const[W,M]=o.useState();z(()=>{f&&M(window.getComputedStyle(f).zIndex)},[f]);const oe=o.useCallback(R=>{R&&C.current===!0&&(v(),m?.(),C.current=!1)},[v,m]);return r.jsx(Kt,{scope:e,contentWrapper:c,shouldExpandOnScrollRef:T,onScrollButtonChange:oe,children:r.jsx("div",{ref:i,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:W},children:r.jsx(j.div,{...a,ref:w,style:{boxSizing:"border-box",maxHeight:"100%",...a.style}})})})});He.displayName=Wt;var Ut="SelectPopperPosition",xe=o.forwardRef((t,n)=>{const{__scopeSelect:e,align:l="start",collisionPadding:a=A,...u}=t,s=ue(e);return r.jsx(St,{...s,...u,ref:n,align:l,collisionPadding:a,style:{boxSizing:"border-box",...u.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});xe.displayName=Ut;var[Kt,Te]=te(Q,{}),Se="SelectViewport",Fe=o.forwardRef((t,n)=>{const{__scopeSelect:e,nonce:l,...a}=t,u=q(Se,e),s=Te(Se,e),c=L(n,u.onViewportChange),i=o.useRef(0);return r.jsxs(r.Fragment,{children:[r.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:l}),r.jsx(ie.Slot,{scope:e,children:r.jsx(j.div,{"data-radix-select-viewport":"",role:"presentation",...a,ref:c,style:{position:"relative",flex:1,overflow:"hidden auto",...a.style},onScroll:N(a.onScroll,f=>{const g=f.currentTarget,{contentWrapper:w,shouldExpandOnScrollRef:P}=s;if(P?.current&&w){const T=Math.abs(i.current-g.scrollTop);if(T>0){const C=window.innerHeight-A*2,d=parseFloat(w.style.minHeight),h=parseFloat(w.style.height),x=Math.max(d,h);if(x<C){const m=x+T,v=Math.min(C,m),W=m-v;w.style.height=v+"px",w.style.bottom==="0px"&&(g.scrollTop=W>0?W:0,w.style.justifyContent="flex-end")}}}i.current=g.scrollTop})})})]})});Fe.displayName=Se;var We="SelectGroup",[$t,Gt]=te(We),Ue=o.forwardRef((t,n)=>{const{__scopeSelect:e,...l}=t,a=Ie();return r.jsx($t,{scope:e,id:a,children:r.jsx(j.div,{role:"group","aria-labelledby":a,...l,ref:n})})});Ue.displayName=We;var Ke="SelectLabel",$e=o.forwardRef((t,n)=>{const{__scopeSelect:e,...l}=t,a=Gt(Ke,e);return r.jsx(j.div,{id:a.id,...l,ref:n})});$e.displayName=Ke;var ce="SelectItem",[zt,Ge]=te(ce),ze=o.forwardRef((t,n)=>{const{__scopeSelect:e,value:l,disabled:a=!1,textValue:u,...s}=t,c=Y(ce,e),i=q(ce,e),f=c.value===l,[g,w]=o.useState(u??""),[P,T]=o.useState(!1),C=L(n,m=>i.itemRefCallback?.(m,l,a)),d=Ie(),h=o.useRef("touch"),x=()=>{a||(c.onValueChange(l),c.onOpenChange(!1))};if(l==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return r.jsx(zt,{scope:e,value:l,disabled:a,textId:d,isSelected:f,onItemTextChange:o.useCallback(m=>{w(v=>v||(m?.textContent??"").trim())},[]),children:r.jsx(ie.ItemSlot,{scope:e,value:l,disabled:a,textValue:g,children:r.jsx(j.div,{role:"option","aria-labelledby":d,"data-highlighted":P?"":void 0,"aria-selected":f&&P,"data-state":f?"checked":"unchecked","aria-disabled":a||void 0,"data-disabled":a?"":void 0,tabIndex:a?void 0:-1,...s,ref:C,onFocus:N(s.onFocus,()=>T(!0)),onBlur:N(s.onBlur,()=>T(!1)),onClick:N(s.onClick,()=>{h.current!=="mouse"&&x()}),onPointerUp:N(s.onPointerUp,()=>{h.current==="mouse"&&x()}),onPointerDown:N(s.onPointerDown,m=>{h.current=m.pointerType}),onPointerMove:N(s.onPointerMove,m=>{h.current=m.pointerType,a?i.onItemLeave?.():h.current==="mouse"&&m.currentTarget.focus({preventScroll:!0})}),onPointerLeave:N(s.onPointerLeave,m=>{m.currentTarget===document.activeElement&&i.onItemLeave?.()}),onKeyDown:N(s.onKeyDown,m=>{i.searchRef?.current!==""&&m.key===" "||(Ot.includes(m.key)&&x(),m.key===" "&&m.preventDefault())})})})})});ze.displayName=ce;var re="SelectItemText",Ye=o.forwardRef((t,n)=>{const{__scopeSelect:e,className:l,style:a,...u}=t,s=Y(re,e),c=q(re,e),i=Ge(re,e),f=Vt(re,e),[g,w]=o.useState(null),P=L(n,x=>w(x),i.onItemTextChange,x=>c.itemTextRefCallback?.(x,i.value,i.disabled)),T=g?.textContent,C=o.useMemo(()=>r.jsx("option",{value:i.value,disabled:i.disabled,children:T},i.value),[i.disabled,i.value,T]),{onNativeOptionAdd:d,onNativeOptionRemove:h}=f;return z(()=>(d(C),()=>h(C)),[d,h,C]),r.jsxs(r.Fragment,{children:[r.jsx(j.span,{id:i.textId,...u,ref:P}),i.isSelected&&s.valueNode&&!s.valueNodeHasChildren?Pe.createPortal(u.children,s.valueNode):null]})});Ye.displayName=re;var qe="SelectItemIndicator",Xe=o.forwardRef((t,n)=>{const{__scopeSelect:e,...l}=t;return Ge(qe,e).isSelected?r.jsx(j.span,{"aria-hidden":!0,...l,ref:n}):null});Xe.displayName=qe;var we="SelectScrollUpButton",Ze=o.forwardRef((t,n)=>{const e=q(we,t.__scopeSelect),l=Te(we,t.__scopeSelect),[a,u]=o.useState(!1),s=L(n,l.onScrollButtonChange);return z(()=>{if(e.viewport&&e.isPositioned){let c=function(){const f=i.scrollTop>0;u(f)};const i=e.viewport;return c(),i.addEventListener("scroll",c),()=>i.removeEventListener("scroll",c)}},[e.viewport,e.isPositioned]),a?r.jsx(Qe,{...t,ref:s,onAutoScroll:()=>{const{viewport:c,selectedItem:i}=e;c&&i&&(c.scrollTop=c.scrollTop-i.offsetHeight)}}):null});Ze.displayName=we;var ye="SelectScrollDownButton",Je=o.forwardRef((t,n)=>{const e=q(ye,t.__scopeSelect),l=Te(ye,t.__scopeSelect),[a,u]=o.useState(!1),s=L(n,l.onScrollButtonChange);return z(()=>{if(e.viewport&&e.isPositioned){let c=function(){const f=i.scrollHeight-i.clientHeight,g=Math.ceil(i.scrollTop)<f;u(g)};const i=e.viewport;return c(),i.addEventListener("scroll",c),()=>i.removeEventListener("scroll",c)}},[e.viewport,e.isPositioned]),a?r.jsx(Qe,{...t,ref:s,onAutoScroll:()=>{const{viewport:c,selectedItem:i}=e;c&&i&&(c.scrollTop=c.scrollTop+i.offsetHeight)}}):null});Je.displayName=ye;var Qe=o.forwardRef((t,n)=>{const{__scopeSelect:e,onAutoScroll:l,...a}=t,u=q("SelectScrollButton",e),s=o.useRef(null),c=de(e),i=o.useCallback(()=>{s.current!==null&&(window.clearInterval(s.current),s.current=null)},[]);return o.useEffect(()=>()=>i(),[i]),z(()=>{c().find(g=>g.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[c]),r.jsx(j.div,{"aria-hidden":!0,...a,ref:n,style:{flexShrink:0,...a.style},onPointerDown:N(a.onPointerDown,()=>{s.current===null&&(s.current=window.setInterval(l,50))}),onPointerMove:N(a.onPointerMove,()=>{u.onItemLeave?.(),s.current===null&&(s.current=window.setInterval(l,50))}),onPointerLeave:N(a.onPointerLeave,()=>{i()})})}),Yt="SelectSeparator",et=o.forwardRef((t,n)=>{const{__scopeSelect:e,...l}=t;return r.jsx(j.div,{"aria-hidden":!0,...l,ref:n})});et.displayName=Yt;var Ce="SelectArrow",qt=o.forwardRef((t,n)=>{const{__scopeSelect:e,...l}=t,a=ue(e),u=Y(Ce,e),s=q(Ce,e);return u.open&&s.position==="popper"?r.jsx(wt,{...a,...l,ref:n}):null});qt.displayName=Ce;function tt(t){return t===""||t===void 0}var ot=o.forwardRef((t,n)=>{const{value:e,...l}=t,a=o.useRef(null),u=L(n,a),s=Et(e);return o.useEffect(()=>{const c=a.current,i=window.HTMLSelectElement.prototype,g=Object.getOwnPropertyDescriptor(i,"value").set;if(s!==e&&g){const w=new Event("change",{bubbles:!0});g.call(c,e),c.dispatchEvent(w)}},[s,e]),r.jsx(_t,{asChild:!0,children:r.jsx("select",{...l,ref:u,defaultValue:e})})});ot.displayName="BubbleSelect";function nt(t){const n=vt(t),e=o.useRef(""),l=o.useRef(0),a=o.useCallback(s=>{const c=e.current+s;n(c),function i(f){e.current=f,window.clearTimeout(l.current),f!==""&&(l.current=window.setTimeout(()=>i(""),1e3))}(c)},[n]),u=o.useCallback(()=>{e.current="",window.clearTimeout(l.current)},[]);return o.useEffect(()=>()=>window.clearTimeout(l.current),[]),[e,a,u]}function rt(t,n,e){const a=n.length>1&&Array.from(n).every(f=>f===n[0])?n[0]:n,u=e?t.indexOf(e):-1;let s=Xt(t,Math.max(u,0));a.length===1&&(s=s.filter(f=>f!==e));const i=s.find(f=>f.textValue.toLowerCase().startsWith(a.toLowerCase()));return i!==e?i:void 0}function Xt(t,n){return t.map((e,l)=>t[(n+l)%t.length])}var Zt=_e,st=Me,Jt=Oe,Qt=De,eo=Le,at=ke,to=Fe,oo=Ue,lt=$e,ct=ze,no=Ye,ro=Xe,it=Ze,dt=Je,ut=et;const wo=Zt,yo=oo,Co=Jt,so=o.forwardRef(({className:t,children:n,...e},l)=>r.jsxs(st,{ref:l,className:G("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",t),...e,children:[n,r.jsx(Qt,{asChild:!0,children:r.jsx(Ee,{className:"h-4 w-4 opacity-50"})})]}));so.displayName=st.displayName;const pt=o.forwardRef(({className:t,...n},e)=>r.jsx(it,{ref:e,className:G("flex cursor-default items-center justify-center py-1",t),...n,children:r.jsx(jt,{className:"h-4 w-4"})}));pt.displayName=it.displayName;const ft=o.forwardRef(({className:t,...n},e)=>r.jsx(dt,{ref:e,className:G("flex cursor-default items-center justify-center py-1",t),...n,children:r.jsx(Ee,{className:"h-4 w-4"})}));ft.displayName=dt.displayName;const ao=o.forwardRef(({className:t,children:n,position:e="popper",...l},a)=>r.jsx(eo,{children:r.jsxs(at,{ref:a,className:G("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",t),position:e,...l,children:[r.jsx(pt,{}),r.jsx(to,{className:G("p-1",e==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:n}),r.jsx(ft,{})]})}));ao.displayName=at.displayName;const lo=o.forwardRef(({className:t,...n},e)=>r.jsx(lt,{ref:e,className:G("px-2 py-1.5 text-sm font-semibold",t),...n}));lo.displayName=lt.displayName;const co=o.forwardRef(({className:t,children:n,...e},l)=>r.jsxs(ct,{ref:l,className:G("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...e,children:[r.jsx("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:r.jsx(ro,{children:r.jsx(Mt,{className:"h-4 w-4"})})}),r.jsx(no,{children:n})]}));co.displayName=ct.displayName;const io=o.forwardRef(({className:t,...n},e)=>r.jsx(ut,{ref:e,className:G("-mx-1 my-1 h-px bg-muted",t),...n}));io.displayName=ut.displayName;export{wo as S,so as a,Co as b,ao as c,co as d,yo as e};
