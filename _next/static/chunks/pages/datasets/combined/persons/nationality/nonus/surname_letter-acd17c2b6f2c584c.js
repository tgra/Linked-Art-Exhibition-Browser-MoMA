(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[511],{907:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/datasets/combined/persons/nationality/nonus/surname_letter",function(){return i(4392)}])},9888:function(e,n,i){"use strict";i.d(n,{Z:function(){return r}});var t=i(5893),s=i(892);function r(e){let{id:n,_label:i,born:r,died:l}=e,d=null==n?void 0:n.match(/[0-9]+$/);return null!==d&&d[0],r=r.split("T")[0].split("-")[0],l=l.split("T")[0].split("-")[0],(0,t.jsxs)(s.Z.Item,{variant:"dark",action:!0,href:"#link"+n.split("/").pop(),children:[i," ",""==r?"":"("+r+"-"+l+")"]},n)}},8186:function(e,n,i){"use strict";i.d(n,{Z:function(){return h}});var t=i(5893),s=i(6144),r=i(892),l=i(4076),d=i(1664),c=i.n(d);function h(e){let{id:n,_label:i,name:d,born:h,died:a,total_exhibitions:o,nationality:x,exhibitions:j,gender:u}=e,p=null==n?void 0:n.match(/[0-9]+$/);null!==p&&p[0],h=h.split("T")[0].split("-")[0],a=a.split("T")[0].split("-")[0];let m={};for(let e in j.forEach(function(e){let n=e.start.split("-")[0].substring(0,3);void 0==m[n]&&(m[n]=[]),m[n].push(e)}),m)m[e]=m[e].sort((e,n)=>e.start>n.start?1:-1);return(0,t.jsxs)(s.Z.Pane,{eventKey:"#link"+n.split("/").pop(),children:[(0,t.jsx)("h1",{children:i}),(0,t.jsxs)(r.Z,{children:[(0,t.jsxs)(r.Z.Item,{variant:"dark",children:[(0,t.jsx)("h5",{children:"Born"}),(0,t.jsx)(c(),{href:"/datasets/combined/indexes/person/birth_date/"+h,children:h})]}),(0,t.jsxs)(r.Z.Item,{variant:"dark",children:[(0,t.jsx)("h5",{children:"Died"}),a]}),(0,t.jsxs)(r.Z.Item,{variant:"dark",children:[(0,t.jsx)("h5",{children:"Nationality"}),x]}),(0,t.jsxs)(r.Z.Item,{variant:"dark",children:[(0,t.jsx)("h5",{children:"Gender"}),u]})]}),(0,t.jsx)("br",{}),(0,t.jsx)("h4",{children:"Exhibitions"}),(0,t.jsxs)("p",{children:["Total number of exhibitions: ",o]}),(0,t.jsx)(l.Z,{alwaysOpen:!0,children:Object.entries(m).map(e=>{let[n,i]=e;return(0,t.jsxs)(l.Z.Item,{eventKey:"section_"+n,children:[(0,t.jsxs)(l.Z.Header,{children:[n,"0s (",i&&Array.isArray(i)?i.length:"",")"]}),(0,t.jsx)(l.Z.Body,{children:(0,t.jsx)(r.Z,{numbered:!0,children:null==i?void 0:i.map(e=>(0,t.jsxs)(r.Z.Item,{variant:"light",action:!0,href:"/exhibition-browser-static-demo/exhibition/"+e.id.split("/").pop(),children:[e.start.split("T")[0],(0,t.jsx)("h5",{children:e._label})]},"influenced"+e.id))})})]},"section_"+n)})})]},"#link"+n.split("/").pop())}},4392:function(e,n,i){"use strict";i.r(n),i.d(n,{__N_SSG:function(){return f}});var t=i(5893),s=i(7294),r=i(9008),l=i.n(r),d=i(3559),c=i(682),h=i(4051),a=i(1555),o=i(4539),x=i(4076),j=i(6144),u=i(892),p=i(9888),m=i(8186);let Z=e=>{let{personSummaryDataList:n}=e;return void 0==n&&(n={}),(0,t.jsx)(d.Z,{children:(0,t.jsxs)("div",{children:[(0,t.jsxs)(l(),{children:[(0,t.jsx)("title",{children:"MOMA & Alternative New York Exhibitions"}),(0,t.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css",integrity:"sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor",crossOrigin:"anonymous"}),(0,t.jsx)("script",{src:"https://unpkg.com/react/umd/react.production.min.js",async:!0})]}),(0,t.jsx)("main",{children:(0,t.jsxs)(c.Z,{children:[(0,t.jsx)("h1",{children:"MOMA & Alternative New York Exhibitions"}),(0,t.jsx)(h.Z,{children:(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(o.Z.Item,{href:"/",children:"Home"}),(0,t.jsx)(o.Z.Item,{href:"../../../../../",children:"Datasets"}),(0,t.jsx)(o.Z.Item,{href:"../../../../",children:"Combined"}),(0,t.jsx)(o.Z.Item,{children:"Persons"}),(0,t.jsx)(o.Z.Item,{children:"Nationality"}),(0,t.jsx)(o.Z.Item,{children:"non-US"}),(0,t.jsx)(o.Z.Item,{children:"Surname letter"})]}),(0,t.jsx)("h1",{children:"Persons - ordered by surname letter  "}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Dataset:Combined"}),(0,t.jsx)("li",{children:"Nationality:non-US"})]})]})}),(0,t.jsx)(h.Z,{children:(0,t.jsx)(x.Z,{children:Object.entries(n).sort().map(e=>{let[n,i]=e;return(0,t.jsxs)(x.Z.Item,{eventKey:"section_"+n,children:[(0,t.jsx)(x.Z.Header,{children:n}),(0,t.jsx)(x.Z.Body,{children:(0,t.jsx)(j.Z.Container,{id:"list-group-tabs",children:(0,t.jsxs)(h.Z,{children:[(0,t.jsx)(a.Z,{sm:4,children:(0,t.jsx)(u.Z,{numbered:!0,children:Array.isArray(i)?i.map(e=>(0,s.createElement)(p.Z,{...e,key:e.id})):""})}),(0,t.jsx)(a.Z,{sm:8,children:(0,t.jsx)(j.Z.Content,{children:Array.isArray(i)?i.map(e=>(0,s.createElement)(m.Z,{...e,key:"#link"+e.id.split("/").pop()})):""})})]})})})]},"section_"+n)})})})]})})]})})};var f=!0;n.default=Z}},function(e){e.O(0,[914,920,76,674,774,888,179],function(){return e(e.s=907)}),_N_E=e.O()}]);