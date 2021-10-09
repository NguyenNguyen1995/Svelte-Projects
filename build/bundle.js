var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function a(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function i(t){let n;return c(t,(t=>n=t))(),n}function u(t,n,e){t.$$.on_destroy.push(c(n,e))}function l(t,n,e,o){if(t){const r=f(t,n,e,o);return t[0](r)}}function f(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function p(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function d(t,n,e,o,r,a){if(r){const s=f(n,e,o,a);t.p(s,r)}}function h(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function $(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function m(t,n){const e={};n=new Set(n);for(const o in t)n.has(o)||"$"===o[0]||(e[o]=t[o]);return e}function g(n){return n&&a(n.destroy)?n.destroy:t}function v(t,n){t.appendChild(n)}function b(t,n,e){t.insertBefore(n,e||null)}function y(t){t.parentNode.removeChild(t)}function x(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function _(){return w(" ")}function E(){return w("")}function R(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function k(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}let P;function A(t){P=t}function S(){if(!P)throw new Error("Function called outside component initialization");return P}function N(t,n){S().$$.context.set(t,n)}function C(t){return S().$$.context.get(t)}const L=[],O=[],I=[],T=[],j=Promise.resolve();let U=!1;function M(){U||(U=!0,j.then(z))}function F(t){I.push(t)}let H=!1;const q=new Set;function z(){if(!H){H=!0;do{for(let t=0;t<L.length;t+=1){const n=L[t];A(n),B(n.$$)}for(A(null),L.length=0;O.length;)O.pop()();for(let t=0;t<I.length;t+=1){const n=I[t];q.has(n)||(q.add(n),n())}I.length=0}while(L.length);for(;T.length;)T.pop()();U=!1,H=!1,q.clear()}}function B(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(F)}}const K=new Set;let Y;function D(){Y={r:0,c:[],p:Y}}function G(){Y.r||r(Y.c),Y=Y.p}function J(t,n){t&&t.i&&(K.delete(t),t.i(n))}function Q(t,n,e,o){if(t&&t.o){if(K.has(t))return;K.add(t),Y.c.push((()=>{K.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function V(t){return"object"==typeof t&&null!==t?t:{}}function W(t){t&&t.c()}function X(t,n,o,s){const{fragment:c,on_mount:i,on_destroy:u,after_update:l}=t.$$;c&&c.m(n,o),s||F((()=>{const n=i.map(e).filter(a);u?u.push(...n):r(n),t.$$.on_mount=[]})),l.forEach(F)}function Z(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function tt(n,e,a,s,c,i,u,l=[-1]){const f=P;A(n);const p=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:o(),dirty:l,skip_bound:!1,root:e.target||f.$$.root};u&&u(p.root);let d=!1;if(p.ctx=a?a(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return p.ctx&&c(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),d&&function(t,n){-1===t.$$.dirty[0]&&(L.push(t),M(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],p.update(),d=!0,r(p.before_update),p.fragment=!!s&&s(p.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);p.fragment&&p.fragment.l(t),t.forEach(y)}else p.fragment&&p.fragment.c();e.intro&&J(n.$$.fragment),X(n,e.target,e.anchor,e.customElement),z()}A(f)}class nt{$destroy(){Z(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const et=t=>void 0===t,ot=t=>"number"==typeof t;function rt(){let t=0;return()=>t++}const at="undefined"==typeof window;function st(t,n,e){return t.addEventListener(n,e),()=>t.removeEventListener(n,e)}const ct=[];function it(n,e=t){let o;const r=new Set;function a(t){if(s(n,t)&&(n=t,o)){const t=!ct.length;for(const t of r)t[1](),ct.push(t,n);if(t){for(let t=0;t<ct.length;t+=2)ct[t][0](ct[t+1]);ct.length=0}}}return{set:a,update:function(t){a(t(n))},subscribe:function(s,c=t){const i=[s,c];return r.add(i),1===r.size&&(o=e(a)||t),s(n),()=>{r.delete(i),0===r.size&&(o(),o=null)}}}}function ut(n,e,o){const s=!Array.isArray(n),i=s?[n]:n,u=e.length<2;return l=n=>{let o=!1;const l=[];let f=0,p=t;const d=()=>{if(f)return;p();const o=e(s?l[0]:l,n);u?n(o):p=a(o)?o:t},h=i.map(((t,n)=>c(t,(t=>{l[n]=t,f&=~(1<<n),o&&d()}),(()=>{f|=1<<n}))));return o=!0,d(),function(){r(h),p()}},{subscribe:it(o,l).subscribe};var l}const lt=t=>`@@svnav-ctx__${t}`,ft=lt("LOCATION"),pt=lt("ROUTER"),dt=lt("ROUTE"),ht=lt("ROUTE_PARAMS"),$t=lt("FOCUS_ELEM"),mt=/^:(.+)/,gt=(t,n)=>t.substr(0,n.length)===n,vt=t=>"*"===t[0],bt=t=>t.replace(/(^\/+|\/+$)/g,"");function yt(t,n=!1){const e=bt(t).split("/");return n?e.filter(Boolean):e}const xt=(t,n)=>t+(n?`?${n}`:""),wt=t=>`/${bt(t)}`;function _t(...t){const n=t.map((t=>yt(t,!0).join("/"))).join("/");return wt(n)}const Et={1:"Link",2:"Route",3:"Router",4:"useFocus",5:"useLocation",6:"useMatch",7:"useNavigate",8:"useParams",9:"useResolvable",10:"useResolve",11:"navigate"},Rt=t=>Et[t];function kt(t,n,e,o){const r=e&&function(t,n){let e;return 2===t?e=n.path?`path="${n.path}"`:"default":1===t?e=`to="${n.to}"`:3===t&&(e=`basepath="${n.basepath||""}"`),`<${Rt(t)} ${e||""} />`}(o||t,e),a=r?`\n\nOccurred in: ${r}`:"",s=Rt(t);return`<${s}> ${"function"==typeof n?n(s):n}${a}`}const Pt=t=>(...n)=>t(kt(...n)),At=Pt((t=>{throw new Error(t)})),St=Pt(console.warn);function Nt(t,n){return{route:t,score:t.default?0:yt(t.fullPath).reduce(((t,n)=>{let e=t;return e+=4,(t=>""===t)(n)?e+=1:(t=>mt.test(t))(n)?e+=2:vt(n)?e-=5:e+=3,e}),0),index:n}}function Ct(t,n){let e,o;const[r]=n.split("?"),a=yt(r),s=""===a[0],c=function(t){return t.map(Nt).sort(((t,n)=>t.score<n.score?1:t.score>n.score?-1:t.index-n.index))}(t);for(let t=0,r=c.length;t<r;t++){const{route:r}=c[t];let i=!1;const u={},l=t=>({...r,params:u,uri:t});if(r.default){o=l(n);continue}const f=yt(r.fullPath),p=Math.max(a.length,f.length);let d=0;for(;d<p;d++){const t=f[d],n=a[d];if(!et(t)&&vt(t)){const n="*"===t?"*":t.slice(1);u[n]=a.slice(d).map(decodeURIComponent).join("/");break}if(et(n)){i=!0;break}const e=mt.exec(t);if(e&&!s){const t=decodeURIComponent(n);u[e[1]]=t}else if(t!==n){i=!0;break}}if(!i){e=l(_t(...a.slice(0,d)));break}}return e||o||null}function Lt(t,n){return Ct([t],n)}function Ot(t,n){const{pathname:e,hash:o="",search:r="",state:a}=t,s=yt(n,!0),c=yt(e,!0);for(;s.length;)s[0]!==c[0]&&At(3,`Invalid state: All locations must begin with the basepath "${n}", found "${e}"`),s.shift(),c.shift();return{pathname:_t(...c),hash:o,search:r,state:a}}const It=t=>1===t.length?"":t;function Tt(t){const n=t.indexOf("?"),e=t.indexOf("#"),o=-1!==n,r=-1!==e,a=r?It(t.substr(e)):"",s=r?t.substr(0,e):t,c=o?It(s.substr(n)):"";return{pathname:o?s.substr(0,n):s,search:c,hash:a}}function jt(t,n,e){return _t(e,function(t,n){if(gt(t,"/"))return t;const[e,o]=t.split("?"),[r]=n.split("?"),a=yt(e),s=yt(r);if(""===a[0])return xt(r,o);if(!gt(a[0],".")){const t=s.concat(a).join("/");return xt(("/"===r?"":"/")+t,o)}const c=s.concat(a),i=[];return c.forEach((t=>{".."===t?i.pop():"."!==t&&i.push(t)})),xt(`/${i.join("/")}`,o)}(t,n))}function Ut(t,n){const e=wt(t.replace(/\*.*$/,""));const o=yt(e,!0),r=Lt({fullPath:e},_t(...yt(n,!0).slice(0,o.length)));return r&&r.uri}const Mt="POP";function Ft(t){return{...t.location,pathname:encodeURI(decodeURI(t.location.pathname)),state:t.history.state,_key:t.history.state&&t.history.state._key||"initial"}}function Ht(t,n){return{...Tt(n),state:t}}const qt=!(at||!window.document||!window.document.createElement),zt=!at&&"null"===window.location.origin,Bt=function(t){let n=[],e=Ft(t),o=Mt;const r=(t=n)=>t.forEach((t=>t({location:e,action:o})));return{get location(){return e},listen(a){n.push(a);r([a]);const s=st(t,"popstate",(()=>{e=Ft(t),o=Mt,r([a])}));return()=>{s(),n=n.filter((t=>t!==a))}},navigate(n,a){const{state:s={},replace:c=!1}=a||{};if(o=c?"REPLACE":"PUSH",ot(n))a&&St(11,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),o=Mt,t.history.go(n);else{const e={...s,_key:Math.random().toString(36).substring(2)};try{t.history[c?"replaceState":"pushState"](e,"",n)}catch(e){t.location[c?"replace":"assign"](n)}}e=Ft(t),r()}}}(qt&&!zt?window:function(t="/"){let n=0,e=[Ht(null,t)];return{get entries(){return e},get location(){return e[n]},addEventListener(){},removeEventListener(){},history:{get state(){return e[n].state},pushState(t,o,r){n++,e=e.slice(0,n),e.push(Ht(t,r))},replaceState(t,o,r){e[n]=Ht(t,r)},go(t){const o=n+t;o<0||o>e.length-1||(n=o)}}}}()),{navigate:Kt}=Bt;let Yt=null,Dt=!0;function Gt(t){(!Yt||t.level>Yt.level||t.level===Yt.level&&function(t,n){const e=document.querySelectorAll("[data-svnav-router]");for(let o=0;o<e.length;o++){const r=e[o],a=Number(r.dataset.svnavRouter);if(a===t)return!0;if(a===n)return!1}return!1}(t.routerId,Yt.routerId))&&(Yt=t)}function Jt(t){if(!t)return!1;const n="tabindex";try{if(!t.hasAttribute(n)){let e;t.setAttribute(n,"-1");const o=()=>{t.removeAttribute(n),e()};e=st(t,"blur",o)}return t.focus(),document.activeElement===t}catch(t){return!1}}function Qt(t,n){return Number(t.dataset.svnavRouteEnd)===n}function Vt(t,n=document){return n.querySelector(t)}function Wt(t){Promise.resolve(i(t.focusElement)).then((n=>{const e=n||function(t){let n=Vt(`[data-svnav-route-start="${t}"]`).nextElementSibling;for(;!Qt(n,t);){if(/^H[1-6]$/i.test(n.tagName))return n;const t=Vt("h1,h2,h3,h4,h5,h6",n);if(t)return t;n=n.nextElementSibling}return null}(t.id);e||St(3,'Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don\'t want this Route or Router to manage focus, pass "primary={false}" to it.',t,2);Jt(e)||Jt(document.documentElement)}))}const Xt=(t,n,e)=>(o,r)=>(M(),j).then((()=>{if(Yt&&!Dt){if(o&&Wt(Yt.route),t.announcements&&r){const{path:o,fullPath:r,meta:a,params:s,uri:c}=Yt.route,u=t.createAnnouncement({path:o,fullPath:r,meta:a,params:s,uri:c},i(e));Promise.resolve(u).then((t=>{n.set(t)}))}Yt=null}else Dt=!1}));function Zt(t){let n,e,o,r,a;const s=t[20].default,c=l(s,t,t[19],null);let i=t[2]&&t[4]&&t[1].announcements&&function(t){let n,e;return{c(){n=x("div"),e=w(t[0]),R(n,"role","status"),R(n,"aria-atomic","true"),R(n,"aria-live","polite"),R(n,"style","position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;")},m(t,o){b(t,n,o),v(n,e)},p(t,n){1&n[0]&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(e,t[0])},d(t){t&&y(n)}}}(t);return{c(){n=x("div"),e=_(),c&&c.c(),o=_(),i&&i.c(),r=E(),k(n,"display","none"),R(n,"aria-hidden","true"),R(n,"data-svnav-router",t[3])},m(t,s){b(t,n,s),b(t,e,s),c&&c.m(t,s),b(t,o,s),i&&i.m(t,s),b(t,r,s),a=!0},p(t,n){c&&c.p&&(!a||524288&n[0])&&d(c,s,t,t[19],a?p(s,t[19],n,null):h(t[19]),null),t[2]&&t[4]&&t[1].announcements&&i.p(t,n)},i(t){a||(J(c,t),a=!0)},o(t){Q(c,t),a=!1},d(t){t&&y(n),t&&y(e),c&&c.d(t),t&&y(o),i&&i.d(t),t&&y(r)}}}const tn=rt(),nn="/";function en(t,n,e){let o,r,a,s,c,{$$slots:i={},$$scope:l}=n,{basepath:f=nn}=n,{url:p=null}=n,{history:d=Bt}=n,{primary:h=!0}=n,{a11y:$={}}=n;const m={createAnnouncement:t=>`Navigated to ${t.uri}`,announcements:!0,...$},g=f,v=wt(f),b=C(ft),y=C(pt),x=!b,w=tn(),_=h&&!(y&&!y.manageFocus),E=it("");u(t,E,(t=>e(0,c=t)));const R=it([]);u(t,R,(t=>e(18,s=t)));const k=it(null);u(t,k,(t=>e(16,r=t)));let P=!1;const A=x?0:y.level+1,L=x?it(Ot(at?Tt(p):d.location,v)):b;u(t,L,(t=>e(15,o=t)));const O=it(o);u(t,O,(t=>e(17,a=t)));const I=Xt(m,E,L),T=t=>n=>n.filter((n=>n.id!==t));var j;return x||f===nn||St(3,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:f}),x&&(j=()=>d.listen((t=>{const n=Ot(t.location,v);O.set(o),L.set(n)})),S().$$.on_mount.push(j),N(ft,L)),N(pt,{activeRoute:k,registerRoute:function(t){if(at){if(P)return;const n=Lt(t,o.pathname);if(n)return P=!0,n}else R.update((n=>{const e=T(t.id)(n);return e.push(t),e}))},unregisterRoute:function(t){R.update(T(t))},manageFocus:_,level:A,id:w,history:x?d:y.history,basepath:x?v:y.basepath}),t.$$set=t=>{"basepath"in t&&e(10,f=t.basepath),"url"in t&&e(11,p=t.url),"history"in t&&e(12,d=t.history),"primary"in t&&e(13,h=t.primary),"a11y"in t&&e(14,$=t.a11y),"$$scope"in t&&e(19,l=t.$$scope)},t.$$.update=()=>{if(1024&t.$$.dirty[0]&&f!==g&&St(3,'You cannot change the "basepath" prop. It is ignored.'),294912&t.$$.dirty[0]){const t=Ct(s,o.pathname);k.set(t)}if(163840&t.$$.dirty[0]&&x){const t=!!o.hash,n=!t&&_,e=!t||o.pathname!==a.pathname;I(n,e)}65536&t.$$.dirty[0]&&_&&r&&r.primary&&Gt({level:A,routerId:w,route:r})},[c,m,x,w,_,E,R,k,L,O,f,p,d,h,$,o,r,a,s,l,i]}var on=class extends nt{constructor(t){super(),tt(this,t,en,Zt,s,{basepath:10,url:11,history:12,primary:13,a11y:14},null,[-1,-1])}};function rn(t,n,e=pt,o=3){C(e)||At(t,(t=>`You cannot use ${t} outside of a ${Rt(o)}.`),n)}function an(){return rn(5),(t=>{const{subscribe:n}=C(t);return{subscribe:n}})(ft)}function sn(){const t=C(dt);return t?ut(t,(t=>t.base)):it("/")}function cn(){rn(7);const t=function(){rn(10);const t=sn(),{basepath:n}=C(pt);return e=>jt(e,i(t),n)}(),{navigate:n}=function(){const{history:t}=C(pt);return t}();return(e,o)=>{const r=ot(e)?e:t(e);return n(r,o)}}const un=t=>({params:16&t,location:8&t}),ln=t=>({params:at?i(t[9]):t[4],location:t[3],navigate:t[10]});function fn(t){let n,e;return n=new on({props:{primary:t[1],$$slots:{default:[hn]},$$scope:{ctx:t}}}),{c(){W(n.$$.fragment)},m(t,o){X(n,t,o),e=!0},p(t,e){const o={};2&e&&(o.primary=t[1]),264217&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(J(n.$$.fragment,t),e=!0)},o(t){Q(n.$$.fragment,t),e=!1},d(t){Z(n,t)}}}function pn(t){let n;const e=t[17].default,o=l(e,t,t[18],ln);return{c(){o&&o.c()},m(t,e){o&&o.m(t,e),n=!0},p(t,r){o&&o.p&&(!n||262168&r)&&d(o,e,t,t[18],n?p(e,t[18],r,un):h(t[18]),ln)},i(t){n||(J(o,t),n=!0)},o(t){Q(o,t),n=!1},d(t){o&&o.d(t)}}}function dn(t){let e,o,r;const a=[{location:t[3]},{navigate:t[10]},at?i(t[9]):t[4],t[11]];var s=t[0];function c(t){let e={};for(let t=0;t<a.length;t+=1)e=n(e,a[t]);return{props:e}}return s&&(e=new s(c())),{c(){e&&W(e.$$.fragment),o=E()},m(t,n){e&&X(e,t,n),b(t,o,n),r=!0},p(t,n){const r=3608&n?function(t,n){const e={},o={},r={$$scope:1};let a=t.length;for(;a--;){const s=t[a],c=n[a];if(c){for(const t in s)t in c||(o[t]=1);for(const t in c)r[t]||(e[t]=c[t],r[t]=1);t[a]=c}else for(const t in s)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}(a,[8&n&&{location:t[3]},1024&n&&{navigate:t[10]},528&n&&V(at?i(t[9]):t[4]),2048&n&&V(t[11])]):{};if(s!==(s=t[0])){if(e){D();const t=e;Q(t.$$.fragment,1,0,(()=>{Z(t,1)})),G()}s?(e=new s(c()),W(e.$$.fragment),J(e.$$.fragment,1),X(e,o.parentNode,o)):e=null}else s&&e.$set(r)},i(t){r||(e&&J(e.$$.fragment,t),r=!0)},o(t){e&&Q(e.$$.fragment,t),r=!1},d(t){t&&y(o),e&&Z(e,t)}}}function hn(t){let n,e,o,r;const a=[dn,pn],s=[];function c(t,n){return null!==t[0]?0:1}return n=c(t),e=s[n]=a[n](t),{c(){e.c(),o=E()},m(t,e){s[n].m(t,e),b(t,o,e),r=!0},p(t,r){let i=n;n=c(t),n===i?s[n].p(t,r):(D(),Q(s[i],1,1,(()=>{s[i]=null})),G(),e=s[n],e?e.p(t,r):(e=s[n]=a[n](t),e.c()),J(e,1),e.m(o.parentNode,o))},i(t){r||(J(e),r=!0)},o(t){Q(e),r=!1},d(t){s[n].d(t),t&&y(o)}}}function $n(t){let n,e,o,r,a,s=t[2]&&fn(t);return{c(){n=x("div"),e=_(),s&&s.c(),o=_(),r=x("div"),k(n,"display","none"),R(n,"aria-hidden","true"),R(n,"data-svnav-route-start",t[5]),k(r,"display","none"),R(r,"aria-hidden","true"),R(r,"data-svnav-route-end",t[5])},m(t,c){b(t,n,c),b(t,e,c),s&&s.m(t,c),b(t,o,c),b(t,r,c),a=!0},p(t,[n]){t[2]?s?(s.p(t,n),4&n&&J(s,1)):(s=fn(t),s.c(),J(s,1),s.m(o.parentNode,o)):s&&(D(),Q(s,1,1,(()=>{s=null})),G())},i(t){a||(J(s),a=!0)},o(t){Q(s),a=!1},d(t){t&&y(n),t&&y(e),s&&s.d(t),t&&y(o),t&&y(r)}}}const mn=rt();function gn(t,e,o){let r;const a=["path","component","meta","primary"];let s,c,i,l,f=m(e,a),{$$slots:p={},$$scope:d}=e,{path:h=""}=e,{component:g=null}=e,{meta:v={}}=e,{primary:b=!0}=e;rn(2,e);const y=mn(),{registerRoute:x,unregisterRoute:w,activeRoute:_}=C(pt);u(t,_,(t=>o(15,s=t)));const E=sn();u(t,E,(t=>o(16,i=t)));const R=an();u(t,R,(t=>o(3,c=t)));const k=it(null);let P;const A=it(),L=it({});u(t,L,(t=>o(4,l=t))),N(dt,A),N(ht,L),N($t,k);const O=cn();var I;return at||(I=()=>w(y),S().$$.on_destroy.push(I)),t.$$set=t=>{o(23,e=n(n({},e),$(t))),o(11,f=m(e,a)),"path"in t&&o(12,h=t.path),"component"in t&&o(0,g=t.component),"meta"in t&&o(13,v=t.meta),"primary"in t&&o(1,b=t.primary),"$$scope"in t&&o(18,d=t.$$scope)},t.$$.update=()=>{if(77834&t.$$.dirty){const t=""===h,n=_t(i,h),e={id:y,path:h,meta:v,default:t,fullPath:t?"":n,base:t?i:Ut(n,c.pathname),primary:b,focusElement:k};A.set(e),o(14,P=x(e))}if(49152&t.$$.dirty&&o(2,r=!!(P||s&&s.id===y)),49156&t.$$.dirty&&r){const{params:t}=P||s;L.set(t)}},e=$(e),[g,b,r,c,l,y,_,E,R,L,O,f,h,v,P,s,i,p,d]}var vn=class extends nt{constructor(t){super(),tt(this,t,gn,$n,s,{path:12,component:0,meta:13,primary:1})}};const bn=(t=>(n,e=Kt)=>({destroy:st(n,"click",(n=>{const o=t(n);if(o&&""===o.target&&function(t){return!t.defaultPrevented&&0===t.button&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(n)){n.preventDefault();const t=o.pathname+o.search+o.hash;e(t,{replace:o.hasAttribute("replace")})}}))}))((t=>t.currentTarget));function yn(n){let e,o,a,s,c,i,u,l,f,p,d,h,$,m,w,E,k,P;return{c(){e=x("nav"),o=x("div"),a=x("a"),a.textContent="Svelte Projects",s=_(),c=x("button"),c.innerHTML='<span class="navbar-toggler-icon"></span>',i=_(),u=x("div"),l=x("ul"),f=x("li"),p=x("a"),p.textContent="Home",d=_(),h=x("li"),$=x("a"),$.textContent="Library",m=_(),w=x("li"),E=x("a"),E.textContent="Calculator",R(a,"class","navbar-brand"),R(a,"href",""),R(c,"class","navbar-toggler"),R(c,"type","button"),R(c,"data-bs-toggle","collapse"),R(c,"data-bs-target","#navbarNav"),R(c,"aria-controls","navbarNav"),R(c,"aria-expanded","false"),R(c,"aria-label","Toggle navigation"),R(p,"class","nav-link active"),R(p,"aria-current","page"),R(p,"href",""),R(f,"class","nav-item"),R($,"class","nav-link"),R($,"href","library"),R(h,"class","nav-item"),R(E,"class","nav-link"),R(E,"href","calculator"),R(w,"class","nav-item"),R(l,"class","navbar-nav ms-auto"),R(u,"class","collapse navbar-collapse"),R(u,"id","navbarNav"),R(o,"class","container-fluid"),R(e,"class","navbar navbar-expand-lg navbar-light bg-light svelte-n0u60b")},m(t,n){b(t,e,n),v(e,o),v(o,a),v(o,s),v(o,c),v(o,i),v(o,u),v(u,l),v(l,f),v(f,p),v(l,d),v(l,h),v(h,$),v(l,m),v(l,w),v(w,E),k||(P=[g(bn.call(null,a)),g(bn.call(null,p)),g(bn.call(null,$)),g(bn.call(null,E))],k=!0)},p:t,i:t,o:t,d(t){t&&y(e),k=!1,r(P)}}}class xn extends nt{constructor(t){super(),tt(this,t,null,yn,s,{})}}function wn(n){let e;return{c(){e=x("h1"),e.textContent="This is home page",R(e,"class","text-center svelte-1tdqz32")},m(t,n){b(t,e,n)},p:t,i:t,o:t,d(t){t&&y(e)}}}class _n extends nt{constructor(t){super(),tt(this,t,null,wn,s,{})}}function En(n){let e;return{c(){e=x("div"),e.innerHTML='<div class="container"><div class="row justify-content-center"><div class="col-md-12 text-center"><span class="display-1 d-block">404</span> \n                <div class="mb-4 lead">The page you are looking for was not found.</div> \n                <a href="/" class="btn btn-link">Back to Home</a></div></div></div>',R(e,"class","page-wrap d-flex flex-row")},m(t,n){b(t,e,n)},p:t,i:t,o:t,d(t){t&&y(e)}}}class Rn extends nt{constructor(t){super(),tt(this,t,null,En,s,{})}}function kn(t){let n,e;return n=new _n({}),{c(){W(n.$$.fragment)},m(t,o){X(n,t,o),e=!0},i(t){e||(J(n.$$.fragment,t),e=!0)},o(t){Q(n.$$.fragment,t),e=!1},d(t){Z(n,t)}}}function Pn(t){let n,e;return n=new Rn({}),{c(){W(n.$$.fragment)},m(t,o){X(n,t,o),e=!0},i(t){e||(J(n.$$.fragment,t),e=!0)},o(t){Q(n.$$.fragment,t),e=!1},d(t){Z(n,t)}}}function An(t){let n,e,o,r,a,s,c,i;return e=new xn({}),a=new vn({props:{path:"",$$slots:{default:[kn]},$$scope:{ctx:t}}}),c=new vn({props:{path:"*",$$slots:{default:[Pn]},$$scope:{ctx:t}}}),{c(){n=x("div"),W(e.$$.fragment),o=_(),r=x("div"),W(a.$$.fragment),s=_(),W(c.$$.fragment),R(r,"class","container-fluid h-100"),R(n,"class","d-flex flex-column h-100")},m(t,u){b(t,n,u),X(e,n,null),v(n,o),v(n,r),X(a,r,null),v(r,s),X(c,r,null),i=!0},p(t,n){const e={};1&n&&(e.$$scope={dirty:n,ctx:t}),a.$set(e);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){i||(J(e.$$.fragment,t),J(a.$$.fragment,t),J(c.$$.fragment,t),i=!0)},o(t){Q(e.$$.fragment,t),Q(a.$$.fragment,t),Q(c.$$.fragment,t),i=!1},d(t){t&&y(n),Z(e),Z(a),Z(c)}}}function Sn(t){let n,e;return n=new on({props:{basepath:process.env.PUBLIC_URL,$$slots:{default:[An]},$$scope:{ctx:t}}}),{c(){W(n.$$.fragment)},m(t,o){X(n,t,o),e=!0},p(t,[e]){const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(J(n.$$.fragment,t),e=!0)},o(t){Q(n.$$.fragment,t),e=!1},d(t){Z(n,t)}}}return new class extends nt{constructor(t){super(),tt(this,t,null,Sn,s,{})}}({target:document.body,props:{name:"world"}})}();
