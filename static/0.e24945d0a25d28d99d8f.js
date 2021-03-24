(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{48:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"messagebox",class:"messagebox_"+e.type},[i("div",{staticClass:"messagebox_buttons"},[i("a",{staticClass:"close",attrs:{href:"#",title:"Nachrichtenbox schliessen"},on:{click:function(t){return t.stopPropagation(),e.hide(t)}}},[i("span",[e._v("Nachrichtenbox schliessen")])])]),e._v(" "),i("div",[e._t("default",[e._v("Message")])],2)])};a._withStripped=!0;var r={name:"MessageBox",props:{type:{type:String},timer:{type:Number,required:!1,default:0}},methods:{hide(){this.$emit("hide")}},created(){if(this.timer){var e=this;setTimeout((function(){e.hide()}),this.timer)}}},s=i(5),n=Object(s.a)(r,a,[],!1,null,null,null);n.options.__file="vueapp/components/MessageBox.vue";t.a=n.exports},49:function(e,t,i){"use strict";var a=function(){var e=this.$createElement;return(this._self._c||e)("button",{staticClass:"button",class:[this.icon],attrs:{type:this.type,name:this.name},on:{click:this.onClick}},[this._t("default",[this._v("ButtonLabel")])],2)};a._withStripped=!0;var r={name:"StudipButton",props:{name:{type:String},icon:{type:String,validator:e=>["","accept","cancel","edit","move-up","move-down","add","download","search"].includes(e),default:""},type:{type:String,required:!1,default:"submit"}},methods:{onClick(){this.$emit("click")}}},s=i(5),n=Object(s.a)(r,a,[],!1,null,null,null);n.options.__file="vueapp/components/StudipButton.vue";t.a=n.exports},50:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{class:"tooltip "+(e.important?" tooltip-important":"")+(e.badge?" meeting-badge":" tooltip-icon"),attrs:{"data-tooltip":"",title:e.html?"":e.text}},[e.html&&!e.badge?i("span",{staticClass:"tooltip-content"},[e._v(e._s(e.text))]):e.badge?e._t("default"):e._e()],2)};a._withStripped=!0;var r={name:"StudipTooltipIcon",props:{text:{type:String,required:!0},important:{type:Boolean,required:!1,default:!1},html:{type:Boolean,required:!1,default:!1},badge:{type:Boolean,required:!1,default:!1}},data:()=>({}),computed:{}},s=i(5),n=Object(s.a)(r,a,[],!1,null,null,null);n.options.__file="vueapp/components/StudipTooltipIcon.vue";t.a=n.exports},51:function(e,t,i){"use strict";var a=function(){var e=this.$createElement;return(this._self._c||e)("img",{attrs:{src:this.path,width:this.size,height:this.size}})};a._withStripped=!0;var r={name:"StudipIcon",props:{icon:{type:String},role:{type:String,validator:e=>["info","clickable","accept","status-green","inactive","navigation","new","attention","status-red","info_alt","sort","status-yellow"].includes(e),default:""},size:{type:String,required:!1,default:"16"}},data:()=>({role_to_color:{info:"black",clickable:"blue",accept:"green","status-green":"green",inactive:"grey",navigation:"blue",new:"red",attention:"red","status-red":"red",info_alt:"white",sort:"yellow","status-yellow":"yellow"}}),computed:{path(){var e=this.icon.split("+").reverse().join("/");return ICON_URL+this.role_to_color[this.role]+"/"+e+".svg"}}},s=i(5),n=Object(s.a)(r,a,[],!1,null,null,null);n.options.__file="vueapp/components/StudipIcon.vue";t.a=n.exports},52:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));const a={data:()=>({parentDialogId:null}),mounted(){this.getParentDialogId()},created(){this.$on(["done","cancel"],()=>{this.dialogClose()})},methods:{dialogClose(){if(this.$children.length){var e=this.$children.filter(e=>"Dialog"==e.$options.name);e.length&&e.forEach(e=>{e.$data.id&&$("#"+e.$data.id).dialog("close")})}},getParentDialogId(){var e=this.$parent.$children.filter(e=>"Dialog"==e.$options.name);e.length&&e.forEach(e=>{e.$data.id&&(this.parentDialogId=e.$data.id)})}}}},53:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.visible?i("div",[i("MeetingDialog",{attrs:{title:e.$gettext("Serverkonfiguration")},on:{close:e.close},scopedSlots:e._u([{key:"content",fn:function(){return[e.dialog_message.text?i("MessageBox",{attrs:{type:e.dialog_message.type},on:{hide:function(t){e.dialog_message.text=""}}},[e._v("\n                "+e._s(e.dialog_message.text)+"\n            ")]):e._e(),e._v(" "),i("form",{staticClass:"default",staticStyle:{position:"relative"},on:{submit:e.edit}},e._l(e.driver.config,(function(t,a){return i("div",{key:a},["enable"!=t.name&&"roomsize-presets"!=t.name?i("label",{staticClass:"large"},[e._v("\n                        "+e._s(t.display_name)+"\n                        "),"checkbox"==("maxParticipants"==t.name?"number":"text")?i("input",{directives:[{name:"model",rawName:"v-model",value:e.server[e.driver_name][t.name],expression:"server[driver_name][value.name]"}],staticClass:"size-l",attrs:{min:"0",placeholder:t.value,type:"checkbox"},domProps:{checked:Array.isArray(e.server[e.driver_name][t.name])?e._i(e.server[e.driver_name][t.name],null)>-1:e.server[e.driver_name][t.name]},on:{change:[function(i){var a=e.server[e.driver_name][t.name],r=i.target,s=!!r.checked;if(Array.isArray(a)){var n=e._i(a,null);r.checked?n<0&&e.$set(e.server[e.driver_name],t.name,a.concat([null])):n>-1&&e.$set(e.server[e.driver_name],t.name,a.slice(0,n).concat(a.slice(n+1)))}else e.$set(e.server[e.driver_name],t.name,s)},function(i){"maxParticipants"==t.name&&e.reduceMins()}]}}):"radio"==("maxParticipants"==t.name?"number":"text")?i("input",{directives:[{name:"model",rawName:"v-model",value:e.server[e.driver_name][t.name],expression:"server[driver_name][value.name]"}],staticClass:"size-l",attrs:{min:"0",placeholder:t.value,type:"radio"},domProps:{checked:e._q(e.server[e.driver_name][t.name],null)},on:{change:[function(i){return e.$set(e.server[e.driver_name],t.name,null)},function(i){"maxParticipants"==t.name&&e.reduceMins()}]}}):i("input",{directives:[{name:"model",rawName:"v-model",value:e.server[e.driver_name][t.name],expression:"server[driver_name][value.name]"}],staticClass:"size-l",attrs:{min:"0",placeholder:t.value,type:"maxParticipants"==t.name?"number":"text"},domProps:{value:e.server[e.driver_name][t.name]},on:{change:function(i){"maxParticipants"==t.name&&e.reduceMins()},input:function(i){i.target.composing||e.$set(e.server[e.driver_name],t.name,i.target.value)}}})]):"roomsize-presets"==t.name?i("ServerRoomSize",{attrs:{roomsize_object:t,this_server:e.server[e.driver_name]}}):e._e()],1)})),0)]},proxy:!0},{key:"buttons",fn:function(){return[i("StudipButton",{directives:[{name:"translate",rawName:"v-translate"}],attrs:{icon:"accept"},on:{click:e.edit}},[e._v("\n                Übernehmen\n            ")]),e._v(" "),i("StudipButton",{directives:[{name:"translate",rawName:"v-translate"}],attrs:{icon:"cancel"},on:{click:e.close}},[e._v("\n                Abbrechen\n            ")])]},proxy:!0}],null,!1,1171758746)})],1):e._e()};a._withStripped=!0;i(9);var r=i(49),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h3",[e._v(e._s(e.roomsize_object.display_name))]),e._v(" "),i("form",{staticClass:"default collapsable",staticStyle:{position:"relative"}},e._l(e.roomsize_object.value,(function(t,a){return i("fieldset",{key:a,class:(a>0?"collapsed ":"")+"accordion-collapse"},[i("legend",{on:{click:function(t){return t.preventDefault(),e.accordion_handle(t)}}},[e._v(e._s(t.display_name))]),e._v(" "),e._l(t.value,(function(a,r){return i("label",{key:r},[!0===a.value||!1===a.value?[i("input",{directives:[{name:"model",rawName:"v-model",value:e.this_server[e.roomsize_object.name][t.name][a.name],expression:"this_server[roomsize_object.name][roomsize.name][feature.name]"}],attrs:{type:"checkbox","true-value":"true","false-value":"false"},domProps:{checked:Array.isArray(e.this_server[e.roomsize_object.name][t.name][a.name])?e._i(e.this_server[e.roomsize_object.name][t.name][a.name],null)>-1:e._q(e.this_server[e.roomsize_object.name][t.name][a.name],"true")},on:{change:function(i){var r=e.this_server[e.roomsize_object.name][t.name][a.name],s=i.target,n=s.checked?"true":"false";if(Array.isArray(r)){var o=e._i(r,null);s.checked?o<0&&e.$set(e.this_server[e.roomsize_object.name][t.name],a.name,r.concat([null])):o>-1&&e.$set(e.this_server[e.roomsize_object.name][t.name],a.name,r.slice(0,o).concat(r.slice(o+1)))}else e.$set(e.this_server[e.roomsize_object.name][t.name],a.name,n)}}}),e._v("\n                    "+e._s(a.display_name)+"\n                    "),Object.keys(a).includes("info")?i("StudipTooltipIcon",{attrs:{text:a.info}}):e._e()]:[e._v("\n                    "+e._s(a.display_name)+"\n                    "),Object.keys(a).includes("info")?i("StudipTooltipIcon",{attrs:{text:a.info}}):e._e(),e._v(" "),"checkbox"==("minParticipants"==a.name?"number":"text")?i("input",{directives:[{name:"model",rawName:"v-model",value:e.this_server[e.roomsize_object.name][t.name][a.name],expression:"this_server[roomsize_object.name][roomsize.name][feature.name]"}],attrs:{min:"large"==t.name?parseInt(e.this_server[e.roomsize_object.name].medium.minParticipants)?parseInt(e.this_server[e.roomsize_object.name].medium.minParticipants)+1:0:"medium"==t.name&&parseInt(e.this_server[e.roomsize_object.name].small.minParticipants)>=0?parseInt(e.this_server[e.roomsize_object.name].small.minParticipants)+1:0,max:"small"==t.name?parseInt(e.this_server[e.roomsize_object.name].medium.minParticipants)?parseInt(e.this_server[e.roomsize_object.name].medium.minParticipants)-1:"":"medium"==t.name?parseInt(e.this_server[e.roomsize_object.name].large.minParticipants)?parseInt(e.this_server[e.roomsize_object.name].large.minParticipants)-1:"":e.this_server.maxParticipants&&parseInt(e.this_server.maxParticipants)>0?parseInt(e.this_server.maxParticipants):"",placeholder:a.value?a.value:"",type:"checkbox"},domProps:{checked:Array.isArray(e.this_server[e.roomsize_object.name][t.name][a.name])?e._i(e.this_server[e.roomsize_object.name][t.name][a.name],null)>-1:e.this_server[e.roomsize_object.name][t.name][a.name]},on:{change:[function(i){var r=e.this_server[e.roomsize_object.name][t.name][a.name],s=i.target,n=!!s.checked;if(Array.isArray(r)){var o=e._i(r,null);s.checked?o<0&&e.$set(e.this_server[e.roomsize_object.name][t.name],a.name,r.concat([null])):o>-1&&e.$set(e.this_server[e.roomsize_object.name][t.name],a.name,r.slice(0,o).concat(r.slice(o+1)))}else e.$set(e.this_server[e.roomsize_object.name][t.name],a.name,n)},function(t){"minParticipants"==a.name&&e.limitMinMax()}],keyup:function(t){"minParticipants"==a.name&&e.limitMinMax()}}}):"radio"==("minParticipants"==a.name?"number":"text")?i("input",{directives:[{name:"model",rawName:"v-model",value:e.this_server[e.roomsize_object.name][t.name][a.name],expression:"this_server[roomsize_object.name][roomsize.name][feature.name]"}],attrs:{min:"large"==t.name?parseInt(e.this_server[e.roomsize_object.name].medium.minParticipants)?parseInt(e.this_server[e.roomsize_object.name].medium.minParticipants)+1:0:"medium"==t.name&&parseInt(e.this_server[e.roomsize_object.name].small.minParticipants)>=0?parseInt(e.this_server[e.roomsize_object.name].small.minParticipants)+1:0,max:"small"==t.name?parseInt(e.this_server[e.roomsize_object.name].medium.minParticipants)?parseInt(e.this_server[e.roomsize_object.name].medium.minParticipants)-1:"":"medium"==t.name?parseInt(e.this_server[e.roomsize_object.name].large.minParticipants)?parseInt(e.this_server[e.roomsize_object.name].large.minParticipants)-1:"":e.this_server.maxParticipants&&parseInt(e.this_server.maxParticipants)>0?parseInt(e.this_server.maxParticipants):"",placeholder:a.value?a.value:"",type:"radio"},domProps:{checked:e._q(e.this_server[e.roomsize_object.name][t.name][a.name],null)},on:{change:[function(i){return e.$set(e.this_server[e.roomsize_object.name][t.name],a.name,null)},function(t){"minParticipants"==a.name&&e.limitMinMax()}],keyup:function(t){"minParticipants"==a.name&&e.limitMinMax()}}}):i("input",{directives:[{name:"model",rawName:"v-model",value:e.this_server[e.roomsize_object.name][t.name][a.name],expression:"this_server[roomsize_object.name][roomsize.name][feature.name]"}],attrs:{min:"large"==t.name?parseInt(e.this_server[e.roomsize_object.name].medium.minParticipants)?parseInt(e.this_server[e.roomsize_object.name].medium.minParticipants)+1:0:"medium"==t.name&&parseInt(e.this_server[e.roomsize_object.name].small.minParticipants)>=0?parseInt(e.this_server[e.roomsize_object.name].small.minParticipants)+1:0,max:"small"==t.name?parseInt(e.this_server[e.roomsize_object.name].medium.minParticipants)?parseInt(e.this_server[e.roomsize_object.name].medium.minParticipants)-1:"":"medium"==t.name?parseInt(e.this_server[e.roomsize_object.name].large.minParticipants)?parseInt(e.this_server[e.roomsize_object.name].large.minParticipants)-1:"":e.this_server.maxParticipants&&parseInt(e.this_server.maxParticipants)>0?parseInt(e.this_server.maxParticipants):"",placeholder:a.value?a.value:"",type:"minParticipants"==a.name?"number":"text"},domProps:{value:e.this_server[e.roomsize_object.name][t.name][a.name]},on:{change:function(t){"minParticipants"==a.name&&e.limitMinMax()},keyup:function(t){"minParticipants"==a.name&&e.limitMinMax()},input:function(i){i.target.composing||e.$set(e.this_server[e.roomsize_object.name][t.name],a.name,i.target.value)}}})]],2)}))],2)})),0)])};s._withStripped=!0;var n={name:"ServerRoomSize",components:{StudipTooltipIcon:i(50).a},props:{roomsize_object:{type:[Array,Object]},this_server:{type:Object}},methods:{accordion_handle(e){$(e.target).parent().hasClass("collapsed")&&($(".accordion-collapse").addClass("collapsed"),$(this).removeClass("collapsed"))},addPresetsToServer(){Object.keys(this.this_server).includes(this.roomsize_object.name)&&""!=this.this_server[this.roomsize_object.name]||(this.this_server[this.roomsize_object.name]=new Object);for(const[e,t]of Object.entries(this.roomsize_object.value))if(!Object.keys(this.this_server[this.roomsize_object.name]).includes(t.name)||""==this.this_server[this.roomsize_object.name][t.name]){this.this_server[this.roomsize_object.name][t.name]=new Object;for(const[e,i]of Object.entries(t.value))this.this_server[this.roomsize_object.name][t.name][e]=i.value}},limitMinMax(){if(parseInt(this.this_server[this.roomsize_object.name][size_name].minParticipants)>=0)for(const[e,t]of Object.entries(this.this_server[this.roomsize_object.name]))Object.keys(t).includes("minParticipants")&&parseInt(this.server[this.driver_name]["roomsize-presets"][e].minParticipants)>parseInt(this.server[this.driver_name].maxParticipants)&&(this.server[this.driver_name]["roomsize-presets"][e].minParticipants=this.server[this.driver_name].maxParticipants)}},beforeMount(){this.addPresetsToServer()}},o=i(5),m=Object(o.a)(n,s,[],!1,null,null,null);m.options.__file="vueapp/components/ServerRoomSize.vue";var c=m.exports,l=i(48),p=i(52),v={name:"ServerDialog",props:{DialogVisible:Boolean,server_object:Object,driver_name:String,driver:Object},mixins:[p.a],components:{StudipButton:r.a,ServerRoomSize:c,MessageBox:l.a},data(){return{visible:this.DialogVisible,server:this.server_object,dialog_message:{}}},mounted(){},methods:{close(){this.dialogClose(),this.$emit("close")},edit(){this.validateForm()?(this.dialogClose(),this.$emit("edit",{driver_name:this.driver_name,server:this.server})):this.dialog_message={type:"error",text:"Bei der Eingabe ist ein Fehler aufgetreten.".toLocaleString()}},validateForm(){var e=!0;return this.validateRoomSizeNumberInputs()||(e=!1),e},validateRoomSizeNumberInputs(){var e=this.$children.find(e=>"ServerRoomSize"===e.$options.name);let t=!0;if(e)for(const[a,r]of Object.entries(e.$el.children)){var i=$(r).find('input[type="number"]');if(i.length)for(const[e,a]of Object.entries(i))"INPUT"!=a.tagName||a.checkValidity()||(t=!1)}return t},reduceMins(){if(this.server[this.driver_name].maxParticipants&&parseInt(this.server[this.driver_name].maxParticipants)>0&&this.server[this.driver_name]["roomsize-presets"]){parseInt(this.server[this.driver_name].maxParticipants)>0&&parseInt(this.server[this.driver_name].maxParticipants)<3&&this.$set(this.server_object[this.driver_name],"maxParticipants","3");for(const[e,t]of Object.entries(this.server[this.driver_name]["roomsize-presets"]))Object.keys(t).includes("minParticipants")&&parseInt(this.server[this.driver_name].maxParticipants)>0&&parseInt(this.server[this.driver_name]["roomsize-presets"][e].minParticipants)>parseInt(this.server[this.driver_name].maxParticipants)&&(this.server[this.driver_name]["roomsize-presets"][e].minParticipants=this.server[this.driver_name].maxParticipants)}}},watch:{DialogVisible:function(){this.visible=this.DialogVisible,this.visible?this.reduceMins():this.dialog_message={}}}},_=Object(o.a)(v,a,[],!1,null,null,null);_.options.__file="vueapp/components/ServerDialog.vue";t.a=_.exports}}]);