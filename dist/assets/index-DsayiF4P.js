(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var mh={exports:{}},Vo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function QS(){if($g)return Vo;$g=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Vo.Fragment=t,Vo.jsx=i,Vo.jsxs=i,Vo}var t_;function JS(){return t_||(t_=1,mh.exports=QS()),mh.exports}var va=JS(),gh={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function $S(){if(e_)return oe;e_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function E(L){return L===null||typeof L!="object"?null:(L=_&&L[_]||L["@@iterator"],typeof L=="function"?L:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,M={};function S(L,Q,G){this.props=L,this.context=Q,this.refs=M,this.updater=G||A}S.prototype.isReactComponent={},S.prototype.setState=function(L,Q){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,Q,"setState")},S.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function w(){}w.prototype=S.prototype;function P(L,Q,G){this.props=L,this.context=Q,this.refs=M,this.updater=G||A}var N=P.prototype=new w;N.constructor=P,D(N,S.prototype),N.isPureReactComponent=!0;var Y=Array.isArray;function O(){}var B={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function z(L,Q,G){var gt=G.ref;return{$$typeof:o,type:L,key:Q,ref:gt!==void 0?gt:null,props:G}}function K(L,Q){return z(L.type,Q,L.props)}function H(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function $(L){var Q={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(G){return Q[G]})}var ut=/\/+/g;function pt(L,Q){return typeof L=="object"&&L!==null&&L.key!=null?$(""+L.key):Q.toString(36)}function q(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(O,O):(L.status="pending",L.then(function(Q){L.status==="pending"&&(L.status="fulfilled",L.value=Q)},function(Q){L.status==="pending"&&(L.status="rejected",L.reason=Q)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function U(L,Q,G,gt,St){var W=typeof L;(W==="undefined"||W==="boolean")&&(L=null);var xt=!1;if(L===null)xt=!0;else switch(W){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(L.$$typeof){case o:case t:xt=!0;break;case x:return xt=L._init,U(xt(L._payload),Q,G,gt,St)}}if(xt)return St=St(L),xt=gt===""?"."+pt(L,0):gt,Y(St)?(G="",xt!=null&&(G=xt.replace(ut,"$&/")+"/"),U(St,Q,G,"",function(Yt){return Yt})):St!=null&&(H(St)&&(St=K(St,G+(St.key==null||L&&L.key===St.key?"":(""+St.key).replace(ut,"$&/")+"/")+xt)),Q.push(St)),1;xt=0;var yt=gt===""?".":gt+":";if(Y(L))for(var Tt=0;Tt<L.length;Tt++)gt=L[Tt],W=yt+pt(gt,Tt),xt+=U(gt,Q,G,W,St);else if(Tt=E(L),typeof Tt=="function")for(L=Tt.call(L),Tt=0;!(gt=L.next()).done;)gt=gt.value,W=yt+pt(gt,Tt++),xt+=U(gt,Q,G,W,St);else if(W==="object"){if(typeof L.then=="function")return U(q(L),Q,G,gt,St);throw Q=String(L),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return xt}function I(L,Q,G){if(L==null)return L;var gt=[],St=0;return U(L,gt,"","",function(W){return Q.call(G,W,St++)}),gt}function ot(L){if(L._status===-1){var Q=L._result;Q=Q(),Q.then(function(G){(L._status===0||L._status===-1)&&(L._status=1,L._result=G)},function(G){(L._status===0||L._status===-1)&&(L._status=2,L._result=G)}),L._status===-1&&(L._status=0,L._result=Q)}if(L._status===1)return L._result.default;throw L._result}var mt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},Et={map:I,forEach:function(L,Q,G){I(L,function(){Q.apply(this,arguments)},G)},count:function(L){var Q=0;return I(L,function(){Q++}),Q},toArray:function(L){return I(L,function(Q){return Q})||[]},only:function(L){if(!H(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return oe.Activity=v,oe.Children=Et,oe.Component=S,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=P,oe.StrictMode=r,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,oe.__COMPILER_RUNTIME={__proto__:null,c:function(L){return B.H.useMemoCache(L)}},oe.cache=function(L){return function(){return L.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(L,Q,G){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var gt=D({},L.props),St=L.key;if(Q!=null)for(W in Q.key!==void 0&&(St=""+Q.key),Q)!b.call(Q,W)||W==="key"||W==="__self"||W==="__source"||W==="ref"&&Q.ref===void 0||(gt[W]=Q[W]);var W=arguments.length-2;if(W===1)gt.children=G;else if(1<W){for(var xt=Array(W),yt=0;yt<W;yt++)xt[yt]=arguments[yt+2];gt.children=xt}return z(L.type,St,gt)},oe.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},oe.createElement=function(L,Q,G){var gt,St={},W=null;if(Q!=null)for(gt in Q.key!==void 0&&(W=""+Q.key),Q)b.call(Q,gt)&&gt!=="key"&&gt!=="__self"&&gt!=="__source"&&(St[gt]=Q[gt]);var xt=arguments.length-2;if(xt===1)St.children=G;else if(1<xt){for(var yt=Array(xt),Tt=0;Tt<xt;Tt++)yt[Tt]=arguments[Tt+2];St.children=yt}if(L&&L.defaultProps)for(gt in xt=L.defaultProps,xt)St[gt]===void 0&&(St[gt]=xt[gt]);return z(L,W,St)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(L){return{$$typeof:p,render:L}},oe.isValidElement=H,oe.lazy=function(L){return{$$typeof:x,_payload:{_status:-1,_result:L},_init:ot}},oe.memo=function(L,Q){return{$$typeof:d,type:L,compare:Q===void 0?null:Q}},oe.startTransition=function(L){var Q=B.T,G={};B.T=G;try{var gt=L(),St=B.S;St!==null&&St(G,gt),typeof gt=="object"&&gt!==null&&typeof gt.then=="function"&&gt.then(O,mt)}catch(W){mt(W)}finally{Q!==null&&G.types!==null&&(Q.types=G.types),B.T=Q}},oe.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},oe.use=function(L){return B.H.use(L)},oe.useActionState=function(L,Q,G){return B.H.useActionState(L,Q,G)},oe.useCallback=function(L,Q){return B.H.useCallback(L,Q)},oe.useContext=function(L){return B.H.useContext(L)},oe.useDebugValue=function(){},oe.useDeferredValue=function(L,Q){return B.H.useDeferredValue(L,Q)},oe.useEffect=function(L,Q){return B.H.useEffect(L,Q)},oe.useEffectEvent=function(L){return B.H.useEffectEvent(L)},oe.useId=function(){return B.H.useId()},oe.useImperativeHandle=function(L,Q,G){return B.H.useImperativeHandle(L,Q,G)},oe.useInsertionEffect=function(L,Q){return B.H.useInsertionEffect(L,Q)},oe.useLayoutEffect=function(L,Q){return B.H.useLayoutEffect(L,Q)},oe.useMemo=function(L,Q){return B.H.useMemo(L,Q)},oe.useOptimistic=function(L,Q){return B.H.useOptimistic(L,Q)},oe.useReducer=function(L,Q,G){return B.H.useReducer(L,Q,G)},oe.useRef=function(L){return B.H.useRef(L)},oe.useState=function(L){return B.H.useState(L)},oe.useSyncExternalStore=function(L,Q,G){return B.H.useSyncExternalStore(L,Q,G)},oe.useTransition=function(){return B.H.useTransition()},oe.version="19.2.6",oe}var n_;function ep(){return n_||(n_=1,gh.exports=$S()),gh.exports}var vi=ep(),_h={exports:{}},ko={},vh={exports:{}},xh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function tM(){return i_||(i_=1,(function(o){function t(U,I){var ot=U.length;U.push(I);t:for(;0<ot;){var mt=ot-1>>>1,Et=U[mt];if(0<l(Et,I))U[mt]=I,U[ot]=Et,ot=mt;else break t}}function i(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var I=U[0],ot=U.pop();if(ot!==I){U[0]=ot;t:for(var mt=0,Et=U.length,L=Et>>>1;mt<L;){var Q=2*(mt+1)-1,G=U[Q],gt=Q+1,St=U[gt];if(0>l(G,ot))gt<Et&&0>l(St,G)?(U[mt]=St,U[gt]=ot,mt=gt):(U[mt]=G,U[Q]=ot,mt=Q);else if(gt<Et&&0>l(St,ot))U[mt]=St,U[gt]=ot,mt=gt;else break t}}return I}function l(U,I){var ot=U.sortIndex-I.sortIndex;return ot!==0?ot:U.id-I.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();o.unstable_now=function(){return h.now()-p}}var m=[],d=[],x=1,v=null,_=3,E=!1,A=!1,D=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function N(U){for(var I=i(d);I!==null;){if(I.callback===null)r(d);else if(I.startTime<=U)r(d),I.sortIndex=I.expirationTime,t(m,I);else break;I=i(d)}}function Y(U){if(D=!1,N(U),!A)if(i(m)!==null)A=!0,O||(O=!0,$());else{var I=i(d);I!==null&&q(Y,I.startTime-U)}}var O=!1,B=-1,b=5,z=-1;function K(){return M?!0:!(o.unstable_now()-z<b)}function H(){if(M=!1,O){var U=o.unstable_now();z=U;var I=!0;try{t:{A=!1,D&&(D=!1,w(B),B=-1),E=!0;var ot=_;try{e:{for(N(U),v=i(m);v!==null&&!(v.expirationTime>U&&K());){var mt=v.callback;if(typeof mt=="function"){v.callback=null,_=v.priorityLevel;var Et=mt(v.expirationTime<=U);if(U=o.unstable_now(),typeof Et=="function"){v.callback=Et,N(U),I=!0;break e}v===i(m)&&r(m),N(U)}else r(m);v=i(m)}if(v!==null)I=!0;else{var L=i(d);L!==null&&q(Y,L.startTime-U),I=!1}}break t}finally{v=null,_=ot,E=!1}I=void 0}}finally{I?$():O=!1}}}var $;if(typeof P=="function")$=function(){P(H)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,pt=ut.port2;ut.port1.onmessage=H,$=function(){pt.postMessage(null)}}else $=function(){S(H,0)};function q(U,I){B=S(function(){U(o.unstable_now())},I)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(U){U.callback=null},o.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<U?Math.floor(1e3/U):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(U){switch(_){case 1:case 2:case 3:var I=3;break;default:I=_}var ot=_;_=I;try{return U()}finally{_=ot}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(U,I){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ot=_;_=U;try{return I()}finally{_=ot}},o.unstable_scheduleCallback=function(U,I,ot){var mt=o.unstable_now();switch(typeof ot=="object"&&ot!==null?(ot=ot.delay,ot=typeof ot=="number"&&0<ot?mt+ot:mt):ot=mt,U){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=ot+Et,U={id:x++,callback:I,priorityLevel:U,startTime:ot,expirationTime:Et,sortIndex:-1},ot>mt?(U.sortIndex=ot,t(d,U),i(m)===null&&U===i(d)&&(D?(w(B),B=-1):D=!0,q(Y,ot-mt))):(U.sortIndex=Et,t(m,U),A||E||(A=!0,O||(O=!0,$()))),U},o.unstable_shouldYield=K,o.unstable_wrapCallback=function(U){var I=_;return function(){var ot=_;_=I;try{return U.apply(this,arguments)}finally{_=ot}}}})(xh)),xh}var a_;function eM(){return a_||(a_=1,vh.exports=tM()),vh.exports}var Sh={exports:{}},Un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function nM(){if(r_)return Un;r_=1;var o=ep();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)d+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,x){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:d,implementation:x}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Un.createPortal=function(m,d){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(m,d,null,x)},Un.flushSync=function(m){var d=h.T,x=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=d,r.p=x,r.d.f()}},Un.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(m,d))},Un.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Un.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var x=d.as,v=p(x,d.crossOrigin),_=typeof d.integrity=="string"?d.integrity:void 0,E=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;x==="style"?r.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:E}):x==="script"&&r.d.X(m,{crossOrigin:v,integrity:_,fetchPriority:E,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Un.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var x=p(d.as,d.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(m)},Un.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var x=d.as,v=p(x,d.crossOrigin);r.d.L(m,x,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Un.preloadModule=function(m,d){if(typeof m=="string")if(d){var x=p(d.as,d.crossOrigin);r.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(m)},Un.requestFormReset=function(m){r.d.r(m)},Un.unstable_batchedUpdates=function(m,d){return m(d)},Un.useFormState=function(m,d,x){return h.H.useFormState(m,d,x)},Un.useFormStatus=function(){return h.H.useHostTransitionStatus()},Un.version="19.2.6",Un}var s_;function iM(){if(s_)return Sh.exports;s_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Sh.exports=nM(),Sh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_;function aM(){if(o_)return ko;o_=1;var o=eM(),t=ep(),i=iM();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function d(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var g=!1,R=u.child;R;){if(R===a){g=!0,a=u,s=f;break}if(R===s){g=!0,s=u,a=f;break}R=R.sibling}if(!g){for(R=f.child;R;){if(R===a){g=!0,a=f,s=u;break}if(R===s){g=!0,s=f,a=u;break}R=R.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),P=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),K=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var ut=Symbol.for("react.client.reference");function pt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ut?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case Y:return"Suspense";case O:return"SuspenseList";case z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case P:return e.displayName||"Context";case w:return(e._context.displayName||"Context")+".Consumer";case N:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:pt(e.type)||"Memo";case b:n=e._payload,e=e._init;try{return pt(e(n))}catch{}}return null}var q=Array.isArray,U=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot={pending:!1,data:null,method:null,action:null},mt=[],Et=-1;function L(e){return{current:e}}function Q(e){0>Et||(e.current=mt[Et],mt[Et]=null,Et--)}function G(e,n){Et++,mt[Et]=e.current,e.current=n}var gt=L(null),St=L(null),W=L(null),xt=L(null);function yt(e,n){switch(G(W,n),G(St,e),G(gt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?yg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=yg(n),e=Eg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Q(gt),G(gt,e)}function Tt(){Q(gt),Q(St),Q(W)}function Yt(e){e.memoizedState!==null&&G(xt,e);var n=gt.current,a=Eg(n,e.type);n!==a&&(G(St,e),G(gt,a))}function Ht(e){St.current===e&&(Q(gt),Q(St)),xt.current===e&&(Q(xt),Bo._currentValue=ot)}var ae,Kt;function ce(e){if(ae===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ae=n&&n[1]||"",Kt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ae+e+Kt}var Ae=!1;function se(e,n){if(!e||Ae)return"";Ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Mt=function(){throw Error()};if(Object.defineProperty(Mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Mt,[])}catch(lt){var st=lt}Reflect.construct(e,[],Mt)}else{try{Mt.call()}catch(lt){st=lt}e.call(Mt.prototype)}}else{try{throw Error()}catch(lt){st=lt}(Mt=e())&&typeof Mt.catch=="function"&&Mt.catch(function(){})}}catch(lt){if(lt&&st&&typeof lt.stack=="string")return[lt.stack,st.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],R=f[1];if(g&&R){var F=g.split(`
`),nt=R.split(`
`);for(u=s=0;s<F.length&&!F[s].includes("DetermineComponentFrameRoot");)s++;for(;u<nt.length&&!nt[u].includes("DetermineComponentFrameRoot");)u++;if(s===F.length||u===nt.length)for(s=F.length-1,u=nt.length-1;1<=s&&0<=u&&F[s]!==nt[u];)u--;for(;1<=s&&0<=u;s--,u--)if(F[s]!==nt[u]){if(s!==1||u!==1)do if(s--,u--,0>u||F[s]!==nt[u]){var ht=`
`+F[s].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=s&&0<=u);break}}}finally{Ae=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ce(a):""}function ke(e,n){switch(e.tag){case 26:case 27:case 5:return ce(e.type);case 16:return ce("Lazy");case 13:return e.child!==n&&n!==null?ce("Suspense Fallback"):ce("Suspense");case 19:return ce("SuspenseList");case 0:case 15:return se(e.type,!1);case 11:return se(e.type.render,!1);case 1:return se(e.type,!0);case 31:return ce("Activity");default:return""}}function Re(e){try{var n="",a=null;do n+=ke(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Pe=Object.prototype.hasOwnProperty,X=o.unstable_scheduleCallback,ze=o.unstable_cancelCallback,re=o.unstable_shouldYield,Ce=o.unstable_requestPaint,Rt=o.unstable_now,Je=o.unstable_getCurrentPriorityLevel,C=o.unstable_ImmediatePriority,y=o.unstable_UserBlockingPriority,J=o.unstable_NormalPriority,vt=o.unstable_LowPriority,At=o.unstable_IdlePriority,wt=o.log,Nt=o.unstable_setDisableYieldValue,ct=null,ft=null;function Ot(e){if(typeof wt=="function"&&Nt(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(ct,e)}catch{}}var Pt=Math.clz32?Math.clz32:ne,Ut=Math.log,Dt=Math.LN2;function ne(e){return e>>>=0,e===0?32:31-(Ut(e)/Dt|0)|0}var ie=256,me=262144,V=4194304;function Ct(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function dt(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var u=0,f=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var R=s&134217727;return R!==0?(s=R&~f,s!==0?u=Ct(s):(g&=R,g!==0?u=Ct(g):a||(a=R&~e,a!==0&&(u=Ct(a))))):(R=s&~f,R!==0?u=Ct(R):g!==0?u=Ct(g):a||(a=s&~e,a!==0&&(u=Ct(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Bt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Lt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bt(){var e=V;return V<<=1,(V&62914560)===0&&(V=4194304),e}function qt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function te(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nn(e,n,a,s,u,f){var g=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,F=e.expirationTimes,nt=e.hiddenUpdates;for(a=g&~a;0<a;){var ht=31-Pt(a),Mt=1<<ht;R[ht]=0,F[ht]=-1;var st=nt[ht];if(st!==null)for(nt[ht]=null,ht=0;ht<st.length;ht++){var lt=st[ht];lt!==null&&(lt.lane&=-536870913)}a&=~Mt}s!==0&&Le(e,s,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(g&~n))}function Le(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Pt(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function li(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Pt(a),u=1<<s;u&n|e[s]&n&&(e[s]|=n),a&=~u}}function Zn(e,n){var a=n&-n;return a=(a&42)!==0?1:fr(a),(a&(e.suspendedLanes|n))!==0?0:a}function fr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function js(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ks(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:Yg(e.type))}function Qs(e,n){var a=I.p;try{return I.p=e,n()}finally{I.p=a}}var wn=Math.random().toString(36).slice(2),ln="__reactFiber$"+wn,En="__reactProps$"+wn,ji="__reactContainer$"+wn,Aa="__reactEvents$"+wn,sl="__reactListeners$"+wn,kr="__reactHandles$"+wn,Js="__reactResources$"+wn,Ra="__reactMarker$"+wn;function $s(e){delete e[ln],delete e[En],delete e[Aa],delete e[sl],delete e[kr]}function Ca(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ji]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Dg(e);e!==null;){if(a=e[ln])return a;e=Dg(e)}return n}e=a,a=e.parentNode}return null}function wa(e){if(e=e[ln]||e[ji]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function hr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Da(e){var n=e[Js];return n||(n=e[Js]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function fn(e){e[Ra]=!0}var ol=new Set,T={};function Z(e,n){rt(e,n),rt(e+"Capture",n)}function rt(e,n){for(T[e]=n,e=0;e<n.length;e++)ol.add(n[e])}var it=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},It={};function Vt(e){return Pe.call(It,e)?!0:Pe.call(at,e)?!1:it.test(e)?It[e]=!0:(at[e]=!0,!1)}function zt(e,n,a){if(Vt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Xt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function kt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function Qt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ue(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function jt(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function we(e){if(!e._valueTracker){var n=ue(e)?"checked":"value";e._valueTracker=jt(e,n,""+e[n])}}function $e(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=ue(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function Ze(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ie=/[\n"\\]/g;function Be(e){return e.replace(Ie,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Gt(e,n,a,s,u,f,g,R){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),n!=null?g==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Qt(n)):e.value!==""+Qt(n)&&(e.value=""+Qt(n)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),n!=null?ge(e,g,Qt(n)):a!=null?ge(e,g,Qt(a)):s!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+Qt(R):e.removeAttribute("name")}function Dn(e,n,a,s,u,f,g,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){we(e);return}a=a!=null?""+Qt(a):"",n=n!=null?""+Qt(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=R?e.checked:!!s,e.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),we(e)}function ge(e,n,a){n==="number"&&Ze(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function _n(e,n,a,s){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&s&&(e[a].defaultSelected=!0)}else{for(a=""+Qt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function jn(e,n,a){if(n!=null&&(n=""+Qt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Qt(a):""}function yi(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(q(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Qt(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),we(e)}function Kn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Fe=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tn(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||Fe.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ei(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&tn(e,u,s)}else for(var f in n)n.hasOwnProperty(f)&&tn(e,f,n[f])}function Oe(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Li=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ua=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dr(e){return Ua.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ki(){}var fu=null;function hu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xr=null,Wr=null;function Mp(e){var n=wa(e);if(n&&(e=n.stateNode)){var a=e[En]||null;t:switch(e=n.stateNode,n.type){case"input":if(Gt(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Be(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var u=s[En]||null;if(!u)throw Error(r(90));Gt(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&$e(s)}break t;case"textarea":jn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&_n(e,!!a.multiple,n,!1)}}}var du=!1;function yp(e,n,a){if(du)return e(n,a);du=!0;try{var s=e(n);return s}finally{if(du=!1,(Xr!==null||Wr!==null)&&(Zl(),Xr&&(n=Xr,e=Wr,Wr=Xr=null,Mp(n),e)))for(n=0;n<e.length;n++)Mp(e[n])}}function to(e,n){var a=e.stateNode;if(a===null)return null;var s=a[En]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pu=!1;if(Qi)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){pu=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{pu=!1}var La=null,mu=null,ll=null;function Ep(){if(ll)return ll;var e,n=mu,a=n.length,s,u="value"in La?La.value:La.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var g=a-e;for(s=1;s<=g&&n[a-s]===u[f-s];s++);return ll=u.slice(e,1<s?1-s:void 0)}function cl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ul(){return!0}function bp(){return!1}function Gn(e){function n(a,s,u,f,g){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ul:bp,this.isPropagationStopped=bp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),n}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fl=Gn(pr),no=v({},pr,{view:0,detail:0}),jv=Gn(no),gu,_u,io,hl=v({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==io&&(io&&e.type==="mousemove"?(gu=e.screenX-io.screenX,_u=e.screenY-io.screenY):_u=gu=0,io=e),gu)},movementY:function(e){return"movementY"in e?e.movementY:_u}}),Tp=Gn(hl),Kv=v({},hl,{dataTransfer:0}),Qv=Gn(Kv),Jv=v({},no,{relatedTarget:0}),vu=Gn(Jv),$v=v({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),tx=Gn($v),ex=v({},pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nx=Gn(ex),ix=v({},pr,{data:0}),Ap=Gn(ix),ax={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ox(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=sx[e])?!!n[e]:!1}function xu(){return ox}var lx=v({},no,{key:function(e){if(e.key){var n=ax[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=cl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xu,charCode:function(e){return e.type==="keypress"?cl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?cl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cx=Gn(lx),ux=v({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rp=Gn(ux),fx=v({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xu}),hx=Gn(fx),dx=v({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),px=Gn(dx),mx=v({},hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gx=Gn(mx),_x=v({},pr,{newState:0,oldState:0}),vx=Gn(_x),xx=[9,13,27,32],Su=Qi&&"CompositionEvent"in window,ao=null;Qi&&"documentMode"in document&&(ao=document.documentMode);var Sx=Qi&&"TextEvent"in window&&!ao,Cp=Qi&&(!Su||ao&&8<ao&&11>=ao),wp=" ",Dp=!1;function Up(e,n){switch(e){case"keyup":return xx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yr=!1;function Mx(e,n){switch(e){case"compositionend":return Lp(n);case"keypress":return n.which!==32?null:(Dp=!0,wp);case"textInput":return e=n.data,e===wp&&Dp?null:e;default:return null}}function yx(e,n){if(Yr)return e==="compositionend"||!Su&&Up(e,n)?(e=Ep(),ll=mu=La=null,Yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Cp&&n.locale!=="ko"?null:n.data;default:return null}}var Ex={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Np(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ex[e.type]:n==="textarea"}function Op(e,n,a,s){Xr?Wr?Wr.push(s):Wr=[s]:Xr=s,n=ec(n,"onChange"),0<n.length&&(a=new fl("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var ro=null,so=null;function bx(e){gg(e,0)}function dl(e){var n=hr(e);if($e(n))return e}function Pp(e,n){if(e==="change")return n}var zp=!1;if(Qi){var Mu;if(Qi){var yu="oninput"in document;if(!yu){var Ip=document.createElement("div");Ip.setAttribute("oninput","return;"),yu=typeof Ip.oninput=="function"}Mu=yu}else Mu=!1;zp=Mu&&(!document.documentMode||9<document.documentMode)}function Bp(){ro&&(ro.detachEvent("onpropertychange",Fp),so=ro=null)}function Fp(e){if(e.propertyName==="value"&&dl(so)){var n=[];Op(n,so,e,hu(e)),yp(bx,n)}}function Tx(e,n,a){e==="focusin"?(Bp(),ro=n,so=a,ro.attachEvent("onpropertychange",Fp)):e==="focusout"&&Bp()}function Ax(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return dl(so)}function Rx(e,n){if(e==="click")return dl(n)}function Cx(e,n){if(e==="input"||e==="change")return dl(n)}function wx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Qn=typeof Object.is=="function"?Object.is:wx;function oo(e,n){if(Qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Pe.call(n,u)||!Qn(e[u],n[u]))return!1}return!0}function Hp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gp(e,n){var a=Hp(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Hp(a)}}function Vp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Vp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function kp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ze(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Ze(e.document)}return n}function Eu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Dx=Qi&&"documentMode"in document&&11>=document.documentMode,qr=null,bu=null,lo=null,Tu=!1;function Xp(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Tu||qr==null||qr!==Ze(s)||(s=qr,"selectionStart"in s&&Eu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),lo&&oo(lo,s)||(lo=s,s=ec(bu,"onSelect"),0<s.length&&(n=new fl("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=qr)))}function mr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Zr={animationend:mr("Animation","AnimationEnd"),animationiteration:mr("Animation","AnimationIteration"),animationstart:mr("Animation","AnimationStart"),transitionrun:mr("Transition","TransitionRun"),transitionstart:mr("Transition","TransitionStart"),transitioncancel:mr("Transition","TransitionCancel"),transitionend:mr("Transition","TransitionEnd")},Au={},Wp={};Qi&&(Wp=document.createElement("div").style,"AnimationEvent"in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),"TransitionEvent"in window||delete Zr.transitionend.transition);function gr(e){if(Au[e])return Au[e];if(!Zr[e])return e;var n=Zr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Wp)return Au[e]=n[a];return e}var Yp=gr("animationend"),qp=gr("animationiteration"),Zp=gr("animationstart"),Ux=gr("transitionrun"),Lx=gr("transitionstart"),Nx=gr("transitioncancel"),jp=gr("transitionend"),Kp=new Map,Ru="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ru.push("scrollEnd");function bi(e,n){Kp.set(e,n),Z(n,[e])}var pl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ci=[],jr=0,Cu=0;function ml(){for(var e=jr,n=Cu=jr=0;n<e;){var a=ci[n];ci[n++]=null;var s=ci[n];ci[n++]=null;var u=ci[n];ci[n++]=null;var f=ci[n];if(ci[n++]=null,s!==null&&u!==null){var g=s.pending;g===null?u.next=u:(u.next=g.next,g.next=u),s.pending=u}f!==0&&Qp(a,u,f)}}function gl(e,n,a,s){ci[jr++]=e,ci[jr++]=n,ci[jr++]=a,ci[jr++]=s,Cu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function wu(e,n,a,s){return gl(e,n,a,s),_l(e)}function _r(e,n){return gl(e,null,null,n),_l(e)}function Qp(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Pt(a),e=f.hiddenUpdates,s=e[u],s===null?e[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function _l(e){if(50<Uo)throw Uo=0,Ff=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Kr={};function Ox(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(e,n,a,s){return new Ox(e,n,a,s)}function Du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ji(e,n){var a=e.alternate;return a===null?(a=Jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Jp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function vl(e,n,a,s,u,f){var g=0;if(s=e,typeof e=="function")Du(e)&&(g=1);else if(typeof e=="string")g=FS(e,a,gt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case z:return e=Jn(31,a,n,u),e.elementType=z,e.lanes=f,e;case D:return vr(a.children,u,f,n);case M:g=8,u|=24;break;case S:return e=Jn(12,a,n,u|2),e.elementType=S,e.lanes=f,e;case Y:return e=Jn(13,a,n,u),e.elementType=Y,e.lanes=f,e;case O:return e=Jn(19,a,n,u),e.elementType=O,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:g=10;break t;case w:g=9;break t;case N:g=11;break t;case B:g=14;break t;case b:g=16,s=null;break t}g=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Jn(g,a,n,u),n.elementType=e,n.type=s,n.lanes=f,n}function vr(e,n,a,s){return e=Jn(7,e,s,n),e.lanes=a,e}function Uu(e,n,a){return e=Jn(6,e,null,n),e.lanes=a,e}function $p(e){var n=Jn(18,null,null,0);return n.stateNode=e,n}function Lu(e,n,a){return n=Jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var tm=new WeakMap;function ui(e,n){if(typeof e=="object"&&e!==null){var a=tm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Re(n)},tm.set(e,n),n)}return{value:e,source:n,stack:Re(n)}}var Qr=[],Jr=0,xl=null,co=0,fi=[],hi=0,Na=null,Ni=1,Oi="";function $i(e,n){Qr[Jr++]=co,Qr[Jr++]=xl,xl=e,co=n}function em(e,n,a){fi[hi++]=Ni,fi[hi++]=Oi,fi[hi++]=Na,Na=e;var s=Ni;e=Oi;var u=32-Pt(s)-1;s&=~(1<<u),a+=1;var f=32-Pt(n)+u;if(30<f){var g=u-u%5;f=(s&(1<<g)-1).toString(32),s>>=g,u-=g,Ni=1<<32-Pt(n)+u|a<<u|s,Oi=f+e}else Ni=1<<f|a<<u|s,Oi=e}function Nu(e){e.return!==null&&($i(e,1),em(e,1,0))}function Ou(e){for(;e===xl;)xl=Qr[--Jr],Qr[Jr]=null,co=Qr[--Jr],Qr[Jr]=null;for(;e===Na;)Na=fi[--hi],fi[hi]=null,Oi=fi[--hi],fi[hi]=null,Ni=fi[--hi],fi[hi]=null}function nm(e,n){fi[hi++]=Ni,fi[hi++]=Oi,fi[hi++]=Na,Ni=n.id,Oi=n.overflow,Na=e}var bn=null,Ke=null,ye=!1,Oa=null,di=!1,Pu=Error(r(519));function Pa(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw uo(ui(n,e)),Pu}function im(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[ln]=e,n[En]=s,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<No.length;a++)ve(No[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),Dn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),yi(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Sg(n.textContent,a)?(s.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),s.onScroll!=null&&ve("scroll",n),s.onScrollEnd!=null&&ve("scrollend",n),s.onClick!=null&&(n.onclick=Ki),n=!0):n=!1,n||Pa(e,!0)}function am(e){for(bn=e.return;bn;)switch(bn.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:bn=bn.return}}function $r(e){if(e!==bn)return!1;if(!ye)return am(e),ye=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||th(e.type,e.memoizedProps)),a=!a),a&&Ke&&Pa(e),am(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ke=wg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ke=wg(e)}else n===27?(n=Ke,ja(e.type)?(e=rh,rh=null,Ke=e):Ke=n):Ke=bn?mi(e.stateNode.nextSibling):null;return!0}function xr(){Ke=bn=null,ye=!1}function zu(){var e=Oa;return e!==null&&(Wn===null?Wn=e:Wn.push.apply(Wn,e),Oa=null),e}function uo(e){Oa===null?Oa=[e]:Oa.push(e)}var Iu=L(null),Sr=null,ta=null;function za(e,n,a){G(Iu,n._currentValue),n._currentValue=a}function ea(e){e._currentValue=Iu.current,Q(Iu)}function Bu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function Fu(e,n,a,s){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var g=u.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=u;for(var F=0;F<n.length;F++)if(R.context===n[F]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Bu(f.return,a,e),s||(g=null);break t}f=R.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),Bu(g,a,e),g=null}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===e){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function ts(e,n,a,s){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var R=u.type;Qn(u.pendingProps.value,g.value)||(e!==null?e.push(R):e=[R])}}else if(u===xt.current){if(g=u.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Bo):e=[Bo])}u=u.return}e!==null&&Fu(n,e,a,s),n.flags|=262144}function Sl(e){for(e=e.firstContext;e!==null;){if(!Qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Mr(e){Sr=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return rm(Sr,e)}function Ml(e,n){return Sr===null&&Mr(e),rm(e,n)}function rm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ta===null){if(e===null)throw Error(r(308));ta=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ta=ta.next=n;return a}var Px=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},zx=o.unstable_scheduleCallback,Ix=o.unstable_NormalPriority,hn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hu(){return{controller:new Px,data:new Map,refCount:0}}function fo(e){e.refCount--,e.refCount===0&&zx(Ix,function(){e.controller.abort()})}var ho=null,Gu=0,es=0,ns=null;function Bx(e,n){if(ho===null){var a=ho=[];Gu=0,es=Wf(),ns={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Gu++,n.then(sm,sm),n}function sm(){if(--Gu===0&&ho!==null){ns!==null&&(ns.status="fulfilled");var e=ho;ho=null,es=0,ns=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Fx(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var om=U.S;U.S=function(e,n){X0=Rt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Bx(e,n),om!==null&&om(e,n)};var yr=L(null);function Vu(){var e=yr.current;return e!==null?e:je.pooledCache}function yl(e,n){n===null?G(yr,yr.current):G(yr,n.pool)}function lm(){var e=Vu();return e===null?null:{parent:hn._currentValue,pool:e}}var is=Error(r(460)),ku=Error(r(474)),El=Error(r(542)),bl={then:function(){}};function cm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function um(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ki,Ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,hm(e),e;default:if(typeof n.status=="string")n.then(Ki,Ki);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,hm(e),e}throw br=n,is}}function Er(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(br=a,is):a}}var br=null;function fm(){if(br===null)throw Error(r(459));var e=br;return br=null,e}function hm(e){if(e===is||e===El)throw Error(r(483))}var as=null,po=0;function Tl(e){var n=po;return po+=1,as===null&&(as=[]),um(as,e,n)}function mo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Al(e,n){throw n.$$typeof===_?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function dm(e){function n(j,k){if(e){var et=j.deletions;et===null?(j.deletions=[k],j.flags|=16):et.push(k)}}function a(j,k){if(!e)return null;for(;k!==null;)n(j,k),k=k.sibling;return null}function s(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function u(j,k){return j=Ji(j,k),j.index=0,j.sibling=null,j}function f(j,k,et){return j.index=et,e?(et=j.alternate,et!==null?(et=et.index,et<k?(j.flags|=67108866,k):et):(j.flags|=67108866,k)):(j.flags|=1048576,k)}function g(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function R(j,k,et,_t){return k===null||k.tag!==6?(k=Uu(et,j.mode,_t),k.return=j,k):(k=u(k,et),k.return=j,k)}function F(j,k,et,_t){var Jt=et.type;return Jt===D?ht(j,k,et.props.children,_t,et.key):k!==null&&(k.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===b&&Er(Jt)===k.type)?(k=u(k,et.props),mo(k,et),k.return=j,k):(k=vl(et.type,et.key,et.props,null,j.mode,_t),mo(k,et),k.return=j,k)}function nt(j,k,et,_t){return k===null||k.tag!==4||k.stateNode.containerInfo!==et.containerInfo||k.stateNode.implementation!==et.implementation?(k=Lu(et,j.mode,_t),k.return=j,k):(k=u(k,et.children||[]),k.return=j,k)}function ht(j,k,et,_t,Jt){return k===null||k.tag!==7?(k=vr(et,j.mode,_t,Jt),k.return=j,k):(k=u(k,et),k.return=j,k)}function Mt(j,k,et){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Uu(""+k,j.mode,et),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case E:return et=vl(k.type,k.key,k.props,null,j.mode,et),mo(et,k),et.return=j,et;case A:return k=Lu(k,j.mode,et),k.return=j,k;case b:return k=Er(k),Mt(j,k,et)}if(q(k)||$(k))return k=vr(k,j.mode,et,null),k.return=j,k;if(typeof k.then=="function")return Mt(j,Tl(k),et);if(k.$$typeof===P)return Mt(j,Ml(j,k),et);Al(j,k)}return null}function st(j,k,et,_t){var Jt=k!==null?k.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Jt!==null?null:R(j,k,""+et,_t);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case E:return et.key===Jt?F(j,k,et,_t):null;case A:return et.key===Jt?nt(j,k,et,_t):null;case b:return et=Er(et),st(j,k,et,_t)}if(q(et)||$(et))return Jt!==null?null:ht(j,k,et,_t,null);if(typeof et.then=="function")return st(j,k,Tl(et),_t);if(et.$$typeof===P)return st(j,k,Ml(j,et),_t);Al(j,et)}return null}function lt(j,k,et,_t,Jt){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return j=j.get(et)||null,R(k,j,""+_t,Jt);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case E:return j=j.get(_t.key===null?et:_t.key)||null,F(k,j,_t,Jt);case A:return j=j.get(_t.key===null?et:_t.key)||null,nt(k,j,_t,Jt);case b:return _t=Er(_t),lt(j,k,et,_t,Jt)}if(q(_t)||$(_t))return j=j.get(et)||null,ht(k,j,_t,Jt,null);if(typeof _t.then=="function")return lt(j,k,et,Tl(_t),Jt);if(_t.$$typeof===P)return lt(j,k,et,Ml(k,_t),Jt);Al(k,_t)}return null}function Wt(j,k,et,_t){for(var Jt=null,De=null,Zt=k,he=k=0,Se=null;Zt!==null&&he<et.length;he++){Zt.index>he?(Se=Zt,Zt=null):Se=Zt.sibling;var Ue=st(j,Zt,et[he],_t);if(Ue===null){Zt===null&&(Zt=Se);break}e&&Zt&&Ue.alternate===null&&n(j,Zt),k=f(Ue,k,he),De===null?Jt=Ue:De.sibling=Ue,De=Ue,Zt=Se}if(he===et.length)return a(j,Zt),ye&&$i(j,he),Jt;if(Zt===null){for(;he<et.length;he++)Zt=Mt(j,et[he],_t),Zt!==null&&(k=f(Zt,k,he),De===null?Jt=Zt:De.sibling=Zt,De=Zt);return ye&&$i(j,he),Jt}for(Zt=s(Zt);he<et.length;he++)Se=lt(Zt,j,he,et[he],_t),Se!==null&&(e&&Se.alternate!==null&&Zt.delete(Se.key===null?he:Se.key),k=f(Se,k,he),De===null?Jt=Se:De.sibling=Se,De=Se);return e&&Zt.forEach(function(tr){return n(j,tr)}),ye&&$i(j,he),Jt}function $t(j,k,et,_t){if(et==null)throw Error(r(151));for(var Jt=null,De=null,Zt=k,he=k=0,Se=null,Ue=et.next();Zt!==null&&!Ue.done;he++,Ue=et.next()){Zt.index>he?(Se=Zt,Zt=null):Se=Zt.sibling;var tr=st(j,Zt,Ue.value,_t);if(tr===null){Zt===null&&(Zt=Se);break}e&&Zt&&tr.alternate===null&&n(j,Zt),k=f(tr,k,he),De===null?Jt=tr:De.sibling=tr,De=tr,Zt=Se}if(Ue.done)return a(j,Zt),ye&&$i(j,he),Jt;if(Zt===null){for(;!Ue.done;he++,Ue=et.next())Ue=Mt(j,Ue.value,_t),Ue!==null&&(k=f(Ue,k,he),De===null?Jt=Ue:De.sibling=Ue,De=Ue);return ye&&$i(j,he),Jt}for(Zt=s(Zt);!Ue.done;he++,Ue=et.next())Ue=lt(Zt,j,he,Ue.value,_t),Ue!==null&&(e&&Ue.alternate!==null&&Zt.delete(Ue.key===null?he:Ue.key),k=f(Ue,k,he),De===null?Jt=Ue:De.sibling=Ue,De=Ue);return e&&Zt.forEach(function(KS){return n(j,KS)}),ye&&$i(j,he),Jt}function Ye(j,k,et,_t){if(typeof et=="object"&&et!==null&&et.type===D&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case E:t:{for(var Jt=et.key;k!==null;){if(k.key===Jt){if(Jt=et.type,Jt===D){if(k.tag===7){a(j,k.sibling),_t=u(k,et.props.children),_t.return=j,j=_t;break t}}else if(k.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===b&&Er(Jt)===k.type){a(j,k.sibling),_t=u(k,et.props),mo(_t,et),_t.return=j,j=_t;break t}a(j,k);break}else n(j,k);k=k.sibling}et.type===D?(_t=vr(et.props.children,j.mode,_t,et.key),_t.return=j,j=_t):(_t=vl(et.type,et.key,et.props,null,j.mode,_t),mo(_t,et),_t.return=j,j=_t)}return g(j);case A:t:{for(Jt=et.key;k!==null;){if(k.key===Jt)if(k.tag===4&&k.stateNode.containerInfo===et.containerInfo&&k.stateNode.implementation===et.implementation){a(j,k.sibling),_t=u(k,et.children||[]),_t.return=j,j=_t;break t}else{a(j,k);break}else n(j,k);k=k.sibling}_t=Lu(et,j.mode,_t),_t.return=j,j=_t}return g(j);case b:return et=Er(et),Ye(j,k,et,_t)}if(q(et))return Wt(j,k,et,_t);if($(et)){if(Jt=$(et),typeof Jt!="function")throw Error(r(150));return et=Jt.call(et),$t(j,k,et,_t)}if(typeof et.then=="function")return Ye(j,k,Tl(et),_t);if(et.$$typeof===P)return Ye(j,k,Ml(j,et),_t);Al(j,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,k!==null&&k.tag===6?(a(j,k.sibling),_t=u(k,et),_t.return=j,j=_t):(a(j,k),_t=Uu(et,j.mode,_t),_t.return=j,j=_t),g(j)):a(j,k)}return function(j,k,et,_t){try{po=0;var Jt=Ye(j,k,et,_t);return as=null,Jt}catch(Zt){if(Zt===is||Zt===El)throw Zt;var De=Jn(29,Zt,null,j.mode);return De.lanes=_t,De.return=j,De}finally{}}}var Tr=dm(!0),pm=dm(!1),Ia=!1;function Xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fa(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Ne&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=_l(e),Qp(e,null,a),n}return gl(e,s,n,a),_l(e)}function go(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,li(e,a)}}function Yu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var qu=!1;function _o(){if(qu){var e=ns;if(e!==null)throw e}}function vo(e,n,a,s){qu=!1;var u=e.updateQueue;Ia=!1;var f=u.firstBaseUpdate,g=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var F=R,nt=F.next;F.next=null,g===null?f=nt:g.next=nt,g=F;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,R=ht.lastBaseUpdate,R!==g&&(R===null?ht.firstBaseUpdate=nt:R.next=nt,ht.lastBaseUpdate=F))}if(f!==null){var Mt=u.baseState;g=0,ht=nt=F=null,R=f;do{var st=R.lane&-536870913,lt=st!==R.lane;if(lt?(xe&st)===st:(s&st)===st){st!==0&&st===es&&(qu=!0),ht!==null&&(ht=ht.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Wt=e,$t=R;st=n;var Ye=a;switch($t.tag){case 1:if(Wt=$t.payload,typeof Wt=="function"){Mt=Wt.call(Ye,Mt,st);break t}Mt=Wt;break t;case 3:Wt.flags=Wt.flags&-65537|128;case 0:if(Wt=$t.payload,st=typeof Wt=="function"?Wt.call(Ye,Mt,st):Wt,st==null)break t;Mt=v({},Mt,st);break t;case 2:Ia=!0}}st=R.callback,st!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[st]:lt.push(st))}else lt={lane:st,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ht===null?(nt=ht=lt,F=Mt):ht=ht.next=lt,g|=st;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;lt=R,R=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);ht===null&&(F=Mt),u.baseState=F,u.firstBaseUpdate=nt,u.lastBaseUpdate=ht,f===null&&(u.shared.lanes=0),Xa|=g,e.lanes=g,e.memoizedState=Mt}}function mm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function gm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)mm(a[e],n)}var rs=L(null),Rl=L(0);function _m(e,n){e=ua,G(Rl,e),G(rs,n),ua=e|n.baseLanes}function Zu(){G(Rl,ua),G(rs,rs.current)}function ju(){ua=Rl.current,Q(rs),Q(Rl)}var $n=L(null),pi=null;function Ha(e){var n=e.alternate;G(cn,cn.current&1),G($n,e),pi===null&&(n===null||rs.current!==null||n.memoizedState!==null)&&(pi=e)}function Ku(e){G(cn,cn.current),G($n,e),pi===null&&(pi=e)}function vm(e){e.tag===22?(G(cn,cn.current),G($n,e),pi===null&&(pi=e)):Ga()}function Ga(){G(cn,cn.current),G($n,$n.current)}function ti(e){Q($n),pi===e&&(pi=null),Q(cn)}var cn=L(0);function Cl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ih(a)||ah(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var na=0,fe=null,Xe=null,dn=null,wl=!1,ss=!1,Ar=!1,Dl=0,xo=0,os=null,Hx=0;function an(){throw Error(r(321))}function Qu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Qn(e[a],n[a]))return!1;return!0}function Ju(e,n,a,s,u,f){return na=f,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=e===null||e.memoizedState===null?e0:pf,Ar=!1,f=a(s,u),Ar=!1,ss&&(f=Sm(n,a,s,u)),xm(e),f}function xm(e){U.H=yo;var n=Xe!==null&&Xe.next!==null;if(na=0,dn=Xe=fe=null,wl=!1,xo=0,os=null,n)throw Error(r(300));e===null||pn||(e=e.dependencies,e!==null&&Sl(e)&&(pn=!0))}function Sm(e,n,a,s){fe=e;var u=0;do{if(ss&&(os=null),xo=0,ss=!1,25<=u)throw Error(r(301));if(u+=1,dn=Xe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}U.H=n0,f=n(a,s)}while(ss);return f}function Gx(){var e=U.H,n=e.useState()[0];return n=typeof n.then=="function"?So(n):n,e=e.useState()[0],(Xe!==null?Xe.memoizedState:null)!==e&&(fe.flags|=1024),n}function $u(){var e=Dl!==0;return Dl=0,e}function tf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function ef(e){if(wl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}wl=!1}na=0,dn=Xe=fe=null,ss=!1,xo=Dl=0,os=null}function In(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?fe.memoizedState=dn=e:dn=dn.next=e,dn}function un(){if(Xe===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var n=dn===null?fe.memoizedState:dn.next;if(n!==null)dn=n,Xe=e;else{if(e===null)throw fe.alternate===null?Error(r(467)):Error(r(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},dn===null?fe.memoizedState=dn=e:dn=dn.next=e}return dn}function Ul(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function So(e){var n=xo;return xo+=1,os===null&&(os=[]),e=um(os,e,n),n=fe,(dn===null?n.memoizedState:dn.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?e0:pf),e}function Ll(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return So(e);if(e.$$typeof===P)return Tn(e)}throw Error(r(438,String(e)))}function nf(e){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=fe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ul(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=K;return n.index++,a}function ia(e,n){return typeof n=="function"?n(e):n}function Nl(e){var n=un();return af(n,Xe,e)}function af(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=e.baseQueue,f=s.pending;if(f!==null){if(u!==null){var g=u.next;u.next=f.next,f.next=g}n.baseQueue=u=f,s.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=g=null,F=null,nt=n,ht=!1;do{var Mt=nt.lane&-536870913;if(Mt!==nt.lane?(xe&Mt)===Mt:(na&Mt)===Mt){var st=nt.revertLane;if(st===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),Mt===es&&(ht=!0);else if((na&st)===st){nt=nt.next,st===es&&(ht=!0);continue}else Mt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},F===null?(R=F=Mt,g=f):F=F.next=Mt,fe.lanes|=st,Xa|=st;Mt=nt.action,Ar&&a(f,Mt),f=nt.hasEagerState?nt.eagerState:a(f,Mt)}else st={lane:Mt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},F===null?(R=F=st,g=f):F=F.next=st,fe.lanes|=Mt,Xa|=Mt;nt=nt.next}while(nt!==null&&nt!==n);if(F===null?g=f:F.next=R,!Qn(f,e.memoizedState)&&(pn=!0,ht&&(a=ns,a!==null)))throw a;e.memoizedState=f,e.baseState=g,e.baseQueue=F,s.lastRenderedState=f}return u===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function rf(e){var n=un(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do f=e(f,g.action),g=g.next;while(g!==u);Qn(f,n.memoizedState)||(pn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Mm(e,n,a){var s=fe,u=un(),f=ye;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!Qn((Xe||u).memoizedState,a);if(g&&(u.memoizedState=a,pn=!0),u=u.queue,lf(bm.bind(null,s,u,e),[e]),u.getSnapshot!==n||g||dn!==null&&dn.memoizedState.tag&1){if(s.flags|=2048,ls(9,{destroy:void 0},Em.bind(null,s,u,a,n),null),je===null)throw Error(r(349));f||(na&127)!==0||ym(s,n,a)}return a}function ym(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=Ul(),fe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Em(e,n,a,s){n.value=a,n.getSnapshot=s,Tm(n)&&Am(e)}function bm(e,n,a){return a(function(){Tm(n)&&Am(e)})}function Tm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Qn(e,a)}catch{return!0}}function Am(e){var n=_r(e,2);n!==null&&Yn(n,e,2)}function sf(e){var n=In();if(typeof e=="function"){var a=e;if(e=a(),Ar){Ot(!0);try{a()}finally{Ot(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:e},n}function Rm(e,n,a,s){return e.baseState=a,af(e,Xe,typeof s=="function"?s:ia)}function Vx(e,n,a,s,u){if(zl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};U.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Cm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Cm(e,n){var a=n.action,s=n.payload,u=e.state;if(n.isTransition){var f=U.T,g={};U.T=g;try{var R=a(u,s),F=U.S;F!==null&&F(g,R),wm(e,n,R)}catch(nt){of(e,n,nt)}finally{f!==null&&g.types!==null&&(f.types=g.types),U.T=f}}else try{f=a(u,s),wm(e,n,f)}catch(nt){of(e,n,nt)}}function wm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Dm(e,n,s)},function(s){return of(e,n,s)}):Dm(e,n,a)}function Dm(e,n,a){n.status="fulfilled",n.value=a,Um(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Cm(e,a)))}function of(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Um(n),n=n.next;while(n!==s)}e.action=null}function Um(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Lm(e,n){return n}function Nm(e,n){if(ye){var a=je.formState;if(a!==null){t:{var s=fe;if(ye){if(Ke){e:{for(var u=Ke,f=di;u.nodeType!==8;){if(!f){u=null;break e}if(u=mi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ke=mi(u.nextSibling),s=u.data==="F!";break t}}Pa(s)}s=!1}s&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lm,lastRenderedState:n},a.queue=s,a=Jm.bind(null,fe,s),s.dispatch=a,s=sf(!1),f=df.bind(null,fe,!1,s.queue),s=In(),u={state:n,dispatch:null,action:e,pending:null},s.queue=u,a=Vx.bind(null,fe,u,f,a),u.dispatch=a,s.memoizedState=e,[n,a,!1]}function Om(e){var n=un();return Pm(n,Xe,e)}function Pm(e,n,a){if(n=af(e,n,Lm)[0],e=Nl(ia)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=So(n)}catch(g){throw g===is?El:g}else s=n;n=un();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(fe.flags|=2048,ls(9,{destroy:void 0},kx.bind(null,u,a),null)),[s,f,e]}function kx(e,n){e.action=n}function zm(e){var n=un(),a=Xe;if(a!==null)return Pm(n,a,e);un(),n=n.memoizedState,a=un();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function ls(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=fe.updateQueue,n===null&&(n=Ul(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function Im(){return un().memoizedState}function Ol(e,n,a,s){var u=In();fe.flags|=e,u.memoizedState=ls(1|n,{destroy:void 0},a,s===void 0?null:s)}function Pl(e,n,a,s){var u=un();s=s===void 0?null:s;var f=u.memoizedState.inst;Xe!==null&&s!==null&&Qu(s,Xe.memoizedState.deps)?u.memoizedState=ls(n,f,a,s):(fe.flags|=e,u.memoizedState=ls(1|n,f,a,s))}function Bm(e,n){Ol(8390656,8,e,n)}function lf(e,n){Pl(2048,8,e,n)}function Xx(e){fe.flags|=4;var n=fe.updateQueue;if(n===null)n=Ul(),fe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Fm(e){var n=un().memoizedState;return Xx({ref:n,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Hm(e,n){return Pl(4,2,e,n)}function Gm(e,n){return Pl(4,4,e,n)}function Vm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function km(e,n,a){a=a!=null?a.concat([e]):null,Pl(4,4,Vm.bind(null,n,e),a)}function cf(){}function Xm(e,n){var a=un();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Qu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function Wm(e,n){var a=un();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Qu(n,s[1]))return s[0];if(s=e(),Ar){Ot(!0);try{e()}finally{Ot(!1)}}return a.memoizedState=[s,n],s}function uf(e,n,a){return a===void 0||(na&1073741824)!==0&&(xe&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Y0(),fe.lanes|=e,Xa|=e,a)}function Ym(e,n,a,s){return Qn(a,n)?a:rs.current!==null?(e=uf(e,a,s),Qn(e,n)||(pn=!0),e):(na&42)===0||(na&1073741824)!==0&&(xe&261930)===0?(pn=!0,e.memoizedState=a):(e=Y0(),fe.lanes|=e,Xa|=e,n)}function qm(e,n,a,s,u){var f=I.p;I.p=f!==0&&8>f?f:8;var g=U.T,R={};U.T=R,df(e,!1,n,a);try{var F=u(),nt=U.S;if(nt!==null&&nt(R,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ht=Fx(F,s);Mo(e,n,ht,ii(e))}else Mo(e,n,s,ii(e))}catch(Mt){Mo(e,n,{then:function(){},status:"rejected",reason:Mt},ii())}finally{I.p=f,g!==null&&R.types!==null&&(g.types=R.types),U.T=g}}function Wx(){}function ff(e,n,a,s){if(e.tag!==5)throw Error(r(476));var u=Zm(e).queue;qm(e,u,n,ot,a===null?Wx:function(){return jm(e),a(s)})}function Zm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ot,baseState:ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:ot},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function jm(e){var n=Zm(e);n.next===null&&(n=e.alternate.memoizedState),Mo(e,n.next.queue,{},ii())}function hf(){return Tn(Bo)}function Km(){return un().memoizedState}function Qm(){return un().memoizedState}function Yx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ii();e=Ba(a);var s=Fa(n,e,a);s!==null&&(Yn(s,n,a),go(s,n,a)),n={cache:Hu()},e.payload=n;return}n=n.return}}function qx(e,n,a){var s=ii();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},zl(e)?$m(n,a):(a=wu(e,n,a,s),a!==null&&(Yn(a,e,s),t0(a,n,s)))}function Jm(e,n,a){var s=ii();Mo(e,n,a,s)}function Mo(e,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(zl(e))$m(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,R=f(g,a);if(u.hasEagerState=!0,u.eagerState=R,Qn(R,g))return gl(e,n,u,0),je===null&&ml(),!1}catch{}finally{}if(a=wu(e,n,u,s),a!==null)return Yn(a,e,s),t0(a,n,s),!0}return!1}function df(e,n,a,s){if(s={lane:2,revertLane:Wf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},zl(e)){if(n)throw Error(r(479))}else n=wu(e,a,s,2),n!==null&&Yn(n,e,2)}function zl(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function $m(e,n){ss=wl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function t0(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,li(e,a)}}var yo={readContext:Tn,use:Ll,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};yo.useEffectEvent=an;var e0={readContext:Tn,use:Ll,useCallback:function(e,n){return In().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:Bm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ol(4194308,4,Vm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ol(4194308,4,e,n)},useInsertionEffect:function(e,n){Ol(4,2,e,n)},useMemo:function(e,n){var a=In();n=n===void 0?null:n;var s=e();if(Ar){Ot(!0);try{e()}finally{Ot(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=In();if(a!==void 0){var u=a(n);if(Ar){Ot(!0);try{a(n)}finally{Ot(!1)}}}else u=n;return s.memoizedState=s.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},s.queue=e,e=e.dispatch=qx.bind(null,fe,e),[s.memoizedState,e]},useRef:function(e){var n=In();return e={current:e},n.memoizedState=e},useState:function(e){e=sf(e);var n=e.queue,a=Jm.bind(null,fe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:cf,useDeferredValue:function(e,n){var a=In();return uf(a,e,n)},useTransition:function(){var e=sf(!1);return e=qm.bind(null,fe,e.queue,!0,!1),In().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=fe,u=In();if(ye){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),je===null)throw Error(r(349));(xe&127)!==0||ym(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Bm(bm.bind(null,s,f,e),[e]),s.flags|=2048,ls(9,{destroy:void 0},Em.bind(null,s,f,a,n),null),a},useId:function(){var e=In(),n=je.identifierPrefix;if(ye){var a=Oi,s=Ni;a=(s&~(1<<32-Pt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Dl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Hx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:hf,useFormState:Nm,useActionState:Nm,useOptimistic:function(e){var n=In();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=df.bind(null,fe,!0,a),a.dispatch=n,[e,n]},useMemoCache:nf,useCacheRefresh:function(){return In().memoizedState=Yx.bind(null,fe)},useEffectEvent:function(e){var n=In(),a={impl:e};return n.memoizedState=a,function(){if((Ne&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},pf={readContext:Tn,use:Ll,useCallback:Xm,useContext:Tn,useEffect:lf,useImperativeHandle:km,useInsertionEffect:Hm,useLayoutEffect:Gm,useMemo:Wm,useReducer:Nl,useRef:Im,useState:function(){return Nl(ia)},useDebugValue:cf,useDeferredValue:function(e,n){var a=un();return Ym(a,Xe.memoizedState,e,n)},useTransition:function(){var e=Nl(ia)[0],n=un().memoizedState;return[typeof e=="boolean"?e:So(e),n]},useSyncExternalStore:Mm,useId:Km,useHostTransitionStatus:hf,useFormState:Om,useActionState:Om,useOptimistic:function(e,n){var a=un();return Rm(a,Xe,e,n)},useMemoCache:nf,useCacheRefresh:Qm};pf.useEffectEvent=Fm;var n0={readContext:Tn,use:Ll,useCallback:Xm,useContext:Tn,useEffect:lf,useImperativeHandle:km,useInsertionEffect:Hm,useLayoutEffect:Gm,useMemo:Wm,useReducer:rf,useRef:Im,useState:function(){return rf(ia)},useDebugValue:cf,useDeferredValue:function(e,n){var a=un();return Xe===null?uf(a,e,n):Ym(a,Xe.memoizedState,e,n)},useTransition:function(){var e=rf(ia)[0],n=un().memoizedState;return[typeof e=="boolean"?e:So(e),n]},useSyncExternalStore:Mm,useId:Km,useHostTransitionStatus:hf,useFormState:zm,useActionState:zm,useOptimistic:function(e,n){var a=un();return Xe!==null?Rm(a,Xe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:nf,useCacheRefresh:Qm};n0.useEffectEvent=Fm;function mf(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var gf={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=ii(),u=Ba(s);u.payload=n,a!=null&&(u.callback=a),n=Fa(e,u,s),n!==null&&(Yn(n,e,s),go(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=ii(),u=Ba(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Fa(e,u,s),n!==null&&(Yn(n,e,s),go(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ii(),s=Ba(a);s.tag=2,n!=null&&(s.callback=n),n=Fa(e,s,a),n!==null&&(Yn(n,e,a),go(n,e,a))}};function i0(e,n,a,s,u,f,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!oo(a,s)||!oo(u,f):!0}function a0(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&gf.enqueueReplaceState(n,n.state,null)}function Rr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function r0(e){pl(e)}function s0(e){console.error(e)}function o0(e){pl(e)}function Il(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function l0(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function _f(e,n,a){return a=Ba(a),a.tag=3,a.payload={element:null},a.callback=function(){Il(e,n)},a}function c0(e){return e=Ba(e),e.tag=3,e}function u0(e,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;e.payload=function(){return u(f)},e.callback=function(){l0(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){l0(n,a,s),typeof u!="function"&&(Wa===null?Wa=new Set([this]):Wa.add(this));var R=s.stack;this.componentDidCatch(s.value,{componentStack:R!==null?R:""})})}function Zx(e,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&ts(n,a,u,!0),a=$n.current,a!==null){switch(a.tag){case 31:case 13:return pi===null?jl():a.alternate===null&&rn===0&&(rn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===bl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Vf(e,s,u)),!1;case 22:return a.flags|=65536,s===bl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Vf(e,s,u)),!1}throw Error(r(435,a.tag))}return Vf(e,s,u),jl(),!1}if(ye)return n=$n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Pu&&(e=Error(r(422),{cause:s}),uo(ui(e,a)))):(s!==Pu&&(n=Error(r(423),{cause:s}),uo(ui(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,s=ui(s,a),u=_f(e.stateNode,s,u),Yu(e,u),rn!==4&&(rn=2)),!1;var f=Error(r(520),{cause:s});if(f=ui(f,a),Do===null?Do=[f]:Do.push(f),rn!==4&&(rn=2),n===null)return!0;s=ui(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=_f(a.stateNode,s,e),Yu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Wa===null||!Wa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=c0(u),u0(u,e,a,s),Yu(a,u),!1}a=a.return}while(a!==null);return!1}var vf=Error(r(461)),pn=!1;function An(e,n,a,s){n.child=e===null?pm(n,null,a,s):Tr(n,e.child,a,s)}function f0(e,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var R in s)R!=="ref"&&(g[R]=s[R])}else g=s;return Mr(n),s=Ju(e,n,a,g,f,u),R=$u(),e!==null&&!pn?(tf(e,n,u),aa(e,n,u)):(ye&&R&&Nu(n),n.flags|=1,An(e,n,s,u),n.child)}function h0(e,n,a,s,u){if(e===null){var f=a.type;return typeof f=="function"&&!Du(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,d0(e,n,f,s,u)):(e=vl(a.type,null,s,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Af(e,u)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:oo,a(g,s)&&e.ref===n.ref)return aa(e,n,u)}return n.flags|=1,e=Ji(f,s),e.ref=n.ref,e.return=n,n.child=e}function d0(e,n,a,s,u){if(e!==null){var f=e.memoizedProps;if(oo(f,s)&&e.ref===n.ref)if(pn=!1,n.pendingProps=s=f,Af(e,u))(e.flags&131072)!==0&&(pn=!0);else return n.lanes=e.lanes,aa(e,n,u)}return xf(e,n,a,s,u)}function p0(e,n,a,s){var u=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return m0(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&yl(n,f!==null?f.cachePool:null),f!==null?_m(n,f):Zu(),vm(n);else return s=n.lanes=536870912,m0(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(yl(n,f.cachePool),_m(n,f),Ga(),n.memoizedState=null):(e!==null&&yl(n,null),Zu(),Ga());return An(e,n,u,a),n.child}function Eo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function m0(e,n,a,s,u){var f=Vu();return f=f===null?null:{parent:hn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&yl(n,null),Zu(),vm(n),e!==null&&ts(e,n,s,!0),n.childLanes=u,null}function Bl(e,n){return n=Hl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function g0(e,n,a){return Tr(n,e.child,null,a),e=Bl(n,n.pendingProps),e.flags|=2,ti(n),n.memoizedState=null,e}function jx(e,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(ye){if(s.mode==="hidden")return e=Bl(n,s),n.lanes=536870912,Eo(null,e);if(Ku(n),(e=Ke)?(e=Cg(e,di),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Na!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=$p(e),a.return=n,n.child=a,bn=n,Ke=null)):e=null,e===null)throw Pa(n);return n.lanes=536870912,null}return Bl(n,s)}var f=e.memoizedState;if(f!==null){var g=f.dehydrated;if(Ku(n),u)if(n.flags&256)n.flags&=-257,n=g0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(pn||ts(e,n,a,!1),u=(a&e.childLanes)!==0,pn||u){if(s=je,s!==null&&(g=Zn(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,_r(e,g),Yn(s,e,g),vf;jl(),n=g0(e,n,a)}else e=f.treeContext,Ke=mi(g.nextSibling),bn=n,ye=!0,Oa=null,di=!1,e!==null&&nm(n,e),n=Bl(n,s),n.flags|=4096;return n}return e=Ji(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Fl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function xf(e,n,a,s,u){return Mr(n),a=Ju(e,n,a,s,void 0,u),s=$u(),e!==null&&!pn?(tf(e,n,u),aa(e,n,u)):(ye&&s&&Nu(n),n.flags|=1,An(e,n,a,u),n.child)}function _0(e,n,a,s,u,f){return Mr(n),n.updateQueue=null,a=Sm(n,s,a,u),xm(e),s=$u(),e!==null&&!pn?(tf(e,n,f),aa(e,n,f)):(ye&&s&&Nu(n),n.flags|=1,An(e,n,a,f),n.child)}function v0(e,n,a,s,u){if(Mr(n),n.stateNode===null){var f=Kr,g=a.contextType;typeof g=="object"&&g!==null&&(f=Tn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=gf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Xu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Tn(g):Kr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(mf(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&gf.enqueueReplaceState(f,f.state,null),vo(n,s,f,u),_o(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,F=Rr(a,R);f.props=F;var nt=f.context,ht=a.contextType;g=Kr,typeof ht=="object"&&ht!==null&&(g=Tn(ht));var Mt=a.getDerivedStateFromProps;ht=typeof Mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||nt!==g)&&a0(n,f,s,g),Ia=!1;var st=n.memoizedState;f.state=st,vo(n,s,f,u),_o(),nt=n.memoizedState,R||st!==nt||Ia?(typeof Mt=="function"&&(mf(n,a,Mt,s),nt=n.memoizedState),(F=Ia||i0(n,a,F,s,st,nt,g))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=nt),f.props=s,f.state=nt,f.context=g,s=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Wu(e,n),g=n.memoizedProps,ht=Rr(a,g),f.props=ht,Mt=n.pendingProps,st=f.context,nt=a.contextType,F=Kr,typeof nt=="object"&&nt!==null&&(F=Tn(nt)),R=a.getDerivedStateFromProps,(nt=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==Mt||st!==F)&&a0(n,f,s,F),Ia=!1,st=n.memoizedState,f.state=st,vo(n,s,f,u),_o();var lt=n.memoizedState;g!==Mt||st!==lt||Ia||e!==null&&e.dependencies!==null&&Sl(e.dependencies)?(typeof R=="function"&&(mf(n,a,R,s),lt=n.memoizedState),(ht=Ia||i0(n,a,ht,s,st,lt,F)||e!==null&&e.dependencies!==null&&Sl(e.dependencies))?(nt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,lt,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,lt,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=lt),f.props=s,f.state=lt,f.context=F,s=ht):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Fl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=Tr(n,e.child,null,u),n.child=Tr(n,null,a,u)):An(e,n,a,u),n.memoizedState=f.state,e=n.child):e=aa(e,n,u),e}function x0(e,n,a,s){return xr(),n.flags|=256,An(e,n,a,s),n.child}var Sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mf(e){return{baseLanes:e,cachePool:lm()}}function yf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ni),e}function S0(e,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,e===null){if(ye){if(u?Ha(n):Ga(),(e=Ke)?(e=Cg(e,di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Na!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=$p(e),a.return=n,n.child=a,bn=n,Ke=null)):e=null,e===null)throw Pa(n);return ah(e)?n.lanes=32:n.lanes=536870912,null}var R=s.children;return s=s.fallback,u?(Ga(),u=n.mode,R=Hl({mode:"hidden",children:R},u),s=vr(s,u,a,null),R.return=n,s.return=n,R.sibling=s,n.child=R,s=n.child,s.memoizedState=Mf(a),s.childLanes=yf(e,g,a),n.memoizedState=Sf,Eo(null,s)):(Ha(n),Ef(n,R))}var F=e.memoizedState;if(F!==null&&(R=F.dehydrated,R!==null)){if(f)n.flags&256?(Ha(n),n.flags&=-257,n=bf(e,n,a)):n.memoizedState!==null?(Ga(),n.child=e.child,n.flags|=128,n=null):(Ga(),R=s.fallback,u=n.mode,s=Hl({mode:"visible",children:s.children},u),R=vr(R,u,a,null),R.flags|=2,s.return=n,R.return=n,s.sibling=R,n.child=s,Tr(n,e.child,null,a),s=n.child,s.memoizedState=Mf(a),s.childLanes=yf(e,g,a),n.memoizedState=Sf,n=Eo(null,s));else if(Ha(n),ah(R)){if(g=R.nextSibling&&R.nextSibling.dataset,g)var nt=g.dgst;g=nt,s=Error(r(419)),s.stack="",s.digest=g,uo({value:s,source:null,stack:null}),n=bf(e,n,a)}else if(pn||ts(e,n,a,!1),g=(a&e.childLanes)!==0,pn||g){if(g=je,g!==null&&(s=Zn(g,a),s!==0&&s!==F.retryLane))throw F.retryLane=s,_r(e,s),Yn(g,e,s),vf;ih(R)||jl(),n=bf(e,n,a)}else ih(R)?(n.flags|=192,n.child=e.child,n=null):(e=F.treeContext,Ke=mi(R.nextSibling),bn=n,ye=!0,Oa=null,di=!1,e!==null&&nm(n,e),n=Ef(n,s.children),n.flags|=4096);return n}return u?(Ga(),R=s.fallback,u=n.mode,F=e.child,nt=F.sibling,s=Ji(F,{mode:"hidden",children:s.children}),s.subtreeFlags=F.subtreeFlags&65011712,nt!==null?R=Ji(nt,R):(R=vr(R,u,a,null),R.flags|=2),R.return=n,s.return=n,s.sibling=R,n.child=s,Eo(null,s),s=n.child,R=e.child.memoizedState,R===null?R=Mf(a):(u=R.cachePool,u!==null?(F=hn._currentValue,u=u.parent!==F?{parent:F,pool:F}:u):u=lm(),R={baseLanes:R.baseLanes|a,cachePool:u}),s.memoizedState=R,s.childLanes=yf(e,g,a),n.memoizedState=Sf,Eo(e.child,s)):(Ha(n),a=e.child,e=a.sibling,a=Ji(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(g=n.deletions,g===null?(n.deletions=[e],n.flags|=16):g.push(e)),n.child=a,n.memoizedState=null,a)}function Ef(e,n){return n=Hl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Hl(e,n){return e=Jn(22,e,null,n),e.lanes=0,e}function bf(e,n,a){return Tr(n,e.child,null,a),e=Ef(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function M0(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Bu(e.return,n,a)}function Tf(e,n,a,s,u,f){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=u,g.treeForkCount=f)}function y0(e,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var g=cn.current,R=(g&2)!==0;if(R?(g=g&1|2,n.flags|=128):g&=1,G(cn,g),An(e,n,s,a),s=ye?co:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&M0(e,a,n);else if(e.tag===19)M0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Cl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Tf(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Cl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Tf(n,!0,a,null,f,s);break;case"together":Tf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function aa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Xa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ts(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Ji(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ji(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Af(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Sl(e)))}function Kx(e,n,a){switch(n.tag){case 3:yt(n,n.stateNode.containerInfo),za(n,hn,e.memoizedState.cache),xr();break;case 27:case 5:Yt(n);break;case 4:yt(n,n.stateNode.containerInfo);break;case 10:za(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ku(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Ha(n),n.flags|=128,null):(a&n.child.childLanes)!==0?S0(e,n,a):(Ha(n),e=aa(e,n,a),e!==null?e.sibling:null);Ha(n);break;case 19:var u=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(ts(e,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return y0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),G(cn,cn.current),s)break;return null;case 22:return n.lanes=0,p0(e,n,a,n.pendingProps);case 24:za(n,hn,e.memoizedState.cache)}return aa(e,n,a)}function E0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)pn=!0;else{if(!Af(e,a)&&(n.flags&128)===0)return pn=!1,Kx(e,n,a);pn=(e.flags&131072)!==0}else pn=!1,ye&&(n.flags&1048576)!==0&&em(n,co,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(e=Er(n.elementType),n.type=e,typeof e=="function")Du(e)?(s=Rr(e,s),n.tag=1,n=v0(null,n,e,s,a)):(n.tag=0,n=xf(null,n,e,s,a));else{if(e!=null){var u=e.$$typeof;if(u===N){n.tag=11,n=f0(null,n,e,s,a);break t}else if(u===B){n.tag=14,n=h0(null,n,e,s,a);break t}}throw n=pt(e)||e,Error(r(306,n,""))}}return n;case 0:return xf(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=Rr(s,n.pendingProps),v0(e,n,s,u,a);case 3:t:{if(yt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,Wu(e,n),vo(n,s,null,a);var g=n.memoizedState;if(s=g.cache,za(n,hn,s),s!==f.cache&&Fu(n,[hn],a,!0),_o(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=x0(e,n,s,a);break t}else if(s!==u){u=ui(Error(r(424)),n),uo(u),n=x0(e,n,s,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ke=mi(e.firstChild),bn=n,ye=!0,Oa=null,di=!0,a=pm(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(xr(),s===u){n=aa(e,n,a);break t}An(e,n,s,a)}n=n.child}return n;case 26:return Fl(e,n),e===null?(a=Og(n.type,null,n.pendingProps,null))?n.memoizedState=a:ye||(a=n.type,e=n.pendingProps,s=nc(W.current).createElement(a),s[ln]=n,s[En]=e,Rn(s,a,e),fn(s),n.stateNode=s):n.memoizedState=Og(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Yt(n),e===null&&ye&&(s=n.stateNode=Ug(n.type,n.pendingProps,W.current),bn=n,di=!0,u=Ke,ja(n.type)?(rh=u,Ke=mi(s.firstChild)):Ke=u),An(e,n,n.pendingProps.children,a),Fl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&ye&&((u=s=Ke)&&(s=AS(s,n.type,n.pendingProps,di),s!==null?(n.stateNode=s,bn=n,Ke=mi(s.firstChild),di=!1,u=!0):u=!1),u||Pa(n)),Yt(n),u=n.type,f=n.pendingProps,g=e!==null?e.memoizedProps:null,s=f.children,th(u,f)?s=null:g!==null&&th(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=Ju(e,n,Gx,null,null,a),Bo._currentValue=u),Fl(e,n),An(e,n,s,a),n.child;case 6:return e===null&&ye&&((e=a=Ke)&&(a=RS(a,n.pendingProps,di),a!==null?(n.stateNode=a,bn=n,Ke=null,e=!0):e=!1),e||Pa(n)),null;case 13:return S0(e,n,a);case 4:return yt(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Tr(n,null,s,a):An(e,n,s,a),n.child;case 11:return f0(e,n,n.type,n.pendingProps,a);case 7:return An(e,n,n.pendingProps,a),n.child;case 8:return An(e,n,n.pendingProps.children,a),n.child;case 12:return An(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,za(n,n.type,s.value),An(e,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,Mr(n),u=Tn(u),s=s(u),n.flags|=1,An(e,n,s,a),n.child;case 14:return h0(e,n,n.type,n.pendingProps,a);case 15:return d0(e,n,n.type,n.pendingProps,a);case 19:return y0(e,n,a);case 31:return jx(e,n,a);case 22:return p0(e,n,a,n.pendingProps);case 24:return Mr(n),s=Tn(hn),e===null?(u=Vu(),u===null&&(u=je,f=Hu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},Xu(n),za(n,hn,u)):((e.lanes&a)!==0&&(Wu(e,n),vo(n,null,null,a),_o()),u=e.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),za(n,hn,s)):(s=f.cache,za(n,hn,s),s!==u.cache&&Fu(n,[hn],a,!0))),An(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ra(e){e.flags|=4}function Rf(e,n,a,s,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(K0())e.flags|=8192;else throw br=bl,ku}else e.flags&=-16777217}function b0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Fg(n))if(K0())e.flags|=8192;else throw br=bl,ku}function Gl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?bt():536870912,e.lanes|=n,hs|=n)}function bo(e,n){if(!ye)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function Qx(e,n,a){var s=n.pendingProps;switch(Ou(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),ea(hn),Tt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&($r(n)?ra(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,zu())),Qe(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ra(n),f!==null?(Qe(n),b0(n,f)):(Qe(n),Rf(n,u,null,s,a))):f?f!==e.memoizedState?(ra(n),Qe(n),b0(n,f)):(Qe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&ra(n),Qe(n),Rf(n,u,e,s,a)),null;case 27:if(Ht(n),a=W.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ra(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),null}e=gt.current,$r(n)?im(n):(e=Ug(u,s,a),n.stateNode=e,ra(n))}return Qe(n),null;case 5:if(Ht(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ra(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),null}if(f=gt.current,$r(n))im(n);else{var g=nc(W.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(u,{is:s.is}):g.createElement(u)}}f[ln]=n,f[En]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(Rn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&ra(n)}}return Qe(n),Rf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&ra(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=W.current,$r(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,u=bn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Sg(e.nodeValue,a)),e||Pa(n,!0)}else e=nc(e).createTextNode(s),e[ln]=n,n.stateNode=e}return Qe(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=$r(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[ln]=n}else xr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),e=!1}else a=zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Qe(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=$r(n),s!==null&&s.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[ln]=n}else xr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),u=!1}else u=zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Gl(n,n.updateQueue),Qe(n),null);case 4:return Tt(),e===null&&jf(n.stateNode.containerInfo),Qe(n),null;case 10:return ea(n.type),Qe(n),null;case 19:if(Q(cn),s=n.memoizedState,s===null)return Qe(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)bo(s,!1);else{if(rn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Cl(e),f!==null){for(n.flags|=128,bo(s,!1),e=f.updateQueue,n.updateQueue=e,Gl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Jp(a,e),a=a.sibling;return G(cn,cn.current&1|2),ye&&$i(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&Rt()>Yl&&(n.flags|=128,u=!0,bo(s,!1),n.lanes=4194304)}else{if(!u)if(e=Cl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Gl(n,e),bo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!ye)return Qe(n),null}else 2*Rt()-s.renderingStartTime>Yl&&a!==536870912&&(n.flags|=128,u=!0,bo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Rt(),e.sibling=null,a=cn.current,G(cn,u?a&1|2:a&1),ye&&$i(n,s.treeForkCount),e):(Qe(n),null);case 22:case 23:return ti(n),ju(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),a=n.updateQueue,a!==null&&Gl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&Q(yr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ea(hn),Qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Jx(e,n){switch(Ou(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ea(hn),Tt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ht(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(r(340));xr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ti(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));xr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Q(cn),null;case 4:return Tt(),null;case 10:return ea(n.type),null;case 22:case 23:return ti(n),ju(),e!==null&&Q(yr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ea(hn),null;case 25:return null;default:return null}}function T0(e,n){switch(Ou(n),n.tag){case 3:ea(hn),Tt();break;case 26:case 27:case 5:Ht(n);break;case 4:Tt();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:Q(cn);break;case 10:ea(n.type);break;case 22:case 23:ti(n),ju(),e!==null&&Q(yr);break;case 24:ea(hn)}}function To(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&e)===e){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==u)}}catch(R){Ge(n,n.return,R)}}function Va(e,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&e)===e){var g=s.inst,R=g.destroy;if(R!==void 0){g.destroy=void 0,u=n;var F=a,nt=R;try{nt()}catch(ht){Ge(u,F,ht)}}}s=s.next}while(s!==f)}}catch(ht){Ge(n,n.return,ht)}}function A0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{gm(n,a)}catch(s){Ge(e,e.return,s)}}}function R0(e,n,a){a.props=Rr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Ge(e,n,s)}}function Ao(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(u){Ge(e,n,u)}}function Pi(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Ge(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,n,u)}else a.current=null}function C0(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function Cf(e,n,a){try{var s=e.stateNode;SS(s,e.type,a,n),s[En]=n}catch(u){Ge(e,e.return,u)}}function w0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ja(e.type)||e.tag===4}function wf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||w0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ja(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Df(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ki));else if(s!==4&&(s===27&&ja(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Df(e,n,a),e=e.sibling;e!==null;)Df(e,n,a),e=e.sibling}function Vl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&ja(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Vl(e,n,a),e=e.sibling;e!==null;)Vl(e,n,a),e=e.sibling}function D0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,s,a),n[ln]=e,n[En]=a}catch(f){Ge(e,e.return,f)}}var sa=!1,mn=!1,Uf=!1,U0=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function $x(e,n){if(e=e.containerInfo,Jf=cc,e=kp(e),Eu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,R=-1,F=-1,nt=0,ht=0,Mt=e,st=null;e:for(;;){for(var lt;Mt!==a||u!==0&&Mt.nodeType!==3||(R=g+u),Mt!==f||s!==0&&Mt.nodeType!==3||(F=g+s),Mt.nodeType===3&&(g+=Mt.nodeValue.length),(lt=Mt.firstChild)!==null;)st=Mt,Mt=lt;for(;;){if(Mt===e)break e;if(st===a&&++nt===u&&(R=g),st===f&&++ht===s&&(F=g),(lt=Mt.nextSibling)!==null)break;Mt=st,st=Mt.parentNode}Mt=lt}a=R===-1||F===-1?null:{start:R,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for($f={focusedElem:e,selectionRange:a},cc=!1,Mn=n;Mn!==null;)if(n=Mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Mn=e;else for(;Mn!==null;){switch(n=Mn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Wt=Rr(a.type,u);e=s.getSnapshotBeforeUpdate(Wt,f),s.__reactInternalSnapshotBeforeUpdate=e}catch($t){Ge(a,a.return,$t)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)nh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":nh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,Mn=e;break}Mn=n.return}}function L0(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:la(e,a),s&4&&To(5,a);break;case 1:if(la(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(g){Ge(a,a.return,g)}else{var u=Rr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Ge(a,a.return,g)}}s&64&&A0(a),s&512&&Ao(a,a.return);break;case 3:if(la(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{gm(e,n)}catch(g){Ge(a,a.return,g)}}break;case 27:n===null&&s&4&&D0(a);case 26:case 5:la(e,a),n===null&&s&4&&C0(a),s&512&&Ao(a,a.return);break;case 12:la(e,a);break;case 31:la(e,a),s&4&&P0(e,a);break;case 13:la(e,a),s&4&&z0(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=lS.bind(null,a),CS(e,a))));break;case 22:if(s=a.memoizedState!==null||sa,!s){n=n!==null&&n.memoizedState!==null||mn,u=sa;var f=mn;sa=s,(mn=n)&&!f?ca(e,a,(a.subtreeFlags&8772)!==0):la(e,a),sa=u,mn=f}break;case 30:break;default:la(e,a)}}function N0(e){var n=e.alternate;n!==null&&(e.alternate=null,N0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&$s(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var en=null,Vn=!1;function oa(e,n,a){for(a=a.child;a!==null;)O0(e,n,a),a=a.sibling}function O0(e,n,a){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(ct,a)}catch{}switch(a.tag){case 26:mn||Pi(a,n),oa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:mn||Pi(a,n);var s=en,u=Vn;ja(a.type)&&(en=a.stateNode,Vn=!1),oa(e,n,a),Po(a.stateNode),en=s,Vn=u;break;case 5:mn||Pi(a,n);case 6:if(s=en,u=Vn,en=null,oa(e,n,a),en=s,Vn=u,en!==null)if(Vn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode)}catch(f){Ge(a,n,f)}else try{en.removeChild(a.stateNode)}catch(f){Ge(a,n,f)}break;case 18:en!==null&&(Vn?(e=en,Ag(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ss(e)):Ag(en,a.stateNode));break;case 4:s=en,u=Vn,en=a.stateNode.containerInfo,Vn=!0,oa(e,n,a),en=s,Vn=u;break;case 0:case 11:case 14:case 15:Va(2,a,n),mn||Va(4,a,n),oa(e,n,a);break;case 1:mn||(Pi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&R0(a,n,s)),oa(e,n,a);break;case 21:oa(e,n,a);break;case 22:mn=(s=mn)||a.memoizedState!==null,oa(e,n,a),mn=s;break;default:oa(e,n,a)}}function P0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ss(e)}catch(a){Ge(n,n.return,a)}}}function z0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ss(e)}catch(a){Ge(n,n.return,a)}}function tS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new U0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new U0),n;default:throw Error(r(435,e.tag))}}function kl(e,n){var a=tS(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=cS.bind(null,e,s);s.then(u,u)}})}function kn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=e,g=n,R=g;t:for(;R!==null;){switch(R.tag){case 27:if(ja(R.type)){en=R.stateNode,Vn=!1;break t}break;case 5:en=R.stateNode,Vn=!1;break t;case 3:case 4:en=R.stateNode.containerInfo,Vn=!0;break t}R=R.return}if(en===null)throw Error(r(160));O0(f,g,u),en=null,Vn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)I0(n,e),n=n.sibling}var Ti=null;function I0(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:kn(n,e),Xn(e),s&4&&(Va(3,e,e.return),To(3,e),Va(5,e,e.return));break;case 1:kn(n,e),Xn(e),s&512&&(mn||a===null||Pi(a,a.return)),s&64&&sa&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=Ti;if(kn(n,e),Xn(e),s&512&&(mn||a===null||Pi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ra]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),Rn(f,s,a),f[ln]=e,fn(f),s=f;break t;case"link":var g=Ig("link","href",u).get(s+(a.href||""));if(g){for(var R=0;R<g.length;R++)if(f=g[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(R,1);break e}}f=u.createElement(s),Rn(f,s,a),u.head.appendChild(f);break;case"meta":if(g=Ig("meta","content",u).get(s+(a.content||""))){for(R=0;R<g.length;R++)if(f=g[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(R,1);break e}}f=u.createElement(s),Rn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[ln]=e,fn(f),s=f}e.stateNode=s}else Bg(u,e.type,e.stateNode);else e.stateNode=zg(u,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Bg(u,e.type,e.stateNode):zg(u,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Cf(e,e.memoizedProps,a.memoizedProps)}break;case 27:kn(n,e),Xn(e),s&512&&(mn||a===null||Pi(a,a.return)),a!==null&&s&4&&Cf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(kn(n,e),Xn(e),s&512&&(mn||a===null||Pi(a,a.return)),e.flags&32){u=e.stateNode;try{Kn(u,"")}catch(Wt){Ge(e,e.return,Wt)}}s&4&&e.stateNode!=null&&(u=e.memoizedProps,Cf(e,u,a!==null?a.memoizedProps:u)),s&1024&&(Uf=!0);break;case 6:if(kn(n,e),Xn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(Wt){Ge(e,e.return,Wt)}}break;case 3:if(rc=null,u=Ti,Ti=ic(n.containerInfo),kn(n,e),Ti=u,Xn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{Ss(n.containerInfo)}catch(Wt){Ge(e,e.return,Wt)}Uf&&(Uf=!1,B0(e));break;case 4:s=Ti,Ti=ic(e.stateNode.containerInfo),kn(n,e),Xn(e),Ti=s;break;case 12:kn(n,e),Xn(e);break;case 31:kn(n,e),Xn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,kl(e,s)));break;case 13:kn(n,e),Xn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Wl=Rt()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,kl(e,s)));break;case 22:u=e.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,nt=sa,ht=mn;if(sa=nt||u,mn=ht||F,kn(n,e),mn=ht,sa=nt,Xn(e),s&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||sa||mn||Cr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,u)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{R=F.stateNode;var Mt=F.memoizedProps.style,st=Mt!=null&&Mt.hasOwnProperty("display")?Mt.display:null;R.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(Wt){Ge(F,F.return,Wt)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(Wt){Ge(F,F.return,Wt)}}}else if(n.tag===18){if(a===null){F=n;try{var lt=F.stateNode;u?Rg(lt,!0):Rg(F.stateNode,!1)}catch(Wt){Ge(F,F.return,Wt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,kl(e,a))));break;case 19:kn(n,e),Xn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,kl(e,s)));break;case 30:break;case 21:break;default:kn(n,e),Xn(e)}}function Xn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(w0(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=wf(e);Vl(e,f,u);break;case 5:var g=a.stateNode;a.flags&32&&(Kn(g,""),a.flags&=-33);var R=wf(e);Vl(e,R,g);break;case 3:case 4:var F=a.stateNode.containerInfo,nt=wf(e);Df(e,nt,F);break;default:throw Error(r(161))}}catch(ht){Ge(e,e.return,ht)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function B0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;B0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function la(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)L0(e,n.alternate,n),n=n.sibling}function Cr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Va(4,n,n.return),Cr(n);break;case 1:Pi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&R0(n,n.return,a),Cr(n);break;case 27:Po(n.stateNode);case 26:case 5:Pi(n,n.return),Cr(n);break;case 22:n.memoizedState===null&&Cr(n);break;case 30:Cr(n);break;default:Cr(n)}e=e.sibling}}function ca(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=e,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:ca(u,f,a),To(4,f);break;case 1:if(ca(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){Ge(s,s.return,nt)}if(s=f,u=s.updateQueue,u!==null){var R=s.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)mm(F[u],R)}catch(nt){Ge(s,s.return,nt)}}a&&g&64&&A0(f),Ao(f,f.return);break;case 27:D0(f);case 26:case 5:ca(u,f,a),a&&s===null&&g&4&&C0(f),Ao(f,f.return);break;case 12:ca(u,f,a);break;case 31:ca(u,f,a),a&&g&4&&P0(u,f);break;case 13:ca(u,f,a),a&&g&4&&z0(u,f);break;case 22:f.memoizedState===null&&ca(u,f,a),Ao(f,f.return);break;case 30:break;default:ca(u,f,a)}n=n.sibling}}function Lf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&fo(a))}function Nf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&fo(e))}function Ai(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)F0(e,n,a,s),n=n.sibling}function F0(e,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(e,n,a,s),u&2048&&To(9,n);break;case 1:Ai(e,n,a,s);break;case 3:Ai(e,n,a,s),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&fo(e)));break;case 12:if(u&2048){Ai(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,g=f.id,R=f.onPostCommit;typeof R=="function"&&R(g,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Ge(n,n.return,F)}}else Ai(e,n,a,s);break;case 31:Ai(e,n,a,s);break;case 13:Ai(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?Ai(e,n,a,s):Ro(e,n):f._visibility&2?Ai(e,n,a,s):(f._visibility|=2,cs(e,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Lf(g,n);break;case 24:Ai(e,n,a,s),u&2048&&Nf(n.alternate,n);break;default:Ai(e,n,a,s)}}function cs(e,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,g=n,R=a,F=s,nt=g.flags;switch(g.tag){case 0:case 11:case 15:cs(f,g,R,F,u),To(8,g);break;case 23:break;case 22:var ht=g.stateNode;g.memoizedState!==null?ht._visibility&2?cs(f,g,R,F,u):Ro(f,g):(ht._visibility|=2,cs(f,g,R,F,u)),u&&nt&2048&&Lf(g.alternate,g);break;case 24:cs(f,g,R,F,u),u&&nt&2048&&Nf(g.alternate,g);break;default:cs(f,g,R,F,u)}n=n.sibling}}function Ro(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,u=s.flags;switch(s.tag){case 22:Ro(a,s),u&2048&&Lf(s.alternate,s);break;case 24:Ro(a,s),u&2048&&Nf(s.alternate,s);break;default:Ro(a,s)}n=n.sibling}}var Co=8192;function us(e,n,a){if(e.subtreeFlags&Co)for(e=e.child;e!==null;)H0(e,n,a),e=e.sibling}function H0(e,n,a){switch(e.tag){case 26:us(e,n,a),e.flags&Co&&e.memoizedState!==null&&HS(a,Ti,e.memoizedState,e.memoizedProps);break;case 5:us(e,n,a);break;case 3:case 4:var s=Ti;Ti=ic(e.stateNode.containerInfo),us(e,n,a),Ti=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=Co,Co=16777216,us(e,n,a),Co=s):us(e,n,a));break;default:us(e,n,a)}}function G0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function wo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Mn=s,k0(s,e)}G0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)V0(e),e=e.sibling}function V0(e){switch(e.tag){case 0:case 11:case 15:wo(e),e.flags&2048&&Va(9,e,e.return);break;case 3:wo(e);break;case 12:wo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Xl(e)):wo(e);break;default:wo(e)}}function Xl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Mn=s,k0(s,e)}G0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Va(8,n,n.return),Xl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Xl(n));break;default:Xl(n)}e=e.sibling}}function k0(e,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:fo(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Mn=s;else t:for(a=e;Mn!==null;){s=Mn;var u=s.sibling,f=s.return;if(N0(s),s===a){Mn=null;break t}if(u!==null){u.return=f,Mn=u;break t}Mn=f}}}var eS={getCacheForType:function(e){var n=Tn(hn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Tn(hn).controller.signal}},nS=typeof WeakMap=="function"?WeakMap:Map,Ne=0,je=null,_e=null,xe=0,He=0,ei=null,ka=!1,fs=!1,Of=!1,ua=0,rn=0,Xa=0,wr=0,Pf=0,ni=0,hs=0,Do=null,Wn=null,zf=!1,Wl=0,X0=0,Yl=1/0,ql=null,Wa=null,vn=0,Ya=null,ds=null,fa=0,If=0,Bf=null,W0=null,Uo=0,Ff=null;function ii(){return(Ne&2)!==0&&xe!==0?xe&-xe:U.T!==null?Wf():Ks()}function Y0(){if(ni===0)if((xe&536870912)===0||ye){var e=me;me<<=1,(me&3932160)===0&&(me=262144),ni=e}else ni=536870912;return e=$n.current,e!==null&&(e.flags|=32),ni}function Yn(e,n,a){(e===je&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(ps(e,0),qa(e,xe,ni,!1)),te(e,a),((Ne&2)===0||e!==je)&&(e===je&&((Ne&2)===0&&(wr|=a),rn===4&&qa(e,xe,ni,!1)),zi(e))}function q0(e,n,a){if((Ne&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Bt(e,n),u=s?rS(e,n):Gf(e,n,!0),f=s;do{if(u===0){fs&&!s&&qa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!iS(a)){u=Gf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var R=e;u=Do;var F=R.current.memoizedState.isDehydrated;if(F&&(ps(R,g).flags|=256),g=Gf(R,g,!1),g!==2){if(Of&&!F){R.errorRecoveryDisabledLanes|=f,wr|=f,u=4;break t}f=Wn,Wn=u,f!==null&&(Wn===null?Wn=f:Wn.push.apply(Wn,f))}u=g}if(f=!1,u!==2)continue}}if(u===1){ps(e,0),qa(e,n,0,!0);break}t:{switch(s=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:qa(s,n,ni,!ka);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Wl+300-Rt(),10<u)){if(qa(s,n,ni,!ka),dt(s,0,!0)!==0)break t;fa=n,s.timeoutHandle=bg(Z0.bind(null,s,a,Wn,ql,zf,n,ni,wr,hs,ka,f,"Throttled",-0,0),u);break t}Z0(s,a,Wn,ql,zf,n,ni,wr,hs,ka,f,null,-0,0)}}break}while(!0);zi(e)}function Z0(e,n,a,s,u,f,g,R,F,nt,ht,Mt,st,lt){if(e.timeoutHandle=-1,Mt=n.subtreeFlags,Mt&8192||(Mt&16785408)===16785408){Mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ki},H0(n,f,Mt);var Wt=(f&62914560)===f?Wl-Rt():(f&4194048)===f?X0-Rt():0;if(Wt=GS(Mt,Wt),Wt!==null){fa=f,e.cancelPendingCommit=Wt(ng.bind(null,e,n,f,a,s,u,g,R,F,ht,Mt,null,st,lt)),qa(e,f,g,!nt);return}}ng(e,n,f,a,s,u,g,R,F)}function iS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Qn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qa(e,n,a,s){n&=~Pf,n&=~wr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var u=n;0<u;){var f=31-Pt(u),g=1<<f;s[f]=-1,u&=~g}a!==0&&Le(e,a,n)}function Zl(){return(Ne&6)===0?(Lo(0),!1):!0}function Hf(){if(_e!==null){if(He===0)var e=_e.return;else e=_e,ta=Sr=null,ef(e),as=null,po=0,e=_e;for(;e!==null;)T0(e.alternate,e),e=e.return;_e=null}}function ps(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ES(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),fa=0,Hf(),je=e,_e=a=Ji(e.current,null),xe=n,He=0,ei=null,ka=!1,fs=Bt(e,n),Of=!1,hs=ni=Pf=wr=Xa=rn=0,Wn=Do=null,zf=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var u=31-Pt(s),f=1<<u;n|=e[u],s&=~f}return ua=n,ml(),a}function j0(e,n){fe=null,U.H=yo,n===is||n===El?(n=fm(),He=3):n===ku?(n=fm(),He=4):He=n===vf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ei=n,_e===null&&(rn=1,Il(e,ui(n,e.current)))}function K0(){var e=$n.current;return e===null?!0:(xe&4194048)===xe?pi===null:(xe&62914560)===xe||(xe&536870912)!==0?e===pi:!1}function Q0(){var e=U.H;return U.H=yo,e===null?yo:e}function J0(){var e=U.A;return U.A=eS,e}function jl(){rn=4,ka||(xe&4194048)!==xe&&$n.current!==null||(fs=!0),(Xa&134217727)===0&&(wr&134217727)===0||je===null||qa(je,xe,ni,!1)}function Gf(e,n,a){var s=Ne;Ne|=2;var u=Q0(),f=J0();(je!==e||xe!==n)&&(ql=null,ps(e,n)),n=!1;var g=rn;t:do try{if(He!==0&&_e!==null){var R=_e,F=ei;switch(He){case 8:Hf(),g=6;break t;case 3:case 2:case 9:case 6:$n.current===null&&(n=!0);var nt=He;if(He=0,ei=null,ms(e,R,F,nt),a&&fs){g=0;break t}break;default:nt=He,He=0,ei=null,ms(e,R,F,nt)}}aS(),g=rn;break}catch(ht){j0(e,ht)}while(!0);return n&&e.shellSuspendCounter++,ta=Sr=null,Ne=s,U.H=u,U.A=f,_e===null&&(je=null,xe=0,ml()),g}function aS(){for(;_e!==null;)$0(_e)}function rS(e,n){var a=Ne;Ne|=2;var s=Q0(),u=J0();je!==e||xe!==n?(ql=null,Yl=Rt()+500,ps(e,n)):fs=Bt(e,n);t:do try{if(He!==0&&_e!==null){n=_e;var f=ei;e:switch(He){case 1:He=0,ei=null,ms(e,n,f,1);break;case 2:case 9:if(cm(f)){He=0,ei=null,tg(n);break}n=function(){He!==2&&He!==9||je!==e||(He=7),zi(e)},f.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:cm(f)?(He=0,ei=null,tg(n)):(He=0,ei=null,ms(e,n,f,7));break;case 5:var g=null;switch(_e.tag){case 26:g=_e.memoizedState;case 5:case 27:var R=_e;if(g?Fg(g):R.stateNode.complete){He=0,ei=null;var F=R.sibling;if(F!==null)_e=F;else{var nt=R.return;nt!==null?(_e=nt,Kl(nt)):_e=null}break e}}He=0,ei=null,ms(e,n,f,5);break;case 6:He=0,ei=null,ms(e,n,f,6);break;case 8:Hf(),rn=6;break t;default:throw Error(r(462))}}sS();break}catch(ht){j0(e,ht)}while(!0);return ta=Sr=null,U.H=s,U.A=u,Ne=a,_e!==null?0:(je=null,xe=0,ml(),rn)}function sS(){for(;_e!==null&&!re();)$0(_e)}function $0(e){var n=E0(e.alternate,e,ua);e.memoizedProps=e.pendingProps,n===null?Kl(e):_e=n}function tg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=_0(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=_0(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:ef(n);default:T0(a,n),n=_e=Jp(n,ua),n=E0(a,n,ua)}e.memoizedProps=e.pendingProps,n===null?Kl(e):_e=n}function ms(e,n,a,s){ta=Sr=null,ef(n),as=null,po=0;var u=n.return;try{if(Zx(e,u,n,a,xe)){rn=1,Il(e,ui(a,e.current)),_e=null;return}}catch(f){if(u!==null)throw _e=u,f;rn=1,Il(e,ui(a,e.current)),_e=null;return}n.flags&32768?(ye||s===1?e=!0:fs||(xe&536870912)!==0?e=!1:(ka=e=!0,(s===2||s===9||s===3||s===6)&&(s=$n.current,s!==null&&s.tag===13&&(s.flags|=16384))),eg(n,e)):Kl(n)}function Kl(e){var n=e;do{if((n.flags&32768)!==0){eg(n,ka);return}e=n.return;var a=Qx(n.alternate,n,ua);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);rn===0&&(rn=5)}function eg(e,n){do{var a=Jx(e.alternate,e);if(a!==null){a.flags&=32767,_e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){_e=e;return}_e=e=a}while(e!==null);rn=6,_e=null}function ng(e,n,a,s,u,f,g,R,F){e.cancelPendingCommit=null;do Ql();while(vn!==0);if((Ne&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Cu,nn(e,a,f,g,R,F),e===je&&(_e=je=null,xe=0),ds=n,Ya=e,fa=a,If=f,Bf=u,W0=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,uS(J,function(){return og(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=U.T,U.T=null,u=I.p,I.p=2,g=Ne,Ne|=4;try{$x(e,n,a)}finally{Ne=g,I.p=u,U.T=s}}vn=1,ig(),ag(),rg()}}function ig(){if(vn===1){vn=0;var e=Ya,n=ds,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var s=I.p;I.p=2;var u=Ne;Ne|=4;try{I0(n,e);var f=$f,g=kp(e.containerInfo),R=f.focusedElem,F=f.selectionRange;if(g!==R&&R&&R.ownerDocument&&Vp(R.ownerDocument.documentElement,R)){if(F!==null&&Eu(R)){var nt=F.start,ht=F.end;if(ht===void 0&&(ht=nt),"selectionStart"in R)R.selectionStart=nt,R.selectionEnd=Math.min(ht,R.value.length);else{var Mt=R.ownerDocument||document,st=Mt&&Mt.defaultView||window;if(st.getSelection){var lt=st.getSelection(),Wt=R.textContent.length,$t=Math.min(F.start,Wt),Ye=F.end===void 0?$t:Math.min(F.end,Wt);!lt.extend&&$t>Ye&&(g=Ye,Ye=$t,$t=g);var j=Gp(R,$t),k=Gp(R,Ye);if(j&&k&&(lt.rangeCount!==1||lt.anchorNode!==j.node||lt.anchorOffset!==j.offset||lt.focusNode!==k.node||lt.focusOffset!==k.offset)){var et=Mt.createRange();et.setStart(j.node,j.offset),lt.removeAllRanges(),$t>Ye?(lt.addRange(et),lt.extend(k.node,k.offset)):(et.setEnd(k.node,k.offset),lt.addRange(et))}}}}for(Mt=[],lt=R;lt=lt.parentNode;)lt.nodeType===1&&Mt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Mt.length;R++){var _t=Mt[R];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}cc=!!Jf,$f=Jf=null}finally{Ne=u,I.p=s,U.T=a}}e.current=n,vn=2}}function ag(){if(vn===2){vn=0;var e=Ya,n=ds,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var s=I.p;I.p=2;var u=Ne;Ne|=4;try{L0(e,n.alternate,n)}finally{Ne=u,I.p=s,U.T=a}}vn=3}}function rg(){if(vn===4||vn===3){vn=0,Ce();var e=Ya,n=ds,a=fa,s=W0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?vn=5:(vn=0,ds=Ya=null,sg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Wa=null),js(a),n=n.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(ct,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=U.T,u=I.p,I.p=2,U.T=null;try{for(var f=e.onRecoverableError,g=0;g<s.length;g++){var R=s[g];f(R.value,{componentStack:R.stack})}}finally{U.T=n,I.p=u}}(fa&3)!==0&&Ql(),zi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Ff?Uo++:(Uo=0,Ff=e):Uo=0,Lo(0)}}function sg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,fo(n)))}function Ql(){return ig(),ag(),rg(),og()}function og(){if(vn!==5)return!1;var e=Ya,n=If;If=0;var a=js(fa),s=U.T,u=I.p;try{I.p=32>a?32:a,U.T=null,a=Bf,Bf=null;var f=Ya,g=fa;if(vn=0,ds=Ya=null,fa=0,(Ne&6)!==0)throw Error(r(331));var R=Ne;if(Ne|=4,V0(f.current),F0(f,f.current,g,a),Ne=R,Lo(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(ct,f)}catch{}return!0}finally{I.p=u,U.T=s,sg(e,n)}}function lg(e,n,a){n=ui(a,n),n=_f(e.stateNode,n,2),e=Fa(e,n,2),e!==null&&(te(e,2),zi(e))}function Ge(e,n,a){if(e.tag===3)lg(e,e,a);else for(;n!==null;){if(n.tag===3){lg(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Wa===null||!Wa.has(s))){e=ui(a,e),a=c0(2),s=Fa(n,a,2),s!==null&&(u0(a,s,n,e),te(s,2),zi(s));break}}n=n.return}}function Vf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new nS;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Of=!0,u.add(a),e=oS.bind(null,e,n,a),n.then(e,e))}function oS(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(xe&a)===a&&(rn===4||rn===3&&(xe&62914560)===xe&&300>Rt()-Wl?(Ne&2)===0&&ps(e,0):Pf|=a,hs===xe&&(hs=0)),zi(e)}function cg(e,n){n===0&&(n=bt()),e=_r(e,n),e!==null&&(te(e,n),zi(e))}function lS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),cg(e,a)}function cS(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),cg(e,a)}function uS(e,n){return X(e,n)}var Jl=null,gs=null,kf=!1,$l=!1,Xf=!1,Za=0;function zi(e){e!==gs&&e.next===null&&(gs===null?Jl=gs=e:gs=gs.next=e),$l=!0,kf||(kf=!0,hS())}function Lo(e,n){if(!Xf&&$l){Xf=!0;do for(var a=!1,s=Jl;s!==null;){if(e!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var g=s.suspendedLanes,R=s.pingedLanes;f=(1<<31-Pt(42|e)+1)-1,f&=u&~(g&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,dg(s,f))}else f=xe,f=dt(s,s===je?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Bt(s,f)||(a=!0,dg(s,f));s=s.next}while(a);Xf=!1}}function fS(){ug()}function ug(){$l=kf=!1;var e=0;Za!==0&&yS()&&(e=Za);for(var n=Rt(),a=null,s=Jl;s!==null;){var u=s.next,f=fg(s,n);f===0?(s.next=null,a===null?Jl=u:a.next=u,u===null&&(gs=a)):(a=s,(e!==0||(f&3)!==0)&&($l=!0)),s=u}vn!==0&&vn!==5||Lo(e),Za!==0&&(Za=0)}function fg(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var g=31-Pt(f),R=1<<g,F=u[g];F===-1?((R&a)===0||(R&s)!==0)&&(u[g]=Lt(R,n)):F<=n&&(e.expiredLanes|=R),f&=~R}if(n=je,a=xe,a=dt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(He===2||He===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&ze(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Bt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&ze(s),js(a)){case 2:case 8:a=y;break;case 32:a=J;break;case 268435456:a=At;break;default:a=J}return s=hg.bind(null,e),a=X(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&ze(s),e.callbackPriority=2,e.callbackNode=null,2}function hg(e,n){if(vn!==0&&vn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ql()&&e.callbackNode!==a)return null;var s=xe;return s=dt(e,e===je?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(q0(e,s,n),fg(e,Rt()),e.callbackNode!=null&&e.callbackNode===a?hg.bind(null,e):null)}function dg(e,n){if(Ql())return null;q0(e,n,!0)}function hS(){bS(function(){(Ne&6)!==0?X(C,fS):ug()})}function Wf(){if(Za===0){var e=es;e===0&&(e=ie,ie<<=1,(ie&261888)===0&&(ie=256)),Za=e}return Za}function pg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:dr(""+e)}function mg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function dS(e,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=pg((u[En]||null).action),g=s.submitter;g&&(n=(n=g[En]||null)?pg(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var R=new fl("action","action",null,s,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Za!==0){var F=g?mg(u,g):new FormData(u);ff(a,{pending:!0,data:F,method:u.method,action:f},null,F)}}else typeof f=="function"&&(R.preventDefault(),F=g?mg(u,g):new FormData(u),ff(a,{pending:!0,data:F,method:u.method,action:f},f,F))},currentTarget:u}]})}}for(var Yf=0;Yf<Ru.length;Yf++){var qf=Ru[Yf],pS=qf.toLowerCase(),mS=qf[0].toUpperCase()+qf.slice(1);bi(pS,"on"+mS)}bi(Yp,"onAnimationEnd"),bi(qp,"onAnimationIteration"),bi(Zp,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(Ux,"onTransitionRun"),bi(Lx,"onTransitionStart"),bi(Nx,"onTransitionCancel"),bi(jp,"onTransitionEnd"),rt("onMouseEnter",["mouseout","mouseover"]),rt("onMouseLeave",["mouseout","mouseover"]),rt("onPointerEnter",["pointerout","pointerover"]),rt("onPointerLeave",["pointerout","pointerover"]),Z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Z("onBeforeInput",["compositionend","keypress","textInput","paste"]),Z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(No));function gg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var R=s[g],F=R.instance,nt=R.currentTarget;if(R=R.listener,F!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=nt;try{f(u)}catch(ht){pl(ht)}u.currentTarget=null,f=F}else for(g=0;g<s.length;g++){if(R=s[g],F=R.instance,nt=R.currentTarget,R=R.listener,F!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=nt;try{f(u)}catch(ht){pl(ht)}u.currentTarget=null,f=F}}}}function ve(e,n){var a=n[Aa];a===void 0&&(a=n[Aa]=new Set);var s=e+"__bubble";a.has(s)||(_g(n,e,2,!1),a.add(s))}function Zf(e,n,a){var s=0;n&&(s|=4),_g(a,e,s,n)}var tc="_reactListening"+Math.random().toString(36).slice(2);function jf(e){if(!e[tc]){e[tc]=!0,ol.forEach(function(a){a!=="selectionchange"&&(gS.has(a)||Zf(a,!1,e),Zf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[tc]||(n[tc]=!0,Zf("selectionchange",!1,n))}}function _g(e,n,a,s){switch(Yg(n)){case 2:var u=XS;break;case 8:u=WS;break;default:u=uh}a=u.bind(null,n,a,e),u=void 0,!pu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Kf(e,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var R=s.stateNode.containerInfo;if(R===u)break;if(g===4)for(g=s.return;g!==null;){var F=g.tag;if((F===3||F===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;R!==null;){if(g=Ca(R),g===null)return;if(F=g.tag,F===5||F===6||F===26||F===27){s=f=g;continue t}R=R.parentNode}}s=s.return}yp(function(){var nt=f,ht=hu(a),Mt=[];t:{var st=Kp.get(e);if(st!==void 0){var lt=fl,Wt=e;switch(e){case"keypress":if(cl(a)===0)break t;case"keydown":case"keyup":lt=cx;break;case"focusin":Wt="focus",lt=vu;break;case"focusout":Wt="blur",lt=vu;break;case"beforeblur":case"afterblur":lt=vu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=Qv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=hx;break;case Yp:case qp:case Zp:lt=tx;break;case jp:lt=px;break;case"scroll":case"scrollend":lt=jv;break;case"wheel":lt=gx;break;case"copy":case"cut":case"paste":lt=nx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Rp;break;case"toggle":case"beforetoggle":lt=vx}var $t=(n&4)!==0,Ye=!$t&&(e==="scroll"||e==="scrollend"),j=$t?st!==null?st+"Capture":null:st;$t=[];for(var k=nt,et;k!==null;){var _t=k;if(et=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||et===null||j===null||(_t=to(k,j),_t!=null&&$t.push(Oo(k,_t,et))),Ye)break;k=k.return}0<$t.length&&(st=new lt(st,Wt,null,a,ht),Mt.push({event:st,listeners:$t}))}}if((n&7)===0){t:{if(st=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",st&&a!==fu&&(Wt=a.relatedTarget||a.fromElement)&&(Ca(Wt)||Wt[ji]))break t;if((lt||st)&&(st=ht.window===ht?ht:(st=ht.ownerDocument)?st.defaultView||st.parentWindow:window,lt?(Wt=a.relatedTarget||a.toElement,lt=nt,Wt=Wt?Ca(Wt):null,Wt!==null&&(Ye=c(Wt),$t=Wt.tag,Wt!==Ye||$t!==5&&$t!==27&&$t!==6)&&(Wt=null)):(lt=null,Wt=nt),lt!==Wt)){if($t=Tp,_t="onMouseLeave",j="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&($t=Rp,_t="onPointerLeave",j="onPointerEnter",k="pointer"),Ye=lt==null?st:hr(lt),et=Wt==null?st:hr(Wt),st=new $t(_t,k+"leave",lt,a,ht),st.target=Ye,st.relatedTarget=et,_t=null,Ca(ht)===nt&&($t=new $t(j,k+"enter",Wt,a,ht),$t.target=et,$t.relatedTarget=Ye,_t=$t),Ye=_t,lt&&Wt)e:{for($t=_S,j=lt,k=Wt,et=0,_t=j;_t;_t=$t(_t))et++;_t=0;for(var Jt=k;Jt;Jt=$t(Jt))_t++;for(;0<et-_t;)j=$t(j),et--;for(;0<_t-et;)k=$t(k),_t--;for(;et--;){if(j===k||k!==null&&j===k.alternate){$t=j;break e}j=$t(j),k=$t(k)}$t=null}else $t=null;lt!==null&&vg(Mt,st,lt,$t,!1),Wt!==null&&Ye!==null&&vg(Mt,Ye,Wt,$t,!0)}}t:{if(st=nt?hr(nt):window,lt=st.nodeName&&st.nodeName.toLowerCase(),lt==="select"||lt==="input"&&st.type==="file")var De=Pp;else if(Np(st))if(zp)De=Cx;else{De=Ax;var Zt=Tx}else lt=st.nodeName,!lt||lt.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?nt&&Oe(nt.elementType)&&(De=Pp):De=Rx;if(De&&(De=De(e,nt))){Op(Mt,De,a,ht);break t}Zt&&Zt(e,st,nt),e==="focusout"&&nt&&st.type==="number"&&nt.memoizedProps.value!=null&&ge(st,"number",st.value)}switch(Zt=nt?hr(nt):window,e){case"focusin":(Np(Zt)||Zt.contentEditable==="true")&&(qr=Zt,bu=nt,lo=null);break;case"focusout":lo=bu=qr=null;break;case"mousedown":Tu=!0;break;case"contextmenu":case"mouseup":case"dragend":Tu=!1,Xp(Mt,a,ht);break;case"selectionchange":if(Dx)break;case"keydown":case"keyup":Xp(Mt,a,ht)}var he;if(Su)t:{switch(e){case"compositionstart":var Se="onCompositionStart";break t;case"compositionend":Se="onCompositionEnd";break t;case"compositionupdate":Se="onCompositionUpdate";break t}Se=void 0}else Yr?Up(e,a)&&(Se="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&(Cp&&a.locale!=="ko"&&(Yr||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Yr&&(he=Ep()):(La=ht,mu="value"in La?La.value:La.textContent,Yr=!0)),Zt=ec(nt,Se),0<Zt.length&&(Se=new Ap(Se,e,null,a,ht),Mt.push({event:Se,listeners:Zt}),he?Se.data=he:(he=Lp(a),he!==null&&(Se.data=he)))),(he=Sx?Mx(e,a):yx(e,a))&&(Se=ec(nt,"onBeforeInput"),0<Se.length&&(Zt=new Ap("onBeforeInput","beforeinput",null,a,ht),Mt.push({event:Zt,listeners:Se}),Zt.data=he)),dS(Mt,e,nt,a,ht)}gg(Mt,n)})}function Oo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ec(e,n){for(var a=n+"Capture",s=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=to(e,a),u!=null&&s.unshift(Oo(e,u,f)),u=to(e,n),u!=null&&s.push(Oo(e,u,f))),e.tag===3)return s;e=e.return}return[]}function _S(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function vg(e,n,a,s,u){for(var f=n._reactName,g=[];a!==null&&a!==s;){var R=a,F=R.alternate,nt=R.stateNode;if(R=R.tag,F!==null&&F===s)break;R!==5&&R!==26&&R!==27||nt===null||(F=nt,u?(nt=to(a,f),nt!=null&&g.unshift(Oo(a,nt,F))):u||(nt=to(a,f),nt!=null&&g.push(Oo(a,nt,F)))),a=a.return}g.length!==0&&e.push({event:n,listeners:g})}var vS=/\r\n?/g,xS=/\u0000|\uFFFD/g;function xg(e){return(typeof e=="string"?e:""+e).replace(vS,`
`).replace(xS,"")}function Sg(e,n){return n=xg(n),xg(e)===n}function We(e,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Kn(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Kn(e,""+s);break;case"className":Xt(e,"class",s);break;case"tabIndex":Xt(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Xt(e,a,s);break;case"style":Ei(e,s,f);break;case"data":if(n!=="object"){Xt(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=dr(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&We(e,n,"name",u.name,u,null),We(e,n,"formEncType",u.formEncType,u,null),We(e,n,"formMethod",u.formMethod,u,null),We(e,n,"formTarget",u.formTarget,u,null)):(We(e,n,"encType",u.encType,u,null),We(e,n,"method",u.method,u,null),We(e,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=dr(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Ki);break;case"onScroll":s!=null&&ve("scroll",e);break;case"onScrollEnd":s!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=dr(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":ve("beforetoggle",e),ve("toggle",e),zt(e,"popover",s);break;case"xlinkActuate":kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":kt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":kt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":kt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":kt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":zt(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Li.get(a)||a,zt(e,a,s))}}function Qf(e,n,a,s,u,f){switch(a){case"style":Ei(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?Kn(e,s):(typeof s=="number"||typeof s=="bigint")&&Kn(e,""+s);break;case"onScroll":s!=null&&ve("scroll",e);break;case"onScrollEnd":s!=null&&ve("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!T.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[En]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,u);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):zt(e,a,s)}}}function Rn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:We(e,n,f,g,a,null)}}u&&We(e,n,"srcSet",a.srcSet,a,null),s&&We(e,n,"src",a.src,a,null);return;case"input":ve("invalid",e);var R=f=g=u=null,F=null,nt=null;for(s in a)if(a.hasOwnProperty(s)){var ht=a[s];if(ht!=null)switch(s){case"name":u=ht;break;case"type":g=ht;break;case"checked":F=ht;break;case"defaultChecked":nt=ht;break;case"value":f=ht;break;case"defaultValue":R=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,n));break;default:We(e,n,s,ht,a,null)}}Dn(e,f,R,F,nt,g,u,!1);return;case"select":ve("invalid",e),s=g=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":g=R;break;case"multiple":s=R;default:We(e,n,u,R,a,null)}n=f,a=g,e.multiple=!!s,n!=null?_n(e,!!s,n,!1):a!=null&&_n(e,!!s,a,!0);return;case"textarea":ve("invalid",e),f=u=s=null;for(g in a)if(a.hasOwnProperty(g)&&(R=a[g],R!=null))switch(g){case"value":s=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:We(e,n,g,R,a,null)}yi(e,s,u,f);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(s=a[F],s!=null))switch(F){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:We(e,n,F,s,a,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(s=0;s<No.length;s++)ve(No[s],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(s=a[nt],s!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:We(e,n,nt,s,a,null)}return;default:if(Oe(n)){for(ht in a)a.hasOwnProperty(ht)&&(s=a[ht],s!==void 0&&Qf(e,n,ht,s,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(s=a[R],s!=null&&We(e,n,R,s,a,null))}function SS(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,g=null,R=null,F=null,nt=null,ht=null;for(lt in a){var Mt=a[lt];if(a.hasOwnProperty(lt)&&Mt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":F=Mt;default:s.hasOwnProperty(lt)||We(e,n,lt,null,s,Mt)}}for(var st in s){var lt=s[st];if(Mt=a[st],s.hasOwnProperty(st)&&(lt!=null||Mt!=null))switch(st){case"type":f=lt;break;case"name":u=lt;break;case"checked":nt=lt;break;case"defaultChecked":ht=lt;break;case"value":g=lt;break;case"defaultValue":R=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:lt!==Mt&&We(e,n,st,lt,s,Mt)}}Gt(e,g,R,F,nt,ht,f,u);return;case"select":lt=g=R=st=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":lt=F;default:s.hasOwnProperty(f)||We(e,n,f,null,s,F)}for(u in s)if(f=s[u],F=a[u],s.hasOwnProperty(u)&&(f!=null||F!=null))switch(u){case"value":st=f;break;case"defaultValue":R=f;break;case"multiple":g=f;default:f!==F&&We(e,n,u,f,s,F)}n=R,a=g,s=lt,st!=null?_n(e,!!a,st,!1):!!s!=!!a&&(n!=null?_n(e,!!a,n,!0):_n(e,!!a,a?[]:"",!1));return;case"textarea":lt=st=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!s.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:We(e,n,R,null,s,u)}for(g in s)if(u=s[g],f=a[g],s.hasOwnProperty(g)&&(u!=null||f!=null))switch(g){case"value":st=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&We(e,n,g,u,s,f)}jn(e,st,lt);return;case"option":for(var Wt in a)if(st=a[Wt],a.hasOwnProperty(Wt)&&st!=null&&!s.hasOwnProperty(Wt))switch(Wt){case"selected":e.selected=!1;break;default:We(e,n,Wt,null,s,st)}for(F in s)if(st=s[F],lt=a[F],s.hasOwnProperty(F)&&st!==lt&&(st!=null||lt!=null))switch(F){case"selected":e.selected=st&&typeof st!="function"&&typeof st!="symbol";break;default:We(e,n,F,st,s,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)st=a[$t],a.hasOwnProperty($t)&&st!=null&&!s.hasOwnProperty($t)&&We(e,n,$t,null,s,st);for(nt in s)if(st=s[nt],lt=a[nt],s.hasOwnProperty(nt)&&st!==lt&&(st!=null||lt!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:We(e,n,nt,st,s,lt)}return;default:if(Oe(n)){for(var Ye in a)st=a[Ye],a.hasOwnProperty(Ye)&&st!==void 0&&!s.hasOwnProperty(Ye)&&Qf(e,n,Ye,void 0,s,st);for(ht in s)st=s[ht],lt=a[ht],!s.hasOwnProperty(ht)||st===lt||st===void 0&&lt===void 0||Qf(e,n,ht,st,s,lt);return}}for(var j in a)st=a[j],a.hasOwnProperty(j)&&st!=null&&!s.hasOwnProperty(j)&&We(e,n,j,null,s,st);for(Mt in s)st=s[Mt],lt=a[Mt],!s.hasOwnProperty(Mt)||st===lt||st==null&&lt==null||We(e,n,Mt,st,s,lt)}function Mg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function MS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,g=u.initiatorType,R=u.duration;if(f&&R&&Mg(g)){for(g=0,R=u.responseEnd,s+=1;s<a.length;s++){var F=a[s],nt=F.startTime;if(nt>R)break;var ht=F.transferSize,Mt=F.initiatorType;ht&&Mg(Mt)&&(F=F.responseEnd,g+=ht*(F<R?1:(R-nt)/(F-nt)))}if(--s,n+=8*(f+g)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Jf=null,$f=null;function nc(e){return e.nodeType===9?e:e.ownerDocument}function yg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Eg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function th(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var eh=null;function yS(){var e=window.event;return e&&e.type==="popstate"?e===eh?!1:(eh=e,!0):(eh=null,!1)}var bg=typeof setTimeout=="function"?setTimeout:void 0,ES=typeof clearTimeout=="function"?clearTimeout:void 0,Tg=typeof Promise=="function"?Promise:void 0,bS=typeof queueMicrotask=="function"?queueMicrotask:typeof Tg<"u"?function(e){return Tg.resolve(null).then(e).catch(TS)}:bg;function TS(e){setTimeout(function(){throw e})}function ja(e){return e==="head"}function Ag(e,n){var a=n,s=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(u),Ss(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Po(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Po(a);for(var f=a.firstChild;f;){var g=f.nextSibling,R=f.nodeName;f[Ra]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&Po(e.ownerDocument.body);a=u}while(a);Ss(n)}function Rg(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function nh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":nh(a),$s(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function AS(e,n,a,s){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Ra])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function RS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=mi(e.nextSibling),e===null))return null;return e}function Cg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=mi(e.nextSibling),e===null))return null;return e}function ih(e){return e.data==="$?"||e.data==="$~"}function ah(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function CS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var rh=null;function wg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return mi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Dg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Ug(e,n,a){switch(n=nc(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Po(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);$s(e)}var gi=new Map,Lg=new Set;function ic(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ha=I.d;I.d={f:wS,r:DS,D:US,C:LS,L:NS,m:OS,X:zS,S:PS,M:IS};function wS(){var e=ha.f(),n=Zl();return e||n}function DS(e){var n=wa(e);n!==null&&n.tag===5&&n.type==="form"?jm(n):ha.r(e)}var _s=typeof document>"u"?null:document;function Ng(e,n,a){var s=_s;if(s&&typeof n=="string"&&n){var u=Be(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Lg.has(u)||(Lg.add(u),e={rel:e,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Rn(n,"link",e),fn(n),s.head.appendChild(n)))}}function US(e){ha.D(e),Ng("dns-prefetch",e,null)}function LS(e,n){ha.C(e,n),Ng("preconnect",e,n)}function NS(e,n,a){ha.L(e,n,a);var s=_s;if(s&&e&&n){var u='link[rel="preload"][as="'+Be(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Be(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Be(a.imageSizes)+'"]')):u+='[href="'+Be(e)+'"]';var f=u;switch(n){case"style":f=vs(e);break;case"script":f=xs(e)}gi.has(f)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),gi.set(f,e),s.querySelector(u)!==null||n==="style"&&s.querySelector(zo(f))||n==="script"&&s.querySelector(Io(f))||(n=s.createElement("link"),Rn(n,"link",e),fn(n),s.head.appendChild(n)))}}function OS(e,n){ha.m(e,n);var a=_s;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Be(s)+'"][href="'+Be(e)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=xs(e)}if(!gi.has(f)&&(e=v({rel:"modulepreload",href:e},n),gi.set(f,e),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Io(f)))return}s=a.createElement("link"),Rn(s,"link",e),fn(s),a.head.appendChild(s)}}}function PS(e,n,a){ha.S(e,n,a);var s=_s;if(s&&e){var u=Da(s).hoistableStyles,f=vs(e);n=n||"default";var g=u.get(f);if(!g){var R={loading:0,preload:null};if(g=s.querySelector(zo(f)))R.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=gi.get(f))&&sh(e,a);var F=g=s.createElement("link");fn(F),Rn(F,"link",e),F._p=new Promise(function(nt,ht){F.onload=nt,F.onerror=ht}),F.addEventListener("load",function(){R.loading|=1}),F.addEventListener("error",function(){R.loading|=2}),R.loading|=4,ac(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:R},u.set(f,g)}}}function zS(e,n){ha.X(e,n);var a=_s;if(a&&e){var s=Da(a).hoistableScripts,u=xs(e),f=s.get(u);f||(f=a.querySelector(Io(u)),f||(e=v({src:e,async:!0},n),(n=gi.get(u))&&oh(e,n),f=a.createElement("script"),fn(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function IS(e,n){ha.M(e,n);var a=_s;if(a&&e){var s=Da(a).hoistableScripts,u=xs(e),f=s.get(u);f||(f=a.querySelector(Io(u)),f||(e=v({src:e,async:!0,type:"module"},n),(n=gi.get(u))&&oh(e,n),f=a.createElement("script"),fn(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Og(e,n,a,s){var u=(u=W.current)?ic(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=vs(a.href),a=Da(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=vs(a.href);var f=Da(u).hoistableStyles,g=f.get(e);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,g),(f=u.querySelector(zo(e)))&&!f._p&&(g.instance=f,g.state.loading=5),gi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},gi.set(e,a),f||BS(u,e,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=xs(a),a=Da(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function vs(e){return'href="'+Be(e)+'"'}function zo(e){return'link[rel="stylesheet"]['+e+"]"}function Pg(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function BS(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Rn(n,"link",a),fn(n),e.head.appendChild(n))}function xs(e){return'[src="'+Be(e)+'"]'}function Io(e){return"script[async]"+e}function zg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+Be(a.href)+'"]');if(s)return n.instance=s,fn(s),s;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),fn(s),Rn(s,"style",u),ac(s,a.precedence,e),n.instance=s;case"stylesheet":u=vs(a.href);var f=e.querySelector(zo(u));if(f)return n.state.loading|=4,n.instance=f,fn(f),f;s=Pg(a),(u=gi.get(u))&&sh(s,u),f=(e.ownerDocument||e).createElement("link"),fn(f);var g=f;return g._p=new Promise(function(R,F){g.onload=R,g.onerror=F}),Rn(f,"link",s),n.state.loading|=4,ac(f,a.precedence,e),n.instance=f;case"script":return f=xs(a.src),(u=e.querySelector(Io(f)))?(n.instance=u,fn(u),u):(s=a,(u=gi.get(f))&&(s=v({},a),oh(s,u)),e=e.ownerDocument||e,u=e.createElement("script"),fn(u),Rn(u,"link",s),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,ac(s,a.precedence,e));return n.instance}function ac(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,g=0;g<s.length;g++){var R=s[g];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function sh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function oh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var rc=null;function Ig(e,n,a){if(rc===null){var s=new Map,u=rc=new Map;u.set(a,s)}else u=rc,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Ra]||f[ln]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=e+g;var R=s.get(g);R?R.push(f):s.set(g,[f])}}return s}function Bg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function FS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Fg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function HS(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=vs(s.href),f=n.querySelector(zo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=sc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,fn(f);return}f=n.ownerDocument||n,s=Pg(s),(u=gi.get(u))&&sh(s,u),f=f.createElement("link"),fn(f);var g=f;g._p=new Promise(function(R,F){g.onload=R,g.onerror=F}),Rn(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=sc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var lh=0;function GS(e,n){return e.stylesheets&&e.count===0&&lc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&lc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&lh===0&&(lh=62500*MS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&lc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>lh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function sc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var oc=null;function lc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,oc=new Map,n.forEach(VS,e),oc=null,sc.call(e))}function VS(e,n){if(!(n.state.loading&4)){var a=oc.get(e);if(a)var s=a.get(null);else{a=new Map,oc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var g=u[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}u=n.instance,g=u.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,u),a.set(g,u),this.count++,s=sc.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Bo={$$typeof:P,Provider:null,Consumer:null,_currentValue:ot,_currentValue2:ot,_threadCount:0};function kS(e,n,a,s,u,f,g,R,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qt(0),this.hiddenUpdates=qt(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function Hg(e,n,a,s,u,f,g,R,F,nt,ht,Mt){return e=new kS(e,n,a,g,F,nt,ht,Mt,R),n=1,f===!0&&(n|=24),f=Jn(3,null,null,n),e.current=f,f.stateNode=e,n=Hu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Xu(f),e}function Gg(e){return e?(e=Kr,e):Kr}function Vg(e,n,a,s,u,f){u=Gg(u),s.context===null?s.context=u:s.pendingContext=u,s=Ba(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Fa(e,s,n),a!==null&&(Yn(a,e,n),go(a,e,n))}function kg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function ch(e,n){kg(e,n),(e=e.alternate)&&kg(e,n)}function Xg(e){if(e.tag===13||e.tag===31){var n=_r(e,67108864);n!==null&&Yn(n,e,67108864),ch(e,67108864)}}function Wg(e){if(e.tag===13||e.tag===31){var n=ii();n=fr(n);var a=_r(e,n);a!==null&&Yn(a,e,n),ch(e,n)}}var cc=!0;function XS(e,n,a,s){var u=U.T;U.T=null;var f=I.p;try{I.p=2,uh(e,n,a,s)}finally{I.p=f,U.T=u}}function WS(e,n,a,s){var u=U.T;U.T=null;var f=I.p;try{I.p=8,uh(e,n,a,s)}finally{I.p=f,U.T=u}}function uh(e,n,a,s){if(cc){var u=fh(s);if(u===null)Kf(e,n,s,uc,a),qg(e,s);else if(qS(u,e,n,a,s))s.stopPropagation();else if(qg(e,s),n&4&&-1<YS.indexOf(e)){for(;u!==null;){var f=wa(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Ct(f.pendingLanes);if(g!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;g;){var F=1<<31-Pt(g);R.entanglements[1]|=F,g&=~F}zi(f),(Ne&6)===0&&(Yl=Rt()+500,Lo(0))}}break;case 31:case 13:R=_r(f,2),R!==null&&Yn(R,f,2),Zl(),ch(f,2)}if(f=fh(s),f===null&&Kf(e,n,s,uc,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else Kf(e,n,s,null,a)}}function fh(e){return e=hu(e),hh(e)}var uc=null;function hh(e){if(uc=null,e=Ca(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return uc=e,null}function Yg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Je()){case C:return 2;case y:return 8;case J:case vt:return 32;case At:return 268435456;default:return 32}default:return 32}}var dh=!1,Ka=null,Qa=null,Ja=null,Fo=new Map,Ho=new Map,$a=[],YS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qg(e,n){switch(e){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":Fo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(n.pointerId)}}function Go(e,n,a,s,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=wa(n),n!==null&&Xg(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function qS(e,n,a,s,u){switch(n){case"focusin":return Ka=Go(Ka,e,n,a,s,u),!0;case"dragenter":return Qa=Go(Qa,e,n,a,s,u),!0;case"mouseover":return Ja=Go(Ja,e,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return Fo.set(f,Go(Fo.get(f)||null,e,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,Ho.set(f,Go(Ho.get(f)||null,e,n,a,s,u)),!0}return!1}function Zg(e){var n=Ca(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Qs(e.priority,function(){Wg(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,Qs(e.priority,function(){Wg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=fh(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);fu=s,a.target.dispatchEvent(s),fu=null}else return n=wa(a),n!==null&&Xg(n),e.blockedOn=a,!1;n.shift()}return!0}function jg(e,n,a){fc(e)&&a.delete(n)}function ZS(){dh=!1,Ka!==null&&fc(Ka)&&(Ka=null),Qa!==null&&fc(Qa)&&(Qa=null),Ja!==null&&fc(Ja)&&(Ja=null),Fo.forEach(jg),Ho.forEach(jg)}function hc(e,n){e.blockedOn===n&&(e.blockedOn=null,dh||(dh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,ZS)))}var dc=null;function Kg(e){dc!==e&&(dc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){dc===e&&(dc=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],u=e[n+2];if(typeof s!="function"){if(hh(s||a)===null)continue;break}var f=wa(a);f!==null&&(e.splice(n,3),n-=3,ff(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function Ss(e){function n(F){return hc(F,e)}Ka!==null&&hc(Ka,e),Qa!==null&&hc(Qa,e),Ja!==null&&hc(Ja,e),Fo.forEach(n),Ho.forEach(n);for(var a=0;a<$a.length;a++){var s=$a[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<$a.length&&(a=$a[0],a.blockedOn===null);)Zg(a),a.blockedOn===null&&$a.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],g=u[En]||null;if(typeof f=="function")g||Kg(a);else if(g){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,g=f[En]||null)R=g.formAction;else if(hh(u)!==null)continue}else R=g.action;typeof R=="function"?a[s+1]=R:(a.splice(s,3),s-=3),Kg(a)}}}function Qg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ph(e){this._internalRoot=e}pc.prototype.render=ph.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ii();Vg(a,s,e,n,null,null)},pc.prototype.unmount=ph.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Vg(e.current,2,null,e,null,null),Zl(),n[ji]=null}};function pc(e){this._internalRoot=e}pc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ks();e={blockedOn:null,target:e,priority:n};for(var a=0;a<$a.length&&n!==0&&n<$a[a].priority;a++);$a.splice(a,0,e),a===0&&Zg(e)}};var Jg=t.version;if(Jg!=="19.2.6")throw Error(r(527,Jg,"19.2.6"));I.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=d(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var jS={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mc.isDisabled&&mc.supportsFiber)try{ct=mc.inject(jS),ft=mc}catch{}}return ko.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",u=r0,f=s0,g=o0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=Hg(e,1,!1,null,null,a,s,null,u,f,g,Qg),e[ji]=n.current,jf(e),new ph(n)},ko.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,u="",f=r0,g=s0,R=o0,F=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=Hg(e,1,!0,n,a??null,s,u,F,f,g,R,Qg),n.context=Gg(null),a=n.current,s=ii(),s=fr(s),u=Ba(s),u.callback=null,Fa(a,u,s),a=s,n.current.lanes=a,te(n,a),zi(n),e[ji]=n.current,jf(e),new pc(n)},ko.version="19.2.6",ko}var l_;function rM(){if(l_)return _h.exports;l_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),_h.exports=aM(),_h.exports}var sM=rM();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const np="184",oM=0,c_=1,lM=2,Wc=1,cv=2,$o=3,ur=0,qn=1,Hi=2,Sa=0,Gs=1,u_=2,f_=3,h_=4,cM=5,Pr=100,uM=101,fM=102,hM=103,dM=104,pM=200,mM=201,gM=202,_M=203,od=204,ld=205,vM=206,xM=207,SM=208,MM=209,yM=210,EM=211,bM=212,TM=213,AM=214,cd=0,ud=1,fd=2,ks=3,hd=4,dd=5,pd=6,md=7,ip=0,RM=1,CM=2,Xi=0,uv=1,fv=2,hv=3,dv=4,pv=5,mv=6,gv=7,_v=300,Fr=301,Xs=302,Mh=303,yh=304,ou=306,el=1e3,xa=1001,gd=1002,Cn=1003,wM=1004,gc=1005,Pn=1006,Eh=1007,Ir=1008,oi=1009,vv=1010,xv=1011,nl=1012,ap=1013,Yi=1014,Vi=1015,Ea=1016,rp=1017,sp=1018,il=1020,Sv=35902,Mv=35899,yv=1021,Ev=1022,Di=1023,ba=1026,Br=1027,bv=1028,op=1029,Hr=1030,lp=1031,cp=1033,Yc=33776,qc=33777,Zc=33778,jc=33779,_d=35840,vd=35841,xd=35842,Sd=35843,Md=36196,yd=37492,Ed=37496,bd=37488,Td=37489,Qc=37490,Ad=37491,Rd=37808,Cd=37809,wd=37810,Dd=37811,Ud=37812,Ld=37813,Nd=37814,Od=37815,Pd=37816,zd=37817,Id=37818,Bd=37819,Fd=37820,Hd=37821,Gd=36492,Vd=36494,kd=36495,Xd=36283,Wd=36284,Jc=36285,Yd=36286,DM=3200,$c=0,UM=1,or="",xi="srgb",tu="srgb-linear",eu="linear",Ve="srgb",Ms=7680,d_=519,LM=512,NM=513,OM=514,up=515,PM=516,zM=517,fp=518,IM=519,qd=35044,p_="300 es",ki=2e3,al=2001;function BM(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function nu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function FM(){const o=nu("canvas");return o.style.display="block",o}const m_={};function iu(...o){const t="THREE."+o.shift();console.log(t,...o)}function Tv(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ee(...o){o=Tv(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function Te(...o){o=Tv(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function Zd(...o){const t=o.join(" ");t in m_||(m_[t]=!0,ee(...o))}function HM(o,t,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const GM={[cd]:ud,[fd]:pd,[hd]:md,[ks]:dd,[ud]:cd,[pd]:fd,[md]:hd,[dd]:ks};class Gr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bh=Math.PI/180,jd=180/Math.PI;function cr(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[o&255]+Ln[o>>8&255]+Ln[o>>16&255]+Ln[o>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function be(o,t,i){return Math.max(t,Math.min(i,o))}function VM(o,t){return(o%t+t)%t}function Th(o,t,i){return(1-i)*o+i*t}function Gi(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function qe(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const gp=class gp{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(be(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(be(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*r-h*l+t.x,this.y=c*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gp.prototype.isVector2=!0;let pe=gp;class qs{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,h,p){let m=r[l+0],d=r[l+1],x=r[l+2],v=r[l+3],_=c[h+0],E=c[h+1],A=c[h+2],D=c[h+3];if(v!==D||m!==_||d!==E||x!==A){let M=m*_+d*E+x*A+v*D;M<0&&(_=-_,E=-E,A=-A,D=-D,M=-M);let S=1-p;if(M<.9995){const w=Math.acos(M),P=Math.sin(w);S=Math.sin(S*w)/P,p=Math.sin(p*w)/P,m=m*S+_*p,d=d*S+E*p,x=x*S+A*p,v=v*S+D*p}else{m=m*S+_*p,d=d*S+E*p,x=x*S+A*p,v=v*S+D*p;const w=1/Math.sqrt(m*m+d*d+x*x+v*v);m*=w,d*=w,x*=w,v*=w}}t[i]=m,t[i+1]=d,t[i+2]=x,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,c,h){const p=r[l],m=r[l+1],d=r[l+2],x=r[l+3],v=c[h],_=c[h+1],E=c[h+2],A=c[h+3];return t[i]=p*A+x*v+m*E-d*_,t[i+1]=m*A+x*_+d*v-p*E,t[i+2]=d*A+x*E+p*_-m*v,t[i+3]=x*A-p*v-m*_-d*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,h=t._order,p=Math.cos,m=Math.sin,d=p(r/2),x=p(l/2),v=p(c/2),_=m(r/2),E=m(l/2),A=m(c/2);switch(h){case"XYZ":this._x=_*x*v+d*E*A,this._y=d*E*v-_*x*A,this._z=d*x*A+_*E*v,this._w=d*x*v-_*E*A;break;case"YXZ":this._x=_*x*v+d*E*A,this._y=d*E*v-_*x*A,this._z=d*x*A-_*E*v,this._w=d*x*v+_*E*A;break;case"ZXY":this._x=_*x*v-d*E*A,this._y=d*E*v+_*x*A,this._z=d*x*A+_*E*v,this._w=d*x*v-_*E*A;break;case"ZYX":this._x=_*x*v-d*E*A,this._y=d*E*v+_*x*A,this._z=d*x*A-_*E*v,this._w=d*x*v+_*E*A;break;case"YZX":this._x=_*x*v+d*E*A,this._y=d*E*v+_*x*A,this._z=d*x*A-_*E*v,this._w=d*x*v-_*E*A;break;case"XZY":this._x=_*x*v-d*E*A,this._y=d*E*v-_*x*A,this._z=d*x*A+_*E*v,this._w=d*x*v+_*E*A;break;default:ee("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],h=i[1],p=i[5],m=i[9],d=i[2],x=i[6],v=i[10],_=r+p+v;if(_>0){const E=.5/Math.sqrt(_+1);this._w=.25/E,this._x=(x-m)*E,this._y=(c-d)*E,this._z=(h-l)*E}else if(r>p&&r>v){const E=2*Math.sqrt(1+r-p-v);this._w=(x-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(c+d)/E}else if(p>v){const E=2*Math.sqrt(1+p-r-v);this._w=(c-d)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+x)/E}else{const E=2*Math.sqrt(1+v-r-p);this._w=(h-l)/E,this._x=(c+d)/E,this._y=(m+x)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,h=t._w,p=i._x,m=i._y,d=i._z,x=i._w;return this._x=r*x+h*p+l*d-c*m,this._y=l*x+h*m+c*p-r*d,this._z=c*x+h*d+r*m-l*p,this._w=h*x-r*p-l*m-c*d,this._onChangeCallback(),this}slerp(t,i){let r=t._x,l=t._y,c=t._z,h=t._w,p=this.dot(t);p<0&&(r=-r,l=-l,c=-c,h=-h,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),x=Math.sin(d);m=Math.sin(m*d)/x,i=Math.sin(i*d)/x,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const _p=class _p{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(g_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(g_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,h=t.y,p=t.z,m=t.w,d=2*(h*l-p*r),x=2*(p*i-c*l),v=2*(c*r-h*i);return this.x=i+m*d+h*v-p*x,this.y=r+m*x+p*d-c*v,this.z=l+m*v+c*x-h*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this.z=be(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this.z=be(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(be(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,h=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*h-r*m,this.z=r*p-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Ah.copy(this).projectOnVector(t),this.sub(Ah)}reflect(t){return this.sub(Ah.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(be(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_p.prototype.isVector3=!0;let tt=_p;const Ah=new tt,g_=new qs,vp=class vp{constructor(t,i,r,l,c,h,p,m,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,p,m,d)}set(t,i,r,l,c,h,p,m,d){const x=this.elements;return x[0]=t,x[1]=l,x[2]=p,x[3]=i,x[4]=c,x[5]=m,x[6]=r,x[7]=h,x[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],p=r[3],m=r[6],d=r[1],x=r[4],v=r[7],_=r[2],E=r[5],A=r[8],D=l[0],M=l[3],S=l[6],w=l[1],P=l[4],N=l[7],Y=l[2],O=l[5],B=l[8];return c[0]=h*D+p*w+m*Y,c[3]=h*M+p*P+m*O,c[6]=h*S+p*N+m*B,c[1]=d*D+x*w+v*Y,c[4]=d*M+x*P+v*O,c[7]=d*S+x*N+v*B,c[2]=_*D+E*w+A*Y,c[5]=_*M+E*P+A*O,c[8]=_*S+E*N+A*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],x=t[8];return i*h*x-i*p*d-r*c*x+r*p*m+l*c*d-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],x=t[8],v=x*h-p*d,_=p*m-x*c,E=d*c-h*m,A=i*v+r*_+l*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/A;return t[0]=v*D,t[1]=(l*d-x*r)*D,t[2]=(p*r-l*h)*D,t[3]=_*D,t[4]=(x*i-l*m)*D,t[5]=(l*c-p*i)*D,t[6]=E*D,t[7]=(r*m-d*i)*D,t[8]=(h*i-r*c)*D,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,h,p){const m=Math.cos(c),d=Math.sin(c);return this.set(r*m,r*d,-r*(m*h+d*p)+h+t,-l*d,l*m,-l*(-d*h+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(Rh.makeScale(t,i)),this}rotate(t){return this.premultiply(Rh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Rh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}};vp.prototype.isMatrix3=!0;let le=vp;const Rh=new le,__=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),v_=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kM(){const o={enabled:!0,workingColorSpace:tu,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ve&&(l.r=Ma(l.r),l.g=Ma(l.g),l.b=Ma(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ve&&(l.r=Vs(l.r),l.g=Vs(l.g),l.b=Vs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===or?eu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Zd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Zd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[tu]:{primaries:t,whitePoint:r,transfer:eu,toXYZ:__,fromXYZ:v_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:t,whitePoint:r,transfer:Ve,toXYZ:__,fromXYZ:v_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),o}const Ee=kM();function Ma(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Vs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ys;class XM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ys===void 0&&(ys=nu("canvas")),ys.width=t.width,ys.height=t.height;const l=ys.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ys}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=nu("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ma(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ma(i[r]/255)*255):i[r]=Ma(i[r]);return{data:i,width:t.width,height:t.height}}else return ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let WM=0;class hp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=cr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?c.push(Ch(l[h].image)):c.push(Ch(l[h]))}else c=Ch(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function Ch(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?XM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ee("Texture: Unable to serialize Texture."),{})}let YM=0;const wh=new tt;class zn extends Gr{constructor(t=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,r=xa,l=xa,c=Pn,h=Ir,p=Di,m=oi,d=zn.DEFAULT_ANISOTROPY,x=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=cr(),this.name="",this.source=new hp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(wh).x}get height(){return this.source.getSize(wh).y}get depth(){return this.source.getSize(wh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){ee(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ee(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_v)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case el:t.x=t.x-Math.floor(t.x);break;case xa:t.x=t.x<0?0:1;break;case gd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case el:t.y=t.y-Math.floor(t.y);break;case xa:t.y=t.y<0?0:1;break;case gd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=_v;zn.DEFAULT_ANISOTROPY=1;const xp=class xp{constructor(t=0,i=0,r=0,l=1){this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,d=m[0],x=m[4],v=m[8],_=m[1],E=m[5],A=m[9],D=m[2],M=m[6],S=m[10];if(Math.abs(x-_)<.01&&Math.abs(v-D)<.01&&Math.abs(A-M)<.01){if(Math.abs(x+_)<.1&&Math.abs(v+D)<.1&&Math.abs(A+M)<.1&&Math.abs(d+E+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(d+1)/2,N=(E+1)/2,Y=(S+1)/2,O=(x+_)/4,B=(v+D)/4,b=(A+M)/4;return P>N&&P>Y?P<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(P),l=O/r,c=B/r):N>Y?N<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),r=O/l,c=b/l):Y<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(Y),r=B/c,l=b/c),this.set(r,l,c,i),this}let w=Math.sqrt((M-A)*(M-A)+(v-D)*(v-D)+(_-x)*(_-x));return Math.abs(w)<.001&&(w=1),this.x=(M-A)/w,this.y=(v-D)/w,this.z=(_-x)/w,this.w=Math.acos((d+E+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this.z=be(this.z,t.z,i.z),this.w=be(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this.z=be(this.z,t,i),this.w=be(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(be(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xp.prototype.isVector4=!0;let sn=xp;class qM extends Gr{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new sn(0,0,t,i),this.scissorTest=!1,this.viewport=new sn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:r.depth},c=new zn(l),h=r.count;for(let p=0;p<h;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new hp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends qM{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Av extends zn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ZM extends zn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const su=class su{constructor(t,i,r,l,c,h,p,m,d,x,v,_,E,A,D,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,p,m,d,x,v,_,E,A,D,M)}set(t,i,r,l,c,h,p,m,d,x,v,_,E,A,D,M){const S=this.elements;return S[0]=t,S[4]=i,S[8]=r,S[12]=l,S[1]=c,S[5]=h,S[9]=p,S[13]=m,S[2]=d,S[6]=x,S[10]=v,S[14]=_,S[3]=E,S[7]=A,S[11]=D,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new su().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,r=t.elements,l=1/Es.setFromMatrixColumn(t,0).length(),c=1/Es.setFromMatrixColumn(t,1).length(),h=1/Es.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,h=Math.cos(r),p=Math.sin(r),m=Math.cos(l),d=Math.sin(l),x=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const _=h*x,E=h*v,A=p*x,D=p*v;i[0]=m*x,i[4]=-m*v,i[8]=d,i[1]=E+A*d,i[5]=_-D*d,i[9]=-p*m,i[2]=D-_*d,i[6]=A+E*d,i[10]=h*m}else if(t.order==="YXZ"){const _=m*x,E=m*v,A=d*x,D=d*v;i[0]=_+D*p,i[4]=A*p-E,i[8]=h*d,i[1]=h*v,i[5]=h*x,i[9]=-p,i[2]=E*p-A,i[6]=D+_*p,i[10]=h*m}else if(t.order==="ZXY"){const _=m*x,E=m*v,A=d*x,D=d*v;i[0]=_-D*p,i[4]=-h*v,i[8]=A+E*p,i[1]=E+A*p,i[5]=h*x,i[9]=D-_*p,i[2]=-h*d,i[6]=p,i[10]=h*m}else if(t.order==="ZYX"){const _=h*x,E=h*v,A=p*x,D=p*v;i[0]=m*x,i[4]=A*d-E,i[8]=_*d+D,i[1]=m*v,i[5]=D*d+_,i[9]=E*d-A,i[2]=-d,i[6]=p*m,i[10]=h*m}else if(t.order==="YZX"){const _=h*m,E=h*d,A=p*m,D=p*d;i[0]=m*x,i[4]=D-_*v,i[8]=A*v+E,i[1]=v,i[5]=h*x,i[9]=-p*x,i[2]=-d*x,i[6]=E*v+A,i[10]=_-D*v}else if(t.order==="XZY"){const _=h*m,E=h*d,A=p*m,D=p*d;i[0]=m*x,i[4]=-v,i[8]=d*x,i[1]=_*v+D,i[5]=h*x,i[9]=E*v-A,i[2]=A*v-E,i[6]=p*x,i[10]=D*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jM,t,KM)}lookAt(t,i,r){const l=this.elements;return ai.subVectors(t,i),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),er.crossVectors(r,ai),er.lengthSq()===0&&(Math.abs(r.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),er.crossVectors(r,ai)),er.normalize(),_c.crossVectors(ai,er),l[0]=er.x,l[4]=_c.x,l[8]=ai.x,l[1]=er.y,l[5]=_c.y,l[9]=ai.y,l[2]=er.z,l[6]=_c.z,l[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],p=r[4],m=r[8],d=r[12],x=r[1],v=r[5],_=r[9],E=r[13],A=r[2],D=r[6],M=r[10],S=r[14],w=r[3],P=r[7],N=r[11],Y=r[15],O=l[0],B=l[4],b=l[8],z=l[12],K=l[1],H=l[5],$=l[9],ut=l[13],pt=l[2],q=l[6],U=l[10],I=l[14],ot=l[3],mt=l[7],Et=l[11],L=l[15];return c[0]=h*O+p*K+m*pt+d*ot,c[4]=h*B+p*H+m*q+d*mt,c[8]=h*b+p*$+m*U+d*Et,c[12]=h*z+p*ut+m*I+d*L,c[1]=x*O+v*K+_*pt+E*ot,c[5]=x*B+v*H+_*q+E*mt,c[9]=x*b+v*$+_*U+E*Et,c[13]=x*z+v*ut+_*I+E*L,c[2]=A*O+D*K+M*pt+S*ot,c[6]=A*B+D*H+M*q+S*mt,c[10]=A*b+D*$+M*U+S*Et,c[14]=A*z+D*ut+M*I+S*L,c[3]=w*O+P*K+N*pt+Y*ot,c[7]=w*B+P*H+N*q+Y*mt,c[11]=w*b+P*$+N*U+Y*Et,c[15]=w*z+P*ut+N*I+Y*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],h=t[1],p=t[5],m=t[9],d=t[13],x=t[2],v=t[6],_=t[10],E=t[14],A=t[3],D=t[7],M=t[11],S=t[15],w=m*E-d*_,P=p*E-d*v,N=p*_-m*v,Y=h*E-d*x,O=h*_-m*x,B=h*v-p*x;return i*(D*w-M*P+S*N)-r*(A*w-M*Y+S*O)+l*(A*P-D*Y+S*B)-c*(A*N-D*O+M*B)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],x=t[8],v=t[9],_=t[10],E=t[11],A=t[12],D=t[13],M=t[14],S=t[15],w=i*p-r*h,P=i*m-l*h,N=i*d-c*h,Y=r*m-l*p,O=r*d-c*p,B=l*d-c*m,b=x*D-v*A,z=x*M-_*A,K=x*S-E*A,H=v*M-_*D,$=v*S-E*D,ut=_*S-E*M,pt=w*ut-P*$+N*H+Y*K-O*z+B*b;if(pt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/pt;return t[0]=(p*ut-m*$+d*H)*q,t[1]=(l*$-r*ut-c*H)*q,t[2]=(D*B-M*O+S*Y)*q,t[3]=(_*O-v*B-E*Y)*q,t[4]=(m*K-h*ut-d*z)*q,t[5]=(i*ut-l*K+c*z)*q,t[6]=(M*N-A*B-S*P)*q,t[7]=(x*B-_*N+E*P)*q,t[8]=(h*$-p*K+d*b)*q,t[9]=(r*K-i*$-c*b)*q,t[10]=(A*O-D*N+S*w)*q,t[11]=(v*N-x*O-E*w)*q,t[12]=(p*z-h*H-m*b)*q,t[13]=(i*H-r*z+l*b)*q,t[14]=(D*P-A*Y-M*w)*q,t[15]=(x*Y-v*P+_*w)*q,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=t.x,p=t.y,m=t.z,d=c*h,x=c*p;return this.set(d*h+r,d*p-l*m,d*m+l*p,0,d*p+l*m,x*p+r,x*m-l*h,0,d*m-l*p,x*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,h){return this.set(1,r,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,h=i._y,p=i._z,m=i._w,d=c+c,x=h+h,v=p+p,_=c*d,E=c*x,A=c*v,D=h*x,M=h*v,S=p*v,w=m*d,P=m*x,N=m*v,Y=r.x,O=r.y,B=r.z;return l[0]=(1-(D+S))*Y,l[1]=(E+N)*Y,l[2]=(A-P)*Y,l[3]=0,l[4]=(E-N)*O,l[5]=(1-(_+S))*O,l[6]=(M+w)*O,l[7]=0,l[8]=(A+P)*B,l[9]=(M-w)*B,l[10]=(1-(_+D))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return r.set(1,1,1),i.identity(),this;let h=Es.set(l[0],l[1],l[2]).length();const p=Es.set(l[4],l[5],l[6]).length(),m=Es.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Ri.copy(this);const d=1/h,x=1/p,v=1/m;return Ri.elements[0]*=d,Ri.elements[1]*=d,Ri.elements[2]*=d,Ri.elements[4]*=x,Ri.elements[5]*=x,Ri.elements[6]*=x,Ri.elements[8]*=v,Ri.elements[9]*=v,Ri.elements[10]*=v,i.setFromRotationMatrix(Ri),r.x=h,r.y=p,r.z=m,this}makePerspective(t,i,r,l,c,h,p=ki,m=!1){const d=this.elements,x=2*c/(i-t),v=2*c/(r-l),_=(i+t)/(i-t),E=(r+l)/(r-l);let A,D;if(m)A=c/(h-c),D=h*c/(h-c);else if(p===ki)A=-(h+c)/(h-c),D=-2*h*c/(h-c);else if(p===al)A=-h/(h-c),D=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=x,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=v,d[9]=E,d[13]=0,d[2]=0,d[6]=0,d[10]=A,d[14]=D,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,i,r,l,c,h,p=ki,m=!1){const d=this.elements,x=2/(i-t),v=2/(r-l),_=-(i+t)/(i-t),E=-(r+l)/(r-l);let A,D;if(m)A=1/(h-c),D=h/(h-c);else if(p===ki)A=-2/(h-c),D=-(h+c)/(h-c);else if(p===al)A=-1/(h-c),D=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=x,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=v,d[9]=0,d[13]=E,d[2]=0,d[6]=0,d[10]=A,d[14]=D,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}};su.prototype.isMatrix4=!0;let on=su;const Es=new tt,Ri=new on,jM=new tt(0,0,0),KM=new tt(1,1,1),er=new tt,_c=new tt,ai=new tt,x_=new on,S_=new qs;class Ta{constructor(t=0,i=0,r=0,l=Ta.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],h=l[4],p=l[8],m=l[1],d=l[5],x=l[9],v=l[2],_=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(be(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,E),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-be(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(p,E),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(be(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,E),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-be(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(be(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,d),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(p,E));break;case"XZY":this._z=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-x,E),this._y=0);break;default:ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return x_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(x_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return S_.setFromEuler(this),this.setFromQuaternion(S_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ta.DEFAULT_ORDER="XYZ";class Rv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let QM=0;const M_=new tt,bs=new qs,da=new on,vc=new tt,Xo=new tt,JM=new tt,$M=new qs,y_=new tt(1,0,0),E_=new tt(0,1,0),b_=new tt(0,0,1),T_={type:"added"},ty={type:"removed"},Ts={type:"childadded",child:null},Dh={type:"childremoved",child:null};class Hn extends Gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const t=new tt,i=new Ta,r=new qs,l=new tt(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new on},normalMatrix:{value:new le}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return bs.setFromAxisAngle(t,i),this.quaternion.multiply(bs),this}rotateOnWorldAxis(t,i){return bs.setFromAxisAngle(t,i),this.quaternion.premultiply(bs),this}rotateX(t){return this.rotateOnAxis(y_,t)}rotateY(t){return this.rotateOnAxis(E_,t)}rotateZ(t){return this.rotateOnAxis(b_,t)}translateOnAxis(t,i){return M_.copy(t).applyQuaternion(this.quaternion),this.position.add(M_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(y_,t)}translateY(t){return this.translateOnAxis(E_,t)}translateZ(t){return this.translateOnAxis(b_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?vc.copy(t):vc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(Xo,vc,this.up):da.lookAt(vc,Xo,this.up),this.quaternion.setFromRotationMatrix(da),l&&(da.extractRotation(l.matrixWorld),bs.setFromRotationMatrix(da),this.quaternion.premultiply(bs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Te("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(T_),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null):Te("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(ty),Dh.child=t,this.dispatchEvent(Dh),Dh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),da.multiply(t.parent.matrixWorld)),t.applyMatrix4(da),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(T_),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,t,JM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,$M,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,r=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,x=m.length;d<x;d++){const v=m[d];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=h(t.geometries),m=h(t.materials),d=h(t.textures),x=h(t.images),v=h(t.shapes),_=h(t.skeletons),E=h(t.animations),A=h(t.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),d.length>0&&(r.textures=d),x.length>0&&(r.images=x),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),E.length>0&&(r.animations=E),A.length>0&&(r.nodes=A)}return r.object=l,r;function h(p){const m=[];for(const d in p){const x=p[d];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Hn.DEFAULT_UP=new tt(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class xc extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ey={type:"move"};class Uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,h=null;const p=this._targetRay,m=this._grip,d=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(d&&t.hand){h=!0;for(const D of t.hand.values()){const M=i.getJointPose(D,r),S=this._getHandJoint(d,D);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const x=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],_=x.position.distanceTo(v.position),E=.02,A=.005;d.inputState.pinching&&_>E+A?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&_<=E-A&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));p!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(ey)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new xc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const Cv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function Lh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Me{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=xi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Ee.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ee.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Ee.workingColorSpace){if(t=VM(t,1),i=be(i,0,1),r=be(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Lh(h,c,t+1/3),this.g=Lh(h,c,t),this.b=Lh(h,c,t-1/3)}return Ee.colorSpaceToWorking(this,l),this}setStyle(t,i=xi){function r(c){c!==void 0&&parseFloat(c)<1&&ee("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ee("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);ee("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=xi){const r=Cv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):ee("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ma(t.r),this.g=Ma(t.g),this.b=Ma(t.b),this}copyLinearToSRGB(t){return this.r=Vs(t.r),this.g=Vs(t.g),this.b=Vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xi){return Ee.workingToColorSpace(Nn.copy(this),t),Math.round(be(Nn.r*255,0,255))*65536+Math.round(be(Nn.g*255,0,255))*256+Math.round(be(Nn.b*255,0,255))}getHexString(t=xi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ee.workingColorSpace){Ee.workingToColorSpace(Nn.copy(this),i);const r=Nn.r,l=Nn.g,c=Nn.b,h=Math.max(r,l,c),p=Math.min(r,l,c);let m,d;const x=(p+h)/2;if(p===h)m=0,d=0;else{const v=h-p;switch(d=x<=.5?v/(h+p):v/(2-h-p),h){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return t.h=m,t.s=d,t.l=x,t}getRGB(t,i=Ee.workingColorSpace){return Ee.workingToColorSpace(Nn.copy(this),i),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=xi){Ee.workingToColorSpace(Nn.copy(this),t);const i=Nn.r,r=Nn.g,l=Nn.b;return t!==xi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(nr),this.setHSL(nr.h+t,nr.s+i,nr.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(nr),t.getHSL(Sc);const r=Th(nr.h,Sc.h,i),l=Th(nr.s,Sc.s,i),c=Th(nr.l,Sc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Me;Me.NAMES=Cv;class dp{constructor(t,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new Me(t),this.near=i,this.far=r}clone(){return new dp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ny extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ta,this.environmentIntensity=1,this.environmentRotation=new Ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ci=new tt,pa=new tt,Nh=new tt,ma=new tt,As=new tt,Rs=new tt,A_=new tt,Oh=new tt,Ph=new tt,zh=new tt,Ih=new sn,Bh=new sn,Fh=new sn;class Mi{constructor(t=new tt,i=new tt,r=new tt){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ci.subVectors(t,i),l.cross(Ci);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Ci.subVectors(l,i),pa.subVectors(r,i),Nh.subVectors(t,i);const h=Ci.dot(Ci),p=Ci.dot(pa),m=Ci.dot(Nh),d=pa.dot(pa),x=pa.dot(Nh),v=h*d-p*p;if(v===0)return c.set(0,0,0),null;const _=1/v,E=(d*m-p*x)*_,A=(h*x-p*m)*_;return c.set(1-E-A,A,E)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ma)===null?!1:ma.x>=0&&ma.y>=0&&ma.x+ma.y<=1}static getInterpolation(t,i,r,l,c,h,p,m){return this.getBarycoord(t,i,r,l,ma)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ma.x),m.addScaledVector(h,ma.y),m.addScaledVector(p,ma.z),m)}static getInterpolatedAttribute(t,i,r,l,c,h){return Ih.setScalar(0),Bh.setScalar(0),Fh.setScalar(0),Ih.fromBufferAttribute(t,i),Bh.fromBufferAttribute(t,r),Fh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Ih,c.x),h.addScaledVector(Bh,c.y),h.addScaledVector(Fh,c.z),h}static isFrontFacing(t,i,r,l){return Ci.subVectors(r,i),pa.subVectors(t,i),Ci.cross(pa).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),pa.subVectors(this.a,this.b),Ci.cross(pa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Mi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return Mi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return Mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let h,p;As.subVectors(l,r),Rs.subVectors(c,r),Oh.subVectors(t,r);const m=As.dot(Oh),d=Rs.dot(Oh);if(m<=0&&d<=0)return i.copy(r);Ph.subVectors(t,l);const x=As.dot(Ph),v=Rs.dot(Ph);if(x>=0&&v<=x)return i.copy(l);const _=m*v-x*d;if(_<=0&&m>=0&&x<=0)return h=m/(m-x),i.copy(r).addScaledVector(As,h);zh.subVectors(t,c);const E=As.dot(zh),A=Rs.dot(zh);if(A>=0&&E<=A)return i.copy(c);const D=E*d-m*A;if(D<=0&&d>=0&&A<=0)return p=d/(d-A),i.copy(r).addScaledVector(Rs,p);const M=x*A-E*v;if(M<=0&&v-x>=0&&E-A>=0)return A_.subVectors(c,l),p=(v-x)/(v-x+(E-A)),i.copy(l).addScaledVector(A_,p);const S=1/(M+D+_);return h=D*S,p=_*S,i.copy(r).addScaledVector(As,h).addScaledVector(Rs,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class rl{constructor(t=new tt(1/0,1/0,1/0),i=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(wi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(wi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=wi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,p=c.count;h<p;h++)t.isMesh===!0?t.getVertexPosition(h,wi):wi.fromBufferAttribute(c,h),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Mc.copy(r.boundingBox)),Mc.applyMatrix4(t.matrixWorld),this.union(Mc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wo),yc.subVectors(this.max,Wo),Cs.subVectors(t.a,Wo),ws.subVectors(t.b,Wo),Ds.subVectors(t.c,Wo),ir.subVectors(ws,Cs),ar.subVectors(Ds,ws),Dr.subVectors(Cs,Ds);let i=[0,-ir.z,ir.y,0,-ar.z,ar.y,0,-Dr.z,Dr.y,ir.z,0,-ir.x,ar.z,0,-ar.x,Dr.z,0,-Dr.x,-ir.y,ir.x,0,-ar.y,ar.x,0,-Dr.y,Dr.x,0];return!Hh(i,Cs,ws,Ds,yc)||(i=[1,0,0,0,1,0,0,0,1],!Hh(i,Cs,ws,Ds,yc))?!1:(Ec.crossVectors(ir,ar),i=[Ec.x,Ec.y,Ec.z],Hh(i,Cs,ws,Ds,yc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ga[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ga[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ga[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ga[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ga[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ga[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ga[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ga[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ga),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ga=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],wi=new tt,Mc=new rl,Cs=new tt,ws=new tt,Ds=new tt,ir=new tt,ar=new tt,Dr=new tt,Wo=new tt,yc=new tt,Ec=new tt,Ur=new tt;function Hh(o,t,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){Ur.fromArray(o,c);const p=l.x*Math.abs(Ur.x)+l.y*Math.abs(Ur.y)+l.z*Math.abs(Ur.z),m=t.dot(Ur),d=i.dot(Ur),x=r.dot(Ur);if(Math.max(-Math.max(m,d,x),Math.min(m,d,x))>p)return!1}return!0}const gn=new tt,bc=new pe;let iy=0;class Ui extends Gr{constructor(t,i,r=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=qd,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)bc.fromBufferAttribute(this,i),bc.applyMatrix3(t),this.setXY(i,bc.x,bc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix3(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix4(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.applyNormalMatrix(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.transformDirection(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Gi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=qe(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Gi(i,this.array)),i}setX(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Gi(i,this.array)),i}setY(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Gi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Gi(i,this.array)),i}setW(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=qe(i,this.array),r=qe(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=qe(i,this.array),r=qe(r,this.array),l=qe(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=qe(i,this.array),r=qe(r,this.array),l=qe(l,this.array),c=qe(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qd&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class wv extends Ui{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Dv extends Ui{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class ya extends Ui{constructor(t,i,r){super(new Float32Array(t),i,r)}}const ay=new rl,Yo=new tt,Gh=new tt;class pp{constructor(t=new tt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):ay.setFromPoints(t).getCenter(r);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yo.subVectors(t,this.center);const i=Yo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Yo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yo.copy(t.center).add(Gh)),this.expandByPoint(Yo.copy(t.center).sub(Gh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let ry=0;const _i=new on,Vh=new Hn,Us=new tt,ri=new rl,qo=new rl,yn=new tt;class Zi extends Gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=cr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(BM(t)?Dv:wv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new le().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _i.makeRotationFromQuaternion(t),this.applyMatrix4(_i),this}rotateX(t){return _i.makeRotationX(t),this.applyMatrix4(_i),this}rotateY(t){return _i.makeRotationY(t),this.applyMatrix4(_i),this}rotateZ(t){return _i.makeRotationZ(t),this.applyMatrix4(_i),this}translate(t,i,r){return _i.makeTranslation(t,i,r),this.applyMatrix4(_i),this}scale(t,i,r){return _i.makeScale(t,i,r),this.applyMatrix4(_i),this}lookAt(t){return Vh.lookAt(t),Vh.updateMatrix(),this.applyMatrix4(Vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new ya(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ri.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pp);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(t){const r=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const p=i[c];qo.setFromBufferAttribute(p),this.morphTargetsRelative?(yn.addVectors(ri.min,qo.min),ri.expandByPoint(yn),yn.addVectors(ri.max,qo.max),ri.expandByPoint(yn)):(ri.expandByPoint(qo.min),ri.expandByPoint(qo.max))}ri.getCenter(r);let l=0;for(let c=0,h=t.count;c<h;c++)yn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(yn));if(i)for(let c=0,h=i.length;c<h;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,x=p.count;d<x;d++)yn.fromBufferAttribute(p,d),m&&(Us.fromBufferAttribute(t,d),yn.add(Us)),l=Math.max(l,r.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),p=[],m=[];for(let b=0;b<r.count;b++)p[b]=new tt,m[b]=new tt;const d=new tt,x=new tt,v=new tt,_=new pe,E=new pe,A=new pe,D=new tt,M=new tt;function S(b,z,K){d.fromBufferAttribute(r,b),x.fromBufferAttribute(r,z),v.fromBufferAttribute(r,K),_.fromBufferAttribute(c,b),E.fromBufferAttribute(c,z),A.fromBufferAttribute(c,K),x.sub(d),v.sub(d),E.sub(_),A.sub(_);const H=1/(E.x*A.y-A.x*E.y);isFinite(H)&&(D.copy(x).multiplyScalar(A.y).addScaledVector(v,-E.y).multiplyScalar(H),M.copy(v).multiplyScalar(E.x).addScaledVector(x,-A.x).multiplyScalar(H),p[b].add(D),p[z].add(D),p[K].add(D),m[b].add(M),m[z].add(M),m[K].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let b=0,z=w.length;b<z;++b){const K=w[b],H=K.start,$=K.count;for(let ut=H,pt=H+$;ut<pt;ut+=3)S(t.getX(ut+0),t.getX(ut+1),t.getX(ut+2))}const P=new tt,N=new tt,Y=new tt,O=new tt;function B(b){Y.fromBufferAttribute(l,b),O.copy(Y);const z=p[b];P.copy(z),P.sub(Y.multiplyScalar(Y.dot(z))).normalize(),N.crossVectors(O,z);const H=N.dot(m[b])<0?-1:1;h.setXYZW(b,P.x,P.y,P.z,H)}for(let b=0,z=w.length;b<z;++b){const K=w[b],H=K.start,$=K.count;for(let ut=H,pt=H+$;ut<pt;ut+=3)B(t.getX(ut+0)),B(t.getX(ut+1)),B(t.getX(ut+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ui(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,E=r.count;_<E;_++)r.setXYZ(_,0,0,0);const l=new tt,c=new tt,h=new tt,p=new tt,m=new tt,d=new tt,x=new tt,v=new tt;if(t)for(let _=0,E=t.count;_<E;_+=3){const A=t.getX(_+0),D=t.getX(_+1),M=t.getX(_+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,M),x.subVectors(h,c),v.subVectors(l,c),x.cross(v),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,D),d.fromBufferAttribute(r,M),p.add(x),m.add(x),d.add(x),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(D,m.x,m.y,m.z),r.setXYZ(M,d.x,d.y,d.z)}else for(let _=0,E=i.count;_<E;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),h.fromBufferAttribute(i,_+2),x.subVectors(h,c),v.subVectors(l,c),x.cross(v),r.setXYZ(_+0,x.x,x.y,x.z),r.setXYZ(_+1,x.x,x.y,x.z),r.setXYZ(_+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)yn.fromBufferAttribute(t,i),yn.normalize(),t.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function t(p,m){const d=p.array,x=p.itemSize,v=p.normalized,_=new d.constructor(m.length*x);let E=0,A=0;for(let D=0,M=m.length;D<M;D++){p.isInterleavedBufferAttribute?E=m[D]*p.data.stride+p.offset:E=m[D]*x;for(let S=0;S<x;S++)_[A++]=d[E++]}return new Ui(_,x,v)}if(this.index===null)return ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Zi,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=t(m,r);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let x=0,v=d.length;x<v;x++){const _=d[x],E=t(_,r);m.push(E)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,m=h.length;p<m;p++){const d=h[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const d=r[m];t.data.attributes[m]=d.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],x=[];for(let v=0,_=d.length;v<_;v++){const E=d[v];x.push(E.toJSON(t.data))}x.length>0&&(l[m]=x,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const d in l){const x=l[d];this.setAttribute(d,x.clone(i))}const c=t.morphAttributes;for(const d in c){const x=[],v=c[d];for(let _=0,E=v.length;_<E;_++)x.push(v[_].clone(i));this.morphAttributes[d]=x}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let d=0,x=h.length;d<x;d++){const v=h[d];this.addGroup(v.start,v.count,v.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sy{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=qd,this.updateRanges=[],this.version=0,this.uuid=cr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bn=new tt;class au{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Bn.fromBufferAttribute(this,i),Bn.applyMatrix4(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Bn.fromBufferAttribute(this,i),Bn.applyNormalMatrix(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Bn.fromBufferAttribute(this,i),Bn.transformDirection(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Gi(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=qe(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Gi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Gi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Gi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Gi(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=qe(i,this.array),r=qe(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=qe(i,this.array),r=qe(r,this.array),l=qe(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=qe(i,this.array),r=qe(r,this.array),l=qe(l,this.array),c=qe(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){iu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Ui(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new au(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){iu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let oy=0;class Vr extends Gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=cr(),this.name="",this.type="Material",this.blending=Gs,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=od,this.blendDst=ld,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=d_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){ee(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ee(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(r.blending=this.blending),this.side!==ur&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==od&&(r.blendSrc=this.blendSrc),this.blendDst!==ld&&(r.blendDst=this.blendDst),this.blendEquation!==Pr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==d_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const p in c){const m=c[p];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Kd extends Vr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ls;const Zo=new tt,Ns=new tt,Os=new tt,Ps=new pe,jo=new pe,Uv=new on,Tc=new tt,Ko=new tt,Ac=new tt,R_=new pe,kh=new pe,C_=new pe;class ly extends Hn{constructor(t=new Kd){if(super(),this.isSprite=!0,this.type="Sprite",Ls===void 0){Ls=new Zi;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new sy(i,5);Ls.setIndex([0,1,2,0,2,3]),Ls.setAttribute("position",new au(r,3,0,!1)),Ls.setAttribute("uv",new au(r,2,3,!1))}this.geometry=Ls,this.material=t,this.center=new pe(.5,.5),this.count=1}raycast(t,i){t.camera===null&&Te('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ns.setFromMatrixScale(this.matrixWorld),Uv.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Os.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ns.multiplyScalar(-Os.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const h=this.center;Rc(Tc.set(-.5,-.5,0),Os,h,Ns,l,c),Rc(Ko.set(.5,-.5,0),Os,h,Ns,l,c),Rc(Ac.set(.5,.5,0),Os,h,Ns,l,c),R_.set(0,0),kh.set(1,0),C_.set(1,1);let p=t.ray.intersectTriangle(Tc,Ko,Ac,!1,Zo);if(p===null&&(Rc(Ko.set(-.5,.5,0),Os,h,Ns,l,c),kh.set(0,1),p=t.ray.intersectTriangle(Tc,Ac,Ko,!1,Zo),p===null))return;const m=t.ray.origin.distanceTo(Zo);m<t.near||m>t.far||i.push({distance:m,point:Zo.clone(),uv:Mi.getInterpolation(Zo,Tc,Ko,Ac,R_,kh,C_,new pe),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Rc(o,t,i,r,l,c){Ps.subVectors(o,i).addScalar(.5).multiply(r),l!==void 0?(jo.x=c*Ps.x-l*Ps.y,jo.y=l*Ps.x+c*Ps.y):jo.copy(Ps),o.copy(t),o.x+=jo.x,o.y+=jo.y,o.applyMatrix4(Uv)}const _a=new tt,Xh=new tt,Cc=new tt,rr=new tt,Wh=new tt,wc=new tt,Yh=new tt;class cy{constructor(t=new tt,i=new tt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_a)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=_a.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(_a.copy(this.origin).addScaledVector(this.direction,i),_a.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Xh.copy(t).add(i).multiplyScalar(.5),Cc.copy(i).sub(t).normalize(),rr.copy(this.origin).sub(Xh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Cc),p=rr.dot(this.direction),m=-rr.dot(Cc),d=rr.lengthSq(),x=Math.abs(1-h*h);let v,_,E,A;if(x>0)if(v=h*m-p,_=h*p-m,A=c*x,v>=0)if(_>=-A)if(_<=A){const D=1/x;v*=D,_*=D,E=v*(v+h*_+2*p)+_*(h*v+_+2*m)+d}else _=c,v=Math.max(0,-(h*_+p)),E=-v*v+_*(_+2*m)+d;else _=-c,v=Math.max(0,-(h*_+p)),E=-v*v+_*(_+2*m)+d;else _<=-A?(v=Math.max(0,-(-h*c+p)),_=v>0?-c:Math.min(Math.max(-c,-m),c),E=-v*v+_*(_+2*m)+d):_<=A?(v=0,_=Math.min(Math.max(-c,-m),c),E=_*(_+2*m)+d):(v=Math.max(0,-(h*c+p)),_=v>0?c:Math.min(Math.max(-c,-m),c),E=-v*v+_*(_+2*m)+d);else _=h>0?-c:c,v=Math.max(0,-(h*_+p)),E=-v*v+_*(_+2*m)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Xh).addScaledVector(Cc,_),E}intersectSphere(t,i){_a.subVectors(t.center,this.origin);const r=_a.dot(this.direction),l=_a.dot(_a)-r*r,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),p=r-h,m=r+h;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,h,p,m;const d=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,_=this.origin;return d>=0?(r=(t.min.x-_.x)*d,l=(t.max.x-_.x)*d):(r=(t.max.x-_.x)*d,l=(t.min.x-_.x)*d),x>=0?(c=(t.min.y-_.y)*x,h=(t.max.y-_.y)*x):(c=(t.max.y-_.y)*x,h=(t.min.y-_.y)*x),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),v>=0?(p=(t.min.z-_.z)*v,m=(t.max.z-_.z)*v):(p=(t.max.z-_.z)*v,m=(t.min.z-_.z)*v),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,_a)!==null}intersectTriangle(t,i,r,l,c){Wh.subVectors(i,t),wc.subVectors(r,t),Yh.crossVectors(Wh,wc);let h=this.direction.dot(Yh),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;rr.subVectors(this.origin,t);const m=p*this.direction.dot(wc.crossVectors(rr,wc));if(m<0)return null;const d=p*this.direction.dot(Wh.cross(rr));if(d<0||m+d>h)return null;const x=-p*rr.dot(Yh);return x<0?null:this.at(x/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lv extends Vr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ta,this.combine=ip,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const w_=new on,Lr=new cy,Dc=new pp,D_=new tt,Uc=new tt,Lc=new tt,Nc=new tt,qh=new tt,Oc=new tt,U_=new tt,Pc=new tt;class On extends Hn{constructor(t=new Zi,i=new Lv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){Oc.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const x=p[m],v=c[m];x!==0&&(qh.fromBufferAttribute(v,t),h?Oc.addScaledVector(qh,x):Oc.addScaledVector(qh.sub(i),x))}i.add(Oc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Dc.copy(r.boundingSphere),Dc.applyMatrix4(c),Lr.copy(t.ray).recast(t.near),!(Dc.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(Dc,D_)===null||Lr.origin.distanceToSquared(D_)>(t.far-t.near)**2))&&(w_.copy(c).invert(),Lr.copy(t.ray).applyMatrix4(w_),!(r.boundingBox!==null&&Lr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Lr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,h=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,x=c.attributes.uv1,v=c.attributes.normal,_=c.groups,E=c.drawRange;if(p!==null)if(Array.isArray(h))for(let A=0,D=_.length;A<D;A++){const M=_[A],S=h[M.materialIndex],w=Math.max(M.start,E.start),P=Math.min(p.count,Math.min(M.start+M.count,E.start+E.count));for(let N=w,Y=P;N<Y;N+=3){const O=p.getX(N),B=p.getX(N+1),b=p.getX(N+2);l=zc(this,S,t,r,d,x,v,O,B,b),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),D=Math.min(p.count,E.start+E.count);for(let M=A,S=D;M<S;M+=3){const w=p.getX(M),P=p.getX(M+1),N=p.getX(M+2);l=zc(this,h,t,r,d,x,v,w,P,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,D=_.length;A<D;A++){const M=_[A],S=h[M.materialIndex],w=Math.max(M.start,E.start),P=Math.min(m.count,Math.min(M.start+M.count,E.start+E.count));for(let N=w,Y=P;N<Y;N+=3){const O=N,B=N+1,b=N+2;l=zc(this,S,t,r,d,x,v,O,B,b),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),D=Math.min(m.count,E.start+E.count);for(let M=A,S=D;M<S;M+=3){const w=M,P=M+1,N=M+2;l=zc(this,h,t,r,d,x,v,w,P,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function uy(o,t,i,r,l,c,h,p){let m;if(t.side===qn?m=r.intersectTriangle(h,c,l,!0,p):m=r.intersectTriangle(l,c,h,t.side===ur,p),m===null)return null;Pc.copy(p),Pc.applyMatrix4(o.matrixWorld);const d=i.ray.origin.distanceTo(Pc);return d<i.near||d>i.far?null:{distance:d,point:Pc.clone(),object:o}}function zc(o,t,i,r,l,c,h,p,m,d){o.getVertexPosition(p,Uc),o.getVertexPosition(m,Lc),o.getVertexPosition(d,Nc);const x=uy(o,t,i,r,Uc,Lc,Nc,U_);if(x){const v=new tt;Mi.getBarycoord(U_,Uc,Lc,Nc,v),l&&(x.uv=Mi.getInterpolatedAttribute(l,p,m,d,v,new pe)),c&&(x.uv1=Mi.getInterpolatedAttribute(c,p,m,d,v,new pe)),h&&(x.normal=Mi.getInterpolatedAttribute(h,p,m,d,v,new tt),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const _={a:p,b:m,c:d,normal:new tt,materialIndex:0};Mi.getNormal(Uc,Lc,Nc,_.normal),x.face=_,x.barycoord=v}return x}class fy extends zn{constructor(t=null,i=1,r=1,l,c,h,p,m,d=Cn,x=Cn,v,_){super(null,h,p,m,d,x,l,c,v,_),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zh=new tt,hy=new tt,dy=new le;class Or{constructor(t=new tt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Zh.subVectors(r,i).cross(hy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,r=!0){const l=t.delta(Zh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const h=-(t.start.dot(this.normal)+this.constant)/c;return r===!0&&(h<0||h>1)?null:i.copy(t.start).addScaledVector(l,h)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||dy.getNormalMatrix(t),l=this.coplanarPoint(Zh).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new pp,py=new pe(.5,.5),Ic=new tt;class mp{constructor(t=new Or,i=new Or,r=new Or,l=new Or,c=new Or,h=new Or){this.planes=[t,i,r,l,c,h]}set(t,i,r,l,c,h){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(c),p[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=ki,r=!1){const l=this.planes,c=t.elements,h=c[0],p=c[1],m=c[2],d=c[3],x=c[4],v=c[5],_=c[6],E=c[7],A=c[8],D=c[9],M=c[10],S=c[11],w=c[12],P=c[13],N=c[14],Y=c[15];if(l[0].setComponents(d-h,E-x,S-A,Y-w).normalize(),l[1].setComponents(d+h,E+x,S+A,Y+w).normalize(),l[2].setComponents(d+p,E+v,S+D,Y+P).normalize(),l[3].setComponents(d-p,E-v,S-D,Y-P).normalize(),r)l[4].setComponents(m,_,M,N).normalize(),l[5].setComponents(d-m,E-_,S-M,Y-N).normalize();else if(l[4].setComponents(d-m,E-_,S-M,Y-N).normalize(),i===ki)l[5].setComponents(d+m,E+_,S+M,Y+N).normalize();else if(i===al)l[5].setComponents(m,_,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Nr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Nr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(t){Nr.center.set(0,0,0);const i=py.distanceTo(t.center);return Nr.radius=.7071067811865476+i,Nr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Ic.x=l.normal.x>0?t.max.x:t.min.x,Ic.y=l.normal.y>0?t.max.y:t.min.y,Ic.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Ic)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nv extends zn{constructor(t=[],i=Fr,r,l,c,h,p,m,d,x){super(t,i,r,l,c,h,p,m,d,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ov extends zn{constructor(t,i,r,l,c,h,p,m,d){super(t,i,r,l,c,h,p,m,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ws extends zn{constructor(t,i,r=Yi,l,c,h,p=Cn,m=Cn,d,x=ba,v=1){if(x!==ba&&x!==Br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:i,depth:v};super(_,l,c,h,p,m,x,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class my extends Ws{constructor(t,i=Yi,r=Fr,l,c,h=Cn,p=Cn,m,d=ba){const x={width:t,height:t,depth:1},v=[x,x,x,x,x,x];super(t,t,i,r,l,c,h,p,m,d),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Pv extends zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Si extends Zi{constructor(t=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const p=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],d=[],x=[],v=[];let _=0,E=0;A("z","y","x",-1,-1,r,i,t,h,c,0),A("z","y","x",1,-1,r,i,-t,h,c,1),A("x","z","y",1,1,t,r,i,l,h,2),A("x","z","y",1,-1,t,r,-i,l,h,3),A("x","y","z",1,-1,t,i,r,l,c,4),A("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new ya(d,3)),this.setAttribute("normal",new ya(x,3)),this.setAttribute("uv",new ya(v,2));function A(D,M,S,w,P,N,Y,O,B,b,z){const K=N/B,H=Y/b,$=N/2,ut=Y/2,pt=O/2,q=B+1,U=b+1;let I=0,ot=0;const mt=new tt;for(let Et=0;Et<U;Et++){const L=Et*H-ut;for(let Q=0;Q<q;Q++){const G=Q*K-$;mt[D]=G*w,mt[M]=L*P,mt[S]=pt,d.push(mt.x,mt.y,mt.z),mt[D]=0,mt[M]=0,mt[S]=O>0?1:-1,x.push(mt.x,mt.y,mt.z),v.push(Q/B),v.push(1-Et/b),I+=1}}for(let Et=0;Et<b;Et++)for(let L=0;L<B;L++){const Q=_+L+q*Et,G=_+L+q*(Et+1),gt=_+(L+1)+q*(Et+1),St=_+(L+1)+q*Et;m.push(Q,G,St),m.push(G,gt,St),ot+=6}p.addGroup(E,ot,z),E+=ot,_+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Si(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class lu extends Zi{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,h=i/2,p=Math.floor(r),m=Math.floor(l),d=p+1,x=m+1,v=t/p,_=i/m,E=[],A=[],D=[],M=[];for(let S=0;S<x;S++){const w=S*_-h;for(let P=0;P<d;P++){const N=P*v-c;A.push(N,-w,0),D.push(0,0,1),M.push(P/p),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let w=0;w<p;w++){const P=w+d*S,N=w+d*(S+1),Y=w+1+d*(S+1),O=w+1+d*S;E.push(P,N,O),E.push(N,Y,O)}this.setIndex(E),this.setAttribute("position",new ya(A,3)),this.setAttribute("normal",new ya(D,3)),this.setAttribute("uv",new ya(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lu(t.width,t.height,t.widthSegments,t.heightSegments)}}function Ys(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];if(L_(l))l.isRenderTargetTexture?(ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone();else if(Array.isArray(l))if(L_(l[0])){const c=[];for(let h=0,p=l.length;h<p;h++)c[h]=l[h].clone();t[i][r]=c}else t[i][r]=l.slice();else t[i][r]=l}}return t}function Fn(o){const t={};for(let i=0;i<o.length;i++){const r=Ys(o[i]);for(const l in r)t[l]=r[l]}return t}function L_(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function gy(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function zv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ee.workingColorSpace}const _y={clone:Ys,merge:Fn};var vy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Vr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vy,this.fragmentShader=xy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ys(t.uniforms),this.uniformsGroups=gy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Sy extends qi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class My extends Vr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$c,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ta,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zs extends Vr{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$c,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ta,this.combine=ip,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class yy extends Vr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=DM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ey extends Vr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Iv extends Hn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const jh=new on,N_=new tt,O_=new tt;class by{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mp,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;N_.setFromMatrixPosition(t.matrixWorld),i.position.copy(N_),O_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(O_),i.updateMatrixWorld(),jh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jh,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===al||i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(jh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Bc=new tt,Fc=new qs,Ii=new tt;class Bv extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Bc,Fc,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bc,Fc,Ii.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Bc,Fc,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bc,Fc,Ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const sr=new tt,P_=new pe,z_=new pe;class si extends Bv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=jd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return jd*2*Math.atan(Math.tan(bh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(sr.x,sr.y).multiplyScalar(-t/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(sr.x,sr.y).multiplyScalar(-t/sr.z)}getViewSize(t,i){return this.getViewBounds(t,P_,z_),i.subVectors(z_,P_)}setViewOffset(t,i,r,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(bh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,d=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/d,l*=h.width/m,r*=h.height/d}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Ty extends by{constructor(){super(new si(90,1,.5,500)),this.isPointLightShadow=!0}}class Ay extends Iv{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new Ty}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Fv extends Bv{constructor(t=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,h=r+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,h=c+d*this.view.width,p-=x*this.view.offsetY,m=p-x*this.view.height}this.projectionMatrix.makeOrthographic(c,h,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Ry extends Iv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Is=-90,Bs=1;class Cy extends Hn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(Is,Bs,t,i);l.layers=this.layers,this.add(l);const c=new si(Is,Bs,t,i);c.layers=this.layers,this.add(c);const h=new si(Is,Bs,t,i);h.layers=this.layers,this.add(h);const p=new si(Is,Bs,t,i);p.layers=this.layers,this.add(p);const m=new si(Is,Bs,t,i);m.layers=this.layers,this.add(m);const d=new si(Is,Bs,t,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,p,m]=i;for(const d of i)this.remove(d);if(t===ki)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===al)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of i)this.add(d),d.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,p,m,d,x]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const D=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(r,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(r,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(r,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(r,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(r,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),r.texture.generateMipmaps=D,t.setRenderTarget(r,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,x),t.setRenderTarget(v,_,E),t.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class wy extends si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Sp=class Sp{constructor(t,i,r,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=r,c[3]=l,this}};Sp.prototype.isMatrix2=!0;let I_=Sp;function B_(o,t,i,r){const l=Dy(r);switch(i){case yv:return o*t;case bv:return o*t/l.components*l.byteLength;case op:return o*t/l.components*l.byteLength;case Hr:return o*t*2/l.components*l.byteLength;case lp:return o*t*2/l.components*l.byteLength;case Ev:return o*t*3/l.components*l.byteLength;case Di:return o*t*4/l.components*l.byteLength;case cp:return o*t*4/l.components*l.byteLength;case Yc:case qc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Zc:case jc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case vd:case Sd:return Math.max(o,16)*Math.max(t,8)/4;case _d:case xd:return Math.max(o,8)*Math.max(t,8)/2;case Md:case yd:case bd:case Td:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Ed:case Qc:case Ad:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Rd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Cd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case wd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Dd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Ud:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Ld:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Nd:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Od:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Pd:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case zd:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Id:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Bd:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Fd:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Hd:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Gd:case Vd:case kd:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Xd:case Wd:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Jc:case Yd:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Dy(o){switch(o){case oi:case vv:return{byteLength:1,components:1};case nl:case xv:case Ea:return{byteLength:2,components:1};case rp:case sp:return{byteLength:2,components:4};case Yi:case ap:case Vi:return{byteLength:4,components:1};case Sv:case Mv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:np}}));typeof window<"u"&&(window.__THREE__?ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=np);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hv(){let o=null,t=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&o!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function Uy(o){const t=new WeakMap;function i(p,m){const d=p.array,x=p.usage,v=d.byteLength,_=o.createBuffer();o.bindBuffer(m,_),o.bufferData(m,d,x),p.onUploadCallback();let E;if(d instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)E=o.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)E=o.SHORT;else if(d instanceof Uint32Array)E=o.UNSIGNED_INT;else if(d instanceof Int32Array)E=o.INT;else if(d instanceof Int8Array)E=o.BYTE;else if(d instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:E,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:v}}function r(p,m,d){const x=m.array,v=m.updateRanges;if(o.bindBuffer(d,p),v.length===0)o.bufferSubData(d,0,x);else{v.sort((E,A)=>E.start-A.start);let _=0;for(let E=1;E<v.length;E++){const A=v[_],D=v[E];D.start<=A.start+A.count+1?A.count=Math.max(A.count,D.start+D.count-A.start):(++_,v[_]=D)}v.length=_+1;for(let E=0,A=v.length;E<A;E++){const D=v[E];o.bufferSubData(d,D.start*x.BYTES_PER_ELEMENT,x,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(o.deleteBuffer(m.buffer),t.delete(p))}function h(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const x=t.get(p);(!x||x.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=t.get(p);if(d===void 0)t.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:h}}var Ly=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ny=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Oy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Py=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Iy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,By=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Gy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ky=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$y=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,tE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,eE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,iE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,aE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lE="gl_FragColor = linearToOutputTexel( gl_FragColor );",cE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,fE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_E=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,SE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ME=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,EE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,bE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,TE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,AE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,RE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,DE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,UE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,LE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,NE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,OE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,PE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,VE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,QE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,JE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ib=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ab=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ob=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,lb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ub=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,db=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,mb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_b=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Eb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ab=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ub=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ib=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Hb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$b=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,iT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,oT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,de={alphahash_fragment:Ly,alphahash_pars_fragment:Ny,alphamap_fragment:Oy,alphamap_pars_fragment:Py,alphatest_fragment:zy,alphatest_pars_fragment:Iy,aomap_fragment:By,aomap_pars_fragment:Fy,batching_pars_vertex:Hy,batching_vertex:Gy,begin_vertex:Vy,beginnormal_vertex:ky,bsdfs:Xy,iridescence_fragment:Wy,bumpmap_pars_fragment:Yy,clipping_planes_fragment:qy,clipping_planes_pars_fragment:Zy,clipping_planes_pars_vertex:jy,clipping_planes_vertex:Ky,color_fragment:Qy,color_pars_fragment:Jy,color_pars_vertex:$y,color_vertex:tE,common:eE,cube_uv_reflection_fragment:nE,defaultnormal_vertex:iE,displacementmap_pars_vertex:aE,displacementmap_vertex:rE,emissivemap_fragment:sE,emissivemap_pars_fragment:oE,colorspace_fragment:lE,colorspace_pars_fragment:cE,envmap_fragment:uE,envmap_common_pars_fragment:fE,envmap_pars_fragment:hE,envmap_pars_vertex:dE,envmap_physical_pars_fragment:bE,envmap_vertex:pE,fog_vertex:mE,fog_pars_vertex:gE,fog_fragment:_E,fog_pars_fragment:vE,gradientmap_pars_fragment:xE,lightmap_pars_fragment:SE,lights_lambert_fragment:ME,lights_lambert_pars_fragment:yE,lights_pars_begin:EE,lights_toon_fragment:TE,lights_toon_pars_fragment:AE,lights_phong_fragment:RE,lights_phong_pars_fragment:CE,lights_physical_fragment:wE,lights_physical_pars_fragment:DE,lights_fragment_begin:UE,lights_fragment_maps:LE,lights_fragment_end:NE,lightprobes_pars_fragment:OE,logdepthbuf_fragment:PE,logdepthbuf_pars_fragment:zE,logdepthbuf_pars_vertex:IE,logdepthbuf_vertex:BE,map_fragment:FE,map_pars_fragment:HE,map_particle_fragment:GE,map_particle_pars_fragment:VE,metalnessmap_fragment:kE,metalnessmap_pars_fragment:XE,morphinstance_vertex:WE,morphcolor_vertex:YE,morphnormal_vertex:qE,morphtarget_pars_vertex:ZE,morphtarget_vertex:jE,normal_fragment_begin:KE,normal_fragment_maps:QE,normal_pars_fragment:JE,normal_pars_vertex:$E,normal_vertex:tb,normalmap_pars_fragment:eb,clearcoat_normal_fragment_begin:nb,clearcoat_normal_fragment_maps:ib,clearcoat_pars_fragment:ab,iridescence_pars_fragment:rb,opaque_fragment:sb,packing:ob,premultiplied_alpha_fragment:lb,project_vertex:cb,dithering_fragment:ub,dithering_pars_fragment:fb,roughnessmap_fragment:hb,roughnessmap_pars_fragment:db,shadowmap_pars_fragment:pb,shadowmap_pars_vertex:mb,shadowmap_vertex:gb,shadowmask_pars_fragment:_b,skinbase_vertex:vb,skinning_pars_vertex:xb,skinning_vertex:Sb,skinnormal_vertex:Mb,specularmap_fragment:yb,specularmap_pars_fragment:Eb,tonemapping_fragment:bb,tonemapping_pars_fragment:Tb,transmission_fragment:Ab,transmission_pars_fragment:Rb,uv_pars_fragment:Cb,uv_pars_vertex:wb,uv_vertex:Db,worldpos_vertex:Ub,background_vert:Lb,background_frag:Nb,backgroundCube_vert:Ob,backgroundCube_frag:Pb,cube_vert:zb,cube_frag:Ib,depth_vert:Bb,depth_frag:Fb,distance_vert:Hb,distance_frag:Gb,equirect_vert:Vb,equirect_frag:kb,linedashed_vert:Xb,linedashed_frag:Wb,meshbasic_vert:Yb,meshbasic_frag:qb,meshlambert_vert:Zb,meshlambert_frag:jb,meshmatcap_vert:Kb,meshmatcap_frag:Qb,meshnormal_vert:Jb,meshnormal_frag:$b,meshphong_vert:tT,meshphong_frag:eT,meshphysical_vert:nT,meshphysical_frag:iT,meshtoon_vert:aT,meshtoon_frag:rT,points_vert:sT,points_frag:oT,shadow_vert:lT,shadow_frag:cT,sprite_vert:uT,sprite_frag:fT},Ft={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new tt},probesMax:{value:new tt},probesResolution:{value:new tt}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Fi={basic:{uniforms:Fn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Fn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Me(0)},envMapIntensity:{value:1}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Fn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Fn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Fn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new Me(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Fn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Fn([Ft.points,Ft.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Fn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Fn([Ft.common,Ft.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Fn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Fn([Ft.sprite,Ft.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:Fn([Ft.common,Ft.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:Fn([Ft.lights,Ft.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Fi.physical={uniforms:Fn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Hc={r:0,b:0,g:0},hT=new on,Gv=new le;Gv.set(-1,0,0,0,1,0,0,0,1);function dT(o,t,i,r,l,c){const h=new Me(0);let p=l===!0?0:1,m,d,x=null,v=0,_=null;function E(w){let P=w.isScene===!0?w.background:null;if(P&&P.isTexture){const N=w.backgroundBlurriness>0;P=t.get(P,N)}return P}function A(w){let P=!1;const N=E(w);N===null?M(h,p):N&&N.isColor&&(M(N,1),P=!0);const Y=o.xr.getEnvironmentBlendMode();Y==="additive"?i.buffers.color.setClear(0,0,0,1,c):Y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function D(w,P){const N=E(P);N&&(N.isCubeTexture||N.mapping===ou)?(d===void 0&&(d=new On(new Si(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Ys(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(Y,O,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=N,d.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(hT.makeRotationFromEuler(P.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Gv),d.material.toneMapped=Ee.getTransfer(N.colorSpace)!==Ve,(x!==N||v!==N.version||_!==o.toneMapping)&&(d.material.needsUpdate=!0,x=N,v=N.version,_=o.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new On(new lu(2,2),new qi({name:"BackgroundMaterial",uniforms:Ys(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Ee.getTransfer(N.colorSpace)!==Ve,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(x!==N||v!==N.version||_!==o.toneMapping)&&(m.material.needsUpdate=!0,x=N,v=N.version,_=o.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function M(w,P){w.getRGB(Hc,zv(o)),i.buffers.color.setClear(Hc.r,Hc.g,Hc.b,P,c)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(w,P=1){h.set(w),p=P,M(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(w){p=w,M(h,p)},render:A,addToRenderList:D,dispose:S}}function pT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=_(null);let c=l,h=!1;function p(H,$,ut,pt,q){let U=!1;const I=v(H,pt,ut,$);c!==I&&(c=I,d(c.object)),U=E(H,pt,ut,q),U&&A(H,pt,ut,q),q!==null&&t.update(q,o.ELEMENT_ARRAY_BUFFER),(U||h)&&(h=!1,N(H,$,ut,pt),q!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function m(){return o.createVertexArray()}function d(H){return o.bindVertexArray(H)}function x(H){return o.deleteVertexArray(H)}function v(H,$,ut,pt){const q=pt.wireframe===!0;let U=r[$.id];U===void 0&&(U={},r[$.id]=U);const I=H.isInstancedMesh===!0?H.id:0;let ot=U[I];ot===void 0&&(ot={},U[I]=ot);let mt=ot[ut.id];mt===void 0&&(mt={},ot[ut.id]=mt);let Et=mt[q];return Et===void 0&&(Et=_(m()),mt[q]=Et),Et}function _(H){const $=[],ut=[],pt=[];for(let q=0;q<i;q++)$[q]=0,ut[q]=0,pt[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:ut,attributeDivisors:pt,object:H,attributes:{},index:null}}function E(H,$,ut,pt){const q=c.attributes,U=$.attributes;let I=0;const ot=ut.getAttributes();for(const mt in ot)if(ot[mt].location>=0){const L=q[mt];let Q=U[mt];if(Q===void 0&&(mt==="instanceMatrix"&&H.instanceMatrix&&(Q=H.instanceMatrix),mt==="instanceColor"&&H.instanceColor&&(Q=H.instanceColor)),L===void 0||L.attribute!==Q||Q&&L.data!==Q.data)return!0;I++}return c.attributesNum!==I||c.index!==pt}function A(H,$,ut,pt){const q={},U=$.attributes;let I=0;const ot=ut.getAttributes();for(const mt in ot)if(ot[mt].location>=0){let L=U[mt];L===void 0&&(mt==="instanceMatrix"&&H.instanceMatrix&&(L=H.instanceMatrix),mt==="instanceColor"&&H.instanceColor&&(L=H.instanceColor));const Q={};Q.attribute=L,L&&L.data&&(Q.data=L.data),q[mt]=Q,I++}c.attributes=q,c.attributesNum=I,c.index=pt}function D(){const H=c.newAttributes;for(let $=0,ut=H.length;$<ut;$++)H[$]=0}function M(H){S(H,0)}function S(H,$){const ut=c.newAttributes,pt=c.enabledAttributes,q=c.attributeDivisors;ut[H]=1,pt[H]===0&&(o.enableVertexAttribArray(H),pt[H]=1),q[H]!==$&&(o.vertexAttribDivisor(H,$),q[H]=$)}function w(){const H=c.newAttributes,$=c.enabledAttributes;for(let ut=0,pt=$.length;ut<pt;ut++)$[ut]!==H[ut]&&(o.disableVertexAttribArray(ut),$[ut]=0)}function P(H,$,ut,pt,q,U,I){I===!0?o.vertexAttribIPointer(H,$,ut,q,U):o.vertexAttribPointer(H,$,ut,pt,q,U)}function N(H,$,ut,pt){D();const q=pt.attributes,U=ut.getAttributes(),I=$.defaultAttributeValues;for(const ot in U){const mt=U[ot];if(mt.location>=0){let Et=q[ot];if(Et===void 0&&(ot==="instanceMatrix"&&H.instanceMatrix&&(Et=H.instanceMatrix),ot==="instanceColor"&&H.instanceColor&&(Et=H.instanceColor)),Et!==void 0){const L=Et.normalized,Q=Et.itemSize,G=t.get(Et);if(G===void 0)continue;const gt=G.buffer,St=G.type,W=G.bytesPerElement,xt=St===o.INT||St===o.UNSIGNED_INT||Et.gpuType===ap;if(Et.isInterleavedBufferAttribute){const yt=Et.data,Tt=yt.stride,Yt=Et.offset;if(yt.isInstancedInterleavedBuffer){for(let Ht=0;Ht<mt.locationSize;Ht++)S(mt.location+Ht,yt.meshPerAttribute);H.isInstancedMesh!==!0&&pt._maxInstanceCount===void 0&&(pt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Ht=0;Ht<mt.locationSize;Ht++)M(mt.location+Ht);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let Ht=0;Ht<mt.locationSize;Ht++)P(mt.location+Ht,Q/mt.locationSize,St,L,Tt*W,(Yt+Q/mt.locationSize*Ht)*W,xt)}else{if(Et.isInstancedBufferAttribute){for(let yt=0;yt<mt.locationSize;yt++)S(mt.location+yt,Et.meshPerAttribute);H.isInstancedMesh!==!0&&pt._maxInstanceCount===void 0&&(pt._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let yt=0;yt<mt.locationSize;yt++)M(mt.location+yt);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let yt=0;yt<mt.locationSize;yt++)P(mt.location+yt,Q/mt.locationSize,St,L,Q*W,Q/mt.locationSize*yt*W,xt)}}else if(I!==void 0){const L=I[ot];if(L!==void 0)switch(L.length){case 2:o.vertexAttrib2fv(mt.location,L);break;case 3:o.vertexAttrib3fv(mt.location,L);break;case 4:o.vertexAttrib4fv(mt.location,L);break;default:o.vertexAttrib1fv(mt.location,L)}}}}w()}function Y(){z();for(const H in r){const $=r[H];for(const ut in $){const pt=$[ut];for(const q in pt){const U=pt[q];for(const I in U)x(U[I].object),delete U[I];delete pt[q]}}delete r[H]}}function O(H){if(r[H.id]===void 0)return;const $=r[H.id];for(const ut in $){const pt=$[ut];for(const q in pt){const U=pt[q];for(const I in U)x(U[I].object),delete U[I];delete pt[q]}}delete r[H.id]}function B(H){for(const $ in r){const ut=r[$];for(const pt in ut){const q=ut[pt];if(q[H.id]===void 0)continue;const U=q[H.id];for(const I in U)x(U[I].object),delete U[I];delete q[H.id]}}}function b(H){for(const $ in r){const ut=r[$],pt=H.isInstancedMesh===!0?H.id:0,q=ut[pt];if(q!==void 0){for(const U in q){const I=q[U];for(const ot in I)x(I[ot].object),delete I[ot];delete q[U]}delete ut[pt],Object.keys(ut).length===0&&delete r[$]}}}function z(){K(),h=!0,c!==l&&(c=l,d(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:z,resetDefaultState:K,dispose:Y,releaseStatesOfGeometry:O,releaseStatesOfObject:b,releaseStatesOfProgram:B,initAttributes:D,enableAttribute:M,disableUnusedAttributes:w}}function mT(o,t,i){let r;function l(m){r=m}function c(m,d){o.drawArrays(r,m,d),i.update(d,r,1)}function h(m,d,x){x!==0&&(o.drawArraysInstanced(r,m,d,x),i.update(d,r,x))}function p(m,d,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,d,0,x);let _=0;for(let E=0;E<x;E++)_+=d[E];i.update(_,r,1)}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=p}function gT(o,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==Di&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(B){const b=B===Ea&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==oi&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Vi&&!b)}function m(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const x=m(d);x!==d&&(ee("WebGLRenderer:",d,"not supported, using",x,"instead."),d=x);const v=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&_===!1&&ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),w=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),Y=o.getParameter(o.MAX_SAMPLES),O=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:E,maxVertexTextures:A,maxTextureSize:D,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:w,maxVaryings:P,maxFragmentUniforms:N,maxSamples:Y,samples:O}}function _T(o){const t=this;let i=null,r=0,l=!1,c=!1;const h=new Or,p=new le,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const E=v.length!==0||_||r!==0||l;return l=_,r=v.length,E},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){i=x(v,_,0)},this.setState=function(v,_,E){const A=v.clippingPlanes,D=v.clipIntersection,M=v.clipShadows,S=o.get(v);if(!l||A===null||A.length===0||c&&!M)c?x(null):d();else{const w=c?0:r,P=w*4;let N=S.clippingState||null;m.value=N,N=x(A,_,P,E);for(let Y=0;Y!==P;++Y)N[Y]=i[Y];S.clippingState=N,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=w}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function x(v,_,E,A){const D=v!==null?v.length:0;let M=null;if(D!==0){if(M=m.value,A!==!0||M===null){const S=E+D*4,w=_.matrixWorldInverse;p.getNormalMatrix(w),(M===null||M.length<S)&&(M=new Float32Array(S));for(let P=0,N=E;P!==D;++P,N+=4)h.copy(v[P]).applyMatrix4(w,p),h.normal.toArray(M,N),M[N+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=D,t.numIntersection=0,M}}const lr=4,F_=[.125,.215,.35,.446,.526,.582],zr=20,vT=256,Qo=new Fv,H_=new Me;let Kh=null,Qh=0,Jh=0,$h=!1;const xT=new tt;class G_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,c={}){const{size:h=256,position:p=xT}=c;Kh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=X_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=k_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Kh,Qh,Jh),this._renderer.xr.enabled=$h,t.scissorTest=!1,Fs(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Fr||t.mapping===Xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Ea,format:Di,colorSpace:tu,depthBuffer:!1},l=V_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=V_(t,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ST(c)),this._blurMaterial=yT(c,t,i),this._ggxMaterial=MT(c,t,i)}return l}_compileMaterial(t){const i=new On(new Zi,t);this._renderer.compile(i,Qo)}_sceneToCubeUV(t,i,r,l,c){const m=new si(90,1,i,r),d=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,E=v.toneMapping;v.getClearColor(H_),v.toneMapping=Xi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new On(new Si,new Lv({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,M=D.material;let S=!1;const w=t.background;w?w.isColor&&(M.color.copy(w),t.background=null,S=!0):(M.color.copy(H_),S=!0);for(let P=0;P<6;P++){const N=P%3;N===0?(m.up.set(0,d[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[P],c.y,c.z)):N===1?(m.up.set(0,0,d[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[P],c.z)):(m.up.set(0,d[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[P]));const Y=this._cubeSize;Fs(l,N*Y,P>2?Y:0,Y,Y),v.setRenderTarget(l),S&&v.render(D,m),v.render(t,m)}v.toneMapping=E,v.autoClear=_,t.background=w}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Fr||t.mapping===Xs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=X_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=k_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;Fs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Qo)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,p=this._lodMeshes[r];p.material=h;const m=h.uniforms,d=r/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),v=Math.sqrt(d*d-x*x),_=0+d*1.25,E=v*_,{_lodMax:A}=this,D=this._sizeLods[r],M=3*D*(r>A-lr?r-A+lr:0),S=4*(this._cubeSize-D);m.envMap.value=t.texture,m.roughness.value=E,m.mipInt.value=A-i,Fs(c,M,S,3*D,2*D),l.setRenderTarget(c),l.render(p,Qo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=A-r,Fs(t,M,S,3*D,2*D),l.setRenderTarget(t),l.render(p,Qo)}_blur(t,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",c),this._halfBlur(h,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,h,p){const m=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Te("blur direction must be either latitudinal or longitudinal!");const x=3,v=this._lodMeshes[l];v.material=d;const _=d.uniforms,E=this._sizeLods[r]-1,A=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*zr-1),D=c/A,M=isFinite(c)?1+Math.floor(x*D):zr;M>zr&&ee(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${zr}`);const S=[];let w=0;for(let B=0;B<zr;++B){const b=B/D,z=Math.exp(-b*b/2);S.push(z),B===0?w+=z:B<M&&(w+=2*z)}for(let B=0;B<S.length;B++)S[B]=S[B]/w;_.envMap.value=t.texture,_.samples.value=M,_.weights.value=S,_.latitudinal.value=h==="latitudinal",p&&(_.poleAxis.value=p);const{_lodMax:P}=this;_.dTheta.value=A,_.mipInt.value=P-r;const N=this._sizeLods[l],Y=3*N*(l>P-lr?l-P+lr:0),O=4*(this._cubeSize-N);Fs(i,Y,O,3*N,2*N),m.setRenderTarget(i),m.render(v,Qo)}}function ST(o){const t=[],i=[],r=[];let l=o;const c=o-lr+1+F_.length;for(let h=0;h<c;h++){const p=Math.pow(2,l);t.push(p);let m=1/p;h>o-lr?m=F_[h-o+lr-1]:h===0&&(m=0),i.push(m);const d=1/(p-2),x=-d,v=1+d,_=[x,x,v,x,v,v,x,x,v,v,x,v],E=6,A=6,D=3,M=2,S=1,w=new Float32Array(D*A*E),P=new Float32Array(M*A*E),N=new Float32Array(S*A*E);for(let O=0;O<E;O++){const B=O%3*2/3-1,b=O>2?0:-1,z=[B,b,0,B+2/3,b,0,B+2/3,b+1,0,B,b,0,B+2/3,b+1,0,B,b+1,0];w.set(z,D*A*O),P.set(_,M*A*O);const K=[O,O,O,O,O,O];N.set(K,S*A*O)}const Y=new Zi;Y.setAttribute("position",new Ui(w,D)),Y.setAttribute("uv",new Ui(P,M)),Y.setAttribute("faceIndex",new Ui(N,S)),r.push(new On(Y,null)),l>lr&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function V_(o,t,i){const r=new Wi(o,t,i);return r.texture.mapping=ou,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Fs(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function MT(o,t,i){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function yT(o,t,i){const r=new Float32Array(zr),l=new tt(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function k_(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function X_(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function cu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Vv extends Wi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Nv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Si(5,5,5),c=new qi({name:"CubemapFromEquirect",uniforms:Ys(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:qn,blending:Sa});c.uniforms.tEquirect.value=i;const h=new On(l,c),p=i.minFilter;return i.minFilter===Ir&&(i.minFilter=Pn),new Cy(1,10,this).update(t,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(c)}}function ET(o){let t=new WeakMap,i=new WeakMap,r=null;function l(_,E=!1){return _==null?null:E?h(_):c(_)}function c(_){if(_&&_.isTexture){const E=_.mapping;if(E===Mh||E===yh)if(t.has(_)){const A=t.get(_).texture;return p(A,_.mapping)}else{const A=_.image;if(A&&A.height>0){const D=new Vv(A.height);return D.fromEquirectangularTexture(o,_),t.set(_,D),_.addEventListener("dispose",d),p(D.texture,_.mapping)}else return null}}return _}function h(_){if(_&&_.isTexture){const E=_.mapping,A=E===Mh||E===yh,D=E===Fr||E===Xs;if(A||D){let M=i.get(_);const S=M!==void 0?M.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==S)return r===null&&(r=new G_(o)),M=A?r.fromEquirectangular(_,M):r.fromCubemap(_,M),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),M.texture;if(M!==void 0)return M.texture;{const w=_.image;return A&&w&&w.height>0||D&&w&&m(w)?(r===null&&(r=new G_(o)),M=A?r.fromEquirectangular(_):r.fromCubemap(_),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),_.addEventListener("dispose",x),M.texture):null}}}return _}function p(_,E){return E===Mh?_.mapping=Fr:E===yh&&(_.mapping=Xs),_}function m(_){let E=0;const A=6;for(let D=0;D<A;D++)_[D]!==void 0&&E++;return E===A}function d(_){const E=_.target;E.removeEventListener("dispose",d);const A=t.get(E);A!==void 0&&(t.delete(E),A.dispose())}function x(_){const E=_.target;E.removeEventListener("dispose",x);const A=i.get(E);A!==void 0&&(i.delete(E),A.dispose())}function v(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:v}}function bT(o){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=o.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Zd("WebGLRenderer: "+r+" extension not supported."),l}}}function TT(o,t,i,r){const l={},c=new WeakMap;function h(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const A in _.attributes)t.remove(_.attributes[A]);_.removeEventListener("dispose",h),delete l[_.id];const E=c.get(_);E&&(t.remove(E),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function p(v,_){return l[_.id]===!0||(_.addEventListener("dispose",h),l[_.id]=!0,i.memory.geometries++),_}function m(v){const _=v.attributes;for(const E in _)t.update(_[E],o.ARRAY_BUFFER)}function d(v){const _=[],E=v.index,A=v.attributes.position;let D=0;if(A===void 0)return;if(E!==null){const w=E.array;D=E.version;for(let P=0,N=w.length;P<N;P+=3){const Y=w[P+0],O=w[P+1],B=w[P+2];_.push(Y,O,O,B,B,Y)}}else{const w=A.array;D=A.version;for(let P=0,N=w.length/3-1;P<N;P+=3){const Y=P+0,O=P+1,B=P+2;_.push(Y,O,O,B,B,Y)}}const M=new(A.count>=65535?Dv:wv)(_,1);M.version=D;const S=c.get(v);S&&t.remove(S),c.set(v,M)}function x(v){const _=c.get(v);if(_){const E=v.index;E!==null&&_.version<E.version&&d(v)}else d(v);return c.get(v)}return{get:p,update:m,getWireframeAttribute:x}}function AT(o,t,i){let r;function l(v){r=v}let c,h;function p(v){c=v.type,h=v.bytesPerElement}function m(v,_){o.drawElements(r,_,c,v*h),i.update(_,r,1)}function d(v,_,E){E!==0&&(o.drawElementsInstanced(r,_,c,v*h,E),i.update(_,r,E))}function x(v,_,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,c,v,0,E);let D=0;for(let M=0;M<E;M++)D+=_[M];i.update(D,r,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=x}function RT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,p){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=p*(c/3);break;case o.LINES:i.lines+=p*(c/2);break;case o.LINE_STRIP:i.lines+=p*(c-1);break;case o.LINE_LOOP:i.lines+=p*c;break;case o.POINTS:i.points+=p*c;break;default:Te("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function CT(o,t,i){const r=new WeakMap,l=new sn;function c(h,p,m){const d=h.morphTargetInfluences,x=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=x!==void 0?x.length:0;let _=r.get(p);if(_===void 0||_.count!==v){let K=function(){b.dispose(),r.delete(p),p.removeEventListener("dispose",K)};var E=K;_!==void 0&&_.texture.dispose();const A=p.morphAttributes.position!==void 0,D=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,S=p.morphAttributes.position||[],w=p.morphAttributes.normal||[],P=p.morphAttributes.color||[];let N=0;A===!0&&(N=1),D===!0&&(N=2),M===!0&&(N=3);let Y=p.attributes.position.count*N,O=1;Y>t.maxTextureSize&&(O=Math.ceil(Y/t.maxTextureSize),Y=t.maxTextureSize);const B=new Float32Array(Y*O*4*v),b=new Av(B,Y,O,v);b.type=Vi,b.needsUpdate=!0;const z=N*4;for(let H=0;H<v;H++){const $=S[H],ut=w[H],pt=P[H],q=Y*O*4*H;for(let U=0;U<$.count;U++){const I=U*z;A===!0&&(l.fromBufferAttribute($,U),B[q+I+0]=l.x,B[q+I+1]=l.y,B[q+I+2]=l.z,B[q+I+3]=0),D===!0&&(l.fromBufferAttribute(ut,U),B[q+I+4]=l.x,B[q+I+5]=l.y,B[q+I+6]=l.z,B[q+I+7]=0),M===!0&&(l.fromBufferAttribute(pt,U),B[q+I+8]=l.x,B[q+I+9]=l.y,B[q+I+10]=l.z,B[q+I+11]=pt.itemSize===4?l.w:1)}}_={count:v,texture:b,size:new pe(Y,O)},r.set(p,_),p.addEventListener("dispose",K)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let M=0;M<d.length;M++)A+=d[M];const D=p.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",D),m.getUniforms().setValue(o,"morphTargetInfluences",d)}m.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:c}}function wT(o,t,i,r,l){let c=new WeakMap;function h(d){const x=l.render.frame,v=d.geometry,_=t.get(d,v);if(c.get(_)!==x&&(t.update(_),c.set(_,x)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==x&&(i.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,o.ARRAY_BUFFER),c.set(d,x))),d.isSkinnedMesh){const E=d.skeleton;c.get(E)!==x&&(E.update(),c.set(E,x))}return _}function p(){c=new WeakMap}function m(d){const x=d.target;x.removeEventListener("dispose",m),r.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:h,dispose:p}}const DT={[uv]:"LINEAR_TONE_MAPPING",[fv]:"REINHARD_TONE_MAPPING",[hv]:"CINEON_TONE_MAPPING",[dv]:"ACES_FILMIC_TONE_MAPPING",[mv]:"AGX_TONE_MAPPING",[gv]:"NEUTRAL_TONE_MAPPING",[pv]:"CUSTOM_TONE_MAPPING"};function UT(o,t,i,r,l){const c=new Wi(t,i,{type:o,depthBuffer:r,stencilBuffer:l,depthTexture:r?new Ws(t,i):void 0}),h=new Wi(t,i,{type:Ea,depthBuffer:!1,stencilBuffer:!1}),p=new Zi;p.setAttribute("position",new ya([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new ya([0,2,0,0,2,0],2));const m=new Sy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new On(p,m),x=new Fv(-1,1,1,-1,0,1);let v=null,_=null,E=!1,A,D=null,M=[],S=!1;this.setSize=function(w,P){c.setSize(w,P),h.setSize(w,P);for(let N=0;N<M.length;N++){const Y=M[N];Y.setSize&&Y.setSize(w,P)}},this.setEffects=function(w){M=w,S=M.length>0&&M[0].isRenderPass===!0;const P=c.width,N=c.height;for(let Y=0;Y<M.length;Y++){const O=M[Y];O.setSize&&O.setSize(P,N)}},this.begin=function(w,P){if(E||w.toneMapping===Xi&&M.length===0)return!1;if(D=P,P!==null){const N=P.width,Y=P.height;(c.width!==N||c.height!==Y)&&this.setSize(N,Y)}return S===!1&&w.setRenderTarget(c),A=w.toneMapping,w.toneMapping=Xi,!0},this.hasRenderPass=function(){return S},this.end=function(w,P){w.toneMapping=A,E=!0;let N=c,Y=h;for(let O=0;O<M.length;O++){const B=M[O];if(B.enabled!==!1&&(B.render(w,Y,N,P),B.needsSwap!==!1)){const b=N;N=Y,Y=b}}if(v!==w.outputColorSpace||_!==w.toneMapping){v=w.outputColorSpace,_=w.toneMapping,m.defines={},Ee.getTransfer(v)===Ve&&(m.defines.SRGB_TRANSFER="");const O=DT[_];O&&(m.defines[O]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,w.setRenderTarget(D),w.render(d,x),D=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),h.dispose(),p.dispose(),m.dispose()}}const kv=new zn,Qd=new Ws(1,1),Xv=new Av,Wv=new ZM,Yv=new Nv,W_=[],Y_=[],q_=new Float32Array(16),Z_=new Float32Array(9),j_=new Float32Array(4);function Zs(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let c=W_[l];if(c===void 0&&(c=new Float32Array(l),W_[l]=c),t!==0){r.toArray(c,0);for(let h=1,p=0;h!==t;++h)p+=i,o[h].toArray(c,p)}return c}function xn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function Sn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function uu(o,t){let i=Y_[t];i===void 0&&(i=new Int32Array(t),Y_[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function LT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function NT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;o.uniform2fv(this.addr,t),Sn(i,t)}}function OT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(xn(i,t))return;o.uniform3fv(this.addr,t),Sn(i,t)}}function PT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;o.uniform4fv(this.addr,t),Sn(i,t)}}function zT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(xn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),Sn(i,t)}else{if(xn(i,r))return;j_.set(r),o.uniformMatrix2fv(this.addr,!1,j_),Sn(i,r)}}function IT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(xn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),Sn(i,t)}else{if(xn(i,r))return;Z_.set(r),o.uniformMatrix3fv(this.addr,!1,Z_),Sn(i,r)}}function BT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(xn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),Sn(i,t)}else{if(xn(i,r))return;q_.set(r),o.uniformMatrix4fv(this.addr,!1,q_),Sn(i,r)}}function FT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function HT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;o.uniform2iv(this.addr,t),Sn(i,t)}}function GT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;o.uniform3iv(this.addr,t),Sn(i,t)}}function VT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;o.uniform4iv(this.addr,t),Sn(i,t)}}function kT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function XT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;o.uniform2uiv(this.addr,t),Sn(i,t)}}function WT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;o.uniform3uiv(this.addr,t),Sn(i,t)}}function YT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;o.uniform4uiv(this.addr,t),Sn(i,t)}}function qT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Qd.compareFunction=i.isReversedDepthBuffer()?fp:up,c=Qd):c=kv,i.setTexture2D(t||c,l)}function ZT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Wv,l)}function jT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Yv,l)}function KT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Xv,l)}function QT(o){switch(o){case 5126:return LT;case 35664:return NT;case 35665:return OT;case 35666:return PT;case 35674:return zT;case 35675:return IT;case 35676:return BT;case 5124:case 35670:return FT;case 35667:case 35671:return HT;case 35668:case 35672:return GT;case 35669:case 35673:return VT;case 5125:return kT;case 36294:return XT;case 36295:return WT;case 36296:return YT;case 35678:case 36198:case 36298:case 36306:case 35682:return qT;case 35679:case 36299:case 36307:return ZT;case 35680:case 36300:case 36308:case 36293:return jT;case 36289:case 36303:case 36311:case 36292:return KT}}function JT(o,t){o.uniform1fv(this.addr,t)}function $T(o,t){const i=Zs(t,this.size,2);o.uniform2fv(this.addr,i)}function t1(o,t){const i=Zs(t,this.size,3);o.uniform3fv(this.addr,i)}function e1(o,t){const i=Zs(t,this.size,4);o.uniform4fv(this.addr,i)}function n1(o,t){const i=Zs(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function i1(o,t){const i=Zs(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function a1(o,t){const i=Zs(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function r1(o,t){o.uniform1iv(this.addr,t)}function s1(o,t){o.uniform2iv(this.addr,t)}function o1(o,t){o.uniform3iv(this.addr,t)}function l1(o,t){o.uniform4iv(this.addr,t)}function c1(o,t){o.uniform1uiv(this.addr,t)}function u1(o,t){o.uniform2uiv(this.addr,t)}function f1(o,t){o.uniform3uiv(this.addr,t)}function h1(o,t){o.uniform4uiv(this.addr,t)}function d1(o,t,i){const r=this.cache,l=t.length,c=uu(i,l);xn(r,c)||(o.uniform1iv(this.addr,c),Sn(r,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=Qd:h=kv;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||h,c[p])}function p1(o,t,i){const r=this.cache,l=t.length,c=uu(i,l);xn(r,c)||(o.uniform1iv(this.addr,c),Sn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Wv,c[h])}function m1(o,t,i){const r=this.cache,l=t.length,c=uu(i,l);xn(r,c)||(o.uniform1iv(this.addr,c),Sn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Yv,c[h])}function g1(o,t,i){const r=this.cache,l=t.length,c=uu(i,l);xn(r,c)||(o.uniform1iv(this.addr,c),Sn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Xv,c[h])}function _1(o){switch(o){case 5126:return JT;case 35664:return $T;case 35665:return t1;case 35666:return e1;case 35674:return n1;case 35675:return i1;case 35676:return a1;case 5124:case 35670:return r1;case 35667:case 35671:return s1;case 35668:case 35672:return o1;case 35669:case 35673:return l1;case 5125:return c1;case 36294:return u1;case 36295:return f1;case 36296:return h1;case 35678:case 36198:case 36298:case 36306:case 35682:return d1;case 35679:case 36299:case 36307:return p1;case 35680:case 36300:case 36308:case 36293:return m1;case 36289:case 36303:case 36311:case 36292:return g1}}class v1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=QT(i.type)}}class x1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=_1(i.type)}}class S1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const p=l[c];p.setValue(t,i[p.id],r)}}}const td=/(\w+)(\])?(\[|\.)?/g;function K_(o,t){o.seq.push(t),o.map[t.id]=t}function M1(o,t,i){const r=o.name,l=r.length;for(td.lastIndex=0;;){const c=td.exec(r),h=td.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&h+2===l){K_(i,d===void 0?new v1(p,o,t):new x1(p,o,t));break}else{let v=i.map[p];v===void 0&&(v=new S1(p),K_(i,v)),i=v}}}class Kc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const p=t.getActiveUniform(i,h),m=t.getUniformLocation(i,p.name);M1(p,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,h=i.length;c!==h;++c){const p=i[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function Q_(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const y1=37297;let E1=0;function b1(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const p=h+1;r.push(`${p===t?">":" "} ${p}: ${i[h]}`)}return r.join(`
`)}const J_=new le;function T1(o){Ee._getMatrix(J_,Ee.workingColorSpace,o);const t=`mat3( ${J_.elements.map(i=>i.toFixed(4))} )`;switch(Ee.getTransfer(o)){case eu:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return ee("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function $_(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+b1(o.getShaderSource(t),p)}else return c}function A1(o,t){const i=T1(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const R1={[uv]:"Linear",[fv]:"Reinhard",[hv]:"Cineon",[dv]:"ACESFilmic",[mv]:"AgX",[gv]:"Neutral",[pv]:"Custom"};function C1(o,t){const i=R1[t];return i===void 0?(ee("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Gc=new tt;function w1(){Ee.getLuminanceCoefficients(Gc);const o=Gc.x.toFixed(4),t=Gc.y.toFixed(4),i=Gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tl).join(`
`)}function U1(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function L1(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(t,l),h=c.name;let p=1;c.type===o.FLOAT_MAT2&&(p=2),c.type===o.FLOAT_MAT3&&(p=3),c.type===o.FLOAT_MAT4&&(p=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:p}}return i}function tl(o){return o!==""}function tv(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ev(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const N1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jd(o){return o.replace(N1,P1)}const O1=new Map;function P1(o,t){let i=de[t];if(i===void 0){const r=O1.get(t);if(r!==void 0)i=de[r],ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Jd(i)}const z1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nv(o){return o.replace(z1,I1)}function I1(o,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function iv(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const B1={[Wc]:"SHADOWMAP_TYPE_PCF",[$o]:"SHADOWMAP_TYPE_VSM"};function F1(o){return B1[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const H1={[Fr]:"ENVMAP_TYPE_CUBE",[Xs]:"ENVMAP_TYPE_CUBE",[ou]:"ENVMAP_TYPE_CUBE_UV"};function G1(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":H1[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const V1={[Xs]:"ENVMAP_MODE_REFRACTION"};function k1(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":V1[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const X1={[ip]:"ENVMAP_BLENDING_MULTIPLY",[RM]:"ENVMAP_BLENDING_MIX",[CM]:"ENVMAP_BLENDING_ADD"};function W1(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":X1[o.combine]||"ENVMAP_BLENDING_NONE"}function Y1(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function q1(o,t,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,p=i.fragmentShader;const m=F1(i),d=G1(i),x=k1(i),v=W1(i),_=Y1(i),E=D1(i),A=U1(c),D=l.createProgram();let M,S,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(tl).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(tl).join(`
`),S.length>0&&(S+=`
`)):(M=[iv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tl).join(`
`),S=[iv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+x:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xi?"#define TONE_MAPPING":"",i.toneMapping!==Xi?de.tonemapping_pars_fragment:"",i.toneMapping!==Xi?C1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,A1("linearToOutputTexel",i.outputColorSpace),w1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(tl).join(`
`)),h=Jd(h),h=tv(h,i),h=ev(h,i),p=Jd(p),p=tv(p,i),p=ev(p,i),h=nv(h),p=nv(p),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===p_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===p_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const P=w+M+h,N=w+S+p,Y=Q_(l,l.VERTEX_SHADER,P),O=Q_(l,l.FRAGMENT_SHADER,N);l.attachShader(D,Y),l.attachShader(D,O),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function B(H){if(o.debug.checkShaderErrors){const $=l.getProgramInfoLog(D)||"",ut=l.getShaderInfoLog(Y)||"",pt=l.getShaderInfoLog(O)||"",q=$.trim(),U=ut.trim(),I=pt.trim();let ot=!0,mt=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(ot=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,D,Y,O);else{const Et=$_(l,Y,"vertex"),L=$_(l,O,"fragment");Te("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+q+`
`+Et+`
`+L)}else q!==""?ee("WebGLProgram: Program Info Log:",q):(U===""||I==="")&&(mt=!1);mt&&(H.diagnostics={runnable:ot,programLog:q,vertexShader:{log:U,prefix:M},fragmentShader:{log:I,prefix:S}})}l.deleteShader(Y),l.deleteShader(O),b=new Kc(l,D),z=L1(l,D)}let b;this.getUniforms=function(){return b===void 0&&B(this),b};let z;this.getAttributes=function(){return z===void 0&&B(this),z};let K=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return K===!1&&(K=l.getProgramParameter(D,y1)),K},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=E1++,this.cacheKey=t,this.usedTimes=1,this.program=D,this.vertexShader=Y,this.fragmentShader=O,this}let Z1=0;class j1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new K1(t),i.set(t,r)),r}}class K1{constructor(t){this.id=Z1++,this.code=t,this.usedTimes=0}}function Q1(o){return o===Hr||o===Qc||o===Jc}function J1(o,t,i,r,l,c){const h=new Rv,p=new j1,m=new Set,d=[],x=new Map,v=r.logarithmicDepthBuffer;let _=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(b){return m.add(b),b===0?"uv":`uv${b}`}function D(b,z,K,H,$,ut){const pt=H.fog,q=$.geometry,U=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?H.environment:null,I=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,ot=t.get(b.envMap||U,I),mt=ot&&ot.mapping===ou?ot.image.height:null,Et=E[b.type];b.precision!==null&&(_=r.getMaxPrecision(b.precision),_!==b.precision&&ee("WebGLProgram.getParameters:",b.precision,"not supported, using",_,"instead."));const L=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Q=L!==void 0?L.length:0;let G=0;q.morphAttributes.position!==void 0&&(G=1),q.morphAttributes.normal!==void 0&&(G=2),q.morphAttributes.color!==void 0&&(G=3);let gt,St,W,xt;if(Et){const te=Fi[Et];gt=te.vertexShader,St=te.fragmentShader}else gt=b.vertexShader,St=b.fragmentShader,p.update(b),W=p.getVertexShaderID(b),xt=p.getFragmentShaderID(b);const yt=o.getRenderTarget(),Tt=o.state.buffers.depth.getReversed(),Yt=$.isInstancedMesh===!0,Ht=$.isBatchedMesh===!0,ae=!!b.map,Kt=!!b.matcap,ce=!!ot,Ae=!!b.aoMap,se=!!b.lightMap,ke=!!b.bumpMap,Re=!!b.normalMap,Pe=!!b.displacementMap,X=!!b.emissiveMap,ze=!!b.metalnessMap,re=!!b.roughnessMap,Ce=b.anisotropy>0,Rt=b.clearcoat>0,Je=b.dispersion>0,C=b.iridescence>0,y=b.sheen>0,J=b.transmission>0,vt=Ce&&!!b.anisotropyMap,At=Rt&&!!b.clearcoatMap,wt=Rt&&!!b.clearcoatNormalMap,Nt=Rt&&!!b.clearcoatRoughnessMap,ct=C&&!!b.iridescenceMap,ft=C&&!!b.iridescenceThicknessMap,Ot=y&&!!b.sheenColorMap,Pt=y&&!!b.sheenRoughnessMap,Ut=!!b.specularMap,Dt=!!b.specularColorMap,ne=!!b.specularIntensityMap,ie=J&&!!b.transmissionMap,me=J&&!!b.thicknessMap,V=!!b.gradientMap,Ct=!!b.alphaMap,dt=b.alphaTest>0,Bt=!!b.alphaHash,Lt=!!b.extensions;let bt=Xi;b.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(bt=o.toneMapping);const qt={shaderID:Et,shaderType:b.type,shaderName:b.name,vertexShader:gt,fragmentShader:St,defines:b.defines,customVertexShaderID:W,customFragmentShaderID:xt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:_,batching:Ht,batchingColor:Ht&&$._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&$.instanceColor!==null,instancingMorph:Yt&&$.morphTexture!==null,outputColorSpace:yt===null?o.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Ee.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:ae,matcap:Kt,envMap:ce,envMapMode:ce&&ot.mapping,envMapCubeUVHeight:mt,aoMap:Ae,lightMap:se,bumpMap:ke,normalMap:Re,displacementMap:Pe,emissiveMap:X,normalMapObjectSpace:Re&&b.normalMapType===UM,normalMapTangentSpace:Re&&b.normalMapType===$c,packedNormalMap:Re&&b.normalMapType===$c&&Q1(b.normalMap.format),metalnessMap:ze,roughnessMap:re,anisotropy:Ce,anisotropyMap:vt,clearcoat:Rt,clearcoatMap:At,clearcoatNormalMap:wt,clearcoatRoughnessMap:Nt,dispersion:Je,iridescence:C,iridescenceMap:ct,iridescenceThicknessMap:ft,sheen:y,sheenColorMap:Ot,sheenRoughnessMap:Pt,specularMap:Ut,specularColorMap:Dt,specularIntensityMap:ne,transmission:J,transmissionMap:ie,thicknessMap:me,gradientMap:V,opaque:b.transparent===!1&&b.blending===Gs&&b.alphaToCoverage===!1,alphaMap:Ct,alphaTest:dt,alphaHash:Bt,combine:b.combine,mapUv:ae&&A(b.map.channel),aoMapUv:Ae&&A(b.aoMap.channel),lightMapUv:se&&A(b.lightMap.channel),bumpMapUv:ke&&A(b.bumpMap.channel),normalMapUv:Re&&A(b.normalMap.channel),displacementMapUv:Pe&&A(b.displacementMap.channel),emissiveMapUv:X&&A(b.emissiveMap.channel),metalnessMapUv:ze&&A(b.metalnessMap.channel),roughnessMapUv:re&&A(b.roughnessMap.channel),anisotropyMapUv:vt&&A(b.anisotropyMap.channel),clearcoatMapUv:At&&A(b.clearcoatMap.channel),clearcoatNormalMapUv:wt&&A(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&A(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&A(b.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&A(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&A(b.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&A(b.sheenRoughnessMap.channel),specularMapUv:Ut&&A(b.specularMap.channel),specularColorMapUv:Dt&&A(b.specularColorMap.channel),specularIntensityMapUv:ne&&A(b.specularIntensityMap.channel),transmissionMapUv:ie&&A(b.transmissionMap.channel),thicknessMapUv:me&&A(b.thicknessMap.channel),alphaMapUv:Ct&&A(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Re||Ce),vertexNormals:!!q.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!q.attributes.uv&&(ae||Ct),fog:!!pt,useFog:b.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||q.attributes.normal===void 0&&Re===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Tt,skinning:$.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:G,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numLightProbeGrids:ut.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&K.length>0,shadowMapType:o.shadowMap.type,toneMapping:bt,decodeVideoTexture:ae&&b.map.isVideoTexture===!0&&Ee.getTransfer(b.map.colorSpace)===Ve,decodeVideoTextureEmissive:X&&b.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(b.emissiveMap.colorSpace)===Ve,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Hi,flipSided:b.side===qn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Lt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&b.extensions.multiDraw===!0||Ht)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return qt.vertexUv1s=m.has(1),qt.vertexUv2s=m.has(2),qt.vertexUv3s=m.has(3),m.clear(),qt}function M(b){const z=[];if(b.shaderID?z.push(b.shaderID):(z.push(b.customVertexShaderID),z.push(b.customFragmentShaderID)),b.defines!==void 0)for(const K in b.defines)z.push(K),z.push(b.defines[K]);return b.isRawShaderMaterial===!1&&(S(z,b),w(z,b),z.push(o.outputColorSpace)),z.push(b.customProgramCacheKey),z.join()}function S(b,z){b.push(z.precision),b.push(z.outputColorSpace),b.push(z.envMapMode),b.push(z.envMapCubeUVHeight),b.push(z.mapUv),b.push(z.alphaMapUv),b.push(z.lightMapUv),b.push(z.aoMapUv),b.push(z.bumpMapUv),b.push(z.normalMapUv),b.push(z.displacementMapUv),b.push(z.emissiveMapUv),b.push(z.metalnessMapUv),b.push(z.roughnessMapUv),b.push(z.anisotropyMapUv),b.push(z.clearcoatMapUv),b.push(z.clearcoatNormalMapUv),b.push(z.clearcoatRoughnessMapUv),b.push(z.iridescenceMapUv),b.push(z.iridescenceThicknessMapUv),b.push(z.sheenColorMapUv),b.push(z.sheenRoughnessMapUv),b.push(z.specularMapUv),b.push(z.specularColorMapUv),b.push(z.specularIntensityMapUv),b.push(z.transmissionMapUv),b.push(z.thicknessMapUv),b.push(z.combine),b.push(z.fogExp2),b.push(z.sizeAttenuation),b.push(z.morphTargetsCount),b.push(z.morphAttributeCount),b.push(z.numDirLights),b.push(z.numPointLights),b.push(z.numSpotLights),b.push(z.numSpotLightMaps),b.push(z.numHemiLights),b.push(z.numRectAreaLights),b.push(z.numDirLightShadows),b.push(z.numPointLightShadows),b.push(z.numSpotLightShadows),b.push(z.numSpotLightShadowsWithMaps),b.push(z.numLightProbes),b.push(z.shadowMapType),b.push(z.toneMapping),b.push(z.numClippingPlanes),b.push(z.numClipIntersection),b.push(z.depthPacking)}function w(b,z){h.disableAll(),z.instancing&&h.enable(0),z.instancingColor&&h.enable(1),z.instancingMorph&&h.enable(2),z.matcap&&h.enable(3),z.envMap&&h.enable(4),z.normalMapObjectSpace&&h.enable(5),z.normalMapTangentSpace&&h.enable(6),z.clearcoat&&h.enable(7),z.iridescence&&h.enable(8),z.alphaTest&&h.enable(9),z.vertexColors&&h.enable(10),z.vertexAlphas&&h.enable(11),z.vertexUv1s&&h.enable(12),z.vertexUv2s&&h.enable(13),z.vertexUv3s&&h.enable(14),z.vertexTangents&&h.enable(15),z.anisotropy&&h.enable(16),z.alphaHash&&h.enable(17),z.batching&&h.enable(18),z.dispersion&&h.enable(19),z.batchingColor&&h.enable(20),z.gradientMap&&h.enable(21),z.packedNormalMap&&h.enable(22),z.vertexNormals&&h.enable(23),b.push(h.mask),h.disableAll(),z.fog&&h.enable(0),z.useFog&&h.enable(1),z.flatShading&&h.enable(2),z.logarithmicDepthBuffer&&h.enable(3),z.reversedDepthBuffer&&h.enable(4),z.skinning&&h.enable(5),z.morphTargets&&h.enable(6),z.morphNormals&&h.enable(7),z.morphColors&&h.enable(8),z.premultipliedAlpha&&h.enable(9),z.shadowMapEnabled&&h.enable(10),z.doubleSided&&h.enable(11),z.flipSided&&h.enable(12),z.useDepthPacking&&h.enable(13),z.dithering&&h.enable(14),z.transmission&&h.enable(15),z.sheen&&h.enable(16),z.opaque&&h.enable(17),z.pointsUvs&&h.enable(18),z.decodeVideoTexture&&h.enable(19),z.decodeVideoTextureEmissive&&h.enable(20),z.alphaToCoverage&&h.enable(21),z.numLightProbeGrids>0&&h.enable(22),b.push(h.mask)}function P(b){const z=E[b.type];let K;if(z){const H=Fi[z];K=_y.clone(H.uniforms)}else K=b.uniforms;return K}function N(b,z){let K=x.get(z);return K!==void 0?++K.usedTimes:(K=new q1(o,z,b,l),d.push(K),x.set(z,K)),K}function Y(b){if(--b.usedTimes===0){const z=d.indexOf(b);d[z]=d[d.length-1],d.pop(),x.delete(b.cacheKey),b.destroy()}}function O(b){p.remove(b)}function B(){p.dispose()}return{getParameters:D,getProgramCacheKey:M,getUniforms:P,acquireProgram:N,releaseProgram:Y,releaseShaderCache:O,programs:d,dispose:B}}function $1(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let p=o.get(h);return p===void 0&&(p={},o.set(h,p)),p}function r(h){o.delete(h)}function l(h,p,m){o.get(h)[p]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function tA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function av(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function rv(){const o=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function h(_){let E=0;return _.isInstancedMesh&&(E+=2),_.isSkinnedMesh&&(E+=1),E}function p(_,E,A,D,M,S){let w=o[t];return w===void 0?(w={id:_.id,object:_,geometry:E,material:A,materialVariant:h(_),groupOrder:D,renderOrder:_.renderOrder,z:M,group:S},o[t]=w):(w.id=_.id,w.object=_,w.geometry=E,w.material=A,w.materialVariant=h(_),w.groupOrder=D,w.renderOrder=_.renderOrder,w.z=M,w.group=S),t++,w}function m(_,E,A,D,M,S){const w=p(_,E,A,D,M,S);A.transmission>0?r.push(w):A.transparent===!0?l.push(w):i.push(w)}function d(_,E,A,D,M,S){const w=p(_,E,A,D,M,S);A.transmission>0?r.unshift(w):A.transparent===!0?l.unshift(w):i.unshift(w)}function x(_,E){i.length>1&&i.sort(_||tA),r.length>1&&r.sort(E||av),l.length>1&&l.sort(E||av)}function v(){for(let _=t,E=o.length;_<E;_++){const A=o[_];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:m,unshift:d,finish:v,sort:x}}function eA(){let o=new WeakMap;function t(r,l){const c=o.get(r);let h;return c===void 0?(h=new rv,o.set(r,[h])):l>=c.length?(h=new rv,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function nA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new tt,color:new Me};break;case"SpotLight":i={position:new tt,direction:new tt,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new tt,color:new Me,distance:0,decay:0};break;case"HemisphereLight":i={direction:new tt,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":i={color:new Me,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return o[t.id]=i,i}}}function iA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let aA=0;function rA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function sA(o){const t=new nA,i=iA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new tt);const l=new tt,c=new on,h=new on;function p(d){let x=0,v=0,_=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let E=0,A=0,D=0,M=0,S=0,w=0,P=0,N=0,Y=0,O=0,B=0;d.sort(rA);for(let z=0,K=d.length;z<K;z++){const H=d[z],$=H.color,ut=H.intensity,pt=H.distance;let q=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Hr?q=H.shadow.map.texture:q=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)x+=$.r*ut,v+=$.g*ut,_+=$.b*ut;else if(H.isLightProbe){for(let U=0;U<9;U++)r.probe[U].addScaledVector(H.sh.coefficients[U],ut);B++}else if(H.isDirectionalLight){const U=t.get(H);if(U.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const I=H.shadow,ot=i.get(H);ot.shadowIntensity=I.intensity,ot.shadowBias=I.bias,ot.shadowNormalBias=I.normalBias,ot.shadowRadius=I.radius,ot.shadowMapSize=I.mapSize,r.directionalShadow[E]=ot,r.directionalShadowMap[E]=q,r.directionalShadowMatrix[E]=H.shadow.matrix,w++}r.directional[E]=U,E++}else if(H.isSpotLight){const U=t.get(H);U.position.setFromMatrixPosition(H.matrixWorld),U.color.copy($).multiplyScalar(ut),U.distance=pt,U.coneCos=Math.cos(H.angle),U.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),U.decay=H.decay,r.spot[D]=U;const I=H.shadow;if(H.map&&(r.spotLightMap[Y]=H.map,Y++,I.updateMatrices(H),H.castShadow&&O++),r.spotLightMatrix[D]=I.matrix,H.castShadow){const ot=i.get(H);ot.shadowIntensity=I.intensity,ot.shadowBias=I.bias,ot.shadowNormalBias=I.normalBias,ot.shadowRadius=I.radius,ot.shadowMapSize=I.mapSize,r.spotShadow[D]=ot,r.spotShadowMap[D]=q,N++}D++}else if(H.isRectAreaLight){const U=t.get(H);U.color.copy($).multiplyScalar(ut),U.halfWidth.set(H.width*.5,0,0),U.halfHeight.set(0,H.height*.5,0),r.rectArea[M]=U,M++}else if(H.isPointLight){const U=t.get(H);if(U.color.copy(H.color).multiplyScalar(H.intensity),U.distance=H.distance,U.decay=H.decay,H.castShadow){const I=H.shadow,ot=i.get(H);ot.shadowIntensity=I.intensity,ot.shadowBias=I.bias,ot.shadowNormalBias=I.normalBias,ot.shadowRadius=I.radius,ot.shadowMapSize=I.mapSize,ot.shadowCameraNear=I.camera.near,ot.shadowCameraFar=I.camera.far,r.pointShadow[A]=ot,r.pointShadowMap[A]=q,r.pointShadowMatrix[A]=H.shadow.matrix,P++}r.point[A]=U,A++}else if(H.isHemisphereLight){const U=t.get(H);U.skyColor.copy(H.color).multiplyScalar(ut),U.groundColor.copy(H.groundColor).multiplyScalar(ut),r.hemi[S]=U,S++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ft.LTC_FLOAT_1,r.rectAreaLTC2=Ft.LTC_FLOAT_2):(r.rectAreaLTC1=Ft.LTC_HALF_1,r.rectAreaLTC2=Ft.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=v,r.ambient[2]=_;const b=r.hash;(b.directionalLength!==E||b.pointLength!==A||b.spotLength!==D||b.rectAreaLength!==M||b.hemiLength!==S||b.numDirectionalShadows!==w||b.numPointShadows!==P||b.numSpotShadows!==N||b.numSpotMaps!==Y||b.numLightProbes!==B)&&(r.directional.length=E,r.spot.length=D,r.rectArea.length=M,r.point.length=A,r.hemi.length=S,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=N+Y-O,r.spotLightMap.length=Y,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=B,b.directionalLength=E,b.pointLength=A,b.spotLength=D,b.rectAreaLength=M,b.hemiLength=S,b.numDirectionalShadows=w,b.numPointShadows=P,b.numSpotShadows=N,b.numSpotMaps=Y,b.numLightProbes=B,r.version=aA++)}function m(d,x){let v=0,_=0,E=0,A=0,D=0;const M=x.matrixWorldInverse;for(let S=0,w=d.length;S<w;S++){const P=d[S];if(P.isDirectionalLight){const N=r.directional[v];N.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),v++}else if(P.isSpotLight){const N=r.spot[E];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),N.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),E++}else if(P.isRectAreaLight){const N=r.rectArea[A];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),h.identity(),c.copy(P.matrixWorld),c.premultiply(M),h.extractRotation(c),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),A++}else if(P.isPointLight){const N=r.point[_];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),_++}else if(P.isHemisphereLight){const N=r.hemi[D];N.direction.setFromMatrixPosition(P.matrixWorld),N.direction.transformDirection(M),D++}}}return{setup:p,setupView:m,state:r}}function sv(o){const t=new sA(o),i=[],r=[],l=[];function c(_){v.camera=_,i.length=0,r.length=0,l.length=0}function h(_){i.push(_)}function p(_){r.push(_)}function m(_){l.push(_)}function d(){t.setup(i)}function x(_){t.setupView(i,_)}const v={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:d,setupLightsView:x,pushLight:h,pushShadow:p,pushLightProbeGrid:m}}function oA(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let p;return h===void 0?(p=new sv(o),t.set(l,[p])):c>=h.length?(p=new sv(o),h.push(p)):p=h[c],p}function r(){t=new WeakMap}return{get:i,dispose:r}}const lA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,uA=[new tt(1,0,0),new tt(-1,0,0),new tt(0,1,0),new tt(0,-1,0),new tt(0,0,1),new tt(0,0,-1)],fA=[new tt(0,-1,0),new tt(0,-1,0),new tt(0,0,1),new tt(0,0,-1),new tt(0,-1,0),new tt(0,-1,0)],ov=new on,Jo=new tt,ed=new tt;function hA(o,t,i){let r=new mp;const l=new pe,c=new pe,h=new sn,p=new yy,m=new Ey,d={},x=i.maxTextureSize,v={[ur]:qn,[qn]:ur,[Hi]:Hi},_=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:lA,fragmentShader:cA}),E=_.clone();E.defines.HORIZONTAL_PASS=1;const A=new Zi;A.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new On(A,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wc;let S=this.type;this.render=function(O,B,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||O.length===0)return;this.type===cv&&(ee("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Wc);const z=o.getRenderTarget(),K=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),$=o.state;$.setBlending(Sa),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ut=S!==this.type;ut&&B.traverse(function(pt){pt.material&&(Array.isArray(pt.material)?pt.material.forEach(q=>q.needsUpdate=!0):pt.material.needsUpdate=!0)});for(let pt=0,q=O.length;pt<q;pt++){const U=O[pt],I=U.shadow;if(I===void 0){ee("WebGLShadowMap:",U,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;l.copy(I.mapSize);const ot=I.getFrameExtents();l.multiply(ot),c.copy(I.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/ot.x),l.x=c.x*ot.x,I.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/ot.y),l.y=c.y*ot.y,I.mapSize.y=c.y));const mt=o.state.buffers.depth.getReversed();if(I.camera._reversedDepth=mt,I.map===null||ut===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===$o){if(U.isPointLight){ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Wi(l.x,l.y,{format:Hr,type:Ea,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),I.map.texture.name=U.name+".shadowMap",I.map.depthTexture=new Ws(l.x,l.y,Vi),I.map.depthTexture.name=U.name+".shadowMapDepth",I.map.depthTexture.format=ba,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Cn,I.map.depthTexture.magFilter=Cn}else U.isPointLight?(I.map=new Vv(l.x),I.map.depthTexture=new my(l.x,Yi)):(I.map=new Wi(l.x,l.y),I.map.depthTexture=new Ws(l.x,l.y,Yi)),I.map.depthTexture.name=U.name+".shadowMap",I.map.depthTexture.format=ba,this.type===Wc?(I.map.depthTexture.compareFunction=mt?fp:up,I.map.depthTexture.minFilter=Pn,I.map.depthTexture.magFilter=Pn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Cn,I.map.depthTexture.magFilter=Cn);I.camera.updateProjectionMatrix()}const Et=I.map.isWebGLCubeRenderTarget?6:1;for(let L=0;L<Et;L++){if(I.map.isWebGLCubeRenderTarget)o.setRenderTarget(I.map,L),o.clear();else{L===0&&(o.setRenderTarget(I.map),o.clear());const Q=I.getViewport(L);h.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),$.viewport(h)}if(U.isPointLight){const Q=I.camera,G=I.matrix,gt=U.distance||Q.far;gt!==Q.far&&(Q.far=gt,Q.updateProjectionMatrix()),Jo.setFromMatrixPosition(U.matrixWorld),Q.position.copy(Jo),ed.copy(Q.position),ed.add(uA[L]),Q.up.copy(fA[L]),Q.lookAt(ed),Q.updateMatrixWorld(),G.makeTranslation(-Jo.x,-Jo.y,-Jo.z),ov.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),I._frustum.setFromProjectionMatrix(ov,Q.coordinateSystem,Q.reversedDepth)}else I.updateMatrices(U);r=I.getFrustum(),N(B,b,I.camera,U,this.type)}I.isPointLightShadow!==!0&&this.type===$o&&w(I,b),I.needsUpdate=!1}S=this.type,M.needsUpdate=!1,o.setRenderTarget(z,K,H)};function w(O,B){const b=t.update(D);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,E.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,E.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Wi(l.x,l.y,{format:Hr,type:Ea})),_.uniforms.shadow_pass.value=O.map.depthTexture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(B,null,b,_,D,null),E.uniforms.shadow_pass.value=O.mapPass.texture,E.uniforms.resolution.value=O.mapSize,E.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(B,null,b,E,D,null)}function P(O,B,b,z){let K=null;const H=b.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(H!==void 0)K=H;else if(K=b.isPointLight===!0?m:p,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const $=K.uuid,ut=B.uuid;let pt=d[$];pt===void 0&&(pt={},d[$]=pt);let q=pt[ut];q===void 0&&(q=K.clone(),pt[ut]=q,B.addEventListener("dispose",Y)),K=q}if(K.visible=B.visible,K.wireframe=B.wireframe,z===$o?K.side=B.shadowSide!==null?B.shadowSide:B.side:K.side=B.shadowSide!==null?B.shadowSide:v[B.side],K.alphaMap=B.alphaMap,K.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,K.map=B.map,K.clipShadows=B.clipShadows,K.clippingPlanes=B.clippingPlanes,K.clipIntersection=B.clipIntersection,K.displacementMap=B.displacementMap,K.displacementScale=B.displacementScale,K.displacementBias=B.displacementBias,K.wireframeLinewidth=B.wireframeLinewidth,K.linewidth=B.linewidth,b.isPointLight===!0&&K.isMeshDistanceMaterial===!0){const $=o.properties.get(K);$.light=b}return K}function N(O,B,b,z,K){if(O.visible===!1)return;if(O.layers.test(B.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&K===$o)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,O.matrixWorld);const ut=t.update(O),pt=O.material;if(Array.isArray(pt)){const q=ut.groups;for(let U=0,I=q.length;U<I;U++){const ot=q[U],mt=pt[ot.materialIndex];if(mt&&mt.visible){const Et=P(O,mt,z,K);O.onBeforeShadow(o,O,B,b,ut,Et,ot),o.renderBufferDirect(b,null,ut,Et,O,ot),O.onAfterShadow(o,O,B,b,ut,Et,ot)}}}else if(pt.visible){const q=P(O,pt,z,K);O.onBeforeShadow(o,O,B,b,ut,q,null),o.renderBufferDirect(b,null,ut,q,O,null),O.onAfterShadow(o,O,B,b,ut,q,null)}}const $=O.children;for(let ut=0,pt=$.length;ut<pt;ut++)N($[ut],B,b,z,K)}function Y(O){O.target.removeEventListener("dispose",Y);for(const b in d){const z=d[b],K=O.target.uuid;K in z&&(z[K].dispose(),delete z[K])}}}function dA(o,t){function i(){let V=!1;const Ct=new sn;let dt=null;const Bt=new sn(0,0,0,0);return{setMask:function(Lt){dt!==Lt&&!V&&(o.colorMask(Lt,Lt,Lt,Lt),dt=Lt)},setLocked:function(Lt){V=Lt},setClear:function(Lt,bt,qt,te,nn){nn===!0&&(Lt*=te,bt*=te,qt*=te),Ct.set(Lt,bt,qt,te),Bt.equals(Ct)===!1&&(o.clearColor(Lt,bt,qt,te),Bt.copy(Ct))},reset:function(){V=!1,dt=null,Bt.set(-1,0,0,0)}}}function r(){let V=!1,Ct=!1,dt=null,Bt=null,Lt=null;return{setReversed:function(bt){if(Ct!==bt){const qt=t.get("EXT_clip_control");bt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),Ct=bt;const te=Lt;Lt=null,this.setClear(te)}},getReversed:function(){return Ct},setTest:function(bt){bt?yt(o.DEPTH_TEST):Tt(o.DEPTH_TEST)},setMask:function(bt){dt!==bt&&!V&&(o.depthMask(bt),dt=bt)},setFunc:function(bt){if(Ct&&(bt=GM[bt]),Bt!==bt){switch(bt){case cd:o.depthFunc(o.NEVER);break;case ud:o.depthFunc(o.ALWAYS);break;case fd:o.depthFunc(o.LESS);break;case ks:o.depthFunc(o.LEQUAL);break;case hd:o.depthFunc(o.EQUAL);break;case dd:o.depthFunc(o.GEQUAL);break;case pd:o.depthFunc(o.GREATER);break;case md:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Bt=bt}},setLocked:function(bt){V=bt},setClear:function(bt){Lt!==bt&&(Lt=bt,Ct&&(bt=1-bt),o.clearDepth(bt))},reset:function(){V=!1,dt=null,Bt=null,Lt=null,Ct=!1}}}function l(){let V=!1,Ct=null,dt=null,Bt=null,Lt=null,bt=null,qt=null,te=null,nn=null;return{setTest:function(Le){V||(Le?yt(o.STENCIL_TEST):Tt(o.STENCIL_TEST))},setMask:function(Le){Ct!==Le&&!V&&(o.stencilMask(Le),Ct=Le)},setFunc:function(Le,li,Zn){(dt!==Le||Bt!==li||Lt!==Zn)&&(o.stencilFunc(Le,li,Zn),dt=Le,Bt=li,Lt=Zn)},setOp:function(Le,li,Zn){(bt!==Le||qt!==li||te!==Zn)&&(o.stencilOp(Le,li,Zn),bt=Le,qt=li,te=Zn)},setLocked:function(Le){V=Le},setClear:function(Le){nn!==Le&&(o.clearStencil(Le),nn=Le)},reset:function(){V=!1,Ct=null,dt=null,Bt=null,Lt=null,bt=null,qt=null,te=null,nn=null}}}const c=new i,h=new r,p=new l,m=new WeakMap,d=new WeakMap;let x={},v={},_={},E=new WeakMap,A=[],D=null,M=!1,S=null,w=null,P=null,N=null,Y=null,O=null,B=null,b=new Me(0,0,0),z=0,K=!1,H=null,$=null,ut=null,pt=null,q=null;const U=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,ot=0;const mt=o.getParameter(o.VERSION);mt.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(mt)[1]),I=ot>=1):mt.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(mt)[1]),I=ot>=2);let Et=null,L={};const Q=o.getParameter(o.SCISSOR_BOX),G=o.getParameter(o.VIEWPORT),gt=new sn().fromArray(Q),St=new sn().fromArray(G);function W(V,Ct,dt,Bt){const Lt=new Uint8Array(4),bt=o.createTexture();o.bindTexture(V,bt),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let qt=0;qt<dt;qt++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(Ct,0,o.RGBA,1,1,Bt,0,o.RGBA,o.UNSIGNED_BYTE,Lt):o.texImage2D(Ct+qt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Lt);return bt}const xt={};xt[o.TEXTURE_2D]=W(o.TEXTURE_2D,o.TEXTURE_2D,1),xt[o.TEXTURE_CUBE_MAP]=W(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[o.TEXTURE_2D_ARRAY]=W(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),xt[o.TEXTURE_3D]=W(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),yt(o.DEPTH_TEST),h.setFunc(ks),ke(!1),Re(c_),yt(o.CULL_FACE),Ae(Sa);function yt(V){x[V]!==!0&&(o.enable(V),x[V]=!0)}function Tt(V){x[V]!==!1&&(o.disable(V),x[V]=!1)}function Yt(V,Ct){return _[V]!==Ct?(o.bindFramebuffer(V,Ct),_[V]=Ct,V===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Ct),V===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Ht(V,Ct){let dt=A,Bt=!1;if(V){dt=E.get(Ct),dt===void 0&&(dt=[],E.set(Ct,dt));const Lt=V.textures;if(dt.length!==Lt.length||dt[0]!==o.COLOR_ATTACHMENT0){for(let bt=0,qt=Lt.length;bt<qt;bt++)dt[bt]=o.COLOR_ATTACHMENT0+bt;dt.length=Lt.length,Bt=!0}}else dt[0]!==o.BACK&&(dt[0]=o.BACK,Bt=!0);Bt&&o.drawBuffers(dt)}function ae(V){return D!==V?(o.useProgram(V),D=V,!0):!1}const Kt={[Pr]:o.FUNC_ADD,[uM]:o.FUNC_SUBTRACT,[fM]:o.FUNC_REVERSE_SUBTRACT};Kt[hM]=o.MIN,Kt[dM]=o.MAX;const ce={[pM]:o.ZERO,[mM]:o.ONE,[gM]:o.SRC_COLOR,[od]:o.SRC_ALPHA,[yM]:o.SRC_ALPHA_SATURATE,[SM]:o.DST_COLOR,[vM]:o.DST_ALPHA,[_M]:o.ONE_MINUS_SRC_COLOR,[ld]:o.ONE_MINUS_SRC_ALPHA,[MM]:o.ONE_MINUS_DST_COLOR,[xM]:o.ONE_MINUS_DST_ALPHA,[EM]:o.CONSTANT_COLOR,[bM]:o.ONE_MINUS_CONSTANT_COLOR,[TM]:o.CONSTANT_ALPHA,[AM]:o.ONE_MINUS_CONSTANT_ALPHA};function Ae(V,Ct,dt,Bt,Lt,bt,qt,te,nn,Le){if(V===Sa){M===!0&&(Tt(o.BLEND),M=!1);return}if(M===!1&&(yt(o.BLEND),M=!0),V!==cM){if(V!==S||Le!==K){if((w!==Pr||Y!==Pr)&&(o.blendEquation(o.FUNC_ADD),w=Pr,Y=Pr),Le)switch(V){case Gs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case u_:o.blendFunc(o.ONE,o.ONE);break;case f_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case h_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Te("WebGLState: Invalid blending: ",V);break}else switch(V){case Gs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case u_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case f_:Te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case h_:Te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Te("WebGLState: Invalid blending: ",V);break}P=null,N=null,O=null,B=null,b.set(0,0,0),z=0,S=V,K=Le}return}Lt=Lt||Ct,bt=bt||dt,qt=qt||Bt,(Ct!==w||Lt!==Y)&&(o.blendEquationSeparate(Kt[Ct],Kt[Lt]),w=Ct,Y=Lt),(dt!==P||Bt!==N||bt!==O||qt!==B)&&(o.blendFuncSeparate(ce[dt],ce[Bt],ce[bt],ce[qt]),P=dt,N=Bt,O=bt,B=qt),(te.equals(b)===!1||nn!==z)&&(o.blendColor(te.r,te.g,te.b,nn),b.copy(te),z=nn),S=V,K=!1}function se(V,Ct){V.side===Hi?Tt(o.CULL_FACE):yt(o.CULL_FACE);let dt=V.side===qn;Ct&&(dt=!dt),ke(dt),V.blending===Gs&&V.transparent===!1?Ae(Sa):Ae(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),h.setFunc(V.depthFunc),h.setTest(V.depthTest),h.setMask(V.depthWrite),c.setMask(V.colorWrite);const Bt=V.stencilWrite;p.setTest(Bt),Bt&&(p.setMask(V.stencilWriteMask),p.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),p.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),X(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?yt(o.SAMPLE_ALPHA_TO_COVERAGE):Tt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ke(V){H!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),H=V)}function Re(V){V!==oM?(yt(o.CULL_FACE),V!==$&&(V===c_?o.cullFace(o.BACK):V===lM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Tt(o.CULL_FACE),$=V}function Pe(V){V!==ut&&(I&&o.lineWidth(V),ut=V)}function X(V,Ct,dt){V?(yt(o.POLYGON_OFFSET_FILL),(pt!==Ct||q!==dt)&&(pt=Ct,q=dt,h.getReversed()&&(Ct=-Ct),o.polygonOffset(Ct,dt))):Tt(o.POLYGON_OFFSET_FILL)}function ze(V){V?yt(o.SCISSOR_TEST):Tt(o.SCISSOR_TEST)}function re(V){V===void 0&&(V=o.TEXTURE0+U-1),Et!==V&&(o.activeTexture(V),Et=V)}function Ce(V,Ct,dt){dt===void 0&&(Et===null?dt=o.TEXTURE0+U-1:dt=Et);let Bt=L[dt];Bt===void 0&&(Bt={type:void 0,texture:void 0},L[dt]=Bt),(Bt.type!==V||Bt.texture!==Ct)&&(Et!==dt&&(o.activeTexture(dt),Et=dt),o.bindTexture(V,Ct||xt[V]),Bt.type=V,Bt.texture=Ct)}function Rt(){const V=L[Et];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Je(){try{o.compressedTexImage2D(...arguments)}catch(V){Te("WebGLState:",V)}}function C(){try{o.compressedTexImage3D(...arguments)}catch(V){Te("WebGLState:",V)}}function y(){try{o.texSubImage2D(...arguments)}catch(V){Te("WebGLState:",V)}}function J(){try{o.texSubImage3D(...arguments)}catch(V){Te("WebGLState:",V)}}function vt(){try{o.compressedTexSubImage2D(...arguments)}catch(V){Te("WebGLState:",V)}}function At(){try{o.compressedTexSubImage3D(...arguments)}catch(V){Te("WebGLState:",V)}}function wt(){try{o.texStorage2D(...arguments)}catch(V){Te("WebGLState:",V)}}function Nt(){try{o.texStorage3D(...arguments)}catch(V){Te("WebGLState:",V)}}function ct(){try{o.texImage2D(...arguments)}catch(V){Te("WebGLState:",V)}}function ft(){try{o.texImage3D(...arguments)}catch(V){Te("WebGLState:",V)}}function Ot(V){return v[V]!==void 0?v[V]:o.getParameter(V)}function Pt(V,Ct){v[V]!==Ct&&(o.pixelStorei(V,Ct),v[V]=Ct)}function Ut(V){gt.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),gt.copy(V))}function Dt(V){St.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),St.copy(V))}function ne(V,Ct){let dt=d.get(Ct);dt===void 0&&(dt=new WeakMap,d.set(Ct,dt));let Bt=dt.get(V);Bt===void 0&&(Bt=o.getUniformBlockIndex(Ct,V.name),dt.set(V,Bt))}function ie(V,Ct){const Bt=d.get(Ct).get(V);m.get(Ct)!==Bt&&(o.uniformBlockBinding(Ct,Bt,V.__bindingPointIndex),m.set(Ct,Bt))}function me(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),x={},v={},Et=null,L={},_={},E=new WeakMap,A=[],D=null,M=!1,S=null,w=null,P=null,N=null,Y=null,O=null,B=null,b=new Me(0,0,0),z=0,K=!1,H=null,$=null,ut=null,pt=null,q=null,gt.set(0,0,o.canvas.width,o.canvas.height),St.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:yt,disable:Tt,bindFramebuffer:Yt,drawBuffers:Ht,useProgram:ae,setBlending:Ae,setMaterial:se,setFlipSided:ke,setCullFace:Re,setLineWidth:Pe,setPolygonOffset:X,setScissorTest:ze,activeTexture:re,bindTexture:Ce,unbindTexture:Rt,compressedTexImage2D:Je,compressedTexImage3D:C,texImage2D:ct,texImage3D:ft,pixelStorei:Pt,getParameter:Ot,updateUBOMapping:ne,uniformBlockBinding:ie,texStorage2D:wt,texStorage3D:Nt,texSubImage2D:y,texSubImage3D:J,compressedTexSubImage2D:vt,compressedTexSubImage3D:At,scissor:Ut,viewport:Dt,reset:me}}function pA(o,t,i,r,l,c,h){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new pe,x=new WeakMap,v=new Set;let _;const E=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(C,y){return A?new OffscreenCanvas(C,y):nu("canvas")}function M(C,y,J){let vt=1;const At=Je(C);if((At.width>J||At.height>J)&&(vt=J/Math.max(At.width,At.height)),vt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const wt=Math.floor(vt*At.width),Nt=Math.floor(vt*At.height);_===void 0&&(_=D(wt,Nt));const ct=y?D(wt,Nt):_;return ct.width=wt,ct.height=Nt,ct.getContext("2d").drawImage(C,0,0,wt,Nt),ee("WebGLRenderer: Texture has been resized from ("+At.width+"x"+At.height+") to ("+wt+"x"+Nt+")."),ct}else return"data"in C&&ee("WebGLRenderer: Image in DataTexture is too big ("+At.width+"x"+At.height+")."),C;return C}function S(C){return C.generateMipmaps}function w(C){o.generateMipmap(C)}function P(C){return C.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?o.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(C,y,J,vt,At,wt=!1){if(C!==null){if(o[C]!==void 0)return o[C];ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Nt;vt&&(Nt=t.get("EXT_texture_norm16"),Nt||ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ct=y;if(y===o.RED&&(J===o.FLOAT&&(ct=o.R32F),J===o.HALF_FLOAT&&(ct=o.R16F),J===o.UNSIGNED_BYTE&&(ct=o.R8),J===o.UNSIGNED_SHORT&&Nt&&(ct=Nt.R16_EXT),J===o.SHORT&&Nt&&(ct=Nt.R16_SNORM_EXT)),y===o.RED_INTEGER&&(J===o.UNSIGNED_BYTE&&(ct=o.R8UI),J===o.UNSIGNED_SHORT&&(ct=o.R16UI),J===o.UNSIGNED_INT&&(ct=o.R32UI),J===o.BYTE&&(ct=o.R8I),J===o.SHORT&&(ct=o.R16I),J===o.INT&&(ct=o.R32I)),y===o.RG&&(J===o.FLOAT&&(ct=o.RG32F),J===o.HALF_FLOAT&&(ct=o.RG16F),J===o.UNSIGNED_BYTE&&(ct=o.RG8),J===o.UNSIGNED_SHORT&&Nt&&(ct=Nt.RG16_EXT),J===o.SHORT&&Nt&&(ct=Nt.RG16_SNORM_EXT)),y===o.RG_INTEGER&&(J===o.UNSIGNED_BYTE&&(ct=o.RG8UI),J===o.UNSIGNED_SHORT&&(ct=o.RG16UI),J===o.UNSIGNED_INT&&(ct=o.RG32UI),J===o.BYTE&&(ct=o.RG8I),J===o.SHORT&&(ct=o.RG16I),J===o.INT&&(ct=o.RG32I)),y===o.RGB_INTEGER&&(J===o.UNSIGNED_BYTE&&(ct=o.RGB8UI),J===o.UNSIGNED_SHORT&&(ct=o.RGB16UI),J===o.UNSIGNED_INT&&(ct=o.RGB32UI),J===o.BYTE&&(ct=o.RGB8I),J===o.SHORT&&(ct=o.RGB16I),J===o.INT&&(ct=o.RGB32I)),y===o.RGBA_INTEGER&&(J===o.UNSIGNED_BYTE&&(ct=o.RGBA8UI),J===o.UNSIGNED_SHORT&&(ct=o.RGBA16UI),J===o.UNSIGNED_INT&&(ct=o.RGBA32UI),J===o.BYTE&&(ct=o.RGBA8I),J===o.SHORT&&(ct=o.RGBA16I),J===o.INT&&(ct=o.RGBA32I)),y===o.RGB&&(J===o.UNSIGNED_SHORT&&Nt&&(ct=Nt.RGB16_EXT),J===o.SHORT&&Nt&&(ct=Nt.RGB16_SNORM_EXT),J===o.UNSIGNED_INT_5_9_9_9_REV&&(ct=o.RGB9_E5),J===o.UNSIGNED_INT_10F_11F_11F_REV&&(ct=o.R11F_G11F_B10F)),y===o.RGBA){const ft=wt?eu:Ee.getTransfer(At);J===o.FLOAT&&(ct=o.RGBA32F),J===o.HALF_FLOAT&&(ct=o.RGBA16F),J===o.UNSIGNED_BYTE&&(ct=ft===Ve?o.SRGB8_ALPHA8:o.RGBA8),J===o.UNSIGNED_SHORT&&Nt&&(ct=Nt.RGBA16_EXT),J===o.SHORT&&Nt&&(ct=Nt.RGBA16_SNORM_EXT),J===o.UNSIGNED_SHORT_4_4_4_4&&(ct=o.RGBA4),J===o.UNSIGNED_SHORT_5_5_5_1&&(ct=o.RGB5_A1)}return(ct===o.R16F||ct===o.R32F||ct===o.RG16F||ct===o.RG32F||ct===o.RGBA16F||ct===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function Y(C,y){let J;return C?y===null||y===Yi||y===il?J=o.DEPTH24_STENCIL8:y===Vi?J=o.DEPTH32F_STENCIL8:y===nl&&(J=o.DEPTH24_STENCIL8,ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Yi||y===il?J=o.DEPTH_COMPONENT24:y===Vi?J=o.DEPTH_COMPONENT32F:y===nl&&(J=o.DEPTH_COMPONENT16),J}function O(C,y){return S(C)===!0||C.isFramebufferTexture&&C.minFilter!==Cn&&C.minFilter!==Pn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function B(C){const y=C.target;y.removeEventListener("dispose",B),z(y),y.isVideoTexture&&x.delete(y),y.isHTMLTexture&&v.delete(y)}function b(C){const y=C.target;y.removeEventListener("dispose",b),H(y)}function z(C){const y=r.get(C);if(y.__webglInit===void 0)return;const J=C.source,vt=E.get(J);if(vt){const At=vt[y.__cacheKey];At.usedTimes--,At.usedTimes===0&&K(C),Object.keys(vt).length===0&&E.delete(J)}r.remove(C)}function K(C){const y=r.get(C);o.deleteTexture(y.__webglTexture);const J=C.source,vt=E.get(J);delete vt[y.__cacheKey],h.memory.textures--}function H(C){const y=r.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),r.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(y.__webglFramebuffer[vt]))for(let At=0;At<y.__webglFramebuffer[vt].length;At++)o.deleteFramebuffer(y.__webglFramebuffer[vt][At]);else o.deleteFramebuffer(y.__webglFramebuffer[vt]);y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer[vt])}else{if(Array.isArray(y.__webglFramebuffer))for(let vt=0;vt<y.__webglFramebuffer.length;vt++)o.deleteFramebuffer(y.__webglFramebuffer[vt]);else o.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let vt=0;vt<y.__webglColorRenderbuffer.length;vt++)y.__webglColorRenderbuffer[vt]&&o.deleteRenderbuffer(y.__webglColorRenderbuffer[vt]);y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const J=C.textures;for(let vt=0,At=J.length;vt<At;vt++){const wt=r.get(J[vt]);wt.__webglTexture&&(o.deleteTexture(wt.__webglTexture),h.memory.textures--),r.remove(J[vt])}r.remove(C)}let $=0;function ut(){$=0}function pt(){return $}function q(C){$=C}function U(){const C=$;return C>=l.maxTextures&&ee("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l.maxTextures),$+=1,C}function I(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function ot(C,y){const J=r.get(C);if(C.isVideoTexture&&Ce(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&J.__version!==C.version){const vt=C.image;if(vt===null)ee("WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)ee("WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(J,C,y);return}}else C.isExternalTexture&&(J.__webglTexture=C.sourceTexture?C.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,J.__webglTexture,o.TEXTURE0+y)}function mt(C,y){const J=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&J.__version!==C.version){Tt(J,C,y);return}else C.isExternalTexture&&(J.__webglTexture=C.sourceTexture?C.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,J.__webglTexture,o.TEXTURE0+y)}function Et(C,y){const J=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&J.__version!==C.version){Tt(J,C,y);return}i.bindTexture(o.TEXTURE_3D,J.__webglTexture,o.TEXTURE0+y)}function L(C,y){const J=r.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&J.__version!==C.version){Yt(J,C,y);return}i.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture,o.TEXTURE0+y)}const Q={[el]:o.REPEAT,[xa]:o.CLAMP_TO_EDGE,[gd]:o.MIRRORED_REPEAT},G={[Cn]:o.NEAREST,[wM]:o.NEAREST_MIPMAP_NEAREST,[gc]:o.NEAREST_MIPMAP_LINEAR,[Pn]:o.LINEAR,[Eh]:o.LINEAR_MIPMAP_NEAREST,[Ir]:o.LINEAR_MIPMAP_LINEAR},gt={[LM]:o.NEVER,[IM]:o.ALWAYS,[NM]:o.LESS,[up]:o.LEQUAL,[OM]:o.EQUAL,[fp]:o.GEQUAL,[PM]:o.GREATER,[zM]:o.NOTEQUAL};function St(C,y){if(y.type===Vi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Pn||y.magFilter===Eh||y.magFilter===gc||y.magFilter===Ir||y.minFilter===Pn||y.minFilter===Eh||y.minFilter===gc||y.minFilter===Ir)&&ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(C,o.TEXTURE_WRAP_S,Q[y.wrapS]),o.texParameteri(C,o.TEXTURE_WRAP_T,Q[y.wrapT]),(C===o.TEXTURE_3D||C===o.TEXTURE_2D_ARRAY)&&o.texParameteri(C,o.TEXTURE_WRAP_R,Q[y.wrapR]),o.texParameteri(C,o.TEXTURE_MAG_FILTER,G[y.magFilter]),o.texParameteri(C,o.TEXTURE_MIN_FILTER,G[y.minFilter]),y.compareFunction&&(o.texParameteri(C,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(C,o.TEXTURE_COMPARE_FUNC,gt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Cn||y.minFilter!==gc&&y.minFilter!==Ir||y.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");o.texParameterf(C,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,l.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function W(C,y){let J=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",B));const vt=y.source;let At=E.get(vt);At===void 0&&(At={},E.set(vt,At));const wt=I(y);if(wt!==C.__cacheKey){At[wt]===void 0&&(At[wt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,J=!0),At[wt].usedTimes++;const Nt=At[C.__cacheKey];Nt!==void 0&&(At[C.__cacheKey].usedTimes--,Nt.usedTimes===0&&K(y)),C.__cacheKey=wt,C.__webglTexture=At[wt].texture}return J}function xt(C,y,J){return Math.floor(Math.floor(C/J)/y)}function yt(C,y,J,vt){const wt=C.updateRanges;if(wt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,y.width,y.height,J,vt,y.data);else{wt.sort((Pt,Ut)=>Pt.start-Ut.start);let Nt=0;for(let Pt=1;Pt<wt.length;Pt++){const Ut=wt[Nt],Dt=wt[Pt],ne=Ut.start+Ut.count,ie=xt(Dt.start,y.width,4),me=xt(Ut.start,y.width,4);Dt.start<=ne+1&&ie===me&&xt(Dt.start+Dt.count-1,y.width,4)===ie?Ut.count=Math.max(Ut.count,Dt.start+Dt.count-Ut.start):(++Nt,wt[Nt]=Dt)}wt.length=Nt+1;const ct=i.getParameter(o.UNPACK_ROW_LENGTH),ft=i.getParameter(o.UNPACK_SKIP_PIXELS),Ot=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,y.width);for(let Pt=0,Ut=wt.length;Pt<Ut;Pt++){const Dt=wt[Pt],ne=Math.floor(Dt.start/4),ie=Math.ceil(Dt.count/4),me=ne%y.width,V=Math.floor(ne/y.width),Ct=ie,dt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,me),i.pixelStorei(o.UNPACK_SKIP_ROWS,V),i.texSubImage2D(o.TEXTURE_2D,0,me,V,Ct,dt,J,vt,y.data)}C.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,ct),i.pixelStorei(o.UNPACK_SKIP_PIXELS,ft),i.pixelStorei(o.UNPACK_SKIP_ROWS,Ot)}}function Tt(C,y,J){let vt=o.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(vt=o.TEXTURE_2D_ARRAY),y.isData3DTexture&&(vt=o.TEXTURE_3D);const At=W(C,y),wt=y.source;i.bindTexture(vt,C.__webglTexture,o.TEXTURE0+J);const Nt=r.get(wt);if(wt.version!==Nt.__version||At===!0){if(i.activeTexture(o.TEXTURE0+J),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const dt=Ee.getPrimaries(Ee.workingColorSpace),Bt=y.colorSpace===or?null:Ee.getPrimaries(y.colorSpace),Lt=y.colorSpace===or||dt===Bt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt)}i.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment);let ft=M(y.image,!1,l.maxTextureSize);ft=Rt(y,ft);const Ot=c.convert(y.format,y.colorSpace),Pt=c.convert(y.type);let Ut=N(y.internalFormat,Ot,Pt,y.normalized,y.colorSpace,y.isVideoTexture);St(vt,y);let Dt;const ne=y.mipmaps,ie=y.isVideoTexture!==!0,me=Nt.__version===void 0||At===!0,V=wt.dataReady,Ct=O(y,ft);if(y.isDepthTexture)Ut=Y(y.format===Br,y.type),me&&(ie?i.texStorage2D(o.TEXTURE_2D,1,Ut,ft.width,ft.height):i.texImage2D(o.TEXTURE_2D,0,Ut,ft.width,ft.height,0,Ot,Pt,null));else if(y.isDataTexture)if(ne.length>0){ie&&me&&i.texStorage2D(o.TEXTURE_2D,Ct,Ut,ne[0].width,ne[0].height);for(let dt=0,Bt=ne.length;dt<Bt;dt++)Dt=ne[dt],ie?V&&i.texSubImage2D(o.TEXTURE_2D,dt,0,0,Dt.width,Dt.height,Ot,Pt,Dt.data):i.texImage2D(o.TEXTURE_2D,dt,Ut,Dt.width,Dt.height,0,Ot,Pt,Dt.data);y.generateMipmaps=!1}else ie?(me&&i.texStorage2D(o.TEXTURE_2D,Ct,Ut,ft.width,ft.height),V&&yt(y,ft,Ot,Pt)):i.texImage2D(o.TEXTURE_2D,0,Ut,ft.width,ft.height,0,Ot,Pt,ft.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ie&&me&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,Ut,ne[0].width,ne[0].height,ft.depth);for(let dt=0,Bt=ne.length;dt<Bt;dt++)if(Dt=ne[dt],y.format!==Di)if(Ot!==null)if(ie){if(V)if(y.layerUpdates.size>0){const Lt=B_(Dt.width,Dt.height,y.format,y.type);for(const bt of y.layerUpdates){const qt=Dt.data.subarray(bt*Lt/Dt.data.BYTES_PER_ELEMENT,(bt+1)*Lt/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,dt,0,0,bt,Dt.width,Dt.height,1,Ot,qt)}y.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,dt,0,0,0,Dt.width,Dt.height,ft.depth,Ot,Dt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,dt,Ut,Dt.width,Dt.height,ft.depth,0,Dt.data,0,0);else ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?V&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,dt,0,0,0,Dt.width,Dt.height,ft.depth,Ot,Pt,Dt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,dt,Ut,Dt.width,Dt.height,ft.depth,0,Ot,Pt,Dt.data)}else{ie&&me&&i.texStorage2D(o.TEXTURE_2D,Ct,Ut,ne[0].width,ne[0].height);for(let dt=0,Bt=ne.length;dt<Bt;dt++)Dt=ne[dt],y.format!==Di?Ot!==null?ie?V&&i.compressedTexSubImage2D(o.TEXTURE_2D,dt,0,0,Dt.width,Dt.height,Ot,Dt.data):i.compressedTexImage2D(o.TEXTURE_2D,dt,Ut,Dt.width,Dt.height,0,Dt.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?V&&i.texSubImage2D(o.TEXTURE_2D,dt,0,0,Dt.width,Dt.height,Ot,Pt,Dt.data):i.texImage2D(o.TEXTURE_2D,dt,Ut,Dt.width,Dt.height,0,Ot,Pt,Dt.data)}else if(y.isDataArrayTexture)if(ie){if(me&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,Ut,ft.width,ft.height,ft.depth),V)if(y.layerUpdates.size>0){const dt=B_(ft.width,ft.height,y.format,y.type);for(const Bt of y.layerUpdates){const Lt=ft.data.subarray(Bt*dt/ft.data.BYTES_PER_ELEMENT,(Bt+1)*dt/ft.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Bt,ft.width,ft.height,1,Ot,Pt,Lt)}y.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Ot,Pt,ft.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ut,ft.width,ft.height,ft.depth,0,Ot,Pt,ft.data);else if(y.isData3DTexture)ie?(me&&i.texStorage3D(o.TEXTURE_3D,Ct,Ut,ft.width,ft.height,ft.depth),V&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Ot,Pt,ft.data)):i.texImage3D(o.TEXTURE_3D,0,Ut,ft.width,ft.height,ft.depth,0,Ot,Pt,ft.data);else if(y.isFramebufferTexture){if(me)if(ie)i.texStorage2D(o.TEXTURE_2D,Ct,Ut,ft.width,ft.height);else{let dt=ft.width,Bt=ft.height;for(let Lt=0;Lt<Ct;Lt++)i.texImage2D(o.TEXTURE_2D,Lt,Ut,dt,Bt,0,Ot,Pt,null),dt>>=1,Bt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in o){const dt=o.canvas;if(dt.hasAttribute("layoutsubtree")||dt.setAttribute("layoutsubtree","true"),ft.parentNode!==dt){dt.appendChild(ft),v.add(y),dt.onpaint=te=>{const nn=te.changedElements;for(const Le of v)nn.includes(Le.image)&&(Le.needsUpdate=!0)},dt.requestPaint();return}const Bt=0,Lt=o.RGBA,bt=o.RGBA,qt=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,Bt,Lt,bt,qt,ft),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(ne.length>0){if(ie&&me){const dt=Je(ne[0]);i.texStorage2D(o.TEXTURE_2D,Ct,Ut,dt.width,dt.height)}for(let dt=0,Bt=ne.length;dt<Bt;dt++)Dt=ne[dt],ie?V&&i.texSubImage2D(o.TEXTURE_2D,dt,0,0,Ot,Pt,Dt):i.texImage2D(o.TEXTURE_2D,dt,Ut,Ot,Pt,Dt);y.generateMipmaps=!1}else if(ie){if(me){const dt=Je(ft);i.texStorage2D(o.TEXTURE_2D,Ct,Ut,dt.width,dt.height)}V&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ot,Pt,ft)}else i.texImage2D(o.TEXTURE_2D,0,Ut,Ot,Pt,ft);S(y)&&w(vt),Nt.__version=wt.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Yt(C,y,J){if(y.image.length!==6)return;const vt=W(C,y),At=y.source;i.bindTexture(o.TEXTURE_CUBE_MAP,C.__webglTexture,o.TEXTURE0+J);const wt=r.get(At);if(At.version!==wt.__version||vt===!0){i.activeTexture(o.TEXTURE0+J);const Nt=Ee.getPrimaries(Ee.workingColorSpace),ct=y.colorSpace===or?null:Ee.getPrimaries(y.colorSpace),ft=y.colorSpace===or||Nt===ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Ot=y.isCompressedTexture||y.image[0].isCompressedTexture,Pt=y.image[0]&&y.image[0].isDataTexture,Ut=[];for(let bt=0;bt<6;bt++)!Ot&&!Pt?Ut[bt]=M(y.image[bt],!0,l.maxCubemapSize):Ut[bt]=Pt?y.image[bt].image:y.image[bt],Ut[bt]=Rt(y,Ut[bt]);const Dt=Ut[0],ne=c.convert(y.format,y.colorSpace),ie=c.convert(y.type),me=N(y.internalFormat,ne,ie,y.normalized,y.colorSpace),V=y.isVideoTexture!==!0,Ct=wt.__version===void 0||vt===!0,dt=At.dataReady;let Bt=O(y,Dt);St(o.TEXTURE_CUBE_MAP,y);let Lt;if(Ot){V&&Ct&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,me,Dt.width,Dt.height);for(let bt=0;bt<6;bt++){Lt=Ut[bt].mipmaps;for(let qt=0;qt<Lt.length;qt++){const te=Lt[qt];y.format!==Di?ne!==null?V?dt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,qt,0,0,te.width,te.height,ne,te.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,qt,me,te.width,te.height,0,te.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,qt,0,0,te.width,te.height,ne,ie,te.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,qt,me,te.width,te.height,0,ne,ie,te.data)}}}else{if(Lt=y.mipmaps,V&&Ct){Lt.length>0&&Bt++;const bt=Je(Ut[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,me,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(Pt){V?dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Ut[bt].width,Ut[bt].height,ne,ie,Ut[bt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,me,Ut[bt].width,Ut[bt].height,0,ne,ie,Ut[bt].data);for(let qt=0;qt<Lt.length;qt++){const nn=Lt[qt].image[bt].image;V?dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,qt+1,0,0,nn.width,nn.height,ne,ie,nn.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,qt+1,me,nn.width,nn.height,0,ne,ie,nn.data)}}else{V?dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,ne,ie,Ut[bt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,me,ne,ie,Ut[bt]);for(let qt=0;qt<Lt.length;qt++){const te=Lt[qt];V?dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,qt+1,0,0,ne,ie,te.image[bt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,qt+1,me,ne,ie,te.image[bt])}}}S(y)&&w(o.TEXTURE_CUBE_MAP),wt.__version=At.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Ht(C,y,J,vt,At,wt){const Nt=c.convert(J.format,J.colorSpace),ct=c.convert(J.type),ft=N(J.internalFormat,Nt,ct,J.normalized,J.colorSpace),Ot=r.get(y),Pt=r.get(J);if(Pt.__renderTarget=y,!Ot.__hasExternalTextures){const Ut=Math.max(1,y.width>>wt),Dt=Math.max(1,y.height>>wt);At===o.TEXTURE_3D||At===o.TEXTURE_2D_ARRAY?i.texImage3D(At,wt,ft,Ut,Dt,y.depth,0,Nt,ct,null):i.texImage2D(At,wt,ft,Ut,Dt,0,Nt,ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,C),re(y)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,vt,At,Pt.__webglTexture,0,ze(y)):(At===o.TEXTURE_2D||At>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&At<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,vt,At,Pt.__webglTexture,wt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ae(C,y,J){if(o.bindRenderbuffer(o.RENDERBUFFER,C),y.depthBuffer){const vt=y.depthTexture,At=vt&&vt.isDepthTexture?vt.type:null,wt=Y(y.stencilBuffer,At),Nt=y.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;re(y)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ze(y),wt,y.width,y.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,ze(y),wt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,wt,y.width,y.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Nt,o.RENDERBUFFER,C)}else{const vt=y.textures;for(let At=0;At<vt.length;At++){const wt=vt[At],Nt=c.convert(wt.format,wt.colorSpace),ct=c.convert(wt.type),ft=N(wt.internalFormat,Nt,ct,wt.normalized,wt.colorSpace);re(y)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ze(y),ft,y.width,y.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,ze(y),ft,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,ft,y.width,y.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Kt(C,y,J){const vt=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const At=r.get(y.depthTexture);if(At.__renderTarget=y,(!At.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),vt){if(At.__webglInit===void 0&&(At.__webglInit=!0,y.depthTexture.addEventListener("dispose",B)),At.__webglTexture===void 0){At.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,At.__webglTexture),St(o.TEXTURE_CUBE_MAP,y.depthTexture);const Ot=c.convert(y.depthTexture.format),Pt=c.convert(y.depthTexture.type);let Ut;y.depthTexture.format===ba?Ut=o.DEPTH_COMPONENT24:y.depthTexture.format===Br&&(Ut=o.DEPTH24_STENCIL8);for(let Dt=0;Dt<6;Dt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,Ut,y.width,y.height,0,Ot,Pt,null)}}else ot(y.depthTexture,0);const wt=At.__webglTexture,Nt=ze(y),ct=vt?o.TEXTURE_CUBE_MAP_POSITIVE_X+J:o.TEXTURE_2D,ft=y.depthTexture.format===Br?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(y.depthTexture.format===ba)re(y)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,ct,wt,0,Nt):o.framebufferTexture2D(o.FRAMEBUFFER,ft,ct,wt,0);else if(y.depthTexture.format===Br)re(y)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,ct,wt,0,Nt):o.framebufferTexture2D(o.FRAMEBUFFER,ft,ct,wt,0);else throw new Error("Unknown depthTexture format")}function ce(C){const y=r.get(C),J=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const vt=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),vt){const At=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,vt.removeEventListener("dispose",At)};vt.addEventListener("dispose",At),y.__depthDisposeCallback=At}y.__boundDepthTexture=vt}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(J)for(let vt=0;vt<6;vt++)Kt(y.__webglFramebuffer[vt],C,vt);else{const vt=C.texture.mipmaps;vt&&vt.length>0?Kt(y.__webglFramebuffer[0],C,0):Kt(y.__webglFramebuffer,C,0)}else if(J){y.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)if(i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[vt]),y.__webglDepthbuffer[vt]===void 0)y.__webglDepthbuffer[vt]=o.createRenderbuffer(),ae(y.__webglDepthbuffer[vt],C,!1);else{const At=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=y.__webglDepthbuffer[vt];o.bindRenderbuffer(o.RENDERBUFFER,wt),o.framebufferRenderbuffer(o.FRAMEBUFFER,At,o.RENDERBUFFER,wt)}}else{const vt=C.texture.mipmaps;if(vt&&vt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=o.createRenderbuffer(),ae(y.__webglDepthbuffer,C,!1);else{const At=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=y.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,wt),o.framebufferRenderbuffer(o.FRAMEBUFFER,At,o.RENDERBUFFER,wt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ae(C,y,J){const vt=r.get(C);y!==void 0&&Ht(vt.__webglFramebuffer,C,C.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),J!==void 0&&ce(C)}function se(C){const y=C.texture,J=r.get(C),vt=r.get(y);C.addEventListener("dispose",b);const At=C.textures,wt=C.isWebGLCubeRenderTarget===!0,Nt=At.length>1;if(Nt||(vt.__webglTexture===void 0&&(vt.__webglTexture=o.createTexture()),vt.__version=y.version,h.memory.textures++),wt){J.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(y.mipmaps&&y.mipmaps.length>0){J.__webglFramebuffer[ct]=[];for(let ft=0;ft<y.mipmaps.length;ft++)J.__webglFramebuffer[ct][ft]=o.createFramebuffer()}else J.__webglFramebuffer[ct]=o.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){J.__webglFramebuffer=[];for(let ct=0;ct<y.mipmaps.length;ct++)J.__webglFramebuffer[ct]=o.createFramebuffer()}else J.__webglFramebuffer=o.createFramebuffer();if(Nt)for(let ct=0,ft=At.length;ct<ft;ct++){const Ot=r.get(At[ct]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=o.createTexture(),h.memory.textures++)}if(C.samples>0&&re(C)===!1){J.__webglMultisampledFramebuffer=o.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ct=0;ct<At.length;ct++){const ft=At[ct];J.__webglColorRenderbuffer[ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,J.__webglColorRenderbuffer[ct]);const Ot=c.convert(ft.format,ft.colorSpace),Pt=c.convert(ft.type),Ut=N(ft.internalFormat,Ot,Pt,ft.normalized,ft.colorSpace,C.isXRRenderTarget===!0),Dt=ze(C);o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,Ut,C.width,C.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ct,o.RENDERBUFFER,J.__webglColorRenderbuffer[ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),C.depthBuffer&&(J.__webglDepthRenderbuffer=o.createRenderbuffer(),ae(J.__webglDepthRenderbuffer,C,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(wt){i.bindTexture(o.TEXTURE_CUBE_MAP,vt.__webglTexture),St(o.TEXTURE_CUBE_MAP,y);for(let ct=0;ct<6;ct++)if(y.mipmaps&&y.mipmaps.length>0)for(let ft=0;ft<y.mipmaps.length;ft++)Ht(J.__webglFramebuffer[ct][ft],C,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ft);else Ht(J.__webglFramebuffer[ct],C,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);S(y)&&w(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Nt){for(let ct=0,ft=At.length;ct<ft;ct++){const Ot=At[ct],Pt=r.get(Ot);let Ut=o.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Ut=C.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,Pt.__webglTexture),St(Ut,Ot),Ht(J.__webglFramebuffer,C,Ot,o.COLOR_ATTACHMENT0+ct,Ut,0),S(Ot)&&w(Ut)}i.unbindTexture()}else{let ct=o.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ct=C.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ct,vt.__webglTexture),St(ct,y),y.mipmaps&&y.mipmaps.length>0)for(let ft=0;ft<y.mipmaps.length;ft++)Ht(J.__webglFramebuffer[ft],C,y,o.COLOR_ATTACHMENT0,ct,ft);else Ht(J.__webglFramebuffer,C,y,o.COLOR_ATTACHMENT0,ct,0);S(y)&&w(ct),i.unbindTexture()}C.depthBuffer&&ce(C)}function ke(C){const y=C.textures;for(let J=0,vt=y.length;J<vt;J++){const At=y[J];if(S(At)){const wt=P(C),Nt=r.get(At).__webglTexture;i.bindTexture(wt,Nt),w(wt),i.unbindTexture()}}}const Re=[],Pe=[];function X(C){if(C.samples>0){if(re(C)===!1){const y=C.textures,J=C.width,vt=C.height;let At=o.COLOR_BUFFER_BIT;const wt=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Nt=r.get(C),ct=y.length>1;if(ct)for(let Ot=0;Ot<y.length;Ot++)i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);const ft=C.texture.mipmaps;ft&&ft.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Ot=0;Ot<y.length;Ot++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(At|=o.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(At|=o.STENCIL_BUFFER_BIT)),ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Nt.__webglColorRenderbuffer[Ot]);const Pt=r.get(y[Ot]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Pt,0)}o.blitFramebuffer(0,0,J,vt,0,0,J,vt,At,o.NEAREST),m===!0&&(Re.length=0,Pe.length=0,Re.push(o.COLOR_ATTACHMENT0+Ot),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Re.push(wt),Pe.push(wt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Pe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Re))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ct)for(let Ot=0;Ot<y.length;Ot++){i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.RENDERBUFFER,Nt.__webglColorRenderbuffer[Ot]);const Pt=r.get(y[Ot]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.TEXTURE_2D,Pt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&m){const y=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[y])}}}function ze(C){return Math.min(l.maxSamples,C.samples)}function re(C){const y=r.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ce(C){const y=h.render.frame;x.get(C)!==y&&(x.set(C,y),C.update())}function Rt(C,y){const J=C.colorSpace,vt=C.format,At=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||J!==tu&&J!==or&&(Ee.getTransfer(J)===Ve?(vt!==Di||At!==oi)&&ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Te("WebGLTextures: Unsupported texture color space:",J)),y}function Je(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(d.width=C.naturalWidth||C.width,d.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(d.width=C.displayWidth,d.height=C.displayHeight):(d.width=C.width,d.height=C.height),d}this.allocateTextureUnit=U,this.resetTextureUnits=ut,this.getTextureUnits=pt,this.setTextureUnits=q,this.setTexture2D=ot,this.setTexture2DArray=mt,this.setTexture3D=Et,this.setTextureCube=L,this.rebindTextures=Ae,this.setupRenderTarget=se,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=Ht,this.useMultisampledRTT=re,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function mA(o,t){function i(r,l=or){let c;const h=Ee.getTransfer(l);if(r===oi)return o.UNSIGNED_BYTE;if(r===rp)return o.UNSIGNED_SHORT_4_4_4_4;if(r===sp)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Sv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Mv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===vv)return o.BYTE;if(r===xv)return o.SHORT;if(r===nl)return o.UNSIGNED_SHORT;if(r===ap)return o.INT;if(r===Yi)return o.UNSIGNED_INT;if(r===Vi)return o.FLOAT;if(r===Ea)return o.HALF_FLOAT;if(r===yv)return o.ALPHA;if(r===Ev)return o.RGB;if(r===Di)return o.RGBA;if(r===ba)return o.DEPTH_COMPONENT;if(r===Br)return o.DEPTH_STENCIL;if(r===bv)return o.RED;if(r===op)return o.RED_INTEGER;if(r===Hr)return o.RG;if(r===lp)return o.RG_INTEGER;if(r===cp)return o.RGBA_INTEGER;if(r===Yc||r===qc||r===Zc||r===jc)if(h===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Yc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Yc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===qc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Zc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===jc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===_d||r===vd||r===xd||r===Sd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===_d)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===vd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===xd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Md||r===yd||r===Ed||r===bd||r===Td||r===Qc||r===Ad)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Md||r===yd)return h===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Ed)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===bd)return c.COMPRESSED_R11_EAC;if(r===Td)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Qc)return c.COMPRESSED_RG11_EAC;if(r===Ad)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Rd||r===Cd||r===wd||r===Dd||r===Ud||r===Ld||r===Nd||r===Od||r===Pd||r===zd||r===Id||r===Bd||r===Fd||r===Hd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Rd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Cd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Dd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ud)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ld)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Nd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Od)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Pd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===zd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Id)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Bd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Fd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Hd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Gd||r===Vd||r===kd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Gd)return h===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Vd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===kd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Xd||r===Wd||r===Jc||r===Yd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Xd)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Wd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Jc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Yd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===il?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const gA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_A=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new Pv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new qi({vertexShader:gA,fragmentShader:_A,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new On(new lu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xA extends Gr{constructor(t,i){super();const r=this;let l=null,c=1,h=null,p="local-floor",m=1,d=null,x=null,v=null,_=null,E=null,A=null;const D=typeof XRWebGLBinding<"u",M=new vA,S={},w=i.getContextAttributes();let P=null,N=null;const Y=[],O=[],B=new pe;let b=null;const z=new si;z.viewport=new sn;const K=new si;K.viewport=new sn;const H=[z,K],$=new wy;let ut=null,pt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let xt=Y[W];return xt===void 0&&(xt=new Uh,Y[W]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(W){let xt=Y[W];return xt===void 0&&(xt=new Uh,Y[W]=xt),xt.getGripSpace()},this.getHand=function(W){let xt=Y[W];return xt===void 0&&(xt=new Uh,Y[W]=xt),xt.getHandSpace()};function q(W){const xt=O.indexOf(W.inputSource);if(xt===-1)return;const yt=Y[xt];yt!==void 0&&(yt.update(W.inputSource,W.frame,d||h),yt.dispatchEvent({type:W.type,data:W.inputSource}))}function U(){l.removeEventListener("select",q),l.removeEventListener("selectstart",q),l.removeEventListener("selectend",q),l.removeEventListener("squeeze",q),l.removeEventListener("squeezestart",q),l.removeEventListener("squeezeend",q),l.removeEventListener("end",U),l.removeEventListener("inputsourceschange",I);for(let W=0;W<Y.length;W++){const xt=O[W];xt!==null&&(O[W]=null,Y[W].disconnect(xt))}ut=null,pt=null,M.reset();for(const W in S)delete S[W];t.setRenderTarget(P),E=null,_=null,v=null,l=null,N=null,St.stop(),r.isPresenting=!1,t.setPixelRatio(b),t.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){c=W,r.isPresenting===!0&&ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){p=W,r.isPresenting===!0&&ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(W){d=W},this.getBaseLayer=function(){return _!==null?_:E},this.getBinding=function(){return v===null&&D&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(W){if(l=W,l!==null){if(P=t.getRenderTarget(),l.addEventListener("select",q),l.addEventListener("selectstart",q),l.addEventListener("selectend",q),l.addEventListener("squeeze",q),l.addEventListener("squeezestart",q),l.addEventListener("squeezeend",q),l.addEventListener("end",U),l.addEventListener("inputsourceschange",I),w.xrCompatible!==!0&&await i.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(B),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Tt=null,Yt=null;w.depth&&(Yt=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,yt=w.stencil?Br:ba,Tt=w.stencil?il:Yi);const Ht={colorFormat:i.RGBA8,depthFormat:Yt,scaleFactor:c};v=this.getBinding(),_=v.createProjectionLayer(Ht),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),N=new Wi(_.textureWidth,_.textureHeight,{format:Di,type:oi,depthTexture:new Ws(_.textureWidth,_.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const yt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,yt),l.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),N=new Wi(E.framebufferWidth,E.framebufferHeight,{format:Di,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),d=null,h=await l.requestReferenceSpace(p),St.setContext(l),St.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function I(W){for(let xt=0;xt<W.removed.length;xt++){const yt=W.removed[xt],Tt=O.indexOf(yt);Tt>=0&&(O[Tt]=null,Y[Tt].disconnect(yt))}for(let xt=0;xt<W.added.length;xt++){const yt=W.added[xt];let Tt=O.indexOf(yt);if(Tt===-1){for(let Ht=0;Ht<Y.length;Ht++)if(Ht>=O.length){O.push(yt),Tt=Ht;break}else if(O[Ht]===null){O[Ht]=yt,Tt=Ht;break}if(Tt===-1)break}const Yt=Y[Tt];Yt&&Yt.connect(yt)}}const ot=new tt,mt=new tt;function Et(W,xt,yt){ot.setFromMatrixPosition(xt.matrixWorld),mt.setFromMatrixPosition(yt.matrixWorld);const Tt=ot.distanceTo(mt),Yt=xt.projectionMatrix.elements,Ht=yt.projectionMatrix.elements,ae=Yt[14]/(Yt[10]-1),Kt=Yt[14]/(Yt[10]+1),ce=(Yt[9]+1)/Yt[5],Ae=(Yt[9]-1)/Yt[5],se=(Yt[8]-1)/Yt[0],ke=(Ht[8]+1)/Ht[0],Re=ae*se,Pe=ae*ke,X=Tt/(-se+ke),ze=X*-se;if(xt.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ze),W.translateZ(X),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Yt[10]===-1)W.projectionMatrix.copy(xt.projectionMatrix),W.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{const re=ae+X,Ce=Kt+X,Rt=Re-ze,Je=Pe+(Tt-ze),C=ce*Kt/Ce*re,y=Ae*Kt/Ce*re;W.projectionMatrix.makePerspective(Rt,Je,C,y,re,Ce),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function L(W,xt){xt===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(xt.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(l===null)return;let xt=W.near,yt=W.far;M.texture!==null&&(M.depthNear>0&&(xt=M.depthNear),M.depthFar>0&&(yt=M.depthFar)),$.near=K.near=z.near=xt,$.far=K.far=z.far=yt,(ut!==$.near||pt!==$.far)&&(l.updateRenderState({depthNear:$.near,depthFar:$.far}),ut=$.near,pt=$.far),$.layers.mask=W.layers.mask|6,z.layers.mask=$.layers.mask&-5,K.layers.mask=$.layers.mask&-3;const Tt=W.parent,Yt=$.cameras;L($,Tt);for(let Ht=0;Ht<Yt.length;Ht++)L(Yt[Ht],Tt);Yt.length===2?Et($,z,K):$.projectionMatrix.copy(z.projectionMatrix),Q(W,$,Tt)};function Q(W,xt,yt){yt===null?W.matrix.copy(xt.matrixWorld):(W.matrix.copy(yt.matrixWorld),W.matrix.invert(),W.matrix.multiply(xt.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(xt.projectionMatrix),W.projectionMatrixInverse.copy(xt.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=jd*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(_===null&&E===null))return m},this.setFoveation=function(W){m=W,_!==null&&(_.fixedFoveation=W),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=W)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh($)},this.getCameraTexture=function(W){return S[W]};let G=null;function gt(W,xt){if(x=xt.getViewerPose(d||h),A=xt,x!==null){const yt=x.views;E!==null&&(t.setRenderTargetFramebuffer(N,E.framebuffer),t.setRenderTarget(N));let Tt=!1;yt.length!==$.cameras.length&&($.cameras.length=0,Tt=!0);for(let Kt=0;Kt<yt.length;Kt++){const ce=yt[Kt];let Ae=null;if(E!==null)Ae=E.getViewport(ce);else{const ke=v.getViewSubImage(_,ce);Ae=ke.viewport,Kt===0&&(t.setRenderTargetTextures(N,ke.colorTexture,ke.depthStencilTexture),t.setRenderTarget(N))}let se=H[Kt];se===void 0&&(se=new si,se.layers.enable(Kt),se.viewport=new sn,H[Kt]=se),se.matrix.fromArray(ce.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(ce.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),Kt===0&&($.matrix.copy(se.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Tt===!0&&$.cameras.push(se)}const Yt=l.enabledFeatures;if(Yt&&Yt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){v=r.getBinding();const Kt=v.getDepthInformation(yt[0]);Kt&&Kt.isValid&&Kt.texture&&M.init(Kt,l.renderState)}if(Yt&&Yt.includes("camera-access")&&D){t.state.unbindTexture(),v=r.getBinding();for(let Kt=0;Kt<yt.length;Kt++){const ce=yt[Kt].camera;if(ce){let Ae=S[ce];Ae||(Ae=new Pv,S[ce]=Ae);const se=v.getCameraImage(ce);Ae.sourceTexture=se}}}}for(let yt=0;yt<Y.length;yt++){const Tt=O[yt],Yt=Y[yt];Tt!==null&&Yt!==void 0&&Yt.update(Tt,xt,d||h)}G&&G(W,xt),xt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:xt}),A=null}const St=new Hv;St.setAnimationLoop(gt),this.setAnimationLoop=function(W){G=W},this.dispose=function(){}}}const SA=new on,qv=new le;qv.set(-1,0,0,0,1,0,0,0,1);function MA(o,t){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function r(M,S){S.color.getRGB(M.fogColor.value,zv(o)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,w,P,N){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(M,S):S.isMeshLambertMaterial?(c(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(M,S),v(M,S)):S.isMeshPhongMaterial?(c(M,S),x(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(M,S),_(M,S),S.isMeshPhysicalMaterial&&E(M,S,N)):S.isMeshMatcapMaterial?(c(M,S),A(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),D(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(h(M,S),S.isLineDashedMaterial&&p(M,S)):S.isPointsMaterial?m(M,S,w,P):S.isSpriteMaterial?d(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===qn&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===qn&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const w=t.get(S),P=w.envMap,N=w.envMapRotation;P&&(M.envMap.value=P,M.envMapRotation.value.setFromMatrix4(SA.makeRotationFromEuler(N)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(qv),M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function p(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,w,P){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*w,M.scale.value=P*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function d(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function x(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function v(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function _(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function E(M,S,w){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===qn&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=w.texture,M.transmissionSamplerSize.value.set(w.width,w.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,S){S.matcap&&(M.matcap.value=S.matcap)}function D(M,S){const w=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(w.matrixWorld),M.nearDistance.value=w.shadow.camera.near,M.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function yA(o,t,i,r){let l={},c={},h=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,P){const N=P.program;r.uniformBlockBinding(w,N)}function d(w,P){let N=l[w.id];N===void 0&&(A(w),N=x(w),l[w.id]=N,w.addEventListener("dispose",M));const Y=P.program;r.updateUBOMapping(w,Y);const O=t.render.frame;c[w.id]!==O&&(_(w),c[w.id]=O)}function x(w){const P=v();w.__bindingPointIndex=P;const N=o.createBuffer(),Y=w.__size,O=w.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,Y,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,N),N}function v(){for(let w=0;w<p;w++)if(h.indexOf(w)===-1)return h.push(w),w;return Te("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(w){const P=l[w.id],N=w.uniforms,Y=w.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let O=0,B=N.length;O<B;O++){const b=Array.isArray(N[O])?N[O]:[N[O]];for(let z=0,K=b.length;z<K;z++){const H=b[z];if(E(H,O,z,Y)===!0){const $=H.__offset,ut=Array.isArray(H.value)?H.value:[H.value];let pt=0;for(let q=0;q<ut.length;q++){const U=ut[q],I=D(U);typeof U=="number"||typeof U=="boolean"?(H.__data[0]=U,o.bufferSubData(o.UNIFORM_BUFFER,$+pt,H.__data)):U.isMatrix3?(H.__data[0]=U.elements[0],H.__data[1]=U.elements[1],H.__data[2]=U.elements[2],H.__data[3]=0,H.__data[4]=U.elements[3],H.__data[5]=U.elements[4],H.__data[6]=U.elements[5],H.__data[7]=0,H.__data[8]=U.elements[6],H.__data[9]=U.elements[7],H.__data[10]=U.elements[8],H.__data[11]=0):ArrayBuffer.isView(U)?H.__data.set(new U.constructor(U.buffer,U.byteOffset,H.__data.length)):(U.toArray(H.__data,pt),pt+=I.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,$,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(w,P,N,Y){const O=w.value,B=P+"_"+N;if(Y[B]===void 0)return typeof O=="number"||typeof O=="boolean"?Y[B]=O:ArrayBuffer.isView(O)?Y[B]=O.slice():Y[B]=O.clone(),!0;{const b=Y[B];if(typeof O=="number"||typeof O=="boolean"){if(b!==O)return Y[B]=O,!0}else{if(ArrayBuffer.isView(O))return!0;if(b.equals(O)===!1)return b.copy(O),!0}}return!1}function A(w){const P=w.uniforms;let N=0;const Y=16;for(let B=0,b=P.length;B<b;B++){const z=Array.isArray(P[B])?P[B]:[P[B]];for(let K=0,H=z.length;K<H;K++){const $=z[K],ut=Array.isArray($.value)?$.value:[$.value];for(let pt=0,q=ut.length;pt<q;pt++){const U=ut[pt],I=D(U),ot=N%Y,mt=ot%I.boundary,Et=ot+mt;N+=mt,Et!==0&&Y-Et<I.storage&&(N+=Y-Et),$.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=N,N+=I.storage}}}const O=N%Y;return O>0&&(N+=Y-O),w.__size=N,w.__cache={},this}function D(w){const P={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(P.boundary=4,P.storage=4):w.isVector2?(P.boundary=8,P.storage=8):w.isVector3||w.isColor?(P.boundary=16,P.storage=12):w.isVector4?(P.boundary=16,P.storage=16):w.isMatrix3?(P.boundary=48,P.storage=48):w.isMatrix4?(P.boundary=64,P.storage=64):w.isTexture?ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(P.boundary=16,P.storage=w.byteLength):ee("WebGLRenderer: Unsupported uniform value type.",w),P}function M(w){const P=w.target;P.removeEventListener("dispose",M);const N=h.indexOf(P.__bindingPointIndex);h.splice(N,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function S(){for(const w in l)o.deleteBuffer(l[w]);h=[],l={},c={}}return{bind:m,update:d,dispose:S}}const EA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function bA(){return Bi===null&&(Bi=new fy(EA,16,16,Hr,Ea),Bi.name="DFG_LUT",Bi.minFilter=Pn,Bi.magFilter=Pn,Bi.wrapS=xa,Bi.wrapT=xa,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class TA{constructor(t={}){const{canvas:i=FM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:E=oi}=t;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=h;const D=E,M=new Set([cp,lp,op]),S=new Set([oi,Yi,nl,il,rp,sp]),w=new Uint32Array(4),P=new Int32Array(4),N=new tt;let Y=null,O=null;const B=[],b=[];let z=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const K=this;let H=!1,$=null;this._outputColorSpace=xi;let ut=0,pt=0,q=null,U=-1,I=null;const ot=new sn,mt=new sn;let Et=null;const L=new Me(0);let Q=0,G=i.width,gt=i.height,St=1,W=null,xt=null;const yt=new sn(0,0,G,gt),Tt=new sn(0,0,G,gt);let Yt=!1;const Ht=new mp;let ae=!1,Kt=!1;const ce=new on,Ae=new tt,se=new sn,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function Pe(){return q===null?St:1}let X=r;function ze(T,Z){return i.getContext(T,Z)}try{const T={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${np}`),i.addEventListener("webglcontextlost",bt,!1),i.addEventListener("webglcontextrestored",qt,!1),i.addEventListener("webglcontextcreationerror",te,!1),X===null){const Z="webgl2";if(X=ze(Z,T),X===null)throw ze(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw Te("WebGLRenderer: "+T.message),T}let re,Ce,Rt,Je,C,y,J,vt,At,wt,Nt,ct,ft,Ot,Pt,Ut,Dt,ne,ie,me,V,Ct,dt;function Bt(){re=new bT(X),re.init(),V=new mA(X,re),Ce=new gT(X,re,t,V),Rt=new dA(X,re),Ce.reversedDepthBuffer&&_&&Rt.buffers.depth.setReversed(!0),Je=new RT(X),C=new $1,y=new pA(X,re,Rt,C,Ce,V,Je),J=new ET(K),vt=new Uy(X),Ct=new pT(X,vt),At=new TT(X,vt,Je,Ct),wt=new wT(X,At,vt,Ct,Je),ne=new CT(X,Ce,y),Pt=new _T(C),Nt=new J1(K,J,re,Ce,Ct,Pt),ct=new MA(K,C),ft=new eA,Ot=new oA(re),Dt=new dT(K,J,Rt,wt,A,m),Ut=new hA(K,wt,Ce),dt=new yA(X,Je,Ce,Rt),ie=new mT(X,re,Je),me=new AT(X,re,Je),Je.programs=Nt.programs,K.capabilities=Ce,K.extensions=re,K.properties=C,K.renderLists=ft,K.shadowMap=Ut,K.state=Rt,K.info=Je}Bt(),D!==oi&&(z=new UT(D,i.width,i.height,l,c));const Lt=new xA(K,X);this.xr=Lt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const T=re.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=re.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return St},this.setPixelRatio=function(T){T!==void 0&&(St=T,this.setSize(G,gt,!1))},this.getSize=function(T){return T.set(G,gt)},this.setSize=function(T,Z,rt=!0){if(Lt.isPresenting){ee("WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,gt=Z,i.width=Math.floor(T*St),i.height=Math.floor(Z*St),rt===!0&&(i.style.width=T+"px",i.style.height=Z+"px"),z!==null&&z.setSize(i.width,i.height),this.setViewport(0,0,T,Z)},this.getDrawingBufferSize=function(T){return T.set(G*St,gt*St).floor()},this.setDrawingBufferSize=function(T,Z,rt){G=T,gt=Z,St=rt,i.width=Math.floor(T*rt),i.height=Math.floor(Z*rt),this.setViewport(0,0,T,Z)},this.setEffects=function(T){if(D===oi){Te("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let Z=0;Z<T.length;Z++)if(T[Z].isOutputPass===!0){ee("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(ot)},this.getViewport=function(T){return T.copy(yt)},this.setViewport=function(T,Z,rt,it){T.isVector4?yt.set(T.x,T.y,T.z,T.w):yt.set(T,Z,rt,it),Rt.viewport(ot.copy(yt).multiplyScalar(St).round())},this.getScissor=function(T){return T.copy(Tt)},this.setScissor=function(T,Z,rt,it){T.isVector4?Tt.set(T.x,T.y,T.z,T.w):Tt.set(T,Z,rt,it),Rt.scissor(mt.copy(Tt).multiplyScalar(St).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(T){Rt.setScissorTest(Yt=T)},this.setOpaqueSort=function(T){W=T},this.setTransparentSort=function(T){xt=T},this.getClearColor=function(T){return T.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(T=!0,Z=!0,rt=!0){let it=0;if(T){let at=!1;if(q!==null){const It=q.texture.format;at=M.has(It)}if(at){const It=q.texture.type,Vt=S.has(It),zt=Dt.getClearColor(),Xt=Dt.getClearAlpha(),kt=zt.r,Qt=zt.g,ue=zt.b;Vt?(w[0]=kt,w[1]=Qt,w[2]=ue,w[3]=Xt,X.clearBufferuiv(X.COLOR,0,w)):(P[0]=kt,P[1]=Qt,P[2]=ue,P[3]=Xt,X.clearBufferiv(X.COLOR,0,P))}else it|=X.COLOR_BUFFER_BIT}Z&&(it|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(it|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&X.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),$=T},this.dispose=function(){i.removeEventListener("webglcontextlost",bt,!1),i.removeEventListener("webglcontextrestored",qt,!1),i.removeEventListener("webglcontextcreationerror",te,!1),Dt.dispose(),ft.dispose(),Ot.dispose(),C.dispose(),J.dispose(),wt.dispose(),Ct.dispose(),dt.dispose(),Nt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",Ks),Lt.removeEventListener("sessionend",Qs),wn.stop()};function bt(T){T.preventDefault(),iu("WebGLRenderer: Context Lost."),H=!0}function qt(){iu("WebGLRenderer: Context Restored."),H=!1;const T=Je.autoReset,Z=Ut.enabled,rt=Ut.autoUpdate,it=Ut.needsUpdate,at=Ut.type;Bt(),Je.autoReset=T,Ut.enabled=Z,Ut.autoUpdate=rt,Ut.needsUpdate=it,Ut.type=at}function te(T){Te("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function nn(T){const Z=T.target;Z.removeEventListener("dispose",nn),Le(Z)}function Le(T){li(T),C.remove(T)}function li(T){const Z=C.get(T).programs;Z!==void 0&&(Z.forEach(function(rt){Nt.releaseProgram(rt)}),T.isShaderMaterial&&Nt.releaseShaderCache(T))}this.renderBufferDirect=function(T,Z,rt,it,at,It){Z===null&&(Z=ke);const Vt=at.isMesh&&at.matrixWorld.determinant()<0,zt=Ca(T,Z,rt,it,at);Rt.setMaterial(it,Vt);let Xt=rt.index,kt=1;if(it.wireframe===!0){if(Xt=At.getWireframeAttribute(rt),Xt===void 0)return;kt=2}const Qt=rt.drawRange,ue=rt.attributes.position;let jt=Qt.start*kt,we=(Qt.start+Qt.count)*kt;It!==null&&(jt=Math.max(jt,It.start*kt),we=Math.min(we,(It.start+It.count)*kt)),Xt!==null?(jt=Math.max(jt,0),we=Math.min(we,Xt.count)):ue!=null&&(jt=Math.max(jt,0),we=Math.min(we,ue.count));const $e=we-jt;if($e<0||$e===1/0)return;Ct.setup(at,it,zt,rt,Xt);let Ze,Ie=ie;if(Xt!==null&&(Ze=vt.get(Xt),Ie=me,Ie.setIndex(Ze)),at.isMesh)it.wireframe===!0?(Rt.setLineWidth(it.wireframeLinewidth*Pe()),Ie.setMode(X.LINES)):Ie.setMode(X.TRIANGLES);else if(at.isLine){let Be=it.linewidth;Be===void 0&&(Be=1),Rt.setLineWidth(Be*Pe()),at.isLineSegments?Ie.setMode(X.LINES):at.isLineLoop?Ie.setMode(X.LINE_LOOP):Ie.setMode(X.LINE_STRIP)}else at.isPoints?Ie.setMode(X.POINTS):at.isSprite&&Ie.setMode(X.TRIANGLES);if(at.isBatchedMesh)if(re.get("WEBGL_multi_draw"))Ie.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{const Be=at._multiDrawStarts,Gt=at._multiDrawCounts,Dn=at._multiDrawCount,ge=Xt?vt.get(Xt).bytesPerElement:1,_n=C.get(it).currentProgram.getUniforms();for(let jn=0;jn<Dn;jn++)_n.setValue(X,"_gl_DrawID",jn),Ie.render(Be[jn]/ge,Gt[jn])}else if(at.isInstancedMesh)Ie.renderInstances(jt,$e,at.count);else if(rt.isInstancedBufferGeometry){const Be=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Gt=Math.min(rt.instanceCount,Be);Ie.renderInstances(jt,$e,Gt)}else Ie.render(jt,$e)};function Zn(T,Z,rt){T.transparent===!0&&T.side===Hi&&T.forceSinglePass===!1?(T.side=qn,T.needsUpdate=!0,kr(T,Z,rt),T.side=ur,T.needsUpdate=!0,kr(T,Z,rt),T.side=Hi):kr(T,Z,rt)}this.compile=function(T,Z,rt=null){rt===null&&(rt=T),O=Ot.get(rt),O.init(Z),b.push(O),rt.traverseVisible(function(at){at.isLight&&at.layers.test(Z.layers)&&(O.pushLight(at),at.castShadow&&O.pushShadow(at))}),T!==rt&&T.traverseVisible(function(at){at.isLight&&at.layers.test(Z.layers)&&(O.pushLight(at),at.castShadow&&O.pushShadow(at))}),O.setupLights();const it=new Set;return T.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;const It=at.material;if(It)if(Array.isArray(It))for(let Vt=0;Vt<It.length;Vt++){const zt=It[Vt];Zn(zt,rt,at),it.add(zt)}else Zn(It,rt,at),it.add(It)}),O=b.pop(),it},this.compileAsync=function(T,Z,rt=null){const it=this.compile(T,Z,rt);return new Promise(at=>{function It(){if(it.forEach(function(Vt){C.get(Vt).currentProgram.isReady()&&it.delete(Vt)}),it.size===0){at(T);return}setTimeout(It,10)}re.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let fr=null;function js(T){fr&&fr(T)}function Ks(){wn.stop()}function Qs(){wn.start()}const wn=new Hv;wn.setAnimationLoop(js),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(T){fr=T,Lt.setAnimationLoop(T),T===null?wn.stop():wn.start()},Lt.addEventListener("sessionstart",Ks),Lt.addEventListener("sessionend",Qs),this.render=function(T,Z){if(Z!==void 0&&Z.isCamera!==!0){Te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;$!==null&&$.renderStart(T,Z);const rt=Lt.enabled===!0&&Lt.isPresenting===!0,it=z!==null&&(q===null||rt)&&z.begin(K,q);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(Z),Z=Lt.getCamera()),T.isScene===!0&&T.onBeforeRender(K,T,Z,q),O=Ot.get(T,b.length),O.init(Z),O.state.textureUnits=y.getTextureUnits(),b.push(O),ce.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Ht.setFromProjectionMatrix(ce,ki,Z.reversedDepth),Kt=this.localClippingEnabled,ae=Pt.init(this.clippingPlanes,Kt),Y=ft.get(T,B.length),Y.init(),B.push(Y),Lt.enabled===!0&&Lt.isPresenting===!0){const Vt=K.xr.getDepthSensingMesh();Vt!==null&&ln(Vt,Z,-1/0,K.sortObjects)}ln(T,Z,0,K.sortObjects),Y.finish(),K.sortObjects===!0&&Y.sort(W,xt),Re=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,Re&&Dt.addToRenderList(Y,T),this.info.render.frame++,ae===!0&&Pt.beginShadows();const at=O.state.shadowsArray;if(Ut.render(at,T,Z),ae===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(it&&z.hasRenderPass())===!1){const Vt=Y.opaque,zt=Y.transmissive;if(O.setupLights(),Z.isArrayCamera){const Xt=Z.cameras;if(zt.length>0)for(let kt=0,Qt=Xt.length;kt<Qt;kt++){const ue=Xt[kt];ji(Vt,zt,T,ue)}Re&&Dt.render(T);for(let kt=0,Qt=Xt.length;kt<Qt;kt++){const ue=Xt[kt];En(Y,T,ue,ue.viewport)}}else zt.length>0&&ji(Vt,zt,T,Z),Re&&Dt.render(T),En(Y,T,Z)}q!==null&&pt===0&&(y.updateMultisampleRenderTarget(q),y.updateRenderTargetMipmap(q)),it&&z.end(K),T.isScene===!0&&T.onAfterRender(K,T,Z),Ct.resetDefaultState(),U=-1,I=null,b.pop(),b.length>0?(O=b[b.length-1],y.setTextureUnits(O.state.textureUnits),ae===!0&&Pt.setGlobalState(K.clippingPlanes,O.state.camera)):O=null,B.pop(),B.length>0?Y=B[B.length-1]:Y=null,$!==null&&$.renderEnd()};function ln(T,Z,rt,it){if(T.visible===!1)return;if(T.layers.test(Z.layers)){if(T.isGroup)rt=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(Z);else if(T.isLightProbeGrid)O.pushLightProbeGrid(T);else if(T.isLight)O.pushLight(T),T.castShadow&&O.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ht.intersectsSprite(T)){it&&se.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ce);const Vt=wt.update(T),zt=T.material;zt.visible&&Y.push(T,Vt,zt,rt,se.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ht.intersectsObject(T))){const Vt=wt.update(T),zt=T.material;if(it&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),se.copy(T.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),se.copy(Vt.boundingSphere.center)),se.applyMatrix4(T.matrixWorld).applyMatrix4(ce)),Array.isArray(zt)){const Xt=Vt.groups;for(let kt=0,Qt=Xt.length;kt<Qt;kt++){const ue=Xt[kt],jt=zt[ue.materialIndex];jt&&jt.visible&&Y.push(T,Vt,jt,rt,se.z,ue)}}else zt.visible&&Y.push(T,Vt,zt,rt,se.z,null)}}const It=T.children;for(let Vt=0,zt=It.length;Vt<zt;Vt++)ln(It[Vt],Z,rt,it)}function En(T,Z,rt,it){const{opaque:at,transmissive:It,transparent:Vt}=T;O.setupLightsView(rt),ae===!0&&Pt.setGlobalState(K.clippingPlanes,rt),it&&Rt.viewport(ot.copy(it)),at.length>0&&Aa(at,Z,rt),It.length>0&&Aa(It,Z,rt),Vt.length>0&&Aa(Vt,Z,rt),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function ji(T,Z,rt,it){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[it.id]===void 0){const jt=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[it.id]=new Wi(1,1,{generateMipmaps:!0,type:jt?Ea:oi,minFilter:Ir,samples:Math.max(4,Ce.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ee.workingColorSpace})}const It=O.state.transmissionRenderTarget[it.id],Vt=it.viewport||ot;It.setSize(Vt.z*K.transmissionResolutionScale,Vt.w*K.transmissionResolutionScale);const zt=K.getRenderTarget(),Xt=K.getActiveCubeFace(),kt=K.getActiveMipmapLevel();K.setRenderTarget(It),K.getClearColor(L),Q=K.getClearAlpha(),Q<1&&K.setClearColor(16777215,.5),K.clear(),Re&&Dt.render(rt);const Qt=K.toneMapping;K.toneMapping=Xi;const ue=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),O.setupLightsView(it),ae===!0&&Pt.setGlobalState(K.clippingPlanes,it),Aa(T,rt,it),y.updateMultisampleRenderTarget(It),y.updateRenderTargetMipmap(It),re.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let we=0,$e=Z.length;we<$e;we++){const Ze=Z[we],{object:Ie,geometry:Be,material:Gt,group:Dn}=Ze;if(Gt.side===Hi&&Ie.layers.test(it.layers)){const ge=Gt.side;Gt.side=qn,Gt.needsUpdate=!0,sl(Ie,rt,it,Be,Gt,Dn),Gt.side=ge,Gt.needsUpdate=!0,jt=!0}}jt===!0&&(y.updateMultisampleRenderTarget(It),y.updateRenderTargetMipmap(It))}K.setRenderTarget(zt,Xt,kt),K.setClearColor(L,Q),ue!==void 0&&(it.viewport=ue),K.toneMapping=Qt}function Aa(T,Z,rt){const it=Z.isScene===!0?Z.overrideMaterial:null;for(let at=0,It=T.length;at<It;at++){const Vt=T[at],{object:zt,geometry:Xt,group:kt}=Vt;let Qt=Vt.material;Qt.allowOverride===!0&&it!==null&&(Qt=it),zt.layers.test(rt.layers)&&sl(zt,Z,rt,Xt,Qt,kt)}}function sl(T,Z,rt,it,at,It){T.onBeforeRender(K,Z,rt,it,at,It),T.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),at.onBeforeRender(K,Z,rt,it,T,It),at.transparent===!0&&at.side===Hi&&at.forceSinglePass===!1?(at.side=qn,at.needsUpdate=!0,K.renderBufferDirect(rt,Z,it,at,T,It),at.side=ur,at.needsUpdate=!0,K.renderBufferDirect(rt,Z,it,at,T,It),at.side=Hi):K.renderBufferDirect(rt,Z,it,at,T,It),T.onAfterRender(K,Z,rt,it,at,It)}function kr(T,Z,rt){Z.isScene!==!0&&(Z=ke);const it=C.get(T),at=O.state.lights,It=O.state.shadowsArray,Vt=at.state.version,zt=Nt.getParameters(T,at.state,It,Z,rt,O.state.lightProbeGridArray),Xt=Nt.getProgramCacheKey(zt);let kt=it.programs;it.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?Z.environment:null,it.fog=Z.fog;const Qt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;it.envMap=J.get(T.envMap||it.environment,Qt),it.envMapRotation=it.environment!==null&&T.envMap===null?Z.environmentRotation:T.envMapRotation,kt===void 0&&(T.addEventListener("dispose",nn),kt=new Map,it.programs=kt);let ue=kt.get(Xt);if(ue!==void 0){if(it.currentProgram===ue&&it.lightsStateVersion===Vt)return Ra(T,zt),ue}else zt.uniforms=Nt.getUniforms(T),$!==null&&T.isNodeMaterial&&$.build(T,rt,zt),T.onBeforeCompile(zt,K),ue=Nt.acquireProgram(zt,Xt),kt.set(Xt,ue),it.uniforms=zt.uniforms;const jt=it.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(jt.clippingPlanes=Pt.uniform),Ra(T,zt),it.needsLights=hr(T),it.lightsStateVersion=Vt,it.needsLights&&(jt.ambientLightColor.value=at.state.ambient,jt.lightProbe.value=at.state.probe,jt.directionalLights.value=at.state.directional,jt.directionalLightShadows.value=at.state.directionalShadow,jt.spotLights.value=at.state.spot,jt.spotLightShadows.value=at.state.spotShadow,jt.rectAreaLights.value=at.state.rectArea,jt.ltc_1.value=at.state.rectAreaLTC1,jt.ltc_2.value=at.state.rectAreaLTC2,jt.pointLights.value=at.state.point,jt.pointLightShadows.value=at.state.pointShadow,jt.hemisphereLights.value=at.state.hemi,jt.directionalShadowMatrix.value=at.state.directionalShadowMatrix,jt.spotLightMatrix.value=at.state.spotLightMatrix,jt.spotLightMap.value=at.state.spotLightMap,jt.pointShadowMatrix.value=at.state.pointShadowMatrix),it.lightProbeGrid=O.state.lightProbeGridArray.length>0,it.currentProgram=ue,it.uniformsList=null,ue}function Js(T){if(T.uniformsList===null){const Z=T.currentProgram.getUniforms();T.uniformsList=Kc.seqWithValue(Z.seq,T.uniforms)}return T.uniformsList}function Ra(T,Z){const rt=C.get(T);rt.outputColorSpace=Z.outputColorSpace,rt.batching=Z.batching,rt.batchingColor=Z.batchingColor,rt.instancing=Z.instancing,rt.instancingColor=Z.instancingColor,rt.instancingMorph=Z.instancingMorph,rt.skinning=Z.skinning,rt.morphTargets=Z.morphTargets,rt.morphNormals=Z.morphNormals,rt.morphColors=Z.morphColors,rt.morphTargetsCount=Z.morphTargetsCount,rt.numClippingPlanes=Z.numClippingPlanes,rt.numIntersection=Z.numClipIntersection,rt.vertexAlphas=Z.vertexAlphas,rt.vertexTangents=Z.vertexTangents,rt.toneMapping=Z.toneMapping}function $s(T,Z){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;N.setFromMatrixPosition(Z.matrixWorld);for(let rt=0,it=T.length;rt<it;rt++){const at=T[rt];if(at.texture!==null&&at.boundingBox.containsPoint(N))return at}return null}function Ca(T,Z,rt,it,at){Z.isScene!==!0&&(Z=ke),y.resetTextureUnits();const It=Z.fog,Vt=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?Z.environment:null,zt=q===null?K.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Ee.workingColorSpace,Xt=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,kt=J.get(it.envMap||Vt,Xt),Qt=it.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ue=!!rt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),jt=!!rt.morphAttributes.position,we=!!rt.morphAttributes.normal,$e=!!rt.morphAttributes.color;let Ze=Xi;it.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ze=K.toneMapping);const Ie=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Be=Ie!==void 0?Ie.length:0,Gt=C.get(it),Dn=O.state.lights;if(ae===!0&&(Kt===!0||T!==I)){const Oe=T===I&&it.id===U;Pt.setState(it,T,Oe)}let ge=!1;it.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Dn.state.version||Gt.outputColorSpace!==zt||at.isBatchedMesh&&Gt.batching===!1||!at.isBatchedMesh&&Gt.batching===!0||at.isBatchedMesh&&Gt.batchingColor===!0&&at.colorTexture===null||at.isBatchedMesh&&Gt.batchingColor===!1&&at.colorTexture!==null||at.isInstancedMesh&&Gt.instancing===!1||!at.isInstancedMesh&&Gt.instancing===!0||at.isSkinnedMesh&&Gt.skinning===!1||!at.isSkinnedMesh&&Gt.skinning===!0||at.isInstancedMesh&&Gt.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&Gt.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&Gt.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&Gt.instancingMorph===!1&&at.morphTexture!==null||Gt.envMap!==kt||it.fog===!0&&Gt.fog!==It||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==Pt.numPlanes||Gt.numIntersection!==Pt.numIntersection)||Gt.vertexAlphas!==Qt||Gt.vertexTangents!==ue||Gt.morphTargets!==jt||Gt.morphNormals!==we||Gt.morphColors!==$e||Gt.toneMapping!==Ze||Gt.morphTargetsCount!==Be||!!Gt.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(ge=!0):(ge=!0,Gt.__version=it.version);let _n=Gt.currentProgram;ge===!0&&(_n=kr(it,Z,at),$&&it.isNodeMaterial&&$.onUpdateProgram(it,_n,Gt));let jn=!1,yi=!1,Kn=!1;const Fe=_n.getUniforms(),tn=Gt.uniforms;if(Rt.useProgram(_n.program)&&(jn=!0,yi=!0,Kn=!0),it.id!==U&&(U=it.id,yi=!0),Gt.needsLights){const Oe=$s(O.state.lightProbeGridArray,at);Gt.lightProbeGrid!==Oe&&(Gt.lightProbeGrid=Oe,yi=!0)}if(jn||I!==T){Rt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Fe.setValue(X,"projectionMatrix",T.projectionMatrix),Fe.setValue(X,"viewMatrix",T.matrixWorldInverse);const Li=Fe.map.cameraPosition;Li!==void 0&&Li.setValue(X,Ae.setFromMatrixPosition(T.matrixWorld)),Ce.logarithmicDepthBuffer&&Fe.setValue(X,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Fe.setValue(X,"isOrthographic",T.isOrthographicCamera===!0),I!==T&&(I=T,yi=!0,Kn=!0)}if(Gt.needsLights&&(Dn.state.directionalShadowMap.length>0&&Fe.setValue(X,"directionalShadowMap",Dn.state.directionalShadowMap,y),Dn.state.spotShadowMap.length>0&&Fe.setValue(X,"spotShadowMap",Dn.state.spotShadowMap,y),Dn.state.pointShadowMap.length>0&&Fe.setValue(X,"pointShadowMap",Dn.state.pointShadowMap,y)),at.isSkinnedMesh){Fe.setOptional(X,at,"bindMatrix"),Fe.setOptional(X,at,"bindMatrixInverse");const Oe=at.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),Fe.setValue(X,"boneTexture",Oe.boneTexture,y))}at.isBatchedMesh&&(Fe.setOptional(X,at,"batchingTexture"),Fe.setValue(X,"batchingTexture",at._matricesTexture,y),Fe.setOptional(X,at,"batchingIdTexture"),Fe.setValue(X,"batchingIdTexture",at._indirectTexture,y),Fe.setOptional(X,at,"batchingColorTexture"),at._colorsTexture!==null&&Fe.setValue(X,"batchingColorTexture",at._colorsTexture,y));const Ei=rt.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&ne.update(at,rt,_n),(yi||Gt.receiveShadow!==at.receiveShadow)&&(Gt.receiveShadow=at.receiveShadow,Fe.setValue(X,"receiveShadow",at.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&Z.environment!==null&&(tn.envMapIntensity.value=Z.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=bA()),yi){if(Fe.setValue(X,"toneMappingExposure",K.toneMappingExposure),Gt.needsLights&&wa(tn,Kn),It&&it.fog===!0&&ct.refreshFogUniforms(tn,It),ct.refreshMaterialUniforms(tn,it,St,gt,O.state.transmissionRenderTarget[T.id]),Gt.needsLights&&Gt.lightProbeGrid){const Oe=Gt.lightProbeGrid;tn.probesSH.value=Oe.texture,tn.probesMin.value.copy(Oe.boundingBox.min),tn.probesMax.value.copy(Oe.boundingBox.max),tn.probesResolution.value.copy(Oe.resolution)}Kc.upload(X,Js(Gt),tn,y)}if(it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Kc.upload(X,Js(Gt),tn,y),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Fe.setValue(X,"center",at.center),Fe.setValue(X,"modelViewMatrix",at.modelViewMatrix),Fe.setValue(X,"normalMatrix",at.normalMatrix),Fe.setValue(X,"modelMatrix",at.matrixWorld),it.uniformsGroups!==void 0){const Oe=it.uniformsGroups;for(let Li=0,Ua=Oe.length;Li<Ua;Li++){const dr=Oe[Li];dt.update(dr,_n),dt.bind(dr,_n)}}return _n}function wa(T,Z){T.ambientLightColor.needsUpdate=Z,T.lightProbe.needsUpdate=Z,T.directionalLights.needsUpdate=Z,T.directionalLightShadows.needsUpdate=Z,T.pointLights.needsUpdate=Z,T.pointLightShadows.needsUpdate=Z,T.spotLights.needsUpdate=Z,T.spotLightShadows.needsUpdate=Z,T.rectAreaLights.needsUpdate=Z,T.hemisphereLights.needsUpdate=Z}function hr(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return ut},this.getActiveMipmapLevel=function(){return pt},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(T,Z,rt){const it=C.get(T);it.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),C.get(T.texture).__webglTexture=Z,C.get(T.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:rt,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,Z){const rt=C.get(T);rt.__webglFramebuffer=Z,rt.__useDefaultFramebuffer=Z===void 0};const Da=X.createFramebuffer();this.setRenderTarget=function(T,Z=0,rt=0){q=T,ut=Z,pt=rt;let it=null,at=!1,It=!1;if(T){const zt=C.get(T);if(zt.__useDefaultFramebuffer!==void 0){Rt.bindFramebuffer(X.FRAMEBUFFER,zt.__webglFramebuffer),ot.copy(T.viewport),mt.copy(T.scissor),Et=T.scissorTest,Rt.viewport(ot),Rt.scissor(mt),Rt.setScissorTest(Et),U=-1;return}else if(zt.__webglFramebuffer===void 0)y.setupRenderTarget(T);else if(zt.__hasExternalTextures)y.rebindTextures(T,C.get(T.texture).__webglTexture,C.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Qt=T.depthTexture;if(zt.__boundDepthTexture!==Qt){if(Qt!==null&&C.has(Qt)&&(T.width!==Qt.image.width||T.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(T)}}const Xt=T.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(It=!0);const kt=C.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(kt[Z])?it=kt[Z][rt]:it=kt[Z],at=!0):T.samples>0&&y.useMultisampledRTT(T)===!1?it=C.get(T).__webglMultisampledFramebuffer:Array.isArray(kt)?it=kt[rt]:it=kt,ot.copy(T.viewport),mt.copy(T.scissor),Et=T.scissorTest}else ot.copy(yt).multiplyScalar(St).floor(),mt.copy(Tt).multiplyScalar(St).floor(),Et=Yt;if(rt!==0&&(it=Da),Rt.bindFramebuffer(X.FRAMEBUFFER,it)&&Rt.drawBuffers(T,it),Rt.viewport(ot),Rt.scissor(mt),Rt.setScissorTest(Et),at){const zt=C.get(T.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Z,zt.__webglTexture,rt)}else if(It){const zt=Z;for(let Xt=0;Xt<T.textures.length;Xt++){const kt=C.get(T.textures[Xt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Xt,kt.__webglTexture,rt,zt)}}else if(T!==null&&rt!==0){const zt=C.get(T.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,zt.__webglTexture,rt)}U=-1},this.readRenderTargetPixels=function(T,Z,rt,it,at,It,Vt,zt=0){if(!(T&&T.isWebGLRenderTarget)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=C.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Vt!==void 0&&(Xt=Xt[Vt]),Xt){Rt.bindFramebuffer(X.FRAMEBUFFER,Xt);try{const kt=T.textures[zt],Qt=kt.format,ue=kt.type;if(T.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+zt),!Ce.textureFormatReadable(Qt)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(ue)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=T.width-it&&rt>=0&&rt<=T.height-at&&X.readPixels(Z,rt,it,at,V.convert(Qt),V.convert(ue),It)}finally{const kt=q!==null?C.get(q).__webglFramebuffer:null;Rt.bindFramebuffer(X.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(T,Z,rt,it,at,It,Vt,zt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=C.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Vt!==void 0&&(Xt=Xt[Vt]),Xt)if(Z>=0&&Z<=T.width-it&&rt>=0&&rt<=T.height-at){Rt.bindFramebuffer(X.FRAMEBUFFER,Xt);const kt=T.textures[zt],Qt=kt.format,ue=kt.type;if(T.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+zt),!Ce.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const jt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,jt),X.bufferData(X.PIXEL_PACK_BUFFER,It.byteLength,X.STREAM_READ),X.readPixels(Z,rt,it,at,V.convert(Qt),V.convert(ue),0);const we=q!==null?C.get(q).__webglFramebuffer:null;Rt.bindFramebuffer(X.FRAMEBUFFER,we);const $e=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await HM(X,$e,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,jt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,It),X.deleteBuffer(jt),X.deleteSync($e),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,Z=null,rt=0){const it=Math.pow(2,-rt),at=Math.floor(T.image.width*it),It=Math.floor(T.image.height*it),Vt=Z!==null?Z.x:0,zt=Z!==null?Z.y:0;y.setTexture2D(T,0),X.copyTexSubImage2D(X.TEXTURE_2D,rt,0,0,Vt,zt,at,It),Rt.unbindTexture()};const fn=X.createFramebuffer(),ol=X.createFramebuffer();this.copyTextureToTexture=function(T,Z,rt=null,it=null,at=0,It=0){let Vt,zt,Xt,kt,Qt,ue,jt,we,$e;const Ze=T.isCompressedTexture?T.mipmaps[It]:T.image;if(rt!==null)Vt=rt.max.x-rt.min.x,zt=rt.max.y-rt.min.y,Xt=rt.isBox3?rt.max.z-rt.min.z:1,kt=rt.min.x,Qt=rt.min.y,ue=rt.isBox3?rt.min.z:0;else{const tn=Math.pow(2,-at);Vt=Math.floor(Ze.width*tn),zt=Math.floor(Ze.height*tn),T.isDataArrayTexture?Xt=Ze.depth:T.isData3DTexture?Xt=Math.floor(Ze.depth*tn):Xt=1,kt=0,Qt=0,ue=0}it!==null?(jt=it.x,we=it.y,$e=it.z):(jt=0,we=0,$e=0);const Ie=V.convert(Z.format),Be=V.convert(Z.type);let Gt;Z.isData3DTexture?(y.setTexture3D(Z,0),Gt=X.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(y.setTexture2DArray(Z,0),Gt=X.TEXTURE_2D_ARRAY):(y.setTexture2D(Z,0),Gt=X.TEXTURE_2D),Rt.activeTexture(X.TEXTURE0),Rt.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Z.flipY),Rt.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),Rt.pixelStorei(X.UNPACK_ALIGNMENT,Z.unpackAlignment);const Dn=Rt.getParameter(X.UNPACK_ROW_LENGTH),ge=Rt.getParameter(X.UNPACK_IMAGE_HEIGHT),_n=Rt.getParameter(X.UNPACK_SKIP_PIXELS),jn=Rt.getParameter(X.UNPACK_SKIP_ROWS),yi=Rt.getParameter(X.UNPACK_SKIP_IMAGES);Rt.pixelStorei(X.UNPACK_ROW_LENGTH,Ze.width),Rt.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ze.height),Rt.pixelStorei(X.UNPACK_SKIP_PIXELS,kt),Rt.pixelStorei(X.UNPACK_SKIP_ROWS,Qt),Rt.pixelStorei(X.UNPACK_SKIP_IMAGES,ue);const Kn=T.isDataArrayTexture||T.isData3DTexture,Fe=Z.isDataArrayTexture||Z.isData3DTexture;if(T.isDepthTexture){const tn=C.get(T),Ei=C.get(Z),Oe=C.get(tn.__renderTarget),Li=C.get(Ei.__renderTarget);Rt.bindFramebuffer(X.READ_FRAMEBUFFER,Oe.__webglFramebuffer),Rt.bindFramebuffer(X.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let Ua=0;Ua<Xt;Ua++)Kn&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,C.get(T).__webglTexture,at,ue+Ua),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,C.get(Z).__webglTexture,It,$e+Ua)),X.blitFramebuffer(kt,Qt,Vt,zt,jt,we,Vt,zt,X.DEPTH_BUFFER_BIT,X.NEAREST);Rt.bindFramebuffer(X.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(at!==0||T.isRenderTargetTexture||C.has(T)){const tn=C.get(T),Ei=C.get(Z);Rt.bindFramebuffer(X.READ_FRAMEBUFFER,fn),Rt.bindFramebuffer(X.DRAW_FRAMEBUFFER,ol);for(let Oe=0;Oe<Xt;Oe++)Kn?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,tn.__webglTexture,at,ue+Oe):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,tn.__webglTexture,at),Fe?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ei.__webglTexture,It,$e+Oe):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ei.__webglTexture,It),at!==0?X.blitFramebuffer(kt,Qt,Vt,zt,jt,we,Vt,zt,X.COLOR_BUFFER_BIT,X.NEAREST):Fe?X.copyTexSubImage3D(Gt,It,jt,we,$e+Oe,kt,Qt,Vt,zt):X.copyTexSubImage2D(Gt,It,jt,we,kt,Qt,Vt,zt);Rt.bindFramebuffer(X.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Fe?T.isDataTexture||T.isData3DTexture?X.texSubImage3D(Gt,It,jt,we,$e,Vt,zt,Xt,Ie,Be,Ze.data):Z.isCompressedArrayTexture?X.compressedTexSubImage3D(Gt,It,jt,we,$e,Vt,zt,Xt,Ie,Ze.data):X.texSubImage3D(Gt,It,jt,we,$e,Vt,zt,Xt,Ie,Be,Ze):T.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,It,jt,we,Vt,zt,Ie,Be,Ze.data):T.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,It,jt,we,Ze.width,Ze.height,Ie,Ze.data):X.texSubImage2D(X.TEXTURE_2D,It,jt,we,Vt,zt,Ie,Be,Ze);Rt.pixelStorei(X.UNPACK_ROW_LENGTH,Dn),Rt.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ge),Rt.pixelStorei(X.UNPACK_SKIP_PIXELS,_n),Rt.pixelStorei(X.UNPACK_SKIP_ROWS,jn),Rt.pixelStorei(X.UNPACK_SKIP_IMAGES,yi),It===0&&Z.generateMipmaps&&X.generateMipmap(Gt),Rt.unbindTexture()},this.initRenderTarget=function(T){C.get(T).__webglFramebuffer===void 0&&y.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?y.setTextureCube(T,0):T.isData3DTexture?y.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?y.setTexture2DArray(T,0):y.setTexture2D(T,0),Rt.unbindTexture()},this.resetState=function(){ut=0,pt=0,q=null,Rt.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ee._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ee._getUnpackColorSpace()}}const Zv={startingPoints:500,bulletHit:10,zombieKill:60,headshotKill:100,knifeKill:130,repairBarricade:10};Object.freeze(Zv);class AA{constructor(t=Zv){this.config={...t},this.players=new Map,this.listeners=new Set}setConfig(t){this.config={...this.config,...t}}getConfig(){return{...this.config}}registerPlayer(t){const i={playerId:t,currentPoints:this.config.startingPoints,totalEarned:this.config.startingPoints,totalSpent:0,lastUpdated:Date.now()};return this.players.set(t,i),this.notifyListeners(t,{success:!0,previousPoints:0,newPoints:i.currentPoints,amountChanged:this.config.startingPoints,reason:"starting_bonus"}),i}hasPlayer(t){return this.players.has(t)}getPlayerState(t){const i=this.players.get(t);return i?{...i}:void 0}getPoints(t){var i;return((i=this.players.get(t))==null?void 0:i.currentPoints)??0}removePlayer(t){return this.players.delete(t)}getAllPlayerIds(){return Array.from(this.players.keys())}canAfford(t,i){const r=this.players.get(t);return r?r.currentPoints>=i:!1}getMaxAffordableAmount(t){var i;return((i=this.players.get(t))==null?void 0:i.currentPoints)??0}addBulletHit(t){return this.addPoints(t,this.config.bulletHit,"bullet_hit")}addZombieKill(t){return this.addPoints(t,this.config.zombieKill,"zombie_kill")}addHeadshotKill(t){return this.addPoints(t,this.config.headshotKill,"headshot_kill")}addKnifeKill(t){return this.addPoints(t,this.config.knifeKill,"knife_kill")}addRepairBarricade(t){return this.addPoints(t,this.config.repairBarricade,"repair_barricade")}addPoints(t,i,r){const l=this.players.get(t);if(!l)return null;if(i<=0)return{success:!1,previousPoints:l.currentPoints,newPoints:l.currentPoints,amountChanged:0,reason:r};const c=l.currentPoints;l.currentPoints+=i,l.totalEarned+=i,l.lastUpdated=Date.now();const h={success:!0,previousPoints:c,newPoints:l.currentPoints,amountChanged:i,reason:r};return this.notifyListeners(t,h),h}spendPoints(t,i,r){const l=this.players.get(t);if(!l)return null;if(i<=0)return{success:!1,previousPoints:l.currentPoints,newPoints:l.currentPoints,amountChanged:0,reason:"purchase"};if(l.currentPoints<i)return{success:!1,previousPoints:l.currentPoints,newPoints:l.currentPoints,amountChanged:0,reason:"purchase"};const c=l.currentPoints;l.currentPoints-=i,l.totalSpent+=i,l.lastUpdated=Date.now();const h={success:!0,previousPoints:c,newPoints:l.currentPoints,amountChanged:-i,reason:"purchase"};return this.notifyListeners(t,h),h}adjustPoints(t,i,r="manual_adjustment"){const l=this.players.get(t);if(!l)return null;const c=l.currentPoints;let h=i;c+i<0&&(h=-c),l.currentPoints+=h,h>0?l.totalEarned+=h:l.totalSpent+=Math.abs(h),l.lastUpdated=Date.now();const p={success:!0,previousPoints:c,newPoints:l.currentPoints,amountChanged:h,reason:r};return this.notifyListeners(t,p),p}subscribe(t){return this.listeners.add(t),()=>{this.listeners.delete(t)}}notifyListeners(t,i){this.listeners.forEach(r=>{try{r(t,i)}catch(l){console.error("Error in points change listener:",l)}})}serializePlayer(t){const i=this.players.get(t);return i?{playerId:i.playerId,currentPoints:i.currentPoints,totalEarned:i.totalEarned,totalSpent:i.totalSpent,savedAt:Date.now(),version:"1.0.0"}:null}deserializePlayer(t){const i={playerId:t.playerId,currentPoints:Math.max(0,t.currentPoints),totalEarned:t.totalEarned,totalSpent:t.totalSpent,lastUpdated:t.savedAt};return this.players.set(i.playerId,i),i}exportAllPlayers(){return Array.from(this.players.values()).map(t=>({playerId:t.playerId,currentPoints:t.currentPoints,totalEarned:t.totalEarned,totalSpent:t.totalSpent,savedAt:t.lastUpdated,version:"1.0.0"}))}importAllPlayers(t){t.forEach(i=>{this.deserializePlayer(i)})}getPlayerStats(t){const i=this.players.get(t);return i?{currentPoints:i.currentPoints,totalEarned:i.totalEarned,totalSpent:i.totalSpent,netGain:i.totalEarned-i.totalSpent}:null}}let nd=null;function $d(){return nd||(nd=new AA),nd}class RA{constructor(){this.ctx=null}init(){this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext)),this.ctx.state==="suspended"&&this.ctx.resume()}playClick(){try{if(this.init(),!this.ctx)return;const t=this.ctx.currentTime,i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(1200,t),i.frequency.exponentialRampToValueAtTime(150,t+.05),r.gain.setValueAtTime(.08,t),r.gain.exponentialRampToValueAtTime(.01,t+.05),i.connect(r),r.connect(this.ctx.destination),i.start(t),i.stop(t+.06)}catch(t){console.warn("Audio click play failed",t)}}playUnlock(){try{if(this.init(),!this.ctx)return;const t=this.ctx.currentTime;[261.63,329.63,392,523.25].forEach((r,l)=>{const c=this.ctx.createOscillator(),h=this.ctx.createGain();c.type="sine",c.frequency.setValueAtTime(r,t+l*.08),h.gain.setValueAtTime(0,t),h.gain.linearRampToValueAtTime(.08,t+l*.08+.02),h.gain.exponentialRampToValueAtTime(.01,t+l*.08+.25),c.connect(h),h.connect(this.ctx.destination),c.start(t+l*.08),c.stop(t+l*.08+.3)})}catch(t){console.warn("Audio unlock play failed",t)}}playDenied(){try{if(this.init(),!this.ctx)return;const t=this.ctx.currentTime,i=this.ctx.createOscillator(),r=this.ctx.createOscillator(),l=this.ctx.createGain();i.type="sawtooth",r.type="sawtooth",i.frequency.setValueAtTime(100,t),r.frequency.setValueAtTime(98,t),l.gain.setValueAtTime(.12,t),l.gain.exponentialRampToValueAtTime(.01,t+.25),i.connect(l),r.connect(l),l.connect(this.ctx.destination),i.start(t),r.start(t),i.stop(t+.26),r.stop(t+.26)}catch(t){console.warn("Audio denied play failed",t)}}playPoints(){try{if(this.init(),!this.ctx)return;const t=this.ctx.currentTime,i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(880,t),i.frequency.exponentialRampToValueAtTime(1760,t+.08),r.gain.setValueAtTime(.04,t),r.gain.exponentialRampToValueAtTime(.005,t+.1),i.connect(r),r.connect(this.ctx.destination),i.start(t),i.stop(t+.11)}catch(t){console.warn("Audio points play failed",t)}}playRumble(){try{if(this.init(),!this.ctx)return;const t=this.ctx.currentTime,i=this.ctx.createOscillator(),r=this.ctx.createOscillator(),l=this.ctx.createGain(),c=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(55,t),r.type="sine",r.frequency.setValueAtTime(2.5,t),l.gain.setValueAtTime(15,t),c.gain.setValueAtTime(.05,t),r.connect(l),l.connect(i.frequency),i.connect(c),c.connect(this.ctx.destination),r.start(t),i.start(t)}catch{}}playDoorPurchase(){this.playUnlock()}}const Hs=new RA;function CA(o){switch(o){case"click":Hs.playClick();break;case"unlock":Hs.playUnlock();break;case"door_purchase":Hs.playDoorPurchase();break;case"denied":Hs.playDenied();break;case"points":Hs.playPoints();break;case"rumble":Hs.playRumble();break;default:console.warn(`Unknown sound: ${o}`)}}const wA={maxInteractionDistance:4,interactionAngleThreshold:30},tp=[{id:"starter_classroom_door",name:"Starter Classroom Door",cost:750,position:{x:17.5,y:1.5,z:-10},width:6,height:7.5,connectedRoomId:"hallway",isOpen:!1},{id:"hallway_science_lab_door",name:"Science Lab Door",cost:1e3,position:{x:12.5,y:1.5,z:4},width:6,height:7.5,connectedRoomId:"science_lab",isOpen:!1},{id:"hallway_library_door",name:"Library Door",cost:1e3,position:{x:38,y:1.5,z:4},width:6,height:7.5,connectedRoomId:"library",isOpen:!1},{id:"hallway_cafeteria_door",name:"Cafeteria Entrance",cost:1250,position:{x:-20,y:1.5,z:-3},width:14,height:7.5,connectedRoomId:"cafeteria",isOpen:!1}];class DA{constructor(t={}){this.currentInteractedDoor=null,this.doors=new Map,this.eventCallbacks=new Map,(t.doors??tp).forEach(r=>{this.addDoor(r)}),this.interactionConfig={...wA,...t.interactionConfig??{}}}on(t,i){return this.eventCallbacks.has(t)||this.eventCallbacks.set(t,new Set),this.eventCallbacks.get(t).add(i),()=>{const r=this.eventCallbacks.get(t);r&&r.delete(i)}}notifyEvent(t){const i=this.eventCallbacks.get(t.type);i&&i.forEach(r=>{try{r(t)}catch(l){console.error("Error in door event listener:",l)}})}addDoor(t){if(this.doors.has(t.id))return console.warn(`Door with id '${t.id}' already exists`),this.doors.get(t.id);const i={...t,isOpen:!1};return this.doors.set(i.id,i),i}removeDoor(t){return this.doors.delete(t)}getDoor(t){return this.doors.get(t)}getAllDoors(){return Array.from(this.doors.values())}getClosedDoors(){return this.getAllDoors().filter(t=>!t.isOpen)}getDoorAtPosition(t,i,r,l=1){for(const c of this.doors.values()){const h=c.position.x-t,p=c.position.y-i,m=c.position.z-r;if(Math.sqrt(h*h+p*p+m*m)<=l)return c}}getLookedAtDoor(t,i){let r=null,l=this.interactionConfig.maxInteractionDistance;for(const c of this.doors.values()){if(c.isOpen)continue;const h={x:c.position.x-t.x,y:c.position.y-t.y,z:c.position.z-t.z},p=Math.sqrt(h.x**2+h.y**2+h.z**2);if(p>this.interactionConfig.maxInteractionDistance)continue;const m={x:h.x/p,y:h.y/p,z:h.z/p},d=i.x*m.x+i.y*m.y+i.z*m.z;Math.acos(Math.max(-1,Math.min(1,d)))*(180/Math.PI)<=this.interactionConfig.interactionAngleThreshold&&p<l&&(l=p,r=c)}return r}updateInteraction(t,i){const r=this.getLookedAtDoor(t,i);if(r)return this.currentInteractedDoor!==r.id&&(this.currentInteractedDoor=r.id,this.notifyEvent({type:"interactionStart",doorId:r.id,doorName:r.name,timestamp:Date.now()}),console.log(`[Door] Detected: ${r.name} (${r.cost} points)`)),r.id;if(this.currentInteractedDoor!==null){const l=this.currentInteractedDoor,c=this.doors.get(l);this.currentInteractedDoor=null,c&&this.notifyEvent({type:"interactionEnd",doorId:l,doorName:c.name,timestamp:Date.now()})}return null}getCurrentInteractedDoor(){return this.currentInteractedDoor&&this.doors.get(this.currentInteractedDoor)||null}purchaseDoor(t,i){const r=this.doors.get(t);if(!r)return console.log("[Door] Door not found:",t),{success:!1,doorId:t,reason:"Door not found"};if(r.isOpen)return console.log("[Door] Door already open:",r.name),{success:!1,doorId:t,reason:"Door already open"};const l=$d();if(!l.canAfford(i,r.cost)){const h=l.getPoints(i);return console.log("[Door] Not enough points:",{door:r.name,cost:r.cost,playerPoints:h}),this.notifyEvent({type:"purchaseAttempt",doorId:t,doorName:r.name,playerId:i,timestamp:Date.now()}),{success:!1,doorId:t,reason:"Not enough points",previousPoints:h}}const c=l.spendPoints(i,r.cost,`Door: ${r.name}`);if(!c||!c.success)return console.log("[Door] Failed to spend points"),{success:!1,doorId:t,reason:"Failed to process payment"};r.isOpen=!0,console.log("[Door] Purchased:",{door:r.name,cost:r.cost,playerPoints:c.newPoints});try{CA("door_purchase")}catch{console.log("[Door] Sound placeholder: door_purchase")}return this.notifyEvent({type:"doorOpened",doorId:t,doorName:r.name,playerId:i,timestamp:Date.now()}),{success:!0,doorId:t,previousPoints:c.previousPoints,newPoints:c.newPoints}}getInteractionPrompt(t,i){if(t.isOpen)return{show:!1,text:"",canAfford:!0};const l=$d().canAfford(i,t.cost);return{show:!0,text:l?`Press E to Open Door (${t.cost})`:"Not Enough Points",canAfford:l}}exportDoors(){return this.getAllDoors().map(t=>({id:t.id,name:t.name,cost:t.cost,position:t.position,width:t.width,height:t.height,connectedRoomId:t.connectedRoomId,isOpen:t.isOpen}))}importDoors(t){t.forEach(i=>{if(this.doors.has(i.id)){const r=this.doors.get(i.id);r.isOpen=i.isOpen}else this.addDoor(i)})}resetDoors(){this.doors.forEach(t=>{t.isOpen=!1}),this.currentInteractedDoor=null}destroy(){this.doors.clear(),this.eventCallbacks.clear(),this.currentInteractedDoor=null}}const id=new Map;function ru(o="default"){return id.has(o)||id.set(o,new DA),id.get(o)}function UA(){const o=ru();console.log(`[DoorSystem] Initialized with ${o.getAllDoors().length} door(s)`)}class LA{constructor(t){this.doorMeshes=new Map,this.labelMeshes=new Map,this.scene=t,this.material=new My({color:9127187,roughness:.8,metalness:.1,side:Hi}),this.labelTextMaterial=new Kd({color:16777215,transparent:!0,opacity:1})}initialize(){const i=ru().getAllDoors();console.log("========================================"),console.log("[DoorRenderer] Initializing doors..."),console.log(`[DoorRenderer] Total doors in DoorManager: ${i.length}`),console.log(`[DoorRenderer] Total doors in DEFAULT_DOORS: ${tp.length}`),console.log("----------------------------------------"),console.log("[DoorRenderer] Expected doors from DEFAULT_DOORS:"),tp.forEach(r=>{console.log(`  - ${r.id}: (${r.position.x}, ${r.position.y}, ${r.position.z})`)}),console.log("----------------------------------------"),i.forEach(r=>{this.spawnDoorMesh(r)}),console.log("========================================"),console.log("[DoorRenderer] Initialization complete."),console.log(`[DoorRenderer] Door meshes spawned: ${this.doorMeshes.size}`),console.log(`[DoorRenderer] Label meshes spawned: ${this.labelMeshes.size}`),console.log("========================================")}spawnDoorMesh(t){if(this.doorMeshes.has(t.id)){console.warn(`[DoorRenderer] Door mesh already exists for ID: ${t.id}`);return}const{x:i,y:r,z:l}=t.position,c=new Si(t.width,t.height,.2),h=new On(c,this.material);h.position.set(i,r,l),this.scene.add(h),this.doorMeshes.set(t.id,h);const p=this.createTextLabel(t.id);p.position.set(i,r+t.height/2+.5,l),p.scale.set(3,1,1),this.scene.add(p),this.labelMeshes.set(t.id,p),console.log("[DoorRenderer] ✅ Door spawned:"),console.log(`    - ID: ${t.id}`),console.log(`    - Name: ${t.name}`),console.log(`    - Position: (${i.toFixed(2)}, ${r.toFixed(2)}, ${l.toFixed(2)})`),console.log(`    - Size: ${t.width.toFixed(2)} x ${t.height.toFixed(2)} x 0.20`)}createTextLabel(t){const i=document.createElement("canvas"),r=i.getContext("2d");if(!r)throw new Error("Failed to get 2D context for door label");i.width=512,i.height=128,r.clearRect(0,0,i.width,i.height),r.fillStyle="rgba(0, 0, 0, 0.7)",r.fillRect(0,0,i.width,i.height),r.font="Bold 48px Arial",r.fillStyle="white",r.textAlign="center",r.textBaseline="middle",r.fillText(t,i.width/2,i.height/2);const l=new Ov(i),c=new Kd({map:l,transparent:!0,opacity:1});return new ly(c)}updateDoorState(t,i){const r=this.doorMeshes.get(t);if(!r){console.warn(`[DoorRenderer] Cannot update state for unknown door ID: ${t}`);return}r.visible=!i;const l=this.labelMeshes.get(t);l&&(l.visible=!i),console.log(i?`[DoorRenderer] Door ${t} opened - mesh and label hidden`:`[DoorRenderer] Door ${t} closed - mesh and label visible`)}removeDoor(t){const i=this.doorMeshes.get(t);i&&(this.scene.remove(i),i.geometry.dispose(),this.doorMeshes.delete(t));const r=this.labelMeshes.get(t);r&&(this.scene.remove(r),r.material.map&&r.material.map.dispose(),r.material.dispose(),this.labelMeshes.delete(t)),console.log(`[DoorRenderer] Door ${t} removed from scene`)}getAllMeshes(){return new Map(this.doorMeshes)}getMesh(t){return this.doorMeshes.get(t)}destroy(){this.doorMeshes.forEach(t=>{this.scene.remove(t),t.geometry.dispose()}),this.doorMeshes.clear(),this.labelMeshes.forEach(t=>{this.scene.remove(t),t.material.map&&t.material.map.dispose(),t.material.dispose()}),this.labelMeshes.clear(),this.material.dispose(),console.log("[DoorRenderer] All door meshes and labels cleaned up")}}const ad=new Map;function NA(o,t){var r;ad.has(o)&&(console.warn(`[DoorRenderer] Renderer already exists for session: ${o}. Destroying old instance.`),(r=ad.get(o))==null||r.destroy());const i=new LA(t);return ad.set(o,i),i.initialize(),i}const rd={},sd=o=>{if(rd[o])return rd[o];const t=document.createElement("canvas");t.width=512,t.height=512;const i=t.getContext("2d");if(o==="wood_floor"){i.fillStyle="#452c1e",i.fillRect(0,0,512,512);const l=512/8;for(let c=0;c<8;c++){i.fillStyle=c%2===0?"#4e3425":"#3c2518",c%3===0&&(i.fillStyle="#432a1d"),i.fillRect(0,c*l,512,l),i.strokeStyle="#29170e",i.lineWidth=1;for(let p=0;p<5;p++)i.beginPath(),i.moveTo(0,c*l+Math.random()*l),i.quadraticCurveTo(256,c*l+Math.random()*l*2-l/2,512,c*l+Math.random()*l),i.stroke();const h=c%2===0?[150,380]:[220,440];i.fillStyle="#1e110a",h.forEach(p=>{i.fillRect(p,c*l,2,l)}),i.strokeStyle="#1a0d06",i.lineWidth=2,i.beginPath(),i.moveTo(0,c*l),i.lineTo(512,c*l),i.stroke()}}else if(o==="ceiling_tiles"){i.fillStyle="#dcd5ca",i.fillRect(0,0,512,512);for(let c=0;c<600;c++)i.fillStyle=Math.random()>.5?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.05)",i.fillRect(Math.random()*512,Math.random()*512,2,2);const l=256;for(let c=0;c<2;c++)for(let h=0;h<2;h++){const p=h*l,m=c*l;i.fillStyle="rgba(115, 87, 59, 0.15)",i.strokeStyle="rgba(92, 70, 48, 0.35)",i.lineWidth=1.5;for(let v=0;v<4;v++){const _=p+30+Math.random()*(l-60),E=m+30+Math.random()*(l-60),A=25+Math.random()*45;i.beginPath(),i.arc(_,E,A,0,Math.PI*2),i.fill(),i.beginPath(),i.arc(_,E,A+4,0,Math.PI*2),i.stroke()}i.fillStyle="rgba(40, 45, 35, 0.65)";for(let v=0;v<35;v++)i.fillRect(p+Math.random()*l,m+Math.random()*l,1.5,1.5);i.strokeStyle="rgba(50,50,50,0.25)",i.lineWidth=1,i.beginPath();let d=p+20,x=m+20;i.moveTo(d,x);for(let v=0;v<10;v++)d+=(Math.random()-.5)*15,x+=Math.random()*20,i.lineTo(d,x);i.stroke()}i.strokeStyle="#2d2e33",i.lineWidth=6,i.beginPath(),i.moveTo(0,0),i.lineTo(512,0),i.moveTo(0,256),i.lineTo(512,256),i.moveTo(0,512),i.lineTo(512,512),i.moveTo(0,0),i.lineTo(0,512),i.moveTo(256,0),i.lineTo(256,512),i.moveTo(512,0),i.lineTo(512,512),i.stroke(),i.fillStyle="rgba(92, 49, 14, 0.55)";for(let c=0;c<20;c++)i.fillRect(Math.random()*512,253+Math.random()*6,Math.random()*25,Math.random()*3),i.fillRect(253+Math.random()*6,Math.random()*512,Math.random()*3,Math.random()*25)}else if(o==="wall_tiles"){i.fillStyle="#6d8a6b",i.fillRect(0,0,512,512);const l=8,c=64;for(let h=0;h<l;h++)for(let p=0;p<l;p++){const m=p*c,d=h*c;if(i.fillStyle=(h+p)%2===0?"#728e6f":"#688566",h*p%5===0&&(i.fillStyle="#5c7859"),i.fillRect(m+1,d+1,c-2,c-2),i.strokeStyle="rgba(255,255,255,0.06)",i.strokeRect(m+2,d+2,c-4,c-4),Math.random()<.15&&(i.strokeStyle="rgba(20, 25, 20, 0.55)",i.lineWidth=1,i.beginPath(),i.moveTo(m+Math.random()*c,d+Math.random()*c),i.lineTo(m+Math.random()*c,d+Math.random()*c),i.stroke()),h===2&&p===4||h===6&&p===1||h===4&&p===6){i.fillStyle="#222520",i.fillRect(m+2,d+2,c-4,c-4),i.fillStyle="#444c41";for(let x=0;x<10;x++)i.fillRect(m+Math.random()*c,d+Math.random()*c,Math.random()*6,Math.random()*6)}}i.strokeStyle="#252924",i.lineWidth=2,i.beginPath();for(let h=0;h<=l;h++)i.moveTo(0,h*c),i.lineTo(512,h*c),i.moveTo(h*c,0),i.lineTo(h*c,512);i.stroke();for(let h=0;h<12;h++){const p=Math.random()*512,m=Math.random()*80,d=150+Math.random()*250,x=i.createLinearGradient(p,m,p,m+d);x.addColorStop(0,"rgba(21, 26, 19, 0.55)"),x.addColorStop(.3,"rgba(15, 20, 14, 0.35)"),x.addColorStop(1,"rgba(15, 20, 14, 0.0)"),i.fillStyle=x,i.fillRect(p-3,m,6,d)}i.strokeStyle="rgba(224, 215, 200, 0.35)",i.lineWidth=1.5,i.font="22px Arial",i.strokeText("WASH ME",80,200),i.strokeText("CLASS OF '95",280,390)}const r=new Ov(t);return r.wrapS=el,r.wrapT=el,rd[o]=r,r},OA=(o,t,i)=>{const r=o.stairDirection||(o.w>o.d?"W_E":"N_S"),l=o.climbHeight??o.h;if(r==="W_E"){const c=o.cx-o.w/2,h=Math.max(0,Math.min(1,(t-c)/o.w));return o.floorY+h*l}else if(r==="E_W"){const c=o.cx-o.w/2,h=Math.max(0,Math.min(1,(t-c)/o.w));return o.floorY+(1-h)*l}else if(r==="S_N"){const c=o.cz-o.d/2,h=Math.max(0,Math.min(1,(i-c)/o.d));return o.floorY+(1-h)*l}else{const c=o.cz-o.d/2,h=Math.max(0,Math.min(1,(i-c)/o.d));return o.floorY+h*l}},Vc=[{id:"starter",name:"Starter Classroom",cx:17.5,cz:-40,w:75,d:60,floorY:0,h:10,color:"#3d5c3a",floorTexture:"wood_floor.png"},{id:"hallway",name:"Main Hallway",cx:20,cz:-3,w:80,d:14,floorY:0,h:10,color:"#323247"},{id:"science_lab",name:"Science Lab",cx:5,cz:26.5,w:30,d:45,floorY:0,h:10,color:"#4a3720"},{id:"library",name:"Library Shelf Area",cx:40,cz:26.5,w:36,d:45,floorY:0,h:10,color:"#453c1b",floorTexture:"wood_floor.png"},{id:"stairwell",name:"Stairwell Access",cx:68,cz:-3,w:16,d:10,floorY:0,h:22,climbHeight:11,color:"#542828",isStaircase:!0,stairDirection:"W_E"},{id:"gym",name:"Gymnasium (Floor 2)",cx:144,cz:15,w:80,d:60,floorY:11,h:18,color:"#20434f",carvedFloors:[]},{id:"cafeteria",name:"Cafeteria Wing",cx:-50,cz:-3,w:60,d:50,floorY:0,h:10,color:"#2a261f"},{id:"courtyard",name:"Overgrown Courtyard",cx:-63,cz:57,w:90,d:70,floorY:0,h:15,color:"#162e1a",disabledCeiling:!0,trapdoors:[{cx:-42,cz:-48.5,w:8,d:8},{cx:-42,cz:-31,w:12,d:6}]},{id:"underground_tunnel",name:"Utility Tunnel",cx:-103,cz:63.4,w:12,d:80,floorY:-12,h:9,color:"#111412",ceilingHoles:[{cx:-42,cz:-48.5,w:8,d:8},{cx:-42,cz:-31,w:12,d:6}]},{id:"the_vault",name:"Fallout Shelter Vault",cx:-103,cz:123.4,w:60,d:40,floorY:-12,h:9,color:"#282b29"},{id:"upper_hallway",name:"2nd Floor Hallway",cx:90,cz:-3,w:28,d:14,floorY:11,h:10,color:"#2a2d36",floorTexture:"wood_floor.png"},{id:"principal_office",name:"Principal's Office",cx:90,cz:127,w:56,d:56,floorY:11,h:10,color:"#362a2a"},{id:"upper_hallway_2",name:"2nd floor hallway 2",cx:90,cz:51.5,w:18,d:95,floorY:11,h:10,color:"#2a2d36",floorTexture:"wood_floor.png"},{id:"security_room",name:"Master Security & Breaker Room",cx:66,cz:51.5,w:30,d:35,floorY:11,h:10,color:"#1a212b"},{id:"upper_hallway_north",name:"2nd Floor North Connector",cx:150,cz:92,w:102,d:14,floorY:11,h:10,color:"#2a2d36",floorTexture:"wood_floor.png"},{id:"gym_north_hallway",name:"Gym North Connector",cx:144,cz:65,w:18,d:40,floorY:11,h:10,color:"#2a2d36",floorTexture:"wood_floor.png"},{id:"nurses_office",name:"Nurse's Office",cx:164,cz:112,w:32,d:26,floorY:11,h:10,color:"#1f3d3c",floorTexture:"wood_floor.png"},{id:"nurses_office_backroom",name:"Nurse's Office Backroom",cx:164,cz:135,w:24,d:20,floorY:11,h:10,color:"#19302f",floorTexture:"wood_floor.png"},{id:"stairwell_2",name:"Secondary Stairwell",cx:90,cz:-22,w:16,d:24,floorY:0,h:22,climbHeight:11,color:"#542828",isStaircase:!0,stairDirection:"N_S"},{id:"lower_hallway_south",name:"South Wing Hallway",cx:90,cz:-76.5,w:14,d:85,floorY:0,h:10,color:"#2a2d36",floorTexture:"wood_floor.png"},{id:"main_office",name:"Main Office",cx:90,cz:-139,w:50,d:40,floorY:0,h:10,color:"#1e293b",floorTexture:"wood_floor.png"}],lv={starter:[{side:"N",center:-17.5,width:6}],hallway:[{side:"S",center:-20,width:6},{side:"N",center:-15,width:6},{side:"N",center:20,width:6},{side:"E",center:0,width:6},{side:"W",center:0,width:14}],science_lab:[{side:"S",center:0,width:6}],library:[{side:"S",center:0,width:6}],stairwell:[{side:"W",center:0,width:6},{side:"E",center:0,width:10}],gym:[{side:"W",center:-18,width:10},{side:"S",center:0,width:10},{side:"N",center:0,width:10}],cafeteria:[{side:"E",center:0,width:14},{side:"N",center:0,width:12}],courtyard:[{side:"S",center:13,width:12}],boiler_room:[{side:"N",center:0,width:12}],underground_tunnel:[{side:"S",center:0,width:12},{side:"N",center:0,width:12}],the_vault:[{side:"S",center:0,width:12}],upper_hallway:[{side:"W",center:0,width:10},{side:"E",center:0,width:10},{side:"S",center:0,width:6},{side:"N",center:0,width:10}],principal_office:[{side:"S",center:0,width:8}],upper_hallway_2:[{side:"S",center:0,width:10},{side:"W",center:0,width:8},{side:"E",center:40.5,width:10},{side:"N",center:0,width:8}],security_room:[{side:"E",center:0,width:8}],upper_hallway_north:[{side:"W",center:0,width:10},{side:"N",center:12,width:10},{side:"N",center:14,width:6},{side:"S",center:-6,width:10}],gym_north_hallway:[{side:"N",center:0,width:10},{side:"S",center:0,width:10}],nurses_office:[{side:"S",center:0,width:6},{side:"N",center:0,width:6}],nurses_office_backroom:[{side:"S",center:0,width:6}],stairwell_2:[{side:"N",center:0,width:6},{side:"S",center:0,width:6}],lower_hallway_south:[{side:"N",center:0,width:6},{side:"S",center:0,width:6}],main_office:[{side:"N",center:0,width:6}]},PA=[{id:"mystery_box_spawn",type:"interactable",roomId:"starter",cx:15,cz:-25,w:4,d:2,h:3,color:"#8b5a2b"},{id:"main_power_switch",type:"interactable",roomId:"security_room",cx:54,cz:51.5,w:4,d:1,h:4,color:"#8b0000"}],kc={wallThickness:.4,ceilingThickness:.15,doorHeight:7.5,floorThickness:.2},Xc=4.5,zA=1;function IA(){const o=vi.useRef(null),t=vi.useRef(null),i=vi.useRef(Math.PI),r=vi.useRef(0),l=vi.useRef(new tt(0,Xc,-30)),c=vi.useRef(0),h=vi.useRef({}),p=vi.useRef(!0),m=vi.useRef(!1),[d,x]=vi.useState(!1);return vi.useEffect(()=>{const v=t.current,_=o.current;if(!v||!_)return;UA();const E=new TA({canvas:v,antialias:!0});E.setPixelRatio(window.devicePixelRatio),E.shadowMap.enabled=!0,E.shadowMap.type=cv;const A=new ny;A.background=new Me(657930),A.fog=new dp(657930,20,120);const D=new si(75,_.clientWidth/_.clientHeight,.1,500);D.position.copy(l.current);const M=NA("default",A);A.add(new Ry(2236962,1));const S={starter:3820842,hallway:1710638,science_lab:2760720,library:2760720,gym:1056816,cafeteria:1709328,courtyard:662026,underground_tunnel:329736,the_vault:658442,stairwell:1705992,stairwell_2:1705992,upper_hallway:1315872,upper_hallway_2:1315872,upper_hallway_north:1315872,principal_office:1708048,security_room:526864,nurses_office:1712160,nurses_office_backroom:1185816,gym_north_hallway:1054752,lower_hallway_south:1315872,main_office:922912};Vc.forEach(G=>{const gt=new Ay(S[G.id]??2236962,2.5,Math.max(G.w,G.d)*1.2);gt.position.set(G.cx,G.floorY+G.h*.75,G.cz),A.add(gt)});const w=kc.wallThickness,P=kc.ceilingThickness,N=kc.floorThickness,Y=kc.doorHeight,O=new zs({map:sd("wall_tiles")}),B=new zs({map:sd("wood_floor")}),b=new zs({map:sd("ceiling_tiles")}),z=G=>{const gt=lv[G.id]||[],St=parseInt(G.color.replace("#",""),16),W=new zs({color:St}),xt=G.floorTexture==="wood_floor.png"?B:W;if(!G.disabledFloor){const Tt=new On(new Si(G.w,N,G.d),xt);Tt.position.set(G.cx,G.floorY-N/2,G.cz),Tt.receiveShadow=!0,A.add(Tt)}if(!G.disabledCeiling){const Tt=new On(new Si(G.w,P,G.d),b);Tt.position.set(G.cx,G.floorY+G.h+P/2,G.cz),A.add(Tt)}if([{side:"N",px:G.cx,pz:G.cz+G.d/2,len:G.w,rotY:0},{side:"S",px:G.cx,pz:G.cz-G.d/2,len:G.w,rotY:0},{side:"E",px:G.cx+G.w/2,pz:G.cz,len:G.d,rotY:Math.PI/2},{side:"W",px:G.cx-G.w/2,pz:G.cz,len:G.d,rotY:Math.PI/2}].forEach(({side:Tt,px:Yt,pz:Ht,len:ae,rotY:Kt})=>{var se;if((se=G.disabledWalls)!=null&&se.includes(Tt))return;const ce=gt.filter(ke=>ke.side===Tt),Ae=(ke,Re)=>{const Pe=Re-ke;if(Pe<=.01)return;const X=(ke+Re)/2-ae/2,ze=Math.min(Y,G.h),re=new On(new Si(Pe,ze,w),O);if(re.rotation.y=Kt,Kt===0?re.position.set(Yt+X,G.floorY+ze/2,Ht):re.position.set(Yt,G.floorY+ze/2,Ht+X),re.castShadow=!0,re.receiveShadow=!0,A.add(re),G.h>Y){const Ce=G.h-Y,Rt=new On(new Si(Pe,Ce,w),O);Rt.rotation.y=Kt,Kt===0?Rt.position.set(Yt+X,G.floorY+Y+Ce/2,Ht):Rt.position.set(Yt,G.floorY+Y+Ce/2,Ht+X),A.add(Rt)}};if(ce.length===0)Ae(0,ae);else{const ke=[...ce].sort((Pe,X)=>Pe.center-Pe.width/2-(X.center-X.width/2));let Re=0;ke.forEach(Pe=>{const X=Math.max(0,Pe.center-Pe.width/2+ae/2),ze=Math.min(ae,Pe.center+Pe.width/2+ae/2);Ae(Re,X),Re=ze}),Ae(Re,ae)}}),G.isStaircase){const Tt=new On(new Si(G.w,.3,G.d),new zs({color:5910560}));Tt.position.set(G.cx,G.floorY+(G.climbHeight??G.h)/2,G.cz);const Yt=G.climbHeight??G.h,Ht=G.stairDirection||(G.w>G.d?"W_E":"N_S");Ht==="W_E"||Ht==="E_W"?Tt.rotation.z=(Ht==="E_W"?1:-1)*Math.atan2(Yt,G.w):Tt.rotation.x=(Ht==="S_N"?1:-1)*Math.atan2(Yt,G.d),A.add(Tt)}};Vc.forEach(G=>z(G)),PA.forEach(G=>{const gt=Vc.find(W=>W.id===G.roomId),St=new On(new Si(G.w,G.h,G.d),new zs({color:parseInt(G.color.replace("#",""),16)}));St.position.set(G.cx,((gt==null?void 0:gt.floorY)??0)+G.h/2,G.cz),A.add(St)});const K=()=>{const G=_.clientWidth,gt=_.clientHeight;E.setSize(G,gt),D.aspect=G/gt,D.updateProjectionMatrix()};K();const H=new ResizeObserver(K);H.observe(_);const $=G=>{document.pointerLockElement===v&&(i.current-=G.movementX*.002,r.current-=G.movementY*.002,r.current=Math.max(-Math.PI/2+.05,Math.min(Math.PI/2-.05,r.current)))},ut=()=>{document.pointerLockElement!==v&&(v==null||v.requestPointerLock())},pt=()=>{x(document.pointerLockElement===v)};v.addEventListener("click",ut),document.addEventListener("mousemove",$),document.addEventListener("pointerlockchange",pt);const q=G=>{if(h.current[G.code]=!0,G.code==="KeyV"&&(m.current=!m.current),G.code==="KeyE"){const gt=ru();$d();const St="player1",W=gt.getCurrentInteractedDoor();if(W){console.log("[App] Attempting to purchase door:",W.name);const xt=gt.purchaseDoor(W.id,St);xt.success?(console.log("[App] Door purchased successfully:",W.name),M.updateDoorState(W.id,!0)):console.log("[App] Door purchase failed:",xt.reason)}}},U=G=>{h.current[G.code]=!1};window.addEventListener("keydown",q),window.addEventListener("keyup",U);const I=(G,gt,St)=>Vc.find(W=>{const xt=W.cx-W.w/2,yt=W.cx+W.w/2,Tt=W.cz-W.d/2,Yt=W.cz+W.d/2;return G>=xt&&G<=yt&&gt>=Tt&&gt<=Yt&&St>=W.floorY-1&&St<=W.floorY+W.h+1}),ot=(G,gt,St)=>(lv[G]||[]).filter(W=>W.side===gt).some(W=>St>=W.center-W.width/2&&St<=W.center+W.width/2),mt=(G,gt)=>{const St=G.clone().add(gt),W=I(G.x,G.z,G.y);if(!W)return St;const xt=W.cx-W.w/2,yt=W.cx+W.w/2,Tt=W.cz-W.d/2,Yt=W.cz+W.d/2;let Ht=St.x,ae=St.z;const Kt=zA;return ae-Kt<Tt&&!ot(W.id,"S",G.x-W.cx)&&(ae=Tt+Kt),ae+Kt>Yt&&!ot(W.id,"N",G.x-W.cx)&&(ae=Yt-Kt),Ht-Kt<xt&&!ot(W.id,"W",G.z-W.cz)&&(Ht=xt+Kt),Ht+Kt>yt&&!ot(W.id,"E",G.z-W.cz)&&(Ht=yt-Kt),new tt(Ht,St.y,ae)};let Et=performance.now(),L;const Q=()=>{L=requestAnimationFrame(Q);const G=performance.now(),gt=Math.min((G-Et)/1e3,.05);Et=G;const St=h.current,W=m.current?20:10,xt=new tt(-Math.sin(i.current),0,-Math.cos(i.current)),yt=new tt(Math.cos(i.current),0,-Math.sin(i.current));let Tt=new tt;if((St.KeyW||St.ArrowUp)&&Tt.add(xt),(St.KeyS||St.ArrowDown)&&Tt.sub(xt),(St.KeyD||St.ArrowRight)&&Tt.add(yt),(St.KeyA||St.ArrowLeft)&&Tt.sub(yt),Tt.lengthSq()>0&&Tt.normalize().multiplyScalar(W*gt),m.current)St.Space&&(Tt.y+=W*gt),(St.ShiftLeft||St.ShiftRight)&&(Tt.y-=W*gt),l.current.add(Tt);else{c.current-=30*gt;const ae=I(l.current.x,l.current.z,l.current.y);let Kt=ae?ae.isStaircase?OA(ae,l.current.x,l.current.z)+Xc:ae.floorY+Xc:Xc;l.current.y+=c.current*gt,l.current.y<=Kt?(l.current.y=Kt,c.current=0,p.current=!0):p.current=!1,St.Space&&p.current&&(c.current=10,p.current=!1);const ce=mt(l.current,Tt);l.current.x=ce.x,l.current.z=ce.z}D.position.copy(l.current),D.rotation.order="YXZ",D.rotation.y=i.current,D.rotation.x=r.current;const Yt=ru(),Ht=new tt(-Math.sin(i.current)*Math.cos(r.current),Math.sin(r.current),-Math.cos(i.current)*Math.cos(r.current));Yt.updateInteraction({x:l.current.x,y:l.current.y,z:l.current.z},{x:Ht.x,y:Ht.y,z:Ht.z}),E.render(A,D)};return Q(),()=>{cancelAnimationFrame(L),H.disconnect(),v.removeEventListener("click",ut),document.removeEventListener("mousemove",$),document.removeEventListener("pointerlockchange",pt),window.removeEventListener("keydown",q),window.removeEventListener("keyup",U),M.destroy(),E.dispose()}},[]),va.jsxs("div",{className:"relative w-screen h-screen bg-black overflow-hidden select-none",children:[va.jsx("div",{ref:o,className:"absolute inset-0",children:va.jsx("canvas",{ref:t,className:"block w-full h-full"})}),d&&va.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10",children:va.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 border border-white/60"})}),!d&&va.jsx("div",{className:"absolute inset-x-0 bottom-8 flex justify-center pointer-events-none z-10",children:va.jsx("div",{className:"bg-black/70 border border-white/10 px-5 py-2 rounded-full text-[11px] font-mono tracking-widest text-white/50 uppercase",children:"Click to Play · WASD Move · Mouse Look · V Noclip · ESC Free Cursor"})})]})}sM.createRoot(document.getElementById("root")).render(va.jsx(vi.StrictMode,{children:va.jsx(IA,{})}));
