(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[345],{3269:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[strat]",function(){return n(5277)}])},5277:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return N},default:function(){return y}});var s=n(1799),r=n(5893),l=n(7294),c=n(2962),o=n(9396),a=n(6646),i=n(828),u=n(4758),x=function(e){return{name:"".concat(e," Today"),color:"#FF5959",showPayoff:!0,payoffTitle:"At Expiry",payoffColor:"#676FA3"}},d=l.createContext({}),m=function(e){var t=e.children,n=e.optionLegs,s=e.title,c=f(s),o=c.setOptionLegs,a=c.setStrategy;return(0,l.useEffect)((function(){o(n)}),[n]),(0,l.useEffect)((function(){a(x(s))}),[s]),(0,r.jsx)(d.Provider,{value:c,children:t})},f=function(e){var t=(0,l.useState)(100),n=t[0],s=t[1],r=(0,l.useState)(.01),c=r[0],o=r[1],a=(0,i.Z)((0,u.x)([]),2),d=a[0],m=a[1],f=(0,l.useState)(x(e)),p=f[0],h=f[1];return l.useMemo((function(){return{underlying:n,setUnderlying:s,rfr:c,setRfr:o,optionLegs:d,setOptionLegs:m,strategy:p,setStrategy:h}}),[n,s,c,o,d,m,p,h])},p=l.memo((function(e){var t=e.title,n=e.onCurrentValueChanged,c=(0,l.useContext)(d),i=c.underlying,u=c.rfr,x=c.optionLegs,m=c.strategy,f=[(0,o.Z)((0,s.Z)({},m),{optionLegs:x.map((function(e){return function(e){var t="long"===e.longShort?1:-1;return{k:e.k,t:e.dte/365.25,v:e.v,callPut:e.callPut,quantity:t}}(e)}))})];return(0,r.jsx)("div",{children:(0,r.jsx)(a.Z,{seriesName:t,s:i,r:u,strategies:f,onCurrentValueChanged:n})})})),h=n(5154),j=function(){var e,t=(0,l.useContext)(d),n=t.underlying,s=t.setUnderlying,c=t.rfr,o=t.setRfr,a=t.optionLegs,i=t.setOptionLegs;return(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"row mb-2",children:[(0,r.jsx)("small",{className:"col-2 text-truncate",children:"stock"}),(0,r.jsx)("small",{className:"col-2 px-1 px-sm-2",children:(0,r.jsx)("input",{className:"form-control form-control-sm","aria-label":"stock price",type:"number",value:n,onChange:function(e){return s(+e.target.value)}})}),(0,r.jsx)("small",{className:"col-2 offset-2 text-truncate",children:"rate"}),(0,r.jsx)("small",{className:"col-2 px-1 px-sm-2",children:(0,r.jsx)("input",{className:"form-control form-control-sm","aria-label":"risk free rate",type:"number",value:c,onChange:function(e){return o(+e.target.value)},step:".01"})})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("small",{className:"col-2 text-truncate",children:"long/short"}),(0,r.jsx)("small",{className:"col-2 text-truncate",children:"strike"}),(0,r.jsx)("small",{className:"col-2 text-truncate",children:"dte"}),(0,r.jsx)("small",{className:"col-2 text-truncate",children:"iv"}),(0,r.jsx)("small",{className:"col-2 text-truncate",children:"put/call"})]}),(e=a,e.map((function(t,n){return(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-2 px-1 px-sm-2",children:(0,r.jsxs)("select",{className:"form-select form-select-sm pe-0 pe-sm-4","aria-label":"leg ".concat(n+1," long or short"),value:t.longShort,onChange:function(e){return i((function(t){t[n].longShort=e.target.value}))},children:[(0,r.jsx)("option",{children:"long"}),(0,r.jsx)("option",{children:"short"})]})}),(0,r.jsx)("div",{className:"col-2 px-1 px-sm-2",children:(0,r.jsx)("input",{className:"form-control form-control-sm","aria-label":"leg ".concat(n+1," strike"),type:"number",value:t.k,onChange:function(e){return i((function(t){t[n].k=+e.target.value}))}})}),(0,r.jsx)("div",{className:"col-2 px-1 px-sm-2",children:(0,r.jsx)("input",{className:"form-control form-control-sm","aria-label":"leg ".concat(n+1," DTE"),type:"number",value:t.dte,onChange:function(e){return i((function(t){t[n].dte=+e.target.value}))}})}),(0,r.jsx)("div",{className:"col-2 px-1 px-sm-2",children:(0,r.jsx)("input",{className:"form-control form-control-sm","aria-label":"leg ".concat(n+1," volatility"),type:"number",value:t.v,onChange:function(e){return i((function(t){t[n].v=+e.target.value}))},step:".05"})}),(0,r.jsx)("div",{className:"col-2 px-1 px-sm-2",children:(0,r.jsxs)("select",{className:"form-select form-select-sm pe-0 pe-sm-4","aria-label":"leg ".concat(n+1," put call"),value:t.callPut,onChange:function(e){return i((function(t){t[n].callPut=e.target.value}))},children:[(0,r.jsx)("option",{children:"call"}),(0,r.jsx)("option",{children:"put"})]})}),(0,r.jsxs)("div",{className:"col-2 px-1 px-sm-2 text-center text-sm-start",children:[(0,r.jsx)("a",{role:"button",className:"me-2 text-dark",onClick:function(){return i((function(e){e.splice(n,0,t)}))},children:(0,r.jsx)(h.wEH,{})}),e.length>1?(0,r.jsx)("a",{role:"button",className:"text-dark",onClick:function(){return i((function(e){e.splice(n,1)}))},children:(0,r.jsx)(h.iFH,{})}):null]})]},"leg-".concat(n))})))]})},g=function(e){var t=e.name,n=e.x,s=e.start,c=e.current,o=(0,l.useContext)(d),i=o.strategy,u=o.underlying;if(!n||!s||!c)return(0,r.jsx)(r.Fragment,{});var x=s.optionLegValues.map((function(e,t){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{scope:"row",children:t+1}),(0,r.jsx)("td",{children:(0,a.x)(s.optionLegValues[t])}),(0,r.jsx)("td",{children:(0,a.x)(c.optionLegValues[t])}),(0,r.jsx)("td",{children:(0,a.x)(c.optionLegValues[t]-s.optionLegValues[t])})]},"row-".concat(t))}));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{style:{color:t!==i.payoffTitle?i.color:i.payoffColor},children:t}),(0,r.jsxs)("table",{className:"table small",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{scope:"col",children:"#"}),(0,r.jsxs)("td",{scope:"col",children:["@",(0,a.x)(u)]}),(0,r.jsxs)("td",{scope:"col",children:["@",(0,a.x)(n)]}),(0,r.jsx)("td",{scope:"col",children:"\u0394"})]})}),(0,r.jsxs)("tbody",{children:[x,(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{style:v}),(0,r.jsx)("td",{style:v,children:(0,a.x)(s.total)}),(0,r.jsx)("td",{style:v,children:(0,a.x)(c.total)}),(0,r.jsx)("td",{style:v,children:(0,a.x)(c.total-s.total)})]})]})]})]})},v={borderTopWidth:"2px"},N=!0,y=function(e){var t=e.title,n=e.optionLegs,o=(0,l.useState)({}),a=o[0],i=o[1],u=(0,l.useMemo)((function(){return function(e,t,n){i(Object.keys(t).reduce((function(s,r){return s[r]={x:e,start:t[r],current:n[r],name:r},s}),{}))}}),[]),x=Object.keys(a).map((function(e,t){return(0,r.jsx)("div",{className:"pt-3 col-sm-6",children:(0,r.jsx)(g,(0,s.Z)({},a[e]))},"table-".concat(t))}));return(0,r.jsxs)(m,{title:t,optionLegs:n,children:[(0,r.jsx)(c.PB,{title:t,openGraph:{title:t}}),(0,r.jsx)(p,{title:t,onCurrentValueChanged:u}),(0,r.jsx)(j,{}),(0,r.jsx)("div",{className:"row",children:x})]})}}},function(e){e.O(0,[657,774,888,179],(function(){return t=3269,e(e.s=t);var t}));var t=e.O();_N_E=t}]);