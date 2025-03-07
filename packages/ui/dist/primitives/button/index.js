import { jsx as s } from "react/jsx-runtime";
import * as a from "react";
import { Slot as d } from "@radix-ui/react-slot";
import { cva as c } from "class-variance-authority";
import { cn as u } from "../../utils/cn.js";
const m = c(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary-9",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive-9",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary-9",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), f = a.forwardRef(
  ({ className: e, variant: t, size: r, asChild: o = !1, ...n }, i) => /* @__PURE__ */ s(
    o ? d : "button",
    {
      className: u(m({ variant: t, size: r, className: e })),
      ref: i,
      ...n
    }
  )
);
f.displayName = "Button";
export {
  f as Button,
  m as buttonVariants
};
//# sourceMappingURL=index.js.map
