"use client";
import { jsx as t, jsxs as m } from "react/jsx-runtime";
import * as a from "react";
import { DashIcon as p } from "@radix-ui/react-icons";
import { OTPInput as l } from "input-otp";
import { cn as o } from "../../utils/cn.js";
const c = a.forwardRef(({ className: r, ...e }, n) => /* @__PURE__ */ t(
  l,
  {
    ref: n,
    containerClassName: o("flex items-center gap-2", r),
    ...e
  }
));
c.displayName = "InputOTP";
const f = a.forwardRef(({ className: r, ...e }, n) => /* @__PURE__ */ t("div", { ref: n, className: o("flex items-center", r), ...e }));
f.displayName = "InputOTPGroup";
const u = a.forwardRef(({ char: r, hasFakeCaret: e, isActive: n, className: s, ...i }, d) => /* @__PURE__ */ m(
  "div",
  {
    ref: d,
    className: o(
      "relative flex size-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
      n && "z-10 ring-1 ring-ring",
      s
    ),
    ...i,
    children: [
      r,
      e && /* @__PURE__ */ t("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" }) })
    ]
  }
));
u.displayName = "InputOTPSlot";
const I = a.forwardRef(({ ...r }, e) => /* @__PURE__ */ t("div", { ref: e, role: "separator", ...r, children: /* @__PURE__ */ t(p, {}) }));
I.displayName = "InputOTPSeparator";
export {
  c as InputOTP,
  f as InputOTPGroup,
  I as InputOTPSeparator,
  u as InputOTPSlot
};
//# sourceMappingURL=index.js.map
