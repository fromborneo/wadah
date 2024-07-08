"use client";
import { jsx as e } from "react/jsx-runtime";
import * as s from "react";
import { CheckIcon as m } from "@radix-ui/react-icons";
import * as r from "@radix-ui/react-radio-group";
import { cn as t } from "../../utils/cn.js";
const d = s.forwardRef(({ className: o, ...i }, a) => /* @__PURE__ */ e(
  r.Root,
  {
    className: t("grid gap-2", o),
    ...i,
    ref: a
  }
));
d.displayName = r.Root.displayName;
const l = s.forwardRef(({ className: o, ...i }, a) => /* @__PURE__ */ e(
  r.Item,
  {
    ref: a,
    className: t(
      "aspect-[1_/_1] size-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      o
    ),
    ...i,
    children: /* @__PURE__ */ e(r.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ e(m, { className: "size-3.5 fill-primary" }) })
  }
));
l.displayName = r.Item.displayName;
export {
  d as RadioGroup,
  l as RadioGroupItem
};
//# sourceMappingURL=index.js.map
