import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { login as loginFunc } from "../../services/apiAuth"
import toast from "react-hot-toast"

const useLogin = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient();
        const {mutate: login, isPending} = useMutation({
        mutationFn: loginFunc,
        onSuccess: (user)=> {
            queryClient.setQueryData(['user'], user.user)
            navigate('/dashboard')
        },
        onError: (error)=> toast.error(error.message)
    })
    return {login, isPending}
}

export default useLogin