import React, { useContext } from 'react';
import iconMoon from '../assets/icon-moon.svg';
import iconSun from '../assets/icon-sun.svg';
import { ThemeContext } from '../context/ThemeContext';


const Header: React.FC = () => {

    const themeContext = useContext(ThemeContext);
    return (
        <header className='flex justify-between items-center'>
            {/* logo */}
            <div>
                <span className='text-xl font-bold'>devfinder</span>
            </div>

            {/* Mode */}
            <div className='flex justify-between items-center gap-4 hover:cursor-pointer'
                onClick={themeContext?.toggleTheme}>
                <span className='text-xs tracking-widest'>{themeContext?.theme === 'dark' ? 'LIGHT' : 'DARK'}</span>
                {themeContext?.theme === 'dark' ? <img src={iconSun} alt="Sun Icon" /> : <img src={iconMoon} alt="Moon Icon" />}
            </div>
        </header>
    )
}

export default Header