(this["webpackJsonpmnemonica-react-slides"]=this["webpackJsonpmnemonica-react-slides"]||[]).push([[0],{342:function(e,t,n){e.exports=n(763)},363:function(e,t,n){},684:function(e,t){},763:function(e,t,n){"use strict";n.r(t);var i=n(98),s=n.n(i),r=n(59),o=(n(363),n(0)),c=n.n(o),a=n(765),l=n(152);const d=function({count:e,index:t,level:n}){this.count="".concat(e),this.index="".concat(t).padStart(e.length,"0"),this.level="".concat(n)};d.prototype.View=function(){return c.a.createElement("div",{className:"Footer"},c.a.createElement("span",{className:"myname"},"github@wentout"),c.a.createElement("span",{className:"slides"}," ",this.index,".",this.level," \xbb ",this.count))};var h=d;const p=function(){this.rootElement=document.getElementById(this.rootId);const e=this.slides,t=this.counters,n=new this[e.current.view];this.SlideView=n.View,this.footer=new n.Footer(t),this.FooterView=this.footer.View};p.prototype.View=function(){const e=this.SlideView;s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(a.a,{theme:l.a},c.a.createElement("div",{className:"Slide"},c.a.createElement(e,null)))),this.rootElement)};var u=p;const m=function(){Object.assign(this,this.slides.current)};m.prototype.View=function(){return c.a.createElement("div",{className:"Title"},c.a.createElement("h1",null,this.title),c.a.createElement("h1",{className:"subtitle"},this.subtitle))};var f=m,x=n(764);const y=function(){Object.assign(this,this.slides.current)};y.prototype.View=function(){const e=this.FooterView,t=this.counters;return c.a.createElement("div",{className:"Header"},c.a.createElement(x.c,{min:1,max:t.count,value:t.index}),c.a.createElement("h1",null,this.title),c.a.createElement(e,null))};var w=y,g=n(286),v=n(100),b=n.n(v),E=n(285),I=n(34);const k={tree:function({chartData:e,dy:t,dx:n,margin:i,width:s,stash:r,print:o}){const c=I.c(e),a=I.e().nodeSize([t,n]),l=I.d().x(e=>e.y).y(e=>e.x);c.x0=t,c.y0=0,c.descendants().forEach((e,t)=>{e.id=t,e._children=e.children,o||e.depth&&r&&r.includes(e.data.name)&&(e.children=null)});const d=I.a("svg").attr("viewBox",[-i.left,-i.top,s,n]).style("font","10px sans-serif").style("user-select","none"),h=d.append("g").attr("fill","none").attr("stroke","#555").attr("stroke-opacity",.4).attr("stroke-width",1.5),p=d.append("g").attr("cursor","pointer").attr("pointer-events","all");return function e(t){const n=I.b&&I.b.altKey?2500:250,r=c.descendants().reverse(),o=c.links();a(c);let u=c,m=c;c.eachBefore(e=>{e.x<u.x&&(u=e),e.x>m.x&&(m=e)});const f=m.x-u.x+i.top+i.bottom,x=d.transition().duration(n).attr("viewBox",[-i.left,u.x-i.top,s,f]).tween("resize",window.ResizeObserver?null:()=>()=>d.dispatch("toggle")),y=p.selectAll("g").data(r,e=>e.id),w=y.enter().append("g").attr("transform",e=>"translate(".concat(t.y0,",").concat(t.x0,")")).attr("fill-opacity",10).attr("stroke-opacity",10).on("click",t=>{if(t._children)t.children=t.children?null:t._children;else{const e=t.parent.children.filter(e=>e!==t);t.parent.children=e.length?e:null}e(t)});w.append("circle").attr("r",5).attr("fill",e=>e._children?"#555":"#999").attr("stroke-width",15),w.append("text").attr("dy","0.41em").attr("x",e=>e._children?-9:9).attr("text-anchor",e=>e._children?"end":"start").text(e=>e.data.name).clone(!0).lower().attr("stroke-linejoin","round").attr("stroke-width",5).attr("stroke","white"),y.merge(w).transition(x).attr("transform",e=>"translate(".concat(e.y,",").concat(e.x,")")).attr("fill-opacity",100).attr("stroke-opacity",1),y.exit().transition(x).remove().attr("transform",e=>"translate(".concat(t.y,",").concat(t.x,")")).attr("fill-opacity",0).attr("stroke-opacity",0);const g=h.selectAll("path").data(o,e=>e.target.id),v=g.enter().append("path").attr("d",e=>{const n={x:t.x0,y:t.y0};return l({source:n,target:n})});g.merge(v).transition(x).attr("d",l),g.exit().transition(x).remove().attr("d",e=>{const n={x:t.x,y:t.y};return l({source:n,target:n})}),c.eachBefore(e=>{e.x0=e.x,e.y0=e.y})}(c),d.node()}};var S=function(e){const t=e.id,n=e.opts,i=n.chart;return c.a.createElement("div",{ref:function(e){const t=k[i.type](i);e&&e.append(t)},id:t,className:"Chart"},n.title)};const j=function(){this.data=this.slides.current.data};j.prototype.View=function(){const e=this,t=e.data,n=e.FooterView,i=e.counters,s=b.a.sync(t),r={code:E.a,Heading:x.b,Box:x.a,app:function(t){const n=t.slide.key.split(".").reduce((e,t)=>e=e[t],e);return"".concat(n)},Chart:S},o={jsx:s,app:e},a=t;return c.a.createElement("div",{className:"MDX"},c.a.createElement(x.c,{min:1,max:i.count,value:i.index}),c.a.createElement("div",{className:"SlideContent"},c.a.createElement(g.a,{components:r,scope:o},a)),c.a.createElement(n,null))};var N=j,L=n(284),_=n(3),O=n.n(_),P=n(283);const V=function(e){let t=0,n=[];const i={count:0,index:0,list:[],slideListIndex:t,direction:"next"},s=/print$/.test(window.location.href);Object.assign(this,{rootId:e,print:s,slides:i}),Object.defineProperty(this.slides,"count",{get(){return this.list.length}}),Object.defineProperty(this.slides,"current",{get:()=>n[t]}),Object.defineProperty(this.slides,"slideListLength",{get:()=>n.length}),Object.defineProperty(this.slides,"slideListIndex",{get:()=>t,set(e){t=parseInt(e)||0}}),Object.defineProperty(this.slides,"slideList",{set(e){n=e,t="next"===this.direction?0:n.length-1}}),Object.defineProperty(this,"counters",{get(){var t=this.slides.count,n=this.slides.index,i=this.slides.slideListIndex;if(s){const s=e.split("_");t=s[1],n=s[2],i=s[3]}return{count:parseInt(t),index:parseInt(n)+1,level:parseInt(i)+1}}})};V.prototype={init(){var e=this;return Object(P.a)(O.a.mark((function t(){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("./slides/list.txt").then(e=>e.text()).catch(e=>e).then(e=>(e instanceof Error&&window.alert("something wrong"),e.split("\n").filter(Boolean).filter(e=>"list.txt"!==e)));case 2:return n=t.sent,e.slides.list.push(...n),t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))()},start(){this.print?this.startPrint():this.fetchSlide()},makeRender(){this.root=new this.Root,this.root.View()},setSlideIndex(e){const t=this.slides.count;if(void 0===e)e=this.slides.index;else{if("number"!==typeof e)throw new Error("index is not a number");if(e>=0&&e<t)this.slides.index=parseInt(e,10)||0;else{if(-1!==e)throw new Error("index is not valid");this.slides.index=t-1}}this.fetchSlide()},getNextSlide(){const e=this.slides.count;this.slides.index<e-1?this.slides.index++:this.slides.index=0,this.slides.direction="next",this.setSlideIndex()},getPrevSlide(){this.slides.index>0?this.slides.index--:this.slides.index=this.slides.count-1,this.slides.direction="prev",this.setSlideIndex()},slideNext(){const e=this.slides,t=e.slideListLength;e.slideListIndex=e.slideListIndex+1,e.slideListIndex>=t?this.getNextSlide():this.makeRender()},slidePrev(){const e=this.slides;e.slideListIndex=e.slideListIndex-1,e.slideListIndex<0?this.getPrevSlide():this.makeRender()},_fetchSlide(e){const t=e.split("."),n=Object(L.a)(t,2)[1],i={md:"Mdx",mdx:"Mdx",jsx:"Jsx"},s="json"===n?"json":"text";return fetch("./slides/".concat(e)).then(e=>e[s]()).catch(e=>e).then(e=>{e instanceof Error&&window.alert("something wrong");let t=[""];if("json"===n)t=Array.isArray(e)?e:[e];else{const s=i[n];t=e.split("-----").reduce((e,t)=>(t=t.split("\n").map(e=>e.trim()).join("\n"),e.push({view:s,data:t}),e),[])}return t})},fetchSlide(){const e=this,t=e.slides,n=t.index,i=t.list;t.slideListIndex=0;const s=i[n];this._fetchSlide(s).then(n=>{this.print?this.printFetched(n):(t.slideList=n,e.makeRender())})},startPrint(){document.body.style.overflow="auto",document.body.className="print";const e=document.getElementById(this.rootId),t=this.slides.list.length;this.slides.list.reduce((n,i,s)=>{const r="slide_".concat(t,"_").concat(s),o=this.fork(r,!0);o.slides.list=[i],o.slides.index=0;const c=document.createElement("div");return c.id=r,c.className="slideRoot",n.push({slide:o,slideRootId:r,slideRoot:c}),e.appendChild(c),o.fetchSlide(),n},[])},printFetched(e){const t=this.rootId,n=document.getElementById(t);e.forEach((e,i)=>{const s="".concat(t,"_").concat(i),r=this.fork(s,!0);r.slides.slideList=[e];const o=document.createElement("div");o.id=s,o.className="slide2print",n.appendChild(o),r.root=new r.Root,r.makeRender()})},collectTypes(e,t=r.defaultCollection){return[...t].reduce((t,[n,i])=>{const s={name:n};return i.subtypes instanceof Map&&i.subtypes.size>0?s.children=this.collectTypes(e,i.subtypes):("function"===typeof e&&(s.children=e(s)),"string"===typeof e&&(s.children=[{name:"".concat(n).concat(e)}])),t.push(s),t},[])}};var R=V;window.onerror=function(...e){console.log(e)},r.defaultNamespace.registerHook("postCreation",(function({inheritedInstance:e}){Object.entries(Object.getPrototypeOf(e)).forEach(([t,n])=>{"function"===typeof n&&(e[t]=(...t)=>{try{return n.call(e,...t)}catch(i){throw i.instance=e,i}})})}));const F=Object(r.define)("Main",R);F.define("Keys",(function(){const e=this,t=new window.keypress.Listener;t.simple_combo("left",e.slidePrev),t.simple_combo("right",e.slideNext),t.simple_combo("space",e.slideNext),t.simple_combo("home",e.setSlideIndex.bind(e,0)),t.simple_combo("end",e.setSlideIndex.bind(e,-1)),t.simple_combo("ctrl m",()=>{const t=e.slides.count,n="please input slide number between 1 an ".concat(t+1),i=window.prompt(n);var s;try{-1===(s=parseInt(i,10)-1)&&(s=0)}catch(r){window.alert("invalid input")}try{e.setSlideIndex(s)}catch(r){window.alert(r.message)}})}));const B=F.define("Root",u);B.define("Title",f).define("Footer",h),B.define("Header",w).define("Footer",h),B.define("Mdx",N).define("Footer",h);const C=F.call(i.Component,"root");C.init().then(C.start).then(()=>{C.print||new C.Keys})}},[[342,1,2]]]);
//# sourceMappingURL=main.82113009.chunk.js.map