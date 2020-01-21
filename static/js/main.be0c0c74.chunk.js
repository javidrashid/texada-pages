(this.webpackJsonptexadaa=this.webpackJsonptexadaa||[]).push([[0],{145:function(e,t,a){e.exports=a(288)},149:function(e,t,a){},150:function(e,t,a){},287:function(e,t,a){},288:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(11),o=a.n(l),r=(a(149),a(63)),d=a(22),c=(a(150),a(39)),u=a(40),s=a(42),m=a(41),h=a(43),p=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).call(this))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark"},i.a.createElement(r.b,{className:"navbar-brand",to:"/"},"Texada")))}}]),t}(n.Component),v=a(143),g=a(142),f=(a(155),a(134)),b=(a(156),a(135)),E=a(292),C=a(293),y=a(140),w=a(294),k=a(17),T=a(30),O=a(29),N=(a(131),T.object().shape({description:T.string().required("Description is needed").min(10,"please provide more than 5 characters").max(50,"Can't be more than 50 characters"),datetime:T.string().default((function(){return new Date})).required("Date is needed").typeError("That doesn't look like a proper date time"),longitude:T.number().required("Longitude is needed").typeError("That doesn't look like a number"),latitude:T.number().required("Latitude is needed").typeError("That doesn't look like a number"),elevation:T.number().required("Elevation is needed").min(2,"Minimum of 2 is needed").typeError("Elevation has to be a number")})),j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).handleSubmit=function(){console.log("handling submit")},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(e){var t=this;return i.a.createElement(k.d,{initialValues:{description:"",datetime:"",longitude:"",latitude:"",elevation:""},validationSchema:N},(function(e){var a=e.touched,n=e.handleChange,l=e.handleBlur,o=e.handleSubmit,r=e.isValidating,d=e.isSubmitting,c=e.isValid,u=e.values,s=e.errors;return i.a.createElement("div",null,i.a.createElement(E.a,{show:t.props.show,onHide:t.props.handleClose},i.a.createElement(E.a.Header,{closeButton:!0},i.a.createElement(E.a.Title,null,"Add New Item")),i.a.createElement(k.c,{onSubmit:o},i.a.createElement(E.a.Body,null,i.a.createElement(C.a.Row,null,i.a.createElement(C.a.Group,{as:y.a,md:"6"},i.a.createElement(C.a.Label,null,"Description"),i.a.createElement(k.b,Object(b.a)({value:t.props.description,onChange:n,onBlur:l,className:"form-control",id:"description",placeholder:"Description",name:"description"},"className","form-control ".concat(a.description&&s.description?"is-invalid":""))),i.a.createElement(k.a,{component:"div",name:"description",className:"invalid-feedback"})),i.a.createElement(C.a.Group,{as:y.a,md:"6"},i.a.createElement(C.a.Label,{htmlFor:"datetime"},"Date Time"),i.a.createElement("input",{type:"datetime-local",value:t.props.datetime,onChange:n,placeholder:"Date and Time",onBlur:l,id:"datetime",name:"datetime",className:"form-control ".concat(a.datetime&&s.datetime?"is-invalid":"")}),i.a.createElement(k.a,{component:"div",name:"datetime",className:"invalid-feedback"}))),i.a.createElement(C.a.Row,null,i.a.createElement(C.a.Group,{as:y.a,md:"6"},i.a.createElement(C.a.Label,{htmlFor:"longitude"},"Longitude "),i.a.createElement(k.b,{type:"text",name:"longitude",id:"longitude",placeholder:"Longitude",value:t.props.longitude,onChange:n,onBlur:l,className:"form-control ".concat(a.longitude&&s.longitude?"is-invalid":"")}),i.a.createElement(k.a,{component:"div",name:"longitude",className:"invalid-feedback"})),i.a.createElement(C.a.Group,{as:y.a,md:"6"},i.a.createElement(C.a.Label,{htmlFor:"latitude"},"Latitude"),i.a.createElement(C.a.Control,{id:"latitude",placeholder:"Latitude",value:t.props.latitude,name:"latitude",onChange:n,onBlur:l,className:"form-control ".concat(a.latitude&&s.latitude?"is-invalid":"")}),i.a.createElement(k.a,{component:"div",name:"latitude",className:"invalid-feedback"}))),i.a.createElement(C.a.Row,null,i.a.createElement(C.a.Group,{as:y.a,md:"12"},i.a.createElement("label",{htmlFor:"elevation"},"Elevation"),i.a.createElement("input",{type:"text",name:"elevation",value:t.props.elevation,onChange:n,onBlur:l,id:"elevation",className:"form-control ".concat(a.elevation&&s.elevation?"is-invalid":"")}),i.a.createElement(k.a,{component:"div",name:"elevation",className:"invalid-feedback"})))),i.a.createElement(E.a.Footer,null,i.a.createElement(w.a,{variant:"secondary",onClick:function(e){return t.props.handleClose()}},"Close"),i.a.createElement(O.a,null),i.a.createElement("button",{className:"btn btn-primary",onClick:function(e){return t.props.submitEntry(r,d,c,u,s)}},"Add Entry")))))}))}}]),t}(n.Component),D=a(45),S=(a(287),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleChangeDescription=function(e){a.setState({description:e.target.value})},a.handleChangeDateTime=function(e){a.setState({datetime:e.target.value})},a.handleChangeLongitude=function(e){a.setState({longitude:e.target.value})},a.handleChangeLatitude=function(e){a.setState({latitude:e.target.value})},a.handleChangeElevation=function(e){a.setState({elevation:e.target.value})},a.handleClose=function(e,t){a.setState({show:!1}),Object(O.b)("You didn't add any new entries...")},a.submitEntry=function(e,t,n,i,l){console.log("setSubmitting is",t,"isValid is",n,"Erros are",l,"values are",i),n&&""!==i.description?(console.log("Form Submitting"),a.state.show=!1,a.setState({formdata:[].concat(Object(v.a)(a.state.formdata),[{description:i.description,datetime:i.datetime,longitude:i.longitude,latitude:i.latitude,elevation:i.elevation}])}),O.b.success("You have successfullt added a new entry..."),i.description="",i.datetime="",i.longitude="",i.latitude="",i.elevation="",l.description="",l.datetime="",l.longitude="",l.latitude="",l.elevation=""):console.log("Not submitting, form is invalid")},a.searchingFor=function(e){return function(t,a){return t.description.toLowerCase().includes(e[a].description.toLowerCase())}},a.state={show:!1,description:"",datetime:"",longitude:"",latitude:"",elevation:"",filter:"",formdata:[]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({formdata:[{id:1,description:"Cesna 120",datetime:"2016-10-12T12:00:00-05:00",longitude:"43.2583264",latitude:"-81.8149807",elevation:"500"},{id:1,description:"Cesna 120",datetime:"2016-10-13T12:00:00-05:00",longitude:"42.559112",latitude:"-79.286693",elevation:"550"},{id:1,description:"Cesna 120",datetime:"2016-10-14T12:00:00-05:00",longitude:"43.559112",latitude:"-85.286693",elevation:"600"},{id:1,description:"Cesna 120",datetime:"2016-10-15T12:00:00-05:00",longitude:"42.3119735",latitude:"-83.0941179",elevation:"650"},{id:2,description:"DC-6 Twin Otter",datetime:"2016-10-12T12:00:00-05:00",longitude:"43.459112",latitude:"-80.386693",elevation:"500"},{id:2,description:"DC-6 Twin Otter",datetime:"2016-10-13T12:00:00-05:00",longitude:"42.459112",latitude:"-79.386693",elevation:"550"},{id:2,description:"DC-6 Twin Otter",datetime:"2016-10-14T12:00:00-05:00",longitude:"43.459112",latitude:"-85.386693",elevation:"450"},{id:2,description:"DC-6 Twin Otter",datetime:"2016-10-15T12:00:00-05:00",longitude:"44.459112",latitude:"-81.386693",elevation:"400"},{id:3,description:"Piper M600",datetime:"2016-10-15T12:00:00-05:00",longitude:"44.459112",latitude:"-81.386693",elevation:"500"},{id:3,description:"Piper M600",datetime:"2016-10-15T12:00:00-05:00",longitude:"45.459112",latitude:"-82.386693",elevation:"600"},{id:3,description:"Piper M600",datetime:"2016-10-15T12:00:00-05:00",longitude:"46.459112",latitude:"-83.386693",elevation:"700"},{id:3,description:"Piper M600",datetime:"2016-10-15T12:00:00-05:00",longitude:"47.459112",latitude:"-84.386693",elevation:"800"},{id:3,description:"Piper M600",datetime:"2016-10-15T12:00:00-05:00",longitude:"48.459112",latitude:"-85.386693",elevation:"900"},{id:4,description:"Art Boom 6500",datetime:"2017-08-04T14:20:38-05:00",longitude:"43.7634618",latitude:"-79.3688191",elevation:"800"},{id:4,description:"Art Boom 6500",datetime:"2017-08-04T16:20:38-05:00",longitude:"43.8001468",latitude:"-79.2342365",elevation:"400"},{id:4,description:"Art Boom 6500",datetime:"2017-08-04T14:20:38-05:00",longitude:"44.51165",latitude:"-80.1239422",elevation:"550"},{id:4,description:"Art Boom 6500",datetime:"2017-08-04T14:20:38-05:00",longitude:"43.1501439",latitude:"-79.0504945",elevation:"300"}]})}},{key:"handleShowForActualModal",value:function(){this.setState({show:!0})}},{key:"render",value:function(){var e=this,t=this.state.formdata;return i.a.createElement("div",{className:"container"},i.a.createElement(O.a,null),i.a.createElement("div",{className:"row add-content-head"},i.a.createElement("div",{className:"col-sm-10"}),i.a.createElement("div",{className:"col-sm-2"},i.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.handleShowForActualModal()}},"Add an Entry"))),i.a.createElement(g.a,{data:t,filterable:!0,defaultFilterMethod:function(e,t){return String(t[e.id])===e.value},columns:[{Header:"Texada Sample Data",columns:[{Header:"Description",id:"description",accessor:function(e){return e.description},filterMethod:function(e,t){return Object(D.a)(t,e.value,{keys:["description"]})},filterAll:!0},{Header:"Longitude",id:"longitude",accessor:function(e){return e.longitude},filterMethod:function(e,t){return Object(D.a)(t,e.value,{keys:["longitude"]})},filterAll:!0},{Header:"Latitude",id:"latitude",accessor:function(e){return e.latitude},filterMethod:function(e,t){return Object(D.a)(t,e.value,{keys:["latitude"]})},filterAll:!0},{Header:"Elevation",id:"elevation",accessor:function(e){return e.elevation},filterMethod:function(e,t){return Object(D.a)(t,e.value,{keys:["elevation"]})},filterAll:!0},{Header:"Date Time",id:"datetime",accessor:function(e){return e.datetime},filterMethod:function(e,t){return Object(D.a)(t,e.value,{keys:["datetime"]})},filterAll:!0},{Header:"Delete?",Cell:function(t){return i.a.createElement("div",{style:{textAlign:"center"},className:"btn btn-danger",onClick:function(){Object(f.confirmAlert)({customUI:function(a){var n=a.onClose;return i.a.createElement("div",{className:"custom-ui"},i.a.createElement("h1",null,"Are you sure?"),i.a.createElement("p",null,"You want to delete this entry?"),i.a.createElement("button",{onClick:n},"No"),i.a.createElement("button",{onClick:function(){var a=e.state.formdata;a.splice(t.index,1),e.setState({data:a}),n(),O.b.info("So you deleted an entry...")}},"Yes, Delete it!"))}})}},"Remove")},filterAll:!1}]}],defaultPageSize:10,className:"-striped -highlight"}),i.a.createElement(j,{show:this.state.show,props:this.state,handleChangeDescription:this.handleChangeDescription,handleChangeDateTime:this.handleChangeDateTime,handleChangeLongitude:this.handleChangeLongitude,handleChangeLatitude:this.handleChangeLatitude,handleChangeElevation:this.handleChangeElevation,submitEntry:this.submitEntry,handleClose:this.handleClose}))}}]),t}(n.Component));var A=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(r.a,null,i.a.createElement(p,null),i.a.createElement(d.c,null,i.a.createElement(d.a,{path:"/",component:S}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[145,1,2]]]);
//# sourceMappingURL=main.be0c0c74.chunk.js.map