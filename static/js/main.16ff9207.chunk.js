(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,n){},109:function(e,t,n){},12:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=12},122:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(75),c=n.n(l),o=n(10),i=n(5),u=n(78),s=n(79),m=n(127),d=n(53),E=(n(105),n(18)),f=Object(E.a)(),p=(n(107),n(109),n(129)),v=n(48),b=n(44),h="FIND_TRACK",S={tracklist:[{id:1234,name:"My super track"}]},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TRACK":return Object(b.a)({},e,{tracklist:Object(v.a)(e.tracklist).concat([t.payload])});case"FETCH_TRACKS_SUCCESS":return t.payload;default:return e}},y="";function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;return t.type===h?t.payload:e}var O={users:[{id:1234,name:"\u0410\u043d\u043e\u043d\u0438\u043c"},{id:1235,name:"George",last_name:"Markosov",email:"george@mail.com",sex:"male"}]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return{users:Object(v.a)(e.users)};case"REGISTER":return Object(b.a)({},e,{users:Object(v.a)(e.users).concat([t.payload])});default:return e}},k={LOGIN_REQUEST:"USERS_LOGIN_REQUEST",LOGIN_SUCCESS:"USERS_LOGIN_SUCCESS",LOGIN_FAILURE:"USERS_LOGIN_FAILURE",LOGOUT:"USERS_LOGOUT",GETALL_REQUEST:"USERS_GETALL_REQUEST",GETALL_SUCCESS:"USERS_GETALL_SUCCESS",GETALL_FAILURE:"USERS_GETALL_FAILURE"};function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k.GETALL_REQUEST:return{loading:!0};case k.GETALL_SUCCESS:return{items:t.users};case k.GETALL_FAILURE:return{error:t.error};default:return e}}var w=n(87),U=n(128),_=n(126),R=n(123),A=function(){return r.a.createElement("nav",{className:"nav-tabs nav-stacked"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(R.a,{to:"/"},"Tracks")),r.a.createElement("li",null,r.a.createElement(R.a,{to:"/about"},"About")),r.a.createElement("li",null,r.a.createElement(R.a,{to:"/users"},"Users")),r.a.createElement("li",null,r.a.createElement(R.a,{to:"/register"},"Register")),r.a.createElement("li",null,r.a.createElement(R.a,{to:"/login"},"Logout"))))},C=function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement(A,null)),r.a.createElement("div",{className:"col-md-9"},r.a.createElement("h2",null,"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 about"))))},G=Object(o.connect)(function(e,t){return{track:e.tracks.tracklist.find(function(e){return e.id===Number(t.match.params.id)})}})(function(e){var t=e.track;return r.a.createElement("div",null,t.name)}),j=n(82),I=n(83),F=n(86),x=n(84),D=n(88),J=n(125),P=n(124),Q=n(69),K=n.n(Q);var M={login:function(e,t){var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})};return fetch("".concat(K.a.apiUrl,"/users/authenticate"),n).then(W).then(function(e){return e.token&&localStorage.setItem("user",JSON.stringify(e)),e})},logout:B,getAll:function(){var e={method:"GET",headers:function(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.token?{Authorization:"Bearer "+e.token}:{}}()};return fetch("".concat(K.a.apiUrl,"/users"),e).then(W)}};function B(){localStorage.removeItem("user")}function W(e){return e.text().then(function(t){var n=t&&JSON.parse(t);if(!e.ok){401===e.status&&(B(),window.location.reload(!0));var a=n&&n.message||e.statusText;return Promise.reject(a)}return n})}var H={login:function(e,t){return function(n){var a;n((a={username:e},{type:k.LOGIN_REQUEST,user:a})),M.login(e,t).then(function(e){n(function(e){return{type:k.LOGIN_SUCCESS,user:e}}(e)),window.location.hash="/"},function(e){n(function(e){return{type:k.LOGIN_FAILURE,error:e}}(e))})}},logout:function(){return M.logout(),{type:k.LOGOUT}},getAll:function(){return function(e){e({type:k.GETALL_REQUEST}),M.getAll().then(function(t){return e(function(e){return{type:k.GETALL_SUCCESS,users:e}}(t))},function(t){return e(function(e){return{type:k.GETALL_FAILURE,error:e}}(t))})}}};var z=function(e){return e?void 0:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"},q=function(e){var t=e.input,n=e.label,a=e.type,l=e.meta,c=l.touched,o=l.error,i=l.warning;return r.a.createElement("div",null,r.a.createElement("label",null,n),r.a.createElement("div",null,r.a.createElement("input",Object.assign({},t,{placeholder:n,type:a})),c&&(o&&r.a.createElement("span",null,o)||i&&r.a.createElement("span",null,i))))},V=function(e){function t(){return Object(j.a)(this,t),Object(F.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(H.logout())}},{key:"render",value:function(){var e=this.props,t=e.handleSubmit,n=e.pristine,a=e.submitting,l=(e.users,e.dispatch),c=t(function(e){l(H.login(e.login,e.password))});return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h2",null,"\u0412\u0445\u043e\u0434"),r.a.createElement("div",{className:"alert alert-info"},"\u041b\u043e\u0433\u0438\u043d: test",r.a.createElement("br",null),"\u041f\u0430\u0440\u043e\u043b\u044c: test"),r.a.createElement("form",{onSubmit:c},r.a.createElement("div",null,r.a.createElement("label",null,"\u041b\u043e\u0433\u0438\u043d"),r.a.createElement("div",null,r.a.createElement(J.a,{name:"login",component:q,type:"text",placeholder:"\u041b\u043e\u0433\u0438\u043d",validate:[z]}))),r.a.createElement("div",null,r.a.createElement("label",null,"\u041f\u0430\u0440\u043e\u043b\u044c"),r.a.createElement("div",null,r.a.createElement(J.a,{name:"password",component:q,type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",validate:[z]}))),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:n||a},"\u0412\u043e\u0439\u0442\u0438"))))))}}]),t}(r.a.Component),X=Object(o.connect)(function(e){return{users:e.login.users}},function(){return function(e){return{onLogin:function(t){e(function(e){return function(t){t({type:"LOGIN",payload:{id:Date.now(),name:e}})}}(t))}}}})(V),Y=Object(P.a)({form:"login"})(X),Z=function(e){return e?void 0:"Required"},$=Object(o.connect)(function(e){return{users:e.login.users}},function(){return function(e){return{onRegister:function(t){var n;e((n=t,function(e){e({type:"REGISTER",payload:Object(b.a)({id:Date.now()},n)})}))}}}})(function(e){var t=e.handleSubmit,n=e.pristine,a=e.reset,l=e.submitting,c=e.onRegister,o=t(function(e){c(e),window.alert("\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c, ".concat(e.name))});return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement(A,null)),r.a.createElement("div",{className:"col-md-9"},r.a.createElement("h2",null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),r.a.createElement("form",{onSubmit:o},r.a.createElement("div",null,r.a.createElement("label",null,"\u0418\u043c\u044f"),r.a.createElement("div",null,r.a.createElement(J.a,{name:"name",component:"input",type:"text",placeholder:"\u0418\u043c\u044f",validate:[Z]}))),r.a.createElement("div",null,r.a.createElement("label",null,"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"),r.a.createElement("div",null,r.a.createElement(J.a,{name:"lastName",component:"input",type:"text",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}))),r.a.createElement("div",null,r.a.createElement("label",null,"Email"),r.a.createElement("div",null,r.a.createElement(J.a,{name:"email",component:"input",type:"email",placeholder:"Email"}))),r.a.createElement("div",null,r.a.createElement("label",null,"\u041f\u043e\u043b"),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement(J.a,{name:"sex",component:"input",type:"radio",value:"male"})," ","\u041c\u0443\u0436"),r.a.createElement("label",null,r.a.createElement(J.a,{name:"sex",component:"input",type:"radio",value:"female"})," ","\u0416\u0435\u043d"))),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:n||l},"Submit"),r.a.createElement("button",{className:"btn btn-danger",type:"button",disabled:n||l,onClick:a},"Clear Values"))))))}),ee=Object(P.a)({form:"simple"})($),te=Object(o.connect)(function(e){return{users:e.login.users}})(function(e){var t=e.users.map(function(e){return r.a.createElement("li",{key:e.id},e.name)});return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement(A,null)),r.a.createElement("div",{className:"col-md-9"},r.a.createElement("h2",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"),t)))}),ne={tracklist:[{id:1,name:"Enter Sandman"},{id:2,name:"Welcome Home"},{id:3,name:"Master of Puppets"},{id:4,name:"Fade to Black"}]},ae=Object(o.connect)(function(e){return{tracks:e.tracks.tracklist.filter(function(t){return t.name.includes(e.filterTracks)})}},function(){return function(e){return{onAddTrack:function(t){var n={id:Date.now().toString(),name:t};e({type:"ADD_TRACK",payload:n})},onFindTrack:function(t){console.log("name",t),e({type:"FIND_TRACK",payload:t})},onGetTracks:function(){e(function(e){setTimeout(function(){e({type:"FETCH_TRACKS_SUCCESS",payload:ne})},2e3)})}}}})(function(e){var t=e.onAddTrack,n=e.onFindTrack,a=e.onGetTracks,l=e.tracks,c="",o="";return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement(A,null)),r.a.createElement("div",{className:"col-md-9"},r.a.createElement("h2",null,"\u0422\u0440\u044d\u043a\u0438"),r.a.createElement("div",null,r.a.createElement("input",{type:"text",ref:function(e){c=e}}),r.a.createElement("button",{className:"btn btn-secondary",onClick:function(){t(c.value),c.value=""}},"Add")),r.a.createElement("div",null,r.a.createElement("input",{type:"text",ref:function(e){o=e}}),r.a.createElement("button",{className:"btn btn-secondary",onClick:function(){console.log("findTrack",o.value),n(o.value)}},"Find")),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-secondary",onClick:a},"Load")),r.a.createElement("ul",null,l.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(R.a,{to:"/tracks/".concat(e.id)},e.name))})))))}),re=function(e){var t=e.component,n=Object(w.a)(e,["component"]);return r.a.createElement(U.a,Object.assign({},n,{render:function(e){return localStorage.getItem("user")?r.a.createElement(t,e):r.a.createElement(_.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},le=r.a.createElement("div",null,r.a.createElement(re,{exact:!0,path:"/",component:ae}),r.a.createElement(re,{path:"/about",component:C}),r.a.createElement(U.a,{path:"/login",component:Y}),r.a.createElement(re,{path:"/register",component:ee}),r.a.createElement(re,{path:"/users",component:te}),r.a.createElement(re,{path:"/tracks/:id",component:G}));!function(){var e=[{id:1,username:"test",password:"test",firstName:"Test",lastName:"User"}],t=window.fetch;window.fetch=function(n,a){return new Promise(function(r,l){setTimeout(function(){if(n.endsWith("/users/authenticate")&&"POST"===a.method){var c=JSON.parse(a.body),o=e.filter(function(e){return e.username===c.username&&e.password===c.password});if(o.length){var i=o[0],u={id:i.id,username:i.username,firstName:i.firstName,lastName:i.lastName,token:"fake-jwt-token"};r({ok:!0,text:function(){return Promise.resolve(JSON.stringify(u))}})}else l("Username or password is incorrect")}else n.endsWith("/users")&&"GET"===a.method?a.headers&&"Bearer fake-jwt-token"===a.headers.Authorization?r({ok:!0,text:function(){return Promise.resolve(JSON.stringify(e))}}):l("Unauthorised"):t(n,a).then(function(e){return r(e)})},500)})}}();var ce,oe=Object(i.createStore)((ce=f,Object(i.combineReducers)({router:Object(d.connectRouter)(ce),form:p.a,tracks:g,filterTracks:N,login:T,users:L})),Object(u.composeWithDevTools)(Object(i.applyMiddleware)(s.a)));c.a.render(r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(o.Provider,{store:oe},r.a.createElement(d.ConnectedRouter,{history:f},r.a.createElement(m.a,null,le))))),document.getElementById("root"))},89:function(e,t,n){e.exports=n(122)}},[[89,2,1]]]);
//# sourceMappingURL=main.16ff9207.chunk.js.map