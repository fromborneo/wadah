"use client";
import { jsx as n } from "react/jsx-runtime";
import * as e from "react";
import * as t from "@radix-ui/react-toggle-group";
import { cn as p } from "../../utils/cn.js";
import { toggleVariants as f } from "../toggle/index.js";
const c = e.createContext({
  size: "default",
  variant: "default"
}), g = e.forwardRef(({ className: o, variant: r, size: a, children: i, ...s }, m) => /* @__PURE__ */ n(
  t.Root,
  {
    ref: m,
    className: p("flex items-center justify-center gap-1", o),
    ...s,
    children: /* @__PURE__ */ n(c.Provider, { value: { variant: r, size: a }, children: i })
  }
));
g.displayName = t.Root.displayName;
const d = e.forwardRef(({ className: o, children: r, variant: a, size: i, ...s }, m) => {
  const l = e.useContext(c);
  return /* @__PURE__ */ n(
    t.Item,
    {
      ref: m,
      className: p(
        f({
          variant: l.variant ?? a,
          size: l.size ?? i
        }),
        o
      ),
      ...s,
      children: r
    }
  );
});
d.displayName = t.Item.displayName;
export {
  g as ToggleGroup,
  d as ToggleGroupItem
};
//# sourceMappingURL=index.js.map
