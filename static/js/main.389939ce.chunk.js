(this["webpackJsonp07-gmail_clone"]=this["webpackJsonp07-gmail_clone"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c,i,s,a,r=n(6),o=n.n(r),l=n(1),d=n.n(l),u=(n(17),["title","titleId"]);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var n,c,i=function(e,t){if(null==e)return{};var n,c,i={},s=Object.keys(e);for(c=0;c<s.length;c++)n=s[c],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(c=0;c<s.length;c++)n=s[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function b(e,t){var n=e.title,r=e.titleId,o=j(e,u);return l.createElement("svg",m({width:45,height:45,viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},o),n?l.createElement("title",{id:r},n):null,c||(c=l.createElement("path",{d:"M18.9474 26.0526L26.0526 18.9474L26.0526 -1.28619e-06L18.9474 -1.90735e-06L18.9474 26.0526Z",fill:"#EA4335"})),i||(i=l.createElement("path",{d:"M18.9474 26.0526L26.0526 18.9474L45 18.9474L45 26.0526L18.9474 26.0526Z",fill:"#4285F4"})),s||(s=l.createElement("rect",{x:18.9474,y:26.0526,width:7.10526,height:18.9474,fill:"#34A853"})),a||(a=l.createElement("rect",{x:18.9474,y:18.9474,width:7.10526,height:18.9474,transform:"rotate(90 18.9474 18.9474)",fill:"#FBBC05"})))}var f=l.forwardRef(b),g=(n.p,n(0)),h=function(){return Object(g.jsx)("div",{className:"section-menu-compose-btn",children:Object(g.jsxs)("div",{className:"section-menu-compose-btn-container",children:[Object(g.jsx)("div",{className:"section-menu-compose-btn-svg",children:Object(g.jsx)(f,{})}),Object(g.jsx)("span",{className:"section-menu-compose-btn-text",children:"Compose"})]})})},O=n(2),p=function(e){var t="".concat(e.margin,"rem 0rem"),n={margin:t},c=Object(O.b)(),i=Object(O.c)((function(t){return t[e.selection?"emailActiveSectionsReducer":""]})),s=function(){};e.selection&&(i[e.imgData.code]&&(n={margin:t,backgroundColor:"var(--clr-red-transparent)",filter:"var(--clr-red-fill)",fontWeight:"var(--font-semibold)"}),s=function(){i[e.imgData.code]||c({type:"CHANGE_TO_ACTIVE",code:e.imgData.code})});var a=Object(g.jsxs)("div",{style:n,onClick:s,className:"section-menu-section-list-item",children:[Object(g.jsx)("img",{className:"section-menu-section-list-item-img",src:e.imgData.src,alt:"Image"}),Object(g.jsx)("span",{children:e.imgData.title})]});return"emailSectionListReducer"!=e.reducer?Object(g.jsx)("a",{target:"_blank",href:e.imgData.href,children:a}):a},v=(n(25),function(e){var t=Object(O.c)((function(t){return t[e.reducer]}));return Object(g.jsx)("div",{className:"section-menu-section-list",children:t.map((function(t,n){return Object(g.jsx)(p,{selection:e.selection,reducer:e.reducer,margin:e.margin,imgData:t},n)}))})}),x=function(){return Object(g.jsx)("div",{className:"section-menu-email-sections",children:Object(g.jsx)(v,{selection:!0,margin:.4,reducer:"emailSectionListReducer"})})},y=(n(26),function(e){var t={width:e.length+"rem",padding:"0rem ".concat(e.padding,"rem")};return Object(g.jsx)("div",{style:t,className:"global-divider",children:Object(g.jsx)("div",{className:"global-divider-line"})})}),N=function(){return Object(g.jsx)("div",{className:"section-menu-meetings-sections",children:Object(g.jsx)(v,{selection:!1,margin:0,reducer:"meetingSectionListReducer"})})},k=(n(27),function(e){return Object(g.jsx)("div",{className:"section-menu-header-container",children:Object(g.jsx)("div",{className:"section-menu-header",children:e.text})})}),_=n(8),S=n(4),w=(n(28),function(e){return Object(g.jsx)("div",{style:{backgroundColor:e.color},className:"global-profile_picture",children:e.profileName[0].toUpperCase()})}),E=n.p+"static/media/caret.ebf4fab7.svg",C=n.p+"static/media/Remove Person.925e5f34.svg",R=(n(29),function(e){var t=Object(O.b)();return Object(g.jsxs)("div",{className:"section-menu-hangouts-list-item",children:[Object(g.jsx)("div",{className:"section-menu-hangouts-list-item-pp-container",children:Object(g.jsx)(w,{color:e.profileColor,profileName:e.name})}),Object(g.jsxs)("div",{className:"section-menu-hangouts-list-item-name-container",children:[Object(g.jsx)("span",{className:"section-menu-hangouts-list-item-name",children:e.name.split(" ")[0]}),Object(g.jsx)("img",{className:"caret",src:E})]}),Object(g.jsx)("div",{className:"section-menu-hangouts-list-item-delete-container",children:Object(g.jsx)("div",{onClick:function(){return t({type:"REMOVE_PERSON",key:e.component_key})},className:"section-menu-hangouts-list-item-delete-position",children:Object(g.jsx)("img",{className:"section-menu-hangouts-list-item-delete",src:C,alt:"Remove Person"})})})]})}),D=(n(30),["red","blue","yellow","green"]),A=function(){return"var(".concat("--clr-").concat(D[Math.round(2*Math.random())],")")},L=function(){var e=Object(O.c)((function(e){return e.hangoutsListReducer})),t=Object(l.useState)([]),n=Object(S.a)(t,2),c=n[0],i=n[1];Object(l.useEffect)((function(){var t=[];e.map((function(e,n){t[n]=A()})),i(t)}),[]);var s=Object(l.useState)(""),a=Object(S.a)(s,2),r=a[0],o=a[1],u=Object(l.useState)(!0),m=Object(S.a)(u,2),j=m[0],b=m[1],f=Object(O.b)();return Object(g.jsxs)(d.a.Fragment,{children:[Object(g.jsx)("div",{className:"section-menu-hangouts-list",children:e.map((function(e,t){return null==c[t]&&i([].concat(Object(_.a)(c),[A()])),Object(g.jsx)(R,{profileColor:c[t],name:e.name,component_key:e.key},e.key)}))}),Object(g.jsx)("form",{onSubmit:function(e){e.preventDefault(),f({type:"ADD_PERSON",data:{name:r}}),b(!0),o("")},children:Object(g.jsxs)("div",{className:"section-menu-hangouts-add-list-item",children:[Object(g.jsx)("input",{required:!0,className:"section-menu-hangouts-add-list-item-input",onChange:function(e){""==e.target.value?b(!0):b(!1),o(e.target.value)},value:r,placeholder:"Person Name"}),Object(g.jsx)("button",{className:"section-menu-hangouts-add-list-item-btn",disabled:j,type:"submit",children:"Add"})]})})]})},M=(n(31),function(){return Object(g.jsxs)("div",{className:"section-menu-section",children:[Object(g.jsx)(h,{}),Object(g.jsx)(x,{}),Object(g.jsx)(y,{length:35,padding:1}),Object(g.jsx)(k,{text:"Meet"}),Object(g.jsx)(N,{}),Object(g.jsx)(y,{length:35,padding:1}),Object(g.jsx)(k,{text:"Hangouts"}),Object(g.jsx)(L,{})]})}),T=n.p+"static/media/Calendr_icon.7abb75da.svg",I=n.p+"static/media/Google_keep_icon.915bf041.svg",P=n.p+"static/media/Google_Tasks_icon.8a4b6681.svg",z=n.p+"static/media/Contacts.1ac755e1.svg",B=n.p+"static/media/+.2aa58027.svg",F=(n(32),function(e){return Object(g.jsx)("div",{className:"app-menu-icon-position",children:Object(g.jsx)("div",{onClick:e.handleClick,className:"app-menu-icon-container",children:Object(g.jsx)("img",{src:e.src})})})}),H=(n(33),function(){return Object(g.jsxs)("div",{className:"app-menu-section",children:[Object(g.jsx)(F,{src:T,handleClick:function(){return window.open("https://calendar.google.com")}}),Object(g.jsx)(F,{src:I,handleClick:function(){return window.open("https://keep.google.com")}}),Object(g.jsx)(F,{src:P,handleClick:function(){return window.alert("No feature ")}}),Object(g.jsx)(F,{src:z,handleClick:function(){return window.open("https://contacts.google.com")}}),Object(g.jsx)(y,{padding:0,length:4}),Object(g.jsx)(F,{src:B,handleClick:function(){return window.alert("Feature not set")}})]})}),V=n.p+"static/media/refresh_black_24dp.206a2919.svg",G=n.p+"static/media/more_vert_black_24dp.4060799d.svg",X=(n(34),n(35),function(e){var t={};return t=e.isChecked?{border:".5rem solid #212121",backgroundColor:"#212121"}:{},Object(g.jsx)("div",{onClick:e.handleClick,className:"global-checkbox",style:t})}),q=function(e){var t=Object(l.useState)(!1),n=Object(S.a)(t,2),c=n[0],i=n[1];return Object(g.jsx)(X,{isChecked:c,handleClick:function(){c?document.querySelectorAll(".global-checkbox").forEach((function(e){console.log(e.style["background-color"]),""!=e.style["background-color"]&&e.click()})):document.querySelectorAll(".global-checkbox").forEach((function(e){"rgb(33, 33, 33)"!=e.style["background-color"]&&e.click()})),i(!c)}})},J=(n(36),function(e){var t={"--afterHoverLength":e.circleSize};return Object(g.jsxs)("div",{style:t,className:"global-button",children:[Object(g.jsx)("div",{className:"global-button-container",children:Object(g.jsx)("div",{className:"global-button-position",children:Object(g.jsx)("img",{style:{height:e.imgSize,width:e.imgSize,transform:e.imgTransform},src:e.icon,alt:"icon"})})}),Object(g.jsxs)("div",{className:"global-button-tooltip",children:[e.tooltip,Object(g.jsx)("div",{className:"arrow-up"})]})]})}),Z=function(){return Object(g.jsxs)("div",{className:"body-top-controls",children:[Object(g.jsxs)("div",{className:"body-top-controls-first",children:[Object(g.jsxs)("div",{className:"body-top-controls-first-checkbox",children:[Object(g.jsx)(q,{}),Object(g.jsx)(J,{circleSize:"2rem",imgSize:"10px",tooltip:"Select",icon:E})]}),Object(g.jsx)(J,{tooltip:"Refresh",icon:V}),Object(g.jsx)(J,{icon:G,tooltip:"More"})]}),Object(g.jsxs)("div",{className:"body-top-controls-second",children:[Object(g.jsx)(J,{imgTransform:"rotate(90deg)",imgSize:"10px",tooltip:"Newer",icon:E}),Object(g.jsx)(J,{imgTransform:"rotate(-90deg)",imgSize:"10px",tooltip:"Older",icon:E})]})]})},U=(n(37),function(){return Object(g.jsx)("div",{className:"body-section",children:Object(g.jsx)(Z,{})})}),K=(n(38),n(39),function(){return Object(g.jsxs)("div",{className:"app",children:[Object(g.jsx)(M,{}),Object(g.jsx)(U,{}),Object(g.jsx)(H,{})]})}),W=n(9),Y=[{title:"Inbox",src:n.p+"static/media/inbox_black_24dp.0731f5d2.svg",code:"INBOX",href:"#"},{title:"Starred",src:n.p+"static/media/star_black_24dp.ecf2636e.svg",code:"STARRED",href:"#"},{title:"Snoozed",src:n.p+"static/media/watch_later_black_24dp.efe720bf.svg",code:"SNOOZED",href:"#"},{title:"Sent",src:n.p+"static/media/send_black_24dp.0fe097c9.svg",code:"SENT",href:"#"},{title:"Drafts",src:n.p+"static/media/drafts_black_24dp.4669aec4.svg",code:"DRAFT",href:"#"}],Q=function(){return Y},$=[{title:"New Meeting ",src:n.p+"static/media/videocam_black_24dp.753a7ff0.svg",code:"CAMERA",href:"https://meet.google.com/"},{title:"Join a Meeting",src:n.p+"static/media/keyboard_black_24dp.6750ff82.svg",code:"KEYBOARD",href:"https://meet.google.com/"}],ee=function(){return $},te=n(7),ne=function(e){var t,n={},c=Object(te.a)(Y);try{for(c.s();!(t=c.n()).done;){var i=t.value;n[i.code]=i.code===e}}catch(s){c.e(s)}finally{c.f()}return n},ce=function(){return ne("INBOX")},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_TO_ACTIVE":return ne(t.code);default:return e}},se=[{name:"Sammy",key:12726},{name:"Mary",key:18219},{name:"Harry",key:121812},{name:"Max",key:128213},{name:"Mario",key:712812},{name:"David",key:281932},{name:"Lawson",key:218378}],ae=function(e,t){var n,c=Object(te.a)(e);try{for(c.s();!(n=c.n()).done;){if(n.value.key==t)return!1}}catch(i){c.e(i)}finally{c.f()}return!0},re=function(e,t){for(var n=0;n=Math.round(997563*Math.random()+2437),!ae(e,n););return[].concat(Object(_.a)(e),[{name:t.data.name,key:n}])},oe=function(e,t){return e.filter((function(e){return e.key!==t}))},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PERSON":return re(e,t);case"REMOVE_PERSON":return oe(e,t.key);default:return e}},de=Object(W.a)({emailSectionListReducer:Q,meetingSectionListReducer:ee,emailActiveSectionsReducer:ie,hangoutsListReducer:le}),ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||W.b,me=Object(W.c)(de,ue());o.a.render(Object(g.jsx)(O.a,{store:me,children:Object(g.jsx)(K,{})}),document.getElementById("root"))}],[[40,1,2]]]);
//# sourceMappingURL=main.389939ce.chunk.js.map