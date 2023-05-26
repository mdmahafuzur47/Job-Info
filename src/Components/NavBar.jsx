import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars4Icon } from '@heroicons/react/24/solid'

const NavBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='bg-gray-50'>
            <nav className='my-container flex justify-between py-5 items-center'>
                <h1 className='text-4xl font-bold italic'>Job<span className='text-[#8be111] text-3xl'>Info</span></h1>
                <div className='hidden md:block'>
                    <ul className='flex gap-4 text-md font-semibold'>
                        <li>
                            <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-[#5b71fc]' : ''}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/appliedJobs'} className={({ isActive }) => isActive ? 'text-[#5b71fc]' : ''}>Applied Jobs</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/statistics'} className={({ isActive }) => isActive ? 'text-[#5b71fc]' : ''}>Statistics</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/blog'} className={({ isActive }) => isActive ? 'text-[#5b71fc]' : ''}>Blog</NavLink>
                        </li>
                    </ul>
                </div>
                <div onClick={() => setOpen(!open)} className='md:hidden z-10 '>
                    <Bars4Icon className='w-7 h-7' />
                </div>
                {
                    open && (
                        <div className='absolute top-[56px] right-1 bg-gray-100 p-5 rounded-lg z-10 md:hidden'>
                            <ul className='flex flex-col gap-4 text-md font-semibold md:hidden'>
                                <li>
                                    <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-[#5b71fc]' : ''}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/appliedJobs'} className={({ isActive }) => isActive ? 'text-[#5b71fc]' : ''}>Applied Jobs</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/statistics'} className={({ isActive }) => isActive ? 'text-[#5b71fc]' : ''}>Statistics</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/blog'} className={({ isActive }) => isActive ? 'text-[#5b71fc]' : ''}>Blog</NavLink>
                                </li>
                            </ul>
                            <button className='btn p-2 mt-3'>Star Applying</button>
                        </div>
                    )
                }
                <button className='btn p-3 hidden md:block'>Star Applying</button>
            </nav>
        </div>
    );
};

export default NavBar;