import toast from "react-hot-toast";
import { deleteCabinFnc } from "../../services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";


const useDeleteCabin = () => {
    const queryClient = useQueryClient();

    const { isPending: isDeleting, mutate: deleteCabin } = useMutation({
        mutationFn: (id) => deleteCabinFnc(id),
        onSuccess: () => {
            queryClient.invalidateQueries(['cabin']),
            toast.success("Cabin has been deleted successfully.")
        },
        onError: err => toast.error(err.message)
    });
    return {deleteCabin, isDeleting}
}

export default useDeleteCabin