(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function ry(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var xd={exports:{}},Wo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function oy(){if(r_)return Wo;r_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Wo.Fragment=t,Wo.jsx=i,Wo.jsxs=i,Wo}var o_;function ly(){return o_||(o_=1,xd.exports=oy()),xd.exports}var Vt=ly(),Sd={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_;function cy(){if(l_)return ce;l_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),_=Symbol.iterator;function E(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function v(N,J,Tt){this.props=N,this.context=J,this.refs=y,this.updater=Tt||T}v.prototype.isReactComponent={},v.prototype.setState=function(N,J){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,J,"setState")},v.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function D(){}D.prototype=v.prototype;function O(N,J,Tt){this.props=N,this.context=J,this.refs=y,this.updater=Tt||T}var L=O.prototype=new D;L.constructor=O,C(L,v.prototype),L.isPureReactComponent=!0;var k=Array.isArray;function z(){}var I={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function P(N,J,Tt){var Ot=Tt.ref;return{$$typeof:r,type:N,key:J,ref:Ot!==void 0?Ot:null,props:Tt}}function K(N,J){return P(N.type,J,N.props)}function F(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function Q(N){var J={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Tt){return J[Tt]})}var mt=/\/+/g;function St(N,J){return typeof N=="object"&&N!==null&&N.key!=null?Q(""+N.key):J.toString(36)}function W(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(z,z):(N.status="pending",N.then(function(J){N.status==="pending"&&(N.status="fulfilled",N.value=J)},function(J){N.status==="pending"&&(N.status="rejected",N.reason=J)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function U(N,J,Tt,Ot,Pt){var lt=typeof N;(lt==="undefined"||lt==="boolean")&&(N=null);var wt=!1;if(N===null)wt=!0;else switch(lt){case"bigint":case"string":case"number":wt=!0;break;case"object":switch(N.$$typeof){case r:case t:wt=!0;break;case x:return wt=N._init,U(wt(N._payload),J,Tt,Ot,Pt)}}if(wt)return Pt=Pt(N),wt=Ot===""?"."+St(N,0):Ot,k(Pt)?(Tt="",wt!=null&&(Tt=wt.replace(mt,"$&/")+"/"),U(Pt,J,Tt,"",function(ae){return ae})):Pt!=null&&(F(Pt)&&(Pt=K(Pt,Tt+(Pt.key==null||N&&N.key===Pt.key?"":(""+Pt.key).replace(mt,"$&/")+"/")+wt)),J.push(Pt)),1;wt=0;var Lt=Ot===""?".":Ot+":";if(k(N))for(var kt=0;kt<N.length;kt++)Ot=N[kt],lt=Lt+St(Ot,kt),wt+=U(Ot,J,Tt,lt,Pt);else if(kt=E(N),typeof kt=="function")for(N=kt.call(N),kt=0;!(Ot=N.next()).done;)Ot=Ot.value,lt=Lt+St(Ot,kt++),wt+=U(Ot,J,Tt,lt,Pt);else if(lt==="object"){if(typeof N.then=="function")return U(W(N),J,Tt,Ot,Pt);throw J=String(N),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return wt}function B(N,J,Tt){if(N==null)return N;var Ot=[],Pt=0;return U(N,Ot,"","",function(lt){return J.call(Tt,lt,Pt++)}),Ot}function ct(N){if(N._status===-1){var J=N._result;J=J(),J.then(function(Tt){(N._status===0||N._status===-1)&&(N._status=1,N._result=Tt)},function(Tt){(N._status===0||N._status===-1)&&(N._status=2,N._result=Tt)}),N._status===-1&&(N._status=0,N._result=J)}if(N._status===1)return N._result.default;throw N._result}var yt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},bt={map:B,forEach:function(N,J,Tt){B(N,function(){J.apply(this,arguments)},Tt)},count:function(N){var J=0;return B(N,function(){J++}),J},toArray:function(N){return B(N,function(J){return J})||[]},only:function(N){if(!F(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ce.Activity=S,ce.Children=bt,ce.Component=v,ce.Fragment=i,ce.Profiler=l,ce.PureComponent=O,ce.StrictMode=s,ce.Suspense=m,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ce.__COMPILER_RUNTIME={__proto__:null,c:function(N){return I.H.useMemoCache(N)}},ce.cache=function(N){return function(){return N.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(N,J,Tt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Ot=C({},N.props),Pt=N.key;if(J!=null)for(lt in J.key!==void 0&&(Pt=""+J.key),J)!b.call(J,lt)||lt==="key"||lt==="__self"||lt==="__source"||lt==="ref"&&J.ref===void 0||(Ot[lt]=J[lt]);var lt=arguments.length-2;if(lt===1)Ot.children=Tt;else if(1<lt){for(var wt=Array(lt),Lt=0;Lt<lt;Lt++)wt[Lt]=arguments[Lt+2];Ot.children=wt}return P(N.type,Pt,Ot)},ce.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},ce.createElement=function(N,J,Tt){var Ot,Pt={},lt=null;if(J!=null)for(Ot in J.key!==void 0&&(lt=""+J.key),J)b.call(J,Ot)&&Ot!=="key"&&Ot!=="__self"&&Ot!=="__source"&&(Pt[Ot]=J[Ot]);var wt=arguments.length-2;if(wt===1)Pt.children=Tt;else if(1<wt){for(var Lt=Array(wt),kt=0;kt<wt;kt++)Lt[kt]=arguments[kt+2];Pt.children=Lt}if(N&&N.defaultProps)for(Ot in wt=N.defaultProps,wt)Pt[Ot]===void 0&&(Pt[Ot]=wt[Ot]);return P(N,lt,Pt)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(N){return{$$typeof:h,render:N}},ce.isValidElement=F,ce.lazy=function(N){return{$$typeof:x,_payload:{_status:-1,_result:N},_init:ct}},ce.memo=function(N,J){return{$$typeof:p,type:N,compare:J===void 0?null:J}},ce.startTransition=function(N){var J=I.T,Tt={};I.T=Tt;try{var Ot=N(),Pt=I.S;Pt!==null&&Pt(Tt,Ot),typeof Ot=="object"&&Ot!==null&&typeof Ot.then=="function"&&Ot.then(z,yt)}catch(lt){yt(lt)}finally{J!==null&&Tt.types!==null&&(J.types=Tt.types),I.T=J}},ce.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ce.use=function(N){return I.H.use(N)},ce.useActionState=function(N,J,Tt){return I.H.useActionState(N,J,Tt)},ce.useCallback=function(N,J){return I.H.useCallback(N,J)},ce.useContext=function(N){return I.H.useContext(N)},ce.useDebugValue=function(){},ce.useDeferredValue=function(N,J){return I.H.useDeferredValue(N,J)},ce.useEffect=function(N,J){return I.H.useEffect(N,J)},ce.useEffectEvent=function(N){return I.H.useEffectEvent(N)},ce.useId=function(){return I.H.useId()},ce.useImperativeHandle=function(N,J,Tt){return I.H.useImperativeHandle(N,J,Tt)},ce.useInsertionEffect=function(N,J){return I.H.useInsertionEffect(N,J)},ce.useLayoutEffect=function(N,J){return I.H.useLayoutEffect(N,J)},ce.useMemo=function(N,J){return I.H.useMemo(N,J)},ce.useOptimistic=function(N,J){return I.H.useOptimistic(N,J)},ce.useReducer=function(N,J,Tt){return I.H.useReducer(N,J,Tt)},ce.useRef=function(N){return I.H.useRef(N)},ce.useState=function(N){return I.H.useState(N)},ce.useSyncExternalStore=function(N,J,Tt){return I.H.useSyncExternalStore(N,J,Tt)},ce.useTransition=function(){return I.H.useTransition()},ce.version="19.2.6",ce}var c_;function rp(){return c_||(c_=1,Sd.exports=cy()),Sd.exports}var ge=rp();const u_=ry(ge);var yd={exports:{}},Yo={},Md={exports:{}},Ed={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_;function uy(){return f_||(f_=1,(function(r){function t(U,B){var ct=U.length;U.push(B);t:for(;0<ct;){var yt=ct-1>>>1,bt=U[yt];if(0<l(bt,B))U[yt]=B,U[ct]=bt,ct=yt;else break t}}function i(U){return U.length===0?null:U[0]}function s(U){if(U.length===0)return null;var B=U[0],ct=U.pop();if(ct!==B){U[0]=ct;t:for(var yt=0,bt=U.length,N=bt>>>1;yt<N;){var J=2*(yt+1)-1,Tt=U[J],Ot=J+1,Pt=U[Ot];if(0>l(Tt,ct))Ot<bt&&0>l(Pt,Tt)?(U[yt]=Pt,U[Ot]=ct,yt=Ot):(U[yt]=Tt,U[J]=ct,yt=J);else if(Ot<bt&&0>l(Pt,ct))U[yt]=Pt,U[Ot]=ct,yt=Ot;else break t}}return B}function l(U,B){var ct=U.sortIndex-B.sortIndex;return ct!==0?ct:U.id-B.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],x=1,S=null,_=3,E=!1,T=!1,C=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function L(U){for(var B=i(p);B!==null;){if(B.callback===null)s(p);else if(B.startTime<=U)s(p),B.sortIndex=B.expirationTime,t(m,B);else break;B=i(p)}}function k(U){if(C=!1,L(U),!T)if(i(m)!==null)T=!0,z||(z=!0,Q());else{var B=i(p);B!==null&&W(k,B.startTime-U)}}var z=!1,I=-1,b=5,P=-1;function K(){return y?!0:!(r.unstable_now()-P<b)}function F(){if(y=!1,z){var U=r.unstable_now();P=U;var B=!0;try{t:{T=!1,C&&(C=!1,D(I),I=-1),E=!0;var ct=_;try{e:{for(L(U),S=i(m);S!==null&&!(S.expirationTime>U&&K());){var yt=S.callback;if(typeof yt=="function"){S.callback=null,_=S.priorityLevel;var bt=yt(S.expirationTime<=U);if(U=r.unstable_now(),typeof bt=="function"){S.callback=bt,L(U),B=!0;break e}S===i(m)&&s(m),L(U)}else s(m);S=i(m)}if(S!==null)B=!0;else{var N=i(p);N!==null&&W(k,N.startTime-U),B=!1}}break t}finally{S=null,_=ct,E=!1}B=void 0}}finally{B?Q():z=!1}}}var Q;if(typeof O=="function")Q=function(){O(F)};else if(typeof MessageChannel<"u"){var mt=new MessageChannel,St=mt.port2;mt.port1.onmessage=F,Q=function(){St.postMessage(null)}}else Q=function(){v(F,0)};function W(U,B){I=v(function(){U(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(U){U.callback=null},r.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<U?Math.floor(1e3/U):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(U){switch(_){case 1:case 2:case 3:var B=3;break;default:B=_}var ct=_;_=B;try{return U()}finally{_=ct}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(U,B){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ct=_;_=U;try{return B()}finally{_=ct}},r.unstable_scheduleCallback=function(U,B,ct){var yt=r.unstable_now();switch(typeof ct=="object"&&ct!==null?(ct=ct.delay,ct=typeof ct=="number"&&0<ct?yt+ct:yt):ct=yt,U){case 1:var bt=-1;break;case 2:bt=250;break;case 5:bt=1073741823;break;case 4:bt=1e4;break;default:bt=5e3}return bt=ct+bt,U={id:x++,callback:B,priorityLevel:U,startTime:ct,expirationTime:bt,sortIndex:-1},ct>yt?(U.sortIndex=ct,t(p,U),i(m)===null&&U===i(p)&&(C?(D(I),I=-1):C=!0,W(k,ct-yt))):(U.sortIndex=bt,t(m,U),T||E||(T=!0,z||(z=!0,Q()))),U},r.unstable_shouldYield=K,r.unstable_wrapCallback=function(U){var B=_;return function(){var ct=_;_=B;try{return U.apply(this,arguments)}finally{_=ct}}}})(Ed)),Ed}var d_;function fy(){return d_||(d_=1,Md.exports=uy()),Md.exports}var bd={exports:{}},zn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function dy(){if(h_)return zn;h_=1;var r=rp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:p,implementation:x}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,zn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,x)},zn.flushSync=function(m){var p=f.T,x=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=x,s.d.f()}},zn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},zn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},zn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,S=h(x,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:S,integrity:_,fetchPriority:E}):x==="script"&&s.d.X(m,{crossOrigin:S,integrity:_,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},zn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},zn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,S=h(x,p.crossOrigin);s.d.L(m,x,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},zn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},zn.requestFormReset=function(m){s.d.r(m)},zn.unstable_batchedUpdates=function(m,p){return m(p)},zn.useFormState=function(m,p,x){return f.H.useFormState(m,p,x)},zn.useFormStatus=function(){return f.H.useHostTransitionStatus()},zn.version="19.2.6",zn}var p_;function hy(){if(p_)return bd.exports;p_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),bd.exports=dy(),bd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function py(){if(m_)return Yo;m_=1;var r=fy(),t=rp(),i=hy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),e;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var g=!1,R=u.child;R;){if(R===a){g=!0,a=u,o=d;break}if(R===o){g=!0,o=u,a=d;break}R=R.sibling}if(!g){for(R=d.child;R;){if(R===a){g=!0,a=d,o=u;break}if(R===o){g=!0,o=d,a=u;break}R=R.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var S=Object.assign,_=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),O=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),K=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var mt=Symbol.for("react.client.reference");function St(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===mt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case k:return"Suspense";case z:return"SuspenseList";case P:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case O:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case L:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:St(e.type)||"Memo";case b:n=e._payload,e=e._init;try{return St(e(n))}catch{}}return null}var W=Array.isArray,U=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ct={pending:!1,data:null,method:null,action:null},yt=[],bt=-1;function N(e){return{current:e}}function J(e){0>bt||(e.current=yt[bt],yt[bt]=null,bt--)}function Tt(e,n){bt++,yt[bt]=e.current,e.current=n}var Ot=N(null),Pt=N(null),lt=N(null),wt=N(null);function Lt(e,n){switch(Tt(lt,n),Tt(Pt,e),Tt(Ot,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?C0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=C0(n),e=D0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}J(Ot),Tt(Ot,e)}function kt(){J(Ot),J(Pt),J(lt)}function ae(e){e.memoizedState!==null&&Tt(wt,e);var n=Ot.current,a=D0(n,e.type);n!==a&&(Tt(Pt,e),Tt(Ot,a))}function $t(e){Pt.current===e&&(J(Ot),J(Pt)),wt.current===e&&(J(wt),Go._currentValue=ct)}var ze,fe;function ve(e){if(ze===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ze=n&&n[1]||"",fe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ze+e+fe}var De=!1;function le(e,n){if(!e||De)return"";De=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Et=function(){throw Error()};if(Object.defineProperty(Et.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Et,[])}catch(ft){var ot=ft}Reflect.construct(e,[],Et)}else{try{Et.call()}catch(ft){ot=ft}e.call(Et.prototype)}}else{try{throw Error()}catch(ft){ot=ft}(Et=e())&&typeof Et.catch=="function"&&Et.catch(function(){})}}catch(ft){if(ft&&ot&&typeof ft.stack=="string")return[ft.stack,ot.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),g=d[0],R=d[1];if(g&&R){var H=g.split(`
`),nt=R.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<nt.length&&!nt[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===nt.length)for(o=H.length-1,u=nt.length-1;1<=o&&0<=u&&H[o]!==nt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==nt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==nt[u]){var _t=`
`+H[o].replace(" at new "," at ");return e.displayName&&_t.includes("<anonymous>")&&(_t=_t.replace("<anonymous>",e.displayName)),_t}while(1<=o&&0<=u);break}}}finally{De=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ve(a):""}function tn(e,n){switch(e.tag){case 26:case 27:case 5:return ve(e.type);case 16:return ve("Lazy");case 13:return e.child!==n&&n!==null?ve("Suspense Fallback"):ve("Suspense");case 19:return ve("SuspenseList");case 0:case 15:return le(e.type,!1);case 11:return le(e.type.render,!1);case 1:return le(e.type,!0);case 31:return ve("Activity");default:return""}}function Xe(e){try{var n="",a=null;do n+=tn(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var fn=Object.prototype.hasOwnProperty,q=r.unstable_scheduleCallback,Qe=r.unstable_cancelCallback,Y=r.unstable_shouldYield,Xt=r.unstable_requestPaint,ht=r.unstable_now,Dt=r.unstable_getCurrentPriorityLevel,w=r.unstable_ImmediatePriority,M=r.unstable_UserBlockingPriority,G=r.unstable_NormalPriority,ut=r.unstable_LowPriority,gt=r.unstable_IdlePriority,At=r.log,Rt=r.unstable_setDisableYieldValue,st=null,tt=null;function vt(e){if(typeof At=="function"&&Rt(e),tt&&typeof tt.setStrictMode=="function")try{tt.setStrictMode(st,e)}catch{}}var Ut=Math.clz32?Math.clz32:Bt,dt=Math.log,pt=Math.LN2;function Bt(e){return e>>>=0,e===0?32:31-(dt(e)/pt|0)|0}var ne=256,ie=262144,V=4194304;function Nt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?u=Nt(o):(g&=R,g!==0?u=Nt(g):a||(a=R&~e,a!==0&&(u=Nt(a))))):(R=o&~d,R!==0?u=Nt(R):g!==0?u=Nt(g):a||(a=o&~e,a!==0&&(u=Nt(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Ht(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function zt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ct(){var e=V;return V<<=1,(V&62914560)===0&&(V=4194304),e}function Kt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function re(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function sn(e,n,a,o,u,d){var g=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,H=e.expirationTimes,nt=e.hiddenUpdates;for(a=g&~a;0<a;){var _t=31-Ut(a),Et=1<<_t;R[_t]=0,H[_t]=-1;var ot=nt[_t];if(ot!==null)for(nt[_t]=null,_t=0;_t<ot.length;_t++){var ft=ot[_t];ft!==null&&(ft.lane&=-536870913)}a&=~Et}o!==0&&Oe(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(g&~n))}function Oe(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ut(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function di(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ut(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Jn(e,n){var a=n&-n;return a=(a&42)!==0?1:ps(a),(a&(e.suspendedLanes|n))!==0?0:a}function ps(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Jr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function $r(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:$0(e.type))}function to(e,n){var a=B.p;try{return B.p=e,n()}finally{B.p=a}}var On=Math.random().toString(36).slice(2),dn="__reactFiber$"+On,wn="__reactProps$"+On,Qi="__reactContainer$"+On,Ra="__reactEvents$"+On,dl="__reactListeners$"+On,Ys="__reactHandles$"+On,eo="__reactResources$"+On,wa="__reactMarker$"+On;function no(e){delete e[dn],delete e[wn],delete e[Ra],delete e[dl],delete e[Ys]}function Ca(e){var n=e[dn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Qi]||a[dn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=I0(e);e!==null;){if(a=e[dn])return a;e=I0(e)}return n}e=a,a=e.parentNode}return null}function Da(e){if(e=e[dn]||e[Qi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ms(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ua(e){var n=e[eo];return n||(n=e[eo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function mn(e){e[wa]=!0}var hl=new Set,A={};function j(e,n){rt(e,n),rt(e+"Capture",n)}function rt(e,n){for(A[e]=n,e=0;e<n.length;e++)hl.add(n[e])}var it=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},Ft={};function Yt(e){return fn.call(Ft,e)?!0:fn.call(at,e)?!1:it.test(e)?Ft[e]=!0:(at[e]=!0,!1)}function It(e,n,a){if(Yt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function jt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function qt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function te(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function de(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jt(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,d.call(this,g)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ue(e){if(!e._valueTracker){var n=de(e)?"checked":"value";e._valueTracker=Jt(e,n,""+e[n])}}function en(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=de(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Ze(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Fe=/[\n"\\]/g;function Be(e){return e.replace(Fe,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Wt(e,n,a,o,u,d,g,R){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),n!=null?g==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+te(n)):e.value!==""+te(n)&&(e.value=""+te(n)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),n!=null?xe(e,g,te(n)):a!=null?xe(e,g,te(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+te(R):e.removeAttribute("name")}function Pn(e,n,a,o,u,d,g,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Ue(e);return}a=a!=null?""+te(a):"",n=n!=null?""+te(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),Ue(e)}function xe(e,n,a){n==="number"&&Ze(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function yn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+te(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function $n(e,n,a){if(n!=null&&(n=""+te(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+te(a):""}function bi(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(W(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=te(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ue(e)}function ti(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var He=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||He.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ti(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&nn(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&nn(e,d,n[d])}function Ie(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Na=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gs(e){return Na.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ji(){}var mu=null;function gu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qs=null,js=null;function wp(e){var n=Da(e);if(n&&(e=n.stateNode)){var a=e[wn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Wt(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Be(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[wn]||null;if(!u)throw Error(s(90));Wt(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&en(o)}break t;case"textarea":$n(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&yn(e,!!a.multiple,n,!1)}}}var _u=!1;function Cp(e,n,a){if(_u)return e(n,a);_u=!0;try{var o=e(n);return o}finally{if(_u=!1,(qs!==null||js!==null)&&(tc(),qs&&(n=qs,e=js,js=qs=null,wp(n),e)))for(n=0;n<e.length;n++)wp(e[n])}}function io(e,n){var a=e.stateNode;if(a===null)return null;var o=a[wn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vu=!1;if($i)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){vu=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{vu=!1}var La=null,xu=null,pl=null;function Dp(){if(pl)return pl;var e,n=xu,a=n.length,o,u="value"in La?La.value:La.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var g=a-e;for(o=1;o<=g&&n[a-o]===u[d-o];o++);return pl=u.slice(e,1<o?1-o:void 0)}function ml(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function gl(){return!0}function Up(){return!1}function Wn(e){function n(a,o,u,d,g){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=g,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?gl:Up,this.isPropagationStopped=Up,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),n}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=Wn(_s),so=S({},_s,{view:0,detail:0}),ax=Wn(so),Su,yu,ro,vl=S({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ro&&(ro&&e.type==="mousemove"?(Su=e.screenX-ro.screenX,yu=e.screenY-ro.screenY):yu=Su=0,ro=e),Su)},movementY:function(e){return"movementY"in e?e.movementY:yu}}),Np=Wn(vl),sx=S({},vl,{dataTransfer:0}),rx=Wn(sx),ox=S({},so,{relatedTarget:0}),Mu=Wn(ox),lx=S({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),cx=Wn(lx),ux=S({},_s,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fx=Wn(ux),dx=S({},_s,{data:0}),Lp=Wn(dx),hx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},px={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=mx[e])?!!n[e]:!1}function Eu(){return gx}var _x=S({},so,{key:function(e){if(e.key){var n=hx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ml(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?px[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eu,charCode:function(e){return e.type==="keypress"?ml(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ml(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vx=Wn(_x),xx=S({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Op=Wn(xx),Sx=S({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eu}),yx=Wn(Sx),Mx=S({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ex=Wn(Mx),bx=S({},vl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tx=Wn(bx),Ax=S({},_s,{newState:0,oldState:0}),Rx=Wn(Ax),wx=[9,13,27,32],bu=$i&&"CompositionEvent"in window,oo=null;$i&&"documentMode"in document&&(oo=document.documentMode);var Cx=$i&&"TextEvent"in window&&!oo,Pp=$i&&(!bu||oo&&8<oo&&11>=oo),zp=" ",Ip=!1;function Fp(e,n){switch(e){case"keyup":return wx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zs=!1;function Dx(e,n){switch(e){case"compositionend":return Bp(n);case"keypress":return n.which!==32?null:(Ip=!0,zp);case"textInput":return e=n.data,e===zp&&Ip?null:e;default:return null}}function Ux(e,n){if(Zs)return e==="compositionend"||!bu&&Fp(e,n)?(e=Dp(),pl=xu=La=null,Zs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Pp&&n.locale!=="ko"?null:n.data;default:return null}}var Nx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Nx[e.type]:n==="textarea"}function Gp(e,n,a,o){qs?js?js.push(o):js=[o]:qs=o,n=oc(n,"onChange"),0<n.length&&(a=new _l("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var lo=null,co=null;function Lx(e){E0(e,0)}function xl(e){var n=ms(e);if(en(n))return e}function Vp(e,n){if(e==="change")return n}var kp=!1;if($i){var Tu;if($i){var Au="oninput"in document;if(!Au){var Xp=document.createElement("div");Xp.setAttribute("oninput","return;"),Au=typeof Xp.oninput=="function"}Tu=Au}else Tu=!1;kp=Tu&&(!document.documentMode||9<document.documentMode)}function Wp(){lo&&(lo.detachEvent("onpropertychange",Yp),co=lo=null)}function Yp(e){if(e.propertyName==="value"&&xl(co)){var n=[];Gp(n,co,e,gu(e)),Cp(Lx,n)}}function Ox(e,n,a){e==="focusin"?(Wp(),lo=n,co=a,lo.attachEvent("onpropertychange",Yp)):e==="focusout"&&Wp()}function Px(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xl(co)}function zx(e,n){if(e==="click")return xl(n)}function Ix(e,n){if(e==="input"||e==="change")return xl(n)}function Fx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ei=typeof Object.is=="function"?Object.is:Fx;function uo(e,n){if(ei(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!fn.call(n,u)||!ei(e[u],n[u]))return!1}return!0}function qp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jp(e,n){var a=qp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=qp(a)}}function Zp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Zp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Kp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ze(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Ze(e.document)}return n}function Ru(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Bx=$i&&"documentMode"in document&&11>=document.documentMode,Ks=null,wu=null,fo=null,Cu=!1;function Qp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cu||Ks==null||Ks!==Ze(o)||(o=Ks,"selectionStart"in o&&Ru(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),fo&&uo(fo,o)||(fo=o,o=oc(wu,"onSelect"),0<o.length&&(n=new _l("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ks)))}function vs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Qs={animationend:vs("Animation","AnimationEnd"),animationiteration:vs("Animation","AnimationIteration"),animationstart:vs("Animation","AnimationStart"),transitionrun:vs("Transition","TransitionRun"),transitionstart:vs("Transition","TransitionStart"),transitioncancel:vs("Transition","TransitionCancel"),transitionend:vs("Transition","TransitionEnd")},Du={},Jp={};$i&&(Jp=document.createElement("div").style,"AnimationEvent"in window||(delete Qs.animationend.animation,delete Qs.animationiteration.animation,delete Qs.animationstart.animation),"TransitionEvent"in window||delete Qs.transitionend.transition);function xs(e){if(Du[e])return Du[e];if(!Qs[e])return e;var n=Qs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Jp)return Du[e]=n[a];return e}var $p=xs("animationend"),tm=xs("animationiteration"),em=xs("animationstart"),Hx=xs("transitionrun"),Gx=xs("transitionstart"),Vx=xs("transitioncancel"),nm=xs("transitionend"),im=new Map,Uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uu.push("scrollEnd");function Ai(e,n){im.set(e,n),j(n,[e])}var Sl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},hi=[],Js=0,Nu=0;function yl(){for(var e=Js,n=Nu=Js=0;n<e;){var a=hi[n];hi[n++]=null;var o=hi[n];hi[n++]=null;var u=hi[n];hi[n++]=null;var d=hi[n];if(hi[n++]=null,o!==null&&u!==null){var g=o.pending;g===null?u.next=u:(u.next=g.next,g.next=u),o.pending=u}d!==0&&am(a,u,d)}}function Ml(e,n,a,o){hi[Js++]=e,hi[Js++]=n,hi[Js++]=a,hi[Js++]=o,Nu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Lu(e,n,a,o){return Ml(e,n,a,o),El(e)}function Ss(e,n){return Ml(e,null,null,n),El(e)}function am(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-Ut(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function El(e){if(50<Oo)throw Oo=0,kf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var $s={};function kx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(e,n,a,o){return new kx(e,n,a,o)}function Ou(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ta(e,n){var a=e.alternate;return a===null?(a=ni(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function sm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function bl(e,n,a,o,u,d){var g=0;if(o=e,typeof e=="function")Ou(e)&&(g=1);else if(typeof e=="string")g=jS(e,a,Ot.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case P:return e=ni(31,a,n,u),e.elementType=P,e.lanes=d,e;case C:return ys(a.children,u,d,n);case y:g=8,u|=24;break;case v:return e=ni(12,a,n,u|2),e.elementType=v,e.lanes=d,e;case k:return e=ni(13,a,n,u),e.elementType=k,e.lanes=d,e;case z:return e=ni(19,a,n,u),e.elementType=z,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:g=10;break t;case D:g=9;break t;case L:g=11;break t;case I:g=14;break t;case b:g=16,o=null;break t}g=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ni(g,a,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function ys(e,n,a,o){return e=ni(7,e,o,n),e.lanes=a,e}function Pu(e,n,a){return e=ni(6,e,null,n),e.lanes=a,e}function rm(e){var n=ni(18,null,null,0);return n.stateNode=e,n}function zu(e,n,a){return n=ni(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var om=new WeakMap;function pi(e,n){if(typeof e=="object"&&e!==null){var a=om.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Xe(n)},om.set(e,n),n)}return{value:e,source:n,stack:Xe(n)}}var tr=[],er=0,Tl=null,ho=0,mi=[],gi=0,Oa=null,Pi=1,zi="";function ea(e,n){tr[er++]=ho,tr[er++]=Tl,Tl=e,ho=n}function lm(e,n,a){mi[gi++]=Pi,mi[gi++]=zi,mi[gi++]=Oa,Oa=e;var o=Pi;e=zi;var u=32-Ut(o)-1;o&=~(1<<u),a+=1;var d=32-Ut(n)+u;if(30<d){var g=u-u%5;d=(o&(1<<g)-1).toString(32),o>>=g,u-=g,Pi=1<<32-Ut(n)+u|a<<u|o,zi=d+e}else Pi=1<<d|a<<u|o,zi=e}function Iu(e){e.return!==null&&(ea(e,1),lm(e,1,0))}function Fu(e){for(;e===Tl;)Tl=tr[--er],tr[er]=null,ho=tr[--er],tr[er]=null;for(;e===Oa;)Oa=mi[--gi],mi[gi]=null,zi=mi[--gi],mi[gi]=null,Pi=mi[--gi],mi[gi]=null}function cm(e,n){mi[gi++]=Pi,mi[gi++]=zi,mi[gi++]=Oa,Pi=n.id,zi=n.overflow,Oa=e}var Cn=null,Je=null,Te=!1,Pa=null,_i=!1,Bu=Error(s(519));function za(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw po(pi(n,e)),Bu}function um(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[dn]=e,n[wn]=o,a){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(a=0;a<zo.length;a++)ye(zo[a],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),Pn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),bi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||R0(n.textContent,a)?(o.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),o.onScroll!=null&&ye("scroll",n),o.onScrollEnd!=null&&ye("scrollend",n),o.onClick!=null&&(n.onclick=Ji),n=!0):n=!1,n||za(e,!0)}function fm(e){for(Cn=e.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:Cn=Cn.return}}function nr(e){if(e!==Cn)return!1;if(!Te)return fm(e),Te=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ad(e.type,e.memoizedProps)),a=!a),a&&Je&&za(e),fm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Je=z0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Je=z0(e)}else n===27?(n=Je,Ka(e.type)?(e=cd,cd=null,Je=e):Je=n):Je=Cn?xi(e.stateNode.nextSibling):null;return!0}function Ms(){Je=Cn=null,Te=!1}function Hu(){var e=Pa;return e!==null&&(Zn===null?Zn=e:Zn.push.apply(Zn,e),Pa=null),e}function po(e){Pa===null?Pa=[e]:Pa.push(e)}var Gu=N(null),Es=null,na=null;function Ia(e,n,a){Tt(Gu,n._currentValue),n._currentValue=a}function ia(e){e._currentValue=Gu.current,J(Gu)}function Vu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function ku(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var g=u.child;d=d.firstContext;t:for(;d!==null;){var R=d;d=u;for(var H=0;H<n.length;H++)if(R.context===n[H]){d.lanes|=a,R=d.alternate,R!==null&&(R.lanes|=a),Vu(d.return,a,e),o||(g=null);break t}d=R.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(s(341));g.lanes|=a,d=g.alternate,d!==null&&(d.lanes|=a),Vu(g,a,e),g=null}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===e){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function ir(e,n,a,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var R=u.type;ei(u.pendingProps.value,g.value)||(e!==null?e.push(R):e=[R])}}else if(u===wt.current){if(g=u.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Go):e=[Go])}u=u.return}e!==null&&ku(n,e,a,o),n.flags|=262144}function Al(e){for(e=e.firstContext;e!==null;){if(!ei(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function bs(e){Es=e,na=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Dn(e){return dm(Es,e)}function Rl(e,n){return Es===null&&bs(e),dm(e,n)}function dm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},na===null){if(e===null)throw Error(s(308));na=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else na=na.next=n;return a}var Xx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Wx=r.unstable_scheduleCallback,Yx=r.unstable_NormalPriority,gn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xu(){return{controller:new Xx,data:new Map,refCount:0}}function mo(e){e.refCount--,e.refCount===0&&Wx(Yx,function(){e.controller.abort()})}var go=null,Wu=0,ar=0,sr=null;function qx(e,n){if(go===null){var a=go=[];Wu=0,ar=Zf(),sr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Wu++,n.then(hm,hm),n}function hm(){if(--Wu===0&&go!==null){sr!==null&&(sr.status="fulfilled");var e=go;go=null,ar=0,sr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function jx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var pm=U.S;U.S=function(e,n){Qg=ht(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&qx(e,n),pm!==null&&pm(e,n)};var Ts=N(null);function Yu(){var e=Ts.current;return e!==null?e:Ke.pooledCache}function wl(e,n){n===null?Tt(Ts,Ts.current):Tt(Ts,n.pool)}function mm(){var e=Yu();return e===null?null:{parent:gn._currentValue,pool:e}}var rr=Error(s(460)),qu=Error(s(474)),Cl=Error(s(542)),Dl={then:function(){}};function gm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function _m(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ji,Ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,xm(e),e;default:if(typeof n.status=="string")n.then(Ji,Ji);else{if(e=Ke,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,xm(e),e}throw Rs=n,rr}}function As(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Rs=a,rr):a}}var Rs=null;function vm(){if(Rs===null)throw Error(s(459));var e=Rs;return Rs=null,e}function xm(e){if(e===rr||e===Cl)throw Error(s(483))}var or=null,_o=0;function Ul(e){var n=_o;return _o+=1,or===null&&(or=[]),_m(or,e,n)}function vo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Nl(e,n){throw n.$$typeof===_?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Sm(e){function n(Z,X){if(e){var et=Z.deletions;et===null?(Z.deletions=[X],Z.flags|=16):et.push(X)}}function a(Z,X){if(!e)return null;for(;X!==null;)n(Z,X),X=X.sibling;return null}function o(Z){for(var X=new Map;Z!==null;)Z.key!==null?X.set(Z.key,Z):X.set(Z.index,Z),Z=Z.sibling;return X}function u(Z,X){return Z=ta(Z,X),Z.index=0,Z.sibling=null,Z}function d(Z,X,et){return Z.index=et,e?(et=Z.alternate,et!==null?(et=et.index,et<X?(Z.flags|=67108866,X):et):(Z.flags|=67108866,X)):(Z.flags|=1048576,X)}function g(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function R(Z,X,et,Mt){return X===null||X.tag!==6?(X=Pu(et,Z.mode,Mt),X.return=Z,X):(X=u(X,et),X.return=Z,X)}function H(Z,X,et,Mt){var ee=et.type;return ee===C?_t(Z,X,et.props.children,Mt,et.key):X!==null&&(X.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===b&&As(ee)===X.type)?(X=u(X,et.props),vo(X,et),X.return=Z,X):(X=bl(et.type,et.key,et.props,null,Z.mode,Mt),vo(X,et),X.return=Z,X)}function nt(Z,X,et,Mt){return X===null||X.tag!==4||X.stateNode.containerInfo!==et.containerInfo||X.stateNode.implementation!==et.implementation?(X=zu(et,Z.mode,Mt),X.return=Z,X):(X=u(X,et.children||[]),X.return=Z,X)}function _t(Z,X,et,Mt,ee){return X===null||X.tag!==7?(X=ys(et,Z.mode,Mt,ee),X.return=Z,X):(X=u(X,et),X.return=Z,X)}function Et(Z,X,et){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Pu(""+X,Z.mode,et),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case E:return et=bl(X.type,X.key,X.props,null,Z.mode,et),vo(et,X),et.return=Z,et;case T:return X=zu(X,Z.mode,et),X.return=Z,X;case b:return X=As(X),Et(Z,X,et)}if(W(X)||Q(X))return X=ys(X,Z.mode,et,null),X.return=Z,X;if(typeof X.then=="function")return Et(Z,Ul(X),et);if(X.$$typeof===O)return Et(Z,Rl(Z,X),et);Nl(Z,X)}return null}function ot(Z,X,et,Mt){var ee=X!==null?X.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return ee!==null?null:R(Z,X,""+et,Mt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case E:return et.key===ee?H(Z,X,et,Mt):null;case T:return et.key===ee?nt(Z,X,et,Mt):null;case b:return et=As(et),ot(Z,X,et,Mt)}if(W(et)||Q(et))return ee!==null?null:_t(Z,X,et,Mt,null);if(typeof et.then=="function")return ot(Z,X,Ul(et),Mt);if(et.$$typeof===O)return ot(Z,X,Rl(Z,et),Mt);Nl(Z,et)}return null}function ft(Z,X,et,Mt,ee){if(typeof Mt=="string"&&Mt!==""||typeof Mt=="number"||typeof Mt=="bigint")return Z=Z.get(et)||null,R(X,Z,""+Mt,ee);if(typeof Mt=="object"&&Mt!==null){switch(Mt.$$typeof){case E:return Z=Z.get(Mt.key===null?et:Mt.key)||null,H(X,Z,Mt,ee);case T:return Z=Z.get(Mt.key===null?et:Mt.key)||null,nt(X,Z,Mt,ee);case b:return Mt=As(Mt),ft(Z,X,et,Mt,ee)}if(W(Mt)||Q(Mt))return Z=Z.get(et)||null,_t(X,Z,Mt,ee,null);if(typeof Mt.then=="function")return ft(Z,X,et,Ul(Mt),ee);if(Mt.$$typeof===O)return ft(Z,X,et,Rl(X,Mt),ee);Nl(X,Mt)}return null}function Zt(Z,X,et,Mt){for(var ee=null,Ne=null,Qt=X,pe=X=0,Ee=null;Qt!==null&&pe<et.length;pe++){Qt.index>pe?(Ee=Qt,Qt=null):Ee=Qt.sibling;var Le=ot(Z,Qt,et[pe],Mt);if(Le===null){Qt===null&&(Qt=Ee);break}e&&Qt&&Le.alternate===null&&n(Z,Qt),X=d(Le,X,pe),Ne===null?ee=Le:Ne.sibling=Le,Ne=Le,Qt=Ee}if(pe===et.length)return a(Z,Qt),Te&&ea(Z,pe),ee;if(Qt===null){for(;pe<et.length;pe++)Qt=Et(Z,et[pe],Mt),Qt!==null&&(X=d(Qt,X,pe),Ne===null?ee=Qt:Ne.sibling=Qt,Ne=Qt);return Te&&ea(Z,pe),ee}for(Qt=o(Qt);pe<et.length;pe++)Ee=ft(Qt,Z,pe,et[pe],Mt),Ee!==null&&(e&&Ee.alternate!==null&&Qt.delete(Ee.key===null?pe:Ee.key),X=d(Ee,X,pe),Ne===null?ee=Ee:Ne.sibling=Ee,Ne=Ee);return e&&Qt.forEach(function(es){return n(Z,es)}),Te&&ea(Z,pe),ee}function se(Z,X,et,Mt){if(et==null)throw Error(s(151));for(var ee=null,Ne=null,Qt=X,pe=X=0,Ee=null,Le=et.next();Qt!==null&&!Le.done;pe++,Le=et.next()){Qt.index>pe?(Ee=Qt,Qt=null):Ee=Qt.sibling;var es=ot(Z,Qt,Le.value,Mt);if(es===null){Qt===null&&(Qt=Ee);break}e&&Qt&&es.alternate===null&&n(Z,Qt),X=d(es,X,pe),Ne===null?ee=es:Ne.sibling=es,Ne=es,Qt=Ee}if(Le.done)return a(Z,Qt),Te&&ea(Z,pe),ee;if(Qt===null){for(;!Le.done;pe++,Le=et.next())Le=Et(Z,Le.value,Mt),Le!==null&&(X=d(Le,X,pe),Ne===null?ee=Le:Ne.sibling=Le,Ne=Le);return Te&&ea(Z,pe),ee}for(Qt=o(Qt);!Le.done;pe++,Le=et.next())Le=ft(Qt,Z,pe,Le.value,Mt),Le!==null&&(e&&Le.alternate!==null&&Qt.delete(Le.key===null?pe:Le.key),X=d(Le,X,pe),Ne===null?ee=Le:Ne.sibling=Le,Ne=Le);return e&&Qt.forEach(function(sy){return n(Z,sy)}),Te&&ea(Z,pe),ee}function qe(Z,X,et,Mt){if(typeof et=="object"&&et!==null&&et.type===C&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case E:t:{for(var ee=et.key;X!==null;){if(X.key===ee){if(ee=et.type,ee===C){if(X.tag===7){a(Z,X.sibling),Mt=u(X,et.props.children),Mt.return=Z,Z=Mt;break t}}else if(X.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===b&&As(ee)===X.type){a(Z,X.sibling),Mt=u(X,et.props),vo(Mt,et),Mt.return=Z,Z=Mt;break t}a(Z,X);break}else n(Z,X);X=X.sibling}et.type===C?(Mt=ys(et.props.children,Z.mode,Mt,et.key),Mt.return=Z,Z=Mt):(Mt=bl(et.type,et.key,et.props,null,Z.mode,Mt),vo(Mt,et),Mt.return=Z,Z=Mt)}return g(Z);case T:t:{for(ee=et.key;X!==null;){if(X.key===ee)if(X.tag===4&&X.stateNode.containerInfo===et.containerInfo&&X.stateNode.implementation===et.implementation){a(Z,X.sibling),Mt=u(X,et.children||[]),Mt.return=Z,Z=Mt;break t}else{a(Z,X);break}else n(Z,X);X=X.sibling}Mt=zu(et,Z.mode,Mt),Mt.return=Z,Z=Mt}return g(Z);case b:return et=As(et),qe(Z,X,et,Mt)}if(W(et))return Zt(Z,X,et,Mt);if(Q(et)){if(ee=Q(et),typeof ee!="function")throw Error(s(150));return et=ee.call(et),se(Z,X,et,Mt)}if(typeof et.then=="function")return qe(Z,X,Ul(et),Mt);if(et.$$typeof===O)return qe(Z,X,Rl(Z,et),Mt);Nl(Z,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,X!==null&&X.tag===6?(a(Z,X.sibling),Mt=u(X,et),Mt.return=Z,Z=Mt):(a(Z,X),Mt=Pu(et,Z.mode,Mt),Mt.return=Z,Z=Mt),g(Z)):a(Z,X)}return function(Z,X,et,Mt){try{_o=0;var ee=qe(Z,X,et,Mt);return or=null,ee}catch(Qt){if(Qt===rr||Qt===Cl)throw Qt;var Ne=ni(29,Qt,null,Z.mode);return Ne.lanes=Mt,Ne.return=Z,Ne}finally{}}}var ws=Sm(!0),ym=Sm(!1),Fa=!1;function ju(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ha(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Pe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=El(e),am(e,null,a),n}return Ml(e,o,n,a),El(e)}function xo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,di(e,a)}}function Ku(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=g:d=d.next=g,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Qu=!1;function So(){if(Qu){var e=sr;if(e!==null)throw e}}function yo(e,n,a,o){Qu=!1;var u=e.updateQueue;Fa=!1;var d=u.firstBaseUpdate,g=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var H=R,nt=H.next;H.next=null,g===null?d=nt:g.next=nt,g=H;var _t=e.alternate;_t!==null&&(_t=_t.updateQueue,R=_t.lastBaseUpdate,R!==g&&(R===null?_t.firstBaseUpdate=nt:R.next=nt,_t.lastBaseUpdate=H))}if(d!==null){var Et=u.baseState;g=0,_t=nt=H=null,R=d;do{var ot=R.lane&-536870913,ft=ot!==R.lane;if(ft?(Me&ot)===ot:(o&ot)===ot){ot!==0&&ot===ar&&(Qu=!0),_t!==null&&(_t=_t.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Zt=e,se=R;ot=n;var qe=a;switch(se.tag){case 1:if(Zt=se.payload,typeof Zt=="function"){Et=Zt.call(qe,Et,ot);break t}Et=Zt;break t;case 3:Zt.flags=Zt.flags&-65537|128;case 0:if(Zt=se.payload,ot=typeof Zt=="function"?Zt.call(qe,Et,ot):Zt,ot==null)break t;Et=S({},Et,ot);break t;case 2:Fa=!0}}ot=R.callback,ot!==null&&(e.flags|=64,ft&&(e.flags|=8192),ft=u.callbacks,ft===null?u.callbacks=[ot]:ft.push(ot))}else ft={lane:ot,tag:R.tag,payload:R.payload,callback:R.callback,next:null},_t===null?(nt=_t=ft,H=Et):_t=_t.next=ft,g|=ot;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ft=R,R=ft.next,ft.next=null,u.lastBaseUpdate=ft,u.shared.pending=null}}while(!0);_t===null&&(H=Et),u.baseState=H,u.firstBaseUpdate=nt,u.lastBaseUpdate=_t,d===null&&(u.shared.lanes=0),Wa|=g,e.lanes=g,e.memoizedState=Et}}function Mm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Em(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Mm(a[e],n)}var lr=N(null),Ll=N(0);function bm(e,n){e=da,Tt(Ll,e),Tt(lr,n),da=e|n.baseLanes}function Ju(){Tt(Ll,da),Tt(lr,lr.current)}function $u(){da=Ll.current,J(lr),J(Ll)}var ii=N(null),vi=null;function Ga(e){var n=e.alternate;Tt(hn,hn.current&1),Tt(ii,e),vi===null&&(n===null||lr.current!==null||n.memoizedState!==null)&&(vi=e)}function tf(e){Tt(hn,hn.current),Tt(ii,e),vi===null&&(vi=e)}function Tm(e){e.tag===22?(Tt(hn,hn.current),Tt(ii,e),vi===null&&(vi=e)):Va()}function Va(){Tt(hn,hn.current),Tt(ii,ii.current)}function ai(e){J(ii),vi===e&&(vi=null),J(hn)}var hn=N(0);function Ol(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||od(a)||ld(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var aa=0,he=null,We=null,_n=null,Pl=!1,cr=!1,Cs=!1,zl=0,Mo=0,ur=null,Zx=0;function on(){throw Error(s(321))}function ef(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ei(e[a],n[a]))return!1;return!0}function nf(e,n,a,o,u,d){return aa=d,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=e===null||e.memoizedState===null?lg:vf,Cs=!1,d=a(o,u),Cs=!1,cr&&(d=Rm(n,a,o,u)),Am(e),d}function Am(e){U.H=To;var n=We!==null&&We.next!==null;if(aa=0,_n=We=he=null,Pl=!1,Mo=0,ur=null,n)throw Error(s(300));e===null||vn||(e=e.dependencies,e!==null&&Al(e)&&(vn=!0))}function Rm(e,n,a,o){he=e;var u=0;do{if(cr&&(ur=null),Mo=0,cr=!1,25<=u)throw Error(s(301));if(u+=1,_n=We=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}U.H=cg,d=n(a,o)}while(cr);return d}function Kx(){var e=U.H,n=e.useState()[0];return n=typeof n.then=="function"?Eo(n):n,e=e.useState()[0],(We!==null?We.memoizedState:null)!==e&&(he.flags|=1024),n}function af(){var e=zl!==0;return zl=0,e}function sf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function rf(e){if(Pl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Pl=!1}aa=0,_n=We=he=null,cr=!1,Mo=zl=0,ur=null}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?he.memoizedState=_n=e:_n=_n.next=e,_n}function pn(){if(We===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=We.next;var n=_n===null?he.memoizedState:_n.next;if(n!==null)_n=n,We=e;else{if(e===null)throw he.alternate===null?Error(s(467)):Error(s(310));We=e,e={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},_n===null?he.memoizedState=_n=e:_n=_n.next=e}return _n}function Il(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Eo(e){var n=Mo;return Mo+=1,ur===null&&(ur=[]),e=_m(ur,e,n),n=he,(_n===null?n.memoizedState:_n.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?lg:vf),e}function Fl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Eo(e);if(e.$$typeof===O)return Dn(e)}throw Error(s(438,String(e)))}function of(e){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=he.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Il(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=K;return n.index++,a}function sa(e,n){return typeof n=="function"?n(e):n}function Bl(e){var n=pn();return lf(n,We,e)}function lf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var g=u.next;u.next=d.next,d.next=g}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var R=g=null,H=null,nt=n,_t=!1;do{var Et=nt.lane&-536870913;if(Et!==nt.lane?(Me&Et)===Et:(aa&Et)===Et){var ot=nt.revertLane;if(ot===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),Et===ar&&(_t=!0);else if((aa&ot)===ot){nt=nt.next,ot===ar&&(_t=!0);continue}else Et={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},H===null?(R=H=Et,g=d):H=H.next=Et,he.lanes|=ot,Wa|=ot;Et=nt.action,Cs&&a(d,Et),d=nt.hasEagerState?nt.eagerState:a(d,Et)}else ot={lane:Et,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},H===null?(R=H=ot,g=d):H=H.next=ot,he.lanes|=Et,Wa|=Et;nt=nt.next}while(nt!==null&&nt!==n);if(H===null?g=d:H.next=R,!ei(d,e.memoizedState)&&(vn=!0,_t&&(a=sr,a!==null)))throw a;e.memoizedState=d,e.baseState=g,e.baseQueue=H,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function cf(e){var n=pn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do d=e(d,g.action),g=g.next;while(g!==u);ei(d,n.memoizedState)||(vn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function wm(e,n,a){var o=he,u=pn(),d=Te;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!ei((We||u).memoizedState,a);if(g&&(u.memoizedState=a,vn=!0),u=u.queue,df(Um.bind(null,o,u,e),[e]),u.getSnapshot!==n||g||_n!==null&&_n.memoizedState.tag&1){if(o.flags|=2048,fr(9,{destroy:void 0},Dm.bind(null,o,u,a,n),null),Ke===null)throw Error(s(349));d||(aa&127)!==0||Cm(o,n,a)}return a}function Cm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=Il(),he.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Dm(e,n,a,o){n.value=a,n.getSnapshot=o,Nm(n)&&Lm(e)}function Um(e,n,a){return a(function(){Nm(n)&&Lm(e)})}function Nm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ei(e,a)}catch{return!0}}function Lm(e){var n=Ss(e,2);n!==null&&Kn(n,e,2)}function uf(e){var n=Gn();if(typeof e=="function"){var a=e;if(e=a(),Cs){vt(!0);try{a()}finally{vt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:e},n}function Om(e,n,a,o){return e.baseState=a,lf(e,We,typeof o=="function"?o:sa)}function Qx(e,n,a,o,u){if(Vl(e))throw Error(s(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){d.listeners.push(g)}};U.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Pm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Pm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=U.T,g={};U.T=g;try{var R=a(u,o),H=U.S;H!==null&&H(g,R),zm(e,n,R)}catch(nt){ff(e,n,nt)}finally{d!==null&&g.types!==null&&(d.types=g.types),U.T=d}}else try{d=a(u,o),zm(e,n,d)}catch(nt){ff(e,n,nt)}}function zm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Im(e,n,o)},function(o){return ff(e,n,o)}):Im(e,n,a)}function Im(e,n,a){n.status="fulfilled",n.value=a,Fm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Pm(e,a)))}function ff(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Fm(n),n=n.next;while(n!==o)}e.action=null}function Fm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Bm(e,n){return n}function Hm(e,n){if(Te){var a=Ke.formState;if(a!==null){t:{var o=he;if(Te){if(Je){e:{for(var u=Je,d=_i;u.nodeType!==8;){if(!d){u=null;break e}if(u=xi(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Je=xi(u.nextSibling),o=u.data==="F!";break t}}za(o)}o=!1}o&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bm,lastRenderedState:n},a.queue=o,a=sg.bind(null,he,o),o.dispatch=a,o=uf(!1),d=_f.bind(null,he,!1,o.queue),o=Gn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Qx.bind(null,he,u,d,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Gm(e){var n=pn();return Vm(n,We,e)}function Vm(e,n,a){if(n=lf(e,n,Bm)[0],e=Bl(sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Eo(n)}catch(g){throw g===rr?Cl:g}else o=n;n=pn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(he.flags|=2048,fr(9,{destroy:void 0},Jx.bind(null,u,a),null)),[o,d,e]}function Jx(e,n){e.action=n}function km(e){var n=pn(),a=We;if(a!==null)return Vm(n,a,e);pn(),n=n.memoizedState,a=pn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function fr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=he.updateQueue,n===null&&(n=Il(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Xm(){return pn().memoizedState}function Hl(e,n,a,o){var u=Gn();he.flags|=e,u.memoizedState=fr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Gl(e,n,a,o){var u=pn();o=o===void 0?null:o;var d=u.memoizedState.inst;We!==null&&o!==null&&ef(o,We.memoizedState.deps)?u.memoizedState=fr(n,d,a,o):(he.flags|=e,u.memoizedState=fr(1|n,d,a,o))}function Wm(e,n){Hl(8390656,8,e,n)}function df(e,n){Gl(2048,8,e,n)}function $x(e){he.flags|=4;var n=he.updateQueue;if(n===null)n=Il(),he.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Ym(e){var n=pn().memoizedState;return $x({ref:n,nextImpl:e}),function(){if((Pe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function qm(e,n){return Gl(4,2,e,n)}function jm(e,n){return Gl(4,4,e,n)}function Zm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Km(e,n,a){a=a!=null?a.concat([e]):null,Gl(4,4,Zm.bind(null,n,e),a)}function hf(){}function Qm(e,n){var a=pn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&ef(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Jm(e,n){var a=pn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&ef(n,o[1]))return o[0];if(o=e(),Cs){vt(!0);try{e()}finally{vt(!1)}}return a.memoizedState=[o,n],o}function pf(e,n,a){return a===void 0||(aa&1073741824)!==0&&(Me&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=$g(),he.lanes|=e,Wa|=e,a)}function $m(e,n,a,o){return ei(a,n)?a:lr.current!==null?(e=pf(e,a,o),ei(e,n)||(vn=!0),e):(aa&42)===0||(aa&1073741824)!==0&&(Me&261930)===0?(vn=!0,e.memoizedState=a):(e=$g(),he.lanes|=e,Wa|=e,n)}function tg(e,n,a,o,u){var d=B.p;B.p=d!==0&&8>d?d:8;var g=U.T,R={};U.T=R,_f(e,!1,n,a);try{var H=u(),nt=U.S;if(nt!==null&&nt(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var _t=jx(H,o);bo(e,n,_t,oi(e))}else bo(e,n,o,oi(e))}catch(Et){bo(e,n,{then:function(){},status:"rejected",reason:Et},oi())}finally{B.p=d,g!==null&&R.types!==null&&(g.types=R.types),U.T=g}}function tS(){}function mf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=eg(e).queue;tg(e,u,n,ct,a===null?tS:function(){return ng(e),a(o)})}function eg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ct,baseState:ct,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:ct},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function ng(e){var n=eg(e);n.next===null&&(n=e.alternate.memoizedState),bo(e,n.next.queue,{},oi())}function gf(){return Dn(Go)}function ig(){return pn().memoizedState}function ag(){return pn().memoizedState}function eS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=oi();e=Ba(a);var o=Ha(n,e,a);o!==null&&(Kn(o,n,a),xo(o,n,a)),n={cache:Xu()},e.payload=n;return}n=n.return}}function nS(e,n,a){var o=oi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Vl(e)?rg(n,a):(a=Lu(e,n,a,o),a!==null&&(Kn(a,e,o),og(a,n,o)))}function sg(e,n,a){var o=oi();bo(e,n,a,o)}function bo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vl(e))rg(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var g=n.lastRenderedState,R=d(g,a);if(u.hasEagerState=!0,u.eagerState=R,ei(R,g))return Ml(e,n,u,0),Ke===null&&yl(),!1}catch{}finally{}if(a=Lu(e,n,u,o),a!==null)return Kn(a,e,o),og(a,n,o),!0}return!1}function _f(e,n,a,o){if(o={lane:2,revertLane:Zf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Vl(e)){if(n)throw Error(s(479))}else n=Lu(e,a,o,2),n!==null&&Kn(n,e,2)}function Vl(e){var n=e.alternate;return e===he||n!==null&&n===he}function rg(e,n){cr=Pl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function og(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,di(e,a)}}var To={readContext:Dn,use:Fl,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on};To.useEffectEvent=on;var lg={readContext:Dn,use:Fl,useCallback:function(e,n){return Gn().memoizedState=[e,n===void 0?null:n],e},useContext:Dn,useEffect:Wm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Hl(4194308,4,Zm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Hl(4194308,4,e,n)},useInsertionEffect:function(e,n){Hl(4,2,e,n)},useMemo:function(e,n){var a=Gn();n=n===void 0?null:n;var o=e();if(Cs){vt(!0);try{e()}finally{vt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Gn();if(a!==void 0){var u=a(n);if(Cs){vt(!0);try{a(n)}finally{vt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=nS.bind(null,he,e),[o.memoizedState,e]},useRef:function(e){var n=Gn();return e={current:e},n.memoizedState=e},useState:function(e){e=uf(e);var n=e.queue,a=sg.bind(null,he,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:hf,useDeferredValue:function(e,n){var a=Gn();return pf(a,e,n)},useTransition:function(){var e=uf(!1);return e=tg.bind(null,he,e.queue,!0,!1),Gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=he,u=Gn();if(Te){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ke===null)throw Error(s(349));(Me&127)!==0||Cm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Wm(Um.bind(null,o,d,e),[e]),o.flags|=2048,fr(9,{destroy:void 0},Dm.bind(null,o,d,a,n),null),a},useId:function(){var e=Gn(),n=Ke.identifierPrefix;if(Te){var a=zi,o=Pi;a=(o&~(1<<32-Ut(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=zl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Zx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:gf,useFormState:Hm,useActionState:Hm,useOptimistic:function(e){var n=Gn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=_f.bind(null,he,!0,a),a.dispatch=n,[e,n]},useMemoCache:of,useCacheRefresh:function(){return Gn().memoizedState=eS.bind(null,he)},useEffectEvent:function(e){var n=Gn(),a={impl:e};return n.memoizedState=a,function(){if((Pe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},vf={readContext:Dn,use:Fl,useCallback:Qm,useContext:Dn,useEffect:df,useImperativeHandle:Km,useInsertionEffect:qm,useLayoutEffect:jm,useMemo:Jm,useReducer:Bl,useRef:Xm,useState:function(){return Bl(sa)},useDebugValue:hf,useDeferredValue:function(e,n){var a=pn();return $m(a,We.memoizedState,e,n)},useTransition:function(){var e=Bl(sa)[0],n=pn().memoizedState;return[typeof e=="boolean"?e:Eo(e),n]},useSyncExternalStore:wm,useId:ig,useHostTransitionStatus:gf,useFormState:Gm,useActionState:Gm,useOptimistic:function(e,n){var a=pn();return Om(a,We,e,n)},useMemoCache:of,useCacheRefresh:ag};vf.useEffectEvent=Ym;var cg={readContext:Dn,use:Fl,useCallback:Qm,useContext:Dn,useEffect:df,useImperativeHandle:Km,useInsertionEffect:qm,useLayoutEffect:jm,useMemo:Jm,useReducer:cf,useRef:Xm,useState:function(){return cf(sa)},useDebugValue:hf,useDeferredValue:function(e,n){var a=pn();return We===null?pf(a,e,n):$m(a,We.memoizedState,e,n)},useTransition:function(){var e=cf(sa)[0],n=pn().memoizedState;return[typeof e=="boolean"?e:Eo(e),n]},useSyncExternalStore:wm,useId:ig,useHostTransitionStatus:gf,useFormState:km,useActionState:km,useOptimistic:function(e,n){var a=pn();return We!==null?Om(a,We,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:of,useCacheRefresh:ag};cg.useEffectEvent=Ym;function xf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:S({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Sf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=oi(),u=Ba(o);u.payload=n,a!=null&&(u.callback=a),n=Ha(e,u,o),n!==null&&(Kn(n,e,o),xo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=oi(),u=Ba(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ha(e,u,o),n!==null&&(Kn(n,e,o),xo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=oi(),o=Ba(a);o.tag=2,n!=null&&(o.callback=n),n=Ha(e,o,a),n!==null&&(Kn(n,e,a),xo(n,e,a))}};function ug(e,n,a,o,u,d,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,g):n.prototype&&n.prototype.isPureReactComponent?!uo(a,o)||!uo(u,d):!0}function fg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Sf.enqueueReplaceState(n,n.state,null)}function Ds(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=S({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function dg(e){Sl(e)}function hg(e){console.error(e)}function pg(e){Sl(e)}function kl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function mg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function yf(e,n,a){return a=Ba(a),a.tag=3,a.payload={element:null},a.callback=function(){kl(e,n)},a}function gg(e){return e=Ba(e),e.tag=3,e}function _g(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){mg(n,a,o)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){mg(n,a,o),typeof u!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function iS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ir(n,a,u,!0),a=ii.current,a!==null){switch(a.tag){case 31:case 13:return vi===null?ec():a.alternate===null&&ln===0&&(ln=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Dl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Yf(e,o,u)),!1;case 22:return a.flags|=65536,o===Dl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Yf(e,o,u)),!1}throw Error(s(435,a.tag))}return Yf(e,o,u),ec(),!1}if(Te)return n=ii.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Bu&&(e=Error(s(422),{cause:o}),po(pi(e,a)))):(o!==Bu&&(n=Error(s(423),{cause:o}),po(pi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=pi(o,a),u=yf(e.stateNode,o,u),Ku(e,u),ln!==4&&(ln=2)),!1;var d=Error(s(520),{cause:o});if(d=pi(d,a),Lo===null?Lo=[d]:Lo.push(d),ln!==4&&(ln=2),n===null)return!0;o=pi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=yf(a.stateNode,o,e),Ku(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ya===null||!Ya.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=gg(u),_g(u,e,a,o),Ku(a,u),!1}a=a.return}while(a!==null);return!1}var Mf=Error(s(461)),vn=!1;function Un(e,n,a,o){n.child=e===null?ym(n,null,a,o):ws(n,e.child,a,o)}function vg(e,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var g={};for(var R in o)R!=="ref"&&(g[R]=o[R])}else g=o;return bs(n),o=nf(e,n,a,g,d,u),R=af(),e!==null&&!vn?(sf(e,n,u),ra(e,n,u)):(Te&&R&&Iu(n),n.flags|=1,Un(e,n,o,u),n.child)}function xg(e,n,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!Ou(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,Sg(e,n,d,o,u)):(e=bl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!Df(e,u)){var g=d.memoizedProps;if(a=a.compare,a=a!==null?a:uo,a(g,o)&&e.ref===n.ref)return ra(e,n,u)}return n.flags|=1,e=ta(d,o),e.ref=n.ref,e.return=n,n.child=e}function Sg(e,n,a,o,u){if(e!==null){var d=e.memoizedProps;if(uo(d,o)&&e.ref===n.ref)if(vn=!1,n.pendingProps=o=d,Df(e,u))(e.flags&131072)!==0&&(vn=!0);else return n.lanes=e.lanes,ra(e,n,u)}return Ef(e,n,a,o,u)}function yg(e,n,a,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return Mg(e,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&wl(n,d!==null?d.cachePool:null),d!==null?bm(n,d):Ju(),Tm(n);else return o=n.lanes=536870912,Mg(e,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(wl(n,d.cachePool),bm(n,d),Va(),n.memoizedState=null):(e!==null&&wl(n,null),Ju(),Va());return Un(e,n,u,a),n.child}function Ao(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Mg(e,n,a,o,u){var d=Yu();return d=d===null?null:{parent:gn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},e!==null&&wl(n,null),Ju(),Tm(n),e!==null&&ir(e,n,o,!0),n.childLanes=u,null}function Xl(e,n){return n=Yl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Eg(e,n,a){return ws(n,e.child,null,a),e=Xl(n,n.pendingProps),e.flags|=2,ai(n),n.memoizedState=null,e}function aS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Te){if(o.mode==="hidden")return e=Xl(n,o),n.lanes=536870912,Ao(null,e);if(tf(n),(e=Je)?(e=P0(e,_i),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Oa!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=rm(e),a.return=n,n.child=a,Cn=n,Je=null)):e=null,e===null)throw za(n);return n.lanes=536870912,null}return Xl(n,o)}var d=e.memoizedState;if(d!==null){var g=d.dehydrated;if(tf(n),u)if(n.flags&256)n.flags&=-257,n=Eg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(vn||ir(e,n,a,!1),u=(a&e.childLanes)!==0,vn||u){if(o=Ke,o!==null&&(g=Jn(o,a),g!==0&&g!==d.retryLane))throw d.retryLane=g,Ss(e,g),Kn(o,e,g),Mf;ec(),n=Eg(e,n,a)}else e=d.treeContext,Je=xi(g.nextSibling),Cn=n,Te=!0,Pa=null,_i=!1,e!==null&&cm(n,e),n=Xl(n,o),n.flags|=4096;return n}return e=ta(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Wl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Ef(e,n,a,o,u){return bs(n),a=nf(e,n,a,o,void 0,u),o=af(),e!==null&&!vn?(sf(e,n,u),ra(e,n,u)):(Te&&o&&Iu(n),n.flags|=1,Un(e,n,a,u),n.child)}function bg(e,n,a,o,u,d){return bs(n),n.updateQueue=null,a=Rm(n,o,a,u),Am(e),o=af(),e!==null&&!vn?(sf(e,n,d),ra(e,n,d)):(Te&&o&&Iu(n),n.flags|=1,Un(e,n,a,d),n.child)}function Tg(e,n,a,o,u){if(bs(n),n.stateNode===null){var d=$s,g=a.contextType;typeof g=="object"&&g!==null&&(d=Dn(g)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Sf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},ju(n),g=a.contextType,d.context=typeof g=="object"&&g!==null?Dn(g):$s,d.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(xf(n,a,g,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(g=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),g!==d.state&&Sf.enqueueReplaceState(d,d.state,null),yo(n,o,d,u),So(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var R=n.memoizedProps,H=Ds(a,R);d.props=H;var nt=d.context,_t=a.contextType;g=$s,typeof _t=="object"&&_t!==null&&(g=Dn(_t));var Et=a.getDerivedStateFromProps;_t=typeof Et=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,_t||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||nt!==g)&&fg(n,d,o,g),Fa=!1;var ot=n.memoizedState;d.state=ot,yo(n,o,d,u),So(),nt=n.memoizedState,R||ot!==nt||Fa?(typeof Et=="function"&&(xf(n,a,Et,o),nt=n.memoizedState),(H=Fa||ug(n,a,H,o,ot,nt,g))?(_t||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=nt),d.props=o,d.state=nt,d.context=g,o=H):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Zu(e,n),g=n.memoizedProps,_t=Ds(a,g),d.props=_t,Et=n.pendingProps,ot=d.context,nt=a.contextType,H=$s,typeof nt=="object"&&nt!==null&&(H=Dn(nt)),R=a.getDerivedStateFromProps,(nt=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(g!==Et||ot!==H)&&fg(n,d,o,H),Fa=!1,ot=n.memoizedState,d.state=ot,yo(n,o,d,u),So();var ft=n.memoizedState;g!==Et||ot!==ft||Fa||e!==null&&e.dependencies!==null&&Al(e.dependencies)?(typeof R=="function"&&(xf(n,a,R,o),ft=n.memoizedState),(_t=Fa||ug(n,a,_t,o,ot,ft,H)||e!==null&&e.dependencies!==null&&Al(e.dependencies))?(nt||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ft,H),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ft,H)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||g===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ft),d.props=o,d.state=ft,d.context=H,o=_t):(typeof d.componentDidUpdate!="function"||g===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Wl(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=ws(n,e.child,null,u),n.child=ws(n,null,a,u)):Un(e,n,a,u),n.memoizedState=d.state,e=n.child):e=ra(e,n,u),e}function Ag(e,n,a,o){return Ms(),n.flags|=256,Un(e,n,a,o),n.child}var bf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tf(e){return{baseLanes:e,cachePool:mm()}}function Af(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ri),e}function Rg(e,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,g;if((g=d)||(g=e!==null&&e.memoizedState===null?!1:(hn.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,e===null){if(Te){if(u?Ga(n):Va(),(e=Je)?(e=P0(e,_i),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Oa!==null?{id:Pi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=rm(e),a.return=n,n.child=a,Cn=n,Je=null)):e=null,e===null)throw za(n);return ld(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Va(),u=n.mode,R=Yl({mode:"hidden",children:R},u),o=ys(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Tf(a),o.childLanes=Af(e,g,a),n.memoizedState=bf,Ao(null,o)):(Ga(n),Rf(n,R))}var H=e.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(d)n.flags&256?(Ga(n),n.flags&=-257,n=wf(e,n,a)):n.memoizedState!==null?(Va(),n.child=e.child,n.flags|=128,n=null):(Va(),R=o.fallback,u=n.mode,o=Yl({mode:"visible",children:o.children},u),R=ys(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,ws(n,e.child,null,a),o=n.child,o.memoizedState=Tf(a),o.childLanes=Af(e,g,a),n.memoizedState=bf,n=Ao(null,o));else if(Ga(n),ld(R)){if(g=R.nextSibling&&R.nextSibling.dataset,g)var nt=g.dgst;g=nt,o=Error(s(419)),o.stack="",o.digest=g,po({value:o,source:null,stack:null}),n=wf(e,n,a)}else if(vn||ir(e,n,a,!1),g=(a&e.childLanes)!==0,vn||g){if(g=Ke,g!==null&&(o=Jn(g,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,Ss(e,o),Kn(g,e,o),Mf;od(R)||ec(),n=wf(e,n,a)}else od(R)?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,Je=xi(R.nextSibling),Cn=n,Te=!0,Pa=null,_i=!1,e!==null&&cm(n,e),n=Rf(n,o.children),n.flags|=4096);return n}return u?(Va(),R=o.fallback,u=n.mode,H=e.child,nt=H.sibling,o=ta(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,nt!==null?R=ta(nt,R):(R=ys(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Ao(null,o),o=n.child,R=e.child.memoizedState,R===null?R=Tf(a):(u=R.cachePool,u!==null?(H=gn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=mm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Af(e,g,a),n.memoizedState=bf,Ao(e.child,o)):(Ga(n),a=e.child,e=a.sibling,a=ta(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(g=n.deletions,g===null?(n.deletions=[e],n.flags|=16):g.push(e)),n.child=a,n.memoizedState=null,a)}function Rf(e,n){return n=Yl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Yl(e,n){return e=ni(22,e,null,n),e.lanes=0,e}function wf(e,n,a){return ws(n,e.child,null,a),e=Rf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function wg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Vu(e.return,n,a)}function Cf(e,n,a,o,u,d){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=o,g.tail=a,g.tailMode=u,g.treeForkCount=d)}function Cg(e,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var g=hn.current,R=(g&2)!==0;if(R?(g=g&1|2,n.flags|=128):g&=1,Tt(hn,g),Un(e,n,o,a),o=Te?ho:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wg(e,a,n);else if(e.tag===19)wg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Ol(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Cf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ol(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Cf(n,!0,a,null,d,o);break;case"together":Cf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ra(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Wa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ir(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ta(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ta(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Df(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Al(e)))}function sS(e,n,a){switch(n.tag){case 3:Lt(n,n.stateNode.containerInfo),Ia(n,gn,e.memoizedState.cache),Ms();break;case 27:case 5:ae(n);break;case 4:Lt(n,n.stateNode.containerInfo);break;case 10:Ia(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,tf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ga(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Rg(e,n,a):(Ga(n),e=ra(e,n,a),e!==null?e.sibling:null);Ga(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ir(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Cg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Tt(hn,hn.current),o)break;return null;case 22:return n.lanes=0,yg(e,n,a,n.pendingProps);case 24:Ia(n,gn,e.memoizedState.cache)}return ra(e,n,a)}function Dg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)vn=!0;else{if(!Df(e,a)&&(n.flags&128)===0)return vn=!1,sS(e,n,a);vn=(e.flags&131072)!==0}else vn=!1,Te&&(n.flags&1048576)!==0&&lm(n,ho,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=As(n.elementType),n.type=e,typeof e=="function")Ou(e)?(o=Ds(e,o),n.tag=1,n=Tg(null,n,e,o,a)):(n.tag=0,n=Ef(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===L){n.tag=11,n=vg(null,n,e,o,a);break t}else if(u===I){n.tag=14,n=xg(null,n,e,o,a);break t}}throw n=St(e)||e,Error(s(306,n,""))}}return n;case 0:return Ef(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ds(o,n.pendingProps),Tg(e,n,o,u,a);case 3:t:{if(Lt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Zu(e,n),yo(n,o,null,a);var g=n.memoizedState;if(o=g.cache,Ia(n,gn,o),o!==d.cache&&ku(n,[gn],a,!0),So(),o=g.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=Ag(e,n,o,a);break t}else if(o!==u){u=pi(Error(s(424)),n),po(u),n=Ag(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Je=xi(e.firstChild),Cn=n,Te=!0,Pa=null,_i=!0,a=ym(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ms(),o===u){n=ra(e,n,a);break t}Un(e,n,o,a)}n=n.child}return n;case 26:return Wl(e,n),e===null?(a=G0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(a=n.type,e=n.pendingProps,o=lc(lt.current).createElement(a),o[dn]=n,o[wn]=e,Nn(o,a,e),mn(o),n.stateNode=o):n.memoizedState=G0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ae(n),e===null&&Te&&(o=n.stateNode=F0(n.type,n.pendingProps,lt.current),Cn=n,_i=!0,u=Je,Ka(n.type)?(cd=u,Je=xi(o.firstChild)):Je=u),Un(e,n,n.pendingProps.children,a),Wl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Te&&((u=o=Je)&&(o=PS(o,n.type,n.pendingProps,_i),o!==null?(n.stateNode=o,Cn=n,Je=xi(o.firstChild),_i=!1,u=!0):u=!1),u||za(n)),ae(n),u=n.type,d=n.pendingProps,g=e!==null?e.memoizedProps:null,o=d.children,ad(u,d)?o=null:g!==null&&ad(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=nf(e,n,Kx,null,null,a),Go._currentValue=u),Wl(e,n),Un(e,n,o,a),n.child;case 6:return e===null&&Te&&((e=a=Je)&&(a=zS(a,n.pendingProps,_i),a!==null?(n.stateNode=a,Cn=n,Je=null,e=!0):e=!1),e||za(n)),null;case 13:return Rg(e,n,a);case 4:return Lt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=ws(n,null,o,a):Un(e,n,o,a),n.child;case 11:return vg(e,n,n.type,n.pendingProps,a);case 7:return Un(e,n,n.pendingProps,a),n.child;case 8:return Un(e,n,n.pendingProps.children,a),n.child;case 12:return Un(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ia(n,n.type,o.value),Un(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,bs(n),u=Dn(u),o=o(u),n.flags|=1,Un(e,n,o,a),n.child;case 14:return xg(e,n,n.type,n.pendingProps,a);case 15:return Sg(e,n,n.type,n.pendingProps,a);case 19:return Cg(e,n,a);case 31:return aS(e,n,a);case 22:return yg(e,n,a,n.pendingProps);case 24:return bs(n),o=Dn(gn),e===null?(u=Yu(),u===null&&(u=Ke,d=Xu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},ju(n),Ia(n,gn,u)):((e.lanes&a)!==0&&(Zu(e,n),yo(n,null,null,a),So()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ia(n,gn,o)):(o=d.cache,Ia(n,gn,o),o!==u.cache&&ku(n,[gn],a,!0))),Un(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function oa(e){e.flags|=4}function Uf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(i0())e.flags|=8192;else throw Rs=Dl,qu}else e.flags&=-16777217}function Ug(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Y0(n))if(i0())e.flags|=8192;else throw Rs=Dl,qu}function ql(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ct():536870912,e.lanes|=n,mr|=n)}function Ro(e,n){if(!Te)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function $e(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function rS(e,n,a){var o=n.pendingProps;switch(Fu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(n),null;case 1:return $e(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ia(gn),kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(nr(n)?oa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Hu())),$e(n),null;case 26:var u=n.type,d=n.memoizedState;return e===null?(oa(n),d!==null?($e(n),Ug(n,d)):($e(n),Uf(n,u,null,o,a))):d?d!==e.memoizedState?(oa(n),$e(n),Ug(n,d)):($e(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&oa(n),$e(n),Uf(n,u,e,o,a)),null;case 27:if($t(n),a=lt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&oa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return $e(n),null}e=Ot.current,nr(n)?um(n):(e=F0(u,o,a),n.stateNode=e,oa(n))}return $e(n),null;case 5:if($t(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&oa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return $e(n),null}if(d=Ot.current,nr(n))um(n);else{var g=lc(lt.current);switch(d){case 1:d=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=g.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?g.createElement("select",{is:o.is}):g.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?g.createElement(u,{is:o.is}):g.createElement(u)}}d[dn]=n,d[wn]=o;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)d.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=d;t:switch(Nn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&oa(n)}}return $e(n),Uf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&oa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=lt.current,nr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Cn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[dn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||R0(e.nodeValue,a)),e||za(n,!0)}else e=lc(e).createTextNode(o),e[dn]=n,n.stateNode=e}return $e(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=nr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[dn]=n}else Ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),e=!1}else a=Hu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ai(n),n):(ai(n),null);if((n.flags&128)!==0)throw Error(s(558))}return $e(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=nr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[dn]=n}else Ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),u=!1}else u=Hu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ai(n),n):(ai(n),null)}return ai(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),ql(n,n.updateQueue),$e(n),null);case 4:return kt(),e===null&&$f(n.stateNode.containerInfo),$e(n),null;case 10:return ia(n.type),$e(n),null;case 19:if(J(hn),o=n.memoizedState,o===null)return $e(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Ro(o,!1);else{if(ln!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Ol(e),d!==null){for(n.flags|=128,Ro(o,!1),e=d.updateQueue,n.updateQueue=e,ql(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)sm(a,e),a=a.sibling;return Tt(hn,hn.current&1|2),Te&&ea(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&ht()>Jl&&(n.flags|=128,u=!0,Ro(o,!1),n.lanes=4194304)}else{if(!u)if(e=Ol(d),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,ql(n,e),Ro(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Te)return $e(n),null}else 2*ht()-o.renderingStartTime>Jl&&a!==536870912&&(n.flags|=128,u=!0,Ro(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(e=o.last,e!==null?e.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ht(),e.sibling=null,a=hn.current,Tt(hn,u?a&1|2:a&1),Te&&ea(n,o.treeForkCount),e):($e(n),null);case 22:case 23:return ai(n),$u(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&($e(n),n.subtreeFlags&6&&(n.flags|=8192)):$e(n),a=n.updateQueue,a!==null&&ql(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&J(Ts),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ia(gn),$e(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function oS(e,n){switch(Fu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ia(gn),kt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return $t(n),null;case 31:if(n.memoizedState!==null){if(ai(n),n.alternate===null)throw Error(s(340));Ms()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ai(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ms()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return J(hn),null;case 4:return kt(),null;case 10:return ia(n.type),null;case 22:case 23:return ai(n),$u(),e!==null&&J(Ts),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ia(gn),null;case 25:return null;default:return null}}function Ng(e,n){switch(Fu(n),n.tag){case 3:ia(gn),kt();break;case 26:case 27:case 5:$t(n);break;case 4:kt();break;case 31:n.memoizedState!==null&&ai(n);break;case 13:ai(n);break;case 19:J(hn);break;case 10:ia(n.type);break;case 22:case 23:ai(n),$u(),e!==null&&J(Ts);break;case 24:ia(gn)}}function wo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,g=a.inst;o=d(),g.destroy=o}a=a.next}while(a!==u)}}catch(R){Ve(n,n.return,R)}}function ka(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var g=o.inst,R=g.destroy;if(R!==void 0){g.destroy=void 0,u=n;var H=a,nt=R;try{nt()}catch(_t){Ve(u,H,_t)}}}o=o.next}while(o!==d)}}catch(_t){Ve(n,n.return,_t)}}function Lg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Em(n,a)}catch(o){Ve(e,e.return,o)}}}function Og(e,n,a){a.props=Ds(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ve(e,n,o)}}function Co(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ve(e,n,u)}}function Ii(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ve(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ve(e,n,u)}else a.current=null}function Pg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ve(e,e.return,u)}}function Nf(e,n,a){try{var o=e.stateNode;CS(o,e.type,a,n),o[wn]=n}catch(u){Ve(e,e.return,u)}}function zg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ka(e.type)||e.tag===4}function Lf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||zg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Of(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ji));else if(o!==4&&(o===27&&Ka(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Of(e,n,a),e=e.sibling;e!==null;)Of(e,n,a),e=e.sibling}function jl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ka(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(jl(e,n,a),e=e.sibling;e!==null;)jl(e,n,a),e=e.sibling}function Ig(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Nn(n,o,a),n[dn]=e,n[wn]=a}catch(d){Ve(e,e.return,d)}}var la=!1,xn=!1,Pf=!1,Fg=typeof WeakSet=="function"?WeakSet:Set,Tn=null;function lS(e,n){if(e=e.containerInfo,nd=mc,e=Kp(e),Ru(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var g=0,R=-1,H=-1,nt=0,_t=0,Et=e,ot=null;e:for(;;){for(var ft;Et!==a||u!==0&&Et.nodeType!==3||(R=g+u),Et!==d||o!==0&&Et.nodeType!==3||(H=g+o),Et.nodeType===3&&(g+=Et.nodeValue.length),(ft=Et.firstChild)!==null;)ot=Et,Et=ft;for(;;){if(Et===e)break e;if(ot===a&&++nt===u&&(R=g),ot===d&&++_t===o&&(H=g),(ft=Et.nextSibling)!==null)break;Et=ot,ot=Et.parentNode}Et=ft}a=R===-1||H===-1?null:{start:R,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(id={focusedElem:e,selectionRange:a},mc=!1,Tn=n;Tn!==null;)if(n=Tn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Tn=e;else for(;Tn!==null;){switch(n=Tn,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Zt=Ds(a.type,u);e=o.getSnapshotBeforeUpdate(Zt,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(se){Ve(a,a.return,se)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)rd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":rd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Tn=e;break}Tn=n.return}}function Bg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ua(e,a),o&4&&wo(5,a);break;case 1:if(ua(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(g){Ve(a,a.return,g)}else{var u=Ds(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Ve(a,a.return,g)}}o&64&&Lg(a),o&512&&Co(a,a.return);break;case 3:if(ua(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Em(e,n)}catch(g){Ve(a,a.return,g)}}break;case 27:n===null&&o&4&&Ig(a);case 26:case 5:ua(e,a),n===null&&o&4&&Pg(a),o&512&&Co(a,a.return);break;case 12:ua(e,a);break;case 31:ua(e,a),o&4&&Vg(e,a);break;case 13:ua(e,a),o&4&&kg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=_S.bind(null,a),IS(e,a))));break;case 22:if(o=a.memoizedState!==null||la,!o){n=n!==null&&n.memoizedState!==null||xn,u=la;var d=xn;la=o,(xn=n)&&!d?fa(e,a,(a.subtreeFlags&8772)!==0):ua(e,a),la=u,xn=d}break;case 30:break;default:ua(e,a)}}function Hg(e){var n=e.alternate;n!==null&&(e.alternate=null,Hg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&no(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var an=null,Yn=!1;function ca(e,n,a){for(a=a.child;a!==null;)Gg(e,n,a),a=a.sibling}function Gg(e,n,a){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(st,a)}catch{}switch(a.tag){case 26:xn||Ii(a,n),ca(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:xn||Ii(a,n);var o=an,u=Yn;Ka(a.type)&&(an=a.stateNode,Yn=!1),ca(e,n,a),Fo(a.stateNode),an=o,Yn=u;break;case 5:xn||Ii(a,n);case 6:if(o=an,u=Yn,an=null,ca(e,n,a),an=o,Yn=u,an!==null)if(Yn)try{(an.nodeType===9?an.body:an.nodeName==="HTML"?an.ownerDocument.body:an).removeChild(a.stateNode)}catch(d){Ve(a,n,d)}else try{an.removeChild(a.stateNode)}catch(d){Ve(a,n,d)}break;case 18:an!==null&&(Yn?(e=an,L0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Er(e)):L0(an,a.stateNode));break;case 4:o=an,u=Yn,an=a.stateNode.containerInfo,Yn=!0,ca(e,n,a),an=o,Yn=u;break;case 0:case 11:case 14:case 15:ka(2,a,n),xn||ka(4,a,n),ca(e,n,a);break;case 1:xn||(Ii(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Og(a,n,o)),ca(e,n,a);break;case 21:ca(e,n,a);break;case 22:xn=(o=xn)||a.memoizedState!==null,ca(e,n,a),xn=o;break;default:ca(e,n,a)}}function Vg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Er(e)}catch(a){Ve(n,n.return,a)}}}function kg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Er(e)}catch(a){Ve(n,n.return,a)}}function cS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Fg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Fg),n;default:throw Error(s(435,e.tag))}}function Zl(e,n){var a=cS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=vS.bind(null,e,o);o.then(u,u)}})}function qn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,g=n,R=g;t:for(;R!==null;){switch(R.tag){case 27:if(Ka(R.type)){an=R.stateNode,Yn=!1;break t}break;case 5:an=R.stateNode,Yn=!1;break t;case 3:case 4:an=R.stateNode.containerInfo,Yn=!0;break t}R=R.return}if(an===null)throw Error(s(160));Gg(d,g,u),an=null,Yn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Xg(n,e),n=n.sibling}var Ri=null;function Xg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:qn(n,e),jn(e),o&4&&(ka(3,e,e.return),wo(3,e),ka(5,e,e.return));break;case 1:qn(n,e),jn(e),o&512&&(xn||a===null||Ii(a,a.return)),o&64&&la&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ri;if(qn(n,e),jn(e),o&512&&(xn||a===null||Ii(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[wa]||d[dn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Nn(d,o,a),d[dn]=e,mn(d),o=d;break t;case"link":var g=X0("link","href",u).get(o+(a.href||""));if(g){for(var R=0;R<g.length;R++)if(d=g[R],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(R,1);break e}}d=u.createElement(o),Nn(d,o,a),u.head.appendChild(d);break;case"meta":if(g=X0("meta","content",u).get(o+(a.content||""))){for(R=0;R<g.length;R++)if(d=g[R],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(R,1);break e}}d=u.createElement(o),Nn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[dn]=e,mn(d),o=d}e.stateNode=o}else W0(u,e.type,e.stateNode);else e.stateNode=k0(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?W0(u,e.type,e.stateNode):k0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Nf(e,e.memoizedProps,a.memoizedProps)}break;case 27:qn(n,e),jn(e),o&512&&(xn||a===null||Ii(a,a.return)),a!==null&&o&4&&Nf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(qn(n,e),jn(e),o&512&&(xn||a===null||Ii(a,a.return)),e.flags&32){u=e.stateNode;try{ti(u,"")}catch(Zt){Ve(e,e.return,Zt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Nf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Pf=!0);break;case 6:if(qn(n,e),jn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Zt){Ve(e,e.return,Zt)}}break;case 3:if(fc=null,u=Ri,Ri=cc(n.containerInfo),qn(n,e),Ri=u,jn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Er(n.containerInfo)}catch(Zt){Ve(e,e.return,Zt)}Pf&&(Pf=!1,Wg(e));break;case 4:o=Ri,Ri=cc(e.stateNode.containerInfo),qn(n,e),jn(e),Ri=o;break;case 12:qn(n,e),jn(e);break;case 31:qn(n,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Zl(e,o)));break;case 13:qn(n,e),jn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ql=ht()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Zl(e,o)));break;case 22:u=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,nt=la,_t=xn;if(la=nt||u,xn=_t||H,qn(n,e),xn=_t,la=nt,jn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||la||xn||Us(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(d=H.stateNode,u)g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{R=H.stateNode;var Et=H.memoizedProps.style,ot=Et!=null&&Et.hasOwnProperty("display")?Et.display:null;R.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Zt){Ve(H,H.return,Zt)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Zt){Ve(H,H.return,Zt)}}}else if(n.tag===18){if(a===null){H=n;try{var ft=H.stateNode;u?O0(ft,!0):O0(H.stateNode,!1)}catch(Zt){Ve(H,H.return,Zt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Zl(e,a))));break;case 19:qn(n,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Zl(e,o)));break;case 30:break;case 21:break;default:qn(n,e),jn(e)}}function jn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(zg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=Lf(e);jl(e,d,u);break;case 5:var g=a.stateNode;a.flags&32&&(ti(g,""),a.flags&=-33);var R=Lf(e);jl(e,R,g);break;case 3:case 4:var H=a.stateNode.containerInfo,nt=Lf(e);Of(e,nt,H);break;default:throw Error(s(161))}}catch(_t){Ve(e,e.return,_t)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Wg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Wg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ua(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Bg(e,n.alternate,n),n=n.sibling}function Us(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ka(4,n,n.return),Us(n);break;case 1:Ii(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Og(n,n.return,a),Us(n);break;case 27:Fo(n.stateNode);case 26:case 5:Ii(n,n.return),Us(n);break;case 22:n.memoizedState===null&&Us(n);break;case 30:Us(n);break;default:Us(n)}e=e.sibling}}function fa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,g=d.flags;switch(d.tag){case 0:case 11:case 15:fa(u,d,a),wo(4,d);break;case 1:if(fa(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){Ve(o,o.return,nt)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)Mm(H[u],R)}catch(nt){Ve(o,o.return,nt)}}a&&g&64&&Lg(d),Co(d,d.return);break;case 27:Ig(d);case 26:case 5:fa(u,d,a),a&&o===null&&g&4&&Pg(d),Co(d,d.return);break;case 12:fa(u,d,a);break;case 31:fa(u,d,a),a&&g&4&&Vg(u,d);break;case 13:fa(u,d,a),a&&g&4&&kg(u,d);break;case 22:d.memoizedState===null&&fa(u,d,a),Co(d,d.return);break;case 30:break;default:fa(u,d,a)}n=n.sibling}}function zf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&mo(a))}function If(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&mo(e))}function wi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Yg(e,n,a,o),n=n.sibling}function Yg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:wi(e,n,a,o),u&2048&&wo(9,n);break;case 1:wi(e,n,a,o);break;case 3:wi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&mo(e)));break;case 12:if(u&2048){wi(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,g=d.id,R=d.onPostCommit;typeof R=="function"&&R(g,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){Ve(n,n.return,H)}}else wi(e,n,a,o);break;case 31:wi(e,n,a,o);break;case 13:wi(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,g=n.alternate,n.memoizedState!==null?d._visibility&2?wi(e,n,a,o):Do(e,n):d._visibility&2?wi(e,n,a,o):(d._visibility|=2,dr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&zf(g,n);break;case 24:wi(e,n,a,o),u&2048&&If(n.alternate,n);break;default:wi(e,n,a,o)}}function dr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,g=n,R=a,H=o,nt=g.flags;switch(g.tag){case 0:case 11:case 15:dr(d,g,R,H,u),wo(8,g);break;case 23:break;case 22:var _t=g.stateNode;g.memoizedState!==null?_t._visibility&2?dr(d,g,R,H,u):Do(d,g):(_t._visibility|=2,dr(d,g,R,H,u)),u&&nt&2048&&zf(g.alternate,g);break;case 24:dr(d,g,R,H,u),u&&nt&2048&&If(g.alternate,g);break;default:dr(d,g,R,H,u)}n=n.sibling}}function Do(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Do(a,o),u&2048&&zf(o.alternate,o);break;case 24:Do(a,o),u&2048&&If(o.alternate,o);break;default:Do(a,o)}n=n.sibling}}var Uo=8192;function hr(e,n,a){if(e.subtreeFlags&Uo)for(e=e.child;e!==null;)qg(e,n,a),e=e.sibling}function qg(e,n,a){switch(e.tag){case 26:hr(e,n,a),e.flags&Uo&&e.memoizedState!==null&&ZS(a,Ri,e.memoizedState,e.memoizedProps);break;case 5:hr(e,n,a);break;case 3:case 4:var o=Ri;Ri=cc(e.stateNode.containerInfo),hr(e,n,a),Ri=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Uo,Uo=16777216,hr(e,n,a),Uo=o):hr(e,n,a));break;default:hr(e,n,a)}}function jg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function No(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Tn=o,Kg(o,e)}jg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zg(e),e=e.sibling}function Zg(e){switch(e.tag){case 0:case 11:case 15:No(e),e.flags&2048&&ka(9,e,e.return);break;case 3:No(e);break;case 12:No(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Kl(e)):No(e);break;default:No(e)}}function Kl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Tn=o,Kg(o,e)}jg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ka(8,n,n.return),Kl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Kl(n));break;default:Kl(n)}e=e.sibling}}function Kg(e,n){for(;Tn!==null;){var a=Tn;switch(a.tag){case 0:case 11:case 15:ka(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:mo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Tn=o;else t:for(a=e;Tn!==null;){o=Tn;var u=o.sibling,d=o.return;if(Hg(o),o===a){Tn=null;break t}if(u!==null){u.return=d,Tn=u;break t}Tn=d}}}var uS={getCacheForType:function(e){var n=Dn(gn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Dn(gn).controller.signal}},fS=typeof WeakMap=="function"?WeakMap:Map,Pe=0,Ke=null,Se=null,Me=0,Ge=0,si=null,Xa=!1,pr=!1,Ff=!1,da=0,ln=0,Wa=0,Ns=0,Bf=0,ri=0,mr=0,Lo=null,Zn=null,Hf=!1,Ql=0,Qg=0,Jl=1/0,$l=null,Ya=null,Mn=0,qa=null,gr=null,ha=0,Gf=0,Vf=null,Jg=null,Oo=0,kf=null;function oi(){return(Pe&2)!==0&&Me!==0?Me&-Me:U.T!==null?Zf():$r()}function $g(){if(ri===0)if((Me&536870912)===0||Te){var e=ie;ie<<=1,(ie&3932160)===0&&(ie=262144),ri=e}else ri=536870912;return e=ii.current,e!==null&&(e.flags|=32),ri}function Kn(e,n,a){(e===Ke&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)&&(_r(e,0),ja(e,Me,ri,!1)),re(e,a),((Pe&2)===0||e!==Ke)&&(e===Ke&&((Pe&2)===0&&(Ns|=a),ln===4&&ja(e,Me,ri,!1)),Fi(e))}function t0(e,n,a){if((Pe&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ht(e,n),u=o?pS(e,n):Wf(e,n,!0),d=o;do{if(u===0){pr&&!o&&ja(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!dS(a)){u=Wf(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var R=e;u=Lo;var H=R.current.memoizedState.isDehydrated;if(H&&(_r(R,g).flags|=256),g=Wf(R,g,!1),g!==2){if(Ff&&!H){R.errorRecoveryDisabledLanes|=d,Ns|=d,u=4;break t}d=Zn,Zn=u,d!==null&&(Zn===null?Zn=d:Zn.push.apply(Zn,d))}u=g}if(d=!1,u!==2)continue}}if(u===1){_r(e,0),ja(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ja(o,n,ri,!Xa);break t;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Ql+300-ht(),10<u)){if(ja(o,n,ri,!Xa),xt(o,0,!0)!==0)break t;ha=n,o.timeoutHandle=U0(e0.bind(null,o,a,Zn,$l,Hf,n,ri,Ns,mr,Xa,d,"Throttled",-0,0),u);break t}e0(o,a,Zn,$l,Hf,n,ri,Ns,mr,Xa,d,null,-0,0)}}break}while(!0);Fi(e)}function e0(e,n,a,o,u,d,g,R,H,nt,_t,Et,ot,ft){if(e.timeoutHandle=-1,Et=n.subtreeFlags,Et&8192||(Et&16785408)===16785408){Et={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ji},qg(n,d,Et);var Zt=(d&62914560)===d?Ql-ht():(d&4194048)===d?Qg-ht():0;if(Zt=KS(Et,Zt),Zt!==null){ha=d,e.cancelPendingCommit=Zt(c0.bind(null,e,n,d,a,o,u,g,R,H,_t,Et,null,ot,ft)),ja(e,d,g,!nt);return}}c0(e,n,d,a,o,u,g,R,H)}function dS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!ei(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ja(e,n,a,o){n&=~Bf,n&=~Ns,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-Ut(u),g=1<<d;o[d]=-1,u&=~g}a!==0&&Oe(e,a,n)}function tc(){return(Pe&6)===0?(Po(0),!1):!0}function Xf(){if(Se!==null){if(Ge===0)var e=Se.return;else e=Se,na=Es=null,rf(e),or=null,_o=0,e=Se;for(;e!==null;)Ng(e.alternate,e),e=e.return;Se=null}}function _r(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,NS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ha=0,Xf(),Ke=e,Se=a=ta(e.current,null),Me=n,Ge=0,si=null,Xa=!1,pr=Ht(e,n),Ff=!1,mr=ri=Bf=Ns=Wa=ln=0,Zn=Lo=null,Hf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Ut(o),d=1<<u;n|=e[u],o&=~d}return da=n,yl(),a}function n0(e,n){he=null,U.H=To,n===rr||n===Cl?(n=vm(),Ge=3):n===qu?(n=vm(),Ge=4):Ge=n===Mf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,Se===null&&(ln=1,kl(e,pi(n,e.current)))}function i0(){var e=ii.current;return e===null?!0:(Me&4194048)===Me?vi===null:(Me&62914560)===Me||(Me&536870912)!==0?e===vi:!1}function a0(){var e=U.H;return U.H=To,e===null?To:e}function s0(){var e=U.A;return U.A=uS,e}function ec(){ln=4,Xa||(Me&4194048)!==Me&&ii.current!==null||(pr=!0),(Wa&134217727)===0&&(Ns&134217727)===0||Ke===null||ja(Ke,Me,ri,!1)}function Wf(e,n,a){var o=Pe;Pe|=2;var u=a0(),d=s0();(Ke!==e||Me!==n)&&($l=null,_r(e,n)),n=!1;var g=ln;t:do try{if(Ge!==0&&Se!==null){var R=Se,H=si;switch(Ge){case 8:Xf(),g=6;break t;case 3:case 2:case 9:case 6:ii.current===null&&(n=!0);var nt=Ge;if(Ge=0,si=null,vr(e,R,H,nt),a&&pr){g=0;break t}break;default:nt=Ge,Ge=0,si=null,vr(e,R,H,nt)}}hS(),g=ln;break}catch(_t){n0(e,_t)}while(!0);return n&&e.shellSuspendCounter++,na=Es=null,Pe=o,U.H=u,U.A=d,Se===null&&(Ke=null,Me=0,yl()),g}function hS(){for(;Se!==null;)r0(Se)}function pS(e,n){var a=Pe;Pe|=2;var o=a0(),u=s0();Ke!==e||Me!==n?($l=null,Jl=ht()+500,_r(e,n)):pr=Ht(e,n);t:do try{if(Ge!==0&&Se!==null){n=Se;var d=si;e:switch(Ge){case 1:Ge=0,si=null,vr(e,n,d,1);break;case 2:case 9:if(gm(d)){Ge=0,si=null,o0(n);break}n=function(){Ge!==2&&Ge!==9||Ke!==e||(Ge=7),Fi(e)},d.then(n,n);break t;case 3:Ge=7;break t;case 4:Ge=5;break t;case 7:gm(d)?(Ge=0,si=null,o0(n)):(Ge=0,si=null,vr(e,n,d,7));break;case 5:var g=null;switch(Se.tag){case 26:g=Se.memoizedState;case 5:case 27:var R=Se;if(g?Y0(g):R.stateNode.complete){Ge=0,si=null;var H=R.sibling;if(H!==null)Se=H;else{var nt=R.return;nt!==null?(Se=nt,nc(nt)):Se=null}break e}}Ge=0,si=null,vr(e,n,d,5);break;case 6:Ge=0,si=null,vr(e,n,d,6);break;case 8:Xf(),ln=6;break t;default:throw Error(s(462))}}mS();break}catch(_t){n0(e,_t)}while(!0);return na=Es=null,U.H=o,U.A=u,Pe=a,Se!==null?0:(Ke=null,Me=0,yl(),ln)}function mS(){for(;Se!==null&&!Y();)r0(Se)}function r0(e){var n=Dg(e.alternate,e,da);e.memoizedProps=e.pendingProps,n===null?nc(e):Se=n}function o0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=bg(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=bg(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:rf(n);default:Ng(a,n),n=Se=sm(n,da),n=Dg(a,n,da)}e.memoizedProps=e.pendingProps,n===null?nc(e):Se=n}function vr(e,n,a,o){na=Es=null,rf(n),or=null,_o=0;var u=n.return;try{if(iS(e,u,n,a,Me)){ln=1,kl(e,pi(a,e.current)),Se=null;return}}catch(d){if(u!==null)throw Se=u,d;ln=1,kl(e,pi(a,e.current)),Se=null;return}n.flags&32768?(Te||o===1?e=!0:pr||(Me&536870912)!==0?e=!1:(Xa=e=!0,(o===2||o===9||o===3||o===6)&&(o=ii.current,o!==null&&o.tag===13&&(o.flags|=16384))),l0(n,e)):nc(n)}function nc(e){var n=e;do{if((n.flags&32768)!==0){l0(n,Xa);return}e=n.return;var a=rS(n.alternate,n,da);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=e}while(n!==null);ln===0&&(ln=5)}function l0(e,n){do{var a=oS(e.alternate,e);if(a!==null){a.flags&=32767,Se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Se=e;return}Se=e=a}while(e!==null);ln=6,Se=null}function c0(e,n,a,o,u,d,g,R,H){e.cancelPendingCommit=null;do ic();while(Mn!==0);if((Pe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Nu,sn(e,a,d,g,R,H),e===Ke&&(Se=Ke=null,Me=0),gr=n,qa=e,ha=a,Gf=d,Vf=u,Jg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,xS(G,function(){return p0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=U.T,U.T=null,u=B.p,B.p=2,g=Pe,Pe|=4;try{lS(e,n,a)}finally{Pe=g,B.p=u,U.T=o}}Mn=1,u0(),f0(),d0()}}function u0(){if(Mn===1){Mn=0;var e=qa,n=gr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var o=B.p;B.p=2;var u=Pe;Pe|=4;try{Xg(n,e);var d=id,g=Kp(e.containerInfo),R=d.focusedElem,H=d.selectionRange;if(g!==R&&R&&R.ownerDocument&&Zp(R.ownerDocument.documentElement,R)){if(H!==null&&Ru(R)){var nt=H.start,_t=H.end;if(_t===void 0&&(_t=nt),"selectionStart"in R)R.selectionStart=nt,R.selectionEnd=Math.min(_t,R.value.length);else{var Et=R.ownerDocument||document,ot=Et&&Et.defaultView||window;if(ot.getSelection){var ft=ot.getSelection(),Zt=R.textContent.length,se=Math.min(H.start,Zt),qe=H.end===void 0?se:Math.min(H.end,Zt);!ft.extend&&se>qe&&(g=qe,qe=se,se=g);var Z=jp(R,se),X=jp(R,qe);if(Z&&X&&(ft.rangeCount!==1||ft.anchorNode!==Z.node||ft.anchorOffset!==Z.offset||ft.focusNode!==X.node||ft.focusOffset!==X.offset)){var et=Et.createRange();et.setStart(Z.node,Z.offset),ft.removeAllRanges(),se>qe?(ft.addRange(et),ft.extend(X.node,X.offset)):(et.setEnd(X.node,X.offset),ft.addRange(et))}}}}for(Et=[],ft=R;ft=ft.parentNode;)ft.nodeType===1&&Et.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Et.length;R++){var Mt=Et[R];Mt.element.scrollLeft=Mt.left,Mt.element.scrollTop=Mt.top}}mc=!!nd,id=nd=null}finally{Pe=u,B.p=o,U.T=a}}e.current=n,Mn=2}}function f0(){if(Mn===2){Mn=0;var e=qa,n=gr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var o=B.p;B.p=2;var u=Pe;Pe|=4;try{Bg(e,n.alternate,n)}finally{Pe=u,B.p=o,U.T=a}}Mn=3}}function d0(){if(Mn===4||Mn===3){Mn=0,Xt();var e=qa,n=gr,a=ha,o=Jg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Mn=5:(Mn=0,gr=qa=null,h0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ya=null),Jr(a),n=n.stateNode,tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(st,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=U.T,u=B.p,B.p=2,U.T=null;try{for(var d=e.onRecoverableError,g=0;g<o.length;g++){var R=o[g];d(R.value,{componentStack:R.stack})}}finally{U.T=n,B.p=u}}(ha&3)!==0&&ic(),Fi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===kf?Oo++:(Oo=0,kf=e):Oo=0,Po(0)}}function h0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,mo(n)))}function ic(){return u0(),f0(),d0(),p0()}function p0(){if(Mn!==5)return!1;var e=qa,n=Gf;Gf=0;var a=Jr(ha),o=U.T,u=B.p;try{B.p=32>a?32:a,U.T=null,a=Vf,Vf=null;var d=qa,g=ha;if(Mn=0,gr=qa=null,ha=0,(Pe&6)!==0)throw Error(s(331));var R=Pe;if(Pe|=4,Zg(d.current),Yg(d,d.current,g,a),Pe=R,Po(0,!1),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(st,d)}catch{}return!0}finally{B.p=u,U.T=o,h0(e,n)}}function m0(e,n,a){n=pi(a,n),n=yf(e.stateNode,n,2),e=Ha(e,n,2),e!==null&&(re(e,2),Fi(e))}function Ve(e,n,a){if(e.tag===3)m0(e,e,a);else for(;n!==null;){if(n.tag===3){m0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ya===null||!Ya.has(o))){e=pi(a,e),a=gg(2),o=Ha(n,a,2),o!==null&&(_g(a,o,n,e),re(o,2),Fi(o));break}}n=n.return}}function Yf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new fS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Ff=!0,u.add(a),e=gS.bind(null,e,n,a),n.then(e,e))}function gS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ke===e&&(Me&a)===a&&(ln===4||ln===3&&(Me&62914560)===Me&&300>ht()-Ql?(Pe&2)===0&&_r(e,0):Bf|=a,mr===Me&&(mr=0)),Fi(e)}function g0(e,n){n===0&&(n=Ct()),e=Ss(e,n),e!==null&&(re(e,n),Fi(e))}function _S(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),g0(e,a)}function vS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),g0(e,a)}function xS(e,n){return q(e,n)}var ac=null,xr=null,qf=!1,sc=!1,jf=!1,Za=0;function Fi(e){e!==xr&&e.next===null&&(xr===null?ac=xr=e:xr=xr.next=e),sc=!0,qf||(qf=!0,yS())}function Po(e,n){if(!jf&&sc){jf=!0;do for(var a=!1,o=ac;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var g=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-Ut(42|e)+1)-1,d&=u&~(g&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,S0(o,d))}else d=Me,d=xt(o,o===Ke?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ht(o,d)||(a=!0,S0(o,d));o=o.next}while(a);jf=!1}}function SS(){_0()}function _0(){sc=qf=!1;var e=0;Za!==0&&US()&&(e=Za);for(var n=ht(),a=null,o=ac;o!==null;){var u=o.next,d=v0(o,n);d===0?(o.next=null,a===null?ac=u:a.next=u,u===null&&(xr=a)):(a=o,(e!==0||(d&3)!==0)&&(sc=!0)),o=u}Mn!==0&&Mn!==5||Po(e),Za!==0&&(Za=0)}function v0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var g=31-Ut(d),R=1<<g,H=u[g];H===-1?((R&a)===0||(R&o)!==0)&&(u[g]=zt(R,n)):H<=n&&(e.expiredLanes|=R),d&=~R}if(n=Ke,a=Me,a=xt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Qe(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ht(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Qe(o),Jr(a)){case 2:case 8:a=M;break;case 32:a=G;break;case 268435456:a=gt;break;default:a=G}return o=x0.bind(null,e),a=q(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Qe(o),e.callbackPriority=2,e.callbackNode=null,2}function x0(e,n){if(Mn!==0&&Mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ic()&&e.callbackNode!==a)return null;var o=Me;return o=xt(e,e===Ke?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(t0(e,o,n),v0(e,ht()),e.callbackNode!=null&&e.callbackNode===a?x0.bind(null,e):null)}function S0(e,n){if(ic())return null;t0(e,n,!0)}function yS(){LS(function(){(Pe&6)!==0?q(w,SS):_0()})}function Zf(){if(Za===0){var e=ar;e===0&&(e=ne,ne<<=1,(ne&261888)===0&&(ne=256)),Za=e}return Za}function y0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:gs(""+e)}function M0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function MS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=y0((u[wn]||null).action),g=o.submitter;g&&(n=(n=g[wn]||null)?y0(n.formAction):g.getAttribute("formAction"),n!==null&&(d=n,g=null));var R=new _l("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Za!==0){var H=g?M0(u,g):new FormData(u);mf(a,{pending:!0,data:H,method:u.method,action:d},null,H)}}else typeof d=="function"&&(R.preventDefault(),H=g?M0(u,g):new FormData(u),mf(a,{pending:!0,data:H,method:u.method,action:d},d,H))},currentTarget:u}]})}}for(var Kf=0;Kf<Uu.length;Kf++){var Qf=Uu[Kf],ES=Qf.toLowerCase(),bS=Qf[0].toUpperCase()+Qf.slice(1);Ai(ES,"on"+bS)}Ai($p,"onAnimationEnd"),Ai(tm,"onAnimationIteration"),Ai(em,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(Hx,"onTransitionRun"),Ai(Gx,"onTransitionStart"),Ai(Vx,"onTransitionCancel"),Ai(nm,"onTransitionEnd"),rt("onMouseEnter",["mouseout","mouseover"]),rt("onMouseLeave",["mouseout","mouseover"]),rt("onPointerEnter",["pointerout","pointerover"]),rt("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zo));function E0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var g=o.length-1;0<=g;g--){var R=o[g],H=R.instance,nt=R.currentTarget;if(R=R.listener,H!==d&&u.isPropagationStopped())break t;d=R,u.currentTarget=nt;try{d(u)}catch(_t){Sl(_t)}u.currentTarget=null,d=H}else for(g=0;g<o.length;g++){if(R=o[g],H=R.instance,nt=R.currentTarget,R=R.listener,H!==d&&u.isPropagationStopped())break t;d=R,u.currentTarget=nt;try{d(u)}catch(_t){Sl(_t)}u.currentTarget=null,d=H}}}}function ye(e,n){var a=n[Ra];a===void 0&&(a=n[Ra]=new Set);var o=e+"__bubble";a.has(o)||(b0(n,e,2,!1),a.add(o))}function Jf(e,n,a){var o=0;n&&(o|=4),b0(a,e,o,n)}var rc="_reactListening"+Math.random().toString(36).slice(2);function $f(e){if(!e[rc]){e[rc]=!0,hl.forEach(function(a){a!=="selectionchange"&&(TS.has(a)||Jf(a,!1,e),Jf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[rc]||(n[rc]=!0,Jf("selectionchange",!1,n))}}function b0(e,n,a,o){switch($0(n)){case 2:var u=$S;break;case 8:u=ty;break;default:u=pd}a=u.bind(null,n,a,e),u=void 0,!vu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function td(e,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var g=o.tag;if(g===3||g===4){var R=o.stateNode.containerInfo;if(R===u)break;if(g===4)for(g=o.return;g!==null;){var H=g.tag;if((H===3||H===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;R!==null;){if(g=Ca(R),g===null)return;if(H=g.tag,H===5||H===6||H===26||H===27){o=d=g;continue t}R=R.parentNode}}o=o.return}Cp(function(){var nt=d,_t=gu(a),Et=[];t:{var ot=im.get(e);if(ot!==void 0){var ft=_l,Zt=e;switch(e){case"keypress":if(ml(a)===0)break t;case"keydown":case"keyup":ft=vx;break;case"focusin":Zt="focus",ft=Mu;break;case"focusout":Zt="blur",ft=Mu;break;case"beforeblur":case"afterblur":ft=Mu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=Np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=rx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=yx;break;case $p:case tm:case em:ft=cx;break;case nm:ft=Ex;break;case"scroll":case"scrollend":ft=ax;break;case"wheel":ft=Tx;break;case"copy":case"cut":case"paste":ft=fx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=Op;break;case"toggle":case"beforetoggle":ft=Rx}var se=(n&4)!==0,qe=!se&&(e==="scroll"||e==="scrollend"),Z=se?ot!==null?ot+"Capture":null:ot;se=[];for(var X=nt,et;X!==null;){var Mt=X;if(et=Mt.stateNode,Mt=Mt.tag,Mt!==5&&Mt!==26&&Mt!==27||et===null||Z===null||(Mt=io(X,Z),Mt!=null&&se.push(Io(X,Mt,et))),qe)break;X=X.return}0<se.length&&(ot=new ft(ot,Zt,null,a,_t),Et.push({event:ot,listeners:se}))}}if((n&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",ft=e==="mouseout"||e==="pointerout",ot&&a!==mu&&(Zt=a.relatedTarget||a.fromElement)&&(Ca(Zt)||Zt[Qi]))break t;if((ft||ot)&&(ot=_t.window===_t?_t:(ot=_t.ownerDocument)?ot.defaultView||ot.parentWindow:window,ft?(Zt=a.relatedTarget||a.toElement,ft=nt,Zt=Zt?Ca(Zt):null,Zt!==null&&(qe=c(Zt),se=Zt.tag,Zt!==qe||se!==5&&se!==27&&se!==6)&&(Zt=null)):(ft=null,Zt=nt),ft!==Zt)){if(se=Np,Mt="onMouseLeave",Z="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(se=Op,Mt="onPointerLeave",Z="onPointerEnter",X="pointer"),qe=ft==null?ot:ms(ft),et=Zt==null?ot:ms(Zt),ot=new se(Mt,X+"leave",ft,a,_t),ot.target=qe,ot.relatedTarget=et,Mt=null,Ca(_t)===nt&&(se=new se(Z,X+"enter",Zt,a,_t),se.target=et,se.relatedTarget=qe,Mt=se),qe=Mt,ft&&Zt)e:{for(se=AS,Z=ft,X=Zt,et=0,Mt=Z;Mt;Mt=se(Mt))et++;Mt=0;for(var ee=X;ee;ee=se(ee))Mt++;for(;0<et-Mt;)Z=se(Z),et--;for(;0<Mt-et;)X=se(X),Mt--;for(;et--;){if(Z===X||X!==null&&Z===X.alternate){se=Z;break e}Z=se(Z),X=se(X)}se=null}else se=null;ft!==null&&T0(Et,ot,ft,se,!1),Zt!==null&&qe!==null&&T0(Et,qe,Zt,se,!0)}}t:{if(ot=nt?ms(nt):window,ft=ot.nodeName&&ot.nodeName.toLowerCase(),ft==="select"||ft==="input"&&ot.type==="file")var Ne=Vp;else if(Hp(ot))if(kp)Ne=Ix;else{Ne=Px;var Qt=Ox}else ft=ot.nodeName,!ft||ft.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?nt&&Ie(nt.elementType)&&(Ne=Vp):Ne=zx;if(Ne&&(Ne=Ne(e,nt))){Gp(Et,Ne,a,_t);break t}Qt&&Qt(e,ot,nt),e==="focusout"&&nt&&ot.type==="number"&&nt.memoizedProps.value!=null&&xe(ot,"number",ot.value)}switch(Qt=nt?ms(nt):window,e){case"focusin":(Hp(Qt)||Qt.contentEditable==="true")&&(Ks=Qt,wu=nt,fo=null);break;case"focusout":fo=wu=Ks=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,Qp(Et,a,_t);break;case"selectionchange":if(Bx)break;case"keydown":case"keyup":Qp(Et,a,_t)}var pe;if(bu)t:{switch(e){case"compositionstart":var Ee="onCompositionStart";break t;case"compositionend":Ee="onCompositionEnd";break t;case"compositionupdate":Ee="onCompositionUpdate";break t}Ee=void 0}else Zs?Fp(e,a)&&(Ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(Pp&&a.locale!=="ko"&&(Zs||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Zs&&(pe=Dp()):(La=_t,xu="value"in La?La.value:La.textContent,Zs=!0)),Qt=oc(nt,Ee),0<Qt.length&&(Ee=new Lp(Ee,e,null,a,_t),Et.push({event:Ee,listeners:Qt}),pe?Ee.data=pe:(pe=Bp(a),pe!==null&&(Ee.data=pe)))),(pe=Cx?Dx(e,a):Ux(e,a))&&(Ee=oc(nt,"onBeforeInput"),0<Ee.length&&(Qt=new Lp("onBeforeInput","beforeinput",null,a,_t),Et.push({event:Qt,listeners:Ee}),Qt.data=pe)),MS(Et,e,nt,a,_t)}E0(Et,n)})}function Io(e,n,a){return{instance:e,listener:n,currentTarget:a}}function oc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=io(e,a),u!=null&&o.unshift(Io(e,u,d)),u=io(e,n),u!=null&&o.push(Io(e,u,d))),e.tag===3)return o;e=e.return}return[]}function AS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function T0(e,n,a,o,u){for(var d=n._reactName,g=[];a!==null&&a!==o;){var R=a,H=R.alternate,nt=R.stateNode;if(R=R.tag,H!==null&&H===o)break;R!==5&&R!==26&&R!==27||nt===null||(H=nt,u?(nt=io(a,d),nt!=null&&g.unshift(Io(a,nt,H))):u||(nt=io(a,d),nt!=null&&g.push(Io(a,nt,H)))),a=a.return}g.length!==0&&e.push({event:n,listeners:g})}var RS=/\r\n?/g,wS=/\u0000|\uFFFD/g;function A0(e){return(typeof e=="string"?e:""+e).replace(RS,`
`).replace(wS,"")}function R0(e,n){return n=A0(n),A0(e)===n}function Ye(e,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ti(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ti(e,""+o);break;case"className":jt(e,"class",o);break;case"tabIndex":jt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":jt(e,a,o);break;case"style":Ti(e,o,d);break;case"data":if(n!=="object"){jt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=gs(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Ye(e,n,"name",u.name,u,null),Ye(e,n,"formEncType",u.formEncType,u,null),Ye(e,n,"formMethod",u.formMethod,u,null),Ye(e,n,"formTarget",u.formTarget,u,null)):(Ye(e,n,"encType",u.encType,u,null),Ye(e,n,"method",u.method,u,null),Ye(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=gs(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Ji);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=gs(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ye("beforetoggle",e),ye("toggle",e),It(e,"popover",o);break;case"xlinkActuate":qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":qt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":qt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":qt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":qt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":It(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Oi.get(a)||a,It(e,a,o))}}function ed(e,n,a,o,u,d){switch(a){case"style":Ti(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?ti(e,o):(typeof o=="number"||typeof o=="bigint")&&ti(e,""+o);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[wn]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):It(e,a,o)}}}function Nn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var g=a[d];if(g!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ye(e,n,d,g,a,null)}}u&&Ye(e,n,"srcSet",a.srcSet,a,null),o&&Ye(e,n,"src",a.src,a,null);return;case"input":ye("invalid",e);var R=d=g=u=null,H=null,nt=null;for(o in a)if(a.hasOwnProperty(o)){var _t=a[o];if(_t!=null)switch(o){case"name":u=_t;break;case"type":g=_t;break;case"checked":H=_t;break;case"defaultChecked":nt=_t;break;case"value":d=_t;break;case"defaultValue":R=_t;break;case"children":case"dangerouslySetInnerHTML":if(_t!=null)throw Error(s(137,n));break;default:Ye(e,n,o,_t,a,null)}}Pn(e,d,R,H,nt,g,u,!1);return;case"select":ye("invalid",e),o=g=d=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":g=R;break;case"multiple":o=R;default:Ye(e,n,u,R,a,null)}n=d,a=g,e.multiple=!!o,n!=null?yn(e,!!o,n,!1):a!=null&&yn(e,!!o,a,!0);return;case"textarea":ye("invalid",e),d=u=o=null;for(g in a)if(a.hasOwnProperty(g)&&(R=a[g],R!=null))switch(g){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Ye(e,n,g,R,a,null)}bi(e,o,u,d);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(o=a[H],o!=null))switch(H){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ye(e,n,H,o,a,null)}return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(o=0;o<zo.length;o++)ye(zo[o],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(o=a[nt],o!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ye(e,n,nt,o,a,null)}return;default:if(Ie(n)){for(_t in a)a.hasOwnProperty(_t)&&(o=a[_t],o!==void 0&&ed(e,n,_t,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Ye(e,n,R,o,a,null))}function CS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,g=null,R=null,H=null,nt=null,_t=null;for(ft in a){var Et=a[ft];if(a.hasOwnProperty(ft)&&Et!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":H=Et;default:o.hasOwnProperty(ft)||Ye(e,n,ft,null,o,Et)}}for(var ot in o){var ft=o[ot];if(Et=a[ot],o.hasOwnProperty(ot)&&(ft!=null||Et!=null))switch(ot){case"type":d=ft;break;case"name":u=ft;break;case"checked":nt=ft;break;case"defaultChecked":_t=ft;break;case"value":g=ft;break;case"defaultValue":R=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:ft!==Et&&Ye(e,n,ot,ft,o,Et)}}Wt(e,g,R,H,nt,_t,d,u);return;case"select":ft=g=R=ot=null;for(d in a)if(H=a[d],a.hasOwnProperty(d)&&H!=null)switch(d){case"value":break;case"multiple":ft=H;default:o.hasOwnProperty(d)||Ye(e,n,d,null,o,H)}for(u in o)if(d=o[u],H=a[u],o.hasOwnProperty(u)&&(d!=null||H!=null))switch(u){case"value":ot=d;break;case"defaultValue":R=d;break;case"multiple":g=d;default:d!==H&&Ye(e,n,u,d,o,H)}n=R,a=g,o=ft,ot!=null?yn(e,!!a,ot,!1):!!o!=!!a&&(n!=null?yn(e,!!a,n,!0):yn(e,!!a,a?[]:"",!1));return;case"textarea":ft=ot=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ye(e,n,R,null,o,u)}for(g in o)if(u=o[g],d=a[g],o.hasOwnProperty(g)&&(u!=null||d!=null))switch(g){case"value":ot=u;break;case"defaultValue":ft=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Ye(e,n,g,u,o,d)}$n(e,ot,ft);return;case"option":for(var Zt in a)if(ot=a[Zt],a.hasOwnProperty(Zt)&&ot!=null&&!o.hasOwnProperty(Zt))switch(Zt){case"selected":e.selected=!1;break;default:Ye(e,n,Zt,null,o,ot)}for(H in o)if(ot=o[H],ft=a[H],o.hasOwnProperty(H)&&ot!==ft&&(ot!=null||ft!=null))switch(H){case"selected":e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol";break;default:Ye(e,n,H,ot,o,ft)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in a)ot=a[se],a.hasOwnProperty(se)&&ot!=null&&!o.hasOwnProperty(se)&&Ye(e,n,se,null,o,ot);for(nt in o)if(ot=o[nt],ft=a[nt],o.hasOwnProperty(nt)&&ot!==ft&&(ot!=null||ft!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:Ye(e,n,nt,ot,o,ft)}return;default:if(Ie(n)){for(var qe in a)ot=a[qe],a.hasOwnProperty(qe)&&ot!==void 0&&!o.hasOwnProperty(qe)&&ed(e,n,qe,void 0,o,ot);for(_t in o)ot=o[_t],ft=a[_t],!o.hasOwnProperty(_t)||ot===ft||ot===void 0&&ft===void 0||ed(e,n,_t,ot,o,ft);return}}for(var Z in a)ot=a[Z],a.hasOwnProperty(Z)&&ot!=null&&!o.hasOwnProperty(Z)&&Ye(e,n,Z,null,o,ot);for(Et in o)ot=o[Et],ft=a[Et],!o.hasOwnProperty(Et)||ot===ft||ot==null&&ft==null||Ye(e,n,Et,ot,o,ft)}function w0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function DS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,g=u.initiatorType,R=u.duration;if(d&&R&&w0(g)){for(g=0,R=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],nt=H.startTime;if(nt>R)break;var _t=H.transferSize,Et=H.initiatorType;_t&&w0(Et)&&(H=H.responseEnd,g+=_t*(H<R?1:(R-nt)/(H-nt)))}if(--o,n+=8*(d+g)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var nd=null,id=null;function lc(e){return e.nodeType===9?e:e.ownerDocument}function C0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function D0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function ad(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var sd=null;function US(){var e=window.event;return e&&e.type==="popstate"?e===sd?!1:(sd=e,!0):(sd=null,!1)}var U0=typeof setTimeout=="function"?setTimeout:void 0,NS=typeof clearTimeout=="function"?clearTimeout:void 0,N0=typeof Promise=="function"?Promise:void 0,LS=typeof queueMicrotask=="function"?queueMicrotask:typeof N0<"u"?function(e){return N0.resolve(null).then(e).catch(OS)}:U0;function OS(e){setTimeout(function(){throw e})}function Ka(e){return e==="head"}function L0(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Er(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Fo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Fo(a);for(var d=a.firstChild;d;){var g=d.nextSibling,R=d.nodeName;d[wa]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=g}}else a==="body"&&Fo(e.ownerDocument.body);a=u}while(a);Er(n)}function O0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function rd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":rd(a),no(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function PS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[wa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=xi(e.nextSibling),e===null)break}return null}function zS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=xi(e.nextSibling),e===null))return null;return e}function P0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=xi(e.nextSibling),e===null))return null;return e}function od(e){return e.data==="$?"||e.data==="$~"}function ld(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function IS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function xi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var cd=null;function z0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return xi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function I0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function F0(e,n,a){switch(n=lc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Fo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);no(e)}var Si=new Map,B0=new Set;function cc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var pa=B.d;B.d={f:FS,r:BS,D:HS,C:GS,L:VS,m:kS,X:WS,S:XS,M:YS};function FS(){var e=pa.f(),n=tc();return e||n}function BS(e){var n=Da(e);n!==null&&n.tag===5&&n.type==="form"?ng(n):pa.r(e)}var Sr=typeof document>"u"?null:document;function H0(e,n,a){var o=Sr;if(o&&typeof n=="string"&&n){var u=Be(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),B0.has(u)||(B0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Nn(n,"link",e),mn(n),o.head.appendChild(n)))}}function HS(e){pa.D(e),H0("dns-prefetch",e,null)}function GS(e,n){pa.C(e,n),H0("preconnect",e,n)}function VS(e,n,a){pa.L(e,n,a);var o=Sr;if(o&&e&&n){var u='link[rel="preload"][as="'+Be(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Be(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Be(a.imageSizes)+'"]')):u+='[href="'+Be(e)+'"]';var d=u;switch(n){case"style":d=yr(e);break;case"script":d=Mr(e)}Si.has(d)||(e=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Si.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Bo(d))||n==="script"&&o.querySelector(Ho(d))||(n=o.createElement("link"),Nn(n,"link",e),mn(n),o.head.appendChild(n)))}}function kS(e,n){pa.m(e,n);var a=Sr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Be(o)+'"][href="'+Be(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Mr(e)}if(!Si.has(d)&&(e=S({rel:"modulepreload",href:e},n),Si.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ho(d)))return}o=a.createElement("link"),Nn(o,"link",e),mn(o),a.head.appendChild(o)}}}function XS(e,n,a){pa.S(e,n,a);var o=Sr;if(o&&e){var u=Ua(o).hoistableStyles,d=yr(e);n=n||"default";var g=u.get(d);if(!g){var R={loading:0,preload:null};if(g=o.querySelector(Bo(d)))R.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Si.get(d))&&ud(e,a);var H=g=o.createElement("link");mn(H),Nn(H,"link",e),H._p=new Promise(function(nt,_t){H.onload=nt,H.onerror=_t}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,uc(g,n,o)}g={type:"stylesheet",instance:g,count:1,state:R},u.set(d,g)}}}function WS(e,n){pa.X(e,n);var a=Sr;if(a&&e){var o=Ua(a).hoistableScripts,u=Mr(e),d=o.get(u);d||(d=a.querySelector(Ho(u)),d||(e=S({src:e,async:!0},n),(n=Si.get(u))&&fd(e,n),d=a.createElement("script"),mn(d),Nn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function YS(e,n){pa.M(e,n);var a=Sr;if(a&&e){var o=Ua(a).hoistableScripts,u=Mr(e),d=o.get(u);d||(d=a.querySelector(Ho(u)),d||(e=S({src:e,async:!0,type:"module"},n),(n=Si.get(u))&&fd(e,n),d=a.createElement("script"),mn(d),Nn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function G0(e,n,a,o){var u=(u=lt.current)?cc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=yr(a.href),a=Ua(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=yr(a.href);var d=Ua(u).hoistableStyles,g=d.get(e);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,g),(d=u.querySelector(Bo(e)))&&!d._p&&(g.instance=d,g.state.loading=5),Si.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Si.set(e,a),d||qS(u,e,a,g.state))),n&&o===null)throw Error(s(528,""));return g}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Mr(a),a=Ua(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function yr(e){return'href="'+Be(e)+'"'}function Bo(e){return'link[rel="stylesheet"]['+e+"]"}function V0(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function qS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Nn(n,"link",a),mn(n),e.head.appendChild(n))}function Mr(e){return'[src="'+Be(e)+'"]'}function Ho(e){return"script[async]"+e}function k0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Be(a.href)+'"]');if(o)return n.instance=o,mn(o),o;var u=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),mn(o),Nn(o,"style",u),uc(o,a.precedence,e),n.instance=o;case"stylesheet":u=yr(a.href);var d=e.querySelector(Bo(u));if(d)return n.state.loading|=4,n.instance=d,mn(d),d;o=V0(a),(u=Si.get(u))&&ud(o,u),d=(e.ownerDocument||e).createElement("link"),mn(d);var g=d;return g._p=new Promise(function(R,H){g.onload=R,g.onerror=H}),Nn(d,"link",o),n.state.loading|=4,uc(d,a.precedence,e),n.instance=d;case"script":return d=Mr(a.src),(u=e.querySelector(Ho(d)))?(n.instance=u,mn(u),u):(o=a,(u=Si.get(d))&&(o=S({},a),fd(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),mn(u),Nn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,uc(o,a.precedence,e));return n.instance}function uc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,g=0;g<o.length;g++){var R=o[g];if(R.dataset.precedence===n)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function ud(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function fd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var fc=null;function X0(e,n,a){if(fc===null){var o=new Map,u=fc=new Map;u.set(a,o)}else u=fc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[wa]||d[dn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var g=d.getAttribute(n)||"";g=e+g;var R=o.get(g);R?R.push(d):o.set(g,[d])}}return o}function W0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function jS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Y0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ZS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=yr(o.href),d=n.querySelector(Bo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=dc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=d,mn(d);return}d=n.ownerDocument||n,o=V0(o),(u=Si.get(u))&&ud(o,u),d=d.createElement("link"),mn(d);var g=d;g._p=new Promise(function(R,H){g.onload=R,g.onerror=H}),Nn(d,"link",o),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=dc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var dd=0;function KS(e,n){return e.stylesheets&&e.count===0&&pc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&pc(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&dd===0&&(dd=62500*DS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&pc(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>dd?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function dc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)pc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var hc=null;function pc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,hc=new Map,n.forEach(QS,e),hc=null,dc.call(e))}function QS(e,n){if(!(n.state.loading&4)){var a=hc.get(e);if(a)var o=a.get(null);else{a=new Map,hc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var g=u[d];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),o=g)}o&&a.set(null,o)}u=n.instance,g=u.getAttribute("data-precedence"),d=a.get(g)||o,d===o&&a.set(null,u),a.set(g,u),this.count++,o=dc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Go={$$typeof:O,Provider:null,Consumer:null,_currentValue:ct,_currentValue2:ct,_threadCount:0};function JS(e,n,a,o,u,d,g,R,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Kt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kt(0),this.hiddenUpdates=Kt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function q0(e,n,a,o,u,d,g,R,H,nt,_t,Et){return e=new JS(e,n,a,g,H,nt,_t,Et,R),n=1,d===!0&&(n|=24),d=ni(3,null,null,n),e.current=d,d.stateNode=e,n=Xu(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},ju(d),e}function j0(e){return e?(e=$s,e):$s}function Z0(e,n,a,o,u,d){u=j0(u),o.context===null?o.context=u:o.pendingContext=u,o=Ba(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ha(e,o,n),a!==null&&(Kn(a,e,n),xo(a,e,n))}function K0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function hd(e,n){K0(e,n),(e=e.alternate)&&K0(e,n)}function Q0(e){if(e.tag===13||e.tag===31){var n=Ss(e,67108864);n!==null&&Kn(n,e,67108864),hd(e,67108864)}}function J0(e){if(e.tag===13||e.tag===31){var n=oi();n=ps(n);var a=Ss(e,n);a!==null&&Kn(a,e,n),hd(e,n)}}var mc=!0;function $S(e,n,a,o){var u=U.T;U.T=null;var d=B.p;try{B.p=2,pd(e,n,a,o)}finally{B.p=d,U.T=u}}function ty(e,n,a,o){var u=U.T;U.T=null;var d=B.p;try{B.p=8,pd(e,n,a,o)}finally{B.p=d,U.T=u}}function pd(e,n,a,o){if(mc){var u=md(o);if(u===null)td(e,n,o,gc,a),t_(e,o);else if(ny(u,e,n,a,o))o.stopPropagation();else if(t_(e,o),n&4&&-1<ey.indexOf(e)){for(;u!==null;){var d=Da(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var g=Nt(d.pendingLanes);if(g!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;g;){var H=1<<31-Ut(g);R.entanglements[1]|=H,g&=~H}Fi(d),(Pe&6)===0&&(Jl=ht()+500,Po(0))}}break;case 31:case 13:R=Ss(d,2),R!==null&&Kn(R,d,2),tc(),hd(d,2)}if(d=md(o),d===null&&td(e,n,o,gc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else td(e,n,o,null,a)}}function md(e){return e=gu(e),gd(e)}var gc=null;function gd(e){if(gc=null,e=Ca(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return gc=e,null}function $0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dt()){case w:return 2;case M:return 8;case G:case ut:return 32;case gt:return 268435456;default:return 32}default:return 32}}var _d=!1,Qa=null,Ja=null,$a=null,Vo=new Map,ko=new Map,ts=[],ey="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function t_(e,n){switch(e){case"focusin":case"focusout":Qa=null;break;case"dragenter":case"dragleave":Ja=null;break;case"mouseover":case"mouseout":$a=null;break;case"pointerover":case"pointerout":Vo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(n.pointerId)}}function Xo(e,n,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Da(n),n!==null&&Q0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function ny(e,n,a,o,u){switch(n){case"focusin":return Qa=Xo(Qa,e,n,a,o,u),!0;case"dragenter":return Ja=Xo(Ja,e,n,a,o,u),!0;case"mouseover":return $a=Xo($a,e,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Vo.set(d,Xo(Vo.get(d)||null,e,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,ko.set(d,Xo(ko.get(d)||null,e,n,a,o,u)),!0}return!1}function e_(e){var n=Ca(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,to(e.priority,function(){J0(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,to(e.priority,function(){J0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _c(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=md(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);mu=o,a.target.dispatchEvent(o),mu=null}else return n=Da(a),n!==null&&Q0(n),e.blockedOn=a,!1;n.shift()}return!0}function n_(e,n,a){_c(e)&&a.delete(n)}function iy(){_d=!1,Qa!==null&&_c(Qa)&&(Qa=null),Ja!==null&&_c(Ja)&&(Ja=null),$a!==null&&_c($a)&&($a=null),Vo.forEach(n_),ko.forEach(n_)}function vc(e,n){e.blockedOn===n&&(e.blockedOn=null,_d||(_d=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,iy)))}var xc=null;function i_(e){xc!==e&&(xc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){xc===e&&(xc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(gd(o||a)===null)continue;break}var d=Da(a);d!==null&&(e.splice(n,3),n-=3,mf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Er(e){function n(H){return vc(H,e)}Qa!==null&&vc(Qa,e),Ja!==null&&vc(Ja,e),$a!==null&&vc($a,e),Vo.forEach(n),ko.forEach(n);for(var a=0;a<ts.length;a++){var o=ts[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ts.length&&(a=ts[0],a.blockedOn===null);)e_(a),a.blockedOn===null&&ts.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],g=u[wn]||null;if(typeof d=="function")g||i_(a);else if(g){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,g=d[wn]||null)R=g.formAction;else if(gd(u)!==null)continue}else R=g.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),i_(a)}}}function a_(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function vd(e){this._internalRoot=e}Sc.prototype.render=vd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=oi();Z0(a,o,e,n,null,null)},Sc.prototype.unmount=vd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Z0(e.current,2,null,e,null,null),tc(),n[Qi]=null}};function Sc(e){this._internalRoot=e}Sc.prototype.unstable_scheduleHydration=function(e){if(e){var n=$r();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ts.length&&n!==0&&n<ts[a].priority;a++);ts.splice(a,0,e),a===0&&e_(e)}};var s_=t.version;if(s_!=="19.2.6")throw Error(s(527,s_,"19.2.6"));B.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var ay={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yc.isDisabled&&yc.supportsFiber)try{st=yc.inject(ay),tt=yc}catch{}}return Yo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=dg,d=hg,g=pg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=q0(e,1,!1,null,null,a,o,null,u,d,g,a_),e[Qi]=n.current,$f(e),new vd(n)},Yo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",d=dg,g=hg,R=pg,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=q0(e,1,!0,n,a??null,o,u,H,d,g,R,a_),n.context=j0(null),a=n.current,o=oi(),o=ps(o),u=Ba(o),u.callback=null,Ha(a,u,o),a=o,n.current.lanes=a,re(n,a),Fi(n),e[Qi]=n.current,$f(e),new Sc(n)},Yo.version="19.2.6",Yo}var g_;function my(){if(g_)return yd.exports;g_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),yd.exports=py(),yd.exports}var gy=my();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const op="184",_y=0,__=1,vy=2,Zc=1,xv=2,il=3,hs=0,Qn=1,Vi=2,ya=0,Xr=1,v_=2,x_=3,S_=4,xy=5,Fs=100,Sy=101,yy=102,My=103,Ey=104,by=200,Ty=201,Ay=202,Ry=203,dh=204,hh=205,wy=206,Cy=207,Dy=208,Uy=209,Ny=210,Ly=211,Oy=212,Py=213,zy=214,ph=0,mh=1,gh=2,Yr=3,_h=4,vh=5,xh=6,Sh=7,lp=0,Iy=1,Fy=2,Yi=0,Sv=1,yv=2,Mv=3,Ev=4,bv=5,Tv=6,Av=7,Rv=300,Vs=301,qr=302,Td=303,Ad=304,uu=306,rl=1e3,Sa=1001,yh=1002,Ln=1003,By=1004,Mc=1005,Bn=1006,Rd=1007,Hs=1008,fi=1009,wv=1010,Cv=1011,ol=1012,cp=1013,ji=1014,Xi=1015,ba=1016,up=1017,fp=1018,ll=1020,Dv=35902,Uv=35899,Nv=1021,Lv=1022,Ni=1023,Ta=1026,Gs=1027,Ov=1028,dp=1029,ks=1030,hp=1031,pp=1033,Kc=33776,Qc=33777,Jc=33778,$c=33779,Mh=35840,Eh=35841,bh=35842,Th=35843,Ah=36196,Rh=37492,wh=37496,Ch=37488,Dh=37489,eu=37490,Uh=37491,Nh=37808,Lh=37809,Oh=37810,Ph=37811,zh=37812,Ih=37813,Fh=37814,Bh=37815,Hh=37816,Gh=37817,Vh=37818,kh=37819,Xh=37820,Wh=37821,Yh=36492,qh=36494,jh=36495,Zh=36283,Kh=36284,nu=36285,Qh=36286,Hy=3200,iu=0,Gy=1,us="",Mi="srgb",au="srgb-linear",su="linear",ke="srgb",br=7680,y_=519,Vy=512,ky=513,Xy=514,mp=515,Wy=516,Yy=517,gp=518,qy=519,Jh=35044,M_="300 es",Wi=2e3,cl=2001;function jy(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ru(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Zy(){const r=ru("canvas");return r.style.display="block",r}const E_={};function ou(...r){const t="THREE."+r.shift();console.log(t,...r)}function Pv(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function oe(...r){r=Pv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Ae(...r){r=Pv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function $h(...r){const t=r.join(" ");t in E_||(E_[t]=!0,oe(...r))}function Ky(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const Qy={[ph]:mh,[gh]:xh,[_h]:Sh,[Yr]:vh,[mh]:ph,[xh]:gh,[Sh]:_h,[vh]:Yr};class Xs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wd=Math.PI/180,tp=180/Math.PI;function ds(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(In[r&255]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[i&63|128]+In[i>>8&255]+"-"+In[i>>16&255]+In[i>>24&255]+In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]).toLowerCase()}function we(r,t,i){return Math.max(t,Math.min(i,r))}function Jy(r,t){return(r%t+t)%t}function Cd(r,t,i){return(1-i)*r+i*t}function ki(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function je(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ep=class Ep{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=we(this.x,t.x,i.x),this.y=we(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=we(this.x,t,i),this.y=we(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(we(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(we(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ep.prototype.isVector2=!0;let _e=Ep;class Kr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,h){let m=s[l+0],p=s[l+1],x=s[l+2],S=s[l+3],_=c[f+0],E=c[f+1],T=c[f+2],C=c[f+3];if(S!==C||m!==_||p!==E||x!==T){let y=m*_+p*E+x*T+S*C;y<0&&(_=-_,E=-E,T=-T,C=-C,y=-y);let v=1-h;if(y<.9995){const D=Math.acos(y),O=Math.sin(D);v=Math.sin(v*D)/O,h=Math.sin(h*D)/O,m=m*v+_*h,p=p*v+E*h,x=x*v+T*h,S=S*v+C*h}else{m=m*v+_*h,p=p*v+E*h,x=x*v+T*h,S=S*v+C*h;const D=1/Math.sqrt(m*m+p*p+x*x+S*S);m*=D,p*=D,x*=D,S*=D}}t[i]=m,t[i+1]=p,t[i+2]=x,t[i+3]=S}static multiplyQuaternionsFlat(t,i,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],x=s[l+3],S=c[f],_=c[f+1],E=c[f+2],T=c[f+3];return t[i]=h*T+x*S+m*E-p*_,t[i+1]=m*T+x*_+p*S-h*E,t[i+2]=p*T+x*E+h*_-m*S,t[i+3]=x*T-h*S-m*_-p*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(s/2),x=h(l/2),S=h(c/2),_=m(s/2),E=m(l/2),T=m(c/2);switch(f){case"XYZ":this._x=_*x*S+p*E*T,this._y=p*E*S-_*x*T,this._z=p*x*T+_*E*S,this._w=p*x*S-_*E*T;break;case"YXZ":this._x=_*x*S+p*E*T,this._y=p*E*S-_*x*T,this._z=p*x*T-_*E*S,this._w=p*x*S+_*E*T;break;case"ZXY":this._x=_*x*S-p*E*T,this._y=p*E*S+_*x*T,this._z=p*x*T+_*E*S,this._w=p*x*S-_*E*T;break;case"ZYX":this._x=_*x*S-p*E*T,this._y=p*E*S+_*x*T,this._z=p*x*T-_*E*S,this._w=p*x*S+_*E*T;break;case"YZX":this._x=_*x*S+p*E*T,this._y=p*E*S+_*x*T,this._z=p*x*T-_*E*S,this._w=p*x*S-_*E*T;break;case"XZY":this._x=_*x*S-p*E*T,this._y=p*E*S-_*x*T,this._z=p*x*T+_*E*S,this._w=p*x*S+_*E*T;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],x=i[6],S=i[10],_=s+h+S;if(_>0){const E=.5/Math.sqrt(_+1);this._w=.25/E,this._x=(x-m)*E,this._y=(c-p)*E,this._z=(f-l)*E}else if(s>h&&s>S){const E=2*Math.sqrt(1+s-h-S);this._w=(x-m)/E,this._x=.25*E,this._y=(l+f)/E,this._z=(c+p)/E}else if(h>S){const E=2*Math.sqrt(1+h-s-S);this._w=(c-p)/E,this._x=(l+f)/E,this._y=.25*E,this._z=(m+x)/E}else{const E=2*Math.sqrt(1+S-s-h);this._w=(f-l)/E,this._x=(c+p)/E,this._y=(m+x)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,h=i._x,m=i._y,p=i._z,x=i._w;return this._x=s*x+f*h+l*p-c*m,this._y=l*x+f*m+c*h-s*p,this._z=c*x+f*p+s*m-l*h,this._w=f*x-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,f=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const bp=class bp{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(b_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(b_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*l-h*s),x=2*(h*i-c*l),S=2*(c*s-f*i);return this.x=i+m*p+f*S-h*x,this.y=s+m*x+h*p-c*S,this.z=l+m*S+c*x-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=we(this.x,t.x,i.x),this.y=we(this.y,t.y,i.y),this.z=we(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=we(this.x,t,i),this.y=we(this.y,t,i),this.z=we(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(we(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Dd.copy(this).projectOnVector(t),this.sub(Dd)}reflect(t){return this.sub(Dd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(we(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bp.prototype.isVector3=!0;let $=bp;const Dd=new $,b_=new Kr,Tp=class Tp{constructor(t,i,s,l,c,f,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p)}set(t,i,s,l,c,f,h,m,p){const x=this.elements;return x[0]=t,x[1]=l,x[2]=h,x[3]=i,x[4]=c,x[5]=m,x[6]=s,x[7]=f,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],x=s[4],S=s[7],_=s[2],E=s[5],T=s[8],C=l[0],y=l[3],v=l[6],D=l[1],O=l[4],L=l[7],k=l[2],z=l[5],I=l[8];return c[0]=f*C+h*D+m*k,c[3]=f*y+h*O+m*z,c[6]=f*v+h*L+m*I,c[1]=p*C+x*D+S*k,c[4]=p*y+x*O+S*z,c[7]=p*v+x*L+S*I,c[2]=_*C+E*D+T*k,c[5]=_*y+E*O+T*z,c[8]=_*v+E*L+T*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],x=t[8];return i*f*x-i*h*p-s*c*x+s*h*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],x=t[8],S=x*f-h*p,_=h*m-x*c,E=p*c-f*m,T=i*S+s*_+l*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=S*C,t[1]=(l*p-x*s)*C,t[2]=(h*s-l*f)*C,t[3]=_*C,t[4]=(x*i-l*m)*C,t[5]=(l*c-h*i)*C,t[6]=E*C,t[7]=(s*m-p*i)*C,t[8]=(f*i-s*c)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+t,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(Ud.makeScale(t,i)),this}rotate(t){return this.premultiply(Ud.makeRotation(-t)),this}translate(t,i){return this.premultiply(Ud.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Tp.prototype.isMatrix3=!0;let ue=Tp;const Ud=new ue,T_=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),A_=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $y(){const r={enabled:!0,workingColorSpace:au,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===ke&&(l.r=Ma(l.r),l.g=Ma(l.g),l.b=Ma(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===ke&&(l.r=Wr(l.r),l.g=Wr(l.g),l.b=Wr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===us?su:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return $h("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return $h("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[au]:{primaries:t,whitePoint:s,transfer:su,toXYZ:T_,fromXYZ:A_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:t,whitePoint:s,transfer:ke,toXYZ:T_,fromXYZ:A_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),r}const Re=$y();function Ma(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Wr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Tr;class tM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Tr===void 0&&(Tr=ru("canvas")),Tr.width=t.width,Tr.height=t.height;const l=Tr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Tr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=ru("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ma(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ma(i[s]/255)*255):i[s]=Ma(i[s]);return{data:i,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let eM=0;class _p{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=ds(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Nd(l[f].image)):c.push(Nd(l[f]))}else c=Nd(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Nd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?tM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}let nM=0;const Ld=new $;class Hn extends Xs{constructor(t=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,s=Sa,l=Sa,c=Bn,f=Hs,h=Ni,m=fi,p=Hn.DEFAULT_ANISOTROPY,x=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=ds(),this.name="",this.source=new _p(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ld).x}get height(){return this.source.getSize(Ld).y}get depth(){return this.source.getSize(Ld).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){oe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rl:t.x=t.x-Math.floor(t.x);break;case Sa:t.x=t.x<0?0:1;break;case yh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rl:t.y=t.y-Math.floor(t.y);break;case Sa:t.y=t.y<0?0:1;break;case yh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=Rv;Hn.DEFAULT_ANISOTROPY=1;const Ap=class Ap{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],x=m[4],S=m[8],_=m[1],E=m[5],T=m[9],C=m[2],y=m[6],v=m[10];if(Math.abs(x-_)<.01&&Math.abs(S-C)<.01&&Math.abs(T-y)<.01){if(Math.abs(x+_)<.1&&Math.abs(S+C)<.1&&Math.abs(T+y)<.1&&Math.abs(p+E+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,L=(E+1)/2,k=(v+1)/2,z=(x+_)/4,I=(S+C)/4,b=(T+y)/4;return O>L&&O>k?O<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(O),l=z/s,c=I/s):L>k?L<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),s=z/l,c=b/l):k<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(k),s=I/c,l=b/c),this.set(s,l,c,i),this}let D=Math.sqrt((y-T)*(y-T)+(S-C)*(S-C)+(_-x)*(_-x));return Math.abs(D)<.001&&(D=1),this.x=(y-T)/D,this.y=(S-C)/D,this.z=(_-x)/D,this.w=Math.acos((p+E+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=we(this.x,t.x,i.x),this.y=we(this.y,t.y,i.y),this.z=we(this.z,t.z,i.z),this.w=we(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=we(this.x,t,i),this.y=we(this.y,t,i),this.z=we(this.z,t,i),this.w=we(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(we(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ap.prototype.isVector4=!0;let un=Ap;class iM extends Xs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new un(0,0,t,i),this.scissorTest=!1,this.viewport=new un(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Hn(l),f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new _p(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends iM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class zv extends Hn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class aM extends Hn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cu=class cu{constructor(t,i,s,l,c,f,h,m,p,x,S,_,E,T,C,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p,x,S,_,E,T,C,y)}set(t,i,s,l,c,f,h,m,p,x,S,_,E,T,C,y){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=f,v[9]=h,v[13]=m,v[2]=p,v[6]=x,v[10]=S,v[14]=_,v[3]=E,v[7]=T,v[11]=C,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cu().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Ar.setFromMatrixColumn(t,0).length(),c=1/Ar.setFromMatrixColumn(t,1).length(),f=1/Ar.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),x=Math.cos(c),S=Math.sin(c);if(t.order==="XYZ"){const _=f*x,E=f*S,T=h*x,C=h*S;i[0]=m*x,i[4]=-m*S,i[8]=p,i[1]=E+T*p,i[5]=_-C*p,i[9]=-h*m,i[2]=C-_*p,i[6]=T+E*p,i[10]=f*m}else if(t.order==="YXZ"){const _=m*x,E=m*S,T=p*x,C=p*S;i[0]=_+C*h,i[4]=T*h-E,i[8]=f*p,i[1]=f*S,i[5]=f*x,i[9]=-h,i[2]=E*h-T,i[6]=C+_*h,i[10]=f*m}else if(t.order==="ZXY"){const _=m*x,E=m*S,T=p*x,C=p*S;i[0]=_-C*h,i[4]=-f*S,i[8]=T+E*h,i[1]=E+T*h,i[5]=f*x,i[9]=C-_*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(t.order==="ZYX"){const _=f*x,E=f*S,T=h*x,C=h*S;i[0]=m*x,i[4]=T*p-E,i[8]=_*p+C,i[1]=m*S,i[5]=C*p+_,i[9]=E*p-T,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(t.order==="YZX"){const _=f*m,E=f*p,T=h*m,C=h*p;i[0]=m*x,i[4]=C-_*S,i[8]=T*S+E,i[1]=S,i[5]=f*x,i[9]=-h*x,i[2]=-p*x,i[6]=E*S+T,i[10]=_-C*S}else if(t.order==="XZY"){const _=f*m,E=f*p,T=h*m,C=h*p;i[0]=m*x,i[4]=-S,i[8]=p*x,i[1]=_*S+C,i[5]=f*x,i[9]=E*S-T,i[2]=T*S-E,i[6]=h*x,i[10]=C*S+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sM,t,rM)}lookAt(t,i,s){const l=this.elements;return li.subVectors(t,i),li.lengthSq()===0&&(li.z=1),li.normalize(),ns.crossVectors(s,li),ns.lengthSq()===0&&(Math.abs(s.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),ns.crossVectors(s,li)),ns.normalize(),Ec.crossVectors(li,ns),l[0]=ns.x,l[4]=Ec.x,l[8]=li.x,l[1]=ns.y,l[5]=Ec.y,l[9]=li.y,l[2]=ns.z,l[6]=Ec.z,l[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],x=s[1],S=s[5],_=s[9],E=s[13],T=s[2],C=s[6],y=s[10],v=s[14],D=s[3],O=s[7],L=s[11],k=s[15],z=l[0],I=l[4],b=l[8],P=l[12],K=l[1],F=l[5],Q=l[9],mt=l[13],St=l[2],W=l[6],U=l[10],B=l[14],ct=l[3],yt=l[7],bt=l[11],N=l[15];return c[0]=f*z+h*K+m*St+p*ct,c[4]=f*I+h*F+m*W+p*yt,c[8]=f*b+h*Q+m*U+p*bt,c[12]=f*P+h*mt+m*B+p*N,c[1]=x*z+S*K+_*St+E*ct,c[5]=x*I+S*F+_*W+E*yt,c[9]=x*b+S*Q+_*U+E*bt,c[13]=x*P+S*mt+_*B+E*N,c[2]=T*z+C*K+y*St+v*ct,c[6]=T*I+C*F+y*W+v*yt,c[10]=T*b+C*Q+y*U+v*bt,c[14]=T*P+C*mt+y*B+v*N,c[3]=D*z+O*K+L*St+k*ct,c[7]=D*I+O*F+L*W+k*yt,c[11]=D*b+O*Q+L*U+k*bt,c[15]=D*P+O*mt+L*B+k*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],h=t[5],m=t[9],p=t[13],x=t[2],S=t[6],_=t[10],E=t[14],T=t[3],C=t[7],y=t[11],v=t[15],D=m*E-p*_,O=h*E-p*S,L=h*_-m*S,k=f*E-p*x,z=f*_-m*x,I=f*S-h*x;return i*(C*D-y*O+v*L)-s*(T*D-y*k+v*z)+l*(T*O-C*k+v*I)-c*(T*L-C*z+y*I)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],x=t[8],S=t[9],_=t[10],E=t[11],T=t[12],C=t[13],y=t[14],v=t[15],D=i*h-s*f,O=i*m-l*f,L=i*p-c*f,k=s*m-l*h,z=s*p-c*h,I=l*p-c*m,b=x*C-S*T,P=x*y-_*T,K=x*v-E*T,F=S*y-_*C,Q=S*v-E*C,mt=_*v-E*y,St=D*mt-O*Q+L*F+k*K-z*P+I*b;if(St===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/St;return t[0]=(h*mt-m*Q+p*F)*W,t[1]=(l*Q-s*mt-c*F)*W,t[2]=(C*I-y*z+v*k)*W,t[3]=(_*z-S*I-E*k)*W,t[4]=(m*K-f*mt-p*P)*W,t[5]=(i*mt-l*K+c*P)*W,t[6]=(y*L-T*I-v*O)*W,t[7]=(x*I-_*L+E*O)*W,t[8]=(f*Q-h*K+p*b)*W,t[9]=(s*K-i*Q-c*b)*W,t[10]=(T*z-C*L+v*D)*W,t[11]=(S*L-x*z-E*D)*W,t[12]=(h*P-f*F-m*b)*W,t[13]=(i*F-s*P+l*b)*W,t[14]=(C*O-T*k-y*D)*W,t[15]=(x*k-S*O+_*D)*W,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,h=t.y,m=t.z,p=c*f,x=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,x*h+s,x*m-l*f,0,p*m-l*h,x*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,x=f+f,S=h+h,_=c*p,E=c*x,T=c*S,C=f*x,y=f*S,v=h*S,D=m*p,O=m*x,L=m*S,k=s.x,z=s.y,I=s.z;return l[0]=(1-(C+v))*k,l[1]=(E+L)*k,l[2]=(T-O)*k,l[3]=0,l[4]=(E-L)*z,l[5]=(1-(_+v))*z,l[6]=(y+D)*z,l[7]=0,l[8]=(T+O)*I,l[9]=(y-D)*I,l[10]=(1-(_+C))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Ar.set(l[0],l[1],l[2]).length();const h=Ar.set(l[4],l[5],l[6]).length(),m=Ar.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Ci.copy(this);const p=1/f,x=1/h,S=1/m;return Ci.elements[0]*=p,Ci.elements[1]*=p,Ci.elements[2]*=p,Ci.elements[4]*=x,Ci.elements[5]*=x,Ci.elements[6]*=x,Ci.elements[8]*=S,Ci.elements[9]*=S,Ci.elements[10]*=S,i.setFromRotationMatrix(Ci),s.x=f,s.y=h,s.z=m,this}makePerspective(t,i,s,l,c,f,h=Wi,m=!1){const p=this.elements,x=2*c/(i-t),S=2*c/(s-l),_=(i+t)/(i-t),E=(s+l)/(s-l);let T,C;if(m)T=c/(f-c),C=f*c/(f-c);else if(h===Wi)T=-(f+c)/(f-c),C=-2*f*c/(f-c);else if(h===cl)T=-f/(f-c),C=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=S,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,h=Wi,m=!1){const p=this.elements,x=2/(i-t),S=2/(s-l),_=-(i+t)/(i-t),E=-(s+l)/(s-l);let T,C;if(m)T=1/(f-c),C=f/(f-c);else if(h===Wi)T=-2/(f-c),C=-(f+c)/(f-c);else if(h===cl)T=-1/(f-c),C=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=S,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=T,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};cu.prototype.isMatrix4=!0;let rn=cu;const Ar=new $,Ci=new rn,sM=new $(0,0,0),rM=new $(1,1,1),ns=new $,Ec=new $,li=new $,R_=new rn,w_=new Kr;class Aa{constructor(t=0,i=0,s=0,l=Aa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],x=l[9],S=l[2],_=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(we(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,E),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-we(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(we(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-S,E),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-we(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(_,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(we(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-we(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-x,E),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return R_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(R_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return w_.setFromEuler(this),this.setFromQuaternion(w_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Aa.DEFAULT_ORDER="XYZ";class vp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let oM=0;const C_=new $,Rr=new Kr,ma=new rn,bc=new $,qo=new $,lM=new $,cM=new Kr,D_=new $(1,0,0),U_=new $(0,1,0),N_=new $(0,0,1),L_={type:"added"},uM={type:"removed"},wr={type:"childadded",child:null},Od={type:"childremoved",child:null};class Xn extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const t=new $,i=new Aa,s=new Kr,l=new $(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new ue}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Rr.setFromAxisAngle(t,i),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(t,i){return Rr.setFromAxisAngle(t,i),this.quaternion.premultiply(Rr),this}rotateX(t){return this.rotateOnAxis(D_,t)}rotateY(t){return this.rotateOnAxis(U_,t)}rotateZ(t){return this.rotateOnAxis(N_,t)}translateOnAxis(t,i){return C_.copy(t).applyQuaternion(this.quaternion),this.position.add(C_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(D_,t)}translateY(t){return this.translateOnAxis(U_,t)}translateZ(t){return this.translateOnAxis(N_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ma.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?bc.copy(t):bc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ma.lookAt(qo,bc,this.up):ma.lookAt(bc,qo,this.up),this.quaternion.setFromRotationMatrix(ma),l&&(ma.extractRotation(l.matrixWorld),Rr.setFromRotationMatrix(ma),this.quaternion.premultiply(Rr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(L_),wr.child=t,this.dispatchEvent(wr),wr.child=null):Ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(uM),Od.child=t,this.dispatchEvent(Od),Od.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ma.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ma.multiply(t.parent.matrixWorld)),t.applyMatrix4(ma),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(L_),wr.child=t,this.dispatchEvent(wr),wr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,t,lM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,cM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const S=m[p];c(t.shapes,S)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),x=f(t.images),S=f(t.shapes),_=f(t.skeletons),E=f(t.animations),T=f(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),S.length>0&&(s.shapes=S),_.length>0&&(s.skeletons=_),E.length>0&&(s.animations=E),T.length>0&&(s.nodes=T)}return s.object=l,s;function f(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Xn.DEFAULT_UP=new $(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Tc extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fM={type:"move"};class Pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const C of t.hand.values()){const y=i.getJointPose(C,s),v=this._getHandJoint(p,C);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const x=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],_=x.position.distanceTo(S.position),E=.02,T=.005;p.inputState.pinching&&_>E+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&_<=E-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(fM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Tc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Iv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},Ac={h:0,s:0,l:0};function zd(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class be{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Mi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Re.workingColorSpace){return this.r=t,this.g=i,this.b=s,Re.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Re.workingColorSpace){if(t=Jy(t,1),i=we(i,0,1),s=we(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=zd(f,c,t+1/3),this.g=zd(f,c,t),this.b=zd(f,c,t-1/3)}return Re.colorSpaceToWorking(this,l),this}setStyle(t,i=Mi){function s(c){c!==void 0&&parseFloat(c)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:oe("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Mi){const s=Iv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ma(t.r),this.g=Ma(t.g),this.b=Ma(t.b),this}copyLinearToSRGB(t){return this.r=Wr(t.r),this.g=Wr(t.g),this.b=Wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mi){return Re.workingToColorSpace(Fn.copy(this),t),Math.round(we(Fn.r*255,0,255))*65536+Math.round(we(Fn.g*255,0,255))*256+Math.round(we(Fn.b*255,0,255))}getHexString(t=Mi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Re.workingColorSpace){Re.workingToColorSpace(Fn.copy(this),i);const s=Fn.r,l=Fn.g,c=Fn.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const x=(h+f)/2;if(h===f)m=0,p=0;else{const S=f-h;switch(p=x<=.5?S/(f+h):S/(2-f-h),f){case s:m=(l-c)/S+(l<c?6:0);break;case l:m=(c-s)/S+2;break;case c:m=(s-l)/S+4;break}m/=6}return t.h=m,t.s=p,t.l=x,t}getRGB(t,i=Re.workingColorSpace){return Re.workingToColorSpace(Fn.copy(this),i),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=Mi){Re.workingToColorSpace(Fn.copy(this),t);const i=Fn.r,s=Fn.g,l=Fn.b;return t!==Mi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(is),this.setHSL(is.h+t,is.s+i,is.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(is),t.getHSL(Ac);const s=Cd(is.h,Ac.h,i),l=Cd(is.s,Ac.s,i),c=Cd(is.l,Ac.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new be;be.NAMES=Iv;class xp{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new be(t),this.near=i,this.far=s}clone(){return new xp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class dM extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Aa,this.environmentIntensity=1,this.environmentRotation=new Aa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Di=new $,ga=new $,Id=new $,_a=new $,Cr=new $,Dr=new $,O_=new $,Fd=new $,Bd=new $,Hd=new $,Gd=new un,Vd=new un,kd=new un;class Ei{constructor(t=new $,i=new $,s=new $){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Di.subVectors(t,i),l.cross(Di);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Di.subVectors(l,i),ga.subVectors(s,i),Id.subVectors(t,i);const f=Di.dot(Di),h=Di.dot(ga),m=Di.dot(Id),p=ga.dot(ga),x=ga.dot(Id),S=f*p-h*h;if(S===0)return c.set(0,0,0),null;const _=1/S,E=(p*m-h*x)*_,T=(f*x-h*m)*_;return c.set(1-E-T,T,E)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,_a)===null?!1:_a.x>=0&&_a.y>=0&&_a.x+_a.y<=1}static getInterpolation(t,i,s,l,c,f,h,m){return this.getBarycoord(t,i,s,l,_a)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,_a.x),m.addScaledVector(f,_a.y),m.addScaledVector(h,_a.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return Gd.setScalar(0),Vd.setScalar(0),kd.setScalar(0),Gd.fromBufferAttribute(t,i),Vd.fromBufferAttribute(t,s),kd.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Gd,c.x),f.addScaledVector(Vd,c.y),f.addScaledVector(kd,c.z),f}static isFrontFacing(t,i,s,l){return Di.subVectors(s,i),ga.subVectors(t,i),Di.cross(ga).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Di.subVectors(this.c,this.b),ga.subVectors(this.a,this.b),Di.cross(ga).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ei.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ei.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,h;Cr.subVectors(l,s),Dr.subVectors(c,s),Fd.subVectors(t,s);const m=Cr.dot(Fd),p=Dr.dot(Fd);if(m<=0&&p<=0)return i.copy(s);Bd.subVectors(t,l);const x=Cr.dot(Bd),S=Dr.dot(Bd);if(x>=0&&S<=x)return i.copy(l);const _=m*S-x*p;if(_<=0&&m>=0&&x<=0)return f=m/(m-x),i.copy(s).addScaledVector(Cr,f);Hd.subVectors(t,c);const E=Cr.dot(Hd),T=Dr.dot(Hd);if(T>=0&&E<=T)return i.copy(c);const C=E*p-m*T;if(C<=0&&p>=0&&T<=0)return h=p/(p-T),i.copy(s).addScaledVector(Dr,h);const y=x*T-E*S;if(y<=0&&S-x>=0&&E-T>=0)return O_.subVectors(c,l),h=(S-x)/(S-x+(E-T)),i.copy(l).addScaledVector(O_,h);const v=1/(y+C+_);return f=C*v,h=_*v,i.copy(s).addScaledVector(Cr,f).addScaledVector(Dr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class fl{constructor(t=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ui.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ui.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ui.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Ui):Ui.fromBufferAttribute(c,f),Ui.applyMatrix4(t.matrixWorld),this.expandByPoint(Ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Rc.copy(s.boundingBox)),Rc.applyMatrix4(t.matrixWorld),this.union(Rc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ui),Ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jo),wc.subVectors(this.max,jo),Ur.subVectors(t.a,jo),Nr.subVectors(t.b,jo),Lr.subVectors(t.c,jo),as.subVectors(Nr,Ur),ss.subVectors(Lr,Nr),Ls.subVectors(Ur,Lr);let i=[0,-as.z,as.y,0,-ss.z,ss.y,0,-Ls.z,Ls.y,as.z,0,-as.x,ss.z,0,-ss.x,Ls.z,0,-Ls.x,-as.y,as.x,0,-ss.y,ss.x,0,-Ls.y,Ls.x,0];return!Xd(i,Ur,Nr,Lr,wc)||(i=[1,0,0,0,1,0,0,0,1],!Xd(i,Ur,Nr,Lr,wc))?!1:(Cc.crossVectors(as,ss),i=[Cc.x,Cc.y,Cc.z],Xd(i,Ur,Nr,Lr,wc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(va),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const va=[new $,new $,new $,new $,new $,new $,new $,new $],Ui=new $,Rc=new fl,Ur=new $,Nr=new $,Lr=new $,as=new $,ss=new $,Ls=new $,jo=new $,wc=new $,Cc=new $,Os=new $;function Xd(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Os.fromArray(r,c);const h=l.x*Math.abs(Os.x)+l.y*Math.abs(Os.y)+l.z*Math.abs(Os.z),m=t.dot(Os),p=i.dot(Os),x=s.dot(Os);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const Sn=new $,Dc=new _e;let hM=0;class Li extends Xs{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Jh,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Dc.fromBufferAttribute(this,i),Dc.applyMatrix3(t),this.setXY(i,Dc.x,Dc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix3(t),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix4(t),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyNormalMatrix(t),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.transformDirection(t),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=ki(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=je(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=ki(i,this.array)),i}setX(t,i){return this.normalized&&(i=je(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=ki(i,this.array)),i}setY(t,i){return this.normalized&&(i=je(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=ki(i,this.array)),i}setZ(t,i){return this.normalized&&(i=je(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=ki(i,this.array)),i}setW(t,i){return this.normalized&&(i=je(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=je(i,this.array),s=je(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=je(i,this.array),s=je(s,this.array),l=je(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=je(i,this.array),s=je(s,this.array),l=je(l,this.array),c=je(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jh&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Fv extends Li{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Bv extends Li{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ea extends Li{constructor(t,i,s){super(new Float32Array(t),i,s)}}const pM=new fl,Zo=new $,Wd=new $;class Sp{constructor(t=new $,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):pM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zo.subVectors(t,this.center);const i=Zo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Zo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zo.copy(t.center).add(Wd)),this.expandByPoint(Zo.copy(t.center).sub(Wd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let mM=0;const yi=new rn,Yd=new Xn,Or=new $,ci=new fl,Ko=new fl,An=new $;class Ki extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jy(t)?Bv:Fv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ue().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,i,s){return yi.makeTranslation(t,i,s),this.applyMatrix4(yi),this}scale(t,i,s){return yi.makeScale(t,i,s),this.applyMatrix4(yi),this}lookAt(t){return Yd.lookAt(t),Yd.updateMatrix(),this.applyMatrix4(Yd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ea(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ci.setFromBufferAttribute(c),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sp);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const s=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Ko.setFromBufferAttribute(h),this.morphTargetsRelative?(An.addVectors(ci.min,Ko.min),ci.expandByPoint(An),An.addVectors(ci.max,Ko.max),ci.expandByPoint(An)):(ci.expandByPoint(Ko.min),ci.expandByPoint(Ko.max))}ci.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)An.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(An));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)An.fromBufferAttribute(h,p),m&&(Or.fromBufferAttribute(t,p),An.add(Or)),l=Math.max(l,s.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let b=0;b<s.count;b++)h[b]=new $,m[b]=new $;const p=new $,x=new $,S=new $,_=new _e,E=new _e,T=new _e,C=new $,y=new $;function v(b,P,K){p.fromBufferAttribute(s,b),x.fromBufferAttribute(s,P),S.fromBufferAttribute(s,K),_.fromBufferAttribute(c,b),E.fromBufferAttribute(c,P),T.fromBufferAttribute(c,K),x.sub(p),S.sub(p),E.sub(_),T.sub(_);const F=1/(E.x*T.y-T.x*E.y);isFinite(F)&&(C.copy(x).multiplyScalar(T.y).addScaledVector(S,-E.y).multiplyScalar(F),y.copy(S).multiplyScalar(E.x).addScaledVector(x,-T.x).multiplyScalar(F),h[b].add(C),h[P].add(C),h[K].add(C),m[b].add(y),m[P].add(y),m[K].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let b=0,P=D.length;b<P;++b){const K=D[b],F=K.start,Q=K.count;for(let mt=F,St=F+Q;mt<St;mt+=3)v(t.getX(mt+0),t.getX(mt+1),t.getX(mt+2))}const O=new $,L=new $,k=new $,z=new $;function I(b){k.fromBufferAttribute(l,b),z.copy(k);const P=h[b];O.copy(P),O.sub(k.multiplyScalar(k.dot(P))).normalize(),L.crossVectors(z,P);const F=L.dot(m[b])<0?-1:1;f.setXYZW(b,O.x,O.y,O.z,F)}for(let b=0,P=D.length;b<P;++b){const K=D[b],F=K.start,Q=K.count;for(let mt=F,St=F+Q;mt<St;mt+=3)I(t.getX(mt+0)),I(t.getX(mt+1)),I(t.getX(mt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Li(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,E=s.count;_<E;_++)s.setXYZ(_,0,0,0);const l=new $,c=new $,f=new $,h=new $,m=new $,p=new $,x=new $,S=new $;if(t)for(let _=0,E=t.count;_<E;_+=3){const T=t.getX(_+0),C=t.getX(_+1),y=t.getX(_+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,C),f.fromBufferAttribute(i,y),x.subVectors(f,c),S.subVectors(l,c),x.cross(S),h.fromBufferAttribute(s,T),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,y),h.add(x),m.add(x),p.add(x),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,E=i.count;_<E;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),f.fromBufferAttribute(i,_+2),x.subVectors(f,c),S.subVectors(l,c),x.cross(S),s.setXYZ(_+0,x.x,x.y,x.z),s.setXYZ(_+1,x.x,x.y,x.z),s.setXYZ(_+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)An.fromBufferAttribute(t,i),An.normalize(),t.setXYZ(i,An.x,An.y,An.z)}toNonIndexed(){function t(h,m){const p=h.array,x=h.itemSize,S=h.normalized,_=new p.constructor(m.length*x);let E=0,T=0;for(let C=0,y=m.length;C<y;C++){h.isInterleavedBufferAttribute?E=m[C]*h.data.stride+h.offset:E=m[C]*x;for(let v=0;v<x;v++)_[T++]=p[E++]}return new Li(_,x,S)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ki,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let x=0,S=p.length;x<S;x++){const _=p[x],E=t(_,s);m.push(E)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let S=0,_=p.length;S<_;S++){const E=p[S];x.push(E.toJSON(t.data))}x.length>0&&(l[m]=x,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const c=t.morphAttributes;for(const p in c){const x=[],S=c[p];for(let _=0,E=S.length;_<E;_++)x.push(S[_].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,x=f.length;p<x;p++){const S=f[p];this.addGroup(S.start,S.count,S.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Jh,this.updateRanges=[],this.version=0,this.uuid=ds()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ds()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ds()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vn=new $;class lu{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.applyMatrix4(t),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.applyNormalMatrix(t),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.transformDirection(t),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=ki(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=je(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=je(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=je(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=je(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=je(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=ki(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=ki(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=ki(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=ki(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=je(i,this.array),s=je(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=je(i,this.array),s=je(s,this.array),l=je(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=je(i,this.array),s=je(s,this.array),l=je(l,this.array),c=je(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){ou("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Li(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new lu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ou("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let _M=0;class Ws extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=ds(),this.name="",this.type="Material",this.blending=Xr,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dh,this.blendDst=hh,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=y_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){oe(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(s.blending=this.blending),this.side!==hs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==dh&&(s.blendSrc=this.blendSrc),this.blendDst!==hh&&(s.blendDst=this.blendDst),this.blendEquation!==Fs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==y_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(s.stencilFail=this.stencilFail),this.stencilZFail!==br&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ep extends Ws{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Pr;const Qo=new $,zr=new $,Ir=new $,Fr=new _e,Jo=new _e,Hv=new rn,Uc=new $,$o=new $,Nc=new $,P_=new _e,qd=new _e,z_=new _e;class vM extends Xn{constructor(t=new ep){if(super(),this.isSprite=!0,this.type="Sprite",Pr===void 0){Pr=new Ki;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new gM(i,5);Pr.setIndex([0,1,2,0,2,3]),Pr.setAttribute("position",new lu(s,3,0,!1)),Pr.setAttribute("uv",new lu(s,2,3,!1))}this.geometry=Pr,this.material=t,this.center=new _e(.5,.5),this.count=1}raycast(t,i){t.camera===null&&Ae('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zr.setFromMatrixScale(this.matrixWorld),Hv.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ir.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zr.multiplyScalar(-Ir.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const f=this.center;Lc(Uc.set(-.5,-.5,0),Ir,f,zr,l,c),Lc($o.set(.5,-.5,0),Ir,f,zr,l,c),Lc(Nc.set(.5,.5,0),Ir,f,zr,l,c),P_.set(0,0),qd.set(1,0),z_.set(1,1);let h=t.ray.intersectTriangle(Uc,$o,Nc,!1,Qo);if(h===null&&(Lc($o.set(-.5,.5,0),Ir,f,zr,l,c),qd.set(0,1),h=t.ray.intersectTriangle(Uc,Nc,$o,!1,Qo),h===null))return;const m=t.ray.origin.distanceTo(Qo);m<t.near||m>t.far||i.push({distance:m,point:Qo.clone(),uv:Ei.getInterpolation(Qo,Uc,$o,Nc,P_,qd,z_,new _e),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Lc(r,t,i,s,l,c){Fr.subVectors(r,i).addScalar(.5).multiply(s),l!==void 0?(Jo.x=c*Fr.x-l*Fr.y,Jo.y=l*Fr.x+c*Fr.y):Jo.copy(Fr),r.copy(t),r.x+=Jo.x,r.y+=Jo.y,r.applyMatrix4(Hv)}const xa=new $,jd=new $,Oc=new $,rs=new $,Zd=new $,Pc=new $,Kd=new $;class Gv{constructor(t=new $,i=new $(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=xa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(xa.copy(this.origin).addScaledVector(this.direction,i),xa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){jd.copy(t).add(i).multiplyScalar(.5),Oc.copy(i).sub(t).normalize(),rs.copy(this.origin).sub(jd);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Oc),h=rs.dot(this.direction),m=-rs.dot(Oc),p=rs.lengthSq(),x=Math.abs(1-f*f);let S,_,E,T;if(x>0)if(S=f*m-h,_=f*h-m,T=c*x,S>=0)if(_>=-T)if(_<=T){const C=1/x;S*=C,_*=C,E=S*(S+f*_+2*h)+_*(f*S+_+2*m)+p}else _=c,S=Math.max(0,-(f*_+h)),E=-S*S+_*(_+2*m)+p;else _=-c,S=Math.max(0,-(f*_+h)),E=-S*S+_*(_+2*m)+p;else _<=-T?(S=Math.max(0,-(-f*c+h)),_=S>0?-c:Math.min(Math.max(-c,-m),c),E=-S*S+_*(_+2*m)+p):_<=T?(S=0,_=Math.min(Math.max(-c,-m),c),E=_*(_+2*m)+p):(S=Math.max(0,-(f*c+h)),_=S>0?c:Math.min(Math.max(-c,-m),c),E=-S*S+_*(_+2*m)+p);else _=f>0?-c:c,S=Math.max(0,-(f*_+h)),E=-S*S+_*(_+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(jd).addScaledVector(Oc,_),E}intersectSphere(t,i){xa.subVectors(t.center,this.origin);const s=xa.dot(this.direction),l=xa.dot(xa)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,h,m;const p=1/this.direction.x,x=1/this.direction.y,S=1/this.direction.z,_=this.origin;return p>=0?(s=(t.min.x-_.x)*p,l=(t.max.x-_.x)*p):(s=(t.max.x-_.x)*p,l=(t.min.x-_.x)*p),x>=0?(c=(t.min.y-_.y)*x,f=(t.max.y-_.y)*x):(c=(t.max.y-_.y)*x,f=(t.min.y-_.y)*x),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),S>=0?(h=(t.min.z-_.z)*S,m=(t.max.z-_.z)*S):(h=(t.max.z-_.z)*S,m=(t.min.z-_.z)*S),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,xa)!==null}intersectTriangle(t,i,s,l,c){Zd.subVectors(i,t),Pc.subVectors(s,t),Kd.crossVectors(Zd,Pc);let f=this.direction.dot(Kd),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;rs.subVectors(this.origin,t);const m=h*this.direction.dot(Pc.crossVectors(rs,Pc));if(m<0)return null;const p=h*this.direction.dot(Zd.cross(rs));if(p<0||m+p>f)return null;const x=-h*rs.dot(Kd);return x<0?null:this.at(x/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yp extends Ws{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Aa,this.combine=lp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const I_=new rn,Ps=new Gv,zc=new Sp,F_=new $,Ic=new $,Fc=new $,Bc=new $,Qd=new $,Hc=new $,B_=new $,Gc=new $;class cn extends Xn{constructor(t=new Ki,i=new yp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Hc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=h[m],S=c[m];x!==0&&(Qd.fromBufferAttribute(S,t),f?Hc.addScaledVector(Qd,x):Hc.addScaledVector(Qd.sub(i),x))}i.add(Hc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),zc.copy(s.boundingSphere),zc.applyMatrix4(c),Ps.copy(t.ray).recast(t.near),!(zc.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(zc,F_)===null||Ps.origin.distanceToSquared(F_)>(t.far-t.near)**2))&&(I_.copy(c).invert(),Ps.copy(t.ray).applyMatrix4(I_),!(s.boundingBox!==null&&Ps.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ps)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,S=c.attributes.normal,_=c.groups,E=c.drawRange;if(h!==null)if(Array.isArray(f))for(let T=0,C=_.length;T<C;T++){const y=_[T],v=f[y.materialIndex],D=Math.max(y.start,E.start),O=Math.min(h.count,Math.min(y.start+y.count,E.start+E.count));for(let L=D,k=O;L<k;L+=3){const z=h.getX(L),I=h.getX(L+1),b=h.getX(L+2);l=Vc(this,v,t,s,p,x,S,z,I,b),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),C=Math.min(h.count,E.start+E.count);for(let y=T,v=C;y<v;y+=3){const D=h.getX(y),O=h.getX(y+1),L=h.getX(y+2);l=Vc(this,f,t,s,p,x,S,D,O,L),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let T=0,C=_.length;T<C;T++){const y=_[T],v=f[y.materialIndex],D=Math.max(y.start,E.start),O=Math.min(m.count,Math.min(y.start+y.count,E.start+E.count));for(let L=D,k=O;L<k;L+=3){const z=L,I=L+1,b=L+2;l=Vc(this,v,t,s,p,x,S,z,I,b),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),C=Math.min(m.count,E.start+E.count);for(let y=T,v=C;y<v;y+=3){const D=y,O=y+1,L=y+2;l=Vc(this,f,t,s,p,x,S,D,O,L),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function xM(r,t,i,s,l,c,f,h){let m;if(t.side===Qn?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,t.side===hs,h),m===null)return null;Gc.copy(h),Gc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Gc);return p<i.near||p>i.far?null:{distance:p,point:Gc.clone(),object:r}}function Vc(r,t,i,s,l,c,f,h,m,p){r.getVertexPosition(h,Ic),r.getVertexPosition(m,Fc),r.getVertexPosition(p,Bc);const x=xM(r,t,i,s,Ic,Fc,Bc,B_);if(x){const S=new $;Ei.getBarycoord(B_,Ic,Fc,Bc,S),l&&(x.uv=Ei.getInterpolatedAttribute(l,h,m,p,S,new _e)),c&&(x.uv1=Ei.getInterpolatedAttribute(c,h,m,p,S,new _e)),f&&(x.normal=Ei.getInterpolatedAttribute(f,h,m,p,S,new $),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const _={a:h,b:m,c:p,normal:new $,materialIndex:0};Ei.getNormal(Ic,Fc,Bc,_.normal),x.face=_,x.barycoord=S}return x}class SM extends Hn{constructor(t=null,i=1,s=1,l,c,f,h,m,p=Ln,x=Ln,S,_){super(null,f,h,m,p,x,l,c,S,_),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jd=new $,yM=new $,MM=new ue;class Is{constructor(t=new $(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Jd.subVectors(s,i).cross(yM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(Jd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const f=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(f<0||f>1)?null:i.copy(t.start).addScaledVector(l,f)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||MM.getNormalMatrix(t),l=this.coplanarPoint(Jd).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zs=new Sp,EM=new _e(.5,.5),kc=new $;class Mp{constructor(t=new Is,i=new Is,s=new Is,l=new Is,c=new Is,f=new Is){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Wi,s=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],m=c[2],p=c[3],x=c[4],S=c[5],_=c[6],E=c[7],T=c[8],C=c[9],y=c[10],v=c[11],D=c[12],O=c[13],L=c[14],k=c[15];if(l[0].setComponents(p-f,E-x,v-T,k-D).normalize(),l[1].setComponents(p+f,E+x,v+T,k+D).normalize(),l[2].setComponents(p+h,E+S,v+C,k+O).normalize(),l[3].setComponents(p-h,E-S,v-C,k-O).normalize(),s)l[4].setComponents(m,_,y,L).normalize(),l[5].setComponents(p-m,E-_,v-y,k-L).normalize();else if(l[4].setComponents(p-m,E-_,v-y,k-L).normalize(),i===Wi)l[5].setComponents(p+m,E+_,v+y,k+L).normalize();else if(i===cl)l[5].setComponents(m,_,y,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),zs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(t){zs.center.set(0,0,0);const i=EM.distanceTo(t.center);return zs.radius=.7071067811865476+i,zs.applyMatrix4(t.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(kc.x=l.normal.x>0?t.max.x:t.min.x,kc.y=l.normal.y>0?t.max.y:t.min.y,kc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(kc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vv extends Hn{constructor(t=[],i=Vs,s,l,c,f,h,m,p,x){super(t,i,s,l,c,f,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kv extends Hn{constructor(t,i,s,l,c,f,h,m,p){super(t,i,s,l,c,f,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jr extends Hn{constructor(t,i,s=ji,l,c,f,h=Ln,m=Ln,p,x=Ta,S=1){if(x!==Ta&&x!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:i,depth:S};super(_,l,c,f,h,m,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new _p(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class bM extends jr{constructor(t,i=ji,s=Vs,l,c,f=Ln,h=Ln,m,p=Ta){const x={width:t,height:t,depth:1},S=[x,x,x,x,x,x];super(t,t,i,s,l,c,f,h,m,p),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Xv extends Hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Rn extends Ki{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],x=[],S=[];let _=0,E=0;T("z","y","x",-1,-1,s,i,t,f,c,0),T("z","y","x",1,-1,s,i,-t,f,c,1),T("x","z","y",1,1,t,s,i,l,f,2),T("x","z","y",1,-1,t,s,-i,l,f,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Ea(p,3)),this.setAttribute("normal",new Ea(x,3)),this.setAttribute("uv",new Ea(S,2));function T(C,y,v,D,O,L,k,z,I,b,P){const K=L/I,F=k/b,Q=L/2,mt=k/2,St=z/2,W=I+1,U=b+1;let B=0,ct=0;const yt=new $;for(let bt=0;bt<U;bt++){const N=bt*F-mt;for(let J=0;J<W;J++){const Tt=J*K-Q;yt[C]=Tt*D,yt[y]=N*O,yt[v]=St,p.push(yt.x,yt.y,yt.z),yt[C]=0,yt[y]=0,yt[v]=z>0?1:-1,x.push(yt.x,yt.y,yt.z),S.push(J/I),S.push(1-bt/b),B+=1}}for(let bt=0;bt<b;bt++)for(let N=0;N<I;N++){const J=_+N+W*bt,Tt=_+N+W*(bt+1),Ot=_+(N+1)+W*(bt+1),Pt=_+(N+1)+W*bt;m.push(J,Tt,Pt),m.push(Tt,Ot,Pt),ct+=6}h.addGroup(E,ct,P),E+=ct,_+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class fu extends Ki{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,x=m+1,S=t/h,_=i/m,E=[],T=[],C=[],y=[];for(let v=0;v<x;v++){const D=v*_-f;for(let O=0;O<p;O++){const L=O*S-c;T.push(L,-D,0),C.push(0,0,1),y.push(O/h),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let D=0;D<h;D++){const O=D+p*v,L=D+p*(v+1),k=D+1+p*(v+1),z=D+1+p*v;E.push(O,L,z),E.push(L,k,z)}this.setIndex(E),this.setAttribute("position",new Ea(T,3)),this.setAttribute("normal",new Ea(C,3)),this.setAttribute("uv",new Ea(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fu(t.width,t.height,t.widthSegments,t.heightSegments)}}function Zr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];if(H_(l))l.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(H_(l[0])){const c=[];for(let f=0,h=l.length;f<h;f++)c[f]=l[f].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function kn(r){const t={};for(let i=0;i<r.length;i++){const s=Zr(r[i]);for(const l in s)t[l]=s[l]}return t}function H_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function TM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Wv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const AM={clone:Zr,merge:kn};var RM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends Ws{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=RM,this.fragmentShader=wM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zr(t.uniforms),this.uniformsGroups=TM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class CM extends Zi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class DM extends Ws{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=iu,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Aa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class os extends Ws{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=iu,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Aa,this.combine=lp,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class UM extends Ws{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class NM extends Ws{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Yv extends Xn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new be(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const $d=new rn,G_=new $,V_=new $;class LM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mp,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new un(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;G_.setFromMatrixPosition(t.matrixWorld),i.position.copy(G_),V_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(V_),i.updateMatrixWorld(),$d.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix($d,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===cl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply($d)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Xc=new $,Wc=new Kr,Bi=new $;class qv extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Xc,Wc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xc,Wc,Bi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Xc,Wc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xc,Wc,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ls=new $,k_=new _e,X_=new _e;class ui extends qv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=tp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return tp*2*Math.atan(Math.tan(wd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ls.x,ls.y).multiplyScalar(-t/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ls.x,ls.y).multiplyScalar(-t/ls.z)}getViewSize(t,i){return this.getViewBounds(t,k_,X_),i.subVectors(X_,k_)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(wd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class OM extends LM{constructor(){super(new ui(90,1,.5,500)),this.isPointLightShadow=!0}}class PM extends Yv{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new OM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class jv extends qv{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class zM extends Yv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Br=-90,Hr=1;class IM extends Xn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ui(Br,Hr,t,i);l.layers=this.layers,this.add(l);const c=new ui(Br,Hr,t,i);c.layers=this.layers,this.add(c);const f=new ui(Br,Hr,t,i);f.layers=this.layers,this.add(f);const h=new ui(Br,Hr,t,i);h.layers=this.layers,this.add(h);const m=new ui(Br,Hr,t,i);m.layers=this.layers,this.add(m);const p=new ui(Br,Hr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(t===Wi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===cl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,x]=this.children,S=t.getRenderTarget(),_=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,3,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,x),t.setRenderTarget(S,_,E),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class FM extends ui{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const W_=new rn;class BM{constructor(t,i,s=0,l=1/0){this.ray=new Gv(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new vp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ae("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return W_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(W_),this}intersectObject(t,i=!0,s=[]){return np(t,this,s,i),s.sort(Y_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)np(t[l],this,s,i);return s.sort(Y_),s}}function Y_(r,t){return r.distance-t.distance}function np(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,h=c.length;f<h;f++)np(c[f],t,i,!0)}}const Rp=class Rp{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=s,c[3]=l,this}};Rp.prototype.isMatrix2=!0;let q_=Rp;function j_(r,t,i,s){const l=HM(s);switch(i){case Nv:return r*t;case Ov:return r*t/l.components*l.byteLength;case dp:return r*t/l.components*l.byteLength;case ks:return r*t*2/l.components*l.byteLength;case hp:return r*t*2/l.components*l.byteLength;case Lv:return r*t*3/l.components*l.byteLength;case Ni:return r*t*4/l.components*l.byteLength;case pp:return r*t*4/l.components*l.byteLength;case Kc:case Qc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Jc:case $c:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Eh:case Th:return Math.max(r,16)*Math.max(t,8)/4;case Mh:case bh:return Math.max(r,8)*Math.max(t,8)/2;case Ah:case Rh:case Ch:case Dh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case wh:case eu:case Uh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Nh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Lh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Oh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ph:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case zh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ih:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Fh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Bh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Hh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Gh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Vh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case kh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Xh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Wh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Yh:case qh:case jh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Zh:case Kh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case nu:case Qh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function HM(r){switch(r){case fi:case wv:return{byteLength:1,components:1};case ol:case Cv:case ba:return{byteLength:2,components:1};case up:case fp:return{byteLength:2,components:4};case ji:case cp:case Xi:return{byteLength:4,components:1};case Dv:case Uv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:op}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=op);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zv(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function GM(r){const t=new WeakMap;function i(h,m){const p=h.array,x=h.usage,S=p.byteLength,_=r.createBuffer();r.bindBuffer(m,_),r.bufferData(m,p,x),h.onUploadCallback();let E;if(p instanceof Float32Array)E=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?E=r.HALF_FLOAT:E=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=r.SHORT;else if(p instanceof Uint32Array)E=r.UNSIGNED_INT;else if(p instanceof Int32Array)E=r.INT;else if(p instanceof Int8Array)E=r.BYTE;else if(p instanceof Uint8Array)E=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:S}}function s(h,m,p){const x=m.array,S=m.updateRanges;if(r.bindBuffer(p,h),S.length===0)r.bufferSubData(p,0,x);else{S.sort((E,T)=>E.start-T.start);let _=0;for(let E=1;E<S.length;E++){const T=S[_],C=S[E];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++_,S[_]=C)}S.length=_+1;for(let E=0,T=S.length;E<T;E++){const C=S[E];r.bufferSubData(p,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=t.get(h);(!x||x.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var VM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kM=`#ifdef USE_ALPHAHASH
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
#endif`,XM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jM=`#ifdef USE_AOMAP
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
#endif`,ZM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KM=`#ifdef USE_BATCHING
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
#endif`,QM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,JM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$M=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eE=`#ifdef USE_IRIDESCENCE
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
#endif`,nE=`#ifdef USE_BUMPMAP
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
#endif`,iE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,aE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,uE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,fE=`#define PI 3.141592653589793
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
} // validated`,dE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hE=`vec3 transformedNormal = objectNormal;
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
#endif`,pE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_E=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vE="gl_FragColor = linearToOutputTexel( gl_FragColor );",xE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,SE=`#ifdef USE_ENVMAP
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
#endif`,yE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ME=`#ifdef USE_ENVMAP
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
#endif`,EE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bE=`#ifdef USE_ENVMAP
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
#endif`,TE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CE=`#ifdef USE_GRADIENTMAP
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
}`,DE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LE=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,OE=`#ifdef USE_ENVMAP
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
#endif`,PE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BE=`PhysicalMaterial material;
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
#endif`,HE=`uniform sampler2D dfgLUT;
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
}`,GE=`
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
#endif`,VE=`#if defined( RE_IndirectDiffuse )
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
#endif`,kE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XE=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,WE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,JE=`#if defined( USE_POINTS_UV )
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
#endif`,$E=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ib=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ab=`#ifdef USE_MORPHTARGETS
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
#endif`,sb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ob=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ub=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fb=`#ifdef USE_NORMALMAP
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
#endif`,db=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_b=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ab=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rb=`float getShadowMask() {
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
}`,wb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cb=`#ifdef USE_SKINNING
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
#endif`,Db=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ub=`#ifdef USE_SKINNING
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
#endif`,Nb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ob=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zb=`#ifdef USE_TRANSMISSION
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
#endif`,Ib=`#ifdef USE_TRANSMISSION
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
#endif`,Fb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kb=`uniform sampler2D t2D;
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
}`,Xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jb=`#include <common>
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
}`,Zb=`#if DEPTH_PACKING == 3200
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
}`,Kb=`#define DISTANCE
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
}`,Qb=`#define DISTANCE
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
}`,Jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$b=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`uniform float scale;
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
}`,e1=`uniform vec3 diffuse;
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
}`,n1=`#include <common>
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
}`,i1=`uniform vec3 diffuse;
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
}`,a1=`#define LAMBERT
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
}`,s1=`#define LAMBERT
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
}`,r1=`#define MATCAP
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
}`,o1=`#define MATCAP
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
}`,l1=`#define NORMAL
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
}`,c1=`#define NORMAL
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
}`,u1=`#define PHONG
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
}`,f1=`#define PHONG
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
}`,d1=`#define STANDARD
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
}`,h1=`#define STANDARD
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
}`,p1=`#define TOON
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
}`,m1=`#define TOON
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
}`,g1=`uniform float size;
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
}`,_1=`uniform vec3 diffuse;
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
}`,v1=`#include <common>
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
}`,x1=`uniform vec3 color;
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
}`,S1=`uniform float rotation;
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
}`,y1=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:VM,alphahash_pars_fragment:kM,alphamap_fragment:XM,alphamap_pars_fragment:WM,alphatest_fragment:YM,alphatest_pars_fragment:qM,aomap_fragment:jM,aomap_pars_fragment:ZM,batching_pars_vertex:KM,batching_vertex:QM,begin_vertex:JM,beginnormal_vertex:$M,bsdfs:tE,iridescence_fragment:eE,bumpmap_pars_fragment:nE,clipping_planes_fragment:iE,clipping_planes_pars_fragment:aE,clipping_planes_pars_vertex:sE,clipping_planes_vertex:rE,color_fragment:oE,color_pars_fragment:lE,color_pars_vertex:cE,color_vertex:uE,common:fE,cube_uv_reflection_fragment:dE,defaultnormal_vertex:hE,displacementmap_pars_vertex:pE,displacementmap_vertex:mE,emissivemap_fragment:gE,emissivemap_pars_fragment:_E,colorspace_fragment:vE,colorspace_pars_fragment:xE,envmap_fragment:SE,envmap_common_pars_fragment:yE,envmap_pars_fragment:ME,envmap_pars_vertex:EE,envmap_physical_pars_fragment:OE,envmap_vertex:bE,fog_vertex:TE,fog_pars_vertex:AE,fog_fragment:RE,fog_pars_fragment:wE,gradientmap_pars_fragment:CE,lightmap_pars_fragment:DE,lights_lambert_fragment:UE,lights_lambert_pars_fragment:NE,lights_pars_begin:LE,lights_toon_fragment:PE,lights_toon_pars_fragment:zE,lights_phong_fragment:IE,lights_phong_pars_fragment:FE,lights_physical_fragment:BE,lights_physical_pars_fragment:HE,lights_fragment_begin:GE,lights_fragment_maps:VE,lights_fragment_end:kE,lightprobes_pars_fragment:XE,logdepthbuf_fragment:WE,logdepthbuf_pars_fragment:YE,logdepthbuf_pars_vertex:qE,logdepthbuf_vertex:jE,map_fragment:ZE,map_pars_fragment:KE,map_particle_fragment:QE,map_particle_pars_fragment:JE,metalnessmap_fragment:$E,metalnessmap_pars_fragment:tb,morphinstance_vertex:eb,morphcolor_vertex:nb,morphnormal_vertex:ib,morphtarget_pars_vertex:ab,morphtarget_vertex:sb,normal_fragment_begin:rb,normal_fragment_maps:ob,normal_pars_fragment:lb,normal_pars_vertex:cb,normal_vertex:ub,normalmap_pars_fragment:fb,clearcoat_normal_fragment_begin:db,clearcoat_normal_fragment_maps:hb,clearcoat_pars_fragment:pb,iridescence_pars_fragment:mb,opaque_fragment:gb,packing:_b,premultiplied_alpha_fragment:vb,project_vertex:xb,dithering_fragment:Sb,dithering_pars_fragment:yb,roughnessmap_fragment:Mb,roughnessmap_pars_fragment:Eb,shadowmap_pars_fragment:bb,shadowmap_pars_vertex:Tb,shadowmap_vertex:Ab,shadowmask_pars_fragment:Rb,skinbase_vertex:wb,skinning_pars_vertex:Cb,skinning_vertex:Db,skinnormal_vertex:Ub,specularmap_fragment:Nb,specularmap_pars_fragment:Lb,tonemapping_fragment:Ob,tonemapping_pars_fragment:Pb,transmission_fragment:zb,transmission_pars_fragment:Ib,uv_pars_fragment:Fb,uv_pars_vertex:Bb,uv_vertex:Hb,worldpos_vertex:Gb,background_vert:Vb,background_frag:kb,backgroundCube_vert:Xb,backgroundCube_frag:Wb,cube_vert:Yb,cube_frag:qb,depth_vert:jb,depth_frag:Zb,distance_vert:Kb,distance_frag:Qb,equirect_vert:Jb,equirect_frag:$b,linedashed_vert:t1,linedashed_frag:e1,meshbasic_vert:n1,meshbasic_frag:i1,meshlambert_vert:a1,meshlambert_frag:s1,meshmatcap_vert:r1,meshmatcap_frag:o1,meshnormal_vert:l1,meshnormal_frag:c1,meshphong_vert:u1,meshphong_frag:f1,meshphysical_vert:d1,meshphysical_frag:h1,meshtoon_vert:p1,meshtoon_frag:m1,points_vert:g1,points_frag:_1,shadow_vert:v1,shadow_frag:x1,sprite_vert:S1,sprite_frag:y1},Gt={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Gi={basic:{uniforms:kn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:kn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new be(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:kn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:kn([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:kn([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new be(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:kn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:kn([Gt.points,Gt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:kn([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:kn([Gt.common,Gt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:kn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:kn([Gt.sprite,Gt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:kn([Gt.common,Gt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:kn([Gt.lights,Gt.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Gi.physical={uniforms:kn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const Yc={r:0,b:0,g:0},M1=new rn,Kv=new ue;Kv.set(-1,0,0,0,1,0,0,0,1);function E1(r,t,i,s,l,c){const f=new be(0);let h=l===!0?0:1,m,p,x=null,S=0,_=null;function E(D){let O=D.isScene===!0?D.background:null;if(O&&O.isTexture){const L=D.backgroundBlurriness>0;O=t.get(O,L)}return O}function T(D){let O=!1;const L=E(D);L===null?y(f,h):L&&L.isColor&&(y(L,1),O=!0);const k=r.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,c):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||O)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(D,O){const L=E(O);L&&(L.isCubeTexture||L.mapping===uu)?(p===void 0&&(p=new cn(new Rn(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:Zr(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(k,z,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=L,p.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(M1.makeRotationFromEuler(O.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Kv),p.material.toneMapped=Re.getTransfer(L.colorSpace)!==ke,(x!==L||S!==L.version||_!==r.toneMapping)&&(p.material.needsUpdate=!0,x=L,S=L.version,_=r.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new cn(new fu(2,2),new Zi({name:"BackgroundMaterial",uniforms:Zr(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,m.material.toneMapped=Re.getTransfer(L.colorSpace)!==ke,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(x!==L||S!==L.version||_!==r.toneMapping)&&(m.material.needsUpdate=!0,x=L,S=L.version,_=r.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function y(D,O){D.getRGB(Yc,Wv(r)),i.buffers.color.setClear(Yc.r,Yc.g,Yc.b,O,c)}function v(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(D,O=1){f.set(D),h=O,y(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,y(f,h)},render:T,addToRenderList:C,dispose:v}}function b1(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=_(null);let c=l,f=!1;function h(F,Q,mt,St,W){let U=!1;const B=S(F,St,mt,Q);c!==B&&(c=B,p(c.object)),U=E(F,St,mt,W),U&&T(F,St,mt,W),W!==null&&t.update(W,r.ELEMENT_ARRAY_BUFFER),(U||f)&&(f=!1,L(F,Q,mt,St),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function m(){return r.createVertexArray()}function p(F){return r.bindVertexArray(F)}function x(F){return r.deleteVertexArray(F)}function S(F,Q,mt,St){const W=St.wireframe===!0;let U=s[Q.id];U===void 0&&(U={},s[Q.id]=U);const B=F.isInstancedMesh===!0?F.id:0;let ct=U[B];ct===void 0&&(ct={},U[B]=ct);let yt=ct[mt.id];yt===void 0&&(yt={},ct[mt.id]=yt);let bt=yt[W];return bt===void 0&&(bt=_(m()),yt[W]=bt),bt}function _(F){const Q=[],mt=[],St=[];for(let W=0;W<i;W++)Q[W]=0,mt[W]=0,St[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:mt,attributeDivisors:St,object:F,attributes:{},index:null}}function E(F,Q,mt,St){const W=c.attributes,U=Q.attributes;let B=0;const ct=mt.getAttributes();for(const yt in ct)if(ct[yt].location>=0){const N=W[yt];let J=U[yt];if(J===void 0&&(yt==="instanceMatrix"&&F.instanceMatrix&&(J=F.instanceMatrix),yt==="instanceColor"&&F.instanceColor&&(J=F.instanceColor)),N===void 0||N.attribute!==J||J&&N.data!==J.data)return!0;B++}return c.attributesNum!==B||c.index!==St}function T(F,Q,mt,St){const W={},U=Q.attributes;let B=0;const ct=mt.getAttributes();for(const yt in ct)if(ct[yt].location>=0){let N=U[yt];N===void 0&&(yt==="instanceMatrix"&&F.instanceMatrix&&(N=F.instanceMatrix),yt==="instanceColor"&&F.instanceColor&&(N=F.instanceColor));const J={};J.attribute=N,N&&N.data&&(J.data=N.data),W[yt]=J,B++}c.attributes=W,c.attributesNum=B,c.index=St}function C(){const F=c.newAttributes;for(let Q=0,mt=F.length;Q<mt;Q++)F[Q]=0}function y(F){v(F,0)}function v(F,Q){const mt=c.newAttributes,St=c.enabledAttributes,W=c.attributeDivisors;mt[F]=1,St[F]===0&&(r.enableVertexAttribArray(F),St[F]=1),W[F]!==Q&&(r.vertexAttribDivisor(F,Q),W[F]=Q)}function D(){const F=c.newAttributes,Q=c.enabledAttributes;for(let mt=0,St=Q.length;mt<St;mt++)Q[mt]!==F[mt]&&(r.disableVertexAttribArray(mt),Q[mt]=0)}function O(F,Q,mt,St,W,U,B){B===!0?r.vertexAttribIPointer(F,Q,mt,W,U):r.vertexAttribPointer(F,Q,mt,St,W,U)}function L(F,Q,mt,St){C();const W=St.attributes,U=mt.getAttributes(),B=Q.defaultAttributeValues;for(const ct in U){const yt=U[ct];if(yt.location>=0){let bt=W[ct];if(bt===void 0&&(ct==="instanceMatrix"&&F.instanceMatrix&&(bt=F.instanceMatrix),ct==="instanceColor"&&F.instanceColor&&(bt=F.instanceColor)),bt!==void 0){const N=bt.normalized,J=bt.itemSize,Tt=t.get(bt);if(Tt===void 0)continue;const Ot=Tt.buffer,Pt=Tt.type,lt=Tt.bytesPerElement,wt=Pt===r.INT||Pt===r.UNSIGNED_INT||bt.gpuType===cp;if(bt.isInterleavedBufferAttribute){const Lt=bt.data,kt=Lt.stride,ae=bt.offset;if(Lt.isInstancedInterleavedBuffer){for(let $t=0;$t<yt.locationSize;$t++)v(yt.location+$t,Lt.meshPerAttribute);F.isInstancedMesh!==!0&&St._maxInstanceCount===void 0&&(St._maxInstanceCount=Lt.meshPerAttribute*Lt.count)}else for(let $t=0;$t<yt.locationSize;$t++)y(yt.location+$t);r.bindBuffer(r.ARRAY_BUFFER,Ot);for(let $t=0;$t<yt.locationSize;$t++)O(yt.location+$t,J/yt.locationSize,Pt,N,kt*lt,(ae+J/yt.locationSize*$t)*lt,wt)}else{if(bt.isInstancedBufferAttribute){for(let Lt=0;Lt<yt.locationSize;Lt++)v(yt.location+Lt,bt.meshPerAttribute);F.isInstancedMesh!==!0&&St._maxInstanceCount===void 0&&(St._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Lt=0;Lt<yt.locationSize;Lt++)y(yt.location+Lt);r.bindBuffer(r.ARRAY_BUFFER,Ot);for(let Lt=0;Lt<yt.locationSize;Lt++)O(yt.location+Lt,J/yt.locationSize,Pt,N,J*lt,J/yt.locationSize*Lt*lt,wt)}}else if(B!==void 0){const N=B[ct];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(yt.location,N);break;case 3:r.vertexAttrib3fv(yt.location,N);break;case 4:r.vertexAttrib4fv(yt.location,N);break;default:r.vertexAttrib1fv(yt.location,N)}}}}D()}function k(){P();for(const F in s){const Q=s[F];for(const mt in Q){const St=Q[mt];for(const W in St){const U=St[W];for(const B in U)x(U[B].object),delete U[B];delete St[W]}}delete s[F]}}function z(F){if(s[F.id]===void 0)return;const Q=s[F.id];for(const mt in Q){const St=Q[mt];for(const W in St){const U=St[W];for(const B in U)x(U[B].object),delete U[B];delete St[W]}}delete s[F.id]}function I(F){for(const Q in s){const mt=s[Q];for(const St in mt){const W=mt[St];if(W[F.id]===void 0)continue;const U=W[F.id];for(const B in U)x(U[B].object),delete U[B];delete W[F.id]}}}function b(F){for(const Q in s){const mt=s[Q],St=F.isInstancedMesh===!0?F.id:0,W=mt[St];if(W!==void 0){for(const U in W){const B=W[U];for(const ct in B)x(B[ct].object),delete B[ct];delete W[U]}delete mt[St],Object.keys(mt).length===0&&delete s[Q]}}}function P(){K(),f=!0,c!==l&&(c=l,p(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:P,resetDefaultState:K,dispose:k,releaseStatesOfGeometry:z,releaseStatesOfObject:b,releaseStatesOfProgram:I,initAttributes:C,enableAttribute:y,disableUnusedAttributes:D}}function T1(r,t,i){let s;function l(m){s=m}function c(m,p){r.drawArrays(s,m,p),i.update(p,s,1)}function f(m,p,x){x!==0&&(r.drawArraysInstanced(s,m,p,x),i.update(p,s,x))}function h(m,p,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,x);let _=0;for(let E=0;E<x;E++)_+=p[E];i.update(_,s,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function A1(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(I){return!(I!==Ni&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const b=I===ba&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==fi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Xi&&!b)}function m(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(oe("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const S=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&_===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),O=r.getParameter(r.MAX_VARYING_VECTORS),L=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),k=r.getParameter(r.MAX_SAMPLES),z=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:S,reversedDepthBuffer:_,maxTextures:E,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:D,maxVaryings:O,maxFragmentUniforms:L,maxSamples:k,samples:z}}function R1(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new Is,h=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,_){const E=S.length!==0||_||s!==0||l;return l=_,s=S.length,E},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,_){i=x(S,_,0)},this.setState=function(S,_,E){const T=S.clippingPlanes,C=S.clipIntersection,y=S.clipShadows,v=r.get(S);if(!l||T===null||T.length===0||c&&!y)c?x(null):p();else{const D=c?0:s,O=D*4;let L=v.clippingState||null;m.value=L,L=x(T,_,O,E);for(let k=0;k!==O;++k)L[k]=i[k];v.clippingState=L,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function x(S,_,E,T){const C=S!==null?S.length:0;let y=null;if(C!==0){if(y=m.value,T!==!0||y===null){const v=E+C*4,D=_.matrixWorldInverse;h.getNormalMatrix(D),(y===null||y.length<v)&&(y=new Float32Array(v));for(let O=0,L=E;O!==C;++O,L+=4)f.copy(S[O]).applyMatrix4(D,h),f.normal.toArray(y,L),y[L+3]=f.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,y}}const fs=4,Z_=[.125,.215,.35,.446,.526,.582],Bs=20,w1=256,tl=new jv,K_=new be;let th=null,eh=0,nh=0,ih=!1;const C1=new $;class Q_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=C1}=c;th=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(th,eh,nh),this._renderer.xr.enabled=ih,t.scissorTest=!1,Gr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Vs||t.mapping===qr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),th=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:ba,format:Ni,colorSpace:au,depthBuffer:!1},l=J_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=J_(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=D1(c)),this._blurMaterial=N1(c,t,i),this._ggxMaterial=U1(c,t,i)}return l}_compileMaterial(t){const i=new cn(new Ki,t);this._renderer.compile(i,tl)}_sceneToCubeUV(t,i,s,l,c){const m=new ui(90,1,i,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],S=this._renderer,_=S.autoClear,E=S.toneMapping;S.getClearColor(K_),S.toneMapping=Yi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new cn(new Rn,new yp({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let v=!1;const D=t.background;D?D.isColor&&(y.color.copy(D),t.background=null,v=!0):(y.color.copy(K_),v=!0);for(let O=0;O<6;O++){const L=O%3;L===0?(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[O],c.y,c.z)):L===1?(m.up.set(0,0,p[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[O],c.z)):(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[O]));const k=this._cubeSize;Gr(l,L*k,O>2?k:0,k,k),S.setRenderTarget(l),v&&S.render(C,m),S.render(t,m)}S.toneMapping=E,S.autoClear=_,t.background=D}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Vs||t.mapping===qr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=tv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Gr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,tl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[s];h.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),S=Math.sqrt(p*p-x*x),_=0+p*1.25,E=S*_,{_lodMax:T}=this,C=this._sizeLods[s],y=3*C*(s>T-fs?s-T+fs:0),v=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=E,m.mipInt.value=T-i,Gr(c,y,v,3*C,2*C),l.setRenderTarget(c),l.render(h,tl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,Gr(t,y,v,3*C,2*C),l.setRenderTarget(t),l.render(h,tl)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ae("blur direction must be either latitudinal or longitudinal!");const x=3,S=this._lodMeshes[l];S.material=p;const _=p.uniforms,E=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Bs-1),C=c/T,y=isFinite(c)?1+Math.floor(x*C):Bs;y>Bs&&oe(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Bs}`);const v=[];let D=0;for(let I=0;I<Bs;++I){const b=I/C,P=Math.exp(-b*b/2);v.push(P),I===0?D+=P:I<y&&(D+=2*P)}for(let I=0;I<v.length;I++)v[I]=v[I]/D;_.envMap.value=t.texture,_.samples.value=y,_.weights.value=v,_.latitudinal.value=f==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:O}=this;_.dTheta.value=T,_.mipInt.value=O-s;const L=this._sizeLods[l],k=3*L*(l>O-fs?l-O+fs:0),z=4*(this._cubeSize-L);Gr(i,k,z,3*L,2*L),m.setRenderTarget(i),m.render(S,tl)}}function D1(r){const t=[],i=[],s=[];let l=r;const c=r-fs+1+Z_.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);t.push(h);let m=1/h;f>r-fs?m=Z_[f-r+fs-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),x=-p,S=1+p,_=[x,x,S,x,S,S,x,x,S,S,x,S],E=6,T=6,C=3,y=2,v=1,D=new Float32Array(C*T*E),O=new Float32Array(y*T*E),L=new Float32Array(v*T*E);for(let z=0;z<E;z++){const I=z%3*2/3-1,b=z>2?0:-1,P=[I,b,0,I+2/3,b,0,I+2/3,b+1,0,I,b,0,I+2/3,b+1,0,I,b+1,0];D.set(P,C*T*z),O.set(_,y*T*z);const K=[z,z,z,z,z,z];L.set(K,v*T*z)}const k=new Ki;k.setAttribute("position",new Li(D,C)),k.setAttribute("uv",new Li(O,y)),k.setAttribute("faceIndex",new Li(L,v)),s.push(new cn(k,null)),l>fs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function J_(r,t,i){const s=new qi(r,t,i);return s.texture.mapping=uu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Gr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function U1(r,t,i){return new Zi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:w1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:du(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function N1(r,t,i){const s=new Float32Array(Bs),l=new $(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:du(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function $_(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:du(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function tv(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function du(){return`

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
	`}class Qv extends qi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Vv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Rn(5,5,5),c=new Zi({name:"CubemapFromEquirect",uniforms:Zr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Qn,blending:ya});c.uniforms.tEquirect.value=i;const f=new cn(l,c),h=i.minFilter;return i.minFilter===Hs&&(i.minFilter=Bn),new IM(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}function L1(r){let t=new WeakMap,i=new WeakMap,s=null;function l(_,E=!1){return _==null?null:E?f(_):c(_)}function c(_){if(_&&_.isTexture){const E=_.mapping;if(E===Td||E===Ad)if(t.has(_)){const T=t.get(_).texture;return h(T,_.mapping)}else{const T=_.image;if(T&&T.height>0){const C=new Qv(T.height);return C.fromEquirectangularTexture(r,_),t.set(_,C),_.addEventListener("dispose",p),h(C.texture,_.mapping)}else return null}}return _}function f(_){if(_&&_.isTexture){const E=_.mapping,T=E===Td||E===Ad,C=E===Vs||E===qr;if(T||C){let y=i.get(_);const v=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==v)return s===null&&(s=new Q_(r)),y=T?s.fromEquirectangular(_,y):s.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),y.texture;if(y!==void 0)return y.texture;{const D=_.image;return T&&D&&D.height>0||C&&D&&m(D)?(s===null&&(s=new Q_(r)),y=T?s.fromEquirectangular(_):s.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),_.addEventListener("dispose",x),y.texture):null}}}return _}function h(_,E){return E===Td?_.mapping=Vs:E===Ad&&(_.mapping=qr),_}function m(_){let E=0;const T=6;for(let C=0;C<T;C++)_[C]!==void 0&&E++;return E===T}function p(_){const E=_.target;E.removeEventListener("dispose",p);const T=t.get(E);T!==void 0&&(t.delete(E),T.dispose())}function x(_){const E=_.target;E.removeEventListener("dispose",x);const T=i.get(E);T!==void 0&&(i.delete(E),T.dispose())}function S(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:S}}function O1(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&$h("WebGLRenderer: "+s+" extension not supported."),l}}}function P1(r,t,i,s){const l={},c=new WeakMap;function f(S){const _=S.target;_.index!==null&&t.remove(_.index);for(const T in _.attributes)t.remove(_.attributes[T]);_.removeEventListener("dispose",f),delete l[_.id];const E=c.get(_);E&&(t.remove(E),c.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(S,_){return l[_.id]===!0||(_.addEventListener("dispose",f),l[_.id]=!0,i.memory.geometries++),_}function m(S){const _=S.attributes;for(const E in _)t.update(_[E],r.ARRAY_BUFFER)}function p(S){const _=[],E=S.index,T=S.attributes.position;let C=0;if(T===void 0)return;if(E!==null){const D=E.array;C=E.version;for(let O=0,L=D.length;O<L;O+=3){const k=D[O+0],z=D[O+1],I=D[O+2];_.push(k,z,z,I,I,k)}}else{const D=T.array;C=T.version;for(let O=0,L=D.length/3-1;O<L;O+=3){const k=O+0,z=O+1,I=O+2;_.push(k,z,z,I,I,k)}}const y=new(T.count>=65535?Bv:Fv)(_,1);y.version=C;const v=c.get(S);v&&t.remove(v),c.set(S,y)}function x(S){const _=c.get(S);if(_){const E=S.index;E!==null&&_.version<E.version&&p(S)}else p(S);return c.get(S)}return{get:h,update:m,getWireframeAttribute:x}}function z1(r,t,i){let s;function l(S){s=S}let c,f;function h(S){c=S.type,f=S.bytesPerElement}function m(S,_){r.drawElements(s,_,c,S*f),i.update(_,s,1)}function p(S,_,E){E!==0&&(r.drawElementsInstanced(s,_,c,S*f,E),i.update(_,s,E))}function x(S,_,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,_,0,c,S,0,E);let C=0;for(let y=0;y<E;y++)C+=_[y];i.update(C,s,1)}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x}function I1(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:Ae("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function F1(r,t,i){const s=new WeakMap,l=new un;function c(f,h,m){const p=f.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,S=x!==void 0?x.length:0;let _=s.get(h);if(_===void 0||_.count!==S){let K=function(){b.dispose(),s.delete(h),h.removeEventListener("dispose",K)};var E=K;_!==void 0&&_.texture.dispose();const T=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let L=0;T===!0&&(L=1),C===!0&&(L=2),y===!0&&(L=3);let k=h.attributes.position.count*L,z=1;k>t.maxTextureSize&&(z=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const I=new Float32Array(k*z*4*S),b=new zv(I,k,z,S);b.type=Xi,b.needsUpdate=!0;const P=L*4;for(let F=0;F<S;F++){const Q=v[F],mt=D[F],St=O[F],W=k*z*4*F;for(let U=0;U<Q.count;U++){const B=U*P;T===!0&&(l.fromBufferAttribute(Q,U),I[W+B+0]=l.x,I[W+B+1]=l.y,I[W+B+2]=l.z,I[W+B+3]=0),C===!0&&(l.fromBufferAttribute(mt,U),I[W+B+4]=l.x,I[W+B+5]=l.y,I[W+B+6]=l.z,I[W+B+7]=0),y===!0&&(l.fromBufferAttribute(St,U),I[W+B+8]=l.x,I[W+B+9]=l.y,I[W+B+10]=l.z,I[W+B+11]=St.itemSize===4?l.w:1)}}_={count:S,texture:b,size:new _e(k,z)},s.set(h,_),h.addEventListener("dispose",K)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const C=h.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:c}}function B1(r,t,i,s,l){let c=new WeakMap;function f(p){const x=l.render.frame,S=p.geometry,_=t.get(p,S);if(c.get(_)!==x&&(t.update(_),c.set(_,x)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==x&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,x))),p.isSkinnedMesh){const E=p.skeleton;c.get(E)!==x&&(E.update(),c.set(E,x))}return _}function h(){c=new WeakMap}function m(p){const x=p.target;x.removeEventListener("dispose",m),s.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:f,dispose:h}}const H1={[Sv]:"LINEAR_TONE_MAPPING",[yv]:"REINHARD_TONE_MAPPING",[Mv]:"CINEON_TONE_MAPPING",[Ev]:"ACES_FILMIC_TONE_MAPPING",[Tv]:"AGX_TONE_MAPPING",[Av]:"NEUTRAL_TONE_MAPPING",[bv]:"CUSTOM_TONE_MAPPING"};function G1(r,t,i,s,l){const c=new qi(t,i,{type:r,depthBuffer:s,stencilBuffer:l,depthTexture:s?new jr(t,i):void 0}),f=new qi(t,i,{type:ba,depthBuffer:!1,stencilBuffer:!1}),h=new Ki;h.setAttribute("position",new Ea([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ea([0,2,0,0,2,0],2));const m=new CM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new cn(h,m),x=new jv(-1,1,1,-1,0,1);let S=null,_=null,E=!1,T,C=null,y=[],v=!1;this.setSize=function(D,O){c.setSize(D,O),f.setSize(D,O);for(let L=0;L<y.length;L++){const k=y[L];k.setSize&&k.setSize(D,O)}},this.setEffects=function(D){y=D,v=y.length>0&&y[0].isRenderPass===!0;const O=c.width,L=c.height;for(let k=0;k<y.length;k++){const z=y[k];z.setSize&&z.setSize(O,L)}},this.begin=function(D,O){if(E||D.toneMapping===Yi&&y.length===0)return!1;if(C=O,O!==null){const L=O.width,k=O.height;(c.width!==L||c.height!==k)&&this.setSize(L,k)}return v===!1&&D.setRenderTarget(c),T=D.toneMapping,D.toneMapping=Yi,!0},this.hasRenderPass=function(){return v},this.end=function(D,O){D.toneMapping=T,E=!0;let L=c,k=f;for(let z=0;z<y.length;z++){const I=y[z];if(I.enabled!==!1&&(I.render(D,k,L,O),I.needsSwap!==!1)){const b=L;L=k,k=b}}if(S!==D.outputColorSpace||_!==D.toneMapping){S=D.outputColorSpace,_=D.toneMapping,m.defines={},Re.getTransfer(S)===ke&&(m.defines.SRGB_TRANSFER="");const z=H1[_];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,D.setRenderTarget(C),D.render(p,x),C=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const Jv=new Hn,ip=new jr(1,1),$v=new zv,tx=new aM,ex=new Vv,ev=[],nv=[],iv=new Float32Array(16),av=new Float32Array(9),sv=new Float32Array(4);function Qr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=ev[l];if(c===void 0&&(c=new Float32Array(l),ev[l]=c),t!==0){s.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,r[f].toArray(c,h)}return c}function En(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function bn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function hu(r,t){let i=nv[t];i===void 0&&(i=new Int32Array(t),nv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function V1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function k1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;r.uniform2fv(this.addr,t),bn(i,t)}}function X1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(En(i,t))return;r.uniform3fv(this.addr,t),bn(i,t)}}function W1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;r.uniform4fv(this.addr,t),bn(i,t)}}function Y1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(En(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),bn(i,t)}else{if(En(i,s))return;sv.set(s),r.uniformMatrix2fv(this.addr,!1,sv),bn(i,s)}}function q1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(En(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),bn(i,t)}else{if(En(i,s))return;av.set(s),r.uniformMatrix3fv(this.addr,!1,av),bn(i,s)}}function j1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(En(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),bn(i,t)}else{if(En(i,s))return;iv.set(s),r.uniformMatrix4fv(this.addr,!1,iv),bn(i,s)}}function Z1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function K1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;r.uniform2iv(this.addr,t),bn(i,t)}}function Q1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(En(i,t))return;r.uniform3iv(this.addr,t),bn(i,t)}}function J1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;r.uniform4iv(this.addr,t),bn(i,t)}}function $1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function tT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;r.uniform2uiv(this.addr,t),bn(i,t)}}function eT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(En(i,t))return;r.uniform3uiv(this.addr,t),bn(i,t)}}function nT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;r.uniform4uiv(this.addr,t),bn(i,t)}}function iT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(ip.compareFunction=i.isReversedDepthBuffer()?gp:mp,c=ip):c=Jv,i.setTexture2D(t||c,l)}function aT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||tx,l)}function sT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||ex,l)}function rT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||$v,l)}function oT(r){switch(r){case 5126:return V1;case 35664:return k1;case 35665:return X1;case 35666:return W1;case 35674:return Y1;case 35675:return q1;case 35676:return j1;case 5124:case 35670:return Z1;case 35667:case 35671:return K1;case 35668:case 35672:return Q1;case 35669:case 35673:return J1;case 5125:return $1;case 36294:return tT;case 36295:return eT;case 36296:return nT;case 35678:case 36198:case 36298:case 36306:case 35682:return iT;case 35679:case 36299:case 36307:return aT;case 35680:case 36300:case 36308:case 36293:return sT;case 36289:case 36303:case 36311:case 36292:return rT}}function lT(r,t){r.uniform1fv(this.addr,t)}function cT(r,t){const i=Qr(t,this.size,2);r.uniform2fv(this.addr,i)}function uT(r,t){const i=Qr(t,this.size,3);r.uniform3fv(this.addr,i)}function fT(r,t){const i=Qr(t,this.size,4);r.uniform4fv(this.addr,i)}function dT(r,t){const i=Qr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function hT(r,t){const i=Qr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function pT(r,t){const i=Qr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function mT(r,t){r.uniform1iv(this.addr,t)}function gT(r,t){r.uniform2iv(this.addr,t)}function _T(r,t){r.uniform3iv(this.addr,t)}function vT(r,t){r.uniform4iv(this.addr,t)}function xT(r,t){r.uniform1uiv(this.addr,t)}function ST(r,t){r.uniform2uiv(this.addr,t)}function yT(r,t){r.uniform3uiv(this.addr,t)}function MT(r,t){r.uniform4uiv(this.addr,t)}function ET(r,t,i){const s=this.cache,l=t.length,c=hu(i,l);En(s,c)||(r.uniform1iv(this.addr,c),bn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=ip:f=Jv;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||f,c[h])}function bT(r,t,i){const s=this.cache,l=t.length,c=hu(i,l);En(s,c)||(r.uniform1iv(this.addr,c),bn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||tx,c[f])}function TT(r,t,i){const s=this.cache,l=t.length,c=hu(i,l);En(s,c)||(r.uniform1iv(this.addr,c),bn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||ex,c[f])}function AT(r,t,i){const s=this.cache,l=t.length,c=hu(i,l);En(s,c)||(r.uniform1iv(this.addr,c),bn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||$v,c[f])}function RT(r){switch(r){case 5126:return lT;case 35664:return cT;case 35665:return uT;case 35666:return fT;case 35674:return dT;case 35675:return hT;case 35676:return pT;case 5124:case 35670:return mT;case 35667:case 35671:return gT;case 35668:case 35672:return _T;case 35669:case 35673:return vT;case 5125:return xT;case 36294:return ST;case 36295:return yT;case 36296:return MT;case 35678:case 36198:case 36298:case 36306:case 35682:return ET;case 35679:case 36299:case 36307:return bT;case 35680:case 36300:case 36308:case 36293:return TT;case 36289:case 36303:case 36311:case 36292:return AT}}class wT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=oT(i.type)}}class CT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=RT(i.type)}}class DT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const ah=/(\w+)(\])?(\[|\.)?/g;function rv(r,t){r.seq.push(t),r.map[t.id]=t}function UT(r,t,i){const s=r.name,l=s.length;for(ah.lastIndex=0;;){const c=ah.exec(s),f=ah.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){rv(i,p===void 0?new wT(h,r,t):new CT(h,r,t));break}else{let S=i.map[h];S===void 0&&(S=new DT(h),rv(i,S)),i=S}}}class tu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const h=t.getActiveUniform(i,f),m=t.getUniformLocation(i,h.name);UT(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function ov(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const NT=37297;let LT=0;function OT(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const lv=new ue;function PT(r){Re._getMatrix(lv,Re.workingColorSpace,r);const t=`mat3( ${lv.elements.map(i=>i.toFixed(4))} )`;switch(Re.getTransfer(r)){case su:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function cv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+OT(r.getShaderSource(t),h)}else return c}function zT(r,t){const i=PT(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const IT={[Sv]:"Linear",[yv]:"Reinhard",[Mv]:"Cineon",[Ev]:"ACESFilmic",[Tv]:"AgX",[Av]:"Neutral",[bv]:"Custom"};function FT(r,t){const i=IT[t];return i===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const qc=new $;function BT(){Re.getLuminanceCoefficients(qc);const r=qc.x.toFixed(4),t=qc.y.toFixed(4),i=qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function GT(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function VT(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return i}function al(r){return r!==""}function uv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const kT=/^[ \t]*#include +<([\w\d./]+)>/gm;function ap(r){return r.replace(kT,WT)}const XT=new Map;function WT(r,t){let i=me[t];if(i===void 0){const s=XT.get(t);if(s!==void 0)i=me[s],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return ap(i)}const YT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dv(r){return r.replace(YT,qT)}function qT(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function hv(r){let t=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const jT={[Zc]:"SHADOWMAP_TYPE_PCF",[il]:"SHADOWMAP_TYPE_VSM"};function ZT(r){return jT[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const KT={[Vs]:"ENVMAP_TYPE_CUBE",[qr]:"ENVMAP_TYPE_CUBE",[uu]:"ENVMAP_TYPE_CUBE_UV"};function QT(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":KT[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const JT={[qr]:"ENVMAP_MODE_REFRACTION"};function $T(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":JT[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const tA={[lp]:"ENVMAP_BLENDING_MULTIPLY",[Iy]:"ENVMAP_BLENDING_MIX",[Fy]:"ENVMAP_BLENDING_ADD"};function eA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":tA[r.combine]||"ENVMAP_BLENDING_NONE"}function nA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function iA(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=ZT(i),p=QT(i),x=$T(i),S=eA(i),_=nA(i),E=HT(i),T=GT(c),C=l.createProgram();let y,v,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(al).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(al).join(`
`),v.length>0&&(v+=`
`)):(y=[hv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),v=[hv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+S:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Yi?"#define TONE_MAPPING":"",i.toneMapping!==Yi?me.tonemapping_pars_fragment:"",i.toneMapping!==Yi?FT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,zT("linearToOutputTexel",i.outputColorSpace),BT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(al).join(`
`)),f=ap(f),f=uv(f,i),f=fv(f,i),h=ap(h),h=uv(h,i),h=fv(h,i),f=dv(f),h=dv(h),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===M_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===M_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const O=D+y+f,L=D+v+h,k=ov(l,l.VERTEX_SHADER,O),z=ov(l,l.FRAGMENT_SHADER,L);l.attachShader(C,k),l.attachShader(C,z),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function I(F){if(r.debug.checkShaderErrors){const Q=l.getProgramInfoLog(C)||"",mt=l.getShaderInfoLog(k)||"",St=l.getShaderInfoLog(z)||"",W=Q.trim(),U=mt.trim(),B=St.trim();let ct=!0,yt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ct=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,k,z);else{const bt=cv(l,k,"vertex"),N=cv(l,z,"fragment");Ae("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+W+`
`+bt+`
`+N)}else W!==""?oe("WebGLProgram: Program Info Log:",W):(U===""||B==="")&&(yt=!1);yt&&(F.diagnostics={runnable:ct,programLog:W,vertexShader:{log:U,prefix:y},fragmentShader:{log:B,prefix:v}})}l.deleteShader(k),l.deleteShader(z),b=new tu(l,C),P=VT(l,C)}let b;this.getUniforms=function(){return b===void 0&&I(this),b};let P;this.getAttributes=function(){return P===void 0&&I(this),P};let K=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return K===!1&&(K=l.getProgramParameter(C,NT)),K},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=LT++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=k,this.fragmentShader=z,this}let aA=0;class sA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new rA(t),i.set(t,s)),s}}class rA{constructor(t){this.id=aA++,this.code=t,this.usedTimes=0}}function oA(r){return r===ks||r===eu||r===nu}function lA(r,t,i,s,l,c){const f=new vp,h=new sA,m=new Set,p=[],x=new Map,S=s.logarithmicDepthBuffer;let _=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function C(b,P,K,F,Q,mt){const St=F.fog,W=Q.geometry,U=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,B=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,ct=t.get(b.envMap||U,B),yt=ct&&ct.mapping===uu?ct.image.height:null,bt=E[b.type];b.precision!==null&&(_=s.getMaxPrecision(b.precision),_!==b.precision&&oe("WebGLProgram.getParameters:",b.precision,"not supported, using",_,"instead."));const N=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,J=N!==void 0?N.length:0;let Tt=0;W.morphAttributes.position!==void 0&&(Tt=1),W.morphAttributes.normal!==void 0&&(Tt=2),W.morphAttributes.color!==void 0&&(Tt=3);let Ot,Pt,lt,wt;if(bt){const re=Gi[bt];Ot=re.vertexShader,Pt=re.fragmentShader}else Ot=b.vertexShader,Pt=b.fragmentShader,h.update(b),lt=h.getVertexShaderID(b),wt=h.getFragmentShaderID(b);const Lt=r.getRenderTarget(),kt=r.state.buffers.depth.getReversed(),ae=Q.isInstancedMesh===!0,$t=Q.isBatchedMesh===!0,ze=!!b.map,fe=!!b.matcap,ve=!!ct,De=!!b.aoMap,le=!!b.lightMap,tn=!!b.bumpMap,Xe=!!b.normalMap,fn=!!b.displacementMap,q=!!b.emissiveMap,Qe=!!b.metalnessMap,Y=!!b.roughnessMap,Xt=b.anisotropy>0,ht=b.clearcoat>0,Dt=b.dispersion>0,w=b.iridescence>0,M=b.sheen>0,G=b.transmission>0,ut=Xt&&!!b.anisotropyMap,gt=ht&&!!b.clearcoatMap,At=ht&&!!b.clearcoatNormalMap,Rt=ht&&!!b.clearcoatRoughnessMap,st=w&&!!b.iridescenceMap,tt=w&&!!b.iridescenceThicknessMap,vt=M&&!!b.sheenColorMap,Ut=M&&!!b.sheenRoughnessMap,dt=!!b.specularMap,pt=!!b.specularColorMap,Bt=!!b.specularIntensityMap,ne=G&&!!b.transmissionMap,ie=G&&!!b.thicknessMap,V=!!b.gradientMap,Nt=!!b.alphaMap,xt=b.alphaTest>0,Ht=!!b.alphaHash,zt=!!b.extensions;let Ct=Yi;b.toneMapped&&(Lt===null||Lt.isXRRenderTarget===!0)&&(Ct=r.toneMapping);const Kt={shaderID:bt,shaderType:b.type,shaderName:b.name,vertexShader:Ot,fragmentShader:Pt,defines:b.defines,customVertexShaderID:lt,customFragmentShaderID:wt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:_,batching:$t,batchingColor:$t&&Q._colorsTexture!==null,instancing:ae,instancingColor:ae&&Q.instanceColor!==null,instancingMorph:ae&&Q.morphTexture!==null,outputColorSpace:Lt===null?r.outputColorSpace:Lt.isXRRenderTarget===!0?Lt.texture.colorSpace:Re.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:ze,matcap:fe,envMap:ve,envMapMode:ve&&ct.mapping,envMapCubeUVHeight:yt,aoMap:De,lightMap:le,bumpMap:tn,normalMap:Xe,displacementMap:fn,emissiveMap:q,normalMapObjectSpace:Xe&&b.normalMapType===Gy,normalMapTangentSpace:Xe&&b.normalMapType===iu,packedNormalMap:Xe&&b.normalMapType===iu&&oA(b.normalMap.format),metalnessMap:Qe,roughnessMap:Y,anisotropy:Xt,anisotropyMap:ut,clearcoat:ht,clearcoatMap:gt,clearcoatNormalMap:At,clearcoatRoughnessMap:Rt,dispersion:Dt,iridescence:w,iridescenceMap:st,iridescenceThicknessMap:tt,sheen:M,sheenColorMap:vt,sheenRoughnessMap:Ut,specularMap:dt,specularColorMap:pt,specularIntensityMap:Bt,transmission:G,transmissionMap:ne,thicknessMap:ie,gradientMap:V,opaque:b.transparent===!1&&b.blending===Xr&&b.alphaToCoverage===!1,alphaMap:Nt,alphaTest:xt,alphaHash:Ht,combine:b.combine,mapUv:ze&&T(b.map.channel),aoMapUv:De&&T(b.aoMap.channel),lightMapUv:le&&T(b.lightMap.channel),bumpMapUv:tn&&T(b.bumpMap.channel),normalMapUv:Xe&&T(b.normalMap.channel),displacementMapUv:fn&&T(b.displacementMap.channel),emissiveMapUv:q&&T(b.emissiveMap.channel),metalnessMapUv:Qe&&T(b.metalnessMap.channel),roughnessMapUv:Y&&T(b.roughnessMap.channel),anisotropyMapUv:ut&&T(b.anisotropyMap.channel),clearcoatMapUv:gt&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:At&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&T(b.sheenRoughnessMap.channel),specularMapUv:dt&&T(b.specularMap.channel),specularColorMapUv:pt&&T(b.specularColorMap.channel),specularIntensityMapUv:Bt&&T(b.specularIntensityMap.channel),transmissionMapUv:ne&&T(b.transmissionMap.channel),thicknessMapUv:ie&&T(b.thicknessMap.channel),alphaMapUv:Nt&&T(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Xe||Xt),vertexNormals:!!W.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!W.attributes.uv&&(ze||Nt),fog:!!St,useFog:b.fog===!0,fogExp2:!!St&&St.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||W.attributes.normal===void 0&&Xe===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:kt,skinning:Q.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Tt,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:mt.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&K.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ct,decodeVideoTexture:ze&&b.map.isVideoTexture===!0&&Re.getTransfer(b.map.colorSpace)===ke,decodeVideoTextureEmissive:q&&b.emissiveMap.isVideoTexture===!0&&Re.getTransfer(b.emissiveMap.colorSpace)===ke,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Vi,flipSided:b.side===Qn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:zt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&b.extensions.multiDraw===!0||$t)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Kt.vertexUv1s=m.has(1),Kt.vertexUv2s=m.has(2),Kt.vertexUv3s=m.has(3),m.clear(),Kt}function y(b){const P=[];if(b.shaderID?P.push(b.shaderID):(P.push(b.customVertexShaderID),P.push(b.customFragmentShaderID)),b.defines!==void 0)for(const K in b.defines)P.push(K),P.push(b.defines[K]);return b.isRawShaderMaterial===!1&&(v(P,b),D(P,b),P.push(r.outputColorSpace)),P.push(b.customProgramCacheKey),P.join()}function v(b,P){b.push(P.precision),b.push(P.outputColorSpace),b.push(P.envMapMode),b.push(P.envMapCubeUVHeight),b.push(P.mapUv),b.push(P.alphaMapUv),b.push(P.lightMapUv),b.push(P.aoMapUv),b.push(P.bumpMapUv),b.push(P.normalMapUv),b.push(P.displacementMapUv),b.push(P.emissiveMapUv),b.push(P.metalnessMapUv),b.push(P.roughnessMapUv),b.push(P.anisotropyMapUv),b.push(P.clearcoatMapUv),b.push(P.clearcoatNormalMapUv),b.push(P.clearcoatRoughnessMapUv),b.push(P.iridescenceMapUv),b.push(P.iridescenceThicknessMapUv),b.push(P.sheenColorMapUv),b.push(P.sheenRoughnessMapUv),b.push(P.specularMapUv),b.push(P.specularColorMapUv),b.push(P.specularIntensityMapUv),b.push(P.transmissionMapUv),b.push(P.thicknessMapUv),b.push(P.combine),b.push(P.fogExp2),b.push(P.sizeAttenuation),b.push(P.morphTargetsCount),b.push(P.morphAttributeCount),b.push(P.numDirLights),b.push(P.numPointLights),b.push(P.numSpotLights),b.push(P.numSpotLightMaps),b.push(P.numHemiLights),b.push(P.numRectAreaLights),b.push(P.numDirLightShadows),b.push(P.numPointLightShadows),b.push(P.numSpotLightShadows),b.push(P.numSpotLightShadowsWithMaps),b.push(P.numLightProbes),b.push(P.shadowMapType),b.push(P.toneMapping),b.push(P.numClippingPlanes),b.push(P.numClipIntersection),b.push(P.depthPacking)}function D(b,P){f.disableAll(),P.instancing&&f.enable(0),P.instancingColor&&f.enable(1),P.instancingMorph&&f.enable(2),P.matcap&&f.enable(3),P.envMap&&f.enable(4),P.normalMapObjectSpace&&f.enable(5),P.normalMapTangentSpace&&f.enable(6),P.clearcoat&&f.enable(7),P.iridescence&&f.enable(8),P.alphaTest&&f.enable(9),P.vertexColors&&f.enable(10),P.vertexAlphas&&f.enable(11),P.vertexUv1s&&f.enable(12),P.vertexUv2s&&f.enable(13),P.vertexUv3s&&f.enable(14),P.vertexTangents&&f.enable(15),P.anisotropy&&f.enable(16),P.alphaHash&&f.enable(17),P.batching&&f.enable(18),P.dispersion&&f.enable(19),P.batchingColor&&f.enable(20),P.gradientMap&&f.enable(21),P.packedNormalMap&&f.enable(22),P.vertexNormals&&f.enable(23),b.push(f.mask),f.disableAll(),P.fog&&f.enable(0),P.useFog&&f.enable(1),P.flatShading&&f.enable(2),P.logarithmicDepthBuffer&&f.enable(3),P.reversedDepthBuffer&&f.enable(4),P.skinning&&f.enable(5),P.morphTargets&&f.enable(6),P.morphNormals&&f.enable(7),P.morphColors&&f.enable(8),P.premultipliedAlpha&&f.enable(9),P.shadowMapEnabled&&f.enable(10),P.doubleSided&&f.enable(11),P.flipSided&&f.enable(12),P.useDepthPacking&&f.enable(13),P.dithering&&f.enable(14),P.transmission&&f.enable(15),P.sheen&&f.enable(16),P.opaque&&f.enable(17),P.pointsUvs&&f.enable(18),P.decodeVideoTexture&&f.enable(19),P.decodeVideoTextureEmissive&&f.enable(20),P.alphaToCoverage&&f.enable(21),P.numLightProbeGrids>0&&f.enable(22),b.push(f.mask)}function O(b){const P=E[b.type];let K;if(P){const F=Gi[P];K=AM.clone(F.uniforms)}else K=b.uniforms;return K}function L(b,P){let K=x.get(P);return K!==void 0?++K.usedTimes:(K=new iA(r,P,b,l),p.push(K),x.set(P,K)),K}function k(b){if(--b.usedTimes===0){const P=p.indexOf(b);p[P]=p[p.length-1],p.pop(),x.delete(b.cacheKey),b.destroy()}}function z(b){h.remove(b)}function I(){h.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:O,acquireProgram:L,releaseProgram:k,releaseShaderCache:z,programs:p,dispose:I}}function cA(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function uA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function pv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function mv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(_){let E=0;return _.isInstancedMesh&&(E+=2),_.isSkinnedMesh&&(E+=1),E}function h(_,E,T,C,y,v){let D=r[t];return D===void 0?(D={id:_.id,object:_,geometry:E,material:T,materialVariant:f(_),groupOrder:C,renderOrder:_.renderOrder,z:y,group:v},r[t]=D):(D.id=_.id,D.object=_,D.geometry=E,D.material=T,D.materialVariant=f(_),D.groupOrder=C,D.renderOrder=_.renderOrder,D.z=y,D.group=v),t++,D}function m(_,E,T,C,y,v){const D=h(_,E,T,C,y,v);T.transmission>0?s.push(D):T.transparent===!0?l.push(D):i.push(D)}function p(_,E,T,C,y,v){const D=h(_,E,T,C,y,v);T.transmission>0?s.unshift(D):T.transparent===!0?l.unshift(D):i.unshift(D)}function x(_,E){i.length>1&&i.sort(_||uA),s.length>1&&s.sort(E||pv),l.length>1&&l.sort(E||pv)}function S(){for(let _=t,E=r.length;_<E;_++){const T=r[_];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:S,sort:x}}function fA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new mv,r.set(s,[f])):l>=c.length?(f=new mv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function dA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new $,color:new be};break;case"SpotLight":i={position:new $,direction:new $,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new be,groundColor:new be};break;case"RectAreaLight":i={color:new be,position:new $,halfWidth:new $,halfHeight:new $};break}return r[t.id]=i,i}}}function hA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let pA=0;function mA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function gA(r){const t=new dA,i=hA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new $);const l=new $,c=new rn,f=new rn;function h(p){let x=0,S=0,_=0;for(let P=0;P<9;P++)s.probe[P].set(0,0,0);let E=0,T=0,C=0,y=0,v=0,D=0,O=0,L=0,k=0,z=0,I=0;p.sort(mA);for(let P=0,K=p.length;P<K;P++){const F=p[P],Q=F.color,mt=F.intensity,St=F.distance;let W=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===ks?W=F.shadow.map.texture:W=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)x+=Q.r*mt,S+=Q.g*mt,_+=Q.b*mt;else if(F.isLightProbe){for(let U=0;U<9;U++)s.probe[U].addScaledVector(F.sh.coefficients[U],mt);I++}else if(F.isDirectionalLight){const U=t.get(F);if(U.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const B=F.shadow,ct=i.get(F);ct.shadowIntensity=B.intensity,ct.shadowBias=B.bias,ct.shadowNormalBias=B.normalBias,ct.shadowRadius=B.radius,ct.shadowMapSize=B.mapSize,s.directionalShadow[E]=ct,s.directionalShadowMap[E]=W,s.directionalShadowMatrix[E]=F.shadow.matrix,D++}s.directional[E]=U,E++}else if(F.isSpotLight){const U=t.get(F);U.position.setFromMatrixPosition(F.matrixWorld),U.color.copy(Q).multiplyScalar(mt),U.distance=St,U.coneCos=Math.cos(F.angle),U.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),U.decay=F.decay,s.spot[C]=U;const B=F.shadow;if(F.map&&(s.spotLightMap[k]=F.map,k++,B.updateMatrices(F),F.castShadow&&z++),s.spotLightMatrix[C]=B.matrix,F.castShadow){const ct=i.get(F);ct.shadowIntensity=B.intensity,ct.shadowBias=B.bias,ct.shadowNormalBias=B.normalBias,ct.shadowRadius=B.radius,ct.shadowMapSize=B.mapSize,s.spotShadow[C]=ct,s.spotShadowMap[C]=W,L++}C++}else if(F.isRectAreaLight){const U=t.get(F);U.color.copy(Q).multiplyScalar(mt),U.halfWidth.set(F.width*.5,0,0),U.halfHeight.set(0,F.height*.5,0),s.rectArea[y]=U,y++}else if(F.isPointLight){const U=t.get(F);if(U.color.copy(F.color).multiplyScalar(F.intensity),U.distance=F.distance,U.decay=F.decay,F.castShadow){const B=F.shadow,ct=i.get(F);ct.shadowIntensity=B.intensity,ct.shadowBias=B.bias,ct.shadowNormalBias=B.normalBias,ct.shadowRadius=B.radius,ct.shadowMapSize=B.mapSize,ct.shadowCameraNear=B.camera.near,ct.shadowCameraFar=B.camera.far,s.pointShadow[T]=ct,s.pointShadowMap[T]=W,s.pointShadowMatrix[T]=F.shadow.matrix,O++}s.point[T]=U,T++}else if(F.isHemisphereLight){const U=t.get(F);U.skyColor.copy(F.color).multiplyScalar(mt),U.groundColor.copy(F.groundColor).multiplyScalar(mt),s.hemi[v]=U,v++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Gt.LTC_FLOAT_1,s.rectAreaLTC2=Gt.LTC_FLOAT_2):(s.rectAreaLTC1=Gt.LTC_HALF_1,s.rectAreaLTC2=Gt.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=S,s.ambient[2]=_;const b=s.hash;(b.directionalLength!==E||b.pointLength!==T||b.spotLength!==C||b.rectAreaLength!==y||b.hemiLength!==v||b.numDirectionalShadows!==D||b.numPointShadows!==O||b.numSpotShadows!==L||b.numSpotMaps!==k||b.numLightProbes!==I)&&(s.directional.length=E,s.spot.length=C,s.rectArea.length=y,s.point.length=T,s.hemi.length=v,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=L+k-z,s.spotLightMap.length=k,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=I,b.directionalLength=E,b.pointLength=T,b.spotLength=C,b.rectAreaLength=y,b.hemiLength=v,b.numDirectionalShadows=D,b.numPointShadows=O,b.numSpotShadows=L,b.numSpotMaps=k,b.numLightProbes=I,s.version=pA++)}function m(p,x){let S=0,_=0,E=0,T=0,C=0;const y=x.matrixWorldInverse;for(let v=0,D=p.length;v<D;v++){const O=p[v];if(O.isDirectionalLight){const L=s.directional[S];L.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(y),S++}else if(O.isSpotLight){const L=s.spot[E];L.position.setFromMatrixPosition(O.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(y),E++}else if(O.isRectAreaLight){const L=s.rectArea[T];L.position.setFromMatrixPosition(O.matrixWorld),L.position.applyMatrix4(y),f.identity(),c.copy(O.matrixWorld),c.premultiply(y),f.extractRotation(c),L.halfWidth.set(O.width*.5,0,0),L.halfHeight.set(0,O.height*.5,0),L.halfWidth.applyMatrix4(f),L.halfHeight.applyMatrix4(f),T++}else if(O.isPointLight){const L=s.point[_];L.position.setFromMatrixPosition(O.matrixWorld),L.position.applyMatrix4(y),_++}else if(O.isHemisphereLight){const L=s.hemi[C];L.direction.setFromMatrixPosition(O.matrixWorld),L.direction.transformDirection(y),C++}}}return{setup:h,setupView:m,state:s}}function gv(r){const t=new gA(r),i=[],s=[],l=[];function c(_){S.camera=_,i.length=0,s.length=0,l.length=0}function f(_){i.push(_)}function h(_){s.push(_)}function m(_){l.push(_)}function p(){t.setup(i)}function x(_){t.setupView(i,_)}const S={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:S,setupLights:p,setupLightsView:x,pushLight:f,pushShadow:h,pushLightProbeGrid:m}}function _A(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new gv(r),t.set(l,[h])):c>=f.length?(h=new gv(r),f.push(h)):h=f[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const vA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xA=`uniform sampler2D shadow_pass;
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
}`,SA=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],yA=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],_v=new rn,el=new $,sh=new $;function MA(r,t,i){let s=new Mp;const l=new _e,c=new _e,f=new un,h=new UM,m=new NM,p={},x=i.maxTextureSize,S={[hs]:Qn,[Qn]:hs,[Vi]:Vi},_=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:vA,fragmentShader:xA}),E=_.clone();E.defines.HORIZONTAL_PASS=1;const T=new Ki;T.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new cn(T,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zc;let v=this.type;this.render=function(z,I,b){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||z.length===0)return;this.type===xv&&(oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Zc);const P=r.getRenderTarget(),K=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(ya),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const mt=v!==this.type;mt&&I.traverse(function(St){St.material&&(Array.isArray(St.material)?St.material.forEach(W=>W.needsUpdate=!0):St.material.needsUpdate=!0)});for(let St=0,W=z.length;St<W;St++){const U=z[St],B=U.shadow;if(B===void 0){oe("WebGLShadowMap:",U,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const ct=B.getFrameExtents();l.multiply(ct),c.copy(B.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/ct.x),l.x=c.x*ct.x,B.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/ct.y),l.y=c.y*ct.y,B.mapSize.y=c.y));const yt=r.state.buffers.depth.getReversed();if(B.camera._reversedDepth=yt,B.map===null||mt===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===il){if(U.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new qi(l.x,l.y,{format:ks,type:ba,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),B.map.texture.name=U.name+".shadowMap",B.map.depthTexture=new jr(l.x,l.y,Xi),B.map.depthTexture.name=U.name+".shadowMapDepth",B.map.depthTexture.format=Ta,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ln,B.map.depthTexture.magFilter=Ln}else U.isPointLight?(B.map=new Qv(l.x),B.map.depthTexture=new bM(l.x,ji)):(B.map=new qi(l.x,l.y),B.map.depthTexture=new jr(l.x,l.y,ji)),B.map.depthTexture.name=U.name+".shadowMap",B.map.depthTexture.format=Ta,this.type===Zc?(B.map.depthTexture.compareFunction=yt?gp:mp,B.map.depthTexture.minFilter=Bn,B.map.depthTexture.magFilter=Bn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ln,B.map.depthTexture.magFilter=Ln);B.camera.updateProjectionMatrix()}const bt=B.map.isWebGLCubeRenderTarget?6:1;for(let N=0;N<bt;N++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,N),r.clear();else{N===0&&(r.setRenderTarget(B.map),r.clear());const J=B.getViewport(N);f.set(c.x*J.x,c.y*J.y,c.x*J.z,c.y*J.w),Q.viewport(f)}if(U.isPointLight){const J=B.camera,Tt=B.matrix,Ot=U.distance||J.far;Ot!==J.far&&(J.far=Ot,J.updateProjectionMatrix()),el.setFromMatrixPosition(U.matrixWorld),J.position.copy(el),sh.copy(J.position),sh.add(SA[N]),J.up.copy(yA[N]),J.lookAt(sh),J.updateMatrixWorld(),Tt.makeTranslation(-el.x,-el.y,-el.z),_v.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),B._frustum.setFromProjectionMatrix(_v,J.coordinateSystem,J.reversedDepth)}else B.updateMatrices(U);s=B.getFrustum(),L(I,b,B.camera,U,this.type)}B.isPointLightShadow!==!0&&this.type===il&&D(B,b),B.needsUpdate=!1}v=this.type,y.needsUpdate=!1,r.setRenderTarget(P,K,F)};function D(z,I){const b=t.update(C);_.defines.VSM_SAMPLES!==z.blurSamples&&(_.defines.VSM_SAMPLES=z.blurSamples,E.defines.VSM_SAMPLES=z.blurSamples,_.needsUpdate=!0,E.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new qi(l.x,l.y,{format:ks,type:ba})),_.uniforms.shadow_pass.value=z.map.depthTexture,_.uniforms.resolution.value=z.mapSize,_.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(I,null,b,_,C,null),E.uniforms.shadow_pass.value=z.mapPass.texture,E.uniforms.resolution.value=z.mapSize,E.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(I,null,b,E,C,null)}function O(z,I,b,P){let K=null;const F=b.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(F!==void 0)K=F;else if(K=b.isPointLight===!0?m:h,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const Q=K.uuid,mt=I.uuid;let St=p[Q];St===void 0&&(St={},p[Q]=St);let W=St[mt];W===void 0&&(W=K.clone(),St[mt]=W,I.addEventListener("dispose",k)),K=W}if(K.visible=I.visible,K.wireframe=I.wireframe,P===il?K.side=I.shadowSide!==null?I.shadowSide:I.side:K.side=I.shadowSide!==null?I.shadowSide:S[I.side],K.alphaMap=I.alphaMap,K.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,K.map=I.map,K.clipShadows=I.clipShadows,K.clippingPlanes=I.clippingPlanes,K.clipIntersection=I.clipIntersection,K.displacementMap=I.displacementMap,K.displacementScale=I.displacementScale,K.displacementBias=I.displacementBias,K.wireframeLinewidth=I.wireframeLinewidth,K.linewidth=I.linewidth,b.isPointLight===!0&&K.isMeshDistanceMaterial===!0){const Q=r.properties.get(K);Q.light=b}return K}function L(z,I,b,P,K){if(z.visible===!1)return;if(z.layers.test(I.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&K===il)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,z.matrixWorld);const mt=t.update(z),St=z.material;if(Array.isArray(St)){const W=mt.groups;for(let U=0,B=W.length;U<B;U++){const ct=W[U],yt=St[ct.materialIndex];if(yt&&yt.visible){const bt=O(z,yt,P,K);z.onBeforeShadow(r,z,I,b,mt,bt,ct),r.renderBufferDirect(b,null,mt,bt,z,ct),z.onAfterShadow(r,z,I,b,mt,bt,ct)}}}else if(St.visible){const W=O(z,St,P,K);z.onBeforeShadow(r,z,I,b,mt,W,null),r.renderBufferDirect(b,null,mt,W,z,null),z.onAfterShadow(r,z,I,b,mt,W,null)}}const Q=z.children;for(let mt=0,St=Q.length;mt<St;mt++)L(Q[mt],I,b,P,K)}function k(z){z.target.removeEventListener("dispose",k);for(const b in p){const P=p[b],K=z.target.uuid;K in P&&(P[K].dispose(),delete P[K])}}}function EA(r,t){function i(){let V=!1;const Nt=new un;let xt=null;const Ht=new un(0,0,0,0);return{setMask:function(zt){xt!==zt&&!V&&(r.colorMask(zt,zt,zt,zt),xt=zt)},setLocked:function(zt){V=zt},setClear:function(zt,Ct,Kt,re,sn){sn===!0&&(zt*=re,Ct*=re,Kt*=re),Nt.set(zt,Ct,Kt,re),Ht.equals(Nt)===!1&&(r.clearColor(zt,Ct,Kt,re),Ht.copy(Nt))},reset:function(){V=!1,xt=null,Ht.set(-1,0,0,0)}}}function s(){let V=!1,Nt=!1,xt=null,Ht=null,zt=null;return{setReversed:function(Ct){if(Nt!==Ct){const Kt=t.get("EXT_clip_control");Ct?Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.ZERO_TO_ONE_EXT):Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.NEGATIVE_ONE_TO_ONE_EXT),Nt=Ct;const re=zt;zt=null,this.setClear(re)}},getReversed:function(){return Nt},setTest:function(Ct){Ct?Lt(r.DEPTH_TEST):kt(r.DEPTH_TEST)},setMask:function(Ct){xt!==Ct&&!V&&(r.depthMask(Ct),xt=Ct)},setFunc:function(Ct){if(Nt&&(Ct=Qy[Ct]),Ht!==Ct){switch(Ct){case ph:r.depthFunc(r.NEVER);break;case mh:r.depthFunc(r.ALWAYS);break;case gh:r.depthFunc(r.LESS);break;case Yr:r.depthFunc(r.LEQUAL);break;case _h:r.depthFunc(r.EQUAL);break;case vh:r.depthFunc(r.GEQUAL);break;case xh:r.depthFunc(r.GREATER);break;case Sh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ht=Ct}},setLocked:function(Ct){V=Ct},setClear:function(Ct){zt!==Ct&&(zt=Ct,Nt&&(Ct=1-Ct),r.clearDepth(Ct))},reset:function(){V=!1,xt=null,Ht=null,zt=null,Nt=!1}}}function l(){let V=!1,Nt=null,xt=null,Ht=null,zt=null,Ct=null,Kt=null,re=null,sn=null;return{setTest:function(Oe){V||(Oe?Lt(r.STENCIL_TEST):kt(r.STENCIL_TEST))},setMask:function(Oe){Nt!==Oe&&!V&&(r.stencilMask(Oe),Nt=Oe)},setFunc:function(Oe,di,Jn){(xt!==Oe||Ht!==di||zt!==Jn)&&(r.stencilFunc(Oe,di,Jn),xt=Oe,Ht=di,zt=Jn)},setOp:function(Oe,di,Jn){(Ct!==Oe||Kt!==di||re!==Jn)&&(r.stencilOp(Oe,di,Jn),Ct=Oe,Kt=di,re=Jn)},setLocked:function(Oe){V=Oe},setClear:function(Oe){sn!==Oe&&(r.clearStencil(Oe),sn=Oe)},reset:function(){V=!1,Nt=null,xt=null,Ht=null,zt=null,Ct=null,Kt=null,re=null,sn=null}}}const c=new i,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let x={},S={},_={},E=new WeakMap,T=[],C=null,y=!1,v=null,D=null,O=null,L=null,k=null,z=null,I=null,b=new be(0,0,0),P=0,K=!1,F=null,Q=null,mt=null,St=null,W=null;const U=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,ct=0;const yt=r.getParameter(r.VERSION);yt.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(yt)[1]),B=ct>=1):yt.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(yt)[1]),B=ct>=2);let bt=null,N={};const J=r.getParameter(r.SCISSOR_BOX),Tt=r.getParameter(r.VIEWPORT),Ot=new un().fromArray(J),Pt=new un().fromArray(Tt);function lt(V,Nt,xt,Ht){const zt=new Uint8Array(4),Ct=r.createTexture();r.bindTexture(V,Ct),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Kt=0;Kt<xt;Kt++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(Nt,0,r.RGBA,1,1,Ht,0,r.RGBA,r.UNSIGNED_BYTE,zt):r.texImage2D(Nt+Kt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,zt);return Ct}const wt={};wt[r.TEXTURE_2D]=lt(r.TEXTURE_2D,r.TEXTURE_2D,1),wt[r.TEXTURE_CUBE_MAP]=lt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[r.TEXTURE_2D_ARRAY]=lt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),wt[r.TEXTURE_3D]=lt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Lt(r.DEPTH_TEST),f.setFunc(Yr),tn(!1),Xe(__),Lt(r.CULL_FACE),De(ya);function Lt(V){x[V]!==!0&&(r.enable(V),x[V]=!0)}function kt(V){x[V]!==!1&&(r.disable(V),x[V]=!1)}function ae(V,Nt){return _[V]!==Nt?(r.bindFramebuffer(V,Nt),_[V]=Nt,V===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Nt),V===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Nt),!0):!1}function $t(V,Nt){let xt=T,Ht=!1;if(V){xt=E.get(Nt),xt===void 0&&(xt=[],E.set(Nt,xt));const zt=V.textures;if(xt.length!==zt.length||xt[0]!==r.COLOR_ATTACHMENT0){for(let Ct=0,Kt=zt.length;Ct<Kt;Ct++)xt[Ct]=r.COLOR_ATTACHMENT0+Ct;xt.length=zt.length,Ht=!0}}else xt[0]!==r.BACK&&(xt[0]=r.BACK,Ht=!0);Ht&&r.drawBuffers(xt)}function ze(V){return C!==V?(r.useProgram(V),C=V,!0):!1}const fe={[Fs]:r.FUNC_ADD,[Sy]:r.FUNC_SUBTRACT,[yy]:r.FUNC_REVERSE_SUBTRACT};fe[My]=r.MIN,fe[Ey]=r.MAX;const ve={[by]:r.ZERO,[Ty]:r.ONE,[Ay]:r.SRC_COLOR,[dh]:r.SRC_ALPHA,[Ny]:r.SRC_ALPHA_SATURATE,[Dy]:r.DST_COLOR,[wy]:r.DST_ALPHA,[Ry]:r.ONE_MINUS_SRC_COLOR,[hh]:r.ONE_MINUS_SRC_ALPHA,[Uy]:r.ONE_MINUS_DST_COLOR,[Cy]:r.ONE_MINUS_DST_ALPHA,[Ly]:r.CONSTANT_COLOR,[Oy]:r.ONE_MINUS_CONSTANT_COLOR,[Py]:r.CONSTANT_ALPHA,[zy]:r.ONE_MINUS_CONSTANT_ALPHA};function De(V,Nt,xt,Ht,zt,Ct,Kt,re,sn,Oe){if(V===ya){y===!0&&(kt(r.BLEND),y=!1);return}if(y===!1&&(Lt(r.BLEND),y=!0),V!==xy){if(V!==v||Oe!==K){if((D!==Fs||k!==Fs)&&(r.blendEquation(r.FUNC_ADD),D=Fs,k=Fs),Oe)switch(V){case Xr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case v_:r.blendFunc(r.ONE,r.ONE);break;case x_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case S_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ae("WebGLState: Invalid blending: ",V);break}else switch(V){case Xr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case v_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case x_:Ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case S_:Ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ae("WebGLState: Invalid blending: ",V);break}O=null,L=null,z=null,I=null,b.set(0,0,0),P=0,v=V,K=Oe}return}zt=zt||Nt,Ct=Ct||xt,Kt=Kt||Ht,(Nt!==D||zt!==k)&&(r.blendEquationSeparate(fe[Nt],fe[zt]),D=Nt,k=zt),(xt!==O||Ht!==L||Ct!==z||Kt!==I)&&(r.blendFuncSeparate(ve[xt],ve[Ht],ve[Ct],ve[Kt]),O=xt,L=Ht,z=Ct,I=Kt),(re.equals(b)===!1||sn!==P)&&(r.blendColor(re.r,re.g,re.b,sn),b.copy(re),P=sn),v=V,K=!1}function le(V,Nt){V.side===Vi?kt(r.CULL_FACE):Lt(r.CULL_FACE);let xt=V.side===Qn;Nt&&(xt=!xt),tn(xt),V.blending===Xr&&V.transparent===!1?De(ya):De(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),f.setFunc(V.depthFunc),f.setTest(V.depthTest),f.setMask(V.depthWrite),c.setMask(V.colorWrite);const Ht=V.stencilWrite;h.setTest(Ht),Ht&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),q(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Lt(r.SAMPLE_ALPHA_TO_COVERAGE):kt(r.SAMPLE_ALPHA_TO_COVERAGE)}function tn(V){F!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),F=V)}function Xe(V){V!==_y?(Lt(r.CULL_FACE),V!==Q&&(V===__?r.cullFace(r.BACK):V===vy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):kt(r.CULL_FACE),Q=V}function fn(V){V!==mt&&(B&&r.lineWidth(V),mt=V)}function q(V,Nt,xt){V?(Lt(r.POLYGON_OFFSET_FILL),(St!==Nt||W!==xt)&&(St=Nt,W=xt,f.getReversed()&&(Nt=-Nt),r.polygonOffset(Nt,xt))):kt(r.POLYGON_OFFSET_FILL)}function Qe(V){V?Lt(r.SCISSOR_TEST):kt(r.SCISSOR_TEST)}function Y(V){V===void 0&&(V=r.TEXTURE0+U-1),bt!==V&&(r.activeTexture(V),bt=V)}function Xt(V,Nt,xt){xt===void 0&&(bt===null?xt=r.TEXTURE0+U-1:xt=bt);let Ht=N[xt];Ht===void 0&&(Ht={type:void 0,texture:void 0},N[xt]=Ht),(Ht.type!==V||Ht.texture!==Nt)&&(bt!==xt&&(r.activeTexture(xt),bt=xt),r.bindTexture(V,Nt||wt[V]),Ht.type=V,Ht.texture=Nt)}function ht(){const V=N[bt];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Dt(){try{r.compressedTexImage2D(...arguments)}catch(V){Ae("WebGLState:",V)}}function w(){try{r.compressedTexImage3D(...arguments)}catch(V){Ae("WebGLState:",V)}}function M(){try{r.texSubImage2D(...arguments)}catch(V){Ae("WebGLState:",V)}}function G(){try{r.texSubImage3D(...arguments)}catch(V){Ae("WebGLState:",V)}}function ut(){try{r.compressedTexSubImage2D(...arguments)}catch(V){Ae("WebGLState:",V)}}function gt(){try{r.compressedTexSubImage3D(...arguments)}catch(V){Ae("WebGLState:",V)}}function At(){try{r.texStorage2D(...arguments)}catch(V){Ae("WebGLState:",V)}}function Rt(){try{r.texStorage3D(...arguments)}catch(V){Ae("WebGLState:",V)}}function st(){try{r.texImage2D(...arguments)}catch(V){Ae("WebGLState:",V)}}function tt(){try{r.texImage3D(...arguments)}catch(V){Ae("WebGLState:",V)}}function vt(V){return S[V]!==void 0?S[V]:r.getParameter(V)}function Ut(V,Nt){S[V]!==Nt&&(r.pixelStorei(V,Nt),S[V]=Nt)}function dt(V){Ot.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),Ot.copy(V))}function pt(V){Pt.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),Pt.copy(V))}function Bt(V,Nt){let xt=p.get(Nt);xt===void 0&&(xt=new WeakMap,p.set(Nt,xt));let Ht=xt.get(V);Ht===void 0&&(Ht=r.getUniformBlockIndex(Nt,V.name),xt.set(V,Ht))}function ne(V,Nt){const Ht=p.get(Nt).get(V);m.get(Nt)!==Ht&&(r.uniformBlockBinding(Nt,Ht,V.__bindingPointIndex),m.set(Nt,Ht))}function ie(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),x={},S={},bt=null,N={},_={},E=new WeakMap,T=[],C=null,y=!1,v=null,D=null,O=null,L=null,k=null,z=null,I=null,b=new be(0,0,0),P=0,K=!1,F=null,Q=null,mt=null,St=null,W=null,Ot.set(0,0,r.canvas.width,r.canvas.height),Pt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:Lt,disable:kt,bindFramebuffer:ae,drawBuffers:$t,useProgram:ze,setBlending:De,setMaterial:le,setFlipSided:tn,setCullFace:Xe,setLineWidth:fn,setPolygonOffset:q,setScissorTest:Qe,activeTexture:Y,bindTexture:Xt,unbindTexture:ht,compressedTexImage2D:Dt,compressedTexImage3D:w,texImage2D:st,texImage3D:tt,pixelStorei:Ut,getParameter:vt,updateUBOMapping:Bt,uniformBlockBinding:ne,texStorage2D:At,texStorage3D:Rt,texSubImage2D:M,texSubImage3D:G,compressedTexSubImage2D:ut,compressedTexSubImage3D:gt,scissor:dt,viewport:pt,reset:ie}}function bA(r,t,i,s,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new _e,x=new WeakMap,S=new Set;let _;const E=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(w,M){return T?new OffscreenCanvas(w,M):ru("canvas")}function y(w,M,G){let ut=1;const gt=Dt(w);if((gt.width>G||gt.height>G)&&(ut=G/Math.max(gt.width,gt.height)),ut<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const At=Math.floor(ut*gt.width),Rt=Math.floor(ut*gt.height);_===void 0&&(_=C(At,Rt));const st=M?C(At,Rt):_;return st.width=At,st.height=Rt,st.getContext("2d").drawImage(w,0,0,At,Rt),oe("WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+At+"x"+Rt+")."),st}else return"data"in w&&oe("WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),w;return w}function v(w){return w.generateMipmaps}function D(w){r.generateMipmap(w)}function O(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(w,M,G,ut,gt,At=!1){if(w!==null){if(r[w]!==void 0)return r[w];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Rt;ut&&(Rt=t.get("EXT_texture_norm16"),Rt||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let st=M;if(M===r.RED&&(G===r.FLOAT&&(st=r.R32F),G===r.HALF_FLOAT&&(st=r.R16F),G===r.UNSIGNED_BYTE&&(st=r.R8),G===r.UNSIGNED_SHORT&&Rt&&(st=Rt.R16_EXT),G===r.SHORT&&Rt&&(st=Rt.R16_SNORM_EXT)),M===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(st=r.R8UI),G===r.UNSIGNED_SHORT&&(st=r.R16UI),G===r.UNSIGNED_INT&&(st=r.R32UI),G===r.BYTE&&(st=r.R8I),G===r.SHORT&&(st=r.R16I),G===r.INT&&(st=r.R32I)),M===r.RG&&(G===r.FLOAT&&(st=r.RG32F),G===r.HALF_FLOAT&&(st=r.RG16F),G===r.UNSIGNED_BYTE&&(st=r.RG8),G===r.UNSIGNED_SHORT&&Rt&&(st=Rt.RG16_EXT),G===r.SHORT&&Rt&&(st=Rt.RG16_SNORM_EXT)),M===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(st=r.RG8UI),G===r.UNSIGNED_SHORT&&(st=r.RG16UI),G===r.UNSIGNED_INT&&(st=r.RG32UI),G===r.BYTE&&(st=r.RG8I),G===r.SHORT&&(st=r.RG16I),G===r.INT&&(st=r.RG32I)),M===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(st=r.RGB8UI),G===r.UNSIGNED_SHORT&&(st=r.RGB16UI),G===r.UNSIGNED_INT&&(st=r.RGB32UI),G===r.BYTE&&(st=r.RGB8I),G===r.SHORT&&(st=r.RGB16I),G===r.INT&&(st=r.RGB32I)),M===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(st=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(st=r.RGBA16UI),G===r.UNSIGNED_INT&&(st=r.RGBA32UI),G===r.BYTE&&(st=r.RGBA8I),G===r.SHORT&&(st=r.RGBA16I),G===r.INT&&(st=r.RGBA32I)),M===r.RGB&&(G===r.UNSIGNED_SHORT&&Rt&&(st=Rt.RGB16_EXT),G===r.SHORT&&Rt&&(st=Rt.RGB16_SNORM_EXT),G===r.UNSIGNED_INT_5_9_9_9_REV&&(st=r.RGB9_E5),G===r.UNSIGNED_INT_10F_11F_11F_REV&&(st=r.R11F_G11F_B10F)),M===r.RGBA){const tt=At?su:Re.getTransfer(gt);G===r.FLOAT&&(st=r.RGBA32F),G===r.HALF_FLOAT&&(st=r.RGBA16F),G===r.UNSIGNED_BYTE&&(st=tt===ke?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT&&Rt&&(st=Rt.RGBA16_EXT),G===r.SHORT&&Rt&&(st=Rt.RGBA16_SNORM_EXT),G===r.UNSIGNED_SHORT_4_4_4_4&&(st=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(st=r.RGB5_A1)}return(st===r.R16F||st===r.R32F||st===r.RG16F||st===r.RG32F||st===r.RGBA16F||st===r.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function k(w,M){let G;return w?M===null||M===ji||M===ll?G=r.DEPTH24_STENCIL8:M===Xi?G=r.DEPTH32F_STENCIL8:M===ol&&(G=r.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ji||M===ll?G=r.DEPTH_COMPONENT24:M===Xi?G=r.DEPTH_COMPONENT32F:M===ol&&(G=r.DEPTH_COMPONENT16),G}function z(w,M){return v(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ln&&w.minFilter!==Bn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function I(w){const M=w.target;M.removeEventListener("dispose",I),P(M),M.isVideoTexture&&x.delete(M),M.isHTMLTexture&&S.delete(M)}function b(w){const M=w.target;M.removeEventListener("dispose",b),F(M)}function P(w){const M=s.get(w);if(M.__webglInit===void 0)return;const G=w.source,ut=E.get(G);if(ut){const gt=ut[M.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&K(w),Object.keys(ut).length===0&&E.delete(G)}s.remove(w)}function K(w){const M=s.get(w);r.deleteTexture(M.__webglTexture);const G=w.source,ut=E.get(G);delete ut[M.__cacheKey],f.memory.textures--}function F(w){const M=s.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),s.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(M.__webglFramebuffer[ut]))for(let gt=0;gt<M.__webglFramebuffer[ut].length;gt++)r.deleteFramebuffer(M.__webglFramebuffer[ut][gt]);else r.deleteFramebuffer(M.__webglFramebuffer[ut]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[ut])}else{if(Array.isArray(M.__webglFramebuffer))for(let ut=0;ut<M.__webglFramebuffer.length;ut++)r.deleteFramebuffer(M.__webglFramebuffer[ut]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ut=0;ut<M.__webglColorRenderbuffer.length;ut++)M.__webglColorRenderbuffer[ut]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[ut]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=w.textures;for(let ut=0,gt=G.length;ut<gt;ut++){const At=s.get(G[ut]);At.__webglTexture&&(r.deleteTexture(At.__webglTexture),f.memory.textures--),s.remove(G[ut])}s.remove(w)}let Q=0;function mt(){Q=0}function St(){return Q}function W(w){Q=w}function U(){const w=Q;return w>=l.maxTextures&&oe("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),Q+=1,w}function B(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function ct(w,M){const G=s.get(w);if(w.isVideoTexture&&Xt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&G.__version!==w.version){const ut=w.image;if(ut===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{kt(G,w,M);return}}else w.isExternalTexture&&(G.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+M)}function yt(w,M){const G=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){kt(G,w,M);return}else w.isExternalTexture&&(G.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+M)}function bt(w,M){const G=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){kt(G,w,M);return}i.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+M)}function N(w,M){const G=s.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&G.__version!==w.version){ae(G,w,M);return}i.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+M)}const J={[rl]:r.REPEAT,[Sa]:r.CLAMP_TO_EDGE,[yh]:r.MIRRORED_REPEAT},Tt={[Ln]:r.NEAREST,[By]:r.NEAREST_MIPMAP_NEAREST,[Mc]:r.NEAREST_MIPMAP_LINEAR,[Bn]:r.LINEAR,[Rd]:r.LINEAR_MIPMAP_NEAREST,[Hs]:r.LINEAR_MIPMAP_LINEAR},Ot={[Vy]:r.NEVER,[qy]:r.ALWAYS,[ky]:r.LESS,[mp]:r.LEQUAL,[Xy]:r.EQUAL,[gp]:r.GEQUAL,[Wy]:r.GREATER,[Yy]:r.NOTEQUAL};function Pt(w,M){if(M.type===Xi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Bn||M.magFilter===Rd||M.magFilter===Mc||M.magFilter===Hs||M.minFilter===Bn||M.minFilter===Rd||M.minFilter===Mc||M.minFilter===Hs)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,J[M.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,J[M.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,J[M.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,Tt[M.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,Tt[M.minFilter]),M.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,Ot[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ln||M.minFilter!==Mc&&M.minFilter!==Hs||M.type===Xi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");r.texParameterf(w,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function lt(w,M){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",I));const ut=M.source;let gt=E.get(ut);gt===void 0&&(gt={},E.set(ut,gt));const At=B(M);if(At!==w.__cacheKey){gt[At]===void 0&&(gt[At]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,G=!0),gt[At].usedTimes++;const Rt=gt[w.__cacheKey];Rt!==void 0&&(gt[w.__cacheKey].usedTimes--,Rt.usedTimes===0&&K(M)),w.__cacheKey=At,w.__webglTexture=gt[At].texture}return G}function wt(w,M,G){return Math.floor(Math.floor(w/G)/M)}function Lt(w,M,G,ut){const At=w.updateRanges;if(At.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,G,ut,M.data);else{At.sort((Ut,dt)=>Ut.start-dt.start);let Rt=0;for(let Ut=1;Ut<At.length;Ut++){const dt=At[Rt],pt=At[Ut],Bt=dt.start+dt.count,ne=wt(pt.start,M.width,4),ie=wt(dt.start,M.width,4);pt.start<=Bt+1&&ne===ie&&wt(pt.start+pt.count-1,M.width,4)===ne?dt.count=Math.max(dt.count,pt.start+pt.count-dt.start):(++Rt,At[Rt]=pt)}At.length=Rt+1;const st=i.getParameter(r.UNPACK_ROW_LENGTH),tt=i.getParameter(r.UNPACK_SKIP_PIXELS),vt=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Ut=0,dt=At.length;Ut<dt;Ut++){const pt=At[Ut],Bt=Math.floor(pt.start/4),ne=Math.ceil(pt.count/4),ie=Bt%M.width,V=Math.floor(Bt/M.width),Nt=ne,xt=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,ie),i.pixelStorei(r.UNPACK_SKIP_ROWS,V),i.texSubImage2D(r.TEXTURE_2D,0,ie,V,Nt,xt,G,ut,M.data)}w.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,st),i.pixelStorei(r.UNPACK_SKIP_PIXELS,tt),i.pixelStorei(r.UNPACK_SKIP_ROWS,vt)}}function kt(w,M,G){let ut=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ut=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ut=r.TEXTURE_3D);const gt=lt(w,M),At=M.source;i.bindTexture(ut,w.__webglTexture,r.TEXTURE0+G);const Rt=s.get(At);if(At.version!==Rt.__version||gt===!0){if(i.activeTexture(r.TEXTURE0+G),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const xt=Re.getPrimaries(Re.workingColorSpace),Ht=M.colorSpace===us?null:Re.getPrimaries(M.colorSpace),zt=M.colorSpace===us||xt===Ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt)}i.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let tt=y(M.image,!1,l.maxTextureSize);tt=ht(M,tt);const vt=c.convert(M.format,M.colorSpace),Ut=c.convert(M.type);let dt=L(M.internalFormat,vt,Ut,M.normalized,M.colorSpace,M.isVideoTexture);Pt(ut,M);let pt;const Bt=M.mipmaps,ne=M.isVideoTexture!==!0,ie=Rt.__version===void 0||gt===!0,V=At.dataReady,Nt=z(M,tt);if(M.isDepthTexture)dt=k(M.format===Gs,M.type),ie&&(ne?i.texStorage2D(r.TEXTURE_2D,1,dt,tt.width,tt.height):i.texImage2D(r.TEXTURE_2D,0,dt,tt.width,tt.height,0,vt,Ut,null));else if(M.isDataTexture)if(Bt.length>0){ne&&ie&&i.texStorage2D(r.TEXTURE_2D,Nt,dt,Bt[0].width,Bt[0].height);for(let xt=0,Ht=Bt.length;xt<Ht;xt++)pt=Bt[xt],ne?V&&i.texSubImage2D(r.TEXTURE_2D,xt,0,0,pt.width,pt.height,vt,Ut,pt.data):i.texImage2D(r.TEXTURE_2D,xt,dt,pt.width,pt.height,0,vt,Ut,pt.data);M.generateMipmaps=!1}else ne?(ie&&i.texStorage2D(r.TEXTURE_2D,Nt,dt,tt.width,tt.height),V&&Lt(M,tt,vt,Ut)):i.texImage2D(r.TEXTURE_2D,0,dt,tt.width,tt.height,0,vt,Ut,tt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ne&&ie&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Nt,dt,Bt[0].width,Bt[0].height,tt.depth);for(let xt=0,Ht=Bt.length;xt<Ht;xt++)if(pt=Bt[xt],M.format!==Ni)if(vt!==null)if(ne){if(V)if(M.layerUpdates.size>0){const zt=j_(pt.width,pt.height,M.format,M.type);for(const Ct of M.layerUpdates){const Kt=pt.data.subarray(Ct*zt/pt.data.BYTES_PER_ELEMENT,(Ct+1)*zt/pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,xt,0,0,Ct,pt.width,pt.height,1,vt,Kt)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,xt,0,0,0,pt.width,pt.height,tt.depth,vt,pt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,xt,dt,pt.width,pt.height,tt.depth,0,pt.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?V&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,xt,0,0,0,pt.width,pt.height,tt.depth,vt,Ut,pt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,xt,dt,pt.width,pt.height,tt.depth,0,vt,Ut,pt.data)}else{ne&&ie&&i.texStorage2D(r.TEXTURE_2D,Nt,dt,Bt[0].width,Bt[0].height);for(let xt=0,Ht=Bt.length;xt<Ht;xt++)pt=Bt[xt],M.format!==Ni?vt!==null?ne?V&&i.compressedTexSubImage2D(r.TEXTURE_2D,xt,0,0,pt.width,pt.height,vt,pt.data):i.compressedTexImage2D(r.TEXTURE_2D,xt,dt,pt.width,pt.height,0,pt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?V&&i.texSubImage2D(r.TEXTURE_2D,xt,0,0,pt.width,pt.height,vt,Ut,pt.data):i.texImage2D(r.TEXTURE_2D,xt,dt,pt.width,pt.height,0,vt,Ut,pt.data)}else if(M.isDataArrayTexture)if(ne){if(ie&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Nt,dt,tt.width,tt.height,tt.depth),V)if(M.layerUpdates.size>0){const xt=j_(tt.width,tt.height,M.format,M.type);for(const Ht of M.layerUpdates){const zt=tt.data.subarray(Ht*xt/tt.data.BYTES_PER_ELEMENT,(Ht+1)*xt/tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ht,tt.width,tt.height,1,vt,Ut,zt)}M.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,vt,Ut,tt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,dt,tt.width,tt.height,tt.depth,0,vt,Ut,tt.data);else if(M.isData3DTexture)ne?(ie&&i.texStorage3D(r.TEXTURE_3D,Nt,dt,tt.width,tt.height,tt.depth),V&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,vt,Ut,tt.data)):i.texImage3D(r.TEXTURE_3D,0,dt,tt.width,tt.height,tt.depth,0,vt,Ut,tt.data);else if(M.isFramebufferTexture){if(ie)if(ne)i.texStorage2D(r.TEXTURE_2D,Nt,dt,tt.width,tt.height);else{let xt=tt.width,Ht=tt.height;for(let zt=0;zt<Nt;zt++)i.texImage2D(r.TEXTURE_2D,zt,dt,xt,Ht,0,vt,Ut,null),xt>>=1,Ht>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){const xt=r.canvas;if(xt.hasAttribute("layoutsubtree")||xt.setAttribute("layoutsubtree","true"),tt.parentNode!==xt){xt.appendChild(tt),S.add(M),xt.onpaint=re=>{const sn=re.changedElements;for(const Oe of S)sn.includes(Oe.image)&&(Oe.needsUpdate=!0)},xt.requestPaint();return}const Ht=0,zt=r.RGBA,Ct=r.RGBA,Kt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Ht,zt,Ct,Kt,tt),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Bt.length>0){if(ne&&ie){const xt=Dt(Bt[0]);i.texStorage2D(r.TEXTURE_2D,Nt,dt,xt.width,xt.height)}for(let xt=0,Ht=Bt.length;xt<Ht;xt++)pt=Bt[xt],ne?V&&i.texSubImage2D(r.TEXTURE_2D,xt,0,0,vt,Ut,pt):i.texImage2D(r.TEXTURE_2D,xt,dt,vt,Ut,pt);M.generateMipmaps=!1}else if(ne){if(ie){const xt=Dt(tt);i.texStorage2D(r.TEXTURE_2D,Nt,dt,xt.width,xt.height)}V&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,vt,Ut,tt)}else i.texImage2D(r.TEXTURE_2D,0,dt,vt,Ut,tt);v(M)&&D(ut),Rt.__version=At.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ae(w,M,G){if(M.image.length!==6)return;const ut=lt(w,M),gt=M.source;i.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+G);const At=s.get(gt);if(gt.version!==At.__version||ut===!0){i.activeTexture(r.TEXTURE0+G);const Rt=Re.getPrimaries(Re.workingColorSpace),st=M.colorSpace===us?null:Re.getPrimaries(M.colorSpace),tt=M.colorSpace===us||Rt===st?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);const vt=M.isCompressedTexture||M.image[0].isCompressedTexture,Ut=M.image[0]&&M.image[0].isDataTexture,dt=[];for(let Ct=0;Ct<6;Ct++)!vt&&!Ut?dt[Ct]=y(M.image[Ct],!0,l.maxCubemapSize):dt[Ct]=Ut?M.image[Ct].image:M.image[Ct],dt[Ct]=ht(M,dt[Ct]);const pt=dt[0],Bt=c.convert(M.format,M.colorSpace),ne=c.convert(M.type),ie=L(M.internalFormat,Bt,ne,M.normalized,M.colorSpace),V=M.isVideoTexture!==!0,Nt=At.__version===void 0||ut===!0,xt=gt.dataReady;let Ht=z(M,pt);Pt(r.TEXTURE_CUBE_MAP,M);let zt;if(vt){V&&Nt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ht,ie,pt.width,pt.height);for(let Ct=0;Ct<6;Ct++){zt=dt[Ct].mipmaps;for(let Kt=0;Kt<zt.length;Kt++){const re=zt[Kt];M.format!==Ni?Bt!==null?V?xt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Kt,0,0,re.width,re.height,Bt,re.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Kt,ie,re.width,re.height,0,re.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?xt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Kt,0,0,re.width,re.height,Bt,ne,re.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Kt,ie,re.width,re.height,0,Bt,ne,re.data)}}}else{if(zt=M.mipmaps,V&&Nt){zt.length>0&&Ht++;const Ct=Dt(dt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ht,ie,Ct.width,Ct.height)}for(let Ct=0;Ct<6;Ct++)if(Ut){V?xt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,dt[Ct].width,dt[Ct].height,Bt,ne,dt[Ct].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,ie,dt[Ct].width,dt[Ct].height,0,Bt,ne,dt[Ct].data);for(let Kt=0;Kt<zt.length;Kt++){const sn=zt[Kt].image[Ct].image;V?xt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Kt+1,0,0,sn.width,sn.height,Bt,ne,sn.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Kt+1,ie,sn.width,sn.height,0,Bt,ne,sn.data)}}else{V?xt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,Bt,ne,dt[Ct]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,ie,Bt,ne,dt[Ct]);for(let Kt=0;Kt<zt.length;Kt++){const re=zt[Kt];V?xt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Kt+1,0,0,Bt,ne,re.image[Ct]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Kt+1,ie,Bt,ne,re.image[Ct])}}}v(M)&&D(r.TEXTURE_CUBE_MAP),At.__version=gt.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function $t(w,M,G,ut,gt,At){const Rt=c.convert(G.format,G.colorSpace),st=c.convert(G.type),tt=L(G.internalFormat,Rt,st,G.normalized,G.colorSpace),vt=s.get(M),Ut=s.get(G);if(Ut.__renderTarget=M,!vt.__hasExternalTextures){const dt=Math.max(1,M.width>>At),pt=Math.max(1,M.height>>At);gt===r.TEXTURE_3D||gt===r.TEXTURE_2D_ARRAY?i.texImage3D(gt,At,tt,dt,pt,M.depth,0,Rt,st,null):i.texImage2D(gt,At,tt,dt,pt,0,Rt,st,null)}i.bindFramebuffer(r.FRAMEBUFFER,w),Y(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ut,gt,Ut.__webglTexture,0,Qe(M)):(gt===r.TEXTURE_2D||gt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ut,gt,Ut.__webglTexture,At),i.bindFramebuffer(r.FRAMEBUFFER,null)}function ze(w,M,G){if(r.bindRenderbuffer(r.RENDERBUFFER,w),M.depthBuffer){const ut=M.depthTexture,gt=ut&&ut.isDepthTexture?ut.type:null,At=k(M.stencilBuffer,gt),Rt=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Y(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Qe(M),At,M.width,M.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,Qe(M),At,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,At,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Rt,r.RENDERBUFFER,w)}else{const ut=M.textures;for(let gt=0;gt<ut.length;gt++){const At=ut[gt],Rt=c.convert(At.format,At.colorSpace),st=c.convert(At.type),tt=L(At.internalFormat,Rt,st,At.normalized,At.colorSpace);Y(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Qe(M),tt,M.width,M.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,Qe(M),tt,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,tt,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function fe(w,M,G){const ut=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=s.get(M.depthTexture);if(gt.__renderTarget=M,(!gt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ut){if(gt.__webglInit===void 0&&(gt.__webglInit=!0,M.depthTexture.addEventListener("dispose",I)),gt.__webglTexture===void 0){gt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,gt.__webglTexture),Pt(r.TEXTURE_CUBE_MAP,M.depthTexture);const vt=c.convert(M.depthTexture.format),Ut=c.convert(M.depthTexture.type);let dt;M.depthTexture.format===Ta?dt=r.DEPTH_COMPONENT24:M.depthTexture.format===Gs&&(dt=r.DEPTH24_STENCIL8);for(let pt=0;pt<6;pt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,dt,M.width,M.height,0,vt,Ut,null)}}else ct(M.depthTexture,0);const At=gt.__webglTexture,Rt=Qe(M),st=ut?r.TEXTURE_CUBE_MAP_POSITIVE_X+G:r.TEXTURE_2D,tt=M.depthTexture.format===Gs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ta)Y(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,tt,st,At,0,Rt):r.framebufferTexture2D(r.FRAMEBUFFER,tt,st,At,0);else if(M.depthTexture.format===Gs)Y(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,tt,st,At,0,Rt):r.framebufferTexture2D(r.FRAMEBUFFER,tt,st,At,0);else throw new Error("Unknown depthTexture format")}function ve(w){const M=s.get(w),G=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const ut=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ut){const gt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ut.removeEventListener("dispose",gt)};ut.addEventListener("dispose",gt),M.__depthDisposeCallback=gt}M.__boundDepthTexture=ut}if(w.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let ut=0;ut<6;ut++)fe(M.__webglFramebuffer[ut],w,ut);else{const ut=w.texture.mipmaps;ut&&ut.length>0?fe(M.__webglFramebuffer[0],w,0):fe(M.__webglFramebuffer,w,0)}else if(G){M.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[ut]),M.__webglDepthbuffer[ut]===void 0)M.__webglDepthbuffer[ut]=r.createRenderbuffer(),ze(M.__webglDepthbuffer[ut],w,!1);else{const gt=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,At=M.__webglDepthbuffer[ut];r.bindRenderbuffer(r.RENDERBUFFER,At),r.framebufferRenderbuffer(r.FRAMEBUFFER,gt,r.RENDERBUFFER,At)}}else{const ut=w.texture.mipmaps;if(ut&&ut.length>0?i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),ze(M.__webglDepthbuffer,w,!1);else{const gt=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,At=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,At),r.framebufferRenderbuffer(r.FRAMEBUFFER,gt,r.RENDERBUFFER,At)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function De(w,M,G){const ut=s.get(w);M!==void 0&&$t(ut.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&ve(w)}function le(w){const M=w.texture,G=s.get(w),ut=s.get(M);w.addEventListener("dispose",b);const gt=w.textures,At=w.isWebGLCubeRenderTarget===!0,Rt=gt.length>1;if(Rt||(ut.__webglTexture===void 0&&(ut.__webglTexture=r.createTexture()),ut.__version=M.version,f.memory.textures++),At){G.__webglFramebuffer=[];for(let st=0;st<6;st++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[st]=[];for(let tt=0;tt<M.mipmaps.length;tt++)G.__webglFramebuffer[st][tt]=r.createFramebuffer()}else G.__webglFramebuffer[st]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let st=0;st<M.mipmaps.length;st++)G.__webglFramebuffer[st]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(Rt)for(let st=0,tt=gt.length;st<tt;st++){const vt=s.get(gt[st]);vt.__webglTexture===void 0&&(vt.__webglTexture=r.createTexture(),f.memory.textures++)}if(w.samples>0&&Y(w)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let st=0;st<gt.length;st++){const tt=gt[st];G.__webglColorRenderbuffer[st]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[st]);const vt=c.convert(tt.format,tt.colorSpace),Ut=c.convert(tt.type),dt=L(tt.internalFormat,vt,Ut,tt.normalized,tt.colorSpace,w.isXRRenderTarget===!0),pt=Qe(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,pt,dt,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+st,r.RENDERBUFFER,G.__webglColorRenderbuffer[st])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),ze(G.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(At){i.bindTexture(r.TEXTURE_CUBE_MAP,ut.__webglTexture),Pt(r.TEXTURE_CUBE_MAP,M);for(let st=0;st<6;st++)if(M.mipmaps&&M.mipmaps.length>0)for(let tt=0;tt<M.mipmaps.length;tt++)$t(G.__webglFramebuffer[st][tt],w,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+st,tt);else $t(G.__webglFramebuffer[st],w,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);v(M)&&D(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Rt){for(let st=0,tt=gt.length;st<tt;st++){const vt=gt[st],Ut=s.get(vt);let dt=r.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(dt=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(dt,Ut.__webglTexture),Pt(dt,vt),$t(G.__webglFramebuffer,w,vt,r.COLOR_ATTACHMENT0+st,dt,0),v(vt)&&D(dt)}i.unbindTexture()}else{let st=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(st=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(st,ut.__webglTexture),Pt(st,M),M.mipmaps&&M.mipmaps.length>0)for(let tt=0;tt<M.mipmaps.length;tt++)$t(G.__webglFramebuffer[tt],w,M,r.COLOR_ATTACHMENT0,st,tt);else $t(G.__webglFramebuffer,w,M,r.COLOR_ATTACHMENT0,st,0);v(M)&&D(st),i.unbindTexture()}w.depthBuffer&&ve(w)}function tn(w){const M=w.textures;for(let G=0,ut=M.length;G<ut;G++){const gt=M[G];if(v(gt)){const At=O(w),Rt=s.get(gt).__webglTexture;i.bindTexture(At,Rt),D(At),i.unbindTexture()}}}const Xe=[],fn=[];function q(w){if(w.samples>0){if(Y(w)===!1){const M=w.textures,G=w.width,ut=w.height;let gt=r.COLOR_BUFFER_BIT;const At=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Rt=s.get(w),st=M.length>1;if(st)for(let vt=0;vt<M.length;vt++)i.bindFramebuffer(r.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Rt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);const tt=w.texture.mipmaps;tt&&tt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let vt=0;vt<M.length;vt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(gt|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(gt|=r.STENCIL_BUFFER_BIT)),st){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Rt.__webglColorRenderbuffer[vt]);const Ut=s.get(M[vt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ut,0)}r.blitFramebuffer(0,0,G,ut,0,0,G,ut,gt,r.NEAREST),m===!0&&(Xe.length=0,fn.length=0,Xe.push(r.COLOR_ATTACHMENT0+vt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Xe.push(At),fn.push(At),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,fn)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Xe))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),st)for(let vt=0;vt<M.length;vt++){i.bindFramebuffer(r.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,Rt.__webglColorRenderbuffer[vt]);const Ut=s.get(M[vt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Rt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,Ut,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&m){const M=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Qe(w){return Math.min(l.maxSamples,w.samples)}function Y(w){const M=s.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Xt(w){const M=f.render.frame;x.get(w)!==M&&(x.set(w,M),w.update())}function ht(w,M){const G=w.colorSpace,ut=w.format,gt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||G!==au&&G!==us&&(Re.getTransfer(G)===ke?(ut!==Ni||gt!==fi)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ae("WebGLTextures: Unsupported texture color space:",G)),M}function Dt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(p.width=w.naturalWidth||w.width,p.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(p.width=w.displayWidth,p.height=w.displayHeight):(p.width=w.width,p.height=w.height),p}this.allocateTextureUnit=U,this.resetTextureUnits=mt,this.getTextureUnits=St,this.setTextureUnits=W,this.setTexture2D=ct,this.setTexture2DArray=yt,this.setTexture3D=bt,this.setTextureCube=N,this.rebindTextures=De,this.setupRenderTarget=le,this.updateRenderTargetMipmap=tn,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=$t,this.useMultisampledRTT=Y,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function TA(r,t){function i(s,l=us){let c;const f=Re.getTransfer(l);if(s===fi)return r.UNSIGNED_BYTE;if(s===up)return r.UNSIGNED_SHORT_4_4_4_4;if(s===fp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Dv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Uv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===wv)return r.BYTE;if(s===Cv)return r.SHORT;if(s===ol)return r.UNSIGNED_SHORT;if(s===cp)return r.INT;if(s===ji)return r.UNSIGNED_INT;if(s===Xi)return r.FLOAT;if(s===ba)return r.HALF_FLOAT;if(s===Nv)return r.ALPHA;if(s===Lv)return r.RGB;if(s===Ni)return r.RGBA;if(s===Ta)return r.DEPTH_COMPONENT;if(s===Gs)return r.DEPTH_STENCIL;if(s===Ov)return r.RED;if(s===dp)return r.RED_INTEGER;if(s===ks)return r.RG;if(s===hp)return r.RG_INTEGER;if(s===pp)return r.RGBA_INTEGER;if(s===Kc||s===Qc||s===Jc||s===$c)if(f===ke)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Kc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Kc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Qc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Jc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===$c)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Mh||s===Eh||s===bh||s===Th)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Mh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Eh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===bh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Th)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ah||s===Rh||s===wh||s===Ch||s===Dh||s===eu||s===Uh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Ah||s===Rh)return f===ke?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===wh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Ch)return c.COMPRESSED_R11_EAC;if(s===Dh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===eu)return c.COMPRESSED_RG11_EAC;if(s===Uh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Nh||s===Lh||s===Oh||s===Ph||s===zh||s===Ih||s===Fh||s===Bh||s===Hh||s===Gh||s===Vh||s===kh||s===Xh||s===Wh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Nh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Lh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Oh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ph)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===zh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ih)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Fh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Bh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Hh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Gh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===kh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Wh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Yh||s===qh||s===jh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Yh)return f===ke?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===qh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===jh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Zh||s===Kh||s===nu||s===Qh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Zh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Kh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===nu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Qh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ll?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const AA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RA=`
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

}`;class wA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Xv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Zi({vertexShader:AA,fragmentShader:RA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new cn(new fu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CA extends Xs{constructor(t,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,x=null,S=null,_=null,E=null,T=null;const C=typeof XRWebGLBinding<"u",y=new wA,v={},D=i.getContextAttributes();let O=null,L=null;const k=[],z=[],I=new _e;let b=null;const P=new ui;P.viewport=new un;const K=new ui;K.viewport=new un;const F=[P,K],Q=new FM;let mt=null,St=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(lt){let wt=k[lt];return wt===void 0&&(wt=new Pd,k[lt]=wt),wt.getTargetRaySpace()},this.getControllerGrip=function(lt){let wt=k[lt];return wt===void 0&&(wt=new Pd,k[lt]=wt),wt.getGripSpace()},this.getHand=function(lt){let wt=k[lt];return wt===void 0&&(wt=new Pd,k[lt]=wt),wt.getHandSpace()};function W(lt){const wt=z.indexOf(lt.inputSource);if(wt===-1)return;const Lt=k[wt];Lt!==void 0&&(Lt.update(lt.inputSource,lt.frame,p||f),Lt.dispatchEvent({type:lt.type,data:lt.inputSource}))}function U(){l.removeEventListener("select",W),l.removeEventListener("selectstart",W),l.removeEventListener("selectend",W),l.removeEventListener("squeeze",W),l.removeEventListener("squeezestart",W),l.removeEventListener("squeezeend",W),l.removeEventListener("end",U),l.removeEventListener("inputsourceschange",B);for(let lt=0;lt<k.length;lt++){const wt=z[lt];wt!==null&&(z[lt]=null,k[lt].disconnect(wt))}mt=null,St=null,y.reset();for(const lt in v)delete v[lt];t.setRenderTarget(O),E=null,_=null,S=null,l=null,L=null,Pt.stop(),s.isPresenting=!1,t.setPixelRatio(b),t.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(lt){c=lt,s.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(lt){h=lt,s.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(lt){p=lt},this.getBaseLayer=function(){return _!==null?_:E},this.getBinding=function(){return S===null&&C&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(lt){if(l=lt,l!==null){if(O=t.getRenderTarget(),l.addEventListener("select",W),l.addEventListener("selectstart",W),l.addEventListener("selectend",W),l.addEventListener("squeeze",W),l.addEventListener("squeezestart",W),l.addEventListener("squeezeend",W),l.addEventListener("end",U),l.addEventListener("inputsourceschange",B),D.xrCompatible!==!0&&await i.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(I),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Lt=null,kt=null,ae=null;D.depth&&(ae=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Lt=D.stencil?Gs:Ta,kt=D.stencil?ll:ji);const $t={colorFormat:i.RGBA8,depthFormat:ae,scaleFactor:c};S=this.getBinding(),_=S.createProjectionLayer($t),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),L=new qi(_.textureWidth,_.textureHeight,{format:Ni,type:fi,depthTexture:new jr(_.textureWidth,_.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Lt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,Lt),l.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),L=new qi(E.framebufferWidth,E.framebufferHeight,{format:Ni,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Pt.setContext(l),Pt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function B(lt){for(let wt=0;wt<lt.removed.length;wt++){const Lt=lt.removed[wt],kt=z.indexOf(Lt);kt>=0&&(z[kt]=null,k[kt].disconnect(Lt))}for(let wt=0;wt<lt.added.length;wt++){const Lt=lt.added[wt];let kt=z.indexOf(Lt);if(kt===-1){for(let $t=0;$t<k.length;$t++)if($t>=z.length){z.push(Lt),kt=$t;break}else if(z[$t]===null){z[$t]=Lt,kt=$t;break}if(kt===-1)break}const ae=k[kt];ae&&ae.connect(Lt)}}const ct=new $,yt=new $;function bt(lt,wt,Lt){ct.setFromMatrixPosition(wt.matrixWorld),yt.setFromMatrixPosition(Lt.matrixWorld);const kt=ct.distanceTo(yt),ae=wt.projectionMatrix.elements,$t=Lt.projectionMatrix.elements,ze=ae[14]/(ae[10]-1),fe=ae[14]/(ae[10]+1),ve=(ae[9]+1)/ae[5],De=(ae[9]-1)/ae[5],le=(ae[8]-1)/ae[0],tn=($t[8]+1)/$t[0],Xe=ze*le,fn=ze*tn,q=kt/(-le+tn),Qe=q*-le;if(wt.matrixWorld.decompose(lt.position,lt.quaternion,lt.scale),lt.translateX(Qe),lt.translateZ(q),lt.matrixWorld.compose(lt.position,lt.quaternion,lt.scale),lt.matrixWorldInverse.copy(lt.matrixWorld).invert(),ae[10]===-1)lt.projectionMatrix.copy(wt.projectionMatrix),lt.projectionMatrixInverse.copy(wt.projectionMatrixInverse);else{const Y=ze+q,Xt=fe+q,ht=Xe-Qe,Dt=fn+(kt-Qe),w=ve*fe/Xt*Y,M=De*fe/Xt*Y;lt.projectionMatrix.makePerspective(ht,Dt,w,M,Y,Xt),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert()}}function N(lt,wt){wt===null?lt.matrixWorld.copy(lt.matrix):lt.matrixWorld.multiplyMatrices(wt.matrixWorld,lt.matrix),lt.matrixWorldInverse.copy(lt.matrixWorld).invert()}this.updateCamera=function(lt){if(l===null)return;let wt=lt.near,Lt=lt.far;y.texture!==null&&(y.depthNear>0&&(wt=y.depthNear),y.depthFar>0&&(Lt=y.depthFar)),Q.near=K.near=P.near=wt,Q.far=K.far=P.far=Lt,(mt!==Q.near||St!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),mt=Q.near,St=Q.far),Q.layers.mask=lt.layers.mask|6,P.layers.mask=Q.layers.mask&-5,K.layers.mask=Q.layers.mask&-3;const kt=lt.parent,ae=Q.cameras;N(Q,kt);for(let $t=0;$t<ae.length;$t++)N(ae[$t],kt);ae.length===2?bt(Q,P,K):Q.projectionMatrix.copy(P.projectionMatrix),J(lt,Q,kt)};function J(lt,wt,Lt){Lt===null?lt.matrix.copy(wt.matrixWorld):(lt.matrix.copy(Lt.matrixWorld),lt.matrix.invert(),lt.matrix.multiply(wt.matrixWorld)),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.updateMatrixWorld(!0),lt.projectionMatrix.copy(wt.projectionMatrix),lt.projectionMatrixInverse.copy(wt.projectionMatrixInverse),lt.isPerspectiveCamera&&(lt.fov=tp*2*Math.atan(1/lt.projectionMatrix.elements[5]),lt.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(_===null&&E===null))return m},this.setFoveation=function(lt){m=lt,_!==null&&(_.fixedFoveation=lt),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=lt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Q)},this.getCameraTexture=function(lt){return v[lt]};let Tt=null;function Ot(lt,wt){if(x=wt.getViewerPose(p||f),T=wt,x!==null){const Lt=x.views;E!==null&&(t.setRenderTargetFramebuffer(L,E.framebuffer),t.setRenderTarget(L));let kt=!1;Lt.length!==Q.cameras.length&&(Q.cameras.length=0,kt=!0);for(let fe=0;fe<Lt.length;fe++){const ve=Lt[fe];let De=null;if(E!==null)De=E.getViewport(ve);else{const tn=S.getViewSubImage(_,ve);De=tn.viewport,fe===0&&(t.setRenderTargetTextures(L,tn.colorTexture,tn.depthStencilTexture),t.setRenderTarget(L))}let le=F[fe];le===void 0&&(le=new ui,le.layers.enable(fe),le.viewport=new un,F[fe]=le),le.matrix.fromArray(ve.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(ve.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(De.x,De.y,De.width,De.height),fe===0&&(Q.matrix.copy(le.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),kt===!0&&Q.cameras.push(le)}const ae=l.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){S=s.getBinding();const fe=S.getDepthInformation(Lt[0]);fe&&fe.isValid&&fe.texture&&y.init(fe,l.renderState)}if(ae&&ae.includes("camera-access")&&C){t.state.unbindTexture(),S=s.getBinding();for(let fe=0;fe<Lt.length;fe++){const ve=Lt[fe].camera;if(ve){let De=v[ve];De||(De=new Xv,v[ve]=De);const le=S.getCameraImage(ve);De.sourceTexture=le}}}}for(let Lt=0;Lt<k.length;Lt++){const kt=z[Lt],ae=k[Lt];kt!==null&&ae!==void 0&&ae.update(kt,wt,p||f)}Tt&&Tt(lt,wt),wt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:wt}),T=null}const Pt=new Zv;Pt.setAnimationLoop(Ot),this.setAnimationLoop=function(lt){Tt=lt},this.dispose=function(){}}}const DA=new rn,nx=new ue;nx.set(-1,0,0,0,1,0,0,0,1);function UA(r,t){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,Wv(r)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,D,O,L){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?c(y,v):v.isMeshLambertMaterial?(c(y,v),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(c(y,v),S(y,v)):v.isMeshPhongMaterial?(c(y,v),x(y,v),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(c(y,v),_(y,v),v.isMeshPhysicalMaterial&&E(y,v,L)):v.isMeshMatcapMaterial?(c(y,v),T(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),C(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(f(y,v),v.isLineDashedMaterial&&h(y,v)):v.isPointsMaterial?m(y,v,D,O):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Qn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Qn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const D=t.get(v),O=D.envMap,L=D.envMapRotation;O&&(y.envMap.value=O,y.envMapRotation.value.setFromMatrix4(DA.makeRotationFromEuler(L)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(nx),y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function f(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function h(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,D,O){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*D,y.scale.value=O*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function x(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function S(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function _(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function E(y,v,D){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Qn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,v){v.matcap&&(y.matcap.value=v.matcap)}function C(y,v){const D=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function NA(r,t,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,O){const L=O.program;s.uniformBlockBinding(D,L)}function p(D,O){let L=l[D.id];L===void 0&&(T(D),L=x(D),l[D.id]=L,D.addEventListener("dispose",y));const k=O.program;s.updateUBOMapping(D,k);const z=t.render.frame;c[D.id]!==z&&(_(D),c[D.id]=z)}function x(D){const O=S();D.__bindingPointIndex=O;const L=r.createBuffer(),k=D.__size,z=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,k,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,O,L),L}function S(){for(let D=0;D<h;D++)if(f.indexOf(D)===-1)return f.push(D),D;return Ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(D){const O=l[D.id],L=D.uniforms,k=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,O);for(let z=0,I=L.length;z<I;z++){const b=Array.isArray(L[z])?L[z]:[L[z]];for(let P=0,K=b.length;P<K;P++){const F=b[P];if(E(F,z,P,k)===!0){const Q=F.__offset,mt=Array.isArray(F.value)?F.value:[F.value];let St=0;for(let W=0;W<mt.length;W++){const U=mt[W],B=C(U);typeof U=="number"||typeof U=="boolean"?(F.__data[0]=U,r.bufferSubData(r.UNIFORM_BUFFER,Q+St,F.__data)):U.isMatrix3?(F.__data[0]=U.elements[0],F.__data[1]=U.elements[1],F.__data[2]=U.elements[2],F.__data[3]=0,F.__data[4]=U.elements[3],F.__data[5]=U.elements[4],F.__data[6]=U.elements[5],F.__data[7]=0,F.__data[8]=U.elements[6],F.__data[9]=U.elements[7],F.__data[10]=U.elements[8],F.__data[11]=0):ArrayBuffer.isView(U)?F.__data.set(new U.constructor(U.buffer,U.byteOffset,F.__data.length)):(U.toArray(F.__data,St),St+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Q,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(D,O,L,k){const z=D.value,I=O+"_"+L;if(k[I]===void 0)return typeof z=="number"||typeof z=="boolean"?k[I]=z:ArrayBuffer.isView(z)?k[I]=z.slice():k[I]=z.clone(),!0;{const b=k[I];if(typeof z=="number"||typeof z=="boolean"){if(b!==z)return k[I]=z,!0}else{if(ArrayBuffer.isView(z))return!0;if(b.equals(z)===!1)return b.copy(z),!0}}return!1}function T(D){const O=D.uniforms;let L=0;const k=16;for(let I=0,b=O.length;I<b;I++){const P=Array.isArray(O[I])?O[I]:[O[I]];for(let K=0,F=P.length;K<F;K++){const Q=P[K],mt=Array.isArray(Q.value)?Q.value:[Q.value];for(let St=0,W=mt.length;St<W;St++){const U=mt[St],B=C(U),ct=L%k,yt=ct%B.boundary,bt=ct+yt;L+=yt,bt!==0&&k-bt<B.storage&&(L+=k-bt),Q.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=L,L+=B.storage}}}const z=L%k;return z>0&&(L+=k-z),D.__size=L,D.__cache={},this}function C(D){const O={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(O.boundary=4,O.storage=4):D.isVector2?(O.boundary=8,O.storage=8):D.isVector3||D.isColor?(O.boundary=16,O.storage=12):D.isVector4?(O.boundary=16,O.storage=16):D.isMatrix3?(O.boundary=48,O.storage=48):D.isMatrix4?(O.boundary=64,O.storage=64):D.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(O.boundary=16,O.storage=D.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",D),O}function y(D){const O=D.target;O.removeEventListener("dispose",y);const L=f.indexOf(O.__bindingPointIndex);f.splice(L,1),r.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function v(){for(const D in l)r.deleteBuffer(l[D]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}const LA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function OA(){return Hi===null&&(Hi=new SM(LA,16,16,ks,ba),Hi.name="DFG_LUT",Hi.minFilter=Bn,Hi.magFilter=Bn,Hi.wrapS=Sa,Hi.wrapT=Sa,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class PA{constructor(t={}){const{canvas:i=Zy(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:_=!1,outputBufferType:E=fi}=t;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=f;const C=E,y=new Set([pp,hp,dp]),v=new Set([fi,ji,ol,ll,up,fp]),D=new Uint32Array(4),O=new Int32Array(4),L=new $;let k=null,z=null;const I=[],b=[];let P=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const K=this;let F=!1,Q=null;this._outputColorSpace=Mi;let mt=0,St=0,W=null,U=-1,B=null;const ct=new un,yt=new un;let bt=null;const N=new be(0);let J=0,Tt=i.width,Ot=i.height,Pt=1,lt=null,wt=null;const Lt=new un(0,0,Tt,Ot),kt=new un(0,0,Tt,Ot);let ae=!1;const $t=new Mp;let ze=!1,fe=!1;const ve=new rn,De=new $,le=new un,tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function fn(){return W===null?Pt:1}let q=s;function Qe(A,j){return i.getContext(A,j)}try{const A={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${op}`),i.addEventListener("webglcontextlost",Ct,!1),i.addEventListener("webglcontextrestored",Kt,!1),i.addEventListener("webglcontextcreationerror",re,!1),q===null){const j="webgl2";if(q=Qe(j,A),q===null)throw Qe(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ae("WebGLRenderer: "+A.message),A}let Y,Xt,ht,Dt,w,M,G,ut,gt,At,Rt,st,tt,vt,Ut,dt,pt,Bt,ne,ie,V,Nt,xt;function Ht(){Y=new O1(q),Y.init(),V=new TA(q,Y),Xt=new A1(q,Y,t,V),ht=new EA(q,Y),Xt.reversedDepthBuffer&&_&&ht.buffers.depth.setReversed(!0),Dt=new I1(q),w=new cA,M=new bA(q,Y,ht,w,Xt,V,Dt),G=new L1(K),ut=new GM(q),Nt=new b1(q,ut),gt=new P1(q,ut,Dt,Nt),At=new B1(q,gt,ut,Nt,Dt),Bt=new F1(q,Xt,M),Ut=new R1(w),Rt=new lA(K,G,Y,Xt,Nt,Ut),st=new UA(K,w),tt=new fA,vt=new _A(Y),pt=new E1(K,G,ht,At,T,m),dt=new MA(K,At,Xt),xt=new NA(q,Dt,Xt,ht),ne=new T1(q,Y,Dt),ie=new z1(q,Y,Dt),Dt.programs=Rt.programs,K.capabilities=Xt,K.extensions=Y,K.properties=w,K.renderLists=tt,K.shadowMap=dt,K.state=ht,K.info=Dt}Ht(),C!==fi&&(P=new G1(C,i.width,i.height,l,c));const zt=new CA(K,q);this.xr=zt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=Y.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Y.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Pt},this.setPixelRatio=function(A){A!==void 0&&(Pt=A,this.setSize(Tt,Ot,!1))},this.getSize=function(A){return A.set(Tt,Ot)},this.setSize=function(A,j,rt=!0){if(zt.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Tt=A,Ot=j,i.width=Math.floor(A*Pt),i.height=Math.floor(j*Pt),rt===!0&&(i.style.width=A+"px",i.style.height=j+"px"),P!==null&&P.setSize(i.width,i.height),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(Tt*Pt,Ot*Pt).floor()},this.setDrawingBufferSize=function(A,j,rt){Tt=A,Ot=j,Pt=rt,i.width=Math.floor(A*rt),i.height=Math.floor(j*rt),this.setViewport(0,0,A,j)},this.setEffects=function(A){if(C===fi){Ae("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let j=0;j<A.length;j++)if(A[j].isOutputPass===!0){oe("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ct)},this.getViewport=function(A){return A.copy(Lt)},this.setViewport=function(A,j,rt,it){A.isVector4?Lt.set(A.x,A.y,A.z,A.w):Lt.set(A,j,rt,it),ht.viewport(ct.copy(Lt).multiplyScalar(Pt).round())},this.getScissor=function(A){return A.copy(kt)},this.setScissor=function(A,j,rt,it){A.isVector4?kt.set(A.x,A.y,A.z,A.w):kt.set(A,j,rt,it),ht.scissor(yt.copy(kt).multiplyScalar(Pt).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(A){ht.setScissorTest(ae=A)},this.setOpaqueSort=function(A){lt=A},this.setTransparentSort=function(A){wt=A},this.getClearColor=function(A){return A.copy(pt.getClearColor())},this.setClearColor=function(){pt.setClearColor(...arguments)},this.getClearAlpha=function(){return pt.getClearAlpha()},this.setClearAlpha=function(){pt.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,rt=!0){let it=0;if(A){let at=!1;if(W!==null){const Ft=W.texture.format;at=y.has(Ft)}if(at){const Ft=W.texture.type,Yt=v.has(Ft),It=pt.getClearColor(),jt=pt.getClearAlpha(),qt=It.r,te=It.g,de=It.b;Yt?(D[0]=qt,D[1]=te,D[2]=de,D[3]=jt,q.clearBufferuiv(q.COLOR,0,D)):(O[0]=qt,O[1]=te,O[2]=de,O[3]=jt,q.clearBufferiv(q.COLOR,0,O))}else it|=q.COLOR_BUFFER_BIT}j&&(it|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(it|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&q.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Q=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Ct,!1),i.removeEventListener("webglcontextrestored",Kt,!1),i.removeEventListener("webglcontextcreationerror",re,!1),pt.dispose(),tt.dispose(),vt.dispose(),w.dispose(),G.dispose(),At.dispose(),Nt.dispose(),xt.dispose(),Rt.dispose(),zt.dispose(),zt.removeEventListener("sessionstart",$r),zt.removeEventListener("sessionend",to),On.stop()};function Ct(A){A.preventDefault(),ou("WebGLRenderer: Context Lost."),F=!0}function Kt(){ou("WebGLRenderer: Context Restored."),F=!1;const A=Dt.autoReset,j=dt.enabled,rt=dt.autoUpdate,it=dt.needsUpdate,at=dt.type;Ht(),Dt.autoReset=A,dt.enabled=j,dt.autoUpdate=rt,dt.needsUpdate=it,dt.type=at}function re(A){Ae("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function sn(A){const j=A.target;j.removeEventListener("dispose",sn),Oe(j)}function Oe(A){di(A),w.remove(A)}function di(A){const j=w.get(A).programs;j!==void 0&&(j.forEach(function(rt){Rt.releaseProgram(rt)}),A.isShaderMaterial&&Rt.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,rt,it,at,Ft){j===null&&(j=tn);const Yt=at.isMesh&&at.matrixWorld.determinant()<0,It=Ca(A,j,rt,it,at);ht.setMaterial(it,Yt);let jt=rt.index,qt=1;if(it.wireframe===!0){if(jt=gt.getWireframeAttribute(rt),jt===void 0)return;qt=2}const te=rt.drawRange,de=rt.attributes.position;let Jt=te.start*qt,Ue=(te.start+te.count)*qt;Ft!==null&&(Jt=Math.max(Jt,Ft.start*qt),Ue=Math.min(Ue,(Ft.start+Ft.count)*qt)),jt!==null?(Jt=Math.max(Jt,0),Ue=Math.min(Ue,jt.count)):de!=null&&(Jt=Math.max(Jt,0),Ue=Math.min(Ue,de.count));const en=Ue-Jt;if(en<0||en===1/0)return;Nt.setup(at,it,It,rt,jt);let Ze,Fe=ne;if(jt!==null&&(Ze=ut.get(jt),Fe=ie,Fe.setIndex(Ze)),at.isMesh)it.wireframe===!0?(ht.setLineWidth(it.wireframeLinewidth*fn()),Fe.setMode(q.LINES)):Fe.setMode(q.TRIANGLES);else if(at.isLine){let Be=it.linewidth;Be===void 0&&(Be=1),ht.setLineWidth(Be*fn()),at.isLineSegments?Fe.setMode(q.LINES):at.isLineLoop?Fe.setMode(q.LINE_LOOP):Fe.setMode(q.LINE_STRIP)}else at.isPoints?Fe.setMode(q.POINTS):at.isSprite&&Fe.setMode(q.TRIANGLES);if(at.isBatchedMesh)if(Y.get("WEBGL_multi_draw"))Fe.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{const Be=at._multiDrawStarts,Wt=at._multiDrawCounts,Pn=at._multiDrawCount,xe=jt?ut.get(jt).bytesPerElement:1,yn=w.get(it).currentProgram.getUniforms();for(let $n=0;$n<Pn;$n++)yn.setValue(q,"_gl_DrawID",$n),Fe.render(Be[$n]/xe,Wt[$n])}else if(at.isInstancedMesh)Fe.renderInstances(Jt,en,at.count);else if(rt.isInstancedBufferGeometry){const Be=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Wt=Math.min(rt.instanceCount,Be);Fe.renderInstances(Jt,en,Wt)}else Fe.render(Jt,en)};function Jn(A,j,rt){A.transparent===!0&&A.side===Vi&&A.forceSinglePass===!1?(A.side=Qn,A.needsUpdate=!0,Ys(A,j,rt),A.side=hs,A.needsUpdate=!0,Ys(A,j,rt),A.side=Vi):Ys(A,j,rt)}this.compile=function(A,j,rt=null){rt===null&&(rt=A),z=vt.get(rt),z.init(j),b.push(z),rt.traverseVisible(function(at){at.isLight&&at.layers.test(j.layers)&&(z.pushLight(at),at.castShadow&&z.pushShadow(at))}),A!==rt&&A.traverseVisible(function(at){at.isLight&&at.layers.test(j.layers)&&(z.pushLight(at),at.castShadow&&z.pushShadow(at))}),z.setupLights();const it=new Set;return A.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;const Ft=at.material;if(Ft)if(Array.isArray(Ft))for(let Yt=0;Yt<Ft.length;Yt++){const It=Ft[Yt];Jn(It,rt,at),it.add(It)}else Jn(Ft,rt,at),it.add(Ft)}),z=b.pop(),it},this.compileAsync=function(A,j,rt=null){const it=this.compile(A,j,rt);return new Promise(at=>{function Ft(){if(it.forEach(function(Yt){w.get(Yt).currentProgram.isReady()&&it.delete(Yt)}),it.size===0){at(A);return}setTimeout(Ft,10)}Y.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let ps=null;function Jr(A){ps&&ps(A)}function $r(){On.stop()}function to(){On.start()}const On=new Zv;On.setAnimationLoop(Jr),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(A){ps=A,zt.setAnimationLoop(A),A===null?On.stop():On.start()},zt.addEventListener("sessionstart",$r),zt.addEventListener("sessionend",to),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){Ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;Q!==null&&Q.renderStart(A,j);const rt=zt.enabled===!0&&zt.isPresenting===!0,it=P!==null&&(W===null||rt)&&P.begin(K,W);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),zt.enabled===!0&&zt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(zt.cameraAutoUpdate===!0&&zt.updateCamera(j),j=zt.getCamera()),A.isScene===!0&&A.onBeforeRender(K,A,j,W),z=vt.get(A,b.length),z.init(j),z.state.textureUnits=M.getTextureUnits(),b.push(z),ve.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),$t.setFromProjectionMatrix(ve,Wi,j.reversedDepth),fe=this.localClippingEnabled,ze=Ut.init(this.clippingPlanes,fe),k=tt.get(A,I.length),k.init(),I.push(k),zt.enabled===!0&&zt.isPresenting===!0){const Yt=K.xr.getDepthSensingMesh();Yt!==null&&dn(Yt,j,-1/0,K.sortObjects)}dn(A,j,0,K.sortObjects),k.finish(),K.sortObjects===!0&&k.sort(lt,wt),Xe=zt.enabled===!1||zt.isPresenting===!1||zt.hasDepthSensing()===!1,Xe&&pt.addToRenderList(k,A),this.info.render.frame++,ze===!0&&Ut.beginShadows();const at=z.state.shadowsArray;if(dt.render(at,A,j),ze===!0&&Ut.endShadows(),this.info.autoReset===!0&&this.info.reset(),(it&&P.hasRenderPass())===!1){const Yt=k.opaque,It=k.transmissive;if(z.setupLights(),j.isArrayCamera){const jt=j.cameras;if(It.length>0)for(let qt=0,te=jt.length;qt<te;qt++){const de=jt[qt];Qi(Yt,It,A,de)}Xe&&pt.render(A);for(let qt=0,te=jt.length;qt<te;qt++){const de=jt[qt];wn(k,A,de,de.viewport)}}else It.length>0&&Qi(Yt,It,A,j),Xe&&pt.render(A),wn(k,A,j)}W!==null&&St===0&&(M.updateMultisampleRenderTarget(W),M.updateRenderTargetMipmap(W)),it&&P.end(K),A.isScene===!0&&A.onAfterRender(K,A,j),Nt.resetDefaultState(),U=-1,B=null,b.pop(),b.length>0?(z=b[b.length-1],M.setTextureUnits(z.state.textureUnits),ze===!0&&Ut.setGlobalState(K.clippingPlanes,z.state.camera)):z=null,I.pop(),I.length>0?k=I[I.length-1]:k=null,Q!==null&&Q.renderEnd()};function dn(A,j,rt,it){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLightProbeGrid)z.pushLightProbeGrid(A);else if(A.isLight)z.pushLight(A),A.castShadow&&z.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||$t.intersectsSprite(A)){it&&le.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ve);const Yt=At.update(A),It=A.material;It.visible&&k.push(A,Yt,It,rt,le.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||$t.intersectsObject(A))){const Yt=At.update(A),It=A.material;if(it&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),le.copy(A.boundingSphere.center)):(Yt.boundingSphere===null&&Yt.computeBoundingSphere(),le.copy(Yt.boundingSphere.center)),le.applyMatrix4(A.matrixWorld).applyMatrix4(ve)),Array.isArray(It)){const jt=Yt.groups;for(let qt=0,te=jt.length;qt<te;qt++){const de=jt[qt],Jt=It[de.materialIndex];Jt&&Jt.visible&&k.push(A,Yt,Jt,rt,le.z,de)}}else It.visible&&k.push(A,Yt,It,rt,le.z,null)}}const Ft=A.children;for(let Yt=0,It=Ft.length;Yt<It;Yt++)dn(Ft[Yt],j,rt,it)}function wn(A,j,rt,it){const{opaque:at,transmissive:Ft,transparent:Yt}=A;z.setupLightsView(rt),ze===!0&&Ut.setGlobalState(K.clippingPlanes,rt),it&&ht.viewport(ct.copy(it)),at.length>0&&Ra(at,j,rt),Ft.length>0&&Ra(Ft,j,rt),Yt.length>0&&Ra(Yt,j,rt),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Qi(A,j,rt,it){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[it.id]===void 0){const Jt=Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[it.id]=new qi(1,1,{generateMipmaps:!0,type:Jt?ba:fi,minFilter:Hs,samples:Math.max(4,Xt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace})}const Ft=z.state.transmissionRenderTarget[it.id],Yt=it.viewport||ct;Ft.setSize(Yt.z*K.transmissionResolutionScale,Yt.w*K.transmissionResolutionScale);const It=K.getRenderTarget(),jt=K.getActiveCubeFace(),qt=K.getActiveMipmapLevel();K.setRenderTarget(Ft),K.getClearColor(N),J=K.getClearAlpha(),J<1&&K.setClearColor(16777215,.5),K.clear(),Xe&&pt.render(rt);const te=K.toneMapping;K.toneMapping=Yi;const de=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),z.setupLightsView(it),ze===!0&&Ut.setGlobalState(K.clippingPlanes,it),Ra(A,rt,it),M.updateMultisampleRenderTarget(Ft),M.updateRenderTargetMipmap(Ft),Y.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Ue=0,en=j.length;Ue<en;Ue++){const Ze=j[Ue],{object:Fe,geometry:Be,material:Wt,group:Pn}=Ze;if(Wt.side===Vi&&Fe.layers.test(it.layers)){const xe=Wt.side;Wt.side=Qn,Wt.needsUpdate=!0,dl(Fe,rt,it,Be,Wt,Pn),Wt.side=xe,Wt.needsUpdate=!0,Jt=!0}}Jt===!0&&(M.updateMultisampleRenderTarget(Ft),M.updateRenderTargetMipmap(Ft))}K.setRenderTarget(It,jt,qt),K.setClearColor(N,J),de!==void 0&&(it.viewport=de),K.toneMapping=te}function Ra(A,j,rt){const it=j.isScene===!0?j.overrideMaterial:null;for(let at=0,Ft=A.length;at<Ft;at++){const Yt=A[at],{object:It,geometry:jt,group:qt}=Yt;let te=Yt.material;te.allowOverride===!0&&it!==null&&(te=it),It.layers.test(rt.layers)&&dl(It,j,rt,jt,te,qt)}}function dl(A,j,rt,it,at,Ft){A.onBeforeRender(K,j,rt,it,at,Ft),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),at.onBeforeRender(K,j,rt,it,A,Ft),at.transparent===!0&&at.side===Vi&&at.forceSinglePass===!1?(at.side=Qn,at.needsUpdate=!0,K.renderBufferDirect(rt,j,it,at,A,Ft),at.side=hs,at.needsUpdate=!0,K.renderBufferDirect(rt,j,it,at,A,Ft),at.side=Vi):K.renderBufferDirect(rt,j,it,at,A,Ft),A.onAfterRender(K,j,rt,it,at,Ft)}function Ys(A,j,rt){j.isScene!==!0&&(j=tn);const it=w.get(A),at=z.state.lights,Ft=z.state.shadowsArray,Yt=at.state.version,It=Rt.getParameters(A,at.state,Ft,j,rt,z.state.lightProbeGridArray),jt=Rt.getProgramCacheKey(It);let qt=it.programs;it.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?j.environment:null,it.fog=j.fog;const te=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;it.envMap=G.get(A.envMap||it.environment,te),it.envMapRotation=it.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,qt===void 0&&(A.addEventListener("dispose",sn),qt=new Map,it.programs=qt);let de=qt.get(jt);if(de!==void 0){if(it.currentProgram===de&&it.lightsStateVersion===Yt)return wa(A,It),de}else It.uniforms=Rt.getUniforms(A),Q!==null&&A.isNodeMaterial&&Q.build(A,rt,It),A.onBeforeCompile(It,K),de=Rt.acquireProgram(It,jt),qt.set(jt,de),it.uniforms=It.uniforms;const Jt=it.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Jt.clippingPlanes=Ut.uniform),wa(A,It),it.needsLights=ms(A),it.lightsStateVersion=Yt,it.needsLights&&(Jt.ambientLightColor.value=at.state.ambient,Jt.lightProbe.value=at.state.probe,Jt.directionalLights.value=at.state.directional,Jt.directionalLightShadows.value=at.state.directionalShadow,Jt.spotLights.value=at.state.spot,Jt.spotLightShadows.value=at.state.spotShadow,Jt.rectAreaLights.value=at.state.rectArea,Jt.ltc_1.value=at.state.rectAreaLTC1,Jt.ltc_2.value=at.state.rectAreaLTC2,Jt.pointLights.value=at.state.point,Jt.pointLightShadows.value=at.state.pointShadow,Jt.hemisphereLights.value=at.state.hemi,Jt.directionalShadowMatrix.value=at.state.directionalShadowMatrix,Jt.spotLightMatrix.value=at.state.spotLightMatrix,Jt.spotLightMap.value=at.state.spotLightMap,Jt.pointShadowMatrix.value=at.state.pointShadowMatrix),it.lightProbeGrid=z.state.lightProbeGridArray.length>0,it.currentProgram=de,it.uniformsList=null,de}function eo(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=tu.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function wa(A,j){const rt=w.get(A);rt.outputColorSpace=j.outputColorSpace,rt.batching=j.batching,rt.batchingColor=j.batchingColor,rt.instancing=j.instancing,rt.instancingColor=j.instancingColor,rt.instancingMorph=j.instancingMorph,rt.skinning=j.skinning,rt.morphTargets=j.morphTargets,rt.morphNormals=j.morphNormals,rt.morphColors=j.morphColors,rt.morphTargetsCount=j.morphTargetsCount,rt.numClippingPlanes=j.numClippingPlanes,rt.numIntersection=j.numClipIntersection,rt.vertexAlphas=j.vertexAlphas,rt.vertexTangents=j.vertexTangents,rt.toneMapping=j.toneMapping}function no(A,j){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;L.setFromMatrixPosition(j.matrixWorld);for(let rt=0,it=A.length;rt<it;rt++){const at=A[rt];if(at.texture!==null&&at.boundingBox.containsPoint(L))return at}return null}function Ca(A,j,rt,it,at){j.isScene!==!0&&(j=tn),M.resetTextureUnits();const Ft=j.fog,Yt=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?j.environment:null,It=W===null?K.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Re.workingColorSpace,jt=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,qt=G.get(it.envMap||Yt,jt),te=it.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,de=!!rt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Jt=!!rt.morphAttributes.position,Ue=!!rt.morphAttributes.normal,en=!!rt.morphAttributes.color;let Ze=Yi;it.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Ze=K.toneMapping);const Fe=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Be=Fe!==void 0?Fe.length:0,Wt=w.get(it),Pn=z.state.lights;if(ze===!0&&(fe===!0||A!==B)){const Ie=A===B&&it.id===U;Ut.setState(it,A,Ie)}let xe=!1;it.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Pn.state.version||Wt.outputColorSpace!==It||at.isBatchedMesh&&Wt.batching===!1||!at.isBatchedMesh&&Wt.batching===!0||at.isBatchedMesh&&Wt.batchingColor===!0&&at.colorTexture===null||at.isBatchedMesh&&Wt.batchingColor===!1&&at.colorTexture!==null||at.isInstancedMesh&&Wt.instancing===!1||!at.isInstancedMesh&&Wt.instancing===!0||at.isSkinnedMesh&&Wt.skinning===!1||!at.isSkinnedMesh&&Wt.skinning===!0||at.isInstancedMesh&&Wt.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&Wt.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&Wt.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&Wt.instancingMorph===!1&&at.morphTexture!==null||Wt.envMap!==qt||it.fog===!0&&Wt.fog!==Ft||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Ut.numPlanes||Wt.numIntersection!==Ut.numIntersection)||Wt.vertexAlphas!==te||Wt.vertexTangents!==de||Wt.morphTargets!==Jt||Wt.morphNormals!==Ue||Wt.morphColors!==en||Wt.toneMapping!==Ze||Wt.morphTargetsCount!==Be||!!Wt.lightProbeGrid!=z.state.lightProbeGridArray.length>0)&&(xe=!0):(xe=!0,Wt.__version=it.version);let yn=Wt.currentProgram;xe===!0&&(yn=Ys(it,j,at),Q&&it.isNodeMaterial&&Q.onUpdateProgram(it,yn,Wt));let $n=!1,bi=!1,ti=!1;const He=yn.getUniforms(),nn=Wt.uniforms;if(ht.useProgram(yn.program)&&($n=!0,bi=!0,ti=!0),it.id!==U&&(U=it.id,bi=!0),Wt.needsLights){const Ie=no(z.state.lightProbeGridArray,at);Wt.lightProbeGrid!==Ie&&(Wt.lightProbeGrid=Ie,bi=!0)}if($n||B!==A){ht.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),He.setValue(q,"projectionMatrix",A.projectionMatrix),He.setValue(q,"viewMatrix",A.matrixWorldInverse);const Oi=He.map.cameraPosition;Oi!==void 0&&Oi.setValue(q,De.setFromMatrixPosition(A.matrixWorld)),Xt.logarithmicDepthBuffer&&He.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&He.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),B!==A&&(B=A,bi=!0,ti=!0)}if(Wt.needsLights&&(Pn.state.directionalShadowMap.length>0&&He.setValue(q,"directionalShadowMap",Pn.state.directionalShadowMap,M),Pn.state.spotShadowMap.length>0&&He.setValue(q,"spotShadowMap",Pn.state.spotShadowMap,M),Pn.state.pointShadowMap.length>0&&He.setValue(q,"pointShadowMap",Pn.state.pointShadowMap,M)),at.isSkinnedMesh){He.setOptional(q,at,"bindMatrix"),He.setOptional(q,at,"bindMatrixInverse");const Ie=at.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),He.setValue(q,"boneTexture",Ie.boneTexture,M))}at.isBatchedMesh&&(He.setOptional(q,at,"batchingTexture"),He.setValue(q,"batchingTexture",at._matricesTexture,M),He.setOptional(q,at,"batchingIdTexture"),He.setValue(q,"batchingIdTexture",at._indirectTexture,M),He.setOptional(q,at,"batchingColorTexture"),at._colorsTexture!==null&&He.setValue(q,"batchingColorTexture",at._colorsTexture,M));const Ti=rt.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&Bt.update(at,rt,yn),(bi||Wt.receiveShadow!==at.receiveShadow)&&(Wt.receiveShadow=at.receiveShadow,He.setValue(q,"receiveShadow",at.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&j.environment!==null&&(nn.envMapIntensity.value=j.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=OA()),bi){if(He.setValue(q,"toneMappingExposure",K.toneMappingExposure),Wt.needsLights&&Da(nn,ti),Ft&&it.fog===!0&&st.refreshFogUniforms(nn,Ft),st.refreshMaterialUniforms(nn,it,Pt,Ot,z.state.transmissionRenderTarget[A.id]),Wt.needsLights&&Wt.lightProbeGrid){const Ie=Wt.lightProbeGrid;nn.probesSH.value=Ie.texture,nn.probesMin.value.copy(Ie.boundingBox.min),nn.probesMax.value.copy(Ie.boundingBox.max),nn.probesResolution.value.copy(Ie.resolution)}tu.upload(q,eo(Wt),nn,M)}if(it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(tu.upload(q,eo(Wt),nn,M),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&He.setValue(q,"center",at.center),He.setValue(q,"modelViewMatrix",at.modelViewMatrix),He.setValue(q,"normalMatrix",at.normalMatrix),He.setValue(q,"modelMatrix",at.matrixWorld),it.uniformsGroups!==void 0){const Ie=it.uniformsGroups;for(let Oi=0,Na=Ie.length;Oi<Na;Oi++){const gs=Ie[Oi];xt.update(gs,yn),xt.bind(gs,yn)}}return yn}function Da(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function ms(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return mt},this.getActiveMipmapLevel=function(){return St},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(A,j,rt){const it=w.get(A);it.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),w.get(A.texture).__webglTexture=j,w.get(A.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:rt,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const rt=w.get(A);rt.__webglFramebuffer=j,rt.__useDefaultFramebuffer=j===void 0};const Ua=q.createFramebuffer();this.setRenderTarget=function(A,j=0,rt=0){W=A,mt=j,St=rt;let it=null,at=!1,Ft=!1;if(A){const It=w.get(A);if(It.__useDefaultFramebuffer!==void 0){ht.bindFramebuffer(q.FRAMEBUFFER,It.__webglFramebuffer),ct.copy(A.viewport),yt.copy(A.scissor),bt=A.scissorTest,ht.viewport(ct),ht.scissor(yt),ht.setScissorTest(bt),U=-1;return}else if(It.__webglFramebuffer===void 0)M.setupRenderTarget(A);else if(It.__hasExternalTextures)M.rebindTextures(A,w.get(A.texture).__webglTexture,w.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const te=A.depthTexture;if(It.__boundDepthTexture!==te){if(te!==null&&w.has(te)&&(A.width!==te.image.width||A.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(A)}}const jt=A.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Ft=!0);const qt=w.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(qt[j])?it=qt[j][rt]:it=qt[j],at=!0):A.samples>0&&M.useMultisampledRTT(A)===!1?it=w.get(A).__webglMultisampledFramebuffer:Array.isArray(qt)?it=qt[rt]:it=qt,ct.copy(A.viewport),yt.copy(A.scissor),bt=A.scissorTest}else ct.copy(Lt).multiplyScalar(Pt).floor(),yt.copy(kt).multiplyScalar(Pt).floor(),bt=ae;if(rt!==0&&(it=Ua),ht.bindFramebuffer(q.FRAMEBUFFER,it)&&ht.drawBuffers(A,it),ht.viewport(ct),ht.scissor(yt),ht.setScissorTest(bt),at){const It=w.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+j,It.__webglTexture,rt)}else if(Ft){const It=j;for(let jt=0;jt<A.textures.length;jt++){const qt=w.get(A.textures[jt]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+jt,qt.__webglTexture,rt,It)}}else if(A!==null&&rt!==0){const It=w.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,It.__webglTexture,rt)}U=-1},this.readRenderTargetPixels=function(A,j,rt,it,at,Ft,Yt,It=0){if(!(A&&A.isWebGLRenderTarget)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=w.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Yt!==void 0&&(jt=jt[Yt]),jt){ht.bindFramebuffer(q.FRAMEBUFFER,jt);try{const qt=A.textures[It],te=qt.format,de=qt.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+It),!Xt.textureFormatReadable(te)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(de)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-it&&rt>=0&&rt<=A.height-at&&q.readPixels(j,rt,it,at,V.convert(te),V.convert(de),Ft)}finally{const qt=W!==null?w.get(W).__webglFramebuffer:null;ht.bindFramebuffer(q.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(A,j,rt,it,at,Ft,Yt,It=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let jt=w.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Yt!==void 0&&(jt=jt[Yt]),jt)if(j>=0&&j<=A.width-it&&rt>=0&&rt<=A.height-at){ht.bindFramebuffer(q.FRAMEBUFFER,jt);const qt=A.textures[It],te=qt.format,de=qt.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+It),!Xt.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Jt),q.bufferData(q.PIXEL_PACK_BUFFER,Ft.byteLength,q.STREAM_READ),q.readPixels(j,rt,it,at,V.convert(te),V.convert(de),0);const Ue=W!==null?w.get(W).__webglFramebuffer:null;ht.bindFramebuffer(q.FRAMEBUFFER,Ue);const en=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Ky(q,en,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Jt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Ft),q.deleteBuffer(Jt),q.deleteSync(en),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,rt=0){const it=Math.pow(2,-rt),at=Math.floor(A.image.width*it),Ft=Math.floor(A.image.height*it),Yt=j!==null?j.x:0,It=j!==null?j.y:0;M.setTexture2D(A,0),q.copyTexSubImage2D(q.TEXTURE_2D,rt,0,0,Yt,It,at,Ft),ht.unbindTexture()};const mn=q.createFramebuffer(),hl=q.createFramebuffer();this.copyTextureToTexture=function(A,j,rt=null,it=null,at=0,Ft=0){let Yt,It,jt,qt,te,de,Jt,Ue,en;const Ze=A.isCompressedTexture?A.mipmaps[Ft]:A.image;if(rt!==null)Yt=rt.max.x-rt.min.x,It=rt.max.y-rt.min.y,jt=rt.isBox3?rt.max.z-rt.min.z:1,qt=rt.min.x,te=rt.min.y,de=rt.isBox3?rt.min.z:0;else{const nn=Math.pow(2,-at);Yt=Math.floor(Ze.width*nn),It=Math.floor(Ze.height*nn),A.isDataArrayTexture?jt=Ze.depth:A.isData3DTexture?jt=Math.floor(Ze.depth*nn):jt=1,qt=0,te=0,de=0}it!==null?(Jt=it.x,Ue=it.y,en=it.z):(Jt=0,Ue=0,en=0);const Fe=V.convert(j.format),Be=V.convert(j.type);let Wt;j.isData3DTexture?(M.setTexture3D(j,0),Wt=q.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(M.setTexture2DArray(j,0),Wt=q.TEXTURE_2D_ARRAY):(M.setTexture2D(j,0),Wt=q.TEXTURE_2D),ht.activeTexture(q.TEXTURE0),ht.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,j.flipY),ht.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),ht.pixelStorei(q.UNPACK_ALIGNMENT,j.unpackAlignment);const Pn=ht.getParameter(q.UNPACK_ROW_LENGTH),xe=ht.getParameter(q.UNPACK_IMAGE_HEIGHT),yn=ht.getParameter(q.UNPACK_SKIP_PIXELS),$n=ht.getParameter(q.UNPACK_SKIP_ROWS),bi=ht.getParameter(q.UNPACK_SKIP_IMAGES);ht.pixelStorei(q.UNPACK_ROW_LENGTH,Ze.width),ht.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Ze.height),ht.pixelStorei(q.UNPACK_SKIP_PIXELS,qt),ht.pixelStorei(q.UNPACK_SKIP_ROWS,te),ht.pixelStorei(q.UNPACK_SKIP_IMAGES,de);const ti=A.isDataArrayTexture||A.isData3DTexture,He=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const nn=w.get(A),Ti=w.get(j),Ie=w.get(nn.__renderTarget),Oi=w.get(Ti.__renderTarget);ht.bindFramebuffer(q.READ_FRAMEBUFFER,Ie.__webglFramebuffer),ht.bindFramebuffer(q.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let Na=0;Na<jt;Na++)ti&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,w.get(A).__webglTexture,at,de+Na),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,w.get(j).__webglTexture,Ft,en+Na)),q.blitFramebuffer(qt,te,Yt,It,Jt,Ue,Yt,It,q.DEPTH_BUFFER_BIT,q.NEAREST);ht.bindFramebuffer(q.READ_FRAMEBUFFER,null),ht.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(at!==0||A.isRenderTargetTexture||w.has(A)){const nn=w.get(A),Ti=w.get(j);ht.bindFramebuffer(q.READ_FRAMEBUFFER,mn),ht.bindFramebuffer(q.DRAW_FRAMEBUFFER,hl);for(let Ie=0;Ie<jt;Ie++)ti?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,nn.__webglTexture,at,de+Ie):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,nn.__webglTexture,at),He?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ti.__webglTexture,Ft,en+Ie):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ti.__webglTexture,Ft),at!==0?q.blitFramebuffer(qt,te,Yt,It,Jt,Ue,Yt,It,q.COLOR_BUFFER_BIT,q.NEAREST):He?q.copyTexSubImage3D(Wt,Ft,Jt,Ue,en+Ie,qt,te,Yt,It):q.copyTexSubImage2D(Wt,Ft,Jt,Ue,qt,te,Yt,It);ht.bindFramebuffer(q.READ_FRAMEBUFFER,null),ht.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else He?A.isDataTexture||A.isData3DTexture?q.texSubImage3D(Wt,Ft,Jt,Ue,en,Yt,It,jt,Fe,Be,Ze.data):j.isCompressedArrayTexture?q.compressedTexSubImage3D(Wt,Ft,Jt,Ue,en,Yt,It,jt,Fe,Ze.data):q.texSubImage3D(Wt,Ft,Jt,Ue,en,Yt,It,jt,Fe,Be,Ze):A.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Ft,Jt,Ue,Yt,It,Fe,Be,Ze.data):A.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Ft,Jt,Ue,Ze.width,Ze.height,Fe,Ze.data):q.texSubImage2D(q.TEXTURE_2D,Ft,Jt,Ue,Yt,It,Fe,Be,Ze);ht.pixelStorei(q.UNPACK_ROW_LENGTH,Pn),ht.pixelStorei(q.UNPACK_IMAGE_HEIGHT,xe),ht.pixelStorei(q.UNPACK_SKIP_PIXELS,yn),ht.pixelStorei(q.UNPACK_SKIP_ROWS,$n),ht.pixelStorei(q.UNPACK_SKIP_IMAGES,bi),Ft===0&&j.generateMipmaps&&q.generateMipmap(Wt),ht.unbindTexture()},this.initRenderTarget=function(A){w.get(A).__webglFramebuffer===void 0&&M.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?M.setTextureCube(A,0):A.isData3DTexture?M.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?M.setTexture2DArray(A,0):M.setTexture2D(A,0),ht.unbindTexture()},this.resetState=function(){mt=0,St=0,W=null,ht.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),i.unpackColorSpace=Re._getUnpackColorSpace()}}const ix={startingPoints:500,bulletHit:10,zombieKill:60,headshotKill:100,knifeKill:130,repairBarricade:10};Object.freeze(ix);class zA{constructor(t=ix){this.config={...t},this.players=new Map,this.listeners=new Set}setConfig(t){this.config={...this.config,...t}}getConfig(){return{...this.config}}registerPlayer(t){const i={playerId:t,currentPoints:this.config.startingPoints,totalEarned:this.config.startingPoints,totalSpent:0,lastUpdated:Date.now()};return this.players.set(t,i),this.notifyListeners(t,{success:!0,previousPoints:0,newPoints:i.currentPoints,amountChanged:this.config.startingPoints,reason:"starting_bonus"}),i}hasPlayer(t){return this.players.has(t)}getPlayerState(t){const i=this.players.get(t);return i?{...i}:void 0}getPoints(t){var i;return((i=this.players.get(t))==null?void 0:i.currentPoints)??0}removePlayer(t){return this.players.delete(t)}getAllPlayerIds(){return Array.from(this.players.keys())}canAfford(t,i){const s=this.players.get(t);return s?s.currentPoints>=i:!1}getMaxAffordableAmount(t){var i;return((i=this.players.get(t))==null?void 0:i.currentPoints)??0}addBulletHit(t){return this.addPoints(t,this.config.bulletHit,"bullet_hit")}addZombieKill(t){return this.addPoints(t,this.config.zombieKill,"zombie_kill")}addHeadshotKill(t){return this.addPoints(t,this.config.headshotKill,"headshot_kill")}addKnifeKill(t){return this.addPoints(t,this.config.knifeKill,"knife_kill")}addRepairBarricade(t){return this.addPoints(t,this.config.repairBarricade,"repair_barricade")}addPoints(t,i,s){const l=this.players.get(t);if(!l)return null;if(i<=0)return{success:!1,previousPoints:l.currentPoints,newPoints:l.currentPoints,amountChanged:0,reason:s};const c=l.currentPoints;l.currentPoints+=i,l.totalEarned+=i,l.lastUpdated=Date.now();const f={success:!0,previousPoints:c,newPoints:l.currentPoints,amountChanged:i,reason:s};return this.notifyListeners(t,f),f}spendPoints(t,i,s){const l=this.players.get(t);if(!l)return null;if(i<=0)return{success:!1,previousPoints:l.currentPoints,newPoints:l.currentPoints,amountChanged:0,reason:"purchase"};if(l.currentPoints<i)return{success:!1,previousPoints:l.currentPoints,newPoints:l.currentPoints,amountChanged:0,reason:"purchase"};const c=l.currentPoints;l.currentPoints-=i,l.totalSpent+=i,l.lastUpdated=Date.now();const f={success:!0,previousPoints:c,newPoints:l.currentPoints,amountChanged:-i,reason:"purchase"};return this.notifyListeners(t,f),f}adjustPoints(t,i,s="manual_adjustment"){const l=this.players.get(t);if(!l)return null;const c=l.currentPoints;let f=i;c+i<0&&(f=-c),l.currentPoints+=f,f>0?l.totalEarned+=f:l.totalSpent+=Math.abs(f),l.lastUpdated=Date.now();const h={success:!0,previousPoints:c,newPoints:l.currentPoints,amountChanged:f,reason:s};return this.notifyListeners(t,h),h}subscribe(t){return this.listeners.add(t),()=>{this.listeners.delete(t)}}notifyListeners(t,i){this.listeners.forEach(s=>{try{s(t,i)}catch(l){console.error("Error in points change listener:",l)}})}serializePlayer(t){const i=this.players.get(t);return i?{playerId:i.playerId,currentPoints:i.currentPoints,totalEarned:i.totalEarned,totalSpent:i.totalSpent,savedAt:Date.now(),version:"1.0.0"}:null}deserializePlayer(t){const i={playerId:t.playerId,currentPoints:Math.max(0,t.currentPoints),totalEarned:t.totalEarned,totalSpent:t.totalSpent,lastUpdated:t.savedAt};return this.players.set(i.playerId,i),i}exportAllPlayers(){return Array.from(this.players.values()).map(t=>({playerId:t.playerId,currentPoints:t.currentPoints,totalEarned:t.totalEarned,totalSpent:t.totalSpent,savedAt:t.lastUpdated,version:"1.0.0"}))}importAllPlayers(t){t.forEach(i=>{this.deserializePlayer(i)})}getPlayerStats(t){const i=this.players.get(t);return i?{currentPoints:i.currentPoints,totalEarned:i.totalEarned,totalSpent:i.totalSpent,netGain:i.totalEarned-i.totalSpent}:null}}let rh=null;function ul(){return rh||(rh=new zA),rh}class IA{constructor(){this.ctx=null}init(){this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext)),this.ctx.state==="suspended"&&this.ctx.resume()}playClick(){try{if(this.init(),!this.ctx)return;const t=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(1200,t),i.frequency.exponentialRampToValueAtTime(150,t+.05),s.gain.setValueAtTime(.08,t),s.gain.exponentialRampToValueAtTime(.01,t+.05),i.connect(s),s.connect(this.ctx.destination),i.start(t),i.stop(t+.06)}catch(t){console.warn("Audio click play failed",t)}}playUnlock(){try{if(this.init(),!this.ctx)return;const t=this.ctx.currentTime;[261.63,329.63,392,523.25].forEach((s,l)=>{const c=this.ctx.createOscillator(),f=this.ctx.createGain();c.type="sine",c.frequency.setValueAtTime(s,t+l*.08),f.gain.setValueAtTime(0,t),f.gain.linearRampToValueAtTime(.08,t+l*.08+.02),f.gain.exponentialRampToValueAtTime(.01,t+l*.08+.25),c.connect(f),f.connect(this.ctx.destination),c.start(t+l*.08),c.stop(t+l*.08+.3)})}catch(t){console.warn("Audio unlock play failed",t)}}playDenied(){try{if(this.init(),!this.ctx)return;const t=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createOscillator(),l=this.ctx.createGain();i.type="sawtooth",s.type="sawtooth",i.frequency.setValueAtTime(100,t),s.frequency.setValueAtTime(98,t),l.gain.setValueAtTime(.12,t),l.gain.exponentialRampToValueAtTime(.01,t+.25),i.connect(l),s.connect(l),l.connect(this.ctx.destination),i.start(t),s.start(t),i.stop(t+.26),s.stop(t+.26)}catch(t){console.warn("Audio denied play failed",t)}}playPoints(){try{if(this.init(),!this.ctx)return;const t=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(880,t),i.frequency.exponentialRampToValueAtTime(1760,t+.08),s.gain.setValueAtTime(.04,t),s.gain.exponentialRampToValueAtTime(.005,t+.1),i.connect(s),s.connect(this.ctx.destination),i.start(t),i.stop(t+.11)}catch(t){console.warn("Audio points play failed",t)}}playRumble(){try{if(this.init(),!this.ctx)return;const t=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createOscillator(),l=this.ctx.createGain(),c=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(55,t),s.type="sine",s.frequency.setValueAtTime(2.5,t),l.gain.setValueAtTime(15,t),c.gain.setValueAtTime(.05,t),s.connect(l),l.connect(i.frequency),i.connect(c),c.connect(this.ctx.destination),s.start(t),i.start(t)}catch{}}playDoorPurchase(){this.playUnlock()}}const Vr=new IA;function FA(r){switch(r){case"click":Vr.playClick();break;case"unlock":Vr.playUnlock();break;case"door_purchase":Vr.playDoorPurchase();break;case"denied":Vr.playDenied();break;case"points":Vr.playPoints();break;case"rumble":Vr.playRumble();break;default:console.warn(`Unknown sound: ${r}`)}}const BA={maxInteractionDistance:4,interactionAngleThreshold:30},sp=[{id:"starter_classroom_door",name:"Starter Classroom Door",cost:750,position:{x:0,y:1.5,z:-10},width:6,height:3,connectedRoomId:"hallway",isOpen:!1},{id:"hallway_science_lab_door",name:"Science Lab Door",cost:1e3,position:{x:5,y:1.5,z:4},width:6,height:3,connectedRoomId:"science_lab",isOpen:!1},{id:"hallway_library_door",name:"Library Door",cost:1e3,position:{x:40,y:1.5,z:4},width:6,height:3,connectedRoomId:"library",isOpen:!1},{id:"hallway_cafeteria_door",name:"Cafeteria Entrance",cost:1250,position:{x:-20,y:1.5,z:-3},width:14,height:3,connectedRoomId:"cafeteria",isOpen:!1}];class HA{constructor(t={}){this.currentInteractedDoor=null,this.doors=new Map,this.eventCallbacks=new Map,(t.doors??sp).forEach(s=>{this.addDoor(s)}),this.interactionConfig={...BA,...t.interactionConfig??{}}}on(t,i){return this.eventCallbacks.has(t)||this.eventCallbacks.set(t,new Set),this.eventCallbacks.get(t).add(i),()=>{const s=this.eventCallbacks.get(t);s&&s.delete(i)}}notifyEvent(t){const i=this.eventCallbacks.get(t.type);i&&i.forEach(s=>{try{s(t)}catch(l){console.error("Error in door event listener:",l)}})}addDoor(t){if(this.doors.has(t.id))return console.warn(`Door with id '${t.id}' already exists`),this.doors.get(t.id);const i={...t,isOpen:!1};return this.doors.set(i.id,i),i}removeDoor(t){return this.doors.delete(t)}getDoor(t){return this.doors.get(t)}getAllDoors(){return Array.from(this.doors.values())}getClosedDoors(){return this.getAllDoors().filter(t=>!t.isOpen)}getDoorAtPosition(t,i,s,l=1){for(const c of this.doors.values()){const f=c.position.x-t,h=c.position.y-i,m=c.position.z-s;if(Math.sqrt(f*f+h*h+m*m)<=l)return c}}getLookedAtDoor(t,i){let s=null,l=this.interactionConfig.maxInteractionDistance;for(const c of this.doors.values()){if(c.isOpen)continue;const f={x:c.position.x-t.x,y:c.position.y-t.y,z:c.position.z-t.z},h=Math.sqrt(f.x**2+f.y**2+f.z**2);if(h>this.interactionConfig.maxInteractionDistance)continue;const m={x:f.x/h,y:f.y/h,z:f.z/h},p=i.x*m.x+i.y*m.y+i.z*m.z;Math.acos(Math.max(-1,Math.min(1,p)))*(180/Math.PI)<=this.interactionConfig.interactionAngleThreshold&&h<l&&(l=h,s=c)}return s}updateInteraction(t,i){const s=this.getLookedAtDoor(t,i);if(s&&console.log(`[Door] Player in range of: ${s.name} at (${t.x.toFixed(1)}, ${t.y.toFixed(1)}, ${t.z.toFixed(1)})`),s)return this.currentInteractedDoor!==s.id&&(this.currentInteractedDoor=s.id,this.notifyEvent({type:"interactionStart",doorId:s.id,doorName:s.name,timestamp:Date.now()}),console.log(`[Door] Detected: ${s.name} (${s.cost} points)`)),s.id;if(this.currentInteractedDoor!==null){const l=this.currentInteractedDoor,c=this.doors.get(l);this.currentInteractedDoor=null,c&&this.notifyEvent({type:"interactionEnd",doorId:l,doorName:c.name,timestamp:Date.now()})}return null}getCurrentInteractedDoor(){return this.currentInteractedDoor&&this.doors.get(this.currentInteractedDoor)||null}purchaseDoor(t,i){const s=this.doors.get(t);if(!s)return console.log("[Door] Door not found:",t),{success:!1,doorId:t,reason:"Door not found"};if(s.isOpen)return console.log("[Door] Door already open:",s.name),{success:!1,doorId:t,reason:"Door already open"};const l=ul();if(!l.canAfford(i,s.cost)){const f=l.getPoints(i);return console.log("[Door] Not enough points:",{door:s.name,cost:s.cost,playerPoints:f}),this.notifyEvent({type:"purchaseAttempt",doorId:t,doorName:s.name,playerId:i,timestamp:Date.now()}),{success:!1,doorId:t,reason:"Not enough points",previousPoints:f}}const c=l.spendPoints(i,s.cost,`Door: ${s.name}`);if(!c||!c.success)return console.log("[Door] Failed to spend points"),{success:!1,doorId:t,reason:"Failed to process payment"};s.isOpen=!0,console.log("[Door] Purchased:",{door:s.name,cost:s.cost,playerPoints:c.newPoints});try{FA("door_purchase")}catch{console.log("[Door] Sound placeholder: door_purchase")}return this.notifyEvent({type:"doorOpened",doorId:t,doorName:s.name,playerId:i,timestamp:Date.now()}),{success:!0,doorId:t,previousPoints:c.previousPoints,newPoints:c.newPoints}}getInteractionPrompt(t,i){if(t.isOpen)return{show:!1,text:"",canAfford:!0};const l=ul().canAfford(i,t.cost);return{show:!0,text:l?`Press E to Open Door (${t.cost})`:"Not Enough Points",canAfford:l}}exportDoors(){return this.getAllDoors().map(t=>({id:t.id,name:t.name,cost:t.cost,position:t.position,width:t.width,height:t.height,connectedRoomId:t.connectedRoomId,isOpen:t.isOpen}))}importDoors(t){t.forEach(i=>{if(this.doors.has(i.id)){const s=this.doors.get(i.id);s.isOpen=i.isOpen}else this.addDoor(i)})}resetDoors(){this.doors.forEach(t=>{t.isOpen=!1}),this.currentInteractedDoor=null}destroy(){this.doors.clear(),this.eventCallbacks.clear(),this.currentInteractedDoor=null}}const oh=new Map;function kr(r="default"){return oh.has(r)||oh.set(r,new HA),oh.get(r)}function GA(){const r=kr();console.log(`[DoorSystem] Initialized with ${r.getAllDoors().length} door(s)`)}class VA{constructor(t){this.doorMeshes=new Map,this.labelMeshes=new Map,this.scene=t,this.material=new DM({color:9127187,roughness:.8,metalness:.1,side:Vi}),this.labelTextMaterial=new ep({color:16777215,transparent:!0,opacity:1})}initialize(){const i=kr().getAllDoors();console.log("========================================"),console.log("[DoorRenderer] Initializing doors..."),console.log(`[DoorRenderer] Total doors in DoorManager: ${i.length}`),console.log(`[DoorRenderer] Total doors in DEFAULT_DOORS: ${sp.length}`),console.log("----------------------------------------"),console.log("[DoorRenderer] Expected doors from DEFAULT_DOORS:"),sp.forEach(s=>{console.log(`  - ${s.id}: (${s.position.x}, ${s.position.y}, ${s.position.z})`)}),console.log("----------------------------------------"),i.forEach(s=>{this.spawnDoorMesh(s)}),console.log("========================================"),console.log("[DoorRenderer] Initialization complete."),console.log(`[DoorRenderer] Door meshes spawned: ${this.doorMeshes.size}`),console.log(`[DoorRenderer] Label meshes spawned: ${this.labelMeshes.size}`),console.log("========================================")}spawnDoorMesh(t){if(this.doorMeshes.has(t.id)){console.warn(`[DoorRenderer] Door mesh already exists for ID: ${t.id}`);return}const{x:i,y:s,z:l}=t.position,c=new Rn(t.width,t.height,.2),f=new cn(c,this.material);f.position.set(i,s,l),this.scene.add(f),this.doorMeshes.set(t.id,f);const h=`${t.id}
(${i.toFixed(1)}, ${s.toFixed(1)}, ${l.toFixed(1)})`,m=this.createTextLabel(h);m.position.set(i,s+t.height/2+.5,l),m.scale.set(4,1.5,1),this.scene.add(m),this.labelMeshes.set(t.id,m),console.log("[DoorRenderer] ✅ Door spawned:"),console.log(`    - ID: ${t.id}`),console.log(`    - Name: ${t.name}`),console.log(`    - Position: (${i.toFixed(2)}, ${s.toFixed(2)}, ${l.toFixed(2)})`),console.log(`    - Size: ${t.width.toFixed(2)} x ${t.height.toFixed(2)} x 0.20`),console.log(`    - Label: "${h}"`)}createTextLabel(t){const i=document.createElement("canvas"),s=i.getContext("2d");if(!s)throw new Error("Failed to get 2D context for door label");i.width=512,i.height=256,s.clearRect(0,0,i.width,i.height),s.fillStyle="rgba(0, 0, 0, 0.7)",s.fillRect(0,0,i.width,i.height),s.font="Bold 42px Arial",s.fillStyle="white",s.textAlign="center",s.textBaseline="middle";const l=t.split(`
`),c=50,f=l.length*c,h=(i.height-f)/2+c/2;l.forEach((x,S)=>{s.fillText(x,i.width/2,h+S*c)});const m=new kv(i),p=new ep({map:m,transparent:!0,opacity:1});return new vM(p)}updateDoorState(t,i){const s=this.doorMeshes.get(t);if(!s){console.warn(`[DoorRenderer] Cannot update state for unknown door ID: ${t}`);return}s.visible=!i;const l=this.labelMeshes.get(t);l&&(l.visible=!i),console.log(i?`[DoorRenderer] Door ${t} opened - mesh and label hidden`:`[DoorRenderer] Door ${t} closed - mesh and label visible`)}removeDoor(t){const i=this.doorMeshes.get(t);i&&(this.scene.remove(i),i.geometry.dispose(),this.doorMeshes.delete(t));const s=this.labelMeshes.get(t);s&&(this.scene.remove(s),s.material.map&&s.material.map.dispose(),s.material.dispose(),this.labelMeshes.delete(t)),console.log(`[DoorRenderer] Door ${t} removed from scene`)}getAllMeshes(){return new Map(this.doorMeshes)}getMesh(t){return this.doorMeshes.get(t)}destroy(){this.doorMeshes.forEach(t=>{this.scene.remove(t),t.geometry.dispose()}),this.doorMeshes.clear(),this.labelMeshes.forEach(t=>{this.scene.remove(t),t.material.map&&t.material.map.dispose(),t.material.dispose()}),this.labelMeshes.clear(),this.material.dispose(),console.log("[DoorRenderer] All door meshes and labels cleaned up")}}const lh=new Map;function kA(r,t){var s;lh.has(r)&&(console.warn(`[DoorRenderer] Renderer already exists for session: ${r}. Destroying old instance.`),(s=lh.get(r))==null||s.destroy());const i=new VA(t);return lh.set(r,i),i.initialize(),i}class XA{constructor(){this.roomsData=[],this.roomGapsData={},this.doorsData=[],this.issues=[],this.currentIssueIndex=-1,this.scanTargetRoom=null}setData(t,i,s){this.roomsData=t.map(l=>({name:l.name||l.id,x:l.cx-l.w/2,y:l.floorY,z:l.cz-l.d/2,width:l.w,depth:l.d,height:l.h,doors:[],stairDirection:l.stairDirection})),this.roomGapsData={},Object.keys(i).forEach(l=>{const c=i[l];t.find(h=>h.id===l)&&c&&(this.roomGapsData[l]=c.map(h=>({side:h.side,offset:h.center,width:h.width})))}),this.doorsData=s,this.issues=[],this.currentIssueIndex=-1}enable(t){this.scanTargetRoom=t||null,this.runFullScan()}disable(){this.issues=[],this.currentIssueIndex=-1,this.scanTargetRoom=null}toggle(t){return this.issues.length>0&&!t?(this.disable(),!1):(this.enable(t),!0)}getIssues(){return this.issues}getCurrentIssue(){return this.issues.length===0||this.currentIssueIndex<0?null:this.issues[this.currentIssueIndex]}nextIssue(){return this.issues.length===0?null:(this.currentIssueIndex=(this.currentIssueIndex+1)%this.issues.length,this.getCurrentIssue())}runFullScan(){const t=performance.now();this.issues=[];for(const s of this.roomsData)this.scanTargetRoom&&s.name!==this.scanTargetRoom||this.checkRoomSeal(s);const i=performance.now();console.log(`[RoomSealValidator] Scan completed in ${(i-t).toFixed(2)}ms. Found ${this.issues.length} issues.`),this.issues.length===0&&!this.scanTargetRoom&&console.log("[RoomSealValidator] All playable rooms are properly sealed.")}checkRoomSeal(t){this.checkFloorEdges(t),this.checkWallConnections(t),this.checkStairwellIntegrity(t),this.checkDoorwayCoverage(t),this.checkRoomCorners(t)}checkFloorEdges(t){const i=this.roomGapsData[t.name]||[],s=t.width/2,l=t.depth/2,c=t.y;for(const f of i){let h;if(f.side==="S"||f.side==="N"){const m=f.side==="N"?t.z+l:t.z-l;h=[t.x+f.offset,c+.1,m]}else h=[f.side==="E"?t.x+s:t.x-s,c+.1,t.z+f.offset];f.width>3&&this.addIssue({id:`floor_${t.name}_${f.side}_${f.offset}`,type:"floor_gap",severity:"critical",roomName:t.name,location:h,description:"Large Floor Opening",details:`Gap of ${f.width.toFixed(2)}u on ${f.side} wall of ${t.name}`})}}checkWallConnections(t){const i=this.roomGapsData[t.name]||[],s=["N","S","E","W"];for(const l of s){const c=i.filter(f=>f.side===l);if(c.length===0){const f=this.getNeighborInDirection(t,l);if(!f)continue;Math.abs(t.height-f.height)>.5&&this.addIssue({id:`wall_height_${t.name}_${l}`,type:"wall_gap",severity:"medium",roomName:t.name,location:this.getWallCenter(t,l),description:"Wall Height Mismatch",details:`${t.name} wall (${t.height}u) does not match ${f.name} (${f.height}u)`})}else{c.sort((f,h)=>f.offset-h.offset);for(let f=0;f<c.length-1;f++){const h=c[f],m=c[f+1];h.offset+h.width/2>m.offset-m.width/2&&this.addIssue({id:`wall_overlap_${t.name}_${l}_${f}`,type:"wall_gap",severity:"high",roomName:t.name,location:this.getWallCenter(t,l),description:"Overlapping Openings",details:`Gaps on ${l} wall overlap, removing wall segment.`})}}}}checkStairwellIntegrity(t){if(!t.stairDirection)return;(t.width<2||t.depth<2)&&this.addIssue({id:`stair_small_${t.name}`,type:"stair_gap",severity:"high",roomName:t.name,location:[t.x,t.y+1,t.z],description:"Stairwell Too Narrow",details:`${t.name} stairwell dimensions (${t.width}x${t.depth}) are too small.`}),(this.roomGapsData[t.name]||[]).length===0&&this.addIssue({id:`stair_sealed_${t.name}`,type:"stair_gap",severity:"medium",roomName:t.name,location:[t.x,t.y+1,t.z],description:"Sealed Stairwell",details:`${t.name} has no doorways/gaps, may be inaccessible.`})}checkDoorwayCoverage(t){const i=this.roomGapsData[t.name]||[],s=this.doorsData.filter(l=>l.room===t.name);for(const l of i){const c=s.find(f=>f.side!==l.side?!1:Math.abs(f.offset-l.offset)<1);if(c){if(Math.abs(c.width-l.width)>.5){const f=this.getGapLocation(t,l);this.addIssue({id:`door_size_${t.name}_${l.side}_${l.offset}`,type:"door_gap",severity:"medium",roomName:t.name,location:f,description:"Door Size Mismatch",details:`Door width (${c.width}) does not match gap width (${l.width}).`})}}else{const f=this.getGapLocation(t,l);this.addIssue({id:`door_missing_${t.name}_${l.side}_${l.offset}`,type:"door_gap",severity:"high",roomName:t.name,location:f,description:"Uncovered Doorway",details:`Gap at ${l.side} offset ${l.offset} has no associated door.`})}}}checkRoomCorners(t){const i=[{x:t.x-t.width/2,z:t.z-t.depth/2,name:"SW"},{x:t.x+t.width/2,z:t.z-t.depth/2,name:"SE"},{x:t.x+t.width/2,z:t.z+t.depth/2,name:"NE"},{x:t.x-t.width/2,z:t.z+t.depth/2,name:"NW"}],s=this.roomGapsData[t.name]||[];for(const l of i){const c=[];Math.abs(l.z-(t.z-t.depth/2))<.1&&c.push("S"),Math.abs(l.z-(t.z+t.depth/2))<.1&&c.push("N"),Math.abs(l.x-(t.x-t.width/2))<.1&&c.push("W"),Math.abs(l.x-(t.x+t.width/2))<.1&&c.push("E");let f=!1;for(const h of c){const m=s.filter(p=>p.side===h);for(const p of m){const x=this.getDistanceToCorner(p,h,l,t);if(x>=0&&x<.5){f=!0;break}}}f&&this.addIssue({id:`corner_crack_${t.name}_${l.name}`,type:"corner_crack",severity:"high",roomName:t.name,location:[l.x,t.y+1,l.z],description:"Corner Crack Risk",details:`Opening too close to ${l.name} corner in ${t.name}, may cause rendering issues.`})}}getDistanceToCorner(t,i,s,l){if(i==="N"||i==="S"){const c=s.x,f=t.offset-t.width/2,h=t.offset+t.width/2;return c<f?f-c:c>h?c-h:-1}else{const c=s.z,f=t.offset-t.width/2,h=t.offset+t.width/2;return c<f?f-c:c>h?c-h:-1}}getNeighbors(t){const i={N:null,S:null,E:null,W:null};for(const s of this.roomsData)s.name!==t.name&&(Math.abs(s.x-t.x)<5&&Math.abs(s.z-(t.z-t.depth))<5&&(i.S=s),Math.abs(s.x-t.x)<5&&Math.abs(s.z-(t.z+t.depth))<5&&(i.N=s),Math.abs(s.z-t.z)<5&&Math.abs(s.x-(t.x-t.width))<5&&(i.W=s),Math.abs(s.z-t.z)<5&&Math.abs(s.x-(t.x+t.width))<5&&(i.E=s));return i}getNeighborInDirection(t,i){return this.getNeighbors(t)[i]||null}getWallCenter(t,i){const s=t.width/2,l=t.depth/2,c=t.y+t.height/2;switch(i){case"N":return[t.x,c,t.z+l];case"S":return[t.x,c,t.z-l];case"E":return[t.x+s,c,t.z];case"W":return[t.x-s,c,t.z]}}getGapLocation(t,i){const s=t.width/2,l=t.depth/2,c=t.y+1;switch(i.side){case"N":return[t.x+i.offset,c,t.z+l];case"S":return[t.x+i.offset,c,t.z-l];case"E":return[t.x+s,c,t.z+i.offset];case"W":return[t.x-s,c,t.z+i.offset]}}addIssue(t){this.issues.find(i=>i.id===t.id)||this.issues.push(t)}updateHighlights(t){}}const WA=(()=>{let r=null;return()=>(r||(r=new XA),r)})(),YA={startingRound:1,intermissionDurationMs:1e4,minRoundDurationMs:5e3};class pu{constructor(t={}){this.stateChangeCallbacks=[],this.zombiesRemainingCallbacks=[],this.roundStartCallbacks=[],this.roundEndCallbacks=[],this.intermissionTimerId=null,this.config={...YA,...t},this.roundData=this.createInitialRoundData()}createInitialRoundData(){return{currentRound:this.config.startingRound,state:"idle",zombiesRemaining:0,zombiesKilled:0,totalZombiesSpawned:0,roundStartTime:null,intermissionStartTime:null,totalRoundsCompleted:0,previousRoundDurationMs:null}}onRoundStart(t){return this.roundStartCallbacks.push(t),()=>{this.roundStartCallbacks=this.roundStartCallbacks.filter(i=>i!==t)}}onRoundEnd(t){return this.roundEndCallbacks.push(t),()=>{this.roundEndCallbacks=this.roundEndCallbacks.filter(i=>i!==t)}}onStateChange(t){return this.stateChangeCallbacks.push(t),()=>{this.stateChangeCallbacks=this.stateChangeCallbacks.filter(i=>i!==t)}}onZombiesRemainingChange(t){return this.zombiesRemainingCallbacks.push(t),()=>{this.zombiesRemainingCallbacks=this.zombiesRemainingCallbacks.filter(i=>i!==t)}}notifyRoundStart(t){this.roundStartCallbacks.forEach(i=>i(t))}notifyRoundEnd(t){this.roundEndCallbacks.forEach(i=>i(t))}notifyStateChange(){const t=this.getRoundData();this.stateChangeCallbacks.forEach(i=>i(t))}notifyZombiesRemaining(){this.zombiesRemainingCallbacks.forEach(t=>t(this.roundData.zombiesRemaining,this.roundData.totalZombiesSpawned))}startRound(t){if(this.roundData.state==="active"){console.warn("Round already active");return}this.roundData.state="active",this.roundData.currentRound=Math.max(this.config.startingRound,this.roundData.currentRound);const i=t??pu.calculateZombieCount(this.roundData.currentRound);this.roundData.zombiesRemaining=i,this.roundData.zombiesKilled=0,this.roundData.totalZombiesSpawned=i,this.roundData.roundStartTime=Date.now(),this.roundData.intermissionStartTime=null,this.notifyRoundStart(this.roundData.currentRound),this.notifyStateChange(),this.notifyZombiesRemaining()}endRound(){if(this.roundData.state!=="active"){console.warn("Cannot end round - no active round");return}const t=Date.now(),i=t-(this.roundData.roundStartTime||t);i<this.config.minRoundDurationMs&&console.warn("Round ended too early, enforcing minimum duration"),this.roundData.previousRoundDurationMs=i,this.roundData.state="ended",this.roundData.totalRoundsCompleted+=1,this.roundData.roundStartTime=null,this.notifyRoundEnd(this.roundData.currentRound),this.notifyStateChange(),this.startIntermission()}startIntermission(){if(this.roundData.state!=="ended"&&this.roundData.state!=="idle"){console.warn("Can only start intermission after round ends");return}this.intermissionTimerId&&(clearTimeout(this.intermissionTimerId),this.intermissionTimerId=null),this.roundData.state="intermission",this.roundData.intermissionStartTime=Date.now(),this.notifyStateChange(),this.intermissionTimerId=setTimeout(()=>{this.onIntermissionComplete()},this.config.intermissionDurationMs)}onIntermissionComplete(){this.roundData.currentRound+=1,this.roundData.state="idle",this.roundData.zombiesRemaining=0,this.roundData.zombiesKilled=0,this.roundData.totalZombiesSpawned=0,this.roundData.intermissionStartTime=null,this.intermissionTimerId=null,this.notifyStateChange()}getIntermissionRemaining(){if(this.roundData.state!=="intermission"||!this.roundData.intermissionStartTime)return 0;const t=Date.now()-this.roundData.intermissionStartTime;return Math.max(0,this.config.intermissionDurationMs-t)}isIntermissionComplete(){return this.getIntermissionRemaining()<=0&&this.roundData.state==="intermission"}forceNextRound(){this.intermissionTimerId&&(clearTimeout(this.intermissionTimerId),this.intermissionTimerId=null),this.roundData.currentRound+=1,this.roundData.state="idle",this.roundData.zombiesRemaining=0,this.roundData.zombiesKilled=0,this.roundData.totalZombiesSpawned=0,this.roundData.intermissionStartTime=null,this.notifyStateChange()}registerZombieSpawn(){return this.roundData.state!=="active"?(console.warn("Cannot spawn zombie - round not active"),this.roundData.zombiesRemaining):(this.roundData.totalZombiesSpawned+=1,this.roundData.zombiesRemaining+=1,this.notifyZombiesRemaining(),this.roundData.zombiesRemaining)}registerZombieKill(){return this.roundData.state!=="active"?(console.warn("Cannot register kill - round not active"),this.roundData.zombiesRemaining):(this.roundData.zombiesKilled+=1,this.roundData.zombiesRemaining=Math.max(0,this.roundData.zombiesRemaining-1),this.notifyZombiesRemaining(),this.roundData.zombiesRemaining<=0&&this.endRound(),this.roundData.zombiesRemaining)}setZombiesRemaining(t){if(this.roundData.state!=="active"){console.warn("Cannot set zombies remaining - round not active");return}this.roundData.zombiesRemaining=Math.max(0,t),this.roundData.zombiesKilled=this.roundData.totalZombiesSpawned-t,this.notifyZombiesRemaining(),this.roundData.zombiesRemaining<=0&&this.endRound()}getCurrentRound(){return this.roundData.currentRound}getState(){return this.roundData.state}getZombiesRemaining(){return this.roundData.zombiesRemaining}getZombiesKilled(){return this.roundData.zombiesKilled}getTotalZombiesSpawned(){return this.roundData.totalZombiesSpawned}getRoundStartTime(){return this.roundData.roundStartTime}getIntermissionStartTime(){return this.roundData.intermissionStartTime}getTotalRoundsCompleted(){return this.roundData.totalRoundsCompleted}getRoundData(){return{...this.roundData}}getSnapshot(){return{roundData:{...this.roundData},config:{...this.config}}}getRoundDuration(){return this.roundData.roundStartTime&&this.roundData.state==="active"?Date.now()-this.roundData.roundStartTime:null}getPreviousRoundDuration(){return this.roundData.previousRoundDurationMs}static calculateZombieCount(t){return t<=0?0:t===1?6:t===2?8:t===3?13:Math.floor(10+t*4.5)}updateConfig(t){this.config={...this.config,...t}}getConfig(){return{...this.config}}reset(){this.intermissionTimerId&&(clearTimeout(this.intermissionTimerId),this.intermissionTimerId=null),this.roundData=this.createInitialRoundData(),this.notifyStateChange()}loadFromSnapshot(t){this.intermissionTimerId&&(clearTimeout(this.intermissionTimerId),this.intermissionTimerId=null),this.roundData={...t.roundData},this.config={...t.config},this.notifyStateChange()}destroy(){this.intermissionTimerId&&(clearTimeout(this.intermissionTimerId),this.intermissionTimerId=null)}}const ch=new Map;function qA(r="default",t){return ch.has(r)||ch.set(r,new pu(t)),ch.get(r)}function vv(r){return pu.calculateZombieCount(r)}const jA=({playerId:r,sessionId:t})=>{const[i,s]=ge.useState(0),[l,c]=ge.useState(1),[f,h]=ge.useState("idle"),[m,p]=ge.useState(0),[x,S]=ge.useState(null),[_,E]=ge.useState(0),T=ul(),C=qA(t);ge.useEffect(()=>{const I=()=>{T&&s(T.getPoints(r)),C&&(c(C.getCurrentRound()),h(C.getState()),p(C.getZombiesRemaining()),S(C.getPreviousRoundDuration()),E(vv(C.getCurrentRound())))};I();const b=setInterval(I,500);return()=>clearInterval(b)},[r,t]);const y=()=>{for(let I=0;I<10;I++)T==null||T.addBulletHit(r)},v=()=>{T==null||T.spendPoints(r,100,"debug_remove")},D=()=>{const I=vv(l);C==null||C.startRound(I)},O=()=>{C==null||C.endRound()},L=()=>{C==null||C.registerZombieKill()},k=()=>{C==null||C.forceNextRound()},z=I=>I===null?"-":`${(I/1e3).toFixed(1)}s`;return Vt.jsxs("div",{style:Ce.container,children:[Vt.jsx("h3",{style:Ce.title,children:"🛠️ Dev Debug Panel"}),Vt.jsxs("div",{style:Ce.statsSection,children:[Vt.jsxs("div",{style:Ce.statRow,children:[Vt.jsx("span",{style:Ce.statLabel,children:"Current Points:"}),Vt.jsx("span",{style:Ce.statValue,children:i})]}),Vt.jsxs("div",{style:Ce.statRow,children:[Vt.jsx("span",{style:Ce.statLabel,children:"Current Round:"}),Vt.jsx("span",{style:Ce.statValue,children:l})]}),Vt.jsxs("div",{style:Ce.statRow,children:[Vt.jsx("span",{style:Ce.statLabel,children:"Round State:"}),Vt.jsx("span",{style:{...Ce.statValue,...ZA(f)},children:f})]}),Vt.jsxs("div",{style:Ce.statRow,children:[Vt.jsx("span",{style:Ce.statLabel,children:"Zombies Remaining:"}),Vt.jsx("span",{style:Ce.statValue,children:m})]}),Vt.jsxs("div",{style:Ce.statRow,children:[Vt.jsx("span",{style:Ce.statLabel,children:"Prev Round Duration:"}),Vt.jsx("span",{style:Ce.statValue,children:z(x)})]}),Vt.jsxs("div",{style:Ce.statRow,children:[Vt.jsx("span",{style:Ce.statLabel,children:"Recommended Zombie Count:"}),Vt.jsx("span",{style:Ce.statValue,children:_})]})]}),Vt.jsxs("div",{style:Ce.buttonsSection,children:[Vt.jsx("h4",{style:Ce.subtitle,children:"Points Actions"}),Vt.jsxs("div",{style:Ce.buttonRow,children:[Vt.jsx("button",{style:Ce.buttonPositive,onClick:y,children:"+100 Points"}),Vt.jsx("button",{style:Ce.buttonNegative,onClick:v,children:"-100 Points"})]}),Vt.jsx("h4",{style:Ce.subtitle,children:"Round Actions"}),Vt.jsxs("div",{style:Ce.buttonRow,children:[Vt.jsx("button",{style:Ce.buttonPrimary,onClick:D,children:"Start Round"}),Vt.jsx("button",{style:Ce.buttonWarning,onClick:O,children:"End Round"})]}),Vt.jsxs("div",{style:Ce.buttonRow,children:[Vt.jsx("button",{style:Ce.buttonDanger,onClick:L,children:"Kill Zombie"}),Vt.jsx("button",{style:Ce.buttonSecondary,onClick:k,children:"Next Round"})]})]}),Vt.jsx("div",{style:Ce.warning,children:"⚠️ Dev Mode Only - Remove in production"})]})},ZA=r=>{switch(r){case"active":return{color:"#4ade80"};case"intermission":return{color:"#fbbf24"};case"ended":return{color:"#f87171"};default:return{color:"#9ca3af"}}},Ce={container:{position:"fixed",bottom:"20px",right:"20px",width:"320px",backgroundColor:"rgba(17, 24, 39, 0.95)",border:"2px solid #4b5563",borderRadius:"8px",padding:"16px",fontFamily:"'Courier New', monospace",fontSize:"14px",color:"#e5e7eb",zIndex:9999,boxShadow:"0 4px 6px rgba(0, 0, 0, 0.3)",maxHeight:"80vh",overflowY:"auto"},title:{margin:"0 0 16px 0",fontSize:"16px",fontWeight:"bold",textAlign:"center",borderBottom:"1px solid #4b5563",paddingBottom:"8px"},statsSection:{marginBottom:"16px"},statRow:{display:"flex",justifyContent:"space-between",marginBottom:"6px"},statLabel:{color:"#9ca3af"},statValue:{fontWeight:"bold"},buttonsSection:{borderTop:"1px solid #4b5563",paddingTop:"16px"},subtitle:{margin:"0 0 8px 0",fontSize:"13px",color:"#9ca3af"},buttonRow:{display:"flex",gap:"8px",marginBottom:"8px"},buttonPositive:{flex:1,padding:"8px 12px",backgroundColor:"#059669",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontWeight:"bold",fontSize:"12px"},buttonNegative:{flex:1,padding:"8px 12px",backgroundColor:"#dc2626",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontWeight:"bold",fontSize:"12px"},buttonPrimary:{flex:1,padding:"8px 12px",backgroundColor:"#2563eb",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontWeight:"bold",fontSize:"12px"},buttonWarning:{flex:1,padding:"8px 12px",backgroundColor:"#d97706",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontWeight:"bold",fontSize:"12px"},buttonDanger:{flex:1,padding:"8px 12px",backgroundColor:"#991b1b",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontWeight:"bold",fontSize:"12px"},buttonSecondary:{flex:1,padding:"8px 12px",backgroundColor:"#4b5563",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontWeight:"bold",fontSize:"12px"},warning:{marginTop:"12px",padding:"8px",backgroundColor:"rgba(234, 179, 8, 0.2)",border:"1px dashed #eab308",borderRadius:"4px",textAlign:"center",fontSize:"11px",color:"#fbbf24"}};function KA(r,t){const i=t??ul(),[s,l]=ge.useState(()=>i.getPoints(r)),[c,f]=ge.useState(()=>{var v;return((v=i.getPlayerState(r))==null?void 0:v.totalEarned)??0}),[h,m]=ge.useState(()=>{var v;return((v=i.getPlayerState(r))==null?void 0:v.totalSpent)??0});ge.useEffect(()=>{i.hasPlayer(r)||i.registerPlayer(r);const v=i.getPlayerState(r);return v&&(l(v.currentPoints),f(v.totalEarned),m(v.totalSpent)),i.subscribe((O,L)=>{O===r&&(l(L.newPoints),f(k=>k+Math.max(0,L.amountChanged)),m(k=>k+Math.max(0,-L.amountChanged)))})},[r,i]);const p=ge.useCallback(()=>i.addBulletHit(r),[r,i]),x=ge.useCallback(()=>i.addZombieKill(r),[r,i]),S=ge.useCallback(()=>i.addHeadshotKill(r),[r,i]),_=ge.useCallback(()=>i.addKnifeKill(r),[r,i]),E=ge.useCallback(()=>i.addRepairBarricade(r),[r,i]),T=ge.useCallback(v=>i.spendPoints(r,v),[r,i]),C=ge.useCallback(v=>i.canAfford(r,v),[r,i]),y=ge.useCallback(()=>{const v=i.getPlayerState(r);v&&(l(v.currentPoints),f(v.totalEarned),m(v.totalSpent))},[r,i]);return{currentPoints:s,totalEarned:c,totalSpent:h,addBulletHit:p,addZombieKill:x,addHeadshotKill:S,addKnifeKill:_,addRepairBarricade:E,spendPoints:T,canAfford:C,refresh:y,manager:i}}const QA=({playerId:r,manager:t,className:i="",showTotalEarned:s=!1,showTotalSpent:l=!1,label:c="Points",formatPoints:f=p=>p.toLocaleString(),lowPointsThreshold:h=500,onSignificantChange:m})=>{const{currentPoints:p,totalEarned:x,totalSpent:S}=KA(r,t),[_,E]=u_.useState(p);u_.useEffect(()=>{const C=Math.abs(p-_);C>=50&&m&&m(C),E(p)},[p,_,m]);const T=p<h;return Vt.jsxs("div",{className:`cod-points-display ${i}`,style:{display:"inline-block",padding:"8px 16px",backgroundColor:"#1a1a1a",border:"2px solid #4a4a4a",borderRadius:"4px",fontFamily:"'Courier New', Courier, monospace",color:T?"#ff6b6b":"#90EE90",fontWeight:"bold",fontSize:"24px",minWidth:"150px",textAlign:"center",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.5)",textShadow:"0 0 10px rgba(144, 238, 144, 0.5)"},children:[Vt.jsx("div",{style:{fontSize:"12px",color:"#888",marginBottom:"4px"},children:c}),Vt.jsx("div",{children:f(p)}),(s||l)&&Vt.jsxs("div",{style:{fontSize:"10px",color:"#666",marginTop:"4px",display:"flex",justifyContent:"center",gap:"12px"},children:[s&&Vt.jsxs("span",{children:["Earned: ",f(x)]}),l&&Vt.jsxs("span",{children:["Spent: ",f(S)]})]})]})},uh={},fh=r=>{if(uh[r])return uh[r];const t=document.createElement("canvas");t.width=512,t.height=512;const i=t.getContext("2d");if(r==="wood_floor"){i.fillStyle="#452c1e",i.fillRect(0,0,512,512);const l=512/8;for(let c=0;c<8;c++){i.fillStyle=c%2===0?"#4e3425":"#3c2518",c%3===0&&(i.fillStyle="#432a1d"),i.fillRect(0,c*l,512,l),i.strokeStyle="#29170e",i.lineWidth=1;for(let h=0;h<5;h++)i.beginPath(),i.moveTo(0,c*l+Math.random()*l),i.quadraticCurveTo(256,c*l+Math.random()*l*2-l/2,512,c*l+Math.random()*l),i.stroke();const f=c%2===0?[150,380]:[220,440];i.fillStyle="#1e110a",f.forEach(h=>{i.fillRect(h,c*l,2,l)}),i.strokeStyle="#1a0d06",i.lineWidth=2,i.beginPath(),i.moveTo(0,c*l),i.lineTo(512,c*l),i.stroke()}}else if(r==="ceiling_tiles"){i.fillStyle="#dcd5ca",i.fillRect(0,0,512,512);for(let c=0;c<600;c++)i.fillStyle=Math.random()>.5?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.05)",i.fillRect(Math.random()*512,Math.random()*512,2,2);const l=256;for(let c=0;c<2;c++)for(let f=0;f<2;f++){const h=f*l,m=c*l;i.fillStyle="rgba(115, 87, 59, 0.15)",i.strokeStyle="rgba(92, 70, 48, 0.35)",i.lineWidth=1.5;for(let S=0;S<4;S++){const _=h+30+Math.random()*(l-60),E=m+30+Math.random()*(l-60),T=25+Math.random()*45;i.beginPath(),i.arc(_,E,T,0,Math.PI*2),i.fill(),i.beginPath(),i.arc(_,E,T+4,0,Math.PI*2),i.stroke()}i.fillStyle="rgba(40, 45, 35, 0.65)";for(let S=0;S<35;S++)i.fillRect(h+Math.random()*l,m+Math.random()*l,1.5,1.5);i.strokeStyle="rgba(50,50,50,0.25)",i.lineWidth=1,i.beginPath();let p=h+20,x=m+20;i.moveTo(p,x);for(let S=0;S<10;S++)p+=(Math.random()-.5)*15,x+=Math.random()*20,i.lineTo(p,x);i.stroke()}i.strokeStyle="#2d2e33",i.lineWidth=6,i.beginPath(),i.moveTo(0,0),i.lineTo(512,0),i.moveTo(0,256),i.lineTo(512,256),i.moveTo(0,512),i.lineTo(512,512),i.moveTo(0,0),i.lineTo(0,512),i.moveTo(256,0),i.lineTo(256,512),i.moveTo(512,0),i.lineTo(512,512),i.stroke(),i.fillStyle="rgba(92, 49, 14, 0.55)";for(let c=0;c<20;c++)i.fillRect(Math.random()*512,253+Math.random()*6,Math.random()*25,Math.random()*3),i.fillRect(253+Math.random()*6,Math.random()*512,Math.random()*3,Math.random()*25)}else if(r==="wall_tiles"){i.fillStyle="#6d8a6b",i.fillRect(0,0,512,512);const l=8,c=64;for(let f=0;f<l;f++)for(let h=0;h<l;h++){const m=h*c,p=f*c;if(i.fillStyle=(f+h)%2===0?"#728e6f":"#688566",f*h%5===0&&(i.fillStyle="#5c7859"),i.fillRect(m+1,p+1,c-2,c-2),i.strokeStyle="rgba(255,255,255,0.06)",i.strokeRect(m+2,p+2,c-4,c-4),Math.random()<.15&&(i.strokeStyle="rgba(20, 25, 20, 0.55)",i.lineWidth=1,i.beginPath(),i.moveTo(m+Math.random()*c,p+Math.random()*c),i.lineTo(m+Math.random()*c,p+Math.random()*c),i.stroke()),f===2&&h===4||f===6&&h===1||f===4&&h===6){i.fillStyle="#222520",i.fillRect(m+2,p+2,c-4,c-4),i.fillStyle="#444c41";for(let x=0;x<10;x++)i.fillRect(m+Math.random()*c,p+Math.random()*c,Math.random()*6,Math.random()*6)}}i.strokeStyle="#252924",i.lineWidth=2,i.beginPath();for(let f=0;f<=l;f++)i.moveTo(0,f*c),i.lineTo(512,f*c),i.moveTo(f*c,0),i.lineTo(f*c,512);i.stroke();for(let f=0;f<12;f++){const h=Math.random()*512,m=Math.random()*80,p=150+Math.random()*250,x=i.createLinearGradient(h,m,h,m+p);x.addColorStop(0,"rgba(21, 26, 19, 0.55)"),x.addColorStop(.3,"rgba(15, 20, 14, 0.35)"),x.addColorStop(1,"rgba(15, 20, 14, 0.0)"),i.fillStyle=x,i.fillRect(h-3,m,6,p)}i.strokeStyle="rgba(224, 215, 200, 0.35)",i.lineWidth=1.5,i.font="22px Arial",i.strokeText("WASH ME",80,200),i.strokeText("CLASS OF '95",280,390)}const s=new kv(t);return s.wrapS=rl,s.wrapT=rl,uh[r]=s,s},JA=(r,t,i)=>{const s=r.stairDirection||(r.w>r.d?"W_E":"N_S"),l=r.climbHeight??r.h;if(s==="W_E"){const c=r.cx-r.w/2,f=Math.max(0,Math.min(1,(t-c)/r.w));return r.floorY+f*l}else if(s==="E_W"){const c=r.cx-r.w/2,f=Math.max(0,Math.min(1,(t-c)/r.w));return r.floorY+(1-f)*l}else if(s==="S_N"){const c=r.cz-r.d/2,f=Math.max(0,Math.min(1,(i-c)/r.d));return r.floorY+(1-f)*l}else{const c=r.cz-r.d/2,f=Math.max(0,Math.min(1,(i-c)/r.d));return r.floorY+f*l}},cs=[{id:"starter",name:"Starter Classroom",cx:17.5,cz:-40,w:75,d:60,floorY:0,h:10,color:"#3d5c3a",floorTexture:"wood_floor.png"},{id:"hallway",name:"Main Hallway",cx:20,cz:-3,w:80,d:14,floorY:0,h:10,color:"#323247"},{id:"science_lab",name:"Science Lab",cx:5,cz:26.5,w:30,d:45,floorY:0,h:10,color:"#4a3720"},{id:"library",name:"Library Shelf Area",cx:40,cz:26.5,w:36,d:45,floorY:0,h:10,color:"#453c1b",floorTexture:"wood_floor.png"},{id:"stairwell",name:"Stairwell Access",cx:68,cz:-3,w:16,d:10,floorY:0,h:22,climbHeight:11,color:"#542828",isStaircase:!0,stairDirection:"W_E"},{id:"gym",name:"Gymnasium (Floor 2)",cx:144,cz:15,w:80,d:60,floorY:11,h:18,color:"#20434f",carvedFloors:[]},{id:"cafeteria",name:"Cafeteria Wing",cx:-50,cz:-3,w:60,d:50,floorY:0,h:10,color:"#2a261f"},{id:"courtyard",name:"Overgrown Courtyard",cx:-63,cz:57,w:90,d:70,floorY:0,h:15,color:"#162e1a",disabledCeiling:!0,trapdoors:[{cx:-42,cz:-48.5,w:8,d:8},{cx:-42,cz:-31,w:12,d:6}]},{id:"underground_tunnel",name:"Utility Tunnel",cx:-103,cz:63.4,w:12,d:80,floorY:-12,h:9,color:"#111412",ceilingHoles:[{cx:-42,cz:-48.5,w:8,d:8},{cx:-42,cz:-31,w:12,d:6}]},{id:"the_vault",name:"Fallout Shelter Vault",cx:-103,cz:123.4,w:60,d:40,floorY:-12,h:9,color:"#282b29"},{id:"upper_hallway",name:"2nd Floor Hallway",cx:90,cz:-3,w:28,d:14,floorY:11,h:10,color:"#2a2d36",floorTexture:"wood_floor.png"},{id:"principal_office",name:"Principal's Office",cx:90,cz:127,w:56,d:56,floorY:11,h:10,color:"#362a2a"},{id:"upper_hallway_2",name:"2nd floor hallway 2",cx:90,cz:51.5,w:18,d:95,floorY:11,h:10,color:"#2a2d36",floorTexture:"wood_floor.png"},{id:"security_room",name:"Master Security & Breaker Room",cx:66,cz:51.5,w:30,d:35,floorY:11,h:10,color:"#1a212b"},{id:"upper_hallway_north",name:"2nd Floor North Connector",cx:150,cz:92,w:102,d:14,floorY:11,h:10,color:"#2a2d36",floorTexture:"wood_floor.png"},{id:"gym_north_hallway",name:"Gym North Connector",cx:144,cz:65,w:18,d:40,floorY:11,h:10,color:"#2a2d36",floorTexture:"wood_floor.png"},{id:"nurses_office",name:"Nurse's Office",cx:164,cz:112,w:32,d:26,floorY:11,h:10,color:"#1f3d3c",floorTexture:"wood_floor.png"},{id:"nurses_office_backroom",name:"Nurse's Office Backroom",cx:164,cz:135,w:24,d:20,floorY:11,h:10,color:"#19302f",floorTexture:"wood_floor.png"},{id:"stairwell_2",name:"Secondary Stairwell",cx:90,cz:-22,w:16,d:24,floorY:0,h:22,climbHeight:11,color:"#542828",isStaircase:!0,stairDirection:"S_N"},{id:"lower_hallway_south",name:"South Wing Hallway",cx:90,cz:-76.5,w:14,d:85,floorY:0,h:10,color:"#2a2d36",floorTexture:"wood_floor.png"},{id:"main_office",name:"Main Office",cx:90,cz:-139,w:50,d:40,floorY:0,h:10,color:"#1e293b",floorTexture:"wood_floor.png"}],nl={starter:[{side:"N",center:-17.5,width:6}],hallway:[{side:"S",center:-20,width:6},{side:"N",center:-15,width:6},{side:"N",center:20,width:6},{side:"E",center:0,width:6},{side:"W",center:0,width:14}],science_lab:[{side:"S",center:0,width:6}],library:[{side:"S",center:0,width:6}],stairwell:[{side:"W",center:0,width:6},{side:"E",center:0,width:10}],gym:[{side:"W",center:-18,width:10},{side:"S",center:0,width:10},{side:"N",center:0,width:10}],cafeteria:[{side:"E",center:0,width:14},{side:"N",center:0,width:12}],courtyard:[{side:"S",center:13,width:12}],boiler_room:[{side:"N",center:0,width:12}],underground_tunnel:[{side:"S",center:0,width:12},{side:"N",center:0,width:12}],the_vault:[{side:"S",center:0,width:12}],upper_hallway:[{side:"W",center:0,width:10},{side:"E",center:0,width:10},{side:"S",center:0,width:6},{side:"N",center:0,width:10}],principal_office:[{side:"S",center:0,width:8}],upper_hallway_2:[{side:"S",center:0,width:10},{side:"W",center:0,width:8},{side:"E",center:40.5,width:10},{side:"N",center:0,width:8}],security_room:[{side:"E",center:0,width:8}],upper_hallway_north:[{side:"W",center:0,width:10},{side:"N",center:12,width:10},{side:"N",center:14,width:6},{side:"S",center:-6,width:10}],gym_north_hallway:[{side:"N",center:0,width:10},{side:"S",center:0,width:10}],nurses_office:[{side:"S",center:0,width:6},{side:"N",center:0,width:6}],nurses_office_backroom:[{side:"S",center:0,width:6}],stairwell_2:[{side:"N",center:0,width:6},{side:"S",center:0,width:6}],lower_hallway_south:[{side:"N",center:0,width:6},{side:"S",center:0,width:6}],main_office:[{side:"N",center:0,width:6}]},$A=[{roomId:"starter",side:"N",gapIndex:0,cost:750},{roomId:"hallway",side:"S",gapIndex:0,cost:750},{roomId:"hallway",side:"N",gapIndex:0,cost:750},{roomId:"hallway",side:"N",gapIndex:1,cost:750},{roomId:"hallway",side:"E",gapIndex:0,cost:750},{roomId:"hallway",side:"W",gapIndex:0,cost:1e3},{roomId:"science_lab",side:"S",gapIndex:0,cost:1e3},{roomId:"library",side:"S",gapIndex:0,cost:1e3},{roomId:"stairwell",side:"W",gapIndex:0,cost:750},{roomId:"stairwell",side:"E",gapIndex:0,cost:750},{roomId:"gym",side:"W",gapIndex:0,cost:1250},{roomId:"gym",side:"S",gapIndex:0,cost:1e3},{roomId:"gym",side:"N",gapIndex:0,cost:1e3},{roomId:"cafeteria",side:"E",gapIndex:0,cost:1250},{roomId:"cafeteria",side:"N",gapIndex:0,cost:1e3},{roomId:"courtyard",side:"S",gapIndex:0,cost:1250},{roomId:"underground_tunnel",side:"S",gapIndex:0,cost:1e3},{roomId:"underground_tunnel",side:"N",gapIndex:0,cost:1e3},{roomId:"the_vault",side:"S",gapIndex:0,cost:1500},{roomId:"upper_hallway",side:"W",gapIndex:0,cost:750},{roomId:"upper_hallway",side:"E",gapIndex:0,cost:750},{roomId:"upper_hallway",side:"S",gapIndex:0,cost:750},{roomId:"upper_hallway",side:"N",gapIndex:0,cost:750},{roomId:"principal_office",side:"S",gapIndex:0,cost:1e3},{roomId:"upper_hallway_2",side:"S",gapIndex:0,cost:750},{roomId:"upper_hallway_2",side:"W",gapIndex:0,cost:750},{roomId:"upper_hallway_2",side:"E",gapIndex:0,cost:750},{roomId:"upper_hallway_2",side:"N",gapIndex:0,cost:750},{roomId:"security_room",side:"E",gapIndex:0,cost:1e3},{roomId:"upper_hallway_north",side:"W",gapIndex:0,cost:750},{roomId:"upper_hallway_north",side:"N",gapIndex:0,cost:750},{roomId:"upper_hallway_north",side:"N",gapIndex:1,cost:750},{roomId:"upper_hallway_north",side:"S",gapIndex:0,cost:750},{roomId:"gym_north_hallway",side:"N",gapIndex:0,cost:750},{roomId:"gym_north_hallway",side:"S",gapIndex:0,cost:750},{roomId:"nurses_office",side:"S",gapIndex:0,cost:750},{roomId:"nurses_office",side:"N",gapIndex:0,cost:750},{roomId:"nurses_office_backroom",side:"S",gapIndex:0,cost:750},{roomId:"stairwell_2",side:"N",gapIndex:0,cost:750},{roomId:"stairwell_2",side:"S",gapIndex:0,cost:750},{roomId:"lower_hallway_south",side:"N",gapIndex:0,cost:750},{roomId:"lower_hallway_south",side:"S",gapIndex:0,cost:750},{roomId:"main_office",side:"N",gapIndex:0,cost:1e3}],tR=[{id:"mystery_box_spawn",type:"interactable",roomId:"starter",cx:15,cz:-25,w:4,d:2,h:3,color:"#8b5a2b"},{id:"main_power_switch",type:"interactable",roomId:"security_room",cx:54,cz:51.5,w:4,d:1,h:4,color:"#8b0000"}],sl={wallThickness:.4,ceilingThickness:.15,doorHeight:7.5,floorThickness:.2},eR=sl.doorHeight,jc=4.5,nR=1;function iR(){const r=ge.useRef(null),t=ge.useRef(null),i=ge.useRef(Math.PI),s=ge.useRef(0),l=ge.useRef(new $(0,jc,-30)),c=ge.useRef(0),f=ge.useRef({}),h=ge.useRef(!0),m=ge.useRef(!1),[p,x]=ge.useState(!1),[S,_]=ge.useState(""),[E,T]=ge.useState(!1),[C,y]=ge.useState(!1),[v,D]=ge.useState([]),[O,L]=ge.useState(-1),k=ge.useRef(WA()),[z,I]=ge.useState(!1);return ge.useEffect(()=>{const b=t.current,P=r.current;if(!b||!P)return;GA();const F=kr().on("purchaseAttempt",Q=>{console.log("[App] Door purchase attempt failed:",Q.doorName),I(!0),setTimeout(()=>I(!1),2e3)});return()=>{F()}},[]),ge.useEffect(()=>{const b=t.current,P=r.current;if(!b||!P)return;const K=new PA({canvas:b,antialias:!0});K.setPixelRatio(window.devicePixelRatio),K.shadowMap.enabled=!0,K.shadowMap.type=xv;const F=new dM;F.background=new be(657930),F.fog=new xp(657930,20,120);const Q=new ui(75,P.clientWidth/P.clientHeight,.1,500);Q.position.copy(l.current);const mt=kA("default",F);F.add(new zM(2236962,1));const St={starter:3820842,hallway:1710638,science_lab:2760720,library:2760720,gym:1056816,cafeteria:1709328,courtyard:662026,underground_tunnel:329736,the_vault:658442,stairwell:1705992,stairwell_2:1705992,upper_hallway:1315872,upper_hallway_2:1315872,upper_hallway_north:1315872,principal_office:1708048,security_room:526864,nurses_office:1712160,nurses_office_backroom:1185816,gym_north_hallway:1054752,lower_hallway_south:1315872,main_office:922912};cs.forEach(Y=>{const Xt=new PM(St[Y.id]??2236962,2.5,Math.max(Y.w,Y.d)*1.2);Xt.position.set(Y.cx,Y.floorY+Y.h*.75,Y.cz),F.add(Xt)});const W=[],U=new Map;$A.forEach((Y,Xt)=>{const Dt=(nl[Y.roomId]||[])[Y.gapIndex];if(!Dt)return;const w=cs.find(vt=>vt.id===Y.roomId);if(!w)return;let M=0,G=0;const ut=Dt.width,gt=eR,At=.3;Dt.side==="N"?(M=Dt.center,G=w.d/2):Dt.side==="S"?(M=Dt.center,G=-w.d/2):Dt.side==="E"?(M=w.w/2,G=Dt.center):(M=-w.w/2,G=Dt.center);const Rt=w.cx+M,st=w.cz+G,tt={id:`${Y.roomId}_${Y.side}_${Y.gapIndex}`,type:"gap",axis:Dt.side==="N"||Dt.side==="S"?"z":"x",x:Rt,z:st,w:ut,h:gt,d:At,cost:Y.cost,unlocked:!1,name:`${Y.roomId}_${Y.side}_${Y.gapIndex}`,roomId:Y.roomId,side:Dt.side,isOpen:!1,isPurchased:!1};W.push(tt)});const B=new os({color:4007959});new os({color:2759183}),W.forEach(Y=>{const Xt=Y.d||.3,ht=new Rn(Y.w,Y.h,Xt),Dt=new cn(ht,B);Dt.position.set(Y.x,Y.h/2,Y.z),Dt.rotation.y=Y.axis==="x"?Math.PI/2:0,Dt.castShadow=!0,Dt.receiveShadow=!0,F.add(Dt),Y.mesh=Dt;const w=new Rn(Y.w,Y.h,Xt+.1),M=new yp({visible:!1}),G=new cn(w,M);G.position.copy(Dt.position),G.rotation.copy(Dt.rotation),F.add(G),Y.collider=G,U.set(G,Y)});const ct=sl.wallThickness,yt=sl.ceilingThickness,bt=sl.floorThickness,N=sl.doorHeight,J=new os({map:fh("wall_tiles")}),Tt=new os({map:fh("wood_floor")}),Ot=new os({map:fh("ceiling_tiles")}),Pt=Y=>{const Xt=nl[Y.id]||[],ht=parseInt(Y.color.replace("#",""),16),Dt=new os({color:ht}),w=Y.floorTexture==="wood_floor.png"?Tt:Dt;if(!Y.disabledFloor)if(Y.carvedFloors&&Y.carvedFloors.length>0){const G=Y.cz-Y.d/2,ut=Y.cz+Y.d/2,gt=Y.cx-Y.w/2,At=Y.cx+Y.w/2,Rt=Y.trapdoors||[];if(Rt.length>0){const st=Rt.map(vt=>({xMin:vt.cx-vt.w/2,xMax:vt.cx+vt.w/2,zMin:vt.cz-vt.d/2,zMax:vt.cz+vt.d/2}));let tt=G;for(;tt<ut;){let vt=ut;for(const pt of st)pt.zMin>tt&&pt.zMin<vt&&(vt=pt.zMin),pt.zMax>tt&&pt.zMax<vt&&pt.zMax>tt;const Ut=vt-tt;if(Ut>.1){const pt=st.filter(Bt=>Bt.zMin<=vt&&Bt.zMax>=tt);if(pt.length===0){const Bt=new cn(new Rn(Y.w,bt,Ut),w);Bt.position.set(Y.cx,Y.floorY-bt/2,tt+Ut/2),Bt.receiveShadow=!0,F.add(Bt)}else{let Bt=gt;const ne=[...pt].sort((ie,V)=>ie.xMin-V.xMin);for(const ie of ne){if(ie.xMin>Bt+.1){const V=ie.xMin-Bt,Nt=new cn(new Rn(V,bt,Ut),w);Nt.position.set(Bt+V/2,Y.floorY-bt/2,tt+Ut/2),Nt.receiveShadow=!0,F.add(Nt)}Bt=Math.max(Bt,ie.xMax)}if(Bt<At-.1){const ie=At-Bt,V=new cn(new Rn(ie,bt,Ut),w);V.position.set(Bt+ie/2,Y.floorY-bt/2,tt+Ut/2),V.receiveShadow=!0,F.add(V)}}}let dt=ut;for(const pt of st)pt.zMax>tt&&pt.zMax<dt&&(dt=pt.zMax);tt=dt}}else{const st=new cn(new Rn(Y.w,bt,Y.d),w);st.position.set(Y.cx,Y.floorY-bt/2,Y.cz),st.receiveShadow=!0,F.add(st)}}else{const G=new cn(new Rn(Y.w,bt,Y.d),w);G.position.set(Y.cx,Y.floorY-bt/2,Y.cz),G.receiveShadow=!0,F.add(G)}if(!Y.disabledCeiling){const G=new cn(new Rn(Y.w,yt,Y.d),Ot);G.position.set(Y.cx,Y.floorY+Y.h+yt/2,Y.cz),F.add(G)}if([{side:"N",px:Y.cx,pz:Y.cz+Y.d/2,len:Y.w,rotY:0},{side:"S",px:Y.cx,pz:Y.cz-Y.d/2,len:Y.w,rotY:0},{side:"E",px:Y.cx+Y.w/2,pz:Y.cz,len:Y.d,rotY:Math.PI/2},{side:"W",px:Y.cx-Y.w/2,pz:Y.cz,len:Y.d,rotY:Math.PI/2}].forEach(({side:G,px:ut,pz:gt,len:At,rotY:Rt})=>{var vt;if((vt=Y.disabledWalls)!=null&&vt.includes(G))return;const st=Xt.filter(Ut=>Ut.side===G),tt=(Ut,dt)=>{const pt=dt-Ut;if(pt<=.01)return;const Bt=(Ut+dt)/2-At/2,ne=Math.min(N,Y.h),ie=new cn(new Rn(pt,ne,ct),J);if(ie.rotation.y=Rt,Rt===0?ie.position.set(ut+Bt,Y.floorY+ne/2,gt):ie.position.set(ut,Y.floorY+ne/2,gt+Bt),ie.castShadow=!0,ie.receiveShadow=!0,F.add(ie),Y.h>N){const V=Y.h-N,Nt=new cn(new Rn(pt,V,ct),J);Nt.rotation.y=Rt,Rt===0?Nt.position.set(ut+Bt,Y.floorY+N+V/2,gt):Nt.position.set(ut,Y.floorY+N+V/2,gt+Bt),F.add(Nt)}};if(st.length===0)tt(0,At);else{const Ut=[...st].sort((pt,Bt)=>pt.center-pt.width/2-(Bt.center-Bt.width/2));let dt=0;Ut.forEach(pt=>{const Bt=Math.max(0,pt.center-pt.width/2+At/2),ne=Math.min(At,pt.center+pt.width/2+At/2);tt(dt,Bt),dt=ne}),tt(dt,At)}}),Y.isStaircase){const G=new cn(new Rn(Y.w,.3,Y.d),new os({color:5910560}));G.position.set(Y.cx,Y.floorY+(Y.climbHeight??Y.h)/2,Y.cz);const ut=Y.climbHeight??Y.h,gt=Y.stairDirection||(Y.w>Y.d?"W_E":"N_S");gt==="W_E"||gt==="E_W"?G.rotation.z=(gt==="W_E"?1:-1)*Math.atan2(ut,Y.w):G.rotation.x=(gt==="N_S"?1:-1)*Math.atan2(ut,Y.d),F.add(G)}};cs.forEach(Y=>Pt(Y)),tR.forEach(Y=>{const Xt=cs.find(Dt=>Dt.id===Y.roomId),ht=new cn(new Rn(Y.w,Y.h,Y.d),new os({color:parseInt(Y.color.replace("#",""),16)}));ht.position.set(Y.cx,((Xt==null?void 0:Xt.floorY)??0)+Y.h/2,Y.cz),F.add(ht)});const lt=()=>{const Y=P.clientWidth,Xt=P.clientHeight;K.setSize(Y,Xt),Q.aspect=Y/Xt,Q.updateProjectionMatrix()};lt();const wt=new ResizeObserver(lt);wt.observe(P);const Lt=Y=>{document.pointerLockElement===b&&(i.current-=Y.movementX*.002,s.current-=Y.movementY*.002,s.current=Math.max(-Math.PI/2+.05,Math.min(Math.PI/2-.05,s.current)))},kt=()=>{document.pointerLockElement!==b&&(b==null||b.requestPointerLock())},ae=()=>{x(document.pointerLockElement===b)};b.addEventListener("click",kt),document.addEventListener("mousemove",Lt),document.addEventListener("pointerlockchange",ae);const $t=Y=>{if(f.current[Y.code]=!0,Y.code==="KeyV"&&(m.current=!m.current),Y.code==="F8"){Y.preventDefault();const Xt=k.current,ht=l.current.x,Dt=l.current.z;let w;for(const G of cs){const ut=G.w/2,gt=G.d/2;if(ht>=G.cx-ut&&ht<=G.cx+ut&&Dt>=G.cz-gt&&Dt<=G.cz+gt){w=G.name;break}}Xt.setData(cs,nl,W),Xt.enable(w);const M=Xt.getIssues();D(M),y(!0),L(-1),console.log(`[RoomSealValidator] Scan complete: ${M.length} issues found${w?` in ${w}`:""}`)}if(Y.code==="F9"){Y.preventDefault();const ht=k.current.getIssues();if(ht.length>0){const Dt=(O+1)%ht.length,w=ht[Dt];l.current.set(w.location[0],w.location[1]+2,w.location[2]+5),i.current=Math.PI,L(Dt),console.log(`[RoomSealValidator] Teleported to issue ${Dt+1}/${ht.length}: ${w.description} in ${w.roomName}`)}}if(Y.code==="F10"){Y.preventDefault();const Xt=k.current;Xt.setData(cs,nl,W);const ht=Xt.toggle();if(y(ht),ht){const Dt=Xt.getIssues();D(Dt)}else D([]),L(-1);console.log(`[MapValidator] Validation mode ${ht?"enabled":"disabled"}`)}if(Y.code==="KeyE"){console.log("[DEBUG OLD] KeyE detected in old handleKeyDown"),console.log("[DEBUG OLD] isPointerLocked:",document.pointerLockElement!==null);const Xt=kr();ul();const ht="player1",Dt=Xt.getCurrentInteractedDoor();if(console.log("[DEBUG OLD] getCurrentInteractedDoor returned:",Dt),Dt){console.log("[App] Attempting to purchase door:",Dt.name);const w=Xt.purchaseDoor(Dt.id,ht);w.success?(console.log("[App] Door purchased successfully:",Dt.name),mt.updateDoorState(Dt.id,!0)):console.log("[App] Door purchase failed:",w.reason)}}},ze=Y=>{f.current[Y.code]=!1};window.addEventListener("keydown",$t),window.addEventListener("keyup",ze);const fe=(Y,Xt,ht)=>cs.find(Dt=>{const w=Dt.cx-Dt.w/2,M=Dt.cx+Dt.w/2,G=Dt.cz-Dt.d/2,ut=Dt.cz+Dt.d/2;return Y>=w&&Y<=M&&Xt>=G&&Xt<=ut&&ht>=Dt.floorY-1&&ht<=Dt.floorY+Dt.h+1}),ve=(Y,Xt)=>{const ht=Y.clone().add(Xt),Dt=fe(Y.x,Y.z,Y.y);if(!Dt)return ht;const w=Dt.cx-Dt.w/2,M=Dt.cx+Dt.w/2,G=Dt.cz-Dt.d/2,ut=Dt.cz+Dt.d/2;let gt=ht.x,At=ht.z;const Rt=nR,st=nl[Dt.id]||[];if(At-Rt<G){const tt=st.filter(dt=>dt.side==="S"),vt=Y.x-Dt.cx;if(!tt.some(dt=>vt>=dt.center-dt.width/2&&vt<=dt.center+dt.width/2))At=G+Rt;else if(st.findIndex(pt=>pt.side==="S"&&vt>=pt.center-pt.width/2&&vt<=pt.center+pt.width/2)>=0){const pt=W.find(Bt=>Bt.roomId===Dt.id&&Bt.side==="S");pt&&pt.isPurchased&&!pt.isOpen&&(At=G+Rt)}}if(At+Rt>ut){const tt=st.filter(dt=>dt.side==="N"),vt=Y.x-Dt.cx;if(!tt.some(dt=>vt>=dt.center-dt.width/2&&vt<=dt.center+dt.width/2))At=ut-Rt;else{const dt=W.find(pt=>pt.roomId===Dt.id&&pt.side==="N");dt&&dt.isPurchased&&!dt.isOpen&&(At=ut-Rt)}}if(gt-Rt<w){const tt=st.filter(dt=>dt.side==="W"),vt=Y.z-Dt.cz;if(!tt.some(dt=>vt>=dt.center-dt.width/2&&vt<=dt.center+dt.width/2))gt=w+Rt;else{const dt=W.find(pt=>pt.roomId===Dt.id&&pt.side==="W");dt&&dt.isPurchased&&!dt.isOpen&&(gt=w+Rt)}}if(gt+Rt>M){const tt=st.filter(dt=>dt.side==="E"),vt=Y.z-Dt.cz;if(!tt.some(dt=>vt>=dt.center-dt.width/2&&vt<=dt.center+dt.width/2))gt=M-Rt;else{const dt=W.find(pt=>pt.roomId===Dt.id&&pt.side==="E");dt&&dt.isPurchased&&!dt.isOpen&&(gt=M-Rt)}}return new $(gt,ht.y,At)};let De=performance.now(),le;const tn=new BM,Xe=8;let fn=null;const q=()=>{le=requestAnimationFrame(q);const Y=performance.now(),Xt=Math.min((Y-De)/1e3,.05);De=Y;const ht=f.current,Dt=m.current?20:10,w=new $(-Math.sin(i.current),0,-Math.cos(i.current)),M=new $(Math.cos(i.current),0,-Math.sin(i.current));let G=new $;if((ht.KeyW||ht.ArrowUp)&&G.add(w),(ht.KeyS||ht.ArrowDown)&&G.sub(w),(ht.KeyD||ht.ArrowRight)&&G.add(M),(ht.KeyA||ht.ArrowLeft)&&G.sub(M),G.lengthSq()>0&&G.normalize().multiplyScalar(Dt*Xt),m.current)ht.Space&&(G.y+=Dt*Xt),(ht.ShiftLeft||ht.ShiftRight)&&(G.y-=Dt*Xt),l.current.add(G);else{c.current-=30*Xt;const tt=fe(l.current.x,l.current.z,l.current.y);let vt=tt?tt.isStaircase?JA(tt,l.current.x,l.current.z)+jc:tt.floorY+jc:jc;l.current.y+=c.current*Xt,l.current.y<=vt?(l.current.y=vt,c.current=0,h.current=!0):h.current=!1,ht.Space&&h.current&&(c.current=10,h.current=!1);const Ut=ve(l.current,G);l.current.x=Ut.x,l.current.z=Ut.z}Q.position.copy(l.current),Q.rotation.order="YXZ",Q.rotation.y=i.current,Q.rotation.x=s.current,C&&k.current.updateHighlights(Y/1e3),tn.setFromCamera(new _e(0,0),Q);const ut=Array.from(U.keys()),gt=tn.intersectObjects(ut);if(fn=null,gt.length>0&&gt[0].distance<=Xe){const tt=gt[0].object,vt=U.get(tt);vt?(fn=vt,vt.isPurchased?vt.isOpen?(_(""),T(!1)):(_("Press E to open"),T(!0)):(_(`Press E to buy ${vt.name} (${vt.cost})`),T(!0))):(_(""),T(!1))}else _(""),T(!1);const At=kr(),Rt={x:l.current.x,y:l.current.y,z:l.current.z},st=new $(-Math.sin(i.current),0,-Math.cos(i.current));At.updateInteraction(Rt,st),K.render(F,Q)};q();const Qe=Y=>{if(console.log("[DEBUG] Key event received:",Y.key),Y.code==="KeyE"&&p){console.log("=== [E] key pressed ==="),console.log("=== Key handler entered ===");const Xt=fn;if(!Xt){console.log("Current door found: NO (null)");return}console.log("Current door found: YES"),console.log("Door ID:",Xt.id),console.log("purchaseDoor() called");const w=kr().purchaseDoor(Xt.id,"player1");console.log("purchaseDoor() result:",w),console.log("Result.success:",w.success),w.success?(console.log("[App] Door purchased successfully:",Xt.name),console.log("DoorRenderer update called"),mt.updateDoorState(Xt.id,!0)):(console.log("[App] Door purchase failed:",w.reason),w.reason==="INSUFFICIENT_POINTS"&&(I(!0),setTimeout(()=>I(!1),2e3)))}};return window.addEventListener("keydown",Qe),()=>{cancelAnimationFrame(le),wt.disconnect(),b.removeEventListener("click",kt),document.removeEventListener("mousemove",Lt),document.removeEventListener("pointerlockchange",ae),window.removeEventListener("keydown",$t),window.removeEventListener("keyup",ze),mt.destroy(),K.dispose()}},[]),Vt.jsxs("div",{className:"relative w-screen h-screen bg-black overflow-hidden select-none",children:[Vt.jsx("div",{className:"absolute top-4 right-4 z-20",children:Vt.jsx(QA,{playerId:"player1"})}),z&&Vt.jsx("div",{className:"absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50",children:Vt.jsx("div",{className:"bg-red-900/90 border-2 border-red-500 px-6 py-3 rounded-lg text-lg font-mono tracking-wide text-red-200 whitespace-nowrap animate-pulse",children:"NOT ENOUGH POINTS"})}),Vt.jsx(jA,{playerId:"player1"}),Vt.jsx("div",{ref:r,className:"absolute inset-0",children:Vt.jsx("canvas",{ref:t,className:"block w-full h-full"})}),p&&Vt.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10",children:Vt.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 border border-white/60"})}),p&&E&&S&&Vt.jsx("div",{className:"absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10",children:Vt.jsx("div",{className:"bg-black/70 border border-emerald-500/50 px-4 py-2 rounded-lg text-sm font-mono tracking-wide text-emerald-400 whitespace-nowrap",children:S})}),!p&&Vt.jsx("div",{className:"absolute inset-x-0 bottom-8 flex justify-center pointer-events-none z-10",children:Vt.jsx("div",{className:"bg-black/70 border border-white/10 px-5 py-2 rounded-full text-[11px] font-mono tracking-widest text-white/50 uppercase",children:"Click to Play · WASD Move · Mouse Look · V Noclip · ESC Free Cursor"})}),C&&Vt.jsxs(Vt.Fragment,{children:[Vt.jsx("div",{className:"absolute top-4 left-4 pointer-events-none z-10",children:Vt.jsxs("div",{className:"bg-red-900/80 border border-red-500 px-3 py-2 rounded-lg text-xs font-mono text-red-300",children:[Vt.jsx("div",{className:"font-bold text-red-200 mb-1",children:"MAP VALIDATION MODE"}),Vt.jsxs("div",{children:["Issues: ",v.length]}),O>=0&&Vt.jsxs("div",{className:"text-yellow-300",children:["Viewing: ",O+1,"/",v.length]}),Vt.jsx("div",{className:"mt-2 text-gray-400 text-[10px]",children:"F8: Scan · F9: Next Issue · F10: Toggle"})]})}),v.length>0&&Vt.jsx("div",{className:"absolute top-4 right-4 max-w-md max-h-96 overflow-y-auto pointer-events-auto z-10",children:Vt.jsxs("div",{className:"bg-black/80 border border-red-500/50 rounded-lg p-3",children:[Vt.jsx("div",{className:"text-xs font-mono text-red-300 font-bold mb-2",children:"DETECTED ISSUES"}),Vt.jsx("div",{className:"space-y-1",children:v.map((b,P)=>Vt.jsxs("div",{className:`text-[10px] font-mono p-1.5 rounded cursor-pointer transition-colors ${P===O?"bg-yellow-900/50 text-yellow-200 border border-yellow-500/50":b.severity==="critical"?"bg-red-950/50 text-red-300 hover:bg-red-900/30":b.severity==="high"?"bg-orange-950/50 text-orange-300 hover:bg-orange-900/30":"bg-gray-900/50 text-gray-300 hover:bg-gray-800/50"}`,onClick:()=>{L(P);const F=k.current.getIssues();F[P]&&(l.current.set(F[P].location[0],F[P].location[1]+2,F[P].location[2]+5),i.current=Math.PI)},children:[Vt.jsx("span",{className:`inline-block w-2 h-2 rounded-full mr-2 ${b.type==="floor_gap"?"bg-red-500":b.type==="wall_gap"?"bg-yellow-500":b.type==="door_gap"?"bg-blue-500":b.type==="stair_gap"?"bg-orange-500":b.type==="corner_crack"?"bg-pink-500":"bg-gray-500"}`}),"[",b.severity.toUpperCase(),"] ",b.roomName," - ",b.type.replace("_"," "),Vt.jsx("div",{className:"text-gray-400 ml-4 truncate",children:b.description})]},b.id))})]})}),C&&v.length===0&&Vt.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10",children:Vt.jsxs("div",{className:"bg-green-900/80 border border-green-500 px-6 py-4 rounded-lg text-sm font-mono text-green-300",children:[Vt.jsx("div",{className:"font-bold text-green-200 mb-1",children:"NO ISSUES DETECTED"}),Vt.jsx("div",{className:"text-green-400",children:"Map geometry is clean!"})]})})]})]})}gy.createRoot(document.getElementById("root")).render(Vt.jsx(ge.StrictMode,{children:Vt.jsx(iR,{})}));
