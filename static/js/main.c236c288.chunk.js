(this["webpackJsonptodolist-final"]=this["webpackJsonptodolist-final"]||[]).push([[0],{21:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n(1),o=n.n(s),c=n(10),r=n.n(c),i=(n(21),n(2)),l=n(3),d=n(5),u=n(4),j=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).classStatusAction=function(){var e=t.props.statusAction;return null===e?"actions":e?"actions hide-actions":!1===e?"actions show-actions":void 0},t.showAdd=function(){(0,t.props.showAdd)()},t.onSearch=function(e){(0,t.props.onSearch)(e.target.value)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.keyword,n=t.onReset;return Object(a.jsxs)("div",{className:this.classStatusAction(),children:[Object(a.jsx)("h3",{className:"setting__header",children:"Ch\u01b0\u0301c n\u0103ng"}),Object(a.jsxs)("div",{className:"setting__body mb-10",children:[Object(a.jsxs)("div",{className:"actions__input-box",children:[Object(a.jsx)("input",{type:"text",className:"actions__input",placeholder:"Ti\u0300m ki\xea\u0301m...",name:"fieldSearch",value:e,onChange:this.onSearch}),Object(a.jsx)("span",{className:"icon-reset",onClick:n,children:Object(a.jsx)("i",{className:"fas fa-eraser"})})]}),Object(a.jsx)("div",{className:"actions__btn",children:Object(a.jsx)("button",{className:"btn btn--back btn--add",onClick:this.showAdd,children:Object(a.jsx)("i",{className:"fas fa-plus-square"})})})]}),Object(a.jsxs)("ul",{className:"setting__menu",children:[Object(a.jsx)("li",{className:"setting__menu-item",children:Object(a.jsxs)("button",{className:"btn btn--sort",children:[Object(a.jsx)("span",{className:"btn-text",children:"S\u0103\u0301p x\xea\u0301p"}),Object(a.jsx)("span",{className:" icon-sort d-none",children:Object(a.jsx)("i",{className:"fas fa-sort"})}),Object(a.jsx)("span",{className:"icon-check icon-sort icon--complete ",children:Object(a.jsx)("i",{className:"fas fa-check"})}),Object(a.jsx)("span",{className:"icon-check icon-sort icon--not-complete d-none",children:Object(a.jsx)("i",{className:"fas fa-times"})})]})}),Object(a.jsx)("li",{className:"setting__menu-item",children:Object(a.jsxs)("button",{className:"btn btn--mark-complete",children:[Object(a.jsx)("div",{className:"btn-text",children:"Cho\u0323n t\xe2\u0301t ca\u0309"}),Object(a.jsx)("span",{className:"icon-check icon-mark icon--complete ",children:Object(a.jsx)("i",{className:"fas fa-check"})})]})}),Object(a.jsx)("li",{className:"setting__menu-item",children:Object(a.jsxs)("button",{className:"btn btn--mark-not-complete",children:["Cho\u0323n t\xe2\u0301t ca\u0309",Object(a.jsx)("span",{className:"icon-check icon-mark icon--not-complete",children:Object(a.jsx)("i",{className:"fas fa-times"})})]})}),Object(a.jsx)("li",{className:"setting__menu-item",children:Object(a.jsxs)("button",{className:"btn btn--delete-all",children:["Xo\u0301a t\xe2\u0301t ca\u0309",Object(a.jsx)("span",{className:"icon-check icon-delete-all",children:Object(a.jsx)("i",{className:"fas fa-trash"})})]})})]})]})}}]),n}(s.Component),b=n(6),h="DATA_TODOS",p="CHANGE_STATUS_ACTION",m="ADD_TODO",O="TOGGLE_STATUS",f="DELETE_TODO",v="REPAIR_TODO",x="UPDATE_TODO",g="SEARCH",N=function(t){return{type:p,statusAction:t}},T=function(t){return{type:v,id:t}},_=function(t){return{type:g,name:t}},y=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).showAdd=function(){var e=t.props,n=e.showAdd,a=e.onHandleReset;n(!0),a()},t.onSearch=function(e){(0,t.props.onHandleSearch)(e)},t.onReset=function(){(0,t.props.onHandleReset)()},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.statusAction,n=t.keyword;return Object(a.jsx)(j,{showAdd:this.showAdd,statusAction:e,onSearch:this.onSearch,keyword:n,onReset:this.onReset})}}]),n}(s.Component),k=Object(b.b)((function(t){return{statusAction:t.statusAction,keyword:t.search}}),(function(t,e){return{showAdd:function(e){t(N(e))},onHandleSearch:function(e){t(_(e))},onHandleReset:function(){t(_(""))}}}))(y),A=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).classAddOption=function(){var e=t.props.statusAction;return null===e?"add":e?"add show-add":!1===e?"add hide-add":void 0},t.onSubmit=function(t){t.preventDefault()},t.showAction=function(){(0,t.props.showAction)()},t.onChange=function(e){(0,t.props.onChange)(e.target.value)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.onHandleAdd,n=t.name,s=t.onReset;return Object(a.jsxs)("div",{className:this.classAddOption(),children:[Object(a.jsx)("h3",{className:"setting__header",children:"Th\xeam c\xf4ng vi\xea\u0323c"}),Object(a.jsxs)("form",{className:"setting__body",onSubmit:this.onSubmit,children:[Object(a.jsxs)("div",{className:"add__input-box",children:[Object(a.jsx)("input",{type:"text",className:"add__input",placeholder:"Th\xeam c\xf4ng vi\xea\u0323c...",value:n,onChange:this.onChange,autoFocus:!0}),Object(a.jsx)("span",{className:"icon-reset",onClick:s,children:Object(a.jsx)("i",{className:"fas fa-eraser"})})]}),Object(a.jsxs)("div",{className:"add__btn",children:[Object(a.jsxs)("button",{className:"btn btn--glowing-gradient btn--add",onClick:e,children:[Object(a.jsx)("i",{className:"fas fa-plus-circle"}),"Th\xeam"]}),Object(a.jsx)("button",{className:"btn btn--setting",onClick:this.showAction,children:Object(a.jsx)("i",{className:"fas fa-cog"})})]})]})]})}}]),n}(s.Component),C=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).onReset=function(){a.setState({name:""})},a.onHandleAdd=function(){var t=a.props.onHandleAdd,e=a.state.name;""!==e.trim()&&(t(e),a.onReset())},a.showAction=function(){(0,a.props.showAction)(!1),a.setState({name:""})},a.onChange=function(t){a.setState({name:t})},a.state={name:""},a}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.statusAction,e=this.state.name;return Object(a.jsx)(A,{statusAction:t,showAction:this.showAction,onHandleAdd:this.onHandleAdd,onReset:this.onReset,onChange:this.onChange,name:e})}}]),n}(s.Component),S=Object(b.b)((function(t){return{statusAction:t.statusAction}}),(function(t,e){return{showAction:function(e){t(N(e))},onHandleAdd:function(e){t(function(t){return{type:m,name:t}}(e))}}}))(C),w=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"setting ",children:[Object(a.jsx)(k,{}),Object(a.jsx)(S,{})]})}}]),n}(s.Component),R=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"componentWillReceiveProps",value:function(t){t.totalComplete}},{key:"render",value:function(){var t=this.props.totalComplete;return Object(a.jsx)("div",{className:"count ",children:Object(a.jsxs)("div",{className:"count__content count--complete",children:["\u0110a\u0303 hoa\u0300n tha\u0300nh:",Object(a.jsx)("span",{className:"numb numb-complete",children:t}),Object(a.jsx)("span",{className:"bd border1"}),Object(a.jsx)("span",{className:"bd border2"}),Object(a.jsx)("span",{className:"bd border3"}),Object(a.jsx)("span",{className:"bd border4"})]})})}}]),n}(s.Component),D=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).totalComplete=function(){return t.props.dataTodos.filter((function(t){return!0===t.status})).length},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(R,{totalComplete:this.totalComplete()})}}]),n}(s.Component),E=Object(b.b)((function(t){return{dataTodos:t.dataTodos}}),null)(D),H=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).count=function(e){var n=t.props.dataTodos;if(!(n.length<=0))return!0===e?n.filter((function(t,e){return!0===t.status})).length:!1===e?n.filter((function(t,e){return!1===t.status})).length:void 0},t.progress=function(){var e=t.props.dataTodos;if(!(e.length<=0)){var n=e.length,a=e.filter((function(t){return!0===t.status})).length;e.filter((function(t){return!0===t.status})).length;return Math.ceil(a/n*100)}},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.dataTodos;return Object(a.jsxs)("div",{className:"todos__footer",children:[Object(a.jsxs)("div",{className:"progress-bar",children:[Object(a.jsx)("span",{className:"progress-bar__name",children:"Ti\xea\u0301n tri\u0300nh"}),Object(a.jsx)("div",{className:"progress-bar__percent",children:Object(a.jsxs)("div",{className:"percent",style:{width:this.progress()+"%"},children:[this.progress(),"%"]})}),Object(a.jsx)("div",{className:"progress-bar__value",children:"100%"})]}),Object(a.jsxs)("div",{className:"counts",children:[Object(a.jsx)("div",{className:"count ",children:Object(a.jsxs)("div",{className:"count__content count--total",children:["T\xf4\u0309ng c\xf4\u0323ng:",Object(a.jsx)("span",{className:"numb numb-total",children:t.length}),Object(a.jsx)("span",{className:"bd border1"}),Object(a.jsx)("span",{className:"bd border2"}),Object(a.jsx)("span",{className:"bd border3"}),Object(a.jsx)("span",{className:"bd border4"})]})}),Object(a.jsx)(E,{}),Object(a.jsx)("div",{className:"count",children:Object(a.jsxs)("div",{className:"count__content count--not-complete",children:["Ch\u01b0a hoa\u0300n tha\u0300nh:",Object(a.jsx)("span",{className:"numb numb-not-complete",children:this.count(!1)?this.count(!1):0}),Object(a.jsx)("span",{className:"bd border1"}),Object(a.jsx)("span",{className:"bd border2"}),Object(a.jsx)("span",{className:"bd border3"}),Object(a.jsx)("span",{className:"bd border4"})]})})]})]})}}]),n}(s.Component),I=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.dataTodos;return Object(a.jsx)(H,{dataTodos:t})}}]),n}(s.Component),B=Object(b.b)((function(t){return{dataTodos:t.dataTodos}}),null)(I),U=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(t){var s;return Object(i.a)(this,n),(s=e.call(this,t)).toggleStatus=function(t){(0,s.props.toggleStatus)(t)},s.onDeleteTodo=function(t){(0,s.props.onDeleteTodo)(t)},s.onRepairTodo=function(t,e){var n=s.props.onRepairTodo,a=function(){for(var t=e.target;t.parentElement;){if(-1!==t.parentElement.className.indexOf("todos-item"))return t.parentElement;t=t.parentElement}}().clientHeight+5;n(t),s.setState({height:a})},s.onBack=function(){(0,s.props.onBack)()},s.onInputValue=function(t){t.target.style.height;var e=t.target.scrollHeight+3;s.setState({fieldName:t.target.value,height:e})},s.onUpdateTodo=function(t){(0,s.props.onUpdateTodo)({id:t,name:s.state.fieldName})},s.onSubmit=function(t){t.preventDefault()},s.onEnter=function(t){13===t.charCode&&t.preventDefault();t.target.style.height;var e=t.target.scrollHeight+5;s.setState({fieldName:t.target.value,height:e})},s.renderItem=function(){var t=s.props,e=t.dataTodo,n=t.idRepairTodo,o=s.state.fieldName,c=e.id,r=e.name,i=e.status;return n!==c?Object(a.jsxs)("div",{className:"todos-item-box",children:[Object(a.jsxs)("div",{className:"todos__name ",onClick:function(){return s.toggleStatus(c)},children:[Object(a.jsx)("span",{className:i?"icon-check icon--complete ":"icon-check icon--complete d-none",children:Object(a.jsx)("i",{className:"fas fa-check"})}),Object(a.jsx)("span",{className:i?"icon-check icon--not-complete d-none":"icon-check icon--not-complete",children:Object(a.jsx)("i",{className:"fas fa-times"})}),Object(a.jsx)("span",{className:"todos__name-text",children:r})]}),Object(a.jsxs)("div",{className:"todos__options ",children:[Object(a.jsx)("span",{className:n===c?"icon-repair d-none":"icon-repair",onClick:function(t){return s.onRepairTodo(c,t)},children:Object(a.jsx)("i",{className:"fas fa-edit",style:{pointerEvents:!1},onClick:s.stopPropagation})}),Object(a.jsx)("span",{className:n===c?"icon-delete d-none":"icon-delete ",onClick:function(){return s.onDeleteTodo(c)},children:Object(a.jsx)("i",{className:"fas fa-trash-alt"})})]})]}):n===c?Object(a.jsxs)("form",{className:"todos-item-box",onSubmit:s.onSubmit,children:[Object(a.jsx)("div",{className:n===c?"todos__name-repair ":"todos__name-repair d-none",children:Object(a.jsx)("textarea",{type:"text",id:"text-repair",className:"actions__input",value:o,onChange:s.onInputValue,onKeyPress:s.onEnter,style:{height:s.state.height+"px"}})}),Object(a.jsxs)("div",{className:n===c?"todos__options-repair ":"todos__options-repair  d-none",children:[Object(a.jsx)("span",{className:"icon-repair",onClick:function(t){return s.onUpdateTodo(c)},children:Object(a.jsx)("i",{className:"fas fa-save"})}),Object(a.jsx)("span",{className:"icon-back",onClick:function(){return s.onBack()},children:Object(a.jsx)("i",{className:"fas fa-undo-alt"})})]})]}):void 0},s.state={fieldName:"",height:null},s}return Object(l.a)(n,[{key:"componentWillReceiveProps",value:function(t){var e=t.dataTodo;e&&this.setState({fieldName:e.name})}},{key:"render",value:function(){var t=this.props.dataTodo,e=t.status;if(t)return Object(a.jsx)("li",{className:e?"todos-item mb-10 active-todos":"todos-item mb-10",children:this.renderItem()})}}]),n}(s.Component),P=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).toggleStatus=function(e){(0,t.props.toggleStatus)(e)},t.onDeleteTodo=function(e){(0,t.props.handleDeleteTodo)(e)},t.onRepairTodo=function(e){(0,t.props.handleRepairTodo)(e)},t.onBack=function(){(0,t.props.onBack)()},t.onUpdateTodo=function(e){var n=t.props,a=n.handleUpdateTodo,s=n.onBack;""!==e.name.trim()&&(a(e),s())},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.dataTodo,n=t.idRepairTodo;t.keyword;return Object(a.jsx)(U,{dataTodo:e,toggleStatus:this.toggleStatus,onDeleteTodo:this.onDeleteTodo,onRepairTodo:this.onRepairTodo,idRepairTodo:n,onBack:this.onBack,onUpdateTodo:this.onUpdateTodo})}}]),n}(s.Component),J=Object(b.b)((function(t){return{statusAction:t.statusAction,idRepairTodo:t.repairTodo}}),(function(t,e){return{toggleStatus:function(e){t(function(t){return{type:O,id:t}}(e))},handleDeleteTodo:function(e){t(function(t){return{type:f,id:t}}(e))},handleRepairTodo:function(e){t(T(e))},onBack:function(){t(T())},handleUpdateTodo:function(e){t(function(t){return{type:x,todo:t}}(e))}}}))(P),L=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).renderTodosItem=function(){var e=t.props.dataTodos;if(e.length>0)return e.map((function(t,e){return Object(a.jsx)(J,{dataTodo:t},t.id)}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"todos__body mb-15",children:Object(a.jsx)("ul",{className:"todos-list",children:this.renderTodosItem()})})}}]),n}(s.Component),F=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.keyword,e=this.props.dataTodos;return e.length>0&&""!==t.trim()&&(e=e.filter((function(e){return-1!==e.name.trim().toLowerCase().indexOf(t.trim().toLowerCase())}))),Object(a.jsx)(L,{dataTodos:e,keyword:t})}}]),n}(s.Component),G=Object(b.b)((function(t){return{dataTodos:t.dataTodos,keyword:t.search}}),null)(F),M=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"wrapper",children:Object(a.jsxs)("div",{className:"todos",children:[Object(a.jsx)("div",{className:"todos__header",children:Object(a.jsx)("h3",{className:"todos__header-text",children:"Todo List"})}),Object(a.jsx)(w,{}),Object(a.jsx)(G,{}),Object(a.jsx)(B,{})]})})}}]),n}(s.Component),V=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,o=e.getLCP,c=e.getTTFB;n(t),a(t),s(t),o(t),c(t)}))},W=n(7),q=n(9),K=n(8),X=JSON.parse(localStorage.getItem("dataTodos"))||[],z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case h:return Object(K.a)(t);case m:var n=Object(K.a)(t),a={id:Date.now(),name:e.name,status:!1};return n.push(a),localStorage.setItem("dataTodos",JSON.stringify(n)),n;case O:var s=Object(K.a)(t);return s=s.map((function(t){return t.id===e.id?Object(q.a)(Object(q.a)({},t),{},{status:!t.status}):t})),localStorage.setItem("dataTodos",JSON.stringify(s)),s;case f:var o=Object(K.a)(t);return o=o.filter((function(t){return t.id!==e.id})),localStorage.setItem("dataTodos",JSON.stringify(o)),o;case x:var c=Object(K.a)(t);return c=c.map((function(t){return t.id===e.todo.id?Object(q.a)(Object(q.a)({},t),{},{name:e.todo.name}):t})),localStorage.setItem("dataTodos",JSON.stringify(c)),c;default:return t}},Q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case p:return e.statusAction;default:return t}},Y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v:return e.id?e.id:null;default:return t}},Z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g:return e.name;default:return t}},$=Object(W.b)({dataTodos:z,statusAction:Q,repairTodo:Y,search:Z}),tt=Object(W.c)($);r.a.render(Object(a.jsx)(b.a,{store:tt,children:Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(M,{})})}),document.getElementById("root")),V()}},[[28,1,2]]]);
//# sourceMappingURL=main.c236c288.chunk.js.map