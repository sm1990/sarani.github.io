"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5843],{45843:function(e,t,n){n.d(t,{Z:function(){return je}});var r=n(4663),i=n(75364);const o={tokenize:function(e,t,n){return function(t){return e.consume(t),r};function r(t){return 87===t||119===t?(e.consume(t),o):n(t)}function o(t){return 87===t||119===t?(e.consume(t),l):n(t)}function l(t){return 46===t?(e.consume(t),c):n(t)}function c(e){return null===e||(0,i.Ch)(e)?n(e):t(e)}},partial:!0},l={tokenize:function(e,t,n){let r,o;return l;function l(t){return 38===t?e.check(s,a,c)(t):46===t||95===t?e.check(u,a,c)(t):null===t||(0,i.Av)(t)||(0,i.B8)(t)||45!==t&&(0,i.Xh)(t)?a(t):(e.consume(t),l)}function c(t){return 46===t?(o=r,r=void 0,e.consume(t),l):(95===t&&(r=!0),e.consume(t),l)}function a(e){return o||r?n(e):t(e)}},partial:!0},c={tokenize:function(e,t){let n=0;return r;function r(l){return 38===l?e.check(s,t,i)(l):(40===l&&n++,41===l?e.check(u,o,i)(l):k(l)?t(l):d(l)?e.check(u,t,i)(l):(e.consume(l),r))}function i(t){return e.consume(t),r}function o(e){return n--,n<0?t(e):i(e)}},partial:!0},u={tokenize:function(e,t,n){return function(t){return e.consume(t),r};function r(i){return d(i)?(e.consume(i),r):k(i)?t(i):n(i)}},partial:!0},s={tokenize:function(e,t,n){return function(t){return e.consume(t),r};function r(t){return(0,i.jv)(t)?(e.consume(t),r):59===t?(e.consume(t),o):n(t)}function o(e){return k(e)?t(e):n(e)}},partial:!0},a={tokenize:function(e,t,n){const r=this;return function(t){if(87!==t&&119!==t||!x(r.previous)||v(r.events))return n(t);return e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(o,e.attempt(l,e.attempt(c,i),n),n)(t)};function i(n){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(n)}},previous:x},f={tokenize:function(e,t,n){const r=this;return function(t){if(72!==t&&104!==t||!y(r.previous)||v(r.events))return n(t);return e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),e.consume(t),o};function o(t){return 84===t||116===t?(e.consume(t),u):n(t)}function u(t){return 84===t||116===t?(e.consume(t),s):n(t)}function s(t){return 80===t||112===t?(e.consume(t),a):n(t)}function a(t){return 83===t||115===t?(e.consume(t),f):f(t)}function f(t){return 58===t?(e.consume(t),h):n(t)}function h(t){return 47===t?(e.consume(t),p):n(t)}function p(t){return 47===t?(e.consume(t),g):n(t)}function g(t){return null===t||(0,i.Av)(t)||(0,i.B8)(t)||(0,i.Xh)(t)?n(t):e.attempt(l,e.attempt(c,m),n)(t)}function m(n){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(n)}},previous:y},h={tokenize:function(e,t,n){const r=this;let o,l;return function(t){if(!b(t)||!C(r.previous)||v(r.events))return n(t);return e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),c(t)};function c(t){return b(t)?(e.consume(t),c):64===t?(e.consume(t),s):n(t)}function s(t){return 46===t?e.check(u,p,a)(t):45===t||95===t?e.check(u,n,f)(t):(0,i.H$)(t)?(!l&&(0,i.pY)(t)&&(l=!0),e.consume(t),s):p(t)}function a(t){return e.consume(t),o=!0,l=void 0,s}function f(t){return e.consume(t),h}function h(t){return 46===t?e.check(u,n,a)(t):s(t)}function p(r){return o&&!l?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(r)):n(r)}},previous:C},p={},g={text:p};let m=48;for(;m<123;)p[m]=h,m++,58===m?m=65:91===m&&(m=97);function d(e){return 33===e||34===e||39===e||41===e||42===e||44===e||46===e||58===e||59===e||60===e||63===e||95===e||126===e}function k(e){return null===e||60===e||(0,i.z3)(e)}function b(e){return 43===e||45===e||46===e||95===e||(0,i.H$)(e)}function x(e){return null===e||40===e||42===e||95===e||126===e||(0,i.z3)(e)}function y(e){return null===e||!(0,i.jv)(e)}function C(e){return 47!==e&&y(e)}function v(e){let t=e.length,n=!1;for(;t--;){const r=e[t][1];if(("labelLink"===r.type||"labelImage"===r.type)&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}p[43]=h,p[45]=h,p[46]=h,p[95]=h,p[72]=[h,f],p[104]=[h,f],p[87]=[h,a],p[119]=[h,a];var w=n(23402),D=n(42761),F=n(11098);const z={tokenize:function(e,t,n){const r=this;return(0,D.f)(e,(function(e){const i=r.events[r.events.length-1];return i&&"gfmFootnoteDefinitionIndent"===i[1].type&&4===i[2].sliceSerialize(i[1],!0).length?t(e):n(e)}),"gfmFootnoteDefinitionIndent",5)},partial:!0};function A(e,t,n){const r=this;let i=r.events.length;const o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l;for(;i--;){const e=r.events[i][1];if("labelImage"===e.type){l=e;break}if("gfmFootnoteCall"===e.type||"labelLink"===e.type||"label"===e.type||"image"===e.type||"link"===e.type)break}return function(i){if(!l||!l._balanced)return n(i);const c=(0,F.d)(r.sliceSerialize({start:l.end,end:r.now()}));if(94!==c.charCodeAt(0)||!o.includes(c.slice(1)))return n(i);return e.enter("gfmFootnoteCallLabelMarker"),e.consume(i),e.exit("gfmFootnoteCallLabelMarker"),t(i)}}function L(e,t){let n,r=e.length;for(;r--;)if("labelImage"===e[r][1].type&&"enter"===e[r][0]){n=e[r][1];break}e[r+1][1].type="data",e[r+3][1].type="gfmFootnoteCallLabelMarker";const i={type:"gfmFootnoteCall",start:Object.assign({},e[r+3][1].start),end:Object.assign({},e[e.length-1][1].end)},o={type:"gfmFootnoteCallMarker",start:Object.assign({},e[r+3][1].end),end:Object.assign({},e[r+3][1].end)};o.end.column++,o.end.offset++,o.end._bufferIndex++;const l={type:"gfmFootnoteCallString",start:Object.assign({},o.end),end:Object.assign({},e[e.length-1][1].start)},c={type:"chunkString",contentType:"string",start:Object.assign({},l.start),end:Object.assign({},l.end)},u=[e[r+1],e[r+2],["enter",i,t],e[r+3],e[r+4],["enter",o,t],["exit",o,t],["enter",l,t],["enter",c,t],["exit",c,t],["exit",l,t],e[e.length-2],e[e.length-1],["exit",i,t]];return e.splice(r,e.length-r+1,...u),e}function S(e,t,n){const r=this,o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l,c=0;return function(t){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(t),e.exit("gfmFootnoteCallLabelMarker"),u};function u(t){return 94!==t?n(t):(e.enter("gfmFootnoteCallMarker"),e.consume(t),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",s)}function s(u){let f;return null===u||91===u||c++>999?n(u):93===u?l?(e.exit("chunkString"),f=e.exit("gfmFootnoteCallString"),o.includes((0,F.d)(r.sliceSerialize(f)))?function(n){return e.enter("gfmFootnoteCallLabelMarker"),e.consume(n),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t}(u):n(u)):n(u):(e.consume(u),(0,i.z3)(u)||(l=!0),92===u?a:s)}function a(t){return 91===t||92===t||93===t?(e.consume(t),c++,s):s(t)}}function T(e,t,n){const r=this,o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l,c,u=0;return function(t){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(t),e.exit("gfmFootnoteDefinitionLabelMarker"),s};function s(t){return 94===t?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(t),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),a):n(t)}function a(t){let o;return null===t||91===t||u>999?n(t):93===t?c?(o=e.exit("gfmFootnoteDefinitionLabelString"),l=(0,F.d)(r.sliceSerialize(o)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(t),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),p):n(t):(0,i.Ch)(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),u++,a):(e.enter("chunkString").contentType="string",f(t))}function f(t){return null===t||(0,i.Ch)(t)||91===t||93===t||u>999?(e.exit("chunkString"),a(t)):((0,i.z3)(t)||(c=!0),u++,e.consume(t),92===t?h:f)}function h(t){return 91===t||92===t||93===t?(e.consume(t),u++,f):f(t)}function p(t){return 58===t?(e.enter("definitionMarker"),e.consume(t),e.exit("definitionMarker"),(0,D.f)(e,g,"gfmFootnoteDefinitionWhitespace")):n(t)}function g(e){return o.includes(l)||o.push(l),t(e)}}function E(e,t,n){return e.check(w.w,t,e.attempt(z,t,n))}function j(e){e.exit("gfmFootnoteDefinition")}var M=n(21905),_=n(62987),I=n(63233);function O(e={}){let t=e.singleTilde;const n={tokenize:function(e,n,r){const i=this.previous,o=this.events;let l=0;return function(t){if(126===i&&"characterEscape"!==o[o.length-1][1].type)return r(t);return e.enter("strikethroughSequenceTemporary"),c(t)};function c(o){const u=(0,_.r)(i);if(126===o)return l>1?r(o):(e.consume(o),l++,c);if(l<2&&!t)return r(o);const s=e.exit("strikethroughSequenceTemporary"),a=(0,_.r)(o);return s._open=!a||2===a&&Boolean(u),s._close=!u||2===u&&Boolean(a),n(o)}},resolveAll:function(e,t){let n=-1;for(;++n<e.length;)if("enter"===e[n][0]&&"strikethroughSequenceTemporary"===e[n][1].type&&e[n][1]._close){let r=n;for(;r--;)if("exit"===e[r][0]&&"strikethroughSequenceTemporary"===e[r][1].type&&e[r][1]._open&&e[n][1].end.offset-e[n][1].start.offset===e[r][1].end.offset-e[r][1].start.offset){e[n][1].type="strikethroughSequence",e[r][1].type="strikethroughSequence";const i={type:"strikethrough",start:Object.assign({},e[r][1].start),end:Object.assign({},e[n][1].end)},o={type:"strikethroughText",start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},l=[["enter",i,t],["enter",e[r][1],t],["exit",e[r][1],t],["enter",o,t]];(0,M.d)(l,l.length,0,(0,I.C)(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),(0,M.d)(l,l.length,0,[["exit",o,t],["enter",e[n][1],t],["exit",e[n][1],t],["exit",i,t]]),(0,M.d)(e,r-1,n-r+3,l),n=r+l.length-2;break}}n=-1;for(;++n<e.length;)"strikethroughSequenceTemporary"===e[n][1].type&&(e[n][1].type="data");return e}};return null!==t&&void 0!==t||(t=!0),{text:{126:n},insideSpan:{null:[n]},attentionMarkers:{null:[126]}}}const R={flow:{null:{tokenize:function(e,t,n){const r=this,o=[];let l,c,u=0;return function(t){if(e.enter("table")._align=o,e.enter("tableHead"),e.enter("tableRow"),124===t)return s(t);return u++,e.enter("temporaryTableCellContent"),h(t)};function s(t){return e.enter("tableCellDivider"),e.consume(t),e.exit("tableCellDivider"),l=!0,a}function a(t){return null===t||(0,i.Ch)(t)?function(t){if(null===t)return n(t);e.exit("tableRow"),e.exit("tableHead");const i=r.interrupt;return r.interrupt=!0,e.attempt({tokenize:T,partial:!0},(function(t){return r.interrupt=i,e.enter("tableDelimiterRow"),g(t)}),(function(e){return r.interrupt=i,n(e)}))(t)}(t):(0,i.xz)(t)?(e.enter("whitespace"),e.consume(t),f):(l&&(l=void 0,u++),124===t?s(t):(e.enter("temporaryTableCellContent"),h(t)))}function f(t){return(0,i.xz)(t)?(e.consume(t),f):(e.exit("whitespace"),a(t))}function h(t){return null===t||124===t||(0,i.z3)(t)?(e.exit("temporaryTableCellContent"),a(t)):(e.consume(t),92===t?p:h)}function p(t){return 92===t||124===t?(e.consume(t),h):h(t)}function g(t){return null===t||(0,i.Ch)(t)?x(t):(0,i.xz)(t)?(e.enter("whitespace"),e.consume(t),m):45===t?(e.enter("tableDelimiterFiller"),e.consume(t),c=!0,o.push("none"),d):58===t?(e.enter("tableDelimiterAlignment"),e.consume(t),e.exit("tableDelimiterAlignment"),o.push("left"),k):124===t?(e.enter("tableCellDivider"),e.consume(t),e.exit("tableCellDivider"),g):n(t)}function m(t){return(0,i.xz)(t)?(e.consume(t),m):(e.exit("whitespace"),g(t))}function d(t){return 45===t?(e.consume(t),d):(e.exit("tableDelimiterFiller"),58===t?(e.enter("tableDelimiterAlignment"),e.consume(t),e.exit("tableDelimiterAlignment"),o[o.length-1]="left"===o[o.length-1]?"center":"right",b):g(t))}function k(t){return 45===t?(e.enter("tableDelimiterFiller"),e.consume(t),c=!0,d):n(t)}function b(t){return null===t||(0,i.Ch)(t)?x(t):(0,i.xz)(t)?(e.enter("whitespace"),e.consume(t),m):124===t?(e.enter("tableCellDivider"),e.consume(t),e.exit("tableCellDivider"),g):n(t)}function x(t){return e.exit("tableDelimiterRow"),c&&u===o.length?null===t?y(t):e.check(B,y,e.attempt({tokenize:T,partial:!0},(0,D.f)(e,C,"linePrefix",4),y))(t):n(t)}function y(n){return e.exit("table"),t(n)}function C(t){return e.enter("tableBody"),v(t)}function v(t){return e.enter("tableRow"),124===t?w(t):(e.enter("temporaryTableCellContent"),A(t))}function w(t){return e.enter("tableCellDivider"),e.consume(t),e.exit("tableCellDivider"),F}function F(t){return null===t||(0,i.Ch)(t)?function(t){if(e.exit("tableRow"),null===t)return S(t);return e.check(B,S,e.attempt({tokenize:T,partial:!0},(0,D.f)(e,v,"linePrefix",4),S))(t)}(t):(0,i.xz)(t)?(e.enter("whitespace"),e.consume(t),z):124===t?w(t):(e.enter("temporaryTableCellContent"),A(t))}function z(t){return(0,i.xz)(t)?(e.consume(t),z):(e.exit("whitespace"),F(t))}function A(t){return null===t||124===t||(0,i.z3)(t)?(e.exit("temporaryTableCellContent"),F(t)):(e.consume(t),92===t?L:A)}function L(t){return 92===t||124===t?(e.consume(t),A):A(t)}function S(t){return e.exit("tableBody"),y(t)}function T(e,t,n){return function(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),(0,D.f)(e,o,"linePrefix")};function o(o){if(r.parser.lazy[r.now().line]||null===o||(0,i.Ch)(o))return n(o);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&"linePrefix"===l[1].type&&l[2].sliceSerialize(l[1],!0).length>=4?n(o):(r._gfmTableDynamicInterruptHack=!0,e.check(r.parser.constructs.flow,(function(e){return r._gfmTableDynamicInterruptHack=!1,n(e)}),(function(e){return r._gfmTableDynamicInterruptHack=!1,t(e)}))(o))}}},resolve:function(e,t){let n,r,i,o,l,c,u,s=-1;for(;++s<e.length;){const a=e[s][1];if(i&&("temporaryTableCellContent"===a.type&&(o=o||s,l=s),("tableCellDivider"===a.type||"tableRow"===a.type)&&l)){const n={type:"tableContent",start:e[o][1].start,end:e[l][1].end},r={type:"chunkText",start:n.start,end:n.end,contentType:"text"};e.splice(o,l-o+1,["enter",n,t],["enter",r,t],["exit",r,t],["exit",n,t]),s-=l-o-3,o=void 0,l=void 0}if("exit"===e[s][0]&&void 0!==c&&c+(u?0:1)<s&&("tableCellDivider"===a.type||"tableRow"===a.type&&(c+3<s||"whitespace"!==e[c][1].type))){const i={type:r?"tableDelimiter":n?"tableHeader":"tableData",start:e[c][1].start,end:e[s][1].end};e.splice(s+("tableCellDivider"===a.type?1:0),0,["exit",i,t]),e.splice(c,0,["enter",i,t]),s+=2,c=s+1,u=!0}"tableRow"===a.type&&(i="enter"===e[s][0],i&&(c=s+1,u=!1)),"tableDelimiterRow"===a.type&&(r="enter"===e[s][0],r&&(c=s+1,u=!1)),"tableHead"===a.type&&(n="enter"===e[s][0])}return e}}}},B={tokenize:function(e,t,n){let r=0;return function(t){return e.enter("check"),e.consume(t),o};function o(l){return-1===l||32===l?(e.consume(l),r++,4===r?t:o):null===l||(0,i.z3)(l)?t(l):n(l)}},partial:!0};const H={tokenize:function(e,t,n){const r=this;return function(t){if(null!==r.previous||!r._gfmTasklistFirstContentOfListItem)return n(t);return e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(t),e.exit("taskListCheckMarker"),o};function o(t){return(0,i.z3)(t)?(e.enter("taskListCheckValueUnchecked"),e.consume(t),e.exit("taskListCheckValueUnchecked"),l):88===t||120===t?(e.enter("taskListCheckValueChecked"),e.consume(t),e.exit("taskListCheckValueChecked"),l):n(t)}function l(r){return 93===r?(e.enter("taskListCheckMarker"),e.consume(r),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),e.check({tokenize:P},t,n)):n(r)}}},$={text:{91:H}};function P(e,t,n){const r=this;return(0,D.f)(e,(function(e){const o=r.events[r.events.length-1];return(o&&"whitespace"===o[1].type||(0,i.Ch)(e))&&null!==e?t(e):n(e)}),"whitespace")}function W(e,t){const n=String(e);if("string"!==typeof t)throw new TypeError("Expected character");let r=0,i=n.indexOf(t);for(;-1!==i;)r++,i=n.indexOf(t,i+t.length);return r}var q=n(55765),V=n(19645);const U={}.hasOwnProperty,X=function(e,t,n,r){let i,o;"string"===typeof t||t instanceof RegExp?(o=[[t,n]],i=r):(o=t,i=n),i||(i={});const l=(0,V.O)(i.ignore||[]),c=function(e){const t=[];if("object"!==typeof e)throw new TypeError("Expected array or object as schema");if(Array.isArray(e)){let n=-1;for(;++n<e.length;)t.push([Z(e[n][0]),N(e[n][1])])}else{let n;for(n in e)U.call(e,n)&&t.push([Z(n),N(e[n])])}return t}(o);let u=-1;for(;++u<c.length;)(0,q.S4)(e,"text",s);return e;function s(e,t){let n,r=-1;for(;++r<t.length;){const e=t[r];if(l(e,n?n.children.indexOf(e):void 0,n))return;n=e}if(n)return function(e,t){const n=t[t.length-1],r=c[u][0],i=c[u][1];let o=0;const l=n.children.indexOf(e);let s,a=[];r.lastIndex=0;let f=r.exec(e.value);for(;f;){s=f.index;const n={index:f.index,input:f.input,stack:[...t,e]};let l=i(...f,n);if("string"===typeof l&&(l=l.length>0?{type:"text",value:l}:void 0),!1===l?s=void 0:(o!==s&&a.push({type:"text",value:e.value.slice(o,s)}),Array.isArray(l)?a.push(...l):l&&a.push(l),o=s+f[0].length),!r.global)break;f=r.exec(e.value)}void 0===s?a=[e]:(o<e.value.length&&a.push({type:"text",value:e.value.slice(o)}),n.children.splice(l,1,...a));return l+a.length}(e,t)}};function Z(e){return"string"===typeof e?new RegExp(function(e){if("string"!==typeof e)throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}(e),"g"):e}function N(e){return"function"===typeof e?e:()=>e}const Y="phrasing",G=["autolink","link","image","label"],J={transforms:[function(e){X(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,ee],[/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g,te]],{ignore:["link","linkReference"]})}],enter:{literalAutolink:function(e){this.enter({type:"link",title:null,url:"",children:[]},e)},literalAutolinkEmail:Q,literalAutolinkHttp:Q,literalAutolinkWww:Q},exit:{literalAutolink:function(e){this.exit(e)},literalAutolinkEmail:function(e){this.config.exit.autolinkEmail.call(this,e)},literalAutolinkHttp:function(e){this.config.exit.autolinkProtocol.call(this,e)},literalAutolinkWww:function(e){this.config.exit.data.call(this,e);this.stack[this.stack.length-1].url="http://"+this.sliceSerialize(e)}}},K={unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Y,notInConstruct:G},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Y,notInConstruct:G},{character:":",before:"[ps]",after:"\\/",inConstruct:Y,notInConstruct:G}]};function Q(e){this.config.enter.autolinkProtocol.call(this,e)}function ee(e,t,n,r,i){let o="";if(!ne(i))return!1;if(/^w/i.test(t)&&(n=t+n,t="",o="http://"),!function(e){const t=e.split(".");if(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))return!1;return!0}(n))return!1;const l=function(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);let n,r,i,o;if(t)for(e=e.slice(0,t.index),o=t[0],n=o.indexOf(")"),r=W(e,"("),i=W(e,")");-1!==n&&r>i;)e+=o.slice(0,n+1),o=o.slice(n+1),n=o.indexOf(")"),i++;return[e,o]}(n+r);if(!l[0])return!1;const c={type:"link",title:null,url:o+t+l[0],children:[{type:"text",value:t+l[0]}]};return l[1]?[c,{type:"text",value:l[1]}]:c}function te(e,t,n,r){return!(!ne(r,!0)||/[_-\d]$/.test(n))&&{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function ne(e,t){const n=e.input.charCodeAt(e.index-1);return(0===e.index||(0,i.B8)(n)||(0,i.Xh)(n))&&(!t||47!==n)}var re=n(47881);function ie(e){return e.label||!e.identifier?e.label||"":(0,re.v)(e.identifier)}function oe(e){const t=e||{},n=t.now||{};let r=t.lineShift||0,i=n.line||1,o=n.column||1;return{move:function(e=""){const t=e.split(/\r?\n|\r/g),n=t[t.length-1];return i+=t.length-1,o=1===t.length?o+n.length:1+n.length+r,e},current:function(){return{now:{line:i,column:o},lineShift:r}},shift:function(e){r+=e}}}function le(e,t,n){const r=t.indexStack,i=e.children||[],o=oe(n),l=[];let c=-1;for(r.push(-1);++c<i.length;){const n=i[c];r[r.length-1]=c,l.push(o.move(t.handle(n,e,t,{before:"\n",after:"\n",...o.current()}))),"list"!==n.type&&(t.bulletLastUsed=void 0),c<i.length-1&&l.push(o.move(u(n,i[c+1])))}return r.pop(),l.join("");function u(n,r){let i=t.join.length;for(;i--;){const o=t.join[i](n,r,e,t);if(!0===o||1===o)break;if("number"===typeof o)return"\n".repeat(1+o);if(!1===o)return"\n\n\x3c!----\x3e\n\n"}return"\n\n"}}const ce=/\r?\n|\r/g;function ue(e,t){const n=[];let r,i=0,o=0;for(;r=ce.exec(e);)l(e.slice(i,r.index)),n.push(r[0]),i=r.index+r[0].length,o++;return l(e.slice(i)),n.join("");function l(e){n.push(t(e,o,!e))}}function se(e){if(!e._compiled){const t=(e.atBreak?"[\\r\\n][\\t ]*":"")+(e.before?"(?:"+e.before+")":"");e._compiled=new RegExp((t?"("+t+")":"")+(/[|\\{}()[\]^$+*?.-]/.test(e.character)?"\\":"")+e.character+(e.after?"(?:"+e.after+")":""),"g")}return e._compiled}function ae(e,t){return fe(e,t.inConstruct,!0)&&!fe(e,t.notInConstruct,!1)}function fe(e,t,n){if(!t)return n;"string"===typeof t&&(t=[t]);let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function he(e,t,n){const r=(n.before||"")+(t||"")+(n.after||""),i=[],o=[],l={};let c=-1;for(;++c<e.unsafe.length;){const t=e.unsafe[c];if(!ae(e.stack,t))continue;const n=se(t);let o;for(;o=n.exec(r);){const e="before"in t||Boolean(t.atBreak),n="after"in t,r=o.index+(e?o[1].length:0);i.includes(r)?(l[r].before&&!e&&(l[r].before=!1),l[r].after&&!n&&(l[r].after=!1)):(i.push(r),l[r]={before:e,after:n})}}i.sort(pe);let u=n.before?n.before.length:0;const s=r.length-(n.after?n.after.length:0);for(c=-1;++c<i.length;){const e=i[c];e<u||e>=s||(e+1<s&&i[c+1]===e+1&&l[e].after&&!l[e+1].before&&!l[e+1].after||i[c-1]===e-1&&l[e].before&&!l[e-1].before&&!l[e-1].after||(u!==e&&o.push(ge(r.slice(u,e),"\\")),u=e,!/[!-/:-@[-`{-~]/.test(r.charAt(e))||n.encode&&n.encode.includes(r.charAt(e))?(o.push("&#x"+r.charCodeAt(e).toString(16).toUpperCase()+";"),u++):o.push("\\")))}return o.push(ge(r.slice(u,s),n.after)),o.join("")}function pe(e,t){return e-t}function ge(e,t){const n=/\\(?=[!-/:-@[-`{-~])/g,r=[],i=[],o=e+t;let l,c=-1,u=0;for(;l=n.exec(o);)r.push(l.index);for(;++c<r.length;)u!==r[c]&&i.push(e.slice(u,r[c])),i.push("\\"),u=r[c];return i.push(e.slice(u)),i.join("")}function me(){return e.peek=function(){return"["},{unsafe:[{character:"[",inConstruct:["phrasing","label","reference"]}],handlers:{footnoteDefinition:function(e,t,n,r){const i=oe(r);let o=i.move("[^");const l=n.enter("footnoteDefinition"),c=n.enter("label");return o+=i.move(he(n,ie(e),{...i.current(),before:o,after:"]"})),c(),o+=i.move("]:"+(e.children&&e.children.length>0?" ":"")),i.shift(4),o+=i.move(ue(le(e,n,i.current()),(function(e,t,n){if(t)return(n?"":"    ")+e;return e}))),l(),o},footnoteReference:e}};function e(e,t,n,r){const i=oe(r);let o=i.move("[^");const l=n.enter("footnoteReference"),c=n.enter("reference");return o+=i.move(he(n,ie(e),{...i.current(),before:o,after:"]"})),c(),l(),o+=i.move("]"),o}}function de(e,t,n){const r=t.indexStack,i=e.children||[],o=[];let l=-1,c=n.before;r.push(-1);let u=oe(n);for(;++l<i.length;){const s=i[l];let a;if(r[r.length-1]=l,l+1<i.length){let n=t.handle.handlers[i[l+1].type];n&&n.peek&&(n=n.peek),a=n?n(i[l+1],e,t,{before:"",after:"",...u.current()}).charAt(0):""}else a=n.after;o.length>0&&("\r"===c||"\n"===c)&&"html"===s.type&&(o[o.length-1]=o[o.length-1].replace(/(\r?\n|\r)$/," "),c=" ",u=oe(n),u.move(o.join(""))),o.push(u.move(t.handle(s,e,t,{...u.current(),before:c,after:a}))),c=o[o.length-1].slice(-1)}return r.pop(),o.join("")}const ke={canContainEols:["delete"],enter:{strikethrough:function(e){this.enter({type:"delete",children:[]},e)}},exit:{strikethrough:function(e){this.exit(e)}}},be={unsafe:[{character:"~",inConstruct:"phrasing"}],handlers:{delete:xe}};function xe(e,t,n,r){const i=oe(r),o=n.enter("emphasis");let l=i.move("~~");return l+=de(e,n,{...i.current(),before:l,after:"~"}),l+=i.move("~~"),o(),l}function ye(e,t,n){let r=e.value||"",i="`",o=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++o<n.unsafe.length;){const e=n.unsafe[o],t=se(e);let i;if(e.atBreak)for(;i=t.exec(r);){let e=i.index;10===r.charCodeAt(e)&&13===r.charCodeAt(e-1)&&e--,r=r.slice(0,e)+" "+r.slice(i.index+1)}}return i+r+i}function Ce(e){return e.length}function ve(e){const t="string"===typeof e?e.codePointAt(0):0;return 67===t||99===t?99:76===t||108===t?108:82===t||114===t?114:0}xe.peek=function(){return"~"},ye.peek=function(){return"`"};const we={enter:{table:function(e){const t=e._align;this.enter({type:"table",align:t.map((e=>"none"===e?null:e)),children:[]},e),this.setData("inTable",!0)},tableData:Fe,tableHeader:Fe,tableRow:function(e){this.enter({type:"tableRow",children:[]},e)}},exit:{codeText:function(e){let t=this.resume();this.getData("inTable")&&(t=t.replace(/\\([\\|])/g,ze));this.stack[this.stack.length-1].value=t,this.exit(e)},table:function(e){this.exit(e),this.setData("inTable")},tableData:De,tableHeader:De,tableRow:De}};function De(e){this.exit(e)}function Fe(e){this.enter({type:"tableCell",children:[]},e)}function ze(e,t){return"|"===t?t:e}function Ae(e){const t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,o=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:"\n",inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[\t :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{table:function(e,t,n,r){return c(function(e,t,n){const r=e.children;let i=-1;const o=[],l=t.enter("table");for(;++i<r.length;)o[i]=u(r[i],t,n);return l(),o}(e,n,r),e.align)},tableRow:function(e,t,n,r){const i=c([u(e,n,r)]);return i.slice(0,i.indexOf("\n"))},tableCell:l,inlineCode:function(e,t,n){let r=ye(e,0,n);n.stack.includes("tableCell")&&(r=r.replace(/\|/g,"\\$&"));return r}}};function l(e,t,n,r){const i=n.enter("tableCell"),l=n.enter("phrasing"),c=de(e,n,{...r,before:o,after:o});return l(),i(),c}function c(e,t){return function(e,t={}){const n=(t.align||[]).concat(),r=t.stringLength||Ce,i=[],o=[],l=[],c=[];let u=0,s=-1;for(;++s<e.length;){const n=[],i=[];let f=-1;for(e[s].length>u&&(u=e[s].length);++f<e[s].length;){const o=null===(a=e[s][f])||void 0===a?"":String(a);if(!1!==t.alignDelimiters){const e=r(o);i[f]=e,(void 0===c[f]||e>c[f])&&(c[f]=e)}n.push(o)}o[s]=n,l[s]=i}var a;let f=-1;if("object"===typeof n&&"length"in n)for(;++f<u;)i[f]=ve(n[f]);else{const e=ve(n);for(;++f<u;)i[f]=e}f=-1;const h=[],p=[];for(;++f<u;){const e=i[f];let n="",r="";99===e?(n=":",r=":"):108===e?n=":":114===e&&(r=":");let o=!1===t.alignDelimiters?1:Math.max(1,c[f]-n.length-r.length);const l=n+"-".repeat(o)+r;!1!==t.alignDelimiters&&(o=n.length+o+r.length,o>c[f]&&(c[f]=o),p[f]=o),h[f]=l}o.splice(1,0,h),l.splice(1,0,p),s=-1;const g=[];for(;++s<o.length;){const e=o[s],n=l[s];f=-1;const r=[];for(;++f<u;){const o=e[f]||"";let l="",s="";if(!1!==t.alignDelimiters){const e=c[f]-(n[f]||0),t=i[f];114===t?l=" ".repeat(e):99===t?e%2?(l=" ".repeat(e/2+.5),s=" ".repeat(e/2-.5)):(l=" ".repeat(e/2),s=l):s=" ".repeat(e)}!1===t.delimiterStart||f||r.push("|"),!1===t.padding||!1===t.alignDelimiters&&""===o||!1===t.delimiterStart&&!f||r.push(" "),!1!==t.alignDelimiters&&r.push(l),r.push(o),!1!==t.alignDelimiters&&r.push(s),!1!==t.padding&&r.push(" "),!1===t.delimiterEnd&&f===u-1||r.push("|")}g.push(!1===t.delimiterEnd?r.join("").replace(/ +$/,""):r.join(""))}return g.join("\n")}(e,{align:t,alignDelimiters:r,padding:n,stringLength:i})}function u(e,t,n){const r=e.children;let i=-1;const o=[],c=t.enter("tableRow");for(;++i<r.length;)o[i]=l(r[i],0,t,n);return c(),o}}function Le(e,t,n,r){const i=function(e){const t=e.options.listItemIndent||"tab";if(1===t||"1"===t)return"one";if("tab"!==t&&"one"!==t&&"mixed"!==t)throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}(n);let o=n.bulletCurrent||function(e){const t=e.options.bullet||"*";if("*"!==t&&"+"!==t&&"-"!==t)throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}(n);t&&"list"===t.type&&t.ordered&&(o=("number"===typeof t.start&&t.start>-1?t.start:1)+(!1===n.options.incrementListMarker?0:t.children.indexOf(e))+o);let l=o.length+1;("tab"===i||"mixed"===i&&(t&&"list"===t.type&&t.spread||e.spread))&&(l=4*Math.ceil(l/4));const c=oe(r);c.move(o+" ".repeat(l-o.length)),c.shift(l);const u=n.enter("listItem"),s=ue(le(e,n,c.current()),(function(e,t,n){if(t)return(n?"":" ".repeat(l))+e;return(n?o:o+" ".repeat(l-o.length))+e}));return u(),s}const Se={exit:{taskListCheckValueChecked:Ee,taskListCheckValueUnchecked:Ee,paragraph:function(e){const t=this.stack[this.stack.length-2],n=this.stack[this.stack.length-1],r=t.children,i=n.children[0];let o,l=-1;if(t&&"listItem"===t.type&&"boolean"===typeof t.checked&&i&&"text"===i.type){for(;++l<r.length;){const e=r[l];if("paragraph"===e.type){o=e;break}}o===n&&(i.value=i.value.slice(1),0===i.value.length?n.children.shift():n.position&&i.position&&"number"===typeof i.position.start.offset&&(i.position.start.column++,i.position.start.offset++,n.position.start=Object.assign({},i.position.start)))}this.exit(e)}}},Te={unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:function(e,t,n,r){const i=e.children[0],o="boolean"===typeof e.checked&&i&&"paragraph"===i.type,l="["+(e.checked?"x":" ")+"] ",c=oe(r);o&&c.move(l);let u=Le(e,t,n,{...r,...c.current()});o&&(u=u.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,(function(e){return e+l})));return u}}};function Ee(e){this.stack[this.stack.length-2].checked="taskListCheckValueChecked"===e.type}function je(e={}){const t=this.data();function n(e,n){(t[e]?t[e]:t[e]=[]).push(n)}n("micromarkExtensions",function(e){return(0,r.W)([g,{document:{91:{tokenize:T,continuation:{tokenize:E},exit:j}},text:{91:{tokenize:S},93:{add:"after",tokenize:A,resolveTo:L}}},O(e),R,$])}(e)),n("fromMarkdownExtensions",[J,{enter:{gfmFootnoteDefinition:function(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)},gfmFootnoteDefinitionLabelString:function(){this.buffer()},gfmFootnoteCall:function(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)},gfmFootnoteCallString:function(){this.buffer()}},exit:{gfmFootnoteDefinition:function(e){this.exit(e)},gfmFootnoteDefinitionLabelString:function(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=(0,F.d)(this.sliceSerialize(e)).toLowerCase()},gfmFootnoteCall:function(e){this.exit(e)},gfmFootnoteCallString:function(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=(0,F.d)(this.sliceSerialize(e)).toLowerCase()}}},ke,we,Se]),n("toMarkdownExtensions",function(e){return{extensions:[K,me(),be,Ae(e),Te]}}(e))}}}]);