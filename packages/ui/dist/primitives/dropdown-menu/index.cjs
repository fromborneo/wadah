"use client";
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const a=require("react/jsx-runtime"),M=require("react"),y=require("@radix-ui/react-dropdown-menu"),c=require("@radix-ui/react-icons"),s=require("../../utils/cn.cjs");function l(o){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(o){for(const n in o)if(n!=="default"){const r=Object.getOwnPropertyDescriptor(o,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:()=>o[n]})}}return t.default=o,Object.freeze(t)}const d=l(M),e=l(y),N=e.Root,h=e.Trigger,j=e.Group,S=e.Portal,I=e.Sub,R=e.RadioGroup,u=d.forwardRef(({className:o,inset:t,children:n,...r},i)=>a.jsxs(e.SubTrigger,{ref:i,className:s.cn("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",t&&"pl-8",o),...r,children:[n,a.jsx(c.ChevronRightIcon,{className:"ml-auto size-4"})]}));u.displayName=e.SubTrigger.displayName;const p=d.forwardRef(({className:o,...t},n)=>a.jsx(e.SubContent,{ref:n,className:s.cn("z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",o),...t}));p.displayName=e.SubContent.displayName;const m=d.forwardRef(({className:o,sideOffset:t=4,...n},r)=>a.jsx(e.Portal,{children:a.jsx(e.Content,{ref:r,sideOffset:t,className:s.cn("z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",o),...n})}));m.displayName=e.Content.displayName;const f=d.forwardRef(({className:o,inset:t,...n},r)=>a.jsx(e.Item,{ref:r,className:s.cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t&&"pl-8",o),...n}));f.displayName=e.Item.displayName;const b=d.forwardRef(({className:o,children:t,checked:n=!1,...r},i)=>a.jsxs(e.CheckboxItem,{ref:i,className:s.cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",o),checked:n,...r,children:[a.jsx("span",{className:"absolute left-2 flex size-3.5 items-center justify-center",children:a.jsx(e.ItemIndicator,{children:a.jsx(c.CheckIcon,{className:"size-4"})})}),t]}));b.displayName=e.CheckboxItem.displayName;const w=d.forwardRef(({className:o,children:t,...n},r)=>a.jsxs(e.RadioItem,{ref:r,className:s.cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",o),...n,children:[a.jsx("span",{className:"absolute left-2 flex size-3.5 items-center justify-center",children:a.jsx(e.ItemIndicator,{children:a.jsx(c.DotFilledIcon,{className:"size-4 fill-current"})})}),t]}));w.displayName=e.RadioItem.displayName;const x=d.forwardRef(({className:o,inset:t,...n},r)=>a.jsx(e.Label,{ref:r,className:s.cn("px-2 py-1.5 text-sm font-semibold",t&&"pl-8",o),...n}));x.displayName=e.Label.displayName;const g=d.forwardRef(({className:o,...t},n)=>a.jsx(e.Separator,{ref:n,className:s.cn("-mx-1 my-1 h-px bg-muted",o),...t}));g.displayName=e.Separator.displayName;const D=({className:o,...t})=>a.jsx("span",{className:s.cn("ml-auto text-xs tracking-widest opacity-60",o),...t});D.displayName="DropdownMenuShortcut";exports.DropdownMenu=N;exports.DropdownMenuCheckboxItem=b;exports.DropdownMenuContent=m;exports.DropdownMenuGroup=j;exports.DropdownMenuItem=f;exports.DropdownMenuLabel=x;exports.DropdownMenuPortal=S;exports.DropdownMenuRadioGroup=R;exports.DropdownMenuRadioItem=w;exports.DropdownMenuSeparator=g;exports.DropdownMenuShortcut=D;exports.DropdownMenuSub=I;exports.DropdownMenuSubContent=p;exports.DropdownMenuSubTrigger=u;exports.DropdownMenuTrigger=h;
//# sourceMappingURL=index.cjs.map
