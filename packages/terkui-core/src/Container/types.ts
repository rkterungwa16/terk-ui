import { ReactNode, CSSProperties } from "react";
import { BoxAreaProps, StyledBoxAreaProps } from "../utils/box-area";

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
  top?: CSSProperties['top'];
  bottom?: CSSProperties['bottom'];
  left?: CSSProperties['left'];
  right?: CSSProperties['right'];
  display?: "flex" | "none";
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  zIndex?: CSSProperties['zIndex'];
  breakpoint?: ContainerBreakpoint;
  className?: string;
}

export interface StyledContainerProps extends StyledBoxAreaProps {
  children?: ReactNode;
  $position?: CSSProperties["position"];
  $top?: CSSProperties['top'];
  $bottom?: CSSProperties['bottom'];
  $left?: CSSProperties['left'];
  $right?: CSSProperties['right'];
  $display?: "flex" | "none";
  $justifyContent?: CSSProperties["justifyContent"];
  $alignItems?: CSSProperties["alignItems"];
  $width?: CSSProperties["width"];
  $height?: CSSProperties["height"];
  $zIndex?: CSSProperties['zIndex'];
  $breakpoint?: ContainerBreakpoint;
  $className?: string;
}
