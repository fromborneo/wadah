"use client";
import { jsx as t } from "react/jsx-runtime";
import * as m from "react";
import * as o from "@radix-ui/react-label";
import { cva as i } from "class-variance-authority";
import { cn as s } from "../../utils/cn.js";
const l = i(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), p = m.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ t(
  o.Root,
  {
    ref: r,
    className: s(l(), a),
    ...e
  }
));
p.displayName = o.Root.displayName;
export {
  p as Label
};
//# sourceMappingURL=index.js.map
