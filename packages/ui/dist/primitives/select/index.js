"use client";
import { jsxs as n, jsx as t } from "react/jsx-runtime";
import * as l from "react";
import { CaretSortIcon as p, ChevronUpIcon as f, ChevronDownIcon as u, CheckIcon as h } from "@radix-ui/react-icons";
import * as e from "@radix-ui/react-select";
import { cn as s } from "../../utils/cn.js";
const I = e.Root, R = e.Group, C = e.Value, y = l.forwardRef(({ className: o, children: r, ...a }, d) => /* @__PURE__ */ n(
  e.Trigger,
  {
    ref: d,
    className: s(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      o
    ),
    ...a,
    children: [
      r,
      /* @__PURE__ */ t(e.Icon, { asChild: !0, children: /* @__PURE__ */ t(p, { className: "size-4 opacity-50" }) })
    ]
  }
));
y.displayName = e.Trigger.displayName;
const i = l.forwardRef(({ className: o, ...r }, a) => /* @__PURE__ */ t(
  e.ScrollUpButton,
  {
    ref: a,
    className: s(
      "flex cursor-default items-center justify-center py-1",
      o
    ),
    ...r,
    children: /* @__PURE__ */ t(f, {})
  }
));
i.displayName = e.ScrollUpButton.displayName;
const c = l.forwardRef(({ className: o, ...r }, a) => /* @__PURE__ */ t(
  e.ScrollDownButton,
  {
    ref: a,
    className: s(
      "flex cursor-default items-center justify-center py-1",
      o
    ),
    ...r,
    children: /* @__PURE__ */ t(u, {})
  }
));
c.displayName = e.ScrollDownButton.displayName;
const g = l.forwardRef(({ className: o, children: r, position: a = "popper", ...d }, m) => /* @__PURE__ */ t(e.Portal, { children: /* @__PURE__ */ n(
  e.Content,
  {
    ref: m,
    className: s(
      "relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      a === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      o
    ),
    position: a,
    ...d,
    children: [
      /* @__PURE__ */ t(i, {}),
      /* @__PURE__ */ t(
        e.Viewport,
        {
          className: s(
            "p-1",
            a === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: r
        }
      ),
      /* @__PURE__ */ t(c, {})
    ]
  }
) }));
g.displayName = e.Content.displayName;
const w = l.forwardRef(({ className: o, ...r }, a) => /* @__PURE__ */ t(
  e.Label,
  {
    ref: a,
    className: s("px-2 py-1.5 text-sm font-semibold", o),
    ...r
  }
));
w.displayName = e.Label.displayName;
const N = l.forwardRef(({ className: o, children: r, ...a }, d) => /* @__PURE__ */ n(
  e.Item,
  {
    ref: d,
    className: s(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      o
    ),
    ...a,
    children: [
      /* @__PURE__ */ t("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ t(e.ItemIndicator, { children: /* @__PURE__ */ t(h, { className: "size-4" }) }) }),
      /* @__PURE__ */ t(e.ItemText, { children: r })
    ]
  }
));
N.displayName = e.Item.displayName;
const x = l.forwardRef(({ className: o, ...r }, a) => /* @__PURE__ */ t(
  e.Separator,
  {
    ref: a,
    className: s("-mx-1 my-1 h-px bg-muted", o),
    ...r
  }
));
x.displayName = e.Separator.displayName;
export {
  I as Select,
  g as SelectContent,
  R as SelectGroup,
  N as SelectItem,
  w as SelectLabel,
  c as SelectScrollDownButton,
  i as SelectScrollUpButton,
  x as SelectSeparator,
  y as SelectTrigger,
  C as SelectValue
};
//# sourceMappingURL=index.js.map
