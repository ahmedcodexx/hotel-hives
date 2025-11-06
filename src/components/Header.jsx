import useLogOut from "../hooks/auth/useLogOut"
import { AppMode, UserAvatar} from './index'
import { MdLogout } from "../icons/icons";

const Header = () => {
  const {logOut, isPending} = useLogOut();

  return (
    <header className="px-10 navbar col-start-3 col-span-full flex-end gap-5 m-0 bg-[var(--color-primary)] text-main">
      <UserAvatar />
      <AppMode />
      <button className={`${isPending ? 'cursor-not-allowed' : 'cursor-pointer'}`} type="button" onClick={logOut}><MdLogout size={20}/></button>
    </header>
  )
}

export default Header