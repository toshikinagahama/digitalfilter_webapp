(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[156],{7400:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/iir_bandpass",function(){return n(7868)}])},7868:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var a=n(4051),r=n.n(a),s=n(5893),l=n(9008),c=n.n(l),i=n(7294);function u(e,t,n,a,r,s,l){try{var c=e[s](l),i=c.value}catch(u){return void n(u)}c.done?t(i):Promise.resolve(i).then(a,r)}function o(){var e=(0,i.useState)("25"),t=e[0],n=e[1],a=(0,i.useState)("0.08"),l=a[0],o=a[1],p=(0,i.useState)("0.4"),x=p[0],d=p[1],h=(0,i.useState)("0.001"),f=h[0],v=h[1],j=(0,i.useState)("5"),g=j[0],m=j[1],y=(0,i.useState)("5"),_=y[0],b=y[1],N=(0,i.useState)("30"),w=N[0],S=N[1],C=(0,i.useState)(""),k=C[0],E=C[1],z=(0,i.useState)(""),H=z[0],P=z[1],T=(0,i.useState)(""),O=T[0],q=T[1],X=(0,i.useState)(""),D=X[0],F=X[1],G=(0,i.useState)(""),J=G[0],A=G[1],B=function(){var e,n=(e=r().mark((function e(n){var a,s,c,i,u,o;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(a=(a=k.replace(/,/g,"")).replace(/\r/g,"")).replace(/ /g,""),s=a.split("\n"),c={sampling_freq:t,freq_pass:[l,x],freq_cutoff:[f,g],gain_pass:_,gain_cutoff:w,data:s},console.log(c),e.next=8,fetch("http://localhost:8000/get_infomation",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).catch((function(){return null}));case 8:if(null!=(i=e.sent)){e.next=12;break}return alert("Error"),e.abrupt("return");case 12:return e.next=14,i.json().catch((function(){return null}));case 14:if(u=e.sent,console.log(u),void 0!=u.result){e.next=19;break}return alert("Server Error"),e.abrupt("return");case 19:o=u.result,P(o.a.replace("[ ","").replace("]","").replace(/ +/g,",")),q(o.b.replace("[ ","").replace("]","").replace(/ +/g,",")),F(o.filterd.replace("[","").replace("]","").replace(/ +/g,"").replace(/,/g,"\n")),A(o.filterd_img);case 24:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,r){var s=e.apply(t,n);function l(e){u(s,a,r,l,c,"next",e)}function c(e){u(s,a,r,l,c,"throw",e)}l(void 0)}))});return function(e){return n.apply(this,arguments)}}();return(0,s.jsxs)("div",{children:[(0,s.jsxs)(c(),{children:[(0,s.jsx)("title",{children:"Try Disital Filter"}),(0,s.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsx)("div",{className:"w-screen min-h-screen from-cyan-400 bg-gradient-to-br to-blue-500",children:(0,s.jsxs)("div",{className:"max-w-4xl flex flex-col items-center justify-center pt-12 mx-auto",children:[(0,s.jsxs)("div",{className:"flex flex-row items-center justify-between space-x-16",children:[(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center space-y-8",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u5468\u6ce2\u6570(Hz)"}),(0,s.jsx)("input",{type:"text",placeholder:"",value:t,onChange:function(e){n(e.target.value)}})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"\u901a\u904e\u5468\u6ce2\u6570(Hz)"}),(0,s.jsx)("input",{type:"text",placeholder:"",value:l,onChange:function(e){o(e.target.value)}}),(0,s.jsx)("div",{className:"my-2"}),(0,s.jsx)("input",{type:"text",placeholder:"",value:x,onChange:function(e){d(e.target.value)}})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"\u30ab\u30c3\u30c8\u30aa\u30d5\u5468\u6ce2\u6570(Hz)"}),(0,s.jsx)("input",{type:"text",placeholder:"",value:f,onChange:function(e){v(e.target.value)}}),(0,s.jsx)("div",{className:"my-2"}),(0,s.jsx)("input",{type:"text",placeholder:"",value:g,onChange:function(e){m(e.target.value)}})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"\u901a\u904e\u30b2\u30a4\u30f3(Hz)"}),(0,s.jsx)("input",{type:"text",placeholder:"",value:_,onChange:function(e){b(e.target.value)}})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"\u906e\u65ad\u30b2\u30a4\u30f3(Hz)"}),(0,s.jsx)("input",{type:"text",placeholder:"",value:w,onChange:function(e){S(e.target.value)}})]})]}),(0,s.jsxs)("div",{className:"h-full",children:[(0,s.jsx)("p",{children:"\u30c7\u30fc\u30bf\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"}),(0,s.jsx)("textarea",{className:"h-[360px]",value:k,onChange:function(e){E(e.target.value)}}),(0,s.jsx)("div",{children:(0,s.jsx)("button",{className:"px-4 py-2 bg-gray-600 rounded-md text-white w-full mt-4",onClick:B,children:"\u8a08\u7b97"})})]}),(0,s.jsxs)("div",{className:"h-full",children:[(0,s.jsx)("p",{children:"\u4fc2\u6570a"}),(0,s.jsx)("input",{type:"text",placeholder:"",value:H}),(0,s.jsx)("p",{children:"\u4fc2\u6570b"}),(0,s.jsx)("input",{type:"text",placeholder:"",value:O}),(0,s.jsx)("p",{children:"\u30d5\u30a3\u30eb\u30bf\u5f8c\u30c7\u30fc\u30bf"}),(0,s.jsx)("textarea",{className:"h-[360px]",value:D})]})]}),(0,s.jsx)("div",{className:"mt-8 w-full",children:(0,s.jsx)("img",{src:"data:image/jpeg;base64,".concat(J)})})]})})]})}},9008:function(e,t,n){e.exports=n(3121)}},function(e){e.O(0,[774,888,179],(function(){return t=7400,e(e.s=t);var t}));var t=e.O();_N_E=t}]);