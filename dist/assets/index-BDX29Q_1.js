(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function CS(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ld={exports:{}},Zo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function DS(){if(S_)return Zo;S_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:u,ref:o!==void 0?o:null,props:c}}return Zo.Fragment=e,Zo.jsx=n,Zo.jsxs=n,Zo}var M_;function NS(){return M_||(M_=1,Ld.exports=DS()),Ld.exports}var V=NS(),Od={exports:{}},yt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_;function US(){if(b_)return yt;b_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function M(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,S={};function y(P,J,W){this.props=P,this.context=J,this.refs=S,this.updater=W||b}y.prototype.isReactComponent={},y.prototype.setState=function(P,J){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,J,"setState")},y.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function D(){}D.prototype=y.prototype;function F(P,J,W){this.props=P,this.context=J,this.refs=S,this.updater=W||b}var I=F.prototype=new D;I.constructor=F,C(I,y.prototype),I.isPureReactComponent=!0;var X=Array.isArray;function B(){}var O={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function L(P,J,W){var Re=W.ref;return{$$typeof:r,type:P,key:J,ref:Re!==void 0?Re:null,props:W}}function q(P,J){return L(P.type,J,P.props)}function H(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function j(P){var J={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(W){return J[W]})}var fe=/\/+/g;function me(P,J){return typeof P=="object"&&P!==null&&P.key!=null?j(""+P.key):J.toString(36)}function Y(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(B,B):(P.status="pending",P.then(function(J){P.status==="pending"&&(P.status="fulfilled",P.value=J)},function(J){P.status==="pending"&&(P.status="rejected",P.reason=J)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function N(P,J,W,Re,Te){var ie=typeof P;(ie==="undefined"||ie==="boolean")&&(P=null);var Ue=!1;if(P===null)Ue=!0;else switch(ie){case"bigint":case"string":case"number":Ue=!0;break;case"object":switch(P.$$typeof){case r:case e:Ue=!0;break;case _:return Ue=P._init,N(Ue(P._payload),J,W,Re,Te)}}if(Ue)return Te=Te(P),Ue=Re===""?"."+me(P,0):Re,X(Te)?(W="",Ue!=null&&(W=Ue.replace(fe,"$&/")+"/"),N(Te,J,W,"",function(ft){return ft})):Te!=null&&(H(Te)&&(Te=q(Te,W+(Te.key==null||P&&P.key===Te.key?"":(""+Te.key).replace(fe,"$&/")+"/")+Ue)),J.push(Te)),1;Ue=0;var Ce=Re===""?".":Re+":";if(X(P))for(var tt=0;tt<P.length;tt++)Re=P[tt],ie=Ce+me(Re,tt),Ue+=N(Re,J,W,ie,Te);else if(tt=M(P),typeof tt=="function")for(P=tt.call(P),tt=0;!(Re=P.next()).done;)Re=Re.value,ie=Ce+me(Re,tt++),Ue+=N(Re,J,W,ie,Te);else if(ie==="object"){if(typeof P.then=="function")return N(Y(P),J,W,Re,Te);throw J=String(P),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Ue}function G(P,J,W){if(P==null)return P;var Re=[],Te=0;return N(P,Re,"","",function(ie){return J.call(W,ie,Te++)}),Re}function oe(P){if(P._status===-1){var J=P._result;J=J(),J.then(function(W){(P._status===0||P._status===-1)&&(P._status=1,P._result=W)},function(W){(P._status===0||P._status===-1)&&(P._status=2,P._result=W)}),P._status===-1&&(P._status=0,P._result=J)}if(P._status===1)return P._result.default;throw P._result}var ve=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Ae={map:G,forEach:function(P,J,W){G(P,function(){J.apply(this,arguments)},W)},count:function(P){var J=0;return G(P,function(){J++}),J},toArray:function(P){return G(P,function(J){return J})||[]},only:function(P){if(!H(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return yt.Activity=x,yt.Children=Ae,yt.Component=y,yt.Fragment=n,yt.Profiler=o,yt.PureComponent=F,yt.StrictMode=a,yt.Suspense=m,yt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,yt.__COMPILER_RUNTIME={__proto__:null,c:function(P){return O.H.useMemoCache(P)}},yt.cache=function(P){return function(){return P.apply(null,arguments)}},yt.cacheSignal=function(){return null},yt.cloneElement=function(P,J,W){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Re=C({},P.props),Te=P.key;if(J!=null)for(ie in J.key!==void 0&&(Te=""+J.key),J)!T.call(J,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&J.ref===void 0||(Re[ie]=J[ie]);var ie=arguments.length-2;if(ie===1)Re.children=W;else if(1<ie){for(var Ue=Array(ie),Ce=0;Ce<ie;Ce++)Ue[Ce]=arguments[Ce+2];Re.children=Ue}return L(P.type,Te,Re)},yt.createContext=function(P){return P={$$typeof:u,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},yt.createElement=function(P,J,W){var Re,Te={},ie=null;if(J!=null)for(Re in J.key!==void 0&&(ie=""+J.key),J)T.call(J,Re)&&Re!=="key"&&Re!=="__self"&&Re!=="__source"&&(Te[Re]=J[Re]);var Ue=arguments.length-2;if(Ue===1)Te.children=W;else if(1<Ue){for(var Ce=Array(Ue),tt=0;tt<Ue;tt++)Ce[tt]=arguments[tt+2];Te.children=Ce}if(P&&P.defaultProps)for(Re in Ue=P.defaultProps,Ue)Te[Re]===void 0&&(Te[Re]=Ue[Re]);return L(P,ie,Te)},yt.createRef=function(){return{current:null}},yt.forwardRef=function(P){return{$$typeof:h,render:P}},yt.isValidElement=H,yt.lazy=function(P){return{$$typeof:_,_payload:{_status:-1,_result:P},_init:oe}},yt.memo=function(P,J){return{$$typeof:p,type:P,compare:J===void 0?null:J}},yt.startTransition=function(P){var J=O.T,W={};O.T=W;try{var Re=P(),Te=O.S;Te!==null&&Te(W,Re),typeof Re=="object"&&Re!==null&&typeof Re.then=="function"&&Re.then(B,ve)}catch(ie){ve(ie)}finally{J!==null&&W.types!==null&&(J.types=W.types),O.T=J}},yt.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},yt.use=function(P){return O.H.use(P)},yt.useActionState=function(P,J,W){return O.H.useActionState(P,J,W)},yt.useCallback=function(P,J){return O.H.useCallback(P,J)},yt.useContext=function(P){return O.H.useContext(P)},yt.useDebugValue=function(){},yt.useDeferredValue=function(P,J){return O.H.useDeferredValue(P,J)},yt.useEffect=function(P,J){return O.H.useEffect(P,J)},yt.useEffectEvent=function(P){return O.H.useEffectEvent(P)},yt.useId=function(){return O.H.useId()},yt.useImperativeHandle=function(P,J,W){return O.H.useImperativeHandle(P,J,W)},yt.useInsertionEffect=function(P,J){return O.H.useInsertionEffect(P,J)},yt.useLayoutEffect=function(P,J){return O.H.useLayoutEffect(P,J)},yt.useMemo=function(P,J){return O.H.useMemo(P,J)},yt.useOptimistic=function(P,J){return O.H.useOptimistic(P,J)},yt.useReducer=function(P,J,W){return O.H.useReducer(P,J,W)},yt.useRef=function(P){return O.H.useRef(P)},yt.useState=function(P){return O.H.useState(P)},yt.useSyncExternalStore=function(P,J,W){return O.H.useSyncExternalStore(P,J,W)},yt.useTransition=function(){return O.H.useTransition()},yt.version="19.2.6",yt}var E_;function yp(){return E_||(E_=1,Od.exports=US()),Od.exports}var nt=yp();const T_=CS(nt);var Id={exports:{}},Ko={},zd={exports:{}},Pd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_;function LS(){return A_||(A_=1,(function(r){function e(N,G){var oe=N.length;N.push(G);e:for(;0<oe;){var ve=oe-1>>>1,Ae=N[ve];if(0<o(Ae,G))N[ve]=G,N[oe]=Ae,oe=ve;else break e}}function n(N){return N.length===0?null:N[0]}function a(N){if(N.length===0)return null;var G=N[0],oe=N.pop();if(oe!==G){N[0]=oe;e:for(var ve=0,Ae=N.length,P=Ae>>>1;ve<P;){var J=2*(ve+1)-1,W=N[J],Re=J+1,Te=N[Re];if(0>o(W,oe))Re<Ae&&0>o(Te,W)?(N[ve]=Te,N[Re]=oe,ve=Re):(N[ve]=W,N[J]=oe,ve=J);else if(Re<Ae&&0>o(Te,oe))N[ve]=Te,N[Re]=oe,ve=Re;else break e}}return G}function o(N,G){var oe=N.sortIndex-G.sortIndex;return oe!==0?oe:N.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();r.unstable_now=function(){return u.now()-h}}var m=[],p=[],_=1,x=null,g=3,M=!1,b=!1,C=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function I(N){for(var G=n(p);G!==null;){if(G.callback===null)a(p);else if(G.startTime<=N)a(p),G.sortIndex=G.expirationTime,e(m,G);else break;G=n(p)}}function X(N){if(C=!1,I(N),!b)if(n(m)!==null)b=!0,B||(B=!0,j());else{var G=n(p);G!==null&&Y(X,G.startTime-N)}}var B=!1,O=-1,T=5,L=-1;function q(){return S?!0:!(r.unstable_now()-L<T)}function H(){if(S=!1,B){var N=r.unstable_now();L=N;var G=!0;try{e:{b=!1,C&&(C=!1,D(O),O=-1),M=!0;var oe=g;try{t:{for(I(N),x=n(m);x!==null&&!(x.expirationTime>N&&q());){var ve=x.callback;if(typeof ve=="function"){x.callback=null,g=x.priorityLevel;var Ae=ve(x.expirationTime<=N);if(N=r.unstable_now(),typeof Ae=="function"){x.callback=Ae,I(N),G=!0;break t}x===n(m)&&a(m),I(N)}else a(m);x=n(m)}if(x!==null)G=!0;else{var P=n(p);P!==null&&Y(X,P.startTime-N),G=!1}}break e}finally{x=null,g=oe,M=!1}G=void 0}}finally{G?j():B=!1}}}var j;if(typeof F=="function")j=function(){F(H)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,me=fe.port2;fe.port1.onmessage=H,j=function(){me.postMessage(null)}}else j=function(){y(H,0)};function Y(N,G){O=y(function(){N(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(N){N.callback=null},r.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<N?Math.floor(1e3/N):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(N){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var oe=g;g=G;try{return N()}finally{g=oe}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(N,G){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var oe=g;g=N;try{return G()}finally{g=oe}},r.unstable_scheduleCallback=function(N,G,oe){var ve=r.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?ve+oe:ve):oe=ve,N){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=oe+Ae,N={id:_++,callback:G,priorityLevel:N,startTime:oe,expirationTime:Ae,sortIndex:-1},oe>ve?(N.sortIndex=oe,e(p,N),n(m)===null&&N===n(p)&&(C?(D(O),O=-1):C=!0,Y(X,oe-ve))):(N.sortIndex=Ae,e(m,N),b||M||(b=!0,B||(B=!0,j()))),N},r.unstable_shouldYield=q,r.unstable_wrapCallback=function(N){var G=g;return function(){var oe=g;g=G;try{return N.apply(this,arguments)}finally{g=oe}}}})(Pd)),Pd}var w_;function OS(){return w_||(w_=1,zd.exports=LS()),zd.exports}var Fd={exports:{}},Vn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function IS(){if(R_)return Vn;R_=1;var r=yp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:x==null?null:""+x,children:m,containerInfo:p,implementation:_}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Vn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Vn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},Vn.flushSync=function(m){var p=u.T,_=a.p;try{if(u.T=null,a.p=2,m)return m()}finally{u.T=p,a.p=_,a.d.f()}},Vn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},Vn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Vn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,x=h(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:M}):_==="script"&&a.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Vn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},Vn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,x=h(_,p.crossOrigin);a.d.L(m,_,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Vn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},Vn.requestFormReset=function(m){a.d.r(m)},Vn.unstable_batchedUpdates=function(m,p){return m(p)},Vn.useFormState=function(m,p,_){return u.H.useFormState(m,p,_)},Vn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Vn.version="19.2.6",Vn}var C_;function zS(){if(C_)return Fd.exports;C_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Fd.exports=IS(),Fd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function PS(){if(D_)return Ko;D_=1;var r=OS(),e=yp(),n=zS();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(a(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===s)return m(f),t;if(d===l)return m(f),i;d=d.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=d;else{for(var v=!1,R=f.child;R;){if(R===s){v=!0,s=f,l=d;break}if(R===l){v=!0,l=f,s=d;break}R=R.sibling}if(!v){for(R=d.child;R;){if(R===s){v=!0,s=d,l=f;break}if(R===l){v=!0,l=d,s=f;break}R=R.sibling}if(!v)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function _(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=_(t),i!==null)return i;t=t.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),F=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),q=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var fe=Symbol.for("react.client.reference");function me(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===fe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case y:return"Profiler";case S:return"StrictMode";case X:return"Suspense";case B:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case F:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case I:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return i=t.displayName||null,i!==null?i:me(t.type)||"Memo";case T:i=t._payload,t=t._init;try{return me(t(i))}catch{}}return null}var Y=Array.isArray,N=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},ve=[],Ae=-1;function P(t){return{current:t}}function J(t){0>Ae||(t.current=ve[Ae],ve[Ae]=null,Ae--)}function W(t,i){Ae++,ve[Ae]=t.current,t.current=i}var Re=P(null),Te=P(null),ie=P(null),Ue=P(null);function Ce(t,i){switch(W(ie,i),W(Te,t),W(Re,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?W0(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=W0(i),t=X0(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}J(Re),W(Re,t)}function tt(){J(Re),J(Te),J(ie)}function ft(t){t.memoizedState!==null&&W(Ue,t);var i=Re.current,s=X0(i,t.type);i!==s&&(W(Te,t),W(Re,s))}function dt(t){Te.current===t&&(J(Re),J(Te)),Ue.current===t&&(J(Ue),Yo._currentValue=oe)}var Xt,_t;function Rt(t){if(Xt===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Xt=i&&i[1]||"",_t=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xt+t+_t}var Bt=!1;function xt(t,i){if(!t||Bt)return"";Bt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var we=function(){throw Error()};if(Object.defineProperty(we.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(we,[])}catch(de){var ce=de}Reflect.construct(t,[],we)}else{try{we.call()}catch(de){ce=de}t.call(we.prototype)}}else{try{throw Error()}catch(de){ce=de}(we=t())&&typeof we.catch=="function"&&we.catch(function(){})}}catch(de){if(de&&ce&&typeof de.stack=="string")return[de.stack,ce.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],R=d[1];if(v&&R){var k=v.split(`
`),re=R.split(`
`);for(f=l=0;l<k.length&&!k[l].includes("DetermineComponentFrameRoot");)l++;for(;f<re.length&&!re[f].includes("DetermineComponentFrameRoot");)f++;if(l===k.length||f===re.length)for(l=k.length-1,f=re.length-1;1<=l&&0<=f&&k[l]!==re[f];)f--;for(;1<=l&&0<=f;l--,f--)if(k[l]!==re[f]){if(l!==1||f!==1)do if(l--,f--,0>f||k[l]!==re[f]){var Se=`
`+k[l].replace(" at new "," at ");return t.displayName&&Se.includes("<anonymous>")&&(Se=Se.replace("<anonymous>",t.displayName)),Se}while(1<=l&&0<=f);break}}}finally{Bt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?Rt(s):""}function dn(t,i){switch(t.tag){case 26:case 27:case 5:return Rt(t.type);case 16:return Rt("Lazy");case 13:return t.child!==i&&i!==null?Rt("Suspense Fallback"):Rt("Suspense");case 19:return Rt("SuspenseList");case 0:case 15:return xt(t.type,!1);case 11:return xt(t.type.render,!1);case 1:return xt(t.type,!0);case 31:return Rt("Activity");default:return""}}function Kt(t){try{var i="",s=null;do i+=dn(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var wn=Object.prototype.hasOwnProperty,Z=r.unstable_scheduleCallback,rn=r.unstable_cancelCallback,Tt=r.unstable_shouldYield,Ft=r.unstable_requestPaint,Fe=r.unstable_now,Qt=r.unstable_getCurrentPriorityLevel,U=r.unstable_ImmediatePriority,E=r.unstable_UserBlockingPriority,te=r.unstable_NormalPriority,Me=r.unstable_LowPriority,Ie=r.unstable_IdlePriority,ke=r.log,Xe=r.unstable_setDisableYieldValue,pe=null,_e=null;function Ge(t){if(typeof ke=="function"&&Xe(t),_e&&typeof _e.setStrictMode=="function")try{_e.setStrictMode(pe,t)}catch{}}var je=Math.clz32?Math.clz32:Oe,We=Math.log,Ve=Math.LN2;function Oe(t){return t>>>=0,t===0?32:31-(We(t)/Ve|0)|0}var qe=256,ot=262144,z=4194304;function De(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ye(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,d=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var R=l&134217727;return R!==0?(l=R&~d,l!==0?f=De(l):(v&=R,v!==0?f=De(v):s||(s=R&~t,s!==0&&(f=De(s))))):(R=l&~d,R!==0?f=De(R):v!==0?f=De(v):s||(s=l&~t,s!==0&&(f=De(s)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:f}function Qe(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function He(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Le(){var t=z;return z<<=1,(z&62914560)===0&&(z=4194304),t}function at(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function lt(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function an(t,i,s,l,f,d){var v=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var R=t.entanglements,k=t.expirationTimes,re=t.hiddenUpdates;for(s=v&~s;0<s;){var Se=31-je(s),we=1<<Se;R[Se]=0,k[Se]=-1;var ce=re[Se];if(ce!==null)for(re[Se]=null,Se=0;Se<ce.length;Se++){var de=ce[Se];de!==null&&(de.lane&=-536870913)}s&=~we}l!==0&&Gt(t,l,0),d!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=d&~(v&~i))}function Gt(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-je(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function Qn(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-je(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function Gn(t,i){var s=i&-i;return s=(s&42)!==0?1:qi(s),(s&(t.suspendedLanes|i))!==0?0:s}function qi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Hn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Oi(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:p_(t.type))}function Ba(t,i){var s=G.p;try{return G.p=t,i()}finally{G.p=s}}var Un=Math.random().toString(36).slice(2),hn="__reactFiber$"+Un,Rn="__reactProps$"+Un,Si="__reactContainer$"+Un,Ii="__reactEvents$"+Un,Es="__reactListeners$"+Un,ca="__reactHandles$"+Un,Ga="__reactResources$"+Un,zi="__reactMarker$"+Un;function Ha(t){delete t[hn],delete t[Rn],delete t[Ii],delete t[Es],delete t[ca]}function oi(t){var i=t[hn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Si]||s[hn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Q0(t);t!==null;){if(s=t[hn])return s;t=Q0(t)}return i}t=s,s=t.parentNode}return null}function li(t){if(t=t[hn]||t[Si]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function ua(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function Pi(t){var i=t[Ga];return i||(i=t[Ga]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function pn(t){t[zi]=!0}var Ts=new Set,w={};function K(t,i){le(t,i),le(t+"Capture",i)}function le(t,i){for(w[t]=i,t=0;t<i.length;t++)Ts.add(i[t])}var ae=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),A={},he={};function ue(t){return wn.call(he,t)?!0:wn.call(A,t)?!1:ae.test(t)?he[t]=!0:(A[t]=!0,!1)}function ne(t,i,s){if(ue(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function Ne(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Be(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function be(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $e(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Pe(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,d=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(v){s=""+v,d.call(this,v)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(v){s=""+v},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ct(t){if(!t._valueTracker){var i=$e(t)?"checked":"value";t._valueTracker=Pe(t,i,""+t[i])}}function ht(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=$e(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Je(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ye=/[\n"\\]/g;function Ze(t){return t.replace(Ye,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function xe(t,i,s,l,f,d,v,R){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),i!=null?v==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+be(i)):t.value!==""+be(i)&&(t.value=""+be(i)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),i!=null?ge(t,v,be(i)):s!=null?ge(t,v,be(s)):l!=null&&t.removeAttribute("value"),f==null&&d!=null&&(t.defaultChecked=!!d),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+be(R):t.removeAttribute("name")}function ze(t,i,s,l,f,d,v,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){ct(t);return}s=s!=null?""+be(s):"",i=i!=null?""+be(i):s,R||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=R?t.checked:!!l,t.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),ct(t)}function ge(t,i,s){i==="number"&&Je(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Ke(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+be(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function gt(t,i,s){if(i!=null&&(i=""+be(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+be(s):""}function st(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(Y(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=be(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),ct(t)}function At(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var vt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yt(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||vt.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Sn(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&Yt(t,f,l)}else for(var d in i)i.hasOwnProperty(d)&&Yt(t,d,i[d])}function Ht(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Va=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function As(t){return Va.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function fa(){}var Cu=null;function Du(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nr=null,ir=null;function kp(t){var i=li(t);if(i&&(t=i.stateNode)){var s=t[Rn]||null;e:switch(t=i.stateNode,i.type){case"input":if(xe(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Ze(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[Rn]||null;if(!f)throw Error(a(90));xe(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&ht(l)}break e;case"textarea":gt(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Ke(t,!!s.multiple,i,!1)}}}var Nu=!1;function Wp(t,i,s){if(Nu)return t(i,s);Nu=!0;try{var l=t(i);return l}finally{if(Nu=!1,(nr!==null||ir!==null)&&(lc(),nr&&(i=nr,t=ir,ir=nr=null,kp(i),t)))for(i=0;i<t.length;i++)kp(t[i])}}function lo(t,i){var s=t.stateNode;if(s===null)return null;var l=s[Rn]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var da=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uu=!1;if(da)try{var co={};Object.defineProperty(co,"passive",{get:function(){Uu=!0}}),window.addEventListener("test",co,co),window.removeEventListener("test",co,co)}catch{Uu=!1}var ka=null,Lu=null,Ml=null;function Xp(){if(Ml)return Ml;var t,i=Lu,s=i.length,l,f="value"in ka?ka.value:ka.textContent,d=f.length;for(t=0;t<s&&i[t]===f[t];t++);var v=s-t;for(l=1;l<=v&&i[s-l]===f[d-l];l++);return Ml=f.slice(t,1<l?1-l:void 0)}function bl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function El(){return!0}function Yp(){return!1}function Jn(t){function i(s,l,f,d,v){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(s=t[R],this[R]=s?s(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?El:Yp,this.isPropagationStopped=Yp,this}return x(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),i}var ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tl=Jn(ws),uo=x({},ws,{view:0,detail:0}),wv=Jn(uo),Ou,Iu,fo,Al=x({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?(Ou=t.screenX-fo.screenX,Iu=t.screenY-fo.screenY):Iu=Ou=0,fo=t),Ou)},movementY:function(t){return"movementY"in t?t.movementY:Iu}}),jp=Jn(Al),Rv=x({},Al,{dataTransfer:0}),Cv=Jn(Rv),Dv=x({},uo,{relatedTarget:0}),zu=Jn(Dv),Nv=x({},ws,{animationName:0,elapsedTime:0,pseudoElement:0}),Uv=Jn(Nv),Lv=x({},ws,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ov=Jn(Lv),Iv=x({},ws,{data:0}),qp=Jn(Iv),zv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bv(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Fv[t])?!!i[t]:!1}function Pu(){return Bv}var Gv=x({},uo,{key:function(t){if(t.key){var i=zv[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Pv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pu,charCode:function(t){return t.type==="keypress"?bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Hv=Jn(Gv),Vv=x({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$p=Jn(Vv),kv=x({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pu}),Wv=Jn(kv),Xv=x({},ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yv=Jn(Xv),jv=x({},Al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qv=Jn(jv),$v=x({},ws,{newState:0,oldState:0}),Zv=Jn($v),Kv=[9,13,27,32],Fu=da&&"CompositionEvent"in window,ho=null;da&&"documentMode"in document&&(ho=document.documentMode);var Qv=da&&"TextEvent"in window&&!ho,Zp=da&&(!Fu||ho&&8<ho&&11>=ho),Kp=" ",Qp=!1;function Jp(t,i){switch(t){case"keyup":return Kv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function em(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ar=!1;function Jv(t,i){switch(t){case"compositionend":return em(i);case"keypress":return i.which!==32?null:(Qp=!0,Kp);case"textInput":return t=i.data,t===Kp&&Qp?null:t;default:return null}}function ey(t,i){if(ar)return t==="compositionend"||!Fu&&Jp(t,i)?(t=Xp(),Ml=Lu=ka=null,ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Zp&&i.locale!=="ko"?null:i.data;default:return null}}var ty={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!ty[t.type]:i==="textarea"}function nm(t,i,s,l){nr?ir?ir.push(l):ir=[l]:nr=l,i=mc(i,"onChange"),0<i.length&&(s=new Tl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var po=null,mo=null;function ny(t){F0(t,0)}function wl(t){var i=ua(t);if(ht(i))return t}function im(t,i){if(t==="change")return i}var am=!1;if(da){var Bu;if(da){var Gu="oninput"in document;if(!Gu){var sm=document.createElement("div");sm.setAttribute("oninput","return;"),Gu=typeof sm.oninput=="function"}Bu=Gu}else Bu=!1;am=Bu&&(!document.documentMode||9<document.documentMode)}function rm(){po&&(po.detachEvent("onpropertychange",om),mo=po=null)}function om(t){if(t.propertyName==="value"&&wl(mo)){var i=[];nm(i,mo,t,Du(t)),Wp(ny,i)}}function iy(t,i,s){t==="focusin"?(rm(),po=i,mo=s,po.attachEvent("onpropertychange",om)):t==="focusout"&&rm()}function ay(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wl(mo)}function sy(t,i){if(t==="click")return wl(i)}function ry(t,i){if(t==="input"||t==="change")return wl(i)}function oy(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ci=typeof Object.is=="function"?Object.is:oy;function go(t,i){if(ci(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!wn.call(i,f)||!ci(t[f],i[f]))return!1}return!0}function lm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cm(t,i){var s=lm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=lm(s)}}function um(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?um(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function fm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Je(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Je(t.document)}return i}function Hu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var ly=da&&"documentMode"in document&&11>=document.documentMode,sr=null,Vu=null,_o=null,ku=!1;function dm(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;ku||sr==null||sr!==Je(l)||(l=sr,"selectionStart"in l&&Hu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),_o&&go(_o,l)||(_o=l,l=mc(Vu,"onSelect"),0<l.length&&(i=new Tl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=sr)))}function Rs(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var rr={animationend:Rs("Animation","AnimationEnd"),animationiteration:Rs("Animation","AnimationIteration"),animationstart:Rs("Animation","AnimationStart"),transitionrun:Rs("Transition","TransitionRun"),transitionstart:Rs("Transition","TransitionStart"),transitioncancel:Rs("Transition","TransitionCancel"),transitionend:Rs("Transition","TransitionEnd")},Wu={},hm={};da&&(hm=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function Cs(t){if(Wu[t])return Wu[t];if(!rr[t])return t;var i=rr[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in hm)return Wu[t]=i[s];return t}var pm=Cs("animationend"),mm=Cs("animationiteration"),gm=Cs("animationstart"),cy=Cs("transitionrun"),uy=Cs("transitionstart"),fy=Cs("transitioncancel"),_m=Cs("transitionend"),xm=new Map,Xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xu.push("scrollEnd");function Fi(t,i){xm.set(t,i),K(i,[t])}var Rl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},bi=[],or=0,Yu=0;function Cl(){for(var t=or,i=Yu=or=0;i<t;){var s=bi[i];bi[i++]=null;var l=bi[i];bi[i++]=null;var f=bi[i];bi[i++]=null;var d=bi[i];if(bi[i++]=null,l!==null&&f!==null){var v=l.pending;v===null?f.next=f:(f.next=v.next,v.next=f),l.pending=f}d!==0&&vm(s,f,d)}}function Dl(t,i,s,l){bi[or++]=t,bi[or++]=i,bi[or++]=s,bi[or++]=l,Yu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function ju(t,i,s,l){return Dl(t,i,s,l),Nl(t)}function Ds(t,i){return Dl(t,null,null,i),Nl(t)}function vm(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,d=t.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(f=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,f&&i!==null&&(f=31-je(s),t=d.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),d):null}function Nl(t){if(50<Bo)throw Bo=0,id=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var lr={};function dy(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(t,i,s,l){return new dy(t,i,s,l)}function qu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ha(t,i){var s=t.alternate;return s===null?(s=ui(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function ym(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Ul(t,i,s,l,f,d){var v=0;if(l=t,typeof t=="function")qu(t)&&(v=1);else if(typeof t=="string")v=_S(t,s,Re.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case L:return t=ui(31,s,i,f),t.elementType=L,t.lanes=d,t;case C:return Ns(s.children,f,d,i);case S:v=8,f|=24;break;case y:return t=ui(12,s,i,f|2),t.elementType=y,t.lanes=d,t;case X:return t=ui(13,s,i,f),t.elementType=X,t.lanes=d,t;case B:return t=ui(19,s,i,f),t.elementType=B,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case F:v=10;break e;case D:v=9;break e;case I:v=11;break e;case O:v=14;break e;case T:v=16,l=null;break e}v=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=ui(v,s,i,f),i.elementType=t,i.type=l,i.lanes=d,i}function Ns(t,i,s,l){return t=ui(7,t,l,i),t.lanes=s,t}function $u(t,i,s){return t=ui(6,t,null,i),t.lanes=s,t}function Sm(t){var i=ui(18,null,null,0);return i.stateNode=t,i}function Zu(t,i,s){return i=ui(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Mm=new WeakMap;function Ei(t,i){if(typeof t=="object"&&t!==null){var s=Mm.get(t);return s!==void 0?s:(i={value:t,source:i,stack:Kt(i)},Mm.set(t,i),i)}return{value:t,source:i,stack:Kt(i)}}var cr=[],ur=0,Ll=null,xo=0,Ti=[],Ai=0,Wa=null,$i=1,Zi="";function pa(t,i){cr[ur++]=xo,cr[ur++]=Ll,Ll=t,xo=i}function bm(t,i,s){Ti[Ai++]=$i,Ti[Ai++]=Zi,Ti[Ai++]=Wa,Wa=t;var l=$i;t=Zi;var f=32-je(l)-1;l&=~(1<<f),s+=1;var d=32-je(i)+f;if(30<d){var v=f-f%5;d=(l&(1<<v)-1).toString(32),l>>=v,f-=v,$i=1<<32-je(i)+f|s<<f|l,Zi=d+t}else $i=1<<d|s<<f|l,Zi=t}function Ku(t){t.return!==null&&(pa(t,1),bm(t,1,0))}function Qu(t){for(;t===Ll;)Ll=cr[--ur],cr[ur]=null,xo=cr[--ur],cr[ur]=null;for(;t===Wa;)Wa=Ti[--Ai],Ti[Ai]=null,Zi=Ti[--Ai],Ti[Ai]=null,$i=Ti[--Ai],Ti[Ai]=null}function Em(t,i){Ti[Ai++]=$i,Ti[Ai++]=Zi,Ti[Ai++]=Wa,$i=i.id,Zi=i.overflow,Wa=t}var In=null,on=null,It=!1,Xa=null,wi=!1,Ju=Error(a(519));function Ya(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw vo(Ei(i,t)),Ju}function Tm(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[hn]=t,i[Rn]=l,s){case"dialog":Dt("cancel",i),Dt("close",i);break;case"iframe":case"object":case"embed":Dt("load",i);break;case"video":case"audio":for(s=0;s<Ho.length;s++)Dt(Ho[s],i);break;case"source":Dt("error",i);break;case"img":case"image":case"link":Dt("error",i),Dt("load",i);break;case"details":Dt("toggle",i);break;case"input":Dt("invalid",i),ze(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Dt("invalid",i);break;case"textarea":Dt("invalid",i),st(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||V0(i.textContent,s)?(l.popover!=null&&(Dt("beforetoggle",i),Dt("toggle",i)),l.onScroll!=null&&Dt("scroll",i),l.onScrollEnd!=null&&Dt("scrollend",i),l.onClick!=null&&(i.onclick=fa),i=!0):i=!1,i||Ya(t,!0)}function Am(t){for(In=t.return;In;)switch(In.tag){case 5:case 31:case 13:wi=!1;return;case 27:case 3:wi=!0;return;default:In=In.return}}function fr(t){if(t!==In)return!1;if(!It)return Am(t),It=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||xd(t.type,t.memoizedProps)),s=!s),s&&on&&Ya(t),Am(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));on=K0(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));on=K0(t)}else i===27?(i=on,rs(t.type)?(t=bd,bd=null,on=t):on=i):on=In?Ci(t.stateNode.nextSibling):null;return!0}function Us(){on=In=null,It=!1}function ef(){var t=Xa;return t!==null&&(ii===null?ii=t:ii.push.apply(ii,t),Xa=null),t}function vo(t){Xa===null?Xa=[t]:Xa.push(t)}var tf=P(null),Ls=null,ma=null;function ja(t,i,s){W(tf,i._currentValue),i._currentValue=s}function ga(t){t._currentValue=tf.current,J(tf)}function nf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function af(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var d=f.dependencies;if(d!==null){var v=f.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=f;for(var k=0;k<i.length;k++)if(R.context===i[k]){d.lanes|=s,R=d.alternate,R!==null&&(R.lanes|=s),nf(d.return,s,t),l||(v=null);break e}d=R.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(a(341));v.lanes|=s,d=v.alternate,d!==null&&(d.lanes|=s),nf(v,s,t),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===t){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function dr(t,i,s,l){t=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(a(387));if(v=v.memoizedProps,v!==null){var R=f.type;ci(f.pendingProps.value,v.value)||(t!==null?t.push(R):t=[R])}}else if(f===Ue.current){if(v=f.alternate,v===null)throw Error(a(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Yo):t=[Yo])}f=f.return}t!==null&&af(i,t,s,l),i.flags|=262144}function Ol(t){for(t=t.firstContext;t!==null;){if(!ci(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Os(t){Ls=t,ma=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function zn(t){return wm(Ls,t)}function Il(t,i){return Ls===null&&Os(t),wm(t,i)}function wm(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ma===null){if(t===null)throw Error(a(308));ma=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ma=ma.next=i;return s}var hy=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},py=r.unstable_scheduleCallback,my=r.unstable_NormalPriority,Mn={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sf(){return{controller:new hy,data:new Map,refCount:0}}function yo(t){t.refCount--,t.refCount===0&&py(my,function(){t.controller.abort()})}var So=null,rf=0,hr=0,pr=null;function gy(t,i){if(So===null){var s=So=[];rf=0,hr=cd(),pr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return rf++,i.then(Rm,Rm),i}function Rm(){if(--rf===0&&So!==null){pr!==null&&(pr.status="fulfilled");var t=So;So=null,hr=0,pr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function _y(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Cm=N.S;N.S=function(t,i){d0=Fe(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&gy(t,i),Cm!==null&&Cm(t,i)};var Is=P(null);function of(){var t=Is.current;return t!==null?t:sn.pooledCache}function zl(t,i){i===null?W(Is,Is.current):W(Is,i.pool)}function Dm(){var t=of();return t===null?null:{parent:Mn._currentValue,pool:t}}var mr=Error(a(460)),lf=Error(a(474)),Pl=Error(a(542)),Fl={then:function(){}};function Nm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Um(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(fa,fa),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Om(t),t;default:if(typeof i.status=="string")i.then(fa,fa);else{if(t=sn,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Om(t),t}throw Ps=i,mr}}function zs(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Ps=s,mr):s}}var Ps=null;function Lm(){if(Ps===null)throw Error(a(459));var t=Ps;return Ps=null,t}function Om(t){if(t===mr||t===Pl)throw Error(a(483))}var gr=null,Mo=0;function Bl(t){var i=Mo;return Mo+=1,gr===null&&(gr=[]),Um(gr,t,i)}function bo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Gl(t,i){throw i.$$typeof===g?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Im(t){function i(ee,$){if(t){var se=ee.deletions;se===null?(ee.deletions=[$],ee.flags|=16):se.push($)}}function s(ee,$){if(!t)return null;for(;$!==null;)i(ee,$),$=$.sibling;return null}function l(ee){for(var $=new Map;ee!==null;)ee.key!==null?$.set(ee.key,ee):$.set(ee.index,ee),ee=ee.sibling;return $}function f(ee,$){return ee=ha(ee,$),ee.index=0,ee.sibling=null,ee}function d(ee,$,se){return ee.index=se,t?(se=ee.alternate,se!==null?(se=se.index,se<$?(ee.flags|=67108866,$):se):(ee.flags|=67108866,$)):(ee.flags|=1048576,$)}function v(ee){return t&&ee.alternate===null&&(ee.flags|=67108866),ee}function R(ee,$,se,Ee){return $===null||$.tag!==6?($=$u(se,ee.mode,Ee),$.return=ee,$):($=f($,se),$.return=ee,$)}function k(ee,$,se,Ee){var ut=se.type;return ut===C?Se(ee,$,se.props.children,Ee,se.key):$!==null&&($.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===T&&zs(ut)===$.type)?($=f($,se.props),bo($,se),$.return=ee,$):($=Ul(se.type,se.key,se.props,null,ee.mode,Ee),bo($,se),$.return=ee,$)}function re(ee,$,se,Ee){return $===null||$.tag!==4||$.stateNode.containerInfo!==se.containerInfo||$.stateNode.implementation!==se.implementation?($=Zu(se,ee.mode,Ee),$.return=ee,$):($=f($,se.children||[]),$.return=ee,$)}function Se(ee,$,se,Ee,ut){return $===null||$.tag!==7?($=Ns(se,ee.mode,Ee,ut),$.return=ee,$):($=f($,se),$.return=ee,$)}function we(ee,$,se){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $=$u(""+$,ee.mode,se),$.return=ee,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case M:return se=Ul($.type,$.key,$.props,null,ee.mode,se),bo(se,$),se.return=ee,se;case b:return $=Zu($,ee.mode,se),$.return=ee,$;case T:return $=zs($),we(ee,$,se)}if(Y($)||j($))return $=Ns($,ee.mode,se,null),$.return=ee,$;if(typeof $.then=="function")return we(ee,Bl($),se);if($.$$typeof===F)return we(ee,Il(ee,$),se);Gl(ee,$)}return null}function ce(ee,$,se,Ee){var ut=$!==null?$.key:null;if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return ut!==null?null:R(ee,$,""+se,Ee);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case M:return se.key===ut?k(ee,$,se,Ee):null;case b:return se.key===ut?re(ee,$,se,Ee):null;case T:return se=zs(se),ce(ee,$,se,Ee)}if(Y(se)||j(se))return ut!==null?null:Se(ee,$,se,Ee,null);if(typeof se.then=="function")return ce(ee,$,Bl(se),Ee);if(se.$$typeof===F)return ce(ee,$,Il(ee,se),Ee);Gl(ee,se)}return null}function de(ee,$,se,Ee,ut){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number"||typeof Ee=="bigint")return ee=ee.get(se)||null,R($,ee,""+Ee,ut);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case M:return ee=ee.get(Ee.key===null?se:Ee.key)||null,k($,ee,Ee,ut);case b:return ee=ee.get(Ee.key===null?se:Ee.key)||null,re($,ee,Ee,ut);case T:return Ee=zs(Ee),de(ee,$,se,Ee,ut)}if(Y(Ee)||j(Ee))return ee=ee.get(se)||null,Se($,ee,Ee,ut,null);if(typeof Ee.then=="function")return de(ee,$,se,Bl(Ee),ut);if(Ee.$$typeof===F)return de(ee,$,se,Il($,Ee),ut);Gl($,Ee)}return null}function it(ee,$,se,Ee){for(var ut=null,Vt=null,rt=$,bt=$=0,Lt=null;rt!==null&&bt<se.length;bt++){rt.index>bt?(Lt=rt,rt=null):Lt=rt.sibling;var kt=ce(ee,rt,se[bt],Ee);if(kt===null){rt===null&&(rt=Lt);break}t&&rt&&kt.alternate===null&&i(ee,rt),$=d(kt,$,bt),Vt===null?ut=kt:Vt.sibling=kt,Vt=kt,rt=Lt}if(bt===se.length)return s(ee,rt),It&&pa(ee,bt),ut;if(rt===null){for(;bt<se.length;bt++)rt=we(ee,se[bt],Ee),rt!==null&&($=d(rt,$,bt),Vt===null?ut=rt:Vt.sibling=rt,Vt=rt);return It&&pa(ee,bt),ut}for(rt=l(rt);bt<se.length;bt++)Lt=de(rt,ee,bt,se[bt],Ee),Lt!==null&&(t&&Lt.alternate!==null&&rt.delete(Lt.key===null?bt:Lt.key),$=d(Lt,$,bt),Vt===null?ut=Lt:Vt.sibling=Lt,Vt=Lt);return t&&rt.forEach(function(fs){return i(ee,fs)}),It&&pa(ee,bt),ut}function pt(ee,$,se,Ee){if(se==null)throw Error(a(151));for(var ut=null,Vt=null,rt=$,bt=$=0,Lt=null,kt=se.next();rt!==null&&!kt.done;bt++,kt=se.next()){rt.index>bt?(Lt=rt,rt=null):Lt=rt.sibling;var fs=ce(ee,rt,kt.value,Ee);if(fs===null){rt===null&&(rt=Lt);break}t&&rt&&fs.alternate===null&&i(ee,rt),$=d(fs,$,bt),Vt===null?ut=fs:Vt.sibling=fs,Vt=fs,rt=Lt}if(kt.done)return s(ee,rt),It&&pa(ee,bt),ut;if(rt===null){for(;!kt.done;bt++,kt=se.next())kt=we(ee,kt.value,Ee),kt!==null&&($=d(kt,$,bt),Vt===null?ut=kt:Vt.sibling=kt,Vt=kt);return It&&pa(ee,bt),ut}for(rt=l(rt);!kt.done;bt++,kt=se.next())kt=de(rt,ee,bt,kt.value,Ee),kt!==null&&(t&&kt.alternate!==null&&rt.delete(kt.key===null?bt:kt.key),$=d(kt,$,bt),Vt===null?ut=kt:Vt.sibling=kt,Vt=kt);return t&&rt.forEach(function(RS){return i(ee,RS)}),It&&pa(ee,bt),ut}function tn(ee,$,se,Ee){if(typeof se=="object"&&se!==null&&se.type===C&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case M:e:{for(var ut=se.key;$!==null;){if($.key===ut){if(ut=se.type,ut===C){if($.tag===7){s(ee,$.sibling),Ee=f($,se.props.children),Ee.return=ee,ee=Ee;break e}}else if($.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===T&&zs(ut)===$.type){s(ee,$.sibling),Ee=f($,se.props),bo(Ee,se),Ee.return=ee,ee=Ee;break e}s(ee,$);break}else i(ee,$);$=$.sibling}se.type===C?(Ee=Ns(se.props.children,ee.mode,Ee,se.key),Ee.return=ee,ee=Ee):(Ee=Ul(se.type,se.key,se.props,null,ee.mode,Ee),bo(Ee,se),Ee.return=ee,ee=Ee)}return v(ee);case b:e:{for(ut=se.key;$!==null;){if($.key===ut)if($.tag===4&&$.stateNode.containerInfo===se.containerInfo&&$.stateNode.implementation===se.implementation){s(ee,$.sibling),Ee=f($,se.children||[]),Ee.return=ee,ee=Ee;break e}else{s(ee,$);break}else i(ee,$);$=$.sibling}Ee=Zu(se,ee.mode,Ee),Ee.return=ee,ee=Ee}return v(ee);case T:return se=zs(se),tn(ee,$,se,Ee)}if(Y(se))return it(ee,$,se,Ee);if(j(se)){if(ut=j(se),typeof ut!="function")throw Error(a(150));return se=ut.call(se),pt(ee,$,se,Ee)}if(typeof se.then=="function")return tn(ee,$,Bl(se),Ee);if(se.$$typeof===F)return tn(ee,$,Il(ee,se),Ee);Gl(ee,se)}return typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint"?(se=""+se,$!==null&&$.tag===6?(s(ee,$.sibling),Ee=f($,se),Ee.return=ee,ee=Ee):(s(ee,$),Ee=$u(se,ee.mode,Ee),Ee.return=ee,ee=Ee),v(ee)):s(ee,$)}return function(ee,$,se,Ee){try{Mo=0;var ut=tn(ee,$,se,Ee);return gr=null,ut}catch(rt){if(rt===mr||rt===Pl)throw rt;var Vt=ui(29,rt,null,ee.mode);return Vt.lanes=Ee,Vt.return=ee,Vt}finally{}}}var Fs=Im(!0),zm=Im(!1),qa=!1;function cf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function $a(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Za(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Wt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Nl(t),vm(t,null,s),i}return Dl(t,l,i,s),Nl(t)}function Eo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Qn(t,s)}}function ff(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var v={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?f=d=v:d=d.next=v,s=s.next}while(s!==null);d===null?f=d=i:d=d.next=i}else f=d=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var df=!1;function To(){if(df){var t=pr;if(t!==null)throw t}}function Ao(t,i,s,l){df=!1;var f=t.updateQueue;qa=!1;var d=f.firstBaseUpdate,v=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var k=R,re=k.next;k.next=null,v===null?d=re:v.next=re,v=k;var Se=t.alternate;Se!==null&&(Se=Se.updateQueue,R=Se.lastBaseUpdate,R!==v&&(R===null?Se.firstBaseUpdate=re:R.next=re,Se.lastBaseUpdate=k))}if(d!==null){var we=f.baseState;v=0,Se=re=k=null,R=d;do{var ce=R.lane&-536870913,de=ce!==R.lane;if(de?(Ut&ce)===ce:(l&ce)===ce){ce!==0&&ce===hr&&(df=!0),Se!==null&&(Se=Se.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var it=t,pt=R;ce=i;var tn=s;switch(pt.tag){case 1:if(it=pt.payload,typeof it=="function"){we=it.call(tn,we,ce);break e}we=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=pt.payload,ce=typeof it=="function"?it.call(tn,we,ce):it,ce==null)break e;we=x({},we,ce);break e;case 2:qa=!0}}ce=R.callback,ce!==null&&(t.flags|=64,de&&(t.flags|=8192),de=f.callbacks,de===null?f.callbacks=[ce]:de.push(ce))}else de={lane:ce,tag:R.tag,payload:R.payload,callback:R.callback,next:null},Se===null?(re=Se=de,k=we):Se=Se.next=de,v|=ce;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;de=R,R=de.next,de.next=null,f.lastBaseUpdate=de,f.shared.pending=null}}while(!0);Se===null&&(k=we),f.baseState=k,f.firstBaseUpdate=re,f.lastBaseUpdate=Se,d===null&&(f.shared.lanes=0),ts|=v,t.lanes=v,t.memoizedState=we}}function Pm(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function Fm(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Pm(s[t],i)}var _r=P(null),Hl=P(0);function Bm(t,i){t=Ta,W(Hl,t),W(_r,i),Ta=t|i.baseLanes}function hf(){W(Hl,Ta),W(_r,_r.current)}function pf(){Ta=Hl.current,J(_r),J(Hl)}var fi=P(null),Ri=null;function Ka(t){var i=t.alternate;W(vn,vn.current&1),W(fi,t),Ri===null&&(i===null||_r.current!==null||i.memoizedState!==null)&&(Ri=t)}function mf(t){W(vn,vn.current),W(fi,t),Ri===null&&(Ri=t)}function Gm(t){t.tag===22?(W(vn,vn.current),W(fi,t),Ri===null&&(Ri=t)):Qa()}function Qa(){W(vn,vn.current),W(fi,fi.current)}function di(t){J(fi),Ri===t&&(Ri=null),J(vn)}var vn=P(0);function Vl(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Sd(s)||Md(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var _a=0,Mt=null,Jt=null,bn=null,kl=!1,xr=!1,Bs=!1,Wl=0,wo=0,vr=null,xy=0;function mn(){throw Error(a(321))}function gf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!ci(t[s],i[s]))return!1;return!0}function _f(t,i,s,l,f,d){return _a=d,Mt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,N.H=t===null||t.memoizedState===null?bg:Uf,Bs=!1,d=s(l,f),Bs=!1,xr&&(d=Vm(i,s,l,f)),Hm(t),d}function Hm(t){N.H=Do;var i=Jt!==null&&Jt.next!==null;if(_a=0,bn=Jt=Mt=null,kl=!1,wo=0,vr=null,i)throw Error(a(300));t===null||En||(t=t.dependencies,t!==null&&Ol(t)&&(En=!0))}function Vm(t,i,s,l){Mt=t;var f=0;do{if(xr&&(vr=null),wo=0,xr=!1,25<=f)throw Error(a(301));if(f+=1,bn=Jt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}N.H=Eg,d=i(s,l)}while(xr);return d}function vy(){var t=N.H,i=t.useState()[0];return i=typeof i.then=="function"?Ro(i):i,t=t.useState()[0],(Jt!==null?Jt.memoizedState:null)!==t&&(Mt.flags|=1024),i}function xf(){var t=Wl!==0;return Wl=0,t}function vf(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function yf(t){if(kl){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}kl=!1}_a=0,bn=Jt=Mt=null,xr=!1,wo=Wl=0,vr=null}function $n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bn===null?Mt.memoizedState=bn=t:bn=bn.next=t,bn}function yn(){if(Jt===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=Jt.next;var i=bn===null?Mt.memoizedState:bn.next;if(i!==null)bn=i,Jt=t;else{if(t===null)throw Mt.alternate===null?Error(a(467)):Error(a(310));Jt=t,t={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},bn===null?Mt.memoizedState=bn=t:bn=bn.next=t}return bn}function Xl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ro(t){var i=wo;return wo+=1,vr===null&&(vr=[]),t=Um(vr,t,i),i=Mt,(bn===null?i.memoizedState:bn.next)===null&&(i=i.alternate,N.H=i===null||i.memoizedState===null?bg:Uf),t}function Yl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ro(t);if(t.$$typeof===F)return zn(t)}throw Error(a(438,String(t)))}function Sf(t){var i=null,s=Mt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=Mt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Xl(),Mt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=q;return i.index++,s}function xa(t,i){return typeof i=="function"?i(t):i}function jl(t){var i=yn();return Mf(i,Jt,t)}function Mf(t,i,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=t.baseQueue,d=l.pending;if(d!==null){if(f!==null){var v=f.next;f.next=d.next,d.next=v}i.baseQueue=f=d,l.pending=null}if(d=t.baseState,f===null)t.memoizedState=d;else{i=f.next;var R=v=null,k=null,re=i,Se=!1;do{var we=re.lane&-536870913;if(we!==re.lane?(Ut&we)===we:(_a&we)===we){var ce=re.revertLane;if(ce===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),we===hr&&(Se=!0);else if((_a&ce)===ce){re=re.next,ce===hr&&(Se=!0);continue}else we={lane:0,revertLane:re.revertLane,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},k===null?(R=k=we,v=d):k=k.next=we,Mt.lanes|=ce,ts|=ce;we=re.action,Bs&&s(d,we),d=re.hasEagerState?re.eagerState:s(d,we)}else ce={lane:we,revertLane:re.revertLane,gesture:re.gesture,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},k===null?(R=k=ce,v=d):k=k.next=ce,Mt.lanes|=we,ts|=we;re=re.next}while(re!==null&&re!==i);if(k===null?v=d:k.next=R,!ci(d,t.memoizedState)&&(En=!0,Se&&(s=pr,s!==null)))throw s;t.memoizedState=d,t.baseState=v,t.baseQueue=k,l.lastRenderedState=d}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function bf(t){var i=yn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,d=i.memoizedState;if(f!==null){s.pending=null;var v=f=f.next;do d=t(d,v.action),v=v.next;while(v!==f);ci(d,i.memoizedState)||(En=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,l]}function km(t,i,s){var l=Mt,f=yn(),d=It;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=i();var v=!ci((Jt||f).memoizedState,s);if(v&&(f.memoizedState=s,En=!0),f=f.queue,Af(Ym.bind(null,l,f,t),[t]),f.getSnapshot!==i||v||bn!==null&&bn.memoizedState.tag&1){if(l.flags|=2048,yr(9,{destroy:void 0},Xm.bind(null,l,f,s,i),null),sn===null)throw Error(a(349));d||(_a&127)!==0||Wm(l,i,s)}return s}function Wm(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Mt.updateQueue,i===null?(i=Xl(),Mt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Xm(t,i,s,l){i.value=s,i.getSnapshot=l,jm(i)&&qm(t)}function Ym(t,i,s){return s(function(){jm(i)&&qm(t)})}function jm(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!ci(t,s)}catch{return!0}}function qm(t){var i=Ds(t,2);i!==null&&ai(i,t,2)}function Ef(t){var i=$n();if(typeof t=="function"){var s=t;if(t=s(),Bs){Ge(!0);try{s()}finally{Ge(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:t},i}function $m(t,i,s,l){return t.baseState=s,Mf(t,Jt,typeof l=="function"?l:xa)}function yy(t,i,s,l,f){if(Zl(t))throw Error(a(485));if(t=i.action,t!==null){var d={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};N.T!==null?s(!0):d.isTransition=!1,l(d),s=i.pending,s===null?(d.next=i.pending=d,Zm(i,d)):(d.next=s.next,i.pending=s.next=d)}}function Zm(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var d=N.T,v={};N.T=v;try{var R=s(f,l),k=N.S;k!==null&&k(v,R),Km(t,i,R)}catch(re){Tf(t,i,re)}finally{d!==null&&v.types!==null&&(d.types=v.types),N.T=d}}else try{d=s(f,l),Km(t,i,d)}catch(re){Tf(t,i,re)}}function Km(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Qm(t,i,l)},function(l){return Tf(t,i,l)}):Qm(t,i,s)}function Qm(t,i,s){i.status="fulfilled",i.value=s,Jm(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,Zm(t,s)))}function Tf(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,Jm(i),i=i.next;while(i!==l)}t.action=null}function Jm(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function eg(t,i){return i}function tg(t,i){if(It){var s=sn.formState;if(s!==null){e:{var l=Mt;if(It){if(on){t:{for(var f=on,d=wi;f.nodeType!==8;){if(!d){f=null;break t}if(f=Ci(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){on=Ci(f.nextSibling),l=f.data==="F!";break e}}Ya(l)}l=!1}l&&(i=s[0])}}return s=$n(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:eg,lastRenderedState:i},s.queue=l,s=yg.bind(null,Mt,l),l.dispatch=s,l=Ef(!1),d=Nf.bind(null,Mt,!1,l.queue),l=$n(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=yy.bind(null,Mt,f,d,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function ng(t){var i=yn();return ig(i,Jt,t)}function ig(t,i,s){if(i=Mf(t,i,eg)[0],t=jl(xa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Ro(i)}catch(v){throw v===mr?Pl:v}else l=i;i=yn();var f=i.queue,d=f.dispatch;return s!==i.memoizedState&&(Mt.flags|=2048,yr(9,{destroy:void 0},Sy.bind(null,f,s),null)),[l,d,t]}function Sy(t,i){t.action=i}function ag(t){var i=yn(),s=Jt;if(s!==null)return ig(i,s,t);yn(),i=i.memoizedState,s=yn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function yr(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=Mt.updateQueue,i===null&&(i=Xl(),Mt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function sg(){return yn().memoizedState}function ql(t,i,s,l){var f=$n();Mt.flags|=t,f.memoizedState=yr(1|i,{destroy:void 0},s,l===void 0?null:l)}function $l(t,i,s,l){var f=yn();l=l===void 0?null:l;var d=f.memoizedState.inst;Jt!==null&&l!==null&&gf(l,Jt.memoizedState.deps)?f.memoizedState=yr(i,d,s,l):(Mt.flags|=t,f.memoizedState=yr(1|i,d,s,l))}function rg(t,i){ql(8390656,8,t,i)}function Af(t,i){$l(2048,8,t,i)}function My(t){Mt.flags|=4;var i=Mt.updateQueue;if(i===null)i=Xl(),Mt.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function og(t){var i=yn().memoizedState;return My({ref:i,nextImpl:t}),function(){if((Wt&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function lg(t,i){return $l(4,2,t,i)}function cg(t,i){return $l(4,4,t,i)}function ug(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function fg(t,i,s){s=s!=null?s.concat([t]):null,$l(4,4,ug.bind(null,i,t),s)}function wf(){}function dg(t,i){var s=yn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&gf(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function hg(t,i){var s=yn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&gf(i,l[1]))return l[0];if(l=t(),Bs){Ge(!0);try{t()}finally{Ge(!1)}}return s.memoizedState=[l,i],l}function Rf(t,i,s){return s===void 0||(_a&1073741824)!==0&&(Ut&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=p0(),Mt.lanes|=t,ts|=t,s)}function pg(t,i,s,l){return ci(s,i)?s:_r.current!==null?(t=Rf(t,s,l),ci(t,i)||(En=!0),t):(_a&42)===0||(_a&1073741824)!==0&&(Ut&261930)===0?(En=!0,t.memoizedState=s):(t=p0(),Mt.lanes|=t,ts|=t,i)}function mg(t,i,s,l,f){var d=G.p;G.p=d!==0&&8>d?d:8;var v=N.T,R={};N.T=R,Nf(t,!1,i,s);try{var k=f(),re=N.S;if(re!==null&&re(R,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var Se=_y(k,l);Co(t,i,Se,mi(t))}else Co(t,i,l,mi(t))}catch(we){Co(t,i,{then:function(){},status:"rejected",reason:we},mi())}finally{G.p=d,v!==null&&R.types!==null&&(v.types=R.types),N.T=v}}function by(){}function Cf(t,i,s,l){if(t.tag!==5)throw Error(a(476));var f=gg(t).queue;mg(t,f,i,oe,s===null?by:function(){return _g(t),s(l)})}function gg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:oe},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function _g(t){var i=gg(t);i.next===null&&(i=t.alternate.memoizedState),Co(t,i.next.queue,{},mi())}function Df(){return zn(Yo)}function xg(){return yn().memoizedState}function vg(){return yn().memoizedState}function Ey(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=mi();t=$a(s);var l=Za(i,t,s);l!==null&&(ai(l,i,s),Eo(l,i,s)),i={cache:sf()},t.payload=i;return}i=i.return}}function Ty(t,i,s){var l=mi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Zl(t)?Sg(i,s):(s=ju(t,i,s,l),s!==null&&(ai(s,t,l),Mg(s,i,l)))}function yg(t,i,s){var l=mi();Co(t,i,s,l)}function Co(t,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Zl(t))Sg(i,f);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,R=d(v,s);if(f.hasEagerState=!0,f.eagerState=R,ci(R,v))return Dl(t,i,f,0),sn===null&&Cl(),!1}catch{}finally{}if(s=ju(t,i,f,l),s!==null)return ai(s,t,l),Mg(s,i,l),!0}return!1}function Nf(t,i,s,l){if(l={lane:2,revertLane:cd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Zl(t)){if(i)throw Error(a(479))}else i=ju(t,s,l,2),i!==null&&ai(i,t,2)}function Zl(t){var i=t.alternate;return t===Mt||i!==null&&i===Mt}function Sg(t,i){xr=kl=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Mg(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Qn(t,s)}}var Do={readContext:zn,use:Yl,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useLayoutEffect:mn,useInsertionEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useSyncExternalStore:mn,useId:mn,useHostTransitionStatus:mn,useFormState:mn,useActionState:mn,useOptimistic:mn,useMemoCache:mn,useCacheRefresh:mn};Do.useEffectEvent=mn;var bg={readContext:zn,use:Yl,useCallback:function(t,i){return $n().memoizedState=[t,i===void 0?null:i],t},useContext:zn,useEffect:rg,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,ql(4194308,4,ug.bind(null,i,t),s)},useLayoutEffect:function(t,i){return ql(4194308,4,t,i)},useInsertionEffect:function(t,i){ql(4,2,t,i)},useMemo:function(t,i){var s=$n();i=i===void 0?null:i;var l=t();if(Bs){Ge(!0);try{t()}finally{Ge(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=$n();if(s!==void 0){var f=s(i);if(Bs){Ge(!0);try{s(i)}finally{Ge(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=Ty.bind(null,Mt,t),[l.memoizedState,t]},useRef:function(t){var i=$n();return t={current:t},i.memoizedState=t},useState:function(t){t=Ef(t);var i=t.queue,s=yg.bind(null,Mt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:wf,useDeferredValue:function(t,i){var s=$n();return Rf(s,t,i)},useTransition:function(){var t=Ef(!1);return t=mg.bind(null,Mt,t.queue,!0,!1),$n().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=Mt,f=$n();if(It){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),sn===null)throw Error(a(349));(Ut&127)!==0||Wm(l,i,s)}f.memoizedState=s;var d={value:s,getSnapshot:i};return f.queue=d,rg(Ym.bind(null,l,d,t),[t]),l.flags|=2048,yr(9,{destroy:void 0},Xm.bind(null,l,d,s,i),null),s},useId:function(){var t=$n(),i=sn.identifierPrefix;if(It){var s=Zi,l=$i;s=(l&~(1<<32-je(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Wl++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=xy++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Df,useFormState:tg,useActionState:tg,useOptimistic:function(t){var i=$n();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Nf.bind(null,Mt,!0,s),s.dispatch=i,[t,i]},useMemoCache:Sf,useCacheRefresh:function(){return $n().memoizedState=Ey.bind(null,Mt)},useEffectEvent:function(t){var i=$n(),s={impl:t};return i.memoizedState=s,function(){if((Wt&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},Uf={readContext:zn,use:Yl,useCallback:dg,useContext:zn,useEffect:Af,useImperativeHandle:fg,useInsertionEffect:lg,useLayoutEffect:cg,useMemo:hg,useReducer:jl,useRef:sg,useState:function(){return jl(xa)},useDebugValue:wf,useDeferredValue:function(t,i){var s=yn();return pg(s,Jt.memoizedState,t,i)},useTransition:function(){var t=jl(xa)[0],i=yn().memoizedState;return[typeof t=="boolean"?t:Ro(t),i]},useSyncExternalStore:km,useId:xg,useHostTransitionStatus:Df,useFormState:ng,useActionState:ng,useOptimistic:function(t,i){var s=yn();return $m(s,Jt,t,i)},useMemoCache:Sf,useCacheRefresh:vg};Uf.useEffectEvent=og;var Eg={readContext:zn,use:Yl,useCallback:dg,useContext:zn,useEffect:Af,useImperativeHandle:fg,useInsertionEffect:lg,useLayoutEffect:cg,useMemo:hg,useReducer:bf,useRef:sg,useState:function(){return bf(xa)},useDebugValue:wf,useDeferredValue:function(t,i){var s=yn();return Jt===null?Rf(s,t,i):pg(s,Jt.memoizedState,t,i)},useTransition:function(){var t=bf(xa)[0],i=yn().memoizedState;return[typeof t=="boolean"?t:Ro(t),i]},useSyncExternalStore:km,useId:xg,useHostTransitionStatus:Df,useFormState:ag,useActionState:ag,useOptimistic:function(t,i){var s=yn();return Jt!==null?$m(s,Jt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Sf,useCacheRefresh:vg};Eg.useEffectEvent=og;function Lf(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:x({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Of={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=mi(),f=$a(l);f.payload=i,s!=null&&(f.callback=s),i=Za(t,f,l),i!==null&&(ai(i,t,l),Eo(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=mi(),f=$a(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Za(t,f,l),i!==null&&(ai(i,t,l),Eo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=mi(),l=$a(s);l.tag=2,i!=null&&(l.callback=i),i=Za(t,l,s),i!==null&&(ai(i,t,s),Eo(i,t,s))}};function Tg(t,i,s,l,f,d,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!go(s,l)||!go(f,d):!0}function Ag(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Of.enqueueReplaceState(i,i.state,null)}function Gs(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=x({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function wg(t){Rl(t)}function Rg(t){console.error(t)}function Cg(t){Rl(t)}function Kl(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Dg(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function If(t,i,s){return s=$a(s),s.tag=3,s.payload={element:null},s.callback=function(){Kl(t,i)},s}function Ng(t){return t=$a(t),t.tag=3,t}function Ug(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;t.payload=function(){return f(d)},t.callback=function(){Dg(i,s,l)}}var v=s.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){Dg(i,s,l),typeof f!="function"&&(ns===null?ns=new Set([this]):ns.add(this));var R=l.stack;this.componentDidCatch(l.value,{componentStack:R!==null?R:""})})}function Ay(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&dr(i,s,f,!0),s=fi.current,s!==null){switch(s.tag){case 31:case 13:return Ri===null?cc():s.alternate===null&&gn===0&&(gn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Fl?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),rd(t,l,f)),!1;case 22:return s.flags|=65536,l===Fl?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),rd(t,l,f)),!1}throw Error(a(435,s.tag))}return rd(t,l,f),cc(),!1}if(It)return i=fi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Ju&&(t=Error(a(422),{cause:l}),vo(Ei(t,s)))):(l!==Ju&&(i=Error(a(423),{cause:l}),vo(Ei(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Ei(l,s),f=If(t.stateNode,l,f),ff(t,f),gn!==4&&(gn=2)),!1;var d=Error(a(520),{cause:l});if(d=Ei(d,s),Fo===null?Fo=[d]:Fo.push(d),gn!==4&&(gn=2),i===null)return!0;l=Ei(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=If(s.stateNode,l,t),ff(s,t),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ns===null||!ns.has(d))))return s.flags|=65536,f&=-f,s.lanes|=f,f=Ng(f),Ug(f,t,s,l),ff(s,f),!1}s=s.return}while(s!==null);return!1}var zf=Error(a(461)),En=!1;function Pn(t,i,s,l){i.child=t===null?zm(i,null,s,l):Fs(i,t.child,s,l)}function Lg(t,i,s,l,f){s=s.render;var d=i.ref;if("ref"in l){var v={};for(var R in l)R!=="ref"&&(v[R]=l[R])}else v=l;return Os(i),l=_f(t,i,s,v,d,f),R=xf(),t!==null&&!En?(vf(t,i,f),va(t,i,f)):(It&&R&&Ku(i),i.flags|=1,Pn(t,i,l,f),i.child)}function Og(t,i,s,l,f){if(t===null){var d=s.type;return typeof d=="function"&&!qu(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,Ig(t,i,d,l,f)):(t=Ul(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!Wf(t,f)){var v=d.memoizedProps;if(s=s.compare,s=s!==null?s:go,s(v,l)&&t.ref===i.ref)return va(t,i,f)}return i.flags|=1,t=ha(d,l),t.ref=i.ref,t.return=i,i.child=t}function Ig(t,i,s,l,f){if(t!==null){var d=t.memoizedProps;if(go(d,l)&&t.ref===i.ref)if(En=!1,i.pendingProps=l=d,Wf(t,f))(t.flags&131072)!==0&&(En=!0);else return i.lanes=t.lanes,va(t,i,f)}return Pf(t,i,s,l,f)}function zg(t,i,s,l){var f=l.children,d=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~d}else l=0,i.child=null;return Pg(t,i,d,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&zl(i,d!==null?d.cachePool:null),d!==null?Bm(i,d):hf(),Gm(i);else return l=i.lanes=536870912,Pg(t,i,d!==null?d.baseLanes|s:s,s,l)}else d!==null?(zl(i,d.cachePool),Bm(i,d),Qa(),i.memoizedState=null):(t!==null&&zl(i,null),hf(),Qa());return Pn(t,i,f,s),i.child}function No(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Pg(t,i,s,l,f){var d=of();return d=d===null?null:{parent:Mn._currentValue,pool:d},i.memoizedState={baseLanes:s,cachePool:d},t!==null&&zl(i,null),hf(),Gm(i),t!==null&&dr(t,i,l,!0),i.childLanes=f,null}function Ql(t,i){return i=ec({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function Fg(t,i,s){return Fs(i,t.child,null,s),t=Ql(i,i.pendingProps),t.flags|=2,di(i),i.memoizedState=null,t}function wy(t,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(It){if(l.mode==="hidden")return t=Ql(i,l),i.lanes=536870912,No(null,t);if(mf(i),(t=on)?(t=Z0(t,wi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Wa!==null?{id:$i,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},s=Sm(t),s.return=i,i.child=s,In=i,on=null)):t=null,t===null)throw Ya(i);return i.lanes=536870912,null}return Ql(i,l)}var d=t.memoizedState;if(d!==null){var v=d.dehydrated;if(mf(i),f)if(i.flags&256)i.flags&=-257,i=Fg(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(En||dr(t,i,s,!1),f=(s&t.childLanes)!==0,En||f){if(l=sn,l!==null&&(v=Gn(l,s),v!==0&&v!==d.retryLane))throw d.retryLane=v,Ds(t,v),ai(l,t,v),zf;cc(),i=Fg(t,i,s)}else t=d.treeContext,on=Ci(v.nextSibling),In=i,It=!0,Xa=null,wi=!1,t!==null&&Em(i,t),i=Ql(i,l),i.flags|=4096;return i}return t=ha(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function Jl(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Pf(t,i,s,l,f){return Os(i),s=_f(t,i,s,l,void 0,f),l=xf(),t!==null&&!En?(vf(t,i,f),va(t,i,f)):(It&&l&&Ku(i),i.flags|=1,Pn(t,i,s,f),i.child)}function Bg(t,i,s,l,f,d){return Os(i),i.updateQueue=null,s=Vm(i,l,s,f),Hm(t),l=xf(),t!==null&&!En?(vf(t,i,d),va(t,i,d)):(It&&l&&Ku(i),i.flags|=1,Pn(t,i,s,d),i.child)}function Gg(t,i,s,l,f){if(Os(i),i.stateNode===null){var d=lr,v=s.contextType;typeof v=="object"&&v!==null&&(d=zn(v)),d=new s(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Of,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},cf(i),v=s.contextType,d.context=typeof v=="object"&&v!==null?zn(v):lr,d.state=i.memoizedState,v=s.getDerivedStateFromProps,typeof v=="function"&&(Lf(i,s,v,l),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&Of.enqueueReplaceState(d,d.state,null),Ao(i,l,d,f),To(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var R=i.memoizedProps,k=Gs(s,R);d.props=k;var re=d.context,Se=s.contextType;v=lr,typeof Se=="object"&&Se!==null&&(v=zn(Se));var we=s.getDerivedStateFromProps;Se=typeof we=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,Se||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||re!==v)&&Ag(i,d,l,v),qa=!1;var ce=i.memoizedState;d.state=ce,Ao(i,l,d,f),To(),re=i.memoizedState,R||ce!==re||qa?(typeof we=="function"&&(Lf(i,s,we,l),re=i.memoizedState),(k=qa||Tg(i,s,k,l,ce,re,v))?(Se||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=re),d.props=l,d.state=re,d.context=v,l=k):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,uf(t,i),v=i.memoizedProps,Se=Gs(s,v),d.props=Se,we=i.pendingProps,ce=d.context,re=s.contextType,k=lr,typeof re=="object"&&re!==null&&(k=zn(re)),R=s.getDerivedStateFromProps,(re=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==we||ce!==k)&&Ag(i,d,l,k),qa=!1,ce=i.memoizedState,d.state=ce,Ao(i,l,d,f),To();var de=i.memoizedState;v!==we||ce!==de||qa||t!==null&&t.dependencies!==null&&Ol(t.dependencies)?(typeof R=="function"&&(Lf(i,s,R,l),de=i.memoizedState),(Se=qa||Tg(i,s,Se,l,ce,de,k)||t!==null&&t.dependencies!==null&&Ol(t.dependencies))?(re||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,de,k),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,de,k)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&ce===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&ce===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=de),d.props=l,d.state=de,d.context=k,l=Se):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&ce===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&ce===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,Jl(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=Fs(i,t.child,null,f),i.child=Fs(i,null,s,f)):Pn(t,i,s,f),i.memoizedState=d.state,t=i.child):t=va(t,i,f),t}function Hg(t,i,s,l){return Us(),i.flags|=256,Pn(t,i,s,l),i.child}var Ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bf(t){return{baseLanes:t,cachePool:Dm()}}function Gf(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=pi),t}function Vg(t,i,s){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=t!==null&&t.memoizedState===null?!1:(vn.current&2)!==0),v&&(f=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,t===null){if(It){if(f?Ka(i):Qa(),(t=on)?(t=Z0(t,wi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Wa!==null?{id:$i,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},s=Sm(t),s.return=i,i.child=s,In=i,on=null)):t=null,t===null)throw Ya(i);return Md(t)?i.lanes=32:i.lanes=536870912,null}var R=l.children;return l=l.fallback,f?(Qa(),f=i.mode,R=ec({mode:"hidden",children:R},f),l=Ns(l,f,s,null),R.return=i,l.return=i,R.sibling=l,i.child=R,l=i.child,l.memoizedState=Bf(s),l.childLanes=Gf(t,v,s),i.memoizedState=Ff,No(null,l)):(Ka(i),Hf(i,R))}var k=t.memoizedState;if(k!==null&&(R=k.dehydrated,R!==null)){if(d)i.flags&256?(Ka(i),i.flags&=-257,i=Vf(t,i,s)):i.memoizedState!==null?(Qa(),i.child=t.child,i.flags|=128,i=null):(Qa(),R=l.fallback,f=i.mode,l=ec({mode:"visible",children:l.children},f),R=Ns(R,f,s,null),R.flags|=2,l.return=i,R.return=i,l.sibling=R,i.child=l,Fs(i,t.child,null,s),l=i.child,l.memoizedState=Bf(s),l.childLanes=Gf(t,v,s),i.memoizedState=Ff,i=No(null,l));else if(Ka(i),Md(R)){if(v=R.nextSibling&&R.nextSibling.dataset,v)var re=v.dgst;v=re,l=Error(a(419)),l.stack="",l.digest=v,vo({value:l,source:null,stack:null}),i=Vf(t,i,s)}else if(En||dr(t,i,s,!1),v=(s&t.childLanes)!==0,En||v){if(v=sn,v!==null&&(l=Gn(v,s),l!==0&&l!==k.retryLane))throw k.retryLane=l,Ds(t,l),ai(v,t,l),zf;Sd(R)||cc(),i=Vf(t,i,s)}else Sd(R)?(i.flags|=192,i.child=t.child,i=null):(t=k.treeContext,on=Ci(R.nextSibling),In=i,It=!0,Xa=null,wi=!1,t!==null&&Em(i,t),i=Hf(i,l.children),i.flags|=4096);return i}return f?(Qa(),R=l.fallback,f=i.mode,k=t.child,re=k.sibling,l=ha(k,{mode:"hidden",children:l.children}),l.subtreeFlags=k.subtreeFlags&65011712,re!==null?R=ha(re,R):(R=Ns(R,f,s,null),R.flags|=2),R.return=i,l.return=i,l.sibling=R,i.child=l,No(null,l),l=i.child,R=t.child.memoizedState,R===null?R=Bf(s):(f=R.cachePool,f!==null?(k=Mn._currentValue,f=f.parent!==k?{parent:k,pool:k}:f):f=Dm(),R={baseLanes:R.baseLanes|s,cachePool:f}),l.memoizedState=R,l.childLanes=Gf(t,v,s),i.memoizedState=Ff,No(t.child,l)):(Ka(i),s=t.child,t=s.sibling,s=ha(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(v=i.deletions,v===null?(i.deletions=[t],i.flags|=16):v.push(t)),i.child=s,i.memoizedState=null,s)}function Hf(t,i){return i=ec({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function ec(t,i){return t=ui(22,t,null,i),t.lanes=0,t}function Vf(t,i,s){return Fs(i,t.child,null,s),t=Hf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function kg(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),nf(t.return,i,s)}function kf(t,i,s,l,f,d){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:d}:(v.isBackwards=i,v.rendering=null,v.renderingStartTime=0,v.last=l,v.tail=s,v.tailMode=f,v.treeForkCount=d)}function Wg(t,i,s){var l=i.pendingProps,f=l.revealOrder,d=l.tail;l=l.children;var v=vn.current,R=(v&2)!==0;if(R?(v=v&1|2,i.flags|=128):v&=1,W(vn,v),Pn(t,i,l,s),l=It?xo:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kg(t,s,i);else if(t.tag===19)kg(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&Vl(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),kf(i,!1,f,s,d,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Vl(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}kf(i,!0,s,null,d,l);break;case"together":kf(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function va(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),ts|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(dr(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=ha(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ha(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Wf(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Ol(t)))}function Ry(t,i,s){switch(i.tag){case 3:Ce(i,i.stateNode.containerInfo),ja(i,Mn,t.memoizedState.cache),Us();break;case 27:case 5:ft(i);break;case 4:Ce(i,i.stateNode.containerInfo);break;case 10:ja(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,mf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ka(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Vg(t,i,s):(Ka(i),t=va(t,i,s),t!==null?t.sibling:null);Ka(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(dr(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return Wg(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),W(vn,vn.current),l)break;return null;case 22:return i.lanes=0,zg(t,i,s,i.pendingProps);case 24:ja(i,Mn,t.memoizedState.cache)}return va(t,i,s)}function Xg(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)En=!0;else{if(!Wf(t,s)&&(i.flags&128)===0)return En=!1,Ry(t,i,s);En=(t.flags&131072)!==0}else En=!1,It&&(i.flags&1048576)!==0&&bm(i,xo,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=zs(i.elementType),i.type=t,typeof t=="function")qu(t)?(l=Gs(t,l),i.tag=1,i=Gg(null,i,t,l,s)):(i.tag=0,i=Pf(null,i,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===I){i.tag=11,i=Lg(null,i,t,l,s);break e}else if(f===O){i.tag=14,i=Og(null,i,t,l,s);break e}}throw i=me(t)||t,Error(a(306,i,""))}}return i;case 0:return Pf(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Gs(l,i.pendingProps),Gg(t,i,l,f,s);case 3:e:{if(Ce(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,uf(t,i),Ao(i,l,null,s);var v=i.memoizedState;if(l=v.cache,ja(i,Mn,l),l!==d.cache&&af(i,[Mn],s,!0),To(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Hg(t,i,l,s);break e}else if(l!==f){f=Ei(Error(a(424)),i),vo(f),i=Hg(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(on=Ci(t.firstChild),In=i,It=!0,Xa=null,wi=!0,s=zm(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Us(),l===f){i=va(t,i,s);break e}Pn(t,i,l,s)}i=i.child}return i;case 26:return Jl(t,i),t===null?(s=n_(i.type,null,i.pendingProps,null))?i.memoizedState=s:It||(s=i.type,t=i.pendingProps,l=gc(ie.current).createElement(s),l[hn]=i,l[Rn]=t,Fn(l,s,t),pn(l),i.stateNode=l):i.memoizedState=n_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return ft(i),t===null&&It&&(l=i.stateNode=J0(i.type,i.pendingProps,ie.current),In=i,wi=!0,f=on,rs(i.type)?(bd=f,on=Ci(l.firstChild)):on=f),Pn(t,i,i.pendingProps.children,s),Jl(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&It&&((f=l=on)&&(l=aS(l,i.type,i.pendingProps,wi),l!==null?(i.stateNode=l,In=i,on=Ci(l.firstChild),wi=!1,f=!0):f=!1),f||Ya(i)),ft(i),f=i.type,d=i.pendingProps,v=t!==null?t.memoizedProps:null,l=d.children,xd(f,d)?l=null:v!==null&&xd(f,v)&&(i.flags|=32),i.memoizedState!==null&&(f=_f(t,i,vy,null,null,s),Yo._currentValue=f),Jl(t,i),Pn(t,i,l,s),i.child;case 6:return t===null&&It&&((t=s=on)&&(s=sS(s,i.pendingProps,wi),s!==null?(i.stateNode=s,In=i,on=null,t=!0):t=!1),t||Ya(i)),null;case 13:return Vg(t,i,s);case 4:return Ce(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Fs(i,null,l,s):Pn(t,i,l,s),i.child;case 11:return Lg(t,i,i.type,i.pendingProps,s);case 7:return Pn(t,i,i.pendingProps,s),i.child;case 8:return Pn(t,i,i.pendingProps.children,s),i.child;case 12:return Pn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,ja(i,i.type,l.value),Pn(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Os(i),f=zn(f),l=l(f),i.flags|=1,Pn(t,i,l,s),i.child;case 14:return Og(t,i,i.type,i.pendingProps,s);case 15:return Ig(t,i,i.type,i.pendingProps,s);case 19:return Wg(t,i,s);case 31:return wy(t,i,s);case 22:return zg(t,i,s,i.pendingProps);case 24:return Os(i),l=zn(Mn),t===null?(f=of(),f===null&&(f=sn,d=sf(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=s),f=d),i.memoizedState={parent:l,cache:f},cf(i),ja(i,Mn,f)):((t.lanes&s)!==0&&(uf(t,i),Ao(i,null,null,s),To()),f=t.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),ja(i,Mn,l)):(l=d.cache,ja(i,Mn,l),l!==f.cache&&af(i,[Mn],s,!0))),Pn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ya(t){t.flags|=4}function Xf(t,i,s,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(x0())t.flags|=8192;else throw Ps=Fl,lf}else t.flags&=-16777217}function Yg(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!o_(i))if(x0())t.flags|=8192;else throw Ps=Fl,lf}function tc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Le():536870912,t.lanes|=i,Er|=i)}function Uo(t,i){if(!It)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function ln(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function Cy(t,i,s){var l=i.pendingProps;switch(Qu(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(i),null;case 1:return ln(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ga(Mn),tt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(fr(i)?ya(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ef())),ln(i),null;case 26:var f=i.type,d=i.memoizedState;return t===null?(ya(i),d!==null?(ln(i),Yg(i,d)):(ln(i),Xf(i,f,null,l,s))):d?d!==t.memoizedState?(ya(i),ln(i),Yg(i,d)):(ln(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&ya(i),ln(i),Xf(i,f,t,l,s)),null;case 27:if(dt(i),s=ie.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ya(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return ln(i),null}t=Re.current,fr(i)?Tm(i):(t=J0(f,l,s),i.stateNode=t,ya(i))}return ln(i),null;case 5:if(dt(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ya(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return ln(i),null}if(d=Re.current,fr(i))Tm(i);else{var v=gc(ie.current);switch(d){case 1:d=v.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=v.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=v.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?v.createElement("select",{is:l.is}):v.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?v.createElement(f,{is:l.is}):v.createElement(f)}}d[hn]=i,d[Rn]=l;e:for(v=i.child;v!==null;){if(v.tag===5||v.tag===6)d.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===i)break e;for(;v.sibling===null;){if(v.return===null||v.return===i)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}i.stateNode=d;e:switch(Fn(d,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ya(i)}}return ln(i),Xf(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&ya(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=ie.current,fr(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=In,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[hn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||V0(t.nodeValue,s)),t||Ya(i,!0)}else t=gc(t).createTextNode(l),t[hn]=i,i.stateNode=t}return ln(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=fr(i),s!==null){if(t===null){if(!l)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[hn]=i}else Us(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ln(i),t=!1}else s=ef(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(di(i),i):(di(i),null);if((i.flags&128)!==0)throw Error(a(558))}return ln(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=fr(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[hn]=i}else Us(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ln(i),f=!1}else f=ef(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(di(i),i):(di(i),null)}return di(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),tc(i,i.updateQueue),ln(i),null);case 4:return tt(),t===null&&hd(i.stateNode.containerInfo),ln(i),null;case 10:return ga(i.type),ln(i),null;case 19:if(J(vn),l=i.memoizedState,l===null)return ln(i),null;if(f=(i.flags&128)!==0,d=l.rendering,d===null)if(f)Uo(l,!1);else{if(gn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=Vl(t),d!==null){for(i.flags|=128,Uo(l,!1),t=d.updateQueue,i.updateQueue=t,tc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)ym(s,t),s=s.sibling;return W(vn,vn.current&1|2),It&&pa(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&Fe()>rc&&(i.flags|=128,f=!0,Uo(l,!1),i.lanes=4194304)}else{if(!f)if(t=Vl(d),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,tc(i,t),Uo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!It)return ln(i),null}else 2*Fe()-l.renderingStartTime>rc&&s!==536870912&&(i.flags|=128,f=!0,Uo(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(t=l.last,t!==null?t.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Fe(),t.sibling=null,s=vn.current,W(vn,f?s&1|2:s&1),It&&pa(i,l.treeForkCount),t):(ln(i),null);case 22:case 23:return di(i),pf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(ln(i),i.subtreeFlags&6&&(i.flags|=8192)):ln(i),s=i.updateQueue,s!==null&&tc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&J(Is),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ga(Mn),ln(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Dy(t,i){switch(Qu(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ga(Mn),tt(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return dt(i),null;case 31:if(i.memoizedState!==null){if(di(i),i.alternate===null)throw Error(a(340));Us()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(di(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Us()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return J(vn),null;case 4:return tt(),null;case 10:return ga(i.type),null;case 22:case 23:return di(i),pf(),t!==null&&J(Is),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return ga(Mn),null;case 25:return null;default:return null}}function jg(t,i){switch(Qu(i),i.tag){case 3:ga(Mn),tt();break;case 26:case 27:case 5:dt(i);break;case 4:tt();break;case 31:i.memoizedState!==null&&di(i);break;case 13:di(i);break;case 19:J(vn);break;case 10:ga(i.type);break;case 22:case 23:di(i),pf(),t!==null&&J(Is);break;case 24:ga(Mn)}}function Lo(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var d=s.create,v=s.inst;l=d(),v.destroy=l}s=s.next}while(s!==f)}}catch(R){qt(i,i.return,R)}}function Ja(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&t)===t){var v=l.inst,R=v.destroy;if(R!==void 0){v.destroy=void 0,f=i;var k=s,re=R;try{re()}catch(Se){qt(f,k,Se)}}}l=l.next}while(l!==d)}}catch(Se){qt(i,i.return,Se)}}function qg(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{Fm(i,s)}catch(l){qt(t,t.return,l)}}}function $g(t,i,s){s.props=Gs(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){qt(t,i,l)}}function Oo(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){qt(t,i,f)}}function Ki(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){qt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){qt(t,i,f)}else s.current=null}function Zg(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){qt(t,t.return,f)}}function Yf(t,i,s){try{var l=t.stateNode;Qy(l,t.type,s,i),l[Rn]=i}catch(f){qt(t,t.return,f)}}function Kg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&rs(t.type)||t.tag===4}function jf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Kg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&rs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qf(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=fa));else if(l!==4&&(l===27&&rs(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(qf(t,i,s),t=t.sibling;t!==null;)qf(t,i,s),t=t.sibling}function nc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&rs(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(nc(t,i,s),t=t.sibling;t!==null;)nc(t,i,s),t=t.sibling}function Qg(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Fn(i,l,s),i[hn]=t,i[Rn]=s}catch(d){qt(t,t.return,d)}}var Sa=!1,Tn=!1,$f=!1,Jg=typeof WeakSet=="function"?WeakSet:Set,Ln=null;function Ny(t,i){if(t=t.containerInfo,gd=bc,t=fm(t),Hu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var v=0,R=-1,k=-1,re=0,Se=0,we=t,ce=null;t:for(;;){for(var de;we!==s||f!==0&&we.nodeType!==3||(R=v+f),we!==d||l!==0&&we.nodeType!==3||(k=v+l),we.nodeType===3&&(v+=we.nodeValue.length),(de=we.firstChild)!==null;)ce=we,we=de;for(;;){if(we===t)break t;if(ce===s&&++re===f&&(R=v),ce===d&&++Se===l&&(k=v),(de=we.nextSibling)!==null)break;we=ce,ce=we.parentNode}we=de}s=R===-1||k===-1?null:{start:R,end:k}}else s=null}s=s||{start:0,end:0}}else s=null;for(_d={focusedElem:t,selectionRange:s},bc=!1,Ln=i;Ln!==null;)if(i=Ln,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ln=t;else for(;Ln!==null;){switch(i=Ln,d=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,s=i,f=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var it=Gs(s.type,f);t=l.getSnapshotBeforeUpdate(it,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(pt){qt(s,s.return,pt)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)yd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":yd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,Ln=t;break}Ln=i.return}}function e0(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:ba(t,s),l&4&&Lo(5,s);break;case 1:if(ba(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(v){qt(s,s.return,v)}else{var f=Gs(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(v){qt(s,s.return,v)}}l&64&&qg(s),l&512&&Oo(s,s.return);break;case 3:if(ba(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Fm(t,i)}catch(v){qt(s,s.return,v)}}break;case 27:i===null&&l&4&&Qg(s);case 26:case 5:ba(t,s),i===null&&l&4&&Zg(s),l&512&&Oo(s,s.return);break;case 12:ba(t,s);break;case 31:ba(t,s),l&4&&i0(t,s);break;case 13:ba(t,s),l&4&&a0(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=Gy.bind(null,s),rS(t,s))));break;case 22:if(l=s.memoizedState!==null||Sa,!l){i=i!==null&&i.memoizedState!==null||Tn,f=Sa;var d=Tn;Sa=l,(Tn=i)&&!d?Ea(t,s,(s.subtreeFlags&8772)!==0):ba(t,s),Sa=f,Tn=d}break;case 30:break;default:ba(t,s)}}function t0(t){var i=t.alternate;i!==null&&(t.alternate=null,t0(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Ha(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var un=null,ei=!1;function Ma(t,i,s){for(s=s.child;s!==null;)n0(t,i,s),s=s.sibling}function n0(t,i,s){if(_e&&typeof _e.onCommitFiberUnmount=="function")try{_e.onCommitFiberUnmount(pe,s)}catch{}switch(s.tag){case 26:Tn||Ki(s,i),Ma(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Tn||Ki(s,i);var l=un,f=ei;rs(s.type)&&(un=s.stateNode,ei=!1),Ma(t,i,s),ko(s.stateNode),un=l,ei=f;break;case 5:Tn||Ki(s,i);case 6:if(l=un,f=ei,un=null,Ma(t,i,s),un=l,ei=f,un!==null)if(ei)try{(un.nodeType===9?un.body:un.nodeName==="HTML"?un.ownerDocument.body:un).removeChild(s.stateNode)}catch(d){qt(s,i,d)}else try{un.removeChild(s.stateNode)}catch(d){qt(s,i,d)}break;case 18:un!==null&&(ei?(t=un,q0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Ur(t)):q0(un,s.stateNode));break;case 4:l=un,f=ei,un=s.stateNode.containerInfo,ei=!0,Ma(t,i,s),un=l,ei=f;break;case 0:case 11:case 14:case 15:Ja(2,s,i),Tn||Ja(4,s,i),Ma(t,i,s);break;case 1:Tn||(Ki(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&$g(s,i,l)),Ma(t,i,s);break;case 21:Ma(t,i,s);break;case 22:Tn=(l=Tn)||s.memoizedState!==null,Ma(t,i,s),Tn=l;break;default:Ma(t,i,s)}}function i0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ur(t)}catch(s){qt(i,i.return,s)}}}function a0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ur(t)}catch(s){qt(i,i.return,s)}}function Uy(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new Jg),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new Jg),i;default:throw Error(a(435,t.tag))}}function ic(t,i){var s=Uy(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=Hy.bind(null,t,l);l.then(f,f)}})}function ti(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],d=t,v=i,R=v;e:for(;R!==null;){switch(R.tag){case 27:if(rs(R.type)){un=R.stateNode,ei=!1;break e}break;case 5:un=R.stateNode,ei=!1;break e;case 3:case 4:un=R.stateNode.containerInfo,ei=!0;break e}R=R.return}if(un===null)throw Error(a(160));n0(d,v,f),un=null,ei=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)s0(i,t),i=i.sibling}var Bi=null;function s0(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ti(i,t),ni(t),l&4&&(Ja(3,t,t.return),Lo(3,t),Ja(5,t,t.return));break;case 1:ti(i,t),ni(t),l&512&&(Tn||s===null||Ki(s,s.return)),l&64&&Sa&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Bi;if(ti(i,t),ni(t),l&512&&(Tn||s===null||Ki(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[zi]||d[hn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),Fn(d,l,s),d[hn]=t,pn(d),l=d;break e;case"link":var v=s_("link","href",f).get(l+(s.href||""));if(v){for(var R=0;R<v.length;R++)if(d=v[R],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){v.splice(R,1);break t}}d=f.createElement(l),Fn(d,l,s),f.head.appendChild(d);break;case"meta":if(v=s_("meta","content",f).get(l+(s.content||""))){for(R=0;R<v.length;R++)if(d=v[R],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){v.splice(R,1);break t}}d=f.createElement(l),Fn(d,l,s),f.head.appendChild(d);break;default:throw Error(a(468,l))}d[hn]=t,pn(d),l=d}t.stateNode=l}else r_(f,t.type,t.stateNode);else t.stateNode=a_(f,l,t.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?r_(f,t.type,t.stateNode):a_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Yf(t,t.memoizedProps,s.memoizedProps)}break;case 27:ti(i,t),ni(t),l&512&&(Tn||s===null||Ki(s,s.return)),s!==null&&l&4&&Yf(t,t.memoizedProps,s.memoizedProps);break;case 5:if(ti(i,t),ni(t),l&512&&(Tn||s===null||Ki(s,s.return)),t.flags&32){f=t.stateNode;try{At(f,"")}catch(it){qt(t,t.return,it)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Yf(t,f,s!==null?s.memoizedProps:f)),l&1024&&($f=!0);break;case 6:if(ti(i,t),ni(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(it){qt(t,t.return,it)}}break;case 3:if(vc=null,f=Bi,Bi=_c(i.containerInfo),ti(i,t),Bi=f,ni(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Ur(i.containerInfo)}catch(it){qt(t,t.return,it)}$f&&($f=!1,r0(t));break;case 4:l=Bi,Bi=_c(t.stateNode.containerInfo),ti(i,t),ni(t),Bi=l;break;case 12:ti(i,t),ni(t);break;case 31:ti(i,t),ni(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,ic(t,l)));break;case 13:ti(i,t),ni(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(sc=Fe()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,ic(t,l)));break;case 22:f=t.memoizedState!==null;var k=s!==null&&s.memoizedState!==null,re=Sa,Se=Tn;if(Sa=re||f,Tn=Se||k,ti(i,t),Tn=Se,Sa=re,ni(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||k||Sa||Tn||Hs(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){k=s=i;try{if(d=k.stateNode,f)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{R=k.stateNode;var we=k.memoizedProps.style,ce=we!=null&&we.hasOwnProperty("display")?we.display:null;R.style.display=ce==null||typeof ce=="boolean"?"":(""+ce).trim()}}catch(it){qt(k,k.return,it)}}}else if(i.tag===6){if(s===null){k=i;try{k.stateNode.nodeValue=f?"":k.memoizedProps}catch(it){qt(k,k.return,it)}}}else if(i.tag===18){if(s===null){k=i;try{var de=k.stateNode;f?$0(de,!0):$0(k.stateNode,!1)}catch(it){qt(k,k.return,it)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,ic(t,s))));break;case 19:ti(i,t),ni(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,ic(t,l)));break;case 30:break;case 21:break;default:ti(i,t),ni(t)}}function ni(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(Kg(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,d=jf(t);nc(t,d,f);break;case 5:var v=s.stateNode;s.flags&32&&(At(v,""),s.flags&=-33);var R=jf(t);nc(t,R,v);break;case 3:case 4:var k=s.stateNode.containerInfo,re=jf(t);qf(t,re,k);break;default:throw Error(a(161))}}catch(Se){qt(t,t.return,Se)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function r0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;r0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function ba(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)e0(t,i.alternate,i),i=i.sibling}function Hs(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Ja(4,i,i.return),Hs(i);break;case 1:Ki(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&$g(i,i.return,s),Hs(i);break;case 27:ko(i.stateNode);case 26:case 5:Ki(i,i.return),Hs(i);break;case 22:i.memoizedState===null&&Hs(i);break;case 30:Hs(i);break;default:Hs(i)}t=t.sibling}}function Ea(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:Ea(f,d,s),Lo(4,d);break;case 1:if(Ea(f,d,s),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(re){qt(l,l.return,re)}if(l=d,f=l.updateQueue,f!==null){var R=l.stateNode;try{var k=f.shared.hiddenCallbacks;if(k!==null)for(f.shared.hiddenCallbacks=null,f=0;f<k.length;f++)Pm(k[f],R)}catch(re){qt(l,l.return,re)}}s&&v&64&&qg(d),Oo(d,d.return);break;case 27:Qg(d);case 26:case 5:Ea(f,d,s),s&&l===null&&v&4&&Zg(d),Oo(d,d.return);break;case 12:Ea(f,d,s);break;case 31:Ea(f,d,s),s&&v&4&&i0(f,d);break;case 13:Ea(f,d,s),s&&v&4&&a0(f,d);break;case 22:d.memoizedState===null&&Ea(f,d,s),Oo(d,d.return);break;case 30:break;default:Ea(f,d,s)}i=i.sibling}}function Zf(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&yo(s))}function Kf(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&yo(t))}function Gi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)o0(t,i,s,l),i=i.sibling}function o0(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Gi(t,i,s,l),f&2048&&Lo(9,i);break;case 1:Gi(t,i,s,l);break;case 3:Gi(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&yo(t)));break;case 12:if(f&2048){Gi(t,i,s,l),t=i.stateNode;try{var d=i.memoizedProps,v=d.id,R=d.onPostCommit;typeof R=="function"&&R(v,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(k){qt(i,i.return,k)}}else Gi(t,i,s,l);break;case 31:Gi(t,i,s,l);break;case 13:Gi(t,i,s,l);break;case 23:break;case 22:d=i.stateNode,v=i.alternate,i.memoizedState!==null?d._visibility&2?Gi(t,i,s,l):Io(t,i):d._visibility&2?Gi(t,i,s,l):(d._visibility|=2,Sr(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&Zf(v,i);break;case 24:Gi(t,i,s,l),f&2048&&Kf(i.alternate,i);break;default:Gi(t,i,s,l)}}function Sr(t,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=t,v=i,R=s,k=l,re=v.flags;switch(v.tag){case 0:case 11:case 15:Sr(d,v,R,k,f),Lo(8,v);break;case 23:break;case 22:var Se=v.stateNode;v.memoizedState!==null?Se._visibility&2?Sr(d,v,R,k,f):Io(d,v):(Se._visibility|=2,Sr(d,v,R,k,f)),f&&re&2048&&Zf(v.alternate,v);break;case 24:Sr(d,v,R,k,f),f&&re&2048&&Kf(v.alternate,v);break;default:Sr(d,v,R,k,f)}i=i.sibling}}function Io(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:Io(s,l),f&2048&&Zf(l.alternate,l);break;case 24:Io(s,l),f&2048&&Kf(l.alternate,l);break;default:Io(s,l)}i=i.sibling}}var zo=8192;function Mr(t,i,s){if(t.subtreeFlags&zo)for(t=t.child;t!==null;)l0(t,i,s),t=t.sibling}function l0(t,i,s){switch(t.tag){case 26:Mr(t,i,s),t.flags&zo&&t.memoizedState!==null&&xS(s,Bi,t.memoizedState,t.memoizedProps);break;case 5:Mr(t,i,s);break;case 3:case 4:var l=Bi;Bi=_c(t.stateNode.containerInfo),Mr(t,i,s),Bi=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=zo,zo=16777216,Mr(t,i,s),zo=l):Mr(t,i,s));break;default:Mr(t,i,s)}}function c0(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Po(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Ln=l,f0(l,t)}c0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)u0(t),t=t.sibling}function u0(t){switch(t.tag){case 0:case 11:case 15:Po(t),t.flags&2048&&Ja(9,t,t.return);break;case 3:Po(t);break;case 12:Po(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,ac(t)):Po(t);break;default:Po(t)}}function ac(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Ln=l,f0(l,t)}c0(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Ja(8,i,i.return),ac(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,ac(i));break;default:ac(i)}t=t.sibling}}function f0(t,i){for(;Ln!==null;){var s=Ln;switch(s.tag){case 0:case 11:case 15:Ja(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:yo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Ln=l;else e:for(s=t;Ln!==null;){l=Ln;var f=l.sibling,d=l.return;if(t0(l),l===s){Ln=null;break e}if(f!==null){f.return=d,Ln=f;break e}Ln=d}}}var Ly={getCacheForType:function(t){var i=zn(Mn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return zn(Mn).controller.signal}},Oy=typeof WeakMap=="function"?WeakMap:Map,Wt=0,sn=null,Ct=null,Ut=0,jt=0,hi=null,es=!1,br=!1,Qf=!1,Ta=0,gn=0,ts=0,Vs=0,Jf=0,pi=0,Er=0,Fo=null,ii=null,ed=!1,sc=0,d0=0,rc=1/0,oc=null,ns=null,Cn=0,is=null,Tr=null,Aa=0,td=0,nd=null,h0=null,Bo=0,id=null;function mi(){return(Wt&2)!==0&&Ut!==0?Ut&-Ut:N.T!==null?cd():Oi()}function p0(){if(pi===0)if((Ut&536870912)===0||It){var t=ot;ot<<=1,(ot&3932160)===0&&(ot=262144),pi=t}else pi=536870912;return t=fi.current,t!==null&&(t.flags|=32),pi}function ai(t,i,s){(t===sn&&(jt===2||jt===9)||t.cancelPendingCommit!==null)&&(Ar(t,0),as(t,Ut,pi,!1)),lt(t,s),((Wt&2)===0||t!==sn)&&(t===sn&&((Wt&2)===0&&(Vs|=s),gn===4&&as(t,Ut,pi,!1)),Qi(t))}function m0(t,i,s){if((Wt&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Qe(t,i),f=l?Py(t,i):sd(t,i,!0),d=l;do{if(f===0){br&&!l&&as(t,i,0,!1);break}else{if(s=t.current.alternate,d&&!Iy(s)){f=sd(t,i,!1),d=!1;continue}if(f===2){if(d=i,t.errorRecoveryDisabledLanes&d)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;e:{var R=t;f=Fo;var k=R.current.memoizedState.isDehydrated;if(k&&(Ar(R,v).flags|=256),v=sd(R,v,!1),v!==2){if(Qf&&!k){R.errorRecoveryDisabledLanes|=d,Vs|=d,f=4;break e}d=ii,ii=f,d!==null&&(ii===null?ii=d:ii.push.apply(ii,d))}f=v}if(d=!1,f!==2)continue}}if(f===1){Ar(t,0),as(t,i,0,!0);break}e:{switch(l=t,d=f,d){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:as(l,i,pi,!es);break e;case 2:ii=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=sc+300-Fe(),10<f)){if(as(l,i,pi,!es),ye(l,0,!0)!==0)break e;Aa=i,l.timeoutHandle=Y0(g0.bind(null,l,s,ii,oc,ed,i,pi,Vs,Er,es,d,"Throttled",-0,0),f);break e}g0(l,s,ii,oc,ed,i,pi,Vs,Er,es,d,null,-0,0)}}break}while(!0);Qi(t)}function g0(t,i,s,l,f,d,v,R,k,re,Se,we,ce,de){if(t.timeoutHandle=-1,we=i.subtreeFlags,we&8192||(we&16785408)===16785408){we={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:fa},l0(i,d,we);var it=(d&62914560)===d?sc-Fe():(d&4194048)===d?d0-Fe():0;if(it=vS(we,it),it!==null){Aa=d,t.cancelPendingCommit=it(E0.bind(null,t,i,d,s,l,f,v,R,k,Se,we,null,ce,de)),as(t,d,v,!re);return}}E0(t,i,d,s,l,f,v,R,k)}function Iy(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],d=f.getSnapshot;f=f.value;try{if(!ci(d(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function as(t,i,s,l){i&=~Jf,i&=~Vs,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var d=31-je(f),v=1<<d;l[d]=-1,f&=~v}s!==0&&Gt(t,s,i)}function lc(){return(Wt&6)===0?(Go(0),!1):!0}function ad(){if(Ct!==null){if(jt===0)var t=Ct.return;else t=Ct,ma=Ls=null,yf(t),gr=null,Mo=0,t=Ct;for(;t!==null;)jg(t.alternate,t),t=t.return;Ct=null}}function Ar(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,tS(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Aa=0,ad(),sn=t,Ct=s=ha(t.current,null),Ut=i,jt=0,hi=null,es=!1,br=Qe(t,i),Qf=!1,Er=pi=Jf=Vs=ts=gn=0,ii=Fo=null,ed=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-je(l),d=1<<f;i|=t[f],l&=~d}return Ta=i,Cl(),s}function _0(t,i){Mt=null,N.H=Do,i===mr||i===Pl?(i=Lm(),jt=3):i===lf?(i=Lm(),jt=4):jt=i===zf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,hi=i,Ct===null&&(gn=1,Kl(t,Ei(i,t.current)))}function x0(){var t=fi.current;return t===null?!0:(Ut&4194048)===Ut?Ri===null:(Ut&62914560)===Ut||(Ut&536870912)!==0?t===Ri:!1}function v0(){var t=N.H;return N.H=Do,t===null?Do:t}function y0(){var t=N.A;return N.A=Ly,t}function cc(){gn=4,es||(Ut&4194048)!==Ut&&fi.current!==null||(br=!0),(ts&134217727)===0&&(Vs&134217727)===0||sn===null||as(sn,Ut,pi,!1)}function sd(t,i,s){var l=Wt;Wt|=2;var f=v0(),d=y0();(sn!==t||Ut!==i)&&(oc=null,Ar(t,i)),i=!1;var v=gn;e:do try{if(jt!==0&&Ct!==null){var R=Ct,k=hi;switch(jt){case 8:ad(),v=6;break e;case 3:case 2:case 9:case 6:fi.current===null&&(i=!0);var re=jt;if(jt=0,hi=null,wr(t,R,k,re),s&&br){v=0;break e}break;default:re=jt,jt=0,hi=null,wr(t,R,k,re)}}zy(),v=gn;break}catch(Se){_0(t,Se)}while(!0);return i&&t.shellSuspendCounter++,ma=Ls=null,Wt=l,N.H=f,N.A=d,Ct===null&&(sn=null,Ut=0,Cl()),v}function zy(){for(;Ct!==null;)S0(Ct)}function Py(t,i){var s=Wt;Wt|=2;var l=v0(),f=y0();sn!==t||Ut!==i?(oc=null,rc=Fe()+500,Ar(t,i)):br=Qe(t,i);e:do try{if(jt!==0&&Ct!==null){i=Ct;var d=hi;t:switch(jt){case 1:jt=0,hi=null,wr(t,i,d,1);break;case 2:case 9:if(Nm(d)){jt=0,hi=null,M0(i);break}i=function(){jt!==2&&jt!==9||sn!==t||(jt=7),Qi(t)},d.then(i,i);break e;case 3:jt=7;break e;case 4:jt=5;break e;case 7:Nm(d)?(jt=0,hi=null,M0(i)):(jt=0,hi=null,wr(t,i,d,7));break;case 5:var v=null;switch(Ct.tag){case 26:v=Ct.memoizedState;case 5:case 27:var R=Ct;if(v?o_(v):R.stateNode.complete){jt=0,hi=null;var k=R.sibling;if(k!==null)Ct=k;else{var re=R.return;re!==null?(Ct=re,uc(re)):Ct=null}break t}}jt=0,hi=null,wr(t,i,d,5);break;case 6:jt=0,hi=null,wr(t,i,d,6);break;case 8:ad(),gn=6;break e;default:throw Error(a(462))}}Fy();break}catch(Se){_0(t,Se)}while(!0);return ma=Ls=null,N.H=l,N.A=f,Wt=s,Ct!==null?0:(sn=null,Ut=0,Cl(),gn)}function Fy(){for(;Ct!==null&&!Tt();)S0(Ct)}function S0(t){var i=Xg(t.alternate,t,Ta);t.memoizedProps=t.pendingProps,i===null?uc(t):Ct=i}function M0(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=Bg(s,i,i.pendingProps,i.type,void 0,Ut);break;case 11:i=Bg(s,i,i.pendingProps,i.type.render,i.ref,Ut);break;case 5:yf(i);default:jg(s,i),i=Ct=ym(i,Ta),i=Xg(s,i,Ta)}t.memoizedProps=t.pendingProps,i===null?uc(t):Ct=i}function wr(t,i,s,l){ma=Ls=null,yf(i),gr=null,Mo=0;var f=i.return;try{if(Ay(t,f,i,s,Ut)){gn=1,Kl(t,Ei(s,t.current)),Ct=null;return}}catch(d){if(f!==null)throw Ct=f,d;gn=1,Kl(t,Ei(s,t.current)),Ct=null;return}i.flags&32768?(It||l===1?t=!0:br||(Ut&536870912)!==0?t=!1:(es=t=!0,(l===2||l===9||l===3||l===6)&&(l=fi.current,l!==null&&l.tag===13&&(l.flags|=16384))),b0(i,t)):uc(i)}function uc(t){var i=t;do{if((i.flags&32768)!==0){b0(i,es);return}t=i.return;var s=Cy(i.alternate,i,Ta);if(s!==null){Ct=s;return}if(i=i.sibling,i!==null){Ct=i;return}Ct=i=t}while(i!==null);gn===0&&(gn=5)}function b0(t,i){do{var s=Dy(t.alternate,t);if(s!==null){s.flags&=32767,Ct=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){Ct=t;return}Ct=t=s}while(t!==null);gn=6,Ct=null}function E0(t,i,s,l,f,d,v,R,k){t.cancelPendingCommit=null;do fc();while(Cn!==0);if((Wt&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(d=i.lanes|i.childLanes,d|=Yu,an(t,s,d,v,R,k),t===sn&&(Ct=sn=null,Ut=0),Tr=i,is=t,Aa=s,td=d,nd=f,h0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Vy(te,function(){return C0(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=N.T,N.T=null,f=G.p,G.p=2,v=Wt,Wt|=4;try{Ny(t,i,s)}finally{Wt=v,G.p=f,N.T=l}}Cn=1,T0(),A0(),w0()}}function T0(){if(Cn===1){Cn=0;var t=is,i=Tr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=N.T,N.T=null;var l=G.p;G.p=2;var f=Wt;Wt|=4;try{s0(i,t);var d=_d,v=fm(t.containerInfo),R=d.focusedElem,k=d.selectionRange;if(v!==R&&R&&R.ownerDocument&&um(R.ownerDocument.documentElement,R)){if(k!==null&&Hu(R)){var re=k.start,Se=k.end;if(Se===void 0&&(Se=re),"selectionStart"in R)R.selectionStart=re,R.selectionEnd=Math.min(Se,R.value.length);else{var we=R.ownerDocument||document,ce=we&&we.defaultView||window;if(ce.getSelection){var de=ce.getSelection(),it=R.textContent.length,pt=Math.min(k.start,it),tn=k.end===void 0?pt:Math.min(k.end,it);!de.extend&&pt>tn&&(v=tn,tn=pt,pt=v);var ee=cm(R,pt),$=cm(R,tn);if(ee&&$&&(de.rangeCount!==1||de.anchorNode!==ee.node||de.anchorOffset!==ee.offset||de.focusNode!==$.node||de.focusOffset!==$.offset)){var se=we.createRange();se.setStart(ee.node,ee.offset),de.removeAllRanges(),pt>tn?(de.addRange(se),de.extend($.node,$.offset)):(se.setEnd($.node,$.offset),de.addRange(se))}}}}for(we=[],de=R;de=de.parentNode;)de.nodeType===1&&we.push({element:de,left:de.scrollLeft,top:de.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<we.length;R++){var Ee=we[R];Ee.element.scrollLeft=Ee.left,Ee.element.scrollTop=Ee.top}}bc=!!gd,_d=gd=null}finally{Wt=f,G.p=l,N.T=s}}t.current=i,Cn=2}}function A0(){if(Cn===2){Cn=0;var t=is,i=Tr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=N.T,N.T=null;var l=G.p;G.p=2;var f=Wt;Wt|=4;try{e0(t,i.alternate,i)}finally{Wt=f,G.p=l,N.T=s}}Cn=3}}function w0(){if(Cn===4||Cn===3){Cn=0,Ft();var t=is,i=Tr,s=Aa,l=h0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Cn=5:(Cn=0,Tr=is=null,R0(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(ns=null),Hn(s),i=i.stateNode,_e&&typeof _e.onCommitFiberRoot=="function")try{_e.onCommitFiberRoot(pe,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=N.T,f=G.p,G.p=2,N.T=null;try{for(var d=t.onRecoverableError,v=0;v<l.length;v++){var R=l[v];d(R.value,{componentStack:R.stack})}}finally{N.T=i,G.p=f}}(Aa&3)!==0&&fc(),Qi(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===id?Bo++:(Bo=0,id=t):Bo=0,Go(0)}}function R0(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,yo(i)))}function fc(){return T0(),A0(),w0(),C0()}function C0(){if(Cn!==5)return!1;var t=is,i=td;td=0;var s=Hn(Aa),l=N.T,f=G.p;try{G.p=32>s?32:s,N.T=null,s=nd,nd=null;var d=is,v=Aa;if(Cn=0,Tr=is=null,Aa=0,(Wt&6)!==0)throw Error(a(331));var R=Wt;if(Wt|=4,u0(d.current),o0(d,d.current,v,s),Wt=R,Go(0,!1),_e&&typeof _e.onPostCommitFiberRoot=="function")try{_e.onPostCommitFiberRoot(pe,d)}catch{}return!0}finally{G.p=f,N.T=l,R0(t,i)}}function D0(t,i,s){i=Ei(s,i),i=If(t.stateNode,i,2),t=Za(t,i,2),t!==null&&(lt(t,2),Qi(t))}function qt(t,i,s){if(t.tag===3)D0(t,t,s);else for(;i!==null;){if(i.tag===3){D0(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ns===null||!ns.has(l))){t=Ei(s,t),s=Ng(2),l=Za(i,s,2),l!==null&&(Ug(s,l,i,t),lt(l,2),Qi(l));break}}i=i.return}}function rd(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new Oy;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(Qf=!0,f.add(s),t=By.bind(null,t,i,s),i.then(t,t))}function By(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,sn===t&&(Ut&s)===s&&(gn===4||gn===3&&(Ut&62914560)===Ut&&300>Fe()-sc?(Wt&2)===0&&Ar(t,0):Jf|=s,Er===Ut&&(Er=0)),Qi(t)}function N0(t,i){i===0&&(i=Le()),t=Ds(t,i),t!==null&&(lt(t,i),Qi(t))}function Gy(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),N0(t,s)}function Hy(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),N0(t,s)}function Vy(t,i){return Z(t,i)}var dc=null,Rr=null,od=!1,hc=!1,ld=!1,ss=0;function Qi(t){t!==Rr&&t.next===null&&(Rr===null?dc=Rr=t:Rr=Rr.next=t),hc=!0,od||(od=!0,Wy())}function Go(t,i){if(!ld&&hc){ld=!0;do for(var s=!1,l=dc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var v=l.suspendedLanes,R=l.pingedLanes;d=(1<<31-je(42|t)+1)-1,d&=f&~(v&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,I0(l,d))}else d=Ut,d=ye(l,l===sn?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Qe(l,d)||(s=!0,I0(l,d));l=l.next}while(s);ld=!1}}function ky(){U0()}function U0(){hc=od=!1;var t=0;ss!==0&&eS()&&(t=ss);for(var i=Fe(),s=null,l=dc;l!==null;){var f=l.next,d=L0(l,i);d===0?(l.next=null,s===null?dc=f:s.next=f,f===null&&(Rr=s)):(s=l,(t!==0||(d&3)!==0)&&(hc=!0)),l=f}Cn!==0&&Cn!==5||Go(t),ss!==0&&(ss=0)}function L0(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var v=31-je(d),R=1<<v,k=f[v];k===-1?((R&s)===0||(R&l)!==0)&&(f[v]=He(R,i)):k<=i&&(t.expiredLanes|=R),d&=~R}if(i=sn,s=Ut,s=ye(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(jt===2||jt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&rn(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Qe(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&rn(l),Hn(s)){case 2:case 8:s=E;break;case 32:s=te;break;case 268435456:s=Ie;break;default:s=te}return l=O0.bind(null,t),s=Z(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&rn(l),t.callbackPriority=2,t.callbackNode=null,2}function O0(t,i){if(Cn!==0&&Cn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(fc()&&t.callbackNode!==s)return null;var l=Ut;return l=ye(t,t===sn?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(m0(t,l,i),L0(t,Fe()),t.callbackNode!=null&&t.callbackNode===s?O0.bind(null,t):null)}function I0(t,i){if(fc())return null;m0(t,i,!0)}function Wy(){nS(function(){(Wt&6)!==0?Z(U,ky):U0()})}function cd(){if(ss===0){var t=hr;t===0&&(t=qe,qe<<=1,(qe&261888)===0&&(qe=256)),ss=t}return ss}function z0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:As(""+t)}function P0(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function Xy(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var d=z0((f[Rn]||null).action),v=l.submitter;v&&(i=(i=v[Rn]||null)?z0(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var R=new Tl("action","action",null,l,f);t.push({event:R,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ss!==0){var k=v?P0(f,v):new FormData(f);Cf(s,{pending:!0,data:k,method:f.method,action:d},null,k)}}else typeof d=="function"&&(R.preventDefault(),k=v?P0(f,v):new FormData(f),Cf(s,{pending:!0,data:k,method:f.method,action:d},d,k))},currentTarget:f}]})}}for(var ud=0;ud<Xu.length;ud++){var fd=Xu[ud],Yy=fd.toLowerCase(),jy=fd[0].toUpperCase()+fd.slice(1);Fi(Yy,"on"+jy)}Fi(pm,"onAnimationEnd"),Fi(mm,"onAnimationIteration"),Fi(gm,"onAnimationStart"),Fi("dblclick","onDoubleClick"),Fi("focusin","onFocus"),Fi("focusout","onBlur"),Fi(cy,"onTransitionRun"),Fi(uy,"onTransitionStart"),Fi(fy,"onTransitionCancel"),Fi(_m,"onTransitionEnd"),le("onMouseEnter",["mouseout","mouseover"]),le("onMouseLeave",["mouseout","mouseover"]),le("onPointerEnter",["pointerout","pointerover"]),le("onPointerLeave",["pointerout","pointerover"]),K("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),K("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),K("onBeforeInput",["compositionend","keypress","textInput","paste"]),K("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ho));function F0(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var R=l[v],k=R.instance,re=R.currentTarget;if(R=R.listener,k!==d&&f.isPropagationStopped())break e;d=R,f.currentTarget=re;try{d(f)}catch(Se){Rl(Se)}f.currentTarget=null,d=k}else for(v=0;v<l.length;v++){if(R=l[v],k=R.instance,re=R.currentTarget,R=R.listener,k!==d&&f.isPropagationStopped())break e;d=R,f.currentTarget=re;try{d(f)}catch(Se){Rl(Se)}f.currentTarget=null,d=k}}}}function Dt(t,i){var s=i[Ii];s===void 0&&(s=i[Ii]=new Set);var l=t+"__bubble";s.has(l)||(B0(i,t,2,!1),s.add(l))}function dd(t,i,s){var l=0;i&&(l|=4),B0(s,t,l,i)}var pc="_reactListening"+Math.random().toString(36).slice(2);function hd(t){if(!t[pc]){t[pc]=!0,Ts.forEach(function(s){s!=="selectionchange"&&(qy.has(s)||dd(s,!1,t),dd(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[pc]||(i[pc]=!0,dd("selectionchange",!1,i))}}function B0(t,i,s,l){switch(p_(i)){case 2:var f=MS;break;case 8:f=bS;break;default:f=Rd}s=f.bind(null,i,s,t),f=void 0,!Uu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function pd(t,i,s,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var R=l.stateNode.containerInfo;if(R===f)break;if(v===4)for(v=l.return;v!==null;){var k=v.tag;if((k===3||k===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;R!==null;){if(v=oi(R),v===null)return;if(k=v.tag,k===5||k===6||k===26||k===27){l=d=v;continue e}R=R.parentNode}}l=l.return}Wp(function(){var re=d,Se=Du(s),we=[];e:{var ce=xm.get(t);if(ce!==void 0){var de=Tl,it=t;switch(t){case"keypress":if(bl(s)===0)break e;case"keydown":case"keyup":de=Hv;break;case"focusin":it="focus",de=zu;break;case"focusout":it="blur",de=zu;break;case"beforeblur":case"afterblur":de=zu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=jp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=Cv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=Wv;break;case pm:case mm:case gm:de=Uv;break;case _m:de=Yv;break;case"scroll":case"scrollend":de=wv;break;case"wheel":de=qv;break;case"copy":case"cut":case"paste":de=Ov;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=$p;break;case"toggle":case"beforetoggle":de=Zv}var pt=(i&4)!==0,tn=!pt&&(t==="scroll"||t==="scrollend"),ee=pt?ce!==null?ce+"Capture":null:ce;pt=[];for(var $=re,se;$!==null;){var Ee=$;if(se=Ee.stateNode,Ee=Ee.tag,Ee!==5&&Ee!==26&&Ee!==27||se===null||ee===null||(Ee=lo($,ee),Ee!=null&&pt.push(Vo($,Ee,se))),tn)break;$=$.return}0<pt.length&&(ce=new de(ce,it,null,s,Se),we.push({event:ce,listeners:pt}))}}if((i&7)===0){e:{if(ce=t==="mouseover"||t==="pointerover",de=t==="mouseout"||t==="pointerout",ce&&s!==Cu&&(it=s.relatedTarget||s.fromElement)&&(oi(it)||it[Si]))break e;if((de||ce)&&(ce=Se.window===Se?Se:(ce=Se.ownerDocument)?ce.defaultView||ce.parentWindow:window,de?(it=s.relatedTarget||s.toElement,de=re,it=it?oi(it):null,it!==null&&(tn=c(it),pt=it.tag,it!==tn||pt!==5&&pt!==27&&pt!==6)&&(it=null)):(de=null,it=re),de!==it)){if(pt=jp,Ee="onMouseLeave",ee="onMouseEnter",$="mouse",(t==="pointerout"||t==="pointerover")&&(pt=$p,Ee="onPointerLeave",ee="onPointerEnter",$="pointer"),tn=de==null?ce:ua(de),se=it==null?ce:ua(it),ce=new pt(Ee,$+"leave",de,s,Se),ce.target=tn,ce.relatedTarget=se,Ee=null,oi(Se)===re&&(pt=new pt(ee,$+"enter",it,s,Se),pt.target=se,pt.relatedTarget=tn,Ee=pt),tn=Ee,de&&it)t:{for(pt=$y,ee=de,$=it,se=0,Ee=ee;Ee;Ee=pt(Ee))se++;Ee=0;for(var ut=$;ut;ut=pt(ut))Ee++;for(;0<se-Ee;)ee=pt(ee),se--;for(;0<Ee-se;)$=pt($),Ee--;for(;se--;){if(ee===$||$!==null&&ee===$.alternate){pt=ee;break t}ee=pt(ee),$=pt($)}pt=null}else pt=null;de!==null&&G0(we,ce,de,pt,!1),it!==null&&tn!==null&&G0(we,tn,it,pt,!0)}}e:{if(ce=re?ua(re):window,de=ce.nodeName&&ce.nodeName.toLowerCase(),de==="select"||de==="input"&&ce.type==="file")var Vt=im;else if(tm(ce))if(am)Vt=ry;else{Vt=ay;var rt=iy}else de=ce.nodeName,!de||de.toLowerCase()!=="input"||ce.type!=="checkbox"&&ce.type!=="radio"?re&&Ht(re.elementType)&&(Vt=im):Vt=sy;if(Vt&&(Vt=Vt(t,re))){nm(we,Vt,s,Se);break e}rt&&rt(t,ce,re),t==="focusout"&&re&&ce.type==="number"&&re.memoizedProps.value!=null&&ge(ce,"number",ce.value)}switch(rt=re?ua(re):window,t){case"focusin":(tm(rt)||rt.contentEditable==="true")&&(sr=rt,Vu=re,_o=null);break;case"focusout":_o=Vu=sr=null;break;case"mousedown":ku=!0;break;case"contextmenu":case"mouseup":case"dragend":ku=!1,dm(we,s,Se);break;case"selectionchange":if(ly)break;case"keydown":case"keyup":dm(we,s,Se)}var bt;if(Fu)e:{switch(t){case"compositionstart":var Lt="onCompositionStart";break e;case"compositionend":Lt="onCompositionEnd";break e;case"compositionupdate":Lt="onCompositionUpdate";break e}Lt=void 0}else ar?Jp(t,s)&&(Lt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Lt="onCompositionStart");Lt&&(Zp&&s.locale!=="ko"&&(ar||Lt!=="onCompositionStart"?Lt==="onCompositionEnd"&&ar&&(bt=Xp()):(ka=Se,Lu="value"in ka?ka.value:ka.textContent,ar=!0)),rt=mc(re,Lt),0<rt.length&&(Lt=new qp(Lt,t,null,s,Se),we.push({event:Lt,listeners:rt}),bt?Lt.data=bt:(bt=em(s),bt!==null&&(Lt.data=bt)))),(bt=Qv?Jv(t,s):ey(t,s))&&(Lt=mc(re,"onBeforeInput"),0<Lt.length&&(rt=new qp("onBeforeInput","beforeinput",null,s,Se),we.push({event:rt,listeners:Lt}),rt.data=bt)),Xy(we,t,re,s,Se)}F0(we,i)})}function Vo(t,i,s){return{instance:t,listener:i,currentTarget:s}}function mc(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=lo(t,s),f!=null&&l.unshift(Vo(t,f,d)),f=lo(t,i),f!=null&&l.push(Vo(t,f,d))),t.tag===3)return l;t=t.return}return[]}function $y(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function G0(t,i,s,l,f){for(var d=i._reactName,v=[];s!==null&&s!==l;){var R=s,k=R.alternate,re=R.stateNode;if(R=R.tag,k!==null&&k===l)break;R!==5&&R!==26&&R!==27||re===null||(k=re,f?(re=lo(s,d),re!=null&&v.unshift(Vo(s,re,k))):f||(re=lo(s,d),re!=null&&v.push(Vo(s,re,k)))),s=s.return}v.length!==0&&t.push({event:i,listeners:v})}var Zy=/\r\n?/g,Ky=/\u0000|\uFFFD/g;function H0(t){return(typeof t=="string"?t:""+t).replace(Zy,`
`).replace(Ky,"")}function V0(t,i){return i=H0(i),H0(t)===i}function en(t,i,s,l,f,d){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||At(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&At(t,""+l);break;case"className":Ne(t,"class",l);break;case"tabIndex":Ne(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ne(t,s,l);break;case"style":Sn(t,l,d);break;case"data":if(i!=="object"){Ne(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=As(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&en(t,i,"name",f.name,f,null),en(t,i,"formEncType",f.formEncType,f,null),en(t,i,"formMethod",f.formMethod,f,null),en(t,i,"formTarget",f.formTarget,f,null)):(en(t,i,"encType",f.encType,f,null),en(t,i,"method",f.method,f,null),en(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=As(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=fa);break;case"onScroll":l!=null&&Dt("scroll",t);break;case"onScrollEnd":l!=null&&Dt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=As(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Dt("beforetoggle",t),Dt("toggle",t),ne(t,"popover",l);break;case"xlinkActuate":Be(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Be(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Be(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Be(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Be(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Be(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Be(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Be(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Be(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ne(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Mi.get(s)||s,ne(t,s,l))}}function md(t,i,s,l,f,d){switch(s){case"style":Sn(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?At(t,l):(typeof l=="number"||typeof l=="bigint")&&At(t,""+l);break;case"onScroll":l!=null&&Dt("scroll",t);break;case"onScrollEnd":l!=null&&Dt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=fa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!w.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),d=t[Rn]||null,d=d!=null?d[s]:null,typeof d=="function"&&t.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):ne(t,s,l)}}}function Fn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Dt("error",t),Dt("load",t);var l=!1,f=!1,d;for(d in s)if(s.hasOwnProperty(d)){var v=s[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:en(t,i,d,v,s,null)}}f&&en(t,i,"srcSet",s.srcSet,s,null),l&&en(t,i,"src",s.src,s,null);return;case"input":Dt("invalid",t);var R=d=v=f=null,k=null,re=null;for(l in s)if(s.hasOwnProperty(l)){var Se=s[l];if(Se!=null)switch(l){case"name":f=Se;break;case"type":v=Se;break;case"checked":k=Se;break;case"defaultChecked":re=Se;break;case"value":d=Se;break;case"defaultValue":R=Se;break;case"children":case"dangerouslySetInnerHTML":if(Se!=null)throw Error(a(137,i));break;default:en(t,i,l,Se,s,null)}}ze(t,d,R,k,re,v,f,!1);return;case"select":Dt("invalid",t),l=v=d=null;for(f in s)if(s.hasOwnProperty(f)&&(R=s[f],R!=null))switch(f){case"value":d=R;break;case"defaultValue":v=R;break;case"multiple":l=R;default:en(t,i,f,R,s,null)}i=d,s=v,t.multiple=!!l,i!=null?Ke(t,!!l,i,!1):s!=null&&Ke(t,!!l,s,!0);return;case"textarea":Dt("invalid",t),d=f=l=null;for(v in s)if(s.hasOwnProperty(v)&&(R=s[v],R!=null))switch(v){case"value":l=R;break;case"defaultValue":f=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(a(91));break;default:en(t,i,v,R,s,null)}st(t,l,f,d);return;case"option":for(k in s)if(s.hasOwnProperty(k)&&(l=s[k],l!=null))switch(k){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:en(t,i,k,l,s,null)}return;case"dialog":Dt("beforetoggle",t),Dt("toggle",t),Dt("cancel",t),Dt("close",t);break;case"iframe":case"object":Dt("load",t);break;case"video":case"audio":for(l=0;l<Ho.length;l++)Dt(Ho[l],t);break;case"image":Dt("error",t),Dt("load",t);break;case"details":Dt("toggle",t);break;case"embed":case"source":case"link":Dt("error",t),Dt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(re in s)if(s.hasOwnProperty(re)&&(l=s[re],l!=null))switch(re){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:en(t,i,re,l,s,null)}return;default:if(Ht(i)){for(Se in s)s.hasOwnProperty(Se)&&(l=s[Se],l!==void 0&&md(t,i,Se,l,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(l=s[R],l!=null&&en(t,i,R,l,s,null))}function Qy(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,v=null,R=null,k=null,re=null,Se=null;for(de in s){var we=s[de];if(s.hasOwnProperty(de)&&we!=null)switch(de){case"checked":break;case"value":break;case"defaultValue":k=we;default:l.hasOwnProperty(de)||en(t,i,de,null,l,we)}}for(var ce in l){var de=l[ce];if(we=s[ce],l.hasOwnProperty(ce)&&(de!=null||we!=null))switch(ce){case"type":d=de;break;case"name":f=de;break;case"checked":re=de;break;case"defaultChecked":Se=de;break;case"value":v=de;break;case"defaultValue":R=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(a(137,i));break;default:de!==we&&en(t,i,ce,de,l,we)}}xe(t,v,R,k,re,Se,d,f);return;case"select":de=v=R=ce=null;for(d in s)if(k=s[d],s.hasOwnProperty(d)&&k!=null)switch(d){case"value":break;case"multiple":de=k;default:l.hasOwnProperty(d)||en(t,i,d,null,l,k)}for(f in l)if(d=l[f],k=s[f],l.hasOwnProperty(f)&&(d!=null||k!=null))switch(f){case"value":ce=d;break;case"defaultValue":R=d;break;case"multiple":v=d;default:d!==k&&en(t,i,f,d,l,k)}i=R,s=v,l=de,ce!=null?Ke(t,!!s,ce,!1):!!l!=!!s&&(i!=null?Ke(t,!!s,i,!0):Ke(t,!!s,s?[]:"",!1));return;case"textarea":de=ce=null;for(R in s)if(f=s[R],s.hasOwnProperty(R)&&f!=null&&!l.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:en(t,i,R,null,l,f)}for(v in l)if(f=l[v],d=s[v],l.hasOwnProperty(v)&&(f!=null||d!=null))switch(v){case"value":ce=f;break;case"defaultValue":de=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==d&&en(t,i,v,f,l,d)}gt(t,ce,de);return;case"option":for(var it in s)if(ce=s[it],s.hasOwnProperty(it)&&ce!=null&&!l.hasOwnProperty(it))switch(it){case"selected":t.selected=!1;break;default:en(t,i,it,null,l,ce)}for(k in l)if(ce=l[k],de=s[k],l.hasOwnProperty(k)&&ce!==de&&(ce!=null||de!=null))switch(k){case"selected":t.selected=ce&&typeof ce!="function"&&typeof ce!="symbol";break;default:en(t,i,k,ce,l,de)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pt in s)ce=s[pt],s.hasOwnProperty(pt)&&ce!=null&&!l.hasOwnProperty(pt)&&en(t,i,pt,null,l,ce);for(re in l)if(ce=l[re],de=s[re],l.hasOwnProperty(re)&&ce!==de&&(ce!=null||de!=null))switch(re){case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(a(137,i));break;default:en(t,i,re,ce,l,de)}return;default:if(Ht(i)){for(var tn in s)ce=s[tn],s.hasOwnProperty(tn)&&ce!==void 0&&!l.hasOwnProperty(tn)&&md(t,i,tn,void 0,l,ce);for(Se in l)ce=l[Se],de=s[Se],!l.hasOwnProperty(Se)||ce===de||ce===void 0&&de===void 0||md(t,i,Se,ce,l,de);return}}for(var ee in s)ce=s[ee],s.hasOwnProperty(ee)&&ce!=null&&!l.hasOwnProperty(ee)&&en(t,i,ee,null,l,ce);for(we in l)ce=l[we],de=s[we],!l.hasOwnProperty(we)||ce===de||ce==null&&de==null||en(t,i,we,ce,l,de)}function k0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Jy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],d=f.transferSize,v=f.initiatorType,R=f.duration;if(d&&R&&k0(v)){for(v=0,R=f.responseEnd,l+=1;l<s.length;l++){var k=s[l],re=k.startTime;if(re>R)break;var Se=k.transferSize,we=k.initiatorType;Se&&k0(we)&&(k=k.responseEnd,v+=Se*(k<R?1:(R-re)/(k-re)))}if(--l,i+=8*(d+v)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var gd=null,_d=null;function gc(t){return t.nodeType===9?t:t.ownerDocument}function W0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function X0(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function xd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var vd=null;function eS(){var t=window.event;return t&&t.type==="popstate"?t===vd?!1:(vd=t,!0):(vd=null,!1)}var Y0=typeof setTimeout=="function"?setTimeout:void 0,tS=typeof clearTimeout=="function"?clearTimeout:void 0,j0=typeof Promise=="function"?Promise:void 0,nS=typeof queueMicrotask=="function"?queueMicrotask:typeof j0<"u"?function(t){return j0.resolve(null).then(t).catch(iS)}:Y0;function iS(t){setTimeout(function(){throw t})}function rs(t){return t==="head"}function q0(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),Ur(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")ko(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,ko(s);for(var d=s.firstChild;d;){var v=d.nextSibling,R=d.nodeName;d[zi]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=v}}else s==="body"&&ko(t.ownerDocument.body);s=f}while(s);Ur(i)}function $0(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function yd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":yd(s),Ha(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function aS(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[zi])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Ci(t.nextSibling),t===null)break}return null}function sS(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ci(t.nextSibling),t===null))return null;return t}function Z0(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Ci(t.nextSibling),t===null))return null;return t}function Sd(t){return t.data==="$?"||t.data==="$~"}function Md(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function rS(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Ci(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var bd=null;function K0(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Ci(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function Q0(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function J0(t,i,s){switch(i=gc(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function ko(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Ha(t)}var Di=new Map,e_=new Set;function _c(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var wa=G.d;G.d={f:oS,r:lS,D:cS,C:uS,L:fS,m:dS,X:pS,S:hS,M:mS};function oS(){var t=wa.f(),i=lc();return t||i}function lS(t){var i=li(t);i!==null&&i.tag===5&&i.type==="form"?_g(i):wa.r(t)}var Cr=typeof document>"u"?null:document;function t_(t,i,s){var l=Cr;if(l&&typeof i=="string"&&i){var f=Ze(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),e_.has(f)||(e_.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Fn(i,"link",t),pn(i),l.head.appendChild(i)))}}function cS(t){wa.D(t),t_("dns-prefetch",t,null)}function uS(t,i){wa.C(t,i),t_("preconnect",t,i)}function fS(t,i,s){wa.L(t,i,s);var l=Cr;if(l&&t&&i){var f='link[rel="preload"][as="'+Ze(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Ze(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Ze(s.imageSizes)+'"]')):f+='[href="'+Ze(t)+'"]';var d=f;switch(i){case"style":d=Dr(t);break;case"script":d=Nr(t)}Di.has(d)||(t=x({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Di.set(d,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(Wo(d))||i==="script"&&l.querySelector(Xo(d))||(i=l.createElement("link"),Fn(i,"link",t),pn(i),l.head.appendChild(i)))}}function dS(t,i){wa.m(t,i);var s=Cr;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+Ze(l)+'"][href="'+Ze(t)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Nr(t)}if(!Di.has(d)&&(t=x({rel:"modulepreload",href:t},i),Di.set(d,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Xo(d)))return}l=s.createElement("link"),Fn(l,"link",t),pn(l),s.head.appendChild(l)}}}function hS(t,i,s){wa.S(t,i,s);var l=Cr;if(l&&t){var f=Pi(l).hoistableStyles,d=Dr(t);i=i||"default";var v=f.get(d);if(!v){var R={loading:0,preload:null};if(v=l.querySelector(Wo(d)))R.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Di.get(d))&&Ed(t,s);var k=v=l.createElement("link");pn(k),Fn(k,"link",t),k._p=new Promise(function(re,Se){k.onload=re,k.onerror=Se}),k.addEventListener("load",function(){R.loading|=1}),k.addEventListener("error",function(){R.loading|=2}),R.loading|=4,xc(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:R},f.set(d,v)}}}function pS(t,i){wa.X(t,i);var s=Cr;if(s&&t){var l=Pi(s).hoistableScripts,f=Nr(t),d=l.get(f);d||(d=s.querySelector(Xo(f)),d||(t=x({src:t,async:!0},i),(i=Di.get(f))&&Td(t,i),d=s.createElement("script"),pn(d),Fn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function mS(t,i){wa.M(t,i);var s=Cr;if(s&&t){var l=Pi(s).hoistableScripts,f=Nr(t),d=l.get(f);d||(d=s.querySelector(Xo(f)),d||(t=x({src:t,async:!0,type:"module"},i),(i=Di.get(f))&&Td(t,i),d=s.createElement("script"),pn(d),Fn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function n_(t,i,s,l){var f=(f=ie.current)?_c(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Dr(s.href),s=Pi(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Dr(s.href);var d=Pi(f).hoistableStyles,v=d.get(t);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,v),(d=f.querySelector(Wo(t)))&&!d._p&&(v.instance=d,v.state.loading=5),Di.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Di.set(t,s),d||gS(f,t,s,v.state))),i&&l===null)throw Error(a(528,""));return v}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Nr(s),s=Pi(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Dr(t){return'href="'+Ze(t)+'"'}function Wo(t){return'link[rel="stylesheet"]['+t+"]"}function i_(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function gS(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Fn(i,"link",s),pn(i),t.head.appendChild(i))}function Nr(t){return'[src="'+Ze(t)+'"]'}function Xo(t){return"script[async]"+t}function a_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+Ze(s.href)+'"]');if(l)return i.instance=l,pn(l),l;var f=x({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),pn(l),Fn(l,"style",f),xc(l,s.precedence,t),i.instance=l;case"stylesheet":f=Dr(s.href);var d=t.querySelector(Wo(f));if(d)return i.state.loading|=4,i.instance=d,pn(d),d;l=i_(s),(f=Di.get(f))&&Ed(l,f),d=(t.ownerDocument||t).createElement("link"),pn(d);var v=d;return v._p=new Promise(function(R,k){v.onload=R,v.onerror=k}),Fn(d,"link",l),i.state.loading|=4,xc(d,s.precedence,t),i.instance=d;case"script":return d=Nr(s.src),(f=t.querySelector(Xo(d)))?(i.instance=f,pn(f),f):(l=s,(f=Di.get(d))&&(l=x({},s),Td(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),pn(f),Fn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,xc(l,s.precedence,t));return i.instance}function xc(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,v=0;v<l.length;v++){var R=l[v];if(R.dataset.precedence===i)d=R;else if(d!==f)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function Ed(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Td(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var vc=null;function s_(t,i,s){if(vc===null){var l=new Map,f=vc=new Map;f.set(s,l)}else f=vc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var d=s[f];if(!(d[zi]||d[hn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=t+v;var R=l.get(v);R?R.push(d):l.set(v,[d])}}return l}function r_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function _S(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function o_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function xS(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Dr(l.href),d=i.querySelector(Wo(f));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=yc.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=d,pn(d);return}d=i.ownerDocument||i,l=i_(l),(f=Di.get(f))&&Ed(l,f),d=d.createElement("link"),pn(d);var v=d;v._p=new Promise(function(R,k){v.onload=R,v.onerror=k}),Fn(d,"link",l),s.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=yc.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var Ad=0;function vS(t,i){return t.stylesheets&&t.count===0&&Mc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Mc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+i);0<t.imgBytes&&Ad===0&&(Ad=62500*Jy());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Mc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>Ad?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function yc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Mc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Sc=null;function Mc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Sc=new Map,i.forEach(yS,t),Sc=null,yc.call(t))}function yS(t,i){if(!(i.state.loading&4)){var s=Sc.get(t);if(s)var l=s.get(null);else{s=new Map,Sc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var v=f[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(s.set(v.dataset.precedence,v),l=v)}l&&s.set(null,l)}f=i.instance,v=f.getAttribute("data-precedence"),d=s.get(v)||l,d===l&&s.set(null,f),s.set(v,f),this.count++,l=yc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var Yo={$$typeof:F,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function SS(t,i,s,l,f,d,v,R,k){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=at(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=at(0),this.hiddenUpdates=at(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function l_(t,i,s,l,f,d,v,R,k,re,Se,we){return t=new SS(t,i,s,v,k,re,Se,we,R),i=1,d===!0&&(i|=24),d=ui(3,null,null,i),t.current=d,d.stateNode=t,i=sf(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:i},cf(d),t}function c_(t){return t?(t=lr,t):lr}function u_(t,i,s,l,f,d){f=c_(f),l.context===null?l.context=f:l.pendingContext=f,l=$a(i),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=Za(t,l,i),s!==null&&(ai(s,t,i),Eo(s,t,i))}function f_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function wd(t,i){f_(t,i),(t=t.alternate)&&f_(t,i)}function d_(t){if(t.tag===13||t.tag===31){var i=Ds(t,67108864);i!==null&&ai(i,t,67108864),wd(t,67108864)}}function h_(t){if(t.tag===13||t.tag===31){var i=mi();i=qi(i);var s=Ds(t,i);s!==null&&ai(s,t,i),wd(t,i)}}var bc=!0;function MS(t,i,s,l){var f=N.T;N.T=null;var d=G.p;try{G.p=2,Rd(t,i,s,l)}finally{G.p=d,N.T=f}}function bS(t,i,s,l){var f=N.T;N.T=null;var d=G.p;try{G.p=8,Rd(t,i,s,l)}finally{G.p=d,N.T=f}}function Rd(t,i,s,l){if(bc){var f=Cd(l);if(f===null)pd(t,i,l,Ec,s),m_(t,l);else if(TS(f,t,i,s,l))l.stopPropagation();else if(m_(t,l),i&4&&-1<ES.indexOf(t)){for(;f!==null;){var d=li(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=De(d.pendingLanes);if(v!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;v;){var k=1<<31-je(v);R.entanglements[1]|=k,v&=~k}Qi(d),(Wt&6)===0&&(rc=Fe()+500,Go(0))}}break;case 31:case 13:R=Ds(d,2),R!==null&&ai(R,d,2),lc(),wd(d,2)}if(d=Cd(l),d===null&&pd(t,i,l,Ec,s),d===f)break;f=d}f!==null&&l.stopPropagation()}else pd(t,i,l,null,s)}}function Cd(t){return t=Du(t),Dd(t)}var Ec=null;function Dd(t){if(Ec=null,t=oi(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===31){if(t=h(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Ec=t,null}function p_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qt()){case U:return 2;case E:return 8;case te:case Me:return 32;case Ie:return 268435456;default:return 32}default:return 32}}var Nd=!1,os=null,ls=null,cs=null,jo=new Map,qo=new Map,us=[],ES="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function m_(t,i){switch(t){case"focusin":case"focusout":os=null;break;case"dragenter":case"dragleave":ls=null;break;case"mouseover":case"mouseout":cs=null;break;case"pointerover":case"pointerout":jo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(i.pointerId)}}function $o(t,i,s,l,f,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=li(i),i!==null&&d_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function TS(t,i,s,l,f){switch(i){case"focusin":return os=$o(os,t,i,s,l,f),!0;case"dragenter":return ls=$o(ls,t,i,s,l,f),!0;case"mouseover":return cs=$o(cs,t,i,s,l,f),!0;case"pointerover":var d=f.pointerId;return jo.set(d,$o(jo.get(d)||null,t,i,s,l,f)),!0;case"gotpointercapture":return d=f.pointerId,qo.set(d,$o(qo.get(d)||null,t,i,s,l,f)),!0}return!1}function g_(t){var i=oi(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,Ba(t.priority,function(){h_(s)});return}}else if(i===31){if(i=h(s),i!==null){t.blockedOn=i,Ba(t.priority,function(){h_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Tc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Cd(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Cu=l,s.target.dispatchEvent(l),Cu=null}else return i=li(s),i!==null&&d_(i),t.blockedOn=s,!1;i.shift()}return!0}function __(t,i,s){Tc(t)&&s.delete(i)}function AS(){Nd=!1,os!==null&&Tc(os)&&(os=null),ls!==null&&Tc(ls)&&(ls=null),cs!==null&&Tc(cs)&&(cs=null),jo.forEach(__),qo.forEach(__)}function Ac(t,i){t.blockedOn===i&&(t.blockedOn=null,Nd||(Nd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,AS)))}var wc=null;function x_(t){wc!==t&&(wc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){wc===t&&(wc=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(Dd(l||s)===null)continue;break}var d=li(s);d!==null&&(t.splice(i,3),i-=3,Cf(d,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Ur(t){function i(k){return Ac(k,t)}os!==null&&Ac(os,t),ls!==null&&Ac(ls,t),cs!==null&&Ac(cs,t),jo.forEach(i),qo.forEach(i);for(var s=0;s<us.length;s++){var l=us[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<us.length&&(s=us[0],s.blockedOn===null);)g_(s),s.blockedOn===null&&us.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],d=s[l+1],v=f[Rn]||null;if(typeof d=="function")v||x_(s);else if(v){var R=null;if(d&&d.hasAttribute("formAction")){if(f=d,v=d[Rn]||null)R=v.formAction;else if(Dd(f)!==null)continue}else R=v.action;typeof R=="function"?s[l+1]=R:(s.splice(l,3),l-=3),x_(s)}}}function v_(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(v){return f=v})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Ud(t){this._internalRoot=t}Rc.prototype.render=Ud.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=mi();u_(s,l,t,i,null,null)},Rc.prototype.unmount=Ud.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;u_(t.current,2,null,t,null,null),lc(),i[Si]=null}};function Rc(t){this._internalRoot=t}Rc.prototype.unstable_scheduleHydration=function(t){if(t){var i=Oi();t={blockedOn:null,target:t,priority:i};for(var s=0;s<us.length&&i!==0&&i<us[s].priority;s++);us.splice(s,0,t),s===0&&g_(t)}};var y_=e.version;if(y_!=="19.2.6")throw Error(a(527,y_,"19.2.6"));G.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=p(i),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var wS={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cc.isDisabled&&Cc.supportsFiber)try{pe=Cc.inject(wS),_e=Cc}catch{}}return Ko.createRoot=function(t,i){if(!o(t))throw Error(a(299));var s=!1,l="",f=wg,d=Rg,v=Cg;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError)),i=l_(t,1,!1,null,null,s,l,null,f,d,v,v_),t[Si]=i.current,hd(t),new Ud(i)},Ko.hydrateRoot=function(t,i,s){if(!o(t))throw Error(a(299));var l=!1,f="",d=wg,v=Rg,R=Cg,k=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(v=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.formState!==void 0&&(k=s.formState)),i=l_(t,1,!0,i,s??null,l,f,k,d,v,R,v_),i.context=c_(null),s=i.current,l=mi(),l=qi(l),f=$a(l),f.callback=null,Za(s,f,l),s=l,i.current.lanes=s,lt(i,s),Qi(i),t[Si]=i.current,hd(t),new Rc(i)},Ko.version="19.2.6",Ko}var N_;function FS(){if(N_)return Id.exports;N_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Id.exports=PS(),Id.exports}var BS=FS();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sp="184",GS=0,U_=1,HS=2,ou=1,Vx=2,cl=3,Ss=0,si=1,Li=2,Oa=0,Qr=1,L_=2,O_=3,I_=4,VS=5,qs=100,kS=101,WS=102,XS=103,YS=104,jS=200,qS=201,$S=202,ZS=203,Ah=204,wh=205,KS=206,QS=207,JS=208,eM=209,tM=210,nM=211,iM=212,aM=213,sM=214,Rh=0,Ch=1,Dh=2,no=3,Nh=4,Uh=5,Lh=6,Oh=7,Mp=0,rM=1,oM=2,sa=0,kx=1,Wx=2,Xx=3,Yx=4,jx=5,qx=6,$x=7,Zx=300,Js=301,io=302,Bd=303,Gd=304,Eu=306,ml=1e3,La=1001,Ih=1002,Bn=1003,lM=1004,Dc=1005,Xn=1006,Hd=1007,Zs=1008,vi=1009,Kx=1010,Qx=1011,gl=1012,bp=1013,oa=1014,ia=1015,Pa=1016,Ep=1017,Tp=1018,_l=1020,Jx=35902,ev=35899,tv=1021,nv=1022,Xi=1023,Fa=1026,Ks=1027,iv=1028,Ap=1029,er=1030,wp=1031,Rp=1033,lu=33776,cu=33777,uu=33778,fu=33779,zh=35840,Ph=35841,Fh=35842,Bh=35843,Gh=36196,Hh=37492,Vh=37496,kh=37488,Wh=37489,hu=37490,Xh=37491,Yh=37808,jh=37809,qh=37810,$h=37811,Zh=37812,Kh=37813,Qh=37814,Jh=37815,ep=37816,tp=37817,np=37818,ip=37819,ap=37820,sp=37821,rp=36492,op=36494,lp=36495,cp=36283,up=36284,pu=36285,fp=36286,cM=3200,mu=0,uM=1,vs="",Ui="srgb",gu="srgb-linear",_u="linear",$t="srgb",Lr=7680,z_=519,fM=512,dM=513,hM=514,Cp=515,pM=516,mM=517,Dp=518,gM=519,dp=35044,P_="300 es",aa=2e3,xl=2001;function _M(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function xu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function xM(){const r=xu("canvas");return r.style.display="block",r}const F_={};function vu(...r){const e="THREE."+r.shift();console.log(e,...r)}function av(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=r[1];n&&n.isStackTrace?r[0]+=" "+n.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function mt(...r){r=av(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...r)}}function zt(...r){r=av(r);const e="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...r)}}function hp(...r){const e=r.join(" ");e in F_||(F_[e]=!0,mt(...r))}function vM(r,e,n){return new Promise(function(a,o){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const yM={[Rh]:Ch,[Dh]:Lh,[Nh]:Oh,[no]:Uh,[Ch]:Rh,[Lh]:Dh,[Oh]:Nh,[Uh]:no};class tr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let B_=1234567;const Jr=Math.PI/180,vl=180/Math.PI;function Ia(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(kn[r&255]+kn[r>>8&255]+kn[r>>16&255]+kn[r>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[n&63|128]+kn[n>>8&255]+"-"+kn[n>>16&255]+kn[n>>24&255]+kn[a&255]+kn[a>>8&255]+kn[a>>16&255]+kn[a>>24&255]).toLowerCase()}function Ot(r,e,n){return Math.max(e,Math.min(n,r))}function Np(r,e){return(r%e+e)%e}function SM(r,e,n,a,o){return a+(r-e)*(o-a)/(n-e)}function MM(r,e,n){return r!==e?(n-r)/(e-r):0}function dl(r,e,n){return(1-n)*r+n*e}function bM(r,e,n,a){return dl(r,e,1-Math.exp(-n*a))}function EM(r,e=1){return e-Math.abs(Np(r,e*2)-e)}function TM(r,e,n){return r<=e?0:r>=n?1:(r=(r-e)/(n-e),r*r*(3-2*r))}function AM(r,e,n){return r<=e?0:r>=n?1:(r=(r-e)/(n-e),r*r*r*(r*(r*6-15)+10))}function wM(r,e){return r+Math.floor(Math.random()*(e-r+1))}function RM(r,e){return r+Math.random()*(e-r)}function CM(r){return r*(.5-Math.random())}function DM(r){r!==void 0&&(B_=r);let e=B_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function NM(r){return r*Jr}function UM(r){return r*vl}function LM(r){return(r&r-1)===0&&r!==0}function OM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function IM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function zM(r,e,n,a,o){const c=Math.cos,u=Math.sin,h=c(n/2),m=u(n/2),p=c((e+a)/2),_=u((e+a)/2),x=c((e-a)/2),g=u((e-a)/2),M=c((a-e)/2),b=u((a-e)/2);switch(o){case"XYX":r.set(h*_,m*x,m*g,h*p);break;case"YZY":r.set(m*g,h*_,m*x,h*p);break;case"ZXZ":r.set(m*x,m*g,h*_,h*p);break;case"XZX":r.set(h*_,m*b,m*M,h*p);break;case"YXY":r.set(m*M,h*_,m*b,h*p);break;case"ZYZ":r.set(m*b,m*M,h*_,h*p);break;default:mt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Wi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Zt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const PM={DEG2RAD:Jr,RAD2DEG:vl,generateUUID:Ia,clamp:Ot,euclideanModulo:Np,mapLinear:SM,inverseLerp:MM,lerp:dl,damp:bM,pingpong:EM,smoothstep:TM,smootherstep:AM,randInt:wM,randFloat:RM,randFloatSpread:CM,seededRandom:DM,degToRad:NM,radToDeg:UM,isPowerOfTwo:LM,ceilPowerOfTwo:OM,floorPowerOfTwo:IM,setQuaternionFromProperEuler:zM,normalize:Zt,denormalize:Wi},Fp=class Fp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,o=e.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ot(this.x,e.x,n.x),this.y=Ot(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ot(this.x,e,n),this.y=Ot(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ot(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Ot(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*a-u*o+e.x,this.y=c*o+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fp.prototype.isVector2=!0;let Et=Fp;class ro{constructor(e=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=o}static slerpFlat(e,n,a,o,c,u,h){let m=a[o+0],p=a[o+1],_=a[o+2],x=a[o+3],g=c[u+0],M=c[u+1],b=c[u+2],C=c[u+3];if(x!==C||m!==g||p!==M||_!==b){let S=m*g+p*M+_*b+x*C;S<0&&(g=-g,M=-M,b=-b,C=-C,S=-S);let y=1-h;if(S<.9995){const D=Math.acos(S),F=Math.sin(D);y=Math.sin(y*D)/F,h=Math.sin(h*D)/F,m=m*y+g*h,p=p*y+M*h,_=_*y+b*h,x=x*y+C*h}else{m=m*y+g*h,p=p*y+M*h,_=_*y+b*h,x=x*y+C*h;const D=1/Math.sqrt(m*m+p*p+_*_+x*x);m*=D,p*=D,_*=D,x*=D}}e[n]=m,e[n+1]=p,e[n+2]=_,e[n+3]=x}static multiplyQuaternionsFlat(e,n,a,o,c,u){const h=a[o],m=a[o+1],p=a[o+2],_=a[o+3],x=c[u],g=c[u+1],M=c[u+2],b=c[u+3];return e[n]=h*b+_*x+m*M-p*g,e[n+1]=m*b+_*g+p*x-h*M,e[n+2]=p*b+_*M+h*g-m*x,e[n+3]=_*b-h*x-m*g-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,o){return this._x=e,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,o=e._y,c=e._z,u=e._order,h=Math.cos,m=Math.sin,p=h(a/2),_=h(o/2),x=h(c/2),g=m(a/2),M=m(o/2),b=m(c/2);switch(u){case"XYZ":this._x=g*_*x+p*M*b,this._y=p*M*x-g*_*b,this._z=p*_*b+g*M*x,this._w=p*_*x-g*M*b;break;case"YXZ":this._x=g*_*x+p*M*b,this._y=p*M*x-g*_*b,this._z=p*_*b-g*M*x,this._w=p*_*x+g*M*b;break;case"ZXY":this._x=g*_*x-p*M*b,this._y=p*M*x+g*_*b,this._z=p*_*b+g*M*x,this._w=p*_*x-g*M*b;break;case"ZYX":this._x=g*_*x-p*M*b,this._y=p*M*x+g*_*b,this._z=p*_*b-g*M*x,this._w=p*_*x+g*M*b;break;case"YZX":this._x=g*_*x+p*M*b,this._y=p*M*x+g*_*b,this._z=p*_*b-g*M*x,this._w=p*_*x-g*M*b;break;case"XZY":this._x=g*_*x-p*M*b,this._y=p*M*x-g*_*b,this._z=p*_*b+g*M*x,this._w=p*_*x+g*M*b;break;default:mt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],o=n[4],c=n[8],u=n[1],h=n[5],m=n[9],p=n[2],_=n[6],x=n[10],g=a+h+x;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(_-m)*M,this._y=(c-p)*M,this._z=(u-o)*M}else if(a>h&&a>x){const M=2*Math.sqrt(1+a-h-x);this._w=(_-m)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(c+p)/M}else if(h>x){const M=2*Math.sqrt(1+h-a-x);this._w=(c-p)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+x-a-h);this._w=(u-o)/M,this._x=(c+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,o=e._y,c=e._z,u=e._w,h=n._x,m=n._y,p=n._z,_=n._w;return this._x=a*_+u*h+o*p-c*m,this._y=o*_+u*m+c*h-a*p,this._z=c*_+u*p+a*m-o*h,this._w=u*_-a*h-o*m-c*p,this._onChangeCallback(),this}slerp(e,n){let a=e._x,o=e._y,c=e._z,u=e._w,h=this.dot(e);h<0&&(a=-a,o=-o,c=-c,u=-u,h=-h);let m=1-n;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,n=Math.sin(n*p)/_,this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Bp=class Bp{constructor(e=0,n=0,a=0){this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(G_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(G_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,o=this.z,c=e.x,u=e.y,h=e.z,m=e.w,p=2*(u*o-h*a),_=2*(h*n-c*o),x=2*(c*a-u*n);return this.x=n+m*p+u*x-h*_,this.y=a+m*_+h*p-c*x,this.z=o+m*x+c*_-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ot(this.x,e.x,n.x),this.y=Ot(this.y,e.y,n.y),this.z=Ot(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ot(this.x,e,n),this.y=Ot(this.y,e,n),this.z=Ot(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ot(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,o=e.y,c=e.z,u=n.x,h=n.y,m=n.z;return this.x=o*m-c*h,this.y=c*u-a*m,this.z=a*h-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Vd.copy(this).projectOnVector(e),this.sub(Vd)}reflect(e){return this.sub(Vd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Ot(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return n*n+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const o=Math.sin(n)*e;return this.x=o*Math.sin(a),this.y=Math.cos(n)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bp.prototype.isVector3=!0;let Q=Bp;const Vd=new Q,G_=new ro,Gp=class Gp{constructor(e,n,a,o,c,u,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,h,m,p)}set(e,n,a,o,c,u,h,m,p){const _=this.elements;return _[0]=e,_[1]=o,_[2]=h,_[3]=n,_[4]=c,_[5]=m,_[6]=a,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],h=a[3],m=a[6],p=a[1],_=a[4],x=a[7],g=a[2],M=a[5],b=a[8],C=o[0],S=o[3],y=o[6],D=o[1],F=o[4],I=o[7],X=o[2],B=o[5],O=o[8];return c[0]=u*C+h*D+m*X,c[3]=u*S+h*F+m*B,c[6]=u*y+h*I+m*O,c[1]=p*C+_*D+x*X,c[4]=p*S+_*F+x*B,c[7]=p*y+_*I+x*O,c[2]=g*C+M*D+b*X,c[5]=g*S+M*F+b*B,c[8]=g*y+M*I+b*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return n*u*_-n*h*p-a*c*_+a*h*m+o*c*p-o*u*m}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],_=e[8],x=_*u-h*p,g=h*m-_*c,M=p*c-u*m,b=n*x+a*g+o*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=x*C,e[1]=(o*p-_*a)*C,e[2]=(h*a-o*u)*C,e[3]=g*C,e[4]=(_*n-o*m)*C,e[5]=(o*c-h*n)*C,e[6]=M*C,e[7]=(a*m-p*n)*C,e[8]=(u*n-a*c)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,o,c,u,h){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*u+p*h)+u+e,-o*p,o*m,-o*(-p*u+m*h)+h+n,0,0,1),this}scale(e,n){return this.premultiply(kd.makeScale(e,n)),this}rotate(e){return this.premultiply(kd.makeRotation(-e)),this}translate(e,n){return this.premultiply(kd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Gp.prototype.isMatrix3=!0;let St=Gp;const kd=new St,H_=new St().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),V_=new St().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function FM(){const r={enabled:!0,workingColorSpace:gu,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===$t&&(o.r=za(o.r),o.g=za(o.g),o.b=za(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===$t&&(o.r=eo(o.r),o.g=eo(o.g),o.b=eo(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===vs?_u:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return hp("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return hp("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[gu]:{primaries:e,whitePoint:a,transfer:_u,toXYZ:H_,fromXYZ:V_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ui},outputColorSpaceConfig:{drawingBufferColorSpace:Ui}},[Ui]:{primaries:e,whitePoint:a,transfer:$t,toXYZ:H_,fromXYZ:V_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ui}}}),r}const Pt=FM();function za(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function eo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Or;class BM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Or===void 0&&(Or=xu("canvas")),Or.width=e.width,Or.height=e.height;const o=Or.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=Or}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=xu("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=za(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(za(n[a]/255)*255):n[a]=za(n[a]);return{data:n,width:e.width,height:e.height}}else return mt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let GM=0;class Up{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=Ia(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(Wd(o[u].image)):c.push(Wd(o[u]))}else c=Wd(o);a.url=c}return n||(e.images[this.uuid]=a),a}}function Wd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?BM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(mt("Texture: Unable to serialize Texture."),{})}let HM=0;const Xd=new Q;class Yn extends tr{constructor(e=Yn.DEFAULT_IMAGE,n=Yn.DEFAULT_MAPPING,a=La,o=La,c=Xn,u=Zs,h=Xi,m=vi,p=Yn.DEFAULT_ANISOTROPY,_=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=Ia(),this.name="",this.source=new Up(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xd).x}get height(){return this.source.getSize(Xd).y}get depth(){return this.source.getSize(Xd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){mt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){mt(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ml:e.x=e.x-Math.floor(e.x);break;case La:e.x=e.x<0?0:1;break;case Ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ml:e.y=e.y-Math.floor(e.y);break;case La:e.y=e.y<0?0:1;break;case Ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=Zx;Yn.DEFAULT_ANISOTROPY=1;const Hp=class Hp{constructor(e=0,n=0,a=0,o=1){this.x=e,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,o){return this.x=e,this.y=n,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,o,c;const m=e.elements,p=m[0],_=m[4],x=m[8],g=m[1],M=m[5],b=m[9],C=m[2],S=m[6],y=m[10];if(Math.abs(_-g)<.01&&Math.abs(x-C)<.01&&Math.abs(b-S)<.01){if(Math.abs(_+g)<.1&&Math.abs(x+C)<.1&&Math.abs(b+S)<.1&&Math.abs(p+M+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const F=(p+1)/2,I=(M+1)/2,X=(y+1)/2,B=(_+g)/4,O=(x+C)/4,T=(b+S)/4;return F>I&&F>X?F<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(F),o=B/a,c=O/a):I>X?I<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(I),a=B/o,c=T/o):X<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(X),a=O/c,o=T/c),this.set(a,o,c,n),this}let D=Math.sqrt((S-b)*(S-b)+(x-C)*(x-C)+(g-_)*(g-_));return Math.abs(D)<.001&&(D=1),this.x=(S-b)/D,this.y=(x-C)/D,this.z=(g-_)/D,this.w=Math.acos((p+M+y-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ot(this.x,e.x,n.x),this.y=Ot(this.y,e.y,n.y),this.z=Ot(this.z,e.z,n.z),this.w=Ot(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ot(this.x,e,n),this.y=Ot(this.y,e,n),this.z=Ot(this.z,e,n),this.w=Ot(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ot(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hp.prototype.isVector4=!0;let xn=Hp;class VM extends tr{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new xn(0,0,e,n),this.scissorTest=!1,this.viewport=new xn(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:a.depth},c=new Yn(o),u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:Xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new Up(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ra extends VM{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class sv extends Yn{constructor(e=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kM extends Yn{constructor(e=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bu=class bu{constructor(e,n,a,o,c,u,h,m,p,_,x,g,M,b,C,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,h,m,p,_,x,g,M,b,C,S)}set(e,n,a,o,c,u,h,m,p,_,x,g,M,b,C,S){const y=this.elements;return y[0]=e,y[4]=n,y[8]=a,y[12]=o,y[1]=c,y[5]=u,y[9]=h,y[13]=m,y[2]=p,y[6]=_,y[10]=x,y[14]=g,y[3]=M,y[7]=b,y[11]=C,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bu().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,a=e.elements,o=1/Ir.setFromMatrixColumn(e,0).length(),c=1/Ir.setFromMatrixColumn(e,1).length(),u=1/Ir.setFromMatrixColumn(e,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,o=e.y,c=e.z,u=Math.cos(a),h=Math.sin(a),m=Math.cos(o),p=Math.sin(o),_=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const g=u*_,M=u*x,b=h*_,C=h*x;n[0]=m*_,n[4]=-m*x,n[8]=p,n[1]=M+b*p,n[5]=g-C*p,n[9]=-h*m,n[2]=C-g*p,n[6]=b+M*p,n[10]=u*m}else if(e.order==="YXZ"){const g=m*_,M=m*x,b=p*_,C=p*x;n[0]=g+C*h,n[4]=b*h-M,n[8]=u*p,n[1]=u*x,n[5]=u*_,n[9]=-h,n[2]=M*h-b,n[6]=C+g*h,n[10]=u*m}else if(e.order==="ZXY"){const g=m*_,M=m*x,b=p*_,C=p*x;n[0]=g-C*h,n[4]=-u*x,n[8]=b+M*h,n[1]=M+b*h,n[5]=u*_,n[9]=C-g*h,n[2]=-u*p,n[6]=h,n[10]=u*m}else if(e.order==="ZYX"){const g=u*_,M=u*x,b=h*_,C=h*x;n[0]=m*_,n[4]=b*p-M,n[8]=g*p+C,n[1]=m*x,n[5]=C*p+g,n[9]=M*p-b,n[2]=-p,n[6]=h*m,n[10]=u*m}else if(e.order==="YZX"){const g=u*m,M=u*p,b=h*m,C=h*p;n[0]=m*_,n[4]=C-g*x,n[8]=b*x+M,n[1]=x,n[5]=u*_,n[9]=-h*_,n[2]=-p*_,n[6]=M*x+b,n[10]=g-C*x}else if(e.order==="XZY"){const g=u*m,M=u*p,b=h*m,C=h*p;n[0]=m*_,n[4]=-x,n[8]=p*_,n[1]=g*x+C,n[5]=u*_,n[9]=M*x-b,n[2]=b*x-M,n[6]=h*_,n[10]=C*x+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(WM,e,XM)}lookAt(e,n,a){const o=this.elements;return gi.subVectors(e,n),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),ds.crossVectors(a,gi),ds.lengthSq()===0&&(Math.abs(a.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),ds.crossVectors(a,gi)),ds.normalize(),Nc.crossVectors(gi,ds),o[0]=ds.x,o[4]=Nc.x,o[8]=gi.x,o[1]=ds.y,o[5]=Nc.y,o[9]=gi.y,o[2]=ds.z,o[6]=Nc.z,o[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],h=a[4],m=a[8],p=a[12],_=a[1],x=a[5],g=a[9],M=a[13],b=a[2],C=a[6],S=a[10],y=a[14],D=a[3],F=a[7],I=a[11],X=a[15],B=o[0],O=o[4],T=o[8],L=o[12],q=o[1],H=o[5],j=o[9],fe=o[13],me=o[2],Y=o[6],N=o[10],G=o[14],oe=o[3],ve=o[7],Ae=o[11],P=o[15];return c[0]=u*B+h*q+m*me+p*oe,c[4]=u*O+h*H+m*Y+p*ve,c[8]=u*T+h*j+m*N+p*Ae,c[12]=u*L+h*fe+m*G+p*P,c[1]=_*B+x*q+g*me+M*oe,c[5]=_*O+x*H+g*Y+M*ve,c[9]=_*T+x*j+g*N+M*Ae,c[13]=_*L+x*fe+g*G+M*P,c[2]=b*B+C*q+S*me+y*oe,c[6]=b*O+C*H+S*Y+y*ve,c[10]=b*T+C*j+S*N+y*Ae,c[14]=b*L+C*fe+S*G+y*P,c[3]=D*B+F*q+I*me+X*oe,c[7]=D*O+F*H+I*Y+X*ve,c[11]=D*T+F*j+I*N+X*Ae,c[15]=D*L+F*fe+I*G+X*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],o=e[8],c=e[12],u=e[1],h=e[5],m=e[9],p=e[13],_=e[2],x=e[6],g=e[10],M=e[14],b=e[3],C=e[7],S=e[11],y=e[15],D=m*M-p*g,F=h*M-p*x,I=h*g-m*x,X=u*M-p*_,B=u*g-m*_,O=u*x-h*_;return n*(C*D-S*F+y*I)-a*(b*D-S*X+y*B)+o*(b*F-C*X+y*O)-c*(b*I-C*B+S*O)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],_=e[8],x=e[9],g=e[10],M=e[11],b=e[12],C=e[13],S=e[14],y=e[15],D=n*h-a*u,F=n*m-o*u,I=n*p-c*u,X=a*m-o*h,B=a*p-c*h,O=o*p-c*m,T=_*C-x*b,L=_*S-g*b,q=_*y-M*b,H=x*S-g*C,j=x*y-M*C,fe=g*y-M*S,me=D*fe-F*j+I*H+X*q-B*L+O*T;if(me===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/me;return e[0]=(h*fe-m*j+p*H)*Y,e[1]=(o*j-a*fe-c*H)*Y,e[2]=(C*O-S*B+y*X)*Y,e[3]=(g*B-x*O-M*X)*Y,e[4]=(m*q-u*fe-p*L)*Y,e[5]=(n*fe-o*q+c*L)*Y,e[6]=(S*I-b*O-y*F)*Y,e[7]=(_*O-g*I+M*F)*Y,e[8]=(u*j-h*q+p*T)*Y,e[9]=(a*q-n*j-c*T)*Y,e[10]=(b*B-C*I+y*D)*Y,e[11]=(x*I-_*B-M*D)*Y,e[12]=(h*L-u*H-m*T)*Y,e[13]=(n*H-a*L+o*T)*Y,e[14]=(C*F-b*X-S*D)*Y,e[15]=(_*X-x*F+g*D)*Y,this}scale(e){const n=this.elements,a=e.x,o=e.y,c=e.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=e.x,h=e.y,m=e.z,p=c*u,_=c*h;return this.set(p*u+a,p*h-o*m,p*m+o*h,0,p*h+o*m,_*h+a,_*m-o*u,0,p*m-o*h,_*m+o*u,c*m*m+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,o,c,u){return this.set(1,a,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,a){const o=this.elements,c=n._x,u=n._y,h=n._z,m=n._w,p=c+c,_=u+u,x=h+h,g=c*p,M=c*_,b=c*x,C=u*_,S=u*x,y=h*x,D=m*p,F=m*_,I=m*x,X=a.x,B=a.y,O=a.z;return o[0]=(1-(C+y))*X,o[1]=(M+I)*X,o[2]=(b-F)*X,o[3]=0,o[4]=(M-I)*B,o[5]=(1-(g+y))*B,o[6]=(S+D)*B,o[7]=0,o[8]=(b+F)*O,o[9]=(S-D)*O,o[10]=(1-(g+C))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,a){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinant();if(c===0)return a.set(1,1,1),n.identity(),this;let u=Ir.set(o[0],o[1],o[2]).length();const h=Ir.set(o[4],o[5],o[6]).length(),m=Ir.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Hi.copy(this);const p=1/u,_=1/h,x=1/m;return Hi.elements[0]*=p,Hi.elements[1]*=p,Hi.elements[2]*=p,Hi.elements[4]*=_,Hi.elements[5]*=_,Hi.elements[6]*=_,Hi.elements[8]*=x,Hi.elements[9]*=x,Hi.elements[10]*=x,n.setFromRotationMatrix(Hi),a.x=u,a.y=h,a.z=m,this}makePerspective(e,n,a,o,c,u,h=aa,m=!1){const p=this.elements,_=2*c/(n-e),x=2*c/(a-o),g=(n+e)/(n-e),M=(a+o)/(a-o);let b,C;if(m)b=c/(u-c),C=u*c/(u-c);else if(h===aa)b=-(u+c)/(u-c),C=-2*u*c/(u-c);else if(h===xl)b=-u/(u-c),C=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=x,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,a,o,c,u,h=aa,m=!1){const p=this.elements,_=2/(n-e),x=2/(a-o),g=-(n+e)/(n-e),M=-(a+o)/(a-o);let b,C;if(m)b=1/(u-c),C=u/(u-c);else if(h===aa)b=-2/(u-c),C=-(u+c)/(u-c);else if(h===xl)b=-1/(u-c),C=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=x,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}};bu.prototype.isMatrix4=!0;let fn=bu;const Ir=new Q,Hi=new fn,WM=new Q(0,0,0),XM=new Q(1,1,1),ds=new Q,Nc=new Q,gi=new Q,k_=new fn,W_=new ro;class ji{constructor(e=0,n=0,a=0,o=ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,o=this._order){return this._x=e,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const o=e.elements,c=o[0],u=o[4],h=o[8],m=o[1],p=o[5],_=o[9],x=o[2],g=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(Ot(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ot(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Ot(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:mt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return k_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(k_,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return W_.setFromEuler(this),this.setFromQuaternion(W_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ji.DEFAULT_ORDER="XYZ";class Lp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let YM=0;const X_=new Q,zr=new ro,Ra=new fn,Uc=new Q,Qo=new Q,jM=new Q,qM=new ro,Y_=new Q(1,0,0),j_=new Q(0,1,0),q_=new Q(0,0,1),$_={type:"added"},$M={type:"removed"},Pr={type:"childadded",child:null},Yd={type:"childremoved",child:null};class jn extends tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=Ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const e=new Q,n=new ji,a=new ro,o=new Q(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new fn},normalMatrix:{value:new St}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(Y_,e)}rotateY(e){return this.rotateOnAxis(j_,e)}rotateZ(e){return this.rotateOnAxis(q_,e)}translateOnAxis(e,n){return X_.copy(e).applyQuaternion(this.quaternion),this.position.add(X_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Y_,e)}translateY(e){return this.translateOnAxis(j_,e)}translateZ(e){return this.translateOnAxis(q_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ra.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Uc.copy(e):Uc.set(e,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ra.lookAt(Qo,Uc,this.up):Ra.lookAt(Uc,Qo,this.up),this.quaternion.setFromRotationMatrix(Ra),o&&(Ra.extractRotation(o.matrixWorld),zr.setFromRotationMatrix(Ra),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(zt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($_),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent($M),Yd.child=e,this.dispatchEvent(Yd),Yd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ra.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ra.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ra),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($_),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,e,jM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,qM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,a=e.y,o=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*a-c[8]*o,c[13]+=a-c[1]*n-c[5]*a-c[9]*o,c[14]+=o-c[2]*n-c[6]*a-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const x=m[p];c(e.shapes,x)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(e.animations,m))}}if(n){const h=u(e.geometries),m=u(e.materials),p=u(e.textures),_=u(e.images),x=u(e.shapes),g=u(e.skeletons),M=u(e.animations),b=u(e.nodes);h.length>0&&(a.geometries=h),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),_.length>0&&(a.images=_),x.length>0&&(a.shapes=x),g.length>0&&(a.skeletons=g),M.length>0&&(a.animations=M),b.length>0&&(a.nodes=b)}return a.object=o,a;function u(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}jn.DEFAULT_UP=new Q(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Lc extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZM={type:"move"};class jd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let o=null,c=null,u=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const C of e.hand.values()){const S=n.getJointPose(C,a),y=this._getHandJoint(p,C);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],g=_.position.distanceTo(x.position),M=.02,b=.005;p.inputState.pinching&&g>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=n.getPose(e.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(ZM)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new Lc;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}const rv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},Oc={h:0,s:0,l:0};function qd(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class Nt{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,o=Pt.workingColorSpace){return this.r=e,this.g=n,this.b=a,Pt.colorSpaceToWorking(this,o),this}setHSL(e,n,a,o=Pt.workingColorSpace){if(e=Np(e,1),n=Ot(n,0,1),a=Ot(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=qd(u,c,e+1/3),this.g=qd(u,c,e),this.b=qd(u,c,e-1/3)}return Pt.colorSpaceToWorking(this,o),this}setStyle(e,n=Ui){function a(c){c!==void 0&&parseFloat(c)<1&&mt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:mt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);mt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ui){const a=rv[e.toLowerCase()];return a!==void 0?this.setHex(a,n):mt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=za(e.r),this.g=za(e.g),this.b=za(e.b),this}copyLinearToSRGB(e){return this.r=eo(e.r),this.g=eo(e.g),this.b=eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ui){return Pt.workingToColorSpace(Wn.copy(this),e),Math.round(Ot(Wn.r*255,0,255))*65536+Math.round(Ot(Wn.g*255,0,255))*256+Math.round(Ot(Wn.b*255,0,255))}getHexString(e=Ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Pt.workingColorSpace){Pt.workingToColorSpace(Wn.copy(this),n);const a=Wn.r,o=Wn.g,c=Wn.b,u=Math.max(a,o,c),h=Math.min(a,o,c);let m,p;const _=(h+u)/2;if(h===u)m=0,p=0;else{const x=u-h;switch(p=_<=.5?x/(u+h):x/(2-u-h),u){case a:m=(o-c)/x+(o<c?6:0);break;case o:m=(c-a)/x+2;break;case c:m=(a-o)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,n=Pt.workingColorSpace){return Pt.workingToColorSpace(Wn.copy(this),n),e.r=Wn.r,e.g=Wn.g,e.b=Wn.b,e}getStyle(e=Ui){Pt.workingToColorSpace(Wn.copy(this),e);const n=Wn.r,a=Wn.g,o=Wn.b;return e!==Ui?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,n,a){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+n,hs.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(hs),e.getHSL(Oc);const a=dl(hs.h,Oc.h,n),o=dl(hs.s,Oc.s,n),c=dl(hs.l,Oc.l,n);return this.setHSL(a,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wn=new Nt;Nt.NAMES=rv;class Op{constructor(e,n=1,a=1e3){this.isFog=!0,this.name="",this.color=new Nt(e),this.near=n,this.far=a}clone(){return new Op(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class KM extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Vi=new Q,Ca=new Q,$d=new Q,Da=new Q,Fr=new Q,Br=new Q,Z_=new Q,Zd=new Q,Kd=new Q,Qd=new Q,Jd=new xn,eh=new xn,th=new xn;class yi{constructor(e=new Q,n=new Q,a=new Q){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,o){o.subVectors(a,n),Vi.subVectors(e,n),o.cross(Vi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,a,o,c){Vi.subVectors(o,n),Ca.subVectors(a,n),$d.subVectors(e,n);const u=Vi.dot(Vi),h=Vi.dot(Ca),m=Vi.dot($d),p=Ca.dot(Ca),_=Ca.dot($d),x=u*p-h*h;if(x===0)return c.set(0,0,0),null;const g=1/x,M=(p*m-h*_)*g,b=(u*_-h*m)*g;return c.set(1-M-b,b,M)}static containsPoint(e,n,a,o){return this.getBarycoord(e,n,a,o,Da)===null?!1:Da.x>=0&&Da.y>=0&&Da.x+Da.y<=1}static getInterpolation(e,n,a,o,c,u,h,m){return this.getBarycoord(e,n,a,o,Da)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Da.x),m.addScaledVector(u,Da.y),m.addScaledVector(h,Da.z),m)}static getInterpolatedAttribute(e,n,a,o,c,u){return Jd.setScalar(0),eh.setScalar(0),th.setScalar(0),Jd.fromBufferAttribute(e,n),eh.fromBufferAttribute(e,a),th.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Jd,c.x),u.addScaledVector(eh,c.y),u.addScaledVector(th,c.z),u}static isFrontFacing(e,n,a,o){return Vi.subVectors(a,n),Ca.subVectors(e,n),Vi.cross(Ca).dot(o)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,o){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,a,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vi.subVectors(this.c,this.b),Ca.subVectors(this.a,this.b),Vi.cross(Ca).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return yi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,o,c){return yi.getInterpolation(e,this.a,this.b,this.c,n,a,o,c)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,o=this.b,c=this.c;let u,h;Fr.subVectors(o,a),Br.subVectors(c,a),Zd.subVectors(e,a);const m=Fr.dot(Zd),p=Br.dot(Zd);if(m<=0&&p<=0)return n.copy(a);Kd.subVectors(e,o);const _=Fr.dot(Kd),x=Br.dot(Kd);if(_>=0&&x<=_)return n.copy(o);const g=m*x-_*p;if(g<=0&&m>=0&&_<=0)return u=m/(m-_),n.copy(a).addScaledVector(Fr,u);Qd.subVectors(e,c);const M=Fr.dot(Qd),b=Br.dot(Qd);if(b>=0&&M<=b)return n.copy(c);const C=M*p-m*b;if(C<=0&&p>=0&&b<=0)return h=p/(p-b),n.copy(a).addScaledVector(Br,h);const S=_*b-M*x;if(S<=0&&x-_>=0&&M-b>=0)return Z_.subVectors(c,o),h=(x-_)/(x-_+(M-b)),n.copy(o).addScaledVector(Z_,h);const y=1/(S+C+g);return u=C*y,h=g*y,n.copy(a).addScaledVector(Fr,u).addScaledVector(Br,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ms{constructor(e=new Q(1/0,1/0,1/0),n=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(ki.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(ki.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=ki.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,ki):ki.fromBufferAttribute(c,u),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ic.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Ic.copy(a.boundingBox)),Ic.applyMatrix4(e.matrixWorld),this.union(Ic)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jo),zc.subVectors(this.max,Jo),Gr.subVectors(e.a,Jo),Hr.subVectors(e.b,Jo),Vr.subVectors(e.c,Jo),ps.subVectors(Hr,Gr),ms.subVectors(Vr,Hr),ks.subVectors(Gr,Vr);let n=[0,-ps.z,ps.y,0,-ms.z,ms.y,0,-ks.z,ks.y,ps.z,0,-ps.x,ms.z,0,-ms.x,ks.z,0,-ks.x,-ps.y,ps.x,0,-ms.y,ms.x,0,-ks.y,ks.x,0];return!nh(n,Gr,Hr,Vr,zc)||(n=[1,0,0,0,1,0,0,0,1],!nh(n,Gr,Hr,Vr,zc))?!1:(Pc.crossVectors(ps,ms),n=[Pc.x,Pc.y,Pc.z],nh(n,Gr,Hr,Vr,zc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Na),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Na=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],ki=new Q,Ic=new Ms,Gr=new Q,Hr=new Q,Vr=new Q,ps=new Q,ms=new Q,ks=new Q,Jo=new Q,zc=new Q,Pc=new Q,Ws=new Q;function nh(r,e,n,a,o){for(let c=0,u=r.length-3;c<=u;c+=3){Ws.fromArray(r,c);const h=o.x*Math.abs(Ws.x)+o.y*Math.abs(Ws.y)+o.z*Math.abs(Ws.z),m=e.dot(Ws),p=n.dot(Ws),_=a.dot(Ws);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const An=new Q,Fc=new Et;let QM=0;class Yi extends tr{constructor(e,n,a=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:QM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=dp,this.updateRanges=[],this.gpuType=ia,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Fc.fromBufferAttribute(this,n),Fc.applyMatrix3(e),this.setXY(n,Fc.x,Fc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)An.fromBufferAttribute(this,n),An.applyMatrix3(e),this.setXYZ(n,An.x,An.y,An.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)An.fromBufferAttribute(this,n),An.applyMatrix4(e),this.setXYZ(n,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)An.fromBufferAttribute(this,n),An.applyNormalMatrix(e),this.setXYZ(n,An.x,An.y,An.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)An.fromBufferAttribute(this,n),An.transformDirection(e),this.setXYZ(n,An.x,An.y,An.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Wi(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Zt(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Wi(n,this.array)),n}setX(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Wi(n,this.array)),n}setY(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Wi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Wi(n,this.array)),n}setW(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),a=Zt(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,o){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),a=Zt(a,this.array),o=Zt(o,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,n,a,o,c){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),a=Zt(a,this.array),o=Zt(o,this.array),c=Zt(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class ov extends Yi{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class lv extends Yi{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class qn extends Yi{constructor(e,n,a){super(new Float32Array(e),n,a)}}const JM=new Ms,el=new Q,ih=new Q;class Tu{constructor(e=new Q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):JM.setFromPoints(e).getCenter(a);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;el.subVectors(e,this.center);const n=el.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(el,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ih.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(el.copy(e.center).add(ih)),this.expandByPoint(el.copy(e.center).sub(ih))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let eb=0;const Ni=new fn,ah=new jn,kr=new Q,_i=new Ms,tl=new Ms,On=new Q;class ri extends tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=Ia(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_M(e)?lv:ov)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new St().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ni.makeRotationFromQuaternion(e),this.applyMatrix4(Ni),this}rotateX(e){return Ni.makeRotationX(e),this.applyMatrix4(Ni),this}rotateY(e){return Ni.makeRotationY(e),this.applyMatrix4(Ni),this}rotateZ(e){return Ni.makeRotationZ(e),this.applyMatrix4(Ni),this}translate(e,n,a){return Ni.makeTranslation(e,n,a),this.applyMatrix4(Ni),this}scale(e,n,a){return Ni.makeScale(e,n,a),this.applyMatrix4(Ni),this}lookAt(e){return ah.lookAt(e),ah.updateMatrix(),this.applyMatrix4(ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new qn(a,3))}else{const a=Math.min(e.length,n.count);for(let o=0;o<a;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&mt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ms);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];_i.setFromBufferAttribute(c),this.morphTargetsRelative?(On.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(On),On.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(On)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const a=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];tl.setFromBufferAttribute(h),this.morphTargetsRelative?(On.addVectors(_i.min,tl.min),_i.expandByPoint(On),On.addVectors(_i.max,tl.max),_i.expandByPoint(On)):(_i.expandByPoint(tl.min),_i.expandByPoint(tl.max))}_i.getCenter(a);let o=0;for(let c=0,u=e.count;c<u;c++)On.fromBufferAttribute(e,c),o=Math.max(o,a.distanceToSquared(On));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)On.fromBufferAttribute(h,p),m&&(kr.fromBufferAttribute(e,p),On.add(kr)),o=Math.max(o,a.distanceToSquared(On))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yi(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),h=[],m=[];for(let T=0;T<a.count;T++)h[T]=new Q,m[T]=new Q;const p=new Q,_=new Q,x=new Q,g=new Et,M=new Et,b=new Et,C=new Q,S=new Q;function y(T,L,q){p.fromBufferAttribute(a,T),_.fromBufferAttribute(a,L),x.fromBufferAttribute(a,q),g.fromBufferAttribute(c,T),M.fromBufferAttribute(c,L),b.fromBufferAttribute(c,q),_.sub(p),x.sub(p),M.sub(g),b.sub(g);const H=1/(M.x*b.y-b.x*M.y);isFinite(H)&&(C.copy(_).multiplyScalar(b.y).addScaledVector(x,-M.y).multiplyScalar(H),S.copy(x).multiplyScalar(M.x).addScaledVector(_,-b.x).multiplyScalar(H),h[T].add(C),h[L].add(C),h[q].add(C),m[T].add(S),m[L].add(S),m[q].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let T=0,L=D.length;T<L;++T){const q=D[T],H=q.start,j=q.count;for(let fe=H,me=H+j;fe<me;fe+=3)y(e.getX(fe+0),e.getX(fe+1),e.getX(fe+2))}const F=new Q,I=new Q,X=new Q,B=new Q;function O(T){X.fromBufferAttribute(o,T),B.copy(X);const L=h[T];F.copy(L),F.sub(X.multiplyScalar(X.dot(L))).normalize(),I.crossVectors(B,L);const H=I.dot(m[T])<0?-1:1;u.setXYZW(T,F.x,F.y,F.z,H)}for(let T=0,L=D.length;T<L;++T){const q=D[T],H=q.start,j=q.count;for(let fe=H,me=H+j;fe<me;fe+=3)O(e.getX(fe+0)),O(e.getX(fe+1)),O(e.getX(fe+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Yi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let g=0,M=a.count;g<M;g++)a.setXYZ(g,0,0,0);const o=new Q,c=new Q,u=new Q,h=new Q,m=new Q,p=new Q,_=new Q,x=new Q;if(e)for(let g=0,M=e.count;g<M;g+=3){const b=e.getX(g+0),C=e.getX(g+1),S=e.getX(g+2);o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),_.subVectors(u,c),x.subVectors(o,c),_.cross(x),h.fromBufferAttribute(a,b),m.fromBufferAttribute(a,C),p.fromBufferAttribute(a,S),h.add(_),m.add(_),p.add(_),a.setXYZ(b,h.x,h.y,h.z),a.setXYZ(C,m.x,m.y,m.z),a.setXYZ(S,p.x,p.y,p.z)}else for(let g=0,M=n.count;g<M;g+=3)o.fromBufferAttribute(n,g+0),c.fromBufferAttribute(n,g+1),u.fromBufferAttribute(n,g+2),_.subVectors(u,c),x.subVectors(o,c),_.cross(x),a.setXYZ(g+0,_.x,_.y,_.z),a.setXYZ(g+1,_.x,_.y,_.z),a.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)On.fromBufferAttribute(e,n),On.normalize(),e.setXYZ(n,On.x,On.y,On.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,x=h.normalized,g=new p.constructor(m.length*_);let M=0,b=0;for(let C=0,S=m.length;C<S;C++){h.isInterleavedBufferAttribute?M=m[C]*h.data.stride+h.offset:M=m[C]*_;for(let y=0;y<_;y++)g[b++]=p[M++]}return new Yi(g,_,x)}if(this.index===null)return mt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ri,a=this.index.array,o=this.attributes;for(const h in o){const m=o[h],p=e(m,a);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,x=p.length;_<x;_++){const g=p[_],M=e(g,a);m.push(M)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,m=u.length;h<m;h++){const p=u[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let x=0,g=p.length;x<g;x++){const M=p[x];_.push(M.toJSON(e.data))}_.length>0&&(o[m]=_,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const p in o){const _=o[p];this.setAttribute(p,_.clone(n))}const c=e.morphAttributes;for(const p in c){const _=[],x=c[p];for(let g=0,M=x.length;g<M;g++)_.push(x[g].clone(n));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,_=u.length;p<_;p++){const x=u[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tb{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=dp,this.updateRanges=[],this.version=0,this.uuid=Ia()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,a){e*=this.stride,a*=n.stride;for(let o=0,c=this.stride;o<c;o++)this.array[e+o]=n.array[a+o];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ia()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ia()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zn=new Q;class yu{constructor(e,n,a,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=a,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,a=this.data.count;n<a;n++)Zn.fromBufferAttribute(this,n),Zn.applyMatrix4(e),this.setXYZ(n,Zn.x,Zn.y,Zn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Zn.fromBufferAttribute(this,n),Zn.applyNormalMatrix(e),this.setXYZ(n,Zn.x,Zn.y,Zn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Zn.fromBufferAttribute(this,n),Zn.transformDirection(e),this.setXYZ(n,Zn.x,Zn.y,Zn.z);return this}getComponent(e,n){let a=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(a=Wi(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Zt(a,this.array)),this.data.array[e*this.data.stride+this.offset+n]=a,this}setX(e,n){return this.normalized&&(n=Zt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Zt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Zt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Zt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Wi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Wi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Wi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Wi(n,this.array)),n}setXY(e,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=Zt(n,this.array),a=Zt(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this}setXYZ(e,n,a,o){return e=e*this.data.stride+this.offset,this.normalized&&(n=Zt(n,this.array),a=Zt(a,this.array),o=Zt(o,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=o,this}setXYZW(e,n,a,o,c){return e=e*this.data.stride+this.offset,this.normalized&&(n=Zt(n,this.array),a=Zt(a,this.array),o=Zt(o,this.array),c=Zt(c,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=o,this.data.array[e+3]=c,this}clone(e){if(e===void 0){vu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return new Yi(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new yu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){vu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let nb=0;class bs extends tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nb++}),this.uuid=Ia(),this.name="",this.type="Material",this.blending=Qr,this.side=Ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ah,this.blendDst=wh,this.blendEquation=qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=z_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){mt(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){mt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Qr&&(a.blending=this.blending),this.side!==Ss&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Ah&&(a.blendSrc=this.blendSrc),this.blendDst!==wh&&(a.blendDst=this.blendDst),this.blendEquation!==qs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==z_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const h in c){const m=c[h];delete m.metadata,u.push(m)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class pp extends bs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Wr;const nl=new Q,Xr=new Q,Yr=new Q,jr=new Et,il=new Et,cv=new fn,Bc=new Q,al=new Q,Gc=new Q,K_=new Et,sh=new Et,Q_=new Et;class ib extends jn{constructor(e=new pp){if(super(),this.isSprite=!0,this.type="Sprite",Wr===void 0){Wr=new ri;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new tb(n,5);Wr.setIndex([0,1,2,0,2,3]),Wr.setAttribute("position",new yu(a,3,0,!1)),Wr.setAttribute("uv",new yu(a,2,3,!1))}this.geometry=Wr,this.material=e,this.center=new Et(.5,.5),this.count=1}raycast(e,n){e.camera===null&&zt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xr.setFromMatrixScale(this.matrixWorld),cv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Yr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xr.multiplyScalar(-Yr.z);const a=this.material.rotation;let o,c;a!==0&&(c=Math.cos(a),o=Math.sin(a));const u=this.center;Hc(Bc.set(-.5,-.5,0),Yr,u,Xr,o,c),Hc(al.set(.5,-.5,0),Yr,u,Xr,o,c),Hc(Gc.set(.5,.5,0),Yr,u,Xr,o,c),K_.set(0,0),sh.set(1,0),Q_.set(1,1);let h=e.ray.intersectTriangle(Bc,al,Gc,!1,nl);if(h===null&&(Hc(al.set(-.5,.5,0),Yr,u,Xr,o,c),sh.set(0,1),h=e.ray.intersectTriangle(Bc,Gc,al,!1,nl),h===null))return;const m=e.ray.origin.distanceTo(nl);m<e.near||m>e.far||n.push({distance:m,point:nl.clone(),uv:yi.getInterpolation(nl,Bc,al,Gc,K_,sh,Q_,new Et),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Hc(r,e,n,a,o,c){jr.subVectors(r,n).addScalar(.5).multiply(a),o!==void 0?(il.x=c*jr.x-o*jr.y,il.y=o*jr.x+c*jr.y):il.copy(jr),r.copy(e),r.x+=il.x,r.y+=il.y,r.applyMatrix4(cv)}const Ua=new Q,rh=new Q,Vc=new Q,gs=new Q,oh=new Q,kc=new Q,lh=new Q;class Ip{constructor(e=new Q,n=new Q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ua)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ua.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ua.copy(this.origin).addScaledVector(this.direction,n),Ua.distanceToSquared(e))}distanceSqToSegment(e,n,a,o){rh.copy(e).add(n).multiplyScalar(.5),Vc.copy(n).sub(e).normalize(),gs.copy(this.origin).sub(rh);const c=e.distanceTo(n)*.5,u=-this.direction.dot(Vc),h=gs.dot(this.direction),m=-gs.dot(Vc),p=gs.lengthSq(),_=Math.abs(1-u*u);let x,g,M,b;if(_>0)if(x=u*m-h,g=u*h-m,b=c*_,x>=0)if(g>=-b)if(g<=b){const C=1/_;x*=C,g*=C,M=x*(x+u*g+2*h)+g*(u*x+g+2*m)+p}else g=c,x=Math.max(0,-(u*g+h)),M=-x*x+g*(g+2*m)+p;else g=-c,x=Math.max(0,-(u*g+h)),M=-x*x+g*(g+2*m)+p;else g<=-b?(x=Math.max(0,-(-u*c+h)),g=x>0?-c:Math.min(Math.max(-c,-m),c),M=-x*x+g*(g+2*m)+p):g<=b?(x=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+p):(x=Math.max(0,-(u*c+h)),g=x>0?c:Math.min(Math.max(-c,-m),c),M=-x*x+g*(g+2*m)+p);else g=u>0?-c:c,x=Math.max(0,-(u*g+h)),M=-x*x+g*(g+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(rh).addScaledVector(Vc,g),M}intersectSphere(e,n){Ua.subVectors(e.center,this.origin);const a=Ua.dot(this.direction),o=Ua.dot(Ua)-a*a,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=a-u,m=a+u;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,o,c,u,h,m;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,g=this.origin;return p>=0?(a=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(a=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),_>=0?(c=(e.min.y-g.y)*_,u=(e.max.y-g.y)*_):(c=(e.max.y-g.y)*_,u=(e.min.y-g.y)*_),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),x>=0?(h=(e.min.z-g.z)*x,m=(e.max.z-g.z)*x):(h=(e.max.z-g.z)*x,m=(e.min.z-g.z)*x),a>m||h>o)||((h>a||a!==a)&&(a=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(e){return this.intersectBox(e,Ua)!==null}intersectTriangle(e,n,a,o,c){oh.subVectors(n,e),kc.subVectors(a,e),lh.crossVectors(oh,kc);let u=this.direction.dot(lh),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;gs.subVectors(this.origin,e);const m=h*this.direction.dot(kc.crossVectors(gs,kc));if(m<0)return null;const p=h*this.direction.dot(oh.cross(gs));if(p<0||m+p>u)return null;const _=-h*gs.dot(lh);return _<0?null:this.at(_/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yl extends bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=Mp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const J_=new fn,Xs=new Ip,Wc=new Tu,ex=new Q,Xc=new Q,Yc=new Q,jc=new Q,ch=new Q,qc=new Q,tx=new Q,$c=new Q;class nn extends jn{constructor(e=new ri,n=new yl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){qc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],x=c[m];_!==0&&(ch.fromBufferAttribute(x,e),u?qc.addScaledVector(ch,_):qc.addScaledVector(ch.sub(n),_))}n.add(qc)}return n}raycast(e,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Wc.copy(a.boundingSphere),Wc.applyMatrix4(c),Xs.copy(e.ray).recast(e.near),!(Wc.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(Wc,ex)===null||Xs.origin.distanceToSquared(ex)>(e.far-e.near)**2))&&(J_.copy(c).invert(),Xs.copy(e.ray).applyMatrix4(J_),!(a.boundingBox!==null&&Xs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Xs)))}_computeIntersections(e,n,a){let o;const c=this.geometry,u=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,g=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(u))for(let b=0,C=g.length;b<C;b++){const S=g[b],y=u[S.materialIndex],D=Math.max(S.start,M.start),F=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let I=D,X=F;I<X;I+=3){const B=h.getX(I),O=h.getX(I+1),T=h.getX(I+2);o=Zc(this,y,e,a,p,_,x,B,O,T),o&&(o.faceIndex=Math.floor(I/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const b=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let S=b,y=C;S<y;S+=3){const D=h.getX(S),F=h.getX(S+1),I=h.getX(S+2);o=Zc(this,u,e,a,p,_,x,D,F,I),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let b=0,C=g.length;b<C;b++){const S=g[b],y=u[S.materialIndex],D=Math.max(S.start,M.start),F=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let I=D,X=F;I<X;I+=3){const B=I,O=I+1,T=I+2;o=Zc(this,y,e,a,p,_,x,B,O,T),o&&(o.faceIndex=Math.floor(I/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const b=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let S=b,y=C;S<y;S+=3){const D=S,F=S+1,I=S+2;o=Zc(this,u,e,a,p,_,x,D,F,I),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function ab(r,e,n,a,o,c,u,h){let m;if(e.side===si?m=a.intersectTriangle(u,c,o,!0,h):m=a.intersectTriangle(o,c,u,e.side===Ss,h),m===null)return null;$c.copy(h),$c.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo($c);return p<n.near||p>n.far?null:{distance:p,point:$c.clone(),object:r}}function Zc(r,e,n,a,o,c,u,h,m,p){r.getVertexPosition(h,Xc),r.getVertexPosition(m,Yc),r.getVertexPosition(p,jc);const _=ab(r,e,n,a,Xc,Yc,jc,tx);if(_){const x=new Q;yi.getBarycoord(tx,Xc,Yc,jc,x),o&&(_.uv=yi.getInterpolatedAttribute(o,h,m,p,x,new Et)),c&&(_.uv1=yi.getInterpolatedAttribute(c,h,m,p,x,new Et)),u&&(_.normal=yi.getInterpolatedAttribute(u,h,m,p,x,new Q),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new Q,materialIndex:0};yi.getNormal(Xc,Yc,jc,g.normal),_.face=g,_.barycoord=x}return _}class sb extends Yn{constructor(e=null,n=1,a=1,o,c,u,h,m,p=Bn,_=Bn,x,g){super(null,u,h,m,p,_,o,c,x,g),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uh=new Q,rb=new Q,ob=new St;class js{constructor(e=new Q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,o){return this.normal.set(e,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const o=uh.subVectors(a,n).cross(rb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,a=!0){const o=e.delta(uh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return a===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||ob.getNormalMatrix(e),o=this.coplanarPoint(uh).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ys=new Tu,lb=new Et(.5,.5),Kc=new Q;class zp{constructor(e=new js,n=new js,a=new js,o=new js,c=new js,u=new js){this.planes=[e,n,a,o,c,u]}set(e,n,a,o,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=aa,a=!1){const o=this.planes,c=e.elements,u=c[0],h=c[1],m=c[2],p=c[3],_=c[4],x=c[5],g=c[6],M=c[7],b=c[8],C=c[9],S=c[10],y=c[11],D=c[12],F=c[13],I=c[14],X=c[15];if(o[0].setComponents(p-u,M-_,y-b,X-D).normalize(),o[1].setComponents(p+u,M+_,y+b,X+D).normalize(),o[2].setComponents(p+h,M+x,y+C,X+F).normalize(),o[3].setComponents(p-h,M-x,y-C,X-F).normalize(),a)o[4].setComponents(m,g,S,I).normalize(),o[5].setComponents(p-m,M-g,y-S,X-I).normalize();else if(o[4].setComponents(p-m,M-g,y-S,X-I).normalize(),n===aa)o[5].setComponents(p+m,M+g,y+S,X+I).normalize();else if(n===xl)o[5].setComponents(m,g,S,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ys)}intersectsSprite(e){Ys.center.set(0,0,0);const n=lb.distanceTo(e.center);return Ys.radius=.7071067811865476+n,Ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ys)}intersectsSphere(e){const n=this.planes,a=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Kc.x=o.normal.x>0?e.max.x:e.min.x,Kc.y=o.normal.y>0?e.max.y:e.min.y,Kc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Kc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qs extends bs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Su=new Q,Mu=new Q,nx=new fn,sl=new Ip,Qc=new Tu,fh=new Q,ix=new Q;class cb extends jn{constructor(e=new ri,n=new Qs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[0];for(let o=1,c=n.count;o<c;o++)Su.fromBufferAttribute(n,o-1),Mu.fromBufferAttribute(n,o),a[o]=a[o-1],a[o]+=Su.distanceTo(Mu);e.setAttribute("lineDistance",new qn(a,1))}else mt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const a=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Qc.copy(a.boundingSphere),Qc.applyMatrix4(o),Qc.radius+=c,e.ray.intersectsSphere(Qc)===!1)return;nx.copy(o).invert(),sl.copy(e.ray).applyMatrix4(nx);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,_=a.index,g=a.attributes.position;if(_!==null){const M=Math.max(0,u.start),b=Math.min(_.count,u.start+u.count);for(let C=M,S=b-1;C<S;C+=p){const y=_.getX(C),D=_.getX(C+1),F=Jc(this,e,sl,m,y,D,C);F&&n.push(F)}if(this.isLineLoop){const C=_.getX(b-1),S=_.getX(M),y=Jc(this,e,sl,m,C,S,b-1);y&&n.push(y)}}else{const M=Math.max(0,u.start),b=Math.min(g.count,u.start+u.count);for(let C=M,S=b-1;C<S;C+=p){const y=Jc(this,e,sl,m,C,C+1,C);y&&n.push(y)}if(this.isLineLoop){const C=Jc(this,e,sl,m,b-1,M,b-1);C&&n.push(C)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Jc(r,e,n,a,o,c,u){const h=r.geometry.attributes.position;if(Su.fromBufferAttribute(h,o),Mu.fromBufferAttribute(h,c),n.distanceSqToSegment(Su,Mu,fh,ix)>a)return;fh.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(fh);if(!(p<e.near||p>e.far))return{distance:p,point:ix.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}const ax=new Q,sx=new Q;class to extends cb{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[];for(let o=0,c=n.count;o<c;o+=2)ax.fromBufferAttribute(n,o),sx.fromBufferAttribute(n,o+1),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+ax.distanceTo(sx);e.setAttribute("lineDistance",new qn(a,1))}else mt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class uv extends Yn{constructor(e=[],n=Js,a,o,c,u,h,m,p,_){super(e,n,a,o,c,u,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fv extends Yn{constructor(e,n,a,o,c,u,h,m,p){super(e,n,a,o,c,u,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ao extends Yn{constructor(e,n,a=oa,o,c,u,h=Bn,m=Bn,p,_=Fa,x=1){if(_!==Fa&&_!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:x};super(g,o,c,u,h,m,_,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Up(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class ub extends ao{constructor(e,n=oa,a=Js,o,c,u=Bn,h=Bn,m,p=Fa){const _={width:e,height:e,depth:1},x=[_,_,_,_,_,_];super(e,e,n,a,o,c,u,h,m,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class dv extends Yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class cn extends ri{constructor(e=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],_=[],x=[];let g=0,M=0;b("z","y","x",-1,-1,a,n,e,u,c,0),b("z","y","x",1,-1,a,n,-e,u,c,1),b("x","z","y",1,1,e,a,n,o,u,2),b("x","z","y",1,-1,e,a,-n,o,u,3),b("x","y","z",1,-1,e,n,a,o,c,4),b("x","y","z",-1,-1,e,n,-a,o,c,5),this.setIndex(m),this.setAttribute("position",new qn(p,3)),this.setAttribute("normal",new qn(_,3)),this.setAttribute("uv",new qn(x,2));function b(C,S,y,D,F,I,X,B,O,T,L){const q=I/O,H=X/T,j=I/2,fe=X/2,me=B/2,Y=O+1,N=T+1;let G=0,oe=0;const ve=new Q;for(let Ae=0;Ae<N;Ae++){const P=Ae*H-fe;for(let J=0;J<Y;J++){const W=J*q-j;ve[C]=W*D,ve[S]=P*F,ve[y]=me,p.push(ve.x,ve.y,ve.z),ve[C]=0,ve[S]=0,ve[y]=B>0?1:-1,_.push(ve.x,ve.y,ve.z),x.push(J/O),x.push(1-Ae/T),G+=1}}for(let Ae=0;Ae<T;Ae++)for(let P=0;P<O;P++){const J=g+P+Y*Ae,W=g+P+Y*(Ae+1),Re=g+(P+1)+Y*(Ae+1),Te=g+(P+1)+Y*Ae;m.push(J,W,Te),m.push(W,Re,Te),oe+=6}h.addGroup(M,oe,L),M+=oe,g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const eu=new Q,tu=new Q,dh=new Q,nu=new yi;class Sl extends ri{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const o=Math.pow(10,4),c=Math.cos(Jr*n),u=e.getIndex(),h=e.getAttribute("position"),m=u?u.count:h.count,p=[0,0,0],_=["a","b","c"],x=new Array(3),g={},M=[];for(let b=0;b<m;b+=3){u?(p[0]=u.getX(b),p[1]=u.getX(b+1),p[2]=u.getX(b+2)):(p[0]=b,p[1]=b+1,p[2]=b+2);const{a:C,b:S,c:y}=nu;if(C.fromBufferAttribute(h,p[0]),S.fromBufferAttribute(h,p[1]),y.fromBufferAttribute(h,p[2]),nu.getNormal(dh),x[0]=`${Math.round(C.x*o)},${Math.round(C.y*o)},${Math.round(C.z*o)}`,x[1]=`${Math.round(S.x*o)},${Math.round(S.y*o)},${Math.round(S.z*o)}`,x[2]=`${Math.round(y.x*o)},${Math.round(y.y*o)},${Math.round(y.z*o)}`,!(x[0]===x[1]||x[1]===x[2]||x[2]===x[0]))for(let D=0;D<3;D++){const F=(D+1)%3,I=x[D],X=x[F],B=nu[_[D]],O=nu[_[F]],T=`${I}_${X}`,L=`${X}_${I}`;L in g&&g[L]?(dh.dot(g[L].normal)<=c&&(M.push(B.x,B.y,B.z),M.push(O.x,O.y,O.z)),g[L]=null):T in g||(g[T]={index0:p[D],index1:p[F],normal:dh.clone()})}}for(const b in g)if(g[b]){const{index0:C,index1:S}=g[b];eu.fromBufferAttribute(h,C),tu.fromBufferAttribute(h,S),M.push(eu.x,eu.y,eu.z),M.push(tu.x,tu.y,tu.z)}this.setAttribute("position",new qn(M,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Au extends ri{constructor(e=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:o};const c=e/2,u=n/2,h=Math.floor(a),m=Math.floor(o),p=h+1,_=m+1,x=e/h,g=n/m,M=[],b=[],C=[],S=[];for(let y=0;y<_;y++){const D=y*g-u;for(let F=0;F<p;F++){const I=F*x-c;b.push(I,-D,0),C.push(0,0,1),S.push(F/h),S.push(1-y/m)}}for(let y=0;y<m;y++)for(let D=0;D<h;D++){const F=D+p*y,I=D+p*(y+1),X=D+1+p*(y+1),B=D+1+p*y;M.push(F,I,B),M.push(I,X,B)}this.setIndex(M),this.setAttribute("position",new qn(b,3)),this.setAttribute("normal",new qn(C,3)),this.setAttribute("uv",new qn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Au(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pp extends ri{constructor(e=1,n=32,a=16,o=0,c=Math.PI*2,u=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:a,phiStart:o,phiLength:c,thetaStart:u,thetaLength:h},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const m=Math.min(u+h,Math.PI);let p=0;const _=[],x=new Q,g=new Q,M=[],b=[],C=[],S=[];for(let y=0;y<=a;y++){const D=[],F=y/a;let I=0;y===0&&u===0?I=.5/n:y===a&&m===Math.PI&&(I=-.5/n);for(let X=0;X<=n;X++){const B=X/n;x.x=-e*Math.cos(o+B*c)*Math.sin(u+F*h),x.y=e*Math.cos(u+F*h),x.z=e*Math.sin(o+B*c)*Math.sin(u+F*h),b.push(x.x,x.y,x.z),g.copy(x).normalize(),C.push(g.x,g.y,g.z),S.push(B+I,1-F),D.push(p++)}_.push(D)}for(let y=0;y<a;y++)for(let D=0;D<n;D++){const F=_[y][D+1],I=_[y][D],X=_[y+1][D],B=_[y+1][D+1];(y!==0||u>0)&&M.push(F,I,B),(y!==a-1||m<Math.PI)&&M.push(I,X,B)}this.setIndex(M),this.setAttribute("position",new qn(b,3)),this.setAttribute("normal",new qn(C,3)),this.setAttribute("uv",new qn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fb extends ri{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const n=[],a=new Set,o=new Q,c=new Q;if(e.index!==null){const u=e.attributes.position,h=e.index;let m=e.groups;m.length===0&&(m=[{start:0,count:h.count,materialIndex:0}]);for(let p=0,_=m.length;p<_;++p){const x=m[p],g=x.start,M=x.count;for(let b=g,C=g+M;b<C;b+=3)for(let S=0;S<3;S++){const y=h.getX(b+S),D=h.getX(b+(S+1)%3);o.fromBufferAttribute(u,y),c.fromBufferAttribute(u,D),rx(o,c,a)===!0&&(n.push(o.x,o.y,o.z),n.push(c.x,c.y,c.z))}}}else{const u=e.attributes.position;for(let h=0,m=u.count/3;h<m;h++)for(let p=0;p<3;p++){const _=3*h+p,x=3*h+(p+1)%3;o.fromBufferAttribute(u,_),c.fromBufferAttribute(u,x),rx(o,c,a)===!0&&(n.push(o.x,o.y,o.z),n.push(c.x,c.y,c.z))}}this.setAttribute("position",new qn(n,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function rx(r,e,n){const a=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,o=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return n.has(a)===!0||n.has(o)===!0?!1:(n.add(a),n.add(o),!0)}function so(r){const e={};for(const n in r){e[n]={};for(const a in r[n]){const o=r[n][a];if(ox(o))o.isRenderTargetTexture?(mt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=o.clone();else if(Array.isArray(o))if(ox(o[0])){const c=[];for(let u=0,h=o.length;u<h;u++)c[u]=o[u].clone();e[n][a]=c}else e[n][a]=o.slice();else e[n][a]=o}}return e}function Kn(r){const e={};for(let n=0;n<r.length;n++){const a=so(r[n]);for(const o in a)e[o]=a[o]}return e}function ox(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function db(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function hv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const hb={clone:so,merge:Kn};var pb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class la extends bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pb,this.fragmentShader=mb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=db(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class gb extends la{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _b extends bs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mu,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _s extends bs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mu,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=Mp,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xb extends bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vb extends bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class pv extends jn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const hh=new fn,lx=new Q,cx=new Q;class yb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.mapType=vi,this.map=null,this.mapPass=null,this.matrix=new fn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zp,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new xn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,a=this.matrix;lx.setFromMatrixPosition(e.matrixWorld),n.position.copy(lx),cx.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(cx),n.updateMatrixWorld(),hh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hh,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===xl||n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(hh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const iu=new Q,au=new ro,Ji=new Q;class mv extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=aa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(iu,au,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(iu,au,Ji.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(iu,au,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(iu,au,Ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xs=new Q,ux=new Et,fx=new Et;class xi extends mv{constructor(e=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=vl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vl*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xs.x,xs.y).multiplyScalar(-e/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(xs.x,xs.y).multiplyScalar(-e/xs.z)}getViewSize(e,n){return this.getViewBounds(e,ux,fx),n.subVectors(fx,ux)}setViewOffset(e,n,a,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Jr*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*a/p,o*=u.width/m,a*=u.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Sb extends yb{constructor(){super(new xi(90,1,.5,500)),this.isPointLightShadow=!0}}class Mb extends pv{constructor(e,n,a=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new Sb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class gv extends mv{constructor(e=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-e,u=a+e,h=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class bb extends pv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const qr=-90,$r=1;class Eb extends jn{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new xi(qr,$r,e,n);o.layers=this.layers,this.add(o);const c=new xi(qr,$r,e,n);c.layers=this.layers,this.add(c);const u=new xi(qr,$r,e,n);u.layers=this.layers,this.add(u);const h=new xi(qr,$r,e,n);h.layers=this.layers,this.add(h);const m=new xi(qr,$r,e,n);m.layers=this.layers,this.add(m);const p=new xi(qr,$r,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,h,m]=n;for(const p of n)this.remove(p);if(e===aa)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===xl)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,m,p,_]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(a,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(a,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(a,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(a,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),e.setRenderTarget(a,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),a.texture.generateMipmaps=C,e.setRenderTarget(a,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,_),e.setRenderTarget(x,g,M),e.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class Tb extends xi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const dx=new fn;class hx{constructor(e,n,a=0,o=1/0){this.ray=new Ip(e,n),this.near=a,this.far=o,this.camera=null,this.layers=new Lp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):zt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return dx.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dx),this}intersectObject(e,n=!0,a=[]){return mp(e,this,a,n),a.sort(px),a}intersectObjects(e,n=!0,a=[]){for(let o=0,c=e.length;o<c;o++)mp(e[o],this,a,n);return a.sort(px),a}}function px(r,e){return r.distance-e.distance}function mp(r,e,n,a){let o=!0;if(r.layers.test(e.layers)&&r.raycast(e,n)===!1&&(o=!1),o===!0&&a===!0){const c=r.children;for(let u=0,h=c.length;u<h;u++)mp(c[u],e,n,!0)}}const Vp=class Vp{constructor(e,n,a,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,a,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let a=0;a<4;a++)this.elements[a]=e[a+n];return this}set(e,n,a,o){const c=this.elements;return c[0]=e,c[2]=n,c[1]=a,c[3]=o,this}};Vp.prototype.isMatrix2=!0;let mx=Vp;function gx(r,e,n,a){const o=Ab(a);switch(n){case tv:return r*e;case iv:return r*e/o.components*o.byteLength;case Ap:return r*e/o.components*o.byteLength;case er:return r*e*2/o.components*o.byteLength;case wp:return r*e*2/o.components*o.byteLength;case nv:return r*e*3/o.components*o.byteLength;case Xi:return r*e*4/o.components*o.byteLength;case Rp:return r*e*4/o.components*o.byteLength;case lu:case cu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case uu:case fu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ph:case Bh:return Math.max(r,16)*Math.max(e,8)/4;case zh:case Fh:return Math.max(r,8)*Math.max(e,8)/2;case Gh:case Hh:case kh:case Wh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Vh:case hu:case Xh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Yh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case jh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case qh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case $h:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Kh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ep:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case tp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case np:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ip:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ap:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case sp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case rp:case op:case lp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case cp:case up:return Math.ceil(r/4)*Math.ceil(e/4)*8;case pu:case fp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Ab(r){switch(r){case vi:case Kx:return{byteLength:1,components:1};case gl:case Qx:case Pa:return{byteLength:2,components:1};case Ep:case Tp:return{byteLength:2,components:4};case oa:case bp:case ia:return{byteLength:4,components:1};case Jx:case ev:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sp}}));typeof window<"u"&&(window.__THREE__?mt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _v(){let r=null,e=!1,n=null,a=null;function o(c,u){n(c,u),a=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&r!==null&&(a=r.requestAnimationFrame(o),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function wb(r){const e=new WeakMap;function n(h,m){const p=h.array,_=h.usage,x=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),h.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function a(h,m,p){const _=m.array,x=m.updateRanges;if(r.bindBuffer(p,h),x.length===0)r.bufferSubData(p,0,_);else{x.sort((M,b)=>M.start-b.start);let g=0;for(let M=1;M<x.length;M++){const b=x[g],C=x[M];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++g,x[g]=C)}x.length=g+1;for(let M=0,b=x.length;M<b;M++){const C=x[M];r.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(r.deleteBuffer(m.buffer),e.delete(h))}function u(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,m),p.version=h.version}}return{get:o,remove:c,update:u}}var Rb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cb=`#ifdef USE_ALPHAHASH
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
#endif`,Db=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ub=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ob=`#ifdef USE_AOMAP
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
#endif`,Ib=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zb=`#ifdef USE_BATCHING
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
#endif`,Pb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hb=`#ifdef USE_IRIDESCENCE
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
#endif`,Vb=`#ifdef USE_BUMPMAP
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
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$b=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Kb=`#define PI 3.141592653589793
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
} // validated`,Qb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jb=`vec3 transformedNormal = objectNormal;
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
#endif`,eE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aE="gl_FragColor = linearToOutputTexel( gl_FragColor );",sE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rE=`#ifdef USE_ENVMAP
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
#endif`,oE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lE=`#ifdef USE_ENVMAP
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
#endif`,cE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uE=`#ifdef USE_ENVMAP
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
#endif`,fE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mE=`#ifdef USE_GRADIENTMAP
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
}`,gE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_E=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vE=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,yE=`#ifdef USE_ENVMAP
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
#endif`,SE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ME=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,EE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TE=`PhysicalMaterial material;
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
#endif`,AE=`uniform sampler2D dfgLUT;
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
}`,wE=`
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
#endif`,RE=`#if defined( RE_IndirectDiffuse )
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
#endif`,CE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DE=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,NE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,IE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,FE=`#if defined( USE_POINTS_UV )
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
#endif`,BE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,VE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WE=`#ifdef USE_MORPHTARGETS
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
#endif`,XE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qE=`#ifndef FLAT_SHADED
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
#endif`,ZE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KE=`#ifdef USE_NORMALMAP
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
#endif`,QE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,a1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,l1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,u1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,h1=`float getShadowMask() {
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
}`,p1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m1=`#ifdef USE_SKINNING
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
#endif`,g1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_1=`#ifdef USE_SKINNING
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
#endif`,x1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,S1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,M1=`#ifdef USE_TRANSMISSION
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
#endif`,b1=`#ifdef USE_TRANSMISSION
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
#endif`,E1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const R1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C1=`uniform sampler2D t2D;
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
}`,D1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,U1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O1=`#include <common>
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
}`,I1=`#if DEPTH_PACKING == 3200
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
}`,z1=`#define DISTANCE
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
}`,P1=`#define DISTANCE
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
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G1=`uniform float scale;
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
}`,H1=`uniform vec3 diffuse;
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
}`,V1=`#include <common>
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
}`,k1=`uniform vec3 diffuse;
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
}`,W1=`#define LAMBERT
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
}`,X1=`#define LAMBERT
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
}`,Y1=`#define MATCAP
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
}`,j1=`#define MATCAP
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
}`,q1=`#define NORMAL
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
}`,$1=`#define NORMAL
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
}`,Z1=`#define PHONG
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
}`,K1=`#define PHONG
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
}`,Q1=`#define STANDARD
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
}`,J1=`#define STANDARD
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
}`,eT=`#define TOON
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
}`,tT=`#define TOON
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
}`,nT=`uniform float size;
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
}`,iT=`uniform vec3 diffuse;
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
}`,aT=`#include <common>
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
}`,sT=`uniform vec3 color;
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
}`,rT=`uniform float rotation;
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
}`,oT=`uniform vec3 diffuse;
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
}`,wt={alphahash_fragment:Rb,alphahash_pars_fragment:Cb,alphamap_fragment:Db,alphamap_pars_fragment:Nb,alphatest_fragment:Ub,alphatest_pars_fragment:Lb,aomap_fragment:Ob,aomap_pars_fragment:Ib,batching_pars_vertex:zb,batching_vertex:Pb,begin_vertex:Fb,beginnormal_vertex:Bb,bsdfs:Gb,iridescence_fragment:Hb,bumpmap_pars_fragment:Vb,clipping_planes_fragment:kb,clipping_planes_pars_fragment:Wb,clipping_planes_pars_vertex:Xb,clipping_planes_vertex:Yb,color_fragment:jb,color_pars_fragment:qb,color_pars_vertex:$b,color_vertex:Zb,common:Kb,cube_uv_reflection_fragment:Qb,defaultnormal_vertex:Jb,displacementmap_pars_vertex:eE,displacementmap_vertex:tE,emissivemap_fragment:nE,emissivemap_pars_fragment:iE,colorspace_fragment:aE,colorspace_pars_fragment:sE,envmap_fragment:rE,envmap_common_pars_fragment:oE,envmap_pars_fragment:lE,envmap_pars_vertex:cE,envmap_physical_pars_fragment:yE,envmap_vertex:uE,fog_vertex:fE,fog_pars_vertex:dE,fog_fragment:hE,fog_pars_fragment:pE,gradientmap_pars_fragment:mE,lightmap_pars_fragment:gE,lights_lambert_fragment:_E,lights_lambert_pars_fragment:xE,lights_pars_begin:vE,lights_toon_fragment:SE,lights_toon_pars_fragment:ME,lights_phong_fragment:bE,lights_phong_pars_fragment:EE,lights_physical_fragment:TE,lights_physical_pars_fragment:AE,lights_fragment_begin:wE,lights_fragment_maps:RE,lights_fragment_end:CE,lightprobes_pars_fragment:DE,logdepthbuf_fragment:NE,logdepthbuf_pars_fragment:UE,logdepthbuf_pars_vertex:LE,logdepthbuf_vertex:OE,map_fragment:IE,map_pars_fragment:zE,map_particle_fragment:PE,map_particle_pars_fragment:FE,metalnessmap_fragment:BE,metalnessmap_pars_fragment:GE,morphinstance_vertex:HE,morphcolor_vertex:VE,morphnormal_vertex:kE,morphtarget_pars_vertex:WE,morphtarget_vertex:XE,normal_fragment_begin:YE,normal_fragment_maps:jE,normal_pars_fragment:qE,normal_pars_vertex:$E,normal_vertex:ZE,normalmap_pars_fragment:KE,clearcoat_normal_fragment_begin:QE,clearcoat_normal_fragment_maps:JE,clearcoat_pars_fragment:e1,iridescence_pars_fragment:t1,opaque_fragment:n1,packing:i1,premultiplied_alpha_fragment:a1,project_vertex:s1,dithering_fragment:r1,dithering_pars_fragment:o1,roughnessmap_fragment:l1,roughnessmap_pars_fragment:c1,shadowmap_pars_fragment:u1,shadowmap_pars_vertex:f1,shadowmap_vertex:d1,shadowmask_pars_fragment:h1,skinbase_vertex:p1,skinning_pars_vertex:m1,skinning_vertex:g1,skinnormal_vertex:_1,specularmap_fragment:x1,specularmap_pars_fragment:v1,tonemapping_fragment:y1,tonemapping_pars_fragment:S1,transmission_fragment:M1,transmission_pars_fragment:b1,uv_pars_fragment:E1,uv_pars_vertex:T1,uv_vertex:A1,worldpos_vertex:w1,background_vert:R1,background_frag:C1,backgroundCube_vert:D1,backgroundCube_frag:N1,cube_vert:U1,cube_frag:L1,depth_vert:O1,depth_frag:I1,distance_vert:z1,distance_frag:P1,equirect_vert:F1,equirect_frag:B1,linedashed_vert:G1,linedashed_frag:H1,meshbasic_vert:V1,meshbasic_frag:k1,meshlambert_vert:W1,meshlambert_frag:X1,meshmatcap_vert:Y1,meshmatcap_frag:j1,meshnormal_vert:q1,meshnormal_frag:$1,meshphong_vert:Z1,meshphong_frag:K1,meshphysical_vert:Q1,meshphysical_frag:J1,meshtoon_vert:eT,meshtoon_frag:tT,points_vert:nT,points_frag:iT,shadow_vert:aT,shadow_frag:sT,sprite_vert:rT,sprite_frag:oT},et={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new St}},envmap:{envMap:{value:null},envMapRotation:{value:new St},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new St}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new St}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new St},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new St},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new St},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new St}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new St}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new St}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}}},na={basic:{uniforms:Kn([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:Kn([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Nt(0)},envMapIntensity:{value:1}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:Kn([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:Kn([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:Kn([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new Nt(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:Kn([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:Kn([et.points,et.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:Kn([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:Kn([et.common,et.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:Kn([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:Kn([et.sprite,et.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new St}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distance:{uniforms:Kn([et.common,et.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distance_vert,fragmentShader:wt.distance_frag},shadow:{uniforms:Kn([et.lights,et.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};na.physical={uniforms:Kn([na.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new St},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new St},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new St},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new St},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new St},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new St},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new St},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new St},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new St},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new St},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new St},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new St}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const su={r:0,b:0,g:0},lT=new fn,xv=new St;xv.set(-1,0,0,0,1,0,0,0,1);function cT(r,e,n,a,o,c){const u=new Nt(0);let h=o===!0?0:1,m,p,_=null,x=0,g=null;function M(D){let F=D.isScene===!0?D.background:null;if(F&&F.isTexture){const I=D.backgroundBlurriness>0;F=e.get(F,I)}return F}function b(D){let F=!1;const I=M(D);I===null?S(u,h):I&&I.isColor&&(S(I,1),F=!0);const X=r.xr.getEnvironmentBlendMode();X==="additive"?n.buffers.color.setClear(0,0,0,1,c):X==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(r.autoClear||F)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(D,F){const I=M(F);I&&(I.isCubeTexture||I.mapping===Eu)?(p===void 0&&(p=new nn(new cn(1,1,1),new la({name:"BackgroundCubeMaterial",uniforms:so(na.backgroundCube.uniforms),vertexShader:na.backgroundCube.vertexShader,fragmentShader:na.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(X,B,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),p.material.uniforms.envMap.value=I,p.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(lT.makeRotationFromEuler(F.backgroundRotation)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(xv),p.material.toneMapped=Pt.getTransfer(I.colorSpace)!==$t,(_!==I||x!==I.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=I,x=I.version,g=r.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null)):I&&I.isTexture&&(m===void 0&&(m=new nn(new Au(2,2),new la({name:"BackgroundMaterial",uniforms:so(na.background.uniforms),vertexShader:na.background.vertexShader,fragmentShader:na.background.fragmentShader,side:Ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=I,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.toneMapped=Pt.getTransfer(I.colorSpace)!==$t,I.matrixAutoUpdate===!0&&I.updateMatrix(),m.material.uniforms.uvTransform.value.copy(I.matrix),(_!==I||x!==I.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=I,x=I.version,g=r.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function S(D,F){D.getRGB(su,hv(r)),n.buffers.color.setClear(su.r,su.g,su.b,F,c)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(D,F=1){u.set(D),h=F,S(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,S(u,h)},render:b,addToRenderList:C,dispose:y}}function uT(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=g(null);let c=o,u=!1;function h(H,j,fe,me,Y){let N=!1;const G=x(H,me,fe,j);c!==G&&(c=G,p(c.object)),N=M(H,me,fe,Y),N&&b(H,me,fe,Y),Y!==null&&e.update(Y,r.ELEMENT_ARRAY_BUFFER),(N||u)&&(u=!1,I(H,j,fe,me),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function m(){return r.createVertexArray()}function p(H){return r.bindVertexArray(H)}function _(H){return r.deleteVertexArray(H)}function x(H,j,fe,me){const Y=me.wireframe===!0;let N=a[j.id];N===void 0&&(N={},a[j.id]=N);const G=H.isInstancedMesh===!0?H.id:0;let oe=N[G];oe===void 0&&(oe={},N[G]=oe);let ve=oe[fe.id];ve===void 0&&(ve={},oe[fe.id]=ve);let Ae=ve[Y];return Ae===void 0&&(Ae=g(m()),ve[Y]=Ae),Ae}function g(H){const j=[],fe=[],me=[];for(let Y=0;Y<n;Y++)j[Y]=0,fe[Y]=0,me[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:fe,attributeDivisors:me,object:H,attributes:{},index:null}}function M(H,j,fe,me){const Y=c.attributes,N=j.attributes;let G=0;const oe=fe.getAttributes();for(const ve in oe)if(oe[ve].location>=0){const P=Y[ve];let J=N[ve];if(J===void 0&&(ve==="instanceMatrix"&&H.instanceMatrix&&(J=H.instanceMatrix),ve==="instanceColor"&&H.instanceColor&&(J=H.instanceColor)),P===void 0||P.attribute!==J||J&&P.data!==J.data)return!0;G++}return c.attributesNum!==G||c.index!==me}function b(H,j,fe,me){const Y={},N=j.attributes;let G=0;const oe=fe.getAttributes();for(const ve in oe)if(oe[ve].location>=0){let P=N[ve];P===void 0&&(ve==="instanceMatrix"&&H.instanceMatrix&&(P=H.instanceMatrix),ve==="instanceColor"&&H.instanceColor&&(P=H.instanceColor));const J={};J.attribute=P,P&&P.data&&(J.data=P.data),Y[ve]=J,G++}c.attributes=Y,c.attributesNum=G,c.index=me}function C(){const H=c.newAttributes;for(let j=0,fe=H.length;j<fe;j++)H[j]=0}function S(H){y(H,0)}function y(H,j){const fe=c.newAttributes,me=c.enabledAttributes,Y=c.attributeDivisors;fe[H]=1,me[H]===0&&(r.enableVertexAttribArray(H),me[H]=1),Y[H]!==j&&(r.vertexAttribDivisor(H,j),Y[H]=j)}function D(){const H=c.newAttributes,j=c.enabledAttributes;for(let fe=0,me=j.length;fe<me;fe++)j[fe]!==H[fe]&&(r.disableVertexAttribArray(fe),j[fe]=0)}function F(H,j,fe,me,Y,N,G){G===!0?r.vertexAttribIPointer(H,j,fe,Y,N):r.vertexAttribPointer(H,j,fe,me,Y,N)}function I(H,j,fe,me){C();const Y=me.attributes,N=fe.getAttributes(),G=j.defaultAttributeValues;for(const oe in N){const ve=N[oe];if(ve.location>=0){let Ae=Y[oe];if(Ae===void 0&&(oe==="instanceMatrix"&&H.instanceMatrix&&(Ae=H.instanceMatrix),oe==="instanceColor"&&H.instanceColor&&(Ae=H.instanceColor)),Ae!==void 0){const P=Ae.normalized,J=Ae.itemSize,W=e.get(Ae);if(W===void 0)continue;const Re=W.buffer,Te=W.type,ie=W.bytesPerElement,Ue=Te===r.INT||Te===r.UNSIGNED_INT||Ae.gpuType===bp;if(Ae.isInterleavedBufferAttribute){const Ce=Ae.data,tt=Ce.stride,ft=Ae.offset;if(Ce.isInstancedInterleavedBuffer){for(let dt=0;dt<ve.locationSize;dt++)y(ve.location+dt,Ce.meshPerAttribute);H.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let dt=0;dt<ve.locationSize;dt++)S(ve.location+dt);r.bindBuffer(r.ARRAY_BUFFER,Re);for(let dt=0;dt<ve.locationSize;dt++)F(ve.location+dt,J/ve.locationSize,Te,P,tt*ie,(ft+J/ve.locationSize*dt)*ie,Ue)}else{if(Ae.isInstancedBufferAttribute){for(let Ce=0;Ce<ve.locationSize;Ce++)y(ve.location+Ce,Ae.meshPerAttribute);H.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Ce=0;Ce<ve.locationSize;Ce++)S(ve.location+Ce);r.bindBuffer(r.ARRAY_BUFFER,Re);for(let Ce=0;Ce<ve.locationSize;Ce++)F(ve.location+Ce,J/ve.locationSize,Te,P,J*ie,J/ve.locationSize*Ce*ie,Ue)}}else if(G!==void 0){const P=G[oe];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(ve.location,P);break;case 3:r.vertexAttrib3fv(ve.location,P);break;case 4:r.vertexAttrib4fv(ve.location,P);break;default:r.vertexAttrib1fv(ve.location,P)}}}}D()}function X(){L();for(const H in a){const j=a[H];for(const fe in j){const me=j[fe];for(const Y in me){const N=me[Y];for(const G in N)_(N[G].object),delete N[G];delete me[Y]}}delete a[H]}}function B(H){if(a[H.id]===void 0)return;const j=a[H.id];for(const fe in j){const me=j[fe];for(const Y in me){const N=me[Y];for(const G in N)_(N[G].object),delete N[G];delete me[Y]}}delete a[H.id]}function O(H){for(const j in a){const fe=a[j];for(const me in fe){const Y=fe[me];if(Y[H.id]===void 0)continue;const N=Y[H.id];for(const G in N)_(N[G].object),delete N[G];delete Y[H.id]}}}function T(H){for(const j in a){const fe=a[j],me=H.isInstancedMesh===!0?H.id:0,Y=fe[me];if(Y!==void 0){for(const N in Y){const G=Y[N];for(const oe in G)_(G[oe].object),delete G[oe];delete Y[N]}delete fe[me],Object.keys(fe).length===0&&delete a[j]}}}function L(){q(),u=!0,c!==o&&(c=o,p(c.object))}function q(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:L,resetDefaultState:q,dispose:X,releaseStatesOfGeometry:B,releaseStatesOfObject:T,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:S,disableUnusedAttributes:D}}function fT(r,e,n){let a;function o(m){a=m}function c(m,p){r.drawArrays(a,m,p),n.update(p,a,1)}function u(m,p,_){_!==0&&(r.drawArraysInstanced(a,m,p,_),n.update(p,a,_))}function h(m,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,p,0,_);let g=0;for(let M=0;M<_;M++)g+=p[M];n.update(g,a,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function dT(r,e,n,a){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==Xi&&a.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const T=O===Pa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==vi&&a.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==ia&&!T)}function m(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const _=m(p);_!==p&&(mt("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&mt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),F=r.getParameter(r.MAX_VARYING_VECTORS),I=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),X=r.getParameter(r.MAX_SAMPLES),B=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:D,maxVaryings:F,maxFragmentUniforms:I,maxSamples:X,samples:B}}function hT(r){const e=this;let n=null,a=0,o=!1,c=!1;const u=new js,h=new St,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const M=x.length!==0||g||a!==0||o;return o=g,a=x.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){n=_(x,g,0)},this.setState=function(x,g,M){const b=x.clippingPlanes,C=x.clipIntersection,S=x.clipShadows,y=r.get(x);if(!o||b===null||b.length===0||c&&!S)c?_(null):p();else{const D=c?0:a,F=D*4;let I=y.clippingState||null;m.value=I,I=_(b,g,F,M);for(let X=0;X!==F;++X)I[X]=n[X];y.clippingState=I,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function _(x,g,M,b){const C=x!==null?x.length:0;let S=null;if(C!==0){if(S=m.value,b!==!0||S===null){const y=M+C*4,D=g.matrixWorldInverse;h.getNormalMatrix(D),(S===null||S.length<y)&&(S=new Float32Array(y));for(let F=0,I=M;F!==C;++F,I+=4)u.copy(x[F]).applyMatrix4(D,h),u.normal.toArray(S,I),S[I+3]=u.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}const ys=4,_x=[.125,.215,.35,.446,.526,.582],$s=20,pT=256,rl=new gv,xx=new Nt;let ph=null,mh=0,gh=0,_h=!1;const mT=new Q;class vx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,o=100,c={}){const{size:u=256,position:h=mT}=c;ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,o,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ph,mh,gh),this._renderer.xr.enabled=_h,e.scissorTest=!1,Zr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Js||e.mapping===io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:Pa,format:Xi,colorSpace:gu,depthBuffer:!1},o=yx(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yx(e,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=gT(c)),this._blurMaterial=xT(c,e,n),this._ggxMaterial=_T(c,e,n)}return o}_compileMaterial(e){const n=new nn(new ri,e);this._renderer.compile(n,rl)}_sceneToCubeUV(e,n,a,o,c){const m=new xi(90,1,n,a),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,M=x.toneMapping;x.getClearColor(xx),x.toneMapping=sa,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(o),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new nn(new cn,new yl({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let y=!1;const D=e.background;D?D.isColor&&(S.color.copy(D),e.background=null,y=!0):(S.color.copy(xx),y=!0);for(let F=0;F<6;F++){const I=F%3;I===0?(m.up.set(0,p[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[F],c.y,c.z)):I===1?(m.up.set(0,0,p[F]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[F],c.z)):(m.up.set(0,p[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[F]));const X=this._cubeSize;Zr(o,I*X,F>2?X:0,X,X),x.setRenderTarget(o),y&&x.render(C,m),x.render(e,m)}x.toneMapping=M,x.autoClear=g,e.background=D}_textureToCubeUV(e,n){const a=this._renderer,o=e.mapping===Js||e.mapping===io;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sx());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Zr(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(u,rl)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=a}_applyGGXFilter(e,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[a];h.material=u;const m=u.uniforms,p=a/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),x=Math.sqrt(p*p-_*_),g=0+p*1.25,M=x*g,{_lodMax:b}=this,C=this._sizeLods[a],S=3*C*(a>b-ys?a-b+ys:0),y=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=b-n,Zr(c,S,y,3*C,2*C),o.setRenderTarget(c),o.render(h,rl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-a,Zr(e,S,y,3*C,2*C),o.setRenderTarget(e),o.render(h,rl)}_blur(e,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,o,"latitudinal",c),this._halfBlur(u,e,a,a,o,"longitudinal",c)}_halfBlur(e,n,a,o,c,u,h){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&zt("blur direction must be either latitudinal or longitudinal!");const _=3,x=this._lodMeshes[o];x.material=p;const g=p.uniforms,M=this._sizeLods[a]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*$s-1),C=c/b,S=isFinite(c)?1+Math.floor(_*C):$s;S>$s&&mt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${$s}`);const y=[];let D=0;for(let O=0;O<$s;++O){const T=O/C,L=Math.exp(-T*T/2);y.push(L),O===0?D+=L:O<S&&(D+=2*L)}for(let O=0;O<y.length;O++)y[O]=y[O]/D;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=y,g.latitudinal.value=u==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:F}=this;g.dTheta.value=b,g.mipInt.value=F-a;const I=this._sizeLods[o],X=3*I*(o>F-ys?o-F+ys:0),B=4*(this._cubeSize-I);Zr(n,X,B,3*I,2*I),m.setRenderTarget(n),m.render(x,rl)}}function gT(r){const e=[],n=[],a=[];let o=r;const c=r-ys+1+_x.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);e.push(h);let m=1/h;u>r-ys?m=_x[u-r+ys-1]:u===0&&(m=0),n.push(m);const p=1/(h-2),_=-p,x=1+p,g=[_,_,x,_,x,x,_,_,x,x,_,x],M=6,b=6,C=3,S=2,y=1,D=new Float32Array(C*b*M),F=new Float32Array(S*b*M),I=new Float32Array(y*b*M);for(let B=0;B<M;B++){const O=B%3*2/3-1,T=B>2?0:-1,L=[O,T,0,O+2/3,T,0,O+2/3,T+1,0,O,T,0,O+2/3,T+1,0,O,T+1,0];D.set(L,C*b*B),F.set(g,S*b*B);const q=[B,B,B,B,B,B];I.set(q,y*b*B)}const X=new ri;X.setAttribute("position",new Yi(D,C)),X.setAttribute("uv",new Yi(F,S)),X.setAttribute("faceIndex",new Yi(I,y)),a.push(new nn(X,null)),o>ys&&o--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function yx(r,e,n){const a=new ra(r,e,n);return a.texture.mapping=Eu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Zr(r,e,n,a,o){r.viewport.set(e,n,a,o),r.scissor.set(e,n,a,o)}function _T(r,e,n){return new la({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wu(),fragmentShader:`

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
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function xT(r,e,n){const a=new Float32Array($s),o=new Q(0,1,0);return new la({name:"SphericalGaussianBlur",defines:{n:$s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:wu(),fragmentShader:`

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
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function Sx(){return new la({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wu(),fragmentShader:`

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
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function Mx(){return new la({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wu(),fragmentShader:`

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
	`}class vv extends ra{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new uv(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new cn(5,5,5),c=new la({name:"CubemapFromEquirect",uniforms:so(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:si,blending:Oa});c.uniforms.tEquirect.value=n;const u=new nn(o,c),h=n.minFilter;return n.minFilter===Zs&&(n.minFilter=Xn),new Eb(1,10,this).update(e,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,o);e.setRenderTarget(c)}}function vT(r){let e=new WeakMap,n=new WeakMap,a=null;function o(g,M=!1){return g==null?null:M?u(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===Bd||M===Gd)if(e.has(g)){const b=e.get(g).texture;return h(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const C=new vv(b.height);return C.fromEquirectangularTexture(r,g),e.set(g,C),g.addEventListener("dispose",p),h(C.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const M=g.mapping,b=M===Bd||M===Gd,C=M===Js||M===io;if(b||C){let S=n.get(g);const y=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return a===null&&(a=new vx(r)),S=b?a.fromEquirectangular(g,S):a.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,n.set(g,S),S.texture;if(S!==void 0)return S.texture;{const D=g.image;return b&&D&&D.height>0||C&&D&&m(D)?(a===null&&(a=new vx(r)),S=b?a.fromEquirectangular(g):a.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,n.set(g,S),g.addEventListener("dispose",_),S.texture):null}}}return g}function h(g,M){return M===Bd?g.mapping=Js:M===Gd&&(g.mapping=io),g}function m(g){let M=0;const b=6;for(let C=0;C<b;C++)g[C]!==void 0&&M++;return M===b}function p(g){const M=g.target;M.removeEventListener("dispose",p);const b=e.get(M);b!==void 0&&(e.delete(M),b.dispose())}function _(g){const M=g.target;M.removeEventListener("dispose",_);const b=n.get(M);b!==void 0&&(n.delete(M),b.dispose())}function x(){e=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:o,dispose:x}}function yT(r){const e={};function n(a){if(e[a]!==void 0)return e[a];const o=r.getExtension(a);return e[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&hp("WebGLRenderer: "+a+" extension not supported."),o}}}function ST(r,e,n,a){const o={},c=new WeakMap;function u(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const b in g.attributes)e.remove(g.attributes[b]);g.removeEventListener("dispose",u),delete o[g.id];const M=c.get(g);M&&(e.remove(M),c.delete(g)),a.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function h(x,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,n.memory.geometries++),g}function m(x){const g=x.attributes;for(const M in g)e.update(g[M],r.ARRAY_BUFFER)}function p(x){const g=[],M=x.index,b=x.attributes.position;let C=0;if(b===void 0)return;if(M!==null){const D=M.array;C=M.version;for(let F=0,I=D.length;F<I;F+=3){const X=D[F+0],B=D[F+1],O=D[F+2];g.push(X,B,B,O,O,X)}}else{const D=b.array;C=b.version;for(let F=0,I=D.length/3-1;F<I;F+=3){const X=F+0,B=F+1,O=F+2;g.push(X,B,B,O,O,X)}}const S=new(b.count>=65535?lv:ov)(g,1);S.version=C;const y=c.get(x);y&&e.remove(y),c.set(x,S)}function _(x){const g=c.get(x);if(g){const M=x.index;M!==null&&g.version<M.version&&p(x)}else p(x);return c.get(x)}return{get:h,update:m,getWireframeAttribute:_}}function MT(r,e,n){let a;function o(x){a=x}let c,u;function h(x){c=x.type,u=x.bytesPerElement}function m(x,g){r.drawElements(a,g,c,x*u),n.update(g,a,1)}function p(x,g,M){M!==0&&(r.drawElementsInstanced(a,g,c,x*u,M),n.update(g,a,M))}function _(x,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,g,0,c,x,0,M);let C=0;for(let S=0;S<M;S++)C+=g[S];n.update(C,a,1)}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function bT(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=h*(c/3);break;case r.LINES:n.lines+=h*(c/2);break;case r.LINE_STRIP:n.lines+=h*(c-1);break;case r.LINE_LOOP:n.lines+=h*c;break;case r.POINTS:n.points+=h*c;break;default:zt("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:a}}function ET(r,e,n){const a=new WeakMap,o=new xn;function c(u,h,m){const p=u.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=_!==void 0?_.length:0;let g=a.get(h);if(g===void 0||g.count!==x){let q=function(){T.dispose(),a.delete(h),h.removeEventListener("dispose",q)};var M=q;g!==void 0&&g.texture.dispose();const b=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],F=h.morphAttributes.color||[];let I=0;b===!0&&(I=1),C===!0&&(I=2),S===!0&&(I=3);let X=h.attributes.position.count*I,B=1;X>e.maxTextureSize&&(B=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const O=new Float32Array(X*B*4*x),T=new sv(O,X,B,x);T.type=ia,T.needsUpdate=!0;const L=I*4;for(let H=0;H<x;H++){const j=y[H],fe=D[H],me=F[H],Y=X*B*4*H;for(let N=0;N<j.count;N++){const G=N*L;b===!0&&(o.fromBufferAttribute(j,N),O[Y+G+0]=o.x,O[Y+G+1]=o.y,O[Y+G+2]=o.z,O[Y+G+3]=0),C===!0&&(o.fromBufferAttribute(fe,N),O[Y+G+4]=o.x,O[Y+G+5]=o.y,O[Y+G+6]=o.z,O[Y+G+7]=0),S===!0&&(o.fromBufferAttribute(me,N),O[Y+G+8]=o.x,O[Y+G+9]=o.y,O[Y+G+10]=o.z,O[Y+G+11]=me.itemSize===4?o.w:1)}}g={count:x,texture:T,size:new Et(X,B)},a.set(h,g),h.addEventListener("dispose",q)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let b=0;for(let S=0;S<p.length;S++)b+=p[S];const C=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function TT(r,e,n,a,o){let c=new WeakMap;function u(p){const _=o.render.frame,x=p.geometry,g=e.get(p,x);if(c.get(g)!==_&&(e.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(n.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const M=p.skeleton;c.get(M)!==_&&(M.update(),c.set(M,_))}return g}function h(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),a.releaseStatesOfObject(_),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:u,dispose:h}}const AT={[kx]:"LINEAR_TONE_MAPPING",[Wx]:"REINHARD_TONE_MAPPING",[Xx]:"CINEON_TONE_MAPPING",[Yx]:"ACES_FILMIC_TONE_MAPPING",[qx]:"AGX_TONE_MAPPING",[$x]:"NEUTRAL_TONE_MAPPING",[jx]:"CUSTOM_TONE_MAPPING"};function wT(r,e,n,a,o){const c=new ra(e,n,{type:r,depthBuffer:a,stencilBuffer:o,depthTexture:a?new ao(e,n):void 0}),u=new ra(e,n,{type:Pa,depthBuffer:!1,stencilBuffer:!1}),h=new ri;h.setAttribute("position",new qn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new qn([0,2,0,0,2,0],2));const m=new gb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new nn(h,m),_=new gv(-1,1,1,-1,0,1);let x=null,g=null,M=!1,b,C=null,S=[],y=!1;this.setSize=function(D,F){c.setSize(D,F),u.setSize(D,F);for(let I=0;I<S.length;I++){const X=S[I];X.setSize&&X.setSize(D,F)}},this.setEffects=function(D){S=D,y=S.length>0&&S[0].isRenderPass===!0;const F=c.width,I=c.height;for(let X=0;X<S.length;X++){const B=S[X];B.setSize&&B.setSize(F,I)}},this.begin=function(D,F){if(M||D.toneMapping===sa&&S.length===0)return!1;if(C=F,F!==null){const I=F.width,X=F.height;(c.width!==I||c.height!==X)&&this.setSize(I,X)}return y===!1&&D.setRenderTarget(c),b=D.toneMapping,D.toneMapping=sa,!0},this.hasRenderPass=function(){return y},this.end=function(D,F){D.toneMapping=b,M=!0;let I=c,X=u;for(let B=0;B<S.length;B++){const O=S[B];if(O.enabled!==!1&&(O.render(D,X,I,F),O.needsSwap!==!1)){const T=I;I=X,X=T}}if(x!==D.outputColorSpace||g!==D.toneMapping){x=D.outputColorSpace,g=D.toneMapping,m.defines={},Pt.getTransfer(x)===$t&&(m.defines.SRGB_TRANSFER="");const B=AT[g];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=I.texture,D.setRenderTarget(C),D.render(p,_),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),u.dispose(),h.dispose(),m.dispose()}}const yv=new Yn,gp=new ao(1,1),Sv=new sv,Mv=new kM,bv=new uv,bx=[],Ex=[],Tx=new Float32Array(16),Ax=new Float32Array(9),wx=new Float32Array(4);function oo(r,e,n){const a=r[0];if(a<=0||a>0)return r;const o=e*n;let c=bx[o];if(c===void 0&&(c=new Float32Array(o),bx[o]=c),e!==0){a.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=n,r[u].toArray(c,h)}return c}function Dn(r,e){if(r.length!==e.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==e[n])return!1;return!0}function Nn(r,e){for(let n=0,a=e.length;n<a;n++)r[n]=e[n]}function Ru(r,e){let n=Ex[e];n===void 0&&(n=new Int32Array(e),Ex[e]=n);for(let a=0;a!==e;++a)n[a]=r.allocateTextureUnit();return n}function RT(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function CT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dn(n,e))return;r.uniform2fv(this.addr,e),Nn(n,e)}}function DT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dn(n,e))return;r.uniform3fv(this.addr,e),Nn(n,e)}}function NT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dn(n,e))return;r.uniform4fv(this.addr,e),Nn(n,e)}}function UT(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Dn(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),Nn(n,e)}else{if(Dn(n,a))return;wx.set(a),r.uniformMatrix2fv(this.addr,!1,wx),Nn(n,a)}}function LT(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Dn(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),Nn(n,e)}else{if(Dn(n,a))return;Ax.set(a),r.uniformMatrix3fv(this.addr,!1,Ax),Nn(n,a)}}function OT(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Dn(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),Nn(n,e)}else{if(Dn(n,a))return;Tx.set(a),r.uniformMatrix4fv(this.addr,!1,Tx),Nn(n,a)}}function IT(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function zT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dn(n,e))return;r.uniform2iv(this.addr,e),Nn(n,e)}}function PT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dn(n,e))return;r.uniform3iv(this.addr,e),Nn(n,e)}}function FT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dn(n,e))return;r.uniform4iv(this.addr,e),Nn(n,e)}}function BT(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function GT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dn(n,e))return;r.uniform2uiv(this.addr,e),Nn(n,e)}}function HT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dn(n,e))return;r.uniform3uiv(this.addr,e),Nn(n,e)}}function VT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dn(n,e))return;r.uniform4uiv(this.addr,e),Nn(n,e)}}function kT(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(gp.compareFunction=n.isReversedDepthBuffer()?Dp:Cp,c=gp):c=yv,n.setTexture2D(e||c,o)}function WT(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(e||Mv,o)}function XT(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(e||bv,o)}function YT(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(e||Sv,o)}function jT(r){switch(r){case 5126:return RT;case 35664:return CT;case 35665:return DT;case 35666:return NT;case 35674:return UT;case 35675:return LT;case 35676:return OT;case 5124:case 35670:return IT;case 35667:case 35671:return zT;case 35668:case 35672:return PT;case 35669:case 35673:return FT;case 5125:return BT;case 36294:return GT;case 36295:return HT;case 36296:return VT;case 35678:case 36198:case 36298:case 36306:case 35682:return kT;case 35679:case 36299:case 36307:return WT;case 35680:case 36300:case 36308:case 36293:return XT;case 36289:case 36303:case 36311:case 36292:return YT}}function qT(r,e){r.uniform1fv(this.addr,e)}function $T(r,e){const n=oo(e,this.size,2);r.uniform2fv(this.addr,n)}function ZT(r,e){const n=oo(e,this.size,3);r.uniform3fv(this.addr,n)}function KT(r,e){const n=oo(e,this.size,4);r.uniform4fv(this.addr,n)}function QT(r,e){const n=oo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function JT(r,e){const n=oo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function eA(r,e){const n=oo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function tA(r,e){r.uniform1iv(this.addr,e)}function nA(r,e){r.uniform2iv(this.addr,e)}function iA(r,e){r.uniform3iv(this.addr,e)}function aA(r,e){r.uniform4iv(this.addr,e)}function sA(r,e){r.uniform1uiv(this.addr,e)}function rA(r,e){r.uniform2uiv(this.addr,e)}function oA(r,e){r.uniform3uiv(this.addr,e)}function lA(r,e){r.uniform4uiv(this.addr,e)}function cA(r,e,n){const a=this.cache,o=e.length,c=Ru(n,o);Dn(a,c)||(r.uniform1iv(this.addr,c),Nn(a,c));let u;this.type===r.SAMPLER_2D_SHADOW?u=gp:u=yv;for(let h=0;h!==o;++h)n.setTexture2D(e[h]||u,c[h])}function uA(r,e,n){const a=this.cache,o=e.length,c=Ru(n,o);Dn(a,c)||(r.uniform1iv(this.addr,c),Nn(a,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||Mv,c[u])}function fA(r,e,n){const a=this.cache,o=e.length,c=Ru(n,o);Dn(a,c)||(r.uniform1iv(this.addr,c),Nn(a,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||bv,c[u])}function dA(r,e,n){const a=this.cache,o=e.length,c=Ru(n,o);Dn(a,c)||(r.uniform1iv(this.addr,c),Nn(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||Sv,c[u])}function hA(r){switch(r){case 5126:return qT;case 35664:return $T;case 35665:return ZT;case 35666:return KT;case 35674:return QT;case 35675:return JT;case 35676:return eA;case 5124:case 35670:return tA;case 35667:case 35671:return nA;case 35668:case 35672:return iA;case 35669:case 35673:return aA;case 5125:return sA;case 36294:return rA;case 36295:return oA;case 36296:return lA;case 35678:case 36198:case 36298:case 36306:case 35682:return cA;case 35679:case 36299:case 36307:return uA;case 35680:case 36300:case 36308:case 36293:return fA;case 36289:case 36303:case 36311:case 36292:return dA}}class pA{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=jT(n.type)}}class mA{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=hA(n.type)}}class gA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(e,n[h.id],a)}}}const xh=/(\w+)(\])?(\[|\.)?/g;function Rx(r,e){r.seq.push(e),r.map[e.id]=e}function _A(r,e,n){const a=r.name,o=a.length;for(xh.lastIndex=0;;){const c=xh.exec(a),u=xh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&u+2===o){Rx(n,p===void 0?new pA(h,r,e):new mA(h,r,e));break}else{let x=n.map[h];x===void 0&&(x=new gA(h),Rx(n,x)),n=x}}}class du{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const h=e.getActiveUniform(n,u),m=e.getUniformLocation(n,h.name);_A(h,m,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(e,a,o)}setOptional(e,n,a){const o=n[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,n,a,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],m=a[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,o)}}static seqWithValue(e,n){const a=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&a.push(u)}return a}}function Cx(r,e,n){const a=r.createShader(e);return r.shaderSource(a,n),r.compileShader(a),a}const xA=37297;let vA=0;function yA(r,e){const n=r.split(`
`),a=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const h=u+1;a.push(`${h===e?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const Dx=new St;function SA(r){Pt._getMatrix(Dx,Pt.workingColorSpace,r);const e=`mat3( ${Dx.elements.map(n=>n.toFixed(4))} )`;switch(Pt.getTransfer(r)){case _u:return[e,"LinearTransferOETF"];case $t:return[e,"sRGBTransferOETF"];default:return mt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Nx(r,e,n){const a=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+yA(r.getShaderSource(e),h)}else return c}function MA(r,e){const n=SA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const bA={[kx]:"Linear",[Wx]:"Reinhard",[Xx]:"Cineon",[Yx]:"ACESFilmic",[qx]:"AgX",[$x]:"Neutral",[jx]:"Custom"};function EA(r,e){const n=bA[e];return n===void 0?(mt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ru=new Q;function TA(){Pt.getLuminanceCoefficients(ru);const r=ru.x.toFixed(4),e=ru.y.toFixed(4),n=ru.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ul).join(`
`)}function wA(r){const e=[];for(const n in r){const a=r[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function RA(r,e){const n={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=r.getActiveAttrib(e,o),u=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:r.getAttribLocation(e,u),locationSize:h}}return n}function ul(r){return r!==""}function Ux(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lx(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CA=/^[ \t]*#include +<([\w\d./]+)>/gm;function _p(r){return r.replace(CA,NA)}const DA=new Map;function NA(r,e){let n=wt[e];if(n===void 0){const a=DA.get(e);if(a!==void 0)n=wt[a],mt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return _p(n)}const UA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ox(r){return r.replace(UA,LA)}function LA(r,e,n,a){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Ix(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const OA={[ou]:"SHADOWMAP_TYPE_PCF",[cl]:"SHADOWMAP_TYPE_VSM"};function IA(r){return OA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const zA={[Js]:"ENVMAP_TYPE_CUBE",[io]:"ENVMAP_TYPE_CUBE",[Eu]:"ENVMAP_TYPE_CUBE_UV"};function PA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":zA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const FA={[io]:"ENVMAP_MODE_REFRACTION"};function BA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":FA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const GA={[Mp]:"ENVMAP_BLENDING_MULTIPLY",[rM]:"ENVMAP_BLENDING_MIX",[oM]:"ENVMAP_BLENDING_ADD"};function HA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":GA[r.combine]||"ENVMAP_BLENDING_NONE"}function VA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function kA(r,e,n,a){const o=r.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const m=IA(n),p=PA(n),_=BA(n),x=HA(n),g=VA(n),M=AA(n),b=wA(c),C=o.createProgram();let S,y,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(ul).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(ul).join(`
`),y.length>0&&(y+=`
`)):(S=[Ix(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ul).join(`
`),y=[Ix(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+_:"",n.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==sa?"#define TONE_MAPPING":"",n.toneMapping!==sa?wt.tonemapping_pars_fragment:"",n.toneMapping!==sa?EA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,MA("linearToOutputTexel",n.outputColorSpace),TA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ul).join(`
`)),u=_p(u),u=Ux(u,n),u=Lx(u,n),h=_p(h),h=Ux(h,n),h=Lx(h,n),u=Ox(u),h=Ox(h),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",n.glslVersion===P_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===P_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const F=D+S+u,I=D+y+h,X=Cx(o,o.VERTEX_SHADER,F),B=Cx(o,o.FRAGMENT_SHADER,I);o.attachShader(C,X),o.attachShader(C,B),n.index0AttributeName!==void 0?o.bindAttribLocation(C,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function O(H){if(r.debug.checkShaderErrors){const j=o.getProgramInfoLog(C)||"",fe=o.getShaderInfoLog(X)||"",me=o.getShaderInfoLog(B)||"",Y=j.trim(),N=fe.trim(),G=me.trim();let oe=!0,ve=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(oe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,C,X,B);else{const Ae=Nx(o,X,"vertex"),P=Nx(o,B,"fragment");zt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Y+`
`+Ae+`
`+P)}else Y!==""?mt("WebGLProgram: Program Info Log:",Y):(N===""||G==="")&&(ve=!1);ve&&(H.diagnostics={runnable:oe,programLog:Y,vertexShader:{log:N,prefix:S},fragmentShader:{log:G,prefix:y}})}o.deleteShader(X),o.deleteShader(B),T=new du(o,C),L=RA(o,C)}let T;this.getUniforms=function(){return T===void 0&&O(this),T};let L;this.getAttributes=function(){return L===void 0&&O(this),L};let q=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=o.getProgramParameter(C,xA)),q},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=vA++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=X,this.fragmentShader=B,this}let WA=0;class XA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new YA(e),n.set(e,a)),a}}class YA{constructor(e){this.id=WA++,this.code=e,this.usedTimes=0}}function jA(r){return r===er||r===hu||r===pu}function qA(r,e,n,a,o,c){const u=new Lp,h=new XA,m=new Set,p=[],_=new Map,x=a.logarithmicDepthBuffer;let g=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,L,q,H,j,fe){const me=H.fog,Y=j.geometry,N=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,G=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,oe=e.get(T.envMap||N,G),ve=oe&&oe.mapping===Eu?oe.image.height:null,Ae=M[T.type];T.precision!==null&&(g=a.getMaxPrecision(T.precision),g!==T.precision&&mt("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const P=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,J=P!==void 0?P.length:0;let W=0;Y.morphAttributes.position!==void 0&&(W=1),Y.morphAttributes.normal!==void 0&&(W=2),Y.morphAttributes.color!==void 0&&(W=3);let Re,Te,ie,Ue;if(Ae){const lt=na[Ae];Re=lt.vertexShader,Te=lt.fragmentShader}else Re=T.vertexShader,Te=T.fragmentShader,h.update(T),ie=h.getVertexShaderID(T),Ue=h.getFragmentShaderID(T);const Ce=r.getRenderTarget(),tt=r.state.buffers.depth.getReversed(),ft=j.isInstancedMesh===!0,dt=j.isBatchedMesh===!0,Xt=!!T.map,_t=!!T.matcap,Rt=!!oe,Bt=!!T.aoMap,xt=!!T.lightMap,dn=!!T.bumpMap,Kt=!!T.normalMap,wn=!!T.displacementMap,Z=!!T.emissiveMap,rn=!!T.metalnessMap,Tt=!!T.roughnessMap,Ft=T.anisotropy>0,Fe=T.clearcoat>0,Qt=T.dispersion>0,U=T.iridescence>0,E=T.sheen>0,te=T.transmission>0,Me=Ft&&!!T.anisotropyMap,Ie=Fe&&!!T.clearcoatMap,ke=Fe&&!!T.clearcoatNormalMap,Xe=Fe&&!!T.clearcoatRoughnessMap,pe=U&&!!T.iridescenceMap,_e=U&&!!T.iridescenceThicknessMap,Ge=E&&!!T.sheenColorMap,je=E&&!!T.sheenRoughnessMap,We=!!T.specularMap,Ve=!!T.specularColorMap,Oe=!!T.specularIntensityMap,qe=te&&!!T.transmissionMap,ot=te&&!!T.thicknessMap,z=!!T.gradientMap,De=!!T.alphaMap,ye=T.alphaTest>0,Qe=!!T.alphaHash,He=!!T.extensions;let Le=sa;T.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(Le=r.toneMapping);const at={shaderID:Ae,shaderType:T.type,shaderName:T.name,vertexShader:Re,fragmentShader:Te,defines:T.defines,customVertexShaderID:ie,customFragmentShaderID:Ue,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:dt,batchingColor:dt&&j._colorsTexture!==null,instancing:ft,instancingColor:ft&&j.instanceColor!==null,instancingMorph:ft&&j.morphTexture!==null,outputColorSpace:Ce===null?r.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:Pt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Xt,matcap:_t,envMap:Rt,envMapMode:Rt&&oe.mapping,envMapCubeUVHeight:ve,aoMap:Bt,lightMap:xt,bumpMap:dn,normalMap:Kt,displacementMap:wn,emissiveMap:Z,normalMapObjectSpace:Kt&&T.normalMapType===uM,normalMapTangentSpace:Kt&&T.normalMapType===mu,packedNormalMap:Kt&&T.normalMapType===mu&&jA(T.normalMap.format),metalnessMap:rn,roughnessMap:Tt,anisotropy:Ft,anisotropyMap:Me,clearcoat:Fe,clearcoatMap:Ie,clearcoatNormalMap:ke,clearcoatRoughnessMap:Xe,dispersion:Qt,iridescence:U,iridescenceMap:pe,iridescenceThicknessMap:_e,sheen:E,sheenColorMap:Ge,sheenRoughnessMap:je,specularMap:We,specularColorMap:Ve,specularIntensityMap:Oe,transmission:te,transmissionMap:qe,thicknessMap:ot,gradientMap:z,opaque:T.transparent===!1&&T.blending===Qr&&T.alphaToCoverage===!1,alphaMap:De,alphaTest:ye,alphaHash:Qe,combine:T.combine,mapUv:Xt&&b(T.map.channel),aoMapUv:Bt&&b(T.aoMap.channel),lightMapUv:xt&&b(T.lightMap.channel),bumpMapUv:dn&&b(T.bumpMap.channel),normalMapUv:Kt&&b(T.normalMap.channel),displacementMapUv:wn&&b(T.displacementMap.channel),emissiveMapUv:Z&&b(T.emissiveMap.channel),metalnessMapUv:rn&&b(T.metalnessMap.channel),roughnessMapUv:Tt&&b(T.roughnessMap.channel),anisotropyMapUv:Me&&b(T.anisotropyMap.channel),clearcoatMapUv:Ie&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:ke&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:je&&b(T.sheenRoughnessMap.channel),specularMapUv:We&&b(T.specularMap.channel),specularColorMapUv:Ve&&b(T.specularColorMap.channel),specularIntensityMapUv:Oe&&b(T.specularIntensityMap.channel),transmissionMapUv:qe&&b(T.transmissionMap.channel),thicknessMapUv:ot&&b(T.thicknessMap.channel),alphaMapUv:De&&b(T.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Kt||Ft),vertexNormals:!!Y.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!Y.attributes.uv&&(Xt||De),fog:!!me,useFog:T.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Y.attributes.normal===void 0&&Kt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:tt,skinning:j.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:W,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:fe.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&q.length>0,shadowMapType:r.shadowMap.type,toneMapping:Le,decodeVideoTexture:Xt&&T.map.isVideoTexture===!0&&Pt.getTransfer(T.map.colorSpace)===$t,decodeVideoTextureEmissive:Z&&T.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(T.emissiveMap.colorSpace)===$t,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Li,flipSided:T.side===si,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:He&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&T.extensions.multiDraw===!0||dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return at.vertexUv1s=m.has(1),at.vertexUv2s=m.has(2),at.vertexUv3s=m.has(3),m.clear(),at}function S(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const q in T.defines)L.push(q),L.push(T.defines[q]);return T.isRawShaderMaterial===!1&&(y(L,T),D(L,T),L.push(r.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function y(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function D(T,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),L.packedNormalMap&&u.enable(22),L.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),L.numLightProbeGrids>0&&u.enable(22),T.push(u.mask)}function F(T){const L=M[T.type];let q;if(L){const H=na[L];q=hb.clone(H.uniforms)}else q=T.uniforms;return q}function I(T,L){let q=_.get(L);return q!==void 0?++q.usedTimes:(q=new kA(r,L,T,o),p.push(q),_.set(L,q)),q}function X(T){if(--T.usedTimes===0){const L=p.indexOf(T);p[L]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function B(T){h.remove(T)}function O(){h.dispose()}return{getParameters:C,getProgramCacheKey:S,getUniforms:F,acquireProgram:I,releaseProgram:X,releaseShaderCache:B,programs:p,dispose:O}}function $A(){let r=new WeakMap;function e(u){return r.has(u)}function n(u){let h=r.get(u);return h===void 0&&(h={},r.set(u,h)),h}function a(u){r.delete(u)}function o(u,h,m){r.get(u)[h]=m}function c(){r=new WeakMap}return{has:e,get:n,remove:a,update:o,dispose:c}}function ZA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function zx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Px(){const r=[];let e=0;const n=[],a=[],o=[];function c(){e=0,n.length=0,a.length=0,o.length=0}function u(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function h(g,M,b,C,S,y){let D=r[e];return D===void 0?(D={id:g.id,object:g,geometry:M,material:b,materialVariant:u(g),groupOrder:C,renderOrder:g.renderOrder,z:S,group:y},r[e]=D):(D.id=g.id,D.object=g,D.geometry=M,D.material=b,D.materialVariant=u(g),D.groupOrder=C,D.renderOrder=g.renderOrder,D.z=S,D.group=y),e++,D}function m(g,M,b,C,S,y){const D=h(g,M,b,C,S,y);b.transmission>0?a.push(D):b.transparent===!0?o.push(D):n.push(D)}function p(g,M,b,C,S,y){const D=h(g,M,b,C,S,y);b.transmission>0?a.unshift(D):b.transparent===!0?o.unshift(D):n.unshift(D)}function _(g,M){n.length>1&&n.sort(g||ZA),a.length>1&&a.sort(M||zx),o.length>1&&o.sort(M||zx)}function x(){for(let g=e,M=r.length;g<M;g++){const b=r[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:m,unshift:p,finish:x,sort:_}}function KA(){let r=new WeakMap;function e(a,o){const c=r.get(a);let u;return c===void 0?(u=new Px,r.set(a,[u])):o>=c.length?(u=new Px,c.push(u)):u=c[o],u}function n(){r=new WeakMap}return{get:e,dispose:n}}function QA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Q,color:new Nt};break;case"SpotLight":n={position:new Q,direction:new Q,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Q,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Q,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":n={color:new Nt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return r[e.id]=n,n}}}function JA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let ew=0;function tw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function nw(r){const e=new QA,n=JA(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new Q);const o=new Q,c=new fn,u=new fn;function h(p){let _=0,x=0,g=0;for(let L=0;L<9;L++)a.probe[L].set(0,0,0);let M=0,b=0,C=0,S=0,y=0,D=0,F=0,I=0,X=0,B=0,O=0;p.sort(tw);for(let L=0,q=p.length;L<q;L++){const H=p[L],j=H.color,fe=H.intensity,me=H.distance;let Y=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===er?Y=H.shadow.map.texture:Y=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)_+=j.r*fe,x+=j.g*fe,g+=j.b*fe;else if(H.isLightProbe){for(let N=0;N<9;N++)a.probe[N].addScaledVector(H.sh.coefficients[N],fe);O++}else if(H.isDirectionalLight){const N=e.get(H);if(N.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const G=H.shadow,oe=n.get(H);oe.shadowIntensity=G.intensity,oe.shadowBias=G.bias,oe.shadowNormalBias=G.normalBias,oe.shadowRadius=G.radius,oe.shadowMapSize=G.mapSize,a.directionalShadow[M]=oe,a.directionalShadowMap[M]=Y,a.directionalShadowMatrix[M]=H.shadow.matrix,D++}a.directional[M]=N,M++}else if(H.isSpotLight){const N=e.get(H);N.position.setFromMatrixPosition(H.matrixWorld),N.color.copy(j).multiplyScalar(fe),N.distance=me,N.coneCos=Math.cos(H.angle),N.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),N.decay=H.decay,a.spot[C]=N;const G=H.shadow;if(H.map&&(a.spotLightMap[X]=H.map,X++,G.updateMatrices(H),H.castShadow&&B++),a.spotLightMatrix[C]=G.matrix,H.castShadow){const oe=n.get(H);oe.shadowIntensity=G.intensity,oe.shadowBias=G.bias,oe.shadowNormalBias=G.normalBias,oe.shadowRadius=G.radius,oe.shadowMapSize=G.mapSize,a.spotShadow[C]=oe,a.spotShadowMap[C]=Y,I++}C++}else if(H.isRectAreaLight){const N=e.get(H);N.color.copy(j).multiplyScalar(fe),N.halfWidth.set(H.width*.5,0,0),N.halfHeight.set(0,H.height*.5,0),a.rectArea[S]=N,S++}else if(H.isPointLight){const N=e.get(H);if(N.color.copy(H.color).multiplyScalar(H.intensity),N.distance=H.distance,N.decay=H.decay,H.castShadow){const G=H.shadow,oe=n.get(H);oe.shadowIntensity=G.intensity,oe.shadowBias=G.bias,oe.shadowNormalBias=G.normalBias,oe.shadowRadius=G.radius,oe.shadowMapSize=G.mapSize,oe.shadowCameraNear=G.camera.near,oe.shadowCameraFar=G.camera.far,a.pointShadow[b]=oe,a.pointShadowMap[b]=Y,a.pointShadowMatrix[b]=H.shadow.matrix,F++}a.point[b]=N,b++}else if(H.isHemisphereLight){const N=e.get(H);N.skyColor.copy(H.color).multiplyScalar(fe),N.groundColor.copy(H.groundColor).multiplyScalar(fe),a.hemi[y]=N,y++}}S>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=et.LTC_FLOAT_1,a.rectAreaLTC2=et.LTC_FLOAT_2):(a.rectAreaLTC1=et.LTC_HALF_1,a.rectAreaLTC2=et.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=x,a.ambient[2]=g;const T=a.hash;(T.directionalLength!==M||T.pointLength!==b||T.spotLength!==C||T.rectAreaLength!==S||T.hemiLength!==y||T.numDirectionalShadows!==D||T.numPointShadows!==F||T.numSpotShadows!==I||T.numSpotMaps!==X||T.numLightProbes!==O)&&(a.directional.length=M,a.spot.length=C,a.rectArea.length=S,a.point.length=b,a.hemi.length=y,a.directionalShadow.length=D,a.directionalShadowMap.length=D,a.pointShadow.length=F,a.pointShadowMap.length=F,a.spotShadow.length=I,a.spotShadowMap.length=I,a.directionalShadowMatrix.length=D,a.pointShadowMatrix.length=F,a.spotLightMatrix.length=I+X-B,a.spotLightMap.length=X,a.numSpotLightShadowsWithMaps=B,a.numLightProbes=O,T.directionalLength=M,T.pointLength=b,T.spotLength=C,T.rectAreaLength=S,T.hemiLength=y,T.numDirectionalShadows=D,T.numPointShadows=F,T.numSpotShadows=I,T.numSpotMaps=X,T.numLightProbes=O,a.version=ew++)}function m(p,_){let x=0,g=0,M=0,b=0,C=0;const S=_.matrixWorldInverse;for(let y=0,D=p.length;y<D;y++){const F=p[y];if(F.isDirectionalLight){const I=a.directional[x];I.direction.setFromMatrixPosition(F.matrixWorld),o.setFromMatrixPosition(F.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(S),x++}else if(F.isSpotLight){const I=a.spot[M];I.position.setFromMatrixPosition(F.matrixWorld),I.position.applyMatrix4(S),I.direction.setFromMatrixPosition(F.matrixWorld),o.setFromMatrixPosition(F.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(S),M++}else if(F.isRectAreaLight){const I=a.rectArea[b];I.position.setFromMatrixPosition(F.matrixWorld),I.position.applyMatrix4(S),u.identity(),c.copy(F.matrixWorld),c.premultiply(S),u.extractRotation(c),I.halfWidth.set(F.width*.5,0,0),I.halfHeight.set(0,F.height*.5,0),I.halfWidth.applyMatrix4(u),I.halfHeight.applyMatrix4(u),b++}else if(F.isPointLight){const I=a.point[g];I.position.setFromMatrixPosition(F.matrixWorld),I.position.applyMatrix4(S),g++}else if(F.isHemisphereLight){const I=a.hemi[C];I.direction.setFromMatrixPosition(F.matrixWorld),I.direction.transformDirection(S),C++}}}return{setup:h,setupView:m,state:a}}function Fx(r){const e=new nw(r),n=[],a=[],o=[];function c(g){x.camera=g,n.length=0,a.length=0,o.length=0}function u(g){n.push(g)}function h(g){a.push(g)}function m(g){o.push(g)}function p(){e.setup(n)}function _(g){e.setupView(n,g)}const x={lightsArray:n,shadowsArray:a,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:p,setupLightsView:_,pushLight:u,pushShadow:h,pushLightProbeGrid:m}}function iw(r){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let h;return u===void 0?(h=new Fx(r),e.set(o,[h])):c>=u.length?(h=new Fx(r),u.push(h)):h=u[c],h}function a(){e=new WeakMap}return{get:n,dispose:a}}const aw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sw=`uniform sampler2D shadow_pass;
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
}`,rw=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],ow=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],Bx=new fn,ol=new Q,vh=new Q;function lw(r,e,n){let a=new zp;const o=new Et,c=new Et,u=new xn,h=new xb,m=new vb,p={},_=n.maxTextureSize,x={[Ss]:si,[si]:Ss,[Li]:Li},g=new la({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:aw,fragmentShader:sw}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const b=new ri;b.setAttribute("position",new Yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new nn(b,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ou;let y=this.type;this.render=function(B,O,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||B.length===0)return;this.type===Vx&&(mt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ou);const L=r.getRenderTarget(),q=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),j=r.state;j.setBlending(Oa),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const fe=y!==this.type;fe&&O.traverse(function(me){me.material&&(Array.isArray(me.material)?me.material.forEach(Y=>Y.needsUpdate=!0):me.material.needsUpdate=!0)});for(let me=0,Y=B.length;me<Y;me++){const N=B[me],G=N.shadow;if(G===void 0){mt("WebGLShadowMap:",N,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;o.copy(G.mapSize);const oe=G.getFrameExtents();o.multiply(oe),c.copy(G.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(c.x=Math.floor(_/oe.x),o.x=c.x*oe.x,G.mapSize.x=c.x),o.y>_&&(c.y=Math.floor(_/oe.y),o.y=c.y*oe.y,G.mapSize.y=c.y));const ve=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=ve,G.map===null||fe===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===cl){if(N.isPointLight){mt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ra(o.x,o.y,{format:er,type:Pa,minFilter:Xn,magFilter:Xn,generateMipmaps:!1}),G.map.texture.name=N.name+".shadowMap",G.map.depthTexture=new ao(o.x,o.y,ia),G.map.depthTexture.name=N.name+".shadowMapDepth",G.map.depthTexture.format=Fa,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Bn,G.map.depthTexture.magFilter=Bn}else N.isPointLight?(G.map=new vv(o.x),G.map.depthTexture=new ub(o.x,oa)):(G.map=new ra(o.x,o.y),G.map.depthTexture=new ao(o.x,o.y,oa)),G.map.depthTexture.name=N.name+".shadowMap",G.map.depthTexture.format=Fa,this.type===ou?(G.map.depthTexture.compareFunction=ve?Dp:Cp,G.map.depthTexture.minFilter=Xn,G.map.depthTexture.magFilter=Xn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Bn,G.map.depthTexture.magFilter=Bn);G.camera.updateProjectionMatrix()}const Ae=G.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<Ae;P++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,P),r.clear();else{P===0&&(r.setRenderTarget(G.map),r.clear());const J=G.getViewport(P);u.set(c.x*J.x,c.y*J.y,c.x*J.z,c.y*J.w),j.viewport(u)}if(N.isPointLight){const J=G.camera,W=G.matrix,Re=N.distance||J.far;Re!==J.far&&(J.far=Re,J.updateProjectionMatrix()),ol.setFromMatrixPosition(N.matrixWorld),J.position.copy(ol),vh.copy(J.position),vh.add(rw[P]),J.up.copy(ow[P]),J.lookAt(vh),J.updateMatrixWorld(),W.makeTranslation(-ol.x,-ol.y,-ol.z),Bx.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Bx,J.coordinateSystem,J.reversedDepth)}else G.updateMatrices(N);a=G.getFrustum(),I(O,T,G.camera,N,this.type)}G.isPointLightShadow!==!0&&this.type===cl&&D(G,T),G.needsUpdate=!1}y=this.type,S.needsUpdate=!1,r.setRenderTarget(L,q,H)};function D(B,O){const T=e.update(C);g.defines.VSM_SAMPLES!==B.blurSamples&&(g.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new ra(o.x,o.y,{format:er,type:Pa})),g.uniforms.shadow_pass.value=B.map.depthTexture,g.uniforms.resolution.value=B.mapSize,g.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(O,null,T,g,C,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(O,null,T,M,C,null)}function F(B,O,T,L){let q=null;const H=T.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(H!==void 0)q=H;else if(q=T.isPointLight===!0?m:h,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const j=q.uuid,fe=O.uuid;let me=p[j];me===void 0&&(me={},p[j]=me);let Y=me[fe];Y===void 0&&(Y=q.clone(),me[fe]=Y,O.addEventListener("dispose",X)),q=Y}if(q.visible=O.visible,q.wireframe=O.wireframe,L===cl?q.side=O.shadowSide!==null?O.shadowSide:O.side:q.side=O.shadowSide!==null?O.shadowSide:x[O.side],q.alphaMap=O.alphaMap,q.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,q.map=O.map,q.clipShadows=O.clipShadows,q.clippingPlanes=O.clippingPlanes,q.clipIntersection=O.clipIntersection,q.displacementMap=O.displacementMap,q.displacementScale=O.displacementScale,q.displacementBias=O.displacementBias,q.wireframeLinewidth=O.wireframeLinewidth,q.linewidth=O.linewidth,T.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const j=r.properties.get(q);j.light=T}return q}function I(B,O,T,L,q){if(B.visible===!1)return;if(B.layers.test(O.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&q===cl)&&(!B.frustumCulled||a.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,B.matrixWorld);const fe=e.update(B),me=B.material;if(Array.isArray(me)){const Y=fe.groups;for(let N=0,G=Y.length;N<G;N++){const oe=Y[N],ve=me[oe.materialIndex];if(ve&&ve.visible){const Ae=F(B,ve,L,q);B.onBeforeShadow(r,B,O,T,fe,Ae,oe),r.renderBufferDirect(T,null,fe,Ae,B,oe),B.onAfterShadow(r,B,O,T,fe,Ae,oe)}}}else if(me.visible){const Y=F(B,me,L,q);B.onBeforeShadow(r,B,O,T,fe,Y,null),r.renderBufferDirect(T,null,fe,Y,B,null),B.onAfterShadow(r,B,O,T,fe,Y,null)}}const j=B.children;for(let fe=0,me=j.length;fe<me;fe++)I(j[fe],O,T,L,q)}function X(B){B.target.removeEventListener("dispose",X);for(const T in p){const L=p[T],q=B.target.uuid;q in L&&(L[q].dispose(),delete L[q])}}}function cw(r,e){function n(){let z=!1;const De=new xn;let ye=null;const Qe=new xn(0,0,0,0);return{setMask:function(He){ye!==He&&!z&&(r.colorMask(He,He,He,He),ye=He)},setLocked:function(He){z=He},setClear:function(He,Le,at,lt,an){an===!0&&(He*=lt,Le*=lt,at*=lt),De.set(He,Le,at,lt),Qe.equals(De)===!1&&(r.clearColor(He,Le,at,lt),Qe.copy(De))},reset:function(){z=!1,ye=null,Qe.set(-1,0,0,0)}}}function a(){let z=!1,De=!1,ye=null,Qe=null,He=null;return{setReversed:function(Le){if(De!==Le){const at=e.get("EXT_clip_control");Le?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),De=Le;const lt=He;He=null,this.setClear(lt)}},getReversed:function(){return De},setTest:function(Le){Le?Ce(r.DEPTH_TEST):tt(r.DEPTH_TEST)},setMask:function(Le){ye!==Le&&!z&&(r.depthMask(Le),ye=Le)},setFunc:function(Le){if(De&&(Le=yM[Le]),Qe!==Le){switch(Le){case Rh:r.depthFunc(r.NEVER);break;case Ch:r.depthFunc(r.ALWAYS);break;case Dh:r.depthFunc(r.LESS);break;case no:r.depthFunc(r.LEQUAL);break;case Nh:r.depthFunc(r.EQUAL);break;case Uh:r.depthFunc(r.GEQUAL);break;case Lh:r.depthFunc(r.GREATER);break;case Oh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Qe=Le}},setLocked:function(Le){z=Le},setClear:function(Le){He!==Le&&(He=Le,De&&(Le=1-Le),r.clearDepth(Le))},reset:function(){z=!1,ye=null,Qe=null,He=null,De=!1}}}function o(){let z=!1,De=null,ye=null,Qe=null,He=null,Le=null,at=null,lt=null,an=null;return{setTest:function(Gt){z||(Gt?Ce(r.STENCIL_TEST):tt(r.STENCIL_TEST))},setMask:function(Gt){De!==Gt&&!z&&(r.stencilMask(Gt),De=Gt)},setFunc:function(Gt,Qn,Gn){(ye!==Gt||Qe!==Qn||He!==Gn)&&(r.stencilFunc(Gt,Qn,Gn),ye=Gt,Qe=Qn,He=Gn)},setOp:function(Gt,Qn,Gn){(Le!==Gt||at!==Qn||lt!==Gn)&&(r.stencilOp(Gt,Qn,Gn),Le=Gt,at=Qn,lt=Gn)},setLocked:function(Gt){z=Gt},setClear:function(Gt){an!==Gt&&(r.clearStencil(Gt),an=Gt)},reset:function(){z=!1,De=null,ye=null,Qe=null,He=null,Le=null,at=null,lt=null,an=null}}}const c=new n,u=new a,h=new o,m=new WeakMap,p=new WeakMap;let _={},x={},g={},M=new WeakMap,b=[],C=null,S=!1,y=null,D=null,F=null,I=null,X=null,B=null,O=null,T=new Nt(0,0,0),L=0,q=!1,H=null,j=null,fe=null,me=null,Y=null;const N=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,oe=0;const ve=r.getParameter(r.VERSION);ve.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(ve)[1]),G=oe>=1):ve.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(ve)[1]),G=oe>=2);let Ae=null,P={};const J=r.getParameter(r.SCISSOR_BOX),W=r.getParameter(r.VIEWPORT),Re=new xn().fromArray(J),Te=new xn().fromArray(W);function ie(z,De,ye,Qe){const He=new Uint8Array(4),Le=r.createTexture();r.bindTexture(z,Le),r.texParameteri(z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let at=0;at<ye;at++)z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY?r.texImage3D(De,0,r.RGBA,1,1,Qe,0,r.RGBA,r.UNSIGNED_BYTE,He):r.texImage2D(De+at,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,He);return Le}const Ue={};Ue[r.TEXTURE_2D]=ie(r.TEXTURE_2D,r.TEXTURE_2D,1),Ue[r.TEXTURE_CUBE_MAP]=ie(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[r.TEXTURE_2D_ARRAY]=ie(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ue[r.TEXTURE_3D]=ie(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),Ce(r.DEPTH_TEST),u.setFunc(no),dn(!1),Kt(U_),Ce(r.CULL_FACE),Bt(Oa);function Ce(z){_[z]!==!0&&(r.enable(z),_[z]=!0)}function tt(z){_[z]!==!1&&(r.disable(z),_[z]=!1)}function ft(z,De){return g[z]!==De?(r.bindFramebuffer(z,De),g[z]=De,z===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=De),z===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=De),!0):!1}function dt(z,De){let ye=b,Qe=!1;if(z){ye=M.get(De),ye===void 0&&(ye=[],M.set(De,ye));const He=z.textures;if(ye.length!==He.length||ye[0]!==r.COLOR_ATTACHMENT0){for(let Le=0,at=He.length;Le<at;Le++)ye[Le]=r.COLOR_ATTACHMENT0+Le;ye.length=He.length,Qe=!0}}else ye[0]!==r.BACK&&(ye[0]=r.BACK,Qe=!0);Qe&&r.drawBuffers(ye)}function Xt(z){return C!==z?(r.useProgram(z),C=z,!0):!1}const _t={[qs]:r.FUNC_ADD,[kS]:r.FUNC_SUBTRACT,[WS]:r.FUNC_REVERSE_SUBTRACT};_t[XS]=r.MIN,_t[YS]=r.MAX;const Rt={[jS]:r.ZERO,[qS]:r.ONE,[$S]:r.SRC_COLOR,[Ah]:r.SRC_ALPHA,[tM]:r.SRC_ALPHA_SATURATE,[JS]:r.DST_COLOR,[KS]:r.DST_ALPHA,[ZS]:r.ONE_MINUS_SRC_COLOR,[wh]:r.ONE_MINUS_SRC_ALPHA,[eM]:r.ONE_MINUS_DST_COLOR,[QS]:r.ONE_MINUS_DST_ALPHA,[nM]:r.CONSTANT_COLOR,[iM]:r.ONE_MINUS_CONSTANT_COLOR,[aM]:r.CONSTANT_ALPHA,[sM]:r.ONE_MINUS_CONSTANT_ALPHA};function Bt(z,De,ye,Qe,He,Le,at,lt,an,Gt){if(z===Oa){S===!0&&(tt(r.BLEND),S=!1);return}if(S===!1&&(Ce(r.BLEND),S=!0),z!==VS){if(z!==y||Gt!==q){if((D!==qs||X!==qs)&&(r.blendEquation(r.FUNC_ADD),D=qs,X=qs),Gt)switch(z){case Qr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case L_:r.blendFunc(r.ONE,r.ONE);break;case O_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case I_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:zt("WebGLState: Invalid blending: ",z);break}else switch(z){case Qr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case L_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case O_:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case I_:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",z);break}F=null,I=null,B=null,O=null,T.set(0,0,0),L=0,y=z,q=Gt}return}He=He||De,Le=Le||ye,at=at||Qe,(De!==D||He!==X)&&(r.blendEquationSeparate(_t[De],_t[He]),D=De,X=He),(ye!==F||Qe!==I||Le!==B||at!==O)&&(r.blendFuncSeparate(Rt[ye],Rt[Qe],Rt[Le],Rt[at]),F=ye,I=Qe,B=Le,O=at),(lt.equals(T)===!1||an!==L)&&(r.blendColor(lt.r,lt.g,lt.b,an),T.copy(lt),L=an),y=z,q=!1}function xt(z,De){z.side===Li?tt(r.CULL_FACE):Ce(r.CULL_FACE);let ye=z.side===si;De&&(ye=!ye),dn(ye),z.blending===Qr&&z.transparent===!1?Bt(Oa):Bt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),u.setFunc(z.depthFunc),u.setTest(z.depthTest),u.setMask(z.depthWrite),c.setMask(z.colorWrite);const Qe=z.stencilWrite;h.setTest(Qe),Qe&&(h.setMask(z.stencilWriteMask),h.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),h.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Z(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Ce(r.SAMPLE_ALPHA_TO_COVERAGE):tt(r.SAMPLE_ALPHA_TO_COVERAGE)}function dn(z){H!==z&&(z?r.frontFace(r.CW):r.frontFace(r.CCW),H=z)}function Kt(z){z!==GS?(Ce(r.CULL_FACE),z!==j&&(z===U_?r.cullFace(r.BACK):z===HS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):tt(r.CULL_FACE),j=z}function wn(z){z!==fe&&(G&&r.lineWidth(z),fe=z)}function Z(z,De,ye){z?(Ce(r.POLYGON_OFFSET_FILL),(me!==De||Y!==ye)&&(me=De,Y=ye,u.getReversed()&&(De=-De),r.polygonOffset(De,ye))):tt(r.POLYGON_OFFSET_FILL)}function rn(z){z?Ce(r.SCISSOR_TEST):tt(r.SCISSOR_TEST)}function Tt(z){z===void 0&&(z=r.TEXTURE0+N-1),Ae!==z&&(r.activeTexture(z),Ae=z)}function Ft(z,De,ye){ye===void 0&&(Ae===null?ye=r.TEXTURE0+N-1:ye=Ae);let Qe=P[ye];Qe===void 0&&(Qe={type:void 0,texture:void 0},P[ye]=Qe),(Qe.type!==z||Qe.texture!==De)&&(Ae!==ye&&(r.activeTexture(ye),Ae=ye),r.bindTexture(z,De||Ue[z]),Qe.type=z,Qe.texture=De)}function Fe(){const z=P[Ae];z!==void 0&&z.type!==void 0&&(r.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Qt(){try{r.compressedTexImage2D(...arguments)}catch(z){zt("WebGLState:",z)}}function U(){try{r.compressedTexImage3D(...arguments)}catch(z){zt("WebGLState:",z)}}function E(){try{r.texSubImage2D(...arguments)}catch(z){zt("WebGLState:",z)}}function te(){try{r.texSubImage3D(...arguments)}catch(z){zt("WebGLState:",z)}}function Me(){try{r.compressedTexSubImage2D(...arguments)}catch(z){zt("WebGLState:",z)}}function Ie(){try{r.compressedTexSubImage3D(...arguments)}catch(z){zt("WebGLState:",z)}}function ke(){try{r.texStorage2D(...arguments)}catch(z){zt("WebGLState:",z)}}function Xe(){try{r.texStorage3D(...arguments)}catch(z){zt("WebGLState:",z)}}function pe(){try{r.texImage2D(...arguments)}catch(z){zt("WebGLState:",z)}}function _e(){try{r.texImage3D(...arguments)}catch(z){zt("WebGLState:",z)}}function Ge(z){return x[z]!==void 0?x[z]:r.getParameter(z)}function je(z,De){x[z]!==De&&(r.pixelStorei(z,De),x[z]=De)}function We(z){Re.equals(z)===!1&&(r.scissor(z.x,z.y,z.z,z.w),Re.copy(z))}function Ve(z){Te.equals(z)===!1&&(r.viewport(z.x,z.y,z.z,z.w),Te.copy(z))}function Oe(z,De){let ye=p.get(De);ye===void 0&&(ye=new WeakMap,p.set(De,ye));let Qe=ye.get(z);Qe===void 0&&(Qe=r.getUniformBlockIndex(De,z.name),ye.set(z,Qe))}function qe(z,De){const Qe=p.get(De).get(z);m.get(De)!==Qe&&(r.uniformBlockBinding(De,Qe,z.__bindingPointIndex),m.set(De,Qe))}function ot(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},x={},Ae=null,P={},g={},M=new WeakMap,b=[],C=null,S=!1,y=null,D=null,F=null,I=null,X=null,B=null,O=null,T=new Nt(0,0,0),L=0,q=!1,H=null,j=null,fe=null,me=null,Y=null,Re.set(0,0,r.canvas.width,r.canvas.height),Te.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:Ce,disable:tt,bindFramebuffer:ft,drawBuffers:dt,useProgram:Xt,setBlending:Bt,setMaterial:xt,setFlipSided:dn,setCullFace:Kt,setLineWidth:wn,setPolygonOffset:Z,setScissorTest:rn,activeTexture:Tt,bindTexture:Ft,unbindTexture:Fe,compressedTexImage2D:Qt,compressedTexImage3D:U,texImage2D:pe,texImage3D:_e,pixelStorei:je,getParameter:Ge,updateUBOMapping:Oe,uniformBlockBinding:qe,texStorage2D:ke,texStorage3D:Xe,texSubImage2D:E,texSubImage3D:te,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ie,scissor:We,viewport:Ve,reset:ot}}function uw(r,e,n,a,o,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Et,_=new WeakMap,x=new Set;let g;const M=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(U,E){return b?new OffscreenCanvas(U,E):xu("canvas")}function S(U,E,te){let Me=1;const Ie=Qt(U);if((Ie.width>te||Ie.height>te)&&(Me=te/Math.max(Ie.width,Ie.height)),Me<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ke=Math.floor(Me*Ie.width),Xe=Math.floor(Me*Ie.height);g===void 0&&(g=C(ke,Xe));const pe=E?C(ke,Xe):g;return pe.width=ke,pe.height=Xe,pe.getContext("2d").drawImage(U,0,0,ke,Xe),mt("WebGLRenderer: Texture has been resized from ("+Ie.width+"x"+Ie.height+") to ("+ke+"x"+Xe+")."),pe}else return"data"in U&&mt("WebGLRenderer: Image in DataTexture is too big ("+Ie.width+"x"+Ie.height+")."),U;return U}function y(U){return U.generateMipmaps}function D(U){r.generateMipmap(U)}function F(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function I(U,E,te,Me,Ie,ke=!1){if(U!==null){if(r[U]!==void 0)return r[U];mt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Xe;Me&&(Xe=e.get("EXT_texture_norm16"),Xe||mt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=E;if(E===r.RED&&(te===r.FLOAT&&(pe=r.R32F),te===r.HALF_FLOAT&&(pe=r.R16F),te===r.UNSIGNED_BYTE&&(pe=r.R8),te===r.UNSIGNED_SHORT&&Xe&&(pe=Xe.R16_EXT),te===r.SHORT&&Xe&&(pe=Xe.R16_SNORM_EXT)),E===r.RED_INTEGER&&(te===r.UNSIGNED_BYTE&&(pe=r.R8UI),te===r.UNSIGNED_SHORT&&(pe=r.R16UI),te===r.UNSIGNED_INT&&(pe=r.R32UI),te===r.BYTE&&(pe=r.R8I),te===r.SHORT&&(pe=r.R16I),te===r.INT&&(pe=r.R32I)),E===r.RG&&(te===r.FLOAT&&(pe=r.RG32F),te===r.HALF_FLOAT&&(pe=r.RG16F),te===r.UNSIGNED_BYTE&&(pe=r.RG8),te===r.UNSIGNED_SHORT&&Xe&&(pe=Xe.RG16_EXT),te===r.SHORT&&Xe&&(pe=Xe.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(te===r.UNSIGNED_BYTE&&(pe=r.RG8UI),te===r.UNSIGNED_SHORT&&(pe=r.RG16UI),te===r.UNSIGNED_INT&&(pe=r.RG32UI),te===r.BYTE&&(pe=r.RG8I),te===r.SHORT&&(pe=r.RG16I),te===r.INT&&(pe=r.RG32I)),E===r.RGB_INTEGER&&(te===r.UNSIGNED_BYTE&&(pe=r.RGB8UI),te===r.UNSIGNED_SHORT&&(pe=r.RGB16UI),te===r.UNSIGNED_INT&&(pe=r.RGB32UI),te===r.BYTE&&(pe=r.RGB8I),te===r.SHORT&&(pe=r.RGB16I),te===r.INT&&(pe=r.RGB32I)),E===r.RGBA_INTEGER&&(te===r.UNSIGNED_BYTE&&(pe=r.RGBA8UI),te===r.UNSIGNED_SHORT&&(pe=r.RGBA16UI),te===r.UNSIGNED_INT&&(pe=r.RGBA32UI),te===r.BYTE&&(pe=r.RGBA8I),te===r.SHORT&&(pe=r.RGBA16I),te===r.INT&&(pe=r.RGBA32I)),E===r.RGB&&(te===r.UNSIGNED_SHORT&&Xe&&(pe=Xe.RGB16_EXT),te===r.SHORT&&Xe&&(pe=Xe.RGB16_SNORM_EXT),te===r.UNSIGNED_INT_5_9_9_9_REV&&(pe=r.RGB9_E5),te===r.UNSIGNED_INT_10F_11F_11F_REV&&(pe=r.R11F_G11F_B10F)),E===r.RGBA){const _e=ke?_u:Pt.getTransfer(Ie);te===r.FLOAT&&(pe=r.RGBA32F),te===r.HALF_FLOAT&&(pe=r.RGBA16F),te===r.UNSIGNED_BYTE&&(pe=_e===$t?r.SRGB8_ALPHA8:r.RGBA8),te===r.UNSIGNED_SHORT&&Xe&&(pe=Xe.RGBA16_EXT),te===r.SHORT&&Xe&&(pe=Xe.RGBA16_SNORM_EXT),te===r.UNSIGNED_SHORT_4_4_4_4&&(pe=r.RGBA4),te===r.UNSIGNED_SHORT_5_5_5_1&&(pe=r.RGB5_A1)}return(pe===r.R16F||pe===r.R32F||pe===r.RG16F||pe===r.RG32F||pe===r.RGBA16F||pe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function X(U,E){let te;return U?E===null||E===oa||E===_l?te=r.DEPTH24_STENCIL8:E===ia?te=r.DEPTH32F_STENCIL8:E===gl&&(te=r.DEPTH24_STENCIL8,mt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===oa||E===_l?te=r.DEPTH_COMPONENT24:E===ia?te=r.DEPTH_COMPONENT32F:E===gl&&(te=r.DEPTH_COMPONENT16),te}function B(U,E){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Bn&&U.minFilter!==Xn?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function O(U){const E=U.target;E.removeEventListener("dispose",O),L(E),E.isVideoTexture&&_.delete(E),E.isHTMLTexture&&x.delete(E)}function T(U){const E=U.target;E.removeEventListener("dispose",T),H(E)}function L(U){const E=a.get(U);if(E.__webglInit===void 0)return;const te=U.source,Me=M.get(te);if(Me){const Ie=Me[E.__cacheKey];Ie.usedTimes--,Ie.usedTimes===0&&q(U),Object.keys(Me).length===0&&M.delete(te)}a.remove(U)}function q(U){const E=a.get(U);r.deleteTexture(E.__webglTexture);const te=U.source,Me=M.get(te);delete Me[E.__cacheKey],u.memory.textures--}function H(U){const E=a.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),a.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let Me=0;Me<6;Me++){if(Array.isArray(E.__webglFramebuffer[Me]))for(let Ie=0;Ie<E.__webglFramebuffer[Me].length;Ie++)r.deleteFramebuffer(E.__webglFramebuffer[Me][Ie]);else r.deleteFramebuffer(E.__webglFramebuffer[Me]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[Me])}else{if(Array.isArray(E.__webglFramebuffer))for(let Me=0;Me<E.__webglFramebuffer.length;Me++)r.deleteFramebuffer(E.__webglFramebuffer[Me]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Me=0;Me<E.__webglColorRenderbuffer.length;Me++)E.__webglColorRenderbuffer[Me]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[Me]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const te=U.textures;for(let Me=0,Ie=te.length;Me<Ie;Me++){const ke=a.get(te[Me]);ke.__webglTexture&&(r.deleteTexture(ke.__webglTexture),u.memory.textures--),a.remove(te[Me])}a.remove(U)}let j=0;function fe(){j=0}function me(){return j}function Y(U){j=U}function N(){const U=j;return U>=o.maxTextures&&mt("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),j+=1,U}function G(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function oe(U,E){const te=a.get(U);if(U.isVideoTexture&&Ft(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&te.__version!==U.version){const Me=U.image;if(Me===null)mt("WebGLRenderer: Texture marked for update but no image data found.");else if(Me.complete===!1)mt("WebGLRenderer: Texture marked for update but image is incomplete");else{tt(te,U,E);return}}else U.isExternalTexture&&(te.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,te.__webglTexture,r.TEXTURE0+E)}function ve(U,E){const te=a.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&te.__version!==U.version){tt(te,U,E);return}else U.isExternalTexture&&(te.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,te.__webglTexture,r.TEXTURE0+E)}function Ae(U,E){const te=a.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&te.__version!==U.version){tt(te,U,E);return}n.bindTexture(r.TEXTURE_3D,te.__webglTexture,r.TEXTURE0+E)}function P(U,E){const te=a.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&te.__version!==U.version){ft(te,U,E);return}n.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture,r.TEXTURE0+E)}const J={[ml]:r.REPEAT,[La]:r.CLAMP_TO_EDGE,[Ih]:r.MIRRORED_REPEAT},W={[Bn]:r.NEAREST,[lM]:r.NEAREST_MIPMAP_NEAREST,[Dc]:r.NEAREST_MIPMAP_LINEAR,[Xn]:r.LINEAR,[Hd]:r.LINEAR_MIPMAP_NEAREST,[Zs]:r.LINEAR_MIPMAP_LINEAR},Re={[fM]:r.NEVER,[gM]:r.ALWAYS,[dM]:r.LESS,[Cp]:r.LEQUAL,[hM]:r.EQUAL,[Dp]:r.GEQUAL,[pM]:r.GREATER,[mM]:r.NOTEQUAL};function Te(U,E){if(E.type===ia&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Xn||E.magFilter===Hd||E.magFilter===Dc||E.magFilter===Zs||E.minFilter===Xn||E.minFilter===Hd||E.minFilter===Dc||E.minFilter===Zs)&&mt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,J[E.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,J[E.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,J[E.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,W[E.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,W[E.minFilter]),E.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,Re[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Bn||E.minFilter!==Dc&&E.minFilter!==Zs||E.type===ia&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function ie(U,E){let te=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",O));const Me=E.source;let Ie=M.get(Me);Ie===void 0&&(Ie={},M.set(Me,Ie));const ke=G(E);if(ke!==U.__cacheKey){Ie[ke]===void 0&&(Ie[ke]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,te=!0),Ie[ke].usedTimes++;const Xe=Ie[U.__cacheKey];Xe!==void 0&&(Ie[U.__cacheKey].usedTimes--,Xe.usedTimes===0&&q(E)),U.__cacheKey=ke,U.__webglTexture=Ie[ke].texture}return te}function Ue(U,E,te){return Math.floor(Math.floor(U/te)/E)}function Ce(U,E,te,Me){const ke=U.updateRanges;if(ke.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,te,Me,E.data);else{ke.sort((je,We)=>je.start-We.start);let Xe=0;for(let je=1;je<ke.length;je++){const We=ke[Xe],Ve=ke[je],Oe=We.start+We.count,qe=Ue(Ve.start,E.width,4),ot=Ue(We.start,E.width,4);Ve.start<=Oe+1&&qe===ot&&Ue(Ve.start+Ve.count-1,E.width,4)===qe?We.count=Math.max(We.count,Ve.start+Ve.count-We.start):(++Xe,ke[Xe]=Ve)}ke.length=Xe+1;const pe=n.getParameter(r.UNPACK_ROW_LENGTH),_e=n.getParameter(r.UNPACK_SKIP_PIXELS),Ge=n.getParameter(r.UNPACK_SKIP_ROWS);n.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let je=0,We=ke.length;je<We;je++){const Ve=ke[je],Oe=Math.floor(Ve.start/4),qe=Math.ceil(Ve.count/4),ot=Oe%E.width,z=Math.floor(Oe/E.width),De=qe,ye=1;n.pixelStorei(r.UNPACK_SKIP_PIXELS,ot),n.pixelStorei(r.UNPACK_SKIP_ROWS,z),n.texSubImage2D(r.TEXTURE_2D,0,ot,z,De,ye,te,Me,E.data)}U.clearUpdateRanges(),n.pixelStorei(r.UNPACK_ROW_LENGTH,pe),n.pixelStorei(r.UNPACK_SKIP_PIXELS,_e),n.pixelStorei(r.UNPACK_SKIP_ROWS,Ge)}}function tt(U,E,te){let Me=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Me=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Me=r.TEXTURE_3D);const Ie=ie(U,E),ke=E.source;n.bindTexture(Me,U.__webglTexture,r.TEXTURE0+te);const Xe=a.get(ke);if(ke.version!==Xe.__version||Ie===!0){if(n.activeTexture(r.TEXTURE0+te),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ye=Pt.getPrimaries(Pt.workingColorSpace),Qe=E.colorSpace===vs?null:Pt.getPrimaries(E.colorSpace),He=E.colorSpace===vs||ye===Qe?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,He)}n.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let _e=S(E.image,!1,o.maxTextureSize);_e=Fe(E,_e);const Ge=c.convert(E.format,E.colorSpace),je=c.convert(E.type);let We=I(E.internalFormat,Ge,je,E.normalized,E.colorSpace,E.isVideoTexture);Te(Me,E);let Ve;const Oe=E.mipmaps,qe=E.isVideoTexture!==!0,ot=Xe.__version===void 0||Ie===!0,z=ke.dataReady,De=B(E,_e);if(E.isDepthTexture)We=X(E.format===Ks,E.type),ot&&(qe?n.texStorage2D(r.TEXTURE_2D,1,We,_e.width,_e.height):n.texImage2D(r.TEXTURE_2D,0,We,_e.width,_e.height,0,Ge,je,null));else if(E.isDataTexture)if(Oe.length>0){qe&&ot&&n.texStorage2D(r.TEXTURE_2D,De,We,Oe[0].width,Oe[0].height);for(let ye=0,Qe=Oe.length;ye<Qe;ye++)Ve=Oe[ye],qe?z&&n.texSubImage2D(r.TEXTURE_2D,ye,0,0,Ve.width,Ve.height,Ge,je,Ve.data):n.texImage2D(r.TEXTURE_2D,ye,We,Ve.width,Ve.height,0,Ge,je,Ve.data);E.generateMipmaps=!1}else qe?(ot&&n.texStorage2D(r.TEXTURE_2D,De,We,_e.width,_e.height),z&&Ce(E,_e,Ge,je)):n.texImage2D(r.TEXTURE_2D,0,We,_e.width,_e.height,0,Ge,je,_e.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){qe&&ot&&n.texStorage3D(r.TEXTURE_2D_ARRAY,De,We,Oe[0].width,Oe[0].height,_e.depth);for(let ye=0,Qe=Oe.length;ye<Qe;ye++)if(Ve=Oe[ye],E.format!==Xi)if(Ge!==null)if(qe){if(z)if(E.layerUpdates.size>0){const He=gx(Ve.width,Ve.height,E.format,E.type);for(const Le of E.layerUpdates){const at=Ve.data.subarray(Le*He/Ve.data.BYTES_PER_ELEMENT,(Le+1)*He/Ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,Le,Ve.width,Ve.height,1,Ge,at)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Ve.width,Ve.height,_e.depth,Ge,Ve.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ye,We,Ve.width,Ve.height,_e.depth,0,Ve.data,0,0);else mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?z&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Ve.width,Ve.height,_e.depth,Ge,je,Ve.data):n.texImage3D(r.TEXTURE_2D_ARRAY,ye,We,Ve.width,Ve.height,_e.depth,0,Ge,je,Ve.data)}else{qe&&ot&&n.texStorage2D(r.TEXTURE_2D,De,We,Oe[0].width,Oe[0].height);for(let ye=0,Qe=Oe.length;ye<Qe;ye++)Ve=Oe[ye],E.format!==Xi?Ge!==null?qe?z&&n.compressedTexSubImage2D(r.TEXTURE_2D,ye,0,0,Ve.width,Ve.height,Ge,Ve.data):n.compressedTexImage2D(r.TEXTURE_2D,ye,We,Ve.width,Ve.height,0,Ve.data):mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?z&&n.texSubImage2D(r.TEXTURE_2D,ye,0,0,Ve.width,Ve.height,Ge,je,Ve.data):n.texImage2D(r.TEXTURE_2D,ye,We,Ve.width,Ve.height,0,Ge,je,Ve.data)}else if(E.isDataArrayTexture)if(qe){if(ot&&n.texStorage3D(r.TEXTURE_2D_ARRAY,De,We,_e.width,_e.height,_e.depth),z)if(E.layerUpdates.size>0){const ye=gx(_e.width,_e.height,E.format,E.type);for(const Qe of E.layerUpdates){const He=_e.data.subarray(Qe*ye/_e.data.BYTES_PER_ELEMENT,(Qe+1)*ye/_e.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Qe,_e.width,_e.height,1,Ge,je,He)}E.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ge,je,_e.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,We,_e.width,_e.height,_e.depth,0,Ge,je,_e.data);else if(E.isData3DTexture)qe?(ot&&n.texStorage3D(r.TEXTURE_3D,De,We,_e.width,_e.height,_e.depth),z&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ge,je,_e.data)):n.texImage3D(r.TEXTURE_3D,0,We,_e.width,_e.height,_e.depth,0,Ge,je,_e.data);else if(E.isFramebufferTexture){if(ot)if(qe)n.texStorage2D(r.TEXTURE_2D,De,We,_e.width,_e.height);else{let ye=_e.width,Qe=_e.height;for(let He=0;He<De;He++)n.texImage2D(r.TEXTURE_2D,He,We,ye,Qe,0,Ge,je,null),ye>>=1,Qe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const ye=r.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),_e.parentNode!==ye){ye.appendChild(_e),x.add(E),ye.onpaint=lt=>{const an=lt.changedElements;for(const Gt of x)an.includes(Gt.image)&&(Gt.needsUpdate=!0)},ye.requestPaint();return}const Qe=0,He=r.RGBA,Le=r.RGBA,at=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Qe,He,Le,at,_e),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(qe&&ot){const ye=Qt(Oe[0]);n.texStorage2D(r.TEXTURE_2D,De,We,ye.width,ye.height)}for(let ye=0,Qe=Oe.length;ye<Qe;ye++)Ve=Oe[ye],qe?z&&n.texSubImage2D(r.TEXTURE_2D,ye,0,0,Ge,je,Ve):n.texImage2D(r.TEXTURE_2D,ye,We,Ge,je,Ve);E.generateMipmaps=!1}else if(qe){if(ot){const ye=Qt(_e);n.texStorage2D(r.TEXTURE_2D,De,We,ye.width,ye.height)}z&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Ge,je,_e)}else n.texImage2D(r.TEXTURE_2D,0,We,Ge,je,_e);y(E)&&D(Me),Xe.__version=ke.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function ft(U,E,te){if(E.image.length!==6)return;const Me=ie(U,E),Ie=E.source;n.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+te);const ke=a.get(Ie);if(Ie.version!==ke.__version||Me===!0){n.activeTexture(r.TEXTURE0+te);const Xe=Pt.getPrimaries(Pt.workingColorSpace),pe=E.colorSpace===vs?null:Pt.getPrimaries(E.colorSpace),_e=E.colorSpace===vs||Xe===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ge=E.isCompressedTexture||E.image[0].isCompressedTexture,je=E.image[0]&&E.image[0].isDataTexture,We=[];for(let Le=0;Le<6;Le++)!Ge&&!je?We[Le]=S(E.image[Le],!0,o.maxCubemapSize):We[Le]=je?E.image[Le].image:E.image[Le],We[Le]=Fe(E,We[Le]);const Ve=We[0],Oe=c.convert(E.format,E.colorSpace),qe=c.convert(E.type),ot=I(E.internalFormat,Oe,qe,E.normalized,E.colorSpace),z=E.isVideoTexture!==!0,De=ke.__version===void 0||Me===!0,ye=Ie.dataReady;let Qe=B(E,Ve);Te(r.TEXTURE_CUBE_MAP,E);let He;if(Ge){z&&De&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Qe,ot,Ve.width,Ve.height);for(let Le=0;Le<6;Le++){He=We[Le].mipmaps;for(let at=0;at<He.length;at++){const lt=He[at];E.format!==Xi?Oe!==null?z?ye&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,at,0,0,lt.width,lt.height,Oe,lt.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,at,ot,lt.width,lt.height,0,lt.data):mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ye&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,at,0,0,lt.width,lt.height,Oe,qe,lt.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,at,ot,lt.width,lt.height,0,Oe,qe,lt.data)}}}else{if(He=E.mipmaps,z&&De){He.length>0&&Qe++;const Le=Qt(We[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Qe,ot,Le.width,Le.height)}for(let Le=0;Le<6;Le++)if(je){z?ye&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,We[Le].width,We[Le].height,Oe,qe,We[Le].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,ot,We[Le].width,We[Le].height,0,Oe,qe,We[Le].data);for(let at=0;at<He.length;at++){const an=He[at].image[Le].image;z?ye&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,at+1,0,0,an.width,an.height,Oe,qe,an.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,at+1,ot,an.width,an.height,0,Oe,qe,an.data)}}else{z?ye&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,Oe,qe,We[Le]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,ot,Oe,qe,We[Le]);for(let at=0;at<He.length;at++){const lt=He[at];z?ye&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,at+1,0,0,Oe,qe,lt.image[Le]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,at+1,ot,Oe,qe,lt.image[Le])}}}y(E)&&D(r.TEXTURE_CUBE_MAP),ke.__version=Ie.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function dt(U,E,te,Me,Ie,ke){const Xe=c.convert(te.format,te.colorSpace),pe=c.convert(te.type),_e=I(te.internalFormat,Xe,pe,te.normalized,te.colorSpace),Ge=a.get(E),je=a.get(te);if(je.__renderTarget=E,!Ge.__hasExternalTextures){const We=Math.max(1,E.width>>ke),Ve=Math.max(1,E.height>>ke);Ie===r.TEXTURE_3D||Ie===r.TEXTURE_2D_ARRAY?n.texImage3D(Ie,ke,_e,We,Ve,E.depth,0,Xe,pe,null):n.texImage2D(Ie,ke,_e,We,Ve,0,Xe,pe,null)}n.bindFramebuffer(r.FRAMEBUFFER,U),Tt(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Me,Ie,je.__webglTexture,0,rn(E)):(Ie===r.TEXTURE_2D||Ie>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Ie<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Me,Ie,je.__webglTexture,ke),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Xt(U,E,te){if(r.bindRenderbuffer(r.RENDERBUFFER,U),E.depthBuffer){const Me=E.depthTexture,Ie=Me&&Me.isDepthTexture?Me.type:null,ke=X(E.stencilBuffer,Ie),Xe=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Tt(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,rn(E),ke,E.width,E.height):te?r.renderbufferStorageMultisample(r.RENDERBUFFER,rn(E),ke,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ke,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Xe,r.RENDERBUFFER,U)}else{const Me=E.textures;for(let Ie=0;Ie<Me.length;Ie++){const ke=Me[Ie],Xe=c.convert(ke.format,ke.colorSpace),pe=c.convert(ke.type),_e=I(ke.internalFormat,Xe,pe,ke.normalized,ke.colorSpace);Tt(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,rn(E),_e,E.width,E.height):te?r.renderbufferStorageMultisample(r.RENDERBUFFER,rn(E),_e,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,_e,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function _t(U,E,te){const Me=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ie=a.get(E.depthTexture);if(Ie.__renderTarget=E,(!Ie.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Me){if(Ie.__webglInit===void 0&&(Ie.__webglInit=!0,E.depthTexture.addEventListener("dispose",O)),Ie.__webglTexture===void 0){Ie.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,Ie.__webglTexture),Te(r.TEXTURE_CUBE_MAP,E.depthTexture);const Ge=c.convert(E.depthTexture.format),je=c.convert(E.depthTexture.type);let We;E.depthTexture.format===Fa?We=r.DEPTH_COMPONENT24:E.depthTexture.format===Ks&&(We=r.DEPTH24_STENCIL8);for(let Ve=0;Ve<6;Ve++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,0,We,E.width,E.height,0,Ge,je,null)}}else oe(E.depthTexture,0);const ke=Ie.__webglTexture,Xe=rn(E),pe=Me?r.TEXTURE_CUBE_MAP_POSITIVE_X+te:r.TEXTURE_2D,_e=E.depthTexture.format===Ks?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Fa)Tt(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,pe,ke,0,Xe):r.framebufferTexture2D(r.FRAMEBUFFER,_e,pe,ke,0);else if(E.depthTexture.format===Ks)Tt(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,pe,ke,0,Xe):r.framebufferTexture2D(r.FRAMEBUFFER,_e,pe,ke,0);else throw new Error("Unknown depthTexture format")}function Rt(U){const E=a.get(U),te=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const Me=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Me){const Ie=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Me.removeEventListener("dispose",Ie)};Me.addEventListener("dispose",Ie),E.__depthDisposeCallback=Ie}E.__boundDepthTexture=Me}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(te)for(let Me=0;Me<6;Me++)_t(E.__webglFramebuffer[Me],U,Me);else{const Me=U.texture.mipmaps;Me&&Me.length>0?_t(E.__webglFramebuffer[0],U,0):_t(E.__webglFramebuffer,U,0)}else if(te){E.__webglDepthbuffer=[];for(let Me=0;Me<6;Me++)if(n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[Me]),E.__webglDepthbuffer[Me]===void 0)E.__webglDepthbuffer[Me]=r.createRenderbuffer(),Xt(E.__webglDepthbuffer[Me],U,!1);else{const Ie=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ke=E.__webglDepthbuffer[Me];r.bindRenderbuffer(r.RENDERBUFFER,ke),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ie,r.RENDERBUFFER,ke)}}else{const Me=U.texture.mipmaps;if(Me&&Me.length>0?n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Xt(E.__webglDepthbuffer,U,!1);else{const Ie=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ke=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ke),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ie,r.RENDERBUFFER,ke)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Bt(U,E,te){const Me=a.get(U);E!==void 0&&dt(Me.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),te!==void 0&&Rt(U)}function xt(U){const E=U.texture,te=a.get(U),Me=a.get(E);U.addEventListener("dispose",T);const Ie=U.textures,ke=U.isWebGLCubeRenderTarget===!0,Xe=Ie.length>1;if(Xe||(Me.__webglTexture===void 0&&(Me.__webglTexture=r.createTexture()),Me.__version=E.version,u.memory.textures++),ke){te.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0){te.__webglFramebuffer[pe]=[];for(let _e=0;_e<E.mipmaps.length;_e++)te.__webglFramebuffer[pe][_e]=r.createFramebuffer()}else te.__webglFramebuffer[pe]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){te.__webglFramebuffer=[];for(let pe=0;pe<E.mipmaps.length;pe++)te.__webglFramebuffer[pe]=r.createFramebuffer()}else te.__webglFramebuffer=r.createFramebuffer();if(Xe)for(let pe=0,_e=Ie.length;pe<_e;pe++){const Ge=a.get(Ie[pe]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=r.createTexture(),u.memory.textures++)}if(U.samples>0&&Tt(U)===!1){te.__webglMultisampledFramebuffer=r.createFramebuffer(),te.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let pe=0;pe<Ie.length;pe++){const _e=Ie[pe];te.__webglColorRenderbuffer[pe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,te.__webglColorRenderbuffer[pe]);const Ge=c.convert(_e.format,_e.colorSpace),je=c.convert(_e.type),We=I(_e.internalFormat,Ge,je,_e.normalized,_e.colorSpace,U.isXRRenderTarget===!0),Ve=rn(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ve,We,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,te.__webglColorRenderbuffer[pe])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(te.__webglDepthRenderbuffer=r.createRenderbuffer(),Xt(te.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ke){n.bindTexture(r.TEXTURE_CUBE_MAP,Me.__webglTexture),Te(r.TEXTURE_CUBE_MAP,E);for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)dt(te.__webglFramebuffer[pe][_e],U,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,_e);else dt(te.__webglFramebuffer[pe],U,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);y(E)&&D(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Xe){for(let pe=0,_e=Ie.length;pe<_e;pe++){const Ge=Ie[pe],je=a.get(Ge);let We=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(We=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(We,je.__webglTexture),Te(We,Ge),dt(te.__webglFramebuffer,U,Ge,r.COLOR_ATTACHMENT0+pe,We,0),y(Ge)&&D(We)}n.unbindTexture()}else{let pe=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(pe=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(pe,Me.__webglTexture),Te(pe,E),E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)dt(te.__webglFramebuffer[_e],U,E,r.COLOR_ATTACHMENT0,pe,_e);else dt(te.__webglFramebuffer,U,E,r.COLOR_ATTACHMENT0,pe,0);y(E)&&D(pe),n.unbindTexture()}U.depthBuffer&&Rt(U)}function dn(U){const E=U.textures;for(let te=0,Me=E.length;te<Me;te++){const Ie=E[te];if(y(Ie)){const ke=F(U),Xe=a.get(Ie).__webglTexture;n.bindTexture(ke,Xe),D(ke),n.unbindTexture()}}}const Kt=[],wn=[];function Z(U){if(U.samples>0){if(Tt(U)===!1){const E=U.textures,te=U.width,Me=U.height;let Ie=r.COLOR_BUFFER_BIT;const ke=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Xe=a.get(U),pe=E.length>1;if(pe)for(let Ge=0;Ge<E.length;Ge++)n.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ge,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ge,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer);const _e=U.texture.mipmaps;_e&&_e.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Ge=0;Ge<E.length;Ge++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Ie|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Ie|=r.STENCIL_BUFFER_BIT)),pe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ge]);const je=a.get(E[Ge]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,je,0)}r.blitFramebuffer(0,0,te,Me,0,0,te,Me,Ie,r.NEAREST),m===!0&&(Kt.length=0,wn.length=0,Kt.push(r.COLOR_ATTACHMENT0+Ge),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Kt.push(ke),wn.push(ke),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,wn)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Kt))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),pe)for(let Ge=0;Ge<E.length;Ge++){n.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ge,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ge]);const je=a.get(E[Ge]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ge,r.TEXTURE_2D,je,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function rn(U){return Math.min(o.maxSamples,U.samples)}function Tt(U){const E=a.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ft(U){const E=u.render.frame;_.get(U)!==E&&(_.set(U,E),U.update())}function Fe(U,E){const te=U.colorSpace,Me=U.format,Ie=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||te!==gu&&te!==vs&&(Pt.getTransfer(te)===$t?(Me!==Xi||Ie!==vi)&&mt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",te)),E}function Qt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=N,this.resetTextureUnits=fe,this.getTextureUnits=me,this.setTextureUnits=Y,this.setTexture2D=oe,this.setTexture2DArray=ve,this.setTexture3D=Ae,this.setTextureCube=P,this.rebindTextures=Bt,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=dn,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=Tt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function fw(r,e){function n(a,o=vs){let c;const u=Pt.getTransfer(o);if(a===vi)return r.UNSIGNED_BYTE;if(a===Ep)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Tp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===Jx)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===ev)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===Kx)return r.BYTE;if(a===Qx)return r.SHORT;if(a===gl)return r.UNSIGNED_SHORT;if(a===bp)return r.INT;if(a===oa)return r.UNSIGNED_INT;if(a===ia)return r.FLOAT;if(a===Pa)return r.HALF_FLOAT;if(a===tv)return r.ALPHA;if(a===nv)return r.RGB;if(a===Xi)return r.RGBA;if(a===Fa)return r.DEPTH_COMPONENT;if(a===Ks)return r.DEPTH_STENCIL;if(a===iv)return r.RED;if(a===Ap)return r.RED_INTEGER;if(a===er)return r.RG;if(a===wp)return r.RG_INTEGER;if(a===Rp)return r.RGBA_INTEGER;if(a===lu||a===cu||a===uu||a===fu)if(u===$t)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===lu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===fu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===lu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===cu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===uu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===fu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===zh||a===Ph||a===Fh||a===Bh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===zh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Ph)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Fh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Bh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Gh||a===Hh||a===Vh||a===kh||a===Wh||a===hu||a===Xh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Gh||a===Hh)return u===$t?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Vh)return u===$t?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===kh)return c.COMPRESSED_R11_EAC;if(a===Wh)return c.COMPRESSED_SIGNED_R11_EAC;if(a===hu)return c.COMPRESSED_RG11_EAC;if(a===Xh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Yh||a===jh||a===qh||a===$h||a===Zh||a===Kh||a===Qh||a===Jh||a===ep||a===tp||a===np||a===ip||a===ap||a===sp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Yh)return u===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===jh)return u===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===qh)return u===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===$h)return u===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Zh)return u===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Kh)return u===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Qh)return u===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Jh)return u===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===ep)return u===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===tp)return u===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===np)return u===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===ip)return u===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===ap)return u===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===sp)return u===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===rp||a===op||a===lp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===rp)return u===$t?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===op)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===lp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===cp||a===up||a===pu||a===fp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===cp)return c.COMPRESSED_RED_RGTC1_EXT;if(a===up)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===pu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===fp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===_l?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const dw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hw=`
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

}`;class pw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new dv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new la({vertexShader:dw,fragmentShader:hw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new nn(new Au(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mw extends tr{constructor(e,n){super();const a=this;let o=null,c=1,u=null,h="local-floor",m=1,p=null,_=null,x=null,g=null,M=null,b=null;const C=typeof XRWebGLBinding<"u",S=new pw,y={},D=n.getContextAttributes();let F=null,I=null;const X=[],B=[],O=new Et;let T=null;const L=new xi;L.viewport=new xn;const q=new xi;q.viewport=new xn;const H=[L,q],j=new Tb;let fe=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let Ue=X[ie];return Ue===void 0&&(Ue=new jd,X[ie]=Ue),Ue.getTargetRaySpace()},this.getControllerGrip=function(ie){let Ue=X[ie];return Ue===void 0&&(Ue=new jd,X[ie]=Ue),Ue.getGripSpace()},this.getHand=function(ie){let Ue=X[ie];return Ue===void 0&&(Ue=new jd,X[ie]=Ue),Ue.getHandSpace()};function Y(ie){const Ue=B.indexOf(ie.inputSource);if(Ue===-1)return;const Ce=X[Ue];Ce!==void 0&&(Ce.update(ie.inputSource,ie.frame,p||u),Ce.dispatchEvent({type:ie.type,data:ie.inputSource}))}function N(){o.removeEventListener("select",Y),o.removeEventListener("selectstart",Y),o.removeEventListener("selectend",Y),o.removeEventListener("squeeze",Y),o.removeEventListener("squeezestart",Y),o.removeEventListener("squeezeend",Y),o.removeEventListener("end",N),o.removeEventListener("inputsourceschange",G);for(let ie=0;ie<X.length;ie++){const Ue=B[ie];Ue!==null&&(B[ie]=null,X[ie].disconnect(Ue))}fe=null,me=null,S.reset();for(const ie in y)delete y[ie];e.setRenderTarget(F),M=null,g=null,x=null,o=null,I=null,Te.stop(),a.isPresenting=!1,e.setPixelRatio(T),e.setSize(O.width,O.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){c=ie,a.isPresenting===!0&&mt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){h=ie,a.isPresenting===!0&&mt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ie){p=ie},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return x===null&&C&&(x=new XRWebGLBinding(o,n)),x},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(ie){if(o=ie,o!==null){if(F=e.getRenderTarget(),o.addEventListener("select",Y),o.addEventListener("selectstart",Y),o.addEventListener("selectend",Y),o.addEventListener("squeeze",Y),o.addEventListener("squeezestart",Y),o.addEventListener("squeezeend",Y),o.addEventListener("end",N),o.addEventListener("inputsourceschange",G),D.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(O),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,tt=null,ft=null;D.depth&&(ft=D.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ce=D.stencil?Ks:Fa,tt=D.stencil?_l:oa);const dt={colorFormat:n.RGBA8,depthFormat:ft,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(dt),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),I=new ra(g.textureWidth,g.textureHeight,{format:Xi,type:vi,depthTexture:new ao(g.textureWidth,g.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Ce={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(o,n,Ce),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),I=new ra(M.framebufferWidth,M.framebufferHeight,{format:Xi,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(h),Te.setContext(o),Te.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function G(ie){for(let Ue=0;Ue<ie.removed.length;Ue++){const Ce=ie.removed[Ue],tt=B.indexOf(Ce);tt>=0&&(B[tt]=null,X[tt].disconnect(Ce))}for(let Ue=0;Ue<ie.added.length;Ue++){const Ce=ie.added[Ue];let tt=B.indexOf(Ce);if(tt===-1){for(let dt=0;dt<X.length;dt++)if(dt>=B.length){B.push(Ce),tt=dt;break}else if(B[dt]===null){B[dt]=Ce,tt=dt;break}if(tt===-1)break}const ft=X[tt];ft&&ft.connect(Ce)}}const oe=new Q,ve=new Q;function Ae(ie,Ue,Ce){oe.setFromMatrixPosition(Ue.matrixWorld),ve.setFromMatrixPosition(Ce.matrixWorld);const tt=oe.distanceTo(ve),ft=Ue.projectionMatrix.elements,dt=Ce.projectionMatrix.elements,Xt=ft[14]/(ft[10]-1),_t=ft[14]/(ft[10]+1),Rt=(ft[9]+1)/ft[5],Bt=(ft[9]-1)/ft[5],xt=(ft[8]-1)/ft[0],dn=(dt[8]+1)/dt[0],Kt=Xt*xt,wn=Xt*dn,Z=tt/(-xt+dn),rn=Z*-xt;if(Ue.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(rn),ie.translateZ(Z),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),ft[10]===-1)ie.projectionMatrix.copy(Ue.projectionMatrix),ie.projectionMatrixInverse.copy(Ue.projectionMatrixInverse);else{const Tt=Xt+Z,Ft=_t+Z,Fe=Kt-rn,Qt=wn+(tt-rn),U=Rt*_t/Ft*Tt,E=Bt*_t/Ft*Tt;ie.projectionMatrix.makePerspective(Fe,Qt,U,E,Tt,Ft),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function P(ie,Ue){Ue===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(Ue.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(o===null)return;let Ue=ie.near,Ce=ie.far;S.texture!==null&&(S.depthNear>0&&(Ue=S.depthNear),S.depthFar>0&&(Ce=S.depthFar)),j.near=q.near=L.near=Ue,j.far=q.far=L.far=Ce,(fe!==j.near||me!==j.far)&&(o.updateRenderState({depthNear:j.near,depthFar:j.far}),fe=j.near,me=j.far),j.layers.mask=ie.layers.mask|6,L.layers.mask=j.layers.mask&-5,q.layers.mask=j.layers.mask&-3;const tt=ie.parent,ft=j.cameras;P(j,tt);for(let dt=0;dt<ft.length;dt++)P(ft[dt],tt);ft.length===2?Ae(j,L,q):j.projectionMatrix.copy(L.projectionMatrix),J(ie,j,tt)};function J(ie,Ue,Ce){Ce===null?ie.matrix.copy(Ue.matrixWorld):(ie.matrix.copy(Ce.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(Ue.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(Ue.projectionMatrix),ie.projectionMatrixInverse.copy(Ue.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=vl*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(ie){m=ie,g!==null&&(g.fixedFoveation=ie),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ie)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(j)},this.getCameraTexture=function(ie){return y[ie]};let W=null;function Re(ie,Ue){if(_=Ue.getViewerPose(p||u),b=Ue,_!==null){const Ce=_.views;M!==null&&(e.setRenderTargetFramebuffer(I,M.framebuffer),e.setRenderTarget(I));let tt=!1;Ce.length!==j.cameras.length&&(j.cameras.length=0,tt=!0);for(let _t=0;_t<Ce.length;_t++){const Rt=Ce[_t];let Bt=null;if(M!==null)Bt=M.getViewport(Rt);else{const dn=x.getViewSubImage(g,Rt);Bt=dn.viewport,_t===0&&(e.setRenderTargetTextures(I,dn.colorTexture,dn.depthStencilTexture),e.setRenderTarget(I))}let xt=H[_t];xt===void 0&&(xt=new xi,xt.layers.enable(_t),xt.viewport=new xn,H[_t]=xt),xt.matrix.fromArray(Rt.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(Rt.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),_t===0&&(j.matrix.copy(xt.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),tt===!0&&j.cameras.push(xt)}const ft=o.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){x=a.getBinding();const _t=x.getDepthInformation(Ce[0]);_t&&_t.isValid&&_t.texture&&S.init(_t,o.renderState)}if(ft&&ft.includes("camera-access")&&C){e.state.unbindTexture(),x=a.getBinding();for(let _t=0;_t<Ce.length;_t++){const Rt=Ce[_t].camera;if(Rt){let Bt=y[Rt];Bt||(Bt=new dv,y[Rt]=Bt);const xt=x.getCameraImage(Rt);Bt.sourceTexture=xt}}}}for(let Ce=0;Ce<X.length;Ce++){const tt=B[Ce],ft=X[Ce];tt!==null&&ft!==void 0&&ft.update(tt,Ue,p||u)}W&&W(ie,Ue),Ue.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:Ue}),b=null}const Te=new _v;Te.setAnimationLoop(Re),this.setAnimationLoop=function(ie){W=ie},this.dispose=function(){}}}const gw=new fn,Ev=new St;Ev.set(-1,0,0,0,1,0,0,0,1);function _w(r,e){function n(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function a(S,y){y.color.getRGB(S.fogColor.value,hv(r)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,D,F,I){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(S,y):y.isMeshLambertMaterial?(c(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(S,y),x(S,y)):y.isMeshPhongMaterial?(c(S,y),_(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(S,y),g(S,y),y.isMeshPhysicalMaterial&&M(S,y,I)):y.isMeshMatcapMaterial?(c(S,y),b(S,y)):y.isMeshDepthMaterial?c(S,y):y.isMeshDistanceMaterial?(c(S,y),C(S,y)):y.isMeshNormalMaterial?c(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&h(S,y)):y.isPointsMaterial?m(S,y,D,F):y.isSpriteMaterial?p(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,n(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===si&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,n(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===si&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,n(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,n(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const D=e.get(y),F=D.envMap,I=D.envMapRotation;F&&(S.envMap.value=F,S.envMapRotation.value.setFromMatrix4(gw.makeRotationFromEuler(I)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Ev),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform))}function h(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function m(S,y,D,F){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*D,S.scale.value=F*.5,y.map&&(S.map.value=y.map,n(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function _(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function x(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function g(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function M(S,y,D){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===si&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,y){y.matcap&&(S.matcap.value=y.matcap)}function C(S,y){const D=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function xw(r,e,n,a){let o={},c={},u=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,F){const I=F.program;a.uniformBlockBinding(D,I)}function p(D,F){let I=o[D.id];I===void 0&&(b(D),I=_(D),o[D.id]=I,D.addEventListener("dispose",S));const X=F.program;a.updateUBOMapping(D,X);const B=e.render.frame;c[D.id]!==B&&(g(D),c[D.id]=B)}function _(D){const F=x();D.__bindingPointIndex=F;const I=r.createBuffer(),X=D.__size,B=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,I),r.bufferData(r.UNIFORM_BUFFER,X,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,F,I),I}function x(){for(let D=0;D<h;D++)if(u.indexOf(D)===-1)return u.push(D),D;return zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const F=o[D.id],I=D.uniforms,X=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,F);for(let B=0,O=I.length;B<O;B++){const T=Array.isArray(I[B])?I[B]:[I[B]];for(let L=0,q=T.length;L<q;L++){const H=T[L];if(M(H,B,L,X)===!0){const j=H.__offset,fe=Array.isArray(H.value)?H.value:[H.value];let me=0;for(let Y=0;Y<fe.length;Y++){const N=fe[Y],G=C(N);typeof N=="number"||typeof N=="boolean"?(H.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,j+me,H.__data)):N.isMatrix3?(H.__data[0]=N.elements[0],H.__data[1]=N.elements[1],H.__data[2]=N.elements[2],H.__data[3]=0,H.__data[4]=N.elements[3],H.__data[5]=N.elements[4],H.__data[6]=N.elements[5],H.__data[7]=0,H.__data[8]=N.elements[6],H.__data[9]=N.elements[7],H.__data[10]=N.elements[8],H.__data[11]=0):ArrayBuffer.isView(N)?H.__data.set(new N.constructor(N.buffer,N.byteOffset,H.__data.length)):(N.toArray(H.__data,me),me+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,j,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(D,F,I,X){const B=D.value,O=F+"_"+I;if(X[O]===void 0)return typeof B=="number"||typeof B=="boolean"?X[O]=B:ArrayBuffer.isView(B)?X[O]=B.slice():X[O]=B.clone(),!0;{const T=X[O];if(typeof B=="number"||typeof B=="boolean"){if(T!==B)return X[O]=B,!0}else{if(ArrayBuffer.isView(B))return!0;if(T.equals(B)===!1)return T.copy(B),!0}}return!1}function b(D){const F=D.uniforms;let I=0;const X=16;for(let O=0,T=F.length;O<T;O++){const L=Array.isArray(F[O])?F[O]:[F[O]];for(let q=0,H=L.length;q<H;q++){const j=L[q],fe=Array.isArray(j.value)?j.value:[j.value];for(let me=0,Y=fe.length;me<Y;me++){const N=fe[me],G=C(N),oe=I%X,ve=oe%G.boundary,Ae=oe+ve;I+=ve,Ae!==0&&X-Ae<G.storage&&(I+=X-Ae),j.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=I,I+=G.storage}}}const B=I%X;return B>0&&(I+=X-B),D.__size=I,D.__cache={},this}function C(D){const F={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(F.boundary=4,F.storage=4):D.isVector2?(F.boundary=8,F.storage=8):D.isVector3||D.isColor?(F.boundary=16,F.storage=12):D.isVector4?(F.boundary=16,F.storage=16):D.isMatrix3?(F.boundary=48,F.storage=48):D.isMatrix4?(F.boundary=64,F.storage=64):D.isTexture?mt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(F.boundary=16,F.storage=D.byteLength):mt("WebGLRenderer: Unsupported uniform value type.",D),F}function S(D){const F=D.target;F.removeEventListener("dispose",S);const I=u.indexOf(F.__bindingPointIndex);u.splice(I,1),r.deleteBuffer(o[F.id]),delete o[F.id],delete c[F.id]}function y(){for(const D in o)r.deleteBuffer(o[D]);u=[],o={},c={}}return{bind:m,update:p,dispose:y}}const vw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ea=null;function yw(){return ea===null&&(ea=new sb(vw,16,16,er,Pa),ea.name="DFG_LUT",ea.minFilter=Xn,ea.magFilter=Xn,ea.wrapS=La,ea.wrapT=La,ea.generateMipmaps=!1,ea.needsUpdate=!0),ea}class Sw{constructor(e={}){const{canvas:n=xM(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:M=vi}=e;this.isWebGLRenderer=!0;let b;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=a.getContextAttributes().alpha}else b=u;const C=M,S=new Set([Rp,wp,Ap]),y=new Set([vi,oa,gl,_l,Ep,Tp]),D=new Uint32Array(4),F=new Int32Array(4),I=new Q;let X=null,B=null;const O=[],T=[];let L=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const q=this;let H=!1,j=null;this._outputColorSpace=Ui;let fe=0,me=0,Y=null,N=-1,G=null;const oe=new xn,ve=new xn;let Ae=null;const P=new Nt(0);let J=0,W=n.width,Re=n.height,Te=1,ie=null,Ue=null;const Ce=new xn(0,0,W,Re),tt=new xn(0,0,W,Re);let ft=!1;const dt=new zp;let Xt=!1,_t=!1;const Rt=new fn,Bt=new Q,xt=new xn,dn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function wn(){return Y===null?Te:1}let Z=a;function rn(w,K){return n.getContext(w,K)}try{const w={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Sp}`),n.addEventListener("webglcontextlost",Le,!1),n.addEventListener("webglcontextrestored",at,!1),n.addEventListener("webglcontextcreationerror",lt,!1),Z===null){const K="webgl2";if(Z=rn(K,w),Z===null)throw rn(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw zt("WebGLRenderer: "+w.message),w}let Tt,Ft,Fe,Qt,U,E,te,Me,Ie,ke,Xe,pe,_e,Ge,je,We,Ve,Oe,qe,ot,z,De,ye;function Qe(){Tt=new yT(Z),Tt.init(),z=new fw(Z,Tt),Ft=new dT(Z,Tt,e,z),Fe=new cw(Z,Tt),Ft.reversedDepthBuffer&&g&&Fe.buffers.depth.setReversed(!0),Qt=new bT(Z),U=new $A,E=new uw(Z,Tt,Fe,U,Ft,z,Qt),te=new vT(q),Me=new wb(Z),De=new uT(Z,Me),Ie=new ST(Z,Me,Qt,De),ke=new TT(Z,Ie,Me,De,Qt),Oe=new ET(Z,Ft,E),je=new hT(U),Xe=new qA(q,te,Tt,Ft,De,je),pe=new _w(q,U),_e=new KA,Ge=new iw(Tt),Ve=new cT(q,te,Fe,ke,b,m),We=new lw(q,ke,Ft),ye=new xw(Z,Qt,Ft,Fe),qe=new fT(Z,Tt,Qt),ot=new MT(Z,Tt,Qt),Qt.programs=Xe.programs,q.capabilities=Ft,q.extensions=Tt,q.properties=U,q.renderLists=_e,q.shadowMap=We,q.state=Fe,q.info=Qt}Qe(),C!==vi&&(L=new wT(C,n.width,n.height,o,c));const He=new mw(q,Z);this.xr=He,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const w=Tt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Tt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Te},this.setPixelRatio=function(w){w!==void 0&&(Te=w,this.setSize(W,Re,!1))},this.getSize=function(w){return w.set(W,Re)},this.setSize=function(w,K,le=!0){if(He.isPresenting){mt("WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,Re=K,n.width=Math.floor(w*Te),n.height=Math.floor(K*Te),le===!0&&(n.style.width=w+"px",n.style.height=K+"px"),L!==null&&L.setSize(n.width,n.height),this.setViewport(0,0,w,K)},this.getDrawingBufferSize=function(w){return w.set(W*Te,Re*Te).floor()},this.setDrawingBufferSize=function(w,K,le){W=w,Re=K,Te=le,n.width=Math.floor(w*le),n.height=Math.floor(K*le),this.setViewport(0,0,w,K)},this.setEffects=function(w){if(C===vi){zt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let K=0;K<w.length;K++)if(w[K].isOutputPass===!0){mt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(oe)},this.getViewport=function(w){return w.copy(Ce)},this.setViewport=function(w,K,le,ae){w.isVector4?Ce.set(w.x,w.y,w.z,w.w):Ce.set(w,K,le,ae),Fe.viewport(oe.copy(Ce).multiplyScalar(Te).round())},this.getScissor=function(w){return w.copy(tt)},this.setScissor=function(w,K,le,ae){w.isVector4?tt.set(w.x,w.y,w.z,w.w):tt.set(w,K,le,ae),Fe.scissor(ve.copy(tt).multiplyScalar(Te).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(w){Fe.setScissorTest(ft=w)},this.setOpaqueSort=function(w){ie=w},this.setTransparentSort=function(w){Ue=w},this.getClearColor=function(w){return w.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(w=!0,K=!0,le=!0){let ae=0;if(w){let A=!1;if(Y!==null){const he=Y.texture.format;A=S.has(he)}if(A){const he=Y.texture.type,ue=y.has(he),ne=Ve.getClearColor(),Ne=Ve.getClearAlpha(),Be=ne.r,be=ne.g,$e=ne.b;ue?(D[0]=Be,D[1]=be,D[2]=$e,D[3]=Ne,Z.clearBufferuiv(Z.COLOR,0,D)):(F[0]=Be,F[1]=be,F[2]=$e,F[3]=Ne,Z.clearBufferiv(Z.COLOR,0,F))}else ae|=Z.COLOR_BUFFER_BIT}K&&(ae|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(ae|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&Z.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),j=w},this.dispose=function(){n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",at,!1),n.removeEventListener("webglcontextcreationerror",lt,!1),Ve.dispose(),_e.dispose(),Ge.dispose(),U.dispose(),te.dispose(),ke.dispose(),De.dispose(),ye.dispose(),Xe.dispose(),He.dispose(),He.removeEventListener("sessionstart",Oi),He.removeEventListener("sessionend",Ba),Un.stop()};function Le(w){w.preventDefault(),vu("WebGLRenderer: Context Lost."),H=!0}function at(){vu("WebGLRenderer: Context Restored."),H=!1;const w=Qt.autoReset,K=We.enabled,le=We.autoUpdate,ae=We.needsUpdate,A=We.type;Qe(),Qt.autoReset=w,We.enabled=K,We.autoUpdate=le,We.needsUpdate=ae,We.type=A}function lt(w){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function an(w){const K=w.target;K.removeEventListener("dispose",an),Gt(K)}function Gt(w){Qn(w),U.remove(w)}function Qn(w){const K=U.get(w).programs;K!==void 0&&(K.forEach(function(le){Xe.releaseProgram(le)}),w.isShaderMaterial&&Xe.releaseShaderCache(w))}this.renderBufferDirect=function(w,K,le,ae,A,he){K===null&&(K=dn);const ue=A.isMesh&&A.matrixWorld.determinant()<0,ne=oi(w,K,le,ae,A);Fe.setMaterial(ae,ue);let Ne=le.index,Be=1;if(ae.wireframe===!0){if(Ne=Ie.getWireframeAttribute(le),Ne===void 0)return;Be=2}const be=le.drawRange,$e=le.attributes.position;let Pe=be.start*Be,ct=(be.start+be.count)*Be;he!==null&&(Pe=Math.max(Pe,he.start*Be),ct=Math.min(ct,(he.start+he.count)*Be)),Ne!==null?(Pe=Math.max(Pe,0),ct=Math.min(ct,Ne.count)):$e!=null&&(Pe=Math.max(Pe,0),ct=Math.min(ct,$e.count));const ht=ct-Pe;if(ht<0||ht===1/0)return;De.setup(A,ae,ne,le,Ne);let Je,Ye=qe;if(Ne!==null&&(Je=Me.get(Ne),Ye=ot,Ye.setIndex(Je)),A.isMesh)ae.wireframe===!0?(Fe.setLineWidth(ae.wireframeLinewidth*wn()),Ye.setMode(Z.LINES)):Ye.setMode(Z.TRIANGLES);else if(A.isLine){let Ze=ae.linewidth;Ze===void 0&&(Ze=1),Fe.setLineWidth(Ze*wn()),A.isLineSegments?Ye.setMode(Z.LINES):A.isLineLoop?Ye.setMode(Z.LINE_LOOP):Ye.setMode(Z.LINE_STRIP)}else A.isPoints?Ye.setMode(Z.POINTS):A.isSprite&&Ye.setMode(Z.TRIANGLES);if(A.isBatchedMesh)if(Tt.get("WEBGL_multi_draw"))Ye.renderMultiDraw(A._multiDrawStarts,A._multiDrawCounts,A._multiDrawCount);else{const Ze=A._multiDrawStarts,xe=A._multiDrawCounts,ze=A._multiDrawCount,ge=Ne?Me.get(Ne).bytesPerElement:1,Ke=U.get(ae).currentProgram.getUniforms();for(let gt=0;gt<ze;gt++)Ke.setValue(Z,"_gl_DrawID",gt),Ye.render(Ze[gt]/ge,xe[gt])}else if(A.isInstancedMesh)Ye.renderInstances(Pe,ht,A.count);else if(le.isInstancedBufferGeometry){const Ze=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,xe=Math.min(le.instanceCount,Ze);Ye.renderInstances(Pe,ht,xe)}else Ye.render(Pe,ht)};function Gn(w,K,le){w.transparent===!0&&w.side===Li&&w.forceSinglePass===!1?(w.side=si,w.needsUpdate=!0,ca(w,K,le),w.side=Ss,w.needsUpdate=!0,ca(w,K,le),w.side=Li):ca(w,K,le)}this.compile=function(w,K,le=null){le===null&&(le=w),B=Ge.get(le),B.init(K),T.push(B),le.traverseVisible(function(A){A.isLight&&A.layers.test(K.layers)&&(B.pushLight(A),A.castShadow&&B.pushShadow(A))}),w!==le&&w.traverseVisible(function(A){A.isLight&&A.layers.test(K.layers)&&(B.pushLight(A),A.castShadow&&B.pushShadow(A))}),B.setupLights();const ae=new Set;return w.traverse(function(A){if(!(A.isMesh||A.isPoints||A.isLine||A.isSprite))return;const he=A.material;if(he)if(Array.isArray(he))for(let ue=0;ue<he.length;ue++){const ne=he[ue];Gn(ne,le,A),ae.add(ne)}else Gn(he,le,A),ae.add(he)}),B=T.pop(),ae},this.compileAsync=function(w,K,le=null){const ae=this.compile(w,K,le);return new Promise(A=>{function he(){if(ae.forEach(function(ue){U.get(ue).currentProgram.isReady()&&ae.delete(ue)}),ae.size===0){A(w);return}setTimeout(he,10)}Tt.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let qi=null;function Hn(w){qi&&qi(w)}function Oi(){Un.stop()}function Ba(){Un.start()}const Un=new _v;Un.setAnimationLoop(Hn),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(w){qi=w,He.setAnimationLoop(w),w===null?Un.stop():Un.start()},He.addEventListener("sessionstart",Oi),He.addEventListener("sessionend",Ba),this.render=function(w,K){if(K!==void 0&&K.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;j!==null&&j.renderStart(w,K);const le=He.enabled===!0&&He.isPresenting===!0,ae=L!==null&&(Y===null||le)&&L.begin(q,Y);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(He.cameraAutoUpdate===!0&&He.updateCamera(K),K=He.getCamera()),w.isScene===!0&&w.onBeforeRender(q,w,K,Y),B=Ge.get(w,T.length),B.init(K),B.state.textureUnits=E.getTextureUnits(),T.push(B),Rt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),dt.setFromProjectionMatrix(Rt,aa,K.reversedDepth),_t=this.localClippingEnabled,Xt=je.init(this.clippingPlanes,_t),X=_e.get(w,O.length),X.init(),O.push(X),He.enabled===!0&&He.isPresenting===!0){const ue=q.xr.getDepthSensingMesh();ue!==null&&hn(ue,K,-1/0,q.sortObjects)}hn(w,K,0,q.sortObjects),X.finish(),q.sortObjects===!0&&X.sort(ie,Ue),Kt=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1,Kt&&Ve.addToRenderList(X,w),this.info.render.frame++,Xt===!0&&je.beginShadows();const A=B.state.shadowsArray;if(We.render(A,w,K),Xt===!0&&je.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ae&&L.hasRenderPass())===!1){const ue=X.opaque,ne=X.transmissive;if(B.setupLights(),K.isArrayCamera){const Ne=K.cameras;if(ne.length>0)for(let Be=0,be=Ne.length;Be<be;Be++){const $e=Ne[Be];Si(ue,ne,w,$e)}Kt&&Ve.render(w);for(let Be=0,be=Ne.length;Be<be;Be++){const $e=Ne[Be];Rn(X,w,$e,$e.viewport)}}else ne.length>0&&Si(ue,ne,w,K),Kt&&Ve.render(w),Rn(X,w,K)}Y!==null&&me===0&&(E.updateMultisampleRenderTarget(Y),E.updateRenderTargetMipmap(Y)),ae&&L.end(q),w.isScene===!0&&w.onAfterRender(q,w,K),De.resetDefaultState(),N=-1,G=null,T.pop(),T.length>0?(B=T[T.length-1],E.setTextureUnits(B.state.textureUnits),Xt===!0&&je.setGlobalState(q.clippingPlanes,B.state.camera)):B=null,O.pop(),O.length>0?X=O[O.length-1]:X=null,j!==null&&j.renderEnd()};function hn(w,K,le,ae){if(w.visible===!1)return;if(w.layers.test(K.layers)){if(w.isGroup)le=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(K);else if(w.isLightProbeGrid)B.pushLightProbeGrid(w);else if(w.isLight)B.pushLight(w),w.castShadow&&B.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||dt.intersectsSprite(w)){ae&&xt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Rt);const ue=ke.update(w),ne=w.material;ne.visible&&X.push(w,ue,ne,le,xt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||dt.intersectsObject(w))){const ue=ke.update(w),ne=w.material;if(ae&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),xt.copy(w.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),xt.copy(ue.boundingSphere.center)),xt.applyMatrix4(w.matrixWorld).applyMatrix4(Rt)),Array.isArray(ne)){const Ne=ue.groups;for(let Be=0,be=Ne.length;Be<be;Be++){const $e=Ne[Be],Pe=ne[$e.materialIndex];Pe&&Pe.visible&&X.push(w,ue,Pe,le,xt.z,$e)}}else ne.visible&&X.push(w,ue,ne,le,xt.z,null)}}const he=w.children;for(let ue=0,ne=he.length;ue<ne;ue++)hn(he[ue],K,le,ae)}function Rn(w,K,le,ae){const{opaque:A,transmissive:he,transparent:ue}=w;B.setupLightsView(le),Xt===!0&&je.setGlobalState(q.clippingPlanes,le),ae&&Fe.viewport(oe.copy(ae)),A.length>0&&Ii(A,K,le),he.length>0&&Ii(he,K,le),ue.length>0&&Ii(ue,K,le),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function Si(w,K,le,ae){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[ae.id]===void 0){const Pe=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[ae.id]=new ra(1,1,{generateMipmaps:!0,type:Pe?Pa:vi,minFilter:Zs,samples:Math.max(4,Ft.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}const he=B.state.transmissionRenderTarget[ae.id],ue=ae.viewport||oe;he.setSize(ue.z*q.transmissionResolutionScale,ue.w*q.transmissionResolutionScale);const ne=q.getRenderTarget(),Ne=q.getActiveCubeFace(),Be=q.getActiveMipmapLevel();q.setRenderTarget(he),q.getClearColor(P),J=q.getClearAlpha(),J<1&&q.setClearColor(16777215,.5),q.clear(),Kt&&Ve.render(le);const be=q.toneMapping;q.toneMapping=sa;const $e=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),B.setupLightsView(ae),Xt===!0&&je.setGlobalState(q.clippingPlanes,ae),Ii(w,le,ae),E.updateMultisampleRenderTarget(he),E.updateRenderTargetMipmap(he),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let ct=0,ht=K.length;ct<ht;ct++){const Je=K[ct],{object:Ye,geometry:Ze,material:xe,group:ze}=Je;if(xe.side===Li&&Ye.layers.test(ae.layers)){const ge=xe.side;xe.side=si,xe.needsUpdate=!0,Es(Ye,le,ae,Ze,xe,ze),xe.side=ge,xe.needsUpdate=!0,Pe=!0}}Pe===!0&&(E.updateMultisampleRenderTarget(he),E.updateRenderTargetMipmap(he))}q.setRenderTarget(ne,Ne,Be),q.setClearColor(P,J),$e!==void 0&&(ae.viewport=$e),q.toneMapping=be}function Ii(w,K,le){const ae=K.isScene===!0?K.overrideMaterial:null;for(let A=0,he=w.length;A<he;A++){const ue=w[A],{object:ne,geometry:Ne,group:Be}=ue;let be=ue.material;be.allowOverride===!0&&ae!==null&&(be=ae),ne.layers.test(le.layers)&&Es(ne,K,le,Ne,be,Be)}}function Es(w,K,le,ae,A,he){w.onBeforeRender(q,K,le,ae,A,he),w.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),A.onBeforeRender(q,K,le,ae,w,he),A.transparent===!0&&A.side===Li&&A.forceSinglePass===!1?(A.side=si,A.needsUpdate=!0,q.renderBufferDirect(le,K,ae,A,w,he),A.side=Ss,A.needsUpdate=!0,q.renderBufferDirect(le,K,ae,A,w,he),A.side=Li):q.renderBufferDirect(le,K,ae,A,w,he),w.onAfterRender(q,K,le,ae,A,he)}function ca(w,K,le){K.isScene!==!0&&(K=dn);const ae=U.get(w),A=B.state.lights,he=B.state.shadowsArray,ue=A.state.version,ne=Xe.getParameters(w,A.state,he,K,le,B.state.lightProbeGridArray),Ne=Xe.getProgramCacheKey(ne);let Be=ae.programs;ae.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?K.environment:null,ae.fog=K.fog;const be=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ae.envMap=te.get(w.envMap||ae.environment,be),ae.envMapRotation=ae.environment!==null&&w.envMap===null?K.environmentRotation:w.envMapRotation,Be===void 0&&(w.addEventListener("dispose",an),Be=new Map,ae.programs=Be);let $e=Be.get(Ne);if($e!==void 0){if(ae.currentProgram===$e&&ae.lightsStateVersion===ue)return zi(w,ne),$e}else ne.uniforms=Xe.getUniforms(w),j!==null&&w.isNodeMaterial&&j.build(w,le,ne),w.onBeforeCompile(ne,q),$e=Xe.acquireProgram(ne,Ne),Be.set(Ne,$e),ae.uniforms=ne.uniforms;const Pe=ae.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pe.clippingPlanes=je.uniform),zi(w,ne),ae.needsLights=ua(w),ae.lightsStateVersion=ue,ae.needsLights&&(Pe.ambientLightColor.value=A.state.ambient,Pe.lightProbe.value=A.state.probe,Pe.directionalLights.value=A.state.directional,Pe.directionalLightShadows.value=A.state.directionalShadow,Pe.spotLights.value=A.state.spot,Pe.spotLightShadows.value=A.state.spotShadow,Pe.rectAreaLights.value=A.state.rectArea,Pe.ltc_1.value=A.state.rectAreaLTC1,Pe.ltc_2.value=A.state.rectAreaLTC2,Pe.pointLights.value=A.state.point,Pe.pointLightShadows.value=A.state.pointShadow,Pe.hemisphereLights.value=A.state.hemi,Pe.directionalShadowMatrix.value=A.state.directionalShadowMatrix,Pe.spotLightMatrix.value=A.state.spotLightMatrix,Pe.spotLightMap.value=A.state.spotLightMap,Pe.pointShadowMatrix.value=A.state.pointShadowMatrix),ae.lightProbeGrid=B.state.lightProbeGridArray.length>0,ae.currentProgram=$e,ae.uniformsList=null,$e}function Ga(w){if(w.uniformsList===null){const K=w.currentProgram.getUniforms();w.uniformsList=du.seqWithValue(K.seq,w.uniforms)}return w.uniformsList}function zi(w,K){const le=U.get(w);le.outputColorSpace=K.outputColorSpace,le.batching=K.batching,le.batchingColor=K.batchingColor,le.instancing=K.instancing,le.instancingColor=K.instancingColor,le.instancingMorph=K.instancingMorph,le.skinning=K.skinning,le.morphTargets=K.morphTargets,le.morphNormals=K.morphNormals,le.morphColors=K.morphColors,le.morphTargetsCount=K.morphTargetsCount,le.numClippingPlanes=K.numClippingPlanes,le.numIntersection=K.numClipIntersection,le.vertexAlphas=K.vertexAlphas,le.vertexTangents=K.vertexTangents,le.toneMapping=K.toneMapping}function Ha(w,K){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;I.setFromMatrixPosition(K.matrixWorld);for(let le=0,ae=w.length;le<ae;le++){const A=w[le];if(A.texture!==null&&A.boundingBox.containsPoint(I))return A}return null}function oi(w,K,le,ae,A){K.isScene!==!0&&(K=dn),E.resetTextureUnits();const he=K.fog,ue=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?K.environment:null,ne=Y===null?q.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Pt.workingColorSpace,Ne=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,Be=te.get(ae.envMap||ue,Ne),be=ae.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,$e=!!le.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Pe=!!le.morphAttributes.position,ct=!!le.morphAttributes.normal,ht=!!le.morphAttributes.color;let Je=sa;ae.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Je=q.toneMapping);const Ye=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Ze=Ye!==void 0?Ye.length:0,xe=U.get(ae),ze=B.state.lights;if(Xt===!0&&(_t===!0||w!==G)){const Ht=w===G&&ae.id===N;je.setState(ae,w,Ht)}let ge=!1;ae.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==ze.state.version||xe.outputColorSpace!==ne||A.isBatchedMesh&&xe.batching===!1||!A.isBatchedMesh&&xe.batching===!0||A.isBatchedMesh&&xe.batchingColor===!0&&A.colorTexture===null||A.isBatchedMesh&&xe.batchingColor===!1&&A.colorTexture!==null||A.isInstancedMesh&&xe.instancing===!1||!A.isInstancedMesh&&xe.instancing===!0||A.isSkinnedMesh&&xe.skinning===!1||!A.isSkinnedMesh&&xe.skinning===!0||A.isInstancedMesh&&xe.instancingColor===!0&&A.instanceColor===null||A.isInstancedMesh&&xe.instancingColor===!1&&A.instanceColor!==null||A.isInstancedMesh&&xe.instancingMorph===!0&&A.morphTexture===null||A.isInstancedMesh&&xe.instancingMorph===!1&&A.morphTexture!==null||xe.envMap!==Be||ae.fog===!0&&xe.fog!==he||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==je.numPlanes||xe.numIntersection!==je.numIntersection)||xe.vertexAlphas!==be||xe.vertexTangents!==$e||xe.morphTargets!==Pe||xe.morphNormals!==ct||xe.morphColors!==ht||xe.toneMapping!==Je||xe.morphTargetsCount!==Ze||!!xe.lightProbeGrid!=B.state.lightProbeGridArray.length>0)&&(ge=!0):(ge=!0,xe.__version=ae.version);let Ke=xe.currentProgram;ge===!0&&(Ke=ca(ae,K,A),j&&ae.isNodeMaterial&&j.onUpdateProgram(ae,Ke,xe));let gt=!1,st=!1,At=!1;const vt=Ke.getUniforms(),Yt=xe.uniforms;if(Fe.useProgram(Ke.program)&&(gt=!0,st=!0,At=!0),ae.id!==N&&(N=ae.id,st=!0),xe.needsLights){const Ht=Ha(B.state.lightProbeGridArray,A);xe.lightProbeGrid!==Ht&&(xe.lightProbeGrid=Ht,st=!0)}if(gt||G!==w){Fe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),vt.setValue(Z,"projectionMatrix",w.projectionMatrix),vt.setValue(Z,"viewMatrix",w.matrixWorldInverse);const Mi=vt.map.cameraPosition;Mi!==void 0&&Mi.setValue(Z,Bt.setFromMatrixPosition(w.matrixWorld)),Ft.logarithmicDepthBuffer&&vt.setValue(Z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&vt.setValue(Z,"isOrthographic",w.isOrthographicCamera===!0),G!==w&&(G=w,st=!0,At=!0)}if(xe.needsLights&&(ze.state.directionalShadowMap.length>0&&vt.setValue(Z,"directionalShadowMap",ze.state.directionalShadowMap,E),ze.state.spotShadowMap.length>0&&vt.setValue(Z,"spotShadowMap",ze.state.spotShadowMap,E),ze.state.pointShadowMap.length>0&&vt.setValue(Z,"pointShadowMap",ze.state.pointShadowMap,E)),A.isSkinnedMesh){vt.setOptional(Z,A,"bindMatrix"),vt.setOptional(Z,A,"bindMatrixInverse");const Ht=A.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),vt.setValue(Z,"boneTexture",Ht.boneTexture,E))}A.isBatchedMesh&&(vt.setOptional(Z,A,"batchingTexture"),vt.setValue(Z,"batchingTexture",A._matricesTexture,E),vt.setOptional(Z,A,"batchingIdTexture"),vt.setValue(Z,"batchingIdTexture",A._indirectTexture,E),vt.setOptional(Z,A,"batchingColorTexture"),A._colorsTexture!==null&&vt.setValue(Z,"batchingColorTexture",A._colorsTexture,E));const Sn=le.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&Oe.update(A,le,Ke),(st||xe.receiveShadow!==A.receiveShadow)&&(xe.receiveShadow=A.receiveShadow,vt.setValue(Z,"receiveShadow",A.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&K.environment!==null&&(Yt.envMapIntensity.value=K.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=yw()),st){if(vt.setValue(Z,"toneMappingExposure",q.toneMappingExposure),xe.needsLights&&li(Yt,At),he&&ae.fog===!0&&pe.refreshFogUniforms(Yt,he),pe.refreshMaterialUniforms(Yt,ae,Te,Re,B.state.transmissionRenderTarget[w.id]),xe.needsLights&&xe.lightProbeGrid){const Ht=xe.lightProbeGrid;Yt.probesSH.value=Ht.texture,Yt.probesMin.value.copy(Ht.boundingBox.min),Yt.probesMax.value.copy(Ht.boundingBox.max),Yt.probesResolution.value.copy(Ht.resolution)}du.upload(Z,Ga(xe),Yt,E)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(du.upload(Z,Ga(xe),Yt,E),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&vt.setValue(Z,"center",A.center),vt.setValue(Z,"modelViewMatrix",A.modelViewMatrix),vt.setValue(Z,"normalMatrix",A.normalMatrix),vt.setValue(Z,"modelMatrix",A.matrixWorld),ae.uniformsGroups!==void 0){const Ht=ae.uniformsGroups;for(let Mi=0,Va=Ht.length;Mi<Va;Mi++){const As=Ht[Mi];ye.update(As,Ke),ye.bind(As,Ke)}}return Ke}function li(w,K){w.ambientLightColor.needsUpdate=K,w.lightProbe.needsUpdate=K,w.directionalLights.needsUpdate=K,w.directionalLightShadows.needsUpdate=K,w.pointLights.needsUpdate=K,w.pointLightShadows.needsUpdate=K,w.spotLights.needsUpdate=K,w.spotLightShadows.needsUpdate=K,w.rectAreaLights.needsUpdate=K,w.hemisphereLights.needsUpdate=K}function ua(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return fe},this.getActiveMipmapLevel=function(){return me},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(w,K,le){const ae=U.get(w);ae.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),U.get(w.texture).__webglTexture=K,U.get(w.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:le,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,K){const le=U.get(w);le.__webglFramebuffer=K,le.__useDefaultFramebuffer=K===void 0};const Pi=Z.createFramebuffer();this.setRenderTarget=function(w,K=0,le=0){Y=w,fe=K,me=le;let ae=null,A=!1,he=!1;if(w){const ne=U.get(w);if(ne.__useDefaultFramebuffer!==void 0){Fe.bindFramebuffer(Z.FRAMEBUFFER,ne.__webglFramebuffer),oe.copy(w.viewport),ve.copy(w.scissor),Ae=w.scissorTest,Fe.viewport(oe),Fe.scissor(ve),Fe.setScissorTest(Ae),N=-1;return}else if(ne.__webglFramebuffer===void 0)E.setupRenderTarget(w);else if(ne.__hasExternalTextures)E.rebindTextures(w,U.get(w.texture).__webglTexture,U.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const be=w.depthTexture;if(ne.__boundDepthTexture!==be){if(be!==null&&U.has(be)&&(w.width!==be.image.width||w.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(w)}}const Ne=w.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(he=!0);const Be=U.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Be[K])?ae=Be[K][le]:ae=Be[K],A=!0):w.samples>0&&E.useMultisampledRTT(w)===!1?ae=U.get(w).__webglMultisampledFramebuffer:Array.isArray(Be)?ae=Be[le]:ae=Be,oe.copy(w.viewport),ve.copy(w.scissor),Ae=w.scissorTest}else oe.copy(Ce).multiplyScalar(Te).floor(),ve.copy(tt).multiplyScalar(Te).floor(),Ae=ft;if(le!==0&&(ae=Pi),Fe.bindFramebuffer(Z.FRAMEBUFFER,ae)&&Fe.drawBuffers(w,ae),Fe.viewport(oe),Fe.scissor(ve),Fe.setScissorTest(Ae),A){const ne=U.get(w.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+K,ne.__webglTexture,le)}else if(he){const ne=K;for(let Ne=0;Ne<w.textures.length;Ne++){const Be=U.get(w.textures[Ne]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+Ne,Be.__webglTexture,le,ne)}}else if(w!==null&&le!==0){const ne=U.get(w.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,ne.__webglTexture,le)}N=-1},this.readRenderTargetPixels=function(w,K,le,ae,A,he,ue,ne=0){if(!(w&&w.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=U.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ue!==void 0&&(Ne=Ne[ue]),Ne){Fe.bindFramebuffer(Z.FRAMEBUFFER,Ne);try{const Be=w.textures[ne],be=Be.format,$e=Be.type;if(w.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+ne),!Ft.textureFormatReadable(be)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable($e)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=w.width-ae&&le>=0&&le<=w.height-A&&Z.readPixels(K,le,ae,A,z.convert(be),z.convert($e),he)}finally{const Be=Y!==null?U.get(Y).__webglFramebuffer:null;Fe.bindFramebuffer(Z.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(w,K,le,ae,A,he,ue,ne=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=U.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ue!==void 0&&(Ne=Ne[ue]),Ne)if(K>=0&&K<=w.width-ae&&le>=0&&le<=w.height-A){Fe.bindFramebuffer(Z.FRAMEBUFFER,Ne);const Be=w.textures[ne],be=Be.format,$e=Be.type;if(w.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+ne),!Ft.textureFormatReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pe=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Pe),Z.bufferData(Z.PIXEL_PACK_BUFFER,he.byteLength,Z.STREAM_READ),Z.readPixels(K,le,ae,A,z.convert(be),z.convert($e),0);const ct=Y!==null?U.get(Y).__webglFramebuffer:null;Fe.bindFramebuffer(Z.FRAMEBUFFER,ct);const ht=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await vM(Z,ht,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Pe),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,he),Z.deleteBuffer(Pe),Z.deleteSync(ht),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,K=null,le=0){const ae=Math.pow(2,-le),A=Math.floor(w.image.width*ae),he=Math.floor(w.image.height*ae),ue=K!==null?K.x:0,ne=K!==null?K.y:0;E.setTexture2D(w,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,le,0,0,ue,ne,A,he),Fe.unbindTexture()};const pn=Z.createFramebuffer(),Ts=Z.createFramebuffer();this.copyTextureToTexture=function(w,K,le=null,ae=null,A=0,he=0){let ue,ne,Ne,Be,be,$e,Pe,ct,ht;const Je=w.isCompressedTexture?w.mipmaps[he]:w.image;if(le!==null)ue=le.max.x-le.min.x,ne=le.max.y-le.min.y,Ne=le.isBox3?le.max.z-le.min.z:1,Be=le.min.x,be=le.min.y,$e=le.isBox3?le.min.z:0;else{const Yt=Math.pow(2,-A);ue=Math.floor(Je.width*Yt),ne=Math.floor(Je.height*Yt),w.isDataArrayTexture?Ne=Je.depth:w.isData3DTexture?Ne=Math.floor(Je.depth*Yt):Ne=1,Be=0,be=0,$e=0}ae!==null?(Pe=ae.x,ct=ae.y,ht=ae.z):(Pe=0,ct=0,ht=0);const Ye=z.convert(K.format),Ze=z.convert(K.type);let xe;K.isData3DTexture?(E.setTexture3D(K,0),xe=Z.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(E.setTexture2DArray(K,0),xe=Z.TEXTURE_2D_ARRAY):(E.setTexture2D(K,0),xe=Z.TEXTURE_2D),Fe.activeTexture(Z.TEXTURE0),Fe.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,K.flipY),Fe.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),Fe.pixelStorei(Z.UNPACK_ALIGNMENT,K.unpackAlignment);const ze=Fe.getParameter(Z.UNPACK_ROW_LENGTH),ge=Fe.getParameter(Z.UNPACK_IMAGE_HEIGHT),Ke=Fe.getParameter(Z.UNPACK_SKIP_PIXELS),gt=Fe.getParameter(Z.UNPACK_SKIP_ROWS),st=Fe.getParameter(Z.UNPACK_SKIP_IMAGES);Fe.pixelStorei(Z.UNPACK_ROW_LENGTH,Je.width),Fe.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Je.height),Fe.pixelStorei(Z.UNPACK_SKIP_PIXELS,Be),Fe.pixelStorei(Z.UNPACK_SKIP_ROWS,be),Fe.pixelStorei(Z.UNPACK_SKIP_IMAGES,$e);const At=w.isDataArrayTexture||w.isData3DTexture,vt=K.isDataArrayTexture||K.isData3DTexture;if(w.isDepthTexture){const Yt=U.get(w),Sn=U.get(K),Ht=U.get(Yt.__renderTarget),Mi=U.get(Sn.__renderTarget);Fe.bindFramebuffer(Z.READ_FRAMEBUFFER,Ht.__webglFramebuffer),Fe.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let Va=0;Va<Ne;Va++)At&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,U.get(w).__webglTexture,A,$e+Va),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,U.get(K).__webglTexture,he,ht+Va)),Z.blitFramebuffer(Be,be,ue,ne,Pe,ct,ue,ne,Z.DEPTH_BUFFER_BIT,Z.NEAREST);Fe.bindFramebuffer(Z.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(A!==0||w.isRenderTargetTexture||U.has(w)){const Yt=U.get(w),Sn=U.get(K);Fe.bindFramebuffer(Z.READ_FRAMEBUFFER,pn),Fe.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Ts);for(let Ht=0;Ht<Ne;Ht++)At?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Yt.__webglTexture,A,$e+Ht):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Yt.__webglTexture,A),vt?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Sn.__webglTexture,he,ht+Ht):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Sn.__webglTexture,he),A!==0?Z.blitFramebuffer(Be,be,ue,ne,Pe,ct,ue,ne,Z.COLOR_BUFFER_BIT,Z.NEAREST):vt?Z.copyTexSubImage3D(xe,he,Pe,ct,ht+Ht,Be,be,ue,ne):Z.copyTexSubImage2D(xe,he,Pe,ct,Be,be,ue,ne);Fe.bindFramebuffer(Z.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else vt?w.isDataTexture||w.isData3DTexture?Z.texSubImage3D(xe,he,Pe,ct,ht,ue,ne,Ne,Ye,Ze,Je.data):K.isCompressedArrayTexture?Z.compressedTexSubImage3D(xe,he,Pe,ct,ht,ue,ne,Ne,Ye,Je.data):Z.texSubImage3D(xe,he,Pe,ct,ht,ue,ne,Ne,Ye,Ze,Je):w.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,he,Pe,ct,ue,ne,Ye,Ze,Je.data):w.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,he,Pe,ct,Je.width,Je.height,Ye,Je.data):Z.texSubImage2D(Z.TEXTURE_2D,he,Pe,ct,ue,ne,Ye,Ze,Je);Fe.pixelStorei(Z.UNPACK_ROW_LENGTH,ze),Fe.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,ge),Fe.pixelStorei(Z.UNPACK_SKIP_PIXELS,Ke),Fe.pixelStorei(Z.UNPACK_SKIP_ROWS,gt),Fe.pixelStorei(Z.UNPACK_SKIP_IMAGES,st),he===0&&K.generateMipmaps&&Z.generateMipmap(xe),Fe.unbindTexture()},this.initRenderTarget=function(w){U.get(w).__webglFramebuffer===void 0&&E.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),Fe.unbindTexture()},this.resetState=function(){fe=0,me=0,Y=null,Fe.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Pt._getUnpackColorSpace()}}const Tv={startingPoints:500,bulletHit:10,zombieKill:60,headshotKill:100,knifeKill:130,repairBarricade:10};Object.freeze(Tv);class Mw{constructor(e=Tv){this.config={...e},this.players=new Map,this.listeners=new Set}setConfig(e){this.config={...this.config,...e}}getConfig(){return{...this.config}}registerPlayer(e){const n={playerId:e,currentPoints:this.config.startingPoints,totalEarned:this.config.startingPoints,totalSpent:0,lastUpdated:Date.now()};return this.players.set(e,n),this.notifyListeners(e,{success:!0,previousPoints:0,newPoints:n.currentPoints,amountChanged:this.config.startingPoints,reason:"starting_bonus"}),n}hasPlayer(e){return this.players.has(e)}getPlayerState(e){const n=this.players.get(e);return n?{...n}:void 0}getPoints(e){var n;return((n=this.players.get(e))==null?void 0:n.currentPoints)??0}removePlayer(e){return this.players.delete(e)}getAllPlayerIds(){return Array.from(this.players.keys())}canAfford(e,n){const a=this.players.get(e);return a?a.currentPoints>=n:!1}getMaxAffordableAmount(e){var n;return((n=this.players.get(e))==null?void 0:n.currentPoints)??0}addBulletHit(e){return this.addPoints(e,this.config.bulletHit,"bullet_hit")}addZombieKill(e){return this.addPoints(e,this.config.zombieKill,"zombie_kill")}addHeadshotKill(e){return this.addPoints(e,this.config.headshotKill,"headshot_kill")}addKnifeKill(e){return this.addPoints(e,this.config.knifeKill,"knife_kill")}addRepairBarricade(e){return this.addPoints(e,this.config.repairBarricade,"repair_barricade")}addPoints(e,n,a){const o=this.players.get(e);if(!o)return null;if(n<=0)return{success:!1,previousPoints:o.currentPoints,newPoints:o.currentPoints,amountChanged:0,reason:a};const c=o.currentPoints;o.currentPoints+=n,o.totalEarned+=n,o.lastUpdated=Date.now();const u={success:!0,previousPoints:c,newPoints:o.currentPoints,amountChanged:n,reason:a};return this.notifyListeners(e,u),u}spendPoints(e,n,a){const o=this.players.get(e);if(!o)return null;if(n<=0)return{success:!1,previousPoints:o.currentPoints,newPoints:o.currentPoints,amountChanged:0,reason:"purchase"};if(o.currentPoints<n)return{success:!1,previousPoints:o.currentPoints,newPoints:o.currentPoints,amountChanged:0,reason:"purchase"};const c=o.currentPoints;o.currentPoints-=n,o.totalSpent+=n,o.lastUpdated=Date.now();const u={success:!0,previousPoints:c,newPoints:o.currentPoints,amountChanged:-n,reason:"purchase"};return this.notifyListeners(e,u),u}adjustPoints(e,n,a="manual_adjustment"){const o=this.players.get(e);if(!o)return null;const c=o.currentPoints;let u=n;c+n<0&&(u=-c),o.currentPoints+=u,u>0?o.totalEarned+=u:o.totalSpent+=Math.abs(u),o.lastUpdated=Date.now();const h={success:!0,previousPoints:c,newPoints:o.currentPoints,amountChanged:u,reason:a};return this.notifyListeners(e,h),h}subscribe(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}notifyListeners(e,n){this.listeners.forEach(a=>{try{a(e,n)}catch(o){console.error("Error in points change listener:",o)}})}serializePlayer(e){const n=this.players.get(e);return n?{playerId:n.playerId,currentPoints:n.currentPoints,totalEarned:n.totalEarned,totalSpent:n.totalSpent,savedAt:Date.now(),version:"1.0.0"}:null}deserializePlayer(e){const n={playerId:e.playerId,currentPoints:Math.max(0,e.currentPoints),totalEarned:e.totalEarned,totalSpent:e.totalSpent,lastUpdated:e.savedAt};return this.players.set(n.playerId,n),n}exportAllPlayers(){return Array.from(this.players.values()).map(e=>({playerId:e.playerId,currentPoints:e.currentPoints,totalEarned:e.totalEarned,totalSpent:e.totalSpent,savedAt:e.lastUpdated,version:"1.0.0"}))}importAllPlayers(e){e.forEach(n=>{this.deserializePlayer(n)})}getPlayerStats(e){const n=this.players.get(e);return n?{currentPoints:n.currentPoints,totalEarned:n.totalEarned,totalSpent:n.totalSpent,netGain:n.totalEarned-n.totalSpent}:null}}let yh=null;function xp(){return yh||(yh=new Mw),yh}class bw{constructor(){this.ctx=null}init(){this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext)),this.ctx.state==="suspended"&&this.ctx.resume()}playClick(){try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),a=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(1200,e),n.frequency.exponentialRampToValueAtTime(150,e+.05),a.gain.setValueAtTime(.08,e),a.gain.exponentialRampToValueAtTime(.01,e+.05),n.connect(a),a.connect(this.ctx.destination),n.start(e),n.stop(e+.06)}catch(e){console.warn("Audio click play failed",e)}}playUnlock(){try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime;[261.63,329.63,392,523.25].forEach((a,o)=>{const c=this.ctx.createOscillator(),u=this.ctx.createGain();c.type="sine",c.frequency.setValueAtTime(a,e+o*.08),u.gain.setValueAtTime(0,e),u.gain.linearRampToValueAtTime(.08,e+o*.08+.02),u.gain.exponentialRampToValueAtTime(.01,e+o*.08+.25),c.connect(u),u.connect(this.ctx.destination),c.start(e+o*.08),c.stop(e+o*.08+.3)})}catch(e){console.warn("Audio unlock play failed",e)}}playDenied(){try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),a=this.ctx.createOscillator(),o=this.ctx.createGain();n.type="sawtooth",a.type="sawtooth",n.frequency.setValueAtTime(100,e),a.frequency.setValueAtTime(98,e),o.gain.setValueAtTime(.12,e),o.gain.exponentialRampToValueAtTime(.01,e+.25),n.connect(o),a.connect(o),o.connect(this.ctx.destination),n.start(e),a.start(e),n.stop(e+.26),a.stop(e+.26)}catch(e){console.warn("Audio denied play failed",e)}}playPoints(){try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),a=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(880,e),n.frequency.exponentialRampToValueAtTime(1760,e+.08),a.gain.setValueAtTime(.04,e),a.gain.exponentialRampToValueAtTime(.005,e+.1),n.connect(a),a.connect(this.ctx.destination),n.start(e),n.stop(e+.11)}catch(e){console.warn("Audio points play failed",e)}}playRumble(){try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),a=this.ctx.createOscillator(),o=this.ctx.createGain(),c=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(55,e),a.type="sine",a.frequency.setValueAtTime(2.5,e),o.gain.setValueAtTime(15,e),c.gain.setValueAtTime(.05,e),a.connect(o),o.connect(n.frequency),n.connect(c),c.connect(this.ctx.destination),a.start(e),n.start(e)}catch{}}playDoorPurchase(){this.playUnlock()}}const Kr=new bw;function Ew(r){switch(r){case"click":Kr.playClick();break;case"unlock":Kr.playUnlock();break;case"door_purchase":Kr.playDoorPurchase();break;case"denied":Kr.playDenied();break;case"points":Kr.playPoints();break;case"rumble":Kr.playRumble();break;default:console.warn(`Unknown sound: ${r}`)}}const Tw={maxInteractionDistance:4,interactionAngleThreshold:30},vp=[{id:"starter_classroom_door",name:"Starter Classroom Door",cost:750,position:{x:0,y:1.5,z:-10},width:6,height:3,connectedRoomId:"hallway",isOpen:!1},{id:"hallway_science_lab_door",name:"Science Lab Door",cost:1e3,position:{x:5,y:1.5,z:4},width:6,height:3,connectedRoomId:"science_lab",isOpen:!1},{id:"hallway_library_door",name:"Library Door",cost:1e3,position:{x:40,y:1.5,z:4},width:6,height:3,connectedRoomId:"library",isOpen:!1},{id:"hallway_cafeteria_door",name:"Cafeteria Entrance",cost:1250,position:{x:-20,y:1.5,z:-3},width:14,height:3,connectedRoomId:"cafeteria",isOpen:!1}];class Aw{constructor(e={}){this.currentInteractedDoor=null,this.doors=new Map,this.eventCallbacks=new Map,(e.doors??vp).forEach(a=>{this.addDoor(a)}),this.interactionConfig={...Tw,...e.interactionConfig??{}}}on(e,n){return this.eventCallbacks.has(e)||this.eventCallbacks.set(e,new Set),this.eventCallbacks.get(e).add(n),()=>{const a=this.eventCallbacks.get(e);a&&a.delete(n)}}notifyEvent(e){const n=this.eventCallbacks.get(e.type);n&&n.forEach(a=>{try{a(e)}catch(o){console.error("Error in door event listener:",o)}})}addDoor(e){if(this.doors.has(e.id))return console.warn(`Door with id '${e.id}' already exists`),this.doors.get(e.id);const n={...e,isOpen:!1};return this.doors.set(n.id,n),n}removeDoor(e){return this.doors.delete(e)}getDoor(e){return this.doors.get(e)}getAllDoors(){return Array.from(this.doors.values())}getClosedDoors(){return this.getAllDoors().filter(e=>!e.isOpen)}getDoorAtPosition(e,n,a,o=1){for(const c of this.doors.values()){const u=c.position.x-e,h=c.position.y-n,m=c.position.z-a;if(Math.sqrt(u*u+h*h+m*m)<=o)return c}}getLookedAtDoor(e,n){let a=null,o=this.interactionConfig.maxInteractionDistance;for(const c of this.doors.values()){if(c.isOpen)continue;const u={x:c.position.x-e.x,y:c.position.y-e.y,z:c.position.z-e.z},h=Math.sqrt(u.x**2+u.y**2+u.z**2);if(h>this.interactionConfig.maxInteractionDistance)continue;const m={x:u.x/h,y:u.y/h,z:u.z/h},p=n.x*m.x+n.y*m.y+n.z*m.z;Math.acos(Math.max(-1,Math.min(1,p)))*(180/Math.PI)<=this.interactionConfig.interactionAngleThreshold&&h<o&&(o=h,a=c)}return a}updateInteraction(e,n){const a=this.getLookedAtDoor(e,n);if(a&&console.log(`[Door] Player in range of: ${a.name} at (${e.x.toFixed(1)}, ${e.y.toFixed(1)}, ${e.z.toFixed(1)})`),a)return this.currentInteractedDoor!==a.id&&(this.currentInteractedDoor=a.id,this.notifyEvent({type:"interactionStart",doorId:a.id,doorName:a.name,timestamp:Date.now()}),console.log(`[Door] Detected: ${a.name} (${a.cost} points)`)),a.id;if(this.currentInteractedDoor!==null){const o=this.currentInteractedDoor,c=this.doors.get(o);this.currentInteractedDoor=null,c&&this.notifyEvent({type:"interactionEnd",doorId:o,doorName:c.name,timestamp:Date.now()})}return null}getCurrentInteractedDoor(){return this.currentInteractedDoor&&this.doors.get(this.currentInteractedDoor)||null}purchaseDoor(e,n){const a=this.doors.get(e);if(!a)return console.log("[Door] Door not found:",e),{success:!1,doorId:e,reason:"Door not found"};if(a.isOpen)return console.log("[Door] Door already open:",a.name),{success:!1,doorId:e,reason:"Door already open"};const o=xp();if(!o.canAfford(n,a.cost)){const u=o.getPoints(n);return console.log("[Door] Not enough points:",{door:a.name,cost:a.cost,playerPoints:u}),this.notifyEvent({type:"purchaseAttempt",doorId:e,doorName:a.name,playerId:n,timestamp:Date.now()}),{success:!1,doorId:e,reason:"Not enough points",previousPoints:u}}const c=o.spendPoints(n,a.cost,`Door: ${a.name}`);if(!c||!c.success)return console.log("[Door] Failed to spend points"),{success:!1,doorId:e,reason:"Failed to process payment"};a.isOpen=!0,console.log("[Door] Purchased:",{door:a.name,cost:a.cost,playerPoints:c.newPoints});try{Ew("door_purchase")}catch{console.log("[Door] Sound placeholder: door_purchase")}return this.notifyEvent({type:"doorOpened",doorId:e,doorName:a.name,playerId:n,timestamp:Date.now()}),{success:!0,doorId:e,previousPoints:c.previousPoints,newPoints:c.newPoints}}getInteractionPrompt(e,n){if(e.isOpen)return{show:!1,text:"",canAfford:!0};const o=xp().canAfford(n,e.cost);return{show:!0,text:o?`Press E to Open Door (${e.cost})`:"Not Enough Points",canAfford:o}}exportDoors(){return this.getAllDoors().map(e=>({id:e.id,name:e.name,cost:e.cost,position:e.position,width:e.width,height:e.height,connectedRoomId:e.connectedRoomId,isOpen:e.isOpen}))}importDoors(e){e.forEach(n=>{if(this.doors.has(n.id)){const a=this.doors.get(n.id);a.isOpen=n.isOpen}else this.addDoor(n)})}resetDoors(){this.doors.forEach(e=>{e.isOpen=!1}),this.currentInteractedDoor=null}destroy(){this.doors.clear(),this.eventCallbacks.clear(),this.currentInteractedDoor=null}}const Sh=new Map;function hl(r="default"){return Sh.has(r)||Sh.set(r,new Aw),Sh.get(r)}function ww(){const r=hl();console.log(`[DoorSystem] Initialized with ${r.getAllDoors().length} door(s)`)}class Rw{constructor(e){this.doorMeshes=new Map,this.labelMeshes=new Map,this.scene=e,this.material=new _b({color:9127187,roughness:.8,metalness:.1,side:Li}),this.labelTextMaterial=new pp({color:16777215,transparent:!0,opacity:1})}initialize(){const n=hl().getAllDoors();console.log("========================================"),console.log("[DoorRenderer] Initializing doors..."),console.log(`[DoorRenderer] Total doors in DoorManager: ${n.length}`),console.log(`[DoorRenderer] Total doors in DEFAULT_DOORS: ${vp.length}`),console.log("----------------------------------------"),console.log("[DoorRenderer] Expected doors from DEFAULT_DOORS:"),vp.forEach(a=>{console.log(`  - ${a.id}: (${a.position.x}, ${a.position.y}, ${a.position.z})`)}),console.log("----------------------------------------"),n.forEach(a=>{this.spawnDoorMesh(a)}),console.log("========================================"),console.log("[DoorRenderer] Initialization complete."),console.log(`[DoorRenderer] Door meshes spawned: ${this.doorMeshes.size}`),console.log(`[DoorRenderer] Label meshes spawned: ${this.labelMeshes.size}`),console.log("========================================")}spawnDoorMesh(e){if(this.doorMeshes.has(e.id)){console.warn(`[DoorRenderer] Door mesh already exists for ID: ${e.id}`);return}const{x:n,y:a,z:o}=e.position,c=new cn(e.width,e.height,.2),u=new nn(c,this.material);u.position.set(n,a,o),this.scene.add(u),this.doorMeshes.set(e.id,u);const h=`${e.id}
(${n.toFixed(1)}, ${a.toFixed(1)}, ${o.toFixed(1)})`,m=this.createTextLabel(h);m.position.set(n,a+e.height/2+.5,o),m.scale.set(4,1.5,1),this.scene.add(m),this.labelMeshes.set(e.id,m),console.log("[DoorRenderer] ✅ Door spawned:"),console.log(`    - ID: ${e.id}`),console.log(`    - Name: ${e.name}`),console.log(`    - Position: (${n.toFixed(2)}, ${a.toFixed(2)}, ${o.toFixed(2)})`),console.log(`    - Size: ${e.width.toFixed(2)} x ${e.height.toFixed(2)} x 0.20`),console.log(`    - Label: "${h}"`)}createTextLabel(e){const n=document.createElement("canvas"),a=n.getContext("2d");if(!a)throw new Error("Failed to get 2D context for door label");n.width=512,n.height=256,a.clearRect(0,0,n.width,n.height),a.fillStyle="rgba(0, 0, 0, 0.7)",a.fillRect(0,0,n.width,n.height),a.font="Bold 42px Arial",a.fillStyle="white",a.textAlign="center",a.textBaseline="middle";const o=e.split(`
`),c=50,u=o.length*c,h=(n.height-u)/2+c/2;o.forEach((_,x)=>{a.fillText(_,n.width/2,h+x*c)});const m=new fv(n),p=new pp({map:m,transparent:!0,opacity:1});return new ib(p)}updateDoorState(e,n){const a=this.doorMeshes.get(e);if(!a){console.warn(`[DoorRenderer] Cannot update state for unknown door ID: ${e}`);return}a.visible=!n;const o=this.labelMeshes.get(e);o&&(o.visible=!n),console.log(n?`[DoorRenderer] Door ${e} opened - mesh and label hidden`:`[DoorRenderer] Door ${e} closed - mesh and label visible`)}removeDoor(e){const n=this.doorMeshes.get(e);n&&(this.scene.remove(n),n.geometry.dispose(),this.doorMeshes.delete(e));const a=this.labelMeshes.get(e);a&&(this.scene.remove(a),a.material.map&&a.material.map.dispose(),a.material.dispose(),this.labelMeshes.delete(e)),console.log(`[DoorRenderer] Door ${e} removed from scene`)}getAllMeshes(){return new Map(this.doorMeshes)}getMesh(e){return this.doorMeshes.get(e)}destroy(){this.doorMeshes.forEach(e=>{this.scene.remove(e),e.geometry.dispose()}),this.doorMeshes.clear(),this.labelMeshes.forEach(e=>{this.scene.remove(e),e.material.map&&e.material.map.dispose(),e.material.dispose()}),this.labelMeshes.clear(),this.material.dispose(),console.log("[DoorRenderer] All door meshes and labels cleaned up")}}const Mh=new Map;function Cw(r,e){var a;Mh.has(r)&&(console.warn(`[DoorRenderer] Renderer already exists for session: ${r}. Destroying old instance.`),(a=Mh.get(r))==null||a.destroy());const n=new Rw(e);return Mh.set(r,n),n.initialize(),n}class Dw{constructor(){this.roomsData=[],this.roomGapsData={},this.doorsData=[],this.issues=[],this.currentIssueIndex=-1,this.scanTargetRoom=null}setData(e,n,a){this.roomsData=e.map(o=>({name:o.name||o.id,x:o.cx-o.w/2,y:o.floorY,z:o.cz-o.d/2,width:o.w,depth:o.d,height:o.h,doors:[],stairDirection:o.stairDirection})),this.roomGapsData={},Object.keys(n).forEach(o=>{const c=n[o];e.find(h=>h.id===o)&&c&&(this.roomGapsData[o]=c.map(h=>({side:h.side,offset:h.center,width:h.width})))}),this.doorsData=a,this.issues=[],this.currentIssueIndex=-1}enable(e){this.scanTargetRoom=e||null,this.runFullScan()}disable(){this.issues=[],this.currentIssueIndex=-1,this.scanTargetRoom=null}toggle(e){return this.issues.length>0&&!e?(this.disable(),!1):(this.enable(e),!0)}getIssues(){return this.issues}getCurrentIssue(){return this.issues.length===0||this.currentIssueIndex<0?null:this.issues[this.currentIssueIndex]}nextIssue(){return this.issues.length===0?null:(this.currentIssueIndex=(this.currentIssueIndex+1)%this.issues.length,this.getCurrentIssue())}runFullScan(){const e=performance.now();this.issues=[];for(const a of this.roomsData)this.scanTargetRoom&&a.name!==this.scanTargetRoom||this.checkRoomSeal(a);const n=performance.now();console.log(`[RoomSealValidator] Scan completed in ${(n-e).toFixed(2)}ms. Found ${this.issues.length} issues.`),this.issues.length===0&&!this.scanTargetRoom&&console.log("[RoomSealValidator] All playable rooms are properly sealed.")}checkRoomSeal(e){this.checkFloorEdges(e),this.checkWallConnections(e),this.checkStairwellIntegrity(e),this.checkDoorwayCoverage(e),this.checkRoomCorners(e)}checkFloorEdges(e){const n=this.roomGapsData[e.name]||[],a=e.width/2,o=e.depth/2,c=e.y;for(const u of n){let h;if(u.side==="S"||u.side==="N"){const m=u.side==="N"?e.z+o:e.z-o;h=[e.x+u.offset,c+.1,m]}else h=[u.side==="E"?e.x+a:e.x-a,c+.1,e.z+u.offset];u.width>3&&this.addIssue({id:`floor_${e.name}_${u.side}_${u.offset}`,type:"floor_gap",severity:"critical",roomName:e.name,location:h,description:"Large Floor Opening",details:`Gap of ${u.width.toFixed(2)}u on ${u.side} wall of ${e.name}`})}}checkWallConnections(e){const n=this.roomGapsData[e.name]||[],a=["N","S","E","W"];for(const o of a){const c=n.filter(u=>u.side===o);if(c.length===0){const u=this.getNeighborInDirection(e,o);if(!u)continue;Math.abs(e.height-u.height)>.5&&this.addIssue({id:`wall_height_${e.name}_${o}`,type:"wall_gap",severity:"medium",roomName:e.name,location:this.getWallCenter(e,o),description:"Wall Height Mismatch",details:`${e.name} wall (${e.height}u) does not match ${u.name} (${u.height}u)`})}else{c.sort((u,h)=>u.offset-h.offset);for(let u=0;u<c.length-1;u++){const h=c[u],m=c[u+1];h.offset+h.width/2>m.offset-m.width/2&&this.addIssue({id:`wall_overlap_${e.name}_${o}_${u}`,type:"wall_gap",severity:"high",roomName:e.name,location:this.getWallCenter(e,o),description:"Overlapping Openings",details:`Gaps on ${o} wall overlap, removing wall segment.`})}}}}checkStairwellIntegrity(e){if(!e.stairDirection)return;(e.width<2||e.depth<2)&&this.addIssue({id:`stair_small_${e.name}`,type:"stair_gap",severity:"high",roomName:e.name,location:[e.x,e.y+1,e.z],description:"Stairwell Too Narrow",details:`${e.name} stairwell dimensions (${e.width}x${e.depth}) are too small.`}),(this.roomGapsData[e.name]||[]).length===0&&this.addIssue({id:`stair_sealed_${e.name}`,type:"stair_gap",severity:"medium",roomName:e.name,location:[e.x,e.y+1,e.z],description:"Sealed Stairwell",details:`${e.name} has no doorways/gaps, may be inaccessible.`})}checkDoorwayCoverage(e){const n=this.roomGapsData[e.name]||[],a=this.doorsData.filter(o=>o.room===e.name);for(const o of n){const c=a.find(u=>u.side!==o.side?!1:Math.abs(u.offset-o.offset)<1);if(c){if(Math.abs(c.width-o.width)>.5){const u=this.getGapLocation(e,o);this.addIssue({id:`door_size_${e.name}_${o.side}_${o.offset}`,type:"door_gap",severity:"medium",roomName:e.name,location:u,description:"Door Size Mismatch",details:`Door width (${c.width}) does not match gap width (${o.width}).`})}}else{const u=this.getGapLocation(e,o);this.addIssue({id:`door_missing_${e.name}_${o.side}_${o.offset}`,type:"door_gap",severity:"high",roomName:e.name,location:u,description:"Uncovered Doorway",details:`Gap at ${o.side} offset ${o.offset} has no associated door.`})}}}checkRoomCorners(e){const n=[{x:e.x-e.width/2,z:e.z-e.depth/2,name:"SW"},{x:e.x+e.width/2,z:e.z-e.depth/2,name:"SE"},{x:e.x+e.width/2,z:e.z+e.depth/2,name:"NE"},{x:e.x-e.width/2,z:e.z+e.depth/2,name:"NW"}],a=this.roomGapsData[e.name]||[];for(const o of n){const c=[];Math.abs(o.z-(e.z-e.depth/2))<.1&&c.push("S"),Math.abs(o.z-(e.z+e.depth/2))<.1&&c.push("N"),Math.abs(o.x-(e.x-e.width/2))<.1&&c.push("W"),Math.abs(o.x-(e.x+e.width/2))<.1&&c.push("E");let u=!1;for(const h of c){const m=a.filter(p=>p.side===h);for(const p of m){const _=this.getDistanceToCorner(p,h,o,e);if(_>=0&&_<.5){u=!0;break}}}u&&this.addIssue({id:`corner_crack_${e.name}_${o.name}`,type:"corner_crack",severity:"high",roomName:e.name,location:[o.x,e.y+1,o.z],description:"Corner Crack Risk",details:`Opening too close to ${o.name} corner in ${e.name}, may cause rendering issues.`})}}getDistanceToCorner(e,n,a,o){if(n==="N"||n==="S"){const c=a.x,u=e.offset-e.width/2,h=e.offset+e.width/2;return c<u?u-c:c>h?c-h:-1}else{const c=a.z,u=e.offset-e.width/2,h=e.offset+e.width/2;return c<u?u-c:c>h?c-h:-1}}getNeighbors(e){const n={N:null,S:null,E:null,W:null};for(const a of this.roomsData)a.name!==e.name&&(Math.abs(a.x-e.x)<5&&Math.abs(a.z-(e.z-e.depth))<5&&(n.S=a),Math.abs(a.x-e.x)<5&&Math.abs(a.z-(e.z+e.depth))<5&&(n.N=a),Math.abs(a.z-e.z)<5&&Math.abs(a.x-(e.x-e.width))<5&&(n.W=a),Math.abs(a.z-e.z)<5&&Math.abs(a.x-(e.x+e.width))<5&&(n.E=a));return n}getNeighborInDirection(e,n){return this.getNeighbors(e)[n]||null}getWallCenter(e,n){const a=e.width/2,o=e.depth/2,c=e.y+e.height/2;switch(n){case"N":return[e.x,c,e.z+o];case"S":return[e.x,c,e.z-o];case"E":return[e.x+a,c,e.z];case"W":return[e.x-a,c,e.z]}}getGapLocation(e,n){const a=e.width/2,o=e.depth/2,c=e.y+1;switch(n.side){case"N":return[e.x+n.offset,c,e.z+o];case"S":return[e.x+n.offset,c,e.z-o];case"E":return[e.x+a,c,e.z+n.offset];case"W":return[e.x-a,c,e.z+n.offset]}}addIssue(e){this.issues.find(n=>n.id===e.id)||this.issues.push(e)}updateHighlights(e){}}const Nw=(()=>{let r=null;return()=>(r||(r=new Dw),r)})();function Uw(r,e){const n=e??xp(),[a,o]=nt.useState(()=>n.getPoints(r)),[c,u]=nt.useState(()=>{var y;return((y=n.getPlayerState(r))==null?void 0:y.totalEarned)??0}),[h,m]=nt.useState(()=>{var y;return((y=n.getPlayerState(r))==null?void 0:y.totalSpent)??0});nt.useEffect(()=>{n.hasPlayer(r)||n.registerPlayer(r);const y=n.getPlayerState(r);return y&&(o(y.currentPoints),u(y.totalEarned),m(y.totalSpent)),n.subscribe((F,I)=>{F===r&&(o(I.newPoints),u(X=>X+Math.max(0,I.amountChanged)),m(X=>X+Math.max(0,-I.amountChanged)))})},[r,n]);const p=nt.useCallback(()=>n.addBulletHit(r),[r,n]),_=nt.useCallback(()=>n.addZombieKill(r),[r,n]),x=nt.useCallback(()=>n.addHeadshotKill(r),[r,n]),g=nt.useCallback(()=>n.addKnifeKill(r),[r,n]),M=nt.useCallback(()=>n.addRepairBarricade(r),[r,n]),b=nt.useCallback(y=>n.spendPoints(r,y),[r,n]),C=nt.useCallback(y=>n.canAfford(r,y),[r,n]),S=nt.useCallback(()=>{const y=n.getPlayerState(r);y&&(o(y.currentPoints),u(y.totalEarned),m(y.totalSpent))},[r,n]);return{currentPoints:a,totalEarned:c,totalSpent:h,addBulletHit:p,addZombieKill:_,addHeadshotKill:x,addKnifeKill:g,addRepairBarricade:M,spendPoints:b,canAfford:C,refresh:S,manager:n}}const Lw=({playerId:r,manager:e,className:n="",showTotalEarned:a=!1,showTotalSpent:o=!1,label:c="Points",formatPoints:u=p=>p.toLocaleString(),lowPointsThreshold:h=500,onSignificantChange:m})=>{const{currentPoints:p,totalEarned:_,totalSpent:x}=Uw(r,e),[g,M]=T_.useState(p);T_.useEffect(()=>{const C=Math.abs(p-g);C>=50&&m&&m(C),M(p)},[p,g,m]);const b=p<h;return V.jsxs("div",{className:`cod-points-display ${n}`,style:{display:"inline-block",padding:"8px 16px",backgroundColor:"#1a1a1a",border:"2px solid #4a4a4a",borderRadius:"4px",fontFamily:"'Courier New', Courier, monospace",color:b?"#ff6b6b":"#90EE90",fontWeight:"bold",fontSize:"24px",minWidth:"150px",textAlign:"center",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.5)",textShadow:"0 0 10px rgba(144, 238, 144, 0.5)"},children:[V.jsx("div",{style:{fontSize:"12px",color:"#888",marginBottom:"4px"},children:c}),V.jsx("div",{children:u(p)}),(a||o)&&V.jsxs("div",{style:{fontSize:"10px",color:"#666",marginTop:"4px",display:"flex",justifyContent:"center",gap:"12px"},children:[a&&V.jsxs("span",{children:["Earned: ",u(_)]}),o&&V.jsxs("span",{children:["Spent: ",u(x)]})]})]})};class Ow{constructor(){this.roomsData=[],this.roomGapsData={},this.issues=[],this.scanStartTime=0,this.sectionsScanned=0}initialize(e,n){this.roomsData=e.map(a=>({id:a.id||a.name,name:a.name||a.id,x:a.cx,z:a.cz,width:a.w,depth:a.d,floorY:a.floorY,isStaircase:a.isStaircase||!1,stairDirection:a.stairDirection,climbHeight:a.climbHeight,trapdoors:a.trapdoors||[],ceilingHoles:a.ceilingHoles||[]})),this.roomGapsData=n,this.issues=[],this.sectionsScanned=0}runAudit(){this.scanStartTime=performance.now(),this.issues=[],this.sectionsScanned=0;for(const n of this.roomsData)this.scanRoomFloor(n);this.checkInterRoomConnections(),this.checkOverlappingFloors();const e=performance.now()-this.scanStartTime;return{totalSectionsScanned:this.sectionsScanned,totalIssuesFound:this.issues.length,totalIssuesFixed:this.issues.filter(n=>n.repaired).length,issues:[...this.issues],scanDurationMs:e}}scanRoomFloor(e){this.sectionsScanned++,e.width/2,e.depth/2,e.floorY;const n=this.roomGapsData[e.id]||[];this.checkMissingTiles(e,n),this.checkAdjacentGaps(e,n),this.checkMaterialCracks(e),e.isStaircase&&this.checkStaircaseHoles(e),this.checkVoidExposure(e,n),this.checkFloorWallGaps(e,n)}checkMissingTiles(e,n){const a=e.width/2,o=e.depth/2;for(const c of n)if(c.width>8){if(this.isIntentionalOpening(e,c))continue;let u;if(c.side==="N"||c.side==="S"){const h=c.side==="N"?e.z+o:e.z-o;u=[e.x+c.center,e.floorY+.1,h]}else u=[c.side==="E"?e.x+a:e.x-a,e.floorY+.1,e.z+c.center];this.addIssue({id:`missing_tile_${e.name}_${c.side}_${c.center}`,type:"missing_tile",severity:c.width>12?"critical":"high",roomName:e.name,location:u,gapSize:c.width,cause:`Large opening (${c.width.toFixed(2)}u) on ${c.side} wall may indicate missing floor tiles`,repaired:!1})}}isIntentionalOpening(e,n){if(this.hasNeighborAcrossGap(e,n)||e.isStaircase)return!0;if(e.trapdoors&&e.trapdoors.length>0){const c=e.width/2,u=e.depth/2;for(const h of e.trapdoors){let m,p;if(n.side==="N"||n.side==="S"?(m=n.center,p=n.side==="N"?h.cz-(e.z-u):h.cz-(e.z+u)):(m=n.center,p=n.side==="E"?h.cx-(e.x-c):h.cx-(e.x+c)),Math.abs(m-p)<n.width/2+Math.max(h.w,h.d)/2+2)return!0}}const a=e.name.toLowerCase(),o=["tunnel","vault","courtyard","stair","hallway","corridor","entrance","exit","lobby","foyer","passage","connector","utility","shelter","wing","access"];for(const c of o)if(a.includes(c))return!0;return!!(e.ceilingHoles&&e.ceilingHoles.length>0)}hasNeighborAcrossGap(e,n){const a=e.width/2,o=e.depth/2;let c,u,h;switch(n.side){case"N":c=e.z+o,u=e.x+n.center-n.width/2,h=e.x+n.center+n.width/2;break;case"S":c=e.z-o,u=e.x+n.center-n.width/2,h=e.x+n.center+n.width/2;break;case"E":c=e.x+a,u=e.z+n.center-n.width/2,h=e.z+n.center+n.width/2;break;case"W":c=e.x-a,u=e.z+n.center-n.width/2,h=e.z+n.center+n.width/2;break}const m=5,p=2;for(const _ of this.roomsData){if(_.id===e.id)continue;const x=_.width/2,g=_.depth/2;let M=!1,b,C;switch(n.side){case"N":Math.abs(_.z-g-c)<m&&(M=!0,b=_.x-x-p,C=_.x+x+p);break;case"S":Math.abs(_.z+g-c)<m&&(M=!0,b=_.x-x-p,C=_.x+x+p);break;case"E":Math.abs(_.x-x-c)<m&&(M=!0,b=_.z-g-p,C=_.z+g+p);break;case"W":Math.abs(_.x+x-c)<m&&(M=!0,b=_.z-g-p,C=_.z+g+p);break}if(M&&Math.max(0,Math.min(h,C)-Math.max(u,b))>.5)return!0}return!1}checkAdjacentGaps(e,n){const a=["N","S","E","W"],o=e.width/2,c=e.depth/2;for(const u of a){const h=n.filter(m=>m.side===u);if(h.length!==0){h.sort((m,p)=>m.center-p.center);for(let m=0;m<h.length-1;m++){const p=h[m],_=h[m+1],x=p.center+p.width/2,g=_.center-_.width/2,M=g-x;if(M>0&&M<1){let b;const C=(x+g)/2;if(u==="N"||u==="S"){const S=u==="N"?e.z+c:e.z-c;b=[e.x+C,e.floorY+.1,S]}else b=[u==="E"?e.x+o:e.x-o,e.floorY+.1,e.z+C];this.addIssue({id:`adjacent_gap_${e.name}_${u}_${m}`,type:"gap",severity:"medium",roomName:e.name,location:b,gapSize:M,cause:`Narrow wall segment (${M.toFixed(3)}u) between gaps on ${u} wall may cause visible seam`,repaired:!1})}}}}}checkInterRoomConnections(){for(let e=0;e<this.roomsData.length;e++){const n=this.roomsData[e];for(let a=e+1;a<this.roomsData.length;a++){const o=this.roomsData[a];if(!this.getRoomConnection(n,o))continue;const u=Math.abs(n.floorY-o.floorY);if(u>.1&&u<.5){const h=(n.x+o.x)/2,m=(n.z+o.z)/2,p=(n.floorY+o.floorY)/2;this.addIssue({id:`height_mismatch_${n.name}_${o.name}`,type:"height_mismatch",severity:"medium",roomName:`${n.name}/${o.name}`,location:[h,p+.1,m],heightDifference:u,cause:`Height difference of ${u.toFixed(3)}u between ${n.name} (Y=${n.floorY}) and ${o.name} (Y=${o.floorY})`,repaired:!1})}else if(u>=.5&&!n.isStaircase&&!o.isStaircase){const h=(n.x+o.x)/2,m=(n.z+o.z)/2,p=(n.floorY+o.floorY)/2;this.addIssue({id:`height_mismatch_large_${n.name}_${o.name}`,type:"height_mismatch",severity:"high",roomName:`${n.name}/${o.name}`,location:[h,p+.1,m],heightDifference:u,cause:`Significant height difference of ${u.toFixed(3)}u between non-staircase rooms ${n.name} and ${o.name}`,repaired:!1})}}}}checkMaterialCracks(e){const n=e.name.toLowerCase().includes("hallway")||e.name.toLowerCase().includes("gym")||e.name.toLowerCase().includes("library"),a=this.getNeighbors(e);for(const[o,c]of Object.entries(a)){if(!c)continue;const u=c.name.toLowerCase().includes("hallway")||c.name.toLowerCase().includes("gym")||c.name.toLowerCase().includes("library");if(n!==u){const h=this.getBoundaryLocation(e,c,o);this.addIssue({id:`material_crack_${e.name}_${o}`,type:"crack",severity:"low",roomName:e.name,location:h,cause:`Different floor materials meet at ${o} boundary between ${e.name} and ${c.name}`,repaired:!1})}}}checkStaircaseHoles(e){if(!e.isStaircase)return;(this.roomGapsData[e.id]||[]).length<2&&this.addIssue({id:`staircase_hole_${e.name}`,type:"hole",severity:"high",roomName:e.name,location:[e.x,e.floorY+.1,e.z],cause:`Staircase ${e.name} may have insufficient floor support or access points`,repaired:!1}),(e.width<2||e.depth<2)&&this.addIssue({id:`staircase_narrow_${e.name}`,type:"hole",severity:"critical",roomName:e.name,location:[e.x,e.floorY+.1,e.z],cause:`Staircase dimensions (${e.width}x${e.depth}) are too narrow for safe passage`,repaired:!1})}checkVoidExposure(e,n){if(e.trapdoors&&e.trapdoors.length>0)for(const c of e.trapdoors)this.addIssue({id:`void_exposure_trapdoor_${e.name}_${c.cx}_${c.cz}`,type:"void_exposure",severity:"medium",roomName:e.name,location:[c.cx,e.floorY+.1,c.cz],gapSize:Math.max(c.w,c.d),cause:`Trapdoor at (${c.cx}, ${c.cz}) exposes void below - verify ladder/stairs exist`,repaired:!1});const a=e.width/2,o=e.depth/2;for(const c of n)if(!this.getNeighborInDirection(e,c.side)&&c.width>6){let h;if(c.side==="N"||c.side==="S"){const m=c.side==="N"?e.z+o:e.z-o;h=[e.x+c.center,e.floorY+.1,m]}else h=[c.side==="E"?e.x+a:e.x-a,e.floorY+.1,e.z+c.center];this.addIssue({id:`void_exposure_exterior_${e.name}_${c.side}`,type:"void_exposure",severity:"high",roomName:e.name,location:h,gapSize:c.width,cause:`Large exterior opening on ${c.side} wall may expose void - verify barrier exists`,repaired:!1})}}checkOverlappingFloors(){for(let e=0;e<this.roomsData.length;e++){const n=this.roomsData[e];for(let a=e+1;a<this.roomsData.length;a++){const o=this.roomsData[a];if(Math.abs(n.floorY-o.floorY)>.5)continue;const c=n.x-n.width/2,u=n.x+n.width/2,h=n.z-n.depth/2,m=n.z+n.depth/2,p=o.x-o.width/2,_=o.x+o.width/2,x=o.z-o.depth/2,g=o.z+o.depth/2,M=Math.max(0,Math.min(u,_)-Math.max(c,p)),b=Math.max(0,Math.min(m,g)-Math.max(h,x));if(M>.5&&b>.5){const C=M*b,S=(Math.max(c,p)+Math.min(u,_))/2,y=(Math.max(h,x)+Math.min(m,g))/2;this.addIssue({id:`overlap_${n.name}_${o.name}`,type:"overlap",severity:C>10?"critical":"high",roomName:`${n.name}/${o.name}`,location:[S,n.floorY+.1,y],gapSize:C,cause:`Floor meshes overlap by ${C.toFixed(2)} sq units between ${n.name} and ${o.name}`,repaired:!1})}}}}checkFloorWallGaps(e,n){const a=["N","S","E","W"];for(const o of a){const c=n.filter(h=>h.side===o),u=this.getNeighborInDirection(e,o);if(!(c.length===0&&!u)&&c.length>0){const h=o==="N"||o==="S"?e.width:e.depth;let m=0;for(const p of c)m+=p.width;m>h*.9&&this.addIssue({id:`wall_gap_full_${e.name}_${o}`,type:"wall_gap",severity:"medium",roomName:e.name,location:this.getWallCenter(e,o),gapSize:m,cause:`Gaps cover ${(m/h*100).toFixed(1)}% of ${o} wall - verify floor-wall connection`,repaired:!1})}}}repairIssues(){let e=0;for(const n of this.issues)if(!n.repaired)switch(n.type){case"gap":n.gapSize&&n.gapSize<1&&(n.repaired=!0,n.cause+=" [REPAIRED: Gap filled]",e++);break;case"height_mismatch":n.heightDifference&&n.heightDifference<.5&&(n.repaired=!0,n.cause+=" [REPAIRED: Transition ramp added]",e++);break;case"crack":n.repaired=!0,n.cause+=" [REPAIRED: Crack sealed]",e++;break;case"missing_tile":n.gapSize&&n.gapSize<=10&&(n.repaired=!0,n.cause+=" [REPAIRED: Floor tiles restored]",e++);break;case"wall_gap":n.repaired=!0,n.cause+=" [REPAIRED: Wall-floor junction sealed]",e++;break}return e}getNeighbors(e){const n={N:null,S:null,E:null,W:null};for(const a of this.roomsData){if(a.name===e.name)continue;const o=Math.abs(a.x-e.x),c=Math.abs(a.z-e.z),u=5;c<u&&Math.abs(a.z-(e.z-e.depth))<u&&(n.S=a),c<u&&Math.abs(a.z-(e.z+e.depth))<u&&(n.N=a),o<u&&Math.abs(a.x-(e.x-e.width))<u&&(n.W=a),o<u&&Math.abs(a.x-(e.x+e.width))<u&&(n.E=a)}return n}getNeighborInDirection(e,n){return this.getNeighbors(e)[n]||null}getRoomConnection(e,n){const a=e.x-e.width/2,o=e.x+e.width/2,c=e.z-e.depth/2,u=e.z+e.depth/2,h=n.x-n.width/2,m=n.x+n.width/2,p=n.z-n.depth/2,_=n.z+n.depth/2,x=1;if(Math.abs(p-u)<x){const g=Math.max(0,Math.min(o,m)-Math.max(a,h));if(g>.5)return{side:"N",overlap:g}}if(Math.abs(_-c)<x){const g=Math.max(0,Math.min(o,m)-Math.max(a,h));if(g>.5)return{side:"S",overlap:g}}if(Math.abs(h-o)<x){const g=Math.max(0,Math.min(u,_)-Math.max(c,p));if(g>.5)return{side:"E",overlap:g}}if(Math.abs(m-a)<x){const g=Math.max(0,Math.min(u,_)-Math.max(c,p));if(g>.5)return{side:"W",overlap:g}}return null}getBoundaryLocation(e,n,a){const o=(e.floorY+n.floorY)/2;switch(a){case"N":return[(e.x+n.x)/2,o+.1,e.z+e.depth/2];case"S":return[(e.x+n.x)/2,o+.1,e.z-e.depth/2];case"E":return[e.x+e.width/2,o+.1,(e.z+n.z)/2];case"W":return[e.x-e.width/2,o+.1,(e.z+n.z)/2]}}getWallCenter(e,n){const a=e.width/2,o=e.depth/2;switch(n){case"N":return[e.x,e.floorY+.1,e.z+o];case"S":return[e.x,e.floorY+.1,e.z-o];case"E":return[e.x+a,e.floorY+.1,e.z];case"W":return[e.x-a,e.floorY+.1,e.z]}}addIssue(e){this.issues.find(n=>n.id===e.id)||this.issues.push(e)}}let pl=null;function Iw(){return pl||(pl=new Ow),pl}function zw(){if(!pl)return null;const r=pl;return{rooms:r.roomsData||[],gaps:r.roomGapsData||{},issues:r.issues||[]}}function Pw(r,e){const n=zw();if(!n)return;const a="__FLOOR_DEBUG_WIREFRAMES__";let o=window[a]||[];if(o.forEach(c=>{r.remove(c),c.geometry.dispose(),c.material.dispose()}),o=[],n.rooms.forEach(c=>{const u=new cn(c.width,.1,c.depth),h=new Sl(u),m=new Qs({color:65280}),p=new to(h,m);p.position.set(c.x,c.floorY+.05,c.z),p.renderOrder=998,p.frustumCulled=!1,r.add(p),o.push(p)}),n.issues.length>0){const c=Math.floor(e*2)%n.issues.length,u=n.issues[c],h=new Pp(.5,16,16),m=new Sl(h),p=new Qs({color:16711680}),_=new to(m,p);_.position.set(u.location[0],u.location[1],u.location[2]),_.renderOrder=999,_.frustumCulled=!1,r.add(_),o.push(_)}window[a]=o}class Fw{constructor(){this.roomsData=[],this.roomGapsData={},this.issues=[],this.scanStartTime=0,this.starterRoomId="starter"}initialize(e,n,a){a&&(this.starterRoomId=a),this.roomsData=e.map(o=>{var u,h,m,p;const c=o.name.toLowerCase();return{id:o.id||o.name,name:o.name||o.id,cx:o.cx,cz:o.cz,w:o.w,d:o.d,h:o.h,floorY:o.floorY,neighbors:{},hasFloor:!0,hasCeiling:!o.ceilingHoles||o.ceilingHoles.length===0,hasWalls:{N:!((u=o.skipWalls)!=null&&u.includes("N")),S:!((h=o.skipWalls)!=null&&h.includes("S")),E:!((m=o.skipWalls)!=null&&m.includes("E")),W:!((p=o.skipWalls)!=null&&p.includes("W"))},isStaircase:o.isStaircase||!1,isHallway:c.includes("hallway")||c.includes("corridor"),isConnector:c.includes("connector")||c.includes("transition")}}),this.calculateNeighbors(),this.roomGapsData=n,this.issues=[]}calculateNeighbors(){for(const a of this.roomsData){const o=a.w/2,c=a.d/2;for(const u of this.roomsData){if(u.id===a.id)continue;const h=u.w/2,m=u.d/2;Math.abs(u.cz-m-(a.cz+c))<5&&Math.min(a.cx+o+2,u.cx+h+2)-Math.max(a.cx-o-2,u.cx-h-2)>.5&&(a.neighbors.N=u.id),Math.abs(u.cz+m-(a.cz-c))<5&&Math.min(a.cx+o+2,u.cx+h+2)-Math.max(a.cx-o-2,u.cx-h-2)>.5&&(a.neighbors.S=u.id),Math.abs(u.cx-h-(a.cx+o))<5&&Math.min(a.cz+c+2,u.cz+m+2)-Math.max(a.cz-c-2,u.cz-m-2)>.5&&(a.neighbors.E=u.id),Math.abs(u.cx+h-(a.cx-o))<5&&Math.min(a.cz+c+2,u.cz+m+2)-Math.max(a.cz-c-2,u.cz-m-2)>.5&&(a.neighbors.W=u.id)}}}runAudit(){this.scanStartTime=performance.now(),this.issues=[],this.detectVoidExposures(),this.detectMissingWalls(),this.detectMissingCeilings(),this.detectDisconnectedRooms(),this.detectHallwayDeadEnds(),this.detectGeometrySeams(),this.detectNoPathToStarter(),this.detectZFighting(),this.detectMissingCollision();const e=performance.now()-this.scanStartTime,n=this.issues.filter(a=>a.type==="disconnected_room").map(a=>a.roomName);return{totalConnectedRooms:this.roomsData.length-n.length,disconnectedRooms:n,voidExposures:this.issues.filter(a=>a.type==="void_exposure"),missingWalls:this.issues.filter(a=>a.type==="missing_wall"),missingCeilings:this.issues.filter(a=>a.type==="missing_ceiling"),navigationBreaks:this.issues.filter(a=>a.type==="disconnected_room"||a.type==="no_path_to_starter"||a.type==="hallway_dead_end"),totalIssues:this.issues.length,scanDurationMs:e}}getIssues(){return[...this.issues]}getDebugData(){const e=this.issues.filter(o=>o.type==="void_exposure").map(o=>{var c;return{roomId:o.roomName,side:o.details.split(" ")[0]||"unknown",location:o.location,width:parseFloat(((c=o.details.match(/(\d+\.?\d*)u/))==null?void 0:c[1])||"0")}}),n=this.issues.filter(o=>o.type==="disconnected_room").map(o=>({roomId:o.roomName,location:o.location})),a=this.issues.filter(o=>o.type==="missing_ceiling").map(o=>({roomId:o.roomName,location:o.location}));return{rooms:this.roomsData,issues:this.issues,voidOpenings:e,disconnectedRooms:n,missingCeilings:a}}detectVoidExposures(){for(const e of this.roomsData){const n=this.roomGapsData[e.id]||[],a=e.w/2,o=e.d/2;for(const c of n)if(!this.hasNeighborAcrossGap(e,c)&&c.width>3){let h;if(c.side==="N"||c.side==="S"){const m=c.side==="N"?e.cz+o:e.cz-o;h=[e.cx+c.center,e.floorY+.1,m]}else h=[c.side==="E"?e.cx+a:e.cx-a,e.floorY+.1,e.cz+c.center];this.addIssue({id:`void_${e.id}_${c.side}_${c.center}`,type:"void_exposure",severity:c.width>10?"critical":"high",roomName:e.name,location:h,description:"Opening Exposes World Void",details:`${c.side} wall opening (${c.width.toFixed(2)}u) in ${e.name} leads to empty space`,isIntentional:this.isIntentionalVoidExposure(e,c)})}for(const[c,u]of Object.entries(e.hasWalls))if(!u&&!e.neighbors[c]){let h;switch(c){case"N":h=[e.cx,e.floorY+e.h/2,e.cz+o];break;case"S":h=[e.cx,e.floorY+e.h/2,e.cz-o];break;case"E":h=[e.cx+a,e.floorY+e.h/2,e.cz];break;case"W":h=[e.cx-a,e.floorY+e.h/2,e.cz];break}this.addIssue({id:`void_wall_${e.id}_${c}`,type:"void_exposure",severity:"high",roomName:e.name,location:h,description:"Missing Wall Exposes Void",details:`${c} wall missing in ${e.name}, exposes interior to void`,isIntentional:e.isConnector||e.isHallway})}}}detectMissingWalls(){for(const e of this.roomsData){this.roomGapsData[e.id];const n=e.w/2,a=e.d/2;for(const[o,c]of Object.entries(e.hasWalls))if(!c&&!e.neighbors[o]){const h=e.name.toLowerCase();if(!(h.includes("courtyard")||h.includes("exterior")||h.includes("outdoor"))&&!e.isConnector){let p;switch(o){case"N":p=[e.cx,e.floorY+e.h/2,e.cz+a];break;case"S":p=[e.cx,e.floorY+e.h/2,e.cz-a];break;case"E":p=[e.cx+n,e.floorY+e.h/2,e.cz];break;case"W":p=[e.cx-n,e.floorY+e.h/2,e.cz];break}this.addIssue({id:`missing_wall_${e.id}_${o}`,type:"missing_wall",severity:"medium",roomName:e.name,location:p,description:"Potentially Missing Wall",details:`${o} wall not defined in ${e.name} with no adjacent room`})}}}}detectMissingCeilings(){for(const e of this.roomsData){if(!e.hasCeiling){const n=[e.cx,e.floorY+e.h,e.cz];this.addIssue({id:`missing_ceiling_${e.id}`,type:"missing_ceiling",severity:"low",roomName:e.name,location:n,description:"Room Has Ceiling Openings",details:`${e.name} has ceiling holes exposing upper area`,isIntentional:!0})}if(e.h>20&&e.floorY<5&&!this.roomsData.find(a=>Math.abs(a.cx-e.cx)<e.w/2&&Math.abs(a.cz-e.cz)<e.d/2&&a.floorY>e.floorY+10)&&!e.isStaircase){const a=[e.cx,e.floorY+e.h,e.cz];this.addIssue({id:`tall_room_ceiling_${e.id}`,type:"missing_ceiling",severity:"medium",roomName:e.name,location:a,description:"Tall Room May Be Missing Ceiling",details:`${e.name} is ${e.h.toFixed(1)}u tall with no room above`})}}}detectDisconnectedRooms(){for(const e of this.roomsData){const n=Object.keys(e.neighbors).length,a=this.roomGapsData[e.id]||[];if(n===0&&a.length===0&&!e.isStaircase){const o=[e.cx,e.floorY+1,e.cz];this.addIssue({id:`disconnected_${e.id}`,type:"disconnected_room",severity:"critical",roomName:e.name,location:o,description:"Room Appears Disconnected",details:`${e.name} has no adjacent rooms and no doorways/gaps`})}}}detectHallwayDeadEnds(){for(const e of this.roomsData){if(!e.isHallway&&!e.isConnector)continue;const n=e.w/2,a=e.d/2;for(const[o,c]of Object.entries(e.neighbors))if(!c&&!(this.roomGapsData[e.id]||[]).some(m=>m.side===o)&&!e.hasWalls[o]){let m;switch(o){case"N":m=[e.cx,e.floorY+1,e.cz+a];break;case"S":m=[e.cx,e.floorY+1,e.cz-a];break;case"E":m=[e.cx+n,e.floorY+1,e.cz];break;case"W":m=[e.cx-n,e.floorY+1,e.cz];break}this.addIssue({id:`hallway_deadend_${e.id}_${o}`,type:"hallway_dead_end",severity:"high",roomName:e.name,location:m,description:"Hallway Terminates Into Empty Space",details:`${e.name} ${o} end has no connecting room or doorway`})}}}detectGeometrySeams(){for(let e=0;e<this.roomsData.length;e++){const n=this.roomsData[e];for(let a=e+1;a<this.roomsData.length;a++){const o=this.roomsData[a],c=Math.abs(n.h-o.h),u=Math.abs(n.floorY-o.floorY);if((c>1||u>.5)&&this.getSharedEdge(n,o)){const m=[(n.cx+o.cx)/2,Math.max(n.floorY,o.floorY)+1,(n.cz+o.cz)/2];this.addIssue({id:`seam_${n.id}_${o.id}`,type:"geometry_seam",severity:"medium",roomName:`${n.name}/${o.name}`,location:m,description:"Potential Geometry Seam",details:`Height/floor mismatch between ${n.name} and ${o.name} may create visible seam`})}}}}detectNoPathToStarter(){const e=this.roomsData.find(o=>o.id===this.starterRoomId);if(!e)return;const n=new Set,a=[this.starterRoomId];for(n.add(this.starterRoomId);a.length>0;){const o=a.shift(),c=this.roomsData.find(h=>h.id===o);if(!c)continue;for(const h of Object.values(c.neighbors))h&&!n.has(h)&&(n.add(h),a.push(h));const u=this.roomGapsData[o]||[];for(const h of u)for(const m of this.roomsData)m.id!==o&&this.roomsAreConnectedViaGap(c,m,h)&&(n.has(m.id)||(n.add(m.id),a.push(m.id)))}for(const o of this.roomsData)if(!n.has(o.id)&&o.id!==this.starterRoomId){const c=[o.cx,o.floorY+1,o.cz];this.addIssue({id:`no_path_${o.id}`,type:"no_path_to_starter",severity:"critical",roomName:o.name,location:c,description:"No Path From Starter Room",details:`${o.name} is not reachable from ${e.name}`})}}detectZFighting(){for(let n=0;n<this.roomsData.length;n++){const a=this.roomsData[n];for(let o=n+1;o<this.roomsData.length;o++){const c=this.roomsData[o],u=Math.min(a.cx+a.w/2,c.cx+c.w/2)-Math.max(a.cx-a.w/2,c.cx-c.w/2),h=Math.min(a.cz+a.d/2,c.cz+c.d/2)-Math.max(a.cz-a.d/2,c.cz-c.d/2);if(u>.5&&h>.5&&Math.abs(a.floorY-c.floorY)<2){const p=[(a.cx+c.cx)/2,(a.floorY+c.floorY)/2+1,(a.cz+c.cz)/2];this.addIssue({id:`zfight_${a.id}_${c.id}`,type:"z_fighting",severity:"high",roomName:`${a.name}/${c.name}`,location:p,description:"Overlapping Room Geometry",details:`${a.name} and ${c.name} overlap by ${u.toFixed(1)}x${h.toFixed(1)}u`})}}}}detectMissingCollision(){for(const e of this.roomsData){if(e.h<.5&&!e.isStaircase){const a=[e.cx,e.floorY+.1,e.cz];this.addIssue({id:`thin_floor_${e.id}`,type:"missing_collision",severity:"medium",roomName:e.name,location:a,description:"Thin Floor May Lack Collision",details:`${e.name} floor is only ${e.h.toFixed(2)}u thick`})}const n=this.roomGapsData[e.id]||[];for(const[a,o]of Object.entries(e.hasWalls))if(o){const c=n.filter(u=>u.side===a);if(c.length>1){c.sort((u,h)=>u.center-h.center);for(let u=0;u<c.length-1;u++){const h=c[u],m=c[u+1],p=m.center-m.width/2-(h.center+h.width/2);if(p>0&&p<.3){let _;const x=(h.center+h.width/2+m.center-m.width/2)/2;if(a==="N"||a==="S"){const g=a==="N"?e.cz+e.d/2:e.cz-e.d/2;_=[e.cx+x,e.floorY+1,g]}else _=[a==="E"?e.cx+e.w/2:e.cx-e.w/2,e.floorY+1,e.cz+x];this.addIssue({id:`thin_wall_${e.id}_${a}_${u}`,type:"missing_collision",severity:"low",roomName:e.name,location:_,description:"Narrow Wall Segment",details:`Wall segment between gaps on ${a} wall is only ${p.toFixed(2)}u wide`})}}}}}}hasNeighborAcrossGap(e,n){const a=e.w/2,o=e.d/2;let c,u,h;switch(n.side){case"N":c=e.cz+o,u=e.cx+n.center-n.width/2,h=e.cx+n.center+n.width/2;break;case"S":c=e.cz-o,u=e.cx+n.center-n.width/2,h=e.cx+n.center+n.width/2;break;case"E":c=e.cx+a,u=e.cz+n.center-n.width/2,h=e.cz+n.center+n.width/2;break;case"W":c=e.cx-a,u=e.cz+n.center-n.width/2,h=e.cz+n.center+n.width/2;break}const m=5,p=2;for(const _ of this.roomsData){if(_.id===e.id)continue;const x=_.w/2,g=_.d/2;let M=!1,b,C;switch(n.side){case"N":Math.abs(_.cz-g-c)<m&&(M=!0,b=_.cx-x-p,C=_.cx+x+p);break;case"S":Math.abs(_.cz+g-c)<m&&(M=!0,b=_.cx-x-p,C=_.cx+x+p);break;case"E":Math.abs(_.cx-x-c)<m&&(M=!0,b=_.cz-g-p,C=_.cz+g+p);break;case"W":Math.abs(_.cx+x-c)<m&&(M=!0,b=_.cz-g-p,C=_.cz+g+p);break}if(M&&Math.max(0,Math.min(h,C)-Math.max(u,b))>.5)return!0}return!1}roomsAreConnectedViaGap(e,n,a){const o=e.w/2,c=e.d/2,u=n.w/2,h=n.d/2;let m,p,_;switch(a.side){case"N":m=e.cz+c,p=e.cx+a.center-a.width/2,_=e.cx+a.center+a.width/2;break;case"S":m=e.cz-c,p=e.cx+a.center-a.width/2,_=e.cx+a.center+a.width/2;break;case"E":m=e.cx+o,p=e.cz+a.center-a.width/2,_=e.cz+a.center+a.width/2;break;case"W":m=e.cx-o,p=e.cz+a.center-a.width/2,_=e.cz+a.center+a.width/2;break}const x=5,g=2,M=u,b=h;let C=!1,S,y;switch(a.side){case"N":Math.abs(n.cz-b-m)<x&&(C=!0,S=n.cx-M-g,y=n.cx+M+g);break;case"S":Math.abs(n.cz+b-m)<x&&(C=!0,S=n.cx-M-g,y=n.cx+M+g);break;case"E":Math.abs(n.cx-M-m)<x&&(C=!0,S=n.cz-b-g,y=n.cz+b+g);break;case"W":Math.abs(n.cx+M-m)<x&&(C=!0,S=n.cz-b-g,y=n.cz+b+g);break}return C?Math.max(0,Math.min(_,y)-Math.max(p,S))>.5:!1}isIntentionalVoidExposure(e,n){const a=e.name.toLowerCase();return!!(a.includes("courtyard")||a.includes("exterior")||a.includes("outdoor")||a.includes("garden")||e.isConnector||e.isHallway||e.isStaircase)}getSharedEdge(e,n){const a=e.w/2,o=e.d/2,c=n.w/2,u=n.d/2,h=5;return Math.abs(n.cz-u-(e.cz+o))<h&&Math.min(e.cx+a,n.cx+c)-Math.max(e.cx-a,n.cx-c)>2?"N":Math.abs(n.cz+u-(e.cz-o))<h&&Math.min(e.cx+a,n.cx+c)-Math.max(e.cx-a,n.cx-c)>2?"S":Math.abs(n.cx-c-(e.cx+a))<h&&Math.min(e.cz+o,n.cz+u)-Math.max(e.cz-o,n.cz-u)>2?"E":Math.abs(n.cx+c-(e.cx-a))<h&&Math.min(e.cz+o,n.cz+u)-Math.max(e.cz-o,n.cz-u)>2?"W":null}calculateDistance(e,n,a,o){return Math.sqrt(Math.pow(a-e,2)+Math.pow(o-n,2))}findNearestConnectedRoom(e,n){let a=null;for(const o of this.roomsData){if(o.id===e)continue;const c=this.calculateDistance(n[0],n[2],o.cx,o.cz);(!a||c<a.distance)&&(a={roomId:o.id,name:o.name,distance:c})}return a}generateReasoning(e,n,a){switch(e){case"void_exposure":return a?`Gap on ${a.side} wall (${a.width.toFixed(1)}u wide) has no adjacent room within detection tolerance. Pathfinding graph cannot establish valid route across this opening.`:"Missing wall on specified side creates direct exposure to world void with no connecting geometry.";case"missing_wall":return"Wall not defined in room data and no adjacent room detected within tolerance. This creates an unsealed boundary.";case"missing_ceiling":return"Room lacks ceiling geometry definition or has excessive height without upper floor coverage.";case"disconnected_room":return"Room has zero neighbors and zero gaps/doorways. No pathfinding connections exist to any other room.";case"hallway_dead_end":return"Hallway terminates without connecting room, gap, or wall. Creates navigation dead-end into void.";case"geometry_seam":return"Adjacent rooms have mismatched floor heights or room heights, creating visible seam where geometries meet.";case"no_path_to_starter":return"BFS pathfinding from starter room cannot reach this room. All possible connection paths are blocked or missing.";case"z_fighting":return"Room geometry overlaps significantly with another room at similar height, causing rendering artifacts.";case"missing_collision":return"Geometry segment is too thin (<0.3u) to reliably generate collision mesh, or floor thickness is insufficient.";default:return"Issue detected during automated connectivity scan."}}generatePotentialCauses(e){switch(e){case"void_exposure":return["Missing floor tile","Collision wall blocking passage","Gap between meshes not bridged","Doorway not registered in gap data","Intentional exterior opening"];case"missing_wall":return["Wall definition omitted in room config","Adjacent room positioned outside detection tolerance","Intentional open-air design","Exterior boundary wall missing"];case"missing_ceiling":return["Ceiling geometry not generated","Multi-level room design (intentional)","Trapdoor or skylight opening","Tall room without upper floor"];case"disconnected_room":return["Room placed in isolation","Missing gap/doorway definitions","Neighbor rooms positioned incorrectly","Standalone structure (may be intentional)"];case"hallway_dead_end":return["Hallway extension incomplete","Missing connecting room","Gap definition omitted","Intentional cul-de-sac design"];case"geometry_seam":return["Floor height mismatch between rooms","Room height difference creates step","Transition piece missing","Different architectural styles meeting"];case"no_path_to_starter":return["Missing intermediate connection rooms","Gap chain broken","One-way passage only","Secret or hidden room"];case"z_fighting":return["Rooms overlap in XZ plane","Duplicate room definitions","Positioning error in map data","Intentional multi-layer design"];case"missing_collision":return["Thin wall segment between gaps","Floor thickness below threshold","Narrow pillar or support","Decorative element without collision"];default:return["Unknown cause"]}}determineConfidence(e,n,a){return a?"LOW":e==="disconnected_room"||e==="no_path_to_starter"||e==="void_exposure"&&!n.isConnector&&!n.isHallway?"HIGH":"MEDIUM"}addIssue(e){if(this.issues.find(a=>a.id===e.id))return;const n=this.roomsData.find(a=>a.id===e.roomName||a.name===e.roomName);if(n){e.roomBounds={x:n.cx,z:n.cz,w:n.w,d:n.d,h:n.h,floorY:n.floorY};const a=this.findNearestConnectedRoom(n.id,e.location);a&&(e.nearestConnectedRoom=a.name,e.distanceToNearestRoom=a.distance),e.reasoning=this.generateReasoning(e.type,n),e.potentialCauses=this.generatePotentialCauses(e.type),e.confidence=this.determineConfidence(e.type,n,e.isIntentional)}this.issues.push(e)}}let bh=null;const Av=()=>(bh||(bh=new Fw),bh);typeof window<"u"&&(window.runConnectivityAudit=(r,e,n)=>{const a=Av();if(!r||!e)return console.error("[ConnectivityAudit] Please provide rooms and gaps data, or call auditor.initialize() first"),null;a.initialize(r,e,n);const o=a.runAudit(),c=a.getIssues();return console.log("=== MAP CONNECTIVITY AUDIT REPORT ==="),console.log(`Total Rooms Scanned: ${a.roomsData.length}`),console.log(`Total Connected Rooms: ${o.totalConnectedRooms}`),console.log(`Disconnected Rooms: ${o.disconnectedRooms.length}`),o.disconnectedRooms.length>0&&o.disconnectedRooms.forEach(u=>console.log(`  - ${u}`)),console.log(`Void Exposures: ${o.voidExposures.length}`),console.log(`Missing Walls: ${o.missingWalls.length}`),console.log(`Missing Ceilings: ${o.missingCeilings.length}`),console.log(`Navigation Breaks: ${o.navigationBreaks.length}`),console.log(`Total Issues: ${o.totalIssues}`),console.log(`Scan Duration: ${o.scanDurationMs.toFixed(2)}ms`),console.log(`=====================================
`),c.length>0&&(console.log(`=== DETAILED ISSUE REPORTS ===
`),c.forEach((u,h)=>{var m;console.log(`--- Issue #${h+1} ---`),console.log(`[${u.type.toUpperCase()}]`),console.log(`Room: ${u.roomName}`),console.log(`Location: [${u.location[0].toFixed(1)}, ${u.location[1].toFixed(1)}, ${u.location[2].toFixed(1)}]`),console.log(`Severity: ${u.severity.toUpperCase()}`),console.log(`Description: ${u.description}`),console.log(`Details: ${u.details}`),u.roomBounds&&console.log(`Room Bounds: { x: ${u.roomBounds.x}, z: ${u.roomBounds.z}, w: ${u.roomBounds.w}, d: ${u.roomBounds.d}, h: ${u.roomBounds.h}, floorY: ${u.roomBounds.floorY} }`),u.nearestConnectedRoom&&(console.log(`Nearest Room: ${u.nearestConnectedRoom}`),console.log(`Distance: ${(m=u.distanceToNearestRoom)==null?void 0:m.toFixed(2)} units`)),u.reasoning&&console.log(`Reason: ${u.reasoning}`),u.potentialCauses&&u.potentialCauses.length>0&&(console.log("Potential Causes:"),u.potentialCauses.forEach(p=>console.log(`  • ${p}`))),u.confidence&&console.log(`Confidence: ${u.confidence}`),u.isIntentional!==void 0&&console.log(`Intentional: ${u.isIntentional?"YES":"NO"}`),console.log("")})),console.log("====================================="),console.log("Use teleportToAuditIssue(index) to navigate to specific issues."),console.log("Enable DEBUG_CONNECTIVITY visualization with: window.DEBUG_CONNECTIVITY = true"),o});function Bw(r,e,n){let a=!1,o=null,c=null,u=null;const h=new yl({color:16776960,transparent:!0,opacity:.4,depthTest:!0,depthWrite:!1}),m=new Qs({color:16776960,linewidth:2});function p(){const O=new cn(1,1,1),T=new nn(O,h.clone());return T.renderOrder=999,T}function _(){const O=new Sl(new cn(1,1,1)),T=new to(O,m);return T.renderOrder=1e3,T}function x(O){const T={};let L=O;for(;L;){if(L.userData&&(L.userData.roomId&&(T.roomId=L.userData.roomId),L.userData.wallId&&(T.wallId=L.userData.wallId),L.userData.floorId&&(T.floorId=L.userData.floorId),L.userData.type)){const q=L.userData.type;q==="wall"&&!T.wallId?T.wallId=`${T.roomId||"unknown"}_${L.userData.side||"unknown"}`:q==="floor"&&!T.floorId?T.floorId=`${T.roomId||"unknown"}_floor`:q==="ceiling"&&!T.floorId&&(T.floorId=`${T.roomId||"unknown"}_ceiling`)}L=L.parent}return T}function g(O,T){const L=O.geometry;if(!L.attributes.position||!L.attributes.normal)return!1;const q=L.attributes.position.array,H=L.attributes.normal.array,j=new Q;O.getWorldPosition(j);let fe=0,me=0;for(let Y=0;Y<Math.min(q.length,180);Y+=9){const N=q[Y],G=q[Y+1],oe=q[Y+2],ve=H[Y],Ae=H[Y+1],P=H[Y+2],J=new Q(N,G,oe);J.applyMatrix4(O.matrixWorld);const W=new Q(ve,Ae,P);W.transformDirection(O.matrixWorld).normalize();const Re=j,Te=new Q().subVectors(Re,J).normalize();W.dot(Te)>0&&fe++,me++}return me>0&&fe/me>.5}function M(O,T){var Ae;const L=O.geometry,q=O.material,H=Array.isArray(q)?q[0]:q,j=new Ms().setFromObject(O),fe=new Q,me=new ji,Y=new Q;O.getWorldPosition(fe),O.updateWorldMatrix(!0,!1),me.setFromRotationMatrix(O.matrixWorld),O.getWorldScale(Y);let N=1;if(H){const P=H;P.opacity!==void 0&&(N=P.opacity),P.transparent&&P.opacity<1&&(N=P.opacity)}const G=O.userData.hasCollision!==!1&&O.name.includes("collider")||O.userData.isCollider===!0,oe=x(O),ve=g(O);return{meshName:O.name||"unnamed",meshId:O.id.toString(),roomId:oe.roomId,wallId:oe.wallId,floorId:oe.floorId,distance:T,hasCollision:G,isVisible:O.visible,materialOpacity:N,normalsFaceInward:ve,bounds:j,position:fe,rotation:me,scale:Y,geometryType:L.type,materialType:(H==null?void 0:H.type)||"unknown",vertexCount:((Ae=L.attributes.position)==null?void 0:Ae.count)||0,userData:{...O.userData}}}function b(O,T){if(o&&(r.remove(o),o=null),c&&(r.remove(c),c=null),!O){u=null;return}const L=new Ms().setFromObject(O),q=new Q,H=new Q;L.getSize(q),L.getCenter(H),o=p(),o.scale.copy(q),o.position.copy(H),r.add(o),c=_(),c.scale.copy(q),c.position.copy(H),r.add(c),u=M(O,T)}function C(){n.setFromCamera(new Et(0,0),e);const O=[];r.traverse(L=>{L instanceof nn&&L!==o&&!L.name.includes("debug")&&!L.name.includes("highlight")&&O.push(L)});const T=n.intersectObjects(O);return T.length>0?T[0].object:null}function S(){return C()}function y(){a=!0,console.log("[GeometryInspector] Enabled - cast rays from camera to detect rendered meshes")}function D(){a=!1,b(null,0),console.log("[GeometryInspector] Disabled")}function F(){a?D():y()}function I(){return a}function X(){return u}function B(O=20){console.log(`
=== GEOMETRY INSPECTOR: All Meshes Within ${O} Units ===`),console.log(`Player Position: (${e.position.x.toFixed(2)}, ${e.position.y.toFixed(2)}, ${e.position.z.toFixed(2)})`),console.log("=".repeat(70));const T=e.position,L=[];r.traverse(q=>{if(q instanceof nn&&q!==o&&!q.name.includes("debug")&&!q.name.includes("highlight")){const H=new Q;q.getWorldPosition(H);const j=H.distanceTo(T);if(j<=O){const fe=M(q,j);L.push({mesh:q,distance:j,info:fe})}}}),L.sort((q,H)=>q.distance-H.distance),console.log(`Found ${L.length} meshes within ${O} units:
`),L.forEach(({mesh:q,distance:H,info:j},fe)=>{console.log(`
--- Mesh #${fe+1} ---`),console.log(`  Name: "${j.meshName}" (ID: ${j.meshId})`),console.log(`  Distance: ${H.toFixed(2)} units`),console.log(`  Room ID: ${j.roomId||"N/A"}`),console.log(`  Wall ID: ${j.wallId||"N/A"}`),console.log(`  Floor ID: ${j.floorId||"N/A"}`),console.log(`  Position: (${j.position.x.toFixed(2)}, ${j.position.y.toFixed(2)}, ${j.position.z.toFixed(2)})`),console.log(`  Bounds Min: (${j.bounds.min.x.toFixed(2)}, ${j.bounds.min.y.toFixed(2)}, ${j.bounds.min.z.toFixed(2)})`),console.log(`  Bounds Max: (${j.bounds.max.x.toFixed(2)}, ${j.bounds.max.y.toFixed(2)}, ${j.bounds.max.z.toFixed(2)})`),console.log(`  Has Collision: ${j.hasCollision}`),console.log(`  Is Visible: ${j.isVisible}`),console.log(`  Material Opacity: ${j.materialOpacity.toFixed(2)} ${j.materialOpacity<1?"(TRANSPARENT!)":""}`),console.log(`  Normals Face Inward: ${j.normalsFaceInward}`),console.log(`  Geometry: ${j.geometryType} (${j.vertexCount} vertices)`),console.log(`  Material: ${j.materialType}`),Object.keys(j.userData).length>0&&console.log("  UserData:",JSON.stringify(j.userData,null,2))}),console.log(`
`+"=".repeat(70)),console.log(`Total: ${L.length} meshes`)}return window.inspectGeometry=()=>{B(20)},{enable:y,disable:D,toggle:F,isActive:I,getInspectedMesh:X,inspectAllMeshes:B,inspectAtCrosshair:S,updateHighlight:b}}const Gw=({data:r,onToggleNoclip:e,onRunConnectivity:n,onRunFloorAudit:a,onTeleportToSpawn:o,onTeleportToIssue:c,onToggleDebugLighting:u,onSetDebugLightingBrightness:h,onStairVisualToggle:m,onStairCollisionToggle:p})=>{var Ae,P,J;const[_,x]=nt.useState(!1),[g,M]=nt.useState("audit"),[b,C]=nt.useState(new Set),[S,y]=nt.useState("all"),[D,F]=nt.useState(!1),[I,X]=nt.useState(!1);nt.useEffect(()=>{m==null||m(D)},[D,m]),nt.useEffect(()=>{p==null||p(I)},[I,p]),nt.useEffect(()=>{const W=Re=>{Re.key==="F1"&&x(Te=>!Te),Re.key==="F2"&&(u==null||u())};return window.addEventListener("keydown",W),()=>window.removeEventListener("keydown",W)},[u]);const O=[...r.connectivityIssues.map(W=>({...W,source:"connectivity"})),...r.floorIntegrityIssues.map(W=>({...W,source:"floor"}))].filter(W=>S==="connectivity"?W.source==="connectivity":S==="floor"?W.source==="floor":!0),T=W=>{const Re=new Set(b);Re.has(W)?Re.delete(W):Re.add(W),C(Re)},L=W=>{switch(W.type){case"void_exposure":return"Add wall, barrier, or intentional opening marker.";case"missing_wall":return"Add missing wall geometry or mark as intentional opening.";case"missing_ceiling":return"Add ceiling geometry or verify if intentional (outdoor area).";case"disconnected_room":return"Add connecting doorway or teleport trigger.";case"gap":case"missing_tile":return"Fill floor gap with matching tile geometry.";case"height_mismatch":return"Adjust floor height to match adjacent sections.";case"crack":return"Repair crack or add decorative cover.";default:return"Review and fix geometry alignment."}},q=W=>{switch(W){case"critical":return"#f00";case"high":return"#ff6600";case"medium":return"#ff0";case"low":return"#0f0";default:return"#fff"}},H={position:"absolute",top:10,left:10,zIndex:1e3,fontFamily:"monospace",fontSize:"12px",color:"#0f0",backgroundColor:"rgba(0, 0, 0, 0.85)",border:"1px solid #0f0",borderRadius:"4px",padding:"10px",minWidth:"280px",maxWidth:"450px",userSelect:"none"},j={display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px",borderBottom:"1px solid #333",paddingBottom:"5px",cursor:"pointer"},fe={display:"flex",marginBottom:"10px",borderBottom:"1px solid #333"},me=W=>({flex:1,textAlign:"center",padding:"4px 2px",cursor:"pointer",backgroundColor:W?"#0f0":"transparent",color:W?"#000":"#0f0",fontWeight:"bold",fontSize:"10px"}),Y={display:_?"block":"none"},N={display:"flex",justifyContent:"space-between",marginBottom:"2px"},G={background:"#003300",color:"#0f0",border:"1px solid #0f0",padding:"4px 8px",cursor:"pointer",fontSize:"10px",marginTop:"5px",width:"100%",textAlign:"center"},oe={position:"absolute",top:10,right:10,zIndex:999,fontFamily:"monospace",fontSize:"14px",color:"#fff",backgroundColor:"rgba(0, 0, 0, 0.5)",padding:"5px 10px",borderRadius:"4px",pointerEvents:"none"},ve={position:"absolute",top:10,left:10,zIndex:998,fontFamily:"monospace",fontSize:"12px",color:r.debugLightingEnabled?"#ff0":"#666",backgroundColor:"rgba(0, 0, 0, 0.5)",padding:"5px 10px",borderRadius:"4px",pointerEvents:"none"};return V.jsxs(V.Fragment,{children:[r.debugLightingEnabled&&V.jsxs("div",{style:ve,children:["DEBUG LIGHTING: ON (",(Ae=r.debugLightingBrightness)==null?void 0:Ae.toFixed(1),"x)"]}),V.jsxs("div",{style:oe,children:[V.jsxs("span",{children:["FPS: ",Math.round(r.fps)]}),r.currentRoom&&V.jsxs("span",{style:{marginLeft:"10px"},children:["Room: ",r.currentRoom]})]}),V.jsxs("div",{style:H,children:[V.jsxs("div",{style:j,onClick:()=>x(!_),children:[V.jsx("strong",{children:"DEBUG CONSOLE [F1]"}),V.jsx("span",{children:_?"▼":"▶"})]}),_&&V.jsxs("div",{style:fe,children:[V.jsx("div",{style:me(g==="audit"),onClick:()=>M("audit"),children:"AUDIT"}),V.jsx("div",{style:me(g==="player"),onClick:()=>M("player"),children:"PLAYER"}),V.jsx("div",{style:me(g==="rounds"),onClick:()=>M("rounds"),children:"ROUNDS"}),V.jsx("div",{style:me(g==="perf"),onClick:()=>M("perf"),children:"PERF"}),V.jsx("div",{style:me(g==="stairs"),onClick:()=>M("stairs"),children:"STAIRS"})]}),V.jsxs("div",{style:Y,children:[g==="audit"&&V.jsxs("div",{children:[V.jsxs("div",{style:N,children:[V.jsx("span",{children:"Connectivity Issues:"}),V.jsx("span",{style:{color:r.connectivityIssues.length>0?"#f00":"#0f0"},children:r.connectivityIssues.length})]}),V.jsxs("div",{style:N,children:[V.jsx("span",{children:"Floor Integrity:"}),V.jsx("span",{style:{color:r.floorIntegrityIssues.length>0?"#f00":"#0f0"},children:r.floorIntegrityIssues.length})]}),V.jsxs("div",{style:{marginTop:"10px",borderTop:"1px dashed #333",paddingTop:"5px"},children:[V.jsx("div",{style:{display:"flex",gap:"4px",marginBottom:"8px"},children:["all","connectivity","floor","open"].map(W=>V.jsx("button",{onClick:()=>y(W),style:{...G,marginTop:0,backgroundColor:S===W?"#0f0":"#003300",color:S===W?"#000":"#0f0",flex:1,fontSize:"9px",padding:"3px 2px"},children:W.toUpperCase()},W))}),V.jsx("div",{style:{...G,marginTop:"2px"},onClick:()=>{b.size===O.length?C(new Set):C(new Set(O.map(W=>W.id)))},children:b.size===O.length?"Collapse All":"Expand All"})]}),O.length>0&&V.jsx("div",{style:{marginTop:"10px",maxHeight:"300px",overflowY:"auto"},children:O.map((W,Re)=>{const Te=b.has(W.id);return V.jsxs("div",{style:{border:"1px solid #333",borderRadius:"3px",marginBottom:"6px",backgroundColor:Te?"rgba(0, 255, 0, 0.1)":"transparent"},children:[V.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 6px",cursor:"pointer"},onClick:()=>T(W.id),children:[V.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[V.jsxs("span",{style:{fontSize:"10px",color:"#888"},children:["#",Re+1]}),V.jsxs("span",{style:{fontSize:"10px",fontWeight:"bold",color:q(W.severity)},children:["[",W.type.toUpperCase(),"]"]}),V.jsx("span",{style:{fontSize:"10px",color:"#aaa"},children:W.roomName})]}),V.jsx("span",{style:{fontSize:"10px"},children:Te?"▼":"▶"})]}),Te&&V.jsxs("div",{style:{padding:"6px",borderTop:"1px solid #333",fontSize:"10px"},children:[V.jsxs("div",{style:N,children:[V.jsx("span",{children:"Position:"}),V.jsxs("span",{children:["[",W.location[0].toFixed(1),", ",W.location[1].toFixed(1),", ",W.location[2].toFixed(1),"]"]})]}),V.jsxs("div",{style:N,children:[V.jsx("span",{children:"Severity:"}),V.jsx("span",{style:{color:q(W.severity)},children:W.severity.toUpperCase()})]}),V.jsxs("div",{style:{marginTop:"4px"},children:[V.jsx("span",{style:{color:"#888"},children:"Reason: "}),V.jsx("span",{children:"description"in W?W.description:W.cause})]}),"details"in W&&W.details&&V.jsxs("div",{style:{marginTop:"2px"},children:[V.jsx("span",{style:{color:"#888"},children:"Details: "}),V.jsx("span",{children:W.details})]}),V.jsxs("div",{style:{marginTop:"6px",padding:"4px",backgroundColor:"rgba(255, 255, 0, 0.1)",borderLeft:"2px solid #ff0"},children:[V.jsx("span",{style:{color:"#ff0"},children:"Suggested Fix: "}),V.jsx("span",{children:L(W)})]}),c&&V.jsx("button",{style:{...G,marginTop:"6px"},onClick:ie=>{ie.stopPropagation(),c(W)},children:"Teleport To Issue"})]})]},W.id)})}),V.jsxs("div",{style:{marginTop:"10px",borderTop:"1px dashed #333",paddingTop:"5px"},children:[V.jsx("div",{style:G,onClick:n,children:"Run Connectivity Audit"}),V.jsx("div",{style:{...G,marginTop:"2px"},onClick:a,children:"Run Floor Integrity"}),V.jsx("div",{style:{...G,marginTop:"2px"},onClick:o,children:"Teleport to Spawn"})]})]}),g==="player"&&V.jsxs("div",{children:[r.roomDetectorStatus&&V.jsxs("div",{style:{border:"1px solid #f00",backgroundColor:"rgba(255, 0, 0, 0.1)",padding:"8px",marginBottom:"10px",borderRadius:"4px"},children:[V.jsx("strong",{style:{color:"#f00",display:"block",marginBottom:"6px"},children:"ROOM DETECTOR STATUS"}),V.jsxs("div",{style:N,children:[V.jsx("span",{children:"Player Position:"}),V.jsxs("span",{children:["[",r.roomDetectorStatus.playerPosition.x.toFixed(1),", ",r.roomDetectorStatus.playerPosition.y.toFixed(1),", ",r.roomDetectorStatus.playerPosition.z.toFixed(1),"]"]})]}),V.jsxs("div",{style:N,children:[V.jsx("span",{children:"Room Count:"}),V.jsx("span",{children:r.roomDetectorStatus.roomCount})]}),V.jsxs("div",{style:N,children:[V.jsx("span",{children:"Current Room:"}),V.jsx("span",{style:{color:r.roomDetectorStatus.currentRoom?"#0f0":"#f00"},children:r.roomDetectorStatus.currentRoom||"None"})]}),V.jsxs("div",{style:N,children:[V.jsx("span",{children:"Closest Room:"}),V.jsx("span",{children:r.roomDetectorStatus.closestRoom||"N/A"})]}),V.jsxs("div",{style:N,children:[V.jsx("span",{children:"Distance:"}),V.jsx("span",{children:r.roomDetectorStatus.closestDistance.toFixed(2)})]}),r.roomDetectorStatus.rejectionReason&&V.jsxs("div",{style:{marginTop:"6px",padding:"4px",backgroundColor:"rgba(255, 0, 0, 0.2)",borderLeft:"2px solid #f00",fontSize:"10px"},children:[V.jsx("span",{style:{color:"#f00"},children:"Reason: "}),V.jsx("span",{children:r.roomDetectorStatus.rejectionReason})]})]}),V.jsxs("div",{style:N,children:[V.jsx("span",{children:"Pos X:"}),V.jsx("span",{children:r.playerPos.x.toFixed(2)})]}),V.jsxs("div",{style:N,children:[V.jsx("span",{children:"Pos Y:"}),V.jsx("span",{children:r.playerPos.y.toFixed(2)})]}),V.jsxs("div",{style:N,children:[V.jsx("span",{children:"Pos Z:"}),V.jsx("span",{children:r.playerPos.z.toFixed(2)})]}),V.jsxs("div",{style:N,children:[V.jsx("span",{children:"Rot Y:"}),V.jsxs("span",{children:[PM.radToDeg(r.playerRot.y).toFixed(1),"°"]})]}),V.jsxs("div",{style:N,children:[V.jsx("span",{children:"Room:"}),V.jsx("span",{children:r.currentRoom||"None"})]}),V.jsxs("div",{style:N,children:[V.jsx("span",{children:"Noclip:"}),V.jsxs("span",{style:{color:r.noclip?"#0ff":"#f00",cursor:"pointer",textDecoration:"underline"},onClick:e,children:[r.noclip?"ON":"OFF"," (Click)"]})]}),V.jsxs("div",{style:{...N,marginTop:"8px",borderTop:"1px dashed #333",paddingTop:"8px"},children:[V.jsx("span",{children:"Debug Lighting:"}),V.jsxs("span",{style:{color:r.debugLightingEnabled?"#ff0":"#f00",cursor:"pointer",textDecoration:"underline"},onClick:u,children:[r.debugLightingEnabled?"ON":"OFF"," (Click)"]})]}),h&&V.jsxs("div",{style:{marginTop:"8px"},children:[V.jsxs("div",{style:N,children:[V.jsx("span",{children:"Brightness:"}),V.jsxs("span",{children:[(P=r.debugLightingBrightness)==null?void 0:P.toFixed(1),"x"]})]}),V.jsx("input",{type:"range",min:"1.0",max:"5.0",step:"0.1",value:r.debugLightingBrightness||3,onChange:W=>h==null?void 0:h(parseFloat(W.target.value)),style:{width:"100%",marginTop:"4px",cursor:"pointer"}}),V.jsx("div",{style:{fontSize:"9px",color:"#888",marginTop:"2px"},children:"Range: 1.0x - 5.0x"})]})]}),g==="rounds"&&V.jsxs("div",{children:[V.jsxs("div",{style:N,children:[V.jsx("span",{children:"Current Round:"}),V.jsx("span",{children:r.round})]}),V.jsxs("div",{style:N,children:[V.jsx("span",{children:"Zombies Alive:"}),V.jsx("span",{children:r.zombiesAlive})]}),V.jsxs("div",{style:N,children:[V.jsx("span",{children:"Spawn Status:"}),V.jsx("span",{children:r.spawnStatus})]})]}),g==="perf"&&V.jsxs("div",{children:[V.jsxs("div",{style:N,children:[V.jsx("span",{children:"FPS:"}),V.jsx("span",{style:{color:r.fps>50?"#0f0":r.fps>30?"#ff0":"#f00"},children:Math.round(r.fps)})]}),V.jsxs("div",{style:N,children:[V.jsx("span",{children:"Draw Calls:"}),V.jsx("span",{children:r.drawCalls})]}),V.jsxs("div",{style:N,children:[V.jsx("span",{children:"Mesh Count:"}),V.jsx("span",{children:r.meshCount})]})]}),g==="stairs"&&V.jsxs("div",{children:[V.jsxs("div",{style:{border:"1px solid #0ff",backgroundColor:"rgba(0, 255, 255, 0.1)",padding:"8px",marginBottom:"10px",borderRadius:"4px"},children:[V.jsx("strong",{style:{color:"#0ff",display:"block",marginBottom:"6px"},children:"STAIR VISUALIZATION TOGGLES"}),V.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"8px"},children:[V.jsxs("button",{onClick:()=>F(!D),style:{...G,marginTop:0,backgroundColor:D?"#00ffff":"#003333",color:D?"#000":"#0ff",flex:1,fontSize:"9px",padding:"4px 2px"},children:["VISUAL MESH (BLUE): ",D?"ON":"OFF"]}),V.jsxs("button",{onClick:()=>X(!I),style:{...G,marginTop:0,backgroundColor:I?"#ff0000":"#330000",color:I?"#000":"#f00",flex:1,fontSize:"9px",padding:"4px 2px"},children:["COLLISION (RED): ",I?"ON":"OFF"]})]}),V.jsx("div",{style:{fontSize:"9px",color:"#888"},children:"Note: Enable toggles above to see wireframe overlays in the 3D scene."})]}),r.stairDebugData&&r.stairDebugData.length>0&&V.jsxs("div",{style:{border:"1px solid #ff0",backgroundColor:"rgba(255, 255, 0, 0.1)",padding:"8px",marginBottom:"10px",borderRadius:"4px"},children:[V.jsx("strong",{style:{color:"#ff0",display:"block",marginBottom:"6px"},children:"STAIR ALIGNMENT ANALYSIS"}),r.stairDebugData.map((W,Re)=>V.jsxs("div",{style:{border:W.isMisaligned?"1px solid #f00":"1px solid #333",backgroundColor:W.validationPass?"transparent":"rgba(255, 0, 0, 0.15)",borderRadius:"3px",padding:"6px",marginBottom:"6px"},children:[V.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"4px"},children:[V.jsxs("strong",{style:{color:W.validationPass?"#0f0":"#f00"},children:["[",W.id,"] ",W.name]}),V.jsx("span",{style:{color:W.validationPass?"#0f0":"#f00",fontSize:"9px",fontWeight:"bold"},children:W.validationPass?"✓ PASS":"⚠️ FAIL"})]}),V.jsxs("div",{style:{fontSize:"9px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2px"},children:[V.jsx("span",{style:{color:"#888"},children:"Direction:"}),V.jsx("span",{children:W.direction}),V.jsx("span",{style:{color:"#888"},children:"Dimensions:"}),V.jsxs("span",{children:[W.width," x ",W.depth," (climb: ",W.climbHeight,")"]}),V.jsx("span",{style:{color:"#0af"},children:"Visual Pos:"}),V.jsxs("span",{children:["[",W.visualPosition.x.toFixed(2),", ",W.visualPosition.y.toFixed(2),", ",W.visualPosition.z.toFixed(2),"]"]}),V.jsx("span",{style:{color:"#f00"},children:"Collision Pos:"}),V.jsxs("span",{children:["[",W.collisionPosition.x.toFixed(2),", ",W.collisionPosition.y.toFixed(2),", ",W.collisionPosition.z.toFixed(2),"]"]}),V.jsx("span",{style:{color:"#0af"},children:"Visual Rot:"}),V.jsxs("span",{children:["[",W.visualRotation.x.toFixed(3),", ",W.visualRotation.y.toFixed(3),", ",W.visualRotation.z.toFixed(3),"]"]}),V.jsx("span",{style:{color:"#f00"},children:"Collision Rot:"}),V.jsxs("span",{children:["[",W.collisionRotation.x.toFixed(3),", ",W.collisionRotation.y.toFixed(3),", ",W.collisionRotation.z.toFixed(3),"]"]}),V.jsx("span",{style:{color:"#ff0"},children:"Offset (V-C):"}),V.jsxs("span",{style:{color:Math.abs(W.offsetX)>.01||Math.abs(W.offsetY)>.01||Math.abs(W.offsetZ)>.01?"#f00":"#0f0"},children:["X:",W.offsetX.toFixed(4)," Y:",W.offsetY.toFixed(4)," Z:",W.offsetZ.toFixed(4)]}),V.jsx("span",{style:{color:"#ff0"},children:"Rot Diff:"}),V.jsxs("span",{style:{color:Math.abs(W.rotationDiffX)>.001||Math.abs(W.rotationDiffY)>.001||Math.abs(W.rotationDiffZ)>.001?"#f00":"#0f0"},children:["X:",W.rotationDiffX.toFixed(4)," Y:",W.rotationDiffY.toFixed(4)," Z:",W.rotationDiffZ.toFixed(4)]}),V.jsx("span",{style:{color:"#0ff"},children:"Position Delta:"}),V.jsx("span",{style:{color:W.positionDelta<.01?"#0f0":"#f00"},children:W.positionDelta.toFixed(4)}),V.jsx("span",{style:{color:"#0ff"},children:"Rotation Delta:"}),V.jsx("span",{style:{color:W.rotationDelta<.001?"#0f0":"#f00"},children:W.rotationDelta.toFixed(4)}),V.jsx("span",{style:{color:"#0ff"},children:"Height Delta:"}),V.jsx("span",{style:{color:W.heightDelta<.01?"#0f0":"#f00"},children:W.heightDelta.toFixed(4)})]}),!W.validationPass&&W.misalignmentWarning&&V.jsx("div",{style:{marginTop:"4px",padding:"4px",backgroundColor:"rgba(255, 0, 0, 0.3)",borderLeft:"2px solid #f00",fontSize:"9px",color:"#f00",fontWeight:"bold"},children:W.misalignmentWarning})]},W.id))]}),r.playerStairAnalysis&&V.jsxs("div",{style:{border:r.playerStairAnalysis.isInStairwell?"1px solid #0f0":"1px solid #333",backgroundColor:r.playerStairAnalysis.isInStairwell?"rgba(0, 255, 0, 0.1)":"transparent",padding:"8px",marginBottom:"10px",borderRadius:"4px"},children:[V.jsxs("strong",{style:{color:r.playerStairAnalysis.isInStairwell?"#0f0":"#888",display:"block",marginBottom:"6px"},children:["PLAYER STAIR ANALYSIS ",r.playerStairAnalysis.isInStairwell?"✓ IN STAIRWELL":"(not in stairwell)"]}),V.jsxs("div",{style:{fontSize:"10px"},children:[V.jsxs("div",{style:N,children:[V.jsx("span",{children:"Player Position:"}),V.jsxs("span",{children:["[",r.playerStairAnalysis.playerPosition.x.toFixed(2),", ",r.playerStairAnalysis.playerPosition.y.toFixed(2),", ",r.playerStairAnalysis.playerPosition.z.toFixed(2),"]"]})]}),V.jsxs("div",{style:N,children:[V.jsx("span",{children:"Current Room:"}),V.jsx("span",{children:r.playerStairAnalysis.currentRoomId||"None"})]}),r.playerStairAnalysis.isInStairwell&&V.jsxs(V.Fragment,{children:[V.jsxs("div",{style:N,children:[V.jsx("span",{children:"Expected Ramp Height:"}),V.jsx("span",{children:((J=r.playerStairAnalysis.expectedRampHeight)==null?void 0:J.toFixed(2))??"N/A"})]}),V.jsxs("div",{style:N,children:[V.jsx("span",{children:"Actual Player Height (Y):"}),V.jsx("span",{children:r.playerStairAnalysis.actualPlayerHeight.toFixed(2)})]}),V.jsxs("div",{style:{...N,marginTop:"4px",paddingTop:"4px",borderTop:"1px dashed #555"},children:[V.jsx("span",{children:"Height Difference:"}),V.jsxs("span",{style:{color:Math.abs(r.playerStairAnalysis.heightDifference)>.5?"#f00":"#0f0",fontWeight:"bold"},children:[r.playerStairAnalysis.heightDifference.toFixed(2),Math.abs(r.playerStairAnalysis.heightDifference)>.5?" ⚠️ FLOATING/FALLING":" ✓ ALIGNED"]})]})]})]})]}),V.jsx("button",{onClick:()=>{var Re;const W={timestamp:new Date().toISOString(),stairs:(Re=r.stairDebugData)==null?void 0:Re.map(Te=>({id:Te.id,name:Te.name,direction:Te.direction,dimensions:`${Te.width}x${Te.depth} (climb: ${Te.climbHeight})`,visualPos:Te.visualPosition,collisionPos:Te.collisionPosition,offset:{x:Te.offsetX,y:Te.offsetY,z:Te.offsetZ},rotationDiff:{x:Te.rotationDiffX,y:Te.rotationDiffY,z:Te.rotationDiffZ},isMisaligned:Te.isMisaligned,warning:Te.misalignmentWarning})),playerAnalysis:r.playerStairAnalysis,toggles:{visualEnabled:D,collisionEnabled:I}};navigator.clipboard.writeText(JSON.stringify(W,null,2)),alert("Stair debug report copied to clipboard!")},style:{...G,marginTop:"10px",backgroundColor:"#004400",borderColor:"#0f0"},children:"📋 COPY STAIR DEBUG REPORT"})]})]})]})]})},Eh={},Th=r=>{if(Eh[r])return Eh[r];const e=document.createElement("canvas");e.width=512,e.height=512;const n=e.getContext("2d");if(r==="wood_floor"){n.fillStyle="#452c1e",n.fillRect(0,0,512,512);const o=512/8;for(let c=0;c<8;c++){n.fillStyle=c%2===0?"#4e3425":"#3c2518",c%3===0&&(n.fillStyle="#432a1d"),n.fillRect(0,c*o,512,o),n.strokeStyle="#29170e",n.lineWidth=1;for(let h=0;h<5;h++)n.beginPath(),n.moveTo(0,c*o+Math.random()*o),n.quadraticCurveTo(256,c*o+Math.random()*o*2-o/2,512,c*o+Math.random()*o),n.stroke();const u=c%2===0?[150,380]:[220,440];n.fillStyle="#1e110a",u.forEach(h=>{n.fillRect(h,c*o,2,o)}),n.strokeStyle="#1a0d06",n.lineWidth=2,n.beginPath(),n.moveTo(0,c*o),n.lineTo(512,c*o),n.stroke()}}else if(r==="ceiling_tiles"){n.fillStyle="#dcd5ca",n.fillRect(0,0,512,512);for(let c=0;c<600;c++)n.fillStyle=Math.random()>.5?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.05)",n.fillRect(Math.random()*512,Math.random()*512,2,2);const o=256;for(let c=0;c<2;c++)for(let u=0;u<2;u++){const h=u*o,m=c*o;n.fillStyle="rgba(115, 87, 59, 0.15)",n.strokeStyle="rgba(92, 70, 48, 0.35)",n.lineWidth=1.5;for(let x=0;x<4;x++){const g=h+30+Math.random()*(o-60),M=m+30+Math.random()*(o-60),b=25+Math.random()*45;n.beginPath(),n.arc(g,M,b,0,Math.PI*2),n.fill(),n.beginPath(),n.arc(g,M,b+4,0,Math.PI*2),n.stroke()}n.fillStyle="rgba(40, 45, 35, 0.65)";for(let x=0;x<35;x++)n.fillRect(h+Math.random()*o,m+Math.random()*o,1.5,1.5);n.strokeStyle="rgba(50,50,50,0.25)",n.lineWidth=1,n.beginPath();let p=h+20,_=m+20;n.moveTo(p,_);for(let x=0;x<10;x++)p+=(Math.random()-.5)*15,_+=Math.random()*20,n.lineTo(p,_);n.stroke()}n.strokeStyle="#2d2e33",n.lineWidth=6,n.beginPath(),n.moveTo(0,0),n.lineTo(512,0),n.moveTo(0,256),n.lineTo(512,256),n.moveTo(0,512),n.lineTo(512,512),n.moveTo(0,0),n.lineTo(0,512),n.moveTo(256,0),n.lineTo(256,512),n.moveTo(512,0),n.lineTo(512,512),n.stroke(),n.fillStyle="rgba(92, 49, 14, 0.55)";for(let c=0;c<20;c++)n.fillRect(Math.random()*512,253+Math.random()*6,Math.random()*25,Math.random()*3),n.fillRect(253+Math.random()*6,Math.random()*512,Math.random()*3,Math.random()*25)}else if(r==="wall_tiles"){n.fillStyle="#6d8a6b",n.fillRect(0,0,512,512);const o=8,c=64;for(let u=0;u<o;u++)for(let h=0;h<o;h++){const m=h*c,p=u*c;if(n.fillStyle=(u+h)%2===0?"#728e6f":"#688566",u*h%5===0&&(n.fillStyle="#5c7859"),n.fillRect(m+1,p+1,c-2,c-2),n.strokeStyle="rgba(255,255,255,0.06)",n.strokeRect(m+2,p+2,c-4,c-4),Math.random()<.15&&(n.strokeStyle="rgba(20, 25, 20, 0.55)",n.lineWidth=1,n.beginPath(),n.moveTo(m+Math.random()*c,p+Math.random()*c),n.lineTo(m+Math.random()*c,p+Math.random()*c),n.stroke()),u===2&&h===4||u===6&&h===1||u===4&&h===6){n.fillStyle="#222520",n.fillRect(m+2,p+2,c-4,c-4),n.fillStyle="#444c41";for(let _=0;_<10;_++)n.fillRect(m+Math.random()*c,p+Math.random()*c,Math.random()*6,Math.random()*6)}}n.strokeStyle="#252924",n.lineWidth=2,n.beginPath();for(let u=0;u<=o;u++)n.moveTo(0,u*c),n.lineTo(512,u*c),n.moveTo(u*c,0),n.lineTo(u*c,512);n.stroke();for(let u=0;u<12;u++){const h=Math.random()*512,m=Math.random()*80,p=150+Math.random()*250,_=n.createLinearGradient(h,m,h,m+p);_.addColorStop(0,"rgba(21, 26, 19, 0.55)"),_.addColorStop(.3,"rgba(15, 20, 14, 0.35)"),_.addColorStop(1,"rgba(15, 20, 14, 0.0)"),n.fillStyle=_,n.fillRect(h-3,m,6,p)}n.strokeStyle="rgba(224, 215, 200, 0.35)",n.lineWidth=1.5,n.font="22px Arial",n.strokeText("WASH ME",80,200),n.strokeText("CLASS OF '95",280,390)}const a=new fv(e);return a.wrapS=ml,a.wrapT=ml,Eh[r]=a,a},Gx=(r,e,n)=>{const a=r.stairDirection||(r.w>r.d?"W_E":"N_S"),o=r.climbHeight??r.h;if(a==="W_E"){const c=r.cx-r.w/2,u=Math.max(0,Math.min(1,(e-c)/r.w));return r.floorY+u*o}else if(a==="E_W"){const c=r.cx-r.w/2,u=Math.max(0,Math.min(1,(e-c)/r.w));return r.floorY+(1-u)*o}else if(a==="S_N"){const c=r.cz-r.d/2,u=Math.max(0,Math.min(1,(n-c)/r.d));return r.floorY+u*o}else if(a==="N_S"){const c=r.cz-r.d/2,u=Math.max(0,Math.min(1,(n-c)/r.d));return r.floorY+(1-u)*o}},_n=[{id:"starter",name:"Starter Classroom",cx:17.5,cz:-40,w:75,d:60,floorY:0,h:10,color:"#3d5c3a",floorTexture:"wood_floor.png"},{id:"hallway",name:"Main Hallway",cx:20,cz:-3,w:80,d:14,floorY:0,h:10,color:"#323247"},{id:"science_lab",name:"Science Lab",cx:5,cz:26.5,w:30,d:45,floorY:0,h:10,color:"#4a3720"},{id:"library",name:"Library Shelf Area",cx:40,cz:26.5,w:36,d:45,floorY:0,h:10,color:"#453c1b",floorTexture:"wood_floor.png"},{id:"stairwell",name:"Stairwell Access",cx:68,cz:-3,w:16,d:10,floorY:0,h:22,climbHeight:11,color:"#542828",isStaircase:!0,stairDirection:"W_E"},{id:"gym",name:"Gymnasium (Floor 2)",cx:144,cz:15,w:80,d:60,floorY:11,h:18,color:"#20434f",carvedFloors:[]},{id:"cafeteria",name:"Cafeteria Wing",cx:-50,cz:-3,w:60,d:50,floorY:0,h:10,color:"#2a261f"},{id:"courtyard",name:"Overgrown Courtyard",cx:-63,cz:57,w:90,d:70,floorY:0,h:15,color:"#162e1a",disabledCeiling:!0,trapdoors:[{cx:-42,cz:-48.5,w:8,d:8},{cx:-42,cz:-31,w:12,d:6}]},{id:"underground_tunnel",name:"Utility Tunnel",cx:-103,cz:63.4,w:12,d:80,floorY:-12,h:9,color:"#111412",ceilingHoles:[{cx:-42,cz:-48.5,w:8,d:8},{cx:-42,cz:-31,w:12,d:6}]},{id:"the_vault",name:"Fallout Shelter Vault",cx:-103,cz:123.4,w:60,d:40,floorY:-12,h:9,color:"#282b29"},{id:"upper_hallway",name:"2nd Floor Hallway",cx:90,cz:-3,w:28,d:14,floorY:11,h:10,color:"#2a2d36",floorTexture:"wood_floor.png"},{id:"principal_office",name:"Principal's Office",cx:90,cz:127,w:56,d:56,floorY:11,h:10,color:"#362a2a"},{id:"upper_hallway_2",name:"2nd floor hallway 2",cx:90,cz:51.5,w:18,d:95,floorY:11,h:10,color:"#2a2d36",floorTexture:"wood_floor.png"},{id:"security_room",name:"Master Security & Breaker Room",cx:66,cz:51.5,w:30,d:35,floorY:11,h:10,color:"#1a212b"},{id:"upper_hallway_north",name:"2nd Floor North Connector",cx:150,cz:92,w:102,d:14,floorY:11,h:10,color:"#2a2d36",floorTexture:"wood_floor.png"},{id:"gym_north_hallway",name:"Gym North Connector",cx:144,cz:65,w:18,d:40,floorY:11,h:10,color:"#2a2d36",floorTexture:"wood_floor.png"},{id:"nurses_office",name:"Nurse's Office",cx:164,cz:112,w:32,d:26,floorY:11,h:10,color:"#1f3d3c",floorTexture:"wood_floor.png"},{id:"nurses_office_backroom",name:"Nurse's Office Backroom",cx:164,cz:135,w:24,d:20,floorY:11,h:10,color:"#19302f",floorTexture:"wood_floor.png"},{id:"stairwell_2",name:"Secondary Stairwell",cx:90,cz:-22,w:16,d:24,floorY:0,h:22,climbHeight:11,color:"#542828",isStaircase:!0,stairDirection:"S_N"},{id:"lower_hallway_south",name:"South Wing Hallway",cx:90,cz:-76.5,w:14,d:85,floorY:0,h:10,color:"#2a2d36",floorTexture:"wood_floor.png"},{id:"main_office",name:"Main Office",cx:90,cz:-139,w:50,d:40,floorY:0,h:10,color:"#1e293b",floorTexture:"wood_floor.png"}],ta={starter:[{side:"N",center:-17.5,width:6}],hallway:[{side:"S",center:-20,width:6},{side:"N",center:-15,width:6},{side:"N",center:20,width:6},{side:"E",center:0,width:6},{side:"W",center:0,width:14}],science_lab:[{side:"S",center:0,width:6}],library:[{side:"S",center:0,width:6}],stairwell:[{side:"W",center:0,width:6},{side:"E",center:0,width:10}],gym:[{side:"W",center:-18,width:10},{side:"S",center:0,width:10},{side:"N",center:0,width:10}],cafeteria:[{side:"E",center:0,width:14},{side:"N",center:0,width:12}],courtyard:[{side:"S",center:13,width:12}],boiler_room:[{side:"N",center:0,width:12}],underground_tunnel:[{side:"S",center:0,width:12},{side:"N",center:0,width:12}],the_vault:[{side:"S",center:0,width:12}],upper_hallway:[{side:"W",center:0,width:10},{side:"E",center:0,width:10},{side:"S",center:0,width:6},{side:"N",center:0,width:10}],principal_office:[{side:"S",center:0,width:8}],upper_hallway_2:[{side:"S",center:0,width:10},{side:"W",center:0,width:8},{side:"E",center:40.5,width:10},{side:"N",center:0,width:8}],security_room:[{side:"E",center:0,width:8}],upper_hallway_north:[{side:"W",center:0,width:10},{side:"N",center:12,width:10},{side:"N",center:14,width:6},{side:"S",center:-6,width:10}],gym_north_hallway:[{side:"N",center:0,width:10},{side:"S",center:0,width:10}],nurses_office:[{side:"S",center:0,width:6},{side:"N",center:0,width:6}],nurses_office_backroom:[{side:"S",center:0,width:6}],stairwell_2:[{side:"N",center:0,width:6},{side:"S",center:0,width:6}],lower_hallway_south:[{side:"N",center:0,width:6},{side:"S",center:0,width:6}],main_office:[{side:"N",center:0,width:6}]},Hx=[{roomId:"starter",side:"N",gapIndex:0,cost:750},{roomId:"hallway",side:"S",gapIndex:0,cost:750},{roomId:"hallway",side:"N",gapIndex:0,cost:750},{roomId:"hallway",side:"N",gapIndex:1,cost:750},{roomId:"hallway",side:"E",gapIndex:0,cost:750},{roomId:"hallway",side:"W",gapIndex:0,cost:1e3},{roomId:"science_lab",side:"S",gapIndex:0,cost:1e3},{roomId:"library",side:"S",gapIndex:0,cost:1e3},{roomId:"stairwell",side:"W",gapIndex:0,cost:750},{roomId:"stairwell",side:"E",gapIndex:0,cost:750},{roomId:"gym",side:"W",gapIndex:0,cost:1250},{roomId:"gym",side:"S",gapIndex:0,cost:1e3},{roomId:"gym",side:"N",gapIndex:0,cost:1e3},{roomId:"cafeteria",side:"E",gapIndex:0,cost:1250},{roomId:"cafeteria",side:"N",gapIndex:0,cost:1e3},{roomId:"courtyard",side:"S",gapIndex:0,cost:1250},{roomId:"underground_tunnel",side:"S",gapIndex:0,cost:1e3},{roomId:"underground_tunnel",side:"N",gapIndex:0,cost:1e3},{roomId:"the_vault",side:"S",gapIndex:0,cost:1500},{roomId:"upper_hallway",side:"W",gapIndex:0,cost:750},{roomId:"upper_hallway",side:"E",gapIndex:0,cost:750},{roomId:"upper_hallway",side:"S",gapIndex:0,cost:750},{roomId:"upper_hallway",side:"N",gapIndex:0,cost:750},{roomId:"principal_office",side:"S",gapIndex:0,cost:1e3},{roomId:"upper_hallway_2",side:"S",gapIndex:0,cost:750},{roomId:"upper_hallway_2",side:"W",gapIndex:0,cost:750},{roomId:"upper_hallway_2",side:"E",gapIndex:0,cost:750},{roomId:"upper_hallway_2",side:"N",gapIndex:0,cost:750},{roomId:"security_room",side:"E",gapIndex:0,cost:1e3},{roomId:"upper_hallway_north",side:"W",gapIndex:0,cost:750},{roomId:"upper_hallway_north",side:"N",gapIndex:0,cost:750},{roomId:"upper_hallway_north",side:"N",gapIndex:1,cost:750},{roomId:"upper_hallway_north",side:"S",gapIndex:0,cost:750},{roomId:"gym_north_hallway",side:"N",gapIndex:0,cost:750},{roomId:"gym_north_hallway",side:"S",gapIndex:0,cost:750},{roomId:"nurses_office",side:"S",gapIndex:0,cost:750},{roomId:"nurses_office",side:"N",gapIndex:0,cost:750},{roomId:"nurses_office_backroom",side:"S",gapIndex:0,cost:750},{roomId:"stairwell_2",side:"N",gapIndex:0,cost:750},{roomId:"stairwell_2",side:"S",gapIndex:0,cost:750},{roomId:"lower_hallway_south",side:"N",gapIndex:0,cost:750},{roomId:"lower_hallway_south",side:"S",gapIndex:0,cost:750},{roomId:"main_office",side:"N",gapIndex:0,cost:1e3}],Hw=[{id:"mystery_box_spawn",type:"interactable",roomId:"starter",cx:15,cz:-25,w:4,d:2,h:3,color:"#8b5a2b"},{id:"main_power_switch",type:"interactable",roomId:"security_room",cx:54,cz:51.5,w:4,d:1,h:4,color:"#8b0000"}],fl={wallThickness:.4,ceilingThickness:.15,doorHeight:7.5,floorThickness:.2},Vw=fl.doorHeight,ll=4.5,kw=1;function Ww(){var Ve;const r=nt.useRef(null),e=nt.useRef(null),n=nt.useRef(null),a=nt.useRef(Math.PI),o=nt.useRef(0),c=nt.useRef(new Q(0,ll,-30)),u=nt.useRef(0),h=nt.useRef({}),m=nt.useRef(!0),p=nt.useRef(!1),[_,x]=nt.useState(!1),[g,M]=nt.useState(""),[b,C]=nt.useState(!1),[S,y]=nt.useState(!1),[D,F]=nt.useState([]),[I,X]=nt.useState(-1),B=nt.useRef(Nw()),[O,T]=nt.useState(!1),[L,q]=nt.useState([]),[H,j]=nt.useState(-1),fe=nt.useRef(Iw()),[me,Y]=nt.useState(!1),[N,G]=nt.useState([]),[oe,ve]=nt.useState(-1),Ae=nt.useRef(Av()),[P,J]=nt.useState(null),[W,Re]=nt.useState(!1),Te=nt.useRef(null),[ie,Ue]=nt.useState(null),Ce=nt.useRef(null),[tt,ft]=nt.useState(!1),[dt,Xt]=nt.useState(!1),[_t,Rt]=nt.useState(!1),[Bt,xt]=nt.useState(3),[dn,Kt]=nt.useState(60),[wn,Z]=nt.useState(0),[rn,Tt]=nt.useState(0),[Ft,Fe]=nt.useState(""),[Qt,U]=nt.useState({round:1,zombiesAlive:0,spawnStatus:"idle"}),[E,te]=nt.useState(!1),[Me,Ie]=nt.useState(!1),[ke,Xe]=nt.useState([]),[pe,_e]=nt.useState(null),Ge=nt.useRef(null),je=nt.useRef(1),We=()=>{const Oe=!_t;Rt(Oe),Ge.current&&(Oe?(je.current=Ge.current.intensity,Ge.current.intensity=Bt,console.log("[DEBUG LIGHTING] ON - Brightness:",Bt)):(Ge.current.intensity=je.current,console.log("[DEBUG LIGHTING] OFF")))};return nt.useEffect(()=>{const Oe=e.current,qe=r.current;if(!Oe||!qe)return;ww();const z=hl().on("purchaseAttempt",De=>{console.log("[App] Door purchase attempt failed:",De.doorName),ft(!0),setTimeout(()=>ft(!1),2e3)});return()=>{z()}},[]),nt.useEffect(()=>(window.runConnectivityAudit=()=>{const Oe=Ae.current;Oe.initialize(_n,ta,"starter");const qe=Oe.runAudit(),ot=Oe.getIssues();return G(ot),J(qe),Y(!0),ve(-1),console.log("=== MAP CONNECTIVITY AUDIT REPORT ==="),console.log(`Total Rooms Scanned: ${_n.length}`),console.log(`Total Connected Rooms: ${qe.totalConnectedRooms}`),console.log(`Disconnected Rooms: ${qe.disconnectedRooms.length}`),qe.disconnectedRooms.length>0&&qe.disconnectedRooms.forEach(z=>console.log(`  - ${z}`)),console.log(`Void Exposures: ${qe.voidExposures.length}`),console.log(`Missing Walls: ${qe.missingWalls.length}`),console.log(`Missing Ceilings: ${qe.missingCeilings.length}`),console.log(`Navigation Breaks: ${qe.navigationBreaks.length}`),console.log(`Total Issues: ${qe.totalIssues}`),console.log(`Scan Duration: ${qe.scanDurationMs.toFixed(2)}ms`),console.log(`=====================================
`),ot.length>0&&(console.log(`=== DETAILED ISSUE REPORTS ===
`),ot.forEach((z,De)=>{var ye;console.log(`--- Issue #${De+1} ---`),console.log(`[${z.type.toUpperCase()}]`),console.log(`Room: ${z.roomName}`),console.log(`Location: [${z.location[0].toFixed(1)}, ${z.location[1].toFixed(1)}, ${z.location[2].toFixed(1)}]`),console.log(`Severity: ${z.severity.toUpperCase()}`),console.log(`Description: ${z.description}`),console.log(`Details: ${z.details}`),z.roomBounds&&console.log(`Room Bounds: { x: ${z.roomBounds.x}, z: ${z.roomBounds.z}, w: ${z.roomBounds.w}, d: ${z.roomBounds.d}, h: ${z.roomBounds.h}, floorY: ${z.roomBounds.floorY} }`),z.nearestConnectedRoom&&(console.log(`Nearest Room: ${z.nearestConnectedRoom}`),console.log(`Distance: ${(ye=z.distanceToNearestRoom)==null?void 0:ye.toFixed(2)} units`)),z.reasoning&&console.log(`Reason: ${z.reasoning}`),z.potentialCauses&&z.potentialCauses.length>0&&(console.log("Potential Causes:"),z.potentialCauses.forEach(Qe=>console.log(`  • ${Qe}`))),z.confidence&&console.log(`Confidence: ${z.confidence}`),z.isIntentional!==void 0&&console.log(`Intentional: ${z.isIntentional?"YES":"NO"}`),console.log("")})),console.log("====================================="),console.log("Use teleportToAuditIssue(index) to navigate to specific issues."),console.log("Enable DEBUG_CONNECTIVITY visualization with: window.DEBUG_CONNECTIVITY = true"),qe},window.teleportToAuditIssue=Oe=>{const qe=Ae.current.getIssues();if(qe[Oe]){const ot=qe[Oe];c.current.set(ot.location[0],ot.location[1]+2,ot.location[2]+5),a.current=Math.PI,p.current=!0,ve(Oe),Y(!0),console.log(`Teleported to issue #${Oe+1}: ${ot.type} in ${ot.roomName}`)}else console.error(`Issue index ${Oe} not found. Total issues: ${qe.length}`)},()=>{delete window.runConnectivityAudit,delete window.teleportToAuditIssue}),[]),nt.useEffect(()=>{console.log("DOOR EFFECT RUNNING");const Oe=e.current,qe=r.current;if(!Oe||!qe)return;const ot=new Sw({canvas:Oe,antialias:!0});ot.setPixelRatio(window.devicePixelRatio),ot.shadowMap.enabled=!0,ot.shadowMap.type=Vx;const z=new KM;z.background=new Nt(657930),z.fog=new Op(657930,20,120);const De=new xi(75,qe.clientWidth/qe.clientHeight,.1,500);De.position.copy(c.current),n.current=De;const ye=Cw("default",z),Qe=new hx,He=Bw(z,De,Qe);Te.current=He,window.toggleGeometryInspector=()=>{He.toggle(),Re(He.isActive()),console.log("[GeometryInspector] Toggled:",He.isActive()?"ON":"OFF")},window.enableGeometryInspector=()=>{He.enable(),Re(!0)},window.disableGeometryInspector=()=>{He.disable(),Re(!1)};const Le=new bb(2236962,1);z.add(Le),Ge.current=Le;const at={starter:3820842,hallway:1710638,science_lab:2760720,library:2760720,gym:1056816,cafeteria:1709328,courtyard:662026,underground_tunnel:329736,the_vault:658442,stairwell:1705992,stairwell_2:1705992,upper_hallway:1315872,upper_hallway_2:1315872,upper_hallway_north:1315872,principal_office:1708048,security_room:526864,nurses_office:1712160,nurses_office_backroom:1185816,gym_north_hallway:1054752,lower_hallway_south:1315872,main_office:922912};_n.forEach(A=>{const he=new Mb(at[A.id]??2236962,2.5,Math.max(A.w,A.d)*1.2);he.position.set(A.cx,A.floorY+A.h*.75,A.cz),z.add(he)}),window.toggleDebugLighting=We,window.setDebugLightingBrightness=A=>{xt(A),_t&&Ge.current&&(Ge.current.intensity=A),console.log("[DEBUG LIGHTING] Brightness set to:",A)};const lt=[],an=new Map,Gt={starter_N_0:"starter_classroom_door",science_lab_S_0:"hallway_science_lab_door",library_S_0:"hallway_library_door",cafeteria_E_0:"hallway_cafeteria_door"};Hx.forEach((A,he)=>{const ne=(ta[A.roomId]||[])[A.gapIndex];if(!ne)return;const Ne=_n.find(ze=>ze.id===A.roomId);if(!Ne)return;const Be=`${A.roomId}_${A.side}_${A.gapIndex}`,be=Gt[Be];if(!be)return;let $e=0,Pe=0;const ct=ne.width,ht=Vw,Je=.3;ne.side==="N"?($e=ne.center,Pe=Ne.d/2):ne.side==="S"?($e=ne.center,Pe=-Ne.d/2):ne.side==="E"?($e=Ne.w/2,Pe=ne.center):($e=-Ne.w/2,Pe=ne.center);const Ye=Ne.cx+$e,Ze=Ne.cz+Pe,xe={id:be,type:"gap",axis:ne.side==="N"||ne.side==="S"?"z":"x",x:Ye,z:Ze,w:ct,h:ht,d:Je,cost:A.cost,unlocked:!1,name:Be,roomId:A.roomId,side:ne.side,isOpen:!1,isPurchased:!1,doorManagerId:be};lt.push(xe)});const Qn=new _s({color:4007959});new _s({color:2759183}),lt.forEach(A=>{const he=A.d||.3,ue=new cn(A.w,A.h,he),ne=new nn(ue,Qn);ne.position.set(A.x,A.h/2,A.z),ne.rotation.y=A.axis==="x"?Math.PI/2:0,ne.castShadow=!0,ne.receiveShadow=!0,z.add(ne),A.mesh=ne;const Ne=new cn(A.w,A.h,he+.1),Be=new yl({visible:!1}),be=new nn(Ne,Be);be.position.copy(ne.position),be.rotation.copy(ne.rotation),z.add(be),A.collider=be,an.set(be,A)});const Gn=fl.wallThickness,qi=fl.ceilingThickness,Hn=fl.floorThickness,Oi=fl.doorHeight,Ba=new _s({map:Th("wall_tiles")}),Un=new _s({map:Th("wood_floor")}),hn=new _s({map:Th("ceiling_tiles")}),Rn=A=>{const he=ta[A.id]||[],ue=parseInt(A.color.replace("#",""),16),ne=new _s({color:ue}),Ne=A.floorTexture==="wood_floor.png"?Un:ne;if(!A.disabledFloor)if(A.carvedFloors&&A.carvedFloors.length>0){const be=A.cz-A.d/2,$e=A.cz+A.d/2,Pe=A.cx-A.w/2,ct=A.cx+A.w/2,ht=A.trapdoors||[];if(ht.length>0){const Je=ht.map(Ze=>({xMin:Ze.cx-Ze.w/2,xMax:Ze.cx+Ze.w/2,zMin:Ze.cz-Ze.d/2,zMax:Ze.cz+Ze.d/2}));let Ye=be;for(;Ye<$e;){let Ze=$e;for(const ge of Je)ge.zMin>Ye&&ge.zMin<Ze&&(Ze=ge.zMin),ge.zMax>Ye&&ge.zMax<Ze&&ge.zMax>Ye;const xe=Ze-Ye;if(xe>.1){const ge=Je.filter(Ke=>Ke.zMin<=Ze&&Ke.zMax>=Ye);if(ge.length===0){const Ke=new nn(new cn(A.w,Hn,xe),Ne);Ke.position.set(A.cx,A.floorY-Hn/2,Ye+xe/2),Ke.receiveShadow=!0,z.add(Ke)}else{let Ke=Pe;const gt=[...ge].sort((st,At)=>st.xMin-At.xMin);for(const st of gt){if(st.xMin>Ke+.1){const At=st.xMin-Ke,vt=new nn(new cn(At,Hn,xe),Ne);vt.position.set(Ke+At/2,A.floorY-Hn/2,Ye+xe/2),vt.receiveShadow=!0,z.add(vt)}Ke=Math.max(Ke,st.xMax)}if(Ke<ct-.1){const st=ct-Ke,At=new nn(new cn(st,Hn,xe),Ne);At.position.set(Ke+st/2,A.floorY-Hn/2,Ye+xe/2),At.receiveShadow=!0,z.add(At)}}}let ze=$e;for(const ge of Je)ge.zMax>Ye&&ge.zMax<ze&&(ze=ge.zMax);Ye=ze}}else{const Je=new nn(new cn(A.w,Hn,A.d),Ne);Je.position.set(A.cx,A.floorY-Hn/2,A.cz),Je.receiveShadow=!0,z.add(Je)}}else{const be=new nn(new cn(A.w,Hn,A.d),Ne);be.position.set(A.cx,A.floorY-Hn/2,A.cz),be.receiveShadow=!0,z.add(be)}if(!A.disabledCeiling){const be=new nn(new cn(A.w,qi,A.d),hn);be.position.set(A.cx,A.floorY+A.h+qi/2,A.cz),z.add(be)}if([{side:"N",px:A.cx,pz:A.cz+A.d/2,len:A.w,rotY:0},{side:"S",px:A.cx,pz:A.cz-A.d/2,len:A.w,rotY:0},{side:"E",px:A.cx+A.w/2,pz:A.cz,len:A.d,rotY:Math.PI/2},{side:"W",px:A.cx-A.w/2,pz:A.cz,len:A.d,rotY:Math.PI/2}].forEach(({side:be,px:$e,pz:Pe,len:ct,rotY:ht})=>{var Ze;if((Ze=A.disabledWalls)!=null&&Ze.includes(be))return;const Je=he.filter(xe=>xe.side===be),Ye=(xe,ze)=>{const ge=ze-xe;if(ge<=.01)return;const Ke=(xe+ze)/2-ct/2,gt=Math.min(Oi,A.h),st=new nn(new cn(ge,gt,Gn),Ba);if(st.rotation.y=ht,ht===0?st.position.set($e+Ke,A.floorY+gt/2,Pe):st.position.set($e,A.floorY+gt/2,Pe+Ke),st.castShadow=!0,st.receiveShadow=!0,z.add(st),A.h>Oi){const At=A.h-Oi,vt=new nn(new cn(ge,At,Gn),Ba);vt.rotation.y=ht,ht===0?vt.position.set($e+Ke,A.floorY+Oi+At/2,Pe):vt.position.set($e,A.floorY+Oi+At/2,Pe+Ke),z.add(vt)}};if(Je.length===0)Ye(0,ct);else{const xe=[...Je].sort((ge,Ke)=>ge.center-ge.width/2-(Ke.center-Ke.width/2));let ze=0;xe.forEach(ge=>{const Ke=Math.max(0,ge.center-ge.width/2+ct/2),gt=Math.min(ct,ge.center+ge.width/2+ct/2);Ye(ze,Ke),ze=gt}),Ye(ze,ct)}}),A.isStaircase){const be=A.climbHeight??A.h,$e=A.stairDirection||(A.w>A.d?"W_E":"N_S");let Pe=0;$e==="W_E"||$e==="E_W"?Pe=($e==="W_E"?1:-1)*Math.atan2(be,A.w):Pe=($e==="N_S"?1:-1)*Math.atan2(be,A.d);const ht=(Math.sqrt($e==="W_E"||$e==="E_W"?A.w*A.w+be*be:A.d*A.d+be*be)-($e==="W_E"||$e==="E_W"?A.w:A.d))/2,Je=new nn(new cn(A.w,.3,A.d),new _s({color:255,side:Li}));Je.position.set(A.cx,A.floorY+be/2+ht,A.cz),$e==="W_E"||$e==="E_W"?Je.rotation.z=Pe:Je.rotation.x=Pe,z.add(Je);const Ye=new nn(new cn(A.w,.3,A.d),new yl({color:16711680,transparent:!0,opacity:.5,side:Li}));Ye.position.set(A.cx,A.floorY+be/2+ht,A.cz),$e==="W_E"||$e==="E_W"?Ye.rotation.z=Pe:Ye.rotation.x=Pe,z.add(Ye);const Ze=Je.position.x-Ye.position.x,xe=Je.position.y-Ye.position.y,ze=Je.position.z-Ye.position.z,ge=new to(new fb(new cn(A.w,.3,A.d)),new Qs({color:65280,linewidth:2}));ge.position.copy(Je.position),ge.rotation.copy(Je.rotation),z.add(ge);const Ke=Math.abs(Je.rotation.x-Ye.rotation.x),gt=Math.abs(Je.rotation.y-Ye.rotation.y),st=Math.abs(Je.rotation.z-Ye.rotation.z),At=Math.abs(Ze)>.01||Math.abs(xe)>.01||Math.abs(ze)>.01||Ke>.001||gt>.001||st>.001,vt=Math.sqrt(Ze*Ze+xe*xe+ze*ze),Yt=Math.sqrt(Ke*Ke+gt*gt+st*st),Sn=Math.abs(Je.position.y-A.floorY-(Ye.position.y-A.floorY)),Ht=vt<.01&&Yt<.001&&Sn<.01;Xe(Mi=>[...Mi,{id:A.id,name:A.name,direction:$e,visualPosition:{x:Je.position.x,y:Je.position.y,z:Je.position.z},visualRotation:{x:Je.rotation.x,y:Je.rotation.y,z:Je.rotation.z},visualScale:{x:Je.scale.x,y:Je.scale.y,z:Je.scale.z},collisionPosition:{x:Ye.position.x,y:Ye.position.y,z:Ye.position.z},collisionRotation:{x:Ye.rotation.x,y:Ye.rotation.y,z:Ye.rotation.z},collisionScale:{x:Ye.scale.x,y:Ye.scale.y,z:Ye.scale.z},offsetX:Ze,offsetY:xe,offsetZ:ze,rotationDiffX:Ke,rotationDiffY:gt,rotationDiffZ:st,width:A.w,depth:A.d,climbHeight:be,isMisaligned:At,misalignmentWarning:At?`MISALIGNED STAIR DETECTED - Offset: (${Ze.toFixed(4)}, ${xe.toFixed(4)}, ${ze.toFixed(4)})`:void 0,positionDelta:vt,rotationDelta:Yt,heightDelta:Sn,validationPass:Ht}])}};Xe([]),_n.forEach(A=>Rn(A)),Hw.forEach(A=>{const he=_n.find(ne=>ne.id===A.roomId),ue=new nn(new cn(A.w,A.h,A.d),new _s({color:parseInt(A.color.replace("#",""),16)}));ue.position.set(A.cx,((he==null?void 0:he.floorY)??0)+A.h/2,A.cz),z.add(ue)});const Si=()=>{const A=qe.clientWidth,he=qe.clientHeight;ot.setSize(A,he),De.aspect=A/he,De.updateProjectionMatrix()};Si();const Ii=new ResizeObserver(Si);Ii.observe(qe);const Es=A=>{document.pointerLockElement===Oe&&(a.current-=A.movementX*.002,o.current-=A.movementY*.002,o.current=Math.max(-Math.PI/2+.05,Math.min(Math.PI/2-.05,o.current)))},ca=()=>{document.pointerLockElement!==Oe&&(Oe==null||Oe.requestPointerLock())},Ga=()=>{x(document.pointerLockElement===Oe)};Oe.addEventListener("click",ca),document.addEventListener("mousemove",Es),document.addEventListener("pointerlockchange",Ga);const zi=A=>{if(h.current[A.code]=!0,A.code==="KeyV"&&(p.current=!p.current),A.code==="F1"&&(A.preventDefault(),Xt(he=>!he)),A.code==="F2"&&(A.preventDefault(),We()),A.code==="F4"&&(A.preventDefault(),Te.current&&(Te.current.toggle(),Re(Te.current.isActive()),console.log("[GeometryInspector] Toggled:",Te.current.isActive()?"ON":"OFF"),console.log("[GeometryInspector] Call window.inspectGeometry() to print all meshes within 20 units"))),A.code==="F7"){A.preventDefault();const he=fe.current;he.initialize(_n,ta);const ue=he.runAudit();q(ue.issues),T(ne=>!ne),j(-1),console.log(`[FloorIntegrityAudit] Debug mode ${O?"disabled":"enabled"}: ${ue.totalIssuesFound} issues found`)}if(A.code==="F8"&&(A.preventDefault(),L.length>0)){const he=(H+1)%L.length,ue=L[he];c.current.set(ue.location[0],ue.location[1]+2,ue.location[2]+5),a.current=Math.PI,j(he),console.log(`[FloorIntegrityAudit] Teleported to issue ${he+1}/${L.length}: ${ue.cause} in ${ue.roomName}`)}if(A.code==="F6"){A.preventDefault();const he=Ae.current;he.initialize(_n,ta,"starter");const ue=he.runAudit(),ne=he.getIssues();G(ne),J(ue),Y(!0),ve(-1),console.log(`[MapConnectivityAudit] Audit complete: ${ue.totalIssues} issues found`),console.log(`  - Connected Rooms: ${ue.totalConnectedRooms}`),console.log(`  - Disconnected Rooms: ${ue.disconnectedRooms.length}`),console.log(`  - Void Exposures: ${ue.voidExposures.length}`),console.log(`  - Missing Walls: ${ue.missingWalls.length}`),console.log(`  - Missing Ceilings: ${ue.missingCeilings.length}`),console.log(`  - Navigation Breaks: ${ue.navigationBreaks.length}`)}if(A.code==="F5"&&(A.preventDefault(),N.length>0)){const he=(oe+1)%N.length,ue=N[he];c.current.set(ue.location[0],ue.location[1]+2,ue.location[2]+5),a.current=Math.PI,ve(he),console.log(`[MapConnectivityAudit] Teleported to issue ${he+1}/${N.length}: ${ue.description} in ${ue.roomName}`)}if(A.code==="F9"){A.preventDefault();const he=B.current,ue=c.current.x,ne=c.current.z;let Ne;for(const be of _n){const $e=be.w/2,Pe=be.d/2;if(ue>=be.cx-$e&&ue<=be.cx+$e&&ne>=be.cz-Pe&&ne<=be.cz+Pe){Ne=be.name;break}}he.setData(_n,ta,lt),he.enable(Ne);const Be=he.getIssues();F(Be),y(!0),X(-1),console.log(`[RoomSealValidator] Scan complete: ${Be.length} issues found${Ne?` in ${Ne}`:""}`)}if(A.code==="F10"){A.preventDefault();const ue=B.current.getIssues();if(ue.length>0){const ne=(I+1)%ue.length,Ne=ue[ne];c.current.set(Ne.location[0],Ne.location[1]+2,Ne.location[2]+5),a.current=Math.PI,X(ne),console.log(`[RoomSealValidator] Teleported to issue ${ne+1}/${ue.length}: ${Ne.description} in ${Ne.roomName}`)}}if(A.code==="F11"){A.preventDefault();const he=B.current;he.setData(_n,ta,lt);const ue=he.toggle();if(y(ue),ue){const ne=he.getIssues();F(ne)}else F([]),X(-1);console.log(`[MapValidator] Validation mode ${ue?"enabled":"disabled"}`)}},Ha=A=>{h.current[A.code]=!1};window.addEventListener("keydown",zi),window.addEventListener("keyup",Ha);const oi=(A,he,ue)=>{for(const ne of _n){const Ne=ne.cx-ne.w/2,Be=ne.cx+ne.w/2,be=ne.cz-ne.d/2,$e=ne.cz+ne.d/2,Pe=ue-1.6,ct=ne.floorY-1,ht=ne.floorY+ne.h+2,Je=A>=Ne&&A<=Be,Ye=he>=be&&he<=$e,Ze=Pe>=ct&&Pe<=ht;if(console.log(`ROOM CHECK: ${ne.name}`),console.log(`Player: ${A} ${he} ${ue}`),console.log("Bounds:"),console.log(`xMin=${Ne}`),console.log(`xMax=${Be}`),console.log(`zMin=${be}`),console.log(`zMax=${$e}`),console.log(""),console.log(`insideX=${Je}`),console.log(`insideZ=${Ye}`),console.log(`insideY=${Ze}`),console.log(""),Je&&Ye&&Ze)return console.log("RETURNING ROOM",ne.name),ne}},li=(A,he,ue)=>{const ne=lt.find(Ne=>Ne.roomId===A&&Ne.side===he&&Hx.findIndex(Be=>Be.roomId===A&&Be.side===he&&Be.gapIndex===ue)>=0);return ne?ne.isPurchased?!!ne.isOpen:!1:!0},ua=(A,he)=>{const ue=A.clone().add(he),ne=oi(A.x,A.z,A.y);if(console.log("tryMove ROOM RETURNED",ne==null?void 0:ne.name),!ne)return ue;const Ne=ne.cx-ne.w/2,Be=ne.cx+ne.w/2,be=ne.cz-ne.d/2,$e=ne.cz+ne.d/2;let Pe=ue.x,ct=ue.z;const ht=kw,Je=ta[ne.id]||[];if(ct-ht<be){const Ye=Je.filter(ze=>ze.side==="S"),Ze=A.x-ne.cx;if(!Ye.some(ze=>Ze>=ze.center-ze.width/2&&Ze<=ze.center+ze.width/2))ct=be+ht;else{const ze=Je.findIndex(ge=>ge.side==="S"&&Ze>=ge.center-ge.width/2&&Ze<=ge.center+ge.width/2);ze>=0&&lt.find(Ke=>Ke.roomId===ne.id&&Ke.side==="S")&&!li(ne.id,"S",ze)&&(ct=be+ht)}}if(ct+ht>$e){const Ye=Je.filter(ze=>ze.side==="N"),Ze=A.x-ne.cx;if(!Ye.some(ze=>Ze>=ze.center-ze.width/2&&Ze<=ze.center+ze.width/2))ct=$e-ht;else{const ze=Je.findIndex(ge=>ge.side==="N"&&Ze>=ge.center-ge.width/2&&Ze<=ge.center+ge.width/2);ze>=0&&lt.find(Ke=>Ke.roomId===ne.id&&Ke.side==="N")&&!li(ne.id,"N",ze)&&(ct=$e-ht)}}if(Pe-ht<Ne){const Ye=Je.filter(ze=>ze.side==="W"),Ze=A.z-ne.cz;if(!Ye.some(ze=>Ze>=ze.center-ze.width/2&&Ze<=ze.center+ze.width/2))Pe=Ne+ht;else{const ze=Je.findIndex(ge=>ge.side==="W"&&Ze>=ge.center-ge.width/2&&Ze<=ge.center+ge.width/2);ze>=0&&lt.find(Ke=>Ke.roomId===ne.id&&Ke.side==="W")&&!li(ne.id,"W",ze)&&(Pe=Ne+ht)}}if(Pe+ht>Be){const Ye=Je.filter(ze=>ze.side==="E"),Ze=A.z-ne.cz;if(!Ye.some(ze=>Ze>=ze.center-ze.width/2&&Ze<=ze.center+ze.width/2))Pe=Be-ht;else{const ze=Je.findIndex(ge=>ge.side==="E"&&Ze>=ge.center-ge.width/2&&Ze<=ge.center+ge.width/2);ze>=0&&lt.find(Ke=>Ke.roomId===ne.id&&Ke.side==="E")&&!li(ne.id,"E",ze)&&(Pe=Be-ht)}}return new Q(Pe,ue.y,ct)};let Pi=performance.now(),pn;const Ts=new hx,w=8;let K=null;const le=()=>{pn=requestAnimationFrame(le);const A=performance.now(),he=Math.min((A-Pi)/1e3,.05);Pi=A;const ue=h.current,ne=p.current?20:10,Ne=new Q(-Math.sin(a.current),0,-Math.cos(a.current)),Be=new Q(Math.cos(a.current),0,-Math.sin(a.current));let be=new Q;if((ue.KeyW||ue.ArrowUp)&&be.add(Ne),(ue.KeyS||ue.ArrowDown)&&be.sub(Ne),(ue.KeyD||ue.ArrowRight)&&be.add(Be),(ue.KeyA||ue.ArrowLeft)&&be.sub(Be),be.lengthSq()>0&&be.normalize().multiplyScalar(ne*he),p.current)ue.Space&&(be.y+=ne*he),(ue.ShiftLeft||ue.ShiftRight)&&(be.y-=ne*he),c.current.add(be);else{u.current-=30*he;const xe=oi(c.current.x,c.current.z,c.current.y);console.log("physics ROOM RETURNED",xe==null?void 0:xe.name);const ze=oi(c.current.x,c.current.z,c.current.y);Fe((ze==null?void 0:ze.name)||"None"),console.log("ROOM STATE UPDATED FROM PHYSICS",ze==null?void 0:ze.name);let ge=xe?xe.isStaircase?Gx(xe,c.current.x,c.current.z)+ll:xe.floorY+ll:ll;if(xe!=null&&xe.isStaircase){const gt=Gx(xe,c.current.x,c.current.z);_e({playerPosition:{x:c.current.x,y:c.current.y,z:c.current.z},currentRoomId:xe.id,expectedRampHeight:gt,actualPlayerHeight:c.current.y,heightDifference:c.current.y-gt,isInStairwell:!0})}else _e({playerPosition:{x:c.current.x,y:c.current.y,z:c.current.z},currentRoomId:(xe==null?void 0:xe.id)||null,expectedRampHeight:null,actualPlayerHeight:c.current.y,heightDifference:0,isInStairwell:!1});c.current.y+=u.current*he,c.current.y<=ge?(c.current.y=ge,u.current=0,m.current=!0):m.current=!1,ue.Space&&m.current&&(u.current=10,m.current=!1);const Ke=ua(c.current,be);c.current.x=Ke.x,c.current.z=Ke.z}if(De.position.copy(c.current),De.rotation.order="YXZ",De.rotation.y=a.current,De.rotation.x=o.current,S&&B.current.updateHighlights(A/1e3),window.DEBUG_FLOORS===!0){if(console.log("DEBUG WIREFRAMES ACTIVE"),console.log("ROOM COUNT",_n.length),_n.forEach((ge,Ke)=>{Ke<5&&console.log("WIREFRAME ROOM",ge.id,ge.name,ge.cx,ge.cz,ge.w,ge.d,ge.floorY)}),!Ce.current){const ge=new cn(4,4,4),Ke=new Sl(ge),gt=new Qs({color:16711680,linewidth:2}),st=new to(Ke,gt);st.position.set(0,5,0),st.renderOrder=999,st.frustumCulled=!1,z.add(st),Ce.current=st,console.log("[DEBUG] Red wireframe box created at (0, 5, 0)")}const xe="__ROOM_DEBUG_WIREFRAMES__";let ze=window[xe]||[];ze.forEach(ge=>{z.remove(ge),ge.geometry.dispose(),ge.material.dispose()}),ze=[],_n.forEach(ge=>{const Ke=new cn(ge.w,1,ge.d),gt=new Sl(Ke),st=new Qs({color:16711935}),At=new to(gt,st);At.position.set(ge.cx,ge.floorY+.5,ge.cz),At.renderOrder=998,At.frustumCulled=!1,z.add(At),ze.push(At)}),window[xe]=ze,console.log("WIREFRAMES CREATED",ze.length)}else{Ce.current&&(Ce.current.geometry.dispose(),Ce.current.material.dispose(),z.remove(Ce.current),Ce.current=null,console.log("[DEBUG] Red wireframe box removed"));const xe="__ROOM_DEBUG_WIREFRAMES__";(window[xe]||[]).forEach(ge=>{z.remove(ge),ge.geometry.dispose(),ge.material.dispose()}),window[xe]=[]}if(O&&Pw(z,A/1e3),W&&Te.current){const xe=Te.current,ze=xe.inspectAtCrosshair(),ge=[];z.traverse(st=>{st instanceof nn&&st!==xe.highlightMesh&&st!==xe.wireframeMesh&&!st.name.includes("debug")&&!st.name.includes("highlight")&&ge.push(st)}),console.log("[DIAGNOSTIC] Geometry Inspector Scene Mesh Count:",ge.length),console.log("[DIAGNOSTIC] Connectivity Audit Room Count:",_n.length),console.log("[DIAGNOSTIC] Connectivity Issues Array Length:",N.length);const Ke=ge.map(st=>st.name||st.uuid).slice(0,10),gt=_n.map(st=>st.id);if(console.log("[DIAGNOSTIC] Sample Scene Mesh Names:",Ke),console.log("[DIAGNOSTIC] Room IDs from INITIAL_ROOMS:",gt.slice(0,10)),console.log("[DIAGNOSTIC] Total Issues Before Rendering:",N.length),N.length>0&&(console.log("[DIAGNOSTIC] Issue Marker Coordinates:"),N.forEach((st,At)=>{At<5&&console.log(`  #${At+1} ${st.type}: [${st.location[0].toFixed(1)}, ${st.location[1].toFixed(1)}, ${st.location[2].toFixed(1)}] in ${st.roomName}`)})),ze){const st=new Ms().setFromObject(ze),At=new Q,vt=new Q;st.getSize(At),st.getCenter(vt);const Yt=De.position.distanceTo(vt);xe.updateHighlight(ze,Yt);const Sn=xe.getInspectedMesh();Sn&&Ue({meshName:Sn.meshName,roomId:Sn.roomId,wallId:Sn.wallId,floorId:Sn.floorId})}else xe.updateHighlight(null,0),Ue(null)}Ts.setFromCamera(new Et(0,0),De);const $e=Array.from(an.keys()),Pe=Ts.intersectObjects($e);if(K=null,Pe.length>0&&Pe[0].distance<=w){const xe=Pe[0].object,ze=an.get(xe);ze?(K=ze,ze.isPurchased?ze.isOpen?(M(""),C(!1)):(M("Press E to open"),C(!0)):(M(`Press E to buy ${ze.name} (${ze.cost})`),C(!0))):(M(""),C(!1))}else M(""),C(!1);const ct=hl(),ht={x:c.current.x,y:c.current.y,z:c.current.z},Je=new Q(-Math.sin(a.current),0,-Math.cos(a.current));ct.updateInteraction(ht,Je),ot.render(z,De);const Ye=window.__debugFrameCount||0,Ze=window.__debugLastTime||A;if(window.__debugFrameCount=Ye+1,A-Ze>=500){const xe=Math.round((Ye+1)*1e3/(A-Ze));Kt(xe),window.__debugFrameCount=0,window.__debugLastTime=A;let ze=0;z.traverse(gt=>{gt instanceof nn&&ze++}),Z(ze),Tt(ot.info.render.calls);const ge=oi(c.current.x,c.current.z,c.current.y);console.log("RENDER ROOM RETURNED",ge==null?void 0:ge.name);const Ke=(ge==null?void 0:ge.name)||"None";if(console.log("SETTING ROOM STATE",Ke),console.log("CURRENT ROOM STATE BEFORE",Ft),Fe(Ke),console.log("CURRENT ROOM STATE AFTER SET",Ke),window.__debugFrameCount%60===0&&(console.log(`[ROOM DEBUG] Pos: (${c.current.x.toFixed(1)}, ${c.current.y.toFixed(1)}, ${c.current.z.toFixed(1)}) -> Room: ${Ke}`),console.log(`[ROOM DEBUG] State check - currentRoomName will be: ${Ke}`),Ke==="None"&&_n.length>0)){const gt=_n[0];console.log(`[ROOM DEBUG] First room '${gt.name}' bounds: X[${gt.cx-gt.w/2}, ${gt.cx+gt.w/2}] Z[${gt.cz-gt.d/2}, ${gt.cz+gt.d/2}]`)}}Ye%60===0&&console.log("[RENDER LOOP] Frame",Ye,"Room state:",Ft)};le();const ae=A=>{const he=document.pointerLockElement!==null;if(console.log("KEY EVENT",A.code,"isPointerLocked =",he),console.log("[DEBUG] Key event received:",A.key),A.code==="KeyE"&&he){console.log("KEY_E_TEST"),console.log("=== [E] key pressed ==="),console.log("=== Key handler entered ===");const ue=K;if(!ue){console.log("Current door found: NO (null)");return}console.log("Current door found: YES"),console.log("Door ID:",ue.id),console.log("purchaseDoor() called");const ne=hl(),Ne="player1",Be=ue.doorManagerId||ue.id,be=ne.purchaseDoor(Be,Ne);console.log("purchaseDoor() result:",be),console.log("Result.success:",be.success),be.success?(console.log("[App] Door purchased successfully:",ue.name),console.log("DoorRenderer update called"),ue.mesh&&(ue.mesh.visible=!1,console.log(`[App] Door mesh hidden: ${ue.id}`)),ue.collider&&(ue.collider.visible=!1,console.log(`[App] Door collider hidden: ${ue.id}`)),ue.isOpen=!0,ue.isPurchased=!0):(console.log("[App] Door purchase failed:",be.reason),be.reason==="INSUFFICIENT_POINTS"&&(ft(!0),setTimeout(()=>ft(!1),2e3)))}};return window.addEventListener("keydown",ae),()=>{cancelAnimationFrame(pn),Ii.disconnect(),Oe.removeEventListener("click",ca),document.removeEventListener("mousemove",Es),document.removeEventListener("pointerlockchange",Ga),window.removeEventListener("keydown",zi),window.removeEventListener("keyup",Ha),window.removeEventListener("keydown",ae),ye.destroy(),Ce.current&&(Ce.current.geometry.dispose(),Ce.current.material.dispose(),z.remove(Ce.current),Ce.current=null),ot.dispose()}},[]),V.jsxs("div",{className:"relative w-screen h-screen bg-black overflow-hidden select-none",children:[V.jsx("div",{className:"absolute top-4 right-4 z-20",children:V.jsx(Lw,{playerId:"player1"})}),tt&&V.jsx("div",{className:"absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50",children:V.jsx("div",{className:"bg-red-900/90 border-2 border-red-500 px-6 py-3 rounded-lg text-lg font-mono tracking-wide text-red-200 whitespace-nowrap animate-pulse",children:"NOT ENOUGH POINTS"})}),V.jsx(Gw,{data:{fps:dn,meshCount:wn,drawCalls:rn,playerPos:c.current,playerRot:((Ve=n.current)==null?void 0:Ve.rotation)||new ji(0,0,0),currentRoom:Ft,noclip:p.current,round:Qt.round,zombiesAlive:Qt.zombiesAlive,spawnStatus:Qt.spawnStatus,connectivityIssues:N,floorIntegrityIssues:L,debugLightingEnabled:_t,debugLightingBrightness:Bt,roomDetectorStatus:{playerPosition:{x:c.current.x,y:c.current.y,z:c.current.z},roomCount:_n.length,closestRoom:null,closestDistance:0,currentRoom:Ft,rejectionReason:Ft==="None"?"Player position does not fall within any room bounds. Check Y height (floorY) or X/Z coordinates.":null},stairDebugData:ke,playerStairAnalysis:pe},onToggleNoclip:()=>{p.current=!p.current},onRunConnectivity:()=>{const Oe=Ae.current;Oe.initialize(_n,ta,"starter");const qe=Oe.runAudit(),ot=Oe.getIssues();G(ot),J(qe),Y(!0),ve(-1)},onRunFloorAudit:()=>{const Oe=fe.current;Oe.initialize(_n,ta);const qe=Oe.runAudit();q(qe.issues),T(!0),j(-1)},onTeleportToSpawn:()=>{c.current.set(17.5,ll,-10),a.current=Math.PI,console.log("[DebugOverlay] Teleported to starter room spawn")},onTeleportToIssue:Oe=>{c.current.set(Oe.location[0],Oe.location[1]+2,Oe.location[2]+5),a.current=Math.PI,p.current=!0,console.log(`[DebugOverlay] Teleported to issue: ${Oe.type} in ${Oe.roomName}`)},onToggleDebugLighting:We,onSetDebugLightingBrightness:Oe=>{xt(Oe),_t&&Ge.current&&(Ge.current.intensity=Oe)},onStairVisualToggle:Oe=>{te(Oe)},onStairCollisionToggle:Oe=>{Ie(Oe)}}),V.jsx("div",{ref:r,className:"absolute inset-0",children:V.jsx("canvas",{ref:e,className:"block w-full h-full"})}),_&&V.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10",children:V.jsx("div",{className:`w-1.5 h-1.5 rounded-full border border-white/60 ${W?"bg-yellow-400":"bg-emerald-400"}`})}),_&&W&&ie&&V.jsx("div",{className:"absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10",children:V.jsxs("div",{className:"bg-black/80 border border-yellow-500/70 px-4 py-3 rounded-lg text-xs font-mono tracking-wide text-yellow-300 whitespace-nowrap",children:[V.jsx("div",{className:"font-bold text-yellow-200 mb-1",children:"GEOMETRY INSPECTOR"}),V.jsxs("div",{children:["Mesh: ",V.jsx("span",{className:"text-white",children:ie.meshName})]}),ie.roomId&&V.jsxs("div",{children:["Room ID: ",V.jsx("span",{className:"text-emerald-400",children:ie.roomId})]}),ie.wallId&&V.jsxs("div",{children:["Wall ID: ",V.jsx("span",{className:"text-blue-400",children:ie.wallId})]}),ie.floorId&&V.jsxs("div",{children:["Floor ID: ",V.jsx("span",{className:"text-purple-400",children:ie.floorId})]}),V.jsx("div",{className:"mt-2 text-yellow-500/70 text-[10px]",children:"Press F4 to toggle · window.inspectGeometry() for details"})]})}),_&&b&&g&&V.jsx("div",{className:"absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10",children:V.jsx("div",{className:"bg-black/70 border border-emerald-500/50 px-4 py-2 rounded-lg text-sm font-mono tracking-wide text-emerald-400 whitespace-nowrap",children:g})}),!_&&V.jsx("div",{className:"absolute inset-x-0 bottom-8 flex justify-center pointer-events-none z-10",children:V.jsx("div",{className:"bg-black/70 border border-white/10 px-5 py-2 rounded-full text-[11px] font-mono tracking-widest text-white/50 uppercase",children:"Click to Play · WASD Move · Mouse Look · V Noclip · F4 Geometry Inspector · ESC Free Cursor"})}),S&&V.jsxs(V.Fragment,{children:[V.jsx("div",{className:"absolute top-4 left-4 pointer-events-none z-10",children:V.jsxs("div",{className:"bg-red-900/80 border border-red-500 px-3 py-2 rounded-lg text-xs font-mono text-red-300",children:[V.jsx("div",{className:"font-bold text-red-200 mb-1",children:"MAP VALIDATION MODE"}),V.jsxs("div",{children:["Issues: ",D.length]}),I>=0&&V.jsxs("div",{className:"text-yellow-300",children:["Viewing: ",I+1,"/",D.length]}),V.jsx("div",{className:"mt-2 text-gray-400 text-[10px]",children:"F8: Scan · F9: Next Issue · F10: Toggle"})]})}),D.length>0&&V.jsx("div",{className:"absolute top-4 right-4 max-w-md max-h-96 overflow-y-auto pointer-events-auto z-10",children:V.jsxs("div",{className:"bg-black/80 border border-red-500/50 rounded-lg p-3",children:[V.jsx("div",{className:"text-xs font-mono text-red-300 font-bold mb-2",children:"DETECTED ISSUES"}),V.jsx("div",{className:"space-y-1",children:D.map((Oe,qe)=>V.jsxs("div",{className:`text-[10px] font-mono p-1.5 rounded cursor-pointer transition-colors ${qe===I?"bg-yellow-900/50 text-yellow-200 border border-yellow-500/50":Oe.severity==="critical"?"bg-red-950/50 text-red-300 hover:bg-red-900/30":Oe.severity==="high"?"bg-orange-950/50 text-orange-300 hover:bg-orange-900/30":"bg-gray-900/50 text-gray-300 hover:bg-gray-800/50"}`,onClick:()=>{X(qe);const z=B.current.getIssues();z[qe]&&(c.current.set(z[qe].location[0],z[qe].location[1]+2,z[qe].location[2]+5),a.current=Math.PI)},children:[V.jsx("span",{className:`inline-block w-2 h-2 rounded-full mr-2 ${Oe.type==="floor_gap"?"bg-red-500":Oe.type==="wall_gap"?"bg-yellow-500":Oe.type==="door_gap"?"bg-blue-500":Oe.type==="stair_gap"?"bg-orange-500":Oe.type==="corner_crack"?"bg-pink-500":"bg-gray-500"}`}),"[",Oe.severity.toUpperCase(),"] ",Oe.roomName," - ",Oe.type.replace("_"," "),V.jsx("div",{className:"text-gray-400 ml-4 truncate",children:Oe.description})]},Oe.id))})]})}),S&&D.length===0&&V.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10",children:V.jsxs("div",{className:"bg-green-900/80 border border-green-500 px-6 py-4 rounded-lg text-sm font-mono text-green-300",children:[V.jsx("div",{className:"font-bold text-green-200 mb-1",children:"NO ISSUES DETECTED"}),V.jsx("div",{className:"text-green-400",children:"Map geometry is clean!"})]})})]})]})}BS.createRoot(document.getElementById("root")).render(V.jsx(nt.StrictMode,{children:V.jsx(Ww,{})}));
