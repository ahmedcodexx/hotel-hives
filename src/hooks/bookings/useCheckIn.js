import { useNavigate } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateBooking } from '../../services/apiBookings'
import toast from 'react-hot-toast'

const useCheckIn = () => {
    const navigate = useNavigate()
    const  queryClient = useQueryClient()

    const {mutate: checkIn, isPending} = useMutation({
        mutationFn: ({id, breakfast})=> updateBooking(id, {
            status: 'checked-in',
            isPaid: true,
            ...breakfast
        }),
        onSuccess: (data)=> {
            toast.success(`Booking #${data.id} successfully checked in`);
            queryClient.invalidateQueries({active: true});
            navigate('/')
        },
        onError: (error)=> {
            toast.error(error.message)
        }
    })
    return {checkIn, isPending}
}

export default useCheckIn