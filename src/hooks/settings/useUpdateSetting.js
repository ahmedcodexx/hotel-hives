import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateSetting as updateSettingFnc } from "../../services/apiSettings";
import toast from "react-hot-toast";

const useUpdateSetting = () => {
    const queryClient = useQueryClient();
    const {mutate: updateSetting, isPending, error} = useMutation({
        mutationFn: updateSettingFnc,
        onSuccess: ()=>{
            toast.success("Setting updated successfully.")
            queryClient.invalidateQueries(['settings'])
        },
        onError: (error)=> toast.error(error.message)
    })
    return {updateSetting, isPending, error}
}

export default useUpdateSetting