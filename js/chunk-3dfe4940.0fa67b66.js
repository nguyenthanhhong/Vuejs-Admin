(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3dfe4940"],{"133e":function(e,a,t){},c185:function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("el-card",{staticClass:"box-card",staticStyle:{"text-align":"left"}},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",{staticStyle:{"font-weight":"900"}},[e._v("Form Elements")])]),t("el-row",[t("el-col",{attrs:{span:8}},[e._v(" Basic Input "),t("el-input",{attrs:{round:"",placeholder:"Please input"},model:{value:e.input1,callback:function(a){e.input1=a},expression:"input1"}}),e._v(" Number Input "),t("el-input-number",{attrs:{min:1,max:10},model:{value:e.num,callback:function(a){e.num=a},expression:"num"}})],1),t("el-col",{attrs:{span:8}},[e._v(" Disabled "),t("el-input",{attrs:{round:"",placeholder:"Please input",disabled:""}}),t("el-input-number",{attrs:{disabled:!0},model:{value:e.num,callback:function(a){e.num=a},expression:"num"}})],1),t("el-col",{attrs:{span:8}},[e._v(" Password box "),t("el-input",{attrs:{placeholder:"Please input password","show-password":""},model:{value:e.input2,callback:function(a){e.input2=a},expression:"input2"}})],1)],1),t("el-row",[t("el-col",{attrs:{span:8}},[e._v(" Textarea "),t("el-input",{attrs:{type:"textarea",rows:4,placeholder:"Please input"},model:{value:e.textarea,callback:function(a){e.textarea=a},expression:"textarea"}})],1),t("el-col",{attrs:{span:8}},[e._v(" Input with icon "),t("el-input",{attrs:{placeholder:"Type something","prefix-icon":"el-icon-search"},model:{value:e.input2,callback:function(a){e.input2=a},expression:"input2"}})],1),t("el-col",{attrs:{span:8}},[e._v(" Mixed input "),t("el-input",{attrs:{placeholder:"Please input"},model:{value:e.input1,callback:function(a){e.input1=a},expression:"input1"}},[t("template",{slot:"prepend"},[e._v("Http://")])],2),t("el-input",{attrs:{placeholder:"Please input"},model:{value:e.input2,callback:function(a){e.input2=a},expression:"input2"}},[t("template",{slot:"append"},[e._v(".com")])],2),t("el-input",{staticClass:"input-with-select",attrs:{placeholder:"Please input"},model:{value:e.input3,callback:function(a){e.input3=a},expression:"input3"}},[t("el-select",{attrs:{slot:"prepend",placeholder:"Select"},slot:"prepend",model:{value:e.select,callback:function(a){e.select=a},expression:"select"}},[t("el-option",{attrs:{label:"Restaurant",value:"1"}}),t("el-option",{attrs:{label:"Order No.",value:"2"}}),t("el-option",{attrs:{label:"Tel",value:"3"}})],1),t("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1)],1)],1),t("el-card",{staticClass:"box-card",staticStyle:{"text-align":"left"}},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",{staticStyle:{"font-weight":"900"}},[e._v("Checkbox and Radio")])]),t("el-col",{attrs:{span:12}},[t("el-radio",{attrs:{label:"1"},model:{value:e.radio,callback:function(a){e.radio=a},expression:"radio"}},[e._v("Checked")]),t("el-radio",{attrs:{label:"2"},model:{value:e.radio,callback:function(a){e.radio=a},expression:"radio"}},[e._v("Unchecked")]),t("el-radio",{attrs:{disabled:"",label:"3"},model:{value:e.radio,callback:function(a){e.radio=a},expression:"radio"}},[e._v("Disabled Unchecked")]),t("el-radio",{attrs:{disabled:"",label:"1"},model:{value:e.radio,callback:function(a){e.radio=a},expression:"radio"}},[e._v("Checked Disabled")])],1),t("el-col",{attrs:{span:6}},[t("div",[e._v("Radio Button")]),t("el-radio-group",{model:{value:e.radio1,callback:function(a){e.radio1=a},expression:"radio1"}},[t("el-radio-button",{attrs:{label:"New York"}}),t("el-radio-button",{attrs:{label:"Washington"}})],1)],1),t("el-col",{attrs:{span:6}},[t("div",[e._v("Radio With borders")]),t("el-radio",{attrs:{label:"1",border:""},model:{value:e.radio2,callback:function(a){e.radio2=a},expression:"radio2"}},[e._v("Option A")]),t("el-radio",{attrs:{label:"2",border:""},model:{value:e.radio2,callback:function(a){e.radio2=a},expression:"radio2"}},[e._v("Option B")])],1),t("el-col",{attrs:{span:12}},[t("el-checkbox-group",{model:{value:e.checkList,callback:function(a){e.checkList=a},expression:"checkList"}},[t("el-checkbox",{attrs:{label:"Option A"}}),t("el-checkbox",{attrs:{label:"Option B"}}),t("el-checkbox",{attrs:{label:"Option C"}}),t("el-checkbox",{attrs:{label:"disabled",disabled:""}}),t("el-checkbox",{attrs:{label:"selected and disabled",disabled:""}})],1)],1),t("el-col",{attrs:{span:6}},[t("div",[e._v("Checked Button")]),t("el-checkbox-group",{model:{value:e.checkboxGroup1,callback:function(a){e.checkboxGroup1=a},expression:"checkboxGroup1"}},e._l(e.cities,(function(a){return t("el-checkbox-button",{key:a,attrs:{label:a}},[e._v(e._s(a))])})),1)],1),t("el-col",{attrs:{span:6}},[t("div",[e._v("Checked With borders")]),t("el-checkbox-group",{model:{value:e.checkboxGroup1,callback:function(a){e.checkboxGroup1=a},expression:"checkboxGroup1"}},e._l(e.cities,(function(a){return t("el-checkbox",{key:a,attrs:{label:a,border:""}},[e._v(e._s(a))])})),1)],1)],1),t("el-card",{staticClass:"box-card",staticStyle:{"text-align":"left"}},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",{staticStyle:{"font-weight":"900"}},[e._v("Toggle Switches")])]),t("el-col",{attrs:{span:4}},[t("el-switch",{model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}})],1),t("el-col",{attrs:{span:4}},[t("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1),t("el-col",{attrs:{span:6}},[t("el-switch",{attrs:{"active-text":"Pay by month","inactive-text":"Pay by year"},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}})],1),t("el-col",{attrs:{span:6}},[t("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"Pay by month","inactive-text":"Pay by year"},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1),t("el-col",{attrs:{span:4}},[t("el-switch",{attrs:{disabled:""},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}})],1)],1),t("el-card",{staticClass:"box-card",staticStyle:{"text-align":"left"}},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",{staticStyle:{"font-weight":"900"}},[e._v("Date/Time Picker")])]),t("el-col",{attrs:{span:4}},[t("div",[e._v("Arbitrary time picker")]),t("el-time-picker",{attrs:{"picker-options":{selectableRange:"18:30:00 - 20:30:00"},placeholder:"Arbitrary time"},model:{value:e.timeValue1,callback:function(a){e.timeValue1=a},expression:"timeValue1"}})],1),t("el-col",{attrs:{span:18}},[t("div",[e._v("Time range")]),t("el-time-select",{attrs:{placeholder:"Start time","picker-options":{start:"08:30",step:"00:15",end:"18:30"}},model:{value:e.startTime,callback:function(a){e.startTime=a},expression:"startTime"}}),e._v("- "),t("el-time-select",{attrs:{placeholder:"End time","picker-options":{start:"08:30",step:"00:15",end:"18:30",minTime:e.startTime}},model:{value:e.endTime,callback:function(a){e.endTime=a},expression:"endTime"}})],1),t("el-col",{attrs:{span:4}},[t("div",[e._v("Week")]),t("el-date-picker",{attrs:{type:"week",format:"Week WW",placeholder:"Pick a week"},model:{value:e.weekvalue,callback:function(a){e.weekvalue=a},expression:"weekvalue"}})],1),t("el-col",{attrs:{span:4}},[t("div",[e._v("Month")]),t("el-date-picker",{attrs:{type:"month",placeholder:"Pick a month"},model:{value:e.monthvalue,callback:function(a){e.monthvalue=a},expression:"monthvalue"}})],1),t("el-col",{attrs:{span:4}},[t("div",[e._v("Year")]),t("el-date-picker",{attrs:{type:"year",placeholder:"Pick a year"},model:{value:e.yearvalue,callback:function(a){e.yearvalue=a},expression:"yearvalue"}})],1),t("el-col",{attrs:{span:4}},[t("div",[e._v("Dates")]),t("el-date-picker",{attrs:{type:"dates",placeholder:"Pick one or more dates"},model:{value:e.datesvalue,callback:function(a){e.datesvalue=a},expression:"datesvalue"}})],1),t("el-col",{attrs:{span:8}},[t("div",[e._v("Date Range")]),t("el-date-picker",{attrs:{type:"daterange","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date"},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}})],1)],1)],1)},o=[],i={data:function(){return{num:1,input1:"",input2:"",input3:"",select:"",textarea:"",radio:"1",radio1:"New York",radio2:"1",checkList:["selected and disabled","Option A"],checkboxGroup1:["Shanghai"],cities:["Shanghai","Beijing"],value1:!0,value2:!1,timeValue1:new Date(2016,9,10,18,40),startTime:"",endTime:"",weekvalue:"",monthvalue:"",yearvalue:"",datesvalue:""}},methods:{}},s=i,c=(t("e029"),t("2877")),n=Object(c["a"])(s,l,o,!1,null,"4c4b013a",null);a["default"]=n.exports},e029:function(e,a,t){"use strict";var l=t("133e"),o=t.n(l);o.a}}]);
//# sourceMappingURL=chunk-3dfe4940.0fa67b66.js.map