"use client";
import { jsxs as r, jsx as o } from "react/jsx-runtime";
import { ToastProvider as c, Toast as T, ToastTitle as m, ToastDescription as d, ToastClose as l, ToastViewport as p } from "./toast.js";
import { useToast as f } from "./use-toast.js";
function g() {
  const { toasts: e } = f();
  return /* @__PURE__ */ r(c, { children: [
    e.map(function({ id: i, title: t, description: s, action: a, ...n }) {
      return /* @__PURE__ */ r(T, { ...n, children: [
        /* @__PURE__ */ r("div", { className: "grid gap-1", children: [
          t && /* @__PURE__ */ o(m, { children: t }),
          s && /* @__PURE__ */ o(d, { children: s })
        ] }),
        a,
        /* @__PURE__ */ o(l, {})
      ] }, i);
    }),
    /* @__PURE__ */ o(p, {})
  ] });
}
export {
  g as Toaster
};
//# sourceMappingURL=toaster.js.map
