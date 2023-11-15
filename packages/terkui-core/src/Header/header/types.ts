import { ReactNode, CSSProperties } from "react";
import { BoxAreaProps, StyledBoxAreaProps } from "../../utils/box-area";

export interface HeaderProps extends BoxAreaProps {
  children?: ReactNode;
  position?: CSSProperties["position"];
  top?: CSSProperties["top"];
  bottom?: CSSProperties["bottom"];
  left?: CSSProperties["left"];
  right?: CSSProperties["right"];
  display?: "flex" | "none";
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  zIndex?: CSSProperties["zIndex"];
  background?: CSSProperties["background"];
  borderBottom?: CSSProperties["borderBottom"];
  boxShadow?: CSSProperties["boxShadow"];
  className?: string;
}

export interface StyledHeaderProps extends StyledBoxAreaProps {
  children?: ReactNode;
  $position?: CSSProperties["position"];
  $top?: CSSProperties["top"];
  $bottom?: CSSProperties["bottom"];
  $left?: CSSProperties["left"];
  $right?: CSSProperties["right"];
  $display?: "flex" | "none";
  $justifyContent?: CSSProperties["justifyContent"];
  $alignItems?: CSSProperties["alignItems"];
  $width?: CSSProperties["width"];
  $height?: CSSProperties["height"];
  $zIndex?: CSSProperties["zIndex"];
  $background?: CSSProperties["background"];
  $borderBottom?: CSSProperties["borderBottom"];
  $boxShadow?: CSSProperties["boxShadow"];
  $className?: string;
}
