import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/dataOptions";



const Pagination = ({count}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = !searchParams.get('page') ? 1 : Number(searchParams.get("page"));
    const pageCount = Math.ceil(count / PAGE_SIZE);

    const nextPage = ()=> {
        const next = currentPage === pageCount ? currentPage : currentPage + 1;

        searchParams.set("page", next);
        setSearchParams(searchParams)
    }
    const pervPage = ()=> {
        const perv = currentPage === 1 ? currentPage : currentPage - 1;

        searchParams.set("page", perv)
        setSearchParams(searchParams)
    }
    if(pageCount <= 1 ) return null
    return (
        <div className="py-10 flex-between">
        <span className="text-sm text-[var(--color-text)]">
            Showing <span className="font-semibold">{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
            <span className="font-semibold">{currentPage === pageCount ? count : currentPage * PAGE_SIZE}</span> of{" "}
            <span className="font-semibold">{count}</span> Entries
        </span>
        <div className="mt-2 inline-flex gap-3">
            <button className={`pagination-btn ${currentPage <= 1 && 'cursor-not-allowed'}`} onClick={pervPage} disabled={currentPage <= 1} >&larr; Prev</button>
            <button className={`pagination-btn ${currentPage >= pageCount && 'cursor-not-allowed'}`} onClick={nextPage} disabled={currentPage >= pageCount} > Next &rarr;</button>
        </div>
        </div>
    );
};

export default Pagination;
