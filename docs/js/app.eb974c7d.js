(function(t){function e(e){for(var o,n,l=e[0],r=e[1],c=e[2],d=0,u=[];d<l.length;d++)n=l[d],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&u.push(a[n][0]),a[n]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);v&&v(e);while(u.length)u.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],o=!0,l=1;l<s.length;l++){var r=s[l];0!==a[r]&&(o=!1)}o&&(i.splice(e--,1),t=n(n.s=s[0]))}return t}var o={},a={app:0},i=[];function n(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=o,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(s,o,function(e){return t[e]}.bind(null,o));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var v=r;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0510":function(t,e,s){t.exports=s.p+"img/autumn-studio-PaM7SD5wM6g-unsplash.bb161c02.jpg"},"2d5c":function(t,e,s){},"538a":function(t,e,s){"use strict";s("6a29")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var o=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[s("v-container",[s("v-list-item",[s("v-list-item-content",[s("v-list-item-title",{staticClass:"title grey--text text--darken-2"},[t._v(" Navigation lists ")])],1)],1),s("v-divider"),s("v-list",{attrs:{dense:"",nav:""}},t._l(t.nav_list,(function(e){return s("v-list-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:e.scrollTo,duration:t.scroll_dur},expression:"{ element: nav_item.scrollTo, duration: scroll_dur }"}],key:e.name},[s("v-list-item-icon",[s("v-icon",[t._v(t._s(e.icon))])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(t._s(e.name))])],1)],1)})),1)],1)],1),s("v-app-bar",{attrs:{app:"",light:""}},[s("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:t.draw}}),s("v-toolbar-title",[t._v("Vuetify")]),s("v-spacer"),s("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[s("v-btn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#home",duration:t.scroll_dur},expression:"{ element: '#home', duration: scroll_dur }"}]},[t._v("HOME")]),s("v-btn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#about",duration:t.scroll_dur},expression:"{ element: '#about', duration: scroll_dur }"}],attrs:{text:""}},[t._v("ABOUT")]),s("v-btn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#works",duration:t.scroll_dur},expression:"{ element: '#works', duration: scroll_dur }"}],attrs:{text:""}},[t._v("WORKS")]),s("v-btn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#history",duration:t.scroll_dur},expression:"{ element: '#history', duration: scroll_dur }"}],attrs:{text:""}},[t._v("HISTORY")])],1)],1),s("v-main",{staticClass:"main-screen"},[s("Home",{attrs:{id:"home"}}),s("About",{attrs:{id:"about"}}),s("Works",{attrs:{id:"works"}}),s("History",{attrs:{id:"history"}})],1),s("v-footer",{attrs:{color:"primary",dark:"",app:"",inset:"",absolute:""}},[t._v(" Vuetify ")])],1)},i=[],n=(s("f5df1"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"home",style:{height:this.windowHeight+"px",width:this.$vuetify.breakpoint.smAndDown?"100%":"50%"},attrs:{"mt-3":"","mt-md-10":""}},[s("transition",{attrs:{name:"code-show"},on:{"after-enter":t.endCodeShow}},[t.type_completed?s("p",{staticClass:"absolute back-code"},[s("pre",[t._v("<"),s("span",{staticClass:"bl"},[t._v("h1")]),t._v(" "),s("span",{staticClass:"bl2"},[t._v("style")]),t._v('="'),s("span",{staticClass:"bl2"},[t._v("color")]),t._v(": "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.title_color,expression:"title_color"}],style:t.input_style_obj,attrs:{size:"4"},domProps:{value:t.title_color},on:{input:function(e){e.target.composing||(t.title_color=e.target.value)}}}),t._v('">'),s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],style:t.input_style_obj,attrs:{size:"7"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v("<"),s("span",{staticClass:"bl"},[t._v("/h1")]),t._v(">")]),s("pre",[t._v("<"),s("span",{staticClass:"bl"},[t._v("v-row")]),t._v(" "),s("span",{staticClass:"bl2"},[t._v("justify")]),t._v("="),s("span",{staticClass:"or"},[t._v('"center"')]),t._v(" "),s("span",{staticClass:"bl2"},[t._v("class")]),t._v("="),s("span",{staticClass:"or"},[t._v('"btn_list"')]),t._v(">")]),s("pre",[t._v("     <"),s("span",{staticClass:"bl"},[t._v("v-col")]),t._v(" "),s("span",{staticClass:"bl2"},[t._v("v-for")]),t._v('="('),s("span",{staticClass:"bl"},[t._v("btn, i")]),t._v(") in "),s("span",{staticClass:"bl2"},[t._v("btn_list")]),t._v('" :'),s("span",{staticClass:"bl2"},[t._v("key")]),t._v('="'),s("span",{staticClass:"bl2"},[t._v("i")]),t._v('"')]),s("pre",[t._v("           "),s("span",{staticClass:"bl2"},[t._v("class")]),t._v("="),s("span",{staticClass:"or"},[t._v('"text-center"')]),t._v(" "),s("span",{staticClass:"bl2"},[t._v("clos")]),t._v("="),s("span",{staticClass:"or"},[t._v('"12"')]),t._v(" "),s("span",{staticClass:"bl2"},[t._v("md")]),t._v("="),s("span",{staticClass:"or"},[t._v('"6"')])]),s("pre",[t._v("           "),s("span",{staticClass:"bl2"},[t._v("style")]),t._v('="'),s("span",{staticClass:"bl2"},[t._v("margin")]),t._v(": "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.margin_input,expression:"margin_input"}],style:t.input_style_obj,attrs:{type:"number",min:"0",max:"12"},domProps:{value:t.margin_input},on:{input:function(e){e.target.composing||(t.margin_input=e.target.value)}}}),t._v('"')]),s("pre",[t._v("     >")]),s("pre",[t._v("           <"),s("span",{staticClass:"bl"},[t._v("v-btn")]),t._v(" "),s("span",{staticClass:"bl2"},[t._v("block outlined class")]),t._v("="),s("span",{staticClass:"or"},[t._v('"ma-2"')])]),s("pre",[t._v("               "),s("span",{staticClass:"bl2"},[t._v(":color")]),t._v("="),s("span",{staticClass:"or"},[t._v('"btn.color"')])]),s("pre",[t._v("           >")]),s("pre",[t._v("               {{ "),s("span",{staticClass:"bl2"},[t._v("btn.text")]),t._v(" }}")]),s("pre",[t._v("           <"),s("span",{staticClass:"bl"},[t._v("v-btn")]),t._v(">")]),s("pre",[t._v("     </"),s("span",{staticClass:"bl"},[t._v("v-col")]),t._v(">")]),s("pre",[t._v("</"),s("span",{staticClass:"bl"},[t._v("v-row")]),t._v(">")]),s("pre",[s("br"),t._v("<"),s("span",{staticClass:"bl"},[t._v("script")]),t._v(">")]),s("pre",[t._v("data() {")]),s("pre",[t._v("   return {")]),s("pre",[t._v("       btn_list: [")]),s("pre",{staticClass:"text-caption"},[t._v("{text: "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.btn_list[0].text,expression:"btn_list[0].text"}],style:t.input_style_obj,attrs:{size:"12"},domProps:{value:t.btn_list[0].text},on:{input:function(e){e.target.composing||t.$set(t.btn_list[0],"text",e.target.value)}}}),t._v(" color: 'indigo', scrollTo: "),s("v-select",{staticClass:"d-inline-flex",staticStyle:{width:"80px"},attrs:{items:t.toList,dense:""},model:{value:t.btn_list[0].scrollTo,callback:function(e){t.$set(t.btn_list[0],"scrollTo",e)},expression:"btn_list[0].scrollTo"}}),t._v("},")],1),s("pre",{staticClass:"text-caption"},[t._v("{text: "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.btn_list[1].text,expression:"btn_list[1].text"}],style:t.input_style_obj,attrs:{size:"12"},domProps:{value:t.btn_list[1].text},on:{input:function(e){e.target.composing||t.$set(t.btn_list[1],"text",e.target.value)}}}),t._v(" color: 'indigo', scrollTo: "),s("v-select",{staticClass:"d-inline-flex",staticStyle:{width:"80px"},attrs:{items:t.toList,dense:""},model:{value:t.btn_list[1].scrollTo,callback:function(e){t.$set(t.btn_list[1],"scrollTo",e)},expression:"btn_list[1].scrollTo"}}),t._v("},")],1),s("pre",{staticClass:"text-caption"},[t._v("{text: "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.btn_list[2].text,expression:"btn_list[2].text"}],style:t.input_style_obj,attrs:{size:"12"},domProps:{value:t.btn_list[2].text},on:{input:function(e){e.target.composing||t.$set(t.btn_list[2],"text",e.target.value)}}}),t._v(" color: 'indigo', scrollTo: "),s("v-select",{staticClass:"d-inline-flex",staticStyle:{width:"80px"},attrs:{items:t.toList,dense:""},model:{value:t.btn_list[2].scrollTo,callback:function(e){t.$set(t.btn_list[2],"scrollTo",e)},expression:"btn_list[2].scrollTo"}}),t._v("},")],1),s("pre",{staticClass:"text-caption"},[t._v("{text: "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.btn_list[3].text,expression:"btn_list[3].text"}],style:t.input_style_obj,attrs:{size:"12"},domProps:{value:t.btn_list[3].text},on:{input:function(e){e.target.composing||t.$set(t.btn_list[3],"text",e.target.value)}}}),t._v(" color: 'indigo', scrollTo: "),s("v-select",{staticClass:"d-inline-flex",staticStyle:{width:"80px"},attrs:{items:t.toList,dense:""},model:{value:t.btn_list[3].scrollTo,callback:function(e){t.$set(t.btn_list[3],"scrollTo",e)},expression:"btn_list[3].scrollTo"}}),t._v("},")],1)]):t._e()]),t.type_completed?t._e():s("vue-typed-js",{attrs:{strings:t.typed_strings,"type-speed":0,contentType:"null",fadeOutDelay:0,fadeOut:!0,showCursor:!1},on:{onStringTyped:function(e){return t.typeComplete()}}},[s("pre",{staticClass:"typing"})]),s("v-row",{staticClass:"my-16",attrs:{justify:"center"}},[s("transition",{attrs:{name:"slide-fade"}},[s("h1",{directives:[{name:"show",rawName:"v-show",value:t.type_completed,expression:"type_completed"}],staticClass:"text-h2 font-weight-bold",style:{color:t.title_color}},[t._v(t._s(t.title))])])],1),s("transition",{attrs:{name:"slide-fade"}},[s("v-row",{directives:[{name:"show",rawName:"v-show",value:t.type_completed,expression:"type_completed"}],staticClass:"btn_list pt-md-15",style:t.$vuetify.breakpoint.smAndDown?"width:50%":"width:100%",attrs:{justify:"center"}},[t._l(t.btn_list,(function(e,o){return s("v-col",{key:o,staticClass:"text-center px-0 px-sm-3",class:"ma-"+t.margin_input,attrs:{block:"",cols:"12",md:"6"}},[s("v-btn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#"+e.scrollTo,duration:2e3},expression:"{ element: '#' + btn.scrollTo, duration: 2000 }"}],staticClass:"my-2 mx-0",attrs:{block:"",outlined:"",color:e.color}},[t._v(" "+t._s(e.text)+" ")])],1)})),s("v-col",{staticClass:"mt-6",attrs:{cols:"12",md:"8"}},[s("v-btn",{attrs:{rounded:"",color:"info",dark:"",block:""},on:{click:t.resetCss}},[t._v("reset css")])],1)],2)],1)],1)}),l=[],r="\n<h1 style=\"color: navy\">Hello : )</h1>\n<v-row justify=\"center\" class=\"btn_list\">\n     <v-col v-for=\"(btn, i) in btn_list\" :key=\"i\"\n           class=\"text-center\" clos=\"12\" md=\"6\"\n           style=\"margin: 0 \"\n     >\n           <v-btn block outlined class=\"ma-2\"\n               :color=\"btn.color\"\n           >\n               {{ btn.text }}\n           <v-btn>\n     </v-col>\n</v-row>\n\n<script>\ndata() {\n   return {\n       btn_list: [\n\n{text: 'VIEW MY HOME' color: 'indigo', scrollTo: 'home'},\n\n{text: 'VIEW MY ABOUTME' color: 'indigo', scrollTo: 'about'},\n\n{text: 'VIEW MY WORKS' color: 'indigo', scrollTo: 'works'},\n\n{text: 'VIEW MY HISTORY' color: 'indigo', scrollTo: 'history'},\n";r="a";var c="Hello : )",v="navy",d="0",u=["VIEW MY HOME","VIEW MY ABOUTME","VIEW MY WORKS","VIEW MY HISTORY"],p=["home","about","works","history"],m={name:"Home",data:function(){return{windowHeight:600,title:c,title_color:v,margin_input:d,toList:["home","about","works","history"],type_completed:!1,input_style_obj:{transition:"2s",border:0,opacity:.8},typed_strings:[r,""],btn_list:[{text:u[0],color:"indigo",scrollTo:p[0]},{text:u[1],color:"indigo",scrollTo:p[1]},{text:u[2],color:"indigo",scrollTo:p[2]},{text:u[3],color:"indigo",scrollTo:p[3]}]}},methods:{moveIcon:function(t){this.$refs.icon1.moveTo(t.offsetX,t.offsetY)},typeComplete:function(){this.type_completed=!0},endCodeShow:function(){console.log(this.input_style_obj.border),this.input_style_obj.border="3px solid #6666ff"},resetCss:function(){this.title=c,this.title_color=v,this.margin_input=d,this.btn_list=[{text:u[0],color:"indigo",scrollTo:p[0]},{text:u[1],color:"indigo",scrollTo:p[1]},{text:u[2],color:"indigo",scrollTo:p[2]},{text:u[3],color:"indigo",scrollTo:p[3]}]}},mounted:function(){this.windowHeight=window.innerHeight}},_=m,b=(s("538a"),s("2877")),f=s("6544"),h=s.n(f),x=s("8336"),g=s("62ad"),y=s("a523"),w=s("0fd9"),C=s("b974"),T=Object(b["a"])(_,n,l,!1,null,"7e5b0f3c",null),V=T.exports;h()(T,{VBtn:x["a"],VCol:g["a"],VContainer:y["a"],VRow:w["a"],VSelect:C["a"]});var k=s("f820"),j=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"py-15"},[o("h1",{staticClass:"text-center mt-0 py-15"},[t._v("Works")]),o("v-dialog",{attrs:{"max-width":"85vw"},model:{value:t.dialog1,callback:function(e){t.dialog1=e},expression:"dialog1"}},[o("v-card",[o("v-row",[o("v-col",{attrs:{md:"6"}},[o("div",[o("v-card-title",[t._v("My Portfolio")]),o("v-card-text",{staticClass:"grey--text text--darken-3"},[t._v("当サイトです。vue.jsを利用し、ランディングページ風のポートフォリオを作成しました。トップページはコーディングに馴染みのない人でも気軽にHTMLに触れられるようにリアクティブな機能を取り入れました。")]),o("v-divider",{staticClass:"mx-4"}),o("v-card-title",[t._v("使用言語")]),o("v-card-text",{staticClass:"grey--text text--darken-3"},[t._v("Vue.js, Vuetify, HTML/CSS, Docker")])],1)]),o("v-col",{attrs:{md:"6"}},[o("v-img",{staticClass:"mt-md-8 mb-5",attrs:{src:s("7bbb"),height:"300",contain:""}})],1)],1)],1)],1),o("v-dialog",{attrs:{"max-width":"85vw"},model:{value:t.dialog_progress,callback:function(e){t.dialog_progress=e},expression:"dialog_progress"}},[o("v-card",[o("v-row",[o("v-col",{attrs:{cols:"12",md:"6"}},[o("div",[o("v-card-title",[t._v("On Progress...")]),o("v-card-text",{staticClass:"grey--text text--darken-3"},[t._v("製作中です。")]),o("v-divider",{staticClass:"mx-4"}),o("v-card-title",[t._v("使用言語")]),o("v-card-text",{staticClass:"grey--text text--darken-3"},[t._v("...")])],1)]),o("v-spacer"),o("v-col",{attrs:{cols:"12",md:"4"}},[o("div",{staticClass:"grey lighten-3 ma-5",staticStyle:{height:"300px"}})])],1)],1)],1),o("v-row",{staticClass:"mb-15 p-15",attrs:{justify:"space-around"}},[o("v-col",{attrs:{cols:"9",sm:"4"}},[o("v-lazy",{attrs:{options:{threshold:.5},"min-height":"200",transition:"fade-transition"}},[o("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hover;return[o("v-card",{staticClass:"py-sm-10",class:{"on-hover":a},attrs:{elevation:a?12:2}},[o("v-row",{attrs:{justify:"center"}},[o("v-col",{attrs:{cols:"12"}},[o("v-img",{attrs:{src:s("7bbb"),height:t.$vuetify.breakpoint.smAndDown?"160px":"200px",elevation:a?12:2,contain:""},on:{click:function(e){e.stopPropagation(),t.dialog1=!0}}})],1)],1)],1)]}}])})],1),o("p",{staticClass:"text-center"},[t._v("This site")])],1),o("v-col",{staticClass:"mb-5 mb-sm-0",attrs:{cols:"9",sm:"3"}},[o("v-lazy",{attrs:{options:{threshold:.5},"min-height":"200",transition:"fade-transition"}},[o("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.hover;return[o("v-card",{class:{"on-hover":s},attrs:{elevation:s?12:2}},[o("v-row",{staticStyle:{height:"200px"},attrs:{justify:"center","align-content":"center",elevation:s?12:2},on:{click:function(e){e.stopPropagation(),t.dialog_progress=!0}}},[o("v-col",{attrs:{cols:"12"}},[o("p",{staticClass:"text-center"},[t._v("on progress...")])])],1),o("p",{staticClass:"text-center"},[t._v("Work")])],1)]}}])})],1)],1),o("v-col",{staticClass:"mb-5 mb-sm-0",attrs:{cols:"9",sm:"3"}},[o("v-lazy",{attrs:{options:{threshold:.5},"min-height":"200",transition:"fade-transition"}},[o("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.hover;return[o("v-card",{class:{"on-hover":s},attrs:{elevation:s?12:2}},[o("v-row",{staticStyle:{height:"200px"},attrs:{justify:"center","align-content":"center",elevation:s?12:2},on:{click:function(e){e.stopPropagation(),t.dialog_progress=!0}}},[o("v-col",{attrs:{cols:"12"}},[o("p",{staticClass:"text-center"},[t._v("on progress...")])])],1),o("p",{staticClass:"text-center"},[t._v("Work")])],1)]}}])})],1)],1)],1)],1)},O=[],S={data:function(){return{dialog1:!1,dialog_progress:!1,windowHeight:600}},methods:{},mounted:function(){this.windowHeight=window.innerHeight}},H=S,I=s("b0af"),P=s("99d9"),M=s("169a"),E=s("ce7e"),L=s("ce87"),$=s("adda"),W=s("b687"),N=s("2fa4"),A=Object(b["a"])(H,j,O,!1,null,null,null),Y=A.exports;h()(A,{VCard:I["a"],VCardText:P["a"],VCardTitle:P["b"],VCol:g["a"],VContainer:y["a"],VDialog:M["a"],VDivider:E["a"],VHover:L["a"],VImg:$["a"],VLazy:W["a"],VRow:w["a"],VSpacer:N["a"]});var z=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"history"},[o("v-parallax",{attrs:{dark:"",height:"1500",src:s("0510")}},[o("v-container",{staticClass:"pl-0"},[o("h1",{staticClass:"text-center mt-0 pt-4"},[t._v("History")]),o("v-timeline",{attrs:{"align-top":"",dense:t.$vuetify.breakpoint.smAndDown}},t._l(t.items,(function(e,s){return o("v-timeline-item",{key:s,attrs:{color:e.color,icon:e.icon,"fill-dot":""}},[o("v-lazy",{attrs:{options:{threshold:.5},"min-height":"200",transition:"fade-transition"}},[o("div",[o("v-card",{attrs:{color:e.color,dark:""}},[o("v-card-title",{staticClass:"title text-subtitle-1 text-sm-h5"},[t._v(t._s(e.title))]),o("v-card-text",{staticClass:"white text--primary pt-4"},[o("p",{staticClass:"text-subtitle-2 text-sm-h6"},[t._v(t._s(e.subtitle))]),o("p",{staticClass:"ml-2 text-caption text-sm-body-1"},[t._v(t._s(e.text))])])],1),o("v-list",{attrs:{dense:"",color:"transparent"}},[o("v-list-item-group",{attrs:{color:"primary"}},t._l(e.details,(function(e,s){return o("v-list-item",{key:s,staticClass:"pl-3"},[o("v-list-item-icon",{staticClass:"mr-0"},[o("v-icon",{staticClass:"white--text text-body-2",domProps:{textContent:t._s("mdi-minus")}})],1),o("v-list-item-content",[o("v-list-item-title",{staticClass:"white--text detail font-weight-bold"},[t._v(t._s(e))])],1)],1)})),1)],1)],1)])],1)})),1)],1)],1)],1)},D=[],B={data:function(){return{items:[{color:"red lighten-2",icon:"mdi-star",title:"High Shool 2011-2014",subtitle:"大阪府立池田高等学校",text:"部活と時に勉学に励む無難な学生生活を過ごす。",details:["バスケットボール部に所属 2011-2012","退部し、アメフト部に所属 2012-"]},{color:"red lighten-2",icon:"mdi-star",title:"University 2014-2018",subtitle:"関西大学 外国語学部",text:"サークルには所属せずジムに通い詰める。また、学部のカリキュラムでアメリカに留学し、ジムに通い詰める。",details:["慣れない英語の授業に苦難 2014","アメリカに留学 2015","ベンチプレス95kg記録 2016","TOEIC 920点取得 2017"]},{color:"red lighten-2",icon:"mdi-star",title:"Company 2018-2019",subtitle:"SIerの会社",text:"C言語とC++の研修を終えた後、C#で業務ツールを作成する。",details:[]},{color:"red lighten-2",icon:"mdi-star",title:"Company 2019-",subtitle:"人材系の会社",text:"社内SEとして業務系ツールの作成、WEBアプリの開発、期間システムの調整を行う",details:["初めてのWEB系言語(PHP) 2019","慣れないgitに大苦戦 2019","フロントエンドの勉強開始 2020","Pythonに着手 2020","Vueに着手 2021"]}]}}},R=B,U=(s("7b6f"),s("132d")),K=s("8860"),J=s("da13"),X=s("5d23"),F=s("1baa"),G=s("34c3"),q=s("8b9c"),Q=s("8414"),Z=s("1e06"),tt=Object(b["a"])(R,z,D,!1,null,"f9889c0a",null),et=tt.exports;h()(tt,{VCard:I["a"],VCardText:P["a"],VCardTitle:P["b"],VContainer:y["a"],VIcon:U["a"],VLazy:W["a"],VList:K["a"],VListItem:J["a"],VListItemContent:X["a"],VListItemGroup:F["a"],VListItemIcon:G["a"],VListItemTitle:X["b"],VParallax:q["a"],VTimeline:Q["a"],VTimelineItem:Z["a"]});var st={components:{About:k["default"],Home:V,Works:Y,History:et},data:function(){return{drawer:!1,items:["a","b","c","d","e"],nav_list:[{name:"HOME",icon:"mdi-vuetify",link:"/",scrollTo:"#home"},{name:"ABOUT",icon:"mdi-cogs",link:"/about",scrollTo:"#about"},{name:"WORKS",icon:"mdi-palette",link:"/works",scrollTo:"#works"},{name:"HISTORY",icon:"mdi-view-dashboard",link:"/history",scrollTo:"#history"}],scroll_dur:1e3}},methods:{draw:function(){console.log(this.drawer),this.drawer=!this.drawer,console.log(this.drawer)},moveIcon:function(t){this.$refs.icon1.moveTo(t.offsetX,t.offsetY)}}},ot=st,at=(s("6ab4"),s("7496")),it=s("40dc"),nt=s("5bc1"),lt=s("553a"),rt=s("f6c4"),ct=s("f774"),vt=s("2a7f"),dt=Object(b["a"])(ot,a,i,!1,null,"2c95f309",null),ut=dt.exports;h()(dt,{VApp:at["a"],VAppBar:it["a"],VAppBarNavIcon:nt["a"],VBtn:x["a"],VContainer:y["a"],VDivider:E["a"],VFooter:lt["a"],VIcon:U["a"],VList:K["a"],VListItem:J["a"],VListItemContent:X["a"],VListItemIcon:G["a"],VListItemTitle:X["b"],VMain:rt["a"],VNavigationDrawer:ct["a"],VSpacer:N["a"],VToolbarItems:vt["a"],VToolbarTitle:vt["b"]});var pt=s("f309");o["a"].use(pt["a"]);var mt=new pt["a"]({}),_t=(s("d3b7"),s("3ca3"),s("ddb0"),s("8c4f"));o["a"].use(_t["a"]);var bt=[{path:"/",name:"Home",component:V},{path:"/about",name:"About",component:function(){return Promise.resolve().then(s.bind(null,"f820"))}}],ft=new _t["a"]({mode:"history",base:"",routes:bt}),ht=ft,xt=s("f13c"),gt=s.n(xt),yt=window["VueTypedJs"].default;o["a"].use(yt),o["a"].config.productionTip=!1,o["a"].use(gt.a),new o["a"]({vuetify:mt,router:ht,render:function(t){return t(ut)}}).$mount("#app")},"6a29":function(t,e,s){},"6ab4":function(t,e,s){"use strict";s("c155")},"7b6f":function(t,e,s){"use strict";s("2d5c")},"7bbb":function(t,e,s){t.exports=s.p+"img/this-site.4710fd5c.png"},c155:function(t,e,s){},f820:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"about"},[o("v-parallax",{attrs:{dark:"",height:t.windowHeight,src:s("0510")}},[o("div",{staticClass:"text-center"},[o("h1",[t._v("about me")]),o("p",[t._v(" 大阪出身")]),o("p",[t._v("あいうえお")])])])],1)},a=[],i={data:function(){return{windowHeight:600}},mounted:function(){this.windowHeight=window.innerHeight}},n=i,l=s("2877"),r=s("6544"),c=s.n(r),v=s("8b9c"),d=Object(l["a"])(n,o,a,!1,null,null,null);e["default"]=d.exports;c()(d,{VParallax:v["a"]})}});
//# sourceMappingURL=app.eb974c7d.js.map