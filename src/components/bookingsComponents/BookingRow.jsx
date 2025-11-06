import { useNavigate } from "react-router-dom";
import { format, isToday } from "date-fns";
import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";
import useDeleteBooking from "../../hooks/bookings/useDeleteBooking";
import { useCheckOut, useModal } from "../../hooks";
import { CiInboxOut, FaTrash, HiEye } from "../../icons/icons";



const BookingRow = ({ bookings }) => {
  const navigate = useNavigate()
  const {checkOut} = useCheckOut();
  const {deleteBooking} = useDeleteBooking();
  const {openModal} = useModal();
  const {id: bookingId, startDate, endDate, numNights, status, totalPrice, guests, cabin } = bookings;

  return (
    <div className="grid grid-cols-6 border-t-1 border-[var(--color-secondary)] py-3 text-center">
      <p className="text-[var(--color-text)]">{cabin.name}</p>
      <div>
        <p className="text-[var(--color-text)]">{guests.fullName}</p>
        <p className="text-[var(--color-text)] text-xs">{guests.email}</p>
      </div>
      <div>
        <p className="text-[var(--color-text)]">
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </p>
        <p className="text-[var(--color-text)] text-xs">
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </p>
      </div>
      <p className="text-[var(--color-text)]">{status}</p>
      <p className="text-[var(--color-text)]">{formatCurrency(totalPrice)}</p>
      <div className="flex-center gap-3">
        <button type="button" className="cursor-pointer text-main"  onClick={()=> navigate(`/checkin/${bookingId}`)}>
          <HiEye size={20} color="" className="my-0 m-auto" title="view Details"/>
        </button>
        <button type="button" className="cursor-pointer text-main"  onClick={()=> checkOut(bookingId)}>
          <CiInboxOut size={20} className="my-0 m-auto" title="Check out"/>
        </button>
        <button type="button" className="cursor-pointer" onClick={()=> openModal('delete', {id: bookingId, deleteFunc: deleteBooking, name: 'Booking'})}>
          <FaTrash size={15} color="red" className="my-0 m-auto" title="Delete"/>
        </button>
      </div>
    </div>
  );
};

export default BookingRow;
