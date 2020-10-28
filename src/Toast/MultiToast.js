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
      <h3>Toast</h3>
      <button onClick={showToast}>Show toast</button>
    </>
  );
}

const MultiToast = ({ children }) => {
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

MultiToast.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(["error", "success", "default"]),
};

MultiToast.defaultProps = {
  variant: "default",
};

export default MultiToast;
