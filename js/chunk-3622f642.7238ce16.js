(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3622f642"],{"15e6":function(e,t,s){"use strict";var i=s("5230"),a=s.n(i);a.a},5230:function(e,t,s){},"915e":function(e,t,s){e.exports=s.p+"img/avatar.d5b95759.jpg"},dfc1:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:8,xs:24}},[i("el-card",{staticStyle:{"margin-bottom":"20px"}},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[e._v("About me")])]),i("div",{staticClass:"user-profile"},[i("div",{staticClass:"box-center"},[i("img",{staticStyle:{width:"100px",height:"120px"},attrs:{src:s("915e"),fit:"fill"}})]),i("div",{staticClass:"box-center"},[i("div",{staticClass:"user-name text-center"},[e._v(e._s(e.user.name))]),i("div",{staticClass:"user-role text-center text-muted"},[e._v(e._s(e.user.roles))])])]),i("div",{staticClass:"user-bio"},[i("div",{staticClass:"user-education user-bio-section"},[i("div",{staticClass:"user-bio-section-header"},[i("i",{staticClass:"el-icon-school"}),i("span",[e._v("Education")])]),i("div",{staticClass:"user-bio-section-body"},[i("div",{staticClass:"text-muted"},[e._v(" "+e._s(e.user.school)+" ")])])]),i("div",{staticClass:"user-skills user-bio-section"},[i("div",{staticClass:"user-bio-section-header"},[i("i",{staticClass:"el-icon-star-off"}),i("span",[e._v("Basic Details")])]),i("div",{staticClass:"user-bio-section-body"},[i("div",{staticClass:"link-black text-sm"},[i("i",{staticClass:"el-icon-location"}),e._v(" Thanh Thai street, Ward 14, District 10, HCMC ")]),i("div",{staticClass:"link-black text-sm"},[i("i",{staticClass:"el-icon-phone"}),e._v(" +84 38 30 34 006 ")]),i("div",{staticClass:"link-black text-sm"},[i("i",{staticClass:"el-icon-present"}),e._v(" Jun 2nd, 1988 ")]),i("div",{staticClass:"link-black text-sm"},[i("i",{staticClass:"el-icon-message"}),e._v(" nguyenthanhhong26@gmail.com ")])])])])])],1),i("el-col",{attrs:{span:16,xs:24}},[i("el-card",[i("el-tabs",{model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[i("el-tab-pane",{attrs:{label:"Skill",name:"activity"}},[i("div",{staticClass:"user-skill"},[i("div",{staticClass:"user-bio-section"},[i("div",{staticClass:"user-bio-section-header"},[i("i",{staticClass:"el-icon-s-tools"}),i("span",[e._v("Programming Languages")])]),i("div",{staticClass:"user-bio-section-body"},e._l(e.skill_backend,(function(t){return i("div",{key:t.title,staticClass:"progress-item"},[i("span",[e._v(e._s(t.title))]),i("el-progress",{attrs:{percentage:t.percentage,color:e.colors}})],1)})),0)])]),i("div",{staticClass:"user-skill"},[i("div",{staticClass:"user-bio-section"},[i("div",{staticClass:"user-bio-section-header"},[i("i",{staticClass:"el-icon-magic-stick"}),i("span",[e._v("Front-end web technologies")])]),i("div",{staticClass:"user-bio-section-body"},e._l(e.skill_frontend,(function(t){return i("div",{key:t.title,staticClass:"progress-item"},[i("span",[e._v(e._s(t.title))]),i("el-progress",{attrs:{percentage:t.percentage,color:e.colors}})],1)})),0)])]),i("div",{staticClass:"user-skill"},[i("div",{staticClass:"user-bio-section"},[i("div",{staticClass:"user-bio-section-header"},[i("i",{staticClass:"el-icon-coin"}),i("span",[e._v("Database")])]),i("div",{staticClass:"user-bio-section-body"},e._l(e.skill_database,(function(t){return i("div",{key:t.title,staticClass:"progress-item"},[i("span",[e._v(e._s(t.title))]),i("el-progress",{attrs:{percentage:t.percentage,color:e.colors}})],1)})),0)])]),i("div",{staticClass:"user-skill"},[i("div",{staticClass:"user-bio-section"},[i("div",{staticClass:"user-bio-section-header"},[i("i",{staticClass:"el-icon-paperclip"}),i("span",[e._v("Tool and IDE")])]),i("div",{staticClass:"user-bio-section-body"},e._l(e.skill_ide,(function(t){return i("div",{key:t.title,staticClass:"progress-item"},[i("span",[e._v(e._s(t.title))]),i("el-progress",{attrs:{percentage:t.percentage,status:"success"}})],1)})),0)])])]),i("el-tab-pane",{attrs:{label:"Timeline",name:"timeline"}},[i("el-timeline",e._l(e.timeline,(function(t,s){return i("el-timeline-item",{key:s,attrs:{timestamp:t.timestamp,color:t.color}},[e._v(" "+e._s(t.title)+" ")])})),1)],1),i("el-tab-pane",{attrs:{label:"Project List",name:"projecttimeline"}},e._l(e.projects,(function(t){return i("div",{key:t.Name,staticClass:"post"},[i("div",{staticClass:"project-block"},[i("span",{staticClass:"username text-muted"},[e._v(e._s(t.Name))]),i("span",{staticClass:"description"},[e._v(e._s(t.Client)+" from "+e._s(t.Time))]),i("span",{staticClass:"description"},[e._v("Responsibilities: "+e._s(t.Responsibilities))])]),i("el-tooltip",{attrs:{content:"Description",placement:"top-start"}},[i("p",[e._v(" "+e._s(t.Description)+" ")])]),i("ul",{staticClass:"list-inline"},[i("li",[i("el-tooltip",{attrs:{content:"Back-end Technologies",placement:"top"}},[i("span",{staticClass:"link-black text-sm"},[i("i",{staticClass:"el-icon-setting"}),e._v(" "+e._s(t.Languages)+" ")])])],1),i("li",[i("el-tooltip",{attrs:{content:"Front-end Technologies",placement:"top"}},[i("span",{staticClass:"link-black text-sm"},[i("i",{staticClass:"el-icon-magic-stick"}),e._v(" "+e._s(t.Technologies)+" ")])])],1)])],1)})),0),i("el-tab-pane",{attrs:{label:"Personal Project",name:"account"}},e._l(e.myprojects,(function(t){return i("div",{key:t.Link,staticClass:"post"},[i("div",{staticClass:"project-block"},[i("a",{staticClass:"username text-muted",attrs:{href:t.Link,target:"_blank"}},[e._v(e._s(t.Name))]),t.Languages?i("span",{staticClass:"description"},[e._v("Back-end Technologies: "+e._s(t.Languages))]):e._e(),t.Technologies?i("span",{staticClass:"description"},[e._v("Front-end Technologies: "+e._s(t.Technologies))]):e._e(),t.Framework?i("span",{staticClass:"description"},[e._v("Framework: "+e._s(t.Framework))]):e._e()]),i("p",[e._v("Description: "+e._s(t.Description)+" ")]),t.Review?i("a",{staticClass:"link-black text-sm",attrs:{href:t.Review,target:"_blank"}},[i("i",{staticClass:"el-icon-share"}),e._v(" Review")]):e._e()])})),0)],1)],1)],1)],1)],1)},a=[],o={data:function(){return{user:{name:"Nguyễn Thanh Hồng",email:"nguyenthanhhong26@gmail.com",avatar:"@/assets/avatar.jpg",roles:"Admin",school:"Bachelor of computer science in Ho Chi Minh City University of Science"},activeTab:"activity",timeline:[{timestamp:"2020/02/14",title:"GMS Technology",color:"#409EFF"},{timestamp:"2018/06/01",title:"CMC Global",color:"#0bbd87"},{timestamp:"2017/06/01",title:"System EXE VN Co., Ltd",color:"#E6A23C"},{timestamp:"2016/06/01",title:"Dou networks",color:"#4050FF"},{timestamp:"2014/06/01",title:"Uniccs Vietnam Co., Ltd",color:"#40FFF2"},{timestamp:"2012/12/01",title:"LAC VIET Computing Corp",color:"#FF4040"}],colors:[{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:70},{color:"#e6a23c",percentage:80},{color:"#f56c6c",percentage:90},{color:"#6f7ad3",percentage:100}],skill_backend:[{title:"Java Core",percentage:80,detail:"Proficient (Advanced, very good to use it at work)"},{title:"JDBC",percentage:80,detail:"Proficient (Advanced, very good to use it at work)"},{title:"Spring, Spring Boot",percentage:90,detail:"Proficient (Advanced, very good to use it at work)"},{title:"Web Service",percentage:70,detail:"Proficient (Advanced, very good to use it at work)"},{title:"Web API",percentage:70,detail:"Proficient (Advanced, very good to use it at work)"},{title:"C#",percentage:60,detail:"Proficient (Advanced, very good to use it at work)"}],skill_frontend:[{title:"HTML, CSS",percentage:70},{title:"JavaScript",percentage:100},{title:"Bootstrap",percentage:90},{title:"JQuery",percentage:85},{title:"VueJs",percentage:80}],skill_database:[{title:"SQL Server",percentage:75},{title:"Oracle",percentage:90},{title:"PostgreSQL",percentage:80},{title:"MySQL",percentage:70},{title:"MariaDB",percentage:60}],skill_ide:[{title:"Eclipse, IntelliJ",percentage:100},{title:"Git, SVN",percentage:100},{title:"Maven, Gradle",percentage:100}],skill_soft:[{title:"Java Core",percentage:100},{title:"Java Core",percentage:100},{title:"Java Core",percentage:100},{title:"Java Core",percentage:100},{title:"Java Core",percentage:100}],projects:[{Name:"Gms SCM",Client:"Korea",Time:"7/2019 - 12/2019",Description:"",Responsibilities:"Senior Developer",Languages:"Java 8, Spring boot, Mybatis, MS SQL Server",Technologies:"HTML, CSS, JavaScript, Vue"},{Name:"Homepick",Client:"Korea",Time:"7/2019 - 12/2019",Description:"Convert Homepick homepage and Homepick api from PHP to Java + Vuejs",Responsibilities:"Senior Developer",Languages:"Java 8, Spring boot, Mybatis, MySQL",Technologies:"HTML, CSS, JavaScript, Vue"},{Name:"IMONE",Time:"7/2019 - 12/2019",Description:"Setup project, develop basic function and common function",Responsibilities:"Senior Developer",Languages:"Java 8, Spring boot, Mybatis, MySQL",Technologies:"HTML, CSS, JavaScript, Bootstrap 3, Jquery 2"},{Name:"cinoX",Client:"CJ CGV Viet Nam/Indonesia",Time:"06/2018 - 12/2019",Description:"\nCinoX is a web application for ERP system of CGV Vietnam and CGV Indonesia\nI’m in charge of purchasing module (manager raw material item, setup recipe and sale product (food and beverages), purchase request, purchase order, payment)\nI’m also in charge of accounting system manager module (this module synchronized with SAP system)\nMy commission is fix bug, get requirement of end user and develop new functions.\nI also support user every end of month to closing stock, check the system to make sure end user do in correct way",Responsibilities:"Senior Developer",Languages:"Java 8, Spring MVC, Mybatis, Oracle",Technologies:"HTML, CSS, JavaScript"},{Name:"Sansho",Client:"Viet Nam",Time:"11/2017 - 05/2018",Description:"\nA web application for accounting system\n- Manager purchase order invoice\n- Manager asset, liability, Common Stock, Retained Earnings accounts\n- Closing process monthly function: calculate revenue, expense, make\ndata for closing books",Responsibilities:"Senior Developer",Languages:"Java, Spring, Doma, PostgreSQL",Technologies:"HTML, CSS, JavaScript, AngularJs"},{Name:"ISEV",Client:"Viet Nam",Time:"06/2017 - 05/2018",Description:"A web application for human resource management system. In module I work, the tasks I usually attend to create requirement analysis document, develop new functions, maintain and fix bugs and test carefully before delivering the final version to the end user.",Responsibilities:"Developer",Languages:"Java, Spring, Doma, PostgreSQL",Technologies:"HTML, CSS, JavaScript, AngularJs"},{Name:"Dounet TMS",Client:"Viet Nam",Time:"06/2016 - 03/2017",Description:"A web application for Software Modeling & Process Innovation system",Responsibilities:"Developer",Languages:"Java, Spring MVC, PostgreSQL, Oracle",Technologies:"HTML, CSS, JavaScript, AngularJs"},{Name:"Nexttaurus",Client:"Japan",Time:"06/2014 - 05/2016",Description:"A system about sales management website for pharmacies. The tasks I usually attend to develop new functions, fix bugs and test before delivering the final version to the end user. Our customers are Japanese so the process must be absolutely accurate, so I learned how to work carefully and I can work in high-pressure environments.",Responsibilities:"Developer",Languages:"Java, PostgreSQL, Oracle",Technologies:"HTML, JavaScript"},{Name:"Sure HCS",Client:"Viet Nam",Time:"12/2012 - 05/2014",Description:"A web application for human resource management system",Responsibilities:"Developer",Languages:"C#, Asp.net, SQL Server",Technologies:"Entity Framework, Sencha touch"}],myprojects:[{Name:"NthSpringBoot",Link:"https://github.com/nguyenthanhhong/NthSpringBoot",Description:"build frame work for ERP project, support basic function",Languages:"Java 11, Spring Boot, Gradle, Mybatis, MySQL, PostgreSQL",Technologies:"HTML, CSS, JavaScript, Bootstrap 4, Jquery 3"},{Name:"NthVueJs",Link:"https://github.com/nguyenthanhhong/nth-vue",Description:"production-ready front-end solution for admin interfaces. It is based on vue and uses the UI Toolkit element-ui.",Technologies:"HTML, CSS, JavaScript, Vue",Review:"https://nguyenthanhhong.github.io/index"},{Name:"Taovetroi",Link:"https://play.google.com/store/apps/details?id=com.nthgames.taovetroi",Description:"control character to cross obstacles on the road, game play same way with flappy bird",Languages:"C#",Framework:"Unity",Review:"https://www.facebook.com/yeuchibi/videos/1759078520834098/"},{Name:"Chibimaker",Link:"https://play.google.com/store/apps/details?id=com.nthgames.chibimaker",Description:"girl game style, clothes style of chibi character",Languages:"C#",Framework:"Unity",Review:"https://www.youtube.com/watch?v=IfMuIzizR3w"}]}},methods:{format:function(e){return e<41?"Aware":e<71?"Knowledgeable":"Proficient"}}},n=o,r=(s("15e6"),s("2877")),c=Object(r["a"])(n,i,a,!1,null,"5af6b9c4",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-3622f642.7238ce16.js.map