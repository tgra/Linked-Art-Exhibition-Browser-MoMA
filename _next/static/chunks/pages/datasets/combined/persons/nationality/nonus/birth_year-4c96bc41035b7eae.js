(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[758],{3454:function(e,r,n){"use strict";var t,i;e.exports=(null==(t=n.g.process)?void 0:t.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(7663)},9203:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/datasets/combined/persons/nationality/nonus/birth_year",function(){return n(1678)}])},1678:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSG:function(){return v}});var t=n(5893),i=n(7294),s=n(9008),o=n.n(s),c=n(3559),l=n(682),a=n(4051),u=n(1555),h=n(4539),d=n(4076),f=n(6144),p=n(892),m=n(9888),x=n(8186),j=n(3454);let y=e=>{let{persons:r,years:n}=e;return void 0==r?(0,t.jsx)(c.Z,{children:(0,t.jsx)("div",{})}):(0,t.jsx)(c.Z,{children:(0,t.jsxs)("div",{children:[(0,t.jsxs)(o(),{children:[(0,t.jsx)("title",{children:j.env.APP_TITLE}),(0,t.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css",integrity:"sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor",crossOrigin:"anonymous"}),(0,t.jsx)("script",{src:"https://unpkg.com/react/umd/react.production.min.js",async:!0})]}),(0,t.jsx)("main",{children:(0,t.jsxs)(l.Z,{children:[(0,t.jsx)("h1",{children:"MoMA & Alternative New York Exhibitions"}),(0,t.jsx)(a.Z,{children:(0,t.jsxs)(u.Z,{children:[(0,t.jsxs)(h.Z,{children:[(0,t.jsx)(h.Z.Item,{href:"../../../../../../",children:"Home"}),(0,t.jsx)(h.Z.Item,{href:"../../../../../",children:"Datasets"}),(0,t.jsx)(h.Z.Item,{href:"../../../../",children:"Combined"}),(0,t.jsx)(h.Z.Item,{children:"Nationality"}),(0,t.jsx)(h.Z.Item,{children:"non-US"}),(0,t.jsx)(h.Z.Item,{children:"Birth year"})]}),(0,t.jsx)("h1",{children:"Persons - ordered by birth year  "}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Dataset:Combined"}),(0,t.jsx)("li",{children:"Nationality:non-United States "})]}),(0,t.jsx)("p",{children:"A list of persons of non-United States nationality who influenced all exhibitions, ordered by birth year. Persons without a birth year in the record have been omitted."}),(0,t.jsx)(d.Z,{alwaysOpen:!0,children:Object.entries(n).map(e=>{let[n,s]=e;return(0,t.jsxs)(d.Z.Item,{eventKey:"year"+n,children:[(0,t.jsxs)(d.Z.Header,{children:[""==n?"no year recorded":n," (",s,")"]},"born_"+n),(0,t.jsx)(d.Z.Body,{children:Object.entries(r[n]).sort().map(e=>{let[r,s]=e;return(0,t.jsxs)("div",{children:[(0,t.jsx)("h5",{children:r}),(0,t.jsx)(f.Z.Container,{id:"list-group-tabs",children:(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(u.Z,{sm:4,children:(0,t.jsx)(p.Z,{numbered:!0,children:Array.isArray(s)?s.map(e=>(0,i.createElement)(m.Z,{...e,key:e.id})):""})}),(0,t.jsx)(u.Z,{sm:8,children:(0,t.jsx)(f.Z.Content,{children:Array.isArray(s)?s.map(e=>(0,i.createElement)(x.Z,{...e,key:"#link"+e.id.split("/").pop()})):""})})]})})]},n+r)})})]},n)})})]})}),(0,t.jsx)(a.Z,{children:(0,t.jsx)(p.Z,{})})]})})]})})};var v=!0;r.default=y},7663:function(e){!function(){var r={229:function(e){var r,n,t,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function c(e){if(r===setTimeout)return setTimeout(e,0);if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(n){try{return r.call(null,e,0)}catch(n){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:s}catch(e){r=s}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var l=[],a=!1,u=-1;function h(){a&&t&&(a=!1,t.length?l=t.concat(l):u=-1,l.length&&d())}function d(){if(!a){var e=c(h);a=!0;for(var r=l.length;r;){for(t=l,l=[];++u<r;)t&&t[u].run();u=-1,r=l.length}t=null,a=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(r){try{return n.call(null,e)}catch(r){return n.call(this,e)}}}(e)}}function f(e,r){this.fun=e,this.array=r}function p(){}i.nextTick=function(e){var r=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)r[n-1]=arguments[n];l.push(new f(e,r)),1!==l.length||a||c(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function t(e){var i=n[e];if(void 0!==i)return i.exports;var s=n[e]={exports:{}},o=!0;try{r[e](s,s.exports,t),o=!1}finally{o&&delete n[e]}return s.exports}t.ab="//";var i=t(229);e.exports=i}()}},function(e){e.O(0,[914,920,76,664,968,774,888,179],function(){return e(e.s=9203)}),_N_E=e.O()}]);