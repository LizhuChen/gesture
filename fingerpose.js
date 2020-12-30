!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.fp=e():t.fp=e()}("undefined"!=typeof self?self:this,(function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);var n={};function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}i.r(n),i.d(n,"ThumbsUpGesture",(function(){return bt})),i.d(n,"VictoryGesture",(function(){return w})),i.d(n,"HorizontalvictoryGesture",(function(){return I})),i.d(n,"RockGesture",(function(){return k})),i.d(n,"HorizontalrockGesture",(function(){return A})),i.d(n,"PaperGesture",(function(){return G})),i.d(n,"HorizontalpaperGesture",(function(){return J})),i.d(n,"FuckGesture",(function(){return Q})),i.d(n,"ILOVEUGesture",(function(){return Y})),i.d(n,"OkGesture",(function(){return nt})),i.d(n,"PointGesture",(function(){return dt})),i.d(n,"SixGesture",(function(){return ht})),i.d(n,"SpiderGesture",(function(){return gt}));var a={Thumb:0,Index:1,Middle:2,Ring:3,Pinky:4,all:[0,1,2,3,4],nameMapping:{0:"Thumb",1:"Index",2:"Middle",3:"Ring",4:"Pinky"},pointsMapping:{0:[[0,1],[1,2],[2,3],[3,4]],1:[[0,5],[5,6],[6,7],[7,8]],2:[[0,9],[9,10],[10,11],[11,12]],3:[[0,13],[13,14],[14,15],[15,16]],4:[[0,17],[17,18],[18,19],[19,20]]},getName:function(t){return void 0!==r(this.nameMapping[t])&&this.nameMapping[t]},getPoints:function(t){return void 0!==r(this.pointsMapping[t])&&this.pointsMapping[t]}},o={NoCurl:0,HalfCurl:1,FullCurl:2,nameMapping:{0:"No Curl",1:"Half Curl",2:"Full Curl"},getName:function(t){return void 0!==r(this.nameMapping[t])&&this.nameMapping[t]}},l={VerticalUp:0,VerticalDown:1,HorizontalLeft:2,HorizontalRight:3,DiagonalUpRight:4,DiagonalUpLeft:5,DiagonalDownRight:6,DiagonalDownLeft:7,nameMapping:{0:"Vertical Up",1:"Vertical Down",2:"Horizontal Left",3:"Horizontal Right",4:"Diagonal Up Right",5:"Diagonal Up Left",6:"Diagonal Down Right",7:"Diagonal Down Left"},getName:function(t){return void 0!==r(this.nameMapping[t])&&this.nameMapping[t]}};function d(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return u(t,e)}(t))){var e=0,i=function(){};return{s:i,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,a=!0,o=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){o=!0,r=t},f:function(){try{a||null==n.return||n.return()}finally{if(o)throw r}}}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function f(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function s(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var h=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(Object(i),!0).forEach((function(e){f(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},{HALF_CURL_START_LIMIT:60,NO_CURL_START_LIMIT:130,DISTANCE_VOTE_POWER:1.1,SINGLE_ANGLE_VOTE_POWER:.9,TOTAL_ANGLE_VOTE_POWER:1.6},{},e)}var e,i,n;return e=t,(i=[{key:"estimate",value:function(t){var e,i=[],n=[],r=d(a.all);try{for(r.s();!(e=r.n()).done;){var o,l=e.value,u=a.getPoints(l),c=[],f=[],s=d(u);try{for(s.s();!(o=s.n()).done;){var h=o.value,p=t[h[0]],g=t[h[1]],D=this.getSlopes(p,g),y=D[0],v=D[1];c.push(y),f.push(v)}}catch(t){s.e(t)}finally{s.f()}i.push(c),n.push(f)}}catch(t){r.e(t)}finally{r.f()}var m,b=[],C=[],U=d(a.all);try{for(U.s();!(m=U.n()).done;){var R=m.value,T=R==a.Thumb?1:0,L=a.getPoints(R),w=t[L[T][0]],M=t[L[T+1][1]],I=t[L[3][1]],P=this.estimateFingerCurl(w,M,I),V=this.calculateFingerDirection(w,M,I,i[R].slice(T));b[R]=P,C[R]=V}}catch(t){U.e(t)}finally{U.f()}return{curls:b,directions:C}}},{key:"getSlopes",value:function(t,e){var i=this.calculateSlope(t[0],t[1],e[0],e[1]);return 2==t.length?i:[i,this.calculateSlope(t[1],t[2],e[1],e[2])]}},{key:"angleOrientationAt",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=0,n=0,r=0;return t>=75&&t<=105?i=1*e:t>=25&&t<=155?n=1*e:r=1*e,[i,n,r]}},{key:"estimateFingerCurl",value:function(t,e,i){var n=t[0]-e[0],r=t[0]-i[0],a=e[0]-i[0],l=t[1]-e[1],d=t[1]-i[1],u=e[1]-i[1],c=t[2]-e[2],f=t[2]-i[2],s=e[2]-i[2],h=Math.sqrt(n*n+l*l+c*c),p=Math.sqrt(r*r+d*d+f*f),g=Math.sqrt(a*a+u*u+s*s),D=(g*g+h*h-p*p)/(2*g*h);D>1?D=1:D<-1&&(D=-1);var y=Math.acos(D);return(y=57.2958*y%180)>this.options.NO_CURL_START_LIMIT?o.NoCurl:y>this.options.HALF_CURL_START_LIMIT?o.HalfCurl:o.FullCurl}},{key:"estimateHorizontalDirection",value:function(t,e,i,n){return n==Math.abs(t)?t>0?l.HorizontalLeft:l.HorizontalRight:n==Math.abs(e)?e>0?l.HorizontalLeft:l.HorizontalRight:i>0?l.HorizontalLeft:l.HorizontalRight}},{key:"estimateVerticalDirection",value:function(t,e,i,n){return n==Math.abs(t)?t<0?l.VerticalDown:l.VerticalUp:n==Math.abs(e)?e<0?l.VerticalDown:l.VerticalUp:i<0?l.VerticalDown:l.VerticalUp}},{key:"estimateDiagonalDirection",value:function(t,e,i,n,r,a,o,d){var u=this.estimateVerticalDirection(t,e,i,n),c=this.estimateHorizontalDirection(r,a,o,d);return u==l.VerticalUp?c==l.HorizontalLeft?l.DiagonalUpLeft:l.DiagonalUpRight:c==l.HorizontalLeft?l.DiagonalDownLeft:l.DiagonalDownRight}},{key:"calculateFingerDirection",value:function(t,e,i,n){var r=t[0]-e[0],a=t[0]-i[0],o=e[0]-i[0],l=t[1]-e[1],u=t[1]-i[1],c=e[1]-i[1],f=Math.max(Math.abs(r),Math.abs(a),Math.abs(o)),s=Math.max(Math.abs(l),Math.abs(u),Math.abs(c)),h=0,p=0,g=0,D=s/(f+1e-5);D>1.5?h+=this.options.DISTANCE_VOTE_POWER:D>.66?p+=this.options.DISTANCE_VOTE_POWER:g+=this.options.DISTANCE_VOTE_POWER;var y=Math.sqrt(r*r+l*l),v=Math.sqrt(a*a+u*u),m=Math.sqrt(o*o+c*c),b=Math.max(y,v,m),C=t[0],U=t[1],R=i[0],T=i[1];b==y?(R=i[0],T=i[1]):b==m&&(C=e[0],U=e[1]);var L=[C,U],w=[R,T],M=this.getSlopes(L,w),I=this.angleOrientationAt(M,this.options.TOTAL_ANGLE_VOTE_POWER);h+=I[0],p+=I[1],g+=I[2];var P,V=d(n);try{for(V.s();!(P=V.n()).done;){var H=P.value,O=this.angleOrientationAt(H,this.options.SINGLE_ANGLE_VOTE_POWER);h+=O[0],p+=O[1],g+=O[2]}}catch(t){V.e(t)}finally{V.f()}return h==Math.max(h,p,g)?this.estimateVerticalDirection(u,l,c,s):g==Math.max(p,g)?this.estimateHorizontalDirection(a,r,o,f):this.estimateDiagonalDirection(u,l,c,s,a,r,o,f)}},{key:"calculateSlope",value:function(t,e,i,n){var r=(e-n)/(t-i),a=180*Math.atan(r)/Math.PI;return a<=0?a=-a:a>0&&(a=180-a),a}}])&&s(e.prototype,i),n&&s(e,n),t}();function p(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return g(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return g(t,e)}(t))){var e=0,i=function(){};return{s:i,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,a=!0,o=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){o=!0,r=t},f:function(){try{a||null==n.return||n.return()}finally{if(o)throw r}}}}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function D(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var v=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};D(this,t),this.estimator=new h(i),this.gestures=e}var e,i,n;return e=t,(i=[{key:"estimate",value:function(t,e){var i,n=[],r=this.estimator.estimate(t),d=[],u=p(a.all);try{for(u.s();!(i=u.n()).done;){var c=i.value;d.push([a.getName(c),o.getName(r.curls[c]),l.getName(r.directions[c])])}}catch(t){u.e(t)}finally{u.f()}var f,s=p(this.gestures);try{for(s.s();!(f=s.n()).done;){var h=f.value,g=h.matchAgainst(r.curls,r.directions);g>=e&&n.push({name:h.name,confidence:g})}}catch(t){s.e(t)}finally{s.f()}return{poseData:d,gestures:n}}}])&&y(e.prototype,i),n&&y(e,n),t}();function m(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var i=[],n=!0,r=!1,a=void 0;try{for(var o,l=t[Symbol.iterator]();!(n=(o=l.next()).done)&&(i.push(o.value),!e||i.length!==e);n=!0);}catch(t){r=!0,a=t}finally{try{n||null==l.return||l.return()}finally{if(r)throw a}}return i}(t,e)||C(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=C(t))){var e=0,i=function(){};return{s:i,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,a=!0,o=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){o=!0,r=t},f:function(){try{a||null==n.return||n.return()}finally{if(o)throw r}}}}function C(t,e){if(t){if("string"==typeof t)return U(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(i):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?U(t,e):void 0}}function U(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function R(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var T=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=e,this.curls={},this.directions={},this.weights=[1,1,1,1,1],this.weightsRelative=[1,1,1,1,1]}var e,i,n;return e=t,(i=[{key:"addCurl",value:function(t,e,i){void 0===this.curls[t]&&(this.curls[t]=[]),this.curls[t].push([e,i])}},{key:"addDirection",value:function(t,e,i){void 0===this.directions[t]&&(this.directions[t]=[]),this.directions[t].push([e,i])}},{key:"setWeight",value:function(t,e){this.weights[t]=e;var i=this.weights.reduce((function(t,e){return t+e}),0);this.weightsRelative=this.weights.map((function(t){return 5*t/i}))}},{key:"matchAgainst",value:function(t,e){var i=0;for(var n in t){var r=t[n],a=this.curls[n];if(void 0!==a){var o,l=b(a);try{for(l.s();!(o=l.n()).done;){var d=m(o.value,2),u=d[0],c=d[1];if(r==u){i+=c*this.weightsRelative[n];break}}}catch(t){l.e(t)}finally{l.f()}}else i+=this.weightsRelative[n]}for(var f in e){var s=e[f],h=this.directions[f];if(void 0!==h){var p,g=b(h);try{for(g.s();!(p=g.n()).done;){var D=m(p.value,2),y=D[0],v=D[1];if(s==y){i+=v*this.weightsRelative[f];break}}}catch(t){g.e(t)}finally{g.f()}}else i+=this.weightsRelative[f]}return i}}])&&R(e.prototype,i),n&&R(e,n),t}(),L=new T("victory");L.addCurl(a.Thumb,o.HalfCurl,.5),L.addCurl(a.Thumb,o.NoCurl,.5),L.addDirection(a.Thumb,l.VerticalUp,1),L.addDirection(a.Thumb,l.DiagonalUpLeft,1),L.addCurl(a.Index,o.NoCurl,1),L.addDirection(a.Index,l.VerticalUp,.75),L.addDirection(a.Index,l.DiagonalUpLeft,1),L.addCurl(a.Middle,o.NoCurl,1),L.addDirection(a.Middle,l.VerticalUp,1),L.addDirection(a.Middle,l.DiagonalUpLeft,.75),L.addCurl(a.Ring,o.FullCurl,1),L.addDirection(a.Ring,l.VerticalUp,.2),L.addDirection(a.Ring,l.DiagonalUpLeft,1),L.addDirection(a.Ring,l.HorizontalLeft,.2),L.addCurl(a.Pinky,o.FullCurl,1),L.addDirection(a.Pinky,l.VerticalUp,.2),L.addDirection(a.Pinky,l.DiagonalUpLeft,1),L.addDirection(a.Pinky,l.HorizontalLeft,.2),L.setWeight(a.Index,2),L.setWeight(a.Middle,2);var w=L,M=new T("horizontalvictory");M.addCurl(a.Thumb,o.HalfCurl,.5),M.addCurl(a.Thumb,o.NoCurl,.5),M.addDirection(a.Thumb,l.VerticalUp,1),M.addDirection(a.Thumb,l.DiagonalUpLeft,1),M.addDirection(a.Thumb,l.DiagonalUpRight,1),M.addCurl(a.Index,o.NoCurl,1),M.addDirection(a.Index,l.VerticalUp,.75),M.addDirection(a.Index,l.HorizontalLeft,1),M.addDirection(a.Index,l.HorizontalRight,1),M.addCurl(a.Middle,o.NoCurl,1),M.addDirection(a.Middle,l.VerticalUp,1),M.addDirection(a.Index,l.HorizontalLeft,1),M.addDirection(a.Index,l.HorizontalRight,1),M.addCurl(a.Ring,o.FullCurl,1),M.addDirection(a.Ring,l.VerticalUp,.2),M.addDirection(a.Ring,l.DiagonalUpLeft,1),M.addDirection(a.Ring,l.HorizontalLeft,.2),M.addDirection(a.Ring,l.DiagonalUpRight,1),M.addDirection(a.Ring,l.HorizontalRight,.2),M.addCurl(a.Pinky,o.FullCurl,1),M.addDirection(a.Pinky,l.VerticalUp,.2),M.addDirection(a.Pinky,l.DiagonalUpLeft,1),M.addDirection(a.Pinky,l.HorizontalLeft,.2),M.addDirection(a.Ring,l.DiagonalUpRight,1),M.addDirection(a.Ring,l.HorizontalRight,.2),M.setWeight(a.Index,2),M.setWeight(a.Middle,2);var I=M,P=new T("rock");P.addCurl(a.Thumb,o.HalfCurl,1),P.addDirection(a.Thumb,l.VerticalDown,1),P.addDirection(a.Thumb,l.DiagonalUpLeft,.25),P.addDirection(a.Thumb,l.DiagonalUpRight,.25);for(var V=0,H=[a.Index,a.Middle,a.Ring,a.Pinky];V<H.length;V++){var O=H[V];P.addCurl(O,o.FullCurl,1),P.addDirection(O,l.HorizontalLeft,1),P.addDirection(O,l.HorizontalRight,1)}var k=P,x=new T("horizontalrock");x.addCurl(a.Thumb,o.HalfCurl,1),x.addDirection(a.Thumb,l.VerticalUp,.2),x.addDirection(a.Thumb,l.DiagonalUpLeft,.25),x.addDirection(a.Thumb,l.DiagonalUpRight,.25);for(var S=0,z=[a.Index,a.Middle,a.Ring,a.Pinky];S<z.length;S++){var N=z[S];x.addCurl(N,o.FullCurl,1),x.addDirection(N,l.VerticalUp,.2),x.addDirection(N,l.DiagonalUpLeft,1),x.addDirection(N,l.HorizontalLeft,.2),x.addDirection(N,l.DiagonalUpRight,1),x.addDirection(N,l.HorizontalRight,.2)}for(var A=x,_=new T("paper"),E=0,j=[a.Thumb,a.Index,a.Middle,a.Ring,a.Pinky];E<j.length;E++){var F=j[E];_.addCurl(F,o.NoCurl,1),_.addDirection(F,l.VerticalUp,1),_.addDirection(F,l.DiagonalUpLeft,.25),_.addDirection(F,l.DiagonalUpRight,.25)}for(var G=_,W=new T("horizontalpaper"),q=0,$=[a.Thumb,a.Index,a.Middle,a.Ring,a.Pinky];q<$.length;q++){var B=$[q];W.addCurl(B,o.NoCurl,1),W.addDirection(B,l.VerticalUp,1),W.addDirection(B,l.HorizontalLeft,1),W.addDirection(B,l.HorizontalRight,1)}var J=W,K=new T("fuck");K.addCurl(a.Thumb,o.HalfCurl,.5),K.addCurl(a.Thumb,o.NoCurl,.5),K.addDirection(a.Thumb,l.VerticalUp,1),K.addDirection(a.Thumb,l.DiagonalUpLeft,1),K.addCurl(a.Index,o.HalfCurl,.75),K.addDirection(a.Index,l.VerticalUp,.2),K.addDirection(a.Index,l.DiagonalUpLeft,1),K.addDirection(a.Index,l.HorizontalLeft,.2),K.addCurl(a.Middle,o.NoCurl,1),K.addDirection(a.Middle,l.VerticalUp,1),K.addDirection(a.Middle,l.DiagonalUpLeft,.75),K.addCurl(a.Ring,o.FullCurl,1),K.addDirection(a.Ring,l.VerticalUp,.2),K.addDirection(a.Ring,l.DiagonalUpLeft,1),K.addDirection(a.Ring,l.HorizontalLeft,.2),K.addCurl(a.Pinky,o.FullCurl,1),K.addDirection(a.Pinky,l.VerticalUp,.2),K.addDirection(a.Pinky,l.DiagonalUpLeft,1),K.addDirection(a.Pinky,l.HorizontalLeft,.2);var Q=K,X=new T("iloveu");X.addCurl(a.Thumb,o.NoCurl,1),X.addDirection(a.Thumb,l.VerticalUp,1),X.addDirection(a.Thumb,l.DiagonalUpLeft,.5),X.addDirection(a.Thumb,l.DiagonalUpRight,.5),X.addCurl(a.Index,o.NoCurl,1),X.addDirection(a.Index,l.VerticalUp,1),X.addDirection(a.Index,l.DiagonalUpLeft,.75),X.addCurl(a.Middle,o.FullCurl,1),X.addDirection(a.Middle,l.VerticalUp,1),X.addDirection(a.Middle,l.DiagonalUpLeft,.75),X.addDirection(a.Middle,l.HorizontalLeft,.2),X.addCurl(a.Ring,o.FullCurl,1),X.addDirection(a.Ring,l.VerticalUp,.2),X.addDirection(a.Ring,l.DiagonalUpLeft,1),X.addDirection(a.Ring,l.HorizontalLeft,.2),X.addCurl(a.Pinky,o.NoCurl,1),X.addDirection(a.Pinky,l.VerticalUp,1),X.addDirection(a.Pinky,l.DiagonalUpLeft,.75);var Y=X,Z=new T("ok");Z.addCurl(a.Thumb,o.NoCurl,.5),Z.addDirection(a.Thumb,l.VerticalUp,1),Z.addDirection(a.Thumb,l.DiagonalUpRight,.75),Z.addDirection(a.Thumb,l.DiagonalUpLeft,.75),Z.addCurl(a.Index,o.HalfCurl,1),Z.addDirection(a.Index,l.VerticalDown,1),Z.addDirection(a.Index,l.DiagonalDownLeft,.75),Z.addDirection(a.Index,l.DiagonalDownRight,.75);for(var tt=0,et=[a.Middle,a.Ring,a.Pinky];tt<et.length;tt++){var it=et[tt];Z.addCurl(it,o.NoCurl,.75),Z.addDirection(it,l.VerticalUp,1),Z.addDirection(it,l.DiagonalUpLeft,.25),Z.addDirection(it,l.DiagonalUpRight,.25)}var nt=Z,rt=new T("point");rt.addCurl(a.Thumb,o.NoCurl,1),rt.addDirection(a.Thumb,l.VerticalUp,1),rt.addDirection(a.Thumb,l.DiagonalUpLeft,.25),rt.addDirection(a.Thumb,l.DiagonalUpRight,.25),rt.addCurl(a.Index,o.NoCurl,1),rt.addDirection(a.Index,l.HorizontalLeft,1),rt.addDirection(a.Index,l.HorizontalRight,1);for(var at=0,ot=[a.Middle,a.Ring,a.Pinky];at<ot.length;at++){var lt=ot[at];rt.addCurl(lt,o.FullCurl,1),rt.addDirection(lt,l.HorizontalLeft,1),rt.addDirection(lt,l.HorizontalRight,1)}var dt=rt,ut=new T("six");ut.addCurl(a.Thumb,o.NoCurl,1),ut.addDirection(a.Thumb,l.VerticalUp,.75),ut.addDirection(a.Thumb,l.DiagonalUpLeft,.25),ut.addDirection(a.Thumb,l.DiagonalUpRight,.25),ut.addCurl(a.Pinky,o.FullCurl,1),ut.addDirection(a.Pinky,l.VerticalDown,1),ut.addDirection(a.Pinky,l.DiagonalUpLeft,.5),ut.addDirection(a.Pinky,l.DiagonalUpRight,.5);for(var ct=0,ft=[a.Index,a.Middle,a.Ring];ct<ft.length;ct++){var st=ft[ct];ut.addCurl(st,o.FullCurl,1)}var ht=ut,pt=new T("spider");pt.addCurl(a.Thumb,o.HalfCurl,.5),pt.addDirection(a.Thumb,l.VerticalUp,1),pt.addDirection(a.Thumb,l.DiagonalUpLeft,1),pt.addCurl(a.Index,o.NoCurl,1),pt.addDirection(a.Index,l.VerticalUp,1),pt.addDirection(a.Index,l.DiagonalUpLeft,.75),pt.addCurl(a.Middle,o.FullCurl,1),pt.addDirection(a.Middle,l.VerticalUp,1),pt.addDirection(a.Middle,l.DiagonalUpLeft,.75),pt.addDirection(a.Middle,l.HorizontalLeft,.2),pt.addCurl(a.Ring,o.FullCurl,1),pt.addDirection(a.Ring,l.VerticalUp,.2),pt.addDirection(a.Ring,l.DiagonalUpLeft,1),pt.addDirection(a.Ring,l.HorizontalLeft,.2),pt.addCurl(a.Pinky,o.NoCurl,1),pt.addDirection(a.Pinky,l.VerticalUp,1),pt.addDirection(a.Pinky,l.DiagonalUpLeft,.75);var gt=pt,Dt=new T("thumbs_up");Dt.addCurl(a.Thumb,o.NoCurl,1),Dt.addDirection(a.Thumb,l.VerticalUp,1),Dt.addDirection(a.Thumb,l.DiagonalUpLeft,.25),Dt.addDirection(a.Thumb,l.DiagonalUpRight,.25);for(var yt=0,vt=[a.Index,a.Middle,a.Ring,a.Pinky];yt<vt.length;yt++){var mt=vt[yt];Dt.addCurl(mt,o.FullCurl,1),Dt.addDirection(mt,l.HorizontalLeft,1),Dt.addDirection(mt,l.HorizontalRight,1)}var bt=Dt;e.default={GestureEstimator:v,GestureDescription:T,Finger:a,FingerCurl:o,FingerDirection:l,Gestures:n}}]).default}));