import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteBookingFnc } from "../../services/apiBookings"
import toast from "react-hot-toast"


const useDeleteBooking = () => {
    const queryClient = useQueryClient();

    const {mutate: deleteBooking, isPending} = useMutation({
        mutationFn: (id)=> deleteBookingFnc(id),
        onSuccess: ()=> {
            queryClient.invalidateQueries(['bookings'])
            toast.success(`Booking deleted successfully.`)
        },
        onError: (error)=> {
            toast.error(error.message)
        }
    })
    return {deleteBooking, isPending}
}

export default useDeleteBooking