"use client";
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const u=require("react/jsx-runtime"),l=require("react"),d=require("@radix-ui/react-toggle"),g=require("class-variance-authority"),f=require("../../utils/cn.cjs");function o(e){const n=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:()=>e[t]})}}return n.default=e,Object.freeze(n)}const m=o(l),a=o(d),i=g.cva("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",{variants:{variant:{default:"bg-transparent",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"},size:{default:"h-9 px-3",sm:"h-8 px-2",lg:"h-10 px-3"}},defaultVariants:{variant:"default",size:"default"}}),s=m.forwardRef(({className:e,variant:n,size:t,...r},c)=>u.jsx(a.Root,{ref:c,className:f.cn(i({variant:n,size:t,className:e})),...r}));s.displayName=a.Root.displayName;exports.Toggle=s;exports.toggleVariants=i;
//# sourceMappingURL=index.cjs.map
