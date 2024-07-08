"use client";
import { jsx as t } from "react/jsx-runtime";
import * as o from "react";
import * as a from "@radix-ui/react-avatar";
import { cn as s } from "../../utils/cn.js";
const m = o.forwardRef(({ className: e, ...r }, l) => /* @__PURE__ */ t(
  a.Root,
  {
    ref: l,
    className: s(
      "relative flex size-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...r
  }
));
m.displayName = a.Root.displayName;
const i = o.forwardRef(({ className: e, ...r }, l) => /* @__PURE__ */ t(
  a.Image,
  {
    ref: l,
    className: s("aspect-[1_/_1] size-full", e),
    ...r
  }
));
i.displayName = a.Image.displayName;
const f = o.forwardRef(({ className: e, ...r }, l) => /* @__PURE__ */ t(
  a.Fallback,
  {
    ref: l,
    className: s(
      "flex size-full items-center justify-center rounded-full bg-muted text-muted-foreground",
      e
    ),
    ...r
  }
));
f.displayName = a.Fallback.displayName;
export {
  m as Avatar,
  f as AvatarFallback,
  i as AvatarImage
};
//# sourceMappingURL=index.js.map
