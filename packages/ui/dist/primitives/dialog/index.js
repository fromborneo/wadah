"use client";
import { jsx as o, jsxs as n } from "react/jsx-runtime";
import * as l from "react";
import * as e from "@radix-ui/react-dialog";
import { Cross2Icon as c } from "@radix-ui/react-icons";
import { cn as i } from "../../utils/cn.js";
const b = e.Root, v = e.Trigger, m = e.Portal, h = e.Close, d = l.forwardRef(({ className: a, ...t }, s) => /* @__PURE__ */ o(
  e.Overlay,
  {
    ref: s,
    className: i(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      a
    ),
    ...t
  }
));
d.displayName = e.Overlay.displayName;
const f = l.forwardRef(({ className: a, children: t, ...s }, r) => /* @__PURE__ */ n(m, { children: [
  /* @__PURE__ */ o(d, {}),
  /* @__PURE__ */ n(
    e.Content,
    {
      ref: r,
      className: i(
        "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        a
      ),
      ...s,
      children: [
        t,
        /* @__PURE__ */ n(e.Close, { className: "absolute right-3 top-3 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ o(c, { className: "size-4" }),
          /* @__PURE__ */ o("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
f.displayName = e.Content.displayName;
const p = ({
  className: a,
  ...t
}) => /* @__PURE__ */ o(
  "div",
  {
    className: i(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      a
    ),
    ...t
  }
);
p.displayName = "DialogHeader";
const g = ({
  className: a,
  ...t
}) => /* @__PURE__ */ o(
  "div",
  {
    className: i(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      a
    ),
    ...t
  }
);
g.displayName = "DialogFooter";
const u = l.forwardRef(({ className: a, ...t }, s) => /* @__PURE__ */ o(
  e.Title,
  {
    ref: s,
    className: i(
      "text-lg font-semibold leading-none tracking-tight",
      a
    ),
    ...t
  }
));
u.displayName = e.Title.displayName;
const y = l.forwardRef(({ className: a, ...t }, s) => /* @__PURE__ */ o(
  e.Description,
  {
    ref: s,
    className: i("text-sm text-muted-foreground", a),
    ...t
  }
));
y.displayName = e.Description.displayName;
export {
  b as Dialog,
  h as DialogClose,
  f as DialogContent,
  y as DialogDescription,
  g as DialogFooter,
  p as DialogHeader,
  d as DialogOverlay,
  m as DialogPortal,
  u as DialogTitle,
  v as DialogTrigger
};
//# sourceMappingURL=index.js.map
