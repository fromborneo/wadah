"use client";
import { jsx as t, jsxs as i } from "react/jsx-runtime";
import * as l from "react";
import { Drawer as a } from "vaul";
import { cn as s } from "../../utils/cn.js";
const n = ({
  shouldScaleBackground: e = !0,
  ...r
}) => /* @__PURE__ */ t(
  a.Root,
  {
    shouldScaleBackground: e,
    ...r
  }
);
n.displayName = "Drawer";
const u = a.Trigger, c = a.Portal, b = a.Close, d = l.forwardRef(({ className: e, ...r }, o) => /* @__PURE__ */ t(
  a.Overlay,
  {
    ref: o,
    className: s("fixed inset-0 z-50 bg-black/80", e),
    ...r
  }
));
d.displayName = a.Overlay.displayName;
const p = l.forwardRef(({ className: e, children: r, ...o }, m) => /* @__PURE__ */ i(c, { children: [
  /* @__PURE__ */ t(d, {}),
  /* @__PURE__ */ i(
    a.Content,
    {
      ref: m,
      className: s(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        e
      ),
      ...o,
      children: [
        /* @__PURE__ */ t("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        r
      ]
    }
  )
] }));
p.displayName = "DrawerContent";
const f = ({
  className: e,
  ...r
}) => /* @__PURE__ */ t(
  "div",
  {
    className: s("grid gap-1.5 p-4 text-center sm:text-left", e),
    ...r
  }
);
f.displayName = "DrawerHeader";
const w = ({
  className: e,
  ...r
}) => /* @__PURE__ */ t(
  "div",
  {
    className: s("mt-auto flex flex-col gap-2 p-4", e),
    ...r
  }
);
w.displayName = "DrawerFooter";
const D = l.forwardRef(({ className: e, ...r }, o) => /* @__PURE__ */ t(
  a.Title,
  {
    ref: o,
    className: s(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...r
  }
));
D.displayName = a.Title.displayName;
const x = l.forwardRef(({ className: e, ...r }, o) => /* @__PURE__ */ t(
  a.Description,
  {
    ref: o,
    className: s("text-sm text-muted-foreground", e),
    ...r
  }
));
x.displayName = a.Description.displayName;
export {
  n as Drawer,
  b as DrawerClose,
  p as DrawerContent,
  x as DrawerDescription,
  w as DrawerFooter,
  f as DrawerHeader,
  d as DrawerOverlay,
  c as DrawerPortal,
  D as DrawerTitle,
  u as DrawerTrigger
};
//# sourceMappingURL=index.js.map
