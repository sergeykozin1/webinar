/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMCont�K�     �K�                     P��             `�     XL�             L�      @      L�             chEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},�K�     �K�                     P��             `�     XL�             L�      @      L�             .propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniq�K�     �K�                     P��             `�     XL�             L�      @      L�             ++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.ex�K�     �K�                     P��             `�     XL�             L�      @      L�             his[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);
/*!
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function($) {
    $.cookie = function(key, value, options) {

        // key and at least value given, set cookie...
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
            options = $.extend({}, options);

            if (value === null || value === undefined) {
                options.expires = -1;
            }

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = String(value);

            return (document.cookie = [
                encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // key and possibly options given, get cookie...
        options = value || {};
        var decode = options.raw ? function(s) { return s; } : decodeURIComponent;

        var pairs = document.cookie.split('; ');
        for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
            if (decode(pair[0]) === key) return decode(pair[1] || ''); // IE saves cookies with empty string as "c; ", e.g. without "=" as opposed to EOMB, thus pair[1] may be undefined
        }
        return null;
    };
})(jQuery);

/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(r,G,f,v){var J=f("html"),n=f(r),p=f(G),b=f.fancybox=function(){b.open.apply(this,arguments)},I=navigator.userAgent.match(/msie/i),B=null,s=G.createTouch!==v,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},q=function(a){return a&&"string"===f.type(a)},E=function(a){return q(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&E(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},w=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(I?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,
c.metadata())):k=c);g=d.href||k.href||(q(c)?c:null);h=d.title!==v?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));q(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":q(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(q(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&
k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==v&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||
b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=
setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(q(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=b.current;
d&&(q(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==v&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},e.dim,k)))},update:function(a){var d=
a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(B),B=null);b.isOpen&&!B&&(B=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),B=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),
b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:n.scrollLeft(),
y:n.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&r.innerWidth?r.innerWidth:n.width(),d.h=s&&r.innerHeight?r.innerHeight:n.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(n.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=e.target||e.srcElement;
if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==v)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&"hidden"===h[0].style.overflow)&&
(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,
{},b.helpers[d].defaults,e),c)});p.trigger(a)}},isImage:function(a){return q(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return q(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,
mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=
!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,w(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");
"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=
this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);
f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,
e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,
outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case "image":e=a.tpl.image.replace("{href}",
g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow","yes"===k?"scroll":
"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,p=h.maxHeight,s=h.scrolling,q=h.scrollOutside?
h.scrollbarWidth:0,x=h.margin,y=l(x[1]+x[3]),r=l(x[0]+x[2]),v,z,t,C,A,F,B,D,H;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x=l(k.outerWidth(!0)-k.width());v=l(k.outerHeight(!0)-k.height());z=y+x;t=r+v;C=E(c)?(a.w-z)*l(c)/100:c;A=E(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(H=h.content,h.autoHeight&&1===H.data("ready"))try{H[0].contentWindow.document.location&&(g.width(C).height(9999),F=H.contents().find("body"),q&&F.css("overflow-x","hidden"),A=F.outerHeight(!0))}catch(G){}}else if(h.autoWidth||
h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(A),h.autoWidth&&(C=g.width()),h.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp");c=l(C);j=l(A);D=C/A;m=l(E(m)?l(m,"w")-z:m);n=l(E(n)?l(n,"w")-z:n);u=l(E(u)?l(u,"h")-t:u);p=l(E(p)?l(p,"h")-t:p);F=n;B=p;h.fitToView&&(n=Math.min(a.w-z,n),p=Math.min(a.h-t,p));z=a.w-y;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/D)),j>p&&(j=p,c=l(j*D)),c<m&&(c=m,j=l(c/D)),j<u&&(j=u,c=l(j*D))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&
"iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,p)));if(h.fitToView)if(g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height(),h.aspectRatio)for(;(a>z||y>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(p,j-10)),c=l(j*D),c<m&&(c=m,j=l(c/D)),c>n&&(c=n,j=l(c/D)),g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height();else c=Math.max(m,Math.min(c,c-(a-z))),j=Math.max(u,Math.min(j,j-(y-r)));q&&("auto"===s&&j<A&&c+x+q<z)&&(c+=q);g.width(c).height(j);e.width(c+x);a=e.width();
y=e.height();e=(a>z||y>r)&&c>m&&j>u;c=h.aspectRatio?c<F&&j<B&&c<C&&j<A:(c<F||j<B)&&(c<C||j<A);f.extend(h,{dim:{width:w(a),height:w(y)},origWidth:C,origHeight:A,canShrink:e,canExpand:c,wPadding:x,hPadding:v,wrapSpace:y-k.outerHeight(!0),skinSpace:k.height()-j});!H&&(h.autoHeight&&j>u&&j<p&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&
!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=w(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=w(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&(d.preventDefault(),
b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=
a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):
(c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:w(c.top-h*a.topRatio),left:w(c.left-j*a.leftRatio),width:w(f+j),height:w(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===
f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,
{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=w(l(e[g])-200),c[g]="+=200px"):(e[g]=w(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=
b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=
f('<div class="fancybox-overlay"></div>').appendTo(b.coming?b.coming.parent:a.parent);this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(n.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?
b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){var a,b;n.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),a=n.scrollTop(),b=n.scrollLeft(),this.el.removeClass("fancybox-lock"),n.scrollTop(a).scrollLeft(b));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");I?(b=Math.max(G.documentElement.offsetWidth,G.body.offsetWidth),
p.width()>b&&(a=p.width())):p.width()>n.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&(this.fixed&&b.fixed)&&(e||(this.margin=p.height()>n.height()?f("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var e,c;b.locked&&(!1!==this.margin&&(f("*").filter(function(){return"fixed"===
f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),e=n.scrollTop(),c=n.scrollLeft(),this.el.addClass("fancybox-lock"),n.scrollTop(e).scrollLeft(c));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=
b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(q(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),I&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,
e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):p.undelegate(c,"click.fb-start").delegate(c+
":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===v&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===v){a=f.support;d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e=20===
d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(r).width();J.addClass("fancybox-lock-test");d=f(r).width();J.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);

(function(e){"use strict";var t=e.fancybox,n=function(t,n,r){r=r||"";if(e.type(r)==="object"){r=e.param(r,true)}e.each(n,function(e,n){t=t.replace("$"+e,n||"")});if(r.length){t+=(t.indexOf("?")>0?"&":"?")+r}return t};t.helpers.media={defaults:{youtube:{matcher:/(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"opaque",enablejsapi:1},type:"iframe",url:"//www.youtube.com/embed/$3"},vimeo:{matcher:/(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},type:"iframe",url:"//player.vimeo.com/video/$1"},metacafe:{matcher:/metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,params:{autoPlay:"yes"},type:"swf",url:function(t,n,r){r.swf.flashVars="playerVars="+e.param(n,true);return"//www.metacafe.com/fplayer/"+t[1]+"/.swf"}},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:"swf",url:"//www.dailymotion.com/swf/video/$1"},twitvid:{matcher:/twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,params:{autoplay:0},type:"iframe",url:"//www.twitvid.com/embed.php?guid=$1"},twitpic:{matcher:/twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,type:"image",url:"//twitpic.com/show/full/$1/"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},google_maps:{matcher:/maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,type:"iframe",url:function(e){return"//maps.google."+e[1]+"/"+e[3]+""+e[4]+"&output="+(e[4].indexOf("layer=c")>0?"svembed":"embed")}}},beforeLoad:function(t,r){var i=r.href||"",s=false,o,u,a,f;for(o in t){if(t.hasOwnProperty(o)){u=t[o];a=i.match(u.matcher);if(a){s=u.type;f=e.extend(true,{},u.params,r[o]||(e.isPlainObject(t[o])?t[o].params:null));i=e.type(u.url)==="function"?u.url.call(this,a,f,r):n(u.url,a,f);break}}}if(s){r.href=i;r.type=s;r.autoHeight=false}}}})(jQuery);
$(function() {
    $('form[data-form="login"]').each(function() {
        var $form = $(this),
            $submit,
            abTest = $form.find('input[name=ab_test_id]').attr('value'),
            dataLayerTitle;

        switch ($form.attr('action')) {
            case '/login/' :
                dataLayerTitle = 'Авторизация';
                break;
            case '/registration/' :
                dataLayerTitle = 'Регистрация';
                break;
            case '/request/auto/' :
                dataLayerTitle = 'Автозаявка';
                break;
            case '/user/passrecover/' :
                dataLayerTitle = 'Восстановление пароля';
                break;
            default:
                dataLayerTitle = undefined;
                break;
        }

        $form.on('submit', function() {
            if (Bridge.isMobile) {
                $submit = $form.find('input[type=submit]');

                $form.find('.item').removeClass('invalid').find('.error').empty();
                $form.find('.error-main').empty().hide();
            } else {
                $submit = $form.find('.js-form-submit');

                $form.find('.popup .popup__error').empty();
                $form.find('.item .data-input').removeClass('error');
                $form.find('.item .data-error').empty();
            }

            if ($submit.hasClass('disabled')) {
                return false;
            }

            $.ajax({
                type: 'POST',
                url: $form.attr('action'),
                data: $form.serialize(),
                beforeSend: function() {
                    $submit.addClass('disabled');
                },
                success: function(result) {
                    $submit.removeClass('disabled');

                    if (result['redirect']) {
                        if (result['abPage'] && abTest) {
                            Bm.ab.invokeTest(abTest, result['abPage']['uri'], result);

                            return false;
                        }

                        window.location.href = result['redirect'];
                    } else {
                        var captchaImage = $form.find('.captchaImage'),
                            captchaBlock = $form.find('.captchaBlock'),
                            captchaWord = $form.find('.captchaWord'),
                            captchaCode = $form.find('.captchaCode');

                        if (result['status'] == 'error') {
                            if ((result['rawMessage']) instanceof Object && result['rawMessage'][0] == undefined) {
                                for (var name in result['rawMessage']) {
                                    var $input = $form.find('input[name=' + name + ']');

                                    for (var i in result['rawMessage'][name]) {
                                        var message = result['rawMessage'][name][i];

                                        break;
                                    }

                                    if (Bridge.isMobile) {
                                        $input.parents('.item').addClass('invalid').find('.error').text(message);
                                    } else {
                                        $input.addClass('error').parents('.item').find('.data-error').text(message);
                                    }
                                }
                            } else {
                                var message = result['rawMessage'];

                                if ((result['rawMessage']) instanceof Array) {
                                    message = result['rawMessage'].shift();
                                }

                                var $input2 = $form.find('input').eq(0);

                                if (Bridge.isMobile) {
                                    $input2.parents('.item').addClass('invalid').find('.error').text(message);
                                } else {
                                    $input2.addClass('error').parents('.item').find('.data-error').text(message);
                                }

                                if ('captcha_url' in result) {
                                    captchaImage.attr('src', result['captcha_url']);
                                    captchaBlock.removeClass('hidden');

                                    if (result['wrong_code']) {
                                        captchaWord.addClass('error').focus();
                                    }

                                    $form.find('.captchaCode').val(result['captcha_code']);
                                    captchaWord.val('');
                                } else {
                                    captchaWord.removeClass('error').val('');
                                    captchaBlock.addClass('hidden');
                                    captchaCode.val('');
                                }
                            }
                            dataLayer.push({
                                    'event': 'mixdata',
                                    'eventCategory': 'Forms',
                                    'eventAction': 'response',
                                    'eventContent': dataLayerTitle,
                                    'eventLabel': 'unsuccessful',
                                    'errorCode': 'Ошибка валидации'
                                }
                            );
                        } else if (result['status'] == 'success') {
                            captchaBlock.addClass('hidden');
                            captchaWord.removeClass('error').val('');
                            captchaCode.val('');

                            if (Bridge.isMobile) {
                                $form.prepend('<div class="popup__center">' + result.message + '</div>');

                            } else {
                                $form.prepend('<div class="popup__text">' + result.message + '</div>');
                            }

                            ga('send', 'event', 'button', 'start_reg_block');
                            ga('send', 'pageview', '/start_registrarion/button');

                            dataLayer.push({
                                    'event': 'mixdata',
                                    'eventCategory': 'Forms',
                                    'eventAction': 'response',
                                    'eventContent': dataLayerTitle,
                                    'eventLabel': 'successful'
                                }
                            );
                        }

                        $submit.removeClass('disabled');
                    }
                },
                error: function(result) {
                    $submit.removeClass('disabled');
                    $form.find('.error-main').text('Ошибка загрузки').show();
                    dataLayer.push({
                            'event': 'mixdata',
                            'eventCategory': 'Forms',
                            'eventAction': 'response',
                            'eventContent': dataLayerTitle,
                            'eventLabel': 'unsuccessful',
                            'errorCode': result.status + ' ' + result.statusText
                        }
                    );
                }
            });

            return false;
        });
    });
});
// bm global - moved from functions.js
Bm = {
    isMobile: false, // check on DOM ready (functions.js)
    mobile: {
        // init => mobile.js
    },
    social: {

    },
    user: {

    },
    feed: {

        /**
         * Работа с историей
         */
        changeHistory: function($el, event) {
            if (event.metaKey || event.ctrlKey || event.which == 2) {
                return false;
            }

            var post = $el.parents('.post').data('id'),
                path = window.location.pathname + '?from=' + post,
                $loading = $('.screen-loading'),
                $loadingIcon = $loading.children('.icon'),
                rotate,
                $content = Bridge.isMobile ? $('.js-main') : $('#main, #footer'),
                scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

            $content.addClass('hidden');
            window.scrollTo(0, 0);

            setTimeout(function() {
                $loading.removeClass('hidden');
                rotate = rotateStart($loadingIcon);
            }, 5000);

            $(document).on('click', '.js-stop-screen-loading', function() {
                $loading.addClass('hidden');
                $content.removeClass('hidden');
                rotateStop($loadingIcon, rotate);
                window.scrollTo(0, scrollTop);
            });

            window.history.replaceState(null, null, path);
        },

        /**
         * Читать далее
         */
        readMore: function($button) {
            var $wrapper = $button.parents('.js-post-text-wrapper');
            var $full = $wrapper.find('.js-post-text-full');

            $full.toggleClass('hidden');

            if ($button.data('long-post')) {
                $button.removeClass('js-post-text-readmore');
            } else {
                $button.toggleClass('hidden');
            }
        }
    },
    ajax: function($item, data) {
        if ($item.hasClass('ajax-disabled')) {
            return false;
        }

        var $loading = $item.children('.loading'),
            rotate;

        $.ajax({
            type: data.type || 'POST',
            url: data.url,
            data: data.data,
            timeout: 30000,
            beforeSend: function(result) {
                $item.addClass('ajax-disabled');
                rotate = rotateStart($loading);

                if (data.beforeSend) {
                    data.beforeSend(result);
                }
            },
            success: function(result) {
                if (data.success) {
                    data.success(result);
                }
            },
            error: function(result) {
                if (data.error) {
                    data.error(result);
                }
            }
        }).always(function() {
            $item.removeClass('ajax-disabled');
            rotateStop($loading, rotate);
        });
    },
    fancybox: {
        modals: {
            standart: {
                options: {
                    maxWidth	: 800,
                    padding     : 0,
                    height		: 'auto',
                    width       : 'auto',
                    openEffect  : 'none',
                    closeEffect : 'none',
                    autoSize    : false,
                    fitToView   : false,
                    closeBtn    : false,
                    scrolling   : false
                }
            },
            auth: {
                id: '#popup_auth',
                selector: '.fancybox-popup_login',
                options: {
                    padding     : 0,
                    height		: 'auto',
                    width       : 'auto',
                    openEffect  : 'none',
                    closeEffect : 'none',
                    autoSize    : false,
                    fitToView   : false,
                    closeBtn    : false,
                    beforeClose : function() {
                        $('.popup .popup__error').empty().hide();
                        $('.popup .item .input').removeClass('error');
                        $('.popup .item .input-error').empty().hide();
                    },
                    afterShow: function() {
                        if (this.href === '#popup_auth') {
                            $('#popup_auth input[name="login"]').focus();
                        } else if (this.href === '#popup_registration') {
                            $('#popup_registration input[name="email"]').focus();
                        } else if (this.href === '#popup_pwd_remind') {
                            $('#popup_pwd_remind input[name="email"]').focus();
                        }
                    }
                },
                onInit: function() {
                    $(this.selector).fancybox(this.options);
                },
                open: function(title, successUrl) {
                    var $container = $(this.id);

                    successUrl = successUrl || null;
                    title = title || null;

                    if(successUrl) {
                        $container.find('input[name=success_url]').val(successUrl);
                    }
                    if(title) {
                        $container.find('h3').html(title);
                    }

                    $.fancybox.open(this.id, this.options);
                }
            },
            media: {
                selector: '[data-video="fancybox"]',
                options: {
                    openEffect  : 'none',
                    closeEffect : 'none',
                    type        : 'iframe',
                    helpers : {
                        media : {}
                    },
                    closeBtn: false,
                    beforeShow: function(){
                        this.skin.append('<div class="fancyboxClose"></div>');
                    }
                },
                onInit: function() {
                    $(this.selector).fancybox(this.options);
                }
            }
        },
        open: function(id) {
            $.fancybox.open({href: '#' + id}, Bm.fancybox.modals.standart.options);
        }
    },
    search: {
        show: function($el) {
            if ($el && $el.hasClass('js-disabled')) {
                return false;
            }

            var $popup = $('.search-popup_block'),
                $overlay = $('.search-overlay'),
                $body = $('body'),
                $input = $popup.find('.search-popup_input'),
                pageScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

            $body.css({'overflow': 'hidden'}).scrollTop(pageScrollTop);

            $popup.removeClass('hidden');
            $overlay.removeClass('hidden');
            $input.focus();
        },
        hide: function() {
            var $popup = $('.search-popup_block'),
                $overlay = $('.search-overlay'),
                $body = $('body');

            $body.css('overflow', 'auto');

            $popup.addClass('hidden');
            $overlay.addClass('hidden');
        }
    },
    menu: {
        show: function() {
            $('body').addClass('position-fixed');
            $('.header-menu-overlay').show();
            $('.header-entry-left-main-block').show().animate({
                'marginLeft' : '-500px',
                'opacity' : '1'
            }, 200);
        },
        hide: function() {
            $('body').removeClass('position-fixed');
            $('.header-entry-left-main-block').animate({
                'opacity' : '0',
                'marginLeft' : '-100%'
            }, 200);
            $('.header-menu-overlay').hide(200);
        }
    },
    switch: {

    },
    scroll: {
        value: 0,
        getValue: function() {
            Bm.scroll.value = document.documentElement.scrollTop || document.body.scrollTop;
        },
        setValue: function(value) {
            if (value) {
                window.scrollTo(0, value);
            } else {
                window.scrollTo(0, Bm.scroll.value);
                Bm.scroll.value = 0;
            }
        }
    },
    lock: function() {
        $('body').addClass('overflow-hidden').addClass('position-fixed');
    },
    unlock: function() {
        $('body').removeClass('overflow-hidden').removeClass('position-fixed');
    }
};

