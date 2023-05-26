import React from 'react';
import { Link } from 'react-router-dom';

const JobFeature = ({ jobFeature }) => {
    const { id, logo, title, Cname, remoteOrOutsite, fullOrPartTime, location, salary } = jobFeature;
    return (
        <div className='bg-gray-100 p-7 border shadow-lg rounded-lg'>
            <img className='w-[40%] h-[23%]' src={logo} alt="" />
            <h1 className='text-xl font-bold mt-2'>{title}</h1>
            <p className='text-gray-500 text-[14px] my-1'>{Cname}</p>
            <div className='flex text-[#7E90FE] my-2 gap-2'>
                <button className='px-4 py-3 bg-[#afb8f639] rounded-lg text-xs font-bold'>{remoteOrOutsite}</button>
                <button className='px-4 py-3 bg-[#afb8f639] rounded-lg text-xs font-bold'>{fullOrPartTime}</button>
            </div>
            <div className='flex justify-between text-[13px] text-gray-600 mt-3'>
                <div className='flex justify-start items-center gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <p>{location}</p>
                </div>
                <div className='flex justify-start items-center gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>Salary:{salary}</p>
                </div>
            </div>
            <span>
                <Link to={`/jobDetails/${id}`}>
                    <button className='btn p-2 mt-4'>View Details</button>
                </Link>
            </span>
        </div>
    );
};

export default JobFeature;