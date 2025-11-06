import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateBooking } from '../../services/apiBookings'
import toast from 'react-hot-toast'

const useCheckOut = () => {
    const  queryClient = useQueryClient()

    const {mutate: checkOut, isPending: isCheckingOut} = useMutation({
        mutationFn: (id)=> updateBooking(id, {
            status: 'checked-out',
        }),
        onSuccess: (data)=> {
            toast.success(`Booking #${data.id} successfully checked out`);
            queryClient.invalidateQueries({active: true});
        },
        onError: (error)=> {
            toast.error(error.message)
        }
    })
    return {checkOut, isCheckingOut}
}

export default useCheckOut