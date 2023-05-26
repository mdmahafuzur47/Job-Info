import React from 'react';

const JobCategory = ({jobCate}) => {
    const {categoryLogo,categoryName,jobsAvailable} = jobCate;
    return (
        <div className='bg-[#c0c8f730] p-5 rounded-lg shadow-lg'>
            <img className='bg-[#9aa6f75f] p-2 rounded-md' src={categoryLogo} alt="" />
            <h1 className='font-semibold mt-3'>{categoryName}</h1>
            <p className='text-[12px] text-gray-500'>{jobsAvailable}+ Jobs Available</p>
        </div>
    );
};

export default JobCategory;