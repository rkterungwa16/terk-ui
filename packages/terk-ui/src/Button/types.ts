export type ButtonType = "standard" | "icon" | "text";

export type ButtonVariant = "contained" | "outlined" | "ghost";

export type ButtonShape = "rounded" | "square" | "pill";

export type ButtonColor =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "light"
  | "dark";

export type ButtonSize = "xs" | "sm" | "base" | "l" | "xl";

export type ButtonSizeStyles = {
  xs?: string;
  sm?: string;
  base?: string;
  l?: string;
  xl?: string;
};

export type ButtonShapeStyles = {
  rounded?: string;
  pill?: string;
  square?: string;
};

export type ColorTheme = {
  light: {
    active: string;
    disabled: string;
  };
  dark: {
    active: string;
    disabled: string;
  };
};

export type ButtonColorStyles = {
  default?: ColorTheme;
  secondary?: ColorTheme;
  primary?: ColorTheme;
  success?: ColorTheme;
  warning?: ColorTheme;
  danger?: ColorTheme;
  info?: ColorTheme;
  light?: ColorTheme;
  dark?: ColorTheme;
};

export type ButtonVariantStyles = {
  contained?: ButtonColorStyles;
  outlined?: ButtonColorStyles;
  ghost?: ButtonColorStyles;
};

export type ButtonClasses = {
  standard?: {
    base: string;
    size: ButtonSizeStyles;
    shape: ButtonShapeStyles;
    variant: ButtonVariantStyles;
  };
  icon?: {
    base?: string;
    size?: ButtonSizeStyles;
    variant?: ButtonVariantStyles;
  };
  text?: {
    base?: string;
    size?: ButtonSizeStyles;
  };
};
