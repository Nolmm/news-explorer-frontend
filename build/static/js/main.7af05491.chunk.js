(this["webpackJsonpnews-explorer-frontend"]=this["webpackJsonpnews-explorer-frontend"]||[]).push([[0],Array(19).concat([function(e,t,n){},,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),r=n(21),o=n.n(r),i=(n(19),n(3)),l=n(2),u=(n(29),n(4)),d=(n(30),n(31),n(9)),j=s.a.createContext();var h=function(e){var t=s.a.useContext(j).name,n=s.a.useState(""),c=Object(l.a)(n,2),r=c[0],o=c[1];return s.a.useEffect((function(){o(t)}),[t]),Object(a.jsx)("nav",{className:" navigation ".concat(e.isOpenMob?"navigation__mobile-opened":e.theme?"navigation__black":""),children:Object(a.jsxs)("ul",{className:"navigation__items",children:[Object(a.jsx)("li",{children:Object(a.jsx)(d.b,{to:"/",className:"navigation__item navigation__item_main",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(a.jsx)("li",{children:e.loggedIn||e.isOpenMob?Object(a.jsx)(d.b,{to:"/saved-news",className:"navigation__item ".concat(e.loggedIn&&e.theme?"navigation__item_saved-news":""),children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"}):""}),Object(a.jsx)("li",{children:e.loggedIn?Object(a.jsxs)("button",{onClick:e.handleLogout,className:"navigation__button ".concat(e.theme?"navigation__button_border-black":"navigation__button_border-white"),children:[r," ",e.theme?Object(a.jsx)("svg",{className:"navigation__logaut navigation__logaut_mobile",width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10 6H6v12h4v2H6a2 2 0 01-2-2V6a2 2 0 012-2h4v2zm7.586 7l-4.293 4.134 1.414 1.362 6.707-6.459-6.707-6.459-1.414 1.362 4.293 4.134H8V13h9.586z",fill:"#1A1B22"})}):Object(a.jsx)("svg",{className:"navigation__logaut",width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10 6H6v12h4v2H6a2 2 0 01-2-2V6a2 2 0 012-2h4v2zm7.586 7l-4.293 4.134 1.414 1.362 6.707-6.459-6.707-6.459-1.414 1.362 4.293 4.134H8V13h9.586z",fill:"#fff"})})]}):Object(a.jsx)("button",{onClick:e.onClick,className:" navigation__button_main ".concat(e.theme?"":"navigation__button_border-white"),children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})]})})};var b=function(e){return Object(a.jsxs)("header",{className:"header ".concat(e.isOpenMob?"header__background":""," ").concat(e.theme?"header_saved-news":"header_main"),children:[Object(a.jsx)(d.b,{className:"header__link",to:"/",children:Object(a.jsx)("div",{className:"".concat(e.theme?"header__logo":"header__logo-main"," ").concat(e.isOpenMob?"header__logo-main":"header__logo"),children:"NewsExplorer"})}),Object(a.jsx)("button",{type:"button",onClose:e.onClose,onClick:e.open,className:"header__burger ".concat(e.theme?"header__burger-img_black":"header__burger-img_white"," ").concat(e.isOpenMob?"header__burger-close":"")}),Object(a.jsx)(h,{theme:e.theme,loggedIn:e.loggedIn,onClick:e.onClick,isOpenMob:e.isOpenMob,handleLogout:e.handleLogout})]})};n(37),n(38);var p=function(e){var t=s.a.useContext(j).name,n=s.a.useState([]),c=Object(l.a)(n,2),r=c[0],o=c[1];s.a.useEffect((function(){o(u(e.articles.map((function(e){return e.keyword[0].toUpperCase()+e.keyword.slice(1)}))))}),[e.articles]);var i,u=function(e){var t={};return e.forEach((function(e){return t[e]=0})),e.filter((function(e){return 1===++t[e]})).sort((function(e,n){return t[n]-t[e]}))},d=["\u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u0430\u044f \u0441\u0442\u0430\u0442\u044c\u044f","\u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438","\u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0445 \u0441\u0442\u0430\u0442\u0435\u0439"][(i=e.articles.length)%100>4&&i%100<20?2:[2,0,1,1,1,2][i%10<5?i%10:5]];return Object(a.jsxs)("section",{className:"savednewsheader",children:[Object(a.jsx)("h2",{className:"savednewsheader__title",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"}),Object(a.jsx)("p",{className:"savednewsheader__subtitle",children:"".concat(t,", \u0443 \u0432\u0430\u0441 ").concat(e.articles.length," ").concat(d)}),Object(a.jsxs)("p",{className:"savednewsheader__keywords",children:["\u041f\u043e \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u043c \u0441\u043b\u043e\u0432\u0430\u043c:",Object(a.jsx)("span",{className:"savednewsheader__keyword",children:r.length>3?"".concat(r[0],", ").concat(r[1]," \u0438 ").concat(r.length-2,"-\u043c \u0434\u0440\u0443\u0433\u0438\u043c"):"".concat(r.join(", "))})]})]})};n(39);var m=function(e){return Object(a.jsxs)("li",{className:"newscard__conteiner",children:[Object(a.jsx)("div",{className:"".concat(e.loggedIn&&e.id&&e.savedNews?"newscard__keyword":"newscard__keyword_hidden"),children:e.keyword}),e.id&&e.savedNews?Object(a.jsx)("button",{type:"reset",className:"newscard__trash",onClick:e.onCardDelete}):e.loggedIn?Object(a.jsx)("button",{type:"button",className:"results__bookmark ".concat(e.id?"results__bookmark-marked":""),onClick:function(t){if(t.target.classList.contains("results__bookmark-marked")&&e.loggedIn)return e.onDelete(e.id);t.target.classList.contains("results__bookmark")&&e.loggedIn&&e.addArticleClick({title:e.title,text:e.text,date:e.date,source:e.source,link:e.url,image:e.image,keyword:e.keyword})}}):Object(a.jsx)("button",{className:"results__bookmark results__bookmark_not-loggedin",onClick:e.onClick}),Object(a.jsxs)("a",{target:"_blank",rel:"noreferrer",href:e.url||e.link,children:[" ",Object(a.jsx)("img",{className:"newscard__img",src:e.image,alt:"\u0438\u043b\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043a \u043d\u043e\u0432\u043e\u0441\u0442\u0438"})]}),Object(a.jsxs)("figcaption",{className:"newscard__figcaption",children:[Object(a.jsx)("p",{className:"newscard__date",children:function(e){var t=new Date(e);return"".concat(t.toLocaleString("ru-RU",{month:"long",day:"numeric"}),", ").concat(t.getFullYear())}(e.date)}),Object(a.jsxs)("a",{target:"_blank",rel:"noreferrer",href:e.url||e.link,className:"newscard__link",children:[Object(a.jsx)("h3",{className:"newscard__title",children:e.title}),Object(a.jsx)("p",{className:"newscard__text",children:e.text})]}),Object(a.jsx)("a",{className:"newscard__link",target:"_blank",rel:"noreferrer",href:e.url||e.link,children:Object(a.jsx)("p",{className:"newscard__source",children:e.source})})]})]})};var _=function(e){return s.a.useEffect((function(){e.theme(!0)}),[]),Object(a.jsxs)("section",{className:"savednews",children:[Object(a.jsx)(p,{articles:e.articles}),Object(a.jsx)("ul",{className:"newscard__list",children:e.saved.map((function(t){return Object(a.jsx)(m,{articles:!0,id:t._id,loggedIn:e.loggedIn,keyword:t.keyword,image:t.image,date:t.date,savedNews:!0,url:t.link,title:t.title,text:t.text,source:t.source,saved:e.saved,onCardDelete:function(){return n=t._id,void e.deleteArticle(n);var n}},t._id)}))})]})};n(40);var f=function(){return Object(a.jsxs)("footer",{className:"footer",children:[Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Supersite, Powered by News API"}),Object(a.jsxs)("div",{className:"footer__navigation",children:[Object(a.jsxs)("ul",{className:"footer__navigation_container",children:[Object(a.jsx)(d.b,{to:"/",className:"footer__link",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(a.jsx)("a",{className:"footer__link",target:"_blank",rel:"noreferrer",href:"https://praktikum.yandex.ru/",children:"\u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c"})]}),Object(a.jsxs)("ul",{className:"footer__social",children:[Object(a.jsx)("li",{className:"footer__social-link",children:Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/Nolmm",children:Object(a.jsx)("svg",{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11 .895C5.417.895.895 5.423.895 11c0 4.466 2.897 8.25 6.91 9.59.503.093.689-.217.689-.49 0-.242-.007-.874-.013-1.718-2.81.608-3.405-1.352-3.405-1.352-.46-1.167-1.123-1.477-1.123-1.477-.918-.626.068-.614.068-.614 1.011.075 1.55 1.042 1.55 1.042.9 1.545 2.364 1.098 2.941.838.093-.652.354-1.098.64-1.353-2.246-.254-4.604-1.122-4.604-4.993 0-1.104.391-2.004 1.042-2.711-.105-.254-.452-1.284.1-2.674 0 0 .85-.273 2.779 1.036a9.807 9.807 0 012.53-.341 9.844 9.844 0 012.532.341c1.929-1.309 2.779-1.036 2.779-1.036.552 1.39.205 2.42.1 2.674.644.707 1.035 1.607 1.035 2.71 0 3.884-2.363 4.734-4.615 4.988.36.31.688.93.688 1.874 0 1.352-.012 2.438-.012 2.773 0 .273.18.583.695.483 4.013-1.34 6.904-5.124 6.904-9.584C21.105 5.423 16.583.895 11 .895z",fill:"#191717"})})})}),Object(a.jsx)("li",{className:"footer__social-link",children:Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://facebook.com",children:Object(a.jsxs)("svg",{width:"20",height:"20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(a.jsx)("g",{"clip-path":"url(#clip0)",children:Object(a.jsx)("path",{d:"M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z",fill:"#000"})}),Object(a.jsx)("defs",{children:Object(a.jsx)("clipPath",{id:"clip0",children:Object(a.jsx)("path",{fill:"#fff",d:"M0 0h20v20H0z"})})})]})})})]})]})]})},g=(n(41),n(42),n(12));function O(){var e=s.a.useState({}),t=Object(l.a)(e,2),n=t[0],a=t[1],r=s.a.useState({}),o=Object(l.a)(r,2),u=o[0],d=o[1],j=s.a.useState(!1),h=Object(l.a)(j,2),b=h[0],p=h[1],m=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gim,_=Object(c.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];a(e),d(t),p(n)}),[a,d,p]);return{values:n,handleChange:function(e){var t=e.target,c=t.value,s=t.name;a(Object(i.a)(Object(i.a)({},n),{},Object(g.a)({},s,c))),d(Object(i.a)(Object(i.a)({},u),{},Object(g.a)({},s,function(e){return"email"!==e.type||m.test(e.value)?e.validationMessage:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 email"}(t)))),p(t.closest("form").checkValidity())},errors:u,isValid:b,resetForm:_}}var x=function(e){var t=O(),n=t.values,r=t.handleChange,o=s.a.useState(!1),i=Object(l.a)(o,2),u=i[0],d=i[1],j=Object(c.useRef)(null);return Object(a.jsxs)("section",{className:"searchform",children:[Object(a.jsx)("h1",{className:"searchform__title",children:"\u0427\u0442\u043e \u0442\u0432\u043e\u0440\u0438\u0442\u0441\u044f \u0432 \u043c\u0438\u0440\u0435?"}),Object(a.jsx)("p",{className:"searchform__subtitle",children:"\u041d\u0430\u0445\u043e\u0434\u0438\u0442\u0435 \u0441\u0430\u043c\u044b\u0435 \u0441\u0432\u0435\u0436\u0438\u0435 \u0441\u0442\u0430\u0442\u044c\u0438 \u043d\u0430 \u043b\u044e\u0431\u0443\u044e \u0442\u0435\u043c\u0443 \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0439\u0442\u0435 \u0432 \u0441\u0432\u043e\u0451\u043c \u043b\u0438\u0447\u043d\u043e\u043c \u043a\u0430\u0431\u0438\u043d\u0435\u0442\u0435."}),Object(a.jsxs)("form",{className:"searchform__form",onSubmit:function(e){e.preventDefault(),n.searchformInput||d(!0)},noValidate:!0,children:[Object(a.jsx)("input",{ref:j,name:"searchformInput",className:"searchform__input ".concat(u?"searchform__input_error":""),placeholder:u?"\u041d\u0443\u0436\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e",autoComplete:"on",required:!0,onChange:r,onFocus:function(){d(!1)}}),Object(a.jsx)("button",{className:"searchform__button",onClick:function(){e.requestArticles(j.current.value)},children:"\u0418\u0441\u043a\u0430\u0442\u044c"})]})]})};n(43),n(44);var v=function(e){var t=s.a.useState(6),n=Object(l.a)(t,2),c=n[0],r=n[1],o=s.a.useState(e.data.slice(0,3)),i=Object(l.a)(o,2),u=i[0],d=i[1];function j(t){e.createArticle(t)}return s.a.useEffect((function(){d(e.data.slice(0,3))}),[e.data]),Object(a.jsxs)("div",{children:[Object(a.jsx)("ul",{className:"newscard__list",children:u.map((function(t){return Object(a.jsx)(m,{id:t._id,keyword:t.keyword,image:t.urlToImage,date:t.publishedAt,title:t.title,text:t.description,source:t.source.name,loggedIn:e.loggedIn,url:t.url,onClick:e.onClick,onDelete:function(t){return function(t){e.deleteArticle(t)}(t)},addArticleClick:j,createArticle:e.createArticle},t.url)}))}),Object(a.jsx)("div",{className:"results__button_conteiner",children:e.data.length!==u.length?Object(a.jsx)("button",{className:"results__button",onClick:function(){r((function(e){return e+3})),d(e.data.slice(0,c))},children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435"}):""})]})};var k=function(e){return Object(a.jsxs)("section",{className:"results",children:[Object(a.jsx)("h2",{className:"results__title",children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e\u0438\u0441\u043a\u0430"}),Object(a.jsx)(v,{data:e.data,createArticle:e.createArticle,deleteArticle:e.deleteArticle,loggedIn:e.loggedIn,onClick:e.onClick,setSaved:e.setSaved})]})};n(45);var w=function(){return Object(a.jsxs)("section",{className:"about",children:[Object(a.jsx)("div",{className:"about__foto"}),Object(a.jsxs)("div",{className:"about__container",children:[Object(a.jsx)("h2",{className:"about__title",children:"\u041e\u0431 \u0430\u0432\u0442\u043e\u0440\u0435"}),Object(a.jsx)("p",{className:"about__text",children:"\u042d\u0442\u043e \u0431\u043b\u043e\u043a \u0441 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u043c \u0430\u0432\u0442\u043e\u0440\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u0430. \u0417\u0434\u0435\u0441\u044c \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0443\u043a\u0430\u0437\u0430\u0442\u044c, \u043a\u0430\u043a \u0432\u0430\u0441 \u0437\u043e\u0432\u0443\u0442, \u0447\u0435\u043c \u0432\u044b \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442\u0435\u0441\u044c, \u043a\u0430\u043a\u0438\u043c\u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f\u043c\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0432\u043b\u0430\u0434\u0435\u0435\u0442\u0435."}),Object(a.jsx)("p",{className:"about__text",children:"\u0422\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u0442\u044c \u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0432 \u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c\u0435, \u0447\u0435\u043c\u0443 \u0432\u044b \u0442\u0443\u0442 \u043d\u0430\u0443\u0447\u0438\u043b\u0438\u0441\u044c, \u0438 \u0447\u0435\u043c \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043c\u043e\u0447\u044c \u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u043c \u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u0430\u043c."})]})]})};n(46);var N=function(){return Object(a.jsxs)("section",{className:"preloader",children:[Object(a.jsx)("i",{className:"preloader__circle"}),Object(a.jsx)("p",{className:"preloader__title",children:"\u0418\u0434\u0435\u0442 \u043f\u043e\u0438\u0441\u043a \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439..."})]})},C=(n(47),n.p+"static/media/notfound.8fabc218.svg");var y=function(){return Object(a.jsxs)("section",{className:"notfound",children:[Object(a.jsx)("img",{className:"notfound__image",src:C,alt:"\u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),Object(a.jsx)("h3",{className:"notfound__title",children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),Object(a.jsx)("p",{className:"notfound__subtitle",children:"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u043f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443"}),Object(a.jsx)("p",{className:"notfound__subtitle",children:"\u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e."})]})};var S=function(e){return s.a.useEffect((function(){e.theme(!1)}),[]),Object(a.jsxs)("section",{className:"main",children:[Object(a.jsx)(x,{requestArticles:e.requestArticles}),(t=e.data,n=e.search,c=e.createArticle,r=e.deleteArticle,o=e.loggedIn,e.id,i=e.onClick,l=e.setSaved,n?Object(a.jsx)(N,{}):null!==t?0===t.length?Object(a.jsx)(y,{}):Object(a.jsx)(k,{data:t,createArticle:c,deleteArticle:r,loggedIn:o,onClick:i,setSaved:l}):void 0),Object(a.jsx)(w,{})]});var t,n,c,r,o,i,l};n(48),n(49);var A=function(e){return Object(a.jsx)("section",{className:"popup ".concat(e.isOpen?"popup_opened":""),children:Object(a.jsxs)("div",{className:"popup__container",children:[Object(a.jsx)("button",{type:"button",className:"popup__close popup__close-btn",onClick:e.onClose}),Object(a.jsxs)("form",{name:e.formName,className:"popup__form",onSubmit:e.onSubmit,children:[Object(a.jsx)("h2",{className:"popup__title",children:e.title}),e.children]})]})})};var I=function(e){var t=O(),n=t.values,c=t.handleChange,r=t.errors,o=t.isValid,i=t.resetForm;return s.a.useEffect((function(){i()}),[e.isOpen]),Object(a.jsxs)(A,{name:"register",title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",formName:"register-form",onClick:e.onClick,isOpen:e.isOpen,onPopupRegister:e.onPopupRegister,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.handleRegister({email:n.email,password:n.password,name:n.name})},children:[Object(a.jsx)("label",{className:"popup__label",children:"Email"}),Object(a.jsx)("input",{type:"email",className:"popup__input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",required:!0,name:"email",onChange:c,value:n.email||""}),Object(a.jsx)("span",{className:"popup__error",children:r.email}),Object(a.jsx)("label",{className:"popup__label",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(a.jsx)("input",{type:"password",className:"popup__input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",required:!0,name:"password",onChange:c,value:n.password||""}),Object(a.jsx)("span",{className:"popup__error",children:r.password}),Object(a.jsx)("label",{className:"popup__label",children:"\u0418\u043c\u044f"}),Object(a.jsx)("input",{onChange:c,value:n.name||"",type:"text",className:"popup__input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0451 \u0438\u043c\u044f",required:!0,name:"name",minLength:"3",maxLength:"9"}),Object(a.jsx)("span",{className:"popup__error",children:r.name}),Object(a.jsx)("span",{className:"popup__error popup__error_button",children:e.error.register}),Object(a.jsx)("button",{type:"submit",className:"".concat(o?"popup__submit-button":"popup__submit-button_disabled"),disabled:!o,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(a.jsxs)("p",{className:"popup__or",children:["\u0438\u043b\u0438",Object(a.jsx)("span",{onClick:function(){e.onClose(),e.onLogin()},className:"popup__link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})};var E=function(e){var t=O(),n=t.values,c=t.handleChange,r=t.errors,o=t.isValid,i=t.resetForm;return s.a.useEffect((function(){i()}),[e.isOpen]),Object(a.jsxs)(A,{name:"login",title:"\u0412\u0445\u043e\u0434",formName:"login-form",buttonTitle:"\u0412\u043e\u0439\u0442\u0438",isOpen:e.isOpen,onClick:e.onInfoTooltip,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.handleLogin({email:n.email,password:n.password,name:n.name})},children:[Object(a.jsx)("label",{className:"popup__label",children:"Email"}),Object(a.jsx)("input",{type:"email",className:"popup__input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",required:!0,name:"email",onChange:c,value:n.email||""}),Object(a.jsx)("span",{className:"popup__error",children:r.email}),Object(a.jsx)("label",{className:"popup__label",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(a.jsx)("input",{type:"password",className:"popup__input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",name:"password",required:!0,onChange:c,value:n.password||""}),Object(a.jsx)("span",{className:"popup__error",children:r.password}),Object(a.jsx)("span",{className:"popup__error popup__error_button",children:e.error.login}),Object(a.jsx)("button",{type:"submit",className:"".concat(o?"popup__submit-button":"popup__submit-button_disabled"),disabled:!o,children:"\u0412\u043e\u0439\u0442\u0438"}),Object(a.jsxs)("p",{className:"popup__or",children:["\u0438\u043b\u0438",Object(a.jsx)("span",{onClick:function(){e.onClose(),e.onRegister()},className:"popup__link",children:"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})};n(50);var L=function(e){return Object(a.jsx)("section",{className:"popup ".concat(e.isOpen?"popup_opened":""),children:Object(a.jsxs)("div",{className:"popup__container popup__container-tooltip",children:[Object(a.jsx)("button",{type:"button",className:"popup__close",onClick:e.onClose}),Object(a.jsx)("h2",{className:"popup__title popup__title-tooltip",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d!"}),Object(a.jsx)("span",{onClick:function(){e.onClose(),e.onLogin()},className:"popup__link popup__link-tooltip",children:"\u0412\u043e\u0439\u0442\u0438"})]})})},z=n(13),T=n(14),M=new(function(){function e(t){var n=t.baseUrl,a=t.apiKey;Object(z.a)(this,e),this.baseUrl=n,this.apiKey=a}return Object(T.a)(e,[{key:"getArticles",value:function(e){var t=new Date,n="".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate()),a=t.getDate()-7;t.setDate(a);var c="".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate());return fetch("".concat(this.baseUrl,"?language=ru&q=").concat(e,"&from=").concat(c,"&to=").concat(n,"&pageSize=100&apiKey=").concat(this.apiKey),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}))}}]),e}())({baseUrl:"https://nomoreparties.co/news/v2/everything",apiKey:"c5bc199947a34a7096759ba544e69356"}),P=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(z.a)(this,e),this.baseUrl=n,this.headers=a}return Object(T.a)(e,[{key:"register",value:function(e){return fetch("".concat(this.baseUrl,"/signup"),{method:"POST",headers:this.headers,body:JSON.stringify({password:e.password,email:e.email,name:e.name})}).then((function(e){return e.ok?e.json():e.text().then((function(e){return Promise.reject(new Error(JSON.parse(e).message))}))}))}},{key:"login",value:function(e){return fetch("".concat(this.baseUrl,"/signin"),{method:"POST",headers:this.headers,body:JSON.stringify({password:e.password,email:e.email})}).then((function(e){return e.ok?e.json():e.text().then((function(e){return Promise.reject(new Error(JSON.parse(e).message))}))}))}},{key:"getToken",value:function(){var e=localStorage.getItem("jwt");return fetch("".concat(this.baseUrl,"/users/me"),{method:"GET",headers:Object(i.a)(Object(i.a)({},this.headers),{},{Authorization:"Bearer ".concat(e)})}).then((function(e){return e.ok?e.json():Promise.reject("".concat(e.status," ").concat(e.statusText))}))}},{key:"getArticles",value:function(){var e=localStorage.getItem("jwt");return fetch("".concat(this.baseUrl,"/articles"),{method:"GET",headers:Object(i.a)(Object(i.a)({},this.headers),{},{Authorization:"Bearer ".concat(e)})}).then((function(e){return e.ok?e.json():Promise.reject("".concat(e.status," ").concat(e.statusText))}))}},{key:"getUserMe",value:function(){var e=localStorage.getItem("jwt");return fetch("".concat(this.baseUrl,"/users/me"),{method:"GET",headers:Object(i.a)(Object(i.a)({},this.headers),{},{Authorization:"Bearer ".concat(e)})}).then((function(e){return e.ok?e.json():Promise.reject("".concat(e.status," ").concat(e.statusText))}))}},{key:"createArticle",value:function(e){var t=localStorage.getItem("jwt");return fetch("".concat(this.baseUrl,"/articles"),{method:"POST",headers:Object(i.a)(Object(i.a)({},this.headers),{},{Authorization:"Bearer ".concat(t)}),body:JSON.stringify({keyword:e.keyword,title:e.title,text:e.text,date:e.date,source:e.source,link:e.link,image:e.image})}).then((function(e){return e.ok?e.json():Promise.reject("".concat(e.status," ").concat(e.statusText))}))}},{key:"deleteArticle",value:function(e){var t=localStorage.getItem("jwt");return fetch("".concat(this.baseUrl,"/articles/").concat(e),{method:"DELETE",headers:Object(i.a)(Object(i.a)({},this._headers),{},{authorization:"Bearer ".concat(t)})}).then((function(e){return e.ok?e.json():Promise.reject("".concat(e.status," ").concat(e.statusText))}))}}]),e}())({baseUrl:"http://api.nolmmnews.students.nomoreparties.space",headers:{"Content-Type":"application/json"}}),U=n(23);var D=function(e){var t=e.component,n=Object(U.a)(e,["component"]);return Object(a.jsx)(u.b,{children:function(){return!0===n.loggedIn?Object(a.jsx)(t,Object(i.a)({},n)):Object(a.jsx)(u.a,{to:"./"})}})};var V=function(){var e=s.a.useState(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],r=s.a.useState(!1),o=Object(l.a)(r,2),d=o[0],h=o[1],p=s.a.useState({name:"",email:""}),m=Object(l.a)(p,2),g=m[0],O=m[1],x=s.a.useState(!1),v=Object(l.a)(x,2),k=v[0],w=v[1],N=s.a.useState(null),C=Object(l.a)(N,2),y=C[0],A=C[1],z=s.a.useState({register:"",login:""}),T=Object(l.a)(z,2),U=T[0],V=T[1],q=s.a.useState(!1),H=Object(l.a)(q,2),J=H[0],R=H[1],B=s.a.useState(!1),F=Object(l.a)(B,2),Z=F[0],K=F[1],G=s.a.useState(!1),Y=Object(l.a)(G,2),$=Y[0],Q=Y[1],W=s.a.useState(!1),X=Object(l.a)(W,2),ee=X[0],te=X[1],ne=s.a.useState([]),ae=Object(l.a)(ne,2),ce=ae[0],se=ae[1],re=Object(u.g)();function oe(){K(!0)}function ie(){R(!1),K(!1),Q(!1),te(!1),V({register:"",login:""})}s.a.useEffect((function(){localStorage.getItem("jwt")&&P.getToken().then((function(e){O(Object(i.a)(Object(i.a)({},g),{},{name:e.name,email:e.email}));var t=JSON.parse(localStorage.getItem("Search"));A(t)})).catch((function(e){return console.log(e)}))}),[d]),s.a.useEffect((function(){function e(e){"Escape"===e.key&&ie()}function t(e){e.target.classList.contains("popup_opened")&&ie()}return window.addEventListener("keydown",e),window.addEventListener("click",t),function(){window.removeEventListener("keydown",e),window.removeEventListener("click",t)}}),[]),s.a.useEffect((function(){if(d){var e=localStorage.getItem("token");Promise.all([P.getUserMe(e),P.getArticles(e)]).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];O(n),se(a)})).catch((function(e){return console.log(e)}))}}),[d]);var le=function(e){return P.deleteArticle(e).then((function(t){var n=ce.filter((function(t){return t._id!==e}));se(n);var a=y.map((function(t){return t._id===e&&(t._id=void 0),t}));A(a)})).catch((function(e){return console.log(e)}))};return Object(a.jsx)("div",{className:"page",children:Object(a.jsxs)(j.Provider,{value:g,children:[Object(a.jsx)(b,{isOpenMob:ee,theme:n,loggedIn:d,onClick:oe,open:function(){te(!ee)},handleLogout:function(){localStorage.removeItem("jwt"),localStorage.removeItem("Search"),h(!1),re.push("/")}}),Object(a.jsxs)(u.d,{children:[Object(a.jsx)(u.b,{exact:!0,path:"/",children:Object(a.jsx)(S,{search:k,requestArticles:function(e){w(!0),M.getArticles(e).then((function(t){var n=t.articles.map((function(t){return t.keyword=e,t}));A(n),localStorage.setItem("Search",JSON.stringify(n))})).catch((function(e){return console.log(e)})).finally((function(e){w(!1)}))},data:y,setData:A,setSearch:w,theme:c,articles:ce,createArticle:function(e){var t=ce;P.createArticle(e).then((function(n){t.push(n),se(t);var a=y.map((function(t){return t.url===e.link&&(t._id=n._id),t}));A(a)})).catch((function(e){console.log(e)}))},deleteArticle:le,loggedIn:d,saved:ce,onClick:oe})}),Object(a.jsx)(D,{exact:!0,path:"/saved-news",component:_,loggedIn:d,theme:c,data:y,articles:ce,saved:ce,deleteArticle:le})]}),Object(a.jsx)(I,{isOpen:J,onClose:ie,onClick:oe,handleRegister:function(e){V({register:"",login:""}),P.register({password:e.password,email:e.email,name:e.name}).then((function(){ie(),Q(!0),re.push("/")})).catch((function(e){console.log(e),V(Object(i.a)(Object(i.a)({},U),{},{register:e.message}))}))},onLogin:oe,error:U}),Object(a.jsx)(E,{isOpen:Z,onClose:ie,handleLogin:function(e){V({register:"",login:""}),P.login({password:e.password,email:e.email}).then((function(e){localStorage.setItem("jwt",e.token),ie(),h(!0)})).catch((function(e){V(Object(i.a)(Object(i.a)({},U),{},{login:e.message}))}))},onRegister:function(){R(!0)},error:U}),Object(a.jsx)(L,{onLogin:oe,isOpen:$,onClose:ie,onClick:Z}),Object(a.jsx)(f,{})]})})};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(d.a,{children:Object(a.jsx)(V,{})})}),document.getElementById("root"))}]),[[51,1,2]]]);
//# sourceMappingURL=main.7af05491.chunk.js.map