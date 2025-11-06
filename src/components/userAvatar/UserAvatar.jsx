import { Link } from "react-router-dom";
import { useUser } from "../../hooks"

const UserAvatar = () => {
    const {user} = useUser();
    const {avatar, fullName} = user.user_metadata
  return (
    <Link className=" cursor-pointer relative flex-center gap-2" to={'/profile'}>
        <img className="w-[30px] h-[30px] rounded-full" src={avatar || '/public/default-user.jpg'} alt={`Image of ${fullName}`} title={fullName} />
        <span className="text-xs text-[var(--color-text)]">{fullName}</span>
    </Link>
  )
}

export default UserAvatar