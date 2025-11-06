import { useSettings, useUpdateSetting } from "../../hooks";

const SettingForm = () => {
    const {updateSetting} = useUpdateSetting();
    const { settings } = useSettings();
    const {minBookingLength, maxBookingLength, maxGuestPerBooking, breakfastPrice} = settings || {};

    function handleUpdate(e, field) {
        const {value} = e.target;
        if(!value) return;
        updateSetting({[field]: value})
    }

    return (
        <form className="mt-10 space-y-4 bg-[var(--color-primary)] py-10">
            <div className="dev-input w-3/4">
                <label className="text-[var(--color-text)]" htmlFor="minBooking">Minimum nights/Bookings</label>
                <input className="input" type="number" id="minBooking" defaultValue={minBookingLength} onBlur={(e)=> handleUpdate(e, 'minBookingLength')}/>
            </div>
            <div className="dev-input w-3/4">
                <label className="text-[var(--color-text)]" htmlFor="maxBooking">Maximum nights/Bookings</label>
                <input className="input" type="number" id="maxBooking" defaultValue={maxBookingLength} onBlur={(e)=> handleUpdate(e, 'maxBookingLength')}/>
            </div>
            <div className="dev-input w-3/4">
                <label className="text-[var(--color-text)]" htmlFor="maxGuests">Minimum guests/Bookings</label>
                <input className="input" type="number" id="maxGuests" defaultValue={maxGuestPerBooking} onBlur={(e)=> handleUpdate(e, 'maxGuestPerBooking')}/>
            </div>
            <div className="dev-input w-3/4">
                <label className="text-[var(--color-text)]" htmlFor="breakfast">Breakfast Price</label>
                <input className="input" type="number" id="breakfast" defaultValue={breakfastPrice} onBlur={(e)=> handleUpdate(e, 'breakfastPrice')}/>
            </div>
        </form>
    );
};

export default SettingForm;
