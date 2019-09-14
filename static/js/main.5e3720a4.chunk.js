(window["webpackJsonppama-demo-app"]=window["webpackJsonppama-demo-app"]||[]).push([[0],{22:function(e){e.exports=JSON.parse('{"resourceType":"ServiceRequest","id":"example-request-id","extension":[{"url":"http://fhir.org/argonaut/Extension/pama-rating","valueCodeableConcept":{"coding":[{"system":"http://fhir.org/argonaut/CodeSystem/pama-rating","code":"appropriate"}]}},{"url":"http://fhir.org/argonaut/Extension/pama-rating-qcdsm-consulted","valueString":"example-gcode"},{"url":"http://fhir.org/argonaut/Extension/pama-rating-consult-id","valueUri":"urn:uuid:55f3b7fc-9955-420e-a460-ff284b2956e6"}],"status":"draft","intent":"plan","code":{"coding":[{"system":"http://www.ama-assn.org/go/cpt","code":"75561","display":"Cardiac MRI"}],"text":"Cardiac MRI"},"subject":{"reference":"Patient/MRI-59879846"},"reasonCode":[{"coding":[{"system":"http://snomed.info/sct","code":"13213009","display":"Congenital heart disease"}]}]}')},24:function(e,t,a){e.exports=a(60)},29:function(e,t,a){},52:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n,o=a(0),r=a.n(o),s=a(21),i=a.n(s),c=(a(29),a(12)),p=a(10),u=a.n(p),d=a(11),l=a.n(d),m=(a(52),a(22)),g=a(23),f=a.n(g).a.parse(window.location.search),h=[window.parent,window.opener].filter(function(e){return e!==window.self})[0],w=new Promise(function(e,t){f.iss?l.a.oauth2.authorize({client_id:"my_web_app",scope:"patient/*.read"}):f.state&&l.a.oauth2.ready().then(function(t){n=t.state.tokenResponse.smart_messaging_origin,e(t.state.tokenResponse.appContext)})}),v=function(e){var t=JSON.parse(e.value);h.postMessage({messageId:u.a.v4(),messageType:"scratchpad.update",payload:{resource:t}},n),h.postMessage({messageId:u.a.v4(),messageType:"ui.done"},n)};var y=function(){var e=Object(o.useState)(!1),t=Object(c.a)(e,2),a=t[0],s=t[1],i=Object(o.useState)({selections:[]}),p=Object(c.a)(i,2),u=p[0],d=p[1];Object(o.useEffect)(function(){w.then(function(e){s(!0),d(JSON.parse(e))})},[]);var l={},g=Object(o.useRef)(),f=h&&n&&a&&u.selections.length;if(f){var y=u.selections[0].split("/")[1];l=Object.assign(m,{id:y})}return r.a.createElement("div",{className:"App"},"Looks like you're trying to place a PAMA order.  Here is an example for you to edit...",f&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("button",{onClick:function(e){return v(g.current)}},"Update order")),r.a.createElement("textarea",{ref:g},JSON.stringify(l,null,2)))||" (once things are ready).")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=document.getElementById("root");i.a.render(r.a.createElement(y,null),b),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.5e3720a4.chunk.js.map