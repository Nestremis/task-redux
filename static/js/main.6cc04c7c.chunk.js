(this.webpackJsonpboilerplate=this.webpackJsonpboilerplate||[]).push([[0],{19:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),i=n(5),a=n.n(i),r=(n(19),n(6)),s=(n(25),n(13)),d=(n(26),n(8)),l=Object(d.b)({name:"todos",initialState:{todoList:[]},reducers:{saveTodo:function(e,t){e.todoList.length<12&&e.todoList.push(t.payload)},removeTodo:function(e,t){e.todoList=e.todoList.filter((function(e){return e.id!==t.payload}))},setCheck:function(e,t){e.todoList.map((function(e){t.payload===e.id&&(!0===e.done?e.done=!1:e.done=!0)}))}}}),u=l.actions,j=u.saveTodo,b=u.setCheck,h=u.removeTodo,p=(u.todoList,function(e){return e.todos.todoList}),m=l.reducer,f=n(1),O=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(r.b)();return Object(f.jsx)("div",{className:"Input",children:Object(f.jsx)("input",{type:"text",placeholder:"write and press enter",onChange:function(e){return c(e.target.value)},onKeyPress:function(e){""!==n&&"Enter"===e.key&&(e.preventDefault(),i(j({item:n,done:!1,id:Date.now()})),c(""))},value:n})})},v=(n(28),n(45)),x=function(e){var t=e.name,n=e.done,o=e.id,c=Object(r.b)();return Object(f.jsxs)("div",{className:"todoItem",children:[Object(f.jsx)(v.a,{checked:n,color:"primary",onChange:function(){c(b(o))},inputProps:{"aria-label":"secondary checkbox"}}),Object(f.jsxs)("p",{className:n&&"todoItem--done",children:[" ",t," "]}),Object(f.jsx)("button",{onClick:function(){c(h(o))},children:" X "})]})};var k=function(){var e=Object(r.c)(p);return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h2",{children:" dailytask "}),Object(f.jsxs)("div",{className:"app_container",children:[Object(f.jsx)("div",{className:"app_todoContainer",children:e.map((function(e){return Object(f.jsx)(x,{name:e.item,done:e.done,id:e.id},e.id)}))}),Object(f.jsx)(O,{})]})]})},y=Object(d.a)({reducer:{todos:m}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(r.a,{store:y,children:Object(f.jsx)(k,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.6cc04c7c.chunk.js.map