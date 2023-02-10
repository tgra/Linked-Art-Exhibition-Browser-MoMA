(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[487],{1482:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/datasets/combined/persons/nationality/us/surname_letter",function(){return t(8286)}])},9888:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(5893),i=t(892);function s(e){let{id:n,_label:t,born:s,died:l}=e,o=null==n?void 0:n.match(/[0-9]+$/);return null!==o&&o[0],s=s.split("T")[0].split("-")[0],l=l.split("T")[0].split("-")[0],(0,r.jsxs)(i.Z.Item,{variant:"dark",action:!0,href:"#link"+n.split("/").pop(),children:[t," "]},n)}},2796:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var r=t(5893),i=t(6144),s=t(682),l=t(4051),o=t(1555),a=t(4076),c=t(892),d=t(1664),u=t.n(d);function h(e){let{id:n,_label:t,born:d,died:h,total_exhibitions:x,nationality:p,exhibitions:j,gender:m}=e,f=null==n?void 0:n.match(/[0-9]+$/);null!==f&&f[0],d=d.split("T")[0].split("-")[0],h=h.split("T")[0].split("-")[0];let b={};for(let e in j.forEach(function(e){let n=e.start.split("-")[0].substring(0,3);void 0==b[n]&&(b[n]=[]),b[n].push(e)}),b)b[e]=b[e].sort((e,n)=>e.start>n.start?1:-1);var v=0,E=0,Z=0,y=1e13;for(let e in b){var O=b[e].length;O>E&&(E=O,v=e),O<y&&(Z=e,y=O)}return(0,r.jsxs)(i.Z.Pane,{eventKey:"#link"+n.split("/").pop(),children:[(0,r.jsx)("h3",{children:t}),(0,r.jsxs)(s.Z,{className:"bio",children:[(0,r.jsxs)(l.Z,{children:[(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("b",{children:"Born"})," ",d," ",(0,r.jsx)("sup",{children:(0,r.jsx)(u(),{href:"/datasets/combined/indexes/person/birth_date/"+d,children:"(click to view other people born in this year)"})})]}),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("b",{children:"Died"})," ",h]})]}),(0,r.jsxs)(l.Z,{children:[(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("b",{children:"Nationality"})," ",p]}),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("b",{children:"Gender"})," ",m]})]})]}),(0,r.jsx)("br",{}),(0,r.jsx)("h4",{children:"Exhibitions"}),(0,r.jsxs)("p",{children:["In this dataset, ",(0,r.jsx)("b",{children:t})," was involved in ",(0,r.jsx)("b",{children:x})," exhibitions across ",(0,r.jsx)("b",{children:Object.entries(b).length})," decades."]}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["Decade with the most number of exhibitions was the ",(0,r.jsxs)("b",{children:[v,"0s"]})," with ",(0,r.jsx)("b",{children:E})," exhibitions."]}),(0,r.jsxs)("li",{children:["Decade with the least number of exhibitions was the ",(0,r.jsxs)("b",{children:[Z,"0s"]})," with ",(0,r.jsx)("b",{children:y})," exhibitions."]})]}),(0,r.jsx)("br",{}),(0,r.jsx)(a.Z,{alwaysOpen:!0,children:Object.entries(b).map(e=>{let[n,t]=e;return(0,r.jsxs)(a.Z.Item,{eventKey:"section_"+n,children:[(0,r.jsxs)(a.Z.Header,{children:[n,"0s (",t&&Array.isArray(t)?t.length:"",")"]}),(0,r.jsx)(a.Z.Body,{children:(0,r.jsx)(c.Z,{children:null==t?void 0:t.map(e=>(0,r.jsxs)(c.Z.Item,{variant:"light",action:!0,href:"/exhibition-browser-static-demo/exhibition/"+e.id.split("/").pop(),children:[e.start.split("-")[0]," : ",e._label]},"influenced"+e.id))})})]},"section_"+n)})})]},"#link"+n.split("/").pop())}},8286:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return b}});var r=t(5893),i=t(7294),s=t(9008),l=t.n(s),o=t(3559),a=t(682),c=t(4051),d=t(1555),u=t(4539),h=t(4076),x=t(6144),p=t(892),j=t(9888),m=t(2796);let f=e=>{let{personSummaryDataList:n}=e;return void 0==n&&(n={}),(0,r.jsx)(o.Z,{children:(0,r.jsxs)("div",{children:[(0,r.jsxs)(l(),{children:[(0,r.jsx)("title",{children:"MoMA & Alternative New York Exhibitions"}),(0,r.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css",integrity:"sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor",crossOrigin:"anonymous"}),(0,r.jsx)("script",{src:"https://unpkg.com/react/umd/react.production.min.js",async:!0})]}),(0,r.jsx)("main",{children:(0,r.jsxs)(a.Z,{children:[(0,r.jsx)("h1",{children:"MoMA & Alternative New York Exhibitions"}),(0,r.jsx)(c.Z,{children:(0,r.jsxs)(d.Z,{children:[(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(u.Z.Item,{href:"../../../../../../",children:"Home"}),(0,r.jsx)(u.Z.Item,{href:"../../../../../",children:"Datasets"}),(0,r.jsx)(u.Z.Item,{href:"../../../../",children:"Combined"}),(0,r.jsx)(u.Z.Item,{children:"Persons"}),(0,r.jsx)(u.Z.Item,{children:"Nationality"}),(0,r.jsx)(u.Z.Item,{children:"US"}),(0,r.jsx)(u.Z.Item,{children:"Surname letter"})]}),(0,r.jsx)("h1",{children:"Persons - ordered by surname letter  "}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Dataset:Combined"}),(0,r.jsx)("li",{children:"Nationality:US"})]})]})}),(0,r.jsx)(c.Z,{children:(0,r.jsx)(h.Z,{children:Object.entries(n).sort().map(e=>{let[n,t]=e;return(0,r.jsxs)(h.Z.Item,{eventKey:"section_"+n,children:[(0,r.jsx)(h.Z.Header,{children:n}),(0,r.jsx)(h.Z.Body,{children:(0,r.jsx)(x.Z.Container,{id:"list-group-tabs",children:(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(d.Z,{sm:4,children:(0,r.jsx)(p.Z,{numbered:!0,children:Array.isArray(t)?t.map(e=>(0,i.createElement)(j.Z,{...e,key:e.id})):""})}),(0,r.jsx)(d.Z,{sm:8,children:(0,r.jsx)(x.Z.Content,{children:Array.isArray(t)?t.map(e=>(0,i.createElement)(m.Z,{...e,key:"#link"+e.id.split("/").pop()})):""})})]})})})]},"section_"+n)})})})]})})]})})};var b=!0;n.default=f},2703:function(e,n,t){"use strict";var r=t(414);function i(){}function s(){}s.resetWarningCache=i,e.exports=function(){function e(e,n,t,i,s,l){if(l!==r){var o=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:s,resetWarningCache:i};return t.PropTypes=t,t}},5697:function(e,n,t){e.exports=t(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},6144:function(e,n,t){"use strict";t.d(n,{Z:function(){return D}});var r=t(5697),i=t.n(r),s=t(7294),l=t(5446),o=t(8831),a=t(6626),c=t(7126),d=t(8146),u=t(5654),h=function({children:e,in:n,onExited:t,mountOnEnter:r,unmountOnExit:i}){let l=(0,s.useRef)(null),o=(0,s.useRef)(n),a=(0,d.Z)(t);(0,s.useEffect)(()=>{n?o.current=!0:a(l.current)},[n,a]);let c=(0,u.Z)(l,e.ref),h=(0,s.cloneElement)(e,{ref:c});return n?h:i||!o.current&&r?null:h},x=t(5893);let p=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],j=["activeKey","getControlledId","getControllerId"],m=["as"];function f(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}function b(e){let{active:n,eventKey:t,mountOnEnter:r,transition:i,unmountOnExit:l,role:o="tabpanel",onEnter:d,onEntering:u,onEntered:h,onExit:x,onExiting:m,onExited:b}=e,v=f(e,p),E=(0,s.useContext)(a.Z);if(!E)return[Object.assign({},v,{role:o}),{eventKey:t,isActive:n,mountOnEnter:r,transition:i,unmountOnExit:l,onEnter:d,onEntering:u,onEntered:h,onExit:x,onExiting:m,onExited:b}];let{activeKey:Z,getControlledId:y,getControllerId:O}=E,g=f(E,j),_=(0,c.h)(t);return[Object.assign({},v,{role:o,id:y(t),"aria-labelledby":O(t)}),{eventKey:t,isActive:null==n&&null!=_?(0,c.h)(Z)===_:n,transition:i||g.transition,mountOnEnter:null!=r?r:g.mountOnEnter,unmountOnExit:null!=l?l:g.unmountOnExit,onEnter:d,onEntering:u,onEntered:h,onExit:x,onExiting:m,onExited:b}]}let v=s.forwardRef((e,n)=>{let{as:t="div"}=e,r=f(e,m),[i,{isActive:s,onEnter:l,onEntering:o,onEntered:d,onExit:u,onExiting:p,onExited:j,mountOnEnter:v,unmountOnExit:E,transition:Z=h}]=b(r);return(0,x.jsx)(a.Z.Provider,{value:null,children:(0,x.jsx)(c.Z.Provider,{value:null,children:(0,x.jsx)(Z,{in:s,onEnter:l,onEntering:o,onEntered:d,onExit:u,onExiting:p,onExited:j,mountOnEnter:v,unmountOnExit:E,children:(0,x.jsx)(t,Object.assign({},i,{ref:n,hidden:!s,"aria-hidden":!s}))})})})});v.displayName="TabPanel";let E=e=>{let{id:n,generateChildId:t,onSelect:r,activeKey:i,defaultActiveKey:d,transition:u,mountOnEnter:h,unmountOnExit:p,children:j}=e,[m,f]=(0,l.$c)(i,d,r),b=(0,o.gP)(n),v=(0,s.useMemo)(()=>t||((e,n)=>b?`${b}-${n}-${e}`:null),[b,t]),E=(0,s.useMemo)(()=>({onSelect:f,activeKey:m,transition:u,mountOnEnter:h||!1,unmountOnExit:p||!1,getControlledId:e=>v(e,"tabpane"),getControllerId:e=>v(e,"tab")}),[f,m,u,h,p,v]);return(0,x.jsx)(a.Z.Provider,{value:E,children:(0,x.jsx)(c.Z.Provider,{value:f||null,children:j})})};E.Panel=v;var Z=t(4184),y=t.n(Z),O=t(4527),g=t(1404),_=t(4509),w=t(2785);let C={[O.d0]:"show",[O.cn]:"show"},P=s.forwardRef(({className:e,children:n,transitionClasses:t={},...r},i)=>{let l=(0,s.useCallback)((e,n)=>{(0,_.Z)(e),null==r.onEnter||r.onEnter(e,n)},[r]);return(0,x.jsx)(w.Z,{ref:i,addEndListener:g.Z,...r,onEnter:l,childRef:n.ref,children:(r,i)=>s.cloneElement(n,{...i,className:y()("fade",e,n.props.className,C[r],t[r])})})});function T(e){return"boolean"==typeof e?e?P:h:e}P.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},P.displayName="Fade";let k=({transition:e,...n})=>(0,x.jsx)(E,{...n,transition:T(e)});k.displayName="TabContainer";var I=(0,t(6611).Z)("tab-content"),N=t(6792);let R=s.forwardRef(({bsPrefix:e,transition:n,...t},r)=>{let[{className:i,as:s="div",...l},{isActive:o,onEnter:d,onEntering:u,onEntered:h,onExit:p,onExiting:j,onExited:m,mountOnEnter:f,unmountOnExit:v,transition:E=P}]=b({...t,transition:T(n)}),Z=(0,N.vE)(e,"tab-pane");return(0,x.jsx)(a.Z.Provider,{value:null,children:(0,x.jsx)(c.Z.Provider,{value:null,children:(0,x.jsx)(E,{in:o,onEnter:d,onEntering:u,onEntered:h,onExit:p,onExiting:j,onExited:m,mountOnEnter:f,unmountOnExit:v,children:(0,x.jsx)(s,{...l,ref:r,className:y()(i,Z,o&&"active")})})})})});R.displayName="TabPane";let A={eventKey:i().oneOfType([i().string,i().number]),title:i().node.isRequired,disabled:i().bool,tabClassName:i().string,tabAttrs:i().object},S=()=>{throw Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};S.propTypes=A;var D=Object.assign(S,{Container:k,Content:I,Pane:R})},6611:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var r=t(4184),i=t.n(r),s=/-(.)/g,l=t(7294),o=t(6792),a=t(5893);let c=e=>e[0].toUpperCase()+e.replace(s,function(e,n){return n.toUpperCase()}).slice(1);function d(e,{displayName:n=c(e),Component:t,defaultProps:r}={}){let s=l.forwardRef(({className:n,bsPrefix:r,as:s=t||"div",...l},c)=>{let d=(0,o.vE)(r,e);return(0,a.jsx)(s,{ref:c,className:i()(n,d),...l})});return s.defaultProps=r,s.displayName=n,s}}},function(e){e.O(0,[914,920,76,664,774,888,179],function(){return e(e.s=1482)}),_N_E=e.O()}]);