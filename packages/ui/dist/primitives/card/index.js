import { jsx as d } from "react/jsx-runtime";
import * as o from "react";
import { cn as t } from "../../utils/cn.js";
const i = o.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ d(
  "div",
  {
    ref: r,
    className: t(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      a
    ),
    ...e
  }
));
i.displayName = "CardHeader";
const m = o.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ d(
  "div",
  {
    ref: r,
    className: t("flex flex-col space-y-1.5 p-6", a),
    ...e
  }
));
m.displayName = "CardHeader";
const c = o.forwardRef(({ className: a, children: e, ...r }, s) => /* @__PURE__ */ d(
  "h3",
  {
    ref: s,
    className: t(
      "text-2xl font-semibold leading-none tracking-tight",
      a
    ),
    ...r,
    children: e
  }
));
c.displayName = "CardTitle";
const l = o.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ d(
  "p",
  {
    ref: r,
    className: t("text-sm text-muted-foreground", a),
    ...e
  }
));
l.displayName = "CardDescription";
const n = o.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ d("div", { ref: r, className: t("p-6 pt-0", a), ...e }));
n.displayName = "CardContent";
const f = o.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ d(
  "div",
  {
    ref: r,
    className: t("flex items-center p-6 pt-0", a),
    ...e
  }
));
f.displayName = "CardFooter";
export {
  i as Card,
  n as CardContent,
  l as CardDescription,
  f as CardFooter,
  m as CardHeader,
  c as CardTitle
};
//# sourceMappingURL=index.js.map
