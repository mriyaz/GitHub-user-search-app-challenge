import React from 'react'
import iconSearch from '../assets/icon-search.svg';
import { getDeveloperInfo } from '../api/github';
import DeveloperInfo from '../types';


interface SearchProps {
    userName: string,
    setUserName: (argo: string) => void,
    setDeveloperInfo: (argo: DeveloperInfo) => void,

}

const Search: React.FC<SearchProps> = ({ userName, setUserName, setDeveloperInfo }) => {


    const handleSubmit = async () => {
        const devInfo = await getDeveloperInfo(userName);
        setDeveloperInfo(devInfo);
    }

    return (
        <div className='flex justify-between items-center rounded-md gap-2
    shadow-lg p-2 dark:bg-slate-800 dark:text-white'  >
            <img src={iconSearch} alt="Search Icon" />
            <input type="search" name="userName" id="userName" value={userName}
                className='w-full focus:outline-none text-gray-700 dark:bg-slate-800 dark:text-white p-2' placeholder="Search Github username..." onChange={(e) => setUserName(e.target.value)} />

            <input type="button" value="Search" className='rounded-md px-3 py-2 bg-blue-600 text-white text-xs hover:cursor-pointer' onClick={handleSubmit} />

        </div>
    )
}

export default Search