Bm.ab = (function(module) {
    var abPages = [];

    module.addPage = function(id, pages) {
        if(abPages[id]) {
            console.log('AbTest ' + id + ' already registered');
        } else {
            abPages[id] = pages;
        }
    };

    module.invokeTest = function(testId, pageId, request) {
        if(!abPages[testId]) {
            console.log('AbTest ' + testId + 'not register')
        } else {
            abPages[testId][pageId](request);
        }
    };

    return module;
}(Bm.ab || {}));
$(function() {
    var $scrollTop = $('.js-scroll-top'),
        pageScrollTop = 0;

    /**
     * check mobile
     *
     * @type {*|jQuery}
     */
    Bridge.isMobile = $('body').hasClass('mobile');

    /**
     * check mobile
     */
    if (!Bridge.isMobile) {
        /**
         * popup open
         */
        $(document).on('click', '.js-popup-open', function() {
            Bridge.fancybox.open($(this).attr('href').substr(1));
        });

        /**
         * guest click
         */
        $(document).on('click', '.js-disabled', function() {
            Bridge.fancybox.modals.auth.open();
        });

        /**
         * auth popup open
         */
        $(document).on('click', '.js-popup-auth', function() {
            Bridge.fancybox.modals.auth.open();
        });

        /**
         * popup close
         */
        $(document).on('click', '.js-popup-close', function() {
            $.fancybox.close();
        });

        /**
         * bm7 menu open
         */
        $(document).on('click', '.js-main-menu-open', function() {
            $('body').addClass('position-fixed overflow-hidden');
            $('.js-main-overlay').removeClass('hidden');
            $('.js-main-menu').addClass('show');
        });

        /**
         * bm7 menu close
         */
        $(document).on('click', '.js-main-overlay', function() {
            $('body').removeClass('position-fixed overflow-hidden');
            $('.js-main-overlay').addClass('hidden');
            $('.js-main-menu').removeClass('show');
        });
    }

    /**
     * submit forms
     */
    $(document).on('click', '.js-form-submit', function() {
        $(this).parents('form').submit();
    });

    /**
     * show scroll top
     */
    $(document).on('scroll', function() {
        pageScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        if (pageScrollTop >= 500) {
            $scrollTop.addClass('show');
        } else {
            $scrollTop.removeClass('show');
        }
    });

    /**
     * scroll top
     */
    $scrollTop.on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 300);
    });

    /**
     * bm8 dropdown
     */
    $(document).on('click', '.js-user-dropdown-toggle', function() {
        $('.js-user-dropdown').toggleClass('hidden');
    });
    $(document).on('click', function(e) {
        var $el = $(e.target);

        if (!$el.hasClass('js-user-dropdown-toggle') && !$el.parents().hasClass('js-user-dropdown-toggle') && !$el.hasClass('js-user-dropdown') && !$el.parents().hasClass('js-user-dropdown')) {
            $('.js-user-dropdown').addClass('hidden');
        }
    });
});

