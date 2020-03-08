(this["webpackJsonpmnemonica-react-slides"]=this["webpackJsonpmnemonica-react-slides"]||[]).push([[0],{387:function(t,e,n){t.exports=n(808)},408:function(t,e,n){},729:function(t,e){},808:function(t,e,n){"use strict";n.r(e);var i=n(99),s=n.n(i),r=n(57),a=(n(408),n(0)),o=n.n(a),c=n(810),l=n(313);const d=function(){this.rootElement=document.getElementById(this.rootId);const t=this.slides,e=this.counters,n=new this[t.current.view];this.SlideView=n.View,this.footer=new n.Footer(e),this.FooterView=this.footer.View};d.prototype.View=function(){const t=this.SlideView;s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(c.a,{theme:l.a},o.a.createElement("div",{className:"Slide"},o.a.createElement(t,null)))),this.rootElement)};var h=d;const p=function(){Object.assign(this,this.slides.current)};p.prototype.View=function(){return o.a.createElement("div",{className:"Title",onClick:this.clickNext},o.a.createElement("h1",null,this.title),o.a.createElement("h1",{className:"subtitle"},this.subtitle))};var u=p,m=n(809);const f=function(){Object.assign(this,this.slides.current)};f.prototype.View=function(){const t=this.FooterView,e=this.counters;return o.a.createElement("div",{className:"Header"},o.a.createElement(m.c,{min:1,max:e.count,value:e.index}),o.a.createElement("h1",null,this.title),o.a.createElement(t,null))};var x=f,w=n(316),y=n(101),g=n.n(y),v=n(315),b=n(8);const E={tree:function({chartData:t,dy:e,dx:n,margin:i,width:s,stash:r,print:a}){const o=b.d(t),c=b.j().nodeSize([e,n]),l=b.f().x(t=>t.y).y(t=>t.x);o.x0=e,o.y0=0,o.descendants().forEach((t,e)=>{t.id=e,t._children=t.children,a||t.depth&&r&&r.includes(t.data.name)&&(t.children=null)});const d=b.b("svg").attr("viewBox",[-i.left,-i.top,s,n]).style("font","10px sans-serif").style("user-select","none"),h=d.append("g").attr("fill","none").attr("stroke","#555").attr("stroke-opacity",.4).attr("stroke-width",1.5),p=d.append("g").attr("cursor","pointer").attr("pointer-events","all");return function t(e){const n=b.c&&b.c.altKey?2500:250,r=o.descendants().reverse(),a=o.links();c(o);let u=o,m=o;o.eachBefore(t=>{t.x<u.x&&(u=t),t.x>m.x&&(m=t)});const f=m.x-u.x+i.top+i.bottom,x=d.transition().duration(n).attr("viewBox",[-i.left,u.x-i.top,s,f]).tween("resize",window.ResizeObserver?null:()=>()=>d.dispatch("toggle")),w=p.selectAll("g").data(r,t=>t.id),y=w.enter().append("g").attr("transform",t=>"translate(".concat(e.y0,",").concat(e.x0,")")).attr("fill-opacity",10).attr("stroke-opacity",10).on("click",e=>{if(e._children)e.children=e.children?null:e._children;else{const t=e.parent.children.filter(t=>t!==e);e.parent.children=t.length?t:null}t(e)});y.append("circle").attr("r",5).attr("fill",t=>t._children?"#555":"#999").attr("stroke-width",15),y.append("text").attr("dy","0.41em").attr("x",t=>t._children?-9:9).attr("text-anchor",t=>t._children?"end":"start").text(t=>t.data.name).clone(!0).lower().attr("stroke-linejoin","round").attr("stroke-width",5).attr("stroke","white"),w.merge(y).transition(x).attr("transform",t=>"translate(".concat(t.y,",").concat(t.x,")")).attr("fill-opacity",100).attr("stroke-opacity",1),w.exit().transition(x).remove().attr("transform",t=>"translate(".concat(e.y,",").concat(e.x,")")).attr("fill-opacity",0).attr("stroke-opacity",0);const g=h.selectAll("path").data(a,t=>t.target.id),v=g.enter().append("path").attr("d",t=>{const n={x:e.x0,y:e.y0};return l({source:n,target:n})});g.merge(v).transition(x).attr("d",l),g.exit().transition(x).remove().attr("d",t=>{const n={x:e.x,y:e.y};return l({source:n,target:n})}),o.eachBefore(t=>{t.x0=t.x,t.y0=t.y})}(o),d.node()},pie:function({chartData:t,width:e,height:n,fontSize:i}){const s=t.data,r=b.g().sort(null).value(t=>t.value),a=b.i().domain(s.map(t=>t.name)).range(b.h(t=>b.e(.8*t+.1),s.length).reverse()),o=b.a().innerRadius(0).outerRadius(Math.min(e,n)/2-1),c=(()=>{const t=Math.min(e,n)/2*.8;return b.a().innerRadius(t).outerRadius(t)})(),l=r(s),d=b.b("svg").attr("viewBox",[-e/2,-n/2,e,n]);return d.append("g").attr("stroke","white").selectAll("path").data(l).join("path").attr("fill",t=>a(t.data.name)).attr("d",o).append("title").text(t=>"".concat(t.data.name,": ").concat(t.data.value.toLocaleString())),d.append("g").attr("font-family","sans-serif").attr("font-size",i).attr("text-anchor","middle").selectAll("text").data(l).join("text").attr("transform",t=>"translate(".concat(c.centroid(t),")")).call(t=>t.append("tspan").attr("y","-0.4em").attr("font-weight","bold").text(t=>t.data.name)).call(t=>t.filter(t=>t.endAngle-t.startAngle>.25).append("tspan").attr("x",0).attr("y","0.7em").attr("fill-opacity",.7).text(t=>t.data.value.toLocaleString())),d.node()}};var I=function(t){const e=t.id,n=t.opts,i=n.chart;return o.a.createElement("div",{ref:function(t){const e=E[i.type](i);t&&t.append(e)},id:e,className:"Chart"},n.title)};const S=function(){this.data=this.slides.current.data};S.prototype.View=function(){const t=this,e=t.data,n=t.FooterView,i=t.counters,s=g.a.sync(e),r={code:v.a,Heading:m.b,Box:m.a,app:function(e){const n=e.slide.key.split(".").reduce((t,e)=>t=t[e],t);return"".concat(n)},Chart:I},a={jsx:s,app:t},c=e;return o.a.createElement("div",{className:"MDX"},o.a.createElement(m.c,{min:1,max:i.count,value:i.index}),o.a.createElement("div",{className:"SlideContent"},o.a.createElement(w.a,{components:r,scope:a},c)),o.a.createElement(n,null))};var k=S;const j=parseInt("0"),N=function({count:t,index:e,level:n}){this.count="".concat(t),this.index="".concat(e).padStart(t.length,"0"),this.level="".concat(n)};N.prototype.View=function(){return o.a.createElement("div",{className:"Footer",onClick:this.clickNext},o.a.createElement("span",{className:"myname"},"wentout"),o.a.createElement("span",{className:"slides"}," ",this.index,".",this.level," \xbb ",this.count))};var L=N,R=n(314),_=n(3),O=n.n(_),P=n(312);const V=function(t){let e=0,n=[];const i={count:0,index:j,list:[],slideListIndex:e,direction:"next"},s=/print$/.test(window.location.href);Object.assign(this,{rootId:t,print:s,slides:i}),Object.defineProperty(this.slides,"count",{get(){return this.list.length}}),Object.defineProperty(this.slides,"current",{get:()=>n[e]}),Object.defineProperty(this.slides,"slideListLength",{get:()=>n.length}),Object.defineProperty(this.slides,"slideListIndex",{get:()=>e,set(t){e=parseInt(t)||0}}),Object.defineProperty(this.slides,"slideList",{set(t){n=t,e="next"===this.direction?0:n.length-1}}),Object.defineProperty(this,"counters",{get(){var e=this.slides.count,n=this.slides.index,i=this.slides.slideListIndex;if(s){const s=t.split("_");e=s[1],n=s[2],i=s[3]}return{count:parseInt(e),index:parseInt(n)+1,level:parseInt(i)+1}}})};V.prototype={init(){var t=this;return Object(P.a)(O.a.mark((function e(){var n,i,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="./".concat("slides-example","/list.txt"),e.next=3,fetch(n).then(t=>t.text()).catch(t=>t).then(t=>(t instanceof Error&&window.alert("something wrong"),t.split("\n").filter(Boolean).filter(t=>"list.txt"!==t)));case 3:return i=e.sent,t.slides.list.push(...i),window.sessionStorage&&(s=parseInt(window.sessionStorage.getItem("STARTER_SLIDE")))<t.slides.list.length&&t.setSlideIndex(s),e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})))()},start(){this.print?this.startPrint():this.fetchSlide()},makeRender(){this.root=new this.Root,this.root.View()},setSlideIndex(t){const e=this.slides.count;if(void 0===t)t=this.slides.index;else{if("number"!==typeof t)throw new Error("index is not a number");if(t>=0&&t<e)this.slides.index=parseInt(t,10)||0;else{if(-1!==t)throw new Error("index is not valid");this.slides.index=e-1}}this.fetchSlide()},getNextSlide(){const t=this.slides.count;this.slides.index<t-1?this.slides.index++:this.slides.index=0,this.slides.direction="next",this.setSlideIndex()},getPrevSlide(){this.slides.index>0?this.slides.index--:this.slides.index=this.slides.count-1,this.slides.direction="prev",this.setSlideIndex()},slideNext(){const t=this.slides,e=t.slideListLength;t.slideListIndex=t.slideListIndex+1,t.slideListIndex>=e?this.getNextSlide():this.makeRender()},slidePrev(){const t=this.slides;t.slideListIndex=t.slideListIndex-1,t.slideListIndex<0?this.getPrevSlide():this.makeRender()},clickNext(){this.print||this.slideNext()},_fetchSlide(t){const e=t.split("."),n=Object(R.a)(e,2)[1],i={md:"Mdx",mdx:"Mdx",jsx:"Jsx"},s="json"===n?"json":"text";return fetch("./".concat("slides-example","/").concat(t)).then(t=>t[s]()).catch(t=>t).then(t=>{t instanceof Error&&window.alert("something wrong");let e=[""];if("json"===n)e=Array.isArray(t)?t:[t];else{const s=i[n];e=t.split("-----").reduce((t,e)=>(e=e.split("\n").map(t=>t.trim()).join("\n"),t.push({view:s,data:e}),t),[])}return e})},fetchSlide(){const t=this,e=t.slides,n=e.index,i=e.list;e.slideListIndex=0;const s=i[n];this._fetchSlide(s).then(i=>{this.print?this.printFetched(i):(window.sessionStorage&&window.sessionStorage.setItem("STARTER_SLIDE",n),e.slideList=i,t.makeRender())})},startPrint(){document.body.style.overflow="auto",document.body.className="print";const t=document.getElementById(this.rootId),e=this.slides.list.length;this.slides.list.reduce((n,i,s)=>{const r="slide_".concat(e,"_").concat(s),a=this.fork(r,!0);a.slides.list=[i],a.slides.index=0;const o=document.createElement("div");return o.id=r,o.className="slideRoot",n.push({slide:a,slideRootId:r,slideRoot:o}),t.appendChild(o),a.fetchSlide(),n},[])},printFetched(t){const e=this.rootId,n=document.getElementById(e);t.forEach((t,i)=>{const s="".concat(e,"_").concat(i),r=this.fork(s,!0);r.slides.slideList=[t];const a=document.createElement("div");a.id=s,a.className="slide2print",n.appendChild(a),r.root=new r.Root,r.makeRender()})},collectTypes(t,e=r.defaultCollection){return[...e].reduce((e,[n,i])=>{const s={name:n};return i.subtypes instanceof Map&&i.subtypes.size>0?s.children=this.collectTypes(t,i.subtypes):("function"===typeof t&&(s.children=t(s)),"string"===typeof t&&(s.children=[{name:"".concat(n).concat(t)}])),e.push(s),e},[])}};var A=V;window.onerror=function(...t){console.log(t)},r.defaultNamespace.registerHook("postCreation",(function({inheritedInstance:t}){Object.entries(Object.getPrototypeOf(t)).forEach(([e,n])=>{"function"===typeof n&&(t[e]=(...e)=>{try{return n.call(t,...e)}catch(i){throw i.instance=t,i}})})}));const B=Object(r.define)("Main",A);B.define("Keys",(function(){const t=this,e=new window.keypress.Listener;e.simple_combo("left",t.slidePrev),e.simple_combo("right",t.slideNext),e.simple_combo("space",t.slideNext),e.simple_combo("home",t.setSlideIndex.bind(t,0)),e.simple_combo("end",t.setSlideIndex.bind(t,-1)),e.simple_combo("ctrl m",()=>{const e=t.slides.count,n="please input slide number between 1 an ".concat(e+1),i=window.prompt(n);var s;try{-1===(s=parseInt(i,10)-1)&&(s=0)}catch(r){window.alert("invalid input")}try{t.setSlideIndex(s)}catch(r){window.alert(r.message)}})}));const C=B.define("Root",h);C.define("Title",u).define("Footer",L),C.define("Header",x).define("Footer",L),C.define("Mdx",k).define("Footer",L);const F=B.call(i.Component,"root");F.init().then(F.start).then(()=>{F.print||new F.Keys})}},[[387,1,2]]]);
//# sourceMappingURL=main.16df2bc6.chunk.js.map