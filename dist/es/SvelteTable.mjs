function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function l(){return Object.create(null)}function o(e){e.forEach(n)}function r(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e,t,n,l){if(e){const o=a(e,t,n,l);return e[0](o)}}function a(e,n,l,o){return e[1]&&o?t(l.ctx.slice(),e[1](o(n))):l.ctx}function i(e,t,n,l,o,r,s){const c=function(e,t,n,l){if(e[2]&&l){const o=e[2](l(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let l=0;l<n;l+=1)e[l]=t.dirty[l]|o[l];return e}return t.dirty|o}return t.dirty}(t,l,o,r);if(c){const o=a(t,n,l,s);e.p(o,c)}}function d(e){return null==e?"":e}let u,f=!1;function p(e,t,n,l){for(;e<t;){const o=e+(t-e>>1);n(o)<=l?e=o+1:t=o}return e}function h(e,t){f?(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;const t=e.childNodes,n=new Int32Array(t.length+1),l=new Int32Array(t.length);n[0]=-1;let o=0;for(let e=0;e<t.length;e++){const r=p(1,o+1,(e=>t[n[e]].claim_order),t[e].claim_order)-1;l[e]=n[r]+1;const s=r+1;n[s]=e,o=Math.max(s,o)}const r=[],s=[];let c=t.length-1;for(let e=n[o]+1;0!=e;e=l[e-1]){for(r.push(t[e-1]);c>=e;c--)s.push(t[c]);c--}for(;c>=0;c--)s.push(t[c]);r.reverse(),s.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<s.length;t++){for(;n<r.length&&s[t].claim_order>=r[n].claim_order;)n++;const l=n<r.length?r[n]:null;e.insertBefore(s[t],l)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild),t!==e.actual_end_child?e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling):t.parentNode!==e&&e.appendChild(t)}function m(e,t,n){f&&!n?h(e,t):t.parentNode===e&&t.nextSibling==n||e.insertBefore(t,n||null)}function g(e){e.parentNode.removeChild(e)}function $(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function v(e){return document.createTextNode(e)}function x(){return v(" ")}function _(){return v("")}function w(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function b(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function N(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function k(e,t){e.value=null==t?"":t}function E(e,t){for(let n=0;n<e.options.length;n+=1){const l=e.options[n];if(l.__value===t)return void(l.selected=!0)}}class C{constructor(e){this.e=this.n=null,this.l=e}m(e,t,n=null){this.e||(this.e=y(t.nodeName),this.t=t,this.l?this.n=this.l:this.h(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)m(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(g)}}function O(e){u=e}function S(){const e=function(){if(!u)throw new Error("Function called outside component initialization");return u}();return(t,n)=>{const l=e.$$.callbacks[t];if(l){const o=function(e,t,n=!1){const l=document.createEvent("CustomEvent");return l.initCustomEvent(e,n,!1,t),l}(t,n);l.slice().forEach((t=>{t.call(e,o)}))}}}const T=[],A=[],R=[],B=[],V=Promise.resolve();let L=!1;function j(e){R.push(e)}let I=!1;const M=new Set;function D(){if(!I){I=!0;do{for(let e=0;e<T.length;e+=1){const t=T[e];O(t),K(t.$$)}for(O(null),T.length=0;A.length;)A.pop()();for(let e=0;e<R.length;e+=1){const t=R[e];M.has(t)||(M.add(t),t())}R.length=0}while(T.length);for(;B.length;)B.pop()();L=!1,I=!1,M.clear()}}function K(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(j)}}const H=new Set;let q;function z(){q={r:0,c:[],p:q}}function F(){q.r||o(q.c),q=q.p}function P(e,t){e&&e.i&&(H.delete(e),e.i(t))}function G(e,t,n,l){if(e&&e.o){if(H.has(e))return;H.add(e),q.c.push((()=>{H.delete(e),l&&(n&&e.d(1),l())})),e.o(t)}}function J(e){e&&e.c()}function Q(e,t,l,s){const{fragment:c,on_mount:a,on_destroy:i,after_update:d}=e.$$;c&&c.m(t,l),s||j((()=>{const t=a.map(n).filter(r);i?i.push(...t):o(t),e.$$.on_mount=[]})),d.forEach(j)}function U(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function W(e,t){-1===e.$$.dirty[0]&&(T.push(e),L||(L=!0,V.then(D)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function X(t,n,r,s,c,a,i=[-1]){const d=u;O(t);const p=t.$$={fragment:null,ctx:null,props:a,update:e,not_equal:c,bound:l(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:n.context||[]),callbacks:l(),dirty:i,skip_bound:!1};let h=!1;if(p.ctx=r?r(t,n.props||{},((e,n,...l)=>{const o=l.length?l[0]:n;return p.ctx&&c(p.ctx[e],p.ctx[e]=o)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](o),h&&W(t,e)),n})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!s&&s(p.ctx),n.target){if(n.hydrate){f=!0;const e=function(e){return Array.from(e.childNodes)}(n.target);p.fragment&&p.fragment.l(e),e.forEach(g)}else p.fragment&&p.fragment.c();n.intro&&P(t.$$.fragment),Q(t,n.target,n.anchor,n.customElement),f=!1,D()}O(d)}function Y(e,t,n){const l=e.slice();return l[46]=t[n],l[48]=n,l}const Z=e=>({row:8&e[0]}),ee=e=>({row:e[46],n:e[48]});function te(e,t,n){const l=e.slice();return l[49]=t[n],l}const ne=e=>({row:8&e[0]}),le=e=>({row:e[46],n:e[48]});function oe(e,t,n){const l=e.slice();return l[49]=t[n],l}const re=e=>({sortOrder:2&e[0],sortBy:1&e[0]}),se=e=>({sortOrder:e[1],sortBy:e[0]});function ce(e,t,n){const l=e.slice();return l[49]=t[n],l[54]=t,l[55]=n,l}function ae(e,t,n){const l=e.slice();return l[56]=t[n],l}function ie(e){let t,n,l,o,r,s=e[20][e[49].key],c=[];for(let t=0;t<s.length;t+=1)c[t]=ue(ae(e,s,t));function a(){e[38].call(t,e[49])}return{c(){t=y("select"),n=y("option");for(let e=0;e<c.length;e+=1)c[e].c();n.__value=void 0,n.value=n.__value,b(t,"class",l=d(e[23](e[14]))+" svelte-dsaf7t"),void 0===e[2][e[49].key]&&j(a)},m(l,s){m(l,t,s),h(t,n);for(let e=0;e<c.length;e+=1)c[e].m(t,null);E(t,e[2][e[49].key]),o||(r=w(t,"change",a),o=!0)},p(n,o){if(e=n,1048592&o[0]){let n;for(s=e[20][e[49].key],n=0;n<s.length;n+=1){const l=ae(e,s,n);c[n]?c[n].p(l,o):(c[n]=ue(l),c[n].c(),c[n].m(t,null))}for(;n<c.length;n+=1)c[n].d(1);c.length=s.length}16384&o[0]&&l!==(l=d(e[23](e[14]))+" svelte-dsaf7t")&&b(t,"class",l),1048596&o[0]&&E(t,e[2][e[49].key])},d(e){e&&g(t),$(c,e),o=!1,r()}}}function de(e){let t,n,l;function o(){e[37].call(t,e[49])}return{c(){t=y("input")},m(r,s){m(r,t,s),k(t,e[2][e[49].key]),n||(l=w(t,"input",o),n=!0)},p(n,l){e=n,1048596&l[0]&&t.value!==e[2][e[49].key]&&k(t,e[2][e[49].key])},d(e){e&&g(t),n=!1,l()}}}function ue(e){let t,n,l,o=e[56].name+"";return{c(){t=y("option"),n=v(o),t.__value=l=e[56].value,t.value=t.__value},m(e,l){m(e,t,l),h(t,n)},p(e,r){1048592&r[0]&&o!==(o=e[56].name+"")&&N(n,o),1048592&r[0]&&l!==(l=e[56].value)&&(t.__value=l,t.value=t.__value)},d(e){e&&g(t)}}}function fe(e){let t;function n(e,t){return void 0!==e[49].searchValue?de:void 0!==e[20][e[49].key]?ie:void 0}let l=n(e),o=l&&l(e);return{c(){t=y("th"),o&&o.c()},m(e,n){m(e,t,n),o&&o.m(t,null)},p(e,r){l===(l=n(e))&&o?o.p(e,r):(o&&o.d(1),o=l&&l(e),o&&(o.c(),o.m(t,null)))},d(e){e&&g(t),o&&o.d()}}}function pe(e){let t;return{c(){t=y("th")},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function he(e){let t,n;return{c(){t=new C,n=_(),t.a=n},m(l,o){t.m(e[7],l,o),m(l,n,o)},p(e,n){128&n[0]&&t.p(e[7])},d(e){e&&g(n),e&&t.d()}}}function me(e){let t,n,l=(1===e[1]?e[5]:e[6])+"";return{c(){t=new C,n=_(),t.a=n},m(e,o){t.m(l,e,o),m(e,n,o)},p(e,n){98&n[0]&&l!==(l=(1===e[1]?e[5]:e[6])+"")&&t.p(l)},d(e){e&&g(n),e&&t.d()}}}function ge(e){let t,n,l,o,r,s,c=e[49].title+"";function a(e,t){return e[0]===e[49].key?me:e[49].sortable?he:void 0}let i=a(e),u=i&&i(e);function f(...t){return e[39](e[49],...t)}return{c(){t=y("th"),n=v(c),l=x(),u&&u.c(),b(t,"class",o=d(e[23]([e[49].sortable?"isSortable":"",e[49].headerClass]))+" svelte-dsaf7t")},m(e,o){m(e,t,o),h(t,n),h(t,l),u&&u.m(t,null),r||(s=w(t,"click",f),r=!0)},p(l,r){e=l,16&r[0]&&c!==(c=e[49].title+"")&&N(n,c),i===(i=a(e))&&u?u.p(e,r):(u&&u.d(1),u=i&&i(e),u&&(u.c(),u.m(t,null))),1048592&r[0]&&o!==(o=d(e[23]([e[49].sortable?"isSortable":"",e[49].headerClass]))+" svelte-dsaf7t")&&b(t,"class",o)},d(e){e&&g(t),u&&u.d(),r=!1,s()}}}function $e(e){let t;return{c(){t=y("th")},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function ye(t){let n,l,o=(t[49].renderValue?t[49].renderValue(t[46]):t[49].value(t[46]))+"";return{c(){n=new C,l=_(),n.a=l},m(e,t){n.m(o,e,t),m(e,l,t)},p(e,t){24&t[0]&&o!==(o=(e[49].renderValue?e[49].renderValue(e[46]):e[49].value(e[46]))+"")&&n.p(o)},i:e,o:e,d(e){e&&g(l),e&&n.d()}}}function ve(e){let n,l,o;const r=[e[49].renderComponent.props||{},{row:e[46]},{col:e[49]}];var s=e[49].renderComponent.component||e[49].renderComponent;function c(e){let n={};for(let e=0;e<r.length;e+=1)n=t(n,r[e]);return{props:n}}return s&&(n=new s(c())),{c(){n&&J(n.$$.fragment),l=_()},m(e,t){n&&Q(n,e,t),m(e,l,t),o=!0},p(e,t){const o=24&t[0]?function(e,t){const n={},l={},o={$$scope:1};let r=e.length;for(;r--;){const s=e[r],c=t[r];if(c){for(const e in s)e in c||(l[e]=1);for(const e in c)o[e]||(n[e]=c[e],o[e]=1);e[r]=c}else for(const e in s)o[e]=1}for(const e in l)e in n||(n[e]=void 0);return n}(r,[16&t[0]&&(a=e[49].renderComponent.props||{},"object"==typeof a&&null!==a?a:{}),8&t[0]&&{row:e[46]},16&t[0]&&{col:e[49]}]):{};var a;if(s!==(s=e[49].renderComponent.component||e[49].renderComponent)){if(n){z();const e=n;G(e.$$.fragment,1,0,(()=>{U(e,1)})),F()}s?(n=new s(c()),J(n.$$.fragment),P(n.$$.fragment,1),Q(n,l.parentNode,l)):n=null}else s&&n.$set(o)},i(e){o||(n&&P(n.$$.fragment,e),o=!0)},o(e){n&&G(n.$$.fragment,e),o=!1},d(e){e&&g(l),n&&U(n,e)}}}function xe(e){let t,n,l,o,r,s,c;const a=[ve,ye],i=[];function u(e,t){return e[49].renderComponent?0:1}function f(...t){return e[40](e[46],e[49],...t)}return n=u(e),l=i[n]=a[n](e),{c(){t=y("td"),l.c(),b(t,"class",o=d(e[23]([e[49].class,e[16]]))+" svelte-dsaf7t")},m(e,l){m(e,t,l),i[n].m(t,null),r=!0,s||(c=w(t,"click",f),s=!0)},p(s,c){let f=n;n=u(e=s),n===f?i[n].p(e,c):(z(),G(i[f],1,1,(()=>{i[f]=null})),F(),l=i[n],l?l.p(e,c):(l=i[n]=a[n](e),l.c()),P(l,1),l.m(t,null)),(!r||1114128&c[0]&&o!==(o=d(e[23]([e[49].class,e[16]]))+" svelte-dsaf7t"))&&b(t,"class",o)},i(e){r||(P(l),r=!0)},o(e){G(l),r=!1},d(e){e&&g(t),i[n].d(),s=!1,c()}}}function _e(e){let t,n,l,o,r=(e[46].$expanded?e[8]:e[9])+"";function s(...t){return e[41](e[46],...t)}return{c(){t=y("td"),b(t,"class",n=d(e[23](["isClickable",e[19]]))+" svelte-dsaf7t")},m(e,n){m(e,t,n),t.innerHTML=r,l||(o=w(t,"click",s),l=!0)},p(l,o){e=l,776&o[0]&&r!==(r=(e[46].$expanded?e[8]:e[9])+"")&&(t.innerHTML=r),524288&o[0]&&n!==(n=d(e[23](["isClickable",e[19]]))+" svelte-dsaf7t")&&b(t,"class",n)},d(e){e&&g(t),l=!1,o()}}}function we(e){let t,n,l,o;const r=e[36].expanded,s=c(r,e,e[35],ee);return{c(){t=y("tr"),n=y("td"),s&&s.c(),b(n,"colspan",e[21]),b(t,"class",l=d(e[23](e[18]))+" svelte-dsaf7t")},m(e,l){m(e,t,l),h(t,n),s&&s.m(n,null),o=!0},p(e,c){s&&s.p&&(!o||8&c[0]|16&c[1])&&i(s,r,e,e[35],o?c:[-1,-1],Z,ee),(!o||2097152&c[0])&&b(n,"colspan",e[21]),(!o||262144&c[0]&&l!==(l=d(e[23](e[18]))+" svelte-dsaf7t"))&&b(t,"class",l)},i(e){o||(P(s,e),o=!0)},o(e){G(s,e),o=!1},d(e){e&&g(t),s&&s.d(e)}}}function be(e){let t;const n=e[36].row,l=c(n,e,e[35],le),o=l||function(e){let t,n,l,o,r,s,c,a,i=e[4],u=[];for(let t=0;t<i.length;t+=1)u[t]=xe(te(e,i,t));const f=e=>G(u[e],1,1,(()=>{u[e]=null}));let p=e[10]&&_e(e);function v(...t){return e[42](e[46],...t)}let _=e[46].$expanded&&we(e);return{c(){t=y("tr");for(let e=0;e<u.length;e+=1)u[e].c();n=x(),p&&p.c(),o=x(),_&&_.c(),r=x(),b(t,"class",l=d(e[23]([e[15],e[46].$expanded&&e[17]]))+" svelte-dsaf7t")},m(e,l){m(e,t,l);for(let e=0;e<u.length;e+=1)u[e].m(t,null);h(t,n),p&&p.m(t,null),m(e,o,l),_&&_.m(e,l),m(e,r,l),s=!0,c||(a=w(t,"click",v),c=!0)},p(o,c){if(e=o,142671896&c[0]){let l;for(i=e[4],l=0;l<i.length;l+=1){const o=te(e,i,l);u[l]?(u[l].p(o,c),P(u[l],1)):(u[l]=xe(o),u[l].c(),P(u[l],1),u[l].m(t,n))}for(z(),l=i.length;l<u.length;l+=1)f(l);F()}e[10]?p?p.p(e,c):(p=_e(e),p.c(),p.m(t,null)):p&&(p.d(1),p=null),(!s||163848&c[0]&&l!==(l=d(e[23]([e[15],e[46].$expanded&&e[17]]))+" svelte-dsaf7t"))&&b(t,"class",l),e[46].$expanded?_?(_.p(e,c),8&c[0]&&P(_,1)):(_=we(e),_.c(),P(_,1),_.m(r.parentNode,r)):_&&(z(),G(_,1,1,(()=>{_=null})),F())},i(e){if(!s){for(let e=0;e<i.length;e+=1)P(u[e]);P(_),s=!0}},o(e){u=u.filter(Boolean);for(let e=0;e<u.length;e+=1)G(u[e]);G(_),s=!1},d(e){e&&g(t),$(u,e),p&&p.d(),e&&g(o),_&&_.d(e),e&&g(r),c=!1,a()}}}(e);return{c(){o&&o.c()},m(e,n){o&&o.m(e,n),t=!0},p(e,r){l?l.p&&(!t||8&r[0]|16&r[1])&&i(l,n,e,e[35],t?r:[-1,-1],ne,le):o&&o.p&&(!t||3114776&r[0]|16&r[1])&&o.p(e,t?r:[-1,-1])},i(e){t||(P(o,e),t=!0)},o(e){G(o,e),t=!1},d(e){o&&o.d(e)}}}function Ne(e){let t,n,l,o,r,s,a,u,f,p=e[22]&&function(e){let t,n,l=e[4],o=[];for(let t=0;t<l.length;t+=1)o[t]=fe(ce(e,l,t));let r=e[10]&&pe();return{c(){t=y("tr");for(let e=0;e<o.length;e+=1)o[e].c();n=x(),r&&r.c(),b(t,"class","svelte-dsaf7t")},m(e,l){m(e,t,l);for(let e=0;e<o.length;e+=1)o[e].m(t,null);h(t,n),r&&r.m(t,null)},p(e,s){if(9453588&s[0]){let r;for(l=e[4],r=0;r<l.length;r+=1){const c=ce(e,l,r);o[r]?o[r].p(c,s):(o[r]=fe(c),o[r].c(),o[r].m(t,n))}for(;r<o.length;r+=1)o[r].d(1);o.length=l.length}e[10]?r||(r=pe(),r.c(),r.m(t,null)):r&&(r.d(1),r=null)},d(e){e&&g(t),$(o,e),r&&r.d()}}}(e);const v=e[36].header,_=c(v,e,e[35],se),w=_||function(e){let t,n,l=e[4],o=[];for(let t=0;t<l.length;t+=1)o[t]=ge(oe(e,l,t));let r=e[10]&&$e();return{c(){t=y("tr");for(let e=0;e<o.length;e+=1)o[e].c();n=x(),r&&r.c()},m(e,l){m(e,t,l);for(let e=0;e<o.length;e+=1)o[e].m(t,null);h(t,n),r&&r.m(t,null)},p(e,s){if(25166067&s[0]){let r;for(l=e[4],r=0;r<l.length;r+=1){const c=oe(e,l,r);o[r]?o[r].p(c,s):(o[r]=ge(c),o[r].c(),o[r].m(t,n))}for(;r<o.length;r+=1)o[r].d(1);o.length=l.length}e[10]?r||(r=$e(),r.c(),r.m(t,null)):r&&(r.d(1),r=null)},d(e){e&&g(t),$(o,e),r&&r.d()}}}(e);let N=e[3],k=[];for(let t=0;t<N.length;t+=1)k[t]=be(Y(e,N,t));const E=e=>G(k[e],1,1,(()=>{k[e]=null}));return{c(){t=y("table"),n=y("thead"),p&&p.c(),l=x(),w&&w.c(),r=x(),s=y("tbody");for(let e=0;e<k.length;e+=1)k[e].c();b(n,"class",o=d(e[23](e[12]))+" svelte-dsaf7t"),b(s,"class",a=d(e[23](e[13]))+" svelte-dsaf7t"),b(t,"class",u=d(e[23](e[11]))+" svelte-dsaf7t")},m(e,o){m(e,t,o),h(t,n),p&&p.m(n,null),h(n,l),w&&w.m(n,null),h(t,r),h(t,s);for(let e=0;e<k.length;e+=1)k[e].m(s,null);f=!0},p(e,l){if(e[22]&&p.p(e,l),_?_.p&&(!f||3&l[0]|16&l[1])&&i(_,v,e,e[35],f?l:[-1,-1],re,se):w&&w.p&&(!f||1267&l[0])&&w.p(e,f?l:[-1,-1]),(!f||4096&l[0]&&o!==(o=d(e[23](e[12]))+" svelte-dsaf7t"))&&b(n,"class",o),246384408&l[0]|16&l[1]){let t;for(N=e[3],t=0;t<N.length;t+=1){const n=Y(e,N,t);k[t]?(k[t].p(n,l),P(k[t],1)):(k[t]=be(n),k[t].c(),P(k[t],1),k[t].m(s,null))}for(z(),t=N.length;t<k.length;t+=1)E(t);F()}(!f||8192&l[0]&&a!==(a=d(e[23](e[13]))+" svelte-dsaf7t"))&&b(s,"class",a),(!f||2048&l[0]&&u!==(u=d(e[23](e[11]))+" svelte-dsaf7t"))&&b(t,"class",u)},i(e){if(!f){P(w,e);for(let e=0;e<N.length;e+=1)P(k[e]);f=!0}},o(e){G(w,e),k=k.filter(Boolean);for(let e=0;e<k.length;e+=1)G(k[e]);f=!1},d(e){e&&g(t),p&&p.d(),w&&w.d(e),$(k,e)}}}function ke(e,t,n){let l,{$$slots:o={},$$scope:r}=t,{columns:s}=t,{rows:c}=t,{c_rows:a}=t,{sortOrders:i=[1,-1]}=t,{sortBy:d=""}=t,{sortOrder:u=i?.[0]||1}=t,{filterSelections:f={}}=t,{expanded:p=[]}=t,{expandRowKey:h=null}=t,{expandSingle:m=!1}=t,{iconAsc:g="▲"}=t,{iconDesc:$="▼"}=t,{iconSortable:y=""}=t,{iconExpand:v="▼"}=t,{iconExpanded:x="▲"}=t,{showExpandIcon:_=!1}=t,{classNameTable:w=""}=t,{classNameThead:b=""}=t,{classNameTbody:N=""}=t,{classNameSelect:k=""}=t,{classNameRow:E=""}=t,{classNameCell:C=""}=t,{classNameRowExpanded:O=""}=t,{classNameExpandedContent:T=""}=t,{classNameCellExpand:A=""}=t;const R=S();let B=()=>"";if(!Array.isArray(p))throw"'expanded' needs to be an array";let V,L=s.some((e=>void 0!==e.filterOptions||void 0!==e.searchValue)),j={};const I=(e,t)=>{var l;t.sortable&&(n(1,(l=t.key,u=l===d?i[(i.findIndex((e=>e===u))+1)%i.length]:i[0])),n(0,d=u?t.key:void 0)),R("clickCol",{event:e,col:t,key:t.key})},M=(e,t)=>{R("clickRow",{event:e,row:t})},D=(e,t)=>{t.$expanded=!t.$expanded;const l=t[h];m&&t.$expanded?n(28,p=[l]):m?n(28,p=[]):t.$expanded?n(28,p=[...p,l]):n(28,p=p.filter((e=>e!=l))),R("clickExpand",{event:e,row:t})},K=(e,t,n)=>{R("clickCell",{event:e,row:t,key:n})};return e.$$set=e=>{"columns"in e&&n(4,s=e.columns),"rows"in e&&n(29,c=e.rows),"c_rows"in e&&n(3,a=e.c_rows),"sortOrders"in e&&n(30,i=e.sortOrders),"sortBy"in e&&n(0,d=e.sortBy),"sortOrder"in e&&n(1,u=e.sortOrder),"filterSelections"in e&&n(2,f=e.filterSelections),"expanded"in e&&n(28,p=e.expanded),"expandRowKey"in e&&n(31,h=e.expandRowKey),"expandSingle"in e&&n(32,m=e.expandSingle),"iconAsc"in e&&n(5,g=e.iconAsc),"iconDesc"in e&&n(6,$=e.iconDesc),"iconSortable"in e&&n(7,y=e.iconSortable),"iconExpand"in e&&n(8,v=e.iconExpand),"iconExpanded"in e&&n(9,x=e.iconExpanded),"showExpandIcon"in e&&n(10,_=e.showExpandIcon),"classNameTable"in e&&n(11,w=e.classNameTable),"classNameThead"in e&&n(12,b=e.classNameThead),"classNameTbody"in e&&n(13,N=e.classNameTbody),"classNameSelect"in e&&n(14,k=e.classNameSelect),"classNameRow"in e&&n(15,E=e.classNameRow),"classNameCell"in e&&n(16,C=e.classNameCell),"classNameRowExpanded"in e&&n(17,O=e.classNameRowExpanded),"classNameExpandedContent"in e&&n(18,T=e.classNameExpandedContent),"classNameCellExpand"in e&&n(19,A=e.classNameCellExpand),"$$scope"in e&&n(35,r=e.$$scope)},e.$$.update=()=>{if(16&e.$$.dirty[0]&&(n(34,V={}),s.forEach((e=>{n(34,V[e.key]=e,V)}))),1040&e.$$.dirty[0]&&n(21,l=(_?1:0)+s.length),1&e.$$.dirty[0]|8&e.$$.dirty[1]){let e=V[d];void 0!==e&&!0===e.sortable&&"function"==typeof e.value&&n(33,B=t=>e.value(t))}805306375&e.$$.dirty[0]|13&e.$$.dirty[1]&&n(3,a=c.filter((e=>Object.keys(f).every((t=>""===f[t]||V[t].searchValue&&(V[t].searchValue(e)+"").toLocaleLowerCase().indexOf((f[t]+"").toLocaleLowerCase())>=0||void 0===f[t]||f[t]===("function"==typeof V[t].filterValue?V[t].filterValue(e):V[t].value(e)))))).map((e=>Object.assign({},e,{$sortOn:B(e),$expanded:null!==h&&p.indexOf(e[h])>=0}))).sort(((e,t)=>d?e.$sortOn>t.$sortOn?u:e.$sortOn<t.$sortOn?-u:0:0))),536870928&e.$$.dirty[0]&&L&&s&&c&&(n(20,j={}),s.forEach((e=>{"function"==typeof e.filterOptions?n(20,j[e.key]=e.filterOptions(c),j):Array.isArray(e.filterOptions)&&n(20,j[e.key]=e.filterOptions.map((e=>({name:e,value:e}))),j)})))},[d,u,f,a,s,g,$,y,v,x,_,w,b,N,k,E,C,O,T,A,j,l,L,e=>[].concat(e).filter((e=>"string"==typeof e&&""!==e)).join(" "),I,M,D,K,p,c,i,h,m,B,V,r,o,function(e){f[e.key]=this.value,n(2,f),n(4,s),n(20,j)},function(e){f[e.key]=function(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}(this),n(2,f),n(4,s),n(20,j)},(e,t)=>I(t,e),(e,t,n)=>{K(n,e,t.key)},(e,t)=>D(t,e),(e,t)=>{M(t,e)}]}class Ee extends class{$destroy(){U(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){var t;super(),document.getElementById("svelte-dsaf7t-style")||((t=y("style")).id="svelte-dsaf7t-style",t.textContent="table.svelte-dsaf7t.svelte-dsaf7t{width:100%}.isSortable.svelte-dsaf7t.svelte-dsaf7t{cursor:pointer}.isClickable.svelte-dsaf7t.svelte-dsaf7t{cursor:pointer}tr.svelte-dsaf7t th select.svelte-dsaf7t{width:100%}",h(document.head,t)),X(this,e,ke,Ne,s,{columns:4,rows:29,c_rows:3,sortOrders:30,sortBy:0,sortOrder:1,filterSelections:2,expanded:28,expandRowKey:31,expandSingle:32,iconAsc:5,iconDesc:6,iconSortable:7,iconExpand:8,iconExpanded:9,showExpandIcon:10,classNameTable:11,classNameThead:12,classNameTbody:13,classNameSelect:14,classNameRow:15,classNameCell:16,classNameRowExpanded:17,classNameExpandedContent:18,classNameCellExpand:19},[-1,-1])}}export{Ee as default};
//# sourceMappingURL=SvelteTable.mjs.map
