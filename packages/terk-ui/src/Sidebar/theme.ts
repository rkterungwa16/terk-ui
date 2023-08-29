import { CSSProperties } from "react";

export type SidebarThemeProps = {
  sidebar: {
    dark: CSSProperties;
    light: CSSProperties;
    [mode: string]: CSSProperties;
  };
};

export const sidebarTheme: SidebarThemeProps = {
  sidebar: {
    dark: {
      color: "#ffffff",
      backgroundColor: "#3c4b64"
    },
    light: {
      color: "#4f5d73",
      backgroundColor: "#ffffff"
    }
  }
};
