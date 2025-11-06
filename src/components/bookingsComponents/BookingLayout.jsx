import { useBookings } from "../../hooks";
import { BookingRow, Pagination } from "../index";


const BookingLayout = () => {
  const { bookings, count } = useBookings();
  
  return (
    <>
      <div className="mt-10 rounded-sm border-1 border-[var(--color-primary)] bg-[var(--color-primary)]">
        <div className="grid grid-cols-6 py-3 text-center font-semibold text-[var(--color-text)] uppercase">
          <p>Cabin</p>
          <p>Guests</p>
          <p>Dates</p>
          <p>Status</p>
          <p>Amount</p>
          <p>Actions</p>
        </div>
        {bookings.map((booking, idx) => (
          <BookingRow key={idx} bookings={booking} />
        ))}
      </div>
      <Pagination count={count} />
    </>
  );
};

export default BookingLayout;
