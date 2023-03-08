(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[638],{3454:function(e,r,n){"use strict";var t,i;e.exports=(null==(t=n.g.process)?void 0:t.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(7663)},8974:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/datasets/nonmoma",function(){return n(9424)}])},6675:function(e,r,n){"use strict";n.d(r,{Z:function(){return c}});var t=n(5893),i=n(682),s=n(4051),o=n(1555),a=n(5005);function c(){return(0,t.jsxs)("div",{children:[(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsxs)(i.Z,{className:"footer",children:[(0,t.jsx)(s.Z,{children:(0,t.jsxs)(o.Z,{children:[(0,t.jsx)("h4",{children:"Acknowledgements"}),(0,t.jsx)("p",{children:" This work was undertaken by the Linked Art II project at the University of Oxford (Principal Investigator: Dr. Kevin Page, Oxford e-Research Centre) funded by the UK Arts and Humanities Research Council (AHRC project reference AH/T013117/1)."})]})}),(0,t.jsxs)(s.Z,{children:[(0,t.jsxs)(o.Z,{children:["The project's Research Software Engineer was ",(0,t.jsx)(a.Z,{variant:"secondary",href:"https://www.linkedin.com/in/tanyagrayjones/",target:"_new",children:"Tanya Gray"}),"."]}),(0,t.jsxs)(o.Z,{children:["We gratefully acknowledge the participation and contributions of our project partners and the wider ",(0,t.jsx)(a.Z,{variant:"secondary",href:"https://linked.art/",children:"Linked Art community"}),"."]})]})]}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]})}},2264:function(e,r,n){"use strict";var t=n(5893),i=n(1664),s=n.n(i),o=n(682),a=n(9463),c=n(2095);r.Z=function(){return(0,t.jsx)(c.Z,{bg:"dark",variant:"light",children:(0,t.jsxs)(o.Z,{fluid:!0,children:[(0,t.jsx)("h6",{children:(0,t.jsx)(s(),{href:"/",children:"MoMA & Alternative New York Exhibitions"})}),(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(a.Z.Link,{href:"/Linked-Art-Exhibition-Browser-MoMA/#all",children:"Dataset: All"}),(0,t.jsx)(a.Z.Link,{eventKey:"link-1",href:"/Linked-Art-Exhibition-Browser-MoMA/#moma",children:"Dataset: MoMA"}),(0,t.jsx)(a.Z.Link,{eventKey:"link-2",href:"/Linked-Art-Exhibition-Browser-MoMA/#nonmoma",children:"Dataset: non-MoMA"}),(0,t.jsx)(a.Z.Link,{eventKey:"link-3",href:"/Linked-Art-Exhibition-Browser-MoMA/#indexes",children:"Indexes"}),(0,t.jsx)(a.Z.Link,{eventKey:"link-4",href:"/Linked-Art-Exhibition-Browser-MoMA/#about",children:"About"})]})]})})}},9424:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return d}});var t=n(5893),i=n(9008),s=n.n(i);n(5675);var o=n(682),a=n(6699),c=n(2264),l=n(6675),u=n(3454);function d(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s(),{children:[(0,t.jsx)("title",{children:u.env.NEXT_PUBLIC_APP_NAME}),(0,t.jsx)("meta",{name:"description",content:"Exhibition data browser"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,t.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css",integrity:"sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor",crossOrigin:"anonymous"})]}),(0,t.jsx)("main",{children:(0,t.jsxs)(o.Z,{fluid:!0,children:[(0,t.jsx)(c.Z,{}),(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(a.Z.Item,{href:"/Linked-Art-Exhibition-Browser-MoMA",children:"Home"}),(0,t.jsx)(a.Z.Item,{children:"Dataset"}),(0,t.jsx)(a.Z.Item,{children:"non-MoMA"})]}),(0,t.jsx)("h1",{children:"Non-MoMA Dataset"}),(0,t.jsx)(l.Z,{})]})})]})}},7663:function(e){!function(){var r={229:function(e){var r,n,t,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(n){try{return r.call(null,e,0)}catch(n){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:s}catch(e){r=s}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var c=[],l=!1,u=-1;function d(){l&&t&&(l=!1,t.length?c=t.concat(c):u=-1,c.length&&h())}function h(){if(!l){var e=a(d);l=!0;for(var r=c.length;r;){for(t=c,c=[];++u<r;)t&&t[u].run();u=-1,r=c.length}t=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(r){try{return n.call(null,e)}catch(r){return n.call(this,e)}}}(e)}}function f(e,r){this.fun=e,this.array=r}function x(){}i.nextTick=function(e){var r=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)r[n-1]=arguments[n];c.push(new f(e,r)),1!==c.length||l||a(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=x,i.addListener=x,i.once=x,i.off=x,i.removeListener=x,i.removeAllListeners=x,i.emit=x,i.prependListener=x,i.prependOnceListener=x,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function t(e){var i=n[e];if(void 0!==i)return i.exports;var s=n[e]={exports:{}},o=!0;try{r[e](s,s.exports,t),o=!1}finally{o&&delete n[e]}return s.exports}t.ab="//";var i=t(229);e.exports=i}()},6699:function(e,r,n){"use strict";n.d(r,{Z:function(){return d}});var t=n(4184),i=n.n(t),s=n(7294),o=n(6792),a=n(1819),c=n(5893);let l=s.forwardRef(({bsPrefix:e,active:r,children:n,className:t,as:s="li",linkAs:l=a.Z,linkProps:u,href:d,title:h,target:f,...x},m)=>{let p=(0,o.vE)(e,"breadcrumb-item");return(0,c.jsx)(s,{ref:m,...x,className:i()(p,t,{active:r}),"aria-current":r?"page":void 0,children:r?n:(0,c.jsx)(l,{...u,href:d,title:h,target:f,children:n})})});l.displayName="BreadcrumbItem",l.defaultProps={active:!1,linkProps:{}};let u=s.forwardRef(({bsPrefix:e,className:r,listProps:n,children:t,label:s,as:a="nav",...l},u)=>{let d=(0,o.vE)(e,"breadcrumb");return(0,c.jsx)(a,{"aria-label":s,className:r,ref:u,...l,children:(0,c.jsx)("ol",{...n,className:i()(d,null==n?void 0:n.className),children:t})})});u.displayName="Breadcrumb",u.defaultProps={label:"breadcrumb",listProps:{}};var d=Object.assign(u,{Item:l})}},function(e){e.O(0,[420,675,774,888,179],function(){return e(e.s=8974)}),_N_E=e.O()}]);