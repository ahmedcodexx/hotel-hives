import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom"
import {  LogOutFunc } from "../../services/apiAuth";

const useLogOut = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient()
    const {mutate: logOut, isPending} = useMutation({
        mutationKey: ['user'],
        mutationFn: LogOutFunc,
        onSuccess: ()=> {
            queryClient.removeQueries();
            navigate('/login')
        }
    })
    return {logOut, isPending}
}

export default useLogOut