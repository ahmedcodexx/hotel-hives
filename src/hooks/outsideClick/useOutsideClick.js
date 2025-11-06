import { useEffect, useRef } from "react"
import useModal from "../modal/useModal";

const useOutsideClick = () => {
    const ref = useRef()
    const {closeModal} = useModal();
    
    useEffect(function(){
        function handleClickOutside(e){
            if(ref.current === e.target) {
                closeModal()
            }
        }
        document.addEventListener("click", handleClickOutside)
        return ()=> document.removeEventListener("click", handleClickOutside)
    }, [ref, closeModal]);
    
    return ref;
}

export default useOutsideClick