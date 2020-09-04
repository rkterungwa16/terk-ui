import React, { useEffect, useRef } from "react";
import {
  ToastMessageTextContainer,
  ToastMessageContainer,
  ToastMessageCloseButton,
} from "./style";

export const ToastMessage = ({ children, remove }) => {
  const removeRef = useRef(null);
  removeRef.current = remove;
  useEffect(() => {
    const duration = 5000;
    setTimeout(() => removeRef.current(), duration);
  }, []);

  return (
    <ToastMessageContainer>
      <ToastMessageTextContainer>{children}</ToastMessageTextContainer>
      <ToastMessageCloseButton onClick={remove}>x</ToastMessageCloseButton>
    </ToastMessageContainer>
  );
};
