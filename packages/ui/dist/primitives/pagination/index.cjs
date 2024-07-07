"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("react/jsx-runtime"),x=require("react"),r=require("@radix-ui/react-icons"),f=require("../button/index.cjs"),t=require("../../utils/cn.cjs");function N(a){const e=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(a){for(const i in a)if(i!=="default"){const s=Object.getOwnPropertyDescriptor(a,i);Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>a[i]})}}return e.default=a,Object.freeze(e)}const c=N(x),l=({className:a,...e})=>n.jsx("nav",{role:"navigation","aria-label":"pagination",className:t.cn("mx-auto flex w-full justify-center",a),...e});l.displayName="Pagination";const g=c.forwardRef(({className:a,...e},i)=>n.jsx("ul",{ref:i,className:t.cn("flex flex-row items-center gap-1",a),...e}));g.displayName="PaginationContent";const u=c.forwardRef(({...a},e)=>n.jsx("li",{ref:e,...a}));u.displayName="PaginationItem";const o=({className:a,isActive:e,size:i="icon",children:s,...P})=>n.jsx("a",{"aria-current":e?"page":void 0,className:t.cn(f.buttonVariants({variant:e?"outline":"ghost",size:i}),a),...P,children:s});o.displayName="PaginationLink";const p=({className:a,...e})=>n.jsxs(o,{"aria-label":"Go to previous page",size:"default",className:t.cn("gap-1 pl-2.5",a),...e,children:[n.jsx(r.ChevronLeftIcon,{className:"size-4"}),n.jsx("span",{children:"Previous"})]});p.displayName="PaginationPrevious";const m=({className:a,...e})=>n.jsxs(o,{"aria-label":"Go to next page",size:"default",className:t.cn("gap-1 pr-2.5",a),...e,children:[n.jsx("span",{children:"Next"}),n.jsx(r.ChevronRightIcon,{className:"size-4"})]});m.displayName="PaginationNext";const d=({className:a,...e})=>n.jsxs("span",{"aria-hidden":!0,className:t.cn("flex size-9 items-center justify-center",a),...e,children:[n.jsx(r.DotsHorizontalIcon,{className:"size-4"}),n.jsx("span",{className:"sr-only",children:"More pages"})]});d.displayName="PaginationEllipsis";exports.Pagination=l;exports.PaginationContent=g;exports.PaginationEllipsis=d;exports.PaginationItem=u;exports.PaginationLink=o;exports.PaginationNext=m;exports.PaginationPrevious=p;
//# sourceMappingURL=index.cjs.map
