import { useContext } from "react";

function useToast() {
  const context = useContext(null);
  return { remove: context.remove };
}

export default useToast;
