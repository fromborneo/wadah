"use client";
import { jsx as r } from "react/jsx-runtime";
import * as s from "react";
import { Cross2Icon as n } from "@radix-ui/react-icons";
import * as t from "@radix-ui/react-toast";
import { cva as c } from "class-variance-authority";
import { cn as i } from "../../utils/cn.js";
const b = t.Provider, l = s.forwardRef(({ className: e, ...o }, a) => /* @__PURE__ */ r(
  t.Viewport,
  {
    ref: a,
    className: i(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-3 p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      e
    ),
    ...o
  }
));
l.displayName = t.Viewport.displayName;
const u = c(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), p = s.forwardRef(({ className: e, variant: o, ...a }, d) => /* @__PURE__ */ r(
  t.Root,
  {
    ref: d,
    className: i(u({ variant: o }), e),
    ...a
  }
));
p.displayName = t.Root.displayName;
const m = s.forwardRef(({ className: e, ...o }, a) => /* @__PURE__ */ r(
  t.Action,
  {
    ref: a,
    className: i(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-gray-12 hover:text-gray-1 focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:bg-gray-2 group-[.destructive]:text-foreground group-[.destructive]:hover:bg-gray-4 group-[.destructive]:focus:ring-gray-12",
      e
    ),
    ...o
  }
));
m.displayName = t.Action.displayName;
const f = s.forwardRef(({ className: e, ...o }, a) => /* @__PURE__ */ r(
  t.Close,
  {
    ref: a,
    className: i(
      "absolute right-1 top-1 rounded-md p-1 text-gray-6 opacity-0 transition-colors hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-destructive-6 group-[.destructive]:hover:text-destructive-12 group-[.destructive]:focus:ring-destructive-12 group-[.destructive]:focus:ring-offset-destructive-10",
      e
    ),
    "toast-close": "",
    ...o,
    children: /* @__PURE__ */ r(n, { className: "size-4" })
  }
));
f.displayName = t.Close.displayName;
const v = s.forwardRef(({ className: e, ...o }, a) => /* @__PURE__ */ r(
  t.Title,
  {
    ref: a,
    className: i("text-sm font-semibold [&+div]:text-xs", e),
    ...o
  }
));
v.displayName = t.Title.displayName;
const g = s.forwardRef(({ className: e, ...o }, a) => /* @__PURE__ */ r(
  t.Description,
  {
    ref: a,
    className: i(
      "text-sm opacity-90 group-[.destructive]:font-medium group-[.destructive]:opacity-100",
      e
    ),
    ...o
  }
));
g.displayName = t.Description.displayName;
export {
  p as Toast,
  m as ToastAction,
  f as ToastClose,
  g as ToastDescription,
  b as ToastProvider,
  v as ToastTitle,
  l as ToastViewport
};
//# sourceMappingURL=toast.js.map
