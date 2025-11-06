import { useMutation, useQueryClient } from "@tanstack/react-query"
import { editCabinFnc } from "../../services/apiCabins"
import toast from "react-hot-toast"


const useUpdateCabin = () => {
    const queryClient = useQueryClient()
    const { mutate: editCabin, isPending: isEditingCabin } = useMutation({
        mutationFn: ({ newCabinData, id }) => editCabinFnc(newCabinData, id),
        onSuccess: () => {
            toast.success("Cabin Edited successfully ")
            queryClient.invalidateQueries(["cabin"])
        },
        onError: (err) => toast.error(err.message)
    })
    return {editCabin, isEditingCabin}
}

export default useUpdateCabin