"use client";
import { jsxs as s, jsx as r } from "react/jsx-runtime";
import * as a from "react";
import * as e from "@radix-ui/react-slider";
import { cn as n } from "../../utils/cn.js";
const t = a.forwardRef(({ className: o, ...i }, l) => /* @__PURE__ */ s(
  e.Root,
  {
    ref: l,
    className: n(
      "relative flex w-full touch-none select-none items-center",
      o
    ),
    ...i,
    children: [
      /* @__PURE__ */ r(e.Track, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary-3", children: /* @__PURE__ */ r(e.Range, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ r(e.Thumb, { className: "block size-4 rounded-full border border-primary-6 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
t.displayName = e.Root.displayName;
export {
  t as Slider
};
//# sourceMappingURL=index.js.map
