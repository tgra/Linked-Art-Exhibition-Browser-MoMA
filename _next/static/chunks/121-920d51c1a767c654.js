"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[121],{6675:function(e,i,n){n.d(i,{Z:function(){return h}});var r=n(5893),t=n(682),s=n(4051),l=n(1555),d=n(5005);function h(){return(0,r.jsxs)("div",{children:[(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsxs)(t.Z,{className:"footer",children:[(0,r.jsx)(s.Z,{children:(0,r.jsxs)(l.Z,{children:[(0,r.jsx)("h4",{children:"Acknowledgements"}),(0,r.jsx)("p",{children:" This work was undertaken by the Linked Art II project at the University of Oxford (Principal Investigator: Dr. Kevin Page, Oxford e-Research Centre) funded by the UK Arts and Humanities Research Council (AHRC project reference AH/T013117/1)."})]})}),(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(l.Z,{children:["The project's Research Software Engineer was ",(0,r.jsx)(d.Z,{variant:"secondary",href:"https://www.linkedin.com/in/tanyagrayjones/",target:"_new",children:"Tanya Gray"}),"."]}),(0,r.jsxs)(l.Z,{children:["We gratefully acknowledge the participation and contributions of our project partners and the wider ",(0,r.jsx)(d.Z,{variant:"secondary",href:"https://linked.art/",children:"Linked Art community"}),"."]})]})]}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]})}},2264:function(e,i,n){var r=n(5893),t=n(1664),s=n.n(t),l=n(682),d=n(9463),h=n(2095);i.Z=function(){return(0,r.jsx)(h.Z,{bg:"dark",variant:"light",children:(0,r.jsxs)(l.Z,{fluid:!0,children:[(0,r.jsx)("h6",{children:(0,r.jsx)(s(),{href:"/",children:"MoMA & Alternative New York Exhibitions"})}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)(d.Z.Link,{href:"/Linked-Art-Exhibition-Browser-MoMA/#all",children:"Dataset: All"}),(0,r.jsx)(d.Z.Link,{eventKey:"link-1",href:"/Linked-Art-Exhibition-Browser-MoMA/#moma",children:"Dataset: MoMA"}),(0,r.jsx)(d.Z.Link,{eventKey:"link-2",href:"/Linked-Art-Exhibition-Browser-MoMA/#nonmoma",children:"Dataset: non-MoMA"}),(0,r.jsx)(d.Z.Link,{eventKey:"link-3",href:"/Linked-Art-Exhibition-Browser-MoMA/#indexes",children:"Indexes"}),(0,r.jsx)(d.Z.Link,{eventKey:"link-4",href:"/Linked-Art-Exhibition-Browser-MoMA/#about",children:"About"})]})]})})}},9443:function(e,i,n){n.d(i,{Z:function(){return u}});var r=n(5893),t=n(9080),s=n(682),l=n(4051),d=n(1555),h=n(5607),c=n(5147),a=n(5005),o=n(1664),x=n.n(o);n(9085);var j=n(5430),b=n(2023),p=n.n(b);function u(e){let{id:i,_label:n,born:o,died:b,total_exhibitions:u,nationality:f,exhibitions:v,gender:k,equivalent:m,image_url:y,bio:w}=e,Z={};for(let e in null==v||v.forEach(function(e){let i=e.start.split("-")[0].substring(0,3);void 0==Z[i]&&(Z[i]=[]),Z[i].push(e)}),Z)Z[e]=Z[e].sort((e,i)=>e.start>i.start?1:-1);let g={};Object.entries(Z).map(e=>{let[i,n]=e;return g[i+"0s"]=n.length});let A=Object.keys(g);Object.values(g);let M=Object.keys(g).filter(e=>g[e]==Math.max.apply(null,Object.values(g)));var E=g[M[0]];let O=Object.keys(g).filter(e=>g[e]==Math.min.apply(null,Object.values(g)));var L=g[O[0]];let _={};null==v||v.forEach(function(e){let i=e.start.split("-")[0].substring(0,3)+"0s",n=e.location;void 0==_[n]&&(_[n]=[]),void 0==_[n][i]&&(_[n][i]=[]),_[n][i].push(e)}),Object.entries(_).map(e=>{let[i,n]=e;return Object.entries(n).map(e=>{let[n,r]=e;return _[i][n]=r.length})});let B=[];return Object.entries(_).map(e=>{let[i,n]=e;return B.push({label:i,data:A.map(e=>n[e]?n[e]:0),borderWidth:1,backgroundColor:p()({luminosity:"dark",seed:i})})}),(0,r.jsxs)(t.Z.Pane,{eventKey:"#link"+i.split("/").pop(),children:[(0,r.jsx)("h3",{children:n}),(0,r.jsx)(s.Z,{className:"bio",children:(0,r.jsxs)(l.Z,{children:[(0,r.jsxs)(d.Z,{children:[(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"Biographical statement"})," ",w]}),(0,r.jsx)("b",{children:"Born"})," ",void 0!=o?String(o).split("T")[0].split("-")[0]:""," ",(0,r.jsx)("sup",{children:(0,r.jsx)(x(),{href:"/datasets/combined/indexes/person/birth_date/"+o,children:"(click to view other people born in this year)"})}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"Died"})," ",null!=b?String(b).split("T")[0].split("-")[0]:""," "]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"Nationality"})," ",f]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"Gender"})," ",k]}),(0,r.jsx)("p",{children:(0,r.jsxs)("b",{children:["External information resources for ",n]})}),(0,r.jsx)("ol",{children:null==m?void 0:m.map(e=>(0,r.jsx)("li",{children:(0,r.jsx)(x(),{href:e,target:"_new",children:String(e).split("/")[2]})},e))})]}),(0,r.jsx)(d.Z,{children:(0,r.jsx)("div",{className:"image",children:y&&!1==y.includes(".tif")?(0,r.jsx)("img",{src:y,height:"100%",alt:"Picture of "+n},y):""})})]})}),(0,r.jsx)("br",{}),(0,r.jsx)("h4",{children:"Exhibitions"}),(0,r.jsxs)("p",{children:["In this dataset, ",(0,r.jsx)("b",{children:n})," was involved in ",(0,r.jsx)("b",{children:u})," exhibitions across ",(0,r.jsx)("b",{children:Object.entries(Z).length})," decades."]}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["Decade(s) with the most number of exhibitions was the ",(0,r.jsx)("b",{children:M.toString()})," with ",(0,r.jsx)("b",{children:E})," exhibitions."]}),(0,r.jsxs)("li",{children:["Decade with the least number of exhibitions was the ",(0,r.jsx)("b",{children:O.toString()})," with ",(0,r.jsx)("b",{children:L})," exhibitions."]})]}),(0,r.jsx)(j.$Q,{data:{labels:A,datasets:B},width:"200",height:"50",options:{plugins:{title:{display:!0,text:"Number of exhibitions"}},responsive:!0,maintainAspectRatio:!0,scales:{x:{stacked:!1},y:{stacked:!0}}}}),(0,r.jsx)("br",{}),(0,r.jsx)(h.Z,{alwaysOpen:!0,children:Object.entries(Z).map(e=>{let[i,n]=e;return(0,r.jsxs)(h.Z.Item,{eventKey:"section_"+i,children:[(0,r.jsxs)(h.Z.Header,{children:[i,"0s (",n&&Array.isArray(n)?n.length:"",")"]}),(0,r.jsx)(h.Z.Body,{children:(0,r.jsxs)(c.Z,{bordered:!0,hover:!0,size:"sm",striped:"columns",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"#"}),(0,r.jsx)("th",{children:"Start"}),(0,r.jsx)("th",{children:"End"}),(0,r.jsx)("th",{children:"Location"}),(0,r.jsx)("th",{children:"Title"})]})}),(0,r.jsx)("tbody",{children:null==n?void 0:n.map((e,i)=>{var n,t;return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(a.Z,{variant:"primary",href:"/Linked-Art-Exhibition-Browser-MoMA/exhibition/"+e.id.split("/").pop(),children:i+1})}),(0,r.jsx)("td",{children:(0,r.jsx)("nobr",{children:null===(n=e.start)||void 0===n?void 0:n.split("T")[0].slice(0,-3)})}),(0,r.jsx)("td",{children:(0,r.jsx)("nobr",{children:null===(t=e.end)||void 0===t?void 0:t.split("T")[0].slice(0,-3)})}),(0,r.jsx)("td",{children:(0,r.jsx)("nobr",{children:e.location})}),(0,r.jsx)("td",{children:(0,r.jsx)(x(),{href:"/exhibition/"+e.id.split("/").pop(),children:e._label})})]},"influenced"+e.id)})})]},"decade"+i)})]},"section_"+i)})})]},"#link"+i.split("/").pop())}n(5675)}}]);