"use client";
import { jsxs as l, jsx as n } from "react/jsx-runtime";
import * as r from "react";
import * as e from "@radix-ui/react-context-menu";
import { ChevronRightIcon as c, CheckIcon as m, DotFilledIcon as u } from "@radix-ui/react-icons";
import { cn as d } from "../../utils/cn.js";
const w = e.Root, v = e.Trigger, S = e.Group, z = e.Portal, k = e.Sub, T = e.RadioGroup, p = r.forwardRef(({ className: t, inset: o, children: a, ...s }, i) => /* @__PURE__ */ l(
  e.SubTrigger,
  {
    ref: i,
    className: d(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      o && "pl-8",
      t
    ),
    ...s,
    children: [
      a,
      /* @__PURE__ */ n(c, { className: "ml-auto size-4" })
    ]
  }
));
p.displayName = e.SubTrigger.displayName;
const f = r.forwardRef(({ className: t, ...o }, a) => /* @__PURE__ */ n(
  e.SubContent,
  {
    ref: a,
    className: d(
      "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...o
  }
));
f.displayName = e.SubContent.displayName;
const x = r.forwardRef(({ className: t, ...o }, a) => /* @__PURE__ */ n(e.Portal, { children: /* @__PURE__ */ n(
  e.Content,
  {
    ref: a,
    className: d(
      "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...o
  }
) }));
x.displayName = e.Content.displayName;
const b = r.forwardRef(({ className: t, inset: o, ...a }, s) => /* @__PURE__ */ n(
  e.Item,
  {
    ref: s,
    className: d(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      o && "pl-8",
      t
    ),
    ...a
  }
));
b.displayName = e.Item.displayName;
const g = r.forwardRef(({ className: t, children: o, checked: a, ...s }, i) => /* @__PURE__ */ l(
  e.CheckboxItem,
  {
    ref: i,
    className: d(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    checked: a ?? !1,
    ...s,
    children: [
      /* @__PURE__ */ n("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ n(e.ItemIndicator, { children: /* @__PURE__ */ n(m, { className: "size-4" }) }) }),
      o
    ]
  }
));
g.displayName = e.CheckboxItem.displayName;
const N = r.forwardRef(({ className: t, children: o, ...a }, s) => /* @__PURE__ */ l(
  e.RadioItem,
  {
    ref: s,
    className: d(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    ...a,
    children: [
      /* @__PURE__ */ n("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ n(e.ItemIndicator, { children: /* @__PURE__ */ n(u, { className: "size-4 fill-current" }) }) }),
      o
    ]
  }
));
N.displayName = e.RadioItem.displayName;
const y = r.forwardRef(({ className: t, inset: o, ...a }, s) => /* @__PURE__ */ n(
  e.Label,
  {
    ref: s,
    className: d(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      o && "pl-8",
      t
    ),
    ...a
  }
));
y.displayName = e.Label.displayName;
const C = r.forwardRef(({ className: t, ...o }, a) => /* @__PURE__ */ n(
  e.Separator,
  {
    ref: a,
    className: d("-mx-1 my-1 h-px bg-border", t),
    ...o
  }
));
C.displayName = e.Separator.displayName;
const h = ({
  className: t,
  ...o
}) => /* @__PURE__ */ n(
  "span",
  {
    className: d(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      t
    ),
    ...o
  }
);
h.displayName = "ContextMenuShortcut";
export {
  w as ContextMenu,
  g as ContextMenuCheckboxItem,
  x as ContextMenuContent,
  S as ContextMenuGroup,
  b as ContextMenuItem,
  y as ContextMenuLabel,
  z as ContextMenuPortal,
  T as ContextMenuRadioGroup,
  N as ContextMenuRadioItem,
  C as ContextMenuSeparator,
  h as ContextMenuShortcut,
  k as ContextMenuSub,
  f as ContextMenuSubContent,
  p as ContextMenuSubTrigger,
  v as ContextMenuTrigger
};
//# sourceMappingURL=index.js.map
