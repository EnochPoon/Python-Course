(this["webpackJsonppython-course"]=this["webpackJsonppython-course"]||[]).push([[0],{356:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(29),c=n.n(o),s=(n(79),n(72)),l=n(7),u=n(8),i=n(10),m=n(11),p=(n(80),n(44)),h=n.n(p),d=n(360),b=n(359),f=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.language,n=e.value;return r.a.createElement(d.a,{language:t,style:b.a},n)}}]),n}(a.PureComponent);f.defaultProps={language:"python"};var v=f,E=n(45),y=n(9);function g(e){return{type:"SET_CUR_LESSON_NUM",payload:e}}var j=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={md:""},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"md-wrapper",id:"md-wrapper"},r.a.createElement(h.a,{source:this.state.md,escapeHtml:!1,renderers:{code:v}}))}},{key:"componentDidMount",value:function(){var e=this;fetch(this.props.path,{mode:"no-cors"}).then((function(e){return e.text()})).then((function(t){console.log(t),e.setState({md:t},(function(){var e,t=document.getElementById("md-wrapper"),n=t.querySelectorAll("h1, h2, h3, h4, h5, h6"),a={},r=Object(E.a)(n);try{for(r.s();!(e=r.n()).done;){var o=e.value,c=o.textContent.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9\-_]+/gi,"");c in a?o.id="".concat(c,"-").concat(a[c]++):(a[c]=1,o.id=c)}}catch(m){r.e(m)}finally{r.f()}var s,l=t.querySelectorAll("a"),u=Object(E.a)(l);try{for(u.s();!(s=u.n()).done;){var i=s.value;new URL(i.href).origin!==window.location.origin&&(i.target="_blank")}}catch(m){u.e(m)}finally{u.f()}}))})).catch((function(t){e.setState({md:String(t)})})),this.props.setCurLessonNum(this.props.lessonNum)}}]),n}(a.Component),O=Object(y.b)(null,{setCurLessonNum:g})(j),L=["Introduction and Setup","Variables and Output","Input","Conditional Statements"],N=["Functions","Loops","Strings","Lists","Sets and Dictionaries","Classes and Objects"];function w(e){for(e=String(e);e.length<2;)e="0"+e;return e}var C=n(15),k=n(14),S=(n(354),function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleLessonNavClick=function(t){e.props.setCurLessonNum(t)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.curLesson;return r.a.createElement("div",{className:"sidebar"},r.a.createElement(k.b,{to:"/"},r.a.createElement("h1",null,"Python-Course")),r.a.createElement("p",null,"By Enoch Poon"),e>=0&&r.a.createElement("div",{className:"adjacent-links"},r.a.createElement("button",{className:"adjacent-link-button",disabled:e<=0},e>0?r.a.createElement(k.b,{to:"/".concat(w(e-1))},r.a.createElement("div",null,r.a.createElement("b",null,"Previous Lesson:")),L[e-1]):""),r.a.createElement("button",{className:"adjacent-link-button",disabled:e<0||e>=L.length-1},e>=0&&e<L.length-1?r.a.createElement(k.b,{to:"/".concat(w(e+1))},r.a.createElement("div",null,r.a.createElement("b",null,"Next Lesson:")),L[e+1]):"")))}}]),n}(a.Component)),P=Object(y.b)((function(e){return{curLesson:e.curLesson}}),{setCurLessonNum:g})(S),_=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.setCurLessonNum(-1)}},{key:"render",value:function(){return r.a.createElement("div",{className:"md-wrapper"},r.a.createElement("h1",null,"Introductory Programming in Python"),r.a.createElement("p",null,"By Enoch Poon"),r.a.createElement("p",null,"Hello! This is my own website that includes introductory programming lessons in Python. This course is designed for students who are completely new to programming."),r.a.createElement("p",null,r.a.createElement("u",null,"Future updates to this site will include more lessons, modifications to older lesson content, and major changes to the user interface.")),r.a.createElement("h2",null,"Table of Contents"),r.a.createElement("ol",{start:"0"},L.map((function(e,t){return r.a.createElement("li",null,r.a.createElement(k.b,{to:"/".concat(w(t))},e))}))),r.a.createElement("h2",null,"Future Lessons (May be subject to change)"),r.a.createElement("ol",{start:L.length},N.map((function(e){return r.a.createElement("li",null,e)}))))}}]),n}(r.a.Component),I=Object(y.b)((function(e){return{curLesson:e.curLesson}}),{setCurLessonNum:g})(_),M=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={md:"",curLessonNum:-1},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=window.location.pathname;"/"===e?this.props.setCurLessonNum(-1):this.props.setCurLessonNum(parseInt(e.split("/")[1]))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(P,null),r.a.createElement("div",{className:"right-container"},r.a.createElement("div",{className:"nav-header"}),r.a.createElement(C.c,null,Object(s.a)(Array(L.length).keys()).map((function(e){return r.a.createElement(C.a,{path:"/".concat(w(e)),key:e},r.a.createElement(O,{path:"./lessons/lesson".concat(w(e),".md"),lessonNum:parseInt(e)}))})),r.a.createElement(C.a,{exact:!0,path:"/"},r.a.createElement(I,null)))))}}]),n}(a.Component),x=Object(y.b)((function(e){return{curLesson:e.curLesson}}),{setCurLessonNum:g})(M);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=n(31),B=n(73),T={curLesson:1};var U=Object(A.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CUR_LESSON_NUM":return Object(B.a)({},e,{curLesson:t.payload});default:return e}}));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k.a,{basename:"/Python-Course"},r.a.createElement(y.a,{store:U},r.a.createElement(x,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,t,n){e.exports=n(356)},79:function(e,t,n){},80:function(e,t,n){}},[[74,1,2]]]);
//# sourceMappingURL=main.034fb97a.chunk.js.map