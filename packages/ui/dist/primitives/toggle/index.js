"use client";
import { jsx as i } from "react/jsx-runtime";
import * as s from "react";
import * as e from "@radix-ui/react-toggle";
import { cva as d } from "class-variance-authority";
import { cn as m } from "../../utils/cn.js";
const l = d(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-9 px-3",
        sm: "h-8 px-2",
        lg: "h-10 px-3"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), c = s.forwardRef(({ className: t, variant: o, size: r, ...a }, n) => /* @__PURE__ */ i(
  e.Root,
  {
    ref: n,
    className: m(l({ variant: o, size: r, className: t })),
    ...a
  }
));
c.displayName = e.Root.displayName;
export {
  c as Toggle,
  l as toggleVariants
};
//# sourceMappingURL=index.js.map
