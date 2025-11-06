//  Cabins data
export  const filterOptions = [
    {label: 'All', value: 'all'},
    {label: 'No Discount', value: 'no-discount'},
    {label: 'With Discount', value: 'with-discount'},
]

export  const sortByOptions = [
    {label: 'Sort by name [A-Z]', value: 'name-asc'},
    {label: 'Sort by name [Z-A]', value: 'name-disc'},
    {label: 'Sort by price [0-9]', value: 'regularPrice-asc'},
    {label: 'Sort by price [9-0]', value: 'regularPrice-disc'},
    {label: 'Sort by capacity [0-9]', value: 'maxCapacity-asc'},
    {label: 'Sort by capacity [9-0]', value: 'maxCapacity-disc'},
]


//  Bookings data
export const filterBookings = [
    {label: 'All', value: 'all'},
    {label: 'Unconfirmed', value: 'unconfirmed'},
    {label: 'Checked in', value: 'checked-in'},
    {label: 'Checked out', value: 'checked-out'},
]

export const sortBookings = [
    {label: 'Sort by date [recent first]', value: 'startDate-desc'},
    {label: 'Sort by date [earlier first]', value: 'startDate-asc'},
    {label: 'Sort by amount [9-0]', value: 'totalPrice-desc'},
    {label: 'Sort by amount [0-9]', value: 'totalPrice-asc'},
]


// Pagination
export const PAGE_SIZE = 10;


// Recent Bookings
export const recentBookings = [
    {label: 'Last 7 days', value: '7'},
    {label: 'Last 30 days', value: '30'},
    {label: 'Last 90 days', value: '90'},
]