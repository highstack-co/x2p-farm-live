(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[7],{815:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return o}));var r=t(16),a=t.n(r),i=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,t=new a.a(e).dividedBy(new a.a(10).pow(n));return t.toNumber()},o=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18;return e.dividedBy(new a.a(10).pow(n)).toFixed()}},819:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"g",(function(){return l})),t.d(n,"h",(function(){return f})),t.d(n,"d",(function(){return d})),t.d(n,"c",(function(){return p})),t.d(n,"b",(function(){return b})),t.d(n,"e",(function(){return m})),t.d(n,"f",(function(){return j}));var r=t(3),a=t.n(r),i=t(10),o=t(16),c=t.n(o),s=t(838),u=function(){var e=Object(i.a)(a.a.mark((function e(n,t,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.approve(t.options.address,s.a.constants.MaxUint256).send({from:r}));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),l=function(){var e=Object(i.a)(a.a.mark((function e(n,t,r,i){var o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t){e.next=2;break}return e.abrupt("return",n.methods.deposit(t,new c.a(r).times(new c.a(10).pow(18)).toString()).send({from:i}).on("transactionHash",(function(e){return e.transactionHash})));case 2:return o=3===t?9:18,e.abrupt("return",n.methods.deposit(t,new c.a(r).times(new c.a(10).pow(o)).toString()).send({from:i}).on("transactionHash",(function(e){return e.transactionHash})));case 4:case"end":return e.stop()}}),e)})));return function(n,t,r,a){return e.apply(this,arguments)}}(),f=function(){var e=Object(i.a)(a.a.mark((function e(n,t,r,i){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t){e.next=2;break}return e.abrupt("return",n.methods.withdraw(t,new c.a(r).times(new c.a(10).pow(18)).toString()).send({from:i}).on("transactionHash",(function(e){return e.transactionHash})));case 2:return e.abrupt("return",n.methods.withdraw(t,new c.a(r).times(new c.a(10).pow(3===t?9:18)).toString()).send({from:i}).on("transactionHash",(function(e){return e.transactionHash})));case 3:case"end":return e.stop()}}),e)})));return function(n,t,r,a){return e.apply(this,arguments)}}(),d=function(){var e=Object(i.a)(a.a.mark((function e(n,t){var r,i,o=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=o.length>2&&void 0!==o[2]?o[2]:18,i=o.length>3?o[3]:void 0,"0x3B9B74f48E89Ebd8b45a53444327013a2308A9BC"!==n.options.address){e.next=4;break}return e.abrupt("return",n.methods.emergencyWithdraw().send({from:i}).on("transactionHash",(function(e){return e.transactionHash})));case 4:if("0xBb2B66a2c7C2fFFB06EA60BeaD69741b3f5BF831"!==n.options.address){e.next=6;break}return e.abrupt("return",n.methods.emergencyWithdraw().send({from:i}).on("transactionHash",(function(e){return e.transactionHash})));case 6:return e.abrupt("return",n.methods.withdraw(new c.a(t).times(new c.a(10).pow(r)).toString()).send({from:i}).on("transactionHash",(function(e){return e.transactionHash})));case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(a.a.mark((function e(n,t,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.emergencyWithdraw().send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),b=function(){var e=Object(i.a)(a.a.mark((function e(n,t,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.deposit(t,"0").send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),m=function(){var e=Object(i.a)(a.a.mark((function e(n,t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.deposit("0").send({from:t,gas:2e5}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),j=function(){var e=Object(i.a)(a.a.mark((function e(n,t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.deposit().send({from:t,gas:2e5,value:new c.a(0)}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},822:function(e,n,t){"use strict";var r,a,i=t(24),o=t(2),c=o.e.div(r||(r=Object(i.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1200px;\n  padding-left: 16px;\n  padding-right: 16px;\n\n  "," {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),s=Object(o.e)(c)(a||(a=Object(i.a)(["\n  min-height: calc(100vh - 64px);\n  padding-top: 16px;\n  padding-bottom: 16px;\n\n  "," {\n    padding-top: 24px;\n    padding-bottom: 24px;\n  }\n\n  "," {\n    padding-top: 32px;\n    padding-bottom: 32px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg}));n.a=s},825:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return c}));var r=t(846);r.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});var a=new r.a(10512e3),i=1,o="https://www.xenonswap.org",c="".concat(o,"/#/add");"".concat(o,"/#/pool")},829:function(e,n,t){"use strict";t.d(n,"b",(function(){return p})),t.d(n,"a",(function(){return b}));var r=t(62),a=t(3),i=t.n(a),o=t(10),c=t(0),s=t(43),u=t(32),l=t(79),f=t(819),d=t(213),p=function(e){var n=Object(u.b)(),t=Object(s.c)().account,r=Object(d.c)();return{onReward:Object(c.useCallback)(Object(o.a)(i.a.mark((function a(){var o;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(f.b)(r,e,t);case 2:return o=a.sent,n(Object(l.c)(t)),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)}))),[t,n,e,r])}},b=function(e){var n=Object(s.c)().account,t=Object(d.c)();return{onReward:Object(c.useCallback)(Object(o.a)(i.a.mark((function a(){var o;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o=e.reduce((function(e,a){return[].concat(Object(r.a)(e),[Object(f.b)(t,a,n)])}),[]),a.abrupt("return",Promise.all(o));case 2:case"end":return a.stop()}}),a)}))),[n,e,t])}}},830:function(e,n,t){"use strict";var r=t(14),a=(t(0),t(21)),i=t(152),o=t(209),c=t(4);n.a=function(e){var n=Object(o.a)(),t=Object(i.a)(),s=t.login,u=t.logout,l=Object(a.G)(s,u).onPresentConnectModal;return Object(c.jsx)(a.e,Object(r.a)(Object(r.a)({onClick:l},e),{},{children:n(292,"Unlock Wallet")}))}},875:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(77),a=t(0),i=t(876),o=t(877);function c(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var s=c(r),u=c(a),l=c(i),f=c(o);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){j(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function m(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function O(e,n){return O=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},O(e,n)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,n){return!n||"object"!==typeof n&&"function"!==typeof n?x(e):n}function g(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=h(e);if(n){var a=h(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return v(this,t)}}function w(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,a,i=[],o=!0,c=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);o=!0);}catch(s){c=!0,a=s}finally{try{o||null==t.return||t.return()}finally{if(c)throw a}}return i}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return y(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return y(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var k=function(e,n){var t=n.decimal,r=n.decimals,a=n.duration,i=n.easingFn,o=n.end,c=n.formattingFn,s=n.prefix,u=n.separator,l=n.start,d=n.suffix,p=n.useEasing;return new f.default(e,l,o,r,a,{decimal:t,easingFn:i,formattingFn:c,separator:u,prefix:s,suffix:d,useEasing:p,useGrouping:!!u})},V=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&O(e,n)}(i,e);var n,t,r,a=g(i);function i(){var e;b(this,i);for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return j(x(e=a.call.apply(a,[this].concat(t))),"checkProps",(function(n){var t=e.props,r=t.start,a=t.suffix,i=t.prefix,o=t.redraw,c=t.duration,s=t.separator,u=t.decimals,l=t.decimal,f=t.className;return c!==n.duration||r!==n.start||a!==n.suffix||i!==n.prefix||s!==n.separator||u!==n.decimals||l!==n.decimal||f!==n.className||o})),j(x(e),"createInstance",(function(){return"function"===typeof e.props.children&&l.default(e.containerRef.current&&(e.containerRef.current instanceof HTMLElement||e.containerRef.current instanceof SVGTextElement||e.containerRef.current instanceof SVGTSpanElement),'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'),k(e.containerRef.current,e.props)})),j(x(e),"pauseResume",(function(){var n=x(e),t=n.reset,r=n.restart,a=n.update,i=e.props.onPauseResume;e.instance.pauseResume(),i({reset:t,start:r,update:a})})),j(x(e),"reset",(function(){var n=x(e),t=n.pauseResume,r=n.restart,a=n.update,i=e.props.onReset;e.instance.reset(),i({pauseResume:t,start:r,update:a})})),j(x(e),"restart",(function(){e.reset(),e.start()})),j(x(e),"start",(function(){var n=x(e),t=n.pauseResume,r=n.reset,a=n.restart,i=n.update,o=e.props,c=o.delay,s=o.onEnd,u=o.onStart,l=function(){return e.instance.start((function(){return s({pauseResume:t,reset:r,start:a,update:i})}))};c>0?e.timeoutId=setTimeout(l,1e3*c):l(),u({pauseResume:t,reset:r,update:i})})),j(x(e),"update",(function(n){var t=x(e),r=t.pauseResume,a=t.reset,i=t.restart,o=e.props.onUpdate;e.instance.update(n),o({pauseResume:r,reset:a,start:i})})),j(x(e),"containerRef",u.default.createRef()),e}return n=i,(t=[{key:"componentDidMount",value:function(){var e=this.props,n=e.children,t=e.delay;this.instance=this.createInstance(),"function"===typeof n&&0!==t||this.start()}},{key:"shouldComponentUpdate",value:function(e){var n=this.props.end;return this.checkProps(e)||n!==e.end}},{key:"componentDidUpdate",value:function(e){var n=this.props,t=n.end,r=n.preserveValue;this.checkProps(e)&&(this.instance.reset(),this.instance=this.createInstance(),this.start()),t!==e.end&&(r||this.instance.reset(),this.instance.update(t))}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId),this.instance.reset()}},{key:"render",value:function(){var e=this.props,n=e.children,t=e.className,r=e.style,a=this.containerRef,i=this.pauseResume,o=this.reset,c=this.restart,s=this.update;return"function"===typeof n?n({countUpRef:a,pauseResume:i,reset:o,start:c,update:s}):u.default.createElement("span",{className:t,ref:a,style:r})}}])&&m(n.prototype,t),r&&m(n,r),i}(a.Component);j(V,"propTypes",{decimal:s.default.string,decimals:s.default.number,delay:s.default.number,easingFn:s.default.func,end:s.default.number.isRequired,formattingFn:s.default.func,onEnd:s.default.func,onStart:s.default.func,prefix:s.default.string,redraw:s.default.bool,separator:s.default.string,start:s.default.number,startOnMount:s.default.bool,suffix:s.default.string,style:s.default.object,useEasing:s.default.bool,preserveValue:s.default.bool}),j(V,"defaultProps",{decimal:".",decimals:0,delay:null,duration:null,easingFn:null,formattingFn:null,onEnd:function(){},onPauseResume:function(){},onReset:function(){},onStart:function(){},onUpdate:function(){},prefix:"",redraw:!1,separator:"",start:0,startOnMount:!0,suffix:"",style:void 0,useEasing:!0,preserveValue:!1});var R={innerHTML:null};n.default=V,n.useCountUp=function(e){var n=p(p({},V.defaultProps),e),t=n.start,r=n.formattingFn,i=w(a.useState("function"===typeof r?r(t):t),2),o=i[0],c=i[1],s=a.useRef(null),u=a.useRef(null),l=function(){var e=s.current;if(null!==e)return e;var t=function(){var e=k(R,n),t=e.options.formattingFn;return e.options.formattingFn=function(){var e=t.apply(void 0,arguments);c(e)},e}();return s.current=t,t},f=function(){var e=n.onReset;l().reset(),e({pauseResume:b,start:d,update:m})},d=function e(){var t=n.onStart,r=n.onEnd;l().reset(),l().start((function(){r({pauseResume:b,reset:f,start:e,update:m})})),t({pauseResume:b,reset:f,update:m})},b=function(){var e=n.onPauseResume;l().pauseResume(),e({reset:f,start:d,update:m})},m=function(e){var t=n.onUpdate;l().update(e),t({pauseResume:b,reset:f,start:d})};return a.useEffect((function(){var e=n.delay,t=n.onStart,r=n.onEnd;return n.startOnMount&&(u.current=setTimeout((function(){t({pauseResume:b,reset:f,update:m}),l().start((function(){clearTimeout(u.current),r({pauseResume:b,reset:f,start:d,update:m})}))}),1e3*e)),function(){clearTimeout(u.current),f()}}),[]),{countUp:o,start:d,pauseResume:b,reset:f,update:m}}},876:function(e,n,t){"use strict";var r=function(){};e.exports=r},877:function(e,n,t){var r,a;r=function(e,n,t){var r=function(e,n,t,r,a,i){function o(e){var n,t,r,a,i,o,c=e<0;if(e=Math.abs(e).toFixed(u.decimals),t=(n=(e+="").split("."))[0],r=n.length>1?u.options.decimal+n[1]:"",u.options.useGrouping){for(a="",i=0,o=t.length;i<o;++i)0!==i&&i%3===0&&(a=u.options.separator+a),a=t[o-i-1]+a;t=a}return u.options.numerals.length&&(t=t.replace(/[0-9]/g,(function(e){return u.options.numerals[+e]})),r=r.replace(/[0-9]/g,(function(e){return u.options.numerals[+e]}))),(c?"-":"")+u.options.prefix+t+r+u.options.suffix}function c(e,n,t,r){return t*(1-Math.pow(2,-10*e/r))*1024/1023+n}function s(e){return"number"==typeof e&&!isNaN(e)}var u=this;if(u.version=function(){return"1.9.3"},u.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:c,formattingFn:o,prefix:"",suffix:"",numerals:[]},i&&"object"==typeof i)for(var l in u.options)i.hasOwnProperty(l)&&null!==i[l]&&(u.options[l]=i[l]);""===u.options.separator?u.options.useGrouping=!1:u.options.separator=""+u.options.separator;for(var f=0,d=["webkit","moz","ms","o"],p=0;p<d.length&&!window.requestAnimationFrame;++p)window.requestAnimationFrame=window[d[p]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[d[p]+"CancelAnimationFrame"]||window[d[p]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,n){var t=(new Date).getTime(),r=Math.max(0,16-(t-f)),a=window.setTimeout((function(){e(t+r)}),r);return f=t+r,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),u.initialize=function(){return!!u.initialized||(u.error="",u.d="string"==typeof e?document.getElementById(e):e,u.d?(u.startVal=Number(n),u.endVal=Number(t),s(u.startVal)&&s(u.endVal)?(u.decimals=Math.max(0,r||0),u.dec=Math.pow(10,u.decimals),u.duration=1e3*Number(a)||2e3,u.countDown=u.startVal>u.endVal,u.frameVal=u.startVal,u.initialized=!0,!0):(u.error="[CountUp] startVal ("+n+") or endVal ("+t+") is not a number",!1)):(u.error="[CountUp] target is null or undefined",!1))},u.printValue=function(e){var n=u.options.formattingFn(e);"INPUT"===u.d.tagName?this.d.value=n:"text"===u.d.tagName||"tspan"===u.d.tagName?this.d.textContent=n:this.d.innerHTML=n},u.count=function(e){u.startTime||(u.startTime=e),u.timestamp=e;var n=e-u.startTime;u.remaining=u.duration-n,u.options.useEasing?u.countDown?u.frameVal=u.startVal-u.options.easingFn(n,0,u.startVal-u.endVal,u.duration):u.frameVal=u.options.easingFn(n,u.startVal,u.endVal-u.startVal,u.duration):u.countDown?u.frameVal=u.startVal-(u.startVal-u.endVal)*(n/u.duration):u.frameVal=u.startVal+(u.endVal-u.startVal)*(n/u.duration),u.countDown?u.frameVal=u.frameVal<u.endVal?u.endVal:u.frameVal:u.frameVal=u.frameVal>u.endVal?u.endVal:u.frameVal,u.frameVal=Math.round(u.frameVal*u.dec)/u.dec,u.printValue(u.frameVal),n<u.duration?u.rAF=requestAnimationFrame(u.count):u.callback&&u.callback()},u.start=function(e){u.initialize()&&(u.callback=e,u.rAF=requestAnimationFrame(u.count))},u.pauseResume=function(){u.paused?(u.paused=!1,delete u.startTime,u.duration=u.remaining,u.startVal=u.frameVal,requestAnimationFrame(u.count)):(u.paused=!0,cancelAnimationFrame(u.rAF))},u.reset=function(){u.paused=!1,delete u.startTime,u.initialized=!1,u.initialize()&&(cancelAnimationFrame(u.rAF),u.printValue(u.startVal))},u.update=function(e){if(u.initialize()){if(!s(e=Number(e)))return void(u.error="[CountUp] update() - new endVal is not a number: "+e);u.error="",e!==u.frameVal&&(cancelAnimationFrame(u.rAF),u.paused=!1,delete u.startTime,u.startVal=u.frameVal,u.endVal=e,u.countDown=u.startVal>u.endVal,u.rAF=requestAnimationFrame(u.count))}},u.initialize()&&u.printValue(u.startVal)};return r},void 0===(a="function"===typeof r?r.call(n,t,n,e):r)||(e.exports=a)},925:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return un}));var r,a,i,o,c,s,u,l,f,d,p,b,m,j,h,O,x,v,g,w,y,k,V=t(24),R=t(0),T=t(2),F=t(21),S=t(209),P=t(822),A=t(3),E=t.n(A),z=t(10),C=t(29),H=t(43),N=t(829),B=t(14),L=t(16),M=t.n(L),I=t(42),U=t(18),Q=t(80),D=t(214),q=t(131),_=function(){var e=Object(R.useState)([]),n=Object(C.a)(e,2),t=n[0],r=n[1],a=Object(H.c)().account,i=Object(q.a)().fastRefresh;return Object(R.useEffect)((function(){var e=function(){var e=Object(z.a)(E.a.mark((function e(){var n,t,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=D.b.map((function(e){return{address:Object(U.h)(),name:"pendingRewardToken",params:[e.pid,a]}})),e.next=3,Object(I.a)(Q,n);case 3:t=e.sent,i=D.b.map((function(e,n){return Object(B.a)(Object(B.a)({},e),{},{balance:new M.a(t[n])})})),r(i);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();a&&e()}),[a,i]),t},Y=t(830),X=Object(T.e)(F.g)(r||(r=Object(V.a)(["\n  background: rgb(0 36 51 / 35%);\n  backdrop-filter: blur(2px);\n  border: 1px solid ",";\n  box-shadow: 0 0 2rem ",",\n    0 0 2rem ",",\n    inset 0 0 2rem ",";\n"])),(function(e){return e.theme.colors.borderColor}),(function(e){return e.theme.colors.borderColor}),(function(e){return e.theme.colors.borderColor}),(function(e){return e.theme.colors.borderColor})),G=function(){var e=Object(R.useState)([]),n=Object(C.a)(e,2),t=n[0],r=n[1],a=Object(H.c)().account,i=Object(q.a)().fastRefresh;return Object(R.useEffect)((function(){var e=function(){var e=Object(z.a)(E.a.mark((function e(){var n,t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=D.b.map((function(e){return{address:Object(U.h)(),name:"pendingRewardToken",params:[e.pid,a]}})),e.next=3,Object(I.a)(Q,n);case 3:t=e.sent,r(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();a&&e()}),[a,i]),t},W=t(64),J=t(875),K=t(4),Z=function(e){var n=e.value,t=e.decimals,r=e.fontSize,a=void 0===r?"40px":r,i=e.lineHeight,o=void 0===i?"1":i,c=e.prefix,s=void 0===c?"":c,u=e.bold,l=void 0===u||u,f=e.color,d=void 0===f?"text":f,p=Object(J.useCountUp)({start:0,end:n,duration:1,separator:",",decimals:void 0!==t?t:n<0?4:n>1e5?0:3}),b=p.countUp,m=p.update,j=Object(R.useRef)(m);return Object(R.useEffect)((function(){j.current(n)}),[n,j]),Object(K.jsxs)(F.z,{bold:l,fontSize:a,style:{lineHeight:o},color:d,children:[s,b]})},$=T.e.div(a||(a=Object(V.a)(["\n  margin-bottom: 24px;\n}\n"]))),ee=function(){var e=Object(S.a)(),n=Object(H.c)().account,t=G().reduce((function(e,n){return e+new M.a(n).div(new M.a(10).pow(18)).toNumber()}),0);new M.a(t).multipliedBy(Object(W.i)()).toNumber();return n?Object(K.jsx)($,{children:Object(K.jsx)(Z,{value:t,lineHeight:"1.5"})}):Object(K.jsx)(F.z,{color:"textDisabled",style:{lineHeight:"76px"},children:e(298,"Locked")})},ne=t(33),te=t(51),re=function(e){var n=Object(R.useState)(new M.a(0)),t=Object(C.a)(n,2),r=t[0],a=t[1],i=Object(H.c)().account,o=Object(te.a)(),c=Object(q.a)().fastRefresh;return Object(R.useEffect)((function(){var n=function(){var n=Object(z.a)(E.a.mark((function n(){var t,r;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=Object(ne.a)(e,o),n.next=3,t.methods.balanceOf(i).call();case 3:r=n.sent,a(new M.a(r));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();i&&n()}),[i,e,o,c]),r},ae=t(815),ie=function(){var e=Object(S.a)(),n=re(Object(U.d)());new L.BigNumber(Object(ae.a)(n)).multipliedBy(Object(W.i)()).toNumber();return Object(H.c)().account?Object(K.jsx)(K.Fragment,{children:Object(K.jsx)(Z,{value:Object(ae.a)(n),decimals:4,fontSize:"24px",lineHeight:"36px"})}):Object(K.jsx)(F.z,{color:"textDisabled",style:{lineHeight:"54px"},children:e(298,"Locked")})},oe=Object(T.e)(X)(i||(i=Object(V.a)(["\n  background-image: url('/images/bq.png');\n  background-repeat: no-repeat;\n  background-size:50%;\n  background-position: 100% 25%;\n  min-height: 376px;\n\n"]))),ce=T.e.div(o||(o=Object(V.a)(["\n  margin-bottom: 16px;\n"]))),se=T.e.img(c||(c=Object(V.a)(["\n  margin-bottom: 16px;\n"]))),ue=T.e.div(s||(s=Object(V.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),le=T.e.div(u||(u=Object(V.a)(["\n  margin-top: 24px;\n"]))),fe=function(){var e=Object(R.useState)(!1),n=Object(C.a)(e,2),t=n[0],r=n[1],a=Object(H.c)().account,i=Object(S.a)(),o=_().filter((function(e){return e.balance.toNumber()>0})),c=Object(N.a)(o.map((function(e){return e.pid}))).onReward,s=Object(R.useCallback)(Object(z.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,e.next=4,c();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,r(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[c]);return Object(K.jsx)(oe,{children:Object(K.jsxs)(F.h,{children:[Object(K.jsx)(F.n,{size:"xl",mb:"24px",children:i(542,"Reward Mechanism")}),Object(K.jsx)(se,{src:"/controller.png",alt:"logo",width:64,height:64}),Object(K.jsxs)(ce,{children:[Object(K.jsxs)(ue,{children:[i(544,"XPLAY to Harvest"),":"]}),Object(K.jsx)(ee,{})]}),Object(K.jsxs)(ce,{children:[Object(K.jsxs)(ue,{children:[i(546,"XPLAY in Wallet"),":"]}),Object(K.jsx)(ie,{})]}),Object(K.jsx)(le,{children:a?Object(K.jsx)(F.e,{id:"harvest-all",disabled:o.length<=0||t,onClick:s,width:"100%",children:t?i(548,"Collecting XPLAY"):i(532,"Harvest all (".concat(o.length,")"))}):Object(K.jsx)(Y.a,{width:"100%"})})]})})},de=Object(T.e)(X)(l||(l=Object(V.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),pe=T.e.div(f||(f=Object(V.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),be=function(){var e=Object(S.a)(),n=function(){var e=Object(q.a)().slowRefresh,n=Object(R.useState)(),t=Object(C.a)(n,2),r=t[0],a=t[1];return Object(R.useEffect)((function(){function e(){return(e=Object(z.a)(E.a.mark((function e(){var n,t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(ne.d)(),e.next=3,n.methods.totalSupply().call();case 3:t=e.sent,a(new M.a(t));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),r}(),t=Object(ae.a)(function(e){var n=Object(R.useState)(new M.a(0)),t=Object(C.a)(n,2),r=t[0],a=t[1],i=Object(q.a)().slowRefresh,o=Object(te.a)();return Object(R.useEffect)((function(){var n=function(){var n=Object(z.a)(E.a.mark((function n(){var t,r;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=Object(ne.a)(e,o),n.next=3,t.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:r=n.sent,a(new M.a(r));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[o,e,i]),r}(Object(U.d)())),r=n?Object(ae.a)(n)-t:0,a=Object(W.a)();return Object(K.jsx)(de,{children:Object(K.jsxs)(F.h,{children:[Object(K.jsx)(F.n,{size:"xl",mb:"24px",children:e(534,"XPLAY Stats")}),Object(K.jsxs)(pe,{children:[Object(K.jsx)(F.z,{fontSize:"14px",children:e(536,"Total XPLAY Supply")}),r&&Object(K.jsx)(Z,{fontSize:"14px",value:r})]}),Object(K.jsxs)(pe,{children:[Object(K.jsx)(F.z,{fontSize:"14px",children:e(538,"Total XPLAY Burned")}),Object(K.jsx)(Z,{fontSize:"14px",decimals:0,value:t})]}),Object(K.jsxs)(pe,{children:[Object(K.jsx)(F.z,{fontSize:"14px",children:e(540,"XPLAY Released / Block")}),Object(K.jsx)(Z,{fontSize:"14px",decimals:0,value:Number(a)})]})]})})},me=t(45),je=Object(T.e)(X)(d||(d=Object(V.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]))),he=function(){var e=Object(S.a)(),n=Object(W.d)(),t=Object(W.i)(),r=Object(W.h)(),a=Object(W.j)(),i=new M.a(0);n.forEach((function(e){var n=e.lpTotalInQuoteToken;e.lpTotalInQuoteToken||(n=new M.a(0)),e.quoteTokenSymbol===me.b.BNB&&(n=r.times(e.lpTotalInQuoteToken)),e.quoteTokenSymbol===me.b.CAKE&&(n=t.times(e.lpTokenBalanceMC)),e.quoteTokenSymbol===me.b.X2P&&(n=a.times(e.lpTokenBalanceMC)),i=i.plus(n)}));var o=i?"".concat(Number(i).toLocaleString(void 0,{maximumFractionDigits:2})):"-";return Object(K.jsx)(je,{children:Object(K.jsxs)(F.h,{children:[Object(K.jsx)(F.n,{size:"lg",mb:"24px",children:e(762,"Total Value Locked (TVL)")}),i?Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(F.n,{size:"xl",children:"$".concat(o)}),Object(K.jsx)("br",{}),Object(K.jsx)(F.z,{color:"textSubtle",children:e(764,"Across all internal and external LPs and Yield Farming Pools")})]}):Object(K.jsx)(K.Fragment,{children:Object(K.jsx)(F.x,{height:66})})]})})},Oe=t(49),xe=t(825),ve=Object(T.e)(X)(p||(p=Object(V.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  background-image: url(/images/infographic.png);\n  background-size: 30%;\n  background-position: 75% 50%;\n  background-repeat: no-repeat;\n\n  @media only screen and (min-width: 792px) {\n    background-size: 70%;\n    background-position: 50% 80%;\n    background-repeat: no-repeat;\n  }\n\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),ge=Object(T.e)(F.n).attrs({size:"xl"})(b||(b=Object(V.a)(["\n  line-height: 44px;\n"]))),we=function(){Object(S.a)();var e=Object(W.d)(),n=Object(W.h)(),t=Object(W.a)(),r=Object(W.i)(),a=Object(W.j)(),i=Object(R.useRef)(Number.MIN_VALUE),o=function(){return c(e),(100*i.current).toLocaleString("en-US").slice(0,-1)},c=Object(R.useCallback)((function(o){var c,s=new M.a((null===(c=e.find((function(e){return e.pid===xe.c})))||void 0===c?void 0:c.tokenPriceVsQuote)||0);o.map((function(e){if(!e.tokenAmount||!e.lpTotalInQuoteToken||!e.lpTotalInQuoteToken)return e;var o=new M.a(t).times(e.poolWeight),c=o.times(xe.b),u=s.times(c).div(e.lpTotalInQuoteToken);if(e.quoteTokenSymbol===me.b.BUSD)u=s.times(c).div(e.lpTotalInQuoteToken).times(n);else if(e.quoteTokenSymbol===me.b.CAKE)u=c.div(e.lpTokenBalanceMC);else if(e.quoteTokenSymbol===me.b.X2P)u=c.times(r).div(e.lpTokenBalanceMC).div(a);else if(e.dual){var l=e&&s.times(o).times(xe.b).div(e.lpTotalInQuoteToken),f=e.tokenPriceVsQuote&&new M.a(e.tokenPriceVsQuote).times(e.dual.rewardPerBlock).times(xe.b).div(e.lpTotalInQuoteToken);u=l&&f&&l.plus(f)}return i.current<u.toNumber()&&(i.current=u.toNumber()),u}))}),[n,e,t,a,r]);return Object(K.jsx)(ve,{children:Object(K.jsxs)(F.h,{children:[Object(K.jsx)(F.n,{color:"contrast",size:"lg",children:"Earn up to"}),Object(K.jsx)(ge,{color:"#7645d9",children:o()?"".concat(o(),"%"):Object(K.jsx)(F.x,{animation:"pulse",variant:"rect",height:"44px"})}),Object(K.jsxs)(F.m,{justifyContent:"space-between",children:[Object(K.jsx)(F.n,{color:"contrast",size:"lg",children:"in Farms"}),Object(K.jsx)(Oe.c,{exact:!0,activeClassName:"active",to:"/farms",id:"farm-apy-cta",children:Object(K.jsx)(F.b,{mt:30,color:"primary"})})]})]})})},ye=t(366),ke=Object(T.f)(m||(m=Object(V.a)(["\n from{\n      transform: translate3d(0,0,0);\n    }\n    to{\n      transform: translate3d(0,-300%,0);\n    }\n"]))),Ve=Object(T.f)(j||(j=Object(V.a)(["\n  from{\n      transform: rotateZ(0deg);\n    }\n    to{\n      transform: rotateZ(360deg);\n    }\n"]))),Re=T.e.div(h||(h=Object(V.a)(["\n  position: relative;\n  margin-top: 1rem;\n"]))),Te=T.e.img(O||(O=Object(V.a)(["\n  width: 100%;\n"]))),Fe=T.e.img(x||(x=Object(V.a)(["\n  position: absolute;\n  left: ",";\n  top: ",";\n  width: ",";\n  z-index: ",";\n  transform-origin: 57.5% 45%;\n  animation: "," "," linear infinite;\n"])),(function(e){return e.second?"22.5%":"6%"}),(function(e){return e.second?"57.5%":"40%"}),(function(e){return e.second?"10%":"16%"}),(function(e){return e.second?1:2}),Ve,(function(e){return e.second?"3s":"10s"})),Se=T.e.img(v||(v=Object(V.a)(["\n  position: absolute;\n  top: 40%;\n  left: 2%;\n  width: 4.5%;\n  animation: "," 4s linear infinite alternate;\n"])),ke),Pe=T.e.img(g||(g=Object(V.a)(["\n  position: absolute;\n  top: 77%;\n  left: 0.5%;\n  width: 2.5%;\n  animation: "," 3s linear infinite alternate;\n"])),ke),Ae=T.e.img(w||(w=Object(V.a)(["\n  position: absolute;\n  top: 80%;\n  left: 80.1%;\n  width: 2.2%;\n  animation: "," 4s 0.5s linear infinite alternate;\n"])),ke),Ee=T.e.img(y||(y=Object(V.a)(["\n  position: absolute;\n  top: 56%;\n  left: 82.2%;\n  width: 3.2%;\n  animation: "," 5s 0.5s linear infinite alternate;\n"])),ke),ze=T.e.img(k||(k=Object(V.a)(["\n  position: absolute;\n  top: 54%;\n  left: 93.7%;\n  width: 3%;\n  animation: "," 2s 0.4s linear infinite alternate;\n"])),ke);var Ce,He,Ne,Be,Le,Me,Ie,Ue,Qe,De=function(e){var n=e.setLoading,t=Object(R.useRef)(null);return Object(R.useEffect)((function(){var e=t.current,r=function(){n(!1)};return e.addEventListener("load",r),function(){e.removeEventListener("load",r)}}),[n]),Object(K.jsxs)(Re,{children:[Object(K.jsx)(Te,{ref:t,src:"/planet/Scene.png"}),Object(K.jsx)(Fe,{second:!1,src:"/planet/Fan1.png"}),Object(K.jsx)(Fe,{second:!0,src:"/planet/Fan1.png"}),Object(K.jsx)(Se,{src:"/planet/Float.png"}),Object(K.jsx)(Pe,{src:"/planet/Float.png"}),Object(K.jsx)(Ae,{src:"/planet/Float.png"}),Object(K.jsx)(Ee,{src:"/planet/Float.png"}),Object(K.jsx)(ze,{src:"/planet/Float.png"})]})},qe=Object(T.f)(Ce||(Ce=Object(V.a)(["\n\t0%,5% {\n\t\ttransform: scaleY(0) ;\n\t}\n    10%{\n        transform: scaleY(1) ;\n    }\n\t90% {\n        transform: scaleY(1) ;\n\t}\n\t95%,100% {\n        transform: scaleY(0) ;\n\t}\n"]))),_e=Object(T.f)(He||(He=Object(V.a)(["\n   0%,5% {\n\t\ttransform: translate3d(-80vw,0,0);\n\t}\n    10%{\n        transform:  translate3d(-80vw,0,0);\n    }\n\t90% {\n        transform:  translate3d(0,0,0);\n\t}\n\t95%,100% {\n        transform: translate3d(0,0,0);\n\t}\n"]))),Ye=Object(T.f)(Ne||(Ne=Object(V.a)(["\n    0%,5% {\n\t\ttransform:  translate3d(80vw,0,0);\n\t}\n    10%{\n        transform:  translate3d(80vw,0,0);\n    }\n\t90% {\n        transform:  translate3d(0,0,0);\n\t}\n\t95%,100% {\n        transform: translate3d(0,0,0);\n\t}\n"]))),Xe=Object(T.f)(Be||(Be=Object(V.a)(["\n    0%{\n\t\topacity:0;\n\t}\n   \n\t95% {\n        opacity:0;\n\t}\n    100%{\n        opacity:1;\n    }\n"]))),Ge=T.e.div(Le||(Le=Object(V.a)(["\n  position: relative;\n  @media only screen and (max-width: 500px) {\n    padding-top: 5rem;\n  }\n"]))),We=T.e.div(Me||(Me=Object(V.a)(['\n  position: absolute;\n  top: 10%;\n  left: 10%;\n  width: 80%;\n  font-size: 2rem;\n  background-color: #00b3ff24;\n  border-radius: 10px;\n  z-index: 3;\n  :after {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    box-shadow: inset 0 0 0.1em #00b3ff, inset 0 0 0.2em #00b3ff,\n      inset 0 0 0.4em #00b3ff, 0 0 1em #00b3ff;\n    animation: '," 2s linear forwards;\n    border: 5px solid #fff;\n    border-radius: inherit;\n  }\n  @media only screen and (max-width: 500px) {\n    top: 15%;\n  }\n  @media only screen and (min-width: 568px) {\n    font-size: 3.5rem;\n  }\n  @media only screen and (min-width: 768px) {\n    font-size: 5rem;\n  }\n"])),Xe),Je=T.e.div(Ie||(Ie=Object(V.a)(["\n  overflow: hidden;\n  width: 100%;\n  /* transform: translate(300px,0); */\n  animation: "," 2s linear forwards;\n  padding: 1rem 1rem;\n"])),_e),Ke=T.e.h1(Ue||(Ue=Object(V.a)(["\n  text-align: center;\n  font-size: inherit;\n  /* white-space: nowrap; */\n  color: #fff;\n  text-shadow: 0 0 0.1em #00b3ff, 0 0 0.2em #00b3ff, 0 0 0.4em #00b3ff,\n    0 0 0.8em #00b3ff, 0 0 1.6em #00b3ff;\n  /* transform: translate(-300px,0); */\n  animation: "," 2s linear forwards;\n"])),Ye),Ze=T.e.div(Qe||(Qe=Object(V.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 100%;\n  border-radius: 10px;\n  background-color: #fff;\n  z-index: 2;\n  box-shadow: 0 0 10px #00b3ff, 0 0 20px #00b3ff, 0 0 40px #00b3ff,\n    0 0 80px #00b3ff, 0 0 120px #00b3ff;\n  animation: "," 2s linear forwards;\n"])),qe);var $e,en,nn,tn,rn,an=function(e){var n=e.videoPlayed,t=(e.setVideoPlayed,Object(R.useState)(!0)),r=Object(C.a)(t,2),a=r[0],i=r[1],o=Object(R.useState)(!0),c=Object(C.a)(o,2),s=(c[0],c[1],Object(R.useState)(n)),u=Object(C.a)(s,2);return u[0],u[1],Object(K.jsxs)(Ge,{children:[a?Object(K.jsx)(ye.a,{}):Object(K.jsx)(We,{children:Object(K.jsxs)(Je,{children:[Object(K.jsxs)(Ke,{children:["Xenon ",Object(K.jsx)("br",{})," Machine"]}),Object(K.jsx)(Ze,{})]})}),Object(K.jsx)(De,{setLoading:i})]})},on=Object(T.e)(P.a)($e||($e=Object(V.a)(['\n  background: #090e1a url("/starsBg.png");\n  padding: 0;\n  max-width: 100vw;\n']))),cn=(T.e.div(en||(en=Object(V.a)(["\n  align-items: center;\n\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  text-align: center;\n"]))),Object(T.e)(F.c)(nn||(nn=Object(V.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),Object(T.e)(F.c)(tn||(tn=Object(V.a)(["\n  align-items: start;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 4;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg}))),sn=T.e.div(rn||(rn=Object(V.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-direction: column;\n  > div {\n    width: 100%;\n    margin: 1rem;\n  }\n  @media only screen and (min-width: 800px) {\n    flex-direction: row;\n    align-items: stretch;\n    > div {\n      min-width: 45%;\n      max-width: 45%;\n      margin: 0 1rem;\n    }\n  }\n"]))),un=function(e){var n=e.videoPlayed,t=e.setVideoPlayed;Object(S.a)();return Object(K.jsxs)(on,{children:[Object(K.jsx)(an,{videoPlayed:n,setVideoPlayed:t}),Object(K.jsxs)("div",{style:{padding:"3rem 1rem"},children:[Object(K.jsxs)(sn,{children:[Object(K.jsx)(fe,{}),Object(K.jsx)(we,{})]}),Object(K.jsx)(cn,{}),Object(K.jsxs)(sn,{children:[Object(K.jsx)(be,{}),Object(K.jsx)(he,{})]})]})]})}}}]);
//# sourceMappingURL=7.736b2d3f.chunk.js.map