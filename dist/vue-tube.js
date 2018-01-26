!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vue-tube",[],t):"object"==typeof exports?exports["vue-tube"]=t():e["vue-tube"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"vue-tube",mounted:function(){var e=this;this.player=new YT.Player("player",{height:this.height,width:this.width,videoId:this.videoid,playerVars:{list:this.list,listType:this.listType,hl:this.hl,loop:this.loop,rel:this.rel,autoplay:this.autoplay},events:{onReady:function(e){console.log("### Ready")},onStateChange:function(t){t.data===YT.PlayerState.ENDED?e.$emit("ended"):t.data===YT.PlayerState.PAUSED?e.$emit("paused"):t.data===YT.PlayerState.PLAYING&&e.$emit("played")}}})},props:{width:{type:Number,default:480},height:{type:Number,default:320},autoplay:{type:Number,default:0,validator:function(e){return 0===Number(e)||1===Number(e)}},videoid:{type:String,required:!0},hl:{type:String,default:"en"},loop:{type:Number,default:0,validator:function(e){return 0===Number(e)||1===Number(e)}},rel:{type:Number,default:0,validator:function(e){return 0===Number(e)||1===Number(e)}},listType:{type:String,required:!1,validator:function(e){return"search"===e||"user_uploades"===e||"playlist"===e}},list:{type:String,required:!1},origin:{type:String,default:"http://localhost:8080"}},computed:{stylePlayer:function(){return{width:this.width,height:this.height}},videoSrc:function(){if(this.videoid&&""!==this.videoid.trim()){if(1===this.loop)return"https://www.youtube.com/embed/"+this.videoid+"?origin="+this.origin+"&enablejsapi=1&autoplay="+this.autoplay+"&modestbranding=1&fs=1&hl="+this.hl+"&loop="+this.loop+"&rel="+this.rel+"&playlist="+this.videoid;if(0===this.loop)return"https://www.youtube.com/embed/"+this.videoid+"?origin="+this.origin+"&enablejsapi=1&autoplay="+this.autoplay+"&modestbranding=1&fs=1&hl="+this.hl+"&loop="+this.loop+"&rel="+this.rel;throw new Error("loop props must be 0 or 1.")}if(""!==this.listType.trim()&&""!==this.list.trim())return"https://www.youtube.com/embed?origin="+this.origin+"&enablejsapi=1&listType="+this.listType+"&list="+this.list+"&autoplay="+this.autoplay+"&modestbranding=1&fs=1&hl="+this.hl+"&loop="+this.loop+"&rel="+this.rel;throw new Error("Invalid props: either videoid or (listType, list) must be assigned.")}},methods:{playVideo:function(){this.player.playVideo()},stopVideo:function(){this.player.stopVideo()},pauseVideo:function(){this.player.pauseVideo()},mute:function(){this.player.mute()},unMute:function(){this.player.unMute()},setVolume:function(e){e>=0&&e<=100&&this.player.setVolume(e)},getVolume:function(){return this.player.getVolume()},setSize:function(e,t){this.player.setSize(e,t)}}}},function(e,t,n){"use strict";function r(e){u||n(2)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),o=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);var a=n(8),u=!1,l=n(7),d=r,p=l(o.a,a.a,!1,d,"data-v-75140418",null);p.options.__file="src\\VueTube.vue",t.default=p.exports},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(5)("1238bc03",r,!1,null)},function(e,t,n){t=e.exports=n(4)(!1),t.push([e.i,"\n.styleContainer[data-v-75140418] { margin:0; padding:0;\n}\n",""])},function(e,t){function n(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=r(i);return[n].concat(i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=d[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],i=0;i<n.parts.length;i++)s.push(o(n.parts[i]));d[n.id]={id:n.id,refs:1,parts:s}}}}function i(){var e=document.createElement("style");return e.type="text/css",p.appendChild(e),e}function o(e){var t,n,r=document.querySelector("style["+m+'~="'+e.id+'"]');if(r){if(h)return y;r.parentNode.removeChild(r)}if(g){var o=c++;r=f||(f=i()),t=s.bind(null,r,o,!1),n=s.bind(null,r,o,!0)}else r=i(),t=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function s(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function a(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),v.ssrId&&e.setAttribute(ssridKey,t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(6),d={},p=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,c=0,h=!1,y=function(){},v=null,m="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,i){h=n,v=i||{};var o=l(e,t);return r(o),function(t){for(var n=[],i=0;i<o.length;i++){var s=o[i],a=d[s.id];a.refs--,n.push(a)}t?(o=l(e,t),r(o)):o=[];for(var i=0;i<n.length;i++){var a=n[i];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete d[a.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=o[0],a=o[1],u=o[2],l=o[3],d={id:e+":"+i,css:a,media:u,sourceMap:l};r[s]?r[s].parts.push(d):n.push(r[s]={id:s,parts:[d]})}return n}},function(e,t){e.exports=function(e,t,n,r,i,o){var s,a=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(s=e,a=e.default);var l="function"==typeof a?a.options:a;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),i&&(l._scopeId=i);var d;if(o?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=d):r&&(d=r),d){var p=l.functional,f=p?l.render:l.beforeCreate;p?(l._injectStyles=d,l.render=function(e,t){return d.call(t),f(e,t)}):l.beforeCreate=f?[].concat(f,d):[d]}return{esModule:s,exports:a,options:l}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"styleContainer"},[n("iframe",{style:e.stylePlayer,attrs:{id:"player",type:"text/html",width:e.width,height:e.height,src:e.videoSrc,title:e.videoid,frameBorder:"0",allowFullScreen:"1"}})])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o}])});