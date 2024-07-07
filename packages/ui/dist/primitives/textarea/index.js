import { jsx as t } from "react/jsx-runtime";
import * as a from "react";
import { cn as i } from "../../utils/cn.js";
const s = a.forwardRef(
  ({ className: e, ...r }, o) => /* @__PURE__ */ t(
    "textarea",
    {
      className: i(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: o,
      ...r
    }
  )
);
s.displayName = "Textarea";
export {
  s as Textarea
};
//# sourceMappingURL=index.js.map
