var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function i(t){let n;return a(t,(t=>n=t))(),n}function u(t,n,e){t.$$.on_destroy.push(a(n,e))}function l(t,n,e,o){if(t){const r=f(t,n,e,o);return t[0](r)}}function f(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function p(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function $(t,n,e,o,r,s){if(r){const c=f(n,e,o,s);t.p(c,r)}}function d(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function m(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function h(t,n){const e={};n=new Set(n);for(const o in t)n.has(o)||"$"===o[0]||(e[o]=t[o]);return e}function g(t,n){t.appendChild(n)}function v(t,n,e){t.insertBefore(n,e||null)}function y(t){t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function x(t){return document.createTextNode(t)}function w(){return x(" ")}function E(){return x("")}function _(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function k(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in n)null==n[o]?t.removeAttribute(o):"style"===o?t.style.cssText=n[o]:"__value"===o?t.value=t[o]=n[o]:e[o]&&e[o].set?t[o]=n[o]:_(t,o,n[o])}function P(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}let R;function A(t){R=t}function S(){if(!R)throw new Error("Function called outside component initialization");return R}function C(){const t=S();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n,e=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e,!1,n),o}(n,e);o.slice().forEach((n=>{n.call(t,r)}))}}}function N(t,n){S().$$.context.set(t,n)}function O(t){return S().$$.context.get(t)}const j=[],L=[],I=[],T=[],U=Promise.resolve();let M=!1;function F(){M||(M=!0,U.then(K))}function H(t){I.push(t)}let q=!1;const z=new Set;function K(){if(!q){q=!0;do{for(let t=0;t<j.length;t+=1){const n=j[t];A(n),B(n.$$)}for(A(null),j.length=0;L.length;)L.pop()();for(let t=0;t<I.length;t+=1){const n=I[t];z.has(n)||(z.add(n),n())}I.length=0}while(j.length);for(;T.length;)T.pop()();M=!1,q=!1,z.clear()}}function B(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(H)}}const Y=new Set;let D;function G(){D={r:0,c:[],p:D}}function J(){D.r||r(D.c),D=D.p}function Q(t,n){t&&t.i&&(Y.delete(t),t.i(n))}function V(t,n,e,o){if(t&&t.o){if(Y.has(t))return;Y.add(t),D.c.push((()=>{Y.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function W(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],a=n[s];if(a){for(const t in c)t in a||(o[t]=1);for(const t in a)r[t]||(e[t]=a[t],r[t]=1);t[s]=a}else for(const t in c)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function X(t){return"object"==typeof t&&null!==t?t:{}}function Z(t){t&&t.c()}function tt(t,n,o,c){const{fragment:a,on_mount:i,on_destroy:u,after_update:l}=t.$$;a&&a.m(n,o),c||H((()=>{const n=i.map(e).filter(s);u?u.push(...n):r(n),t.$$.on_mount=[]})),l.forEach(H)}function nt(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function et(n,e,s,c,a,i,u,l=[-1]){const f=R;A(n);const p=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:o(),dirty:l,skip_bound:!1,root:e.target||f.$$.root};u&&u(p.root);let $=!1;if(p.ctx=s?s(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return p.ctx&&a(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),$&&function(t,n){-1===t.$$.dirty[0]&&(j.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],p.update(),$=!0,r(p.before_update),p.fragment=!!c&&c(p.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);p.fragment&&p.fragment.l(t),t.forEach(y)}else p.fragment&&p.fragment.c();e.intro&&Q(n.$$.fragment),tt(n,e.target,e.anchor,e.customElement),K()}A(f)}class ot{$destroy(){nt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const rt=t=>void 0===t,st=t=>"function"==typeof t,ct=t=>"number"==typeof t;function at(){let t=0;return()=>t++}const it="undefined"==typeof window;function ut(t,n,e){return t.addEventListener(n,e),()=>t.removeEventListener(n,e)}const lt=[];function ft(n,e=t){let o;const r=new Set;function s(t){if(c(n,t)&&(n=t,o)){const t=!lt.length;for(const t of r)t[1](),lt.push(t,n);if(t){for(let t=0;t<lt.length;t+=2)lt[t][0](lt[t+1]);lt.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(c,a=t){const i=[c,a];return r.add(i),1===r.size&&(o=e(s)||t),c(n),()=>{r.delete(i),0===r.size&&(o(),o=null)}}}}function pt(n,e,o){const c=!Array.isArray(n),i=c?[n]:n,u=e.length<2;return l=n=>{let o=!1;const l=[];let f=0,p=t;const $=()=>{if(f)return;p();const o=e(c?l[0]:l,n);u?n(o):p=s(o)?o:t},d=i.map(((t,n)=>a(t,(t=>{l[n]=t,f&=~(1<<n),o&&$()}),(()=>{f|=1<<n}))));return o=!0,$(),function(){r(d),p()}},{subscribe:ft(o,l).subscribe};var l}const $t=t=>`@@svnav-ctx__${t}`,dt=$t("LOCATION"),mt=$t("ROUTER"),ht=$t("ROUTE"),gt=$t("ROUTE_PARAMS"),vt=$t("FOCUS_ELEM"),yt=/^:(.+)/,bt=(t,n)=>t.substr(0,n.length)===n,xt=t=>"*"===t[0],wt=t=>t.replace(/(^\/+|\/+$)/g,"");function Et(t,n=!1){const e=wt(t).split("/");return n?e.filter(Boolean):e}const _t=(t,n)=>t+(n?`?${n}`:""),kt=t=>`/${wt(t)}`;function Pt(...t){const n=t.map((t=>Et(t,!0).join("/"))).join("/");return kt(n)}const Rt={1:"Link",2:"Route",3:"Router",4:"useFocus",5:"useLocation",6:"useMatch",7:"useNavigate",8:"useParams",9:"useResolvable",10:"useResolve",11:"navigate"},At=t=>Rt[t];function St(t,n,e,o){const r=e&&function(t,n){let e;return 2===t?e=n.path?`path="${n.path}"`:"default":1===t?e=`to="${n.to}"`:3===t&&(e=`basepath="${n.basepath||""}"`),`<${At(t)} ${e||""} />`}(o||t,e),s=r?`\n\nOccurred in: ${r}`:"",c=At(t);return`<${c}> ${st(n)?n(c):n}${s}`}const Ct=t=>(...n)=>t(St(...n)),Nt=Ct((t=>{throw new Error(t)})),Ot=Ct(console.warn);function jt(t,n){return{route:t,score:t.default?0:Et(t.fullPath).reduce(((t,n)=>{let e=t;return e+=4,(t=>""===t)(n)?e+=1:(t=>yt.test(t))(n)?e+=2:xt(n)?e-=5:e+=3,e}),0),index:n}}function Lt(t,n){let e,o;const[r]=n.split("?"),s=Et(r),c=""===s[0],a=function(t){return t.map(jt).sort(((t,n)=>t.score<n.score?1:t.score>n.score?-1:t.index-n.index))}(t);for(let t=0,r=a.length;t<r;t++){const{route:r}=a[t];let i=!1;const u={},l=t=>({...r,params:u,uri:t});if(r.default){o=l(n);continue}const f=Et(r.fullPath),p=Math.max(s.length,f.length);let $=0;for(;$<p;$++){const t=f[$],n=s[$];if(!rt(t)&&xt(t)){const n="*"===t?"*":t.slice(1);u[n]=s.slice($).map(decodeURIComponent).join("/");break}if(rt(n)){i=!0;break}const e=yt.exec(t);if(e&&!c){const t=decodeURIComponent(n);u[e[1]]=t}else if(t!==n){i=!0;break}}if(!i){e=l(Pt(...s.slice(0,$)));break}}return e||o||null}function It(t,n){return Lt([t],n)}function Tt(t,n){const{pathname:e,hash:o="",search:r="",state:s}=t,c=Et(n,!0),a=Et(e,!0);for(;c.length;)c[0]!==a[0]&&Nt(3,`Invalid state: All locations must begin with the basepath "${n}", found "${e}"`),c.shift(),a.shift();return{pathname:Pt(...a),hash:o,search:r,state:s}}const Ut=t=>1===t.length?"":t;function Mt(t){const n=t.indexOf("?"),e=t.indexOf("#"),o=-1!==n,r=-1!==e,s=r?Ut(t.substr(e)):"",c=r?t.substr(0,e):t,a=o?Ut(c.substr(n)):"";return{pathname:o?c.substr(0,n):c,search:a,hash:s}}function Ft(t,n,e){return Pt(e,function(t,n){if(bt(t,"/"))return t;const[e,o]=t.split("?"),[r]=n.split("?"),s=Et(e),c=Et(r);if(""===s[0])return _t(r,o);if(!bt(s[0],".")){const t=c.concat(s).join("/");return _t(("/"===r?"":"/")+t,o)}const a=c.concat(s),i=[];return a.forEach((t=>{".."===t?i.pop():"."!==t&&i.push(t)})),_t(`/${i.join("/")}`,o)}(t,n))}function Ht(t,n){const e=kt(t.replace(/\*.*$/,""));const o=Et(e,!0),r=It({fullPath:e},Pt(...Et(n,!0).slice(0,o.length)));return r&&r.uri}const qt="POP";function zt(t){return{...t.location,pathname:encodeURI(decodeURI(t.location.pathname)),state:t.history.state,_key:t.history.state&&t.history.state._key||"initial"}}function Kt(t,n){return{...Mt(n),state:t}}const Bt=!(it||!window.document||!window.document.createElement),Yt=!it&&"null"===window.location.origin,Dt=function(t){let n=[],e=zt(t),o=qt;const r=(t=n)=>t.forEach((t=>t({location:e,action:o})));return{get location(){return e},listen(s){n.push(s);r([s]);const c=ut(t,"popstate",(()=>{e=zt(t),o=qt,r([s])}));return()=>{c(),n=n.filter((t=>t!==s))}},navigate(n,s){const{state:c={},replace:a=!1}=s||{};if(o=a?"REPLACE":"PUSH",ct(n))s&&Ot(11,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),o=qt,t.history.go(n);else{const e={...c,_key:Math.random().toString(36).substring(2)};try{t.history[a?"replaceState":"pushState"](e,"",n)}catch(e){t.location[a?"replace":"assign"](n)}}e=zt(t),r()}}}(Bt&&!Yt?window:function(t="/"){let n=0,e=[Kt(null,t)];return{get entries(){return e},get location(){return e[n]},addEventListener(){},removeEventListener(){},history:{get state(){return e[n].state},pushState(t,o,r){n++,e=e.slice(0,n),e.push(Kt(t,r))},replaceState(t,o,r){e[n]=Kt(t,r)},go(t){const o=n+t;o<0||o>e.length-1||(n=o)}}}}());let Gt=null,Jt=!0;function Qt(t){(!Gt||t.level>Gt.level||t.level===Gt.level&&function(t,n){const e=document.querySelectorAll("[data-svnav-router]");for(let o=0;o<e.length;o++){const r=e[o],s=Number(r.dataset.svnavRouter);if(s===t)return!0;if(s===n)return!1}return!1}(t.routerId,Gt.routerId))&&(Gt=t)}function Vt(t){if(!t)return!1;const n="tabindex";try{if(!t.hasAttribute(n)){let e;t.setAttribute(n,"-1");const o=()=>{t.removeAttribute(n),e()};e=ut(t,"blur",o)}return t.focus(),document.activeElement===t}catch(t){return!1}}function Wt(t,n){return Number(t.dataset.svnavRouteEnd)===n}function Xt(t,n=document){return n.querySelector(t)}function Zt(t){Promise.resolve(i(t.focusElement)).then((n=>{const e=n||function(t){let n=Xt(`[data-svnav-route-start="${t}"]`).nextElementSibling;for(;!Wt(n,t);){if(/^H[1-6]$/i.test(n.tagName))return n;const t=Xt("h1,h2,h3,h4,h5,h6",n);if(t)return t;n=n.nextElementSibling}return null}(t.id);e||Ot(3,'Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don\'t want this Route or Router to manage focus, pass "primary={false}" to it.',t,2);Vt(e)||Vt(document.documentElement)}))}const tn=(t,n,e)=>(o,r)=>(F(),U).then((()=>{if(Gt&&!Jt){if(o&&Zt(Gt.route),t.announcements&&r){const{path:o,fullPath:r,meta:s,params:c,uri:a}=Gt.route,u=t.createAnnouncement({path:o,fullPath:r,meta:s,params:c,uri:a},i(e));Promise.resolve(u).then((t=>{n.set(t)}))}Gt=null}else Jt=!1}));function nn(t){let n,e,o,r,s;const c=t[20].default,a=l(c,t,t[19],null);let i=t[2]&&t[4]&&t[1].announcements&&function(t){let n,e;return{c(){n=b("div"),e=x(t[0]),_(n,"role","status"),_(n,"aria-atomic","true"),_(n,"aria-live","polite"),_(n,"style","position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;")},m(t,o){v(t,n,o),g(n,e)},p(t,n){1&n[0]&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(e,t[0])},d(t){t&&y(n)}}}(t);return{c(){n=b("div"),e=w(),a&&a.c(),o=w(),i&&i.c(),r=E(),P(n,"display","none"),_(n,"aria-hidden","true"),_(n,"data-svnav-router",t[3])},m(t,c){v(t,n,c),v(t,e,c),a&&a.m(t,c),v(t,o,c),i&&i.m(t,c),v(t,r,c),s=!0},p(t,n){a&&a.p&&(!s||524288&n[0])&&$(a,c,t,t[19],s?p(c,t[19],n,null):d(t[19]),null),t[2]&&t[4]&&t[1].announcements&&i.p(t,n)},i(t){s||(Q(a,t),s=!0)},o(t){V(a,t),s=!1},d(t){t&&y(n),t&&y(e),a&&a.d(t),t&&y(o),i&&i.d(t),t&&y(r)}}}const en=at(),on="/";function rn(t,n,e){let o,r,s,c,a,{$$slots:i={},$$scope:l}=n,{basepath:f=on}=n,{url:p=null}=n,{history:$=Dt}=n,{primary:d=!0}=n,{a11y:m={}}=n;const h={createAnnouncement:t=>`Navigated to ${t.uri}`,announcements:!0,...m},g=f,v=kt(f),y=O(dt),b=O(mt),x=!y,w=en(),E=d&&!(b&&!b.manageFocus),_=ft("");u(t,_,(t=>e(0,a=t)));const k=ft([]);u(t,k,(t=>e(18,c=t)));const P=ft(null);u(t,P,(t=>e(16,r=t)));let R=!1;const A=x?0:b.level+1,C=x?ft(Tt(it?Mt(p):$.location,v)):y;u(t,C,(t=>e(15,o=t)));const j=ft(o);u(t,j,(t=>e(17,s=t)));const L=tn(h,_,C),I=t=>n=>n.filter((n=>n.id!==t));var T;return x||f===on||Ot(3,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:f}),x&&(T=()=>$.listen((t=>{const n=Tt(t.location,v);j.set(o),C.set(n)})),S().$$.on_mount.push(T),N(dt,C)),N(mt,{activeRoute:P,registerRoute:function(t){if(it){if(R)return;const n=It(t,o.pathname);if(n)return R=!0,n}else k.update((n=>{const e=I(t.id)(n);return e.push(t),e}))},unregisterRoute:function(t){k.update(I(t))},manageFocus:E,level:A,id:w,history:x?$:b.history,basepath:x?v:b.basepath}),t.$$set=t=>{"basepath"in t&&e(10,f=t.basepath),"url"in t&&e(11,p=t.url),"history"in t&&e(12,$=t.history),"primary"in t&&e(13,d=t.primary),"a11y"in t&&e(14,m=t.a11y),"$$scope"in t&&e(19,l=t.$$scope)},t.$$.update=()=>{if(1024&t.$$.dirty[0]&&f!==g&&Ot(3,'You cannot change the "basepath" prop. It is ignored.'),294912&t.$$.dirty[0]){const t=Lt(c,o.pathname);P.set(t)}if(163840&t.$$.dirty[0]&&x){const t=!!o.hash,n=!t&&E,e=!t||o.pathname!==s.pathname;L(n,e)}65536&t.$$.dirty[0]&&E&&r&&r.primary&&Qt({level:A,routerId:w,route:r})},[a,h,x,w,E,_,k,P,C,j,f,p,$,d,m,o,r,s,c,l,i]}var sn=class extends ot{constructor(t){super(),et(this,t,rn,nn,c,{basepath:10,url:11,history:12,primary:13,a11y:14},null,[-1,-1])}};function cn(t,n,e=mt,o=3){O(e)||Nt(t,(t=>`You cannot use ${t} outside of a ${At(o)}.`),n)}function an(){return cn(5),(t=>{const{subscribe:n}=O(t);return{subscribe:n}})(dt)}function un(){const{history:t}=O(mt);return t}function ln(){const t=O(ht);return t?pt(t,(t=>t.base)):ft("/")}function fn(){cn(10);const t=ln(),{basepath:n}=O(mt);return e=>Ft(e,i(t),n)}const pn=t=>({params:16&t,location:8&t}),$n=t=>({params:it?i(t[9]):t[4],location:t[3],navigate:t[10]});function dn(t){let n,e;return n=new sn({props:{primary:t[1],$$slots:{default:[gn]},$$scope:{ctx:t}}}),{c(){Z(n.$$.fragment)},m(t,o){tt(n,t,o),e=!0},p(t,e){const o={};2&e&&(o.primary=t[1]),264217&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(Q(n.$$.fragment,t),e=!0)},o(t){V(n.$$.fragment,t),e=!1},d(t){nt(n,t)}}}function mn(t){let n;const e=t[17].default,o=l(e,t,t[18],$n);return{c(){o&&o.c()},m(t,e){o&&o.m(t,e),n=!0},p(t,r){o&&o.p&&(!n||262168&r)&&$(o,e,t,t[18],n?p(e,t[18],r,pn):d(t[18]),$n)},i(t){n||(Q(o,t),n=!0)},o(t){V(o,t),n=!1},d(t){o&&o.d(t)}}}function hn(t){let e,o,r;const s=[{location:t[3]},{navigate:t[10]},it?i(t[9]):t[4],t[11]];var c=t[0];function a(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return c&&(e=new c(a())),{c(){e&&Z(e.$$.fragment),o=E()},m(t,n){e&&tt(e,t,n),v(t,o,n),r=!0},p(t,n){const r=3608&n?W(s,[8&n&&{location:t[3]},1024&n&&{navigate:t[10]},528&n&&X(it?i(t[9]):t[4]),2048&n&&X(t[11])]):{};if(c!==(c=t[0])){if(e){G();const t=e;V(t.$$.fragment,1,0,(()=>{nt(t,1)})),J()}c?(e=new c(a()),Z(e.$$.fragment),Q(e.$$.fragment,1),tt(e,o.parentNode,o)):e=null}else c&&e.$set(r)},i(t){r||(e&&Q(e.$$.fragment,t),r=!0)},o(t){e&&V(e.$$.fragment,t),r=!1},d(t){t&&y(o),e&&nt(e,t)}}}function gn(t){let n,e,o,r;const s=[hn,mn],c=[];function a(t,n){return null!==t[0]?0:1}return n=a(t),e=c[n]=s[n](t),{c(){e.c(),o=E()},m(t,e){c[n].m(t,e),v(t,o,e),r=!0},p(t,r){let i=n;n=a(t),n===i?c[n].p(t,r):(G(),V(c[i],1,1,(()=>{c[i]=null})),J(),e=c[n],e?e.p(t,r):(e=c[n]=s[n](t),e.c()),Q(e,1),e.m(o.parentNode,o))},i(t){r||(Q(e),r=!0)},o(t){V(e),r=!1},d(t){c[n].d(t),t&&y(o)}}}function vn(t){let n,e,o,r,s,c=t[2]&&dn(t);return{c(){n=b("div"),e=w(),c&&c.c(),o=w(),r=b("div"),P(n,"display","none"),_(n,"aria-hidden","true"),_(n,"data-svnav-route-start",t[5]),P(r,"display","none"),_(r,"aria-hidden","true"),_(r,"data-svnav-route-end",t[5])},m(t,a){v(t,n,a),v(t,e,a),c&&c.m(t,a),v(t,o,a),v(t,r,a),s=!0},p(t,[n]){t[2]?c?(c.p(t,n),4&n&&Q(c,1)):(c=dn(t),c.c(),Q(c,1),c.m(o.parentNode,o)):c&&(G(),V(c,1,1,(()=>{c=null})),J())},i(t){s||(Q(c),s=!0)},o(t){V(c),s=!1},d(t){t&&y(n),t&&y(e),c&&c.d(t),t&&y(o),t&&y(r)}}}const yn=at();function bn(t,e,o){let r;const s=["path","component","meta","primary"];let c,a,i,l,f=h(e,s),{$$slots:p={},$$scope:$}=e,{path:d=""}=e,{component:g=null}=e,{meta:v={}}=e,{primary:y=!0}=e;cn(2,e);const b=yn(),{registerRoute:x,unregisterRoute:w,activeRoute:E}=O(mt);u(t,E,(t=>o(15,c=t)));const _=ln();u(t,_,(t=>o(16,i=t)));const k=an();u(t,k,(t=>o(3,a=t)));const P=ft(null);let R;const A=ft(),C=ft({});u(t,C,(t=>o(4,l=t))),N(ht,A),N(gt,C),N(vt,P);const j=function(){cn(7);const t=fn(),{navigate:n}=un();return(e,o)=>{const r=ct(e)?e:t(e);return n(r,o)}}();var L;return it||(L=()=>w(b),S().$$.on_destroy.push(L)),t.$$set=t=>{o(23,e=n(n({},e),m(t))),o(11,f=h(e,s)),"path"in t&&o(12,d=t.path),"component"in t&&o(0,g=t.component),"meta"in t&&o(13,v=t.meta),"primary"in t&&o(1,y=t.primary),"$$scope"in t&&o(18,$=t.$$scope)},t.$$.update=()=>{if(77834&t.$$.dirty){const t=""===d,n=Pt(i,d),e={id:b,path:d,meta:v,default:t,fullPath:t?"":n,base:t?i:Ht(n,a.pathname),primary:y,focusElement:P};A.set(e),o(14,R=x(e))}if(49152&t.$$.dirty&&o(2,r=!!(R||c&&c.id===b)),49156&t.$$.dirty&&r){const{params:t}=R||c;C.set(t)}},e=m(e),[g,y,r,a,l,b,E,_,k,C,j,f,d,v,R,c,i,p,$]}var xn=class extends ot{constructor(t){super(),et(this,t,bn,vn,c,{path:12,component:0,meta:13,primary:1})}};function wn(t){let e,o,r,s;const c=t[13].default,a=l(c,t,t[12],null);let i=[{href:t[0]},t[2],t[1]],u={};for(let t=0;t<i.length;t+=1)u=n(u,i[t]);return{c(){e=b("a"),a&&a.c(),k(e,u)},m(n,c){var i,u,l,f;v(n,e,c),a&&a.m(e,null),o=!0,r||(i=e,u="click",l=t[4],i.addEventListener(u,l,f),s=()=>i.removeEventListener(u,l,f),r=!0)},p(t,[n]){a&&a.p&&(!o||4096&n)&&$(a,c,t,t[12],o?p(c,t[12],n,null):d(t[12]),null),k(e,u=W(i,[(!o||1&n)&&{href:t[0]},4&n&&t[2],2&n&&t[1]]))},i(t){o||(Q(a,t),o=!0)},o(t){V(a,t),o=!1},d(t){t&&y(e),a&&a.d(t),r=!1,s()}}}function En(t,e,o){let r,s,c,a,i;const l=["to","replace","state","getProps"];let f,p=h(e,l),{$$slots:$={},$$scope:d}=e,{to:g}=e,{replace:v=!1}=e,{state:y={}}=e,{getProps:b=null}=e;cn(1,e);const x=an();u(t,x,(t=>o(11,f=t)));const w=C(),E=fn(),{navigate:_}=un();return t.$$set=t=>{o(18,e=n(n({},e),m(t))),o(17,p=h(e,l)),"to"in t&&o(5,g=t.to),"replace"in t&&o(6,v=t.replace),"state"in t&&o(7,y=t.state),"getProps"in t&&o(8,b=t.getProps),"$$scope"in t&&o(12,d=t.$$scope)},t.$$.update=()=>{2080&t.$$.dirty&&o(0,r=E(g,f)),2049&t.$$.dirty&&o(10,s=bt(f.pathname,r)),2049&t.$$.dirty&&o(9,c=r===f.pathname),512&t.$$.dirty&&o(2,a=c?{"aria-current":"page"}:{}),o(1,i=(()=>{if(st(b)){const t=b({location:f,href:r,isPartiallyCurrent:s,isCurrent:c});return{...p,...t}}return p})())},e=m(e),[r,i,a,x,function(t){if(w("click",t),function(t){return!t.defaultPrevented&&0===t.button&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)){t.preventDefault();_(r,{state:y,replace:c||v})}},g,v,y,b,c,s,f,d,$]}var _n=class extends ot{constructor(t){super(),et(this,t,En,wn,c,{to:5,replace:6,state:7,getProps:8})}};function kn(t){let n;return{c(){n=x("Svelte Projects")},m(t,e){v(t,n,e)},d(t){t&&y(n)}}}function Pn(t){let n;return{c(){n=x("Home")},m(t,e){v(t,n,e)},d(t){t&&y(n)}}}function Rn(t){let n;return{c(){n=x("Library")},m(t,e){v(t,n,e)},d(t){t&&y(n)}}}function An(t){let n;return{c(){n=x("Calculator")},m(t,e){v(t,n,e)},d(t){t&&y(n)}}}function Sn(t){let n,e,o,r,s,c,a,i,u,l,f,p,$,d,m,h,x;return o=new _n({props:{class:"navbar-brand",to:"",$$slots:{default:[kn]},$$scope:{ctx:t}}}),l=new _n({props:{class:"nav-link active","aria-current":"page",to:"",$$slots:{default:[Pn]},$$scope:{ctx:t}}}),$=new _n({props:{class:"nav-link",to:"library",$$slots:{default:[Rn]},$$scope:{ctx:t}}}),h=new _n({props:{class:"nav-link",to:"calculator",$$slots:{default:[An]},$$scope:{ctx:t}}}),{c(){n=b("nav"),e=b("div"),Z(o.$$.fragment),r=w(),s=b("button"),s.innerHTML='<span class="navbar-toggler-icon"></span>',c=w(),a=b("div"),i=b("ul"),u=b("li"),Z(l.$$.fragment),f=w(),p=b("li"),Z($.$$.fragment),d=w(),m=b("li"),Z(h.$$.fragment),_(s,"class","navbar-toggler"),_(s,"type","button"),_(s,"data-bs-toggle","collapse"),_(s,"data-bs-target","#navbarNav"),_(s,"aria-controls","navbarNav"),_(s,"aria-expanded","false"),_(s,"aria-label","Toggle navigation"),_(u,"class","nav-item"),_(p,"class","nav-item"),_(m,"class","nav-item"),_(i,"class","navbar-nav ms-auto"),_(a,"class","collapse navbar-collapse"),_(a,"id","navbarNav"),_(e,"class","container-fluid"),_(n,"class","navbar navbar-expand-lg navbar-light bg-light svelte-n0u60b")},m(t,y){v(t,n,y),g(n,e),tt(o,e,null),g(e,r),g(e,s),g(e,c),g(e,a),g(a,i),g(i,u),tt(l,u,null),g(i,f),g(i,p),tt($,p,null),g(i,d),g(i,m),tt(h,m,null),x=!0},p(t,[n]){const e={};1&n&&(e.$$scope={dirty:n,ctx:t}),o.$set(e);const r={};1&n&&(r.$$scope={dirty:n,ctx:t}),l.$set(r);const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),$.$set(s);const c={};1&n&&(c.$$scope={dirty:n,ctx:t}),h.$set(c)},i(t){x||(Q(o.$$.fragment,t),Q(l.$$.fragment,t),Q($.$$.fragment,t),Q(h.$$.fragment,t),x=!0)},o(t){V(o.$$.fragment,t),V(l.$$.fragment,t),V($.$$.fragment,t),V(h.$$.fragment,t),x=!1},d(t){t&&y(n),nt(o),nt(l),nt($),nt(h)}}}class Cn extends ot{constructor(t){super(),et(this,t,null,Sn,c,{})}}function Nn(n){let e;return{c(){e=b("h1"),e.textContent="This is home page",_(e,"class","text-center svelte-1tdqz32")},m(t,n){v(t,e,n)},p:t,i:t,o:t,d(t){t&&y(e)}}}class On extends ot{constructor(t){super(),et(this,t,null,Nn,c,{})}}function jn(t){let n;return{c(){n=x("Back to Home")},m(t,e){v(t,n,e)},d(t){t&&y(n)}}}function Ln(t){let n,e,o,r,s,c,a,i,u,l;return u=new _n({props:{to:"",class:"btn btn-link",$$slots:{default:[jn]},$$scope:{ctx:t}}}),{c(){n=b("div"),e=b("div"),o=b("div"),r=b("div"),s=b("span"),s.textContent="404",c=w(),a=b("div"),a.textContent="The page you are looking for was not found.",i=w(),Z(u.$$.fragment),_(s,"class","display-1 d-block"),_(a,"class","mb-4 lead"),_(r,"class","col-md-12 text-center"),_(o,"class","row justify-content-center"),_(e,"class","container"),_(n,"class","page-wrap d-flex flex-row")},m(t,f){v(t,n,f),g(n,e),g(e,o),g(o,r),g(r,s),g(r,c),g(r,a),g(r,i),tt(u,r,null),l=!0},p(t,[n]){const e={};1&n&&(e.$$scope={dirty:n,ctx:t}),u.$set(e)},i(t){l||(Q(u.$$.fragment,t),l=!0)},o(t){V(u.$$.fragment,t),l=!1},d(t){t&&y(n),nt(u)}}}class In extends ot{constructor(t){super(),et(this,t,null,Ln,c,{})}}function Tn(t){let n,e;return n=new On({}),{c(){Z(n.$$.fragment)},m(t,o){tt(n,t,o),e=!0},i(t){e||(Q(n.$$.fragment,t),e=!0)},o(t){V(n.$$.fragment,t),e=!1},d(t){nt(n,t)}}}function Un(t){let n,e;return n=new In({}),{c(){Z(n.$$.fragment)},m(t,o){tt(n,t,o),e=!0},i(t){e||(Q(n.$$.fragment,t),e=!0)},o(t){V(n.$$.fragment,t),e=!1},d(t){nt(n,t)}}}function Mn(t){let n,e,o,r,s,c,a,i;return e=new Cn({}),s=new xn({props:{path:"/",$$slots:{default:[Tn]},$$scope:{ctx:t}}}),a=new xn({props:{path:"*",$$slots:{default:[Un]},$$scope:{ctx:t}}}),{c(){n=b("div"),Z(e.$$.fragment),o=w(),r=b("div"),Z(s.$$.fragment),c=w(),Z(a.$$.fragment),_(r,"class","container-fluid h-100"),_(n,"class","d-flex flex-column h-100")},m(t,u){v(t,n,u),tt(e,n,null),g(n,o),g(n,r),tt(s,r,null),g(r,c),tt(a,r,null),i=!0},p(t,n){const e={};2&n&&(e.$$scope={dirty:n,ctx:t}),s.$set(e);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),a.$set(o)},i(t){i||(Q(e.$$.fragment,t),Q(s.$$.fragment,t),Q(a.$$.fragment,t),i=!0)},o(t){V(e.$$.fragment,t),V(s.$$.fragment,t),V(a.$$.fragment,t),i=!1},d(t){t&&y(n),nt(e),nt(s),nt(a)}}}function Fn(t){let n,e;return n=new sn({props:{basepath:t[0],$$slots:{default:[Mn]},$$scope:{ctx:t}}}),{c(){Z(n.$$.fragment)},m(t,o){tt(n,t,o),e=!0},p(t,[e]){const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(Q(n.$$.fragment,t),e=!0)},o(t){V(n.$$.fragment,t),e=!1},d(t){nt(n,t)}}}function Hn(t){return[undefined]}return new class extends ot{constructor(t){super(),et(this,t,Hn,Fn,c,{})}}({target:document.body,props:{name:"world",basepath:"/SvelteProjects"}})}();
