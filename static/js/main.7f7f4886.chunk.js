(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(41)},29:function(e,t,n){},30:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),o=n.n(c),i=(n(29),n(6)),s=n(7),u=n(10),l=n(8),m=n(11),p=n(9),d=n(5),h=(n(30),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Here's Root ",r.a.createElement("br",null),r.a.createElement(p.b,{to:"/firstlink"},"Go to FirstLink"))}}]),t}(a.Component)),f=n(13),b=n.n(f),v=n(16),k=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={data:"",usertable:"loading",ip:""},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"fetchData",value:function(){var e=Object(v.a)(b.a.mark(function e(){var t,n,a=arguments;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.length>0&&void 0!==a[0]?a[0]:"","http://1.235.153.95:8000",e.next=4,fetch("http://1.235.153.95:8000/users");case 4:if(t=e.sent,console.log(t.state),t.status/100===2){e.next=8;break}return e.abrupt("return",!1);case 8:return n=t.json(),e.abrupt("return",n);case 10:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"makeTable",value:function(e){return e?e.map(function(e){return r.a.createElement("div",{key:e.id},e.id+": "+e.username)}):[]}},{key:"updateData",value:function(){var e=Object(v.a)(b.a.mark(function e(t){var n,a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchData(t);case 2:return n=e.sent,e.next=5,this.makeTable(n);case 5:a=e.sent,console.log(a),this.setState({usertable:a});case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.updateData()}},{key:"_handlerButtonFetch",value:function(e){this.updateData(document.getElementById("input_ip").value)}},{key:"render",value:function(){var e=this;return console.log("render()"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-auto ml-5"},"Here's FirstLink")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(p.b,{to:"/"},"Go to Root"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{id:"input_ip",type:"text",className:"form-control",placeholder:"Input IP"}),r.a.createElement("button",{type:"button",className:"btn btn-sm btn-secondary",onClick:function(t){return e._handlerButtonFetch(t)}},"fetch"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},this.state.usertable)))}}]),t}(a.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:h}),r.a.createElement(d.a,{exact:!0,path:"/firstlink",component:k})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.7f7f4886.chunk.js.map