import { useEffect } from "react";
import { useUser } from "../../hooks"
import { useNavigate } from "react-router-dom";
import {Loader} from "../index";

const ProtectApp = ({children}) => {
  const navigate = useNavigate();
  const { isPending, isAuth } = useUser();

  useEffect(()=> {
    if(!isAuth && !isPending) navigate('/login')  
  },[isAuth, isPending, navigate])

  if(isPending) return <Loader height='dvh'/>

  if(isAuth) return children
}

export default ProtectApp