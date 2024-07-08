"use client";
import { jsx as o } from "react/jsx-runtime";
import * as t from "react";
import * as r from "@radix-ui/react-progress";
import { cn as l } from "../../utils/cn.js";
const m = t.forwardRef(({ className: a, value: e, ...i }, s) => /* @__PURE__ */ o(
  r.Root,
  {
    ref: s,
    className: l(
      "relative h-2 w-full overflow-hidden rounded-full bg-primary-3",
      a
    ),
    ...i,
    children: /* @__PURE__ */ o(
      r.Indicator,
      {
        className: "size-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${String(100 - (e ?? 0))}%)` }
      }
    )
  }
));
m.displayName = r.Root.displayName;
export {
  m as Progress
};
//# sourceMappingURL=index.js.map
