import React, {
  createContext,
  useContext,
  useState,
} from 'react';
import { createPortal } from "react-dom";
import Toast from './Toast';
import './App.css';

export const ToastContext = createContext(null);

function generateUEID() {
  return Math.random().toString(36).substring(2, 15);
}

export function useToast() {
  const context = useContext(ToastContext);

  return { add: context.add };
}

export function Child() {
  const toast = useToast();
  const showToast = () => toast.add('Toast created from child component!');

  return (
    <>
      <h3>Hello from child component!</h3>
      <button onClick={showToast}>Show me a toast</button>
    </>
  );
}

export const ToastContainer = ({ children, isOpen, message }) => {
  const [toasts, setToasts] = useState([]);
  const add = content => {
    const id = generateUEID();

    setToasts([...toasts, { id, content }]);
  };

  const remove = id => {
    const currentToasts = toasts.filter(t => {
      return t.id !== id;
    });
    setToasts(currentToasts);
  };

  return (
    <ToastContext.Provider value={ { add } }>
      { children }
      {createPortal(
        <div className="toasts-wrapper">
          {toasts.map(t => (
            <Toast key={t.id} remove={() => remove(t.id)}>
              {t.content}
            </Toast>
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  )
}
