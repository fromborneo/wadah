"use client";
import { jsxs as l, jsx as n } from "react/jsx-runtime";
import * as r from "react";
import * as e from "@radix-ui/react-dropdown-menu";
import { ChevronRightIcon as c, CheckIcon as m, DotFilledIcon as p } from "@radix-ui/react-icons";
import { cn as d } from "../../utils/cn.js";
const R = e.Root, v = e.Trigger, S = e.Group, z = e.Portal, C = e.Sub, k = e.RadioGroup, u = r.forwardRef(({ className: t, inset: o, children: a, ...s }, i) => /* @__PURE__ */ l(
  e.SubTrigger,
  {
    ref: i,
    className: d(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
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
u.displayName = e.SubTrigger.displayName;
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
const b = r.forwardRef(({ className: t, sideOffset: o = 4, ...a }, s) => /* @__PURE__ */ n(e.Portal, { children: /* @__PURE__ */ n(
  e.Content,
  {
    ref: s,
    sideOffset: o,
    className: d(
      "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...a
  }
) }));
b.displayName = e.Content.displayName;
const w = r.forwardRef(({ className: t, inset: o, ...a }, s) => /* @__PURE__ */ n(
  e.Item,
  {
    ref: s,
    className: d(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      o && "pl-8",
      t
    ),
    ...a
  }
));
w.displayName = e.Item.displayName;
const N = r.forwardRef(({ className: t, children: o, checked: a = !1, ...s }, i) => /* @__PURE__ */ l(
  e.CheckboxItem,
  {
    ref: i,
    className: d(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    checked: a,
    ...s,
    children: [
      /* @__PURE__ */ n("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ n(e.ItemIndicator, { children: /* @__PURE__ */ n(m, { className: "size-4" }) }) }),
      o
    ]
  }
));
N.displayName = e.CheckboxItem.displayName;
const g = r.forwardRef(({ className: t, children: o, ...a }, s) => /* @__PURE__ */ l(
  e.RadioItem,
  {
    ref: s,
    className: d(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    ...a,
    children: [
      /* @__PURE__ */ n("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ n(e.ItemIndicator, { children: /* @__PURE__ */ n(p, { className: "size-4 fill-current" }) }) }),
      o
    ]
  }
));
g.displayName = e.RadioItem.displayName;
const x = r.forwardRef(({ className: t, inset: o, ...a }, s) => /* @__PURE__ */ n(
  e.Label,
  {
    ref: s,
    className: d(
      "px-2 py-1.5 text-sm font-semibold",
      o && "pl-8",
      t
    ),
    ...a
  }
));
x.displayName = e.Label.displayName;
const y = r.forwardRef(({ className: t, ...o }, a) => /* @__PURE__ */ n(
  e.Separator,
  {
    ref: a,
    className: d("-mx-1 my-1 h-px bg-muted", t),
    ...o
  }
));
y.displayName = e.Separator.displayName;
const h = ({
  className: t,
  ...o
}) => /* @__PURE__ */ n(
  "span",
  {
    className: d("ml-auto text-xs tracking-widest opacity-60", t),
    ...o
  }
);
h.displayName = "DropdownMenuShortcut";
export {
  R as DropdownMenu,
  N as DropdownMenuCheckboxItem,
  b as DropdownMenuContent,
  S as DropdownMenuGroup,
  w as DropdownMenuItem,
  x as DropdownMenuLabel,
  z as DropdownMenuPortal,
  k as DropdownMenuRadioGroup,
  g as DropdownMenuRadioItem,
  y as DropdownMenuSeparator,
  h as DropdownMenuShortcut,
  C as DropdownMenuSub,
  f as DropdownMenuSubContent,
  u as DropdownMenuSubTrigger,
  v as DropdownMenuTrigger
};
//# sourceMappingURL=index.js.map
