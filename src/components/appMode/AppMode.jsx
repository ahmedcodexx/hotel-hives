
import {useAppMode} from '../../hooks/index';
import {FaSun, FaMoon} from '../../icons/icons'

const AppMode = () => {
    const {isDarkMode, toggleMode} = useAppMode();
    return (
        <button className='cursor-pointer text-primary' type="button" onClick={toggleMode}>{isDarkMode ? <FaSun size={20}/> : <FaMoon size={20}/>}</button>
    )
}

export default AppMode