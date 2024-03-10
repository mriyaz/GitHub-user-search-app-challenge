import React from 'react'
import { DateTime } from 'luxon';
import iconLocation from '../assets/icon-location.svg'
import iconTwitter from '../assets/icon-twitter.svg';
import iconWebsite from '../assets/icon-website.svg'
import iconCompany from '../assets/icon-company.svg';
import DeveloperInfo from '../types';



interface UserProfileProps {
    developerInfo: DeveloperInfo | null,
}

const UserProfile: React.FC<UserProfileProps> = ({ developerInfo }) => {

    return (

        developerInfo &&
        <div className='flex flex-col justify-between rounded-md gap-6 shadow-lg 
        px-4 py-8 text-xs dark:bg-slate-800 dark:text-white md:p-8 lg:flex-row 
         lg:justify-between lg:gap-1'>

            <div className='lg:block hidden lg:w-[20%]'>
                <img src={developerInfo.avatar_url} alt="Dev Avatar" className=' rounded-full w-24 ' />
            </div>

            <div className='flex flex-col justify-between  gap-6 lg:w-[80%]'>
                {/* Dev Info Header*/}
                <div className="flex gap-5 items-center md:text-sm ">
                    {/* dev photo */}
                    <img src={developerInfo.avatar_url} alt="Dev Avatar" className='w-1/6 rounded-full md:w-1/4 lg:hidden' />
                    {/* dev info */}
                    <div className="flex flex-col md:gap-1 lg:flex-grow">
                        <div className="lg:flex justify-between items-center lg:gap-10">
                            <span className='font-bold text-sm md:text-xl'>{developerInfo.name}</span>
                            <span className='lg:flex hidden'>Joined {DateTime.fromISO(developerInfo.created_at).toFormat("dd MMMM yyyy")}</span>
                        </div>
                        <span>@{developerInfo.login}</span>
                        <span className='lg:hidden'>Joined {DateTime.fromISO(developerInfo.created_at).toFormat("dd MMMM yyyy")}</span>
                    </div>
                </div>

                {/* Dev Interests  */}
                <div className="flex flex-col gap-2">
                    {/* Interests */}
                    {developerInfo.bio}
                </div>

                {/* Dev Repos & Followers  */}
                <div className="flex flex-row justify-around items-center bg-slate-100 rounded-lg px-2 py-4 dark:bg-slate-950 dark:text-white">

                    {/* Repos  */}
                    <div className='flex flex-col'>
                        <span>Repos</span>
                        <span className='font-bold md:text-xl'>{developerInfo.public_repos}</span>
                    </div>
                    {/* Followers  */}
                    <div className='flex flex-col'>
                        <span>Followers</span>
                        <span className='font-bold md:text-xl'>{developerInfo.followers}</span>
                    </div>
                    {/* Following */}
                    <div className='flex flex-col'>
                        <span>Following</span>
                        <span className='font-bold md:text-xl'>{developerInfo.following}</span>
                    </div>
                </div>

                {/* Dev Location & Social Media  */}
                <div className="flex flex-col gap-4 items-start md:flex-row md:justify-between">
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <img src={iconLocation} alt="Location Icon" />
                            <span>{developerInfo.location ? developerInfo.location : 'Not Available'}</span>
                        </div>

                        <div className="flex gap-4">
                            <img src={iconTwitter} alt="Twitter Icon" />
                            <span>{developerInfo.twitter_username ? developerInfo.twitter_username : 'Not Available'}</span>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <img src={iconWebsite} alt="Website Icon" />
                            {developerInfo.blog ? <a href={developerInfo.blog}>{developerInfo.blog}</a> : 'Not Available'}
                        </div>

                        <div className="flex gap-4">
                            <img src={iconCompany} alt="Company Icon" />
                            <span>{developerInfo.company ? developerInfo.company : 'Not Available'}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserProfile