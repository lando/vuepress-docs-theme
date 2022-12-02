import{_ as U,l as v,m as f,q as G,e as m,s as w,o,c as r,a as c,u as e,g,F as y,f as k,t as _,b as P,x as C,r as x,y as L,d as h,z as $,C as D,P as N}from"./app.21f50512.js";const T={class:"byline"},B={class:"authors"},E={key:0,class:"author-label"},F=["href"],H={key:1,class:"last-updated"},O={class:"pics"},S=["href"],V=["src","alt"],A={__name:"GuideHeader",props:{authors:{type:Array,default:()=>{const l=v(),t=f(),s=C();if(!(l.value.hasOwnProperty("contributors")?l.value.contributors:t.value.contributors||!1)||!s.value.git)return[];const d=t.value.contributorsExclude||[],u=s.value.git.contributors!==void 0?s.value.git.contributors.filter(n=>!d.includes(n.name)):[];return u.forEach(n=>{n.pic=G(n.email,{size:60}),n.link=`mailto:${n.email}`}),u}},updated:{type:Object,default:()=>{const l=f(),t=C(),s=v();return(s.value.hasOwnProperty("lastUpdated")?s.value.lastUpdated:l.value.lastUpdated||!1)?!t.value.git||!t.value.git.updatedTime?null:{timestamp:t.value.git.updatedTime}:!1}}},setup(l){const t=l,s=f(),i=m(()=>!!t.authors.length),d=m(()=>{const p=t.authors.map(a=>Object.assign(a,{separator:", "}));if(!i.value)return[];const b=p[p.length-1];return b.separator="",p}),u=m(()=>t.updated&&t.updated.timestamp!==null&&t.updated.timestamp!==!1),n=m(()=>{if(!u.value)return null;const p=new Date(t.updated.timestamp);return w(p.toLocaleString())});return(p,b)=>(o(),r("div",T,[c("div",B,[e(i)?(o(),r("span",E," Written by: ")):g("v-if",!0),(o(!0),r(y,null,k(e(d),a=>(o(),r("span",{key:a.name,class:"author"},[c("a",{href:a.link,target:"_blank"},_(a.name),9,F),P(_(a.separator),1)]))),128)),e(u)?(o(),r("div",H,_(e(s).lastUpdatedText)+" "+_(e(n)),1)):g("v-if",!0)]),c("div",O,[(o(!0),r(y,null,k(e(d),a=>(o(),r("span",{key:a.name,class:"pic"},[c("a",{href:a.link,target:"_blank"},[c("img",{src:a.pic,alt:a.name,class:"custom"},null,8,V)],8,S)]))),128))])]))}},M=U(A,[["__file","GuideHeader.vue"]]);const j={class:"page guide"},z={class:"theme-default-content"},q={__name:"Guide",setup(l){const t=v(),s=m(()=>t.value.mailchimp&&t.value.mailchimp.action);return(i,d)=>{const u=x("Content"),n=x("MailChimp");return o(),r("main",j,[L(i.$slots,"top",{},void 0,!0),c("div",z,[c("h1",null,_(e(t).title),1),h(M,{authors:e(t).authors,updated:e(t).updated},null,8,["authors","updated"]),h(u)]),e(s)?(o(),$(n,{key:0,action:e(t).mailchimp.action,title:e(t).mailchimp.title,byline:e(t).mailchimp.byline,button:e(t).mailchimp.button},null,8,["action","title","byline","button"])):g("v-if",!0),h(D,{contributors:e(t).authors,"edit-nav-link":e(t).editlink,"last-updated":e(t).updated},null,8,["contributors","edit-nav-link","last-updated"]),h(N),L(i.$slots,"bottom",{},void 0,!0)])}}},W=U(q,[["__scopeId","data-v-b61d3a62"],["__file","Guide.vue"]]);export{W as default};
