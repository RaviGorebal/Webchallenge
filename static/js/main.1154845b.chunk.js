(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{154:function(e,a,t){e.exports=t(254)},159:function(e,a,t){},254:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),c=t.n(r),o=(t(159),t(58)),i=t(16),m=t(68),s=t(69),d=t(81),u=t(80),h=t(281),p=t(286),E=t(287),g=t(288),f=t(289),v=t(290),y=t(291),b=t(292),w=function(e){var a=e.searchQuery,t=e.onChange,n=e.placeholder;return l.a.createElement(h.a,{item:!0,xs:12},l.a.createElement(b.a,{autoFocus:!0,onChange:function(e){return t(e.currentTarget.value)},name:"search",value:a,margin:"dense",id:"Search",label:n,type:"text",fullWidth:!0}))},k=t(74),x=t.n(k),S=(t(253),{color:"black",textAlign:"center",backgroundColor:" #5458c7",paddingTop:"2px",marginTop:"1px"}),T={backgroundColor:" #7373ee"},C=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this)).handleSearchQuery=function(e){n.setState({searchQuery:e}),n.urlmovie(e)},n.urlmovie=function(e){x.a.get("http://www.omdbapi.com/?apikey=b9bd48a6&type=movie&S="+e).then((function(e){if("False"!=e.data.Response){var a=e.data.Search;n.setState({rows:a})}})).catch((function(e){console.log(e)}))},n.state={searchQuery:"",rows:[]},n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,a=e.searchQuery;e.rows;return l.a.createElement("div",{className:"movieList"},l.a.createElement("h2",{style:S},"Movie List"),l.a.createElement(h.a,{container:!0},l.a.createElement(w,{searchQuery:a,onChange:this.handleSearchQuery,placeholder:"Search Movie"})),l.a.createElement(p.a,{style:{backgroundColor:"#eeeeee",fontWeight:"bold"}},l.a.createElement(E.a,null,l.a.createElement(g.a,{style:T},l.a.createElement(f.a,null,l.a.createElement(v.a,{align:"middle"},"Title"),l.a.createElement(v.a,{align:"middle"},"Type"),l.a.createElement(v.a,{align:"middle"},"Year"),l.a.createElement(v.a,{align:"center"},"Poster"))),l.a.createElement(y.a,null,this.state.rows.map((function(e){return l.a.createElement(f.a,{key:e.imdbID},l.a.createElement(o.b,{to:"/movie?title=".concat(e.imdbID)},l.a.createElement(v.a,{align:"middle",style:{fontWeight:"900"}},e.Title)),l.a.createElement(v.a,{align:"middle"},e.Type),l.a.createElement(v.a,{align:"middle"},e.Year),l.a.createElement(v.a,{align:"right"},l.a.createElement("div",{style:{width:"300px",height:"150px",overflow:"hidden"}},l.a.createElement("img",{src:e.Poster}))))}))))))}}]),t}(n.Component),j=t(144),O=t(146),B=t.n(O),D=t(295),Q=t(293),W={color:"black",textAlign:"center",backgroundColor:" #5458c7",paddingTop:"2px",marginTop:"1px"},M=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this)).handleBack=function(e){"/movie"===n.props.location.pathname&&n.props.history.push("/")},n.state={rows:[]},n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=j.parse(this.props.location.search);x.a.get("http://www.omdbapi.com/?apikey=b9bd48a6&i="+a.title).then((function(a){var t=a.data;e.setState({rows:t})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.rows;return l.a.createElement("div",{style:{borderBottom:"50px",borderRight:"50px"}},l.a.createElement("h2",{style:W},"movie Detail"),l.a.createElement(h.a,{container:!0}),l.a.createElement(D.a,{title:"Back",onClick:this.handleBack},l.a.createElement(Q.a,{color:"primary","aria-label":"",component:"span"},l.a.createElement(B.a,null))),l.a.createElement("div",{style:{height:"150px",overflow:"hidden",width:"100%",paddingLeft:"35%"}},l.a.createElement("img",{src:e.Poster})),l.a.createElement(p.a,{style:{width:"40%",paddingLeft:"30%",paddingTop:"2%",paddingBottom:"5%"}},l.a.createElement(E.a,{style:{borderStyle:"solid"}},l.a.createElement(y.a,null,l.a.createElement(f.a,null,l.a.createElement(v.a,{align:"middle"},"Title"),l.a.createElement(v.a,{align:"left"},e.Title)),l.a.createElement(f.a,null,l.a.createElement(v.a,{align:"middle"},"Year"),l.a.createElement(v.a,{align:"left"},e.Year)),l.a.createElement(f.a,null,l.a.createElement(v.a,{align:"middle"},"Categories"),l.a.createElement(v.a,{align:"left"},e.Runtime)),l.a.createElement(f.a,null,l.a.createElement(v.a,{align:"middle"},"Synopsis"),l.a.createElement(v.a,{align:"left"},e.Plot)),l.a.createElement(f.a,null,l.a.createElement(v.a,{align:"middle"},"Director"),l.a.createElement(v.a,{align:"left"},e.Director)),l.a.createElement(f.a,null,l.a.createElement(v.a,{align:"middle"},"Writer"),l.a.createElement(v.a,{align:"left"},e.Writer)),l.a.createElement(f.a,null,l.a.createElement(v.a,{align:"left"},"Actors"),l.a.createElement(v.a,{align:"left"},e.Actors))))))}}]),t}(n.Component);var A=function(){return l.a.createElement("main",null,l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:C}),l.a.createElement(i.a,{exact:!0,path:"/movie",component:M})))};var L=function(e){return l.a.createElement(o.a,null,l.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[154,1,2]]]);
//# sourceMappingURL=main.1154845b.chunk.js.map