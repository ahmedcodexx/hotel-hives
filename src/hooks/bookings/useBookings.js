import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/dataOptions";


const useBookings = () => {
    const queryClient = useQueryClient();
    const [searchParams] = useSearchParams()
    const filterStatus =  searchParams.get("status");
    const filter = !filterStatus || filterStatus === 'all' ? null : {field: 'status', value: filterStatus}
    
    const getSearchParams = searchParams.get("sortBy") || 'startDate-desc';
    const [field, direction] = getSearchParams.split('-');
    const sortBy = {field, direction}

    const page = !searchParams.get('page') ? 1 : Number(searchParams.get("page"));

    const {isPending, data: {data: bookings, count} = {}} = useQuery({
        queryKey: ["bookings", filter, sortBy, page],
        queryFn: ()=>getBookings({filter, sortBy, page}),
    });

    const pageCount = Math.ceil(count / PAGE_SIZE);
    if(page < pageCount) {
        queryClient.prefetchQuery({
            queryKey: ['bookings', filter, sortBy, page + 1],
            queryFn: ()=> getBookings({filter, sortBy, page: page + 1 })
        })
    } 
    if(page > 1 ) {
        queryClient.prefetchQuery({
            queryKey: ['bookings', filter, sortBy, page - 1],
            queryFn: ()=> getBookings({filter, sortBy, page: page - 1 })
        })
    }
    return {isPending, bookings, count}
}

export default useBookings