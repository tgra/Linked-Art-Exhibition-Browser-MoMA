(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{861:function(e,t,r){"use strict";r.d(t,{FT:function(){return s}});var n=r(7294),a=r(5893);let i=["as","disabled"];function s({tagName:e,disabled:t,href:r,target:n,rel:a,role:i,onClick:s,tabIndex:l=0,type:o}){e||(e=null!=r||null!=n||null!=a?"a":"button");let d={tagName:e};if("button"===e)return[{type:o||"button",disabled:t},d];let u=n=>{var a;if(!t&&("a"!==e||(a=r)&&"#"!==a.trim())||n.preventDefault(),t){n.stopPropagation();return}null==s||s(n)},c=e=>{" "===e.key&&(e.preventDefault(),u(e))};return"a"===e&&(r||(r="#"),t&&(r=void 0)),[{role:null!=i?i:"button",disabled:void 0,tabIndex:t?void 0:l,href:r,target:"a"===e?n:void 0,"aria-disabled":t||void 0,rel:"a"===e?a:void 0,onClick:u,onKeyDown:c},d]}let l=n.forwardRef((e,t)=>{let{as:r,disabled:n}=e,l=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,i),[o,{tagName:d}]=s(Object.assign({tagName:r,disabled:n},l));return(0,a.jsx)(d,Object.assign({},l,o,{ref:t}))});l.displayName="Button",t.ZP=l},4184:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var s=a.apply(null,r);s&&e.push(s)}}else if("object"===i){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0!==(r=(function(){return a}).apply(t,[]))&&(e.exports=r)}()},5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(8287)}])},8287:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(5893),a=r(9008),i=r.n(a);r(5675);var s=r(682),l=r(4051),o=r(1555),d=r(7337),u=r(545),c=r(5005),f=r(3454);function p(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i(),{children:[(0,n.jsx)("title",{children:f.env.NEXT_PUBLIC_APP_NAME}),(0,n.jsx)("meta",{name:"description",content:"Exhibition data browser"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css",integrity:"sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor",crossOrigin:"anonymous"})]}),(0,n.jsxs)("main",{children:[(0,n.jsx)("h1",{children:"MoMA & Alternative New York Exhibitions"}),(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(l.Z,{children:(0,n.jsx)(o.Z,{children:(0,n.jsx)("p",{children:"This application provides a browsable HTML interface to an art exhibition dataset provided by MoMA, serialized as Linked Art JSON-LD."})})}),(0,n.jsx)(l.Z,{children:(0,n.jsx)(o.Z,{children:(0,n.jsx)(d.Z,{children:[{label:"Datasets",path:"datasets",id:"datasets",desc:"Explore the exhibitions by dataset."}].map(e=>(0,n.jsx)(u.Z,{bg:"light",style:{width:"18rem"},children:(0,n.jsxs)(u.Z.Body,{children:[(0,n.jsx)(u.Z.Title,{children:e.label}),(0,n.jsx)(u.Z.Text,{children:e.desc}),(0,n.jsx)(c.Z,{href:"datasets",variant:"primary",children:"Go"})]})},e.path))})})})]})]})]})}},9008:function(e,t,r){e.exports=r(3121)},5005:function(e,t,r){"use strict";var n=r(4184),a=r.n(n),i=r(7294),s=r(861),l=r(6792),o=r(5893);let d=i.forwardRef(({as:e,bsPrefix:t,variant:r,size:n,active:i,className:d,...u},c)=>{let f=(0,l.vE)(t,"btn"),[p,{tagName:v}]=(0,s.FT)({tagName:e,...u});return(0,o.jsx)(v,{...p,...u,ref:c,className:a()(d,f,i&&"active",r&&`${f}-${r}`,n&&`${f}-${n}`,u.href&&u.disabled&&"disabled")})});d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=d},545:function(e,t,r){"use strict";r.d(t,{Z:function(){return Z}});var n=r(4184),a=r.n(n),i=r(7294),s=r(6792),l=r(6611),o=r(5893),d=e=>i.forwardRef((t,r)=>(0,o.jsx)("div",{...t,ref:r,className:a()(t.className,e)}));let u=i.forwardRef(({bsPrefix:e,className:t,variant:r,as:n="img",...i},l)=>{let d=(0,s.vE)(e,"card-img");return(0,o.jsx)(n,{ref:l,className:a()(r?`${d}-${r}`:d,t),...i})});u.displayName="CardImg";let c=i.createContext(null);c.displayName="CardHeaderContext";let f=i.forwardRef(({bsPrefix:e,className:t,as:r="div",...n},l)=>{let d=(0,s.vE)(e,"card-header"),u=(0,i.useMemo)(()=>({cardHeaderBsPrefix:d}),[d]);return(0,o.jsx)(c.Provider,{value:u,children:(0,o.jsx)(r,{ref:l,...n,className:a()(t,d)})})});f.displayName="CardHeader";let p=d("h5"),v=d("h6"),h=(0,l.Z)("card-body"),x=(0,l.Z)("card-title",{Component:p}),m=(0,l.Z)("card-subtitle",{Component:v}),b=(0,l.Z)("card-link",{Component:"a"}),j=(0,l.Z)("card-text",{Component:"p"}),y=(0,l.Z)("card-footer"),g=(0,l.Z)("card-img-overlay"),N=i.forwardRef(({bsPrefix:e,className:t,bg:r,text:n,border:i,body:l,children:d,as:u="div",...c},f)=>{let p=(0,s.vE)(e,"card");return(0,o.jsx)(u,{ref:f,...c,className:a()(t,p,r&&`bg-${r}`,n&&`text-${n}`,i&&`border-${i}`),children:l?(0,o.jsx)(h,{children:d}):d})});N.displayName="Card",N.defaultProps={body:!1};var Z=Object.assign(N,{Img:u,Title:x,Subtitle:m,Body:h,Link:b,Text:j,Header:f,Footer:y,ImgOverlay:g})},7337:function(e,t,r){"use strict";var n=r(6611);t.Z=(0,n.Z)("card-group")},1555:function(e,t,r){"use strict";var n=r(4184),a=r.n(n),i=r(7294),s=r(6792),l=r(5893);let o=i.forwardRef((e,t)=>{let[{className:r,...n},{as:i="div",bsPrefix:o,spans:d}]=function({as:e,bsPrefix:t,className:r,...n}){t=(0,s.vE)(t,"col");let i=(0,s.pi)(),l=(0,s.zG)(),o=[],d=[];return i.forEach(e=>{let r,a,i;let s=n[e];delete n[e],"object"==typeof s&&null!=s?{span:r,offset:a,order:i}=s:r=s;let u=e!==l?`-${e}`:"";r&&o.push(!0===r?`${t}${u}`:`${t}${u}-${r}`),null!=i&&d.push(`order${u}-${i}`),null!=a&&d.push(`offset${u}-${a}`)}),[{...n,className:a()(r,...o,...d)},{as:e,bsPrefix:t,spans:o}]}(e);return(0,l.jsx)(i,{...n,ref:t,className:a()(r,!d.length&&o)})});o.displayName="Col",t.Z=o},682:function(e,t,r){"use strict";var n=r(4184),a=r.n(n),i=r(7294),s=r(6792),l=r(5893);let o=i.forwardRef(({bsPrefix:e,fluid:t,as:r="div",className:n,...i},o)=>{let d=(0,s.vE)(e,"container"),u="string"==typeof t?`-${t}`:"-fluid";return(0,l.jsx)(r,{ref:o,...i,className:a()(n,t?`${d}${u}`:d)})});o.displayName="Container",o.defaultProps={fluid:!1},t.Z=o},4051:function(e,t,r){"use strict";var n=r(4184),a=r.n(n),i=r(7294),s=r(6792),l=r(5893);let o=i.forwardRef(({bsPrefix:e,className:t,as:r="div",...n},i)=>{let o=(0,s.vE)(e,"row"),d=(0,s.pi)(),u=(0,s.zG)(),c=`${o}-cols`,f=[];return d.forEach(e=>{let t;let r=n[e];delete n[e],null!=r&&"object"==typeof r?{cols:t}=r:t=r;let a=e!==u?`-${e}`:"";null!=t&&f.push(`${c}${a}-${t}`)}),(0,l.jsx)(r,{ref:i,...n,className:a()(t,o,...f)})});o.displayName="Row",t.Z=o},6792:function(e,t,r){"use strict";r.d(t,{pi:function(){return o},vE:function(){return l},zG:function(){return d}});var n=r(7294);r(5893);let a=n.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:i,Provider:s}=a;function l(e,t){let{prefixes:r}=(0,n.useContext)(a);return e||r[t]||t}function o(){let{breakpoints:e}=(0,n.useContext)(a);return e}function d(){let{minBreakpoint:e}=(0,n.useContext)(a);return e}},6611:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(4184),a=r.n(n),i=/-(.)/g,s=r(7294),l=r(6792),o=r(5893);let d=e=>e[0].toUpperCase()+e.replace(i,function(e,t){return t.toUpperCase()}).slice(1);function u(e,{displayName:t=d(e),Component:r,defaultProps:n}={}){let i=s.forwardRef(({className:t,bsPrefix:n,as:i=r||"div",...s},d)=>{let u=(0,l.vE)(n,e);return(0,o.jsx)(i,{ref:d,className:a()(t,u),...s})});return i.defaultProps=n,i.displayName=t,i}}},function(e){e.O(0,[359,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);