import { jsxs as s, jsx as i } from "react/jsx-runtime";
import * as r from "react";
import { ChevronDownIcon as l } from "@radix-ui/react-icons";
import * as t from "@radix-ui/react-navigation-menu";
import { cva as c } from "class-variance-authority";
import { cn as n } from "../../utils/cn.js";
const f = r.forwardRef(({ className: e, children: a, ...o }, d) => /* @__PURE__ */ s(
  t.Root,
  {
    ref: d,
    className: n(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...o,
    children: [
      a,
      /* @__PURE__ */ i(m, {})
    ]
  }
));
f.displayName = t.Root.displayName;
const u = r.forwardRef(({ className: e, ...a }, o) => /* @__PURE__ */ i(
  t.List,
  {
    ref: o,
    className: n(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...a
  }
));
u.displayName = t.List.displayName;
const b = t.Item, p = c(
  "data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
), g = r.forwardRef(({ className: e, children: a, ...o }, d) => /* @__PURE__ */ s(
  t.Trigger,
  {
    ref: d,
    className: n(p(), "group", e),
    ...o,
    children: [
      a,
      " ",
      /* @__PURE__ */ i(
        l,
        {
          className: "relative top-px ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
g.displayName = t.Trigger.displayName;
const v = r.forwardRef(({ className: e, ...a }, o) => /* @__PURE__ */ i(
  t.Content,
  {
    ref: o,
    className: n(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...a
  }
));
v.displayName = t.Content.displayName;
const M = t.Link, m = r.forwardRef(({ className: e, ...a }, o) => /* @__PURE__ */ i("div", { className: n("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ i(
  t.Viewport,
  {
    className: n(
      "relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: o,
    ...a
  }
) }));
m.displayName = t.Viewport.displayName;
const N = r.forwardRef(({ className: e, ...a }, o) => /* @__PURE__ */ i(
  t.Indicator,
  {
    ref: o,
    className: n(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...a,
    children: /* @__PURE__ */ i("div", { className: "relative top-[60%] size-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
N.displayName = t.Indicator.displayName;
export {
  f as NavigationMenu,
  v as NavigationMenuContent,
  N as NavigationMenuIndicator,
  b as NavigationMenuItem,
  M as NavigationMenuLink,
  u as NavigationMenuList,
  g as NavigationMenuTrigger,
  m as NavigationMenuViewport,
  p as navigationMenuTriggerStyle
};
//# sourceMappingURL=index.js.map
