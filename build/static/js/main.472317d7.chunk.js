(this["webpackJsonpnews-explorer-frontend"]=this["webpackJsonpnews-explorer-frontend"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,s){},,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(1),a=s.n(n),i=s(17),o=s.n(i),l=(s(15),s(8)),r=(s(24),s(2)),j=(s(25),s(26),s(3));var d=function(e){return Object(c.jsx)("nav",{className:" navigation ".concat(e.isOpenMob?"navigation__mobile-opened":e.theme?"navigation__black":""),children:Object(c.jsxs)("ul",{className:"navigation__items",children:[Object(c.jsx)("li",{children:Object(c.jsx)(j.b,{to:"/",className:"navigation__item navigation__item_main",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(c.jsx)("li",{children:e.loggedIn||e.isOpenMob?Object(c.jsx)(j.b,{to:"/saved-news",className:"navigation__item ".concat(e.loggedIn&&e.theme?"navigation__item_saved-news":""),children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"}):""}),Object(c.jsx)("li",{children:e.loggedIn?Object(c.jsxs)("button",{className:"navigation__button ".concat(e.theme?"navigation__button_border-black":"navigation__button_border-white"),children:["\u0413\u0440\u0435\u0442\u0430"," ",e.theme?Object(c.jsx)("svg",{className:"navigation__logaut navigation__logaut_mobile",width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10 6H6v12h4v2H6a2 2 0 01-2-2V6a2 2 0 012-2h4v2zm7.586 7l-4.293 4.134 1.414 1.362 6.707-6.459-6.707-6.459-1.414 1.362 4.293 4.134H8V13h9.586z",fill:"#1A1B22"})}):Object(c.jsx)("svg",{className:"navigation__logaut",width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10 6H6v12h4v2H6a2 2 0 01-2-2V6a2 2 0 012-2h4v2zm7.586 7l-4.293 4.134 1.414 1.362 6.707-6.459-6.707-6.459-1.414 1.362 4.293 4.134H8V13h9.586z",fill:"#fff"})})]}):Object(c.jsx)("button",{onClick:e.onClick,className:" navigation__button_main ".concat(e.theme?"":"navigation__button_border-white"),children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})]})})};var p=function(e){return Object(c.jsxs)("header",{className:"header ".concat(e.isOpenMob?"header__background":""," ").concat(e.theme?"header_saved-news":"header_main"),children:[Object(c.jsx)(j.b,{className:"header__link",to:"/",children:Object(c.jsx)("div",{to:"/",className:"".concat(e.theme?"header__logo":"header__logo-main"," ").concat(e.isOpenMob?"header__logo-main":"header__logo"),children:"NewsExplorer"})}),Object(c.jsx)("button",{type:"button",onClose:e.onClose,onClick:e.open,className:"header__burger ".concat(e.loggedIn?"header__burger-img_black":"header__burger-img_white"," ").concat(e.isOpenMob?"header__burger-close":"")}),Object(c.jsx)(d,{theme:e.theme,loggedIn:e.loggedIn,onClick:e.onClick,isOpenMob:e.isOpenMob})]})};s(32);var b=function(){return Object(c.jsxs)("section",{className:"savednewsheader",children:[Object(c.jsx)("h2",{className:"savednewsheader__title",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"}),Object(c.jsx)("p",{className:"savednewsheader__subtitle",children:"\u0413\u0440\u0435\u0442\u0430, \u0443 \u0432\u0430\u0441 5 \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0445 \u0441\u0442\u0430\u0442\u0435\u0439"}),Object(c.jsxs)("p",{className:"savednewsheader__keywords",children:["\u041f\u043e \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u043c \u0441\u043b\u043e\u0432\u0430\u043c: ",Object(c.jsx)("span",{className:"savednewsheader__keyword",children:"\u041f\u0440\u0438\u0440\u043e\u0434\u0430, \u0422\u0430\u0439\u0433\u0430"}),"\xa0\u0438\xa0",Object(c.jsx)("span",{className:"savednewsheader__keyword",children:"2-\u043c \u0434\u0440\u0443\u0433\u0438\u043c"})]})]})};s(33),s(34),s(35);var u=function(e){var t=a.a.useState(!1),s=Object(l.a)(t,2),n=s[0],i=s[1];return Object(c.jsx)("li",{className:"newscard__conteiner",children:Object(c.jsxs)("figure",{className:"newscard__figure",children:[Object(c.jsx)("div",{className:"".concat(e.loggedIn?"newscard__keyword":"newscard__keyword_hidden"),children:e.keyword}),e.loggedIn?Object(c.jsx)("button",{type:"reset",className:"newscard__trash"}):Object(c.jsx)("button",{type:"button",className:"results__bookmark ".concat(n?"results__bookmark-marked":""),onClick:function(){i(!n)}}),Object(c.jsxs)(j.b,{children:[" ",Object(c.jsx)("img",{className:"newscard__img",src:e.image,alt:"\u0438\u043b\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043a \u043d\u043e\u0432\u043e\u0441\u0442\u0438"})]}),Object(c.jsxs)("figcaption",{className:"newscard__figcaption",children:[Object(c.jsx)("p",{className:"newscard__date",children:e.date}),Object(c.jsx)(j.b,{className:"newscard__link",children:Object(c.jsx)("h3",{className:"newscard__title",children:e.title})}),Object(c.jsx)("p",{className:"newscard__text",children:e.text}),Object(c.jsx)(j.b,{className:"newscard__link",children:Object(c.jsx)("p",{className:"newscard__source",children:e.source})})]})]})})},_=s.p+"static/media/image1.ae945385.jpg",m=s.p+"static/media/image2.230e0fd8.jpg",h=[{keyword:"\u041f\u0440\u0438\u0440\u043e\u0434\u0430",image:_,date:"2 \u0430\u0432\u0433\u0443\u0441\u0442\u0430, 2019",title:"\u041d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u0434\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u2013 \u043f\u0430\u0440\u043a\u0438",text:"\u0412 2016 \u0433\u043e\u0434\u0443 \u0410\u043c\u0435\u0440\u0438\u043a\u0430 \u043e\u0442\u043c\u0435\u0447\u0430\u043b\u0430 \u0432\u0430\u0436\u043d\u044b\u0439 \u044e\u0431\u0438\u043b\u0435\u0439: \u0441\u0442\u043e \u043b\u0435\u0442 \u043d\u0430\u0437\u0430\u0434 \u0437\u0434\u0435\u0441\u044c \u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u0430\u0440\u043a\u043e\u0432 \u2013 \u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c\u044b\u0445 \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0439, \u0433\u0434\u0435 \u0438 \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043a\u0430\u0436\u0434\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u043e\u0431\u0449\u0438\u0442\u044c\u0441\u044f \u043a \u043f\u0440\u0438\u0440\u043e\u0434\u0435.",source:"\u0414\u0437\u0435\u043d"},{keyword:"\u041f\u0440\u0438\u0440\u043e\u0434\u0430",image:m,date:"2 \u0430\u0432\u0433\u0443\u0441\u0442\u0430, 2019",title:"\u041b\u0435\u0441\u043d\u044b\u0435 \u043e\u0433\u043e\u043d\u044c\u043a\u0438: \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u043e\u0434\u043d\u043e\u0439 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438",text:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444 \u043e\u0442\u0432\u043b\u0435\u043a\u043b\u0430\u0441\u044c \u043e\u0442 \u043e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u044f \u0441\u0443\u0440\u043e\u0432\u043e\u0439 \u043f\u043e\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u041c\u0435\u043a\u0441\u0438\u043a\u0438, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043f\u0435\u0447\u0430\u0442\u043b\u0435\u0442\u044c \u0443\u0441\u043a\u043e\u043b\u044c\u0437\u0430\u044e\u0449\u0443\u044e \u043a\u0440\u0430\u0441\u043e\u0442\u0443 \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0437 \u043c\u0435\u0441\u0442\u043d\u044b\u0445 \u0447\u0443\u0434\u0435\u0441 \u043f\u0440\u0438\u0440\u043e\u0434\u044b.",source:"\u0410\u0444\u0438\u0448\u0430"},{keyword:"\u0422\u0430\u0439\u0433\u0430",image:s.p+"static/media/image3.4fa6f4c2.png",date:"2 \u0430\u0432\u0433\u0443\u0441\u0442\u0430, 2019",title:"\xab\u041f\u0435\u0440\u0432\u043e\u0437\u0434\u0430\u043d\u043d\u0430\u044f \u0442\u0430\u0439\u0433\u0430\xbb: \u043d\u043e\u0432\u044b\u0439 \u0444\u043e\u0442\u043e\u043f\u0440\u043e\u0435\u043a\u0442 \u0418\u0433\u043e\u0440\u044f \u0428\u043f\u0438\u043b\u0435\u043d\u043a\u0430",text:"\u0417\u043d\u0430\u043c\u0435\u043d\u0438\u0442\u044b\u0439 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444 \u0441\u043d\u0438\u043c\u0430\u0435\u0442 \u043f\u0435\u0440\u0432\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0435 \u043b\u0435\u0441\u0430 \u0420\u043e\u0441\u0441\u0438\u0438, \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u0442\u044c \u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0438\u0445 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f. \u0412 \u044d\u0442\u043e\u0442 \u0440\u0430\u0437 \u043e\u043d \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043b\u0441\u044f \u0432 \u0414\u0432\u0438\u043d\u0441\u043a\u043e-\u041f\u0438\u043d\u0435\u0436\u0441\u043a\u0443\u044e \u0442\u0430\u0439\u0433\u0443, \u0433\u0434\u0435...",source:"\u041c\u0435\u0434\u0438\u0430\u0437\u043e\u043d\u0430"},{keyword:"\u041f\u0430\u0440\u043a\u0438",image:_,date:"2 \u0430\u0432\u0433\u0443\u0441\u0442\u0430, 2019",title:"\u041d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u0434\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u2013 \u043f\u0430\u0440\u043a\u0438",text:"\u0412 2016 \u0433\u043e\u0434\u0443 \u0410\u043c\u0435\u0440\u0438\u043a\u0430 \u043e\u0442\u043c\u0435\u0447\u0430\u043b\u0430 \u0432\u0430\u0436\u043d\u044b\u0439 \u044e\u0431\u0438\u043b\u0435\u0439: \u0441\u0442\u043e \u043b\u0435\u0442 \u043d\u0430\u0437\u0430\u0434 \u0437\u0434\u0435\u0441\u044c \u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u0430\u0440\u043a\u043e\u0432 \u2013 \u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c\u044b\u0445 \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0439, \u0433\u0434\u0435 \u0438 \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043a\u0430\u0436\u0434\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u043e\u0431\u0449\u0438\u0442\u044c\u0441\u044f \u043a \u043f\u0440\u0438\u0440\u043e\u0434\u0435.",source:"\u0414\u0437\u0435\u043d"},{keyword:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f",image:m,date:"2 \u0430\u0432\u0433\u0443\u0441\u0442\u0430, 2019",title:"\u041b\u0435\u0441\u043d\u044b\u0435 \u043e\u0433\u043e\u043d\u044c\u043a\u0438: \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u043e\u0434\u043d\u043e\u0439 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438",text:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444 \u043e\u0442\u0432\u043b\u0435\u043a\u043b\u0430\u0441\u044c \u043e\u0442 \u043e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u044f \u0441\u0443\u0440\u043e\u0432\u043e\u0439 \u043f\u043e\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u041c\u0435\u043a\u0441\u0438\u043a\u0438, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043f\u0435\u0447\u0430\u0442\u043b\u0435\u0442\u044c \u0443\u0441\u043a\u043e\u043b\u044c\u0437\u0430\u044e\u0449\u0443\u044e \u043a\u0440\u0430\u0441\u043e\u0442\u0443 \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0437 \u043c\u0435\u0441\u0442\u043d\u044b\u0445 \u0447\u0443\u0434\u0435\u0441 \u043f\u0440\u0438\u0440\u043e\u0434\u044b.",source:"\u0410\u0444\u0438\u0448\u0430"}];var x=function(e){return Object(c.jsx)("ul",{className:"newscard__list",children:h.map((function(t){return Object(c.jsx)(u,{keyword:t.keyword,image:t.image,date:t.date,title:t.title,text:t.text,source:t.source,loggedIn:e.loggedIn})}))})};var O=function(e){return Object(c.jsx)("section",{className:"savednews",children:Object(c.jsx)(x,{loggedIn:e.loggedIn})})};s(36);var f=function(){return Object(c.jsxs)("footer",{className:"footer",children:[Object(c.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Supersite, Powered by News API"}),Object(c.jsxs)("nav",{className:"footer__navigation",children:[Object(c.jsxs)("ul",{className:"footer__navigation_container",children:[Object(c.jsx)(j.b,{href:"/",className:"footer__link",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(c.jsx)(j.b,{href:"https://praktikum.yandex.ru/",target:"_blank",className:"footer__link",children:"\u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c"})]}),Object(c.jsxs)("ul",{className:"footer__social",children:[Object(c.jsx)("li",{className:"footer__social-link",children:Object(c.jsx)(j.b,{href:"https://github.com/Nolmm",children:Object(c.jsx)("svg",{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11 .895C5.417.895.895 5.423.895 11c0 4.466 2.897 8.25 6.91 9.59.503.093.689-.217.689-.49 0-.242-.007-.874-.013-1.718-2.81.608-3.405-1.352-3.405-1.352-.46-1.167-1.123-1.477-1.123-1.477-.918-.626.068-.614.068-.614 1.011.075 1.55 1.042 1.55 1.042.9 1.545 2.364 1.098 2.941.838.093-.652.354-1.098.64-1.353-2.246-.254-4.604-1.122-4.604-4.993 0-1.104.391-2.004 1.042-2.711-.105-.254-.452-1.284.1-2.674 0 0 .85-.273 2.779 1.036a9.807 9.807 0 012.53-.341 9.844 9.844 0 012.532.341c1.929-1.309 2.779-1.036 2.779-1.036.552 1.39.205 2.42.1 2.674.644.707 1.035 1.607 1.035 2.71 0 3.884-2.363 4.734-4.615 4.988.36.31.688.93.688 1.874 0 1.352-.012 2.438-.012 2.773 0 .273.18.583.695.483 4.013-1.34 6.904-5.124 6.904-9.584C21.105 5.423 16.583.895 11 .895z",fill:"#191717"})})})}),Object(c.jsx)("li",{className:"footer__social-link",children:Object(c.jsx)(j.b,{target:"_blank",href:"https://facebook.com",children:Object(c.jsxs)("svg",{width:"20",height:"20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(c.jsx)("g",{"clip-path":"url(#clip0)",children:Object(c.jsx)("path",{d:"M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z",fill:"#000"})}),Object(c.jsx)("defs",{children:Object(c.jsx)("clipPath",{id:"clip0",children:Object(c.jsx)("path",{fill:"#fff",d:"M0 0h20v20H0z"})})})]})})})]})]})]})};s(37),s(38);var g=function(){return Object(c.jsxs)("section",{className:"searchform",children:[Object(c.jsx)("h1",{className:"searchform__title",children:"\u0427\u0442\u043e \u0442\u0432\u043e\u0440\u0438\u0442\u0441\u044f \u0432 \u043c\u0438\u0440\u0435?"}),Object(c.jsx)("p",{className:"searchform__subtitle",children:"\u041d\u0430\u0445\u043e\u0434\u0438\u0442\u0435 \u0441\u0430\u043c\u044b\u0435 \u0441\u0432\u0435\u0436\u0438\u0435 \u0441\u0442\u0430\u0442\u044c\u0438 \u043d\u0430 \u043b\u044e\u0431\u0443\u044e \u0442\u0435\u043c\u0443 \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0439\u0442\u0435 \u0432 \u0441\u0432\u043e\u0451\u043c \u043b\u0438\u0447\u043d\u043e\u043c \u043a\u0430\u0431\u0438\u043d\u0435\u0442\u0435."}),Object(c.jsxs)("form",{className:"searchform__form",children:[Object(c.jsx)("input",{className:"searchform__input"}),Object(c.jsx)("button",{className:"searchform__button",children:"\u0418\u0441\u043a\u0430\u0442\u044c"})]})]})},N=(s(39),[{image:s.p+"static/media/image4.e5cb8c3e.jpg",date:"2 \u0430\u0432\u0433\u0443\u0441\u0442\u0430, 2019",title:"\u041d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u0434\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u2013 \u043f\u0430\u0440\u043a\u0438",text:"\u0412 2016 \u0433\u043e\u0434\u0443 \u0410\u043c\u0435\u0440\u0438\u043a\u0430 \u043e\u0442\u043c\u0435\u0447\u0430\u043b\u0430 \u0432\u0430\u0436\u043d\u044b\u0439 \u044e\u0431\u0438\u043b\u0435\u0439: \u0441\u0442\u043e \u043b\u0435\u0442 \u043d\u0430\u0437\u0430\u0434 \u0437\u0434\u0435\u0441\u044c \u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u0430\u0440\u043a\u043e\u0432 \u2013 \u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c\u044b\u0445 \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0439, \u0433\u0434\u0435 \u0438 \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043a\u0430\u0436\u0434\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u043e\u0431\u0449\u0438\u0442\u044c\u0441\u044f \u043a \u043f\u0440\u0438\u0440\u043e\u0434\u0435.",source:"\u041b\u0435\u043d\u0442\u0430.\u0440\u0443"},{image:s.p+"static/media/image5.f1e5a6dc.jpg",date:"2 \u0430\u0432\u0433\u0443\u0441\u0442\u0430, 2019",title:"\u041b\u0435\u0441\u043d\u044b\u0435 \u043e\u0433\u043e\u043d\u044c\u043a\u0438: \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u043e\u0434\u043d\u043e\u0439 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438",text:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444 \u043e\u0442\u0432\u043b\u0435\u043a\u043b\u0430\u0441\u044c \u043e\u0442 \u043e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u044f \u0441\u0443\u0440\u043e\u0432\u043e\u0439 \u043f\u043e\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u041c\u0435\u043a\u0441\u0438\u043a\u0438, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043f\u0435\u0447\u0430\u0442\u043b\u0435\u0442\u044c \u0443\u0441\u043a\u043e\u043b\u044c\u0437\u0430\u044e\u0449\u0443\u044e \u043a\u0440\u0430\u0441\u043e\u0442\u0443 \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0437 \u043c\u0435\u0441\u0442\u043d\u044b\u0445 \u0447\u0443\u0434\u0435\u0441 \u043f\u0440\u0438\u0440\u043e\u0434\u044b.",source:"\u041c\u0435\u0434\u0443\u0437\u0430"},{image:s.p+"static/media/image6.367d38aa.jpg",date:"2 \u0430\u0432\u0433\u0443\u0441\u0442\u0430, 2019",title:"\xab\u041f\u0435\u0440\u0432\u043e\u0437\u0434\u0430\u043d\u043d\u0430\u044f \u0442\u0430\u0439\u0433\u0430\xbb: \u043d\u043e\u0432\u044b\u0439 \u0444\u043e\u0442\u043e\u043f\u0440\u043e\u0435\u043a\u0442 \u0418\u0433\u043e\u0440\u044f \u0428\u043f\u0438\u043b\u0435\u043d\u043a\u0430",text:"\u0417\u043d\u0430\u043c\u0435\u043d\u0438\u0442\u044b\u0439 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444 \u0441\u043d\u0438\u043c\u0430\u0435\u0442 \u043f\u0435\u0440\u0432\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0435 \u043b\u0435\u0441\u0430 \u0420\u043e\u0441\u0441\u0438\u0438, \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u0442\u044c \u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0438\u0445 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f. \u0412 \u044d\u0442\u043e\u0442 \u0440\u0430\u0437 \u043e\u043d \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043b\u0441\u044f \u0432 \u0414\u0432\u0438\u043d\u0441\u043a\u043e-\u041f\u0438\u043d\u0435\u0436\u0441\u043a\u0443\u044e \u0442\u0430\u0439\u0433\u0443, \u0433\u0434\u0435...",source:"\u0420\u0438\u0430"}]);var v=function(){return Object(c.jsxs)("section",{className:"results",children:[Object(c.jsx)("h2",{className:"results__title",children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e\u0438\u0441\u043a\u0430"}),Object(c.jsx)("ul",{className:"newscard__list",children:N.map((function(e){return Object(c.jsx)(u,{image:e.image,date:e.date,title:e.title,text:e.text,source:e.source})}))}),Object(c.jsx)("div",{className:"results__button_conteiner",children:Object(c.jsx)("button",{className:"results__button",children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435"})})]})};s(40);var w=function(){return Object(c.jsxs)("section",{className:"about",children:[Object(c.jsx)("div",{className:"about__foto"}),Object(c.jsxs)("div",{className:"about__container",children:[Object(c.jsx)("h2",{className:"about__title",children:"\u041e\u0431 \u0430\u0432\u0442\u043e\u0440\u0435"}),Object(c.jsx)("p",{className:"about__text",children:"\u042d\u0442\u043e \u0431\u043b\u043e\u043a \u0441 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u043c \u0430\u0432\u0442\u043e\u0440\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u0430. \u0417\u0434\u0435\u0441\u044c \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0443\u043a\u0430\u0437\u0430\u0442\u044c, \u043a\u0430\u043a \u0432\u0430\u0441 \u0437\u043e\u0432\u0443\u0442, \u0447\u0435\u043c \u0432\u044b \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442\u0435\u0441\u044c, \u043a\u0430\u043a\u0438\u043c\u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f\u043c\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0432\u043b\u0430\u0434\u0435\u0435\u0442\u0435."}),Object(c.jsx)("p",{className:"about__text",children:"\u0422\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u0442\u044c \u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0432 \u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c\u0435, \u0447\u0435\u043c\u0443 \u0432\u044b \u0442\u0443\u0442 \u043d\u0430\u0443\u0447\u0438\u043b\u0438\u0441\u044c, \u0438 \u0447\u0435\u043c \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043c\u043e\u0447\u044c \u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u043c \u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u0430\u043c."})]})]})};s(41);var k=function(){return Object(c.jsxs)("section",{className:"preloader",children:[Object(c.jsx)("i",{className:"preloader__circle"}),Object(c.jsx)("p",{className:"preloader__title",children:"\u0418\u0434\u0435\u0442 \u043f\u043e\u0438\u0441\u043a \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439..."})]})},C=(s(42),s.p+"static/media/notfound.8fabc218.svg");var y=function(){return Object(c.jsxs)("section",{className:"notfound",children:[Object(c.jsx)("img",{className:"notfound__image",src:C,alt:"\u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),Object(c.jsx)("h3",{className:"notfound__title",children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),Object(c.jsx)("p",{className:"notfound__subtitle",children:"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u043f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443"}),Object(c.jsx)("p",{className:"notfound__subtitle",children:"\u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e."})]})};var I=function(e){return Object(c.jsxs)("section",{className:"main",children:[Object(c.jsx)(g,{}),e.search?Object(c.jsx)(v,{}):e.notfound?Object(c.jsx)(k,{}):Object(c.jsx)(y,{}),Object(c.jsx)(w,{})]})};s(43),s(44);var M=function(e){return Object(c.jsx)("section",{className:"popup ".concat(e.isOpen?"popup_opened":""),children:Object(c.jsxs)("div",{className:"popup__container",children:[Object(c.jsx)("button",{type:"button",className:"popup__close popup__close-btn",onClick:e.onClose}),Object(c.jsxs)("form",{name:e.formName,className:"popup__form",onSubmit:e.onSubmit,children:[Object(c.jsx)("h2",{className:"popup__title",children:e.title}),e.children,Object(c.jsx)("button",{type:"submit",className:"popup__submit-button",children:e.buttonTitle}),Object(c.jsxs)("p",{className:"popup__or",children:["\u0438\u043b\u0438",Object(c.jsx)(j.b,{onClick:e.onClick,className:"popup__link",to:e.route,children:e.linkTitle})]})]})]})})};var S=function(e){return Object(c.jsxs)(M,{name:"register",title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",formName:"register-form",buttonTitle:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",linkTitle:"\u0412\u043e\u0439\u0442\u0438",onClick:e.onClick,isOpen:e.isOpen,onPopupRegister:e.onPopupRegister,onClose:e.onClose,onInfoTooltip:e.onInfoTooltip,children:[Object(c.jsx)("label",{className:"popup__label",children:"Email"}),Object(c.jsx)("input",{type:"email",className:"popup__input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",required:!0}),Object(c.jsx)("span",{className:"popup__error"}),Object(c.jsx)("label",{className:"popup__label",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(c.jsx)("input",{type:"password",className:"popup__input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",required:!0}),Object(c.jsx)("span",{className:"popup__error"}),Object(c.jsx)("label",{className:"popup__label",children:"\u0418\u043c\u044f"}),Object(c.jsx)("input",{type:"text",className:"popup__input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0451 \u0438\u043c\u044f",required:!0}),Object(c.jsx)("span",{className:"popup__error"})]})};var E=function(e){return Object(c.jsxs)(M,{name:"login",title:"\u0412\u0445\u043e\u0434",formName:"login-form",buttonTitle:"\u0412\u043e\u0439\u0442\u0438",linkTitle:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",isOpen:e.isOpen,onClick:e.onInfoTooltip,onClose:e.onClose,children:[Object(c.jsx)("label",{className:"popup__label",children:"Email"}),Object(c.jsx)("input",{type:"email",className:"popup__input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",required:!0}),Object(c.jsx)("span",{className:"popup__error"}),Object(c.jsx)("label",{className:"popup__label",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(c.jsx)("input",{type:"password",className:"popup__input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",required:!0}),Object(c.jsx)("span",{className:"popup__error"})]})};s(45);var T=function(e){return Object(c.jsx)("section",{className:"popup ".concat(e.isOpen?"popup_opened":""),children:Object(c.jsxs)("div",{className:"popup__container popup__container-tooltip",children:[Object(c.jsx)("button",{type:"button",className:"popup__close",onClick:e.onClose}),Object(c.jsx)("h2",{className:"popup__title popup__title-tooltip",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d!"}),Object(c.jsx)(j.b,{onClick:e.onClick,className:"popup__link popup__link-tooltip",to:e.route,children:"\u0412\u043e\u0439\u0442\u0438"})]})})};var H=function(){var e=a.a.useState(!0),t=Object(l.a)(e,2),s=t[0],n=(t[1],a.a.useState(!0)),i=Object(l.a)(n,2),o=i[0],j=(i[1],a.a.useState(!0)),d=Object(l.a)(j,2),u=d[0],_=(d[1],a.a.useState(!0)),m=Object(l.a)(_,2),h=m[0],x=(m[1],a.a.useState(!1)),g=Object(l.a)(x,2),N=g[0],v=g[1],w=a.a.useState(!1),k=Object(l.a)(w,2),C=k[0],y=k[1],M=a.a.useState(!1),H=Object(l.a)(M,2),V=H[0],z=H[1],q=a.a.useState(!1),L=Object(l.a)(q,2),P=L[0],A=L[1];function B(){v(!1),y(!1),z(!1),A(!1)}return a.a.useEffect((function(){function e(e){"Escape"===e.key&&B()}function t(e){e.target.classList.contains("popup_opened")&&B()}return window.addEventListener("keydown",e),window.addEventListener("click",t),function(){window.removeEventListener("keydown",e),window.removeEventListener("click",t)}}),[]),Object(c.jsxs)("div",{className:"page",children:[Object(c.jsx)(p,{isOpenMob:P,theme:s,loggedIn:o,onClick:function(){v(!0)},open:function(){A(!P)}}),Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",children:Object(c.jsx)(I,{search:u,notfound:h})}),Object(c.jsxs)(r.a,{path:"/saved-news",children:[Object(c.jsx)(b,{}),Object(c.jsx)(O,{loggedIn:o})]})]}),Object(c.jsx)(S,{isOpen:N,onClose:B,onClick:function(){y(!0)}}),Object(c.jsx)(E,{isOpen:C,onClose:B,onInfoTooltip:function(){z(!0)}}),Object(c.jsx)(T,{isOpen:V,onClose:B}),Object(c.jsx)(f,{})]})};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(j.a,{children:Object(c.jsx)(H,{})})}),document.getElementById("root"))}],[[46,1,2]]]);
//# sourceMappingURL=main.472317d7.chunk.js.map