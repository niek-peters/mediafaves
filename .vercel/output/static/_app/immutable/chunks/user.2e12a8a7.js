import{s as vg,n as yu,z as en}from"./scheduler.b8a490f1.js";import{S as Tg,i as wg,y as Iu,g as xr,d as Le,G as bn,H as Cn,a as Vn,n as O,I as Ui,h as Eu}from"./index.6eacc56a.js";import{j as Ag,w as zs}from"./singletons.df133e99.js";import{p as Rg}from"./stores.67625e07.js";function MA(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}const es=Ag("goto"),Bi=parseFloat;function Xo(n,e=";"){let t;if(Array.isArray(n))t=n.filter(r=>r);else{t=[];for(const r in n)n[r]&&t.push(`${r}:${n[r]}`)}return t.join(e)}function Sg(n,e,t,r){let i,s;const o="1em";let a,c,u,l="-.125em";const h="visible";return r&&(u="center",s="1.25em"),t&&(i=t),e&&(e=="lg"?(c="1.33333em",a=".75em",l="-.225em"):e=="xs"?c=".75em":e=="sm"?c=".875em":c=e.replace("x","em")),Xo([Xo({float:i,width:s,height:o,"line-height":a,"font-size":c,"text-align":u,"vertical-align":l,"transform-origin":"center",overflow:h}),n])}function Pg(n,e,t,r,i,s=1,o="",a=""){let c=1,u=1;return i&&(i=="horizontal"?c=-1:i=="vertical"?u=-1:c=u=-1),Xo([`translate(${Bi(e)*s}${o},${Bi(t)*s}${o})`,`scale(${c*Bi(n)},${u*Bi(n)})`,r&&`rotate(${r}${a})`]," ")}function vu(n){let e,t,r,i,s,o,a,c;function u(d,f){return typeof d[10][4]=="string"?Cg:bg}let l=u(n),h=l(n);return{c(){e=bn("svg"),t=bn("g"),r=bn("g"),h.c(),this.h()},l(d){e=Cn(d,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0});var f=Vn(e);t=Cn(f,"g",{transform:!0,"transform-origin":!0});var y=Vn(t);r=Cn(y,"g",{transform:!0});var I=Vn(r);h.l(I),I.forEach(Le),y.forEach(Le),f.forEach(Le),this.h()},h(){O(r,"transform",n[12]),O(t,"transform",i="translate("+n[10][0]/2+" "+n[10][1]/2+")"),O(t,"transform-origin",s=n[10][0]/4+" 0"),O(e,"id",o=n[1]||void 0),O(e,"class",a="svelte-fa "+n[0]+" svelte-1cj2gr0"),O(e,"style",n[11]),O(e,"viewBox",c="0 0 "+n[10][0]+" "+n[10][1]),O(e,"aria-hidden","true"),O(e,"role","img"),O(e,"xmlns","http://www.w3.org/2000/svg"),Ui(e,"pulse",n[4]),Ui(e,"spin",n[3])},m(d,f){xr(d,e,f),Eu(e,t),Eu(t,r),h.m(r,null)},p(d,f){l===(l=u(d))&&h?h.p(d,f):(h.d(1),h=l(d),h&&(h.c(),h.m(r,null))),f&4096&&O(r,"transform",d[12]),f&1024&&i!==(i="translate("+d[10][0]/2+" "+d[10][1]/2+")")&&O(t,"transform",i),f&1024&&s!==(s=d[10][0]/4+" 0")&&O(t,"transform-origin",s),f&2&&o!==(o=d[1]||void 0)&&O(e,"id",o),f&1&&a!==(a="svelte-fa "+d[0]+" svelte-1cj2gr0")&&O(e,"class",a),f&2048&&O(e,"style",d[11]),f&1024&&c!==(c="0 0 "+d[10][0]+" "+d[10][1])&&O(e,"viewBox",c),f&17&&Ui(e,"pulse",d[4]),f&9&&Ui(e,"spin",d[3])},d(d){d&&Le(e),h.d()}}}function bg(n){let e,t,r,i,s,o,a,c,u,l;return{c(){e=bn("path"),o=bn("path"),this.h()},l(h){e=Cn(h,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),Vn(e).forEach(Le),o=Cn(h,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),Vn(o).forEach(Le),this.h()},h(){O(e,"d",t=n[10][4][0]),O(e,"fill",r=n[6]||n[2]||"currentColor"),O(e,"fill-opacity",i=n[9]!=!1?n[7]:n[8]),O(e,"transform",s="translate("+n[10][0]/-2+" "+n[10][1]/-2+")"),O(o,"d",a=n[10][4][1]),O(o,"fill",c=n[5]||n[2]||"currentColor"),O(o,"fill-opacity",u=n[9]!=!1?n[8]:n[7]),O(o,"transform",l="translate("+n[10][0]/-2+" "+n[10][1]/-2+")")},m(h,d){xr(h,e,d),xr(h,o,d)},p(h,d){d&1024&&t!==(t=h[10][4][0])&&O(e,"d",t),d&68&&r!==(r=h[6]||h[2]||"currentColor")&&O(e,"fill",r),d&896&&i!==(i=h[9]!=!1?h[7]:h[8])&&O(e,"fill-opacity",i),d&1024&&s!==(s="translate("+h[10][0]/-2+" "+h[10][1]/-2+")")&&O(e,"transform",s),d&1024&&a!==(a=h[10][4][1])&&O(o,"d",a),d&36&&c!==(c=h[5]||h[2]||"currentColor")&&O(o,"fill",c),d&896&&u!==(u=h[9]!=!1?h[8]:h[7])&&O(o,"fill-opacity",u),d&1024&&l!==(l="translate("+h[10][0]/-2+" "+h[10][1]/-2+")")&&O(o,"transform",l)},d(h){h&&(Le(e),Le(o))}}}function Cg(n){let e,t,r,i;return{c(){e=bn("path"),this.h()},l(s){e=Cn(s,"path",{d:!0,fill:!0,transform:!0}),Vn(e).forEach(Le),this.h()},h(){O(e,"d",t=n[10][4]),O(e,"fill",r=n[2]||n[5]||"currentColor"),O(e,"transform",i="translate("+n[10][0]/-2+" "+n[10][1]/-2+")")},m(s,o){xr(s,e,o)},p(s,o){o&1024&&t!==(t=s[10][4])&&O(e,"d",t),o&36&&r!==(r=s[2]||s[5]||"currentColor")&&O(e,"fill",r),o&1024&&i!==(i="translate("+s[10][0]/-2+" "+s[10][1]/-2+")")&&O(e,"transform",i)},d(s){s&&Le(e)}}}function Vg(n){let e,t=n[10][4]&&vu(n);return{c(){t&&t.c(),e=Iu()},l(r){t&&t.l(r),e=Iu()},m(r,i){t&&t.m(r,i),xr(r,e,i)},p(r,[i]){r[10][4]?t?t.p(r,i):(t=vu(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:yu,o:yu,d(r){r&&Le(e),t&&t.d(r)}}}function Dg(n,e,t){let{class:r=""}=e,{id:i=""}=e,{style:s=""}=e,{icon:o}=e,{size:a=""}=e,{color:c=""}=e,{fw:u=!1}=e,{pull:l=""}=e,{scale:h=1}=e,{translateX:d=0}=e,{translateY:f=0}=e,{rotate:y=""}=e,{flip:I=!1}=e,{spin:E=!1}=e,{pulse:b=!1}=e,{primaryColor:C=""}=e,{secondaryColor:S=""}=e,{primaryOpacity:F=1}=e,{secondaryOpacity:G=.4}=e,{swapOpacity:M=!1}=e,oe,Me,dt;return n.$$set=D=>{"class"in D&&t(0,r=D.class),"id"in D&&t(1,i=D.id),"style"in D&&t(13,s=D.style),"icon"in D&&t(14,o=D.icon),"size"in D&&t(15,a=D.size),"color"in D&&t(2,c=D.color),"fw"in D&&t(16,u=D.fw),"pull"in D&&t(17,l=D.pull),"scale"in D&&t(18,h=D.scale),"translateX"in D&&t(19,d=D.translateX),"translateY"in D&&t(20,f=D.translateY),"rotate"in D&&t(21,y=D.rotate),"flip"in D&&t(22,I=D.flip),"spin"in D&&t(3,E=D.spin),"pulse"in D&&t(4,b=D.pulse),"primaryColor"in D&&t(5,C=D.primaryColor),"secondaryColor"in D&&t(6,S=D.secondaryColor),"primaryOpacity"in D&&t(7,F=D.primaryOpacity),"secondaryOpacity"in D&&t(8,G=D.secondaryOpacity),"swapOpacity"in D&&t(9,M=D.swapOpacity)},n.$$.update=()=>{n.$$.dirty&16384&&t(10,oe=o&&o.icon||[0,0,"",[],""]),n.$$.dirty&237568&&t(11,Me=Sg(s,a,l,u)),n.$$.dirty&8126464&&t(12,dt=Pg(h,d,f,y,I,512))},[r,i,c,E,b,C,S,F,G,M,oe,Me,dt,s,o,a,u,l,h,d,f,y,I]}let LA=class extends Tg{constructor(e){super(),wg(this,e,Dg,Vg,vg,{class:0,id:1,style:13,icon:14,size:15,color:2,fw:16,pull:17,scale:18,translateX:19,translateY:20,rotate:21,flip:22,spin:3,pulse:4,primaryColor:5,secondaryColor:6,primaryOpacity:7,secondaryOpacity:8,swapOpacity:9})}};var UA={prefix:"fas",iconName:"caret-right",icon:[256,512,[],"f0da","M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]},BA={prefix:"fas",iconName:"caret-left",icon:[256,512,[],"f0d9","M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"]},qA={prefix:"fas",iconName:"grip-lines-vertical",icon:[192,512,[],"f7a5","M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V448c0 17.7 14.3 32 32 32s32-14.3 32-32V64zm128 0c0-17.7-14.3-32-32-32s-32 14.3-32 32V448c0 17.7 14.3 32 32 32s32-14.3 32-32V64z"]},zA={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},GA={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]},jA={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},KA={prefix:"fas",iconName:"border-all",icon:[448,512,[],"f84c","M384 96V224H256V96H384zm0 192V416H256V288H384zM192 224H64V96H192V224zM64 288H192V416H64V288zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]},WA={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},kg=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},gh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(t[l],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(mh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):kg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new Ng;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ng extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xg=function(n){const e=mh(n);return gh.encodeByteArray(e,!0)},gs=function(n){return xg(n).replace(/\./g,"")},ph=function(n){try{return gh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=()=>Og().__FIREBASE_DEFAULTS__,Lg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Fg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ph(n[1]);return e&&JSON.parse(e)},Gs=()=>{try{return Mg()||Lg()||Fg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},_h=n=>{var e,t;return(t=(e=Gs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ug=n=>{const e=_h(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},yh=()=>{var n;return(n=Gs())===null||n===void 0?void 0:n.config},Ih=n=>{var e;return(e=Gs())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[gs(JSON.stringify(t)),gs(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le())}function Gg(){var n;const e=(n=Gs())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Kg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wg(){const n=le();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Hg(){return!Gg()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Eh(){try{return typeof indexedDB=="object"}catch{return!1}}function $g(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg="FirebaseError";class at extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Qg,Object.setPrototypeOf(this,at.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oi.prototype.create)}}class oi{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Jg(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new at(i,a,r)}}function Jg(n,e){return n.replace(Yg,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Yg=/\{\$([^}]+)}/g;function Xg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ln(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Tu(s)&&Tu(o)){if(!Ln(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Tu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zg(n,e){const t=new ep(n,e);return t.subscribe.bind(t)}class ep{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");tp(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=ko),i.error===void 0&&(i.error=ko),i.complete===void 0&&(i.complete=ko);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ko(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(n){return n&&n._delegate?n._delegate:n}class tn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Bg;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ip(e))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qt){return this.instances.has(e)}getOptions(e=qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qt){return this.component?this.component.multipleInstances?e:qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rp(n){return n===qt?void 0:n}function ip(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new np(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const op={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},ap=z.INFO,cp={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},up=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=cp[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ba{constructor(e){this.name=e,this._logLevel=ap,this._logHandler=up,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?op[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}const lp=(n,e)=>e.some(t=>n instanceof t);let wu,Au;function hp(){return wu||(wu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dp(){return Au||(Au=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vh=new WeakMap,Zo=new WeakMap,Th=new WeakMap,No=new WeakMap,qa=new WeakMap;function fp(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(wt(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&vh.set(t,n)}).catch(()=>{}),qa.set(e,n),e}function mp(n){if(Zo.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Zo.set(n,e)}let ea={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Zo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Th.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return wt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function gp(n){ea=n(ea)}function pp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(xo(this),e,...t);return Th.set(r,e.sort?e.sort():[e]),wt(r)}:dp().includes(n)?function(...e){return n.apply(xo(this),e),wt(vh.get(this))}:function(...e){return wt(n.apply(xo(this),e))}}function _p(n){return typeof n=="function"?pp(n):(n instanceof IDBTransaction&&mp(n),lp(n,hp())?new Proxy(n,ea):n)}function wt(n){if(n instanceof IDBRequest)return fp(n);if(No.has(n))return No.get(n);const e=_p(n);return e!==n&&(No.set(n,e),qa.set(e,n)),e}const xo=n=>qa.get(n);function yp(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=wt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(wt(o.result),c.oldVersion,c.newVersion,wt(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Ip=["get","getKey","getAll","getAllKeys","count"],Ep=["put","add","delete","clear"],Oo=new Map;function Ru(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Oo.get(e))return Oo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Ep.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ip.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&c.done]))[0]};return Oo.set(e,s),s}gp(n=>({...n,get:(e,t,r)=>Ru(e,t)||n.get(e,t,r),has:(e,t)=>!!Ru(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Tp(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Tp(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ta="@firebase/app",Su="0.9.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new Ba("@firebase/app"),wp="@firebase/app-compat",Ap="@firebase/analytics-compat",Rp="@firebase/analytics",Sp="@firebase/app-check-compat",Pp="@firebase/app-check",bp="@firebase/auth",Cp="@firebase/auth-compat",Vp="@firebase/database",Dp="@firebase/database-compat",kp="@firebase/functions",Np="@firebase/functions-compat",xp="@firebase/installations",Op="@firebase/installations-compat",Mp="@firebase/messaging",Lp="@firebase/messaging-compat",Fp="@firebase/performance",Up="@firebase/performance-compat",Bp="@firebase/remote-config",qp="@firebase/remote-config-compat",zp="@firebase/storage",Gp="@firebase/storage-compat",jp="@firebase/firestore",Kp="@firebase/firestore-compat",Wp="firebase",Hp="10.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps="[DEFAULT]",$p={[ta]:"fire-core",[wp]:"fire-core-compat",[Rp]:"fire-analytics",[Ap]:"fire-analytics-compat",[Pp]:"fire-app-check",[Sp]:"fire-app-check-compat",[bp]:"fire-auth",[Cp]:"fire-auth-compat",[Vp]:"fire-rtdb",[Dp]:"fire-rtdb-compat",[kp]:"fire-fn",[Np]:"fire-fn-compat",[xp]:"fire-iid",[Op]:"fire-iid-compat",[Mp]:"fire-fcm",[Lp]:"fire-fcm-compat",[Fp]:"fire-perf",[Up]:"fire-perf-compat",[Bp]:"fire-rc",[qp]:"fire-rc-compat",[zp]:"fire-gcs",[Gp]:"fire-gcs-compat",[jp]:"fire-fst",[Kp]:"fire-fst-compat","fire-js":"fire-js",[Wp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new Map,na=new Map;function Qp(n,e){try{n.container.addComponent(e)}catch(t){nn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Fn(n){const e=n.name;if(na.has(e))return nn.debug(`There were multiple attempts to register component ${e}.`),!1;na.set(e,n);for(const t of rn.values())Qp(t,n);return!0}function ci(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Jp(n,e,t=ps){ci(n,e).clearInstance(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},At=new oi("app","Firebase",Yp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=Hp;function ra(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ps,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw At.create("bad-app-name",{appName:String(i)});if(t||(t=yh()),!t)throw At.create("no-options");const s=rn.get(i);if(s){if(Ln(t,s.options)&&Ln(r,s.config))return s;throw At.create("duplicate-app",{appName:i})}const o=new sp(i);for(const c of na.values())o.addComponent(c);const a=new Xp(t,r,o);return rn.set(i,a),a}function za(n=ps){const e=rn.get(n);if(!e&&n===ps&&yh())return ra();if(!e)throw At.create("no-app",{appName:n});return e}function Zp(){return Array.from(rn.values())}async function e_(n){const e=n.name;rn.has(e)&&(rn.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function Rt(n,e,t){var r;let i=(r=$p[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nn.warn(a.join(" "));return}Fn(new tn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_="firebase-heartbeat-database",n_=1,Or="firebase-heartbeat-store";let Mo=null;function wh(){return Mo||(Mo=yp(t_,n_,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Or)}}}).catch(n=>{throw At.create("idb-open",{originalErrorMessage:n.message})})),Mo}async function r_(n){try{return await(await wh()).transaction(Or).objectStore(Or).get(Ah(n))}catch(e){if(e instanceof at)nn.warn(e.message);else{const t=At.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});nn.warn(t.message)}}}async function Pu(n,e){try{const r=(await wh()).transaction(Or,"readwrite");await r.objectStore(Or).put(e,Ah(n)),await r.done}catch(t){if(t instanceof at)nn.warn(t.message);else{const r=At.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});nn.warn(r.message)}}}function Ah(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=1024,s_=30*24*60*60*1e3;class o_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new c_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=bu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=s_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=bu(),{heartbeatsToSend:t,unsentEntries:r}=a_(this._heartbeatsCache.heartbeats),i=gs(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function bu(){return new Date().toISOString().substring(0,10)}function a_(n,e=i_){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Cu(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Cu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class c_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Eh()?$g().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await r_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Cu(n){return gs(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(n){Fn(new tn("platform-logger",e=>new vp(e),"PRIVATE")),Fn(new tn("heartbeat",e=>new o_(e),"PRIVATE")),Rt(ta,Su,n),Rt(ta,Su,"esm2017"),Rt("fire-js","")}u_("");var l_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},w,Ga=Ga||{},k=l_||self;function js(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function ui(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function h_(n){return Object.prototype.hasOwnProperty.call(n,Lo)&&n[Lo]||(n[Lo]=++d_)}var Lo="closure_uid_"+(1e9*Math.random()>>>0),d_=0;function f_(n,e,t){return n.call.apply(n.bind,arguments)}function m_(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function Ae(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ae=f_:Ae=m_,Ae.apply(null,arguments)}function qi(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function ge(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function kt(){this.s=this.s,this.o=this.o}var g_=0;kt.prototype.s=!1;kt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),g_!=0)&&h_(this)};kt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Rh=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function ja(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function Vu(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(js(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function Re(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var p_=function(){if(!k.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{k.addEventListener("test",()=>{},e),k.removeEventListener("test",()=>{},e)}catch{}return n}();function Mr(n){return/^[\s\xa0]*$/.test(n)}function Ks(){var n=k.navigator;return n&&(n=n.userAgent)?n:""}function qe(n){return Ks().indexOf(n)!=-1}function Ka(n){return Ka[" "](n),n}Ka[" "]=function(){};function __(n,e){var t=uy;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var y_=qe("Opera"),Un=qe("Trident")||qe("MSIE"),Sh=qe("Edge"),ia=Sh||Un,Ph=qe("Gecko")&&!(Ks().toLowerCase().indexOf("webkit")!=-1&&!qe("Edge"))&&!(qe("Trident")||qe("MSIE"))&&!qe("Edge"),I_=Ks().toLowerCase().indexOf("webkit")!=-1&&!qe("Edge");function bh(){var n=k.document;return n?n.documentMode:void 0}var sa;e:{var Fo="",Uo=function(){var n=Ks();if(Ph)return/rv:([^\);]+)(\)|;)/.exec(n);if(Sh)return/Edge\/([\d\.]+)/.exec(n);if(Un)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(I_)return/WebKit\/(\S+)/.exec(n);if(y_)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Uo&&(Fo=Uo?Uo[1]:""),Un){var Bo=bh();if(Bo!=null&&Bo>parseFloat(Fo)){sa=String(Bo);break e}}sa=Fo}var oa;if(k.document&&Un){var Du=bh();oa=Du||parseInt(sa,10)||void 0}else oa=void 0;var E_=oa;function Lr(n,e){if(Re.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Ph){e:{try{Ka(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:v_[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Lr.$.h.call(this)}}ge(Lr,Re);var v_={2:"touch",3:"pen",4:"mouse"};Lr.prototype.h=function(){Lr.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var li="closure_listenable_"+(1e6*Math.random()|0),T_=0;function w_(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=i,this.key=++T_,this.fa=this.ia=!1}function Ws(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Wa(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function A_(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function Ch(n){const e={};for(const t in n)e[t]=n[t];return e}const ku="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Vh(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<ku.length;s++)t=ku[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function Hs(n){this.src=n,this.g={},this.h=0}Hs.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=ca(n,e,r,i);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new w_(e,this.src,s,!!r,i),e.ia=t,n.push(e)),e};function aa(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=Rh(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ws(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function ca(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==e&&s.capture==!!t&&s.la==r)return i}return-1}var Ha="closure_lm_"+(1e6*Math.random()|0),qo={};function Dh(n,e,t,r,i){if(r&&r.once)return Nh(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Dh(n,e[s],t,r,i);return null}return t=Ja(t),n&&n[li]?n.O(e,t,ui(r)?!!r.capture:!!r,i):kh(n,e,t,!1,r,i)}function kh(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=ui(i)?!!i.capture:!!i,a=Qa(n);if(a||(n[Ha]=a=new Hs(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=R_(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)p_||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(Oh(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function R_(){function n(t){return e.call(n.src,n.listener,t)}const e=S_;return n}function Nh(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Nh(n,e[s],t,r,i);return null}return t=Ja(t),n&&n[li]?n.P(e,t,ui(r)?!!r.capture:!!r,i):kh(n,e,t,!0,r,i)}function xh(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)xh(n,e[s],t,r,i);else r=ui(r)?!!r.capture:!!r,t=Ja(t),n&&n[li]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=ca(s,t,r,i),-1<t&&(Ws(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=Qa(n))&&(e=n.g[e.toString()],n=-1,e&&(n=ca(e,t,r,i)),(t=-1<n?e[n]:null)&&$a(t))}function $a(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[li])aa(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(Oh(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=Qa(e))?(aa(t,n),t.h==0&&(t.src=null,e[Ha]=null)):Ws(n)}}}function Oh(n){return n in qo?qo[n]:qo[n]="on"+n}function S_(n,e){if(n.fa)n=!0;else{e=new Lr(e,this);var t=n.listener,r=n.la||n.src;n.ia&&$a(n),n=t.call(r,e)}return n}function Qa(n){return n=n[Ha],n instanceof Hs?n:null}var zo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ja(n){return typeof n=="function"?n:(n[zo]||(n[zo]=function(e){return n.handleEvent(e)}),n[zo])}function me(){kt.call(this),this.i=new Hs(this),this.S=this,this.J=null}ge(me,kt);me.prototype[li]=!0;me.prototype.removeEventListener=function(n,e,t,r){xh(this,n,e,t,r)};function Ee(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new Re(e,n);else if(e instanceof Re)e.target=e.target||n;else{var i=e;e=new Re(r,n),Vh(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=zi(o,r,!0,e)&&i}if(o=e.g=n,i=zi(o,r,!0,e)&&i,i=zi(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=zi(o,r,!1,e)&&i}me.prototype.N=function(){if(me.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)Ws(t[r]);delete n.g[e],n.h--}}this.J=null};me.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};me.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function zi(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&aa(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ya=k.JSON.stringify;class P_{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function b_(){var n=Xa;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class C_{constructor(){this.h=this.g=null}add(e,t){const r=Mh.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var Mh=new P_(()=>new V_,n=>n.reset());class V_{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function D_(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function k_(n){k.setTimeout(()=>{throw n},0)}let Fr,Ur=!1,Xa=new C_,Lh=()=>{const n=k.Promise.resolve(void 0);Fr=()=>{n.then(N_)}};var N_=()=>{for(var n;n=b_();){try{n.h.call(n.g)}catch(t){k_(t)}var e=Mh;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Ur=!1};function $s(n,e){me.call(this),this.h=n||1,this.g=e||k,this.j=Ae(this.qb,this),this.l=Date.now()}ge($s,me);w=$s.prototype;w.ga=!1;w.T=null;w.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ee(this,"tick"),this.ga&&(Za(this),this.start()))}};w.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Za(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}w.N=function(){$s.$.N.call(this),Za(this),delete this.g};function ec(n,e,t){if(typeof n=="function")t&&(n=Ae(n,t));else if(n&&typeof n.handleEvent=="function")n=Ae(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:k.setTimeout(n,e||0)}function Fh(n){n.g=ec(()=>{n.g=null,n.i&&(n.i=!1,Fh(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class x_ extends kt{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Fh(this)}N(){super.N(),this.g&&(k.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Br(n){kt.call(this),this.h=n,this.g={}}ge(Br,kt);var Nu=[];function Uh(n,e,t,r){Array.isArray(t)||(t&&(Nu[0]=t.toString()),t=Nu);for(var i=0;i<t.length;i++){var s=Dh(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function Bh(n){Wa(n.g,function(e,t){this.g.hasOwnProperty(t)&&$a(e)},n),n.g={}}Br.prototype.N=function(){Br.$.N.call(this),Bh(this)};Br.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Qs(){this.g=!0}Qs.prototype.Ea=function(){this.g=!1};function O_(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function M_(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function Pn(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+F_(n,t)+(r?" "+r:"")})}function L_(n,e){n.info(function(){return"TIMEOUT: "+e})}Qs.prototype.info=function(){};function F_(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ya(t)}catch{return e}}var gn={},xu=null;function Js(){return xu=xu||new me}gn.Ta="serverreachability";function qh(n){Re.call(this,gn.Ta,n)}ge(qh,Re);function qr(n){const e=Js();Ee(e,new qh(e))}gn.STAT_EVENT="statevent";function zh(n,e){Re.call(this,gn.STAT_EVENT,n),this.stat=e}ge(zh,Re);function Pe(n){const e=Js();Ee(e,new zh(e,n))}gn.Ua="timingevent";function Gh(n,e){Re.call(this,gn.Ua,n),this.size=e}ge(Gh,Re);function hi(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return k.setTimeout(function(){n()},e)}var Ys={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},jh={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function tc(){}tc.prototype.h=null;function Ou(n){return n.h||(n.h=n.i())}function Kh(){}var di={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function nc(){Re.call(this,"d")}ge(nc,Re);function rc(){Re.call(this,"c")}ge(rc,Re);var ua;function Xs(){}ge(Xs,tc);Xs.prototype.g=function(){return new XMLHttpRequest};Xs.prototype.i=function(){return{}};ua=new Xs;function fi(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new Br(this),this.P=U_,n=ia?125:void 0,this.V=new $s(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Wh}function Wh(){this.i=null,this.g="",this.h=!1}var U_=45e3,la={},_s={};w=fi.prototype;w.setTimeout=function(n){this.P=n};function ha(n,e,t){n.L=1,n.v=eo(rt(e)),n.s=t,n.S=!0,Hh(n,null)}function Hh(n,e){n.G=Date.now(),mi(n),n.A=rt(n.v);var t=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),td(t.i,"t",r),n.C=0,t=n.l.J,n.h=new Wh,n.g=Td(n.l,t?e:null,!n.s),0<n.O&&(n.M=new x_(Ae(n.Pa,n,n.g),n.O)),Uh(n.U,n.g,"readystatechange",n.nb),e=n.I?Ch(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),qr(),O_(n.j,n.u,n.A,n.m,n.W,n.s)}w.nb=function(n){n=n.target;const e=this.M;e&&ze(n)==3?e.l():this.Pa(n)};w.Pa=function(n){try{if(n==this.g)e:{const l=ze(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||ia||this.g&&(this.h.h||this.g.ja()||Uu(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?qr(3):qr(2)),Zs(this);var t=this.g.da();this.ca=t;t:if($h(this)){var r=Uu(this.g);n="";var i=r.length,s=ze(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ht(this),Pr(this);var o="";break t}this.h.i=new k.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,M_(this.j,this.u,this.A,this.m,this.W,l,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Mr(a)){var u=a;break t}}u=null}if(t=u)Pn(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,da(this,t);else{this.i=!1,this.o=3,Pe(12),Ht(this),Pr(this);break e}}this.S?(Qh(this,l,o),ia&&this.i&&l==3&&(Uh(this.U,this.V,"tick",this.mb),this.V.start())):(Pn(this.j,this.m,o,null),da(this,o)),l==4&&Ht(this),this.i&&!this.J&&(l==4?yd(this.l,this):(this.i=!1,mi(this)))}else oy(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Pe(12)):(this.o=0,Pe(13)),Ht(this),Pr(this)}}}catch{}finally{}};function $h(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function Qh(n,e,t){let r=!0,i;for(;!n.J&&n.C<t.length;)if(i=B_(n,t),i==_s){e==4&&(n.o=4,Pe(14),r=!1),Pn(n.j,n.m,null,"[Incomplete Response]");break}else if(i==la){n.o=4,Pe(15),Pn(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else Pn(n.j,n.m,i,null),da(n,i);$h(n)&&i!=_s&&i!=la&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Pe(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),uc(e),e.M=!0,Pe(11))):(Pn(n.j,n.m,t,"[Invalid Chunked Response]"),Ht(n),Pr(n))}w.mb=function(){if(this.g){var n=ze(this.g),e=this.g.ja();this.C<e.length&&(Zs(this),Qh(this,n,e),this.i&&n!=4&&mi(this))}};function B_(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?_s:(t=Number(e.substring(t,r)),isNaN(t)?la:(r+=1,r+t>e.length?_s:(e=e.slice(r,r+t),n.C=r+t,e)))}w.cancel=function(){this.J=!0,Ht(this)};function mi(n){n.Y=Date.now()+n.P,Jh(n,n.P)}function Jh(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=hi(Ae(n.lb,n),e)}function Zs(n){n.B&&(k.clearTimeout(n.B),n.B=null)}w.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(L_(this.j,this.A),this.L!=2&&(qr(),Pe(17)),Ht(this),this.o=2,Pr(this)):Jh(this,this.Y-n)};function Pr(n){n.l.H==0||n.J||yd(n.l,n)}function Ht(n){Zs(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,Za(n.V),Bh(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function da(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||fa(t.i,n))){if(!n.K&&fa(t.i,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)Es(t),ro(t);else break e;cc(t),Pe(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.G&&t.A==0&&!t.v&&(t.v=hi(Ae(t.ib,t),6e3));if(1>=id(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else $t(t,11)}else if((n.K||t.g==n)&&Es(t),!Mr(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(t.V=u[0],u=u[1],t.H==2)if(u[0]=="c"){t.K=u[1],t.pa=u[2];const l=u[3];l!=null&&(t.ra=l,t.l.info("VER="+t.ra));const h=u[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.L=r,t.l.info("backChannelRequestTimeoutMs_="+r)),r=t;const f=n.g;if(f){const y=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(ic(s,s.h),s.h=null))}if(r.F){const I=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(r.Da=I,H(r.I,r.F,I))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=vd(r,r.J?r.pa:null,r.Y),o.K){sd(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Zs(a),mi(a)),r.g=o}else pd(r);0<t.j.length&&io(t)}else u[0]!="stop"&&u[0]!="close"||$t(t,7);else t.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?$t(t,7):ac(t):u[0]!="noop"&&t.h&&t.h.Aa(u),t.A=0)}}qr(4)}catch{}}function q_(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(js(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function z_(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(js(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function Yh(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(js(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=z_(n),r=q_(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var Xh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function G_(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Yt(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Yt){this.h=n.h,ys(this,n.j),this.s=n.s,this.g=n.g,Is(this,n.m),this.l=n.l;var e=n.i,t=new zr;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Mu(this,t),this.o=n.o}else n&&(e=String(n).match(Xh))?(this.h=!1,ys(this,e[1]||"",!0),this.s=Tr(e[2]||""),this.g=Tr(e[3]||"",!0),Is(this,e[4]),this.l=Tr(e[5]||"",!0),Mu(this,e[6]||"",!0),this.o=Tr(e[7]||"")):(this.h=!1,this.i=new zr(null,this.h))}Yt.prototype.toString=function(){var n=[],e=this.j;e&&n.push(wr(e,Lu,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(wr(e,Lu,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(wr(t,t.charAt(0)=="/"?W_:K_,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",wr(t,$_)),n.join("")};function rt(n){return new Yt(n)}function ys(n,e,t){n.j=t?Tr(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Is(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Mu(n,e,t){e instanceof zr?(n.i=e,Q_(n.i,n.h)):(t||(e=wr(e,H_)),n.i=new zr(e,n.h))}function H(n,e,t){n.i.set(e,t)}function eo(n){return H(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Tr(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function wr(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,j_),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function j_(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Lu=/[#\/\?@]/g,K_=/[#\?:]/g,W_=/[#\?]/g,H_=/[#\?@]/g,$_=/#/g;function zr(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function Nt(n){n.g||(n.g=new Map,n.h=0,n.i&&G_(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}w=zr.prototype;w.add=function(n,e){Nt(this),this.i=null,n=nr(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Zh(n,e){Nt(n),e=nr(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function ed(n,e){return Nt(n),e=nr(n,e),n.g.has(e)}w.forEach=function(n,e){Nt(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};w.ta=function(){Nt(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};w.Z=function(n){Nt(this);let e=[];if(typeof n=="string")ed(this,n)&&(e=e.concat(this.g.get(nr(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};w.set=function(n,e){return Nt(this),this.i=null,n=nr(this,n),ed(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};w.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function td(n,e,t){Zh(n,e),0<t.length&&(n.i=null,n.g.set(nr(n,e),ja(t)),n.h+=t.length)}w.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function nr(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function Q_(n,e){e&&!n.j&&(Nt(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(Zh(this,r),td(this,i,t))},n)),n.j=e}var J_=class{constructor(n,e){this.g=n,this.map=e}};function nd(n){this.l=n||Y_,k.PerformanceNavigationTiming?(n=k.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(k.g&&k.g.Ka&&k.g.Ka()&&k.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Y_=10;function rd(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function id(n){return n.h?1:n.g?n.g.size:0}function fa(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function ic(n,e){n.g?n.g.add(e):n.h=e}function sd(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}nd.prototype.cancel=function(){if(this.i=od(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function od(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return ja(n.i)}var X_=class{stringify(n){return k.JSON.stringify(n,void 0)}parse(n){return k.JSON.parse(n,void 0)}};function Z_(){this.g=new X_}function ey(n,e,t){const r=t||"";try{Yh(n,function(i,s){let o=i;ui(i)&&(o=Ya(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function ty(n,e){const t=new Qs;if(k.Image){const r=new Image;r.onload=qi(Gi,t,r,"TestLoadImage: loaded",!0,e),r.onerror=qi(Gi,t,r,"TestLoadImage: error",!1,e),r.onabort=qi(Gi,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=qi(Gi,t,r,"TestLoadImage: timeout",!1,e),k.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function Gi(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function gi(n){this.l=n.fc||null,this.j=n.ob||!1}ge(gi,tc);gi.prototype.g=function(){return new to(this.l,this.j)};gi.prototype.i=function(n){return function(){return n}}({});function to(n,e){me.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=sc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ge(to,me);var sc=0;w=to.prototype;w.open=function(n,e){if(this.readyState!=sc)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Gr(this)};w.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||k).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};w.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pi(this)),this.readyState=sc};w.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Gr(this)),this.g&&(this.readyState=3,Gr(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof k.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ad(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function ad(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}w.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?pi(this):Gr(this),this.readyState==3&&ad(this)}};w.Za=function(n){this.g&&(this.response=this.responseText=n,pi(this))};w.Ya=function(n){this.g&&(this.response=n,pi(this))};w.ka=function(){this.g&&pi(this)};function pi(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Gr(n)}w.setRequestHeader=function(n,e){this.v.append(n,e)};w.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};w.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Gr(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(to.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var ny=k.JSON.parse;function te(n){me.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=cd,this.L=this.M=!1}ge(te,me);var cd="",ry=/^https?$/i,iy=["POST","PUT"];w=te.prototype;w.Oa=function(n){this.M=n};w.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ua.g(),this.C=this.u?Ou(this.u):Ou(ua),this.g.onreadystatechange=Ae(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(s){Fu(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=k.FormData&&n instanceof k.FormData,!(0<=Rh(iy,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{hd(this),0<this.B&&((this.L=sy(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ae(this.ua,this)):this.A=ec(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Fu(this,s)}};function sy(n){return Un&&typeof n.timeout=="number"&&n.ontimeout!==void 0}w.ua=function(){typeof Ga<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ee(this,"timeout"),this.abort(8))};function Fu(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,ud(n),no(n)}function ud(n){n.F||(n.F=!0,Ee(n,"complete"),Ee(n,"error"))}w.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Ee(this,"complete"),Ee(this,"abort"),no(this))};w.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),no(this,!0)),te.$.N.call(this)};w.La=function(){this.s||(this.G||this.v||this.l?ld(this):this.kb())};w.kb=function(){ld(this)};function ld(n){if(n.h&&typeof Ga<"u"&&(!n.C[1]||ze(n)!=4||n.da()!=2)){if(n.v&&ze(n)==4)ec(n.La,0,n);else if(Ee(n,"readystatechange"),ze(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=o===0){var i=String(n.I).match(Xh)[1]||null;!i&&k.self&&k.self.location&&(i=k.self.location.protocol.slice(0,-1)),r=!ry.test(i?i.toLowerCase():"")}t=r}if(t)Ee(n,"complete"),Ee(n,"success");else{n.m=6;try{var s=2<ze(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",ud(n)}}finally{no(n)}}}}function no(n,e){if(n.g){hd(n);const t=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||Ee(n,"ready");try{t.onreadystatechange=r}catch{}}}function hd(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(k.clearTimeout(n.A),n.A=null)}w.isActive=function(){return!!this.g};function ze(n){return n.g?n.g.readyState:0}w.da=function(){try{return 2<ze(this)?this.g.status:-1}catch{return-1}};w.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};w.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),ny(e)}};function Uu(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case cd:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function oy(n){const e={};n=(n.g&&2<=ze(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(Mr(n[r]))continue;var t=D_(n[r]);const i=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const s=e[i]||[];e[i]=s,s.push(t)}A_(e,function(r){return r.join(", ")})}w.Ia=function(){return this.m};w.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function dd(n){let e="";return Wa(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function oc(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=dd(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):H(n,e,t))}function mr(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function fd(n){this.Ga=0,this.j=[],this.l=new Qs,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=mr("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=mr("baseRetryDelayMs",5e3,n),this.hb=mr("retryDelaySeedMs",1e4,n),this.eb=mr("forwardChannelMaxRetries",2,n),this.xa=mr("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new nd(n&&n.concurrentRequestLimit),this.Ja=new Z_,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}w=fd.prototype;w.ra=8;w.H=1;function ac(n){if(md(n),n.H==3){var e=n.W++,t=rt(n.I);if(H(t,"SID",n.K),H(t,"RID",e),H(t,"TYPE","terminate"),_i(n,t),e=new fi(n,n.l,e),e.L=2,e.v=eo(rt(t)),t=!1,k.navigator&&k.navigator.sendBeacon)try{t=k.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&k.Image&&(new Image().src=e.v,t=!0),t||(e.g=Td(e.l,null),e.g.ha(e.v)),e.G=Date.now(),mi(e)}Ed(n)}function ro(n){n.g&&(uc(n),n.g.cancel(),n.g=null)}function md(n){ro(n),n.u&&(k.clearTimeout(n.u),n.u=null),Es(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&k.clearTimeout(n.m),n.m=null)}function io(n){if(!rd(n.i)&&!n.m){n.m=!0;var e=n.Na;Fr||Lh(),Ur||(Fr(),Ur=!0),Xa.add(e,n),n.C=0}}function ay(n,e){return id(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=hi(Ae(n.Na,n,e),Id(n,n.C)),n.C++,!0)}w.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new fi(this,this.l,n);let s=this.s;if(this.U&&(s?(s=Ch(s),Vh(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var r=this.j[t];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=gd(this,i,e),t=rt(this.I),H(t,"RID",n),H(t,"CVER",22),this.F&&H(t,"X-HTTP-Session-Id",this.F),_i(this,t),s&&(this.O?e="headers="+encodeURIComponent(String(dd(s)))+"&"+e:this.o&&oc(t,this.o,s)),ic(this.i,i),this.bb&&H(t,"TYPE","init"),this.P?(H(t,"$req",e),H(t,"SID","null"),i.aa=!0,ha(i,t,null)):ha(i,t,e),this.H=2}}else this.H==3&&(n?Bu(this,n):this.j.length==0||rd(this.i)||Bu(this))};function Bu(n,e){var t;e?t=e.m:t=n.W++;const r=rt(n.I);H(r,"SID",n.K),H(r,"RID",t),H(r,"AID",n.V),_i(n,r),n.o&&n.s&&oc(r,n.o,n.s),t=new fi(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=gd(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),ic(n.i,t),ha(t,r,e)}function _i(n,e){n.na&&Wa(n.na,function(t,r){H(e,r,t)}),n.h&&Yh({},function(t,r){H(e,r,t)})}function gd(n,e,t){t=Math.min(n.j.length,t);var r=n.h?Ae(n.h.Va,n.h,n):null;e:{var i=n.j;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<t;c++){let u=i[c].g;const l=i[c].map;if(u-=s,0>u)s=Math.max(0,i[c].g-100),a=!1;else try{ey(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,r}function pd(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;Fr||Lh(),Ur||(Fr(),Ur=!0),Xa.add(e,n),n.A=0}}function cc(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=hi(Ae(n.Ma,n),Id(n,n.A)),n.A++,!0)}w.Ma=function(){if(this.u=null,_d(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=hi(Ae(this.jb,this),n)}};w.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Pe(10),ro(this),_d(this))};function uc(n){n.B!=null&&(k.clearTimeout(n.B),n.B=null)}function _d(n){n.g=new fi(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=rt(n.wa);H(e,"RID","rpc"),H(e,"SID",n.K),H(e,"AID",n.V),H(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&H(e,"TO",n.qa),H(e,"TYPE","xmlhttp"),_i(n,e),n.o&&n.s&&oc(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=eo(rt(e)),t.s=null,t.S=!0,Hh(t,n)}w.ib=function(){this.v!=null&&(this.v=null,ro(this),cc(this),Pe(19))};function Es(n){n.v!=null&&(k.clearTimeout(n.v),n.v=null)}function yd(n,e){var t=null;if(n.g==e){Es(n),uc(n),n.g=null;var r=2}else if(fa(n.i,e))t=e.F,sd(n.i,e),r=1;else return;if(n.H!=0){if(e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var i=n.C;r=Js(),Ee(r,new Gh(r,t)),io(n)}else pd(n);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&ay(n,e)||r==2&&cc(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),i){case 1:$t(n,5);break;case 4:$t(n,10);break;case 3:$t(n,6);break;default:$t(n,2)}}}function Id(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function $t(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var r=Ae(n.pb,n);t||(t=new Yt("//www.google.com/images/cleardot.gif"),k.location&&k.location.protocol=="http"||ys(t,"https"),eo(t)),ty(t.toString(),r)}else Pe(2);n.H=0,n.h&&n.h.za(e),Ed(n),md(n)}w.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Pe(2)):(this.l.info("Failed to ping google.com"),Pe(1))};function Ed(n){if(n.H=0,n.ma=[],n.h){const e=od(n.i);(e.length!=0||n.j.length!=0)&&(Vu(n.ma,e),Vu(n.ma,n.j),n.i.i.length=0,ja(n.j),n.j.length=0),n.h.ya()}}function vd(n,e,t){var r=t instanceof Yt?rt(t):new Yt(t);if(r.g!="")e&&(r.g=e+"."+r.g),Is(r,r.m);else{var i=k.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Yt(null);r&&ys(s,r),e&&(s.g=e),i&&Is(s,i),t&&(s.l=t),r=s}return t=n.F,e=n.Da,t&&e&&H(r,t,e),H(r,"VER",n.ra),_i(n,r),r}function Td(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new te(new gi({ob:!0})):new te(n.va),e.Oa(n.J),e}w.isActive=function(){return!!this.h&&this.h.isActive(this)};function wd(){}w=wd.prototype;w.Ba=function(){};w.Aa=function(){};w.za=function(){};w.ya=function(){};w.isActive=function(){return!0};w.Va=function(){};function vs(){if(Un&&!(10<=Number(E_)))throw Error("Environmental error: no available transport.")}vs.prototype.g=function(n,e){return new ke(n,e)};function ke(n,e){me.call(this),this.g=new fd(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!Mr(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Mr(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new rr(this)}ge(ke,me);ke.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;Pe(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=vd(n,null,n.Y),io(n)};ke.prototype.close=function(){ac(this.g)};ke.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=Ya(n),n=t);e.j.push(new J_(e.fb++,n)),e.H==3&&io(e)};ke.prototype.N=function(){this.g.h=null,delete this.j,ac(this.g),delete this.g,ke.$.N.call(this)};function Ad(n){nc.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}ge(Ad,nc);function Rd(){rc.call(this),this.status=1}ge(Rd,rc);function rr(n){this.g=n}ge(rr,wd);rr.prototype.Ba=function(){Ee(this.g,"a")};rr.prototype.Aa=function(n){Ee(this.g,new Ad(n))};rr.prototype.za=function(n){Ee(this.g,new Rd)};rr.prototype.ya=function(){Ee(this.g,"b")};function cy(){this.blockSize=-1}function Ue(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ge(Ue,cy);Ue.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Go(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)r[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var s=n.g[3],o=e+(s^t&(i^s))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[3]+3250441966&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[7]+4249261313&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[11]+2304563134&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[15]+1236535329&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(t^i))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[0]+3921069994&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[4]+3889429448&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[8]+1163531501&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[12]+2368359562&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(t^i^s)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[14]+4259657740&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[10]+3200236656&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[6]+76029189&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[2]+3299628645&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(i^(t|~s))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[5]+4237533241&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[1]+2240044497&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[13]+1309151649&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}Ue.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=t;)Go(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<e;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){Go(this,r),i=0;break}}else for(;s<e;)if(r[i++]=n[s++],i==this.blockSize){Go(this,r),i=0;break}}this.h=i,this.i+=e};Ue.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function K(n,e){this.h=e;for(var t=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==e||(t[i]=s,r=!1)}this.g=t}var uy={};function lc(n){return-128<=n&&128>n?__(n,function(e){return new K([e|0],0>e?-1:0)}):new K([n|0],0>n?-1:0)}function Ge(n){if(isNaN(n)||!isFinite(n))return Dn;if(0>n)return ye(Ge(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=ma;return new K(e,0)}function Sd(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return ye(Sd(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=Ge(Math.pow(e,8)),r=Dn,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),e);8>s?(s=Ge(Math.pow(e,s)),r=r.R(s).add(Ge(o))):(r=r.R(t),r=r.add(Ge(o)))}return r}var ma=4294967296,Dn=lc(0),ga=lc(1),qu=lc(16777216);w=K.prototype;w.ea=function(){if(xe(this))return-ye(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:ma+r)*e,e*=ma}return n};w.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Ze(this))return"0";if(xe(this))return"-"+ye(this).toString(n);for(var e=Ge(Math.pow(n,6)),t=this,r="";;){var i=ws(t,e).g;t=Ts(t,i.R(e));var s=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,Ze(t))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};w.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Ze(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function xe(n){return n.h==-1}w.X=function(n){return n=Ts(this,n),xe(n)?-1:Ze(n)?0:1};function ye(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new K(t,~n.h).add(ga)}w.abs=function(){return xe(this)?ye(this):this};w.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,t[i]=o<<16|s}return new K(t,t[t.length-1]&-2147483648?-1:0)};function Ts(n,e){return n.add(ye(e))}w.R=function(n){if(Ze(this)||Ze(n))return Dn;if(xe(this))return xe(n)?ye(this).R(ye(n)):ye(ye(this).R(n));if(xe(n))return ye(this.R(ye(n)));if(0>this.X(qu)&&0>n.X(qu))return Ge(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;t[2*r+2*i]+=o*c,ji(t,2*r+2*i),t[2*r+2*i+1]+=s*c,ji(t,2*r+2*i+1),t[2*r+2*i+1]+=o*a,ji(t,2*r+2*i+1),t[2*r+2*i+2]+=s*a,ji(t,2*r+2*i+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new K(t,0)};function ji(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function gr(n,e){this.g=n,this.h=e}function ws(n,e){if(Ze(e))throw Error("division by zero");if(Ze(n))return new gr(Dn,Dn);if(xe(n))return e=ws(ye(n),e),new gr(ye(e.g),ye(e.h));if(xe(e))return e=ws(n,ye(e)),new gr(ye(e.g),e.h);if(30<n.g.length){if(xe(n)||xe(e))throw Error("slowDivide_ only works with positive integers.");for(var t=ga,r=e;0>=r.X(n);)t=zu(t),r=zu(r);var i=vn(t,1),s=vn(r,1);for(r=vn(r,2),t=vn(t,2);!Ze(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(t),s=o),r=vn(r,1),t=vn(t,1)}return e=Ts(n,i.R(e)),new gr(i,e)}for(i=Dn;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Ge(t),o=s.R(e);xe(o)||0<o.X(n);)t-=r,s=Ge(t),o=s.R(e);Ze(s)&&(s=ga),i=i.add(s),n=Ts(n,o)}return new gr(i,n)}w.gb=function(n){return ws(this,n).h};w.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new K(t,this.h&n.h)};w.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new K(t,this.h|n.h)};w.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new K(t,this.h^n.h)};function zu(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new K(t,n.h)}function vn(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,i=[],s=0;s<r;s++)i[s]=0<e?n.D(s+t)>>>e|n.D(s+t+1)<<32-e:n.D(s+t);return new K(i,n.h)}vs.prototype.createWebChannel=vs.prototype.g;ke.prototype.send=ke.prototype.u;ke.prototype.open=ke.prototype.m;ke.prototype.close=ke.prototype.close;Ys.NO_ERROR=0;Ys.TIMEOUT=8;Ys.HTTP_ERROR=6;jh.COMPLETE="complete";Kh.EventType=di;di.OPEN="a";di.CLOSE="b";di.ERROR="c";di.MESSAGE="d";me.prototype.listen=me.prototype.O;te.prototype.listenOnce=te.prototype.P;te.prototype.getLastError=te.prototype.Sa;te.prototype.getLastErrorCode=te.prototype.Ia;te.prototype.getStatus=te.prototype.da;te.prototype.getResponseJson=te.prototype.Wa;te.prototype.getResponseText=te.prototype.ja;te.prototype.send=te.prototype.ha;te.prototype.setWithCredentials=te.prototype.Oa;Ue.prototype.digest=Ue.prototype.l;Ue.prototype.reset=Ue.prototype.reset;Ue.prototype.update=Ue.prototype.j;K.prototype.add=K.prototype.add;K.prototype.multiply=K.prototype.R;K.prototype.modulo=K.prototype.gb;K.prototype.compare=K.prototype.X;K.prototype.toNumber=K.prototype.ea;K.prototype.toString=K.prototype.toString;K.prototype.getBits=K.prototype.D;K.fromNumber=Ge;K.fromString=Sd;var ly=function(){return new vs},hy=function(){return Js()},jo=Ys,dy=jh,fy=gn,Gu={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},my=gi,Ki=Kh,gy=te,py=Ue,kn=K;const ju="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}fe.UNAUTHENTICATED=new fe(null),fe.GOOGLE_CREDENTIALS=new fe("google-credentials-uid"),fe.FIRST_PARTY=new fe("first-party-uid"),fe.MOCK_USER=new fe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ir="10.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=new Ba("@firebase/firestore");function pa(){return St.logLevel}function HA(n){St.setLogLevel(n)}function _(n,...e){if(St.logLevel<=z.DEBUG){const t=e.map(hc);St.debug(`Firestore (${ir}): ${n}`,...t)}}function ne(n,...e){if(St.logLevel<=z.ERROR){const t=e.map(hc);St.error(`Firestore (${ir}): ${n}`,...t)}}function Be(n,...e){if(St.logLevel<=z.WARN){const t=e.map(hc);St.warn(`Firestore (${ir}): ${n}`,...t)}}function hc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(n="Unexpected state"){const e=`FIRESTORE (${ir}) INTERNAL ASSERTION FAILED: `+n;throw ne(e),new Error(e)}function R(n,e){n||A()}function $A(n,e){n||A()}function T(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class p extends at{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _y{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(fe.UNAUTHENTICATED))}shutdown(){}}class yy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Iy{constructor(e){this.t=e,this.currentUser=fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new ue;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ue,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ue)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(R(typeof r.accessToken=="string"),new Pd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return R(e===null||typeof e=="string"),new fe(e)}}class Ey{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=fe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class vy{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Ey(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ty{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=s=>{s.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(R(typeof t.token=="string"),this.R=t.token,new bd(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}class QA{getToken(){return Promise.resolve(new bd(""))}invalidateToken(){}start(e,t){}shutdown(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=wy(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function V(n,e){return n<e?-1:n>e?1:0}function Bn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function Vd(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new p(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new p(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new p(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new p(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Z.fromMillis(Date.now())}static fromDate(e){return Z.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Z(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?V(this.nanoseconds,e.nanoseconds):V(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.timestamp=e}static fromTimestamp(e){return new P(e)}static min(){return new P(new Z(0,0))}static max(){return new P(new Z(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,t,r){t===void 0?t=0:t>e.length&&A(),r===void 0?r=e.length-t:r>e.length-t&&A(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return jr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof jr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class q extends jr{construct(e,t,r){return new q(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new p(g.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new q(t)}static emptyPath(){return new q([])}}const Ay=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class re extends jr{construct(e,t,r){return new re(e,t,r)}static isValidIdentifier(e){return Ay.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),re.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new re(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new p(g.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new p(g.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new p(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new p(g.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new re(t)}static emptyPath(){return new re([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e){this.path=e}static fromPath(e){return new v(q.fromString(e))}static fromName(e){return new v(q.fromString(e).popFirst(5))}static empty(){return new v(q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&q.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return q.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new v(new q(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function _a(n){return n.fields.find(e=>e.kind===2)}function zt(n){return n.fields.filter(e=>e.kind!==2)}function Ry(n,e){let t=V(n.collectionGroup,e.collectionGroup);if(t!==0)return t;for(let r=0;r<Math.min(n.fields.length,e.fields.length);++r)if(t=Sy(n.fields[r],e.fields[r]),t!==0)return t;return V(n.fields.length,e.fields.length)}As.UNKNOWN_ID=-1;class ts{constructor(e,t){this.fieldPath=e,this.kind=t}}function Sy(n,e){const t=re.comparator(n.fieldPath,e.fieldPath);return t!==0?t:V(n.kind,e.kind)}class Kr{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Kr(0,Ne.min())}}function Dd(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=P.fromTimestamp(r===1e9?new Z(t+1,0):new Z(t,r));return new Ne(i,v.empty(),e)}function kd(n){return new Ne(n.readTime,n.key,-1)}class Ne{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ne(P.min(),v.empty(),-1)}static max(){return new Ne(P.max(),v.empty(),-1)}}function dc(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=v.comparator(n.documentKey,e.documentKey),t!==0?t:V(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xt(n){if(n.code!==g.FAILED_PRECONDITION||n.message!==Nd)throw n;_("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&A(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new m((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof m?t:m.resolve(t)}catch(t){return m.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):m.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):m.reject(t)}static resolve(e){return new m((t,r)=>{t(e)})}static reject(e){return new m((t,r)=>{r(e)})}static waitFor(e){return new m((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=m.resolve(!1);for(const r of e)t=t.next(i=>i?m.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new m((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,t){return new m((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.m=new ue,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{t.error?this.m.reject(new br(e,t.error)):this.m.resolve()},this.transaction.onerror=r=>{const i=fc(r.target.error);this.m.reject(new br(e,i))}}static open(e,t,r,i){try{return new so(t,e.transaction(i,r))}catch(s){throw new br(t,s)}}get g(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(_("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}p(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new by(t)}}class Fe{constructor(e,t,r){this.name=e,this.version=t,this.S=r,Fe.D(le())===12.2&&ne("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return _("SimpleDb","Removing database:",e),Gt(window.indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!Eh())return!1;if(Fe.C())return!0;const e=le(),t=Fe.D(e),r=0<t&&t<10,i=Fe.F(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.M)==="YES"}static O(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static F(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async N(e){return this.db||(_("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new br(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new p(g.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new p(g.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new br(e,o))},i.onupgradeneeded=s=>{_("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.B(o,i.transaction,s.oldVersion,this.version).next(()=>{_("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=t=>this.L(t)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.N(e);const a=so.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.p(),u)).catch(u=>(a.abort(u),m.reject(u))).toPromise();return c.catch(()=>{}),await a.g,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(_("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Py{constructor(e){this.q=e,this.K=!1,this.$=null}get isDone(){return this.K}get U(){return this.$}set cursor(e){this.q=e}done(){this.K=!0}W(e){this.$=e}delete(){return Gt(this.q.delete())}}class br extends p{constructor(e,t){super(g.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ot(n){return n.name==="IndexedDbTransactionError"}class by{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(_("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(_("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Gt(r)}add(e){return _("SimpleDb","ADD",this.store.name,e,e),Gt(this.store.add(e))}get(e){return Gt(this.store.get(e)).next(t=>(t===void 0&&(t=null),_("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return _("SimpleDb","DELETE",this.store.name,e),Gt(this.store.delete(e))}count(){return _("SimpleDb","COUNT",this.store.name),Gt(this.store.count())}G(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.j(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new m((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new m((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,t){_("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const i=this.cursor(r);return this.j(i,(s,o,a)=>a.delete())}Z(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.j(i,t)}X(e){const t=this.cursor({});return new m((r,i)=>{t.onerror=s=>{const o=fc(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}j(e,t){const r=[];return new m((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new Py(a),u=t(a.primaryKey,a.value,c);if(u instanceof m){const l=u.catch(h=>(c.done(),m.reject(h)));r.push(l)}c.isDone?i():c.U===null?a.continue():a.continue(c.U)}}).next(()=>m.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Gt(n){return new m((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=fc(r.target.error);t(i)}})}let Ku=!1;function fc(n){const e=Fe.D(le());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new p("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ku||(Ku=!0,setTimeout(()=>{throw r},0)),r}}return n}class Cy{constructor(e,t){this.asyncQueue=e,this.ee=t,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(e){_("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{_("IndexBackiller",`Documents written: ${await this.ee.ne()}`)}catch(t){Ot(t)?_("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await xt(t)}await this.te(6e4)})}}class Vy{constructor(e,t){this.localStore=e,this.persistence=t}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.re(t,e))}re(e,t){const r=new Set;let i=t,s=!0;return m.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return _("IndexBackiller",`Processing collection: ${o}`),this.ie(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}ie(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.se(i,s)).next(a=>(_("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}se(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=kd(s);dc(o,r)>0&&(r=o)}),new Ne(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Ce.ae=-1;function yi(n){return n==null}function Wr(n){return n===0&&1/n==-1/0}function Od(n){return typeof n=="number"&&Number.isInteger(n)&&!Wr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Wu(e)),e=Dy(n.get(t),e);return Wu(e)}function Dy(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function Wu(n){return n+""}function je(n){const e=n.length;if(R(e>=2),e===2)return R(n.charAt(0)===""&&n.charAt(1)===""),q.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&A(),n.charAt(o+1)){case"":const a=n.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:A()}s=o+2}return new q(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(n,e){return[n,Se(e)]}function Md(n,e,t){return[n,Se(e),t]}const ky={},Ny=["prefixPath","collectionGroup","readTime","documentId"],xy=["prefixPath","collectionGroup","documentId"],Oy=["collectionGroup","readTime","prefixPath","documentId"],My=["canonicalId","targetId"],Ly=["targetId","path"],Fy=["path","targetId"],Uy=["collectionId","parent"],By=["indexId","uid"],qy=["uid","sequenceNumber"],zy=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Gy=["indexId","uid","orderedDocumentKey"],jy=["userId","collectionPath","documentId"],Ky=["userId","collectionPath","largestBatchId"],Wy=["userId","collectionGroup","largestBatchId"],Ld=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Hy=[...Ld,"documentOverlays"],Fd=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ud=Fd,$y=[...Ud,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya extends xd{constructor(e,t){super(),this.ue=e,this.currentSequenceNumber=t}}function pe(n,e){const t=T(n);return Fe.O(t.ue,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Mt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Bd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,t){this.comparator=e,this.root=t||_e.EMPTY}insert(e,t){return new W(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,_e.BLACK,null,null))}remove(e){return new W(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_e.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wi(this.root,e,this.comparator,!0)}}class Wi{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _e{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??_e.RED,this.left=i??_e.EMPTY,this.right=s??_e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new _e(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return _e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return _e.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw A();const e=this.left.check();if(e!==this.right.check())throw A();return e+(this.isRed()?0:1)}}_e.EMPTY=null,_e.RED=!0,_e.BLACK=!1;_e.EMPTY=new class{constructor(){this.size=0}get key(){throw A()}get value(){throw A()}get color(){throw A()}get left(){throw A()}get right(){throw A()}copy(e,t,r,i,s){return this}insert(e,t,r){return new _e(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.comparator=e,this.data=new W(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Qu(this.data.getIterator())}getIteratorFrom(e){return new Qu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Q)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Q(this.comparator);return t.data=e,t}}class Qu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Tn(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.fields=e,e.sort(re.comparator)}static empty(){return new Ve([])}unionWith(e){let t=new Q(re.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ve(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Bn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YA(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new qd("Invalid base64 string: "+s):s}}(e);return new he(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new he(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return V(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}he.EMPTY_BYTE_STRING=new he("");const Qy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pt(n){if(R(!!n),typeof n=="string"){let e=0;const t=Qy.exec(n);if(R(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ee(n.seconds),nanos:ee(n.nanos)}}function ee(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function it(n){return typeof n=="string"?he.fromBase64String(n):he.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ao(n){const e=n.mapValue.fields.__previous_value__;return oo(e)?ao(e):e}function Hr(n){const e=Pt(n.mapValue.fields.__local_write_time__.timestampValue);return new Z(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e,t,r,i,s,o,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class sn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new sn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof sn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},rs={nullValue:"NULL_VALUE"};function bt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?oo(n)?4:zd(n)?9007199254740991:10:A()}function Je(n,e){if(n===e)return!0;const t=bt(n);if(t!==bt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Hr(n).isEqual(Hr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Pt(i.timestampValue),a=Pt(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return it(i.bytesValue).isEqual(it(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ee(i.geoPointValue.latitude)===ee(s.geoPointValue.latitude)&&ee(i.geoPointValue.longitude)===ee(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ee(i.integerValue)===ee(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ee(i.doubleValue),a=ee(s.doubleValue);return o===a?Wr(o)===Wr(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return Bn(n.arrayValue.values||[],e.arrayValue.values||[],Je);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if($u(o)!==$u(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Je(o[c],a[c])))return!1;return!0}(n,e);default:return A()}}function $r(n,e){return(n.values||[]).find(t=>Je(t,e))!==void 0}function Ct(n,e){if(n===e)return 0;const t=bt(n),r=bt(e);if(t!==r)return V(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return V(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ee(s.integerValue||s.doubleValue),c=ee(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return Ju(n.timestampValue,e.timestampValue);case 4:return Ju(Hr(n),Hr(e));case 5:return V(n.stringValue,e.stringValue);case 6:return function(s,o){const a=it(s),c=it(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=V(a[u],c[u]);if(l!==0)return l}return V(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=V(ee(s.latitude),ee(o.latitude));return a!==0?a:V(ee(s.longitude),ee(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=Ct(a[u],c[u]);if(l)return l}return V(a.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Tt.mapValue&&o===Tt.mapValue)return 0;if(s===Tt.mapValue)return 1;if(o===Tt.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const d=V(c[h],l[h]);if(d!==0)return d;const f=Ct(a[c[h]],u[l[h]]);if(f!==0)return f}return V(c.length,l.length)}(n.mapValue,e.mapValue);default:throw A()}}function Ju(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return V(n,e);const t=Pt(n),r=Pt(e),i=V(t.seconds,r.seconds);return i!==0?i:V(t.nanos,r.nanos)}function qn(n){return Ia(n)}function Ia(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Pt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return it(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return v.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Ia(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ia(t.fields[o])}`;return i+"}"}(n.mapValue):A()}function is(n){switch(bt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ao(n);return e?16+is(e):16;case 5:return 2*n.stringValue.length;case 6:return it(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+is(s),0)}(n.arrayValue);case 10:return function(r){let i=0;return Mt(r.fields,(s,o)=>{i+=s.length+is(o)}),i}(n.mapValue);default:throw A()}}function on(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ea(n){return!!n&&"integerValue"in n}function Qr(n){return!!n&&"arrayValue"in n}function Yu(n){return!!n&&"nullValue"in n}function Xu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ss(n){return!!n&&"mapValue"in n}function Cr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Mt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Cr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Cr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function zd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function Yy(n){return"nullValue"in n?rs:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?on(sn.empty(),v.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:A()}function Xy(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?on(sn.empty(),v.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?Tt:A()}function Zu(n,e){const t=Ct(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function el(n,e){const t=Ct(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.value=e}static empty(){return new Ie({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ss(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Cr(t)}setAll(e){let t=re.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=Cr(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());ss(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Je(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ss(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Mt(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ie(Cr(this.value))}}function Gd(n){const e=[];return Mt(n.fields,(t,r)=>{const i=new re([t]);if(ss(r)){const s=Gd(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ve(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new $(e,0,P.min(),P.min(),P.min(),Ie.empty(),0)}static newFoundDocument(e,t,r,i){return new $(e,1,t,P.min(),r,i,0)}static newNoDocument(e,t){return new $(e,2,t,P.min(),P.min(),Ie.empty(),0)}static newUnknownDocument(e,t){return new $(e,3,t,P.min(),P.min(),Ie.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(P.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ie.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ie.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=P.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t){this.position=e,this.inclusive=t}}function tl(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=v.comparator(v.fromName(o.referenceValue),t.key):r=Ct(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function nl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Je(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,t="asc"){this.field=e,this.dir=t}}function Zy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{}class L extends jd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new eI(e,t,r):t==="array-contains"?new rI(e,r):t==="in"?new Jd(e,r):t==="not-in"?new iI(e,r):t==="array-contains-any"?new sI(e,r):new L(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new tI(e,r):new nI(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ct(t,this.value)):t!==null&&bt(this.value)===bt(t)&&this.matchesComparison(Ct(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return A()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class j extends jd{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new j(e,t)}matches(e){return zn(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(t=>t.isInequality());return e!==null?e.field:null}le(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function zn(n){return n.op==="and"}function va(n){return n.op==="or"}function mc(n){return Kd(n)&&zn(n)}function Kd(n){for(const e of n.filters)if(e instanceof j)return!1;return!0}function Ta(n){if(n instanceof L)return n.field.canonicalString()+n.op.toString()+qn(n.value);if(mc(n))return n.filters.map(e=>Ta(e)).join(",");{const e=n.filters.map(t=>Ta(t)).join(",");return`${n.op}(${e})`}}function Wd(n,e){return n instanceof L?function(r,i){return i instanceof L&&r.op===i.op&&r.field.isEqual(i.field)&&Je(r.value,i.value)}(n,e):n instanceof j?function(r,i){return i instanceof j&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Wd(o,i.filters[a]),!0):!1}(n,e):void A()}function Hd(n,e){const t=n.filters.concat(e);return j.create(t,n.op)}function $d(n){return n instanceof L?function(t){return`${t.field.canonicalString()} ${t.op} ${qn(t.value)}`}(n):n instanceof j?function(t){return t.op.toString()+" {"+t.getFilters().map($d).join(" ,")+"}"}(n):"Filter"}class eI extends L{constructor(e,t,r){super(e,t,r),this.key=v.fromName(r.referenceValue)}matches(e){const t=v.comparator(e.key,this.key);return this.matchesComparison(t)}}class tI extends L{constructor(e,t){super(e,"in",t),this.keys=Qd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class nI extends L{constructor(e,t){super(e,"not-in",t),this.keys=Qd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Qd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>v.fromName(r.referenceValue))}class rI extends L{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Qr(t)&&$r(t.arrayValue,this.value)}}class Jd extends L{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$r(this.value.arrayValue,t)}}class iI extends L{constructor(e,t){super(e,"not-in",t)}matches(e){if($r(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!$r(this.value.arrayValue,t)}}class sI extends L{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Qr(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>$r(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function wa(n,e=null,t=[],r=[],i=null,s=null,o=null){return new oI(n,e,t,r,i,s,o)}function an(n){const e=T(n);if(e.he===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ta(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),yi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>qn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>qn(r)).join(",")),e.he=t}return e.he}function Ii(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Zy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Wd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!nl(n.startAt,e.startAt)&&nl(n.endAt,e.endAt)}function Rs(n){return v.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Ss(n,e){return n.filters.filter(t=>t instanceof L&&t.field.isEqual(e))}function rl(n,e,t){let r=rs,i=!0;for(const s of Ss(n,e)){let o=rs,a=!0;switch(s.op){case"<":case"<=":o=Yy(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=rs}Zu({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];Zu({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function il(n,e,t){let r=Tt,i=!0;for(const s of Ss(n,e)){let o=Tt,a=!0;switch(s.op){case">=":case">":o=Xy(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Tt}el({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];el({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function Yd(n,e,t,r,i,s,o,a){return new ct(n,e,t,r,i,s,o,a)}function sr(n){return new ct(n)}function sl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function gc(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function co(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function pc(n){return n.collectionGroup!==null}function Xt(n){const e=T(n);if(e.Pe===null){e.Pe=[];const t=co(e),r=gc(e);if(t!==null&&r===null)t.isKeyField()||e.Pe.push(new Nn(t)),e.Pe.push(new Nn(re.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Nn(re.keyField(),s))}}}return e.Pe}function be(n){const e=T(n);if(!e.Ie)if(e.limitType==="F")e.Ie=wa(e.path,e.collectionGroup,Xt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of Xt(e)){const o=s.dir==="desc"?"asc":"desc";t.push(new Nn(s.field,o))}const r=e.endAt?new Vt(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Vt(e.startAt.position,e.startAt.inclusive):null;e.Ie=wa(e.path,e.collectionGroup,t,e.filters,e.limit,r,i)}return e.Ie}function Aa(n,e){e.getFirstInequalityField(),co(n);const t=n.filters.concat([e]);return new ct(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ps(n,e,t){return new ct(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ei(n,e){return Ii(be(n),be(e))&&n.limitType===e.limitType}function Xd(n){return`${an(be(n))}|lt:${n.limitType}`}function Ra(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>$d(i)).join(", ")}]`),yi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>qn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>qn(i)).join(",")),`Target(${r})`}(be(n))}; limitType=${n.limitType})`}function vi(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):v.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Xt(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=tl(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,Xt(r),i)||r.endAt&&!function(o,a,c){const u=tl(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,Xt(r),i))}(n,e)}function Zd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ef(n){return(e,t)=>{let r=!1;for(const i of Xt(n)){const s=aI(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function aI(n,e,t){const r=n.field.isKeyField()?v.comparator(e.key,t.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?Ct(c,u):A()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return A()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Mt(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Bd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=new W(v.comparator);function De(){return cI}const tf=new W(v.comparator);function Ar(...n){let e=tf;for(const t of n)e=e.insert(t.key,t);return e}function nf(n){let e=tf;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Ke(){return Vr()}function rf(){return Vr()}function Vr(){return new ut(n=>n.toString(),(n,e)=>n.isEqual(e))}const uI=new W(v.comparator),lI=new Q(v.comparator);function x(...n){let e=lI;for(const t of n)e=e.add(t);return e}const hI=new Q(V);function _c(){return hI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wr(e)?"-0":e}}function of(n){return{integerValue:""+n}}function af(n,e){return Od(e)?of(e):sf(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(){this._=void 0}}function dI(n,e,t){return n instanceof Gn?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&oo(s)&&(s=ao(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof cn?uf(n,e):n instanceof un?lf(n,e):function(i,s){const o=cf(i,s),a=ol(o)+ol(i.Te);return Ea(o)&&Ea(i.Te)?of(a):sf(i.serializer,a)}(n,e)}function fI(n,e,t){return n instanceof cn?uf(n,e):n instanceof un?lf(n,e):t}function cf(n,e){return n instanceof jn?function(r){return Ea(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Gn extends uo{}class cn extends uo{constructor(e){super(),this.elements=e}}function uf(n,e){const t=hf(e);for(const r of n.elements)t.some(i=>Je(i,r))||t.push(r);return{arrayValue:{values:t}}}class un extends uo{constructor(e){super(),this.elements=e}}function lf(n,e){let t=hf(e);for(const r of n.elements)t=t.filter(i=>!Je(i,r));return{arrayValue:{values:t}}}class jn extends uo{constructor(e,t){super(),this.serializer=e,this.Te=t}}function ol(n){return ee(n.integerValue||n.doubleValue)}function hf(n){return Qr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,t){this.field=e,this.transform=t}}function mI(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof cn&&i instanceof cn||r instanceof un&&i instanceof un?Bn(r.elements,i.elements,Je):r instanceof jn&&i instanceof jn?Je(r.Te,i.Te):r instanceof Gn&&i instanceof Gn}(n.transform,e.transform)}class gI{constructor(e,t){this.version=e,this.transformResults=t}}class Y{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Y}static exists(e){return new Y(void 0,e)}static updateTime(e){return new Y(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function os(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class lo{}function df(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ar(n.key,Y.none()):new or(n.key,n.data,Y.none());{const t=n.data,r=Ie.empty();let i=new Q(re.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new lt(n.key,r,new Ve(i.toArray()),Y.none())}}function pI(n,e,t){n instanceof or?function(i,s,o){const a=i.value.clone(),c=cl(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof lt?function(i,s,o){if(!os(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=cl(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(ff(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Dr(n,e,t,r){return n instanceof or?function(s,o,a,c){if(!os(s.precondition,o))return a;const u=s.value.clone(),l=ul(s.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof lt?function(s,o,a,c){if(!os(s.precondition,o))return a;const u=ul(s.fieldTransforms,c,o),l=o.data;return l.setAll(ff(s)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,e,t,r):function(s,o,a){return os(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function _I(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=cf(r.transform,i||null);s!=null&&(t===null&&(t=Ie.empty()),t.set(r.field,s))}return t||null}function al(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Bn(r,i,(s,o)=>mI(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class or extends lo{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class lt extends lo{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ff(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function cl(n,e,t){const r=new Map;R(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,fI(o,a,t[i]))}return r}function ul(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,dI(s,o,e))}return r}class ar extends lo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yc extends lo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&pI(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Dr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Dr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=rf();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const c=df(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(P.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),x())}isEqual(e){return this.batchId===e.batchId&&Bn(this.mutations,e.mutations,(t,r)=>al(t,r))&&Bn(this.baseMutations,e.baseMutations,(t,r)=>al(t,r))}}class Ec{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){R(e.mutations.length===r.length);let i=function(){return uI}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ec(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e,t,r){this.alias=e,this.Ee=t,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae,B;function mf(n){switch(n){default:return A();case g.CANCELLED:case g.UNKNOWN:case g.DEADLINE_EXCEEDED:case g.RESOURCE_EXHAUSTED:case g.INTERNAL:case g.UNAVAILABLE:case g.UNAUTHENTICATED:return!1;case g.INVALID_ARGUMENT:case g.NOT_FOUND:case g.ALREADY_EXISTS:case g.PERMISSION_DENIED:case g.FAILED_PRECONDITION:case g.ABORTED:case g.OUT_OF_RANGE:case g.UNIMPLEMENTED:case g.DATA_LOSS:return!0}}function gf(n){if(n===void 0)return ne("GRPC error has no .code"),g.UNKNOWN;switch(n){case ae.OK:return g.OK;case ae.CANCELLED:return g.CANCELLED;case ae.UNKNOWN:return g.UNKNOWN;case ae.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case ae.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case ae.INTERNAL:return g.INTERNAL;case ae.UNAVAILABLE:return g.UNAVAILABLE;case ae.UNAUTHENTICATED:return g.UNAUTHENTICATED;case ae.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case ae.NOT_FOUND:return g.NOT_FOUND;case ae.ALREADY_EXISTS:return g.ALREADY_EXISTS;case ae.PERMISSION_DENIED:return g.PERMISSION_DENIED;case ae.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case ae.ABORTED:return g.ABORTED;case ae.OUT_OF_RANGE:return g.OUT_OF_RANGE;case ae.UNIMPLEMENTED:return g.UNIMPLEMENTED;case ae.DATA_LOSS:return g.DATA_LOSS;default:return A()}}(B=ae||(ae={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Hi}static getOrCreateInstance(){return Hi===null&&(Hi=new Tc),Hi}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let Hi=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=new kn([4294967295,4294967295],0);function ll(n){const e=pf().encode(n),t=new py;return t.update(e),new Uint8Array(t.digest())}function hl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new kn([t,r],0),new kn([i,s],0)]}class wc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Rr(`Invalid padding: ${t}`);if(r<0)throw new Rr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Rr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Rr(`Invalid padding when bitmap length is 0: ${t}`);this.de=8*e.length-t,this.Ae=kn.fromNumber(this.de)}Re(e,t,r){let i=e.add(t.multiply(kn.fromNumber(r)));return i.compare(EI)===1&&(i=new kn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const t=ll(e),[r,i]=hl(t);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new wc(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const t=ll(e),[r,i]=hl(t);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Rr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Ai.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new wi(P.min(),i,new W(V),De(),x())}}class Ai{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ai(r,t,x(),x(),x())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t,r,i){this.fe=e,this.removedTargetIds=t,this.key=r,this.ge=i}}class _f{constructor(e,t){this.targetId=e,this.pe=t}}class yf{constructor(e,t,r=he.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class dl{constructor(){this.ye=0,this.we=ml(),this.Se=he.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=x(),t=x(),r=x();return this.we.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:A()}}),new Ai(this.Se,this.be,e,t,r)}xe(){this.De=!1,this.we=ml()}Oe(e,t){this.De=!0,this.we=this.we.insert(e,t)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class vI{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=De(),this.$e=fl(),this.Ue=new W(V)}We(e){for(const t of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(t,e.ge):this.ze(t,e.key,e.ge);for(const t of e.removedTargetIds)this.ze(t,e.key,e.ge)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(t);break;case 3:this.Je(t)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Fe(e.resumeToken));break;default:A()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qe.forEach((r,i)=>{this.Je(i)&&t(i)})}Ze(e){var t,r;const i=e.targetId,s=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(Rs(a))if(s===0){const c=new v(a.path);this.ze(i,c,$.newNoDocument(c,P.min()))}else R(s===1);else{const c=this.et(i);if(c!==s){const u=this.tt(e,c);if(u.status!==0){this.Ye(i);const l=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,l)}(t=Tc.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(h,d,f,y){var I,E,b,C,S,F;const G={localCacheCount:f,existenceFilterCount:y.count},M=y.unchangedNames;return M&&(G.bloomFilter={applied:h===0,hashCount:(I=M==null?void 0:M.hashCount)!==null&&I!==void 0?I:0,bitmapLength:(C=(b=(E=M==null?void 0:M.bits)===null||E===void 0?void 0:E.bitmap)===null||b===void 0?void 0:b.length)!==null&&C!==void 0?C:0,padding:(F=(S=M==null?void 0:M.bits)===null||S===void 0?void 0:S.padding)!==null&&F!==void 0?F:0},d&&(G.bloomFilter.mightContain=d)),G}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,c,e.pe))}}}}tt(e,t){const{unchangedNames:r,count:i}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let c,u;try{c=it(s).toUint8Array()}catch(h){if(h instanceof qd)return Be("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new wc(c,o,a)}catch(h){return Be(h instanceof Rr?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const l=h=>{const d=this.qe.rt();return u.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return u.de===0?{status:1}:{status:i===t-this.it(e.targetId,l)?0:2,nt:l}}it(e,t){const r=this.qe.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{t(s.path.canonicalString())||(this.ze(e,s,null),i++)}),i}st(e){const t=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&Rs(a.target)){const c=new v(a.target.path);this.Ke.get(c)!==null||this.ot(o,c)||this.ze(o,c,$.newNoDocument(c,e))}s.Ce&&(t.set(o,s.Me()),s.xe())}});let r=x();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xe(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(e));const i=new wi(e,t,this.Ue,this.Ke,r);return this.Ke=De(),this.$e=fl(),this.Ue=new W(V),i}Ge(e,t){if(!this.Je(e))return;const r=this.ot(e,t.key)?2:0;this.He(e).Oe(t.key,r),this.Ke=this.Ke.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const i=this.He(e);this.ot(e,t)?i.Oe(t,1):i.Ne(t),this.$e=this.$e.insert(t,this._t(t).delete(e)),r&&(this.Ke=this.Ke.insert(t,r))}removeTarget(e){this.Qe.delete(e)}et(e){const t=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let t=this.Qe.get(e);return t||(t=new dl,this.Qe.set(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Q(V),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||_("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.Qe.get(e);return t&&t.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new dl),this.qe.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ot(e,t){return this.qe.getRemoteKeysForTarget(e).has(t)}}function fl(){return new W(v.comparator)}function ml(){return new W(v.comparator)}const TI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),wI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),AI=(()=>({and:"AND",or:"OR"}))();class RI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Sa(n,e){return n.useProto3Json||yi(e)?e:{value:e}}function Kn(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function If(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function SI(n,e){return Kn(n,e.toTimestamp())}function ie(n){return R(!!n),P.fromTimestamp(function(t){const r=Pt(t);return new Z(r.seconds,r.nanos)}(n))}function Ac(n,e){return function(r){return new q(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(e).canonicalString()}function Ef(n){const e=q.fromString(n);return R(bf(e)),e}function Jr(n,e){return Ac(n.databaseId,e.path)}function We(n,e){const t=Ef(e);if(t.get(1)!==n.databaseId.projectId)throw new p(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new p(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new v(Tf(t))}function Pa(n,e){return Ac(n.databaseId,e)}function vf(n){const e=Ef(n);return e.length===4?q.emptyPath():Tf(e)}function Yr(n){return new q(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Tf(n){return R(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function gl(n,e,t){return{name:Jr(n,e),fields:t.value.mapValue.fields}}function wf(n,e,t){const r=We(n,e.name),i=ie(e.updateTime),s=e.createTime?ie(e.createTime):P.min(),o=new Ie({mapValue:{fields:e.fields}}),a=$.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function PI(n,e){return"found"in e?function(r,i){R(!!i.found),i.found.name,i.found.updateTime;const s=We(r,i.found.name),o=ie(i.found.updateTime),a=i.found.createTime?ie(i.found.createTime):P.min(),c=new Ie({mapValue:{fields:i.found.fields}});return $.newFoundDocument(s,o,a,c)}(n,e):"missing"in e?function(r,i){R(!!i.missing),R(!!i.readTime);const s=We(r,i.missing),o=ie(i.readTime);return $.newNoDocument(s,o)}(n,e):A()}function bI(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:A()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.useProto3Json?(R(l===void 0||typeof l=="string"),he.fromBase64String(l||"")):(R(l===void 0||l instanceof Uint8Array),he.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?g.UNKNOWN:gf(u.code);return new p(l,u.message||"")}(o);t=new yf(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=We(n,r.document.name),s=ie(r.document.updateTime),o=r.document.createTime?ie(r.document.createTime):P.min(),a=new Ie({mapValue:{fields:r.document.fields}}),c=$.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];t=new as(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=We(n,r.document),s=r.readTime?ie(r.readTime):P.min(),o=$.newNoDocument(i,s),a=r.removedTargetIds||[];t=new as([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=We(n,r.document),s=r.removedTargetIds||[];t=new as([],s,i,null)}else{if(!("filter"in e))return A();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new II(i,s),a=r.targetId;t=new _f(a,o)}}return t}function Xr(n,e){let t;if(e instanceof or)t={update:gl(n,e.key,e.value)};else if(e instanceof ar)t={delete:Jr(n,e.key)};else if(e instanceof lt)t={update:gl(n,e.key,e.data),updateMask:xI(e.fieldMask)};else{if(!(e instanceof yc))return A();t={verify:Jr(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Gn)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof cn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof un)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof jn)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw A()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:SI(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:A()}(n,e.precondition)),t}function ba(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?Y.updateTime(ie(s.updateTime)):s.exists!==void 0?Y.exists(s.exists):Y.none()}(e.currentDocument):Y.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let c=null;if("setToServerValue"in a)R(a.setToServerValue==="REQUEST_TIME"),c=new Gn;else if("appendMissingElements"in a){const l=a.appendMissingElements.values||[];c=new cn(l)}else if("removeAllFromArray"in a){const l=a.removeAllFromArray.values||[];c=new un(l)}else"increment"in a?c=new jn(o,a.increment):A();const u=re.fromServerFormat(a.fieldPath);return new Ti(u,c)}(n,i)):[];if(e.update){e.update.name;const i=We(n,e.update.name),s=new Ie({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(c){const u=c.fieldPaths||[];return new Ve(u.map(l=>re.fromServerFormat(l)))}(e.updateMask);return new lt(i,s,o,t,r)}return new or(i,s,t,r)}if(e.delete){const i=We(n,e.delete);return new ar(i,t)}if(e.verify){const i=We(n,e.verify);return new yc(i,t)}return A()}function CI(n,e){return n&&n.length>0?(R(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?ie(i.updateTime):ie(s);return o.isEqual(P.min())&&(o=ie(s)),new gI(o,i.transformResults||[])}(t,e))):[]}function Af(n,e){return{documents:[Pa(n,e.path)]}}function Rc(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=Pa(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Pa(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return Pf(j.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:pt(h.field),direction:DI(h.dir)}}(u))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=Sa(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function Rf(n){let e=vf(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){R(r===1);const l=t.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];t.where&&(s=function(h){const d=Sf(h);return d instanceof j&&mc(d)?d.getFilters():[d]}(t.where));let o=[];t.orderBy&&(o=function(h){return h.map(d=>function(y){return new Nn(An(y.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(t.orderBy));let a=null;t.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,yi(d)?null:d}(t.limit));let c=null;t.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new Vt(f,d)}(t.startAt));let u=null;return t.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new Vt(f,d)}(t.endAt)),Yd(e,i,o,s,a,"F",c,u)}function VI(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return A()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Sf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=An(t.unaryFilter.field);return L.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=An(t.unaryFilter.field);return L.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=An(t.unaryFilter.field);return L.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=An(t.unaryFilter.field);return L.create(o,"!=",{nullValue:"NULL_VALUE"});default:return A()}}(n):n.fieldFilter!==void 0?function(t){return L.create(An(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return A()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return j.create(t.compositeFilter.filters.map(r=>Sf(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return A()}}(t.compositeFilter.op))}(n):A()}function DI(n){return TI[n]}function kI(n){return wI[n]}function NI(n){return AI[n]}function pt(n){return{fieldPath:n.canonicalString()}}function An(n){return re.fromServerFormat(n.fieldPath)}function Pf(n){return n instanceof L?function(t){if(t.op==="=="){if(Xu(t.value))return{unaryFilter:{field:pt(t.field),op:"IS_NAN"}};if(Yu(t.value))return{unaryFilter:{field:pt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Xu(t.value))return{unaryFilter:{field:pt(t.field),op:"IS_NOT_NAN"}};if(Yu(t.value))return{unaryFilter:{field:pt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pt(t.field),op:kI(t.op),value:t.value}}}(n):n instanceof j?function(t){const r=t.getFilters().map(i=>Pf(i));return r.length===1?r[0]:{compositeFilter:{op:NI(t.op),filters:r}}}(n):A()}function xI(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function bf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t,r,i,s=P.min(),o=P.min(),a=he.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new et(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new et(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new et(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new et(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e){this.ct=e}}function OI(n,e){let t;if(e.document)t=wf(n.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=v.fromSegments(e.noDocument.path),i=hn(e.noDocument.readTime);t=$.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return A();{const r=v.fromSegments(e.unknownDocument.path),i=hn(e.unknownDocument.version);t=$.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){const s=new Z(i[0],i[1]);return P.fromTimestamp(s)}(e.readTime)),t}function pl(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:bs(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Jr(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Kn(s,o.version.toTimestamp()),createTime:Kn(s,o.createTime.toTimestamp())}}(n.ct,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:ln(e.version)};else{if(!e.isUnknownDocument())return A();r.unknownDocument={path:t.path.toArray(),version:ln(e.version)}}return r}function bs(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function ln(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function hn(n){const e=new Z(n.seconds,n.nanoseconds);return P.fromTimestamp(e)}function jt(n,e){const t=(e.baseMutations||[]).map(s=>ba(n.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>ba(n.ct,s)),i=Z.fromMillis(e.localWriteTimeMs);return new Ic(e.batchId,i,t,r)}function Sr(n){const e=hn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?hn(n.lastLimboFreeSnapshotVersion):P.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return R(s.documents.length===1),be(sr(vf(s.documents[0])))}(n.query):function(s){return be(Rf(s))}(n.query),new et(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,he.fromBase64String(n.resumeToken))}function Vf(n,e){const t=ln(e.snapshotVersion),r=ln(e.lastLimboFreeSnapshotVersion);let i;i=Rs(e.target)?Af(n.ct,e.target):Rc(n.ct,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:an(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Sc(n){const e=Rf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ps(e,e.limit,"L"):e}function Ko(n,e){return new vc(e.largestBatchId,ba(n.ct,e.overlayMutation))}function _l(n,e){const t=e.path.lastSegment();return[n,Se(e.path.popLast()),t]}function yl(n,e,t,r){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:ln(r.readTime),documentKey:Se(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{getBundleMetadata(e,t){return Il(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:hn(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return Il(e).put(function(i){return{bundleId:i.id,createTime:ln(ie(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return El(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:Sc(s.bundledQuery),readTime:hn(s.readTime)}}(r)})}saveNamedQuery(e,t){return El(e).put(function(i){return{name:i.name,readTime:ln(ie(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function Il(n){return pe(n,"bundles")}function El(n){return pe(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const r=t.uid||"";return new ho(e,r)}getOverlay(e,t){return pr(e).get(_l(this.userId,t)).next(r=>r?Ko(this.serializer,r):null)}getOverlays(e,t){const r=Ke();return m.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new vc(t,o);i.push(this.ht(e,a))}),m.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(Se(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(pr(e).J("collectionPathOverlayIndex",a))}),m.waitFor(s)}getOverlaysForCollection(e,t,r){const i=Ke(),s=Se(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return pr(e).G("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=Ko(this.serializer,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=Ke();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return pr(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=Ko(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}ht(e,t){return pr(e).put(function(i,s,o){const[a,c,u]=_l(s,o.mutation.key);return{userId:s,collectionPath:c,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Xr(i.ct,o.mutation)}}(this.serializer,this.userId,t))}}function pr(n){return pe(n,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(ee(e.integerValue));else if("doubleValue"in e){const r=ee(e.doubleValue);isNaN(r)?this.Et(t,13):(this.Et(t,15),Wr(r)?t.dt(0):t.dt(r))}else if("timestampValue"in e){const r=e.timestampValue;this.Et(t,20),typeof r=="string"?t.At(r):(t.At(`${r.seconds||""}`),t.dt(r.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(it(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(t,45),t.dt(r.latitude||0),t.dt(r.longitude||0)}else"mapValue"in e?zd(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):A()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){const r=e.fields||{};this.Et(t,55);for(const i of Object.keys(r))this.Rt(i,t),this.It(r[i],t)}wt(e,t){const r=e.values||[];this.Et(t,50);for(const i of r)this.It(i,t)}gt(e,t){this.Et(t,37),v.fromName(e).path.forEach(r=>{this.Et(t,60),this.St(r,t)})}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}}Kt.bt=new Kt;function LI(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function vl(n){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=LI(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}class FI{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.vt(r.value),r=t.next();this.Ct()}Ft(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Mt(r.value),r=t.next();this.xt()}Ot(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.vt(r);else if(r<2048)this.vt(960|r>>>6),this.vt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.vt(480|r>>>12),this.vt(128|63&r>>>6),this.vt(128|63&r);else{const i=t.codePointAt(0);this.vt(240|i>>>18),this.vt(128|63&i>>>12),this.vt(128|63&i>>>6),this.vt(128|63&i)}}this.Ct()}Nt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=t.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Bt(e){const t=this.Lt(e),r=vl(t);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}qt(e){const t=this.Lt(e),r=vl(t);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Lt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}vt(e){const t=255&e;t===0?(this.Kt(0),this.Kt(255)):t===255?(this.Kt(255),this.Kt(0)):this.Kt(t)}Mt(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}Ct(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class UI{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Bt(e)}Tt(){this.Gt.Qt()}}class BI{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class _r{constructor(){this.Gt=new FI,this.zt=new UI(this.Gt),this.jt=new BI(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Jt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Wt(this.indexId,this.documentKey,this.arrayValue,r)}}function ft(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Tl(n.arrayValue,e.arrayValue),t!==0?t:(t=Tl(n.directionalValue,e.directionalValue),t!==0?t:v.comparator(n.documentKey,e.documentKey)))}function Tl(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Yt=e.orderBy,this.Zt=[];for(const t of e.filters){const r=t;r.isInequality()?this.Xt=r:this.Zt.push(r)}}en(e){R(e.collectionGroup===this.collectionId);const t=_a(e);if(t!==void 0&&!this.tn(t))return!1;const r=zt(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.tn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt!==void 0){if(!i.has(this.Xt.field.canonicalString())){const a=r[s];if(!this.nn(this.Xt,a)||!this.rn(this.Yt[o++],a))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Yt.length||!this.rn(this.Yt[o++],a))return!1}return!0}tn(e){for(const t of this.Zt)if(this.nn(t,e))return!0;return!1}nn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}rn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(n){var e,t;if(R(n instanceof L||n instanceof j),n instanceof L){if(n instanceof Jd){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>L.create(n.field,"==",s)))||[];return j.create(i,"or")}return n}const r=n.filters.map(i=>Df(i));return j.create(r,n.op)}function zI(n){if(n.getFilters().length===0)return[];const e=Da(Df(n));return R(kf(e)),Ca(e)||Va(e)?[e]:e.getFilters()}function Ca(n){return n instanceof L}function Va(n){return n instanceof j&&mc(n)}function kf(n){return Ca(n)||Va(n)||function(t){if(t instanceof j&&va(t)){for(const r of t.getFilters())if(!Ca(r)&&!Va(r))return!1;return!0}return!1}(n)}function Da(n){if(R(n instanceof L||n instanceof j),n instanceof L)return n;if(n.filters.length===1)return Da(n.filters[0]);const e=n.filters.map(r=>Da(r));let t=j.create(e,n.op);return t=Cs(t),kf(t)?t:(R(t instanceof j),R(zn(t)),R(t.filters.length>1),t.filters.reduce((r,i)=>Pc(r,i)))}function Pc(n,e){let t;return R(n instanceof L||n instanceof j),R(e instanceof L||e instanceof j),t=n instanceof L?e instanceof L?function(i,s){return j.create([i,s],"and")}(n,e):wl(n,e):e instanceof L?wl(e,n):function(i,s){if(R(i.filters.length>0&&s.filters.length>0),zn(i)&&zn(s))return Hd(i,s.getFilters());const o=va(i)?i:s,a=va(i)?s:i,c=o.filters.map(u=>Pc(u,a));return j.create(c,"or")}(n,e),Cs(t)}function wl(n,e){if(zn(e))return Hd(e,n.getFilters());{const t=e.filters.map(r=>Pc(n,r));return j.create(t,"or")}}function Cs(n){if(R(n instanceof L||n instanceof j),n instanceof L)return n;const e=n.getFilters();if(e.length===1)return Cs(e[0]);if(Kd(n))return n;const t=e.map(i=>Cs(i)),r=[];return t.forEach(i=>{i instanceof L?r.push(i):i instanceof j&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:j.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(){this.sn=new bc}addToCollectionParentIndex(e,t){return this.sn.add(t),m.resolve()}getCollectionParents(e,t){return m.resolve(this.sn.getEntries(t))}addFieldIndex(e,t){return m.resolve()}deleteFieldIndex(e,t){return m.resolve()}getDocumentsMatchingTarget(e,t){return m.resolve(null)}getIndexType(e,t){return m.resolve(0)}getFieldIndexes(e,t){return m.resolve([])}getNextCollectionGroupToUpdate(e){return m.resolve(null)}getMinOffset(e,t){return m.resolve(Ne.min())}getMinOffsetFromCollectionGroup(e,t){return m.resolve(Ne.min())}updateCollectionGroup(e,t,r){return m.resolve()}updateIndexEntries(e,t){return m.resolve()}}class bc{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Q(q.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Q(q.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=new Uint8Array(0);class jI{constructor(e,t){this.user=e,this.databaseId=t,this.on=new bc,this._n=new ut(r=>an(r),(r,i)=>Ii(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.on.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.on.add(t)});const s={collectionId:r,parent:Se(i)};return Al(e).put(s)}return m.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[Vd(t),""],!1,!0);return Al(e).G(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(je(o.parent))}return r})}addFieldIndex(e,t){const r=Qi(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=Ir(e);return s.next(a=>{o.put(yl(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=Qi(e),i=Ir(e),s=yr(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const r=yr(e);let i=!0;const s=new Map;return m.forEach(this.an(t),o=>this.un(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=x();const a=[];return m.forEach(s,(c,u)=>{_("IndexedDbIndexManager",`Using index ${function(S){return`id=${S.indexId}|cg=${S.collectionGroup}|f=${S.fields.map(F=>`${F.fieldPath}:${F.kind}`).join(",")}`}(c)} to execute ${an(t)}`);const l=function(S,F){const G=_a(F);if(G===void 0)return null;for(const M of Ss(S,G.fieldPath))switch(M.op){case"array-contains-any":return M.value.arrayValue.values||[];case"array-contains":return[M.value]}return null}(u,c),h=function(S,F){const G=new Map;for(const M of zt(F))for(const oe of Ss(S,M.fieldPath))switch(oe.op){case"==":case"in":G.set(M.fieldPath.canonicalString(),oe.value);break;case"not-in":case"!=":return G.set(M.fieldPath.canonicalString(),oe.value),Array.from(G.values())}return null}(u,c),d=function(S,F){const G=[];let M=!0;for(const oe of zt(F)){const Me=oe.kind===0?rl(S,oe.fieldPath,S.startAt):il(S,oe.fieldPath,S.startAt);G.push(Me.value),M&&(M=Me.inclusive)}return new Vt(G,M)}(u,c),f=function(S,F){const G=[];let M=!0;for(const oe of zt(F)){const Me=oe.kind===0?il(S,oe.fieldPath,S.endAt):rl(S,oe.fieldPath,S.endAt);G.push(Me.value),M&&(M=Me.inclusive)}return new Vt(G,M)}(u,c),y=this.cn(c,u,d),I=this.cn(c,u,f),E=this.ln(c,u,h),b=this.hn(c.indexId,l,y,d.inclusive,I,f.inclusive,E);return m.forEach(b,C=>r.H(C,t.limit).next(S=>{S.forEach(F=>{const G=v.fromSegments(F.documentKey);o.has(G)||(o=o.add(G),a.push(G))})}))}).next(()=>a)}return m.resolve(null)})}an(e){let t=this._n.get(e);return t||(e.filters.length===0?t=[e]:t=zI(j.create(e.filters,"and")).map(r=>wa(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this._n.set(e,t),t)}hn(e,t,r,i,s,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,s.length),u=c/(t!=null?t.length:1),l=[];for(let h=0;h<c;++h){const d=t?this.Pn(t[h/u]):$i,f=this.In(e,d,r[h%u],i),y=this.Tn(e,d,s[h%u],o),I=a.map(E=>this.In(e,d,E,!0));l.push(...this.createRange(f,y,I))}return l}In(e,t,r,i){const s=new Wt(e,v.empty(),t,r);return i?s:s.Jt()}Tn(e,t,r,i){const s=new Wt(e,v.empty(),t,r);return i?s.Jt():s}un(e,t){const r=new qI(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.en(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.an(t);return m.forEach(i,s=>this.un(e,s).next(o=>{o?r!==0&&o.fields.length<function(c){let u=new Q(re.comparator),l=!1;for(const h of c.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?l=!0:u=u.add(d.field));for(const h of c.orderBy)h.field.isKeyField()||(u=u.add(h.field));return u.size+(l?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}En(e,t){const r=new _r;for(const i of zt(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);Kt.bt.Pt(s,o)}return r.Wt()}Pn(e){const t=new _r;return Kt.bt.Pt(e,t.Ht(0)),t.Wt()}dn(e,t){const r=new _r;return Kt.bt.Pt(on(this.databaseId,t),r.Ht(function(s){const o=zt(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}ln(e,t,r){if(r===null)return[];let i=[];i.push(new _r);let s=0;for(const o of zt(e)){const a=r[s++];for(const c of i)if(this.An(t,o.fieldPath)&&Qr(a))i=this.Rn(i,o,a);else{const u=c.Ht(o.kind);Kt.bt.Pt(a,u)}}return this.Vn(i)}cn(e,t,r){return this.ln(e,t,r.position)}Vn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Wt();return t}Rn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new _r;c.seed(a.Wt()),Kt.bt.Pt(o,c.Ht(t.kind)),s.push(c)}return s}An(e,t){return!!e.filters.find(r=>r instanceof L&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Qi(e),i=Ir(e);return(t?r.G("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.G()).next(s=>{const o=[];return m.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(l,h){const d=h?new Kr(h.sequenceNumber,new Ne(hn(h.readTime),new v(je(h.documentKey)),h.largestBatchId)):Kr.empty(),f=l.fields.map(([y,I])=>new ts(re.fromServerFormat(y),I));return new As(l.indexId,l.collectionGroup,f,d)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:V(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=Qi(e),s=Ir(e);return this.mn(e).next(o=>i.G("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>m.forEach(a,c=>s.put(yl(c.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return m.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?m.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),m.forEach(a,c=>this.fn(e,i,c).next(u=>{const l=this.gn(s,c);return u.isEqual(l)?m.resolve():this.pn(e,s,c,u,l)}))))})}yn(e,t,r,i){return yr(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.dn(r,t.key),documentKey:t.key.path.toArray()})}wn(e,t,r,i){return yr(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.dn(r,t.key),t.key.path.toArray()])}fn(e,t,r){const i=yr(e);let s=new Q(ft);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.dn(r,t)])},(o,a)=>{s=s.add(new Wt(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}gn(e,t){let r=new Q(ft);const i=this.En(t,e);if(i==null)return r;const s=_a(t);if(s!=null){const o=e.data.field(s.fieldPath);if(Qr(o))for(const a of o.arrayValue.values||[])r=r.add(new Wt(t.indexId,e.key,this.Pn(a),i))}else r=r.add(new Wt(t.indexId,e.key,$i,i));return r}pn(e,t,r,i,s){_("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(c,u,l,h,d){const f=c.getIterator(),y=u.getIterator();let I=Tn(f),E=Tn(y);for(;I||E;){let b=!1,C=!1;if(I&&E){const S=l(I,E);S<0?C=!0:S>0&&(b=!0)}else I!=null?C=!0:b=!0;b?(h(E),E=Tn(y)):C?(d(I),I=Tn(f)):(I=Tn(f),E=Tn(y))}}(i,s,ft,a=>{o.push(this.yn(e,t,r,a))},a=>{o.push(this.wn(e,t,r,a))}),m.waitFor(o)}mn(e){let t=1;return Ir(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>ft(o,a)).filter((o,a,c)=>!a||ft(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=ft(o,e),c=ft(o,t);if(a===0)i[0]=e.Jt();else if(a>0&&c<0)i.push(o),i.push(o.Jt());else if(c>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Sn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,$i,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,$i,[]];s.push(IDBKeyRange.bound(a,c))}return s}Sn(e,t){return ft(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Rl)}getMinOffset(e,t){return m.mapArray(this.an(t),r=>this.un(e,r).next(i=>i||A())).next(Rl)}}function Al(n){return pe(n,"collectionParents")}function yr(n){return pe(n,"indexEntries")}function Qi(n){return pe(n,"indexConfiguration")}function Ir(n){return pe(n,"indexState")}function Rl(n){R(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;dc(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Ne(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class we{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new we(e,we.DEFAULT_COLLECTION_PERCENTILE,we.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.Z({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{R(a===1)}));const u=[];for(const l of t.mutations){const h=Md(e,l.key.path,t.batchId);s.push(i.delete(h)),u.push(l.key)}return m.waitFor(s).next(()=>u)}function Vs(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw A();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */we.DEFAULT_COLLECTION_PERCENTILE=10,we.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,we.DEFAULT=new we(41943040,we.DEFAULT_COLLECTION_PERCENTILE,we.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),we.DISABLED=new we(-1,0,0);class fo{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.bn={}}static lt(e,t,r,i){R(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new fo(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return mt(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=Rn(e),o=mt(e);return o.add({}).next(a=>{R(typeof a=="number");const c=new Ic(a,t,r,i),u=function(f,y,I){const E=I.baseMutations.map(C=>Xr(f.ct,C)),b=I.mutations.map(C=>Xr(f.ct,C));return{userId:y,batchId:I.batchId,localWriteTimeMs:I.localWriteTime.toMillis(),baseMutations:E,mutations:b}}(this.serializer,this.userId,c),l=[];let h=new Q((d,f)=>V(d.canonicalString(),f.canonicalString()));for(const d of i){const f=Md(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(f,ky))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.bn[a]=c.keys()}),m.waitFor(l).next(()=>c)})}lookupMutationBatch(e,t){return mt(e).get(t).next(r=>r?(R(r.userId===this.userId),jt(this.serializer,r)):null)}Dn(e,t){return this.bn[t]?m.resolve(this.bn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.bn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return mt(e).Z({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(R(a.batchId>=r),s=jt(this.serializer,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return mt(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return mt(e).G("userMutationsIndex",t).next(r=>r.map(i=>jt(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=ns(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return Rn(e).Z({range:i},(o,a,c)=>{const[u,l,h]=o,d=je(l);if(u===this.userId&&t.path.isEqual(d))return mt(e).get(h).next(f=>{if(!f)throw A();R(f.userId===this.userId),s.push(jt(this.serializer,f))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Q(V);const i=[];return t.forEach(s=>{const o=ns(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=Rn(e).Z({range:a},(u,l,h)=>{const[d,f,y]=u,I=je(f);d===this.userId&&s.path.isEqual(I)?r=r.add(y):h.done()});i.push(c)}),m.waitFor(i).next(()=>this.vn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=ns(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Q(V);return Rn(e).Z({range:o},(c,u,l)=>{const[h,d,f]=c,y=je(d);h===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(f)):l.done()}).next(()=>this.vn(e,a))}vn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(mt(e).get(s).next(o=>{if(o===null)throw A();R(o.userId===this.userId),r.push(jt(this.serializer,o))}))}),m.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return Nf(e.ue,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.Cn(t.batchId)}),m.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Cn(e){delete this.bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return m.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Rn(e).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=je(s[1]);i.push(c)}else a.done()}).next(()=>{R(i.length===0)})})}containsKey(e,t){return xf(e,this.userId,t)}Fn(e){return Of(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function xf(n,e,t){const r=ns(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Rn(n).Z({range:s,Y:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function mt(n){return pe(n,"mutations")}function Rn(n){return pe(n,"documentMutations")}function Of(n){return pe(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new dn(0)}static On(){return new dn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Nn(e).next(t=>{const r=new dn(t.highestTargetId);return t.highestTargetId=r.next(),this.Bn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Nn(e).next(t=>P.fromTimestamp(new Z(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Nn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Nn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Bn(e,i)))}addTargetData(e,t){return this.Ln(e,t).next(()=>this.Nn(e).next(r=>(r.targetCount+=1,this.kn(t,r),this.Bn(e,r))))}updateTargetData(e,t){return this.Ln(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>wn(e).delete(t.targetId)).next(()=>this.Nn(e)).next(r=>(R(r.targetCount>0),r.targetCount-=1,this.Bn(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return wn(e).Z((o,a)=>{const c=Sr(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>m.waitFor(s)).next(()=>i)}forEachTarget(e,t){return wn(e).Z((r,i)=>{const s=Sr(i);t(s)})}Nn(e){return Pl(e).get("targetGlobalKey").next(t=>(R(t!==null),t))}Bn(e,t){return Pl(e).put("targetGlobalKey",t)}Ln(e,t){return wn(e).put(Vf(this.serializer,t))}kn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Nn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=an(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return wn(e).Z({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=Sr(a);Ii(t,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=_t(e);return t.forEach(o=>{const a=Se(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),m.waitFor(i)}removeMatchingKeys(e,t,r){const i=_t(e);return m.forEach(t,s=>{const o=Se(s.path);return m.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=_t(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=_t(e);let s=x();return i.Z({range:r,Y:!0},(o,a,c)=>{const u=je(o[1]),l=new v(u);s=s.add(l)}).next(()=>s)}containsKey(e,t){const r=Se(t.path),i=IDBKeyRange.bound([r],[Vd(r)],!1,!0);let s=0;return _t(e).Z({index:"documentTargetsIndex",Y:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}ut(e,t){return wn(e).get(t).next(r=>r?Sr(r):null)}}function wn(n){return pe(n,"targets")}function Pl(n){return pe(n,"targetGlobal")}function _t(n){return pe(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl([n,e],[t,r]){const i=V(n,t);return i===0?V(e,r):i}class WI{constructor(e){this.qn=e,this.buffer=new Q(bl),this.Qn=0}Kn(){return++this.Qn}$n(e){const t=[e,this.Kn()];if(this.buffer.size<this.qn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();bl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Mf{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Un=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Wn(6e4)}stop(){this.Un&&(this.Un.cancel(),this.Un=null)}get started(){return this.Un!==null}Wn(e){_("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Un=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Un=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ot(t)?_("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await xt(t)}await this.Wn(3e5)})}}class HI{constructor(e,t){this.Gn=e,this.params=t}calculateTargetCount(e,t){return this.Gn.zn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return m.resolve(Ce.ae);const r=new WI(t);return this.Gn.forEachTarget(e,i=>r.$n(i.sequenceNumber)).next(()=>this.Gn.jn(e,i=>r.$n(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Gn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Gn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(_("LruGarbageCollector","Garbage collection skipped; disabled"),m.resolve(Sl)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(_("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Sl):this.Hn(e,t))}getCacheSize(e){return this.Gn.getCacheSize(e)}Hn(e,t){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(_("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),pa()<=z.DEBUG&&_("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),m.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function Lf(n,e){return new HI(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e,t){this.db=e,this.garbageCollector=Lf(this,t)}zn(e){const t=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Jn(e){let t=0;return this.jn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}jn(e,t){return this.Yn(e,(r,i)=>t(i))}addReference(e,t,r){return Ji(e,r)}removeReference(e,t,r){return Ji(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Ji(e,t)}Zn(e,t){return function(i,s){let o=!1;return Of(i).X(a=>xf(i,a,s).next(c=>(c&&(o=!0),m.resolve(!c)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Yn(e,(o,a)=>{if(a<=t){const c=this.Zn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,P.min()),_t(e).delete(function(h){return[0,Se(h.path)]}(o))))});i.push(c)}}).next(()=>m.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Ji(e,t)}Yn(e,t){const r=_t(e);let i,s=Ce.ae;return r.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==Ce.ae&&t(new v(je(i)),s),s=u,i=c):s=Ce.ae}).next(()=>{s!==Ce.ae&&t(new v(je(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ji(n,e){return _t(n).put(function(r,i){return{targetId:0,path:Se(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(){this.changes=new ut(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,$.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?m.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Bt(e).put(r)}removeEntry(e,t,r){return Bt(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],bs(o),a[a.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.Xn(e,r)))}getEntry(e,t){let r=$.newInvalidDocument(t);return Bt(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Er(t))},(i,s)=>{r=this.er(t,s)}).next(()=>r)}tr(e,t){let r={size:0,document:$.newInvalidDocument(t)};return Bt(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Er(t))},(i,s)=>{r={document:this.er(t,s),size:Vs(s)}}).next(()=>r)}getEntries(e,t){let r=De();return this.nr(e,t,(i,s)=>{const o=this.er(i,s);r=r.insert(i,o)}).next(()=>r)}rr(e,t){let r=De(),i=new W(v.comparator);return this.nr(e,t,(s,o)=>{const a=this.er(s,o);r=r.insert(s,a),i=i.insert(s,Vs(o))}).next(()=>({documents:r,ir:i}))}nr(e,t,r){if(t.isEmpty())return m.resolve();let i=new Q(Dl);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(Er(i.first()),Er(i.last())),o=i.getIterator();let a=o.getNext();return Bt(e).Z({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=v.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&Dl(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.W(Er(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i){const s=t.path,o=[s.popLast().toArray(),s.lastSegment(),bs(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Bt(e).G(IDBKeyRange.bound(o,a,!0)).next(c=>{let u=De();for(const l of c){const h=this.er(v.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);h.isFoundDocument()&&(vi(t,h)||i.has(h.key))&&(u=u.insert(h.key,h))}return u})}getAllFromCollectionGroup(e,t,r,i){let s=De();const o=Vl(t,r),a=Vl(t,Ne.max());return Bt(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.er(v.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(e){return new JI(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Cl(e).get("remoteDocumentGlobalKey").next(t=>(R(!!t),t))}Xn(e,t){return Cl(e).put("remoteDocumentGlobalKey",t)}er(e,t){if(t){const r=OI(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(P.min())))return r}return $.newInvalidDocument(e)}}function Uf(n){return new QI(n)}class JI extends Ff{constructor(e,t){super(),this.sr=e,this.trackRemovals=t,this._r=new ut(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new Q((s,o)=>V(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this._r.get(s);if(t.push(this.sr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=pl(this.sr.serializer,o);i=i.add(s.path.popLast());const u=Vs(c);r+=u-a.size,t.push(this.sr.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=pl(this.sr.serializer,o.convertToNoDocument(P.min()));t.push(this.sr.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this.sr.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.sr.updateMetadata(e,r)),m.waitFor(t)}getFromCache(e,t){return this.sr.tr(e,t).next(r=>(this._r.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.sr.rr(e,t).next(({documents:r,ir:i})=>(i.forEach((s,o)=>{this._r.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function Cl(n){return pe(n,"remoteDocumentGlobal")}function Bt(n){return pe(n,"remoteDocumentsV14")}function Er(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Vl(n,e){const t=e.documentKey.path.toArray();return[n,bs(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Dl(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=V(t[s],r[s]),i)return i;return i=V(t.length,r.length),i||(i=V(t[t.length-2],r[r.length-2]),i||V(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Dr(r.mutation,i,Ve.empty(),Z.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,x()).next(()=>r))}getLocalViewOfDocuments(e,t,r=x()){const i=Ke();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=Ar();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Ke();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,x()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=De();const o=Vr(),a=function(){return Vr()}();return t.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof lt)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Dr(l.mutation,u,l.mutation.getFieldMask(),Z.now())):o.set(u.key,Ve.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new YI(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=Vr();let i=new W((o,a)=>o-a),s=x();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=r.get(c)||Ve.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||x()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=rf();l.forEach(d=>{if(!s.has(d)){const f=df(t.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return m.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(s){return v.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):pc(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):m.resolve(Ke());let a=-1,c=s;return o.next(u=>m.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?m.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,x())).next(l=>({batchId:a,changes:nf(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new v(t)).next(r=>{let i=Ar();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const i=t.collectionGroup;let s=Ar();return this.indexManager.getCollectionParents(e,i).next(o=>m.forEach(o,a=>{const c=function(l,h){return new ct(h,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i))).next(s=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,$.newInvalidDocument(u)))});let o=Ar();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Dr(u.mutation,c,Ve.empty(),Z.now()),vi(t,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,t){return m.resolve(this.ar.get(t))}saveBundleMetadata(e,t){return this.ar.set(t.id,function(i){return{id:i.id,version:i.version,createTime:ie(i.createTime)}}(t)),m.resolve()}getNamedQuery(e,t){return m.resolve(this.ur.get(t))}saveNamedQuery(e,t){return this.ur.set(t.name,function(i){return{name:i.name,query:Sc(i.bundledQuery),readTime:ie(i.readTime)}}(t)),m.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(){this.overlays=new W(v.comparator),this.cr=new Map}getOverlay(e,t){return m.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Ke();return m.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),m.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),m.resolve()}getOverlaysForCollection(e,t,r){const i=Ke(),s=t.length+1,o=new v(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return m.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new W((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=Ke(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Ke(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return m.resolve(a)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new vc(t,r));let s=this.cr.get(t);s===void 0&&(s=x(),this.cr.set(t,s)),this.cr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(){this.lr=new Q(de.hr),this.Pr=new Q(de.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,t){const r=new de(e,t);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Er(new de(e,t))}dr(e,t){e.forEach(r=>this.removeReference(r,t))}Ar(e){const t=new v(new q([])),r=new de(t,e),i=new de(t,e+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const t=new v(new q([])),r=new de(t,e),i=new de(t,e+1);let s=x();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new de(e,0),r=this.lr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class de{constructor(e,t){this.key=e,this.mr=t}static hr(e,t){return v.comparator(e.key,t.key)||V(e.mr,t.mr)}static Ir(e,t){return V(e.mr,t.mr)||v.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.gr=1,this.pr=new Q(de.hr)}checkEmpty(e){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ic(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new de(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(e,t){return m.resolve(this.yr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.wr(r),s=i<0?0:i;return m.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new de(t,0),i=new de(t,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),m.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Q(V);return t.forEach(i=>{const s=new de(i,0),o=new de(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),m.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;v.isDocumentKey(s)||(s=s.child(""));const o=new de(new v(s),0);let a=new Q(V);return this.pr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.mr)),!0)},o),m.resolve(this.Sr(a))}Sr(e){const t=[];return e.forEach(r=>{const i=this.yr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){R(this.br(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return m.forEach(t.mutations,i=>{const s=new de(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,t){const r=new de(t,0),i=this.pr.firstAfterOrEqual(r);return m.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,m.resolve()}br(e,t){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const t=this.wr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e){this.Dr=e,this.docs=function(){return new W(v.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return m.resolve(r?r.document.mutableCopy():$.newInvalidDocument(t))}getEntries(e,t){let r=De();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():$.newInvalidDocument(i))}),m.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=De();const o=t.path,a=new v(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||dc(kd(l),r)<=0||(i.has(l.key)||vi(t,l))&&(s=s.insert(l.key,l.mutableCopy()))}return m.resolve(s)}getAllFromCollectionGroup(e,t,r,i){A()}vr(e,t){return m.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new nE(this)}getSize(e){return m.resolve(this.size)}}class nE extends Ff{constructor(e){super(),this.sr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.sr.addEntry(e,i)):this.sr.removeEntry(r)}),m.waitFor(t)}getFromCache(e,t){return this.sr.getEntry(e,t)}getAllFromCache(e,t){return this.sr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e){this.persistence=e,this.Cr=new ut(t=>an(t),Ii),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Cc,this.targetCount=0,this.Or=dn.xn()}forEachTarget(e,t){return this.Cr.forEach((r,i)=>t(i)),m.resolve()}getLastRemoteSnapshotVersion(e){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return m.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Fr&&(this.Fr=t),m.resolve()}Ln(e){this.Cr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Or=new dn(t),this.highestTargetId=t),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,t){return this.Ln(t),this.targetCount+=1,m.resolve()}updateTargetData(e,t){return this.Ln(t),m.resolve()}removeTargetData(e,t){return this.Cr.delete(t.target),this.Mr.Ar(t.targetId),this.targetCount-=1,m.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),m.waitFor(s).next(()=>i)}getTargetCount(e){return m.resolve(this.targetCount)}getTargetData(e,t){const r=this.Cr.get(t)||null;return m.resolve(r)}addMatchingKeys(e,t,r){return this.Mr.Tr(t,r),m.resolve()}removeMatchingKeys(e,t,r){this.Mr.dr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),m.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Mr.Ar(t),m.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Mr.Vr(t);return m.resolve(r)}containsKey(e,t){return m.resolve(this.Mr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,t){this.Nr={},this.overlays={},this.Br=new Ce(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new rE(this),this.indexManager=new GI,this.remoteDocumentCache=function(i){return new tE(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new Cf(t),this.Qr=new XI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ZI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Nr[e.toKey()];return r||(r=new eE(t,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,t,r){_("MemoryPersistence","Starting transaction:",e);const i=new iE(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(e,t){return m.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,t)))}}class iE extends xd{constructor(e){super(),this.currentSequenceNumber=e}}class mo{constructor(e){this.persistence=e,this.Wr=new Cc,this.Gr=null}static zr(e){return new mo(e)}get jr(){if(this.Gr)return this.Gr;throw A()}addReference(e,t,r){return this.Wr.addReference(r,t),this.jr.delete(r.toString()),m.resolve()}removeReference(e,t,r){return this.Wr.removeReference(r,t),this.jr.add(r.toString()),m.resolve()}markPotentiallyOrphaned(e,t){return this.jr.add(t.toString()),m.resolve()}removeTarget(e,t){this.Wr.Ar(t.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Kr(){this.Gr=new Set}$r(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.jr,r=>{const i=v.fromPath(r);return this.Hr(e,i).next(s=>{s||t.removeEntry(i,P.min())})}).next(()=>(this.Gr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hr(e,t).next(r=>{r?this.jr.delete(t.toString()):this.jr.add(t.toString())})}qr(e){return 0}Hr(e,t){return m.or([()=>m.resolve(this.Wr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ur(e,t)])}}class Ds{constructor(e,t){this.persistence=e,this.Jr=new ut(r=>Se(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Lf(this,t)}static zr(e,t){return new Ds(e,t)}Kr(){}$r(e){return m.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}zn(e){const t=this.Jn(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Jn(e){let t=0;return this.jn(e,r=>{t++}).next(()=>t)}jn(e,t){return m.forEach(this.Jr,(r,i)=>this.Zn(e,r,i).next(s=>s?m.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.vr(e,o=>this.Zn(e,o,t).next(a=>{a||(r++,s.removeEntry(o,P.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.Jr.set(t,e.currentSequenceNumber),m.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.Jr.set(r,e.currentSequenceNumber),m.resolve()}removeReference(e,t,r){return this.Jr.set(r,e.currentSequenceNumber),m.resolve()}updateLimboDocument(e,t){return this.Jr.set(t,e.currentSequenceNumber),m.resolve()}qr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=is(e.data.value)),t}Zn(e,t,r){return m.or([()=>this.persistence.Ur(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.Jr.get(t);return m.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e){this.serializer=e}B(e,t,r,i){const s=new so("createOrUpgrade",t);r<1&&i>=1&&(function(c){c.createObjectStore("owner")}(e),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Hu,{unique:!0}),c.createObjectStore("documentMutations")}(e),kl(e),function(c){c.createObjectStore("remoteDocuments")}(e));let o=m.resolve();return r<3&&i>=3&&(r!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(e),kl(e)),o=o.next(()=>function(c){const u=c.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:P.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(c,u){return u.store("mutations").G().next(l=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Hu,{unique:!0});const h=u.store("mutations"),d=l.map(f=>h.put(f));return m.waitFor(d)})}(e,s))),o=o.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Yr(s))),r<6&&i>=6&&(o=o.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(e),this.Zr(s)))),r<7&&i>=7&&(o=o.next(()=>this.Xr(s))),r<8&&i>=8&&(o=o.next(()=>this.ei(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ti(s))),r<11&&i>=11&&(o=o.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(c){const u=c.createObjectStore("documentOverlays",{keyPath:jy});u.createIndex("collectionPathOverlayIndex",Ky,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",Wy,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(c){const u=c.createObjectStore("remoteDocumentsV14",{keyPath:Ny});u.createIndex("documentKeyIndex",xy),u.createIndex("collectionGroupIndex",Oy)}(e)).next(()=>this.ni(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ri(e,s))),r<15&&i>=15&&(o=o.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:By}).createIndex("sequenceNumberIndex",qy,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:zy}).createIndex("documentKeyIndex",Gy,{unique:!1})}(e))),o}Zr(e){let t=0;return e.store("remoteDocuments").Z((r,i)=>{t+=Vs(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Yr(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.G().next(i=>m.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.G("userMutationsIndex",o).next(a=>m.forEach(a,c=>{R(c.userId===s.userId);const u=jt(this.serializer,c);return Nf(e,s.userId,u).next(()=>{})}))}))}Xr(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const c=new q(o),u=function(h){return[0,Se(h)]}(c);s.push(t.get(u).next(l=>l?m.resolve():(h=>t.put({targetId:0,path:Se(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>m.waitFor(s))})}ei(e,t){e.createObjectStore("collectionParents",{keyPath:Uy});const r=t.store("collectionParents"),i=new bc,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Se(c)})}};return t.store("remoteDocuments").Z({Y:!0},(o,a)=>{const c=new q(o);return s(c.popLast())}).next(()=>t.store("documentMutations").Z({Y:!0},([o,a,c],u)=>{const l=je(a);return s(l.popLast())}))}ti(e){const t=e.store("targets");return t.Z((r,i)=>{const s=Sr(i),o=Vf(this.serializer,s);return t.put(o)})}ni(e,t){const r=t.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=t.store("remoteDocumentsV14"),c=function(h){return h.document?new v(q.fromString(h.document.name).popFirst(5)):h.noDocument?v.fromSegments(h.noDocument.path):h.unknownDocument?v.fromSegments(h.unknownDocument.path):A()}(o).path.toArray(),u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>m.waitFor(i))}ri(e,t){const r=t.store("mutations"),i=Uf(this.serializer),s=new Vc(mo.zr,this.serializer.ct);return r.G().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:x();jt(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),m.forEach(a,(c,u)=>{const l=new fe(u),h=ho.lt(this.serializer,l),d=s.getIndexManager(l),f=fo.lt(l,this.serializer,d,s.referenceDelegate);return new Bf(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new ya(t,Ce.ae),c).next()})})}}function kl(n){n.createObjectStore("targetDocuments",{keyPath:Ly}).createIndex("documentTargetsIndex",Fy,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",My,{unique:!0}),n.createObjectStore("targetGlobal")}const Wo="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Dc{constructor(e,t,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ii=s,this.window=o,this.document=a,this.si=u,this.oi=l,this._i=h,this.Br=null,this.Lr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ai=null,this.inForeground=!1,this.ui=null,this.ci=null,this.li=Number.NEGATIVE_INFINITY,this.hi=d=>Promise.resolve(),!Dc.v())throw new p(g.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new $I(this,i),this.Pi=t+"main",this.serializer=new Cf(c),this.Ii=new Fe(this.Pi,this._i,new sE(this.serializer)),this.kr=new KI(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Uf(this.serializer),this.Qr=new MI,this.window&&this.window.localStorage?this.Ti=this.window.localStorage:(this.Ti=null,l===!1&&ne("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ei().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new p(g.FAILED_PRECONDITION,Wo);return this.di(),this.Ai(),this.Ri(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.kr.getHighestSequenceNumber(e))}).then(e=>{this.Br=new Ce(e,this.si)}).then(()=>{this.Lr=!0}).catch(e=>(this.Ii&&this.Ii.close(),Promise.reject(e)))}Vi(e){return this.hi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ii.k(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.Ei()}))}Ei(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Yi(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.mi(e).next(t=>{t||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.hi(!1)))})}).next(()=>this.fi(e)).next(t=>this.isPrimary&&!t?this.gi(e).next(()=>!1):!!t&&this.pi(e).next(()=>!0))).catch(e=>{if(Ot(e))return _("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return _("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.hi(e)),this.isPrimary=e})}mi(e){return vr(e).get("owner").next(t=>m.resolve(this.yi(t)))}wi(e){return Yi(e).delete(this.clientId)}async Si(){if(this.isPrimary&&!this.bi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=pe(t,"clientMetadata");return r.G().next(i=>{const s=this.Di(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return m.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ti)for(const t of e)this.Ti.removeItem(this.vi(t.clientId))}}Ri(){this.ci=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ei().then(()=>this.Si()).then(()=>this.Ri()))}yi(e){return!!e&&e.ownerId===this.clientId}fi(e){return this.oi?m.resolve(!0):vr(e).get("owner").next(t=>{if(t!==null&&this.bi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)){if(this.yi(t)&&this.networkEnabled)return!0;if(!this.yi(t)){if(!t.allowTabSynchronization)throw new p(g.FAILED_PRECONDITION,Wo);return!1}}return!(!this.networkEnabled||!this.inForeground)||Yi(e).G().next(r=>this.Di(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&_("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Lr=!1,this.Fi(),this.ci&&(this.ci.cancel(),this.ci=null),this.Mi(),this.xi(),await this.Ii.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new ya(e,Ce.ae);return this.gi(t).next(()=>this.wi(t))}),this.Ii.close(),this.Oi()}Di(e,t){return e.filter(r=>this.bi(r.updateTimeMs,t)&&!this.Ci(r.clientId))}Ni(){return this.runTransaction("getActiveClients","readonly",e=>Yi(e).G().next(t=>this.Di(t,18e5).map(r=>r.clientId)))}get started(){return this.Lr}getMutationQueue(e,t){return fo.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new jI(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return ho.lt(this.serializer,e)}getBundleCache(){return this.Qr}runTransaction(e,t,r){_("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(c){return c===15?$y:c===14?Ud:c===13?Fd:c===12?Hy:c===11?Ld:void A()}(this._i);let o;return this.Ii.runTransaction(e,i,s,a=>(o=new ya(a,this.Br?this.Br.next():Ce.ae),t==="readwrite-primary"?this.mi(o).next(c=>!!c||this.fi(o)).next(c=>{if(!c)throw ne(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.hi(!1)),new p(g.FAILED_PRECONDITION,Nd);return r(o)}).next(c=>this.pi(o).next(()=>c)):this.Bi(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Bi(e){return vr(e).get("owner").next(t=>{if(t!==null&&this.bi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)&&!this.yi(t)&&!(this.oi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new p(g.FAILED_PRECONDITION,Wo)})}pi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return vr(e).put("owner",t)}static v(){return Fe.v()}gi(e){const t=vr(e);return t.get("owner").next(r=>this.yi(r)?(_("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):m.resolve())}bi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(ne(`Detected an update time that is in the future: ${e} > ${r}`),!1))}di(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ui=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ei()))},this.document.addEventListener("visibilitychange",this.ui),this.inForeground=this.document.visibilityState==="visible")}Mi(){this.ui&&(this.document.removeEventListener("visibilitychange",this.ui),this.ui=null)}Ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ai=()=>{this.Fi();const t=/(?:Version|Mobile)\/1[456]/;Hg()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ai))}xi(){this.ai&&(this.window.removeEventListener("pagehide",this.ai),this.ai=null)}Ci(e){var t;try{const r=((t=this.Ti)===null||t===void 0?void 0:t.getItem(this.vi(e)))!==null;return _("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return ne("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Fi(){if(this.Ti)try{this.Ti.setItem(this.vi(this.clientId),String(Date.now()))}catch(e){ne("Failed to set zombie client id.",e)}}Oi(){if(this.Ti)try{this.Ti.removeItem(this.vi(this.clientId))}catch{}}vi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function vr(n){return pe(n,"owner")}function Yi(n){return pe(n,"clientMetadata")}function kc(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Li=r,this.ki=i}static qi(e,t){let r=x(),i=x();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Nc(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(){this.Qi=!1}initialize(e,t){this.Ki=e,this.indexManager=t,this.Qi=!0}getDocumentsMatchingQuery(e,t,r,i){return this.$i(e,t).next(s=>s||this.Ui(e,t,i,r)).next(s=>s||this.Wi(e,t))}$i(e,t){if(sl(t))return m.resolve(null);let r=be(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Ps(t,null,"F"),r=be(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=x(...s);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Gi(t,a);return this.zi(t,u,o,c.readTime)?this.$i(e,Ps(t,null,"F")):this.ji(e,u,t,c)}))})))}Ui(e,t,r,i){return sl(t)||i.isEqual(P.min())?this.Wi(e,t):this.Ki.getDocuments(e,r).next(s=>{const o=this.Gi(t,s);return this.zi(t,o,r,i)?this.Wi(e,t):(pa()<=z.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ra(t)),this.ji(e,o,t,Dd(i,-1)))})}Gi(e,t){let r=new Q(ef(e));return t.forEach((i,s)=>{vi(e,s)&&(r=r.add(s))}),r}zi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(e,t){return pa()<=z.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",Ra(t)),this.Ki.getDocumentsMatchingQuery(e,t,Ne.min())}ji(e,t,r,i){return this.Ki.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,t,r,i){this.persistence=e,this.Hi=t,this.serializer=i,this.Ji=new W(V),this.Yi=new ut(s=>an(s),Ii),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Bf(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function zf(n,e,t,r){return new oE(n,e,t,r)}async function Gf(n,e){const t=T(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.es(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=x();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(r,c).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function aE(n,e){const t=T(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Xi.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,d=h.keys();let f=m.resolve();return d.forEach(y=>{f=f.next(()=>l.getEntry(c,y)).next(I=>{const E=u.docVersions.get(y);R(E!==null),I.version.compareTo(E)<0&&(h.applyToRemoteDocument(I,u),I.isValidDocument()&&(I.setReadTime(u.commitVersion),l.addEntry(I)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=x();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function jf(n){const e=T(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.kr.getLastRemoteSnapshotVersion(t))}function cE(n,e){const t=T(n),r=e.snapshotVersion;let i=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Xi.newChangeBuffer({trackRemovals:!0});i=t.Ji;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(t.kr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>t.kr.addMatchingKeys(s,l.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(he.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),i=i.insert(h,f),function(I,E,b){return I.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,f,l)&&a.push(t.kr.updateTargetData(s,f))});let c=De(),u=x();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(Kf(s,o,e.documentUpdates).next(l=>{c=l.ns,u=l.rs})),!r.isEqual(P.min())){const l=t.kr.getLastRemoteSnapshotVersion(s).next(h=>t.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return m.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(t.Ji=i,s))}function Kf(n,e,t){let r=x(),i=x();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=De();return t.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(P.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{ns:o,rs:i}})}function uE(n,e){const t=T(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Wn(n,e){const t=T(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.kr.getTargetData(r,e).next(s=>s?(i=s,m.resolve(i)):t.kr.allocateTargetId(r).next(o=>(i=new et(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(r.targetId,r),t.Yi.set(e,r.targetId)),r})}async function Hn(n,e,t){const r=T(n),i=r.Ji.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ot(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function ks(n,e,t){const r=T(n);let i=P.min(),s=x();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,u,l){const h=T(c),d=h.Yi.get(l);return d!==void 0?m.resolve(h.Ji.get(d)):h.kr.getTargetData(u,l)}(r,o,be(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,t?i:P.min(),t?s:x())).next(a=>($f(r,Zd(e),a),{documents:a,ss:s})))}function Wf(n,e){const t=T(n),r=T(t.kr),i=t.Ji.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.ut(s,e).next(o=>o?o.target:null))}function Hf(n,e){const t=T(n),r=t.Zi.get(e)||P.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.Xi.getAllFromCollectionGroup(i,e,Dd(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>($f(t,e,i),i))}function $f(n,e,t){let r=n.Zi.get(e)||P.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Zi.set(e,r)}async function lE(n,e,t,r){const i=T(n);let s=x(),o=De();for(const u of t){const l=e.os(u.metadata.name);u.document&&(s=s.add(l));const h=e._s(u);h.setReadTime(e.us(u.metadata.readTime)),o=o.insert(l,h)}const a=i.Xi.newChangeBuffer({trackRemovals:!0}),c=await Wn(i,function(l){return be(sr(q.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>Kf(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.kr.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.kr.addMatchingKeys(u,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.ns,l.rs)).next(()=>l.ns)))}async function hE(n,e,t=x()){const r=await Wn(n,be(Sc(e.bundledQuery))),i=T(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=ie(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Qr.saveNamedQuery(s,e);const a=r.withResumeToken(he.EMPTY_BYTE_STRING,o);return i.Ji=i.Ji.insert(a.targetId,a),i.kr.updateTargetData(s,a).next(()=>i.kr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.kr.addMatchingKeys(s,t,r.targetId)).next(()=>i.Qr.saveNamedQuery(s,e))})}function Nl(n,e){return`firestore_clients_${n}_${e}`}function xl(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Ho(n,e){return`firestore_targets_${n}_${e}`}class Ns{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static cs(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new p(i.error.code,i.error.message))),o?new Ns(e,t,i.state,s):(ne("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}ls(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class kr{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static cs(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new p(r.error.code,r.error.message))),s?new kr(e,r.state,i):(ne("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}ls(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class xs{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static cs(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=_c();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=Od(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new xs(e,s):(ne("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class xc{constructor(e,t){this.clientId=e,this.onlineState=t}static cs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new xc(t.clientId,t.onlineState):(ne("SharedClientState",`Failed to parse online state: ${e}`),null)}}class ka{constructor(){this.activeTargetIds=_c()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $o{constructor(e,t,r,i,s){this.window=e,this.ii=t,this.persistenceKey=r,this.Is=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ts=this.Es.bind(this),this.ds=new W(V),this.started=!1,this.As=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Rs=Nl(this.persistenceKey,this.Is),this.Vs=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.ds=this.ds.insert(this.Is,new ka),this.fs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.gs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.ps=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.ys=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.ws=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ts)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ni();for(const r of e){if(r===this.Is)continue;const i=this.getItem(Nl(this.persistenceKey,r));if(i){const s=xs.cs(r,i);s&&(this.ds=this.ds.insert(s.clientId,s))}}this.Ss();const t=this.storage.getItem(this.ys);if(t){const r=this.bs(t);r&&this.Ds(r)}for(const r of this.As)this.Es(r);this.As=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.vs(this.ds)}isActiveQueryTarget(e){let t=!1;return this.ds.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Cs(e,"pending")}updateMutationState(e,t,r){this.Cs(e,t,r),this.Fs(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Ho(this.persistenceKey,e));if(r){const i=kr.cs(e,r);i&&(t=i.state)}}return this.Ms.hs(e),this.Ss(),t}removeLocalQueryTarget(e){this.Ms.Ps(e),this.Ss()}isLocalQueryTarget(e){return this.Ms.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ho(this.persistenceKey,e))}updateQueryState(e,t,r){this.xs(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Fs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Os(e)}notifyBundleLoaded(e){this.Ns(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ts),this.removeItem(this.Rs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return _("SharedClientState","READ",e,t),t}setItem(e,t){_("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){_("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Es(e){const t=e;if(t.storageArea===this.storage){if(_("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Rs)return void ne("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.fs.test(t.key)){if(t.newValue==null){const r=this.Bs(t.key);return this.Ls(r,null)}{const r=this.ks(t.key,t.newValue);if(r)return this.Ls(r.clientId,r)}}else if(this.gs.test(t.key)){if(t.newValue!==null){const r=this.qs(t.key,t.newValue);if(r)return this.Qs(r)}}else if(this.ps.test(t.key)){if(t.newValue!==null){const r=this.Ks(t.key,t.newValue);if(r)return this.$s(r)}}else if(t.key===this.ys){if(t.newValue!==null){const r=this.bs(t.newValue);if(r)return this.Ds(r)}}else if(t.key===this.Vs){const r=function(s){let o=Ce.ae;if(s!=null)try{const a=JSON.parse(s);R(typeof a=="number"),o=a}catch(a){ne("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(t.newValue);r!==Ce.ae&&this.sequenceNumberHandler(r)}else if(t.key===this.ws){const r=this.Us(t.newValue);await Promise.all(r.map(i=>this.syncEngine.Ws(i)))}}}else this.As.push(t)})}}get Ms(){return this.ds.get(this.Is)}Ss(){this.setItem(this.Rs,this.Ms.ls())}Cs(e,t,r){const i=new Ns(this.currentUser,e,t,r),s=xl(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ls())}Fs(e){const t=xl(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Os(e){const t={clientId:this.Is,onlineState:e};this.storage.setItem(this.ys,JSON.stringify(t))}xs(e,t,r){const i=Ho(this.persistenceKey,e),s=new kr(e,t,r);this.setItem(i,s.ls())}Ns(e){const t=JSON.stringify(Array.from(e));this.setItem(this.ws,t)}Bs(e){const t=this.fs.exec(e);return t?t[1]:null}ks(e,t){const r=this.Bs(e);return xs.cs(r,t)}qs(e,t){const r=this.gs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Ns.cs(new fe(s),i,t)}Ks(e,t){const r=this.ps.exec(e),i=Number(r[1]);return kr.cs(i,t)}bs(e){return xc.cs(e)}Us(e){return JSON.parse(e)}async Qs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Gs(e.batchId,e.state,e.error);_("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}$s(e){return this.syncEngine.zs(e.targetId,e.state,e.error)}Ls(e,t){const r=t?this.ds.insert(e,t):this.ds.remove(e),i=this.vs(this.ds),s=this.vs(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.js(o,a).then(()=>{this.ds=r})}Ds(e){this.ds.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}vs(e){let t=_c();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class Qf{constructor(){this.Hs=new ka,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,t,r){this.Js[e]=t}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new ka,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{Ys(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xi=null;function Qo(){return Xi===null?Xi=function(){return 268435456+Math.round(2147483648*Math.random())}():Xi++,"0x"+Xi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te="WebChannelConnection";class gE extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http";this.To=r+"://"+t.host,this.Eo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get Ao(){return!1}Ro(t,r,i,s,o){const a=Qo(),c=this.Vo(t,r);_("RestConnection",`Sending RPC '${t}' ${a}:`,c,i);const u={};return this.mo(u,s,o),this.fo(t,c,u,i).then(l=>(_("RestConnection",`Received RPC '${t}' ${a}: `,l),l),l=>{throw Be("RestConnection",`RPC '${t}' ${a} failed with error: `,l,"url: ",c,"request:",i),l})}po(t,r,i,s,o,a){return this.Ro(t,r,i,s,o)}mo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ir}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}Vo(t,r){const i=fE[t];return`${this.To}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}fo(e,t,r,i){const s=Qo();return new Promise((o,a)=>{const c=new gy;c.setWithCredentials(!0),c.listenOnce(dy.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case jo.NO_ERROR:const l=c.getResponseJson();_(Te,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(l)),o(l);break;case jo.TIMEOUT:_(Te,`RPC '${e}' ${s} timed out`),a(new p(g.DEADLINE_EXCEEDED,"Request time out"));break;case jo.HTTP_ERROR:const h=c.getStatus();if(_(Te,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const y=function(E){const b=E.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(b)>=0?b:g.UNKNOWN}(f.status);a(new p(y,f.message))}else a(new p(g.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new p(g.UNAVAILABLE,"Connection failed."));break;default:A()}}finally{_(Te,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);_(Te,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",u,r,15)})}yo(e,t,r){const i=Qo(),s=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ly(),a=hy(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new my({})),this.mo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const l=s.join("");_(Te,`Creating RPC '${e}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,f=!1;const y=new mE({so:E=>{f?_(Te,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(d||(_(Te,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),_(Te,`RPC '${e}' stream ${i} sending:`,E),h.send(E))},oo:()=>h.close()}),I=(E,b,C)=>{E.listen(b,S=>{try{C(S)}catch(F){setTimeout(()=>{throw F},0)}})};return I(h,Ki.EventType.OPEN,()=>{f||_(Te,`RPC '${e}' stream ${i} transport opened.`)}),I(h,Ki.EventType.CLOSE,()=>{f||(f=!0,_(Te,`RPC '${e}' stream ${i} transport closed`),y.Po())}),I(h,Ki.EventType.ERROR,E=>{f||(f=!0,Be(Te,`RPC '${e}' stream ${i} transport errored:`,E),y.Po(new p(g.UNAVAILABLE,"The operation could not be completed")))}),I(h,Ki.EventType.MESSAGE,E=>{var b;if(!f){const C=E.data[0];R(!!C);const S=C,F=S.error||((b=S[0])===null||b===void 0?void 0:b.error);if(F){_(Te,`RPC '${e}' stream ${i} received error:`,F);const G=F.status;let M=function(dt){const D=ae[dt];if(D!==void 0)return gf(D)}(G),oe=F.message;M===void 0&&(M=g.INTERNAL,oe="Unknown error status: "+G+" with message "+F.message),f=!0,y.Po(new p(M,oe)),h.close()}else _(Te,`RPC '${e}' stream ${i} received:`,C),y.Io(C)}}),I(a,fy.STAT_EVENT,E=>{E.stat===Gu.PROXY?_(Te,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===Gu.NOPROXY&&_(Te,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.ho()},0),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(){return typeof window<"u"?window:null}function cs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(n){return new RI(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=t,this.wo=r,this.So=i,this.bo=s,this.Do=0,this.vo=null,this.Co=Date.now(),this.reset()}reset(){this.Do=0}Fo(){this.Do=this.bo}Mo(e){this.cancel();const t=Math.floor(this.Do+this.xo()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,t-r);i>0&&_("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Do} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.vo=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.Do*=this.So,this.Do<this.wo&&(this.Do=this.wo),this.Do>this.bo&&(this.Do=this.bo)}Oo(){this.vo!==null&&(this.vo.skipDelay(),this.vo=null)}cancel(){this.vo!==null&&(this.vo.cancel(),this.vo=null)}xo(){return(Math.random()-.5)*this.Do}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,t,r,i,s,o,a,c){this.ii=e,this.No=r,this.Bo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Lo=0,this.ko=null,this.qo=null,this.stream=null,this.Qo=new Oc(e,t)}Ko(){return this.state===1||this.state===5||this.$o()}$o(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Uo()}async stop(){this.Ko()&&await this.close(0)}Wo(){this.state=0,this.Qo.reset()}Go(){this.$o()&&this.ko===null&&(this.ko=this.ii.enqueueAfterDelay(this.No,6e4,()=>this.zo()))}jo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.$o())return this.close(0)}Ho(){this.ko&&(this.ko.cancel(),this.ko=null)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}async close(e,t){this.Ho(),this.Jo(),this.Qo.cancel(),this.Lo++,e!==4?this.Qo.reset():t&&t.code===g.RESOURCE_EXHAUSTED?(ne(t.toString()),ne("Using maximum backoff delay to prevent overloading the backend."),this.Qo.Fo()):t&&t.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(t)}Yo(){}auth(){this.state=1;const e=this.Zo(this.Lo),t=this.Lo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Lo===t&&this.Xo(r,i)},r=>{e(()=>{const i=new p(g.UNKNOWN,"Fetching auth token failed: "+r.message);return this.e_(i)})})}Xo(e,t){const r=this.Zo(this.Lo);this.stream=this.t_(e,t),this.stream._o(()=>{r(()=>(this.state=2,this.qo=this.ii.enqueueAfterDelay(this.Bo,1e4,()=>(this.$o()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.e_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Uo(){this.state=5,this.Qo.Mo(async()=>{this.state=0,this.start()})}e_(e){return _("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Zo(e){return t=>{this.ii.enqueueAndForget(()=>this.Lo===e?t():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pE extends Yf{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}t_(e,t){return this.connection.yo("Listen",e,t)}onMessage(e){this.Qo.reset();const t=bI(this.serializer,e),r=function(s){if(!("targetChange"in s))return P.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?P.min():o.readTime?ie(o.readTime):P.min()}(e);return this.listener.n_(t,r)}r_(e){const t={};t.database=Yr(this.serializer),t.addTarget=function(s,o){let a;const c=o.target;if(a=Rs(c)?{documents:Af(s,c)}:{query:Rc(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=If(s,o.resumeToken);const u=Sa(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(P.min())>0){a.readTime=Kn(s,o.snapshotVersion.toTimestamp());const u=Sa(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=VI(this.serializer,e);r&&(t.labels=r),this.jo(t)}i_(e){const t={};t.database=Yr(this.serializer),t.removeTarget=e,this.jo(t)}}class _E extends Yf{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.s_=!1}get o_(){return this.s_}start(){this.s_=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.s_&&this.__([])}t_(e,t){return this.connection.yo("Write",e,t)}onMessage(e){if(R(!!e.streamToken),this.lastStreamToken=e.streamToken,this.s_){this.Qo.reset();const t=CI(e.writeResults,e.commitTime),r=ie(e.commitTime);return this.listener.a_(r,t)}return R(!e.writeResults||e.writeResults.length===0),this.s_=!0,this.listener.u_()}c_(){const e={};e.database=Yr(this.serializer),this.jo(e)}__(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Xr(this.serializer,r))};this.jo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.l_=!1}h_(){if(this.l_)throw new p(g.FAILED_PRECONDITION,"The client has already been terminated.")}Ro(e,t,r){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Ro(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new p(g.UNKNOWN,i.toString())})}po(e,t,r,i){return this.h_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.po(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new p(g.UNKNOWN,s.toString())})}terminate(){this.l_=!0}}async function IE(n,e,t){var r;const i=T(n),{request:s,P_:o}=function(h,d,f){const y=Rc(h,d),I={},E=[];let b=0;return f.forEach(C=>{const S="aggregate_"+b++;I[S]=C.alias,C.Ee==="count"?E.push({alias:S,count:{}}):C.Ee==="avg"?E.push({alias:S,avg:{field:pt(C.fieldPath)}}):C.Ee==="sum"&&E.push({alias:S,sum:{field:pt(C.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:E,structuredQuery:y.structuredQuery},parent:y.parent},P_:I}}(i.serializer,be(e),t),a=s.parent;i.connection.Ao||delete s.parent;const c=(await i.po("RunAggregationQuery",a,s,1)).filter(l=>!!l.result);R(c.length===1);const u=(r=c[0].result)===null||r===void 0?void 0:r.aggregateFields;return Object.keys(u).reduce((l,h)=>(l[o[h]]=u[h],l),{})}class EE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.I_=0,this.T_=null,this.E_=!0}d_(){this.I_===0&&(this.A_("Unknown"),this.T_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.T_=null,this.R_("Backend didn't respond within 10 seconds."),this.A_("Offline"),Promise.resolve())))}V_(e){this.state==="Online"?this.A_("Unknown"):(this.I_++,this.I_>=1&&(this.m_(),this.R_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.A_("Offline")))}set(e){this.m_(),this.I_=0,e==="Online"&&(this.E_=!1),this.A_(e)}A_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}R_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.E_?(ne(t),this.E_=!1):_("OnlineStateTracker",t)}m_(){this.T_!==null&&(this.T_.cancel(),this.T_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.f_=[],this.g_=new Map,this.p_=new Set,this.y_=[],this.w_=s,this.w_.Ys(o=>{r.enqueueAndForget(async()=>{Lt(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=T(c);u.p_.add(4),await cr(u),u.S_.set("Unknown"),u.p_.delete(4),await Si(u)}(this))})}),this.S_=new EE(r,i)}}async function Si(n){if(Lt(n))for(const e of n.y_)await e(!0)}async function cr(n){for(const e of n.y_)await e(!1)}function go(n,e){const t=T(n);t.g_.has(e.targetId)||(t.g_.set(e.targetId,e),Fc(t)?Lc(t):lr(t).$o()&&Mc(t,e))}function Zr(n,e){const t=T(n),r=lr(t);t.g_.delete(e),r.$o()&&Xf(t,e),t.g_.size===0&&(r.$o()?r.Go():Lt(t)&&t.S_.set("Unknown"))}function Mc(n,e){if(n.b_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(P.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}lr(n).r_(e)}function Xf(n,e){n.b_.Be(e),lr(n).i_(e)}function Lc(n){n.b_=new vI({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.g_.get(e)||null,rt:()=>n.datastore.serializer.databaseId}),lr(n).start(),n.S_.d_()}function Fc(n){return Lt(n)&&!lr(n).Ko()&&n.g_.size>0}function Lt(n){return T(n).p_.size===0}function Zf(n){n.b_=void 0}async function TE(n){n.g_.forEach((e,t)=>{Mc(n,e)})}async function wE(n,e){Zf(n),Fc(n)?(n.S_.V_(e),Lc(n)):n.S_.set("Unknown")}async function AE(n,e,t){if(n.S_.set("Online"),e instanceof yf&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.g_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.g_.delete(a),i.b_.removeTarget(a))}(n,e)}catch(r){_("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Os(n,r)}else if(e instanceof as?n.b_.We(e):e instanceof _f?n.b_.Ze(e):n.b_.je(e),!t.isEqual(P.min()))try{const r=await jf(n.localStore);t.compareTo(r)>=0&&await function(s,o){const a=s.b_.st(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=s.g_.get(u);l&&s.g_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=s.g_.get(c);if(!l)return;s.g_.set(c,l.withResumeToken(he.EMPTY_BYTE_STRING,l.snapshotVersion)),Xf(s,c);const h=new et(l.target,c,u,l.sequenceNumber);Mc(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){_("RemoteStore","Failed to raise snapshot:",r),await Os(n,r)}}async function Os(n,e,t){if(!Ot(e))throw e;n.p_.add(1),await cr(n),n.S_.set("Offline"),t||(t=()=>jf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await t(),n.p_.delete(1),await Si(n)})}function em(n,e){return e().catch(t=>Os(n,t,e))}async function ur(n){const e=T(n),t=Dt(e);let r=e.f_.length>0?e.f_[e.f_.length-1].batchId:-1;for(;RE(e);)try{const i=await uE(e.localStore,r);if(i===null){e.f_.length===0&&t.Go();break}r=i.batchId,SE(e,i)}catch(i){await Os(e,i)}tm(e)&&nm(e)}function RE(n){return Lt(n)&&n.f_.length<10}function SE(n,e){n.f_.push(e);const t=Dt(n);t.$o()&&t.o_&&t.__(e.mutations)}function tm(n){return Lt(n)&&!Dt(n).Ko()&&n.f_.length>0}function nm(n){Dt(n).start()}async function PE(n){Dt(n).c_()}async function bE(n){const e=Dt(n);for(const t of n.f_)e.__(t.mutations)}async function CE(n,e,t){const r=n.f_.shift(),i=Ec.from(r,e,t);await em(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ur(n)}async function VE(n,e){e&&Dt(n).o_&&await async function(r,i){if(function(o){return mf(o)&&o!==g.ABORTED}(i.code)){const s=r.f_.shift();Dt(r).Wo(),await em(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ur(r)}}(n,e),tm(n)&&nm(n)}async function Ml(n,e){const t=T(n);t.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const r=Lt(t);t.p_.add(3),await cr(t),r&&t.S_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.p_.delete(3),await Si(t)}async function Na(n,e){const t=T(n);e?(t.p_.delete(2),await Si(t)):e||(t.p_.add(2),await cr(t),t.S_.set("Unknown"))}function lr(n){return n.D_||(n.D_=function(t,r,i){const s=T(t);return s.h_(),new pE(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{_o:TE.bind(null,n),uo:wE.bind(null,n),n_:AE.bind(null,n)}),n.y_.push(async e=>{e?(n.D_.Wo(),Fc(n)?Lc(n):n.S_.set("Unknown")):(await n.D_.stop(),Zf(n))})),n.D_}function Dt(n){return n.v_||(n.v_=function(t,r,i){const s=T(t);return s.h_(),new _E(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{_o:PE.bind(null,n),uo:VE.bind(null,n),u_:bE.bind(null,n),a_:CE.bind(null,n)}),n.y_.push(async e=>{e?(n.v_.Wo(),await ur(n)):(await n.v_.stop(),n.f_.length>0&&(_("RemoteStore",`Stopping write stream with ${n.f_.length} pending writes`),n.f_=[]))})),n.v_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ue,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new Uc(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new p(g.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hr(n,e){if(ne("AsyncQueue",`${e}: ${n}`),Ot(n))return new p(g.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||v.comparator(t.key,r.key):(t,r)=>v.comparator(t.key,r.key),this.keyedMap=Ar(),this.sortedSet=new W(this.comparator)}static emptySet(e){return new xn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof xn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new xn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(){this.C_=new W(v.comparator)}track(e){const t=e.doc.key,r=this.C_.get(t);r?e.type!==0&&r.type===3?this.C_=this.C_.insert(t,e):e.type===3&&r.type!==1?this.C_=this.C_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.C_=this.C_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.C_=this.C_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.C_=this.C_.remove(t):e.type===1&&r.type===2?this.C_=this.C_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.C_=this.C_.insert(t,{type:2,doc:e.doc}):A():this.C_=this.C_.insert(t,e)}F_(){const e=[];return this.C_.inorderTraversal((t,r)=>{e.push(r)}),e}}class $n{constructor(e,t,r,i,s,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new $n(e,t,xn.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ei(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(){this.M_=void 0,this.listeners=[]}}class kE{constructor(){this.queries=new ut(e=>Xd(e),Ei),this.onlineState="Unknown",this.x_=new Set}}async function Bc(n,e){const t=T(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new DE),i)try{s.M_=await t.onListen(r)}catch(o){const a=hr(o,`Initialization of query '${Ra(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.listeners.push(e),e.O_(t.onlineState),s.M_&&e.N_(s.M_)&&zc(t)}async function qc(n,e){const t=T(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function NE(n,e){const t=T(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.N_(i)&&(r=!0);o.M_=i}}r&&zc(t)}function xE(n,e,t){const r=T(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function zc(n){n.x_.forEach(e=>{e.next()})}class Gc{constructor(e,t,r){this.query=e,this.B_=t,this.L_=!1,this.k_=null,this.onlineState="Unknown",this.options=r||{}}N_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new $n(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.L_?this.q_(e)&&(this.B_.next(e),t=!0):this.Q_(e,this.onlineState)&&(this.K_(e),t=!0),this.k_=e,t}onError(e){this.B_.error(e)}O_(e){this.onlineState=e;let t=!1;return this.k_&&!this.L_&&this.Q_(this.k_,e)&&(this.K_(this.k_),t=!0),t}Q_(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.U_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}q_(e){if(e.docChanges.length>0)return!0;const t=this.k_&&this.k_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}K_(e){e=$n.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.L_=!0,this.B_.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,t){this.W_=e,this.byteLength=t}G_(){return"metadata"in this.W_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e){this.serializer=e}os(e){return We(this.serializer,e)}_s(e){return e.metadata.exists?wf(this.serializer,e.document,!1):$.newNoDocument(this.os(e.metadata.name),this.us(e.metadata.readTime))}us(e){return ie(e)}}class ME{constructor(e,t,r){this.z_=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=rm(e)}j_(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.W_.namedQuery)this.queries.push(e.W_.namedQuery);else if(e.W_.documentMetadata){this.documents.push({metadata:e.W_.documentMetadata}),e.W_.documentMetadata.exists||++t;const r=q.fromString(e.W_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.W_.document&&(this.documents[this.documents.length-1].document=e.W_.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}H_(e){const t=new Map,r=new Fl(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.os(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||x()).add(s);t.set(o,a)}}return t}async complete(){const e=await lE(this.localStore,new Fl(this.serializer),this.documents,this.z_.id),t=this.H_(this.documents);for(const r of this.queries)await hE(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,J_:this.collectionGroups,Y_:e}}}function rm(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e){this.key=e}}class sm{constructor(e){this.key=e}}class om{constructor(e,t){this.query=e,this.Z_=t,this.X_=null,this.hasCachedResults=!1,this.current=!1,this.ea=x(),this.mutatedKeys=x(),this.ta=ef(e),this.na=new xn(this.ta)}get ra(){return this.Z_}ia(e,t){const r=t?t.sa:new Ll,i=t?t.na:this.na;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),f=vi(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),I=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let E=!1;d&&f?d.data.isEqual(f.data)?y!==I&&(r.track({type:3,doc:f}),E=!0):this.oa(d,f)||(r.track({type:2,doc:f}),E=!0,(c&&this.ta(f,c)>0||u&&this.ta(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),E=!0):d&&!f&&(r.track({type:1,doc:d}),E=!0,(c||u)&&(a=!0)),E&&(f?(o=o.add(f),s=I?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{na:o,sa:r,zi:a,mutatedKeys:s}}oa(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.na;this.na=e.na,this.mutatedKeys=e.mutatedKeys;const s=e.sa.F_();s.sort((u,l)=>function(d,f){const y=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return A()}};return y(d)-y(f)}(u.type,l.type)||this.ta(u.doc,l.doc)),this._a(r);const o=t?this.aa():[],a=this.ea.size===0&&this.current?1:0,c=a!==this.X_;return this.X_=a,s.length!==0||c?{snapshot:new $n(this.query,e.na,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ua:o}:{ua:o}}O_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({na:this.na,sa:new Ll,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ua:[]}}ca(e){return!this.Z_.has(e)&&!!this.na.has(e)&&!this.na.get(e).hasLocalMutations}_a(e){e&&(e.addedDocuments.forEach(t=>this.Z_=this.Z_.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Z_=this.Z_.delete(t)),this.current=e.current)}aa(){if(!this.current)return[];const e=this.ea;this.ea=x(),this.na.forEach(r=>{this.ca(r.key)&&(this.ea=this.ea.add(r.key))});const t=[];return e.forEach(r=>{this.ea.has(r)||t.push(new sm(r))}),this.ea.forEach(r=>{e.has(r)||t.push(new im(r))}),t}la(e){this.Z_=e.ss,this.ea=x();const t=this.ia(e.documents);return this.applyChanges(t,!0)}ha(){return $n.fromInitialDocuments(this.query,this.na,this.mutatedKeys,this.X_===0,this.hasCachedResults)}}class LE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class FE{constructor(e){this.key=e,this.Pa=!1}}class UE{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ia={},this.Ta=new ut(a=>Xd(a),Ei),this.Ea=new Map,this.da=new Set,this.Aa=new W(v.comparator),this.Ra=new Map,this.Va=new Cc,this.ma={},this.fa=new Map,this.ga=dn.On(),this.onlineState="Unknown",this.pa=void 0}get isPrimaryClient(){return this.pa===!0}}async function BE(n,e){const t=$c(n);let r,i;const s=t.Ta.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.ha();else{const o=await Wn(t.localStore,be(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await jc(t,e,r,a==="current",o.resumeToken),t.isPrimaryClient&&go(t.remoteStore,o)}return i}async function jc(n,e,t,r,i){n.ya=(h,d,f)=>async function(I,E,b,C){let S=E.view.ia(b);S.zi&&(S=await ks(I.localStore,E.query,!1).then(({documents:M})=>E.view.ia(M,S)));const F=C&&C.targetChanges.get(E.targetId),G=E.view.applyChanges(S,I.isPrimaryClient,F);return xa(I,E.targetId,G.ua),G.snapshot}(n,h,d,f);const s=await ks(n.localStore,e,!0),o=new om(e,s.ss),a=o.ia(s.documents),c=Ai.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);xa(n,t,u.ua);const l=new LE(e,t,o);return n.Ta.set(e,l),n.Ea.has(t)?n.Ea.get(t).push(e):n.Ea.set(t,[e]),u.snapshot}async function qE(n,e){const t=T(n),r=t.Ta.get(e),i=t.Ea.get(r.targetId);if(i.length>1)return t.Ea.set(r.targetId,i.filter(s=>!Ei(s,e))),void t.Ta.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await Hn(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),Zr(t.remoteStore,r.targetId),Qn(t,r.targetId)}).catch(xt)):(Qn(t,r.targetId),await Hn(t.localStore,r.targetId,!0))}async function zE(n,e,t){const r=Qc(n);try{const i=await function(o,a){const c=T(o),u=Z.now(),l=a.reduce((f,y)=>f.add(y.key),x());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let y=De(),I=x();return c.Xi.getEntries(f,l).next(E=>{y=E,y.forEach((b,C)=>{C.isValidDocument()||(I=I.add(b))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,y)).next(E=>{h=E;const b=[];for(const C of a){const S=_I(C,h.get(C.key).overlayedDocument);S!=null&&b.push(new lt(C.key,S,Gd(S.value.mapValue),Y.exists(!0)))}return c.mutationQueue.addMutationBatch(f,u,b,a)}).next(E=>{d=E;const b=E.applyToLocalDocumentSet(h,I);return c.documentOverlayCache.saveOverlays(f,E.batchId,b)})}).then(()=>({batchId:d.batchId,changes:nf(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.ma[o.currentUser.toKey()];u||(u=new W(V)),u=u.insert(a,c),o.ma[o.currentUser.toKey()]=u}(r,i.batchId,t),await ht(r,i.changes),await ur(r.remoteStore)}catch(i){const s=hr(i,"Failed to persist write");t.reject(s)}}async function am(n,e){const t=T(n);try{const r=await cE(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Ra.get(s);o&&(R(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Pa=!0:i.modifiedDocuments.size>0?R(o.Pa):i.removedDocuments.size>0&&(R(o.Pa),o.Pa=!1))}),await ht(t,r,e)}catch(r){await xt(r)}}function Ul(n,e,t){const r=T(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Ta.forEach((s,o)=>{const a=o.view.O_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=T(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const d of h.listeners)d.O_(a)&&(u=!0)}),u&&zc(c)}(r.eventManager,e),i.length&&r.Ia.n_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function GE(n,e,t){const r=T(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Ra.get(e),s=i&&i.key;if(s){let o=new W(v.comparator);o=o.insert(s,$.newNoDocument(s,P.min()));const a=x().add(s),c=new wi(P.min(),new Map,new W(V),o,a);await am(r,c),r.Aa=r.Aa.remove(s),r.Ra.delete(e),Hc(r)}else await Hn(r.localStore,e,!1).then(()=>Qn(r,e,t)).catch(xt)}async function jE(n,e){const t=T(n),r=e.batch.batchId;try{const i=await aE(t.localStore,e);Wc(t,r,null),Kc(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ht(t,i)}catch(i){await xt(i)}}async function KE(n,e,t){const r=T(n);try{const i=await function(o,a){const c=T(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(R(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,e);Wc(r,e,t),Kc(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ht(r,i)}catch(i){await xt(i)}}async function WE(n,e){const t=T(n);Lt(t.remoteStore)||_("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=T(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>a.mutationQueue.getHighestUnacknowledgedBatchId(c))}(t.localStore);if(r===-1)return void e.resolve();const i=t.fa.get(r)||[];i.push(e),t.fa.set(r,i)}catch(r){const i=hr(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Kc(n,e){(n.fa.get(e)||[]).forEach(t=>{t.resolve()}),n.fa.delete(e)}function Wc(n,e,t){const r=T(n);let i=r.ma[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.ma[r.currentUser.toKey()]=i}}function Qn(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ea.get(e))n.Ta.delete(r),t&&n.Ia.wa(r,t);n.Ea.delete(e),n.isPrimaryClient&&n.Va.Ar(e).forEach(r=>{n.Va.containsKey(r)||cm(n,r)})}function cm(n,e){n.da.delete(e.path.canonicalString());const t=n.Aa.get(e);t!==null&&(Zr(n.remoteStore,t),n.Aa=n.Aa.remove(e),n.Ra.delete(t),Hc(n))}function xa(n,e,t){for(const r of t)r instanceof im?(n.Va.addReference(r.key,e),HE(n,r)):r instanceof sm?(_("SyncEngine","Document no longer in limbo: "+r.key),n.Va.removeReference(r.key,e),n.Va.containsKey(r.key)||cm(n,r.key)):A()}function HE(n,e){const t=e.key,r=t.path.canonicalString();n.Aa.get(t)||n.da.has(r)||(_("SyncEngine","New document in limbo: "+t),n.da.add(r),Hc(n))}function Hc(n){for(;n.da.size>0&&n.Aa.size<n.maxConcurrentLimboResolutions;){const e=n.da.values().next().value;n.da.delete(e);const t=new v(q.fromString(e)),r=n.ga.next();n.Ra.set(r,new FE(t)),n.Aa=n.Aa.insert(t,r),go(n.remoteStore,new et(be(sr(t.path)),r,"TargetPurposeLimboResolution",Ce.ae))}}async function ht(n,e,t){const r=T(n),i=[],s=[],o=[];r.Ta.isEmpty()||(r.Ta.forEach((a,c)=>{o.push(r.ya(c,e,t).then(u=>{if((u||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=Nc.qi(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.Ia.n_(i),await async function(c,u){const l=T(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>m.forEach(u,d=>m.forEach(d.Li,f=>l.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>m.forEach(d.ki,f=>l.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Ot(h))throw h;_("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=l.Ji.get(d),y=f.snapshotVersion,I=f.withLastLimboFreeSnapshotVersion(y);l.Ji=l.Ji.insert(d,I)}}}(r.localStore,s))}async function $E(n,e){const t=T(n);if(!t.currentUser.isEqual(e)){_("SyncEngine","User change. New user:",e.toKey());const r=await Gf(t.localStore,e);t.currentUser=e,function(s,o){s.fa.forEach(a=>{a.forEach(c=>{c.reject(new p(g.CANCELLED,o))})}),s.fa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ht(t,r.ts)}}function QE(n,e){const t=T(n),r=t.Ra.get(e);if(r&&r.Pa)return x().add(r.key);{let i=x();const s=t.Ea.get(e);if(!s)return i;for(const o of s){const a=t.Ta.get(o);i=i.unionWith(a.view.ra)}return i}}async function JE(n,e){const t=T(n),r=await ks(t.localStore,e.query,!0),i=e.view.la(r);return t.isPrimaryClient&&xa(t,e.targetId,i.ua),i}async function YE(n,e){const t=T(n);return Hf(t.localStore,e).then(r=>ht(t,r))}async function XE(n,e,t,r){const i=T(n),s=await function(a,c){const u=T(a),l=T(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",h=>l.Dn(h,c).next(d=>d?u.localDocuments.getDocuments(h,d):m.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await ur(i.remoteStore):t==="acknowledged"||t==="rejected"?(Wc(i,e,r||null),Kc(i,e),function(a,c){T(T(a).mutationQueue).Cn(c)}(i.localStore,e)):A(),await ht(i,s)):_("SyncEngine","Cannot apply mutation batch with id: "+e)}async function ZE(n,e){const t=T(n);if($c(t),Qc(t),e===!0&&t.pa!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await Bl(t,r.toArray());t.pa=!0,await Na(t.remoteStore,!0);for(const s of i)go(t.remoteStore,s)}else if(e===!1&&t.pa!==!1){const r=[];let i=Promise.resolve();t.Ea.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Qn(t,o),Hn(t.localStore,o,!0))),Zr(t.remoteStore,o)}),await i,await Bl(t,r),function(o){const a=T(o);a.Ra.forEach((c,u)=>{Zr(a.remoteStore,u)}),a.Va.Rr(),a.Ra=new Map,a.Aa=new W(v.comparator)}(t),t.pa=!1,await Na(t.remoteStore,!1)}}async function Bl(n,e,t){const r=T(n),i=[],s=[];for(const o of e){let a;const c=r.Ea.get(o);if(c&&c.length!==0){a=await Wn(r.localStore,be(c[0]));for(const u of c){const l=r.Ta.get(u),h=await JE(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await Wf(r.localStore,o);a=await Wn(r.localStore,u),await jc(r,um(u),o,!1,a.resumeToken)}i.push(a)}return r.Ia.n_(s),i}function um(n){return Yd(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function ev(n){return function(t){return T(T(t).persistence).Ni()}(T(n).localStore)}async function tv(n,e,t,r){const i=T(n);if(i.pa)return void _("SyncEngine","Ignoring unexpected query state notification.");const s=i.Ea.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await Hf(i.localStore,Zd(s[0])),a=wi.createSynthesizedRemoteEventForCurrentChange(e,t==="current",he.EMPTY_BYTE_STRING);await ht(i,o,a);break}case"rejected":await Hn(i.localStore,e,!0),Qn(i,e,r);break;default:A()}}async function nv(n,e,t){const r=$c(n);if(r.pa){for(const i of e){if(r.Ea.has(i)){_("SyncEngine","Adding an already active target "+i);continue}const s=await Wf(r.localStore,i),o=await Wn(r.localStore,s);await jc(r,um(s),o.targetId,!1,o.resumeToken),go(r.remoteStore,o)}for(const i of t)r.Ea.has(i)&&await Hn(r.localStore,i,!1).then(()=>{Zr(r.remoteStore,i),Qn(r,i)}).catch(xt)}}function $c(n){const e=T(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=am.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=QE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GE.bind(null,e),e.Ia.n_=NE.bind(null,e.eventManager),e.Ia.wa=xE.bind(null,e.eventManager),e}function Qc(n){const e=T(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KE.bind(null,e),e}function rv(n,e,t){const r=T(n);(async function(s,o,a){try{const c=await o.getMetadata();if(await function(f,y){const I=T(f),E=ie(y.createTime);return I.persistence.runTransaction("hasNewerBundle","readonly",b=>I.Qr.getBundleMetadata(b,y.id)).then(b=>!!b&&b.createTime.compareTo(E)>=0)}(s.localStore,c))return await o.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(c)),Promise.resolve(new Set);a._updateProgress(rm(c));const u=new ME(c,s.localStore,o.serializer);let l=await o.Sa();for(;l;){const d=await u.j_(l);d&&a._updateProgress(d),l=await o.Sa()}const h=await u.complete();return await ht(s,h.Y_,void 0),await function(f,y){const I=T(f);return I.persistence.runTransaction("Save bundle","readwrite",E=>I.Qr.saveBundleMetadata(E,y))}(s.localStore,c),a._completeWith(h.progress),Promise.resolve(h.J_)}catch(c){return Be("SyncEngine",`Loading bundle failed with ${c}`),a._failWith(c),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Jn{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ri(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return zf(this.persistence,new qf,e.initialUser,this.serializer)}createPersistence(e){return new Vc(mo.zr,this.serializer)}createSharedClientState(e){return new Qf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class iv extends Jn{constructor(e){super(),this.cacheSizeBytes=e}createGarbageCollectionScheduler(e,t){R(this.persistence.referenceDelegate instanceof Ds);const r=this.persistence.referenceDelegate.garbageCollector;return new Mf(r,e.asyncQueue,t)}createPersistence(e){const t=this.cacheSizeBytes!==void 0?we.withCacheSize(this.cacheSizeBytes):we.DEFAULT;return new Vc(r=>Ds.zr(r,t),this.serializer)}}class Jc extends Jn{constructor(e,t,r){super(),this.ba=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ba.initialize(this,e),await Qc(this.ba.syncEngine),await ur(this.ba.remoteStore),await this.persistence.Vi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return zf(this.persistence,new qf,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new Mf(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const r=new Vy(t,this.persistence);return new Cy(e.asyncQueue,r)}createPersistence(e){const t=kc(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?we.withCacheSize(this.cacheSizeBytes):we.DEFAULT;return new Dc(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,Jf(),cs(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new Qf}}class lm extends Jc{constructor(e,t){super(e,t,!1),this.ba=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.ba.syncEngine;this.sharedClientState instanceof $o&&(this.sharedClientState.syncEngine={Gs:XE.bind(null,t),zs:tv.bind(null,t),js:nv.bind(null,t),Ni:ev.bind(null,t),Ws:YE.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Vi(async r=>{await ZE(this.ba.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=Jf();if(!$o.v(t))throw new p(g.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=kc(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new $o(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class dr{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ul(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$E.bind(null,this.syncEngine),await Na(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new kE}()}createDatastore(e){const t=Ri(e.databaseInfo.databaseId),r=function(s){return new gE(s)}(e.databaseInfo);return function(s,o,a,c){return new yE(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,a){return new vE(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>Ul(this.syncEngine,t,0),function(){return Ol.v()?new Ol:new dE}())}createSyncEngine(e,t){return function(i,s,o,a,c,u,l){const h=new UE(i,s,o,a,c,u);return l&&(h.pa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(t){const r=T(t);_("RemoteStore","RemoteStore shutting down."),r.p_.add(5),await cr(r),r.w_.shutdown(),r.S_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Da(this.observer.next,e)}error(e){this.observer.error?this.Da(this.observer.error,e):ne("Uncaught Error in snapshot listener:",e.toString())}va(){this.muted=!0}Da(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e,t){this.Ca=e,this.serializer=t,this.metadata=new ue,this.buffer=new Uint8Array,this.Fa=function(){return new TextDecoder("utf-8")}(),this.Ma().then(r=>{r&&r.G_()?this.metadata.resolve(r.W_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.W_)}`))},r=>this.metadata.reject(r))}close(){return this.Ca.cancel()}async getMetadata(){return this.metadata.promise}async Sa(){return await this.getMetadata(),this.Ma()}async Ma(){const e=await this.xa();if(e===null)return null;const t=this.Fa.decode(e),r=Number(t);isNaN(r)&&this.Oa(`length string (${t}) is not valid number`);const i=await this.Na(r);return new OE(JSON.parse(i),e.length+r)}Ba(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async xa(){for(;this.Ba()<0&&!await this.La(););if(this.buffer.length===0)return null;const e=this.Ba();e<0&&this.Oa("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Na(e){for(;this.buffer.length<e;)await this.La()&&this.Oa("Reached the end of bundle when more is expected.");const t=this.Fa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Oa(e){throw this.Ca.cancel(),new Error(`Invalid bundle format: ${e}`)}async La(){const e=await this.Ca.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new p(g.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(i,s){const o=T(i),a=Yr(o.serializer)+"/documents",c={documents:s.map(d=>Jr(o.serializer,d))},u=await o.po("BatchGetDocuments",a,c,s.length),l=new Map;u.forEach(d=>{const f=PI(o.serializer,d);l.set(f.key.toString(),f)});const h=[];return s.forEach(d=>{const f=l.get(d.toString());R(!!f),h.push(f)}),h}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new ar(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=v.fromPath(r);this.mutations.push(new yc(i,this.precondition(i)))}),await async function(r,i){const s=T(r),o=Yr(s.serializer)+"/documents",a={writes:i.map(c=>Xr(s.serializer,c))};await s.Ro("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw A();t=P.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new p(g.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(P.min())?Y.exists(!1):Y.updateTime(t):Y.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(P.min()))throw new p(g.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Y.updateTime(t)}return Y.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.ka=r.maxAttempts,this.Qo=new Oc(this.asyncQueue,"transaction_retry")}run(){this.ka-=1,this.qa()}qa(){this.Qo.Mo(async()=>{const e=new ov(this.datastore),t=this.Qa(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Ka(i)}))}).catch(r=>{this.Ka(r)})})}Qa(e){try{const t=this.updateFunction(e);return!yi(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Ka(e){this.ka>0&&this.$a(e)?(this.ka-=1,this.asyncQueue.enqueueAndForget(()=>(this.qa(),Promise.resolve()))):this.deferred.reject(e)}$a(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!mf(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=fe.UNAUTHENTICATED,this.clientId=Cd.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{_("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(_("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new p(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ue;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=hr(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function us(n,e){n.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Gf(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Oa(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Yc(n);_("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>Ml(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Ml(e.remoteStore,s)),n._onlineComponents=e}function hm(n){return n.name==="FirebaseError"?n.code===g.FAILED_PRECONDITION||n.code===g.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Yc(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await us(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!hm(t))throw t;Be("Error using user provided cache. Falling back to memory cache: "+t),await us(n,new Jn)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await us(n,new Jn);return n._offlineComponents}async function _o(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await Oa(n,n._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await Oa(n,new dr))),n._onlineComponents}function dm(n){return Yc(n).then(e=>e.persistence)}function yo(n){return Yc(n).then(e=>e.localStore)}function fm(n){return _o(n).then(e=>e.remoteStore)}function Xc(n){return _o(n).then(e=>e.syncEngine)}function mm(n){return _o(n).then(e=>e.datastore)}async function Yn(n){const e=await _o(n),t=e.eventManager;return t.onListen=BE.bind(null,e.syncEngine),t.onUnlisten=qE.bind(null,e.syncEngine),t}function uv(n){return n.asyncQueue.enqueue(async()=>{const e=await dm(n),t=await fm(n);return e.setNetworkEnabled(!0),function(i){const s=T(i);return s.p_.delete(0),Si(s)}(t)})}function lv(n){return n.asyncQueue.enqueue(async()=>{const e=await dm(n),t=await fm(n);return e.setNetworkEnabled(!1),async function(i){const s=T(i);s.p_.add(0),await cr(s),s.S_.set("Offline")}(t)})}function hv(n,e){const t=new ue;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,l){const h=T(u);return h.persistence.runTransaction("read document","readonly",d=>h.localDocuments.getDocument(d,l))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new p(g.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const c=hr(a,`Failed to get document '${s} from cache`);o.reject(c)}}(await yo(n),e,t)),t.promise}function gm(n,e,t={}){const r=new ue;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new po({next:d=>{o.enqueueAndForget(()=>qc(s,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new p(g.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?u.reject(new p(g.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Gc(sr(a.path),l,{includeMetadataChanges:!0,U_:!0});return Bc(s,h)}(await Yn(n),n.asyncQueue,e,t,r)),r.promise}function dv(n,e){const t=new ue;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await ks(i,s,!0),c=new om(s,a.ss),u=c.ia(a.documents),l=c.applyChanges(u,!1);o.resolve(l.snapshot)}catch(a){const c=hr(a,`Failed to execute query '${s} against cache`);o.reject(c)}}(await yo(n),e,t)),t.promise}function pm(n,e,t={}){const r=new ue;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new po({next:d=>{o.enqueueAndForget(()=>qc(s,h)),d.fromCache&&c.source==="server"?u.reject(new p(g.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Gc(a,l,{includeMetadataChanges:!0,U_:!0});return Bc(s,h)}(await Yn(n),n.asyncQueue,e,t,r)),r.promise}function fv(n,e){const t=new po(e);return n.asyncQueue.enqueueAndForget(async()=>function(i,s){T(i).x_.add(s),s.next()}(await Yn(n),t)),()=>{t.va(),n.asyncQueue.enqueueAndForget(async()=>function(i,s){T(i).x_.delete(s)}(await Yn(n),t))}}function mv(n,e,t,r){const i=function(o,a){let c;return c=typeof o=="string"?pf().encode(o):o,function(l,h){return new sv(l,h)}(function(l,h){if(l instanceof Uint8Array)return ql(l,h);if(l instanceof ArrayBuffer)return ql(new Uint8Array(l),h);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),a)}(t,Ri(e));n.asyncQueue.enqueueAndForget(async()=>{rv(await Xc(n),i,r)})}function gv(n,e){return n.asyncQueue.enqueue(async()=>function(r,i){const s=T(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Qr.getNamedQuery(o,i))}(await yo(n),e))}function pv(n,e){return n.asyncQueue.enqueue(async()=>async function(r,i){const s=T(r),o=s.indexManager,a=[];return s.persistence.runTransaction("Configure indexes","readwrite",c=>o.getFieldIndexes(c).next(u=>function(h,d,f,y,I){h=[...h],d=[...d],h.sort(f),d.sort(f);const E=h.length,b=d.length;let C=0,S=0;for(;C<b&&S<E;){const F=f(h[S],d[C]);F<0?I(h[S++]):F>0?y(d[C++]):(C++,S++)}for(;C<b;)y(d[C++]);for(;S<E;)I(h[S++])}(u,i,Ry,l=>{a.push(o.addFieldIndex(c,l))},l=>{a.push(o.deleteFieldIndex(c,l))})).next(()=>m.waitFor(a)))}(await yo(n),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(n,e,t){if(!t)throw new p(g.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function _v(n,e,t,r){if(e===!0&&r===!0)throw new p(g.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Gl(n){if(!v.isDocumentKey(n))throw new p(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function jl(n){if(v.isDocumentKey(n))throw new p(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Io(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":A()}function U(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new p(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Io(n);throw new p(g.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function ym(n,e){if(e<=0)throw new p(g.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new p(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new p(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_v("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_m((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new p(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new p(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new p(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Pi{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new p(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new p(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kl(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _y;switch(r.type){case"firstParty":return new vy(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new p(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=zl.get(t);r&&(_("ComponentProvider","Removing Datastore"),zl.delete(t),r.terminate())}(this),Promise.resolve()}}function yv(n,e,t,r={}){var i;const s=(n=U(n,Pi))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Be("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=fe.MOCK_USER;else{a=qg(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new p(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new fe(u)}n._authCredentials=new yy(new Pd(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ve(this.firestore,e,this._query)}}class se{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new He(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new se(this.firestore,e,this._key)}}class He extends ve{constructor(e,t,r){super(e,t,sr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new se(this.firestore,null,new v(e))}withConverter(e){return new He(this.firestore,e,this._path)}}function Im(n,e,...t){if(n=X(n),Zc("collection","path",e),n instanceof Pi){const r=q.fromString(e,...t);return jl(r),new He(n,null,r)}{if(!(n instanceof se||n instanceof He))throw new p(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(q.fromString(e,...t));return jl(r),new He(n.firestore,null,r)}}function e0(n,e){if(n=U(n,Pi),Zc("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new p(g.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new ve(n,null,function(r){return new ct(q.emptyPath(),r)}(e))}function st(n,e,...t){if(n=X(n),arguments.length===1&&(e=Cd.V()),Zc("doc","path",e),n instanceof Pi){const r=q.fromString(e,...t);return Gl(r),new se(n,null,new v(r))}{if(!(n instanceof se||n instanceof He))throw new p(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(q.fromString(e,...t));return Gl(r),new se(n.firestore,n instanceof He?n.converter:null,new v(r))}}function t0(n,e){return n=X(n),e=X(e),(n instanceof se||n instanceof He)&&(e instanceof se||e instanceof He)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function Em(n,e){return n=X(n),e=X(e),n instanceof ve&&e instanceof ve&&n.firestore===e.firestore&&Ei(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(){this.Ua=Promise.resolve(),this.Wa=[],this.Ga=!1,this.za=[],this.ja=null,this.Ha=!1,this.Ja=!1,this.Ya=[],this.Qo=new Oc(this,"async_queue_retry"),this.Za=()=>{const t=cs();t&&_("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Qo.Oo()};const e=cs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Za)}get isShuttingDown(){return this.Ga}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xa(),this.eu(e)}enterRestrictedMode(e){if(!this.Ga){this.Ga=!0,this.Ja=e||!1;const t=cs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Za)}}enqueue(e){if(this.Xa(),this.Ga)return new Promise(()=>{});const t=new ue;return this.eu(()=>this.Ga&&this.Ja?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Wa.push(e),this.tu()))}async tu(){if(this.Wa.length!==0){try{await this.Wa[0](),this.Wa.shift(),this.Qo.reset()}catch(e){if(!Ot(e))throw e;_("AsyncQueue","Operation failed with retryable error: "+e)}this.Wa.length>0&&this.Qo.Mo(()=>this.tu())}}eu(e){const t=this.Ua.then(()=>(this.Ha=!0,e().catch(r=>{this.ja=r,this.Ha=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ne("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ha=!1,r))));return this.Ua=t,t}enqueueAfterDelay(e,t,r){this.Xa(),this.Ya.indexOf(e)>-1&&(t=0);const i=Uc.createAndSchedule(this,e,t,r,s=>this.nu(s));return this.za.push(i),i}Xa(){this.ja&&A()}verifyOperationInProgress(){}async ru(){let e;do e=this.Ua,await e;while(e!==this.Ua)}iu(e){for(const t of this.za)if(t.timerId===e)return!0;return!1}su(e){return this.ru().then(()=>{this.za.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.za)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ru()})}ou(e){this.Ya.push(e)}nu(e){const t=this.za.indexOf(e);this.za.splice(t,1)}}function Ma(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class Ev{constructor(){this._progressObserver={},this._taskCompletionResolver=new ue,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0=-1;class J extends Pi{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new Iv}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||vm(this),this._firestoreClient.terminate()}}function r0(n,e,t){t||(t="(default)");const r=ci(n,"firestore");if(r.isInitialized(t)){const i=r.getImmediate({identifier:t}),s=r.getOptions(t);if(Ln(s,e))return i;throw new p(g.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new p(g.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new p(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:t})}function vv(n,e){const t=typeof n=="object"?n:za(),r=typeof n=="string"?n:e||"(default)",i=ci(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Ug("firestore");s&&yv(i,...s)}return i}function ce(n){return n._firestoreClient||vm(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function vm(n){var e,t,r;const i=n._freezeSettings(),s=function(a,c,u,l){return new Jy(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,_m(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new cv(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function i0(n,e){wm(n=U(n,J));const t=ce(n);if(t._uninitializedComponentsProvider)throw new p(g.FAILED_PRECONDITION,"SDK cache is already specified.");Be("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),i=new dr;return Tm(t,i,new Jc(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function s0(n){wm(n=U(n,J));const e=ce(n);if(e._uninitializedComponentsProvider)throw new p(g.FAILED_PRECONDITION,"SDK cache is already specified.");Be("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),r=new dr;return Tm(e,r,new lm(r,t.cacheSizeBytes))}function Tm(n,e,t){const r=new ue;return n.asyncQueue.enqueue(async()=>{try{await us(n,t),await Oa(n,e),r.resolve()}catch(i){const s=i;if(!hm(s))throw s;Be("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function o0(n){if(n._initialized&&!n._terminated)throw new p(g.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ue;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Fe.v())return Promise.resolve();const i=r+"main";await Fe.delete(i)}(kc(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function a0(n){return function(t){const r=new ue;return t.asyncQueue.enqueueAndForget(async()=>WE(await Xc(t),r)),r.promise}(ce(n=U(n,J)))}function c0(n){return uv(ce(n=U(n,J)))}function u0(n){return lv(ce(n=U(n,J)))}function l0(n){return Jp(n.app,"firestore",n._databaseId.database),n._delete()}function h0(n,e){const t=ce(n=U(n,J)),r=new Ev;return mv(t,n._databaseId,e,r),r}function d0(n,e){return gv(ce(n=U(n,J)),e).then(t=>t?new ve(n,null,t.query):null)}function wm(n){if(n._initialized||n._terminated)throw new p(g.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e="count",t){this._aggregateType=e,this._internalFieldPath=t,this.type="AggregateField"}}class Tv{constructor(e,t,r){this._userDataWriter=t,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fn(he.fromBase64String(e))}catch(t){throw new p(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new fn(he.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new p(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new re(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function f0(){return new pn("__name__")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new p(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new p(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return V(this._lat,e._lat)||V(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv=/^__.*__$/;class Av{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new lt(e,this.data,this.fieldMask,t,this.fieldTransforms):new or(e,this.data,t,this.fieldTransforms)}}class Am{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new lt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Rm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw A()}}class Eo{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this._u(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get au(){return this.settings.au}uu(e){return new Eo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}cu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.uu({path:r,lu:!1});return i.hu(e),i}Pu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.uu({path:r,lu:!1});return i._u(),i}Iu(e){return this.uu({path:void 0,lu:!0})}Tu(e){return Ms(e,this.settings.methodName,this.settings.Eu||!1,this.path,this.settings.du)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}_u(){if(this.path)for(let e=0;e<this.path.length;e++)this.hu(this.path.get(e))}hu(e){if(e.length===0)throw this.Tu("Document fields must not be empty");if(Rm(this.au)&&wv.test(e))throw this.Tu('Document fields cannot begin and end with "__"')}}class Rv{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ri(e)}Au(e,t,r,i=!1){return new Eo({au:e,methodName:t,du:r,path:re.emptyPath(),lu:!1,Eu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yn(n){const e=n._freezeSettings(),t=Ri(n._databaseId);return new Rv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function vo(n,e,t,r,i,s={}){const o=n.Au(s.merge||s.mergeFields?2:0,e,t,i);iu("Data must be an object, but it was:",o,r);const a=bm(r,o);let c,u;if(s.merge)c=new Ve(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=ti(e,h,t);if(!o.contains(d))throw new p(g.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Vm(l,d)||l.push(d)}c=new Ve(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new Av(new Ie(a),c,u)}class bi extends _n{_toFieldTransform(e){if(e.au!==2)throw e.au===1?e.Tu(`${this._methodName}() can only appear at the top level of your update data`):e.Tu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bi}}function Sm(n,e,t){return new Eo({au:3,du:e.settings.du,methodName:n._methodName,lu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class tu extends _n{_toFieldTransform(e){return new Ti(e.path,new Gn)}isEqual(e){return e instanceof tu}}class Sv extends _n{constructor(e,t){super(e),this.Ru=t}_toFieldTransform(e){const t=Sm(this,e,!0),r=this.Ru.map(s=>In(s,t)),i=new cn(r);return new Ti(e.path,i)}isEqual(e){return this===e}}class Pv extends _n{constructor(e,t){super(e),this.Ru=t}_toFieldTransform(e){const t=Sm(this,e,!0),r=this.Ru.map(s=>In(s,t)),i=new un(r);return new Ti(e.path,i)}isEqual(e){return this===e}}class bv extends _n{constructor(e,t){super(e),this.Vu=t}_toFieldTransform(e){const t=new jn(e.serializer,af(e.serializer,this.Vu));return new Ti(e.path,t)}isEqual(e){return this===e}}function nu(n,e,t,r){const i=n.Au(1,e,t);iu("Data must be an object, but it was:",i,r);const s=[],o=Ie.empty();Mt(r,(c,u)=>{const l=To(e,c,t);u=X(u);const h=i.Pu(l);if(u instanceof bi)s.push(l);else{const d=In(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new Ve(s);return new Am(o,a,i.fieldTransforms)}function ru(n,e,t,r,i,s){const o=n.Au(1,e,t),a=[ti(e,r,t)],c=[i];if(s.length%2!=0)throw new p(g.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(ti(e,s[d])),c.push(s[d+1]);const u=[],l=Ie.empty();for(let d=a.length-1;d>=0;--d)if(!Vm(u,a[d])){const f=a[d];let y=c[d];y=X(y);const I=o.Pu(f);if(y instanceof bi)u.push(f);else{const E=In(y,I);E!=null&&(u.push(f),l.set(f,E))}}const h=new Ve(u);return new Am(l,h,o.fieldTransforms)}function Pm(n,e,t,r=!1){return In(t,n.Au(r?4:3,e))}function In(n,e){if(Cm(n=X(n)))return iu("Unsupported field value:",e,n),bm(n,e);if(n instanceof _n)return function(r,i){if(!Rm(i.au))throw i.Tu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Tu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.lu&&e.au!==4)throw e.Tu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=In(a,i.Iu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=X(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return af(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Z.fromDate(r);return{timestampValue:Kn(i.serializer,s)}}if(r instanceof Z){const s=new Z(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Kn(i.serializer,s)}}if(r instanceof eu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof fn)return{bytesValue:If(i.serializer,r._byteString)};if(r instanceof se){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Tu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ac(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Tu(`Unsupported field value: ${Io(r)}`)}(n,e)}function bm(n,e){const t={};return Bd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mt(n,(r,i)=>{const s=In(i,e.cu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Cm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Z||n instanceof eu||n instanceof fn||n instanceof se||n instanceof _n)}function iu(n,e,t){if(!Cm(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Io(t);throw r==="an object"?e.Tu(n+" a custom object"):e.Tu(n+" "+r)}}function ti(n,e,t){if((e=X(e))instanceof pn)return e._internalPath;if(typeof e=="string")return To(n,e);throw Ms("Field path arguments must be of type string or ",n,!1,void 0,t)}const Cv=new RegExp("[~\\*/\\[\\]]");function To(n,e,t){if(e.search(Cv)>=0)throw Ms(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new pn(...e.split("."))._internalPath}catch{throw Ms(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ms(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new p(g.INVALID_ARGUMENT,a+n+c)}function Vm(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new se(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Vv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(wo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Vv extends ni{data(){return super.data()}}function wo(n,e){return typeof e=="string"?To(n,e):e instanceof pn?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new p(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class su{}class Ci extends su{}function m0(n,e,...t){let r=[];e instanceof su&&r.push(e),r=r.concat(t),function(s){const o=s.filter(c=>c instanceof fr).length,a=s.filter(c=>c instanceof Vi).length;if(o>1||o>0&&a>0)throw new p(g.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Vi extends Ci{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Vi(e,t,r)}_apply(e){const t=this._parse(e);return Nm(e._query,t),new ve(e.firestore,e.converter,Aa(e._query,t))}_parse(e){const t=yn(e.firestore);return function(s,o,a,c,u,l,h){let d;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new p(g.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Hl(h,l);const f=[];for(const y of h)f.push(Wl(c,s,y));d={arrayValue:{values:f}}}else d=Wl(c,s,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Hl(h,l),d=Pm(a,o,h,l==="in"||l==="not-in");return L.create(u,l,d)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function g0(n,e,t){const r=e,i=wo("where",n);return Vi._create(i,r,t)}class fr extends su{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new fr(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:j.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)Nm(o,c),o=Aa(o,c)}(e._query,t),new ve(e.firestore,e.converter,Aa(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function p0(...n){return n.forEach(e=>Om("or",e)),fr._create("or",n)}function _0(...n){return n.forEach(e=>Om("and",e)),fr._create("and",n)}class ou extends Ci{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ou(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new p(g.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new p(g.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new Nn(s,o);return function(u,l){if(gc(u)===null){const h=co(u);h!==null&&xm(u,h,l.field)}}(i,a),a}(e._query,this._field,this._direction);return new ve(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ct(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function y0(n,e="asc"){const t=e,r=wo("orderBy",n);return ou._create(r,t)}class Ao extends Ci{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Ao(e,t,r)}_apply(e){return new ve(e.firestore,e.converter,Ps(e._query,this._limit,this._limitType))}}function I0(n){return ym("limit",n),Ao._create("limit",n,"F")}function E0(n){return ym("limitToLast",n),Ao._create("limitToLast",n,"L")}class Ro extends Ci{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Ro(e,t,r)}_apply(e){const t=km(e,this.type,this._docOrFields,this._inclusive);return new ve(e.firestore,e.converter,function(i,s){return new ct(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function v0(...n){return Ro._create("startAt",n,!0)}function T0(...n){return Ro._create("startAfter",n,!1)}class So extends Ci{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new So(e,t,r)}_apply(e){const t=km(e,this.type,this._docOrFields,this._inclusive);return new ve(e.firestore,e.converter,function(i,s){return new ct(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,t))}}function w0(...n){return So._create("endBefore",n,!1)}function A0(...n){return So._create("endAt",n,!0)}function km(n,e,t,r){if(t[0]=X(t[0]),t[0]instanceof ni)return function(s,o,a,c,u){if(!c)throw new p(g.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const l=[];for(const h of Xt(s))if(h.field.isKeyField())l.push(on(o,c.key));else{const d=c.data.field(h.field);if(oo(d))throw new p(g.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new p(g.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}l.push(d)}return new Vt(l,u)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=yn(n.firestore);return function(o,a,c,u,l,h){const d=o.explicitOrderBy;if(l.length>d.length)throw new p(g.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let y=0;y<l.length;y++){const I=l[y];if(d[y].field.isKeyField()){if(typeof I!="string")throw new p(g.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof I}`);if(!pc(o)&&I.indexOf("/")!==-1)throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${I}' contains a slash.`);const E=o.path.child(q.fromString(I));if(!v.isDocumentKey(E))throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${E}' is not because it contains an odd number of segments.`);const b=new v(E);f.push(on(a,b))}else{const E=Pm(c,u,I);f.push(E)}}return new Vt(f,h)}(n._query,n.firestore._databaseId,i,e,t,r)}}function Wl(n,e,t){if(typeof(t=X(t))=="string"){if(t==="")throw new p(g.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!pc(e)&&t.indexOf("/")!==-1)throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(q.fromString(t));if(!v.isDocumentKey(r))throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return on(n,new v(r))}if(t instanceof se)return on(n,t._key);throw new p(g.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Io(t)}.`)}function Hl(n,e){if(!Array.isArray(n)||n.length===0)throw new p(g.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Nm(n,e){if(e.isInequality()){const r=co(n),i=e.field;if(r!==null&&!r.isEqual(i))throw new p(g.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=gc(n);s!==null&&xm(n,i,s)}const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new p(g.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new p(g.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function xm(n,e,t){if(!t.isEqual(e))throw new p(g.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}function Om(n,e){if(!(e instanceof Vi||e instanceof fr))throw new p(g.INVALID_ARGUMENT,`Function ${n}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class Mm{convertValue(e,t="none"){switch(bt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(it(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw A()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Mt(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new eu(ee(e.latitude),ee(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ao(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Hr(e));default:return null}}convertTimestamp(e){const t=Pt(e);return new Z(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=q.fromString(e);R(bf(r));const i=new sn(r.get(1),r.get(3)),s=new v(r.popFirst(5));return i.isEqual(t)||ne(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Dv extends Mm{constructor(e){super(),this.firestore=e}convertBytes(e){return new fn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new se(this.firestore,null,t)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(n){return new ei("sum",ti("sum",n))}function S0(n){return new ei("avg",ti("average",n))}function kv(){return new ei("count")}function P0(n,e){var t,r;return n instanceof ei&&e instanceof ei&&n._aggregateType===e._aggregateType&&((t=n._internalFieldPath)===null||t===void 0?void 0:t.canonicalString())===((r=e._internalFieldPath)===null||r===void 0?void 0:r.canonicalString())}function b0(n,e){return Em(n.query,e.query)&&Ln(n.data(),e.data())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xn extends ni{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ls(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(wo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class ls extends Xn{data(e={}){return super.data(e)}}class Zn{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Qt(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ls(this._firestore,this._userDataWriter,r.key,r,new Qt(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new p(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new ls(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Qt(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new ls(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Qt(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:Nv(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Nv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return A()}}function C0(n,e){return n instanceof Xn&&e instanceof Xn?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Zn&&e instanceof Zn&&n._firestore===e._firestore&&Em(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(n){n=U(n,se);const e=U(n.firestore,J);return gm(ce(e),n._key).then(t=>au(e,n,t))}class Ft extends Mm{constructor(e){super(),this.firestore=e}convertBytes(e){return new fn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new se(this.firestore,null,t)}}function V0(n){n=U(n,se);const e=U(n.firestore,J),t=ce(e),r=new Ft(e);return hv(t,n._key).then(i=>new Xn(e,r,n._key,i,new Qt(i!==null&&i.hasLocalMutations,!0),n.converter))}function D0(n){n=U(n,se);const e=U(n.firestore,J);return gm(ce(e),n._key,{source:"server"}).then(t=>au(e,n,t))}function k0(n){n=U(n,ve);const e=U(n.firestore,J),t=ce(e),r=new Ft(e);return Dm(n._query),pm(t,n._query).then(i=>new Zn(e,r,n,i))}function N0(n){n=U(n,ve);const e=U(n.firestore,J),t=ce(e),r=new Ft(e);return dv(t,n._query).then(i=>new Zn(e,r,n,i))}function x0(n){n=U(n,ve);const e=U(n.firestore,J),t=ce(e),r=new Ft(e);return pm(t,n._query,{source:"server"}).then(i=>new Zn(e,r,n,i))}function Ov(n,e,t){n=U(n,se);const r=U(n.firestore,J),i=Po(n.converter,e,t);return ki(r,[vo(yn(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Y.none())])}function Di(n,e,t,...r){n=U(n,se);const i=U(n.firestore,J),s=yn(i);let o;return o=typeof(e=X(e))=="string"||e instanceof pn?ru(s,"updateDoc",n._key,e,t,r):nu(s,"updateDoc",n._key,e),ki(i,[o.toMutation(n._key,Y.exists(!0))])}function Mv(n){return ki(U(n.firestore,J),[new ar(n._key,Y.none())])}function Lv(n,e){const t=U(n.firestore,J),r=st(n),i=Po(n.converter,e);return ki(t,[vo(yn(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Y.exists(!1))]).then(()=>r)}function O0(n,...e){var t,r,i;n=X(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Ma(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Ma(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(n instanceof se)u=U(n.firestore,J),l=sr(n._key.path),c={next:h=>{e[o]&&e[o](au(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=U(n,ve);u=U(h.firestore,J),l=h._query;const d=new Ft(u);c={next:f=>{e[o]&&e[o](new Zn(u,d,h,f))},error:e[o+1],complete:e[o+2]},Dm(n._query)}return function(d,f,y,I){const E=new po(I),b=new Gc(f,E,y);return d.asyncQueue.enqueueAndForget(async()=>Bc(await Yn(d),b)),()=>{E.va(),d.asyncQueue.enqueueAndForget(async()=>qc(await Yn(d),b))}}(ce(u),l,a,c)}function M0(n,e){return fv(ce(n=U(n,J)),Ma(e)?e:{next:e})}function ki(n,e){return function(r,i){const s=new ue;return r.asyncQueue.enqueueAndForget(async()=>zE(await Xc(r),i,s)),s.promise}(ce(n),e)}function au(n,e,t){const r=t.docs.get(e._key),i=new Ft(n);return new Xn(n,i,e._key,r,new Qt(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(n){return Fv(n,{count:kv()})}function Fv(n,e){const t=U(n.firestore,J),r=ce(t),i=function(o,a){const c=[];for(const u in o)Object.prototype.hasOwnProperty.call(o,u)&&c.push(a(o[u],u,o));return c}(e,(s,o)=>new yI(o,s._aggregateType,s._internalFieldPath));return function(o,a,c){const u=new ue;return o.asyncQueue.enqueueAndForget(async()=>{try{const l=await mm(o);u.resolve(IE(l,a,c))}catch(l){u.reject(l)}}),u.promise}(r,n._query,i).then(s=>function(a,c,u){const l=new Ft(a);return new Tv(c,l,u)}(t,n,s))}class Uv{constructor(e){this.kind="memory",this._onlineComponentProvider=new dr,e!=null&&e.garbageCollector?this._offlineComponentProvider=e.garbageCollector._offlineComponentProvider:this._offlineComponentProvider=new Jn}toJSON(){return{kind:this.kind}}}class Bv{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=Kv(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class qv{constructor(){this.kind="memoryEager",this._offlineComponentProvider=new Jn}toJSON(){return{kind:this.kind}}}class zv{constructor(e){this.kind="memoryLru",this._offlineComponentProvider=new iv(e)}toJSON(){return{kind:this.kind}}}function F0(){return new qv}function U0(n){return new zv(n==null?void 0:n.cacheSizeBytes)}function B0(n){return new Uv(n)}function q0(n){return new Bv(n)}class Gv{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=new dr,this._offlineComponentProvider=new Jc(this._onlineComponentProvider,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}class jv{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=new dr,this._offlineComponentProvider=new lm(this._onlineComponentProvider,e==null?void 0:e.cacheSizeBytes)}}function Kv(n){return new Gv(n==null?void 0:n.forceOwnership)}function z0(){return new jv}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=yn(e)}set(e,t,r){this._verifyNotCommitted();const i=yt(e,this._firestore),s=Po(i.converter,t,r),o=vo(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Y.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=yt(e,this._firestore);let o;return o=typeof(t=X(t))=="string"||t instanceof pn?ru(this._dataReader,"WriteBatch.update",s._key,t,r,i):nu(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,Y.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=yt(e,this._firestore);return this._mutations=this._mutations.concat(new ar(t._key,Y.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new p(g.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function yt(n,e){if((n=X(n)).firestore!==e)throw new p(g.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=yn(t)}get(t){const r=yt(t,this._firestore),i=new Dv(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return A();const o=s[0];if(o.isFoundDocument())return new ni(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new ni(this._firestore,i,r._key,null,r.converter);throw A()})}set(t,r,i){const s=yt(t,this._firestore),o=Po(s.converter,r,i),a=vo(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(t,r,i,...s){const o=yt(t,this._firestore);let a;return a=typeof(r=X(r))=="string"||r instanceof pn?ru(this._dataReader,"Transaction.update",o._key,r,i,s):nu(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(t){const r=yt(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=yt(e,this._firestore),r=new Ft(this._firestore);return super.get(e).then(i=>new Xn(this._firestore,r,t._key,i._document,new Qt(!1,!1),t.converter))}}function j0(n,e,t){n=U(n,J);const r=Object.assign(Object.assign({},Wv),t);return function(s){if(s.maxAttempts<1)throw new p(g.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const c=new ue;return s.asyncQueue.enqueueAndForget(async()=>{const u=await mm(s);new av(s.asyncQueue,u,a,o,c).run()}),c.promise}(ce(n),i=>e(new $v(n,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(){return new bi("deleteField")}function W0(){return new tu("serverTimestamp")}function Qv(...n){return new Sv("arrayUnion",n)}function Jv(...n){return new Pv("arrayRemove",n)}function H0(n){return new bv("increment",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(n){return ce(n=U(n,J)),new Hv(n,e=>ki(n,e))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(n,e){var t;const r=ce(n=U(n,J));if(!r._uninitializedComponentsProvider||((t=r._uninitializedComponentsProvider)===null||t===void 0?void 0:t._offlineKind)==="memory")return Be("Cannot enable indexes when persistence is disabled"),Promise.resolve();const i=function(o){const a=typeof o=="string"?function(l){try{return JSON.parse(l)}catch(h){throw new p(g.INVALID_ARGUMENT,"Failed to parse JSON: "+(h==null?void 0:h.message))}}(o):o,c=[];if(Array.isArray(a.indexes))for(const u of a.indexes){const l=$l(u,"collectionGroup"),h=[];if(Array.isArray(u.fields))for(const d of u.fields){const f=To("setIndexConfiguration",$l(d,"fieldPath"));d.arrayConfig==="CONTAINS"?h.push(new ts(f,2)):d.order==="ASCENDING"?h.push(new ts(f,0)):d.order==="DESCENDING"&&h.push(new ts(f,1))}c.push(new As(As.UNKNOWN_ID,l,h,Kr.empty()))}return c}(e);return pv(r,i)}function $l(n,e){if(typeof n[e]!="string")throw new p(g.INVALID_ARGUMENT,"Missing string value for: "+e);return n[e]}(function(e,t=!0){(function(i){ir=i})(tr),Fn(new tn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new J(new Iy(r.getProvider("auth-internal")),new Ty(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new p(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sn(u.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Rt(ju,"4.0.0",e),Rt(ju,"4.0.0","esm2017")})();var Yv="firebase",Xv="10.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rt(Yv,Xv,"app");function cu(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Lm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Zv=Lm,Fm=new oi("auth","Firebase",Lm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=new Ba("@firebase/auth");function eT(n,...e){Ls.logLevel<=z.WARN&&Ls.warn(`Auth (${tr}): ${n}`,...e)}function hs(n,...e){Ls.logLevel<=z.ERROR&&Ls.error(`Auth (${tr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(n,...e){throw uu(n,...e)}function $e(n,...e){return uu(n,...e)}function Um(n,e,t){const r=Object.assign(Object.assign({},Zv()),{[e]:t});return new oi("auth","Firebase",r).create(e,{appName:n.name})}function tT(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ye(n,"argument-error"),Um(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function uu(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Fm.create(n,...e)}function N(n,e,...t){if(!n)throw uu(e,...t)}function tt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw hs(e),new Error(e)}function ot(n,e){n||tt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function nT(){return Ql()==="http:"||Ql()==="https:"}function Ql(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nT()||jg()||"connection"in navigator)?navigator.onLine:!0}function iT(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,t){this.shortDelay=e,this.longDelay=t,ot(t>e,"Short delay should be less than long delay!"),this.isMobile=zg()||Kg()}get(){return rT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(n,e){ot(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT=new Ni(3e4,6e4);function qm(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function xi(n,e,t,r,i={}){return zm(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ai(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Bm.fetch()(Gm(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function zm(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},sT),e);try{const i=new cT(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Zi(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zi(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Zi(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Zi(n,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Um(n,l,u);Ye(n,l)}}catch(i){if(i instanceof at)throw i;Ye(n,"network-request-failed",{message:String(i)})}}async function aT(n,e,t,r,i={}){const s=await xi(n,e,t,r,i);return"mfaPendingCredential"in s&&Ye(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Gm(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?lu(n.config,i):`${n.config.apiScheme}://${i}`}class cT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r($e(this.auth,"network-request-failed")),oT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=$e(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uT(n,e){return xi(n,"POST","/v1/accounts:delete",e)}async function lT(n,e){return xi(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hT(n,e=!1){const t=X(n),r=await t.getIdToken(e),i=hu(r);N(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Nr(Jo(i.auth_time)),issuedAtTime:Nr(Jo(i.iat)),expirationTime:Nr(Jo(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Jo(n){return Number(n)*1e3}function hu(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return hs("JWT malformed, contained fewer than 3 sections"),null;try{const i=ph(t);return i?JSON.parse(i):(hs("Failed to decode base64 JWT payload"),null)}catch(i){return hs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function dT(n){const e=hu(n);return N(e,"internal-error"),N(typeof e.exp<"u","internal-error"),N(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ri(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof at&&fT(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function fT({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Nr(this.lastLoginAt),this.creationTime=Nr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fs(n){var e;const t=n.auth,r=await n.getIdToken(),i=await ri(n,lT(t,{idToken:r}));N(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?_T(s.providerUserInfo):[],a=pT(n.providerData,o),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new jm(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function gT(n){const e=X(n);await Fs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pT(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function _T(n){return n.map(e=>{var{providerId:t}=e,r=cu(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yT(n,e){const t=await zm(n,{},async()=>{const r=ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Gm(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Bm.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken<"u","internal-error"),N(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return N(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await yT(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new ii;return r&&(N(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(N(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ii,this.toJSON())}_performRefresh(){return tt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(n,e){N(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Zt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=cu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new jm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ri(this,this.stsTokenManager.getToken(this.auth,e));return N(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return hT(this,e)}reload(){return gT(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Zt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Fs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ri(this,uT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,u,l;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=t.photoURL)!==null&&o!==void 0?o:void 0,I=(a=t.tenantId)!==null&&a!==void 0?a:void 0,E=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,b=(u=t.createdAt)!==null&&u!==void 0?u:void 0,C=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:S,emailVerified:F,isAnonymous:G,providerData:M,stsTokenManager:oe}=t;N(S&&oe,e,"internal-error");const Me=ii.fromJSON(this.name,oe);N(typeof S=="string",e,"internal-error"),gt(h,e.name),gt(d,e.name),N(typeof F=="boolean",e,"internal-error"),N(typeof G=="boolean",e,"internal-error"),gt(f,e.name),gt(y,e.name),gt(I,e.name),gt(E,e.name),gt(b,e.name),gt(C,e.name);const dt=new Zt({uid:S,auth:e,email:d,emailVerified:F,displayName:h,isAnonymous:G,photoURL:y,phoneNumber:f,tenantId:I,stsTokenManager:Me,createdAt:b,lastLoginAt:C});return M&&Array.isArray(M)&&(dt.providerData=M.map(D=>Object.assign({},D))),E&&(dt._redirectEventId=E),dt}static async _fromIdTokenResponse(e,t,r=!1){const i=new ii;i.updateFromServerResponse(t);const s=new Zt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Fs(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl=new Map;function nt(n){ot(n instanceof Function,"Expected a class definition");let e=Jl.get(n);return e?(ot(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Jl.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Km.type="NONE";const Yl=Km;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(n,e,t){return`firebase:${n}:${e}:${t}`}class On{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ds(this.userKey,i.apiKey,s),this.fullPersistenceKey=ds("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new On(nt(Yl),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||nt(Yl);const o=ds(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=Zt._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new On(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new On(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($m(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jm(e))return"Blackberry";if(Ym(e))return"Webos";if(du(e))return"Safari";if((e.includes("chrome/")||Hm(e))&&!e.includes("edge/"))return"Chrome";if(Qm(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Wm(n=le()){return/firefox\//i.test(n)}function du(n=le()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hm(n=le()){return/crios\//i.test(n)}function $m(n=le()){return/iemobile/i.test(n)}function Qm(n=le()){return/android/i.test(n)}function Jm(n=le()){return/blackberry/i.test(n)}function Ym(n=le()){return/webos/i.test(n)}function bo(n=le()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function IT(n=le()){var e;return bo(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ET(){return Wg()&&document.documentMode===10}function Xm(n=le()){return bo(n)||Qm(n)||Ym(n)||Jm(n)||/windows phone/i.test(n)||$m(n)}function vT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(n,e=[]){let t;switch(n){case"Browser":t=Xl(le());break;case"Worker":t=`${Xl(le())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${tr}/${r}`}async function eg(n,e){return xi(n,"GET","/v2/recaptchaConfig",qm(n,e))}function Zl(n){return n!==void 0&&n.enterprise!==void 0}class tg{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function ng(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=$e("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",TT().appendChild(r)})}function wT(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const AT="https://www.google.com/recaptcha/enterprise.js?render=",RT="recaptcha-enterprise",ST="NO_RECAPTCHA";class PT{constructor(e){this.type=RT,this.auth=Oi(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{eg(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new tg(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;Zl(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(ST)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&Zl(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}ng(AT+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eh(this),this.idTokenSubscription=new eh(this),this.beforeStateQueue=new bT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=nt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await On.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Fs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?X(e):null;return t&&N(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(nt(e))})}async initializeRecaptchaConfig(){const e=await eg(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new tg(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new PT(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new oi("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&nt(e)||this._popupRedirectResolver;N(t,this,"argument-error"),this.redirectPersistenceManager=await On.create(this,[nt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return N(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&eT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Oi(n){return X(n)}class eh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zg(t=>this.observer=t)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(n,e){const t=ci(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Ln(s,e??{}))return i;Ye(i,"already-initialized")}return t.initialize({options:e})}function DT(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(nt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function kT(n,e,t){const r=Oi(n);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=rg(e),{host:o,port:a}=NT(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||xT()}function rg(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function NT(n){const e=rg(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:th(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:th(o)}}}function th(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function xT(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return tt("not implemented")}_getIdTokenResponse(e){return tt("not implemented")}_linkToIdToken(e,t){return tt("not implemented")}_getReauthenticationResolver(e){return tt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mn(n,e){return aT(n,"POST","/v1/accounts:signInWithIdp",qm(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT="http://localhost";class mn extends ig{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new mn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ye("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=cu(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new mn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Mn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Mn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Mn(e,t)}buildRequest(){const e={requestUri:OT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ai(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi extends fu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends Mi{constructor(){super("facebook.com")}static credential(e){return mn._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch{return null}}}It.FACEBOOK_SIGN_IN_METHOD="facebook.com";It.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends Mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return mn._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Xe.credential(t,r)}catch{return null}}}Xe.GOOGLE_SIGN_IN_METHOD="google.com";Xe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends Mi{constructor(){super("github.com")}static credential(e){return mn._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.GITHUB_SIGN_IN_METHOD="github.com";Et.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends Mi{constructor(){super("twitter.com")}static credential(e,t){return mn._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return vt.credential(t,r)}catch{return null}}}vt.TWITTER_SIGN_IN_METHOD="twitter.com";vt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Zt._fromIdTokenResponse(e,r,i),o=nh(r);return new er({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=nh(r);return new er({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function nh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us extends at{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Us.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Us(e,t,r,i)}}function sg(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Us._fromErrorAndOperation(n,s,e,r):s})}async function MT(n,e,t=!1){const r=await ri(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return er._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LT(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await ri(n,sg(r,i,e,n),t);N(s.idToken,r,"internal-error");const o=hu(s.idToken);N(o,r,"internal-error");const{sub:a}=o;return N(n.uid===a,r,"user-mismatch"),er._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ye(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FT(n,e,t=!1){const r="signIn",i=await sg(n,r,e),s=await er._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function UT(n,e,t,r){return X(n).onIdTokenChanged(e,t,r)}function BT(n,e,t){return X(n).beforeAuthStateChanged(e,t)}const Bs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bs,"1"),this.storage.removeItem(Bs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(){const n=le();return du(n)||bo(n)}const zT=1e3,GT=10;class ag extends og{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=qT()&&vT(),this.fallbackToPolling=Xm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ET()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,GT):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},zT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ag.type="LOCAL";const cg=ag;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug extends og{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ug.type="SESSION";const lg=ug;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jT(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Co(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,s)),c=await jT(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Co.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=mu("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return window}function WT(n){Qe().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function HT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $T(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function QT(){return hg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="firebaseLocalStorageDb",JT=1,qs="firebaseLocalStorage",fg="fbase_key";class Li{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Vo(n,e){return n.transaction([qs],e?"readwrite":"readonly").objectStore(qs)}function YT(){const n=indexedDB.deleteDatabase(dg);return new Li(n).toPromise()}function Fa(){const n=indexedDB.open(dg,JT);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(qs,{keyPath:fg})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(qs)?e(r):(r.close(),await YT(),e(await Fa()))})})}async function rh(n,e,t){const r=Vo(n,!0).put({[fg]:e,value:t});return new Li(r).toPromise()}async function XT(n,e){const t=Vo(n,!1).get(e),r=await new Li(t).toPromise();return r===void 0?null:r.value}function ih(n,e){const t=Vo(n,!0).delete(e);return new Li(t).toPromise()}const ZT=800,ew=3;class mg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>ew)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Co._getInstance(QT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await HT(),!this.activeServiceWorker)return;this.sender=new KT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$T()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fa();return await rh(e,Bs,"1"),await ih(e,Bs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>rh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>XT(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ih(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Vo(i,!1).getAll();return new Li(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ZT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mg.type="LOCAL";const tw=mg;new Ni(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(n,e){return e?nt(e):(N(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu extends ig{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Mn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Mn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function nw(n){return FT(n.auth,new gu(n),n.bypassAuthState)}function rw(n){const{auth:e,user:t}=n;return N(t,e,"internal-error"),LT(t,new gu(n),n.bypassAuthState)}async function iw(n){const{auth:e,user:t}=n;return N(t,e,"internal-error"),MT(t,new gu(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nw;case"linkViaPopup":case"linkViaRedirect":return iw;case"reauthViaPopup":case"reauthViaRedirect":return rw;default:Ye(this.auth,"internal-error")}}resolve(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw=new Ni(2e3,1e4);async function ow(n,e,t){const r=Oi(n);tT(n,e,fu);const i=gg(r,t);return new Jt(r,"signInViaPopup",e,i).executeNotNull()}class Jt extends pg{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Jt.currentPopupAction&&Jt.currentPopupAction.cancel(),Jt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){ot(this.filter.length===1,"Popup operations only handle one event");const e=mu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject($e(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($e(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($e(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sw.get())};e()}}Jt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw="pendingRedirect",fs=new Map;class cw extends pg{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=fs.get(this.auth._key());if(!e){try{const r=await uw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}fs.set(this.auth._key(),e)}return this.bypassAuthState||fs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uw(n,e){const t=dw(e),r=hw(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function lw(n,e){fs.set(n._key(),e)}function hw(n){return nt(n._redirectPersistence)}function dw(n){return ds(aw,n.config.apiKey,n.name)}async function fw(n,e,t=!1){const r=Oi(n),i=gg(r,e),o=await new cw(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw=10*60*1e3;class gw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!_g(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError($e(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mw&&this.cachedEventUids.clear(),this.cachedEventUids.has(sh(e))}saveEventToCache(e){this.cachedEventUids.add(sh(e)),this.lastProcessedEventTime=Date.now()}}function sh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function _g({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _g(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _w(n,e={}){return xi(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Iw=/^https?/;async function Ew(n){if(n.config.emulator)return;const{authorizedDomains:e}=await _w(n);for(const t of e)try{if(vw(t))return}catch{}Ye(n,"unauthorized-domain")}function vw(n){const e=La(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Iw.test(t))return!1;if(yw.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw=new Ni(3e4,6e4);function oh(){const n=Qe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ww(n){return new Promise((e,t)=>{var r,i,s;function o(){oh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{oh(),t($e(n,"network-request-failed"))},timeout:Tw.get()})}if(!((i=(r=Qe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Qe().gapi)===null||s===void 0)&&s.load)o();else{const a=wT("iframefcb");return Qe()[a]=()=>{gapi.load?o():t($e(n,"network-request-failed"))},ng(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw ms=null,e})}let ms=null;function Aw(n){return ms=ms||ww(n),ms}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=new Ni(5e3,15e3),Sw="__/auth/iframe",Pw="emulator/auth/iframe",bw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Cw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vw(n){const e=n.config;N(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?lu(e,Pw):`https://${n.config.authDomain}/${Sw}`,r={apiKey:e.apiKey,appName:n.name,v:tr},i=Cw.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${ai(r).slice(1)}`}async function Dw(n){const e=await Aw(n),t=Qe().gapi;return N(t,n,"internal-error"),e.open({where:document.body,url:Vw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bw,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=$e(n,"network-request-failed"),a=Qe().setTimeout(()=>{s(o)},Rw.get());function c(){Qe().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nw=500,xw=600,Ow="_blank",Mw="http://localhost";class ah{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Lw(n,e,t,r=Nw,i=xw){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},kw),{width:r.toString(),height:i.toString(),top:s,left:o}),u=le().toLowerCase();t&&(a=Hm(u)?Ow:t),Wm(u)&&(e=e||Mw,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,y])=>`${d}${f}=${y},`,"");if(IT(u)&&a!=="_self")return Fw(e||"",a),new ah(null);const h=window.open(e||"",a,l);N(h,n,"popup-blocked");try{h.focus()}catch{}return new ah(h)}function Fw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw="__/auth/handler",Bw="emulator/auth/handler",qw=encodeURIComponent("fac");async function ch(n,e,t,r,i,s){N(n.config.authDomain,n,"auth-domain-config-required"),N(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:tr,eventId:i};if(e instanceof fu){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Xg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(s||{}))o[l]=h}if(e instanceof Mi){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await n._getAppCheckToken(),u=c?`#${qw}=${encodeURIComponent(c)}`:"";return`${zw(n)}?${ai(a).slice(1)}${u}`}function zw({config:n}){return n.emulator?lu(n,Bw):`https://${n.authDomain}/${Uw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo="webStorageSupport";class Gw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lg,this._completeRedirectFn=fw,this._overrideRedirectResult=lw}async _openPopup(e,t,r,i){var s;ot((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ch(e,t,r,La(),i);return Lw(e,o,mu())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await ch(e,t,r,La(),i);return WT(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(ot(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Dw(e),r=new gw(e);return t.register("authEvent",i=>(N(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Yo,{type:Yo},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Yo];o!==void 0&&t(!!o),Ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ew(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Xm()||du()||bo()}}const jw=Gw;var uh="@firebase/auth",lh="1.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Hw(n){Fn(new tn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;N(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zm(n)},u=new CT(r,i,s,c);return DT(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Fn(new tn("auth-internal",e=>{const t=Oi(e.getProvider("auth").getImmediate());return(r=>new Kw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rt(uh,lh,Ww(n)),Rt(uh,lh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=5*60,Qw=Ih("authIdTokenMaxAge")||$w;let hh=null;const Jw=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Qw)return;const i=t==null?void 0:t.token;hh!==i&&(hh=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Yw(n=za()){const e=ci(n,"auth");if(e.isInitialized())return e.getImmediate();const t=VT(n,{popupRedirectResolver:jw,persistence:[tw,cg,lg]}),r=Ih("authTokenSyncURL");if(r){const s=Jw(r);BT(t,s,()=>s(t.currentUser)),UT(t,o=>s(o))}const i=_h("auth");return i&&kT(t,`http://${i}`),t}Hw("Browser");const Xw="AIzaSyA-5h0j1_2ncIvkkRxtRjpzzNB7FsbApyg",Zw="mediafaves.firebaseapp.com",eA="mediafaves",tA="mediafaves.appspot.com",nA="975423208962",rA="1:975423208962:web:f566ae93457d77a2e9711b",iA="G-5JVEJ1XQKE",dh={apiKey:Xw,authDomain:Zw,projectId:eA,storageBucket:tA,messagingSenderId:nA,appId:rA,measurementId:iA};function sA(){return Zp().length&&e_(za()),ra(dh)}const pu=sA(),Do=Yw(pu);Do.setPersistence(cg);const _u=vv(pu),yg=new Xe,Ua=Im(_u,"users"),Ut=Im(_u,"lists"),J0=Object.freeze(Object.defineProperty({__proto__:null,app:pu,auth:Do,db:_u,listsRef:Ut,provider:yg,usersRef:Ua},Symbol.toStringTag,{value:"Module"}));var oA=(n=>(n[n.Column=0]="Column",n[n.Grid=1]="Grid",n))(oA||{}),Sn=(n=>(n[n.Films=0]="Films",n[n.Shows=1]="Shows",n[n.Games=2]="Games",n[n.Songs=3]="Songs",n[n.Books=4]="Books",n))(Sn||{}),Ig=(n=>(n[n.Ranks=0]="Ranks",n[n.Tiers=1]="Tiers",n))(Ig||{}),aA=(n=>(n[n.xs=0]="xs",n[n.sm=640]="sm",n[n.md=768]="md",n[n.lg=1024]="lg",n[n.xl=1280]="xl",n[n["2xl"]=1536]="2xl",n))(aA||{});const cA=[{type:0,name:"Films",slug:"films",textColor:"text-violet-500",bgColor:"bg-violet-500"},{type:1,name:"Shows",slug:"shows",textColor:"text-cyan-500",bgColor:"bg-cyan-500"},{type:2,name:"Games",slug:"games",textColor:"text-emerald-500",bgColor:"bg-emerald-500"},{type:3,name:"Songs",slug:"songs",textColor:"text-orange-500",bgColor:"bg-orange-500"},{type:4,name:"Books",slug:"books",textColor:"text-rose-500",bgColor:"bg-rose-500"}],Y0=[{type:0,name:"Ranking",slug:"ranking",filter:""},{type:1,name:"Tier",slug:"tierlist",filter:"hue-rotate-15"}],Oe=zs([]);function uA(n){return cA[n].slug}function lA(n){Oe.update(e=>[...e,n])}function hA(n){Oe.update(e=>e.filter(t=>t.id!==n))}function dA(n,e){Oe.update(t=>t.map(r=>r.id===n?{...r,name:e}:r))}function fA(n,e){Oe.update(t=>t.map(r=>r.id===n?{...r,style:e}:r))}function mA(n,e){Oe.update(t=>t.map(r=>r.id===n?{...r,tiers:[...r.tiers||[],e]}:r))}function gA(n,e,t){Oe.update(r=>r.map(i=>{var s;return i.id===n?{...i,tiers:(s=i.tiers)==null?void 0:s.map(o=>o===e?t:o)}:i}))}function pA(n,e){Oe.update(t=>t.map(r=>{var i;return r.id===n?{...r,tiers:(i=r.tiers)==null?void 0:i.filter(s=>s!==e)}:r}))}const En={getSnippet:uA,add:lA,remove:hA,updateName:dA,updateStyle:fA,addTier:mA,updateTier:gA,removeTier:pA},Fi=zs([]);function si(n){return"imdb_id"in n?n.imdb_id:"imdb_show_id"in n?n.imdb_show_id:"spotify_id"in n?n.spotify_id:"cover_i"in n?n.cover_i:n.rawg_id}function _A(n){return"imdb_id"in n?Sn.Films:"imdb_show_id"in n?Sn.Shows:"rawg_id"in n?Sn.Games:"spotify_id"in n?Sn.Songs:Sn.Books}function yA(n){return new Promise(e=>{Fi.update(t=>(e(null),[...t,n]))})}function IA(n){Fi.update(e=>e.filter(t=>si(t)!==n))}function EA(n,e){Fi.update(t=>{const r=t.find(s=>si(s)===n);if(!r)return t;const i=t.filter(s=>si(s)!==n);return i.splice(e,0,r),i})}function vA(n,e){Fi.update(t=>{const r=t.findIndex(i=>si(i)===n);return r===-1||(t[r].tier=e),t})}const fh={getId:si,getType:_A,add:yA,remove:IA,moveTo:EA,moveToTier:vA};async function TA(n){n.rankType===Ig.Tiers&&(n.tiers=[]);const e=await Lv(Ut,{...n,index:en(Oe).length,entries:[]});return En.add({...n,id:e.id,index:en(Oe).length,entries:[]}),e.id}async function wA(n){En.remove(n),await Mv(st(Ut,n))}async function AA(n,e){En.updateName(n,e),await Di(st(Ut,n),{name:e})}async function RA(n,e){En.updateStyle(n,e),await Di(st(Ut,n),{style:e})}async function SA(n,e){En.addTier(n,e),await Di(st(Ut,n),{tiers:Qv(e)})}async function PA(n,e,t){var a;En.updateTier(n,e,t);const r=en(Fi).filter(c=>c.tier===e);if(!r)return;r.forEach(c=>{fh.moveToTier(fh.getId(c),t)});const s=en(Oe).find(c=>c.id===n);if(!s)return;const o=(a=s.tiers)==null?void 0:a.map(c=>c);o&&await Di(st(Ut,n),{tiers:o})}async function bA(n,e){En.removeTier(n,e),await Di(st(Ut,n),{tiers:Jv(e)})}const X0={add:TA,remove:wA,updateName:AA,updateStyle:RA,addTier:SA,updateTier:PA,removeTier:bA},Eg=zs(null);function CA(n){new Promise(()=>{const e=en(Eg);if(!e)return;const t=new Image;t.style.width="100vw",t.style.height="100vh",t.style.objectFit="cover",t.style.objectPosition="center",t.src=e,t.decode().then(()=>n.appendChild(t))})}const Z0={loadImage:CA},eR=zs(null);async function VA(){const{user:n}=await ow(Do,yg);(await xv(st(Ua,n.uid))).exists()||await Ov(st(Ua,n.uid),{name:n.displayName,email:n.email});const t=en(Rg).params.id;try{const r=en(Oe);if(!t&&!r.length)return await es("/");if(r.length)return await es(`/${r[0].id}`)}catch(r){console.error(r)}await es(`/${t}`)}async function DA(){Oe.set([]),Eg.set(null),await Do.signOut(),await es("/")}const tR={login:VA,logout:DA};export{u0 as $,Mm as A,fn as B,He as C,se as D,_v as E,pn as F,eu as G,Lv as H,P0 as I,b0 as J,_0 as K,Ev as L,Jv as M,Qv as N,S0 as O,o0 as P,ve as Q,Im as R,Qt as S,Z as T,e0 as U,yv as V,Hv as W,kv as X,Mv as Y,K0 as Z,QA as _,ei as a,GA as a$,st as a0,f0 as a1,i0 as a2,s0 as a3,c0 as a4,A0 as a5,w0 as a6,ce as a7,ki as a8,Fv as a9,t0 as aA,j0 as aB,W0 as aC,Ov as aD,Q0 as aE,HA as aF,C0 as aG,T0 as aH,v0 as aI,R0 as aJ,l0 as aK,Di as aL,a0 as aM,g0 as aN,$0 as aO,aA as aP,LA as aQ,WA as aR,tR as aS,MA as aT,jA as aU,cA as aV,X0 as aW,oA as aX,es as aY,Oe as aZ,eR as a_,L0 as aa,xv as ab,V0 as ac,D0 as ad,k0 as ae,N0 as af,x0 as ag,vv as ah,H0 as ai,r0 as aj,I0 as ak,E0 as al,h0 as am,F0 as an,B0 as ao,U0 as ap,d0 as aq,O0 as ar,M0 as as,p0 as at,y0 as au,q0 as av,z0 as aw,Kv as ax,m0 as ay,Em as az,Tv as b,Y0 as b0,Ig as b1,UA as b2,Ut as b3,Z0 as b4,Fi as b5,Eg as b6,fh as b7,En as b8,Sn as b9,zA as ba,qA as bb,KA as bc,BA as bd,J0 as be,Xn as c,_n as d,J as e,p as f,n0 as g,fr as h,Ci as i,ls as j,So as k,Vi as l,Ao as m,ou as n,Zn as o,Ro as p,$v as q,sn as r,v as s,_y as t,re as u,Tc as v,U as w,$A as x,YA as y,Be as z};
