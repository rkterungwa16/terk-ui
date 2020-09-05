import React, { useContext, useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { ToastMessage } from "./ToastMessage";
import { ToastMainContainer } from "./style";
import { useToast } from "./hooks";
import { ToastContext } from "./ToastContext";

function generateUEID() {
  return Math.random().toString(36).substring(2, 15);
}

export function Child() {
  const toast = useToast();
  const showToast = () => toast.add("Toast created from child component!");
  return (
    <>
      <h3>Hello from child component!</h3>
      <button onClick={showToast}>Show me a toast</button>
    </>
  );
}

export const MultiToast = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const add = useCallback(
    (content) => {
      const id = generateUEID();

      setToasts([...toasts, { id, content }]);
    },
    [toasts]
  );

  const remove = useCallback(
    (id) => {
      const currentToasts = toasts.filter((t) => {
        return t.id !== id;
      });
      setToasts(currentToasts);
    },
    [toasts]
  );

  return (
    <ToastContext.Provider value={{ add }}>
      {children}
      {createPortal(
        <ToastMainContainer>
          {toasts.map((t) => (
            <ToastMessage key={t.id} remove={() => remove(t.id)}>
              {t.content}
            </ToastMessage>
          ))}
        </ToastMainContainer>,
        document.body
      )}
    </ToastContext.Provider>
  );
};

export const Toast = (props) => {
  const toastNode = useContext(ToastContext);
  const [toastIsOpen, setToastOpen] = useState(false);
  useEffect(() => {
    if (toastIsOpen !== props.isOpen) {
      setToastOpen(props.isOpen);
    }
  }, [props.isOpen, toastIsOpen]);

  const remove = () => {
    setToastOpen(false);
    props.handleRemove();
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
  handleRemove: PropTypes.func,
};
