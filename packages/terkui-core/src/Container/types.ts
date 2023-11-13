import { ReactNode, CSSProperties } from "react";
import { BoxAreaProps } from "../util/box-area";

/**
 * sm - Set container 100% wide until small breakpoint.
 * md - Set container 100% wide until medium breakpoint.
 * lg - Set container 100% wide until large breakpoint.
 * xl - Set container 100% wide until X-large breakpoint.
 * 2xl - Set container 100% wide until 2X-large breakpoint.
 * fluid - Set container 100% wide, spanning the entire width of the viewport.
 */
export type ContainerBreakpoint = "sm" | "md" | "lg" | "xl" | "2xl" | "fluid";

export interface ContainerProps extends BoxAreaProps {
  children?: ReactNode;
  position?: CSSProperties["position"];
  display?: "flex" | "none";
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  breakpoint?: ContainerBreakpoint;
  className?: string;
}
