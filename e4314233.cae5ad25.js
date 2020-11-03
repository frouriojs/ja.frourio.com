(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{100:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},101:function(e,t,r){"use strict";var n=r(0),a=r(102);t.a=function(){var e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},102:function(e,t,r){"use strict";var n=r(0),a=Object(n.createContext)(void 0);t.a=a},103:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(101),s=r(100),i=r(47),u=r.n(i),l=37,c=39;t.a=function(e){var t=e.block,r=e.children,i=e.defaultValue,d=e.values,f=e.groupId,p=e.className,b=Object(o.a)(),m=b.tabGroupChoices,y=b.setTabGroupChoices,v=Object(n.useState)(i),g=v[0],O=v[1],h=Object(n.useState)(!1),j=h[0],k=h[1];if(null!=f){var w=m[f];null!=w&&w!==g&&d.some((function(e){return e.value===w}))&&O(w)}var x=function(e){O(e),null!=f&&y(f,e)},N=[],q=function(e){e.metaKey||e.altKey||e.ctrlKey||k(!0)},E=function(){k(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",q),window.addEventListener("mousedown",E),function(){window.removeEventListener("keydown",q),window.removeEventListener("mousedown",E)}}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t},p)},d.map((function(e){var t=e.value,r=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(s.a)("tabs__item",u.a.tabItem,{"tabs__item--active":g===t}),style:j?{}:{outline:"none"},key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case c:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e),q(e)},onFocus:function(){return x(t)},onClick:function(){x(t),k(!1)},onPointerDown:function(){return k(!1)}},r)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(r).filter((function(e){return e.props.value===g}))[0]))}},104:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function(e){return a.a.createElement("div",null,e.children)}},93:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return f}));var n=r(2),a=r(6),o=(r(0),r(99)),s=r(103),i=r(104),u={id:"additional-request",title:"Additional request"},l={unversionedId:"Hooks/additional-request",id:"Hooks/additional-request",isDocsHomePage:!1,title:"Additional request",description:"If you add properties to the req object by Hooks, you can use AdditionalRequest to extend the type of the controller.",source:"@site/docs/Hooks/additional-request.mdx",slug:"/Hooks/additional-request",permalink:"/docs/Hooks/additional-request",editUrl:"https://github.com/frouriojs/frourio.io/edit/master/docs/Hooks/additional-request.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Controller-level hooks",permalink:"/docs/Hooks/controller-level-hooks"},next:{title:"Performance",permalink:"/docs/Advanced/performance"}},c=[],d={rightToc:c};function f(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If you add properties to the req object by Hooks, you can use AdditionalRequest to extend the type of the controller."),Object(o.b)(s.a,{defaultValue:"fastify",values:[{label:"fastify",value:"fastify"},{label:"express",value:"express"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"fastify",mdxType:"TabItem"},Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/fastify/fastify-auth"}),"fastify-auth")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"cd server\nnpm install fastify-auth\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="server/index.ts"',title:'"server/index.ts"'}),"import Fastify from 'fastify'\nimport fastifyAuth from 'fastify-auth'\nimport server from './$server' // '$server.ts' is automatically generated by frourio\n\nconst fastify = Fastify()\n\nfastify.register(fastifyAuth).after(() => {\n  server(fastify, { basePath: '/api/v1' })\n})\nfastify.listen(3000)\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="server/api/user/hooks.ts"',title:'"server/api/user/hooks.ts"'}),"import { defineHooks } from './$relay' // '$relay.ts' is automatically generated by frourio\nimport { getUserIdByToken } from '$/service/user'\n\nexport type AdditionalRequest = {\n  user: {\n    id: string\n  }\n}\n\nexport default defineHooks((fastify) => ({\n  preHandler: fastify.auth([\n    (req, _, done) => {\n      const user =\n        typeof req.headers.token === 'string' &&\n        getUserIdByToken(req.headers.token)\n\n      if (user) {\n        // eslint-disable-next-line\n        // @ts-expect-error\n        req.user = user\n        done()\n      } else {\n        done(new Error('Unauthorized'))\n      }\n    }\n  ])\n}))\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="server/api/user/controller.ts"',title:'"server/api/user/controller.ts"'}),"import { defineController } from './$relay'\nimport { getUserNameById } from '$/service/user'\n\nexport default defineController(() => ({\n  // user was added by AdditionalRequest of ./hooks.ts\n  get: async ({ user }) => ({ status: 200, body: await getUserNameById(user.id) })\n}))\n"))),Object(o.b)(i.a,{value:"express",mdxType:"TabItem"},Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.passportjs.org/packages/passport-trusted-header/"}),"passport-trusted-header")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"cd server\nnpm install passport passport-trusted-header\nnpm install @types/passport --save-dev\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="server/api/user/hooks.ts"',title:'"server/api/user/hooks.ts"'}),"import passport from 'passport'\nimport { defineHooks } from './$relay' // '$relay.ts' is automatically generated by frourio\nimport { getUserIdByToken } from '$/service/user'\n\nexport type AdditionalRequest = {\n  user: {\n    id: string\n  }\n}\n\npassport.use(\n  // eslint-disable-next-line\n  new (require('passport-trusted-header').Strategy)(\n    { headers: ['token'] },\n    // eslint-disable-next-line\n    (headers: { token: string }, done: Function) => {\n      done(null, getUserIdByToken(headers.token))\n    }\n  )\n)\n\nexport default defineHooks(() => ({\n  onRequest: [\n    passport.initialize(),\n    passport.authenticate('trusted-header', { session: false })\n  ]\n}))\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="server/api/user/controller.ts"',title:'"server/api/user/controller.ts"'}),"import { defineController } from './$relay'\nimport { getUserNameById } from '$/service/user'\n\nexport default defineController(() => ({\n  // user was added by AdditionalRequest of ./hooks.ts\n  get: async ({ user }) => ({ status: 200, body: await getUserNameById(user.id) })\n}))\n")))))}f.isMDXComponent=!0},99:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),c=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(r),p=n,b=d["".concat(s,".").concat(p)]||d[p]||f[p]||o;return r?a.a.createElement(b,i(i({ref:t},l),{},{components:r})):a.a.createElement(b,i({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);