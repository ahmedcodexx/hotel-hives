import { useSearchParams } from "react-router-dom";
import { useCabins, useModal } from "../../hooks";
import { CabinRow, Loader} from "../index";

const CabinLayout = () => {
    const { openModal } = useModal();
    const { cabins } = useCabins();
    const [searchParams] = useSearchParams();

    let filteredCabin;

    switch (searchParams.get('discount')) {
        case 'all':
            filteredCabin = cabins;
            break;
        case "no-discount":
            filteredCabin = cabins.filter(cabin => cabin.discount === 0);
            break;
        case "with-discount":
            filteredCabin = cabins.filter(cabin => cabin.discount > 0);
            break;
        default:
            filteredCabin = cabins
    }

    const sortBy = searchParams.get('sortBy') || 'startDate-asc';
    const [field, direction] = sortBy.split('-');
    const modifier = direction === 'asc' ? 1 : -1;
    const sortedCabin = filteredCabin?.sort((a, b) => (a[field] - b[field]) * modifier);
    

    return (
        <>
            <div className="mt-10 rounded-sm border-1 border-[var(--color-secondary)]">
                <div className="grid grid-cols-7 py-3 text-center font-semibold text-[var(--color-text)] uppercase">
                    <p>image</p>
                    <p>Cabin</p>
                    <p>Capacity</p>
                    <p>Price</p>
                    <p>Discount</p>
                    <p>Edit</p>
                    <p>Delete</p>
                </div>
                {sortedCabin.map((cabin, idx) => (
                    <CabinRow key={idx} cabin={cabin} />
                ))}
            </div>
            <button
                onClick={() => openModal("create")}
                type="button"
                className="my-3 w-full cursor-pointer rounded-md bg-indigo-700 p-3 text-white"
            >
                Add new cabin
            </button>
        </>
    );
};

export default CabinLayout;
