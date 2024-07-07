"use client";
import { jsx as l, jsxs as n } from "react/jsx-runtime";
import * as i from "react";
import * as t from "@radix-ui/react-alert-dialog";
import { buttonVariants as r } from "../button/index.js";
import { cn as s } from "../../utils/cn.js";
const w = t.Root, v = t.Trigger, m = t.Portal, d = i.forwardRef(({ className: a, ...e }, o) => /* @__PURE__ */ l(
  t.Overlay,
  {
    className: s(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      a
    ),
    ...e,
    ref: o
  }
));
d.displayName = t.Overlay.displayName;
const c = i.forwardRef(({ className: a, ...e }, o) => /* @__PURE__ */ n(m, { children: [
  /* @__PURE__ */ l(d, {}),
  /* @__PURE__ */ l(
    t.Content,
    {
      ref: o,
      className: s(
        "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        a
      ),
      ...e
    }
  )
] }));
c.displayName = t.Content.displayName;
const f = ({
  className: a,
  ...e
}) => /* @__PURE__ */ l(
  "div",
  {
    className: s(
      "flex flex-col space-y-2 text-center sm:text-left",
      a
    ),
    ...e
  }
);
f.displayName = "AlertDialogHeader";
const p = ({
  className: a,
  ...e
}) => /* @__PURE__ */ l(
  "div",
  {
    className: s(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      a
    ),
    ...e
  }
);
p.displayName = "AlertDialogFooter";
const g = i.forwardRef(({ className: a, ...e }, o) => /* @__PURE__ */ l(
  t.Title,
  {
    ref: o,
    className: s("text-lg font-semibold", a),
    ...e
  }
));
g.displayName = t.Title.displayName;
const N = i.forwardRef(({ className: a, ...e }, o) => /* @__PURE__ */ l(
  t.Description,
  {
    ref: o,
    className: s("text-sm text-muted-foreground", a),
    ...e
  }
));
N.displayName = t.Description.displayName;
const y = i.forwardRef(({ className: a, ...e }, o) => /* @__PURE__ */ l(
  t.Action,
  {
    ref: o,
    className: s(r(), a),
    ...e
  }
));
y.displayName = t.Action.displayName;
const x = i.forwardRef(({ className: a, ...e }, o) => /* @__PURE__ */ l(
  t.Cancel,
  {
    ref: o,
    className: s(
      r({ variant: "outline" }),
      "mt-2 sm:mt-0",
      a
    ),
    ...e
  }
));
x.displayName = t.Cancel.displayName;
export {
  w as AlertDialog,
  y as AlertDialogAction,
  x as AlertDialogCancel,
  c as AlertDialogContent,
  N as AlertDialogDescription,
  p as AlertDialogFooter,
  f as AlertDialogHeader,
  d as AlertDialogOverlay,
  m as AlertDialogPortal,
  g as AlertDialogTitle,
  v as AlertDialogTrigger
};
//# sourceMappingURL=index.js.map
