import { useMutation } from "@tanstack/react-query"
import { signUpFunc } from "../../services/apiAuth"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

const useSignUp = () => {
    const navigate = useNavigate()
    
    const {mutate: signUp, isPending} = useMutation({
        mutationKey: ['signup'],
        mutationFn: signUpFunc,
        onSuccess: ()=> {
            toast.success("Account successfully created!")
            navigate('/dashboard')
        },
        onError: (error)=> toast.error(error.message)
    })
    return {signUp, isPending}
}

export default useSignUp