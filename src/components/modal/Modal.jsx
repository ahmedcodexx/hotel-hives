import { useOutsideClick } from '../../hooks/index';

const Modal = ({children}) => {

  const ref = useOutsideClick()

  return (
    <div ref={ref} className="fixed top-0 left-0 backdrop-blur-xs flex-center w-full h-full">{children}</div>
  )
}

export default Modal