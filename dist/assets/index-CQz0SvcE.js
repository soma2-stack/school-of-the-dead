(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function uy(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Sd={exports:{}},qo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_;function fy(){if(l_)return qo;l_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:u,ref:o!==void 0?o:null,props:c}}return qo.Fragment=t,qo.jsx=n,qo.jsxs=n,qo}var c_;function dy(){return c_||(c_=1,Sd.exports=fy()),Sd.exports}var It=dy(),yd={exports:{}},ge={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_;function hy(){if(u_)return ge;u_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),g=Symbol.iterator;function M(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,y={};function x(I,Q,Mt){this.props=I,this.context=Q,this.refs=y,this.updater=Mt||E}x.prototype.isReactComponent={},x.prototype.setState=function(I,Q){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,Q,"setState")},x.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function C(){}C.prototype=x.prototype;function L(I,Q,Mt){this.props=I,this.context=Q,this.refs=y,this.updater=Mt||E}var U=L.prototype=new C;U.constructor=L,R(U,x.prototype),U.isPureReactComponent=!0;var V=Array.isArray;function N(){}var P={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function F(I,Q,Mt){var Rt=Mt.ref;return{$$typeof:r,type:I,key:Q,ref:Rt!==void 0?Rt:null,props:Mt}}function Z(I,Q){return F(I.type,Q,I.props)}function H(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function K(I){var Q={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Mt){return Q[Mt]})}var dt=/\/+/g;function mt(I,Q){return typeof I=="object"&&I!==null&&I.key!=null?K(""+I.key):Q.toString(36)}function X(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(N,N):(I.status="pending",I.then(function(Q){I.status==="pending"&&(I.status="fulfilled",I.value=Q)},function(Q){I.status==="pending"&&(I.status="rejected",I.reason=Q)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function O(I,Q,Mt,Rt,Nt){var lt=typeof I;(lt==="undefined"||lt==="boolean")&&(I=null);var Et=!1;if(I===null)Et=!0;else switch(lt){case"bigint":case"string":case"number":Et=!0;break;case"object":switch(I.$$typeof){case r:case t:Et=!0;break;case _:return Et=I._init,O(Et(I._payload),Q,Mt,Rt,Nt)}}if(Et)return Nt=Nt(I),Et=Rt===""?"."+mt(I,0):Rt,V(Nt)?(Mt="",Et!=null&&(Mt=Et.replace(dt,"$&/")+"/"),O(Nt,Q,Mt,"",function(Gt){return Gt})):Nt!=null&&(H(Nt)&&(Nt=Z(Nt,Mt+(Nt.key==null||I&&I.key===Nt.key?"":(""+Nt.key).replace(dt,"$&/")+"/")+Et)),Q.push(Nt)),1;Et=0;var wt=Rt===""?".":Rt+":";if(V(I))for(var bt=0;bt<I.length;bt++)Rt=I[bt],lt=wt+mt(Rt,bt),Et+=O(Rt,Q,Mt,lt,Nt);else if(bt=M(I),typeof bt=="function")for(I=bt.call(I),bt=0;!(Rt=I.next()).done;)Rt=Rt.value,lt=wt+mt(Rt,bt++),Et+=O(Rt,Q,Mt,lt,Nt);else if(lt==="object"){if(typeof I.then=="function")return O(X(I),Q,Mt,Rt,Nt);throw Q=String(I),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return Et}function B(I,Q,Mt){if(I==null)return I;var Rt=[],Nt=0;return O(I,Rt,"","",function(lt){return Q.call(Mt,lt,Nt++)}),Rt}function st(I){if(I._status===-1){var Q=I._result;Q=Q(),Q.then(function(Mt){(I._status===0||I._status===-1)&&(I._status=1,I._result=Mt)},function(Mt){(I._status===0||I._status===-1)&&(I._status=2,I._result=Mt)}),I._status===-1&&(I._status=0,I._result=Q)}if(I._status===1)return I._result.default;throw I._result}var vt=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},At={map:B,forEach:function(I,Q,Mt){B(I,function(){Q.apply(this,arguments)},Mt)},count:function(I){var Q=0;return B(I,function(){Q++}),Q},toArray:function(I){return B(I,function(Q){return Q})||[]},only:function(I){if(!H(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return ge.Activity=S,ge.Children=At,ge.Component=x,ge.Fragment=n,ge.Profiler=o,ge.PureComponent=L,ge.StrictMode=a,ge.Suspense=m,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ge.__COMPILER_RUNTIME={__proto__:null,c:function(I){return P.H.useMemoCache(I)}},ge.cache=function(I){return function(){return I.apply(null,arguments)}},ge.cacheSignal=function(){return null},ge.cloneElement=function(I,Q,Mt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Rt=R({},I.props),Nt=I.key;if(Q!=null)for(lt in Q.key!==void 0&&(Nt=""+Q.key),Q)!T.call(Q,lt)||lt==="key"||lt==="__self"||lt==="__source"||lt==="ref"&&Q.ref===void 0||(Rt[lt]=Q[lt]);var lt=arguments.length-2;if(lt===1)Rt.children=Mt;else if(1<lt){for(var Et=Array(lt),wt=0;wt<lt;wt++)Et[wt]=arguments[wt+2];Rt.children=Et}return F(I.type,Nt,Rt)},ge.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},ge.createElement=function(I,Q,Mt){var Rt,Nt={},lt=null;if(Q!=null)for(Rt in Q.key!==void 0&&(lt=""+Q.key),Q)T.call(Q,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(Nt[Rt]=Q[Rt]);var Et=arguments.length-2;if(Et===1)Nt.children=Mt;else if(1<Et){for(var wt=Array(Et),bt=0;bt<Et;bt++)wt[bt]=arguments[bt+2];Nt.children=wt}if(I&&I.defaultProps)for(Rt in Et=I.defaultProps,Et)Nt[Rt]===void 0&&(Nt[Rt]=Et[Rt]);return F(I,lt,Nt)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(I){return{$$typeof:h,render:I}},ge.isValidElement=H,ge.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:st}},ge.memo=function(I,Q){return{$$typeof:p,type:I,compare:Q===void 0?null:Q}},ge.startTransition=function(I){var Q=P.T,Mt={};P.T=Mt;try{var Rt=I(),Nt=P.S;Nt!==null&&Nt(Mt,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(N,vt)}catch(lt){vt(lt)}finally{Q!==null&&Mt.types!==null&&(Q.types=Mt.types),P.T=Q}},ge.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ge.use=function(I){return P.H.use(I)},ge.useActionState=function(I,Q,Mt){return P.H.useActionState(I,Q,Mt)},ge.useCallback=function(I,Q){return P.H.useCallback(I,Q)},ge.useContext=function(I){return P.H.useContext(I)},ge.useDebugValue=function(){},ge.useDeferredValue=function(I,Q){return P.H.useDeferredValue(I,Q)},ge.useEffect=function(I,Q){return P.H.useEffect(I,Q)},ge.useEffectEvent=function(I){return P.H.useEffectEvent(I)},ge.useId=function(){return P.H.useId()},ge.useImperativeHandle=function(I,Q,Mt){return P.H.useImperativeHandle(I,Q,Mt)},ge.useInsertionEffect=function(I,Q){return P.H.useInsertionEffect(I,Q)},ge.useLayoutEffect=function(I,Q){return P.H.useLayoutEffect(I,Q)},ge.useMemo=function(I,Q){return P.H.useMemo(I,Q)},ge.useOptimistic=function(I,Q){return P.H.useOptimistic(I,Q)},ge.useReducer=function(I,Q,Mt){return P.H.useReducer(I,Q,Mt)},ge.useRef=function(I){return P.H.useRef(I)},ge.useState=function(I){return P.H.useState(I)},ge.useSyncExternalStore=function(I,Q,Mt){return P.H.useSyncExternalStore(I,Q,Mt)},ge.useTransition=function(){return P.H.useTransition()},ge.version="19.2.6",ge}var f_;function cp(){return f_||(f_=1,yd.exports=hy()),yd.exports}var ce=cp();const d_=uy(ce);var Md={exports:{}},jo={},bd={exports:{}},Ed={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function py(){return h_||(h_=1,(function(r){function t(O,B){var st=O.length;O.push(B);t:for(;0<st;){var vt=st-1>>>1,At=O[vt];if(0<o(At,B))O[vt]=B,O[st]=At,st=vt;else break t}}function n(O){return O.length===0?null:O[0]}function a(O){if(O.length===0)return null;var B=O[0],st=O.pop();if(st!==B){O[0]=st;t:for(var vt=0,At=O.length,I=At>>>1;vt<I;){var Q=2*(vt+1)-1,Mt=O[Q],Rt=Q+1,Nt=O[Rt];if(0>o(Mt,st))Rt<At&&0>o(Nt,Mt)?(O[vt]=Nt,O[Rt]=st,vt=Rt):(O[vt]=Mt,O[Q]=st,vt=Q);else if(Rt<At&&0>o(Nt,st))O[vt]=Nt,O[Rt]=st,vt=Rt;else break t}}return B}function o(O,B){var st=O.sortIndex-B.sortIndex;return st!==0?st:O.id-B.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();r.unstable_now=function(){return u.now()-h}}var m=[],p=[],_=1,S=null,g=3,M=!1,E=!1,R=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function U(O){for(var B=n(p);B!==null;){if(B.callback===null)a(p);else if(B.startTime<=O)a(p),B.sortIndex=B.expirationTime,t(m,B);else break;B=n(p)}}function V(O){if(R=!1,U(O),!E)if(n(m)!==null)E=!0,N||(N=!0,K());else{var B=n(p);B!==null&&X(V,B.startTime-O)}}var N=!1,P=-1,T=5,F=-1;function Z(){return y?!0:!(r.unstable_now()-F<T)}function H(){if(y=!1,N){var O=r.unstable_now();F=O;var B=!0;try{t:{E=!1,R&&(R=!1,C(P),P=-1),M=!0;var st=g;try{e:{for(U(O),S=n(m);S!==null&&!(S.expirationTime>O&&Z());){var vt=S.callback;if(typeof vt=="function"){S.callback=null,g=S.priorityLevel;var At=vt(S.expirationTime<=O);if(O=r.unstable_now(),typeof At=="function"){S.callback=At,U(O),B=!0;break e}S===n(m)&&a(m),U(O)}else a(m);S=n(m)}if(S!==null)B=!0;else{var I=n(p);I!==null&&X(V,I.startTime-O),B=!1}}break t}finally{S=null,g=st,M=!1}B=void 0}}finally{B?K():N=!1}}}var K;if(typeof L=="function")K=function(){L(H)};else if(typeof MessageChannel<"u"){var dt=new MessageChannel,mt=dt.port2;dt.port1.onmessage=H,K=function(){mt.postMessage(null)}}else K=function(){x(H,0)};function X(O,B){P=x(function(){O(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(O){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var st=g;g=B;try{return O()}finally{g=st}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(O,B){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var st=g;g=O;try{return B()}finally{g=st}},r.unstable_scheduleCallback=function(O,B,st){var vt=r.unstable_now();switch(typeof st=="object"&&st!==null?(st=st.delay,st=typeof st=="number"&&0<st?vt+st:vt):st=vt,O){case 1:var At=-1;break;case 2:At=250;break;case 5:At=1073741823;break;case 4:At=1e4;break;default:At=5e3}return At=st+At,O={id:_++,callback:B,priorityLevel:O,startTime:st,expirationTime:At,sortIndex:-1},st>vt?(O.sortIndex=st,t(p,O),n(m)===null&&O===n(p)&&(R?(C(P),P=-1):R=!0,X(V,st-vt))):(O.sortIndex=At,t(m,O),E||M||(E=!0,N||(N=!0,K()))),O},r.unstable_shouldYield=Z,r.unstable_wrapCallback=function(O){var B=g;return function(){var st=g;g=B;try{return O.apply(this,arguments)}finally{g=st}}}})(Ed)),Ed}var p_;function my(){return p_||(p_=1,bd.exports=py()),bd.exports}var Td={exports:{}},qn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function gy(){if(m_)return qn;m_=1;var r=cp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,_){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:S==null?null:""+S,children:m,containerInfo:p,implementation:_}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return qn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,qn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},qn.flushSync=function(m){var p=u.T,_=a.p;try{if(u.T=null,a.p=2,m)return m()}finally{u.T=p,a.p=_,a.d.f()}},qn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},qn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},qn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,S=h(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:S,integrity:g,fetchPriority:M}):_==="script"&&a.d.X(m,{crossOrigin:S,integrity:g,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},qn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},qn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,S=h(_,p.crossOrigin);a.d.L(m,_,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},qn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},qn.requestFormReset=function(m){a.d.r(m)},qn.unstable_batchedUpdates=function(m,p){return m(p)},qn.useFormState=function(m,p,_){return u.H.useFormState(m,p,_)},qn.useFormStatus=function(){return u.H.useHostTransitionStatus()},qn.version="19.2.6",qn}var g_;function _y(){if(g_)return Td.exports;g_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Td.exports=gy(),Td.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function vy(){if(__)return jo;__=1;var r=my(),t=cp(),n=_y();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(a(188))}function p(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,l=i;;){var f=s.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===s)return m(f),e;if(d===l)return m(f),i;d=d.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=d;else{for(var v=!1,w=f.child;w;){if(w===s){v=!0,s=f,l=d;break}if(w===l){v=!0,l=f,s=d;break}w=w.sibling}if(!v){for(w=d.child;w;){if(w===s){v=!0,s=d,l=f;break}if(w===l){v=!0,l=d,s=f;break}w=w.sibling}if(!v)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function _(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=_(e),i!==null)return i;e=e.sibling}return null}var S=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),L=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),Z=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var dt=Symbol.for("react.client.reference");function mt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===dt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case V:return"Suspense";case N:return"SuspenseList";case F:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case L:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case U:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return i=e.displayName||null,i!==null?i:mt(e.type)||"Memo";case T:i=e._payload,e=e._init;try{return mt(e(i))}catch{}}return null}var X=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,st={pending:!1,data:null,method:null,action:null},vt=[],At=-1;function I(e){return{current:e}}function Q(e){0>At||(e.current=vt[At],vt[At]=null,At--)}function Mt(e,i){At++,vt[At]=e.current,e.current=i}var Rt=I(null),Nt=I(null),lt=I(null),Et=I(null);function wt(e,i){switch(Mt(lt,i),Mt(Nt,e),Mt(Rt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?N0(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=N0(i),e=U0(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Q(Rt),Mt(Rt,e)}function bt(){Q(Rt),Q(Nt),Q(lt)}function Gt(e){e.memoizedState!==null&&Mt(Et,e);var i=Rt.current,s=U0(i,e.type);i!==s&&(Mt(Nt,e),Mt(Rt,s))}function Yt(e){Nt.current===e&&(Q(Rt),Q(Nt)),Et.current===e&&(Q(Et),ko._currentValue=st)}var Pt,oe;function Me(e){if(Pt===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Pt=i&&i[1]||"",oe=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Pt+e+oe}var De=!1;function _e(e,i){if(!e||De)return"";De=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(ut){var ot=ut}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(ut){ot=ut}e.call(yt.prototype)}}else{try{throw Error()}catch(ut){ot=ut}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(ut){if(ut&&ot&&typeof ut.stack=="string")return[ut.stack,ot.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],w=d[1];if(v&&w){var G=v.split(`
`),nt=w.split(`
`);for(f=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;f<nt.length&&!nt[f].includes("DetermineComponentFrameRoot");)f++;if(l===G.length||f===nt.length)for(l=G.length-1,f=nt.length-1;1<=l&&0<=f&&G[l]!==nt[f];)f--;for(;1<=l&&0<=f;l--,f--)if(G[l]!==nt[f]){if(l!==1||f!==1)do if(l--,f--,0>f||G[l]!==nt[f]){var _t=`
`+G[l].replace(" at new "," at ");return e.displayName&&_t.includes("<anonymous>")&&(_t=_t.replace("<anonymous>",e.displayName)),_t}while(1<=l&&0<=f);break}}}finally{De=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?Me(s):""}function Xe(e,i){switch(e.tag){case 26:case 27:case 5:return Me(e.type);case 16:return Me("Lazy");case 13:return e.child!==i&&i!==null?Me("Suspense Fallback"):Me("Suspense");case 19:return Me("SuspenseList");case 0:case 15:return _e(e.type,!1);case 11:return _e(e.type.render,!1);case 1:return _e(e.type,!0);case 31:return Me("Activity");default:return""}}function qe(e){try{var i="",s=null;do i+=Xe(e,s),s=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ln=Object.prototype.hasOwnProperty,Y=r.unstable_scheduleCallback,dn=r.unstable_cancelCallback,be=r.unstable_shouldYield,Ce=r.unstable_requestPaint,Dt=r.unstable_now,ln=r.unstable_getCurrentPriorityLevel,D=r.unstable_ImmediatePriority,b=r.unstable_UserBlockingPriority,J=r.unstable_NormalPriority,xt=r.unstable_LowPriority,Tt=r.unstable_IdlePriority,Ut=r.log,zt=r.unstable_setDisableYieldValue,ft=null,pt=null;function Ft(e){if(typeof Ut=="function"&&zt(e),pt&&typeof pt.setStrictMode=="function")try{pt.setStrictMode(ft,e)}catch{}}var Bt=Math.clz32?Math.clz32:fe,Lt=Math.log,Ot=Math.LN2;function fe(e){return e>>>=0,e===0?32:31-(Lt(e)/Ot|0)|0}var de=256,Te=262144,k=4194304;function Ct(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function gt(e,i,s){var l=e.pendingLanes;if(l===0)return 0;var f=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var w=l&134217727;return w!==0?(l=w&~d,l!==0?f=Ct(l):(v&=w,v!==0?f=Ct(v):s||(s=w&~e,s!==0&&(f=Ct(s))))):(w=l&~d,w!==0?f=Ct(w):v!==0?f=Ct(v):s||(s=l&~e,s!==0&&(f=Ct(s)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:f}function Vt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function z(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tt(){var e=k;return k<<=1,(k&62914560)===0&&(k=4194304),e}function ct(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function ht(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Jt(e,i,s,l,f,d){var v=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var w=e.entanglements,G=e.expirationTimes,nt=e.hiddenUpdates;for(s=v&~s;0<s;){var _t=31-Bt(s),yt=1<<_t;w[_t]=0,G[_t]=-1;var ot=nt[_t];if(ot!==null)for(nt[_t]=null,_t=0;_t<ot.length;_t++){var ut=ot[_t];ut!==null&&(ut.lane&=-536870913)}s&=~yt}l!==0&&ae(e,l,0),d!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~i))}function ae(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Bt(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|s&261930}function jt(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var l=31-Bt(s),f=1<<l;f&i|e[l]&i&&(e[l]|=i),s&=~f}}function xe(e,i){var s=i&-i;return s=(s&42)!==0?1:Ae(s),(s&(e.suspendedLanes|i))!==0?0:s}function Ae(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function cn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function je(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:e_(e.type))}function $e(e,i){var s=B.p;try{return B.p=e,i()}finally{B.p=s}}var le=Math.random().toString(36).slice(2),Wt="__reactFiber$"+le,me="__reactProps$"+le,te="__reactContainer$"+le,ee="__reactEvents$"+le,he="__reactListeners$"+le,ni="__reactHandles$"+le,bn="__reactResources$"+le,En="__reactMarker$"+le;function ii(e){delete e[Wt],delete e[me],delete e[ee],delete e[he],delete e[ni]}function Fa(e){var i=e[Wt];if(i)return i;for(var s=e.parentNode;s;){if(i=s[te]||s[Wt]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=B0(e);e!==null;){if(s=e[Wt])return s;e=B0(e)}return i}e=s,s=e.parentNode}return null}function Ba(e){if(e=e[Wt]||e[te]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function Es(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Ga(e){var i=e[bn];return i||(i=e[bn]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function wn(e){e[En]=!0}var dl=new Set,A={};function q(e,i){rt(e,i),rt(e+"Capture",i)}function rt(e,i){for(A[e]=i,e=0;e<i.length;e++)dl.add(i[e])}var it=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},kt={};function Zt(e){return Ln.call(kt,e)?!0:Ln.call(at,e)?!1:it.test(e)?kt[e]=!0:(at[e]=!0,!1)}function Ht(e,i,s){if(Zt(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function Kt(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function $t(e,i,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+l)}}function se(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Se(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ie(e,i,s){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,d=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return f.call(this)},set:function(v){s=""+v,d.call(this,v)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(v){s=""+v},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ve(e){if(!e._valueTracker){var i=Se(e)?"checked":"value";e._valueTracker=ie(e,i,""+e[i])}}function mn(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return e&&(l=Se(e)?e.checked?"true":"false":e.value),e=l,e!==s?(i.setValue(e),!0):!1}function un(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ke=/[\n"\\]/g;function Qe(e){return e.replace(Ke,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function qt(e,i,s,l,f,d,v,w){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),i!=null?v==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+se(i)):e.value!==""+se(i)&&(e.value=""+se(i)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),i!=null?Ne(e,v,se(i)):s!=null?Ne(e,v,se(s)):l!=null&&e.removeAttribute("value"),f==null&&d!=null&&(e.defaultChecked=!!d),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+se(w):e.removeAttribute("name")}function Yn(e,i,s,l,f,d,v,w){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Ve(e);return}s=s!=null?""+se(s):"",i=i!=null?""+se(i):s,w||i===e.value||(e.value=i),e.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=w?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Ve(e)}function Ne(e,i,s){i==="number"&&un(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function On(e,i,s,l){if(e=e.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<e.length;s++)f=i.hasOwnProperty("$"+e[s].value),e[s].selected!==f&&(e[s].selected=f),f&&l&&(e[s].defaultSelected=!0)}else{for(s=""+se(s),i=null,f=0;f<e.length;f++){if(e[f].value===s){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}i!==null||e[f].disabled||(i=e[f])}i!==null&&(i.selected=!0)}}function fi(e,i,s){if(i!=null&&(i=""+se(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+se(s):""}function zi(e,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(X(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=se(i),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l),Ve(e)}function di(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var Je=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gn(e,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,s):typeof s!="number"||s===0||Je.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function Pi(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&gn(e,f,l)}else for(var d in i)i.hasOwnProperty(d)&&gn(e,d,i[d])}function Ze(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ha=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ts(e){return Ha.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ua(){}var gu=null;function _u(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var er=null,nr=null;function Dp(e){var i=Ba(e);if(i&&(e=i.stateNode)){var s=e[me]||null;t:switch(e=i.stateNode,i.type){case"input":if(qt(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Qe(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==e&&l.form===e.form){var f=l[me]||null;if(!f)throw Error(a(90));qt(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===e.form&&mn(l)}break t;case"textarea":fi(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&On(e,!!s.multiple,i,!1)}}}var vu=!1;function Np(e,i,s){if(vu)return e(i,s);vu=!0;try{var l=e(i);return l}finally{if(vu=!1,(er!==null||nr!==null)&&(Jl(),er&&(i=er,e=nr,nr=er=null,Dp(i),e)))for(i=0;i<e.length;i++)Dp(e[i])}}function so(e,i){var s=e.stateNode;if(s===null)return null;var l=s[me]||null;if(l===null)return null;s=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var fa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xu=!1;if(fa)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){xu=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{xu=!1}var Va=null,Su=null,hl=null;function Up(){if(hl)return hl;var e,i=Su,s=i.length,l,f="value"in Va?Va.value:Va.textContent,d=f.length;for(e=0;e<s&&i[e]===f[e];e++);var v=s-e;for(l=1;l<=v&&i[s-l]===f[d-l];l++);return hl=f.slice(e,1<l?1-l:void 0)}function pl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function ml(){return!0}function Lp(){return!1}function ai(e){function i(s,l,f,d,v){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(s=e[w],this[w]=s?s(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ml:Lp,this.isPropagationStopped=Lp,this}return S(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),i}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gl=ai(As),oo=S({},As,{view:0,detail:0}),lx=ai(oo),yu,Mu,lo,_l=S({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lo&&(lo&&e.type==="mousemove"?(yu=e.screenX-lo.screenX,Mu=e.screenY-lo.screenY):Mu=yu=0,lo=e),yu)},movementY:function(e){return"movementY"in e?e.movementY:Mu}}),Op=ai(_l),cx=S({},_l,{dataTransfer:0}),ux=ai(cx),fx=S({},oo,{relatedTarget:0}),bu=ai(fx),dx=S({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),hx=ai(dx),px=S({},As,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mx=ai(px),gx=S({},As,{data:0}),Ip=ai(gx),_x={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sx(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=xx[e])?!!i[e]:!1}function Eu(){return Sx}var yx=S({},oo,{key:function(e){if(e.key){var i=_x[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=pl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eu,charCode:function(e){return e.type==="keypress"?pl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mx=ai(yx),bx=S({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zp=ai(bx),Ex=S({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eu}),Tx=ai(Ex),Ax=S({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),wx=ai(Ax),Rx=S({},_l,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cx=ai(Rx),Dx=S({},As,{newState:0,oldState:0}),Nx=ai(Dx),Ux=[9,13,27,32],Tu=fa&&"CompositionEvent"in window,co=null;fa&&"documentMode"in document&&(co=document.documentMode);var Lx=fa&&"TextEvent"in window&&!co,Pp=fa&&(!Tu||co&&8<co&&11>=co),Fp=" ",Bp=!1;function Gp(e,i){switch(e){case"keyup":return Ux.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ir=!1;function Ox(e,i){switch(e){case"compositionend":return Hp(i);case"keypress":return i.which!==32?null:(Bp=!0,Fp);case"textInput":return e=i.data,e===Fp&&Bp?null:e;default:return null}}function Ix(e,i){if(ir)return e==="compositionend"||!Tu&&Gp(e,i)?(e=Up(),hl=Su=Va=null,ir=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Pp&&i.locale!=="ko"?null:i.data;default:return null}}var zx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vp(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!zx[e.type]:i==="textarea"}function kp(e,i,s,l){er?nr?nr.push(l):nr=[l]:er=l,i=rc(i,"onChange"),0<i.length&&(s=new gl("onChange","change",null,s,l),e.push({event:s,listeners:i}))}var uo=null,fo=null;function Px(e){T0(e,0)}function vl(e){var i=Es(e);if(mn(i))return e}function Wp(e,i){if(e==="change")return i}var Xp=!1;if(fa){var Au;if(fa){var wu="oninput"in document;if(!wu){var Yp=document.createElement("div");Yp.setAttribute("oninput","return;"),wu=typeof Yp.oninput=="function"}Au=wu}else Au=!1;Xp=Au&&(!document.documentMode||9<document.documentMode)}function qp(){uo&&(uo.detachEvent("onpropertychange",jp),fo=uo=null)}function jp(e){if(e.propertyName==="value"&&vl(fo)){var i=[];kp(i,fo,e,_u(e)),Np(Px,i)}}function Fx(e,i,s){e==="focusin"?(qp(),uo=i,fo=s,uo.attachEvent("onpropertychange",jp)):e==="focusout"&&qp()}function Bx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vl(fo)}function Gx(e,i){if(e==="click")return vl(i)}function Hx(e,i){if(e==="input"||e==="change")return vl(i)}function Vx(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var hi=typeof Object.is=="function"?Object.is:Vx;function ho(e,i){if(hi(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!Ln.call(i,f)||!hi(e[f],i[f]))return!1}return!0}function Zp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $p(e,i){var s=Zp(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=i&&l>=i)return{node:s,offset:i-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Zp(s)}}function Kp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Kp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Qp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=un(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=un(e.document)}return i}function Ru(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var kx=fa&&"documentMode"in document&&11>=document.documentMode,ar=null,Cu=null,po=null,Du=!1;function Jp(e,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Du||ar==null||ar!==un(l)||(l=ar,"selectionStart"in l&&Ru(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),po&&ho(po,l)||(po=l,l=rc(Cu,"onSelect"),0<l.length&&(i=new gl("onSelect","select",null,i,s),e.push({event:i,listeners:l}),i.target=ar)))}function ws(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var sr={animationend:ws("Animation","AnimationEnd"),animationiteration:ws("Animation","AnimationIteration"),animationstart:ws("Animation","AnimationStart"),transitionrun:ws("Transition","TransitionRun"),transitionstart:ws("Transition","TransitionStart"),transitioncancel:ws("Transition","TransitionCancel"),transitionend:ws("Transition","TransitionEnd")},Nu={},tm={};fa&&(tm=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function Rs(e){if(Nu[e])return Nu[e];if(!sr[e])return e;var i=sr[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in tm)return Nu[e]=i[s];return e}var em=Rs("animationend"),nm=Rs("animationiteration"),im=Rs("animationstart"),Wx=Rs("transitionrun"),Xx=Rs("transitionstart"),Yx=Rs("transitioncancel"),am=Rs("transitionend"),sm=new Map,Uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uu.push("scrollEnd");function Fi(e,i){sm.set(e,i),q(i,[e])}var xl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ei=[],rr=0,Lu=0;function Sl(){for(var e=rr,i=Lu=rr=0;i<e;){var s=Ei[i];Ei[i++]=null;var l=Ei[i];Ei[i++]=null;var f=Ei[i];Ei[i++]=null;var d=Ei[i];if(Ei[i++]=null,l!==null&&f!==null){var v=l.pending;v===null?f.next=f:(f.next=v.next,v.next=f),l.pending=f}d!==0&&rm(s,f,d)}}function yl(e,i,s,l){Ei[rr++]=e,Ei[rr++]=i,Ei[rr++]=s,Ei[rr++]=l,Lu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Ou(e,i,s,l){return yl(e,i,s,l),Ml(e)}function Cs(e,i){return yl(e,null,null,i),Ml(e)}function rm(e,i,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var f=!1,d=e.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(f=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,f&&i!==null&&(f=31-Bt(s),e=d.hiddenUpdates,l=e[f],l===null?e[f]=[i]:l.push(i),i.lane=s|536870912),d):null}function Ml(e){if(50<zo)throw zo=0,Wf=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var or={};function qx(e,i,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(e,i,s,l){return new qx(e,i,s,l)}function Iu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function da(e,i){var s=e.alternate;return s===null?(s=pi(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function om(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function bl(e,i,s,l,f,d){var v=0;if(l=e,typeof e=="function")Iu(e)&&(v=1);else if(typeof e=="string")v=QS(e,s,Rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case F:return e=pi(31,s,i,f),e.elementType=F,e.lanes=d,e;case R:return Ds(s.children,f,d,i);case y:v=8,f|=24;break;case x:return e=pi(12,s,i,f|2),e.elementType=x,e.lanes=d,e;case V:return e=pi(13,s,i,f),e.elementType=V,e.lanes=d,e;case N:return e=pi(19,s,i,f),e.elementType=N,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:v=10;break t;case C:v=9;break t;case U:v=11;break t;case P:v=14;break t;case T:v=16,l=null;break t}v=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=pi(v,s,i,f),i.elementType=e,i.type=l,i.lanes=d,i}function Ds(e,i,s,l){return e=pi(7,e,l,i),e.lanes=s,e}function zu(e,i,s){return e=pi(6,e,null,i),e.lanes=s,e}function lm(e){var i=pi(18,null,null,0);return i.stateNode=e,i}function Pu(e,i,s){return i=pi(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var cm=new WeakMap;function Ti(e,i){if(typeof e=="object"&&e!==null){var s=cm.get(e);return s!==void 0?s:(i={value:e,source:i,stack:qe(i)},cm.set(e,i),i)}return{value:e,source:i,stack:qe(i)}}var lr=[],cr=0,El=null,mo=0,Ai=[],wi=0,ka=null,qi=1,ji="";function ha(e,i){lr[cr++]=mo,lr[cr++]=El,El=e,mo=i}function um(e,i,s){Ai[wi++]=qi,Ai[wi++]=ji,Ai[wi++]=ka,ka=e;var l=qi;e=ji;var f=32-Bt(l)-1;l&=~(1<<f),s+=1;var d=32-Bt(i)+f;if(30<d){var v=f-f%5;d=(l&(1<<v)-1).toString(32),l>>=v,f-=v,qi=1<<32-Bt(i)+f|s<<f|l,ji=d+e}else qi=1<<d|s<<f|l,ji=e}function Fu(e){e.return!==null&&(ha(e,1),um(e,1,0))}function Bu(e){for(;e===El;)El=lr[--cr],lr[cr]=null,mo=lr[--cr],lr[cr]=null;for(;e===ka;)ka=Ai[--wi],Ai[wi]=null,ji=Ai[--wi],Ai[wi]=null,qi=Ai[--wi],Ai[wi]=null}function fm(e,i){Ai[wi++]=qi,Ai[wi++]=ji,Ai[wi++]=ka,qi=i.id,ji=i.overflow,ka=e}var Hn=null,hn=null,Pe=!1,Wa=null,Ri=!1,Gu=Error(a(519));function Xa(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw go(Ti(i,e)),Gu}function dm(e){var i=e.stateNode,s=e.type,l=e.memoizedProps;switch(i[Wt]=e,i[me]=l,s){case"dialog":Le("cancel",i),Le("close",i);break;case"iframe":case"object":case"embed":Le("load",i);break;case"video":case"audio":for(s=0;s<Fo.length;s++)Le(Fo[s],i);break;case"source":Le("error",i);break;case"img":case"image":case"link":Le("error",i),Le("load",i);break;case"details":Le("toggle",i);break;case"input":Le("invalid",i),Yn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Le("invalid",i);break;case"textarea":Le("invalid",i),zi(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||C0(i.textContent,s)?(l.popover!=null&&(Le("beforetoggle",i),Le("toggle",i)),l.onScroll!=null&&Le("scroll",i),l.onScrollEnd!=null&&Le("scrollend",i),l.onClick!=null&&(i.onclick=ua),i=!0):i=!1,i||Xa(e,!0)}function hm(e){for(Hn=e.return;Hn;)switch(Hn.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:Hn=Hn.return}}function ur(e){if(e!==Hn)return!1;if(!Pe)return hm(e),Pe=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||sd(e.type,e.memoizedProps)),s=!s),s&&hn&&Xa(e),hm(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));hn=F0(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));hn=F0(e)}else i===27?(i=hn,ss(e.type)?(e=ud,ud=null,hn=e):hn=i):hn=Hn?Di(e.stateNode.nextSibling):null;return!0}function Ns(){hn=Hn=null,Pe=!1}function Hu(){var e=Wa;return e!==null&&(li===null?li=e:li.push.apply(li,e),Wa=null),e}function go(e){Wa===null?Wa=[e]:Wa.push(e)}var Vu=I(null),Us=null,pa=null;function Ya(e,i,s){Mt(Vu,i._currentValue),i._currentValue=s}function ma(e){e._currentValue=Vu.current,Q(Vu)}function ku(e,i,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===s)break;e=e.return}}function Wu(e,i,s,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var d=f.dependencies;if(d!==null){var v=f.child;d=d.firstContext;t:for(;d!==null;){var w=d;d=f;for(var G=0;G<i.length;G++)if(w.context===i[G]){d.lanes|=s,w=d.alternate,w!==null&&(w.lanes|=s),ku(d.return,s,e),l||(v=null);break t}d=w.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(a(341));v.lanes|=s,d=v.alternate,d!==null&&(d.lanes|=s),ku(v,s,e),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===e){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function fr(e,i,s,l){e=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(a(387));if(v=v.memoizedProps,v!==null){var w=f.type;hi(f.pendingProps.value,v.value)||(e!==null?e.push(w):e=[w])}}else if(f===Et.current){if(v=f.alternate,v===null)throw Error(a(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(ko):e=[ko])}f=f.return}e!==null&&Wu(i,e,s,l),i.flags|=262144}function Tl(e){for(e=e.firstContext;e!==null;){if(!hi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ls(e){Us=e,pa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Vn(e){return pm(Us,e)}function Al(e,i){return Us===null&&Ls(e),pm(e,i)}function pm(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},pa===null){if(e===null)throw Error(a(308));pa=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else pa=pa.next=i;return s}var jx=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},Zx=r.unstable_scheduleCallback,$x=r.unstable_NormalPriority,Rn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xu(){return{controller:new jx,data:new Map,refCount:0}}function _o(e){e.refCount--,e.refCount===0&&Zx($x,function(){e.controller.abort()})}var vo=null,Yu=0,dr=0,hr=null;function Kx(e,i){if(vo===null){var s=vo=[];Yu=0,dr=$f(),hr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Yu++,i.then(mm,mm),i}function mm(){if(--Yu===0&&vo!==null){hr!==null&&(hr.status="fulfilled");var e=vo;vo=null,dr=0,hr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function Qx(e,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var gm=O.S;O.S=function(e,i){Jg=Dt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Kx(e,i),gm!==null&&gm(e,i)};var Os=I(null);function qu(){var e=Os.current;return e!==null?e:fn.pooledCache}function wl(e,i){i===null?Mt(Os,Os.current):Mt(Os,i.pool)}function _m(){var e=qu();return e===null?null:{parent:Rn._currentValue,pool:e}}var pr=Error(a(460)),ju=Error(a(474)),Rl=Error(a(542)),Cl={then:function(){}};function vm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function xm(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(ua,ua),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,ym(e),e;default:if(typeof i.status=="string")i.then(ua,ua);else{if(e=fn,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,ym(e),e}throw zs=i,pr}}function Is(e){try{var i=e._init;return i(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(zs=s,pr):s}}var zs=null;function Sm(){if(zs===null)throw Error(a(459));var e=zs;return zs=null,e}function ym(e){if(e===pr||e===Rl)throw Error(a(483))}var mr=null,xo=0;function Dl(e){var i=xo;return xo+=1,mr===null&&(mr=[]),xm(mr,e,i)}function So(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Nl(e,i){throw i.$$typeof===g?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Mm(e){function i(j,W){if(e){var et=j.deletions;et===null?(j.deletions=[W],j.flags|=16):et.push(W)}}function s(j,W){if(!e)return null;for(;W!==null;)i(j,W),W=W.sibling;return null}function l(j){for(var W=new Map;j!==null;)j.key!==null?W.set(j.key,j):W.set(j.index,j),j=j.sibling;return W}function f(j,W){return j=da(j,W),j.index=0,j.sibling=null,j}function d(j,W,et){return j.index=et,e?(et=j.alternate,et!==null?(et=et.index,et<W?(j.flags|=67108866,W):et):(j.flags|=67108866,W)):(j.flags|=1048576,W)}function v(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function w(j,W,et,St){return W===null||W.tag!==6?(W=zu(et,j.mode,St),W.return=j,W):(W=f(W,et),W.return=j,W)}function G(j,W,et,St){var re=et.type;return re===R?_t(j,W,et.props.children,St,et.key):W!==null&&(W.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===T&&Is(re)===W.type)?(W=f(W,et.props),So(W,et),W.return=j,W):(W=bl(et.type,et.key,et.props,null,j.mode,St),So(W,et),W.return=j,W)}function nt(j,W,et,St){return W===null||W.tag!==4||W.stateNode.containerInfo!==et.containerInfo||W.stateNode.implementation!==et.implementation?(W=Pu(et,j.mode,St),W.return=j,W):(W=f(W,et.children||[]),W.return=j,W)}function _t(j,W,et,St,re){return W===null||W.tag!==7?(W=Ds(et,j.mode,St,re),W.return=j,W):(W=f(W,et),W.return=j,W)}function yt(j,W,et){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=zu(""+W,j.mode,et),W.return=j,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case M:return et=bl(W.type,W.key,W.props,null,j.mode,et),So(et,W),et.return=j,et;case E:return W=Pu(W,j.mode,et),W.return=j,W;case T:return W=Is(W),yt(j,W,et)}if(X(W)||K(W))return W=Ds(W,j.mode,et,null),W.return=j,W;if(typeof W.then=="function")return yt(j,Dl(W),et);if(W.$$typeof===L)return yt(j,Al(j,W),et);Nl(j,W)}return null}function ot(j,W,et,St){var re=W!==null?W.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return re!==null?null:w(j,W,""+et,St);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case M:return et.key===re?G(j,W,et,St):null;case E:return et.key===re?nt(j,W,et,St):null;case T:return et=Is(et),ot(j,W,et,St)}if(X(et)||K(et))return re!==null?null:_t(j,W,et,St,null);if(typeof et.then=="function")return ot(j,W,Dl(et),St);if(et.$$typeof===L)return ot(j,W,Al(j,et),St);Nl(j,et)}return null}function ut(j,W,et,St,re){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return j=j.get(et)||null,w(W,j,""+St,re);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case M:return j=j.get(St.key===null?et:St.key)||null,G(W,j,St,re);case E:return j=j.get(St.key===null?et:St.key)||null,nt(W,j,St,re);case T:return St=Is(St),ut(j,W,et,St,re)}if(X(St)||K(St))return j=j.get(et)||null,_t(W,j,St,re,null);if(typeof St.then=="function")return ut(j,W,et,Dl(St),re);if(St.$$typeof===L)return ut(j,W,et,Al(W,St),re);Nl(W,St)}return null}function Qt(j,W,et,St){for(var re=null,ke=null,ne=W,Ee=W=0,ze=null;ne!==null&&Ee<et.length;Ee++){ne.index>Ee?(ze=ne,ne=null):ze=ne.sibling;var We=ot(j,ne,et[Ee],St);if(We===null){ne===null&&(ne=ze);break}e&&ne&&We.alternate===null&&i(j,ne),W=d(We,W,Ee),ke===null?re=We:ke.sibling=We,ke=We,ne=ze}if(Ee===et.length)return s(j,ne),Pe&&ha(j,Ee),re;if(ne===null){for(;Ee<et.length;Ee++)ne=yt(j,et[Ee],St),ne!==null&&(W=d(ne,W,Ee),ke===null?re=ne:ke.sibling=ne,ke=ne);return Pe&&ha(j,Ee),re}for(ne=l(ne);Ee<et.length;Ee++)ze=ut(ne,j,Ee,et[Ee],St),ze!==null&&(e&&ze.alternate!==null&&ne.delete(ze.key===null?Ee:ze.key),W=d(ze,W,Ee),ke===null?re=ze:ke.sibling=ze,ke=ze);return e&&ne.forEach(function(us){return i(j,us)}),Pe&&ha(j,Ee),re}function ue(j,W,et,St){if(et==null)throw Error(a(151));for(var re=null,ke=null,ne=W,Ee=W=0,ze=null,We=et.next();ne!==null&&!We.done;Ee++,We=et.next()){ne.index>Ee?(ze=ne,ne=null):ze=ne.sibling;var us=ot(j,ne,We.value,St);if(us===null){ne===null&&(ne=ze);break}e&&ne&&us.alternate===null&&i(j,ne),W=d(us,W,Ee),ke===null?re=us:ke.sibling=us,ke=us,ne=ze}if(We.done)return s(j,ne),Pe&&ha(j,Ee),re;if(ne===null){for(;!We.done;Ee++,We=et.next())We=yt(j,We.value,St),We!==null&&(W=d(We,W,Ee),ke===null?re=We:ke.sibling=We,ke=We);return Pe&&ha(j,Ee),re}for(ne=l(ne);!We.done;Ee++,We=et.next())We=ut(ne,j,Ee,We.value,St),We!==null&&(e&&We.alternate!==null&&ne.delete(We.key===null?Ee:We.key),W=d(We,W,Ee),ke===null?re=We:ke.sibling=We,ke=We);return e&&ne.forEach(function(cy){return i(j,cy)}),Pe&&ha(j,Ee),re}function rn(j,W,et,St){if(typeof et=="object"&&et!==null&&et.type===R&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case M:t:{for(var re=et.key;W!==null;){if(W.key===re){if(re=et.type,re===R){if(W.tag===7){s(j,W.sibling),St=f(W,et.props.children),St.return=j,j=St;break t}}else if(W.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===T&&Is(re)===W.type){s(j,W.sibling),St=f(W,et.props),So(St,et),St.return=j,j=St;break t}s(j,W);break}else i(j,W);W=W.sibling}et.type===R?(St=Ds(et.props.children,j.mode,St,et.key),St.return=j,j=St):(St=bl(et.type,et.key,et.props,null,j.mode,St),So(St,et),St.return=j,j=St)}return v(j);case E:t:{for(re=et.key;W!==null;){if(W.key===re)if(W.tag===4&&W.stateNode.containerInfo===et.containerInfo&&W.stateNode.implementation===et.implementation){s(j,W.sibling),St=f(W,et.children||[]),St.return=j,j=St;break t}else{s(j,W);break}else i(j,W);W=W.sibling}St=Pu(et,j.mode,St),St.return=j,j=St}return v(j);case T:return et=Is(et),rn(j,W,et,St)}if(X(et))return Qt(j,W,et,St);if(K(et)){if(re=K(et),typeof re!="function")throw Error(a(150));return et=re.call(et),ue(j,W,et,St)}if(typeof et.then=="function")return rn(j,W,Dl(et),St);if(et.$$typeof===L)return rn(j,W,Al(j,et),St);Nl(j,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,W!==null&&W.tag===6?(s(j,W.sibling),St=f(W,et),St.return=j,j=St):(s(j,W),St=zu(et,j.mode,St),St.return=j,j=St),v(j)):s(j,W)}return function(j,W,et,St){try{xo=0;var re=rn(j,W,et,St);return mr=null,re}catch(ne){if(ne===pr||ne===Rl)throw ne;var ke=pi(29,ne,null,j.mode);return ke.lanes=St,ke.return=j,ke}finally{}}}var Ps=Mm(!0),bm=Mm(!1),qa=!1;function Zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $u(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Za(e,i,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ye&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Ml(e),rm(e,null,s),i}return yl(e,l,i,s),Ml(e)}function yo(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,jt(e,s)}}function Ku(e,i){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var v={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?f=d=v:d=d.next=v,s=s.next}while(s!==null);d===null?f=d=i:d=d.next=i}else f=d=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var Qu=!1;function Mo(){if(Qu){var e=hr;if(e!==null)throw e}}function bo(e,i,s,l){Qu=!1;var f=e.updateQueue;qa=!1;var d=f.firstBaseUpdate,v=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var G=w,nt=G.next;G.next=null,v===null?d=nt:v.next=nt,v=G;var _t=e.alternate;_t!==null&&(_t=_t.updateQueue,w=_t.lastBaseUpdate,w!==v&&(w===null?_t.firstBaseUpdate=nt:w.next=nt,_t.lastBaseUpdate=G))}if(d!==null){var yt=f.baseState;v=0,_t=nt=G=null,w=d;do{var ot=w.lane&-536870913,ut=ot!==w.lane;if(ut?(Ie&ot)===ot:(l&ot)===ot){ot!==0&&ot===dr&&(Qu=!0),_t!==null&&(_t=_t.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var Qt=e,ue=w;ot=i;var rn=s;switch(ue.tag){case 1:if(Qt=ue.payload,typeof Qt=="function"){yt=Qt.call(rn,yt,ot);break t}yt=Qt;break t;case 3:Qt.flags=Qt.flags&-65537|128;case 0:if(Qt=ue.payload,ot=typeof Qt=="function"?Qt.call(rn,yt,ot):Qt,ot==null)break t;yt=S({},yt,ot);break t;case 2:qa=!0}}ot=w.callback,ot!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=f.callbacks,ut===null?f.callbacks=[ot]:ut.push(ot))}else ut={lane:ot,tag:w.tag,payload:w.payload,callback:w.callback,next:null},_t===null?(nt=_t=ut,G=yt):_t=_t.next=ut,v|=ot;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;ut=w,w=ut.next,ut.next=null,f.lastBaseUpdate=ut,f.shared.pending=null}}while(!0);_t===null&&(G=yt),f.baseState=G,f.firstBaseUpdate=nt,f.lastBaseUpdate=_t,d===null&&(f.shared.lanes=0),ts|=v,e.lanes=v,e.memoizedState=yt}}function Em(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function Tm(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Em(s[e],i)}var gr=I(null),Ul=I(0);function Am(e,i){e=Ea,Mt(Ul,e),Mt(gr,i),Ea=e|i.baseLanes}function Ju(){Mt(Ul,Ea),Mt(gr,gr.current)}function tf(){Ea=Ul.current,Q(gr),Q(Ul)}var mi=I(null),Ci=null;function $a(e){var i=e.alternate;Mt(Tn,Tn.current&1),Mt(mi,e),Ci===null&&(i===null||gr.current!==null||i.memoizedState!==null)&&(Ci=e)}function ef(e){Mt(Tn,Tn.current),Mt(mi,e),Ci===null&&(Ci=e)}function wm(e){e.tag===22?(Mt(Tn,Tn.current),Mt(mi,e),Ci===null&&(Ci=e)):Ka()}function Ka(){Mt(Tn,Tn.current),Mt(mi,mi.current)}function gi(e){Q(mi),Ci===e&&(Ci=null),Q(Tn)}var Tn=I(0);function Ll(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||ld(s)||cd(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ga=0,ye=null,an=null,Cn=null,Ol=!1,_r=!1,Fs=!1,Il=0,Eo=0,vr=null,Jx=0;function Sn(){throw Error(a(321))}function nf(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!hi(e[s],i[s]))return!1;return!0}function af(e,i,s,l,f,d){return ga=d,ye=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,O.H=e===null||e.memoizedState===null?ug:xf,Fs=!1,d=s(l,f),Fs=!1,_r&&(d=Cm(i,s,l,f)),Rm(e),d}function Rm(e){O.H=wo;var i=an!==null&&an.next!==null;if(ga=0,Cn=an=ye=null,Ol=!1,Eo=0,vr=null,i)throw Error(a(300));e===null||Dn||(e=e.dependencies,e!==null&&Tl(e)&&(Dn=!0))}function Cm(e,i,s,l){ye=e;var f=0;do{if(_r&&(vr=null),Eo=0,_r=!1,25<=f)throw Error(a(301));if(f+=1,Cn=an=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}O.H=fg,d=i(s,l)}while(_r);return d}function tS(){var e=O.H,i=e.useState()[0];return i=typeof i.then=="function"?To(i):i,e=e.useState()[0],(an!==null?an.memoizedState:null)!==e&&(ye.flags|=1024),i}function sf(){var e=Il!==0;return Il=0,e}function rf(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function of(e){if(Ol){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Ol=!1}ga=0,Cn=an=ye=null,_r=!1,Eo=Il=0,vr=null}function Qn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cn===null?ye.memoizedState=Cn=e:Cn=Cn.next=e,Cn}function An(){if(an===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=an.next;var i=Cn===null?ye.memoizedState:Cn.next;if(i!==null)Cn=i,an=e;else{if(e===null)throw ye.alternate===null?Error(a(467)):Error(a(310));an=e,e={memoizedState:an.memoizedState,baseState:an.baseState,baseQueue:an.baseQueue,queue:an.queue,next:null},Cn===null?ye.memoizedState=Cn=e:Cn=Cn.next=e}return Cn}function zl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function To(e){var i=Eo;return Eo+=1,vr===null&&(vr=[]),e=xm(vr,e,i),i=ye,(Cn===null?i.memoizedState:Cn.next)===null&&(i=i.alternate,O.H=i===null||i.memoizedState===null?ug:xf),e}function Pl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return To(e);if(e.$$typeof===L)return Vn(e)}throw Error(a(438,String(e)))}function lf(e){var i=null,s=ye.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=ye.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=zl(),ye.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),l=0;l<e;l++)s[l]=Z;return i.index++,s}function _a(e,i){return typeof i=="function"?i(e):i}function Fl(e){var i=An();return cf(i,an,e)}function cf(e,i,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=e.baseQueue,d=l.pending;if(d!==null){if(f!==null){var v=f.next;f.next=d.next,d.next=v}i.baseQueue=f=d,l.pending=null}if(d=e.baseState,f===null)e.memoizedState=d;else{i=f.next;var w=v=null,G=null,nt=i,_t=!1;do{var yt=nt.lane&-536870913;if(yt!==nt.lane?(Ie&yt)===yt:(ga&yt)===yt){var ot=nt.revertLane;if(ot===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),yt===dr&&(_t=!0);else if((ga&ot)===ot){nt=nt.next,ot===dr&&(_t=!0);continue}else yt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},G===null?(w=G=yt,v=d):G=G.next=yt,ye.lanes|=ot,ts|=ot;yt=nt.action,Fs&&s(d,yt),d=nt.hasEagerState?nt.eagerState:s(d,yt)}else ot={lane:yt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},G===null?(w=G=ot,v=d):G=G.next=ot,ye.lanes|=yt,ts|=yt;nt=nt.next}while(nt!==null&&nt!==i);if(G===null?v=d:G.next=w,!hi(d,e.memoizedState)&&(Dn=!0,_t&&(s=hr,s!==null)))throw s;e.memoizedState=d,e.baseState=v,e.baseQueue=G,l.lastRenderedState=d}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function uf(e){var i=An(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,f=s.pending,d=i.memoizedState;if(f!==null){s.pending=null;var v=f=f.next;do d=e(d,v.action),v=v.next;while(v!==f);hi(d,i.memoizedState)||(Dn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,l]}function Dm(e,i,s){var l=ye,f=An(),d=Pe;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=i();var v=!hi((an||f).memoizedState,s);if(v&&(f.memoizedState=s,Dn=!0),f=f.queue,hf(Lm.bind(null,l,f,e),[e]),f.getSnapshot!==i||v||Cn!==null&&Cn.memoizedState.tag&1){if(l.flags|=2048,xr(9,{destroy:void 0},Um.bind(null,l,f,s,i),null),fn===null)throw Error(a(349));d||(ga&127)!==0||Nm(l,i,s)}return s}function Nm(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=ye.updateQueue,i===null?(i=zl(),ye.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function Um(e,i,s,l){i.value=s,i.getSnapshot=l,Om(i)&&Im(e)}function Lm(e,i,s){return s(function(){Om(i)&&Im(e)})}function Om(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!hi(e,s)}catch{return!0}}function Im(e){var i=Cs(e,2);i!==null&&ci(i,e,2)}function ff(e){var i=Qn();if(typeof e=="function"){var s=e;if(e=s(),Fs){Ft(!0);try{s()}finally{Ft(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:e},i}function zm(e,i,s,l){return e.baseState=s,cf(e,an,typeof l=="function"?l:_a)}function eS(e,i,s,l,f){if(Hl(e))throw Error(a(485));if(e=i.action,e!==null){var d={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};O.T!==null?s(!0):d.isTransition=!1,l(d),s=i.pending,s===null?(d.next=i.pending=d,Pm(i,d)):(d.next=s.next,i.pending=s.next=d)}}function Pm(e,i){var s=i.action,l=i.payload,f=e.state;if(i.isTransition){var d=O.T,v={};O.T=v;try{var w=s(f,l),G=O.S;G!==null&&G(v,w),Fm(e,i,w)}catch(nt){df(e,i,nt)}finally{d!==null&&v.types!==null&&(d.types=v.types),O.T=d}}else try{d=s(f,l),Fm(e,i,d)}catch(nt){df(e,i,nt)}}function Fm(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Bm(e,i,l)},function(l){return df(e,i,l)}):Bm(e,i,s)}function Bm(e,i,s){i.status="fulfilled",i.value=s,Gm(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,Pm(e,s)))}function df(e,i,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,Gm(i),i=i.next;while(i!==l)}e.action=null}function Gm(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Hm(e,i){return i}function Vm(e,i){if(Pe){var s=fn.formState;if(s!==null){t:{var l=ye;if(Pe){if(hn){e:{for(var f=hn,d=Ri;f.nodeType!==8;){if(!d){f=null;break e}if(f=Di(f.nextSibling),f===null){f=null;break e}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){hn=Di(f.nextSibling),l=f.data==="F!";break t}}Xa(l)}l=!1}l&&(i=s[0])}}return s=Qn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hm,lastRenderedState:i},s.queue=l,s=og.bind(null,ye,l),l.dispatch=s,l=ff(!1),d=vf.bind(null,ye,!1,l.queue),l=Qn(),f={state:i,dispatch:null,action:e,pending:null},l.queue=f,s=eS.bind(null,ye,f,d,s),f.dispatch=s,l.memoizedState=e,[i,s,!1]}function km(e){var i=An();return Wm(i,an,e)}function Wm(e,i,s){if(i=cf(e,i,Hm)[0],e=Fl(_a)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=To(i)}catch(v){throw v===pr?Rl:v}else l=i;i=An();var f=i.queue,d=f.dispatch;return s!==i.memoizedState&&(ye.flags|=2048,xr(9,{destroy:void 0},nS.bind(null,f,s),null)),[l,d,e]}function nS(e,i){e.action=i}function Xm(e){var i=An(),s=an;if(s!==null)return Wm(i,s,e);An(),i=i.memoizedState,s=An();var l=s.queue.dispatch;return s.memoizedState=e,[i,l,!1]}function xr(e,i,s,l){return e={tag:e,create:s,deps:l,inst:i,next:null},i=ye.updateQueue,i===null&&(i=zl(),ye.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,i.lastEffect=e),e}function Ym(){return An().memoizedState}function Bl(e,i,s,l){var f=Qn();ye.flags|=e,f.memoizedState=xr(1|i,{destroy:void 0},s,l===void 0?null:l)}function Gl(e,i,s,l){var f=An();l=l===void 0?null:l;var d=f.memoizedState.inst;an!==null&&l!==null&&nf(l,an.memoizedState.deps)?f.memoizedState=xr(i,d,s,l):(ye.flags|=e,f.memoizedState=xr(1|i,d,s,l))}function qm(e,i){Bl(8390656,8,e,i)}function hf(e,i){Gl(2048,8,e,i)}function iS(e){ye.flags|=4;var i=ye.updateQueue;if(i===null)i=zl(),ye.updateQueue=i,i.events=[e];else{var s=i.events;s===null?i.events=[e]:s.push(e)}}function jm(e){var i=An().memoizedState;return iS({ref:i,nextImpl:e}),function(){if((Ye&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Zm(e,i){return Gl(4,2,e,i)}function $m(e,i){return Gl(4,4,e,i)}function Km(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Qm(e,i,s){s=s!=null?s.concat([e]):null,Gl(4,4,Km.bind(null,i,e),s)}function pf(){}function Jm(e,i){var s=An();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&nf(i,l[1])?l[0]:(s.memoizedState=[e,i],e)}function tg(e,i){var s=An();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&nf(i,l[1]))return l[0];if(l=e(),Fs){Ft(!0);try{e()}finally{Ft(!1)}}return s.memoizedState=[l,i],l}function mf(e,i,s){return s===void 0||(ga&1073741824)!==0&&(Ie&261930)===0?e.memoizedState=i:(e.memoizedState=s,e=e0(),ye.lanes|=e,ts|=e,s)}function eg(e,i,s,l){return hi(s,i)?s:gr.current!==null?(e=mf(e,s,l),hi(e,i)||(Dn=!0),e):(ga&42)===0||(ga&1073741824)!==0&&(Ie&261930)===0?(Dn=!0,e.memoizedState=s):(e=e0(),ye.lanes|=e,ts|=e,i)}function ng(e,i,s,l,f){var d=B.p;B.p=d!==0&&8>d?d:8;var v=O.T,w={};O.T=w,vf(e,!1,i,s);try{var G=f(),nt=O.S;if(nt!==null&&nt(w,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var _t=Qx(G,l);Ao(e,i,_t,xi(e))}else Ao(e,i,l,xi(e))}catch(yt){Ao(e,i,{then:function(){},status:"rejected",reason:yt},xi())}finally{B.p=d,v!==null&&w.types!==null&&(v.types=w.types),O.T=v}}function aS(){}function gf(e,i,s,l){if(e.tag!==5)throw Error(a(476));var f=ig(e).queue;ng(e,f,i,st,s===null?aS:function(){return ag(e),s(l)})}function ig(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:st,baseState:st,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:st},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function ag(e){var i=ig(e);i.next===null&&(i=e.alternate.memoizedState),Ao(e,i.next.queue,{},xi())}function _f(){return Vn(ko)}function sg(){return An().memoizedState}function rg(){return An().memoizedState}function sS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=xi();e=ja(s);var l=Za(i,e,s);l!==null&&(ci(l,i,s),yo(l,i,s)),i={cache:Xu()},e.payload=i;return}i=i.return}}function rS(e,i,s){var l=xi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Hl(e)?lg(i,s):(s=Ou(e,i,s,l),s!==null&&(ci(s,e,l),cg(s,i,l)))}function og(e,i,s){var l=xi();Ao(e,i,s,l)}function Ao(e,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Hl(e))lg(i,f);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,w=d(v,s);if(f.hasEagerState=!0,f.eagerState=w,hi(w,v))return yl(e,i,f,0),fn===null&&Sl(),!1}catch{}finally{}if(s=Ou(e,i,f,l),s!==null)return ci(s,e,l),cg(s,i,l),!0}return!1}function vf(e,i,s,l){if(l={lane:2,revertLane:$f(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Hl(e)){if(i)throw Error(a(479))}else i=Ou(e,s,l,2),i!==null&&ci(i,e,2)}function Hl(e){var i=e.alternate;return e===ye||i!==null&&i===ye}function lg(e,i){_r=Ol=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function cg(e,i,s){if((s&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,jt(e,s)}}var wo={readContext:Vn,use:Pl,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useLayoutEffect:Sn,useInsertionEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useSyncExternalStore:Sn,useId:Sn,useHostTransitionStatus:Sn,useFormState:Sn,useActionState:Sn,useOptimistic:Sn,useMemoCache:Sn,useCacheRefresh:Sn};wo.useEffectEvent=Sn;var ug={readContext:Vn,use:Pl,useCallback:function(e,i){return Qn().memoizedState=[e,i===void 0?null:i],e},useContext:Vn,useEffect:qm,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,Bl(4194308,4,Km.bind(null,i,e),s)},useLayoutEffect:function(e,i){return Bl(4194308,4,e,i)},useInsertionEffect:function(e,i){Bl(4,2,e,i)},useMemo:function(e,i){var s=Qn();i=i===void 0?null:i;var l=e();if(Fs){Ft(!0);try{e()}finally{Ft(!1)}}return s.memoizedState=[l,i],l},useReducer:function(e,i,s){var l=Qn();if(s!==void 0){var f=s(i);if(Fs){Ft(!0);try{s(i)}finally{Ft(!1)}}}else f=i;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=rS.bind(null,ye,e),[l.memoizedState,e]},useRef:function(e){var i=Qn();return e={current:e},i.memoizedState=e},useState:function(e){e=ff(e);var i=e.queue,s=og.bind(null,ye,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:pf,useDeferredValue:function(e,i){var s=Qn();return mf(s,e,i)},useTransition:function(){var e=ff(!1);return e=ng.bind(null,ye,e.queue,!0,!1),Qn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var l=ye,f=Qn();if(Pe){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),fn===null)throw Error(a(349));(Ie&127)!==0||Nm(l,i,s)}f.memoizedState=s;var d={value:s,getSnapshot:i};return f.queue=d,qm(Lm.bind(null,l,d,e),[e]),l.flags|=2048,xr(9,{destroy:void 0},Um.bind(null,l,d,s,i),null),s},useId:function(){var e=Qn(),i=fn.identifierPrefix;if(Pe){var s=ji,l=qi;s=(l&~(1<<32-Bt(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Il++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=Jx++,i="_"+i+"r_"+s.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:_f,useFormState:Vm,useActionState:Vm,useOptimistic:function(e){var i=Qn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=vf.bind(null,ye,!0,s),s.dispatch=i,[e,i]},useMemoCache:lf,useCacheRefresh:function(){return Qn().memoizedState=sS.bind(null,ye)},useEffectEvent:function(e){var i=Qn(),s={impl:e};return i.memoizedState=s,function(){if((Ye&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},xf={readContext:Vn,use:Pl,useCallback:Jm,useContext:Vn,useEffect:hf,useImperativeHandle:Qm,useInsertionEffect:Zm,useLayoutEffect:$m,useMemo:tg,useReducer:Fl,useRef:Ym,useState:function(){return Fl(_a)},useDebugValue:pf,useDeferredValue:function(e,i){var s=An();return eg(s,an.memoizedState,e,i)},useTransition:function(){var e=Fl(_a)[0],i=An().memoizedState;return[typeof e=="boolean"?e:To(e),i]},useSyncExternalStore:Dm,useId:sg,useHostTransitionStatus:_f,useFormState:km,useActionState:km,useOptimistic:function(e,i){var s=An();return zm(s,an,e,i)},useMemoCache:lf,useCacheRefresh:rg};xf.useEffectEvent=jm;var fg={readContext:Vn,use:Pl,useCallback:Jm,useContext:Vn,useEffect:hf,useImperativeHandle:Qm,useInsertionEffect:Zm,useLayoutEffect:$m,useMemo:tg,useReducer:uf,useRef:Ym,useState:function(){return uf(_a)},useDebugValue:pf,useDeferredValue:function(e,i){var s=An();return an===null?mf(s,e,i):eg(s,an.memoizedState,e,i)},useTransition:function(){var e=uf(_a)[0],i=An().memoizedState;return[typeof e=="boolean"?e:To(e),i]},useSyncExternalStore:Dm,useId:sg,useHostTransitionStatus:_f,useFormState:Xm,useActionState:Xm,useOptimistic:function(e,i){var s=An();return an!==null?zm(s,an,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:lf,useCacheRefresh:rg};fg.useEffectEvent=jm;function Sf(e,i,s,l){i=e.memoizedState,s=s(l,i),s=s==null?i:S({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var yf={enqueueSetState:function(e,i,s){e=e._reactInternals;var l=xi(),f=ja(l);f.payload=i,s!=null&&(f.callback=s),i=Za(e,f,l),i!==null&&(ci(i,e,l),yo(i,e,l))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var l=xi(),f=ja(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Za(e,f,l),i!==null&&(ci(i,e,l),yo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=xi(),l=ja(s);l.tag=2,i!=null&&(l.callback=i),i=Za(e,l,s),i!==null&&(ci(i,e,s),yo(i,e,s))}};function dg(e,i,s,l,f,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!ho(s,l)||!ho(f,d):!0}function hg(e,i,s,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==e&&yf.enqueueReplaceState(i,i.state,null)}function Bs(e,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(e=e.defaultProps){s===i&&(s=S({},s));for(var f in e)s[f]===void 0&&(s[f]=e[f])}return s}function pg(e){xl(e)}function mg(e){console.error(e)}function gg(e){xl(e)}function Vl(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function _g(e,i,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Mf(e,i,s){return s=ja(s),s.tag=3,s.payload={element:null},s.callback=function(){Vl(e,i)},s}function vg(e){return e=ja(e),e.tag=3,e}function xg(e,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;e.payload=function(){return f(d)},e.callback=function(){_g(i,s,l)}}var v=s.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){_g(i,s,l),typeof f!="function"&&(es===null?es=new Set([this]):es.add(this));var w=l.stack;this.componentDidCatch(l.value,{componentStack:w!==null?w:""})})}function oS(e,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&fr(i,s,f,!0),s=mi.current,s!==null){switch(s.tag){case 31:case 13:return Ci===null?tc():s.alternate===null&&yn===0&&(yn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Cl?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),qf(e,l,f)),!1;case 22:return s.flags|=65536,l===Cl?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),qf(e,l,f)),!1}throw Error(a(435,s.tag))}return qf(e,l,f),tc(),!1}if(Pe)return i=mi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Gu&&(e=Error(a(422),{cause:l}),go(Ti(e,s)))):(l!==Gu&&(i=Error(a(423),{cause:l}),go(Ti(i,s))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=Ti(l,s),f=Mf(e.stateNode,l,f),Ku(e,f),yn!==4&&(yn=2)),!1;var d=Error(a(520),{cause:l});if(d=Ti(d,s),Io===null?Io=[d]:Io.push(d),yn!==4&&(yn=2),i===null)return!0;l=Ti(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=f&-f,s.lanes|=e,e=Mf(s.stateNode,l,e),Ku(s,e),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(es===null||!es.has(d))))return s.flags|=65536,f&=-f,s.lanes|=f,f=vg(f),xg(f,e,s,l),Ku(s,f),!1}s=s.return}while(s!==null);return!1}var bf=Error(a(461)),Dn=!1;function kn(e,i,s,l){i.child=e===null?bm(i,null,s,l):Ps(i,e.child,s,l)}function Sg(e,i,s,l,f){s=s.render;var d=i.ref;if("ref"in l){var v={};for(var w in l)w!=="ref"&&(v[w]=l[w])}else v=l;return Ls(i),l=af(e,i,s,v,d,f),w=sf(),e!==null&&!Dn?(rf(e,i,f),va(e,i,f)):(Pe&&w&&Fu(i),i.flags|=1,kn(e,i,l,f),i.child)}function yg(e,i,s,l,f){if(e===null){var d=s.type;return typeof d=="function"&&!Iu(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,Mg(e,i,d,l,f)):(e=bl(s.type,null,l,i,i.mode,f),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Nf(e,f)){var v=d.memoizedProps;if(s=s.compare,s=s!==null?s:ho,s(v,l)&&e.ref===i.ref)return va(e,i,f)}return i.flags|=1,e=da(d,l),e.ref=i.ref,e.return=i,i.child=e}function Mg(e,i,s,l,f){if(e!==null){var d=e.memoizedProps;if(ho(d,l)&&e.ref===i.ref)if(Dn=!1,i.pendingProps=l=d,Nf(e,f))(e.flags&131072)!==0&&(Dn=!0);else return i.lanes=e.lanes,va(e,i,f)}return Ef(e,i,s,l,f)}function bg(e,i,s,l){var f=l.children,d=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,e!==null){for(l=i.child=e.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~d}else l=0,i.child=null;return Eg(e,i,d,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&wl(i,d!==null?d.cachePool:null),d!==null?Am(i,d):Ju(),wm(i);else return l=i.lanes=536870912,Eg(e,i,d!==null?d.baseLanes|s:s,s,l)}else d!==null?(wl(i,d.cachePool),Am(i,d),Ka(),i.memoizedState=null):(e!==null&&wl(i,null),Ju(),Ka());return kn(e,i,f,s),i.child}function Ro(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Eg(e,i,s,l,f){var d=qu();return d=d===null?null:{parent:Rn._currentValue,pool:d},i.memoizedState={baseLanes:s,cachePool:d},e!==null&&wl(i,null),Ju(),wm(i),e!==null&&fr(e,i,l,!0),i.childLanes=f,null}function kl(e,i){return i=Xl({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function Tg(e,i,s){return Ps(i,e.child,null,s),e=kl(i,i.pendingProps),e.flags|=2,gi(i),i.memoizedState=null,e}function lS(e,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Pe){if(l.mode==="hidden")return e=kl(i,l),i.lanes=536870912,Ro(null,e);if(ef(i),(e=hn)?(e=P0(e,Ri),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:ka!==null?{id:qi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},s=lm(e),s.return=i,i.child=s,Hn=i,hn=null)):e=null,e===null)throw Xa(i);return i.lanes=536870912,null}return kl(i,l)}var d=e.memoizedState;if(d!==null){var v=d.dehydrated;if(ef(i),f)if(i.flags&256)i.flags&=-257,i=Tg(e,i,s);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(Dn||fr(e,i,s,!1),f=(s&e.childLanes)!==0,Dn||f){if(l=fn,l!==null&&(v=xe(l,s),v!==0&&v!==d.retryLane))throw d.retryLane=v,Cs(e,v),ci(l,e,v),bf;tc(),i=Tg(e,i,s)}else e=d.treeContext,hn=Di(v.nextSibling),Hn=i,Pe=!0,Wa=null,Ri=!1,e!==null&&fm(i,e),i=kl(i,l),i.flags|=4096;return i}return e=da(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function Wl(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function Ef(e,i,s,l,f){return Ls(i),s=af(e,i,s,l,void 0,f),l=sf(),e!==null&&!Dn?(rf(e,i,f),va(e,i,f)):(Pe&&l&&Fu(i),i.flags|=1,kn(e,i,s,f),i.child)}function Ag(e,i,s,l,f,d){return Ls(i),i.updateQueue=null,s=Cm(i,l,s,f),Rm(e),l=sf(),e!==null&&!Dn?(rf(e,i,d),va(e,i,d)):(Pe&&l&&Fu(i),i.flags|=1,kn(e,i,s,d),i.child)}function wg(e,i,s,l,f){if(Ls(i),i.stateNode===null){var d=or,v=s.contextType;typeof v=="object"&&v!==null&&(d=Vn(v)),d=new s(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=yf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Zu(i),v=s.contextType,d.context=typeof v=="object"&&v!==null?Vn(v):or,d.state=i.memoizedState,v=s.getDerivedStateFromProps,typeof v=="function"&&(Sf(i,s,v,l),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&yf.enqueueReplaceState(d,d.state,null),bo(i,l,d,f),Mo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var w=i.memoizedProps,G=Bs(s,w);d.props=G;var nt=d.context,_t=s.contextType;v=or,typeof _t=="object"&&_t!==null&&(v=Vn(_t));var yt=s.getDerivedStateFromProps;_t=typeof yt=="function"||typeof d.getSnapshotBeforeUpdate=="function",w=i.pendingProps!==w,_t||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(w||nt!==v)&&hg(i,d,l,v),qa=!1;var ot=i.memoizedState;d.state=ot,bo(i,l,d,f),Mo(),nt=i.memoizedState,w||ot!==nt||qa?(typeof yt=="function"&&(Sf(i,s,yt,l),nt=i.memoizedState),(G=qa||dg(i,s,G,l,ot,nt,v))?(_t||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=nt),d.props=l,d.state=nt,d.context=v,l=G):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,$u(e,i),v=i.memoizedProps,_t=Bs(s,v),d.props=_t,yt=i.pendingProps,ot=d.context,nt=s.contextType,G=or,typeof nt=="object"&&nt!==null&&(G=Vn(nt)),w=s.getDerivedStateFromProps,(nt=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==yt||ot!==G)&&hg(i,d,l,G),qa=!1,ot=i.memoizedState,d.state=ot,bo(i,l,d,f),Mo();var ut=i.memoizedState;v!==yt||ot!==ut||qa||e!==null&&e.dependencies!==null&&Tl(e.dependencies)?(typeof w=="function"&&(Sf(i,s,w,l),ut=i.memoizedState),(_t=qa||dg(i,s,_t,l,ot,ut,G)||e!==null&&e.dependencies!==null&&Tl(e.dependencies))?(nt||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,ut,G),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,ut,G)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&ot===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ot===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ut),d.props=l,d.state=ut,d.context=G,l=_t):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&ot===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ot===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,Wl(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=Ps(i,e.child,null,f),i.child=Ps(i,null,s,f)):kn(e,i,s,f),i.memoizedState=d.state,e=i.child):e=va(e,i,f),e}function Rg(e,i,s,l){return Ns(),i.flags|=256,kn(e,i,s,l),i.child}var Tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Af(e){return{baseLanes:e,cachePool:_m()}}function wf(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=vi),e}function Cg(e,i,s){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(Tn.current&2)!==0),v&&(f=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,e===null){if(Pe){if(f?$a(i):Ka(),(e=hn)?(e=P0(e,Ri),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:ka!==null?{id:qi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},s=lm(e),s.return=i,i.child=s,Hn=i,hn=null)):e=null,e===null)throw Xa(i);return cd(e)?i.lanes=32:i.lanes=536870912,null}var w=l.children;return l=l.fallback,f?(Ka(),f=i.mode,w=Xl({mode:"hidden",children:w},f),l=Ds(l,f,s,null),w.return=i,l.return=i,w.sibling=l,i.child=w,l=i.child,l.memoizedState=Af(s),l.childLanes=wf(e,v,s),i.memoizedState=Tf,Ro(null,l)):($a(i),Rf(i,w))}var G=e.memoizedState;if(G!==null&&(w=G.dehydrated,w!==null)){if(d)i.flags&256?($a(i),i.flags&=-257,i=Cf(e,i,s)):i.memoizedState!==null?(Ka(),i.child=e.child,i.flags|=128,i=null):(Ka(),w=l.fallback,f=i.mode,l=Xl({mode:"visible",children:l.children},f),w=Ds(w,f,s,null),w.flags|=2,l.return=i,w.return=i,l.sibling=w,i.child=l,Ps(i,e.child,null,s),l=i.child,l.memoizedState=Af(s),l.childLanes=wf(e,v,s),i.memoizedState=Tf,i=Ro(null,l));else if($a(i),cd(w)){if(v=w.nextSibling&&w.nextSibling.dataset,v)var nt=v.dgst;v=nt,l=Error(a(419)),l.stack="",l.digest=v,go({value:l,source:null,stack:null}),i=Cf(e,i,s)}else if(Dn||fr(e,i,s,!1),v=(s&e.childLanes)!==0,Dn||v){if(v=fn,v!==null&&(l=xe(v,s),l!==0&&l!==G.retryLane))throw G.retryLane=l,Cs(e,l),ci(v,e,l),bf;ld(w)||tc(),i=Cf(e,i,s)}else ld(w)?(i.flags|=192,i.child=e.child,i=null):(e=G.treeContext,hn=Di(w.nextSibling),Hn=i,Pe=!0,Wa=null,Ri=!1,e!==null&&fm(i,e),i=Rf(i,l.children),i.flags|=4096);return i}return f?(Ka(),w=l.fallback,f=i.mode,G=e.child,nt=G.sibling,l=da(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,nt!==null?w=da(nt,w):(w=Ds(w,f,s,null),w.flags|=2),w.return=i,l.return=i,l.sibling=w,i.child=l,Ro(null,l),l=i.child,w=e.child.memoizedState,w===null?w=Af(s):(f=w.cachePool,f!==null?(G=Rn._currentValue,f=f.parent!==G?{parent:G,pool:G}:f):f=_m(),w={baseLanes:w.baseLanes|s,cachePool:f}),l.memoizedState=w,l.childLanes=wf(e,v,s),i.memoizedState=Tf,Ro(e.child,l)):($a(i),s=e.child,e=s.sibling,s=da(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,e!==null&&(v=i.deletions,v===null?(i.deletions=[e],i.flags|=16):v.push(e)),i.child=s,i.memoizedState=null,s)}function Rf(e,i){return i=Xl({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Xl(e,i){return e=pi(22,e,null,i),e.lanes=0,e}function Cf(e,i,s){return Ps(i,e.child,null,s),e=Rf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Dg(e,i,s){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),ku(e.return,i,s)}function Df(e,i,s,l,f,d){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:d}:(v.isBackwards=i,v.rendering=null,v.renderingStartTime=0,v.last=l,v.tail=s,v.tailMode=f,v.treeForkCount=d)}function Ng(e,i,s){var l=i.pendingProps,f=l.revealOrder,d=l.tail;l=l.children;var v=Tn.current,w=(v&2)!==0;if(w?(v=v&1|2,i.flags|=128):v&=1,Mt(Tn,v),kn(e,i,l,s),l=Pe?mo:0,!w&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dg(e,s,i);else if(e.tag===19)Dg(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)e=s.alternate,e!==null&&Ll(e)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),Df(i,!1,f,s,d,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(e=f.alternate,e!==null&&Ll(e)===null){i.child=f;break}e=f.sibling,f.sibling=s,s=f,f=e}Df(i,!0,s,null,d,l);break;case"together":Df(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function va(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),ts|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(fr(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=da(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=da(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function Nf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Tl(e)))}function cS(e,i,s){switch(i.tag){case 3:wt(i,i.stateNode.containerInfo),Ya(i,Rn,e.memoizedState.cache),Ns();break;case 27:case 5:Gt(i);break;case 4:wt(i,i.stateNode.containerInfo);break;case 10:Ya(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,ef(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?($a(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Cg(e,i,s):($a(i),e=va(e,i,s),e!==null?e.sibling:null);$a(i);break;case 19:var f=(e.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(fr(e,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return Ng(e,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Mt(Tn,Tn.current),l)break;return null;case 22:return i.lanes=0,bg(e,i,s,i.pendingProps);case 24:Ya(i,Rn,e.memoizedState.cache)}return va(e,i,s)}function Ug(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)Dn=!0;else{if(!Nf(e,s)&&(i.flags&128)===0)return Dn=!1,cS(e,i,s);Dn=(e.flags&131072)!==0}else Dn=!1,Pe&&(i.flags&1048576)!==0&&um(i,mo,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=Is(i.elementType),i.type=e,typeof e=="function")Iu(e)?(l=Bs(e,l),i.tag=1,i=wg(null,i,e,l,s)):(i.tag=0,i=Ef(null,i,e,l,s));else{if(e!=null){var f=e.$$typeof;if(f===U){i.tag=11,i=Sg(null,i,e,l,s);break t}else if(f===P){i.tag=14,i=yg(null,i,e,l,s);break t}}throw i=mt(e)||e,Error(a(306,i,""))}}return i;case 0:return Ef(e,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Bs(l,i.pendingProps),wg(e,i,l,f,s);case 3:t:{if(wt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,$u(e,i),bo(i,l,null,s);var v=i.memoizedState;if(l=v.cache,Ya(i,Rn,l),l!==d.cache&&Wu(i,[Rn],s,!0),Mo(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Rg(e,i,l,s);break t}else if(l!==f){f=Ti(Error(a(424)),i),go(f),i=Rg(e,i,l,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(hn=Di(e.firstChild),Hn=i,Pe=!0,Wa=null,Ri=!0,s=bm(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Ns(),l===f){i=va(e,i,s);break t}kn(e,i,l,s)}i=i.child}return i;case 26:return Wl(e,i),e===null?(s=k0(i.type,null,i.pendingProps,null))?i.memoizedState=s:Pe||(s=i.type,e=i.pendingProps,l=oc(lt.current).createElement(s),l[Wt]=i,l[me]=e,Wn(l,s,e),wn(l),i.stateNode=l):i.memoizedState=k0(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Gt(i),e===null&&Pe&&(l=i.stateNode=G0(i.type,i.pendingProps,lt.current),Hn=i,Ri=!0,f=hn,ss(i.type)?(ud=f,hn=Di(l.firstChild)):hn=f),kn(e,i,i.pendingProps.children,s),Wl(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Pe&&((f=l=hn)&&(l=BS(l,i.type,i.pendingProps,Ri),l!==null?(i.stateNode=l,Hn=i,hn=Di(l.firstChild),Ri=!1,f=!0):f=!1),f||Xa(i)),Gt(i),f=i.type,d=i.pendingProps,v=e!==null?e.memoizedProps:null,l=d.children,sd(f,d)?l=null:v!==null&&sd(f,v)&&(i.flags|=32),i.memoizedState!==null&&(f=af(e,i,tS,null,null,s),ko._currentValue=f),Wl(e,i),kn(e,i,l,s),i.child;case 6:return e===null&&Pe&&((e=s=hn)&&(s=GS(s,i.pendingProps,Ri),s!==null?(i.stateNode=s,Hn=i,hn=null,e=!0):e=!1),e||Xa(i)),null;case 13:return Cg(e,i,s);case 4:return wt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Ps(i,null,l,s):kn(e,i,l,s),i.child;case 11:return Sg(e,i,i.type,i.pendingProps,s);case 7:return kn(e,i,i.pendingProps,s),i.child;case 8:return kn(e,i,i.pendingProps.children,s),i.child;case 12:return kn(e,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Ya(i,i.type,l.value),kn(e,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Ls(i),f=Vn(f),l=l(f),i.flags|=1,kn(e,i,l,s),i.child;case 14:return yg(e,i,i.type,i.pendingProps,s);case 15:return Mg(e,i,i.type,i.pendingProps,s);case 19:return Ng(e,i,s);case 31:return lS(e,i,s);case 22:return bg(e,i,s,i.pendingProps);case 24:return Ls(i),l=Vn(Rn),e===null?(f=qu(),f===null&&(f=fn,d=Xu(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=s),f=d),i.memoizedState={parent:l,cache:f},Zu(i),Ya(i,Rn,f)):((e.lanes&s)!==0&&($u(e,i),bo(i,null,null,s),Mo()),f=e.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Ya(i,Rn,l)):(l=d.cache,Ya(i,Rn,l),l!==f.cache&&Wu(i,[Rn],s,!0))),kn(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function xa(e){e.flags|=4}function Uf(e,i,s,l,f){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(s0())e.flags|=8192;else throw zs=Cl,ju}else e.flags&=-16777217}function Lg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!j0(i))if(s0())e.flags|=8192;else throw zs=Cl,ju}function Yl(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?tt():536870912,e.lanes|=i,br|=i)}function Co(e,i){if(!Pe)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function pn(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(i)for(var f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=s,i}function uS(e,i,s){var l=i.pendingProps;switch(Bu(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(i),null;case 1:return pn(i),null;case 3:return s=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ma(Rn),bt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ur(i)?xa(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Hu())),pn(i),null;case 26:var f=i.type,d=i.memoizedState;return e===null?(xa(i),d!==null?(pn(i),Lg(i,d)):(pn(i),Uf(i,f,null,l,s))):d?d!==e.memoizedState?(xa(i),pn(i),Lg(i,d)):(pn(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&xa(i),pn(i),Uf(i,f,e,l,s)),null;case 27:if(Yt(i),s=lt.current,f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&xa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return pn(i),null}e=Rt.current,ur(i)?dm(i):(e=G0(f,l,s),i.stateNode=e,xa(i))}return pn(i),null;case 5:if(Yt(i),f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&xa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return pn(i),null}if(d=Rt.current,ur(i))dm(i);else{var v=oc(lt.current);switch(d){case 1:d=v.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=v.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=v.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?v.createElement("select",{is:l.is}):v.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?v.createElement(f,{is:l.is}):v.createElement(f)}}d[Wt]=i,d[me]=l;t:for(v=i.child;v!==null;){if(v.tag===5||v.tag===6)d.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===i)break t;for(;v.sibling===null;){if(v.return===null||v.return===i)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}i.stateNode=d;t:switch(Wn(d,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&xa(i)}}return pn(i),Uf(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,s),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&xa(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=lt.current,ur(i)){if(e=i.stateNode,s=i.memoizedProps,l=null,f=Hn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[Wt]=i,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||C0(e.nodeValue,s)),e||Xa(i,!0)}else e=oc(e).createTextNode(l),e[Wt]=i,i.stateNode=e}return pn(i),null;case 31:if(s=i.memoizedState,e===null||e.memoizedState!==null){if(l=ur(i),s!==null){if(e===null){if(!l)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[Wt]=i}else Ns(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;pn(i),e=!1}else s=Hu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return i.flags&256?(gi(i),i):(gi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return pn(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=ur(i),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[Wt]=i}else Ns(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;pn(i),f=!1}else f=Hu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(gi(i),i):(gi(i),null)}return gi(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,e=e!==null&&e.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)),s!==e&&s&&(i.child.flags|=8192),Yl(i,i.updateQueue),pn(i),null);case 4:return bt(),e===null&&td(i.stateNode.containerInfo),pn(i),null;case 10:return ma(i.type),pn(i),null;case 19:if(Q(Tn),l=i.memoizedState,l===null)return pn(i),null;if(f=(i.flags&128)!==0,d=l.rendering,d===null)if(f)Co(l,!1);else{if(yn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Ll(e),d!==null){for(i.flags|=128,Co(l,!1),e=d.updateQueue,i.updateQueue=e,Yl(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)om(s,e),s=s.sibling;return Mt(Tn,Tn.current&1|2),Pe&&ha(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&Dt()>Kl&&(i.flags|=128,f=!0,Co(l,!1),i.lanes=4194304)}else{if(!f)if(e=Ll(d),e!==null){if(i.flags|=128,f=!0,e=e.updateQueue,i.updateQueue=e,Yl(i,e),Co(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Pe)return pn(i),null}else 2*Dt()-l.renderingStartTime>Kl&&s!==536870912&&(i.flags|=128,f=!0,Co(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(e=l.last,e!==null?e.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Dt(),e.sibling=null,s=Tn.current,Mt(Tn,f?s&1|2:s&1),Pe&&ha(i,l.treeForkCount),e):(pn(i),null);case 22:case 23:return gi(i),tf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(pn(i),i.subtreeFlags&6&&(i.flags|=8192)):pn(i),s=i.updateQueue,s!==null&&Yl(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),e!==null&&Q(Os),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ma(Rn),pn(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function fS(e,i){switch(Bu(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ma(Rn),bt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Yt(i),null;case 31:if(i.memoizedState!==null){if(gi(i),i.alternate===null)throw Error(a(340));Ns()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(gi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Ns()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return Q(Tn),null;case 4:return bt(),null;case 10:return ma(i.type),null;case 22:case 23:return gi(i),tf(),e!==null&&Q(Os),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ma(Rn),null;case 25:return null;default:return null}}function Og(e,i){switch(Bu(i),i.tag){case 3:ma(Rn),bt();break;case 26:case 27:case 5:Yt(i);break;case 4:bt();break;case 31:i.memoizedState!==null&&gi(i);break;case 13:gi(i);break;case 19:Q(Tn);break;case 10:ma(i.type);break;case 22:case 23:gi(i),tf(),e!==null&&Q(Os);break;case 24:ma(Rn)}}function Do(e,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&e)===e){l=void 0;var d=s.create,v=s.inst;l=d(),v.destroy=l}s=s.next}while(s!==f)}}catch(w){en(i,i.return,w)}}function Qa(e,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&e)===e){var v=l.inst,w=v.destroy;if(w!==void 0){v.destroy=void 0,f=i;var G=s,nt=w;try{nt()}catch(_t){en(f,G,_t)}}}l=l.next}while(l!==d)}}catch(_t){en(i,i.return,_t)}}function Ig(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{Tm(i,s)}catch(l){en(e,e.return,l)}}}function zg(e,i,s){s.props=Bs(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){en(e,i,l)}}function No(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(f){en(e,i,f)}}function Zi(e,i){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){en(e,i,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){en(e,i,f)}else s.current=null}function Pg(e){var i=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){en(e,e.return,f)}}function Lf(e,i,s){try{var l=e.stateNode;LS(l,e.type,s,i),l[me]=i}catch(f){en(e,e.return,f)}}function Fg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ss(e.type)||e.tag===4}function Of(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Fg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ss(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function If(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ua));else if(l!==4&&(l===27&&ss(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(If(e,i,s),e=e.sibling;e!==null;)If(e,i,s),e=e.sibling}function ql(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(l!==4&&(l===27&&ss(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(ql(e,i,s),e=e.sibling;e!==null;)ql(e,i,s),e=e.sibling}function Bg(e){var i=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Wn(i,l,s),i[Wt]=e,i[me]=s}catch(d){en(e,e.return,d)}}var Sa=!1,Nn=!1,zf=!1,Gg=typeof WeakSet=="function"?WeakSet:Set,Fn=null;function dS(e,i){if(e=e.containerInfo,id=pc,e=Qp(e),Ru(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break t}var v=0,w=-1,G=-1,nt=0,_t=0,yt=e,ot=null;e:for(;;){for(var ut;yt!==s||f!==0&&yt.nodeType!==3||(w=v+f),yt!==d||l!==0&&yt.nodeType!==3||(G=v+l),yt.nodeType===3&&(v+=yt.nodeValue.length),(ut=yt.firstChild)!==null;)ot=yt,yt=ut;for(;;){if(yt===e)break e;if(ot===s&&++nt===f&&(w=v),ot===d&&++_t===l&&(G=v),(ut=yt.nextSibling)!==null)break;yt=ot,ot=yt.parentNode}yt=ut}s=w===-1||G===-1?null:{start:w,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(ad={focusedElem:e,selectionRange:s},pc=!1,Fn=i;Fn!==null;)if(i=Fn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Fn=e;else for(;Fn!==null;){switch(i=Fn,d=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)f=e[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,s=i,f=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var Qt=Bs(s.type,f);e=l.getSnapshotBeforeUpdate(Qt,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(ue){en(s,s.return,ue)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)od(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":od(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,Fn=e;break}Fn=i.return}}function Hg(e,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ma(e,s),l&4&&Do(5,s);break;case 1:if(Ma(e,s),l&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(v){en(s,s.return,v)}else{var f=Bs(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(f,i,e.__reactInternalSnapshotBeforeUpdate)}catch(v){en(s,s.return,v)}}l&64&&Ig(s),l&512&&No(s,s.return);break;case 3:if(Ma(e,s),l&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Tm(e,i)}catch(v){en(s,s.return,v)}}break;case 27:i===null&&l&4&&Bg(s);case 26:case 5:Ma(e,s),i===null&&l&4&&Pg(s),l&512&&No(s,s.return);break;case 12:Ma(e,s);break;case 31:Ma(e,s),l&4&&Wg(e,s);break;case 13:Ma(e,s),l&4&&Xg(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=yS.bind(null,s),HS(e,s))));break;case 22:if(l=s.memoizedState!==null||Sa,!l){i=i!==null&&i.memoizedState!==null||Nn,f=Sa;var d=Nn;Sa=l,(Nn=i)&&!d?ba(e,s,(s.subtreeFlags&8772)!==0):Ma(e,s),Sa=f,Nn=d}break;case 30:break;default:Ma(e,s)}}function Vg(e){var i=e.alternate;i!==null&&(e.alternate=null,Vg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&ii(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var _n=null,si=!1;function ya(e,i,s){for(s=s.child;s!==null;)kg(e,i,s),s=s.sibling}function kg(e,i,s){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(ft,s)}catch{}switch(s.tag){case 26:Nn||Zi(s,i),ya(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Nn||Zi(s,i);var l=_n,f=si;ss(s.type)&&(_n=s.stateNode,si=!1),ya(e,i,s),Go(s.stateNode),_n=l,si=f;break;case 5:Nn||Zi(s,i);case 6:if(l=_n,f=si,_n=null,ya(e,i,s),_n=l,si=f,_n!==null)if(si)try{(_n.nodeType===9?_n.body:_n.nodeName==="HTML"?_n.ownerDocument.body:_n).removeChild(s.stateNode)}catch(d){en(s,i,d)}else try{_n.removeChild(s.stateNode)}catch(d){en(s,i,d)}break;case 18:_n!==null&&(si?(e=_n,I0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Nr(e)):I0(_n,s.stateNode));break;case 4:l=_n,f=si,_n=s.stateNode.containerInfo,si=!0,ya(e,i,s),_n=l,si=f;break;case 0:case 11:case 14:case 15:Qa(2,s,i),Nn||Qa(4,s,i),ya(e,i,s);break;case 1:Nn||(Zi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&zg(s,i,l)),ya(e,i,s);break;case 21:ya(e,i,s);break;case 22:Nn=(l=Nn)||s.memoizedState!==null,ya(e,i,s),Nn=l;break;default:ya(e,i,s)}}function Wg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Nr(e)}catch(s){en(i,i.return,s)}}}function Xg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Nr(e)}catch(s){en(i,i.return,s)}}function hS(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Gg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Gg),i;default:throw Error(a(435,e.tag))}}function jl(e,i){var s=hS(e);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=MS.bind(null,e,l);l.then(f,f)}})}function ri(e,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],d=e,v=i,w=v;t:for(;w!==null;){switch(w.tag){case 27:if(ss(w.type)){_n=w.stateNode,si=!1;break t}break;case 5:_n=w.stateNode,si=!1;break t;case 3:case 4:_n=w.stateNode.containerInfo,si=!0;break t}w=w.return}if(_n===null)throw Error(a(160));kg(d,v,f),_n=null,si=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Yg(i,e),i=i.sibling}var Bi=null;function Yg(e,i){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ri(i,e),oi(e),l&4&&(Qa(3,e,e.return),Do(3,e),Qa(5,e,e.return));break;case 1:ri(i,e),oi(e),l&512&&(Nn||s===null||Zi(s,s.return)),l&64&&Sa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Bi;if(ri(i,e),oi(e),l&512&&(Nn||s===null||Zi(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[En]||d[Wt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),Wn(d,l,s),d[Wt]=e,wn(d),l=d;break t;case"link":var v=Y0("link","href",f).get(l+(s.href||""));if(v){for(var w=0;w<v.length;w++)if(d=v[w],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){v.splice(w,1);break e}}d=f.createElement(l),Wn(d,l,s),f.head.appendChild(d);break;case"meta":if(v=Y0("meta","content",f).get(l+(s.content||""))){for(w=0;w<v.length;w++)if(d=v[w],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){v.splice(w,1);break e}}d=f.createElement(l),Wn(d,l,s),f.head.appendChild(d);break;default:throw Error(a(468,l))}d[Wt]=e,wn(d),l=d}e.stateNode=l}else q0(f,e.type,e.stateNode);else e.stateNode=X0(f,l,e.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?q0(f,e.type,e.stateNode):X0(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Lf(e,e.memoizedProps,s.memoizedProps)}break;case 27:ri(i,e),oi(e),l&512&&(Nn||s===null||Zi(s,s.return)),s!==null&&l&4&&Lf(e,e.memoizedProps,s.memoizedProps);break;case 5:if(ri(i,e),oi(e),l&512&&(Nn||s===null||Zi(s,s.return)),e.flags&32){f=e.stateNode;try{di(f,"")}catch(Qt){en(e,e.return,Qt)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,Lf(e,f,s!==null?s.memoizedProps:f)),l&1024&&(zf=!0);break;case 6:if(ri(i,e),oi(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(Qt){en(e,e.return,Qt)}}break;case 3:if(uc=null,f=Bi,Bi=lc(i.containerInfo),ri(i,e),Bi=f,oi(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Nr(i.containerInfo)}catch(Qt){en(e,e.return,Qt)}zf&&(zf=!1,qg(e));break;case 4:l=Bi,Bi=lc(e.stateNode.containerInfo),ri(i,e),oi(e),Bi=l;break;case 12:ri(i,e),oi(e);break;case 31:ri(i,e),oi(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,jl(e,l)));break;case 13:ri(i,e),oi(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&($l=Dt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,jl(e,l)));break;case 22:f=e.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,nt=Sa,_t=Nn;if(Sa=nt||f,Nn=_t||G,ri(i,e),Nn=_t,Sa=nt,oi(e),l&8192)t:for(i=e.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||G||Sa||Nn||Gs(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){G=s=i;try{if(d=G.stateNode,f)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{w=G.stateNode;var yt=G.memoizedProps.style,ot=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;w.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Qt){en(G,G.return,Qt)}}}else if(i.tag===6){if(s===null){G=i;try{G.stateNode.nodeValue=f?"":G.memoizedProps}catch(Qt){en(G,G.return,Qt)}}}else if(i.tag===18){if(s===null){G=i;try{var ut=G.stateNode;f?z0(ut,!0):z0(G.stateNode,!1)}catch(Qt){en(G,G.return,Qt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,jl(e,s))));break;case 19:ri(i,e),oi(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,jl(e,l)));break;case 30:break;case 21:break;default:ri(i,e),oi(e)}}function oi(e){var i=e.flags;if(i&2){try{for(var s,l=e.return;l!==null;){if(Fg(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,d=Of(e);ql(e,d,f);break;case 5:var v=s.stateNode;s.flags&32&&(di(v,""),s.flags&=-33);var w=Of(e);ql(e,w,v);break;case 3:case 4:var G=s.stateNode.containerInfo,nt=Of(e);If(e,nt,G);break;default:throw Error(a(161))}}catch(_t){en(e,e.return,_t)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function qg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;qg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Ma(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Hg(e,i.alternate,i),i=i.sibling}function Gs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Qa(4,i,i.return),Gs(i);break;case 1:Zi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&zg(i,i.return,s),Gs(i);break;case 27:Go(i.stateNode);case 26:case 5:Zi(i,i.return),Gs(i);break;case 22:i.memoizedState===null&&Gs(i);break;case 30:Gs(i);break;default:Gs(i)}e=e.sibling}}function ba(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=e,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:ba(f,d,s),Do(4,d);break;case 1:if(ba(f,d,s),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(nt){en(l,l.return,nt)}if(l=d,f=l.updateQueue,f!==null){var w=l.stateNode;try{var G=f.shared.hiddenCallbacks;if(G!==null)for(f.shared.hiddenCallbacks=null,f=0;f<G.length;f++)Em(G[f],w)}catch(nt){en(l,l.return,nt)}}s&&v&64&&Ig(d),No(d,d.return);break;case 27:Bg(d);case 26:case 5:ba(f,d,s),s&&l===null&&v&4&&Pg(d),No(d,d.return);break;case 12:ba(f,d,s);break;case 31:ba(f,d,s),s&&v&4&&Wg(f,d);break;case 13:ba(f,d,s),s&&v&4&&Xg(f,d);break;case 22:d.memoizedState===null&&ba(f,d,s),No(d,d.return);break;case 30:break;default:ba(f,d,s)}i=i.sibling}}function Pf(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&_o(s))}function Ff(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&_o(e))}function Gi(e,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)jg(e,i,s,l),i=i.sibling}function jg(e,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Gi(e,i,s,l),f&2048&&Do(9,i);break;case 1:Gi(e,i,s,l);break;case 3:Gi(e,i,s,l),f&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&_o(e)));break;case 12:if(f&2048){Gi(e,i,s,l),e=i.stateNode;try{var d=i.memoizedProps,v=d.id,w=d.onPostCommit;typeof w=="function"&&w(v,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){en(i,i.return,G)}}else Gi(e,i,s,l);break;case 31:Gi(e,i,s,l);break;case 13:Gi(e,i,s,l);break;case 23:break;case 22:d=i.stateNode,v=i.alternate,i.memoizedState!==null?d._visibility&2?Gi(e,i,s,l):Uo(e,i):d._visibility&2?Gi(e,i,s,l):(d._visibility|=2,Sr(e,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&Pf(v,i);break;case 24:Gi(e,i,s,l),f&2048&&Ff(i.alternate,i);break;default:Gi(e,i,s,l)}}function Sr(e,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=e,v=i,w=s,G=l,nt=v.flags;switch(v.tag){case 0:case 11:case 15:Sr(d,v,w,G,f),Do(8,v);break;case 23:break;case 22:var _t=v.stateNode;v.memoizedState!==null?_t._visibility&2?Sr(d,v,w,G,f):Uo(d,v):(_t._visibility|=2,Sr(d,v,w,G,f)),f&&nt&2048&&Pf(v.alternate,v);break;case 24:Sr(d,v,w,G,f),f&&nt&2048&&Ff(v.alternate,v);break;default:Sr(d,v,w,G,f)}i=i.sibling}}function Uo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,l=i,f=l.flags;switch(l.tag){case 22:Uo(s,l),f&2048&&Pf(l.alternate,l);break;case 24:Uo(s,l),f&2048&&Ff(l.alternate,l);break;default:Uo(s,l)}i=i.sibling}}var Lo=8192;function yr(e,i,s){if(e.subtreeFlags&Lo)for(e=e.child;e!==null;)Zg(e,i,s),e=e.sibling}function Zg(e,i,s){switch(e.tag){case 26:yr(e,i,s),e.flags&Lo&&e.memoizedState!==null&&JS(s,Bi,e.memoizedState,e.memoizedProps);break;case 5:yr(e,i,s);break;case 3:case 4:var l=Bi;Bi=lc(e.stateNode.containerInfo),yr(e,i,s),Bi=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Lo,Lo=16777216,yr(e,i,s),Lo=l):yr(e,i,s));break;default:yr(e,i,s)}}function $g(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Oo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Fn=l,Qg(l,e)}$g(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Kg(e),e=e.sibling}function Kg(e){switch(e.tag){case 0:case 11:case 15:Oo(e),e.flags&2048&&Qa(9,e,e.return);break;case 3:Oo(e);break;case 12:Oo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Zl(e)):Oo(e);break;default:Oo(e)}}function Zl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Fn=l,Qg(l,e)}$g(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Qa(8,i,i.return),Zl(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Zl(i));break;default:Zl(i)}e=e.sibling}}function Qg(e,i){for(;Fn!==null;){var s=Fn;switch(s.tag){case 0:case 11:case 15:Qa(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:_o(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Fn=l;else t:for(s=e;Fn!==null;){l=Fn;var f=l.sibling,d=l.return;if(Vg(l),l===s){Fn=null;break t}if(f!==null){f.return=d,Fn=f;break t}Fn=d}}}var pS={getCacheForType:function(e){var i=Vn(Rn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s},cacheSignal:function(){return Vn(Rn).controller.signal}},mS=typeof WeakMap=="function"?WeakMap:Map,Ye=0,fn=null,Ue=null,Ie=0,tn=0,_i=null,Ja=!1,Mr=!1,Bf=!1,Ea=0,yn=0,ts=0,Hs=0,Gf=0,vi=0,br=0,Io=null,li=null,Hf=!1,$l=0,Jg=0,Kl=1/0,Ql=null,es=null,In=0,ns=null,Er=null,Ta=0,Vf=0,kf=null,t0=null,zo=0,Wf=null;function xi(){return(Ye&2)!==0&&Ie!==0?Ie&-Ie:O.T!==null?$f():je()}function e0(){if(vi===0)if((Ie&536870912)===0||Pe){var e=Te;Te<<=1,(Te&3932160)===0&&(Te=262144),vi=e}else vi=536870912;return e=mi.current,e!==null&&(e.flags|=32),vi}function ci(e,i,s){(e===fn&&(tn===2||tn===9)||e.cancelPendingCommit!==null)&&(Tr(e,0),is(e,Ie,vi,!1)),ht(e,s),((Ye&2)===0||e!==fn)&&(e===fn&&((Ye&2)===0&&(Hs|=s),yn===4&&is(e,Ie,vi,!1)),$i(e))}function n0(e,i,s){if((Ye&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&e.expiredLanes)===0||Vt(e,i),f=l?vS(e,i):Yf(e,i,!0),d=l;do{if(f===0){Mr&&!l&&is(e,i,0,!1);break}else{if(s=e.current.alternate,d&&!gS(s)){f=Yf(e,i,!1),d=!1;continue}if(f===2){if(d=i,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;t:{var w=e;f=Io;var G=w.current.memoizedState.isDehydrated;if(G&&(Tr(w,v).flags|=256),v=Yf(w,v,!1),v!==2){if(Bf&&!G){w.errorRecoveryDisabledLanes|=d,Hs|=d,f=4;break t}d=li,li=f,d!==null&&(li===null?li=d:li.push.apply(li,d))}f=v}if(d=!1,f!==2)continue}}if(f===1){Tr(e,0),is(e,i,0,!0);break}t:{switch(l=e,d=f,d){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:is(l,i,vi,!Ja);break t;case 2:li=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=$l+300-Dt(),10<f)){if(is(l,i,vi,!Ja),gt(l,0,!0)!==0)break t;Ta=i,l.timeoutHandle=L0(i0.bind(null,l,s,li,Ql,Hf,i,vi,Hs,br,Ja,d,"Throttled",-0,0),f);break t}i0(l,s,li,Ql,Hf,i,vi,Hs,br,Ja,d,null,-0,0)}}break}while(!0);$i(e)}function i0(e,i,s,l,f,d,v,w,G,nt,_t,yt,ot,ut){if(e.timeoutHandle=-1,yt=i.subtreeFlags,yt&8192||(yt&16785408)===16785408){yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ua},Zg(i,d,yt);var Qt=(d&62914560)===d?$l-Dt():(d&4194048)===d?Jg-Dt():0;if(Qt=ty(yt,Qt),Qt!==null){Ta=d,e.cancelPendingCommit=Qt(f0.bind(null,e,i,d,s,l,f,v,w,G,_t,yt,null,ot,ut)),is(e,d,v,!nt);return}}f0(e,i,d,s,l,f,v,w,G)}function gS(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],d=f.getSnapshot;f=f.value;try{if(!hi(d(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function is(e,i,s,l){i&=~Gf,i&=~Hs,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var f=i;0<f;){var d=31-Bt(f),v=1<<d;l[d]=-1,f&=~v}s!==0&&ae(e,s,i)}function Jl(){return(Ye&6)===0?(Po(0),!1):!0}function Xf(){if(Ue!==null){if(tn===0)var e=Ue.return;else e=Ue,pa=Us=null,of(e),mr=null,xo=0,e=Ue;for(;e!==null;)Og(e.alternate,e),e=e.return;Ue=null}}function Tr(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,zS(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Ta=0,Xf(),fn=e,Ue=s=da(e.current,null),Ie=i,tn=0,_i=null,Ja=!1,Mr=Vt(e,i),Bf=!1,br=vi=Gf=Hs=ts=yn=0,li=Io=null,Hf=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var f=31-Bt(l),d=1<<f;i|=e[f],l&=~d}return Ea=i,Sl(),s}function a0(e,i){ye=null,O.H=wo,i===pr||i===Rl?(i=Sm(),tn=3):i===ju?(i=Sm(),tn=4):tn=i===bf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,_i=i,Ue===null&&(yn=1,Vl(e,Ti(i,e.current)))}function s0(){var e=mi.current;return e===null?!0:(Ie&4194048)===Ie?Ci===null:(Ie&62914560)===Ie||(Ie&536870912)!==0?e===Ci:!1}function r0(){var e=O.H;return O.H=wo,e===null?wo:e}function o0(){var e=O.A;return O.A=pS,e}function tc(){yn=4,Ja||(Ie&4194048)!==Ie&&mi.current!==null||(Mr=!0),(ts&134217727)===0&&(Hs&134217727)===0||fn===null||is(fn,Ie,vi,!1)}function Yf(e,i,s){var l=Ye;Ye|=2;var f=r0(),d=o0();(fn!==e||Ie!==i)&&(Ql=null,Tr(e,i)),i=!1;var v=yn;t:do try{if(tn!==0&&Ue!==null){var w=Ue,G=_i;switch(tn){case 8:Xf(),v=6;break t;case 3:case 2:case 9:case 6:mi.current===null&&(i=!0);var nt=tn;if(tn=0,_i=null,Ar(e,w,G,nt),s&&Mr){v=0;break t}break;default:nt=tn,tn=0,_i=null,Ar(e,w,G,nt)}}_S(),v=yn;break}catch(_t){a0(e,_t)}while(!0);return i&&e.shellSuspendCounter++,pa=Us=null,Ye=l,O.H=f,O.A=d,Ue===null&&(fn=null,Ie=0,Sl()),v}function _S(){for(;Ue!==null;)l0(Ue)}function vS(e,i){var s=Ye;Ye|=2;var l=r0(),f=o0();fn!==e||Ie!==i?(Ql=null,Kl=Dt()+500,Tr(e,i)):Mr=Vt(e,i);t:do try{if(tn!==0&&Ue!==null){i=Ue;var d=_i;e:switch(tn){case 1:tn=0,_i=null,Ar(e,i,d,1);break;case 2:case 9:if(vm(d)){tn=0,_i=null,c0(i);break}i=function(){tn!==2&&tn!==9||fn!==e||(tn=7),$i(e)},d.then(i,i);break t;case 3:tn=7;break t;case 4:tn=5;break t;case 7:vm(d)?(tn=0,_i=null,c0(i)):(tn=0,_i=null,Ar(e,i,d,7));break;case 5:var v=null;switch(Ue.tag){case 26:v=Ue.memoizedState;case 5:case 27:var w=Ue;if(v?j0(v):w.stateNode.complete){tn=0,_i=null;var G=w.sibling;if(G!==null)Ue=G;else{var nt=w.return;nt!==null?(Ue=nt,ec(nt)):Ue=null}break e}}tn=0,_i=null,Ar(e,i,d,5);break;case 6:tn=0,_i=null,Ar(e,i,d,6);break;case 8:Xf(),yn=6;break t;default:throw Error(a(462))}}xS();break}catch(_t){a0(e,_t)}while(!0);return pa=Us=null,O.H=l,O.A=f,Ye=s,Ue!==null?0:(fn=null,Ie=0,Sl(),yn)}function xS(){for(;Ue!==null&&!be();)l0(Ue)}function l0(e){var i=Ug(e.alternate,e,Ea);e.memoizedProps=e.pendingProps,i===null?ec(e):Ue=i}function c0(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=Ag(s,i,i.pendingProps,i.type,void 0,Ie);break;case 11:i=Ag(s,i,i.pendingProps,i.type.render,i.ref,Ie);break;case 5:of(i);default:Og(s,i),i=Ue=om(i,Ea),i=Ug(s,i,Ea)}e.memoizedProps=e.pendingProps,i===null?ec(e):Ue=i}function Ar(e,i,s,l){pa=Us=null,of(i),mr=null,xo=0;var f=i.return;try{if(oS(e,f,i,s,Ie)){yn=1,Vl(e,Ti(s,e.current)),Ue=null;return}}catch(d){if(f!==null)throw Ue=f,d;yn=1,Vl(e,Ti(s,e.current)),Ue=null;return}i.flags&32768?(Pe||l===1?e=!0:Mr||(Ie&536870912)!==0?e=!1:(Ja=e=!0,(l===2||l===9||l===3||l===6)&&(l=mi.current,l!==null&&l.tag===13&&(l.flags|=16384))),u0(i,e)):ec(i)}function ec(e){var i=e;do{if((i.flags&32768)!==0){u0(i,Ja);return}e=i.return;var s=uS(i.alternate,i,Ea);if(s!==null){Ue=s;return}if(i=i.sibling,i!==null){Ue=i;return}Ue=i=e}while(i!==null);yn===0&&(yn=5)}function u0(e,i){do{var s=fS(e.alternate,e);if(s!==null){s.flags&=32767,Ue=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){Ue=e;return}Ue=e=s}while(e!==null);yn=6,Ue=null}function f0(e,i,s,l,f,d,v,w,G){e.cancelPendingCommit=null;do nc();while(In!==0);if((Ye&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(d=i.lanes|i.childLanes,d|=Lu,Jt(e,s,d,v,w,G),e===fn&&(Ue=fn=null,Ie=0),Er=i,ns=e,Ta=s,Vf=d,kf=f,t0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,bS(J,function(){return g0(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=O.T,O.T=null,f=B.p,B.p=2,v=Ye,Ye|=4;try{dS(e,i,s)}finally{Ye=v,B.p=f,O.T=l}}In=1,d0(),h0(),p0()}}function d0(){if(In===1){In=0;var e=ns,i=Er,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=O.T,O.T=null;var l=B.p;B.p=2;var f=Ye;Ye|=4;try{Yg(i,e);var d=ad,v=Qp(e.containerInfo),w=d.focusedElem,G=d.selectionRange;if(v!==w&&w&&w.ownerDocument&&Kp(w.ownerDocument.documentElement,w)){if(G!==null&&Ru(w)){var nt=G.start,_t=G.end;if(_t===void 0&&(_t=nt),"selectionStart"in w)w.selectionStart=nt,w.selectionEnd=Math.min(_t,w.value.length);else{var yt=w.ownerDocument||document,ot=yt&&yt.defaultView||window;if(ot.getSelection){var ut=ot.getSelection(),Qt=w.textContent.length,ue=Math.min(G.start,Qt),rn=G.end===void 0?ue:Math.min(G.end,Qt);!ut.extend&&ue>rn&&(v=rn,rn=ue,ue=v);var j=$p(w,ue),W=$p(w,rn);if(j&&W&&(ut.rangeCount!==1||ut.anchorNode!==j.node||ut.anchorOffset!==j.offset||ut.focusNode!==W.node||ut.focusOffset!==W.offset)){var et=yt.createRange();et.setStart(j.node,j.offset),ut.removeAllRanges(),ue>rn?(ut.addRange(et),ut.extend(W.node,W.offset)):(et.setEnd(W.node,W.offset),ut.addRange(et))}}}}for(yt=[],ut=w;ut=ut.parentNode;)ut.nodeType===1&&yt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<yt.length;w++){var St=yt[w];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}pc=!!id,ad=id=null}finally{Ye=f,B.p=l,O.T=s}}e.current=i,In=2}}function h0(){if(In===2){In=0;var e=ns,i=Er,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=O.T,O.T=null;var l=B.p;B.p=2;var f=Ye;Ye|=4;try{Hg(e,i.alternate,i)}finally{Ye=f,B.p=l,O.T=s}}In=3}}function p0(){if(In===4||In===3){In=0,Ce();var e=ns,i=Er,s=Ta,l=t0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?In=5:(In=0,Er=ns=null,m0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(es=null),cn(s),i=i.stateNode,pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(ft,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=O.T,f=B.p,B.p=2,O.T=null;try{for(var d=e.onRecoverableError,v=0;v<l.length;v++){var w=l[v];d(w.value,{componentStack:w.stack})}}finally{O.T=i,B.p=f}}(Ta&3)!==0&&nc(),$i(e),f=e.pendingLanes,(s&261930)!==0&&(f&42)!==0?e===Wf?zo++:(zo=0,Wf=e):zo=0,Po(0)}}function m0(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,_o(i)))}function nc(){return d0(),h0(),p0(),g0()}function g0(){if(In!==5)return!1;var e=ns,i=Vf;Vf=0;var s=cn(Ta),l=O.T,f=B.p;try{B.p=32>s?32:s,O.T=null,s=kf,kf=null;var d=ns,v=Ta;if(In=0,Er=ns=null,Ta=0,(Ye&6)!==0)throw Error(a(331));var w=Ye;if(Ye|=4,Kg(d.current),jg(d,d.current,v,s),Ye=w,Po(0,!1),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(ft,d)}catch{}return!0}finally{B.p=f,O.T=l,m0(e,i)}}function _0(e,i,s){i=Ti(s,i),i=Mf(e.stateNode,i,2),e=Za(e,i,2),e!==null&&(ht(e,2),$i(e))}function en(e,i,s){if(e.tag===3)_0(e,e,s);else for(;i!==null;){if(i.tag===3){_0(i,e,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(es===null||!es.has(l))){e=Ti(s,e),s=vg(2),l=Za(i,s,2),l!==null&&(xg(s,l,i,e),ht(l,2),$i(l));break}}i=i.return}}function qf(e,i,s){var l=e.pingCache;if(l===null){l=e.pingCache=new mS;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(Bf=!0,f.add(s),e=SS.bind(null,e,i,s),i.then(e,e))}function SS(e,i,s){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,fn===e&&(Ie&s)===s&&(yn===4||yn===3&&(Ie&62914560)===Ie&&300>Dt()-$l?(Ye&2)===0&&Tr(e,0):Gf|=s,br===Ie&&(br=0)),$i(e)}function v0(e,i){i===0&&(i=tt()),e=Cs(e,i),e!==null&&(ht(e,i),$i(e))}function yS(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),v0(e,s)}function MS(e,i){var s=0;switch(e.tag){case 31:case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),v0(e,s)}function bS(e,i){return Y(e,i)}var ic=null,wr=null,jf=!1,ac=!1,Zf=!1,as=0;function $i(e){e!==wr&&e.next===null&&(wr===null?ic=wr=e:wr=wr.next=e),ac=!0,jf||(jf=!0,TS())}function Po(e,i){if(!Zf&&ac){Zf=!0;do for(var s=!1,l=ic;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var v=l.suspendedLanes,w=l.pingedLanes;d=(1<<31-Bt(42|e)+1)-1,d&=f&~(v&~w),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,M0(l,d))}else d=Ie,d=gt(l,l===fn?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Vt(l,d)||(s=!0,M0(l,d));l=l.next}while(s);Zf=!1}}function ES(){x0()}function x0(){ac=jf=!1;var e=0;as!==0&&IS()&&(e=as);for(var i=Dt(),s=null,l=ic;l!==null;){var f=l.next,d=S0(l,i);d===0?(l.next=null,s===null?ic=f:s.next=f,f===null&&(wr=s)):(s=l,(e!==0||(d&3)!==0)&&(ac=!0)),l=f}In!==0&&In!==5||Po(e),as!==0&&(as=0)}function S0(e,i){for(var s=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-Bt(d),w=1<<v,G=f[v];G===-1?((w&s)===0||(w&l)!==0)&&(f[v]=z(w,i)):G<=i&&(e.expiredLanes|=w),d&=~w}if(i=fn,s=Ie,s=gt(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===i&&(tn===2||tn===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&dn(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Vt(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(l!==null&&dn(l),cn(s)){case 2:case 8:s=b;break;case 32:s=J;break;case 268435456:s=Tt;break;default:s=J}return l=y0.bind(null,e),s=Y(s,l),e.callbackPriority=i,e.callbackNode=s,i}return l!==null&&l!==null&&dn(l),e.callbackPriority=2,e.callbackNode=null,2}function y0(e,i){if(In!==0&&In!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(nc()&&e.callbackNode!==s)return null;var l=Ie;return l=gt(e,e===fn?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(n0(e,l,i),S0(e,Dt()),e.callbackNode!=null&&e.callbackNode===s?y0.bind(null,e):null)}function M0(e,i){if(nc())return null;n0(e,i,!0)}function TS(){PS(function(){(Ye&6)!==0?Y(D,ES):x0()})}function $f(){if(as===0){var e=dr;e===0&&(e=de,de<<=1,(de&261888)===0&&(de=256)),as=e}return as}function b0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ts(""+e)}function E0(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function AS(e,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var d=b0((f[me]||null).action),v=l.submitter;v&&(i=(i=v[me]||null)?b0(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var w=new gl("action","action",null,l,f);e.push({event:w,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(as!==0){var G=v?E0(f,v):new FormData(f);gf(s,{pending:!0,data:G,method:f.method,action:d},null,G)}}else typeof d=="function"&&(w.preventDefault(),G=v?E0(f,v):new FormData(f),gf(s,{pending:!0,data:G,method:f.method,action:d},d,G))},currentTarget:f}]})}}for(var Kf=0;Kf<Uu.length;Kf++){var Qf=Uu[Kf],wS=Qf.toLowerCase(),RS=Qf[0].toUpperCase()+Qf.slice(1);Fi(wS,"on"+RS)}Fi(em,"onAnimationEnd"),Fi(nm,"onAnimationIteration"),Fi(im,"onAnimationStart"),Fi("dblclick","onDoubleClick"),Fi("focusin","onFocus"),Fi("focusout","onBlur"),Fi(Wx,"onTransitionRun"),Fi(Xx,"onTransitionStart"),Fi(Yx,"onTransitionCancel"),Fi(am,"onTransitionEnd"),rt("onMouseEnter",["mouseout","mouseover"]),rt("onMouseLeave",["mouseout","mouseover"]),rt("onPointerEnter",["pointerout","pointerover"]),rt("onPointerLeave",["pointerout","pointerover"]),q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),q("onBeforeInput",["compositionend","keypress","textInput","paste"]),q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),CS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fo));function T0(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],f=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var w=l[v],G=w.instance,nt=w.currentTarget;if(w=w.listener,G!==d&&f.isPropagationStopped())break t;d=w,f.currentTarget=nt;try{d(f)}catch(_t){xl(_t)}f.currentTarget=null,d=G}else for(v=0;v<l.length;v++){if(w=l[v],G=w.instance,nt=w.currentTarget,w=w.listener,G!==d&&f.isPropagationStopped())break t;d=w,f.currentTarget=nt;try{d(f)}catch(_t){xl(_t)}f.currentTarget=null,d=G}}}}function Le(e,i){var s=i[ee];s===void 0&&(s=i[ee]=new Set);var l=e+"__bubble";s.has(l)||(A0(i,e,2,!1),s.add(l))}function Jf(e,i,s){var l=0;i&&(l|=4),A0(s,e,l,i)}var sc="_reactListening"+Math.random().toString(36).slice(2);function td(e){if(!e[sc]){e[sc]=!0,dl.forEach(function(s){s!=="selectionchange"&&(CS.has(s)||Jf(s,!1,e),Jf(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[sc]||(i[sc]=!0,Jf("selectionchange",!1,i))}}function A0(e,i,s,l){switch(e_(i)){case 2:var f=iy;break;case 8:f=ay;break;default:f=md}s=f.bind(null,i,s,e),f=void 0,!xu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(i,s,{capture:!0,passive:f}):e.addEventListener(i,s,!0):f!==void 0?e.addEventListener(i,s,{passive:f}):e.addEventListener(i,s,!1)}function ed(e,i,s,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var w=l.stateNode.containerInfo;if(w===f)break;if(v===4)for(v=l.return;v!==null;){var G=v.tag;if((G===3||G===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;w!==null;){if(v=Fa(w),v===null)return;if(G=v.tag,G===5||G===6||G===26||G===27){l=d=v;continue t}w=w.parentNode}}l=l.return}Np(function(){var nt=d,_t=_u(s),yt=[];t:{var ot=sm.get(e);if(ot!==void 0){var ut=gl,Qt=e;switch(e){case"keypress":if(pl(s)===0)break t;case"keydown":case"keyup":ut=Mx;break;case"focusin":Qt="focus",ut=bu;break;case"focusout":Qt="blur",ut=bu;break;case"beforeblur":case"afterblur":ut=bu;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=Op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=ux;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Tx;break;case em:case nm:case im:ut=hx;break;case am:ut=wx;break;case"scroll":case"scrollend":ut=lx;break;case"wheel":ut=Cx;break;case"copy":case"cut":case"paste":ut=mx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=zp;break;case"toggle":case"beforetoggle":ut=Nx}var ue=(i&4)!==0,rn=!ue&&(e==="scroll"||e==="scrollend"),j=ue?ot!==null?ot+"Capture":null:ot;ue=[];for(var W=nt,et;W!==null;){var St=W;if(et=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||et===null||j===null||(St=so(W,j),St!=null&&ue.push(Bo(W,St,et))),rn)break;W=W.return}0<ue.length&&(ot=new ut(ot,Qt,null,s,_t),yt.push({event:ot,listeners:ue}))}}if((i&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",ot&&s!==gu&&(Qt=s.relatedTarget||s.fromElement)&&(Fa(Qt)||Qt[te]))break t;if((ut||ot)&&(ot=_t.window===_t?_t:(ot=_t.ownerDocument)?ot.defaultView||ot.parentWindow:window,ut?(Qt=s.relatedTarget||s.toElement,ut=nt,Qt=Qt?Fa(Qt):null,Qt!==null&&(rn=c(Qt),ue=Qt.tag,Qt!==rn||ue!==5&&ue!==27&&ue!==6)&&(Qt=null)):(ut=null,Qt=nt),ut!==Qt)){if(ue=Op,St="onMouseLeave",j="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(ue=zp,St="onPointerLeave",j="onPointerEnter",W="pointer"),rn=ut==null?ot:Es(ut),et=Qt==null?ot:Es(Qt),ot=new ue(St,W+"leave",ut,s,_t),ot.target=rn,ot.relatedTarget=et,St=null,Fa(_t)===nt&&(ue=new ue(j,W+"enter",Qt,s,_t),ue.target=et,ue.relatedTarget=rn,St=ue),rn=St,ut&&Qt)e:{for(ue=DS,j=ut,W=Qt,et=0,St=j;St;St=ue(St))et++;St=0;for(var re=W;re;re=ue(re))St++;for(;0<et-St;)j=ue(j),et--;for(;0<St-et;)W=ue(W),St--;for(;et--;){if(j===W||W!==null&&j===W.alternate){ue=j;break e}j=ue(j),W=ue(W)}ue=null}else ue=null;ut!==null&&w0(yt,ot,ut,ue,!1),Qt!==null&&rn!==null&&w0(yt,rn,Qt,ue,!0)}}t:{if(ot=nt?Es(nt):window,ut=ot.nodeName&&ot.nodeName.toLowerCase(),ut==="select"||ut==="input"&&ot.type==="file")var ke=Wp;else if(Vp(ot))if(Xp)ke=Hx;else{ke=Bx;var ne=Fx}else ut=ot.nodeName,!ut||ut.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?nt&&Ze(nt.elementType)&&(ke=Wp):ke=Gx;if(ke&&(ke=ke(e,nt))){kp(yt,ke,s,_t);break t}ne&&ne(e,ot,nt),e==="focusout"&&nt&&ot.type==="number"&&nt.memoizedProps.value!=null&&Ne(ot,"number",ot.value)}switch(ne=nt?Es(nt):window,e){case"focusin":(Vp(ne)||ne.contentEditable==="true")&&(ar=ne,Cu=nt,po=null);break;case"focusout":po=Cu=ar=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,Jp(yt,s,_t);break;case"selectionchange":if(kx)break;case"keydown":case"keyup":Jp(yt,s,_t)}var Ee;if(Tu)t:{switch(e){case"compositionstart":var ze="onCompositionStart";break t;case"compositionend":ze="onCompositionEnd";break t;case"compositionupdate":ze="onCompositionUpdate";break t}ze=void 0}else ir?Gp(e,s)&&(ze="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(ze="onCompositionStart");ze&&(Pp&&s.locale!=="ko"&&(ir||ze!=="onCompositionStart"?ze==="onCompositionEnd"&&ir&&(Ee=Up()):(Va=_t,Su="value"in Va?Va.value:Va.textContent,ir=!0)),ne=rc(nt,ze),0<ne.length&&(ze=new Ip(ze,e,null,s,_t),yt.push({event:ze,listeners:ne}),Ee?ze.data=Ee:(Ee=Hp(s),Ee!==null&&(ze.data=Ee)))),(Ee=Lx?Ox(e,s):Ix(e,s))&&(ze=rc(nt,"onBeforeInput"),0<ze.length&&(ne=new Ip("onBeforeInput","beforeinput",null,s,_t),yt.push({event:ne,listeners:ze}),ne.data=Ee)),AS(yt,e,nt,s,_t)}T0(yt,i)})}function Bo(e,i,s){return{instance:e,listener:i,currentTarget:s}}function rc(e,i){for(var s=i+"Capture",l=[];e!==null;){var f=e,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=so(e,s),f!=null&&l.unshift(Bo(e,f,d)),f=so(e,i),f!=null&&l.push(Bo(e,f,d))),e.tag===3)return l;e=e.return}return[]}function DS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function w0(e,i,s,l,f){for(var d=i._reactName,v=[];s!==null&&s!==l;){var w=s,G=w.alternate,nt=w.stateNode;if(w=w.tag,G!==null&&G===l)break;w!==5&&w!==26&&w!==27||nt===null||(G=nt,f?(nt=so(s,d),nt!=null&&v.unshift(Bo(s,nt,G))):f||(nt=so(s,d),nt!=null&&v.push(Bo(s,nt,G)))),s=s.return}v.length!==0&&e.push({event:i,listeners:v})}var NS=/\r\n?/g,US=/\u0000|\uFFFD/g;function R0(e){return(typeof e=="string"?e:""+e).replace(NS,`
`).replace(US,"")}function C0(e,i){return i=R0(i),R0(e)===i}function sn(e,i,s,l,f,d){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||di(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&di(e,""+l);break;case"className":Kt(e,"class",l);break;case"tabIndex":Kt(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Kt(e,s,l);break;case"style":Pi(e,l,d);break;case"data":if(i!=="object"){Kt(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Ts(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&sn(e,i,"name",f.name,f,null),sn(e,i,"formEncType",f.formEncType,f,null),sn(e,i,"formMethod",f.formMethod,f,null),sn(e,i,"formTarget",f.formTarget,f,null)):(sn(e,i,"encType",f.encType,f,null),sn(e,i,"method",f.method,f,null),sn(e,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Ts(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=ua);break;case"onScroll":l!=null&&Le("scroll",e);break;case"onScrollEnd":l!=null&&Le("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=Ts(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":Le("beforetoggle",e),Le("toggle",e),Ht(e,"popover",l);break;case"xlinkActuate":$t(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":$t(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":$t(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":$t(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":$t(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":$t(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":$t(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":$t(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":$t(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ht(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Yi.get(s)||s,Ht(e,s,l))}}function nd(e,i,s,l,f,d){switch(s){case"style":Pi(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?di(e,l):(typeof l=="number"||typeof l=="bigint")&&di(e,""+l);break;case"onScroll":l!=null&&Le("scroll",e);break;case"onScrollEnd":l!=null&&Le("scrollend",e);break;case"onClick":l!=null&&(e.onclick=ua);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),d=e[me]||null,d=d!=null?d[s]:null,typeof d=="function"&&e.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,l,f);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):Ht(e,s,l)}}}function Wn(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Le("error",e),Le("load",e);var l=!1,f=!1,d;for(d in s)if(s.hasOwnProperty(d)){var v=s[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:sn(e,i,d,v,s,null)}}f&&sn(e,i,"srcSet",s.srcSet,s,null),l&&sn(e,i,"src",s.src,s,null);return;case"input":Le("invalid",e);var w=d=v=f=null,G=null,nt=null;for(l in s)if(s.hasOwnProperty(l)){var _t=s[l];if(_t!=null)switch(l){case"name":f=_t;break;case"type":v=_t;break;case"checked":G=_t;break;case"defaultChecked":nt=_t;break;case"value":d=_t;break;case"defaultValue":w=_t;break;case"children":case"dangerouslySetInnerHTML":if(_t!=null)throw Error(a(137,i));break;default:sn(e,i,l,_t,s,null)}}Yn(e,d,w,G,nt,v,f,!1);return;case"select":Le("invalid",e),l=v=d=null;for(f in s)if(s.hasOwnProperty(f)&&(w=s[f],w!=null))switch(f){case"value":d=w;break;case"defaultValue":v=w;break;case"multiple":l=w;default:sn(e,i,f,w,s,null)}i=d,s=v,e.multiple=!!l,i!=null?On(e,!!l,i,!1):s!=null&&On(e,!!l,s,!0);return;case"textarea":Le("invalid",e),d=f=l=null;for(v in s)if(s.hasOwnProperty(v)&&(w=s[v],w!=null))switch(v){case"value":l=w;break;case"defaultValue":f=w;break;case"children":d=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(a(91));break;default:sn(e,i,v,w,s,null)}zi(e,l,f,d);return;case"option":for(G in s)if(s.hasOwnProperty(G)&&(l=s[G],l!=null))switch(G){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:sn(e,i,G,l,s,null)}return;case"dialog":Le("beforetoggle",e),Le("toggle",e),Le("cancel",e),Le("close",e);break;case"iframe":case"object":Le("load",e);break;case"video":case"audio":for(l=0;l<Fo.length;l++)Le(Fo[l],e);break;case"image":Le("error",e),Le("load",e);break;case"details":Le("toggle",e);break;case"embed":case"source":case"link":Le("error",e),Le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in s)if(s.hasOwnProperty(nt)&&(l=s[nt],l!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:sn(e,i,nt,l,s,null)}return;default:if(Ze(i)){for(_t in s)s.hasOwnProperty(_t)&&(l=s[_t],l!==void 0&&nd(e,i,_t,l,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(l=s[w],l!=null&&sn(e,i,w,l,s,null))}function LS(e,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,v=null,w=null,G=null,nt=null,_t=null;for(ut in s){var yt=s[ut];if(s.hasOwnProperty(ut)&&yt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":G=yt;default:l.hasOwnProperty(ut)||sn(e,i,ut,null,l,yt)}}for(var ot in l){var ut=l[ot];if(yt=s[ot],l.hasOwnProperty(ot)&&(ut!=null||yt!=null))switch(ot){case"type":d=ut;break;case"name":f=ut;break;case"checked":nt=ut;break;case"defaultChecked":_t=ut;break;case"value":v=ut;break;case"defaultValue":w=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(a(137,i));break;default:ut!==yt&&sn(e,i,ot,ut,l,yt)}}qt(e,v,w,G,nt,_t,d,f);return;case"select":ut=v=w=ot=null;for(d in s)if(G=s[d],s.hasOwnProperty(d)&&G!=null)switch(d){case"value":break;case"multiple":ut=G;default:l.hasOwnProperty(d)||sn(e,i,d,null,l,G)}for(f in l)if(d=l[f],G=s[f],l.hasOwnProperty(f)&&(d!=null||G!=null))switch(f){case"value":ot=d;break;case"defaultValue":w=d;break;case"multiple":v=d;default:d!==G&&sn(e,i,f,d,l,G)}i=w,s=v,l=ut,ot!=null?On(e,!!s,ot,!1):!!l!=!!s&&(i!=null?On(e,!!s,i,!0):On(e,!!s,s?[]:"",!1));return;case"textarea":ut=ot=null;for(w in s)if(f=s[w],s.hasOwnProperty(w)&&f!=null&&!l.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:sn(e,i,w,null,l,f)}for(v in l)if(f=l[v],d=s[v],l.hasOwnProperty(v)&&(f!=null||d!=null))switch(v){case"value":ot=f;break;case"defaultValue":ut=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==d&&sn(e,i,v,f,l,d)}fi(e,ot,ut);return;case"option":for(var Qt in s)if(ot=s[Qt],s.hasOwnProperty(Qt)&&ot!=null&&!l.hasOwnProperty(Qt))switch(Qt){case"selected":e.selected=!1;break;default:sn(e,i,Qt,null,l,ot)}for(G in l)if(ot=l[G],ut=s[G],l.hasOwnProperty(G)&&ot!==ut&&(ot!=null||ut!=null))switch(G){case"selected":e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol";break;default:sn(e,i,G,ot,l,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ue in s)ot=s[ue],s.hasOwnProperty(ue)&&ot!=null&&!l.hasOwnProperty(ue)&&sn(e,i,ue,null,l,ot);for(nt in l)if(ot=l[nt],ut=s[nt],l.hasOwnProperty(nt)&&ot!==ut&&(ot!=null||ut!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(a(137,i));break;default:sn(e,i,nt,ot,l,ut)}return;default:if(Ze(i)){for(var rn in s)ot=s[rn],s.hasOwnProperty(rn)&&ot!==void 0&&!l.hasOwnProperty(rn)&&nd(e,i,rn,void 0,l,ot);for(_t in l)ot=l[_t],ut=s[_t],!l.hasOwnProperty(_t)||ot===ut||ot===void 0&&ut===void 0||nd(e,i,_t,ot,l,ut);return}}for(var j in s)ot=s[j],s.hasOwnProperty(j)&&ot!=null&&!l.hasOwnProperty(j)&&sn(e,i,j,null,l,ot);for(yt in l)ot=l[yt],ut=s[yt],!l.hasOwnProperty(yt)||ot===ut||ot==null&&ut==null||sn(e,i,yt,ot,l,ut)}function D0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function OS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],d=f.transferSize,v=f.initiatorType,w=f.duration;if(d&&w&&D0(v)){for(v=0,w=f.responseEnd,l+=1;l<s.length;l++){var G=s[l],nt=G.startTime;if(nt>w)break;var _t=G.transferSize,yt=G.initiatorType;_t&&D0(yt)&&(G=G.responseEnd,v+=_t*(G<w?1:(w-nt)/(G-nt)))}if(--l,i+=8*(d+v)/(f.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var id=null,ad=null;function oc(e){return e.nodeType===9?e:e.ownerDocument}function N0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function U0(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function sd(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var rd=null;function IS(){var e=window.event;return e&&e.type==="popstate"?e===rd?!1:(rd=e,!0):(rd=null,!1)}var L0=typeof setTimeout=="function"?setTimeout:void 0,zS=typeof clearTimeout=="function"?clearTimeout:void 0,O0=typeof Promise=="function"?Promise:void 0,PS=typeof queueMicrotask=="function"?queueMicrotask:typeof O0<"u"?function(e){return O0.resolve(null).then(e).catch(FS)}:L0;function FS(e){setTimeout(function(){throw e})}function ss(e){return e==="head"}function I0(e,i){var s=i,l=0;do{var f=s.nextSibling;if(e.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){e.removeChild(f),Nr(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")Go(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,Go(s);for(var d=s.firstChild;d;){var v=d.nextSibling,w=d.nodeName;d[En]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=v}}else s==="body"&&Go(e.ownerDocument.body);s=f}while(s);Nr(i)}function z0(e,i){var s=e;e=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=l}while(s)}function od(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":od(s),ii(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function BS(e,i,s,l){for(;e.nodeType===1;){var f=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[En])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Di(e.nextSibling),e===null)break}return null}function GS(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Di(e.nextSibling),e===null))return null;return e}function P0(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Di(e.nextSibling),e===null))return null;return e}function ld(e){return e.data==="$?"||e.data==="$~"}function cd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function HS(e,i){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Di(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var ud=null;function F0(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(i===0)return Di(e.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}e=e.nextSibling}return null}function B0(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return e;i--}else s!=="/$"&&s!=="/&"||i++}e=e.previousSibling}return null}function G0(e,i,s){switch(i=oc(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Go(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);ii(e)}var Ni=new Map,H0=new Set;function lc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Aa=B.d;B.d={f:VS,r:kS,D:WS,C:XS,L:YS,m:qS,X:ZS,S:jS,M:$S};function VS(){var e=Aa.f(),i=Jl();return e||i}function kS(e){var i=Ba(e);i!==null&&i.tag===5&&i.type==="form"?ag(i):Aa.r(e)}var Rr=typeof document>"u"?null:document;function V0(e,i,s){var l=Rr;if(l&&typeof i=="string"&&i){var f=Qe(i);f='link[rel="'+e+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),H0.has(f)||(H0.add(f),e={rel:e,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Wn(i,"link",e),wn(i),l.head.appendChild(i)))}}function WS(e){Aa.D(e),V0("dns-prefetch",e,null)}function XS(e,i){Aa.C(e,i),V0("preconnect",e,i)}function YS(e,i,s){Aa.L(e,i,s);var l=Rr;if(l&&e&&i){var f='link[rel="preload"][as="'+Qe(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Qe(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Qe(s.imageSizes)+'"]')):f+='[href="'+Qe(e)+'"]';var d=f;switch(i){case"style":d=Cr(e);break;case"script":d=Dr(e)}Ni.has(d)||(e=S({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),Ni.set(d,e),l.querySelector(f)!==null||i==="style"&&l.querySelector(Ho(d))||i==="script"&&l.querySelector(Vo(d))||(i=l.createElement("link"),Wn(i,"link",e),wn(i),l.head.appendChild(i)))}}function qS(e,i){Aa.m(e,i);var s=Rr;if(s&&e){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+Qe(l)+'"][href="'+Qe(e)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Dr(e)}if(!Ni.has(d)&&(e=S({rel:"modulepreload",href:e},i),Ni.set(d,e),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Vo(d)))return}l=s.createElement("link"),Wn(l,"link",e),wn(l),s.head.appendChild(l)}}}function jS(e,i,s){Aa.S(e,i,s);var l=Rr;if(l&&e){var f=Ga(l).hoistableStyles,d=Cr(e);i=i||"default";var v=f.get(d);if(!v){var w={loading:0,preload:null};if(v=l.querySelector(Ho(d)))w.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":i},s),(s=Ni.get(d))&&fd(e,s);var G=v=l.createElement("link");wn(G),Wn(G,"link",e),G._p=new Promise(function(nt,_t){G.onload=nt,G.onerror=_t}),G.addEventListener("load",function(){w.loading|=1}),G.addEventListener("error",function(){w.loading|=2}),w.loading|=4,cc(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:w},f.set(d,v)}}}function ZS(e,i){Aa.X(e,i);var s=Rr;if(s&&e){var l=Ga(s).hoistableScripts,f=Dr(e),d=l.get(f);d||(d=s.querySelector(Vo(f)),d||(e=S({src:e,async:!0},i),(i=Ni.get(f))&&dd(e,i),d=s.createElement("script"),wn(d),Wn(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function $S(e,i){Aa.M(e,i);var s=Rr;if(s&&e){var l=Ga(s).hoistableScripts,f=Dr(e),d=l.get(f);d||(d=s.querySelector(Vo(f)),d||(e=S({src:e,async:!0,type:"module"},i),(i=Ni.get(f))&&dd(e,i),d=s.createElement("script"),wn(d),Wn(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function k0(e,i,s,l){var f=(f=lt.current)?lc(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Cr(s.href),s=Ga(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Cr(s.href);var d=Ga(f).hoistableStyles,v=d.get(e);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=f.querySelector(Ho(e)))&&!d._p&&(v.instance=d,v.state.loading=5),Ni.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ni.set(e,s),d||KS(f,e,s,v.state))),i&&l===null)throw Error(a(528,""));return v}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Dr(s),s=Ga(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Cr(e){return'href="'+Qe(e)+'"'}function Ho(e){return'link[rel="stylesheet"]['+e+"]"}function W0(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function KS(e,i,s,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Wn(i,"link",s),wn(i),e.head.appendChild(i))}function Dr(e){return'[src="'+Qe(e)+'"]'}function Vo(e){return"script[async]"+e}function X0(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+Qe(s.href)+'"]');if(l)return i.instance=l,wn(l),l;var f=S({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),wn(l),Wn(l,"style",f),cc(l,s.precedence,e),i.instance=l;case"stylesheet":f=Cr(s.href);var d=e.querySelector(Ho(f));if(d)return i.state.loading|=4,i.instance=d,wn(d),d;l=W0(s),(f=Ni.get(f))&&fd(l,f),d=(e.ownerDocument||e).createElement("link"),wn(d);var v=d;return v._p=new Promise(function(w,G){v.onload=w,v.onerror=G}),Wn(d,"link",l),i.state.loading|=4,cc(d,s.precedence,e),i.instance=d;case"script":return d=Dr(s.src),(f=e.querySelector(Vo(d)))?(i.instance=f,wn(f),f):(l=s,(f=Ni.get(d))&&(l=S({},s),dd(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),wn(f),Wn(f,"link",l),e.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,cc(l,s.precedence,e));return i.instance}function cc(e,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,v=0;v<l.length;v++){var w=l[v];if(w.dataset.precedence===i)d=w;else if(d!==f)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function fd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function dd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var uc=null;function Y0(e,i,s){if(uc===null){var l=new Map,f=uc=new Map;f.set(s,l)}else f=uc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),f=0;f<s.length;f++){var d=s[f];if(!(d[En]||d[Wt]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=e+v;var w=l.get(v);w?w.push(d):l.set(v,[d])}}return l}function q0(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function QS(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function j0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function JS(e,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Cr(l.href),d=i.querySelector(Ho(f));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=fc.bind(e),i.then(e,e)),s.state.loading|=4,s.instance=d,wn(d);return}d=i.ownerDocument||i,l=W0(l),(f=Ni.get(f))&&fd(l,f),d=d.createElement("link"),wn(d);var v=d;v._p=new Promise(function(w,G){v.onload=w,v.onerror=G}),Wn(d,"link",l),s.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=fc.bind(e),i.addEventListener("load",s),i.addEventListener("error",s))}}var hd=0;function ty(e,i){return e.stylesheets&&e.count===0&&hc(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var l=setTimeout(function(){if(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+i);0<e.imgBytes&&hd===0&&(hd=62500*OS());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>hd?50:800)+i);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function fc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)hc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var dc=null;function hc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,dc=new Map,i.forEach(ey,e),dc=null,fc.call(e))}function ey(e,i){if(!(i.state.loading&4)){var s=dc.get(e);if(s)var l=s.get(null);else{s=new Map,dc.set(e,s);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var v=f[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(s.set(v.dataset.precedence,v),l=v)}l&&s.set(null,l)}f=i.instance,v=f.getAttribute("data-precedence"),d=s.get(v)||l,d===l&&s.set(null,f),s.set(v,f),this.count++,l=fc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),i.state.loading|=4}}var ko={$$typeof:L,Provider:null,Consumer:null,_currentValue:st,_currentValue2:st,_threadCount:0};function ny(e,i,s,l,f,d,v,w,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ct(0),this.hiddenUpdates=ct(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function Z0(e,i,s,l,f,d,v,w,G,nt,_t,yt){return e=new ny(e,i,s,v,G,nt,_t,yt,w),i=1,d===!0&&(i|=24),d=pi(3,null,null,i),e.current=d,d.stateNode=e,i=Xu(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:i},Zu(d),e}function $0(e){return e?(e=or,e):or}function K0(e,i,s,l,f,d){f=$0(f),l.context===null?l.context=f:l.pendingContext=f,l=ja(i),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=Za(e,l,i),s!==null&&(ci(s,e,i),yo(s,e,i))}function Q0(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function pd(e,i){Q0(e,i),(e=e.alternate)&&Q0(e,i)}function J0(e){if(e.tag===13||e.tag===31){var i=Cs(e,67108864);i!==null&&ci(i,e,67108864),pd(e,67108864)}}function t_(e){if(e.tag===13||e.tag===31){var i=xi();i=Ae(i);var s=Cs(e,i);s!==null&&ci(s,e,i),pd(e,i)}}var pc=!0;function iy(e,i,s,l){var f=O.T;O.T=null;var d=B.p;try{B.p=2,md(e,i,s,l)}finally{B.p=d,O.T=f}}function ay(e,i,s,l){var f=O.T;O.T=null;var d=B.p;try{B.p=8,md(e,i,s,l)}finally{B.p=d,O.T=f}}function md(e,i,s,l){if(pc){var f=gd(l);if(f===null)ed(e,i,l,mc,s),n_(e,l);else if(ry(f,e,i,s,l))l.stopPropagation();else if(n_(e,l),i&4&&-1<sy.indexOf(e)){for(;f!==null;){var d=Ba(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Ct(d.pendingLanes);if(v!==0){var w=d;for(w.pendingLanes|=2,w.entangledLanes|=2;v;){var G=1<<31-Bt(v);w.entanglements[1]|=G,v&=~G}$i(d),(Ye&6)===0&&(Kl=Dt()+500,Po(0))}}break;case 31:case 13:w=Cs(d,2),w!==null&&ci(w,d,2),Jl(),pd(d,2)}if(d=gd(l),d===null&&ed(e,i,l,mc,s),d===f)break;f=d}f!==null&&l.stopPropagation()}else ed(e,i,l,null,s)}}function gd(e){return e=_u(e),_d(e)}var mc=null;function _d(e){if(mc=null,e=Fa(e),e!==null){var i=c(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=u(i),e!==null)return e;e=null}else if(s===31){if(e=h(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return mc=e,null}function e_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ln()){case D:return 2;case b:return 8;case J:case xt:return 32;case Tt:return 268435456;default:return 32}default:return 32}}var vd=!1,rs=null,os=null,ls=null,Wo=new Map,Xo=new Map,cs=[],sy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function n_(e,i){switch(e){case"focusin":case"focusout":rs=null;break;case"dragenter":case"dragleave":os=null;break;case"mouseover":case"mouseout":ls=null;break;case"pointerover":case"pointerout":Wo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(i.pointerId)}}function Yo(e,i,s,l,f,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=Ba(i),i!==null&&J0(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),e)}function ry(e,i,s,l,f){switch(i){case"focusin":return rs=Yo(rs,e,i,s,l,f),!0;case"dragenter":return os=Yo(os,e,i,s,l,f),!0;case"mouseover":return ls=Yo(ls,e,i,s,l,f),!0;case"pointerover":var d=f.pointerId;return Wo.set(d,Yo(Wo.get(d)||null,e,i,s,l,f)),!0;case"gotpointercapture":return d=f.pointerId,Xo.set(d,Yo(Xo.get(d)||null,e,i,s,l,f)),!0}return!1}function i_(e){var i=Fa(e.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){e.blockedOn=i,$e(e.priority,function(){t_(s)});return}}else if(i===31){if(i=h(s),i!==null){e.blockedOn=i,$e(e.priority,function(){t_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=gd(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);gu=l,s.target.dispatchEvent(l),gu=null}else return i=Ba(s),i!==null&&J0(i),e.blockedOn=s,!1;i.shift()}return!0}function a_(e,i,s){gc(e)&&s.delete(i)}function oy(){vd=!1,rs!==null&&gc(rs)&&(rs=null),os!==null&&gc(os)&&(os=null),ls!==null&&gc(ls)&&(ls=null),Wo.forEach(a_),Xo.forEach(a_)}function _c(e,i){e.blockedOn===i&&(e.blockedOn=null,vd||(vd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,oy)))}var vc=null;function s_(e){vc!==e&&(vc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){vc===e&&(vc=null);for(var i=0;i<e.length;i+=3){var s=e[i],l=e[i+1],f=e[i+2];if(typeof l!="function"){if(_d(l||s)===null)continue;break}var d=Ba(s);d!==null&&(e.splice(i,3),i-=3,gf(d,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Nr(e){function i(G){return _c(G,e)}rs!==null&&_c(rs,e),os!==null&&_c(os,e),ls!==null&&_c(ls,e),Wo.forEach(i),Xo.forEach(i);for(var s=0;s<cs.length;s++){var l=cs[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<cs.length&&(s=cs[0],s.blockedOn===null);)i_(s),s.blockedOn===null&&cs.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],d=s[l+1],v=f[me]||null;if(typeof d=="function")v||s_(s);else if(v){var w=null;if(d&&d.hasAttribute("formAction")){if(f=d,v=d[me]||null)w=v.formAction;else if(_d(f)!==null)continue}else w=v.action;typeof w=="function"?s[l+1]=w:(s.splice(l,3),l-=3),s_(s)}}}function r_(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(v){return f=v})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function xd(e){this._internalRoot=e}xc.prototype.render=xd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=xi();K0(s,l,e,i,null,null)},xc.prototype.unmount=xd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;K0(e.current,2,null,e,null,null),Jl(),i[te]=null}};function xc(e){this._internalRoot=e}xc.prototype.unstable_scheduleHydration=function(e){if(e){var i=je();e={blockedOn:null,target:e,priority:i};for(var s=0;s<cs.length&&i!==0&&i<cs[s].priority;s++);cs.splice(s,0,e),s===0&&i_(e)}};var o_=t.version;if(o_!=="19.2.6")throw Error(a(527,o_,"19.2.6"));B.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(i),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var ly={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{ft=Sc.inject(ly),pt=Sc}catch{}}return jo.createRoot=function(e,i){if(!o(e))throw Error(a(299));var s=!1,l="",f=pg,d=mg,v=gg;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError)),i=Z0(e,1,!1,null,null,s,l,null,f,d,v,r_),e[te]=i.current,td(e),new xd(i)},jo.hydrateRoot=function(e,i,s){if(!o(e))throw Error(a(299));var l=!1,f="",d=pg,v=mg,w=gg,G=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(v=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.formState!==void 0&&(G=s.formState)),i=Z0(e,1,!0,i,s??null,l,f,G,d,v,w,r_),i.context=$0(null),s=i.current,l=xi(),l=Ae(l),f=ja(l),f.callback=null,Za(s,f,l),s=l,i.current.lanes=s,ht(i,s),$i(i),e[te]=i.current,td(e),new xc(i)},jo.version="19.2.6",jo}var v_;function xy(){if(v_)return Md.exports;v_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Md.exports=vy(),Md.exports}var Sy=xy();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const up="184",yy=0,x_=1,My=2,jc=1,Mv=2,al=3,Ms=0,ui=1,ta=2,La=0,Kr=1,S_=2,y_=3,M_=4,by=5,qs=100,Ey=101,Ty=102,Ay=103,wy=104,Ry=200,Cy=201,Dy=202,Ny=203,mh=204,gh=205,Uy=206,Ly=207,Oy=208,Iy=209,zy=210,Py=211,Fy=212,By=213,Gy=214,_h=0,vh=1,xh=2,Jr=3,Sh=4,yh=5,Mh=6,bh=7,fp=0,Hy=1,Vy=2,aa=0,bv=1,Ev=2,Tv=3,Av=4,wv=5,Rv=6,Cv=7,Dv=300,Ks=301,to=302,Ad=303,wd=304,uu=306,ll=1e3,Ua=1001,Eh=1002,Xn=1003,ky=1004,yc=1005,$n=1006,Rd=1007,Zs=1008,bi=1009,Nv=1010,Uv=1011,cl=1012,dp=1013,ra=1014,na=1015,za=1016,hp=1017,pp=1018,ul=1020,Lv=35902,Ov=35899,Iv=1021,zv=1022,Wi=1023,Pa=1026,$s=1027,Pv=1028,mp=1029,Qs=1030,gp=1031,_p=1033,Zc=33776,$c=33777,Kc=33778,Qc=33779,Th=35840,Ah=35841,wh=35842,Rh=35843,Ch=36196,Dh=37492,Nh=37496,Uh=37488,Lh=37489,tu=37490,Oh=37491,Ih=37808,zh=37809,Ph=37810,Fh=37811,Bh=37812,Gh=37813,Hh=37814,Vh=37815,kh=37816,Wh=37817,Xh=37818,Yh=37819,qh=37820,jh=37821,Zh=36492,$h=36494,Kh=36495,Qh=36283,Jh=36284,eu=36285,tp=36286,Wy=3200,nu=0,Xy=1,xs="",Oi="srgb",iu="srgb-linear",au="linear",nn="srgb",Ur=7680,b_=519,Yy=512,qy=513,jy=514,vp=515,Zy=516,$y=517,xp=518,Ky=519,ep=35044,E_="300 es",ia=2e3,fl=2001;function Qy(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function su(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Jy(){const r=su("canvas");return r.style.display="block",r}const T_={};function ru(...r){const t="THREE."+r.shift();console.log(t,...r)}function Fv(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=r[1];n&&n.isStackTrace?r[0]+=" "+n.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function pe(...r){r=Fv(r);const t="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...r)}}function Fe(...r){r=Fv(r);const t="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...r)}}function np(...r){const t=r.join(" ");t in T_||(T_[t]=!0,pe(...r))}function tM(r,t,n){return new Promise(function(a,o){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const eM={[_h]:vh,[xh]:Mh,[Sh]:bh,[Jr]:yh,[vh]:_h,[Mh]:xh,[bh]:Sh,[yh]:Jr};class Js{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cd=Math.PI/180,ip=180/Math.PI;function ys(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(jn[r&255]+jn[r>>8&255]+jn[r>>16&255]+jn[r>>24&255]+"-"+jn[t&255]+jn[t>>8&255]+"-"+jn[t>>16&15|64]+jn[t>>24&255]+"-"+jn[n&63|128]+jn[n>>8&255]+"-"+jn[n>>16&255]+jn[n>>24&255]+jn[a&255]+jn[a>>8&255]+jn[a>>16&255]+jn[a>>24&255]).toLowerCase()}function Ge(r,t,n){return Math.max(t,Math.min(n,r))}function nM(r,t){return(r%t+t)%t}function Dd(r,t,n){return(1-n)*r+n*t}function ea(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function on(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Tp=class Tp{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Ge(this.x,t.x,n.x),this.y=Ge(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Ge(this.x,t,n),this.y=Ge(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ge(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Ge(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*a-u*o+t.x,this.y=c*o+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Tp.prototype.isVector2=!0;let Re=Tp;class io{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,c,u,h){let m=a[o+0],p=a[o+1],_=a[o+2],S=a[o+3],g=c[u+0],M=c[u+1],E=c[u+2],R=c[u+3];if(S!==R||m!==g||p!==M||_!==E){let y=m*g+p*M+_*E+S*R;y<0&&(g=-g,M=-M,E=-E,R=-R,y=-y);let x=1-h;if(y<.9995){const C=Math.acos(y),L=Math.sin(C);x=Math.sin(x*C)/L,h=Math.sin(h*C)/L,m=m*x+g*h,p=p*x+M*h,_=_*x+E*h,S=S*x+R*h}else{m=m*x+g*h,p=p*x+M*h,_=_*x+E*h,S=S*x+R*h;const C=1/Math.sqrt(m*m+p*p+_*_+S*S);m*=C,p*=C,_*=C,S*=C}}t[n]=m,t[n+1]=p,t[n+2]=_,t[n+3]=S}static multiplyQuaternionsFlat(t,n,a,o,c,u){const h=a[o],m=a[o+1],p=a[o+2],_=a[o+3],S=c[u],g=c[u+1],M=c[u+2],E=c[u+3];return t[n]=h*E+_*S+m*M-p*g,t[n+1]=m*E+_*g+p*S-h*M,t[n+2]=p*E+_*M+h*g-m*S,t[n+3]=_*E-h*S-m*g-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,c=t._z,u=t._order,h=Math.cos,m=Math.sin,p=h(a/2),_=h(o/2),S=h(c/2),g=m(a/2),M=m(o/2),E=m(c/2);switch(u){case"XYZ":this._x=g*_*S+p*M*E,this._y=p*M*S-g*_*E,this._z=p*_*E+g*M*S,this._w=p*_*S-g*M*E;break;case"YXZ":this._x=g*_*S+p*M*E,this._y=p*M*S-g*_*E,this._z=p*_*E-g*M*S,this._w=p*_*S+g*M*E;break;case"ZXY":this._x=g*_*S-p*M*E,this._y=p*M*S+g*_*E,this._z=p*_*E+g*M*S,this._w=p*_*S-g*M*E;break;case"ZYX":this._x=g*_*S-p*M*E,this._y=p*M*S+g*_*E,this._z=p*_*E-g*M*S,this._w=p*_*S+g*M*E;break;case"YZX":this._x=g*_*S+p*M*E,this._y=p*M*S+g*_*E,this._z=p*_*E-g*M*S,this._w=p*_*S-g*M*E;break;case"XZY":this._x=g*_*S-p*M*E,this._y=p*M*S-g*_*E,this._z=p*_*E+g*M*S,this._w=p*_*S+g*M*E;break;default:pe("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],c=n[8],u=n[1],h=n[5],m=n[9],p=n[2],_=n[6],S=n[10],g=a+h+S;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(_-m)*M,this._y=(c-p)*M,this._z=(u-o)*M}else if(a>h&&a>S){const M=2*Math.sqrt(1+a-h-S);this._w=(_-m)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(c+p)/M}else if(h>S){const M=2*Math.sqrt(1+h-a-S);this._w=(c-p)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+S-a-h);this._w=(u-o)/M,this._x=(c+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,c=t._z,u=t._w,h=n._x,m=n._y,p=n._z,_=n._w;return this._x=a*_+u*h+o*p-c*m,this._y=o*_+u*m+c*h-a*p,this._z=c*_+u*p+a*m-o*h,this._w=u*_-a*h-o*m-c*p,this._onChangeCallback(),this}slerp(t,n){let a=t._x,o=t._y,c=t._z,u=t._w,h=this.dot(t);h<0&&(a=-a,o=-o,c=-c,u=-u,h=-h);let m=1-n;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,n=Math.sin(n*p)/_,this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ap=class Ap{constructor(t=0,n=0,a=0){this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(A_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(A_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,c=t.x,u=t.y,h=t.z,m=t.w,p=2*(u*o-h*a),_=2*(h*n-c*o),S=2*(c*a-u*n);return this.x=n+m*p+u*S-h*_,this.y=a+m*_+h*p-c*S,this.z=o+m*S+c*_-u*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Ge(this.x,t.x,n.x),this.y=Ge(this.y,t.y,n.y),this.z=Ge(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Ge(this.x,t,n),this.y=Ge(this.y,t,n),this.z=Ge(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ge(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,c=t.z,u=n.x,h=n.y,m=n.z;return this.x=o*m-c*h,this.y=c*u-a*m,this.z=a*h-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Nd.copy(this).projectOnVector(t),this.sub(Nd)}reflect(t){return this.sub(Nd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Ge(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ap.prototype.isVector3=!0;let $=Ap;const Nd=new $,A_=new io,wp=class wp{constructor(t,n,a,o,c,u,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,h,m,p)}set(t,n,a,o,c,u,h,m,p){const _=this.elements;return _[0]=t,_[1]=o,_[2]=h,_[3]=n,_[4]=c,_[5]=m,_[6]=a,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],h=a[3],m=a[6],p=a[1],_=a[4],S=a[7],g=a[2],M=a[5],E=a[8],R=o[0],y=o[3],x=o[6],C=o[1],L=o[4],U=o[7],V=o[2],N=o[5],P=o[8];return c[0]=u*R+h*C+m*V,c[3]=u*y+h*L+m*N,c[6]=u*x+h*U+m*P,c[1]=p*R+_*C+S*V,c[4]=p*y+_*L+S*N,c[7]=p*x+_*U+S*P,c[2]=g*R+M*C+E*V,c[5]=g*y+M*L+E*N,c[8]=g*x+M*U+E*P,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],m=t[6],p=t[7],_=t[8];return n*u*_-n*h*p-a*c*_+a*h*m+o*c*p-o*u*m}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],m=t[6],p=t[7],_=t[8],S=_*u-h*p,g=h*m-_*c,M=p*c-u*m,E=n*S+a*g+o*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=S*R,t[1]=(o*p-_*a)*R,t[2]=(h*a-o*u)*R,t[3]=g*R,t[4]=(_*n-o*m)*R,t[5]=(o*c-h*n)*R,t[6]=M*R,t[7]=(a*m-p*n)*R,t[8]=(u*n-a*c)*R,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,c,u,h){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*u+p*h)+u+t,-o*p,o*m,-o*(-p*u+m*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(Ud.makeScale(t,n)),this}rotate(t){return this.premultiply(Ud.makeRotation(-t)),this}translate(t,n){return this.premultiply(Ud.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}};wp.prototype.isMatrix3=!0;let ve=wp;const Ud=new ve,w_=new ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),R_=new ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iM(){const r={enabled:!0,workingColorSpace:iu,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===nn&&(o.r=Oa(o.r),o.g=Oa(o.g),o.b=Oa(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===nn&&(o.r=Qr(o.r),o.g=Qr(o.g),o.b=Qr(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===xs?au:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return np("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return np("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[iu]:{primaries:t,whitePoint:a,transfer:au,toXYZ:w_,fromXYZ:R_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Oi},outputColorSpaceConfig:{drawingBufferColorSpace:Oi}},[Oi]:{primaries:t,whitePoint:a,transfer:nn,toXYZ:w_,fromXYZ:R_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Oi}}}),r}const Be=iM();function Oa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Qr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Lr;class aM{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{Lr===void 0&&(Lr=su("canvas")),Lr.width=t.width,Lr.height=t.height;const o=Lr.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=Lr}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=su("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Oa(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Oa(n[a]/255)*255):n[a]=Oa(n[a]);return{data:n,width:t.width,height:t.height}}else return pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sM=0;class Sp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=ys(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(Ld(o[u].image)):c.push(Ld(o[u]))}else c=Ld(o);a.url=c}return n||(t.images[this.uuid]=a),a}}function Ld(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?aM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(pe("Texture: Unable to serialize Texture."),{})}let rM=0;const Od=new $;class Kn extends Js{constructor(t=Kn.DEFAULT_IMAGE,n=Kn.DEFAULT_MAPPING,a=Ua,o=Ua,c=$n,u=Zs,h=Wi,m=bi,p=Kn.DEFAULT_ANISOTROPY,_=xs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=ys(),this.name="",this.source=new Sp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Od).x}get height(){return this.source.getSize(Od).y}get depth(){return this.source.getSize(Od).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){pe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){pe(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ll:t.x=t.x-Math.floor(t.x);break;case Ua:t.x=t.x<0?0:1;break;case Eh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ll:t.y=t.y-Math.floor(t.y);break;case Ua:t.y=t.y<0?0:1;break;case Eh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=Dv;Kn.DEFAULT_ANISOTROPY=1;const Rp=class Rp{constructor(t=0,n=0,a=0,o=1){this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,c;const m=t.elements,p=m[0],_=m[4],S=m[8],g=m[1],M=m[5],E=m[9],R=m[2],y=m[6],x=m[10];if(Math.abs(_-g)<.01&&Math.abs(S-R)<.01&&Math.abs(E-y)<.01){if(Math.abs(_+g)<.1&&Math.abs(S+R)<.1&&Math.abs(E+y)<.1&&Math.abs(p+M+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(p+1)/2,U=(M+1)/2,V=(x+1)/2,N=(_+g)/4,P=(S+R)/4,T=(E+y)/4;return L>U&&L>V?L<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(L),o=N/a,c=P/a):U>V?U<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(U),a=N/o,c=T/o):V<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(V),a=P/c,o=T/c),this.set(a,o,c,n),this}let C=Math.sqrt((y-E)*(y-E)+(S-R)*(S-R)+(g-_)*(g-_));return Math.abs(C)<.001&&(C=1),this.x=(y-E)/C,this.y=(S-R)/C,this.z=(g-_)/C,this.w=Math.acos((p+M+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Ge(this.x,t.x,n.x),this.y=Ge(this.y,t.y,n.y),this.z=Ge(this.z,t.z,n.z),this.w=Ge(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Ge(this.x,t,n),this.y=Ge(this.y,t,n),this.z=Ge(this.z,t,n),this.w=Ge(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ge(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Rp.prototype.isVector4=!0;let Mn=Rp;class oM extends Js{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new Mn(0,0,t,n),this.scissorTest=!1,this.viewport=new Mn(0,0,t,n),this.textures=[];const o={width:t,height:n,depth:a.depth},c=new Kn(o),u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:$n,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new Sp(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sa extends oM{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class Bv extends Kn{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class lM extends Kn{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cu=class cu{constructor(t,n,a,o,c,u,h,m,p,_,S,g,M,E,R,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,h,m,p,_,S,g,M,E,R,y)}set(t,n,a,o,c,u,h,m,p,_,S,g,M,E,R,y){const x=this.elements;return x[0]=t,x[4]=n,x[8]=a,x[12]=o,x[1]=c,x[5]=u,x[9]=h,x[13]=m,x[2]=p,x[6]=_,x[10]=S,x[14]=g,x[3]=M,x[7]=E,x[11]=R,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cu().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,a=t.elements,o=1/Or.setFromMatrixColumn(t,0).length(),c=1/Or.setFromMatrixColumn(t,1).length(),u=1/Or.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,c=t.z,u=Math.cos(a),h=Math.sin(a),m=Math.cos(o),p=Math.sin(o),_=Math.cos(c),S=Math.sin(c);if(t.order==="XYZ"){const g=u*_,M=u*S,E=h*_,R=h*S;n[0]=m*_,n[4]=-m*S,n[8]=p,n[1]=M+E*p,n[5]=g-R*p,n[9]=-h*m,n[2]=R-g*p,n[6]=E+M*p,n[10]=u*m}else if(t.order==="YXZ"){const g=m*_,M=m*S,E=p*_,R=p*S;n[0]=g+R*h,n[4]=E*h-M,n[8]=u*p,n[1]=u*S,n[5]=u*_,n[9]=-h,n[2]=M*h-E,n[6]=R+g*h,n[10]=u*m}else if(t.order==="ZXY"){const g=m*_,M=m*S,E=p*_,R=p*S;n[0]=g-R*h,n[4]=-u*S,n[8]=E+M*h,n[1]=M+E*h,n[5]=u*_,n[9]=R-g*h,n[2]=-u*p,n[6]=h,n[10]=u*m}else if(t.order==="ZYX"){const g=u*_,M=u*S,E=h*_,R=h*S;n[0]=m*_,n[4]=E*p-M,n[8]=g*p+R,n[1]=m*S,n[5]=R*p+g,n[9]=M*p-E,n[2]=-p,n[6]=h*m,n[10]=u*m}else if(t.order==="YZX"){const g=u*m,M=u*p,E=h*m,R=h*p;n[0]=m*_,n[4]=R-g*S,n[8]=E*S+M,n[1]=S,n[5]=u*_,n[9]=-h*_,n[2]=-p*_,n[6]=M*S+E,n[10]=g-R*S}else if(t.order==="XZY"){const g=u*m,M=u*p,E=h*m,R=h*p;n[0]=m*_,n[4]=-S,n[8]=p*_,n[1]=g*S+R,n[5]=u*_,n[9]=M*S-E,n[2]=E*S-M,n[6]=h*_,n[10]=R*S+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cM,t,uM)}lookAt(t,n,a){const o=this.elements;return Si.subVectors(t,n),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),fs.crossVectors(a,Si),fs.lengthSq()===0&&(Math.abs(a.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),fs.crossVectors(a,Si)),fs.normalize(),Mc.crossVectors(Si,fs),o[0]=fs.x,o[4]=Mc.x,o[8]=Si.x,o[1]=fs.y,o[5]=Mc.y,o[9]=Si.y,o[2]=fs.z,o[6]=Mc.z,o[10]=Si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],h=a[4],m=a[8],p=a[12],_=a[1],S=a[5],g=a[9],M=a[13],E=a[2],R=a[6],y=a[10],x=a[14],C=a[3],L=a[7],U=a[11],V=a[15],N=o[0],P=o[4],T=o[8],F=o[12],Z=o[1],H=o[5],K=o[9],dt=o[13],mt=o[2],X=o[6],O=o[10],B=o[14],st=o[3],vt=o[7],At=o[11],I=o[15];return c[0]=u*N+h*Z+m*mt+p*st,c[4]=u*P+h*H+m*X+p*vt,c[8]=u*T+h*K+m*O+p*At,c[12]=u*F+h*dt+m*B+p*I,c[1]=_*N+S*Z+g*mt+M*st,c[5]=_*P+S*H+g*X+M*vt,c[9]=_*T+S*K+g*O+M*At,c[13]=_*F+S*dt+g*B+M*I,c[2]=E*N+R*Z+y*mt+x*st,c[6]=E*P+R*H+y*X+x*vt,c[10]=E*T+R*K+y*O+x*At,c[14]=E*F+R*dt+y*B+x*I,c[3]=C*N+L*Z+U*mt+V*st,c[7]=C*P+L*H+U*X+V*vt,c[11]=C*T+L*K+U*O+V*At,c[15]=C*F+L*dt+U*B+V*I,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[12],u=t[1],h=t[5],m=t[9],p=t[13],_=t[2],S=t[6],g=t[10],M=t[14],E=t[3],R=t[7],y=t[11],x=t[15],C=m*M-p*g,L=h*M-p*S,U=h*g-m*S,V=u*M-p*_,N=u*g-m*_,P=u*S-h*_;return n*(R*C-y*L+x*U)-a*(E*C-y*V+x*N)+o*(E*L-R*V+x*P)-c*(E*U-R*N+y*P)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],m=t[6],p=t[7],_=t[8],S=t[9],g=t[10],M=t[11],E=t[12],R=t[13],y=t[14],x=t[15],C=n*h-a*u,L=n*m-o*u,U=n*p-c*u,V=a*m-o*h,N=a*p-c*h,P=o*p-c*m,T=_*R-S*E,F=_*y-g*E,Z=_*x-M*E,H=S*y-g*R,K=S*x-M*R,dt=g*x-M*y,mt=C*dt-L*K+U*H+V*Z-N*F+P*T;if(mt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/mt;return t[0]=(h*dt-m*K+p*H)*X,t[1]=(o*K-a*dt-c*H)*X,t[2]=(R*P-y*N+x*V)*X,t[3]=(g*N-S*P-M*V)*X,t[4]=(m*Z-u*dt-p*F)*X,t[5]=(n*dt-o*Z+c*F)*X,t[6]=(y*U-E*P-x*L)*X,t[7]=(_*P-g*U+M*L)*X,t[8]=(u*K-h*Z+p*T)*X,t[9]=(a*Z-n*K-c*T)*X,t[10]=(E*N-R*U+x*C)*X,t[11]=(S*U-_*N-M*C)*X,t[12]=(h*F-u*H-m*T)*X,t[13]=(n*H-a*F+o*T)*X,t[14]=(R*L-E*V-y*C)*X,t[15]=(_*V-S*L+g*C)*X,this}scale(t){const n=this.elements,a=t.x,o=t.y,c=t.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=t.x,h=t.y,m=t.z,p=c*u,_=c*h;return this.set(p*u+a,p*h-o*m,p*m+o*h,0,p*h+o*m,_*h+a,_*m-o*u,0,p*m-o*h,_*m+o*u,c*m*m+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,c,u){return this.set(1,a,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,c=n._x,u=n._y,h=n._z,m=n._w,p=c+c,_=u+u,S=h+h,g=c*p,M=c*_,E=c*S,R=u*_,y=u*S,x=h*S,C=m*p,L=m*_,U=m*S,V=a.x,N=a.y,P=a.z;return o[0]=(1-(R+x))*V,o[1]=(M+U)*V,o[2]=(E-L)*V,o[3]=0,o[4]=(M-U)*N,o[5]=(1-(g+x))*N,o[6]=(y+C)*N,o[7]=0,o[8]=(E+L)*P,o[9]=(y-C)*P,o[10]=(1-(g+R))*P,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;t.x=o[12],t.y=o[13],t.z=o[14];const c=this.determinant();if(c===0)return a.set(1,1,1),n.identity(),this;let u=Or.set(o[0],o[1],o[2]).length();const h=Or.set(o[4],o[5],o[6]).length(),m=Or.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Hi.copy(this);const p=1/u,_=1/h,S=1/m;return Hi.elements[0]*=p,Hi.elements[1]*=p,Hi.elements[2]*=p,Hi.elements[4]*=_,Hi.elements[5]*=_,Hi.elements[6]*=_,Hi.elements[8]*=S,Hi.elements[9]*=S,Hi.elements[10]*=S,n.setFromRotationMatrix(Hi),a.x=u,a.y=h,a.z=m,this}makePerspective(t,n,a,o,c,u,h=ia,m=!1){const p=this.elements,_=2*c/(n-t),S=2*c/(a-o),g=(n+t)/(n-t),M=(a+o)/(a-o);let E,R;if(m)E=c/(u-c),R=u*c/(u-c);else if(h===ia)E=-(u+c)/(u-c),R=-2*u*c/(u-c);else if(h===fl)E=-u/(u-c),R=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=S,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,a,o,c,u,h=ia,m=!1){const p=this.elements,_=2/(n-t),S=2/(a-o),g=-(n+t)/(n-t),M=-(a+o)/(a-o);let E,R;if(m)E=1/(u-c),R=u/(u-c);else if(h===ia)E=-2/(u-c),R=-(u+c)/(u-c);else if(h===fl)E=-1/(u-c),R=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=S,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}};cu.prototype.isMatrix4=!0;let xn=cu;const Or=new $,Hi=new xn,cM=new $(0,0,0),uM=new $(1,1,1),fs=new $,Mc=new $,Si=new $,C_=new xn,D_=new io;class oa{constructor(t=0,n=0,a=0,o=oa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,c=o[0],u=o[4],h=o[8],m=o[1],p=o[5],_=o[9],S=o[2],g=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(Ge(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ge(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Ge(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return C_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(C_,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return D_.setFromEuler(this),this.setFromQuaternion(D_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oa.DEFAULT_ORDER="XYZ";class yp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let fM=0;const N_=new $,Ir=new io,wa=new xn,bc=new $,Zo=new $,dM=new $,hM=new io,U_=new $(1,0,0),L_=new $(0,1,0),O_=new $(0,0,1),I_={type:"added"},pM={type:"removed"},zr={type:"childadded",child:null},Id={type:"childremoved",child:null};class ei extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ei.DEFAULT_UP.clone();const t=new $,n=new oa,a=new io,o=new $(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new xn},normalMatrix:{value:new ve}}),this.matrix=new xn,this.matrixWorld=new xn,this.matrixAutoUpdate=ei.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ir.setFromAxisAngle(t,n),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(t,n){return Ir.setFromAxisAngle(t,n),this.quaternion.premultiply(Ir),this}rotateX(t){return this.rotateOnAxis(U_,t)}rotateY(t){return this.rotateOnAxis(L_,t)}rotateZ(t){return this.rotateOnAxis(O_,t)}translateOnAxis(t,n){return N_.copy(t).applyQuaternion(this.quaternion),this.position.add(N_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(U_,t)}translateY(t){return this.translateOnAxis(L_,t)}translateZ(t){return this.translateOnAxis(O_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wa.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?bc.copy(t):bc.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wa.lookAt(Zo,bc,this.up):wa.lookAt(bc,Zo,this.up),this.quaternion.setFromRotationMatrix(wa),o&&(wa.extractRotation(o.matrixWorld),Ir.setFromRotationMatrix(wa),this.quaternion.premultiply(Ir.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Fe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(I_),zr.child=t,this.dispatchEvent(zr),zr.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(pM),Id.child=t,this.dispatchEvent(Id),Id.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wa.multiply(t.parent.matrixWorld)),t.applyMatrix4(wa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(I_),zr.child=t,this.dispatchEvent(zr),zr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,t,dM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,hM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,a=t.y,o=t.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*a-c[8]*o,c[13]+=a-c[1]*n-c[5]*a-c[9]*o,c[14]+=o-c[2]*n-c[6]*a-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const S=m[p];c(t.shapes,S)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));o.material=h}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(t.animations,m))}}if(n){const h=u(t.geometries),m=u(t.materials),p=u(t.textures),_=u(t.images),S=u(t.shapes),g=u(t.skeletons),M=u(t.animations),E=u(t.nodes);h.length>0&&(a.geometries=h),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),_.length>0&&(a.images=_),S.length>0&&(a.shapes=S),g.length>0&&(a.skeletons=g),M.length>0&&(a.animations=M),E.length>0&&(a.nodes=E)}return a.object=o,a;function u(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}ei.DEFAULT_UP=new $(0,1,0);ei.DEFAULT_MATRIX_AUTO_UPDATE=!0;ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ec extends ei{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mM={type:"move"};class zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ec,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ec,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ec,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,c=null,u=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){u=!0;for(const R of t.hand.values()){const y=n.getJointPose(R,a),x=this._getHandJoint(p,R);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const _=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],g=_.position.distanceTo(S.position),M=.02,E=.005;p.inputState.pinching&&g>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));h!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(mM)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Ec;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}const Gv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},Tc={h:0,s:0,l:0};function Pd(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class Oe{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Oi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Be.colorSpaceToWorking(this,n),this}setRGB(t,n,a,o=Be.workingColorSpace){return this.r=t,this.g=n,this.b=a,Be.colorSpaceToWorking(this,o),this}setHSL(t,n,a,o=Be.workingColorSpace){if(t=nM(t,1),n=Ge(n,0,1),a=Ge(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=Pd(u,c,t+1/3),this.g=Pd(u,c,t),this.b=Pd(u,c,t-1/3)}return Be.colorSpaceToWorking(this,o),this}setStyle(t,n=Oi){function a(c){c!==void 0&&parseFloat(c)<1&&pe("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:pe("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);pe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Oi){const a=Gv[t.toLowerCase()];return a!==void 0?this.setHex(a,n):pe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oa(t.r),this.g=Oa(t.g),this.b=Oa(t.b),this}copyLinearToSRGB(t){return this.r=Qr(t.r),this.g=Qr(t.g),this.b=Qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oi){return Be.workingToColorSpace(Zn.copy(this),t),Math.round(Ge(Zn.r*255,0,255))*65536+Math.round(Ge(Zn.g*255,0,255))*256+Math.round(Ge(Zn.b*255,0,255))}getHexString(t=Oi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Be.workingColorSpace){Be.workingToColorSpace(Zn.copy(this),n);const a=Zn.r,o=Zn.g,c=Zn.b,u=Math.max(a,o,c),h=Math.min(a,o,c);let m,p;const _=(h+u)/2;if(h===u)m=0,p=0;else{const S=u-h;switch(p=_<=.5?S/(u+h):S/(2-u-h),u){case a:m=(o-c)/S+(o<c?6:0);break;case o:m=(c-a)/S+2;break;case c:m=(a-o)/S+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,n=Be.workingColorSpace){return Be.workingToColorSpace(Zn.copy(this),n),t.r=Zn.r,t.g=Zn.g,t.b=Zn.b,t}getStyle(t=Oi){Be.workingToColorSpace(Zn.copy(this),t);const n=Zn.r,a=Zn.g,o=Zn.b;return t!==Oi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(ds),this.setHSL(ds.h+t,ds.s+n,ds.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(ds),t.getHSL(Tc);const a=Dd(ds.h,Tc.h,n),o=Dd(ds.s,Tc.s,n),c=Dd(ds.l,Tc.l,n);return this.setHSL(a,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zn=new Oe;Oe.NAMES=Gv;class Mp{constructor(t,n=1,a=1e3){this.isFog=!0,this.name="",this.color=new Oe(t),this.near=n,this.far=a}clone(){return new Mp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class gM extends ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oa,this.environmentIntensity=1,this.environmentRotation=new oa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Vi=new $,Ra=new $,Fd=new $,Ca=new $,Pr=new $,Fr=new $,z_=new $,Bd=new $,Gd=new $,Hd=new $,Vd=new Mn,kd=new Mn,Wd=new Mn;class Ii{constructor(t=new $,n=new $,a=new $){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),Vi.subVectors(t,n),o.cross(Vi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,a,o,c){Vi.subVectors(o,n),Ra.subVectors(a,n),Fd.subVectors(t,n);const u=Vi.dot(Vi),h=Vi.dot(Ra),m=Vi.dot(Fd),p=Ra.dot(Ra),_=Ra.dot(Fd),S=u*p-h*h;if(S===0)return c.set(0,0,0),null;const g=1/S,M=(p*m-h*_)*g,E=(u*_-h*m)*g;return c.set(1-M-E,E,M)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,Ca)===null?!1:Ca.x>=0&&Ca.y>=0&&Ca.x+Ca.y<=1}static getInterpolation(t,n,a,o,c,u,h,m){return this.getBarycoord(t,n,a,o,Ca)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ca.x),m.addScaledVector(u,Ca.y),m.addScaledVector(h,Ca.z),m)}static getInterpolatedAttribute(t,n,a,o,c,u){return Vd.setScalar(0),kd.setScalar(0),Wd.setScalar(0),Vd.fromBufferAttribute(t,n),kd.fromBufferAttribute(t,a),Wd.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(Vd,c.x),u.addScaledVector(kd,c.y),u.addScaledVector(Wd,c.z),u}static isFrontFacing(t,n,a,o){return Vi.subVectors(a,n),Ra.subVectors(t,n),Vi.cross(Ra).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vi.subVectors(this.c,this.b),Ra.subVectors(this.a,this.b),Vi.cross(Ra).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ii.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ii.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,c){return Ii.getInterpolation(t,this.a,this.b,this.c,n,a,o,c)}containsPoint(t){return Ii.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ii.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,c=this.c;let u,h;Pr.subVectors(o,a),Fr.subVectors(c,a),Bd.subVectors(t,a);const m=Pr.dot(Bd),p=Fr.dot(Bd);if(m<=0&&p<=0)return n.copy(a);Gd.subVectors(t,o);const _=Pr.dot(Gd),S=Fr.dot(Gd);if(_>=0&&S<=_)return n.copy(o);const g=m*S-_*p;if(g<=0&&m>=0&&_<=0)return u=m/(m-_),n.copy(a).addScaledVector(Pr,u);Hd.subVectors(t,c);const M=Pr.dot(Hd),E=Fr.dot(Hd);if(E>=0&&M<=E)return n.copy(c);const R=M*p-m*E;if(R<=0&&p>=0&&E<=0)return h=p/(p-E),n.copy(a).addScaledVector(Fr,h);const y=_*E-M*S;if(y<=0&&S-_>=0&&M-E>=0)return z_.subVectors(c,o),h=(S-_)/(S-_+(M-E)),n.copy(o).addScaledVector(z_,h);const x=1/(y+R+g);return u=R*x,h=g*x,n.copy(a).addScaledVector(Pr,u).addScaledVector(Fr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class tr{constructor(t=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(ki.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(ki.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=ki.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)t.isMesh===!0?t.getVertexPosition(u,ki):ki.fromBufferAttribute(c,u),ki.applyMatrix4(t.matrixWorld),this.expandByPoint(ki);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ac.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Ac.copy(a.boundingBox)),Ac.applyMatrix4(t.matrixWorld),this.union(Ac)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ki),ki.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($o),wc.subVectors(this.max,$o),Br.subVectors(t.a,$o),Gr.subVectors(t.b,$o),Hr.subVectors(t.c,$o),hs.subVectors(Gr,Br),ps.subVectors(Hr,Gr),Vs.subVectors(Br,Hr);let n=[0,-hs.z,hs.y,0,-ps.z,ps.y,0,-Vs.z,Vs.y,hs.z,0,-hs.x,ps.z,0,-ps.x,Vs.z,0,-Vs.x,-hs.y,hs.x,0,-ps.y,ps.x,0,-Vs.y,Vs.x,0];return!Xd(n,Br,Gr,Hr,wc)||(n=[1,0,0,0,1,0,0,0,1],!Xd(n,Br,Gr,Hr,wc))?!1:(Rc.crossVectors(hs,ps),n=[Rc.x,Rc.y,Rc.z],Xd(n,Br,Gr,Hr,wc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ki).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ki).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Da),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Da=[new $,new $,new $,new $,new $,new $,new $,new $],ki=new $,Ac=new tr,Br=new $,Gr=new $,Hr=new $,hs=new $,ps=new $,Vs=new $,$o=new $,wc=new $,Rc=new $,ks=new $;function Xd(r,t,n,a,o){for(let c=0,u=r.length-3;c<=u;c+=3){ks.fromArray(r,c);const h=o.x*Math.abs(ks.x)+o.y*Math.abs(ks.y)+o.z*Math.abs(ks.z),m=t.dot(ks),p=n.dot(ks),_=a.dot(ks);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const Un=new $,Cc=new Re;let _M=0;class Xi extends Js{constructor(t,n,a=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_M++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=ep,this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Cc.fromBufferAttribute(this,n),Cc.applyMatrix3(t),this.setXY(n,Cc.x,Cc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Un.fromBufferAttribute(this,n),Un.applyMatrix3(t),this.setXYZ(n,Un.x,Un.y,Un.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)Un.fromBufferAttribute(this,n),Un.applyMatrix4(t),this.setXYZ(n,Un.x,Un.y,Un.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)Un.fromBufferAttribute(this,n),Un.applyNormalMatrix(t),this.setXYZ(n,Un.x,Un.y,Un.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)Un.fromBufferAttribute(this,n),Un.transformDirection(t),this.setXYZ(n,Un.x,Un.y,Un.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=ea(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=on(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=ea(n,this.array)),n}setX(t,n){return this.normalized&&(n=on(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=ea(n,this.array)),n}setY(t,n){return this.normalized&&(n=on(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=ea(n,this.array)),n}setZ(t,n){return this.normalized&&(n=on(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=ea(n,this.array)),n}setW(t,n){return this.normalized&&(n=on(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=on(n,this.array),a=on(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=on(n,this.array),a=on(a,this.array),o=on(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t*=this.itemSize,this.normalized&&(n=on(n,this.array),a=on(a,this.array),o=on(o,this.array),c=on(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ep&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Hv extends Xi{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class Vv extends Xi{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class Ia extends Xi{constructor(t,n,a){super(new Float32Array(t),n,a)}}const vM=new tr,Ko=new $,Yd=new $;class bp{constructor(t=new $,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):vM.setFromPoints(t).getCenter(a);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ko.subVectors(t,this.center);const n=Ko.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(Ko,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ko.copy(t.center).add(Yd)),this.expandByPoint(Ko.copy(t.center).sub(Yd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let xM=0;const Ui=new xn,qd=new ei,Vr=new $,yi=new tr,Qo=new tr,Bn=new $;class ca extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qy(t)?Vv:Hv)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new ve().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ui.makeRotationFromQuaternion(t),this.applyMatrix4(Ui),this}rotateX(t){return Ui.makeRotationX(t),this.applyMatrix4(Ui),this}rotateY(t){return Ui.makeRotationY(t),this.applyMatrix4(Ui),this}rotateZ(t){return Ui.makeRotationZ(t),this.applyMatrix4(Ui),this}translate(t,n,a){return Ui.makeTranslation(t,n,a),this.applyMatrix4(Ui),this}scale(t,n,a){return Ui.makeScale(t,n,a),this.applyMatrix4(Ui),this}lookAt(t){return qd.lookAt(t),qd.updateMatrix(),this.applyMatrix4(qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ia(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];yi.setFromBufferAttribute(c),this.morphTargetsRelative?(Bn.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(Bn),Bn.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(Bn)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bp);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const a=this.boundingSphere.center;if(yi.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];Qo.setFromBufferAttribute(h),this.morphTargetsRelative?(Bn.addVectors(yi.min,Qo.min),yi.expandByPoint(Bn),Bn.addVectors(yi.max,Qo.max),yi.expandByPoint(Bn)):(yi.expandByPoint(Qo.min),yi.expandByPoint(Qo.max))}yi.getCenter(a);let o=0;for(let c=0,u=t.count;c<u;c++)Bn.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(Bn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)Bn.fromBufferAttribute(h,p),m&&(Vr.fromBufferAttribute(t,p),Bn.add(Vr)),o=Math.max(o,a.distanceToSquared(Bn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xi(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),h=[],m=[];for(let T=0;T<a.count;T++)h[T]=new $,m[T]=new $;const p=new $,_=new $,S=new $,g=new Re,M=new Re,E=new Re,R=new $,y=new $;function x(T,F,Z){p.fromBufferAttribute(a,T),_.fromBufferAttribute(a,F),S.fromBufferAttribute(a,Z),g.fromBufferAttribute(c,T),M.fromBufferAttribute(c,F),E.fromBufferAttribute(c,Z),_.sub(p),S.sub(p),M.sub(g),E.sub(g);const H=1/(M.x*E.y-E.x*M.y);isFinite(H)&&(R.copy(_).multiplyScalar(E.y).addScaledVector(S,-M.y).multiplyScalar(H),y.copy(S).multiplyScalar(M.x).addScaledVector(_,-E.x).multiplyScalar(H),h[T].add(R),h[F].add(R),h[Z].add(R),m[T].add(y),m[F].add(y),m[Z].add(y))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let T=0,F=C.length;T<F;++T){const Z=C[T],H=Z.start,K=Z.count;for(let dt=H,mt=H+K;dt<mt;dt+=3)x(t.getX(dt+0),t.getX(dt+1),t.getX(dt+2))}const L=new $,U=new $,V=new $,N=new $;function P(T){V.fromBufferAttribute(o,T),N.copy(V);const F=h[T];L.copy(F),L.sub(V.multiplyScalar(V.dot(F))).normalize(),U.crossVectors(N,F);const H=U.dot(m[T])<0?-1:1;u.setXYZW(T,L.x,L.y,L.z,H)}for(let T=0,F=C.length;T<F;++T){const Z=C[T],H=Z.start,K=Z.count;for(let dt=H,mt=H+K;dt<mt;dt+=3)P(t.getX(dt+0)),P(t.getX(dt+1)),P(t.getX(dt+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Xi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let g=0,M=a.count;g<M;g++)a.setXYZ(g,0,0,0);const o=new $,c=new $,u=new $,h=new $,m=new $,p=new $,_=new $,S=new $;if(t)for(let g=0,M=t.count;g<M;g+=3){const E=t.getX(g+0),R=t.getX(g+1),y=t.getX(g+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,y),_.subVectors(u,c),S.subVectors(o,c),_.cross(S),h.fromBufferAttribute(a,E),m.fromBufferAttribute(a,R),p.fromBufferAttribute(a,y),h.add(_),m.add(_),p.add(_),a.setXYZ(E,h.x,h.y,h.z),a.setXYZ(R,m.x,m.y,m.z),a.setXYZ(y,p.x,p.y,p.z)}else for(let g=0,M=n.count;g<M;g+=3)o.fromBufferAttribute(n,g+0),c.fromBufferAttribute(n,g+1),u.fromBufferAttribute(n,g+2),_.subVectors(u,c),S.subVectors(o,c),_.cross(S),a.setXYZ(g+0,_.x,_.y,_.z),a.setXYZ(g+1,_.x,_.y,_.z),a.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Bn.fromBufferAttribute(t,n),Bn.normalize(),t.setXYZ(n,Bn.x,Bn.y,Bn.z)}toNonIndexed(){function t(h,m){const p=h.array,_=h.itemSize,S=h.normalized,g=new p.constructor(m.length*_);let M=0,E=0;for(let R=0,y=m.length;R<y;R++){h.isInterleavedBufferAttribute?M=m[R]*h.data.stride+h.offset:M=m[R]*_;for(let x=0;x<_;x++)g[E++]=p[M++]}return new Xi(g,_,S)}if(this.index===null)return pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ca,a=this.index.array,o=this.attributes;for(const h in o){const m=o[h],p=t(m,a);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,S=p.length;_<S;_++){const g=p[_],M=t(g,a);m.push(M)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,m=u.length;h<m;h++){const p=u[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];t.data.attributes[m]=p.toJSON(t.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let S=0,g=p.length;S<g;S++){const M=p[S];_.push(M.toJSON(t.data))}_.length>0&&(o[m]=_,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const p in o){const _=o[p];this.setAttribute(p,_.clone(n))}const c=t.morphAttributes;for(const p in c){const _=[],S=c[p];for(let g=0,M=S.length;g<M;g++)_.push(S[g].clone(n));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let p=0,_=u.length;p<_;p++){const S=u[p];this.addGroup(S.start,S.count,S.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class SM{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=ep,this.updateRanges=[],this.version=0,this.uuid=ys()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,a){t*=this.stride,a*=n.stride;for(let o=0,c=this.stride;o<c;o++)this.array[t+o]=n.array[a+o];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ys()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ys()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jn=new $;class ou{constructor(t,n,a,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=a,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,a=this.data.count;n<a;n++)Jn.fromBufferAttribute(this,n),Jn.applyMatrix4(t),this.setXYZ(n,Jn.x,Jn.y,Jn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)Jn.fromBufferAttribute(this,n),Jn.applyNormalMatrix(t),this.setXYZ(n,Jn.x,Jn.y,Jn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)Jn.fromBufferAttribute(this,n),Jn.transformDirection(t),this.setXYZ(n,Jn.x,Jn.y,Jn.z);return this}getComponent(t,n){let a=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(a=ea(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=on(a,this.array)),this.data.array[t*this.data.stride+this.offset+n]=a,this}setX(t,n){return this.normalized&&(n=on(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=on(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=on(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=on(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=ea(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=ea(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=ea(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=ea(n,this.array)),n}setXY(t,n,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=on(n,this.array),a=on(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this}setXYZ(t,n,a,o){return t=t*this.data.stride+this.offset,this.normalized&&(n=on(n,this.array),a=on(a,this.array),o=on(o,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t=t*this.data.stride+this.offset,this.normalized&&(n=on(n,this.array),a=on(a,this.array),o=on(o,this.array),c=on(c,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=o,this.data.array[t+3]=c,this}clone(t){if(t===void 0){ru("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return new Xi(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ou(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ru("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let yM=0;class bs extends Js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=ys(),this.name="",this.type="Material",this.blending=Kr,this.side=Ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mh,this.blendDst=gh,this.blendEquation=qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=b_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){pe(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){pe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(a.blending=this.blending),this.side!==Ms&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==mh&&(a.blendSrc=this.blendSrc),this.blendDst!==gh&&(a.blendDst=this.blendDst),this.blendEquation!==qs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Jr&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==b_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ur&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Ur&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Ur&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const h in c){const m=c[h];delete m.metadata,u.push(m)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ap extends bs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let kr;const Jo=new $,Wr=new $,Xr=new $,Yr=new Re,tl=new Re,kv=new xn,Dc=new $,el=new $,Nc=new $,P_=new Re,jd=new Re,F_=new Re;class MM extends ei{constructor(t=new ap){if(super(),this.isSprite=!0,this.type="Sprite",kr===void 0){kr=new ca;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new SM(n,5);kr.setIndex([0,1,2,0,2,3]),kr.setAttribute("position",new ou(a,3,0,!1)),kr.setAttribute("uv",new ou(a,2,3,!1))}this.geometry=kr,this.material=t,this.center=new Re(.5,.5),this.count=1}raycast(t,n){t.camera===null&&Fe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wr.setFromMatrixScale(this.matrixWorld),kv.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Xr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wr.multiplyScalar(-Xr.z);const a=this.material.rotation;let o,c;a!==0&&(c=Math.cos(a),o=Math.sin(a));const u=this.center;Uc(Dc.set(-.5,-.5,0),Xr,u,Wr,o,c),Uc(el.set(.5,-.5,0),Xr,u,Wr,o,c),Uc(Nc.set(.5,.5,0),Xr,u,Wr,o,c),P_.set(0,0),jd.set(1,0),F_.set(1,1);let h=t.ray.intersectTriangle(Dc,el,Nc,!1,Jo);if(h===null&&(Uc(el.set(-.5,.5,0),Xr,u,Wr,o,c),jd.set(0,1),h=t.ray.intersectTriangle(Dc,Nc,el,!1,Jo),h===null))return;const m=t.ray.origin.distanceTo(Jo);m<t.near||m>t.far||n.push({distance:m,point:Jo.clone(),uv:Ii.getInterpolation(Jo,Dc,el,Nc,P_,jd,F_,new Re),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Uc(r,t,n,a,o,c){Yr.subVectors(r,n).addScalar(.5).multiply(a),o!==void 0?(tl.x=c*Yr.x-o*Yr.y,tl.y=o*Yr.x+c*Yr.y):tl.copy(Yr),r.copy(t),r.x+=tl.x,r.y+=tl.y,r.applyMatrix4(kv)}const Na=new $,Zd=new $,Lc=new $,ms=new $,$d=new $,Oc=new $,Kd=new $;class Wv{constructor(t=new $,n=new $(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Na)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Na.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Na.copy(this.origin).addScaledVector(this.direction,n),Na.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){Zd.copy(t).add(n).multiplyScalar(.5),Lc.copy(n).sub(t).normalize(),ms.copy(this.origin).sub(Zd);const c=t.distanceTo(n)*.5,u=-this.direction.dot(Lc),h=ms.dot(this.direction),m=-ms.dot(Lc),p=ms.lengthSq(),_=Math.abs(1-u*u);let S,g,M,E;if(_>0)if(S=u*m-h,g=u*h-m,E=c*_,S>=0)if(g>=-E)if(g<=E){const R=1/_;S*=R,g*=R,M=S*(S+u*g+2*h)+g*(u*S+g+2*m)+p}else g=c,S=Math.max(0,-(u*g+h)),M=-S*S+g*(g+2*m)+p;else g=-c,S=Math.max(0,-(u*g+h)),M=-S*S+g*(g+2*m)+p;else g<=-E?(S=Math.max(0,-(-u*c+h)),g=S>0?-c:Math.min(Math.max(-c,-m),c),M=-S*S+g*(g+2*m)+p):g<=E?(S=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+p):(S=Math.max(0,-(u*c+h)),g=S>0?c:Math.min(Math.max(-c,-m),c),M=-S*S+g*(g+2*m)+p);else g=u>0?-c:c,S=Math.max(0,-(u*g+h)),M=-S*S+g*(g+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(Zd).addScaledVector(Lc,g),M}intersectSphere(t,n){Na.subVectors(t.center,this.origin);const a=Na.dot(this.direction),o=Na.dot(Na)-a*a,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=a-u,m=a+u;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,c,u,h,m;const p=1/this.direction.x,_=1/this.direction.y,S=1/this.direction.z,g=this.origin;return p>=0?(a=(t.min.x-g.x)*p,o=(t.max.x-g.x)*p):(a=(t.max.x-g.x)*p,o=(t.min.x-g.x)*p),_>=0?(c=(t.min.y-g.y)*_,u=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,u=(t.min.y-g.y)*_),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),S>=0?(h=(t.min.z-g.z)*S,m=(t.max.z-g.z)*S):(h=(t.max.z-g.z)*S,m=(t.min.z-g.z)*S),a>m||h>o)||((h>a||a!==a)&&(a=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,Na)!==null}intersectTriangle(t,n,a,o,c){$d.subVectors(n,t),Oc.subVectors(a,t),Kd.crossVectors($d,Oc);let u=this.direction.dot(Kd),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;ms.subVectors(this.origin,t);const m=h*this.direction.dot(Oc.crossVectors(ms,Oc));if(m<0)return null;const p=h*this.direction.dot($d.cross(ms));if(p<0||m+p>u)return null;const _=-h*ms.dot(Kd);return _<0?null:this.at(_/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fu extends bs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oa,this.combine=fp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const B_=new xn,Ws=new Wv,Ic=new bp,G_=new $,zc=new $,Pc=new $,Fc=new $,Qd=new $,Bc=new $,H_=new $,Gc=new $;class vn extends ei{constructor(t=new ca,n=new fu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(c&&h){Bc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],S=c[m];_!==0&&(Qd.fromBufferAttribute(S,t),u?Bc.addScaledVector(Qd,_):Bc.addScaledVector(Qd.sub(n),_))}n.add(Bc)}return n}raycast(t,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Ic.copy(a.boundingSphere),Ic.applyMatrix4(c),Ws.copy(t.ray).recast(t.near),!(Ic.containsPoint(Ws.origin)===!1&&(Ws.intersectSphere(Ic,G_)===null||Ws.origin.distanceToSquared(G_)>(t.far-t.near)**2))&&(B_.copy(c).invert(),Ws.copy(t.ray).applyMatrix4(B_),!(a.boundingBox!==null&&Ws.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,Ws)))}_computeIntersections(t,n,a){let o;const c=this.geometry,u=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,S=c.attributes.normal,g=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(u))for(let E=0,R=g.length;E<R;E++){const y=g[E],x=u[y.materialIndex],C=Math.max(y.start,M.start),L=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let U=C,V=L;U<V;U+=3){const N=h.getX(U),P=h.getX(U+1),T=h.getX(U+2);o=Hc(this,x,t,a,p,_,S,N,P,T),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const E=Math.max(0,M.start),R=Math.min(h.count,M.start+M.count);for(let y=E,x=R;y<x;y+=3){const C=h.getX(y),L=h.getX(y+1),U=h.getX(y+2);o=Hc(this,u,t,a,p,_,S,C,L,U),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,R=g.length;E<R;E++){const y=g[E],x=u[y.materialIndex],C=Math.max(y.start,M.start),L=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let U=C,V=L;U<V;U+=3){const N=U,P=U+1,T=U+2;o=Hc(this,x,t,a,p,_,S,N,P,T),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const E=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let y=E,x=R;y<x;y+=3){const C=y,L=y+1,U=y+2;o=Hc(this,u,t,a,p,_,S,C,L,U),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function bM(r,t,n,a,o,c,u,h){let m;if(t.side===ui?m=a.intersectTriangle(u,c,o,!0,h):m=a.intersectTriangle(o,c,u,t.side===Ms,h),m===null)return null;Gc.copy(h),Gc.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(Gc);return p<n.near||p>n.far?null:{distance:p,point:Gc.clone(),object:r}}function Hc(r,t,n,a,o,c,u,h,m,p){r.getVertexPosition(h,zc),r.getVertexPosition(m,Pc),r.getVertexPosition(p,Fc);const _=bM(r,t,n,a,zc,Pc,Fc,H_);if(_){const S=new $;Ii.getBarycoord(H_,zc,Pc,Fc,S),o&&(_.uv=Ii.getInterpolatedAttribute(o,h,m,p,S,new Re)),c&&(_.uv1=Ii.getInterpolatedAttribute(c,h,m,p,S,new Re)),u&&(_.normal=Ii.getInterpolatedAttribute(u,h,m,p,S,new $),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new $,materialIndex:0};Ii.getNormal(zc,Pc,Fc,g.normal),_.face=g,_.barycoord=S}return _}class EM extends Kn{constructor(t=null,n=1,a=1,o,c,u,h,m,p=Xn,_=Xn,S,g){super(null,u,h,m,p,_,o,c,S,g),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jd=new $,TM=new $,AM=new ve;class Ys{constructor(t=new $(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=Jd.subVectors(a,n).cross(TM.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,a=!0){const o=t.delta(Jd),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/c;return a===!0&&(u<0||u>1)?null:n.copy(t.start).addScaledVector(o,u)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||AM.getNormalMatrix(t),o=this.coplanarPoint(Jd).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xs=new bp,wM=new Re(.5,.5),Vc=new $;class Ep{constructor(t=new Ys,n=new Ys,a=new Ys,o=new Ys,c=new Ys,u=new Ys){this.planes=[t,n,a,o,c,u]}set(t,n,a,o,c,u){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=ia,a=!1){const o=this.planes,c=t.elements,u=c[0],h=c[1],m=c[2],p=c[3],_=c[4],S=c[5],g=c[6],M=c[7],E=c[8],R=c[9],y=c[10],x=c[11],C=c[12],L=c[13],U=c[14],V=c[15];if(o[0].setComponents(p-u,M-_,x-E,V-C).normalize(),o[1].setComponents(p+u,M+_,x+E,V+C).normalize(),o[2].setComponents(p+h,M+S,x+R,V+L).normalize(),o[3].setComponents(p-h,M-S,x-R,V-L).normalize(),a)o[4].setComponents(m,g,y,U).normalize(),o[5].setComponents(p-m,M-g,x-y,V-U).normalize();else if(o[4].setComponents(p-m,M-g,x-y,V-U).normalize(),n===ia)o[5].setComponents(p+m,M+g,x+y,V+U).normalize();else if(n===fl)o[5].setComponents(m,g,y,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(t){Xs.center.set(0,0,0);const n=wM.distanceTo(t.center);return Xs.radius=.7071067811865476+n,Xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Vc.x=o.normal.x>0?t.max.x:t.min.x,Vc.y=o.normal.y>0?t.max.y:t.min.y,Vc.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Vc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class RM extends bs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}class Xv extends Kn{constructor(t=[],n=Ks,a,o,c,u,h,m,p,_){super(t,n,a,o,c,u,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yv extends Kn{constructor(t,n,a,o,c,u,h,m,p){super(t,n,a,o,c,u,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class eo extends Kn{constructor(t,n,a=ra,o,c,u,h=Xn,m=Xn,p,_=Pa,S=1){if(_!==Pa&&_!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:n,depth:S};super(g,o,c,u,h,m,_,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Sp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class CM extends eo{constructor(t,n=ra,a=Ks,o,c,u=Xn,h=Xn,m,p=Pa){const _={width:t,height:t,depth:1},S=[_,_,_,_,_,_];super(t,t,n,a,o,c,u,h,m,p),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class qv extends Kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Gn extends ca{constructor(t=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],_=[],S=[];let g=0,M=0;E("z","y","x",-1,-1,a,n,t,u,c,0),E("z","y","x",1,-1,a,n,-t,u,c,1),E("x","z","y",1,1,t,a,n,o,u,2),E("x","z","y",1,-1,t,a,-n,o,u,3),E("x","y","z",1,-1,t,n,a,o,c,4),E("x","y","z",-1,-1,t,n,-a,o,c,5),this.setIndex(m),this.setAttribute("position",new Ia(p,3)),this.setAttribute("normal",new Ia(_,3)),this.setAttribute("uv",new Ia(S,2));function E(R,y,x,C,L,U,V,N,P,T,F){const Z=U/P,H=V/T,K=U/2,dt=V/2,mt=N/2,X=P+1,O=T+1;let B=0,st=0;const vt=new $;for(let At=0;At<O;At++){const I=At*H-dt;for(let Q=0;Q<X;Q++){const Mt=Q*Z-K;vt[R]=Mt*C,vt[y]=I*L,vt[x]=mt,p.push(vt.x,vt.y,vt.z),vt[R]=0,vt[y]=0,vt[x]=N>0?1:-1,_.push(vt.x,vt.y,vt.z),S.push(Q/P),S.push(1-At/T),B+=1}}for(let At=0;At<T;At++)for(let I=0;I<P;I++){const Q=g+I+X*At,Mt=g+I+X*(At+1),Rt=g+(I+1)+X*(At+1),Nt=g+(I+1)+X*At;m.push(Q,Mt,Nt),m.push(Mt,Rt,Nt),st+=6}h.addGroup(M,st,F),M+=st,g+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class du extends ca{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const c=t/2,u=n/2,h=Math.floor(a),m=Math.floor(o),p=h+1,_=m+1,S=t/h,g=n/m,M=[],E=[],R=[],y=[];for(let x=0;x<_;x++){const C=x*g-u;for(let L=0;L<p;L++){const U=L*S-c;E.push(U,-C,0),R.push(0,0,1),y.push(L/h),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let C=0;C<h;C++){const L=C+p*x,U=C+p*(x+1),V=C+1+p*(x+1),N=C+1+p*x;M.push(L,U,N),M.push(U,V,N)}this.setIndex(M),this.setAttribute("position",new Ia(E,3)),this.setAttribute("normal",new Ia(R,3)),this.setAttribute("uv",new Ia(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new du(t.width,t.height,t.widthSegments,t.heightSegments)}}function no(r){const t={};for(const n in r){t[n]={};for(const a in r[n]){const o=r[n][a];if(V_(o))o.isRenderTargetTexture?(pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone();else if(Array.isArray(o))if(V_(o[0])){const c=[];for(let u=0,h=o.length;u<h;u++)c[u]=o[u].clone();t[n][a]=c}else t[n][a]=o.slice();else t[n][a]=o}}return t}function ti(r){const t={};for(let n=0;n<r.length;n++){const a=no(r[n]);for(const o in a)t[o]=a[o]}return t}function V_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function DM(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function jv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Be.workingColorSpace}const NM={clone:no,merge:ti};var UM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class la extends bs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=UM,this.fragmentShader=LM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=no(t.uniforms),this.uniformsGroups=DM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class OM extends la{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class IM extends bs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nu,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class gs extends bs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nu,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oa,this.combine=fp,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zM extends bs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class PM extends bs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Zv extends ei{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const th=new xn,k_=new $,W_=new $;class FM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.mapType=bi,this.map=null,this.mapPass=null,this.matrix=new xn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ep,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new Mn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;k_.setFromMatrixPosition(t.matrixWorld),n.position.copy(k_),W_.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(W_),n.updateMatrixWorld(),th.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(th,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===fl||n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(th)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const kc=new $,Wc=new io,Ki=new $;class $v extends ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xn,this.projectionMatrix=new xn,this.projectionMatrixInverse=new xn,this.coordinateSystem=ia,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(kc,Wc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,Wc,Ki.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(kc,Wc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,Wc,Ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _s=new $,X_=new Re,Y_=new Re;class Mi extends $v{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=ip*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Cd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ip*2*Math.atan(Math.tan(Cd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){_s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_s.x,_s.y).multiplyScalar(-t/_s.z),_s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(_s.x,_s.y).multiplyScalar(-t/_s.z)}getViewSize(t,n){return this.getViewBounds(t,X_,Y_),n.subVectors(Y_,X_)}setViewOffset(t,n,a,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Cd*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*a/p,o*=u.width/m,a*=u.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class BM extends FM{constructor(){super(new Mi(90,1,.5,500)),this.isPointLightShadow=!0}}class GM extends Zv{constructor(t,n,a=0,o=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new BM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Kv extends $v{constructor(t=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-t,u=a+t,h=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class HM extends Zv{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const qr=-90,jr=1;class VM extends ei{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Mi(qr,jr,t,n);o.layers=this.layers,this.add(o);const c=new Mi(qr,jr,t,n);c.layers=this.layers,this.add(c);const u=new Mi(qr,jr,t,n);u.layers=this.layers,this.add(u);const h=new Mi(qr,jr,t,n);h.layers=this.layers,this.add(h);const m=new Mi(qr,jr,t,n);m.layers=this.layers,this.add(m);const p=new Mi(qr,jr,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,h,m]=n;for(const p of n)this.remove(p);if(t===ia)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===fl)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,m,p,_]=this.children,S=t.getRenderTarget(),g=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const R=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(a,0,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(a,1,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,u),t.setRenderTarget(a,2,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(a,3,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,m),t.setRenderTarget(a,4,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,p),a.texture.generateMipmaps=R,t.setRenderTarget(a,5,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,_),t.setRenderTarget(S,g,M),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class kM extends Mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const q_=new xn;class WM{constructor(t,n,a=0,o=1/0){this.ray=new Wv(t,n),this.near=a,this.far=o,this.camera=null,this.layers=new yp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Fe("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return q_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(q_),this}intersectObject(t,n=!0,a=[]){return sp(t,this,a,n),a.sort(j_),a}intersectObjects(t,n=!0,a=[]){for(let o=0,c=t.length;o<c;o++)sp(t[o],this,a,n);return a.sort(j_),a}}function j_(r,t){return r.distance-t.distance}function sp(r,t,n,a){let o=!0;if(r.layers.test(t.layers)&&r.raycast(t,n)===!1&&(o=!1),o===!0&&a===!0){const c=r.children;for(let u=0,h=c.length;u<h;u++)sp(c[u],t,n,!0)}}const Cp=class Cp{constructor(t,n,a,o){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,a,o)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let a=0;a<4;a++)this.elements[a]=t[a+n];return this}set(t,n,a,o){const c=this.elements;return c[0]=t,c[2]=n,c[1]=a,c[3]=o,this}};Cp.prototype.isMatrix2=!0;let Z_=Cp;function $_(r,t,n,a){const o=XM(a);switch(n){case Iv:return r*t;case Pv:return r*t/o.components*o.byteLength;case mp:return r*t/o.components*o.byteLength;case Qs:return r*t*2/o.components*o.byteLength;case gp:return r*t*2/o.components*o.byteLength;case zv:return r*t*3/o.components*o.byteLength;case Wi:return r*t*4/o.components*o.byteLength;case _p:return r*t*4/o.components*o.byteLength;case Zc:case $c:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Kc:case Qc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ah:case Rh:return Math.max(r,16)*Math.max(t,8)/4;case Th:case wh:return Math.max(r,8)*Math.max(t,8)/2;case Ch:case Dh:case Uh:case Lh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Nh:case tu:case Oh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ih:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case zh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Ph:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Fh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Bh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Gh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Hh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Vh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case kh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Wh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Xh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Yh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case qh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case jh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Zh:case $h:case Kh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Qh:case Jh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case eu:case tp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function XM(r){switch(r){case bi:case Nv:return{byteLength:1,components:1};case cl:case Uv:case za:return{byteLength:2,components:1};case hp:case pp:return{byteLength:2,components:4};case ra:case dp:case na:return{byteLength:4,components:1};case Lv:case Ov:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:up}}));typeof window<"u"&&(window.__THREE__?pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=up);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qv(){let r=null,t=!1,n=null,a=null;function o(c,u){n(c,u),a=r.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&r!==null&&(a=r.requestAnimationFrame(o),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function YM(r){const t=new WeakMap;function n(h,m){const p=h.array,_=h.usage,S=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),h.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:S}}function a(h,m,p){const _=m.array,S=m.updateRanges;if(r.bindBuffer(p,h),S.length===0)r.bufferSubData(p,0,_);else{S.sort((M,E)=>M.start-E.start);let g=0;for(let M=1;M<S.length;M++){const E=S[g],R=S[M];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++g,S[g]=R)}S.length=g+1;for(let M=0,E=S.length;M<E;M++){const R=S[M];r.bufferSubData(p,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function u(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,m),p.version=h.version}}return{get:o,remove:c,update:u}}var qM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jM=`#ifdef USE_ALPHAHASH
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
#endif`,ZM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$M=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JM=`#ifdef USE_AOMAP
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
#endif`,tb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eb=`#ifdef USE_BATCHING
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
#endif`,nb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ib=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ab=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rb=`#ifdef USE_IRIDESCENCE
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
#endif`,ob=`#ifdef USE_BUMPMAP
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
#endif`,lb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ub=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,db=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,gb=`#define PI 3.141592653589793
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
} // validated`,_b=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vb=`vec3 transformedNormal = objectNormal;
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
#endif`,xb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Eb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tb=`#ifdef USE_ENVMAP
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
#endif`,Ab=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wb=`#ifdef USE_ENVMAP
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
#endif`,Rb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cb=`#ifdef USE_ENVMAP
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
#endif`,Db=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ub=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ob=`#ifdef USE_GRADIENTMAP
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
}`,Ib=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Bb=`#ifdef USE_ENVMAP
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
#endif`,Gb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wb=`PhysicalMaterial material;
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
#endif`,Xb=`uniform sampler2D dfgLUT;
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
}`,Yb=`
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
#endif`,qb=`#if defined( RE_IndirectDiffuse )
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
#endif`,jb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,$b=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iE=`#if defined( USE_POINTS_UV )
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
#endif`,aE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cE=`#ifdef USE_MORPHTARGETS
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
#endif`,uE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gE=`#ifdef USE_NORMALMAP
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
#endif`,_E=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ME=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,EE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,DE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,UE=`float getShadowMask() {
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
}`,LE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OE=`#ifdef USE_SKINNING
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
#endif`,IE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zE=`#ifdef USE_SKINNING
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
#endif`,PE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,HE=`#ifdef USE_TRANSMISSION
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
#endif`,VE=`#ifdef USE_TRANSMISSION
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
#endif`,kE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jE=`uniform sampler2D t2D;
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
}`,ZE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$E=`#ifdef ENVMAP_TYPE_CUBE
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
}`,KE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JE=`#include <common>
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
}`,t1=`#if DEPTH_PACKING == 3200
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
}`,e1=`#define DISTANCE
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
}`,n1=`#define DISTANCE
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
}`,i1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s1=`uniform float scale;
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
}`,r1=`uniform vec3 diffuse;
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
}`,o1=`#include <common>
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
}`,l1=`uniform vec3 diffuse;
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
}`,c1=`#define LAMBERT
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
}`,u1=`#define LAMBERT
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
}`,f1=`#define MATCAP
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
}`,d1=`#define MATCAP
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
}`,h1=`#define NORMAL
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
}`,p1=`#define NORMAL
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
}`,m1=`#define PHONG
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
}`,g1=`#define PHONG
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
}`,_1=`#define STANDARD
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
}`,v1=`#define STANDARD
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
}`,x1=`#define TOON
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
}`,S1=`#define TOON
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
}`,y1=`uniform float size;
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
}`,M1=`uniform vec3 diffuse;
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
}`,b1=`#include <common>
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
}`,E1=`uniform vec3 color;
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
}`,T1=`uniform float rotation;
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
}`,A1=`uniform vec3 diffuse;
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
}`,we={alphahash_fragment:qM,alphahash_pars_fragment:jM,alphamap_fragment:ZM,alphamap_pars_fragment:$M,alphatest_fragment:KM,alphatest_pars_fragment:QM,aomap_fragment:JM,aomap_pars_fragment:tb,batching_pars_vertex:eb,batching_vertex:nb,begin_vertex:ib,beginnormal_vertex:ab,bsdfs:sb,iridescence_fragment:rb,bumpmap_pars_fragment:ob,clipping_planes_fragment:lb,clipping_planes_pars_fragment:cb,clipping_planes_pars_vertex:ub,clipping_planes_vertex:fb,color_fragment:db,color_pars_fragment:hb,color_pars_vertex:pb,color_vertex:mb,common:gb,cube_uv_reflection_fragment:_b,defaultnormal_vertex:vb,displacementmap_pars_vertex:xb,displacementmap_vertex:Sb,emissivemap_fragment:yb,emissivemap_pars_fragment:Mb,colorspace_fragment:bb,colorspace_pars_fragment:Eb,envmap_fragment:Tb,envmap_common_pars_fragment:Ab,envmap_pars_fragment:wb,envmap_pars_vertex:Rb,envmap_physical_pars_fragment:Bb,envmap_vertex:Cb,fog_vertex:Db,fog_pars_vertex:Nb,fog_fragment:Ub,fog_pars_fragment:Lb,gradientmap_pars_fragment:Ob,lightmap_pars_fragment:Ib,lights_lambert_fragment:zb,lights_lambert_pars_fragment:Pb,lights_pars_begin:Fb,lights_toon_fragment:Gb,lights_toon_pars_fragment:Hb,lights_phong_fragment:Vb,lights_phong_pars_fragment:kb,lights_physical_fragment:Wb,lights_physical_pars_fragment:Xb,lights_fragment_begin:Yb,lights_fragment_maps:qb,lights_fragment_end:jb,lightprobes_pars_fragment:Zb,logdepthbuf_fragment:$b,logdepthbuf_pars_fragment:Kb,logdepthbuf_pars_vertex:Qb,logdepthbuf_vertex:Jb,map_fragment:tE,map_pars_fragment:eE,map_particle_fragment:nE,map_particle_pars_fragment:iE,metalnessmap_fragment:aE,metalnessmap_pars_fragment:sE,morphinstance_vertex:rE,morphcolor_vertex:oE,morphnormal_vertex:lE,morphtarget_pars_vertex:cE,morphtarget_vertex:uE,normal_fragment_begin:fE,normal_fragment_maps:dE,normal_pars_fragment:hE,normal_pars_vertex:pE,normal_vertex:mE,normalmap_pars_fragment:gE,clearcoat_normal_fragment_begin:_E,clearcoat_normal_fragment_maps:vE,clearcoat_pars_fragment:xE,iridescence_pars_fragment:SE,opaque_fragment:yE,packing:ME,premultiplied_alpha_fragment:bE,project_vertex:EE,dithering_fragment:TE,dithering_pars_fragment:AE,roughnessmap_fragment:wE,roughnessmap_pars_fragment:RE,shadowmap_pars_fragment:CE,shadowmap_pars_vertex:DE,shadowmap_vertex:NE,shadowmask_pars_fragment:UE,skinbase_vertex:LE,skinning_pars_vertex:OE,skinning_vertex:IE,skinnormal_vertex:zE,specularmap_fragment:PE,specularmap_pars_fragment:FE,tonemapping_fragment:BE,tonemapping_pars_fragment:GE,transmission_fragment:HE,transmission_pars_fragment:VE,uv_pars_fragment:kE,uv_pars_vertex:WE,uv_vertex:XE,worldpos_vertex:YE,background_vert:qE,background_frag:jE,backgroundCube_vert:ZE,backgroundCube_frag:$E,cube_vert:KE,cube_frag:QE,depth_vert:JE,depth_frag:t1,distance_vert:e1,distance_frag:n1,equirect_vert:i1,equirect_frag:a1,linedashed_vert:s1,linedashed_frag:r1,meshbasic_vert:o1,meshbasic_frag:l1,meshlambert_vert:c1,meshlambert_frag:u1,meshmatcap_vert:f1,meshmatcap_frag:d1,meshnormal_vert:h1,meshnormal_frag:p1,meshphong_vert:m1,meshphong_frag:g1,meshphysical_vert:_1,meshphysical_frag:v1,meshtoon_vert:x1,meshtoon_frag:S1,points_vert:y1,points_frag:M1,shadow_vert:b1,shadow_frag:E1,sprite_vert:T1,sprite_frag:A1},Xt={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},envMapRotation:{value:new ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},Ji={basic:{uniforms:ti([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:ti([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:ti([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:ti([Xt.common,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.roughnessmap,Xt.metalnessmap,Xt.fog,Xt.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:ti([Xt.common,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.gradientmap,Xt.fog,Xt.lights,{emissive:{value:new Oe(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:ti([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:ti([Xt.points,Xt.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:ti([Xt.common,Xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:ti([Xt.common,Xt.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:ti([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:ti([Xt.sprite,Xt.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:we.background_vert,fragmentShader:we.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ve}},vertexShader:we.backgroundCube_vert,fragmentShader:we.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distance:{uniforms:ti([Xt.common,Xt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distance_vert,fragmentShader:we.distance_frag},shadow:{uniforms:ti([Xt.lights,Xt.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};Ji.physical={uniforms:ti([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};const Xc={r:0,b:0,g:0},w1=new xn,Jv=new ve;Jv.set(-1,0,0,0,1,0,0,0,1);function R1(r,t,n,a,o,c){const u=new Oe(0);let h=o===!0?0:1,m,p,_=null,S=0,g=null;function M(C){let L=C.isScene===!0?C.background:null;if(L&&L.isTexture){const U=C.backgroundBlurriness>0;L=t.get(L,U)}return L}function E(C){let L=!1;const U=M(C);U===null?y(u,h):U&&U.isColor&&(y(U,1),L=!0);const V=r.xr.getEnvironmentBlendMode();V==="additive"?n.buffers.color.setClear(0,0,0,1,c):V==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(r.autoClear||L)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function R(C,L){const U=M(L);U&&(U.isCubeTexture||U.mapping===uu)?(p===void 0&&(p=new vn(new Gn(1,1,1),new la({name:"BackgroundCubeMaterial",uniforms:no(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(V,N,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),p.material.uniforms.envMap.value=U,p.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(w1.makeRotationFromEuler(L.backgroundRotation)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Jv),p.material.toneMapped=Be.getTransfer(U.colorSpace)!==nn,(_!==U||S!==U.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=U,S=U.version,g=r.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new vn(new du(2,2),new la({name:"BackgroundMaterial",uniforms:no(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:Ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=Be.getTransfer(U.colorSpace)!==nn,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(_!==U||S!==U.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=U,S=U.version,g=r.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function y(C,L){C.getRGB(Xc,jv(r)),n.buffers.color.setClear(Xc.r,Xc.g,Xc.b,L,c)}function x(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(C,L=1){u.set(C),h=L,y(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(C){h=C,y(u,h)},render:E,addToRenderList:R,dispose:x}}function C1(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=g(null);let c=o,u=!1;function h(H,K,dt,mt,X){let O=!1;const B=S(H,mt,dt,K);c!==B&&(c=B,p(c.object)),O=M(H,mt,dt,X),O&&E(H,mt,dt,X),X!==null&&t.update(X,r.ELEMENT_ARRAY_BUFFER),(O||u)&&(u=!1,U(H,K,dt,mt),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function m(){return r.createVertexArray()}function p(H){return r.bindVertexArray(H)}function _(H){return r.deleteVertexArray(H)}function S(H,K,dt,mt){const X=mt.wireframe===!0;let O=a[K.id];O===void 0&&(O={},a[K.id]=O);const B=H.isInstancedMesh===!0?H.id:0;let st=O[B];st===void 0&&(st={},O[B]=st);let vt=st[dt.id];vt===void 0&&(vt={},st[dt.id]=vt);let At=vt[X];return At===void 0&&(At=g(m()),vt[X]=At),At}function g(H){const K=[],dt=[],mt=[];for(let X=0;X<n;X++)K[X]=0,dt[X]=0,mt[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:dt,attributeDivisors:mt,object:H,attributes:{},index:null}}function M(H,K,dt,mt){const X=c.attributes,O=K.attributes;let B=0;const st=dt.getAttributes();for(const vt in st)if(st[vt].location>=0){const I=X[vt];let Q=O[vt];if(Q===void 0&&(vt==="instanceMatrix"&&H.instanceMatrix&&(Q=H.instanceMatrix),vt==="instanceColor"&&H.instanceColor&&(Q=H.instanceColor)),I===void 0||I.attribute!==Q||Q&&I.data!==Q.data)return!0;B++}return c.attributesNum!==B||c.index!==mt}function E(H,K,dt,mt){const X={},O=K.attributes;let B=0;const st=dt.getAttributes();for(const vt in st)if(st[vt].location>=0){let I=O[vt];I===void 0&&(vt==="instanceMatrix"&&H.instanceMatrix&&(I=H.instanceMatrix),vt==="instanceColor"&&H.instanceColor&&(I=H.instanceColor));const Q={};Q.attribute=I,I&&I.data&&(Q.data=I.data),X[vt]=Q,B++}c.attributes=X,c.attributesNum=B,c.index=mt}function R(){const H=c.newAttributes;for(let K=0,dt=H.length;K<dt;K++)H[K]=0}function y(H){x(H,0)}function x(H,K){const dt=c.newAttributes,mt=c.enabledAttributes,X=c.attributeDivisors;dt[H]=1,mt[H]===0&&(r.enableVertexAttribArray(H),mt[H]=1),X[H]!==K&&(r.vertexAttribDivisor(H,K),X[H]=K)}function C(){const H=c.newAttributes,K=c.enabledAttributes;for(let dt=0,mt=K.length;dt<mt;dt++)K[dt]!==H[dt]&&(r.disableVertexAttribArray(dt),K[dt]=0)}function L(H,K,dt,mt,X,O,B){B===!0?r.vertexAttribIPointer(H,K,dt,X,O):r.vertexAttribPointer(H,K,dt,mt,X,O)}function U(H,K,dt,mt){R();const X=mt.attributes,O=dt.getAttributes(),B=K.defaultAttributeValues;for(const st in O){const vt=O[st];if(vt.location>=0){let At=X[st];if(At===void 0&&(st==="instanceMatrix"&&H.instanceMatrix&&(At=H.instanceMatrix),st==="instanceColor"&&H.instanceColor&&(At=H.instanceColor)),At!==void 0){const I=At.normalized,Q=At.itemSize,Mt=t.get(At);if(Mt===void 0)continue;const Rt=Mt.buffer,Nt=Mt.type,lt=Mt.bytesPerElement,Et=Nt===r.INT||Nt===r.UNSIGNED_INT||At.gpuType===dp;if(At.isInterleavedBufferAttribute){const wt=At.data,bt=wt.stride,Gt=At.offset;if(wt.isInstancedInterleavedBuffer){for(let Yt=0;Yt<vt.locationSize;Yt++)x(vt.location+Yt,wt.meshPerAttribute);H.isInstancedMesh!==!0&&mt._maxInstanceCount===void 0&&(mt._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let Yt=0;Yt<vt.locationSize;Yt++)y(vt.location+Yt);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let Yt=0;Yt<vt.locationSize;Yt++)L(vt.location+Yt,Q/vt.locationSize,Nt,I,bt*lt,(Gt+Q/vt.locationSize*Yt)*lt,Et)}else{if(At.isInstancedBufferAttribute){for(let wt=0;wt<vt.locationSize;wt++)x(vt.location+wt,At.meshPerAttribute);H.isInstancedMesh!==!0&&mt._maxInstanceCount===void 0&&(mt._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let wt=0;wt<vt.locationSize;wt++)y(vt.location+wt);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let wt=0;wt<vt.locationSize;wt++)L(vt.location+wt,Q/vt.locationSize,Nt,I,Q*lt,Q/vt.locationSize*wt*lt,Et)}}else if(B!==void 0){const I=B[st];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(vt.location,I);break;case 3:r.vertexAttrib3fv(vt.location,I);break;case 4:r.vertexAttrib4fv(vt.location,I);break;default:r.vertexAttrib1fv(vt.location,I)}}}}C()}function V(){F();for(const H in a){const K=a[H];for(const dt in K){const mt=K[dt];for(const X in mt){const O=mt[X];for(const B in O)_(O[B].object),delete O[B];delete mt[X]}}delete a[H]}}function N(H){if(a[H.id]===void 0)return;const K=a[H.id];for(const dt in K){const mt=K[dt];for(const X in mt){const O=mt[X];for(const B in O)_(O[B].object),delete O[B];delete mt[X]}}delete a[H.id]}function P(H){for(const K in a){const dt=a[K];for(const mt in dt){const X=dt[mt];if(X[H.id]===void 0)continue;const O=X[H.id];for(const B in O)_(O[B].object),delete O[B];delete X[H.id]}}}function T(H){for(const K in a){const dt=a[K],mt=H.isInstancedMesh===!0?H.id:0,X=dt[mt];if(X!==void 0){for(const O in X){const B=X[O];for(const st in B)_(B[st].object),delete B[st];delete X[O]}delete dt[mt],Object.keys(dt).length===0&&delete a[K]}}}function F(){Z(),u=!0,c!==o&&(c=o,p(c.object))}function Z(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:F,resetDefaultState:Z,dispose:V,releaseStatesOfGeometry:N,releaseStatesOfObject:T,releaseStatesOfProgram:P,initAttributes:R,enableAttribute:y,disableUnusedAttributes:C}}function D1(r,t,n){let a;function o(m){a=m}function c(m,p){r.drawArrays(a,m,p),n.update(p,a,1)}function u(m,p,_){_!==0&&(r.drawArraysInstanced(a,m,p,_),n.update(p,a,_))}function h(m,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,p,0,_);let g=0;for(let M=0;M<_;M++)g+=p[M];n.update(g,a,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function N1(r,t,n,a){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");o=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(P){return!(P!==Wi&&a.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const T=P===za&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==bi&&a.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==na&&!T)}function m(P){if(P==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const _=m(p);_!==p&&(pe("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const S=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),V=r.getParameter(r.MAX_SAMPLES),N=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:C,maxVaryings:L,maxFragmentUniforms:U,maxSamples:V,samples:N}}function U1(r){const t=this;let n=null,a=0,o=!1,c=!1;const u=new Ys,h=new ve,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const M=S.length!==0||g||a!==0||o;return o=g,a=S.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,g){n=_(S,g,0)},this.setState=function(S,g,M){const E=S.clippingPlanes,R=S.clipIntersection,y=S.clipShadows,x=r.get(S);if(!o||E===null||E.length===0||c&&!y)c?_(null):p();else{const C=c?0:a,L=C*4;let U=x.clippingState||null;m.value=U,U=_(E,g,L,M);for(let V=0;V!==L;++V)U[V]=n[V];x.clippingState=U,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=C}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function _(S,g,M,E){const R=S!==null?S.length:0;let y=null;if(R!==0){if(y=m.value,E!==!0||y===null){const x=M+R*4,C=g.matrixWorldInverse;h.getNormalMatrix(C),(y===null||y.length<x)&&(y=new Float32Array(x));for(let L=0,U=M;L!==R;++L,U+=4)u.copy(S[L]).applyMatrix4(C,h),u.normal.toArray(y,U),y[U+3]=u.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,y}}const Ss=4,K_=[.125,.215,.35,.446,.526,.582],js=20,L1=256,nl=new Kv,Q_=new Oe;let eh=null,nh=0,ih=0,ah=!1;const O1=new $;class J_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,o=100,c={}){const{size:u=256,position:h=O1}=c;eh=this._renderer.getRenderTarget(),nh=this._renderer.getActiveCubeFace(),ih=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,a,o,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ev(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(eh,nh,ih),this._renderer.xr.enabled=ah,t.scissorTest=!1,Zr(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Ks||t.mapping===to?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),eh=this._renderer.getRenderTarget(),nh=this._renderer.getActiveCubeFace(),ih=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:za,format:Wi,colorSpace:iu,depthBuffer:!1},o=tv(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tv(t,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=I1(c)),this._blurMaterial=P1(c,t,n),this._ggxMaterial=z1(c,t,n)}return o}_compileMaterial(t){const n=new vn(new ca,t);this._renderer.compile(n,nl)}_sceneToCubeUV(t,n,a,o,c){const m=new Mi(90,1,n,a),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,M=S.toneMapping;S.getClearColor(Q_),S.toneMapping=aa,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(o),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vn(new Gn,new fu({name:"PMREM.Background",side:ui,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,y=R.material;let x=!1;const C=t.background;C?C.isColor&&(y.color.copy(C),t.background=null,x=!0):(y.color.copy(Q_),x=!0);for(let L=0;L<6;L++){const U=L%3;U===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[L],c.y,c.z)):U===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[L]));const V=this._cubeSize;Zr(o,U*V,L>2?V:0,V,V),S.setRenderTarget(o),x&&S.render(R,m),S.render(t,m)}S.toneMapping=M,S.autoClear=g,t.background=C}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===Ks||t.mapping===to;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=nv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ev());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Zr(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(u,nl)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=a}_applyGGXFilter(t,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[a];h.material=u;const m=u.uniforms,p=a/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),S=Math.sqrt(p*p-_*_),g=0+p*1.25,M=S*g,{_lodMax:E}=this,R=this._sizeLods[a],y=3*R*(a>E-Ss?a-E+Ss:0),x=4*(this._cubeSize-R);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=E-n,Zr(c,y,x,3*R,2*R),o.setRenderTarget(c),o.render(h,nl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-a,Zr(t,y,x,3*R,2*R),o.setRenderTarget(t),o.render(h,nl)}_blur(t,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,o,"latitudinal",c),this._halfBlur(u,t,a,a,o,"longitudinal",c)}_halfBlur(t,n,a,o,c,u,h){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Fe("blur direction must be either latitudinal or longitudinal!");const _=3,S=this._lodMeshes[o];S.material=p;const g=p.uniforms,M=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*js-1),R=c/E,y=isFinite(c)?1+Math.floor(_*R):js;y>js&&pe(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${js}`);const x=[];let C=0;for(let P=0;P<js;++P){const T=P/R,F=Math.exp(-T*T/2);x.push(F),P===0?C+=F:P<y&&(C+=2*F)}for(let P=0;P<x.length;P++)x[P]=x[P]/C;g.envMap.value=t.texture,g.samples.value=y,g.weights.value=x,g.latitudinal.value=u==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:L}=this;g.dTheta.value=E,g.mipInt.value=L-a;const U=this._sizeLods[o],V=3*U*(o>L-Ss?o-L+Ss:0),N=4*(this._cubeSize-U);Zr(n,V,N,3*U,2*U),m.setRenderTarget(n),m.render(S,nl)}}function I1(r){const t=[],n=[],a=[];let o=r;const c=r-Ss+1+K_.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);t.push(h);let m=1/h;u>r-Ss?m=K_[u-r+Ss-1]:u===0&&(m=0),n.push(m);const p=1/(h-2),_=-p,S=1+p,g=[_,_,S,_,S,S,_,_,S,S,_,S],M=6,E=6,R=3,y=2,x=1,C=new Float32Array(R*E*M),L=new Float32Array(y*E*M),U=new Float32Array(x*E*M);for(let N=0;N<M;N++){const P=N%3*2/3-1,T=N>2?0:-1,F=[P,T,0,P+2/3,T,0,P+2/3,T+1,0,P,T,0,P+2/3,T+1,0,P,T+1,0];C.set(F,R*E*N),L.set(g,y*E*N);const Z=[N,N,N,N,N,N];U.set(Z,x*E*N)}const V=new ca;V.setAttribute("position",new Xi(C,R)),V.setAttribute("uv",new Xi(L,y)),V.setAttribute("faceIndex",new Xi(U,x)),a.push(new vn(V,null)),o>Ss&&o--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function tv(r,t,n){const a=new sa(r,t,n);return a.texture.mapping=uu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Zr(r,t,n,a,o){r.viewport.set(t,n,a,o),r.scissor.set(t,n,a,o)}function z1(r,t,n){return new la({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:L1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hu(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function P1(r,t,n){const a=new Float32Array(js),o=new $(0,1,0);return new la({name:"SphericalGaussianBlur",defines:{n:js,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:hu(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function ev(){return new la({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hu(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function nv(){return new la({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function hu(){return`

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
	`}class tx extends sa{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new Xv(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Gn(5,5,5),c=new la({name:"CubemapFromEquirect",uniforms:no(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ui,blending:La});c.uniforms.tEquirect.value=n;const u=new vn(o,c),h=n.minFilter;return n.minFilter===Zs&&(n.minFilter=$n),new VM(1,10,this).update(t,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,o);t.setRenderTarget(c)}}function F1(r){let t=new WeakMap,n=new WeakMap,a=null;function o(g,M=!1){return g==null?null:M?u(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===Ad||M===wd)if(t.has(g)){const E=t.get(g).texture;return h(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const R=new tx(E.height);return R.fromEquirectangularTexture(r,g),t.set(g,R),g.addEventListener("dispose",p),h(R.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const M=g.mapping,E=M===Ad||M===wd,R=M===Ks||M===to;if(E||R){let y=n.get(g);const x=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return a===null&&(a=new J_(r)),y=E?a.fromEquirectangular(g,y):a.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,n.set(g,y),y.texture;if(y!==void 0)return y.texture;{const C=g.image;return E&&C&&C.height>0||R&&C&&m(C)?(a===null&&(a=new J_(r)),y=E?a.fromEquirectangular(g):a.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,n.set(g,y),g.addEventListener("dispose",_),y.texture):null}}}return g}function h(g,M){return M===Ad?g.mapping=Ks:M===wd&&(g.mapping=to),g}function m(g){let M=0;const E=6;for(let R=0;R<E;R++)g[R]!==void 0&&M++;return M===E}function p(g){const M=g.target;M.removeEventListener("dispose",p);const E=t.get(M);E!==void 0&&(t.delete(M),E.dispose())}function _(g){const M=g.target;M.removeEventListener("dispose",_);const E=n.get(M);E!==void 0&&(n.delete(M),E.dispose())}function S(){t=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:o,dispose:S}}function B1(r){const t={};function n(a){if(t[a]!==void 0)return t[a];const o=r.getExtension(a);return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&np("WebGLRenderer: "+a+" extension not supported."),o}}}function G1(r,t,n,a){const o={},c=new WeakMap;function u(S){const g=S.target;g.index!==null&&t.remove(g.index);for(const E in g.attributes)t.remove(g.attributes[E]);g.removeEventListener("dispose",u),delete o[g.id];const M=c.get(g);M&&(t.remove(M),c.delete(g)),a.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function h(S,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,n.memory.geometries++),g}function m(S){const g=S.attributes;for(const M in g)t.update(g[M],r.ARRAY_BUFFER)}function p(S){const g=[],M=S.index,E=S.attributes.position;let R=0;if(E===void 0)return;if(M!==null){const C=M.array;R=M.version;for(let L=0,U=C.length;L<U;L+=3){const V=C[L+0],N=C[L+1],P=C[L+2];g.push(V,N,N,P,P,V)}}else{const C=E.array;R=E.version;for(let L=0,U=C.length/3-1;L<U;L+=3){const V=L+0,N=L+1,P=L+2;g.push(V,N,N,P,P,V)}}const y=new(E.count>=65535?Vv:Hv)(g,1);y.version=R;const x=c.get(S);x&&t.remove(x),c.set(S,y)}function _(S){const g=c.get(S);if(g){const M=S.index;M!==null&&g.version<M.version&&p(S)}else p(S);return c.get(S)}return{get:h,update:m,getWireframeAttribute:_}}function H1(r,t,n){let a;function o(S){a=S}let c,u;function h(S){c=S.type,u=S.bytesPerElement}function m(S,g){r.drawElements(a,g,c,S*u),n.update(g,a,1)}function p(S,g,M){M!==0&&(r.drawElementsInstanced(a,g,c,S*u,M),n.update(g,a,M))}function _(S,g,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,g,0,c,S,0,M);let R=0;for(let y=0;y<M;y++)R+=g[y];n.update(R,a,1)}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function V1(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=h*(c/3);break;case r.LINES:n.lines+=h*(c/2);break;case r.LINE_STRIP:n.lines+=h*(c-1);break;case r.LINE_LOOP:n.lines+=h*c;break;case r.POINTS:n.points+=h*c;break;default:Fe("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function k1(r,t,n){const a=new WeakMap,o=new Mn;function c(u,h,m){const p=u.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,S=_!==void 0?_.length:0;let g=a.get(h);if(g===void 0||g.count!==S){let Z=function(){T.dispose(),a.delete(h),h.removeEventListener("dispose",Z)};var M=Z;g!==void 0&&g.texture.dispose();const E=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let U=0;E===!0&&(U=1),R===!0&&(U=2),y===!0&&(U=3);let V=h.attributes.position.count*U,N=1;V>t.maxTextureSize&&(N=Math.ceil(V/t.maxTextureSize),V=t.maxTextureSize);const P=new Float32Array(V*N*4*S),T=new Bv(P,V,N,S);T.type=na,T.needsUpdate=!0;const F=U*4;for(let H=0;H<S;H++){const K=x[H],dt=C[H],mt=L[H],X=V*N*4*H;for(let O=0;O<K.count;O++){const B=O*F;E===!0&&(o.fromBufferAttribute(K,O),P[X+B+0]=o.x,P[X+B+1]=o.y,P[X+B+2]=o.z,P[X+B+3]=0),R===!0&&(o.fromBufferAttribute(dt,O),P[X+B+4]=o.x,P[X+B+5]=o.y,P[X+B+6]=o.z,P[X+B+7]=0),y===!0&&(o.fromBufferAttribute(mt,O),P[X+B+8]=o.x,P[X+B+9]=o.y,P[X+B+10]=o.z,P[X+B+11]=mt.itemSize===4?o.w:1)}}g={count:S,texture:T,size:new Re(V,N)},a.set(h,g),h.addEventListener("dispose",Z)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const R=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",R),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function W1(r,t,n,a,o){let c=new WeakMap;function u(p){const _=o.render.frame,S=p.geometry,g=t.get(p,S);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(n.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const M=p.skeleton;c.get(M)!==_&&(M.update(),c.set(M,_))}return g}function h(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),a.releaseStatesOfObject(_),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:u,dispose:h}}const X1={[bv]:"LINEAR_TONE_MAPPING",[Ev]:"REINHARD_TONE_MAPPING",[Tv]:"CINEON_TONE_MAPPING",[Av]:"ACES_FILMIC_TONE_MAPPING",[Rv]:"AGX_TONE_MAPPING",[Cv]:"NEUTRAL_TONE_MAPPING",[wv]:"CUSTOM_TONE_MAPPING"};function Y1(r,t,n,a,o){const c=new sa(t,n,{type:r,depthBuffer:a,stencilBuffer:o,depthTexture:a?new eo(t,n):void 0}),u=new sa(t,n,{type:za,depthBuffer:!1,stencilBuffer:!1}),h=new ca;h.setAttribute("position",new Ia([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ia([0,2,0,0,2,0],2));const m=new OM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new vn(h,m),_=new Kv(-1,1,1,-1,0,1);let S=null,g=null,M=!1,E,R=null,y=[],x=!1;this.setSize=function(C,L){c.setSize(C,L),u.setSize(C,L);for(let U=0;U<y.length;U++){const V=y[U];V.setSize&&V.setSize(C,L)}},this.setEffects=function(C){y=C,x=y.length>0&&y[0].isRenderPass===!0;const L=c.width,U=c.height;for(let V=0;V<y.length;V++){const N=y[V];N.setSize&&N.setSize(L,U)}},this.begin=function(C,L){if(M||C.toneMapping===aa&&y.length===0)return!1;if(R=L,L!==null){const U=L.width,V=L.height;(c.width!==U||c.height!==V)&&this.setSize(U,V)}return x===!1&&C.setRenderTarget(c),E=C.toneMapping,C.toneMapping=aa,!0},this.hasRenderPass=function(){return x},this.end=function(C,L){C.toneMapping=E,M=!0;let U=c,V=u;for(let N=0;N<y.length;N++){const P=y[N];if(P.enabled!==!1&&(P.render(C,V,U,L),P.needsSwap!==!1)){const T=U;U=V,V=T}}if(S!==C.outputColorSpace||g!==C.toneMapping){S=C.outputColorSpace,g=C.toneMapping,m.defines={},Be.getTransfer(S)===nn&&(m.defines.SRGB_TRANSFER="");const N=X1[g];N&&(m.defines[N]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,C.setRenderTarget(R),C.render(p,_),R=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),u.dispose(),h.dispose(),m.dispose()}}const ex=new Kn,rp=new eo(1,1),nx=new Bv,ix=new lM,ax=new Xv,iv=[],av=[],sv=new Float32Array(16),rv=new Float32Array(9),ov=new Float32Array(4);function ao(r,t,n){const a=r[0];if(a<=0||a>0)return r;const o=t*n;let c=iv[o];if(c===void 0&&(c=new Float32Array(o),iv[o]=c),t!==0){a.toArray(c,0);for(let u=1,h=0;u!==t;++u)h+=n,r[u].toArray(c,h)}return c}function zn(r,t){if(r.length!==t.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==t[n])return!1;return!0}function Pn(r,t){for(let n=0,a=t.length;n<a;n++)r[n]=t[n]}function pu(r,t){let n=av[t];n===void 0&&(n=new Int32Array(t),av[t]=n);for(let a=0;a!==t;++a)n[a]=r.allocateTextureUnit();return n}function q1(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function j1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(zn(n,t))return;r.uniform2fv(this.addr,t),Pn(n,t)}}function Z1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(zn(n,t))return;r.uniform3fv(this.addr,t),Pn(n,t)}}function $1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(zn(n,t))return;r.uniform4fv(this.addr,t),Pn(n,t)}}function K1(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(zn(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),Pn(n,t)}else{if(zn(n,a))return;ov.set(a),r.uniformMatrix2fv(this.addr,!1,ov),Pn(n,a)}}function Q1(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(zn(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),Pn(n,t)}else{if(zn(n,a))return;rv.set(a),r.uniformMatrix3fv(this.addr,!1,rv),Pn(n,a)}}function J1(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(zn(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),Pn(n,t)}else{if(zn(n,a))return;sv.set(a),r.uniformMatrix4fv(this.addr,!1,sv),Pn(n,a)}}function tT(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function eT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(zn(n,t))return;r.uniform2iv(this.addr,t),Pn(n,t)}}function nT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(zn(n,t))return;r.uniform3iv(this.addr,t),Pn(n,t)}}function iT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(zn(n,t))return;r.uniform4iv(this.addr,t),Pn(n,t)}}function aT(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function sT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(zn(n,t))return;r.uniform2uiv(this.addr,t),Pn(n,t)}}function rT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(zn(n,t))return;r.uniform3uiv(this.addr,t),Pn(n,t)}}function oT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(zn(n,t))return;r.uniform4uiv(this.addr,t),Pn(n,t)}}function lT(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(rp.compareFunction=n.isReversedDepthBuffer()?xp:vp,c=rp):c=ex,n.setTexture2D(t||c,o)}function cT(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||ix,o)}function uT(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||ax,o)}function fT(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||nx,o)}function dT(r){switch(r){case 5126:return q1;case 35664:return j1;case 35665:return Z1;case 35666:return $1;case 35674:return K1;case 35675:return Q1;case 35676:return J1;case 5124:case 35670:return tT;case 35667:case 35671:return eT;case 35668:case 35672:return nT;case 35669:case 35673:return iT;case 5125:return aT;case 36294:return sT;case 36295:return rT;case 36296:return oT;case 35678:case 36198:case 36298:case 36306:case 35682:return lT;case 35679:case 36299:case 36307:return cT;case 35680:case 36300:case 36308:case 36293:return uT;case 36289:case 36303:case 36311:case 36292:return fT}}function hT(r,t){r.uniform1fv(this.addr,t)}function pT(r,t){const n=ao(t,this.size,2);r.uniform2fv(this.addr,n)}function mT(r,t){const n=ao(t,this.size,3);r.uniform3fv(this.addr,n)}function gT(r,t){const n=ao(t,this.size,4);r.uniform4fv(this.addr,n)}function _T(r,t){const n=ao(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function vT(r,t){const n=ao(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function xT(r,t){const n=ao(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function ST(r,t){r.uniform1iv(this.addr,t)}function yT(r,t){r.uniform2iv(this.addr,t)}function MT(r,t){r.uniform3iv(this.addr,t)}function bT(r,t){r.uniform4iv(this.addr,t)}function ET(r,t){r.uniform1uiv(this.addr,t)}function TT(r,t){r.uniform2uiv(this.addr,t)}function AT(r,t){r.uniform3uiv(this.addr,t)}function wT(r,t){r.uniform4uiv(this.addr,t)}function RT(r,t,n){const a=this.cache,o=t.length,c=pu(n,o);zn(a,c)||(r.uniform1iv(this.addr,c),Pn(a,c));let u;this.type===r.SAMPLER_2D_SHADOW?u=rp:u=ex;for(let h=0;h!==o;++h)n.setTexture2D(t[h]||u,c[h])}function CT(r,t,n){const a=this.cache,o=t.length,c=pu(n,o);zn(a,c)||(r.uniform1iv(this.addr,c),Pn(a,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||ix,c[u])}function DT(r,t,n){const a=this.cache,o=t.length,c=pu(n,o);zn(a,c)||(r.uniform1iv(this.addr,c),Pn(a,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||ax,c[u])}function NT(r,t,n){const a=this.cache,o=t.length,c=pu(n,o);zn(a,c)||(r.uniform1iv(this.addr,c),Pn(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||nx,c[u])}function UT(r){switch(r){case 5126:return hT;case 35664:return pT;case 35665:return mT;case 35666:return gT;case 35674:return _T;case 35675:return vT;case 35676:return xT;case 5124:case 35670:return ST;case 35667:case 35671:return yT;case 35668:case 35672:return MT;case 35669:case 35673:return bT;case 5125:return ET;case 36294:return TT;case 36295:return AT;case 36296:return wT;case 35678:case 36198:case 36298:case 36306:case 35682:return RT;case 35679:case 36299:case 36307:return CT;case 35680:case 36300:case 36308:case 36293:return DT;case 36289:case 36303:case 36311:case 36292:return NT}}class LT{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=dT(n.type)}}class OT{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=UT(n.type)}}class IT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(t,n[h.id],a)}}}const sh=/(\w+)(\])?(\[|\.)?/g;function lv(r,t){r.seq.push(t),r.map[t.id]=t}function zT(r,t,n){const a=r.name,o=a.length;for(sh.lastIndex=0;;){const c=sh.exec(a),u=sh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&u+2===o){lv(n,p===void 0?new LT(h,r,t):new OT(h,r,t));break}else{let S=n.map[h];S===void 0&&(S=new IT(h),lv(n,S)),n=S}}}class Jc{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const h=t.getActiveUniform(n,u),m=t.getUniformLocation(n,h.name);zT(h,m,this)}const o=[],c=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(t,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],m=a[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&a.push(u)}return a}}function cv(r,t,n){const a=r.createShader(t);return r.shaderSource(a,n),r.compileShader(a),a}const PT=37297;let FT=0;function BT(r,t){const n=r.split(`
`),a=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const h=u+1;a.push(`${h===t?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const uv=new ve;function GT(r){Be._getMatrix(uv,Be.workingColorSpace,r);const t=`mat3( ${uv.elements.map(n=>n.toFixed(4))} )`;switch(Be.getTransfer(r)){case au:return[t,"LinearTransferOETF"];case nn:return[t,"sRGBTransferOETF"];default:return pe("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function fv(r,t,n){const a=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+BT(r.getShaderSource(t),h)}else return c}function HT(r,t){const n=GT(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const VT={[bv]:"Linear",[Ev]:"Reinhard",[Tv]:"Cineon",[Av]:"ACESFilmic",[Rv]:"AgX",[Cv]:"Neutral",[wv]:"Custom"};function kT(r,t){const n=VT[t];return n===void 0?(pe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Yc=new $;function WT(){Be.getLuminanceCoefficients(Yc);const r=Yc.x.toFixed(4),t=Yc.y.toFixed(4),n=Yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sl).join(`
`)}function YT(r){const t=[];for(const n in r){const a=r[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function qT(r,t){const n={},a=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=r.getActiveAttrib(t,o),u=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:r.getAttribLocation(t,u),locationSize:h}}return n}function sl(r){return r!==""}function dv(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jT=/^[ \t]*#include +<([\w\d./]+)>/gm;function op(r){return r.replace(jT,$T)}const ZT=new Map;function $T(r,t){let n=we[t];if(n===void 0){const a=ZT.get(t);if(a!==void 0)n=we[a],pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return op(n)}const KT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pv(r){return r.replace(KT,QT)}function QT(r,t,n,a){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function mv(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const JT={[jc]:"SHADOWMAP_TYPE_PCF",[al]:"SHADOWMAP_TYPE_VSM"};function tA(r){return JT[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const eA={[Ks]:"ENVMAP_TYPE_CUBE",[to]:"ENVMAP_TYPE_CUBE",[uu]:"ENVMAP_TYPE_CUBE_UV"};function nA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":eA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const iA={[to]:"ENVMAP_MODE_REFRACTION"};function aA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":iA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const sA={[fp]:"ENVMAP_BLENDING_MULTIPLY",[Hy]:"ENVMAP_BLENDING_MIX",[Vy]:"ENVMAP_BLENDING_ADD"};function rA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":sA[r.combine]||"ENVMAP_BLENDING_NONE"}function oA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function lA(r,t,n,a){const o=r.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const m=tA(n),p=nA(n),_=aA(n),S=rA(n),g=oA(n),M=XT(n),E=YT(c),R=o.createProgram();let y,x,C=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(sl).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(sl).join(`
`),x.length>0&&(x+=`
`)):(y=[mv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sl).join(`
`),x=[mv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+_:"",n.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==aa?"#define TONE_MAPPING":"",n.toneMapping!==aa?we.tonemapping_pars_fragment:"",n.toneMapping!==aa?kT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",we.colorspace_pars_fragment,HT("linearToOutputTexel",n.outputColorSpace),WT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(sl).join(`
`)),u=op(u),u=dv(u,n),u=hv(u,n),h=op(h),h=dv(h,n),h=hv(h,n),u=pv(u),h=pv(h),n.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",n.glslVersion===E_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===E_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=C+y+u,U=C+x+h,V=cv(o,o.VERTEX_SHADER,L),N=cv(o,o.FRAGMENT_SHADER,U);o.attachShader(R,V),o.attachShader(R,N),n.index0AttributeName!==void 0?o.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function P(H){if(r.debug.checkShaderErrors){const K=o.getProgramInfoLog(R)||"",dt=o.getShaderInfoLog(V)||"",mt=o.getShaderInfoLog(N)||"",X=K.trim(),O=dt.trim(),B=mt.trim();let st=!0,vt=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(st=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,R,V,N);else{const At=fv(o,V,"vertex"),I=fv(o,N,"fragment");Fe("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+X+`
`+At+`
`+I)}else X!==""?pe("WebGLProgram: Program Info Log:",X):(O===""||B==="")&&(vt=!1);vt&&(H.diagnostics={runnable:st,programLog:X,vertexShader:{log:O,prefix:y},fragmentShader:{log:B,prefix:x}})}o.deleteShader(V),o.deleteShader(N),T=new Jc(o,R),F=qT(o,R)}let T;this.getUniforms=function(){return T===void 0&&P(this),T};let F;this.getAttributes=function(){return F===void 0&&P(this),F};let Z=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=o.getProgramParameter(R,PT)),Z},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=FT++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=V,this.fragmentShader=N,this}let cA=0;class uA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(t);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new fA(t),n.set(t,a)),a}}class fA{constructor(t){this.id=cA++,this.code=t,this.usedTimes=0}}function dA(r){return r===Qs||r===tu||r===eu}function hA(r,t,n,a,o,c){const u=new yp,h=new uA,m=new Set,p=[],_=new Map,S=a.logarithmicDepthBuffer;let g=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function R(T,F,Z,H,K,dt){const mt=H.fog,X=K.geometry,O=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,B=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,st=t.get(T.envMap||O,B),vt=st&&st.mapping===uu?st.image.height:null,At=M[T.type];T.precision!==null&&(g=a.getMaxPrecision(T.precision),g!==T.precision&&pe("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const I=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Q=I!==void 0?I.length:0;let Mt=0;X.morphAttributes.position!==void 0&&(Mt=1),X.morphAttributes.normal!==void 0&&(Mt=2),X.morphAttributes.color!==void 0&&(Mt=3);let Rt,Nt,lt,Et;if(At){const ht=Ji[At];Rt=ht.vertexShader,Nt=ht.fragmentShader}else Rt=T.vertexShader,Nt=T.fragmentShader,h.update(T),lt=h.getVertexShaderID(T),Et=h.getFragmentShaderID(T);const wt=r.getRenderTarget(),bt=r.state.buffers.depth.getReversed(),Gt=K.isInstancedMesh===!0,Yt=K.isBatchedMesh===!0,Pt=!!T.map,oe=!!T.matcap,Me=!!st,De=!!T.aoMap,_e=!!T.lightMap,Xe=!!T.bumpMap,qe=!!T.normalMap,Ln=!!T.displacementMap,Y=!!T.emissiveMap,dn=!!T.metalnessMap,be=!!T.roughnessMap,Ce=T.anisotropy>0,Dt=T.clearcoat>0,ln=T.dispersion>0,D=T.iridescence>0,b=T.sheen>0,J=T.transmission>0,xt=Ce&&!!T.anisotropyMap,Tt=Dt&&!!T.clearcoatMap,Ut=Dt&&!!T.clearcoatNormalMap,zt=Dt&&!!T.clearcoatRoughnessMap,ft=D&&!!T.iridescenceMap,pt=D&&!!T.iridescenceThicknessMap,Ft=b&&!!T.sheenColorMap,Bt=b&&!!T.sheenRoughnessMap,Lt=!!T.specularMap,Ot=!!T.specularColorMap,fe=!!T.specularIntensityMap,de=J&&!!T.transmissionMap,Te=J&&!!T.thicknessMap,k=!!T.gradientMap,Ct=!!T.alphaMap,gt=T.alphaTest>0,Vt=!!T.alphaHash,z=!!T.extensions;let tt=aa;T.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(tt=r.toneMapping);const ct={shaderID:At,shaderType:T.type,shaderName:T.name,vertexShader:Rt,fragmentShader:Nt,defines:T.defines,customVertexShaderID:lt,customFragmentShaderID:Et,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Yt,batchingColor:Yt&&K._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&K.instanceColor!==null,instancingMorph:Gt&&K.morphTexture!==null,outputColorSpace:wt===null?r.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:Be.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Pt,matcap:oe,envMap:Me,envMapMode:Me&&st.mapping,envMapCubeUVHeight:vt,aoMap:De,lightMap:_e,bumpMap:Xe,normalMap:qe,displacementMap:Ln,emissiveMap:Y,normalMapObjectSpace:qe&&T.normalMapType===Xy,normalMapTangentSpace:qe&&T.normalMapType===nu,packedNormalMap:qe&&T.normalMapType===nu&&dA(T.normalMap.format),metalnessMap:dn,roughnessMap:be,anisotropy:Ce,anisotropyMap:xt,clearcoat:Dt,clearcoatMap:Tt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:zt,dispersion:ln,iridescence:D,iridescenceMap:ft,iridescenceThicknessMap:pt,sheen:b,sheenColorMap:Ft,sheenRoughnessMap:Bt,specularMap:Lt,specularColorMap:Ot,specularIntensityMap:fe,transmission:J,transmissionMap:de,thicknessMap:Te,gradientMap:k,opaque:T.transparent===!1&&T.blending===Kr&&T.alphaToCoverage===!1,alphaMap:Ct,alphaTest:gt,alphaHash:Vt,combine:T.combine,mapUv:Pt&&E(T.map.channel),aoMapUv:De&&E(T.aoMap.channel),lightMapUv:_e&&E(T.lightMap.channel),bumpMapUv:Xe&&E(T.bumpMap.channel),normalMapUv:qe&&E(T.normalMap.channel),displacementMapUv:Ln&&E(T.displacementMap.channel),emissiveMapUv:Y&&E(T.emissiveMap.channel),metalnessMapUv:dn&&E(T.metalnessMap.channel),roughnessMapUv:be&&E(T.roughnessMap.channel),anisotropyMapUv:xt&&E(T.anisotropyMap.channel),clearcoatMapUv:Tt&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:zt&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&E(T.sheenRoughnessMap.channel),specularMapUv:Lt&&E(T.specularMap.channel),specularColorMapUv:Ot&&E(T.specularColorMap.channel),specularIntensityMapUv:fe&&E(T.specularIntensityMap.channel),transmissionMapUv:de&&E(T.transmissionMap.channel),thicknessMapUv:Te&&E(T.thicknessMap.channel),alphaMapUv:Ct&&E(T.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(qe||Ce),vertexNormals:!!X.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!X.attributes.uv&&(Pt||Ct),fog:!!mt,useFog:T.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||X.attributes.normal===void 0&&qe===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:bt,skinning:K.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Mt,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numLightProbeGrids:dt.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&Z.length>0,shadowMapType:r.shadowMap.type,toneMapping:tt,decodeVideoTexture:Pt&&T.map.isVideoTexture===!0&&Be.getTransfer(T.map.colorSpace)===nn,decodeVideoTextureEmissive:Y&&T.emissiveMap.isVideoTexture===!0&&Be.getTransfer(T.emissiveMap.colorSpace)===nn,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ta,flipSided:T.side===ui,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:z&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(z&&T.extensions.multiDraw===!0||Yt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ct.vertexUv1s=m.has(1),ct.vertexUv2s=m.has(2),ct.vertexUv3s=m.has(3),m.clear(),ct}function y(T){const F=[];if(T.shaderID?F.push(T.shaderID):(F.push(T.customVertexShaderID),F.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Z in T.defines)F.push(Z),F.push(T.defines[Z]);return T.isRawShaderMaterial===!1&&(x(F,T),C(F,T),F.push(r.outputColorSpace)),F.push(T.customProgramCacheKey),F.join()}function x(T,F){T.push(F.precision),T.push(F.outputColorSpace),T.push(F.envMapMode),T.push(F.envMapCubeUVHeight),T.push(F.mapUv),T.push(F.alphaMapUv),T.push(F.lightMapUv),T.push(F.aoMapUv),T.push(F.bumpMapUv),T.push(F.normalMapUv),T.push(F.displacementMapUv),T.push(F.emissiveMapUv),T.push(F.metalnessMapUv),T.push(F.roughnessMapUv),T.push(F.anisotropyMapUv),T.push(F.clearcoatMapUv),T.push(F.clearcoatNormalMapUv),T.push(F.clearcoatRoughnessMapUv),T.push(F.iridescenceMapUv),T.push(F.iridescenceThicknessMapUv),T.push(F.sheenColorMapUv),T.push(F.sheenRoughnessMapUv),T.push(F.specularMapUv),T.push(F.specularColorMapUv),T.push(F.specularIntensityMapUv),T.push(F.transmissionMapUv),T.push(F.thicknessMapUv),T.push(F.combine),T.push(F.fogExp2),T.push(F.sizeAttenuation),T.push(F.morphTargetsCount),T.push(F.morphAttributeCount),T.push(F.numDirLights),T.push(F.numPointLights),T.push(F.numSpotLights),T.push(F.numSpotLightMaps),T.push(F.numHemiLights),T.push(F.numRectAreaLights),T.push(F.numDirLightShadows),T.push(F.numPointLightShadows),T.push(F.numSpotLightShadows),T.push(F.numSpotLightShadowsWithMaps),T.push(F.numLightProbes),T.push(F.shadowMapType),T.push(F.toneMapping),T.push(F.numClippingPlanes),T.push(F.numClipIntersection),T.push(F.depthPacking)}function C(T,F){u.disableAll(),F.instancing&&u.enable(0),F.instancingColor&&u.enable(1),F.instancingMorph&&u.enable(2),F.matcap&&u.enable(3),F.envMap&&u.enable(4),F.normalMapObjectSpace&&u.enable(5),F.normalMapTangentSpace&&u.enable(6),F.clearcoat&&u.enable(7),F.iridescence&&u.enable(8),F.alphaTest&&u.enable(9),F.vertexColors&&u.enable(10),F.vertexAlphas&&u.enable(11),F.vertexUv1s&&u.enable(12),F.vertexUv2s&&u.enable(13),F.vertexUv3s&&u.enable(14),F.vertexTangents&&u.enable(15),F.anisotropy&&u.enable(16),F.alphaHash&&u.enable(17),F.batching&&u.enable(18),F.dispersion&&u.enable(19),F.batchingColor&&u.enable(20),F.gradientMap&&u.enable(21),F.packedNormalMap&&u.enable(22),F.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),F.fog&&u.enable(0),F.useFog&&u.enable(1),F.flatShading&&u.enable(2),F.logarithmicDepthBuffer&&u.enable(3),F.reversedDepthBuffer&&u.enable(4),F.skinning&&u.enable(5),F.morphTargets&&u.enable(6),F.morphNormals&&u.enable(7),F.morphColors&&u.enable(8),F.premultipliedAlpha&&u.enable(9),F.shadowMapEnabled&&u.enable(10),F.doubleSided&&u.enable(11),F.flipSided&&u.enable(12),F.useDepthPacking&&u.enable(13),F.dithering&&u.enable(14),F.transmission&&u.enable(15),F.sheen&&u.enable(16),F.opaque&&u.enable(17),F.pointsUvs&&u.enable(18),F.decodeVideoTexture&&u.enable(19),F.decodeVideoTextureEmissive&&u.enable(20),F.alphaToCoverage&&u.enable(21),F.numLightProbeGrids>0&&u.enable(22),T.push(u.mask)}function L(T){const F=M[T.type];let Z;if(F){const H=Ji[F];Z=NM.clone(H.uniforms)}else Z=T.uniforms;return Z}function U(T,F){let Z=_.get(F);return Z!==void 0?++Z.usedTimes:(Z=new lA(r,F,T,o),p.push(Z),_.set(F,Z)),Z}function V(T){if(--T.usedTimes===0){const F=p.indexOf(T);p[F]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function N(T){h.remove(T)}function P(){h.dispose()}return{getParameters:R,getProgramCacheKey:y,getUniforms:L,acquireProgram:U,releaseProgram:V,releaseShaderCache:N,programs:p,dispose:P}}function pA(){let r=new WeakMap;function t(u){return r.has(u)}function n(u){let h=r.get(u);return h===void 0&&(h={},r.set(u,h)),h}function a(u){r.delete(u)}function o(u,h,m){r.get(u)[h]=m}function c(){r=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:c}}function mA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function gv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function _v(){const r=[];let t=0;const n=[],a=[],o=[];function c(){t=0,n.length=0,a.length=0,o.length=0}function u(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function h(g,M,E,R,y,x){let C=r[t];return C===void 0?(C={id:g.id,object:g,geometry:M,material:E,materialVariant:u(g),groupOrder:R,renderOrder:g.renderOrder,z:y,group:x},r[t]=C):(C.id=g.id,C.object=g,C.geometry=M,C.material=E,C.materialVariant=u(g),C.groupOrder=R,C.renderOrder=g.renderOrder,C.z=y,C.group=x),t++,C}function m(g,M,E,R,y,x){const C=h(g,M,E,R,y,x);E.transmission>0?a.push(C):E.transparent===!0?o.push(C):n.push(C)}function p(g,M,E,R,y,x){const C=h(g,M,E,R,y,x);E.transmission>0?a.unshift(C):E.transparent===!0?o.unshift(C):n.unshift(C)}function _(g,M){n.length>1&&n.sort(g||mA),a.length>1&&a.sort(M||gv),o.length>1&&o.sort(M||gv)}function S(){for(let g=t,M=r.length;g<M;g++){const E=r[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:m,unshift:p,finish:S,sort:_}}function gA(){let r=new WeakMap;function t(a,o){const c=r.get(a);let u;return c===void 0?(u=new _v,r.set(a,[u])):o>=c.length?(u=new _v,c.push(u)):u=c[o],u}function n(){r=new WeakMap}return{get:t,dispose:n}}function _A(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new $,color:new Oe};break;case"SpotLight":n={position:new $,direction:new $,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":n={color:new Oe,position:new $,halfWidth:new $,halfHeight:new $};break}return r[t.id]=n,n}}}function vA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let xA=0;function SA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function yA(r){const t=new _A,n=vA(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new $);const o=new $,c=new xn,u=new xn;function h(p){let _=0,S=0,g=0;for(let F=0;F<9;F++)a.probe[F].set(0,0,0);let M=0,E=0,R=0,y=0,x=0,C=0,L=0,U=0,V=0,N=0,P=0;p.sort(SA);for(let F=0,Z=p.length;F<Z;F++){const H=p[F],K=H.color,dt=H.intensity,mt=H.distance;let X=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Qs?X=H.shadow.map.texture:X=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)_+=K.r*dt,S+=K.g*dt,g+=K.b*dt;else if(H.isLightProbe){for(let O=0;O<9;O++)a.probe[O].addScaledVector(H.sh.coefficients[O],dt);P++}else if(H.isDirectionalLight){const O=t.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const B=H.shadow,st=n.get(H);st.shadowIntensity=B.intensity,st.shadowBias=B.bias,st.shadowNormalBias=B.normalBias,st.shadowRadius=B.radius,st.shadowMapSize=B.mapSize,a.directionalShadow[M]=st,a.directionalShadowMap[M]=X,a.directionalShadowMatrix[M]=H.shadow.matrix,C++}a.directional[M]=O,M++}else if(H.isSpotLight){const O=t.get(H);O.position.setFromMatrixPosition(H.matrixWorld),O.color.copy(K).multiplyScalar(dt),O.distance=mt,O.coneCos=Math.cos(H.angle),O.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),O.decay=H.decay,a.spot[R]=O;const B=H.shadow;if(H.map&&(a.spotLightMap[V]=H.map,V++,B.updateMatrices(H),H.castShadow&&N++),a.spotLightMatrix[R]=B.matrix,H.castShadow){const st=n.get(H);st.shadowIntensity=B.intensity,st.shadowBias=B.bias,st.shadowNormalBias=B.normalBias,st.shadowRadius=B.radius,st.shadowMapSize=B.mapSize,a.spotShadow[R]=st,a.spotShadowMap[R]=X,U++}R++}else if(H.isRectAreaLight){const O=t.get(H);O.color.copy(K).multiplyScalar(dt),O.halfWidth.set(H.width*.5,0,0),O.halfHeight.set(0,H.height*.5,0),a.rectArea[y]=O,y++}else if(H.isPointLight){const O=t.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),O.distance=H.distance,O.decay=H.decay,H.castShadow){const B=H.shadow,st=n.get(H);st.shadowIntensity=B.intensity,st.shadowBias=B.bias,st.shadowNormalBias=B.normalBias,st.shadowRadius=B.radius,st.shadowMapSize=B.mapSize,st.shadowCameraNear=B.camera.near,st.shadowCameraFar=B.camera.far,a.pointShadow[E]=st,a.pointShadowMap[E]=X,a.pointShadowMatrix[E]=H.shadow.matrix,L++}a.point[E]=O,E++}else if(H.isHemisphereLight){const O=t.get(H);O.skyColor.copy(H.color).multiplyScalar(dt),O.groundColor.copy(H.groundColor).multiplyScalar(dt),a.hemi[x]=O,x++}}y>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Xt.LTC_FLOAT_1,a.rectAreaLTC2=Xt.LTC_FLOAT_2):(a.rectAreaLTC1=Xt.LTC_HALF_1,a.rectAreaLTC2=Xt.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=S,a.ambient[2]=g;const T=a.hash;(T.directionalLength!==M||T.pointLength!==E||T.spotLength!==R||T.rectAreaLength!==y||T.hemiLength!==x||T.numDirectionalShadows!==C||T.numPointShadows!==L||T.numSpotShadows!==U||T.numSpotMaps!==V||T.numLightProbes!==P)&&(a.directional.length=M,a.spot.length=R,a.rectArea.length=y,a.point.length=E,a.hemi.length=x,a.directionalShadow.length=C,a.directionalShadowMap.length=C,a.pointShadow.length=L,a.pointShadowMap.length=L,a.spotShadow.length=U,a.spotShadowMap.length=U,a.directionalShadowMatrix.length=C,a.pointShadowMatrix.length=L,a.spotLightMatrix.length=U+V-N,a.spotLightMap.length=V,a.numSpotLightShadowsWithMaps=N,a.numLightProbes=P,T.directionalLength=M,T.pointLength=E,T.spotLength=R,T.rectAreaLength=y,T.hemiLength=x,T.numDirectionalShadows=C,T.numPointShadows=L,T.numSpotShadows=U,T.numSpotMaps=V,T.numLightProbes=P,a.version=xA++)}function m(p,_){let S=0,g=0,M=0,E=0,R=0;const y=_.matrixWorldInverse;for(let x=0,C=p.length;x<C;x++){const L=p[x];if(L.isDirectionalLight){const U=a.directional[S];U.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(y),S++}else if(L.isSpotLight){const U=a.spot[M];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(y),M++}else if(L.isRectAreaLight){const U=a.rectArea[E];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(y),u.identity(),c.copy(L.matrixWorld),c.premultiply(y),u.extractRotation(c),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),U.halfWidth.applyMatrix4(u),U.halfHeight.applyMatrix4(u),E++}else if(L.isPointLight){const U=a.point[g];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(y),g++}else if(L.isHemisphereLight){const U=a.hemi[R];U.direction.setFromMatrixPosition(L.matrixWorld),U.direction.transformDirection(y),R++}}}return{setup:h,setupView:m,state:a}}function vv(r){const t=new yA(r),n=[],a=[],o=[];function c(g){S.camera=g,n.length=0,a.length=0,o.length=0}function u(g){n.push(g)}function h(g){a.push(g)}function m(g){o.push(g)}function p(){t.setup(n)}function _(g){t.setupView(n,g)}const S={lightsArray:n,shadowsArray:a,lightProbeGridArray:o,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:S,setupLights:p,setupLightsView:_,pushLight:u,pushShadow:h,pushLightProbeGrid:m}}function MA(r){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let h;return u===void 0?(h=new vv(r),t.set(o,[h])):c>=u.length?(h=new vv(r),u.push(h)):h=u[c],h}function a(){t=new WeakMap}return{get:n,dispose:a}}const bA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EA=`uniform sampler2D shadow_pass;
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
}`,TA=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],AA=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],xv=new xn,il=new $,rh=new $;function wA(r,t,n){let a=new Ep;const o=new Re,c=new Re,u=new Mn,h=new zM,m=new PM,p={},_=n.maxTextureSize,S={[Ms]:ui,[ui]:Ms,[ta]:ta},g=new la({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:bA,fragmentShader:EA}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const E=new ca;E.setAttribute("position",new Xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new vn(E,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jc;let x=this.type;this.render=function(N,P,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;this.type===Mv&&(pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=jc);const F=r.getRenderTarget(),Z=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),K=r.state;K.setBlending(La),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const dt=x!==this.type;dt&&P.traverse(function(mt){mt.material&&(Array.isArray(mt.material)?mt.material.forEach(X=>X.needsUpdate=!0):mt.material.needsUpdate=!0)});for(let mt=0,X=N.length;mt<X;mt++){const O=N[mt],B=O.shadow;if(B===void 0){pe("WebGLShadowMap:",O,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;o.copy(B.mapSize);const st=B.getFrameExtents();o.multiply(st),c.copy(B.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(c.x=Math.floor(_/st.x),o.x=c.x*st.x,B.mapSize.x=c.x),o.y>_&&(c.y=Math.floor(_/st.y),o.y=c.y*st.y,B.mapSize.y=c.y));const vt=r.state.buffers.depth.getReversed();if(B.camera._reversedDepth=vt,B.map===null||dt===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===al){if(O.isPointLight){pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new sa(o.x,o.y,{format:Qs,type:za,minFilter:$n,magFilter:$n,generateMipmaps:!1}),B.map.texture.name=O.name+".shadowMap",B.map.depthTexture=new eo(o.x,o.y,na),B.map.depthTexture.name=O.name+".shadowMapDepth",B.map.depthTexture.format=Pa,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Xn,B.map.depthTexture.magFilter=Xn}else O.isPointLight?(B.map=new tx(o.x),B.map.depthTexture=new CM(o.x,ra)):(B.map=new sa(o.x,o.y),B.map.depthTexture=new eo(o.x,o.y,ra)),B.map.depthTexture.name=O.name+".shadowMap",B.map.depthTexture.format=Pa,this.type===jc?(B.map.depthTexture.compareFunction=vt?xp:vp,B.map.depthTexture.minFilter=$n,B.map.depthTexture.magFilter=$n):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Xn,B.map.depthTexture.magFilter=Xn);B.camera.updateProjectionMatrix()}const At=B.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<At;I++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,I),r.clear();else{I===0&&(r.setRenderTarget(B.map),r.clear());const Q=B.getViewport(I);u.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),K.viewport(u)}if(O.isPointLight){const Q=B.camera,Mt=B.matrix,Rt=O.distance||Q.far;Rt!==Q.far&&(Q.far=Rt,Q.updateProjectionMatrix()),il.setFromMatrixPosition(O.matrixWorld),Q.position.copy(il),rh.copy(Q.position),rh.add(TA[I]),Q.up.copy(AA[I]),Q.lookAt(rh),Q.updateMatrixWorld(),Mt.makeTranslation(-il.x,-il.y,-il.z),xv.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),B._frustum.setFromProjectionMatrix(xv,Q.coordinateSystem,Q.reversedDepth)}else B.updateMatrices(O);a=B.getFrustum(),U(P,T,B.camera,O,this.type)}B.isPointLightShadow!==!0&&this.type===al&&C(B,T),B.needsUpdate=!1}x=this.type,y.needsUpdate=!1,r.setRenderTarget(F,Z,H)};function C(N,P){const T=t.update(R);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new sa(o.x,o.y,{format:Qs,type:za})),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(P,null,T,g,R,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value=N.mapSize,M.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(P,null,T,M,R,null)}function L(N,P,T,F){let Z=null;const H=T.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(H!==void 0)Z=H;else if(Z=T.isPointLight===!0?m:h,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const K=Z.uuid,dt=P.uuid;let mt=p[K];mt===void 0&&(mt={},p[K]=mt);let X=mt[dt];X===void 0&&(X=Z.clone(),mt[dt]=X,P.addEventListener("dispose",V)),Z=X}if(Z.visible=P.visible,Z.wireframe=P.wireframe,F===al?Z.side=P.shadowSide!==null?P.shadowSide:P.side:Z.side=P.shadowSide!==null?P.shadowSide:S[P.side],Z.alphaMap=P.alphaMap,Z.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,Z.map=P.map,Z.clipShadows=P.clipShadows,Z.clippingPlanes=P.clippingPlanes,Z.clipIntersection=P.clipIntersection,Z.displacementMap=P.displacementMap,Z.displacementScale=P.displacementScale,Z.displacementBias=P.displacementBias,Z.wireframeLinewidth=P.wireframeLinewidth,Z.linewidth=P.linewidth,T.isPointLight===!0&&Z.isMeshDistanceMaterial===!0){const K=r.properties.get(Z);K.light=T}return Z}function U(N,P,T,F,Z){if(N.visible===!1)return;if(N.layers.test(P.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&Z===al)&&(!N.frustumCulled||a.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,N.matrixWorld);const dt=t.update(N),mt=N.material;if(Array.isArray(mt)){const X=dt.groups;for(let O=0,B=X.length;O<B;O++){const st=X[O],vt=mt[st.materialIndex];if(vt&&vt.visible){const At=L(N,vt,F,Z);N.onBeforeShadow(r,N,P,T,dt,At,st),r.renderBufferDirect(T,null,dt,At,N,st),N.onAfterShadow(r,N,P,T,dt,At,st)}}}else if(mt.visible){const X=L(N,mt,F,Z);N.onBeforeShadow(r,N,P,T,dt,X,null),r.renderBufferDirect(T,null,dt,X,N,null),N.onAfterShadow(r,N,P,T,dt,X,null)}}const K=N.children;for(let dt=0,mt=K.length;dt<mt;dt++)U(K[dt],P,T,F,Z)}function V(N){N.target.removeEventListener("dispose",V);for(const T in p){const F=p[T],Z=N.target.uuid;Z in F&&(F[Z].dispose(),delete F[Z])}}}function RA(r,t){function n(){let k=!1;const Ct=new Mn;let gt=null;const Vt=new Mn(0,0,0,0);return{setMask:function(z){gt!==z&&!k&&(r.colorMask(z,z,z,z),gt=z)},setLocked:function(z){k=z},setClear:function(z,tt,ct,ht,Jt){Jt===!0&&(z*=ht,tt*=ht,ct*=ht),Ct.set(z,tt,ct,ht),Vt.equals(Ct)===!1&&(r.clearColor(z,tt,ct,ht),Vt.copy(Ct))},reset:function(){k=!1,gt=null,Vt.set(-1,0,0,0)}}}function a(){let k=!1,Ct=!1,gt=null,Vt=null,z=null;return{setReversed:function(tt){if(Ct!==tt){const ct=t.get("EXT_clip_control");tt?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT),Ct=tt;const ht=z;z=null,this.setClear(ht)}},getReversed:function(){return Ct},setTest:function(tt){tt?wt(r.DEPTH_TEST):bt(r.DEPTH_TEST)},setMask:function(tt){gt!==tt&&!k&&(r.depthMask(tt),gt=tt)},setFunc:function(tt){if(Ct&&(tt=eM[tt]),Vt!==tt){switch(tt){case _h:r.depthFunc(r.NEVER);break;case vh:r.depthFunc(r.ALWAYS);break;case xh:r.depthFunc(r.LESS);break;case Jr:r.depthFunc(r.LEQUAL);break;case Sh:r.depthFunc(r.EQUAL);break;case yh:r.depthFunc(r.GEQUAL);break;case Mh:r.depthFunc(r.GREATER);break;case bh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Vt=tt}},setLocked:function(tt){k=tt},setClear:function(tt){z!==tt&&(z=tt,Ct&&(tt=1-tt),r.clearDepth(tt))},reset:function(){k=!1,gt=null,Vt=null,z=null,Ct=!1}}}function o(){let k=!1,Ct=null,gt=null,Vt=null,z=null,tt=null,ct=null,ht=null,Jt=null;return{setTest:function(ae){k||(ae?wt(r.STENCIL_TEST):bt(r.STENCIL_TEST))},setMask:function(ae){Ct!==ae&&!k&&(r.stencilMask(ae),Ct=ae)},setFunc:function(ae,jt,xe){(gt!==ae||Vt!==jt||z!==xe)&&(r.stencilFunc(ae,jt,xe),gt=ae,Vt=jt,z=xe)},setOp:function(ae,jt,xe){(tt!==ae||ct!==jt||ht!==xe)&&(r.stencilOp(ae,jt,xe),tt=ae,ct=jt,ht=xe)},setLocked:function(ae){k=ae},setClear:function(ae){Jt!==ae&&(r.clearStencil(ae),Jt=ae)},reset:function(){k=!1,Ct=null,gt=null,Vt=null,z=null,tt=null,ct=null,ht=null,Jt=null}}}const c=new n,u=new a,h=new o,m=new WeakMap,p=new WeakMap;let _={},S={},g={},M=new WeakMap,E=[],R=null,y=!1,x=null,C=null,L=null,U=null,V=null,N=null,P=null,T=new Oe(0,0,0),F=0,Z=!1,H=null,K=null,dt=null,mt=null,X=null;const O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,st=0;const vt=r.getParameter(r.VERSION);vt.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(vt)[1]),B=st>=1):vt.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(vt)[1]),B=st>=2);let At=null,I={};const Q=r.getParameter(r.SCISSOR_BOX),Mt=r.getParameter(r.VIEWPORT),Rt=new Mn().fromArray(Q),Nt=new Mn().fromArray(Mt);function lt(k,Ct,gt,Vt){const z=new Uint8Array(4),tt=r.createTexture();r.bindTexture(k,tt),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ct=0;ct<gt;ct++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(Ct,0,r.RGBA,1,1,Vt,0,r.RGBA,r.UNSIGNED_BYTE,z):r.texImage2D(Ct+ct,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,z);return tt}const Et={};Et[r.TEXTURE_2D]=lt(r.TEXTURE_2D,r.TEXTURE_2D,1),Et[r.TEXTURE_CUBE_MAP]=lt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[r.TEXTURE_2D_ARRAY]=lt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Et[r.TEXTURE_3D]=lt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),wt(r.DEPTH_TEST),u.setFunc(Jr),Xe(!1),qe(x_),wt(r.CULL_FACE),De(La);function wt(k){_[k]!==!0&&(r.enable(k),_[k]=!0)}function bt(k){_[k]!==!1&&(r.disable(k),_[k]=!1)}function Gt(k,Ct){return g[k]!==Ct?(r.bindFramebuffer(k,Ct),g[k]=Ct,k===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Ct),k===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Yt(k,Ct){let gt=E,Vt=!1;if(k){gt=M.get(Ct),gt===void 0&&(gt=[],M.set(Ct,gt));const z=k.textures;if(gt.length!==z.length||gt[0]!==r.COLOR_ATTACHMENT0){for(let tt=0,ct=z.length;tt<ct;tt++)gt[tt]=r.COLOR_ATTACHMENT0+tt;gt.length=z.length,Vt=!0}}else gt[0]!==r.BACK&&(gt[0]=r.BACK,Vt=!0);Vt&&r.drawBuffers(gt)}function Pt(k){return R!==k?(r.useProgram(k),R=k,!0):!1}const oe={[qs]:r.FUNC_ADD,[Ey]:r.FUNC_SUBTRACT,[Ty]:r.FUNC_REVERSE_SUBTRACT};oe[Ay]=r.MIN,oe[wy]=r.MAX;const Me={[Ry]:r.ZERO,[Cy]:r.ONE,[Dy]:r.SRC_COLOR,[mh]:r.SRC_ALPHA,[zy]:r.SRC_ALPHA_SATURATE,[Oy]:r.DST_COLOR,[Uy]:r.DST_ALPHA,[Ny]:r.ONE_MINUS_SRC_COLOR,[gh]:r.ONE_MINUS_SRC_ALPHA,[Iy]:r.ONE_MINUS_DST_COLOR,[Ly]:r.ONE_MINUS_DST_ALPHA,[Py]:r.CONSTANT_COLOR,[Fy]:r.ONE_MINUS_CONSTANT_COLOR,[By]:r.CONSTANT_ALPHA,[Gy]:r.ONE_MINUS_CONSTANT_ALPHA};function De(k,Ct,gt,Vt,z,tt,ct,ht,Jt,ae){if(k===La){y===!0&&(bt(r.BLEND),y=!1);return}if(y===!1&&(wt(r.BLEND),y=!0),k!==by){if(k!==x||ae!==Z){if((C!==qs||V!==qs)&&(r.blendEquation(r.FUNC_ADD),C=qs,V=qs),ae)switch(k){case Kr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case S_:r.blendFunc(r.ONE,r.ONE);break;case y_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case M_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Fe("WebGLState: Invalid blending: ",k);break}else switch(k){case Kr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case S_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case y_:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case M_:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",k);break}L=null,U=null,N=null,P=null,T.set(0,0,0),F=0,x=k,Z=ae}return}z=z||Ct,tt=tt||gt,ct=ct||Vt,(Ct!==C||z!==V)&&(r.blendEquationSeparate(oe[Ct],oe[z]),C=Ct,V=z),(gt!==L||Vt!==U||tt!==N||ct!==P)&&(r.blendFuncSeparate(Me[gt],Me[Vt],Me[tt],Me[ct]),L=gt,U=Vt,N=tt,P=ct),(ht.equals(T)===!1||Jt!==F)&&(r.blendColor(ht.r,ht.g,ht.b,Jt),T.copy(ht),F=Jt),x=k,Z=!1}function _e(k,Ct){k.side===ta?bt(r.CULL_FACE):wt(r.CULL_FACE);let gt=k.side===ui;Ct&&(gt=!gt),Xe(gt),k.blending===Kr&&k.transparent===!1?De(La):De(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),u.setFunc(k.depthFunc),u.setTest(k.depthTest),u.setMask(k.depthWrite),c.setMask(k.colorWrite);const Vt=k.stencilWrite;h.setTest(Vt),Vt&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Y(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?wt(r.SAMPLE_ALPHA_TO_COVERAGE):bt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(k){H!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),H=k)}function qe(k){k!==yy?(wt(r.CULL_FACE),k!==K&&(k===x_?r.cullFace(r.BACK):k===My?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):bt(r.CULL_FACE),K=k}function Ln(k){k!==dt&&(B&&r.lineWidth(k),dt=k)}function Y(k,Ct,gt){k?(wt(r.POLYGON_OFFSET_FILL),(mt!==Ct||X!==gt)&&(mt=Ct,X=gt,u.getReversed()&&(Ct=-Ct),r.polygonOffset(Ct,gt))):bt(r.POLYGON_OFFSET_FILL)}function dn(k){k?wt(r.SCISSOR_TEST):bt(r.SCISSOR_TEST)}function be(k){k===void 0&&(k=r.TEXTURE0+O-1),At!==k&&(r.activeTexture(k),At=k)}function Ce(k,Ct,gt){gt===void 0&&(At===null?gt=r.TEXTURE0+O-1:gt=At);let Vt=I[gt];Vt===void 0&&(Vt={type:void 0,texture:void 0},I[gt]=Vt),(Vt.type!==k||Vt.texture!==Ct)&&(At!==gt&&(r.activeTexture(gt),At=gt),r.bindTexture(k,Ct||Et[k]),Vt.type=k,Vt.texture=Ct)}function Dt(){const k=I[At];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ln(){try{r.compressedTexImage2D(...arguments)}catch(k){Fe("WebGLState:",k)}}function D(){try{r.compressedTexImage3D(...arguments)}catch(k){Fe("WebGLState:",k)}}function b(){try{r.texSubImage2D(...arguments)}catch(k){Fe("WebGLState:",k)}}function J(){try{r.texSubImage3D(...arguments)}catch(k){Fe("WebGLState:",k)}}function xt(){try{r.compressedTexSubImage2D(...arguments)}catch(k){Fe("WebGLState:",k)}}function Tt(){try{r.compressedTexSubImage3D(...arguments)}catch(k){Fe("WebGLState:",k)}}function Ut(){try{r.texStorage2D(...arguments)}catch(k){Fe("WebGLState:",k)}}function zt(){try{r.texStorage3D(...arguments)}catch(k){Fe("WebGLState:",k)}}function ft(){try{r.texImage2D(...arguments)}catch(k){Fe("WebGLState:",k)}}function pt(){try{r.texImage3D(...arguments)}catch(k){Fe("WebGLState:",k)}}function Ft(k){return S[k]!==void 0?S[k]:r.getParameter(k)}function Bt(k,Ct){S[k]!==Ct&&(r.pixelStorei(k,Ct),S[k]=Ct)}function Lt(k){Rt.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),Rt.copy(k))}function Ot(k){Nt.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),Nt.copy(k))}function fe(k,Ct){let gt=p.get(Ct);gt===void 0&&(gt=new WeakMap,p.set(Ct,gt));let Vt=gt.get(k);Vt===void 0&&(Vt=r.getUniformBlockIndex(Ct,k.name),gt.set(k,Vt))}function de(k,Ct){const Vt=p.get(Ct).get(k);m.get(Ct)!==Vt&&(r.uniformBlockBinding(Ct,Vt,k.__bindingPointIndex),m.set(Ct,Vt))}function Te(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},S={},At=null,I={},g={},M=new WeakMap,E=[],R=null,y=!1,x=null,C=null,L=null,U=null,V=null,N=null,P=null,T=new Oe(0,0,0),F=0,Z=!1,H=null,K=null,dt=null,mt=null,X=null,Rt.set(0,0,r.canvas.width,r.canvas.height),Nt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:wt,disable:bt,bindFramebuffer:Gt,drawBuffers:Yt,useProgram:Pt,setBlending:De,setMaterial:_e,setFlipSided:Xe,setCullFace:qe,setLineWidth:Ln,setPolygonOffset:Y,setScissorTest:dn,activeTexture:be,bindTexture:Ce,unbindTexture:Dt,compressedTexImage2D:ln,compressedTexImage3D:D,texImage2D:ft,texImage3D:pt,pixelStorei:Bt,getParameter:Ft,updateUBOMapping:fe,uniformBlockBinding:de,texStorage2D:Ut,texStorage3D:zt,texSubImage2D:b,texSubImage3D:J,compressedTexSubImage2D:xt,compressedTexSubImage3D:Tt,scissor:Lt,viewport:Ot,reset:Te}}function CA(r,t,n,a,o,c,u){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Re,_=new WeakMap,S=new Set;let g;const M=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(D,b){return E?new OffscreenCanvas(D,b):su("canvas")}function y(D,b,J){let xt=1;const Tt=ln(D);if((Tt.width>J||Tt.height>J)&&(xt=J/Math.max(Tt.width,Tt.height)),xt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Ut=Math.floor(xt*Tt.width),zt=Math.floor(xt*Tt.height);g===void 0&&(g=R(Ut,zt));const ft=b?R(Ut,zt):g;return ft.width=Ut,ft.height=zt,ft.getContext("2d").drawImage(D,0,0,Ut,zt),pe("WebGLRenderer: Texture has been resized from ("+Tt.width+"x"+Tt.height+") to ("+Ut+"x"+zt+")."),ft}else return"data"in D&&pe("WebGLRenderer: Image in DataTexture is too big ("+Tt.width+"x"+Tt.height+")."),D;return D}function x(D){return D.generateMipmaps}function C(D){r.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(D,b,J,xt,Tt,Ut=!1){if(D!==null){if(r[D]!==void 0)return r[D];pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let zt;xt&&(zt=t.get("EXT_texture_norm16"),zt||pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ft=b;if(b===r.RED&&(J===r.FLOAT&&(ft=r.R32F),J===r.HALF_FLOAT&&(ft=r.R16F),J===r.UNSIGNED_BYTE&&(ft=r.R8),J===r.UNSIGNED_SHORT&&zt&&(ft=zt.R16_EXT),J===r.SHORT&&zt&&(ft=zt.R16_SNORM_EXT)),b===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(ft=r.R8UI),J===r.UNSIGNED_SHORT&&(ft=r.R16UI),J===r.UNSIGNED_INT&&(ft=r.R32UI),J===r.BYTE&&(ft=r.R8I),J===r.SHORT&&(ft=r.R16I),J===r.INT&&(ft=r.R32I)),b===r.RG&&(J===r.FLOAT&&(ft=r.RG32F),J===r.HALF_FLOAT&&(ft=r.RG16F),J===r.UNSIGNED_BYTE&&(ft=r.RG8),J===r.UNSIGNED_SHORT&&zt&&(ft=zt.RG16_EXT),J===r.SHORT&&zt&&(ft=zt.RG16_SNORM_EXT)),b===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(ft=r.RG8UI),J===r.UNSIGNED_SHORT&&(ft=r.RG16UI),J===r.UNSIGNED_INT&&(ft=r.RG32UI),J===r.BYTE&&(ft=r.RG8I),J===r.SHORT&&(ft=r.RG16I),J===r.INT&&(ft=r.RG32I)),b===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(ft=r.RGB8UI),J===r.UNSIGNED_SHORT&&(ft=r.RGB16UI),J===r.UNSIGNED_INT&&(ft=r.RGB32UI),J===r.BYTE&&(ft=r.RGB8I),J===r.SHORT&&(ft=r.RGB16I),J===r.INT&&(ft=r.RGB32I)),b===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(ft=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(ft=r.RGBA16UI),J===r.UNSIGNED_INT&&(ft=r.RGBA32UI),J===r.BYTE&&(ft=r.RGBA8I),J===r.SHORT&&(ft=r.RGBA16I),J===r.INT&&(ft=r.RGBA32I)),b===r.RGB&&(J===r.UNSIGNED_SHORT&&zt&&(ft=zt.RGB16_EXT),J===r.SHORT&&zt&&(ft=zt.RGB16_SNORM_EXT),J===r.UNSIGNED_INT_5_9_9_9_REV&&(ft=r.RGB9_E5),J===r.UNSIGNED_INT_10F_11F_11F_REV&&(ft=r.R11F_G11F_B10F)),b===r.RGBA){const pt=Ut?au:Be.getTransfer(Tt);J===r.FLOAT&&(ft=r.RGBA32F),J===r.HALF_FLOAT&&(ft=r.RGBA16F),J===r.UNSIGNED_BYTE&&(ft=pt===nn?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT&&zt&&(ft=zt.RGBA16_EXT),J===r.SHORT&&zt&&(ft=zt.RGBA16_SNORM_EXT),J===r.UNSIGNED_SHORT_4_4_4_4&&(ft=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(ft=r.RGB5_A1)}return(ft===r.R16F||ft===r.R32F||ft===r.RG16F||ft===r.RG32F||ft===r.RGBA16F||ft===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function V(D,b){let J;return D?b===null||b===ra||b===ul?J=r.DEPTH24_STENCIL8:b===na?J=r.DEPTH32F_STENCIL8:b===cl&&(J=r.DEPTH24_STENCIL8,pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ra||b===ul?J=r.DEPTH_COMPONENT24:b===na?J=r.DEPTH_COMPONENT32F:b===cl&&(J=r.DEPTH_COMPONENT16),J}function N(D,b){return x(D)===!0||D.isFramebufferTexture&&D.minFilter!==Xn&&D.minFilter!==$n?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function P(D){const b=D.target;b.removeEventListener("dispose",P),F(b),b.isVideoTexture&&_.delete(b),b.isHTMLTexture&&S.delete(b)}function T(D){const b=D.target;b.removeEventListener("dispose",T),H(b)}function F(D){const b=a.get(D);if(b.__webglInit===void 0)return;const J=D.source,xt=M.get(J);if(xt){const Tt=xt[b.__cacheKey];Tt.usedTimes--,Tt.usedTimes===0&&Z(D),Object.keys(xt).length===0&&M.delete(J)}a.remove(D)}function Z(D){const b=a.get(D);r.deleteTexture(b.__webglTexture);const J=D.source,xt=M.get(J);delete xt[b.__cacheKey],u.memory.textures--}function H(D){const b=a.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),a.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let xt=0;xt<6;xt++){if(Array.isArray(b.__webglFramebuffer[xt]))for(let Tt=0;Tt<b.__webglFramebuffer[xt].length;Tt++)r.deleteFramebuffer(b.__webglFramebuffer[xt][Tt]);else r.deleteFramebuffer(b.__webglFramebuffer[xt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[xt])}else{if(Array.isArray(b.__webglFramebuffer))for(let xt=0;xt<b.__webglFramebuffer.length;xt++)r.deleteFramebuffer(b.__webglFramebuffer[xt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let xt=0;xt<b.__webglColorRenderbuffer.length;xt++)b.__webglColorRenderbuffer[xt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[xt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const J=D.textures;for(let xt=0,Tt=J.length;xt<Tt;xt++){const Ut=a.get(J[xt]);Ut.__webglTexture&&(r.deleteTexture(Ut.__webglTexture),u.memory.textures--),a.remove(J[xt])}a.remove(D)}let K=0;function dt(){K=0}function mt(){return K}function X(D){K=D}function O(){const D=K;return D>=o.maxTextures&&pe("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),K+=1,D}function B(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function st(D,b){const J=a.get(D);if(D.isVideoTexture&&Ce(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&J.__version!==D.version){const xt=D.image;if(xt===null)pe("WebGLRenderer: Texture marked for update but no image data found.");else if(xt.complete===!1)pe("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(J,D,b);return}}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+b)}function vt(D,b){const J=a.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){bt(J,D,b);return}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+b)}function At(D,b){const J=a.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){bt(J,D,b);return}n.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+b)}function I(D,b){const J=a.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&J.__version!==D.version){Gt(J,D,b);return}n.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+b)}const Q={[ll]:r.REPEAT,[Ua]:r.CLAMP_TO_EDGE,[Eh]:r.MIRRORED_REPEAT},Mt={[Xn]:r.NEAREST,[ky]:r.NEAREST_MIPMAP_NEAREST,[yc]:r.NEAREST_MIPMAP_LINEAR,[$n]:r.LINEAR,[Rd]:r.LINEAR_MIPMAP_NEAREST,[Zs]:r.LINEAR_MIPMAP_LINEAR},Rt={[Yy]:r.NEVER,[Ky]:r.ALWAYS,[qy]:r.LESS,[vp]:r.LEQUAL,[jy]:r.EQUAL,[xp]:r.GEQUAL,[Zy]:r.GREATER,[$y]:r.NOTEQUAL};function Nt(D,b){if(b.type===na&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===$n||b.magFilter===Rd||b.magFilter===yc||b.magFilter===Zs||b.minFilter===$n||b.minFilter===Rd||b.minFilter===yc||b.minFilter===Zs)&&pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,Q[b.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,Q[b.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,Q[b.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,Mt[b.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,Mt[b.minFilter]),b.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,Rt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Xn||b.minFilter!==yc&&b.minFilter!==Zs||b.type===na&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||a.get(b).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");r.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),a.get(b).__currentAnisotropy=b.anisotropy}}}function lt(D,b){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",P));const xt=b.source;let Tt=M.get(xt);Tt===void 0&&(Tt={},M.set(xt,Tt));const Ut=B(b);if(Ut!==D.__cacheKey){Tt[Ut]===void 0&&(Tt[Ut]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,J=!0),Tt[Ut].usedTimes++;const zt=Tt[D.__cacheKey];zt!==void 0&&(Tt[D.__cacheKey].usedTimes--,zt.usedTimes===0&&Z(b)),D.__cacheKey=Ut,D.__webglTexture=Tt[Ut].texture}return J}function Et(D,b,J){return Math.floor(Math.floor(D/J)/b)}function wt(D,b,J,xt){const Ut=D.updateRanges;if(Ut.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,J,xt,b.data);else{Ut.sort((Bt,Lt)=>Bt.start-Lt.start);let zt=0;for(let Bt=1;Bt<Ut.length;Bt++){const Lt=Ut[zt],Ot=Ut[Bt],fe=Lt.start+Lt.count,de=Et(Ot.start,b.width,4),Te=Et(Lt.start,b.width,4);Ot.start<=fe+1&&de===Te&&Et(Ot.start+Ot.count-1,b.width,4)===de?Lt.count=Math.max(Lt.count,Ot.start+Ot.count-Lt.start):(++zt,Ut[zt]=Ot)}Ut.length=zt+1;const ft=n.getParameter(r.UNPACK_ROW_LENGTH),pt=n.getParameter(r.UNPACK_SKIP_PIXELS),Ft=n.getParameter(r.UNPACK_SKIP_ROWS);n.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Bt=0,Lt=Ut.length;Bt<Lt;Bt++){const Ot=Ut[Bt],fe=Math.floor(Ot.start/4),de=Math.ceil(Ot.count/4),Te=fe%b.width,k=Math.floor(fe/b.width),Ct=de,gt=1;n.pixelStorei(r.UNPACK_SKIP_PIXELS,Te),n.pixelStorei(r.UNPACK_SKIP_ROWS,k),n.texSubImage2D(r.TEXTURE_2D,0,Te,k,Ct,gt,J,xt,b.data)}D.clearUpdateRanges(),n.pixelStorei(r.UNPACK_ROW_LENGTH,ft),n.pixelStorei(r.UNPACK_SKIP_PIXELS,pt),n.pixelStorei(r.UNPACK_SKIP_ROWS,Ft)}}function bt(D,b,J){let xt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(xt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(xt=r.TEXTURE_3D);const Tt=lt(D,b),Ut=b.source;n.bindTexture(xt,D.__webglTexture,r.TEXTURE0+J);const zt=a.get(Ut);if(Ut.version!==zt.__version||Tt===!0){if(n.activeTexture(r.TEXTURE0+J),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const gt=Be.getPrimaries(Be.workingColorSpace),Vt=b.colorSpace===xs?null:Be.getPrimaries(b.colorSpace),z=b.colorSpace===xs||gt===Vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,z)}n.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment);let pt=y(b.image,!1,o.maxTextureSize);pt=Dt(b,pt);const Ft=c.convert(b.format,b.colorSpace),Bt=c.convert(b.type);let Lt=U(b.internalFormat,Ft,Bt,b.normalized,b.colorSpace,b.isVideoTexture);Nt(xt,b);let Ot;const fe=b.mipmaps,de=b.isVideoTexture!==!0,Te=zt.__version===void 0||Tt===!0,k=Ut.dataReady,Ct=N(b,pt);if(b.isDepthTexture)Lt=V(b.format===$s,b.type),Te&&(de?n.texStorage2D(r.TEXTURE_2D,1,Lt,pt.width,pt.height):n.texImage2D(r.TEXTURE_2D,0,Lt,pt.width,pt.height,0,Ft,Bt,null));else if(b.isDataTexture)if(fe.length>0){de&&Te&&n.texStorage2D(r.TEXTURE_2D,Ct,Lt,fe[0].width,fe[0].height);for(let gt=0,Vt=fe.length;gt<Vt;gt++)Ot=fe[gt],de?k&&n.texSubImage2D(r.TEXTURE_2D,gt,0,0,Ot.width,Ot.height,Ft,Bt,Ot.data):n.texImage2D(r.TEXTURE_2D,gt,Lt,Ot.width,Ot.height,0,Ft,Bt,Ot.data);b.generateMipmaps=!1}else de?(Te&&n.texStorage2D(r.TEXTURE_2D,Ct,Lt,pt.width,pt.height),k&&wt(b,pt,Ft,Bt)):n.texImage2D(r.TEXTURE_2D,0,Lt,pt.width,pt.height,0,Ft,Bt,pt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){de&&Te&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ct,Lt,fe[0].width,fe[0].height,pt.depth);for(let gt=0,Vt=fe.length;gt<Vt;gt++)if(Ot=fe[gt],b.format!==Wi)if(Ft!==null)if(de){if(k)if(b.layerUpdates.size>0){const z=$_(Ot.width,Ot.height,b.format,b.type);for(const tt of b.layerUpdates){const ct=Ot.data.subarray(tt*z/Ot.data.BYTES_PER_ELEMENT,(tt+1)*z/Ot.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,gt,0,0,tt,Ot.width,Ot.height,1,Ft,ct)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,gt,0,0,0,Ot.width,Ot.height,pt.depth,Ft,Ot.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,gt,Lt,Ot.width,Ot.height,pt.depth,0,Ot.data,0,0);else pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else de?k&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,gt,0,0,0,Ot.width,Ot.height,pt.depth,Ft,Bt,Ot.data):n.texImage3D(r.TEXTURE_2D_ARRAY,gt,Lt,Ot.width,Ot.height,pt.depth,0,Ft,Bt,Ot.data)}else{de&&Te&&n.texStorage2D(r.TEXTURE_2D,Ct,Lt,fe[0].width,fe[0].height);for(let gt=0,Vt=fe.length;gt<Vt;gt++)Ot=fe[gt],b.format!==Wi?Ft!==null?de?k&&n.compressedTexSubImage2D(r.TEXTURE_2D,gt,0,0,Ot.width,Ot.height,Ft,Ot.data):n.compressedTexImage2D(r.TEXTURE_2D,gt,Lt,Ot.width,Ot.height,0,Ot.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?k&&n.texSubImage2D(r.TEXTURE_2D,gt,0,0,Ot.width,Ot.height,Ft,Bt,Ot.data):n.texImage2D(r.TEXTURE_2D,gt,Lt,Ot.width,Ot.height,0,Ft,Bt,Ot.data)}else if(b.isDataArrayTexture)if(de){if(Te&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ct,Lt,pt.width,pt.height,pt.depth),k)if(b.layerUpdates.size>0){const gt=$_(pt.width,pt.height,b.format,b.type);for(const Vt of b.layerUpdates){const z=pt.data.subarray(Vt*gt/pt.data.BYTES_PER_ELEMENT,(Vt+1)*gt/pt.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Vt,pt.width,pt.height,1,Ft,Bt,z)}b.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Ft,Bt,pt.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Lt,pt.width,pt.height,pt.depth,0,Ft,Bt,pt.data);else if(b.isData3DTexture)de?(Te&&n.texStorage3D(r.TEXTURE_3D,Ct,Lt,pt.width,pt.height,pt.depth),k&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Ft,Bt,pt.data)):n.texImage3D(r.TEXTURE_3D,0,Lt,pt.width,pt.height,pt.depth,0,Ft,Bt,pt.data);else if(b.isFramebufferTexture){if(Te)if(de)n.texStorage2D(r.TEXTURE_2D,Ct,Lt,pt.width,pt.height);else{let gt=pt.width,Vt=pt.height;for(let z=0;z<Ct;z++)n.texImage2D(r.TEXTURE_2D,z,Lt,gt,Vt,0,Ft,Bt,null),gt>>=1,Vt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in r){const gt=r.canvas;if(gt.hasAttribute("layoutsubtree")||gt.setAttribute("layoutsubtree","true"),pt.parentNode!==gt){gt.appendChild(pt),S.add(b),gt.onpaint=ht=>{const Jt=ht.changedElements;for(const ae of S)Jt.includes(ae.image)&&(ae.needsUpdate=!0)},gt.requestPaint();return}const Vt=0,z=r.RGBA,tt=r.RGBA,ct=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Vt,z,tt,ct,pt),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(fe.length>0){if(de&&Te){const gt=ln(fe[0]);n.texStorage2D(r.TEXTURE_2D,Ct,Lt,gt.width,gt.height)}for(let gt=0,Vt=fe.length;gt<Vt;gt++)Ot=fe[gt],de?k&&n.texSubImage2D(r.TEXTURE_2D,gt,0,0,Ft,Bt,Ot):n.texImage2D(r.TEXTURE_2D,gt,Lt,Ft,Bt,Ot);b.generateMipmaps=!1}else if(de){if(Te){const gt=ln(pt);n.texStorage2D(r.TEXTURE_2D,Ct,Lt,gt.width,gt.height)}k&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Ft,Bt,pt)}else n.texImage2D(r.TEXTURE_2D,0,Lt,Ft,Bt,pt);x(b)&&C(xt),zt.__version=Ut.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function Gt(D,b,J){if(b.image.length!==6)return;const xt=lt(D,b),Tt=b.source;n.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+J);const Ut=a.get(Tt);if(Tt.version!==Ut.__version||xt===!0){n.activeTexture(r.TEXTURE0+J);const zt=Be.getPrimaries(Be.workingColorSpace),ft=b.colorSpace===xs?null:Be.getPrimaries(b.colorSpace),pt=b.colorSpace===xs||zt===ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Ft=b.isCompressedTexture||b.image[0].isCompressedTexture,Bt=b.image[0]&&b.image[0].isDataTexture,Lt=[];for(let tt=0;tt<6;tt++)!Ft&&!Bt?Lt[tt]=y(b.image[tt],!0,o.maxCubemapSize):Lt[tt]=Bt?b.image[tt].image:b.image[tt],Lt[tt]=Dt(b,Lt[tt]);const Ot=Lt[0],fe=c.convert(b.format,b.colorSpace),de=c.convert(b.type),Te=U(b.internalFormat,fe,de,b.normalized,b.colorSpace),k=b.isVideoTexture!==!0,Ct=Ut.__version===void 0||xt===!0,gt=Tt.dataReady;let Vt=N(b,Ot);Nt(r.TEXTURE_CUBE_MAP,b);let z;if(Ft){k&&Ct&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Vt,Te,Ot.width,Ot.height);for(let tt=0;tt<6;tt++){z=Lt[tt].mipmaps;for(let ct=0;ct<z.length;ct++){const ht=z[ct];b.format!==Wi?fe!==null?k?gt&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ct,0,0,ht.width,ht.height,fe,ht.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ct,Te,ht.width,ht.height,0,ht.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?gt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ct,0,0,ht.width,ht.height,fe,de,ht.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ct,Te,ht.width,ht.height,0,fe,de,ht.data)}}}else{if(z=b.mipmaps,k&&Ct){z.length>0&&Vt++;const tt=ln(Lt[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Vt,Te,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(Bt){k?gt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Lt[tt].width,Lt[tt].height,fe,de,Lt[tt].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Te,Lt[tt].width,Lt[tt].height,0,fe,de,Lt[tt].data);for(let ct=0;ct<z.length;ct++){const Jt=z[ct].image[tt].image;k?gt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ct+1,0,0,Jt.width,Jt.height,fe,de,Jt.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ct+1,Te,Jt.width,Jt.height,0,fe,de,Jt.data)}}else{k?gt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,fe,de,Lt[tt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Te,fe,de,Lt[tt]);for(let ct=0;ct<z.length;ct++){const ht=z[ct];k?gt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ct+1,0,0,fe,de,ht.image[tt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ct+1,Te,fe,de,ht.image[tt])}}}x(b)&&C(r.TEXTURE_CUBE_MAP),Ut.__version=Tt.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function Yt(D,b,J,xt,Tt,Ut){const zt=c.convert(J.format,J.colorSpace),ft=c.convert(J.type),pt=U(J.internalFormat,zt,ft,J.normalized,J.colorSpace),Ft=a.get(b),Bt=a.get(J);if(Bt.__renderTarget=b,!Ft.__hasExternalTextures){const Lt=Math.max(1,b.width>>Ut),Ot=Math.max(1,b.height>>Ut);Tt===r.TEXTURE_3D||Tt===r.TEXTURE_2D_ARRAY?n.texImage3D(Tt,Ut,pt,Lt,Ot,b.depth,0,zt,ft,null):n.texImage2D(Tt,Ut,pt,Lt,Ot,0,zt,ft,null)}n.bindFramebuffer(r.FRAMEBUFFER,D),be(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xt,Tt,Bt.__webglTexture,0,dn(b)):(Tt===r.TEXTURE_2D||Tt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Tt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,xt,Tt,Bt.__webglTexture,Ut),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Pt(D,b,J){if(r.bindRenderbuffer(r.RENDERBUFFER,D),b.depthBuffer){const xt=b.depthTexture,Tt=xt&&xt.isDepthTexture?xt.type:null,Ut=V(b.stencilBuffer,Tt),zt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;be(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,dn(b),Ut,b.width,b.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,dn(b),Ut,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Ut,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,zt,r.RENDERBUFFER,D)}else{const xt=b.textures;for(let Tt=0;Tt<xt.length;Tt++){const Ut=xt[Tt],zt=c.convert(Ut.format,Ut.colorSpace),ft=c.convert(Ut.type),pt=U(Ut.internalFormat,zt,ft,Ut.normalized,Ut.colorSpace);be(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,dn(b),pt,b.width,b.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,dn(b),pt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,pt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function oe(D,b,J){const xt=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Tt=a.get(b.depthTexture);if(Tt.__renderTarget=b,(!Tt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),xt){if(Tt.__webglInit===void 0&&(Tt.__webglInit=!0,b.depthTexture.addEventListener("dispose",P)),Tt.__webglTexture===void 0){Tt.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,Tt.__webglTexture),Nt(r.TEXTURE_CUBE_MAP,b.depthTexture);const Ft=c.convert(b.depthTexture.format),Bt=c.convert(b.depthTexture.type);let Lt;b.depthTexture.format===Pa?Lt=r.DEPTH_COMPONENT24:b.depthTexture.format===$s&&(Lt=r.DEPTH24_STENCIL8);for(let Ot=0;Ot<6;Ot++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,Lt,b.width,b.height,0,Ft,Bt,null)}}else st(b.depthTexture,0);const Ut=Tt.__webglTexture,zt=dn(b),ft=xt?r.TEXTURE_CUBE_MAP_POSITIVE_X+J:r.TEXTURE_2D,pt=b.depthTexture.format===$s?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Pa)be(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pt,ft,Ut,0,zt):r.framebufferTexture2D(r.FRAMEBUFFER,pt,ft,Ut,0);else if(b.depthTexture.format===$s)be(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pt,ft,Ut,0,zt):r.framebufferTexture2D(r.FRAMEBUFFER,pt,ft,Ut,0);else throw new Error("Unknown depthTexture format")}function Me(D){const b=a.get(D),J=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const xt=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),xt){const Tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,xt.removeEventListener("dispose",Tt)};xt.addEventListener("dispose",Tt),b.__depthDisposeCallback=Tt}b.__boundDepthTexture=xt}if(D.depthTexture&&!b.__autoAllocateDepthBuffer)if(J)for(let xt=0;xt<6;xt++)oe(b.__webglFramebuffer[xt],D,xt);else{const xt=D.texture.mipmaps;xt&&xt.length>0?oe(b.__webglFramebuffer[0],D,0):oe(b.__webglFramebuffer,D,0)}else if(J){b.__webglDepthbuffer=[];for(let xt=0;xt<6;xt++)if(n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[xt]),b.__webglDepthbuffer[xt]===void 0)b.__webglDepthbuffer[xt]=r.createRenderbuffer(),Pt(b.__webglDepthbuffer[xt],D,!1);else{const Tt=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ut=b.__webglDepthbuffer[xt];r.bindRenderbuffer(r.RENDERBUFFER,Ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,Tt,r.RENDERBUFFER,Ut)}}else{const xt=D.texture.mipmaps;if(xt&&xt.length>0?n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Pt(b.__webglDepthbuffer,D,!1);else{const Tt=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ut=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,Tt,r.RENDERBUFFER,Ut)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function De(D,b,J){const xt=a.get(D);b!==void 0&&Yt(xt.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&Me(D)}function _e(D){const b=D.texture,J=a.get(D),xt=a.get(b);D.addEventListener("dispose",T);const Tt=D.textures,Ut=D.isWebGLCubeRenderTarget===!0,zt=Tt.length>1;if(zt||(xt.__webglTexture===void 0&&(xt.__webglTexture=r.createTexture()),xt.__version=b.version,u.memory.textures++),Ut){J.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[ft]=[];for(let pt=0;pt<b.mipmaps.length;pt++)J.__webglFramebuffer[ft][pt]=r.createFramebuffer()}else J.__webglFramebuffer[ft]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let ft=0;ft<b.mipmaps.length;ft++)J.__webglFramebuffer[ft]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(zt)for(let ft=0,pt=Tt.length;ft<pt;ft++){const Ft=a.get(Tt[ft]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=r.createTexture(),u.memory.textures++)}if(D.samples>0&&be(D)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ft=0;ft<Tt.length;ft++){const pt=Tt[ft];J.__webglColorRenderbuffer[ft]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[ft]);const Ft=c.convert(pt.format,pt.colorSpace),Bt=c.convert(pt.type),Lt=U(pt.internalFormat,Ft,Bt,pt.normalized,pt.colorSpace,D.isXRRenderTarget===!0),Ot=dn(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ot,Lt,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,J.__webglColorRenderbuffer[ft])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),Pt(J.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ut){n.bindTexture(r.TEXTURE_CUBE_MAP,xt.__webglTexture),Nt(r.TEXTURE_CUBE_MAP,b);for(let ft=0;ft<6;ft++)if(b.mipmaps&&b.mipmaps.length>0)for(let pt=0;pt<b.mipmaps.length;pt++)Yt(J.__webglFramebuffer[ft][pt],D,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,pt);else Yt(J.__webglFramebuffer[ft],D,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);x(b)&&C(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(zt){for(let ft=0,pt=Tt.length;ft<pt;ft++){const Ft=Tt[ft],Bt=a.get(Ft);let Lt=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Lt=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Lt,Bt.__webglTexture),Nt(Lt,Ft),Yt(J.__webglFramebuffer,D,Ft,r.COLOR_ATTACHMENT0+ft,Lt,0),x(Ft)&&C(Lt)}n.unbindTexture()}else{let ft=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ft=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(ft,xt.__webglTexture),Nt(ft,b),b.mipmaps&&b.mipmaps.length>0)for(let pt=0;pt<b.mipmaps.length;pt++)Yt(J.__webglFramebuffer[pt],D,b,r.COLOR_ATTACHMENT0,ft,pt);else Yt(J.__webglFramebuffer,D,b,r.COLOR_ATTACHMENT0,ft,0);x(b)&&C(ft),n.unbindTexture()}D.depthBuffer&&Me(D)}function Xe(D){const b=D.textures;for(let J=0,xt=b.length;J<xt;J++){const Tt=b[J];if(x(Tt)){const Ut=L(D),zt=a.get(Tt).__webglTexture;n.bindTexture(Ut,zt),C(Ut),n.unbindTexture()}}}const qe=[],Ln=[];function Y(D){if(D.samples>0){if(be(D)===!1){const b=D.textures,J=D.width,xt=D.height;let Tt=r.COLOR_BUFFER_BIT;const Ut=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,zt=a.get(D),ft=b.length>1;if(ft)for(let Ft=0;Ft<b.length;Ft++)n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ft,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ft,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const pt=D.texture.mipmaps;pt&&pt.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Ft=0;Ft<b.length;Ft++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Tt|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Tt|=r.STENCIL_BUFFER_BIT)),ft){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,zt.__webglColorRenderbuffer[Ft]);const Bt=a.get(b[Ft]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Bt,0)}r.blitFramebuffer(0,0,J,xt,0,0,J,xt,Tt,r.NEAREST),m===!0&&(qe.length=0,Ln.length=0,qe.push(r.COLOR_ATTACHMENT0+Ft),D.depthBuffer&&D.resolveDepthBuffer===!1&&(qe.push(Ut),Ln.push(Ut),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ln)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,qe))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ft)for(let Ft=0;Ft<b.length;Ft++){n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ft,r.RENDERBUFFER,zt.__webglColorRenderbuffer[Ft]);const Bt=a.get(b[Ft]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ft,r.TEXTURE_2D,Bt,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const b=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function dn(D){return Math.min(o.maxSamples,D.samples)}function be(D){const b=a.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ce(D){const b=u.render.frame;_.get(D)!==b&&(_.set(D,b),D.update())}function Dt(D,b){const J=D.colorSpace,xt=D.format,Tt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==iu&&J!==xs&&(Be.getTransfer(J)===nn?(xt!==Wi||Tt!==bi)&&pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",J)),b}function ln(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=O,this.resetTextureUnits=dt,this.getTextureUnits=mt,this.setTextureUnits=X,this.setTexture2D=st,this.setTexture2DArray=vt,this.setTexture3D=At,this.setTextureCube=I,this.rebindTextures=De,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=Yt,this.useMultisampledRTT=be,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function DA(r,t){function n(a,o=xs){let c;const u=Be.getTransfer(o);if(a===bi)return r.UNSIGNED_BYTE;if(a===hp)return r.UNSIGNED_SHORT_4_4_4_4;if(a===pp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===Lv)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===Ov)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===Nv)return r.BYTE;if(a===Uv)return r.SHORT;if(a===cl)return r.UNSIGNED_SHORT;if(a===dp)return r.INT;if(a===ra)return r.UNSIGNED_INT;if(a===na)return r.FLOAT;if(a===za)return r.HALF_FLOAT;if(a===Iv)return r.ALPHA;if(a===zv)return r.RGB;if(a===Wi)return r.RGBA;if(a===Pa)return r.DEPTH_COMPONENT;if(a===$s)return r.DEPTH_STENCIL;if(a===Pv)return r.RED;if(a===mp)return r.RED_INTEGER;if(a===Qs)return r.RG;if(a===gp)return r.RG_INTEGER;if(a===_p)return r.RGBA_INTEGER;if(a===Zc||a===$c||a===Kc||a===Qc)if(u===nn)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Zc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Zc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===$c)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Qc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Th||a===Ah||a===wh||a===Rh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Th)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Ah)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===wh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Rh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Ch||a===Dh||a===Nh||a===Uh||a===Lh||a===tu||a===Oh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Ch||a===Dh)return u===nn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Nh)return u===nn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===Uh)return c.COMPRESSED_R11_EAC;if(a===Lh)return c.COMPRESSED_SIGNED_R11_EAC;if(a===tu)return c.COMPRESSED_RG11_EAC;if(a===Oh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Ih||a===zh||a===Ph||a===Fh||a===Bh||a===Gh||a===Hh||a===Vh||a===kh||a===Wh||a===Xh||a===Yh||a===qh||a===jh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Ih)return u===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===zh)return u===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Ph)return u===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Fh)return u===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Bh)return u===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Gh)return u===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Hh)return u===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Vh)return u===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===kh)return u===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Wh)return u===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Xh)return u===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Yh)return u===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===qh)return u===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===jh)return u===nn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Zh||a===$h||a===Kh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===Zh)return u===nn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===$h)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Kh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Qh||a===Jh||a===eu||a===tp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===Qh)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Jh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===eu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===tp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===ul?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const NA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UA=`
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

}`;class LA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new qv(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new la({vertexShader:NA,fragmentShader:UA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new vn(new du(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OA extends Js{constructor(t,n){super();const a=this;let o=null,c=1,u=null,h="local-floor",m=1,p=null,_=null,S=null,g=null,M=null,E=null;const R=typeof XRWebGLBinding<"u",y=new LA,x={},C=n.getContextAttributes();let L=null,U=null;const V=[],N=[],P=new Re;let T=null;const F=new Mi;F.viewport=new Mn;const Z=new Mi;Z.viewport=new Mn;const H=[F,Z],K=new kM;let dt=null,mt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(lt){let Et=V[lt];return Et===void 0&&(Et=new zd,V[lt]=Et),Et.getTargetRaySpace()},this.getControllerGrip=function(lt){let Et=V[lt];return Et===void 0&&(Et=new zd,V[lt]=Et),Et.getGripSpace()},this.getHand=function(lt){let Et=V[lt];return Et===void 0&&(Et=new zd,V[lt]=Et),Et.getHandSpace()};function X(lt){const Et=N.indexOf(lt.inputSource);if(Et===-1)return;const wt=V[Et];wt!==void 0&&(wt.update(lt.inputSource,lt.frame,p||u),wt.dispatchEvent({type:lt.type,data:lt.inputSource}))}function O(){o.removeEventListener("select",X),o.removeEventListener("selectstart",X),o.removeEventListener("selectend",X),o.removeEventListener("squeeze",X),o.removeEventListener("squeezestart",X),o.removeEventListener("squeezeend",X),o.removeEventListener("end",O),o.removeEventListener("inputsourceschange",B);for(let lt=0;lt<V.length;lt++){const Et=N[lt];Et!==null&&(N[lt]=null,V[lt].disconnect(Et))}dt=null,mt=null,y.reset();for(const lt in x)delete x[lt];t.setRenderTarget(L),M=null,g=null,S=null,o=null,U=null,Nt.stop(),a.isPresenting=!1,t.setPixelRatio(T),t.setSize(P.width,P.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(lt){c=lt,a.isPresenting===!0&&pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(lt){h=lt,a.isPresenting===!0&&pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(lt){p=lt},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return S===null&&R&&(S=new XRWebGLBinding(o,n)),S},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(lt){if(o=lt,o!==null){if(L=t.getRenderTarget(),o.addEventListener("select",X),o.addEventListener("selectstart",X),o.addEventListener("selectend",X),o.addEventListener("squeeze",X),o.addEventListener("squeezestart",X),o.addEventListener("squeezeend",X),o.addEventListener("end",O),o.addEventListener("inputsourceschange",B),C.xrCompatible!==!0&&await n.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(P),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,bt=null,Gt=null;C.depth&&(Gt=C.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,wt=C.stencil?$s:Pa,bt=C.stencil?ul:ra);const Yt={colorFormat:n.RGBA8,depthFormat:Gt,scaleFactor:c};S=this.getBinding(),g=S.createProjectionLayer(Yt),o.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),U=new sa(g.textureWidth,g.textureHeight,{format:Wi,type:bi,depthTexture:new eo(g.textureWidth,g.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const wt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(o,n,wt),o.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new sa(M.framebufferWidth,M.framebufferHeight,{format:Wi,type:bi,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(h),Nt.setContext(o),Nt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function B(lt){for(let Et=0;Et<lt.removed.length;Et++){const wt=lt.removed[Et],bt=N.indexOf(wt);bt>=0&&(N[bt]=null,V[bt].disconnect(wt))}for(let Et=0;Et<lt.added.length;Et++){const wt=lt.added[Et];let bt=N.indexOf(wt);if(bt===-1){for(let Yt=0;Yt<V.length;Yt++)if(Yt>=N.length){N.push(wt),bt=Yt;break}else if(N[Yt]===null){N[Yt]=wt,bt=Yt;break}if(bt===-1)break}const Gt=V[bt];Gt&&Gt.connect(wt)}}const st=new $,vt=new $;function At(lt,Et,wt){st.setFromMatrixPosition(Et.matrixWorld),vt.setFromMatrixPosition(wt.matrixWorld);const bt=st.distanceTo(vt),Gt=Et.projectionMatrix.elements,Yt=wt.projectionMatrix.elements,Pt=Gt[14]/(Gt[10]-1),oe=Gt[14]/(Gt[10]+1),Me=(Gt[9]+1)/Gt[5],De=(Gt[9]-1)/Gt[5],_e=(Gt[8]-1)/Gt[0],Xe=(Yt[8]+1)/Yt[0],qe=Pt*_e,Ln=Pt*Xe,Y=bt/(-_e+Xe),dn=Y*-_e;if(Et.matrixWorld.decompose(lt.position,lt.quaternion,lt.scale),lt.translateX(dn),lt.translateZ(Y),lt.matrixWorld.compose(lt.position,lt.quaternion,lt.scale),lt.matrixWorldInverse.copy(lt.matrixWorld).invert(),Gt[10]===-1)lt.projectionMatrix.copy(Et.projectionMatrix),lt.projectionMatrixInverse.copy(Et.projectionMatrixInverse);else{const be=Pt+Y,Ce=oe+Y,Dt=qe-dn,ln=Ln+(bt-dn),D=Me*oe/Ce*be,b=De*oe/Ce*be;lt.projectionMatrix.makePerspective(Dt,ln,D,b,be,Ce),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert()}}function I(lt,Et){Et===null?lt.matrixWorld.copy(lt.matrix):lt.matrixWorld.multiplyMatrices(Et.matrixWorld,lt.matrix),lt.matrixWorldInverse.copy(lt.matrixWorld).invert()}this.updateCamera=function(lt){if(o===null)return;let Et=lt.near,wt=lt.far;y.texture!==null&&(y.depthNear>0&&(Et=y.depthNear),y.depthFar>0&&(wt=y.depthFar)),K.near=Z.near=F.near=Et,K.far=Z.far=F.far=wt,(dt!==K.near||mt!==K.far)&&(o.updateRenderState({depthNear:K.near,depthFar:K.far}),dt=K.near,mt=K.far),K.layers.mask=lt.layers.mask|6,F.layers.mask=K.layers.mask&-5,Z.layers.mask=K.layers.mask&-3;const bt=lt.parent,Gt=K.cameras;I(K,bt);for(let Yt=0;Yt<Gt.length;Yt++)I(Gt[Yt],bt);Gt.length===2?At(K,F,Z):K.projectionMatrix.copy(F.projectionMatrix),Q(lt,K,bt)};function Q(lt,Et,wt){wt===null?lt.matrix.copy(Et.matrixWorld):(lt.matrix.copy(wt.matrixWorld),lt.matrix.invert(),lt.matrix.multiply(Et.matrixWorld)),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.updateMatrixWorld(!0),lt.projectionMatrix.copy(Et.projectionMatrix),lt.projectionMatrixInverse.copy(Et.projectionMatrixInverse),lt.isPerspectiveCamera&&(lt.fov=ip*2*Math.atan(1/lt.projectionMatrix.elements[5]),lt.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(lt){m=lt,g!==null&&(g.fixedFoveation=lt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=lt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(K)},this.getCameraTexture=function(lt){return x[lt]};let Mt=null;function Rt(lt,Et){if(_=Et.getViewerPose(p||u),E=Et,_!==null){const wt=_.views;M!==null&&(t.setRenderTargetFramebuffer(U,M.framebuffer),t.setRenderTarget(U));let bt=!1;wt.length!==K.cameras.length&&(K.cameras.length=0,bt=!0);for(let oe=0;oe<wt.length;oe++){const Me=wt[oe];let De=null;if(M!==null)De=M.getViewport(Me);else{const Xe=S.getViewSubImage(g,Me);De=Xe.viewport,oe===0&&(t.setRenderTargetTextures(U,Xe.colorTexture,Xe.depthStencilTexture),t.setRenderTarget(U))}let _e=H[oe];_e===void 0&&(_e=new Mi,_e.layers.enable(oe),_e.viewport=new Mn,H[oe]=_e),_e.matrix.fromArray(Me.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(Me.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(De.x,De.y,De.width,De.height),oe===0&&(K.matrix.copy(_e.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),bt===!0&&K.cameras.push(_e)}const Gt=o.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){S=a.getBinding();const oe=S.getDepthInformation(wt[0]);oe&&oe.isValid&&oe.texture&&y.init(oe,o.renderState)}if(Gt&&Gt.includes("camera-access")&&R){t.state.unbindTexture(),S=a.getBinding();for(let oe=0;oe<wt.length;oe++){const Me=wt[oe].camera;if(Me){let De=x[Me];De||(De=new qv,x[Me]=De);const _e=S.getCameraImage(Me);De.sourceTexture=_e}}}}for(let wt=0;wt<V.length;wt++){const bt=N[wt],Gt=V[wt];bt!==null&&Gt!==void 0&&Gt.update(bt,Et,p||u)}Mt&&Mt(lt,Et),Et.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:Et}),E=null}const Nt=new Qv;Nt.setAnimationLoop(Rt),this.setAnimationLoop=function(lt){Mt=lt},this.dispose=function(){}}}const IA=new xn,sx=new ve;sx.set(-1,0,0,0,1,0,0,0,1);function zA(r,t){function n(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function a(y,x){x.color.getRGB(y.fogColor.value,jv(r)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,C,L,U){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(y,x):x.isMeshLambertMaterial?(c(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(y,x),S(y,x)):x.isMeshPhongMaterial?(c(y,x),_(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(y,x),g(y,x),x.isMeshPhysicalMaterial&&M(y,x,U)):x.isMeshMatcapMaterial?(c(y,x),E(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),R(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(u(y,x),x.isLineDashedMaterial&&h(y,x)):x.isPointsMaterial?m(y,x,C,L):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,n(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===ui&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,n(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===ui&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,n(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,n(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const C=t.get(x),L=C.envMap,U=C.envMapRotation;L&&(y.envMap.value=L,y.envMapRotation.value.setFromMatrix4(IA.makeRotationFromEuler(U)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(sx),y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,y.aoMapTransform))}function u(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform))}function h(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,C,L){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*C,y.scale.value=L*.5,x.map&&(y.map.value=x.map,n(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function _(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function S(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function g(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,C){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ui&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function R(y,x){const C=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(C.matrixWorld),y.nearDistance.value=C.shadow.camera.near,y.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function PA(r,t,n,a){let o={},c={},u=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,L){const U=L.program;a.uniformBlockBinding(C,U)}function p(C,L){let U=o[C.id];U===void 0&&(E(C),U=_(C),o[C.id]=U,C.addEventListener("dispose",y));const V=L.program;a.updateUBOMapping(C,V);const N=t.render.frame;c[C.id]!==N&&(g(C),c[C.id]=N)}function _(C){const L=S();C.__bindingPointIndex=L;const U=r.createBuffer(),V=C.__size,N=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,V,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,U),U}function S(){for(let C=0;C<h;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const L=o[C.id],U=C.uniforms,V=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let N=0,P=U.length;N<P;N++){const T=Array.isArray(U[N])?U[N]:[U[N]];for(let F=0,Z=T.length;F<Z;F++){const H=T[F];if(M(H,N,F,V)===!0){const K=H.__offset,dt=Array.isArray(H.value)?H.value:[H.value];let mt=0;for(let X=0;X<dt.length;X++){const O=dt[X],B=R(O);typeof O=="number"||typeof O=="boolean"?(H.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,K+mt,H.__data)):O.isMatrix3?(H.__data[0]=O.elements[0],H.__data[1]=O.elements[1],H.__data[2]=O.elements[2],H.__data[3]=0,H.__data[4]=O.elements[3],H.__data[5]=O.elements[4],H.__data[6]=O.elements[5],H.__data[7]=0,H.__data[8]=O.elements[6],H.__data[9]=O.elements[7],H.__data[10]=O.elements[8],H.__data[11]=0):ArrayBuffer.isView(O)?H.__data.set(new O.constructor(O.buffer,O.byteOffset,H.__data.length)):(O.toArray(H.__data,mt),mt+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,K,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(C,L,U,V){const N=C.value,P=L+"_"+U;if(V[P]===void 0)return typeof N=="number"||typeof N=="boolean"?V[P]=N:ArrayBuffer.isView(N)?V[P]=N.slice():V[P]=N.clone(),!0;{const T=V[P];if(typeof N=="number"||typeof N=="boolean"){if(T!==N)return V[P]=N,!0}else{if(ArrayBuffer.isView(N))return!0;if(T.equals(N)===!1)return T.copy(N),!0}}return!1}function E(C){const L=C.uniforms;let U=0;const V=16;for(let P=0,T=L.length;P<T;P++){const F=Array.isArray(L[P])?L[P]:[L[P]];for(let Z=0,H=F.length;Z<H;Z++){const K=F[Z],dt=Array.isArray(K.value)?K.value:[K.value];for(let mt=0,X=dt.length;mt<X;mt++){const O=dt[mt],B=R(O),st=U%V,vt=st%B.boundary,At=st+vt;U+=vt,At!==0&&V-At<B.storage&&(U+=V-At),K.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=U,U+=B.storage}}}const N=U%V;return N>0&&(U+=V-N),C.__size=U,C.__cache={},this}function R(C){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=48,L.storage=48):C.isMatrix4?(L.boundary=64,L.storage=64):C.isTexture?pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(L.boundary=16,L.storage=C.byteLength):pe("WebGLRenderer: Unsupported uniform value type.",C),L}function y(C){const L=C.target;L.removeEventListener("dispose",y);const U=u.indexOf(L.__bindingPointIndex);u.splice(U,1),r.deleteBuffer(o[L.id]),delete o[L.id],delete c[L.id]}function x(){for(const C in o)r.deleteBuffer(o[C]);u=[],o={},c={}}return{bind:m,update:p,dispose:x}}const FA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qi=null;function BA(){return Qi===null&&(Qi=new EM(FA,16,16,Qs,za),Qi.name="DFG_LUT",Qi.minFilter=$n,Qi.magFilter=$n,Qi.wrapS=Ua,Qi.wrapT=Ua,Qi.generateMipmaps=!1,Qi.needsUpdate=!0),Qi}class GA{constructor(t={}){const{canvas:n=Jy(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:M=bi}=t;this.isWebGLRenderer=!0;let E;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=a.getContextAttributes().alpha}else E=u;const R=M,y=new Set([_p,gp,mp]),x=new Set([bi,ra,cl,ul,hp,pp]),C=new Uint32Array(4),L=new Int32Array(4),U=new $;let V=null,N=null;const P=[],T=[];let F=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=aa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Z=this;let H=!1,K=null;this._outputColorSpace=Oi;let dt=0,mt=0,X=null,O=-1,B=null;const st=new Mn,vt=new Mn;let At=null;const I=new Oe(0);let Q=0,Mt=n.width,Rt=n.height,Nt=1,lt=null,Et=null;const wt=new Mn(0,0,Mt,Rt),bt=new Mn(0,0,Mt,Rt);let Gt=!1;const Yt=new Ep;let Pt=!1,oe=!1;const Me=new xn,De=new $,_e=new Mn,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function Ln(){return X===null?Nt:1}let Y=a;function dn(A,q){return n.getContext(A,q)}try{const A={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:S};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${up}`),n.addEventListener("webglcontextlost",tt,!1),n.addEventListener("webglcontextrestored",ct,!1),n.addEventListener("webglcontextcreationerror",ht,!1),Y===null){const q="webgl2";if(Y=dn(q,A),Y===null)throw dn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Fe("WebGLRenderer: "+A.message),A}let be,Ce,Dt,ln,D,b,J,xt,Tt,Ut,zt,ft,pt,Ft,Bt,Lt,Ot,fe,de,Te,k,Ct,gt;function Vt(){be=new B1(Y),be.init(),k=new DA(Y,be),Ce=new N1(Y,be,t,k),Dt=new RA(Y,be),Ce.reversedDepthBuffer&&g&&Dt.buffers.depth.setReversed(!0),ln=new V1(Y),D=new pA,b=new CA(Y,be,Dt,D,Ce,k,ln),J=new F1(Z),xt=new YM(Y),Ct=new C1(Y,xt),Tt=new G1(Y,xt,ln,Ct),Ut=new W1(Y,Tt,xt,Ct,ln),fe=new k1(Y,Ce,b),Bt=new U1(D),zt=new hA(Z,J,be,Ce,Ct,Bt),ft=new zA(Z,D),pt=new gA,Ft=new MA(be),Ot=new R1(Z,J,Dt,Ut,E,m),Lt=new wA(Z,Ut,Ce),gt=new PA(Y,ln,Ce,Dt),de=new D1(Y,be,ln),Te=new H1(Y,be,ln),ln.programs=zt.programs,Z.capabilities=Ce,Z.extensions=be,Z.properties=D,Z.renderLists=pt,Z.shadowMap=Lt,Z.state=Dt,Z.info=ln}Vt(),R!==bi&&(F=new Y1(R,n.width,n.height,o,c));const z=new OA(Z,Y);this.xr=z,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const A=be.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=be.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Nt},this.setPixelRatio=function(A){A!==void 0&&(Nt=A,this.setSize(Mt,Rt,!1))},this.getSize=function(A){return A.set(Mt,Rt)},this.setSize=function(A,q,rt=!0){if(z.isPresenting){pe("WebGLRenderer: Can't change size while VR device is presenting.");return}Mt=A,Rt=q,n.width=Math.floor(A*Nt),n.height=Math.floor(q*Nt),rt===!0&&(n.style.width=A+"px",n.style.height=q+"px"),F!==null&&F.setSize(n.width,n.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(Mt*Nt,Rt*Nt).floor()},this.setDrawingBufferSize=function(A,q,rt){Mt=A,Rt=q,Nt=rt,n.width=Math.floor(A*rt),n.height=Math.floor(q*rt),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(R===bi){Fe("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){pe("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(st)},this.getViewport=function(A){return A.copy(wt)},this.setViewport=function(A,q,rt,it){A.isVector4?wt.set(A.x,A.y,A.z,A.w):wt.set(A,q,rt,it),Dt.viewport(st.copy(wt).multiplyScalar(Nt).round())},this.getScissor=function(A){return A.copy(bt)},this.setScissor=function(A,q,rt,it){A.isVector4?bt.set(A.x,A.y,A.z,A.w):bt.set(A,q,rt,it),Dt.scissor(vt.copy(bt).multiplyScalar(Nt).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(A){Dt.setScissorTest(Gt=A)},this.setOpaqueSort=function(A){lt=A},this.setTransparentSort=function(A){Et=A},this.getClearColor=function(A){return A.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,rt=!0){let it=0;if(A){let at=!1;if(X!==null){const kt=X.texture.format;at=y.has(kt)}if(at){const kt=X.texture.type,Zt=x.has(kt),Ht=Ot.getClearColor(),Kt=Ot.getClearAlpha(),$t=Ht.r,se=Ht.g,Se=Ht.b;Zt?(C[0]=$t,C[1]=se,C[2]=Se,C[3]=Kt,Y.clearBufferuiv(Y.COLOR,0,C)):(L[0]=$t,L[1]=se,L[2]=Se,L[3]=Kt,Y.clearBufferiv(Y.COLOR,0,L))}else it|=Y.COLOR_BUFFER_BIT}q&&(it|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(it|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&Y.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),K=A},this.dispose=function(){n.removeEventListener("webglcontextlost",tt,!1),n.removeEventListener("webglcontextrestored",ct,!1),n.removeEventListener("webglcontextcreationerror",ht,!1),Ot.dispose(),pt.dispose(),Ft.dispose(),D.dispose(),J.dispose(),Ut.dispose(),Ct.dispose(),gt.dispose(),zt.dispose(),z.dispose(),z.removeEventListener("sessionstart",je),z.removeEventListener("sessionend",$e),le.stop()};function tt(A){A.preventDefault(),ru("WebGLRenderer: Context Lost."),H=!0}function ct(){ru("WebGLRenderer: Context Restored."),H=!1;const A=ln.autoReset,q=Lt.enabled,rt=Lt.autoUpdate,it=Lt.needsUpdate,at=Lt.type;Vt(),ln.autoReset=A,Lt.enabled=q,Lt.autoUpdate=rt,Lt.needsUpdate=it,Lt.type=at}function ht(A){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Jt(A){const q=A.target;q.removeEventListener("dispose",Jt),ae(q)}function ae(A){jt(A),D.remove(A)}function jt(A){const q=D.get(A).programs;q!==void 0&&(q.forEach(function(rt){zt.releaseProgram(rt)}),A.isShaderMaterial&&zt.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,rt,it,at,kt){q===null&&(q=Xe);const Zt=at.isMesh&&at.matrixWorld.determinant()<0,Ht=Fa(A,q,rt,it,at);Dt.setMaterial(it,Zt);let Kt=rt.index,$t=1;if(it.wireframe===!0){if(Kt=Tt.getWireframeAttribute(rt),Kt===void 0)return;$t=2}const se=rt.drawRange,Se=rt.attributes.position;let ie=se.start*$t,Ve=(se.start+se.count)*$t;kt!==null&&(ie=Math.max(ie,kt.start*$t),Ve=Math.min(Ve,(kt.start+kt.count)*$t)),Kt!==null?(ie=Math.max(ie,0),Ve=Math.min(Ve,Kt.count)):Se!=null&&(ie=Math.max(ie,0),Ve=Math.min(Ve,Se.count));const mn=Ve-ie;if(mn<0||mn===1/0)return;Ct.setup(at,it,Ht,rt,Kt);let un,Ke=de;if(Kt!==null&&(un=xt.get(Kt),Ke=Te,Ke.setIndex(un)),at.isMesh)it.wireframe===!0?(Dt.setLineWidth(it.wireframeLinewidth*Ln()),Ke.setMode(Y.LINES)):Ke.setMode(Y.TRIANGLES);else if(at.isLine){let Qe=it.linewidth;Qe===void 0&&(Qe=1),Dt.setLineWidth(Qe*Ln()),at.isLineSegments?Ke.setMode(Y.LINES):at.isLineLoop?Ke.setMode(Y.LINE_LOOP):Ke.setMode(Y.LINE_STRIP)}else at.isPoints?Ke.setMode(Y.POINTS):at.isSprite&&Ke.setMode(Y.TRIANGLES);if(at.isBatchedMesh)if(be.get("WEBGL_multi_draw"))Ke.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{const Qe=at._multiDrawStarts,qt=at._multiDrawCounts,Yn=at._multiDrawCount,Ne=Kt?xt.get(Kt).bytesPerElement:1,On=D.get(it).currentProgram.getUniforms();for(let fi=0;fi<Yn;fi++)On.setValue(Y,"_gl_DrawID",fi),Ke.render(Qe[fi]/Ne,qt[fi])}else if(at.isInstancedMesh)Ke.renderInstances(ie,mn,at.count);else if(rt.isInstancedBufferGeometry){const Qe=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,qt=Math.min(rt.instanceCount,Qe);Ke.renderInstances(ie,mn,qt)}else Ke.render(ie,mn)};function xe(A,q,rt){A.transparent===!0&&A.side===ta&&A.forceSinglePass===!1?(A.side=ui,A.needsUpdate=!0,ni(A,q,rt),A.side=Ms,A.needsUpdate=!0,ni(A,q,rt),A.side=ta):ni(A,q,rt)}this.compile=function(A,q,rt=null){rt===null&&(rt=A),N=Ft.get(rt),N.init(q),T.push(N),rt.traverseVisible(function(at){at.isLight&&at.layers.test(q.layers)&&(N.pushLight(at),at.castShadow&&N.pushShadow(at))}),A!==rt&&A.traverseVisible(function(at){at.isLight&&at.layers.test(q.layers)&&(N.pushLight(at),at.castShadow&&N.pushShadow(at))}),N.setupLights();const it=new Set;return A.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;const kt=at.material;if(kt)if(Array.isArray(kt))for(let Zt=0;Zt<kt.length;Zt++){const Ht=kt[Zt];xe(Ht,rt,at),it.add(Ht)}else xe(kt,rt,at),it.add(kt)}),N=T.pop(),it},this.compileAsync=function(A,q,rt=null){const it=this.compile(A,q,rt);return new Promise(at=>{function kt(){if(it.forEach(function(Zt){D.get(Zt).currentProgram.isReady()&&it.delete(Zt)}),it.size===0){at(A);return}setTimeout(kt,10)}be.get("KHR_parallel_shader_compile")!==null?kt():setTimeout(kt,10)})};let Ae=null;function cn(A){Ae&&Ae(A)}function je(){le.stop()}function $e(){le.start()}const le=new Qv;le.setAnimationLoop(cn),typeof self<"u"&&le.setContext(self),this.setAnimationLoop=function(A){Ae=A,z.setAnimationLoop(A),A===null?le.stop():le.start()},z.addEventListener("sessionstart",je),z.addEventListener("sessionend",$e),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;K!==null&&K.renderStart(A,q);const rt=z.enabled===!0&&z.isPresenting===!0,it=F!==null&&(X===null||rt)&&F.begin(Z,X);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(z.cameraAutoUpdate===!0&&z.updateCamera(q),q=z.getCamera()),A.isScene===!0&&A.onBeforeRender(Z,A,q,X),N=Ft.get(A,T.length),N.init(q),N.state.textureUnits=b.getTextureUnits(),T.push(N),Me.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Yt.setFromProjectionMatrix(Me,ia,q.reversedDepth),oe=this.localClippingEnabled,Pt=Bt.init(this.clippingPlanes,oe),V=pt.get(A,P.length),V.init(),P.push(V),z.enabled===!0&&z.isPresenting===!0){const Zt=Z.xr.getDepthSensingMesh();Zt!==null&&Wt(Zt,q,-1/0,Z.sortObjects)}Wt(A,q,0,Z.sortObjects),V.finish(),Z.sortObjects===!0&&V.sort(lt,Et),qe=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,qe&&Ot.addToRenderList(V,A),this.info.render.frame++,Pt===!0&&Bt.beginShadows();const at=N.state.shadowsArray;if(Lt.render(at,A,q),Pt===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(it&&F.hasRenderPass())===!1){const Zt=V.opaque,Ht=V.transmissive;if(N.setupLights(),q.isArrayCamera){const Kt=q.cameras;if(Ht.length>0)for(let $t=0,se=Kt.length;$t<se;$t++){const Se=Kt[$t];te(Zt,Ht,A,Se)}qe&&Ot.render(A);for(let $t=0,se=Kt.length;$t<se;$t++){const Se=Kt[$t];me(V,A,Se,Se.viewport)}}else Ht.length>0&&te(Zt,Ht,A,q),qe&&Ot.render(A),me(V,A,q)}X!==null&&mt===0&&(b.updateMultisampleRenderTarget(X),b.updateRenderTargetMipmap(X)),it&&F.end(Z),A.isScene===!0&&A.onAfterRender(Z,A,q),Ct.resetDefaultState(),O=-1,B=null,T.pop(),T.length>0?(N=T[T.length-1],b.setTextureUnits(N.state.textureUnits),Pt===!0&&Bt.setGlobalState(Z.clippingPlanes,N.state.camera)):N=null,P.pop(),P.length>0?V=P[P.length-1]:V=null,K!==null&&K.renderEnd()};function Wt(A,q,rt,it){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLightProbeGrid)N.pushLightProbeGrid(A);else if(A.isLight)N.pushLight(A),A.castShadow&&N.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Yt.intersectsSprite(A)){it&&_e.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Me);const Zt=Ut.update(A),Ht=A.material;Ht.visible&&V.push(A,Zt,Ht,rt,_e.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Yt.intersectsObject(A))){const Zt=Ut.update(A),Ht=A.material;if(it&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),_e.copy(A.boundingSphere.center)):(Zt.boundingSphere===null&&Zt.computeBoundingSphere(),_e.copy(Zt.boundingSphere.center)),_e.applyMatrix4(A.matrixWorld).applyMatrix4(Me)),Array.isArray(Ht)){const Kt=Zt.groups;for(let $t=0,se=Kt.length;$t<se;$t++){const Se=Kt[$t],ie=Ht[Se.materialIndex];ie&&ie.visible&&V.push(A,Zt,ie,rt,_e.z,Se)}}else Ht.visible&&V.push(A,Zt,Ht,rt,_e.z,null)}}const kt=A.children;for(let Zt=0,Ht=kt.length;Zt<Ht;Zt++)Wt(kt[Zt],q,rt,it)}function me(A,q,rt,it){const{opaque:at,transmissive:kt,transparent:Zt}=A;N.setupLightsView(rt),Pt===!0&&Bt.setGlobalState(Z.clippingPlanes,rt),it&&Dt.viewport(st.copy(it)),at.length>0&&ee(at,q,rt),kt.length>0&&ee(kt,q,rt),Zt.length>0&&ee(Zt,q,rt),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function te(A,q,rt,it){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[it.id]===void 0){const ie=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[it.id]=new sa(1,1,{generateMipmaps:!0,type:ie?za:bi,minFilter:Zs,samples:Math.max(4,Ce.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Be.workingColorSpace})}const kt=N.state.transmissionRenderTarget[it.id],Zt=it.viewport||st;kt.setSize(Zt.z*Z.transmissionResolutionScale,Zt.w*Z.transmissionResolutionScale);const Ht=Z.getRenderTarget(),Kt=Z.getActiveCubeFace(),$t=Z.getActiveMipmapLevel();Z.setRenderTarget(kt),Z.getClearColor(I),Q=Z.getClearAlpha(),Q<1&&Z.setClearColor(16777215,.5),Z.clear(),qe&&Ot.render(rt);const se=Z.toneMapping;Z.toneMapping=aa;const Se=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),N.setupLightsView(it),Pt===!0&&Bt.setGlobalState(Z.clippingPlanes,it),ee(A,rt,it),b.updateMultisampleRenderTarget(kt),b.updateRenderTargetMipmap(kt),be.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Ve=0,mn=q.length;Ve<mn;Ve++){const un=q[Ve],{object:Ke,geometry:Qe,material:qt,group:Yn}=un;if(qt.side===ta&&Ke.layers.test(it.layers)){const Ne=qt.side;qt.side=ui,qt.needsUpdate=!0,he(Ke,rt,it,Qe,qt,Yn),qt.side=Ne,qt.needsUpdate=!0,ie=!0}}ie===!0&&(b.updateMultisampleRenderTarget(kt),b.updateRenderTargetMipmap(kt))}Z.setRenderTarget(Ht,Kt,$t),Z.setClearColor(I,Q),Se!==void 0&&(it.viewport=Se),Z.toneMapping=se}function ee(A,q,rt){const it=q.isScene===!0?q.overrideMaterial:null;for(let at=0,kt=A.length;at<kt;at++){const Zt=A[at],{object:Ht,geometry:Kt,group:$t}=Zt;let se=Zt.material;se.allowOverride===!0&&it!==null&&(se=it),Ht.layers.test(rt.layers)&&he(Ht,q,rt,Kt,se,$t)}}function he(A,q,rt,it,at,kt){A.onBeforeRender(Z,q,rt,it,at,kt),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),at.onBeforeRender(Z,q,rt,it,A,kt),at.transparent===!0&&at.side===ta&&at.forceSinglePass===!1?(at.side=ui,at.needsUpdate=!0,Z.renderBufferDirect(rt,q,it,at,A,kt),at.side=Ms,at.needsUpdate=!0,Z.renderBufferDirect(rt,q,it,at,A,kt),at.side=ta):Z.renderBufferDirect(rt,q,it,at,A,kt),A.onAfterRender(Z,q,rt,it,at,kt)}function ni(A,q,rt){q.isScene!==!0&&(q=Xe);const it=D.get(A),at=N.state.lights,kt=N.state.shadowsArray,Zt=at.state.version,Ht=zt.getParameters(A,at.state,kt,q,rt,N.state.lightProbeGridArray),Kt=zt.getProgramCacheKey(Ht);let $t=it.programs;it.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,it.fog=q.fog;const se=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;it.envMap=J.get(A.envMap||it.environment,se),it.envMapRotation=it.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,$t===void 0&&(A.addEventListener("dispose",Jt),$t=new Map,it.programs=$t);let Se=$t.get(Kt);if(Se!==void 0){if(it.currentProgram===Se&&it.lightsStateVersion===Zt)return En(A,Ht),Se}else Ht.uniforms=zt.getUniforms(A),K!==null&&A.isNodeMaterial&&K.build(A,rt,Ht),A.onBeforeCompile(Ht,Z),Se=zt.acquireProgram(Ht,Kt),$t.set(Kt,Se),it.uniforms=Ht.uniforms;const ie=it.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ie.clippingPlanes=Bt.uniform),En(A,Ht),it.needsLights=Es(A),it.lightsStateVersion=Zt,it.needsLights&&(ie.ambientLightColor.value=at.state.ambient,ie.lightProbe.value=at.state.probe,ie.directionalLights.value=at.state.directional,ie.directionalLightShadows.value=at.state.directionalShadow,ie.spotLights.value=at.state.spot,ie.spotLightShadows.value=at.state.spotShadow,ie.rectAreaLights.value=at.state.rectArea,ie.ltc_1.value=at.state.rectAreaLTC1,ie.ltc_2.value=at.state.rectAreaLTC2,ie.pointLights.value=at.state.point,ie.pointLightShadows.value=at.state.pointShadow,ie.hemisphereLights.value=at.state.hemi,ie.directionalShadowMatrix.value=at.state.directionalShadowMatrix,ie.spotLightMatrix.value=at.state.spotLightMatrix,ie.spotLightMap.value=at.state.spotLightMap,ie.pointShadowMatrix.value=at.state.pointShadowMatrix),it.lightProbeGrid=N.state.lightProbeGridArray.length>0,it.currentProgram=Se,it.uniformsList=null,Se}function bn(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Jc.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function En(A,q){const rt=D.get(A);rt.outputColorSpace=q.outputColorSpace,rt.batching=q.batching,rt.batchingColor=q.batchingColor,rt.instancing=q.instancing,rt.instancingColor=q.instancingColor,rt.instancingMorph=q.instancingMorph,rt.skinning=q.skinning,rt.morphTargets=q.morphTargets,rt.morphNormals=q.morphNormals,rt.morphColors=q.morphColors,rt.morphTargetsCount=q.morphTargetsCount,rt.numClippingPlanes=q.numClippingPlanes,rt.numIntersection=q.numClipIntersection,rt.vertexAlphas=q.vertexAlphas,rt.vertexTangents=q.vertexTangents,rt.toneMapping=q.toneMapping}function ii(A,q){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;U.setFromMatrixPosition(q.matrixWorld);for(let rt=0,it=A.length;rt<it;rt++){const at=A[rt];if(at.texture!==null&&at.boundingBox.containsPoint(U))return at}return null}function Fa(A,q,rt,it,at){q.isScene!==!0&&(q=Xe),b.resetTextureUnits();const kt=q.fog,Zt=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?q.environment:null,Ht=X===null?Z.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Be.workingColorSpace,Kt=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,$t=J.get(it.envMap||Zt,Kt),se=it.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Se=!!rt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),ie=!!rt.morphAttributes.position,Ve=!!rt.morphAttributes.normal,mn=!!rt.morphAttributes.color;let un=aa;it.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(un=Z.toneMapping);const Ke=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Qe=Ke!==void 0?Ke.length:0,qt=D.get(it),Yn=N.state.lights;if(Pt===!0&&(oe===!0||A!==B)){const Ze=A===B&&it.id===O;Bt.setState(it,A,Ze)}let Ne=!1;it.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Yn.state.version||qt.outputColorSpace!==Ht||at.isBatchedMesh&&qt.batching===!1||!at.isBatchedMesh&&qt.batching===!0||at.isBatchedMesh&&qt.batchingColor===!0&&at.colorTexture===null||at.isBatchedMesh&&qt.batchingColor===!1&&at.colorTexture!==null||at.isInstancedMesh&&qt.instancing===!1||!at.isInstancedMesh&&qt.instancing===!0||at.isSkinnedMesh&&qt.skinning===!1||!at.isSkinnedMesh&&qt.skinning===!0||at.isInstancedMesh&&qt.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&qt.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&qt.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&qt.instancingMorph===!1&&at.morphTexture!==null||qt.envMap!==$t||it.fog===!0&&qt.fog!==kt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==Bt.numPlanes||qt.numIntersection!==Bt.numIntersection)||qt.vertexAlphas!==se||qt.vertexTangents!==Se||qt.morphTargets!==ie||qt.morphNormals!==Ve||qt.morphColors!==mn||qt.toneMapping!==un||qt.morphTargetsCount!==Qe||!!qt.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(Ne=!0):(Ne=!0,qt.__version=it.version);let On=qt.currentProgram;Ne===!0&&(On=ni(it,q,at),K&&it.isNodeMaterial&&K.onUpdateProgram(it,On,qt));let fi=!1,zi=!1,di=!1;const Je=On.getUniforms(),gn=qt.uniforms;if(Dt.useProgram(On.program)&&(fi=!0,zi=!0,di=!0),it.id!==O&&(O=it.id,zi=!0),qt.needsLights){const Ze=ii(N.state.lightProbeGridArray,at);qt.lightProbeGrid!==Ze&&(qt.lightProbeGrid=Ze,zi=!0)}if(fi||B!==A){Dt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Je.setValue(Y,"projectionMatrix",A.projectionMatrix),Je.setValue(Y,"viewMatrix",A.matrixWorldInverse);const Yi=Je.map.cameraPosition;Yi!==void 0&&Yi.setValue(Y,De.setFromMatrixPosition(A.matrixWorld)),Ce.logarithmicDepthBuffer&&Je.setValue(Y,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Je.setValue(Y,"isOrthographic",A.isOrthographicCamera===!0),B!==A&&(B=A,zi=!0,di=!0)}if(qt.needsLights&&(Yn.state.directionalShadowMap.length>0&&Je.setValue(Y,"directionalShadowMap",Yn.state.directionalShadowMap,b),Yn.state.spotShadowMap.length>0&&Je.setValue(Y,"spotShadowMap",Yn.state.spotShadowMap,b),Yn.state.pointShadowMap.length>0&&Je.setValue(Y,"pointShadowMap",Yn.state.pointShadowMap,b)),at.isSkinnedMesh){Je.setOptional(Y,at,"bindMatrix"),Je.setOptional(Y,at,"bindMatrixInverse");const Ze=at.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),Je.setValue(Y,"boneTexture",Ze.boneTexture,b))}at.isBatchedMesh&&(Je.setOptional(Y,at,"batchingTexture"),Je.setValue(Y,"batchingTexture",at._matricesTexture,b),Je.setOptional(Y,at,"batchingIdTexture"),Je.setValue(Y,"batchingIdTexture",at._indirectTexture,b),Je.setOptional(Y,at,"batchingColorTexture"),at._colorsTexture!==null&&Je.setValue(Y,"batchingColorTexture",at._colorsTexture,b));const Pi=rt.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&fe.update(at,rt,On),(zi||qt.receiveShadow!==at.receiveShadow)&&(qt.receiveShadow=at.receiveShadow,Je.setValue(Y,"receiveShadow",at.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&q.environment!==null&&(gn.envMapIntensity.value=q.environmentIntensity),gn.dfgLUT!==void 0&&(gn.dfgLUT.value=BA()),zi){if(Je.setValue(Y,"toneMappingExposure",Z.toneMappingExposure),qt.needsLights&&Ba(gn,di),kt&&it.fog===!0&&ft.refreshFogUniforms(gn,kt),ft.refreshMaterialUniforms(gn,it,Nt,Rt,N.state.transmissionRenderTarget[A.id]),qt.needsLights&&qt.lightProbeGrid){const Ze=qt.lightProbeGrid;gn.probesSH.value=Ze.texture,gn.probesMin.value.copy(Ze.boundingBox.min),gn.probesMax.value.copy(Ze.boundingBox.max),gn.probesResolution.value.copy(Ze.resolution)}Jc.upload(Y,bn(qt),gn,b)}if(it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Jc.upload(Y,bn(qt),gn,b),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Je.setValue(Y,"center",at.center),Je.setValue(Y,"modelViewMatrix",at.modelViewMatrix),Je.setValue(Y,"normalMatrix",at.normalMatrix),Je.setValue(Y,"modelMatrix",at.matrixWorld),it.uniformsGroups!==void 0){const Ze=it.uniformsGroups;for(let Yi=0,Ha=Ze.length;Yi<Ha;Yi++){const Ts=Ze[Yi];gt.update(Ts,On),gt.bind(Ts,On)}}return On}function Ba(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function Es(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return dt},this.getActiveMipmapLevel=function(){return mt},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,q,rt){const it=D.get(A);it.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),D.get(A.texture).__webglTexture=q,D.get(A.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:rt,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const rt=D.get(A);rt.__webglFramebuffer=q,rt.__useDefaultFramebuffer=q===void 0};const Ga=Y.createFramebuffer();this.setRenderTarget=function(A,q=0,rt=0){X=A,dt=q,mt=rt;let it=null,at=!1,kt=!1;if(A){const Ht=D.get(A);if(Ht.__useDefaultFramebuffer!==void 0){Dt.bindFramebuffer(Y.FRAMEBUFFER,Ht.__webglFramebuffer),st.copy(A.viewport),vt.copy(A.scissor),At=A.scissorTest,Dt.viewport(st),Dt.scissor(vt),Dt.setScissorTest(At),O=-1;return}else if(Ht.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(Ht.__hasExternalTextures)b.rebindTextures(A,D.get(A.texture).__webglTexture,D.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const se=A.depthTexture;if(Ht.__boundDepthTexture!==se){if(se!==null&&D.has(se)&&(A.width!==se.image.width||A.height!==se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const Kt=A.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(kt=!0);const $t=D.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($t[q])?it=$t[q][rt]:it=$t[q],at=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?it=D.get(A).__webglMultisampledFramebuffer:Array.isArray($t)?it=$t[rt]:it=$t,st.copy(A.viewport),vt.copy(A.scissor),At=A.scissorTest}else st.copy(wt).multiplyScalar(Nt).floor(),vt.copy(bt).multiplyScalar(Nt).floor(),At=Gt;if(rt!==0&&(it=Ga),Dt.bindFramebuffer(Y.FRAMEBUFFER,it)&&Dt.drawBuffers(A,it),Dt.viewport(st),Dt.scissor(vt),Dt.setScissorTest(At),at){const Ht=D.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ht.__webglTexture,rt)}else if(kt){const Ht=q;for(let Kt=0;Kt<A.textures.length;Kt++){const $t=D.get(A.textures[Kt]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Kt,$t.__webglTexture,rt,Ht)}}else if(A!==null&&rt!==0){const Ht=D.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ht.__webglTexture,rt)}O=-1},this.readRenderTargetPixels=function(A,q,rt,it,at,kt,Zt,Ht=0){if(!(A&&A.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Zt!==void 0&&(Kt=Kt[Zt]),Kt){Dt.bindFramebuffer(Y.FRAMEBUFFER,Kt);try{const $t=A.textures[Ht],se=$t.format,Se=$t.type;if(A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ht),!Ce.textureFormatReadable(se)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(Se)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-it&&rt>=0&&rt<=A.height-at&&Y.readPixels(q,rt,it,at,k.convert(se),k.convert(Se),kt)}finally{const $t=X!==null?D.get(X).__webglFramebuffer:null;Dt.bindFramebuffer(Y.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(A,q,rt,it,at,kt,Zt,Ht=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Zt!==void 0&&(Kt=Kt[Zt]),Kt)if(q>=0&&q<=A.width-it&&rt>=0&&rt<=A.height-at){Dt.bindFramebuffer(Y.FRAMEBUFFER,Kt);const $t=A.textures[Ht],se=$t.format,Se=$t.type;if(A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ht),!Ce.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ie=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,ie),Y.bufferData(Y.PIXEL_PACK_BUFFER,kt.byteLength,Y.STREAM_READ),Y.readPixels(q,rt,it,at,k.convert(se),k.convert(Se),0);const Ve=X!==null?D.get(X).__webglFramebuffer:null;Dt.bindFramebuffer(Y.FRAMEBUFFER,Ve);const mn=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await tM(Y,mn,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,ie),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,kt),Y.deleteBuffer(ie),Y.deleteSync(mn),kt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,rt=0){const it=Math.pow(2,-rt),at=Math.floor(A.image.width*it),kt=Math.floor(A.image.height*it),Zt=q!==null?q.x:0,Ht=q!==null?q.y:0;b.setTexture2D(A,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,rt,0,0,Zt,Ht,at,kt),Dt.unbindTexture()};const wn=Y.createFramebuffer(),dl=Y.createFramebuffer();this.copyTextureToTexture=function(A,q,rt=null,it=null,at=0,kt=0){let Zt,Ht,Kt,$t,se,Se,ie,Ve,mn;const un=A.isCompressedTexture?A.mipmaps[kt]:A.image;if(rt!==null)Zt=rt.max.x-rt.min.x,Ht=rt.max.y-rt.min.y,Kt=rt.isBox3?rt.max.z-rt.min.z:1,$t=rt.min.x,se=rt.min.y,Se=rt.isBox3?rt.min.z:0;else{const gn=Math.pow(2,-at);Zt=Math.floor(un.width*gn),Ht=Math.floor(un.height*gn),A.isDataArrayTexture?Kt=un.depth:A.isData3DTexture?Kt=Math.floor(un.depth*gn):Kt=1,$t=0,se=0,Se=0}it!==null?(ie=it.x,Ve=it.y,mn=it.z):(ie=0,Ve=0,mn=0);const Ke=k.convert(q.format),Qe=k.convert(q.type);let qt;q.isData3DTexture?(b.setTexture3D(q,0),qt=Y.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(b.setTexture2DArray(q,0),qt=Y.TEXTURE_2D_ARRAY):(b.setTexture2D(q,0),qt=Y.TEXTURE_2D),Dt.activeTexture(Y.TEXTURE0),Dt.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,q.flipY),Dt.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),Dt.pixelStorei(Y.UNPACK_ALIGNMENT,q.unpackAlignment);const Yn=Dt.getParameter(Y.UNPACK_ROW_LENGTH),Ne=Dt.getParameter(Y.UNPACK_IMAGE_HEIGHT),On=Dt.getParameter(Y.UNPACK_SKIP_PIXELS),fi=Dt.getParameter(Y.UNPACK_SKIP_ROWS),zi=Dt.getParameter(Y.UNPACK_SKIP_IMAGES);Dt.pixelStorei(Y.UNPACK_ROW_LENGTH,un.width),Dt.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,un.height),Dt.pixelStorei(Y.UNPACK_SKIP_PIXELS,$t),Dt.pixelStorei(Y.UNPACK_SKIP_ROWS,se),Dt.pixelStorei(Y.UNPACK_SKIP_IMAGES,Se);const di=A.isDataArrayTexture||A.isData3DTexture,Je=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const gn=D.get(A),Pi=D.get(q),Ze=D.get(gn.__renderTarget),Yi=D.get(Pi.__renderTarget);Dt.bindFramebuffer(Y.READ_FRAMEBUFFER,Ze.__webglFramebuffer),Dt.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Yi.__webglFramebuffer);for(let Ha=0;Ha<Kt;Ha++)di&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,D.get(A).__webglTexture,at,Se+Ha),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,D.get(q).__webglTexture,kt,mn+Ha)),Y.blitFramebuffer($t,se,Zt,Ht,ie,Ve,Zt,Ht,Y.DEPTH_BUFFER_BIT,Y.NEAREST);Dt.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(at!==0||A.isRenderTargetTexture||D.has(A)){const gn=D.get(A),Pi=D.get(q);Dt.bindFramebuffer(Y.READ_FRAMEBUFFER,wn),Dt.bindFramebuffer(Y.DRAW_FRAMEBUFFER,dl);for(let Ze=0;Ze<Kt;Ze++)di?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,gn.__webglTexture,at,Se+Ze):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,gn.__webglTexture,at),Je?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Pi.__webglTexture,kt,mn+Ze):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Pi.__webglTexture,kt),at!==0?Y.blitFramebuffer($t,se,Zt,Ht,ie,Ve,Zt,Ht,Y.COLOR_BUFFER_BIT,Y.NEAREST):Je?Y.copyTexSubImage3D(qt,kt,ie,Ve,mn+Ze,$t,se,Zt,Ht):Y.copyTexSubImage2D(qt,kt,ie,Ve,$t,se,Zt,Ht);Dt.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Je?A.isDataTexture||A.isData3DTexture?Y.texSubImage3D(qt,kt,ie,Ve,mn,Zt,Ht,Kt,Ke,Qe,un.data):q.isCompressedArrayTexture?Y.compressedTexSubImage3D(qt,kt,ie,Ve,mn,Zt,Ht,Kt,Ke,un.data):Y.texSubImage3D(qt,kt,ie,Ve,mn,Zt,Ht,Kt,Ke,Qe,un):A.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,kt,ie,Ve,Zt,Ht,Ke,Qe,un.data):A.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,kt,ie,Ve,un.width,un.height,Ke,un.data):Y.texSubImage2D(Y.TEXTURE_2D,kt,ie,Ve,Zt,Ht,Ke,Qe,un);Dt.pixelStorei(Y.UNPACK_ROW_LENGTH,Yn),Dt.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Ne),Dt.pixelStorei(Y.UNPACK_SKIP_PIXELS,On),Dt.pixelStorei(Y.UNPACK_SKIP_ROWS,fi),Dt.pixelStorei(Y.UNPACK_SKIP_IMAGES,zi),kt===0&&q.generateMipmaps&&Y.generateMipmap(qt),Dt.unbindTexture()},this.initRenderTarget=function(A){D.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),Dt.unbindTexture()},this.resetState=function(){dt=0,mt=0,X=null,Dt.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Be._getDrawingBufferColorSpace(t),n.unpackColorSpace=Be._getUnpackColorSpace()}}const rx={startingPoints:500,bulletHit:10,zombieKill:60,headshotKill:100,knifeKill:130,repairBarricade:10};Object.freeze(rx);class HA{constructor(t=rx){this.config={...t},this.players=new Map,this.listeners=new Set}setConfig(t){this.config={...this.config,...t}}getConfig(){return{...this.config}}registerPlayer(t){const n={playerId:t,currentPoints:this.config.startingPoints,totalEarned:this.config.startingPoints,totalSpent:0,lastUpdated:Date.now()};return this.players.set(t,n),this.notifyListeners(t,{success:!0,previousPoints:0,newPoints:n.currentPoints,amountChanged:this.config.startingPoints,reason:"starting_bonus"}),n}hasPlayer(t){return this.players.has(t)}getPlayerState(t){const n=this.players.get(t);return n?{...n}:void 0}getPoints(t){var n;return((n=this.players.get(t))==null?void 0:n.currentPoints)??0}removePlayer(t){return this.players.delete(t)}getAllPlayerIds(){return Array.from(this.players.keys())}canAfford(t,n){const a=this.players.get(t);return a?a.currentPoints>=n:!1}getMaxAffordableAmount(t){var n;return((n=this.players.get(t))==null?void 0:n.currentPoints)??0}addBulletHit(t){return this.addPoints(t,this.config.bulletHit,"bullet_hit")}addZombieKill(t){return this.addPoints(t,this.config.zombieKill,"zombie_kill")}addHeadshotKill(t){return this.addPoints(t,this.config.headshotKill,"headshot_kill")}addKnifeKill(t){return this.addPoints(t,this.config.knifeKill,"knife_kill")}addRepairBarricade(t){return this.addPoints(t,this.config.repairBarricade,"repair_barricade")}addPoints(t,n,a){const o=this.players.get(t);if(!o)return null;if(n<=0)return{success:!1,previousPoints:o.currentPoints,newPoints:o.currentPoints,amountChanged:0,reason:a};const c=o.currentPoints;o.currentPoints+=n,o.totalEarned+=n,o.lastUpdated=Date.now();const u={success:!0,previousPoints:c,newPoints:o.currentPoints,amountChanged:n,reason:a};return this.notifyListeners(t,u),u}spendPoints(t,n,a){const o=this.players.get(t);if(!o)return null;if(n<=0)return{success:!1,previousPoints:o.currentPoints,newPoints:o.currentPoints,amountChanged:0,reason:"purchase"};if(o.currentPoints<n)return{success:!1,previousPoints:o.currentPoints,newPoints:o.currentPoints,amountChanged:0,reason:"purchase"};const c=o.currentPoints;o.currentPoints-=n,o.totalSpent+=n,o.lastUpdated=Date.now();const u={success:!0,previousPoints:c,newPoints:o.currentPoints,amountChanged:-n,reason:"purchase"};return this.notifyListeners(t,u),u}adjustPoints(t,n,a="manual_adjustment"){const o=this.players.get(t);if(!o)return null;const c=o.currentPoints;let u=n;c+n<0&&(u=-c),o.currentPoints+=u,u>0?o.totalEarned+=u:o.totalSpent+=Math.abs(u),o.lastUpdated=Date.now();const h={success:!0,previousPoints:c,newPoints:o.currentPoints,amountChanged:u,reason:a};return this.notifyListeners(t,h),h}subscribe(t){return this.listeners.add(t),()=>{this.listeners.delete(t)}}notifyListeners(t,n){this.listeners.forEach(a=>{try{a(t,n)}catch(o){console.error("Error in points change listener:",o)}})}serializePlayer(t){const n=this.players.get(t);return n?{playerId:n.playerId,currentPoints:n.currentPoints,totalEarned:n.totalEarned,totalSpent:n.totalSpent,savedAt:Date.now(),version:"1.0.0"}:null}deserializePlayer(t){const n={playerId:t.playerId,currentPoints:Math.max(0,t.currentPoints),totalEarned:t.totalEarned,totalSpent:t.totalSpent,lastUpdated:t.savedAt};return this.players.set(n.playerId,n),n}exportAllPlayers(){return Array.from(this.players.values()).map(t=>({playerId:t.playerId,currentPoints:t.currentPoints,totalEarned:t.totalEarned,totalSpent:t.totalSpent,savedAt:t.lastUpdated,version:"1.0.0"}))}importAllPlayers(t){t.forEach(n=>{this.deserializePlayer(n)})}getPlayerStats(t){const n=this.players.get(t);return n?{currentPoints:n.currentPoints,totalEarned:n.totalEarned,totalSpent:n.totalSpent,netGain:n.totalEarned-n.totalSpent}:null}}let oh=null;function lu(){return oh||(oh=new HA),oh}class VA{constructor(){this.ctx=null}init(){this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext)),this.ctx.state==="suspended"&&this.ctx.resume()}playClick(){try{if(this.init(),!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),a=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(1200,t),n.frequency.exponentialRampToValueAtTime(150,t+.05),a.gain.setValueAtTime(.08,t),a.gain.exponentialRampToValueAtTime(.01,t+.05),n.connect(a),a.connect(this.ctx.destination),n.start(t),n.stop(t+.06)}catch(t){console.warn("Audio click play failed",t)}}playUnlock(){try{if(this.init(),!this.ctx)return;const t=this.ctx.currentTime;[261.63,329.63,392,523.25].forEach((a,o)=>{const c=this.ctx.createOscillator(),u=this.ctx.createGain();c.type="sine",c.frequency.setValueAtTime(a,t+o*.08),u.gain.setValueAtTime(0,t),u.gain.linearRampToValueAtTime(.08,t+o*.08+.02),u.gain.exponentialRampToValueAtTime(.01,t+o*.08+.25),c.connect(u),u.connect(this.ctx.destination),c.start(t+o*.08),c.stop(t+o*.08+.3)})}catch(t){console.warn("Audio unlock play failed",t)}}playDenied(){try{if(this.init(),!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),a=this.ctx.createOscillator(),o=this.ctx.createGain();n.type="sawtooth",a.type="sawtooth",n.frequency.setValueAtTime(100,t),a.frequency.setValueAtTime(98,t),o.gain.setValueAtTime(.12,t),o.gain.exponentialRampToValueAtTime(.01,t+.25),n.connect(o),a.connect(o),o.connect(this.ctx.destination),n.start(t),a.start(t),n.stop(t+.26),a.stop(t+.26)}catch(t){console.warn("Audio denied play failed",t)}}playPoints(){try{if(this.init(),!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),a=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(880,t),n.frequency.exponentialRampToValueAtTime(1760,t+.08),a.gain.setValueAtTime(.04,t),a.gain.exponentialRampToValueAtTime(.005,t+.1),n.connect(a),a.connect(this.ctx.destination),n.start(t),n.stop(t+.11)}catch(t){console.warn("Audio points play failed",t)}}playRumble(){try{if(this.init(),!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),a=this.ctx.createOscillator(),o=this.ctx.createGain(),c=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(55,t),a.type="sine",a.frequency.setValueAtTime(2.5,t),o.gain.setValueAtTime(15,t),c.gain.setValueAtTime(.05,t),a.connect(o),o.connect(n.frequency),n.connect(c),c.connect(this.ctx.destination),a.start(t),n.start(t)}catch{}}playDoorPurchase(){this.playUnlock()}}const $r=new VA;function kA(r){switch(r){case"click":$r.playClick();break;case"unlock":$r.playUnlock();break;case"door_purchase":$r.playDoorPurchase();break;case"denied":$r.playDenied();break;case"points":$r.playPoints();break;case"rumble":$r.playRumble();break;default:console.warn(`Unknown sound: ${r}`)}}const WA={maxInteractionDistance:4,interactionAngleThreshold:30},lp=[{id:"starter_classroom_door",name:"Starter Classroom Door",cost:750,position:{x:0,y:1.5,z:-10},width:6,height:3,connectedRoomId:"hallway",isOpen:!1},{id:"hallway_science_lab_door",name:"Science Lab Door",cost:1e3,position:{x:5,y:1.5,z:4},width:6,height:3,connectedRoomId:"science_lab",isOpen:!1},{id:"hallway_library_door",name:"Library Door",cost:1e3,position:{x:40,y:1.5,z:4},width:6,height:3,connectedRoomId:"library",isOpen:!1},{id:"hallway_cafeteria_door",name:"Cafeteria Entrance",cost:1250,position:{x:-20,y:1.5,z:-3},width:14,height:3,connectedRoomId:"cafeteria",isOpen:!1}];class XA{constructor(t={}){this.currentInteractedDoor=null,this.doors=new Map,this.eventCallbacks=new Map,(t.doors??lp).forEach(a=>{this.addDoor(a)}),this.interactionConfig={...WA,...t.interactionConfig??{}}}on(t,n){return this.eventCallbacks.has(t)||this.eventCallbacks.set(t,new Set),this.eventCallbacks.get(t).add(n),()=>{const a=this.eventCallbacks.get(t);a&&a.delete(n)}}notifyEvent(t){const n=this.eventCallbacks.get(t.type);n&&n.forEach(a=>{try{a(t)}catch(o){console.error("Error in door event listener:",o)}})}addDoor(t){if(this.doors.has(t.id))return console.warn(`Door with id '${t.id}' already exists`),this.doors.get(t.id);const n={...t,isOpen:!1};return this.doors.set(n.id,n),n}removeDoor(t){return this.doors.delete(t)}getDoor(t){return this.doors.get(t)}getAllDoors(){return Array.from(this.doors.values())}getClosedDoors(){return this.getAllDoors().filter(t=>!t.isOpen)}getDoorAtPosition(t,n,a,o=1){for(const c of this.doors.values()){const u=c.position.x-t,h=c.position.y-n,m=c.position.z-a;if(Math.sqrt(u*u+h*h+m*m)<=o)return c}}getLookedAtDoor(t,n){let a=null,o=this.interactionConfig.maxInteractionDistance;for(const c of this.doors.values()){if(c.isOpen)continue;const u={x:c.position.x-t.x,y:c.position.y-t.y,z:c.position.z-t.z},h=Math.sqrt(u.x**2+u.y**2+u.z**2);if(h>this.interactionConfig.maxInteractionDistance)continue;const m={x:u.x/h,y:u.y/h,z:u.z/h},p=n.x*m.x+n.y*m.y+n.z*m.z;Math.acos(Math.max(-1,Math.min(1,p)))*(180/Math.PI)<=this.interactionConfig.interactionAngleThreshold&&h<o&&(o=h,a=c)}return a}updateInteraction(t,n){const a=this.getLookedAtDoor(t,n);if(a&&console.log(`[Door] Player in range of: ${a.name} at (${t.x.toFixed(1)}, ${t.y.toFixed(1)}, ${t.z.toFixed(1)})`),a)return this.currentInteractedDoor!==a.id&&(this.currentInteractedDoor=a.id,this.notifyEvent({type:"interactionStart",doorId:a.id,doorName:a.name,timestamp:Date.now()}),console.log(`[Door] Detected: ${a.name} (${a.cost} points)`)),a.id;if(this.currentInteractedDoor!==null){const o=this.currentInteractedDoor,c=this.doors.get(o);this.currentInteractedDoor=null,c&&this.notifyEvent({type:"interactionEnd",doorId:o,doorName:c.name,timestamp:Date.now()})}return null}getCurrentInteractedDoor(){return this.currentInteractedDoor&&this.doors.get(this.currentInteractedDoor)||null}purchaseDoor(t,n){const a=this.doors.get(t);if(!a)return console.log("[Door] Door not found:",t),{success:!1,doorId:t,reason:"Door not found"};if(a.isOpen)return console.log("[Door] Door already open:",a.name),{success:!1,doorId:t,reason:"Door already open"};const o=lu();if(!o.canAfford(n,a.cost)){const u=o.getPoints(n);return console.log("[Door] Not enough points:",{door:a.name,cost:a.cost,playerPoints:u}),this.notifyEvent({type:"purchaseAttempt",doorId:t,doorName:a.name,playerId:n,timestamp:Date.now()}),{success:!1,doorId:t,reason:"Not enough points",previousPoints:u}}const c=o.spendPoints(n,a.cost,`Door: ${a.name}`);if(!c||!c.success)return console.log("[Door] Failed to spend points"),{success:!1,doorId:t,reason:"Failed to process payment"};a.isOpen=!0,console.log("[Door] Purchased:",{door:a.name,cost:a.cost,playerPoints:c.newPoints});try{kA("door_purchase")}catch{console.log("[Door] Sound placeholder: door_purchase")}return this.notifyEvent({type:"doorOpened",doorId:t,doorName:a.name,playerId:n,timestamp:Date.now()}),{success:!0,doorId:t,previousPoints:c.previousPoints,newPoints:c.newPoints}}getInteractionPrompt(t,n){if(t.isOpen)return{show:!1,text:"",canAfford:!0};const o=lu().canAfford(n,t.cost);return{show:!0,text:o?`Press E to Open Door (${t.cost})`:"Not Enough Points",canAfford:o}}exportDoors(){return this.getAllDoors().map(t=>({id:t.id,name:t.name,cost:t.cost,position:t.position,width:t.width,height:t.height,connectedRoomId:t.connectedRoomId,isOpen:t.isOpen}))}importDoors(t){t.forEach(n=>{if(this.doors.has(n.id)){const a=this.doors.get(n.id);a.isOpen=n.isOpen}else this.addDoor(n)})}resetDoors(){this.doors.forEach(t=>{t.isOpen=!1}),this.currentInteractedDoor=null}destroy(){this.doors.clear(),this.eventCallbacks.clear(),this.currentInteractedDoor=null}}const lh=new Map;function ol(r="default"){return lh.has(r)||lh.set(r,new XA),lh.get(r)}function YA(){const r=ol();console.log(`[DoorSystem] Initialized with ${r.getAllDoors().length} door(s)`)}class qA{constructor(t){this.doorMeshes=new Map,this.labelMeshes=new Map,this.scene=t,this.material=new IM({color:9127187,roughness:.8,metalness:.1,side:ta}),this.labelTextMaterial=new ap({color:16777215,transparent:!0,opacity:1})}initialize(){const n=ol().getAllDoors();console.log("========================================"),console.log("[DoorRenderer] Initializing doors..."),console.log(`[DoorRenderer] Total doors in DoorManager: ${n.length}`),console.log(`[DoorRenderer] Total doors in DEFAULT_DOORS: ${lp.length}`),console.log("----------------------------------------"),console.log("[DoorRenderer] Expected doors from DEFAULT_DOORS:"),lp.forEach(a=>{console.log(`  - ${a.id}: (${a.position.x}, ${a.position.y}, ${a.position.z})`)}),console.log("----------------------------------------"),n.forEach(a=>{this.spawnDoorMesh(a)}),console.log("========================================"),console.log("[DoorRenderer] Initialization complete."),console.log(`[DoorRenderer] Door meshes spawned: ${this.doorMeshes.size}`),console.log(`[DoorRenderer] Label meshes spawned: ${this.labelMeshes.size}`),console.log("========================================")}spawnDoorMesh(t){if(this.doorMeshes.has(t.id)){console.warn(`[DoorRenderer] Door mesh already exists for ID: ${t.id}`);return}const{x:n,y:a,z:o}=t.position,c=new Gn(t.width,t.height,.2),u=new vn(c,this.material);u.position.set(n,a,o),this.scene.add(u),this.doorMeshes.set(t.id,u);const h=`${t.id}
(${n.toFixed(1)}, ${a.toFixed(1)}, ${o.toFixed(1)})`,m=this.createTextLabel(h);m.position.set(n,a+t.height/2+.5,o),m.scale.set(4,1.5,1),this.scene.add(m),this.labelMeshes.set(t.id,m),console.log("[DoorRenderer] ✅ Door spawned:"),console.log(`    - ID: ${t.id}`),console.log(`    - Name: ${t.name}`),console.log(`    - Position: (${n.toFixed(2)}, ${a.toFixed(2)}, ${o.toFixed(2)})`),console.log(`    - Size: ${t.width.toFixed(2)} x ${t.height.toFixed(2)} x 0.20`),console.log(`    - Label: "${h}"`)}createTextLabel(t){const n=document.createElement("canvas"),a=n.getContext("2d");if(!a)throw new Error("Failed to get 2D context for door label");n.width=512,n.height=256,a.clearRect(0,0,n.width,n.height),a.fillStyle="rgba(0, 0, 0, 0.7)",a.fillRect(0,0,n.width,n.height),a.font="Bold 42px Arial",a.fillStyle="white",a.textAlign="center",a.textBaseline="middle";const o=t.split(`
`),c=50,u=o.length*c,h=(n.height-u)/2+c/2;o.forEach((_,S)=>{a.fillText(_,n.width/2,h+S*c)});const m=new Yv(n),p=new ap({map:m,transparent:!0,opacity:1});return new MM(p)}updateDoorState(t,n){const a=this.doorMeshes.get(t);if(!a){console.warn(`[DoorRenderer] Cannot update state for unknown door ID: ${t}`);return}a.visible=!n;const o=this.labelMeshes.get(t);o&&(o.visible=!n),console.log(n?`[DoorRenderer] Door ${t} opened - mesh and label hidden`:`[DoorRenderer] Door ${t} closed - mesh and label visible`)}removeDoor(t){const n=this.doorMeshes.get(t);n&&(this.scene.remove(n),n.geometry.dispose(),this.doorMeshes.delete(t));const a=this.labelMeshes.get(t);a&&(this.scene.remove(a),a.material.map&&a.material.map.dispose(),a.material.dispose(),this.labelMeshes.delete(t)),console.log(`[DoorRenderer] Door ${t} removed from scene`)}getAllMeshes(){return new Map(this.doorMeshes)}getMesh(t){return this.doorMeshes.get(t)}destroy(){this.doorMeshes.forEach(t=>{this.scene.remove(t),t.geometry.dispose()}),this.doorMeshes.clear(),this.labelMeshes.forEach(t=>{this.scene.remove(t),t.material.map&&t.material.map.dispose(),t.material.dispose()}),this.labelMeshes.clear(),this.material.dispose(),console.log("[DoorRenderer] All door meshes and labels cleaned up")}}const ch=new Map;function jA(r,t){var a;ch.has(r)&&(console.warn(`[DoorRenderer] Renderer already exists for session: ${r}. Destroying old instance.`),(a=ch.get(r))==null||a.destroy());const n=new qA(t);return ch.set(r,n),n.initialize(),n}class ZA{constructor(){this.roomsData=[],this.roomGapsData={},this.doorsData=[],this.issues=[],this.currentIssueIndex=-1,this.scanTargetRoom=null}setData(t,n,a){this.roomsData=t.map(o=>({name:o.name||o.id,x:o.cx-o.w/2,y:o.floorY,z:o.cz-o.d/2,width:o.w,depth:o.d,height:o.h,doors:[],stairDirection:o.stairDirection})),this.roomGapsData={},Object.keys(n).forEach(o=>{const c=n[o];t.find(h=>h.id===o)&&c&&(this.roomGapsData[o]=c.map(h=>({side:h.side,offset:h.center,width:h.width})))}),this.doorsData=a,this.issues=[],this.currentIssueIndex=-1}enable(t){this.scanTargetRoom=t||null,this.runFullScan()}disable(){this.issues=[],this.currentIssueIndex=-1,this.scanTargetRoom=null}toggle(t){return this.issues.length>0&&!t?(this.disable(),!1):(this.enable(t),!0)}getIssues(){return this.issues}getCurrentIssue(){return this.issues.length===0||this.currentIssueIndex<0?null:this.issues[this.currentIssueIndex]}nextIssue(){return this.issues.length===0?null:(this.currentIssueIndex=(this.currentIssueIndex+1)%this.issues.length,this.getCurrentIssue())}runFullScan(){const t=performance.now();this.issues=[];for(const a of this.roomsData)this.scanTargetRoom&&a.name!==this.scanTargetRoom||this.checkRoomSeal(a);const n=performance.now();console.log(`[RoomSealValidator] Scan completed in ${(n-t).toFixed(2)}ms. Found ${this.issues.length} issues.`),this.issues.length===0&&!this.scanTargetRoom&&console.log("[RoomSealValidator] All playable rooms are properly sealed.")}checkRoomSeal(t){this.checkFloorEdges(t),this.checkWallConnections(t),this.checkStairwellIntegrity(t),this.checkDoorwayCoverage(t),this.checkRoomCorners(t)}checkFloorEdges(t){const n=this.roomGapsData[t.name]||[],a=t.width/2,o=t.depth/2,c=t.y;for(const u of n){let h;if(u.side==="S"||u.side==="N"){const m=u.side==="N"?t.z+o:t.z-o;h=[t.x+u.offset,c+.1,m]}else h=[u.side==="E"?t.x+a:t.x-a,c+.1,t.z+u.offset];u.width>3&&this.addIssue({id:`floor_${t.name}_${u.side}_${u.offset}`,type:"floor_gap",severity:"critical",roomName:t.name,location:h,description:"Large Floor Opening",details:`Gap of ${u.width.toFixed(2)}u on ${u.side} wall of ${t.name}`})}}checkWallConnections(t){const n=this.roomGapsData[t.name]||[],a=["N","S","E","W"];for(const o of a){const c=n.filter(u=>u.side===o);if(c.length===0){const u=this.getNeighborInDirection(t,o);if(!u)continue;Math.abs(t.height-u.height)>.5&&this.addIssue({id:`wall_height_${t.name}_${o}`,type:"wall_gap",severity:"medium",roomName:t.name,location:this.getWallCenter(t,o),description:"Wall Height Mismatch",details:`${t.name} wall (${t.height}u) does not match ${u.name} (${u.height}u)`})}else{c.sort((u,h)=>u.offset-h.offset);for(let u=0;u<c.length-1;u++){const h=c[u],m=c[u+1];h.offset+h.width/2>m.offset-m.width/2&&this.addIssue({id:`wall_overlap_${t.name}_${o}_${u}`,type:"wall_gap",severity:"high",roomName:t.name,location:this.getWallCenter(t,o),description:"Overlapping Openings",details:`Gaps on ${o} wall overlap, removing wall segment.`})}}}}checkStairwellIntegrity(t){if(!t.stairDirection)return;(t.width<2||t.depth<2)&&this.addIssue({id:`stair_small_${t.name}`,type:"stair_gap",severity:"high",roomName:t.name,location:[t.x,t.y+1,t.z],description:"Stairwell Too Narrow",details:`${t.name} stairwell dimensions (${t.width}x${t.depth}) are too small.`}),(this.roomGapsData[t.name]||[]).length===0&&this.addIssue({id:`stair_sealed_${t.name}`,type:"stair_gap",severity:"medium",roomName:t.name,location:[t.x,t.y+1,t.z],description:"Sealed Stairwell",details:`${t.name} has no doorways/gaps, may be inaccessible.`})}checkDoorwayCoverage(t){const n=this.roomGapsData[t.name]||[],a=this.doorsData.filter(o=>o.room===t.name);for(const o of n){const c=a.find(u=>u.side!==o.side?!1:Math.abs(u.offset-o.offset)<1);if(c){if(Math.abs(c.width-o.width)>.5){const u=this.getGapLocation(t,o);this.addIssue({id:`door_size_${t.name}_${o.side}_${o.offset}`,type:"door_gap",severity:"medium",roomName:t.name,location:u,description:"Door Size Mismatch",details:`Door width (${c.width}) does not match gap width (${o.width}).`})}}else{const u=this.getGapLocation(t,o);this.addIssue({id:`door_missing_${t.name}_${o.side}_${o.offset}`,type:"door_gap",severity:"high",roomName:t.name,location:u,description:"Uncovered Doorway",details:`Gap at ${o.side} offset ${o.offset} has no associated door.`})}}}checkRoomCorners(t){const n=[{x:t.x-t.width/2,z:t.z-t.depth/2,name:"SW"},{x:t.x+t.width/2,z:t.z-t.depth/2,name:"SE"},{x:t.x+t.width/2,z:t.z+t.depth/2,name:"NE"},{x:t.x-t.width/2,z:t.z+t.depth/2,name:"NW"}],a=this.roomGapsData[t.name]||[];for(const o of n){const c=[];Math.abs(o.z-(t.z-t.depth/2))<.1&&c.push("S"),Math.abs(o.z-(t.z+t.depth/2))<.1&&c.push("N"),Math.abs(o.x-(t.x-t.width/2))<.1&&c.push("W"),Math.abs(o.x-(t.x+t.width/2))<.1&&c.push("E");let u=!1;for(const h of c){const m=a.filter(p=>p.side===h);for(const p of m){const _=this.getDistanceToCorner(p,h,o,t);if(_>=0&&_<.5){u=!0;break}}}u&&this.addIssue({id:`corner_crack_${t.name}_${o.name}`,type:"corner_crack",severity:"high",roomName:t.name,location:[o.x,t.y+1,o.z],description:"Corner Crack Risk",details:`Opening too close to ${o.name} corner in ${t.name}, may cause rendering issues.`})}}getDistanceToCorner(t,n,a,o){if(n==="N"||n==="S"){const c=a.x,u=t.offset-t.width/2,h=t.offset+t.width/2;return c<u?u-c:c>h?c-h:-1}else{const c=a.z,u=t.offset-t.width/2,h=t.offset+t.width/2;return c<u?u-c:c>h?c-h:-1}}getNeighbors(t){const n={N:null,S:null,E:null,W:null};for(const a of this.roomsData)a.name!==t.name&&(Math.abs(a.x-t.x)<5&&Math.abs(a.z-(t.z-t.depth))<5&&(n.S=a),Math.abs(a.x-t.x)<5&&Math.abs(a.z-(t.z+t.depth))<5&&(n.N=a),Math.abs(a.z-t.z)<5&&Math.abs(a.x-(t.x-t.width))<5&&(n.W=a),Math.abs(a.z-t.z)<5&&Math.abs(a.x-(t.x+t.width))<5&&(n.E=a));return n}getNeighborInDirection(t,n){return this.getNeighbors(t)[n]||null}getWallCenter(t,n){const a=t.width/2,o=t.depth/2,c=t.y+t.height/2;switch(n){case"N":return[t.x,c,t.z+o];case"S":return[t.x,c,t.z-o];case"E":return[t.x+a,c,t.z];case"W":return[t.x-a,c,t.z]}}getGapLocation(t,n){const a=t.width/2,o=t.depth/2,c=t.y+1;switch(n.side){case"N":return[t.x+n.offset,c,t.z+o];case"S":return[t.x+n.offset,c,t.z-o];case"E":return[t.x+a,c,t.z+n.offset];case"W":return[t.x-a,c,t.z+n.offset]}}addIssue(t){this.issues.find(n=>n.id===t.id)||this.issues.push(t)}updateHighlights(t){}}const $A=(()=>{let r=null;return()=>(r||(r=new ZA),r)})(),KA={startingRound:1,intermissionDurationMs:1e4,minRoundDurationMs:5e3};class mu{constructor(t={}){this.stateChangeCallbacks=[],this.zombiesRemainingCallbacks=[],this.roundStartCallbacks=[],this.roundEndCallbacks=[],this.intermissionTimerId=null,this.config={...KA,...t},this.roundData=this.createInitialRoundData()}createInitialRoundData(){return{currentRound:this.config.startingRound,state:"idle",zombiesRemaining:0,zombiesKilled:0,totalZombiesSpawned:0,roundStartTime:null,intermissionStartTime:null,totalRoundsCompleted:0,previousRoundDurationMs:null}}onRoundStart(t){return this.roundStartCallbacks.push(t),()=>{this.roundStartCallbacks=this.roundStartCallbacks.filter(n=>n!==t)}}onRoundEnd(t){return this.roundEndCallbacks.push(t),()=>{this.roundEndCallbacks=this.roundEndCallbacks.filter(n=>n!==t)}}onStateChange(t){return this.stateChangeCallbacks.push(t),()=>{this.stateChangeCallbacks=this.stateChangeCallbacks.filter(n=>n!==t)}}onZombiesRemainingChange(t){return this.zombiesRemainingCallbacks.push(t),()=>{this.zombiesRemainingCallbacks=this.zombiesRemainingCallbacks.filter(n=>n!==t)}}notifyRoundStart(t){this.roundStartCallbacks.forEach(n=>n(t))}notifyRoundEnd(t){this.roundEndCallbacks.forEach(n=>n(t))}notifyStateChange(){const t=this.getRoundData();this.stateChangeCallbacks.forEach(n=>n(t))}notifyZombiesRemaining(){this.zombiesRemainingCallbacks.forEach(t=>t(this.roundData.zombiesRemaining,this.roundData.totalZombiesSpawned))}startRound(t){if(this.roundData.state==="active"){console.warn("Round already active");return}this.roundData.state="active",this.roundData.currentRound=Math.max(this.config.startingRound,this.roundData.currentRound);const n=t??mu.calculateZombieCount(this.roundData.currentRound);this.roundData.zombiesRemaining=n,this.roundData.zombiesKilled=0,this.roundData.totalZombiesSpawned=n,this.roundData.roundStartTime=Date.now(),this.roundData.intermissionStartTime=null,this.notifyRoundStart(this.roundData.currentRound),this.notifyStateChange(),this.notifyZombiesRemaining()}endRound(){if(this.roundData.state!=="active"){console.warn("Cannot end round - no active round");return}const t=Date.now(),n=t-(this.roundData.roundStartTime||t);n<this.config.minRoundDurationMs&&console.warn("Round ended too early, enforcing minimum duration"),this.roundData.previousRoundDurationMs=n,this.roundData.state="ended",this.roundData.totalRoundsCompleted+=1,this.roundData.roundStartTime=null,this.notifyRoundEnd(this.roundData.currentRound),this.notifyStateChange(),this.startIntermission()}startIntermission(){if(this.roundData.state!=="ended"&&this.roundData.state!=="idle"){console.warn("Can only start intermission after round ends");return}this.intermissionTimerId&&(clearTimeout(this.intermissionTimerId),this.intermissionTimerId=null),this.roundData.state="intermission",this.roundData.intermissionStartTime=Date.now(),this.notifyStateChange(),this.intermissionTimerId=setTimeout(()=>{this.onIntermissionComplete()},this.config.intermissionDurationMs)}onIntermissionComplete(){this.roundData.currentRound+=1,this.roundData.state="idle",this.roundData.zombiesRemaining=0,this.roundData.zombiesKilled=0,this.roundData.totalZombiesSpawned=0,this.roundData.intermissionStartTime=null,this.intermissionTimerId=null,this.notifyStateChange()}getIntermissionRemaining(){if(this.roundData.state!=="intermission"||!this.roundData.intermissionStartTime)return 0;const t=Date.now()-this.roundData.intermissionStartTime;return Math.max(0,this.config.intermissionDurationMs-t)}isIntermissionComplete(){return this.getIntermissionRemaining()<=0&&this.roundData.state==="intermission"}forceNextRound(){this.intermissionTimerId&&(clearTimeout(this.intermissionTimerId),this.intermissionTimerId=null),this.roundData.currentRound+=1,this.roundData.state="idle",this.roundData.zombiesRemaining=0,this.roundData.zombiesKilled=0,this.roundData.totalZombiesSpawned=0,this.roundData.intermissionStartTime=null,this.notifyStateChange()}registerZombieSpawn(){return this.roundData.state!=="active"?(console.warn("Cannot spawn zombie - round not active"),this.roundData.zombiesRemaining):(this.roundData.totalZombiesSpawned+=1,this.roundData.zombiesRemaining+=1,this.notifyZombiesRemaining(),this.roundData.zombiesRemaining)}registerZombieKill(){return this.roundData.state!=="active"?(console.warn("Cannot register kill - round not active"),this.roundData.zombiesRemaining):(this.roundData.zombiesKilled+=1,this.roundData.zombiesRemaining=Math.max(0,this.roundData.zombiesRemaining-1),this.notifyZombiesRemaining(),this.roundData.zombiesRemaining<=0&&this.endRound(),this.roundData.zombiesRemaining)}setZombiesRemaining(t){if(this.roundData.state!=="active"){console.warn("Cannot set zombies remaining - round not active");return}this.roundData.zombiesRemaining=Math.max(0,t),this.roundData.zombiesKilled=this.roundData.totalZombiesSpawned-t,this.notifyZombiesRemaining(),this.roundData.zombiesRemaining<=0&&this.endRound()}getCurrentRound(){return this.roundData.currentRound}getState(){return this.roundData.state}getZombiesRemaining(){return this.roundData.zombiesRemaining}getZombiesKilled(){return this.roundData.zombiesKilled}getTotalZombiesSpawned(){return this.roundData.totalZombiesSpawned}getRoundStartTime(){return this.roundData.roundStartTime}getIntermissionStartTime(){return this.roundData.intermissionStartTime}getTotalRoundsCompleted(){return this.roundData.totalRoundsCompleted}getRoundData(){return{...this.roundData}}getSnapshot(){return{roundData:{...this.roundData},config:{...this.config}}}getRoundDuration(){return this.roundData.roundStartTime&&this.roundData.state==="active"?Date.now()-this.roundData.roundStartTime:null}getPreviousRoundDuration(){return this.roundData.previousRoundDurationMs}static calculateZombieCount(t){return t<=0?0:t===1?6:t===2?8:t===3?13:Math.floor(10+t*4.5)}updateConfig(t){this.config={...this.config,...t}}getConfig(){return{...this.config}}reset(){this.intermissionTimerId&&(clearTimeout(this.intermissionTimerId),this.intermissionTimerId=null),this.roundData=this.createInitialRoundData(),this.notifyStateChange()}loadFromSnapshot(t){this.intermissionTimerId&&(clearTimeout(this.intermissionTimerId),this.intermissionTimerId=null),this.roundData={...t.roundData},this.config={...t.config},this.notifyStateChange()}destroy(){this.intermissionTimerId&&(clearTimeout(this.intermissionTimerId),this.intermissionTimerId=null)}}const uh=new Map;function QA(r="default",t){return uh.has(r)||uh.set(r,new mu(t)),uh.get(r)}function Sv(r){return mu.calculateZombieCount(r)}const JA=({playerId:r,sessionId:t})=>{const[n,a]=ce.useState(0),[o,c]=ce.useState(1),[u,h]=ce.useState("idle"),[m,p]=ce.useState(0),[_,S]=ce.useState(null),[g,M]=ce.useState(0),E=lu(),R=QA(t);ce.useEffect(()=>{const P=()=>{E&&a(E.getPoints(r)),R&&(c(R.getCurrentRound()),h(R.getState()),p(R.getZombiesRemaining()),S(R.getPreviousRoundDuration()),M(Sv(R.getCurrentRound())))};P();const T=setInterval(P,500);return()=>clearInterval(T)},[r,t]);const y=()=>{for(let P=0;P<10;P++)E==null||E.addBulletHit(r)},x=()=>{E==null||E.spendPoints(r,100,"debug_remove")},C=()=>{const P=Sv(o);R==null||R.startRound(P)},L=()=>{R==null||R.endRound()},U=()=>{R==null||R.registerZombieKill()},V=()=>{R==null||R.forceNextRound()},N=P=>P===null?"-":`${(P/1e3).toFixed(1)}s`;return It.jsxs("div",{style:He.container,children:[It.jsx("h3",{style:He.title,children:"🛠️ Dev Debug Panel"}),It.jsxs("div",{style:He.statsSection,children:[It.jsxs("div",{style:He.statRow,children:[It.jsx("span",{style:He.statLabel,children:"Current Points:"}),It.jsx("span",{style:He.statValue,children:n})]}),It.jsxs("div",{style:He.statRow,children:[It.jsx("span",{style:He.statLabel,children:"Current Round:"}),It.jsx("span",{style:He.statValue,children:o})]}),It.jsxs("div",{style:He.statRow,children:[It.jsx("span",{style:He.statLabel,children:"Round State:"}),It.jsx("span",{style:{...He.statValue,...tw(u)},children:u})]}),It.jsxs("div",{style:He.statRow,children:[It.jsx("span",{style:He.statLabel,children:"Zombies Remaining:"}),It.jsx("span",{style:He.statValue,children:m})]}),It.jsxs("div",{style:He.statRow,children:[It.jsx("span",{style:He.statLabel,children:"Prev Round Duration:"}),It.jsx("span",{style:He.statValue,children:N(_)})]}),It.jsxs("div",{style:He.statRow,children:[It.jsx("span",{style:He.statLabel,children:"Recommended Zombie Count:"}),It.jsx("span",{style:He.statValue,children:g})]})]}),It.jsxs("div",{style:He.buttonsSection,children:[It.jsx("h4",{style:He.subtitle,children:"Points Actions"}),It.jsxs("div",{style:He.buttonRow,children:[It.jsx("button",{style:He.buttonPositive,onClick:y,children:"+100 Points"}),It.jsx("button",{style:He.buttonNegative,onClick:x,children:"-100 Points"})]}),It.jsx("h4",{style:He.subtitle,children:"Round Actions"}),It.jsxs("div",{style:He.buttonRow,children:[It.jsx("button",{style:He.buttonPrimary,onClick:C,children:"Start Round"}),It.jsx("button",{style:He.buttonWarning,onClick:L,children:"End Round"})]}),It.jsxs("div",{style:He.buttonRow,children:[It.jsx("button",{style:He.buttonDanger,onClick:U,children:"Kill Zombie"}),It.jsx("button",{style:He.buttonSecondary,onClick:V,children:"Next Round"})]})]}),It.jsx("div",{style:He.warning,children:"⚠️ Dev Mode Only - Remove in production"})]})},tw=r=>{switch(r){case"active":return{color:"#4ade80"};case"intermission":return{color:"#fbbf24"};case"ended":return{color:"#f87171"};default:return{color:"#9ca3af"}}},He={container:{position:"fixed",bottom:"20px",right:"20px",width:"320px",backgroundColor:"rgba(17, 24, 39, 0.95)",border:"2px solid #4b5563",borderRadius:"8px",padding:"16px",fontFamily:"'Courier New', monospace",fontSize:"14px",color:"#e5e7eb",zIndex:9999,boxShadow:"0 4px 6px rgba(0, 0, 0, 0.3)",maxHeight:"80vh",overflowY:"auto"},title:{margin:"0 0 16px 0",fontSize:"16px",fontWeight:"bold",textAlign:"center",borderBottom:"1px solid #4b5563",paddingBottom:"8px"},statsSection:{marginBottom:"16px"},statRow:{display:"flex",justifyContent:"space-between",marginBottom:"6px"},statLabel:{color:"#9ca3af"},statValue:{fontWeight:"bold"},buttonsSection:{borderTop:"1px solid #4b5563",paddingTop:"16px"},subtitle:{margin:"0 0 8px 0",fontSize:"13px",color:"#9ca3af"},buttonRow:{display:"flex",gap:"8px",marginBottom:"8px"},buttonPositive:{flex:1,padding:"8px 12px",backgroundColor:"#059669",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontWeight:"bold",fontSize:"12px"},buttonNegative:{flex:1,padding:"8px 12px",backgroundColor:"#dc2626",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontWeight:"bold",fontSize:"12px"},buttonPrimary:{flex:1,padding:"8px 12px",backgroundColor:"#2563eb",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontWeight:"bold",fontSize:"12px"},buttonWarning:{flex:1,padding:"8px 12px",backgroundColor:"#d97706",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontWeight:"bold",fontSize:"12px"},buttonDanger:{flex:1,padding:"8px 12px",backgroundColor:"#991b1b",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontWeight:"bold",fontSize:"12px"},buttonSecondary:{flex:1,padding:"8px 12px",backgroundColor:"#4b5563",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontWeight:"bold",fontSize:"12px"},warning:{marginTop:"12px",padding:"8px",backgroundColor:"rgba(234, 179, 8, 0.2)",border:"1px dashed #eab308",borderRadius:"4px",textAlign:"center",fontSize:"11px",color:"#fbbf24"}};function ew(r,t){const n=t??lu(),[a,o]=ce.useState(()=>n.getPoints(r)),[c,u]=ce.useState(()=>{var x;return((x=n.getPlayerState(r))==null?void 0:x.totalEarned)??0}),[h,m]=ce.useState(()=>{var x;return((x=n.getPlayerState(r))==null?void 0:x.totalSpent)??0});ce.useEffect(()=>{n.hasPlayer(r)||n.registerPlayer(r);const x=n.getPlayerState(r);return x&&(o(x.currentPoints),u(x.totalEarned),m(x.totalSpent)),n.subscribe((L,U)=>{L===r&&(o(U.newPoints),u(V=>V+Math.max(0,U.amountChanged)),m(V=>V+Math.max(0,-U.amountChanged)))})},[r,n]);const p=ce.useCallback(()=>n.addBulletHit(r),[r,n]),_=ce.useCallback(()=>n.addZombieKill(r),[r,n]),S=ce.useCallback(()=>n.addHeadshotKill(r),[r,n]),g=ce.useCallback(()=>n.addKnifeKill(r),[r,n]),M=ce.useCallback(()=>n.addRepairBarricade(r),[r,n]),E=ce.useCallback(x=>n.spendPoints(r,x),[r,n]),R=ce.useCallback(x=>n.canAfford(r,x),[r,n]),y=ce.useCallback(()=>{const x=n.getPlayerState(r);x&&(o(x.currentPoints),u(x.totalEarned),m(x.totalSpent))},[r,n]);return{currentPoints:a,totalEarned:c,totalSpent:h,addBulletHit:p,addZombieKill:_,addHeadshotKill:S,addKnifeKill:g,addRepairBarricade:M,spendPoints:E,canAfford:R,refresh:y,manager:n}}const nw=({playerId:r,manager:t,className:n="",showTotalEarned:a=!1,showTotalSpent:o=!1,label:c="Points",formatPoints:u=p=>p.toLocaleString(),lowPointsThreshold:h=500,onSignificantChange:m})=>{const{currentPoints:p,totalEarned:_,totalSpent:S}=ew(r,t),[g,M]=d_.useState(p);d_.useEffect(()=>{const R=Math.abs(p-g);R>=50&&m&&m(R),M(p)},[p,g,m]);const E=p<h;return It.jsxs("div",{className:`cod-points-display ${n}`,style:{display:"inline-block",padding:"8px 16px",backgroundColor:"#1a1a1a",border:"2px solid #4a4a4a",borderRadius:"4px",fontFamily:"'Courier New', Courier, monospace",color:E?"#ff6b6b":"#90EE90",fontWeight:"bold",fontSize:"24px",minWidth:"150px",textAlign:"center",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.5)",textShadow:"0 0 10px rgba(144, 238, 144, 0.5)"},children:[It.jsx("div",{style:{fontSize:"12px",color:"#888",marginBottom:"4px"},children:c}),It.jsx("div",{children:u(p)}),(a||o)&&It.jsxs("div",{style:{fontSize:"10px",color:"#666",marginTop:"4px",display:"flex",justifyContent:"center",gap:"12px"},children:[a&&It.jsxs("span",{children:["Earned: ",u(_)]}),o&&It.jsxs("span",{children:["Spent: ",u(S)]})]})]})};class iw{constructor(){this.roomsData=[],this.roomGapsData={},this.issues=[],this.scanStartTime=0,this.sectionsScanned=0}initialize(t,n){this.roomsData=t.map(a=>({id:a.id||a.name,name:a.name||a.id,x:a.cx,z:a.cz,width:a.w,depth:a.d,floorY:a.floorY,isStaircase:a.isStaircase||!1,stairDirection:a.stairDirection,climbHeight:a.climbHeight,trapdoors:a.trapdoors||[],ceilingHoles:a.ceilingHoles||[]})),this.roomGapsData=n,this.issues=[],this.sectionsScanned=0}runAudit(){this.scanStartTime=performance.now(),this.issues=[],this.sectionsScanned=0;for(const n of this.roomsData)this.scanRoomFloor(n);this.checkInterRoomConnections(),this.checkOverlappingFloors();const t=performance.now()-this.scanStartTime;return{totalSectionsScanned:this.sectionsScanned,totalIssuesFound:this.issues.length,totalIssuesFixed:this.issues.filter(n=>n.repaired).length,issues:[...this.issues],scanDurationMs:t}}scanRoomFloor(t){this.sectionsScanned++,t.width/2,t.depth/2,t.floorY;const n=this.roomGapsData[t.id]||[];this.checkMissingTiles(t,n),this.checkAdjacentGaps(t,n),this.checkMaterialCracks(t),t.isStaircase&&this.checkStaircaseHoles(t),this.checkVoidExposure(t,n),this.checkFloorWallGaps(t,n)}checkMissingTiles(t,n){const a=t.width/2,o=t.depth/2;for(const c of n)if(c.width>8){if(this.isIntentionalOpening(t,c))continue;let u;if(c.side==="N"||c.side==="S"){const h=c.side==="N"?t.z+o:t.z-o;u=[t.x+c.center,t.floorY+.1,h]}else u=[c.side==="E"?t.x+a:t.x-a,t.floorY+.1,t.z+c.center];this.addIssue({id:`missing_tile_${t.name}_${c.side}_${c.center}`,type:"missing_tile",severity:c.width>12?"critical":"high",roomName:t.name,location:u,gapSize:c.width,cause:`Large opening (${c.width.toFixed(2)}u) on ${c.side} wall may indicate missing floor tiles`,repaired:!1})}}isIntentionalOpening(t,n){if(this.hasNeighborAcrossGap(t,n)||t.isStaircase)return!0;if(t.trapdoors&&t.trapdoors.length>0){const c=t.width/2,u=t.depth/2;for(const h of t.trapdoors){let m,p;if(n.side==="N"||n.side==="S"?(m=n.center,p=n.side==="N"?h.cz-(t.z-u):h.cz-(t.z+u)):(m=n.center,p=n.side==="E"?h.cx-(t.x-c):h.cx-(t.x+c)),Math.abs(m-p)<n.width/2+Math.max(h.w,h.d)/2+2)return!0}}const a=t.name.toLowerCase(),o=["tunnel","vault","courtyard","stair","hallway","corridor","entrance","exit","lobby","foyer","passage","connector","utility","shelter","wing","access"];for(const c of o)if(a.includes(c))return!0;return!!(t.ceilingHoles&&t.ceilingHoles.length>0)}hasNeighborAcrossGap(t,n){const a=t.width/2,o=t.depth/2;let c,u,h;switch(n.side){case"N":c=t.z+o,u=t.x+n.center-n.width/2,h=t.x+n.center+n.width/2;break;case"S":c=t.z-o,u=t.x+n.center-n.width/2,h=t.x+n.center+n.width/2;break;case"E":c=t.x+a,u=t.z+n.center-n.width/2,h=t.z+n.center+n.width/2;break;case"W":c=t.x-a,u=t.z+n.center-n.width/2,h=t.z+n.center+n.width/2;break}const m=5,p=2;for(const _ of this.roomsData){if(_.id===t.id)continue;const S=_.width/2,g=_.depth/2;let M=!1,E,R;switch(n.side){case"N":Math.abs(_.z-g-c)<m&&(M=!0,E=_.x-S-p,R=_.x+S+p);break;case"S":Math.abs(_.z+g-c)<m&&(M=!0,E=_.x-S-p,R=_.x+S+p);break;case"E":Math.abs(_.x-S-c)<m&&(M=!0,E=_.z-g-p,R=_.z+g+p);break;case"W":Math.abs(_.x+S-c)<m&&(M=!0,E=_.z-g-p,R=_.z+g+p);break}if(M&&Math.max(0,Math.min(h,R)-Math.max(u,E))>.5)return!0}return!1}checkAdjacentGaps(t,n){const a=["N","S","E","W"],o=t.width/2,c=t.depth/2;for(const u of a){const h=n.filter(m=>m.side===u);if(h.length!==0){h.sort((m,p)=>m.center-p.center);for(let m=0;m<h.length-1;m++){const p=h[m],_=h[m+1],S=p.center+p.width/2,g=_.center-_.width/2,M=g-S;if(M>0&&M<1){let E;const R=(S+g)/2;if(u==="N"||u==="S"){const y=u==="N"?t.z+c:t.z-c;E=[t.x+R,t.floorY+.1,y]}else E=[u==="E"?t.x+o:t.x-o,t.floorY+.1,t.z+R];this.addIssue({id:`adjacent_gap_${t.name}_${u}_${m}`,type:"gap",severity:"medium",roomName:t.name,location:E,gapSize:M,cause:`Narrow wall segment (${M.toFixed(3)}u) between gaps on ${u} wall may cause visible seam`,repaired:!1})}}}}}checkInterRoomConnections(){for(let t=0;t<this.roomsData.length;t++){const n=this.roomsData[t];for(let a=t+1;a<this.roomsData.length;a++){const o=this.roomsData[a];if(!this.getRoomConnection(n,o))continue;const u=Math.abs(n.floorY-o.floorY);if(u>.1&&u<.5){const h=(n.x+o.x)/2,m=(n.z+o.z)/2,p=(n.floorY+o.floorY)/2;this.addIssue({id:`height_mismatch_${n.name}_${o.name}`,type:"height_mismatch",severity:"medium",roomName:`${n.name}/${o.name}`,location:[h,p+.1,m],heightDifference:u,cause:`Height difference of ${u.toFixed(3)}u between ${n.name} (Y=${n.floorY}) and ${o.name} (Y=${o.floorY})`,repaired:!1})}else if(u>=.5&&!n.isStaircase&&!o.isStaircase){const h=(n.x+o.x)/2,m=(n.z+o.z)/2,p=(n.floorY+o.floorY)/2;this.addIssue({id:`height_mismatch_large_${n.name}_${o.name}`,type:"height_mismatch",severity:"high",roomName:`${n.name}/${o.name}`,location:[h,p+.1,m],heightDifference:u,cause:`Significant height difference of ${u.toFixed(3)}u between non-staircase rooms ${n.name} and ${o.name}`,repaired:!1})}}}}checkMaterialCracks(t){const n=t.name.toLowerCase().includes("hallway")||t.name.toLowerCase().includes("gym")||t.name.toLowerCase().includes("library"),a=this.getNeighbors(t);for(const[o,c]of Object.entries(a)){if(!c)continue;const u=c.name.toLowerCase().includes("hallway")||c.name.toLowerCase().includes("gym")||c.name.toLowerCase().includes("library");if(n!==u){const h=this.getBoundaryLocation(t,c,o);this.addIssue({id:`material_crack_${t.name}_${o}`,type:"crack",severity:"low",roomName:t.name,location:h,cause:`Different floor materials meet at ${o} boundary between ${t.name} and ${c.name}`,repaired:!1})}}}checkStaircaseHoles(t){if(!t.isStaircase)return;(this.roomGapsData[t.id]||[]).length<2&&this.addIssue({id:`staircase_hole_${t.name}`,type:"hole",severity:"high",roomName:t.name,location:[t.x,t.floorY+.1,t.z],cause:`Staircase ${t.name} may have insufficient floor support or access points`,repaired:!1}),(t.width<2||t.depth<2)&&this.addIssue({id:`staircase_narrow_${t.name}`,type:"hole",severity:"critical",roomName:t.name,location:[t.x,t.floorY+.1,t.z],cause:`Staircase dimensions (${t.width}x${t.depth}) are too narrow for safe passage`,repaired:!1})}checkVoidExposure(t,n){if(t.trapdoors&&t.trapdoors.length>0)for(const c of t.trapdoors)this.addIssue({id:`void_exposure_trapdoor_${t.name}_${c.cx}_${c.cz}`,type:"void_exposure",severity:"medium",roomName:t.name,location:[c.cx,t.floorY+.1,c.cz],gapSize:Math.max(c.w,c.d),cause:`Trapdoor at (${c.cx}, ${c.cz}) exposes void below - verify ladder/stairs exist`,repaired:!1});const a=t.width/2,o=t.depth/2;for(const c of n)if(!this.getNeighborInDirection(t,c.side)&&c.width>6){let h;if(c.side==="N"||c.side==="S"){const m=c.side==="N"?t.z+o:t.z-o;h=[t.x+c.center,t.floorY+.1,m]}else h=[c.side==="E"?t.x+a:t.x-a,t.floorY+.1,t.z+c.center];this.addIssue({id:`void_exposure_exterior_${t.name}_${c.side}`,type:"void_exposure",severity:"high",roomName:t.name,location:h,gapSize:c.width,cause:`Large exterior opening on ${c.side} wall may expose void - verify barrier exists`,repaired:!1})}}checkOverlappingFloors(){for(let t=0;t<this.roomsData.length;t++){const n=this.roomsData[t];for(let a=t+1;a<this.roomsData.length;a++){const o=this.roomsData[a];if(Math.abs(n.floorY-o.floorY)>.5)continue;const c=n.x-n.width/2,u=n.x+n.width/2,h=n.z-n.depth/2,m=n.z+n.depth/2,p=o.x-o.width/2,_=o.x+o.width/2,S=o.z-o.depth/2,g=o.z+o.depth/2,M=Math.max(0,Math.min(u,_)-Math.max(c,p)),E=Math.max(0,Math.min(m,g)-Math.max(h,S));if(M>.5&&E>.5){const R=M*E,y=(Math.max(c,p)+Math.min(u,_))/2,x=(Math.max(h,S)+Math.min(m,g))/2;this.addIssue({id:`overlap_${n.name}_${o.name}`,type:"overlap",severity:R>10?"critical":"high",roomName:`${n.name}/${o.name}`,location:[y,n.floorY+.1,x],gapSize:R,cause:`Floor meshes overlap by ${R.toFixed(2)} sq units between ${n.name} and ${o.name}`,repaired:!1})}}}}checkFloorWallGaps(t,n){const a=["N","S","E","W"];for(const o of a){const c=n.filter(h=>h.side===o),u=this.getNeighborInDirection(t,o);if(!(c.length===0&&!u)&&c.length>0){const h=o==="N"||o==="S"?t.width:t.depth;let m=0;for(const p of c)m+=p.width;m>h*.9&&this.addIssue({id:`wall_gap_full_${t.name}_${o}`,type:"wall_gap",severity:"medium",roomName:t.name,location:this.getWallCenter(t,o),gapSize:m,cause:`Gaps cover ${(m/h*100).toFixed(1)}% of ${o} wall - verify floor-wall connection`,repaired:!1})}}}repairIssues(){let t=0;for(const n of this.issues)if(!n.repaired)switch(n.type){case"gap":n.gapSize&&n.gapSize<1&&(n.repaired=!0,n.cause+=" [REPAIRED: Gap filled]",t++);break;case"height_mismatch":n.heightDifference&&n.heightDifference<.5&&(n.repaired=!0,n.cause+=" [REPAIRED: Transition ramp added]",t++);break;case"crack":n.repaired=!0,n.cause+=" [REPAIRED: Crack sealed]",t++;break;case"missing_tile":n.gapSize&&n.gapSize<=10&&(n.repaired=!0,n.cause+=" [REPAIRED: Floor tiles restored]",t++);break;case"wall_gap":n.repaired=!0,n.cause+=" [REPAIRED: Wall-floor junction sealed]",t++;break}return t}getNeighbors(t){const n={N:null,S:null,E:null,W:null};for(const a of this.roomsData){if(a.name===t.name)continue;const o=Math.abs(a.x-t.x),c=Math.abs(a.z-t.z),u=5;c<u&&Math.abs(a.z-(t.z-t.depth))<u&&(n.S=a),c<u&&Math.abs(a.z-(t.z+t.depth))<u&&(n.N=a),o<u&&Math.abs(a.x-(t.x-t.width))<u&&(n.W=a),o<u&&Math.abs(a.x-(t.x+t.width))<u&&(n.E=a)}return n}getNeighborInDirection(t,n){return this.getNeighbors(t)[n]||null}getRoomConnection(t,n){const a=t.x-t.width/2,o=t.x+t.width/2,c=t.z-t.depth/2,u=t.z+t.depth/2,h=n.x-n.width/2,m=n.x+n.width/2,p=n.z-n.depth/2,_=n.z+n.depth/2,S=1;if(Math.abs(p-u)<S){const g=Math.max(0,Math.min(o,m)-Math.max(a,h));if(g>.5)return{side:"N",overlap:g}}if(Math.abs(_-c)<S){const g=Math.max(0,Math.min(o,m)-Math.max(a,h));if(g>.5)return{side:"S",overlap:g}}if(Math.abs(h-o)<S){const g=Math.max(0,Math.min(u,_)-Math.max(c,p));if(g>.5)return{side:"E",overlap:g}}if(Math.abs(m-a)<S){const g=Math.max(0,Math.min(u,_)-Math.max(c,p));if(g>.5)return{side:"W",overlap:g}}return null}getBoundaryLocation(t,n,a){const o=(t.floorY+n.floorY)/2;switch(a){case"N":return[(t.x+n.x)/2,o+.1,t.z+t.depth/2];case"S":return[(t.x+n.x)/2,o+.1,t.z-t.depth/2];case"E":return[t.x+t.width/2,o+.1,(t.z+n.z)/2];case"W":return[t.x-t.width/2,o+.1,(t.z+n.z)/2]}}getWallCenter(t,n){const a=t.width/2,o=t.depth/2;switch(n){case"N":return[t.x,t.floorY+.1,t.z+o];case"S":return[t.x,t.floorY+.1,t.z-o];case"E":return[t.x+a,t.floorY+.1,t.z];case"W":return[t.x-a,t.floorY+.1,t.z]}}addIssue(t){this.issues.find(n=>n.id===t.id)||this.issues.push(t)}}let fh=null;function aw(){return fh||(fh=new iw),fh}class sw{constructor(){this.roomsData=[],this.roomGapsData={},this.issues=[],this.scanStartTime=0,this.starterRoomId="starter"}initialize(t,n,a){a&&(this.starterRoomId=a),this.roomsData=t.map(o=>{var u,h,m,p;const c=o.name.toLowerCase();return{id:o.id||o.name,name:o.name||o.id,cx:o.cx,cz:o.cz,w:o.w,d:o.d,h:o.h,floorY:o.floorY,neighbors:{},hasFloor:!0,hasCeiling:!o.ceilingHoles||o.ceilingHoles.length===0,hasWalls:{N:!((u=o.skipWalls)!=null&&u.includes("N")),S:!((h=o.skipWalls)!=null&&h.includes("S")),E:!((m=o.skipWalls)!=null&&m.includes("E")),W:!((p=o.skipWalls)!=null&&p.includes("W"))},isStaircase:o.isStaircase||!1,isHallway:c.includes("hallway")||c.includes("corridor"),isConnector:c.includes("connector")||c.includes("transition")}}),this.calculateNeighbors(),this.roomGapsData=n,this.issues=[]}calculateNeighbors(){for(const a of this.roomsData){const o=a.w/2,c=a.d/2;for(const u of this.roomsData){if(u.id===a.id)continue;const h=u.w/2,m=u.d/2;Math.abs(u.cz-m-(a.cz+c))<5&&Math.min(a.cx+o+2,u.cx+h+2)-Math.max(a.cx-o-2,u.cx-h-2)>.5&&(a.neighbors.N=u.id),Math.abs(u.cz+m-(a.cz-c))<5&&Math.min(a.cx+o+2,u.cx+h+2)-Math.max(a.cx-o-2,u.cx-h-2)>.5&&(a.neighbors.S=u.id),Math.abs(u.cx-h-(a.cx+o))<5&&Math.min(a.cz+c+2,u.cz+m+2)-Math.max(a.cz-c-2,u.cz-m-2)>.5&&(a.neighbors.E=u.id),Math.abs(u.cx+h-(a.cx-o))<5&&Math.min(a.cz+c+2,u.cz+m+2)-Math.max(a.cz-c-2,u.cz-m-2)>.5&&(a.neighbors.W=u.id)}}}runAudit(){this.scanStartTime=performance.now(),this.issues=[],this.detectVoidExposures(),this.detectMissingWalls(),this.detectMissingCeilings(),this.detectDisconnectedRooms(),this.detectHallwayDeadEnds(),this.detectGeometrySeams(),this.detectNoPathToStarter(),this.detectZFighting(),this.detectMissingCollision();const t=performance.now()-this.scanStartTime,n=this.issues.filter(a=>a.type==="disconnected_room").map(a=>a.roomName);return{totalConnectedRooms:this.roomsData.length-n.length,disconnectedRooms:n,voidExposures:this.issues.filter(a=>a.type==="void_exposure"),missingWalls:this.issues.filter(a=>a.type==="missing_wall"),missingCeilings:this.issues.filter(a=>a.type==="missing_ceiling"),navigationBreaks:this.issues.filter(a=>a.type==="disconnected_room"||a.type==="no_path_to_starter"||a.type==="hallway_dead_end"),totalIssues:this.issues.length,scanDurationMs:t}}getIssues(){return[...this.issues]}getDebugData(){const t=this.issues.filter(o=>o.type==="void_exposure").map(o=>{var c;return{roomId:o.roomName,side:o.details.split(" ")[0]||"unknown",location:o.location,width:parseFloat(((c=o.details.match(/(\d+\.?\d*)u/))==null?void 0:c[1])||"0")}}),n=this.issues.filter(o=>o.type==="disconnected_room").map(o=>({roomId:o.roomName,location:o.location})),a=this.issues.filter(o=>o.type==="missing_ceiling").map(o=>({roomId:o.roomName,location:o.location}));return{rooms:this.roomsData,issues:this.issues,voidOpenings:t,disconnectedRooms:n,missingCeilings:a}}detectVoidExposures(){for(const t of this.roomsData){const n=this.roomGapsData[t.id]||[],a=t.w/2,o=t.d/2;for(const c of n)if(!this.hasNeighborAcrossGap(t,c)&&c.width>3){let h;if(c.side==="N"||c.side==="S"){const m=c.side==="N"?t.cz+o:t.cz-o;h=[t.cx+c.center,t.floorY+.1,m]}else h=[c.side==="E"?t.cx+a:t.cx-a,t.floorY+.1,t.cz+c.center];this.addIssue({id:`void_${t.id}_${c.side}_${c.center}`,type:"void_exposure",severity:c.width>10?"critical":"high",roomName:t.name,location:h,description:"Opening Exposes World Void",details:`${c.side} wall opening (${c.width.toFixed(2)}u) in ${t.name} leads to empty space`,isIntentional:this.isIntentionalVoidExposure(t,c)})}for(const[c,u]of Object.entries(t.hasWalls))if(!u&&!t.neighbors[c]){let h;switch(c){case"N":h=[t.cx,t.floorY+t.h/2,t.cz+o];break;case"S":h=[t.cx,t.floorY+t.h/2,t.cz-o];break;case"E":h=[t.cx+a,t.floorY+t.h/2,t.cz];break;case"W":h=[t.cx-a,t.floorY+t.h/2,t.cz];break}this.addIssue({id:`void_wall_${t.id}_${c}`,type:"void_exposure",severity:"high",roomName:t.name,location:h,description:"Missing Wall Exposes Void",details:`${c} wall missing in ${t.name}, exposes interior to void`,isIntentional:t.isConnector||t.isHallway})}}}detectMissingWalls(){for(const t of this.roomsData){this.roomGapsData[t.id];const n=t.w/2,a=t.d/2;for(const[o,c]of Object.entries(t.hasWalls))if(!c&&!t.neighbors[o]){const h=t.name.toLowerCase();if(!(h.includes("courtyard")||h.includes("exterior")||h.includes("outdoor"))&&!t.isConnector){let p;switch(o){case"N":p=[t.cx,t.floorY+t.h/2,t.cz+a];break;case"S":p=[t.cx,t.floorY+t.h/2,t.cz-a];break;case"E":p=[t.cx+n,t.floorY+t.h/2,t.cz];break;case"W":p=[t.cx-n,t.floorY+t.h/2,t.cz];break}this.addIssue({id:`missing_wall_${t.id}_${o}`,type:"missing_wall",severity:"medium",roomName:t.name,location:p,description:"Potentially Missing Wall",details:`${o} wall not defined in ${t.name} with no adjacent room`})}}}}detectMissingCeilings(){for(const t of this.roomsData){if(!t.hasCeiling){const n=[t.cx,t.floorY+t.h,t.cz];this.addIssue({id:`missing_ceiling_${t.id}`,type:"missing_ceiling",severity:"low",roomName:t.name,location:n,description:"Room Has Ceiling Openings",details:`${t.name} has ceiling holes exposing upper area`,isIntentional:!0})}if(t.h>20&&t.floorY<5&&!this.roomsData.find(a=>Math.abs(a.cx-t.cx)<t.w/2&&Math.abs(a.cz-t.cz)<t.d/2&&a.floorY>t.floorY+10)&&!t.isStaircase){const a=[t.cx,t.floorY+t.h,t.cz];this.addIssue({id:`tall_room_ceiling_${t.id}`,type:"missing_ceiling",severity:"medium",roomName:t.name,location:a,description:"Tall Room May Be Missing Ceiling",details:`${t.name} is ${t.h.toFixed(1)}u tall with no room above`})}}}detectDisconnectedRooms(){for(const t of this.roomsData){const n=Object.keys(t.neighbors).length,a=this.roomGapsData[t.id]||[];if(n===0&&a.length===0&&!t.isStaircase){const o=[t.cx,t.floorY+1,t.cz];this.addIssue({id:`disconnected_${t.id}`,type:"disconnected_room",severity:"critical",roomName:t.name,location:o,description:"Room Appears Disconnected",details:`${t.name} has no adjacent rooms and no doorways/gaps`})}}}detectHallwayDeadEnds(){for(const t of this.roomsData){if(!t.isHallway&&!t.isConnector)continue;const n=t.w/2,a=t.d/2;for(const[o,c]of Object.entries(t.neighbors))if(!c&&!(this.roomGapsData[t.id]||[]).some(m=>m.side===o)&&!t.hasWalls[o]){let m;switch(o){case"N":m=[t.cx,t.floorY+1,t.cz+a];break;case"S":m=[t.cx,t.floorY+1,t.cz-a];break;case"E":m=[t.cx+n,t.floorY+1,t.cz];break;case"W":m=[t.cx-n,t.floorY+1,t.cz];break}this.addIssue({id:`hallway_deadend_${t.id}_${o}`,type:"hallway_dead_end",severity:"high",roomName:t.name,location:m,description:"Hallway Terminates Into Empty Space",details:`${t.name} ${o} end has no connecting room or doorway`})}}}detectGeometrySeams(){for(let t=0;t<this.roomsData.length;t++){const n=this.roomsData[t];for(let a=t+1;a<this.roomsData.length;a++){const o=this.roomsData[a],c=Math.abs(n.h-o.h),u=Math.abs(n.floorY-o.floorY);if((c>1||u>.5)&&this.getSharedEdge(n,o)){const m=[(n.cx+o.cx)/2,Math.max(n.floorY,o.floorY)+1,(n.cz+o.cz)/2];this.addIssue({id:`seam_${n.id}_${o.id}`,type:"geometry_seam",severity:"medium",roomName:`${n.name}/${o.name}`,location:m,description:"Potential Geometry Seam",details:`Height/floor mismatch between ${n.name} and ${o.name} may create visible seam`})}}}}detectNoPathToStarter(){const t=this.roomsData.find(o=>o.id===this.starterRoomId);if(!t)return;const n=new Set,a=[this.starterRoomId];for(n.add(this.starterRoomId);a.length>0;){const o=a.shift(),c=this.roomsData.find(h=>h.id===o);if(!c)continue;for(const h of Object.values(c.neighbors))h&&!n.has(h)&&(n.add(h),a.push(h));const u=this.roomGapsData[o]||[];for(const h of u)for(const m of this.roomsData)m.id!==o&&this.roomsAreConnectedViaGap(c,m,h)&&(n.has(m.id)||(n.add(m.id),a.push(m.id)))}for(const o of this.roomsData)if(!n.has(o.id)&&o.id!==this.starterRoomId){const c=[o.cx,o.floorY+1,o.cz];this.addIssue({id:`no_path_${o.id}`,type:"no_path_to_starter",severity:"critical",roomName:o.name,location:c,description:"No Path From Starter Room",details:`${o.name} is not reachable from ${t.name}`})}}detectZFighting(){for(let n=0;n<this.roomsData.length;n++){const a=this.roomsData[n];for(let o=n+1;o<this.roomsData.length;o++){const c=this.roomsData[o],u=Math.min(a.cx+a.w/2,c.cx+c.w/2)-Math.max(a.cx-a.w/2,c.cx-c.w/2),h=Math.min(a.cz+a.d/2,c.cz+c.d/2)-Math.max(a.cz-a.d/2,c.cz-c.d/2);if(u>.5&&h>.5&&Math.abs(a.floorY-c.floorY)<2){const p=[(a.cx+c.cx)/2,(a.floorY+c.floorY)/2+1,(a.cz+c.cz)/2];this.addIssue({id:`zfight_${a.id}_${c.id}`,type:"z_fighting",severity:"high",roomName:`${a.name}/${c.name}`,location:p,description:"Overlapping Room Geometry",details:`${a.name} and ${c.name} overlap by ${u.toFixed(1)}x${h.toFixed(1)}u`})}}}}detectMissingCollision(){for(const t of this.roomsData){if(t.h<.5&&!t.isStaircase){const a=[t.cx,t.floorY+.1,t.cz];this.addIssue({id:`thin_floor_${t.id}`,type:"missing_collision",severity:"medium",roomName:t.name,location:a,description:"Thin Floor May Lack Collision",details:`${t.name} floor is only ${t.h.toFixed(2)}u thick`})}const n=this.roomGapsData[t.id]||[];for(const[a,o]of Object.entries(t.hasWalls))if(o){const c=n.filter(u=>u.side===a);if(c.length>1){c.sort((u,h)=>u.center-h.center);for(let u=0;u<c.length-1;u++){const h=c[u],m=c[u+1],p=m.center-m.width/2-(h.center+h.width/2);if(p>0&&p<.3){let _;const S=(h.center+h.width/2+m.center-m.width/2)/2;if(a==="N"||a==="S"){const g=a==="N"?t.cz+t.d/2:t.cz-t.d/2;_=[t.cx+S,t.floorY+1,g]}else _=[a==="E"?t.cx+t.w/2:t.cx-t.w/2,t.floorY+1,t.cz+S];this.addIssue({id:`thin_wall_${t.id}_${a}_${u}`,type:"missing_collision",severity:"low",roomName:t.name,location:_,description:"Narrow Wall Segment",details:`Wall segment between gaps on ${a} wall is only ${p.toFixed(2)}u wide`})}}}}}}hasNeighborAcrossGap(t,n){const a=t.w/2,o=t.d/2;let c,u,h;switch(n.side){case"N":c=t.cz+o,u=t.cx+n.center-n.width/2,h=t.cx+n.center+n.width/2;break;case"S":c=t.cz-o,u=t.cx+n.center-n.width/2,h=t.cx+n.center+n.width/2;break;case"E":c=t.cx+a,u=t.cz+n.center-n.width/2,h=t.cz+n.center+n.width/2;break;case"W":c=t.cx-a,u=t.cz+n.center-n.width/2,h=t.cz+n.center+n.width/2;break}const m=5,p=2;for(const _ of this.roomsData){if(_.id===t.id)continue;const S=_.w/2,g=_.d/2;let M=!1,E,R;switch(n.side){case"N":Math.abs(_.cz-g-c)<m&&(M=!0,E=_.cx-S-p,R=_.cx+S+p);break;case"S":Math.abs(_.cz+g-c)<m&&(M=!0,E=_.cx-S-p,R=_.cx+S+p);break;case"E":Math.abs(_.cx-S-c)<m&&(M=!0,E=_.cz-g-p,R=_.cz+g+p);break;case"W":Math.abs(_.cx+S-c)<m&&(M=!0,E=_.cz-g-p,R=_.cz+g+p);break}if(M&&Math.max(0,Math.min(h,R)-Math.max(u,E))>.5)return!0}return!1}roomsAreConnectedViaGap(t,n,a){const o=t.w/2,c=t.d/2,u=n.w/2,h=n.d/2;let m,p,_;switch(a.side){case"N":m=t.cz+c,p=t.cx+a.center-a.width/2,_=t.cx+a.center+a.width/2;break;case"S":m=t.cz-c,p=t.cx+a.center-a.width/2,_=t.cx+a.center+a.width/2;break;case"E":m=t.cx+o,p=t.cz+a.center-a.width/2,_=t.cz+a.center+a.width/2;break;case"W":m=t.cx-o,p=t.cz+a.center-a.width/2,_=t.cz+a.center+a.width/2;break}const S=5,g=2,M=u,E=h;let R=!1,y,x;switch(a.side){case"N":Math.abs(n.cz-E-m)<S&&(R=!0,y=n.cx-M-g,x=n.cx+M+g);break;case"S":Math.abs(n.cz+E-m)<S&&(R=!0,y=n.cx-M-g,x=n.cx+M+g);break;case"E":Math.abs(n.cx-M-m)<S&&(R=!0,y=n.cz-E-g,x=n.cz+E+g);break;case"W":Math.abs(n.cx+M-m)<S&&(R=!0,y=n.cz-E-g,x=n.cz+E+g);break}return R?Math.max(0,Math.min(_,x)-Math.max(p,y))>.5:!1}isIntentionalVoidExposure(t,n){const a=t.name.toLowerCase();return!!(a.includes("courtyard")||a.includes("exterior")||a.includes("outdoor")||a.includes("garden")||t.isConnector||t.isHallway||t.isStaircase)}getSharedEdge(t,n){const a=t.w/2,o=t.d/2,c=n.w/2,u=n.d/2,h=5;return Math.abs(n.cz-u-(t.cz+o))<h&&Math.min(t.cx+a,n.cx+c)-Math.max(t.cx-a,n.cx-c)>2?"N":Math.abs(n.cz+u-(t.cz-o))<h&&Math.min(t.cx+a,n.cx+c)-Math.max(t.cx-a,n.cx-c)>2?"S":Math.abs(n.cx-c-(t.cx+a))<h&&Math.min(t.cz+o,n.cz+u)-Math.max(t.cz-o,n.cz-u)>2?"E":Math.abs(n.cx+c-(t.cx-a))<h&&Math.min(t.cz+o,n.cz+u)-Math.max(t.cz-o,n.cz-u)>2?"W":null}calculateDistance(t,n,a,o){return Math.sqrt(Math.pow(a-t,2)+Math.pow(o-n,2))}findNearestConnectedRoom(t,n){let a=null;for(const o of this.roomsData){if(o.id===t)continue;const c=this.calculateDistance(n[0],n[2],o.cx,o.cz);(!a||c<a.distance)&&(a={roomId:o.id,name:o.name,distance:c})}return a}generateReasoning(t,n,a){switch(t){case"void_exposure":return a?`Gap on ${a.side} wall (${a.width.toFixed(1)}u wide) has no adjacent room within detection tolerance. Pathfinding graph cannot establish valid route across this opening.`:"Missing wall on specified side creates direct exposure to world void with no connecting geometry.";case"missing_wall":return"Wall not defined in room data and no adjacent room detected within tolerance. This creates an unsealed boundary.";case"missing_ceiling":return"Room lacks ceiling geometry definition or has excessive height without upper floor coverage.";case"disconnected_room":return"Room has zero neighbors and zero gaps/doorways. No pathfinding connections exist to any other room.";case"hallway_dead_end":return"Hallway terminates without connecting room, gap, or wall. Creates navigation dead-end into void.";case"geometry_seam":return"Adjacent rooms have mismatched floor heights or room heights, creating visible seam where geometries meet.";case"no_path_to_starter":return"BFS pathfinding from starter room cannot reach this room. All possible connection paths are blocked or missing.";case"z_fighting":return"Room geometry overlaps significantly with another room at similar height, causing rendering artifacts.";case"missing_collision":return"Geometry segment is too thin (<0.3u) to reliably generate collision mesh, or floor thickness is insufficient.";default:return"Issue detected during automated connectivity scan."}}generatePotentialCauses(t){switch(t){case"void_exposure":return["Missing floor tile","Collision wall blocking passage","Gap between meshes not bridged","Doorway not registered in gap data","Intentional exterior opening"];case"missing_wall":return["Wall definition omitted in room config","Adjacent room positioned outside detection tolerance","Intentional open-air design","Exterior boundary wall missing"];case"missing_ceiling":return["Ceiling geometry not generated","Multi-level room design (intentional)","Trapdoor or skylight opening","Tall room without upper floor"];case"disconnected_room":return["Room placed in isolation","Missing gap/doorway definitions","Neighbor rooms positioned incorrectly","Standalone structure (may be intentional)"];case"hallway_dead_end":return["Hallway extension incomplete","Missing connecting room","Gap definition omitted","Intentional cul-de-sac design"];case"geometry_seam":return["Floor height mismatch between rooms","Room height difference creates step","Transition piece missing","Different architectural styles meeting"];case"no_path_to_starter":return["Missing intermediate connection rooms","Gap chain broken","One-way passage only","Secret or hidden room"];case"z_fighting":return["Rooms overlap in XZ plane","Duplicate room definitions","Positioning error in map data","Intentional multi-layer design"];case"missing_collision":return["Thin wall segment between gaps","Floor thickness below threshold","Narrow pillar or support","Decorative element without collision"];default:return["Unknown cause"]}}determineConfidence(t,n,a){return a?"LOW":t==="disconnected_room"||t==="no_path_to_starter"||t==="void_exposure"&&!n.isConnector&&!n.isHallway?"HIGH":"MEDIUM"}addIssue(t){if(this.issues.find(a=>a.id===t.id))return;const n=this.roomsData.find(a=>a.id===t.roomName||a.name===t.roomName);if(n){t.roomBounds={x:n.cx,z:n.cz,w:n.w,d:n.d,h:n.h,floorY:n.floorY};const a=this.findNearestConnectedRoom(n.id,t.location);a&&(t.nearestConnectedRoom=a.name,t.distanceToNearestRoom=a.distance),t.reasoning=this.generateReasoning(t.type,n),t.potentialCauses=this.generatePotentialCauses(t.type),t.confidence=this.determineConfidence(t.type,n,t.isIntentional)}this.issues.push(t)}}let dh=null;const ox=()=>(dh||(dh=new sw),dh);typeof window<"u"&&(window.runConnectivityAudit=(r,t,n)=>{const a=ox();if(!r||!t)return console.error("[ConnectivityAudit] Please provide rooms and gaps data, or call auditor.initialize() first"),null;a.initialize(r,t,n);const o=a.runAudit(),c=a.getIssues();return console.log("=== MAP CONNECTIVITY AUDIT REPORT ==="),console.log(`Total Rooms Scanned: ${a.roomsData.length}`),console.log(`Total Connected Rooms: ${o.totalConnectedRooms}`),console.log(`Disconnected Rooms: ${o.disconnectedRooms.length}`),o.disconnectedRooms.length>0&&o.disconnectedRooms.forEach(u=>console.log(`  - ${u}`)),console.log(`Void Exposures: ${o.voidExposures.length}`),console.log(`Missing Walls: ${o.missingWalls.length}`),console.log(`Missing Ceilings: ${o.missingCeilings.length}`),console.log(`Navigation Breaks: ${o.navigationBreaks.length}`),console.log(`Total Issues: ${o.totalIssues}`),console.log(`Scan Duration: ${o.scanDurationMs.toFixed(2)}ms`),console.log(`=====================================
`),c.length>0&&(console.log(`=== DETAILED ISSUE REPORTS ===
`),c.forEach((u,h)=>{var m;console.log(`--- Issue #${h+1} ---`),console.log(`[${u.type.toUpperCase()}]`),console.log(`Room: ${u.roomName}`),console.log(`Location: [${u.location[0].toFixed(1)}, ${u.location[1].toFixed(1)}, ${u.location[2].toFixed(1)}]`),console.log(`Severity: ${u.severity.toUpperCase()}`),console.log(`Description: ${u.description}`),console.log(`Details: ${u.details}`),u.roomBounds&&console.log(`Room Bounds: { x: ${u.roomBounds.x}, z: ${u.roomBounds.z}, w: ${u.roomBounds.w}, d: ${u.roomBounds.d}, h: ${u.roomBounds.h}, floorY: ${u.roomBounds.floorY} }`),u.nearestConnectedRoom&&(console.log(`Nearest Room: ${u.nearestConnectedRoom}`),console.log(`Distance: ${(m=u.distanceToNearestRoom)==null?void 0:m.toFixed(2)} units`)),u.reasoning&&console.log(`Reason: ${u.reasoning}`),u.potentialCauses&&u.potentialCauses.length>0&&(console.log("Potential Causes:"),u.potentialCauses.forEach(p=>console.log(`  • ${p}`))),u.confidence&&console.log(`Confidence: ${u.confidence}`),u.isIntentional!==void 0&&console.log(`Intentional: ${u.isIntentional?"YES":"NO"}`),console.log("")})),console.log("====================================="),console.log("Use teleportToAuditIssue(index) to navigate to specific issues."),console.log("Enable DEBUG_CONNECTIVITY visualization with: window.DEBUG_CONNECTIVITY = true"),o});function rw(r,t,n){let a=!1,o=null,c=null,u=null;new fu({color:16776960,transparent:!0,opacity:.4,depthTest:!0,depthWrite:!1}),new RM({color:16776960,linewidth:2});function h(x){const C={};let L=x;for(;L;){if(L.userData&&(L.userData.roomId&&(C.roomId=L.userData.roomId),L.userData.wallId&&(C.wallId=L.userData.wallId),L.userData.floorId&&(C.floorId=L.userData.floorId),L.userData.type)){const U=L.userData.type;U==="wall"&&!C.wallId?C.wallId=`${C.roomId||"unknown"}_${L.userData.side||"unknown"}`:U==="floor"&&!C.floorId?C.floorId=`${C.roomId||"unknown"}_floor`:U==="ceiling"&&!C.floorId&&(C.floorId=`${C.roomId||"unknown"}_ceiling`)}L=L.parent}return C}function m(x,C){const L=x.geometry;if(!L.attributes.position||!L.attributes.normal)return!1;const U=L.attributes.position.array,V=L.attributes.normal.array,N=new $;x.getWorldPosition(N);let P=0,T=0;for(let F=0;F<Math.min(U.length,180);F+=9){const Z=U[F],H=U[F+1],K=U[F+2],dt=V[F],mt=V[F+1],X=V[F+2],O=new $(Z,H,K);O.applyMatrix4(x.matrixWorld);const B=new $(dt,mt,X);B.transformDirection(x.matrixWorld).normalize();const st=N,vt=new $().subVectors(st,O).normalize();B.dot(vt)>0&&P++,T++}return T>0&&P/T>.5}function p(x,C){var mt;const L=x.geometry,U=x.material,V=Array.isArray(U)?U[0]:U,N=new tr().setFromObject(x),P=new $,T=new oa,F=new $;x.getWorldPosition(P),x.getWorldRotation(T),x.getWorldScale(F);let Z=1;if(V){const X=V;X.opacity!==void 0&&(Z=X.opacity),X.transparent&&X.opacity<1&&(Z=X.opacity)}const H=x.userData.hasCollision!==!1&&x.name.includes("collider")||x.userData.isCollider===!0,K=h(x),dt=m(x);return{meshName:x.name||"unnamed",meshId:x.id.toString(),roomId:K.roomId,wallId:K.wallId,floorId:K.floorId,distance:C,hasCollision:H,isVisible:x.visible,materialOpacity:Z,normalsFaceInward:dt,bounds:N,position:P,rotation:T,scale:F,geometryType:L.type,materialType:(V==null?void 0:V.type)||"unknown",vertexCount:((mt=L.attributes.position)==null?void 0:mt.count)||0,userData:{...x.userData}}}function _(x,C){{u=null;return}}function S(){a=!0,console.log("[GeometryInspector] Enabled - cast rays from camera to detect rendered meshes")}function g(){a=!1,_(),console.log("[GeometryInspector] Disabled")}function M(){a?g():S()}function E(){return a}function R(){return u}function y(x=20){console.log(`
=== GEOMETRY INSPECTOR: All Meshes Within ${x} Units ===`),console.log(`Player Position: (${t.position.x.toFixed(2)}, ${t.position.y.toFixed(2)}, ${t.position.z.toFixed(2)})`),console.log("=".repeat(70));const C=t.position,L=[];r.traverse(U=>{if(U instanceof vn&&U!==o&&U!==c&&!U.name.includes("debug")&&!U.name.includes("highlight")){const V=new $;U.getWorldPosition(V);const N=V.distanceTo(C);if(N<=x){const P=p(U,N);L.push({mesh:U,distance:N,info:P})}}}),L.sort((U,V)=>U.distance-V.distance),console.log(`Found ${L.length} meshes within ${x} units:
`),L.forEach(({mesh:U,distance:V,info:N},P)=>{console.log(`
--- Mesh #${P+1} ---`),console.log(`  Name: "${N.meshName}" (ID: ${N.meshId})`),console.log(`  Distance: ${V.toFixed(2)} units`),console.log(`  Room ID: ${N.roomId||"N/A"}`),console.log(`  Wall ID: ${N.wallId||"N/A"}`),console.log(`  Floor ID: ${N.floorId||"N/A"}`),console.log(`  Position: (${N.position.x.toFixed(2)}, ${N.position.y.toFixed(2)}, ${N.position.z.toFixed(2)})`),console.log(`  Bounds Min: (${N.bounds.min.x.toFixed(2)}, ${N.bounds.min.y.toFixed(2)}, ${N.bounds.min.z.toFixed(2)})`),console.log(`  Bounds Max: (${N.bounds.max.x.toFixed(2)}, ${N.bounds.max.y.toFixed(2)}, ${N.bounds.max.z.toFixed(2)})`),console.log(`  Has Collision: ${N.hasCollision}`),console.log(`  Is Visible: ${N.isVisible}`),console.log(`  Material Opacity: ${N.materialOpacity.toFixed(2)} ${N.materialOpacity<1?"(TRANSPARENT!)":""}`),console.log(`  Normals Face Inward: ${N.normalsFaceInward}`),console.log(`  Geometry: ${N.geometryType} (${N.vertexCount} vertices)`),console.log(`  Material: ${N.materialType}`),Object.keys(N.userData).length>0&&console.log("  UserData:",JSON.stringify(N.userData,null,2))}),console.log(`
`+"=".repeat(70)),console.log(`Total: ${L.length} meshes`)}return window.inspectGeometry=()=>{y(20)},{enable:S,disable:g,toggle:M,isActive:E,getInspectedMesh:R,inspectAllMeshes:y}}const hh={},ph=r=>{if(hh[r])return hh[r];const t=document.createElement("canvas");t.width=512,t.height=512;const n=t.getContext("2d");if(r==="wood_floor"){n.fillStyle="#452c1e",n.fillRect(0,0,512,512);const o=512/8;for(let c=0;c<8;c++){n.fillStyle=c%2===0?"#4e3425":"#3c2518",c%3===0&&(n.fillStyle="#432a1d"),n.fillRect(0,c*o,512,o),n.strokeStyle="#29170e",n.lineWidth=1;for(let h=0;h<5;h++)n.beginPath(),n.moveTo(0,c*o+Math.random()*o),n.quadraticCurveTo(256,c*o+Math.random()*o*2-o/2,512,c*o+Math.random()*o),n.stroke();const u=c%2===0?[150,380]:[220,440];n.fillStyle="#1e110a",u.forEach(h=>{n.fillRect(h,c*o,2,o)}),n.strokeStyle="#1a0d06",n.lineWidth=2,n.beginPath(),n.moveTo(0,c*o),n.lineTo(512,c*o),n.stroke()}}else if(r==="ceiling_tiles"){n.fillStyle="#dcd5ca",n.fillRect(0,0,512,512);for(let c=0;c<600;c++)n.fillStyle=Math.random()>.5?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.05)",n.fillRect(Math.random()*512,Math.random()*512,2,2);const o=256;for(let c=0;c<2;c++)for(let u=0;u<2;u++){const h=u*o,m=c*o;n.fillStyle="rgba(115, 87, 59, 0.15)",n.strokeStyle="rgba(92, 70, 48, 0.35)",n.lineWidth=1.5;for(let S=0;S<4;S++){const g=h+30+Math.random()*(o-60),M=m+30+Math.random()*(o-60),E=25+Math.random()*45;n.beginPath(),n.arc(g,M,E,0,Math.PI*2),n.fill(),n.beginPath(),n.arc(g,M,E+4,0,Math.PI*2),n.stroke()}n.fillStyle="rgba(40, 45, 35, 0.65)";for(let S=0;S<35;S++)n.fillRect(h+Math.random()*o,m+Math.random()*o,1.5,1.5);n.strokeStyle="rgba(50,50,50,0.25)",n.lineWidth=1,n.beginPath();let p=h+20,_=m+20;n.moveTo(p,_);for(let S=0;S<10;S++)p+=(Math.random()-.5)*15,_+=Math.random()*20,n.lineTo(p,_);n.stroke()}n.strokeStyle="#2d2e33",n.lineWidth=6,n.beginPath(),n.moveTo(0,0),n.lineTo(512,0),n.moveTo(0,256),n.lineTo(512,256),n.moveTo(0,512),n.lineTo(512,512),n.moveTo(0,0),n.lineTo(0,512),n.moveTo(256,0),n.lineTo(256,512),n.moveTo(512,0),n.lineTo(512,512),n.stroke(),n.fillStyle="rgba(92, 49, 14, 0.55)";for(let c=0;c<20;c++)n.fillRect(Math.random()*512,253+Math.random()*6,Math.random()*25,Math.random()*3),n.fillRect(253+Math.random()*6,Math.random()*512,Math.random()*3,Math.random()*25)}else if(r==="wall_tiles"){n.fillStyle="#6d8a6b",n.fillRect(0,0,512,512);const o=8,c=64;for(let u=0;u<o;u++)for(let h=0;h<o;h++){const m=h*c,p=u*c;if(n.fillStyle=(u+h)%2===0?"#728e6f":"#688566",u*h%5===0&&(n.fillStyle="#5c7859"),n.fillRect(m+1,p+1,c-2,c-2),n.strokeStyle="rgba(255,255,255,0.06)",n.strokeRect(m+2,p+2,c-4,c-4),Math.random()<.15&&(n.strokeStyle="rgba(20, 25, 20, 0.55)",n.lineWidth=1,n.beginPath(),n.moveTo(m+Math.random()*c,p+Math.random()*c),n.lineTo(m+Math.random()*c,p+Math.random()*c),n.stroke()),u===2&&h===4||u===6&&h===1||u===4&&h===6){n.fillStyle="#222520",n.fillRect(m+2,p+2,c-4,c-4),n.fillStyle="#444c41";for(let _=0;_<10;_++)n.fillRect(m+Math.random()*c,p+Math.random()*c,Math.random()*6,Math.random()*6)}}n.strokeStyle="#252924",n.lineWidth=2,n.beginPath();for(let u=0;u<=o;u++)n.moveTo(0,u*c),n.lineTo(512,u*c),n.moveTo(u*c,0),n.lineTo(u*c,512);n.stroke();for(let u=0;u<12;u++){const h=Math.random()*512,m=Math.random()*80,p=150+Math.random()*250,_=n.createLinearGradient(h,m,h,m+p);_.addColorStop(0,"rgba(21, 26, 19, 0.55)"),_.addColorStop(.3,"rgba(15, 20, 14, 0.35)"),_.addColorStop(1,"rgba(15, 20, 14, 0.0)"),n.fillStyle=_,n.fillRect(h-3,m,6,p)}n.strokeStyle="rgba(224, 215, 200, 0.35)",n.lineWidth=1.5,n.font="22px Arial",n.strokeText("WASH ME",80,200),n.strokeText("CLASS OF '95",280,390)}const a=new Yv(t);return a.wrapS=ll,a.wrapT=ll,hh[r]=a,a},ow=(r,t,n)=>{const a=r.stairDirection||(r.w>r.d?"W_E":"N_S"),o=r.climbHeight??r.h;if(a==="W_E"){const c=r.cx-r.w/2,u=Math.max(0,Math.min(1,(t-c)/r.w));return r.floorY+u*o}else if(a==="E_W"){const c=r.cx-r.w/2,u=Math.max(0,Math.min(1,(t-c)/r.w));return r.floorY+(1-u)*o}else if(a==="S_N"){const c=r.cz-r.d/2,u=Math.max(0,Math.min(1,(n-c)/r.d));return r.floorY+(1-u)*o}else{const c=r.cz-r.d/2,u=Math.max(0,Math.min(1,(n-c)/r.d));return r.floorY+u*o}},Li=[{id:"starter",name:"Starter Classroom",cx:17.5,cz:-40,w:75,d:60,floorY:0,h:10,color:"#3d5c3a",floorTexture:"wood_floor.png"},{id:"hallway",name:"Main Hallway",cx:20,cz:-3,w:80,d:14,floorY:0,h:10,color:"#323247"},{id:"science_lab",name:"Science Lab",cx:5,cz:26.5,w:30,d:45,floorY:0,h:10,color:"#4a3720"},{id:"library",name:"Library Shelf Area",cx:40,cz:26.5,w:36,d:45,floorY:0,h:10,color:"#453c1b",floorTexture:"wood_floor.png"},{id:"stairwell",name:"Stairwell Access",cx:68,cz:-3,w:16,d:10,floorY:0,h:22,climbHeight:11,color:"#542828",isStaircase:!0,stairDirection:"W_E"},{id:"gym",name:"Gymnasium (Floor 2)",cx:144,cz:15,w:80,d:60,floorY:11,h:18,color:"#20434f",carvedFloors:[]},{id:"cafeteria",name:"Cafeteria Wing",cx:-50,cz:-3,w:60,d:50,floorY:0,h:10,color:"#2a261f"},{id:"courtyard",name:"Overgrown Courtyard",cx:-63,cz:57,w:90,d:70,floorY:0,h:15,color:"#162e1a",disabledCeiling:!0,trapdoors:[{cx:-42,cz:-48.5,w:8,d:8},{cx:-42,cz:-31,w:12,d:6}]},{id:"underground_tunnel",name:"Utility Tunnel",cx:-103,cz:63.4,w:12,d:80,floorY:-12,h:9,color:"#111412",ceilingHoles:[{cx:-42,cz:-48.5,w:8,d:8},{cx:-42,cz:-31,w:12,d:6}]},{id:"the_vault",name:"Fallout Shelter Vault",cx:-103,cz:123.4,w:60,d:40,floorY:-12,h:9,color:"#282b29"},{id:"upper_hallway",name:"2nd Floor Hallway",cx:90,cz:-3,w:28,d:14,floorY:11,h:10,color:"#2a2d36",floorTexture:"wood_floor.png"},{id:"principal_office",name:"Principal's Office",cx:90,cz:127,w:56,d:56,floorY:11,h:10,color:"#362a2a"},{id:"upper_hallway_2",name:"2nd floor hallway 2",cx:90,cz:51.5,w:18,d:95,floorY:11,h:10,color:"#2a2d36",floorTexture:"wood_floor.png"},{id:"security_room",name:"Master Security & Breaker Room",cx:66,cz:51.5,w:30,d:35,floorY:11,h:10,color:"#1a212b"},{id:"upper_hallway_north",name:"2nd Floor North Connector",cx:150,cz:92,w:102,d:14,floorY:11,h:10,color:"#2a2d36",floorTexture:"wood_floor.png"},{id:"gym_north_hallway",name:"Gym North Connector",cx:144,cz:65,w:18,d:40,floorY:11,h:10,color:"#2a2d36",floorTexture:"wood_floor.png"},{id:"nurses_office",name:"Nurse's Office",cx:164,cz:112,w:32,d:26,floorY:11,h:10,color:"#1f3d3c",floorTexture:"wood_floor.png"},{id:"nurses_office_backroom",name:"Nurse's Office Backroom",cx:164,cz:135,w:24,d:20,floorY:11,h:10,color:"#19302f",floorTexture:"wood_floor.png"},{id:"stairwell_2",name:"Secondary Stairwell",cx:90,cz:-22,w:16,d:24,floorY:0,h:22,climbHeight:11,color:"#542828",isStaircase:!0,stairDirection:"S_N"},{id:"lower_hallway_south",name:"South Wing Hallway",cx:90,cz:-76.5,w:14,d:85,floorY:0,h:10,color:"#2a2d36",floorTexture:"wood_floor.png"},{id:"main_office",name:"Main Office",cx:90,cz:-139,w:50,d:40,floorY:0,h:10,color:"#1e293b",floorTexture:"wood_floor.png"}],vs={starter:[{side:"N",center:-17.5,width:6}],hallway:[{side:"S",center:-20,width:6},{side:"N",center:-15,width:6},{side:"N",center:20,width:6},{side:"E",center:0,width:6},{side:"W",center:0,width:14}],science_lab:[{side:"S",center:0,width:6}],library:[{side:"S",center:0,width:6}],stairwell:[{side:"W",center:0,width:6},{side:"E",center:0,width:10}],gym:[{side:"W",center:-18,width:10},{side:"S",center:0,width:10},{side:"N",center:0,width:10}],cafeteria:[{side:"E",center:0,width:14},{side:"N",center:0,width:12}],courtyard:[{side:"S",center:13,width:12}],boiler_room:[{side:"N",center:0,width:12}],underground_tunnel:[{side:"S",center:0,width:12},{side:"N",center:0,width:12}],the_vault:[{side:"S",center:0,width:12}],upper_hallway:[{side:"W",center:0,width:10},{side:"E",center:0,width:10},{side:"S",center:0,width:6},{side:"N",center:0,width:10}],principal_office:[{side:"S",center:0,width:8}],upper_hallway_2:[{side:"S",center:0,width:10},{side:"W",center:0,width:8},{side:"E",center:40.5,width:10},{side:"N",center:0,width:8}],security_room:[{side:"E",center:0,width:8}],upper_hallway_north:[{side:"W",center:0,width:10},{side:"N",center:12,width:10},{side:"N",center:14,width:6},{side:"S",center:-6,width:10}],gym_north_hallway:[{side:"N",center:0,width:10},{side:"S",center:0,width:10}],nurses_office:[{side:"S",center:0,width:6},{side:"N",center:0,width:6}],nurses_office_backroom:[{side:"S",center:0,width:6}],stairwell_2:[{side:"N",center:0,width:6},{side:"S",center:0,width:6}],lower_hallway_south:[{side:"N",center:0,width:6},{side:"S",center:0,width:6}],main_office:[{side:"N",center:0,width:6}]},yv=[{roomId:"starter",side:"N",gapIndex:0,cost:750},{roomId:"hallway",side:"S",gapIndex:0,cost:750},{roomId:"hallway",side:"N",gapIndex:0,cost:750},{roomId:"hallway",side:"N",gapIndex:1,cost:750},{roomId:"hallway",side:"E",gapIndex:0,cost:750},{roomId:"hallway",side:"W",gapIndex:0,cost:1e3},{roomId:"science_lab",side:"S",gapIndex:0,cost:1e3},{roomId:"library",side:"S",gapIndex:0,cost:1e3},{roomId:"stairwell",side:"W",gapIndex:0,cost:750},{roomId:"stairwell",side:"E",gapIndex:0,cost:750},{roomId:"gym",side:"W",gapIndex:0,cost:1250},{roomId:"gym",side:"S",gapIndex:0,cost:1e3},{roomId:"gym",side:"N",gapIndex:0,cost:1e3},{roomId:"cafeteria",side:"E",gapIndex:0,cost:1250},{roomId:"cafeteria",side:"N",gapIndex:0,cost:1e3},{roomId:"courtyard",side:"S",gapIndex:0,cost:1250},{roomId:"underground_tunnel",side:"S",gapIndex:0,cost:1e3},{roomId:"underground_tunnel",side:"N",gapIndex:0,cost:1e3},{roomId:"the_vault",side:"S",gapIndex:0,cost:1500},{roomId:"upper_hallway",side:"W",gapIndex:0,cost:750},{roomId:"upper_hallway",side:"E",gapIndex:0,cost:750},{roomId:"upper_hallway",side:"S",gapIndex:0,cost:750},{roomId:"upper_hallway",side:"N",gapIndex:0,cost:750},{roomId:"principal_office",side:"S",gapIndex:0,cost:1e3},{roomId:"upper_hallway_2",side:"S",gapIndex:0,cost:750},{roomId:"upper_hallway_2",side:"W",gapIndex:0,cost:750},{roomId:"upper_hallway_2",side:"E",gapIndex:0,cost:750},{roomId:"upper_hallway_2",side:"N",gapIndex:0,cost:750},{roomId:"security_room",side:"E",gapIndex:0,cost:1e3},{roomId:"upper_hallway_north",side:"W",gapIndex:0,cost:750},{roomId:"upper_hallway_north",side:"N",gapIndex:0,cost:750},{roomId:"upper_hallway_north",side:"N",gapIndex:1,cost:750},{roomId:"upper_hallway_north",side:"S",gapIndex:0,cost:750},{roomId:"gym_north_hallway",side:"N",gapIndex:0,cost:750},{roomId:"gym_north_hallway",side:"S",gapIndex:0,cost:750},{roomId:"nurses_office",side:"S",gapIndex:0,cost:750},{roomId:"nurses_office",side:"N",gapIndex:0,cost:750},{roomId:"nurses_office_backroom",side:"S",gapIndex:0,cost:750},{roomId:"stairwell_2",side:"N",gapIndex:0,cost:750},{roomId:"stairwell_2",side:"S",gapIndex:0,cost:750},{roomId:"lower_hallway_south",side:"N",gapIndex:0,cost:750},{roomId:"lower_hallway_south",side:"S",gapIndex:0,cost:750},{roomId:"main_office",side:"N",gapIndex:0,cost:1e3}],lw=[{id:"mystery_box_spawn",type:"interactable",roomId:"starter",cx:15,cz:-25,w:4,d:2,h:3,color:"#8b5a2b"},{id:"main_power_switch",type:"interactable",roomId:"security_room",cx:54,cz:51.5,w:4,d:1,h:4,color:"#8b0000"}],rl={wallThickness:.4,ceilingThickness:.15,doorHeight:7.5,floorThickness:.2},cw=rl.doorHeight,qc=4.5,uw=1;function fw(){const r=ce.useRef(null),t=ce.useRef(null),n=ce.useRef(Math.PI),a=ce.useRef(0),o=ce.useRef(new $(0,qc,-30)),c=ce.useRef(0),u=ce.useRef({}),h=ce.useRef(!0),m=ce.useRef(!1),[p,_]=ce.useState(!1),[S,g]=ce.useState(""),[M,E]=ce.useState(!1),[R,y]=ce.useState(!1),[x,C]=ce.useState([]),[L,U]=ce.useState(-1),V=ce.useRef($A()),[N,P]=ce.useState(!1),[T,F]=ce.useState([]),[Z,H]=ce.useState(-1),K=ce.useRef(aw()),[dt,mt]=ce.useState(!1),[X,O]=ce.useState([]),[B,st]=ce.useState(-1),vt=ce.useRef(ox()),[At,I]=ce.useState(null),[Q,Mt]=ce.useState(!1),Rt=ce.useRef(null),[Nt,lt]=ce.useState(null),[Et,wt]=ce.useState(!1);return ce.useEffect(()=>{const bt=t.current,Gt=r.current;if(!bt||!Gt)return;YA();const Pt=ol().on("purchaseAttempt",oe=>{console.log("[App] Door purchase attempt failed:",oe.doorName),wt(!0),setTimeout(()=>wt(!1),2e3)});return()=>{Pt()}},[]),ce.useEffect(()=>(window.runConnectivityAudit=()=>{const bt=vt.current;bt.initialize(Li,vs,"starter");const Gt=bt.runAudit(),Yt=bt.getIssues();return O(Yt),I(Gt),mt(!0),st(-1),console.log("=== MAP CONNECTIVITY AUDIT REPORT ==="),console.log(`Total Rooms Scanned: ${Li.length}`),console.log(`Total Connected Rooms: ${Gt.totalConnectedRooms}`),console.log(`Disconnected Rooms: ${Gt.disconnectedRooms.length}`),Gt.disconnectedRooms.length>0&&Gt.disconnectedRooms.forEach(Pt=>console.log(`  - ${Pt}`)),console.log(`Void Exposures: ${Gt.voidExposures.length}`),console.log(`Missing Walls: ${Gt.missingWalls.length}`),console.log(`Missing Ceilings: ${Gt.missingCeilings.length}`),console.log(`Navigation Breaks: ${Gt.navigationBreaks.length}`),console.log(`Total Issues: ${Gt.totalIssues}`),console.log(`Scan Duration: ${Gt.scanDurationMs.toFixed(2)}ms`),console.log(`=====================================
`),Yt.length>0&&(console.log(`=== DETAILED ISSUE REPORTS ===
`),Yt.forEach((Pt,oe)=>{var Me;console.log(`--- Issue #${oe+1} ---`),console.log(`[${Pt.type.toUpperCase()}]`),console.log(`Room: ${Pt.roomName}`),console.log(`Location: [${Pt.location[0].toFixed(1)}, ${Pt.location[1].toFixed(1)}, ${Pt.location[2].toFixed(1)}]`),console.log(`Severity: ${Pt.severity.toUpperCase()}`),console.log(`Description: ${Pt.description}`),console.log(`Details: ${Pt.details}`),Pt.roomBounds&&console.log(`Room Bounds: { x: ${Pt.roomBounds.x}, z: ${Pt.roomBounds.z}, w: ${Pt.roomBounds.w}, d: ${Pt.roomBounds.d}, h: ${Pt.roomBounds.h}, floorY: ${Pt.roomBounds.floorY} }`),Pt.nearestConnectedRoom&&(console.log(`Nearest Room: ${Pt.nearestConnectedRoom}`),console.log(`Distance: ${(Me=Pt.distanceToNearestRoom)==null?void 0:Me.toFixed(2)} units`)),Pt.reasoning&&console.log(`Reason: ${Pt.reasoning}`),Pt.potentialCauses&&Pt.potentialCauses.length>0&&(console.log("Potential Causes:"),Pt.potentialCauses.forEach(De=>console.log(`  • ${De}`))),Pt.confidence&&console.log(`Confidence: ${Pt.confidence}`),Pt.isIntentional!==void 0&&console.log(`Intentional: ${Pt.isIntentional?"YES":"NO"}`),console.log("")})),console.log("====================================="),console.log("Use teleportToAuditIssue(index) to navigate to specific issues."),console.log("Enable DEBUG_CONNECTIVITY visualization with: window.DEBUG_CONNECTIVITY = true"),Gt},window.teleportToAuditIssue=bt=>{const Gt=vt.current.getIssues();if(Gt[bt]){const Yt=Gt[bt];o.current.set(Yt.location[0],Yt.location[1]+2,Yt.location[2]+5),n.current=Math.PI,noclip.current=!0,st(bt),mt(!0),console.log(`Teleported to issue #${bt+1}: ${Yt.type} in ${Yt.roomName}`)}else console.error(`Issue index ${bt} not found. Total issues: ${Gt.length}`)},()=>{delete window.runConnectivityAudit,delete window.teleportToAuditIssue}),[]),ce.useEffect(()=>{console.log("DOOR EFFECT RUNNING");const bt=t.current,Gt=r.current;if(!bt||!Gt)return;const Yt=new GA({canvas:bt,antialias:!0});Yt.setPixelRatio(window.devicePixelRatio),Yt.shadowMap.enabled=!0,Yt.shadowMap.type=Mv;const Pt=new gM;Pt.background=new Oe(657930),Pt.fog=new Mp(657930,20,120);const oe=new Mi(75,Gt.clientWidth/Gt.clientHeight,.1,500);oe.position.copy(o.current);const Me=jA("default",Pt),De=rw(Pt,oe);Rt.current=De,window.toggleGeometryInspector=()=>{De.toggle(),Mt(De.isActive()),console.log("[GeometryInspector] Toggled:",De.isActive()?"ON":"OFF")},window.enableGeometryInspector=()=>{De.enable(),Mt(!0)},window.disableGeometryInspector=()=>{De.disable(),Mt(!1)},Pt.add(new HM(2236962,1));const _e={starter:3820842,hallway:1710638,science_lab:2760720,library:2760720,gym:1056816,cafeteria:1709328,courtyard:662026,underground_tunnel:329736,the_vault:658442,stairwell:1705992,stairwell_2:1705992,upper_hallway:1315872,upper_hallway_2:1315872,upper_hallway_north:1315872,principal_office:1708048,security_room:526864,nurses_office:1712160,nurses_office_backroom:1185816,gym_north_hallway:1054752,lower_hallway_south:1315872,main_office:922912};Li.forEach(z=>{const tt=new GM(_e[z.id]??2236962,2.5,Math.max(z.w,z.d)*1.2);tt.position.set(z.cx,z.floorY+z.h*.75,z.cz),Pt.add(tt)});const Xe=[],qe=new Map,Ln={starter_N_0:"starter_classroom_door",science_lab_S_0:"hallway_science_lab_door",library_S_0:"hallway_library_door",cafeteria_E_0:"hallway_cafeteria_door"};yv.forEach((z,tt)=>{const ht=(vs[z.roomId]||[])[z.gapIndex];if(!ht)return;const Jt=Li.find(te=>te.id===z.roomId);if(!Jt)return;const ae=`${z.roomId}_${z.side}_${z.gapIndex}`,jt=Ln[ae];if(!jt)return;let xe=0,Ae=0;const cn=ht.width,je=cw,$e=.3;ht.side==="N"?(xe=ht.center,Ae=Jt.d/2):ht.side==="S"?(xe=ht.center,Ae=-Jt.d/2):ht.side==="E"?(xe=Jt.w/2,Ae=ht.center):(xe=-Jt.w/2,Ae=ht.center);const le=Jt.cx+xe,Wt=Jt.cz+Ae,me={id:jt,type:"gap",axis:ht.side==="N"||ht.side==="S"?"z":"x",x:le,z:Wt,w:cn,h:je,d:$e,cost:z.cost,unlocked:!1,name:ae,roomId:z.roomId,side:ht.side,isOpen:!1,isPurchased:!1,doorManagerId:jt};Xe.push(me)});const Y=new gs({color:4007959});new gs({color:2759183}),Xe.forEach(z=>{const tt=z.d||.3,ct=new Gn(z.w,z.h,tt),ht=new vn(ct,Y);ht.position.set(z.x,z.h/2,z.z),ht.rotation.y=z.axis==="x"?Math.PI/2:0,ht.castShadow=!0,ht.receiveShadow=!0,Pt.add(ht),z.mesh=ht;const Jt=new Gn(z.w,z.h,tt+.1),ae=new fu({visible:!1}),jt=new vn(Jt,ae);jt.position.copy(ht.position),jt.rotation.copy(ht.rotation),Pt.add(jt),z.collider=jt,qe.set(jt,z)});const dn=rl.wallThickness,be=rl.ceilingThickness,Ce=rl.floorThickness,Dt=rl.doorHeight,ln=new gs({map:ph("wall_tiles")}),D=new gs({map:ph("wood_floor")}),b=new gs({map:ph("ceiling_tiles")}),J=z=>{const tt=vs[z.id]||[],ct=parseInt(z.color.replace("#",""),16),ht=new gs({color:ct}),Jt=z.floorTexture==="wood_floor.png"?D:ht;if(!z.disabledFloor)if(z.carvedFloors&&z.carvedFloors.length>0){const jt=z.cz-z.d/2,xe=z.cz+z.d/2,Ae=z.cx-z.w/2,cn=z.cx+z.w/2,je=z.trapdoors||[];if(je.length>0){const $e=je.map(Wt=>({xMin:Wt.cx-Wt.w/2,xMax:Wt.cx+Wt.w/2,zMin:Wt.cz-Wt.d/2,zMax:Wt.cz+Wt.d/2}));let le=jt;for(;le<xe;){let Wt=xe;for(const ee of $e)ee.zMin>le&&ee.zMin<Wt&&(Wt=ee.zMin),ee.zMax>le&&ee.zMax<Wt&&ee.zMax>le;const me=Wt-le;if(me>.1){const ee=$e.filter(he=>he.zMin<=Wt&&he.zMax>=le);if(ee.length===0){const he=new vn(new Gn(z.w,Ce,me),Jt);he.position.set(z.cx,z.floorY-Ce/2,le+me/2),he.receiveShadow=!0,Pt.add(he)}else{let he=Ae;const ni=[...ee].sort((bn,En)=>bn.xMin-En.xMin);for(const bn of ni){if(bn.xMin>he+.1){const En=bn.xMin-he,ii=new vn(new Gn(En,Ce,me),Jt);ii.position.set(he+En/2,z.floorY-Ce/2,le+me/2),ii.receiveShadow=!0,Pt.add(ii)}he=Math.max(he,bn.xMax)}if(he<cn-.1){const bn=cn-he,En=new vn(new Gn(bn,Ce,me),Jt);En.position.set(he+bn/2,z.floorY-Ce/2,le+me/2),En.receiveShadow=!0,Pt.add(En)}}}let te=xe;for(const ee of $e)ee.zMax>le&&ee.zMax<te&&(te=ee.zMax);le=te}}else{const $e=new vn(new Gn(z.w,Ce,z.d),Jt);$e.position.set(z.cx,z.floorY-Ce/2,z.cz),$e.receiveShadow=!0,Pt.add($e)}}else{const jt=new vn(new Gn(z.w,Ce,z.d),Jt);jt.position.set(z.cx,z.floorY-Ce/2,z.cz),jt.receiveShadow=!0,Pt.add(jt)}if(!z.disabledCeiling){const jt=new vn(new Gn(z.w,be,z.d),b);jt.position.set(z.cx,z.floorY+z.h+be/2,z.cz),Pt.add(jt)}if([{side:"N",px:z.cx,pz:z.cz+z.d/2,len:z.w,rotY:0},{side:"S",px:z.cx,pz:z.cz-z.d/2,len:z.w,rotY:0},{side:"E",px:z.cx+z.w/2,pz:z.cz,len:z.d,rotY:Math.PI/2},{side:"W",px:z.cx-z.w/2,pz:z.cz,len:z.d,rotY:Math.PI/2}].forEach(({side:jt,px:xe,pz:Ae,len:cn,rotY:je})=>{var Wt;if((Wt=z.disabledWalls)!=null&&Wt.includes(jt))return;const $e=tt.filter(me=>me.side===jt),le=(me,te)=>{const ee=te-me;if(ee<=.01)return;const he=(me+te)/2-cn/2,ni=Math.min(Dt,z.h),bn=new vn(new Gn(ee,ni,dn),ln);if(bn.rotation.y=je,je===0?bn.position.set(xe+he,z.floorY+ni/2,Ae):bn.position.set(xe,z.floorY+ni/2,Ae+he),bn.castShadow=!0,bn.receiveShadow=!0,Pt.add(bn),z.h>Dt){const En=z.h-Dt,ii=new vn(new Gn(ee,En,dn),ln);ii.rotation.y=je,je===0?ii.position.set(xe+he,z.floorY+Dt+En/2,Ae):ii.position.set(xe,z.floorY+Dt+En/2,Ae+he),Pt.add(ii)}};if($e.length===0)le(0,cn);else{const me=[...$e].sort((ee,he)=>ee.center-ee.width/2-(he.center-he.width/2));let te=0;me.forEach(ee=>{const he=Math.max(0,ee.center-ee.width/2+cn/2),ni=Math.min(cn,ee.center+ee.width/2+cn/2);le(te,he),te=ni}),le(te,cn)}}),z.isStaircase){const jt=new vn(new Gn(z.w,.3,z.d),new gs({color:5910560}));jt.position.set(z.cx,z.floorY+(z.climbHeight??z.h)/2,z.cz);const xe=z.climbHeight??z.h,Ae=z.stairDirection||(z.w>z.d?"W_E":"N_S");Ae==="W_E"||Ae==="E_W"?jt.rotation.z=(Ae==="W_E"?1:-1)*Math.atan2(xe,z.w):jt.rotation.x=(Ae==="N_S"?1:-1)*Math.atan2(xe,z.d),Pt.add(jt)}};Li.forEach(z=>J(z)),lw.forEach(z=>{const tt=Li.find(ht=>ht.id===z.roomId),ct=new vn(new Gn(z.w,z.h,z.d),new gs({color:parseInt(z.color.replace("#",""),16)}));ct.position.set(z.cx,((tt==null?void 0:tt.floorY)??0)+z.h/2,z.cz),Pt.add(ct)});const xt=()=>{const z=Gt.clientWidth,tt=Gt.clientHeight;Yt.setSize(z,tt),oe.aspect=z/tt,oe.updateProjectionMatrix()};xt();const Tt=new ResizeObserver(xt);Tt.observe(Gt);const Ut=z=>{document.pointerLockElement===bt&&(n.current-=z.movementX*.002,a.current-=z.movementY*.002,a.current=Math.max(-Math.PI/2+.05,Math.min(Math.PI/2-.05,a.current)))},zt=()=>{document.pointerLockElement!==bt&&(bt==null||bt.requestPointerLock())},ft=()=>{_(document.pointerLockElement===bt)};bt.addEventListener("click",zt),document.addEventListener("mousemove",Ut),document.addEventListener("pointerlockchange",ft);const pt=z=>{if(u.current[z.code]=!0,z.code==="KeyV"&&(m.current=!m.current),z.code==="F4"&&(z.preventDefault(),Rt.current&&(Rt.current.toggle(),Mt(Rt.current.isActive()),console.log("[GeometryInspector] Toggled:",Rt.current.isActive()?"ON":"OFF"),console.log("[GeometryInspector] Call window.inspectGeometry() to print all meshes within 20 units"))),z.code==="F7"){z.preventDefault();const tt=K.current;tt.initialize(Li,vs);const ct=tt.runAudit();F(ct.issues),P(ht=>!ht),H(-1),console.log(`[FloorIntegrityAudit] Debug mode ${N?"disabled":"enabled"}: ${ct.totalIssuesFound} issues found`)}if(z.code==="F8"&&(z.preventDefault(),T.length>0)){const tt=(Z+1)%T.length,ct=T[tt];o.current.set(ct.location[0],ct.location[1]+2,ct.location[2]+5),n.current=Math.PI,H(tt),console.log(`[FloorIntegrityAudit] Teleported to issue ${tt+1}/${T.length}: ${ct.cause} in ${ct.roomName}`)}if(z.code==="F6"){z.preventDefault();const tt=vt.current;tt.initialize(Li,vs,"starter");const ct=tt.runAudit(),ht=tt.getIssues();O(ht),I(ct),mt(!0),st(-1),console.log(`[MapConnectivityAudit] Audit complete: ${ct.totalIssues} issues found`),console.log(`  - Connected Rooms: ${ct.totalConnectedRooms}`),console.log(`  - Disconnected Rooms: ${ct.disconnectedRooms.length}`),console.log(`  - Void Exposures: ${ct.voidExposures.length}`),console.log(`  - Missing Walls: ${ct.missingWalls.length}`),console.log(`  - Missing Ceilings: ${ct.missingCeilings.length}`),console.log(`  - Navigation Breaks: ${ct.navigationBreaks.length}`)}if(z.code==="F5"&&(z.preventDefault(),X.length>0)){const tt=(B+1)%X.length,ct=X[tt];o.current.set(ct.location[0],ct.location[1]+2,ct.location[2]+5),n.current=Math.PI,st(tt),console.log(`[MapConnectivityAudit] Teleported to issue ${tt+1}/${X.length}: ${ct.description} in ${ct.roomName}`)}if(z.code==="F9"){z.preventDefault();const tt=V.current,ct=o.current.x,ht=o.current.z;let Jt;for(const jt of Li){const xe=jt.w/2,Ae=jt.d/2;if(ct>=jt.cx-xe&&ct<=jt.cx+xe&&ht>=jt.cz-Ae&&ht<=jt.cz+Ae){Jt=jt.name;break}}tt.setData(Li,vs,Xe),tt.enable(Jt);const ae=tt.getIssues();C(ae),y(!0),U(-1),console.log(`[RoomSealValidator] Scan complete: ${ae.length} issues found${Jt?` in ${Jt}`:""}`)}if(z.code==="F10"){z.preventDefault();const ct=V.current.getIssues();if(ct.length>0){const ht=(L+1)%ct.length,Jt=ct[ht];o.current.set(Jt.location[0],Jt.location[1]+2,Jt.location[2]+5),n.current=Math.PI,U(ht),console.log(`[RoomSealValidator] Teleported to issue ${ht+1}/${ct.length}: ${Jt.description} in ${Jt.roomName}`)}}if(z.code==="F11"){z.preventDefault();const tt=V.current;tt.setData(Li,vs,Xe);const ct=tt.toggle();if(y(ct),ct){const ht=tt.getIssues();C(ht)}else C([]),U(-1);console.log(`[MapValidator] Validation mode ${ct?"enabled":"disabled"}`)}},Ft=z=>{u.current[z.code]=!1};window.addEventListener("keydown",pt),window.addEventListener("keyup",Ft);const Bt=(z,tt,ct)=>Li.find(ht=>{const Jt=ht.cx-ht.w/2,ae=ht.cx+ht.w/2,jt=ht.cz-ht.d/2,xe=ht.cz+ht.d/2;return z>=Jt&&z<=ae&&tt>=jt&&tt<=xe&&ct>=ht.floorY-1&&ct<=ht.floorY+ht.h+1}),Lt=(z,tt,ct)=>{const ht=Xe.find(Jt=>Jt.roomId===z&&Jt.side===tt&&yv.findIndex(ae=>ae.roomId===z&&ae.side===tt&&ae.gapIndex===ct)>=0);return ht?ht.isPurchased?!!ht.isOpen:!1:!0},Ot=(z,tt)=>{const ct=z.clone().add(tt),ht=Bt(z.x,z.z,z.y);if(!ht)return ct;const Jt=ht.cx-ht.w/2,ae=ht.cx+ht.w/2,jt=ht.cz-ht.d/2,xe=ht.cz+ht.d/2;let Ae=ct.x,cn=ct.z;const je=uw,$e=vs[ht.id]||[];if(cn-je<jt){const le=$e.filter(te=>te.side==="S"),Wt=z.x-ht.cx;if(!le.some(te=>Wt>=te.center-te.width/2&&Wt<=te.center+te.width/2))cn=jt+je;else{const te=$e.findIndex(ee=>ee.side==="S"&&Wt>=ee.center-ee.width/2&&Wt<=ee.center+ee.width/2);te>=0&&Xe.find(he=>he.roomId===ht.id&&he.side==="S")&&!Lt(ht.id,"S",te)&&(cn=jt+je)}}if(cn+je>xe){const le=$e.filter(te=>te.side==="N"),Wt=z.x-ht.cx;if(!le.some(te=>Wt>=te.center-te.width/2&&Wt<=te.center+te.width/2))cn=xe-je;else{const te=$e.findIndex(ee=>ee.side==="N"&&Wt>=ee.center-ee.width/2&&Wt<=ee.center+ee.width/2);te>=0&&Xe.find(he=>he.roomId===ht.id&&he.side==="N")&&!Lt(ht.id,"N",te)&&(cn=xe-je)}}if(Ae-je<Jt){const le=$e.filter(te=>te.side==="W"),Wt=z.z-ht.cz;if(!le.some(te=>Wt>=te.center-te.width/2&&Wt<=te.center+te.width/2))Ae=Jt+je;else{const te=$e.findIndex(ee=>ee.side==="W"&&Wt>=ee.center-ee.width/2&&Wt<=ee.center+ee.width/2);te>=0&&Xe.find(he=>he.roomId===ht.id&&he.side==="W")&&!Lt(ht.id,"W",te)&&(Ae=Jt+je)}}if(Ae+je>ae){const le=$e.filter(te=>te.side==="E"),Wt=z.z-ht.cz;if(!le.some(te=>Wt>=te.center-te.width/2&&Wt<=te.center+te.width/2))Ae=ae-je;else{const te=$e.findIndex(ee=>ee.side==="E"&&Wt>=ee.center-ee.width/2&&Wt<=ee.center+ee.width/2);te>=0&&Xe.find(he=>he.roomId===ht.id&&he.side==="E")&&!Lt(ht.id,"E",te)&&(Ae=ae-je)}}return new $(Ae,ct.y,cn)};let fe=performance.now(),de;const Te=new WM,k=8;let Ct=null;const gt=()=>{de=requestAnimationFrame(gt);const z=performance.now(),tt=Math.min((z-fe)/1e3,.05);fe=z;const ct=u.current,ht=m.current?20:10,Jt=new $(-Math.sin(n.current),0,-Math.cos(n.current)),ae=new $(Math.cos(n.current),0,-Math.sin(n.current));let jt=new $;if((ct.KeyW||ct.ArrowUp)&&jt.add(Jt),(ct.KeyS||ct.ArrowDown)&&jt.sub(Jt),(ct.KeyD||ct.ArrowRight)&&jt.add(ae),(ct.KeyA||ct.ArrowLeft)&&jt.sub(ae),jt.lengthSq()>0&&jt.normalize().multiplyScalar(ht*tt),m.current)ct.Space&&(jt.y+=ht*tt),(ct.ShiftLeft||ct.ShiftRight)&&(jt.y-=ht*tt),o.current.add(jt);else{c.current-=30*tt;const le=Bt(o.current.x,o.current.z,o.current.y);let Wt=le?le.isStaircase?ow(le,o.current.x,o.current.z)+qc:le.floorY+qc:qc;o.current.y+=c.current*tt,o.current.y<=Wt?(o.current.y=Wt,c.current=0,h.current=!0):h.current=!1,ct.Space&&h.current&&(c.current=10,h.current=!1);const me=Ot(o.current,jt);o.current.x=me.x,o.current.z=me.z}if(oe.position.copy(o.current),oe.rotation.order="YXZ",oe.rotation.y=n.current,oe.rotation.x=a.current,R&&V.current.updateHighlights(z/1e3),N&&renderFloorDebug(Pt,z/1e3),Q&&Rt.current){const le=Rt.current,Wt=le.inspectAtCrosshair();if(Wt){const me=new tr().setFromObject(Wt),te=new $,ee=new $;me.getSize(te),me.getCenter(ee),le.updateHighlight(Wt);const he=le.getInspectedMesh();he&&lt({meshName:he.meshName,roomId:he.roomId,wallId:he.wallId,floorId:he.floorId})}else le.updateHighlight(null),lt(null)}Te.setFromCamera(new Re(0,0),oe);const xe=Array.from(qe.keys()),Ae=Te.intersectObjects(xe);if(Ct=null,Ae.length>0&&Ae[0].distance<=k){const le=Ae[0].object,Wt=qe.get(le);Wt?(Ct=Wt,Wt.isPurchased?Wt.isOpen?(g(""),E(!1)):(g("Press E to open"),E(!0)):(g(`Press E to buy ${Wt.name} (${Wt.cost})`),E(!0))):(g(""),E(!1))}else g(""),E(!1);const cn=ol(),je={x:o.current.x,y:o.current.y,z:o.current.z},$e=new $(-Math.sin(n.current),0,-Math.cos(n.current));cn.updateInteraction(je,$e),Yt.render(Pt,oe)};gt();const Vt=z=>{const tt=document.pointerLockElement!==null;if(console.log("KEY EVENT",z.code,"isPointerLocked =",tt),console.log("[DEBUG] Key event received:",z.key),z.code==="KeyE"&&tt){console.log("KEY_E_TEST"),console.log("=== [E] key pressed ==="),console.log("=== Key handler entered ===");const ct=Ct;if(!ct){console.log("Current door found: NO (null)");return}console.log("Current door found: YES"),console.log("Door ID:",ct.id),console.log("purchaseDoor() called");const ht=ol(),Jt="player1",ae=ct.doorManagerId||ct.id,jt=ht.purchaseDoor(ae,Jt);console.log("purchaseDoor() result:",jt),console.log("Result.success:",jt.success),jt.success?(console.log("[App] Door purchased successfully:",ct.name),console.log("DoorRenderer update called"),ct.mesh&&(ct.mesh.visible=!1,console.log(`[App] Door mesh hidden: ${ct.id}`)),ct.collider&&(ct.collider.visible=!1,console.log(`[App] Door collider hidden: ${ct.id}`)),ct.isOpen=!0,ct.isPurchased=!0):(console.log("[App] Door purchase failed:",jt.reason),jt.reason==="INSUFFICIENT_POINTS"&&(wt(!0),setTimeout(()=>wt(!1),2e3)))}};return window.addEventListener("keydown",Vt),()=>{cancelAnimationFrame(de),Tt.disconnect(),bt.removeEventListener("click",zt),document.removeEventListener("mousemove",Ut),document.removeEventListener("pointerlockchange",ft),window.removeEventListener("keydown",pt),window.removeEventListener("keyup",Ft),window.removeEventListener("keydown",Vt),Me.destroy(),Yt.dispose()}},[]),It.jsxs("div",{className:"relative w-screen h-screen bg-black overflow-hidden select-none",children:[It.jsx("div",{className:"absolute top-4 right-4 z-20",children:It.jsx(nw,{playerId:"player1"})}),Et&&It.jsx("div",{className:"absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50",children:It.jsx("div",{className:"bg-red-900/90 border-2 border-red-500 px-6 py-3 rounded-lg text-lg font-mono tracking-wide text-red-200 whitespace-nowrap animate-pulse",children:"NOT ENOUGH POINTS"})}),It.jsx(JA,{playerId:"player1"}),It.jsx("div",{ref:r,className:"absolute inset-0",children:It.jsx("canvas",{ref:t,className:"block w-full h-full"})}),p&&It.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10",children:It.jsx("div",{className:`w-1.5 h-1.5 rounded-full border border-white/60 ${Q?"bg-yellow-400":"bg-emerald-400"}`})}),p&&Q&&Nt&&It.jsx("div",{className:"absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10",children:It.jsxs("div",{className:"bg-black/80 border border-yellow-500/70 px-4 py-3 rounded-lg text-xs font-mono tracking-wide text-yellow-300 whitespace-nowrap",children:[It.jsx("div",{className:"font-bold text-yellow-200 mb-1",children:"GEOMETRY INSPECTOR"}),It.jsxs("div",{children:["Mesh: ",It.jsx("span",{className:"text-white",children:Nt.meshName})]}),Nt.roomId&&It.jsxs("div",{children:["Room ID: ",It.jsx("span",{className:"text-emerald-400",children:Nt.roomId})]}),Nt.wallId&&It.jsxs("div",{children:["Wall ID: ",It.jsx("span",{className:"text-blue-400",children:Nt.wallId})]}),Nt.floorId&&It.jsxs("div",{children:["Floor ID: ",It.jsx("span",{className:"text-purple-400",children:Nt.floorId})]}),It.jsx("div",{className:"mt-2 text-yellow-500/70 text-[10px]",children:"Press F4 to toggle · window.inspectGeometry() for details"})]})}),p&&M&&S&&It.jsx("div",{className:"absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10",children:It.jsx("div",{className:"bg-black/70 border border-emerald-500/50 px-4 py-2 rounded-lg text-sm font-mono tracking-wide text-emerald-400 whitespace-nowrap",children:S})}),!p&&It.jsx("div",{className:"absolute inset-x-0 bottom-8 flex justify-center pointer-events-none z-10",children:It.jsx("div",{className:"bg-black/70 border border-white/10 px-5 py-2 rounded-full text-[11px] font-mono tracking-widest text-white/50 uppercase",children:"Click to Play · WASD Move · Mouse Look · V Noclip · F4 Geometry Inspector · ESC Free Cursor"})}),R&&It.jsxs(It.Fragment,{children:[It.jsx("div",{className:"absolute top-4 left-4 pointer-events-none z-10",children:It.jsxs("div",{className:"bg-red-900/80 border border-red-500 px-3 py-2 rounded-lg text-xs font-mono text-red-300",children:[It.jsx("div",{className:"font-bold text-red-200 mb-1",children:"MAP VALIDATION MODE"}),It.jsxs("div",{children:["Issues: ",x.length]}),L>=0&&It.jsxs("div",{className:"text-yellow-300",children:["Viewing: ",L+1,"/",x.length]}),It.jsx("div",{className:"mt-2 text-gray-400 text-[10px]",children:"F8: Scan · F9: Next Issue · F10: Toggle"})]})}),x.length>0&&It.jsx("div",{className:"absolute top-4 right-4 max-w-md max-h-96 overflow-y-auto pointer-events-auto z-10",children:It.jsxs("div",{className:"bg-black/80 border border-red-500/50 rounded-lg p-3",children:[It.jsx("div",{className:"text-xs font-mono text-red-300 font-bold mb-2",children:"DETECTED ISSUES"}),It.jsx("div",{className:"space-y-1",children:x.map((bt,Gt)=>It.jsxs("div",{className:`text-[10px] font-mono p-1.5 rounded cursor-pointer transition-colors ${Gt===L?"bg-yellow-900/50 text-yellow-200 border border-yellow-500/50":bt.severity==="critical"?"bg-red-950/50 text-red-300 hover:bg-red-900/30":bt.severity==="high"?"bg-orange-950/50 text-orange-300 hover:bg-orange-900/30":"bg-gray-900/50 text-gray-300 hover:bg-gray-800/50"}`,onClick:()=>{U(Gt);const Pt=V.current.getIssues();Pt[Gt]&&(o.current.set(Pt[Gt].location[0],Pt[Gt].location[1]+2,Pt[Gt].location[2]+5),n.current=Math.PI)},children:[It.jsx("span",{className:`inline-block w-2 h-2 rounded-full mr-2 ${bt.type==="floor_gap"?"bg-red-500":bt.type==="wall_gap"?"bg-yellow-500":bt.type==="door_gap"?"bg-blue-500":bt.type==="stair_gap"?"bg-orange-500":bt.type==="corner_crack"?"bg-pink-500":"bg-gray-500"}`}),"[",bt.severity.toUpperCase(),"] ",bt.roomName," - ",bt.type.replace("_"," "),It.jsx("div",{className:"text-gray-400 ml-4 truncate",children:bt.description})]},bt.id))})]})}),R&&x.length===0&&It.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10",children:It.jsxs("div",{className:"bg-green-900/80 border border-green-500 px-6 py-4 rounded-lg text-sm font-mono text-green-300",children:[It.jsx("div",{className:"font-bold text-green-200 mb-1",children:"NO ISSUES DETECTED"}),It.jsx("div",{className:"text-green-400",children:"Map geometry is clean!"})]})})]})]})}Sy.createRoot(document.getElementById("root")).render(It.jsx(ce.StrictMode,{children:It.jsx(fw,{})}));
