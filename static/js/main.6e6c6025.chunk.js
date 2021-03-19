(this["webpackJsonpnike-store"]=this["webpackJsonpnike-store"]||[]).push([[0],{16:function(e,t,n){},45:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var c=n(3),s=n.n(c),i=n(21),a=n.n(i),r=(n(45),n(40)),o=n(12),l=n(13),j=n(15),h=n(14),d=(n(16),n(17));n(46),n(49),n(50);d.a.initializeApp({apiKey:"AIzaSyCGzxpRe_oZWapTQqV64xw_9GCI3W0lSSI",authDomain:"react-firebase-6f404.firebaseapp.com",databaseURL:"https://react-firebase-6f404-default-rtdb.firebaseio.com",projectId:"react-firebase-6f404",storageBucket:"react-firebase-6f404.appspot.com",messagingSenderId:"377911875969",appId:"1:377911875969:web:372bf08910a990bb51b080",measurementId:"G-Q2WN4XE51F"});var b=d.a.database().ref(),p=(b.child("plants"),d.a.storage(),b),x=n(22),O=n.n(x),u=n(36),m=n(37),f=n.n(m),g=(n(69),n(38)),v=n.p+"static/media/nikeSplashOne.7f43f32b.jpg",k=n.p+"static/media/nikeSplashTwo.d686f8b6.jpg",y=n.p+"static/media/nikeSplashThree.fd198237.jpg",C=n(2),N=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={articles:[],isLoading:!0},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getArticles()}},{key:"getArticles",value:function(){var e=Object(u.a)(O.a.mark((function e(){var t=this;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://newsapi.org/v2/everything?q=nike&pageSize=8&apiKey=db0bf3c8ac4842a0a4d506a38bea9735").then((function(e){return e.data.articles.map((function(e){return{date:"".concat(e.publishedAt),author:"".concat(e.author),title:"".concat(e.title),url:"".concat(e.url),description:"".concat(e.description),image:"".concat(e.urlToImage)}}))})).then((function(e){t.setState({articles:e,isLoading:!1})})).catch((function(e){return t.setState({error:e,isLoading:!1})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(C.jsx)(s.a.Fragment,{children:Object(C.jsxs)("main",{className:"flexContent homepageContainer",children:[Object(C.jsx)("section",{className:"carouselContainer",children:Object(C.jsxs)(g.Carousel,{autoPlay:!0,infiniteLoop:!0,showArrows:!1,showStatus:!1,showIndicators:!1,showThumbs:!1,interval:4e3,swipeable:!1,stopOnHover:!1,dynamicHeight:!1,children:[Object(C.jsx)("div",{children:Object(C.jsx)("img",{src:v,alt:"nike splash pic"})}),Object(C.jsx)("div",{children:Object(C.jsx)("img",{src:k,alt:"nike splash pic"})}),Object(C.jsx)("div",{children:Object(C.jsx)("img",{src:y,alt:"nike splash pic"})})]})}),Object(C.jsx)("h1",{children:"Trending Now"}),Object(C.jsx)("section",{className:"flexContent nikeStoreContainer",children:this.props.nikeStoreProp.slice(10,12).map((function(e,t){return Object(C.jsxs)("div",{className:"flexContent shoeContainerNews",children:[Object(C.jsx)("div",{className:"shoeImageContainer",children:Object(C.jsx)("img",{src:e.image,alt:e.alt})}),Object(C.jsxs)("div",{className:"flexContent shoeInfoContainer",children:[Object(C.jsx)("div",{className:"shoeInfoText",children:Object(C.jsx)("h4",{children:e.name})}),Object(C.jsx)("div",{className:"shoeInfoText",children:Object(C.jsx)("p",{children:e.style})}),Object(C.jsx)("div",{className:"shoeInfoText",children:Object(C.jsx)("p",{children:e.price})}),Object(C.jsx)("div",{className:"shoeInfoText",children:Object(C.jsx)("h4",{children:e.color})})]})]},t)}))}),Object(C.jsxs)("section",{className:"flexContent newsWrapper",children:[Object(C.jsxs)("div",{className:"newsHeader",children:[Object(C.jsx)("h1",{children:"Nike News"}),Object(C.jsx)("p",{children:"Your source for the latest NIKE, Inc. stories"})]}),this.state.articles.map((function(e,t){return Object(C.jsxs)("a",{className:"flexContent articleContainer",href:e.url,target:"_blank",rel:"noreferrer",children:[Object(C.jsx)("div",{className:"flexContent articleImageContainer",children:Object(C.jsx)("img",{src:e.image,alt:e.title})}),Object(C.jsxs)("div",{className:"articleInfoContainer",children:[Object(C.jsx)("h2",{children:e.title}),Object(C.jsx)("p",{children:e.description})]})]},t)}))]})]})})}}]),n}(c.Component),S=n(39),I=n.n(S),w=n(10),T=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(C.jsx)(s.a.Fragment,{children:Object(C.jsx)("footer",{children:Object(C.jsx)("div",{className:"footerContainer wrapper",children:Object(C.jsx)("div",{className:"footerTextContainer",children:Object(C.jsx)("div",{className:"footerText",children:Object(C.jsx)("h3",{children:"NIKE 2021  -Links to page go here-"})})})})})})}}]),n}(c.Component),P=n.p+"static/media/nikeLogo.6307d151.svg",A=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={allShoeInfoArray:[],loading:!0},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.filterNikeStoreProp()}},{key:"filterNikeStoreProp",value:function(){var e=this.props.nikeStoreProp.map((function(e){return{Name:e.name,Style:e.style,Price:e.price,Color:e.color,Image:e.image,Alt:e.alt}}));this.setState({allShoeInfoArray:e,loading:!1})}},{key:"render",value:function(){return this.state.loading?Object(C.jsx)("div",{className:"loadScreen",children:Object(C.jsx)(I.a,{type:"Puff",color:"purple",height:100,width:100})}):Object(C.jsxs)(s.a.Fragment,{children:[Object(C.jsxs)("section",{className:"nikeStoreContainer flexContent",children:[Object(C.jsxs)("h1",{children:["Men's Trainers & Shoes (",Object.keys(this.state.allShoeInfoArray).length,")"]}),Object(C.jsx)(w.c,{children:Object(C.jsxs)(w.a,{className:"wrapper",children:[Object(C.jsxs)(w.d,{title:"Type",children:[Object(C.jsxs)(w.b,{children:["LifeStyle ",Object(C.jsx)("input",{type:"checkbox"})]}),Object(C.jsxs)(w.b,{children:["Jordan ",Object(C.jsx)("input",{type:"checkbox"})]}),Object(C.jsxs)(w.b,{children:["BasketBall ",Object(C.jsx)("input",{type:"checkbox"})]})]}),Object(C.jsxs)(w.d,{title:"Price",children:[Object(C.jsxs)(w.b,{children:["$0 - $99 ",Object(C.jsx)("input",{type:"checkbox"})]}),Object(C.jsxs)(w.b,{children:["$100 - $199 ",Object(C.jsx)("input",{type:"checkbox"})]}),Object(C.jsxs)(w.b,{children:["$200 - $299 ",Object(C.jsx)("input",{type:"checkbox"})]}),Object(C.jsxs)(w.b,{children:["$300 - $399 ",Object(C.jsx)("input",{type:"checkbox"})]})]})]})}),this.state.allShoeInfoArray.map((function(e,t){return Object(C.jsx)("ul",{children:Object(C.jsxs)("li",{className:"flexContent shoeContainer",children:[Object(C.jsx)("div",{className:"shoeImageContainer",children:Object(C.jsx)("img",{src:e.Image,alt:e.Alt})}),Object(C.jsxs)("div",{className:"flexContent shoeInfoContainer",children:[Object(C.jsx)("div",{className:"shoeInfoText",children:Object(C.jsx)("h4",{children:e.Name})}),Object(C.jsx)("div",{className:"shoeInfoText",children:Object(C.jsx)("p",{children:e.Style})}),Object(C.jsx)("div",{className:"shoeInfoText",children:Object(C.jsx)("p",{children:e.Price})}),Object(C.jsx)("div",{className:"shoeInfoText",children:Object(C.jsx)("h4",{children:e.Color})})]})]})},t)}))]}),Object(C.jsx)(T,{})]})}}]),n}(c.Component),H=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).displayHomepageComponent=function(){e.setState({displayNikeStore:!1,displayHomepage:!0})},e.displayNikeStoreComponent=function(){e.setState({displayNikeStore:!0,displayHomepage:!1})},e.state={displayHomepage:!0,displayNikeStore:!1,nikeShoes:[]},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=[],n=[];p.on("value",(function(c){var s=c.val();for(var i in s)t.push(s[i]);var a=t[0];Object.entries(a).map((function(t){var c=Object(r.a)(t,2),s=[c[0],c[1]][1];n.push({alt:s.alt,color:s.color,image:s.image,name:s.name,price:s.price,style:s.style}),e.setState({nikeShoes:n})}))}))}},{key:"render",value:function(){return Object(C.jsxs)(s.a.Fragment,{children:[Object(C.jsxs)("header",{className:"flexContent wrapper",children:[Object(C.jsx)("div",{className:"logoContainer",children:Object(C.jsx)("img",{src:P,alt:"",onClick:this.displayHomepageComponent})}),Object(C.jsx)("div",{className:"categoryMenu",children:Object(C.jsxs)("ul",{children:[Object(C.jsx)("li",{onClick:this.displayHomepageComponent,children:"Clothes"}),Object(C.jsx)("li",{onClick:this.displayNikeStoreComponent,children:"Shoes"})]})}),Object(C.jsx)("nav",{className:"topNav",children:Object(C.jsx)("ul",{children:Object(C.jsx)("li",{onClick:this.displayNikeStoreComponent,children:"Cart"})})})]}),Object(C.jsxs)("main",{children:[Object(C.jsx)("div",{children:this.state.displayHomepage?Object(C.jsx)(N,{nikeStoreProp:this.state.nikeShoes}):null}),Object(C.jsx)("div",{children:this.state.displayNikeStore?Object(C.jsx)(A,{nikeStoreProp:this.state.nikeShoes}):null})]})]})}}]),n}(c.Component),L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,97)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(C.jsx)(s.a.StrictMode,{children:Object(C.jsx)(H,{})}),document.getElementById("root")),L()}},[[96,1,2]]]);
//# sourceMappingURL=main.6e6c6025.chunk.js.map