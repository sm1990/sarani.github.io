(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[410],{71058:function(e,t,r){"use strict";t.Z=void 0;var n=l(r(5152)),o=l(r(25675)),i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(67294));function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function l(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(l){u=!0,o=l}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=function(e,t){var r=function(e){var t,r=e.filePath,n=(null===(t=r.split("\\").pop())||void 0===t?void 0:t.split("/").pop())||"",o=r.split(n).shift(),i=r.split(".").pop();return{path:o,filename:n.substring(0,n.lastIndexOf("."))||n,extension:i||""}}({filePath:e}),n=r.filename,o=r.path,i=r.extension;if(!["JPG","JPEG","WEBP","PNG","AVIF"].includes(i.toUpperCase()))return e;var a=i;["JPG","JPEG","PNG"].includes(i.toUpperCase())&&(a="WEBP");var u=o;return"/"!=(null===u||void 0===u?void 0:u.substr(-1))&&(u+="/"),"".concat(u,"nextImageExportOptimizer/").concat(n,"-opt-").concat(t,".").concat(a.toUpperCase())},p=function(e){var t=e.src,r=e.width;return d(t,r)},y=function(e){return e.src};function b(e){var t=e.src,r=e.priority,n=void 0!==r&&r,a=e.loading,l=e.lazyRoot,c=void 0===l?null:l,b=e.lazyBoundary,h=void 0===b?"200px":b,v=e.className,m=e.quality,g=e.width,w=e.height,O=e.objectFit,j=e.objectPosition,_=e.onLoadingComplete,S=e.placeholder,A=void 0===S?"blur":S,P=e.blurDataURL,E=s(e,["src","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),k=f(i.useState(!1),2),x=k[0],z=k[1],I=i.useMemo((function(){return P||d(t,10)}),[P,t]);return i.default.createElement(o.default,u({},E,g&&{width:g},w&&{height:w},n&&{priority:n},a&&{loading:a},c&&{lazyRoot:c},h&&{lazyBoundary:h},v&&{className:v},m&&{quality:m},O&&{objectFit:O},j&&{objectPosition:j},_&&{onLoadingComplete:_},A&&{placeholder:A},{loader:x?y:p,blurDataURL:I,src:t,onError:function(){z(!0)}}))}var h=n.default((function(){return Promise.resolve(b)}),{ssr:!1});t.Z=h},28045:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(l){u=!0,o=l}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(e,t)||u(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,r=e.sizes,n=e.unoptimized,u=void 0!==n&&n,l=e.priority,y=void 0!==l&&l,g=e.loading,S=e.lazyRoot,A=void 0===S?null:S,P=e.lazyBoundary,E=void 0===P?"200px":P,k=e.className,x=e.quality,z=e.width,I=e.height,C=e.objectFit,R=e.objectPosition,M=e.onLoadingComplete,L=e.loader,D=void 0===L?_:L,U=e.placeholder,N=void 0===U?"empty":U,T=e.blurDataURL,q=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),W=c.useRef(null),B=c.useContext(p.ImageConfigContext),V=c.useMemo((function(){var e=h||B||f.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),r=e.deviceSizes.sort((function(e,t){return e-t}));return b({},e,{allSizes:t,deviceSizes:r})}),[B]),G=q,F=r?"responsive":"intrinsic";"layout"in G&&(G.layout&&(F=G.layout),delete G.layout);var H="";if(function(e){return"object"===typeof e&&(w(e)||function(e){return void 0!==e.src}(e))}(t)){var J=w(t)?t.default:t;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(T=T||J.blurDataURL,H=J.src,(!F||"fill"!==F)&&(I=I||J.height,z=z||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}t="string"===typeof t?t:H;var K=j(z),$=j(I),Z=j(x),Q=!y&&("lazy"===g||"undefined"===typeof g);(t.startsWith("data:")||t.startsWith("blob:"))&&(u=!0,Q=!1);v.has(t)&&(Q=!1);0;var X,Y=i(d.useIntersection({rootRef:A,rootMargin:E,disabled:!Q}),2),ee=Y[0],te=Y[1],re=!Q||te,ne={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},oe={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ie=!1,ae={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:C,objectPosition:R},ue="blur"===N?{filter:"blur(20px)",backgroundSize:C||"cover",backgroundImage:'url("'.concat(T,'")'),backgroundPosition:R||"0% 0%"}:{};if("fill"===F)ne.display="block",ne.position="absolute",ne.top=0,ne.left=0,ne.bottom=0,ne.right=0;else if("undefined"!==typeof K&&"undefined"!==typeof $){var le=$/K,ce=isNaN(le)?"100%":"".concat(100*le,"%");"responsive"===F?(ne.display="block",ne.position="relative",ie=!0,oe.paddingTop=ce):"intrinsic"===F?(ne.display="inline-block",ne.position="relative",ne.maxWidth="100%",ie=!0,oe.maxWidth="100%",X="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(K,"%27%20height=%27").concat($,"%27/%3e")):"fixed"===F&&(ne.display="inline-block",ne.position="relative",ne.width=K,ne.height=$)}else 0;var se={src:m,srcSet:void 0,sizes:void 0};re&&(se=O({config:V,src:t,unoptimized:u,layout:F,width:K,quality:Z,sizes:r,loader:D}));var fe=t;0;var de;0;var pe=(o(de={},"imagesrcset",se.srcSet),o(de,"imagesizes",se.sizes),de),ye=c.default.useLayoutEffect,be=c.useRef(M);return c.useEffect((function(){be.current=M}),[M]),ye((function(){ee(W.current)}),[ee]),c.useEffect((function(){!function(e,t,r,n,o){var i=function(){var r=e.current;r&&(r.src!==m&&("decode"in r?r.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.current&&(v.add(t),"blur"===n&&(r.style.filter="",r.style.backgroundSize="",r.style.backgroundImage="",r.style.backgroundPosition=""),o.current)){var i=r.naturalWidth,a=r.naturalHeight;o.current({naturalWidth:i,naturalHeight:a})}})))};e.current&&(e.current.complete?i():e.current.onload=i)}(W,fe,0,N,be)}),[fe,F,N,re]),c.default.createElement("span",{style:ne},ie?c.default.createElement("span",{style:oe},X?c.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:X}):null):null,c.default.createElement("img",Object.assign({},G,se,{decoding:"async","data-nimg":F,className:k,ref:W,style:b({},ae,ue)})),Q&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},G,O({config:V,src:t,unoptimized:u,layout:F,width:K,quality:Z,sizes:r,loader:D}),{decoding:"async","data-nimg":F,style:ae,className:k,loading:g||"lazy"}))),y?c.default.createElement(s.default,null,c.default.createElement("link",Object.assign({key:"__nimg-"+se.src+se.srcSet+se.sizes,rel:"preload",as:"image",href:se.srcSet?void 0:se.src},pe))):null)};var l,c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(67294)),s=(l=r(5443))&&l.__esModule?l:{default:l},f=r(5809),d=r(57190),p=r(59977);function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e){for(var t=arguments,r=function(r){var n=null!=t[r]?t[r]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){y(e,t,n[t])}))},n=1;n<arguments.length;n++)r(n);return e}var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom"},v=new Set,m=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var g=new Map([["default",function(e){var t=e.config,r=e.src,n=e.width,o=e.quality;0;if(r.endsWith(".svg")&&!t.dangerouslyAllowSVG)return r;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,r=e.src,n=e.width,o=e.quality,i=new URL("".concat(t.path).concat(S(r))),a=i.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),o&&a.set("q",o.toString());return i.href}],["cloudinary",function(e){var t=e.config,r=e.src,n=e.width,o=e.quality,i=["f_auto","c_limit","w_"+n,"q_"+(o||"auto")].join(",")+"/";return"".concat(t.path).concat(i).concat(S(r))}],["akamai",function(e){var t=e.config,r=e.src,n=e.width;return"".concat(t.path).concat(S(r),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function w(e){return void 0!==e.default}function O(e){var t=e.config,r=e.src,n=e.unoptimized,o=e.layout,i=e.width,u=e.quality,l=e.sizes,c=e.loader;if(n)return{src:r,srcSet:void 0,sizes:void 0};var s=function(e,t,r,n){var o=e.deviceSizes,i=e.allSizes;if(n&&("fill"===r||"responsive"===r)){for(var u,l=/(^|\s)(1?\d?\d)vw/g,c=[];u=l.exec(n);u)c.push(parseInt(u[2]));if(c.length){var s,f=.01*(s=Math).min.apply(s,a(c));return{widths:i.filter((function(e){return e>=o[0]*f})),kind:"w"}}return{widths:i,kind:"w"}}return"number"!==typeof t||"fill"===r||"responsive"===r?{widths:o,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return i.find((function(t){return t>=e}))||i[i.length-1]})))),kind:"x"}}(t,i,o,l),f=s.widths,d=s.kind,p=f.length-1;return{sizes:l||"w"!==d?l:"100vw",srcSet:f.map((function(e,n){return"".concat(c({config:t,src:r,quality:u,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:c({config:t,src:r,quality:u,width:f[p]})}}function j(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function _(e){var t,r=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",n=g.get(r);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(r))}function S(e){return"/"===e[0]?e.slice(1):e}},48418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(l){u=!0,o=l}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var i,a=(i=r(67294))&&i.__esModule?i:{default:i},u=r(76273),l=r(90387),c=r(57190);var s={};function f(e,t,r,n){if(e&&u.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=l.useRouter(),i=a.default.useMemo((function(){var t=o(u.resolveHref(n,e.href,!0),2),r=t[0],i=t[1];return{href:r,as:e.as?u.resolveHref(n,e.as):i||r}}),[n,e.href,e.as]),d=i.href,p=i.as,y=e.children,b=e.replace,h=e.shallow,v=e.scroll,m=e.locale;"string"===typeof y&&(y=a.default.createElement("a",null,y));var g=(t=a.default.Children.only(y))&&"object"===typeof t&&t.ref,w=o(c.useIntersection({rootMargin:"200px"}),2),O=w[0],j=w[1],_=a.default.useCallback((function(e){O(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,O]);a.default.useEffect((function(){var e=j&&r&&u.isLocalURL(d),t="undefined"!==typeof m?m:n&&n.locale,o=s[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(n,d,p,{locale:t})}),[p,d,j,m,r,n]);var S={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,i,a,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:i,locale:l,scroll:a}))}(e,n,d,p,b,h,v,m)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var A="undefined"!==typeof m?m:n&&n.locale,P=n&&n.isLocaleDomain&&u.getDomainLocale(p,A,n&&n.locales,n&&n.domainLocales);S.href=P||u.addBasePath(u.addLocale(p,A,n&&n.defaultLocale))}return a.default.cloneElement(t,S)};t.default=d},57190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(l){u=!0,o=l}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!u,s=i.useRef(),f=o(i.useState(!1),2),d=f[0],p=f[1],y=o(i.useState(t?t.current:null),2),b=y[0],h=y[1],v=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=l.get(n):(t=l.get(r),c.push(r));if(t)return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(r,t={id:r,observer:i,elements:o}),t}(r),o=n.id,i=n.observer,a=n.elements;return a.set(e,t),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),l.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:b,rootMargin:r}))}),[n,b,r,d]);return i.useEffect((function(){if(!u&&!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),i.useEffect((function(){t&&h(t.current)}),[t]),[v,d]};var i=r(67294),a=r(9311),u="undefined"!==typeof IntersectionObserver;var l=new Map,c=[]},90638:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.noSSR=u,t.default=function(e,t){var r=i.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};a=e,l=Promise,(null!=l&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](a):a instanceof l)?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=o({},n,e));var a,l;var c=n=o({},n,t);if(c.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(c.suspense)return r(c);n.loadableGenerated&&delete(n=o({},n,n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,u(r,n);delete n.ssr}return r(n)};a(r(67294));var i=a(r(14302));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}},16319:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=((n=r(67294))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=o},14302:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,u=(a=r(67294))&&a.__esModule?a:{default:a},l=r(67161),c=r(16319);var s=[],f=[],d=!1;function p(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}var y=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,r,o;return t=e,(r=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;if(t.loading){if("number"===typeof r.delay)if(0===r.delay)this._state.pastDelay=!0;else{var n=this;this._delay=setTimeout((function(){n._update({pastDelay:!0})}),r.delay)}if("number"===typeof r.timeout){var o=this;this._timeout=setTimeout((function(){o._update({timedOut:!0})}),r.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&n(t.prototype,r),o&&n(t,o),e}();function b(e){return function(e,t){var r=function(){if(!o){var t=new y(e,n);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()},n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);n.suspense&&(n.lazy=u.default.lazy(n.loader));var o=null;if(!d&&!n.suspense){var a=n.webpack?n.webpack():n.modules;a&&f.push((function(e){var t=!0,n=!1,o=void 0;try{for(var i,u=a[Symbol.iterator]();!(t=(i=u.next()).done);t=!0){var l=i.value;if(-1!==e.indexOf(l))return r()}}catch(c){n=!0,o=c}finally{try{t||null==u.return||u.return()}finally{if(n)throw o}}}))}var s=n.suspense?function(e,t){return u.default.createElement(n.lazy,i({},e,{ref:t}))}:function(e,t){r();var i=u.default.useContext(c.LoadableContext),a=l.useSubscription(o);return u.default.useImperativeHandle(t,(function(){return{retry:o.retry}}),[]),i&&Array.isArray(n.modules)&&n.modules.forEach((function(e){i(e)})),u.default.useMemo((function(){return a.loading||a.error?u.default.createElement(n.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:o.retry}):a.loaded?u.default.createElement(function(e){return e&&e.__esModule?e.default:e}(a.loaded),e):null}),[e,a])};return s.preload=function(){return!n.suspense&&r()},s.displayName="LoadableComponent",u.default.forwardRef(s)}(p,e)}function h(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return h(e,t)}))}b.preloadAll=function(){return new Promise((function(e,t){h(s).then(e,t)}))},b.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return d=!0,t()};h(f,e).then(r,r)}))},window.__NEXT_PRELOADREADY=b.preloadReady;var v=b;t.default=v},5152:function(e,t,r){e.exports=r(90638)},9008:function(e,t,r){e.exports=r(5443)},25675:function(e,t,r){e.exports=r(28045)},41664:function(e,t,r){e.exports=r(48418)},68217:function(e,t,r){"use strict";var n=r(96086),o=r(67294);t.useSubscription=function(e){var t=e.getCurrentValue,r=e.subscribe,i=o.useState((function(){return{getCurrentValue:t,subscribe:r,value:t()}}));e=i[0];var a=i[1];return i=e.value,e.getCurrentValue===t&&e.subscribe===r||(i=t(),a({getCurrentValue:t,subscribe:r,value:i})),o.useDebugValue(i),o.useEffect((function(){function e(){if(!o){var e=t();a((function(o){return o.getCurrentValue!==t||o.subscribe!==r||o.value===e?o:n({},o,{value:e})}))}}var o=!1,i=r(e);return e(),function(){o=!0,i()}}),[t,r]),i}},67161:function(e,t,r){"use strict";e.exports=r(68217)}}]);