import * as React from "react";
import { ToastContext } from "./ToastContext";

export function useToast() {
  const context = React.useContext(ToastContext);
  return { add: context.add };
}
