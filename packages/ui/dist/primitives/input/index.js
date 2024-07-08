import { jsx as i } from "react/jsx-runtime";
import * as n from "react";
import { cn as s } from "../../utils/cn.js";
const l = n.forwardRef(
  ({ className: e, type: r, ...o }, t) => /* @__PURE__ */ i(
    "input",
    {
      type: r,
      className: s(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: t,
      ...o
    }
  )
);
l.displayName = "Input";
export {
  l as Input
};
//# sourceMappingURL=index.js.map
