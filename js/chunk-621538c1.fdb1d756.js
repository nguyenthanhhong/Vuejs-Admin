(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-621538c1"],{"4fed":function(e,t,a){"use strict";var s=a("7f1f"),l=a.n(s);l.a},"7f1f":function(e,t,a){},b1d0:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticStyle:{"font-weight":"900"}},[e._v("Table with fixed columns and header")])]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",height:"300"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",label:e.$t("NO"),width:"45",align:"center"}}),a("el-table-column",{attrs:{type:"index",fixed:"",align:"center",label:e.$t("NO"),width:"45"}}),a("el-table-column",{attrs:{fixed:"",prop:"date",label:"Date",width:"150"}}),a("el-table-column",{attrs:{prop:"name",label:"Name",width:"120"}}),a("el-table-column",{attrs:{prop:"state",label:"State",width:"120"}}),a("el-table-column",{attrs:{prop:"city",label:"City",width:"120"}}),a("el-table-column",{attrs:{prop:"address",label:"Address",width:"300"}}),a("el-table-column",{attrs:{prop:"zip",label:"Zip",width:"120"}})],1),a("el-row",{staticStyle:{"padding-top":"10px","background-color":"aliceblue"}},[a("el-scrollbar",{staticStyle:{height:"100px"},attrs:{"wrap-class":"scrollbar-wrapper"}},[e._v(e._s(e.tableResult))])],1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticStyle:{"font-weight":"900"}},[e._v("Grouping table head")])]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableGroupData,height:"410"}},[a("el-table-column",{attrs:{prop:"date",label:"Date",width:"150"}}),a("el-table-column",{attrs:{label:"Delivery Info"}},[a("el-table-column",{attrs:{prop:"name",label:"Name",width:"120"}}),a("el-table-column",{attrs:{label:"Address Info"}},[a("el-table-column",{attrs:{prop:"state",label:"State",width:"120"}}),a("el-table-column",{attrs:{prop:"city",label:"City",width:"120"}}),a("el-table-column",{attrs:{prop:"address",label:"Address",width:"300"}}),a("el-table-column",{attrs:{prop:"zip",label:"Zip",width:"120"}})],1)],1)],1)],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticStyle:{"font-weight":"900"}},[e._v("Summary row")])]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableSumData,"show-summary":"",height:"300"}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"name",label:"Name"}}),a("el-table-column",{attrs:{prop:"amount1",sortable:"",label:"Amount 1"}}),a("el-table-column",{attrs:{prop:"amount2",sortable:"",label:"Amount 2"}}),a("el-table-column",{attrs:{prop:"amount3",sortable:"",label:"Amount 3"}})],1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticStyle:{"font-weight":"900"}},[e._v("Expandable row")])]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableExpandData,height:"300"}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("p",[e._v("State: "+e._s(t.row.state))]),a("p",[e._v("City: "+e._s(t.row.city))]),a("p",[e._v("Address: "+e._s(t.row.address))]),a("p",[e._v("Zip: "+e._s(t.row.zip))])]}}])}),a("el-table-column",{attrs:{label:"Date",prop:"date"}}),a("el-table-column",{attrs:{label:"Name",prop:"name"}})],1)],1)],1)],1)],1)},l=[],o={name:"basictables",data:function(){return{tableData:[{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-08",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-06",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-07",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-08",name:"Thomas",state:"California",city:"Los Angeles",address:"No. 109, Grove St, Los Angeles",zip:"CA 10036"}],tableGroupData:[{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-08",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-06",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-07",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"}],tableSumData:[{id:"12987122",name:"Tom",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"Tom",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"Tom",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"Tom",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"Tom",amount1:"539",amount2:"4.1",amount3:15}],tableExpandData:[{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-08",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-06",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-07",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"}],tableResult:""}},methods:{handleSelectionChange:function(e){this.tableResult=e}}},n=o,r=(a("4fed"),a("2877")),i=Object(r["a"])(n,s,l,!1,null,"09d108eb",null);t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-621538c1.fdb1d756.js.map