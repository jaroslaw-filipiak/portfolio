(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{32:function(e,a,t){e.exports=t.p+"static/media/about-me.538b9ba9.jpg"},33:function(e,a,t){e.exports=t(61)},38:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(29),o=t.n(r),c=(t(38),t(6)),i=t(7),s=t(9),m=t(10),u=t(12),p=t(11),d=t(13),E=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(u.a)(this,Object(p.a)(a).call(this,e))).handleVisible=function(){t.setState({isVisible:!t.state.isVisible})},t.routeChange=function(){window.location.href="portfolio"},t.state={isVisible:!1},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:this.state.isVisible?"menu":"menu d-none"},l.a.createElement(c.c,{to:"/about-me",className:"menu-left"},"O mnie"),l.a.createElement(c.c,{to:"/contact",className:"menu-right"},"Kontakt")),l.a.createElement("button",{onClick:this.handleVisible,className:"hamburger hamburger--vortex ".concat(this.state.isVisible?"is-active":null),type:"button"},l.a.createElement("span",{className:"hamburger-box"},l.a.createElement("span",{className:"hamburger-inner"}))))}}]),a}(n.Component),h=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"nav",style:e.style},l.a.createElement("div",{className:"nav-grid-container"},l.a.createElement("div",{className:"nav-top",id:"logo"},l.a.createElement(c.b,{to:"/"},"JF")),l.a.createElement("div",{className:"nav-center"}),l.a.createElement("div",{className:"nav-bottom"},l.a.createElement("a",{href:"mailto:info@j-filipiak.pl"},"info@j-filipiak.pl"),l.a.createElement("a",{href:"tel:663568828"},"+48 663 56 88 28")))))},w=t(15),k=t.n(w),f=function(e){return console.log(e),l.a.createElement(c.b,{to:"portfolio/".concat(e.item.slug),className:"portfolio-item",style:{backgroundImage:"url(".concat(e.item.better_featured_image.source_url,")")}},l.a.createElement("div",{className:"hover-box"},l.a.createElement("h1",null,e.item.title.rendered)))},j=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(l)))).state={items:[]},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;k.a.get("http://j-filipiak.pl/api/wp-json/wp/v2/portfolio?embded").then((function(a){e.setState({items:a.data})}))}},{key:"render",value:function(){var e=this.state.items.map((function(e){return l.a.createElement(f,{key:e.id,item:e})}));return l.a.createElement(l.a.Fragment,null," ",e," ")}}]),a}(n.Component),z=function(){return l.a.createElement("div",{className:"wrapper homepage-wrapper"},l.a.createElement(E,null),l.a.createElement(h,null),l.a.createElement("div",{className:"heading-content"},l.a.createElement("p",null,"Witam bardzo serdecznie"),l.a.createElement("h1",null,"Jaros\u0142aw Filipiak"),l.a.createElement("h2",null,"designer & front-end developer")),l.a.createElement("div",{className:"portfolio-list"},l.a.createElement(j,null)))},g=t(32),b=t.n(g),y=function(){return l.a.createElement("div",{className:"wrapper about-wrapper"},l.a.createElement(E,null),l.a.createElement(h,null),l.a.createElement("div",{className:"about-content"},l.a.createElement("h5",null,"Witam bardzo serdecznie"),l.a.createElement("h1",null," Jaros\u0142aw Filipiak ,designer & front-end developer"),l.a.createElement("img",{src:b.a,alt:"Jaros\u0142aw Filipiak"}),l.a.createElement("h2",null,"Specjalizuje si\u0119 w projektowaniu oraz wdra\u017caniu stron internetowych opartych o system Wordpress a tak\u017ce projektowaniem interfejs\xf3w u\u017cytkownika. Aktualnie najwi\u0119kszy nacisk k\u0142ade na drog\u0119 React.js Developera"),l.a.createElement("h3",null,"Zajmuje si\u0119 tym na codzie\u0144 jako freelancer, pracuje na Macu oraz na Windowsie. Posiadam solidny zestaw umiej\u0119tno\u015bci ",l.a.createElement("br",null),"i technologii zwi\u0105zanych z ca\u0142\u0105 otoczk\u0105 procesu projektowania:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",{className:"skills-heading"},"Projektowanie:")),l.a.createElement("li",null,l.a.createElement("strong",null,"Adobe Xd")," Dla tego programu porzuci\u0142em Sketch-a , nowoczesne projektowanie interfejs\xf3w tylko i wy\u0142\u0105cznie z Adobe XD. Coraz cz\u0119\u015bciej przygl\u0105dam si\u0119 Figmie"),l.a.createElement("li",null,l.a.createElement("strong",null,"Adobe Photoshop")," zaczyna\u0142em od wersji 7.0 ponad 10 lattemu , nie mniej nadal wykupuje kursy dotycz\u0105ce tego programu")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",{className:"skills-heading"},"Front-End:")),l.a.createElement("li",null,l.a.createElement("strong",null,"HTML / CSS/ SASS")," - Ka\u017cdy projekt kompiluje w Sass, posiadam w\u0142asny Sass-owy workflow dzi\u0119ki czemu webdevelopment jest przyjemny a kod bardzo mocno zrefaktoryzowany. Zawsze korzystam z webpacka"),l.a.createElement("li",null,l.a.createElement("strong",null,"Wordpress")," - Bardzo dobra znajomo\u015bc Wordpressa , umiej\u0119tno\u015b\u0107 kodowania PSD -> WP z wykorzystaniem Underscore/Understrap + ACF , znajomo\u015bc hak\xf3w /filtr\xf3w / wp codexu oraz.. stackoverflow.Ta strona tak\u017ce wykorzystuje wordpress jako backend poprzez REST-API"),l.a.createElement("li",null,l.a.createElement("strong",null,"JavaScript")," Aktualnie caly czas rozwijam si\u0119 w kierunku React.js Developera a to jest moj pierwszy Reactowy projekt"))))},v=function(){return l.a.createElement("div",{className:"wrapper contact-wrapper"},l.a.createElement(E,null),l.a.createElement(h,null),l.a.createElement("div",{className:"contact-content"},l.a.createElement("h1",null," Kontakt ")," ",l.a.createElement("h2",null,"Jestem dost\u0119pny dla firm, agencji kreatywnych ",l.a.createElement("br",null),"oraz os\xf3b prywatnych"," ")," ",l.a.createElement("h3",null,"Zlecenia wyceniam jako fixed - price dla jasno sprecyzowanych projekt\xf3w lub jako stawka godzinowa dla zlece\u0144 o zmieniaj\u0105cych si\u0119 za\u0142o\u017ceniach."," ")," ",l.a.createElement("h4",null,l.a.createElement("a",{href:"mailto:info@j-filipiak.pl?subject=dot.wsp\xf3\u0142pracy"},"Napisz do mnie!")," ",l.a.createElement("a",{href:"tel:663568828"}," lub zadzwo\u0144: 663 56 88 28 ")," ")," ",l.a.createElement("ul",null,l.a.createElement("li",null," ","Wi\u0119ksze projekty dziele na etapy z rozliczeniem 2 x w miesi\u0105cu"," ")," ",l.a.createElement("li",null,"Stawka godzinowa uzale\u017cniona jest od umiej\u0119tno\u015bci kt\xf3re s\u0105 wymagane do uko\u0144czenia projektu i wacha si\u0119 w granicach 50 - 100 z\u0142 netto / h"," ")," ",l.a.createElement("li",null,"Do wszystkich projekt\xf3w graficznych przekazuje prawa autorskie oraz przesy\u0142am pliki otwarte"," ")," ")," ")," ")},N=function(){return l.a.createElement("h1",null,"Error Page")},S=function(e){return console.log(e),l.a.createElement("div",{className:"single"},l.a.createElement("div",{className:"single-header"},l.a.createElement("img",{src:e.item.acf.header_image,alt:""}),l.a.createElement("a",{className:"behance-btn",style:{backgroundColor:"".concat(e.item.acf.behance_link_kolor)},href:e.item.acf.behance_link},"Zobacz w serwisie behance")),l.a.createElement("div",{className:"single-content"},l.a.createElement("h1",null,e.item.title.rendered),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.item.content.rendered}})))},O=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(l)))).state={items:[]},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.slug),k.a.get("http://j-filipiak.pl/api/wp-json/wp/v2/portfolio?slug=".concat(this.props.slug,"}")).then((function(a){e.setState({items:a.data})}))}},{key:"render",value:function(){var e=this.state.items.map((function(e){return l.a.createElement(S,{key:e.id,item:e})}));return l.a.createElement(l.a.Fragment,null," ",e," ")}}]),a}(n.Component),F=function(e){return l.a.createElement("div",{className:"wrapper single-wrapper"},l.a.createElement(E,null),l.a.createElement(h,null),l.a.createElement(O,{slug:e.match.params.slug}))},A=function(){return l.a.createElement(c.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:z}),l.a.createElement(i.a,{path:"/about-me",component:y}),l.a.createElement(i.a,{path:"/contact",component:v}),l.a.createElement(i.a,{path:"/portfolio/:slug",component:F}),l.a.createElement(i.a,{component:N}," />")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.1a2b9356.chunk.js.map