export type Padding =
  | "p-0"
  | "p-1"
  | "p-2"
  | "p-3"
  | "p-4"
  | "p-5"
  | "p-6"
  | "p-7"
  | "p-8"
  | "p-9"
  | "p-10";

export type PaddingTop =
  | "pt-0"
  | "pt-1"
  | "pt-2"
  | "pt-3"
  | "pt-4"
  | "pt-5"
  | "pt-6"
  | "pt-7"
  | "pt-8"
  | "pt-9"
  | "pt-10";

export type PaddingBottom =
  | "pb-0"
  | "pb-1"
  | "pb-2"
  | "pb-3"
  | "pb-4"
  | "pb-5"
  | "pb-6"
  | "pb-7"
  | "pb-8"
  | "pb-9"
  | "pb-10";

export type PaddingLeft =
  | "pl-0"
  | "pl-1"
  | "pl-2"
  | "pl-3"
  | "pl-4"
  | "pl-5"
  | "pl-6"
  | "pl-7"
  | "pl-8"
  | "pl-9"
  | "pl-10";

export type PaddingRight =
  | "pr-0"
  | "pr-1"
  | "pr-2"
  | "pr-3"
  | "pr-4"
  | "pr-5"
  | "pr-6"
  | "pr-7"
  | "pr-8"
  | "pr-9"
  | "pr-10";

export type PX =
  | "px-0"
  | "px-1"
  | "px-2"
  | "px-3"
  | "px-4"
  | "px-5"
  | "px-6"
  | "p-x7"
  | "px-8"
  | "px-9"
  | "px-10";

export type PY =
  | "py-0"
  | "py-1"
  | "py-2"
  | "py-3"
  | "py-4"
  | "py-5"
  | "py-6"
  | "py-7"
  | "py-8"
  | "py-9"
  | "py-10";

export type Margin =
  | "m-0"
  | "m-1"
  | "m-2"
  | "m-3"
  | "m-4"
  | "m-5"
  | "m-6"
  | "m-7"
  | "m-8"
  | "m-9"
  | "m-10";

export type MarginTop =
  | "mt-0"
  | "mt-1"
  | "mt-2"
  | "mt-3"
  | "mt-4"
  | "mt-5"
  | "mt-6"
  | "mt-7"
  | "mt-8"
  | "mt-9"
  | "mt-10";

export type MarginBottom =
  | "mb-0"
  | "mb-1"
  | "mb-2"
  | "mb-3"
  | "mb-4"
  | "mb-5"
  | "mb-6"
  | "mb-7"
  | "mb-8"
  | "mb-9"
  | "mb-10";

export type MarginLeft =
  | "ml-0"
  | "ml-1"
  | "ml-2"
  | "ml-3"
  | "ml-4"
  | "ml-5"
  | "ml-6"
  | "ml-7"
  | "ml-8"
  | "ml-9"
  | "ml-10";

export type MarginRight =
  | "mr-0"
  | "mr-1"
  | "mr-2"
  | "mr-3"
  | "mr-4"
  | "mr-5"
  | "mr-6"
  | "mr-7"
  | "mr-8"
  | "mr-9"
  | "mr-10";

export type MX =
  | "mx-0"
  | "mx-1"
  | "mx-2"
  | "mx-3"
  | "mx-4"
  | "mx-5"
  | "mx-6"
  | "mx-7"
  | "mx-8"
  | "mx-9"
  | "mx-10";

export type MY =
  | "my-0"
  | "my-1"
  | "my-2"
  | "my-3"
  | "my-4"
  | "my-5"
  | "my-6"
  | "my-7"
  | "my-8"
  | "my-9"
  | "my-10";
export interface BoxAreaProps {
  p?: Padding;
  pt?: PaddingTop;
  pb?: PaddingBottom;

  pl?: PaddingLeft;

  pr?: PaddingRight;

  px?: PX;

  py?: PY;

  m?: Margin;

  mt?: MarginTop;
  mb?: MarginBottom;

  ml?: MarginLeft;
  mr?: MarginRight;

  mx?: MX;

  my?: MY;
}

export interface StyledBoxAreaProps {
  $p?: Padding;
  $pt?: PaddingTop;
  $pb?: PaddingBottom;
  $pl?: PaddingLeft;
  $pr?: PaddingRight;
  $px?: PX;
  $py?: PY;
  $m?: Margin;
  $mt?: MarginTop;
  $mb?: MarginBottom;
  $ml?: MarginLeft;
  $mr?: MarginRight;
  $mx?: MX;
  $my?: MY;
}

export const boxAreaProps = [
  "p",
  "pt",
  "pb",
  "pl",
  "pr",
  "px",
  "py",
  "m",
  "mt",
  "mb",
  "ml",
  "mr",
  "mx",
  "my"
];
