function b(){}function _e(e,t){for(const n in t)e[n]=t[n];return e}function ee(e){return e()}function te(){return Object.create(null)}function k(e){e.forEach(ee)}function he(e){return typeof e=="function"}function ne(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let M;function He(e,t){return M||(M=document.createElement("a")),M.href=t,e===M.href}function me(e){return Object.keys(e).length===0}function Te(e,t,n,i){if(e){const r=ie(e,t,n,i);return e[0](r)}}function ie(e,t,n,i){return e[1]&&i?_e(n.ctx.slice(),e[1](i(t))):n.ctx}function Le(e,t,n,i){if(e[2]&&i){const r=e[2](i(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const s=[],l=Math.max(t.dirty.length,r.length);for(let o=0;o<l;o+=1)s[o]=t.dirty[o]|r[o];return s}return t.dirty|r}return t.dirty}function Pe(e,t,n,i,r,s){if(r){const l=ie(t,n,i,s);e.p(l,r)}}function De(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let i=0;i<n;i++)t[i]=-1;return t}return-1}function le(e){return e==null?"":e}let S=!1;function de(){S=!0}function ye(){S=!1}function ge(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function be(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const f=[];for(let c=0;c<t.length;c++){const m=t[c];m.claim_order!==void 0&&f.push(m)}t=f}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let f=0;f<t.length;f++){const c=t[f].claim_order,m=(r>0&&t[n[r]].claim_order<=c?r+1:ge(1,r,h=>t[n[h]].claim_order,c))-1;i[f]=n[m]+1;const a=m+1;n[a]=f,r=Math.max(a,r)}const s=[],l=[];let o=t.length-1;for(let f=n[r]+1;f!=0;f=i[f-1]){for(s.push(t[f-1]);o>=f;o--)l.push(t[o]);o--}for(;o>=0;o--)l.push(t[o]);s.reverse(),l.sort((f,c)=>f.claim_order-c.claim_order);for(let f=0,c=0;f<l.length;f++){for(;c<s.length&&l[f].claim_order>=s[c].claim_order;)c++;const m=c<s.length?s[c]:null;e.insertBefore(l[f],m)}}function L(e,t){if(S){for(be(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function E(e,t,n){S&&!n?L(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function pe(e){return document.createElement(e)}function p(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function P(e){return document.createTextNode(e)}function Ge(){return P(" ")}function re(){return P("")}function _(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function w(e){return Array.from(e.childNodes)}function we(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function fe(e,t,n,i,r=!1){we(e);const s=(()=>{for(let l=e.claim_info.last_index;l<e.length;l++){const o=e[l];if(t(o)){const f=n(o);return f===void 0?e.splice(l,1):e[l]=f,r||(e.claim_info.last_index=l),o}}for(let l=e.claim_info.last_index-1;l>=0;l--){const o=e[l];if(t(o)){const f=n(o);return f===void 0?e.splice(l,1):e[l]=f,r?f===void 0&&e.claim_info.last_index--:e.claim_info.last_index=l,o}}return i()})();return s.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,s}function ae(e,t,n,i){return fe(e,r=>r.nodeName===t,r=>{const s=[];for(let l=0;l<r.attributes.length;l++){const o=r.attributes[l];n[o.name]||s.push(o.name)}s.forEach(l=>r.removeAttribute(l))},()=>i(t))}function Ie(e,t,n){return ae(e,t,n,pe)}function C(e,t,n){return ae(e,t,n,p)}function ve(e,t){return fe(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>P(t),!0)}function Je(e){return ve(e," ")}function Ke(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Ve(e,t,n,i){e.style.setProperty(t,n,i?"important":"")}let N;function O(e){N=e}function D(){if(!N)throw new Error("Function called outside component initialization");return N}function We(e){D().$$.on_mount.push(e)}function Qe(e){D().$$.after_update.push(e)}function Re(e,t){D().$$.context.set(e,t)}const A=[],ce=[],j=[],oe=[],Ce=Promise.resolve();let G=!1;function ze(){G||(G=!0,Ce.then(se))}function I(e){j.push(e)}const J=new Set;let B=0;function se(){const e=N;do{for(;B<A.length;){const t=A[B];B++,O(t),ke(t.$$)}for(O(null),A.length=0,B=0;ce.length;)ce.pop()();for(let t=0;t<j.length;t+=1){const n=j[t];J.has(n)||(J.add(n),n())}j.length=0}while(A.length);for(;oe.length;)oe.pop()();G=!1,J.clear(),O(e)}function ke(e){if(e.fragment!==null){e.update(),k(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(I)}}const q=new Set;let v;function Ze(){v={r:0,c:[],p:v}}function Ue(){v.r||k(v.c),v=v.p}function Ee(e,t){e&&e.i&&(q.delete(e),e.i(t))}function xe(e,t,n,i){if(e&&e.o){if(q.has(e))return;q.add(e),v.c.push(()=>{q.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}}function $e(e,t){const n={},i={},r={$$scope:1};let s=e.length;for(;s--;){const l=e[s],o=t[s];if(o){for(const f in l)f in o||(i[f]=1);for(const f in o)r[f]||(n[f]=o[f],r[f]=1);e[s]=o}else for(const f in l)r[f]=1}for(const l in i)l in n||(n[l]=void 0);return n}function et(e){return typeof e=="object"&&e!==null?e:{}}function tt(e){e&&e.c()}function nt(e,t){e&&e.l(t)}function Ne(e,t,n,i){const{fragment:r,on_mount:s,on_destroy:l,after_update:o}=e.$$;r&&r.m(t,n),i||I(()=>{const f=s.map(ee).filter(he);l?l.push(...f):k(f),e.$$.on_mount=[]}),o.forEach(I)}function Oe(e,t){const n=e.$$;n.fragment!==null&&(k(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ae(e,t){e.$$.dirty[0]===-1&&(A.push(e),ze(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Me(e,t,n,i,r,s,l,o=[-1]){const f=N;O(e);const c=e.$$={fragment:null,ctx:null,props:s,update:b,not_equal:r,bound:te(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:te(),dirty:o,skip_bound:!1,root:t.target||f.$$.root};l&&l(c.root);let m=!1;if(c.ctx=n?n(e,t.props||{},(a,h,...y)=>{const g=y.length?y[0]:h;return c.ctx&&r(c.ctx[a],c.ctx[a]=g)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](g),m&&Ae(e,a)),h}):[],c.update(),m=!0,k(c.before_update),c.fragment=i?i(c.ctx):!1,t.target){if(t.hydrate){de();const a=w(t.target);c.fragment&&c.fragment.l(a),a.forEach(d)}else c.fragment&&c.fragment.c();t.intro&&Ee(e.$$.fragment),Ne(e,t.target,t.anchor,t.customElement),ye(),se()}O(f)}class Se{$destroy(){Oe(this,1),this.$destroy=b}$on(t,n){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!me(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const z=[];function it(e,t=b){let n;const i=new Set;function r(o){if(ne(e,o)&&(e=o,n)){const f=!z.length;for(const c of i)c[1](),z.push(c,e);if(f){for(let c=0;c<z.length;c+=2)z[c][0](z[c+1]);z.length=0}}}function s(o){r(o(e))}function l(o,f=b){const c=[o,f];return i.add(c),i.size===1&&(n=t(r)||b),o(e),()=>{i.delete(c),i.size===0&&(n(),n=null)}}return{set:r,update:s,subscribe:l}}const F=parseFloat;function X(e,t=";"){let n;if(Array.isArray(e))n=e.filter(i=>i);else{n=[];for(const i in e)e[i]&&n.push(`${i}:${e[i]}`)}return n.join(t)}function je(e,t,n,i){let r,s;const l="1em";let o,f,c,m="-.125em";const a="visible";return i&&(c="center",s="1.25em"),n&&(r=n),t&&(t=="lg"?(f="1.33333em",o=".75em",m="-.225em"):t=="xs"?f=".75em":t=="sm"?f=".875em":f=t.replace("x","em")),X([X({float:r,width:s,height:l,"line-height":o,"font-size":f,"text-align":c,"vertical-align":m,"transform-origin":"center",overflow:a}),e])}function Be(e,t,n,i,r,s=1,l="",o=""){let f=1,c=1;return r&&(r=="horizontal"?f=-1:r=="vertical"?c=-1:f=c=-1),X([`translate(${F(t)*s}${l},${F(n)*s}${l})`,`scale(${f*F(e)},${c*F(e)})`,i&&`rotate(${i}${o})`]," ")}function ue(e){let t,n,i,r,s,l,o;function f(a,h){return typeof a[7][4]=="string"?Fe:qe}let c=f(e),m=c(e);return{c(){t=p("svg"),n=p("g"),i=p("g"),m.c(),this.h()},l(a){t=C(a,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0});var h=w(t);n=C(h,"g",{transform:!0,"transform-origin":!0});var y=w(n);i=C(y,"g",{transform:!0});var g=w(i);m.l(g),g.forEach(d),y.forEach(d),h.forEach(d),this.h()},h(){_(i,"transform",e[10]),_(n,"transform",r=`translate(${e[7][0]/2} ${e[7][1]/2})`),_(n,"transform-origin",s=`${e[7][0]/4} 0`),_(t,"id",e[0]),_(t,"class",l=""+(le(e[8])+" svelte-1cj2gr0")),_(t,"style",e[9]),_(t,"viewBox",o=`0 0 ${e[7][0]} ${e[7][1]}`),_(t,"aria-hidden","true"),_(t,"role","img"),_(t,"xmlns","http://www.w3.org/2000/svg")},m(a,h){E(a,t,h),L(t,n),L(n,i),m.m(i,null)},p(a,h){c===(c=f(a))&&m?m.p(a,h):(m.d(1),m=c(a),m&&(m.c(),m.m(i,null))),h&1024&&_(i,"transform",a[10]),h&128&&r!==(r=`translate(${a[7][0]/2} ${a[7][1]/2})`)&&_(n,"transform",r),h&128&&s!==(s=`${a[7][0]/4} 0`)&&_(n,"transform-origin",s),h&1&&_(t,"id",a[0]),h&256&&l!==(l=""+(le(a[8])+" svelte-1cj2gr0"))&&_(t,"class",l),h&512&&_(t,"style",a[9]),h&128&&o!==(o=`0 0 ${a[7][0]} ${a[7][1]}`)&&_(t,"viewBox",o)},d(a){a&&d(t),m.d()}}}function qe(e){let t,n,i,r,s,l,o,f,c,m;return{c(){t=p("path"),l=p("path"),this.h()},l(a){t=C(a,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),w(t).forEach(d),l=C(a,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),w(l).forEach(d),this.h()},h(){_(t,"d",n=e[7][4][0]),_(t,"fill",i=e[3]||e[1]||"currentColor"),_(t,"fill-opacity",r=e[6]!=!1?e[4]:e[5]),_(t,"transform",s=`translate(${e[7][0]/-2} ${e[7][1]/-2})`),_(l,"d",o=e[7][4][1]),_(l,"fill",f=e[2]||e[1]||"currentColor"),_(l,"fill-opacity",c=e[6]!=!1?e[5]:e[4]),_(l,"transform",m=`translate(${e[7][0]/-2} ${e[7][1]/-2})`)},m(a,h){E(a,t,h),E(a,l,h)},p(a,h){h&128&&n!==(n=a[7][4][0])&&_(t,"d",n),h&10&&i!==(i=a[3]||a[1]||"currentColor")&&_(t,"fill",i),h&112&&r!==(r=a[6]!=!1?a[4]:a[5])&&_(t,"fill-opacity",r),h&128&&s!==(s=`translate(${a[7][0]/-2} ${a[7][1]/-2})`)&&_(t,"transform",s),h&128&&o!==(o=a[7][4][1])&&_(l,"d",o),h&6&&f!==(f=a[2]||a[1]||"currentColor")&&_(l,"fill",f),h&112&&c!==(c=a[6]!=!1?a[5]:a[4])&&_(l,"fill-opacity",c),h&128&&m!==(m=`translate(${a[7][0]/-2} ${a[7][1]/-2})`)&&_(l,"transform",m)},d(a){a&&d(t),a&&d(l)}}}function Fe(e){let t,n,i,r;return{c(){t=p("path"),this.h()},l(s){t=C(s,"path",{d:!0,fill:!0,transform:!0}),w(t).forEach(d),this.h()},h(){_(t,"d",n=e[7][4]),_(t,"fill",i=e[1]||e[2]||"currentColor"),_(t,"transform",r=`translate(${e[7][0]/-2} ${e[7][1]/-2})`)},m(s,l){E(s,t,l)},p(s,l){l&128&&n!==(n=s[7][4])&&_(t,"d",n),l&6&&i!==(i=s[1]||s[2]||"currentColor")&&_(t,"fill",i),l&128&&r!==(r=`translate(${s[7][0]/-2} ${s[7][1]/-2})`)&&_(t,"transform",r)},d(s){s&&d(t)}}}function Xe(e){let t,n=e[7][4]&&ue(e);return{c(){n&&n.c(),t=re()},l(i){n&&n.l(i),t=re()},m(i,r){n&&n.m(i,r),E(i,t,r)},p(i,[r]){i[7][4]?n?n.p(i,r):(n=ue(i),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:b,o:b,d(i){n&&n.d(i),i&&d(t)}}}function Ye(e,t,n){let{class:i=""}=t,{id:r=""}=t,{style:s=""}=t,{icon:l}=t,{size:o=""}=t,{color:f=""}=t,{fw:c=!1}=t,{pull:m=""}=t,{scale:a=1}=t,{translateX:h=0}=t,{translateY:y=0}=t,{rotate:g=""}=t,{flip:Y=!1}=t,{spin:H=!1}=t,{pulse:T=!1}=t,{primaryColor:K=""}=t,{secondaryColor:V=""}=t,{primaryOpacity:W=1}=t,{secondaryOpacity:Q=.4}=t,{swapOpacity:R=!1}=t,Z,U,x,$;return e.$$set=u=>{"class"in u&&n(11,i=u.class),"id"in u&&n(0,r=u.id),"style"in u&&n(12,s=u.style),"icon"in u&&n(13,l=u.icon),"size"in u&&n(14,o=u.size),"color"in u&&n(1,f=u.color),"fw"in u&&n(15,c=u.fw),"pull"in u&&n(16,m=u.pull),"scale"in u&&n(17,a=u.scale),"translateX"in u&&n(18,h=u.translateX),"translateY"in u&&n(19,y=u.translateY),"rotate"in u&&n(20,g=u.rotate),"flip"in u&&n(21,Y=u.flip),"spin"in u&&n(22,H=u.spin),"pulse"in u&&n(23,T=u.pulse),"primaryColor"in u&&n(2,K=u.primaryColor),"secondaryColor"in u&&n(3,V=u.secondaryColor),"primaryOpacity"in u&&n(4,W=u.primaryOpacity),"secondaryOpacity"in u&&n(5,Q=u.secondaryOpacity),"swapOpacity"in u&&n(6,R=u.swapOpacity)},e.$$.update=()=>{e.$$.dirty&8192&&n(7,Z=l&&l.icon||[0,0,"",[],""]),e.$$.dirty&12584960&&n(8,U=X([i,"svelte-fa",H&&"spin",T&&"pulse"]," ")),e.$$.dirty&118784&&n(9,x=je(s,o,m,c)),e.$$.dirty&4063232&&n(10,$=Be(a,h,y,g,Y,512))},[r,f,K,V,W,Q,R,Z,U,x,$,i,s,l,o,c,m,a,h,y,g,Y,H,T]}class lt extends Se{constructor(t){super();Me(this,t,Ye,Xe,ne,{class:11,id:0,style:12,icon:13,size:14,color:1,fw:15,pull:16,scale:17,translateX:18,translateY:19,rotate:20,flip:21,spin:22,pulse:23,primaryColor:2,secondaryColor:3,primaryOpacity:4,secondaryOpacity:5,swapOpacity:6})}}/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var rt={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var ft={prefix:"fas",iconName:"file-pdf",icon:[384,512,[],"f1c1","M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"]};export{Oe as A,_e as B,it as C,Te as D,L as E,Pe as F,De as G,Le as H,b as I,Ve as J,He as K,lt as L,rt as M,ft as N,Se as S,w as a,_ as b,Ie as c,d,pe as e,E as f,ve as g,Ke as h,Me as i,Ge as j,re as k,Je as l,Ze as m,xe as n,Ue as o,Ee as p,Re as q,Qe as r,ne as s,P as t,We as u,tt as v,nt as w,Ne as x,$e as y,et as z};
