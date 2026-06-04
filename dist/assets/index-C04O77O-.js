(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function wS(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ld={exports:{}},Zo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function RS(){if(S_)return Zo;S_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:u,ref:o!==void 0?o:null,props:c}}return Zo.Fragment=e,Zo.jsx=n,Zo.jsxs=n,Zo}var M_;function CS(){return M_||(M_=1,Ld.exports=RS()),Ld.exports}var ne=CS(),Od={exports:{}},_t={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_;function DS(){if(E_)return _t;E_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function S(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,M={};function y(P,ie,be){this.props=P,this.context=ie,this.refs=M,this.updater=be||b}y.prototype.isReactComponent={},y.prototype.setState=function(P,ie){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,ie,"setState")},y.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function D(){}D.prototype=y.prototype;function z(P,ie,be){this.props=P,this.context=ie,this.refs=M,this.updater=be||b}var O=z.prototype=new D;O.constructor=z,R(O,y.prototype),O.isPureReactComponent=!0;var k=Array.isArray;function I(){}var L={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function U(P,ie,be){var Oe=be.ref;return{$$typeof:r,type:P,key:ie,ref:Oe!==void 0?Oe:null,props:be}}function H(P,ie){return U(P.type,ie,P.props)}function B(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function q(P){var ie={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(be){return ie[be]})}var de=/\/+/g;function me(P,ie){return typeof P=="object"&&P!==null&&P.key!=null?q(""+P.key):ie.toString(36)}function Y(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(I,I):(P.status="pending",P.then(function(ie){P.status==="pending"&&(P.status="fulfilled",P.value=ie)},function(ie){P.status==="pending"&&(P.status="rejected",P.reason=ie)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function C(P,ie,be,Oe,He){var oe=typeof P;(oe==="undefined"||oe==="boolean")&&(P=null);var De=!1;if(P===null)De=!0;else switch(oe){case"bigint":case"string":case"number":De=!0;break;case"object":switch(P.$$typeof){case r:case e:De=!0;break;case _:return De=P._init,C(De(P._payload),ie,be,Oe,He)}}if(De)return He=He(P),De=Oe===""?"."+me(P,0):Oe,k(He)?(be="",De!=null&&(be=De.replace(de,"$&/")+"/"),C(He,ie,be,"",function(st){return st})):He!=null&&(B(He)&&(He=H(He,be+(He.key==null||P&&P.key===He.key?"":(""+He.key).replace(de,"$&/")+"/")+De)),ie.push(He)),1;De=0;var Re=Oe===""?".":Oe+":";if(k(P))for(var $e=0;$e<P.length;$e++)Oe=P[$e],oe=Re+me(Oe,$e),De+=C(Oe,ie,be,oe,He);else if($e=S(P),typeof $e=="function")for(P=$e.call(P),$e=0;!(Oe=P.next()).done;)Oe=Oe.value,oe=Re+me(Oe,$e++),De+=C(Oe,ie,be,oe,He);else if(oe==="object"){if(typeof P.then=="function")return C(Y(P),ie,be,Oe,He);throw ie=String(P),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return De}function F(P,ie,be){if(P==null)return P;var Oe=[],He=0;return C(P,Oe,"","",function(oe){return ie.call(be,oe,He++)}),Oe}function se(P){if(P._status===-1){var ie=P._result;ie=ie(),ie.then(function(be){(P._status===0||P._status===-1)&&(P._status=1,P._result=be)},function(be){(P._status===0||P._status===-1)&&(P._status=2,P._result=be)}),P._status===-1&&(P._status=0,P._result=ie)}if(P._status===1)return P._result.default;throw P._result}var ge=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},we={map:F,forEach:function(P,ie,be){F(P,function(){ie.apply(this,arguments)},be)},count:function(P){var ie=0;return F(P,function(){ie++}),ie},toArray:function(P){return F(P,function(ie){return ie})||[]},only:function(P){if(!B(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return _t.Activity=v,_t.Children=we,_t.Component=y,_t.Fragment=n,_t.Profiler=o,_t.PureComponent=z,_t.StrictMode=a,_t.Suspense=m,_t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,_t.__COMPILER_RUNTIME={__proto__:null,c:function(P){return L.H.useMemoCache(P)}},_t.cache=function(P){return function(){return P.apply(null,arguments)}},_t.cacheSignal=function(){return null},_t.cloneElement=function(P,ie,be){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Oe=R({},P.props),He=P.key;if(ie!=null)for(oe in ie.key!==void 0&&(He=""+ie.key),ie)!T.call(ie,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&ie.ref===void 0||(Oe[oe]=ie[oe]);var oe=arguments.length-2;if(oe===1)Oe.children=be;else if(1<oe){for(var De=Array(oe),Re=0;Re<oe;Re++)De[Re]=arguments[Re+2];Oe.children=De}return U(P.type,He,Oe)},_t.createContext=function(P){return P={$$typeof:u,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},_t.createElement=function(P,ie,be){var Oe,He={},oe=null;if(ie!=null)for(Oe in ie.key!==void 0&&(oe=""+ie.key),ie)T.call(ie,Oe)&&Oe!=="key"&&Oe!=="__self"&&Oe!=="__source"&&(He[Oe]=ie[Oe]);var De=arguments.length-2;if(De===1)He.children=be;else if(1<De){for(var Re=Array(De),$e=0;$e<De;$e++)Re[$e]=arguments[$e+2];He.children=Re}if(P&&P.defaultProps)for(Oe in De=P.defaultProps,De)He[Oe]===void 0&&(He[Oe]=De[Oe]);return U(P,oe,He)},_t.createRef=function(){return{current:null}},_t.forwardRef=function(P){return{$$typeof:h,render:P}},_t.isValidElement=B,_t.lazy=function(P){return{$$typeof:_,_payload:{_status:-1,_result:P},_init:se}},_t.memo=function(P,ie){return{$$typeof:p,type:P,compare:ie===void 0?null:ie}},_t.startTransition=function(P){var ie=L.T,be={};L.T=be;try{var Oe=P(),He=L.S;He!==null&&He(be,Oe),typeof Oe=="object"&&Oe!==null&&typeof Oe.then=="function"&&Oe.then(I,ge)}catch(oe){ge(oe)}finally{ie!==null&&be.types!==null&&(ie.types=be.types),L.T=ie}},_t.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},_t.use=function(P){return L.H.use(P)},_t.useActionState=function(P,ie,be){return L.H.useActionState(P,ie,be)},_t.useCallback=function(P,ie){return L.H.useCallback(P,ie)},_t.useContext=function(P){return L.H.useContext(P)},_t.useDebugValue=function(){},_t.useDeferredValue=function(P,ie){return L.H.useDeferredValue(P,ie)},_t.useEffect=function(P,ie){return L.H.useEffect(P,ie)},_t.useEffectEvent=function(P){return L.H.useEffectEvent(P)},_t.useId=function(){return L.H.useId()},_t.useImperativeHandle=function(P,ie,be){return L.H.useImperativeHandle(P,ie,be)},_t.useInsertionEffect=function(P,ie){return L.H.useInsertionEffect(P,ie)},_t.useLayoutEffect=function(P,ie){return L.H.useLayoutEffect(P,ie)},_t.useMemo=function(P,ie){return L.H.useMemo(P,ie)},_t.useOptimistic=function(P,ie){return L.H.useOptimistic(P,ie)},_t.useReducer=function(P,ie,be){return L.H.useReducer(P,ie,be)},_t.useRef=function(P){return L.H.useRef(P)},_t.useState=function(P){return L.H.useState(P)},_t.useSyncExternalStore=function(P,ie,be){return L.H.useSyncExternalStore(P,ie,be)},_t.useTransition=function(){return L.H.useTransition()},_t.version="19.2.6",_t}var b_;function yp(){return b_||(b_=1,Od.exports=DS()),Od.exports}var nt=yp();const T_=wS(nt);var Id={exports:{}},$o={},zd={exports:{}},Pd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_;function NS(){return A_||(A_=1,(function(r){function e(C,F){var se=C.length;C.push(F);e:for(;0<se;){var ge=se-1>>>1,we=C[ge];if(0<o(we,F))C[ge]=F,C[se]=we,se=ge;else break e}}function n(C){return C.length===0?null:C[0]}function a(C){if(C.length===0)return null;var F=C[0],se=C.pop();if(se!==F){C[0]=se;e:for(var ge=0,we=C.length,P=we>>>1;ge<P;){var ie=2*(ge+1)-1,be=C[ie],Oe=ie+1,He=C[Oe];if(0>o(be,se))Oe<we&&0>o(He,be)?(C[ge]=He,C[Oe]=se,ge=Oe):(C[ge]=be,C[ie]=se,ge=ie);else if(Oe<we&&0>o(He,se))C[ge]=He,C[Oe]=se,ge=Oe;else break e}}return F}function o(C,F){var se=C.sortIndex-F.sortIndex;return se!==0?se:C.id-F.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();r.unstable_now=function(){return u.now()-h}}var m=[],p=[],_=1,v=null,g=3,S=!1,b=!1,R=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function O(C){for(var F=n(p);F!==null;){if(F.callback===null)a(p);else if(F.startTime<=C)a(p),F.sortIndex=F.expirationTime,e(m,F);else break;F=n(p)}}function k(C){if(R=!1,O(C),!b)if(n(m)!==null)b=!0,I||(I=!0,q());else{var F=n(p);F!==null&&Y(k,F.startTime-C)}}var I=!1,L=-1,T=5,U=-1;function H(){return M?!0:!(r.unstable_now()-U<T)}function B(){if(M=!1,I){var C=r.unstable_now();U=C;var F=!0;try{e:{b=!1,R&&(R=!1,D(L),L=-1),S=!0;var se=g;try{t:{for(O(C),v=n(m);v!==null&&!(v.expirationTime>C&&H());){var ge=v.callback;if(typeof ge=="function"){v.callback=null,g=v.priorityLevel;var we=ge(v.expirationTime<=C);if(C=r.unstable_now(),typeof we=="function"){v.callback=we,O(C),F=!0;break t}v===n(m)&&a(m),O(C)}else a(m);v=n(m)}if(v!==null)F=!0;else{var P=n(p);P!==null&&Y(k,P.startTime-C),F=!1}}break e}finally{v=null,g=se,S=!1}F=void 0}}finally{F?q():I=!1}}}var q;if(typeof z=="function")q=function(){z(B)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,me=de.port2;de.port1.onmessage=B,q=function(){me.postMessage(null)}}else q=function(){y(B,0)};function Y(C,F){L=y(function(){C(r.unstable_now())},F)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(C){C.callback=null},r.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<C?Math.floor(1e3/C):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(C){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var se=g;g=F;try{return C()}finally{g=se}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(C,F){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var se=g;g=C;try{return F()}finally{g=se}},r.unstable_scheduleCallback=function(C,F,se){var ge=r.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?ge+se:ge):se=ge,C){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=se+we,C={id:_++,callback:F,priorityLevel:C,startTime:se,expirationTime:we,sortIndex:-1},se>ge?(C.sortIndex=se,e(p,C),n(m)===null&&C===n(p)&&(R?(D(L),L=-1):R=!0,Y(k,se-ge))):(C.sortIndex=we,e(m,C),b||S||(b=!0,I||(I=!0,q()))),C},r.unstable_shouldYield=H,r.unstable_wrapCallback=function(C){var F=g;return function(){var se=g;g=F;try{return C.apply(this,arguments)}finally{g=se}}}})(Pd)),Pd}var w_;function US(){return w_||(w_=1,zd.exports=NS()),zd.exports}var Fd={exports:{}},Gn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function LS(){if(R_)return Gn;R_=1;var r=yp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Gn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},Gn.flushSync=function(m){var p=u.T,_=a.p;try{if(u.T=null,a.p=2,m)return m()}finally{u.T=p,a.p=_,a.d.f()}},Gn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},Gn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Gn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:S}):_==="script"&&a.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Gn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},Gn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin);a.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Gn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},Gn.requestFormReset=function(m){a.d.r(m)},Gn.unstable_batchedUpdates=function(m,p){return m(p)},Gn.useFormState=function(m,p,_){return u.H.useFormState(m,p,_)},Gn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Gn.version="19.2.6",Gn}var C_;function OS(){if(C_)return Fd.exports;C_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Fd.exports=LS(),Fd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function IS(){if(D_)return $o;D_=1;var r=US(),e=yp(),n=OS();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(a(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===s)return m(f),t;if(d===l)return m(f),i;d=d.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=d;else{for(var x=!1,w=f.child;w;){if(w===s){x=!0,s=f,l=d;break}if(w===l){x=!0,l=f,s=d;break}w=w.sibling}if(!x){for(w=d.child;w;){if(w===s){x=!0,s=d,l=f;break}if(w===l){x=!0,l=d,s=f;break}w=w.sibling}if(!x)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function _(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=_(t),i!==null)return i;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),z=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),H=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var de=Symbol.for("react.client.reference");function me(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===de?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case k:return"Suspense";case I:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case z:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case O:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case L:return i=t.displayName||null,i!==null?i:me(t.type)||"Memo";case T:i=t._payload,t=t._init;try{return me(t(i))}catch{}}return null}var Y=Array.isArray,C=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},ge=[],we=-1;function P(t){return{current:t}}function ie(t){0>we||(t.current=ge[we],ge[we]=null,we--)}function be(t,i){we++,ge[we]=t.current,t.current=i}var Oe=P(null),He=P(null),oe=P(null),De=P(null);function Re(t,i){switch(be(oe,i),be(He,t),be(Oe,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?W0(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=W0(i),t=X0(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ie(Oe),be(Oe,t)}function $e(){ie(Oe),ie(He),ie(oe)}function st(t){t.memoizedState!==null&&be(De,t);var i=Oe.current,s=X0(i,t.type);i!==s&&(be(He,t),be(Oe,s))}function rt(t){He.current===t&&(ie(Oe),ie(He)),De.current===t&&(ie(De),Xo._currentValue=se)}var kt,mt;function Tt(t){if(kt===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);kt=i&&i[1]||"",mt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+kt+t+mt}var zt=!1;function gt(t,i){if(!t||zt)return"";zt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Ee=function(){throw Error()};if(Object.defineProperty(Ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ee,[])}catch(pe){var ue=pe}Reflect.construct(t,[],Ee)}else{try{Ee.call()}catch(pe){ue=pe}t.call(Ee.prototype)}}else{try{throw Error()}catch(pe){ue=pe}(Ee=t())&&typeof Ee.catch=="function"&&Ee.catch(function(){})}}catch(pe){if(pe&&ue&&typeof pe.stack=="string")return[pe.stack,ue.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),x=d[0],w=d[1];if(x&&w){var G=x.split(`
`),le=w.split(`
`);for(f=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;f<le.length&&!le[f].includes("DetermineComponentFrameRoot");)f++;if(l===G.length||f===le.length)for(l=G.length-1,f=le.length-1;1<=l&&0<=f&&G[l]!==le[f];)f--;for(;1<=l&&0<=f;l--,f--)if(G[l]!==le[f]){if(l!==1||f!==1)do if(l--,f--,0>f||G[l]!==le[f]){var ve=`
`+G[l].replace(" at new "," at ");return t.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",t.displayName)),ve}while(1<=l&&0<=f);break}}}finally{zt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?Tt(s):""}function fn(t,i){switch(t.tag){case 26:case 27:case 5:return Tt(t.type);case 16:return Tt("Lazy");case 13:return t.child!==i&&i!==null?Tt("Suspense Fallback"):Tt("Suspense");case 19:return Tt("SuspenseList");case 0:case 15:return gt(t.type,!1);case 11:return gt(t.type.render,!1);case 1:return gt(t.type,!0);case 31:return Tt("Activity");default:return""}}function Zt(t){try{var i="",s=null;do i+=fn(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var An=Object.prototype.hasOwnProperty,K=r.unstable_scheduleCallback,nn=r.unstable_cancelCallback,Et=r.unstable_shouldYield,Ft=r.unstable_requestPaint,ke=r.unstable_now,$t=r.unstable_getCurrentPriorityLevel,N=r.unstable_ImmediatePriority,E=r.unstable_UserBlockingPriority,ae=r.unstable_NormalPriority,xe=r.unstable_LowPriority,Ne=r.unstable_IdlePriority,he=r.log,ye=r.unstable_setDisableYieldValue,ce=null,Z=null;function Ie(t){if(typeof he=="function"&&ye(t),Z&&typeof Z.setStrictMode=="function")try{Z.setStrictMode(ce,t)}catch{}}var Ye=Math.clz32?Math.clz32:dt,We=Math.log,Ve=Math.LN2;function dt(t){return t>>>=0,t===0?32:31-(We(t)/Ve|0)|0}var ht=256,pt=262144,X=4194304;function Be(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _e(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,d=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var w=l&134217727;return w!==0?(l=w&~d,l!==0?f=Be(l):(x&=w,x!==0?f=Be(x):s||(s=w&~t,s!==0&&(f=Be(s))))):(w=l&~d,w!==0?f=Be(w):x!==0?f=Be(x):s||(s=l&~t,s!==0&&(f=Be(s)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:f}function je(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Xe(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Te(){var t=X;return X<<=1,(X&62914560)===0&&(X=4194304),t}function et(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function lt(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function an(t,i,s,l,f,d){var x=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var w=t.entanglements,G=t.expirationTimes,le=t.hiddenUpdates;for(s=x&~s;0<s;){var ve=31-Ye(s),Ee=1<<ve;w[ve]=0,G[ve]=-1;var ue=le[ve];if(ue!==null)for(le[ve]=null,ve=0;ve<ue.length;ve++){var pe=ue[ve];pe!==null&&(pe.lane&=-536870913)}s&=~Ee}l!==0&&Pt(t,l,0),d!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=d&~(x&~i))}function Pt(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Ye(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function $n(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Ye(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function Bn(t,i){var s=i&-i;return s=(s&42)!==0?1:Wi(s),(s&(t.suspendedLanes|i))!==0?0:s}function Wi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ba(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ga(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:p_(t.type))}function Ha(t,i){var s=F.p;try{return F.p=t,i()}finally{F.p=s}}var wn=Math.random().toString(36).slice(2),on="__reactFiber$"+wn,vn="__reactProps$"+wn,Kn="__reactContainer$"+wn,Xi="__reactEvents$"+wn,Ts="__reactListeners$"+wn,ca="__reactHandles$"+wn,Va="__reactResources$"+wn,Yi="__reactMarker$"+wn;function ua(t){delete t[on],delete t[vn],delete t[Xi],delete t[Ts],delete t[ca]}function Di(t){var i=t[on];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Kn]||s[on]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Q0(t);t!==null;){if(s=t[on])return s;t=Q0(t)}return i}t=s,s=t.parentNode}return null}function Ni(t){if(t=t[on]||t[Kn]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Q(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function Je(t){var i=t[Va];return i||(i=t[Va]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Ue(t){t[Yi]=!0}var Fe=new Set,A={};function V(t,i){W(t,i),W(t+"Capture",i)}function W(t,i){for(A[t]=i,t=0;t<i.length;t++)Fe.add(i[t])}var J=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$={},Le={};function Ge(t){return An.call(Le,t)?!0:An.call($,t)?!1:J.test(t)?Le[t]=!0:($[t]=!0,!1)}function Ce(t,i,s){if(Ge(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function ze(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Ae(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function Pe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Se(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function fe(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,d=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(x){s=""+x,d.call(this,x)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function qe(t){if(!t._valueTracker){var i=Se(t)?"checked":"value";t._valueTracker=fe(t,i,""+t[i])}}function ut(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Se(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Qe(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ot=/[\n"\\]/g;function yt(t){return t.replace(ot,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ke(t,i,s,l,f,d,x,w){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),i!=null?x==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+Pe(i)):t.value!==""+Pe(i)&&(t.value=""+Pe(i)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),i!=null?At(t,x,Pe(i)):s!=null?At(t,x,Pe(s)):l!=null&&t.removeAttribute("value"),f==null&&d!=null&&(t.defaultChecked=!!d),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+Pe(w):t.removeAttribute("name")}function pn(t,i,s,l,f,d,x,w){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){qe(t);return}s=s!=null?""+Pe(s):"",i=i!=null?""+Pe(i):s,w||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=w?t.checked:!!l,t.defaultChecked=!!l,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),qe(t)}function At(t,i,s){i==="number"&&Qe(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Rn(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Pe(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function si(t,i,s){if(i!=null&&(i=""+Pe(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+Pe(s):""}function Ui(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(Y(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=Pe(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),qe(t)}function ri(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Wt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ln(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||Wt.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Li(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&ln(t,f,l)}else for(var d in i)i.hasOwnProperty(d)&&ln(t,d,i[d])}function Vt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ka=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function As(t){return ka.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function fa(){}var Cu=null;function Du(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var tr=null,nr=null;function kp(t){var i=Ni(t);if(i&&(t=i.stateNode)){var s=t[vn]||null;e:switch(t=i.stateNode,i.type){case"input":if(Ke(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+yt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[vn]||null;if(!f)throw Error(a(90));Ke(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&ut(l)}break e;case"textarea":si(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Rn(t,!!s.multiple,i,!1)}}}var Nu=!1;function Wp(t,i,s){if(Nu)return t(i,s);Nu=!0;try{var l=t(i);return l}finally{if(Nu=!1,(tr!==null||nr!==null)&&(oc(),tr&&(i=tr,t=nr,nr=tr=null,kp(i),t)))for(i=0;i<t.length;i++)kp(t[i])}}function oo(t,i){var s=t.stateNode;if(s===null)return null;var l=s[vn]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var da=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uu=!1;if(da)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){Uu=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{Uu=!1}var Wa=null,Lu=null,Sl=null;function Xp(){if(Sl)return Sl;var t,i=Lu,s=i.length,l,f="value"in Wa?Wa.value:Wa.textContent,d=f.length;for(t=0;t<s&&i[t]===f[t];t++);var x=s-t;for(l=1;l<=x&&i[s-l]===f[d-l];l++);return Sl=f.slice(t,1<l?1-l:void 0)}function Ml(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function El(){return!0}function Yp(){return!1}function Qn(t){function i(s,l,f,d,x){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(s=t[w],this[w]=s?s(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?El:Yp,this.isPropagationStopped=Yp,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),i}var ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bl=Qn(ws),co=v({},ws,{view:0,detail:0}),Tx=Qn(co),Ou,Iu,uo,Tl=v({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==uo&&(uo&&t.type==="mousemove"?(Ou=t.screenX-uo.screenX,Iu=t.screenY-uo.screenY):Iu=Ou=0,uo=t),Ou)},movementY:function(t){return"movementY"in t?t.movementY:Iu}}),qp=Qn(Tl),Ax=v({},Tl,{dataTransfer:0}),wx=Qn(Ax),Rx=v({},co,{relatedTarget:0}),zu=Qn(Rx),Cx=v({},ws,{animationName:0,elapsedTime:0,pseudoElement:0}),Dx=Qn(Cx),Nx=v({},ws,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ux=Qn(Nx),Lx=v({},ws,{data:0}),jp=Qn(Lx),Ox={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ix={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Px(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=zx[t])?!!i[t]:!1}function Pu(){return Px}var Fx=v({},co,{key:function(t){if(t.key){var i=Ox[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ix[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pu,charCode:function(t){return t.type==="keypress"?Ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Bx=Qn(Fx),Gx=v({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zp=Qn(Gx),Hx=v({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pu}),Vx=Qn(Hx),kx=v({},ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wx=Qn(kx),Xx=v({},Tl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yx=Qn(Xx),qx=v({},ws,{newState:0,oldState:0}),jx=Qn(qx),Zx=[9,13,27,32],Fu=da&&"CompositionEvent"in window,fo=null;da&&"documentMode"in document&&(fo=document.documentMode);var $x=da&&"TextEvent"in window&&!fo,$p=da&&(!Fu||fo&&8<fo&&11>=fo),Kp=" ",Qp=!1;function Jp(t,i){switch(t){case"keyup":return Zx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function em(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ir=!1;function Kx(t,i){switch(t){case"compositionend":return em(i);case"keypress":return i.which!==32?null:(Qp=!0,Kp);case"textInput":return t=i.data,t===Kp&&Qp?null:t;default:return null}}function Qx(t,i){if(ir)return t==="compositionend"||!Fu&&Jp(t,i)?(t=Xp(),Sl=Lu=Wa=null,ir=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return $p&&i.locale!=="ko"?null:i.data;default:return null}}var Jx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Jx[t.type]:i==="textarea"}function nm(t,i,s,l){tr?nr?nr.push(l):nr=[l]:tr=l,i=pc(i,"onChange"),0<i.length&&(s=new bl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var ho=null,po=null;function ey(t){F0(t,0)}function Al(t){var i=Q(t);if(ut(i))return t}function im(t,i){if(t==="change")return i}var am=!1;if(da){var Bu;if(da){var Gu="oninput"in document;if(!Gu){var sm=document.createElement("div");sm.setAttribute("oninput","return;"),Gu=typeof sm.oninput=="function"}Bu=Gu}else Bu=!1;am=Bu&&(!document.documentMode||9<document.documentMode)}function rm(){ho&&(ho.detachEvent("onpropertychange",om),po=ho=null)}function om(t){if(t.propertyName==="value"&&Al(po)){var i=[];nm(i,po,t,Du(t)),Wp(ey,i)}}function ty(t,i,s){t==="focusin"?(rm(),ho=i,po=s,ho.attachEvent("onpropertychange",om)):t==="focusout"&&rm()}function ny(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Al(po)}function iy(t,i){if(t==="click")return Al(i)}function ay(t,i){if(t==="input"||t==="change")return Al(i)}function sy(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var oi=typeof Object.is=="function"?Object.is:sy;function mo(t,i){if(oi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!An.call(i,f)||!oi(t[f],i[f]))return!1}return!0}function lm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cm(t,i){var s=lm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=lm(s)}}function um(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?um(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function fm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Qe(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Qe(t.document)}return i}function Hu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var ry=da&&"documentMode"in document&&11>=document.documentMode,ar=null,Vu=null,go=null,ku=!1;function dm(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;ku||ar==null||ar!==Qe(l)||(l=ar,"selectionStart"in l&&Hu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),go&&mo(go,l)||(go=l,l=pc(Vu,"onSelect"),0<l.length&&(i=new bl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=ar)))}function Rs(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var sr={animationend:Rs("Animation","AnimationEnd"),animationiteration:Rs("Animation","AnimationIteration"),animationstart:Rs("Animation","AnimationStart"),transitionrun:Rs("Transition","TransitionRun"),transitionstart:Rs("Transition","TransitionStart"),transitioncancel:Rs("Transition","TransitionCancel"),transitionend:Rs("Transition","TransitionEnd")},Wu={},hm={};da&&(hm=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function Cs(t){if(Wu[t])return Wu[t];if(!sr[t])return t;var i=sr[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in hm)return Wu[t]=i[s];return t}var pm=Cs("animationend"),mm=Cs("animationiteration"),gm=Cs("animationstart"),oy=Cs("transitionrun"),ly=Cs("transitionstart"),cy=Cs("transitioncancel"),_m=Cs("transitionend"),vm=new Map,Xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xu.push("scrollEnd");function Oi(t,i){vm.set(t,i),V(i,[t])}var wl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},yi=[],rr=0,Yu=0;function Rl(){for(var t=rr,i=Yu=rr=0;i<t;){var s=yi[i];yi[i++]=null;var l=yi[i];yi[i++]=null;var f=yi[i];yi[i++]=null;var d=yi[i];if(yi[i++]=null,l!==null&&f!==null){var x=l.pending;x===null?f.next=f:(f.next=x.next,x.next=f),l.pending=f}d!==0&&xm(s,f,d)}}function Cl(t,i,s,l){yi[rr++]=t,yi[rr++]=i,yi[rr++]=s,yi[rr++]=l,Yu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function qu(t,i,s,l){return Cl(t,i,s,l),Dl(t)}function Ds(t,i){return Cl(t,null,null,i),Dl(t)}function xm(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,d=t.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(f=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,f&&i!==null&&(f=31-Ye(s),t=d.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),d):null}function Dl(t){if(50<Fo)throw Fo=0,id=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var or={};function uy(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(t,i,s,l){return new uy(t,i,s,l)}function ju(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ha(t,i){var s=t.alternate;return s===null?(s=li(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function ym(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Nl(t,i,s,l,f,d){var x=0;if(l=t,typeof t=="function")ju(t)&&(x=1);else if(typeof t=="string")x=mS(t,s,Oe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case U:return t=li(31,s,i,f),t.elementType=U,t.lanes=d,t;case R:return Ns(s.children,f,d,i);case M:x=8,f|=24;break;case y:return t=li(12,s,i,f|2),t.elementType=y,t.lanes=d,t;case k:return t=li(13,s,i,f),t.elementType=k,t.lanes=d,t;case I:return t=li(19,s,i,f),t.elementType=I,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z:x=10;break e;case D:x=9;break e;case O:x=11;break e;case L:x=14;break e;case T:x=16,l=null;break e}x=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=li(x,s,i,f),i.elementType=t,i.type=l,i.lanes=d,i}function Ns(t,i,s,l){return t=li(7,t,l,i),t.lanes=s,t}function Zu(t,i,s){return t=li(6,t,null,i),t.lanes=s,t}function Sm(t){var i=li(18,null,null,0);return i.stateNode=t,i}function $u(t,i,s){return i=li(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Mm=new WeakMap;function Si(t,i){if(typeof t=="object"&&t!==null){var s=Mm.get(t);return s!==void 0?s:(i={value:t,source:i,stack:Zt(i)},Mm.set(t,i),i)}return{value:t,source:i,stack:Zt(i)}}var lr=[],cr=0,Ul=null,_o=0,Mi=[],Ei=0,Xa=null,ji=1,Zi="";function pa(t,i){lr[cr++]=_o,lr[cr++]=Ul,Ul=t,_o=i}function Em(t,i,s){Mi[Ei++]=ji,Mi[Ei++]=Zi,Mi[Ei++]=Xa,Xa=t;var l=ji;t=Zi;var f=32-Ye(l)-1;l&=~(1<<f),s+=1;var d=32-Ye(i)+f;if(30<d){var x=f-f%5;d=(l&(1<<x)-1).toString(32),l>>=x,f-=x,ji=1<<32-Ye(i)+f|s<<f|l,Zi=d+t}else ji=1<<d|s<<f|l,Zi=t}function Ku(t){t.return!==null&&(pa(t,1),Em(t,1,0))}function Qu(t){for(;t===Ul;)Ul=lr[--cr],lr[cr]=null,_o=lr[--cr],lr[cr]=null;for(;t===Xa;)Xa=Mi[--Ei],Mi[Ei]=null,Zi=Mi[--Ei],Mi[Ei]=null,ji=Mi[--Ei],Mi[Ei]=null}function bm(t,i){Mi[Ei++]=ji,Mi[Ei++]=Zi,Mi[Ei++]=Xa,ji=i.id,Zi=i.overflow,Xa=t}var On=null,sn=null,Lt=!1,Ya=null,bi=!1,Ju=Error(a(519));function qa(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw vo(Si(i,t)),Ju}function Tm(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[on]=t,i[vn]=l,s){case"dialog":Rt("cancel",i),Rt("close",i);break;case"iframe":case"object":case"embed":Rt("load",i);break;case"video":case"audio":for(s=0;s<Go.length;s++)Rt(Go[s],i);break;case"source":Rt("error",i);break;case"img":case"image":case"link":Rt("error",i),Rt("load",i);break;case"details":Rt("toggle",i);break;case"input":Rt("invalid",i),pn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Rt("invalid",i);break;case"textarea":Rt("invalid",i),Ui(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||V0(i.textContent,s)?(l.popover!=null&&(Rt("beforetoggle",i),Rt("toggle",i)),l.onScroll!=null&&Rt("scroll",i),l.onScrollEnd!=null&&Rt("scrollend",i),l.onClick!=null&&(i.onclick=fa),i=!0):i=!1,i||qa(t,!0)}function Am(t){for(On=t.return;On;)switch(On.tag){case 5:case 31:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:On=On.return}}function ur(t){if(t!==On)return!1;if(!Lt)return Am(t),Lt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||vd(t.type,t.memoizedProps)),s=!s),s&&sn&&qa(t),Am(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));sn=K0(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));sn=K0(t)}else i===27?(i=sn,os(t.type)?(t=Ed,Ed=null,sn=t):sn=i):sn=On?Ai(t.stateNode.nextSibling):null;return!0}function Us(){sn=On=null,Lt=!1}function ef(){var t=Ya;return t!==null&&(ni===null?ni=t:ni.push.apply(ni,t),Ya=null),t}function vo(t){Ya===null?Ya=[t]:Ya.push(t)}var tf=P(null),Ls=null,ma=null;function ja(t,i,s){be(tf,i._currentValue),i._currentValue=s}function ga(t){t._currentValue=tf.current,ie(tf)}function nf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function af(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var d=f.dependencies;if(d!==null){var x=f.child;d=d.firstContext;e:for(;d!==null;){var w=d;d=f;for(var G=0;G<i.length;G++)if(w.context===i[G]){d.lanes|=s,w=d.alternate,w!==null&&(w.lanes|=s),nf(d.return,s,t),l||(x=null);break e}d=w.next}}else if(f.tag===18){if(x=f.return,x===null)throw Error(a(341));x.lanes|=s,d=x.alternate,d!==null&&(d.lanes|=s),nf(x,s,t),x=null}else x=f.child;if(x!==null)x.return=f;else for(x=f;x!==null;){if(x===t){x=null;break}if(f=x.sibling,f!==null){f.return=x.return,x=f;break}x=x.return}f=x}}function fr(t,i,s,l){t=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var x=f.alternate;if(x===null)throw Error(a(387));if(x=x.memoizedProps,x!==null){var w=f.type;oi(f.pendingProps.value,x.value)||(t!==null?t.push(w):t=[w])}}else if(f===De.current){if(x=f.alternate,x===null)throw Error(a(387));x.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Xo):t=[Xo])}f=f.return}t!==null&&af(i,t,s,l),i.flags|=262144}function Ll(t){for(t=t.firstContext;t!==null;){if(!oi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Os(t){Ls=t,ma=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function In(t){return wm(Ls,t)}function Ol(t,i){return Ls===null&&Os(t),wm(t,i)}function wm(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ma===null){if(t===null)throw Error(a(308));ma=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ma=ma.next=i;return s}var fy=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},dy=r.unstable_scheduleCallback,hy=r.unstable_NormalPriority,Sn={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sf(){return{controller:new fy,data:new Map,refCount:0}}function xo(t){t.refCount--,t.refCount===0&&dy(hy,function(){t.controller.abort()})}var yo=null,rf=0,dr=0,hr=null;function py(t,i){if(yo===null){var s=yo=[];rf=0,dr=cd(),hr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return rf++,i.then(Rm,Rm),i}function Rm(){if(--rf===0&&yo!==null){hr!==null&&(hr.status="fulfilled");var t=yo;yo=null,dr=0,hr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function my(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Cm=C.S;C.S=function(t,i){d0=ke(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&py(t,i),Cm!==null&&Cm(t,i)};var Is=P(null);function of(){var t=Is.current;return t!==null?t:en.pooledCache}function Il(t,i){i===null?be(Is,Is.current):be(Is,i.pool)}function Dm(){var t=of();return t===null?null:{parent:Sn._currentValue,pool:t}}var pr=Error(a(460)),lf=Error(a(474)),zl=Error(a(542)),Pl={then:function(){}};function Nm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Um(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(fa,fa),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Om(t),t;default:if(typeof i.status=="string")i.then(fa,fa);else{if(t=en,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Om(t),t}throw Ps=i,pr}}function zs(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Ps=s,pr):s}}var Ps=null;function Lm(){if(Ps===null)throw Error(a(459));var t=Ps;return Ps=null,t}function Om(t){if(t===pr||t===zl)throw Error(a(483))}var mr=null,So=0;function Fl(t){var i=So;return So+=1,mr===null&&(mr=[]),Um(mr,t,i)}function Mo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Bl(t,i){throw i.$$typeof===g?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Im(t){function i(te,j){if(t){var re=te.deletions;re===null?(te.deletions=[j],te.flags|=16):re.push(j)}}function s(te,j){if(!t)return null;for(;j!==null;)i(te,j),j=j.sibling;return null}function l(te){for(var j=new Map;te!==null;)te.key!==null?j.set(te.key,te):j.set(te.index,te),te=te.sibling;return j}function f(te,j){return te=ha(te,j),te.index=0,te.sibling=null,te}function d(te,j,re){return te.index=re,t?(re=te.alternate,re!==null?(re=re.index,re<j?(te.flags|=67108866,j):re):(te.flags|=67108866,j)):(te.flags|=1048576,j)}function x(te){return t&&te.alternate===null&&(te.flags|=67108866),te}function w(te,j,re,Me){return j===null||j.tag!==6?(j=Zu(re,te.mode,Me),j.return=te,j):(j=f(j,re),j.return=te,j)}function G(te,j,re,Me){var at=re.type;return at===R?ve(te,j,re.props.children,Me,re.key):j!==null&&(j.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===T&&zs(at)===j.type)?(j=f(j,re.props),Mo(j,re),j.return=te,j):(j=Nl(re.type,re.key,re.props,null,te.mode,Me),Mo(j,re),j.return=te,j)}function le(te,j,re,Me){return j===null||j.tag!==4||j.stateNode.containerInfo!==re.containerInfo||j.stateNode.implementation!==re.implementation?(j=$u(re,te.mode,Me),j.return=te,j):(j=f(j,re.children||[]),j.return=te,j)}function ve(te,j,re,Me,at){return j===null||j.tag!==7?(j=Ns(re,te.mode,Me,at),j.return=te,j):(j=f(j,re),j.return=te,j)}function Ee(te,j,re){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Zu(""+j,te.mode,re),j.return=te,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case S:return re=Nl(j.type,j.key,j.props,null,te.mode,re),Mo(re,j),re.return=te,re;case b:return j=$u(j,te.mode,re),j.return=te,j;case T:return j=zs(j),Ee(te,j,re)}if(Y(j)||q(j))return j=Ns(j,te.mode,re,null),j.return=te,j;if(typeof j.then=="function")return Ee(te,Fl(j),re);if(j.$$typeof===z)return Ee(te,Ol(te,j),re);Bl(te,j)}return null}function ue(te,j,re,Me){var at=j!==null?j.key:null;if(typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint")return at!==null?null:w(te,j,""+re,Me);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case S:return re.key===at?G(te,j,re,Me):null;case b:return re.key===at?le(te,j,re,Me):null;case T:return re=zs(re),ue(te,j,re,Me)}if(Y(re)||q(re))return at!==null?null:ve(te,j,re,Me,null);if(typeof re.then=="function")return ue(te,j,Fl(re),Me);if(re.$$typeof===z)return ue(te,j,Ol(te,re),Me);Bl(te,re)}return null}function pe(te,j,re,Me,at){if(typeof Me=="string"&&Me!==""||typeof Me=="number"||typeof Me=="bigint")return te=te.get(re)||null,w(j,te,""+Me,at);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case S:return te=te.get(Me.key===null?re:Me.key)||null,G(j,te,Me,at);case b:return te=te.get(Me.key===null?re:Me.key)||null,le(j,te,Me,at);case T:return Me=zs(Me),pe(te,j,re,Me,at)}if(Y(Me)||q(Me))return te=te.get(re)||null,ve(j,te,Me,at,null);if(typeof Me.then=="function")return pe(te,j,re,Fl(Me),at);if(Me.$$typeof===z)return pe(te,j,re,Ol(j,Me),at);Bl(j,Me)}return null}function tt(te,j,re,Me){for(var at=null,Bt=null,it=j,St=j=0,Nt=null;it!==null&&St<re.length;St++){it.index>St?(Nt=it,it=null):Nt=it.sibling;var Gt=ue(te,it,re[St],Me);if(Gt===null){it===null&&(it=Nt);break}t&&it&&Gt.alternate===null&&i(te,it),j=d(Gt,j,St),Bt===null?at=Gt:Bt.sibling=Gt,Bt=Gt,it=Nt}if(St===re.length)return s(te,it),Lt&&pa(te,St),at;if(it===null){for(;St<re.length;St++)it=Ee(te,re[St],Me),it!==null&&(j=d(it,j,St),Bt===null?at=it:Bt.sibling=it,Bt=it);return Lt&&pa(te,St),at}for(it=l(it);St<re.length;St++)Nt=pe(it,te,St,re[St],Me),Nt!==null&&(t&&Nt.alternate!==null&&it.delete(Nt.key===null?St:Nt.key),j=d(Nt,j,St),Bt===null?at=Nt:Bt.sibling=Nt,Bt=Nt);return t&&it.forEach(function(ds){return i(te,ds)}),Lt&&pa(te,St),at}function ct(te,j,re,Me){if(re==null)throw Error(a(151));for(var at=null,Bt=null,it=j,St=j=0,Nt=null,Gt=re.next();it!==null&&!Gt.done;St++,Gt=re.next()){it.index>St?(Nt=it,it=null):Nt=it.sibling;var ds=ue(te,it,Gt.value,Me);if(ds===null){it===null&&(it=Nt);break}t&&it&&ds.alternate===null&&i(te,it),j=d(ds,j,St),Bt===null?at=ds:Bt.sibling=ds,Bt=ds,it=Nt}if(Gt.done)return s(te,it),Lt&&pa(te,St),at;if(it===null){for(;!Gt.done;St++,Gt=re.next())Gt=Ee(te,Gt.value,Me),Gt!==null&&(j=d(Gt,j,St),Bt===null?at=Gt:Bt.sibling=Gt,Bt=Gt);return Lt&&pa(te,St),at}for(it=l(it);!Gt.done;St++,Gt=re.next())Gt=pe(it,te,St,Gt.value,Me),Gt!==null&&(t&&Gt.alternate!==null&&it.delete(Gt.key===null?St:Gt.key),j=d(Gt,j,St),Bt===null?at=Gt:Bt.sibling=Gt,Bt=Gt);return t&&it.forEach(function(AS){return i(te,AS)}),Lt&&pa(te,St),at}function Jt(te,j,re,Me){if(typeof re=="object"&&re!==null&&re.type===R&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case S:e:{for(var at=re.key;j!==null;){if(j.key===at){if(at=re.type,at===R){if(j.tag===7){s(te,j.sibling),Me=f(j,re.props.children),Me.return=te,te=Me;break e}}else if(j.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===T&&zs(at)===j.type){s(te,j.sibling),Me=f(j,re.props),Mo(Me,re),Me.return=te,te=Me;break e}s(te,j);break}else i(te,j);j=j.sibling}re.type===R?(Me=Ns(re.props.children,te.mode,Me,re.key),Me.return=te,te=Me):(Me=Nl(re.type,re.key,re.props,null,te.mode,Me),Mo(Me,re),Me.return=te,te=Me)}return x(te);case b:e:{for(at=re.key;j!==null;){if(j.key===at)if(j.tag===4&&j.stateNode.containerInfo===re.containerInfo&&j.stateNode.implementation===re.implementation){s(te,j.sibling),Me=f(j,re.children||[]),Me.return=te,te=Me;break e}else{s(te,j);break}else i(te,j);j=j.sibling}Me=$u(re,te.mode,Me),Me.return=te,te=Me}return x(te);case T:return re=zs(re),Jt(te,j,re,Me)}if(Y(re))return tt(te,j,re,Me);if(q(re)){if(at=q(re),typeof at!="function")throw Error(a(150));return re=at.call(re),ct(te,j,re,Me)}if(typeof re.then=="function")return Jt(te,j,Fl(re),Me);if(re.$$typeof===z)return Jt(te,j,Ol(te,re),Me);Bl(te,re)}return typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint"?(re=""+re,j!==null&&j.tag===6?(s(te,j.sibling),Me=f(j,re),Me.return=te,te=Me):(s(te,j),Me=Zu(re,te.mode,Me),Me.return=te,te=Me),x(te)):s(te,j)}return function(te,j,re,Me){try{So=0;var at=Jt(te,j,re,Me);return mr=null,at}catch(it){if(it===pr||it===zl)throw it;var Bt=li(29,it,null,te.mode);return Bt.lanes=Me,Bt.return=te,Bt}finally{}}}var Fs=Im(!0),zm=Im(!1),Za=!1;function cf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function $a(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ka(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ht&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Dl(t),xm(t,null,s),i}return Cl(t,l,i,s),Dl(t)}function Eo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,$n(t,s)}}function ff(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var x={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?f=d=x:d=d.next=x,s=s.next}while(s!==null);d===null?f=d=i:d=d.next=i}else f=d=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var df=!1;function bo(){if(df){var t=hr;if(t!==null)throw t}}function To(t,i,s,l){df=!1;var f=t.updateQueue;Za=!1;var d=f.firstBaseUpdate,x=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var G=w,le=G.next;G.next=null,x===null?d=le:x.next=le,x=G;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,w=ve.lastBaseUpdate,w!==x&&(w===null?ve.firstBaseUpdate=le:w.next=le,ve.lastBaseUpdate=G))}if(d!==null){var Ee=f.baseState;x=0,ve=le=G=null,w=d;do{var ue=w.lane&-536870913,pe=ue!==w.lane;if(pe?(Dt&ue)===ue:(l&ue)===ue){ue!==0&&ue===dr&&(df=!0),ve!==null&&(ve=ve.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var tt=t,ct=w;ue=i;var Jt=s;switch(ct.tag){case 1:if(tt=ct.payload,typeof tt=="function"){Ee=tt.call(Jt,Ee,ue);break e}Ee=tt;break e;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=ct.payload,ue=typeof tt=="function"?tt.call(Jt,Ee,ue):tt,ue==null)break e;Ee=v({},Ee,ue);break e;case 2:Za=!0}}ue=w.callback,ue!==null&&(t.flags|=64,pe&&(t.flags|=8192),pe=f.callbacks,pe===null?f.callbacks=[ue]:pe.push(ue))}else pe={lane:ue,tag:w.tag,payload:w.payload,callback:w.callback,next:null},ve===null?(le=ve=pe,G=Ee):ve=ve.next=pe,x|=ue;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;pe=w,w=pe.next,pe.next=null,f.lastBaseUpdate=pe,f.shared.pending=null}}while(!0);ve===null&&(G=Ee),f.baseState=G,f.firstBaseUpdate=le,f.lastBaseUpdate=ve,d===null&&(f.shared.lanes=0),ns|=x,t.lanes=x,t.memoizedState=Ee}}function Pm(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function Fm(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Pm(s[t],i)}var gr=P(null),Gl=P(0);function Bm(t,i){t=Ta,be(Gl,t),be(gr,i),Ta=t|i.baseLanes}function hf(){be(Gl,Ta),be(gr,gr.current)}function pf(){Ta=Gl.current,ie(gr),ie(Gl)}var ci=P(null),Ti=null;function Qa(t){var i=t.alternate;be(xn,xn.current&1),be(ci,t),Ti===null&&(i===null||gr.current!==null||i.memoizedState!==null)&&(Ti=t)}function mf(t){be(xn,xn.current),be(ci,t),Ti===null&&(Ti=t)}function Gm(t){t.tag===22?(be(xn,xn.current),be(ci,t),Ti===null&&(Ti=t)):Ja()}function Ja(){be(xn,xn.current),be(ci,ci.current)}function ui(t){ie(ci),Ti===t&&(Ti=null),ie(xn)}var xn=P(0);function Hl(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Sd(s)||Md(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var _a=0,xt=null,Kt=null,Mn=null,Vl=!1,_r=!1,Bs=!1,kl=0,Ao=0,vr=null,gy=0;function mn(){throw Error(a(321))}function gf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!oi(t[s],i[s]))return!1;return!0}function _f(t,i,s,l,f,d){return _a=d,xt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,C.H=t===null||t.memoizedState===null?Eg:Uf,Bs=!1,d=s(l,f),Bs=!1,_r&&(d=Vm(i,s,l,f)),Hm(t),d}function Hm(t){C.H=Co;var i=Kt!==null&&Kt.next!==null;if(_a=0,Mn=Kt=xt=null,Vl=!1,Ao=0,vr=null,i)throw Error(a(300));t===null||En||(t=t.dependencies,t!==null&&Ll(t)&&(En=!0))}function Vm(t,i,s,l){xt=t;var f=0;do{if(_r&&(vr=null),Ao=0,_r=!1,25<=f)throw Error(a(301));if(f+=1,Mn=Kt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}C.H=bg,d=i(s,l)}while(_r);return d}function _y(){var t=C.H,i=t.useState()[0];return i=typeof i.then=="function"?wo(i):i,t=t.useState()[0],(Kt!==null?Kt.memoizedState:null)!==t&&(xt.flags|=1024),i}function vf(){var t=kl!==0;return kl=0,t}function xf(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function yf(t){if(Vl){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Vl=!1}_a=0,Mn=Kt=xt=null,_r=!1,Ao=kl=0,vr=null}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mn===null?xt.memoizedState=Mn=t:Mn=Mn.next=t,Mn}function yn(){if(Kt===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=Kt.next;var i=Mn===null?xt.memoizedState:Mn.next;if(i!==null)Mn=i,Kt=t;else{if(t===null)throw xt.alternate===null?Error(a(467)):Error(a(310));Kt=t,t={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},Mn===null?xt.memoizedState=Mn=t:Mn=Mn.next=t}return Mn}function Wl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wo(t){var i=Ao;return Ao+=1,vr===null&&(vr=[]),t=Um(vr,t,i),i=xt,(Mn===null?i.memoizedState:Mn.next)===null&&(i=i.alternate,C.H=i===null||i.memoizedState===null?Eg:Uf),t}function Xl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return wo(t);if(t.$$typeof===z)return In(t)}throw Error(a(438,String(t)))}function Sf(t){var i=null,s=xt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=xt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Wl(),xt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=H;return i.index++,s}function va(t,i){return typeof i=="function"?i(t):i}function Yl(t){var i=yn();return Mf(i,Kt,t)}function Mf(t,i,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=t.baseQueue,d=l.pending;if(d!==null){if(f!==null){var x=f.next;f.next=d.next,d.next=x}i.baseQueue=f=d,l.pending=null}if(d=t.baseState,f===null)t.memoizedState=d;else{i=f.next;var w=x=null,G=null,le=i,ve=!1;do{var Ee=le.lane&-536870913;if(Ee!==le.lane?(Dt&Ee)===Ee:(_a&Ee)===Ee){var ue=le.revertLane;if(ue===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),Ee===dr&&(ve=!0);else if((_a&ue)===ue){le=le.next,ue===dr&&(ve=!0);continue}else Ee={lane:0,revertLane:le.revertLane,gesture:null,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},G===null?(w=G=Ee,x=d):G=G.next=Ee,xt.lanes|=ue,ns|=ue;Ee=le.action,Bs&&s(d,Ee),d=le.hasEagerState?le.eagerState:s(d,Ee)}else ue={lane:Ee,revertLane:le.revertLane,gesture:le.gesture,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},G===null?(w=G=ue,x=d):G=G.next=ue,xt.lanes|=Ee,ns|=Ee;le=le.next}while(le!==null&&le!==i);if(G===null?x=d:G.next=w,!oi(d,t.memoizedState)&&(En=!0,ve&&(s=hr,s!==null)))throw s;t.memoizedState=d,t.baseState=x,t.baseQueue=G,l.lastRenderedState=d}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Ef(t){var i=yn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,d=i.memoizedState;if(f!==null){s.pending=null;var x=f=f.next;do d=t(d,x.action),x=x.next;while(x!==f);oi(d,i.memoizedState)||(En=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,l]}function km(t,i,s){var l=xt,f=yn(),d=Lt;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=i();var x=!oi((Kt||f).memoizedState,s);if(x&&(f.memoizedState=s,En=!0),f=f.queue,Af(Ym.bind(null,l,f,t),[t]),f.getSnapshot!==i||x||Mn!==null&&Mn.memoizedState.tag&1){if(l.flags|=2048,xr(9,{destroy:void 0},Xm.bind(null,l,f,s,i),null),en===null)throw Error(a(349));d||(_a&127)!==0||Wm(l,i,s)}return s}function Wm(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=xt.updateQueue,i===null?(i=Wl(),xt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Xm(t,i,s,l){i.value=s,i.getSnapshot=l,qm(i)&&jm(t)}function Ym(t,i,s){return s(function(){qm(i)&&jm(t)})}function qm(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!oi(t,s)}catch{return!0}}function jm(t){var i=Ds(t,2);i!==null&&ii(i,t,2)}function bf(t){var i=Yn();if(typeof t=="function"){var s=t;if(t=s(),Bs){Ie(!0);try{s()}finally{Ie(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:t},i}function Zm(t,i,s,l){return t.baseState=s,Mf(t,Kt,typeof l=="function"?l:va)}function vy(t,i,s,l,f){if(Zl(t))throw Error(a(485));if(t=i.action,t!==null){var d={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};C.T!==null?s(!0):d.isTransition=!1,l(d),s=i.pending,s===null?(d.next=i.pending=d,$m(i,d)):(d.next=s.next,i.pending=s.next=d)}}function $m(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var d=C.T,x={};C.T=x;try{var w=s(f,l),G=C.S;G!==null&&G(x,w),Km(t,i,w)}catch(le){Tf(t,i,le)}finally{d!==null&&x.types!==null&&(d.types=x.types),C.T=d}}else try{d=s(f,l),Km(t,i,d)}catch(le){Tf(t,i,le)}}function Km(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Qm(t,i,l)},function(l){return Tf(t,i,l)}):Qm(t,i,s)}function Qm(t,i,s){i.status="fulfilled",i.value=s,Jm(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,$m(t,s)))}function Tf(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,Jm(i),i=i.next;while(i!==l)}t.action=null}function Jm(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function eg(t,i){return i}function tg(t,i){if(Lt){var s=en.formState;if(s!==null){e:{var l=xt;if(Lt){if(sn){t:{for(var f=sn,d=bi;f.nodeType!==8;){if(!d){f=null;break t}if(f=Ai(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){sn=Ai(f.nextSibling),l=f.data==="F!";break e}}qa(l)}l=!1}l&&(i=s[0])}}return s=Yn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:eg,lastRenderedState:i},s.queue=l,s=yg.bind(null,xt,l),l.dispatch=s,l=bf(!1),d=Nf.bind(null,xt,!1,l.queue),l=Yn(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=vy.bind(null,xt,f,d,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function ng(t){var i=yn();return ig(i,Kt,t)}function ig(t,i,s){if(i=Mf(t,i,eg)[0],t=Yl(va)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=wo(i)}catch(x){throw x===pr?zl:x}else l=i;i=yn();var f=i.queue,d=f.dispatch;return s!==i.memoizedState&&(xt.flags|=2048,xr(9,{destroy:void 0},xy.bind(null,f,s),null)),[l,d,t]}function xy(t,i){t.action=i}function ag(t){var i=yn(),s=Kt;if(s!==null)return ig(i,s,t);yn(),i=i.memoizedState,s=yn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function xr(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=xt.updateQueue,i===null&&(i=Wl(),xt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function sg(){return yn().memoizedState}function ql(t,i,s,l){var f=Yn();xt.flags|=t,f.memoizedState=xr(1|i,{destroy:void 0},s,l===void 0?null:l)}function jl(t,i,s,l){var f=yn();l=l===void 0?null:l;var d=f.memoizedState.inst;Kt!==null&&l!==null&&gf(l,Kt.memoizedState.deps)?f.memoizedState=xr(i,d,s,l):(xt.flags|=t,f.memoizedState=xr(1|i,d,s,l))}function rg(t,i){ql(8390656,8,t,i)}function Af(t,i){jl(2048,8,t,i)}function yy(t){xt.flags|=4;var i=xt.updateQueue;if(i===null)i=Wl(),xt.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function og(t){var i=yn().memoizedState;return yy({ref:i,nextImpl:t}),function(){if((Ht&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function lg(t,i){return jl(4,2,t,i)}function cg(t,i){return jl(4,4,t,i)}function ug(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function fg(t,i,s){s=s!=null?s.concat([t]):null,jl(4,4,ug.bind(null,i,t),s)}function wf(){}function dg(t,i){var s=yn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&gf(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function hg(t,i){var s=yn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&gf(i,l[1]))return l[0];if(l=t(),Bs){Ie(!0);try{t()}finally{Ie(!1)}}return s.memoizedState=[l,i],l}function Rf(t,i,s){return s===void 0||(_a&1073741824)!==0&&(Dt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=p0(),xt.lanes|=t,ns|=t,s)}function pg(t,i,s,l){return oi(s,i)?s:gr.current!==null?(t=Rf(t,s,l),oi(t,i)||(En=!0),t):(_a&42)===0||(_a&1073741824)!==0&&(Dt&261930)===0?(En=!0,t.memoizedState=s):(t=p0(),xt.lanes|=t,ns|=t,i)}function mg(t,i,s,l,f){var d=F.p;F.p=d!==0&&8>d?d:8;var x=C.T,w={};C.T=w,Nf(t,!1,i,s);try{var G=f(),le=C.S;if(le!==null&&le(w,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var ve=my(G,l);Ro(t,i,ve,hi(t))}else Ro(t,i,l,hi(t))}catch(Ee){Ro(t,i,{then:function(){},status:"rejected",reason:Ee},hi())}finally{F.p=d,x!==null&&w.types!==null&&(x.types=w.types),C.T=x}}function Sy(){}function Cf(t,i,s,l){if(t.tag!==5)throw Error(a(476));var f=gg(t).queue;mg(t,f,i,se,s===null?Sy:function(){return _g(t),s(l)})}function gg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:se},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function _g(t){var i=gg(t);i.next===null&&(i=t.alternate.memoizedState),Ro(t,i.next.queue,{},hi())}function Df(){return In(Xo)}function vg(){return yn().memoizedState}function xg(){return yn().memoizedState}function My(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=hi();t=$a(s);var l=Ka(i,t,s);l!==null&&(ii(l,i,s),Eo(l,i,s)),i={cache:sf()},t.payload=i;return}i=i.return}}function Ey(t,i,s){var l=hi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Zl(t)?Sg(i,s):(s=qu(t,i,s,l),s!==null&&(ii(s,t,l),Mg(s,i,l)))}function yg(t,i,s){var l=hi();Ro(t,i,s,l)}function Ro(t,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Zl(t))Sg(i,f);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var x=i.lastRenderedState,w=d(x,s);if(f.hasEagerState=!0,f.eagerState=w,oi(w,x))return Cl(t,i,f,0),en===null&&Rl(),!1}catch{}finally{}if(s=qu(t,i,f,l),s!==null)return ii(s,t,l),Mg(s,i,l),!0}return!1}function Nf(t,i,s,l){if(l={lane:2,revertLane:cd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Zl(t)){if(i)throw Error(a(479))}else i=qu(t,s,l,2),i!==null&&ii(i,t,2)}function Zl(t){var i=t.alternate;return t===xt||i!==null&&i===xt}function Sg(t,i){_r=Vl=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Mg(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,$n(t,s)}}var Co={readContext:In,use:Xl,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useLayoutEffect:mn,useInsertionEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useSyncExternalStore:mn,useId:mn,useHostTransitionStatus:mn,useFormState:mn,useActionState:mn,useOptimistic:mn,useMemoCache:mn,useCacheRefresh:mn};Co.useEffectEvent=mn;var Eg={readContext:In,use:Xl,useCallback:function(t,i){return Yn().memoizedState=[t,i===void 0?null:i],t},useContext:In,useEffect:rg,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,ql(4194308,4,ug.bind(null,i,t),s)},useLayoutEffect:function(t,i){return ql(4194308,4,t,i)},useInsertionEffect:function(t,i){ql(4,2,t,i)},useMemo:function(t,i){var s=Yn();i=i===void 0?null:i;var l=t();if(Bs){Ie(!0);try{t()}finally{Ie(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=Yn();if(s!==void 0){var f=s(i);if(Bs){Ie(!0);try{s(i)}finally{Ie(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=Ey.bind(null,xt,t),[l.memoizedState,t]},useRef:function(t){var i=Yn();return t={current:t},i.memoizedState=t},useState:function(t){t=bf(t);var i=t.queue,s=yg.bind(null,xt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:wf,useDeferredValue:function(t,i){var s=Yn();return Rf(s,t,i)},useTransition:function(){var t=bf(!1);return t=mg.bind(null,xt,t.queue,!0,!1),Yn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=xt,f=Yn();if(Lt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),en===null)throw Error(a(349));(Dt&127)!==0||Wm(l,i,s)}f.memoizedState=s;var d={value:s,getSnapshot:i};return f.queue=d,rg(Ym.bind(null,l,d,t),[t]),l.flags|=2048,xr(9,{destroy:void 0},Xm.bind(null,l,d,s,i),null),s},useId:function(){var t=Yn(),i=en.identifierPrefix;if(Lt){var s=Zi,l=ji;s=(l&~(1<<32-Ye(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=kl++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=gy++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Df,useFormState:tg,useActionState:tg,useOptimistic:function(t){var i=Yn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Nf.bind(null,xt,!0,s),s.dispatch=i,[t,i]},useMemoCache:Sf,useCacheRefresh:function(){return Yn().memoizedState=My.bind(null,xt)},useEffectEvent:function(t){var i=Yn(),s={impl:t};return i.memoizedState=s,function(){if((Ht&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},Uf={readContext:In,use:Xl,useCallback:dg,useContext:In,useEffect:Af,useImperativeHandle:fg,useInsertionEffect:lg,useLayoutEffect:cg,useMemo:hg,useReducer:Yl,useRef:sg,useState:function(){return Yl(va)},useDebugValue:wf,useDeferredValue:function(t,i){var s=yn();return pg(s,Kt.memoizedState,t,i)},useTransition:function(){var t=Yl(va)[0],i=yn().memoizedState;return[typeof t=="boolean"?t:wo(t),i]},useSyncExternalStore:km,useId:vg,useHostTransitionStatus:Df,useFormState:ng,useActionState:ng,useOptimistic:function(t,i){var s=yn();return Zm(s,Kt,t,i)},useMemoCache:Sf,useCacheRefresh:xg};Uf.useEffectEvent=og;var bg={readContext:In,use:Xl,useCallback:dg,useContext:In,useEffect:Af,useImperativeHandle:fg,useInsertionEffect:lg,useLayoutEffect:cg,useMemo:hg,useReducer:Ef,useRef:sg,useState:function(){return Ef(va)},useDebugValue:wf,useDeferredValue:function(t,i){var s=yn();return Kt===null?Rf(s,t,i):pg(s,Kt.memoizedState,t,i)},useTransition:function(){var t=Ef(va)[0],i=yn().memoizedState;return[typeof t=="boolean"?t:wo(t),i]},useSyncExternalStore:km,useId:vg,useHostTransitionStatus:Df,useFormState:ag,useActionState:ag,useOptimistic:function(t,i){var s=yn();return Kt!==null?Zm(s,Kt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Sf,useCacheRefresh:xg};bg.useEffectEvent=og;function Lf(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:v({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Of={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=hi(),f=$a(l);f.payload=i,s!=null&&(f.callback=s),i=Ka(t,f,l),i!==null&&(ii(i,t,l),Eo(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=hi(),f=$a(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Ka(t,f,l),i!==null&&(ii(i,t,l),Eo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=hi(),l=$a(s);l.tag=2,i!=null&&(l.callback=i),i=Ka(t,l,s),i!==null&&(ii(i,t,s),Eo(i,t,s))}};function Tg(t,i,s,l,f,d,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,x):i.prototype&&i.prototype.isPureReactComponent?!mo(s,l)||!mo(f,d):!0}function Ag(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Of.enqueueReplaceState(i,i.state,null)}function Gs(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=v({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function wg(t){wl(t)}function Rg(t){console.error(t)}function Cg(t){wl(t)}function $l(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Dg(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function If(t,i,s){return s=$a(s),s.tag=3,s.payload={element:null},s.callback=function(){$l(t,i)},s}function Ng(t){return t=$a(t),t.tag=3,t}function Ug(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;t.payload=function(){return f(d)},t.callback=function(){Dg(i,s,l)}}var x=s.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){Dg(i,s,l),typeof f!="function"&&(is===null?is=new Set([this]):is.add(this));var w=l.stack;this.componentDidCatch(l.value,{componentStack:w!==null?w:""})})}function by(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&fr(i,s,f,!0),s=ci.current,s!==null){switch(s.tag){case 31:case 13:return Ti===null?lc():s.alternate===null&&gn===0&&(gn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Pl?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),rd(t,l,f)),!1;case 22:return s.flags|=65536,l===Pl?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),rd(t,l,f)),!1}throw Error(a(435,s.tag))}return rd(t,l,f),lc(),!1}if(Lt)return i=ci.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Ju&&(t=Error(a(422),{cause:l}),vo(Si(t,s)))):(l!==Ju&&(i=Error(a(423),{cause:l}),vo(Si(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Si(l,s),f=If(t.stateNode,l,f),ff(t,f),gn!==4&&(gn=2)),!1;var d=Error(a(520),{cause:l});if(d=Si(d,s),Po===null?Po=[d]:Po.push(d),gn!==4&&(gn=2),i===null)return!0;l=Si(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=If(s.stateNode,l,t),ff(s,t),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(is===null||!is.has(d))))return s.flags|=65536,f&=-f,s.lanes|=f,f=Ng(f),Ug(f,t,s,l),ff(s,f),!1}s=s.return}while(s!==null);return!1}var zf=Error(a(461)),En=!1;function zn(t,i,s,l){i.child=t===null?zm(i,null,s,l):Fs(i,t.child,s,l)}function Lg(t,i,s,l,f){s=s.render;var d=i.ref;if("ref"in l){var x={};for(var w in l)w!=="ref"&&(x[w]=l[w])}else x=l;return Os(i),l=_f(t,i,s,x,d,f),w=vf(),t!==null&&!En?(xf(t,i,f),xa(t,i,f)):(Lt&&w&&Ku(i),i.flags|=1,zn(t,i,l,f),i.child)}function Og(t,i,s,l,f){if(t===null){var d=s.type;return typeof d=="function"&&!ju(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,Ig(t,i,d,l,f)):(t=Nl(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!Wf(t,f)){var x=d.memoizedProps;if(s=s.compare,s=s!==null?s:mo,s(x,l)&&t.ref===i.ref)return xa(t,i,f)}return i.flags|=1,t=ha(d,l),t.ref=i.ref,t.return=i,i.child=t}function Ig(t,i,s,l,f){if(t!==null){var d=t.memoizedProps;if(mo(d,l)&&t.ref===i.ref)if(En=!1,i.pendingProps=l=d,Wf(t,f))(t.flags&131072)!==0&&(En=!0);else return i.lanes=t.lanes,xa(t,i,f)}return Pf(t,i,s,l,f)}function zg(t,i,s,l){var f=l.children,d=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~d}else l=0,i.child=null;return Pg(t,i,d,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Il(i,d!==null?d.cachePool:null),d!==null?Bm(i,d):hf(),Gm(i);else return l=i.lanes=536870912,Pg(t,i,d!==null?d.baseLanes|s:s,s,l)}else d!==null?(Il(i,d.cachePool),Bm(i,d),Ja(),i.memoizedState=null):(t!==null&&Il(i,null),hf(),Ja());return zn(t,i,f,s),i.child}function Do(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Pg(t,i,s,l,f){var d=of();return d=d===null?null:{parent:Sn._currentValue,pool:d},i.memoizedState={baseLanes:s,cachePool:d},t!==null&&Il(i,null),hf(),Gm(i),t!==null&&fr(t,i,l,!0),i.childLanes=f,null}function Kl(t,i){return i=Jl({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function Fg(t,i,s){return Fs(i,t.child,null,s),t=Kl(i,i.pendingProps),t.flags|=2,ui(i),i.memoizedState=null,t}function Ty(t,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Lt){if(l.mode==="hidden")return t=Kl(i,l),i.lanes=536870912,Do(null,t);if(mf(i),(t=sn)?(t=$0(t,bi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Xa!==null?{id:ji,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},s=Sm(t),s.return=i,i.child=s,On=i,sn=null)):t=null,t===null)throw qa(i);return i.lanes=536870912,null}return Kl(i,l)}var d=t.memoizedState;if(d!==null){var x=d.dehydrated;if(mf(i),f)if(i.flags&256)i.flags&=-257,i=Fg(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(En||fr(t,i,s,!1),f=(s&t.childLanes)!==0,En||f){if(l=en,l!==null&&(x=Bn(l,s),x!==0&&x!==d.retryLane))throw d.retryLane=x,Ds(t,x),ii(l,t,x),zf;lc(),i=Fg(t,i,s)}else t=d.treeContext,sn=Ai(x.nextSibling),On=i,Lt=!0,Ya=null,bi=!1,t!==null&&bm(i,t),i=Kl(i,l),i.flags|=4096;return i}return t=ha(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function Ql(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Pf(t,i,s,l,f){return Os(i),s=_f(t,i,s,l,void 0,f),l=vf(),t!==null&&!En?(xf(t,i,f),xa(t,i,f)):(Lt&&l&&Ku(i),i.flags|=1,zn(t,i,s,f),i.child)}function Bg(t,i,s,l,f,d){return Os(i),i.updateQueue=null,s=Vm(i,l,s,f),Hm(t),l=vf(),t!==null&&!En?(xf(t,i,d),xa(t,i,d)):(Lt&&l&&Ku(i),i.flags|=1,zn(t,i,s,d),i.child)}function Gg(t,i,s,l,f){if(Os(i),i.stateNode===null){var d=or,x=s.contextType;typeof x=="object"&&x!==null&&(d=In(x)),d=new s(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Of,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},cf(i),x=s.contextType,d.context=typeof x=="object"&&x!==null?In(x):or,d.state=i.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(Lf(i,s,x,l),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&Of.enqueueReplaceState(d,d.state,null),To(i,l,d,f),bo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var w=i.memoizedProps,G=Gs(s,w);d.props=G;var le=d.context,ve=s.contextType;x=or,typeof ve=="object"&&ve!==null&&(x=In(ve));var Ee=s.getDerivedStateFromProps;ve=typeof Ee=="function"||typeof d.getSnapshotBeforeUpdate=="function",w=i.pendingProps!==w,ve||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(w||le!==x)&&Ag(i,d,l,x),Za=!1;var ue=i.memoizedState;d.state=ue,To(i,l,d,f),bo(),le=i.memoizedState,w||ue!==le||Za?(typeof Ee=="function"&&(Lf(i,s,Ee,l),le=i.memoizedState),(G=Za||Tg(i,s,G,l,ue,le,x))?(ve||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=le),d.props=l,d.state=le,d.context=x,l=G):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,uf(t,i),x=i.memoizedProps,ve=Gs(s,x),d.props=ve,Ee=i.pendingProps,ue=d.context,le=s.contextType,G=or,typeof le=="object"&&le!==null&&(G=In(le)),w=s.getDerivedStateFromProps,(le=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==Ee||ue!==G)&&Ag(i,d,l,G),Za=!1,ue=i.memoizedState,d.state=ue,To(i,l,d,f),bo();var pe=i.memoizedState;x!==Ee||ue!==pe||Za||t!==null&&t.dependencies!==null&&Ll(t.dependencies)?(typeof w=="function"&&(Lf(i,s,w,l),pe=i.memoizedState),(ve=Za||Tg(i,s,ve,l,ue,pe,G)||t!==null&&t.dependencies!==null&&Ll(t.dependencies))?(le||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,pe,G),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,pe,G)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&ue===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&ue===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=pe),d.props=l,d.state=pe,d.context=G,l=ve):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&ue===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&ue===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,Ql(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=Fs(i,t.child,null,f),i.child=Fs(i,null,s,f)):zn(t,i,s,f),i.memoizedState=d.state,t=i.child):t=xa(t,i,f),t}function Hg(t,i,s,l){return Us(),i.flags|=256,zn(t,i,s,l),i.child}var Ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bf(t){return{baseLanes:t,cachePool:Dm()}}function Gf(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=di),t}function Vg(t,i,s){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,x;if((x=d)||(x=t!==null&&t.memoizedState===null?!1:(xn.current&2)!==0),x&&(f=!0,i.flags&=-129),x=(i.flags&32)!==0,i.flags&=-33,t===null){if(Lt){if(f?Qa(i):Ja(),(t=sn)?(t=$0(t,bi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Xa!==null?{id:ji,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},s=Sm(t),s.return=i,i.child=s,On=i,sn=null)):t=null,t===null)throw qa(i);return Md(t)?i.lanes=32:i.lanes=536870912,null}var w=l.children;return l=l.fallback,f?(Ja(),f=i.mode,w=Jl({mode:"hidden",children:w},f),l=Ns(l,f,s,null),w.return=i,l.return=i,w.sibling=l,i.child=w,l=i.child,l.memoizedState=Bf(s),l.childLanes=Gf(t,x,s),i.memoizedState=Ff,Do(null,l)):(Qa(i),Hf(i,w))}var G=t.memoizedState;if(G!==null&&(w=G.dehydrated,w!==null)){if(d)i.flags&256?(Qa(i),i.flags&=-257,i=Vf(t,i,s)):i.memoizedState!==null?(Ja(),i.child=t.child,i.flags|=128,i=null):(Ja(),w=l.fallback,f=i.mode,l=Jl({mode:"visible",children:l.children},f),w=Ns(w,f,s,null),w.flags|=2,l.return=i,w.return=i,l.sibling=w,i.child=l,Fs(i,t.child,null,s),l=i.child,l.memoizedState=Bf(s),l.childLanes=Gf(t,x,s),i.memoizedState=Ff,i=Do(null,l));else if(Qa(i),Md(w)){if(x=w.nextSibling&&w.nextSibling.dataset,x)var le=x.dgst;x=le,l=Error(a(419)),l.stack="",l.digest=x,vo({value:l,source:null,stack:null}),i=Vf(t,i,s)}else if(En||fr(t,i,s,!1),x=(s&t.childLanes)!==0,En||x){if(x=en,x!==null&&(l=Bn(x,s),l!==0&&l!==G.retryLane))throw G.retryLane=l,Ds(t,l),ii(x,t,l),zf;Sd(w)||lc(),i=Vf(t,i,s)}else Sd(w)?(i.flags|=192,i.child=t.child,i=null):(t=G.treeContext,sn=Ai(w.nextSibling),On=i,Lt=!0,Ya=null,bi=!1,t!==null&&bm(i,t),i=Hf(i,l.children),i.flags|=4096);return i}return f?(Ja(),w=l.fallback,f=i.mode,G=t.child,le=G.sibling,l=ha(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,le!==null?w=ha(le,w):(w=Ns(w,f,s,null),w.flags|=2),w.return=i,l.return=i,l.sibling=w,i.child=l,Do(null,l),l=i.child,w=t.child.memoizedState,w===null?w=Bf(s):(f=w.cachePool,f!==null?(G=Sn._currentValue,f=f.parent!==G?{parent:G,pool:G}:f):f=Dm(),w={baseLanes:w.baseLanes|s,cachePool:f}),l.memoizedState=w,l.childLanes=Gf(t,x,s),i.memoizedState=Ff,Do(t.child,l)):(Qa(i),s=t.child,t=s.sibling,s=ha(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(x=i.deletions,x===null?(i.deletions=[t],i.flags|=16):x.push(t)),i.child=s,i.memoizedState=null,s)}function Hf(t,i){return i=Jl({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Jl(t,i){return t=li(22,t,null,i),t.lanes=0,t}function Vf(t,i,s){return Fs(i,t.child,null,s),t=Hf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function kg(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),nf(t.return,i,s)}function kf(t,i,s,l,f,d){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:d}:(x.isBackwards=i,x.rendering=null,x.renderingStartTime=0,x.last=l,x.tail=s,x.tailMode=f,x.treeForkCount=d)}function Wg(t,i,s){var l=i.pendingProps,f=l.revealOrder,d=l.tail;l=l.children;var x=xn.current,w=(x&2)!==0;if(w?(x=x&1|2,i.flags|=128):x&=1,be(xn,x),zn(t,i,l,s),l=Lt?_o:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kg(t,s,i);else if(t.tag===19)kg(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&Hl(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),kf(i,!1,f,s,d,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Hl(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}kf(i,!0,s,null,d,l);break;case"together":kf(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function xa(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),ns|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(fr(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=ha(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ha(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Wf(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Ll(t)))}function Ay(t,i,s){switch(i.tag){case 3:Re(i,i.stateNode.containerInfo),ja(i,Sn,t.memoizedState.cache),Us();break;case 27:case 5:st(i);break;case 4:Re(i,i.stateNode.containerInfo);break;case 10:ja(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,mf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Qa(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Vg(t,i,s):(Qa(i),t=xa(t,i,s),t!==null?t.sibling:null);Qa(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(fr(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return Wg(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),be(xn,xn.current),l)break;return null;case 22:return i.lanes=0,zg(t,i,s,i.pendingProps);case 24:ja(i,Sn,t.memoizedState.cache)}return xa(t,i,s)}function Xg(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)En=!0;else{if(!Wf(t,s)&&(i.flags&128)===0)return En=!1,Ay(t,i,s);En=(t.flags&131072)!==0}else En=!1,Lt&&(i.flags&1048576)!==0&&Em(i,_o,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=zs(i.elementType),i.type=t,typeof t=="function")ju(t)?(l=Gs(t,l),i.tag=1,i=Gg(null,i,t,l,s)):(i.tag=0,i=Pf(null,i,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===O){i.tag=11,i=Lg(null,i,t,l,s);break e}else if(f===L){i.tag=14,i=Og(null,i,t,l,s);break e}}throw i=me(t)||t,Error(a(306,i,""))}}return i;case 0:return Pf(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Gs(l,i.pendingProps),Gg(t,i,l,f,s);case 3:e:{if(Re(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,uf(t,i),To(i,l,null,s);var x=i.memoizedState;if(l=x.cache,ja(i,Sn,l),l!==d.cache&&af(i,[Sn],s,!0),bo(),l=x.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:x.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Hg(t,i,l,s);break e}else if(l!==f){f=Si(Error(a(424)),i),vo(f),i=Hg(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(sn=Ai(t.firstChild),On=i,Lt=!0,Ya=null,bi=!0,s=zm(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Us(),l===f){i=xa(t,i,s);break e}zn(t,i,l,s)}i=i.child}return i;case 26:return Ql(t,i),t===null?(s=n_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Lt||(s=i.type,t=i.pendingProps,l=mc(oe.current).createElement(s),l[on]=i,l[vn]=t,Pn(l,s,t),Ue(l),i.stateNode=l):i.memoizedState=n_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return st(i),t===null&&Lt&&(l=i.stateNode=J0(i.type,i.pendingProps,oe.current),On=i,bi=!0,f=sn,os(i.type)?(Ed=f,sn=Ai(l.firstChild)):sn=f),zn(t,i,i.pendingProps.children,s),Ql(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Lt&&((f=l=sn)&&(l=nS(l,i.type,i.pendingProps,bi),l!==null?(i.stateNode=l,On=i,sn=Ai(l.firstChild),bi=!1,f=!0):f=!1),f||qa(i)),st(i),f=i.type,d=i.pendingProps,x=t!==null?t.memoizedProps:null,l=d.children,vd(f,d)?l=null:x!==null&&vd(f,x)&&(i.flags|=32),i.memoizedState!==null&&(f=_f(t,i,_y,null,null,s),Xo._currentValue=f),Ql(t,i),zn(t,i,l,s),i.child;case 6:return t===null&&Lt&&((t=s=sn)&&(s=iS(s,i.pendingProps,bi),s!==null?(i.stateNode=s,On=i,sn=null,t=!0):t=!1),t||qa(i)),null;case 13:return Vg(t,i,s);case 4:return Re(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Fs(i,null,l,s):zn(t,i,l,s),i.child;case 11:return Lg(t,i,i.type,i.pendingProps,s);case 7:return zn(t,i,i.pendingProps,s),i.child;case 8:return zn(t,i,i.pendingProps.children,s),i.child;case 12:return zn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,ja(i,i.type,l.value),zn(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Os(i),f=In(f),l=l(f),i.flags|=1,zn(t,i,l,s),i.child;case 14:return Og(t,i,i.type,i.pendingProps,s);case 15:return Ig(t,i,i.type,i.pendingProps,s);case 19:return Wg(t,i,s);case 31:return Ty(t,i,s);case 22:return zg(t,i,s,i.pendingProps);case 24:return Os(i),l=In(Sn),t===null?(f=of(),f===null&&(f=en,d=sf(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=s),f=d),i.memoizedState={parent:l,cache:f},cf(i),ja(i,Sn,f)):((t.lanes&s)!==0&&(uf(t,i),To(i,null,null,s),bo()),f=t.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),ja(i,Sn,l)):(l=d.cache,ja(i,Sn,l),l!==f.cache&&af(i,[Sn],s,!0))),zn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ya(t){t.flags|=4}function Xf(t,i,s,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(v0())t.flags|=8192;else throw Ps=Pl,lf}else t.flags&=-16777217}function Yg(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!o_(i))if(v0())t.flags|=8192;else throw Ps=Pl,lf}function ec(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Te():536870912,t.lanes|=i,Er|=i)}function No(t,i){if(!Lt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function rn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function wy(t,i,s){var l=i.pendingProps;switch(Qu(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(i),null;case 1:return rn(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ga(Sn),$e(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(ur(i)?ya(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ef())),rn(i),null;case 26:var f=i.type,d=i.memoizedState;return t===null?(ya(i),d!==null?(rn(i),Yg(i,d)):(rn(i),Xf(i,f,null,l,s))):d?d!==t.memoizedState?(ya(i),rn(i),Yg(i,d)):(rn(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&ya(i),rn(i),Xf(i,f,t,l,s)),null;case 27:if(rt(i),s=oe.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ya(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return rn(i),null}t=Oe.current,ur(i)?Tm(i):(t=J0(f,l,s),i.stateNode=t,ya(i))}return rn(i),null;case 5:if(rt(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ya(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return rn(i),null}if(d=Oe.current,ur(i))Tm(i);else{var x=mc(oe.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?x.createElement("select",{is:l.is}):x.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?x.createElement(f,{is:l.is}):x.createElement(f)}}d[on]=i,d[vn]=l;e:for(x=i.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===i)break e;for(;x.sibling===null;){if(x.return===null||x.return===i)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}i.stateNode=d;e:switch(Pn(d,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ya(i)}}return rn(i),Xf(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&ya(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=oe.current,ur(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=On,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[on]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||V0(t.nodeValue,s)),t||qa(i,!0)}else t=mc(t).createTextNode(l),t[on]=i,i.stateNode=t}return rn(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=ur(i),s!==null){if(t===null){if(!l)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[on]=i}else Us(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;rn(i),t=!1}else s=ef(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(ui(i),i):(ui(i),null);if((i.flags&128)!==0)throw Error(a(558))}return rn(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=ur(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[on]=i}else Us(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;rn(i),f=!1}else f=ef(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ui(i),i):(ui(i),null)}return ui(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),ec(i,i.updateQueue),rn(i),null);case 4:return $e(),t===null&&hd(i.stateNode.containerInfo),rn(i),null;case 10:return ga(i.type),rn(i),null;case 19:if(ie(xn),l=i.memoizedState,l===null)return rn(i),null;if(f=(i.flags&128)!==0,d=l.rendering,d===null)if(f)No(l,!1);else{if(gn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=Hl(t),d!==null){for(i.flags|=128,No(l,!1),t=d.updateQueue,i.updateQueue=t,ec(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)ym(s,t),s=s.sibling;return be(xn,xn.current&1|2),Lt&&pa(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&ke()>sc&&(i.flags|=128,f=!0,No(l,!1),i.lanes=4194304)}else{if(!f)if(t=Hl(d),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,ec(i,t),No(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Lt)return rn(i),null}else 2*ke()-l.renderingStartTime>sc&&s!==536870912&&(i.flags|=128,f=!0,No(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(t=l.last,t!==null?t.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ke(),t.sibling=null,s=xn.current,be(xn,f?s&1|2:s&1),Lt&&pa(i,l.treeForkCount),t):(rn(i),null);case 22:case 23:return ui(i),pf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(rn(i),i.subtreeFlags&6&&(i.flags|=8192)):rn(i),s=i.updateQueue,s!==null&&ec(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&ie(Is),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ga(Sn),rn(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Ry(t,i){switch(Qu(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ga(Sn),$e(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return rt(i),null;case 31:if(i.memoizedState!==null){if(ui(i),i.alternate===null)throw Error(a(340));Us()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(ui(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Us()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ie(xn),null;case 4:return $e(),null;case 10:return ga(i.type),null;case 22:case 23:return ui(i),pf(),t!==null&&ie(Is),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return ga(Sn),null;case 25:return null;default:return null}}function qg(t,i){switch(Qu(i),i.tag){case 3:ga(Sn),$e();break;case 26:case 27:case 5:rt(i);break;case 4:$e();break;case 31:i.memoizedState!==null&&ui(i);break;case 13:ui(i);break;case 19:ie(xn);break;case 10:ga(i.type);break;case 22:case 23:ui(i),pf(),t!==null&&ie(Is);break;case 24:ga(Sn)}}function Uo(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var d=s.create,x=s.inst;l=d(),x.destroy=l}s=s.next}while(s!==f)}}catch(w){Yt(i,i.return,w)}}function es(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&t)===t){var x=l.inst,w=x.destroy;if(w!==void 0){x.destroy=void 0,f=i;var G=s,le=w;try{le()}catch(ve){Yt(f,G,ve)}}}l=l.next}while(l!==d)}}catch(ve){Yt(i,i.return,ve)}}function jg(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{Fm(i,s)}catch(l){Yt(t,t.return,l)}}}function Zg(t,i,s){s.props=Gs(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Yt(t,i,l)}}function Lo(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Yt(t,i,f)}}function $i(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Yt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Yt(t,i,f)}else s.current=null}function $g(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Yt(t,t.return,f)}}function Yf(t,i,s){try{var l=t.stateNode;$y(l,t.type,s,i),l[vn]=i}catch(f){Yt(t,t.return,f)}}function Kg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&os(t.type)||t.tag===4}function qf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Kg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&os(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jf(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=fa));else if(l!==4&&(l===27&&os(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(jf(t,i,s),t=t.sibling;t!==null;)jf(t,i,s),t=t.sibling}function tc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&os(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(tc(t,i,s),t=t.sibling;t!==null;)tc(t,i,s),t=t.sibling}function Qg(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Pn(i,l,s),i[on]=t,i[vn]=s}catch(d){Yt(t,t.return,d)}}var Sa=!1,bn=!1,Zf=!1,Jg=typeof WeakSet=="function"?WeakSet:Set,Un=null;function Cy(t,i){if(t=t.containerInfo,gd=Mc,t=fm(t),Hu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var x=0,w=-1,G=-1,le=0,ve=0,Ee=t,ue=null;t:for(;;){for(var pe;Ee!==s||f!==0&&Ee.nodeType!==3||(w=x+f),Ee!==d||l!==0&&Ee.nodeType!==3||(G=x+l),Ee.nodeType===3&&(x+=Ee.nodeValue.length),(pe=Ee.firstChild)!==null;)ue=Ee,Ee=pe;for(;;){if(Ee===t)break t;if(ue===s&&++le===f&&(w=x),ue===d&&++ve===l&&(G=x),(pe=Ee.nextSibling)!==null)break;Ee=ue,ue=Ee.parentNode}Ee=pe}s=w===-1||G===-1?null:{start:w,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(_d={focusedElem:t,selectionRange:s},Mc=!1,Un=i;Un!==null;)if(i=Un,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Un=t;else for(;Un!==null;){switch(i=Un,d=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,s=i,f=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var tt=Gs(s.type,f);t=l.getSnapshotBeforeUpdate(tt,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(ct){Yt(s,s.return,ct)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)yd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":yd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,Un=t;break}Un=i.return}}function e0(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ea(t,s),l&4&&Uo(5,s);break;case 1:if(Ea(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(x){Yt(s,s.return,x)}else{var f=Gs(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Yt(s,s.return,x)}}l&64&&jg(s),l&512&&Lo(s,s.return);break;case 3:if(Ea(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Fm(t,i)}catch(x){Yt(s,s.return,x)}}break;case 27:i===null&&l&4&&Qg(s);case 26:case 5:Ea(t,s),i===null&&l&4&&$g(s),l&512&&Lo(s,s.return);break;case 12:Ea(t,s);break;case 31:Ea(t,s),l&4&&i0(t,s);break;case 13:Ea(t,s),l&4&&a0(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=Fy.bind(null,s),aS(t,s))));break;case 22:if(l=s.memoizedState!==null||Sa,!l){i=i!==null&&i.memoizedState!==null||bn,f=Sa;var d=bn;Sa=l,(bn=i)&&!d?ba(t,s,(s.subtreeFlags&8772)!==0):Ea(t,s),Sa=f,bn=d}break;case 30:break;default:Ea(t,s)}}function t0(t){var i=t.alternate;i!==null&&(t.alternate=null,t0(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&ua(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var cn=null,Jn=!1;function Ma(t,i,s){for(s=s.child;s!==null;)n0(t,i,s),s=s.sibling}function n0(t,i,s){if(Z&&typeof Z.onCommitFiberUnmount=="function")try{Z.onCommitFiberUnmount(ce,s)}catch{}switch(s.tag){case 26:bn||$i(s,i),Ma(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:bn||$i(s,i);var l=cn,f=Jn;os(s.type)&&(cn=s.stateNode,Jn=!1),Ma(t,i,s),Vo(s.stateNode),cn=l,Jn=f;break;case 5:bn||$i(s,i);case 6:if(l=cn,f=Jn,cn=null,Ma(t,i,s),cn=l,Jn=f,cn!==null)if(Jn)try{(cn.nodeType===9?cn.body:cn.nodeName==="HTML"?cn.ownerDocument.body:cn).removeChild(s.stateNode)}catch(d){Yt(s,i,d)}else try{cn.removeChild(s.stateNode)}catch(d){Yt(s,i,d)}break;case 18:cn!==null&&(Jn?(t=cn,j0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Nr(t)):j0(cn,s.stateNode));break;case 4:l=cn,f=Jn,cn=s.stateNode.containerInfo,Jn=!0,Ma(t,i,s),cn=l,Jn=f;break;case 0:case 11:case 14:case 15:es(2,s,i),bn||es(4,s,i),Ma(t,i,s);break;case 1:bn||($i(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Zg(s,i,l)),Ma(t,i,s);break;case 21:Ma(t,i,s);break;case 22:bn=(l=bn)||s.memoizedState!==null,Ma(t,i,s),bn=l;break;default:Ma(t,i,s)}}function i0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Nr(t)}catch(s){Yt(i,i.return,s)}}}function a0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Nr(t)}catch(s){Yt(i,i.return,s)}}function Dy(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new Jg),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new Jg),i;default:throw Error(a(435,t.tag))}}function nc(t,i){var s=Dy(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=By.bind(null,t,l);l.then(f,f)}})}function ei(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],d=t,x=i,w=x;e:for(;w!==null;){switch(w.tag){case 27:if(os(w.type)){cn=w.stateNode,Jn=!1;break e}break;case 5:cn=w.stateNode,Jn=!1;break e;case 3:case 4:cn=w.stateNode.containerInfo,Jn=!0;break e}w=w.return}if(cn===null)throw Error(a(160));n0(d,x,f),cn=null,Jn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)s0(i,t),i=i.sibling}var Ii=null;function s0(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ei(i,t),ti(t),l&4&&(es(3,t,t.return),Uo(3,t),es(5,t,t.return));break;case 1:ei(i,t),ti(t),l&512&&(bn||s===null||$i(s,s.return)),l&64&&Sa&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Ii;if(ei(i,t),ti(t),l&512&&(bn||s===null||$i(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[Yi]||d[on]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),Pn(d,l,s),d[on]=t,Ue(d),l=d;break e;case"link":var x=s_("link","href",f).get(l+(s.href||""));if(x){for(var w=0;w<x.length;w++)if(d=x[w],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){x.splice(w,1);break t}}d=f.createElement(l),Pn(d,l,s),f.head.appendChild(d);break;case"meta":if(x=s_("meta","content",f).get(l+(s.content||""))){for(w=0;w<x.length;w++)if(d=x[w],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){x.splice(w,1);break t}}d=f.createElement(l),Pn(d,l,s),f.head.appendChild(d);break;default:throw Error(a(468,l))}d[on]=t,Ue(d),l=d}t.stateNode=l}else r_(f,t.type,t.stateNode);else t.stateNode=a_(f,l,t.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?r_(f,t.type,t.stateNode):a_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Yf(t,t.memoizedProps,s.memoizedProps)}break;case 27:ei(i,t),ti(t),l&512&&(bn||s===null||$i(s,s.return)),s!==null&&l&4&&Yf(t,t.memoizedProps,s.memoizedProps);break;case 5:if(ei(i,t),ti(t),l&512&&(bn||s===null||$i(s,s.return)),t.flags&32){f=t.stateNode;try{ri(f,"")}catch(tt){Yt(t,t.return,tt)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Yf(t,f,s!==null?s.memoizedProps:f)),l&1024&&(Zf=!0);break;case 6:if(ei(i,t),ti(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(tt){Yt(t,t.return,tt)}}break;case 3:if(vc=null,f=Ii,Ii=gc(i.containerInfo),ei(i,t),Ii=f,ti(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Nr(i.containerInfo)}catch(tt){Yt(t,t.return,tt)}Zf&&(Zf=!1,r0(t));break;case 4:l=Ii,Ii=gc(t.stateNode.containerInfo),ei(i,t),ti(t),Ii=l;break;case 12:ei(i,t),ti(t);break;case 31:ei(i,t),ti(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,nc(t,l)));break;case 13:ei(i,t),ti(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(ac=ke()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,nc(t,l)));break;case 22:f=t.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,le=Sa,ve=bn;if(Sa=le||f,bn=ve||G,ei(i,t),bn=ve,Sa=le,ti(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||G||Sa||bn||Hs(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){G=s=i;try{if(d=G.stateNode,f)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{w=G.stateNode;var Ee=G.memoizedProps.style,ue=Ee!=null&&Ee.hasOwnProperty("display")?Ee.display:null;w.style.display=ue==null||typeof ue=="boolean"?"":(""+ue).trim()}}catch(tt){Yt(G,G.return,tt)}}}else if(i.tag===6){if(s===null){G=i;try{G.stateNode.nodeValue=f?"":G.memoizedProps}catch(tt){Yt(G,G.return,tt)}}}else if(i.tag===18){if(s===null){G=i;try{var pe=G.stateNode;f?Z0(pe,!0):Z0(G.stateNode,!1)}catch(tt){Yt(G,G.return,tt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,nc(t,s))));break;case 19:ei(i,t),ti(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,nc(t,l)));break;case 30:break;case 21:break;default:ei(i,t),ti(t)}}function ti(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(Kg(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,d=qf(t);tc(t,d,f);break;case 5:var x=s.stateNode;s.flags&32&&(ri(x,""),s.flags&=-33);var w=qf(t);tc(t,w,x);break;case 3:case 4:var G=s.stateNode.containerInfo,le=qf(t);jf(t,le,G);break;default:throw Error(a(161))}}catch(ve){Yt(t,t.return,ve)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function r0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;r0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Ea(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)e0(t,i.alternate,i),i=i.sibling}function Hs(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:es(4,i,i.return),Hs(i);break;case 1:$i(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Zg(i,i.return,s),Hs(i);break;case 27:Vo(i.stateNode);case 26:case 5:$i(i,i.return),Hs(i);break;case 22:i.memoizedState===null&&Hs(i);break;case 30:Hs(i);break;default:Hs(i)}t=t.sibling}}function ba(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,d=i,x=d.flags;switch(d.tag){case 0:case 11:case 15:ba(f,d,s),Uo(4,d);break;case 1:if(ba(f,d,s),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(le){Yt(l,l.return,le)}if(l=d,f=l.updateQueue,f!==null){var w=l.stateNode;try{var G=f.shared.hiddenCallbacks;if(G!==null)for(f.shared.hiddenCallbacks=null,f=0;f<G.length;f++)Pm(G[f],w)}catch(le){Yt(l,l.return,le)}}s&&x&64&&jg(d),Lo(d,d.return);break;case 27:Qg(d);case 26:case 5:ba(f,d,s),s&&l===null&&x&4&&$g(d),Lo(d,d.return);break;case 12:ba(f,d,s);break;case 31:ba(f,d,s),s&&x&4&&i0(f,d);break;case 13:ba(f,d,s),s&&x&4&&a0(f,d);break;case 22:d.memoizedState===null&&ba(f,d,s),Lo(d,d.return);break;case 30:break;default:ba(f,d,s)}i=i.sibling}}function $f(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&xo(s))}function Kf(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&xo(t))}function zi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)o0(t,i,s,l),i=i.sibling}function o0(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:zi(t,i,s,l),f&2048&&Uo(9,i);break;case 1:zi(t,i,s,l);break;case 3:zi(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&xo(t)));break;case 12:if(f&2048){zi(t,i,s,l),t=i.stateNode;try{var d=i.memoizedProps,x=d.id,w=d.onPostCommit;typeof w=="function"&&w(x,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){Yt(i,i.return,G)}}else zi(t,i,s,l);break;case 31:zi(t,i,s,l);break;case 13:zi(t,i,s,l);break;case 23:break;case 22:d=i.stateNode,x=i.alternate,i.memoizedState!==null?d._visibility&2?zi(t,i,s,l):Oo(t,i):d._visibility&2?zi(t,i,s,l):(d._visibility|=2,yr(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&$f(x,i);break;case 24:zi(t,i,s,l),f&2048&&Kf(i.alternate,i);break;default:zi(t,i,s,l)}}function yr(t,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=t,x=i,w=s,G=l,le=x.flags;switch(x.tag){case 0:case 11:case 15:yr(d,x,w,G,f),Uo(8,x);break;case 23:break;case 22:var ve=x.stateNode;x.memoizedState!==null?ve._visibility&2?yr(d,x,w,G,f):Oo(d,x):(ve._visibility|=2,yr(d,x,w,G,f)),f&&le&2048&&$f(x.alternate,x);break;case 24:yr(d,x,w,G,f),f&&le&2048&&Kf(x.alternate,x);break;default:yr(d,x,w,G,f)}i=i.sibling}}function Oo(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:Oo(s,l),f&2048&&$f(l.alternate,l);break;case 24:Oo(s,l),f&2048&&Kf(l.alternate,l);break;default:Oo(s,l)}i=i.sibling}}var Io=8192;function Sr(t,i,s){if(t.subtreeFlags&Io)for(t=t.child;t!==null;)l0(t,i,s),t=t.sibling}function l0(t,i,s){switch(t.tag){case 26:Sr(t,i,s),t.flags&Io&&t.memoizedState!==null&&gS(s,Ii,t.memoizedState,t.memoizedProps);break;case 5:Sr(t,i,s);break;case 3:case 4:var l=Ii;Ii=gc(t.stateNode.containerInfo),Sr(t,i,s),Ii=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Io,Io=16777216,Sr(t,i,s),Io=l):Sr(t,i,s));break;default:Sr(t,i,s)}}function c0(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function zo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Un=l,f0(l,t)}c0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)u0(t),t=t.sibling}function u0(t){switch(t.tag){case 0:case 11:case 15:zo(t),t.flags&2048&&es(9,t,t.return);break;case 3:zo(t);break;case 12:zo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,ic(t)):zo(t);break;default:zo(t)}}function ic(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Un=l,f0(l,t)}c0(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:es(8,i,i.return),ic(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,ic(i));break;default:ic(i)}t=t.sibling}}function f0(t,i){for(;Un!==null;){var s=Un;switch(s.tag){case 0:case 11:case 15:es(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:xo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Un=l;else e:for(s=t;Un!==null;){l=Un;var f=l.sibling,d=l.return;if(t0(l),l===s){Un=null;break e}if(f!==null){f.return=d,Un=f;break e}Un=d}}}var Ny={getCacheForType:function(t){var i=In(Sn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return In(Sn).controller.signal}},Uy=typeof WeakMap=="function"?WeakMap:Map,Ht=0,en=null,wt=null,Dt=0,Xt=0,fi=null,ts=!1,Mr=!1,Qf=!1,Ta=0,gn=0,ns=0,Vs=0,Jf=0,di=0,Er=0,Po=null,ni=null,ed=!1,ac=0,d0=0,sc=1/0,rc=null,is=null,Cn=0,as=null,br=null,Aa=0,td=0,nd=null,h0=null,Fo=0,id=null;function hi(){return(Ht&2)!==0&&Dt!==0?Dt&-Dt:C.T!==null?cd():Ga()}function p0(){if(di===0)if((Dt&536870912)===0||Lt){var t=pt;pt<<=1,(pt&3932160)===0&&(pt=262144),di=t}else di=536870912;return t=ci.current,t!==null&&(t.flags|=32),di}function ii(t,i,s){(t===en&&(Xt===2||Xt===9)||t.cancelPendingCommit!==null)&&(Tr(t,0),ss(t,Dt,di,!1)),lt(t,s),((Ht&2)===0||t!==en)&&(t===en&&((Ht&2)===0&&(Vs|=s),gn===4&&ss(t,Dt,di,!1)),Ki(t))}function m0(t,i,s){if((Ht&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||je(t,i),f=l?Iy(t,i):sd(t,i,!0),d=l;do{if(f===0){Mr&&!l&&ss(t,i,0,!1);break}else{if(s=t.current.alternate,d&&!Ly(s)){f=sd(t,i,!1),d=!1;continue}if(f===2){if(d=i,t.errorRecoveryDisabledLanes&d)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){i=x;e:{var w=t;f=Po;var G=w.current.memoizedState.isDehydrated;if(G&&(Tr(w,x).flags|=256),x=sd(w,x,!1),x!==2){if(Qf&&!G){w.errorRecoveryDisabledLanes|=d,Vs|=d,f=4;break e}d=ni,ni=f,d!==null&&(ni===null?ni=d:ni.push.apply(ni,d))}f=x}if(d=!1,f!==2)continue}}if(f===1){Tr(t,0),ss(t,i,0,!0);break}e:{switch(l=t,d=f,d){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:ss(l,i,di,!ts);break e;case 2:ni=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=ac+300-ke(),10<f)){if(ss(l,i,di,!ts),_e(l,0,!0)!==0)break e;Aa=i,l.timeoutHandle=Y0(g0.bind(null,l,s,ni,rc,ed,i,di,Vs,Er,ts,d,"Throttled",-0,0),f);break e}g0(l,s,ni,rc,ed,i,di,Vs,Er,ts,d,null,-0,0)}}break}while(!0);Ki(t)}function g0(t,i,s,l,f,d,x,w,G,le,ve,Ee,ue,pe){if(t.timeoutHandle=-1,Ee=i.subtreeFlags,Ee&8192||(Ee&16785408)===16785408){Ee={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:fa},l0(i,d,Ee);var tt=(d&62914560)===d?ac-ke():(d&4194048)===d?d0-ke():0;if(tt=_S(Ee,tt),tt!==null){Aa=d,t.cancelPendingCommit=tt(b0.bind(null,t,i,d,s,l,f,x,w,G,ve,Ee,null,ue,pe)),ss(t,d,x,!le);return}}b0(t,i,d,s,l,f,x,w,G)}function Ly(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],d=f.getSnapshot;f=f.value;try{if(!oi(d(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ss(t,i,s,l){i&=~Jf,i&=~Vs,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var d=31-Ye(f),x=1<<d;l[d]=-1,f&=~x}s!==0&&Pt(t,s,i)}function oc(){return(Ht&6)===0?(Bo(0),!1):!0}function ad(){if(wt!==null){if(Xt===0)var t=wt.return;else t=wt,ma=Ls=null,yf(t),mr=null,So=0,t=wt;for(;t!==null;)qg(t.alternate,t),t=t.return;wt=null}}function Tr(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,Jy(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Aa=0,ad(),en=t,wt=s=ha(t.current,null),Dt=i,Xt=0,fi=null,ts=!1,Mr=je(t,i),Qf=!1,Er=di=Jf=Vs=ns=gn=0,ni=Po=null,ed=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-Ye(l),d=1<<f;i|=t[f],l&=~d}return Ta=i,Rl(),s}function _0(t,i){xt=null,C.H=Co,i===pr||i===zl?(i=Lm(),Xt=3):i===lf?(i=Lm(),Xt=4):Xt=i===zf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,fi=i,wt===null&&(gn=1,$l(t,Si(i,t.current)))}function v0(){var t=ci.current;return t===null?!0:(Dt&4194048)===Dt?Ti===null:(Dt&62914560)===Dt||(Dt&536870912)!==0?t===Ti:!1}function x0(){var t=C.H;return C.H=Co,t===null?Co:t}function y0(){var t=C.A;return C.A=Ny,t}function lc(){gn=4,ts||(Dt&4194048)!==Dt&&ci.current!==null||(Mr=!0),(ns&134217727)===0&&(Vs&134217727)===0||en===null||ss(en,Dt,di,!1)}function sd(t,i,s){var l=Ht;Ht|=2;var f=x0(),d=y0();(en!==t||Dt!==i)&&(rc=null,Tr(t,i)),i=!1;var x=gn;e:do try{if(Xt!==0&&wt!==null){var w=wt,G=fi;switch(Xt){case 8:ad(),x=6;break e;case 3:case 2:case 9:case 6:ci.current===null&&(i=!0);var le=Xt;if(Xt=0,fi=null,Ar(t,w,G,le),s&&Mr){x=0;break e}break;default:le=Xt,Xt=0,fi=null,Ar(t,w,G,le)}}Oy(),x=gn;break}catch(ve){_0(t,ve)}while(!0);return i&&t.shellSuspendCounter++,ma=Ls=null,Ht=l,C.H=f,C.A=d,wt===null&&(en=null,Dt=0,Rl()),x}function Oy(){for(;wt!==null;)S0(wt)}function Iy(t,i){var s=Ht;Ht|=2;var l=x0(),f=y0();en!==t||Dt!==i?(rc=null,sc=ke()+500,Tr(t,i)):Mr=je(t,i);e:do try{if(Xt!==0&&wt!==null){i=wt;var d=fi;t:switch(Xt){case 1:Xt=0,fi=null,Ar(t,i,d,1);break;case 2:case 9:if(Nm(d)){Xt=0,fi=null,M0(i);break}i=function(){Xt!==2&&Xt!==9||en!==t||(Xt=7),Ki(t)},d.then(i,i);break e;case 3:Xt=7;break e;case 4:Xt=5;break e;case 7:Nm(d)?(Xt=0,fi=null,M0(i)):(Xt=0,fi=null,Ar(t,i,d,7));break;case 5:var x=null;switch(wt.tag){case 26:x=wt.memoizedState;case 5:case 27:var w=wt;if(x?o_(x):w.stateNode.complete){Xt=0,fi=null;var G=w.sibling;if(G!==null)wt=G;else{var le=w.return;le!==null?(wt=le,cc(le)):wt=null}break t}}Xt=0,fi=null,Ar(t,i,d,5);break;case 6:Xt=0,fi=null,Ar(t,i,d,6);break;case 8:ad(),gn=6;break e;default:throw Error(a(462))}}zy();break}catch(ve){_0(t,ve)}while(!0);return ma=Ls=null,C.H=l,C.A=f,Ht=s,wt!==null?0:(en=null,Dt=0,Rl(),gn)}function zy(){for(;wt!==null&&!Et();)S0(wt)}function S0(t){var i=Xg(t.alternate,t,Ta);t.memoizedProps=t.pendingProps,i===null?cc(t):wt=i}function M0(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=Bg(s,i,i.pendingProps,i.type,void 0,Dt);break;case 11:i=Bg(s,i,i.pendingProps,i.type.render,i.ref,Dt);break;case 5:yf(i);default:qg(s,i),i=wt=ym(i,Ta),i=Xg(s,i,Ta)}t.memoizedProps=t.pendingProps,i===null?cc(t):wt=i}function Ar(t,i,s,l){ma=Ls=null,yf(i),mr=null,So=0;var f=i.return;try{if(by(t,f,i,s,Dt)){gn=1,$l(t,Si(s,t.current)),wt=null;return}}catch(d){if(f!==null)throw wt=f,d;gn=1,$l(t,Si(s,t.current)),wt=null;return}i.flags&32768?(Lt||l===1?t=!0:Mr||(Dt&536870912)!==0?t=!1:(ts=t=!0,(l===2||l===9||l===3||l===6)&&(l=ci.current,l!==null&&l.tag===13&&(l.flags|=16384))),E0(i,t)):cc(i)}function cc(t){var i=t;do{if((i.flags&32768)!==0){E0(i,ts);return}t=i.return;var s=wy(i.alternate,i,Ta);if(s!==null){wt=s;return}if(i=i.sibling,i!==null){wt=i;return}wt=i=t}while(i!==null);gn===0&&(gn=5)}function E0(t,i){do{var s=Ry(t.alternate,t);if(s!==null){s.flags&=32767,wt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){wt=t;return}wt=t=s}while(t!==null);gn=6,wt=null}function b0(t,i,s,l,f,d,x,w,G){t.cancelPendingCommit=null;do uc();while(Cn!==0);if((Ht&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(d=i.lanes|i.childLanes,d|=Yu,an(t,s,d,x,w,G),t===en&&(wt=en=null,Dt=0),br=i,as=t,Aa=s,td=d,nd=f,h0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Gy(ae,function(){return C0(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=C.T,C.T=null,f=F.p,F.p=2,x=Ht,Ht|=4;try{Cy(t,i,s)}finally{Ht=x,F.p=f,C.T=l}}Cn=1,T0(),A0(),w0()}}function T0(){if(Cn===1){Cn=0;var t=as,i=br,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=C.T,C.T=null;var l=F.p;F.p=2;var f=Ht;Ht|=4;try{s0(i,t);var d=_d,x=fm(t.containerInfo),w=d.focusedElem,G=d.selectionRange;if(x!==w&&w&&w.ownerDocument&&um(w.ownerDocument.documentElement,w)){if(G!==null&&Hu(w)){var le=G.start,ve=G.end;if(ve===void 0&&(ve=le),"selectionStart"in w)w.selectionStart=le,w.selectionEnd=Math.min(ve,w.value.length);else{var Ee=w.ownerDocument||document,ue=Ee&&Ee.defaultView||window;if(ue.getSelection){var pe=ue.getSelection(),tt=w.textContent.length,ct=Math.min(G.start,tt),Jt=G.end===void 0?ct:Math.min(G.end,tt);!pe.extend&&ct>Jt&&(x=Jt,Jt=ct,ct=x);var te=cm(w,ct),j=cm(w,Jt);if(te&&j&&(pe.rangeCount!==1||pe.anchorNode!==te.node||pe.anchorOffset!==te.offset||pe.focusNode!==j.node||pe.focusOffset!==j.offset)){var re=Ee.createRange();re.setStart(te.node,te.offset),pe.removeAllRanges(),ct>Jt?(pe.addRange(re),pe.extend(j.node,j.offset)):(re.setEnd(j.node,j.offset),pe.addRange(re))}}}}for(Ee=[],pe=w;pe=pe.parentNode;)pe.nodeType===1&&Ee.push({element:pe,left:pe.scrollLeft,top:pe.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Ee.length;w++){var Me=Ee[w];Me.element.scrollLeft=Me.left,Me.element.scrollTop=Me.top}}Mc=!!gd,_d=gd=null}finally{Ht=f,F.p=l,C.T=s}}t.current=i,Cn=2}}function A0(){if(Cn===2){Cn=0;var t=as,i=br,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=C.T,C.T=null;var l=F.p;F.p=2;var f=Ht;Ht|=4;try{e0(t,i.alternate,i)}finally{Ht=f,F.p=l,C.T=s}}Cn=3}}function w0(){if(Cn===4||Cn===3){Cn=0,Ft();var t=as,i=br,s=Aa,l=h0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Cn=5:(Cn=0,br=as=null,R0(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(is=null),Ba(s),i=i.stateNode,Z&&typeof Z.onCommitFiberRoot=="function")try{Z.onCommitFiberRoot(ce,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=C.T,f=F.p,F.p=2,C.T=null;try{for(var d=t.onRecoverableError,x=0;x<l.length;x++){var w=l[x];d(w.value,{componentStack:w.stack})}}finally{C.T=i,F.p=f}}(Aa&3)!==0&&uc(),Ki(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===id?Fo++:(Fo=0,id=t):Fo=0,Bo(0)}}function R0(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,xo(i)))}function uc(){return T0(),A0(),w0(),C0()}function C0(){if(Cn!==5)return!1;var t=as,i=td;td=0;var s=Ba(Aa),l=C.T,f=F.p;try{F.p=32>s?32:s,C.T=null,s=nd,nd=null;var d=as,x=Aa;if(Cn=0,br=as=null,Aa=0,(Ht&6)!==0)throw Error(a(331));var w=Ht;if(Ht|=4,u0(d.current),o0(d,d.current,x,s),Ht=w,Bo(0,!1),Z&&typeof Z.onPostCommitFiberRoot=="function")try{Z.onPostCommitFiberRoot(ce,d)}catch{}return!0}finally{F.p=f,C.T=l,R0(t,i)}}function D0(t,i,s){i=Si(s,i),i=If(t.stateNode,i,2),t=Ka(t,i,2),t!==null&&(lt(t,2),Ki(t))}function Yt(t,i,s){if(t.tag===3)D0(t,t,s);else for(;i!==null;){if(i.tag===3){D0(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(is===null||!is.has(l))){t=Si(s,t),s=Ng(2),l=Ka(i,s,2),l!==null&&(Ug(s,l,i,t),lt(l,2),Ki(l));break}}i=i.return}}function rd(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new Uy;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(Qf=!0,f.add(s),t=Py.bind(null,t,i,s),i.then(t,t))}function Py(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,en===t&&(Dt&s)===s&&(gn===4||gn===3&&(Dt&62914560)===Dt&&300>ke()-ac?(Ht&2)===0&&Tr(t,0):Jf|=s,Er===Dt&&(Er=0)),Ki(t)}function N0(t,i){i===0&&(i=Te()),t=Ds(t,i),t!==null&&(lt(t,i),Ki(t))}function Fy(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),N0(t,s)}function By(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),N0(t,s)}function Gy(t,i){return K(t,i)}var fc=null,wr=null,od=!1,dc=!1,ld=!1,rs=0;function Ki(t){t!==wr&&t.next===null&&(wr===null?fc=wr=t:wr=wr.next=t),dc=!0,od||(od=!0,Vy())}function Bo(t,i){if(!ld&&dc){ld=!0;do for(var s=!1,l=fc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var x=l.suspendedLanes,w=l.pingedLanes;d=(1<<31-Ye(42|t)+1)-1,d&=f&~(x&~w),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,I0(l,d))}else d=Dt,d=_e(l,l===en?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||je(l,d)||(s=!0,I0(l,d));l=l.next}while(s);ld=!1}}function Hy(){U0()}function U0(){dc=od=!1;var t=0;rs!==0&&Qy()&&(t=rs);for(var i=ke(),s=null,l=fc;l!==null;){var f=l.next,d=L0(l,i);d===0?(l.next=null,s===null?fc=f:s.next=f,f===null&&(wr=s)):(s=l,(t!==0||(d&3)!==0)&&(dc=!0)),l=f}Cn!==0&&Cn!==5||Bo(t),rs!==0&&(rs=0)}function L0(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var x=31-Ye(d),w=1<<x,G=f[x];G===-1?((w&s)===0||(w&l)!==0)&&(f[x]=Xe(w,i)):G<=i&&(t.expiredLanes|=w),d&=~w}if(i=en,s=Dt,s=_e(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Xt===2||Xt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&nn(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||je(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&nn(l),Ba(s)){case 2:case 8:s=E;break;case 32:s=ae;break;case 268435456:s=Ne;break;default:s=ae}return l=O0.bind(null,t),s=K(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&nn(l),t.callbackPriority=2,t.callbackNode=null,2}function O0(t,i){if(Cn!==0&&Cn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(uc()&&t.callbackNode!==s)return null;var l=Dt;return l=_e(t,t===en?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(m0(t,l,i),L0(t,ke()),t.callbackNode!=null&&t.callbackNode===s?O0.bind(null,t):null)}function I0(t,i){if(uc())return null;m0(t,i,!0)}function Vy(){eS(function(){(Ht&6)!==0?K(N,Hy):U0()})}function cd(){if(rs===0){var t=dr;t===0&&(t=ht,ht<<=1,(ht&261888)===0&&(ht=256)),rs=t}return rs}function z0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:As(""+t)}function P0(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function ky(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var d=z0((f[vn]||null).action),x=l.submitter;x&&(i=(i=x[vn]||null)?z0(i.formAction):x.getAttribute("formAction"),i!==null&&(d=i,x=null));var w=new bl("action","action",null,l,f);t.push({event:w,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(rs!==0){var G=x?P0(f,x):new FormData(f);Cf(s,{pending:!0,data:G,method:f.method,action:d},null,G)}}else typeof d=="function"&&(w.preventDefault(),G=x?P0(f,x):new FormData(f),Cf(s,{pending:!0,data:G,method:f.method,action:d},d,G))},currentTarget:f}]})}}for(var ud=0;ud<Xu.length;ud++){var fd=Xu[ud],Wy=fd.toLowerCase(),Xy=fd[0].toUpperCase()+fd.slice(1);Oi(Wy,"on"+Xy)}Oi(pm,"onAnimationEnd"),Oi(mm,"onAnimationIteration"),Oi(gm,"onAnimationStart"),Oi("dblclick","onDoubleClick"),Oi("focusin","onFocus"),Oi("focusout","onBlur"),Oi(oy,"onTransitionRun"),Oi(ly,"onTransitionStart"),Oi(cy,"onTransitionCancel"),Oi(_m,"onTransitionEnd"),W("onMouseEnter",["mouseout","mouseover"]),W("onMouseLeave",["mouseout","mouseover"]),W("onPointerEnter",["pointerout","pointerover"]),W("onPointerLeave",["pointerout","pointerover"]),V("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),V("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),V("onBeforeInput",["compositionend","keypress","textInput","paste"]),V("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),V("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),V("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Go));function F0(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var x=l.length-1;0<=x;x--){var w=l[x],G=w.instance,le=w.currentTarget;if(w=w.listener,G!==d&&f.isPropagationStopped())break e;d=w,f.currentTarget=le;try{d(f)}catch(ve){wl(ve)}f.currentTarget=null,d=G}else for(x=0;x<l.length;x++){if(w=l[x],G=w.instance,le=w.currentTarget,w=w.listener,G!==d&&f.isPropagationStopped())break e;d=w,f.currentTarget=le;try{d(f)}catch(ve){wl(ve)}f.currentTarget=null,d=G}}}}function Rt(t,i){var s=i[Xi];s===void 0&&(s=i[Xi]=new Set);var l=t+"__bubble";s.has(l)||(B0(i,t,2,!1),s.add(l))}function dd(t,i,s){var l=0;i&&(l|=4),B0(s,t,l,i)}var hc="_reactListening"+Math.random().toString(36).slice(2);function hd(t){if(!t[hc]){t[hc]=!0,Fe.forEach(function(s){s!=="selectionchange"&&(Yy.has(s)||dd(s,!1,t),dd(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[hc]||(i[hc]=!0,dd("selectionchange",!1,i))}}function B0(t,i,s,l){switch(p_(i)){case 2:var f=yS;break;case 8:f=SS;break;default:f=Rd}s=f.bind(null,i,s,t),f=void 0,!Uu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function pd(t,i,s,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var x=l.tag;if(x===3||x===4){var w=l.stateNode.containerInfo;if(w===f)break;if(x===4)for(x=l.return;x!==null;){var G=x.tag;if((G===3||G===4)&&x.stateNode.containerInfo===f)return;x=x.return}for(;w!==null;){if(x=Di(w),x===null)return;if(G=x.tag,G===5||G===6||G===26||G===27){l=d=x;continue e}w=w.parentNode}}l=l.return}Wp(function(){var le=d,ve=Du(s),Ee=[];e:{var ue=vm.get(t);if(ue!==void 0){var pe=bl,tt=t;switch(t){case"keypress":if(Ml(s)===0)break e;case"keydown":case"keyup":pe=Bx;break;case"focusin":tt="focus",pe=zu;break;case"focusout":tt="blur",pe=zu;break;case"beforeblur":case"afterblur":pe=zu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pe=qp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pe=wx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pe=Vx;break;case pm:case mm:case gm:pe=Dx;break;case _m:pe=Wx;break;case"scroll":case"scrollend":pe=Tx;break;case"wheel":pe=Yx;break;case"copy":case"cut":case"paste":pe=Ux;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pe=Zp;break;case"toggle":case"beforetoggle":pe=jx}var ct=(i&4)!==0,Jt=!ct&&(t==="scroll"||t==="scrollend"),te=ct?ue!==null?ue+"Capture":null:ue;ct=[];for(var j=le,re;j!==null;){var Me=j;if(re=Me.stateNode,Me=Me.tag,Me!==5&&Me!==26&&Me!==27||re===null||te===null||(Me=oo(j,te),Me!=null&&ct.push(Ho(j,Me,re))),Jt)break;j=j.return}0<ct.length&&(ue=new pe(ue,tt,null,s,ve),Ee.push({event:ue,listeners:ct}))}}if((i&7)===0){e:{if(ue=t==="mouseover"||t==="pointerover",pe=t==="mouseout"||t==="pointerout",ue&&s!==Cu&&(tt=s.relatedTarget||s.fromElement)&&(Di(tt)||tt[Kn]))break e;if((pe||ue)&&(ue=ve.window===ve?ve:(ue=ve.ownerDocument)?ue.defaultView||ue.parentWindow:window,pe?(tt=s.relatedTarget||s.toElement,pe=le,tt=tt?Di(tt):null,tt!==null&&(Jt=c(tt),ct=tt.tag,tt!==Jt||ct!==5&&ct!==27&&ct!==6)&&(tt=null)):(pe=null,tt=le),pe!==tt)){if(ct=qp,Me="onMouseLeave",te="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(ct=Zp,Me="onPointerLeave",te="onPointerEnter",j="pointer"),Jt=pe==null?ue:Q(pe),re=tt==null?ue:Q(tt),ue=new ct(Me,j+"leave",pe,s,ve),ue.target=Jt,ue.relatedTarget=re,Me=null,Di(ve)===le&&(ct=new ct(te,j+"enter",tt,s,ve),ct.target=re,ct.relatedTarget=Jt,Me=ct),Jt=Me,pe&&tt)t:{for(ct=qy,te=pe,j=tt,re=0,Me=te;Me;Me=ct(Me))re++;Me=0;for(var at=j;at;at=ct(at))Me++;for(;0<re-Me;)te=ct(te),re--;for(;0<Me-re;)j=ct(j),Me--;for(;re--;){if(te===j||j!==null&&te===j.alternate){ct=te;break t}te=ct(te),j=ct(j)}ct=null}else ct=null;pe!==null&&G0(Ee,ue,pe,ct,!1),tt!==null&&Jt!==null&&G0(Ee,Jt,tt,ct,!0)}}e:{if(ue=le?Q(le):window,pe=ue.nodeName&&ue.nodeName.toLowerCase(),pe==="select"||pe==="input"&&ue.type==="file")var Bt=im;else if(tm(ue))if(am)Bt=ay;else{Bt=ny;var it=ty}else pe=ue.nodeName,!pe||pe.toLowerCase()!=="input"||ue.type!=="checkbox"&&ue.type!=="radio"?le&&Vt(le.elementType)&&(Bt=im):Bt=iy;if(Bt&&(Bt=Bt(t,le))){nm(Ee,Bt,s,ve);break e}it&&it(t,ue,le),t==="focusout"&&le&&ue.type==="number"&&le.memoizedProps.value!=null&&At(ue,"number",ue.value)}switch(it=le?Q(le):window,t){case"focusin":(tm(it)||it.contentEditable==="true")&&(ar=it,Vu=le,go=null);break;case"focusout":go=Vu=ar=null;break;case"mousedown":ku=!0;break;case"contextmenu":case"mouseup":case"dragend":ku=!1,dm(Ee,s,ve);break;case"selectionchange":if(ry)break;case"keydown":case"keyup":dm(Ee,s,ve)}var St;if(Fu)e:{switch(t){case"compositionstart":var Nt="onCompositionStart";break e;case"compositionend":Nt="onCompositionEnd";break e;case"compositionupdate":Nt="onCompositionUpdate";break e}Nt=void 0}else ir?Jp(t,s)&&(Nt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Nt="onCompositionStart");Nt&&($p&&s.locale!=="ko"&&(ir||Nt!=="onCompositionStart"?Nt==="onCompositionEnd"&&ir&&(St=Xp()):(Wa=ve,Lu="value"in Wa?Wa.value:Wa.textContent,ir=!0)),it=pc(le,Nt),0<it.length&&(Nt=new jp(Nt,t,null,s,ve),Ee.push({event:Nt,listeners:it}),St?Nt.data=St:(St=em(s),St!==null&&(Nt.data=St)))),(St=$x?Kx(t,s):Qx(t,s))&&(Nt=pc(le,"onBeforeInput"),0<Nt.length&&(it=new jp("onBeforeInput","beforeinput",null,s,ve),Ee.push({event:it,listeners:Nt}),it.data=St)),ky(Ee,t,le,s,ve)}F0(Ee,i)})}function Ho(t,i,s){return{instance:t,listener:i,currentTarget:s}}function pc(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=oo(t,s),f!=null&&l.unshift(Ho(t,f,d)),f=oo(t,i),f!=null&&l.push(Ho(t,f,d))),t.tag===3)return l;t=t.return}return[]}function qy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function G0(t,i,s,l,f){for(var d=i._reactName,x=[];s!==null&&s!==l;){var w=s,G=w.alternate,le=w.stateNode;if(w=w.tag,G!==null&&G===l)break;w!==5&&w!==26&&w!==27||le===null||(G=le,f?(le=oo(s,d),le!=null&&x.unshift(Ho(s,le,G))):f||(le=oo(s,d),le!=null&&x.push(Ho(s,le,G)))),s=s.return}x.length!==0&&t.push({event:i,listeners:x})}var jy=/\r\n?/g,Zy=/\u0000|\uFFFD/g;function H0(t){return(typeof t=="string"?t:""+t).replace(jy,`
`).replace(Zy,"")}function V0(t,i){return i=H0(i),H0(t)===i}function Qt(t,i,s,l,f,d){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||ri(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&ri(t,""+l);break;case"className":ze(t,"class",l);break;case"tabIndex":ze(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ze(t,s,l);break;case"style":Li(t,l,d);break;case"data":if(i!=="object"){ze(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=As(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&Qt(t,i,"name",f.name,f,null),Qt(t,i,"formEncType",f.formEncType,f,null),Qt(t,i,"formMethod",f.formMethod,f,null),Qt(t,i,"formTarget",f.formTarget,f,null)):(Qt(t,i,"encType",f.encType,f,null),Qt(t,i,"method",f.method,f,null),Qt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=As(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=fa);break;case"onScroll":l!=null&&Rt("scroll",t);break;case"onScrollEnd":l!=null&&Rt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=As(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Rt("beforetoggle",t),Rt("toggle",t),Ce(t,"popover",l);break;case"xlinkActuate":Ae(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ae(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ae(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ae(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ae(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ae(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ae(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ae(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ae(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ce(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=qi.get(s)||s,Ce(t,s,l))}}function md(t,i,s,l,f,d){switch(s){case"style":Li(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?ri(t,l):(typeof l=="number"||typeof l=="bigint")&&ri(t,""+l);break;case"onScroll":l!=null&&Rt("scroll",t);break;case"onScrollEnd":l!=null&&Rt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=fa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),d=t[vn]||null,d=d!=null?d[s]:null,typeof d=="function"&&t.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Ce(t,s,l)}}}function Pn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Rt("error",t),Rt("load",t);var l=!1,f=!1,d;for(d in s)if(s.hasOwnProperty(d)){var x=s[d];if(x!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Qt(t,i,d,x,s,null)}}f&&Qt(t,i,"srcSet",s.srcSet,s,null),l&&Qt(t,i,"src",s.src,s,null);return;case"input":Rt("invalid",t);var w=d=x=f=null,G=null,le=null;for(l in s)if(s.hasOwnProperty(l)){var ve=s[l];if(ve!=null)switch(l){case"name":f=ve;break;case"type":x=ve;break;case"checked":G=ve;break;case"defaultChecked":le=ve;break;case"value":d=ve;break;case"defaultValue":w=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(a(137,i));break;default:Qt(t,i,l,ve,s,null)}}pn(t,d,w,G,le,x,f,!1);return;case"select":Rt("invalid",t),l=x=d=null;for(f in s)if(s.hasOwnProperty(f)&&(w=s[f],w!=null))switch(f){case"value":d=w;break;case"defaultValue":x=w;break;case"multiple":l=w;default:Qt(t,i,f,w,s,null)}i=d,s=x,t.multiple=!!l,i!=null?Rn(t,!!l,i,!1):s!=null&&Rn(t,!!l,s,!0);return;case"textarea":Rt("invalid",t),d=f=l=null;for(x in s)if(s.hasOwnProperty(x)&&(w=s[x],w!=null))switch(x){case"value":l=w;break;case"defaultValue":f=w;break;case"children":d=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(a(91));break;default:Qt(t,i,x,w,s,null)}Ui(t,l,f,d);return;case"option":for(G in s)if(s.hasOwnProperty(G)&&(l=s[G],l!=null))switch(G){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Qt(t,i,G,l,s,null)}return;case"dialog":Rt("beforetoggle",t),Rt("toggle",t),Rt("cancel",t),Rt("close",t);break;case"iframe":case"object":Rt("load",t);break;case"video":case"audio":for(l=0;l<Go.length;l++)Rt(Go[l],t);break;case"image":Rt("error",t),Rt("load",t);break;case"details":Rt("toggle",t);break;case"embed":case"source":case"link":Rt("error",t),Rt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(le in s)if(s.hasOwnProperty(le)&&(l=s[le],l!=null))switch(le){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Qt(t,i,le,l,s,null)}return;default:if(Vt(i)){for(ve in s)s.hasOwnProperty(ve)&&(l=s[ve],l!==void 0&&md(t,i,ve,l,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(l=s[w],l!=null&&Qt(t,i,w,l,s,null))}function $y(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,x=null,w=null,G=null,le=null,ve=null;for(pe in s){var Ee=s[pe];if(s.hasOwnProperty(pe)&&Ee!=null)switch(pe){case"checked":break;case"value":break;case"defaultValue":G=Ee;default:l.hasOwnProperty(pe)||Qt(t,i,pe,null,l,Ee)}}for(var ue in l){var pe=l[ue];if(Ee=s[ue],l.hasOwnProperty(ue)&&(pe!=null||Ee!=null))switch(ue){case"type":d=pe;break;case"name":f=pe;break;case"checked":le=pe;break;case"defaultChecked":ve=pe;break;case"value":x=pe;break;case"defaultValue":w=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(a(137,i));break;default:pe!==Ee&&Qt(t,i,ue,pe,l,Ee)}}Ke(t,x,w,G,le,ve,d,f);return;case"select":pe=x=w=ue=null;for(d in s)if(G=s[d],s.hasOwnProperty(d)&&G!=null)switch(d){case"value":break;case"multiple":pe=G;default:l.hasOwnProperty(d)||Qt(t,i,d,null,l,G)}for(f in l)if(d=l[f],G=s[f],l.hasOwnProperty(f)&&(d!=null||G!=null))switch(f){case"value":ue=d;break;case"defaultValue":w=d;break;case"multiple":x=d;default:d!==G&&Qt(t,i,f,d,l,G)}i=w,s=x,l=pe,ue!=null?Rn(t,!!s,ue,!1):!!l!=!!s&&(i!=null?Rn(t,!!s,i,!0):Rn(t,!!s,s?[]:"",!1));return;case"textarea":pe=ue=null;for(w in s)if(f=s[w],s.hasOwnProperty(w)&&f!=null&&!l.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Qt(t,i,w,null,l,f)}for(x in l)if(f=l[x],d=s[x],l.hasOwnProperty(x)&&(f!=null||d!=null))switch(x){case"value":ue=f;break;case"defaultValue":pe=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==d&&Qt(t,i,x,f,l,d)}si(t,ue,pe);return;case"option":for(var tt in s)if(ue=s[tt],s.hasOwnProperty(tt)&&ue!=null&&!l.hasOwnProperty(tt))switch(tt){case"selected":t.selected=!1;break;default:Qt(t,i,tt,null,l,ue)}for(G in l)if(ue=l[G],pe=s[G],l.hasOwnProperty(G)&&ue!==pe&&(ue!=null||pe!=null))switch(G){case"selected":t.selected=ue&&typeof ue!="function"&&typeof ue!="symbol";break;default:Qt(t,i,G,ue,l,pe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ct in s)ue=s[ct],s.hasOwnProperty(ct)&&ue!=null&&!l.hasOwnProperty(ct)&&Qt(t,i,ct,null,l,ue);for(le in l)if(ue=l[le],pe=s[le],l.hasOwnProperty(le)&&ue!==pe&&(ue!=null||pe!=null))switch(le){case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(a(137,i));break;default:Qt(t,i,le,ue,l,pe)}return;default:if(Vt(i)){for(var Jt in s)ue=s[Jt],s.hasOwnProperty(Jt)&&ue!==void 0&&!l.hasOwnProperty(Jt)&&md(t,i,Jt,void 0,l,ue);for(ve in l)ue=l[ve],pe=s[ve],!l.hasOwnProperty(ve)||ue===pe||ue===void 0&&pe===void 0||md(t,i,ve,ue,l,pe);return}}for(var te in s)ue=s[te],s.hasOwnProperty(te)&&ue!=null&&!l.hasOwnProperty(te)&&Qt(t,i,te,null,l,ue);for(Ee in l)ue=l[Ee],pe=s[Ee],!l.hasOwnProperty(Ee)||ue===pe||ue==null&&pe==null||Qt(t,i,Ee,ue,l,pe)}function k0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ky(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],d=f.transferSize,x=f.initiatorType,w=f.duration;if(d&&w&&k0(x)){for(x=0,w=f.responseEnd,l+=1;l<s.length;l++){var G=s[l],le=G.startTime;if(le>w)break;var ve=G.transferSize,Ee=G.initiatorType;ve&&k0(Ee)&&(G=G.responseEnd,x+=ve*(G<w?1:(w-le)/(G-le)))}if(--l,i+=8*(d+x)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var gd=null,_d=null;function mc(t){return t.nodeType===9?t:t.ownerDocument}function W0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function X0(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function vd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var xd=null;function Qy(){var t=window.event;return t&&t.type==="popstate"?t===xd?!1:(xd=t,!0):(xd=null,!1)}var Y0=typeof setTimeout=="function"?setTimeout:void 0,Jy=typeof clearTimeout=="function"?clearTimeout:void 0,q0=typeof Promise=="function"?Promise:void 0,eS=typeof queueMicrotask=="function"?queueMicrotask:typeof q0<"u"?function(t){return q0.resolve(null).then(t).catch(tS)}:Y0;function tS(t){setTimeout(function(){throw t})}function os(t){return t==="head"}function j0(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),Nr(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")Vo(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,Vo(s);for(var d=s.firstChild;d;){var x=d.nextSibling,w=d.nodeName;d[Yi]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=x}}else s==="body"&&Vo(t.ownerDocument.body);s=f}while(s);Nr(i)}function Z0(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function yd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":yd(s),ua(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function nS(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Yi])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Ai(t.nextSibling),t===null)break}return null}function iS(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ai(t.nextSibling),t===null))return null;return t}function $0(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Ai(t.nextSibling),t===null))return null;return t}function Sd(t){return t.data==="$?"||t.data==="$~"}function Md(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function aS(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Ai(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Ed=null;function K0(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Ai(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function Q0(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function J0(t,i,s){switch(i=mc(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Vo(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ua(t)}var wi=new Map,e_=new Set;function gc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var wa=F.d;F.d={f:sS,r:rS,D:oS,C:lS,L:cS,m:uS,X:dS,S:fS,M:hS};function sS(){var t=wa.f(),i=oc();return t||i}function rS(t){var i=Ni(t);i!==null&&i.tag===5&&i.type==="form"?_g(i):wa.r(t)}var Rr=typeof document>"u"?null:document;function t_(t,i,s){var l=Rr;if(l&&typeof i=="string"&&i){var f=yt(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),e_.has(f)||(e_.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Pn(i,"link",t),Ue(i),l.head.appendChild(i)))}}function oS(t){wa.D(t),t_("dns-prefetch",t,null)}function lS(t,i){wa.C(t,i),t_("preconnect",t,i)}function cS(t,i,s){wa.L(t,i,s);var l=Rr;if(l&&t&&i){var f='link[rel="preload"][as="'+yt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+yt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+yt(s.imageSizes)+'"]')):f+='[href="'+yt(t)+'"]';var d=f;switch(i){case"style":d=Cr(t);break;case"script":d=Dr(t)}wi.has(d)||(t=v({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),wi.set(d,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(ko(d))||i==="script"&&l.querySelector(Wo(d))||(i=l.createElement("link"),Pn(i,"link",t),Ue(i),l.head.appendChild(i)))}}function uS(t,i){wa.m(t,i);var s=Rr;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+yt(l)+'"][href="'+yt(t)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Dr(t)}if(!wi.has(d)&&(t=v({rel:"modulepreload",href:t},i),wi.set(d,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Wo(d)))return}l=s.createElement("link"),Pn(l,"link",t),Ue(l),s.head.appendChild(l)}}}function fS(t,i,s){wa.S(t,i,s);var l=Rr;if(l&&t){var f=Je(l).hoistableStyles,d=Cr(t);i=i||"default";var x=f.get(d);if(!x){var w={loading:0,preload:null};if(x=l.querySelector(ko(d)))w.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":i},s),(s=wi.get(d))&&bd(t,s);var G=x=l.createElement("link");Ue(G),Pn(G,"link",t),G._p=new Promise(function(le,ve){G.onload=le,G.onerror=ve}),G.addEventListener("load",function(){w.loading|=1}),G.addEventListener("error",function(){w.loading|=2}),w.loading|=4,_c(x,i,l)}x={type:"stylesheet",instance:x,count:1,state:w},f.set(d,x)}}}function dS(t,i){wa.X(t,i);var s=Rr;if(s&&t){var l=Je(s).hoistableScripts,f=Dr(t),d=l.get(f);d||(d=s.querySelector(Wo(f)),d||(t=v({src:t,async:!0},i),(i=wi.get(f))&&Td(t,i),d=s.createElement("script"),Ue(d),Pn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function hS(t,i){wa.M(t,i);var s=Rr;if(s&&t){var l=Je(s).hoistableScripts,f=Dr(t),d=l.get(f);d||(d=s.querySelector(Wo(f)),d||(t=v({src:t,async:!0,type:"module"},i),(i=wi.get(f))&&Td(t,i),d=s.createElement("script"),Ue(d),Pn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function n_(t,i,s,l){var f=(f=oe.current)?gc(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Cr(s.href),s=Je(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Cr(s.href);var d=Je(f).hoistableStyles,x=d.get(t);if(x||(f=f.ownerDocument||f,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,x),(d=f.querySelector(ko(t)))&&!d._p&&(x.instance=d,x.state.loading=5),wi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},wi.set(t,s),d||pS(f,t,s,x.state))),i&&l===null)throw Error(a(528,""));return x}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Dr(s),s=Je(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Cr(t){return'href="'+yt(t)+'"'}function ko(t){return'link[rel="stylesheet"]['+t+"]"}function i_(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function pS(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Pn(i,"link",s),Ue(i),t.head.appendChild(i))}function Dr(t){return'[src="'+yt(t)+'"]'}function Wo(t){return"script[async]"+t}function a_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+yt(s.href)+'"]');if(l)return i.instance=l,Ue(l),l;var f=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Ue(l),Pn(l,"style",f),_c(l,s.precedence,t),i.instance=l;case"stylesheet":f=Cr(s.href);var d=t.querySelector(ko(f));if(d)return i.state.loading|=4,i.instance=d,Ue(d),d;l=i_(s),(f=wi.get(f))&&bd(l,f),d=(t.ownerDocument||t).createElement("link"),Ue(d);var x=d;return x._p=new Promise(function(w,G){x.onload=w,x.onerror=G}),Pn(d,"link",l),i.state.loading|=4,_c(d,s.precedence,t),i.instance=d;case"script":return d=Dr(s.src),(f=t.querySelector(Wo(d)))?(i.instance=f,Ue(f),f):(l=s,(f=wi.get(d))&&(l=v({},s),Td(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),Ue(f),Pn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,_c(l,s.precedence,t));return i.instance}function _c(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,x=0;x<l.length;x++){var w=l[x];if(w.dataset.precedence===i)d=w;else if(d!==f)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function bd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Td(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var vc=null;function s_(t,i,s){if(vc===null){var l=new Map,f=vc=new Map;f.set(s,l)}else f=vc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var d=s[f];if(!(d[Yi]||d[on]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(i)||"";x=t+x;var w=l.get(x);w?w.push(d):l.set(x,[d])}}return l}function r_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function mS(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function o_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function gS(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Cr(l.href),d=i.querySelector(ko(f));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=xc.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=d,Ue(d);return}d=i.ownerDocument||i,l=i_(l),(f=wi.get(f))&&bd(l,f),d=d.createElement("link"),Ue(d);var x=d;x._p=new Promise(function(w,G){x.onload=w,x.onerror=G}),Pn(d,"link",l),s.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=xc.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var Ad=0;function _S(t,i){return t.stylesheets&&t.count===0&&Sc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Sc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+i);0<t.imgBytes&&Ad===0&&(Ad=62500*Ky());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Sc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>Ad?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function xc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Sc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var yc=null;function Sc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,yc=new Map,i.forEach(vS,t),yc=null,xc.call(t))}function vS(t,i){if(!(i.state.loading&4)){var s=yc.get(t);if(s)var l=s.get(null);else{s=new Map,yc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var x=f[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(s.set(x.dataset.precedence,x),l=x)}l&&s.set(null,l)}f=i.instance,x=f.getAttribute("data-precedence"),d=s.get(x)||l,d===l&&s.set(null,f),s.set(x,f),this.count++,l=xc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var Xo={$$typeof:z,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function xS(t,i,s,l,f,d,x,w,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=et(0),this.hiddenUpdates=et(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function l_(t,i,s,l,f,d,x,w,G,le,ve,Ee){return t=new xS(t,i,s,x,G,le,ve,Ee,w),i=1,d===!0&&(i|=24),d=li(3,null,null,i),t.current=d,d.stateNode=t,i=sf(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:i},cf(d),t}function c_(t){return t?(t=or,t):or}function u_(t,i,s,l,f,d){f=c_(f),l.context===null?l.context=f:l.pendingContext=f,l=$a(i),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=Ka(t,l,i),s!==null&&(ii(s,t,i),Eo(s,t,i))}function f_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function wd(t,i){f_(t,i),(t=t.alternate)&&f_(t,i)}function d_(t){if(t.tag===13||t.tag===31){var i=Ds(t,67108864);i!==null&&ii(i,t,67108864),wd(t,67108864)}}function h_(t){if(t.tag===13||t.tag===31){var i=hi();i=Wi(i);var s=Ds(t,i);s!==null&&ii(s,t,i),wd(t,i)}}var Mc=!0;function yS(t,i,s,l){var f=C.T;C.T=null;var d=F.p;try{F.p=2,Rd(t,i,s,l)}finally{F.p=d,C.T=f}}function SS(t,i,s,l){var f=C.T;C.T=null;var d=F.p;try{F.p=8,Rd(t,i,s,l)}finally{F.p=d,C.T=f}}function Rd(t,i,s,l){if(Mc){var f=Cd(l);if(f===null)pd(t,i,l,Ec,s),m_(t,l);else if(ES(f,t,i,s,l))l.stopPropagation();else if(m_(t,l),i&4&&-1<MS.indexOf(t)){for(;f!==null;){var d=Ni(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=Be(d.pendingLanes);if(x!==0){var w=d;for(w.pendingLanes|=2,w.entangledLanes|=2;x;){var G=1<<31-Ye(x);w.entanglements[1]|=G,x&=~G}Ki(d),(Ht&6)===0&&(sc=ke()+500,Bo(0))}}break;case 31:case 13:w=Ds(d,2),w!==null&&ii(w,d,2),oc(),wd(d,2)}if(d=Cd(l),d===null&&pd(t,i,l,Ec,s),d===f)break;f=d}f!==null&&l.stopPropagation()}else pd(t,i,l,null,s)}}function Cd(t){return t=Du(t),Dd(t)}var Ec=null;function Dd(t){if(Ec=null,t=Di(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===31){if(t=h(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Ec=t,null}function p_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($t()){case N:return 2;case E:return 8;case ae:case xe:return 32;case Ne:return 268435456;default:return 32}default:return 32}}var Nd=!1,ls=null,cs=null,us=null,Yo=new Map,qo=new Map,fs=[],MS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function m_(t,i){switch(t){case"focusin":case"focusout":ls=null;break;case"dragenter":case"dragleave":cs=null;break;case"mouseover":case"mouseout":us=null;break;case"pointerover":case"pointerout":Yo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(i.pointerId)}}function jo(t,i,s,l,f,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=Ni(i),i!==null&&d_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function ES(t,i,s,l,f){switch(i){case"focusin":return ls=jo(ls,t,i,s,l,f),!0;case"dragenter":return cs=jo(cs,t,i,s,l,f),!0;case"mouseover":return us=jo(us,t,i,s,l,f),!0;case"pointerover":var d=f.pointerId;return Yo.set(d,jo(Yo.get(d)||null,t,i,s,l,f)),!0;case"gotpointercapture":return d=f.pointerId,qo.set(d,jo(qo.get(d)||null,t,i,s,l,f)),!0}return!1}function g_(t){var i=Di(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,Ha(t.priority,function(){h_(s)});return}}else if(i===31){if(i=h(s),i!==null){t.blockedOn=i,Ha(t.priority,function(){h_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Cd(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Cu=l,s.target.dispatchEvent(l),Cu=null}else return i=Ni(s),i!==null&&d_(i),t.blockedOn=s,!1;i.shift()}return!0}function __(t,i,s){bc(t)&&s.delete(i)}function bS(){Nd=!1,ls!==null&&bc(ls)&&(ls=null),cs!==null&&bc(cs)&&(cs=null),us!==null&&bc(us)&&(us=null),Yo.forEach(__),qo.forEach(__)}function Tc(t,i){t.blockedOn===i&&(t.blockedOn=null,Nd||(Nd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,bS)))}var Ac=null;function v_(t){Ac!==t&&(Ac=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ac===t&&(Ac=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(Dd(l||s)===null)continue;break}var d=Ni(s);d!==null&&(t.splice(i,3),i-=3,Cf(d,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Nr(t){function i(G){return Tc(G,t)}ls!==null&&Tc(ls,t),cs!==null&&Tc(cs,t),us!==null&&Tc(us,t),Yo.forEach(i),qo.forEach(i);for(var s=0;s<fs.length;s++){var l=fs[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<fs.length&&(s=fs[0],s.blockedOn===null);)g_(s),s.blockedOn===null&&fs.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],d=s[l+1],x=f[vn]||null;if(typeof d=="function")x||v_(s);else if(x){var w=null;if(d&&d.hasAttribute("formAction")){if(f=d,x=d[vn]||null)w=x.formAction;else if(Dd(f)!==null)continue}else w=x.action;typeof w=="function"?s[l+1]=w:(s.splice(l,3),l-=3),v_(s)}}}function x_(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return f=x})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Ud(t){this._internalRoot=t}wc.prototype.render=Ud.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=hi();u_(s,l,t,i,null,null)},wc.prototype.unmount=Ud.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;u_(t.current,2,null,t,null,null),oc(),i[Kn]=null}};function wc(t){this._internalRoot=t}wc.prototype.unstable_scheduleHydration=function(t){if(t){var i=Ga();t={blockedOn:null,target:t,priority:i};for(var s=0;s<fs.length&&i!==0&&i<fs[s].priority;s++);fs.splice(s,0,t),s===0&&g_(t)}};var y_=e.version;if(y_!=="19.2.6")throw Error(a(527,y_,"19.2.6"));F.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=p(i),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var TS={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rc.isDisabled&&Rc.supportsFiber)try{ce=Rc.inject(TS),Z=Rc}catch{}}return $o.createRoot=function(t,i){if(!o(t))throw Error(a(299));var s=!1,l="",f=wg,d=Rg,x=Cg;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(x=i.onRecoverableError)),i=l_(t,1,!1,null,null,s,l,null,f,d,x,x_),t[Kn]=i.current,hd(t),new Ud(i)},$o.hydrateRoot=function(t,i,s){if(!o(t))throw Error(a(299));var l=!1,f="",d=wg,x=Rg,w=Cg,G=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(x=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.formState!==void 0&&(G=s.formState)),i=l_(t,1,!0,i,s??null,l,f,G,d,x,w,x_),i.context=c_(null),s=i.current,l=hi(),l=Wi(l),f=$a(l),f.callback=null,Ka(s,f,l),s=l,i.current.lanes=s,lt(i,s),Ki(i),t[Kn]=i.current,hd(t),new wc(i)},$o.version="19.2.6",$o}var N_;function zS(){if(N_)return Id.exports;N_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Id.exports=IS(),Id.exports}var PS=zS();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sp="184",FS=0,U_=1,BS=2,ru=1,Gv=2,ll=3,Ms=0,ai=1,na=2,Oa=0,Kr=1,L_=2,O_=3,I_=4,GS=5,js=100,HS=101,VS=102,kS=103,WS=104,XS=200,YS=201,qS=202,jS=203,Ah=204,wh=205,ZS=206,$S=207,KS=208,QS=209,JS=210,eM=211,tM=212,nM=213,iM=214,Rh=0,Ch=1,Dh=2,eo=3,Nh=4,Uh=5,Lh=6,Oh=7,Mp=0,aM=1,sM=2,sa=0,Hv=1,Vv=2,kv=3,Wv=4,Xv=5,Yv=6,qv=7,jv=300,Qs=301,to=302,Bd=303,Gd=304,Eu=306,pl=1e3,La=1001,Ih=1002,Fn=1003,rM=1004,Cc=1005,kn=1006,Hd=1007,$s=1008,_i=1009,Zv=1010,$v=1011,ml=1012,Ep=1013,oa=1014,ia=1015,Pa=1016,bp=1017,Tp=1018,gl=1020,Kv=35902,Qv=35899,Jv=1021,ex=1022,Hi=1023,Fa=1026,Ks=1027,tx=1028,Ap=1029,Js=1030,wp=1031,Rp=1033,ou=33776,lu=33777,cu=33778,uu=33779,zh=35840,Ph=35841,Fh=35842,Bh=35843,Gh=36196,Hh=37492,Vh=37496,kh=37488,Wh=37489,du=37490,Xh=37491,Yh=37808,qh=37809,jh=37810,Zh=37811,$h=37812,Kh=37813,Qh=37814,Jh=37815,ep=37816,tp=37817,np=37818,ip=37819,ap=37820,sp=37821,rp=36492,op=36494,lp=36495,cp=36283,up=36284,hu=36285,fp=36286,oM=3200,pu=0,lM=1,ys="",Ci="srgb",mu="srgb-linear",gu="linear",qt="srgb",Ur=7680,z_=519,cM=512,uM=513,fM=514,Cp=515,dM=516,hM=517,Dp=518,pM=519,dp=35044,P_="300 es",aa=2e3,_l=2001;function mM(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function _u(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gM(){const r=_u("canvas");return r.style.display="block",r}const F_={};function vu(...r){const e="THREE."+r.shift();console.log(e,...r)}function nx(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=r[1];n&&n.isStackTrace?r[0]+=" "+n.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ft(...r){r=nx(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...r)}}function Ot(...r){r=nx(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...r)}}function hp(...r){const e=r.join(" ");e in F_||(F_[e]=!0,ft(...r))}function _M(r,e,n){return new Promise(function(a,o){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const vM={[Rh]:Ch,[Dh]:Lh,[Nh]:Oh,[eo]:Uh,[Ch]:Rh,[Lh]:Dh,[Oh]:Nh,[Uh]:eo};class er{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let B_=1234567;const Qr=Math.PI/180,vl=180/Math.PI;function Ia(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Hn[r&255]+Hn[r>>8&255]+Hn[r>>16&255]+Hn[r>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[n&63|128]+Hn[n>>8&255]+"-"+Hn[n>>16&255]+Hn[n>>24&255]+Hn[a&255]+Hn[a>>8&255]+Hn[a>>16&255]+Hn[a>>24&255]).toLowerCase()}function Ut(r,e,n){return Math.max(e,Math.min(n,r))}function Np(r,e){return(r%e+e)%e}function xM(r,e,n,a,o){return a+(r-e)*(o-a)/(n-e)}function yM(r,e,n){return r!==e?(n-r)/(e-r):0}function fl(r,e,n){return(1-n)*r+n*e}function SM(r,e,n,a){return fl(r,e,1-Math.exp(-n*a))}function MM(r,e=1){return e-Math.abs(Np(r,e*2)-e)}function EM(r,e,n){return r<=e?0:r>=n?1:(r=(r-e)/(n-e),r*r*(3-2*r))}function bM(r,e,n){return r<=e?0:r>=n?1:(r=(r-e)/(n-e),r*r*r*(r*(r*6-15)+10))}function TM(r,e){return r+Math.floor(Math.random()*(e-r+1))}function AM(r,e){return r+Math.random()*(e-r)}function wM(r){return r*(.5-Math.random())}function RM(r){r!==void 0&&(B_=r);let e=B_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function CM(r){return r*Qr}function DM(r){return r*vl}function NM(r){return(r&r-1)===0&&r!==0}function UM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function LM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function OM(r,e,n,a,o){const c=Math.cos,u=Math.sin,h=c(n/2),m=u(n/2),p=c((e+a)/2),_=u((e+a)/2),v=c((e-a)/2),g=u((e-a)/2),S=c((a-e)/2),b=u((a-e)/2);switch(o){case"XYX":r.set(h*_,m*v,m*g,h*p);break;case"YZY":r.set(m*g,h*_,m*v,h*p);break;case"ZXZ":r.set(m*v,m*g,h*_,h*p);break;case"XZX":r.set(h*_,m*b,m*S,h*p);break;case"YXY":r.set(m*S,h*_,m*b,h*p);break;case"ZYZ":r.set(m*b,m*S,h*_,h*p);break;default:ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Gi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function jt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const IM={DEG2RAD:Qr,RAD2DEG:vl,generateUUID:Ia,clamp:Ut,euclideanModulo:Np,mapLinear:xM,inverseLerp:yM,lerp:fl,damp:SM,pingpong:MM,smoothstep:EM,smootherstep:bM,randInt:TM,randFloat:AM,randFloatSpread:wM,seededRandom:RM,degToRad:CM,radToDeg:DM,isPowerOfTwo:NM,ceilPowerOfTwo:UM,floorPowerOfTwo:LM,setQuaternionFromProperEuler:OM,normalize:jt,denormalize:Gi},Fp=class Fp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,o=e.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ut(this.x,e.x,n.x),this.y=Ut(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ut(this.x,e,n),this.y=Ut(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ut(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Ut(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*a-u*o+e.x,this.y=c*o+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fp.prototype.isVector2=!0;let Mt=Fp;class so{constructor(e=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=o}static slerpFlat(e,n,a,o,c,u,h){let m=a[o+0],p=a[o+1],_=a[o+2],v=a[o+3],g=c[u+0],S=c[u+1],b=c[u+2],R=c[u+3];if(v!==R||m!==g||p!==S||_!==b){let M=m*g+p*S+_*b+v*R;M<0&&(g=-g,S=-S,b=-b,R=-R,M=-M);let y=1-h;if(M<.9995){const D=Math.acos(M),z=Math.sin(D);y=Math.sin(y*D)/z,h=Math.sin(h*D)/z,m=m*y+g*h,p=p*y+S*h,_=_*y+b*h,v=v*y+R*h}else{m=m*y+g*h,p=p*y+S*h,_=_*y+b*h,v=v*y+R*h;const D=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=D,p*=D,_*=D,v*=D}}e[n]=m,e[n+1]=p,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,a,o,c,u){const h=a[o],m=a[o+1],p=a[o+2],_=a[o+3],v=c[u],g=c[u+1],S=c[u+2],b=c[u+3];return e[n]=h*b+_*v+m*S-p*g,e[n+1]=m*b+_*g+p*v-h*S,e[n+2]=p*b+_*S+h*g-m*v,e[n+3]=_*b-h*v-m*g-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,o){return this._x=e,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,o=e._y,c=e._z,u=e._order,h=Math.cos,m=Math.sin,p=h(a/2),_=h(o/2),v=h(c/2),g=m(a/2),S=m(o/2),b=m(c/2);switch(u){case"XYZ":this._x=g*_*v+p*S*b,this._y=p*S*v-g*_*b,this._z=p*_*b+g*S*v,this._w=p*_*v-g*S*b;break;case"YXZ":this._x=g*_*v+p*S*b,this._y=p*S*v-g*_*b,this._z=p*_*b-g*S*v,this._w=p*_*v+g*S*b;break;case"ZXY":this._x=g*_*v-p*S*b,this._y=p*S*v+g*_*b,this._z=p*_*b+g*S*v,this._w=p*_*v-g*S*b;break;case"ZYX":this._x=g*_*v-p*S*b,this._y=p*S*v+g*_*b,this._z=p*_*b-g*S*v,this._w=p*_*v+g*S*b;break;case"YZX":this._x=g*_*v+p*S*b,this._y=p*S*v+g*_*b,this._z=p*_*b-g*S*v,this._w=p*_*v-g*S*b;break;case"XZY":this._x=g*_*v-p*S*b,this._y=p*S*v-g*_*b,this._z=p*_*b+g*S*v,this._w=p*_*v+g*S*b;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],o=n[4],c=n[8],u=n[1],h=n[5],m=n[9],p=n[2],_=n[6],v=n[10],g=a+h+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(_-m)*S,this._y=(c-p)*S,this._z=(u-o)*S}else if(a>h&&a>v){const S=2*Math.sqrt(1+a-h-v);this._w=(_-m)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(c+p)/S}else if(h>v){const S=2*Math.sqrt(1+h-a-v);this._w=(c-p)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+v-a-h);this._w=(u-o)/S,this._x=(c+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,o=e._y,c=e._z,u=e._w,h=n._x,m=n._y,p=n._z,_=n._w;return this._x=a*_+u*h+o*p-c*m,this._y=o*_+u*m+c*h-a*p,this._z=c*_+u*p+a*m-o*h,this._w=u*_-a*h-o*m-c*p,this._onChangeCallback(),this}slerp(e,n){let a=e._x,o=e._y,c=e._z,u=e._w,h=this.dot(e);h<0&&(a=-a,o=-o,c=-c,u=-u,h=-h);let m=1-n;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,n=Math.sin(n*p)/_,this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Bp=class Bp{constructor(e=0,n=0,a=0){this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(G_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(G_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,o=this.z,c=e.x,u=e.y,h=e.z,m=e.w,p=2*(u*o-h*a),_=2*(h*n-c*o),v=2*(c*a-u*n);return this.x=n+m*p+u*v-h*_,this.y=a+m*_+h*p-c*v,this.z=o+m*v+c*_-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ut(this.x,e.x,n.x),this.y=Ut(this.y,e.y,n.y),this.z=Ut(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ut(this.x,e,n),this.y=Ut(this.y,e,n),this.z=Ut(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ut(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,o=e.y,c=e.z,u=n.x,h=n.y,m=n.z;return this.x=o*m-c*h,this.y=c*u-a*m,this.z=a*h-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Vd.copy(this).projectOnVector(e),this.sub(Vd)}reflect(e){return this.sub(Vd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Ut(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return n*n+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const o=Math.sin(n)*e;return this.x=o*Math.sin(a),this.y=Math.cos(n)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bp.prototype.isVector3=!0;let ee=Bp;const Vd=new ee,G_=new so,Gp=class Gp{constructor(e,n,a,o,c,u,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,h,m,p)}set(e,n,a,o,c,u,h,m,p){const _=this.elements;return _[0]=e,_[1]=o,_[2]=h,_[3]=n,_[4]=c,_[5]=m,_[6]=a,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],h=a[3],m=a[6],p=a[1],_=a[4],v=a[7],g=a[2],S=a[5],b=a[8],R=o[0],M=o[3],y=o[6],D=o[1],z=o[4],O=o[7],k=o[2],I=o[5],L=o[8];return c[0]=u*R+h*D+m*k,c[3]=u*M+h*z+m*I,c[6]=u*y+h*O+m*L,c[1]=p*R+_*D+v*k,c[4]=p*M+_*z+v*I,c[7]=p*y+_*O+v*L,c[2]=g*R+S*D+b*k,c[5]=g*M+S*z+b*I,c[8]=g*y+S*O+b*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return n*u*_-n*h*p-a*c*_+a*h*m+o*c*p-o*u*m}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=_*u-h*p,g=h*m-_*c,S=p*c-u*m,b=n*v+a*g+o*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=v*R,e[1]=(o*p-_*a)*R,e[2]=(h*a-o*u)*R,e[3]=g*R,e[4]=(_*n-o*m)*R,e[5]=(o*c-h*n)*R,e[6]=S*R,e[7]=(a*m-p*n)*R,e[8]=(u*n-a*c)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,o,c,u,h){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*u+p*h)+u+e,-o*p,o*m,-o*(-p*u+m*h)+h+n,0,0,1),this}scale(e,n){return this.premultiply(kd.makeScale(e,n)),this}rotate(e){return this.premultiply(kd.makeRotation(-e)),this}translate(e,n){return this.premultiply(kd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Gp.prototype.isMatrix3=!0;let vt=Gp;const kd=new vt,H_=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),V_=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zM(){const r={enabled:!0,workingColorSpace:mu,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===qt&&(o.r=za(o.r),o.g=za(o.g),o.b=za(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===qt&&(o.r=Jr(o.r),o.g=Jr(o.g),o.b=Jr(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ys?gu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return hp("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return hp("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[mu]:{primaries:e,whitePoint:a,transfer:gu,toXYZ:H_,fromXYZ:V_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ci},outputColorSpaceConfig:{drawingBufferColorSpace:Ci}},[Ci]:{primaries:e,whitePoint:a,transfer:qt,toXYZ:H_,fromXYZ:V_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ci}}}),r}const It=zM();function za(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Jr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Lr;class PM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Lr===void 0&&(Lr=_u("canvas")),Lr.width=e.width,Lr.height=e.height;const o=Lr.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=Lr}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=_u("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=za(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(za(n[a]/255)*255):n[a]=za(n[a]);return{data:n,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let FM=0;class Up{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=Ia(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(Wd(o[u].image)):c.push(Wd(o[u]))}else c=Wd(o);a.url=c}return n||(e.images[this.uuid]=a),a}}function Wd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?PM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}let BM=0;const Xd=new ee;class Wn extends er{constructor(e=Wn.DEFAULT_IMAGE,n=Wn.DEFAULT_MAPPING,a=La,o=La,c=kn,u=$s,h=Hi,m=_i,p=Wn.DEFAULT_ANISOTROPY,_=ys){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=Ia(),this.name="",this.source=new Up(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xd).x}get height(){return this.source.getSize(Xd).y}get depth(){return this.source.getSize(Xd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){ft(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ft(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pl:e.x=e.x-Math.floor(e.x);break;case La:e.x=e.x<0?0:1;break;case Ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pl:e.y=e.y-Math.floor(e.y);break;case La:e.y=e.y<0?0:1;break;case Ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=jv;Wn.DEFAULT_ANISOTROPY=1;const Hp=class Hp{constructor(e=0,n=0,a=0,o=1){this.x=e,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,o){return this.x=e,this.y=n,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,o,c;const m=e.elements,p=m[0],_=m[4],v=m[8],g=m[1],S=m[5],b=m[9],R=m[2],M=m[6],y=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-R)<.01&&Math.abs(b-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+R)<.1&&Math.abs(b+M)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const z=(p+1)/2,O=(S+1)/2,k=(y+1)/2,I=(_+g)/4,L=(v+R)/4,T=(b+M)/4;return z>O&&z>k?z<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(z),o=I/a,c=L/a):O>k?O<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(O),a=I/o,c=T/o):k<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(k),a=L/c,o=T/c),this.set(a,o,c,n),this}let D=Math.sqrt((M-b)*(M-b)+(v-R)*(v-R)+(g-_)*(g-_));return Math.abs(D)<.001&&(D=1),this.x=(M-b)/D,this.y=(v-R)/D,this.z=(g-_)/D,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ut(this.x,e.x,n.x),this.y=Ut(this.y,e.y,n.y),this.z=Ut(this.z,e.z,n.z),this.w=Ut(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ut(this.x,e,n),this.y=Ut(this.y,e,n),this.z=Ut(this.z,e,n),this.w=Ut(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ut(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hp.prototype.isVector4=!0;let _n=Hp;class GM extends er{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new _n(0,0,e,n),this.scissorTest=!1,this.viewport=new _n(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:a.depth},c=new Wn(o),u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new Up(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ra extends GM{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class ix extends Wn{constructor(e=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class HM extends Wn{constructor(e=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mu=class Mu{constructor(e,n,a,o,c,u,h,m,p,_,v,g,S,b,R,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,h,m,p,_,v,g,S,b,R,M)}set(e,n,a,o,c,u,h,m,p,_,v,g,S,b,R,M){const y=this.elements;return y[0]=e,y[4]=n,y[8]=a,y[12]=o,y[1]=c,y[5]=u,y[9]=h,y[13]=m,y[2]=p,y[6]=_,y[10]=v,y[14]=g,y[3]=S,y[7]=b,y[11]=R,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mu().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,a=e.elements,o=1/Or.setFromMatrixColumn(e,0).length(),c=1/Or.setFromMatrixColumn(e,1).length(),u=1/Or.setFromMatrixColumn(e,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,o=e.y,c=e.z,u=Math.cos(a),h=Math.sin(a),m=Math.cos(o),p=Math.sin(o),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const g=u*_,S=u*v,b=h*_,R=h*v;n[0]=m*_,n[4]=-m*v,n[8]=p,n[1]=S+b*p,n[5]=g-R*p,n[9]=-h*m,n[2]=R-g*p,n[6]=b+S*p,n[10]=u*m}else if(e.order==="YXZ"){const g=m*_,S=m*v,b=p*_,R=p*v;n[0]=g+R*h,n[4]=b*h-S,n[8]=u*p,n[1]=u*v,n[5]=u*_,n[9]=-h,n[2]=S*h-b,n[6]=R+g*h,n[10]=u*m}else if(e.order==="ZXY"){const g=m*_,S=m*v,b=p*_,R=p*v;n[0]=g-R*h,n[4]=-u*v,n[8]=b+S*h,n[1]=S+b*h,n[5]=u*_,n[9]=R-g*h,n[2]=-u*p,n[6]=h,n[10]=u*m}else if(e.order==="ZYX"){const g=u*_,S=u*v,b=h*_,R=h*v;n[0]=m*_,n[4]=b*p-S,n[8]=g*p+R,n[1]=m*v,n[5]=R*p+g,n[9]=S*p-b,n[2]=-p,n[6]=h*m,n[10]=u*m}else if(e.order==="YZX"){const g=u*m,S=u*p,b=h*m,R=h*p;n[0]=m*_,n[4]=R-g*v,n[8]=b*v+S,n[1]=v,n[5]=u*_,n[9]=-h*_,n[2]=-p*_,n[6]=S*v+b,n[10]=g-R*v}else if(e.order==="XZY"){const g=u*m,S=u*p,b=h*m,R=h*p;n[0]=m*_,n[4]=-v,n[8]=p*_,n[1]=g*v+R,n[5]=u*_,n[9]=S*v-b,n[2]=b*v-S,n[6]=h*_,n[10]=R*v+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(VM,e,kM)}lookAt(e,n,a){const o=this.elements;return pi.subVectors(e,n),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),hs.crossVectors(a,pi),hs.lengthSq()===0&&(Math.abs(a.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),hs.crossVectors(a,pi)),hs.normalize(),Dc.crossVectors(pi,hs),o[0]=hs.x,o[4]=Dc.x,o[8]=pi.x,o[1]=hs.y,o[5]=Dc.y,o[9]=pi.y,o[2]=hs.z,o[6]=Dc.z,o[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],h=a[4],m=a[8],p=a[12],_=a[1],v=a[5],g=a[9],S=a[13],b=a[2],R=a[6],M=a[10],y=a[14],D=a[3],z=a[7],O=a[11],k=a[15],I=o[0],L=o[4],T=o[8],U=o[12],H=o[1],B=o[5],q=o[9],de=o[13],me=o[2],Y=o[6],C=o[10],F=o[14],se=o[3],ge=o[7],we=o[11],P=o[15];return c[0]=u*I+h*H+m*me+p*se,c[4]=u*L+h*B+m*Y+p*ge,c[8]=u*T+h*q+m*C+p*we,c[12]=u*U+h*de+m*F+p*P,c[1]=_*I+v*H+g*me+S*se,c[5]=_*L+v*B+g*Y+S*ge,c[9]=_*T+v*q+g*C+S*we,c[13]=_*U+v*de+g*F+S*P,c[2]=b*I+R*H+M*me+y*se,c[6]=b*L+R*B+M*Y+y*ge,c[10]=b*T+R*q+M*C+y*we,c[14]=b*U+R*de+M*F+y*P,c[3]=D*I+z*H+O*me+k*se,c[7]=D*L+z*B+O*Y+k*ge,c[11]=D*T+z*q+O*C+k*we,c[15]=D*U+z*de+O*F+k*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],o=e[8],c=e[12],u=e[1],h=e[5],m=e[9],p=e[13],_=e[2],v=e[6],g=e[10],S=e[14],b=e[3],R=e[7],M=e[11],y=e[15],D=m*S-p*g,z=h*S-p*v,O=h*g-m*v,k=u*S-p*_,I=u*g-m*_,L=u*v-h*_;return n*(R*D-M*z+y*O)-a*(b*D-M*k+y*I)+o*(b*z-R*k+y*L)-c*(b*O-R*I+M*L)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=e[9],g=e[10],S=e[11],b=e[12],R=e[13],M=e[14],y=e[15],D=n*h-a*u,z=n*m-o*u,O=n*p-c*u,k=a*m-o*h,I=a*p-c*h,L=o*p-c*m,T=_*R-v*b,U=_*M-g*b,H=_*y-S*b,B=v*M-g*R,q=v*y-S*R,de=g*y-S*M,me=D*de-z*q+O*B+k*H-I*U+L*T;if(me===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/me;return e[0]=(h*de-m*q+p*B)*Y,e[1]=(o*q-a*de-c*B)*Y,e[2]=(R*L-M*I+y*k)*Y,e[3]=(g*I-v*L-S*k)*Y,e[4]=(m*H-u*de-p*U)*Y,e[5]=(n*de-o*H+c*U)*Y,e[6]=(M*O-b*L-y*z)*Y,e[7]=(_*L-g*O+S*z)*Y,e[8]=(u*q-h*H+p*T)*Y,e[9]=(a*H-n*q-c*T)*Y,e[10]=(b*I-R*O+y*D)*Y,e[11]=(v*O-_*I-S*D)*Y,e[12]=(h*U-u*B-m*T)*Y,e[13]=(n*B-a*U+o*T)*Y,e[14]=(R*z-b*k-M*D)*Y,e[15]=(_*k-v*z+g*D)*Y,this}scale(e){const n=this.elements,a=e.x,o=e.y,c=e.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=e.x,h=e.y,m=e.z,p=c*u,_=c*h;return this.set(p*u+a,p*h-o*m,p*m+o*h,0,p*h+o*m,_*h+a,_*m-o*u,0,p*m-o*h,_*m+o*u,c*m*m+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,o,c,u){return this.set(1,a,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,a){const o=this.elements,c=n._x,u=n._y,h=n._z,m=n._w,p=c+c,_=u+u,v=h+h,g=c*p,S=c*_,b=c*v,R=u*_,M=u*v,y=h*v,D=m*p,z=m*_,O=m*v,k=a.x,I=a.y,L=a.z;return o[0]=(1-(R+y))*k,o[1]=(S+O)*k,o[2]=(b-z)*k,o[3]=0,o[4]=(S-O)*I,o[5]=(1-(g+y))*I,o[6]=(M+D)*I,o[7]=0,o[8]=(b+z)*L,o[9]=(M-D)*L,o[10]=(1-(g+R))*L,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,a){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinant();if(c===0)return a.set(1,1,1),n.identity(),this;let u=Or.set(o[0],o[1],o[2]).length();const h=Or.set(o[4],o[5],o[6]).length(),m=Or.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Pi.copy(this);const p=1/u,_=1/h,v=1/m;return Pi.elements[0]*=p,Pi.elements[1]*=p,Pi.elements[2]*=p,Pi.elements[4]*=_,Pi.elements[5]*=_,Pi.elements[6]*=_,Pi.elements[8]*=v,Pi.elements[9]*=v,Pi.elements[10]*=v,n.setFromRotationMatrix(Pi),a.x=u,a.y=h,a.z=m,this}makePerspective(e,n,a,o,c,u,h=aa,m=!1){const p=this.elements,_=2*c/(n-e),v=2*c/(a-o),g=(n+e)/(n-e),S=(a+o)/(a-o);let b,R;if(m)b=c/(u-c),R=u*c/(u-c);else if(h===aa)b=-(u+c)/(u-c),R=-2*u*c/(u-c);else if(h===_l)b=-u/(u-c),R=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,a,o,c,u,h=aa,m=!1){const p=this.elements,_=2/(n-e),v=2/(a-o),g=-(n+e)/(n-e),S=-(a+o)/(a-o);let b,R;if(m)b=1/(u-c),R=u/(u-c);else if(h===aa)b=-2/(u-c),R=-(u+c)/(u-c);else if(h===_l)b=-1/(u-c),R=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}};Mu.prototype.isMatrix4=!0;let un=Mu;const Or=new ee,Pi=new un,VM=new ee(0,0,0),kM=new ee(1,1,1),hs=new ee,Dc=new ee,pi=new ee,k_=new un,W_=new so;class ki{constructor(e=0,n=0,a=0,o=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,o=this._order){return this._x=e,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const o=e.elements,c=o[0],u=o[4],h=o[8],m=o[1],p=o[5],_=o[9],v=o[2],g=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(Ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ut(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Ut(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return k_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(k_,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return W_.setFromEuler(this),this.setFromQuaternion(W_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class Lp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let WM=0;const X_=new ee,Ir=new so,Ra=new un,Nc=new ee,Ko=new ee,XM=new ee,YM=new so,Y_=new ee(1,0,0),q_=new ee(0,1,0),j_=new ee(0,0,1),Z_={type:"added"},qM={type:"removed"},zr={type:"childadded",child:null},Yd={type:"childremoved",child:null};class Xn extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=Ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new ee,n=new ki,a=new so,o=new ee(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new un},normalMatrix:{value:new vt}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ir.setFromAxisAngle(e,n),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,n){return Ir.setFromAxisAngle(e,n),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(Y_,e)}rotateY(e){return this.rotateOnAxis(q_,e)}rotateZ(e){return this.rotateOnAxis(j_,e)}translateOnAxis(e,n){return X_.copy(e).applyQuaternion(this.quaternion),this.position.add(X_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Y_,e)}translateY(e){return this.translateOnAxis(q_,e)}translateZ(e){return this.translateOnAxis(j_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ra.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Nc.copy(e):Nc.set(e,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ra.lookAt(Ko,Nc,this.up):Ra.lookAt(Nc,Ko,this.up),this.quaternion.setFromRotationMatrix(Ra),o&&(Ra.extractRotation(o.matrixWorld),Ir.setFromRotationMatrix(Ra),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Z_),zr.child=e,this.dispatchEvent(zr),zr.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(qM),Yd.child=e,this.dispatchEvent(Yd),Yd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ra.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ra.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ra),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Z_),zr.child=e,this.dispatchEvent(zr),zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,e,XM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,YM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,a=e.y,o=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*a-c[8]*o,c[13]+=a-c[1]*n-c[5]*a-c[9]*o,c[14]+=o-c[2]*n-c[6]*a-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(e.animations,m))}}if(n){const h=u(e.geometries),m=u(e.materials),p=u(e.textures),_=u(e.images),v=u(e.shapes),g=u(e.skeletons),S=u(e.animations),b=u(e.nodes);h.length>0&&(a.geometries=h),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),_.length>0&&(a.images=_),v.length>0&&(a.shapes=v),g.length>0&&(a.skeletons=g),S.length>0&&(a.animations=S),b.length>0&&(a.nodes=b)}return a.object=o,a;function u(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}Xn.DEFAULT_UP=new ee(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Uc extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jM={type:"move"};class qd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let o=null,c=null,u=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const R of e.hand.values()){const M=n.getJointPose(R,a),y=this._getHandJoint(p,R);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),S=.02,b=.005;p.inputState.pinching&&g>S+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=S-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=n.getPose(e.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(jM)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new Uc;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}const ax={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},Lc={h:0,s:0,l:0};function jd(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class Ct{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.colorSpaceToWorking(this,n),this}setRGB(e,n,a,o=It.workingColorSpace){return this.r=e,this.g=n,this.b=a,It.colorSpaceToWorking(this,o),this}setHSL(e,n,a,o=It.workingColorSpace){if(e=Np(e,1),n=Ut(n,0,1),a=Ut(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=jd(u,c,e+1/3),this.g=jd(u,c,e),this.b=jd(u,c,e-1/3)}return It.colorSpaceToWorking(this,o),this}setStyle(e,n=Ci){function a(c){c!==void 0&&parseFloat(c)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:ft("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ci){const a=ax[e.toLowerCase()];return a!==void 0?this.setHex(a,n):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=za(e.r),this.g=za(e.g),this.b=za(e.b),this}copyLinearToSRGB(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ci){return It.workingToColorSpace(Vn.copy(this),e),Math.round(Ut(Vn.r*255,0,255))*65536+Math.round(Ut(Vn.g*255,0,255))*256+Math.round(Ut(Vn.b*255,0,255))}getHexString(e=Ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=It.workingColorSpace){It.workingToColorSpace(Vn.copy(this),n);const a=Vn.r,o=Vn.g,c=Vn.b,u=Math.max(a,o,c),h=Math.min(a,o,c);let m,p;const _=(h+u)/2;if(h===u)m=0,p=0;else{const v=u-h;switch(p=_<=.5?v/(u+h):v/(2-u-h),u){case a:m=(o-c)/v+(o<c?6:0);break;case o:m=(c-a)/v+2;break;case c:m=(a-o)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,n=It.workingColorSpace){return It.workingToColorSpace(Vn.copy(this),n),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=Ci){It.workingToColorSpace(Vn.copy(this),e);const n=Vn.r,a=Vn.g,o=Vn.b;return e!==Ci?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,n,a){return this.getHSL(ps),this.setHSL(ps.h+e,ps.s+n,ps.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(ps),e.getHSL(Lc);const a=fl(ps.h,Lc.h,n),o=fl(ps.s,Lc.s,n),c=fl(ps.l,Lc.l,n);return this.setHSL(a,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new Ct;Ct.NAMES=ax;class Op{constructor(e,n=1,a=1e3){this.isFog=!0,this.name="",this.color=new Ct(e),this.near=n,this.far=a}clone(){return new Op(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ZM extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Fi=new ee,Ca=new ee,Zd=new ee,Da=new ee,Pr=new ee,Fr=new ee,$_=new ee,$d=new ee,Kd=new ee,Qd=new ee,Jd=new _n,eh=new _n,th=new _n;class vi{constructor(e=new ee,n=new ee,a=new ee){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,o){o.subVectors(a,n),Fi.subVectors(e,n),o.cross(Fi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,a,o,c){Fi.subVectors(o,n),Ca.subVectors(a,n),Zd.subVectors(e,n);const u=Fi.dot(Fi),h=Fi.dot(Ca),m=Fi.dot(Zd),p=Ca.dot(Ca),_=Ca.dot(Zd),v=u*p-h*h;if(v===0)return c.set(0,0,0),null;const g=1/v,S=(p*m-h*_)*g,b=(u*_-h*m)*g;return c.set(1-S-b,b,S)}static containsPoint(e,n,a,o){return this.getBarycoord(e,n,a,o,Da)===null?!1:Da.x>=0&&Da.y>=0&&Da.x+Da.y<=1}static getInterpolation(e,n,a,o,c,u,h,m){return this.getBarycoord(e,n,a,o,Da)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Da.x),m.addScaledVector(u,Da.y),m.addScaledVector(h,Da.z),m)}static getInterpolatedAttribute(e,n,a,o,c,u){return Jd.setScalar(0),eh.setScalar(0),th.setScalar(0),Jd.fromBufferAttribute(e,n),eh.fromBufferAttribute(e,a),th.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Jd,c.x),u.addScaledVector(eh,c.y),u.addScaledVector(th,c.z),u}static isFrontFacing(e,n,a,o){return Fi.subVectors(a,n),Ca.subVectors(e,n),Fi.cross(Ca).dot(o)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,o){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,a,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),Ca.subVectors(this.a,this.b),Fi.cross(Ca).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return vi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,o,c){return vi.getInterpolation(e,this.a,this.b,this.c,n,a,o,c)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,o=this.b,c=this.c;let u,h;Pr.subVectors(o,a),Fr.subVectors(c,a),$d.subVectors(e,a);const m=Pr.dot($d),p=Fr.dot($d);if(m<=0&&p<=0)return n.copy(a);Kd.subVectors(e,o);const _=Pr.dot(Kd),v=Fr.dot(Kd);if(_>=0&&v<=_)return n.copy(o);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return u=m/(m-_),n.copy(a).addScaledVector(Pr,u);Qd.subVectors(e,c);const S=Pr.dot(Qd),b=Fr.dot(Qd);if(b>=0&&S<=b)return n.copy(c);const R=S*p-m*b;if(R<=0&&p>=0&&b<=0)return h=p/(p-b),n.copy(a).addScaledVector(Fr,h);const M=_*b-S*v;if(M<=0&&v-_>=0&&S-b>=0)return $_.subVectors(c,o),h=(v-_)/(v-_+(S-b)),n.copy(o).addScaledVector($_,h);const y=1/(M+R+g);return u=R*y,h=g*y,n.copy(a).addScaledVector(Pr,u).addScaledVector(Fr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Es{constructor(e=new ee(1/0,1/0,1/0),n=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(Bi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(Bi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=Bi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Bi):Bi.fromBufferAttribute(c,u),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oc.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Oc.copy(a.boundingBox)),Oc.applyMatrix4(e.matrixWorld),this.union(Oc)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qo),Ic.subVectors(this.max,Qo),Br.subVectors(e.a,Qo),Gr.subVectors(e.b,Qo),Hr.subVectors(e.c,Qo),ms.subVectors(Gr,Br),gs.subVectors(Hr,Gr),ks.subVectors(Br,Hr);let n=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-ks.z,ks.y,ms.z,0,-ms.x,gs.z,0,-gs.x,ks.z,0,-ks.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-ks.y,ks.x,0];return!nh(n,Br,Gr,Hr,Ic)||(n=[1,0,0,0,1,0,0,0,1],!nh(n,Br,Gr,Hr,Ic))?!1:(zc.crossVectors(ms,gs),n=[zc.x,zc.y,zc.z],nh(n,Br,Gr,Hr,Ic))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Na),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Na=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],Bi=new ee,Oc=new Es,Br=new ee,Gr=new ee,Hr=new ee,ms=new ee,gs=new ee,ks=new ee,Qo=new ee,Ic=new ee,zc=new ee,Ws=new ee;function nh(r,e,n,a,o){for(let c=0,u=r.length-3;c<=u;c+=3){Ws.fromArray(r,c);const h=o.x*Math.abs(Ws.x)+o.y*Math.abs(Ws.y)+o.z*Math.abs(Ws.z),m=e.dot(Ws),p=n.dot(Ws),_=a.dot(Ws);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const Tn=new ee,Pc=new Mt;let $M=0;class Vi extends er{constructor(e,n,a=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$M++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=dp,this.updateRanges=[],this.gpuType=ia,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Pc.fromBufferAttribute(this,n),Pc.applyMatrix3(e),this.setXY(n,Pc.x,Pc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Tn.fromBufferAttribute(this,n),Tn.applyMatrix3(e),this.setXYZ(n,Tn.x,Tn.y,Tn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)Tn.fromBufferAttribute(this,n),Tn.applyMatrix4(e),this.setXYZ(n,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Tn.fromBufferAttribute(this,n),Tn.applyNormalMatrix(e),this.setXYZ(n,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Tn.fromBufferAttribute(this,n),Tn.transformDirection(e),this.setXYZ(n,Tn.x,Tn.y,Tn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Gi(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=jt(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Gi(n,this.array)),n}setX(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Gi(n,this.array)),n}setY(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Gi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Gi(n,this.array)),n}setW(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),a=jt(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,o){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),a=jt(a,this.array),o=jt(o,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,n,a,o,c){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),a=jt(a,this.array),o=jt(o,this.array),c=jt(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class sx extends Vi{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class rx extends Vi{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class Zn extends Vi{constructor(e,n,a){super(new Float32Array(e),n,a)}}const KM=new Es,Jo=new ee,ih=new ee;class bu{constructor(e=new ee,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):KM.setFromPoints(e).getCenter(a);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jo.subVectors(e,this.center);const n=Jo.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(Jo,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ih.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jo.copy(e.center).add(ih)),this.expandByPoint(Jo.copy(e.center).sub(ih))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let QM=0;const Ri=new un,ah=new Xn,Vr=new ee,mi=new Es,el=new Es,Ln=new ee;class xi extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=Ia(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mM(e)?rx:sx)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new vt().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,n,a){return Ri.makeTranslation(e,n,a),this.applyMatrix4(Ri),this}scale(e,n,a){return Ri.makeScale(e,n,a),this.applyMatrix4(Ri),this}lookAt(e){return ah.lookAt(e),ah.updateMatrix(),this.applyMatrix4(ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Zn(a,3))}else{const a=Math.min(e.length,n.count);for(let o=0;o<a;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Es);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];mi.setFromBufferAttribute(c),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const a=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];el.setFromBufferAttribute(h),this.morphTargetsRelative?(Ln.addVectors(mi.min,el.min),mi.expandByPoint(Ln),Ln.addVectors(mi.max,el.max),mi.expandByPoint(Ln)):(mi.expandByPoint(el.min),mi.expandByPoint(el.max))}mi.getCenter(a);let o=0;for(let c=0,u=e.count;c<u;c++)Ln.fromBufferAttribute(e,c),o=Math.max(o,a.distanceToSquared(Ln));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)Ln.fromBufferAttribute(h,p),m&&(Vr.fromBufferAttribute(e,p),Ln.add(Vr)),o=Math.max(o,a.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vi(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),h=[],m=[];for(let T=0;T<a.count;T++)h[T]=new ee,m[T]=new ee;const p=new ee,_=new ee,v=new ee,g=new Mt,S=new Mt,b=new Mt,R=new ee,M=new ee;function y(T,U,H){p.fromBufferAttribute(a,T),_.fromBufferAttribute(a,U),v.fromBufferAttribute(a,H),g.fromBufferAttribute(c,T),S.fromBufferAttribute(c,U),b.fromBufferAttribute(c,H),_.sub(p),v.sub(p),S.sub(g),b.sub(g);const B=1/(S.x*b.y-b.x*S.y);isFinite(B)&&(R.copy(_).multiplyScalar(b.y).addScaledVector(v,-S.y).multiplyScalar(B),M.copy(v).multiplyScalar(S.x).addScaledVector(_,-b.x).multiplyScalar(B),h[T].add(R),h[U].add(R),h[H].add(R),m[T].add(M),m[U].add(M),m[H].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let T=0,U=D.length;T<U;++T){const H=D[T],B=H.start,q=H.count;for(let de=B,me=B+q;de<me;de+=3)y(e.getX(de+0),e.getX(de+1),e.getX(de+2))}const z=new ee,O=new ee,k=new ee,I=new ee;function L(T){k.fromBufferAttribute(o,T),I.copy(k);const U=h[T];z.copy(U),z.sub(k.multiplyScalar(k.dot(U))).normalize(),O.crossVectors(I,U);const B=O.dot(m[T])<0?-1:1;u.setXYZW(T,z.x,z.y,z.z,B)}for(let T=0,U=D.length;T<U;++T){const H=D[T],B=H.start,q=H.count;for(let de=B,me=B+q;de<me;de+=3)L(e.getX(de+0)),L(e.getX(de+1)),L(e.getX(de+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Vi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let g=0,S=a.count;g<S;g++)a.setXYZ(g,0,0,0);const o=new ee,c=new ee,u=new ee,h=new ee,m=new ee,p=new ee,_=new ee,v=new ee;if(e)for(let g=0,S=e.count;g<S;g+=3){const b=e.getX(g+0),R=e.getX(g+1),M=e.getX(g+2);o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,M),_.subVectors(u,c),v.subVectors(o,c),_.cross(v),h.fromBufferAttribute(a,b),m.fromBufferAttribute(a,R),p.fromBufferAttribute(a,M),h.add(_),m.add(_),p.add(_),a.setXYZ(b,h.x,h.y,h.z),a.setXYZ(R,m.x,m.y,m.z),a.setXYZ(M,p.x,p.y,p.z)}else for(let g=0,S=n.count;g<S;g+=3)o.fromBufferAttribute(n,g+0),c.fromBufferAttribute(n,g+1),u.fromBufferAttribute(n,g+2),_.subVectors(u,c),v.subVectors(o,c),_.cross(v),a.setXYZ(g+0,_.x,_.y,_.z),a.setXYZ(g+1,_.x,_.y,_.z),a.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)Ln.fromBufferAttribute(e,n),Ln.normalize(),e.setXYZ(n,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,v=h.normalized,g=new p.constructor(m.length*_);let S=0,b=0;for(let R=0,M=m.length;R<M;R++){h.isInterleavedBufferAttribute?S=m[R]*h.data.stride+h.offset:S=m[R]*_;for(let y=0;y<_;y++)g[b++]=p[S++]}return new Vi(g,_,v)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new xi,a=this.index.array,o=this.attributes;for(const h in o){const m=o[h],p=e(m,a);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,v=p.length;_<v;_++){const g=p[_],S=e(g,a);m.push(S)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,m=u.length;h<m;h++){const p=u[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const S=p[v];_.push(S.toJSON(e.data))}_.length>0&&(o[m]=_,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const p in o){const _=o[p];this.setAttribute(p,_.clone(n))}const c=e.morphAttributes;for(const p in c){const _=[],v=c[p];for(let g=0,S=v.length;g<S;g++)_.push(v[g].clone(n));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,_=u.length;p<_;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class JM{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=dp,this.updateRanges=[],this.version=0,this.uuid=Ia()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,a){e*=this.stride,a*=n.stride;for(let o=0,c=this.stride;o<c;o++)this.array[e+o]=n.array[a+o];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ia()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ia()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qn=new ee;class xu{constructor(e,n,a,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=a,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,a=this.data.count;n<a;n++)qn.fromBufferAttribute(this,n),qn.applyMatrix4(e),this.setXYZ(n,qn.x,qn.y,qn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)qn.fromBufferAttribute(this,n),qn.applyNormalMatrix(e),this.setXYZ(n,qn.x,qn.y,qn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)qn.fromBufferAttribute(this,n),qn.transformDirection(e),this.setXYZ(n,qn.x,qn.y,qn.z);return this}getComponent(e,n){let a=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(a=Gi(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=jt(a,this.array)),this.data.array[e*this.data.stride+this.offset+n]=a,this}setX(e,n){return this.normalized&&(n=jt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=jt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=jt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=jt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Gi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Gi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Gi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Gi(n,this.array)),n}setXY(e,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=jt(n,this.array),a=jt(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this}setXYZ(e,n,a,o){return e=e*this.data.stride+this.offset,this.normalized&&(n=jt(n,this.array),a=jt(a,this.array),o=jt(o,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=o,this}setXYZW(e,n,a,o,c){return e=e*this.data.stride+this.offset,this.normalized&&(n=jt(n,this.array),a=jt(a,this.array),o=jt(o,this.array),c=jt(c,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=o,this.data.array[e+3]=c,this}clone(e){if(e===void 0){vu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return new Vi(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new xu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){vu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let eE=0;class bs extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eE++}),this.uuid=Ia(),this.name="",this.type="Material",this.blending=Kr,this.side=Ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ah,this.blendDst=wh,this.blendEquation=js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=z_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){ft(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ft(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(a.blending=this.blending),this.side!==Ms&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Ah&&(a.blendSrc=this.blendSrc),this.blendDst!==wh&&(a.blendDst=this.blendDst),this.blendEquation!==js&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==z_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ur&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Ur&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Ur&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const h in c){const m=c[h];delete m.metadata,u.push(m)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class pp extends bs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let kr;const tl=new ee,Wr=new ee,Xr=new ee,Yr=new Mt,nl=new Mt,ox=new un,Fc=new ee,il=new ee,Bc=new ee,K_=new Mt,sh=new Mt,Q_=new Mt;class tE extends Xn{constructor(e=new pp){if(super(),this.isSprite=!0,this.type="Sprite",kr===void 0){kr=new xi;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new JM(n,5);kr.setIndex([0,1,2,0,2,3]),kr.setAttribute("position",new xu(a,3,0,!1)),kr.setAttribute("uv",new xu(a,2,3,!1))}this.geometry=kr,this.material=e,this.center=new Mt(.5,.5),this.count=1}raycast(e,n){e.camera===null&&Ot('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wr.setFromMatrixScale(this.matrixWorld),ox.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wr.multiplyScalar(-Xr.z);const a=this.material.rotation;let o,c;a!==0&&(c=Math.cos(a),o=Math.sin(a));const u=this.center;Gc(Fc.set(-.5,-.5,0),Xr,u,Wr,o,c),Gc(il.set(.5,-.5,0),Xr,u,Wr,o,c),Gc(Bc.set(.5,.5,0),Xr,u,Wr,o,c),K_.set(0,0),sh.set(1,0),Q_.set(1,1);let h=e.ray.intersectTriangle(Fc,il,Bc,!1,tl);if(h===null&&(Gc(il.set(-.5,.5,0),Xr,u,Wr,o,c),sh.set(0,1),h=e.ray.intersectTriangle(Fc,Bc,il,!1,tl),h===null))return;const m=e.ray.origin.distanceTo(tl);m<e.near||m>e.far||n.push({distance:m,point:tl.clone(),uv:vi.getInterpolation(tl,Fc,il,Bc,K_,sh,Q_,new Mt),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Gc(r,e,n,a,o,c){Yr.subVectors(r,n).addScalar(.5).multiply(a),o!==void 0?(nl.x=c*Yr.x-o*Yr.y,nl.y=o*Yr.x+c*Yr.y):nl.copy(Yr),r.copy(e),r.x+=nl.x,r.y+=nl.y,r.applyMatrix4(ox)}const Ua=new ee,rh=new ee,Hc=new ee,_s=new ee,oh=new ee,Vc=new ee,lh=new ee;class Ip{constructor(e=new ee,n=new ee(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ua)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ua.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ua.copy(this.origin).addScaledVector(this.direction,n),Ua.distanceToSquared(e))}distanceSqToSegment(e,n,a,o){rh.copy(e).add(n).multiplyScalar(.5),Hc.copy(n).sub(e).normalize(),_s.copy(this.origin).sub(rh);const c=e.distanceTo(n)*.5,u=-this.direction.dot(Hc),h=_s.dot(this.direction),m=-_s.dot(Hc),p=_s.lengthSq(),_=Math.abs(1-u*u);let v,g,S,b;if(_>0)if(v=u*m-h,g=u*h-m,b=c*_,v>=0)if(g>=-b)if(g<=b){const R=1/_;v*=R,g*=R,S=v*(v+u*g+2*h)+g*(u*v+g+2*m)+p}else g=c,v=Math.max(0,-(u*g+h)),S=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(u*g+h)),S=-v*v+g*(g+2*m)+p;else g<=-b?(v=Math.max(0,-(-u*c+h)),g=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p):g<=b?(v=0,g=Math.min(Math.max(-c,-m),c),S=g*(g+2*m)+p):(v=Math.max(0,-(u*c+h)),g=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p);else g=u>0?-c:c,v=Math.max(0,-(u*g+h)),S=-v*v+g*(g+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(rh).addScaledVector(Hc,g),S}intersectSphere(e,n){Ua.subVectors(e.center,this.origin);const a=Ua.dot(this.direction),o=Ua.dot(Ua)-a*a,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=a-u,m=a+u;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,o,c,u,h,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(a=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(a=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),_>=0?(c=(e.min.y-g.y)*_,u=(e.max.y-g.y)*_):(c=(e.max.y-g.y)*_,u=(e.min.y-g.y)*_),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),v>=0?(h=(e.min.z-g.z)*v,m=(e.max.z-g.z)*v):(h=(e.max.z-g.z)*v,m=(e.min.z-g.z)*v),a>m||h>o)||((h>a||a!==a)&&(a=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(e){return this.intersectBox(e,Ua)!==null}intersectTriangle(e,n,a,o,c){oh.subVectors(n,e),Vc.subVectors(a,e),lh.crossVectors(oh,Vc);let u=this.direction.dot(lh),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;_s.subVectors(this.origin,e);const m=h*this.direction.dot(Vc.crossVectors(_s,Vc));if(m<0)return null;const p=h*this.direction.dot(oh.cross(_s));if(p<0||m+p>u)return null;const _=-h*_s.dot(lh);return _<0?null:this.at(_/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tu extends bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=Mp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const J_=new un,Xs=new Ip,kc=new bu,ev=new ee,Wc=new ee,Xc=new ee,Yc=new ee,ch=new ee,qc=new ee,tv=new ee,jc=new ee;class tn extends Xn{constructor(e=new xi,n=new Tu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){qc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],v=c[m];_!==0&&(ch.fromBufferAttribute(v,e),u?qc.addScaledVector(ch,_):qc.addScaledVector(ch.sub(n),_))}n.add(qc)}return n}raycast(e,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),kc.copy(a.boundingSphere),kc.applyMatrix4(c),Xs.copy(e.ray).recast(e.near),!(kc.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(kc,ev)===null||Xs.origin.distanceToSquared(ev)>(e.far-e.near)**2))&&(J_.copy(c).invert(),Xs.copy(e.ray).applyMatrix4(J_),!(a.boundingBox!==null&&Xs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Xs)))}_computeIntersections(e,n,a){let o;const c=this.geometry,u=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(u))for(let b=0,R=g.length;b<R;b++){const M=g[b],y=u[M.materialIndex],D=Math.max(M.start,S.start),z=Math.min(h.count,Math.min(M.start+M.count,S.start+S.count));for(let O=D,k=z;O<k;O+=3){const I=h.getX(O),L=h.getX(O+1),T=h.getX(O+2);o=Zc(this,y,e,a,p,_,v,I,L,T),o&&(o.faceIndex=Math.floor(O/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const b=Math.max(0,S.start),R=Math.min(h.count,S.start+S.count);for(let M=b,y=R;M<y;M+=3){const D=h.getX(M),z=h.getX(M+1),O=h.getX(M+2);o=Zc(this,u,e,a,p,_,v,D,z,O),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let b=0,R=g.length;b<R;b++){const M=g[b],y=u[M.materialIndex],D=Math.max(M.start,S.start),z=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let O=D,k=z;O<k;O+=3){const I=O,L=O+1,T=O+2;o=Zc(this,y,e,a,p,_,v,I,L,T),o&&(o.faceIndex=Math.floor(O/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const b=Math.max(0,S.start),R=Math.min(m.count,S.start+S.count);for(let M=b,y=R;M<y;M+=3){const D=M,z=M+1,O=M+2;o=Zc(this,u,e,a,p,_,v,D,z,O),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function nE(r,e,n,a,o,c,u,h){let m;if(e.side===ai?m=a.intersectTriangle(u,c,o,!0,h):m=a.intersectTriangle(o,c,u,e.side===Ms,h),m===null)return null;jc.copy(h),jc.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(jc);return p<n.near||p>n.far?null:{distance:p,point:jc.clone(),object:r}}function Zc(r,e,n,a,o,c,u,h,m,p){r.getVertexPosition(h,Wc),r.getVertexPosition(m,Xc),r.getVertexPosition(p,Yc);const _=nE(r,e,n,a,Wc,Xc,Yc,tv);if(_){const v=new ee;vi.getBarycoord(tv,Wc,Xc,Yc,v),o&&(_.uv=vi.getInterpolatedAttribute(o,h,m,p,v,new Mt)),c&&(_.uv1=vi.getInterpolatedAttribute(c,h,m,p,v,new Mt)),u&&(_.normal=vi.getInterpolatedAttribute(u,h,m,p,v,new ee),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new ee,materialIndex:0};vi.getNormal(Wc,Xc,Yc,g.normal),_.face=g,_.barycoord=v}return _}class iE extends Wn{constructor(e=null,n=1,a=1,o,c,u,h,m,p=Fn,_=Fn,v,g){super(null,u,h,m,p,_,o,c,v,g),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uh=new ee,aE=new ee,sE=new vt;class qs{constructor(e=new ee(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,o){return this.normal.set(e,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const o=uh.subVectors(a,n).cross(aE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,a=!0){const o=e.delta(uh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return a===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||sE.getNormalMatrix(e),o=this.coplanarPoint(uh).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ys=new bu,rE=new Mt(.5,.5),$c=new ee;class zp{constructor(e=new qs,n=new qs,a=new qs,o=new qs,c=new qs,u=new qs){this.planes=[e,n,a,o,c,u]}set(e,n,a,o,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=aa,a=!1){const o=this.planes,c=e.elements,u=c[0],h=c[1],m=c[2],p=c[3],_=c[4],v=c[5],g=c[6],S=c[7],b=c[8],R=c[9],M=c[10],y=c[11],D=c[12],z=c[13],O=c[14],k=c[15];if(o[0].setComponents(p-u,S-_,y-b,k-D).normalize(),o[1].setComponents(p+u,S+_,y+b,k+D).normalize(),o[2].setComponents(p+h,S+v,y+R,k+z).normalize(),o[3].setComponents(p-h,S-v,y-R,k-z).normalize(),a)o[4].setComponents(m,g,M,O).normalize(),o[5].setComponents(p-m,S-g,y-M,k-O).normalize();else if(o[4].setComponents(p-m,S-g,y-M,k-O).normalize(),n===aa)o[5].setComponents(p+m,S+g,y+M,k+O).normalize();else if(n===_l)o[5].setComponents(m,g,M,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ys)}intersectsSprite(e){Ys.center.set(0,0,0);const n=rE.distanceTo(e.center);return Ys.radius=.7071067811865476+n,Ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ys)}intersectsSphere(e){const n=this.planes,a=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if($c.x=o.normal.x>0?e.max.x:e.min.x,$c.y=o.normal.y>0?e.max.y:e.min.y,$c.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint($c)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class no extends bs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yu=new ee,Su=new ee,nv=new un,al=new Ip,Kc=new bu,fh=new ee,iv=new ee;class oE extends Xn{constructor(e=new xi,n=new no){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[0];for(let o=1,c=n.count;o<c;o++)yu.fromBufferAttribute(n,o-1),Su.fromBufferAttribute(n,o),a[o]=a[o-1],a[o]+=yu.distanceTo(Su);e.setAttribute("lineDistance",new Zn(a,1))}else ft("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const a=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Kc.copy(a.boundingSphere),Kc.applyMatrix4(o),Kc.radius+=c,e.ray.intersectsSphere(Kc)===!1)return;nv.copy(o).invert(),al.copy(e.ray).applyMatrix4(nv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,_=a.index,g=a.attributes.position;if(_!==null){const S=Math.max(0,u.start),b=Math.min(_.count,u.start+u.count);for(let R=S,M=b-1;R<M;R+=p){const y=_.getX(R),D=_.getX(R+1),z=Qc(this,e,al,m,y,D,R);z&&n.push(z)}if(this.isLineLoop){const R=_.getX(b-1),M=_.getX(S),y=Qc(this,e,al,m,R,M,b-1);y&&n.push(y)}}else{const S=Math.max(0,u.start),b=Math.min(g.count,u.start+u.count);for(let R=S,M=b-1;R<M;R+=p){const y=Qc(this,e,al,m,R,R+1,R);y&&n.push(y)}if(this.isLineLoop){const R=Qc(this,e,al,m,b-1,S,b-1);R&&n.push(R)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Qc(r,e,n,a,o,c,u){const h=r.geometry.attributes.position;if(yu.fromBufferAttribute(h,o),Su.fromBufferAttribute(h,c),n.distanceSqToSegment(yu,Su,fh,iv)>a)return;fh.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(fh);if(!(p<e.near||p>e.far))return{distance:p,point:iv.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}const av=new ee,sv=new ee;class xl extends oE{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[];for(let o=0,c=n.count;o<c;o+=2)av.fromBufferAttribute(n,o),sv.fromBufferAttribute(n,o+1),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+av.distanceTo(sv);e.setAttribute("lineDistance",new Zn(a,1))}else ft("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lx extends Wn{constructor(e=[],n=Qs,a,o,c,u,h,m,p,_){super(e,n,a,o,c,u,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cx extends Wn{constructor(e,n,a,o,c,u,h,m,p){super(e,n,a,o,c,u,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class io extends Wn{constructor(e,n,a=oa,o,c,u,h=Fn,m=Fn,p,_=Fa,v=1){if(_!==Fa&&_!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:v};super(g,o,c,u,h,m,_,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Up(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class lE extends io{constructor(e,n=oa,a=Qs,o,c,u=Fn,h=Fn,m,p=Fa){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,n,a,o,c,u,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ux extends Wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class hn extends xi{constructor(e=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],_=[],v=[];let g=0,S=0;b("z","y","x",-1,-1,a,n,e,u,c,0),b("z","y","x",1,-1,a,n,-e,u,c,1),b("x","z","y",1,1,e,a,n,o,u,2),b("x","z","y",1,-1,e,a,-n,o,u,3),b("x","y","z",1,-1,e,n,a,o,c,4),b("x","y","z",-1,-1,e,n,-a,o,c,5),this.setIndex(m),this.setAttribute("position",new Zn(p,3)),this.setAttribute("normal",new Zn(_,3)),this.setAttribute("uv",new Zn(v,2));function b(R,M,y,D,z,O,k,I,L,T,U){const H=O/L,B=k/T,q=O/2,de=k/2,me=I/2,Y=L+1,C=T+1;let F=0,se=0;const ge=new ee;for(let we=0;we<C;we++){const P=we*B-de;for(let ie=0;ie<Y;ie++){const be=ie*H-q;ge[R]=be*D,ge[M]=P*z,ge[y]=me,p.push(ge.x,ge.y,ge.z),ge[R]=0,ge[M]=0,ge[y]=I>0?1:-1,_.push(ge.x,ge.y,ge.z),v.push(ie/L),v.push(1-we/T),F+=1}}for(let we=0;we<T;we++)for(let P=0;P<L;P++){const ie=g+P+Y*we,be=g+P+Y*(we+1),Oe=g+(P+1)+Y*(we+1),He=g+(P+1)+Y*we;m.push(ie,be,He),m.push(be,Oe,He),se+=6}h.addGroup(S,se,U),S+=se,g+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const Jc=new ee,eu=new ee,dh=new ee,tu=new vi;class yl extends xi{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const o=Math.pow(10,4),c=Math.cos(Qr*n),u=e.getIndex(),h=e.getAttribute("position"),m=u?u.count:h.count,p=[0,0,0],_=["a","b","c"],v=new Array(3),g={},S=[];for(let b=0;b<m;b+=3){u?(p[0]=u.getX(b),p[1]=u.getX(b+1),p[2]=u.getX(b+2)):(p[0]=b,p[1]=b+1,p[2]=b+2);const{a:R,b:M,c:y}=tu;if(R.fromBufferAttribute(h,p[0]),M.fromBufferAttribute(h,p[1]),y.fromBufferAttribute(h,p[2]),tu.getNormal(dh),v[0]=`${Math.round(R.x*o)},${Math.round(R.y*o)},${Math.round(R.z*o)}`,v[1]=`${Math.round(M.x*o)},${Math.round(M.y*o)},${Math.round(M.z*o)}`,v[2]=`${Math.round(y.x*o)},${Math.round(y.y*o)},${Math.round(y.z*o)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let D=0;D<3;D++){const z=(D+1)%3,O=v[D],k=v[z],I=tu[_[D]],L=tu[_[z]],T=`${O}_${k}`,U=`${k}_${O}`;U in g&&g[U]?(dh.dot(g[U].normal)<=c&&(S.push(I.x,I.y,I.z),S.push(L.x,L.y,L.z)),g[U]=null):T in g||(g[T]={index0:p[D],index1:p[z],normal:dh.clone()})}}for(const b in g)if(g[b]){const{index0:R,index1:M}=g[b];Jc.fromBufferAttribute(h,R),eu.fromBufferAttribute(h,M),S.push(Jc.x,Jc.y,Jc.z),S.push(eu.x,eu.y,eu.z)}this.setAttribute("position",new Zn(S,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Au extends xi{constructor(e=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:o};const c=e/2,u=n/2,h=Math.floor(a),m=Math.floor(o),p=h+1,_=m+1,v=e/h,g=n/m,S=[],b=[],R=[],M=[];for(let y=0;y<_;y++){const D=y*g-u;for(let z=0;z<p;z++){const O=z*v-c;b.push(O,-D,0),R.push(0,0,1),M.push(z/h),M.push(1-y/m)}}for(let y=0;y<m;y++)for(let D=0;D<h;D++){const z=D+p*y,O=D+p*(y+1),k=D+1+p*(y+1),I=D+1+p*y;S.push(z,O,I),S.push(O,k,I)}this.setIndex(S),this.setAttribute("position",new Zn(b,3)),this.setAttribute("normal",new Zn(R,3)),this.setAttribute("uv",new Zn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Au(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pp extends xi{constructor(e=1,n=32,a=16,o=0,c=Math.PI*2,u=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:a,phiStart:o,phiLength:c,thetaStart:u,thetaLength:h},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const m=Math.min(u+h,Math.PI);let p=0;const _=[],v=new ee,g=new ee,S=[],b=[],R=[],M=[];for(let y=0;y<=a;y++){const D=[],z=y/a;let O=0;y===0&&u===0?O=.5/n:y===a&&m===Math.PI&&(O=-.5/n);for(let k=0;k<=n;k++){const I=k/n;v.x=-e*Math.cos(o+I*c)*Math.sin(u+z*h),v.y=e*Math.cos(u+z*h),v.z=e*Math.sin(o+I*c)*Math.sin(u+z*h),b.push(v.x,v.y,v.z),g.copy(v).normalize(),R.push(g.x,g.y,g.z),M.push(I+O,1-z),D.push(p++)}_.push(D)}for(let y=0;y<a;y++)for(let D=0;D<n;D++){const z=_[y][D+1],O=_[y][D],k=_[y+1][D],I=_[y+1][D+1];(y!==0||u>0)&&S.push(z,O,I),(y!==a-1||m<Math.PI)&&S.push(O,k,I)}this.setIndex(S),this.setAttribute("position",new Zn(b,3)),this.setAttribute("normal",new Zn(R,3)),this.setAttribute("uv",new Zn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ao(r){const e={};for(const n in r){e[n]={};for(const a in r[n]){const o=r[n][a];if(rv(o))o.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=o.clone();else if(Array.isArray(o))if(rv(o[0])){const c=[];for(let u=0,h=o.length;u<h;u++)c[u]=o[u].clone();e[n][a]=c}else e[n][a]=o.slice();else e[n][a]=o}}return e}function jn(r){const e={};for(let n=0;n<r.length;n++){const a=ao(r[n]);for(const o in a)e[o]=a[o]}return e}function rv(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function cE(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function fx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}const uE={clone:ao,merge:jn};var fE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class la extends bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fE,this.fragmentShader=dE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ao(e.uniforms),this.uniformsGroups=cE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class hE extends la{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pE extends bs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pu,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vs extends bs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pu,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=Mp,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mE extends bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gE extends bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class dx extends Xn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const hh=new un,ov=new ee,lv=new ee;class _E{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.mapType=_i,this.map=null,this.mapPass=null,this.matrix=new un,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zp,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new _n(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,a=this.matrix;ov.setFromMatrixPosition(e.matrixWorld),n.position.copy(ov),lv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(lv),n.updateMatrixWorld(),hh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hh,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===_l||n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(hh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const nu=new ee,iu=new so,Qi=new ee;class hx extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=aa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(nu,iu,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nu,iu,Qi.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(nu,iu,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nu,iu,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xs=new ee,cv=new Mt,uv=new Mt;class gi extends hx{constructor(e=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=vl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vl*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xs.x,xs.y).multiplyScalar(-e/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(xs.x,xs.y).multiplyScalar(-e/xs.z)}getViewSize(e,n){return this.getViewBounds(e,cv,uv),n.subVectors(uv,cv)}setViewOffset(e,n,a,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Qr*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*a/p,o*=u.width/m,a*=u.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class vE extends _E{constructor(){super(new gi(90,1,.5,500)),this.isPointLightShadow=!0}}class xE extends dx{constructor(e,n,a=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new vE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class px extends hx{constructor(e=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-e,u=a+e,h=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class yE extends dx{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const qr=-90,jr=1;class SE extends Xn{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new gi(qr,jr,e,n);o.layers=this.layers,this.add(o);const c=new gi(qr,jr,e,n);c.layers=this.layers,this.add(c);const u=new gi(qr,jr,e,n);u.layers=this.layers,this.add(u);const h=new gi(qr,jr,e,n);h.layers=this.layers,this.add(h);const m=new gi(qr,jr,e,n);m.layers=this.layers,this.add(m);const p=new gi(qr,jr,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,h,m]=n;for(const p of n)this.remove(p);if(e===aa)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===_l)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,m,p,_]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const R=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(a,0,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(a,1,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(a,2,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(a,3,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),e.setRenderTarget(a,4,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),a.texture.generateMipmaps=R,e.setRenderTarget(a,5,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(n,_),e.setRenderTarget(v,g,S),e.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class ME extends gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const fv=new un;class dv{constructor(e,n,a=0,o=1/0){this.ray=new Ip(e,n),this.near=a,this.far=o,this.camera=null,this.layers=new Lp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Ot("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return fv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fv),this}intersectObject(e,n=!0,a=[]){return mp(e,this,a,n),a.sort(hv),a}intersectObjects(e,n=!0,a=[]){for(let o=0,c=e.length;o<c;o++)mp(e[o],this,a,n);return a.sort(hv),a}}function hv(r,e){return r.distance-e.distance}function mp(r,e,n,a){let o=!0;if(r.layers.test(e.layers)&&r.raycast(e,n)===!1&&(o=!1),o===!0&&a===!0){const c=r.children;for(let u=0,h=c.length;u<h;u++)mp(c[u],e,n,!0)}}const Vp=class Vp{constructor(e,n,a,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,a,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let a=0;a<4;a++)this.elements[a]=e[a+n];return this}set(e,n,a,o){const c=this.elements;return c[0]=e,c[2]=n,c[1]=a,c[3]=o,this}};Vp.prototype.isMatrix2=!0;let pv=Vp;function mv(r,e,n,a){const o=EE(a);switch(n){case Jv:return r*e;case tx:return r*e/o.components*o.byteLength;case Ap:return r*e/o.components*o.byteLength;case Js:return r*e*2/o.components*o.byteLength;case wp:return r*e*2/o.components*o.byteLength;case ex:return r*e*3/o.components*o.byteLength;case Hi:return r*e*4/o.components*o.byteLength;case Rp:return r*e*4/o.components*o.byteLength;case ou:case lu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case cu:case uu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ph:case Bh:return Math.max(r,16)*Math.max(e,8)/4;case zh:case Fh:return Math.max(r,8)*Math.max(e,8)/2;case Gh:case Hh:case kh:case Wh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Vh:case du:case Xh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Yh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case qh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case jh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case $h:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Kh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ep:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case tp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case np:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ip:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ap:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case sp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case rp:case op:case lp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case cp:case up:return Math.ceil(r/4)*Math.ceil(e/4)*8;case hu:case fp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function EE(r){switch(r){case _i:case Zv:return{byteLength:1,components:1};case ml:case $v:case Pa:return{byteLength:2,components:1};case bp:case Tp:return{byteLength:2,components:4};case oa:case Ep:case ia:return{byteLength:4,components:1};case Kv:case Qv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sp}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function mx(){let r=null,e=!1,n=null,a=null;function o(c,u){n(c,u),a=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&r!==null&&(a=r.requestAnimationFrame(o),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function bE(r){const e=new WeakMap;function n(h,m){const p=h.array,_=h.usage,v=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),h.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function a(h,m,p){const _=m.array,v=m.updateRanges;if(r.bindBuffer(p,h),v.length===0)r.bufferSubData(p,0,_);else{v.sort((S,b)=>S.start-b.start);let g=0;for(let S=1;S<v.length;S++){const b=v[g],R=v[S];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++g,v[g]=R)}v.length=g+1;for(let S=0,b=v.length;S<b;S++){const R=v[S];r.bufferSubData(p,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(r.deleteBuffer(m.buffer),e.delete(h))}function u(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,m),p.version=h.version}}return{get:o,remove:c,update:u}}var TE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AE=`#ifdef USE_ALPHAHASH
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
#endif`,wE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,DE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NE=`#ifdef USE_AOMAP
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
#endif`,UE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LE=`#ifdef USE_BATCHING
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
#endif`,OE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,FE=`#ifdef USE_IRIDESCENCE
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
#endif`,BE=`#ifdef USE_BUMPMAP
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
#endif`,GE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,HE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,XE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,YE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,jE=`#define PI 3.141592653589793
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
} // validated`,ZE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$E=`vec3 transformedNormal = objectNormal;
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
#endif`,KE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tb="gl_FragColor = linearToOutputTexel( gl_FragColor );",nb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ib=`#ifdef USE_ENVMAP
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
#endif`,ab=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,sb=`#ifdef USE_ENVMAP
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
#endif`,rb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ob=`#ifdef USE_ENVMAP
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
#endif`,lb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ub=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,db=`#ifdef USE_GRADIENTMAP
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
}`,hb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,_b=`#ifdef USE_ENVMAP
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
#endif`,vb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mb=`PhysicalMaterial material;
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
#endif`,Eb=`uniform sampler2D dfgLUT;
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
}`,bb=`
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
#endif`,Tb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ab=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Rb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Db=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ub=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ob=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ib=`#if defined( USE_POINTS_UV )
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
#endif`,zb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hb=`#ifdef USE_MORPHTARGETS
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
#endif`,Vb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jb=`#ifdef USE_NORMALMAP
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
#endif`,Zb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$b=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,t1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,u1=`float getShadowMask() {
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
}`,f1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d1=`#ifdef USE_SKINNING
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
#endif`,h1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p1=`#ifdef USE_SKINNING
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
#endif`,m1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,x1=`#ifdef USE_TRANSMISSION
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
#endif`,y1=`#ifdef USE_TRANSMISSION
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
#endif`,S1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const T1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,A1=`uniform sampler2D t2D;
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
}`,w1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N1=`#include <common>
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
}`,U1=`#if DEPTH_PACKING == 3200
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
}`,L1=`#define DISTANCE
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
}`,O1=`#define DISTANCE
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
}`,I1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P1=`uniform float scale;
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
}`,F1=`uniform vec3 diffuse;
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
}`,B1=`#include <common>
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
}`,G1=`uniform vec3 diffuse;
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
}`,H1=`#define LAMBERT
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
}`,V1=`#define LAMBERT
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
}`,k1=`#define MATCAP
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
}`,W1=`#define MATCAP
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
}`,X1=`#define NORMAL
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
}`,Y1=`#define NORMAL
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
}`,q1=`#define PHONG
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
}`,j1=`#define PHONG
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
}`,Z1=`#define STANDARD
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
}`,$1=`#define STANDARD
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
}`,K1=`#define TOON
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
}`,Q1=`#define TOON
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
}`,J1=`uniform float size;
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
}`,eT=`uniform vec3 diffuse;
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
}`,tT=`#include <common>
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
}`,nT=`uniform vec3 color;
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
}`,iT=`uniform float rotation;
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
}`,aT=`uniform vec3 diffuse;
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
}`,bt={alphahash_fragment:TE,alphahash_pars_fragment:AE,alphamap_fragment:wE,alphamap_pars_fragment:RE,alphatest_fragment:CE,alphatest_pars_fragment:DE,aomap_fragment:NE,aomap_pars_fragment:UE,batching_pars_vertex:LE,batching_vertex:OE,begin_vertex:IE,beginnormal_vertex:zE,bsdfs:PE,iridescence_fragment:FE,bumpmap_pars_fragment:BE,clipping_planes_fragment:GE,clipping_planes_pars_fragment:HE,clipping_planes_pars_vertex:VE,clipping_planes_vertex:kE,color_fragment:WE,color_pars_fragment:XE,color_pars_vertex:YE,color_vertex:qE,common:jE,cube_uv_reflection_fragment:ZE,defaultnormal_vertex:$E,displacementmap_pars_vertex:KE,displacementmap_vertex:QE,emissivemap_fragment:JE,emissivemap_pars_fragment:eb,colorspace_fragment:tb,colorspace_pars_fragment:nb,envmap_fragment:ib,envmap_common_pars_fragment:ab,envmap_pars_fragment:sb,envmap_pars_vertex:rb,envmap_physical_pars_fragment:_b,envmap_vertex:ob,fog_vertex:lb,fog_pars_vertex:cb,fog_fragment:ub,fog_pars_fragment:fb,gradientmap_pars_fragment:db,lightmap_pars_fragment:hb,lights_lambert_fragment:pb,lights_lambert_pars_fragment:mb,lights_pars_begin:gb,lights_toon_fragment:vb,lights_toon_pars_fragment:xb,lights_phong_fragment:yb,lights_phong_pars_fragment:Sb,lights_physical_fragment:Mb,lights_physical_pars_fragment:Eb,lights_fragment_begin:bb,lights_fragment_maps:Tb,lights_fragment_end:Ab,lightprobes_pars_fragment:wb,logdepthbuf_fragment:Rb,logdepthbuf_pars_fragment:Cb,logdepthbuf_pars_vertex:Db,logdepthbuf_vertex:Nb,map_fragment:Ub,map_pars_fragment:Lb,map_particle_fragment:Ob,map_particle_pars_fragment:Ib,metalnessmap_fragment:zb,metalnessmap_pars_fragment:Pb,morphinstance_vertex:Fb,morphcolor_vertex:Bb,morphnormal_vertex:Gb,morphtarget_pars_vertex:Hb,morphtarget_vertex:Vb,normal_fragment_begin:kb,normal_fragment_maps:Wb,normal_pars_fragment:Xb,normal_pars_vertex:Yb,normal_vertex:qb,normalmap_pars_fragment:jb,clearcoat_normal_fragment_begin:Zb,clearcoat_normal_fragment_maps:$b,clearcoat_pars_fragment:Kb,iridescence_pars_fragment:Qb,opaque_fragment:Jb,packing:e1,premultiplied_alpha_fragment:t1,project_vertex:n1,dithering_fragment:i1,dithering_pars_fragment:a1,roughnessmap_fragment:s1,roughnessmap_pars_fragment:r1,shadowmap_pars_fragment:o1,shadowmap_pars_vertex:l1,shadowmap_vertex:c1,shadowmask_pars_fragment:u1,skinbase_vertex:f1,skinning_pars_vertex:d1,skinning_vertex:h1,skinnormal_vertex:p1,specularmap_fragment:m1,specularmap_pars_fragment:g1,tonemapping_fragment:_1,tonemapping_pars_fragment:v1,transmission_fragment:x1,transmission_pars_fragment:y1,uv_pars_fragment:S1,uv_pars_vertex:M1,uv_vertex:E1,worldpos_vertex:b1,background_vert:T1,background_frag:A1,backgroundCube_vert:w1,backgroundCube_frag:R1,cube_vert:C1,cube_frag:D1,depth_vert:N1,depth_frag:U1,distance_vert:L1,distance_frag:O1,equirect_vert:I1,equirect_frag:z1,linedashed_vert:P1,linedashed_frag:F1,meshbasic_vert:B1,meshbasic_frag:G1,meshlambert_vert:H1,meshlambert_frag:V1,meshmatcap_vert:k1,meshmatcap_frag:W1,meshnormal_vert:X1,meshnormal_frag:Y1,meshphong_vert:q1,meshphong_frag:j1,meshphysical_vert:Z1,meshphysical_frag:$1,meshtoon_vert:K1,meshtoon_frag:Q1,points_vert:J1,points_frag:eT,shadow_vert:tT,shadow_frag:nT,sprite_vert:iT,sprite_frag:aT},Ze={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ee},probesMax:{value:new ee},probesResolution:{value:new ee}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},ta={basic:{uniforms:jn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.fog]),vertexShader:bt.meshbasic_vert,fragmentShader:bt.meshbasic_frag},lambert:{uniforms:jn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new Ct(0)},envMapIntensity:{value:1}}]),vertexShader:bt.meshlambert_vert,fragmentShader:bt.meshlambert_frag},phong:{uniforms:jn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:bt.meshphong_vert,fragmentShader:bt.meshphong_frag},standard:{uniforms:jn([Ze.common,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.roughnessmap,Ze.metalnessmap,Ze.fog,Ze.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag},toon:{uniforms:jn([Ze.common,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.gradientmap,Ze.fog,Ze.lights,{emissive:{value:new Ct(0)}}]),vertexShader:bt.meshtoon_vert,fragmentShader:bt.meshtoon_frag},matcap:{uniforms:jn([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,{matcap:{value:null}}]),vertexShader:bt.meshmatcap_vert,fragmentShader:bt.meshmatcap_frag},points:{uniforms:jn([Ze.points,Ze.fog]),vertexShader:bt.points_vert,fragmentShader:bt.points_frag},dashed:{uniforms:jn([Ze.common,Ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bt.linedashed_vert,fragmentShader:bt.linedashed_frag},depth:{uniforms:jn([Ze.common,Ze.displacementmap]),vertexShader:bt.depth_vert,fragmentShader:bt.depth_frag},normal:{uniforms:jn([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,{opacity:{value:1}}]),vertexShader:bt.meshnormal_vert,fragmentShader:bt.meshnormal_frag},sprite:{uniforms:jn([Ze.sprite,Ze.fog]),vertexShader:bt.sprite_vert,fragmentShader:bt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bt.background_vert,fragmentShader:bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:bt.backgroundCube_vert,fragmentShader:bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bt.cube_vert,fragmentShader:bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bt.equirect_vert,fragmentShader:bt.equirect_frag},distance:{uniforms:jn([Ze.common,Ze.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bt.distance_vert,fragmentShader:bt.distance_frag},shadow:{uniforms:jn([Ze.lights,Ze.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:bt.shadow_vert,fragmentShader:bt.shadow_frag}};ta.physical={uniforms:jn([ta.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag};const au={r:0,b:0,g:0},sT=new un,gx=new vt;gx.set(-1,0,0,0,1,0,0,0,1);function rT(r,e,n,a,o,c){const u=new Ct(0);let h=o===!0?0:1,m,p,_=null,v=0,g=null;function S(D){let z=D.isScene===!0?D.background:null;if(z&&z.isTexture){const O=D.backgroundBlurriness>0;z=e.get(z,O)}return z}function b(D){let z=!1;const O=S(D);O===null?M(u,h):O&&O.isColor&&(M(O,1),z=!0);const k=r.xr.getEnvironmentBlendMode();k==="additive"?n.buffers.color.setClear(0,0,0,1,c):k==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(r.autoClear||z)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function R(D,z){const O=S(z);O&&(O.isCubeTexture||O.mapping===Eu)?(p===void 0&&(p=new tn(new hn(1,1,1),new la({name:"BackgroundCubeMaterial",uniforms:ao(ta.backgroundCube.uniforms),vertexShader:ta.backgroundCube.vertexShader,fragmentShader:ta.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(k,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),p.material.uniforms.envMap.value=O,p.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(sT.makeRotationFromEuler(z.backgroundRotation)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(gx),p.material.toneMapped=It.getTransfer(O.colorSpace)!==qt,(_!==O||v!==O.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=O,v=O.version,g=r.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null)):O&&O.isTexture&&(m===void 0&&(m=new tn(new Au(2,2),new la({name:"BackgroundMaterial",uniforms:ao(ta.background.uniforms),vertexShader:ta.background.vertexShader,fragmentShader:ta.background.fragmentShader,side:Ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=O,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.toneMapped=It.getTransfer(O.colorSpace)!==qt,O.matrixAutoUpdate===!0&&O.updateMatrix(),m.material.uniforms.uvTransform.value.copy(O.matrix),(_!==O||v!==O.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=O,v=O.version,g=r.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function M(D,z){D.getRGB(au,fx(r)),n.buffers.color.setClear(au.r,au.g,au.b,z,c)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(D,z=1){u.set(D),h=z,M(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,M(u,h)},render:b,addToRenderList:R,dispose:y}}function oT(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=g(null);let c=o,u=!1;function h(B,q,de,me,Y){let C=!1;const F=v(B,me,de,q);c!==F&&(c=F,p(c.object)),C=S(B,me,de,Y),C&&b(B,me,de,Y),Y!==null&&e.update(Y,r.ELEMENT_ARRAY_BUFFER),(C||u)&&(u=!1,O(B,q,de,me),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function m(){return r.createVertexArray()}function p(B){return r.bindVertexArray(B)}function _(B){return r.deleteVertexArray(B)}function v(B,q,de,me){const Y=me.wireframe===!0;let C=a[q.id];C===void 0&&(C={},a[q.id]=C);const F=B.isInstancedMesh===!0?B.id:0;let se=C[F];se===void 0&&(se={},C[F]=se);let ge=se[de.id];ge===void 0&&(ge={},se[de.id]=ge);let we=ge[Y];return we===void 0&&(we=g(m()),ge[Y]=we),we}function g(B){const q=[],de=[],me=[];for(let Y=0;Y<n;Y++)q[Y]=0,de[Y]=0,me[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:de,attributeDivisors:me,object:B,attributes:{},index:null}}function S(B,q,de,me){const Y=c.attributes,C=q.attributes;let F=0;const se=de.getAttributes();for(const ge in se)if(se[ge].location>=0){const P=Y[ge];let ie=C[ge];if(ie===void 0&&(ge==="instanceMatrix"&&B.instanceMatrix&&(ie=B.instanceMatrix),ge==="instanceColor"&&B.instanceColor&&(ie=B.instanceColor)),P===void 0||P.attribute!==ie||ie&&P.data!==ie.data)return!0;F++}return c.attributesNum!==F||c.index!==me}function b(B,q,de,me){const Y={},C=q.attributes;let F=0;const se=de.getAttributes();for(const ge in se)if(se[ge].location>=0){let P=C[ge];P===void 0&&(ge==="instanceMatrix"&&B.instanceMatrix&&(P=B.instanceMatrix),ge==="instanceColor"&&B.instanceColor&&(P=B.instanceColor));const ie={};ie.attribute=P,P&&P.data&&(ie.data=P.data),Y[ge]=ie,F++}c.attributes=Y,c.attributesNum=F,c.index=me}function R(){const B=c.newAttributes;for(let q=0,de=B.length;q<de;q++)B[q]=0}function M(B){y(B,0)}function y(B,q){const de=c.newAttributes,me=c.enabledAttributes,Y=c.attributeDivisors;de[B]=1,me[B]===0&&(r.enableVertexAttribArray(B),me[B]=1),Y[B]!==q&&(r.vertexAttribDivisor(B,q),Y[B]=q)}function D(){const B=c.newAttributes,q=c.enabledAttributes;for(let de=0,me=q.length;de<me;de++)q[de]!==B[de]&&(r.disableVertexAttribArray(de),q[de]=0)}function z(B,q,de,me,Y,C,F){F===!0?r.vertexAttribIPointer(B,q,de,Y,C):r.vertexAttribPointer(B,q,de,me,Y,C)}function O(B,q,de,me){R();const Y=me.attributes,C=de.getAttributes(),F=q.defaultAttributeValues;for(const se in C){const ge=C[se];if(ge.location>=0){let we=Y[se];if(we===void 0&&(se==="instanceMatrix"&&B.instanceMatrix&&(we=B.instanceMatrix),se==="instanceColor"&&B.instanceColor&&(we=B.instanceColor)),we!==void 0){const P=we.normalized,ie=we.itemSize,be=e.get(we);if(be===void 0)continue;const Oe=be.buffer,He=be.type,oe=be.bytesPerElement,De=He===r.INT||He===r.UNSIGNED_INT||we.gpuType===Ep;if(we.isInterleavedBufferAttribute){const Re=we.data,$e=Re.stride,st=we.offset;if(Re.isInstancedInterleavedBuffer){for(let rt=0;rt<ge.locationSize;rt++)y(ge.location+rt,Re.meshPerAttribute);B.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let rt=0;rt<ge.locationSize;rt++)M(ge.location+rt);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let rt=0;rt<ge.locationSize;rt++)z(ge.location+rt,ie/ge.locationSize,He,P,$e*oe,(st+ie/ge.locationSize*rt)*oe,De)}else{if(we.isInstancedBufferAttribute){for(let Re=0;Re<ge.locationSize;Re++)y(ge.location+Re,we.meshPerAttribute);B.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let Re=0;Re<ge.locationSize;Re++)M(ge.location+Re);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let Re=0;Re<ge.locationSize;Re++)z(ge.location+Re,ie/ge.locationSize,He,P,ie*oe,ie/ge.locationSize*Re*oe,De)}}else if(F!==void 0){const P=F[se];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(ge.location,P);break;case 3:r.vertexAttrib3fv(ge.location,P);break;case 4:r.vertexAttrib4fv(ge.location,P);break;default:r.vertexAttrib1fv(ge.location,P)}}}}D()}function k(){U();for(const B in a){const q=a[B];for(const de in q){const me=q[de];for(const Y in me){const C=me[Y];for(const F in C)_(C[F].object),delete C[F];delete me[Y]}}delete a[B]}}function I(B){if(a[B.id]===void 0)return;const q=a[B.id];for(const de in q){const me=q[de];for(const Y in me){const C=me[Y];for(const F in C)_(C[F].object),delete C[F];delete me[Y]}}delete a[B.id]}function L(B){for(const q in a){const de=a[q];for(const me in de){const Y=de[me];if(Y[B.id]===void 0)continue;const C=Y[B.id];for(const F in C)_(C[F].object),delete C[F];delete Y[B.id]}}}function T(B){for(const q in a){const de=a[q],me=B.isInstancedMesh===!0?B.id:0,Y=de[me];if(Y!==void 0){for(const C in Y){const F=Y[C];for(const se in F)_(F[se].object),delete F[se];delete Y[C]}delete de[me],Object.keys(de).length===0&&delete a[q]}}}function U(){H(),u=!0,c!==o&&(c=o,p(c.object))}function H(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:U,resetDefaultState:H,dispose:k,releaseStatesOfGeometry:I,releaseStatesOfObject:T,releaseStatesOfProgram:L,initAttributes:R,enableAttribute:M,disableUnusedAttributes:D}}function lT(r,e,n){let a;function o(m){a=m}function c(m,p){r.drawArrays(a,m,p),n.update(p,a,1)}function u(m,p,_){_!==0&&(r.drawArraysInstanced(a,m,p,_),n.update(p,a,_))}function h(m,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,p,0,_);let g=0;for(let S=0;S<_;S++)g+=p[S];n.update(g,a,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function cT(r,e,n,a){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(L){return!(L!==Hi&&a.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(L){const T=L===Pa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==_i&&a.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==ia&&!T)}function m(L){if(L==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const _=m(p);_!==p&&(ft("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),z=r.getParameter(r.MAX_VARYING_VECTORS),O=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),k=r.getParameter(r.MAX_SAMPLES),I=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:D,maxVaryings:z,maxFragmentUniforms:O,maxSamples:k,samples:I}}function uT(r){const e=this;let n=null,a=0,o=!1,c=!1;const u=new qs,h=new vt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||a!==0||o;return o=g,a=v.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){n=_(v,g,0)},this.setState=function(v,g,S){const b=v.clippingPlanes,R=v.clipIntersection,M=v.clipShadows,y=r.get(v);if(!o||b===null||b.length===0||c&&!M)c?_(null):p();else{const D=c?0:a,z=D*4;let O=y.clippingState||null;m.value=O,O=_(b,g,z,S);for(let k=0;k!==z;++k)O[k]=n[k];y.clippingState=O,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function _(v,g,S,b){const R=v!==null?v.length:0;let M=null;if(R!==0){if(M=m.value,b!==!0||M===null){const y=S+R*4,D=g.matrixWorldInverse;h.getNormalMatrix(D),(M===null||M.length<y)&&(M=new Float32Array(y));for(let z=0,O=S;z!==R;++z,O+=4)u.copy(v[z]).applyMatrix4(D,h),u.normal.toArray(M,O),M[O+3]=u.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,M}}const Ss=4,gv=[.125,.215,.35,.446,.526,.582],Zs=20,fT=256,sl=new px,_v=new Ct;let ph=null,mh=0,gh=0,_h=!1;const dT=new ee;class vv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,o=100,c={}){const{size:u=256,position:h=dT}=c;ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,o,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ph,mh,gh),this._renderer.xr.enabled=_h,e.scissorTest=!1,Zr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Qs||e.mapping===to?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Pa,format:Hi,colorSpace:mu,depthBuffer:!1},o=xv(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xv(e,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=hT(c)),this._blurMaterial=mT(c,e,n),this._ggxMaterial=pT(c,e,n)}return o}_compileMaterial(e){const n=new tn(new xi,e);this._renderer.compile(n,sl)}_sceneToCubeUV(e,n,a,o,c){const m=new gi(90,1,n,a),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(_v),v.toneMapping=sa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new tn(new hn,new Tu({name:"PMREM.Background",side:ai,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,M=R.material;let y=!1;const D=e.background;D?D.isColor&&(M.color.copy(D),e.background=null,y=!0):(M.color.copy(_v),y=!0);for(let z=0;z<6;z++){const O=z%3;O===0?(m.up.set(0,p[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[z],c.y,c.z)):O===1?(m.up.set(0,0,p[z]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[z],c.z)):(m.up.set(0,p[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[z]));const k=this._cubeSize;Zr(o,O*k,z>2?k:0,k,k),v.setRenderTarget(o),y&&v.render(R,m),v.render(e,m)}v.toneMapping=S,v.autoClear=g,e.background=D}_textureToCubeUV(e,n){const a=this._renderer,o=e.mapping===Qs||e.mapping===to;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Zr(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(u,sl)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=a}_applyGGXFilter(e,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[a];h.material=u;const m=u.uniforms,p=a/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,S=v*g,{_lodMax:b}=this,R=this._sizeLods[a],M=3*R*(a>b-Ss?a-b+Ss:0),y=4*(this._cubeSize-R);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=b-n,Zr(c,M,y,3*R,2*R),o.setRenderTarget(c),o.render(h,sl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-a,Zr(e,M,y,3*R,2*R),o.setRenderTarget(e),o.render(h,sl)}_blur(e,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,o,"latitudinal",c),this._halfBlur(u,e,a,a,o,"longitudinal",c)}_halfBlur(e,n,a,o,c,u,h){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ot("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[o];v.material=p;const g=p.uniforms,S=this._sizeLods[a]-1,b=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Zs-1),R=c/b,M=isFinite(c)?1+Math.floor(_*R):Zs;M>Zs&&ft(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Zs}`);const y=[];let D=0;for(let L=0;L<Zs;++L){const T=L/R,U=Math.exp(-T*T/2);y.push(U),L===0?D+=U:L<M&&(D+=2*U)}for(let L=0;L<y.length;L++)y[L]=y[L]/D;g.envMap.value=e.texture,g.samples.value=M,g.weights.value=y,g.latitudinal.value=u==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:z}=this;g.dTheta.value=b,g.mipInt.value=z-a;const O=this._sizeLods[o],k=3*O*(o>z-Ss?o-z+Ss:0),I=4*(this._cubeSize-O);Zr(n,k,I,3*O,2*O),m.setRenderTarget(n),m.render(v,sl)}}function hT(r){const e=[],n=[],a=[];let o=r;const c=r-Ss+1+gv.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);e.push(h);let m=1/h;u>r-Ss?m=gv[u-r+Ss-1]:u===0&&(m=0),n.push(m);const p=1/(h-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,b=6,R=3,M=2,y=1,D=new Float32Array(R*b*S),z=new Float32Array(M*b*S),O=new Float32Array(y*b*S);for(let I=0;I<S;I++){const L=I%3*2/3-1,T=I>2?0:-1,U=[L,T,0,L+2/3,T,0,L+2/3,T+1,0,L,T,0,L+2/3,T+1,0,L,T+1,0];D.set(U,R*b*I),z.set(g,M*b*I);const H=[I,I,I,I,I,I];O.set(H,y*b*I)}const k=new xi;k.setAttribute("position",new Vi(D,R)),k.setAttribute("uv",new Vi(z,M)),k.setAttribute("faceIndex",new Vi(O,y)),a.push(new tn(k,null)),o>Ss&&o--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function xv(r,e,n){const a=new ra(r,e,n);return a.texture.mapping=Eu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Zr(r,e,n,a,o){r.viewport.set(e,n,a,o),r.scissor.set(e,n,a,o)}function pT(r,e,n){return new la({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wu(),fragmentShader:`

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
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function mT(r,e,n){const a=new Float32Array(Zs),o=new ee(0,1,0);return new la({name:"SphericalGaussianBlur",defines:{n:Zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:wu(),fragmentShader:`

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
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function yv(){return new la({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wu(),fragmentShader:`

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
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function Sv(){return new la({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function wu(){return`

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
	`}class _x extends ra{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new lx(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new hn(5,5,5),c=new la({name:"CubemapFromEquirect",uniforms:ao(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ai,blending:Oa});c.uniforms.tEquirect.value=n;const u=new tn(o,c),h=n.minFilter;return n.minFilter===$s&&(n.minFilter=kn),new SE(1,10,this).update(e,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,o);e.setRenderTarget(c)}}function gT(r){let e=new WeakMap,n=new WeakMap,a=null;function o(g,S=!1){return g==null?null:S?u(g):c(g)}function c(g){if(g&&g.isTexture){const S=g.mapping;if(S===Bd||S===Gd)if(e.has(g)){const b=e.get(g).texture;return h(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const R=new _x(b.height);return R.fromEquirectangularTexture(r,g),e.set(g,R),g.addEventListener("dispose",p),h(R.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const S=g.mapping,b=S===Bd||S===Gd,R=S===Qs||S===to;if(b||R){let M=n.get(g);const y=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return a===null&&(a=new vv(r)),M=b?a.fromEquirectangular(g,M):a.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,n.set(g,M),M.texture;if(M!==void 0)return M.texture;{const D=g.image;return b&&D&&D.height>0||R&&D&&m(D)?(a===null&&(a=new vv(r)),M=b?a.fromEquirectangular(g):a.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,n.set(g,M),g.addEventListener("dispose",_),M.texture):null}}}return g}function h(g,S){return S===Bd?g.mapping=Qs:S===Gd&&(g.mapping=to),g}function m(g){let S=0;const b=6;for(let R=0;R<b;R++)g[R]!==void 0&&S++;return S===b}function p(g){const S=g.target;S.removeEventListener("dispose",p);const b=e.get(S);b!==void 0&&(e.delete(S),b.dispose())}function _(g){const S=g.target;S.removeEventListener("dispose",_);const b=n.get(S);b!==void 0&&(n.delete(S),b.dispose())}function v(){e=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:o,dispose:v}}function _T(r){const e={};function n(a){if(e[a]!==void 0)return e[a];const o=r.getExtension(a);return e[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&hp("WebGLRenderer: "+a+" extension not supported."),o}}}function vT(r,e,n,a){const o={},c=new WeakMap;function u(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const b in g.attributes)e.remove(g.attributes[b]);g.removeEventListener("dispose",u),delete o[g.id];const S=c.get(g);S&&(e.remove(S),c.delete(g)),a.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function h(v,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,n.memory.geometries++),g}function m(v){const g=v.attributes;for(const S in g)e.update(g[S],r.ARRAY_BUFFER)}function p(v){const g=[],S=v.index,b=v.attributes.position;let R=0;if(b===void 0)return;if(S!==null){const D=S.array;R=S.version;for(let z=0,O=D.length;z<O;z+=3){const k=D[z+0],I=D[z+1],L=D[z+2];g.push(k,I,I,L,L,k)}}else{const D=b.array;R=b.version;for(let z=0,O=D.length/3-1;z<O;z+=3){const k=z+0,I=z+1,L=z+2;g.push(k,I,I,L,L,k)}}const M=new(b.count>=65535?rx:sx)(g,1);M.version=R;const y=c.get(v);y&&e.remove(y),c.set(v,M)}function _(v){const g=c.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:_}}function xT(r,e,n){let a;function o(v){a=v}let c,u;function h(v){c=v.type,u=v.bytesPerElement}function m(v,g){r.drawElements(a,g,c,v*u),n.update(g,a,1)}function p(v,g,S){S!==0&&(r.drawElementsInstanced(a,g,c,v*u,S),n.update(g,a,S))}function _(v,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,g,0,c,v,0,S);let R=0;for(let M=0;M<S;M++)R+=g[M];n.update(R,a,1)}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function yT(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=h*(c/3);break;case r.LINES:n.lines+=h*(c/2);break;case r.LINE_STRIP:n.lines+=h*(c-1);break;case r.LINE_LOOP:n.lines+=h*c;break;case r.POINTS:n.points+=h*c;break;default:Ot("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:a}}function ST(r,e,n){const a=new WeakMap,o=new _n;function c(u,h,m){const p=u.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let g=a.get(h);if(g===void 0||g.count!==v){let H=function(){T.dispose(),a.delete(h),h.removeEventListener("dispose",H)};var S=H;g!==void 0&&g.texture.dispose();const b=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let O=0;b===!0&&(O=1),R===!0&&(O=2),M===!0&&(O=3);let k=h.attributes.position.count*O,I=1;k>e.maxTextureSize&&(I=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const L=new Float32Array(k*I*4*v),T=new ix(L,k,I,v);T.type=ia,T.needsUpdate=!0;const U=O*4;for(let B=0;B<v;B++){const q=y[B],de=D[B],me=z[B],Y=k*I*4*B;for(let C=0;C<q.count;C++){const F=C*U;b===!0&&(o.fromBufferAttribute(q,C),L[Y+F+0]=o.x,L[Y+F+1]=o.y,L[Y+F+2]=o.z,L[Y+F+3]=0),R===!0&&(o.fromBufferAttribute(de,C),L[Y+F+4]=o.x,L[Y+F+5]=o.y,L[Y+F+6]=o.z,L[Y+F+7]=0),M===!0&&(o.fromBufferAttribute(me,C),L[Y+F+8]=o.x,L[Y+F+9]=o.y,L[Y+F+10]=o.z,L[Y+F+11]=me.itemSize===4?o.w:1)}}g={count:v,texture:T,size:new Mt(k,I)},a.set(h,g),h.addEventListener("dispose",H)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const R=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",R),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function MT(r,e,n,a,o){let c=new WeakMap;function u(p){const _=o.render.frame,v=p.geometry,g=e.get(p,v);if(c.get(g)!==_&&(e.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(n.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const S=p.skeleton;c.get(S)!==_&&(S.update(),c.set(S,_))}return g}function h(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),a.releaseStatesOfObject(_),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:u,dispose:h}}const ET={[Hv]:"LINEAR_TONE_MAPPING",[Vv]:"REINHARD_TONE_MAPPING",[kv]:"CINEON_TONE_MAPPING",[Wv]:"ACES_FILMIC_TONE_MAPPING",[Yv]:"AGX_TONE_MAPPING",[qv]:"NEUTRAL_TONE_MAPPING",[Xv]:"CUSTOM_TONE_MAPPING"};function bT(r,e,n,a,o){const c=new ra(e,n,{type:r,depthBuffer:a,stencilBuffer:o,depthTexture:a?new io(e,n):void 0}),u=new ra(e,n,{type:Pa,depthBuffer:!1,stencilBuffer:!1}),h=new xi;h.setAttribute("position",new Zn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Zn([0,2,0,0,2,0],2));const m=new hE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new tn(h,m),_=new px(-1,1,1,-1,0,1);let v=null,g=null,S=!1,b,R=null,M=[],y=!1;this.setSize=function(D,z){c.setSize(D,z),u.setSize(D,z);for(let O=0;O<M.length;O++){const k=M[O];k.setSize&&k.setSize(D,z)}},this.setEffects=function(D){M=D,y=M.length>0&&M[0].isRenderPass===!0;const z=c.width,O=c.height;for(let k=0;k<M.length;k++){const I=M[k];I.setSize&&I.setSize(z,O)}},this.begin=function(D,z){if(S||D.toneMapping===sa&&M.length===0)return!1;if(R=z,z!==null){const O=z.width,k=z.height;(c.width!==O||c.height!==k)&&this.setSize(O,k)}return y===!1&&D.setRenderTarget(c),b=D.toneMapping,D.toneMapping=sa,!0},this.hasRenderPass=function(){return y},this.end=function(D,z){D.toneMapping=b,S=!0;let O=c,k=u;for(let I=0;I<M.length;I++){const L=M[I];if(L.enabled!==!1&&(L.render(D,k,O,z),L.needsSwap!==!1)){const T=O;O=k,k=T}}if(v!==D.outputColorSpace||g!==D.toneMapping){v=D.outputColorSpace,g=D.toneMapping,m.defines={},It.getTransfer(v)===qt&&(m.defines.SRGB_TRANSFER="");const I=ET[g];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=O.texture,D.setRenderTarget(R),D.render(p,_),R=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),u.dispose(),h.dispose(),m.dispose()}}const vx=new Wn,gp=new io(1,1),xx=new ix,yx=new HM,Sx=new lx,Mv=[],Ev=[],bv=new Float32Array(16),Tv=new Float32Array(9),Av=new Float32Array(4);function ro(r,e,n){const a=r[0];if(a<=0||a>0)return r;const o=e*n;let c=Mv[o];if(c===void 0&&(c=new Float32Array(o),Mv[o]=c),e!==0){a.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=n,r[u].toArray(c,h)}return c}function Dn(r,e){if(r.length!==e.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==e[n])return!1;return!0}function Nn(r,e){for(let n=0,a=e.length;n<a;n++)r[n]=e[n]}function Ru(r,e){let n=Ev[e];n===void 0&&(n=new Int32Array(e),Ev[e]=n);for(let a=0;a!==e;++a)n[a]=r.allocateTextureUnit();return n}function TT(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function AT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dn(n,e))return;r.uniform2fv(this.addr,e),Nn(n,e)}}function wT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dn(n,e))return;r.uniform3fv(this.addr,e),Nn(n,e)}}function RT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dn(n,e))return;r.uniform4fv(this.addr,e),Nn(n,e)}}function CT(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Dn(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),Nn(n,e)}else{if(Dn(n,a))return;Av.set(a),r.uniformMatrix2fv(this.addr,!1,Av),Nn(n,a)}}function DT(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Dn(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),Nn(n,e)}else{if(Dn(n,a))return;Tv.set(a),r.uniformMatrix3fv(this.addr,!1,Tv),Nn(n,a)}}function NT(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Dn(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),Nn(n,e)}else{if(Dn(n,a))return;bv.set(a),r.uniformMatrix4fv(this.addr,!1,bv),Nn(n,a)}}function UT(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function LT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dn(n,e))return;r.uniform2iv(this.addr,e),Nn(n,e)}}function OT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dn(n,e))return;r.uniform3iv(this.addr,e),Nn(n,e)}}function IT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dn(n,e))return;r.uniform4iv(this.addr,e),Nn(n,e)}}function zT(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function PT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dn(n,e))return;r.uniform2uiv(this.addr,e),Nn(n,e)}}function FT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dn(n,e))return;r.uniform3uiv(this.addr,e),Nn(n,e)}}function BT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dn(n,e))return;r.uniform4uiv(this.addr,e),Nn(n,e)}}function GT(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(gp.compareFunction=n.isReversedDepthBuffer()?Dp:Cp,c=gp):c=vx,n.setTexture2D(e||c,o)}function HT(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(e||yx,o)}function VT(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(e||Sx,o)}function kT(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(e||xx,o)}function WT(r){switch(r){case 5126:return TT;case 35664:return AT;case 35665:return wT;case 35666:return RT;case 35674:return CT;case 35675:return DT;case 35676:return NT;case 5124:case 35670:return UT;case 35667:case 35671:return LT;case 35668:case 35672:return OT;case 35669:case 35673:return IT;case 5125:return zT;case 36294:return PT;case 36295:return FT;case 36296:return BT;case 35678:case 36198:case 36298:case 36306:case 35682:return GT;case 35679:case 36299:case 36307:return HT;case 35680:case 36300:case 36308:case 36293:return VT;case 36289:case 36303:case 36311:case 36292:return kT}}function XT(r,e){r.uniform1fv(this.addr,e)}function YT(r,e){const n=ro(e,this.size,2);r.uniform2fv(this.addr,n)}function qT(r,e){const n=ro(e,this.size,3);r.uniform3fv(this.addr,n)}function jT(r,e){const n=ro(e,this.size,4);r.uniform4fv(this.addr,n)}function ZT(r,e){const n=ro(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function $T(r,e){const n=ro(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function KT(r,e){const n=ro(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function QT(r,e){r.uniform1iv(this.addr,e)}function JT(r,e){r.uniform2iv(this.addr,e)}function eA(r,e){r.uniform3iv(this.addr,e)}function tA(r,e){r.uniform4iv(this.addr,e)}function nA(r,e){r.uniform1uiv(this.addr,e)}function iA(r,e){r.uniform2uiv(this.addr,e)}function aA(r,e){r.uniform3uiv(this.addr,e)}function sA(r,e){r.uniform4uiv(this.addr,e)}function rA(r,e,n){const a=this.cache,o=e.length,c=Ru(n,o);Dn(a,c)||(r.uniform1iv(this.addr,c),Nn(a,c));let u;this.type===r.SAMPLER_2D_SHADOW?u=gp:u=vx;for(let h=0;h!==o;++h)n.setTexture2D(e[h]||u,c[h])}function oA(r,e,n){const a=this.cache,o=e.length,c=Ru(n,o);Dn(a,c)||(r.uniform1iv(this.addr,c),Nn(a,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||yx,c[u])}function lA(r,e,n){const a=this.cache,o=e.length,c=Ru(n,o);Dn(a,c)||(r.uniform1iv(this.addr,c),Nn(a,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||Sx,c[u])}function cA(r,e,n){const a=this.cache,o=e.length,c=Ru(n,o);Dn(a,c)||(r.uniform1iv(this.addr,c),Nn(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||xx,c[u])}function uA(r){switch(r){case 5126:return XT;case 35664:return YT;case 35665:return qT;case 35666:return jT;case 35674:return ZT;case 35675:return $T;case 35676:return KT;case 5124:case 35670:return QT;case 35667:case 35671:return JT;case 35668:case 35672:return eA;case 35669:case 35673:return tA;case 5125:return nA;case 36294:return iA;case 36295:return aA;case 36296:return sA;case 35678:case 36198:case 36298:case 36306:case 35682:return rA;case 35679:case 36299:case 36307:return oA;case 35680:case 36300:case 36308:case 36293:return lA;case 36289:case 36303:case 36311:case 36292:return cA}}class fA{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=WT(n.type)}}class dA{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=uA(n.type)}}class hA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(e,n[h.id],a)}}}const vh=/(\w+)(\])?(\[|\.)?/g;function wv(r,e){r.seq.push(e),r.map[e.id]=e}function pA(r,e,n){const a=r.name,o=a.length;for(vh.lastIndex=0;;){const c=vh.exec(a),u=vh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&u+2===o){wv(n,p===void 0?new fA(h,r,e):new dA(h,r,e));break}else{let v=n.map[h];v===void 0&&(v=new hA(h),wv(n,v)),n=v}}}class fu{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const h=e.getActiveUniform(n,u),m=e.getUniformLocation(n,h.name);pA(h,m,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(e,a,o)}setOptional(e,n,a){const o=n[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,n,a,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],m=a[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,o)}}static seqWithValue(e,n){const a=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&a.push(u)}return a}}function Rv(r,e,n){const a=r.createShader(e);return r.shaderSource(a,n),r.compileShader(a),a}const mA=37297;let gA=0;function _A(r,e){const n=r.split(`
`),a=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const h=u+1;a.push(`${h===e?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const Cv=new vt;function vA(r){It._getMatrix(Cv,It.workingColorSpace,r);const e=`mat3( ${Cv.elements.map(n=>n.toFixed(4))} )`;switch(It.getTransfer(r)){case gu:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Dv(r,e,n){const a=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+_A(r.getShaderSource(e),h)}else return c}function xA(r,e){const n=vA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const yA={[Hv]:"Linear",[Vv]:"Reinhard",[kv]:"Cineon",[Wv]:"ACESFilmic",[Yv]:"AgX",[qv]:"Neutral",[Xv]:"Custom"};function SA(r,e){const n=yA[e];return n===void 0?(ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const su=new ee;function MA(){It.getLuminanceCoefficients(su);const r=su.x.toFixed(4),e=su.y.toFixed(4),n=su.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function EA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cl).join(`
`)}function bA(r){const e=[];for(const n in r){const a=r[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function TA(r,e){const n={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=r.getActiveAttrib(e,o),u=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:r.getAttribLocation(e,u),locationSize:h}}return n}function cl(r){return r!==""}function Nv(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AA=/^[ \t]*#include +<([\w\d./]+)>/gm;function _p(r){return r.replace(AA,RA)}const wA=new Map;function RA(r,e){let n=bt[e];if(n===void 0){const a=wA.get(e);if(a!==void 0)n=bt[a],ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return _p(n)}const CA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lv(r){return r.replace(CA,DA)}function DA(r,e,n,a){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Ov(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const NA={[ru]:"SHADOWMAP_TYPE_PCF",[ll]:"SHADOWMAP_TYPE_VSM"};function UA(r){return NA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const LA={[Qs]:"ENVMAP_TYPE_CUBE",[to]:"ENVMAP_TYPE_CUBE",[Eu]:"ENVMAP_TYPE_CUBE_UV"};function OA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":LA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const IA={[to]:"ENVMAP_MODE_REFRACTION"};function zA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":IA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const PA={[Mp]:"ENVMAP_BLENDING_MULTIPLY",[aM]:"ENVMAP_BLENDING_MIX",[sM]:"ENVMAP_BLENDING_ADD"};function FA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":PA[r.combine]||"ENVMAP_BLENDING_NONE"}function BA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function GA(r,e,n,a){const o=r.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const m=UA(n),p=OA(n),_=zA(n),v=FA(n),g=BA(n),S=EA(n),b=bA(c),R=o.createProgram();let M,y,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(cl).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(cl).join(`
`),y.length>0&&(y+=`
`)):(M=[Ov(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cl).join(`
`),y=[Ov(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==sa?"#define TONE_MAPPING":"",n.toneMapping!==sa?bt.tonemapping_pars_fragment:"",n.toneMapping!==sa?SA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",bt.colorspace_pars_fragment,xA("linearToOutputTexel",n.outputColorSpace),MA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(cl).join(`
`)),u=_p(u),u=Nv(u,n),u=Uv(u,n),h=_p(h),h=Nv(h,n),h=Uv(h,n),u=Lv(u),h=Lv(h),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",n.glslVersion===P_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===P_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const z=D+M+u,O=D+y+h,k=Rv(o,o.VERTEX_SHADER,z),I=Rv(o,o.FRAGMENT_SHADER,O);o.attachShader(R,k),o.attachShader(R,I),n.index0AttributeName!==void 0?o.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function L(B){if(r.debug.checkShaderErrors){const q=o.getProgramInfoLog(R)||"",de=o.getShaderInfoLog(k)||"",me=o.getShaderInfoLog(I)||"",Y=q.trim(),C=de.trim(),F=me.trim();let se=!0,ge=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(se=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,R,k,I);else{const we=Dv(o,k,"vertex"),P=Dv(o,I,"fragment");Ot("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+Y+`
`+we+`
`+P)}else Y!==""?ft("WebGLProgram: Program Info Log:",Y):(C===""||F==="")&&(ge=!1);ge&&(B.diagnostics={runnable:se,programLog:Y,vertexShader:{log:C,prefix:M},fragmentShader:{log:F,prefix:y}})}o.deleteShader(k),o.deleteShader(I),T=new fu(o,R),U=TA(o,R)}let T;this.getUniforms=function(){return T===void 0&&L(this),T};let U;this.getAttributes=function(){return U===void 0&&L(this),U};let H=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=o.getProgramParameter(R,mA)),H},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=gA++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=k,this.fragmentShader=I,this}let HA=0;class VA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new kA(e),n.set(e,a)),a}}class kA{constructor(e){this.id=HA++,this.code=e,this.usedTimes=0}}function WA(r){return r===Js||r===du||r===hu}function XA(r,e,n,a,o,c){const u=new Lp,h=new VA,m=new Set,p=[],_=new Map,v=a.logarithmicDepthBuffer;let g=a.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function R(T,U,H,B,q,de){const me=B.fog,Y=q.geometry,C=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,se=e.get(T.envMap||C,F),ge=se&&se.mapping===Eu?se.image.height:null,we=S[T.type];T.precision!==null&&(g=a.getMaxPrecision(T.precision),g!==T.precision&&ft("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const P=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ie=P!==void 0?P.length:0;let be=0;Y.morphAttributes.position!==void 0&&(be=1),Y.morphAttributes.normal!==void 0&&(be=2),Y.morphAttributes.color!==void 0&&(be=3);let Oe,He,oe,De;if(we){const lt=ta[we];Oe=lt.vertexShader,He=lt.fragmentShader}else Oe=T.vertexShader,He=T.fragmentShader,h.update(T),oe=h.getVertexShaderID(T),De=h.getFragmentShaderID(T);const Re=r.getRenderTarget(),$e=r.state.buffers.depth.getReversed(),st=q.isInstancedMesh===!0,rt=q.isBatchedMesh===!0,kt=!!T.map,mt=!!T.matcap,Tt=!!se,zt=!!T.aoMap,gt=!!T.lightMap,fn=!!T.bumpMap,Zt=!!T.normalMap,An=!!T.displacementMap,K=!!T.emissiveMap,nn=!!T.metalnessMap,Et=!!T.roughnessMap,Ft=T.anisotropy>0,ke=T.clearcoat>0,$t=T.dispersion>0,N=T.iridescence>0,E=T.sheen>0,ae=T.transmission>0,xe=Ft&&!!T.anisotropyMap,Ne=ke&&!!T.clearcoatMap,he=ke&&!!T.clearcoatNormalMap,ye=ke&&!!T.clearcoatRoughnessMap,ce=N&&!!T.iridescenceMap,Z=N&&!!T.iridescenceThicknessMap,Ie=E&&!!T.sheenColorMap,Ye=E&&!!T.sheenRoughnessMap,We=!!T.specularMap,Ve=!!T.specularColorMap,dt=!!T.specularIntensityMap,ht=ae&&!!T.transmissionMap,pt=ae&&!!T.thicknessMap,X=!!T.gradientMap,Be=!!T.alphaMap,_e=T.alphaTest>0,je=!!T.alphaHash,Xe=!!T.extensions;let Te=sa;T.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(Te=r.toneMapping);const et={shaderID:we,shaderType:T.type,shaderName:T.name,vertexShader:Oe,fragmentShader:He,defines:T.defines,customVertexShaderID:oe,customFragmentShaderID:De,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:rt,batchingColor:rt&&q._colorsTexture!==null,instancing:st,instancingColor:st&&q.instanceColor!==null,instancingMorph:st&&q.morphTexture!==null,outputColorSpace:Re===null?r.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:It.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:kt,matcap:mt,envMap:Tt,envMapMode:Tt&&se.mapping,envMapCubeUVHeight:ge,aoMap:zt,lightMap:gt,bumpMap:fn,normalMap:Zt,displacementMap:An,emissiveMap:K,normalMapObjectSpace:Zt&&T.normalMapType===lM,normalMapTangentSpace:Zt&&T.normalMapType===pu,packedNormalMap:Zt&&T.normalMapType===pu&&WA(T.normalMap.format),metalnessMap:nn,roughnessMap:Et,anisotropy:Ft,anisotropyMap:xe,clearcoat:ke,clearcoatMap:Ne,clearcoatNormalMap:he,clearcoatRoughnessMap:ye,dispersion:$t,iridescence:N,iridescenceMap:ce,iridescenceThicknessMap:Z,sheen:E,sheenColorMap:Ie,sheenRoughnessMap:Ye,specularMap:We,specularColorMap:Ve,specularIntensityMap:dt,transmission:ae,transmissionMap:ht,thicknessMap:pt,gradientMap:X,opaque:T.transparent===!1&&T.blending===Kr&&T.alphaToCoverage===!1,alphaMap:Be,alphaTest:_e,alphaHash:je,combine:T.combine,mapUv:kt&&b(T.map.channel),aoMapUv:zt&&b(T.aoMap.channel),lightMapUv:gt&&b(T.lightMap.channel),bumpMapUv:fn&&b(T.bumpMap.channel),normalMapUv:Zt&&b(T.normalMap.channel),displacementMapUv:An&&b(T.displacementMap.channel),emissiveMapUv:K&&b(T.emissiveMap.channel),metalnessMapUv:nn&&b(T.metalnessMap.channel),roughnessMapUv:Et&&b(T.roughnessMap.channel),anisotropyMapUv:xe&&b(T.anisotropyMap.channel),clearcoatMapUv:Ne&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:he&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&b(T.sheenRoughnessMap.channel),specularMapUv:We&&b(T.specularMap.channel),specularColorMapUv:Ve&&b(T.specularColorMap.channel),specularIntensityMapUv:dt&&b(T.specularIntensityMap.channel),transmissionMapUv:ht&&b(T.transmissionMap.channel),thicknessMapUv:pt&&b(T.thicknessMap.channel),alphaMapUv:Be&&b(T.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Zt||Ft),vertexNormals:!!Y.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!Y.attributes.uv&&(kt||Be),fog:!!me,useFog:T.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Y.attributes.normal===void 0&&Zt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:$e,skinning:q.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:be,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:de.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:Te,decodeVideoTexture:kt&&T.map.isVideoTexture===!0&&It.getTransfer(T.map.colorSpace)===qt,decodeVideoTextureEmissive:K&&T.emissiveMap.isVideoTexture===!0&&It.getTransfer(T.emissiveMap.colorSpace)===qt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===na,flipSided:T.side===ai,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Xe&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&T.extensions.multiDraw===!0||rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return et.vertexUv1s=m.has(1),et.vertexUv2s=m.has(2),et.vertexUv3s=m.has(3),m.clear(),et}function M(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const H in T.defines)U.push(H),U.push(T.defines[H]);return T.isRawShaderMaterial===!1&&(y(U,T),D(U,T),U.push(r.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function y(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function D(T,U){u.disableAll(),U.instancing&&u.enable(0),U.instancingColor&&u.enable(1),U.instancingMorph&&u.enable(2),U.matcap&&u.enable(3),U.envMap&&u.enable(4),U.normalMapObjectSpace&&u.enable(5),U.normalMapTangentSpace&&u.enable(6),U.clearcoat&&u.enable(7),U.iridescence&&u.enable(8),U.alphaTest&&u.enable(9),U.vertexColors&&u.enable(10),U.vertexAlphas&&u.enable(11),U.vertexUv1s&&u.enable(12),U.vertexUv2s&&u.enable(13),U.vertexUv3s&&u.enable(14),U.vertexTangents&&u.enable(15),U.anisotropy&&u.enable(16),U.alphaHash&&u.enable(17),U.batching&&u.enable(18),U.dispersion&&u.enable(19),U.batchingColor&&u.enable(20),U.gradientMap&&u.enable(21),U.packedNormalMap&&u.enable(22),U.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.reversedDepthBuffer&&u.enable(4),U.skinning&&u.enable(5),U.morphTargets&&u.enable(6),U.morphNormals&&u.enable(7),U.morphColors&&u.enable(8),U.premultipliedAlpha&&u.enable(9),U.shadowMapEnabled&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),U.decodeVideoTexture&&u.enable(19),U.decodeVideoTextureEmissive&&u.enable(20),U.alphaToCoverage&&u.enable(21),U.numLightProbeGrids>0&&u.enable(22),T.push(u.mask)}function z(T){const U=S[T.type];let H;if(U){const B=ta[U];H=uE.clone(B.uniforms)}else H=T.uniforms;return H}function O(T,U){let H=_.get(U);return H!==void 0?++H.usedTimes:(H=new GA(r,U,T,o),p.push(H),_.set(U,H)),H}function k(T){if(--T.usedTimes===0){const U=p.indexOf(T);p[U]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function I(T){h.remove(T)}function L(){h.dispose()}return{getParameters:R,getProgramCacheKey:M,getUniforms:z,acquireProgram:O,releaseProgram:k,releaseShaderCache:I,programs:p,dispose:L}}function YA(){let r=new WeakMap;function e(u){return r.has(u)}function n(u){let h=r.get(u);return h===void 0&&(h={},r.set(u,h)),h}function a(u){r.delete(u)}function o(u,h,m){r.get(u)[h]=m}function c(){r=new WeakMap}return{has:e,get:n,remove:a,update:o,dispose:c}}function qA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Iv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function zv(){const r=[];let e=0;const n=[],a=[],o=[];function c(){e=0,n.length=0,a.length=0,o.length=0}function u(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function h(g,S,b,R,M,y){let D=r[e];return D===void 0?(D={id:g.id,object:g,geometry:S,material:b,materialVariant:u(g),groupOrder:R,renderOrder:g.renderOrder,z:M,group:y},r[e]=D):(D.id=g.id,D.object=g,D.geometry=S,D.material=b,D.materialVariant=u(g),D.groupOrder=R,D.renderOrder=g.renderOrder,D.z=M,D.group=y),e++,D}function m(g,S,b,R,M,y){const D=h(g,S,b,R,M,y);b.transmission>0?a.push(D):b.transparent===!0?o.push(D):n.push(D)}function p(g,S,b,R,M,y){const D=h(g,S,b,R,M,y);b.transmission>0?a.unshift(D):b.transparent===!0?o.unshift(D):n.unshift(D)}function _(g,S){n.length>1&&n.sort(g||qA),a.length>1&&a.sort(S||Iv),o.length>1&&o.sort(S||Iv)}function v(){for(let g=e,S=r.length;g<S;g++){const b=r[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:m,unshift:p,finish:v,sort:_}}function jA(){let r=new WeakMap;function e(a,o){const c=r.get(a);let u;return c===void 0?(u=new zv,r.set(a,[u])):o>=c.length?(u=new zv,c.push(u)):u=c[o],u}function n(){r=new WeakMap}return{get:e,dispose:n}}function ZA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ee,color:new Ct};break;case"SpotLight":n={position:new ee,direction:new ee,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ee,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ee,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":n={color:new Ct,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return r[e.id]=n,n}}}function $A(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let KA=0;function QA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function JA(r){const e=new ZA,n=$A(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new ee);const o=new ee,c=new un,u=new un;function h(p){let _=0,v=0,g=0;for(let U=0;U<9;U++)a.probe[U].set(0,0,0);let S=0,b=0,R=0,M=0,y=0,D=0,z=0,O=0,k=0,I=0,L=0;p.sort(QA);for(let U=0,H=p.length;U<H;U++){const B=p[U],q=B.color,de=B.intensity,me=B.distance;let Y=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Js?Y=B.shadow.map.texture:Y=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)_+=q.r*de,v+=q.g*de,g+=q.b*de;else if(B.isLightProbe){for(let C=0;C<9;C++)a.probe[C].addScaledVector(B.sh.coefficients[C],de);L++}else if(B.isDirectionalLight){const C=e.get(B);if(C.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const F=B.shadow,se=n.get(B);se.shadowIntensity=F.intensity,se.shadowBias=F.bias,se.shadowNormalBias=F.normalBias,se.shadowRadius=F.radius,se.shadowMapSize=F.mapSize,a.directionalShadow[S]=se,a.directionalShadowMap[S]=Y,a.directionalShadowMatrix[S]=B.shadow.matrix,D++}a.directional[S]=C,S++}else if(B.isSpotLight){const C=e.get(B);C.position.setFromMatrixPosition(B.matrixWorld),C.color.copy(q).multiplyScalar(de),C.distance=me,C.coneCos=Math.cos(B.angle),C.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),C.decay=B.decay,a.spot[R]=C;const F=B.shadow;if(B.map&&(a.spotLightMap[k]=B.map,k++,F.updateMatrices(B),B.castShadow&&I++),a.spotLightMatrix[R]=F.matrix,B.castShadow){const se=n.get(B);se.shadowIntensity=F.intensity,se.shadowBias=F.bias,se.shadowNormalBias=F.normalBias,se.shadowRadius=F.radius,se.shadowMapSize=F.mapSize,a.spotShadow[R]=se,a.spotShadowMap[R]=Y,O++}R++}else if(B.isRectAreaLight){const C=e.get(B);C.color.copy(q).multiplyScalar(de),C.halfWidth.set(B.width*.5,0,0),C.halfHeight.set(0,B.height*.5,0),a.rectArea[M]=C,M++}else if(B.isPointLight){const C=e.get(B);if(C.color.copy(B.color).multiplyScalar(B.intensity),C.distance=B.distance,C.decay=B.decay,B.castShadow){const F=B.shadow,se=n.get(B);se.shadowIntensity=F.intensity,se.shadowBias=F.bias,se.shadowNormalBias=F.normalBias,se.shadowRadius=F.radius,se.shadowMapSize=F.mapSize,se.shadowCameraNear=F.camera.near,se.shadowCameraFar=F.camera.far,a.pointShadow[b]=se,a.pointShadowMap[b]=Y,a.pointShadowMatrix[b]=B.shadow.matrix,z++}a.point[b]=C,b++}else if(B.isHemisphereLight){const C=e.get(B);C.skyColor.copy(B.color).multiplyScalar(de),C.groundColor.copy(B.groundColor).multiplyScalar(de),a.hemi[y]=C,y++}}M>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ze.LTC_FLOAT_1,a.rectAreaLTC2=Ze.LTC_FLOAT_2):(a.rectAreaLTC1=Ze.LTC_HALF_1,a.rectAreaLTC2=Ze.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=v,a.ambient[2]=g;const T=a.hash;(T.directionalLength!==S||T.pointLength!==b||T.spotLength!==R||T.rectAreaLength!==M||T.hemiLength!==y||T.numDirectionalShadows!==D||T.numPointShadows!==z||T.numSpotShadows!==O||T.numSpotMaps!==k||T.numLightProbes!==L)&&(a.directional.length=S,a.spot.length=R,a.rectArea.length=M,a.point.length=b,a.hemi.length=y,a.directionalShadow.length=D,a.directionalShadowMap.length=D,a.pointShadow.length=z,a.pointShadowMap.length=z,a.spotShadow.length=O,a.spotShadowMap.length=O,a.directionalShadowMatrix.length=D,a.pointShadowMatrix.length=z,a.spotLightMatrix.length=O+k-I,a.spotLightMap.length=k,a.numSpotLightShadowsWithMaps=I,a.numLightProbes=L,T.directionalLength=S,T.pointLength=b,T.spotLength=R,T.rectAreaLength=M,T.hemiLength=y,T.numDirectionalShadows=D,T.numPointShadows=z,T.numSpotShadows=O,T.numSpotMaps=k,T.numLightProbes=L,a.version=KA++)}function m(p,_){let v=0,g=0,S=0,b=0,R=0;const M=_.matrixWorldInverse;for(let y=0,D=p.length;y<D;y++){const z=p[y];if(z.isDirectionalLight){const O=a.directional[v];O.direction.setFromMatrixPosition(z.matrixWorld),o.setFromMatrixPosition(z.target.matrixWorld),O.direction.sub(o),O.direction.transformDirection(M),v++}else if(z.isSpotLight){const O=a.spot[S];O.position.setFromMatrixPosition(z.matrixWorld),O.position.applyMatrix4(M),O.direction.setFromMatrixPosition(z.matrixWorld),o.setFromMatrixPosition(z.target.matrixWorld),O.direction.sub(o),O.direction.transformDirection(M),S++}else if(z.isRectAreaLight){const O=a.rectArea[b];O.position.setFromMatrixPosition(z.matrixWorld),O.position.applyMatrix4(M),u.identity(),c.copy(z.matrixWorld),c.premultiply(M),u.extractRotation(c),O.halfWidth.set(z.width*.5,0,0),O.halfHeight.set(0,z.height*.5,0),O.halfWidth.applyMatrix4(u),O.halfHeight.applyMatrix4(u),b++}else if(z.isPointLight){const O=a.point[g];O.position.setFromMatrixPosition(z.matrixWorld),O.position.applyMatrix4(M),g++}else if(z.isHemisphereLight){const O=a.hemi[R];O.direction.setFromMatrixPosition(z.matrixWorld),O.direction.transformDirection(M),R++}}}return{setup:h,setupView:m,state:a}}function Pv(r){const e=new JA(r),n=[],a=[],o=[];function c(g){v.camera=g,n.length=0,a.length=0,o.length=0}function u(g){n.push(g)}function h(g){a.push(g)}function m(g){o.push(g)}function p(){e.setup(n)}function _(g){e.setupView(n,g)}const v={lightsArray:n,shadowsArray:a,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:p,setupLightsView:_,pushLight:u,pushShadow:h,pushLightProbeGrid:m}}function ew(r){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let h;return u===void 0?(h=new Pv(r),e.set(o,[h])):c>=u.length?(h=new Pv(r),u.push(h)):h=u[c],h}function a(){e=new WeakMap}return{get:n,dispose:a}}const tw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nw=`uniform sampler2D shadow_pass;
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
}`,iw=[new ee(1,0,0),new ee(-1,0,0),new ee(0,1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1)],aw=[new ee(0,-1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,-1,0),new ee(0,-1,0)],Fv=new un,rl=new ee,xh=new ee;function sw(r,e,n){let a=new zp;const o=new Mt,c=new Mt,u=new _n,h=new mE,m=new gE,p={},_=n.maxTextureSize,v={[Ms]:ai,[ai]:Ms,[na]:na},g=new la({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:tw,fragmentShader:nw}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const b=new xi;b.setAttribute("position",new Vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new tn(b,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ru;let y=this.type;this.render=function(I,L,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||I.length===0)return;this.type===Gv&&(ft("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ru);const U=r.getRenderTarget(),H=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),q=r.state;q.setBlending(Oa),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const de=y!==this.type;de&&L.traverse(function(me){me.material&&(Array.isArray(me.material)?me.material.forEach(Y=>Y.needsUpdate=!0):me.material.needsUpdate=!0)});for(let me=0,Y=I.length;me<Y;me++){const C=I[me],F=C.shadow;if(F===void 0){ft("WebGLShadowMap:",C,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;o.copy(F.mapSize);const se=F.getFrameExtents();o.multiply(se),c.copy(F.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(c.x=Math.floor(_/se.x),o.x=c.x*se.x,F.mapSize.x=c.x),o.y>_&&(c.y=Math.floor(_/se.y),o.y=c.y*se.y,F.mapSize.y=c.y));const ge=r.state.buffers.depth.getReversed();if(F.camera._reversedDepth=ge,F.map===null||de===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===ll){if(C.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new ra(o.x,o.y,{format:Js,type:Pa,minFilter:kn,magFilter:kn,generateMipmaps:!1}),F.map.texture.name=C.name+".shadowMap",F.map.depthTexture=new io(o.x,o.y,ia),F.map.depthTexture.name=C.name+".shadowMapDepth",F.map.depthTexture.format=Fa,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Fn,F.map.depthTexture.magFilter=Fn}else C.isPointLight?(F.map=new _x(o.x),F.map.depthTexture=new lE(o.x,oa)):(F.map=new ra(o.x,o.y),F.map.depthTexture=new io(o.x,o.y,oa)),F.map.depthTexture.name=C.name+".shadowMap",F.map.depthTexture.format=Fa,this.type===ru?(F.map.depthTexture.compareFunction=ge?Dp:Cp,F.map.depthTexture.minFilter=kn,F.map.depthTexture.magFilter=kn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Fn,F.map.depthTexture.magFilter=Fn);F.camera.updateProjectionMatrix()}const we=F.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<we;P++){if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,P),r.clear();else{P===0&&(r.setRenderTarget(F.map),r.clear());const ie=F.getViewport(P);u.set(c.x*ie.x,c.y*ie.y,c.x*ie.z,c.y*ie.w),q.viewport(u)}if(C.isPointLight){const ie=F.camera,be=F.matrix,Oe=C.distance||ie.far;Oe!==ie.far&&(ie.far=Oe,ie.updateProjectionMatrix()),rl.setFromMatrixPosition(C.matrixWorld),ie.position.copy(rl),xh.copy(ie.position),xh.add(iw[P]),ie.up.copy(aw[P]),ie.lookAt(xh),ie.updateMatrixWorld(),be.makeTranslation(-rl.x,-rl.y,-rl.z),Fv.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Fv,ie.coordinateSystem,ie.reversedDepth)}else F.updateMatrices(C);a=F.getFrustum(),O(L,T,F.camera,C,this.type)}F.isPointLightShadow!==!0&&this.type===ll&&D(F,T),F.needsUpdate=!1}y=this.type,M.needsUpdate=!1,r.setRenderTarget(U,H,B)};function D(I,L){const T=e.update(R);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new ra(o.x,o.y,{format:Js,type:Pa})),g.uniforms.shadow_pass.value=I.map.depthTexture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(L,null,T,g,R,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(L,null,T,S,R,null)}function z(I,L,T,U){let H=null;const B=T.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(B!==void 0)H=B;else if(H=T.isPointLight===!0?m:h,r.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const q=H.uuid,de=L.uuid;let me=p[q];me===void 0&&(me={},p[q]=me);let Y=me[de];Y===void 0&&(Y=H.clone(),me[de]=Y,L.addEventListener("dispose",k)),H=Y}if(H.visible=L.visible,H.wireframe=L.wireframe,U===ll?H.side=L.shadowSide!==null?L.shadowSide:L.side:H.side=L.shadowSide!==null?L.shadowSide:v[L.side],H.alphaMap=L.alphaMap,H.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,H.map=L.map,H.clipShadows=L.clipShadows,H.clippingPlanes=L.clippingPlanes,H.clipIntersection=L.clipIntersection,H.displacementMap=L.displacementMap,H.displacementScale=L.displacementScale,H.displacementBias=L.displacementBias,H.wireframeLinewidth=L.wireframeLinewidth,H.linewidth=L.linewidth,T.isPointLight===!0&&H.isMeshDistanceMaterial===!0){const q=r.properties.get(H);q.light=T}return H}function O(I,L,T,U,H){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&H===ll)&&(!I.frustumCulled||a.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,I.matrixWorld);const de=e.update(I),me=I.material;if(Array.isArray(me)){const Y=de.groups;for(let C=0,F=Y.length;C<F;C++){const se=Y[C],ge=me[se.materialIndex];if(ge&&ge.visible){const we=z(I,ge,U,H);I.onBeforeShadow(r,I,L,T,de,we,se),r.renderBufferDirect(T,null,de,we,I,se),I.onAfterShadow(r,I,L,T,de,we,se)}}}else if(me.visible){const Y=z(I,me,U,H);I.onBeforeShadow(r,I,L,T,de,Y,null),r.renderBufferDirect(T,null,de,Y,I,null),I.onAfterShadow(r,I,L,T,de,Y,null)}}const q=I.children;for(let de=0,me=q.length;de<me;de++)O(q[de],L,T,U,H)}function k(I){I.target.removeEventListener("dispose",k);for(const T in p){const U=p[T],H=I.target.uuid;H in U&&(U[H].dispose(),delete U[H])}}}function rw(r,e){function n(){let X=!1;const Be=new _n;let _e=null;const je=new _n(0,0,0,0);return{setMask:function(Xe){_e!==Xe&&!X&&(r.colorMask(Xe,Xe,Xe,Xe),_e=Xe)},setLocked:function(Xe){X=Xe},setClear:function(Xe,Te,et,lt,an){an===!0&&(Xe*=lt,Te*=lt,et*=lt),Be.set(Xe,Te,et,lt),je.equals(Be)===!1&&(r.clearColor(Xe,Te,et,lt),je.copy(Be))},reset:function(){X=!1,_e=null,je.set(-1,0,0,0)}}}function a(){let X=!1,Be=!1,_e=null,je=null,Xe=null;return{setReversed:function(Te){if(Be!==Te){const et=e.get("EXT_clip_control");Te?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),Be=Te;const lt=Xe;Xe=null,this.setClear(lt)}},getReversed:function(){return Be},setTest:function(Te){Te?Re(r.DEPTH_TEST):$e(r.DEPTH_TEST)},setMask:function(Te){_e!==Te&&!X&&(r.depthMask(Te),_e=Te)},setFunc:function(Te){if(Be&&(Te=vM[Te]),je!==Te){switch(Te){case Rh:r.depthFunc(r.NEVER);break;case Ch:r.depthFunc(r.ALWAYS);break;case Dh:r.depthFunc(r.LESS);break;case eo:r.depthFunc(r.LEQUAL);break;case Nh:r.depthFunc(r.EQUAL);break;case Uh:r.depthFunc(r.GEQUAL);break;case Lh:r.depthFunc(r.GREATER);break;case Oh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}je=Te}},setLocked:function(Te){X=Te},setClear:function(Te){Xe!==Te&&(Xe=Te,Be&&(Te=1-Te),r.clearDepth(Te))},reset:function(){X=!1,_e=null,je=null,Xe=null,Be=!1}}}function o(){let X=!1,Be=null,_e=null,je=null,Xe=null,Te=null,et=null,lt=null,an=null;return{setTest:function(Pt){X||(Pt?Re(r.STENCIL_TEST):$e(r.STENCIL_TEST))},setMask:function(Pt){Be!==Pt&&!X&&(r.stencilMask(Pt),Be=Pt)},setFunc:function(Pt,$n,Bn){(_e!==Pt||je!==$n||Xe!==Bn)&&(r.stencilFunc(Pt,$n,Bn),_e=Pt,je=$n,Xe=Bn)},setOp:function(Pt,$n,Bn){(Te!==Pt||et!==$n||lt!==Bn)&&(r.stencilOp(Pt,$n,Bn),Te=Pt,et=$n,lt=Bn)},setLocked:function(Pt){X=Pt},setClear:function(Pt){an!==Pt&&(r.clearStencil(Pt),an=Pt)},reset:function(){X=!1,Be=null,_e=null,je=null,Xe=null,Te=null,et=null,lt=null,an=null}}}const c=new n,u=new a,h=new o,m=new WeakMap,p=new WeakMap;let _={},v={},g={},S=new WeakMap,b=[],R=null,M=!1,y=null,D=null,z=null,O=null,k=null,I=null,L=null,T=new Ct(0,0,0),U=0,H=!1,B=null,q=null,de=null,me=null,Y=null;const C=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,se=0;const ge=r.getParameter(r.VERSION);ge.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(ge)[1]),F=se>=1):ge.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),F=se>=2);let we=null,P={};const ie=r.getParameter(r.SCISSOR_BOX),be=r.getParameter(r.VIEWPORT),Oe=new _n().fromArray(ie),He=new _n().fromArray(be);function oe(X,Be,_e,je){const Xe=new Uint8Array(4),Te=r.createTexture();r.bindTexture(X,Te),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let et=0;et<_e;et++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Be,0,r.RGBA,1,1,je,0,r.RGBA,r.UNSIGNED_BYTE,Xe):r.texImage2D(Be+et,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Xe);return Te}const De={};De[r.TEXTURE_2D]=oe(r.TEXTURE_2D,r.TEXTURE_2D,1),De[r.TEXTURE_CUBE_MAP]=oe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),De[r.TEXTURE_2D_ARRAY]=oe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),De[r.TEXTURE_3D]=oe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),Re(r.DEPTH_TEST),u.setFunc(eo),fn(!1),Zt(U_),Re(r.CULL_FACE),zt(Oa);function Re(X){_[X]!==!0&&(r.enable(X),_[X]=!0)}function $e(X){_[X]!==!1&&(r.disable(X),_[X]=!1)}function st(X,Be){return g[X]!==Be?(r.bindFramebuffer(X,Be),g[X]=Be,X===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Be),X===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Be),!0):!1}function rt(X,Be){let _e=b,je=!1;if(X){_e=S.get(Be),_e===void 0&&(_e=[],S.set(Be,_e));const Xe=X.textures;if(_e.length!==Xe.length||_e[0]!==r.COLOR_ATTACHMENT0){for(let Te=0,et=Xe.length;Te<et;Te++)_e[Te]=r.COLOR_ATTACHMENT0+Te;_e.length=Xe.length,je=!0}}else _e[0]!==r.BACK&&(_e[0]=r.BACK,je=!0);je&&r.drawBuffers(_e)}function kt(X){return R!==X?(r.useProgram(X),R=X,!0):!1}const mt={[js]:r.FUNC_ADD,[HS]:r.FUNC_SUBTRACT,[VS]:r.FUNC_REVERSE_SUBTRACT};mt[kS]=r.MIN,mt[WS]=r.MAX;const Tt={[XS]:r.ZERO,[YS]:r.ONE,[qS]:r.SRC_COLOR,[Ah]:r.SRC_ALPHA,[JS]:r.SRC_ALPHA_SATURATE,[KS]:r.DST_COLOR,[ZS]:r.DST_ALPHA,[jS]:r.ONE_MINUS_SRC_COLOR,[wh]:r.ONE_MINUS_SRC_ALPHA,[QS]:r.ONE_MINUS_DST_COLOR,[$S]:r.ONE_MINUS_DST_ALPHA,[eM]:r.CONSTANT_COLOR,[tM]:r.ONE_MINUS_CONSTANT_COLOR,[nM]:r.CONSTANT_ALPHA,[iM]:r.ONE_MINUS_CONSTANT_ALPHA};function zt(X,Be,_e,je,Xe,Te,et,lt,an,Pt){if(X===Oa){M===!0&&($e(r.BLEND),M=!1);return}if(M===!1&&(Re(r.BLEND),M=!0),X!==GS){if(X!==y||Pt!==H){if((D!==js||k!==js)&&(r.blendEquation(r.FUNC_ADD),D=js,k=js),Pt)switch(X){case Kr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case L_:r.blendFunc(r.ONE,r.ONE);break;case O_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case I_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ot("WebGLState: Invalid blending: ",X);break}else switch(X){case Kr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case L_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case O_:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case I_:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",X);break}z=null,O=null,I=null,L=null,T.set(0,0,0),U=0,y=X,H=Pt}return}Xe=Xe||Be,Te=Te||_e,et=et||je,(Be!==D||Xe!==k)&&(r.blendEquationSeparate(mt[Be],mt[Xe]),D=Be,k=Xe),(_e!==z||je!==O||Te!==I||et!==L)&&(r.blendFuncSeparate(Tt[_e],Tt[je],Tt[Te],Tt[et]),z=_e,O=je,I=Te,L=et),(lt.equals(T)===!1||an!==U)&&(r.blendColor(lt.r,lt.g,lt.b,an),T.copy(lt),U=an),y=X,H=!1}function gt(X,Be){X.side===na?$e(r.CULL_FACE):Re(r.CULL_FACE);let _e=X.side===ai;Be&&(_e=!_e),fn(_e),X.blending===Kr&&X.transparent===!1?zt(Oa):zt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),c.setMask(X.colorWrite);const je=X.stencilWrite;h.setTest(je),je&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),K(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Re(r.SAMPLE_ALPHA_TO_COVERAGE):$e(r.SAMPLE_ALPHA_TO_COVERAGE)}function fn(X){B!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),B=X)}function Zt(X){X!==FS?(Re(r.CULL_FACE),X!==q&&(X===U_?r.cullFace(r.BACK):X===BS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):$e(r.CULL_FACE),q=X}function An(X){X!==de&&(F&&r.lineWidth(X),de=X)}function K(X,Be,_e){X?(Re(r.POLYGON_OFFSET_FILL),(me!==Be||Y!==_e)&&(me=Be,Y=_e,u.getReversed()&&(Be=-Be),r.polygonOffset(Be,_e))):$e(r.POLYGON_OFFSET_FILL)}function nn(X){X?Re(r.SCISSOR_TEST):$e(r.SCISSOR_TEST)}function Et(X){X===void 0&&(X=r.TEXTURE0+C-1),we!==X&&(r.activeTexture(X),we=X)}function Ft(X,Be,_e){_e===void 0&&(we===null?_e=r.TEXTURE0+C-1:_e=we);let je=P[_e];je===void 0&&(je={type:void 0,texture:void 0},P[_e]=je),(je.type!==X||je.texture!==Be)&&(we!==_e&&(r.activeTexture(_e),we=_e),r.bindTexture(X,Be||De[X]),je.type=X,je.texture=Be)}function ke(){const X=P[we];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function $t(){try{r.compressedTexImage2D(...arguments)}catch(X){Ot("WebGLState:",X)}}function N(){try{r.compressedTexImage3D(...arguments)}catch(X){Ot("WebGLState:",X)}}function E(){try{r.texSubImage2D(...arguments)}catch(X){Ot("WebGLState:",X)}}function ae(){try{r.texSubImage3D(...arguments)}catch(X){Ot("WebGLState:",X)}}function xe(){try{r.compressedTexSubImage2D(...arguments)}catch(X){Ot("WebGLState:",X)}}function Ne(){try{r.compressedTexSubImage3D(...arguments)}catch(X){Ot("WebGLState:",X)}}function he(){try{r.texStorage2D(...arguments)}catch(X){Ot("WebGLState:",X)}}function ye(){try{r.texStorage3D(...arguments)}catch(X){Ot("WebGLState:",X)}}function ce(){try{r.texImage2D(...arguments)}catch(X){Ot("WebGLState:",X)}}function Z(){try{r.texImage3D(...arguments)}catch(X){Ot("WebGLState:",X)}}function Ie(X){return v[X]!==void 0?v[X]:r.getParameter(X)}function Ye(X,Be){v[X]!==Be&&(r.pixelStorei(X,Be),v[X]=Be)}function We(X){Oe.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Oe.copy(X))}function Ve(X){He.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),He.copy(X))}function dt(X,Be){let _e=p.get(Be);_e===void 0&&(_e=new WeakMap,p.set(Be,_e));let je=_e.get(X);je===void 0&&(je=r.getUniformBlockIndex(Be,X.name),_e.set(X,je))}function ht(X,Be){const je=p.get(Be).get(X);m.get(Be)!==je&&(r.uniformBlockBinding(Be,je,X.__bindingPointIndex),m.set(Be,je))}function pt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},v={},we=null,P={},g={},S=new WeakMap,b=[],R=null,M=!1,y=null,D=null,z=null,O=null,k=null,I=null,L=null,T=new Ct(0,0,0),U=0,H=!1,B=null,q=null,de=null,me=null,Y=null,Oe.set(0,0,r.canvas.width,r.canvas.height),He.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:Re,disable:$e,bindFramebuffer:st,drawBuffers:rt,useProgram:kt,setBlending:zt,setMaterial:gt,setFlipSided:fn,setCullFace:Zt,setLineWidth:An,setPolygonOffset:K,setScissorTest:nn,activeTexture:Et,bindTexture:Ft,unbindTexture:ke,compressedTexImage2D:$t,compressedTexImage3D:N,texImage2D:ce,texImage3D:Z,pixelStorei:Ye,getParameter:Ie,updateUBOMapping:dt,uniformBlockBinding:ht,texStorage2D:he,texStorage3D:ye,texSubImage2D:E,texSubImage3D:ae,compressedTexSubImage2D:xe,compressedTexSubImage3D:Ne,scissor:We,viewport:Ve,reset:pt}}function ow(r,e,n,a,o,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Mt,_=new WeakMap,v=new Set;let g;const S=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(N,E){return b?new OffscreenCanvas(N,E):_u("canvas")}function M(N,E,ae){let xe=1;const Ne=$t(N);if((Ne.width>ae||Ne.height>ae)&&(xe=ae/Math.max(Ne.width,Ne.height)),xe<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const he=Math.floor(xe*Ne.width),ye=Math.floor(xe*Ne.height);g===void 0&&(g=R(he,ye));const ce=E?R(he,ye):g;return ce.width=he,ce.height=ye,ce.getContext("2d").drawImage(N,0,0,he,ye),ft("WebGLRenderer: Texture has been resized from ("+Ne.width+"x"+Ne.height+") to ("+he+"x"+ye+")."),ce}else return"data"in N&&ft("WebGLRenderer: Image in DataTexture is too big ("+Ne.width+"x"+Ne.height+")."),N;return N}function y(N){return N.generateMipmaps}function D(N){r.generateMipmap(N)}function z(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function O(N,E,ae,xe,Ne,he=!1){if(N!==null){if(r[N]!==void 0)return r[N];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ye;xe&&(ye=e.get("EXT_texture_norm16"),ye||ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=E;if(E===r.RED&&(ae===r.FLOAT&&(ce=r.R32F),ae===r.HALF_FLOAT&&(ce=r.R16F),ae===r.UNSIGNED_BYTE&&(ce=r.R8),ae===r.UNSIGNED_SHORT&&ye&&(ce=ye.R16_EXT),ae===r.SHORT&&ye&&(ce=ye.R16_SNORM_EXT)),E===r.RED_INTEGER&&(ae===r.UNSIGNED_BYTE&&(ce=r.R8UI),ae===r.UNSIGNED_SHORT&&(ce=r.R16UI),ae===r.UNSIGNED_INT&&(ce=r.R32UI),ae===r.BYTE&&(ce=r.R8I),ae===r.SHORT&&(ce=r.R16I),ae===r.INT&&(ce=r.R32I)),E===r.RG&&(ae===r.FLOAT&&(ce=r.RG32F),ae===r.HALF_FLOAT&&(ce=r.RG16F),ae===r.UNSIGNED_BYTE&&(ce=r.RG8),ae===r.UNSIGNED_SHORT&&ye&&(ce=ye.RG16_EXT),ae===r.SHORT&&ye&&(ce=ye.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(ae===r.UNSIGNED_BYTE&&(ce=r.RG8UI),ae===r.UNSIGNED_SHORT&&(ce=r.RG16UI),ae===r.UNSIGNED_INT&&(ce=r.RG32UI),ae===r.BYTE&&(ce=r.RG8I),ae===r.SHORT&&(ce=r.RG16I),ae===r.INT&&(ce=r.RG32I)),E===r.RGB_INTEGER&&(ae===r.UNSIGNED_BYTE&&(ce=r.RGB8UI),ae===r.UNSIGNED_SHORT&&(ce=r.RGB16UI),ae===r.UNSIGNED_INT&&(ce=r.RGB32UI),ae===r.BYTE&&(ce=r.RGB8I),ae===r.SHORT&&(ce=r.RGB16I),ae===r.INT&&(ce=r.RGB32I)),E===r.RGBA_INTEGER&&(ae===r.UNSIGNED_BYTE&&(ce=r.RGBA8UI),ae===r.UNSIGNED_SHORT&&(ce=r.RGBA16UI),ae===r.UNSIGNED_INT&&(ce=r.RGBA32UI),ae===r.BYTE&&(ce=r.RGBA8I),ae===r.SHORT&&(ce=r.RGBA16I),ae===r.INT&&(ce=r.RGBA32I)),E===r.RGB&&(ae===r.UNSIGNED_SHORT&&ye&&(ce=ye.RGB16_EXT),ae===r.SHORT&&ye&&(ce=ye.RGB16_SNORM_EXT),ae===r.UNSIGNED_INT_5_9_9_9_REV&&(ce=r.RGB9_E5),ae===r.UNSIGNED_INT_10F_11F_11F_REV&&(ce=r.R11F_G11F_B10F)),E===r.RGBA){const Z=he?gu:It.getTransfer(Ne);ae===r.FLOAT&&(ce=r.RGBA32F),ae===r.HALF_FLOAT&&(ce=r.RGBA16F),ae===r.UNSIGNED_BYTE&&(ce=Z===qt?r.SRGB8_ALPHA8:r.RGBA8),ae===r.UNSIGNED_SHORT&&ye&&(ce=ye.RGBA16_EXT),ae===r.SHORT&&ye&&(ce=ye.RGBA16_SNORM_EXT),ae===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),ae===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)}return(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function k(N,E){let ae;return N?E===null||E===oa||E===gl?ae=r.DEPTH24_STENCIL8:E===ia?ae=r.DEPTH32F_STENCIL8:E===ml&&(ae=r.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===oa||E===gl?ae=r.DEPTH_COMPONENT24:E===ia?ae=r.DEPTH_COMPONENT32F:E===ml&&(ae=r.DEPTH_COMPONENT16),ae}function I(N,E){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==Fn&&N.minFilter!==kn?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function L(N){const E=N.target;E.removeEventListener("dispose",L),U(E),E.isVideoTexture&&_.delete(E),E.isHTMLTexture&&v.delete(E)}function T(N){const E=N.target;E.removeEventListener("dispose",T),B(E)}function U(N){const E=a.get(N);if(E.__webglInit===void 0)return;const ae=N.source,xe=S.get(ae);if(xe){const Ne=xe[E.__cacheKey];Ne.usedTimes--,Ne.usedTimes===0&&H(N),Object.keys(xe).length===0&&S.delete(ae)}a.remove(N)}function H(N){const E=a.get(N);r.deleteTexture(E.__webglTexture);const ae=N.source,xe=S.get(ae);delete xe[E.__cacheKey],u.memory.textures--}function B(N){const E=a.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),a.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(E.__webglFramebuffer[xe]))for(let Ne=0;Ne<E.__webglFramebuffer[xe].length;Ne++)r.deleteFramebuffer(E.__webglFramebuffer[xe][Ne]);else r.deleteFramebuffer(E.__webglFramebuffer[xe]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[xe])}else{if(Array.isArray(E.__webglFramebuffer))for(let xe=0;xe<E.__webglFramebuffer.length;xe++)r.deleteFramebuffer(E.__webglFramebuffer[xe]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let xe=0;xe<E.__webglColorRenderbuffer.length;xe++)E.__webglColorRenderbuffer[xe]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[xe]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ae=N.textures;for(let xe=0,Ne=ae.length;xe<Ne;xe++){const he=a.get(ae[xe]);he.__webglTexture&&(r.deleteTexture(he.__webglTexture),u.memory.textures--),a.remove(ae[xe])}a.remove(N)}let q=0;function de(){q=0}function me(){return q}function Y(N){q=N}function C(){const N=q;return N>=o.maxTextures&&ft("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),q+=1,N}function F(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function se(N,E){const ae=a.get(N);if(N.isVideoTexture&&Ft(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&ae.__version!==N.version){const xe=N.image;if(xe===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{$e(ae,N,E);return}}else N.isExternalTexture&&(ae.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,ae.__webglTexture,r.TEXTURE0+E)}function ge(N,E){const ae=a.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&ae.__version!==N.version){$e(ae,N,E);return}else N.isExternalTexture&&(ae.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,ae.__webglTexture,r.TEXTURE0+E)}function we(N,E){const ae=a.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&ae.__version!==N.version){$e(ae,N,E);return}n.bindTexture(r.TEXTURE_3D,ae.__webglTexture,r.TEXTURE0+E)}function P(N,E){const ae=a.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&ae.__version!==N.version){st(ae,N,E);return}n.bindTexture(r.TEXTURE_CUBE_MAP,ae.__webglTexture,r.TEXTURE0+E)}const ie={[pl]:r.REPEAT,[La]:r.CLAMP_TO_EDGE,[Ih]:r.MIRRORED_REPEAT},be={[Fn]:r.NEAREST,[rM]:r.NEAREST_MIPMAP_NEAREST,[Cc]:r.NEAREST_MIPMAP_LINEAR,[kn]:r.LINEAR,[Hd]:r.LINEAR_MIPMAP_NEAREST,[$s]:r.LINEAR_MIPMAP_LINEAR},Oe={[cM]:r.NEVER,[pM]:r.ALWAYS,[uM]:r.LESS,[Cp]:r.LEQUAL,[fM]:r.EQUAL,[Dp]:r.GEQUAL,[dM]:r.GREATER,[hM]:r.NOTEQUAL};function He(N,E){if(E.type===ia&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===kn||E.magFilter===Hd||E.magFilter===Cc||E.magFilter===$s||E.minFilter===kn||E.minFilter===Hd||E.minFilter===Cc||E.minFilter===$s)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,ie[E.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,ie[E.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,ie[E.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,be[E.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,be[E.minFilter]),E.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,Oe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Fn||E.minFilter!==Cc&&E.minFilter!==$s||E.type===ia&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");r.texParameterf(N,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function oe(N,E){let ae=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",L));const xe=E.source;let Ne=S.get(xe);Ne===void 0&&(Ne={},S.set(xe,Ne));const he=F(E);if(he!==N.__cacheKey){Ne[he]===void 0&&(Ne[he]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,ae=!0),Ne[he].usedTimes++;const ye=Ne[N.__cacheKey];ye!==void 0&&(Ne[N.__cacheKey].usedTimes--,ye.usedTimes===0&&H(E)),N.__cacheKey=he,N.__webglTexture=Ne[he].texture}return ae}function De(N,E,ae){return Math.floor(Math.floor(N/ae)/E)}function Re(N,E,ae,xe){const he=N.updateRanges;if(he.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,ae,xe,E.data);else{he.sort((Ye,We)=>Ye.start-We.start);let ye=0;for(let Ye=1;Ye<he.length;Ye++){const We=he[ye],Ve=he[Ye],dt=We.start+We.count,ht=De(Ve.start,E.width,4),pt=De(We.start,E.width,4);Ve.start<=dt+1&&ht===pt&&De(Ve.start+Ve.count-1,E.width,4)===ht?We.count=Math.max(We.count,Ve.start+Ve.count-We.start):(++ye,he[ye]=Ve)}he.length=ye+1;const ce=n.getParameter(r.UNPACK_ROW_LENGTH),Z=n.getParameter(r.UNPACK_SKIP_PIXELS),Ie=n.getParameter(r.UNPACK_SKIP_ROWS);n.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Ye=0,We=he.length;Ye<We;Ye++){const Ve=he[Ye],dt=Math.floor(Ve.start/4),ht=Math.ceil(Ve.count/4),pt=dt%E.width,X=Math.floor(dt/E.width),Be=ht,_e=1;n.pixelStorei(r.UNPACK_SKIP_PIXELS,pt),n.pixelStorei(r.UNPACK_SKIP_ROWS,X),n.texSubImage2D(r.TEXTURE_2D,0,pt,X,Be,_e,ae,xe,E.data)}N.clearUpdateRanges(),n.pixelStorei(r.UNPACK_ROW_LENGTH,ce),n.pixelStorei(r.UNPACK_SKIP_PIXELS,Z),n.pixelStorei(r.UNPACK_SKIP_ROWS,Ie)}}function $e(N,E,ae){let xe=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(xe=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(xe=r.TEXTURE_3D);const Ne=oe(N,E),he=E.source;n.bindTexture(xe,N.__webglTexture,r.TEXTURE0+ae);const ye=a.get(he);if(he.version!==ye.__version||Ne===!0){if(n.activeTexture(r.TEXTURE0+ae),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const _e=It.getPrimaries(It.workingColorSpace),je=E.colorSpace===ys?null:It.getPrimaries(E.colorSpace),Xe=E.colorSpace===ys||_e===je?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe)}n.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let Z=M(E.image,!1,o.maxTextureSize);Z=ke(E,Z);const Ie=c.convert(E.format,E.colorSpace),Ye=c.convert(E.type);let We=O(E.internalFormat,Ie,Ye,E.normalized,E.colorSpace,E.isVideoTexture);He(xe,E);let Ve;const dt=E.mipmaps,ht=E.isVideoTexture!==!0,pt=ye.__version===void 0||Ne===!0,X=he.dataReady,Be=I(E,Z);if(E.isDepthTexture)We=k(E.format===Ks,E.type),pt&&(ht?n.texStorage2D(r.TEXTURE_2D,1,We,Z.width,Z.height):n.texImage2D(r.TEXTURE_2D,0,We,Z.width,Z.height,0,Ie,Ye,null));else if(E.isDataTexture)if(dt.length>0){ht&&pt&&n.texStorage2D(r.TEXTURE_2D,Be,We,dt[0].width,dt[0].height);for(let _e=0,je=dt.length;_e<je;_e++)Ve=dt[_e],ht?X&&n.texSubImage2D(r.TEXTURE_2D,_e,0,0,Ve.width,Ve.height,Ie,Ye,Ve.data):n.texImage2D(r.TEXTURE_2D,_e,We,Ve.width,Ve.height,0,Ie,Ye,Ve.data);E.generateMipmaps=!1}else ht?(pt&&n.texStorage2D(r.TEXTURE_2D,Be,We,Z.width,Z.height),X&&Re(E,Z,Ie,Ye)):n.texImage2D(r.TEXTURE_2D,0,We,Z.width,Z.height,0,Ie,Ye,Z.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ht&&pt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Be,We,dt[0].width,dt[0].height,Z.depth);for(let _e=0,je=dt.length;_e<je;_e++)if(Ve=dt[_e],E.format!==Hi)if(Ie!==null)if(ht){if(X)if(E.layerUpdates.size>0){const Xe=mv(Ve.width,Ve.height,E.format,E.type);for(const Te of E.layerUpdates){const et=Ve.data.subarray(Te*Xe/Ve.data.BYTES_PER_ELEMENT,(Te+1)*Xe/Ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,Te,Ve.width,Ve.height,1,Ie,et)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,0,Ve.width,Ve.height,Z.depth,Ie,Ve.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,_e,We,Ve.width,Ve.height,Z.depth,0,Ve.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?X&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,0,Ve.width,Ve.height,Z.depth,Ie,Ye,Ve.data):n.texImage3D(r.TEXTURE_2D_ARRAY,_e,We,Ve.width,Ve.height,Z.depth,0,Ie,Ye,Ve.data)}else{ht&&pt&&n.texStorage2D(r.TEXTURE_2D,Be,We,dt[0].width,dt[0].height);for(let _e=0,je=dt.length;_e<je;_e++)Ve=dt[_e],E.format!==Hi?Ie!==null?ht?X&&n.compressedTexSubImage2D(r.TEXTURE_2D,_e,0,0,Ve.width,Ve.height,Ie,Ve.data):n.compressedTexImage2D(r.TEXTURE_2D,_e,We,Ve.width,Ve.height,0,Ve.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?X&&n.texSubImage2D(r.TEXTURE_2D,_e,0,0,Ve.width,Ve.height,Ie,Ye,Ve.data):n.texImage2D(r.TEXTURE_2D,_e,We,Ve.width,Ve.height,0,Ie,Ye,Ve.data)}else if(E.isDataArrayTexture)if(ht){if(pt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Be,We,Z.width,Z.height,Z.depth),X)if(E.layerUpdates.size>0){const _e=mv(Z.width,Z.height,E.format,E.type);for(const je of E.layerUpdates){const Xe=Z.data.subarray(je*_e/Z.data.BYTES_PER_ELEMENT,(je+1)*_e/Z.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,je,Z.width,Z.height,1,Ie,Ye,Xe)}E.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,Ie,Ye,Z.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,We,Z.width,Z.height,Z.depth,0,Ie,Ye,Z.data);else if(E.isData3DTexture)ht?(pt&&n.texStorage3D(r.TEXTURE_3D,Be,We,Z.width,Z.height,Z.depth),X&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,Ie,Ye,Z.data)):n.texImage3D(r.TEXTURE_3D,0,We,Z.width,Z.height,Z.depth,0,Ie,Ye,Z.data);else if(E.isFramebufferTexture){if(pt)if(ht)n.texStorage2D(r.TEXTURE_2D,Be,We,Z.width,Z.height);else{let _e=Z.width,je=Z.height;for(let Xe=0;Xe<Be;Xe++)n.texImage2D(r.TEXTURE_2D,Xe,We,_e,je,0,Ie,Ye,null),_e>>=1,je>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const _e=r.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),Z.parentNode!==_e){_e.appendChild(Z),v.add(E),_e.onpaint=lt=>{const an=lt.changedElements;for(const Pt of v)an.includes(Pt.image)&&(Pt.needsUpdate=!0)},_e.requestPaint();return}const je=0,Xe=r.RGBA,Te=r.RGBA,et=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,je,Xe,Te,et,Z),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(dt.length>0){if(ht&&pt){const _e=$t(dt[0]);n.texStorage2D(r.TEXTURE_2D,Be,We,_e.width,_e.height)}for(let _e=0,je=dt.length;_e<je;_e++)Ve=dt[_e],ht?X&&n.texSubImage2D(r.TEXTURE_2D,_e,0,0,Ie,Ye,Ve):n.texImage2D(r.TEXTURE_2D,_e,We,Ie,Ye,Ve);E.generateMipmaps=!1}else if(ht){if(pt){const _e=$t(Z);n.texStorage2D(r.TEXTURE_2D,Be,We,_e.width,_e.height)}X&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Ie,Ye,Z)}else n.texImage2D(r.TEXTURE_2D,0,We,Ie,Ye,Z);y(E)&&D(xe),ye.__version=he.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function st(N,E,ae){if(E.image.length!==6)return;const xe=oe(N,E),Ne=E.source;n.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+ae);const he=a.get(Ne);if(Ne.version!==he.__version||xe===!0){n.activeTexture(r.TEXTURE0+ae);const ye=It.getPrimaries(It.workingColorSpace),ce=E.colorSpace===ys?null:It.getPrimaries(E.colorSpace),Z=E.colorSpace===ys||ye===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const Ie=E.isCompressedTexture||E.image[0].isCompressedTexture,Ye=E.image[0]&&E.image[0].isDataTexture,We=[];for(let Te=0;Te<6;Te++)!Ie&&!Ye?We[Te]=M(E.image[Te],!0,o.maxCubemapSize):We[Te]=Ye?E.image[Te].image:E.image[Te],We[Te]=ke(E,We[Te]);const Ve=We[0],dt=c.convert(E.format,E.colorSpace),ht=c.convert(E.type),pt=O(E.internalFormat,dt,ht,E.normalized,E.colorSpace),X=E.isVideoTexture!==!0,Be=he.__version===void 0||xe===!0,_e=Ne.dataReady;let je=I(E,Ve);He(r.TEXTURE_CUBE_MAP,E);let Xe;if(Ie){X&&Be&&n.texStorage2D(r.TEXTURE_CUBE_MAP,je,pt,Ve.width,Ve.height);for(let Te=0;Te<6;Te++){Xe=We[Te].mipmaps;for(let et=0;et<Xe.length;et++){const lt=Xe[et];E.format!==Hi?dt!==null?X?_e&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,et,0,0,lt.width,lt.height,dt,lt.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,et,pt,lt.width,lt.height,0,lt.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?_e&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,et,0,0,lt.width,lt.height,dt,ht,lt.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,et,pt,lt.width,lt.height,0,dt,ht,lt.data)}}}else{if(Xe=E.mipmaps,X&&Be){Xe.length>0&&je++;const Te=$t(We[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,je,pt,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(Ye){X?_e&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,We[Te].width,We[Te].height,dt,ht,We[Te].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,pt,We[Te].width,We[Te].height,0,dt,ht,We[Te].data);for(let et=0;et<Xe.length;et++){const an=Xe[et].image[Te].image;X?_e&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,et+1,0,0,an.width,an.height,dt,ht,an.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,et+1,pt,an.width,an.height,0,dt,ht,an.data)}}else{X?_e&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,dt,ht,We[Te]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,pt,dt,ht,We[Te]);for(let et=0;et<Xe.length;et++){const lt=Xe[et];X?_e&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,et+1,0,0,dt,ht,lt.image[Te]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,et+1,pt,dt,ht,lt.image[Te])}}}y(E)&&D(r.TEXTURE_CUBE_MAP),he.__version=Ne.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function rt(N,E,ae,xe,Ne,he){const ye=c.convert(ae.format,ae.colorSpace),ce=c.convert(ae.type),Z=O(ae.internalFormat,ye,ce,ae.normalized,ae.colorSpace),Ie=a.get(E),Ye=a.get(ae);if(Ye.__renderTarget=E,!Ie.__hasExternalTextures){const We=Math.max(1,E.width>>he),Ve=Math.max(1,E.height>>he);Ne===r.TEXTURE_3D||Ne===r.TEXTURE_2D_ARRAY?n.texImage3D(Ne,he,Z,We,Ve,E.depth,0,ye,ce,null):n.texImage2D(Ne,he,Z,We,Ve,0,ye,ce,null)}n.bindFramebuffer(r.FRAMEBUFFER,N),Et(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xe,Ne,Ye.__webglTexture,0,nn(E)):(Ne===r.TEXTURE_2D||Ne>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Ne<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,xe,Ne,Ye.__webglTexture,he),n.bindFramebuffer(r.FRAMEBUFFER,null)}function kt(N,E,ae){if(r.bindRenderbuffer(r.RENDERBUFFER,N),E.depthBuffer){const xe=E.depthTexture,Ne=xe&&xe.isDepthTexture?xe.type:null,he=k(E.stencilBuffer,Ne),ye=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Et(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,nn(E),he,E.width,E.height):ae?r.renderbufferStorageMultisample(r.RENDERBUFFER,nn(E),he,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,he,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,N)}else{const xe=E.textures;for(let Ne=0;Ne<xe.length;Ne++){const he=xe[Ne],ye=c.convert(he.format,he.colorSpace),ce=c.convert(he.type),Z=O(he.internalFormat,ye,ce,he.normalized,he.colorSpace);Et(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,nn(E),Z,E.width,E.height):ae?r.renderbufferStorageMultisample(r.RENDERBUFFER,nn(E),Z,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Z,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function mt(N,E,ae){const xe=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ne=a.get(E.depthTexture);if(Ne.__renderTarget=E,(!Ne.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),xe){if(Ne.__webglInit===void 0&&(Ne.__webglInit=!0,E.depthTexture.addEventListener("dispose",L)),Ne.__webglTexture===void 0){Ne.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,Ne.__webglTexture),He(r.TEXTURE_CUBE_MAP,E.depthTexture);const Ie=c.convert(E.depthTexture.format),Ye=c.convert(E.depthTexture.type);let We;E.depthTexture.format===Fa?We=r.DEPTH_COMPONENT24:E.depthTexture.format===Ks&&(We=r.DEPTH24_STENCIL8);for(let Ve=0;Ve<6;Ve++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,0,We,E.width,E.height,0,Ie,Ye,null)}}else se(E.depthTexture,0);const he=Ne.__webglTexture,ye=nn(E),ce=xe?r.TEXTURE_CUBE_MAP_POSITIVE_X+ae:r.TEXTURE_2D,Z=E.depthTexture.format===Ks?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Fa)Et(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,ce,he,0,ye):r.framebufferTexture2D(r.FRAMEBUFFER,Z,ce,he,0);else if(E.depthTexture.format===Ks)Et(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,ce,he,0,ye):r.framebufferTexture2D(r.FRAMEBUFFER,Z,ce,he,0);else throw new Error("Unknown depthTexture format")}function Tt(N){const E=a.get(N),ae=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const xe=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),xe){const Ne=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,xe.removeEventListener("dispose",Ne)};xe.addEventListener("dispose",Ne),E.__depthDisposeCallback=Ne}E.__boundDepthTexture=xe}if(N.depthTexture&&!E.__autoAllocateDepthBuffer)if(ae)for(let xe=0;xe<6;xe++)mt(E.__webglFramebuffer[xe],N,xe);else{const xe=N.texture.mipmaps;xe&&xe.length>0?mt(E.__webglFramebuffer[0],N,0):mt(E.__webglFramebuffer,N,0)}else if(ae){E.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[xe]),E.__webglDepthbuffer[xe]===void 0)E.__webglDepthbuffer[xe]=r.createRenderbuffer(),kt(E.__webglDepthbuffer[xe],N,!1);else{const Ne=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=E.__webglDepthbuffer[xe];r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ne,r.RENDERBUFFER,he)}}else{const xe=N.texture.mipmaps;if(xe&&xe.length>0?n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),kt(E.__webglDepthbuffer,N,!1);else{const Ne=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ne,r.RENDERBUFFER,he)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function zt(N,E,ae){const xe=a.get(N);E!==void 0&&rt(xe.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ae!==void 0&&Tt(N)}function gt(N){const E=N.texture,ae=a.get(N),xe=a.get(E);N.addEventListener("dispose",T);const Ne=N.textures,he=N.isWebGLCubeRenderTarget===!0,ye=Ne.length>1;if(ye||(xe.__webglTexture===void 0&&(xe.__webglTexture=r.createTexture()),xe.__version=E.version,u.memory.textures++),he){ae.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0){ae.__webglFramebuffer[ce]=[];for(let Z=0;Z<E.mipmaps.length;Z++)ae.__webglFramebuffer[ce][Z]=r.createFramebuffer()}else ae.__webglFramebuffer[ce]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){ae.__webglFramebuffer=[];for(let ce=0;ce<E.mipmaps.length;ce++)ae.__webglFramebuffer[ce]=r.createFramebuffer()}else ae.__webglFramebuffer=r.createFramebuffer();if(ye)for(let ce=0,Z=Ne.length;ce<Z;ce++){const Ie=a.get(Ne[ce]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=r.createTexture(),u.memory.textures++)}if(N.samples>0&&Et(N)===!1){ae.__webglMultisampledFramebuffer=r.createFramebuffer(),ae.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let ce=0;ce<Ne.length;ce++){const Z=Ne[ce];ae.__webglColorRenderbuffer[ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ae.__webglColorRenderbuffer[ce]);const Ie=c.convert(Z.format,Z.colorSpace),Ye=c.convert(Z.type),We=O(Z.internalFormat,Ie,Ye,Z.normalized,Z.colorSpace,N.isXRRenderTarget===!0),Ve=nn(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ve,We,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,ae.__webglColorRenderbuffer[ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(ae.__webglDepthRenderbuffer=r.createRenderbuffer(),kt(ae.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(he){n.bindTexture(r.TEXTURE_CUBE_MAP,xe.__webglTexture),He(r.TEXTURE_CUBE_MAP,E);for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let Z=0;Z<E.mipmaps.length;Z++)rt(ae.__webglFramebuffer[ce][Z],N,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Z);else rt(ae.__webglFramebuffer[ce],N,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);y(E)&&D(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ye){for(let ce=0,Z=Ne.length;ce<Z;ce++){const Ie=Ne[ce],Ye=a.get(Ie);let We=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(We=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(We,Ye.__webglTexture),He(We,Ie),rt(ae.__webglFramebuffer,N,Ie,r.COLOR_ATTACHMENT0+ce,We,0),y(Ie)&&D(We)}n.unbindTexture()}else{let ce=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ce=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(ce,xe.__webglTexture),He(ce,E),E.mipmaps&&E.mipmaps.length>0)for(let Z=0;Z<E.mipmaps.length;Z++)rt(ae.__webglFramebuffer[Z],N,E,r.COLOR_ATTACHMENT0,ce,Z);else rt(ae.__webglFramebuffer,N,E,r.COLOR_ATTACHMENT0,ce,0);y(E)&&D(ce),n.unbindTexture()}N.depthBuffer&&Tt(N)}function fn(N){const E=N.textures;for(let ae=0,xe=E.length;ae<xe;ae++){const Ne=E[ae];if(y(Ne)){const he=z(N),ye=a.get(Ne).__webglTexture;n.bindTexture(he,ye),D(he),n.unbindTexture()}}}const Zt=[],An=[];function K(N){if(N.samples>0){if(Et(N)===!1){const E=N.textures,ae=N.width,xe=N.height;let Ne=r.COLOR_BUFFER_BIT;const he=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=a.get(N),ce=E.length>1;if(ce)for(let Ie=0;Ie<E.length;Ie++)n.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const Z=N.texture.mipmaps;Z&&Z.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Ie=0;Ie<E.length;Ie++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Ne|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Ne|=r.STENCIL_BUFFER_BIT)),ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ye.__webglColorRenderbuffer[Ie]);const Ye=a.get(E[Ie]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ye,0)}r.blitFramebuffer(0,0,ae,xe,0,0,ae,xe,Ne,r.NEAREST),m===!0&&(Zt.length=0,An.length=0,Zt.push(r.COLOR_ATTACHMENT0+Ie),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Zt.push(he),An.push(he),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,An)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Zt))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ce)for(let Ie=0;Ie<E.length;Ie++){n.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.RENDERBUFFER,ye.__webglColorRenderbuffer[Ie]);const Ye=a.get(E[Ie]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.TEXTURE_2D,Ye,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function nn(N){return Math.min(o.maxSamples,N.samples)}function Et(N){const E=a.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ft(N){const E=u.render.frame;_.get(N)!==E&&(_.set(N,E),N.update())}function ke(N,E){const ae=N.colorSpace,xe=N.format,Ne=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||ae!==mu&&ae!==ys&&(It.getTransfer(ae)===qt?(xe!==Hi||Ne!==_i)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",ae)),E}function $t(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=C,this.resetTextureUnits=de,this.getTextureUnits=me,this.setTextureUnits=Y,this.setTexture2D=se,this.setTexture2DArray=ge,this.setTexture3D=we,this.setTextureCube=P,this.rebindTextures=zt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=fn,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=Et,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function lw(r,e){function n(a,o=ys){let c;const u=It.getTransfer(o);if(a===_i)return r.UNSIGNED_BYTE;if(a===bp)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Tp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===Kv)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===Qv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===Zv)return r.BYTE;if(a===$v)return r.SHORT;if(a===ml)return r.UNSIGNED_SHORT;if(a===Ep)return r.INT;if(a===oa)return r.UNSIGNED_INT;if(a===ia)return r.FLOAT;if(a===Pa)return r.HALF_FLOAT;if(a===Jv)return r.ALPHA;if(a===ex)return r.RGB;if(a===Hi)return r.RGBA;if(a===Fa)return r.DEPTH_COMPONENT;if(a===Ks)return r.DEPTH_STENCIL;if(a===tx)return r.RED;if(a===Ap)return r.RED_INTEGER;if(a===Js)return r.RG;if(a===wp)return r.RG_INTEGER;if(a===Rp)return r.RGBA_INTEGER;if(a===ou||a===lu||a===cu||a===uu)if(u===qt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===ou)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===lu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===ou)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===lu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===cu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===uu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===zh||a===Ph||a===Fh||a===Bh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===zh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Ph)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Fh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Bh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Gh||a===Hh||a===Vh||a===kh||a===Wh||a===du||a===Xh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Gh||a===Hh)return u===qt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Vh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===kh)return c.COMPRESSED_R11_EAC;if(a===Wh)return c.COMPRESSED_SIGNED_R11_EAC;if(a===du)return c.COMPRESSED_RG11_EAC;if(a===Xh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Yh||a===qh||a===jh||a===Zh||a===$h||a===Kh||a===Qh||a===Jh||a===ep||a===tp||a===np||a===ip||a===ap||a===sp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Yh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===qh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===jh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Zh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===$h)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Kh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Qh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Jh)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===ep)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===tp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===np)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===ip)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===ap)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===sp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===rp||a===op||a===lp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===rp)return u===qt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===op)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===lp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===cp||a===up||a===hu||a===fp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===cp)return c.COMPRESSED_RED_RGTC1_EXT;if(a===up)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===hu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===fp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===gl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const cw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uw=`
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

}`;class fw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new ux(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new la({vertexShader:cw,fragmentShader:uw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new tn(new Au(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dw extends er{constructor(e,n){super();const a=this;let o=null,c=1,u=null,h="local-floor",m=1,p=null,_=null,v=null,g=null,S=null,b=null;const R=typeof XRWebGLBinding<"u",M=new fw,y={},D=n.getContextAttributes();let z=null,O=null;const k=[],I=[],L=new Mt;let T=null;const U=new gi;U.viewport=new _n;const H=new gi;H.viewport=new _n;const B=[U,H],q=new ME;let de=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let De=k[oe];return De===void 0&&(De=new qd,k[oe]=De),De.getTargetRaySpace()},this.getControllerGrip=function(oe){let De=k[oe];return De===void 0&&(De=new qd,k[oe]=De),De.getGripSpace()},this.getHand=function(oe){let De=k[oe];return De===void 0&&(De=new qd,k[oe]=De),De.getHandSpace()};function Y(oe){const De=I.indexOf(oe.inputSource);if(De===-1)return;const Re=k[De];Re!==void 0&&(Re.update(oe.inputSource,oe.frame,p||u),Re.dispatchEvent({type:oe.type,data:oe.inputSource}))}function C(){o.removeEventListener("select",Y),o.removeEventListener("selectstart",Y),o.removeEventListener("selectend",Y),o.removeEventListener("squeeze",Y),o.removeEventListener("squeezestart",Y),o.removeEventListener("squeezeend",Y),o.removeEventListener("end",C),o.removeEventListener("inputsourceschange",F);for(let oe=0;oe<k.length;oe++){const De=I[oe];De!==null&&(I[oe]=null,k[oe].disconnect(De))}de=null,me=null,M.reset();for(const oe in y)delete y[oe];e.setRenderTarget(z),S=null,g=null,v=null,o=null,O=null,He.stop(),a.isPresenting=!1,e.setPixelRatio(T),e.setSize(L.width,L.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){c=oe,a.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){h=oe,a.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(oe){p=oe},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&R&&(v=new XRWebGLBinding(o,n)),v},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(oe){if(o=oe,o!==null){if(z=e.getRenderTarget(),o.addEventListener("select",Y),o.addEventListener("selectstart",Y),o.addEventListener("selectend",Y),o.addEventListener("squeeze",Y),o.addEventListener("squeezestart",Y),o.addEventListener("squeezeend",Y),o.addEventListener("end",C),o.addEventListener("inputsourceschange",F),D.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(L),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,$e=null,st=null;D.depth&&(st=D.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Re=D.stencil?Ks:Fa,$e=D.stencil?gl:oa);const rt={colorFormat:n.RGBA8,depthFormat:st,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(rt),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),O=new ra(g.textureWidth,g.textureHeight,{format:Hi,type:_i,depthTexture:new io(g.textureWidth,g.textureHeight,$e,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Re={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,n,Re),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),O=new ra(S.framebufferWidth,S.framebufferHeight,{format:Hi,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(h),He.setContext(o),He.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function F(oe){for(let De=0;De<oe.removed.length;De++){const Re=oe.removed[De],$e=I.indexOf(Re);$e>=0&&(I[$e]=null,k[$e].disconnect(Re))}for(let De=0;De<oe.added.length;De++){const Re=oe.added[De];let $e=I.indexOf(Re);if($e===-1){for(let rt=0;rt<k.length;rt++)if(rt>=I.length){I.push(Re),$e=rt;break}else if(I[rt]===null){I[rt]=Re,$e=rt;break}if($e===-1)break}const st=k[$e];st&&st.connect(Re)}}const se=new ee,ge=new ee;function we(oe,De,Re){se.setFromMatrixPosition(De.matrixWorld),ge.setFromMatrixPosition(Re.matrixWorld);const $e=se.distanceTo(ge),st=De.projectionMatrix.elements,rt=Re.projectionMatrix.elements,kt=st[14]/(st[10]-1),mt=st[14]/(st[10]+1),Tt=(st[9]+1)/st[5],zt=(st[9]-1)/st[5],gt=(st[8]-1)/st[0],fn=(rt[8]+1)/rt[0],Zt=kt*gt,An=kt*fn,K=$e/(-gt+fn),nn=K*-gt;if(De.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(nn),oe.translateZ(K),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),st[10]===-1)oe.projectionMatrix.copy(De.projectionMatrix),oe.projectionMatrixInverse.copy(De.projectionMatrixInverse);else{const Et=kt+K,Ft=mt+K,ke=Zt-nn,$t=An+($e-nn),N=Tt*mt/Ft*Et,E=zt*mt/Ft*Et;oe.projectionMatrix.makePerspective(ke,$t,N,E,Et,Ft),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function P(oe,De){De===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(De.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(o===null)return;let De=oe.near,Re=oe.far;M.texture!==null&&(M.depthNear>0&&(De=M.depthNear),M.depthFar>0&&(Re=M.depthFar)),q.near=H.near=U.near=De,q.far=H.far=U.far=Re,(de!==q.near||me!==q.far)&&(o.updateRenderState({depthNear:q.near,depthFar:q.far}),de=q.near,me=q.far),q.layers.mask=oe.layers.mask|6,U.layers.mask=q.layers.mask&-5,H.layers.mask=q.layers.mask&-3;const $e=oe.parent,st=q.cameras;P(q,$e);for(let rt=0;rt<st.length;rt++)P(st[rt],$e);st.length===2?we(q,U,H):q.projectionMatrix.copy(U.projectionMatrix),ie(oe,q,$e)};function ie(oe,De,Re){Re===null?oe.matrix.copy(De.matrixWorld):(oe.matrix.copy(Re.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(De.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(De.projectionMatrix),oe.projectionMatrixInverse.copy(De.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=vl*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(g===null&&S===null))return m},this.setFoveation=function(oe){m=oe,g!==null&&(g.fixedFoveation=oe),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=oe)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(q)},this.getCameraTexture=function(oe){return y[oe]};let be=null;function Oe(oe,De){if(_=De.getViewerPose(p||u),b=De,_!==null){const Re=_.views;S!==null&&(e.setRenderTargetFramebuffer(O,S.framebuffer),e.setRenderTarget(O));let $e=!1;Re.length!==q.cameras.length&&(q.cameras.length=0,$e=!0);for(let mt=0;mt<Re.length;mt++){const Tt=Re[mt];let zt=null;if(S!==null)zt=S.getViewport(Tt);else{const fn=v.getViewSubImage(g,Tt);zt=fn.viewport,mt===0&&(e.setRenderTargetTextures(O,fn.colorTexture,fn.depthStencilTexture),e.setRenderTarget(O))}let gt=B[mt];gt===void 0&&(gt=new gi,gt.layers.enable(mt),gt.viewport=new _n,B[mt]=gt),gt.matrix.fromArray(Tt.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(Tt.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(zt.x,zt.y,zt.width,zt.height),mt===0&&(q.matrix.copy(gt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),$e===!0&&q.cameras.push(gt)}const st=o.enabledFeatures;if(st&&st.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){v=a.getBinding();const mt=v.getDepthInformation(Re[0]);mt&&mt.isValid&&mt.texture&&M.init(mt,o.renderState)}if(st&&st.includes("camera-access")&&R){e.state.unbindTexture(),v=a.getBinding();for(let mt=0;mt<Re.length;mt++){const Tt=Re[mt].camera;if(Tt){let zt=y[Tt];zt||(zt=new ux,y[Tt]=zt);const gt=v.getCameraImage(Tt);zt.sourceTexture=gt}}}}for(let Re=0;Re<k.length;Re++){const $e=I[Re],st=k[Re];$e!==null&&st!==void 0&&st.update($e,De,p||u)}be&&be(oe,De),De.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:De}),b=null}const He=new mx;He.setAnimationLoop(Oe),this.setAnimationLoop=function(oe){be=oe},this.dispose=function(){}}}const hw=new un,Mx=new vt;Mx.set(-1,0,0,0,1,0,0,0,1);function pw(r,e){function n(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function a(M,y){y.color.getRGB(M.fogColor.value,fx(r)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function o(M,y,D,z,O){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(M,y):y.isMeshLambertMaterial?(c(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(M,y),v(M,y)):y.isMeshPhongMaterial?(c(M,y),_(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(M,y),g(M,y),y.isMeshPhysicalMaterial&&S(M,y,O)):y.isMeshMatcapMaterial?(c(M,y),b(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),R(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(u(M,y),y.isLineDashedMaterial&&h(M,y)):y.isPointsMaterial?m(M,y,D,z):y.isSpriteMaterial?p(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,n(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,n(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===ai&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,n(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===ai&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,n(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,n(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const D=e.get(y),z=D.envMap,O=D.envMapRotation;z&&(M.envMap.value=z,M.envMapRotation.value.setFromMatrix4(hw.makeRotationFromEuler(O)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Mx),M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,M.aoMapTransform))}function u(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,n(y.map,M.mapTransform))}function h(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function m(M,y,D,z){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*D,M.scale.value=z*.5,y.map&&(M.map.value=y.map,n(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function p(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,n(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function _(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function v(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function g(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function S(M,y,D){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ai&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,y){y.matcap&&(M.matcap.value=y.matcap)}function R(M,y){const D=e.get(y).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function mw(r,e,n,a){let o={},c={},u=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,z){const O=z.program;a.uniformBlockBinding(D,O)}function p(D,z){let O=o[D.id];O===void 0&&(b(D),O=_(D),o[D.id]=O,D.addEventListener("dispose",M));const k=z.program;a.updateUBOMapping(D,k);const I=e.render.frame;c[D.id]!==I&&(g(D),c[D.id]=I)}function _(D){const z=v();D.__bindingPointIndex=z;const O=r.createBuffer(),k=D.__size,I=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,O),r.bufferData(r.UNIFORM_BUFFER,k,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,z,O),O}function v(){for(let D=0;D<h;D++)if(u.indexOf(D)===-1)return u.push(D),D;return Ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const z=o[D.id],O=D.uniforms,k=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,z);for(let I=0,L=O.length;I<L;I++){const T=Array.isArray(O[I])?O[I]:[O[I]];for(let U=0,H=T.length;U<H;U++){const B=T[U];if(S(B,I,U,k)===!0){const q=B.__offset,de=Array.isArray(B.value)?B.value:[B.value];let me=0;for(let Y=0;Y<de.length;Y++){const C=de[Y],F=R(C);typeof C=="number"||typeof C=="boolean"?(B.__data[0]=C,r.bufferSubData(r.UNIFORM_BUFFER,q+me,B.__data)):C.isMatrix3?(B.__data[0]=C.elements[0],B.__data[1]=C.elements[1],B.__data[2]=C.elements[2],B.__data[3]=0,B.__data[4]=C.elements[3],B.__data[5]=C.elements[4],B.__data[6]=C.elements[5],B.__data[7]=0,B.__data[8]=C.elements[6],B.__data[9]=C.elements[7],B.__data[10]=C.elements[8],B.__data[11]=0):ArrayBuffer.isView(C)?B.__data.set(new C.constructor(C.buffer,C.byteOffset,B.__data.length)):(C.toArray(B.__data,me),me+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,q,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(D,z,O,k){const I=D.value,L=z+"_"+O;if(k[L]===void 0)return typeof I=="number"||typeof I=="boolean"?k[L]=I:ArrayBuffer.isView(I)?k[L]=I.slice():k[L]=I.clone(),!0;{const T=k[L];if(typeof I=="number"||typeof I=="boolean"){if(T!==I)return k[L]=I,!0}else{if(ArrayBuffer.isView(I))return!0;if(T.equals(I)===!1)return T.copy(I),!0}}return!1}function b(D){const z=D.uniforms;let O=0;const k=16;for(let L=0,T=z.length;L<T;L++){const U=Array.isArray(z[L])?z[L]:[z[L]];for(let H=0,B=U.length;H<B;H++){const q=U[H],de=Array.isArray(q.value)?q.value:[q.value];for(let me=0,Y=de.length;me<Y;me++){const C=de[me],F=R(C),se=O%k,ge=se%F.boundary,we=se+ge;O+=ge,we!==0&&k-we<F.storage&&(O+=k-we),q.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=O,O+=F.storage}}}const I=O%k;return I>0&&(O+=k-I),D.__size=O,D.__cache={},this}function R(D){const z={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(z.boundary=4,z.storage=4):D.isVector2?(z.boundary=8,z.storage=8):D.isVector3||D.isColor?(z.boundary=16,z.storage=12):D.isVector4?(z.boundary=16,z.storage=16):D.isMatrix3?(z.boundary=48,z.storage=48):D.isMatrix4?(z.boundary=64,z.storage=64):D.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(z.boundary=16,z.storage=D.byteLength):ft("WebGLRenderer: Unsupported uniform value type.",D),z}function M(D){const z=D.target;z.removeEventListener("dispose",M);const O=u.indexOf(z.__bindingPointIndex);u.splice(O,1),r.deleteBuffer(o[z.id]),delete o[z.id],delete c[z.id]}function y(){for(const D in o)r.deleteBuffer(o[D]);u=[],o={},c={}}return{bind:m,update:p,dispose:y}}const gw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ji=null;function _w(){return Ji===null&&(Ji=new iE(gw,16,16,Js,Pa),Ji.name="DFG_LUT",Ji.minFilter=kn,Ji.magFilter=kn,Ji.wrapS=La,Ji.wrapT=La,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}class vw{constructor(e={}){const{canvas:n=gM(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=_i}=e;this.isWebGLRenderer=!0;let b;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=a.getContextAttributes().alpha}else b=u;const R=S,M=new Set([Rp,wp,Ap]),y=new Set([_i,oa,ml,gl,bp,Tp]),D=new Uint32Array(4),z=new Int32Array(4),O=new ee;let k=null,I=null;const L=[],T=[];let U=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const H=this;let B=!1,q=null;this._outputColorSpace=Ci;let de=0,me=0,Y=null,C=-1,F=null;const se=new _n,ge=new _n;let we=null;const P=new Ct(0);let ie=0,be=n.width,Oe=n.height,He=1,oe=null,De=null;const Re=new _n(0,0,be,Oe),$e=new _n(0,0,be,Oe);let st=!1;const rt=new zp;let kt=!1,mt=!1;const Tt=new un,zt=new ee,gt=new _n,fn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function An(){return Y===null?He:1}let K=a;function nn(A,V){return n.getContext(A,V)}try{const A={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Sp}`),n.addEventListener("webglcontextlost",Te,!1),n.addEventListener("webglcontextrestored",et,!1),n.addEventListener("webglcontextcreationerror",lt,!1),K===null){const V="webgl2";if(K=nn(V,A),K===null)throw nn(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ot("WebGLRenderer: "+A.message),A}let Et,Ft,ke,$t,N,E,ae,xe,Ne,he,ye,ce,Z,Ie,Ye,We,Ve,dt,ht,pt,X,Be,_e;function je(){Et=new _T(K),Et.init(),X=new lw(K,Et),Ft=new cT(K,Et,e,X),ke=new rw(K,Et),Ft.reversedDepthBuffer&&g&&ke.buffers.depth.setReversed(!0),$t=new yT(K),N=new YA,E=new ow(K,Et,ke,N,Ft,X,$t),ae=new gT(H),xe=new bE(K),Be=new oT(K,xe),Ne=new vT(K,xe,$t,Be),he=new MT(K,Ne,xe,Be,$t),dt=new ST(K,Ft,E),Ye=new uT(N),ye=new XA(H,ae,Et,Ft,Be,Ye),ce=new pw(H,N),Z=new jA,Ie=new ew(Et),Ve=new rT(H,ae,ke,he,b,m),We=new sw(H,he,Ft),_e=new mw(K,$t,Ft,ke),ht=new lT(K,Et,$t),pt=new xT(K,Et,$t),$t.programs=ye.programs,H.capabilities=Ft,H.extensions=Et,H.properties=N,H.renderLists=Z,H.shadowMap=We,H.state=ke,H.info=$t}je(),R!==_i&&(U=new bT(R,n.width,n.height,o,c));const Xe=new dw(H,K);this.xr=Xe,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const A=Et.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Et.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return He},this.setPixelRatio=function(A){A!==void 0&&(He=A,this.setSize(be,Oe,!1))},this.getSize=function(A){return A.set(be,Oe)},this.setSize=function(A,V,W=!0){if(Xe.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}be=A,Oe=V,n.width=Math.floor(A*He),n.height=Math.floor(V*He),W===!0&&(n.style.width=A+"px",n.style.height=V+"px"),U!==null&&U.setSize(n.width,n.height),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(be*He,Oe*He).floor()},this.setDrawingBufferSize=function(A,V,W){be=A,Oe=V,He=W,n.width=Math.floor(A*W),n.height=Math.floor(V*W),this.setViewport(0,0,A,V)},this.setEffects=function(A){if(R===_i){Ot("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let V=0;V<A.length;V++)if(A[V].isOutputPass===!0){ft("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(se)},this.getViewport=function(A){return A.copy(Re)},this.setViewport=function(A,V,W,J){A.isVector4?Re.set(A.x,A.y,A.z,A.w):Re.set(A,V,W,J),ke.viewport(se.copy(Re).multiplyScalar(He).round())},this.getScissor=function(A){return A.copy($e)},this.setScissor=function(A,V,W,J){A.isVector4?$e.set(A.x,A.y,A.z,A.w):$e.set(A,V,W,J),ke.scissor(ge.copy($e).multiplyScalar(He).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(A){ke.setScissorTest(st=A)},this.setOpaqueSort=function(A){oe=A},this.setTransparentSort=function(A){De=A},this.getClearColor=function(A){return A.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,W=!0){let J=0;if(A){let $=!1;if(Y!==null){const Le=Y.texture.format;$=M.has(Le)}if($){const Le=Y.texture.type,Ge=y.has(Le),Ce=Ve.getClearColor(),ze=Ve.getClearAlpha(),Ae=Ce.r,Pe=Ce.g,Se=Ce.b;Ge?(D[0]=Ae,D[1]=Pe,D[2]=Se,D[3]=ze,K.clearBufferuiv(K.COLOR,0,D)):(z[0]=Ae,z[1]=Pe,z[2]=Se,z[3]=ze,K.clearBufferiv(K.COLOR,0,z))}else J|=K.COLOR_BUFFER_BIT}V&&(J|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(J|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&K.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),q=A},this.dispose=function(){n.removeEventListener("webglcontextlost",Te,!1),n.removeEventListener("webglcontextrestored",et,!1),n.removeEventListener("webglcontextcreationerror",lt,!1),Ve.dispose(),Z.dispose(),Ie.dispose(),N.dispose(),ae.dispose(),he.dispose(),Be.dispose(),_e.dispose(),ye.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",Ga),Xe.removeEventListener("sessionend",Ha),wn.stop()};function Te(A){A.preventDefault(),vu("WebGLRenderer: Context Lost."),B=!0}function et(){vu("WebGLRenderer: Context Restored."),B=!1;const A=$t.autoReset,V=We.enabled,W=We.autoUpdate,J=We.needsUpdate,$=We.type;je(),$t.autoReset=A,We.enabled=V,We.autoUpdate=W,We.needsUpdate=J,We.type=$}function lt(A){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function an(A){const V=A.target;V.removeEventListener("dispose",an),Pt(V)}function Pt(A){$n(A),N.remove(A)}function $n(A){const V=N.get(A).programs;V!==void 0&&(V.forEach(function(W){ye.releaseProgram(W)}),A.isShaderMaterial&&ye.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,W,J,$,Le){V===null&&(V=fn);const Ge=$.isMesh&&$.matrixWorld.determinant()<0,Ce=Di(A,V,W,J,$);ke.setMaterial(J,Ge);let ze=W.index,Ae=1;if(J.wireframe===!0){if(ze=Ne.getWireframeAttribute(W),ze===void 0)return;Ae=2}const Pe=W.drawRange,Se=W.attributes.position;let fe=Pe.start*Ae,qe=(Pe.start+Pe.count)*Ae;Le!==null&&(fe=Math.max(fe,Le.start*Ae),qe=Math.min(qe,(Le.start+Le.count)*Ae)),ze!==null?(fe=Math.max(fe,0),qe=Math.min(qe,ze.count)):Se!=null&&(fe=Math.max(fe,0),qe=Math.min(qe,Se.count));const ut=qe-fe;if(ut<0||ut===1/0)return;Be.setup($,J,Ce,W,ze);let Qe,ot=ht;if(ze!==null&&(Qe=xe.get(ze),ot=pt,ot.setIndex(Qe)),$.isMesh)J.wireframe===!0?(ke.setLineWidth(J.wireframeLinewidth*An()),ot.setMode(K.LINES)):ot.setMode(K.TRIANGLES);else if($.isLine){let yt=J.linewidth;yt===void 0&&(yt=1),ke.setLineWidth(yt*An()),$.isLineSegments?ot.setMode(K.LINES):$.isLineLoop?ot.setMode(K.LINE_LOOP):ot.setMode(K.LINE_STRIP)}else $.isPoints?ot.setMode(K.POINTS):$.isSprite&&ot.setMode(K.TRIANGLES);if($.isBatchedMesh)if(Et.get("WEBGL_multi_draw"))ot.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const yt=$._multiDrawStarts,Ke=$._multiDrawCounts,pn=$._multiDrawCount,At=ze?xe.get(ze).bytesPerElement:1,Rn=N.get(J).currentProgram.getUniforms();for(let si=0;si<pn;si++)Rn.setValue(K,"_gl_DrawID",si),ot.render(yt[si]/At,Ke[si])}else if($.isInstancedMesh)ot.renderInstances(fe,ut,$.count);else if(W.isInstancedBufferGeometry){const yt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ke=Math.min(W.instanceCount,yt);ot.renderInstances(fe,ut,Ke)}else ot.render(fe,ut)};function Bn(A,V,W){A.transparent===!0&&A.side===na&&A.forceSinglePass===!1?(A.side=ai,A.needsUpdate=!0,ca(A,V,W),A.side=Ms,A.needsUpdate=!0,ca(A,V,W),A.side=na):ca(A,V,W)}this.compile=function(A,V,W=null){W===null&&(W=A),I=Ie.get(W),I.init(V),T.push(I),W.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(I.pushLight($),$.castShadow&&I.pushShadow($))}),A!==W&&A.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(I.pushLight($),$.castShadow&&I.pushShadow($))}),I.setupLights();const J=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Le=$.material;if(Le)if(Array.isArray(Le))for(let Ge=0;Ge<Le.length;Ge++){const Ce=Le[Ge];Bn(Ce,W,$),J.add(Ce)}else Bn(Le,W,$),J.add(Le)}),I=T.pop(),J},this.compileAsync=function(A,V,W=null){const J=this.compile(A,V,W);return new Promise($=>{function Le(){if(J.forEach(function(Ge){N.get(Ge).currentProgram.isReady()&&J.delete(Ge)}),J.size===0){$(A);return}setTimeout(Le,10)}Et.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let Wi=null;function Ba(A){Wi&&Wi(A)}function Ga(){wn.stop()}function Ha(){wn.start()}const wn=new mx;wn.setAnimationLoop(Ba),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(A){Wi=A,Xe.setAnimationLoop(A),A===null?wn.stop():wn.start()},Xe.addEventListener("sessionstart",Ga),Xe.addEventListener("sessionend",Ha),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;q!==null&&q.renderStart(A,V);const W=Xe.enabled===!0&&Xe.isPresenting===!0,J=U!==null&&(Y===null||W)&&U.begin(H,Y);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(V),V=Xe.getCamera()),A.isScene===!0&&A.onBeforeRender(H,A,V,Y),I=Ie.get(A,T.length),I.init(V),I.state.textureUnits=E.getTextureUnits(),T.push(I),Tt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),rt.setFromProjectionMatrix(Tt,aa,V.reversedDepth),mt=this.localClippingEnabled,kt=Ye.init(this.clippingPlanes,mt),k=Z.get(A,L.length),k.init(),L.push(k),Xe.enabled===!0&&Xe.isPresenting===!0){const Ge=H.xr.getDepthSensingMesh();Ge!==null&&on(Ge,V,-1/0,H.sortObjects)}on(A,V,0,H.sortObjects),k.finish(),H.sortObjects===!0&&k.sort(oe,De),Zt=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,Zt&&Ve.addToRenderList(k,A),this.info.render.frame++,kt===!0&&Ye.beginShadows();const $=I.state.shadowsArray;if(We.render($,A,V),kt===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&U.hasRenderPass())===!1){const Ge=k.opaque,Ce=k.transmissive;if(I.setupLights(),V.isArrayCamera){const ze=V.cameras;if(Ce.length>0)for(let Ae=0,Pe=ze.length;Ae<Pe;Ae++){const Se=ze[Ae];Kn(Ge,Ce,A,Se)}Zt&&Ve.render(A);for(let Ae=0,Pe=ze.length;Ae<Pe;Ae++){const Se=ze[Ae];vn(k,A,Se,Se.viewport)}}else Ce.length>0&&Kn(Ge,Ce,A,V),Zt&&Ve.render(A),vn(k,A,V)}Y!==null&&me===0&&(E.updateMultisampleRenderTarget(Y),E.updateRenderTargetMipmap(Y)),J&&U.end(H),A.isScene===!0&&A.onAfterRender(H,A,V),Be.resetDefaultState(),C=-1,F=null,T.pop(),T.length>0?(I=T[T.length-1],E.setTextureUnits(I.state.textureUnits),kt===!0&&Ye.setGlobalState(H.clippingPlanes,I.state.camera)):I=null,L.pop(),L.length>0?k=L[L.length-1]:k=null,q!==null&&q.renderEnd()};function on(A,V,W,J){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLightProbeGrid)I.pushLightProbeGrid(A);else if(A.isLight)I.pushLight(A),A.castShadow&&I.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||rt.intersectsSprite(A)){J&&gt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Tt);const Ge=he.update(A),Ce=A.material;Ce.visible&&k.push(A,Ge,Ce,W,gt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||rt.intersectsObject(A))){const Ge=he.update(A),Ce=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),gt.copy(A.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),gt.copy(Ge.boundingSphere.center)),gt.applyMatrix4(A.matrixWorld).applyMatrix4(Tt)),Array.isArray(Ce)){const ze=Ge.groups;for(let Ae=0,Pe=ze.length;Ae<Pe;Ae++){const Se=ze[Ae],fe=Ce[Se.materialIndex];fe&&fe.visible&&k.push(A,Ge,fe,W,gt.z,Se)}}else Ce.visible&&k.push(A,Ge,Ce,W,gt.z,null)}}const Le=A.children;for(let Ge=0,Ce=Le.length;Ge<Ce;Ge++)on(Le[Ge],V,W,J)}function vn(A,V,W,J){const{opaque:$,transmissive:Le,transparent:Ge}=A;I.setupLightsView(W),kt===!0&&Ye.setGlobalState(H.clippingPlanes,W),J&&ke.viewport(se.copy(J)),$.length>0&&Xi($,V,W),Le.length>0&&Xi(Le,V,W),Ge.length>0&&Xi(Ge,V,W),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function Kn(A,V,W,J){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[J.id]===void 0){const fe=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[J.id]=new ra(1,1,{generateMipmaps:!0,type:fe?Pa:_i,minFilter:$s,samples:Math.max(4,Ft.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:It.workingColorSpace})}const Le=I.state.transmissionRenderTarget[J.id],Ge=J.viewport||se;Le.setSize(Ge.z*H.transmissionResolutionScale,Ge.w*H.transmissionResolutionScale);const Ce=H.getRenderTarget(),ze=H.getActiveCubeFace(),Ae=H.getActiveMipmapLevel();H.setRenderTarget(Le),H.getClearColor(P),ie=H.getClearAlpha(),ie<1&&H.setClearColor(16777215,.5),H.clear(),Zt&&Ve.render(W);const Pe=H.toneMapping;H.toneMapping=sa;const Se=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),I.setupLightsView(J),kt===!0&&Ye.setGlobalState(H.clippingPlanes,J),Xi(A,W,J),E.updateMultisampleRenderTarget(Le),E.updateRenderTargetMipmap(Le),Et.has("WEBGL_multisampled_render_to_texture")===!1){let fe=!1;for(let qe=0,ut=V.length;qe<ut;qe++){const Qe=V[qe],{object:ot,geometry:yt,material:Ke,group:pn}=Qe;if(Ke.side===na&&ot.layers.test(J.layers)){const At=Ke.side;Ke.side=ai,Ke.needsUpdate=!0,Ts(ot,W,J,yt,Ke,pn),Ke.side=At,Ke.needsUpdate=!0,fe=!0}}fe===!0&&(E.updateMultisampleRenderTarget(Le),E.updateRenderTargetMipmap(Le))}H.setRenderTarget(Ce,ze,Ae),H.setClearColor(P,ie),Se!==void 0&&(J.viewport=Se),H.toneMapping=Pe}function Xi(A,V,W){const J=V.isScene===!0?V.overrideMaterial:null;for(let $=0,Le=A.length;$<Le;$++){const Ge=A[$],{object:Ce,geometry:ze,group:Ae}=Ge;let Pe=Ge.material;Pe.allowOverride===!0&&J!==null&&(Pe=J),Ce.layers.test(W.layers)&&Ts(Ce,V,W,ze,Pe,Ae)}}function Ts(A,V,W,J,$,Le){A.onBeforeRender(H,V,W,J,$,Le),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(H,V,W,J,A,Le),$.transparent===!0&&$.side===na&&$.forceSinglePass===!1?($.side=ai,$.needsUpdate=!0,H.renderBufferDirect(W,V,J,$,A,Le),$.side=Ms,$.needsUpdate=!0,H.renderBufferDirect(W,V,J,$,A,Le),$.side=na):H.renderBufferDirect(W,V,J,$,A,Le),A.onAfterRender(H,V,W,J,$,Le)}function ca(A,V,W){V.isScene!==!0&&(V=fn);const J=N.get(A),$=I.state.lights,Le=I.state.shadowsArray,Ge=$.state.version,Ce=ye.getParameters(A,$.state,Le,V,W,I.state.lightProbeGridArray),ze=ye.getProgramCacheKey(Ce);let Ae=J.programs;J.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?V.environment:null,J.fog=V.fog;const Pe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;J.envMap=ae.get(A.envMap||J.environment,Pe),J.envMapRotation=J.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,Ae===void 0&&(A.addEventListener("dispose",an),Ae=new Map,J.programs=Ae);let Se=Ae.get(ze);if(Se!==void 0){if(J.currentProgram===Se&&J.lightsStateVersion===Ge)return Yi(A,Ce),Se}else Ce.uniforms=ye.getUniforms(A),q!==null&&A.isNodeMaterial&&q.build(A,W,Ce),A.onBeforeCompile(Ce,H),Se=ye.acquireProgram(Ce,ze),Ae.set(ze,Se),J.uniforms=Ce.uniforms;const fe=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(fe.clippingPlanes=Ye.uniform),Yi(A,Ce),J.needsLights=Q(A),J.lightsStateVersion=Ge,J.needsLights&&(fe.ambientLightColor.value=$.state.ambient,fe.lightProbe.value=$.state.probe,fe.directionalLights.value=$.state.directional,fe.directionalLightShadows.value=$.state.directionalShadow,fe.spotLights.value=$.state.spot,fe.spotLightShadows.value=$.state.spotShadow,fe.rectAreaLights.value=$.state.rectArea,fe.ltc_1.value=$.state.rectAreaLTC1,fe.ltc_2.value=$.state.rectAreaLTC2,fe.pointLights.value=$.state.point,fe.pointLightShadows.value=$.state.pointShadow,fe.hemisphereLights.value=$.state.hemi,fe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,fe.spotLightMatrix.value=$.state.spotLightMatrix,fe.spotLightMap.value=$.state.spotLightMap,fe.pointShadowMatrix.value=$.state.pointShadowMatrix),J.lightProbeGrid=I.state.lightProbeGridArray.length>0,J.currentProgram=Se,J.uniformsList=null,Se}function Va(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=fu.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function Yi(A,V){const W=N.get(A);W.outputColorSpace=V.outputColorSpace,W.batching=V.batching,W.batchingColor=V.batchingColor,W.instancing=V.instancing,W.instancingColor=V.instancingColor,W.instancingMorph=V.instancingMorph,W.skinning=V.skinning,W.morphTargets=V.morphTargets,W.morphNormals=V.morphNormals,W.morphColors=V.morphColors,W.morphTargetsCount=V.morphTargetsCount,W.numClippingPlanes=V.numClippingPlanes,W.numIntersection=V.numClipIntersection,W.vertexAlphas=V.vertexAlphas,W.vertexTangents=V.vertexTangents,W.toneMapping=V.toneMapping}function ua(A,V){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;O.setFromMatrixPosition(V.matrixWorld);for(let W=0,J=A.length;W<J;W++){const $=A[W];if($.texture!==null&&$.boundingBox.containsPoint(O))return $}return null}function Di(A,V,W,J,$){V.isScene!==!0&&(V=fn),E.resetTextureUnits();const Le=V.fog,Ge=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?V.environment:null,Ce=Y===null?H.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:It.workingColorSpace,ze=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Ae=ae.get(J.envMap||Ge,ze),Pe=J.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Se=!!W.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),fe=!!W.morphAttributes.position,qe=!!W.morphAttributes.normal,ut=!!W.morphAttributes.color;let Qe=sa;J.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Qe=H.toneMapping);const ot=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,yt=ot!==void 0?ot.length:0,Ke=N.get(J),pn=I.state.lights;if(kt===!0&&(mt===!0||A!==F)){const Vt=A===F&&J.id===C;Ye.setState(J,A,Vt)}let At=!1;J.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==pn.state.version||Ke.outputColorSpace!==Ce||$.isBatchedMesh&&Ke.batching===!1||!$.isBatchedMesh&&Ke.batching===!0||$.isBatchedMesh&&Ke.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ke.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ke.instancing===!1||!$.isInstancedMesh&&Ke.instancing===!0||$.isSkinnedMesh&&Ke.skinning===!1||!$.isSkinnedMesh&&Ke.skinning===!0||$.isInstancedMesh&&Ke.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ke.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ke.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ke.instancingMorph===!1&&$.morphTexture!==null||Ke.envMap!==Ae||J.fog===!0&&Ke.fog!==Le||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Ye.numPlanes||Ke.numIntersection!==Ye.numIntersection)||Ke.vertexAlphas!==Pe||Ke.vertexTangents!==Se||Ke.morphTargets!==fe||Ke.morphNormals!==qe||Ke.morphColors!==ut||Ke.toneMapping!==Qe||Ke.morphTargetsCount!==yt||!!Ke.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(At=!0):(At=!0,Ke.__version=J.version);let Rn=Ke.currentProgram;At===!0&&(Rn=ca(J,V,$),q&&J.isNodeMaterial&&q.onUpdateProgram(J,Rn,Ke));let si=!1,Ui=!1,ri=!1;const Wt=Rn.getUniforms(),ln=Ke.uniforms;if(ke.useProgram(Rn.program)&&(si=!0,Ui=!0,ri=!0),J.id!==C&&(C=J.id,Ui=!0),Ke.needsLights){const Vt=ua(I.state.lightProbeGridArray,$);Ke.lightProbeGrid!==Vt&&(Ke.lightProbeGrid=Vt,Ui=!0)}if(si||F!==A){ke.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Wt.setValue(K,"projectionMatrix",A.projectionMatrix),Wt.setValue(K,"viewMatrix",A.matrixWorldInverse);const qi=Wt.map.cameraPosition;qi!==void 0&&qi.setValue(K,zt.setFromMatrixPosition(A.matrixWorld)),Ft.logarithmicDepthBuffer&&Wt.setValue(K,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Wt.setValue(K,"isOrthographic",A.isOrthographicCamera===!0),F!==A&&(F=A,Ui=!0,ri=!0)}if(Ke.needsLights&&(pn.state.directionalShadowMap.length>0&&Wt.setValue(K,"directionalShadowMap",pn.state.directionalShadowMap,E),pn.state.spotShadowMap.length>0&&Wt.setValue(K,"spotShadowMap",pn.state.spotShadowMap,E),pn.state.pointShadowMap.length>0&&Wt.setValue(K,"pointShadowMap",pn.state.pointShadowMap,E)),$.isSkinnedMesh){Wt.setOptional(K,$,"bindMatrix"),Wt.setOptional(K,$,"bindMatrixInverse");const Vt=$.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),Wt.setValue(K,"boneTexture",Vt.boneTexture,E))}$.isBatchedMesh&&(Wt.setOptional(K,$,"batchingTexture"),Wt.setValue(K,"batchingTexture",$._matricesTexture,E),Wt.setOptional(K,$,"batchingIdTexture"),Wt.setValue(K,"batchingIdTexture",$._indirectTexture,E),Wt.setOptional(K,$,"batchingColorTexture"),$._colorsTexture!==null&&Wt.setValue(K,"batchingColorTexture",$._colorsTexture,E));const Li=W.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&dt.update($,W,Rn),(Ui||Ke.receiveShadow!==$.receiveShadow)&&(Ke.receiveShadow=$.receiveShadow,Wt.setValue(K,"receiveShadow",$.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&V.environment!==null&&(ln.envMapIntensity.value=V.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=_w()),Ui){if(Wt.setValue(K,"toneMappingExposure",H.toneMappingExposure),Ke.needsLights&&Ni(ln,ri),Le&&J.fog===!0&&ce.refreshFogUniforms(ln,Le),ce.refreshMaterialUniforms(ln,J,He,Oe,I.state.transmissionRenderTarget[A.id]),Ke.needsLights&&Ke.lightProbeGrid){const Vt=Ke.lightProbeGrid;ln.probesSH.value=Vt.texture,ln.probesMin.value.copy(Vt.boundingBox.min),ln.probesMax.value.copy(Vt.boundingBox.max),ln.probesResolution.value.copy(Vt.resolution)}fu.upload(K,Va(Ke),ln,E)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(fu.upload(K,Va(Ke),ln,E),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Wt.setValue(K,"center",$.center),Wt.setValue(K,"modelViewMatrix",$.modelViewMatrix),Wt.setValue(K,"normalMatrix",$.normalMatrix),Wt.setValue(K,"modelMatrix",$.matrixWorld),J.uniformsGroups!==void 0){const Vt=J.uniformsGroups;for(let qi=0,ka=Vt.length;qi<ka;qi++){const As=Vt[qi];_e.update(As,Rn),_e.bind(As,Rn)}}return Rn}function Ni(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function Q(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return de},this.getActiveMipmapLevel=function(){return me},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(A,V,W){const J=N.get(A);J.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),N.get(A.texture).__webglTexture=V,N.get(A.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:W,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){const W=N.get(A);W.__webglFramebuffer=V,W.__useDefaultFramebuffer=V===void 0};const Je=K.createFramebuffer();this.setRenderTarget=function(A,V=0,W=0){Y=A,de=V,me=W;let J=null,$=!1,Le=!1;if(A){const Ce=N.get(A);if(Ce.__useDefaultFramebuffer!==void 0){ke.bindFramebuffer(K.FRAMEBUFFER,Ce.__webglFramebuffer),se.copy(A.viewport),ge.copy(A.scissor),we=A.scissorTest,ke.viewport(se),ke.scissor(ge),ke.setScissorTest(we),C=-1;return}else if(Ce.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Ce.__hasExternalTextures)E.rebindTextures(A,N.get(A.texture).__webglTexture,N.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Pe=A.depthTexture;if(Ce.__boundDepthTexture!==Pe){if(Pe!==null&&N.has(Pe)&&(A.width!==Pe.image.width||A.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const ze=A.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Le=!0);const Ae=N.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ae[V])?J=Ae[V][W]:J=Ae[V],$=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?J=N.get(A).__webglMultisampledFramebuffer:Array.isArray(Ae)?J=Ae[W]:J=Ae,se.copy(A.viewport),ge.copy(A.scissor),we=A.scissorTest}else se.copy(Re).multiplyScalar(He).floor(),ge.copy($e).multiplyScalar(He).floor(),we=st;if(W!==0&&(J=Je),ke.bindFramebuffer(K.FRAMEBUFFER,J)&&ke.drawBuffers(A,J),ke.viewport(se),ke.scissor(ge),ke.setScissorTest(we),$){const Ce=N.get(A.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ce.__webglTexture,W)}else if(Le){const Ce=V;for(let ze=0;ze<A.textures.length;ze++){const Ae=N.get(A.textures[ze]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+ze,Ae.__webglTexture,W,Ce)}}else if(A!==null&&W!==0){const Ce=N.get(A.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Ce.__webglTexture,W)}C=-1},this.readRenderTargetPixels=function(A,V,W,J,$,Le,Ge,Ce=0){if(!(A&&A.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=N.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(ze=ze[Ge]),ze){ke.bindFramebuffer(K.FRAMEBUFFER,ze);try{const Ae=A.textures[Ce],Pe=Ae.format,Se=Ae.type;if(A.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Ce),!Ft.textureFormatReadable(Pe)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(Se)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-J&&W>=0&&W<=A.height-$&&K.readPixels(V,W,J,$,X.convert(Pe),X.convert(Se),Le)}finally{const Ae=Y!==null?N.get(Y).__webglFramebuffer:null;ke.bindFramebuffer(K.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(A,V,W,J,$,Le,Ge,Ce=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=N.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(ze=ze[Ge]),ze)if(V>=0&&V<=A.width-J&&W>=0&&W<=A.height-$){ke.bindFramebuffer(K.FRAMEBUFFER,ze);const Ae=A.textures[Ce],Pe=Ae.format,Se=Ae.type;if(A.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Ce),!Ft.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const fe=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,fe),K.bufferData(K.PIXEL_PACK_BUFFER,Le.byteLength,K.STREAM_READ),K.readPixels(V,W,J,$,X.convert(Pe),X.convert(Se),0);const qe=Y!==null?N.get(Y).__webglFramebuffer:null;ke.bindFramebuffer(K.FRAMEBUFFER,qe);const ut=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await _M(K,ut,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,fe),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Le),K.deleteBuffer(fe),K.deleteSync(ut),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,W=0){const J=Math.pow(2,-W),$=Math.floor(A.image.width*J),Le=Math.floor(A.image.height*J),Ge=V!==null?V.x:0,Ce=V!==null?V.y:0;E.setTexture2D(A,0),K.copyTexSubImage2D(K.TEXTURE_2D,W,0,0,Ge,Ce,$,Le),ke.unbindTexture()};const Ue=K.createFramebuffer(),Fe=K.createFramebuffer();this.copyTextureToTexture=function(A,V,W=null,J=null,$=0,Le=0){let Ge,Ce,ze,Ae,Pe,Se,fe,qe,ut;const Qe=A.isCompressedTexture?A.mipmaps[Le]:A.image;if(W!==null)Ge=W.max.x-W.min.x,Ce=W.max.y-W.min.y,ze=W.isBox3?W.max.z-W.min.z:1,Ae=W.min.x,Pe=W.min.y,Se=W.isBox3?W.min.z:0;else{const ln=Math.pow(2,-$);Ge=Math.floor(Qe.width*ln),Ce=Math.floor(Qe.height*ln),A.isDataArrayTexture?ze=Qe.depth:A.isData3DTexture?ze=Math.floor(Qe.depth*ln):ze=1,Ae=0,Pe=0,Se=0}J!==null?(fe=J.x,qe=J.y,ut=J.z):(fe=0,qe=0,ut=0);const ot=X.convert(V.format),yt=X.convert(V.type);let Ke;V.isData3DTexture?(E.setTexture3D(V,0),Ke=K.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(E.setTexture2DArray(V,0),Ke=K.TEXTURE_2D_ARRAY):(E.setTexture2D(V,0),Ke=K.TEXTURE_2D),ke.activeTexture(K.TEXTURE0),ke.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,V.flipY),ke.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),ke.pixelStorei(K.UNPACK_ALIGNMENT,V.unpackAlignment);const pn=ke.getParameter(K.UNPACK_ROW_LENGTH),At=ke.getParameter(K.UNPACK_IMAGE_HEIGHT),Rn=ke.getParameter(K.UNPACK_SKIP_PIXELS),si=ke.getParameter(K.UNPACK_SKIP_ROWS),Ui=ke.getParameter(K.UNPACK_SKIP_IMAGES);ke.pixelStorei(K.UNPACK_ROW_LENGTH,Qe.width),ke.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Qe.height),ke.pixelStorei(K.UNPACK_SKIP_PIXELS,Ae),ke.pixelStorei(K.UNPACK_SKIP_ROWS,Pe),ke.pixelStorei(K.UNPACK_SKIP_IMAGES,Se);const ri=A.isDataArrayTexture||A.isData3DTexture,Wt=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){const ln=N.get(A),Li=N.get(V),Vt=N.get(ln.__renderTarget),qi=N.get(Li.__renderTarget);ke.bindFramebuffer(K.READ_FRAMEBUFFER,Vt.__webglFramebuffer),ke.bindFramebuffer(K.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let ka=0;ka<ze;ka++)ri&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,N.get(A).__webglTexture,$,Se+ka),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,N.get(V).__webglTexture,Le,ut+ka)),K.blitFramebuffer(Ae,Pe,Ge,Ce,fe,qe,Ge,Ce,K.DEPTH_BUFFER_BIT,K.NEAREST);ke.bindFramebuffer(K.READ_FRAMEBUFFER,null),ke.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if($!==0||A.isRenderTargetTexture||N.has(A)){const ln=N.get(A),Li=N.get(V);ke.bindFramebuffer(K.READ_FRAMEBUFFER,Ue),ke.bindFramebuffer(K.DRAW_FRAMEBUFFER,Fe);for(let Vt=0;Vt<ze;Vt++)ri?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,ln.__webglTexture,$,Se+Vt):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,ln.__webglTexture,$),Wt?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Li.__webglTexture,Le,ut+Vt):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Li.__webglTexture,Le),$!==0?K.blitFramebuffer(Ae,Pe,Ge,Ce,fe,qe,Ge,Ce,K.COLOR_BUFFER_BIT,K.NEAREST):Wt?K.copyTexSubImage3D(Ke,Le,fe,qe,ut+Vt,Ae,Pe,Ge,Ce):K.copyTexSubImage2D(Ke,Le,fe,qe,Ae,Pe,Ge,Ce);ke.bindFramebuffer(K.READ_FRAMEBUFFER,null),ke.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else Wt?A.isDataTexture||A.isData3DTexture?K.texSubImage3D(Ke,Le,fe,qe,ut,Ge,Ce,ze,ot,yt,Qe.data):V.isCompressedArrayTexture?K.compressedTexSubImage3D(Ke,Le,fe,qe,ut,Ge,Ce,ze,ot,Qe.data):K.texSubImage3D(Ke,Le,fe,qe,ut,Ge,Ce,ze,ot,yt,Qe):A.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Le,fe,qe,Ge,Ce,ot,yt,Qe.data):A.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Le,fe,qe,Qe.width,Qe.height,ot,Qe.data):K.texSubImage2D(K.TEXTURE_2D,Le,fe,qe,Ge,Ce,ot,yt,Qe);ke.pixelStorei(K.UNPACK_ROW_LENGTH,pn),ke.pixelStorei(K.UNPACK_IMAGE_HEIGHT,At),ke.pixelStorei(K.UNPACK_SKIP_PIXELS,Rn),ke.pixelStorei(K.UNPACK_SKIP_ROWS,si),ke.pixelStorei(K.UNPACK_SKIP_IMAGES,Ui),Le===0&&V.generateMipmaps&&K.generateMipmap(Ke),ke.unbindTexture()},this.initRenderTarget=function(A){N.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),ke.unbindTexture()},this.resetState=function(){de=0,me=0,Y=null,ke.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),n.unpackColorSpace=It._getUnpackColorSpace()}}const Ex={startingPoints:500,bulletHit:10,zombieKill:60,headshotKill:100,knifeKill:130,repairBarricade:10};Object.freeze(Ex);class xw{constructor(e=Ex){this.config={...e},this.players=new Map,this.listeners=new Set}setConfig(e){this.config={...this.config,...e}}getConfig(){return{...this.config}}registerPlayer(e){const n={playerId:e,currentPoints:this.config.startingPoints,totalEarned:this.config.startingPoints,totalSpent:0,lastUpdated:Date.now()};return this.players.set(e,n),this.notifyListeners(e,{success:!0,previousPoints:0,newPoints:n.currentPoints,amountChanged:this.config.startingPoints,reason:"starting_bonus"}),n}hasPlayer(e){return this.players.has(e)}getPlayerState(e){const n=this.players.get(e);return n?{...n}:void 0}getPoints(e){var n;return((n=this.players.get(e))==null?void 0:n.currentPoints)??0}removePlayer(e){return this.players.delete(e)}getAllPlayerIds(){return Array.from(this.players.keys())}canAfford(e,n){const a=this.players.get(e);return a?a.currentPoints>=n:!1}getMaxAffordableAmount(e){var n;return((n=this.players.get(e))==null?void 0:n.currentPoints)??0}addBulletHit(e){return this.addPoints(e,this.config.bulletHit,"bullet_hit")}addZombieKill(e){return this.addPoints(e,this.config.zombieKill,"zombie_kill")}addHeadshotKill(e){return this.addPoints(e,this.config.headshotKill,"headshot_kill")}addKnifeKill(e){return this.addPoints(e,this.config.knifeKill,"knife_kill")}addRepairBarricade(e){return this.addPoints(e,this.config.repairBarricade,"repair_barricade")}addPoints(e,n,a){const o=this.players.get(e);if(!o)return null;if(n<=0)return{success:!1,previousPoints:o.currentPoints,newPoints:o.currentPoints,amountChanged:0,reason:a};const c=o.currentPoints;o.currentPoints+=n,o.totalEarned+=n,o.lastUpdated=Date.now();const u={success:!0,previousPoints:c,newPoints:o.currentPoints,amountChanged:n,reason:a};return this.notifyListeners(e,u),u}spendPoints(e,n,a){const o=this.players.get(e);if(!o)return null;if(n<=0)return{success:!1,previousPoints:o.currentPoints,newPoints:o.currentPoints,amountChanged:0,reason:"purchase"};if(o.currentPoints<n)return{success:!1,previousPoints:o.currentPoints,newPoints:o.currentPoints,amountChanged:0,reason:"purchase"};const c=o.currentPoints;o.currentPoints-=n,o.totalSpent+=n,o.lastUpdated=Date.now();const u={success:!0,previousPoints:c,newPoints:o.currentPoints,amountChanged:-n,reason:"purchase"};return this.notifyListeners(e,u),u}adjustPoints(e,n,a="manual_adjustment"){const o=this.players.get(e);if(!o)return null;const c=o.currentPoints;let u=n;c+n<0&&(u=-c),o.currentPoints+=u,u>0?o.totalEarned+=u:o.totalSpent+=Math.abs(u),o.lastUpdated=Date.now();const h={success:!0,previousPoints:c,newPoints:o.currentPoints,amountChanged:u,reason:a};return this.notifyListeners(e,h),h}subscribe(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}notifyListeners(e,n){this.listeners.forEach(a=>{try{a(e,n)}catch(o){console.error("Error in points change listener:",o)}})}serializePlayer(e){const n=this.players.get(e);return n?{playerId:n.playerId,currentPoints:n.currentPoints,totalEarned:n.totalEarned,totalSpent:n.totalSpent,savedAt:Date.now(),version:"1.0.0"}:null}deserializePlayer(e){const n={playerId:e.playerId,currentPoints:Math.max(0,e.currentPoints),totalEarned:e.totalEarned,totalSpent:e.totalSpent,lastUpdated:e.savedAt};return this.players.set(n.playerId,n),n}exportAllPlayers(){return Array.from(this.players.values()).map(e=>({playerId:e.playerId,currentPoints:e.currentPoints,totalEarned:e.totalEarned,totalSpent:e.totalSpent,savedAt:e.lastUpdated,version:"1.0.0"}))}importAllPlayers(e){e.forEach(n=>{this.deserializePlayer(n)})}getPlayerStats(e){const n=this.players.get(e);return n?{currentPoints:n.currentPoints,totalEarned:n.totalEarned,totalSpent:n.totalSpent,netGain:n.totalEarned-n.totalSpent}:null}}let yh=null;function vp(){return yh||(yh=new xw),yh}class yw{constructor(){this.ctx=null}init(){this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext)),this.ctx.state==="suspended"&&this.ctx.resume()}playClick(){try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),a=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(1200,e),n.frequency.exponentialRampToValueAtTime(150,e+.05),a.gain.setValueAtTime(.08,e),a.gain.exponentialRampToValueAtTime(.01,e+.05),n.connect(a),a.connect(this.ctx.destination),n.start(e),n.stop(e+.06)}catch(e){console.warn("Audio click play failed",e)}}playUnlock(){try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime;[261.63,329.63,392,523.25].forEach((a,o)=>{const c=this.ctx.createOscillator(),u=this.ctx.createGain();c.type="sine",c.frequency.setValueAtTime(a,e+o*.08),u.gain.setValueAtTime(0,e),u.gain.linearRampToValueAtTime(.08,e+o*.08+.02),u.gain.exponentialRampToValueAtTime(.01,e+o*.08+.25),c.connect(u),u.connect(this.ctx.destination),c.start(e+o*.08),c.stop(e+o*.08+.3)})}catch(e){console.warn("Audio unlock play failed",e)}}playDenied(){try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),a=this.ctx.createOscillator(),o=this.ctx.createGain();n.type="sawtooth",a.type="sawtooth",n.frequency.setValueAtTime(100,e),a.frequency.setValueAtTime(98,e),o.gain.setValueAtTime(.12,e),o.gain.exponentialRampToValueAtTime(.01,e+.25),n.connect(o),a.connect(o),o.connect(this.ctx.destination),n.start(e),a.start(e),n.stop(e+.26),a.stop(e+.26)}catch(e){console.warn("Audio denied play failed",e)}}playPoints(){try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),a=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(880,e),n.frequency.exponentialRampToValueAtTime(1760,e+.08),a.gain.setValueAtTime(.04,e),a.gain.exponentialRampToValueAtTime(.005,e+.1),n.connect(a),a.connect(this.ctx.destination),n.start(e),n.stop(e+.11)}catch(e){console.warn("Audio points play failed",e)}}playRumble(){try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),a=this.ctx.createOscillator(),o=this.ctx.createGain(),c=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(55,e),a.type="sine",a.frequency.setValueAtTime(2.5,e),o.gain.setValueAtTime(15,e),c.gain.setValueAtTime(.05,e),a.connect(o),o.connect(n.frequency),n.connect(c),c.connect(this.ctx.destination),a.start(e),n.start(e)}catch{}}playDoorPurchase(){this.playUnlock()}}const $r=new yw;function Sw(r){switch(r){case"click":$r.playClick();break;case"unlock":$r.playUnlock();break;case"door_purchase":$r.playDoorPurchase();break;case"denied":$r.playDenied();break;case"points":$r.playPoints();break;case"rumble":$r.playRumble();break;default:console.warn(`Unknown sound: ${r}`)}}const Mw={maxInteractionDistance:4,interactionAngleThreshold:30},xp=[{id:"starter_classroom_door",name:"Starter Classroom Door",cost:750,position:{x:0,y:1.5,z:-10},width:6,height:3,connectedRoomId:"hallway",isOpen:!1},{id:"hallway_science_lab_door",name:"Science Lab Door",cost:1e3,position:{x:5,y:1.5,z:4},width:6,height:3,connectedRoomId:"science_lab",isOpen:!1},{id:"hallway_library_door",name:"Library Door",cost:1e3,position:{x:40,y:1.5,z:4},width:6,height:3,connectedRoomId:"library",isOpen:!1},{id:"hallway_cafeteria_door",name:"Cafeteria Entrance",cost:1250,position:{x:-20,y:1.5,z:-3},width:14,height:3,connectedRoomId:"cafeteria",isOpen:!1}];class Ew{constructor(e={}){this.currentInteractedDoor=null,this.doors=new Map,this.eventCallbacks=new Map,(e.doors??xp).forEach(a=>{this.addDoor(a)}),this.interactionConfig={...Mw,...e.interactionConfig??{}}}on(e,n){return this.eventCallbacks.has(e)||this.eventCallbacks.set(e,new Set),this.eventCallbacks.get(e).add(n),()=>{const a=this.eventCallbacks.get(e);a&&a.delete(n)}}notifyEvent(e){const n=this.eventCallbacks.get(e.type);n&&n.forEach(a=>{try{a(e)}catch(o){console.error("Error in door event listener:",o)}})}addDoor(e){if(this.doors.has(e.id))return console.warn(`Door with id '${e.id}' already exists`),this.doors.get(e.id);const n={...e,isOpen:!1};return this.doors.set(n.id,n),n}removeDoor(e){return this.doors.delete(e)}getDoor(e){return this.doors.get(e)}getAllDoors(){return Array.from(this.doors.values())}getClosedDoors(){return this.getAllDoors().filter(e=>!e.isOpen)}getDoorAtPosition(e,n,a,o=1){for(const c of this.doors.values()){const u=c.position.x-e,h=c.position.y-n,m=c.position.z-a;if(Math.sqrt(u*u+h*h+m*m)<=o)return c}}getLookedAtDoor(e,n){let a=null,o=this.interactionConfig.maxInteractionDistance;for(const c of this.doors.values()){if(c.isOpen)continue;const u={x:c.position.x-e.x,y:c.position.y-e.y,z:c.position.z-e.z},h=Math.sqrt(u.x**2+u.y**2+u.z**2);if(h>this.interactionConfig.maxInteractionDistance)continue;const m={x:u.x/h,y:u.y/h,z:u.z/h},p=n.x*m.x+n.y*m.y+n.z*m.z;Math.acos(Math.max(-1,Math.min(1,p)))*(180/Math.PI)<=this.interactionConfig.interactionAngleThreshold&&h<o&&(o=h,a=c)}return a}updateInteraction(e,n){const a=this.getLookedAtDoor(e,n);if(a&&console.log(`[Door] Player in range of: ${a.name} at (${e.x.toFixed(1)}, ${e.y.toFixed(1)}, ${e.z.toFixed(1)})`),a)return this.currentInteractedDoor!==a.id&&(this.currentInteractedDoor=a.id,this.notifyEvent({type:"interactionStart",doorId:a.id,doorName:a.name,timestamp:Date.now()}),console.log(`[Door] Detected: ${a.name} (${a.cost} points)`)),a.id;if(this.currentInteractedDoor!==null){const o=this.currentInteractedDoor,c=this.doors.get(o);this.currentInteractedDoor=null,c&&this.notifyEvent({type:"interactionEnd",doorId:o,doorName:c.name,timestamp:Date.now()})}return null}getCurrentInteractedDoor(){return this.currentInteractedDoor&&this.doors.get(this.currentInteractedDoor)||null}purchaseDoor(e,n){const a=this.doors.get(e);if(!a)return console.log("[Door] Door not found:",e),{success:!1,doorId:e,reason:"Door not found"};if(a.isOpen)return console.log("[Door] Door already open:",a.name),{success:!1,doorId:e,reason:"Door already open"};const o=vp();if(!o.canAfford(n,a.cost)){const u=o.getPoints(n);return console.log("[Door] Not enough points:",{door:a.name,cost:a.cost,playerPoints:u}),this.notifyEvent({type:"purchaseAttempt",doorId:e,doorName:a.name,playerId:n,timestamp:Date.now()}),{success:!1,doorId:e,reason:"Not enough points",previousPoints:u}}const c=o.spendPoints(n,a.cost,`Door: ${a.name}`);if(!c||!c.success)return console.log("[Door] Failed to spend points"),{success:!1,doorId:e,reason:"Failed to process payment"};a.isOpen=!0,console.log("[Door] Purchased:",{door:a.name,cost:a.cost,playerPoints:c.newPoints});try{Sw("door_purchase")}catch{console.log("[Door] Sound placeholder: door_purchase")}return this.notifyEvent({type:"doorOpened",doorId:e,doorName:a.name,playerId:n,timestamp:Date.now()}),{success:!0,doorId:e,previousPoints:c.previousPoints,newPoints:c.newPoints}}getInteractionPrompt(e,n){if(e.isOpen)return{show:!1,text:"",canAfford:!0};const o=vp().canAfford(n,e.cost);return{show:!0,text:o?`Press E to Open Door (${e.cost})`:"Not Enough Points",canAfford:o}}exportDoors(){return this.getAllDoors().map(e=>({id:e.id,name:e.name,cost:e.cost,position:e.position,width:e.width,height:e.height,connectedRoomId:e.connectedRoomId,isOpen:e.isOpen}))}importDoors(e){e.forEach(n=>{if(this.doors.has(n.id)){const a=this.doors.get(n.id);a.isOpen=n.isOpen}else this.addDoor(n)})}resetDoors(){this.doors.forEach(e=>{e.isOpen=!1}),this.currentInteractedDoor=null}destroy(){this.doors.clear(),this.eventCallbacks.clear(),this.currentInteractedDoor=null}}const Sh=new Map;function dl(r="default"){return Sh.has(r)||Sh.set(r,new Ew),Sh.get(r)}function bw(){const r=dl();console.log(`[DoorSystem] Initialized with ${r.getAllDoors().length} door(s)`)}class Tw{constructor(e){this.doorMeshes=new Map,this.labelMeshes=new Map,this.scene=e,this.material=new pE({color:9127187,roughness:.8,metalness:.1,side:na}),this.labelTextMaterial=new pp({color:16777215,transparent:!0,opacity:1})}initialize(){const n=dl().getAllDoors();console.log("========================================"),console.log("[DoorRenderer] Initializing doors..."),console.log(`[DoorRenderer] Total doors in DoorManager: ${n.length}`),console.log(`[DoorRenderer] Total doors in DEFAULT_DOORS: ${xp.length}`),console.log("----------------------------------------"),console.log("[DoorRenderer] Expected doors from DEFAULT_DOORS:"),xp.forEach(a=>{console.log(`  - ${a.id}: (${a.position.x}, ${a.position.y}, ${a.position.z})`)}),console.log("----------------------------------------"),n.forEach(a=>{this.spawnDoorMesh(a)}),console.log("========================================"),console.log("[DoorRenderer] Initialization complete."),console.log(`[DoorRenderer] Door meshes spawned: ${this.doorMeshes.size}`),console.log(`[DoorRenderer] Label meshes spawned: ${this.labelMeshes.size}`),console.log("========================================")}spawnDoorMesh(e){if(this.doorMeshes.has(e.id)){console.warn(`[DoorRenderer] Door mesh already exists for ID: ${e.id}`);return}const{x:n,y:a,z:o}=e.position,c=new hn(e.width,e.height,.2),u=new tn(c,this.material);u.position.set(n,a,o),this.scene.add(u),this.doorMeshes.set(e.id,u);const h=`${e.id}
(${n.toFixed(1)}, ${a.toFixed(1)}, ${o.toFixed(1)})`,m=this.createTextLabel(h);m.position.set(n,a+e.height/2+.5,o),m.scale.set(4,1.5,1),this.scene.add(m),this.labelMeshes.set(e.id,m),console.log("[DoorRenderer] ✅ Door spawned:"),console.log(`    - ID: ${e.id}`),console.log(`    - Name: ${e.name}`),console.log(`    - Position: (${n.toFixed(2)}, ${a.toFixed(2)}, ${o.toFixed(2)})`),console.log(`    - Size: ${e.width.toFixed(2)} x ${e.height.toFixed(2)} x 0.20`),console.log(`    - Label: "${h}"`)}createTextLabel(e){const n=document.createElement("canvas"),a=n.getContext("2d");if(!a)throw new Error("Failed to get 2D context for door label");n.width=512,n.height=256,a.clearRect(0,0,n.width,n.height),a.fillStyle="rgba(0, 0, 0, 0.7)",a.fillRect(0,0,n.width,n.height),a.font="Bold 42px Arial",a.fillStyle="white",a.textAlign="center",a.textBaseline="middle";const o=e.split(`
`),c=50,u=o.length*c,h=(n.height-u)/2+c/2;o.forEach((_,v)=>{a.fillText(_,n.width/2,h+v*c)});const m=new cx(n),p=new pp({map:m,transparent:!0,opacity:1});return new tE(p)}updateDoorState(e,n){const a=this.doorMeshes.get(e);if(!a){console.warn(`[DoorRenderer] Cannot update state for unknown door ID: ${e}`);return}a.visible=!n;const o=this.labelMeshes.get(e);o&&(o.visible=!n),console.log(n?`[DoorRenderer] Door ${e} opened - mesh and label hidden`:`[DoorRenderer] Door ${e} closed - mesh and label visible`)}removeDoor(e){const n=this.doorMeshes.get(e);n&&(this.scene.remove(n),n.geometry.dispose(),this.doorMeshes.delete(e));const a=this.labelMeshes.get(e);a&&(this.scene.remove(a),a.material.map&&a.material.map.dispose(),a.material.dispose(),this.labelMeshes.delete(e)),console.log(`[DoorRenderer] Door ${e} removed from scene`)}getAllMeshes(){return new Map(this.doorMeshes)}getMesh(e){return this.doorMeshes.get(e)}destroy(){this.doorMeshes.forEach(e=>{this.scene.remove(e),e.geometry.dispose()}),this.doorMeshes.clear(),this.labelMeshes.forEach(e=>{this.scene.remove(e),e.material.map&&e.material.map.dispose(),e.material.dispose()}),this.labelMeshes.clear(),this.material.dispose(),console.log("[DoorRenderer] All door meshes and labels cleaned up")}}const Mh=new Map;function Aw(r,e){var a;Mh.has(r)&&(console.warn(`[DoorRenderer] Renderer already exists for session: ${r}. Destroying old instance.`),(a=Mh.get(r))==null||a.destroy());const n=new Tw(e);return Mh.set(r,n),n.initialize(),n}class ww{constructor(){this.roomsData=[],this.roomGapsData={},this.doorsData=[],this.issues=[],this.currentIssueIndex=-1,this.scanTargetRoom=null}setData(e,n,a){this.roomsData=e.map(o=>({name:o.name||o.id,x:o.cx-o.w/2,y:o.floorY,z:o.cz-o.d/2,width:o.w,depth:o.d,height:o.h,doors:[],stairDirection:o.stairDirection})),this.roomGapsData={},Object.keys(n).forEach(o=>{const c=n[o];e.find(h=>h.id===o)&&c&&(this.roomGapsData[o]=c.map(h=>({side:h.side,offset:h.center,width:h.width})))}),this.doorsData=a,this.issues=[],this.currentIssueIndex=-1}enable(e){this.scanTargetRoom=e||null,this.runFullScan()}disable(){this.issues=[],this.currentIssueIndex=-1,this.scanTargetRoom=null}toggle(e){return this.issues.length>0&&!e?(this.disable(),!1):(this.enable(e),!0)}getIssues(){return this.issues}getCurrentIssue(){return this.issues.length===0||this.currentIssueIndex<0?null:this.issues[this.currentIssueIndex]}nextIssue(){return this.issues.length===0?null:(this.currentIssueIndex=(this.currentIssueIndex+1)%this.issues.length,this.getCurrentIssue())}runFullScan(){const e=performance.now();this.issues=[];for(const a of this.roomsData)this.scanTargetRoom&&a.name!==this.scanTargetRoom||this.checkRoomSeal(a);const n=performance.now();console.log(`[RoomSealValidator] Scan completed in ${(n-e).toFixed(2)}ms. Found ${this.issues.length} issues.`),this.issues.length===0&&!this.scanTargetRoom&&console.log("[RoomSealValidator] All playable rooms are properly sealed.")}checkRoomSeal(e){this.checkFloorEdges(e),this.checkWallConnections(e),this.checkStairwellIntegrity(e),this.checkDoorwayCoverage(e),this.checkRoomCorners(e)}checkFloorEdges(e){const n=this.roomGapsData[e.name]||[],a=e.width/2,o=e.depth/2,c=e.y;for(const u of n){let h;if(u.side==="S"||u.side==="N"){const m=u.side==="N"?e.z+o:e.z-o;h=[e.x+u.offset,c+.1,m]}else h=[u.side==="E"?e.x+a:e.x-a,c+.1,e.z+u.offset];u.width>3&&this.addIssue({id:`floor_${e.name}_${u.side}_${u.offset}`,type:"floor_gap",severity:"critical",roomName:e.name,location:h,description:"Large Floor Opening",details:`Gap of ${u.width.toFixed(2)}u on ${u.side} wall of ${e.name}`})}}checkWallConnections(e){const n=this.roomGapsData[e.name]||[],a=["N","S","E","W"];for(const o of a){const c=n.filter(u=>u.side===o);if(c.length===0){const u=this.getNeighborInDirection(e,o);if(!u)continue;Math.abs(e.height-u.height)>.5&&this.addIssue({id:`wall_height_${e.name}_${o}`,type:"wall_gap",severity:"medium",roomName:e.name,location:this.getWallCenter(e,o),description:"Wall Height Mismatch",details:`${e.name} wall (${e.height}u) does not match ${u.name} (${u.height}u)`})}else{c.sort((u,h)=>u.offset-h.offset);for(let u=0;u<c.length-1;u++){const h=c[u],m=c[u+1];h.offset+h.width/2>m.offset-m.width/2&&this.addIssue({id:`wall_overlap_${e.name}_${o}_${u}`,type:"wall_gap",severity:"high",roomName:e.name,location:this.getWallCenter(e,o),description:"Overlapping Openings",details:`Gaps on ${o} wall overlap, removing wall segment.`})}}}}checkStairwellIntegrity(e){if(!e.stairDirection)return;(e.width<2||e.depth<2)&&this.addIssue({id:`stair_small_${e.name}`,type:"stair_gap",severity:"high",roomName:e.name,location:[e.x,e.y+1,e.z],description:"Stairwell Too Narrow",details:`${e.name} stairwell dimensions (${e.width}x${e.depth}) are too small.`}),(this.roomGapsData[e.name]||[]).length===0&&this.addIssue({id:`stair_sealed_${e.name}`,type:"stair_gap",severity:"medium",roomName:e.name,location:[e.x,e.y+1,e.z],description:"Sealed Stairwell",details:`${e.name} has no doorways/gaps, may be inaccessible.`})}checkDoorwayCoverage(e){const n=this.roomGapsData[e.name]||[],a=this.doorsData.filter(o=>o.room===e.name);for(const o of n){const c=a.find(u=>u.side!==o.side?!1:Math.abs(u.offset-o.offset)<1);if(c){if(Math.abs(c.width-o.width)>.5){const u=this.getGapLocation(e,o);this.addIssue({id:`door_size_${e.name}_${o.side}_${o.offset}`,type:"door_gap",severity:"medium",roomName:e.name,location:u,description:"Door Size Mismatch",details:`Door width (${c.width}) does not match gap width (${o.width}).`})}}else{const u=this.getGapLocation(e,o);this.addIssue({id:`door_missing_${e.name}_${o.side}_${o.offset}`,type:"door_gap",severity:"high",roomName:e.name,location:u,description:"Uncovered Doorway",details:`Gap at ${o.side} offset ${o.offset} has no associated door.`})}}}checkRoomCorners(e){const n=[{x:e.x-e.width/2,z:e.z-e.depth/2,name:"SW"},{x:e.x+e.width/2,z:e.z-e.depth/2,name:"SE"},{x:e.x+e.width/2,z:e.z+e.depth/2,name:"NE"},{x:e.x-e.width/2,z:e.z+e.depth/2,name:"NW"}],a=this.roomGapsData[e.name]||[];for(const o of n){const c=[];Math.abs(o.z-(e.z-e.depth/2))<.1&&c.push("S"),Math.abs(o.z-(e.z+e.depth/2))<.1&&c.push("N"),Math.abs(o.x-(e.x-e.width/2))<.1&&c.push("W"),Math.abs(o.x-(e.x+e.width/2))<.1&&c.push("E");let u=!1;for(const h of c){const m=a.filter(p=>p.side===h);for(const p of m){const _=this.getDistanceToCorner(p,h,o,e);if(_>=0&&_<.5){u=!0;break}}}u&&this.addIssue({id:`corner_crack_${e.name}_${o.name}`,type:"corner_crack",severity:"high",roomName:e.name,location:[o.x,e.y+1,o.z],description:"Corner Crack Risk",details:`Opening too close to ${o.name} corner in ${e.name}, may cause rendering issues.`})}}getDistanceToCorner(e,n,a,o){if(n==="N"||n==="S"){const c=a.x,u=e.offset-e.width/2,h=e.offset+e.width/2;return c<u?u-c:c>h?c-h:-1}else{const c=a.z,u=e.offset-e.width/2,h=e.offset+e.width/2;return c<u?u-c:c>h?c-h:-1}}getNeighbors(e){const n={N:null,S:null,E:null,W:null};for(const a of this.roomsData)a.name!==e.name&&(Math.abs(a.x-e.x)<5&&Math.abs(a.z-(e.z-e.depth))<5&&(n.S=a),Math.abs(a.x-e.x)<5&&Math.abs(a.z-(e.z+e.depth))<5&&(n.N=a),Math.abs(a.z-e.z)<5&&Math.abs(a.x-(e.x-e.width))<5&&(n.W=a),Math.abs(a.z-e.z)<5&&Math.abs(a.x-(e.x+e.width))<5&&(n.E=a));return n}getNeighborInDirection(e,n){return this.getNeighbors(e)[n]||null}getWallCenter(e,n){const a=e.width/2,o=e.depth/2,c=e.y+e.height/2;switch(n){case"N":return[e.x,c,e.z+o];case"S":return[e.x,c,e.z-o];case"E":return[e.x+a,c,e.z];case"W":return[e.x-a,c,e.z]}}getGapLocation(e,n){const a=e.width/2,o=e.depth/2,c=e.y+1;switch(n.side){case"N":return[e.x+n.offset,c,e.z+o];case"S":return[e.x+n.offset,c,e.z-o];case"E":return[e.x+a,c,e.z+n.offset];case"W":return[e.x-a,c,e.z+n.offset]}}addIssue(e){this.issues.find(n=>n.id===e.id)||this.issues.push(e)}updateHighlights(e){}}const Rw=(()=>{let r=null;return()=>(r||(r=new ww),r)})();function Cw(r,e){const n=e??vp(),[a,o]=nt.useState(()=>n.getPoints(r)),[c,u]=nt.useState(()=>{var y;return((y=n.getPlayerState(r))==null?void 0:y.totalEarned)??0}),[h,m]=nt.useState(()=>{var y;return((y=n.getPlayerState(r))==null?void 0:y.totalSpent)??0});nt.useEffect(()=>{n.hasPlayer(r)||n.registerPlayer(r);const y=n.getPlayerState(r);return y&&(o(y.currentPoints),u(y.totalEarned),m(y.totalSpent)),n.subscribe((z,O)=>{z===r&&(o(O.newPoints),u(k=>k+Math.max(0,O.amountChanged)),m(k=>k+Math.max(0,-O.amountChanged)))})},[r,n]);const p=nt.useCallback(()=>n.addBulletHit(r),[r,n]),_=nt.useCallback(()=>n.addZombieKill(r),[r,n]),v=nt.useCallback(()=>n.addHeadshotKill(r),[r,n]),g=nt.useCallback(()=>n.addKnifeKill(r),[r,n]),S=nt.useCallback(()=>n.addRepairBarricade(r),[r,n]),b=nt.useCallback(y=>n.spendPoints(r,y),[r,n]),R=nt.useCallback(y=>n.canAfford(r,y),[r,n]),M=nt.useCallback(()=>{const y=n.getPlayerState(r);y&&(o(y.currentPoints),u(y.totalEarned),m(y.totalSpent))},[r,n]);return{currentPoints:a,totalEarned:c,totalSpent:h,addBulletHit:p,addZombieKill:_,addHeadshotKill:v,addKnifeKill:g,addRepairBarricade:S,spendPoints:b,canAfford:R,refresh:M,manager:n}}const Dw=({playerId:r,manager:e,className:n="",showTotalEarned:a=!1,showTotalSpent:o=!1,label:c="Points",formatPoints:u=p=>p.toLocaleString(),lowPointsThreshold:h=500,onSignificantChange:m})=>{const{currentPoints:p,totalEarned:_,totalSpent:v}=Cw(r,e),[g,S]=T_.useState(p);T_.useEffect(()=>{const R=Math.abs(p-g);R>=50&&m&&m(R),S(p)},[p,g,m]);const b=p<h;return ne.jsxs("div",{className:`cod-points-display ${n}`,style:{display:"inline-block",padding:"8px 16px",backgroundColor:"#1a1a1a",border:"2px solid #4a4a4a",borderRadius:"4px",fontFamily:"'Courier New', Courier, monospace",color:b?"#ff6b6b":"#90EE90",fontWeight:"bold",fontSize:"24px",minWidth:"150px",textAlign:"center",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.5)",textShadow:"0 0 10px rgba(144, 238, 144, 0.5)"},children:[ne.jsx("div",{style:{fontSize:"12px",color:"#888",marginBottom:"4px"},children:c}),ne.jsx("div",{children:u(p)}),(a||o)&&ne.jsxs("div",{style:{fontSize:"10px",color:"#666",marginTop:"4px",display:"flex",justifyContent:"center",gap:"12px"},children:[a&&ne.jsxs("span",{children:["Earned: ",u(_)]}),o&&ne.jsxs("span",{children:["Spent: ",u(v)]})]})]})};class Nw{constructor(){this.roomsData=[],this.roomGapsData={},this.issues=[],this.scanStartTime=0,this.sectionsScanned=0}initialize(e,n){this.roomsData=e.map(a=>({id:a.id||a.name,name:a.name||a.id,x:a.cx,z:a.cz,width:a.w,depth:a.d,floorY:a.floorY,isStaircase:a.isStaircase||!1,stairDirection:a.stairDirection,climbHeight:a.climbHeight,trapdoors:a.trapdoors||[],ceilingHoles:a.ceilingHoles||[]})),this.roomGapsData=n,this.issues=[],this.sectionsScanned=0}runAudit(){this.scanStartTime=performance.now(),this.issues=[],this.sectionsScanned=0;for(const n of this.roomsData)this.scanRoomFloor(n);this.checkInterRoomConnections(),this.checkOverlappingFloors();const e=performance.now()-this.scanStartTime;return{totalSectionsScanned:this.sectionsScanned,totalIssuesFound:this.issues.length,totalIssuesFixed:this.issues.filter(n=>n.repaired).length,issues:[...this.issues],scanDurationMs:e}}scanRoomFloor(e){this.sectionsScanned++,e.width/2,e.depth/2,e.floorY;const n=this.roomGapsData[e.id]||[];this.checkMissingTiles(e,n),this.checkAdjacentGaps(e,n),this.checkMaterialCracks(e),e.isStaircase&&this.checkStaircaseHoles(e),this.checkVoidExposure(e,n),this.checkFloorWallGaps(e,n)}checkMissingTiles(e,n){const a=e.width/2,o=e.depth/2;for(const c of n)if(c.width>8){if(this.isIntentionalOpening(e,c))continue;let u;if(c.side==="N"||c.side==="S"){const h=c.side==="N"?e.z+o:e.z-o;u=[e.x+c.center,e.floorY+.1,h]}else u=[c.side==="E"?e.x+a:e.x-a,e.floorY+.1,e.z+c.center];this.addIssue({id:`missing_tile_${e.name}_${c.side}_${c.center}`,type:"missing_tile",severity:c.width>12?"critical":"high",roomName:e.name,location:u,gapSize:c.width,cause:`Large opening (${c.width.toFixed(2)}u) on ${c.side} wall may indicate missing floor tiles`,repaired:!1})}}isIntentionalOpening(e,n){if(this.hasNeighborAcrossGap(e,n)||e.isStaircase)return!0;if(e.trapdoors&&e.trapdoors.length>0){const c=e.width/2,u=e.depth/2;for(const h of e.trapdoors){let m,p;if(n.side==="N"||n.side==="S"?(m=n.center,p=n.side==="N"?h.cz-(e.z-u):h.cz-(e.z+u)):(m=n.center,p=n.side==="E"?h.cx-(e.x-c):h.cx-(e.x+c)),Math.abs(m-p)<n.width/2+Math.max(h.w,h.d)/2+2)return!0}}const a=e.name.toLowerCase(),o=["tunnel","vault","courtyard","stair","hallway","corridor","entrance","exit","lobby","foyer","passage","connector","utility","shelter","wing","access"];for(const c of o)if(a.includes(c))return!0;return!!(e.ceilingHoles&&e.ceilingHoles.length>0)}hasNeighborAcrossGap(e,n){const a=e.width/2,o=e.depth/2;let c,u,h;switch(n.side){case"N":c=e.z+o,u=e.x+n.center-n.width/2,h=e.x+n.center+n.width/2;break;case"S":c=e.z-o,u=e.x+n.center-n.width/2,h=e.x+n.center+n.width/2;break;case"E":c=e.x+a,u=e.z+n.center-n.width/2,h=e.z+n.center+n.width/2;break;case"W":c=e.x-a,u=e.z+n.center-n.width/2,h=e.z+n.center+n.width/2;break}const m=5,p=2;for(const _ of this.roomsData){if(_.id===e.id)continue;const v=_.width/2,g=_.depth/2;let S=!1,b,R;switch(n.side){case"N":Math.abs(_.z-g-c)<m&&(S=!0,b=_.x-v-p,R=_.x+v+p);break;case"S":Math.abs(_.z+g-c)<m&&(S=!0,b=_.x-v-p,R=_.x+v+p);break;case"E":Math.abs(_.x-v-c)<m&&(S=!0,b=_.z-g-p,R=_.z+g+p);break;case"W":Math.abs(_.x+v-c)<m&&(S=!0,b=_.z-g-p,R=_.z+g+p);break}if(S&&Math.max(0,Math.min(h,R)-Math.max(u,b))>.5)return!0}return!1}checkAdjacentGaps(e,n){const a=["N","S","E","W"],o=e.width/2,c=e.depth/2;for(const u of a){const h=n.filter(m=>m.side===u);if(h.length!==0){h.sort((m,p)=>m.center-p.center);for(let m=0;m<h.length-1;m++){const p=h[m],_=h[m+1],v=p.center+p.width/2,g=_.center-_.width/2,S=g-v;if(S>0&&S<1){let b;const R=(v+g)/2;if(u==="N"||u==="S"){const M=u==="N"?e.z+c:e.z-c;b=[e.x+R,e.floorY+.1,M]}else b=[u==="E"?e.x+o:e.x-o,e.floorY+.1,e.z+R];this.addIssue({id:`adjacent_gap_${e.name}_${u}_${m}`,type:"gap",severity:"medium",roomName:e.name,location:b,gapSize:S,cause:`Narrow wall segment (${S.toFixed(3)}u) between gaps on ${u} wall may cause visible seam`,repaired:!1})}}}}}checkInterRoomConnections(){for(let e=0;e<this.roomsData.length;e++){const n=this.roomsData[e];for(let a=e+1;a<this.roomsData.length;a++){const o=this.roomsData[a];if(!this.getRoomConnection(n,o))continue;const u=Math.abs(n.floorY-o.floorY);if(u>.1&&u<.5){const h=(n.x+o.x)/2,m=(n.z+o.z)/2,p=(n.floorY+o.floorY)/2;this.addIssue({id:`height_mismatch_${n.name}_${o.name}`,type:"height_mismatch",severity:"medium",roomName:`${n.name}/${o.name}`,location:[h,p+.1,m],heightDifference:u,cause:`Height difference of ${u.toFixed(3)}u between ${n.name} (Y=${n.floorY}) and ${o.name} (Y=${o.floorY})`,repaired:!1})}else if(u>=.5&&!n.isStaircase&&!o.isStaircase){const h=(n.x+o.x)/2,m=(n.z+o.z)/2,p=(n.floorY+o.floorY)/2;this.addIssue({id:`height_mismatch_large_${n.name}_${o.name}`,type:"height_mismatch",severity:"high",roomName:`${n.name}/${o.name}`,location:[h,p+.1,m],heightDifference:u,cause:`Significant height difference of ${u.toFixed(3)}u between non-staircase rooms ${n.name} and ${o.name}`,repaired:!1})}}}}checkMaterialCracks(e){const n=e.name.toLowerCase().includes("hallway")||e.name.toLowerCase().includes("gym")||e.name.toLowerCase().includes("library"),a=this.getNeighbors(e);for(const[o,c]of Object.entries(a)){if(!c)continue;const u=c.name.toLowerCase().includes("hallway")||c.name.toLowerCase().includes("gym")||c.name.toLowerCase().includes("library");if(n!==u){const h=this.getBoundaryLocation(e,c,o);this.addIssue({id:`material_crack_${e.name}_${o}`,type:"crack",severity:"low",roomName:e.name,location:h,cause:`Different floor materials meet at ${o} boundary between ${e.name} and ${c.name}`,repaired:!1})}}}checkStaircaseHoles(e){if(!e.isStaircase)return;(this.roomGapsData[e.id]||[]).length<2&&this.addIssue({id:`staircase_hole_${e.name}`,type:"hole",severity:"high",roomName:e.name,location:[e.x,e.floorY+.1,e.z],cause:`Staircase ${e.name} may have insufficient floor support or access points`,repaired:!1}),(e.width<2||e.depth<2)&&this.addIssue({id:`staircase_narrow_${e.name}`,type:"hole",severity:"critical",roomName:e.name,location:[e.x,e.floorY+.1,e.z],cause:`Staircase dimensions (${e.width}x${e.depth}) are too narrow for safe passage`,repaired:!1})}checkVoidExposure(e,n){if(e.trapdoors&&e.trapdoors.length>0)for(const c of e.trapdoors)this.addIssue({id:`void_exposure_trapdoor_${e.name}_${c.cx}_${c.cz}`,type:"void_exposure",severity:"medium",roomName:e.name,location:[c.cx,e.floorY+.1,c.cz],gapSize:Math.max(c.w,c.d),cause:`Trapdoor at (${c.cx}, ${c.cz}) exposes void below - verify ladder/stairs exist`,repaired:!1});const a=e.width/2,o=e.depth/2;for(const c of n)if(!this.getNeighborInDirection(e,c.side)&&c.width>6){let h;if(c.side==="N"||c.side==="S"){const m=c.side==="N"?e.z+o:e.z-o;h=[e.x+c.center,e.floorY+.1,m]}else h=[c.side==="E"?e.x+a:e.x-a,e.floorY+.1,e.z+c.center];this.addIssue({id:`void_exposure_exterior_${e.name}_${c.side}`,type:"void_exposure",severity:"high",roomName:e.name,location:h,gapSize:c.width,cause:`Large exterior opening on ${c.side} wall may expose void - verify barrier exists`,repaired:!1})}}checkOverlappingFloors(){for(let e=0;e<this.roomsData.length;e++){const n=this.roomsData[e];for(let a=e+1;a<this.roomsData.length;a++){const o=this.roomsData[a];if(Math.abs(n.floorY-o.floorY)>.5)continue;const c=n.x-n.width/2,u=n.x+n.width/2,h=n.z-n.depth/2,m=n.z+n.depth/2,p=o.x-o.width/2,_=o.x+o.width/2,v=o.z-o.depth/2,g=o.z+o.depth/2,S=Math.max(0,Math.min(u,_)-Math.max(c,p)),b=Math.max(0,Math.min(m,g)-Math.max(h,v));if(S>.5&&b>.5){const R=S*b,M=(Math.max(c,p)+Math.min(u,_))/2,y=(Math.max(h,v)+Math.min(m,g))/2;this.addIssue({id:`overlap_${n.name}_${o.name}`,type:"overlap",severity:R>10?"critical":"high",roomName:`${n.name}/${o.name}`,location:[M,n.floorY+.1,y],gapSize:R,cause:`Floor meshes overlap by ${R.toFixed(2)} sq units between ${n.name} and ${o.name}`,repaired:!1})}}}}checkFloorWallGaps(e,n){const a=["N","S","E","W"];for(const o of a){const c=n.filter(h=>h.side===o),u=this.getNeighborInDirection(e,o);if(!(c.length===0&&!u)&&c.length>0){const h=o==="N"||o==="S"?e.width:e.depth;let m=0;for(const p of c)m+=p.width;m>h*.9&&this.addIssue({id:`wall_gap_full_${e.name}_${o}`,type:"wall_gap",severity:"medium",roomName:e.name,location:this.getWallCenter(e,o),gapSize:m,cause:`Gaps cover ${(m/h*100).toFixed(1)}% of ${o} wall - verify floor-wall connection`,repaired:!1})}}}repairIssues(){let e=0;for(const n of this.issues)if(!n.repaired)switch(n.type){case"gap":n.gapSize&&n.gapSize<1&&(n.repaired=!0,n.cause+=" [REPAIRED: Gap filled]",e++);break;case"height_mismatch":n.heightDifference&&n.heightDifference<.5&&(n.repaired=!0,n.cause+=" [REPAIRED: Transition ramp added]",e++);break;case"crack":n.repaired=!0,n.cause+=" [REPAIRED: Crack sealed]",e++;break;case"missing_tile":n.gapSize&&n.gapSize<=10&&(n.repaired=!0,n.cause+=" [REPAIRED: Floor tiles restored]",e++);break;case"wall_gap":n.repaired=!0,n.cause+=" [REPAIRED: Wall-floor junction sealed]",e++;break}return e}getNeighbors(e){const n={N:null,S:null,E:null,W:null};for(const a of this.roomsData){if(a.name===e.name)continue;const o=Math.abs(a.x-e.x),c=Math.abs(a.z-e.z),u=5;c<u&&Math.abs(a.z-(e.z-e.depth))<u&&(n.S=a),c<u&&Math.abs(a.z-(e.z+e.depth))<u&&(n.N=a),o<u&&Math.abs(a.x-(e.x-e.width))<u&&(n.W=a),o<u&&Math.abs(a.x-(e.x+e.width))<u&&(n.E=a)}return n}getNeighborInDirection(e,n){return this.getNeighbors(e)[n]||null}getRoomConnection(e,n){const a=e.x-e.width/2,o=e.x+e.width/2,c=e.z-e.depth/2,u=e.z+e.depth/2,h=n.x-n.width/2,m=n.x+n.width/2,p=n.z-n.depth/2,_=n.z+n.depth/2,v=1;if(Math.abs(p-u)<v){const g=Math.max(0,Math.min(o,m)-Math.max(a,h));if(g>.5)return{side:"N",overlap:g}}if(Math.abs(_-c)<v){const g=Math.max(0,Math.min(o,m)-Math.max(a,h));if(g>.5)return{side:"S",overlap:g}}if(Math.abs(h-o)<v){const g=Math.max(0,Math.min(u,_)-Math.max(c,p));if(g>.5)return{side:"E",overlap:g}}if(Math.abs(m-a)<v){const g=Math.max(0,Math.min(u,_)-Math.max(c,p));if(g>.5)return{side:"W",overlap:g}}return null}getBoundaryLocation(e,n,a){const o=(e.floorY+n.floorY)/2;switch(a){case"N":return[(e.x+n.x)/2,o+.1,e.z+e.depth/2];case"S":return[(e.x+n.x)/2,o+.1,e.z-e.depth/2];case"E":return[e.x+e.width/2,o+.1,(e.z+n.z)/2];case"W":return[e.x-e.width/2,o+.1,(e.z+n.z)/2]}}getWallCenter(e,n){const a=e.width/2,o=e.depth/2;switch(n){case"N":return[e.x,e.floorY+.1,e.z+o];case"S":return[e.x,e.floorY+.1,e.z-o];case"E":return[e.x+a,e.floorY+.1,e.z];case"W":return[e.x-a,e.floorY+.1,e.z]}}addIssue(e){this.issues.find(n=>n.id===e.id)||this.issues.push(e)}}let hl=null;function Uw(){return hl||(hl=new Nw),hl}function Lw(){if(!hl)return null;const r=hl;return{rooms:r.roomsData||[],gaps:r.roomGapsData||{},issues:r.issues||[]}}function Ow(r,e){const n=Lw();if(!n)return;const a="__FLOOR_DEBUG_WIREFRAMES__";let o=window[a]||[];if(o.forEach(c=>{r.remove(c),c.geometry.dispose(),c.material.dispose()}),o=[],n.rooms.forEach(c=>{const u=new hn(c.width,.1,c.depth),h=new yl(u),m=new no({color:65280}),p=new xl(h,m);p.position.set(c.x,c.floorY+.05,c.z),p.renderOrder=998,p.frustumCulled=!1,r.add(p),o.push(p)}),n.issues.length>0){const c=Math.floor(e*2)%n.issues.length,u=n.issues[c],h=new Pp(.5,16,16),m=new yl(h),p=new no({color:16711680}),_=new xl(m,p);_.position.set(u.location[0],u.location[1],u.location[2]),_.renderOrder=999,_.frustumCulled=!1,r.add(_),o.push(_)}window[a]=o}class Iw{constructor(){this.roomsData=[],this.roomGapsData={},this.issues=[],this.scanStartTime=0,this.starterRoomId="starter"}initialize(e,n,a){a&&(this.starterRoomId=a),this.roomsData=e.map(o=>{var u,h,m,p;const c=o.name.toLowerCase();return{id:o.id||o.name,name:o.name||o.id,cx:o.cx,cz:o.cz,w:o.w,d:o.d,h:o.h,floorY:o.floorY,neighbors:{},hasFloor:!0,hasCeiling:!o.ceilingHoles||o.ceilingHoles.length===0,hasWalls:{N:!((u=o.skipWalls)!=null&&u.includes("N")),S:!((h=o.skipWalls)!=null&&h.includes("S")),E:!((m=o.skipWalls)!=null&&m.includes("E")),W:!((p=o.skipWalls)!=null&&p.includes("W"))},isStaircase:o.isStaircase||!1,isHallway:c.includes("hallway")||c.includes("corridor"),isConnector:c.includes("connector")||c.includes("transition")}}),this.calculateNeighbors(),this.roomGapsData=n,this.issues=[]}calculateNeighbors(){for(const a of this.roomsData){const o=a.w/2,c=a.d/2;for(const u of this.roomsData){if(u.id===a.id)continue;const h=u.w/2,m=u.d/2;Math.abs(u.cz-m-(a.cz+c))<5&&Math.min(a.cx+o+2,u.cx+h+2)-Math.max(a.cx-o-2,u.cx-h-2)>.5&&(a.neighbors.N=u.id),Math.abs(u.cz+m-(a.cz-c))<5&&Math.min(a.cx+o+2,u.cx+h+2)-Math.max(a.cx-o-2,u.cx-h-2)>.5&&(a.neighbors.S=u.id),Math.abs(u.cx-h-(a.cx+o))<5&&Math.min(a.cz+c+2,u.cz+m+2)-Math.max(a.cz-c-2,u.cz-m-2)>.5&&(a.neighbors.E=u.id),Math.abs(u.cx+h-(a.cx-o))<5&&Math.min(a.cz+c+2,u.cz+m+2)-Math.max(a.cz-c-2,u.cz-m-2)>.5&&(a.neighbors.W=u.id)}}}runAudit(){this.scanStartTime=performance.now(),this.issues=[],this.detectVoidExposures(),this.detectMissingWalls(),this.detectMissingCeilings(),this.detectDisconnectedRooms(),this.detectHallwayDeadEnds(),this.detectGeometrySeams(),this.detectNoPathToStarter(),this.detectZFighting(),this.detectMissingCollision();const e=performance.now()-this.scanStartTime,n=this.issues.filter(a=>a.type==="disconnected_room").map(a=>a.roomName);return{totalConnectedRooms:this.roomsData.length-n.length,disconnectedRooms:n,voidExposures:this.issues.filter(a=>a.type==="void_exposure"),missingWalls:this.issues.filter(a=>a.type==="missing_wall"),missingCeilings:this.issues.filter(a=>a.type==="missing_ceiling"),navigationBreaks:this.issues.filter(a=>a.type==="disconnected_room"||a.type==="no_path_to_starter"||a.type==="hallway_dead_end"),totalIssues:this.issues.length,scanDurationMs:e}}getIssues(){return[...this.issues]}getDebugData(){const e=this.issues.filter(o=>o.type==="void_exposure").map(o=>{var c;return{roomId:o.roomName,side:o.details.split(" ")[0]||"unknown",location:o.location,width:parseFloat(((c=o.details.match(/(\d+\.?\d*)u/))==null?void 0:c[1])||"0")}}),n=this.issues.filter(o=>o.type==="disconnected_room").map(o=>({roomId:o.roomName,location:o.location})),a=this.issues.filter(o=>o.type==="missing_ceiling").map(o=>({roomId:o.roomName,location:o.location}));return{rooms:this.roomsData,issues:this.issues,voidOpenings:e,disconnectedRooms:n,missingCeilings:a}}detectVoidExposures(){for(const e of this.roomsData){const n=this.roomGapsData[e.id]||[],a=e.w/2,o=e.d/2;for(const c of n)if(!this.hasNeighborAcrossGap(e,c)&&c.width>3){let h;if(c.side==="N"||c.side==="S"){const m=c.side==="N"?e.cz+o:e.cz-o;h=[e.cx+c.center,e.floorY+.1,m]}else h=[c.side==="E"?e.cx+a:e.cx-a,e.floorY+.1,e.cz+c.center];this.addIssue({id:`void_${e.id}_${c.side}_${c.center}`,type:"void_exposure",severity:c.width>10?"critical":"high",roomName:e.name,location:h,description:"Opening Exposes World Void",details:`${c.side} wall opening (${c.width.toFixed(2)}u) in ${e.name} leads to empty space`,isIntentional:this.isIntentionalVoidExposure(e,c)})}for(const[c,u]of Object.entries(e.hasWalls))if(!u&&!e.neighbors[c]){let h;switch(c){case"N":h=[e.cx,e.floorY+e.h/2,e.cz+o];break;case"S":h=[e.cx,e.floorY+e.h/2,e.cz-o];break;case"E":h=[e.cx+a,e.floorY+e.h/2,e.cz];break;case"W":h=[e.cx-a,e.floorY+e.h/2,e.cz];break}this.addIssue({id:`void_wall_${e.id}_${c}`,type:"void_exposure",severity:"high",roomName:e.name,location:h,description:"Missing Wall Exposes Void",details:`${c} wall missing in ${e.name}, exposes interior to void`,isIntentional:e.isConnector||e.isHallway})}}}detectMissingWalls(){for(const e of this.roomsData){this.roomGapsData[e.id];const n=e.w/2,a=e.d/2;for(const[o,c]of Object.entries(e.hasWalls))if(!c&&!e.neighbors[o]){const h=e.name.toLowerCase();if(!(h.includes("courtyard")||h.includes("exterior")||h.includes("outdoor"))&&!e.isConnector){let p;switch(o){case"N":p=[e.cx,e.floorY+e.h/2,e.cz+a];break;case"S":p=[e.cx,e.floorY+e.h/2,e.cz-a];break;case"E":p=[e.cx+n,e.floorY+e.h/2,e.cz];break;case"W":p=[e.cx-n,e.floorY+e.h/2,e.cz];break}this.addIssue({id:`missing_wall_${e.id}_${o}`,type:"missing_wall",severity:"medium",roomName:e.name,location:p,description:"Potentially Missing Wall",details:`${o} wall not defined in ${e.name} with no adjacent room`})}}}}detectMissingCeilings(){for(const e of this.roomsData){if(!e.hasCeiling){const n=[e.cx,e.floorY+e.h,e.cz];this.addIssue({id:`missing_ceiling_${e.id}`,type:"missing_ceiling",severity:"low",roomName:e.name,location:n,description:"Room Has Ceiling Openings",details:`${e.name} has ceiling holes exposing upper area`,isIntentional:!0})}if(e.h>20&&e.floorY<5&&!this.roomsData.find(a=>Math.abs(a.cx-e.cx)<e.w/2&&Math.abs(a.cz-e.cz)<e.d/2&&a.floorY>e.floorY+10)&&!e.isStaircase){const a=[e.cx,e.floorY+e.h,e.cz];this.addIssue({id:`tall_room_ceiling_${e.id}`,type:"missing_ceiling",severity:"medium",roomName:e.name,location:a,description:"Tall Room May Be Missing Ceiling",details:`${e.name} is ${e.h.toFixed(1)}u tall with no room above`})}}}detectDisconnectedRooms(){for(const e of this.roomsData){const n=Object.keys(e.neighbors).length,a=this.roomGapsData[e.id]||[];if(n===0&&a.length===0&&!e.isStaircase){const o=[e.cx,e.floorY+1,e.cz];this.addIssue({id:`disconnected_${e.id}`,type:"disconnected_room",severity:"critical",roomName:e.name,location:o,description:"Room Appears Disconnected",details:`${e.name} has no adjacent rooms and no doorways/gaps`})}}}detectHallwayDeadEnds(){for(const e of this.roomsData){if(!e.isHallway&&!e.isConnector)continue;const n=e.w/2,a=e.d/2;for(const[o,c]of Object.entries(e.neighbors))if(!c&&!(this.roomGapsData[e.id]||[]).some(m=>m.side===o)&&!e.hasWalls[o]){let m;switch(o){case"N":m=[e.cx,e.floorY+1,e.cz+a];break;case"S":m=[e.cx,e.floorY+1,e.cz-a];break;case"E":m=[e.cx+n,e.floorY+1,e.cz];break;case"W":m=[e.cx-n,e.floorY+1,e.cz];break}this.addIssue({id:`hallway_deadend_${e.id}_${o}`,type:"hallway_dead_end",severity:"high",roomName:e.name,location:m,description:"Hallway Terminates Into Empty Space",details:`${e.name} ${o} end has no connecting room or doorway`})}}}detectGeometrySeams(){for(let e=0;e<this.roomsData.length;e++){const n=this.roomsData[e];for(let a=e+1;a<this.roomsData.length;a++){const o=this.roomsData[a],c=Math.abs(n.h-o.h),u=Math.abs(n.floorY-o.floorY);if((c>1||u>.5)&&this.getSharedEdge(n,o)){const m=[(n.cx+o.cx)/2,Math.max(n.floorY,o.floorY)+1,(n.cz+o.cz)/2];this.addIssue({id:`seam_${n.id}_${o.id}`,type:"geometry_seam",severity:"medium",roomName:`${n.name}/${o.name}`,location:m,description:"Potential Geometry Seam",details:`Height/floor mismatch between ${n.name} and ${o.name} may create visible seam`})}}}}detectNoPathToStarter(){const e=this.roomsData.find(o=>o.id===this.starterRoomId);if(!e)return;const n=new Set,a=[this.starterRoomId];for(n.add(this.starterRoomId);a.length>0;){const o=a.shift(),c=this.roomsData.find(h=>h.id===o);if(!c)continue;for(const h of Object.values(c.neighbors))h&&!n.has(h)&&(n.add(h),a.push(h));const u=this.roomGapsData[o]||[];for(const h of u)for(const m of this.roomsData)m.id!==o&&this.roomsAreConnectedViaGap(c,m,h)&&(n.has(m.id)||(n.add(m.id),a.push(m.id)))}for(const o of this.roomsData)if(!n.has(o.id)&&o.id!==this.starterRoomId){const c=[o.cx,o.floorY+1,o.cz];this.addIssue({id:`no_path_${o.id}`,type:"no_path_to_starter",severity:"critical",roomName:o.name,location:c,description:"No Path From Starter Room",details:`${o.name} is not reachable from ${e.name}`})}}detectZFighting(){for(let n=0;n<this.roomsData.length;n++){const a=this.roomsData[n];for(let o=n+1;o<this.roomsData.length;o++){const c=this.roomsData[o],u=Math.min(a.cx+a.w/2,c.cx+c.w/2)-Math.max(a.cx-a.w/2,c.cx-c.w/2),h=Math.min(a.cz+a.d/2,c.cz+c.d/2)-Math.max(a.cz-a.d/2,c.cz-c.d/2);if(u>.5&&h>.5&&Math.abs(a.floorY-c.floorY)<2){const p=[(a.cx+c.cx)/2,(a.floorY+c.floorY)/2+1,(a.cz+c.cz)/2];this.addIssue({id:`zfight_${a.id}_${c.id}`,type:"z_fighting",severity:"high",roomName:`${a.name}/${c.name}`,location:p,description:"Overlapping Room Geometry",details:`${a.name} and ${c.name} overlap by ${u.toFixed(1)}x${h.toFixed(1)}u`})}}}}detectMissingCollision(){for(const e of this.roomsData){if(e.h<.5&&!e.isStaircase){const a=[e.cx,e.floorY+.1,e.cz];this.addIssue({id:`thin_floor_${e.id}`,type:"missing_collision",severity:"medium",roomName:e.name,location:a,description:"Thin Floor May Lack Collision",details:`${e.name} floor is only ${e.h.toFixed(2)}u thick`})}const n=this.roomGapsData[e.id]||[];for(const[a,o]of Object.entries(e.hasWalls))if(o){const c=n.filter(u=>u.side===a);if(c.length>1){c.sort((u,h)=>u.center-h.center);for(let u=0;u<c.length-1;u++){const h=c[u],m=c[u+1],p=m.center-m.width/2-(h.center+h.width/2);if(p>0&&p<.3){let _;const v=(h.center+h.width/2+m.center-m.width/2)/2;if(a==="N"||a==="S"){const g=a==="N"?e.cz+e.d/2:e.cz-e.d/2;_=[e.cx+v,e.floorY+1,g]}else _=[a==="E"?e.cx+e.w/2:e.cx-e.w/2,e.floorY+1,e.cz+v];this.addIssue({id:`thin_wall_${e.id}_${a}_${u}`,type:"missing_collision",severity:"low",roomName:e.name,location:_,description:"Narrow Wall Segment",details:`Wall segment between gaps on ${a} wall is only ${p.toFixed(2)}u wide`})}}}}}}hasNeighborAcrossGap(e,n){const a=e.w/2,o=e.d/2;let c,u,h;switch(n.side){case"N":c=e.cz+o,u=e.cx+n.center-n.width/2,h=e.cx+n.center+n.width/2;break;case"S":c=e.cz-o,u=e.cx+n.center-n.width/2,h=e.cx+n.center+n.width/2;break;case"E":c=e.cx+a,u=e.cz+n.center-n.width/2,h=e.cz+n.center+n.width/2;break;case"W":c=e.cx-a,u=e.cz+n.center-n.width/2,h=e.cz+n.center+n.width/2;break}const m=5,p=2;for(const _ of this.roomsData){if(_.id===e.id)continue;const v=_.w/2,g=_.d/2;let S=!1,b,R;switch(n.side){case"N":Math.abs(_.cz-g-c)<m&&(S=!0,b=_.cx-v-p,R=_.cx+v+p);break;case"S":Math.abs(_.cz+g-c)<m&&(S=!0,b=_.cx-v-p,R=_.cx+v+p);break;case"E":Math.abs(_.cx-v-c)<m&&(S=!0,b=_.cz-g-p,R=_.cz+g+p);break;case"W":Math.abs(_.cx+v-c)<m&&(S=!0,b=_.cz-g-p,R=_.cz+g+p);break}if(S&&Math.max(0,Math.min(h,R)-Math.max(u,b))>.5)return!0}return!1}roomsAreConnectedViaGap(e,n,a){const o=e.w/2,c=e.d/2,u=n.w/2,h=n.d/2;let m,p,_;switch(a.side){case"N":m=e.cz+c,p=e.cx+a.center-a.width/2,_=e.cx+a.center+a.width/2;break;case"S":m=e.cz-c,p=e.cx+a.center-a.width/2,_=e.cx+a.center+a.width/2;break;case"E":m=e.cx+o,p=e.cz+a.center-a.width/2,_=e.cz+a.center+a.width/2;break;case"W":m=e.cx-o,p=e.cz+a.center-a.width/2,_=e.cz+a.center+a.width/2;break}const v=5,g=2,S=u,b=h;let R=!1,M,y;switch(a.side){case"N":Math.abs(n.cz-b-m)<v&&(R=!0,M=n.cx-S-g,y=n.cx+S+g);break;case"S":Math.abs(n.cz+b-m)<v&&(R=!0,M=n.cx-S-g,y=n.cx+S+g);break;case"E":Math.abs(n.cx-S-m)<v&&(R=!0,M=n.cz-b-g,y=n.cz+b+g);break;case"W":Math.abs(n.cx+S-m)<v&&(R=!0,M=n.cz-b-g,y=n.cz+b+g);break}return R?Math.max(0,Math.min(_,y)-Math.max(p,M))>.5:!1}isIntentionalVoidExposure(e,n){const a=e.name.toLowerCase();return!!(a.includes("courtyard")||a.includes("exterior")||a.includes("outdoor")||a.includes("garden")||e.isConnector||e.isHallway||e.isStaircase)}getSharedEdge(e,n){const a=e.w/2,o=e.d/2,c=n.w/2,u=n.d/2,h=5;return Math.abs(n.cz-u-(e.cz+o))<h&&Math.min(e.cx+a,n.cx+c)-Math.max(e.cx-a,n.cx-c)>2?"N":Math.abs(n.cz+u-(e.cz-o))<h&&Math.min(e.cx+a,n.cx+c)-Math.max(e.cx-a,n.cx-c)>2?"S":Math.abs(n.cx-c-(e.cx+a))<h&&Math.min(e.cz+o,n.cz+u)-Math.max(e.cz-o,n.cz-u)>2?"E":Math.abs(n.cx+c-(e.cx-a))<h&&Math.min(e.cz+o,n.cz+u)-Math.max(e.cz-o,n.cz-u)>2?"W":null}calculateDistance(e,n,a,o){return Math.sqrt(Math.pow(a-e,2)+Math.pow(o-n,2))}findNearestConnectedRoom(e,n){let a=null;for(const o of this.roomsData){if(o.id===e)continue;const c=this.calculateDistance(n[0],n[2],o.cx,o.cz);(!a||c<a.distance)&&(a={roomId:o.id,name:o.name,distance:c})}return a}generateReasoning(e,n,a){switch(e){case"void_exposure":return a?`Gap on ${a.side} wall (${a.width.toFixed(1)}u wide) has no adjacent room within detection tolerance. Pathfinding graph cannot establish valid route across this opening.`:"Missing wall on specified side creates direct exposure to world void with no connecting geometry.";case"missing_wall":return"Wall not defined in room data and no adjacent room detected within tolerance. This creates an unsealed boundary.";case"missing_ceiling":return"Room lacks ceiling geometry definition or has excessive height without upper floor coverage.";case"disconnected_room":return"Room has zero neighbors and zero gaps/doorways. No pathfinding connections exist to any other room.";case"hallway_dead_end":return"Hallway terminates without connecting room, gap, or wall. Creates navigation dead-end into void.";case"geometry_seam":return"Adjacent rooms have mismatched floor heights or room heights, creating visible seam where geometries meet.";case"no_path_to_starter":return"BFS pathfinding from starter room cannot reach this room. All possible connection paths are blocked or missing.";case"z_fighting":return"Room geometry overlaps significantly with another room at similar height, causing rendering artifacts.";case"missing_collision":return"Geometry segment is too thin (<0.3u) to reliably generate collision mesh, or floor thickness is insufficient.";default:return"Issue detected during automated connectivity scan."}}generatePotentialCauses(e){switch(e){case"void_exposure":return["Missing floor tile","Collision wall blocking passage","Gap between meshes not bridged","Doorway not registered in gap data","Intentional exterior opening"];case"missing_wall":return["Wall definition omitted in room config","Adjacent room positioned outside detection tolerance","Intentional open-air design","Exterior boundary wall missing"];case"missing_ceiling":return["Ceiling geometry not generated","Multi-level room design (intentional)","Trapdoor or skylight opening","Tall room without upper floor"];case"disconnected_room":return["Room placed in isolation","Missing gap/doorway definitions","Neighbor rooms positioned incorrectly","Standalone structure (may be intentional)"];case"hallway_dead_end":return["Hallway extension incomplete","Missing connecting room","Gap definition omitted","Intentional cul-de-sac design"];case"geometry_seam":return["Floor height mismatch between rooms","Room height difference creates step","Transition piece missing","Different architectural styles meeting"];case"no_path_to_starter":return["Missing intermediate connection rooms","Gap chain broken","One-way passage only","Secret or hidden room"];case"z_fighting":return["Rooms overlap in XZ plane","Duplicate room definitions","Positioning error in map data","Intentional multi-layer design"];case"missing_collision":return["Thin wall segment between gaps","Floor thickness below threshold","Narrow pillar or support","Decorative element without collision"];default:return["Unknown cause"]}}determineConfidence(e,n,a){return a?"LOW":e==="disconnected_room"||e==="no_path_to_starter"||e==="void_exposure"&&!n.isConnector&&!n.isHallway?"HIGH":"MEDIUM"}addIssue(e){if(this.issues.find(a=>a.id===e.id))return;const n=this.roomsData.find(a=>a.id===e.roomName||a.name===e.roomName);if(n){e.roomBounds={x:n.cx,z:n.cz,w:n.w,d:n.d,h:n.h,floorY:n.floorY};const a=this.findNearestConnectedRoom(n.id,e.location);a&&(e.nearestConnectedRoom=a.name,e.distanceToNearestRoom=a.distance),e.reasoning=this.generateReasoning(e.type,n),e.potentialCauses=this.generatePotentialCauses(e.type),e.confidence=this.determineConfidence(e.type,n,e.isIntentional)}this.issues.push(e)}}let Eh=null;const bx=()=>(Eh||(Eh=new Iw),Eh);typeof window<"u"&&(window.runConnectivityAudit=(r,e,n)=>{const a=bx();if(!r||!e)return console.error("[ConnectivityAudit] Please provide rooms and gaps data, or call auditor.initialize() first"),null;a.initialize(r,e,n);const o=a.runAudit(),c=a.getIssues();return console.log("=== MAP CONNECTIVITY AUDIT REPORT ==="),console.log(`Total Rooms Scanned: ${a.roomsData.length}`),console.log(`Total Connected Rooms: ${o.totalConnectedRooms}`),console.log(`Disconnected Rooms: ${o.disconnectedRooms.length}`),o.disconnectedRooms.length>0&&o.disconnectedRooms.forEach(u=>console.log(`  - ${u}`)),console.log(`Void Exposures: ${o.voidExposures.length}`),console.log(`Missing Walls: ${o.missingWalls.length}`),console.log(`Missing Ceilings: ${o.missingCeilings.length}`),console.log(`Navigation Breaks: ${o.navigationBreaks.length}`),console.log(`Total Issues: ${o.totalIssues}`),console.log(`Scan Duration: ${o.scanDurationMs.toFixed(2)}ms`),console.log(`=====================================
`),c.length>0&&(console.log(`=== DETAILED ISSUE REPORTS ===
`),c.forEach((u,h)=>{var m;console.log(`--- Issue #${h+1} ---`),console.log(`[${u.type.toUpperCase()}]`),console.log(`Room: ${u.roomName}`),console.log(`Location: [${u.location[0].toFixed(1)}, ${u.location[1].toFixed(1)}, ${u.location[2].toFixed(1)}]`),console.log(`Severity: ${u.severity.toUpperCase()}`),console.log(`Description: ${u.description}`),console.log(`Details: ${u.details}`),u.roomBounds&&console.log(`Room Bounds: { x: ${u.roomBounds.x}, z: ${u.roomBounds.z}, w: ${u.roomBounds.w}, d: ${u.roomBounds.d}, h: ${u.roomBounds.h}, floorY: ${u.roomBounds.floorY} }`),u.nearestConnectedRoom&&(console.log(`Nearest Room: ${u.nearestConnectedRoom}`),console.log(`Distance: ${(m=u.distanceToNearestRoom)==null?void 0:m.toFixed(2)} units`)),u.reasoning&&console.log(`Reason: ${u.reasoning}`),u.potentialCauses&&u.potentialCauses.length>0&&(console.log("Potential Causes:"),u.potentialCauses.forEach(p=>console.log(`  • ${p}`))),u.confidence&&console.log(`Confidence: ${u.confidence}`),u.isIntentional!==void 0&&console.log(`Intentional: ${u.isIntentional?"YES":"NO"}`),console.log("")})),console.log("====================================="),console.log("Use teleportToAuditIssue(index) to navigate to specific issues."),console.log("Enable DEBUG_CONNECTIVITY visualization with: window.DEBUG_CONNECTIVITY = true"),o});function zw(r,e,n){let a=!1,o=null,c=null,u=null;const h=new Tu({color:16776960,transparent:!0,opacity:.4,depthTest:!0,depthWrite:!1}),m=new no({color:16776960,linewidth:2});function p(){const L=new hn(1,1,1),T=new tn(L,h.clone());return T.renderOrder=999,T}function _(){const L=new yl(new hn(1,1,1)),T=new xl(L,m);return T.renderOrder=1e3,T}function v(L){const T={};let U=L;for(;U;){if(U.userData&&(U.userData.roomId&&(T.roomId=U.userData.roomId),U.userData.wallId&&(T.wallId=U.userData.wallId),U.userData.floorId&&(T.floorId=U.userData.floorId),U.userData.type)){const H=U.userData.type;H==="wall"&&!T.wallId?T.wallId=`${T.roomId||"unknown"}_${U.userData.side||"unknown"}`:H==="floor"&&!T.floorId?T.floorId=`${T.roomId||"unknown"}_floor`:H==="ceiling"&&!T.floorId&&(T.floorId=`${T.roomId||"unknown"}_ceiling`)}U=U.parent}return T}function g(L,T){const U=L.geometry;if(!U.attributes.position||!U.attributes.normal)return!1;const H=U.attributes.position.array,B=U.attributes.normal.array,q=new ee;L.getWorldPosition(q);let de=0,me=0;for(let Y=0;Y<Math.min(H.length,180);Y+=9){const C=H[Y],F=H[Y+1],se=H[Y+2],ge=B[Y],we=B[Y+1],P=B[Y+2],ie=new ee(C,F,se);ie.applyMatrix4(L.matrixWorld);const be=new ee(ge,we,P);be.transformDirection(L.matrixWorld).normalize();const Oe=q,He=new ee().subVectors(Oe,ie).normalize();be.dot(He)>0&&de++,me++}return me>0&&de/me>.5}function S(L,T){var we;const U=L.geometry,H=L.material,B=Array.isArray(H)?H[0]:H,q=new Es().setFromObject(L),de=new ee,me=new ki,Y=new ee;L.getWorldPosition(de),L.updateWorldMatrix(!0,!1),me.setFromRotationMatrix(L.matrixWorld),L.getWorldScale(Y);let C=1;if(B){const P=B;P.opacity!==void 0&&(C=P.opacity),P.transparent&&P.opacity<1&&(C=P.opacity)}const F=L.userData.hasCollision!==!1&&L.name.includes("collider")||L.userData.isCollider===!0,se=v(L),ge=g(L);return{meshName:L.name||"unnamed",meshId:L.id.toString(),roomId:se.roomId,wallId:se.wallId,floorId:se.floorId,distance:T,hasCollision:F,isVisible:L.visible,materialOpacity:C,normalsFaceInward:ge,bounds:q,position:de,rotation:me,scale:Y,geometryType:U.type,materialType:(B==null?void 0:B.type)||"unknown",vertexCount:((we=U.attributes.position)==null?void 0:we.count)||0,userData:{...L.userData}}}function b(L,T){if(o&&(r.remove(o),o=null),c&&(r.remove(c),c=null),!L){u=null;return}const U=new Es().setFromObject(L),H=new ee,B=new ee;U.getSize(H),U.getCenter(B),o=p(),o.scale.copy(H),o.position.copy(B),r.add(o),c=_(),c.scale.copy(H),c.position.copy(B),r.add(c),u=S(L,T)}function R(){n.setFromCamera(new Mt(0,0),e);const L=[];r.traverse(U=>{U instanceof tn&&U!==o&&!U.name.includes("debug")&&!U.name.includes("highlight")&&L.push(U)});const T=n.intersectObjects(L);return T.length>0?T[0].object:null}function M(){return R()}function y(){a=!0,console.log("[GeometryInspector] Enabled - cast rays from camera to detect rendered meshes")}function D(){a=!1,b(null,0),console.log("[GeometryInspector] Disabled")}function z(){a?D():y()}function O(){return a}function k(){return u}function I(L=20){console.log(`
=== GEOMETRY INSPECTOR: All Meshes Within ${L} Units ===`),console.log(`Player Position: (${e.position.x.toFixed(2)}, ${e.position.y.toFixed(2)}, ${e.position.z.toFixed(2)})`),console.log("=".repeat(70));const T=e.position,U=[];r.traverse(H=>{if(H instanceof tn&&H!==o&&!H.name.includes("debug")&&!H.name.includes("highlight")){const B=new ee;H.getWorldPosition(B);const q=B.distanceTo(T);if(q<=L){const de=S(H,q);U.push({mesh:H,distance:q,info:de})}}}),U.sort((H,B)=>H.distance-B.distance),console.log(`Found ${U.length} meshes within ${L} units:
`),U.forEach(({mesh:H,distance:B,info:q},de)=>{console.log(`
--- Mesh #${de+1} ---`),console.log(`  Name: "${q.meshName}" (ID: ${q.meshId})`),console.log(`  Distance: ${B.toFixed(2)} units`),console.log(`  Room ID: ${q.roomId||"N/A"}`),console.log(`  Wall ID: ${q.wallId||"N/A"}`),console.log(`  Floor ID: ${q.floorId||"N/A"}`),console.log(`  Position: (${q.position.x.toFixed(2)}, ${q.position.y.toFixed(2)}, ${q.position.z.toFixed(2)})`),console.log(`  Bounds Min: (${q.bounds.min.x.toFixed(2)}, ${q.bounds.min.y.toFixed(2)}, ${q.bounds.min.z.toFixed(2)})`),console.log(`  Bounds Max: (${q.bounds.max.x.toFixed(2)}, ${q.bounds.max.y.toFixed(2)}, ${q.bounds.max.z.toFixed(2)})`),console.log(`  Has Collision: ${q.hasCollision}`),console.log(`  Is Visible: ${q.isVisible}`),console.log(`  Material Opacity: ${q.materialOpacity.toFixed(2)} ${q.materialOpacity<1?"(TRANSPARENT!)":""}`),console.log(`  Normals Face Inward: ${q.normalsFaceInward}`),console.log(`  Geometry: ${q.geometryType} (${q.vertexCount} vertices)`),console.log(`  Material: ${q.materialType}`),Object.keys(q.userData).length>0&&console.log("  UserData:",JSON.stringify(q.userData,null,2))}),console.log(`
`+"=".repeat(70)),console.log(`Total: ${U.length} meshes`)}return window.inspectGeometry=()=>{I(20)},{enable:y,disable:D,toggle:z,isActive:O,getInspectedMesh:k,inspectAllMeshes:I,inspectAtCrosshair:M,updateHighlight:b}}const Pw=({data:r,onToggleNoclip:e,onRunConnectivity:n,onRunFloorAudit:a,onTeleportToSpawn:o,onTeleportToIssue:c,onToggleDebugLighting:u,onSetDebugLightingBrightness:h})=>{var me,Y;const[m,p]=nt.useState(!1),[_,v]=nt.useState("audit"),[g,S]=nt.useState(new Set),[b,R]=nt.useState("all");nt.useEffect(()=>{const C=F=>{F.key==="F1"&&p(se=>!se),F.key==="F2"&&(u==null||u())};return window.addEventListener("keydown",C),()=>window.removeEventListener("keydown",C)},[u]);const y=[...r.connectivityIssues.map(C=>({...C,source:"connectivity"})),...r.floorIntegrityIssues.map(C=>({...C,source:"floor"}))].filter(C=>b==="connectivity"?C.source==="connectivity":b==="floor"?C.source==="floor":!0),D=C=>{const F=new Set(g);F.has(C)?F.delete(C):F.add(C),S(F)},z=C=>{switch(C.type){case"void_exposure":return"Add wall, barrier, or intentional opening marker.";case"missing_wall":return"Add missing wall geometry or mark as intentional opening.";case"missing_ceiling":return"Add ceiling geometry or verify if intentional (outdoor area).";case"disconnected_room":return"Add connecting doorway or teleport trigger.";case"gap":case"missing_tile":return"Fill floor gap with matching tile geometry.";case"height_mismatch":return"Adjust floor height to match adjacent sections.";case"crack":return"Repair crack or add decorative cover.";default:return"Review and fix geometry alignment."}},O=C=>{switch(C){case"critical":return"#f00";case"high":return"#ff6600";case"medium":return"#ff0";case"low":return"#0f0";default:return"#fff"}},k={position:"absolute",top:10,left:10,zIndex:1e3,fontFamily:"monospace",fontSize:"12px",color:"#0f0",backgroundColor:"rgba(0, 0, 0, 0.85)",border:"1px solid #0f0",borderRadius:"4px",padding:"10px",minWidth:"280px",maxWidth:"450px",userSelect:"none"},I={display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px",borderBottom:"1px solid #333",paddingBottom:"5px",cursor:"pointer"},L={display:"flex",marginBottom:"10px",borderBottom:"1px solid #333"},T=C=>({flex:1,textAlign:"center",padding:"4px 2px",cursor:"pointer",backgroundColor:C?"#0f0":"transparent",color:C?"#000":"#0f0",fontWeight:"bold",fontSize:"10px"}),U={display:m?"block":"none"},H={display:"flex",justifyContent:"space-between",marginBottom:"2px"},B={background:"#003300",color:"#0f0",border:"1px solid #0f0",padding:"4px 8px",cursor:"pointer",fontSize:"10px",marginTop:"5px",width:"100%",textAlign:"center"},q={position:"absolute",top:10,right:10,zIndex:999,fontFamily:"monospace",fontSize:"14px",color:"#fff",backgroundColor:"rgba(0, 0, 0, 0.5)",padding:"5px 10px",borderRadius:"4px",pointerEvents:"none"},de={position:"absolute",top:10,left:10,zIndex:998,fontFamily:"monospace",fontSize:"12px",color:r.debugLightingEnabled?"#ff0":"#666",backgroundColor:"rgba(0, 0, 0, 0.5)",padding:"5px 10px",borderRadius:"4px",pointerEvents:"none"};return ne.jsxs(ne.Fragment,{children:[r.debugLightingEnabled&&ne.jsxs("div",{style:de,children:["DEBUG LIGHTING: ON (",(me=r.debugLightingBrightness)==null?void 0:me.toFixed(1),"x)"]}),ne.jsxs("div",{style:q,children:[ne.jsxs("span",{children:["FPS: ",Math.round(r.fps)]}),r.currentRoom&&ne.jsxs("span",{style:{marginLeft:"10px"},children:["Room: ",r.currentRoom]})]}),ne.jsxs("div",{style:k,children:[ne.jsxs("div",{style:I,onClick:()=>p(!m),children:[ne.jsx("strong",{children:"DEBUG CONSOLE [F1]"}),ne.jsx("span",{children:m?"▼":"▶"})]}),m&&ne.jsxs("div",{style:L,children:[ne.jsx("div",{style:T(_==="audit"),onClick:()=>v("audit"),children:"AUDIT"}),ne.jsx("div",{style:T(_==="player"),onClick:()=>v("player"),children:"PLAYER"}),ne.jsx("div",{style:T(_==="rounds"),onClick:()=>v("rounds"),children:"ROUNDS"}),ne.jsx("div",{style:T(_==="perf"),onClick:()=>v("perf"),children:"PERF"})]}),ne.jsxs("div",{style:U,children:[_==="audit"&&ne.jsxs("div",{children:[ne.jsxs("div",{style:H,children:[ne.jsx("span",{children:"Connectivity Issues:"}),ne.jsx("span",{style:{color:r.connectivityIssues.length>0?"#f00":"#0f0"},children:r.connectivityIssues.length})]}),ne.jsxs("div",{style:H,children:[ne.jsx("span",{children:"Floor Integrity:"}),ne.jsx("span",{style:{color:r.floorIntegrityIssues.length>0?"#f00":"#0f0"},children:r.floorIntegrityIssues.length})]}),ne.jsxs("div",{style:{marginTop:"10px",borderTop:"1px dashed #333",paddingTop:"5px"},children:[ne.jsx("div",{style:{display:"flex",gap:"4px",marginBottom:"8px"},children:["all","connectivity","floor","open"].map(C=>ne.jsx("button",{onClick:()=>R(C),style:{...B,marginTop:0,backgroundColor:b===C?"#0f0":"#003300",color:b===C?"#000":"#0f0",flex:1,fontSize:"9px",padding:"3px 2px"},children:C.toUpperCase()},C))}),ne.jsx("div",{style:{...B,marginTop:"2px"},onClick:()=>{g.size===y.length?S(new Set):S(new Set(y.map(C=>C.id)))},children:g.size===y.length?"Collapse All":"Expand All"})]}),y.length>0&&ne.jsx("div",{style:{marginTop:"10px",maxHeight:"300px",overflowY:"auto"},children:y.map((C,F)=>{const se=g.has(C.id);return ne.jsxs("div",{style:{border:"1px solid #333",borderRadius:"3px",marginBottom:"6px",backgroundColor:se?"rgba(0, 255, 0, 0.1)":"transparent"},children:[ne.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 6px",cursor:"pointer"},onClick:()=>D(C.id),children:[ne.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[ne.jsxs("span",{style:{fontSize:"10px",color:"#888"},children:["#",F+1]}),ne.jsxs("span",{style:{fontSize:"10px",fontWeight:"bold",color:O(C.severity)},children:["[",C.type.toUpperCase(),"]"]}),ne.jsx("span",{style:{fontSize:"10px",color:"#aaa"},children:C.roomName})]}),ne.jsx("span",{style:{fontSize:"10px"},children:se?"▼":"▶"})]}),se&&ne.jsxs("div",{style:{padding:"6px",borderTop:"1px solid #333",fontSize:"10px"},children:[ne.jsxs("div",{style:H,children:[ne.jsx("span",{children:"Position:"}),ne.jsxs("span",{children:["[",C.location[0].toFixed(1),", ",C.location[1].toFixed(1),", ",C.location[2].toFixed(1),"]"]})]}),ne.jsxs("div",{style:H,children:[ne.jsx("span",{children:"Severity:"}),ne.jsx("span",{style:{color:O(C.severity)},children:C.severity.toUpperCase()})]}),ne.jsxs("div",{style:{marginTop:"4px"},children:[ne.jsx("span",{style:{color:"#888"},children:"Reason: "}),ne.jsx("span",{children:"description"in C?C.description:C.cause})]}),"details"in C&&C.details&&ne.jsxs("div",{style:{marginTop:"2px"},children:[ne.jsx("span",{style:{color:"#888"},children:"Details: "}),ne.jsx("span",{children:C.details})]}),ne.jsxs("div",{style:{marginTop:"6px",padding:"4px",backgroundColor:"rgba(255, 255, 0, 0.1)",borderLeft:"2px solid #ff0"},children:[ne.jsx("span",{style:{color:"#ff0"},children:"Suggested Fix: "}),ne.jsx("span",{children:z(C)})]}),c&&ne.jsx("button",{style:{...B,marginTop:"6px"},onClick:ge=>{ge.stopPropagation(),c(C)},children:"Teleport To Issue"})]})]},C.id)})}),ne.jsxs("div",{style:{marginTop:"10px",borderTop:"1px dashed #333",paddingTop:"5px"},children:[ne.jsx("div",{style:B,onClick:n,children:"Run Connectivity Audit"}),ne.jsx("div",{style:{...B,marginTop:"2px"},onClick:a,children:"Run Floor Integrity"}),ne.jsx("div",{style:{...B,marginTop:"2px"},onClick:o,children:"Teleport to Spawn"})]})]}),_==="player"&&ne.jsxs("div",{children:[r.roomDetectorStatus&&ne.jsxs("div",{style:{border:"1px solid #f00",backgroundColor:"rgba(255, 0, 0, 0.1)",padding:"8px",marginBottom:"10px",borderRadius:"4px"},children:[ne.jsx("strong",{style:{color:"#f00",display:"block",marginBottom:"6px"},children:"ROOM DETECTOR STATUS"}),ne.jsxs("div",{style:H,children:[ne.jsx("span",{children:"Player Position:"}),ne.jsxs("span",{children:["[",r.roomDetectorStatus.playerPosition.x.toFixed(1),", ",r.roomDetectorStatus.playerPosition.y.toFixed(1),", ",r.roomDetectorStatus.playerPosition.z.toFixed(1),"]"]})]}),ne.jsxs("div",{style:H,children:[ne.jsx("span",{children:"Room Count:"}),ne.jsx("span",{children:r.roomDetectorStatus.roomCount})]}),ne.jsxs("div",{style:H,children:[ne.jsx("span",{children:"Current Room:"}),ne.jsx("span",{style:{color:r.roomDetectorStatus.currentRoom?"#0f0":"#f00"},children:r.roomDetectorStatus.currentRoom||"None"})]}),ne.jsxs("div",{style:H,children:[ne.jsx("span",{children:"Closest Room:"}),ne.jsx("span",{children:r.roomDetectorStatus.closestRoom||"N/A"})]}),ne.jsxs("div",{style:H,children:[ne.jsx("span",{children:"Distance:"}),ne.jsx("span",{children:r.roomDetectorStatus.closestDistance.toFixed(2)})]}),r.roomDetectorStatus.rejectionReason&&ne.jsxs("div",{style:{marginTop:"6px",padding:"4px",backgroundColor:"rgba(255, 0, 0, 0.2)",borderLeft:"2px solid #f00",fontSize:"10px"},children:[ne.jsx("span",{style:{color:"#f00"},children:"Reason: "}),ne.jsx("span",{children:r.roomDetectorStatus.rejectionReason})]})]}),ne.jsxs("div",{style:H,children:[ne.jsx("span",{children:"Pos X:"}),ne.jsx("span",{children:r.playerPos.x.toFixed(2)})]}),ne.jsxs("div",{style:H,children:[ne.jsx("span",{children:"Pos Y:"}),ne.jsx("span",{children:r.playerPos.y.toFixed(2)})]}),ne.jsxs("div",{style:H,children:[ne.jsx("span",{children:"Pos Z:"}),ne.jsx("span",{children:r.playerPos.z.toFixed(2)})]}),ne.jsxs("div",{style:H,children:[ne.jsx("span",{children:"Rot Y:"}),ne.jsxs("span",{children:[IM.radToDeg(r.playerRot.y).toFixed(1),"°"]})]}),ne.jsxs("div",{style:H,children:[ne.jsx("span",{children:"Room:"}),ne.jsx("span",{children:r.currentRoom||"None"})]}),ne.jsxs("div",{style:H,children:[ne.jsx("span",{children:"Noclip:"}),ne.jsxs("span",{style:{color:r.noclip?"#0ff":"#f00",cursor:"pointer",textDecoration:"underline"},onClick:e,children:[r.noclip?"ON":"OFF"," (Click)"]})]}),ne.jsxs("div",{style:{...H,marginTop:"8px",borderTop:"1px dashed #333",paddingTop:"8px"},children:[ne.jsx("span",{children:"Debug Lighting:"}),ne.jsxs("span",{style:{color:r.debugLightingEnabled?"#ff0":"#f00",cursor:"pointer",textDecoration:"underline"},onClick:u,children:[r.debugLightingEnabled?"ON":"OFF"," (Click)"]})]}),h&&ne.jsxs("div",{style:{marginTop:"8px"},children:[ne.jsxs("div",{style:H,children:[ne.jsx("span",{children:"Brightness:"}),ne.jsxs("span",{children:[(Y=r.debugLightingBrightness)==null?void 0:Y.toFixed(1),"x"]})]}),ne.jsx("input",{type:"range",min:"1.0",max:"5.0",step:"0.1",value:r.debugLightingBrightness||3,onChange:C=>h==null?void 0:h(parseFloat(C.target.value)),style:{width:"100%",marginTop:"4px",cursor:"pointer"}}),ne.jsx("div",{style:{fontSize:"9px",color:"#888",marginTop:"2px"},children:"Range: 1.0x - 5.0x"})]})]}),_==="rounds"&&ne.jsxs("div",{children:[ne.jsxs("div",{style:H,children:[ne.jsx("span",{children:"Current Round:"}),ne.jsx("span",{children:r.round})]}),ne.jsxs("div",{style:H,children:[ne.jsx("span",{children:"Zombies Alive:"}),ne.jsx("span",{children:r.zombiesAlive})]}),ne.jsxs("div",{style:H,children:[ne.jsx("span",{children:"Spawn Status:"}),ne.jsx("span",{children:r.spawnStatus})]})]}),_==="perf"&&ne.jsxs("div",{children:[ne.jsxs("div",{style:H,children:[ne.jsx("span",{children:"FPS:"}),ne.jsx("span",{style:{color:r.fps>50?"#0f0":r.fps>30?"#ff0":"#f00"},children:Math.round(r.fps)})]}),ne.jsxs("div",{style:H,children:[ne.jsx("span",{children:"Draw Calls:"}),ne.jsx("span",{children:r.drawCalls})]}),ne.jsxs("div",{style:H,children:[ne.jsx("span",{children:"Mesh Count:"}),ne.jsx("span",{children:r.meshCount})]})]})]})]})]})},bh={},Th=r=>{if(bh[r])return bh[r];const e=document.createElement("canvas");e.width=512,e.height=512;const n=e.getContext("2d");if(r==="wood_floor"){n.fillStyle="#452c1e",n.fillRect(0,0,512,512);const o=512/8;for(let c=0;c<8;c++){n.fillStyle=c%2===0?"#4e3425":"#3c2518",c%3===0&&(n.fillStyle="#432a1d"),n.fillRect(0,c*o,512,o),n.strokeStyle="#29170e",n.lineWidth=1;for(let h=0;h<5;h++)n.beginPath(),n.moveTo(0,c*o+Math.random()*o),n.quadraticCurveTo(256,c*o+Math.random()*o*2-o/2,512,c*o+Math.random()*o),n.stroke();const u=c%2===0?[150,380]:[220,440];n.fillStyle="#1e110a",u.forEach(h=>{n.fillRect(h,c*o,2,o)}),n.strokeStyle="#1a0d06",n.lineWidth=2,n.beginPath(),n.moveTo(0,c*o),n.lineTo(512,c*o),n.stroke()}}else if(r==="ceiling_tiles"){n.fillStyle="#dcd5ca",n.fillRect(0,0,512,512);for(let c=0;c<600;c++)n.fillStyle=Math.random()>.5?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.05)",n.fillRect(Math.random()*512,Math.random()*512,2,2);const o=256;for(let c=0;c<2;c++)for(let u=0;u<2;u++){const h=u*o,m=c*o;n.fillStyle="rgba(115, 87, 59, 0.15)",n.strokeStyle="rgba(92, 70, 48, 0.35)",n.lineWidth=1.5;for(let v=0;v<4;v++){const g=h+30+Math.random()*(o-60),S=m+30+Math.random()*(o-60),b=25+Math.random()*45;n.beginPath(),n.arc(g,S,b,0,Math.PI*2),n.fill(),n.beginPath(),n.arc(g,S,b+4,0,Math.PI*2),n.stroke()}n.fillStyle="rgba(40, 45, 35, 0.65)";for(let v=0;v<35;v++)n.fillRect(h+Math.random()*o,m+Math.random()*o,1.5,1.5);n.strokeStyle="rgba(50,50,50,0.25)",n.lineWidth=1,n.beginPath();let p=h+20,_=m+20;n.moveTo(p,_);for(let v=0;v<10;v++)p+=(Math.random()-.5)*15,_+=Math.random()*20,n.lineTo(p,_);n.stroke()}n.strokeStyle="#2d2e33",n.lineWidth=6,n.beginPath(),n.moveTo(0,0),n.lineTo(512,0),n.moveTo(0,256),n.lineTo(512,256),n.moveTo(0,512),n.lineTo(512,512),n.moveTo(0,0),n.lineTo(0,512),n.moveTo(256,0),n.lineTo(256,512),n.moveTo(512,0),n.lineTo(512,512),n.stroke(),n.fillStyle="rgba(92, 49, 14, 0.55)";for(let c=0;c<20;c++)n.fillRect(Math.random()*512,253+Math.random()*6,Math.random()*25,Math.random()*3),n.fillRect(253+Math.random()*6,Math.random()*512,Math.random()*3,Math.random()*25)}else if(r==="wall_tiles"){n.fillStyle="#6d8a6b",n.fillRect(0,0,512,512);const o=8,c=64;for(let u=0;u<o;u++)for(let h=0;h<o;h++){const m=h*c,p=u*c;if(n.fillStyle=(u+h)%2===0?"#728e6f":"#688566",u*h%5===0&&(n.fillStyle="#5c7859"),n.fillRect(m+1,p+1,c-2,c-2),n.strokeStyle="rgba(255,255,255,0.06)",n.strokeRect(m+2,p+2,c-4,c-4),Math.random()<.15&&(n.strokeStyle="rgba(20, 25, 20, 0.55)",n.lineWidth=1,n.beginPath(),n.moveTo(m+Math.random()*c,p+Math.random()*c),n.lineTo(m+Math.random()*c,p+Math.random()*c),n.stroke()),u===2&&h===4||u===6&&h===1||u===4&&h===6){n.fillStyle="#222520",n.fillRect(m+2,p+2,c-4,c-4),n.fillStyle="#444c41";for(let _=0;_<10;_++)n.fillRect(m+Math.random()*c,p+Math.random()*c,Math.random()*6,Math.random()*6)}}n.strokeStyle="#252924",n.lineWidth=2,n.beginPath();for(let u=0;u<=o;u++)n.moveTo(0,u*c),n.lineTo(512,u*c),n.moveTo(u*c,0),n.lineTo(u*c,512);n.stroke();for(let u=0;u<12;u++){const h=Math.random()*512,m=Math.random()*80,p=150+Math.random()*250,_=n.createLinearGradient(h,m,h,m+p);_.addColorStop(0,"rgba(21, 26, 19, 0.55)"),_.addColorStop(.3,"rgba(15, 20, 14, 0.35)"),_.addColorStop(1,"rgba(15, 20, 14, 0.0)"),n.fillStyle=_,n.fillRect(h-3,m,6,p)}n.strokeStyle="rgba(224, 215, 200, 0.35)",n.lineWidth=1.5,n.font="22px Arial",n.strokeText("WASH ME",80,200),n.strokeText("CLASS OF '95",280,390)}const a=new cx(e);return a.wrapS=pl,a.wrapT=pl,bh[r]=a,a},Fw=(r,e,n)=>{const a=r.stairDirection||(r.w>r.d?"W_E":"N_S"),o=r.climbHeight??r.h;if(a==="W_E"){const c=r.cx-r.w/2,u=Math.max(0,Math.min(1,(e-c)/r.w));return r.floorY+u*o}else if(a==="E_W"){const c=r.cx-r.w/2,u=Math.max(0,Math.min(1,(e-c)/r.w));return r.floorY+(1-u)*o}else if(a==="S_N"){const c=r.cz-r.d/2,u=Math.max(0,Math.min(1,(n-c)/r.d));return r.floorY+(1-u)*o}else{const c=r.cz-r.d/2,u=Math.max(0,Math.min(1,(n-c)/r.d));return r.floorY+u*o}},dn=[{id:"starter",name:"Starter Classroom",cx:17.5,cz:-40,w:75,d:60,floorY:0,h:10,color:"#3d5c3a",floorTexture:"wood_floor.png"},{id:"hallway",name:"Main Hallway",cx:20,cz:-3,w:80,d:14,floorY:0,h:10,color:"#323247"},{id:"science_lab",name:"Science Lab",cx:5,cz:26.5,w:30,d:45,floorY:0,h:10,color:"#4a3720"},{id:"library",name:"Library Shelf Area",cx:40,cz:26.5,w:36,d:45,floorY:0,h:10,color:"#453c1b",floorTexture:"wood_floor.png"},{id:"stairwell",name:"Stairwell Access",cx:68,cz:-3,w:16,d:10,floorY:0,h:22,climbHeight:11,color:"#542828",isStaircase:!0,stairDirection:"W_E"},{id:"gym",name:"Gymnasium (Floor 2)",cx:144,cz:15,w:80,d:60,floorY:11,h:18,color:"#20434f",carvedFloors:[]},{id:"cafeteria",name:"Cafeteria Wing",cx:-50,cz:-3,w:60,d:50,floorY:0,h:10,color:"#2a261f"},{id:"courtyard",name:"Overgrown Courtyard",cx:-63,cz:57,w:90,d:70,floorY:0,h:15,color:"#162e1a",disabledCeiling:!0,trapdoors:[{cx:-42,cz:-48.5,w:8,d:8},{cx:-42,cz:-31,w:12,d:6}]},{id:"underground_tunnel",name:"Utility Tunnel",cx:-103,cz:63.4,w:12,d:80,floorY:-12,h:9,color:"#111412",ceilingHoles:[{cx:-42,cz:-48.5,w:8,d:8},{cx:-42,cz:-31,w:12,d:6}]},{id:"the_vault",name:"Fallout Shelter Vault",cx:-103,cz:123.4,w:60,d:40,floorY:-12,h:9,color:"#282b29"},{id:"upper_hallway",name:"2nd Floor Hallway",cx:90,cz:-3,w:28,d:14,floorY:11,h:10,color:"#2a2d36",floorTexture:"wood_floor.png"},{id:"principal_office",name:"Principal's Office",cx:90,cz:127,w:56,d:56,floorY:11,h:10,color:"#362a2a"},{id:"upper_hallway_2",name:"2nd floor hallway 2",cx:90,cz:51.5,w:18,d:95,floorY:11,h:10,color:"#2a2d36",floorTexture:"wood_floor.png"},{id:"security_room",name:"Master Security & Breaker Room",cx:66,cz:51.5,w:30,d:35,floorY:11,h:10,color:"#1a212b"},{id:"upper_hallway_north",name:"2nd Floor North Connector",cx:150,cz:92,w:102,d:14,floorY:11,h:10,color:"#2a2d36",floorTexture:"wood_floor.png"},{id:"gym_north_hallway",name:"Gym North Connector",cx:144,cz:65,w:18,d:40,floorY:11,h:10,color:"#2a2d36",floorTexture:"wood_floor.png"},{id:"nurses_office",name:"Nurse's Office",cx:164,cz:112,w:32,d:26,floorY:11,h:10,color:"#1f3d3c",floorTexture:"wood_floor.png"},{id:"nurses_office_backroom",name:"Nurse's Office Backroom",cx:164,cz:135,w:24,d:20,floorY:11,h:10,color:"#19302f",floorTexture:"wood_floor.png"},{id:"stairwell_2",name:"Secondary Stairwell",cx:90,cz:-22,w:16,d:24,floorY:0,h:22,climbHeight:11,color:"#542828",isStaircase:!0,stairDirection:"S_N"},{id:"lower_hallway_south",name:"South Wing Hallway",cx:90,cz:-76.5,w:14,d:85,floorY:0,h:10,color:"#2a2d36",floorTexture:"wood_floor.png"},{id:"main_office",name:"Main Office",cx:90,cz:-139,w:50,d:40,floorY:0,h:10,color:"#1e293b",floorTexture:"wood_floor.png"}],ea={starter:[{side:"N",center:-17.5,width:6}],hallway:[{side:"S",center:-20,width:6},{side:"N",center:-15,width:6},{side:"N",center:20,width:6},{side:"E",center:0,width:6},{side:"W",center:0,width:14}],science_lab:[{side:"S",center:0,width:6}],library:[{side:"S",center:0,width:6}],stairwell:[{side:"W",center:0,width:6},{side:"E",center:0,width:10}],gym:[{side:"W",center:-18,width:10},{side:"S",center:0,width:10},{side:"N",center:0,width:10}],cafeteria:[{side:"E",center:0,width:14},{side:"N",center:0,width:12}],courtyard:[{side:"S",center:13,width:12}],boiler_room:[{side:"N",center:0,width:12}],underground_tunnel:[{side:"S",center:0,width:12},{side:"N",center:0,width:12}],the_vault:[{side:"S",center:0,width:12}],upper_hallway:[{side:"W",center:0,width:10},{side:"E",center:0,width:10},{side:"S",center:0,width:6},{side:"N",center:0,width:10}],principal_office:[{side:"S",center:0,width:8}],upper_hallway_2:[{side:"S",center:0,width:10},{side:"W",center:0,width:8},{side:"E",center:40.5,width:10},{side:"N",center:0,width:8}],security_room:[{side:"E",center:0,width:8}],upper_hallway_north:[{side:"W",center:0,width:10},{side:"N",center:12,width:10},{side:"N",center:14,width:6},{side:"S",center:-6,width:10}],gym_north_hallway:[{side:"N",center:0,width:10},{side:"S",center:0,width:10}],nurses_office:[{side:"S",center:0,width:6},{side:"N",center:0,width:6}],nurses_office_backroom:[{side:"S",center:0,width:6}],stairwell_2:[{side:"N",center:0,width:6},{side:"S",center:0,width:6}],lower_hallway_south:[{side:"N",center:0,width:6},{side:"S",center:0,width:6}],main_office:[{side:"N",center:0,width:6}]},Bv=[{roomId:"starter",side:"N",gapIndex:0,cost:750},{roomId:"hallway",side:"S",gapIndex:0,cost:750},{roomId:"hallway",side:"N",gapIndex:0,cost:750},{roomId:"hallway",side:"N",gapIndex:1,cost:750},{roomId:"hallway",side:"E",gapIndex:0,cost:750},{roomId:"hallway",side:"W",gapIndex:0,cost:1e3},{roomId:"science_lab",side:"S",gapIndex:0,cost:1e3},{roomId:"library",side:"S",gapIndex:0,cost:1e3},{roomId:"stairwell",side:"W",gapIndex:0,cost:750},{roomId:"stairwell",side:"E",gapIndex:0,cost:750},{roomId:"gym",side:"W",gapIndex:0,cost:1250},{roomId:"gym",side:"S",gapIndex:0,cost:1e3},{roomId:"gym",side:"N",gapIndex:0,cost:1e3},{roomId:"cafeteria",side:"E",gapIndex:0,cost:1250},{roomId:"cafeteria",side:"N",gapIndex:0,cost:1e3},{roomId:"courtyard",side:"S",gapIndex:0,cost:1250},{roomId:"underground_tunnel",side:"S",gapIndex:0,cost:1e3},{roomId:"underground_tunnel",side:"N",gapIndex:0,cost:1e3},{roomId:"the_vault",side:"S",gapIndex:0,cost:1500},{roomId:"upper_hallway",side:"W",gapIndex:0,cost:750},{roomId:"upper_hallway",side:"E",gapIndex:0,cost:750},{roomId:"upper_hallway",side:"S",gapIndex:0,cost:750},{roomId:"upper_hallway",side:"N",gapIndex:0,cost:750},{roomId:"principal_office",side:"S",gapIndex:0,cost:1e3},{roomId:"upper_hallway_2",side:"S",gapIndex:0,cost:750},{roomId:"upper_hallway_2",side:"W",gapIndex:0,cost:750},{roomId:"upper_hallway_2",side:"E",gapIndex:0,cost:750},{roomId:"upper_hallway_2",side:"N",gapIndex:0,cost:750},{roomId:"security_room",side:"E",gapIndex:0,cost:1e3},{roomId:"upper_hallway_north",side:"W",gapIndex:0,cost:750},{roomId:"upper_hallway_north",side:"N",gapIndex:0,cost:750},{roomId:"upper_hallway_north",side:"N",gapIndex:1,cost:750},{roomId:"upper_hallway_north",side:"S",gapIndex:0,cost:750},{roomId:"gym_north_hallway",side:"N",gapIndex:0,cost:750},{roomId:"gym_north_hallway",side:"S",gapIndex:0,cost:750},{roomId:"nurses_office",side:"S",gapIndex:0,cost:750},{roomId:"nurses_office",side:"N",gapIndex:0,cost:750},{roomId:"nurses_office_backroom",side:"S",gapIndex:0,cost:750},{roomId:"stairwell_2",side:"N",gapIndex:0,cost:750},{roomId:"stairwell_2",side:"S",gapIndex:0,cost:750},{roomId:"lower_hallway_south",side:"N",gapIndex:0,cost:750},{roomId:"lower_hallway_south",side:"S",gapIndex:0,cost:750},{roomId:"main_office",side:"N",gapIndex:0,cost:1e3}],Bw=[{id:"mystery_box_spawn",type:"interactable",roomId:"starter",cx:15,cz:-25,w:4,d:2,h:3,color:"#8b5a2b"},{id:"main_power_switch",type:"interactable",roomId:"security_room",cx:54,cz:51.5,w:4,d:1,h:4,color:"#8b0000"}],ul={wallThickness:.4,ceilingThickness:.15,doorHeight:7.5,floorThickness:.2},Gw=ul.doorHeight,ol=4.5,Hw=1;function Vw(){var Ne;const r=nt.useRef(null),e=nt.useRef(null),n=nt.useRef(null),a=nt.useRef(Math.PI),o=nt.useRef(0),c=nt.useRef(new ee(0,ol,-30)),u=nt.useRef(0),h=nt.useRef({}),m=nt.useRef(!0),p=nt.useRef(!1),[_,v]=nt.useState(!1),[g,S]=nt.useState(""),[b,R]=nt.useState(!1),[M,y]=nt.useState(!1),[D,z]=nt.useState([]),[O,k]=nt.useState(-1),I=nt.useRef(Rw()),[L,T]=nt.useState(!1),[U,H]=nt.useState([]),[B,q]=nt.useState(-1),de=nt.useRef(Uw()),[me,Y]=nt.useState(!1),[C,F]=nt.useState([]),[se,ge]=nt.useState(-1),we=nt.useRef(bx()),[P,ie]=nt.useState(null),[be,Oe]=nt.useState(!1),He=nt.useRef(null),[oe,De]=nt.useState(null),Re=nt.useRef(null),[$e,st]=nt.useState(!1),[rt,kt]=nt.useState(!1),[mt,Tt]=nt.useState(!1),[zt,gt]=nt.useState(3),[fn,Zt]=nt.useState(60),[An,K]=nt.useState(0),[nn,Et]=nt.useState(0),[Ft,ke]=nt.useState(""),[$t,N]=nt.useState({round:1,zombiesAlive:0,spawnStatus:"idle"}),E=nt.useRef(null),ae=nt.useRef(1),xe=()=>{const he=!mt;Tt(he),E.current&&(he?(ae.current=E.current.intensity,E.current.intensity=zt,console.log("[DEBUG LIGHTING] ON - Brightness:",zt)):(E.current.intensity=ae.current,console.log("[DEBUG LIGHTING] OFF")))};return nt.useEffect(()=>{const he=e.current,ye=r.current;if(!he||!ye)return;bw();const Z=dl().on("purchaseAttempt",Ie=>{console.log("[App] Door purchase attempt failed:",Ie.doorName),st(!0),setTimeout(()=>st(!1),2e3)});return()=>{Z()}},[]),nt.useEffect(()=>(window.runConnectivityAudit=()=>{const he=we.current;he.initialize(dn,ea,"starter");const ye=he.runAudit(),ce=he.getIssues();return F(ce),ie(ye),Y(!0),ge(-1),console.log("=== MAP CONNECTIVITY AUDIT REPORT ==="),console.log(`Total Rooms Scanned: ${dn.length}`),console.log(`Total Connected Rooms: ${ye.totalConnectedRooms}`),console.log(`Disconnected Rooms: ${ye.disconnectedRooms.length}`),ye.disconnectedRooms.length>0&&ye.disconnectedRooms.forEach(Z=>console.log(`  - ${Z}`)),console.log(`Void Exposures: ${ye.voidExposures.length}`),console.log(`Missing Walls: ${ye.missingWalls.length}`),console.log(`Missing Ceilings: ${ye.missingCeilings.length}`),console.log(`Navigation Breaks: ${ye.navigationBreaks.length}`),console.log(`Total Issues: ${ye.totalIssues}`),console.log(`Scan Duration: ${ye.scanDurationMs.toFixed(2)}ms`),console.log(`=====================================
`),ce.length>0&&(console.log(`=== DETAILED ISSUE REPORTS ===
`),ce.forEach((Z,Ie)=>{var Ye;console.log(`--- Issue #${Ie+1} ---`),console.log(`[${Z.type.toUpperCase()}]`),console.log(`Room: ${Z.roomName}`),console.log(`Location: [${Z.location[0].toFixed(1)}, ${Z.location[1].toFixed(1)}, ${Z.location[2].toFixed(1)}]`),console.log(`Severity: ${Z.severity.toUpperCase()}`),console.log(`Description: ${Z.description}`),console.log(`Details: ${Z.details}`),Z.roomBounds&&console.log(`Room Bounds: { x: ${Z.roomBounds.x}, z: ${Z.roomBounds.z}, w: ${Z.roomBounds.w}, d: ${Z.roomBounds.d}, h: ${Z.roomBounds.h}, floorY: ${Z.roomBounds.floorY} }`),Z.nearestConnectedRoom&&(console.log(`Nearest Room: ${Z.nearestConnectedRoom}`),console.log(`Distance: ${(Ye=Z.distanceToNearestRoom)==null?void 0:Ye.toFixed(2)} units`)),Z.reasoning&&console.log(`Reason: ${Z.reasoning}`),Z.potentialCauses&&Z.potentialCauses.length>0&&(console.log("Potential Causes:"),Z.potentialCauses.forEach(We=>console.log(`  • ${We}`))),Z.confidence&&console.log(`Confidence: ${Z.confidence}`),Z.isIntentional!==void 0&&console.log(`Intentional: ${Z.isIntentional?"YES":"NO"}`),console.log("")})),console.log("====================================="),console.log("Use teleportToAuditIssue(index) to navigate to specific issues."),console.log("Enable DEBUG_CONNECTIVITY visualization with: window.DEBUG_CONNECTIVITY = true"),ye},window.teleportToAuditIssue=he=>{const ye=we.current.getIssues();if(ye[he]){const ce=ye[he];c.current.set(ce.location[0],ce.location[1]+2,ce.location[2]+5),a.current=Math.PI,p.current=!0,ge(he),Y(!0),console.log(`Teleported to issue #${he+1}: ${ce.type} in ${ce.roomName}`)}else console.error(`Issue index ${he} not found. Total issues: ${ye.length}`)},()=>{delete window.runConnectivityAudit,delete window.teleportToAuditIssue}),[]),nt.useEffect(()=>{console.log("DOOR EFFECT RUNNING");const he=e.current,ye=r.current;if(!he||!ye)return;const ce=new vw({canvas:he,antialias:!0});ce.setPixelRatio(window.devicePixelRatio),ce.shadowMap.enabled=!0,ce.shadowMap.type=Gv;const Z=new ZM;Z.background=new Ct(657930),Z.fog=new Op(657930,20,120);const Ie=new gi(75,ye.clientWidth/ye.clientHeight,.1,500);Ie.position.copy(c.current),n.current=Ie;const Ye=Aw("default",Z),We=new dv,Ve=zw(Z,Ie,We);He.current=Ve,window.toggleGeometryInspector=()=>{Ve.toggle(),Oe(Ve.isActive()),console.log("[GeometryInspector] Toggled:",Ve.isActive()?"ON":"OFF")},window.enableGeometryInspector=()=>{Ve.enable(),Oe(!0)},window.disableGeometryInspector=()=>{Ve.disable(),Oe(!1)};const dt=new yE(2236962,1);Z.add(dt),E.current=dt;const ht={starter:3820842,hallway:1710638,science_lab:2760720,library:2760720,gym:1056816,cafeteria:1709328,courtyard:662026,underground_tunnel:329736,the_vault:658442,stairwell:1705992,stairwell_2:1705992,upper_hallway:1315872,upper_hallway_2:1315872,upper_hallway_north:1315872,principal_office:1708048,security_room:526864,nurses_office:1712160,nurses_office_backroom:1185816,gym_north_hallway:1054752,lower_hallway_south:1315872,main_office:922912};dn.forEach(Q=>{const Je=new xE(ht[Q.id]??2236962,2.5,Math.max(Q.w,Q.d)*1.2);Je.position.set(Q.cx,Q.floorY+Q.h*.75,Q.cz),Z.add(Je)}),window.toggleDebugLighting=xe,window.setDebugLightingBrightness=Q=>{gt(Q),mt&&E.current&&(E.current.intensity=Q),console.log("[DEBUG LIGHTING] Brightness set to:",Q)};const pt=[],X=new Map,Be={starter_N_0:"starter_classroom_door",science_lab_S_0:"hallway_science_lab_door",library_S_0:"hallway_library_door",cafeteria_E_0:"hallway_cafeteria_door"};Bv.forEach((Q,Je)=>{const Fe=(ea[Q.roomId]||[])[Q.gapIndex];if(!Fe)return;const A=dn.find(Se=>Se.id===Q.roomId);if(!A)return;const V=`${Q.roomId}_${Q.side}_${Q.gapIndex}`,W=Be[V];if(!W)return;let J=0,$=0;const Le=Fe.width,Ge=Gw,Ce=.3;Fe.side==="N"?(J=Fe.center,$=A.d/2):Fe.side==="S"?(J=Fe.center,$=-A.d/2):Fe.side==="E"?(J=A.w/2,$=Fe.center):(J=-A.w/2,$=Fe.center);const ze=A.cx+J,Ae=A.cz+$,Pe={id:W,type:"gap",axis:Fe.side==="N"||Fe.side==="S"?"z":"x",x:ze,z:Ae,w:Le,h:Ge,d:Ce,cost:Q.cost,unlocked:!1,name:V,roomId:Q.roomId,side:Fe.side,isOpen:!1,isPurchased:!1,doorManagerId:W};pt.push(Pe)});const _e=new vs({color:4007959});new vs({color:2759183}),pt.forEach(Q=>{const Je=Q.d||.3,Ue=new hn(Q.w,Q.h,Je),Fe=new tn(Ue,_e);Fe.position.set(Q.x,Q.h/2,Q.z),Fe.rotation.y=Q.axis==="x"?Math.PI/2:0,Fe.castShadow=!0,Fe.receiveShadow=!0,Z.add(Fe),Q.mesh=Fe;const A=new hn(Q.w,Q.h,Je+.1),V=new Tu({visible:!1}),W=new tn(A,V);W.position.copy(Fe.position),W.rotation.copy(Fe.rotation),Z.add(W),Q.collider=W,X.set(W,Q)});const je=ul.wallThickness,Xe=ul.ceilingThickness,Te=ul.floorThickness,et=ul.doorHeight,lt=new vs({map:Th("wall_tiles")}),an=new vs({map:Th("wood_floor")}),Pt=new vs({map:Th("ceiling_tiles")}),$n=Q=>{const Je=ea[Q.id]||[],Ue=parseInt(Q.color.replace("#",""),16),Fe=new vs({color:Ue}),A=Q.floorTexture==="wood_floor.png"?an:Fe;if(!Q.disabledFloor)if(Q.carvedFloors&&Q.carvedFloors.length>0){const W=Q.cz-Q.d/2,J=Q.cz+Q.d/2,$=Q.cx-Q.w/2,Le=Q.cx+Q.w/2,Ge=Q.trapdoors||[];if(Ge.length>0){const Ce=Ge.map(Ae=>({xMin:Ae.cx-Ae.w/2,xMax:Ae.cx+Ae.w/2,zMin:Ae.cz-Ae.d/2,zMax:Ae.cz+Ae.d/2}));let ze=W;for(;ze<J;){let Ae=J;for(const fe of Ce)fe.zMin>ze&&fe.zMin<Ae&&(Ae=fe.zMin),fe.zMax>ze&&fe.zMax<Ae&&fe.zMax>ze;const Pe=Ae-ze;if(Pe>.1){const fe=Ce.filter(qe=>qe.zMin<=Ae&&qe.zMax>=ze);if(fe.length===0){const qe=new tn(new hn(Q.w,Te,Pe),A);qe.position.set(Q.cx,Q.floorY-Te/2,ze+Pe/2),qe.receiveShadow=!0,Z.add(qe)}else{let qe=$;const ut=[...fe].sort((Qe,ot)=>Qe.xMin-ot.xMin);for(const Qe of ut){if(Qe.xMin>qe+.1){const ot=Qe.xMin-qe,yt=new tn(new hn(ot,Te,Pe),A);yt.position.set(qe+ot/2,Q.floorY-Te/2,ze+Pe/2),yt.receiveShadow=!0,Z.add(yt)}qe=Math.max(qe,Qe.xMax)}if(qe<Le-.1){const Qe=Le-qe,ot=new tn(new hn(Qe,Te,Pe),A);ot.position.set(qe+Qe/2,Q.floorY-Te/2,ze+Pe/2),ot.receiveShadow=!0,Z.add(ot)}}}let Se=J;for(const fe of Ce)fe.zMax>ze&&fe.zMax<Se&&(Se=fe.zMax);ze=Se}}else{const Ce=new tn(new hn(Q.w,Te,Q.d),A);Ce.position.set(Q.cx,Q.floorY-Te/2,Q.cz),Ce.receiveShadow=!0,Z.add(Ce)}}else{const W=new tn(new hn(Q.w,Te,Q.d),A);W.position.set(Q.cx,Q.floorY-Te/2,Q.cz),W.receiveShadow=!0,Z.add(W)}if(!Q.disabledCeiling){const W=new tn(new hn(Q.w,Xe,Q.d),Pt);W.position.set(Q.cx,Q.floorY+Q.h+Xe/2,Q.cz),Z.add(W)}if([{side:"N",px:Q.cx,pz:Q.cz+Q.d/2,len:Q.w,rotY:0},{side:"S",px:Q.cx,pz:Q.cz-Q.d/2,len:Q.w,rotY:0},{side:"E",px:Q.cx+Q.w/2,pz:Q.cz,len:Q.d,rotY:Math.PI/2},{side:"W",px:Q.cx-Q.w/2,pz:Q.cz,len:Q.d,rotY:Math.PI/2}].forEach(({side:W,px:J,pz:$,len:Le,rotY:Ge})=>{var Ae;if((Ae=Q.disabledWalls)!=null&&Ae.includes(W))return;const Ce=Je.filter(Pe=>Pe.side===W),ze=(Pe,Se)=>{const fe=Se-Pe;if(fe<=.01)return;const qe=(Pe+Se)/2-Le/2,ut=Math.min(et,Q.h),Qe=new tn(new hn(fe,ut,je),lt);if(Qe.rotation.y=Ge,Ge===0?Qe.position.set(J+qe,Q.floorY+ut/2,$):Qe.position.set(J,Q.floorY+ut/2,$+qe),Qe.castShadow=!0,Qe.receiveShadow=!0,Z.add(Qe),Q.h>et){const ot=Q.h-et,yt=new tn(new hn(fe,ot,je),lt);yt.rotation.y=Ge,Ge===0?yt.position.set(J+qe,Q.floorY+et+ot/2,$):yt.position.set(J,Q.floorY+et+ot/2,$+qe),Z.add(yt)}};if(Ce.length===0)ze(0,Le);else{const Pe=[...Ce].sort((fe,qe)=>fe.center-fe.width/2-(qe.center-qe.width/2));let Se=0;Pe.forEach(fe=>{const qe=Math.max(0,fe.center-fe.width/2+Le/2),ut=Math.min(Le,fe.center+fe.width/2+Le/2);ze(Se,qe),Se=ut}),ze(Se,Le)}}),Q.isStaircase){const W=new tn(new hn(Q.w,.3,Q.d),new vs({color:5910560}));W.position.set(Q.cx,Q.floorY+(Q.climbHeight??Q.h)/2,Q.cz);const J=Q.climbHeight??Q.h,$=Q.stairDirection||(Q.w>Q.d?"W_E":"N_S");$==="W_E"||$==="E_W"?W.rotation.z=($==="W_E"?1:-1)*Math.atan2(J,Q.w):W.rotation.x=($==="N_S"?1:-1)*Math.atan2(J,Q.d),Z.add(W)}};dn.forEach(Q=>$n(Q)),Bw.forEach(Q=>{const Je=dn.find(Fe=>Fe.id===Q.roomId),Ue=new tn(new hn(Q.w,Q.h,Q.d),new vs({color:parseInt(Q.color.replace("#",""),16)}));Ue.position.set(Q.cx,((Je==null?void 0:Je.floorY)??0)+Q.h/2,Q.cz),Z.add(Ue)});const Bn=()=>{const Q=ye.clientWidth,Je=ye.clientHeight;ce.setSize(Q,Je),Ie.aspect=Q/Je,Ie.updateProjectionMatrix()};Bn();const Wi=new ResizeObserver(Bn);Wi.observe(ye);const Ba=Q=>{document.pointerLockElement===he&&(a.current-=Q.movementX*.002,o.current-=Q.movementY*.002,o.current=Math.max(-Math.PI/2+.05,Math.min(Math.PI/2-.05,o.current)))},Ga=()=>{document.pointerLockElement!==he&&(he==null||he.requestPointerLock())},Ha=()=>{v(document.pointerLockElement===he)};he.addEventListener("click",Ga),document.addEventListener("mousemove",Ba),document.addEventListener("pointerlockchange",Ha);const wn=Q=>{if(h.current[Q.code]=!0,Q.code==="KeyV"&&(p.current=!p.current),Q.code==="F1"&&(Q.preventDefault(),kt(Je=>!Je)),Q.code==="F2"&&(Q.preventDefault(),xe()),Q.code==="F4"&&(Q.preventDefault(),He.current&&(He.current.toggle(),Oe(He.current.isActive()),console.log("[GeometryInspector] Toggled:",He.current.isActive()?"ON":"OFF"),console.log("[GeometryInspector] Call window.inspectGeometry() to print all meshes within 20 units"))),Q.code==="F7"){Q.preventDefault();const Je=de.current;Je.initialize(dn,ea);const Ue=Je.runAudit();H(Ue.issues),T(Fe=>!Fe),q(-1),console.log(`[FloorIntegrityAudit] Debug mode ${L?"disabled":"enabled"}: ${Ue.totalIssuesFound} issues found`)}if(Q.code==="F8"&&(Q.preventDefault(),U.length>0)){const Je=(B+1)%U.length,Ue=U[Je];c.current.set(Ue.location[0],Ue.location[1]+2,Ue.location[2]+5),a.current=Math.PI,q(Je),console.log(`[FloorIntegrityAudit] Teleported to issue ${Je+1}/${U.length}: ${Ue.cause} in ${Ue.roomName}`)}if(Q.code==="F6"){Q.preventDefault();const Je=we.current;Je.initialize(dn,ea,"starter");const Ue=Je.runAudit(),Fe=Je.getIssues();F(Fe),ie(Ue),Y(!0),ge(-1),console.log(`[MapConnectivityAudit] Audit complete: ${Ue.totalIssues} issues found`),console.log(`  - Connected Rooms: ${Ue.totalConnectedRooms}`),console.log(`  - Disconnected Rooms: ${Ue.disconnectedRooms.length}`),console.log(`  - Void Exposures: ${Ue.voidExposures.length}`),console.log(`  - Missing Walls: ${Ue.missingWalls.length}`),console.log(`  - Missing Ceilings: ${Ue.missingCeilings.length}`),console.log(`  - Navigation Breaks: ${Ue.navigationBreaks.length}`)}if(Q.code==="F5"&&(Q.preventDefault(),C.length>0)){const Je=(se+1)%C.length,Ue=C[Je];c.current.set(Ue.location[0],Ue.location[1]+2,Ue.location[2]+5),a.current=Math.PI,ge(Je),console.log(`[MapConnectivityAudit] Teleported to issue ${Je+1}/${C.length}: ${Ue.description} in ${Ue.roomName}`)}if(Q.code==="F9"){Q.preventDefault();const Je=I.current,Ue=c.current.x,Fe=c.current.z;let A;for(const W of dn){const J=W.w/2,$=W.d/2;if(Ue>=W.cx-J&&Ue<=W.cx+J&&Fe>=W.cz-$&&Fe<=W.cz+$){A=W.name;break}}Je.setData(dn,ea,pt),Je.enable(A);const V=Je.getIssues();z(V),y(!0),k(-1),console.log(`[RoomSealValidator] Scan complete: ${V.length} issues found${A?` in ${A}`:""}`)}if(Q.code==="F10"){Q.preventDefault();const Ue=I.current.getIssues();if(Ue.length>0){const Fe=(O+1)%Ue.length,A=Ue[Fe];c.current.set(A.location[0],A.location[1]+2,A.location[2]+5),a.current=Math.PI,k(Fe),console.log(`[RoomSealValidator] Teleported to issue ${Fe+1}/${Ue.length}: ${A.description} in ${A.roomName}`)}}if(Q.code==="F11"){Q.preventDefault();const Je=I.current;Je.setData(dn,ea,pt);const Ue=Je.toggle();if(y(Ue),Ue){const Fe=Je.getIssues();z(Fe)}else z([]),k(-1);console.log(`[MapValidator] Validation mode ${Ue?"enabled":"disabled"}`)}},on=Q=>{h.current[Q.code]=!1};window.addEventListener("keydown",wn),window.addEventListener("keyup",on);const vn=(Q,Je,Ue)=>{console.log("[ROOM DETECTOR START]"),console.log("Player Position:",{x:Q,y:Ue,z:Je}),console.log("Room Count:",dn.length);for(const Fe of dn){const A=Fe.cx-Fe.w/2,V=Fe.cx+Fe.w/2,W=Fe.cz-Fe.d/2,J=Fe.cz+Fe.d/2,$=Ue-1.6,Le=Fe.floorY-1,Ge=Fe.floorY+Fe.h+2,Ce=Q>=A&&Q<=V,ze=Je>=W&&Je<=J,Ae=$>=Le&&$<=Ge;if(console.log({roomName:Fe.name,roomCenter:[Fe.cx,Fe.cz],roomWidth:Fe.w,roomDepth:Fe.d,floorY:Fe.floorY,playerPosition:{x:Q,y:Ue,z:Je},playerFeetY:$,bounds:{x:[A,V],z:[W,J],floorY:Fe.floorY},insideX:Ce,insideZ:ze,insideY:Ae,insideRoom:Ce&&ze&&Ae}),Ce&&ze&&Ae)return console.log("[ROOM DETECTOR] Found matching room:",Fe.name),Fe}console.log("[ROOM DETECTOR] No matching room found")},Kn=(Q,Je,Ue)=>{const Fe=pt.find(A=>A.roomId===Q&&A.side===Je&&Bv.findIndex(V=>V.roomId===Q&&V.side===Je&&V.gapIndex===Ue)>=0);return Fe?Fe.isPurchased?!!Fe.isOpen:!1:!0},Xi=(Q,Je)=>{const Ue=Q.clone().add(Je),Fe=vn(Q.x,Q.z,Q.y);if(!Fe)return Ue;const A=Fe.cx-Fe.w/2,V=Fe.cx+Fe.w/2,W=Fe.cz-Fe.d/2,J=Fe.cz+Fe.d/2;let $=Ue.x,Le=Ue.z;const Ge=Hw,Ce=ea[Fe.id]||[];if(Le-Ge<W){const ze=Ce.filter(Se=>Se.side==="S"),Ae=Q.x-Fe.cx;if(!ze.some(Se=>Ae>=Se.center-Se.width/2&&Ae<=Se.center+Se.width/2))Le=W+Ge;else{const Se=Ce.findIndex(fe=>fe.side==="S"&&Ae>=fe.center-fe.width/2&&Ae<=fe.center+fe.width/2);Se>=0&&pt.find(qe=>qe.roomId===Fe.id&&qe.side==="S")&&!Kn(Fe.id,"S",Se)&&(Le=W+Ge)}}if(Le+Ge>J){const ze=Ce.filter(Se=>Se.side==="N"),Ae=Q.x-Fe.cx;if(!ze.some(Se=>Ae>=Se.center-Se.width/2&&Ae<=Se.center+Se.width/2))Le=J-Ge;else{const Se=Ce.findIndex(fe=>fe.side==="N"&&Ae>=fe.center-fe.width/2&&Ae<=fe.center+fe.width/2);Se>=0&&pt.find(qe=>qe.roomId===Fe.id&&qe.side==="N")&&!Kn(Fe.id,"N",Se)&&(Le=J-Ge)}}if($-Ge<A){const ze=Ce.filter(Se=>Se.side==="W"),Ae=Q.z-Fe.cz;if(!ze.some(Se=>Ae>=Se.center-Se.width/2&&Ae<=Se.center+Se.width/2))$=A+Ge;else{const Se=Ce.findIndex(fe=>fe.side==="W"&&Ae>=fe.center-fe.width/2&&Ae<=fe.center+fe.width/2);Se>=0&&pt.find(qe=>qe.roomId===Fe.id&&qe.side==="W")&&!Kn(Fe.id,"W",Se)&&($=A+Ge)}}if($+Ge>V){const ze=Ce.filter(Se=>Se.side==="E"),Ae=Q.z-Fe.cz;if(!ze.some(Se=>Ae>=Se.center-Se.width/2&&Ae<=Se.center+Se.width/2))$=V-Ge;else{const Se=Ce.findIndex(fe=>fe.side==="E"&&Ae>=fe.center-fe.width/2&&Ae<=fe.center+fe.width/2);Se>=0&&pt.find(qe=>qe.roomId===Fe.id&&qe.side==="E")&&!Kn(Fe.id,"E",Se)&&($=V-Ge)}}return new ee($,Ue.y,Le)};let Ts=performance.now(),ca;const Va=new dv,Yi=8;let ua=null;const Di=()=>{ca=requestAnimationFrame(Di);const Q=performance.now(),Je=Math.min((Q-Ts)/1e3,.05);Ts=Q;const Ue=h.current,Fe=p.current?20:10,A=new ee(-Math.sin(a.current),0,-Math.cos(a.current)),V=new ee(Math.cos(a.current),0,-Math.sin(a.current));let W=new ee;if((Ue.KeyW||Ue.ArrowUp)&&W.add(A),(Ue.KeyS||Ue.ArrowDown)&&W.sub(A),(Ue.KeyD||Ue.ArrowRight)&&W.add(V),(Ue.KeyA||Ue.ArrowLeft)&&W.sub(V),W.lengthSq()>0&&W.normalize().multiplyScalar(Fe*Je),p.current)Ue.Space&&(W.y+=Fe*Je),(Ue.ShiftLeft||Ue.ShiftRight)&&(W.y-=Fe*Je),c.current.add(W);else{u.current-=30*Je;const Pe=vn(c.current.x,c.current.z,c.current.y);let Se=Pe?Pe.isStaircase?Fw(Pe,c.current.x,c.current.z)+ol:Pe.floorY+ol:ol;c.current.y+=u.current*Je,c.current.y<=Se?(c.current.y=Se,u.current=0,m.current=!0):m.current=!1,Ue.Space&&m.current&&(u.current=10,m.current=!1);const fe=Xi(c.current,W);c.current.x=fe.x,c.current.z=fe.z}if(Ie.position.copy(c.current),Ie.rotation.order="YXZ",Ie.rotation.y=a.current,Ie.rotation.x=o.current,M&&I.current.updateHighlights(Q/1e3),window.DEBUG_FLOORS===!0){if(console.log("DEBUG WIREFRAMES ACTIVE"),console.log("ROOM COUNT",dn.length),dn.forEach((fe,qe)=>{qe<5&&console.log("WIREFRAME ROOM",fe.id,fe.name,fe.cx,fe.cz,fe.w,fe.d,fe.floorY)}),!Re.current){const fe=new hn(4,4,4),qe=new yl(fe),ut=new no({color:16711680,linewidth:2}),Qe=new xl(qe,ut);Qe.position.set(0,5,0),Qe.renderOrder=999,Qe.frustumCulled=!1,Z.add(Qe),Re.current=Qe,console.log("[DEBUG] Red wireframe box created at (0, 5, 0)")}const Pe="__ROOM_DEBUG_WIREFRAMES__";let Se=window[Pe]||[];Se.forEach(fe=>{Z.remove(fe),fe.geometry.dispose(),fe.material.dispose()}),Se=[],dn.forEach(fe=>{const qe=new hn(fe.w,1,fe.d),ut=new yl(qe),Qe=new no({color:16711935}),ot=new xl(ut,Qe);ot.position.set(fe.cx,fe.floorY+.5,fe.cz),ot.renderOrder=998,ot.frustumCulled=!1,Z.add(ot),Se.push(ot)}),window[Pe]=Se,console.log("WIREFRAMES CREATED",Se.length)}else{Re.current&&(Re.current.geometry.dispose(),Re.current.material.dispose(),Z.remove(Re.current),Re.current=null,console.log("[DEBUG] Red wireframe box removed"));const Pe="__ROOM_DEBUG_WIREFRAMES__";(window[Pe]||[]).forEach(fe=>{Z.remove(fe),fe.geometry.dispose(),fe.material.dispose()}),window[Pe]=[]}if(L&&Ow(Z,Q/1e3),be&&He.current){const Pe=He.current,Se=Pe.inspectAtCrosshair(),fe=[];Z.traverse(Qe=>{Qe instanceof tn&&Qe!==Pe.highlightMesh&&Qe!==Pe.wireframeMesh&&!Qe.name.includes("debug")&&!Qe.name.includes("highlight")&&fe.push(Qe)}),console.log("[DIAGNOSTIC] Geometry Inspector Scene Mesh Count:",fe.length),console.log("[DIAGNOSTIC] Connectivity Audit Room Count:",dn.length),console.log("[DIAGNOSTIC] Connectivity Issues Array Length:",C.length);const qe=fe.map(Qe=>Qe.name||Qe.uuid).slice(0,10),ut=dn.map(Qe=>Qe.id);if(console.log("[DIAGNOSTIC] Sample Scene Mesh Names:",qe),console.log("[DIAGNOSTIC] Room IDs from INITIAL_ROOMS:",ut.slice(0,10)),console.log("[DIAGNOSTIC] Total Issues Before Rendering:",C.length),C.length>0&&(console.log("[DIAGNOSTIC] Issue Marker Coordinates:"),C.forEach((Qe,ot)=>{ot<5&&console.log(`  #${ot+1} ${Qe.type}: [${Qe.location[0].toFixed(1)}, ${Qe.location[1].toFixed(1)}, ${Qe.location[2].toFixed(1)}] in ${Qe.roomName}`)})),Se){const Qe=new Es().setFromObject(Se),ot=new ee,yt=new ee;Qe.getSize(ot),Qe.getCenter(yt);const Ke=Ie.position.distanceTo(yt);Pe.updateHighlight(Se,Ke);const pn=Pe.getInspectedMesh();pn&&De({meshName:pn.meshName,roomId:pn.roomId,wallId:pn.wallId,floorId:pn.floorId})}else Pe.updateHighlight(null,0),De(null)}Va.setFromCamera(new Mt(0,0),Ie);const J=Array.from(X.keys()),$=Va.intersectObjects(J);if(ua=null,$.length>0&&$[0].distance<=Yi){const Pe=$[0].object,Se=X.get(Pe);Se?(ua=Se,Se.isPurchased?Se.isOpen?(S(""),R(!1)):(S("Press E to open"),R(!0)):(S(`Press E to buy ${Se.name} (${Se.cost})`),R(!0))):(S(""),R(!1))}else S(""),R(!1);const Le=dl(),Ge={x:c.current.x,y:c.current.y,z:c.current.z},Ce=new ee(-Math.sin(a.current),0,-Math.cos(a.current));Le.updateInteraction(Ge,Ce),ce.render(Z,Ie);const ze=window.__debugFrameCount||0,Ae=window.__debugLastTime||Q;if(window.__debugFrameCount=ze+1,Q-Ae>=500){const Pe=Math.round((ze+1)*1e3/(Q-Ae));Zt(Pe),window.__debugFrameCount=0,window.__debugLastTime=Q;let Se=0;Z.traverse(ut=>{ut instanceof tn&&Se++}),K(Se),Et(ce.info.render.calls);const fe=vn(c.current.x,c.current.z,c.current.y),qe=(fe==null?void 0:fe.name)||"None";if(ke(qe),window.__debugFrameCount%60===0&&(console.log(`[ROOM DEBUG] Pos: (${c.current.x.toFixed(1)}, ${c.current.y.toFixed(1)}, ${c.current.z.toFixed(1)}) -> Room: ${qe}`),qe==="None"&&dn.length>0)){const ut=dn[0];console.log(`[ROOM DEBUG] First room '${ut.name}' bounds: X[${ut.cx-ut.w/2}, ${ut.cx+ut.w/2}] Z[${ut.cz-ut.d/2}, ${ut.cz+ut.d/2}]`)}}};Di();const Ni=Q=>{const Je=document.pointerLockElement!==null;if(console.log("KEY EVENT",Q.code,"isPointerLocked =",Je),console.log("[DEBUG] Key event received:",Q.key),Q.code==="KeyE"&&Je){console.log("KEY_E_TEST"),console.log("=== [E] key pressed ==="),console.log("=== Key handler entered ===");const Ue=ua;if(!Ue){console.log("Current door found: NO (null)");return}console.log("Current door found: YES"),console.log("Door ID:",Ue.id),console.log("purchaseDoor() called");const Fe=dl(),A="player1",V=Ue.doorManagerId||Ue.id,W=Fe.purchaseDoor(V,A);console.log("purchaseDoor() result:",W),console.log("Result.success:",W.success),W.success?(console.log("[App] Door purchased successfully:",Ue.name),console.log("DoorRenderer update called"),Ue.mesh&&(Ue.mesh.visible=!1,console.log(`[App] Door mesh hidden: ${Ue.id}`)),Ue.collider&&(Ue.collider.visible=!1,console.log(`[App] Door collider hidden: ${Ue.id}`)),Ue.isOpen=!0,Ue.isPurchased=!0):(console.log("[App] Door purchase failed:",W.reason),W.reason==="INSUFFICIENT_POINTS"&&(st(!0),setTimeout(()=>st(!1),2e3)))}};return window.addEventListener("keydown",Ni),()=>{cancelAnimationFrame(ca),Wi.disconnect(),he.removeEventListener("click",Ga),document.removeEventListener("mousemove",Ba),document.removeEventListener("pointerlockchange",Ha),window.removeEventListener("keydown",wn),window.removeEventListener("keyup",on),window.removeEventListener("keydown",Ni),Ye.destroy(),Re.current&&(Re.current.geometry.dispose(),Re.current.material.dispose(),Z.remove(Re.current),Re.current=null),ce.dispose()}},[]),ne.jsxs("div",{className:"relative w-screen h-screen bg-black overflow-hidden select-none",children:[ne.jsx("div",{className:"absolute top-4 right-4 z-20",children:ne.jsx(Dw,{playerId:"player1"})}),$e&&ne.jsx("div",{className:"absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50",children:ne.jsx("div",{className:"bg-red-900/90 border-2 border-red-500 px-6 py-3 rounded-lg text-lg font-mono tracking-wide text-red-200 whitespace-nowrap animate-pulse",children:"NOT ENOUGH POINTS"})}),ne.jsx(Pw,{data:{fps:fn,meshCount:An,drawCalls:nn,playerPos:c.current,playerRot:((Ne=n.current)==null?void 0:Ne.rotation)||new ki(0,0,0),currentRoom:Ft,noclip:p.current,round:$t.round,zombiesAlive:$t.zombiesAlive,spawnStatus:$t.spawnStatus,connectivityIssues:C,floorIntegrityIssues:U,debugLightingEnabled:mt,debugLightingBrightness:zt,roomDetectorStatus:{playerPosition:{x:c.current.x,y:c.current.y,z:c.current.z},roomCount:dn.length,closestRoom:null,closestDistance:0,currentRoom:Ft,rejectionReason:Ft==="None"?"Player position does not fall within any room bounds. Check Y height (floorY) or X/Z coordinates.":null}},onToggleNoclip:()=>{p.current=!p.current},onRunConnectivity:()=>{const he=we.current;he.initialize(dn,ea,"starter");const ye=he.runAudit(),ce=he.getIssues();F(ce),ie(ye),Y(!0),ge(-1)},onRunFloorAudit:()=>{const he=de.current;he.initialize(dn,ea);const ye=he.runAudit();H(ye.issues),T(!0),q(-1)},onTeleportToSpawn:()=>{c.current.set(17.5,ol,-10),a.current=Math.PI,console.log("[DebugOverlay] Teleported to starter room spawn")},onTeleportToIssue:he=>{c.current.set(he.location[0],he.location[1]+2,he.location[2]+5),a.current=Math.PI,p.current=!0,console.log(`[DebugOverlay] Teleported to issue: ${he.type} in ${he.roomName}`)},onToggleDebugLighting:xe,onSetDebugLightingBrightness:he=>{gt(he),mt&&E.current&&(E.current.intensity=he)}}),ne.jsx("div",{ref:r,className:"absolute inset-0",children:ne.jsx("canvas",{ref:e,className:"block w-full h-full"})}),_&&ne.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10",children:ne.jsx("div",{className:`w-1.5 h-1.5 rounded-full border border-white/60 ${be?"bg-yellow-400":"bg-emerald-400"}`})}),_&&be&&oe&&ne.jsx("div",{className:"absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10",children:ne.jsxs("div",{className:"bg-black/80 border border-yellow-500/70 px-4 py-3 rounded-lg text-xs font-mono tracking-wide text-yellow-300 whitespace-nowrap",children:[ne.jsx("div",{className:"font-bold text-yellow-200 mb-1",children:"GEOMETRY INSPECTOR"}),ne.jsxs("div",{children:["Mesh: ",ne.jsx("span",{className:"text-white",children:oe.meshName})]}),oe.roomId&&ne.jsxs("div",{children:["Room ID: ",ne.jsx("span",{className:"text-emerald-400",children:oe.roomId})]}),oe.wallId&&ne.jsxs("div",{children:["Wall ID: ",ne.jsx("span",{className:"text-blue-400",children:oe.wallId})]}),oe.floorId&&ne.jsxs("div",{children:["Floor ID: ",ne.jsx("span",{className:"text-purple-400",children:oe.floorId})]}),ne.jsx("div",{className:"mt-2 text-yellow-500/70 text-[10px]",children:"Press F4 to toggle · window.inspectGeometry() for details"})]})}),_&&b&&g&&ne.jsx("div",{className:"absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10",children:ne.jsx("div",{className:"bg-black/70 border border-emerald-500/50 px-4 py-2 rounded-lg text-sm font-mono tracking-wide text-emerald-400 whitespace-nowrap",children:g})}),!_&&ne.jsx("div",{className:"absolute inset-x-0 bottom-8 flex justify-center pointer-events-none z-10",children:ne.jsx("div",{className:"bg-black/70 border border-white/10 px-5 py-2 rounded-full text-[11px] font-mono tracking-widest text-white/50 uppercase",children:"Click to Play · WASD Move · Mouse Look · V Noclip · F4 Geometry Inspector · ESC Free Cursor"})}),M&&ne.jsxs(ne.Fragment,{children:[ne.jsx("div",{className:"absolute top-4 left-4 pointer-events-none z-10",children:ne.jsxs("div",{className:"bg-red-900/80 border border-red-500 px-3 py-2 rounded-lg text-xs font-mono text-red-300",children:[ne.jsx("div",{className:"font-bold text-red-200 mb-1",children:"MAP VALIDATION MODE"}),ne.jsxs("div",{children:["Issues: ",D.length]}),O>=0&&ne.jsxs("div",{className:"text-yellow-300",children:["Viewing: ",O+1,"/",D.length]}),ne.jsx("div",{className:"mt-2 text-gray-400 text-[10px]",children:"F8: Scan · F9: Next Issue · F10: Toggle"})]})}),D.length>0&&ne.jsx("div",{className:"absolute top-4 right-4 max-w-md max-h-96 overflow-y-auto pointer-events-auto z-10",children:ne.jsxs("div",{className:"bg-black/80 border border-red-500/50 rounded-lg p-3",children:[ne.jsx("div",{className:"text-xs font-mono text-red-300 font-bold mb-2",children:"DETECTED ISSUES"}),ne.jsx("div",{className:"space-y-1",children:D.map((he,ye)=>ne.jsxs("div",{className:`text-[10px] font-mono p-1.5 rounded cursor-pointer transition-colors ${ye===O?"bg-yellow-900/50 text-yellow-200 border border-yellow-500/50":he.severity==="critical"?"bg-red-950/50 text-red-300 hover:bg-red-900/30":he.severity==="high"?"bg-orange-950/50 text-orange-300 hover:bg-orange-900/30":"bg-gray-900/50 text-gray-300 hover:bg-gray-800/50"}`,onClick:()=>{k(ye);const Z=I.current.getIssues();Z[ye]&&(c.current.set(Z[ye].location[0],Z[ye].location[1]+2,Z[ye].location[2]+5),a.current=Math.PI)},children:[ne.jsx("span",{className:`inline-block w-2 h-2 rounded-full mr-2 ${he.type==="floor_gap"?"bg-red-500":he.type==="wall_gap"?"bg-yellow-500":he.type==="door_gap"?"bg-blue-500":he.type==="stair_gap"?"bg-orange-500":he.type==="corner_crack"?"bg-pink-500":"bg-gray-500"}`}),"[",he.severity.toUpperCase(),"] ",he.roomName," - ",he.type.replace("_"," "),ne.jsx("div",{className:"text-gray-400 ml-4 truncate",children:he.description})]},he.id))})]})}),M&&D.length===0&&ne.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10",children:ne.jsxs("div",{className:"bg-green-900/80 border border-green-500 px-6 py-4 rounded-lg text-sm font-mono text-green-300",children:[ne.jsx("div",{className:"font-bold text-green-200 mb-1",children:"NO ISSUES DETECTED"}),ne.jsx("div",{className:"text-green-400",children:"Map geometry is clean!"})]})})]})]})}PS.createRoot(document.getElementById("root")).render(ne.jsx(nt.StrictMode,{children:ne.jsx(Vw,{})}));
