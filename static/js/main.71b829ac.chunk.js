(this["webpackJsonpreact-todolist"]=this["webpackJsonpreact-todolist"]||[]).push([[0],{28:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(2),s=a.n(c),i=a(15),l=a.n(i),r=a(6),o=a(17),j=a(18),d=(a(28),a(19)),b=a(8),u=a(16),O=a(5),_=["navbar__link"],m=["navbar__link--active"],f=["All","Processing","Completed"],x={All:"All Tasks",Processing:"Processing",Completed:"Completed"},h=function(e){var t=e.value,a=e.onChange,c=f.map((function(e,c){var s=e===t,i=x[e],l=_.concat(function(e){return e?m:[]}(s)).join(" ");return Object(n.jsx)("a",{href:"/#",className:l,onClick:function(t){t.preventDefault(),a(e)},children:i},c)}));return Object(n.jsx)("nav",{className:"task__navbar",children:Object(n.jsx)("div",{className:"navbar__tabs",children:c})})},v=a(3),p=a(4),g={title:"",date:"",time:"",message:"",isDone:!1,isFavorite:!1},N=function(e){var t=e.onCreate,a=Object(c.useState)(!1),s=Object(O.a)(a,2),i=s[0],l=s[1],r=function(e){var t=Object(c.useState)(e),a=Object(O.a)(t,2),n=a[0],s=a[1];return[n,function(e){return s(Object(v.a)(Object(v.a)({},n),{},Object(b.a)({},e.target.name,e.target.value)))}]}(g),o=Object(O.a)(r,2),j=o[0],d=o[1],u=function(){return d(g)},_=function(){return l((function(e){return!e}))};return Object(n.jsxs)("div",{className:"task__adder",children:[Object(n.jsx)("label",{htmlFor:"adder__input",className:"adder__label border-0",children:Object(n.jsx)(p.a,{icon:"plus"})}),Object(n.jsx)("input",{type:"text",id:"adder__input",name:"title",className:"adder__input",placeholder:"Add Task",autoComplete:"off",value:j.title,onClick:_,onChange:d}),Object(n.jsx)("button",{className:"adder__option border-0",onClick:_,children:Object(n.jsx)(p.a,{icon:"ellipsis-v"})}),Object(n.jsxs)("div",{className:"task__detail".concat(i?" task__detail--expanded":""),children:[Object(n.jsxs)("div",{className:"detail__body",children:[Object(n.jsxs)("label",{className:"detail__body__label",children:[Object(n.jsx)(p.a,{icon:["far","calendar-alt"]}),"Deadline"]}),Object(n.jsxs)("div",{className:"detail__body__deadline",children:[Object(n.jsx)("input",{type:"date",name:"date",className:"date__input",value:j.date,onChange:d}),Object(n.jsx)("input",{type:"time",name:"time",className:"time__input",value:j.time,onChange:d})]}),Object(n.jsxs)("label",{className:"detail__body__label",children:[Object(n.jsx)(p.a,{icon:["far","file"]}),"File"]}),Object(n.jsxs)("label",{className:"detail__body__file",style:{display:"inline-block",height:32},children:[Object(n.jsx)(p.a,{icon:["fas","plus"]}),Object(n.jsx)("input",{type:"file",name:"file",className:"file__input"})]}),Object(n.jsxs)("label",{className:"detail__body__label",children:[Object(n.jsx)(p.a,{icon:["far","comment-dots"]}),"Message"]}),Object(n.jsx)("textarea",{name:"message",className:"detail__body__description",placeholder:"Type your task message here...",value:j.message,onChange:function(e){var t=e.target.value;return d((function(e){return Object(v.a)(Object(v.a)({},e),{},{message:t})}))}})]}),Object(n.jsxs)("div",{className:"detail__footer",children:[Object(n.jsxs)("button",{className:"cancel--danger",onClick:function(){u(),l(!1)},children:[Object(n.jsx)(p.a,{icon:["fas","times"]}),"Cancel"]}),Object(n.jsxs)("button",{className:"save--primary",onClick:function(){!function(e){var t=e.title,a=e.date,n=e.time;return t&&a&&n}(j)?alert("Please enter Task and Deadline"):(t(j),u())},children:[Object(n.jsx)(p.a,{icon:["fas","plus"]}),"Save"]})]})]})]})},k=function(e){var t=e.value,a=e.onChange,s=e.onRemove,i=Object(c.useState)(!1),l=Object(O.a)(i,2),r=l[0],o=l[1],j=Object(c.useState)(t),d=Object(O.a)(j,2),b=d[0],u=d[1];Object(c.useEffect)((function(){return u(t)}),[t]);var _=r?" task__card--editing":"",m=b.isFavorite?" task__card--star":"";return Object(n.jsxs)("div",{className:"task__cardList",children:[Object(n.jsxs)("li",{className:"task__card".concat(_+m),children:[Object(n.jsx)("input",{type:"checkbox",title:"isDone",checked:b.isDone,onChange:function(e){var n=e.target.checked;return a(Object(v.a)(Object(v.a)({},t),{},{isDone:n}))}}),Object(n.jsx)("input",{type:"text",title:b.title,value:b.title,name:"title",className:"card__edit__input",onChange:function(e){var t=e.target.value;return u((function(e){return Object(v.a)(Object(v.a)({},e),{},{title:t})}))},disabled:!r}),Object(n.jsx)("p",{title:b.message,children:b.message}),Object(n.jsxs)("div",{className:"card__end",children:[Object(n.jsxs)("span",{className:"widgetGroup",children:[Object(n.jsx)("button",{title:"Star Favorite",onClick:function(){return a(Object(v.a)(Object(v.a)({},t),{},{isFavorite:!b.isFavorite}))},children:Object(n.jsx)(p.a,{icon:[b.isFavorite?"fas":"far","star"]})}),Object(n.jsx)("button",{title:"Edit",onClick:function(){return o((function(){return!r}))},children:Object(n.jsx)(p.a,{icon:["far","edit"]})}),Object(n.jsx)("button",{title:"Delete",onClick:s,children:Object(n.jsx)(p.a,{icon:["far","trash-alt"]})})]}),Object(n.jsxs)("span",{className:"deadlineInfo",children:[b.date," ",b.time]})]})]}),Object(n.jsxs)("div",{className:"task__detail".concat(r?" task__detail--expanded":""),children:[Object(n.jsxs)("div",{className:"detail__body",children:[Object(n.jsxs)("label",{className:"detail__body__label",children:[Object(n.jsx)(p.a,{icon:["far","calendar-alt"]}),"Deadline"]}),Object(n.jsxs)("div",{className:"detail__body__deadline",children:[Object(n.jsx)("input",{type:"date",name:"date",className:"date__input",value:b.date,onChange:function(e){var t=e.target.value;return u((function(e){return Object(v.a)(Object(v.a)({},e),{},{date:t})}))}}),Object(n.jsx)("input",{type:"time",name:"time",className:"time__input",value:b.time,onChange:function(e){var t=e.target.value;return u((function(e){return Object(v.a)(Object(v.a)({},e),{},{time:t})}))}})]}),Object(n.jsxs)("label",{className:"detail__body__label",children:[Object(n.jsx)(p.a,{icon:["far","file"]}),"File"]}),Object(n.jsxs)("label",{className:"detail__body__file",style:{display:"inline-block",height:32},children:[Object(n.jsx)(p.a,{icon:["fas","plus"]}),Object(n.jsx)("input",{type:"file",name:"file",className:"file__input"})]}),Object(n.jsxs)("label",{className:"detail__body__label",children:[Object(n.jsx)(p.a,{icon:["far","comment-dots"]}),"Message"]}),Object(n.jsx)("textarea",{name:"message",className:"detail__body__description",placeholder:"Type your task here...",value:b.message,onChange:function(e){var t=e.target.value;return u((function(e){return Object(v.a)(Object(v.a)({},e),{},{message:t})}))}})]}),Object(n.jsxs)("div",{className:"detail__footer",children:[Object(n.jsxs)("button",{className:"cancel--danger",onClick:function(){u(t),o(!1)},children:[Object(n.jsx)(p.a,{icon:["fas","times"]}),"Cancel"]}),Object(n.jsxs)("button",{className:"save--primary",onClick:function(){a(b),o(!1)},children:[Object(n.jsx)(p.a,{icon:["fas","check"]}),"Update"]})]})]})]})},y=[{title:"\u671f\u672b\u8003",date:"2021-01-13",time:"08:10",message:"\u8cc7\u6599\u5eab\u7cfb\u7d71\u3001\u5de5\u7a0b\u6578\u5b78",isDone:!0,isFavorite:!1},{title:"Learning",date:"2021-12-31",time:"11:59",message:"React, Next.js, GraphQL",isDone:!1,isFavorite:!0}],C=function(){return JSON.parse(localStorage.getItem("taskList"))||y},F={All:function(){return!0},Processing:function(e){return!e.isDone},Completed:function(e){return e.isDone}},D=function(){var e=Object(c.useState)(C),t=Object(O.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)("All"),l=Object(O.a)(i,2),r=l[0],o=l[1];Object(c.useEffect)((function(){return function(e){return localStorage.setItem("taskList",JSON.stringify(e))}(a)}),[a]);var j=function(e){return function(t){return s((function(a){var n=Object(u.a)(a).slice(0);return Object.assign(n,Object(b.a)({},e,t))}))}};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("header",{children:Object(n.jsx)(h,{value:r,onChange:o})}),Object(n.jsxs)("main",{className:"container main",children:[Object(n.jsx)(N,{onCreate:function(e){return s((function(t){return[].concat(Object(d.a)(t),[e])}))}}),a.map((function(e,t){return[e,t]})).filter((function(e){var t=Object(O.a)(e,1)[0];return F[r](t)})).sort((function(e,t){var a=Object(O.a)(e,1)[0];return Object(O.a)(t,1)[0].isFavorite-a.isFavorite})).map((function(e){var t,a=Object(O.a)(e,2),c=a[0],i=a[1];return Object(n.jsx)(k,{value:c,onChange:j(i),onRemove:(t=i,function(){return s((function(e){return e.filter((function(e,a){return a!==t}))}))})},i)}))]})]})};r.b.add(o.a,j.a),l.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(D,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.71b829ac.chunk.js.map