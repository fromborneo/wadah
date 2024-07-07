"use client";
import { jsx as e } from "react/jsx-runtime";
import { DragHandleDots2Icon as n } from "@radix-ui/react-icons";
import * as t from "react-resizable-panels";
import { cn as i } from "../../utils/cn.js";
const f = ({
  className: a,
  ...r
}) => /* @__PURE__ */ e(
  t.PanelGroup,
  {
    className: i(
      "flex size-full data-[panel-group-direction=vertical]:flex-col",
      a
    ),
    ...r
  }
), d = t.Panel, p = ({
  withHandle: a,
  className: r,
  ...l
}) => /* @__PURE__ */ e(
  t.PanelResizeHandle,
  {
    className: i(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      r
    ),
    ...l,
    children: a && /* @__PURE__ */ e("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border", children: /* @__PURE__ */ e(n, { className: "size-2.5" }) })
  }
);
export {
  p as ResizableHandle,
  d as ResizablePanel,
  f as ResizablePanelGroup
};
//# sourceMappingURL=index.js.map
