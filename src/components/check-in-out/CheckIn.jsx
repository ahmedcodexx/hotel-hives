import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { Loader } from "../index";
import {
    FaDollarSign,
    FaRegCheckCircle,
    FaRegTimesCircle,
    FaRegUserCircle,
    HiOutlineHomeModern,
    IoChatbubbleEllipsesOutline,
} from "../../icons/icons";
import { useBooking, useCheckIn, useSettings } from "../../hooks";
import { formatCurrency } from "../../utils/helpers";

const CheckIn = () => {
    const [confirmed, setConfirmed] = useState(false);
    const [addBreakfast, setAddBreakfast] = useState(false);

    const { checkIn, isPending: isCheckIn } = useCheckIn();
    const { booking, isPending } = useBooking();
    const { settings } = useSettings();


    const navigate = useNavigate();

    const {
        cabin,
        cabinPrice,
        created_at,
        endDate,
        extraPrices,
        guests,
        hasBreakfast,
        observations,
        isPaid,
        id,
        numGuests,
        numNights,
        startDate,
        status,
        totalPrice,
    } = booking;

    
    const optionalBreakfast = settings?.breakfastPrice * numGuests * numNights;
    
    const handleConfirm = () => {
        if (!confirmed) return
        if (addBreakfast) {
            checkIn({
                id, breakfast: {
                    hasBreakfast: true,
                    extraPrices: optionalBreakfast,
                    totalPrice: totalPrice + optionalBreakfast
                }
            })
        } else {
            checkIn({ id, breakfast: {} })
        }
    }
    
    if (isPending) return <Loader />;
    
    if(!id) return <div className="h-full flex-center"><p className="text-2xl text-indigo-600">No booking could be found.</p></div>
    
    return (
        <section>
            <div className="flex-between">
                <div className="flex-center gap-4">
                    <h1 className="text-2xl font-bold text-[var(--color-text)]">Booking #{id}</h1>
                    <p className="text-[var(--color-text)]">{status}</p>
                </div>
                <button
                    type="button"
                    className="cursor-pointer text-indigo-500 hover:text-indigo-700"
                    onClick={() => navigate(-1)}
                >
                    &larr; Back
                </button>
            </div>
            <div className="mt-10 overflow-auto rounded-lg text-[var(--color-text)]">
                <div className="flex-between bg-indigo-700 px-6 py-4 text-[var(--color-primary)]">
                    <p className="flex gap-3 text-white">
                        <span>
                            <HiOutlineHomeModern size={25} />{" "}
                        </span>
                        {numNights} nights in Cabin {cabin.name}
                    </p>
                    <p className="text-white">
                        {format(new Date(startDate), "E, MMM dd yyyy")} &mdash;{" "}
                        {format(new Date(endDate), "E, MMM dd yyyy")}
                    </p>
                </div>
                <div className="space-y-7 bg-[var(--color-primary)] p-6 text-sm font-semibold ">
                    <p className="flex-center justify-start gap-2">
                        <FaRegUserCircle /> {guests.fullName} {numGuests}+ guests &bull;{" "}
                        <span className="text-[var(--color-text)]">
                            {guests.email} &bull; National ID {guests.nationalID}
                        </span>
                    </p>
                    {observations && (
                        <p className="flex-center justify-start gap-2">
                            {" "}
                            <IoChatbubbleEllipsesOutline /> {observations}
                        </p>
                    )}
                    <p className="flex-center justify-start gap-2">
                        {hasBreakfast ? <FaRegCheckCircle /> : <FaRegTimesCircle />}{" "}
                        Breakfast included ? {hasBreakfast ? "Yes" : "No"}
                    </p>
                    <div
                        className={`flex-between p-5 ${isPaid ? "bg-green-500" : "bg-amber-200"}`}
                    >
                        <p className="flex-center justify-start gap-2 text-black ">
                            <FaDollarSign />
                            Total Price &nbsp;&nbsp;
                            {formatCurrency(hasBreakfast ? totalPrice : addBreakfast ? totalPrice + optionalBreakfast : totalPrice)}
                            {" "}
                            (
                            {formatCurrency(cabinPrice)} cabin
                            {" + "}
                            {formatCurrency(hasBreakfast ? extraPrices : addBreakfast ? optionalBreakfast : 0)}{" "}
                            breakfast)
                        </p>
                        <p>{isPaid ? "Paid" : "WILL PAY AT PROPERTY"}</p>
                    </div>
                    <div className="text-end font-normal">
                        <p>
                            Booked{" "}
                            {format(new Date(created_at), "E, MMM dd yyyy hh:mm a")}{" "}
                        </p>
                    </div>
                </div>
            </div>
            {!hasBreakfast &&
                <div className="flex-start my-4 gap-3 rounded-md bg-[var(--color-primary)] p-6 text-sm font-semibold text-[var(--color-text)]">
                    <input type="checkbox" id="breakfast"
                        checked={addBreakfast} onChange={() => setAddBreakfast(add => !add)} />
                    <label htmlFor="breakfast">
                        Want to add break fast for  {" "}
                        {formatCurrency(optionalBreakfast)}
                    </label>
                </div>}
            {(!isPaid || (isPaid && addBreakfast)) && (
                <>
                    <div className="flex-start my-4 gap-3 rounded-md bg-[var(--color-primary)] p-6 text-sm font-semibold text-[var(--color-text)]">
                        <input type="checkbox" name="" id="confirm"
                            checked={confirmed} onChange={() => setConfirmed(conf => !conf)} />
                        <label htmlFor="confirm">
                            I confirm that {guests.fullName} has paid the total price of {" "}
                            {!addBreakfast ? formatCurrency(totalPrice) : `${formatCurrency(totalPrice + optionalBreakfast)} (${formatCurrency(totalPrice)} + ${formatCurrency(optionalBreakfast)})`}
                        </label>
                    </div>
                    <div className="text-end">
                        <button
                            className={`rounded-md bg-indigo-700 px-3 py-2 text-white ${!confirmed || isCheckIn ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                            type="button"
                            disabled={!confirmed || isCheckIn}
                            onClick={handleConfirm}
                        >
                            Check In Booking #{id}
                        </button>
                    </div>
                </>
            )}
        </section>
    );
};

export default CheckIn;
