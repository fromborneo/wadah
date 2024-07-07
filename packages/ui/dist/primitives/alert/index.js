import { jsx as s } from "react/jsx-runtime";
import * as l from "react";
import { cva as o } from "class-variance-authority";
import { cn as i } from "../../utils/cn.js";
const d = o(
  "relative w-full rounded-lg border p-4 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-gray-2 text-foreground",
        destructive: "border-red-6 bg-red-2 text-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), n = l.forwardRef(({ className: e, variant: t, ...r }, a) => /* @__PURE__ */ s(
  "div",
  {
    ref: a,
    role: "alert",
    className: i(d({ variant: t }), e),
    ...r
  }
));
n.displayName = "Alert";
const f = l.forwardRef(({ className: e, children: t, ...r }, a) => /* @__PURE__ */ s(
  "h5",
  {
    ref: a,
    className: i("mb-1 font-medium leading-none tracking-tight", e),
    ...r,
    children: t
  }
));
f.displayName = "AlertTitle";
const m = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ s(
  "div",
  {
    ref: r,
    className: i("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
m.displayName = "AlertDescription";
export {
  n as Alert,
  m as AlertDescription,
  f as AlertTitle
};
//# sourceMappingURL=index.js.map
