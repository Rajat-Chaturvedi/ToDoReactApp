(this.webpackJsonpproject1=this.webpackJsonpproject1||[]).push([[0],{34:function(e,t,a){e.exports=a(55)},40:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),o=a(14),s=a(5),m=a(6),i=a(9),u=a(8),d=a(11),p=a(57),h=a(15),E=a(56),b=a(58),f=a(59),g=a(62),v=a(60),N=a(61),y=(a(40),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).toggleNavbar=n.toggleNavbar.bind(Object(h.a)(n)),n.state={collapsed:!0},n}return Object(m.a)(a,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement(E.a,{className:"navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3",light:!0},r.a.createElement(p.a,null,r.a.createElement(b.a,{tag:o.b,to:"/"},"DOTNET CORE WITH REACT"),r.a.createElement(f.a,{onClick:this.toggleNavbar,className:"mr-2"}),r.a.createElement(g.a,{className:"d-sm-inline-flex flex-sm-row-reverse",isOpen:!this.state.collapsed,navbar:!0},r.a.createElement("ul",{className:"navbar-nav flex-grow"},r.a.createElement(v.a,null,r.a.createElement(N.a,{tag:o.b,className:"text-dark",to:"/"},"Home")),r.a.createElement(v.a,null,r.a.createElement(N.a,{tag:o.b,className:"text-dark",to:"/counter"},"Counter")),r.a.createElement(v.a,null,r.a.createElement(N.a,{tag:o.b,className:"text-dark",to:"/contactus"},"Contact Us")),r.a.createElement(v.a,null,r.a.createElement(N.a,{tag:o.b,className:"text-dark",to:"/fetch-data"},"Fetch data")))))))}}]),a}(n.Component));y.displayName=y.name;var C=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(p.a,null,this.props.children))}}]),a}(n.Component);C.displayName=C.name;var w=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Hello, world!"),r.a.createElement("p",null,"Welcome to your new single-page application, built with:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://get.asp.net/"},"ASP.NET Core")," and ",r.a.createElement("a",{href:"https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx"},"C#")," for cross-platform server-side code"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://facebook.github.io/react/"},"React")," for client-side code"),r.a.createElement("li",null,r.a.createElement("a",{href:"http://getbootstrap.com/"},"Bootstrap")," for layout and styling")),r.a.createElement("p",null,"To help you get started, we have also set up:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Client-side navigation"),". For example, click ",r.a.createElement("em",null,"Counter")," then ",r.a.createElement("em",null,"Back")," to return here."),r.a.createElement("li",null,r.a.createElement("strong",null,"Development server integration"),". In development mode, the development server from ",r.a.createElement("code",null,"create-react-app")," runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file."),r.a.createElement("li",null,r.a.createElement("strong",null,"Efficient production builds"),". In production mode, development-time features are disabled, and your ",r.a.createElement("code",null,"dotnet publish")," configuration produces minified, efficiently bundled JavaScript files.")),r.a.createElement("p",null,"The ",r.a.createElement("code",null,"ClientApp")," subdirectory is a standard React application based on the ",r.a.createElement("code",null,"create-react-app")," template. If you open a command prompt in that directory, you can run ",r.a.createElement("code",null,"npm")," commands such as ",r.a.createElement("code",null,"npm test")," or ",r.a.createElement("code",null,"npm install"),"."))}}]),a}(n.Component);w.displayName=w.name;var j=a(22),k=a.n(j),O=a(31),x=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={forecasts:[],loading:!0},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.populateWeatherData()}},{key:"render",value:function(){var e=this.state.loading?r.a.createElement("p",null,r.a.createElement("em",null,"Loading...")):a.renderForecastsTable(this.state.forecasts);return r.a.createElement("div",null,r.a.createElement("h1",{id:"tabelLabel"},"Weather forecast"),r.a.createElement("p",null,"This component demonstrates fetching data from the server."),e)}},{key:"populateWeatherData",value:function(){var e=Object(O.a)(k.a.mark((function e(){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("weatherforecast");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({forecasts:a,loading:!1});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}],[{key:"renderForecastsTable",value:function(e){return r.a.createElement("table",{className:"table table-striped","aria-labelledby":"tabelLabel"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Temp. (C)"),r.a.createElement("th",null,"Temp. (F)"),r.a.createElement("th",null,"Summary"))),r.a.createElement("tbody",null,e.map((function(e){return r.a.createElement("tr",{key:e.date},r.a.createElement("td",null,e.date),r.a.createElement("td",null,e.temperatureC),r.a.createElement("td",null,e.temperatureF),r.a.createElement("td",null,e.summary))}))))}}]),a}(n.Component);x.displayName=x.name;var T=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={currentCount:0},n.incrementCounter=n.incrementCounter.bind(Object(h.a)(n)),n}return Object(m.a)(a,[{key:"incrementCounter",value:function(){this.setState({currentCount:this.state.currentCount+1})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Counter"),r.a.createElement("p",null,"This is a simple example of a React component."),r.a.createElement("p",{"aria-live":"polite"},"Current count: ",r.a.createElement("strong",null,this.state.currentCount)),r.a.createElement("button",{className:"btn btn-primary",onClick:this.incrementCounter},"Increment"))}}]),a}(n.Component);T.displayName=T.name;var L=a(32),A=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).submitHandler=function(e){e.preventDefault(),alert("Contact Details:\n\nName:"+n.state.Name+"\nEmail:"+n.state.Email+"\nPhone:"+n.state.Phone+"\nCourse Choice:"+n.state.CourseChoice+"\nLocataion:"+n.state.Location)},n.changeHandler=function(e){var t=e.target.name,a=e.target.value;"Phone"===t&&(Number(a)||alert("Your Phone Number must be a number")),n.setState(Object(L.a)({},t,a))},n.state={Name:"",Phone:"",Email:"",CourseChoice:"",Location:""},n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row",style:{marginLeft:"-100px"}},r.a.createElement("div",{className:"col-md-3",style:{paddingRight:"90px"}},r.a.createElement("div",{className:"card",style:{border:"solid",borderWidth:"3px",borderColor:" black"}},r.a.createElement("img",{className:"card-img-top",src:"./Images/Logo.jpg",alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",null,"Contact:"),r.a.createElement("p",null,"Rajat Chaturvedi "),r.a.createElement("p",null,"8979966510"),r.a.createElement("p",null,r.a.createElement("b",null,"Programmer Analayist Trainee"))))),r.a.createElement("div",{className:"col-md-5"},r.a.createElement("div",{className:"card",style:{width:"25rem",border:"solid",borderWidth:"3px",borderColor:"black"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-text"},r.a.createElement("form",{onSubmit:this.submitHandler},r.a.createElement("div",{className:"text-danger"}),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"control-label"},"Name"),r.a.createElement("input",{name:"Name",className:"form-control",onChange:this.changeHandler}),r.a.createElement("span",{className:"text-danger"})),r.a.createElement("div",{classNamw:"form-group"},r.a.createElement("label",{className:"control-label"},"Email"),r.a.createElement("input",{name:"Email",className:"form-control",onChange:this.changeHandler}),r.a.createElement("span",{className:"text-danger"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"control-label"},"Phone"),r.a.createElement("input",{name:"Phone",className:"form-control",onChange:this.changeHandler}),r.a.createElement("span",{className:"text-danger"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"control-label"},"Course Choice"),r.a.createElement("select",{name:"CourseChoice",onChange:this.changeHandler,className:"form-control"},r.a.createElement("option",{selected:!0,disabled:!0},"--Select Course--"),r.a.createElement("option",null,"ARTIFICIAL INTELLIGENCE"),r.a.createElement("option",null,"RPA"),r.a.createElement("option",null,"DEVOPS"),r.a.createElement("option",null,"JAVA")),r.a.createElement("span",{className:"text-danger"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"control-label"},"Location"),r.a.createElement("input",{name:"Location",className:"form-control",onChange:this.changeHandler}),r.a.createElement("span",{className:"text-danger"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Submit",className:"btn btn-primary",style:{marginLeft:"140px",backgroundColor:"gray",border:"solid",fontFamily:"sans-serif",borderColor:"black",marginTop:"20px"}}))))))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.374260790532!2d77.40032411503323!3d28.49838548247105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce85e51715a75%3A0x4ac78e96e456c14!2sCognizant!5e0!3m2!1sen!2sin!4v1640517931550!5m2!1sen!2sin",width:"400",height:"400",style:{border:"solid",borderWidth:"3px",borderColor:"black"},allowfullscreen:"",loading:"lazy"})))))}}]),a}(n.Component);A.displayName=A.name;a(54);var I=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(C,null,r.a.createElement(d.a,{exact:!0,path:"/",component:w}),r.a.createElement(d.a,{path:"/counter",component:T}),r.a.createElement(d.a,{path:"/contactus",component:A}),r.a.createElement(d.a,{path:"/fetch-data",component:x}))}}]),a}(n.Component);I.displayName=I.name;var W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var P=document.getElementsByTagName("base")[0].getAttribute("href"),S=document.getElementById("root");c.a.render(r.a.createElement(o.a,{basename:P},r.a.createElement(I,null)),S),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");W?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):H(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):H(e)}))}}()}},[[34,1,2]]]);
//# sourceMappingURL=main.d838ffb5.chunk.js.map