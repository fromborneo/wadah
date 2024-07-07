"use client";
import { jsx as i } from "react/jsx-runtime";
import * as m from "react";
import { Slot as F } from "@radix-ui/react-slot";
import { FormProvider as u, Controller as p, useFormContext as x } from "react-hook-form";
import { Label as I } from "../label/index.js";
import { cn as a } from "../../utils/cn.js";
const M = u, f = m.createContext(
  {}
), S = ({
  ...e
}) => /* @__PURE__ */ i(f.Provider, { value: { name: e.name }, children: /* @__PURE__ */ i(p, { ...e }) }), d = () => {
  const e = m.useContext(f), o = m.useContext(l), { getFieldState: r, formState: t } = x(), s = r(e.name, t);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: n } = o;
  return {
    id: n,
    name: e.name,
    formItemId: `${n}-form-item`,
    formDescriptionId: `${n}-form-item-description`,
    formMessageId: `${n}-form-item-message`,
    ...s
  };
}, l = m.createContext(
  {}
), C = m.forwardRef(({ className: e, ...o }, r) => {
  const t = m.useId();
  return /* @__PURE__ */ i(l.Provider, { value: { id: t }, children: /* @__PURE__ */ i("div", { ref: r, className: a("space-y-2", e), ...o }) });
});
C.displayName = "FormItem";
const g = m.forwardRef(({ className: e, ...o }, r) => {
  const { error: t, formItemId: s } = d();
  return /* @__PURE__ */ i(
    I,
    {
      ref: r,
      className: a(t && "text-destructive", e),
      htmlFor: s,
      ...o
    }
  );
});
g.displayName = "FormLabel";
const v = m.forwardRef(({ ...e }, o) => {
  const { error: r, formItemId: t, formDescriptionId: s, formMessageId: n } = d();
  return /* @__PURE__ */ i(
    F,
    {
      ref: o,
      id: t,
      "aria-describedby": r ? `${s} ${n}` : s,
      "aria-invalid": !!r,
      ...e
    }
  );
});
v.displayName = "FormControl";
const N = m.forwardRef(({ className: e, ...o }, r) => {
  const { formDescriptionId: t } = d();
  return /* @__PURE__ */ i(
    "p",
    {
      ref: r,
      id: t,
      className: a("text-[0.8rem] text-muted-foreground", e),
      ...o
    }
  );
});
N.displayName = "FormDescription";
const w = m.forwardRef(({ className: e, children: o, ...r }, t) => {
  const { error: s, formMessageId: n } = d(), c = s ? String(s.message) : o;
  return c ? /* @__PURE__ */ i(
    "p",
    {
      ref: t,
      id: n,
      className: a("text-[0.8rem] font-medium text-destructive", e),
      ...r,
      children: c
    }
  ) : null;
});
w.displayName = "FormMessage";
export {
  M as Form,
  v as FormControl,
  N as FormDescription,
  S as FormField,
  C as FormItem,
  g as FormLabel,
  w as FormMessage,
  d as useFormField
};
//# sourceMappingURL=index.js.map
