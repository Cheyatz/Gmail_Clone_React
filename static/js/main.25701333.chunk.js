(this["webpackJsonp07-gmail_clone"]=this["webpackJsonp07-gmail_clone"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c,i,a,s,r=n(5),o=n.n(r),l=n(1),d=n.n(l),u=(n(17),["title","titleId"]);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var n,c,i=function(e,t){if(null==e)return{};var n,c,i={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function b(e,t){var n=e.title,r=e.titleId,o=j(e,u);return l.createElement("svg",m({width:45,height:45,viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},o),n?l.createElement("title",{id:r},n):null,c||(c=l.createElement("path",{d:"M18.9474 26.0526L26.0526 18.9474L26.0526 -1.28619e-06L18.9474 -1.90735e-06L18.9474 26.0526Z",fill:"#EA4335"})),i||(i=l.createElement("path",{d:"M18.9474 26.0526L26.0526 18.9474L45 18.9474L45 26.0526L18.9474 26.0526Z",fill:"#4285F4"})),a||(a=l.createElement("rect",{x:18.9474,y:26.0526,width:7.10526,height:18.9474,fill:"#34A853"})),s||(s=l.createElement("rect",{x:18.9474,y:18.9474,width:7.10526,height:18.9474,transform:"rotate(90 18.9474 18.9474)",fill:"#FBBC05"})))}var f=l.forwardRef(b),O=(n.p,n(0)),h=function(){return Object(O.jsx)("div",{className:"section-menu-compose-btn",children:Object(O.jsxs)("div",{className:"section-menu-compose-btn-container",children:[Object(O.jsx)("div",{className:"section-menu-compose-btn-svg",children:Object(O.jsx)(f,{})}),Object(O.jsx)("span",{className:"section-menu-compose-btn-text",children:"Compose"})]})})},g=n(2),p=function(e){var t="".concat(e.margin,"rem 0rem"),n={margin:t},c=Object(g.b)(),i=Object(g.c)((function(t){return t[e.selection?"emailActiveSectionsReducer":""]})),a=function(){};e.selection&&(i[e.imgData.code]&&(n={margin:t,backgroundColor:"var(--clr-red-transparent)",filter:"var(--clr-red-fill)",fontWeight:"var(--font-semibold)"}),a=function(){i[e.imgData.code]||c({type:"CHANGE_TO_ACTIVE",code:e.imgData.code})});var s=Object(O.jsxs)("div",{style:n,onClick:a,className:"section-menu-section-list-item",children:[Object(O.jsx)("img",{className:"section-menu-section-list-item-img",src:e.imgData.src,alt:"Image"}),Object(O.jsx)("span",{children:e.imgData.title})]});return"emailSectionListReducer"!=e.reducer?Object(O.jsx)("a",{target:"_blank",href:e.imgData.href,children:s}):s},v=(n(25),function(e){var t=Object(g.c)((function(t){return t[e.reducer]}));return Object(O.jsx)("div",{className:"section-menu-section-list",children:t.map((function(t,n){return Object(O.jsx)(p,{selection:e.selection,reducer:e.reducer,margin:e.margin,imgData:t},n)}))})}),x=function(){return Object(O.jsx)("div",{className:"section-menu-email-sections",children:Object(O.jsx)(v,{selection:!0,margin:.4,reducer:"emailSectionListReducer"})})},N=(n(26),function(e){var t={width:e.length+"rem",padding:"0rem ".concat(e.padding,"rem")};return Object(O.jsx)("div",{style:t,className:"global-divider",children:Object(O.jsx)("div",{className:"global-divider-line"})})}),y=function(){return Object(O.jsx)("div",{className:"section-menu-meetings-sections",children:Object(O.jsx)(v,{selection:!1,margin:0,reducer:"meetingSectionListReducer"})})},k=(n(27),function(e){return Object(O.jsx)("div",{className:"section-menu-header-container",children:Object(O.jsx)("div",{className:"section-menu-header",children:e.text})})}),_=n(10),w=(n(28),function(e){return Object(O.jsx)("div",{className:"global-profile_picture",children:e.profileName[0].toUpperCase()})}),E=n.p+"static/media/caret.ebf4fab7.svg",S=n.p+"static/media/Remove Person.925e5f34.svg",R=(n(29),function(e){var t=Object(g.b)();return Object(O.jsxs)("div",{className:"section-menu-hangouts-list-item",children:[Object(O.jsx)("div",{className:"section-menu-hangouts-list-item-pp-container",children:Object(O.jsx)(w,{profileName:e.name})}),Object(O.jsxs)("div",{className:"section-menu-hangouts-list-item-name-container",children:[Object(O.jsx)("span",{className:"section-menu-hangouts-list-item-name",children:e.name.split(" ")[0]}),Object(O.jsx)("img",{className:"caret",src:E})]}),Object(O.jsx)("div",{className:"section-menu-hangouts-list-item-delete-container",children:Object(O.jsx)("div",{onClick:function(){return t({type:"REMOVE_PERSON",key:e.component_key})},className:"section-menu-hangouts-list-item-delete-position",children:Object(O.jsx)("img",{className:"section-menu-hangouts-list-item-delete",src:S,alt:"Remove Person"})})})]})}),C=(n(30),function(){var e=Object(g.c)((function(e){return e.hangoutsListReducer})),t=Object(l.useState)(""),n=Object(_.a)(t,2),c=n[0],i=n[1],a=Object(l.useState)(!0),s=Object(_.a)(a,2),r=s[0],o=s[1],u=Object(g.b)();return Object(O.jsxs)(d.a.Fragment,{children:[Object(O.jsx)("div",{className:"section-menu-hangouts-list",children:e.map((function(e,t){return Object(O.jsx)(R,{name:e.name,component_key:e.key},e.key)}))}),Object(O.jsx)("form",{onSubmit:function(e){e.preventDefault(),u({type:"ADD_PERSON",data:{name:c}}),i("")},children:Object(O.jsxs)("div",{className:"section-menu-hangouts-add-list-item",children:[Object(O.jsx)("input",{required:!0,className:"section-menu-hangouts-add-list-item-input",onChange:function(e){""==e.target.value?o(!0):o(!1),i(e.target.value)},value:c}),Object(O.jsx)("button",{className:"section-menu-hangouts-add-list-item-btn",disabled:r,type:"submit",children:"Add"})]})})]})}),D=(n(31),function(){return Object(O.jsxs)("div",{className:"section-menu-section",children:[Object(O.jsx)(h,{}),Object(O.jsx)(x,{}),Object(O.jsx)(N,{length:35,padding:1}),Object(O.jsx)(k,{text:"Meet"}),Object(O.jsx)(y,{}),Object(O.jsx)(N,{length:35,padding:1}),Object(O.jsx)(k,{text:"Hangouts"}),Object(O.jsx)(C,{})]})}),L=n.p+"static/media/Calendr_icon.7abb75da.svg",A=n.p+"static/media/Google_keep_icon.915bf041.svg",M=n.p+"static/media/Google_Tasks_icon.8a4b6681.svg",I=n.p+"static/media/Contacts.1ac755e1.svg",T=n.p+"static/media/+.2aa58027.svg",P=(n(32),function(e){return Object(O.jsx)("div",{className:"app-menu-icon-position",children:Object(O.jsx)("div",{onClick:e.handleClick,className:"app-menu-icon-container",children:Object(O.jsx)("img",{src:e.src})})})}),B=(n(33),function(){return Object(O.jsxs)("div",{className:"app-menu-section",children:[Object(O.jsx)(P,{src:L,handleClick:function(){return window.open("https://calendar.google.com")}}),Object(O.jsx)(P,{src:A,handleClick:function(){return window.open("https://keep.google.com")}}),Object(O.jsx)(P,{src:M,handleClick:function(){return window.alert("No feature ")}}),Object(O.jsx)(P,{src:I,handleClick:function(){return window.open("https://contacts.google.com")}}),Object(O.jsx)(N,{padding:0,length:4}),Object(O.jsx)(P,{src:T,handleClick:function(){return window.alert("Feature not set")}})]})}),F=(n(34),function(){return Object(O.jsx)("div",{className:"body-top-controls",children:"Top controls"})}),V=(n(35),function(){return Object(O.jsx)("div",{className:"body-section",children:Object(O.jsx)(F,{})})}),G=(n(36),n(37),function(){return Object(O.jsxs)("div",{className:"app",children:[Object(O.jsx)(D,{}),Object(O.jsx)(V,{}),Object(O.jsx)(B,{})]})}),H=n(7),X=[{title:"Inbox",src:n.p+"static/media/inbox_black_24dp.0731f5d2.svg",code:"INBOX",href:"#"},{title:"Starred",src:n.p+"static/media/star_black_24dp.ecf2636e.svg",code:"STARRED",href:"#"},{title:"Snoozed",src:n.p+"static/media/watch_later_black_24dp.efe720bf.svg",code:"SNOOZED",href:"#"},{title:"Sent",src:n.p+"static/media/send_black_24dp.0fe097c9.svg",code:"SENT",href:"#"},{title:"Drafts",src:n.p+"static/media/drafts_black_24dp.4669aec4.svg",code:"DRAFT",href:"#"}],J=function(){return X},Z=[{title:"New Meeting ",src:n.p+"static/media/videocam_black_24dp.753a7ff0.svg",code:"CAMERA",href:"https://meet.google.com/"},{title:"Join a Meeting",src:n.p+"static/media/keyboard_black_24dp.6750ff82.svg",code:"KEYBOARD",href:"https://meet.google.com/"}],U=function(){return Z},q=n(6),z=function(e){var t,n={},c=Object(q.a)(X);try{for(c.s();!(t=c.n()).done;){var i=t.value;n[i.code]=i.code===e}}catch(a){c.e(a)}finally{c.f()}return n},K=function(){return z("INBOX")},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_TO_ACTIVE":return z(t.code);default:return e}},Y=n(12),Q=[{name:"Sammy",key:12726},{name:"Mary",key:18219},{name:"Harry",key:121812},{name:"Max",key:128213},{name:"Mario",key:712812},{name:"David",key:281932},{name:"Lawson",key:218378}],$=function(e,t){var n,c=Object(q.a)(e);try{for(c.s();!(n=c.n()).done;){if(n.value.key==t)return!1}}catch(i){c.e(i)}finally{c.f()}return!0},ee=function(e,t){for(var n=0;n=Math.round(997563*Math.random()+2437),!$(e,n););return[].concat(Object(Y.a)(e),[{name:t.data.name,key:n}])},te=function(e,t){return e.filter((function(e){return e.key!==t}))},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PERSON":return ee(e,t);case"REMOVE_PERSON":return te(e,t.key);default:return e}},ce=Object(H.a)({emailSectionListReducer:J,meetingSectionListReducer:U,emailActiveSectionsReducer:W,hangoutsListReducer:ne}),ie=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||H.b,ae=Object(H.c)(ce,ie());o.a.render(Object(O.jsx)(g.a,{store:ae,children:Object(O.jsx)(G,{})}),document.getElementById("root"))}],[[38,1,2]]]);
//# sourceMappingURL=main.25701333.chunk.js.map