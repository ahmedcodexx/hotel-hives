import { NavLink } from "react-router-dom";
import {Logo} from "./index";
import { HiOutlineHomeModern, HiOutlineUsers, IoCalendarNumberOutline, IoHomeOutline, IoSettingsOutline } from '../icons/icons'

const Sidebar = () => {
  const links = [
    {name: 'Home', path: '/dashboard', icon: <IoHomeOutline size={20}/>},
    {name: 'Bookings', path: '/bookings', icon: <IoCalendarNumberOutline size={20}/>},
    {name: 'Users', path: '/users', icon: <HiOutlineUsers size={20}/>},
    {name: 'Cabins', path: '/cabins', icon: <HiOutlineHomeModern size={20}/>},
    {name: 'Settings', path: '/settings', icon: <IoSettingsOutline size={20}/>},
  ]
  return (
    <aside className="pt-7 col-span-2 row-span-full shadow-md m-0 bg-[var(--color-primary)]">
      <Logo />
      <ul className="pt-10 space-y-1">
        {
          links.map((link, index) => 
          <li key={index}>
            <NavLink className='link flex items-center gap-3 ' to={link.path}>
              <span className="text-indigo-700">{link.icon}</span>
              <span>{link.name}</span>
            </NavLink>
          </li>
          )
        }
      </ul>
    </aside>
  );
};

export default Sidebar;
