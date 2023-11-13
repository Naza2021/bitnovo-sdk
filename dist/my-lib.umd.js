(function(T,w){typeof exports=="object"&&typeof module<"u"?w(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],w):(T=typeof globalThis<"u"?globalThis:T||self,w(T.MyLib={},T.React))})(this,function(T,w){"use strict";var B={exports:{}},F={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z;function Ce(){if(Z)return F;Z=1;var l=w,h=Symbol.for("react.element"),p=Symbol.for("react.fragment"),b=Object.prototype.hasOwnProperty,x=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function O(y,c,P){var m,E={},S=null,Y=null;P!==void 0&&(S=""+P),c.key!==void 0&&(S=""+c.key),c.ref!==void 0&&(Y=c.ref);for(m in c)b.call(c,m)&&!j.hasOwnProperty(m)&&(E[m]=c[m]);if(y&&y.defaultProps)for(m in c=y.defaultProps,c)E[m]===void 0&&(E[m]=c[m]);return{$$typeof:h,type:y,key:S,ref:Y,props:E,_owner:x.current}}return F.Fragment=p,F.jsx=O,F.jsxs=O,F}var I={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ee;function we(){return ee||(ee=1,process.env.NODE_ENV!=="production"&&function(){var l=w,h=Symbol.for("react.element"),p=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),y=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),te=Symbol.iterator,Ae="@@iterator";function De(e){if(e===null||typeof e!="object")return null;var r=te&&e[te]||e[Ae];return typeof r=="function"?r:null}var k=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function d(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Fe("error",e,t)}}function Fe(e,r,t){{var n=k.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var u=t.map(function(o){return String(o)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var Ie=!1,We=!1,$e=!1,Ye=!1,Le=!1,ne;ne=Symbol.for("react.module.reference");function Me(e){return!!(typeof e=="string"||typeof e=="function"||e===b||e===j||Le||e===x||e===P||e===m||Ye||e===Y||Ie||We||$e||typeof e=="object"&&e!==null&&(e.$$typeof===S||e.$$typeof===E||e.$$typeof===O||e.$$typeof===y||e.$$typeof===c||e.$$typeof===ne||e.getModuleId!==void 0))}function Ne(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function ae(e){return e.displayName||"Context"}function R(e){if(e==null)return null;if(typeof e.tag=="number"&&d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case p:return"Portal";case j:return"Profiler";case x:return"StrictMode";case P:return"Suspense";case m:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case y:var r=e;return ae(r)+".Consumer";case O:var t=e;return ae(t._context)+".Provider";case c:return Ne(e,e.render,"ForwardRef");case E:var n=e.displayName||null;return n!==null?n:R(e.type)||"Memo";case S:{var i=e,u=i._payload,o=i._init;try{return R(o(u))}catch{return null}}}return null}var C=Object.assign,W=0,oe,ie,ue,se,fe,ce,le;function de(){}de.__reactDisabledLog=!0;function Ue(){{if(W===0){oe=console.log,ie=console.info,ue=console.warn,se=console.error,fe=console.group,ce=console.groupCollapsed,le=console.groupEnd;var e={configurable:!0,enumerable:!0,value:de,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}W++}}function Ve(){{if(W--,W===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:C({},e,{value:oe}),info:C({},e,{value:ie}),warn:C({},e,{value:ue}),error:C({},e,{value:se}),group:C({},e,{value:fe}),groupCollapsed:C({},e,{value:ce}),groupEnd:C({},e,{value:le})})}W<0&&d("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var q=k.ReactCurrentDispatcher,J;function L(e,r,t){{if(J===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);J=n&&n[1]||""}return`
`+J+e}}var G=!1,M;{var Be=typeof WeakMap=="function"?WeakMap:Map;M=new Be}function ve(e,r){if(!e||G)return"";{var t=M.get(e);if(t!==void 0)return t}var n;G=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=q.current,q.current=null,Ue();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(_){n=_}Reflect.construct(e,[],o)}else{try{o.call()}catch(_){n=_}e.call(o.prototype)}}else{try{throw Error()}catch(_){n=_}e()}}catch(_){if(_&&n&&typeof _.stack=="string"){for(var a=_.stack.split(`
`),v=n.stack.split(`
`),s=a.length-1,f=v.length-1;s>=1&&f>=0&&a[s]!==v[f];)f--;for(;s>=1&&f>=0;s--,f--)if(a[s]!==v[f]){if(s!==1||f!==1)do if(s--,f--,f<0||a[s]!==v[f]){var g=`
`+a[s].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),typeof e=="function"&&M.set(e,g),g}while(s>=1&&f>=0);break}}}finally{G=!1,q.current=u,Ve(),Error.prepareStackTrace=i}var D=e?e.displayName||e.name:"",Se=D?L(D):"";return typeof e=="function"&&M.set(e,Se),Se}function qe(e,r,t){return ve(e,!1)}function Je(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function N(e,r,t){if(e==null)return"";if(typeof e=="function")return ve(e,Je(e));if(typeof e=="string")return L(e);switch(e){case P:return L("Suspense");case m:return L("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case c:return qe(e.render);case E:return N(e.type,r,t);case S:{var n=e,i=n._payload,u=n._init;try{return N(u(i),r,t)}catch{}}}return""}var U=Object.prototype.hasOwnProperty,pe={},me=k.ReactDebugCurrentFrame;function V(e){if(e){var r=e._owner,t=N(e.type,e._source,r?r.type:null);me.setExtraStackFrame(t)}else me.setExtraStackFrame(null)}function Ge(e,r,t,n,i){{var u=Function.call.bind(U);for(var o in e)if(u(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var v=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw v.name="Invariant Violation",v}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){a=s}a&&!(a instanceof Error)&&(V(i),d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),V(null)),a instanceof Error&&!(a.message in pe)&&(pe[a.message]=!0,V(i),d("Failed %s type: %s",t,a.message),V(null))}}}var ze=Array.isArray;function z(e){return ze(e)}function Ke(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function He(e){try{return he(e),!1}catch{return!0}}function he(e){return""+e}function ge(e){if(He(e))return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ke(e)),he(e)}var $=k.ReactCurrentOwner,Xe={key:!0,ref:!0,__self:!0,__source:!0},ye,be,K;K={};function Qe(e){if(U.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Ze(e){if(U.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function er(e,r){if(typeof e.ref=="string"&&$.current&&r&&$.current.stateNode!==r){var t=R($.current.type);K[t]||(d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',R($.current.type),e.ref),K[t]=!0)}}function rr(e,r){{var t=function(){ye||(ye=!0,d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function tr(e,r){{var t=function(){be||(be=!0,d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var nr=function(e,r,t,n,i,u,o){var a={$$typeof:h,type:e,key:r,ref:t,props:o,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function ar(e,r,t,n,i){{var u,o={},a=null,v=null;t!==void 0&&(ge(t),a=""+t),Ze(r)&&(ge(r.key),a=""+r.key),Qe(r)&&(v=r.ref,er(r,i));for(u in r)U.call(r,u)&&!Xe.hasOwnProperty(u)&&(o[u]=r[u]);if(e&&e.defaultProps){var s=e.defaultProps;for(u in s)o[u]===void 0&&(o[u]=s[u])}if(a||v){var f=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&rr(o,f),v&&tr(o,f)}return nr(e,a,v,i,n,$.current,o)}}var H=k.ReactCurrentOwner,Ee=k.ReactDebugCurrentFrame;function A(e){if(e){var r=e._owner,t=N(e.type,e._source,r?r.type:null);Ee.setExtraStackFrame(t)}else Ee.setExtraStackFrame(null)}var X;X=!1;function Q(e){return typeof e=="object"&&e!==null&&e.$$typeof===h}function Re(){{if(H.current){var e=R(H.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function or(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var _e={};function ir(e){{var r=Re();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Te(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=ir(r);if(_e[t])return;_e[t]=!0;var n="";e&&e._owner&&e._owner!==H.current&&(n=" It was passed a child from "+R(e._owner.type)+"."),A(e),d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),A(null)}}function Oe(e,r){{if(typeof e!="object")return;if(z(e))for(var t=0;t<e.length;t++){var n=e[t];Q(n)&&Te(n,r)}else if(Q(e))e._store&&(e._store.validated=!0);else if(e){var i=De(e);if(typeof i=="function"&&i!==e.entries)for(var u=i.call(e),o;!(o=u.next()).done;)Q(o.value)&&Te(o.value,r)}}}function ur(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===c||r.$$typeof===E))t=r.propTypes;else return;if(t){var n=R(r);Ge(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!X){X=!0;var i=R(r);d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function sr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){A(e),d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),A(null);break}}e.ref!==null&&(A(e),d("Invalid attribute `ref` supplied to `React.Fragment`."),A(null))}}function Pe(e,r,t,n,i,u){{var o=Me(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var v=or(i);v?a+=v:a+=Re();var s;e===null?s="null":z(e)?s="array":e!==void 0&&e.$$typeof===h?(s="<"+(R(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var f=ar(e,r,t,i,u);if(f==null)return f;if(o){var g=r.children;if(g!==void 0)if(n)if(z(g)){for(var D=0;D<g.length;D++)Oe(g[D],e);Object.freeze&&Object.freeze(g)}else d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Oe(g,e)}return e===b?sr(f):ur(f),f}}function fr(e,r,t){return Pe(e,r,t,!0)}function cr(e,r,t){return Pe(e,r,t,!1)}var lr=cr,dr=fr;I.Fragment=b,I.jsx=lr,I.jsxs=dr}()),I}process.env.NODE_ENV==="production"?B.exports=Ce():B.exports=we();var xe=B.exports;const re=l=>{if(!l)return"";const h=[];for(const p in l)l[p]!==void 0&&l.hasOwnProperty(p)&&h.push(encodeURIComponent(p)+"="+(Array.isArray(l[p])?l[p].join(","):encodeURIComponent(l[p])));return`?${h.join("&")}`},je=({config:l={},...h})=>{const{params:p,...b}=l;return xe.jsx("iframe",{src:`http://bitnovo.local/ramp?${re({...p,...b,integration:"integrator"})}`,height:"660px",width:"420px",...h})},ke=l=>{const{selector:h,config:p,...b}=l,{params:x,...j}=p,O=document.querySelector(h);if(!O){console.error("Bitnovo: Element not found");return}const y=document.createElement("iframe");y.setAttribute("src",`http://bitnovo.local/ramp?${re({...x,...j,integration:"integrator"})}`),Object.entries(b).forEach(([c,P])=>{y.setAttribute(c,P)}),O.replaceWith(y)};T.BitnovoRamp=je,T.initBitnovoRamp=ke,Object.defineProperty(T,Symbol.toStringTag,{value:"Module"})});
