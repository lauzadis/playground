(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4612:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return y}});var i=t(6952),r=t(8742),o=t.n(r),a=t(2547),u=t(6695),s=t(8617),l=t(7378),c=t(4246),d=t(7061),h=(0,s.default)((function(){return Promise.all([t.e(90),t.e(329)]).then(t.bind(t,2329))}),{ssr:!1,loadableGenerated:{webpack:function(){return[2329]},modules:["index.tsx -> react-ace"]}}),f='\n#include <iostream>\nint main() {\n    std::cout << "Hello, CPP!\\n";\n    return 0;\n}'.trim(),v='\nmain = putStrLn "Hello, Haskell!"\n'.trim(),p='\npublic class Main {\n  public static void main(String[] unused) {\n    System.out.println("Hello, Java!");\n  }\n}\n'.trim(),g=function(){var n=(0,u.useGoogleLogin)(),e=n.isSignedIn,t=n.auth;return n.ready?(0,c.jsx)("button",{onClick:function(){return e?null===t||void 0===t?void 0:t.signOut():null===t||void 0===t?void 0:t.signIn()},children:e?"Signout":"Signin"}):null},m=function(){var n=(0,l.useState)(""),e=n[0],t=n[1],r=(0,l.useState)("python"),u=r[0],s=r[1],d=(0,l.useState)(),g=d[0],m=d[1],y=(0,a.usePlayground)(),x=y.run,b=y.load,j=(0,l.useRef)(),P=(0,l.useState)(!1),S=P[0],k=P[1];(0,l.useEffect)((function(){b("cs124/playground-python").then((function(){b("cs124/playground-cpp")})).then((function(){b("cs124/playground-haskell")})).then((function(){b("cs124/playground-java")}))}),[b]);var C=(0,l.useCallback)((0,i.Z)(o().mark((function n(){var e,t,i,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(j.current){n.next=2;break}return n.abrupt("return");case 2:if(""!==(e=j.current.getValue()).trim()){n.next=6;break}return m(void 0),n.abrupt("return");case 6:return t="main.py","python"===u?t="main.py":"cpp"===u?t="main.cpp":"haskell"===u?t="main.hs":"java"===u&&(t="Main.java"),i={image:"cs124/playground-".concat(u),filesystem:[{path:t,contents:e}]},n.prev=9,k(!0),n.next=13,x(i,!0);case 13:(r=n.sent).timedOut?m({error:"Timeout"}):m({result:r}),n.next=20;break;case 17:n.prev=17,n.t0=n.catch(9),m({error:n.t0.toString()});case 20:return n.prev=20,k(!1),n.finish(20);case 23:case"end":return n.stop()}}),n,null,[[9,17,20,23]])}))),[u,x]),_=(0,l.useMemo)((function(){var n;return(null===g||void 0===g?void 0:g.error)||(null===g||void 0===g||null===(n=g.result)||void 0===n?void 0:n.outputLines.map((function(n){return n.line})).join("\n"))||""}),[g]),w=(0,l.useMemo)((function(){return[{name:"gotoline",exec:function(){return!1},bindKey:{win:"",mac:""}},{name:"run",bindKey:{win:"Ctrl-Enter",mac:"Ctrl-Enter"},exec:function(){return C()},readOnly:!0},{name:"close",bindKey:{win:"Esc",mac:"Esc"},exec:function(){return m(void 0)},readOnly:!0}]}),[C]);return(0,l.useEffect)((function(){w.forEach((function(n){var e;j.current&&(null===(e=j.current)||void 0===e||e.commands.addCommand(n))}))}),[w]),(0,l.useEffect)((function(){"python"===u?t('print("Hello, Python!")'):"cpp"===u?t(f):"haskell"===u?t(v):"java"===u&&t(p),m(void 0)}),[u]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(h,{mode:u,theme:"github",width:"100%",height:"16rem",minLines:16,maxLines:1/0,value:e,showPrintMargin:!1,onBeforeLoad:function(n){n.config.set("basePath","https://cdn.jsdelivr.net/npm/ace-builds@".concat(n.version,"/src-min-noconflict"))},onLoad:function(n){j.current=n},onChange:t,commands:w,setOptions:{tabSize:2}}),(0,c.jsxs)("div",{style:{marginTop:8},children:[(0,c.jsx)("button",{onClick:function(){C()},style:{marginRight:8},children:"Run"}),(0,c.jsx)("div",{style:{float:"right"},children:(0,c.jsxs)("select",{id:"language",onChange:function(n){return s(n.target.value)},value:u,children:[(0,c.jsx)("option",{value:"python",children:"Python"}),(0,c.jsx)("option",{value:"cpp",children:"C++"}),(0,c.jsx)("option",{value:"java",children:"Java"}),(0,c.jsx)("option",{value:"haskell",children:"Haskell"})]})})]}),(0,c.jsx)("div",{className:"output",children:S?(0,c.jsx)("span",{children:"Running..."}):void 0!==_?(0,c.jsx)("span",{children:_}):(0,c.jsx)("span",{})}),(null===g||void 0===g?void 0:g.result)&&(0,c.jsx)(h,{readOnly:!0,theme:"github",mode:"json",height:"32rem",value:JSON.stringify(g.result,null,2)})]})};function y(){return(0,c.jsx)(u.GoogleLoginProvider,{clientConfig:{client_id:d.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID},children:(0,c.jsx)(u.WithGoogleTokens,{children:function(n){var e=n.idToken;return(0,c.jsxs)(a.PlaygroundProvider,{googleToken:e,server:"https://cloud.cs124.org/playground",children:[(0,c.jsx)("h1",{children:(0,c.jsx)("kbd",{children:"playground"})}),(0,c.jsxs)("p",{children:["Visit the ",(0,c.jsx)("a",{href:"https://github.com/cs124-illinois/playground",children:"project homepage"})]}),(0,c.jsx)("h2",{children:"Playground Demo"}),(0,c.jsx)("div",{style:{marginBottom:8},children:(0,c.jsx)(g,{})}),(0,c.jsx)(m,{})]})}})})}},4423:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4612)}])},2547:function(n,e,t){var i=this&&this.__createBinding||(Object.create?function(n,e,t,i){void 0===i&&(i=t),Object.defineProperty(n,i,{enumerable:!0,get:function(){return e[t]}})}:function(n,e,t,i){void 0===i&&(i=t),n[i]=e[t]}),r=this&&this.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),o=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)"default"!==t&&Object.prototype.hasOwnProperty.call(n,t)&&i(e,n,t);return r(e,n),e},a=this&&this.__awaiter||function(n,e,t,i){return new(t||(t=Promise))((function(r,o){function a(n){try{s(i.next(n))}catch(e){o(e)}}function u(n){try{s(i.throw(n))}catch(e){o(e)}}function s(n){var e;n.done?r(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,u)}s((i=i.apply(n,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.PlaygroundContext=e.usePlayground=e.PlaygroundProvider=void 0;const u=t(8741),s=o(t(7378));e.PlaygroundProvider=({googleToken:n,server:t,children:i})=>{const[r,o]=(0,s.useState)(void 0);(0,s.useEffect)((()=>{fetch(t).then((n=>n.json())).then((n=>o(n.status))).catch((()=>o(void 0)))}),[t]);const l=(0,s.useCallback)(((e,i=!1)=>a(this,void 0,void 0,(function*(){e=i?u.Submission.check(e):e;const r=yield fetch(t,{method:"post",body:JSON.stringify(e),headers:Object.assign({"Content-Type":"application/json"},n&&{"google-token":n})}).then((n=>a(this,void 0,void 0,(function*(){if(200===n.status){const e=yield n.json();return o(e.status),e}throw yield n.text()})))).catch((n=>{throw o(void 0),n}));return i?u.Result.check(r):r}))),[n,t]),c=(0,s.useCallback)((n=>a(this,void 0,void 0,(function*(){yield fetch(`${t}/image/${n}`)}))),[t]);return s.default.createElement(e.PlaygroundContext.Provider,{value:{available:!0,status:r,connected:void 0!==r,run:l,load:c}},i)};e.usePlayground=()=>(0,s.useContext)(e.PlaygroundContext),e.PlaygroundContext=s.default.createContext({available:!1,connected:!1,status:void 0,run:()=>{throw new Error("Playground context not available")},load:()=>{throw new Error("Playground context not available")}})},8741:function(n,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.Status=e.Result=e.Submission=e.FakeFile=e.OutputLine=e.Console=void 0;const i=t(4690);e.Console=(0,i.Union)((0,i.Literal)("STDOUT"),(0,i.Literal)("STDERR")),e.OutputLine=(0,i.Record)({console:e.Console,timestamp:i.String.withConstraint((n=>!isNaN(Date.parse(n)))),line:i.String}),e.FakeFile=(0,i.Record)({path:i.String,contents:i.String}),e.Submission=(0,i.Record)({image:i.String}).And((0,i.Partial)({filesystem:(0,i.Array)(e.FakeFile),timeout:i.Number})),e.Result=(0,i.Record)({started:i.String.withConstraint((n=>!isNaN(Date.parse(n)))),ended:i.String.withConstraint((n=>!isNaN(Date.parse(n)))),outputLines:(0,i.Array)(e.OutputLine),timedOut:i.Boolean,exitValue:i.Number}),e.Status=(0,i.Record)({started:i.String.withConstraint((n=>!isNaN(Date.parse(n)))),version:i.String})}},function(n){n.O(0,[774,799,888,179],(function(){return e=4423,n(n.s=e);var e}));var e=n.O();_N_E=e}]);