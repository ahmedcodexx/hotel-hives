import { Link } from "react-router-dom";
import CheckoutButton from "./CheckoutButton";

function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;

  return (
    <div className="mt-3 grid grid-cols-4 overflow-auto text-start text-xs">
      <div className="flex-around items-start">
        {status === "unconfirmed" && (
          <span className="flex-center w-fit rounded-full bg-green-500/40 py-1 px-2">
            Arriving
          </span>
        )}
        {status === "checked-in" && (
          <span className="flex-center w-fit rounded-full bg-blue-500/40 py-1 px-2">
            Departing
          </span>
        )}

        <div className="bg-amber-600">
          <img src={guests.countryFlag} className="w-7 bg-amber-600" />
        </div>
      </div>
      <p className="ml-3">{guests.fullName}</p>
      <p>{numNights} nights</p>

      {status === "unconfirmed" && (
        <Link
          className="cursor-pointer rounded-md bg-blue-600 p-2 text-center"
          to={`/checkin/${id}`}
        >
          Check in
        </Link>
      )}
      {status === "checked-in" && <CheckoutButton bookingId={id} />}
    </div>
  );
}

export default TodayItem;
