(function(e){function t(t){for(var o,c,i=t[0],l=t[1],s=t[2],u=0,b=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&b.push(a[c][0]),a[c]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);d&&d(t);while(b.length)b.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(o=!1)}o&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},c={app:0},a={app:0},r=[];function i(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a42192b9","chunk-6bb0c2b6":"fdfd2b47","chunk-728e8a74":"ee2f3a3f","chunk-a8b1b1fc":"66dc8e08","chunk-f1421e94":"a20c59c7"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-6bb0c2b6":1,"chunk-728e8a74":1,"chunk-a8b1b1fc":1,"chunk-f1421e94":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-6bb0c2b6":"7d4e9091","chunk-728e8a74":"e6d63f76","chunk-a8b1b1fc":"5f35c862","chunk-f1421e94":"7792980a"}[e]+".css",a=l.p+o,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var s=r[i],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===o||u===a))return t()}var b=document.getElementsByTagName("style");for(i=0;i<b.length;i++){s=b[i],u=s.getAttribute("data-href");if(u===o||u===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||a,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete c[e],d.parentNode.removeChild(d),n(r)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){c[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=r);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(e);var b=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",b.name="ChunkLoadError",b.type=o,b.request=c,n[1](b)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var b=0;b<s.length;b++)t(s[b]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0613":function(e,t,n){"use strict";var o=n("5502"),c=n("bc3a"),a=n.n(c);t["a"]=Object(o["a"])({state:{websocketConnected:!1,admin:!1,warning:"",fireworks:!1,chatinuse:!1},mutations:{setWebsocketConnected:function(e,t){e.websocketConnected=t},setAdmin:function(e,t){e.admin=t},setWarning:function(e,t){e.warning=t}},actions:{connectWebsocket:function(e){var t=e.commit;t("setWebsocketConnected",!0)},disconnectWebsocket:function(e){var t=e.commit;t("setWebsocketConnected",!1)},loginAdmin:function(e,t){var n=e.commit;n("setAdmin",!0),localStorage.setItem("token",JSON.stringify(t)),a.a.defaults.headers.common.Authorization="Bearer "+t},logoutAdmin:function(e){var t=e.commit;t("setAdmin",!1),localStorage.removeItem("token"),delete a.a.defaults.headers.common.Authorization},removeWarning:function(e){var t=e.commit;t("setWarning",null)}},getters:{websocketConnected:function(e){return e.websocketConnected},admin:function(e){return e.admin},warning:function(e){return e.warning}},modules:{}})},"0792":function(e,t,n){},"24bd":function(e,t,n){"use strict";n("0792")},7955:function(e,t,n){},"974f":function(e,t,n){},9858:function(e,t,n){"use strict";n("b0c0");var o=n("7a23"),c={key:0,class:"center",border:"0",cellspacing:"0",cellpadding:"0"},a=Object(o["h"])("tr",null,[Object(o["h"])("th",null,"Playername")],-1),r={key:1},i=Object(o["g"])(" Divide selection in "),l=Object(o["g"])(" pools "),s={key:0,class:"center",border:"0",cellspacing:"0",cellpadding:"0"},u=Object(o["h"])("tr",null,[Object(o["h"])("th",null,"Playername")],-1),b=Object(o["h"])("option",{value:"0",selected:""},"Not",-1),d={key:1},h={key:2};function p(e,t,n,p,f,O){return Object(o["q"])(),Object(o["d"])(o["a"],null,[0==e.withPoolsSelector?(Object(o["q"])(),Object(o["d"])(o["a"],{key:0},[Object(o["h"])("h2",null,"Online players: "+Object(o["z"])(e.players.length),1),e.players.length?(Object(o["q"])(),Object(o["d"])("table",c,[a,(Object(o["q"])(!0),Object(o["d"])(o["a"],null,Object(o["w"])(e.players,(function(e,t){return Object(o["q"])(),Object(o["d"])("tr",{key:t},[Object(o["h"])("td",null,Object(o["z"])(e.name),1)])})),128))])):this.loaded?(Object(o["q"])(),Object(o["d"])("p",r,"There are no clients / players connected")):Object(o["e"])("",!0)],64)):(Object(o["q"])(),Object(o["d"])(o["a"],{key:1},[Object(o["h"])("label",null,[i,Object(o["h"])("input",{onChange:t[1]||(t[1]=function(){return e.onautodividechange.apply(e,arguments)}),type:"number",name:"points",min:"0",max:"5",value:"0"},null,32),l]),e.players.length?(Object(o["q"])(),Object(o["d"])("table",s,[u,(Object(o["q"])(!0),Object(o["d"])(o["a"],null,Object(o["w"])(e.players,(function(n,c){return Object(o["q"])(),Object(o["d"])("tr",{key:c},[Object(o["h"])("td",null,Object(o["z"])(n.name),1),Object(o["h"])("td",null,[Object(o["h"])("select",{id:c,onChange:t[2]||(t[2]=function(){return e.onplayerpoolselected.apply(e,arguments)}),value:e.getplayerpoolvalue(n.name),playername:n.name},[b,(Object(o["q"])(),Object(o["d"])(o["a"],null,Object(o["w"])(5,(function(e,t){return Object(o["h"])("option",{key:t,value:t+1},"Pool "+Object(o["z"])(t+1),9,["value"])})),64))],40,["id","value","playername"])])])})),128))])):this.loaded?(Object(o["q"])(),Object(o["d"])("p",d,"There are no clients / players connected")):Object(o["e"])("",!0)],64)),0==this.loaded?(Object(o["q"])(),Object(o["d"])("p",h,"...")):Object(o["e"])("",!0)],64)}n("4de4"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0");var f=Object(o["i"])({name:"OnlinePlayersList",props:{withPoolsSelector:{type:Boolean,default:!1}},emits:["onplayerpoolselected"],data:function(){return{players:[],loaded:!1,playerPoolValues:{}}},mounted:function(){var e=this;this.playerPoolValues=new Map,this.$websocket.subscribe("/topic/onplayerjoined",(function(t){var n=JSON.parse(t.body);e.players.push(n)})),this.$websocket.subscribe("/topic/onplayerleft",(function(t){var n=JSON.parse(t.body);e.players=e.players.filter((function(e){return e.name!=n.name})),e.withPoolsSelector&&e.$emit("onplayerpoolselected",[0,n.name])})),this.$http.get("/playerlist").then((function(t){e.players=t.data,e.loaded=!0})).catch((function(){}))},beforeUnmount:function(){this.$websocket.unsubscribe("/topic/onplayerjoined"),this.$websocket.unsubscribe("/topic/onplayerleft")},methods:{onplayerpoolselected:function(e){var t=e.target.value,n=e.target.getAttribute("playername");this.emitonplayerpoolselected(t,n)},emitonplayerpoolselected:function(e,t){this.$emit("onplayerpoolselected",[e,t]),this.playerPoolValues.has(t)&&this.playerPoolValues.get(t)==e||this.playerPoolValues.set(t,e)},getplayerpoolvalue:function(e){return this.playerPoolValues.has(e)?this.playerPoolValues.get(e):0},onautodividechange:function(e){for(var t=this.players.length,n=e.target.value,o=Math.floor(t/n),c=1,a=0,r=0;r<this.players.length;r++){var i=this.players[r].name;a<o?(this.emitonplayerpoolselected(c,i),a++):(t-=a,c++,n--,o=Math.floor(t/n),this.emitonplayerpoolselected(c,i),a=1)}}}});f.render=p;t["a"]=f},"9bc7":function(e,t,n){"use strict";n("7955")},"9e1b":function(e,t,n){"use strict";n("b04f")},b04f:function(e,t,n){},b4f6:function(e,t,n){"use strict";n("974f")},cd49:function(e,t,n){"use strict";n.r(t);n("2ca0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("bc3a"),c=n.n(o),a=n("cc7d"),r=n.n(a),i=n("c6e1"),l=n.n(i),s=n("7a23"),u={class:"playerlist"},b={class:"chat"},d={id:"nav"},h=Object(s["g"])("Home"),p=Object(s["g"])(" | "),f=Object(s["g"])("Games"),O=Object(s["g"])(" | "),j=Object(s["g"])("Tournament"),m=Object(s["g"])(" | "),g=Object(s["g"])("Admin Login"),v=Object(s["g"])("Admin Panel"),y=Object(s["g"])(" | "),k=Object(s["g"])("Logout"),w={key:0,class:"warning"},P=Object(s["h"])("br",null,null,-1);function C(e,t,n,o,c,a){var r=Object(s["x"])("OnlinePlayersList"),i=Object(s["x"])("Chat"),l=Object(s["x"])("router-link"),C=Object(s["x"])("DikkeVuurpijl"),x=Object(s["x"])("router-view");return Object(s["q"])(),Object(s["d"])(s["a"],null,[e.websocketConnected?(Object(s["q"])(),Object(s["d"])("div",{key:0,class:["sidebar",e.chatinuse?"chatinuse":"chatnotinuse"]},[Object(s["h"])("div",u,[Object(s["h"])(r)]),Object(s["h"])("div",b,[Object(s["h"])(i)])],2)):Object(s["e"])("",!0),Object(s["h"])("div",{class:e.websocketConnected?"content":""},[Object(s["h"])("div",d,[Object(s["h"])(l,{class:"pagelink",to:"/"},{default:Object(s["E"])((function(){return[h]})),_:1}),p,Object(s["h"])(l,{class:"pagelink",to:"/games"},{default:Object(s["E"])((function(){return[f]})),_:1}),O,Object(s["h"])(l,{class:"pagelink",to:"/tournament"},{default:Object(s["E"])((function(){return[j]})),_:1}),m,e.isAdmin?(Object(s["q"])(),Object(s["d"])(s["a"],{key:1},[Object(s["h"])(l,{class:"pagelink",to:"/admin"},{default:Object(s["E"])((function(){return[v]})),_:1}),y,Object(s["h"])(l,{to:"/?",onClick:e.logout},{default:Object(s["E"])((function(){return[k]})),_:1},8,["onClick"])],64)):(Object(s["q"])(),Object(s["d"])(l,{key:0,to:"/login"},{default:Object(s["E"])((function(){return[g]})),_:1}))]),e.isWarning()?(Object(s["q"])(),Object(s["d"])("div",w,[Object(s["g"])(Object(s["z"])(e.getWarning())+" ",1),P,Object(s["h"])("button",{class:"x",onClick:t[1]||(t[1]=function(){return e.removeWarning.apply(e,arguments)})},"close")])):Object(s["e"])("",!0),e.fireworksStarted()?(Object(s["q"])(),Object(s["d"])(C,{key:1})):Object(s["e"])("",!0),Object(s["h"])(x)],2)],64)}n("c975");var x=n("0613"),q=n("9858"),S=Object(s["H"])("data-v-535f8c10");Object(s["t"])("data-v-535f8c10");var A=Object(s["h"])("h2",null,"Chat",-1),T={class:"log",id:"chatlog"},E=Object(s["g"])(" [");Object(s["r"])();var $=S((function(e,t,n,o,c,a){return e.messages.length>0?(Object(s["q"])(),Object(s["d"])(s["a"],{key:0},[A,Object(s["h"])("div",T,[(Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["w"])(e.messages,(function(e,t){return Object(s["q"])(),Object(s["d"])("div",{class:"msg",key:t},[E,Object(s["h"])("span",{style:"color: "+e.color+";"},Object(s["z"])(e.username),5),Object(s["g"])("]: "+Object(s["z"])(e.text),1)])})),128))])],64)):Object(s["e"])("",!0)})),_=Object(s["i"])({name:"Chat",data:function(){return{messages:[]}},mounted:function(){var e=this,t={},n=function(e){if(!t[e]){var n=["#7a7aff","#ff635b","#ee7b00","#38da9e"],o=Math.floor(Math.random()*n.length);t[e]=n[o]}return t[e]};this.$websocket.subscribe("/topic/chat",(function(t){x["a"].state.chatinuse=!0;var o=JSON.parse(t.body);o.color=n(o.username),e.messages.push(o),e.$nextTick((function(){var e=document.getElementById("chatlog");e&&(e.scrollTop=e.scrollHeight)}))}))},beforeUnmount:function(){this.$websocket.unsubscribe("/topic/chat")}});n("9bc7");_.render=$,_.__scopeId="data-v-535f8c10";var W=_,L=Object(s["H"])("data-v-6506c73c");Object(s["t"])("data-v-6506c73c");var I={class:"wrapper"},N=Object(s["h"])("div",{class:"pyro"},[Object(s["h"])("div",{class:"before"}),Object(s["h"])("div",{class:"after"})],-1);Object(s["r"])();var z=L((function(e,t,n,o,c,a){return Object(s["q"])(),Object(s["d"])("div",I,[N])})),V=Object(s["i"])({name:"DikkeVuurpijl"});n("24bd");V.render=z,V.__scopeId="data-v-6506c73c";var M=V,H=Object(s["i"])({name:"App",components:{OnlinePlayersList:q["a"],Chat:W,DikkeVuurpijl:M},computed:{chatinuse:function(){return x["a"].state.chatinuse},isAdmin:function(){return x["a"].getters.admin},websocketConnected:function(){return x["a"].getters.websocketConnected}},methods:{isWarning:function(){return null!=x["a"].state.warning&&void 0!=x["a"].getters.warning&&""!=x["a"].getters.warning},getWarning:function(){return x["a"].state.warning},removeWarning:function(){x["a"].dispatch("removeWarning"),x["a"].state.fireworks=!1},fireworksStarted:function(){return x["a"].state.fireworks},logout:function(){x["a"].dispatch("logoutAdmin")}},mounted:function(){setTimeout((function(){0==x["a"].getters.websocketConnected&&location.reload()}),3e3+2e3*Math.random());var e=navigator.userAgent,t=e.indexOf("MSIE ")>-1||e.indexOf("Trident/")>-1;t&&alert("Internet explorer is not supported. We recommend to use Firefox, Google chrome or Edge.")}});n("9e1b");H.render=C;var G=H,J=(n("a9e3"),n("d3b7"),n("6c02")),B=Object(s["H"])("data-v-6ce4bb3d");Object(s["t"])("data-v-6ce4bb3d");var D=Object(s["h"])("h1",null,"Hanze Game Server",-1),R={key:0,class:"mt2"},U=Object(s["h"])("p",null,[Object(s["g"])(" The Game Server consists of this frontend that runs on port 8081 by default. "),Object(s["h"])("br"),Object(s["g"])(" To play a game on this server, you have to build you own client to talk with the text protocol that is explained in the "),Object(s["h"])("a",{href:"/protocol-newgameserver.txt"},"protocol.txt")],-1),Y=Object(s["h"])("p",null," The Game Server that lets you play games with the text protocol runs on port 7789 by default. ",-1),K=Object(s["h"])("p",null,[Object(s["g"])(" You are required to "),Object(s["h"])("a",{href:"/login"},"login"),Object(s["g"])(" to start a tournament. "),Object(s["h"])("br"),Object(s["g"])(" Playing a game can be done without logging in. ")],-1),F={key:1,class:"mt2"},Q=Object(s["h"])("b",null," Joining the server, localhost example: ",-1),X=Object(s["h"])("p",null," To join this server, create a TCP connection. ",-1),Z=Object(s["h"])("code",null," $ telnet localhost 7789",-1),ee=Object(s["h"])("p",null,[Object(s["g"])("Now type "),Object(s["h"])("code",null,"login yourname")],-1),te=Object(s["h"])("p",null,[Object(s["g"])(" You will get an "),Object(s["h"])("code",null,"OK"),Object(s["g"])(" back from the server and your name will appear on the left ")],-1),ne={key:2,class:"mt2"},oe=Object(s["f"])("<b data-v-6ce4bb3d> See who is online, localhost example: </b><p data-v-6ce4bb3d> We start with a TCP connection. </p><code data-v-6ce4bb3d> $ telnet localhost 7789</code><p data-v-6ce4bb3d> Now type <code data-v-6ce4bb3d>get playerlist</code> <br data-v-6ce4bb3d> You will get an <code data-v-6ce4bb3d>OK</code> back from the server and after that you will get <code data-v-6ce4bb3d>SVR PLAYERLIST []</code></p><p data-v-6ce4bb3d> Now login using <code data-v-6ce4bb3d>login yourname</code> If we now ask the server again for the player list <code data-v-6ce4bb3d>get playerlist</code> we get the response: <code data-v-6ce4bb3d>OK</code> and <code data-v-6ce4bb3d>SVR PLAYERLIST [&quot;yourname&quot;]</code></p>",5);Object(s["r"])();var ce=B((function(e,t,n,o,c,a){return Object(s["q"])(),Object(s["d"])(s["a"],null,[D,Object(s["h"])("pre",null,"    "+Object(s["z"])(e.homepagetext)+"\n  ",1),Object(s["h"])("button",{onClick:t[1]||(t[1]=function(t){return e.view=1}),class:1==e.view?"pressed":""}," about ",2),Object(s["h"])("button",{onClick:t[2]||(t[2]=function(t){return e.view=2}),class:2==e.view?"pressed":""}," example login ",2),Object(s["h"])("button",{onClick:t[3]||(t[3]=function(t){return e.view=3}),class:3==e.view?"pressed":""}," example see who is online ",2),1==e.view?(Object(s["q"])(),Object(s["d"])("div",R,[U,Y,K])):Object(s["e"])("",!0),2==e.view?(Object(s["q"])(),Object(s["d"])("div",F,[Q,X,Z,ee,te])):Object(s["e"])("",!0),3==e.view?(Object(s["q"])(),Object(s["d"])("div",ne,[oe])):Object(s["e"])("",!0)],64)})),ae=Object(s["i"])({name:"Home",data:function(){return{view:1,homepagetext:""}},computed:{websocketConnected:function(){return x["a"].getters.websocketConnected},currentURL:function(){return window.location.hostname}},mounted:function(){var e=this;document.title="Game Server | Home",this.$http.get("/homepagetext").then((function(t){t.data&&(e.homepagetext=t.data)})).catch((function(){}))}});n("b4f6");ae.render=ce,ae.__scopeId="data-v-6ce4bb3d";var re=ae;function ie(e){return{gameId:Number(e.params.gameId)}}var le=[{path:"/",name:"Home",component:re},{path:"/login",name:"Login",component:function(){return n.e("about").then(n.bind(null,"a55b"))}},{path:"/admin",name:"Admin",component:function(){return n.e("chunk-a8b1b1fc").then(n.bind(null,"3530"))},beforeEnter:function(e,t,n){x["a"].getters.admin?n():n({name:"Login"})}},{path:"/games",name:"Games",component:function(){return n.e("chunk-f1421e94").then(n.bind(null,"a2e9"))}},{path:"/tournament",name:"Tournament",component:function(){return n.e("chunk-6bb0c2b6").then(n.bind(null,"1794"))}},{path:"/game/:gameId",name:"Game",props:ie,component:function(){return n.e("chunk-728e8a74").then(n.bind(null,"20cf"))}}],se=Object(J["a"])({history:Object(J["b"])("/"),routes:le}),ue=se,be=Object(s["c"])(G);be.use(x["a"]),be.use(ue);var de=!1,he=8081,pe=location.protocol.startsWith("https")?"https://":"http://",fe=pe+(de?"localhost:"+he:window.location.host);be.config.globalProperties.$http=c.a,be.config.globalProperties.$http.defaults.baseURL=fe+"/api",be.config.globalProperties.$http.defaults.headers.common.Accept="application/json",be.config.globalProperties.$http.defaults.headers.common["Access-Control-Allow-Origin"]="*";var Oe=JSON.parse(localStorage.getItem("token"));Oe&&(be.config.globalProperties.$http.defaults.headers.common.Authorization="Bearer "+Oe,x["a"].dispatch("loginAdmin",Oe)),be.config.globalProperties.$websocket=l.a.over(new r.a(fe+"/websocket")),be.config.globalProperties.$websocket.debug=function(){},be.config.globalProperties.$websocket.connect({},(function(e){x["a"].dispatch("connectWebsocket")}),(function(e){x["a"].dispatch("disconnectWebsocket")})),be.mount("#app")}});
//# sourceMappingURL=app.34b01ce3.js.map