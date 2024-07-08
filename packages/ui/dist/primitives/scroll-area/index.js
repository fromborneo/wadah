"use client";
import { jsxs as d, jsx as l } from "react/jsx-runtime";
import * as c from "react";
import * as r from "@radix-ui/react-scroll-area";
import { cn as t } from "../../utils/cn.js";
const m = c.forwardRef(({ className: o, children: e, ...a }, s) => /* @__PURE__ */ d(
  r.Root,
  {
    ref: s,
    className: t("relative overflow-hidden", o),
    ...a,
    children: [
      /* @__PURE__ */ l(r.Viewport, { className: "size-full rounded-[inherit]", children: e }),
      /* @__PURE__ */ l(i, {}),
      /* @__PURE__ */ l(r.Corner, {})
    ]
  }
));
m.displayName = r.Root.displayName;
const i = c.forwardRef(({ className: o, orientation: e = "vertical", ...a }, s) => /* @__PURE__ */ l(
  r.ScrollAreaScrollbar,
  {
    ref: s,
    orientation: e,
    className: t(
      "flex touch-none select-none transition-colors",
      e === "vertical" && "h-full w-2.5 border-l border-l-transparent p-px",
      e === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-px",
      o
    ),
    ...a,
    children: /* @__PURE__ */ l(r.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
i.displayName = r.ScrollAreaScrollbar.displayName;
export {
  m as ScrollArea,
  i as ScrollBar
};
//# sourceMappingURL=index.js.map
