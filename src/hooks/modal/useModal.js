import { createContext, useContext } from "react";

export const ModalContext = createContext();

const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used inside a <ModalProvider>");
  }
  return context;
};

export default useModal;
