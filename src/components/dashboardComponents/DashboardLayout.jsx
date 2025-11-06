import { useCabins, useRecentBookings, useRecentStays } from "../../hooks";
import {
    DurationChart,
    Loader,
    SalesChart,
    Status,
    TodayActivity,
} from "../index";

const DashboardLayout = () => {
    const { isPending, bookings } = useRecentBookings();
    const { isPending: isPending2, confirmedStays, numDays } = useRecentStays();
    const { cabins } = useCabins();

    if (isPending || isPending2) return <Loader />;
    return (
        <div className="mt-10 grid grid-cols-4 gap-7 text-center text-[var(--color-text)]">
            <Status
                bookings={bookings}
                confirmedStays={confirmedStays}
                numDays={numDays}
                cabinCount={cabins?.length}
            />
            <TodayActivity />
            <DurationChart confirmedStays={confirmedStays} />
            <SalesChart bookings={bookings} numDays={numDays} />
        </div>
    );
};

export default DashboardLayout;
