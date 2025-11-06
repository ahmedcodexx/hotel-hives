import { formatCurrency } from "../../utils/helpers";
import { useDeleteCabin, useModal } from "../../hooks";
import { FaRegEdit, FaTrash } from "../../icons/icons";


const CabinRow = ({ cabin }) => {
    const {deleteCabin} = useDeleteCabin();
    const { openModal } = useModal();
    return (
        <div className="bg-[var(--color-primary)] text-[var(--color-text)] grid grid-cols-7 text-center border-t-1 border-[var(--color-secondary)] py-3">
            <img src={cabin.image || 'img'} className="w-1/4 m-auto" alt="Cabin Image" />
            <p>{cabin.name}</p>
            <p>Fits up tp {cabin.maxCapacity} guests</p>
            <p>{formatCurrency(cabin.regularPrice)}</p>
            <p>{formatCurrency(cabin.discount)}</p>
            <button
                onClick={() => openModal("edit", { cabin })}
                className={`m-auto cursor-pointer`}
                type="button"
            >
                <FaRegEdit size={20} color="blue" title="Edit"/>
            </button>
            <button onClick={()=> openModal('delete', {id: cabin.id, name: 'Cabin', deleteFunc: deleteCabin})} className='m-auto cursor-pointer' type="button" title="Delete">
                <FaTrash size={15} color="red" />
            </button>
        </div>
    );
};

export default CabinRow;
