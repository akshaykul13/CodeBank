__twttrlr(function(using, provide, loadrunner, define) {provide("tfw/util/env",function(a){using("util/params",function(b){function d(){var a=36e5,d=b.combined(document.location)._;return c!==undefined?c:(c=!1,d&&/^\d+$/.test(d)&&(c=+(new Date)-parseInt(d)<a),c)}var c;a({isDynamicWidget:d})})});
provide("xd/detection",function(a){function b(){try{return!!navigator.plugins["Shockwave Flash"]||!!(new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))}catch(a){return!1}}a({getFlashEnabled:b,hasPostMessage:!!window.postMessage,isIE:!!navigator.userAgent.match("MSIE")})});
provide("util/widgetrpc",function(a){using("xd/detection","tfw/util/env",function(b,c){function k(){if(f)return f;if(!c.isDynamicWidget())return;var a=0,d=parent.frames.length,g;try{f=parent.frames[e];if(f)return f}catch(h){}if(!b.isIE)return;for(;a<d;a++)try{g=parent.frames[a];if(g&&typeof g.openIntent=="function")return f=g}catch(h){}}function l(){var a={};(typeof arguments[0]).toLowerCase()==="function"?a.success=arguments[0]:a=arguments[0];var b=a.success||function(){},d=a.timeout||function(){},e=a.nohub||function(){},f=a.complete||function(){},m=a.attempt!==undefined?a.attempt:j;if(!c.isDynamicWidget()||g)return e(),f(),!1;var n=k();m--;try{if(n&&n.trigger){b(n),f();return}}catch(o){}if(m<=0){g=!0,d(),f();return}if(+(new Date)-h>i*j){g=!0,e();return}window.setTimeout(function(){l({success:b,timeout:d,nohub:e,attempt:m,complete:f})},i)}var d="twttrHubFrameSecure",e=document.location.protocol=="http:"?"twttrHubFrame":d,f,g,h=+(new Date),i=100,j=20;a({withHub:l,contextualHubId:e,secureHubId:d})})});
provide("xd/jsonrpc",function(a){using("util/util","util/events",function(b,c){function e(a){this.con=a}function f(){this.id=f.id++}function g(){a(function(a){return new e(a)})}var d=function(a){return JSON&&JSON.parse?JSON.parse(a):JSON&&JSON.decode?JSON.decode(a):(new Function("return "+a))()};b.aug(e.prototype,{expose:function(a){this.con.bind("message",this._handleRequest(a))},call:function(a){var b=this;this._requests||(this._requests={},this.con.bind("message",function(a){var c;try{a=d(a)}catch(e){return}if(!a.callback)return;typeof a.id=="number"&&(c=b._requests[a.id])&&(a.error?c.trigger("error",a):c.trigger("success",a),delete b._requests[a.id])}));var c=new f;return this._requests[c.id]=c,c.send(this.con,a,Array.prototype.slice.call(arguments,1))},_handleRequest:function(a){var b=this;return function c(c){var e,f;try{c=d(c)}catch(g){return}if(c.callback)return;typeof c.id=="number"&&typeof a[c.method]=="function"&&(f=b._responseCallbacks(c.id),e=a[c.method].apply(a,c.params.concat(f)),typeof e!="undefined"&&f[0](e))}},_responseCallbacks:function(a){var b=this.con;return[function c(c){b.send(JSON.stringify({id:a,result:c,callback:!0}))},function d(d){b.send(JSON.stringify({id:a,error:d,callback:!0}))}]}}),f.id=0,b.aug(f.prototype,c.Emitter,{send:function(a,b,c){return a.send(JSON.stringify({id:this.id,method:b,params:c})),this},success:function(a){return this.bind("success",a),this},error:function(a){return this.bind("error",a),this}}),typeof JSON=="undefined"?using("$xd/json2.js",function(){g()}):g()})});
provide("xd/flash",function(a){function b(a,b){var c=b||Math.floor(Math.random()*100),d=['<object id="xdflashshim'+c+'" name="xdflashshim'+c+'"','type="application/x-shockwave-flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"','width="1" height="1" style="position:absolute;left:-9999px;top:-9999px;">','<param name="movie" value="'+a+"&debug="+window.__XDDEBUG__+'"/>','<param name="wmode" value="window"/>','<param name="allowscriptaccess" value="always"/>',"</object>"].join(" ");return d}a({object:b})});
provide("xd/base",function(a){using("util/util","util/events",function(b,c){function d(){}b.aug(d.prototype,c.Emitter,{transportMethod:"",init:function(){},send:function(a){var b;this._ready?this._performSend(a):b=this.bind("ready",function(){this.unbind("ready",b),this._performSend(a)})},ready:function(){this.trigger("ready",this),this._ready=!0},isReady:function(){return!!this._ready},receive:function(a){this.trigger("message",a)}}),a({Connection:d})})});
provide("xd/parent",function(a){using("xd/base","util/util","xd/detection",function(b,c,d){function h(a){var b=[];for(var c in a)b.push(c+"="+a[c]);return b.join(",")}function i(){}var e="__ready__",f=0,g;i.prototype=new b.Connection,c.aug(i.prototype,{_createChild:function(){this.options.window?this._createWindow():this._createIframe()},_createIframe:function(){var a={allowTransparency:!0,frameBorder:"0",scrolling:"no",tabIndex:"0",name:this._name()},b,e,f,h=c.aug(c.aug({},a),this.options.iframe);window.postMessage?(g||(g=document.createElement("iframe")),b=g.cloneNode(!1)):b=document.createElement('<iframe name="'+h.name+'">'),b.id=h.name;for(var i in h)i!="style"&&b.setAttribute(i,h[i]);var j=b.getAttribute("style");j&&typeof j.cssText!="undefined"?j.cssText=h.style:b.style.cssText=h.style;var k=this,l=function(){k.child=b.contentWindow,k._ready||k.init()};if(!b.addEventListener){var m=!1;b.attachEvent("onload",function(){if(m)return;m=!0,l()})}else b.addEventListener("load",l,!1);b.src=this._source(),(e=this.options.appendTo)?e.appendChild(b):(f=this.options.replace)?(e=f.parentNode,e&&e.replaceChild(b,f)):document.body.insertBefore(b,document.body.firstChild),d.isIE&&this.transportMethod&&this.transportMethod==="Flash"&&(b.src=b.src)},_createWindow:function(){var a={width:550,height:450,personalbar:"0",toolbar:"0",scrollbars:"1",resizable:"1"},b,d,e,f=c.aug(c.aug({},a),this.options.window),g=screen.width,i=screen.height;f.left=f.left||Math.round(g/2-f.width/2),f.top=f.top||Math.round(i/2-f.height/2),i<f.height&&(f.top=0,f.height=i);var j=this._name();b=window.open(this._source(),j,h(f)),b&&b.focus(),this.child=b,this.init()},_source:function(){return this.options.src},_name:function(){var a="_xd_"+f++;return window.parent&&window.parent!=window&&window.name&&(a=window.name+a),a}});var j=function(a){this.transportMethod="PostMessage",this.options=a,this._createChild()};j.prototype=new i,c.aug(j.prototype,{init:function(){function b(b){b.source===a.child&&(!a._ready&&b.data===e?a.ready():a.receive(b.data))}var a=this;window.addEventListener?window.addEventListener("message",b,!1):window.attachEvent("onmessage",b)},_performSend:function(a){this.child.postMessage(a,this.options.src)}});var k=function(a){this.transportMethod="Flash",this.options=a,this.token=Math.random().toString(16).substring(2),this._setup()};k.prototype=new i,c.aug(k.prototype,{_setup:function(){var a=this;using("xd/flash",function(b){window["__xdcb"+a.token]={receive:function(b){!a._ready&&b===e?a.ready():a.receive(b)},loaded:function(){}};var c=document.createElement("div");c.innerHTML=b.object("https://tfw-current.s3.amazonaws.com/xd/ft.swf?&token="+a.token+"&parent=true&callback=__xdcb"+a.token+"&xdomain="+a._host(),a.token),document.body.insertBefore(c,document.body.firstChild),a.proxy=c.firstChild,a._createChild()})},init:function(){},_performSend:function(a){this.proxy.send(a)},_host:function(){return this.options.src.replace(/https?:\/\//,"").split(/(:|\/)/)[0]},_source:function(){return this.options.src+(this.options.src.match(/\?/)?"&":"?")+"xd_token="+escape(this.token)}});var l=function(a){this.transportMethod="Fallback",this.options=a,this._createChild()};l.prototype=new i,c.aug(l.prototype,{init:function(){},_performSend:function(a){}}),a({connect:function(a){var b;return d.hasPostMessage?d.isIE&&a.window?d.getFlashEnabled()&&(b=new k(a)):b=new j(a):d.isIE&&d.getFlashEnabled()&&(b=new k(a)),b||(b=new l(a)),b}})})});
provide("tfw/hub/client",function(a){using("xd/parent","xd/jsonrpc","tfw/widget/base","util/widgetrpc",function(b,c,d,e){function f(a,e){var f=b.connect({src:a,iframe:{name:e,style:"position:absolute;top:-9999em;width:10px;height:10px"}});return c(f).expose({trigger:function(a,b,c){b=b||{};var e=b.region;delete b.region,twttr.events.trigger(a,{target:d.find(c),data:b,region:e,type:a})},initXPHub:function(){h(twttr.widgets.config,!0)}}),f}function g(a){return a?e.secureHubId:e.contextualHubId}function h(a,b){var c=a.assetUrl(b)+"/widgets/hub.html",d=g(b);if(document.getElementById(d))return;return f(c,d)}function i(a,d){var e=b.connect({window:{width:550,height:450},src:a});c(e).expose({trigger:function(a,b){twttr.events.trigger(a,{target:d,region:"intent",type:a,data:b})}})}a({init:h,openIntent:i})})})});