"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5607],{41143:function(e){e.exports=function(e,n,t,r,o,i,s,a){if(!e){var c;if(void 0===n)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[t,r,o,i,s,a],u=0;(c=new Error(n.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},5607:function(e,n,t){t.d(n,{Z:function(){return A}});var r=t(94184),o=t.n(r),i=t(67294),s=t(15446),a=t(76792),c=t(16518);function l(e,n){return Array.isArray(e)?e.includes(n):e===n}const u=i.createContext({});u.displayName="AccordionContext";var d=u,f=t(85893);const p=i.forwardRef((({as:e="div",bsPrefix:n,className:t,children:r,eventKey:s,...u},p)=>{const{activeEventKey:v}=(0,i.useContext)(d);return n=(0,a.vE)(n,"accordion-collapse"),(0,f.jsx)(c.Z,{ref:p,in:l(v,s),...u,className:o()(t,n),children:(0,f.jsx)(e,{children:i.Children.only(r)})})}));p.displayName="AccordionCollapse";var v=p;const h=i.createContext({eventKey:""});h.displayName="AccordionItemContext";var m=h;const y=i.forwardRef((({as:e="div",bsPrefix:n,className:t,...r},s)=>{n=(0,a.vE)(n,"accordion-body");const{eventKey:c}=(0,i.useContext)(m);return(0,f.jsx)(v,{eventKey:c,children:(0,f.jsx)(e,{ref:s,...r,className:o()(t,n)})})}));y.displayName="AccordionBody";var x=y;const g=i.forwardRef((({as:e="button",bsPrefix:n,className:t,onClick:r,...s},c)=>{n=(0,a.vE)(n,"accordion-button");const{eventKey:u}=(0,i.useContext)(m),p=function(e,n){const{activeEventKey:t,onSelect:r,alwaysOpen:o}=(0,i.useContext)(d);return i=>{let s=e===t?null:e;o&&(s=Array.isArray(t)?t.includes(e)?t.filter((n=>n!==e)):[...t,e]:[e]),null==r||r(s,i),null==n||n(i)}}(u,r),{activeEventKey:v}=(0,i.useContext)(d);return"button"===e&&(s.type="button"),(0,f.jsx)(e,{ref:c,onClick:p,...s,"aria-expanded":u===v,className:o()(t,n,!l(v,u)&&"collapsed")})}));g.displayName="AccordionButton";var E=g;const N=i.forwardRef((({as:e="h2",bsPrefix:n,className:t,children:r,onClick:i,...s},c)=>(n=(0,a.vE)(n,"accordion-header"),(0,f.jsx)(e,{ref:c,...s,className:o()(t,n),children:(0,f.jsx)(E,{onClick:i,children:r})}))));N.displayName="AccordionHeader";var b=N;const w=i.forwardRef((({as:e="div",bsPrefix:n,className:t,eventKey:r,...s},c)=>{n=(0,a.vE)(n,"accordion-item");const l=(0,i.useMemo)((()=>({eventKey:r})),[r]);return(0,f.jsx)(m.Provider,{value:l,children:(0,f.jsx)(e,{ref:c,...s,className:o()(t,n)})})}));w.displayName="AccordionItem";var C=w;const j=i.forwardRef(((e,n)=>{const{as:t="div",activeKey:r,bsPrefix:c,className:l,onSelect:u,flush:p,alwaysOpen:v,...h}=(0,s.Ch)(e,{activeKey:"onSelect"}),m=(0,a.vE)(c,"accordion"),y=(0,i.useMemo)((()=>({activeEventKey:r,onSelect:u,alwaysOpen:v})),[r,u,v]);return(0,f.jsx)(d.Provider,{value:y,children:(0,f.jsx)(t,{ref:n,...h,className:o()(l,m,p&&`${m}-flush`)})})}));j.displayName="Accordion";var A=Object.assign(j,{Button:E,Collapse:v,Item:C,Header:b,Body:x})},16518:function(e,n,t){t.d(n,{Z:function(){return x}});var r=t(94184),o=t.n(r),i=t(91505),s=t(67294),a=t(25257),c=t(93825);var l=function(...e){return e.filter((e=>null!=e)).reduce(((e,n)=>{if("function"!==typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?n:function(...t){e.apply(this,t),n.apply(this,t)}}),null)},u=t(34509),d=t(32785),f=t(85893);const p={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function v(e,n){const t=n[`offset${e[0].toUpperCase()}${e.slice(1)}`],r=p[e];return t+parseInt((0,i.Z)(n,r[0]),10)+parseInt((0,i.Z)(n,r[1]),10)}const h={[a.Wj]:"collapse",[a.Ix]:"collapsing",[a.d0]:"collapsing",[a.cn]:"collapse show"},m={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:v},y=s.forwardRef((({onEnter:e,onEntering:n,onEntered:t,onExit:r,onExiting:i,className:a,children:p,dimension:m="height",getDimensionValue:y=v,...x},g)=>{const E="function"===typeof m?m():m,N=(0,s.useMemo)((()=>l((e=>{e.style[E]="0"}),e)),[E,e]),b=(0,s.useMemo)((()=>l((e=>{const n=`scroll${E[0].toUpperCase()}${E.slice(1)}`;e.style[E]=`${e[n]}px`}),n)),[E,n]),w=(0,s.useMemo)((()=>l((e=>{e.style[E]=null}),t)),[E,t]),C=(0,s.useMemo)((()=>l((e=>{e.style[E]=`${y(E,e)}px`,(0,u.Z)(e)}),r)),[r,y,E]),j=(0,s.useMemo)((()=>l((e=>{e.style[E]=null}),i)),[E,i]);return(0,f.jsx)(d.Z,{ref:g,addEndListener:c.Z,...x,"aria-expanded":x.role?x.in:null,onEnter:N,onEntering:b,onEntered:w,onExit:C,onExiting:j,childRef:p.ref,children:(e,n)=>s.cloneElement(p,{...n,className:o()(a,p.props.className,h[e],"width"===E&&"collapse-horizontal")})})}));y.defaultProps=m;var x=y},15446:function(e,n,t){function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},r.apply(this,arguments)}t.d(n,{Ch:function(){return l},$c:function(){return c}});var o=t(63366),i=t(67294);t(41143);function s(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function a(e){var n=function(e,n){if("object"!==typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===typeof n?n:String(n)}function c(e,n,t){var r=(0,i.useRef)(void 0!==e),o=(0,i.useState)(n),s=o[0],a=o[1],c=void 0!==e,l=r.current;return r.current=c,!c&&l&&s!==n&&a(n),[c?e:s,(0,i.useCallback)((function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];t&&t.apply(void 0,[e].concat(r)),a(e)}),[t])]}function l(e,n){return Object.keys(n).reduce((function(t,i){var l,u=t,d=u[s(i)],f=u[i],p=(0,o.Z)(u,[s(i),i].map(a)),v=n[i],h=c(f,d,e[v]),m=h[0],y=h[1];return r({},p,((l={})[i]=m,l[v]=y,l))}),e)}function u(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function d(e){this.setState(function(n){var t=this.constructor.getDerivedStateFromProps(e,n);return null!==t&&void 0!==t?t:null}.bind(this))}function f(e,n){try{var t=this.props,r=this.state;this.props=e,this.state=n,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(t,r)}finally{this.props=t,this.state=r}}u.__suppressDeprecationWarning=!0,d.__suppressDeprecationWarning=!0,f.__suppressDeprecationWarning=!0}}]);