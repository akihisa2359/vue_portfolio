(function(t){function e(e){for(var a,n,r=e[0],l=e[1],c=e[2],d=0,u=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&u.push(o[n][0]),o[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);v&&v(e);while(u.length)u.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,r=1;r<s.length;r++){var l=s[r];0!==o[l]&&(a=!1)}a&&(i.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},o={app:0},i=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var v=l;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0510":function(t,e,s){t.exports=s.p+"img/autumn-studio-PaM7SD5wM6g-unsplash.bb161c02.jpg"},"0fca":function(t,e,s){},"2e1c":function(t,e,s){"use strict";s("47a1")},"3ce1":function(t,e,s){},"47a1":function(t,e,s){},"49d4":function(t,e,s){"use strict";s("9958")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[s("v-container",[s("v-list-item",[s("v-list-item-content",[s("v-list-item-title",{staticClass:"title grey--text text--darken-2"},[t._v(" Navigation lists ")])],1)],1),s("v-divider"),s("v-list",{attrs:{dense:"",nav:""}},t._l(t.nav_list,(function(e){return s("v-list-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:e.scrollTo,duration:t.scroll_dur},expression:"{ element: nav_item.scrollTo, duration: scroll_dur }"}],key:e.name},[s("v-list-item-icon",[s("v-icon",[t._v(t._s(e.icon))])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(t._s(e.name))])],1)],1)})),1)],1)],1),s("v-app-bar",{attrs:{app:"",light:""}},[s("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:t.draw}}),s("v-toolbar-title",{staticClass:"hidden-sm-and-down"},[s("v-btn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#home",duration:t.scroll_dur},expression:"{ element: '#home', duration: scroll_dur }"}],attrs:{icon:!0}},[s("v-icon",[t._v("mdi-home")])],1)],1),s("v-spacer"),s("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[s("v-btn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#home",duration:t.scroll_dur},expression:"{ element: '#home', duration: scroll_dur }"}],attrs:{text:""}},[t._v("HOME")]),s("v-btn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#about",duration:t.scroll_dur},expression:"{ element: '#about', duration: scroll_dur }"}],attrs:{text:""}},[t._v("ABOUT")]),s("v-btn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#works",duration:t.scroll_dur},expression:"{ element: '#works', duration: scroll_dur }"}],attrs:{text:""}},[t._v("WORKS")]),s("v-btn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#history",duration:t.scroll_dur},expression:"{ element: '#history', duration: scroll_dur }"}],attrs:{text:""}},[t._v("HISTORY")])],1)],1),s("v-main",{staticClass:"main-screen"},[s("Home",{attrs:{id:"home"}}),s("About",{attrs:{id:"about"}}),s("Works",{attrs:{id:"works"}}),s("History",{attrs:{id:"history"}}),s("Bottom")],1),s("v-footer",{staticClass:"text-caption",attrs:{color:"primary",dark:"",app:"",inset:"",absolute:""}},[s("div",{attrs:{id:"footer"}},[t._v(" © 2021 akihisa makimoto ")])])],1)},i=[],n=(s("f5df1"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{ref:"home",staticClass:"home",style:{height:this.windowHeight+"px",width:this.$vuetify.breakpoint.smAndDown?"100%":"50%"},attrs:{"mt-2":"","mt-md-10":""}},[s("transition",{attrs:{name:"code-show"},on:{"after-enter":t.endCodeShow}},[t.show_ready?s("p",{staticClass:"absolute back-code"},[s("pre",[t._v("<"),s("span",{staticClass:"bl"},[t._v("h1")]),t._v(" "),s("span",{staticClass:"bl2"},[t._v("style")]),t._v('="'),s("span",{staticClass:"bl2"},[t._v("color")]),t._v(": "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.title_color,expression:"title_color"}],style:t.input_style_obj,attrs:{size:"5"},domProps:{value:t.title_color},on:{input:function(e){e.target.composing||(t.title_color=e.target.value)}}}),t._v('">'),s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],style:t.input_style_obj,attrs:{size:"8"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v("<"),s("span",{staticClass:"bl"},[t._v("/h1")]),t._v(">")]),s("pre",[t._v("<"),s("span",{staticClass:"bl"},[t._v("v-row")]),t._v(" "),s("span",{staticClass:"bl2"},[t._v("justify")]),t._v("="),s("span",{staticClass:"or"},[t._v('"center"')]),t._v(" "),s("span",{staticClass:"bl2"},[t._v("class")]),t._v("="),s("span",{staticClass:"or"},[t._v('"btn_list"')]),t._v(">")]),s("pre",[t._v("    <"),s("span",{staticClass:"bl"},[t._v("v-col")]),t._v(" "),s("span",{staticClass:"bl2"},[t._v("v-for")]),t._v('="('),s("span",{staticClass:"bl"},[t._v("btn, i")]),t._v(") in "),s("span",{staticClass:"bl2"},[t._v("btn_list")]),t._v('"')]),s("pre",[t._v("         "),s("span",{staticClass:"bl2"},[t._v("class")]),t._v("="),s("span",{staticClass:"or"},[t._v('"text-center"')]),t._v(" "),s("span",{staticClass:"bl2"},[t._v("clos")]),t._v("="),s("span",{staticClass:"or"},[t._v('"12"')]),t._v(" "),s("span",{staticClass:"bl2"},[t._v("md")]),t._v("="),s("span",{staticClass:"or"},[t._v('"6"')])]),s("pre",[t._v("         "),s("span",{staticClass:"bl2"},[t._v("style")]),t._v('="'),s("span",{staticClass:"bl2"},[t._v("margin")]),t._v(": "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.margin_input,expression:"margin_input"}],style:t.input_style_obj,attrs:{type:"number",pattern:"\\d*",min:"0",max:"12"},domProps:{value:t.margin_input},on:{input:function(e){e.target.composing||(t.margin_input=e.target.value)}}}),t._v('"')]),s("pre",[t._v("    >")]),s("pre",[t._v("         <"),s("span",{staticClass:"bl"},[t._v("v-btn")]),t._v(" "),s("span",{staticClass:"bl2"},[t._v("block outlined class")]),t._v("="),s("span",{staticClass:"or"},[t._v('"ma-2"')])]),s("pre",[t._v("             "),s("span",{staticClass:"bl2"},[t._v(":color")]),t._v("="),s("span",{staticClass:"or"},[t._v('"btn.color"')])]),s("pre",[t._v("         >")]),s("pre",[t._v("             {{ "),s("span",{staticClass:"bl2"},[t._v("btn.text")]),t._v(" }}")]),s("pre",[t._v("         <"),s("span",{staticClass:"bl"},[t._v("v-btn")]),t._v(">")]),s("pre",[t._v("    </"),s("span",{staticClass:"bl"},[t._v("v-col")]),t._v(">")]),s("pre",[t._v("</"),s("span",{staticClass:"bl"},[t._v("v-row")]),t._v(">")]),s("pre",[s("br"),t._v("<"),s("span",{staticClass:"bl"},[t._v("script")]),t._v(">")]),s("pre",[t._v("data() {")]),s("pre",[t._v("   return {")]),s("pre",{staticClass:"mb-2"},[t._v("       btn_list: [")]),s("pre",{style:t.btn_style_obj},[t._v("{text:'"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.btn_list[0].text,expression:"btn_list[0].text"}],style:[t.input_style_obj,t.btn_style_obj],attrs:{size:"10"},domProps:{value:t.btn_list[0].text},on:{input:function(e){e.target.composing||t.$set(t.btn_list[0],"text",e.target.value)}}}),t._v("' color:'blue', scrollTo:"),s("v-select",{staticClass:"d-inline-flex",staticStyle:{width:"70px"},style:t.btn_style_obj,attrs:{height:"34px","hide-details":"true",items:t.toList,dense:""},model:{value:t.btn_list[0].scrollTo,callback:function(e){t.$set(t.btn_list[0],"scrollTo",e)},expression:"btn_list[0].scrollTo"}}),t._v("},")],1),s("pre",{style:t.btn_style_obj},[t._v("{text:'"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.btn_list[1].text,expression:"btn_list[1].text"}],style:[t.input_style_obj,t.btn_style_obj],attrs:{size:"10"},domProps:{value:t.btn_list[1].text},on:{input:function(e){e.target.composing||t.$set(t.btn_list[1],"text",e.target.value)}}}),t._v("' color:'blue', scrollTo:"),s("v-select",{staticClass:"d-inline-flex",staticStyle:{width:"70px"},style:t.btn_style_obj,attrs:{height:"34px","hide-details":"true",items:t.toList,dense:""},model:{value:t.btn_list[1].scrollTo,callback:function(e){t.$set(t.btn_list[1],"scrollTo",e)},expression:"btn_list[1].scrollTo"}}),t._v("},")],1),s("pre",{style:t.btn_style_obj},[t._v("{text:'"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.btn_list[2].text,expression:"btn_list[2].text"}],style:[t.input_style_obj,t.btn_style_obj],attrs:{size:"10"},domProps:{value:t.btn_list[2].text},on:{input:function(e){e.target.composing||t.$set(t.btn_list[2],"text",e.target.value)}}}),t._v("' color:'blue', scrollTo:"),s("v-select",{staticClass:"d-inline-flex",staticStyle:{width:"70px"},style:t.btn_style_obj,attrs:{height:"34px","hide-details":"true",items:t.toList,dense:""},model:{value:t.btn_list[2].scrollTo,callback:function(e){t.$set(t.btn_list[2],"scrollTo",e)},expression:"btn_list[2].scrollTo"}}),t._v("},")],1),s("pre",{style:t.btn_style_obj},[t._v("{text:'"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.btn_list[3].text,expression:"btn_list[3].text"}],style:[t.input_style_obj,t.btn_style_obj],attrs:{size:"10"},domProps:{value:t.btn_list[3].text},on:{input:function(e){e.target.composing||t.$set(t.btn_list[3],"text",e.target.value)}}}),t._v("' color:'blue', scrollTo:"),s("v-select",{staticClass:"d-inline-flex",staticStyle:{width:"70px"},style:t.btn_style_obj,attrs:{height:"34px","hide-details":"true",items:t.toList,dense:""},model:{value:t.btn_list[3].scrollTo,callback:function(e){t.$set(t.btn_list[3],"scrollTo",e)},expression:"btn_list[3].scrollTo"}}),t._v("},")],1),s("pre",{staticClass:"mt-3"},[t._v("       ]")]),s("pre",[t._v("   }")]),s("pre",[t._v("}")]),s("pre",[t._v("<"),s("span",{staticClass:"bl"},[t._v("/script")]),t._v(">")]),s("pre",[s("br")]),s("pre")]):t._e()]),s("v-row",{staticClass:"mt-15 mb-5 mb-md-10",attrs:{justify:"center"}},[s("transition",{attrs:{name:"slide-fade"}},[s("h1",{directives:[{name:"show",rawName:"v-show",value:t.show_ready,expression:"show_ready"}],staticClass:"text-h2 font-weight-bold",style:{color:t.title_color}},[t._v(t._s(t.title))])])],1),s("transition",{attrs:{name:"slide-fade"}},[s("v-row",{directives:[{name:"show",rawName:"v-show",value:t.show_ready,expression:"show_ready"}],staticClass:"btn_list pt-md-15",style:t.$vuetify.breakpoint.smAndDown?"width:50%":"width:100%",attrs:{justify:"center"}},[t._l(t.btn_list,(function(e,a){return s("v-col",{key:a,staticClass:"text-center px-0 px-sm-3",class:"ma-"+t.margin_input,attrs:{block:"",cols:"12",md:"6"}},[s("v-btn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#"+e.scrollTo,duration:2e3},expression:"{ element: '#' + btn.scrollTo, duration: 2000 }"}],staticClass:"my-2 mx-0",attrs:{block:"",outlined:"",color:e.color}},[t._v(" "+t._s(e.text)+" ")])],1)})),s("v-col",{staticClass:"mt-6 mt-md-15",attrs:{cols:"12",md:"8"}},[s("v-btn",{attrs:{rounded:"",color:"indigo",dark:"",block:""},on:{click:t.resetCss}},[t._v("reset css")])],1)],2)],1)],1)}),r=[],l="Hello : )",c="navy",v="0",d=["VIEW MY HOME","VIEW MY ABOUTME","VIEW MY WORKS","VIEW MY HISTORY"],u=["home","about","works","history"],_={name:"Home",data:function(){return{windowHeight:600,title:l,title_color:c,margin_input:v,toList:["home","about","works","history"],show_ready:!1,input_style_obj:{transition:"2s",border:0,opacity:.8},btn_style_obj:{transition:"2s",fontSize:"13px"},btn_list:[{text:d[0],color:"indigo",scrollTo:u[0]},{text:d[1],color:"indigo",scrollTo:u[1]},{text:d[2],color:"indigo",scrollTo:u[2]},{text:d[3],color:"indigo",scrollTo:u[3]}]}},methods:{endCodeShow:function(){this.input_style_obj.border="3px solid #6666ff",this.$vuetify.breakpoint.smAndDown&&(this.btn_style_obj.fontSize="10px")},resetCss:function(){this.title=l,this.title_color=c,this.margin_input=v,this.btn_list=[{text:d[0],color:"indigo",scrollTo:u[0]},{text:d[1],color:"indigo",scrollTo:u[1]},{text:d[2],color:"indigo",scrollTo:u[2]},{text:d[3],color:"indigo",scrollTo:u[3]}]}},mounted:function(){var t=this.$refs.home,e=t.getBoundingClientRect();this.windowHeight=window.innerHeight>e.height?window.innerHeight:e.height+50,this.show_ready=!0}},p=_,m=(s("2e1c"),s("2877")),b=s("6544"),h=s.n(b),f=s("8336"),g=s("62ad"),x=s("a523"),y=s("0fd9"),w=s("b974"),C=Object(m["a"])(p,n,r,!1,null,"f7dc245e",null),k=C.exports;h()(C,{VBtn:f["a"],VCol:g["a"],VContainer:x["a"],VRow:y["a"],VSelect:w["a"]});var V=s("f820"),T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{height:t.windowHeight+"px"}},[a("v-container",{ref:"works",staticClass:"py-15"},[a("h1",{staticClass:"text-center mt-0 py-15"},[t._v("works")]),a("v-dialog",{attrs:{"max-width":"85vw"},model:{value:t.dialog1,callback:function(e){t.dialog1=e},expression:"dialog1"}},[a("v-card",[a("v-toolbar",{attrs:{light:""}},[a("v-spacer"),a("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog1=!1}}},[a("v-icon",{attrs:{color:"black"}},[t._v("mdi-close")])],1)],1),a("v-row",[a("v-col",{attrs:{md:"6"}},[a("div",[a("v-card-title",[t._v("My Portfolio")]),a("v-card-text",{staticClass:"grey--text text--darken-3"},[t._v("当サイトです。vue.jsを利用し、ランディングページ風のポートフォリオを作成しました。トップページはコーディングに馴染みのない人でも気軽にHTMLに触れられるようにリアクティブな機能を取り入れました。")]),a("v-divider",{staticClass:"mx-4"}),a("v-card-title",[t._v("使用言語")]),a("v-card-text",{staticClass:"grey--text text--darken-3"},[t._v("Vue.js, Vuetify, HTML/CSS, Docker")])],1)]),a("v-col",{attrs:{md:"6"}},[a("v-img",{staticClass:"mt-md-8 mb-5",attrs:{src:s("f746"),height:"300",contain:""}})],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"85vw"},model:{value:t.dialog_progress,callback:function(e){t.dialog_progress=e},expression:"dialog_progress"}},[a("v-card",[a("v-toolbar",{attrs:{light:""}},[a("v-spacer"),a("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog_progress=!1}}},[a("v-icon",{attrs:{color:"black"}},[t._v("mdi-close")])],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",md:"6"}},[a("div",[a("v-card-title",[t._v("On Progress...")]),a("v-card-text",{staticClass:"grey--text text--darken-3"},[t._v("製作中です。")]),a("v-divider",{staticClass:"mx-4"}),a("v-card-title",[t._v("使用言語")]),a("v-card-text",{staticClass:"grey--text text--darken-3"},[t._v("...")])],1)]),a("v-spacer"),a("v-col",{attrs:{cols:"12",md:"4"}},[a("div",{staticClass:"grey lighten-3 ma-5",staticStyle:{height:"300px"}})])],1)],1)],1),a("v-row",{staticClass:"mb-15",attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"10",sm:"3"}},[a("v-lazy",{attrs:{options:{threshold:.7},"min-height":"200",transition:"fade-transitio1n"}},[a("div",[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return[a("v-card",{class:{"on-hover":o},attrs:{elevation:o?12:2}},[a("v-img",{attrs:{src:s("f746"),height:"100%",contain:""},on:{click:function(e){e.stopPropagation(),t.dialog1=!0}}})],1)]}}])}),a("p",{staticClass:"text-center"},[t._v("This site")])],1)])],1),a("v-col",{staticClass:"mt-5 mt-sm-0",attrs:{cols:"10",sm:"3"}},[a("v-lazy",{attrs:{options:{threshold:.7},"min-height":"200",transition:"fade-transition"}},[a("div",[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.hover;return[a("v-card",{class:{"on-hover":s},attrs:{elevation:s?12:2}},[a("v-row",{style:{height:t.$vuetify.breakpoint.smAndDown?"180px":"250px"},attrs:{justify:"center","align-content":"center"},on:{click:function(e){e.stopPropagation(),t.dialog_progress=!0}}},[a("v-col",{attrs:{cols:"12"}},[a("p",{staticClass:"text-center"},[t._v("on progress...")])])],1)],1)]}}])}),a("p",{staticClass:"text-center mt-5"},[t._v("Work")])],1)])],1),a("v-col",{staticClass:"mt-5 mt-sm-0",attrs:{cols:"10",sm:"3"}},[a("v-lazy",{attrs:{options:{threshold:.7},"min-height":"200",transition:"fade-transition"}},[a("div",[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.hover;return[a("v-card",{class:{"on-hover":s},attrs:{elevation:s?12:2}},[a("v-row",{style:{height:t.$vuetify.breakpoint.smAndDown?"180px":"250px"},attrs:{justify:"center","align-content":"center"},on:{click:function(e){e.stopPropagation(),t.dialog_progress=!0}}},[a("v-col",{attrs:{cols:"12"}},[a("p",{staticClass:"text-center"},[t._v("on progress...")])])],1)],1)]}}])}),a("p",{staticClass:"text-center mt-5"},[t._v("Work")])],1)])],1)],1)],1)],1)},j=[],H={data:function(){return{dialog1:!1,dialog_progress:!1,windowHeight:600}},methods:{},mounted:function(){var t=this.$refs.works,e=t.getBoundingClientRect();this.windowHeight=window.innerHeight>e.height?window.innerHeight:e.height+50}},S=H,O=s("b0af"),I=s("99d9"),P=s("169a"),$=s("ce7e"),L=s("ce87"),E=s("132d"),M=s("adda"),N=s("b687"),B=s("2fa4"),z=s("71d9"),A=Object(m["a"])(S,T,j,!1,null,null,null),W=A.exports;h()(A,{VBtn:f["a"],VCard:O["a"],VCardText:I["a"],VCardTitle:I["b"],VCol:g["a"],VContainer:x["a"],VDialog:P["a"],VDivider:$["a"],VHover:L["a"],VIcon:E["a"],VImg:M["a"],VLazy:N["a"],VRow:y["a"],VSpacer:B["a"],VToolbar:z["a"]});var D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"history"},[a("v-parallax",{attrs:{dark:"",height:"1600",src:s("0510")}},[a("v-container",{staticClass:"pl-0"},[a("h1",{staticClass:"text-center mt-0 pt-4"},[t._v("history")]),a("v-timeline",{attrs:{"align-top":"",dense:t.$vuetify.breakpoint.smAndDown}},t._l(t.items,(function(e,s){return a("v-timeline-item",{key:s,attrs:{color:e.color,icon:e.icon,"fill-dot":""}},[a("v-lazy",{attrs:{options:{threshold:.7},"min-height":"200",transition:"fade-transition"}},[a("div",[a("v-card",{attrs:{color:e.color,dark:""}},[a("v-card-title",{staticClass:"title text-subtitle-1 text-sm-h5"},[t._v(t._s(e.title))]),a("v-card-text",{staticClass:"white text--primary pt-4"},[a("p",{staticClass:"text-subtitle-2 text-sm-h6"},[t._v(t._s(e.subtitle))]),a("p",{staticClass:"ml-2 text-caption text-sm-body-1"},[t._v(t._s(e.text))])])],1),a("v-list",{attrs:{dense:"",color:"transparent"}},[a("v-list-item-group",{attrs:{color:"primary"}},t._l(e.details,(function(e,s){return a("v-list-item",{key:s,staticClass:"pl-3"},[a("v-list-item-icon",{staticClass:"mr-0"},[a("v-icon",{staticClass:"white--text text-body-2",domProps:{textContent:t._s("mdi-minus")}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"white--text detail font-weight-bold"},[t._v(t._s(e))])],1)],1)})),1)],1)],1)])],1)})),1)],1)],1)],1)},R=[],Y={data:function(){return{items:[{color:"red lighten-2",icon:"mdi-star",title:"High Shool 2011-2014",subtitle:"大阪府立池田高等学校",text:"部活と時に勉学に励む無難な学生生活を過ごす。",details:["バスケットボール部に所属 2011-2012","退部し、アメフト部に所属 2012-"]},{color:"red lighten-2",icon:"mdi-star",title:"University 2014-2018",subtitle:"関西大学 外国語学部",text:"サークルには所属せずジムに通い詰める。また、学部のカリキュラムでアメリカに留学し、ジムに通い詰める。",details:["慣れない英語の授業に苦難 2014","アメリカに留学 2015","ベンチプレス95kg記録 2016","TOEIC 920点取得 2017"]},{color:"red lighten-2",icon:"mdi-star",title:"Company 2018-2019",subtitle:"SIerの会社",text:"C言語とC++の研修を終えた後、C#で業務ツールを作成する。",details:[]},{color:"red lighten-2",icon:"mdi-star",title:"Company 2019-",subtitle:"人材系の会社",text:"社内SEとして業務系ツールの作成、WEBアプリの開発、基幹システムの調整を行う",details:["初めてのWEB系言語(PHP) 2019","慣れないgitに大苦戦 2019","フロントエンドの勉強開始 2020","Pythonに着手 2020","Vueに着手 2021"]}]}}},U=Y,G=(s("73a2"),s("8860")),J=s("da13"),K=s("5d23"),F=s("1baa"),X=s("34c3"),q=s("8b9c"),Q=s("8414"),Z=s("1e06"),tt=Object(m["a"])(U,D,R,!1,null,"78612829",null),et=tt.exports;h()(tt,{VCard:O["a"],VCardText:I["a"],VCardTitle:I["b"],VContainer:x["a"],VIcon:E["a"],VLazy:N["a"],VList:G["a"],VListItem:J["a"],VListItemContent:K["a"],VListItemGroup:F["a"],VListItemIcon:X["a"],VListItemTitle:K["b"],VParallax:q["a"],VTimeline:Q["a"],VTimelineItem:Z["a"]});var st=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},at=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bottom"},[s("h2",{staticClass:"text-center"},[t._v("Thanks for your time!")])])}],ot=(s("49d4"),{}),it=Object(m["a"])(ot,st,at,!1,null,"3b5a4a4e",null),nt=it.exports,rt={components:{About:V["default"],Home:k,Works:W,History:et,Bottom:nt},data:function(){return{drawer:!1,nav_list:[{name:"HOME",icon:"mdi-view-dashboard",link:"/",scrollTo:"#home"},{name:"ABOUT",icon:"mdi-account",link:"/about",scrollTo:"#about"},{name:"WORKS",icon:"mdi-code-tags",link:"/works",scrollTo:"#works"},{name:"HISTORY",icon:"mdi-history",link:"/history",scrollTo:"#history"}],scroll_dur:1e3}},methods:{draw:function(){console.log(this.drawer),this.drawer=!this.drawer,console.log(this.drawer)},moveIcon:function(t){this.$refs.icon1.moveTo(t.offsetX,t.offsetY)}}},lt=rt,ct=(s("e8d3"),s("7496")),vt=s("40dc"),dt=s("5bc1"),ut=s("553a"),_t=s("f6c4"),pt=s("f774"),mt=s("2a7f"),bt=Object(m["a"])(lt,o,i,!1,null,"3c0e3dc0",null),ht=bt.exports;h()(bt,{VApp:ct["a"],VAppBar:vt["a"],VAppBarNavIcon:dt["a"],VBtn:f["a"],VContainer:x["a"],VDivider:$["a"],VFooter:ut["a"],VIcon:E["a"],VList:G["a"],VListItem:J["a"],VListItemContent:K["a"],VListItemIcon:X["a"],VListItemTitle:K["b"],VMain:_t["a"],VNavigationDrawer:pt["a"],VSpacer:B["a"],VToolbarItems:mt["a"],VToolbarTitle:mt["b"]});var ft=s("f309");a["a"].use(ft["a"]);var gt=new ft["a"]({}),xt=(s("d3b7"),s("3ca3"),s("ddb0"),s("8c4f"));a["a"].use(xt["a"]);var yt=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return Promise.resolve().then(s.bind(null,"f820"))}}],wt=new xt["a"]({mode:"history",base:"",routes:yt}),Ct=wt,kt=s("f13c"),Vt=s.n(kt),Tt=(s("f33e"),window["VueTypedJs"].default);a["a"].use(Tt),a["a"].config.productionTip=!1,a["a"].use(Vt.a),new a["a"]({vuetify:gt,router:Ct,render:function(t){return t(ht)}}).$mount("#app")},"73a2":function(t,e,s){"use strict";s("3ce1")},9958:function(t,e,s){},e8d3:function(t,e,s){"use strict";s("0fca")},f33e:function(t,e,s){},f746:function(t,e,s){t.exports=s.p+"img/this_site.fef52519.png"},f820:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("v-parallax",{attrs:{dark:"",height:t.windowHeight,src:s("0510")}},[a("div",{staticClass:"text-center"},[a("h1",[t._v("about me")]),a("p",{staticClass:"pt-10"},[t._v(" Birthyear ： 1995")]),a("p",[t._v(" From ： Osaka")]),a("p",[t._v(" Living ： Tokyo")]),a("p",[t._v(" Sport ： Basketball")]),a("p",[t._v(" Likes ： Games, Manzai ")]),a("p",[t._v(" note ： "),a("a",{attrs:{blank:"",href:"https://note.com/maki_note_",target:"_blank",rel:"noopener"}},[t._v("https://note.com/maki_note_")])]),a("p",[t._v(" GitHub ： "),a("a",{attrs:{blank:"",href:"https://github.com/akihisa2359",target:"_blank",rel:"noopener"}},[t._v("https://github.com/akihisa2359")])])])])],1)},o=[],i={data:function(){return{windowHeight:600}},mounted:function(){this.windowHeight=window.innerHeight}},n=i,r=s("2877"),l=s("6544"),c=s.n(l),v=s("8b9c"),d=Object(r["a"])(n,a,o,!1,null,null,null);e["default"]=d.exports;c()(d,{VParallax:v["a"]})}});
//# sourceMappingURL=app.3c9fb484.js.map