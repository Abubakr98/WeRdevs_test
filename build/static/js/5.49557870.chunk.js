(this.webpackJsonpweredevs=this.webpackJsonpweredevs||[]).push([[5],{38:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return l})),t.d(n,"a",(function(){return o}));var a=t(36),r=t(37);function c(){var e=Object(a.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  min-width: 320px;\n  color: ",";\n"]);return c=function(){return e},e}var i="#3D3D3D",l="#FDD000",o=r.a.div(c(),"#DFDFDF")},39:function(e,n,t){e.exports=t.p+"static/media/Logo original RGB.89fca7ad.png"},40:function(e,n,t){"use strict";var a=t(36),r=t(0),c=t.n(r),i=t(37),l=t(16),o=t(38);function u(){var e=Object(a.a)(["\n  ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    text-transform: uppercase;\n    @media (max-width: 500px) {\n      justify-content: center;\n    }\n    a {\n      text-decoration: none;\n      color: ",";\n      font-size: 28px;\n      font-weight: 400;\n      position: relative;\n    }\n    li:hover a::after {\n      content: '\u2022';\n      font-size: 50px;\n      font-weight: 700;\n      color: ",";\n      position: absolute;\n      left: 40%;\n      top: 10%;\n    }\n    li:first-child {\n      padding-right: 70px;\n    }\n  }\n"]);return u=function(){return e},e}function d(){var e=Object(a.a)(["\n  width: 165px;\n  height: 50px;\n  @media (max-width: 500px) {\n    margin: 0 auto;\n    margin-bottom: 20px;\n  }\n"]);return d=function(){return e},e}function m(){var e=Object(a.a)(["\n  height: auto;\n  max-width: 1700px;\n  justify-content: space-between;\n  width: 100%;\n  @media (max-width: 500px) {\n    flex-direction: column;\n  }\n"]);return m=function(){return e},e}function s(){var e=Object(a.a)(["\n  background-color: #ffffff;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding: 52px 0 76px 0;\n  @media (max-width: 500px) {\n    padding: 15px 0 20px 0;\n  }\n"]);return s=function(){return e},e}var p=i.a.div(s()),f=Object(i.a)(o.a)(m()),b=i.a.img(d()),h=i.a.nav(u(),o.b,o.c),x=t(39),g=t.n(x),v=function(){return c.a.createElement("header",null,c.a.createElement(p,null,c.a.createElement(f,null,c.a.createElement(b,{src:g.a,alt:"Logo"}),c.a.createElement(h,null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(l.b,{to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(l.b,{to:"/aboutus"},"About us")))))))};function E(){var e=Object(a.a)(["\n  margin: 0 auto;\n  max-width: 1920px;\n  min-height: 1080px;\n"]);return E=function(){return e},e}n.a=function(e){return c.a.createElement(j,null,c.a.createElement(v,null),e.children)};var j=i.a.div(E())},46:function(e,n,t){},48:function(e,n,t){e.exports=t.p+"static/media/main_bg.37a75b54.jpg"},61:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(40),i=t(50),l=(t(46),t(47)),o=t(52),u=t(60),d=function(e){var n=e.setCurrentDate,t=e.currentDate;return r.a.createElement("div",{className:"header row flex-middle"},r.a.createElement("div",{className:"column col-start"},r.a.createElement("div",{className:"icon",onClick:function(){n(Object(o.a)(t,1))}},"<")),r.a.createElement("div",{className:"column col-center"},r.a.createElement("span",null," ",Object(u.a)(t,"MMMM yyyy")," ")),r.a.createElement("div",{className:"column col-end"},r.a.createElement("div",{className:"icon",onClick:function(){n(Object(l.a)(t,1))}},">")))},m=t(53),s=t(54),p=function(e){for(var n=e.currentDate,t=[],a=Object(m.a)(n),c=0;c<7;c++)t.push(r.a.createElement("div",{className:"column col-center",key:c},Object(u.a)(Object(s.a)(a,c),"EEEEE")));return r.a.createElement("div",{className:"days row"},t)},f=t(15),b=t(55),h=t(56),x=t(57),g=t(58),v=t(63),E=t(34),j=Object(f.b)((function(e){return{modal:e.modal}}),(function(e){var n=e.modal,t=n.setModalData,a=n.changeModalVisibility;return{setModalData:function(e){return t(e)},changeModalVisibility:function(){return a()}}}))((function(e){for(var n=e.currentDate,t=e.selectedDate,a=e.setSelectedDate,c=e.changeModalVisibility,i=e.setModalData,l=Object(b.a)(n),o=Object(h.a)(l),d=Object(m.a)(l),p=Object(x.a)(o),f=[],j=[],w=d,y="",O=function(e){a(e),c(),i(Object(u.a)(e,"MMMM do eeee"))};w<=p;){for(var D=function(e){var n="";Object(u.a)(w,"MMMM yyyy dd")===Object(u.a)(new Date,"MMMM yyyy dd")&&(n="today"),y=Object(u.a)(w,"dd");var a=w;j.push(r.a.createElement("div",{className:"column cell ".concat(Object(g.a)(w,l)?Object(v.a)(w,t)?"selected ".concat(n):"".concat(n):"disabled"),key:w,onClick:function(){return O(Object(E.a)(a))}},r.a.createElement("span",{className:"number"},y),r.a.createElement("span",{className:"bg"}))),w=Object(s.a)(w,1)},M=0;M<7;M++)D();f.push(r.a.createElement("div",{className:"row",key:w},j)),j=[]}return r.a.createElement("div",{className:"body"},f)})),w=function(){var e=Object(a.useState)(new Date),n=Object(i.a)(e,2),t=n[0],c=n[1],l=Object(a.useState)(new Date),o=Object(i.a)(l,2),u=o[0],m=o[1];return r.a.createElement("div",{className:"calendar"},r.a.createElement("div",null,r.a.createElement(d,{setCurrentDate:c,currentDate:t})),r.a.createElement("div",null,r.a.createElement(j,{currentDate:t,selectedDate:u,setSelectedDate:m})),r.a.createElement("div",null,r.a.createElement(p,{currentDate:t})))},y=t(36),O=t(37),D=t(38),M=t(48),k=t.n(M);function N(){var e=Object(y.a)(["\n  text-align: right;\n  padding-right: 30px;\n  h1 {\n    font-size: 50px;\n    letter-spacing: 3.5px;\n    line-height: 64px;\n    font-weight: 700;\n    color: ",";\n    text-transform: uppercase;\n    padding-bottom: 30px;\n  }\n  p {\n    font-size: 30px;\n    font-weight: 300;\n    line-height: 40px;\n    letter-spacing: 0.6px;\n    color: #dfdfdf;\n  }\n"]);return N=function(){return e},e}function z(){var e=Object(y.a)(["\n  padding-top: 200px;\n  padding: 210px 0;\n  @media (max-width: 1250px) {\n    padding: 50px 0;\n    width: 100%;\n  }\n"]);return z=function(){return e},e}function C(){var e=Object(y.a)(["\n  justify-content: flex-end;\n  background-image: url(",");\n  background-size: contain;\n  background-repeat: no-repeat;\n  overflow: hidden;\n  @media (max-width: 1430px) {\n    background-size: cover;\n  }\n"]);return C=function(){return e},e}function F(){var e=Object(y.a)(["\n  width: 705px;\n  min-width: 320px;\n  height: 100%;\n  display: flex;\n  padding-top: 200px;\n  justify-content: center;\n  background-color: #272829;\n  padding: 210px 0;\n  @media (max-width: 1250px) {\n    padding: 50px 0;\n    width: 100%;\n  }\n  & > .calendar {\n    max-width: 467px;\n    height: auto;\n  }\n"]);return F=function(){return e},e}var S=O.a.div(F()),V=Object(O.a)(D.a)(C(),k.a),J=O.a.div(z()),L=O.a.div(N(),D.c),A=Object(a.lazy)((function(){return t.e(7).then(t.bind(null,59))}));n.default=function(){return r.a.createElement(c.a,null,r.a.createElement(V,null,r.a.createElement(J,null,r.a.createElement(L,null,r.a.createElement("h1",null,"Choose the day ",r.a.createElement("br",null)," for the meeting"),r.a.createElement("p",null,"We encourage you to book your",r.a.createElement("br",null)," appointment online.",r.a.createElement("br",null)," This will save you time."))),r.a.createElement(S,null,r.a.createElement(w,null))),r.a.createElement(A,null))}}}]);
//# sourceMappingURL=5.49557870.chunk.js.map