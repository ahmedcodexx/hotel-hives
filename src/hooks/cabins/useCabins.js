import { useQuery } from "@tanstack/react-query";
import getCabins from "../../services/apiCabins";

const useCabins = () => {
    const { isPending, data: cabins } = useQuery({
        queryKey: ["cabin"],
        queryFn: getCabins,
    });
    return {isPending, cabins}
}

export default useCabins