"use client";
import { jsx as s, jsxs as h } from "react/jsx-runtime";
import * as o from "react";
import { ArrowLeftIcon as k, ArrowRightIcon as p } from "@radix-ui/react-icons";
import g from "embla-carousel-react";
import { Button as v } from "../button/index.js";
import { cn as m } from "../../utils/cn.js";
const w = o.createContext(null);
function C() {
  const l = o.useContext(w);
  if (!l)
    throw new Error("useCarousel must be used within a <Carousel />");
  return l;
}
const I = o.forwardRef(
  ({
    orientation: l = "horizontal",
    opts: r,
    setApi: t,
    plugins: a,
    className: c,
    children: i,
    ...u
  }, f) => {
    const [y, e] = g(
      {
        ...r,
        axis: l === "horizontal" ? "x" : "y"
      },
      a
    ), [b, z] = o.useState(!1), [P, S] = o.useState(!1), d = o.useCallback((n) => {
      n && (z(n.canScrollPrev()), S(n.canScrollNext()));
    }, []), x = o.useCallback(() => {
      e == null || e.scrollPrev();
    }, [e]), N = o.useCallback(() => {
      e == null || e.scrollNext();
    }, [e]), R = o.useCallback(
      (n) => {
        n.key === "ArrowLeft" ? (n.preventDefault(), x()) : n.key === "ArrowRight" && (n.preventDefault(), N());
      },
      [x, N]
    );
    return o.useEffect(() => {
      !e || !t || t(e);
    }, [e, t]), o.useEffect(() => {
      if (e)
        return d(e), e.on("reInit", d), e.on("select", d), () => {
          e.off("select", d);
        };
    }, [e, d]), /* @__PURE__ */ s(
      w.Provider,
      {
        value: {
          carouselRef: y,
          api: e,
          opts: r,
          orientation: ((r == null ? void 0 : r.axis) === "y" ? "vertical" : (r == null ? void 0 : r.axis) === "x" ? "horizontal" : void 0) ?? l,
          scrollPrev: x,
          scrollNext: N,
          canScrollPrev: b,
          canScrollNext: P
        },
        children: /* @__PURE__ */ s(
          "div",
          {
            ref: f,
            onKeyDownCapture: R,
            className: m("relative", c),
            role: "region",
            "aria-roledescription": "carousel",
            ...u,
            children: i
          }
        )
      }
    );
  }
);
I.displayName = "Carousel";
const D = o.forwardRef(({ className: l, ...r }, t) => {
  const { carouselRef: a, orientation: c } = C();
  return /* @__PURE__ */ s("div", { ref: a, className: "overflow-hidden", children: /* @__PURE__ */ s(
    "div",
    {
      ref: t,
      className: m(
        "flex",
        c === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        l
      ),
      ...r
    }
  ) });
});
D.displayName = "CarouselContent";
const E = o.forwardRef(({ className: l, ...r }, t) => {
  const { orientation: a } = C();
  return /* @__PURE__ */ s(
    "div",
    {
      ref: t,
      role: "group",
      "aria-roledescription": "slide",
      className: m(
        "min-w-0 shrink-0 grow-0 basis-full",
        a === "horizontal" ? "pl-4" : "pt-4",
        l
      ),
      ...r
    }
  );
});
E.displayName = "CarouselItem";
const j = o.forwardRef(({ className: l, variant: r = "outline", size: t = "icon", ...a }, c) => {
  const { orientation: i, scrollPrev: u, canScrollPrev: f } = C();
  return /* @__PURE__ */ h(
    v,
    {
      ref: c,
      variant: r,
      size: t,
      className: m(
        "absolute  size-8 rounded-full",
        i === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        l
      ),
      disabled: !f,
      onClick: u,
      ...a,
      children: [
        /* @__PURE__ */ s(k, { className: "size-4" }),
        /* @__PURE__ */ s("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
j.displayName = "CarouselPrevious";
const A = o.forwardRef(({ className: l, variant: r = "outline", size: t = "icon", ...a }, c) => {
  const { orientation: i, scrollNext: u, canScrollNext: f } = C();
  return /* @__PURE__ */ h(
    v,
    {
      ref: c,
      variant: r,
      size: t,
      className: m(
        "absolute size-8 rounded-full",
        i === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        l
      ),
      disabled: !f,
      onClick: u,
      ...a,
      children: [
        /* @__PURE__ */ s(p, { className: "size-4" }),
        /* @__PURE__ */ s("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
A.displayName = "CarouselNext";
export {
  I as Carousel,
  D as CarouselContent,
  E as CarouselItem,
  A as CarouselNext,
  j as CarouselPrevious
};
//# sourceMappingURL=index.js.map
