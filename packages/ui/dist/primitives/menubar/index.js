"use client";
import { jsx as n, jsxs as c } from "react/jsx-runtime";
import * as d from "react";
import { ChevronRightIcon as m, CheckIcon as u, DotFilledIcon as p } from "@radix-ui/react-icons";
import * as e from "@radix-ui/react-menubar";
import { cn as r } from "../../utils/cn.js";
const C = e.Menu, k = e.Group, T = e.Portal, j = e.Sub, G = e.RadioGroup, f = d.forwardRef(({ className: t, ...a }, o) => /* @__PURE__ */ n(
  e.Root,
  {
    ref: o,
    className: r(
      "flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm",
      t
    ),
    ...a
  }
));
f.displayName = e.Root.displayName;
const b = d.forwardRef(({ className: t, ...a }, o) => /* @__PURE__ */ n(
  e.Trigger,
  {
    ref: o,
    className: r(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t
    ),
    ...a
  }
));
b.displayName = e.Trigger.displayName;
const g = d.forwardRef(({ className: t, inset: a, children: o, ...s }, i) => /* @__PURE__ */ c(
  e.SubTrigger,
  {
    ref: i,
    className: r(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      a && "pl-8",
      t
    ),
    ...s,
    children: [
      o,
      /* @__PURE__ */ n(m, { className: "ml-auto size-4" })
    ]
  }
));
g.displayName = e.SubTrigger.displayName;
const x = d.forwardRef(({ className: t, ...a }, o) => /* @__PURE__ */ n(
  e.SubContent,
  {
    ref: o,
    className: r(
      "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...a
  }
));
x.displayName = e.SubContent.displayName;
const N = d.forwardRef(
  ({ className: t, align: a = "start", alignOffset: o = -4, sideOffset: s = 8, ...i }, l) => /* @__PURE__ */ n(e.Portal, { children: /* @__PURE__ */ n(
    e.Content,
    {
      ref: l,
      align: a,
      alignOffset: o,
      sideOffset: s,
      className: r(
        "z-50 min-w-48 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        t
      ),
      ...i
    }
  ) })
);
N.displayName = e.Content.displayName;
const y = d.forwardRef(({ className: t, inset: a, ...o }, s) => /* @__PURE__ */ n(
  e.Item,
  {
    ref: s,
    className: r(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      a && "pl-8",
      t
    ),
    ...o
  }
));
y.displayName = e.Item.displayName;
const h = d.forwardRef(({ className: t, children: a, checked: o, ...s }, i) => /* @__PURE__ */ c(
  e.CheckboxItem,
  {
    ref: i,
    className: r(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    checked: o ?? !1,
    ...s,
    children: [
      /* @__PURE__ */ n("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ n(e.ItemIndicator, { children: /* @__PURE__ */ n(u, { className: "size-4" }) }) }),
      a
    ]
  }
));
h.displayName = e.CheckboxItem.displayName;
const M = d.forwardRef(({ className: t, children: a, ...o }, s) => /* @__PURE__ */ c(
  e.RadioItem,
  {
    ref: s,
    className: r(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    ...o,
    children: [
      /* @__PURE__ */ n("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ n(e.ItemIndicator, { children: /* @__PURE__ */ n(p, { className: "size-4 fill-current" }) }) }),
      a
    ]
  }
));
M.displayName = e.RadioItem.displayName;
const R = d.forwardRef(({ className: t, inset: a, ...o }, s) => /* @__PURE__ */ n(
  e.Label,
  {
    ref: s,
    className: r(
      "px-2 py-1.5 text-sm font-semibold",
      a && "pl-8",
      t
    ),
    ...o
  }
));
R.displayName = e.Label.displayName;
const w = d.forwardRef(({ className: t, ...a }, o) => /* @__PURE__ */ n(
  e.Separator,
  {
    ref: o,
    className: r("-mx-1 my-1 h-px bg-muted", t),
    ...a
  }
));
w.displayName = e.Separator.displayName;
const I = ({
  className: t,
  ...a
}) => /* @__PURE__ */ n(
  "span",
  {
    className: r(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      t
    ),
    ...a
  }
);
I.displayname = "MenubarShortcut";
export {
  f as Menubar,
  h as MenubarCheckboxItem,
  N as MenubarContent,
  k as MenubarGroup,
  y as MenubarItem,
  R as MenubarLabel,
  C as MenubarMenu,
  T as MenubarPortal,
  G as MenubarRadioGroup,
  M as MenubarRadioItem,
  w as MenubarSeparator,
  I as MenubarShortcut,
  j as MenubarSub,
  x as MenubarSubContent,
  g as MenubarSubTrigger,
  b as MenubarTrigger
};
//# sourceMappingURL=index.js.map
