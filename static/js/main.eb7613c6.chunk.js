(this.webpackJsonpreactconfau=this.webpackJsonpreactconfau||[]).push([[0],{18:function(e,a,t){e.exports=t(44)},23:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var m=t(0),n=t.n(m),c=t(15),r=t.n(c),o=(t(23),t(17)),l=t(3),s=t(16),i=t(2),f=t.n(i),u=t(5),_=t(4),p=t.n(_);t(43);var h=function(){var e=Object(m.useState)({name:"",twitterHandle:"",comment:""}),a=Object(u.a)(e,2),t=a[0],c=a[1],r=Object(m.useState)([]),i=Object(u.a)(r,2),_=i[0],h=i[1];Object(m.useEffect)((function(){!function(){var e;f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.a.awrap(p.a.get("".concat("https://reactconfau-demo.herokuapp.com","/items")));case 2:e=a.sent,h(e.data);case 4:case"end":return a.stop()}}))}()}),[]);var d=function(e){c(Object(s.a)({},t,Object(l.a)({},e.target.name,e.target.value)))};return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"toolbar"},n.a.createElement("img",{alt:"ReactConf",src:"./logo.svg",className:"toolbar--logo"}),n.a.createElement("ul",{className:"toolbar--nav"},n.a.createElement("li",{className:"toolbar--nav-item"},"FORUM"))),n.a.createElement("div",{class:"container"},n.a.createElement("img",{alt:"ReactConf",src:"./logo--on-white.svg",className:"logo"}),n.a.createElement("ul",{className:"forum"},n.a.createElement("li",{className:"form__item"},n.a.createElement("div",{className:"form__item-profile"},n.a.createElement("img",{src:"./carmen-profile.jpg",alt:"Carmen Chung",className:"form__item-profile-picture"}),n.a.createElement("a",{href:"https://twitter.com/carmenhchung?lang=en",target:"_blank",className:"form__item-profile-name"},"Carmen")),n.a.createElement("div",{className:"form__item-comment"},n.a.createElement("p",null,'"Loved talking about XSS attacks at the conference. Thanks for having me, ReactConf AU!"'))),n.a.createElement("li",{className:"form__item"},n.a.createElement("div",{className:"form__item-profile"},n.a.createElement("img",{src:"./sachi-profile.jpg",alt:"Sachi Dog",className:"form__item-profile-picture"}),n.a.createElement("a",{href:"https://twitter.com/carmenhchung?lang=en",target:"_blank",className:"form__item-profile-name"},"Sachi")),n.a.createElement("div",{className:"form__item-comment"},n.a.createElement("p",null,'"Where was my invite?"'))),_&&_.length&&_.map((function(e){return n.a.createElement("li",{className:"form__item",key:e.comment},n.a.createElement("div",{className:"form__item-profile"},n.a.createElement("img",{src:"./anon.png",alt:"Anon",className:"form__item-profile-picture"}),n.a.createElement("a",{href:e.twitterHandle,target:"_blank",className:"form__item-profile-name"},e.name)),n.a.createElement("div",{className:"form__item-comment"},n.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.comment}})))}))),n.a.createElement("div",{className:"comment-form"},n.a.createElement("h2",{className:"comment-form__heading"},"Comment:"),n.a.createElement("form",{className:"comment-form__form",onSubmit:function(e){var a;return f.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:return e.preventDefault(),m.next=3,f.a.awrap(p.a.post("".concat("https://reactconfau-demo.herokuapp.com","/items"),t));case 3:a=m.sent,h([].concat(Object(o.a)(_),[a.data])),c({name:"",twitterHandle:"",comment:""});case 6:case"end":return m.stop()}}))}},n.a.createElement("div",{className:"comment-form__field"},n.a.createElement("label",{htmlFor:"name",className:"comment-form__label"},"Name:"),n.a.createElement("input",{id:"name",type:"text",name:"name",className:"comment-form__input",value:t.name,onChange:d})),n.a.createElement("div",{className:"comment-form__field"},n.a.createElement("label",{htmlFor:"twitterHandle",className:"comment-form__label"},"Twitter Handle:"),n.a.createElement("input",{id:"twitter",type:"text",name:"twitterHandle",className:"comment-form__input",value:t.twitterHandle,onChange:d})),n.a.createElement("div",{className:"comment-form__field"},n.a.createElement("label",{htmlFor:"comment",className:"comment-form__label"},"Comment:"),n.a.createElement("textarea",{id:"comment",name:"comment",className:"comment-form__input",value:t.comment,onChange:d})),n.a.createElement("button",{id:"submit-btn",className:"comment-form__button",type:"submit"},"SUBMIT")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.eb7613c6.chunk.js.map