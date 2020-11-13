import React, { useContext, useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { ToastMessage } from "./ToastMessage";
import { ToastMainContainer } from "./style";
import { useToast } from "./hooks";
import { ToastContext } from "./ToastContext";

export function Child() {
  const toast = useToast();
  const showToast = () => toast.add("Toast created from child component!");
  return (
    <>
      <h3>Toast</h3>
      <button onClick={showToast}>Show toast</button>
    </>
  );
}

const Toast = (props) => {
  const toastNode = useContext(ToastContext);
  const [toastIsOpen, setToastOpen] = useState(false);
  useEffect(() => {
    if (toastIsOpen !== props.isOpen) {
      setToastOpen(props.isOpen);
    }
  }, [props.isOpen, toastIsOpen]);

  const remove = () => {
    setToastOpen(false);
    props.onClose();
  };

  return (
    <>
      {toastNode
        ? createPortal(
            <ToastMainContainer>
              {toastIsOpen && (
                <ToastMessage remove={() => remove()}>
                  {props.message}
                </ToastMessage>
              )}
            </ToastMainContainer>,
            toastNode
          )
        : null}
    </>
  );
};

Toast.propTypes = {
  isOpen: PropTypes.bool,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["error", "success", "default"]),
};

Toast.defaultProps = {
  variant: "default",
};

export default Toast;
