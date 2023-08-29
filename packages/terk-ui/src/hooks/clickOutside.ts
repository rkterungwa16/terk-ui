import React, { MutableRefObject } from "react";

export function useClickOutside(ref: MutableRefObject<null | HTMLElement>, action: () => void) {
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref?.current && !ref.current.contains(event.target as Node)) {
        action();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

