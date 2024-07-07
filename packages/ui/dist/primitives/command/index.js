"use client";
import { jsx as r, jsxs as s } from "react/jsx-runtime";
import * as d from "react";
import { MagnifyingGlassIcon as i } from "@radix-ui/react-icons";
import { Command as o } from "cmdk";
import { Dialog as l, DialogContent as p } from "../dialog/index.js";
import { cn as m } from "../../utils/cn.js";
const n = d.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  o,
  {
    ref: t,
    className: m(
      "flex size-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...a
  }
));
n.displayName = o.displayName;
const R = ({ children: e, ...a }) => /* @__PURE__ */ r(l, { ...a, children: /* @__PURE__ */ r(p, { className: "overflow-hidden p-0", children: /* @__PURE__ */ r(n, { children: e }) }) }), c = d.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ s("div", { className: "flex items-center border-b px-3", children: [
  /* @__PURE__ */ r(i, { className: "mr-2 size-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ r(
    o.Input,
    {
      ref: t,
      className: m(
        "flex h-10 w-full rounded-md border-transparent bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-transparent focus:shadow-none focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...a
    }
  )
] }));
c.displayName = o.Input.displayName;
const f = d.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  o.List,
  {
    ref: t,
    className: m("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...a
  }
));
f.displayName = o.List.displayName;
const u = d.forwardRef((e, a) => /* @__PURE__ */ r(
  o.Empty,
  {
    ref: a,
    className: "py-6 text-center text-sm",
    ...e
  }
));
u.displayName = o.Empty.displayName;
const x = d.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  o.Group,
  {
    ref: t,
    className: m(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...a
  }
));
x.displayName = o.Group.displayName;
const g = d.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  o.Separator,
  {
    ref: t,
    className: m("-mx-1 h-px bg-border", e),
    ...a
  }
));
g.displayName = o.Separator.displayName;
const y = d.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  o.Item,
  {
    ref: t,
    className: m(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled="true"]:pointer-events-none data-[disabled="true"]:opacity-50',
      e
    ),
    ...a
  }
));
y.displayName = o.Item.displayName;
const N = ({
  className: e,
  ...a
}) => /* @__PURE__ */ r(
  "span",
  {
    className: m(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...a
  }
);
N.displayName = "CommandShortcut";
export {
  n as Command,
  R as CommandDialog,
  u as CommandEmpty,
  x as CommandGroup,
  c as CommandInput,
  y as CommandItem,
  f as CommandList,
  g as CommandSeparator,
  N as CommandShortcut
};
//# sourceMappingURL=index.js.map
