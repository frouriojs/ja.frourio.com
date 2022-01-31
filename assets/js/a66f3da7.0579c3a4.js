"use strict";(self.webpackChunkfrourio_doc=self.webpackChunkfrourio_doc||[]).push([[7714],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(t),m=s,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,i=new Array(o);i[0]=u;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8379:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=t(3117),s=t(102),o=(t(7294),t(3905)),i=["components"],a={id:"dependency-injection",title:"Dependency Injection"},c=void 0,l={unversionedId:"dependency-injection",id:"dependency-injection",title:"Dependency Injection",description:"Frourio use frouriojs/velona for Dependency Injection.",source:"@site/docs/dependency-injection.md",sourceDirName:".",slug:"/dependency-injection",permalink:"/docs/dependency-injection",editUrl:"https://github.com/frouriojs/frourio.io/edit/master/docs/dependency-injection.md",tags:[],version:"current",frontMatter:{id:"dependency-injection",title:"Dependency Injection"},sidebar:"someSidebar",previous:{title:"API Server Hosting",permalink:"/docs/deployments/server"},next:{title:"Error handling",permalink:"/docs/advanced/error-handling"}},p=[],d={toc:p};function u(e){var n=e.components,t=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Frourio use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/frouriojs/velona"},"frouriojs/velona")," for Dependency Injection."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/api/tasks/index.ts"',title:'"server/api/tasks/index.ts"'},"import { Task } from '$/types'\n\nexport type Methods = {\n  get: {\n    query?: {\n      limit?: number\n      message?: string\n    }\n\n    resBody: Task[]\n  }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/service/tasks.ts"',title:'"server/service/tasks.ts"'},"import { PrismaClient } from '@prisma/client'\nimport { depend } from 'velona' // dependency of frourio\nimport { Task } from '$/types'\n\nconst prisma = new PrismaClient()\n\nexport const getTasks = depend(\n  { prisma: prisma as { task: { findMany(): Promise<Task[]> } } }, // inject prisma\n  async ({ prisma }, limit?: number) => // prisma is injected object\n    (await prisma.task.findMany()).slice(0, limit)\n)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/api/tasks/controller.ts"',title:'"server/api/tasks/controller.ts"'},"import { defineController } from './$relay'\nimport { getTasks } from '$/service/tasks'\n\nconst print = (text: string) => console.log(text)\n\nexport default defineController(\n  { getTasks, print }, // inject functions\n  ({ getTasks, print }) => ({ // getTasks and print are injected function\n    get: async ({ query }) => {\n      if (query?.message) print(query.message)\n\n      return { status: 200, body: await getTasks(query?.limit) }\n    }\n  })\n)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server/test/server.test.ts"',title:'"server/test/server.test.ts"'},"import controller from '$/api/tasks/controller'\n\ntest('dependency injection into controller', async () => {\n  let printedMessage = ''\n\n  const injectedController = controller.inject((deps) => ({\n    getTasks: deps.getTasks.inject({\n      prisma: {\n        task: {\n          findMany: () =>\n            Promise.resolve([\n              { id: 0, label: 'task1', done: false },\n              { id: 1, label: 'task2', done: false },\n              { id: 2, label: 'task3', done: true },\n              { id: 3, label: 'task4', done: true },\n              { id: 4, label: 'task5', done: false }\n            ])\n        }\n      }\n    }),\n    print: (text: string) => {\n      printedMessage = text\n    }\n  }))()\n\n  const limit = 3\n  const message = 'test message'\n  const res = await injectedController.get({\n    query: { limit, message }\n  })\n\n  expect(res.body).toHaveLength(limit)\n  expect(printedMessage).toBe(message)\n})\n")),(0,o.kt)("p",null,"Results"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm test\n\nPASS server/test/server.test.ts\n  \u2713 dependency injection into controller (4 ms)\n\nTest Suites: 1 passed, 1 total\nTests:       1 passed, 1 total\nSnapshots:   0 total\nTime:        0.67 s, estimated 8 s\nRan all test suites.\n")))}u.isMDXComponent=!0}}]);