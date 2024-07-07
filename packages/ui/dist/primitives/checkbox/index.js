"use client";
import { jsx as e } from "react/jsx-runtime";
import * as a from "react";
import * as r from "@radix-ui/react-checkbox";
import { CheckIcon as c } from "@radix-ui/react-icons";
import { cn as i } from "../../utils/cn.js";
const m = a.forwardRef(({ className: o, ...t }, s) => /* @__PURE__ */ e(
  r.Root,
  {
    ref: s,
    className: i(
      "peer flex size-4 shrink-0 items-center justify-center rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      o
    ),
    ...t,
    children: /* @__PURE__ */ e(
      r.Indicator,
      {
        className: i("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ e(c, { className: "size-4" })
      }
    )
  }
));
m.displayName = r.Root.displayName;
export {
  m as Checkbox
};
//# sourceMappingURL=index.js.map
