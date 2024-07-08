import { jsx as m } from "react/jsx-runtime";
import { cva as i } from "class-variance-authority";
import { cn as r } from "../../utils/cn.js";
const n = i([], {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      ul: "my-6 ml-6 list-disc [&>li]:mt-2",
      ol: "my-6 ml-6 list-decimal [&>li]:mt-2",
      code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground"
    }
  },
  defaultVariants: {
    variant: "p"
  }
}), g = ({
  as: o,
  className: e,
  variant: t,
  children: l
}) => o ? /* @__PURE__ */ m(o, { className: r(n({ variant: t }), e), children: l }) : /* @__PURE__ */ m(t === "large" ? "div" : t === "lead" || t === "muted" ? "p" : t ?? "p", { className: r(n({ variant: t }), e), children: l });
export {
  g as Typography
};
//# sourceMappingURL=index.js.map
