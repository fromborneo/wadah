"use client";
import { jsx as r } from "react/jsx-runtime";
import * as d from "react";
import * as o from "@radix-ui/react-tooltip";
import { cn as s } from "../../utils/cn.js";
const f = o.Provider, p = o.Root, c = o.Trigger, m = d.forwardRef(({ className: t, sideOffset: e = 4, ...i }, a) => /* @__PURE__ */ r(
  o.Content,
  {
    ref: a,
    sideOffset: e,
    className: s(
      "z-50 overflow-hidden rounded-md border bg-gray-2 px-3 py-1.5 text-xs text-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...i
  }
));
m.displayName = o.Content.displayName;
export {
  p as Tooltip,
  m as TooltipContent,
  f as TooltipProvider,
  c as TooltipTrigger
};
//# sourceMappingURL=index.js.map
