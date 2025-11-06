import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createCabinFnc } from "../../services/apiCabins"
import toast from "react-hot-toast"


const useCreateCabin = () => {
    const queryClient = useQueryClient()

    const { mutate: createCabin, isPending: isCreatingCabin } = useMutation({
        mutationFn: createCabinFnc,
        onSuccess: () => {
            toast.success("New cabin successfully created")
            queryClient.invalidateQueries(["cabin"])
        },
        onError: (err) => toast.error(err.message)
    })
    return { createCabin, isCreatingCabin }
}

export default useCreateCabin