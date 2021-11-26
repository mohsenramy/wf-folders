(this["webpackJsonpwf-folders"]=this["webpackJsonpwf-folders"]||[]).push([[0],{124:function(e,t,r){},154:function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"formatBytes",(function(){return P}));var i={};r.r(i),r.d(i,"fileWithoutExtension",(function(){return N}));var a=r(0),c=r.n(a),s=r(57),o=r.n(s),l=(r(124),r(34)),u=r(187),j=r(174),d=r(179),f=r(180),m=r(43),x=r.n(m),b=r(58),h=r(95),O=r.n(h).a.create();O.defaults.baseURL="https://dev21.becollective.com/api/v2/coding-challenges/dirs",O.defaults.headers.common={"Content-Type":"application/json",Accept:"application/json"},O.interceptors.request.use(function(){var e=Object(b.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return console.error("axiosClient.interceptors.request",e),Promise.reject(e)})),O.interceptors.response.use((function(e){return e}),(function(e){return console.error("axiosClient.interceptors.response",e),Promise.reject(e)}));var g=O,p=function(){var e=Object(b.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.get("").then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=r(17),y=r(182),w=r(169),C=r(99),S=r.n(C),B=r(102),F=r.n(B),z=r(101),M=r.n(z),W=r(103),k=r.n(W),D=r(1),I=function(e){var t=e.folderName,r=e.children,n=Object(a.useState)(!0),i=Object(v.a)(n,2),c=i[0],s=i[1];return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(w.a,{"data-testid":"FolderNodeBox",sx:{display:"flex",alignItems:"center",alignContent:"center",cursor:"pointer","&:hover":{opacity:[1,1,.7]}},onClick:function(){s(!c)},children:[c?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(S.a,{color:"action",fontSize:"small"}),Object(D.jsx)(M.a,{color:"action"})]}):Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(F.a,{color:"action",fontSize:"small"}),Object(D.jsx)(k.a,{color:"action"})]}),Object(D.jsx)(y.a,{variant:"body1",fontWeight:"500",style:{margin:"0.3rem 0.6rem 0.3rem 0.6rem"},children:t})]}),Object(D.jsx)(w.a,{children:c?null:Object(D.jsx)(w.a,{sx:{marginLeft:"2rem",height:c?0:"auto"},children:r})})]})},E=r(73),P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(0===e)return"0Bytes";var r=1024,n=t<0?0:t,i=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],a=Math.floor(Math.log(e)/Math.log(r));return parseFloat((e/Math.pow(r,a)).toFixed(n))+i[a]},N=function(e){return e.indexOf(".")>=0?e.split(".").slice(0,-1).join("."):e},T={format:Object(E.a)(Object(E.a)({},n),i)},L=r(104),Q=r.n(L),R=function(e){var t=e.fileName,r=e.size;return Object(D.jsxs)(j.a,{sx:{flexDirection:"row",display:"flex",alignContent:"flex-start",alignItems:"center"},children:[Object(D.jsx)(Q.a,{color:"action"}),Object(D.jsx)(y.a,{variant:"body1",style:{margin:"0.3rem 0.6rem 0.3rem 0.6rem"},children:T.format.fileWithoutExtension(t)}),Object(D.jsx)(y.a,{variant:"subtitle2",children:T.format.formatBytes(Number(null!==r&&void 0!==r?r:0))})]})},A=r(185),q=r(176),G=r(178),H=r(183),J=function(e){var t=e.message,r=void 0===t?"Something went wrong, please try again":t;return Object(D.jsxs)(q.a,{severity:"error",variant:"standard",sx:{alignSelf:"center",margin:"0rem 0rem 3rem 0rem",columns:1},action:Object(D.jsx)(G.a,{color:"inherit",size:"small",onClick:function(){return window.location.reload()},children:"Retry"}),children:[Object(D.jsx)(H.a,{children:"Server Error"}),r]})},U=r(184),K=function(e){var t=e.loadingMessage,r=void 0===t?"loading ...":t;return Object(D.jsxs)(w.a,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"1.875rem"},children:[Object(D.jsx)(U.a,{sx:{color:"text.primary"}}),Object(D.jsx)(y.a,{sx:{margin:"1rem"},children:r})]})},V=function(e){var t=e.foldersStructureData,r=Object(a.useState)({structure:null,files:{count:0,size:0},error:null}),n=Object(v.a)(r,2),i=n[0],c=n[1],s=Object(a.useCallback)((function(e,t){try{return{structure:e.map((function(e,r){var n;switch(e.type){case"folder":return Object(D.jsx)(I,{folderName:e.name,children:s(e.children,t).structure},r);case"file":return t.count++,t.size+=null!==(n=e.size)&&void 0!==n?n:0,Object(D.jsx)(R,{fileName:e.name,size:e.size},r);default:throw new Error("Corrupted data!")}})),files:t,error:null}}catch(r){return{structure:null,files:t,error:r}}}),[]);return Object(a.useEffect)((function(){t&&Array.isArray(t)&&c(s(t,i.files))}),[s,t,i.files]),Object(D.jsxs)(D.Fragment,{children:[i.structure?Object(D.jsx)(j.a,{component:"div",sx:{padding:"1rem",margin:"1rem 0 0 1rem"},children:i.structure}):i.error?Object(D.jsx)(J,{message:"Data processing failed, try again"}):Object(D.jsx)(K,{loadingMessage:"Building folders tree..."}),Object(D.jsx)(A.a,{variant:"middle",sx:{borderBottomWidth:3}}),Object(D.jsxs)(j.a,{sx:{margin:"1rem 0 1rem 2.5rem"},children:[Object(D.jsxs)(y.a,{variant:"subtitle1",fontWeight:"500",children:["Total Files: ",i.files.count]}),Object(D.jsxs)(y.a,{variant:"subtitle1",fontWeight:"500",children:["Total Files Size: ",T.format.formatBytes(i.files.size)]})]})]})};var X=function(){var e=Object(l.useQuery)("FolderStructure",p,{retry:!1,refetchOnWindowFocus:!1,retryOnMount:!1}),t=e.isLoading,r=e.isError,n=e.data;return t?Object(D.jsx)(K,{loadingMessage:"Fetching Data ..."}):r?Object(D.jsx)(J,{message:"Unable to fetch folders data"}):Object(D.jsx)(V,{foldersStructureData:n})},Y=r(149),Z=r(63),_=r.n(Z),$=function(){var e=Object(Y.a)();return Object(D.jsxs)(j.a,{"data-testid":"Header",sx:{borderRadius:"0.3125rem 0.3125rem 0 0",backgroundColor:e.palette.grey[500],color:e.palette.grey[700],padding:"0.25rem 0 0 0.5rem "},children:[Object(D.jsx)(_.a,{fontSize:"small"}),Object(D.jsx)(_.a,{fontSize:"small"}),Object(D.jsx)(_.a,{fontSize:"small"})]})},ee=r(186),te=r(105),re=r.n(te),ne=function(){return Object(D.jsxs)(j.a,{"data-testid":"Footer",sx:{flex:1,flexDirection:"row",justifyContent:"space-between",margin:"0.5rem"},children:[Object(D.jsx)(A.a,{variant:"fullWidth"}),Object(D.jsx)(j.a,{display:"flex",flexDirection:"row",justifyContent:"flex-end",padding:".5rem 0.5rem 0 0",children:Object(D.jsxs)(ee.a,{href:"https://github.com/mohsenramy/wf-folders",underline:"hover",variant:"caption",color:"inherit",target:"_blank",rel:"noopener",sx:{fontSize:"0.8rem",fontWeight:"600"},children:[Object(D.jsx)(re.a,{fontSize:"inherit"})," GitHub Repo"]})})]})},ie=r(74),ae=r(181),ce=Object(ie.a)({typography:{allVariants:{color:"#899198"}}}),se=ce=Object(ae.a)(ce),oe=new l.QueryClient;var le=function(){return Object(D.jsx)(l.QueryClientProvider,{client:oe,children:Object(D.jsx)(f.a,{theme:se,children:Object(D.jsx)(u.a,{maxWidth:"lg",children:Object(D.jsxs)(j.a,{component:d.a,container:!0,sx:{justifyContent:"center",alignItems:"center",boxShadow:3,margin:"2rem 0 0 0"},children:[Object(D.jsx)(d.a,{item:!0,xs:12,children:Object(D.jsx)($,{})}),Object(D.jsx)(d.a,{container:!0,sx:{justifyContent:"center",alignItems:"center"},children:Object(D.jsx)(d.a,{item:!0,xs:11,md:10,sx:{justifyContent:"center",alignItems:"center",overflowX:"auto",margin:"0 .5rem 0 .5rem"},children:Object(D.jsx)(X,{})})}),Object(D.jsx)(d.a,{container:!0,direction:"row",justifyContent:"flex-end",alignItems:"center",children:Object(D.jsx)(ne,{})})]})})})})},ue=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,188)).then((function(t){var r=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;r(e),n(e),i(e),a(e),c(e)}))},je=(r(150),r(151),r(152),r(153),new l.QueryClient);o.a.render(Object(D.jsx)(c.a.StrictMode,{children:Object(D.jsx)(l.QueryClientProvider,{client:je,children:Object(D.jsx)(le,{})})}),document.getElementById("root")),ue()}},[[154,1,2]]]);
//# sourceMappingURL=main.3d59f60b.chunk.js.map