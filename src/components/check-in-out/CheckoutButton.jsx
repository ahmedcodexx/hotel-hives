import { useCheckOut } from "../../hooks";


function CheckoutButton({ bookingId }) {
  const { checkOut, isCheckingOut } = useCheckOut();

  return (
    <button type="button" className="p-2 cursor-pointer rounded-md bg-green-600"
      onClick={() => checkOut(bookingId)}
      disabled={isCheckingOut}
    >
      Check out
    </button>
  );
}

export default CheckoutButton;
