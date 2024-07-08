"use client";
import { jsx as e } from "react/jsx-runtime";
import * as i from "react";
import * as o from "@radix-ui/react-separator";
import { cn as l } from "../../utils/cn.js";
const s = i.forwardRef(
  ({ className: a, orientation: r = "horizontal", decorative: t = !0, ...m }, p) => /* @__PURE__ */ e(
    o.Root,
    {
      ref: p,
      decorative: t,
      orientation: r,
      className: l(
        "shrink-0 bg-border",
        r === "horizontal" ? "h-px w-full" : "h-full w-px",
        a
      ),
      ...m
    }
  )
);
s.displayName = o.Root.displayName;
export {
  s as Separator
};
//# sourceMappingURL=index.js.map
