(function(t){function e(e){for(var n,i,c=e[0],r=e[1],l=e[2],u=0,f=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,c=1;c<o.length;c++){var r=o[c];0!==a[r]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},a={app:0},s=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=r;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("cd49")},"04f8":function(t,e,o){},"120b":function(t,e,o){"use strict";o("a967")},"20e0":function(t,e,o){"use strict";o("ab91")},"3eff":function(t,e,o){},4623:function(t,e,o){"use strict";o("3eff")},"718d":function(t,e,o){},8386:function(t,e,o){},a967:function(t,e,o){},ab91:function(t,e,o){},b63b:function(t,e,o){},b704:function(t,e,o){"use strict";o("8386")},bbbe:function(t,e,o){"use strict";o("b63b")},c322:function(t,e,o){"use strict";o("f2c3")},c813:function(t,e,o){t.exports=o.p+"img/mytou.62add831.jpg"},cd49:function(t,e,o){"use strict";o.r(e);o("e623"),o("e379"),o("5dc8"),o("37e1");var n=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Home"),o("BgColor")],1)},s=[],i=o("d4ec"),c=o("262e"),r=o("2caf"),l=o("9ab4"),d=o("1b40"),u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("Head",{attrs:{Title:"Todo"}}),o("Avatar"),o("todo-list",{on:{click:t.toggleDetailShow}}),o("TodoDeatail",{attrs:{show:t.tododetailShow}}),o("add-todo",{directives:[{name:"show",rawName:"v-show",value:t.isTodoAddShow,expression:"isTodoAddShow"}],attrs:{closeCall:t.toggleAddShow}}),o("Button",{attrs:{show:t.isTodoAddShow},on:{click:t.toggleAddShow}})],1)},f=[],h=o("bee2"),v=(o("b64b"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("header",[o("div",{staticClass:"left"},[t._t("left")],2),o("div",{staticClass:"center"},[o("span",{class:{addTask:"新建任务"==t.Title}},[t._v(t._s(t.Title))])]),t._m(0)])])}),b=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"right"},[o("i")])}],p=function(t){Object(c["a"])(o,t);var e=Object(r["a"])(o);function o(){return Object(i["a"])(this,o),e.apply(this,arguments)}return o}(d["d"]);Object(l["a"])([Object(d["c"])({type:String})],p.prototype,"Title",void 0),p=Object(l["a"])([d["a"]],p);var m=p,T=m,y=(o("120b"),o("2877")),j=Object(y["a"])(T,v,b,!1,null,null,null),k=j.exports,O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"author"},[t._m(0),o("div",{staticClass:"content"},[o("h3",{staticClass:"title"},[t._v("您好,未闻")]),o("p",[o("span",[t._v("今天天气不错")]),t.StayTasks>0?o("span",[t._v("你今天有 "+t._s(t.StayTasks)+" 个任务需要完成")]):o("span",[t._v("你今天没有任务需要完成")])])]),o("div",{staticClass:"date"},[o("span",[t._v("日期 :")]),o("span",[t._v(t._s(t._f("getTime")(t.timeobj.today)))])])])])},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"img"},[n("img",{attrs:{src:o("c813"),alt:""}})])}],w=(o("4de4"),o("99af"),new Date),_={today:new Date(w.getFullYear(),w.getMonth(),w.getDate()),tomorrow:new Date(w.getFullYear(),w.getMonth(),w.getDate()+1)},S=function(t){Object(c["a"])(o,t);var e=Object(r["a"])(o);function o(){var t;return Object(i["a"])(this,o),t=e.apply(this,arguments),t.timeobj=_,t}return Object(h["a"])(o,[{key:"StayTasks",get:function(){return this.$store.state.TaskList.reduce((function(t,e){var o=e.todoList.filter((function(t){return!t.isDone&&t.time!==_.tomorrow&&!t.isDelete}));return t+o.length}),0)}}]),o}(d["d"]);S=Object(l["a"])([Object(d["a"])({filters:{getTime:function(t){return"".concat(_.today.getFullYear(),"/").concat(_.today.getMonth()+1,"/").concat(_.today.getDate())}}})],S);var D=S,x=D,C=(o("b704"),Object(y["a"])(x,O,g,!1,null,null,null)),$=C.exports,L=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"todoContainer",staticClass:"todoList-container"},[o("div",{staticClass:"todoList",style:{width:100*t.TaskData.length+"%"}},t._l(t.TaskData,(function(e,n){return o("div",{key:n,staticClass:"todo-info",style:{transform:t.currentIndex},on:{click:function(o){return t.showTododetail(e)}}},[o("Todo",{attrs:{todo:e}})],1)})),0)])},A=[],I=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo",class:{todobg:t.todoSelectdata}},[o("div",{staticClass:"icon",class:{todoDetail:!t.todoSelectdata}},[o("div",[o("i",{class:"fa fa-"+t.todo.icon,style:{color:t.todo.colors[0]}})])]),o("div",{staticClass:"todo-detail"},[o("div",{staticClass:"todo-total"},[o("span",[t._v(t._s(t.todo.todoList.length)+" 条待办")])]),o("div",{staticClass:"title"},[o("span",[t._v(t._s(t.todo.name))])])]),o("div",{staticClass:"progress"},[o("div",{staticClass:"bar"},[o("span",{style:{width:t.progressLength,background:t.todo.colors[0]}})]),o("span",[t._v(t._s(t.progressLength))])])])},N=[],E=function(t){Object(c["a"])(o,t);var e=Object(r["a"])(o);function o(){return Object(i["a"])(this,o),e.apply(this,arguments)}return Object(h["a"])(o,[{key:"todoSelectdata",get:function(){return 0==Object.keys(this.$store.state.currentSelectTodo).length}},{key:"progressLength",get:function(){var t=this.todo.todoList.filter((function(t){return t.isDone&&!t.isDelete})),e=t.length,o=this.todo.todoList.filter((function(t){return!t.isDelete}));if(0==o.length)return"0%";var n=Math.floor(e/o.length*100)+"%";return n}}]),o}(d["d"]);Object(l["a"])([Object(d["c"])(Object)],E.prototype,"todo",void 0),E=Object(l["a"])([Object(d["a"])({name:"Todo"})],E);var H=E,M=H,P=(o("20e0"),Object(y["a"])(M,I,N,!1,null,null,null)),B=P.exports,F=function(t){Object(c["a"])(o,t);var e=Object(r["a"])(o);function o(){return Object(i["a"])(this,o),e.apply(this,arguments)}return Object(h["a"])(o,[{key:"TaskData",get:function(){return this.$store.state.TaskList}},{key:"currentIndex",get:function(){return"translateX("+100*-this.$store.state.currentIndex+"%)"}},{key:"showTododetail",value:function(t){this.$store.commit("SelectTodo",t)}},{key:"mounted",value:function(){var t=this,e=this.$refs.todoContainer;this.touch={},e.addEventListener("touchstart",(function(e){t.touch.startTouch=e.touches[0].clientX})),e.addEventListener("touchend",(function(e){t.touch.endTouch=e.changedTouches[0].clientX,Math.abs(t.touch.startTouch-t.touch.endTouch)>10&&(t.touch.startTouch>t.touch.endTouch?t.$store.state.currentIndex<2&&t.$store.commit("CurrentIndexAdd"):t.$store.state.currentIndex>0&&t.$store.commit("CurrentIndexReduce"))}))}}]),o}(d["d"]);Object(l["a"])([Object(d["b"])("click")],F.prototype,"showTododetail",null),F=Object(l["a"])([Object(d["a"])({components:{Todo:B}})],F);var J=F,R=J,X=(o("bbbe"),Object(y["a"])(R,L,A,!1,null,null,null)),Y=X.exports,q=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"xxx"}},[t.show?o("div",{staticClass:"detail-todo"},[o("Head",{scopedSlots:t._u([{key:"left",fn:function(){return[o("i",{staticClass:"fa fa-chevron-left",on:{click:t.closeDetail}})]},proxy:!0}],null,!1,2390450766)}),o("div",{staticClass:"todo-wapper"},[o("Todo",{attrs:{todo:t.Todo}}),o("div",{staticClass:"todoDetailSum"},[o("div",{staticClass:"today tasks"},[o("h3",[t._v("今 天")]),o("ul",t._l(t.todayTodo,(function(e,n){return o("li",{key:n,staticClass:"task"},[o("label",{on:{click:function(o){return o.preventDefault(),t.isTackDone(e)}}},[o("input",{class:{active:e.isDone},attrs:{type:"checkbox"}}),o("span",[t._v(t._s(e.TakeName))])]),o("transition",{attrs:{name:"deleteShow"}},[o("span",{directives:[{name:"show",rawName:"v-show",value:e.isDone,expression:"todo.isDone"}],staticClass:"delete",on:{click:function(o){return t.deletdTodo(e)}}},[o("span",{staticClass:"fa fa-trash"})])])],1)})),0)]),o("div",{staticClass:"tomorrow tasks"},[o("h3",[t._v("明 天")]),o("ul",t._l(t.tomorrowTodo,(function(e,n){return o("li",{key:n,staticClass:"task"},[o("label",{on:{click:function(o){return o.preventDefault(),t.isTackDone(e)}}},[o("input",{class:{active:e.isDone},attrs:{type:"checkbox"}}),o("span",[t._v(t._s(e.TakeName))])]),o("transition",{attrs:{name:"deleteShow"}},[o("span",{directives:[{name:"show",rawName:"v-show",value:e.isDone,expression:"todo.isDone"}],staticClass:"delete",on:{click:function(o){return t.deletdTodo(e)}}},[o("span",{staticClass:"fa fa-trash"})])])],1)})),0)])])],1)],1):t._e()])},U=[],V=function(t){Object(c["a"])(o,t);var e=Object(r["a"])(o);function o(){return Object(i["a"])(this,o),e.apply(this,arguments)}return Object(h["a"])(o,[{key:"Todo",get:function(){return this.$store.state.currentSelectTodo}},{key:"todayTodo",get:function(){return this.Todo.todoList.filter((function(t){return t.time==_.today&&!t.isDelete}))}},{key:"tomorrowTodo",get:function(){return this.Todo.todoList.filter((function(t){return t.time==_.tomorrow&&!t.isDelete}))}},{key:"isTackDone",value:function(t){this.$store.commit("isTackDone",t)}},{key:"deletdTodo",value:function(t){this.$store.commit("deletdTodo",t)}},{key:"closeDetail",value:function(){this.$parent.toggleDetailShow(),this.$store.commit("clearSelectTodo")}}]),o}(d["d"]);Object(l["a"])([Object(d["c"])(Boolean)],V.prototype,"show",void 0),V=Object(l["a"])([Object(d["a"])({components:{Head:k,Todo:B}})],V);var z=V,G=z,K=(o("f1ed"),Object(y["a"])(G,q,U,!1,null,null,null)),Q=K.exports,W=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"xxx"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:!t.todoSelectdata,expression:"!todoSelectdata"}],staticClass:"btn",class:{addTodo:t.show},on:{click:t.toggleAddShow}})])},Z=[],tt=function(t){Object(c["a"])(o,t);var e=Object(r["a"])(o);function o(){return Object(i["a"])(this,o),e.apply(this,arguments)}return Object(h["a"])(o,[{key:"todoSelectdata",get:function(){return 0==Object.keys(this.$store.state.currentSelectTodo).length}},{key:"toggleAddShow",value:function(){this.show?this.$bus.$emit("addTodo"):this.$emit("click")}}]),o}(d["d"]);Object(l["a"])([Object(d["c"])(Boolean)],tt.prototype,"show",void 0),tt=Object(l["a"])([Object(d["a"])({name:"cl-button"})],tt);var et=tt,ot=et,nt=(o("ea5d"),Object(y["a"])(ot,W,Z,!1,null,null,null)),at=nt.exports,st=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"xxx"}},[o("div",{staticClass:"newTodo",attrs:{id:"AddTodo"},on:{click:t.closeTime}},[o("Head",{attrs:{Title:"新建任务"},scopedSlots:t._u([{key:"left",fn:function(){return[o("i",{staticClass:"fa fa-times",on:{click:t.closeAddTodo}})]},proxy:!0}])}),o("div",{staticClass:"todoInput"},[o("div",{staticClass:"title"},[t._v("简单地输入您的计划（16字以内)")]),o("div",{staticClass:"detail"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.todoTitle,expression:"todoTitle"}],attrs:{maxlength:"16"},domProps:{value:t.todoTitle},on:{input:function(e){e.target.composing||(t.todoTitle=e.target.value)}}})]),o("div",{staticClass:"time"},[o("span",{staticClass:"fa fa-calendar"}),o("div",{staticClass:"dropDown"},[o("span",{staticClass:"line",on:{click:function(e){t.isShowSelectTime=!1}}},[t._v(t._s(t.selectTimeText))]),o("ul",{staticClass:"line",class:{done:t.isShowSelectTime},on:{click:t.selectTime}},[o("li",{class:{active:"今天"===t.selectTimeText}},[t._v("今天")]),o("li",{class:{active:"明天"===t.selectTimeText}},[t._v("明天")])])])])])],1)])},it=[],ct=(o("498a"),function(t){Object(c["a"])(o,t);var e=Object(r["a"])(o);function o(){var t;return Object(i["a"])(this,o),t=e.apply(this,arguments),t.selectTimeText="今天",t.todoTitle="",t.isShowSelectTime=!0,t}return Object(h["a"])(o,[{key:"closeTime",value:function(t){-1===t.target.className.indexOf("line")&&(this.isShowSelectTime=!0)}},{key:"selectTime",value:function(t){this.selectTimeText=t.target.innerHTML}},{key:"closeAddTodo",value:function(){this.closeCall(),this.selectTimeText="今天",this.todoTitle=""}},{key:"todoAdd",value:function(){var t=this.todoTitle,e=this.selectTimeText;if(t.trim()){var o={id:Date.now(),TakeName:t,isDelete:!1,isDone:!1,time:"今天"==e?_.today:_.tomorrow};this.$store.commit("updateTodoList",o),this.closeAddTodo()}}},{key:"mounted",value:function(){this.$bus.$on("addTodo",this.todoAdd)}}]),o}(d["d"]));Object(l["a"])([Object(d["c"])(Function)],ct.prototype,"closeCall",void 0),ct=Object(l["a"])([Object(d["a"])({name:"AddTodo",components:{Head:k}})],ct);var rt=ct,lt=rt,dt=(o("4623"),Object(y["a"])(lt,st,it,!1,null,null,null)),ut=dt.exports,ft=function(t){Object(c["a"])(o,t);var e=Object(r["a"])(o);function o(){var t;return Object(i["a"])(this,o),t=e.apply(this,arguments),t.tododetailShow=!1,t.todoAddShow=!1,t}return Object(h["a"])(o,[{key:"isTodoAddShow",get:function(){return Object.keys(this.todoSelectdata).length>0&&this.todoAddShow}},{key:"toggleDetailShow",value:function(){this.tododetailShow=!this.tododetailShow}},{key:"toggleAddShow",value:function(){this.todoAddShow=!this.todoAddShow}},{key:"todoSelectdata",get:function(){return this.$store.state.currentSelectTodo}}]),o}(d["d"]);ft=Object(l["a"])([Object(d["a"])({components:{Avatar:$,Head:k,TodoList:Y,TodoDeatail:Q,Button:at,AddTodo:ut}})],ft);var ht=ft,vt=ht,bt=Object(y["a"])(vt,u,f,!1,null,null,null),pt=bt.exports,mt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"bg"},t._l(t.TaskData,(function(e,n){return o("div",{key:n,staticClass:"todoBg",class:{showbg:n==t.currentIndex},style:{background:t.gradient(n)}})})),0)},Tt=[],yt=function(t){Object(c["a"])(o,t);var e=Object(r["a"])(o);function o(){return Object(i["a"])(this,o),e.apply(this,arguments)}return Object(h["a"])(o,[{key:"TaskData",get:function(){return this.$store.state.TaskList}},{key:"currentIndex",get:function(){return this.$store.state.currentIndex}},{key:"gradient",value:function(t){return"linear-gradient(".concat(this.TaskData[t].colors[1],", ").concat(this.TaskData[t].colors[0],")")}}]),o}(d["d"]);yt=Object(l["a"])([d["a"]],yt);var jt=yt,kt=jt,Ot=(o("c322"),Object(y["a"])(kt,mt,Tt,!1,null,null,null)),gt=Ot.exports,wt=function(t){Object(c["a"])(o,t);var e=Object(r["a"])(o);function o(){return Object(i["a"])(this,o),e.apply(this,arguments)}return o}(d["d"]);wt=Object(l["a"])([Object(d["a"])({components:{Home:pt,BgColor:gt}})],wt);var _t=wt,St=_t,Dt=Object(y["a"])(St,a,s,!1,null,null,null),xt=Dt.exports,Ct=(o("499a"),o("2f62"));n["a"].use(Ct["a"]);var $t=new Ct["a"].Store({state:{TaskList:[{icon:"user",name:"User",todoList:[{id:1,TakeName:"qu yue",isDelete:!1,isDone:!1,time:_.today}],colors:["#ff6262","#ffa947"]},{icon:"tasks",name:"tasks",todoList:[{id:2,TakeName:"学习HTML",isDelete:!0,isDone:!1,time:_.today},{id:3,TakeName:"学习CSS",isDelete:!1,isDone:!0,time:_.today},{id:4,TakeName:"学习JavaScript",isDelete:!1,isDone:!1,time:_.today},{id:5,TakeName:"学习Vue",isDelete:!1,isDone:!1,time:_.tomorrow},{id:6,TakeName:"学习React",isDelete:!1,isDone:!1,time:_.tomorrow}],colors:["#5b9df9","#47bfcf"]},{icon:"home",name:"Home",todoList:[{id:7,TakeName:"my home",isDelete:!1,isDone:!1,time:_.today}],colors:["#2c7d59","#3ba776"]}],currentIndex:0,currentSelectTodo:{}},mutations:{CurrentIndexAdd:function(t){t.currentIndex++},CurrentIndexReduce:function(t){t.currentIndex--},SelectTodo:function(t,e){t.currentSelectTodo=e},clearSelectTodo:function(t){t.currentSelectTodo={}},isTackDone:function(t,e){e.isDone=!e.isDone},deletdTodo:function(t,e){e.isDelete=!0},updateTodoList:function(t,e){t.currentSelectTodo.todoList.unshift(e)}},actions:{},modules:{}}),Lt=$t;n["a"].config.productionTip=!1,new n["a"]({beforeCreate:function(){n["a"].prototype.$bus=this},store:Lt,render:function(t){return t(xt)}}).$mount("#app")},ea5d:function(t,e,o){"use strict";o("718d")},f1ed:function(t,e,o){"use strict";o("04f8")},f2c3:function(t,e,o){}});
//# sourceMappingURL=app.aba91278.js.map