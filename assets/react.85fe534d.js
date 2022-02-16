var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t={exports:{}},r={},n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var u,s=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,u,s=i(e),c=1;c<arguments.length;c++){for(var l in r=Object(arguments[c]))o.call(r,l)&&(s[l]=r[l]);if(n){u=n(r);for(var f=0;f<u.length;f++)a.call(r,u[f])&&(s[u[f]]=r[u[f]])}}return s};
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */u=r,function(){var e=s,t=60103,r=60106;u.Fragment=60107,u.StrictMode=60108,u.Profiler=60114;var n=60109,o=60110,a=60112;u.Suspense=60113;var i=60120,c=60115,l=60116,f=60121,p=60122,d=60117,y=60129,m=60131;if("function"==typeof Symbol&&Symbol.for){var v=Symbol.for;t=v("react.element"),r=v("react.portal"),u.Fragment=v("react.fragment"),u.StrictMode=v("react.strict_mode"),u.Profiler=v("react.profiler"),n=v("react.provider"),o=v("react.context"),a=v("react.forward_ref"),u.Suspense=v("react.suspense"),i=v("react.suspense_list"),c=v("react.memo"),l=v("react.lazy"),f=v("react.block"),p=v("react.server.block"),d=v("react.fundamental"),v("react.scope"),v("react.opaque.id"),y=v("react.debug_trace_mode"),v("react.offscreen"),m=v("react.legacy_hidden")}var h="function"==typeof Symbol&&Symbol.iterator;function g(e){if(null===e||"object"!=typeof e)return null;var t=h&&e[h]||e["@@iterator"];return"function"==typeof t?t:null}var b={current:null},_={current:null},w={},k=null;function C(e){k=e}w.setExtraStackFrame=function(e){k=e},w.getCurrentStack=null,w.getStackAddendum=function(){var e="";k&&(e+=k);var t=w.getCurrentStack;return t&&(e+=t()||""),e};var j={ReactCurrentDispatcher:b,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:e};function R(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];P("warn",e,r)}function O(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];P("error",e,r)}function P(e,t,r){var n=j.ReactDebugCurrentFrame.getStackAddendum();""!==n&&(t+="%s",r=r.concat([n]));var o=r.map((function(e){return""+e}));o.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,o)}j.ReactDebugCurrentFrame=w;var S={};function E(e,t){var r=e.constructor,n=r&&(r.displayName||r.name)||"ReactClass",o=n+"."+t;S[o]||(O("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",t,n),S[o]=!0)}var x={isMounted:function(e){return!1},enqueueForceUpdate:function(e,t,r){E(e,"forceUpdate")},enqueueReplaceState:function(e,t,r,n){E(e,"replaceState")},enqueueSetState:function(e,t,r,n){E(e,"setState")}},$={};function T(e,t,r){this.props=e,this.context=t,this.refs=$,this.updater=r||x}Object.freeze($),T.prototype.isReactComponent={},T.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},T.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};var D={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},N=function(e,t){Object.defineProperty(T.prototype,e,{get:function(){R("%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1])}})};for(var F in D)D.hasOwnProperty(F)&&N(F,D[F]);function I(){}function A(e,t,r){this.props=e,this.context=t,this.refs=$,this.updater=r||x}I.prototype=T.prototype;var M=A.prototype=new I;function z(e){return e.displayName||"Context"}function U(e){if(null==e)return null;if("number"==typeof e.tag&&O("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case u.Fragment:return"Fragment";case r:return"Portal";case u.Profiler:return"Profiler";case u.StrictMode:return"StrictMode";case u.Suspense:return"Suspense";case i:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case o:return z(e)+".Consumer";case n:return z(e._context)+".Provider";case a:return d=e,y=e.render,m="ForwardRef",v=y.displayName||y.name||"",d.displayName||(""!==v?m+"("+v+")":m);case c:return U(e.type);case f:return U(e._render);case l:var t=e,s=t._payload,p=t._init;try{return U(p(s))}catch(h){return null}}var d,y,m,v;return null}M.constructor=A,e(M,T.prototype),M.isPureReactComponent=!0;var q,L,V,W=Object.prototype.hasOwnProperty,Y={key:!0,ref:!0,__self:!0,__source:!0};function B(e){if(W.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}function H(e){if(W.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}function J(e,t){var r=function(){q||(q=!0,O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}function X(e,t){var r=function(){L||(L=!0,O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"ref",{get:r,configurable:!0})}function G(e){if("string"==typeof e.ref&&_.current&&e.__self&&_.current.stateNode!==e.__self){var t=U(_.current.type);V[t]||(O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',t,e.ref),V[t]=!0)}}V={};var K=function(e,r,n,o,a,i,u){var s={$$typeof:t,type:e,key:r,ref:n,props:u,_owner:i,_store:{}};return Object.defineProperty(s._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(s,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(s,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(s.props),Object.freeze(s)),s};function Q(e,t,r){var n,o={},a=null,i=null,u=null,s=null;if(null!=t)for(n in B(t)&&(i=t.ref,G(t)),H(t)&&(a=""+t.key),u=void 0===t.__self?null:t.__self,s=void 0===t.__source?null:t.__source,t)W.call(t,n)&&!Y.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(c>1){for(var l=Array(c),f=0;f<c;f++)l[f]=arguments[f+2];Object.freeze&&Object.freeze(l),o.children=l}if(e&&e.defaultProps){var p=e.defaultProps;for(n in p)void 0===o[n]&&(o[n]=p[n])}if(a||i){var d="function"==typeof e?e.displayName||e.name||"Unknown":e;a&&J(o,d),i&&X(o,d)}return K(e,a,i,u,s,_.current,o)}function Z(t,r,n){if(null==t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o,a,i=e({},t.props),u=t.key,s=t.ref,c=t._self,l=t._source,f=t._owner;if(null!=r)for(o in B(r)&&(s=r.ref,f=_.current),H(r)&&(u=""+r.key),t.type&&t.type.defaultProps&&(a=t.type.defaultProps),r)W.call(r,o)&&!Y.hasOwnProperty(o)&&(void 0===r[o]&&void 0!==a?i[o]=a[o]:i[o]=r[o]);var p=arguments.length-2;if(1===p)i.children=n;else if(p>1){for(var d=Array(p),y=0;y<p;y++)d[y]=arguments[y+2];i.children=d}return K(t.type,u,s,c,l,f,i)}function ee(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var te=!1,re=/\/+/g;function ne(e){return e.replace(re,"$&/")}function oe(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,(function(e){return n[e]}))):t.toString(36);var r,n}function ae(e,n,o,a,i){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var s,c,l,f=!1;if(null===e)f=!0;else switch(u){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case t:case r:f=!0}}if(f){var p=e,d=i(p),y=""===a?"."+oe(p,0):a;if(Array.isArray(d)){var m="";null!=y&&(m=ne(y)+"/"),ae(d,n,m,"",(function(e){return e}))}else null!=d&&(ee(d)&&(s=d,c=o+(!d.key||p&&p.key===d.key?"":ne(""+d.key)+"/")+y,d=K(s.type,c,s.ref,s._self,s._source,s._owner,s.props)),n.push(d));return 1}var v=0,h=""===a?".":a+":";if(Array.isArray(e))for(var b=0;b<e.length;b++)v+=ae(l=e[b],n,o,h+oe(l,b),i);else{var _=g(e);if("function"==typeof _){var w=e;_===w.entries&&(te||R("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),te=!0);for(var k,C=_.call(w),j=0;!(k=C.next()).done;)v+=ae(l=k.value,n,o,h+oe(l,j++),i)}else if("object"===u){var O=""+e;throw Error("Objects are not valid as a React child (found: "+("[object Object]"===O?"object with keys {"+Object.keys(e).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}}return v}function ie(e,t,r){if(null==e)return e;var n=[],o=0;return ae(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function ue(e){if(-1===e._status){var t=(0,e._result)(),r=e;r._status=0,r._result=t,t.then((function(t){if(0===e._status){var r=t.default;void 0===r&&O("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",t);var n=e;n._status=1,n._result=r}}),(function(t){if(0===e._status){var r=e;r._status=2,r._result=t}}))}if(1===e._status)return e._result;throw e._result}function se(e){return"string"==typeof e||"function"==typeof e||e===u.Fragment||e===u.Profiler||e===y||e===u.StrictMode||e===u.Suspense||e===i||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===l||e.$$typeof===c||e.$$typeof===n||e.$$typeof===o||e.$$typeof===a||e.$$typeof===d||e.$$typeof===f||e[0]===p)}function ce(){var e=b.current;if(null===e)throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");return e}var le,fe,pe,de,ye,me,ve,he=0;function ge(){}ge.__reactDisabledLog=!0;var be,_e=j.ReactCurrentDispatcher;function we(e,t,r){if(void 0===be)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);be=n&&n[1]||""}return"\n"+be+e}var ke,Ce=!1,je="function"==typeof WeakMap?WeakMap:Map;function Re(t,r){if(!t||Ce)return"";var n,o=ke.get(t);if(void 0!==o)return o;Ce=!0;var a,i=Error.prepareStackTrace;Error.prepareStackTrace=void 0,a=_e.current,_e.current=null,function(){if(0===he){le=console.log,fe=console.info,pe=console.warn,de=console.error,ye=console.group,me=console.groupCollapsed,ve=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ge,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}he++}();try{if(r){var u=function(){throw Error()};if(Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(u,[])}catch(m){n=m}Reflect.construct(t,[],u)}else{try{u.call()}catch(m){n=m}t.call(u.prototype)}}else{try{throw Error()}catch(m){n=m}t()}}catch(v){if(v&&n&&"string"==typeof v.stack){for(var s=v.stack.split("\n"),c=n.stack.split("\n"),l=s.length-1,f=c.length-1;l>=1&&f>=0&&s[l]!==c[f];)f--;for(;l>=1&&f>=0;l--,f--)if(s[l]!==c[f]){if(1!==l||1!==f)do{if(l--,--f<0||s[l]!==c[f]){var p="\n"+s[l].replace(" at new "," at ");return"function"==typeof t&&ke.set(t,p),p}}while(l>=1&&f>=0);break}}}finally{Ce=!1,_e.current=a,function(){if(0==--he){var t={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:e({},t,{value:le}),info:e({},t,{value:fe}),warn:e({},t,{value:pe}),error:e({},t,{value:de}),group:e({},t,{value:ye}),groupCollapsed:e({},t,{value:me}),groupEnd:e({},t,{value:ve})})}he<0&&O("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=i}var d=t?t.displayName||t.name:"",y=d?we(d):"";return"function"==typeof t&&ke.set(t,y),y}function Oe(e,t,r){return Re(e,!1)}function Pe(e,t,r){if(null==e)return"";if("function"==typeof e)return Re(e,!(!(n=e.prototype)||!n.isReactComponent));var n;if("string"==typeof e)return we(e);switch(e){case u.Suspense:return we("Suspense");case i:return we("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case a:return Oe(e.render);case c:return Pe(e.type,t,r);case f:return Oe(e._render);case l:var o=e,s=o._payload,p=o._init;try{return Pe(p(s),t,r)}catch(d){}}return""}ke=new je;var Se,Ee={},xe=j.ReactDebugCurrentFrame;function $e(e){if(e){var t=e._owner,r=Pe(e.type,e._source,t?t.type:null);xe.setExtraStackFrame(r)}else xe.setExtraStackFrame(null)}function Te(e){if(e){var t=e._owner;C(Pe(e.type,e._source,t?t.type:null))}else C(null)}function De(){if(_.current){var e=U(_.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}function Ne(e){return null!=e&&void 0!==(t=e.__source)?"\n\nCheck your code at "+t.fileName.replace(/^.*[\\\/]/,"")+":"+t.lineNumber+".":"";var t}Se=!1;var Fe={};function Ie(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var r=function(e){var t=De();if(!t){var r="string"==typeof e?e:e.displayName||e.name;r&&(t="\n\nCheck the top-level render call using <"+r+">.")}return t}(t);if(!Fe[r]){Fe[r]=!0;var n="";e&&e._owner&&e._owner!==_.current&&(n=" It was passed a child from "+U(e._owner.type)+"."),Te(e),O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',r,n),Te(null)}}}function Ae(e,t){if("object"==typeof e)if(Array.isArray(e))for(var r=0;r<e.length;r++){var n=e[r];ee(n)&&Ie(n,t)}else if(ee(e))e._store&&(e._store.validated=!0);else if(e){var o=g(e);if("function"==typeof o&&o!==e.entries)for(var a,i=o.call(e);!(a=i.next()).done;)ee(a.value)&&Ie(a.value,t)}}function Me(e){var t,r=e.type;if(null!=r&&"string"!=typeof r){if("function"==typeof r)t=r.propTypes;else{if("object"!=typeof r||r.$$typeof!==a&&r.$$typeof!==c)return;t=r.propTypes}if(t){var n=U(r);!function(e,t,r,n,o){var a=Function.call.bind(Object.prototype.hasOwnProperty);for(var i in e)if(a(e,i)){var u=void 0;try{if("function"!=typeof e[i]){var s=Error((n||"React class")+": "+r+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw s.name="Invariant Violation",s}u=e[i](t,i,n,r,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(c){u=c}!u||u instanceof Error||($e(o),O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",r,i,typeof u),$e(null)),u instanceof Error&&!(u.message in Ee)&&(Ee[u.message]=!0,$e(o),O("Failed %s type: %s",r,u.message),$e(null))}}(t,e.props,"prop",n,e)}else void 0===r.PropTypes||Se||(Se=!0,O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",U(r)||"Unknown"));"function"!=typeof r.getDefaultProps||r.getDefaultProps.isReactClassApproved||O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function ze(e){for(var t=Object.keys(e.props),r=0;r<t.length;r++){var n=t[r];if("children"!==n&&"key"!==n){Te(e),O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),Te(null);break}}null!==e.ref&&(Te(e),O("Invalid attribute `ref` supplied to `React.Fragment`."),Te(null))}function Ue(e,r,n){var o=se(e);if(!o){var a="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var i,s=Ne(r);a+=s||De(),null===e?i="null":Array.isArray(e)?i="array":void 0!==e&&e.$$typeof===t?(i="<"+(U(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):i=typeof e,O("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",i,a)}var c=Q.apply(this,arguments);if(null==c)return c;if(o)for(var l=2;l<arguments.length;l++)Ae(arguments[l],e);return e===u.Fragment?ze(c):Me(c),c}var qe=!1;try{Object.freeze({})}catch(Be){}var Le=Ue,Ve=function(e,t,r){for(var n=Z.apply(this,arguments),o=2;o<arguments.length;o++)Ae(arguments[o],n.type);return Me(n),n},We=function(e){var t=Ue.bind(null,e);return t.type=e,qe||(qe=!0,R("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(t,"type",{enumerable:!1,get:function(){return R("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t},Ye={map:ie,forEach:function(e,t,r){ie(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return ie(e,(function(){t++})),t},toArray:function(e){return ie(e,(function(e){return e}))||[]},only:function(e){if(!ee(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};u.Children=Ye,u.Component=T,u.PureComponent=A,u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j,u.cloneElement=Ve,u.createContext=function(e,t){void 0===t?t=null:null!==t&&"function"!=typeof t&&O("createContext: Expected the optional second argument to be a function. Instead received: %s",t);var r={$$typeof:o,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null};r.Provider={$$typeof:n,_context:r};var a=!1,i=!1,u=!1,s={$$typeof:o,_context:r,_calculateChangedBits:r._calculateChangedBits};return Object.defineProperties(s,{Provider:{get:function(){return i||(i=!0,O("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),r.Provider},set:function(e){r.Provider=e}},_currentValue:{get:function(){return r._currentValue},set:function(e){r._currentValue=e}},_currentValue2:{get:function(){return r._currentValue2},set:function(e){r._currentValue2=e}},_threadCount:{get:function(){return r._threadCount},set:function(e){r._threadCount=e}},Consumer:{get:function(){return a||(a=!0,O("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),r.Consumer}},displayName:{get:function(){return r.displayName},set:function(e){u||(R("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",e),u=!0)}}}),r.Consumer=s,r._currentRenderer=null,r._currentRenderer2=null,r},u.createElement=Le,u.createFactory=We,u.createRef=function(){var e={current:null};return Object.seal(e),e},u.forwardRef=function(e){null!=e&&e.$$typeof===c?O("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):"function"!=typeof e?O("forwardRef requires a render function but was given %s.",null===e?"null":typeof e):0!==e.length&&2!==e.length&&O("forwardRef render functions accept exactly two parameters: props and ref. %s",1===e.length?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),null!=e&&(null==e.defaultProps&&null==e.propTypes||O("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"));var t,r={$$typeof:a,render:e};return Object.defineProperty(r,"displayName",{enumerable:!1,configurable:!0,get:function(){return t},set:function(r){t=r,null==e.displayName&&(e.displayName=r)}}),r},u.isValidElement=ee,u.lazy=function(e){var t,r,n={$$typeof:l,_payload:{_status:-1,_result:e},_init:ue};return Object.defineProperties(n,{defaultProps:{configurable:!0,get:function(){return t},set:function(e){O("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),t=e,Object.defineProperty(n,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return r},set:function(e){O("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),r=e,Object.defineProperty(n,"propTypes",{enumerable:!0})}}}),n},u.memo=function(e,t){se(e)||O("memo: The first argument must be a component. Instead received: %s",null===e?"null":typeof e);var r,n={$$typeof:c,type:e,compare:void 0===t?null:t};return Object.defineProperty(n,"displayName",{enumerable:!1,configurable:!0,get:function(){return r},set:function(t){r=t,null==e.displayName&&(e.displayName=t)}}),n},u.useCallback=function(e,t){return ce().useCallback(e,t)},u.useContext=function(e,t){var r=ce();if(void 0!==t&&O("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s",t,"number"==typeof t&&Array.isArray(arguments[2])?"\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://reactjs.org/link/rules-of-hooks":""),void 0!==e._context){var n=e._context;n.Consumer===e?O("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):n.Provider===e&&O("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return r.useContext(e,t)},u.useDebugValue=function(e,t){return ce().useDebugValue(e,t)},u.useEffect=function(e,t){return ce().useEffect(e,t)},u.useImperativeHandle=function(e,t,r){return ce().useImperativeHandle(e,t,r)},u.useLayoutEffect=function(e,t){return ce().useLayoutEffect(e,t)},u.useMemo=function(e,t){return ce().useMemo(e,t)},u.useReducer=function(e,t,r){return ce().useReducer(e,t,r)},u.useRef=function(e){return ce().useRef(e)},u.useState=function(e){return ce().useState(e)},u.version="17.0.2"}(),t.exports=r;var c=t.exports;export{c as R,e as c,s as o,t as r};
//# sourceMappingURL=react.85fe534d.js.map
