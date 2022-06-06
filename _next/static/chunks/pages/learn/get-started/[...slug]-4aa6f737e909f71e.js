(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[507],{78:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn/get-started/[...slug]",function(){return t(7561)}])},7561:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return O},default:function(){return _}});var r=t(4051),i=t.n(r),o=t(5893),s=(t(7797),t(7294)),c=t(7011),l=t(1555),a=t(682),u=t(3977),d=t(5398),f=t(6828),h=t(9008),p=t(1722),m=t(3286),x=t(4245),g=t(5640);function j(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function y(e,n,t,r,i,o,s){try{var c=e[o](s),l=c.value}catch(a){return void t(a)}c.done?n(l):Promise.resolve(l).then(r,i)}function v(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function s(e){y(o,r,i,s,c,"next",e)}function c(e){y(o,r,i,s,c,"throw",e)}s(void 0)}))}}function b(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function w(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function N(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],s=!0,c=!1;try{for(t=t.call(e);!(s=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);s=!0);}catch(l){c=!0,i=l}finally{try{s||null==t.return||t.return()}finally{if(c)throw i}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return j(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(0,p.EG)("https://unpkg.com/shiki/");var O=!0;function _(e){var n=e.frontmatter,t=e.content,r=e.id,j=function(e,n){var t=N(s.useState([]),2),r=t[0],o=t[1];return s.useEffect((function(){function t(){return(t=v(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(0,p.FP)({theme:"nord",langs:["bash","ballerina","toml","yaml","sh","json","graphql","sql"]}).then((function(t){o(t.codeToHtml(e,n))}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e,n]),[r]};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(h.default,{children:[(0,o.jsx)("meta",{name:"description",content:n.description}),(0,o.jsx)("meta",{name:"keywords",content:n.keywords}),(0,o.jsx)("title",{children:n.title}),(0,o.jsx)("meta",{property:"og:type",content:"article"}),(0,o.jsx)("meta",{property:"og:title",content:"Ballerina - ".concat(n.title)}),(0,o.jsx)("meta",{property:"og:description",content:n.description}),(0,o.jsx)("meta",{property:"og:description",content:n.description}),(0,o.jsx)("meta",{property:"twitter:description",content:n.description}),(0,o.jsx)("meta",{property:"twitter:text:description",content:n.description})]}),(0,o.jsxs)(m.Z,{children:[(0,o.jsx)(l.Z,{sm:3,xxl:2,className:"leftNav d-none d-sm-block",children:(0,o.jsx)(x.Z,{launcher:"learn",id:r})}),(0,o.jsx)(l.Z,{xs:12,className:"d-block d-sm-none",children:"Mobile Left Nav"}),(0,o.jsx)(l.Z,{xs:12,sm:7,xxl:8,className:"mdContent",children:(0,o.jsxs)(a.Z,{children:[(0,o.jsxs)("div",{className:"topRow",children:[(0,o.jsx)(l.Z,{xs:11,children:(0,o.jsx)("h1",{children:n.title})}),(0,o.jsx)(l.Z,{xs:1,className:"gitIcon",children:(0,o.jsx)(d.Z,{src:"".concat(g.O,"/images/github.svg"),height:20,width:20,alt:"Edit in github"})})]}),(0,o.jsx)(c.D,{components:{code:function(e){e.node;var n=e.inline,t=e.className,r=e.children,i=w(e,["node","inline","className","children"]),s=/language-(\w+)/.exec(t||"");return!n&&s?(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:j(String(r).replace(/\n$/,""),s[1])}}):(0,o.jsx)("code",function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){b(e,n,t[n])}))}return e}({className:t},i,{children:r}))}},rehypePlugins:[f.Z],children:t}),(0,o.jsxs)("div",{className:"contentNav",children:[(0,o.jsxs)(l.Z,{xs:6,className:"prevLink",children:[(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"#20b6b0",className:"bi bi-chevron-left",viewBox:"0 0 16 16",children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"})})," \xa0",(0,o.jsx)("a",{href:"#",children:"Install Ballerina"})]}),(0,o.jsxs)(l.Z,{xs:6,className:"nextLink",children:[(0,o.jsx)("a",{href:"#",children:"Language basics"})," \xa0",(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"#20b6b0",className:"bi bi-chevron-right",viewBox:"0 0 16 16",children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"})})]})]})]})}),(0,o.jsxs)(l.Z,{sm:2,className:"pageToc d-none d-sm-block",children:[(0,o.jsx)("h6",{children:"On this page"}),(0,o.jsx)(u.ZP,{source:t,ordered:!1,headingTopOffset:150,declarative:!0})]})]})]})}},7797:function(){}},function(e){e.O(0,[410,602,876,722,982,774,888,179],(function(){return n=78,e(e.s=n);var n}));var n=e.O();_N_E=n}]);