import { jsx as o } from "react/jsx-runtime";
import { cva as n } from "class-variance-authority";
import { cn as a } from "../../utils/cn.js";
const s = n(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary-9",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary-9",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive-9",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function c({ className: r, variant: e, ...t }) {
  return /* @__PURE__ */ o("div", { className: a(s({ variant: e }), r), ...t });
}
export {
  c as Badge,
  s as badgeVariants
};
//# sourceMappingURL=index.js.map
