import { HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartBar } from '../../icons/icons'
import { formatCurrency } from '../../utils/helpers';
import {Stat} from '../index';


const Status = ({ bookings, confirmedStays, numDays, cabinCount }) => {
    const numBookings = bookings.length;
    const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);
    const checkIns = confirmedStays.length;
    const occupation = confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) / (numDays * cabinCount)

    return (
        <>
            <Stat title='Bookings' icon={<HiOutlineBriefcase size={35}/>} value={numBookings} />
            <Stat title='Sales' icon={<HiOutlineBanknotes size={35}/>} value={formatCurrency(sales)} />
            <Stat title='Check ins' icon={<HiOutlineCalendarDays size={35}/>} value={checkIns} />
            <Stat title='Occupancy rate' icon={<HiOutlineChartBar size={35}/>} value={Math.round(occupation * 100) + "%"} />
        </>
    )
}

export default Status