var Validator = {
    filters: {
        trim: function(value) {
            return jQuery.trim(value);
        },
        phoneCode: function(value) {
            if (8 == value) {
                return '+7';
            }

            var pattern = /^[0-9]{1,3}$/;
            if (pattern.test(value)) {
                return '+' + value;
            }

            return value;
        }
    },

    validators: {
        email: {
            pattern: /^(([^а-я<>()[\]\\.,;:\s@\"]+(\.[^а-я<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Введите корректный e-mail',
            filters: ['trim']
        },
        name: {
            pattern: /^([a-zа-яA-ZА-ЯёЁ\-0-9 ]+)$/,
            message: "Введите корректное имя",
            filters: ['trim']
        },
        lastname: {
            pattern: /^([a-zа-яA-ZА-ЯёЁ\-0-9 ]+)$/,
            message: "Введите корректную фамилию",
            filters: ['trim']
        },
        phone: {
            pattern: /^([0-9]+)$/,
            message: "Введите корректный телефон",
            filters: ['trim']
        },
        city: {
            pattern: /^([a-zа-яA-ZА-ЯёЁ\-0-9 ]+)$/,
            message: "Введите корректное название города",
            filters: ['trim']
        },
        phone_code: {
            pattern: /^(\+[0-9]{1,3})$/,
            message: "Введите корректный код страны, например, +7",
            filters: ['trim', 'phoneCode']
        },
        partner: {
            pattern: /^([A-Za-z0-9]+)$/,
            message: "Введите корректный код партнера",
            filters: ['trim']
        },
        sms_code: {
            pattern: /^([0-9]+)$/,
            message: "Введите корректный смс код",
            filters: ['trim']
        },
        message: {
            pattern: /(.+)/,
            message: "Введите корректное сообщение",
            filters: ['trim']
        },
        captcha: {
            pattern: /^([A-Za-z0-9]+)$/,
            message: "Введите код на картинке",
            filters: ['trim']
        }
    },

    filter: function(value, filters) {
        for (var i = 0; i < filters.length; i++) {
            var filterName = filters[i];
            value = this.filters[filterName](value);
        }

        return value;
    },

    lastError: '',

    isValid: function(element) {
        var t = this;
        var isValid = true;

        element.find('[data-validator]:enabled').each(function() {
            var type = $(this).data('validator');
            var value = $(this).attr('value');
            var show = $(this).data('validator-show');

            if (t.validators[type] != undefined) {
                if (t.validators[type]['filters'] != undefined) {
                    value = t.filter(value, t.validators[type]['filters']);
                    $(this).attr('value', value);
                }
                if (!t.validators[type].pattern.test(value)) {
                    t.lastError = t.validators[type].message;
                    if (show == 'none') {
                        //пока так, все нормально
                    } else {
                        // вместо нормальных блоков с нотификациями зачем-то нужно делать алерты................
                        //$('#svyazErrorBlock').text(t.lastError);
                        alert(t.lastError);
                    }
                    $(this).focus();
                    return isValid = false;
                }
                else {
                    $('#svyazErrorBlock').empty();
                }
            }
        });
        element.find('select.city_0306').each(function() {
            var value = $(this).val();
            if (value == "-") {
                alert("Выберете город участия");
                return isValid = false;
            }
        });
        return isValid;
    }
};

var Bridge = {
    isMobile: false,
    fancybox: {
        modals: {
            standart: {
                options: {
                    maxWidth: 800,
                    padding: 0,
                    height: 'auto',
                    width: 'auto',
                    openEffect: 'none',
                    closeEffect: 'none',
                    autoSize: false,
                    fitToView: false,
                    closeBtn: false,
                    scrolling: false
                }
            },
            auth: {
                id: '#popup_auth',
                selector: '.fancybox-popup_login',
                options: {
                    padding: 0,
                    height: 'auto',
                    width: 'auto',
                    openEffect: 'none',
                    closeEffect: 'none',
                    autoSize: false,
                    fitToView: false,
                    closeBtn: false,
                    beforeClose: function() {
                        $('.popup .popup__error').empty().hide();
                        $('.popup .item .input').removeClass('error');
                        $('.popup .item .input-error').empty().hide();
                    },
                    afterShow: function() {
                        if (this.href === '#popup_auth') {
                            $('#popup_auth input[name="login"]').focus();
                        } else if (this.href === '#popup_registration') {
                            $('#popup_registration input[name="email"]').focus();
                        } else if (this.href === '#popup_pwd_remind') {
                            $('#popup_pwd_remind input[name="email"]').focus();
                        }
                    }
                },
                onInit: function() {
                    $(this.selector).fancybox(this.options);
                },
                open: function(title, successUrl) {
                    var $container = $(this.id);

                    successUrl = successUrl || null;
                    title = title || null;

                    if (successUrl) {
                        $container.find('input[name=success_url]').val(successUrl);
                    }
                    if (title) {
                        $container.find('h3').html(title);
                    }

                    $.fancybox.open(this.id, this.options);

                    if (Bridge.CapturePointsController) {
                        Bridge.CapturePointsController.setIsWatchedByPath(location.pathname);
                    }
                }
            },
            image: {
                config: {
                    2: {
                        differentTexts: true,
                        titleReg: 'Зарегистрируйтесь<br>и продолжайте',
                        titleAuth: 'Войдите и продолжайте',
                        text: 'Полный просмотр материала доступен для зарегистрированных пользователей'
                    },
                    4: {
                        differentTexts: false,
                        title: 'Получите подборку лучших историй выпускников Бизнес молодости, чтобы не тратить время на их поиск',
                        text: 'Введите адрес электронной почты, которой вы пользуетесь каждый день, нажмите «Получить кейсы» и мы пришлем подборку лучших кейсов',
                        buttonTitle: 'Получить кейсы'
                    },
                    8: {
                        differentTexts: true,
                        img: 'eye',
                        titleReg: 'Зарегистрируйтесь<br>и продолжайте',
                        titleAuth: 'Войдите и продолжайте',
                        text: 'Полный доступ к материалам сайта доступен для зарегистрированных пользователей'
                    },
                    9: {
                        differentTexts: true,
                        img: 'eye',
                        titleReg: 'Зарегистрируйтесь<br>и продолжайте',
                        titleAuth: 'Войдите и продолжайте',
                        text: 'Полный доступ к материалам сайта доступен для зарегистрированных пользователей'
                    }
                },
                remind: function (id, registerPage) {
                    this.open("popup_pwd_remind-image/index.html", id, registerPage);
                },
                registration: function (id, registerPage, afterActivationUrl) {
                    var config = this.config[id];
                    var title = config.differentTexts ? config.titleReg : config.title;

                    $("#popup_registration-image .popup__title").html(title);

                    if (config.buttonTitle) {
                        $("#popup_registration-image .bm-button").text(config.buttonTitle);
                    }
                    if (registerPage) {
                        $("#popup_registration-image input[name=register_page]").val(registerPage);
                    }
                    if (afterActivationUrl) {
                        $("#popup_registration-image input[name=after_activation_url]").val(afterActivationUrl);
                    }

                    this.open("popup_registration-image/index.html", id, registerPage, afterActivationUrl);
                },
                auth: function (id) {
                    var config = this.config[id];
                    var title = config.differentTexts ? config.titleAuth : config.title;

                    $("#popup_auth-image .popup__title").html(title);

                    if (config.buttonTitle) {
                        $("#popup_auth-image .bm-button").text(config.buttonTitle);
                    }

                    this.open("popup_auth-image", id);
                },
                open: function (elementId, id) {
                    var config = this.config[id];
                    var imgEl = $("#" + elementId + " .popup__img");

                    $("#" + elementId).attr("data-popup_id", id);
                    $("#" + elementId + " .popup__text").html(config.text);

                    imgEl.hide();
                    if (config.image_class) {
                        imgEl.show().removeAttr("class").addClass("popup__img").addClass(config.image_class);
                    }

                    Bridge.fancybox.open("#" + elementId);
                }
            }
        },
        open: function(id) {
            $.fancybox.open({href: '#' + id}, Bridge.fancybox.modals.standart.options);
        }
    }
};

var Bm = Bm || {};
$(function() {
    $(document).on('click', '#callbackA', function() {
        $('#popup_callback').data('from_call', 'head');
    });
    $(document).on('click', '#callbackB', function() {
        $('#popup_callback').data('from_call', 'footer');
    });

    $(document).on('click', '.js-popup-callback', function(e) {
        var $form = $('form[data-form="callback"]'),
            $submit = $form.find('.js-form-submit'),
            from_call,
            dataLayerTitle = $form.attr('action') == '/callback/' ? 'Обратный звонок' : undefined;

        Bridge.fancybox.open('popup_callback', {
            padding: 0,
            height: 'auto',
            width: 'auto',
            openEffect: 'none',
            closeEffect: 'none',
            autoSize: false,
            fitToView: false,
            closeBtn: false,
            beforeShow: function() {
                var $link = $(this.element[0]),
                    $popup = $('#popup_callback'),
                    dataTitle = $link.data('title') || 'Заказать обратный звонок',
                    dataText = $link.data('text') || 'Заказ обратного звонка возможен круглосуточно. Менеджер перезвонит Вам с 10 до 19 по московскому времени',
                    dataButton = $link.data('button') || 'Отправить',
                    dataMessage = $link.data('message') || false;

                $popup.find('.popup__title').text(dataTitle);
                $popup.find('.popup__text').text(dataText);
                $submit.find('.text').text(dataButton);

                if (dataMessage !== false) {
                    $popup.find('input[name="message"]').removeAttr('disabled').val(dataMessage);
                } else {
                    $popup.find('input[name="message"]').attr('disabled', 'disabled').val('');
                }
            },
            beforeClose: function() {
                $form.find('.popup__error').empty().hide();
                $form.find('.item .bm-item-input').removeClass('error');
                $form.find('.item .data-error').empty();
                $('#popup_callback').data('from_call', '');
            }
        });

        $form.on('submit', function() {
            if ($form.hasClass('relogin')) {
                $.ajax({
                    url: $form.attr('logout'),
                    type: 'GET',
                    dataType: 'json'
                });
            }

            $.ajax({
                type: 'POST',
                url: $form.attr('action'),
                data: $form.serialize(),
                dataType: 'json',
                beforeSend: function() {
                    $submit.addClass('disabled');
                    $form.find('.popup__error').empty().hide();
                    $form.find('.item .bm-item-input').removeClass('error');
                    $form.find('.item .data-error').empty();
                },
                success: function(result) {
                    $submit.removeClass('disabled');

                    if (result['redirect']) {
                        window.location.href = result['redirect'];
                    } else {
                        if (result.status == 'success_replace' && result.message) {
                            from_call = $('#popup_callback').data('from_call');

                            if (typeof ga !== 'undefined') {
                                if (from_call == 'head') {
                                    ga('send', 'event', 'button', 'call_back_head_send');
                                } else if (from_call == 'footer') {
                                    ga('send', 'event', 'button', 'call_back_footer_send');
                                }
                            }

                            $form.html('<div class="popup__text">' + result.message + '</div>');

                            dataLayer.push({
                                    'event': 'mixdata',
                                    'eventCategory': 'Forms',
                                    'eventAction': 'response',
                                    'eventContent': dataLayerTitle,
                                    'eventLabel': 'successful'
                                }
                            );
                        } else if (result.status == 'error') {
                            if (result.rawMessage instanceof Object && result.rawMessage[0] == undefined) {
                                for (var name in result['rawMessage']) {
                                    var $input = $form.find('input[name="' + name + '"]').parents('.item');

                                    for (var i in result['rawMessage'][name]) {
                                        var message = result['rawMessage'][name][i];
                                        break;
                                    }

                                    $input.find('.data-error').text(message);
                                }

                                from_call = $('#popup_callback').data('from_call');

                                if (typeof ga !== 'undefined') {
                                    if (from_call == 'head') {
                                        ga('send', 'event', 'button', 'call_back_head_mistake');
                                    } else if (from_call == 'footer') {
                                        ga('send', 'event', 'button', 'call_back_footer_mistake');
                                    }
                                }

                                if ('need_captcha' in result) {
                                    $form.find('.captchaBlock').removeClass('hidden');
                                    $form.find('.captchaImage').attr('src', result['captcha_url']);
                                    $form.find('.captchaCode').val(result['captcha_code']);
                                } else {
                                    $form.find('.captchaBlock').addClass('hidden');
                                }
                            } else {
                                $form.find('.popup__error').text(result.message).show();
                            }
                            dataLayer.push({
                                    'event': 'mixdata',
                                    'eventCategory': 'Forms',
                                    'eventAction': 'response',
                                    'eventContent': dataLayerTitle,
                                    'eventLabel': 'unsuccessful',
                                    'errorCode': 'Ошибка валидации'
                                }
                            );
                        }
                    }
                },
                error: function(result) {
                    $submit.removeClass('disabled');
                    $form.find('.popup__error').text('Ошибка загрузки').show();
                    dataLayer.push({
                            'event': 'mixdata',
                            'eventCategory': 'Forms',
                            'eventAction': 'response',
                            'eventContent': dataLayerTitle,
                            'eventLabel': 'unsuccessful',
                            'errorCode': result.status + ' ' + result.statusText
                        }
                    );
                }
            });

            return false;
        });
    });
});
/**
 * Глобальный файлик для подключения обработчиков
 */

$(function() {

    /**
     * Вернуться назад
     */
    $('.js-return-back').on('click', function() {
        if (history.length && history.length > 2) {
            history.back();

            return false;
        }
    });

});
// hints
function hintsShow(id) {
    var $hints = $('#hints');

    $('body').addClass('overflow-hidden').addClass('position-fixed');
    $hints.show();
    $hints.find('.hint' + id).show();
}

function hintsHide() {
    $('body').removeClass('overflow-hidden').removeClass('position-fixed');
    $('#hints').hide();
}

// rotate
function rotateStart($item) {
    var rotate,
        deg = 0;

    rotate = setInterval(function() {
        deg--;

        if (deg === -360) {
            deg = 0;
        }

        $item.css({
            '-ms-transform': 'rotate(' + deg + 'deg)',
            '-o-transform': 'rotate(' + deg + 'deg)',
            '-moz-transform': 'rotate(' + deg + 'deg)',
            '-webkit-transform': 'rotate(' + deg + 'deg)',
            'transform': 'rotate(' + deg + 'deg)'
        });
    }, 1);

    return rotate;
}

function rotateStop($item, rotate) {
    var deg = 0;

    $item.css({
        '-ms-transform': 'rotate(' + deg + 'deg)',
        '-o-transform': 'rotate(' + deg + 'deg)',
        '-moz-transform': 'rotate(' + deg + 'deg)',
        '-webkit-transform': 'rotate(' + deg + 'deg)',
        'transform': 'rotate(' + deg + 'deg)'
    });

    clearInterval(rotate);
}

// format numbers 3417585 => 3 417 585
function ebensFormat(num) {
    num = num.toString();
    num = num.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1&nbsp;');

    return num;
}

/**
 * Process auto request
 *
 * @param $el
 */
function processAutoRequest($el) {

    var event_id = $el.data('event'),
        product_id = $el.data('product'),
        redirect = $el.data('redirect') ? $el.data('redirect') : window.location.pathname,
        isWebinar = $el.data('webinar') ? true : false;

    var showLoading = function() {
        $.fancybox('Идет обработка запроса', {
            modal: true,
            overlayColor: "#000000",
            overlayOpacity: 0.5,
            padding: 50,
            centerOnScroll: true,
            closeBtn: false,
            beforeShow: function(){
                this.skin.append('<div class="fancyboxClose"></div>');
            }
        });
    };

    $.ajax({
        url: '/request/auto/',
        data: {
            event_id: event_id,
            product_id: product_id
        },
        type: 'POST',
        beforeSend: showLoading,
        success: function(response) {
            console.log(response);
            if(response.errorCode == 1 || response.errorCode == 2) {
                if (isWebinar) {
                    window.location = redirect + "?requestId=" + response.requestId + '&requestHash=' + response.requestHash;
                } else {
                    window.location = redirect + "?request=" + response.requestId + "&security_code=" + response.securityCode;
                }
            } else {
                window.location = $this.attr('href');
            }
        }
    });
}

/**
 * Strip tags (used for wysiwig)
 *
 * @param str
 * @param allowed_tags
 *
 * @returns {*}
 */
function strip_tags (str, allowed_tags) {

    var key = '', allowed = false;
    var matches = [];
    var allowed_array = [];
    var allowed_tag = '';
    var i = 0;
    var k = '';
    var html = '';
    var replacer = function (search, replace, str) {
        return str.split(search).join(replace);
    };

    if (allowed_tags) {
        allowed_array = allowed_tags.match(/([a-zA-Z0-9]+)/gi);
    }

    str += '';

    matches = str.match(/(<\/?[\S][^>]*>)/gi);

    for (key in matches) {
        if (isNaN(key)) {
            continue;
        }

        html = matches[key].toString();
        allowed = false;

        for (k in allowed_array) {
            allowed_tag = allowed_array[k];
            i = -1;

            if (i != 0) { i = html.toLowerCase().indexOf('<'+allowed_tag+'>');}
            if (i != 0) { i = html.toLowerCase().indexOf('<'+allowed_tag+' ');}
            if (i != 0) { i = html.toLowerCase().indexOf('</'+allowed_tag)   ;}

            if (i == 0) {
                allowed = true;
                break;
            }
        }

        if (!allowed) {
            str = replacer(html, "", str); // Custom replace. No regexing
        }
    }

    return str;
}

$(function(){
    // assetic
    $(document).on('click', '.js-admin-assetic', function() {
        var $button = $(this),
            $url = $(this).data('url'),
            $theme = $(this).data('theme'),
            $layout = $(this).data('layout');

        if ($button.hasClass('disabled')) {
            return false;
        }

        $button.removeClass('error success');

        $.ajax({
            type: 'POST',
            url: $url,
            data: {
                theme: $theme,
                layout: $layout
            },
            beforeSend: function() {
                $button.addClass('disabled');
            },
            success: function (data) {
                $button.removeClass('disabled')
                if (data.status == 'success') {
                    $button.addClass('success');
                } else {
                    $button.addClass('error');
                }
            },
            error: function() {
                $button.removeClass('disabled').addClass('error');
            }
        });
    });

    // form select
    $(document).on('click', '.js-form-select', function() {
        var find = $(this).hasClass('js-find'),
            item = find ? $(document).find('.js-form-select[data-select="' + $(this).data('select')+ '"]') : $(this),
            block = item.parents('.js-form-block'),
            select = item.data('select'),
            form = block.find($('.js-form[data-form="' + select + '"]'));

        item.addClass('active').siblings().removeClass('active');
        form.removeClass('hidden').siblings().addClass('hidden');
    });

    for(var type in Bm.fancybox.modals) {
        if (Bm.fancybox.modals[type].hasOwnProperty('onInit')) {
            Bm.fancybox.modals[type]['onInit']();
        }
    }

    Bm.ab.addPage(1000, {
        js_main: function(request) {
            console.log(request);
            if(request['emailLink']) {
                var $abButton = $('#popup_main_done_email');
                $abButton.find('.email-link-js').attr('href', request['emailLink']);
                Bm.fancybox.open($abButton.attr('id'));
            } else {
                Bm.fancybox.open('popup_main_done');
            }
        },
        js_redirect: function(request) {
            window.location.href = request['redirect']
        }
    });

    // close hints
    $(document).on('click', '#hints', function() {
        hintsHide();
    });

    // custom fancybox close button
    $(document).on('click', '.fancyboxClose, .js-popup-close', function() {
        $.fancybox.close()
    });

    // applause
    $(document).on('mouseenter', '.check-in-js .clap.active', function() {
        var clap = $(this);
        var profit = $(this).next('.profit');

        if(profit.length == 0){
            return false;
        }
        $('.check-in-js .tooltip').hide();
        if (!profit.hasClass('active')) {
            clap.children('.tooltip').show()
        }
    });
    $(document).on('mouseleave', '.check-in-js .clap.active', function() {
        var self = this;
        setTimeout(function(){
            $(self).children('.tooltip').hide();
        }, 500);
    });
    $(document).on('click', '.check-in-js .clap', function(e){
        var clap = $(this),
            profit = $(this).next('.profit'),
            url = clap.data('url'),
            redirect = clap.data('redirect'),
            $item = $('.check-in-js .clap[data-url="' + url + '"]'),
            $counter = $item.find('[data-like-counter="' + url + '"]');

        if (clap.hasClass('disabled')) {
            if (Bridge.isMobile) {
                Bm.mobile.popup.show('login');
            } else {
                Bridge.fancybox.modals.auth.open(null, redirect);
            }

            return false;
        }

        if ($(e.target).closest('.tooltip').length == 1 && !profit.hasClass('active')) {
            profit.trigger('click');

            return false;
        }

        if (clap.hasClass('active')) {
            $.ajax({
                type: 'GET',
                url: url,
                data: {direction: 0},
                success: function(data){
                    if (!data.status || data.status !== 'ok') {
                        return false;
                    }
                    profit.addClass('disabled');

                    $item.removeClass('active');
                    $counter.html('<span class="icon"></span>Нравится ' + data.count);

                    clap.children('.tooltip').hide()
                }
            });
        } else {
            $.ajax({
                type: 'GET',
                url: url,
                data: {direction: 1},
                success: function(data){
                    if (!data.status || data.status !== 'ok') {
                        return false;
                    }
                    profit.removeClass('disabled');

                    $item.addClass('active');
                    $counter.html('<span class="icon"></span>Нравится ' + data.count);

                    if (profit.length != 0 && !profit.hasClass('active')) {
                        clap.children('.tooltip').show();
                    }
                }
            });
        }

        return false;
    });

    // profit
    $(document).on('click', '.check-in-js .profit', function(){
        var profit = $(this);
        var clap = profit.prev('.clap');
        var url = profit.data('url');
        var redirect = clap.data('redirect');

        if(profit.hasClass('disabled')){
            return false;
        }

        if(profit.hasClass('active')){
            if(confirm('Вы больше не считаете материал полезным?')){

                $.ajax({
                    type: 'GET',
                    url: url,
                    data: {direction: 0},
                    success: function(data){
                        if(!data.status || data.status !== 'ok'){
                            return false;
                        }

                        profit.removeClass('active');
                        $('[data-like-counter="' + url + '"]').text(data.count);
                    }
                });
            }
        } else {
            if(confirm('Вы действительно хотите отметить материал как полезный?')){

                $.ajax({
                    type: 'GET',
                    url: url,
                    data: {direction: 1},
                    success: function(data){
                        if(!data.status || data.status !== 'ok'){
                            return false;
                        }

                        profit.addClass('active');
                        $('[data-like-counter="' + url + '"]').text(data.count);
                        profit.prev('.clap').children('.tooltip').hide();

                        if(data.record_likes_count){
                            clap.addClass('active');
                            clap.children('span').text(data.record_likes_count);
                        }
                    }
                });
            }
        }
    });

    // textarea autoresize
    if($.fn.autosize){
        $('#opros textarea, textarea.autosize').autosize();
    }

    // custom select
    if($.fn.selectbox){
        $('select.selectbox').selectbox();
    }

    // Case block
    $(document).on('click', '.caseBlock .caseReadmore', function(){
        var caseBlock = $(this).parents('.caseBlock');

        if($(this).hasClass('hide')){
            caseBlock.find('.caseFullText').fadeOut(600);
            $(this).text('Читать далее').removeClass('hide');

            $('html, body').animate({
                scrollTop: caseBlock.offset().top
            }, 600);
        } else {
            caseBlock.find('.caseFullText').fadeIn(600);
            $(this).text('Скрыть текст').addClass('hide');

            $('html, body').animate({
                scrollTop: caseBlock.find('.caseFullText').offset().top
            }, 600);
        }
    });

    var Form = function() {
        var $form = null,
            $requestForm,
            $submit,
            $loading,
            $error,
            rotate,
            need_sms_activation = false,
            submitted = 1,
            urls = [
            '/request/only_register/',
            'http://molodost.bz/request/new/'
        ];

        var redirect_choices = {
            0: '/accept/',
            1: '/accept/',
            2: window.location.pathname + 'success/',
            3: window.location.pathname + 'success/'
        };
        var redirect_choice = 1;

        this.init = function(element) {
            $form = $(element);

            $requestForm = $(element);
            $submit = $requestForm.find('.js-request-form-submit');
            $loading = $requestForm.find('.js-request-form-loading');
            $error = $requestForm.find('.js-request-form-error');

            if($form.find("input[name=need_redirect]").val() != 0) {
                redirect_choice = $form.find("input[name=need_redirect]").val();
            }
            if($form.has('[data-sms]').length) {
                need_sms_activation = true;
                submitted = 0;
            }

            $form.find('[name=eventChanger]').change(function(){
                if ($(this)[0].tagName == 'SELECT') {
                    var $selectInput = $(this);
                    $.each($selectInput.find(':selected').data(), function(k, v){
                        $selectInput.data(k, v);
                    });
                }
                $form.find('input[name="event_id"]').attr('value', $(this).data('event'));
                $form.find('input[name="product_id"]').attr('value', $(this).data('product'));
                $form.find('input[name="redirect"]').attr('value', $(this).data('redirect'));
                $form.find('input[name="need_redirect"]').attr('value', $(this).data('need_redirect'));
            });

            $form.attr('onsubmit', '');
            $form.on('submit', function(e){
                if ($form.data('invalid')) {
                    return false;
                }
                if ($form.find('select[name=eventChanger]').length && !$form.find('select[name=eventChanger]').data('product')) {
                    alert('Вы должны выбрать город');
                    return false;
                }

                if ($form.find('input[name=product_id]').val()=="" || $form.find('input[name=event_id]').val()=="") {
                    alert('Вы должны выбрать формат участия');
                    return false;
                }

                if ($form.attr('target') == '_blank') {

                    // Проверяем параметр формы
                    if (!checkValidation()) {
                        return false;
                    }

                    // Передаем управление в форму
                    return true;
                } else {
                    submitMainForm();
                }

                return false;
            });

            $('[data-updatecaptcha]').live('click', function(e){
                e.preventDefault();
                updateCaptcha();
            });

            $('[data-resendsms]').live('click', function(e){
                e.preventDefault();
                updatePhoneArea();
            });

        };

        var updatePhoneArea = function() {
            $form.find('input[name=firstname]').attr('readonly', 'readonly');
            $form.find('input[name=email]').attr('readonly', 'readonly');

            $.ajax({
                cache: false,
                url: '/request/phone_activation/',
                type: 'POST',
                timeout: 15000,
                data: {
                    phone_country: $form.find('input[name=phone_country_code]').val(),
                    phone_code: $form.find('input[name=phone_code]').val(),
                    phone: $form.find('input[name=phone]').val(),
                    page_id: $form.find('input[name=event_id]').val()
                },
                success: fillPhoneArea,
                error: showTimeoutError
            });
        };

        var fillPhoneArea = function(data) {
            hideLoading();
            if(data.status == 'success') {
                $form.find('[data-sms]').html(data.message);
            } else {
                $.fancybox(data.message, {
                    overlayColor: "#000000",
                    overlayOpacity: 0.5,
                    padding: 50,
                    closeBtn: false,
                    beforeShow: function(){
                        this.skin.append('<div class="fancyboxClose"></div>');
                    }
                });
            }

            var submitButton = $form.find('button[type=submit]');
            $form.off('submit');
            $(submitButton).text('Отправить');

            if ($form.find('.user-captcha').length) {
                $form.on('submit', function(e) {
                    e.preventDefault();
                    submitCaptchaForm();
                });
            } else if ($form.find(".activation_phone_accepted").length) {
                $(submitButton).hide();
                submitted = 1;
                submitMainForm();
            } else {
                $form.on('submit', function(e) {
                    e.preventDefault();
                    submitPhoneActivationForm();
                });
            }
        };

        var updateCaptcha = function() {
            var src = $form.find('.user-captcha').attr('src') + '?rnd=' + Math.random();
            $form.find('.user-captcha').attr('src', src);
        };

        var showLoading = function() {
            if (Bridge.isMobile && $requestForm.hasClass('js-request-form')) {
                $loading.removeClass('hidden');
                $submit.addClass('hidden');
                $error.empty().addClass('hidden');
                rotate = rotateStart($loading);
            } else {
                $.fancybox('Идет обработка запроса', {
                    modal: true,
                    overlayColor: "#000000",
                    overlayOpacity: 0.5,
                    padding: 50,
                    centerOnScroll: true,
                    closeBtn: false,
                    beforeShow: function(){
                        this.skin.append('<div class="fancyboxClose"></div>');
                    }
                });
            }
        };

        var showTimeoutError = function(message, errorCode) {
            ga_product_type = $form.find("input[name=product_type]").val();
            ga_product_name = "product_"+ $form.find("input[name=product_id]").val();
            ga('send','event','form_send_mistake',ga_product_type,ga_product_name);
            if(message instanceof Object) {
                message = 'Попробуйте отправить форму повторно';
            }
            message = message || 'Попробуйте отправить форму повторно';
            title = 'Извините, произошла ошибка.<br>'
            if(errorCode) {
                if(errorCode == 6) {
                    title = 'Операция выполнена успешно.<br/>'
                }
            }
            setTimeout(function() {
                if (Bridge.isMobile && $requestForm.hasClass('js-request-form')) {
                    $loading.addClass('hidden');
                    $submit.removeClass('hidden');
                    $error.text(message).removeClass('hidden');
                    rotate = rotateStop($loading, rotate);
                } else {
                    $.fancybox(title + message, {
                        overlayColor: "#000000",
                        overlayOpacity: 0.5,
                        padding: 50,
                        closeBtn: false,
                        beforeShow: function() {
                            this.skin.append('<div class="fancyboxClose"></div>');
                        }
                    });
                }
            }, 300);
            dataLayer.push({
                    'event': 'mixdata',
                    'eventCategory': 'Forms',
                    'eventAction': 'response',
                    'eventContent': 'Заявка',
                    'eventLabel': 'unsuccessful',
                    'errorCode': errorCode + ' ' + message
                }
            );
        };

        var hideLoading = function() {
            setTimeout(function() {
                if (Bridge.isMobile && $requestForm.hasClass('js-request-form')) {
                    $loading.addClass('hidden');
                    $submit.removeClass('hidden');
                    rotate = rotateStop($loading, rotate);
                } else {
                    $.fancybox.close();
                }
            }, 300);
        };

        var submitCaptchaForm = function() {
            if (!checkValidation()) {
                return false;
            }

            $.ajax({
                cache: false,
                url: '/request/phone_activation/',
                type: 'POST',
                timeout: 15000,
                data: {
                    phone_country: $form.find('input[name=phone_country_code]').val(),
                    phone_code: $form.find('input[name=phone_code]').val(),
                    phone: $form.find('input[name=phone]').val(),
                    captcha: $form.find('input[name=captcha]').val(),
                    page_id: $form.find('input[name=event_id]').val(),
                    confirm_captcha: 1
                },
                beforeSend: showLoading,
                success: fillPhoneArea,
                error: showTimeoutError
            });
        };

        var submitPhoneActivationForm = function() {
            if (!checkValidation()) {
                return false;
            }

            $.ajax({
                cache: false,
                url: '/request/phone_activation/',
                type: 'POST',
                timeout: 15000,
                data: {
                    code: $form.find('input[name=phone_activation_code]').val(),
                    activation_id: $form.find('input[name=phone_activation_id]').val(),
                    confirm_form_send: 1
                },
                beforeSend: showLoading,
                success: fillPhoneArea,
                error: showTimeoutError
            });
        };

        var submitMainForm = function() {

            if (!checkValidation()) {
                ga_product_type = $form.find("input[name=product_type]").val();
                ga_product_name = "product_"+ $form.find("input[name=product_id]").val();
                ga('send','event','form_send_mistake',ga_product_type,ga_product_name);
                return false;
            }

            $.ajax({
                cache: false,
                url: urls[submitted],
                timeout: 15000,
                type: 'POST',
                data: $form.serialize(),
                beforeSend: showLoading,
                success:  parseRequest,
                error: showTimeoutError
            });

            return true;
        };

        /**
         * Проверка валидации
         *
         * @returns boolean
         */
        var checkValidation = function() {
            return Validator.isValid($form);
        };

        var parseRequest = function(request) {
            ga_product_type = $form.find("input[name=product_type]").val();
            ga_product_name = $form.find("input[name=product_name]").val();
            ga_event_name = $form.find("input[name=event_name]").val();
            ga_product_price = $form.find("input[name=product_price]").val();
            ga_product_id = $form.find("input[name=product_id]").val();
            ga_event_id = $form.find("input[name=event_id]").val();
            ga_event_default_id = $form.find("input[name=event_default_id]").val();

            if (request['redirect_system'] !== undefined && request['redirect_system'] != '') {
                // отправлять всю эту хрень надо только для вновь созданных заявок, если уже была заявка, то не отправлять
                if (request.errorCode == 1) {
                    ga('send', 'event', 'form_send', ga_product_type, ga_product_name);
                    ga('send', 'pageview', 'http://molodost.bz/form_send/');
                    if (ga_product_price > 0) {
                        dataLayer.push({
                            event: "addToCart",
                            ecommerce: {
                                add: {
                                    products: [{
                                        id: ga_product_id, /// айди товара
                                        name: ga_product_name, // название продукта
                                        price: ga_product_price, /// цена за продукт
                                        quantity: 1 // Количество добавленых товаров ( по идеи должен быть всегда 1)
                                    }]
                                }
                            }
                        });
                    } else if (ga_event_name.indexOf('Онлайн') != -1) {
                        variant = 'Онлайн';
                        if (ga_event_default_id != ga_event_id) {
                            variant = 'Живое';
                        }
                        dataLayer.push({
                            event: "addToCart",
                            ecommerce: {
                                add: {
                                    products: [{
                                        id: ga_event_default_id, /// айди товара
                                        name: ga_event_name, // название продукта
                                        price: ga_product_price, /// цена за продукт
                                        quantity: 1, // Количество добавленых товаров ( по идеи должен быть всегда 1)
                                        variant: variant
                                    }]
                                }
                            }
                        });
                    } else {
                        dataLayer.push({
                            event: "addToCart",
                            ecommerce: {
                                add: {
                                    products: [{
                                        id: ga_event_default_id, /// айди товара
                                        name: ga_event_name, // название продукта
                                        price: ga_product_price, /// цена за продукт
                                        quantity: 1, // Количество добавленых товаров ( по идеи должен быть всегда 1)
                                    }]
                                }
                            }
                        });
                    }
                    dataLayer.push({
                            'event': 'mixdata',
                            'eventCategory': 'Forms',
                            'eventAction': 'response',
                            'eventContent': 'Заявка',
                            'eventLabel': 'successful'
                        }
                    );
                }
                window.location = request['redirect_system'];
                return;
            }

            redirect_choice = $form.find("input[name=need_redirect]").attr('value');
            if (request.errorCode == 0 || request.errorCode == 3 || request.errorCode == 6 || request.errorCode == 8 || request.errorCode == 9) {
                showTimeoutError(request['errorMessage'], request.errorCode);
            } else if (request.errorCode == 5) {
                ga('send','event','form_send_mistake',ga_product_type,ga_product_name);
                // Специальный режим, при котором запрещено покупать продукт - отправляем на страницу /fail/
                window.location = 'http://' + window.location.hostname + window.location.pathname + 'fail/';
            } else {
                if((need_sms_activation == true) && (submitted == 0)) {
                    $.fancybox.close();
                    updatePhoneArea();
                } else {
                    var redirect = $form.find("input[name=redirect]").val();
                    if(redirect == '') {
                        redirect = redirect_choices[redirect_choice];
                    }
                    // отправлять всю эту хрень надо только для вновь созданных заявок, если уже была заявка, то не отправлять
                    if (request.errorCode == 1) {
                        ga('send','event','form_send',ga_product_type,ga_product_name);
                        ga('send', 'pageview', 'http://molodost.bz/form_send/');
                        dataLayer.push({
                                'event': 'mixdata',
                                'eventCategory': 'Forms',
                                'eventAction': 'response',
                                'eventContent': 'Заявка',
                                'eventLabel': 'successful'
                            }
                        );
                        if(ga_product_price>0) {
                            dataLayer.push({
                                event: "addToCart",
                                ecommerce: {
                                    add: {
                                        products: [{
                                            id: ga_product_id, /// айди товара
                                            name: ga_product_name, // название продукта
                                            price: ga_product_price, /// цена за продукт
                                            quantity: 1 // Количество добавленых товаров ( по идеи должен быть всегда 1)
                                        }]
                                    }
                                }
                            });
                        } else if (ga_event_name.indexOf('Онлайн')!=-1) {
                            variant = 'Онлайн';
                            if (ga_event_default_id!=ga_event_id) {
                                variant = 'Живое';
                            }
                            dataLayer.push({
                                event: "addToCart",
                                ecommerce: {
                                    add: {
                                        products: [{
                                            id: ga_event_default_id, /// айди товара
                                            name: ga_event_name, // название продукта
                                            price: ga_product_price, /// цена за продукт
                                            quantity: 1, // Количество добавленых товаров ( по идеи должен быть всегда 1)
                                            variant: variant
                                        }]
                                    }
                                }
                            });
                        } else {
                            dataLayer.push({
                                event: "addToCart",
                                ecommerce: {
                                    add: {
                                        products: [{
                                            id: ga_event_default_id, /// айди товара
                                            name: ga_event_name, // название продукта
                                            price: ga_product_price, /// цена за продукт
                                            quantity: 1, // Количество добавленых товаров ( по идеи должен быть всегда 1)
                                        }]
                                    }
                                }
                            });
                        }

                        yaCounter6044530.reachGoal('form_send_'+ga_product_type);
                    }

                    switch(redirect_choice) {
                        case '4':
                            var href = redirect + '?' + $.param({
                                    name:  $form.find("input[name=firstname]").val(),
                                    tel: $form.find("input[name=phone_code]").val() + $form.find("input[name=phone]").val(),
                                    mail: $form.find("input[name=email]").val(),
                                    client_id: request.userId
                                });
                            console.log(href);
                            $.fancybox.open(
                                {
                                    type: 'iframe',
                                    fitToView: false,
                                    width: 940,
                                    height: 580,
                                    padding: 0,
                                    margin: 20,
                                    autoSize: false,
                                    closeClick: false,
                                    openEffect: 'none',
                                    closeEffect: 'none',
                                    wrapCSS: 'intickets',
                                    helpers: {
                                        overlay : {
                                            closeClick : false
                                        }
                                    },
                                    href : href
                                }
                            );
                            break;
                        case '3':
                            $.ajax({
                                url: redirect,
                                type: 'GET',
                                data: {email: $form.find("input[name=email]").val()},
                                timeout: 15000,
                                complete: function(response, responseStatus) {
                                    $.fancybox.close();
                                    if(responseStatus == 'success') {
                                        $form.next().remove();
                                        $form.next().remove();
                                        $form.replaceWith(response.responseText);
                                    } else {
                                        alert('Произошла ошибка, попробуйте позже');
                                    }
                                }
                            });
                            break;
                        case '7':
                            $.ajax({
                                url: redirect,
                                type: 'GET',
                                data: {email: $form.find("input[name=email]").val()},
                                timeout: 15000,
                                complete: function(response, responseStatus) {
                                    $.fancybox.close();
                                    if(responseStatus == 'success') {
                                        $form.next().remove();
                                        $form.next().remove();
                                        $.fancybox($form.find("input[name=success_text]").val(), {
                                            modal: true,
                                            overlayColor: "#000000",
                                            overlayOpacity: 0.5,
                                            padding: 50,
                                            centerOnScroll: true,
                                            closeBtn: false,
                                            beforeShow: function(){
                                                this.skin.append('<div class="fancyboxClose"></div>');
                                            }
                                        });
                                    } else {
                                        alert('Произошла ошибка, попробуйте позже');
                                    }
                                }
                            });
                            break;
                        case '2':
                            // #4874 для ссылок, которые содержат в себе get-параметры, не надо добавлять email
                            if (redirect.indexOf('?category_id') >= 0) {
                                window.location = redirect;
                            } else {
                                window.location = redirect + "?requestId=" + request.requestId + '&requestHash=' + request.requestHash;
                            }
                            break;
                        case '6':
                            var redirect2 = $form.find("input[name=redirect2]").val();
                            if (request.errorCode == 2) {
                                window.location = redirect2;
                            } else {
                                window.location = redirect + "?requestId=" + request.requestId + '&requestHash=' + request.requestHash;
                            }
                            break;
                        case '1':
                        default:
                            window.location = redirect + "?request=" + request.requestId + "&security_code=" + request.securityCode;
                    }
                }
            }
        }
    };


    $('form[data-form=request]').each(function() {
        new Form().init(this);
    });


    $('[data-widget=timer]').each(function(){
        var t = this;
        var wr_hours = function() {
            var oToday = new Date();
            //var sTime = "December 11, 2012 12" +  ":15" + ":00"; //до какого числа таймер
            // задаём время с точностью до секунды — это не педантизм,
            // а важная деталь, избавляющая от багов при вычислении разницы между датами
            var sTime = $(t).data('timer');
            var oDeadLineDate = new Date(sTime); // собственно устанавливаем «час Икс»
            var sek = Math.floor((oDeadLineDate - oToday) / 1000);
            if(sek <= 0 && sek >= -2) {
                window.location = window.location.pathname;
                return false;
            }
            var sec= sek % 60 ; //сколько секунд осталось
            var min= Math.floor((sek /60)%60) ;//сколько минут осталось
            var hoursek= Math.floor((sek / (60*60)) %24) ;//сколько часов осталось
            var days= Math.floor(sek /(24*60*60)) ;//сколько дней осталось
            var time_wr= "" +days+"д. "+hoursek+"ч. " +min+"м. " +sec+"с.";
            if (days > 31) {
                time_wr= ""+(days-30)+"д. "+hoursek+"ч. " +min+"м. " +sec+"с.";
            }
            $(t).html(time_wr);
        };
        setInterval(wr_hours, 1000);
    });

    $('form[data-form=event-check]').submit(function () {
        var $t = $(this);
        if(!Validator.isValid($t)) {
            return false;
        }

        var email = $t.find('input[name=email]').val();
        var redirect = $t.find("input[name=redirect]").val();
        var redirect_choice = $t.find("input[name=need_redirect]").attr('value');
        if(redirect == '') {
            redirect = window.location.pathname + 'success/';
        }

        $.fancybox('Идет обработка запроса', {
            modal: true,
            overlayColor: "#000000",
            overlayOpacity: 0.5,
            padding: 50,
            centerOnScroll: true,
            closeBtn: false,
            beforeShow: function(){
                this.skin.append('<div class="fancyboxClose"></div>');
            }
        });

        $.ajax({
            cache: false,
            url: $t.attr('action'),
            timeout: 15000,
            type: 'POST',
            data: $t.serialize(),

            success:  function (data) {
                setTimeout(function() {
                    $.fancybox.close();
                }, 300);
                if (data.status == 'success') {
                    if (redirect_choice == 3) {
                        $.ajax({
                            url: redirect,
                            type: 'GET',
                            data: {email: email},
                            timeout: 15000,
                            complete: function(response, responseStatus) {
                                $.fancybox.close();
                                if(responseStatus == 'success') {
                                    $t.prev().remove();
                                    $t.prev().remove();
                                    $t.replaceWith(response.responseText);
                                } else {
                                    alert('Произошла ошибка, попробуйте позже');
                                }
                            }
                        });
                    } else {
                        // #4874 для ссылок, которые содержат в себе get-параметры, не надо добавлять email
                        if (redirect.indexOf('?category_id') >= 0) {
                            window.location = redirect;
                        } else {
                            window.location.href = redirect + "?requestId=" + data.message.requestId + '&requestHash=' + data.message.requestHash;
                        }
                    }
                } else if (data.status == 'message') {
                    $t.find('.email-response').addClass('success').html(data.message);
                } else {
                    $t.find('.email-response').removeClass('success').html(data.message);
                }
            },
            error: function(data) {
                setTimeout(function() {
                    $.fancybox('Извините, произошла ошибка. <br />Попробуйте отправить форму позднее', {
                        overlayColor: "#000000",
                        overlayOpacity: 0.5,
                        padding: 50,
                        closeBtn: false,
                        beforeShow: function(){
                            this.skin.append('<div class="fancyboxClose"></div>');
                        }
                    });
                }, 300);
            }
        });
        return false;
    });

    $('select[data-action="selectPriceByCity"]').on('change', function() {

        var cityId = $(this).val();

        var callback = function(el) {
            var productId = $(el).data('product-id');
            var eventId = $(el).data('event-id');
            var cityId = $(el).val();
            var cityName = $(el).find(':selected').text();
            var parentBlock = 'span.js-city-price-main-block',
                cityBlock = 'span.js-change-city-name_span i',
                priceBlock = 'span[data-price="true"]',
                loaderBlock = '.js-form-price-loader-block';

            $(self).parents(parentBlock).find(priceBlock).hide();
            $(self).parents(parentBlock).find(loaderBlock).css('display', 'inline-block');

            $.ajax({
                url: $(el).data('url'),
                type: 'POST',
                data: {
                    product_id: productId,
                    event_id: eventId,
                    city_id: cityId
                },
                success: function(data) {
                    $(el).parents(parentBlock).find(priceBlock).show();
                    $(el).parents(parentBlock).find(loaderBlock).hide();
                    $(el).parents(parentBlock).find(priceBlock).text(data.price);
                    $(el).parents(parentBlock).find(cityBlock).text(cityName);
                    $(el).parents('form').find('input[name="event_id"]').val(data.event_id);
                    $(el).parents('form').find('input[name="product_id"]').val(productId);
                }
            });
        };

        callback(this);

        // Выбираем такой же блок на всех доступных селектах
        $('select[data-action="selectPriceByCity"]').not(this).each(function(index) {

            if ($(this).val() != cityId) {
                $(this).find('option[value=' + cityId + ']').attr('selected', 'selected');
                callback(this);
            }
        });

    });

    $('form[data-form=svyaz]').submit(function(){
        var $form = $(this);
        if(!Validator.isValid($form)) {
            return false;
        }

        $.fancybox('Идет обработка запроса', {
            modal: true,
            overlayColor: "#000000",
            overlayOpacity: 0.5,
            padding: 50,
            centerOnScroll: true,
            closeBtn: false,
            beforeShow: function(){
                this.skin.append('<div class="fancyboxClose"></div>');
            }
        });

        $.post(
            'http://molodost.bz/request/svyaz/',
            $form.serialize(),
            function (data) {

                var captchaImage = $form.find('.captchaImage');
                var captchaBlock = $form.find('.captchaBlock');
                var captchaWord = $form.find('.captchaWord');
                var captchaCode = $form.find('.captchaCode');

                if ('status' in data && data['status'] == 'error') {
                    $.fancybox.close();

                    var message = data['rawMessage'];
                    if((data['rawMessage']) instanceof Array) {
                        message = data['rawMessage'].shift();
                    }
                    if (!message) {
                        message = data['message'];
                    }
                    var $input2 = $form.find('input').eq(0);

                    if ('captcha_url' in data) {
                        if (captchaBlock.is(':visible')) {
                            $('#svyazErrorBlock').text(message);
                        }

                        captchaImage.attr('src', data['captcha_url']);
                        captchaBlock.removeClass('hidden');
                        if (data['wrong_code']) {
                            captchaWord.addClass('error').focus();
                        }
                        $form.find('.captchaCode').val(data);
                        captchaWord.val('');
                    }
                    else {
                        captchaWord.removeClass('error').val('');
                        captchaBlock.addClass('hidden');
                        captchaCode.val('');

                        $('#svyazErrorBlock').empty();
                    }
                }
                else {
                    $form.find('.error-text').remove();
                    $form.removeClass('alert');
                    $form.find('input').removeClass('error');
                    $('#svyazErrorBlock').empty();

                    captchaBlock.addClass('hidden');
                    captchaWord.removeClass('error').val('');
                    captchaCode.val('');

                    if ($form.find('input[name="product_id"]').val() == 68 && $form.find('input[name="event_id"]').val() == 1076461) {
                        var name = $form.find('input[name="name"]').val();
                        var email = $form.find('input[name="email"]').val();
                        var phone = $form.find('input[name="phone_country"]').val() + $form.find('input[name="phone_code"]').val() + $form.find('input[name="phone"]').val();

                        var amoForm = $('.amoForm');
                        amoForm.find('input[name="name"]').val(name);
                        amoForm.find('input[name="email"]').val(email);
                        amoForm.find('input[name="phone"]').val(phone);
                        amoForm.find('input[name="packet"]').val(1);
                        $.post(
                            amoForm.attr('action'),
                            amoForm.serialize()
                        );
                    } else if ($form.find('input[name="product_id"]').val() == 68 && $form.find('input[name="event_id"]').val() == 1076460) {
                        var name = $form.find('input[name="name"]').val();
                        var email = $form.find('input[name="email"]').val();
                        var phone = $form.find('input[name="phone_country"]').val() + $form.find('input[name="phone_code"]').val() + $form.find('input[name="phone"]').val();

                        var amoForm = $('.amoForm');
                        amoForm.find('input[name="name"]').val(name);
                        amoForm.find('input[name="email"]').val(email);
                        amoForm.find('input[name="phone"]').val(phone);
                        amoForm.find('input[name="packet"]').val(2);
                        $.post(
                            amoForm.attr('action'),
                            amoForm.serialize()
                        );
                    }

                    if (data.redirect) {
                        window.location.href = data.redirect;
                        return;
                    }

                    if($form.find('input[name="redirect"]').length > 0) {
                        window.location.href = $form.find('input[name="redirect"]').val();
                        return;
                    }

                    if ($form.find('input[name="product_id"]').val() == 585) {

                        var name = $form.find('input[name="name"]').val();
                        var email = $form.find('input[name="email"]').val();
                        var phone = $form.find('input[name="phone_country"]').val() + $form.find('input[name="phone_code"]').val() + $form.find('input[name="phone"]').val();

                        var amoForm = $('.amoForm');
                        amoForm.find('input[name="first_name"]').val(name);
                        amoForm.find('input[name="email"]').val(email);
                        amoForm.find('input[name="phone"]').val(phone);

                        amoForm.submit();
                    }

                    setTimeout(function() {
                        $.fancybox(data.message, {
                            overlayColor: "#000000",
                            overlayOpacity: 0.5,
                            padding: 50,
                            centerOnScroll: true,
                            closeBtn: false,
                            beforeShow: function(){
                                this.skin.append('<div class="fancyboxClose"></div>');
                            }
                        });
                    }, 300);
                }
            }, 'json'
        );
        return false;
    });

    $('.enterForm .loginForm').find('form').submit(function(){
        var $self = $(this);

        if(!Validator.isValid($self)) {
            $self.find('.error').html(Validator.lastError);
            return false;
        }

        $.ajax({
            type: 'POST',
            url: $self.attr('action'),
            crossDomain: true,
            data: {
                login      : $self.find("input[name='login']").val(),
                password   : $self.find("input[name='password']").val()
            },
            dataType: 'json',
            headers:{
                'X-Requested-With': 'XMLHttpRequest'
            },
            xhrFields: {
                withCredentials: true
            },
            success: function(responseData, textStatus, jqXHR) {
                if (responseData.status == 'success')
                {
                    var success_url = $self.find('input[name=success_url]').val();
                    if (success_url != '') {
                        window.location = success_url;
                    } else {
                        window.location.reload();
                    }
                }
                else
                {
                    $self.find('.error').text(responseData.message).show();
                }
            },
            error: function (responseData, textStatus, errorThrown) {
                $self.find('.error').hide();
            }
        });

        return false;
    });

    $('.enterForm .recForm').find('form').submit(function(){
        var $self = $(this);

        if(!Validator.isValid($self)) {
            $self.find('.error').html(Validator.lastError);
            return false;
        }

        $.ajax({
            type: 'POST',
            url: $self.attr('action'),
            crossDomain: true,
            data: {
                email: $self.find("input[name='email']").val()
            },
            dataType: 'json',
            headers:{
                'X-Requested-With': 'XMLHttpRequest'
            },
            xhrFields: {
                withCredentials: true
            },
            success: function(responseData, textStatus, jqXHR) {
                if (responseData.status == 'success') {
                    $self.parents('.recForm').html('<p class="ta_c">' + responseData.message + '</p>');
                } else {
                    $self.find('.error').text(responseData.message).show();
                }
            },
            error: function (responseData, textStatus, errorThrown) {
                $self.find('.error').hide();
            }
        });

        return false;
    });

    $('.enterForm .regForm').find('form').submit(function(){
        var $self = $(this);

        if(!Validator.isValid($self)) {
            $self.find('.error').html(Validator.lastError);
            return false;
        }

        $self.find("input[type='submit']").attr('disabled','disabled');

        $.ajax({
            type: 'POST',
            url: $self.attr('action'),
            crossDomain: true,
            data:  $self.serialize(),
            dataType: 'json',
            headers:{
                'X-Requested-With': 'XMLHttpRequest'
            },
            xhrFields: {
                withCredentials: true
            },
            success: function(responseData, textStatus, jqXHR) {
                if (responseData.status == 'success') {
                    $self.parents('.regForm').html('<p class="ta_c">Проверьте свою электронную почту.</p>');
                } else {
                    $self.find('.error').text(responseData.message).show();
                }

            },
            error: function (responseData, textStatus, errorThrown) {
                $self.find('.error').hide();
            }
        });
        $self.find("input[type='submit']").removeAttr('disabled');

        return false;
    });

    $(document).on('click', '.enterForm .showLoginForm', function(){
        $(this).parents('.enterForm').children('.oneForm').hide();
        $(this).parents('.enterForm').children('.loginForm').show();
    });
    $(document).on('click', '.enterForm .showRegForm', function(){
        $(this).parents('.enterForm').children('.oneForm').hide();
        $(this).parents('.enterForm').children('.regForm').show();
    });
    $(document).on('click', '.enterForm .showRecForm', function(){
        $(this).parents('.enterForm').children('.oneForm').hide();
        $(this).parents('.enterForm').children('.recForm').show();
    });

    // Banners entry
    // #3984
    $(function(){
        $(".l_banners").each(function(){
            var banners = $(this).children().hide();
            banners.eq(Math.floor(Math.random() * banners.length)).show();

            //$(this).cycle({speed: 400});
        });
    });

    // #5458 Баннеры с классом js-promo-block-random ротируем через js
    $(function() {
        var jsPromoBlock = $('.js-promo-block-random');
        $(jsPromoBlock).hide();
        $(jsPromoBlock).eq(Math.floor(Math.random() * $(jsPromoBlock).length)).show();
    });

    // Col right banner toggle
    var oWindow = $(window),
        largeBanner = $(".banner-aside.large"),
        smallBanner = $(".banner-aside.small");

    if ( largeBanner.length ){
        var showOffset = largeBanner.position().top + largeBanner.height() + smallBanner.height();

        oWindow.on("scroll", function(){
            if( oWindow.scrollTop() > showOffset ){
                smallBanner.fadeIn(200);
            } else {
                smallBanner.fadeOut(200);
            }
        }).trigger("scroll");
    }

    var isCardUpdating = false;
    $('#card-block input[type=button]').click(function(){
        if ($('input[name=card]').val().length == 0)
        {
            showError('', {'card' : 'Введите номер карты'});
            return false;
        }

        if (!/(^[0-9 ]+$)/.test($('input[name=card]').val()))
        {
            showError('', {'card' : 'Неверный формат номера карты'});
            return false;
        }

        if (!isCardUpdating)
        {
            isCardUpdating = true;
            $.ajax({
                dataType: "json",
                url: '/profile/card/activate/',
                type: 'POST',
                data: $('#user-profile-form').serialize(),
                success: function(data) {
                    if (data.status == 'success') {
                        $('#card-block').html( '<p>' + data.message + '</p>' ).removeClass('message_error');
                    } else {
                        showError( data.message, data.fields );
                    }
                    isCardUpdating = false;
                },
                error: function(xhr, status) {
                    isCardUpdating = false;
                }
            });
        }


    });

    $('#card-block form').submit(function(){
        $('#card-block input[type=button]').click();
        return false;
    });

    function showError(message, fields) {
        $('#card-block').find('p').each(function(){
            $( this).remove();
        });
        $('#card-block').prepend('<p class="message_error">' + message + '</p>');

        for(var i in fields) {
            $('input[name=' + i +']').before('<p class="message_error">' + fields[i] + '</p>');
        }
    }

    // form agreement
    $('.form-agreement').each(function() {
        var $form = $(this),
            $parent = $form.find('.js-form-agreement-parent'),
            count = $form.find('.js-form-agreement-children').length,
            countChecked = $form.find('.js-form-agreement-children:checked').length;

        if (count === countChecked) {
            $parent.prop('indeterminate', false);
            $parent.prop('checked', true);
        } else if (countChecked === 0) {
            $parent.prop('indeterminate', false);
            $parent.prop('checked', false);
        } else {
            $parent.prop('indeterminate', true);
        }
    });

    $(document).on('click', '.form-agreement .js-form-agreement-options', function() {
        $(this).parents('.form-agreement').find('.js-form-agreement-choose').toggleClass('hidden');

        return false;
    });

    $(document).on('change', '.form-agreement .js-form-agreement-children', function() {
        var $form = $(this).parents('.form-agreement'),
            $parent = $form.find('.js-form-agreement-parent'),
            count = $form.find('.js-form-agreement-children').length,
            countChecked = $form.find('.js-form-agreement-children:checked').length;

        if (count === countChecked) {
            $parent.prop('indeterminate', false);
            $parent.prop('checked', true);
        } else if (countChecked === 0) {
            $parent.prop('indeterminate', false);
            $parent.prop('checked', false);
        } else {
            $parent.prop('indeterminate', true);
        }
    });

    $(document).on('change', '.form-agreement .js-form-agreement-parent', function() {
        var $form = $(this).parents('.form-agreement');

        if ($(this).prop('checked')) {
            $form.find('.js-form-agreement-children').prop('checked', true);
        } else {
            $form.find('.js-form-agreement-choose').removeClass('hidden');
            $form.find('.js-form-agreement-children').prop('checked', false);
        }
    });
});

function showConfirmPersonalAlert(checked) {
    if (!checked) {
        alert('Без согласия на обработку данных мы не можем принять заявку');
    }
}

//bm4 block!!!!

$(function() {
    var expertBlockRender = function() {
        $('.expertBlock').each(function(){
            var markerId = $(this).data('marker-block');
            var expertTop = $('[data-marker="' + markerId + '"]').offset().top + 10;
            var expertLeft = $('.post').offset().left + 525;
            $(this).css({'top' : expertTop, 'left' : expertLeft});
        });
    };

    expertBlockRender();
    $(window).resize(expertBlockRender);

    if(jQuery().sliderkit) {
        $('.topSlider').sliderkit({
            circular: false,
            mousewheel: false,
            shownavitems: 3,
            verticalnav: true,
            navclipcenter: true,
            auto: false,
            navscrollatend: true
        });
    }

    var ajaxNisha = 0;
    $(document).on('click', '.nishaBlock .one.more', function(){
        if(ajaxNisha) {
            return false;
        }
        var $this = $(this);
        $.ajax({
            url: '/ajax/random/tags/',
            type: 'POST',
            data: {
                type_id: 3,
                group_id: 3
            },
            success: function(data) {
                if(data.status == 'success') {
                    $this.siblings('.one:visible').fadeOut(600, function() {
                        var $caseBlocks= $this.siblings('.one');
                        for(var i in data.message) {
                            var $caseBlock = $caseBlocks.eq(i);
                            $caseBlock.find('img').attr('src', data.message[i]['img']);
                            $caseBlock.find('img').attr('alt', data.message[i]['name']);
                            $caseBlock.find('a').attr('href', '/case/tag/' + data.message[i]['alias'] + '/');
                            $caseBlock.find('a').text(data.message[i]['name']);
                        }
                        $(this).fadeIn(600);
                    });
                }
            },
            beforeSend: function() {
                ajaxNisha = 1;
            },
            complete: function() {
                ajaxNisha = 0;
            }
        });

    });

    $(document).on('click', '.search', function(){
        $('#searchBlock').fadeToggle(500);
        $('#searchInput').focus();
    });

    $('.topBlock .news .one:last').addClass('last');

    $(document).on('click', '.head_set-drop a', function(){
        $(this).siblings('.head_set-box').toggle();
    });

    $('.slider').on('fotorama:show', function (e, fotorama) {
        $(this).find('.slider_pagination .current').text(fotorama.activeIndex + 1);
        $(this).find('.slider_caption').text(fotorama.activeFrame.caption);
    });

    $(document).on('click', '[data-request="auto"]', function(e) {
        processAutoRequest($(this));
        return false;
    });

    $(document).on('click', '.check-in-js .star', function(e){
        var star = $(this);
        var url = star.data('url');
        var redirect = star.data('redirect');

        if(star.hasClass('disabled')){
            if (!redirect) {
                redirect = $('#popup_auth [name=success_url]').val();
            }
            if (!redirect.match(/#/)) {
                redirect += '?r='+Math.random();
            } else if (!redirect.match(/#comment/)) {
                var match = redirect.match(/^([^#]*)#(.*)/);
                if (match) {
                    redirect = '?r='+Math.random() + match[0];
                }
            }
            Bm.fancybox.modals.auth.open(null, redirect);

            return false;
        }

        if(star.hasClass('active')){
            $.ajax({
                type: 'GET',
                url: url,
                data: {direction: 0},
                success: function(data){
                    if(!data.status || data.status !== 'ok'){
                        return false;
                    }

                    star.removeClass('active');
                }
            });
        } else {
            $.ajax({
                type: 'GET',
                url: url,
                data: {direction: 1},
                success: function(data){
                    if(!data.status || data.status !== 'ok'){
                        return false;
                    }

                    star.addClass('active');
                }
            });
        }
    });

    $('.promoLink').on('click', function(){
        $(this).parent('li').find('.promoInputBlock').toggle();
        return false;
    });
});
$(function() {
    window.shareInit = function() {

        /**
         * Обычный вариант
         */

        $('div.share42init').each(function(idx) {
            var el = $(this), u = el.attr('data-url'), t = el.attr('data-title'), i = el.attr('data-image'), d = el.attr('data-description'), f = el.attr('data-path'), fn = el.attr('data-icons-file'), z = el.attr("data-zero-counter");
            var useTitles = el.attr('data-use-titles');
            if (!u)u = location.href;
            if (!fn)fn = 'icons.html';
            if (!z)z = 0;
            function fb_count(url) {
                var shares;
                $.getJSON('http://graph.facebook.com/?callback=?&ids=' + url, function(data) {
                    shares = data[url].shares || 0;
                    if (shares > 0 || z == 1)el.find('a[data-count="fb"]').append('<span class="share42-counter">' + shares + '</span>').data('shares', shares)
                })
            }

            fb_count(u);
            function twi_count(url) {
                var shares;
                $.getJSON('http://urls.api.twitter.com/1/urls/count.json?callback=?&url=' + url, function(data) {
                    shares = data.count;
                    if (shares > 0 || z == 1)el.find('a[data-count="twi"]').append('<span class="share42-counter">' + shares + '</span>').data('shares', shares)
                })
            }

            twi_count(u);
            function vk_count(url) {
                $.getScript('http://vk.com/share.php?act=count&amp;index=' + idx + '&url=' + url);
                if (!window.VK)window.VK = {};
                window.VK.Share = {
                    count: function(idx, shares) {
                        if (shares > 0 || z == 1)$('div.share42init').eq(idx).find('a[data-count="vk"]').append('<span class="share42-counter">' + shares + '</span>').data('shares', shares)
                    }
                }
            }

            vk_count(u);
            if (!t)t = document.title;
            if (!d) {
                var meta = $('meta[name="description"]').attr('content');
                if (meta !== undefined)d = meta; else d = '';
            }
            u = encodeURIComponent(u);
            t = encodeURIComponent(t);
            t = t.replace(/\'/g, '%27');
            i = encodeURIComponent(i);
            d = encodeURIComponent(d);
            d = d.replace(/\'/g, '%27');
            var fbQuery = 'u=' + u;
            if (i != 'null' && i != '')fbQuery = 's=100&p[url]=' + u + '&p[title]=' + t + '&p[summary]=' + d + '&p[images][0]=' + i;
            var vkImage = '';
            if (i != 'null' && i != '')vkImage = '&image=' + i;
            var s = [
                '"#" data-count="vk" onclick="window.open(\'http://vk.com/share.php?url=' + u + '&title=' + t + vkImage + '&description=' + d + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться В Контакте"',
                '"#" data-count="fb" onclick="window.open(\'http://www.facebook.com/sharer.php?m2w&amp;' + fbQuery + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться в Facebook"',
                '"#" data-count="twi" onclick="window.open(\'https://twitter.com/intent/tweet?text=' + t + '&url=' + u + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Добавить в Twitter"'
                 ];

            var titles = [
                'Вконтакте',
                'Фейсбук',
                'Твиттер'
            ];

            var l = '';
            for (var j = 0; j < s.length; j++) l += '<a rel="nofollow" class="share42-item" href=' + s[j] + ' target="_blank">' + (useTitles ? titles[j] : '') + '</a>';
            el.html('<div class="share42">' + l + '</div>');

            if (Bridge.isMobile) {
                el.find('.share42').append('<a class="share42-item" data-count="wa" href="whatsapp://send?text=' + t + ' ' + u + '"></a>');
            }
        });

        /**
         * Расширенный вариант
         * TODO: привести все к одному варианту
         */

        $('div.share42ext').each(function(idx) {
            var el = $(this), u = el.attr('data-url'), t = el.attr('data-title'), i = el.attr('data-image'), d = el.attr('data-description'), f = el.attr('data-path'), fn = el.attr('data-icons-file'), z = el.attr("data-zero-counter");
            if (!u)u = location.href;
            if (!fn)fn = 'icons.png';
            if (!z)z = 0;
            if (!f) {
                function path(name) {
                    var sc = document.getElementsByTagName('script'), sr = new RegExp('^(.*/|)(' + name + ')([#?]|$)');
                    for (var p = 0, scL = sc.length; p < scL; p++) {
                        var m = String(sc[p].src).match(sr);
                        if (m) {
                            if (m[1].match(/^((https?|file)\:\/{2,}|\w:[\/\\])/))return m[1];
                            if (m[1].indexOf("/") == 0)return m[1];
                            b = document.getElementsByTagName('base');
                            if (b[0] && b[0].href)return b[0].href + m[1]; else return document.location.pathname.match(/(.*[\/\\])/)[0] + m[1];
                        }
                    }
                    return null;
                }

                f = path('share42.js');
            }
            if (!t)t = document.title;
            if (!d) {
                var meta = $('meta[name="description"]').attr('content');
                if (meta !== undefined)d = meta; else d = '';
            }
            u = encodeURIComponent(u);
            t = encodeURIComponent(t);
            t = t.replace(/\'/g, '%27');
            i = encodeURIComponent(i);
            d = encodeURIComponent(d);
            d = d.replace(/\'/g, '%27');
            var fbQuery = 'u=' + u;
            if (i != 'null' && i != '')fbQuery = 's=100&p[url]=' + u + '&p[title]=' + t + '&p[summary]=' + d + '&p[images][0]=' + i;
            var vkImage = '';
            if (i != 'null' && i != '')vkImage = '&image=' + i;
            var s = new Array('"#" data-count="fb" onclick="window.open(\'http://www.facebook.com/sharer.php?m2w&amp;' + fbQuery + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться в Facebook"', '"#" data-count="mail" onclick="window.open(\'http://connect.mail.ru/share?url=' + u + '&title=' + t + '&description=' + d + '&imageurl=' + i + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться в Моем Мире@Mail.Ru"', '"#" data-count="odkl" onclick="window.open(\'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st._surl=' + u + '&title=' + t + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Добавить в Одноклассники"', '"#" data-count="vk" onclick="window.open(\'http://vk.com/share.php?url=' + u + '&title=' + t + vkImage + '&description=' + d + '\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться В Контакте"');
            var l = '';
            for (j = 0; j < s.length; j++)l += '<span class="share42-item" style="display:inline-block;margin:0 6px 6px 0;height:24px;"><a rel="nofollow" style="display:inline-block;width:24px;height:24px;margin:0;padding:0;outline:none;background:url(' + f + fn + ') -' + 24 * j + 'px 0 no-repeat" href=' + s[j] + ' target="_blank"></a></span>';
            el.html('<span id="share42">' + l + '</span>' + '');
        });

    };

    window.shareInit();
});
/**
 * Created with JetBrains PhpStorm.
 * User: n3b
 */



(function(window){

    if( window.BmSocialFB ) {
        return false;
    }

    window.BMSocialFB = {};

window.BmSocialFB = new function() {

	var sdk = this;
    var initialized = false;
	var callbackQueue = [];
	var authQueue = [];
	var _widgets =
	{
		like: function(params) {

			params = $.extend({}, {

				container: null,
				pageUrl: window.location.href

			}, params || {});

			if( ! params.container ) return false;

			var $cont = $('#' + params.container)
				.attr('class', 'fb-like')
				.attr('data-href', params.pageUrl)
				.attr('data-layout', 'button_count')
				.attr('data-send', 'false')
				.attr('data-show-faces', 'false');

			FB.XFBML.parse();
		},
		comments: function(params) {

			params = $.extend({}, {

				container: null,
				pageUrl: window.location.href,
				width: 500,
				posts: 10

			}, params || {});

			if( ! params.container ) return false;

			var $cont = $('#' + params.container).html('')
				.attr('class', 'fb-comments')
				.attr('data-href', params.pageUrl)
				.attr('data-num-posts', params.posts)
				.attr('data-width', params.width);

			FB.XFBML.parse();
		},
		auth: function(params) {

			params = $.extend({}, {

				container: null,
				width: 200,
				rows: 1,
				showFaces: true

			}, params || {});

			if( ! params.container ) return false;

            if( btn = document.getElementById(params.container + '-login-button') ) {
                btn.onclick = function(){ FB.login(); return false;};
                return false;
            }

			var $cont = $('#' + params.container)
				.attr('class', 'fb-login-button')
				.attr('data-show-faces', params.showFaces ? 'true' : 'false')
				.attr('data-width', params.width)
				.attr('data-max-rows', params.rows);

			FB.XFBML.parse();
		},
		group: function(params) {

			params = $.extend({}, {

				container: null,
				width: 292,
				showFaces: true,
				stram: false,
				border: false,
				header: false

			}, params || {});

			if( ! params.container ) return false;

			var $cont = $('#' + params.container).html('')
				.attr('class', 'fb-like-box')
				.attr('data-href', 'https://www.facebook.com/molodost.bz')
				.attr('data-show-faces', params.showFaces ? 'true' : 'false')
				.attr('data-stream', params.stram ? 'true' : 'false')
				.attr('data-show-border', params.border ? 'true' : 'false')
				.attr('data-header', params.header ? 'true' : 'false')
				.attr('data-width', params.width);

			FB.XFBML.parse();
		},
		membersComments: function(params) {

			params = $.extend({}, {

				container: null,
				pageUrl: window.location.href,
				width: 500,
				posts: 10

			}, params || {});

			if( ! params.container ) return false;

			authQueue.push(params);

			FB.getLoginStatus(loginStatusCallback);
		}
	};

	/**
	 * проверяем авторизацию на FB
	 * @param response
	 */
	var loginStatusCallback = function(response) {

        return _events.onJoin();

		if( ! ( response.status === 'connected' || response.status === 'not_authorized' ) ) {
			return _events.onCheck();
		}

		FB.api('/me/likes/293259244049605', function(response) {

			if( response.data && response.data.length ){
				_events.onJoin();
			}
			else {
				_events.onAuth();
			}
		});

	};

	var _events = {

		onCheck: function() {

			for( var key in authQueue ) {
				_widgets.auth({container: authQueue[key].container});
			}
		},
		onAuth: function() {

			for( var key in authQueue ) {
				_widgets.group({container: authQueue[key].container});
			}
		},
		onJoin: function() {

			var params;
			while( params = authQueue.shift() ) {
				_widgets.comments(params)
			}
		}
	};

	/**
	 * выполнить все колбеки в очереди
	 */
	var fireCallbacks = function()
	{
		var callback;

		while( callback = callbackQueue.shift() ) {
			callback.call(sdk);
		}
	};

	/**
	 * инициализация FB sdk
	 */
	var init = function()
	{
		if( typeof window.fbAsyncInit == 'undefined' )
		{
			window.fbAsyncInit = function()
			{
				if( window['socialCommentsCallbackUrl'] )
				{
					var fbCommentCallback = function(id){
						$.post(window['socialCommentsCallbackUrl'],{
							type: 'facebook',
							id: id
						});
					}

					FB.Event.subscribe('comment.create', function(response)
					{
						if( response.href ) {
							fbCommentCallback(response.href);
						}
					});

					FB.Event.subscribe('comment.remove', function(response)
					{
						if( response.href ) {
							fbCommentCallback(response.href);
						}
					});
				}

				FB.Event.subscribe('auth.login', loginStatusCallback);

				FB.Event.subscribe('edge.create', function(response)
				{
					if( 'https://www.facebook.com/molodost.bz' != response ) return;

					_events.onJoin();
				});

				fireCallbacks();
			};

			/* FB */
			(function (d, s, id) {
				var js, fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) return;
				js = d.createElement(s);
				js.id = id;
				js.src = "../../connect.facebook.net/en_US/all.js#xfbml=1&appId=146851835502992";
				fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));
		}
		else if( typeof window.FB == 'undefined' )
		{
			setTimeout(init, 100);
		}
        else if( initialized )
        {
            fireCallbacks();
        }
	};

	/**
	 *
	 * @param name          имя виджета из массива _widgets
	 * @param params        параметры виджета
	 * @return {Boolean}
	 */
	sdk.widget = function(name, params)
	{
		if( ! _widgets[name] ) return false;

		callbackQueue.push(function(){ _widgets[name].call(sdk, params) });
		setTimeout(init, 0);
	};

};
})(window);

/**
 * Created with JetBrains PhpStorm.
 * User: n3b
 */

(function(window){

    if( window.BmSocialVK ) {
        return false;
    }

    window.BmSocialVK = {};

window.BmSocialVK = new function() {

    var sdk = this;
    var initialized = false;
    var callbackQueue = [];
    var authQueue = [];
    var _widgets =
    {
        like: function(params) {

            params = $.extend({}, {
                container: null
            }, params || {});

            if( ! params.container ) return false;

            var widgetParams = {
                pageUrl: params.pageUrl
            };

            VK.Widgets.Like( params.container, widgetParams );
        },
        comments: function(params) {

            params = $.extend({}, {
                container: null,
                width: 'auto',
                posts: 10,
                attach: '*'
            }, params || {});

            if( ! params.container ) return false;

            var $cont = $('#' + params.container);

            // dirty fix
            $cont.children().hide();

            var widgetParams = {
                width: params.width,
                limit: params.posts,
                attach: params.attach,
                pageUrl: params.pageUrl || params.pageId
            };

            VK.Widgets.Comments( params.container, widgetParams, params.pageId );
        },
        auth: function(params) {

            params = $.extend({}, {
                container: null
            }, params || {});

            if( ! params.container ) return false;

            var btnId = params.container + '-login-button';
            if( btn = document.getElementById(btnId) ) {
                btn.onclick = function(){ VK.Auth.login(loginStatusCallback); return false; };
                return false;
            }

            var btn = document.createElement('div');
            btn.id = btnId;
            btn.onclick = function(){ VK.Auth.login(loginStatusCallback); };
            document.getElementById(params.container).appendChild(btn);
            VK.UI.button( btnId );
        },
        group: function(params) {

            params = $.extend({}, {
                container: null,
                width: 'auto',
                height: 100
            }, params || {});

            if( ! params.container ) return false;

            var $cont = $('#' + params.container);

            $cont.html('<p>Вам необходимо вступить в группу:</p><div id="' + params.container + '_1"></div>');
            VK.Widgets.Group(params.container + '_1', { mode: 1, width: params.width, height: params.height }, 25276999);
        },
        membersComments: function(params) {

            params = $.extend({}, {
                container: null,
                width: 500,
                posts: 10
            }, params || {});

            if( ! params.container ) return false;

            authQueue.push(params);

            VK.Auth.getLoginStatus(loginStatusCallback);
        }

    };

    /**
     * проверяем авторизацию на VK
     * @param response
     */
    var loginStatusCallback = function(response)
    {
        return _events.onJoin();

        if (response.session) {
            VK.Api.call('groups.isMember', {group_id: 25276999, user_id: response.session.mid}, function(r) {
                r.response === 1 ? _events.onJoin() : _events.onAuth();
            });
        } else {
            _events.onCheck();
        }
    };

    var _events = {

        onCheck: function() {

            for( var key in authQueue ) {
                _widgets.auth({container: authQueue[key].container});
            }
        },
        onAuth: function() {

            for( var key in authQueue ) {
                _widgets.group({container: authQueue[key].container});
            }
        },
        onJoin: function() {

            var params;
            while( params = authQueue.shift() ) {
                _widgets.comments(params)
            }
        }
    };

    /**
     * выполнить все колбеки в очереди
     */
    var fireCallbacks = function()
    {
        var callback;

        while( callback = callbackQueue.shift() ) {
            callback.call(sdk);
        }
    };

    /**
     * инициализация VK sdk
     */
    var init = function()
    {
        if( typeof window.vkAsyncInit == 'undefined' )
        {
            window.vkAsyncInit = function()
            {
                // todo
                VK.init({apiId: 3489008});
                VK.Observer.subscribe("widgets.groups.joined", _events.onJoin);
                initialized = true;
                fireCallbacks();
            };

            /* VK */
            var id = 'vk_api_transport';
            if( document.getElementById(id) ) return;

            var div = document.createElement('div');
            div.id = id;
            var el = document.createElement("script");
            el.type = "text/javascript";
            el.src = "../../blocked.triolan.com.ua_refer%3dvk.com/js/api/openapi.js";
            el.async = true;
            div.appendChild(el);
            document.getElementsByTagName('body')[0].appendChild(div);
        }
        else if( typeof window.VK == 'undefined' )
        {
            setTimeout(init, 100);
        }
        else if( initialized )
        {
            fireCallbacks();
        }
    };

    /**
     *
     * @param name          имя виджета из массива _widgets
     * @param params        параметры виджета
     * @return {Boolean}
     */
    sdk.widget = function(name, params)
    {
        if( ! _widgets[name] ) return false;

        callbackQueue.push(function(){ _widgets[name].call(sdk, params) });
        setTimeout(init, 0);
    };
};
})(window);


/**
 * Глобальные методы для работы с video
 */
Bm.video = {

    nowPlaying: '',

    /**
     * Инлайновое проигрывание
     *
     * @param $el
     *
     * @returns {boolean}
     */
    inline: function($el) {

        var videoId = $el.attr('data-id'),
            source = $el.attr('data-url'),
            poster = $el.attr('data-image'),
            videoContainer = $('.js-video-player');

        if ($el.hasClass('started')) {
            return false;
        }

        var $authorized = $el.data('authorized');
        var $hasPhone = $el.data('has-phone');
        var $eventId = $el.data('event-id');
        var $productId = $el.data('product-id');

        // Проверяем авторизацию
        if ($authorized === 0) {
            Bm.video.showAuth();
            return false;
        }

        // Проверяем телефон
        if ($hasPhone === 0) {
            Bm.video.showPhone();
            return false;
        }

        // Проверяем event_id и product_id
        if ($eventId && $productId) {
            $.ajax({
                url : '/request/auto/',
                data: {
                    event_id:   $eventId,
                    product_id: $productId
                },
                type: 'POST'
            });
        }

        // Это первая инциализация видео?
        var isInitial = videoContainer.find('video').length == 0;
        //var video = isInitial ? $('<video class="video-js vjs-default-skin js-video-player" preload="none" controls></video>') : videoContainer.find('video');
        var video = isInitial ? $('<iframe width="100%" src="'+source+'" frameborder="0" allowfullscreen></iframe>') : videoContainer.find('video');

        if (isInitial) {
            video.attr('id', videoId);
        } else {
            video.attr('id', videoId + '_html5_api');
            videoContainer.attr('id', videoId);
        }

        video.attr('width', $el.attr('data-width')).
            attr('height', $el.attr('data-height')).
            attr('data-image', poster).
            attr('src', source).
            attr('data-update-url', $el.attr('data-update-url')).
            attr('data-youtube', $el.attr('data-youtube')).
            removeClass('vjs-default-skin').
            addClass($el.attr('data-skin'));

        $el.find('img').hide();
        $el.append(isInitial ? video : videoContainer);
        $el.addClass('started');

        // Инициализируем видео, останавливаем аудио
        Bm.video.init(video, true);
        if (Bm.audio) {
            Bm.audio.stop();
        }

        if (this.nowPlaying == '' || this.nowPlaying == videoId) {
            this.nowPlaying = videoId;
            return false;
        }

        var $wrapper = $('.js-video-wrapper[data-id="' + this.nowPlaying + '"]');

        $wrapper.removeClass('started');
        $wrapper.find('img').show();

        this.nowPlaying = videoId;

        var url = $el.data('view-url');
        var record_id = $el.data('record-id');
        $.ajax({
            type: 'POST',
            url: url,
            data: {
                record_id: record_id
            },
            success: function (data) {

            }
        });
    },

    /**
     * Остановить
     *
     * @returns {boolean}
     */
    stop: function() {

        if (this.nowPlaying == '') {
            return false;
        }

        videojs(this.nowPlaying).pause();

        var $wrapper = $('.js-video-wrapper[data-id="' + this.nowPlaying + '"]');

        $wrapper.removeClass('started');

        this.nowPlaying = '';
    }


};
(function(window) {
    if (window.social) {
        return false;
    }

    window.social = new function() {
        var t = this;
        t.bm5 = false;
        this.strategy = 'authorization';
        this.openAuthModal = function(href) {
            var w = 600,
                h = 500,
                left = (screen.width / 2) - (w / 2),
                top = (screen.height / 2) - (h / 2);
            window.open(href, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
            return false;
        };

        this.setMessage = function(message) {
            switch (message.result.status) {
                case 'token':
                    if (t.strategy == 'authorization') {
                        getUser(message.social);
                    }
                    if (t.strategy == 'link') {
                        linkAccount(message.social);
                    }
                    break;
                case 'error':
                    alert('Вы не были привязаны к соцсети ' + message.social);
                    break;
            }
        };

        var getUser = function(social) {
            var registerPage = $('#popup_registration').find('input[name=register_page]').val();
            $.ajax({
                type: 'POST',
                url: '/social/connect/' + social + '/',
                data: {
                    register_page: registerPage + ':' + social
                },
                success: function(data) {
                    switch (data.status) {
                        case 'userFound':
                            var redirect = $('#popup_auth').find('input[name=success_url]').val();
                            if (redirect != '') {
                                window.location.href = redirect;
                            } else {
                                window.location.href = data.message;
                            }
                            break;
                        case 'userNotFound':
                            t.actions.typeEmail($('#popup_email_type'), data, social);
                            break;
                        case 'error':
                            t.actions.error(data.message);
                            break;
                    }
                }
            });
        };

        var linkAccount = function(social) {
            $.ajax({
                type: 'POST',
                url: '/social/link/' + social + '/',
                data: {
                    check: true
                },
                success: function(response) {
                    var $container = $('#popup_link');
                    $container.find('.socialSelect').html(response.template);
                    Bridge.fancybox.open($container.attr('id'));
                }
            });
        };

        this.actions = {
            typeEmail: function($container, socialData, socialName) {
                $container.find('.socialSelect').html(socialData.template);
                Bridge.fancybox.open($container.attr('id'));

                var $form = $container.find('form'),
                    $submit = $container.find('.js-form-submit'),
                    $error = $form.find('.data-error');

                $form.on('submit', function() {
                    if ($submit.hasClass('disabled')) {
                        return false;
                    }

                    $error.empty();

                    if (!Validator.isValid($form)) {
                        $error.html(Validator.lastError);

                        return false;
                    }

                    $.ajax({
                        url: $form.attr('action'),
                        type: 'POST',
                        data: $form.serialize(),
                        beforeSend: function() {
                            $submit.addClass('disabled');
                        },
                        success: function(response) {
                            if ('needPassword' == response.status) {
                                t.actions.typePassword($('#popup_password_type'), response, socialName);
                            }
                            if ('error' == response.status) {
                                $error.text(response.message);
                            }
                            if ('success' == response.status && response.redirect != undefined) {
                                window.location.href = response.redirect;
                            }

                            $submit.removeClass('disabled');
                        },
                        error: function() {
                            $submit.removeClass('disabled');
                        }
                    });

                    return false;
                });
            },

            typePassword: function($container, socialData, socialName) {
                $container.find('.socialSelect').html(socialData.template);
                Bridge.fancybox.open($container.attr('id'));

                var $form = $container.find('form'),
                    $submit = $container.find('.js-form-submit'),
                    $error = $form.find('.data-error');

                $form.on('submit', function() {
                    if ($submit.hasClass('disabled')) {
                        return false;
                    }

                    $error.empty();

                    if (!Validator.isValid($form)) {
                        $error.html(Validator.lastError);

                        return false;
                    }

                    $.ajax({
                        url: $form.attr('action'),
                        type: 'POST',
                        data: $form.serialize(),
                        beforeSend: function() {
                            $submit.addClass('disabled');
                        },
                        success: function(response) {
                            if ('error' == response.status) {
                                $error.text(response.message);
                            }
                            if ('success' == response.status && response.redirect != undefined) {
                                window.location.href = response.redirect;
                            }

                            $submit.removeClass('disabled');
                        },
                        error: function() {
                            $submit.removeClass('disabled');
                        }
                    });
                    return false;
                });
            },

            error: function(error) {
                alert(error);
            }
        };

    };

})(window);

$(function() {
    var changeSocLink = function(currentLink) {
        var $link = $('a[href="' + currentLink + '"]').first(),
            newSoc = $link.attr('data-anti-social');

        $link.attr('data-anti-social', $link.attr('data-social'));
        $link.attr('data-social', newSoc).toggleClass('active');

        var newLink = $link.attr('data-anti-href');
        $link.attr('data-anti-href', $link.attr('href'));
        $link.attr('href', newLink);

        var newTitle = $link.attr('data-anti-title');
        $link.attr('data-anti-title', $link.attr('title'));
        $link.attr('title', newTitle);
    };

    var currentSocLink = null;

    $(document).on('click', '[data-social="link"]', function() {
        var href = $(this).attr('href'),
            strategy = $(this).data('social') || "authorization";

        currentSocLink = href;

        window.social.strategy = strategy;
        window.social.openAuthModal(href);

        return false;
    });

    $(document).on('click', '[data-social="unlink"]', function() {
        if (confirm('Вы действительно хотите отвязать аккаунт данной социальной сети?')) {
            var $link = $(this).attr('href');

            $.ajax({
                url: $link,
                type: 'GET',
                success: function() {
                    changeSocLink($link);
                }
            });
        }

        return false;
    });

    $(document).on('click', '[data-social="authorization"]', function() {
        var href = $(this).attr('href'),
            strategy = $(this).data('social') || "authorization";

        window.social.strategy = strategy;
        window.social.bm5 = $(this).hasClass('bm5-social');
        window.social.openAuthModal(href);

        return false;
    });

    $(document).on('submit', 'form.ajax_link', function() {
        var $form = $(this);

        $.ajax({
            url: $form.attr('action'),
            type: $form.attr('method'),
            data: $form.serialize(),
            success: function(response) {
                // TODO check errors
                $.fancybox.close();
                changeSocLink(currentSocLink);
            }
        });

        return false;
    })
});
$(function() {
    Bm.social.openShareDialogCallback = function($el, $parent) {
        $parent.find('.share42init_async').addClass('share42init');

        window.shareInit();

        var url = $el.data('url');
        var id = $el.data('id');
        var share_type = $el.data('type');

        setTimeout(function() {
            var count = 0;

            $parent.find('.share42-item').each(function() {
                if ($(this).data('shares')) {
                    count = count + parseInt($(this).data('shares'));
                }
            });

            $.ajax({
                type   : 'POST',
                url    : url,
                data   : {
                    count: count,
                    id   : id,
                    type : share_type
                },
                success: function(data) {
                    $parent.find('.share42init_async').removeClass('share42init');
                }
            });

        }, 1000);
    }
});
/*! jQuery Validation Plugin - v1.13.0 - 7/1/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.validateDelegate(":submit","click",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(b.target).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(b.target).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.submit(function(b){function d(){var d;return c.settings.submitHandler?(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),!1):!0}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c;return a(this[0]).is("form")?b=this.validate().form():(b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b})),b},removeAttrs:function(b){var c={},d=this;return a.each(b.split(/\s/),function(a,b){c[b]=d.attr(b),d.removeAttr(b)}),c},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}),a.extend(a.expr[":"],{blank:funct�I�     �I�                     P��             `�     HJ�              J�      @       J�             n(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(a,b){(9!==b.which||""!==this.elementValue(a))&&(a.name in this.submitted||a===this.lastElement)&&this.element(a)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date ( ISO ).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c=a.data(this[0].form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!this.is(e.ignore)&&e[d].call(c,this[0],b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']","focusin focusout keyup",b).validateDelegate("select, option, [type='radio'], [type='checkbox']","click",b),this.settings.invalidHandler&&a(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c=this.clean(b),d=this.validationTargetFor(c),e=!0;return this.lastElement=d,void 0===d?delete this.invalid[c.name]:(this.prepareElement(d),this.currentElements=a(d),e=this.check(d)!==!1,e?delete this.invalid[d.name]:this.invalid[d.name]=!0),a(b).attr("aria-invalid",!e),this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),e},showErrors:function(b){if(b){a.extend(this.errorMap,b),this.errorList=[];for(var c in b)this.errorList.push({message:b[c],element:this.findByName(c)[0]});this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){return!this.name&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in c||!b.objectLength(a(this).rules())?!1:(c[this.name]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([]),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d=a(b),e=b.type;return"radio"===e||"checkbox"===e?a("input[name='"+b.name+"']:checked").val():"number"===e&&"undefined"!=typeof b.validity?b.validity.badInput?!1:d.val():(c=d.val(),"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);for(d in f){e={method:d,parameters:f[d]};try{if(c=a.validator.methods[d].call(this,i,b,e.parameters),"dependency-mismatch"===c&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(j){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",j),j}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a];return void 0},defaultMessage:function(b,c){return this.findDefined(this.customMessage(b.name,c),this.customDataMessage(b,c),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c],"<strong>Warning: No message defined for "+b.name+"</strong>")},formatAndAdd:function(b,c){var d=this.defaultMessage(b,c.method),e=/\$?\{(\d+)\}/g;"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),this.errorList.push({message:d,element:b,method:c.method}),this.errorMap[b.name]=d,this.submitted[b.name]=d},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g=this.errorsFor(b),h=this.idOrName(b),i=a(b).attr("aria-describedby");g.length?(g.removeClass(this.settings.validClass).addClass(this.settings.errorClass),g.html(c)):(g=a("<"+this.settings.errorElement+">").attr("id",h+"-error").addClass(this.settings.errorClass).html(c||""),d=g,this.settings.wrapper&&(d=g.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement(d,a(b)):d.insertAfter(b),g.is("label")?g.attr("for",h):0===g.parents("label[for='"+h+"']").length&&(f=g.attr("id"),i?i.match(new RegExp("\b"+f+"\b"))||(i+=" "+f):i=f,a(b).attr("aria-describedby",i),e=this.groups[b.name],e&&a.each(this.groups,function(b,c){c===e&&a("[name='"+b+"']",this.currentForm).attr("aria-describedby",g.attr("id"))}))),!c&&this.settings.success&&(g.text(""),"string"==typeof this.settings.success?g.addClass(this.settings.success):this.settings.success(g,b)),this.toShow=this.toShow.add(g)},errorsFor:function(b){var c=this.idOrName(b),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+d.replace(/\s+/g,", #")),this.errors().filter(e)},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(a){return this.checkable(a)&&(a=this.findByName(a.name).not(this.settings.ignore)[0]),a},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+b+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):!0},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(a){this.pending[a.name]||(this.pendingRequest++,this.pending[a.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),/min|max/.test(c)&&(null===g||/number|range|text/.test(g))&&(d=Number(d)),d||0===d?e[c]=d:g===c&&"range"!==g&&(e[c]=!0);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b);for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),void 0!==d&&(e[c]=d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0!==e.param?e.param:!0:delete b[d]}}),a.each(b,function(d,e){b[d]=a.isFunction(e)?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(b.min&&b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),b.minlength&&b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:a.trim(b).length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 \-]+/.test(a))return!1;var c,d,e=0,f=0,g=!1;if(a=a.replace(/\D/g,""),a.length<13||a.length>19)return!1;for(c=a.length-1;c>=0;c--)d=a.charAt(c),f=parseInt(d,10),g&&(f*=2)>9&&(f-=9),e+=f,g=!g;return e%10===0},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(a.trim(b),c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(a.trim(b),c);return this.optional(c)||d>=e},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(a.trim(b),c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||c>=a},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d){if(this.optional(c))return"dependency-mismatch";var e,f,g=this.previousValue(c);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),g.originalMessage=this.settings.messages[c.name].remote,this.settings.messages[c.name].remote=g.message,d="string"==typeof d&&{url:d}||d,g.old===b?g.valid:(g.old=b,e=this,this.startRequest(c),f={},f[c.name]=b,a.ajax(a.extend(!0,{url:d,mode:"abort",port:"validate"+c.name,dataType:"json",data:f,context:e.currentForm,success:function(d){var f,h,i,j=d===!0||"true"===d;e.settings.messages[c.name].remote=g.originalMessage,j?(i=e.formSubmitted,e.prepareElement(c),e.formSubmitted=i,e.successList.push(c),delete e.invalid[c.name],e.showErrors()):(f={},h=d||e.defaultMessage(c,"remote"),f[c.name]=g.message=a.isFunction(h)?h(b):h,e.invalid[c.name]=!0,e.showErrors(f)),g.valid=j,e.stopRequest(c,j)}},d)),"pending")}}}),a.format=function(){throw"$.format has been deprecated. Please use $.validator.format instead."};var b,c={};a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a.extend(a.fn,{validateDelegate:function(b,c,d){return this.bind(c,function(c){var e=a(c.target);return e.is(b)?d.apply(e,arguments):void 0})}})});
/**
* bootstrap.js v3.0.0 by @fat and @mdo
* Copyright 2013 Twitter Inc.
* http://www.apache.org/licenses/LICENSE-2.0
*/
if (!jQuery) { throw new Error("Bootstrap requires jQuery") }

/* ========================================================================
 * Bootstrap: transition.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#transitions
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd'
    , 'MozTransition'    : 'transitionend'
    , 'OTransition'      : 'oTransitionEnd otransitionend'
    , 'transition'       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false, $el = this
    $(this).one($.support.transition.end, function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#alerts
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.hasClass('alert') ? $this : $this.parent()
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      $parent.trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one($.support.transition.end, removeElement)
        .emulateTransitionEnd(150) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  var old = $.fn.alert

  $.fn.alert = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(window.jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#buttons
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element = $(element)
    this.options  = $.extend({}, Button.DEFAULTS, options)
  }

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (!data.resetText) $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout(function () {
      state == 'loadingText' ?
        $el.addClass(d).attr(d, d) :
        $el.removeClass(d).removeAttr(d);
    }, 0)
  }

  Button.prototype.toggle = function () {
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
        .prop('checked', !this.$element.hasClass('active'))
        .trigger('change')
      if ($input.prop('type') === 'radio') $parent.find('.active').removeClass('active')
    }

    this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  var old = $.fn.button

  $.fn.button = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    $btn.button('toggle')
    e.preventDefault()
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#carousel
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      =
    this.sliding     =
    this.interval    =
    this.$active     =
    this.$items      = null

    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  }

  Carousel.DEFAULTS = {
    interval: 5000
  , pause: 'hover'
  , wrap: true
  }

  Carousel.prototype.cycle =  function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getActiveIndex = function () {
    this.$active = this.$element.find('.item.active')
    this.$items  = this.$active.parent().children()

    return this.$items.index(this.$active)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getActiveIndex()

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid', function () { that.to(pos) })
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition.end) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || $active[type]()
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var fallback  = type == 'next' ? 'first' : 'last'
    var that      = this

    if (!$next.length) {
      if (!this.options.wrap) return
      $next = this.$element.find('.item')[fallback]()
    }

    this.sliding = true

    isCycling && this.pause()

    var e = $.Event('slide.bs.carousel', { relatedTarget: $next[0], direction: direction })

    if ($next.hasClass('active')) return

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      this.$element.one('slid', function () {
        var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
        $nextIndicator && $nextIndicator.addClass('active')
      })
    }

    if ($.support.transition && this.$element.hasClass('slide')) {
      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid') }, 0)
        })
        .emulateTransitionEnd(600)
    } else {
      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger('slid')
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  var old = $.fn.carousel

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var $this   = $(this), href
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    $target.carousel(options)

    if (slideIndex = $this.attr('data-slide-to')) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  })

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      $carousel.carousel($carousel.data())
    })
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#collapse
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.transitioning = null

    if (this.options.parent) this.$parent = $(this.options.parent)
    if (this.options.toggle) this.toggle()
  }

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var actives = this.$parent && this.$parent.find('> .panel > .in')

    if (actives && actives.length) {
      var hasData = actives.data('bs.collapse')
      if (hasData && hasData.transitioning) return
      actives.collapse('hide')
      hasData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')
      [dimension](0)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('in')
        [dimension]('auto')
      this.transitioning = 0
      this.$element.trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
      [dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element
      [dimension](this.$element[dimension]())
      [0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse')
      .removeClass('in')

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .trigger('hidden.bs.collapse')
        .removeClass('collapsing')
        .addClass('collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  var old = $.fn.collapse

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this   = $(this), href
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
    var $target = $(target)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()
    var parent  = $this.attr('data-parent')
    var $parent = parent && $(parent)

    if (!data || !data.transitioning) {
      if ($parent) $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass('collapsed')
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    }

    $target.collapse(option)
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#dropdowns
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle=dropdown]'
  var Dropdown = function (element) {
    var $el = $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      $parent.trigger(e = $.Event('show.bs.dropdown'))

      if (e.isDefaultPrevented()) return

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown')

      $this.focus()
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive || (isActive && e.keyCode == 27)) {
      if (e.which == 27) $parent.find(toggle).focus()
      return $this.click()
    }

    var $items = $('[role=menu] li:not(.divider):visible a', $parent)

    if (!$items.length) return

    var index = $items.index($items.filter(':focus'))

    if (e.keyCode == 38 && index > 0)                 index--                        // up
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index=0

    $items.eq(index).focus()
  }

  function clearMenus() {
    $(backdrop).remove()
    $(toggle).each(function (e) {
      var $parent = getParent($(this))
      if (!$parent.hasClass('open')) return
      $parent.trigger(e = $.Event('hide.bs.dropdown'))
      if (e.isDefaultPrevented()) return
      $parent.removeClass('open').trigger('hidden.bs.dropdown')
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  var old = $.fn.dropdown

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('dropdown')

      if (!data) $this.data('dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)

}(window.jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#modals
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options   = options
    this.$element  = $(element)
    this.$backdrop =
    this.isShown   = null

    if (this.options.remote) this.$element.load(this.options.remote)
  }

  Modal.DEFAULTS = {
      backdrop: true
    , keyboard: true
    , show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this[!this.isShown ? 'show' : 'hide'](_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.escape()

    this.$element.on('click.dismiss.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(document.body) // don't move modals dom position
      }

      that.$element.show()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
          .one($.support.transition.end, function () {
            that.$element.focus().trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.focus().trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one($.support.transition.end, $.proxy(this.hideModal, this))
        .emulateTransitionEnd(300) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.focus()
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.removeBackdrop()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that    = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(document.body)

      this.$element.on('click.dismiss.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      $.support.transition && this.$element.hasClass('fade')?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (callback) {
      callback()
    }
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  var old = $.fn.modal

  $.fn.modal = function (option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
    var option  = $target.data('modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    e.preventDefault()

    $target
      .modal(option, this)
      .one('hide', function () {
        $this.is(':visible') && $this.focus()
      })
  })

  $(document)
    .on('show.bs.modal',  '.modal', function () { $(document.body).addClass('modal-open') })
    .on('hidden.bs.modal', '.modal', function () { $(document.body).removeClass('modal-open') })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.DEFAULTS = {
    animation: true
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  , trigger: 'hover focus'
  , title: ''
  , delay: 0
  , html: false
  , container: false
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled  = true
    this.type     = type
    this.$element = $(element)
    this.options  = this.getOptions(options)

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focus'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay
      , hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.'+ this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      var $tip = this.tip()

      this.setContent()

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var $parent = this.$element.parent()

        var orgPlacement = placement
        var docScroll    = document.documentElement.scrollTop || document.body.scrollTop
        var parentWidth  = this.options.container == 'body' ? window.innerWidth  : $parent.outerWidth()
        var parentHeight = this.options.container == 'body' ? window.innerHeight : $parent.outerHeight()
        var parentLeft   = this.options.container == 'body' ? 0 : $parent.offset().left

        placement = placement == 'bottom' && pos.top   + pos.height  + actualHeight - docScroll > parentHeight  ? 'top'    :
                    placement == 'top'    && pos.top   - docScroll   - actualHeight < 0                         ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth > parentWidth                              ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth < parentLeft                               ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)
      this.$element.trigger('shown.bs.' + this.type)
    }
  }

  Tooltip.prototype.applyPlacement = function(offset, placement) {
    var replace
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    $tip
      .offset(offset)
      .addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      replace = true
      offset.top = offset.top + height - actualHeight
    }

    if (/bottom|top/.test(placement)) {
      var delta = 0

      if (offset.left < 0) {
        delta       = offset.left * -2
        offset.left = 0

        $tip.offset(offset)

        actualWidth  = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight
      }

      this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
    } else {
      this.replaceArrow(actualHeight - height, actualHeight, 'top')
    }

    if (replace) $tip.offset(offset)
  }

  Tooltip.prototype.replaceArrow = function(delta, dimension, position) {
    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function () {
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one($.support.transition.end, complete)
        .emulateTransitionEnd(150) :
      complete()

    this.$element.trigger('hidden.bs.' + this.type)

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function () {
    var el = this.$element[0]
    return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
      width: el.offsetWidth
    , height: el.offsetHeight
    }, this.$element.offset())
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.tip = function () {
    return this.$tip = this.$tip || $(this.options.template)
  }

  Tooltip.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')
  }

  Tooltip.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide()
      this.$element = null
      this.options  = null
    }
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type) : this
    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  var old = $.fn.tooltip

  $.fn.tooltip = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(window.jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#popovers
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover%20requires%20tooltip.html')

  Popover.DEFAULTS = $.extend({} , $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right'
  , trigger: 'click'
  , content: ''
  , template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.arrow')
  }

  Popover.prototype.tip = function () {
    if (!this.$tip) this.$tip = $(this.options.template)
    return this.$tip
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  var old = $.fn.popover

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(window.jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#scrollspy
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    var href
    var process  = $.proxy(this.process, this)

    this.$element       = $(element).is('body') ? $(window) : $(element)
    this.$body          = $('body')
    this.$scrollElement = this.$element.on('scroll.bs.scroll-spy.data-api', process)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      || '') + ' .nav li > a'
    this.offsets        = $([])
    this.targets        = $([])
    this.activeTarget   = null

    this.refresh()
    this.process()
  }

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = this.$element[0] == window ? 'offset' : 'position'

    this.offsets = $([])
    this.targets = $([])

    var self     = this
    var $targets = this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#\w/.test(href) && $(href)

        return ($href
          && $href.length
          && [[ $href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        self.offsets.push(this[0])
        self.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
    var maxScroll    = scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets.last()[0]) && this.activate(i)
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate( targets[i] )
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    $(this.selector)
      .parents('.active')
      .removeClass('active')

    var selector = this.selector
      + '[data-target="' + target + '"],'
      + this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length)  {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  var old = $.fn.scrollspy

  $.fn.scrollspy = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      $spy.scrollspy($spy.data())
    })
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#tabs
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var previous = $ul.find('.active:last a')[0]
    var e        = $.Event('show.bs.tab', {
      relatedTarget: previous
    })

    $this.trigger(e)

    if (e.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.parent('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $this.trigger({
        type: 'shown.bs.tab'
      , relatedTarget: previous
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && $active.hasClass('fade')

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')

      element.addClass('active')

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu')) {
        element.closest('li.dropdown').addClass('active')
      }

      callback && callback()
    }

    transition ?
      $active
        .one($.support.transition.end, next)
        .emulateTransitionEnd(150) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  var old = $.fn.tab

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#affix
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)
    this.$window = $(window)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element = $(element)
    this.affixed  =
    this.unpin    = null

    this.checkPosition()
  }

  Affix.RESET = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
    var scrollTop    = this.$window.scrollTop()
    var position     = this.$element.offset()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top()
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom()

    var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :
                offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
                offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false

    if (this.affixed === affix) return
    if (this.unpin) this.$element.css('top', '')

    this.affixed = affix
    this.unpin   = affix == 'bottom' ? position.top - scrollTop : null

    this.$element.removeClass(Affix.RESET).addClass('affix' + (affix ? '-' + affix : ''))

    if (affix == 'bottom') {
      this.$element.offset({ top: document.body.offsetHeight - offsetBottom - this.$element.height() })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  var old = $.fn.affix

  $.fn.affix = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom) data.offset.bottom = data.offsetBottom
      if (data.offsetTop)    data.offset.top    = data.offsetTop

      $spy.affix(data)
    })
  })

}(window.jQuery);

/*! WOW - v1.0.3 - 2015-01-14
 * Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],e=0,f=b.length;f>e;e++)d=b[e],g.push(function(){var a,b,e,f;for(e=d.addedNodes||[],f=[],a=0,b=e.length;b>a;a++)c=e[a],f.push(this.doSync(c));return f}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass,null!=this.config.callback?this.config.callback(a):void 0},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;f=[];for(c in b)d=b[c],a[""+c]=d,f.push(function(){var b,f,g,h;for(g=this.vendors,h=[],b=0,f=g.length;f>b;b++)e=g[b],h.push(a[""+e+c.charAt(0).toUpperCase()+c.substr(1)]=d);return h}.call(this));return f},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(e=d(a),c=e.getPropertyCSSValue(b),i=this.vendors,g=0,h=i.length;h>g;g++)f=i[g],c=c||e.getPropertyCSSValue("-"+f+"-"+b);return c},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);
var animatePlayButton = null;
var animatePlayButtonScale = 1.00;
var videoDuration = 96000;
//o4dM_xWBB6I

// Function To Animate Play Button
function changePlayButtonScale() {
    if (animatePlayButtonScale == 1.08) {
        jQuery('.play-block-inner').css('transform', 'scale(1.0)');
        jQuery('.row-1_left_text-2').addClass('active');
        animatePlayButtonScale = 1.0;
    } else {
        jQuery('.play-block-inner').css('transform', 'scale(1.08)');
        jQuery('.row-1_left_text-2').removeClass('active');
        animatePlayButtonScale = 1.08;
    }
}

jQuery(window).scroll(function() {
    var hT = jQuery('.arrow-to-form').offset().top,
    hH = jQuery('.arrow-to-form').outerHeight(),
    wH = jQuery(window).height(),
    wS = jQuery(this).scrollTop();
    
    if ( wS > (hT+hH-wH) && wS < (hT+hH-wH + wH * 0.65) ){
        jQuery('.arrow-to-form').addClass('active');
    } else {
        jQuery('.arrow-to-form').removeClass('active');
    }
});

jQuery(document).ready(function() {

    jQuery('.input-phone-2').on( "input", function(){
        var form = jQuery(this).closest('form');
        var val = jQuery(this).val();

        if( val.length > 2 ) {
            form.find('.input-phone-3').focus();
        }
    });

    jQuery('.change-settings').click(function(){
        setTimeout(function(){
            setContainersAlign();
        }, 700);
    });

    jQuery.validator.methods.email = function( value, element ) {
        //return this.optional( element ) || /[a-z]+@[a-z]+\.[a-z]+/.test( value );
        return this.optional( element ) || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test( value );
    }

    var screenWidth = jQuery(window).width();
    var screenHeight = jQuery(window).height();
    
    // Fix Phone Input Border
    jQuery('.phone-input-block').click(function(){
        jQuery('.phone-input-block').addClass('active');
    });
    
    jQuery('.phone-input-block').on( "focusout", function(){
        jQuery('.phone-input-block').removeClass('active');
    });

    // Set Active Input if Valid
    jQuery('.inputblock').find('.input-ico-email').on( "focusout", function(){
        var block = jQuery(this).closest('.inputblock');

        if( jQuery(this).val() ) {
            block.addClass('active');
        } else {
            block.removeClass('active');
        }
    });

    jQuery('.phone-input-block').find('input').on( "focusout", function(){
        var iActive = 0;
        jQuery('.phone-input-block').find('input').each(function(){

            if( jQuery(this).val() && !jQuery(this).hasClass('input-phone-1') ) {
                iActive = 1;

                return false;
            }
        });

        var block = jQuery(this).closest('.inputblock');
        var block2 = block.find('.phone-input-block');

        if( iActive ) {
            block.addClass('active');
            block2.addClass('active');
        } else {
            block.removeClass('active');
            block2.removeClass('active');
        }

        /*if( jQuery(this).hasClass('input-phone-1') && !jQuery(this).val() ) {
            block2.addClass('active');
        } else {
            block2.removeClass('active');
        }*/
    });

    // Switch comments on mobile
    jQuery('.btn-comment').click(function() {
        jQuery('.btn-comment').removeClass('active');
        jQuery(this).addClass('active');

        var target = jQuery(this).data('target');

        jQuery('.fb-comment-block, .vk-comment-block').removeClass('active');
        jQuery(target).addClass('active');
    });

    // Show Programm On Click
    jQuery('.show-programm').click(function() {
        var section = jQuery('.section-3-inner-container-2');

        if (section.hasClass('active')) {
            jQuery(this).text('Смотреть программу');
            section.removeClass('active');
            jQuery('.section-3').removeClass('active');
        } else {
            jQuery(this).text('Скрыть программу');
            section.addClass('active');
            jQuery('.section-3').addClass('active');
        }
    });

    // Set Play Button Animation
    jQuery('.section-1').hover(
        function() {
            changePlayButtonScale();

            animatePlayButton = setInterval(function() {
                changePlayButtonScale();
            }, 900);
        },
        function() {
            clearInterval(animatePlayButton);
        }
    );
    
    // Hide Video On Click
    jQuery('.hide-player').click(function() {
        player.stopVideo();
        jQuery('.videoplayer').removeClass('active');
        
        return false;
    });

    // Play Video On Button Click
    /*jQuery('.play-block').click(function() {
        jQuery('.videoplayer').addClass('active');
        player.playVideo();
    });*/
    
    jQuery('.row-play-video').click(function() {
        jQuery('.videoplayer').addClass('active');
        player.playVideo();
    });

    // Set Video Container Height
    jQuery('.video-wrapper').css('height', screenHeight + 'px');

    // Set Form Container Height
    jQuery('.form-wrapper').css('height', screenHeight + 'px');

    // Set Form Align
    setTimeout(function(){
        setContainersAlign();
    }, 500);

    // Form Button Send Function with Validation
    jQuery('.send').click(function() {
        var form = jQuery(this).closest('form');
        form.find('.inputblock').addClass('active');

        if (form.valid()) {
            if (form.find('input[name=is_allowed_personal]').is(':checked')) {
                form.data('invalid','');
            } else {
                alert('Вы должны дать согласие на обработку персональных данных');
                return false;
            }
            //form.submit();
        }
    });

    // For Button Slide To Block
    jQuery(".go-to-block").click(function() {
        var target = jQuery(this).data('target');

        jQuery('html, body').animate({
            scrollTop: jQuery(target).offset().top
        }, 400);
    });

    wow.sync();

    jQuery('.agreements .form-agreement-children').on('change', function() {
        var $form = $(this).parents('.agreements'),
            $parent = $form.find('.form-agreement-parent'),
            count = $form.find('.form-agreement-children').length,
            countChecked = $form.find('.form-agreement-children:checked').length;
        console.log(count);

        if (count === countChecked) {
            $parent.prop('indeterminate', false);
            $parent.prop('checked', true);
        } else if (countChecked === 0) {
            $parent.prop('indeterminate', false);
            $parent.prop('checked', false);
        } else {
            $parent.prop('indeterminate', true);
        }
    });

    jQuery('.agreements .form-agreement-parent').on('change', function() {
        var $form = $(this).parents('.agreements');

        if ($(this).prop('checked')) {
            $form.find('.form-agreement-children').prop('checked', true);
        } else {
            $form.find('.collapseSettings').collapse("show");
            $form.find('.form-agreement-children').prop('checked', false);
        }
    });
});

jQuery(document).resize(function(){
    setTimeout(function(){
        setContainersAlign();
    }, 700);
});
jQuery(window).resize(function(){
    setTimeout(function(){
        setContainersAlign();
    }, 700);
});
jQuery(window).bind('resize', function() {
    setTimeout(function(){
        setContainersAlign();
    }, 700);
});

// ************ Youtube ****************
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        playerVars: {
            'controls': 0,
            'showinfo': 0,
            'rel' : 0
        },
        videoId: 'o4dM_xWBB6I',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    // Play Video After Animation
    /*setTimeout(function(){
        event.target.playVideo();
    }, 3000);*/
}

// 5. The API calls this function when the player's state changes.
var done = false;

function onPlayerStateChange(event) {
    if (event.data == 0) {
        player.stopVideo();
        jQuery('.videoplayer').removeClass('active');
    }
}

function stopVideo() {
    player.stopVideo();
}
// ************ /Youtube ****************

function setContainersAlign() {
    // Set Form Align
    var screenW = jQuery(window).width();
    var screenHeight = jQuery(window).height();

    if ( screenW > 1200 ) {
        var formColumnWidth = jQuery('.form-wrapper').width();
        var formColumnHeight = jQuery('.form-wrapper').height();
        var formBlockWidth = jQuery('.form-wrapper .form-wrapper_inner-wrapper').width();
        var formBlockHeight = jQuery('.form-wrapper .form-wrapper_inner-wrapper').height();

        var containerW = jQuery('.main-wrapper').width();
        var contentW = jQuery('.content-wrapper').width();
        var margBlock = (containerW - contentW - formColumnWidth) / 3;

        if ( formColumnHeight < formBlockHeight ) {
            var formMarginTop = (formColumnHeight - formBlockHeight);
        } else {
            var formMarginTop = (formColumnHeight - formBlockHeight) / 2 + 3;
        }

        jQuery('.form-wrapper .form-wrapper_inner-wrapper').css('margin-left', '0px');
        jQuery('.form-wrapper .form-wrapper_inner-wrapper').css('margin-top', formMarginTop + 'px');
        jQuery('.main-wrapper .content-wrapper').css('margin-left', margBlock + 'px');
        jQuery('.main-wrapper .content-wrapper').css('margin-right', margBlock + 'px');
    } else {
        var formColumnWidth = jQuery('.form-wrapper').width();
        var formColumnHeight = jQuery('.form-wrapper').height();
        var formBlockWidth = jQuery('.form-wrapper .form-wrapper_inner-wrapper').width();
        var formBlockHeight = jQuery('.form-wrapper .form-wrapper_inner-wrapper').height();

        var formMarginLeft = (formColumnWidth - formBlockWidth) / 2 - 16; // 16 srollbar

        if ( formColumnHeight < formBlockHeight ) {
            var formMarginTop = (formColumnHeight - formBlockHeight);
        } else {
            var formMarginTop = (formColumnHeight - formBlockHeight) / 2;
        }

        jQuery('.form-wrapper .form-wrapper_inner-wrapper').css('margin-left', formMarginLeft + 'px');
        jQuery('.form-wrapper .form-wrapper_inner-wrapper').css('margin-top', formMarginTop + 'px');

        jQuery('.main-wrapper .content-wrapper').css('margin-left', 'auto');
        jQuery('.main-wrapper .content-wrapper').css('margin-right', 'auto');
    }

    // Set Video Container Height
    jQuery('.video-wrapper').css('height', screenHeight + 'px');

    // Set Form Container Height
    jQuery('.form-wrapper').css('height', screenHeight + 'px');
}

// Init Animation Library
var screeHeight = jQuery(window).height();
var offSet = 50;

if (screeHeight > 900) {
    offSet = 50;
} else {
    offSet = screeHeight * 50 / 900;
    offSet = offSet.toFixed();
}

wow = new WOW({
    animateClass: 'animated',
    offset: offSet,
    callback: function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();


setTimeout(onYouTubeIframeAPIReady, 3000);