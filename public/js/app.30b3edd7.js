(function(t){function e(e){for(var i,s,o=e[0],c=e[1],h=e[2],u=0,p=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,h||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},a=[];function s(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-2d0c0a48":"d1b1e5d5","chunk-2d0cf8c7":"f4e4ac22","chunk-2d0de531":"72db5aad","chunk-2d0e95bf":"28a67f7e"}[t]+".js"}function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,i){n=r[t]=[e,i]}));e.push(n[2]=i);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=s(t);var h=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",h.name="ChunkLoadError",h.type=i,h.request=a,n[1](h)}r[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],h=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=h;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2f91":function(t,e,n){t.exports=n.p+"img/profile-image.266f33d3.jpg"},"3b0b":function(t,e,n){"use strict";var i=n("a106"),r=n.n(i);r.a},4251:function(t,e,n){},5125:function(t,e,n){t.exports=n.p+"img/steam-icon.ebb24e27.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("article",{staticClass:"root"},[i("transition",{attrs:{name:"nav-toggle"}},[i("navigation",{directives:[{name:"show",rawName:"v-show",value:t.loaded&&t.isWrapped,expression:"loaded && isWrapped"}],staticClass:"root__nav",on:{"route-to":t.routeTo}})],1),i("transition",{attrs:{name:"slide-in"}},[i("keep-alive",[i("router-view",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],class:{root__component:!t.isWrapped,root__component_wrapped:t.isWrapped,"slide-out":t.sliding,"fade-in":t.fadeIn}},[i("div",{ref:"overlay",class:{overlay:t.isWrapped,overlay_hidden:!t.isWrapped},attrs:{slot:"wrapper"},slot:"wrapper"}),i("img",{ref:"wrapper",class:{wrapper:!t.isWrapped,wrapper_rotated:t.isWrapped},attrs:{slot:"wrapper",src:n("dd36"),alt:"wrapper-icon"},on:{click:t.wrap},slot:"wrapper"})])],1)],1),i("background",{on:{"load-content":t.loadContent}})],1)},a=[],s=(n("4795"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{attrs:{id:"nav"}},[n("li",{staticClass:"link",class:{link_active:0===t.index},on:{click:function(e){return t.routeTo("/",0)}}},[t._v(" "+t._s(t.content.NAV_HOME)+" ")]),n("li",{staticClass:"link",class:{link_active:1===t.index},on:{click:function(e){return t.routeTo("/about-me",1)}}},[t._v(" "+t._s(t.content.NAV_ABOUT)+" ")]),n("li",{staticClass:"link",class:{link_active:2===t.index},on:{click:function(e){return t.routeTo("/timelapse",2)}}},[t._v(" "+t._s(t.content.NAV_TIMELAPSE)+" ")]),n("li",{staticClass:"link",class:{link_active:3===t.index},on:{click:function(e){return t.routeTo("/projects",3)}}},[t._v(" "+t._s(t.content.NAV_PROJECTS)+" ")]),n("li",{staticClass:"link",class:{link_active:4===t.index},on:{click:function(e){return t.routeTo("/contacts",4)}}},[t._v(" "+t._s(t.content.NAV_CONTACTS)+" ")]),n("div",{staticClass:"link-wrapper"},[n("span",{staticClass:"link",on:{click:function(e){return t.setLanguage("en")}}},[t._v("en")]),n("span",{staticClass:"link",on:{click:function(e){return t.setLanguage("ru")}}},[t._v("ru")])])])}),o=[],c={name:"Navigation",data:function(){return{}},computed:{content:function(){return this.$store.state.language},index:function(){return this.$store.state.tabIndex}},methods:{setLanguage:function(t){this.$store.commit("setLanguage",t)},routeTo:function(t,e){this.$store.commit("setTabIndex",e),this.$emit("route-to",t)}}},h=c,u=(n("3b0b"),n("2877")),l=Object(u["a"])(h,s,o,!1,null,"d137cd64",null),p=l.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"canvas"}})},f=[],m=(n("a4d3"),n("e01a"),n("d28b"),n("cb29"),n("d3b7"),n("3ca3"),n("ddb0"),n("d4ec")),v=n("bee2");n("fb6a"),n("0d03"),n("25f0");function g(t){function e(){return function(t){var e=0,i=0,r=0,a=1;0==t.length&&(t=[+new Date]);var s=n();e=s(" "),i=s(" "),r=s(" ");for(var o=0;o<t.length;o++)e-=s(t[o]),e<0&&(e+=1),i-=s(t[o]),i<0&&(i+=1),r-=s(t[o]),r<0&&(r+=1);s=null;var c=function(){var t=2091639*e+2.3283064365386963e-10*a;return e=i,i=r,r=t-(a=0|t)};return c.uint32=function(){return 4294967296*c()},c.fract53=function(){return c()+11102230246251565e-32*(2097152*c()|0)},c.version="Alea 0.9",c.args=t,c}(Array.prototype.slice.call(arguments))}function n(){var t=4022871197,e=function(e){e=e.toString();for(var n=0;n<e.length;n++){t+=e.charCodeAt(n);var i=.02519603282416938*t;t=i>>>0,i-=t,i*=t,t=i>>>0,i-=t,t+=4294967296*i}return 2.3283064365386963e-10*(t>>>0)};return e.version="Mash 0.9",e}var i=function(t){void 0==t&&(t=Math),this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.p=[];for(var e=0;e<256;e++)this.p[e]=Math.floor(256*t.random());this.perm=[];for(e=0;e<512;e++)this.perm[e]=this.p[255&e];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]};i.prototype.dot=function(t,e,n){return t[0]*e+t[1]*n},i.prototype.noise=function(t,e){var n,i,r,a,s,o=.5*(Math.sqrt(3)-1),c=(t+e)*o,h=Math.floor(t+c),u=Math.floor(e+c),l=(3-Math.sqrt(3))/6,p=(h+u)*l,d=h-p,f=u-p,m=t-d,v=e-f;m>v?(a=1,s=0):(a=0,s=1);var g=m-a+l,_=v-s+l,w=m-1+2*l,y=v-1+2*l,k=255&h,b=255&u,x=this.perm[k+this.perm[b]]%12,O=this.perm[k+a+this.perm[b+s]]%12,C=this.perm[k+1+this.perm[b+1]]%12,M=.5-m*m-v*v;M<0?n=0:(M*=M,n=M*M*this.dot(this.grad3[x],m,v));var E=.5-g*g-_*_;E<0?i=0:(E*=E,i=E*E*this.dot(this.grad3[O],g,_));var T=.5-w*w-y*y;return T<0?r=0:(T*=T,r=T*T*this.dot(this.grad3[C],w,y)),70*(n+i+r)},i.prototype.noise3d=function(t,e,n){var i,r,a,s,o,c,h,u,l,p,d=1/3,f=(t+e+n)*d,m=Math.floor(t+f),v=Math.floor(e+f),g=Math.floor(n+f),_=1/6,w=(m+v+g)*_,y=m-w,k=v-w,b=g-w,x=t-y,O=e-k,C=n-b;x>=O?O>=C?(o=1,c=0,h=0,u=1,l=1,p=0):x>=C?(o=1,c=0,h=0,u=1,l=0,p=1):(o=0,c=0,h=1,u=1,l=0,p=1):O<C?(o=0,c=0,h=1,u=0,l=1,p=1):x<C?(o=0,c=1,h=0,u=0,l=1,p=1):(o=0,c=1,h=0,u=1,l=1,p=0);var M=x-o+_,E=O-c+_,T=C-h+_,S=x-u+2*_,A=O-l+2*_,L=C-p+2*_,N=x-1+3*_,P=O-1+3*_,j=C-1+3*_,I=255&m,$=255&v,H=255&g,R=this.perm[I+this.perm[$+this.perm[H]]]%12,B=this.perm[I+o+this.perm[$+c+this.perm[H+h]]]%12,V=this.perm[I+u+this.perm[$+l+this.perm[H+p]]]%12,W=this.perm[I+1+this.perm[$+1+this.perm[H+1]]]%12,F=.6-x*x-O*O-C*C;F<0?i=0:(F*=F,i=F*F*this.dot(this.grad3[R],x,O,C));var U=.6-M*M-E*E-T*T;U<0?r=0:(U*=U,r=U*U*this.dot(this.grad3[B],M,E,T));var q=.6-S*S-A*A-L*L;q<0?a=0:(q*=q,a=q*q*this.dot(this.grad3[V],S,A,L));var J=.6-N*N-P*P-j*j;return J<0?s=0:(J*=J,s=J*J*this.dot(this.grad3[W],N,P,j)),32*(i+r+a+s)};var r=function(t){void 0==t&&(t=Math),this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.p=[];for(var e=0;e<256;e++)this.p[e]=Math.floor(256*t.random());this.perm=[];for(e=0;e<512;e++)this.perm[e]=this.p[255&e]};r.prototype.dot=function(t,e,n,i){return t[0]*e+t[1]*n+t[2]*i},r.prototype.mix=function(t,e,n){return(1-n)*t+n*e},r.prototype.fade=function(t){return t*t*t*(t*(6*t-15)+10)},r.prototype.noise=function(t,e,n){var i=Math.floor(t),r=Math.floor(e),a=Math.floor(n);t-=i,e-=r,n-=a,i&=255,r&=255,a&=255;var s=this.perm[i+this.perm[r+this.perm[a]]]%12,o=this.perm[i+this.perm[r+this.perm[a+1]]]%12,c=this.perm[i+this.perm[r+1+this.perm[a]]]%12,h=this.perm[i+this.perm[r+1+this.perm[a+1]]]%12,u=this.perm[i+1+this.perm[r+this.perm[a]]]%12,l=this.perm[i+1+this.perm[r+this.perm[a+1]]]%12,p=this.perm[i+1+this.perm[r+1+this.perm[a]]]%12,d=this.perm[i+1+this.perm[r+1+this.perm[a+1]]]%12,f=this.dot(this.grad3[s],t,e,n),m=this.dot(this.grad3[u],t-1,e,n),v=this.dot(this.grad3[c],t,e-1,n),g=this.dot(this.grad3[p],t-1,e-1,n),_=this.dot(this.grad3[o],t,e,n-1),w=this.dot(this.grad3[l],t-1,e,n-1),y=this.dot(this.grad3[h],t,e-1,n-1),k=this.dot(this.grad3[d],t-1,e-1,n-1),b=this.fade(t),x=this.fade(e),O=this.fade(n),C=this.mix(f,m,b),M=this.mix(_,w,b),E=this.mix(v,g,b),T=this.mix(y,k,b),S=this.mix(C,E,x),A=this.mix(M,T,x),L=this.mix(S,A,O);return L};var a={};a.random=new e(t);var s=new r(a);this.noise=function(t,e,n){return.5*s.noise(t,e,n)+.5}}var _=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.25;Object(m["a"])(this,t),this.sky=e,this.x=Math.random()*e.canvas.width,this.y=Math.random()*e.canvas.height,this.origin={x:e.canvas.width/2,y:1.1*e.canvas.height},this.maxSpeed=n,this.currentSpeed=.001,this.r=Math.sqrt(Math.pow(this.x-this.origin.x,2)+Math.pow(this.y-this.origin.y,2)),this.angle=Math.atan2(this.y-this.origin.y,this.x-this.origin.x),this.move(12e3*n)}return Object(v["a"])(t,[{key:"move",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.currentSpeed;this.currentSpeed<this.maxSpeed&&(this.currentSpeed+=.0015);var e=this.angle,n=180*e/Math.PI;n-=t,e=n*Math.PI/180,this.angle=e,this.x=this.origin.x+this.r*Math.cos(this.angle),this.y=this.origin.y+this.r*Math.sin(this.angle)}},{key:"redraw",value:function(){-10<=this.x&&this.x<=this.sky.canvas.width+10&&-10<=this.y&&this.y<=this.sky.canvas.height+10&&(this.sky.context.beginPath(),this.sky.context.arc(this.x,this.y,9*this.currentSpeed,0,2*Math.PI,!1),this.sky.context.fillStyle="white",this.sky.context.fill(),this.sky.context.strokeStyle="transparent",this.sky.context.stroke())}}]),t}(),w=function(){function t(){Object(m["a"])(this,t)}return Object(v["a"])(t,[{key:"createCanvas",value:function(t){var e=document.getElementById(t);this.canvas=document.createElement("canvas"),e.parentNode.replaceChild(this.canvas,e),this.canvas.id=t,this.context=this.canvas.getContext("2d"),this.canvas.width=1.1*window.innerWidth,this.canvas.height=1.1*window.innerHeight}},{key:"resizeCanvas",value:function(){this.canvas.width=1.1*window.innerWidth,this.canvas.height=1.1*window.innerHeight}},{key:"setBackgroundColors",value:function(t,e){this.fromColor=t,this.toColor=e}},{key:"setNumberOfStars",value:function(t){this.starsCount=t}},{key:"setFramerate",value:function(t){this.FPS=t}},{key:"startSimulation",value:function(){var t=this;if(this.FPS&&this.starsCount&&this.fromColor&&this.toColor){this.stars=[];var e=new g(Math.random());this.drawBackground();for(var n=0,i=0;n<this.starsCount;n++,i+=.02){var r=e.noise(i,0,0);r*=.25;var a=new _(this,r);a.redraw(),this.stars.push(a)}this.intervalId=setInterval((function(){t.drawBackground(),t.drawStars()}),1e3/this.FPS)}}},{key:"drawBackground",value:function(){this.gradient=this.context.createLinearGradient(this.canvas.width/2,this.canvas.height,this.canvas.width/2,0),this.gradient.addColorStop(.3,this.fromColor),this.gradient.addColorStop(1,this.toColor),this.context.fillStyle=this.gradient,this.context.fillRect(0,0,this.canvas.width,this.canvas.height)}},{key:"drawStars",value:function(){var t=!0,e=!1,n=void 0;try{for(var i,r=this.stars[Symbol.iterator]();!(t=(i=r.next()).done);t=!0){var a=i.value;a.move(),a.redraw()}}catch(s){e=!0,n=s}finally{try{t||null==r["return"]||r["return"]()}finally{if(e)throw n}}}}]),t}(),y=new w;window.addEventListener("resize",(function(){y.resizeCanvas()}));var k=y,b={methods:{},mounted:function(){k.createCanvas("canvas"),k.setBackgroundColors("#123578","#1A2639"),k.setNumberOfStars(1e3),k.setFramerate(30),k.startSimulation(),this.$emit("load-content")}},x=b,O=Object(u["a"])(x,d,f,!1,null,"66acf6ab",null),C=O.exports,M={name:"App",components:{navigation:p,Background:C},data:function(){return{isWrapped:!1,loaded:!1,sliding:!1,isFirst:!0,fadeIn:!0}},methods:{loadContent:function(){this.loaded=!0},wrap:function(){this.isWrapped=!this.isWrapped,this.$store.commit("closeFirstOpen")},routeTo:function(t){var e=this;this.$route.path!==t&&(this.sliding=!0,setTimeout((function(){e.sliding=!1,e.$router.push(t),setTimeout((function(){return e.isWrapped=!1}),1e3)}),500))}},created:function(){this.$store.commit("setLanguage")},mounted:function(){var t=this;setTimeout((function(){return t.fadeIn=!1}),2500)}},E=M,T=(n("5c0b"),Object(u["a"])(E,r,a,!1,null,null,null)),S=T.exports,A=n("8c4f"),L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"home"}},[t.isFirstOpen?i("span",{staticClass:"explore-more"},[t._v(t._s(t.content.EXPLORE_MORE))]):t._e(),t._t("overlay"),t._t("wrapper"),i("div",{staticClass:"home-wrapper"},[t._m(0),i("span",{staticClass:"home-wrapper__name"},[t._v(t._s(t.content.HOME_NAME))]),i("span",{staticClass:"home-wrapper__def"},[t._v(t._s(t.content.HOME_SUB))]),i("div",{staticClass:"home-wrapper__icons-wrapper"},[i("img",{staticClass:"icons-wrapper__icon",attrs:{src:n("f1a6"),alt:"vk-icon",title:"vk"},on:{click:function(e){return t.goLink("https://vk.com/raydarar")}}}),i("img",{staticClass:"icons-wrapper__icon",attrs:{src:n("cc4f"),alt:"github-icon",title:"github"},on:{click:function(e){return t.goLink("https://github.com/RayDarar")}}}),i("img",{staticClass:"icons-wrapper__icon",attrs:{src:n("8917"),alt:"instagram-icon",title:"instagram"},on:{click:function(e){return t.goLink("https://www.instagram.com/raydarar/")}}}),i("img",{staticClass:"icons-wrapper__icon",attrs:{src:n("fd53"),alt:"gmail-icon",title:"gmail"},on:{click:function(e){return t.goLink("https://mail.google.com/mail/?view=cm&fs=1&to=dfqgth400@gmail.com")}}}),i("img",{staticClass:"icons-wrapper__icon",attrs:{src:n("5125"),alt:"steam-icon",title:"steam"},on:{click:function(e){return t.goLink("https://steamcommunity.com/id/RayDarar")}}})])])],2)},N=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home-wrapper__profile-image"},[i("img",{attrs:{src:n("2f91")}})])}],P={name:"Home",data:function(){return{}},methods:{goLink:function(t){window.open(t,"_blank")}},computed:{content:function(){return this.$store.state.language},isFirstOpen:function(){return this.$store.state.isFirstOpen}},watch:{content:function(t,e){document.title=t.TITLE_HOME}},components:{}},j=P,I=(n("dbc2"),Object(u["a"])(j,L,N,!1,null,null,null)),$=I.exports;i["a"].use(A["a"]);var H=new A["a"]({mode:"history",routes:[{path:"/",component:$},{path:"/contacts",component:function(){return n.e("chunk-2d0cf8c7").then(n.bind(null,"63d8"))}},{path:"/about-me",component:function(){return n.e("chunk-2d0de531").then(n.bind(null,"84ba"))}},{path:"/projects",component:function(){return n.e("chunk-2d0e95bf").then(n.bind(null,"8cca"))}},{path:"/timelapse",component:function(){return n.e("chunk-2d0c0a48").then(n.bind(null,"433f"))}}]}),R=H,B=n("2f62"),V={EXPLORE_MORE:"Explore more",TITLE_HOME:"Ryspekov | Home",TITLE_ABOUT:"Ryspekov | About Me",HOME_NAME:"Ryspekov Ansar",HOME_SUB:"Programmer | Student | Science lover",NAV_HOME:"Home",NAV_ABOUT:"About Me",NAV_TIMELAPSE:"Timelapse",NAV_PROJECTS:"Projects",NAV_CONTACTS:"Contacts"},W={EXPLORE_MORE:"Узнать больше",TITLE_HOME:"Ryspekov | Главная",TITLE_ABOUT:"Ryspekov | О мне",HOME_NAME:"Рыспеков Ансар",HOME_SUB:"Программист | Студент | Любитель науки",NAV_HOME:"Главная",NAV_ABOUT:"О мне",NAV_TIMELAPSE:"Временная Линия",NAV_PROJECTS:"Проекты",NAV_CONTACTS:"Контакты"};i["a"].use(B["a"]);var F=new B["a"].Store({state:{tabIndex:0,language:null,isFirstOpen:!0},mutations:{setActiveTab:function(t,e){var n=!0,i=!1,r=void 0;try{for(var a,s=t.tabs[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var o=a.value;o.isSelected=!1}}catch(c){i=!0,r=c}finally{try{n||null==s["return"]||s["return"]()}finally{if(i)throw r}}t.tabs[e].isSelected=!0},setLanguage:function(t,e){t.language="ru"===e?W:V},setTabIndex:function(t,e){t.tabIndex=e},closeFirstOpen:function(t){t.isFirstOpen=!1}},actions:{},modules:{}});i["a"].config.productionTip=!1,new i["a"]({router:R,store:F,render:function(t){return t(S)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("9c0c"),r=n.n(i);r.a},8917:function(t,e,n){t.exports=n.p+"img/instagram-icon.1072a980.svg"},"9c0c":function(t,e,n){},a106:function(t,e,n){},cc4f:function(t,e,n){t.exports=n.p+"img/github-icon.c4516fa2.svg"},dbc2:function(t,e,n){"use strict";var i=n("4251"),r=n.n(i);r.a},dd36:function(t,e,n){t.exports=n.p+"img/double_arrow_white.f1909f9e.svg"},f1a6:function(t,e,n){t.exports=n.p+"img/vk-icon.a4261e67.svg"},fd53:function(t,e,n){t.exports=n.p+"img/gmail-icon.14988c8f.svg"}});
//# sourceMappingURL=app.30b3edd7.js.map