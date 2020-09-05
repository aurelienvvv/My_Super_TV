(function(e){function t(t){for(var a,r,o=t[0],c=t[1],l=t[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={app:0},s=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1e03":function(e,t,n){},"49c5":function(e,t,n){},"52f3":function(e,t,n){"use strict";var a=n("ec0e"),i=n.n(a);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"-theme-blue",attrs:{id:"app"}},[n("Header"),n("transition",{attrs:{name:"slide",mode:"out-in"}},[n("router-view")],1)],1)},s=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("router-link",{attrs:{to:"/"}},[n("h1",[e._v("My Super TV")])]),n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/explore"}},[e._v("Explorer")])],1)],1)},o=[],c={name:"HelloWorld"},l=c,u=(n("52f3"),n("2877")),d=Object(u["a"])(l,r,o,!1,null,null,null),p=d.exports,v={name:"App",components:{Header:p}},m=v,h=(n("5c0b"),Object(u["a"])(m,i,s,!1,null,null,null)),f=h.exports,y=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home-container"},[n("div",{staticClass:"theme-choice"},[n("ul",[n("li",[n("a",{staticClass:"blue",attrs:{href:"#"},on:{click:e.blueTheme}})]),n("li",[n("a",{staticClass:"violet",attrs:{href:"#"},on:{click:e.violetTheme}})]),n("li",[n("a",{staticClass:"orange",attrs:{href:"#"},on:{click:e.orangeTheme}})])])]),n("div",{staticClass:"info-container"},[n("p",{staticClass:"intro"},[e._v("Créé ta TV personnalisée avec ton contenu youtube favoris !")]),n("div",{staticClass:"btns-wrapper"},[n("router-link",{staticClass:"btn",attrs:{to:"/creer-tv"}},[n("span",[e._v("Commencer")])])],1)]),n("div",{staticClass:"filter-img"}),n("div",{staticClass:"video-container"},[n("VuePlyr",{ref:"plyr",staticStyle:{height:"100%",overflow:"hidden"}},[n("div",{attrs:{"data-plyr-provider":"youtube","data-plyr-embed-id":e.video}})])],1)])},C=[],g=n("afa7"),_={name:"Home",components:{VuePlyr:g["a"]},data:function(){return{video:"iXzBdNjpYw0",videoList:[]}},computed:{player:function(){return this.$refs.plyr.player}},methods:{blueTheme:function(){document.querySelector("#app").classList.add("-theme-blue"),document.querySelector("#app").classList.remove("-theme-orange")},orangeTheme:function(){document.querySelector("#app").classList.add("-theme-orange"),document.querySelector("#app").classList.remove("-theme-blue")},violetTheme:function(){document.querySelector("#app").classList.remove("-theme-orange"),document.querySelector("#app").classList.remove("-theme-blue")}},mounted:function(){var e=this;setTimeout((function(){e.player.play(),e.player.currentTime=50,e.player.volume=0}),3e3)}},x=_,k=(n("63d1"),Object(u["a"])(x,b,C,!1,null,null,null)),L=k.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("ABOUT")])},V=[],P={},T=P,O=Object(u["a"])(T,w,V,!1,null,null,null),q=O.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper-tv"},[n("div",{staticClass:"btn-info-channel",on:{click:e.toggleDescr}}),n("div",{staticClass:"infos-channel"},[n("div",{staticClass:"title"},[e._v(e._s(e.titleTV))]),n("div",{staticClass:"pseudo"},[e._v("Par "+e._s(e.pseudo))]),n("div",[e._v(e._s(e.description))])]),n("div",{staticClass:"left-part",on:{mousemove:e.mouseOver}},[n("a",{attrs:{href:"#"},on:{click:e.prevVideo}})]),n("div",{staticClass:"right-part",on:{mousemove:e.mouseOverRight}},[n("a",{attrs:{href:"#"},on:{click:e.nextVideo}})]),n("button",{staticClass:"btn-prev"}),n("div",[n("div",{staticClass:"marquee-text"},[n("marquee-text",{attrs:{repeat:8,duration:5}},[e._v(" "+e._s(e.marquee)+" "),n("span",{staticClass:"spacer"})])],1)]),n("div",{staticClass:"video-container"},[n("div",{staticClass:"load-video"},[n("div",{staticClass:"title-load"},[e._v(e._s(e.titleTV))])]),e.linkLoaded?n("VuePlyr",{ref:"plyr",staticStyle:{height:"100%",overflow:"hidden"}},[n("div",{attrs:{"data-plyr-provider":"youtube","data-plyr-embed-id":e.video}})]):e._e()],1)])},I=[],N=(n("a4d3"),n("e01a"),n("b0c0"),n("b85c")),j=n("0150"),A=n.n(j),E=n("bc3a"),$=n.n(E),D={name:"HelloWorld",components:{VuePlyr:g["a"],MarqueeText:A.a},data:function(){return{video:"",currentVideoIndex:"",videoList:[],mute:!1,onPlay:!0,marquee:"Welcome",titleTV:"",titre:"",btnEditActive:!1,idChannel:this.$route.params.id,pseudo:"",description:"",linkLoaded:!1,player:""}},methods:{selectVideo:function(){this.video=this.videoList[0].id,this.marquee=this.videoList[0].artist},nextVideo:function(){var e=this;this.currentVideoIndex===this.videoList.length-1?this.currentVideoIndex=0:this.currentVideoIndex+=1,this.video=this.videoList[this.currentVideoIndex].id,setTimeout((function(){e.marquee=e.videoList[e.currentVideoIndex].artist}),1e3),this.sourceVideo()},prevVideo:function(){var e=this;0===this.currentVideoIndex?this.currentVideoIndex=this.videoList.length-1:this.currentVideoIndex-=1,this.video=this.videoList[this.currentVideoIndex].id,setTimeout((function(){e.marquee=e.videoList[e.currentVideoIndex].artist}),1e3),this.sourceVideo()},mouseOver:function(e){var t=document.querySelector(".btn-prev").style;setTimeout((function(){t.top="".concat(e.clientY,"px"),t.left="".concat(e.clientX,"px"),t.transform="scaleX(-1)"}),100)},mouseOverRight:function(e){var t=document.querySelector(".btn-prev").style;t.top="".concat(e.clientY,"px"),t.left="".concat(e.clientX,"px"),t.transform="scaleX(1)"},loadScreen:function(){var e=document.querySelector(".load-video");e.classList.add("active"),setTimeout((function(){e.classList.remove("active")}),3e3)},sourceVideo:function(){var e=this;this.player.source={type:"video",sources:[{src:this.video,provider:"youtube"}]},setTimeout((function(){e.player.play()}),2e3),this.loadScreen()},changeAtEnd:function(){var e=this;setInterval((function(){parseInt(e.player.currentTime)===parseInt(e.player.media.duration)-5&&e.nextVideo()}),1e3),this.loadScreen()},callAPI:function(){var e=this;$.a.get("/api/").then((function(t){var n=t.data[e.idChannel-1];e.titleTV=n.name,e.pseudo=n.pseudo,e.description=n.description,console.log(t);var a,i=Object(N["a"])(t.data[e.idChannel-1].list);try{for(i.s();!(a=i.n()).done;){var s=a.value;e.videoList.push(s)}}catch(r){i.e(r)}finally{i.f()}e.selectVideo(),e.linkLoaded=!0,setTimeout((function(){e.player=e.$refs.plyr.player,e.player.play()}),2e3)}))},toggleDescr:function(){document.querySelector(".infos-channel").classList.toggle("-visible")}},computed:{},created:function(){this.callAPI()},mounted:function(){this.loadScreen(),this.currentVideoIndex=0,this.changeAtEnd()}},H=D,M=(n("e59a"),Object(u["a"])(H,S,I,!1,null,null,null)),z=M.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"create-tv-wrapper"},[n("span",{staticClass:"step-number"},[e._v(e._s(e.stepName))]),e._m(0),n("form",{staticClass:"question-name"},[n("div",{staticClass:"screen screen-one -visible"},[n("div",{staticClass:"flex-wrapper"},[n("div",{staticClass:"input-wrapper"},[n("label",{attrs:{for:"channel-name"}},[e._v("Donne un nom à ta chaîne")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.tvName,expression:"tvName"}],attrs:{id:"channel-name",placeholder:"Jean-Jean TV !",required:""},domProps:{value:e.tvName},on:{input:function(t){t.target.composing||(e.tvName=t.target.value)}}})]),n("div",{staticClass:"input-wrapper"},[n("label",{attrs:{for:"pseudo-name"}},[e._v("Ton blaze")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.pseudoName,expression:"pseudoName"}],attrs:{id:"pseudo-name",placeholder:"Jean-Du-58",required:""},domProps:{value:e.pseudoName},on:{input:function(t){t.target.composing||(e.pseudoName=t.target.value)}}})])]),n("button",{staticClass:"btn -step",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.stepOneOk(t)}}},[n("span",[e._v("Valider")])])])]),n("form",{staticClass:"question-descr"},[n("div",{staticClass:"screen screen-two"},[n("h1",{staticClass:"title-step"},[e._v("Fais une description de ta chaîne")]),n("div",{staticClass:"input-wrapper"},[n("label",{attrs:{for:"channel-descr"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.descrChannel,expression:"descrChannel"}],attrs:{id:"channel-descr",placeholder:"Compil' de mes vidéos favorites",required:""},domProps:{value:e.descrChannel},on:{input:function(t){t.target.composing||(e.descrChannel=t.target.value)}}})]),n("button",{staticClass:"btn -step",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.stepDescOk(t)}}},[n("span",[e._v("Valider")])])])]),n("form",[n("div",{staticClass:"screen screen-three"},[n("div",{staticClass:"flex-wrapper"},[n("div",{staticClass:"input-wrapper"},[n("label",{attrs:{for:"artist"}},[e._v("Nom de l'artiste")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.nameLink,expression:"nameLink"}],attrs:{id:"artist"},domProps:{value:e.nameLink},on:{input:function(t){t.target.composing||(e.nameLink=t.target.value)}}})]),n("div",{staticClass:"input-wrapper"},[n("label",{attrs:{for:"youtube-link"}},[e._v("Entrez le lien youtube")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.youtubeLink,expression:"youtubeLink"}],attrs:{id:"youtube-link"},domProps:{value:e.youtubeLink},on:{input:function(t){t.target.composing||(e.youtubeLink=t.target.value)}}})])]),n("div",{staticClass:"wrapper-ajout"},[n("div",{staticClass:"titles-added"},[e._v(e._s(e.countProg)+" titre(s) ajouté(s)")]),n("div",{staticClass:"wrapper-btns"},[n("button",{staticClass:"btn -ajout",on:{click:function(t){return t.preventDefault(),e.goToProg(t)}}},[n("span",[e._v("Ajouter")])]),e.countProg>1?n("div",[n("button",{staticClass:"btn -theme-white -launch",on:{click:function(t){return t.preventDefault(),e.postAPI(t)}}},[n("span",[e._v("Lancer ma TV !")])])]):e._e()])])])])])},X=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"steps-indicator"},[n("span")])}],B={name:"CreateTv",data:function(){return{progArr:[],tvName:"",youtubeLink:"",nameLink:"",countProg:0,stepName:"Étape 1",descrChannel:"",pseudoName:""}},methods:{goToProg:function(){""===this.youtubeLink||""===this.nameLink?alert("Il faut remplir les 2 champs"):(this.progArr.push({artist:this.nameLink,id:this.youtubeLink}),this.nameLink="",this.youtubeLink="",document.getElementById("artist").focus(),this.countProg=this.countProg+=1,this.countProg>1&&(document.querySelector(".steps-indicator span").style.width="100%"))},stepOneOk:function(){""===this.tvName||""===this.pseudoName?alert("vous devez entrer le nom de votre chaine et votre pseudo"):(document.querySelector(".steps-indicator span").style.width="33%",this.stepName="Étape 2",document.querySelector(".screen-one").classList.remove("-visible"),document.querySelector(".screen-two").classList.add("-visible"))},stepDescOk:function(){""!==this.descrChannel?(document.querySelector(".steps-indicator span").style.width="66%",this.stepName="Étape 3",document.querySelector(".screen-two").classList.remove("-visible"),document.querySelector(".screen-three").classList.add("-visible")):alert("vous devez une description")},callAPI:function(){var e=this;$.a.get("/api/").then((function(t){e.$router.push("/tv/".concat(t.data.length)),window.location.reload()}))},postAPI:function(){var e=this;$.a.post("/api/",{name:this.tvName,list:this.progArr,pseudo:this.pseudoName,description:this.descrChannel}).then((function(){e.callAPI()}))}}},W=B,Y=(n("858a"),Object(u["a"])(W,J,X,!1,null,null,null)),R=Y.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"all-channels"},e._l(e.listChannel,(function(t,a){return n("div",{key:a,staticClass:"channel"},[n("router-link",{attrs:{to:t.link}},[n("div",{staticClass:"title"},[e._v(e._s(t.name))])])],1)})),0)},U=[],G=(n("9911"),{name:"Home",data:function(){return{listChannel:[],index:0}},methods:{callAPI:function(){var e=this;$.a.get("http://localhost:3000/api/").then((function(t){var n,a=Object(N["a"])(t.data);try{for(a.s();!(n=a.n()).done;){var i=n.value;e.listChannel.push(i),i.link="/tv/".concat(e.index+=1)}}catch(s){a.e(s)}finally{a.f()}console.log(e.listChannel)}))}},mounted:function(){this.callAPI()}}),K=G,Q=(n("9f3b"),Object(u["a"])(K,F,U,!1,null,null,null)),Z=Q.exports,ee=[{path:"/",component:L},{path:"/about",component:q},{path:"/tv/:id",component:z},{path:"/creer-tv",component:R},{path:"/explore",component:Z}];a["a"].use(y["a"]);var te=new y["a"]({routes:ee,mode:"history"});a["a"].config.productionTip=!1,new a["a"]({router:te,render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),i=n.n(a);i.a},"63d1":function(e,t,n){"use strict";var a=n("68d4"),i=n.n(a);i.a},"68d4":function(e,t,n){},"858a":function(e,t,n){"use strict";var a=n("fb02"),i=n.n(a);i.a},"9c0c":function(e,t,n){},"9f3b":function(e,t,n){"use strict";var a=n("1e03"),i=n.n(a);i.a},e59a:function(e,t,n){"use strict";var a=n("49c5"),i=n.n(a);i.a},ec0e:function(e,t,n){},fb02:function(e,t,n){}});
//# sourceMappingURL=app.3d60912e.js.map