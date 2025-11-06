import { useQuery } from "@tanstack/react-query"
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

const useBooking = () => {
    const { bookingId } = useParams();
    
    const { isPending, data: booking = {} } = useQuery({
        queryKey: ['bookings', bookingId],
        queryFn: () => getBooking(bookingId)
    })

    return { isPending, booking }
}

export default useBooking