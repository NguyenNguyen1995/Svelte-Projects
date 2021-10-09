var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function a(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(n,...e){if(null==n)return t;const r=n.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}function i(t){let n;return c(t,(t=>n=t))(),n}function u(t,n,e){t.$$.on_destroy.push(c(n,e))}function l(t,n,e,r){if(t){const o=f(t,n,e,r);return t[0](o)}}function f(t,e,r,o){return t[1]&&o?n(r.ctx.slice(),t[1](o(e))):r.ctx}function p(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(void 0===n.dirty)return o;if("object"==typeof o){const t=[],e=Math.max(n.dirty.length,o.length);for(let r=0;r<e;r+=1)t[r]=n.dirty[r]|o[r];return t}return n.dirty|o}return n.dirty}function d(t,n,e,r,o,s){if(o){const a=f(n,e,r,s);t.p(a,o)}}function $(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function h(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function m(t,n){const e={};n=new Set(n);for(const r in t)n.has(r)||"$"===r[0]||(e[r]=t[r]);return e}function g(n){return n&&s(n.destroy)?n.destroy:t}function v(t,n){t.appendChild(n)}function y(t,n,e){t.insertBefore(n,e||null)}function b(t){t.parentNode.removeChild(t)}function x(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function E(){return w(" ")}function _(){return w("")}function k(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function R(t,n,e,r){t.style.setProperty(n,e,r?"important":"")}let P;function A(t){P=t}function S(){if(!P)throw new Error("Function called outside component initialization");return P}function N(t,n){S().$$.context.set(t,n)}function C(t){return S().$$.context.get(t)}const O=[],T=[],j=[],I=[],L=Promise.resolve();let U=!1;function M(){U||(U=!0,L.then(z))}function F(t){j.push(t)}let H=!1;const q=new Set;function z(){if(!H){H=!0;do{for(let t=0;t<O.length;t+=1){const n=O[t];A(n),K(n.$$)}for(A(null),O.length=0;T.length;)T.pop()();for(let t=0;t<j.length;t+=1){const n=j[t];q.has(n)||(q.add(n),n())}j.length=0}while(O.length);for(;I.length;)I.pop()();U=!1,H=!1,q.clear()}}function K(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(F)}}const B=new Set;let Y;function D(){Y={r:0,c:[],p:Y}}function G(){Y.r||o(Y.c),Y=Y.p}function J(t,n){t&&t.i&&(B.delete(t),t.i(n))}function Q(t,n,e,r){if(t&&t.o){if(B.has(t))return;B.add(t),Y.c.push((()=>{B.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}function V(t){return"object"==typeof t&&null!==t?t:{}}function W(t){t&&t.c()}function X(t,n,r,a){const{fragment:c,on_mount:i,on_destroy:u,after_update:l}=t.$$;c&&c.m(n,r),a||F((()=>{const n=i.map(e).filter(s);u?u.push(...n):o(n),t.$$.on_mount=[]})),l.forEach(F)}function Z(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function tt(n,e,s,a,c,i,u,l=[-1]){const f=P;A(n);const p=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:r(),dirty:l,skip_bound:!1,root:e.target||f.$$.root};u&&u(p.root);let d=!1;if(p.ctx=s?s(n,e.props||{},((t,e,...r)=>{const o=r.length?r[0]:e;return p.ctx&&c(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),d&&function(t,n){-1===t.$$.dirty[0]&&(O.push(t),M(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],p.update(),d=!0,o(p.before_update),p.fragment=!!a&&a(p.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);p.fragment&&p.fragment.l(t),t.forEach(b)}else p.fragment&&p.fragment.c();e.intro&&J(n.$$.fragment),X(n,e.target,e.anchor,e.customElement),z()}A(f)}class nt{$destroy(){Z(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const et=t=>void 0===t,rt=t=>"number"==typeof t;function ot(){let t=0;return()=>t++}const st="undefined"==typeof window;function at(t,n,e){return t.addEventListener(n,e),()=>t.removeEventListener(n,e)}const ct=[];function it(n,e=t){let r;const o=new Set;function s(t){if(a(n,t)&&(n=t,r)){const t=!ct.length;for(const t of o)t[1](),ct.push(t,n);if(t){for(let t=0;t<ct.length;t+=2)ct[t][0](ct[t+1]);ct.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(a,c=t){const i=[a,c];return o.add(i),1===o.size&&(r=e(s)||t),a(n),()=>{o.delete(i),0===o.size&&(r(),r=null)}}}}function ut(n,e,r){const a=!Array.isArray(n),i=a?[n]:n,u=e.length<2;return l=n=>{let r=!1;const l=[];let f=0,p=t;const d=()=>{if(f)return;p();const r=e(a?l[0]:l,n);u?n(r):p=s(r)?r:t},$=i.map(((t,n)=>c(t,(t=>{l[n]=t,f&=~(1<<n),r&&d()}),(()=>{f|=1<<n}))));return r=!0,d(),function(){o($),p()}},{subscribe:it(r,l).subscribe};var l}const lt=t=>`@@svnav-ctx__${t}`,ft=lt("LOCATION"),pt=lt("ROUTER"),dt=lt("ROUTE"),$t=lt("ROUTE_PARAMS"),ht=lt("FOCUS_ELEM"),mt=/^:(.+)/,gt=(t,n)=>t.substr(0,n.length)===n,vt=t=>"*"===t[0],yt=t=>t.replace(/(^\/+|\/+$)/g,"");function bt(t,n=!1){const e=yt(t).split("/");return n?e.filter(Boolean):e}const xt=(t,n)=>t+(n?`?${n}`:""),wt=t=>`/${yt(t)}`;function Et(...t){const n=t.map((t=>bt(t,!0).join("/"))).join("/");return wt(n)}const _t={1:"Link",2:"Route",3:"Router",4:"useFocus",5:"useLocation",6:"useMatch",7:"useNavigate",8:"useParams",9:"useResolvable",10:"useResolve",11:"navigate"},kt=t=>_t[t];function Rt(t,n,e,r){const o=e&&function(t,n){let e;return 2===t?e=n.path?`path="${n.path}"`:"default":1===t?e=`to="${n.to}"`:3===t&&(e=`basepath="${n.basepath||""}"`),`<${kt(t)} ${e||""} />`}(r||t,e),s=o?`\n\nOccurred in: ${o}`:"",a=kt(t);return`<${a}> ${"function"==typeof n?n(a):n}${s}`}const Pt=t=>(...n)=>t(Rt(...n)),At=Pt((t=>{throw new Error(t)})),St=Pt(console.warn);function Nt(t,n){return{route:t,score:t.default?0:bt(t.fullPath).reduce(((t,n)=>{let e=t;return e+=4,(t=>""===t)(n)?e+=1:(t=>mt.test(t))(n)?e+=2:vt(n)?e-=5:e+=3,e}),0),index:n}}function Ct(t,n){let e,r;const[o]=n.split("?"),s=bt(o),a=""===s[0],c=function(t){return t.map(Nt).sort(((t,n)=>t.score<n.score?1:t.score>n.score?-1:t.index-n.index))}(t);for(let t=0,o=c.length;t<o;t++){const{route:o}=c[t];let i=!1;const u={},l=t=>({...o,params:u,uri:t});if(o.default){r=l(n);continue}const f=bt(o.fullPath),p=Math.max(s.length,f.length);let d=0;for(;d<p;d++){const t=f[d],n=s[d];if(!et(t)&&vt(t)){const n="*"===t?"*":t.slice(1);u[n]=s.slice(d).map(decodeURIComponent).join("/");break}if(et(n)){i=!0;break}const e=mt.exec(t);if(e&&!a){const t=decodeURIComponent(n);u[e[1]]=t}else if(t!==n){i=!0;break}}if(!i){e=l(Et(...s.slice(0,d)));break}}return e||r||null}function Ot(t,n){return Ct([t],n)}function Tt(t,n){const{pathname:e,hash:r="",search:o="",state:s}=t,a=bt(n,!0),c=bt(e,!0);for(;a.length;)a[0]!==c[0]&&At(3,`Invalid state: All locations must begin with the basepath "${n}", found "${e}"`),a.shift(),c.shift();return{pathname:Et(...c),hash:r,search:o,state:s}}const jt=t=>1===t.length?"":t;function It(t){const n=t.indexOf("?"),e=t.indexOf("#"),r=-1!==n,o=-1!==e,s=o?jt(t.substr(e)):"",a=o?t.substr(0,e):t,c=r?jt(a.substr(n)):"";return{pathname:r?a.substr(0,n):a,search:c,hash:s}}function Lt(t,n,e){return Et(e,function(t,n){if(gt(t,"/"))return t;const[e,r]=t.split("?"),[o]=n.split("?"),s=bt(e),a=bt(o);if(""===s[0])return xt(o,r);if(!gt(s[0],".")){const t=a.concat(s).join("/");return xt(("/"===o?"":"/")+t,r)}const c=a.concat(s),i=[];return c.forEach((t=>{".."===t?i.pop():"."!==t&&i.push(t)})),xt(`/${i.join("/")}`,r)}(t,n))}function Ut(t,n){const e=wt(t.replace(/\*.*$/,""));const r=bt(e,!0),o=Ot({fullPath:e},Et(...bt(n,!0).slice(0,r.length)));return o&&o.uri}const Mt="POP";function Ft(t){return{...t.location,pathname:encodeURI(decodeURI(t.location.pathname)),state:t.history.state,_key:t.history.state&&t.history.state._key||"initial"}}function Ht(t,n){return{...It(n),state:t}}const qt=!(st||!window.document||!window.document.createElement),zt=!st&&"null"===window.location.origin,Kt=function(t){let n=[],e=Ft(t),r=Mt;const o=(t=n)=>t.forEach((t=>t({location:e,action:r})));return{get location(){return e},listen(s){n.push(s);o([s]);const a=at(t,"popstate",(()=>{e=Ft(t),r=Mt,o([s])}));return()=>{a(),n=n.filter((t=>t!==s))}},navigate(n,s){const{state:a={},replace:c=!1}=s||{};if(r=c?"REPLACE":"PUSH",rt(n))s&&St(11,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),r=Mt,t.history.go(n);else{const e={...a,_key:Math.random().toString(36).substring(2)};try{t.history[c?"replaceState":"pushState"](e,"",n)}catch(e){t.location[c?"replace":"assign"](n)}}e=Ft(t),o()}}}(qt&&!zt?window:function(t="/"){let n=0,e=[Ht(null,t)];return{get entries(){return e},get location(){return e[n]},addEventListener(){},removeEventListener(){},history:{get state(){return e[n].state},pushState(t,r,o){n++,e=e.slice(0,n),e.push(Ht(t,o))},replaceState(t,r,o){e[n]=Ht(t,o)},go(t){const r=n+t;r<0||r>e.length-1||(n=r)}}}}()),{navigate:Bt}=Kt;let Yt=null,Dt=!0;function Gt(t){(!Yt||t.level>Yt.level||t.level===Yt.level&&function(t,n){const e=document.querySelectorAll("[data-svnav-router]");for(let r=0;r<e.length;r++){const o=e[r],s=Number(o.dataset.svnavRouter);if(s===t)return!0;if(s===n)return!1}return!1}(t.routerId,Yt.routerId))&&(Yt=t)}function Jt(t){if(!t)return!1;const n="tabindex";try{if(!t.hasAttribute(n)){let e;t.setAttribute(n,"-1");const r=()=>{t.removeAttribute(n),e()};e=at(t,"blur",r)}return t.focus(),document.activeElement===t}catch(t){return!1}}function Qt(t,n){return Number(t.dataset.svnavRouteEnd)===n}function Vt(t,n=document){return n.querySelector(t)}function Wt(t){Promise.resolve(i(t.focusElement)).then((n=>{const e=n||function(t){let n=Vt(`[data-svnav-route-start="${t}"]`).nextElementSibling;for(;!Qt(n,t);){if(/^H[1-6]$/i.test(n.tagName))return n;const t=Vt("h1,h2,h3,h4,h5,h6",n);if(t)return t;n=n.nextElementSibling}return null}(t.id);e||St(3,'Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don\'t want this Route or Router to manage focus, pass "primary={false}" to it.',t,2);Jt(e)||Jt(document.documentElement)}))}const Xt=(t,n,e)=>(r,o)=>(M(),L).then((()=>{if(Yt&&!Dt){if(r&&Wt(Yt.route),t.announcements&&o){const{path:r,fullPath:o,meta:s,params:a,uri:c}=Yt.route,u=t.createAnnouncement({path:r,fullPath:o,meta:s,params:a,uri:c},i(e));Promise.resolve(u).then((t=>{n.set(t)}))}Yt=null}else Dt=!1}));function Zt(t){let n,e,r,o,s;const a=t[20].default,c=l(a,t,t[19],null);let i=t[2]&&t[4]&&t[1].announcements&&function(t){let n,e;return{c(){n=x("div"),e=w(t[0]),k(n,"role","status"),k(n,"aria-atomic","true"),k(n,"aria-live","polite"),k(n,"style","position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;")},m(t,r){y(t,n,r),v(n,e)},p(t,n){1&n[0]&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(e,t[0])},d(t){t&&b(n)}}}(t);return{c(){n=x("div"),e=E(),c&&c.c(),r=E(),i&&i.c(),o=_(),R(n,"display","none"),k(n,"aria-hidden","true"),k(n,"data-svnav-router",t[3])},m(t,a){y(t,n,a),y(t,e,a),c&&c.m(t,a),y(t,r,a),i&&i.m(t,a),y(t,o,a),s=!0},p(t,n){c&&c.p&&(!s||524288&n[0])&&d(c,a,t,t[19],s?p(a,t[19],n,null):$(t[19]),null),t[2]&&t[4]&&t[1].announcements&&i.p(t,n)},i(t){s||(J(c,t),s=!0)},o(t){Q(c,t),s=!1},d(t){t&&b(n),t&&b(e),c&&c.d(t),t&&b(r),i&&i.d(t),t&&b(o)}}}const tn=ot(),nn="/";function en(t,n,e){let r,o,s,a,c,{$$slots:i={},$$scope:l}=n,{basepath:f=nn}=n,{url:p=null}=n,{history:d=Kt}=n,{primary:$=!0}=n,{a11y:h={}}=n;const m={createAnnouncement:t=>`Navigated to ${t.uri}`,announcements:!0,...h},g=f,v=wt(f),y=C(ft),b=C(pt),x=!y,w=tn(),E=$&&!(b&&!b.manageFocus),_=it("");u(t,_,(t=>e(0,c=t)));const k=it([]);u(t,k,(t=>e(18,a=t)));const R=it(null);u(t,R,(t=>e(16,o=t)));let P=!1;const A=x?0:b.level+1,O=x?it(Tt(st?It(p):d.location,v)):y;u(t,O,(t=>e(15,r=t)));const T=it(r);u(t,T,(t=>e(17,s=t)));const j=Xt(m,_,O),I=t=>n=>n.filter((n=>n.id!==t));var L;return x||f===nn||St(3,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:f}),x&&(L=()=>d.listen((t=>{const n=Tt(t.location,v);T.set(r),O.set(n)})),S().$$.on_mount.push(L),N(ft,O)),N(pt,{activeRoute:R,registerRoute:function(t){if(st){if(P)return;const n=Ot(t,r.pathname);if(n)return P=!0,n}else k.update((n=>{const e=I(t.id)(n);return e.push(t),e}))},unregisterRoute:function(t){k.update(I(t))},manageFocus:E,level:A,id:w,history:x?d:b.history,basepath:x?v:b.basepath}),t.$$set=t=>{"basepath"in t&&e(10,f=t.basepath),"url"in t&&e(11,p=t.url),"history"in t&&e(12,d=t.history),"primary"in t&&e(13,$=t.primary),"a11y"in t&&e(14,h=t.a11y),"$$scope"in t&&e(19,l=t.$$scope)},t.$$.update=()=>{if(1024&t.$$.dirty[0]&&f!==g&&St(3,'You cannot change the "basepath" prop. It is ignored.'),294912&t.$$.dirty[0]){const t=Ct(a,r.pathname);R.set(t)}if(163840&t.$$.dirty[0]&&x){const t=!!r.hash,n=!t&&E,e=!t||r.pathname!==s.pathname;j(n,e)}65536&t.$$.dirty[0]&&E&&o&&o.primary&&Gt({level:A,routerId:w,route:o})},[c,m,x,w,E,_,k,R,O,T,f,p,d,$,h,r,o,s,a,l,i]}var rn=class extends nt{constructor(t){super(),tt(this,t,en,Zt,a,{basepath:10,url:11,history:12,primary:13,a11y:14},null,[-1,-1])}};function on(t,n,e=pt,r=3){C(e)||At(t,(t=>`You cannot use ${t} outside of a ${kt(r)}.`),n)}function sn(){return on(5),(t=>{const{subscribe:n}=C(t);return{subscribe:n}})(ft)}function an(){const t=C(dt);return t?ut(t,(t=>t.base)):it("/")}function cn(){on(10);const t=an(),{basepath:n}=C(pt);return e=>Lt(e,i(t),n)}function un(){on(7);const t=cn(),{navigate:n}=function(){const{history:t}=C(pt);return t}();return(e,r)=>{const o=rt(e)?e:t(e);return n(o,r)}}const ln=t=>({params:16&t,location:8&t}),fn=t=>({params:st?i(t[9]):t[4],location:t[3],navigate:t[10]});function pn(t){let n,e;return n=new rn({props:{primary:t[1],$$slots:{default:[hn]},$$scope:{ctx:t}}}),{c(){W(n.$$.fragment)},m(t,r){X(n,t,r),e=!0},p(t,e){const r={};2&e&&(r.primary=t[1]),264217&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){e||(J(n.$$.fragment,t),e=!0)},o(t){Q(n.$$.fragment,t),e=!1},d(t){Z(n,t)}}}function dn(t){let n;const e=t[17].default,r=l(e,t,t[18],fn);return{c(){r&&r.c()},m(t,e){r&&r.m(t,e),n=!0},p(t,o){r&&r.p&&(!n||262168&o)&&d(r,e,t,t[18],n?p(e,t[18],o,ln):$(t[18]),fn)},i(t){n||(J(r,t),n=!0)},o(t){Q(r,t),n=!1},d(t){r&&r.d(t)}}}function $n(t){let e,r,o;const s=[{location:t[3]},{navigate:t[10]},st?i(t[9]):t[4],t[11]];var a=t[0];function c(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return a&&(e=new a(c())),{c(){e&&W(e.$$.fragment),r=_()},m(t,n){e&&X(e,t,n),y(t,r,n),o=!0},p(t,n){const o=3608&n?function(t,n){const e={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=n[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(e[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in e||(e[t]=void 0);return e}(s,[8&n&&{location:t[3]},1024&n&&{navigate:t[10]},528&n&&V(st?i(t[9]):t[4]),2048&n&&V(t[11])]):{};if(a!==(a=t[0])){if(e){D();const t=e;Q(t.$$.fragment,1,0,(()=>{Z(t,1)})),G()}a?(e=new a(c()),W(e.$$.fragment),J(e.$$.fragment,1),X(e,r.parentNode,r)):e=null}else a&&e.$set(o)},i(t){o||(e&&J(e.$$.fragment,t),o=!0)},o(t){e&&Q(e.$$.fragment,t),o=!1},d(t){t&&b(r),e&&Z(e,t)}}}function hn(t){let n,e,r,o;const s=[$n,dn],a=[];function c(t,n){return null!==t[0]?0:1}return n=c(t),e=a[n]=s[n](t),{c(){e.c(),r=_()},m(t,e){a[n].m(t,e),y(t,r,e),o=!0},p(t,o){let i=n;n=c(t),n===i?a[n].p(t,o):(D(),Q(a[i],1,1,(()=>{a[i]=null})),G(),e=a[n],e?e.p(t,o):(e=a[n]=s[n](t),e.c()),J(e,1),e.m(r.parentNode,r))},i(t){o||(J(e),o=!0)},o(t){Q(e),o=!1},d(t){a[n].d(t),t&&b(r)}}}function mn(t){let n,e,r,o,s,a=t[2]&&pn(t);return{c(){n=x("div"),e=E(),a&&a.c(),r=E(),o=x("div"),R(n,"display","none"),k(n,"aria-hidden","true"),k(n,"data-svnav-route-start",t[5]),R(o,"display","none"),k(o,"aria-hidden","true"),k(o,"data-svnav-route-end",t[5])},m(t,c){y(t,n,c),y(t,e,c),a&&a.m(t,c),y(t,r,c),y(t,o,c),s=!0},p(t,[n]){t[2]?a?(a.p(t,n),4&n&&J(a,1)):(a=pn(t),a.c(),J(a,1),a.m(r.parentNode,r)):a&&(D(),Q(a,1,1,(()=>{a=null})),G())},i(t){s||(J(a),s=!0)},o(t){Q(a),s=!1},d(t){t&&b(n),t&&b(e),a&&a.d(t),t&&b(r),t&&b(o)}}}const gn=ot();function vn(t,e,r){let o;const s=["path","component","meta","primary"];let a,c,i,l,f=m(e,s),{$$slots:p={},$$scope:d}=e,{path:$=""}=e,{component:g=null}=e,{meta:v={}}=e,{primary:y=!0}=e;on(2,e);const b=gn(),{registerRoute:x,unregisterRoute:w,activeRoute:E}=C(pt);u(t,E,(t=>r(15,a=t)));const _=an();u(t,_,(t=>r(16,i=t)));const k=sn();u(t,k,(t=>r(3,c=t)));const R=it(null);let P;const A=it(),O=it({});u(t,O,(t=>r(4,l=t))),N(dt,A),N($t,O),N(ht,R);const T=un();var j;return st||(j=()=>w(b),S().$$.on_destroy.push(j)),t.$$set=t=>{r(23,e=n(n({},e),h(t))),r(11,f=m(e,s)),"path"in t&&r(12,$=t.path),"component"in t&&r(0,g=t.component),"meta"in t&&r(13,v=t.meta),"primary"in t&&r(1,y=t.primary),"$$scope"in t&&r(18,d=t.$$scope)},t.$$.update=()=>{if(77834&t.$$.dirty){const t=""===$,n=Et(i,$),e={id:b,path:$,meta:v,default:t,fullPath:t?"":n,base:t?i:Ut(n,c.pathname),primary:y,focusElement:R};A.set(e),r(14,P=x(e))}if(49152&t.$$.dirty&&r(2,o=!!(P||a&&a.id===b)),49156&t.$$.dirty&&o){const{params:t}=P||a;O.set(t)}},e=h(e),[g,y,o,c,l,b,E,_,k,O,T,f,$,v,P,a,i,p,d]}var yn=class extends nt{constructor(t){super(),tt(this,t,vn,mn,a,{path:12,component:0,meta:13,primary:1})}};const bn=(t=>(n,e=Bt)=>({destroy:at(n,"click",(n=>{const r=t(n);if(r&&""===r.target&&function(t){return!t.defaultPrevented&&0===t.button&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(n)){n.preventDefault();const t=r.pathname+r.search+r.hash;e(t,{replace:r.hasAttribute("replace")})}}))}))((t=>t.currentTarget));function xn(n){let e,r,o,s,a,c,i,u,l,f,p,d,$,h,m,_,R,P,A,S,N,C;return{c(){e=x("nav"),r=x("div"),o=x("a"),s=w("Svelte Projects"),a=E(),c=x("button"),c.innerHTML='<span class="navbar-toggler-icon"></span>',i=E(),u=x("div"),l=x("ul"),f=x("li"),p=x("a"),d=w("Home"),$=E(),h=x("li"),m=x("a"),_=w("Library"),R=E(),P=x("li"),A=x("a"),S=w("Calculator"),k(o,"class","navbar-brand"),k(o,"href",n[0]("/")),k(c,"class","navbar-toggler"),k(c,"type","button"),k(c,"data-bs-toggle","collapse"),k(c,"data-bs-target","#navbarNav"),k(c,"aria-controls","navbarNav"),k(c,"aria-expanded","false"),k(c,"aria-label","Toggle navigation"),k(p,"class","nav-link active"),k(p,"aria-current","page"),k(p,"href",n[0]("/")),k(f,"class","nav-item"),k(m,"class","nav-link"),k(m,"href",n[0]("library")),k(h,"class","nav-item"),k(A,"class","nav-link"),k(A,"href",n[0]("calculator")),k(P,"class","nav-item"),k(l,"class","navbar-nav ms-auto"),k(u,"class","collapse navbar-collapse"),k(u,"id","navbarNav"),k(r,"class","container-fluid"),k(e,"class","navbar navbar-expand-lg navbar-light bg-light svelte-n0u60b")},m(t,n){y(t,e,n),v(e,r),v(r,o),v(o,s),v(r,a),v(r,c),v(r,i),v(r,u),v(u,l),v(l,f),v(f,p),v(p,d),v(l,$),v(l,h),v(h,m),v(m,_),v(l,R),v(l,P),v(P,A),v(A,S),N||(C=g(bn.call(null,o)),N=!0)},p:t,i:t,o:t,d(t){t&&b(e),N=!1,C()}}}function wn(t){return[cn()]}class En extends nt{constructor(t){super(),tt(this,t,wn,xn,a,{})}}function _n(n){let e;return{c(){e=x("h1"),e.textContent="This is home page",k(e,"class","text-center svelte-1tdqz32")},m(t,n){y(t,e,n)},p:t,i:t,o:t,d(t){t&&b(e)}}}class kn extends nt{constructor(t){super(),tt(this,t,null,_n,a,{})}}function Rn(n){let e,r,o,s,a,c,i,u,l,f,p,d;return{c(){e=x("div"),r=x("div"),o=x("div"),s=x("div"),a=x("span"),a.textContent="404",c=E(),i=x("div"),i.textContent="The page you are looking for was not found.",u=E(),l=x("a"),f=w("Back to Home"),k(a,"class","display-1 d-block"),k(i,"class","mb-4 lead"),k(l,"href",n[0]("/")),k(l,"class","btn btn-link"),k(s,"class","col-md-12 text-center"),k(o,"class","row justify-content-center"),k(r,"class","container"),k(e,"class","page-wrap d-flex flex-row")},m(t,n){y(t,e,n),v(e,r),v(r,o),v(o,s),v(s,a),v(s,c),v(s,i),v(s,u),v(s,l),v(l,f),p||(d=g(bn.call(null,l)),p=!0)},p:t,i:t,o:t,d(t){t&&b(e),p=!1,d()}}}function Pn(t){return[cn()]}class An extends nt{constructor(t){super(),tt(this,t,Pn,Rn,a,{})}}function Sn(n){let e;return{c(){e=x("h1"),e.textContent="This is calculator page"},m(t,n){y(t,e,n)},p:t,i:t,o:t,d(t){t&&b(e)}}}class Nn extends nt{constructor(t){super(),tt(this,t,null,Sn,a,{})}}function Cn(n){let e;return{c(){e=x("h1"),e.textContent="This is library page"},m(t,n){y(t,e,n)},p:t,i:t,o:t,d(t){t&&b(e)}}}class On extends nt{constructor(t){super(),tt(this,t,null,Cn,a,{})}}function Tn(t){let n,e;return n=new kn({}),{c(){W(n.$$.fragment)},m(t,r){X(n,t,r),e=!0},i(t){e||(J(n.$$.fragment,t),e=!0)},o(t){Q(n.$$.fragment,t),e=!1},d(t){Z(n,t)}}}function jn(t){let n,e;return n=new On({}),{c(){W(n.$$.fragment)},m(t,r){X(n,t,r),e=!0},i(t){e||(J(n.$$.fragment,t),e=!0)},o(t){Q(n.$$.fragment,t),e=!1},d(t){Z(n,t)}}}function In(t){let n,e;return n=new Nn({}),{c(){W(n.$$.fragment)},m(t,r){X(n,t,r),e=!0},i(t){e||(J(n.$$.fragment,t),e=!0)},o(t){Q(n.$$.fragment,t),e=!1},d(t){Z(n,t)}}}function Ln(t){let n,e;return n=new An({}),{c(){W(n.$$.fragment)},m(t,r){X(n,t,r),e=!0},i(t){e||(J(n.$$.fragment,t),e=!0)},o(t){Q(n.$$.fragment,t),e=!1},d(t){Z(n,t)}}}function Un(t){let n,e,r,o,s,a,c,i,u,l,f,p;return e=new En({}),s=new yn({props:{path:"/",$$slots:{default:[Tn]},$$scope:{ctx:t}}}),c=new yn({props:{path:"library",$$slots:{default:[jn]},$$scope:{ctx:t}}}),u=new yn({props:{path:"calculator",$$slots:{default:[In]},$$scope:{ctx:t}}}),f=new yn({props:{path:"*",$$slots:{default:[Ln]},$$scope:{ctx:t}}}),{c(){n=x("div"),W(e.$$.fragment),r=E(),o=x("div"),W(s.$$.fragment),a=E(),W(c.$$.fragment),i=E(),W(u.$$.fragment),l=E(),W(f.$$.fragment),k(o,"class","container-fluid h-100"),k(n,"class","d-flex flex-column h-100")},m(t,d){y(t,n,d),X(e,n,null),v(n,r),v(n,o),X(s,o,null),v(o,a),X(c,o,null),v(o,i),X(u,o,null),v(o,l),X(f,o,null),p=!0},p(t,n){const e={};1&n&&(e.$$scope={dirty:n,ctx:t}),s.$set(e);const r={};1&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),u.$set(o);const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),f.$set(a)},i(t){p||(J(e.$$.fragment,t),J(s.$$.fragment,t),J(c.$$.fragment,t),J(u.$$.fragment,t),J(f.$$.fragment,t),p=!0)},o(t){Q(e.$$.fragment,t),Q(s.$$.fragment,t),Q(c.$$.fragment,t),Q(u.$$.fragment,t),Q(f.$$.fragment,t),p=!1},d(t){t&&b(n),Z(e),Z(s),Z(c),Z(u),Z(f)}}}function Mn(t){let n,e;return n=new rn({props:{basepath:Fn,$$slots:{default:[Un]},$$scope:{ctx:t}}}),{c(){W(n.$$.fragment)},m(t,r){X(n,t,r),e=!0},p(t,[e]){const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){e||(J(n.$$.fragment,t),e=!0)},o(t){Q(n.$$.fragment,t),e=!1},d(t){Z(n,t)}}}const Fn="/SvelteProjects";return new class extends nt{constructor(t){super(),tt(this,t,null,Mn,a,{})}}({target:document.body})}();