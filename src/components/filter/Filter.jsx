import { useSearchParams } from "react-router-dom"

const Filter = ({filterField, options})=> {
    const [searchParams, setSearchParams] = useSearchParams();

    const filtered = (value)=> {
        searchParams.set(filterField, value);
        if(searchParams.get('page')) searchParams.set('page', 1)
        setSearchParams(searchParams)
    }
    
    const currentFilter = searchParams.get(filterField) || options.at(0).value;

    return (
        <ul className="flex items-center px-2 py-1 gap-0.5 bg-[var(--color-primary)] rounded-xl text-[var(--color-text)]">
            {options.map((filter,idx) => 
                <li key={idx} className={`li-filter ${currentFilter === filter.value ? 'active-filter' : ''}`} onClick={()=> filtered(filter.value)}>{filter.label}</li>
            )}
        </ul>
    )
}
export default Filter