import { useCallback, useState } from "react"
import { ModalContext } from "./useModal"

const ModalProvider = ({children}) => {
  const [modal, setModal] = useState(null);

  const openModal = useCallback((type, props = {}) => {
    setModal({type, props})
  },[])

  const closeModal = useCallback(()=> {
    setModal(null)
  },[])

  return (
    <ModalContext.Provider value={{modal, openModal, closeModal}}>{children}</ModalContext.Provider>
  )
}

export default ModalProvider