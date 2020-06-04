import { useContext } from 'react';
import ToastContext from './context';

function useToast() {
  const context = useContext(ToastContext);

  return { remove: context.remove };
}

export default useToast;
