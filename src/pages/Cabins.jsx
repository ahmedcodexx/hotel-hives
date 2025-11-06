import {  CabinLayout, Filter, Loader, SortBy } from "../components";
import { useCabins } from "../hooks";
import { filterOptions, sortByOptions } from "../utils/dataOptions";


const Cabins = () => {
  const {isPending} = useCabins();

  return (
    <section className="p-5 h-full">
      <div className="flex-between">
        <h1 className="text-2xl font-bold text-[var(--color-text)]">All Cabins</h1>
        <div className="flex-between gap-4">
          <Filter filterField= 'discount' options={filterOptions}/>
          <SortBy options={sortByOptions}/>
        </div>
      </div>
      {isPending && <Loader /> }
      {!isPending && <CabinLayout />}
    </section>
  );
};

export default Cabins;
