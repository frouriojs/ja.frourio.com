(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{123:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=o(a),O=n,j=m["".concat(b,".").concat(O)]||m[O]||u[O]||l;return a?r.a.createElement(j,c(c({ref:t},p),{},{components:a})):r.a.createElement(j,c({ref:t},p))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=O;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var p=2;p<l;p++)b[p]=a[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},124:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},125:function(e,t,a){"use strict";var n=a(0),r=a(126);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},126:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},127:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(125),b=a(124),c=a(54),i=a.n(c),p=37,o=39;t.a=function(e){var t=e.lazy,a=e.block,c=e.children,m=e.defaultValue,u=e.values,O=e.groupId,j=e.className,s=Object(l.a)(),d=s.tabGroupChoices,g=s.setTabGroupChoices,N=Object(n.useState)(m),f=N[0],y=N[1];if(null!=O){var v=d[O];null!=v&&v!==f&&u.some((function(e){return e.value===v}))&&y(v)}var h=function(e){y(e),null!=O&&g(O,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(b.a)("tabs",{"tabs--block":a},j)},u.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(b.a)("tabs__item",i.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case o:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return h(t)},onClick:function(){h(t)}},a)}))),t?Object(n.cloneElement)(c.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},c.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},128:function(e,t,a){"use strict";var n=a(3),r=a(0),l=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return l.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}},152:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(57),b=a.n(l);t.a=function(e){var t=e.children,a=e.minHeight,n=e.maxHeight,l=e.url;return r.a.createElement("div",{className:b.a.browserWindow,style:{minHeight:a}},r.a.createElement("div",{className:b.a.browserWindowHeader},r.a.createElement("div",{className:b.a.buttons},r.a.createElement("span",{className:b.a.dot,style:{background:"#f25f58"}}),r.a.createElement("span",{className:b.a.dot,style:{background:"#fbbe3c"}}),r.a.createElement("span",{className:b.a.dot,style:{background:"#58cb42"}})),r.a.createElement("div",{className:b.a.browserWindowAddressBar},l),r.a.createElement("div",{className:b.a.browserWindowMenuIcon},r.a.createElement("div",null,r.a.createElement("span",{className:b.a.bar}),r.a.createElement("span",{className:b.a.bar}),r.a.createElement("span",{className:b.a.bar})))),r.a.createElement("div",{className:b.a.browserWindowBody,style:{maxHeight:n}},t))}},88:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return O}));var n=a(3),r=a(7),l=(a(0),a(123)),b=a(127),c=a(128),i=a(152),p={id:"cui",title:"Setup with CUI"},o={unversionedId:"installation/cui",id:"installation/cui",isDocsHomePage:!1,title:"Setup with CUI",description:"<Tabs",source:"@site/docs/installation/cui.mdx",slug:"/installation/cui",permalink:"/docs/installation/cui",editUrl:"https://github.com/frouriojs/frourio.io/edit/master/docs/installation/cui.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Setup with GUI",permalink:"/docs/installation/gui"},next:{title:"Entrypoint of server",permalink:"/docs/entrypoint"}},m=[],u={rightToc:m};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)(b.a,{defaultValue:"npx",values:[{label:"npx",value:"npx"},{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"npx",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh",metastring:'title="Tarminal"',title:'"Tarminal"'}),'npx create-frourio-app --answers \'{"dir":"my-project"}\'\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh",metastring:'title="Command prompt"',title:'"Command','prompt"':!0}),'npx create-frourio-app --answers "{\\\\\\"dir\\\\\\":\\\\\\"my-project\\\\\\"}"\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-powershell",metastring:'title="PowerShell"',title:'"PowerShell"'}),'npx create-frourio-app --answers \'{\\"dir\\":\\"my-project\\"}\'\n'))),Object(l.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh",metastring:'title="Tarminal"',title:'"Tarminal"'}),'npm init frourio-app --answers \'{"dir":"my-project"}\'\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh",metastring:'title="Command prompt"',title:'"Command','prompt"':!0}),'npm init frourio-app --answers "{\\\\\\"dir\\\\\\":\\\\\\"my-project\\\\\\"}"\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-powershell",metastring:'title="PowerShell"',title:'"PowerShell"'}),'npm init frourio-app --answers \'{\\"dir\\":\\"my-project\\"}\'\n'))),Object(l.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh",metastring:'title="Tarminal"',title:'"Tarminal"'}),'yarn create frourio-app --answers \'{"dir":"my-project"}\'\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh",metastring:'title="Command prompt"',title:'"Command','prompt"':!0}),'yarn create frourio-app --answers "{\\\\\\"dir\\\\\\":\\\\\\"my-project\\\\\\"}"\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-powershell",metastring:'title="PowerShell"',title:'"PowerShell"'}),'yarn create frourio-app --answers \'{\\"dir\\":\\"my-project\\"}\'\n')))),Object(l.b)("br",null),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"answers JSON parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"When"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dir"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Directory name (create new)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"server"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"fastify" ',"|",' "express"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"fastify"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Server engine"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"client"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"next" ',"|",' "nuxt" ',"|",' "sapper"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"next"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Client framework"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"building"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"static" ',"|",' "basic"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"static"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Building mode"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'client === "next" ',"|","|"," client === 'sapper'")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mode"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"spa" ',"|",' "universal"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"spa"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Rendering mode"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'client === "nuxt"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"target"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"static" ',"|",' "server"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"static"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Deployment target"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'client === "nuxt"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aspida"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"axios" ',"|",' "fetch"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"axios"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"HTTP client of aspida"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"daemon"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"none" ',"|",' "pm2"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"none"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Daemon process manager"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"orm"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"prisma" ',"|",' "typeorm" ',"|",' "none"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"prisma"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O/R mapping tool"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"prismaDB"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"sqlite" ',"|",' "mysql" ',"|",' "postgresql"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"sqlite"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DB type of Prisma"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'orm === "prisma"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"typeormDB"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"mysql" ',"|",' "postgres" ',"|",' "mongodb" ',"|",' "mssql" ',"|",' "mariadb" ',"|",' "cockroachdb"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"mysql"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DB type of TypeORM"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'orm === "typeorm"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dbHost"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"localhost"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"HOST of DB"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'orm !== "none" && prismaDB !== "sqlite"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dbPort"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default port of DB type"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PORT of DB"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'orm !== "none" && prismaDB !== "sqlite"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dbUser"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"USER of DB"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'orm !== "none" && prismaDB !== "sqlite"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dbPass"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PASS of DB"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'orm !== "none" && prismaDB !== "sqlite"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dbName"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NAME of DB"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'orm !== "none" && prismaDB !== "sqlite"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dbFile"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"./dev.db"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DB file path of SQLite"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'orm === "prisma" && prismaDB === "sqlite"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"testing"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"jest" ',"|",' "node"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"jest"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Testing framework"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pm"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"yarn" ',"|",' "npm"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"yarn"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Package manager"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ci"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"actions" ',"|",' "none"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"actions"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CI config"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(l.b)("br",null),Object(l.b)("p",null,"Once the above command is installed, the browser will automatically open at ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:3000"}),"http://localhost:3000")),Object(l.b)(b.a,{defaultValue:"next",values:[{label:"Next.js",value:"next"},{label:"Nuxt.js",value:"nuxt"},{label:"Sapper",value:"sapper"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"next",mdxType:"TabItem"},Object(l.b)(i.a,{url:"http://localhost:3000",mdxType:"BrowserWindow"},Object(l.b)("img",{src:"/img/nextjs.png"}))),Object(l.b)(c.a,{value:"nuxt",mdxType:"TabItem"},Object(l.b)(i.a,{url:"http://localhost:3000",mdxType:"BrowserWindow"},Object(l.b)("img",{src:"/img/nuxtjs.png"}))),Object(l.b)(c.a,{value:"sapper",mdxType:"TabItem"},Object(l.b)(i.a,{url:"http://localhost:3000",mdxType:"BrowserWindow"},Object(l.b)("img",{src:"/img/sapper.png"})))))}O.isMDXComponent=!0}}]);