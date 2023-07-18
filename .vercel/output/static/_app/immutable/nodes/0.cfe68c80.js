import{_ as ke}from"../chunks/preload-helper.cf010ec4.js";import{i as st,s as de,d as re,c as Z,o as Ge,e as Qe,r as ae,f as _e,b as nt,n as H,g as rt,u as at,h as ot,j as it}from"../chunks/scheduler.b8a490f1.js";import{S as ve,i as be,e as w,s as I,c as k,a as y,l as le,f as V,d as m,n as v,z as O,g as S,h as b,B as we,p as N,q as E,v as M,r as z,w as $,C as K,k as F,m as q,o as G,u as Q,x as he,t as ee,b as te,j as Xe,D as ye}from"../chunks/index.6eacc56a.js";import{p as Ye}from"../chunks/stores.67625e07.js";import{aV as W,aQ as se,a$ as ft,b0 as ne,aW as xe,aX as Ee,b1 as ct,aY as ze,aS as De,aT as X,aU as Ze,aR as Je,b2 as ut,ab as dt,a0 as Ce,b3 as Te,aL as ht,a_ as me,aZ as Ie,b4 as pt,b5 as _t,b6 as mt}from"../chunks/user.2e12a8a7.js";import{w as Ve}from"../chunks/windowWidth.bd7fe143.js";const gt=!0,Bt=Object.freeze(Object.defineProperty({__proto__:null,prerender:gt},Symbol.toStringTag,{value:"Module"}));function Se(l,{delay:e=0,duration:t=400,easing:r=st}={}){const o=+getComputedStyle(l).opacity;return{delay:e,duration:t,easing:r,css:h=>`opacity: ${h*o}`}}function Pe(l,e,t){const r=l.slice();return r[34]=e[t],r}function Ne(l,e,t){const r=l.slice();return r[34]=e[t],r}function Le(l,e,t){const r=l.slice();return r[39]=e[t],r}function Oe(l,e,t){const r=l.slice();return r[39]=e[t],r[41]=t,r}function We(l){let e,t,r,o,h,n,i,f;function a(d,p){return d[7]?vt:bt}let c=a(l),u=c(l),s=l[3]&&!l[7]&&Be(l);return{c(){e=w("div"),t=w("div"),u.c(),o=I(),s&&s.c(),this.h()},l(d){e=k(d,"DIV",{class:!0});var p=y(e);t=k(p,"DIV",{class:!0,style:!0});var _=y(t);u.l(_),_.forEach(m),o=V(p),s&&s.l(p),p.forEach(m),this.h()},h(){v(t,"class",r="z-10 relative w-full flex transition-[background-color,height] gap-2 rounded-md mr-4 "+(l[7]?"shadow-2xl dropdown overflow-hidden":"")+" svelte-1spg7cw"),O(t,"height",(l[7]?l[0].length*2.25:2.25)+"rem"),v(e,"class","h-9 flex-grow flex whitespace-nowrap rounded-md"),re(()=>l[23].call(e))},m(d,p){S(d,e,p),b(e,t),u.m(t,null),l[20](t),b(e,o),s&&s.m(e,null),h=we(e,l[23].bind(e)),n=!0,i||(f=N(e,"mouseleave",K(l[14])),i=!0)},p(d,p){c===(c=a(d))&&u?u.p(d,p):(u.d(1),u=c(d),u&&(u.c(),u.m(t,null))),(!n||p[0]&128&&r!==(r="z-10 relative w-full flex transition-[background-color,height] gap-2 rounded-md mr-4 "+(d[7]?"shadow-2xl dropdown overflow-hidden":"")+" svelte-1spg7cw"))&&v(t,"class",r),(!n||p[0]&129)&&O(t,"height",(d[7]?d[0].length*2.25:2.25)+"rem"),d[3]&&!d[7]?s?(s.p(d,p),p[0]&136&&E(s,1)):(s=Be(d),s.c(),E(s,1),s.m(e,null)):s&&(M(),z(s,1,1,()=>{s=null}),$())},i(d){n||(E(s),n=!0)},o(d){z(s),n=!1},d(d){d&&m(e),u.d(),l[20](null),s&&s.d(),h(),i=!1,f()}}}function vt(l){let e,t,r,o,h=X(l[0]),n=[];for(let i=0;i<h.length;i+=1)n[i]=Re(Le(l,h,i));return{c(){e=w("div"),t=w("div");for(let i=0;i<n.length;i+=1)n[i].c();this.h()},l(i){e=k(i,"DIV",{class:!0});var f=y(e);t=k(f,"DIV",{class:!0});var a=y(t);for(let c=0;c<n.length;c+=1)n[c].l(a);a.forEach(m),f.forEach(m),this.h()},h(){v(t,"class","flex flex-col shadow-2xl border border-zinc-700/80 overflow-hidden"),v(e,"class","absolute w-full h-9 top-0")},m(i,f){S(i,e,f),b(e,t);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(t,null);r||(o=[N(e,"mousedown",K(l[17])),N(e,"click",l[19])],r=!0)},p(i,f){if(f[0]&65){h=X(i[0]);let a;for(a=0;a<h.length;a+=1){const c=Le(i,h,a);n[a]?n[a].p(c,f):(n[a]=Re(c),n[a].c(),n[a].m(t,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=h.length}},d(i){i&&m(e),he(n,i),r=!1,ae(o)}}}function bt(l){let e,t,r,o,h=X(l[0]),n=[];for(let f=0;f<h.length;f+=1)n[f]=Ae(Oe(l,h,f));let i=l[3]&&je();return{c(){e=w("div"),t=w("div");for(let f=0;f<n.length;f+=1)n[f].c();o=I(),i&&i.c(),this.h()},l(f){e=k(f,"DIV",{class:!0,style:!0});var a=y(e);t=k(a,"DIV",{class:!0});var c=y(t);for(let u=0;u<n.length;u+=1)n[u].l(c);c.forEach(m),o=V(a),i&&i.l(a),a.forEach(m),this.h()},h(){v(t,"class","relative flex items-center gap-2 px-4 w-fit h-9"),re(()=>l[18].call(t)),v(e,"class","absolute flex gap-2 overflow-hidden h-9 border border-transparent"),O(e,"width",l[3]?`${l[12]}px`:"100%")},m(f,a){S(f,e,a),b(e,t);for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(t,null);r=we(t,l[18].bind(t)),b(e,o),i&&i.m(e,null)},p(f,a){if(a[0]&65){h=X(f[0]);let c;for(c=0;c<h.length;c+=1){const u=Oe(f,h,c);n[c]?n[c].p(u,a):(n[c]=Ae(u),n[c].c(),n[c].m(t,null))}for(;c<n.length;c+=1)n[c].d(1);n.length=h.length}f[3]?i||(i=je(),i.c(),i.m(e,null)):i&&(i.d(1),i=null),a[0]&4104&&O(e,"width",f[3]?`${f[12]}px`:"100%")},d(f){f&&m(e),he(n,f),r(),i&&i.d()}}}function Re(l){let e,t,r=l[39].name+"",o,h,n,i,f,a,c;return{c(){e=w("a"),t=w("p"),o=ee(r),h=I(),n=w("span"),f=I(),this.h()},l(u){e=k(u,"A",{href:!0,class:!0});var s=y(e);t=k(s,"P",{class:!0});var d=y(t);o=te(d,r),h=V(d),n=k(d,"SPAN",{class:!0}),y(n).forEach(m),d.forEach(m),f=V(s),s.forEach(m),this.h()},h(){v(n,"class",i="absolute left-0 bottom-0 h-px w-full "+(l[6].params.id===l[39].id?`${W[l[39].type].bgColor}`:"bg-transparent")+" svelte-1spg7cw"),v(t,"class","relative font-semibold text-lg h-fit w-fit"),v(e,"href",a="/"+l[39].id),v(e,"class",c="flex flex-col justify-center h-9 w-full px-4 hover:bg-zinc-700/30 transition "+W[l[39].type].textColor+" svelte-1spg7cw")},m(u,s){S(u,e,s),b(e,t),b(t,o),b(t,h),b(t,n),b(e,f)},p(u,s){s[0]&1&&r!==(r=u[39].name+"")&&Xe(o,r),s[0]&65&&i!==(i="absolute left-0 bottom-0 h-px w-full "+(u[6].params.id===u[39].id?`${W[u[39].type].bgColor}`:"bg-transparent")+" svelte-1spg7cw")&&v(n,"class",i),s[0]&1&&a!==(a="/"+u[39].id)&&v(e,"href",a),s[0]&1&&c!==(c="flex flex-col justify-center h-9 w-full px-4 hover:bg-zinc-700/30 transition "+W[u[39].type].textColor+" svelte-1spg7cw")&&v(e,"class",c)},d(u){u&&m(e)}}}function wt(l){let e;return{c(){e=w("span"),this.h()},l(t){e=k(t,"SPAN",{class:!0}),y(e).forEach(m),this.h()},h(){v(e,"class","h-6 w-px shrink-0 bg-zinc-600")},m(t,r){S(t,e,r)},d(t){t&&m(e)}}}function Ae(l){let e,t,r,o=l[39].name+"",h,n,i,f,a,c,u,s=l[41]!==0&&wt();return{c(){s&&s.c(),e=I(),t=w("div"),r=w("a"),h=ee(o),f=I(),a=w("span"),u=I(),this.h()},l(d){s&&s.l(d),e=V(d),t=k(d,"DIV",{class:!0});var p=y(t);r=k(p,"A",{href:!0,class:!0});var _=y(r);h=te(_,o),_.forEach(m),f=V(p),a=k(p,"SPAN",{class:!0}),y(a).forEach(m),u=V(p),p.forEach(m),this.h()},h(){v(r,"href",n="/"+l[39].id),v(r,"class",i="font-semibold text-lg h-fit "+W[l[39].type].textColor+" hover:opacity-75 transition svelte-1spg7cw"),v(a,"class",c="absolute left-0 bottom-0 h-px transition-[width] "+(l[6].params.id===l[39].id?`${W[l[39].type].bgColor} w-full`:"bg-transparent w-0")+" svelte-1spg7cw"),v(t,"class","relative flex flex-col")},m(d,p){s&&s.m(d,p),S(d,e,p),S(d,t,p),b(t,r),b(r,h),b(t,f),b(t,a),b(t,u)},p(d,p){p[0]&1&&o!==(o=d[39].name+"")&&Xe(h,o),p[0]&1&&n!==(n="/"+d[39].id)&&v(r,"href",n),p[0]&1&&i!==(i="font-semibold text-lg h-fit "+W[d[39].type].textColor+" hover:opacity-75 transition svelte-1spg7cw")&&v(r,"class",i),p[0]&65&&c!==(c="absolute left-0 bottom-0 h-px transition-[width] "+(d[6].params.id===d[39].id?`${W[d[39].type].bgColor} w-full`:"bg-transparent w-0")+" svelte-1spg7cw")&&v(a,"class",c)},d(d){d&&(m(e),m(t)),s&&s.d(d)}}}function je(l){let e;return{c(){e=w("span"),this.h()},l(t){e=k(t,"SPAN",{class:!0}),y(e).forEach(m),this.h()},h(){v(e,"class","absolute z-20 -right-4 w-32 h-9 bg-gradient-to-r from-transparent to-zinc-800 pointer-events-none")},m(t,r){S(t,e,r)},d(t){t&&m(e)}}}function Be(l){let e,t,r,o,h,n="Show all",i,f,a;return r=new se({props:{icon:ft,class:"flex text-xl transition "+(l[7]?"":"rotate-90")}}),{c(){e=w("button"),t=w("div"),F(r.$$.fragment),o=I(),h=w("p"),h.textContent=n,this.h()},l(c){e=k(c,"BUTTON",{class:!0});var u=y(e);t=k(u,"DIV",{class:!0});var s=y(t);q(r.$$.fragment,s),o=V(s),h=k(s,"P",{class:!0,"data-svelte-h":!0}),le(h)!=="svelte-q67c29"&&(h.textContent=n),s.forEach(m),u.forEach(m),this.h()},h(){v(h,"class","text-lg font-semibold"),v(t,"class","flex items-center gap-2 px-4 py-1 h-9 hover:bg-zinc-700/20 text-sky-500 transition"),v(e,"class","z-10 flex gap-2 overflow-hidden shrink-0 rounded-md dropdown svelte-1spg7cw")},m(c,u){S(c,e,u),b(e,t),G(r,t,null),b(t,o),b(t,h),i=!0,f||(a=[Qe(l[13].call(null,e)),N(e,"mousedown",K(l[21])),N(e,"mouseenter",K(l[22]))],f=!0)},p(c,u){const s={};u[0]&128&&(s.class="flex text-xl transition "+(c[7]?"":"rotate-90")),r.$set(s)},i(c){i||(E(r.$$.fragment,c),i=!0)},o(c){z(r.$$.fragment,c),i=!1},d(c){c&&m(e),Q(r),f=!1,ae(a)}}}function kt(l){let e,t,r,o,h,n,i,f=X(W),a=[];for(let s=0;s<f.length;s+=1)a[s]=Me(Ne(l,f,s));const c=s=>z(a[s],1,1,()=>{a[s]=null});let u=l[10]&&$e(l);return{c(){e=w("div"),t=w("div");for(let s=0;s<a.length;s+=1)a[s].c();r=I(),o=w("div"),u&&u.c(),h=I(),n=w("span"),this.h()},l(s){e=k(s,"DIV",{class:!0,style:!0});var d=y(e);t=k(d,"DIV",{class:!0});var p=y(t);for(let g=0;g<a.length;g+=1)a[g].l(p);p.forEach(m),r=V(d),o=k(d,"DIV",{class:!0});var _=y(o);u&&u.l(_),_.forEach(m),d.forEach(m),h=V(s),n=k(s,"SPAN",{class:!0,style:!0}),y(n).forEach(m),this.h()},h(){v(t,"class","relative dropdown w-1/2 flex flex-col h-full rounded-md border border-zinc-700/80 shadow-2xl overflow-hidden svelte-1spg7cw"),v(o,"class","relative w-1/2 h-full"),v(e,"class","absolute z-20 left-0 top-0 w-full h-full flex gap-4"),O(e,"width",l[9]+"px"),v(n,"class","absolute z-10 h-7 left-[5px] dropdown border border-zinc-700/80 svelte-1spg7cw"),O(n,"width",l[9]-10+"px"),O(n,"top",(l[10]?l[10].type*2.26+.25:0)+"rem")},m(s,d){S(s,e,d),b(e,t);for(let p=0;p<a.length;p+=1)a[p]&&a[p].m(t,null);b(e,r),b(e,o),u&&u.m(o,null),S(s,h,d),S(s,n,d),i=!0},p(s,d){if(d[0]&3074){f=X(W);let p;for(p=0;p<f.length;p+=1){const _=Ne(s,f,p);a[p]?(a[p].p(_,d),E(a[p],1)):(a[p]=Me(_),a[p].c(),E(a[p],1),a[p].m(t,null))}for(M(),p=f.length;p<a.length;p+=1)c(p);$()}s[10]?u?(u.p(s,d),d[0]&1024&&E(u,1)):(u=$e(s),u.c(),E(u,1),u.m(o,null)):u&&(M(),z(u,1,1,()=>{u=null}),$()),(!i||d[0]&512)&&O(e,"width",s[9]+"px"),(!i||d[0]&512)&&O(n,"width",s[9]-10+"px"),(!i||d[0]&1024)&&O(n,"top",(s[10]?s[10].type*2.26+.25:0)+"rem")},i(s){if(!i){for(let d=0;d<f.length;d+=1)E(a[d]);E(u),i=!0}},o(s){a=a.filter(Boolean);for(let d=0;d<a.length;d+=1)z(a[d]);z(u),i=!1},d(s){s&&(m(e),m(h),m(n)),he(a,s),u&&u.d()}}}function yt(l){let e,t,r,o,h,n="New list",i,f,a;return r=new se({props:{icon:Ze}}),{c(){e=w("button"),t=w("div"),F(r.$$.fragment),o=I(),h=w("p"),h.textContent=n,this.h()},l(c){e=k(c,"BUTTON",{class:!0});var u=y(e);t=k(u,"DIV",{class:!0});var s=y(t);q(r.$$.fragment,s),o=V(s),h=k(s,"P",{class:!0,"data-svelte-h":!0}),le(h)!=="svelte-c31xox"&&(h.textContent=n),s.forEach(m),u.forEach(m),this.h()},h(){v(h,"class","text-lg font-semibold"),v(t,"class","flex gap-2 w-full h-fit px-4 py-1 items-center hover:bg-zinc-700/20 transition"),v(e,"class","dropdown flex w-full h-full text-sky-500 rounded-md border border-transparent overflow-hidden svelte-1spg7cw")},m(c,u){S(c,e,u),b(e,t),G(r,t,null),b(t,o),b(t,h),i=!0,f||(a=[N(e,"click",l[24]),N(e,"mouseover",l[25])],f=!0)},p:H,i(c){i||(E(r.$$.fragment,c),i=!0)},o(c){z(r.$$.fragment,c),i=!1},d(c){c&&m(e),Q(r),f=!1,ae(a)}}}function He(l){let e,t;return e=new se({props:{icon:ut}}),{c(){F(e.$$.fragment)},l(r){q(e.$$.fragment,r)},m(r,o){G(e,r,o),t=!0},p:H,i(r){t||(E(e.$$.fragment,r),t=!0)},o(r){z(e.$$.fragment,r),t=!1},d(r){Q(e,r)}}}function Me(l){let e,t,r=l[34].name+"",o,h,n,i,f,a,c,u,s=l[34]===l[10]&&He();function d(){return l[26](l[34])}function p(){return l[27](l[34])}return{c(){e=w("button"),t=w("p"),o=ee(r),h=ee(" list"),n=I(),s&&s.c(),i=I(),this.h()},l(_){e=k(_,"BUTTON",{class:!0});var g=y(e);t=k(g,"P",{class:!0});var x=y(t);o=te(x,r),h=te(x," list"),x.forEach(m),n=V(g),s&&s.l(g),i=V(g),g.forEach(m),this.h()},h(){v(t,"class","text-lg font-semibold"),v(e,"class",f="flex gap-2 items-center justify-between px-4 py-1 w-full "+l[34].textColor+" "+(l[10]===l[34]?"bg-zinc-700/20":"s")+" transition svelte-1spg7cw")},m(_,g){S(_,e,g),b(e,t),b(t,o),b(t,h),b(e,n),s&&s.m(e,null),b(e,i),a=!0,c||(u=[N(e,"mouseenter",d),N(e,"mousedown",K(l[16])),N(e,"click",p)],c=!0)},p(_,g){l=_,l[34]===l[10]?s?(s.p(l,g),g[0]&1024&&E(s,1)):(s=He(),s.c(),E(s,1),s.m(e,i)):s&&(M(),z(s,1,1,()=>{s=null}),$()),(!a||g[0]&1024&&f!==(f="flex gap-2 items-center justify-between px-4 py-1 w-full "+l[34].textColor+" "+(l[10]===l[34]?"bg-zinc-700/20":"s")+" transition svelte-1spg7cw"))&&v(e,"class",f)},i(_){a||(E(s),a=!0)},o(_){z(s),a=!1},d(_){_&&m(e),s&&s.d(),c=!1,ae(u)}}}function $e(l){let e,t,r=X(ne),o=[];for(let n=0;n<r.length;n+=1)o[n]=Ue(Pe(l,r,n));const h=n=>z(o[n],1,1,()=>{o[n]=null});return{c(){e=w("div");for(let n=0;n<o.length;n+=1)o[n].c();this.h()},l(n){e=k(n,"DIV",{class:!0,style:!0});var i=y(e);for(let f=0;f<o.length;f+=1)o[f].l(i);i.forEach(m),this.h()},h(){v(e,"class","absolute z-20 right-0 dropdown w-full flex flex-col rounded-md border border-zinc-700/80 shadow-2xl overflow-hidden svelte-1spg7cw"),O(e,"height",ne.length*2.25+"rem"),O(e,"top",(l[10]?l[10].type*2.25:0)+"rem")},m(n,i){S(n,e,i);for(let f=0;f<o.length;f+=1)o[f]&&o[f].m(e,null);t=!0},p(n,i){if(i[0]&3074){r=X(ne);let f;for(f=0;f<r.length;f+=1){const a=Pe(n,r,f);o[f]?(o[f].p(a,i),E(o[f],1)):(o[f]=Ue(a),o[f].c(),E(o[f],1),o[f].m(e,null))}for(M(),f=r.length;f<o.length;f+=1)h(f);$()}(!t||i[0]&1024)&&O(e,"top",(n[10]?n[10].type*2.25:0)+"rem")},i(n){if(!t){for(let i=0;i<r.length;i+=1)E(o[i]);t=!0}},o(n){o=o.filter(Boolean);for(let i=0;i<o.length;i+=1)z(o[i]);t=!1},d(n){n&&m(e),he(o,n)}}}function Ue(l){let e,t,r,o,h=l[34].name+"",n,i,f,a,c,u,s;t=new se({props:{icon:Ze}});function d(){return l[28](l[34])}function p(){return l[29](l[34])}return{c(){e=w("button"),F(t.$$.fragment),r=I(),o=w("p"),n=ee(h),i=ee(" list"),f=I(),this.h()},l(_){e=k(_,"BUTTON",{class:!0});var g=y(e);q(t.$$.fragment,g),r=V(g),o=k(g,"P",{class:!0});var x=y(o);n=te(x,h),i=te(x," list"),x.forEach(m),f=V(g),g.forEach(m),this.h()},h(){v(o,"class","text-lg font-semibold"),v(e,"class",a="flex gap-2 items-center px-4 py-1 w-full "+l[10].textColor+" filter "+l[34].filter+" "+(l[11]===l[34]?"bg-zinc-700/20":"")+" transition-[background-color] svelte-1spg7cw")},m(_,g){S(_,e,g),G(t,e,null),b(e,r),b(e,o),b(o,n),b(o,i),b(e,f),c=!0,u||(s=[N(e,"mouseenter",d),N(e,"mousedown",K(l[15])),N(e,"click",p)],u=!0)},p(_,g){l=_,(!c||g[0]&3072&&a!==(a="flex gap-2 items-center px-4 py-1 w-full "+l[10].textColor+" filter "+l[34].filter+" "+(l[11]===l[34]?"bg-zinc-700/20":"")+" transition-[background-color] svelte-1spg7cw"))&&v(e,"class",a)},i(_){c||(E(t.$$.fragment,_),c=!0)},o(_){z(t.$$.fragment,_),c=!1},d(_){_&&m(e),Q(t),u=!1,ae(s)}}}function xt(l){let e,t,r,o,h="Log out",n,i,f;return t=new se({props:{icon:Je}}),{c(){e=w("button"),F(t.$$.fragment),r=I(),o=w("p"),o.textContent=h,this.h()},l(a){e=k(a,"BUTTON",{class:!0});var c=y(e);q(t.$$.fragment,c),r=V(c),o=k(c,"P",{class:!0,"data-svelte-h":!0}),le(o)!=="svelte-1qve2gd"&&(o.textContent=h),c.forEach(m),this.h()},h(){v(o,"class","text-lg font-semibold"),v(e,"class","w-1/2 flex items-center gap-2 px-4 py-1 text-rose-500 bg-zinc-700/30 hover:bg-zinc-700/50 transition rounded-md")},m(a,c){S(a,e,c),G(t,e,null),b(e,r),b(e,o),n=!0,i||(f=N(e,"click",l[32]),i=!0)},p:H,i(a){n||(E(t.$$.fragment,a),n=!0)},o(a){z(t.$$.fragment,a),n=!1},d(a){a&&m(e),Q(t),i=!1,f()}}}function Et(l){let e,t,r,o,h="Log in",n,i,f;return t=new se({props:{icon:Je}}),{c(){e=w("button"),F(t.$$.fragment),r=I(),o=w("p"),o.textContent=h,this.h()},l(a){e=k(a,"BUTTON",{class:!0});var c=y(e);q(t.$$.fragment,c),r=V(c),o=k(c,"P",{class:!0,"data-svelte-h":!0}),le(o)!=="svelte-11k8kok"&&(o.textContent=h),c.forEach(m),this.h()},h(){v(o,"class","text-lg font-semibold"),v(e,"class","w-1/2 h-9 flex items-center gap-2 px-4 py-1 text-emerald-500 dropdown hover:bg-zinc-700/20 transition rounded-md svelte-1spg7cw")},m(a,c){S(a,e,c),G(t,e,null),b(e,r),b(e,o),n=!0,i||(f=N(e,"click",l[31]),i=!0)},p:H,i(a){n||(E(t.$$.fragment,a),n=!0)},o(a){z(t.$$.fragment,a),n=!1},d(a){a&&m(e),Q(t),i=!1,f()}}}function zt(l){let e,t,r,o,h='<span class="text-cyan-500">Media</span><span class="text-emerald-500">Faves</span>',n,i,f,a,c,u,s,d,p,_,g,x,P,U,T=l[0].length&&We(l);const Y=[yt,kt],R=[];function oe(D,L){return D[8]?1:0}u=oe(l),s=R[u]=Y[u](l);const ie=[Et,xt],A=[];function fe(D,L){return D[1]===null?0:1}return p=fe(l),_=A[p]=ie[p](l),{c(){e=w("header"),t=w("div"),r=w("div"),o=w("a"),o.innerHTML=h,n=I(),T&&T.c(),i=I(),f=w("div"),a=w("div"),c=w("div"),s.c(),d=I(),_.c(),this.h()},l(D){e=k(D,"HEADER",{class:!0});var L=y(e);t=k(L,"DIV",{class:!0});var j=y(t);r=k(j,"DIV",{class:!0});var B=y(r);o=k(B,"A",{href:!0,class:!0,"data-svelte-h":!0}),le(o)!=="svelte-15hexit"&&(o.innerHTML=h),n=V(B),T&&T.l(B),B.forEach(m),i=V(j),f=k(j,"DIV",{class:!0});var J=y(f);a=k(J,"DIV",{class:!0});var ce=y(a);c=k(ce,"DIV",{class:!0,style:!0});var ue=y(c);s.l(ue),ue.forEach(m),ce.forEach(m),d=V(J),_.l(J),J.forEach(m),j.forEach(m),L.forEach(m),this.h()},h(){v(o,"href","/"),v(o,"class","text-4xl font-bold flex"),v(r,"class","flex items-center gap-12 w-2/3 2xl:w-3/4 flex-grow-0"),v(c,"class","absolute top-0 left-0 w-full flex transition-[height] z-10"),O(c,"height",(l[8]?W.length*2.25:2.25)+"rem"),v(a,"class","relative w-1/2 flex"),v(f,"class","flex w-1/3 2xl:w-1/4 gap-4"),re(()=>l[33].call(f)),v(t,"class","flex items-center gap-8 w-11/12 xl:w-4/5"),v(e,"class","flex items-center justify-center w-full h-16 bg-zinc-800 py-3 shadow-2xl")},m(D,L){S(D,e,L),b(e,t),b(t,r),b(r,o),b(r,n),T&&T.m(r,null),b(t,i),b(t,f),b(f,a),b(a,c),R[u].m(c,null),b(f,d),A[p].m(f,null),g=we(f,l[33].bind(f)),x=!0,P||(U=N(a,"mouseleave",l[30]),P=!0)},p(D,L){D[0].length?T?(T.p(D,L),L[0]&1&&E(T,1)):(T=We(D),T.c(),E(T,1),T.m(r,null)):T&&(M(),z(T,1,1,()=>{T=null}),$());let j=u;u=oe(D),u===j?R[u].p(D,L):(M(),z(R[j],1,1,()=>{R[j]=null}),$(),s=R[u],s?s.p(D,L):(s=R[u]=Y[u](D),s.c()),E(s,1),s.m(c,null)),(!x||L[0]&256)&&O(c,"height",(D[8]?W.length*2.25:2.25)+"rem");let B=p;p=fe(D),p===B?A[p].p(D,L):(M(),z(A[B],1,1,()=>{A[B]=null}),$(),_=A[p],_?_.p(D,L):(_=A[p]=ie[p](D),_.c()),E(_,1),_.m(f,null))},i(D){x||(E(T),E(s),E(_),x=!0)},o(D){z(T),z(s),z(_),x=!1},d(D){D&&m(e),T&&T.d(),R[u].d(),A[p].d(),g(),P=!1,U()}}}function Dt(l,e,t){let r,o,h,n,i;Z(l,Ye,C=>t(6,i=C));let{lists:f=[]}=e,{user:a}=e;Ge(()=>{document.addEventListener("mousedown",x)});let c=!1,u=!1,s;function d(C){!s||!window||t(12,n=s.clientWidth+parseInt(window.getComputedStyle(s).marginRight.replace("px","")))}let p,_,g;function x(){t(7,c=!1),t(8,u=!1),t(10,_=void 0),t(11,g=void 0)}function P(C){_e.call(this,l,C)}function U(C){_e.call(this,l,C)}function T(C){_e.call(this,l,C)}function Y(){o=this.clientWidth,t(4,o)}const R=()=>t(7,c=!1);function oe(C){nt[C?"unshift":"push"](()=>{s=C,t(2,s)})}const ie=()=>t(7,c=!0),A=()=>t(7,c=!0);function fe(){r=this.clientWidth,t(5,r)}const D=()=>t(8,u=!0),L=()=>t(8,u=!0),j=C=>{t(10,_=C),t(11,g=ne[0])},B=async C=>{if(!a)return;const pe=await xe.add({name:`New ${C.slug} ${ne[0].slug}`,owner_id:a.uid,style:Ee.Column,type:C.type,rankType:ct.Ranks});await ze(`/${pe}`)},J=C=>t(11,g=C),ce=async C=>{if(!a||!_)return;const pe=await xe.add({name:`New ${_.slug} ${C.slug}`,owner_id:a.uid,style:Ee.Column,type:_.type,rankType:C.type});await ze(`/${pe}`)},ue=()=>t(8,u=!1),et=async()=>{await De.login()},tt=async()=>{await De.logout()};function lt(){p=this.offsetWidth,t(9,p)}return l.$$set=C=>{"lists"in C&&t(0,f=C.lists),"user"in C&&t(1,a=C.user)},l.$$.update=()=>{l.$$.dirty[0]&64&&i.params.id&&x(),l.$$.dirty[0]&48&&r&&o&&t(3,h=r<o),l.$$.dirty[0]&12&&s&&h&&d()},t(5,r=0),t(4,o=0),t(3,h=!1),t(12,n=0),[f,a,s,h,o,r,i,c,u,p,_,g,n,d,x,P,U,T,Y,R,oe,ie,A,fe,D,L,j,B,J,ce,ue,et,tt,lt]}class Ct extends ve{constructor(e){super(),be(this,e,Dt,zt,de,{lists:0,user:1},null,[-1,-1])}}function Tt(l){let e,t=`<div class="flex w-11/12 xl:w-4/5 justify-between items-center"><a draggable="false" href="https://developer.themoviedb.org/docs" target="_blank" class="flex flex-col flex-grow flex-shrink basis-0 items-center gap-4"><img src="/tmdb.svg" alt="TMDB" class="h-14"/> <h4 class="text-lg xl:text-xl font-semibold">Film/show search and images</h4></a> <a draggable="false" href="https://rawg.io/apidocs" target="_blank" class="flex flex-col flex-grow flex-shrink basis-0 items-center gap-4"><img src="/rawg.png" alt="RAWG" class="h-14 w-32 object-cover"/> <h4 class="text-lg xl:text-xl font-semibold">Game search and images</h4></a> <a draggable="false" href="https://developer.spotify.com/" target="_blank" class="flex flex-col flex-grow flex-shrink basis-0 items-center gap-4"><img src="/spotify.png" alt="Spotify" class="h-14"/> <h4 class="text-lg xl:text-xl font-semibold">Song search and album covers</h4></a> <a draggable="false" href="https://openlibrary.org/" target="_blank" class="flex flex-col flex-grow flex-shrink basis-0 items-center gap-4"><img src="/open_library.png" alt="OpenLibrary" class="h-14"/> <h4 class="text-lg xl:text-xl font-semibold">Book search and covers</h4></a></div> <p class="xl:text-lg">This product uses the TMDB, RAWG, Spotify and OpenLibrary APIs but is not endorsed or certified
		by any of these organizations</p> <span class="w-11/12 xl:w-4/5 h-px bg-zinc-600"></span> <div class="flex flex-grow flex-shrink basis-0 items-center gap-4"><h4 class="text-sm xl:text-lg font-semibold">MediaFaves is a non-profit site made by Niek Peters</h4> <p>-</p> <p class="text-sm xl:text-lg text-zinc-300">Copyright © Niek Peters 2023</p></div>`;return{c(){e=w("footer"),e.innerHTML=t,this.h()},l(r){e=k(r,"FOOTER",{class:!0,"data-svelte-h":!0}),le(e)!=="svelte-l56fxg"&&(e.innerHTML=t),this.h()},h(){v(e,"class","flex flex-col gap-8 items-center w-full mt-auto py-8 bg-zinc-900")},m(r,o){S(r,e,o)},p:H,i:H,o:H,d(r){r&&m(e)}}}class It extends ve{constructor(e){super(),be(this,e,null,Tt,de,{})}}async function Vt(l,e){if((await dt(Ce(Te,l))).exists)try{await ht(Ce(Te,l),{entries:e})}catch(r){console.error(r)}}let ge,Fe=!0;function St(l,e,t=200){if(Fe){Fe=!1;return}ge&&clearTimeout(ge),ge=setTimeout(async()=>{await Ke.save(l,e)},t)}const Ke={save:Vt,scheduleSave:St};function qe(l){let e,t,r,o,h;return{c(){e=w("div"),this.h()},l(n){e=k(n,"DIV",{class:!0}),y(e).forEach(m),this.h()},h(){v(e,"class","fixed w-screen h-screen filter brightness-[0.3]")},m(n,i){S(n,e,i),r=!0,o||(h=Qe(pt.loadImage(e)),o=!0)},p:H,i(n){r||(n&&re(()=>{r&&(t||(t=ye(e,Se,{},!0)),t.run(1))}),r=!0)},o(n){n&&(t||(t=ye(e,Se,{},!1)),t.run(0)),r=!1},d(n){n&&m(e),n&&t&&t.end(),o=!1,h()}}}function Pt(l){let e,t=l[2],r,o,h,n,i,f,a,c,u,s;re(l[8]);let d=qe();h=new Ct({props:{lists:l[3],user:l[0]}});const p=l[7].default,_=rt(p,l,l[6],null);return a=new It({}),{c(){e=w("div"),d.c(),r=I(),o=w("div"),F(h.$$.fragment),n=I(),i=w("main"),_&&_.c(),f=I(),F(a.$$.fragment),this.h()},l(g){e=k(g,"DIV",{class:!0});var x=y(e);d.l(x),r=V(x),o=k(x,"DIV",{class:!0});var P=y(o);q(h.$$.fragment,P),n=V(P),i=k(P,"MAIN",{class:!0});var U=y(i);_&&_.l(U),U.forEach(m),f=V(P),q(a.$$.fragment,P),P.forEach(m),x.forEach(m),this.h()},h(){v(i,"class","relative flex justify-center w-11/12 xl:w-4/5 gap-8"),v(o,"class","relative flex flex-col items-center gap-6 w-full min-h-[110vh]"),v(e,"class","flex flex-col w-screen min-h-[110vh] bg-gradient-to-tr from-zinc-800 to-zinc-700 text-zinc-200")},m(g,x){S(g,e,x),d.m(e,null),b(e,r),b(e,o),G(h,o,null),b(o,n),b(o,i),_&&_.m(i,null),b(o,f),G(a,o,null),c=!0,u||(s=N(window,"resize",l[8]),u=!0)},p(g,[x]){x&4&&de(t,t=g[2])?(M(),z(d,1,1,H),$(),d=qe(),d.c(),E(d,1),d.m(e,r)):d.p(g,x);const P={};x&8&&(P.lists=g[3]),x&1&&(P.user=g[0]),h.$set(P),_&&_.p&&(!c||x&64)&&at(_,p,g,g[6],c?it(p,g[6],x,null):ot(g[6]),null)},i(g){c||(E(d),E(h.$$.fragment,g),E(_,g),E(a.$$.fragment,g),c=!0)},o(g){z(d),z(h.$$.fragment,g),z(_,g),z(a.$$.fragment,g),c=!1},d(g){g&&m(e),d.d(g),Q(h),_&&_.d(g),Q(a),u=!1,s()}}}function Nt(l,e,t){let r,o,h,n,i,f;Z(l,_t,s=>t(4,r=s)),Z(l,Ye,s=>t(5,o=s)),Z(l,me,s=>t(0,h=s)),Z(l,Ve,s=>t(1,n=s)),Z(l,mt,s=>t(2,i=s)),Z(l,Ie,s=>t(3,f=s));let{$$slots:a={},$$scope:c}=e;Ge(async()=>{const{auth:s,listsRef:d}=await ke(()=>import("../chunks/user.2e12a8a7.js").then(p=>p.be),["_app/immutable/chunks/user.2e12a8a7.js","_app/immutable/chunks/scheduler.b8a490f1.js","_app/immutable/chunks/index.6eacc56a.js","_app/immutable/chunks/singletons.df133e99.js","_app/immutable/chunks/stores.67625e07.js","_app/immutable/assets/user.95b16411.css"]);s.onAuthStateChanged(async p=>{if(p){me.set({uid:p.uid,name:p.displayName||"Anonymous",email:p.email||""});const{getDocs:_,query:g,where:x}=await ke(()=>import("../chunks/index.esm.7745a9c4.js"),["_app/immutable/chunks/index.esm.7745a9c4.js","_app/immutable/chunks/user.2e12a8a7.js","_app/immutable/chunks/scheduler.b8a490f1.js","_app/immutable/chunks/index.6eacc56a.js","_app/immutable/chunks/singletons.df133e99.js","_app/immutable/chunks/stores.67625e07.js","_app/immutable/assets/user.95b16411.css"]),P=g(d,x("owner_id","==",p.uid)),T=(await _(P)).docs.map(Y=>({id:Y.id,...Y.data()}));Ie.set(T)}else me.set(null)})});function u(){Ve.set(n=window.innerWidth)}return l.$$set=s=>{"$$scope"in s&&t(6,c=s.$$scope)},l.$$.update=()=>{l.$$.dirty&49&&h&&Ke.scheduleSave(o.params.id,r,200)},[h,n,i,f,r,o,c,a,u]}class Ht extends ve{constructor(e){super(),be(this,e,Nt,Pt,de,{})}}export{Ht as component,Bt as universal};
