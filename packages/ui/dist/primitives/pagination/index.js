import { jsx as e, jsxs as s } from "react/jsx-runtime";
import * as l from "react";
import { ChevronLeftIcon as m, ChevronRightIcon as p, DotsHorizontalIcon as g } from "@radix-ui/react-icons";
import { buttonVariants as d } from "../button/index.js";
import { cn as n } from "../../utils/cn.js";
const N = ({ className: i, ...a }) => /* @__PURE__ */ e(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: n("mx-auto flex w-full justify-center", i),
    ...a
  }
);
N.displayName = "Pagination";
const f = l.forwardRef(({ className: i, ...a }, o) => /* @__PURE__ */ e(
  "ul",
  {
    ref: o,
    className: n("flex flex-row items-center gap-1", i),
    ...a
  }
));
f.displayName = "PaginationContent";
const P = l.forwardRef(({ ...i }, a) => /* @__PURE__ */ e("li", { ref: a, ...i }));
P.displayName = "PaginationItem";
const t = ({
  className: i,
  isActive: a,
  size: o = "icon",
  children: r,
  ...c
}) => /* @__PURE__ */ e(
  "a",
  {
    "aria-current": a ? "page" : void 0,
    className: n(
      d({
        variant: a ? "outline" : "ghost",
        size: o
      }),
      i
    ),
    ...c,
    children: r
  }
);
t.displayName = "PaginationLink";
const u = ({
  className: i,
  ...a
}) => /* @__PURE__ */ s(
  t,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: n("gap-1 pl-2.5", i),
    ...a,
    children: [
      /* @__PURE__ */ e(m, { className: "size-4" }),
      /* @__PURE__ */ e("span", { children: "Previous" })
    ]
  }
);
u.displayName = "PaginationPrevious";
const x = ({
  className: i,
  ...a
}) => /* @__PURE__ */ s(
  t,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: n("gap-1 pr-2.5", i),
    ...a,
    children: [
      /* @__PURE__ */ e("span", { children: "Next" }),
      /* @__PURE__ */ e(p, { className: "size-4" })
    ]
  }
);
x.displayName = "PaginationNext";
const h = ({
  className: i,
  ...a
}) => /* @__PURE__ */ s(
  "span",
  {
    "aria-hidden": !0,
    className: n("flex size-9 items-center justify-center", i),
    ...a,
    children: [
      /* @__PURE__ */ e(g, { className: "size-4" }),
      /* @__PURE__ */ e("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
h.displayName = "PaginationEllipsis";
export {
  N as Pagination,
  f as PaginationContent,
  h as PaginationEllipsis,
  P as PaginationItem,
  t as PaginationLink,
  x as PaginationNext,
  u as PaginationPrevious
};
//# sourceMappingURL=index.js.map
