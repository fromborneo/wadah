import { jsx as s, jsxs as i } from "react/jsx-runtime";
import * as t from "react";
import { ChevronRightIcon as n, DotsHorizontalIcon as c } from "@radix-ui/react-icons";
import { Slot as l } from "@radix-ui/react-slot";
import { cn as o } from "../../utils/cn.js";
const d = t.forwardRef(({ ...r }, e) => /* @__PURE__ */ s("nav", { ref: e, "aria-label": "breadcrumb", ...r }));
d.displayName = "Breadcrumb";
const p = t.forwardRef(({ className: r, ...e }, a) => /* @__PURE__ */ s(
  "ol",
  {
    ref: a,
    className: o(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      r
    ),
    ...e
  }
));
p.displayName = "BreadcrumbList";
const u = t.forwardRef(({ className: r, ...e }, a) => /* @__PURE__ */ s(
  "li",
  {
    ref: a,
    className: o("inline-flex items-center gap-1.5", r),
    ...e
  }
));
u.displayName = "BreadcrumbItem";
const f = t.forwardRef(({ asChild: r, className: e, ...a }, m) => /* @__PURE__ */ s(
  r ? l : "a",
  {
    ref: m,
    className: o("transition-colors hover:text-foreground", e),
    ...a
  }
));
f.displayName = "BreadcrumbLink";
const b = t.forwardRef(({ className: r, ...e }, a) => /* @__PURE__ */ s(
  "span",
  {
    ref: a,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: o("font-normal text-foreground", r),
    ...e
  }
));
b.displayName = "BreadcrumbPage";
const N = ({
  children: r,
  className: e,
  ...a
}) => /* @__PURE__ */ s(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: o("[&>svg]:size-3.5", e),
    ...a,
    children: r ?? /* @__PURE__ */ s(n, {})
  }
);
N.displayName = "BreadcrumbSeparator";
const B = ({
  className: r,
  ...e
}) => /* @__PURE__ */ i(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: o("flex size-9 items-center justify-center", r),
    ...e,
    children: [
      /* @__PURE__ */ s(c, { className: "size-4" }),
      /* @__PURE__ */ s("span", { className: "sr-only", children: "More" })
    ]
  }
);
B.displayName = "BreadcrumbEllipsis";
export {
  d as Breadcrumb,
  B as BreadcrumbEllipsis,
  u as BreadcrumbItem,
  f as BreadcrumbLink,
  p as BreadcrumbList,
  b as BreadcrumbPage,
  N as BreadcrumbSeparator
};
//# sourceMappingURL=index.js.map
