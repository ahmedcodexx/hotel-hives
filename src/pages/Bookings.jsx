
import { BookingLayout, Filter, Loader, SortBy } from "../components";
import { useBookings } from "../hooks";
import { filterBookings, sortBookings } from "../utils/dataOptions";

const Bookings = () => {
  const { isPending } = useBookings();

  return (
    <section className="p-5 h-full">
      <div className="flex-between">
        <h1 className="text-2xl font-bold text-[var(--color-text)]">All Bookings</h1>
        <div className="flex-between gap-4">
          <Filter filterField="status" options={filterBookings} />
          <SortBy options={sortBookings} />
        </div>
      </div>
      {isPending && <Loader /> }
      {!isPending && <BookingLayout />}
    </section>
  );
};

export default Bookings;
