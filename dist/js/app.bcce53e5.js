(function(e){function t(t){for(var n,i,o=t[0],l=t[1],u=t[2],d=0,p=[];d<o.length;d++)i=o[d],r[i]&&p.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},s=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0a4f":function(e,t,a){"use strict";var n=a("620f"),r=a.n(n);r.a},1317:function(e,t,a){"use strict";var n=a("f28d"),r=a.n(n);r.a},"163b":function(e,t,a){"use strict";var n=a("1cd2"),r=a.n(n);r.a},"1cd2":function(e,t,a){},"40ba":function(e,t,a){"use strict";var n=a("b27a"),r=a.n(n);r.a},4455:function(e,t,a){},5005:function(e,t,a){"use strict";var n=a("6d19"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-navbar",{staticClass:"navbar-dark bg-dark",attrs:{toggleable:"md",type:"dark",variant:"info"}},[n("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),n("b-navbar-brand",[n("router-link",{staticClass:"routerLink",attrs:{to:"dashboard"}},[e._v("GTA project")])],1),n("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[e.isLogged?n("b-navbar-nav",{staticClass:"ml-auto"},[e.isSalarie?n("b-nav-item-dropdown",{staticClass:"rightItem",attrs:{text:"Gestion Compte",right:""}},[e.isResponsable?n("b-dropdown-item",[n("router-link",{staticClass:"routerLink",attrs:{to:"team"}},[e._v("Gérer mon équipe")])],1):e._e(),e.isResponsable?n("b-dropdown-item",[n("router-link",{staticClass:"routerLink",attrs:{to:"register"}},[e._v("Ajouter salarié")])],1):e._e(),e.isSalarie?n("b-dropdown-item",[n("router-link",{staticClass:"routerLink",attrs:{to:"informations"}},[e._v("Fiche salarié\n                    ")])],1):e._e()],1):e._e(),e.isSalarie?n("b-nav-item-dropdown",{staticClass:"rightItem",attrs:{text:"Planning",right:""}},[e.isSalarie?n("b-dropdown-item",[n("router-link",{staticClass:"routerLink",attrs:{to:"planning"}},[e._v("Consultation planning\n                    ")])],1):e._e(),e.isSalarie?n("b-dropdown-item",[n("router-link",{staticClass:"routerLink",attrs:{to:"compteur"}},[e._v("Compteur d'heures\n                    ")])],1):e._e()],1):e._e(),e.isSalarie?n("b-nav-item-dropdown",{staticClass:"rightItem",attrs:{text:"Tableau de bords",right:""}},[e.isSalarie?n("b-dropdown-item",[n("router-link",{staticClass:"routerLink",attrs:{to:"contrats"}},[e._v("Contrats de travail\n                    ")])],1):e._e(),e.isSalarie?n("b-dropdown-item",[n("router-link",{staticClass:"routerLink",attrs:{to:"bilan"}},[e._v("Bilan d'annualisation\n                    ")])],1):e._e(),e.isSalarie?n("b-dropdown-item",[n("router-link",{staticClass:"routerLink",attrs:{to:"solde"}},[e._v("Solde CP\n                    ")])],1):e._e()],1):e._e(),e.isSalarie?n("b-nav-item-dropdown",{staticClass:"rightItem",attrs:{text:"Demandes",right:""}},[e.isSalarie?n("b-dropdown-item",[n("router-link",{staticClass:"routerLink",attrs:{to:"demandes"}},[e._v("Faire une demande\n                    ")])],1):e._e(),e.isResponsable?n("b-dropdown-item",[n("router-link",{staticClass:"routerLink",attrs:{to:"manage"}},[e._v("Gérer les demandes\n                    ")])],1):e._e()],1):e._e(),e.isDrh?n("b-nav-item",{staticClass:"rightItem"},[n("router-link",{staticClass:"routerLink",attrs:{to:"logs"}},[e._v("Logs\n                ")])],1):e._e(),e.isDrh?n("b-nav-item",{staticClass:"rightItem"},[n("router-link",{staticClass:"routerLink",attrs:{to:"absences"}},[e._v("Absences\n                ")])],1):e._e()],1):e._e(),e.isLogged?n("img",{staticClass:"d-inline-block align-top",attrs:{src:a("5d48"),width:"20",height:"20",alt:"BV"},on:{click:e.logout}}):e._e()],1)],1)},o=[],l={data:function(){return{email:"",password:"",user:null,isResponsable:!1,isSalarie:!0,isDrh:!1,isLogged:!1}},beforeCreate:function(){var e=this;setInterval(function(){e.updatLayoutDatas()},100)},methods:{updatLayoutDatas:function(){this.isLogged=null!=localStorage.getItem("jwt"),this.user=JSON.parse(localStorage.getItem("user")),"drh"==this.user.role?(this.isDrh=!0,this.isSalarie=!0,this.isResponsable=!0):"salarie"==this.user.role?this.isSalarie=!0:(this.isResponsable=!0,this.isSalarie=!0)},logout:function(){localStorage.removeItem("jwt"),localStorage.removeItem("user"),this.isLogged=!1,this.isResponsable=!1,this.isSalarie=!0,this.isDrh=!1,this.$router.push("/")}}},u=l,c=(a("e7e5"),a("2877")),d=Object(c["a"])(u,i,o,!1,null,"5dcd97dd",null);d.options.__file="Navbar.vue";var p=d.exports,m=(a("f9e3"),a("2dd8"),{name:"app",data:function(){return{isNotConnected:!0,isDrh:!0,is:!0,isSalarie:!0}},components:{navbar:p}}),f=m,v=(a("5c0b"),Object(c["a"])(f,r,s,!1,null,null,null));v.options.__file="App.vue";var b=v.exports,h=a("8c4f"),g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},A=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("h1",[e._v("VOICI VOTRE PAGE D'ACCUEIL UTILISATEUR")])])}],_={name:"home",components:{}},w=_,C=Object(c["a"])(w,g,A,!1,null,null,null);C.options.__file="Home.vue";var y=C.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isNotConnected?a("div",{staticClass:"col-md-4 container"},[a("h1",[e._v("Connexion")]),a("b-form",{staticClass:"justify-content-center"},[a("b-form-group",{attrs:{label:"Username/email","label-for":"email"}},[a("b-form-input",{attrs:{id:"email",type:"email",required:"",placeholder:"exemple@email.com"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),a("b-form-group",{attrs:{label:"Password:","label-for":"password"}},[a("b-form-input",{attrs:{id:"password",type:"password",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("b-button",{attrs:{id:"submitButton",type:"submit",variant:"primary"},on:{click:e.handleSubmit}},[e._v("Connection")])],1)],1):e._e()},x=[],j={data:function(){return{email:"",password:"",isNotConnected:null==localStorage.getItem("jwt")}},methods:{handleSubmit:function(e){var t=this;e.preventDefault(),this.password.length>0&&this.$http.post("https://apigtaproject.herokuapp.com/login",{email:this.email,password:this.password}).then(function(e){var a=e.data.user.role;localStorage.setItem("user",JSON.stringify(e.data.user)),localStorage.setItem("jwt",e.data.token),null!=localStorage.getItem("jwt")&&(t.$emit("loggedIn"),null!=t.$route.params.nextUrl?t.$router.push(t.$route.params.nextUrl):"salarie"==a?(t.isNotConnected=!1,t.$router.push("admin")):"drh"==a?t.$router.push("dashboard"):t.$router.push("admin"))})}}},S=j,O=(a("0a4f"),Object(c["a"])(S,E,x,!1,null,"3c77713c",null));O.options.__file="Login.vue";var k=O.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md-6 container"},[a("h1",[e._v("Register")]),a("b-form",{staticClass:"justify-content-center"},[a("b-form-group",{attrs:{label:"Name","label-for":"name"}},[a("b-form-input",{attrs:{id:"name",type:"text",required:"",placeholder:"Jean Dupont"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("b-form-group",{attrs:{label:"Email","label-for":"email"}},[a("b-form-input",{attrs:{id:"email",type:"email",required:"",placeholder:"jeandupont@exemple.fr"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),a("b-form-group",{attrs:{label:"Password","label-for":"password"}},[a("b-form-input",{attrs:{id:"password",type:"password",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("b-form-group",{attrs:{label:"Confirm Password","label-for":"password-confirm"}},[a("b-form-input",{attrs:{id:"password-confirm",type:"password",required:""},model:{value:e.password_confirmation,callback:function(t){e.password_confirmation=t},expression:"password_confirmation"}})],1),a("b-form-group",{attrs:{label:"Role","label-for":"admin_account"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.role,expression:"role"}],staticClass:"custom-select my-1 mr-sm-2",attrs:{id:"admin_account"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.role=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"salarie"}},[e._v("salarie")]),a("option",{attrs:{value:"resp"}},[e._v("resp")])])]),a("b-button",{attrs:{id:"submitRegisterButton",type:"submit",variant:"primary"},on:{click:e.handleSubmit}},[e._v("\n            Register\n        ")])],1)],1)},L=[],D=(a("7f7f"),{props:["nextUrl"],data:function(){return{name:"",email:"",password:"",password_confirmation:"",role:""}},methods:{handleSubmit:function(e){var t=this;if(e.preventDefault(),!(this.password===this.password_confirmation&&this.password.length>0))return this.password="",this.password_confirmation="",alert("Passwords do not match");var a="https://apigtaproject.herokuapp.com/register";this.$http.post(a,{name:this.name,email:this.email,password:this.password,role:this.role}).then(function(e){if(localStorage.setItem("user",JSON.stringify(e.data.user)),localStorage.setItem("jwt",e.data.token),null!=localStorage.getItem("jwt")){if(t.$emit("loggedIn"),null==t.$route.params.nextUrl)return t.$router.push("/userboard"),alert("User successfully created");t.$router.push(t.$route.params.nextUrl)}}).catch(function(e){console.error(e)})}}}),N=D,T=(a("b6bf"),Object(c["a"])(N,I,L,!1,null,"d8ed90fc",null));T.options.__file="Register.vue";var R=T.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v("Welcome to regular users page")]),a("h2",[e._v(e._s(e.msg))])])},P=[],J={data:function(){return{msg:"The commoners"}}},Y=J,q=(a("163b"),Object(c["a"])(Y,B,P,!1,null,"7ae26e7b",null));q.options.__file="UserBoard.vue";var M=q.exports,G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h1",[e._v("Demandes")]),a("p",[e._v("Ici, vous pouvez réaliser diverses demandes. C'est dernière seront validées par votre N+1.")]),a("form",{staticClass:"col-md-12"},[a("div",{staticClass:"form-inline form-group"},[a("label",{attrs:{for:"debut"}},[e._v("Date de début")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.debut,expression:"debut"}],staticClass:"form-control",attrs:{type:"date",id:"debut"},domProps:{value:e.debut},on:{input:function(t){t.target.composing||(e.debut=t.target.value)}}}),a("label",{staticClass:"col-form-label",attrs:{for:"fin"}},[e._v("Date de fin")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.fin,expression:"fin"}],staticClass:"form-control",attrs:{type:"date",id:"fin"},domProps:{value:e.fin},on:{input:function(t){t.target.composing||(e.fin=t.target.value)}}}),a("label",{staticClass:"col-form-label",attrs:{for:"typeabsence"}},[e._v("Motif")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.abs,expression:"abs"}],staticClass:"form-control",attrs:{id:"typeabsence"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.abs=t.target.multiple?a:a[0]}}},e._l(e.absences,function(t){return a("option",[e._v(e._s(t.libelle))])}))]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-form-label",attrs:{for:"comments"}},[e._v("Commentaires")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.comments,expression:"comments"}],staticClass:"form-control",attrs:{id:"comments",rows:"3"},domProps:{value:e.comments},on:{input:function(t){t.target.composing||(e.comments=t.target.value)}}})])]),a("b-button",{attrs:{id:"submitButton",type:"submit",variant:"primary"},on:{click:e.addAbsence}},[e._v("Ajouter absence")])],1)},F=[],W=(a("ac6a"),{data:function(){return{debut:"",fin:"",abs:"",comments:"",user:"",idAbs:"",event:{},absences:[]}},methods:{getAllAbsences:function(){var e=this,t="https://apigtaproject.herokuapp.com/absences";this.$http.get(t,{}).then(function(t){t.data.absence.forEach(function(t){var a={};a.id=t.id,a.libelle=t.libelle,e.absences.push(a)})})},addAbsence:function(){var e=this;this.absences.forEach(function(t){t.libelle===e.abs&&(e.idAbs=t.id)}),this.user=JSON.parse(localStorage.getItem("user"));var t="https://apigtaproject.herokuapp.com/events";this.$http.post(t,{event:{debut:this.debut,fin:this.fin,absence_id:this.idAbs,user_id:this.user.id,commentaire:this.comments}})}},beforeMount:function(){this.getAllAbsences()}}),z=W,V=(a("a3d9"),Object(c["a"])(z,G,F,!1,null,"7a57960e",null));V.options.__file="Demandes.vue";var Q=V.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md-6 container"},[a("h1",[e._v("Information du compte")]),a("p",[e._v("Identifiant utilisateur: "),a("span",[e._v(e._s(e.user.id))])]),a("p",[e._v("Nom utilisateur: "+e._s(e.user.name))]),a("p",[e._v("Email utilisateur: "+e._s(e.user.email))]),a("p",[e._v("Role utilisateur: "+e._s(e.user.role))])])},U=[],X={data:function(){return{user:JSON.parse(localStorage.getItem("user"))}},methods:{}},Z=X,H=(a("5005"),Object(c["a"])(Z,K,U,!1,null,"f3b000dc",null));H.options.__file="Informations.vue";var $=H.exports,ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h1",[e._v("Planning")]),a("button",{staticClass:"btn btn-outline-warning",attrs:{type:"button"},on:{click:e.filterAbsences}},[e._v("Absences")]),a("button",{staticClass:"btn btn-outline-info",attrs:{type:"button"},on:{click:e.filterHoraires}},[e._v("Horaires")]),a("button",{staticClass:"btn btn-outline-success",attrs:{type:"button"},on:{click:e.getAllEvents}},[e._v("Tout afficher")]),a("form",{staticClass:"form-inline"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"datebegin"}},[e._v("De")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.datebegin,expression:"datebegin"}],staticClass:"form-control",attrs:{type:"date",id:"datebegin"},domProps:{value:e.datebegin},on:{input:function(t){t.target.composing||(e.datebegin=t.target.value)}}}),a("label",{staticClass:"col-form-label",attrs:{for:"dateEnded"}},[e._v("À")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.dateEnded,expression:"dateEnded"}],staticClass:"form-control",attrs:{type:"date",value:"2011-08-19",id:"dateEnded"},domProps:{value:e.dateEnded},on:{input:function(t){t.target.composing||(e.dateEnded=t.target.value)}}}),a("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"button"},on:{click:e.validPeriod}},[e._v("Valider période")])])]),a("div",{staticClass:"row col-md-12"},e._l(e.events,function(t){return a("div",{staticClass:"col-md-4 card"},[a("div",{staticClass:"card-header"},[e._v("\n                "+e._s(t.name)+"\n            ")]),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[e._v(e._s(t.libelle)+":")]),a("p",{staticClass:"card-text"},[e._v("Date Début:  "+e._s(t.debut))]),a("p",{staticClass:"card-text"},[e._v("Date Fin:  "+e._s(t.fin))])])])}))])},te=[],ae={data:function(){return{datebegin:"",dateEnded:"",tempTab:[],events:[]}},methods:{getAllEvents:function(e){var t=this;this.events=[],this.$http.get("https://apigtaproject.herokuapp.com/events",{}).then(function(a){a.data.events.forEach(function(e){t.events.push(e)}),e&&e()})},filterAbsences:function(){var e=this;this.getAllEvents(function(){e.events=e.events.filter(function(e){return"Absence"===e.intitule})})},filterHoraires:function(){var e=this;this.getAllEvents(function(){e.events=e.events.filter(function(e){return"Horaire"===e.intitule})})},validPeriod:function(){var e=this,t=new Date(this.datebegin),a=new Date(this.dateEnded);this.events.forEach(function(n){new Date(n.debut)<t&&new Date(n.fin)<a&&(e.events=e.events.filter(function(e){return new Date(e.debut)>=t}))})}},mounted:function(){this.getAllEvents()}},ne=ae,re=(a("ebef"),Object(c["a"])(ne,ee,te,!1,null,"7fc09f50",null));re.options.__file="Planning.vue";var se=re.exports,ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[e._v("COMPTEUR D'HEURES")])},oe=[],le={},ue=Object(c["a"])(le,ie,oe,!1,null,null,null);ue.options.__file="CompteurHeures.vue";var ce=ue.exports,de=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[e._v("CONTRAT DE TRAVAIL")])},pe=[],me={},fe=Object(c["a"])(me,de,pe,!1,null,null,null);fe.options.__file="Contrats.vue";var ve=fe.exports,be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[e._v("BILAN D'ANNUALISATION")])},he=[],ge={},Ae=Object(c["a"])(ge,be,he,!1,null,null,null);Ae.options.__file="Bilan.vue";var _e=Ae.exports,we=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[e._v("SOLDE CONGES PAYE")])},Ce=[],ye={},Ee=Object(c["a"])(ye,we,Ce,!1,null,null,null);Ee.options.__file="SoldeCP.vue";var xe=Ee.exports,je=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[e._v("GESTION DES DEMANDES")])},Se=[],Oe={},ke=Object(c["a"])(Oe,je,Se,!1,null,null,null);ke.options.__file="ManageDemands.vue";var Ie=ke.exports,Le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[e._v("Logs Admin")])},De=[],Ne={},Te=Object(c["a"])(Ne,Le,De,!1,null,null,null);Te.options.__file="Logs.vue";var Re=Te.exports,Be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h1",[e._v("Absences")]),a("p",[e._v("Vous pouvez ajouter des motifs d'absences, pour toutes modifications merci de contacter\n        l'administrateur de la plateforme.")]),a("b-form",{staticClass:"form-inline"},[a("b-form-input",{attrs:{id:"inputAbsence",type:"text",required:"",placeholder:"Congés payés"},model:{value:e.inputAbsence,callback:function(t){e.inputAbsence=t},expression:"inputAbsence"}}),a("select",{directives:[{name:"model",rawName:"v-model",value:e.libelletype,expression:"libelletype"}],staticClass:"form-control",attrs:{id:"typeabsence"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.libelletype=t.target.multiple?a:a[0]}}},e._l(e.types,function(t){return a("option",[e._v(e._s(t.libelle))])})),a("b-button",{attrs:{id:"submitButton",type:"submit",variant:"primary"},on:{click:e.addAbsence}},[e._v("Ajouter absence")])],1),a("table",{staticClass:"table"},[e._m(0),a("tbody",e._l(e.absences,function(t){return a("tr",[a("th",{attrs:{scope:"row"}},[e._v(e._s(t.id))]),a("td",[e._v(e._s(t.libelle))])])}))])],1)},Pe=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{attrs:{scope:"col"}},[e._v("Id")]),a("th",{attrs:{scope:"col"}},[e._v("Libelle de l'absence")])])])}],Je={data:function(){return{inputAbsence:"",absences:[],idType:"",libelletype:"",types:[]}},methods:{getAllAbsences:function(){var e=this;this.absences=[];var t="https://apigtaproject.herokuapp.com/absences";this.$http.get(t,{}).then(function(t){t.data.absence.forEach(function(t){var a={};a.id=t.id,a.libelle=t.libelle,e.absences.push(a)})})},getAllType:function(){var e=this,t="https://apigtaproject.herokuapp.com/types";this.$http.get(t,{}).then(function(t){t.data.type.forEach(function(t){var a={};a.id=t.id,a.libelle=t.libelle,e.types.push(a)})})},addAbsence:function(){var e=this;this.types.forEach(function(t){t.libelle===e.libelletype&&(e.idType=t.id)});var t="http://localhost:3000/absences";this.$http.post(t,{absence:{libelle:this.inputAbsence,type_id:this.idType}}).then(function(t){e.getAllAbsences()})}},beforeMount:function(){this.getAllAbsences(),this.getAllType()}},Ye=Je,qe=(a("1317"),Object(c["a"])(Ye,Be,Pe,!1,null,"5228e84e",null));qe.options.__file="Absences.vue";var Me=qe.exports,Ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h1",[e._v("Gestion de mon équipe")]),a("b-table",{attrs:{striped:"",hover:"",items:e.items}})],1)},Fe=[],We=[{id:1,Nom:"Schoepfer Rudy",Email:"rschoepfer@test.fr",role:"salarie"},{id:2,Nom:"Rolland Maxime",Email:"rmaxime@test.fr",role:"salarie"},{id:3,Nom:"Courant Maxime",Email:"cmaxime@test.fr",role:"salarie"},{id:4,Nom:"Saint Martin Matthieu",Email:"smmatthieu@test.fr",role:"salarie"}],ze={data:function(){return{items:We}}},Ve=ze,Qe=(a("40ba"),Object(c["a"])(Ve,Ge,Fe,!1,null,"3c25a59a",null));Qe.options.__file="Team.vue";var Ke=Qe.exports;n["a"].use(h["a"]);var Ue=new h["a"]({routes:[{path:"/",name:"home",component:y,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:k,meta:{guest:!0}},{path:"/register",name:"register",component:R,meta:{requiresAuth:!0}},{path:"/dashboard",name:"userboard",component:M,meta:{requiresAuth:!0}},{path:"/demandes",name:"demandes",component:Q,meta:{requiresAuth:!0}},{path:"/informations",name:"informations",component:$,meta:{requiresAuth:!0}},{path:"/planning",name:"planning",component:se,meta:{requiresAuth:!0}},{path:"/compteur",name:"compteur",component:ce,meta:{requiresAuth:!0}},{path:"/contrats",name:"contrats",component:ve,meta:{requiresAuth:!0}},{path:"/bilan",name:"bilan",component:_e,meta:{requiresAuth:!0}},{path:"/solde",name:"solde",component:xe,meta:{requiresAuth:!0}},{path:"/manage",name:"manage",component:Ie,meta:{requiresAuth:!0}},{path:"/logs",name:"logs",component:Re,meta:{requiresAuth:!0}},{path:"/absences",name:"absences",component:Me,meta:{requiresAuth:!0}},{path:"/team",name:"team",component:Ke,meta:{requiresAuth:!0}}]});Ue.beforeEach(function(e,t,a){if(e.matched.some(function(e){return e.meta.requiresAuth}))if(null==localStorage.getItem("jwt"))a({path:"/login",params:{nextUrl:e.fullPath}});else{var n=JSON.parse(localStorage.getItem("user"));e.matched.some(function(e){return e.meta.is_admin})?1==n.is_admin?a():a({name:"userboard"}):a()}else e.matched.some(function(e){return e.meta.guest})?null==localStorage.getItem("jwt")?a():a({name:"userboard"}):a()});var Xe=Ue,Ze=a("9483");Object(Ze["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var He=a("9f7b"),$e=a("bc3a"),et=a.n($e),tt=a("859b"),at=a.n(tt),nt=(a("d355"),a("05f4"),a("435f")),rt=a.n(nt);n["a"].prototype.$http=et.a,n["a"].config.productionTip=!1,n["a"].use(He["a"]),n["a"].use(rt.a,{locale:"en"}),n["a"].use(at.a),new n["a"]({router:Xe,render:function(e){return e(b)}}).$mount("#app")},"586d":function(e,t,a){},"5c0b":function(e,t,a){"use strict";var n=a("5e27"),r=a.n(n);r.a},"5d48":function(e,t){e.exports="data:image/png;base64,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"},"5e27":function(e,t,a){},"620f":function(e,t,a){},"6d19":function(e,t,a){},"8aa0":function(e,t,a){},a3d9:function(e,t,a){"use strict";var n=a("586d"),r=a.n(n);r.a},b27a:function(e,t,a){},b6bf:function(e,t,a){"use strict";var n=a("4455"),r=a.n(n);r.a},e7e5:function(e,t,a){"use strict";var n=a("eefc"),r=a.n(n);r.a},ebef:function(e,t,a){"use strict";var n=a("8aa0"),r=a.n(n);r.a},eefc:function(e,t,a){},f28d:function(e,t,a){}});
//# sourceMappingURL=app.bcce53e5.js.map