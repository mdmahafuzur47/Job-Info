import React, { useEffect, useState } from 'react';
import person from '../assets/All Images/P3OLGJ1 copy 1.png'
import JobCategory from './JobCategory';
import JobFeature from './JobFeature';

const Home = () => {
    // Job Category DAta Fetch 
    const [jobCategory, setjobCategory] = useState([]);
    useEffect(() => {
        fetch('jobCategory.json')
            .then(res => res.json())
            .then(data => setjobCategory(data))
    }, [])

    // Job Featured Data Load 
    const [jobFeatures, setjobFeature] = useState([]);
    useEffect(() => {
        fetch('jobFeatured.json')
            .then(res => res.json())
            .then(data => setjobFeature(data))
    }, [])
    // See More Jobs 
    const [seeMore, setSeeMore] = useState(false);

    return (
        <div className='bg-gray-50'>
            {/* Hero section  */}
            <section className='my-container flex flex-col md:flex-row items-center mb-5 py-2'>
                <div className='flex-1 p-5 md:px-10'>
                    <h1 className='text-3xl md:text-5xl font-[900] leading-10 md:leading-[58px] tracking-wider	'>One Step<br />Closer To Your<br /><span className='text-[#7E90FE]'>Dream Job</span></h1>
                    <p className='w-[90%] text-[14px] mt-2'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn p-3 my-4'>Get Started</button>
                </div>
                <img className='w-[90%] md:w-[50%]' src={person} alt="" />
            </section>
            {/* Jobs Category Section  */}
            <section className='my-container my-5'>
                <h1 className='text-3xl font-bold text-center'>Job Category List</h1>
                <p className='text-center text-gray-500 text-[13px] mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid grid-cols-2 md:grid-cols-4 justify-center md:p-10 gap-5'>
                    {
                        jobCategory.map(jobCate => <JobCategory key={jobCate.jobsAvailable} jobCate={jobCate} />)
                    }
                </div>
            </section>
            {/* Featured Jobs Section  */}
            <section className='my-container mb-5'>
                <h1 className='text-3xl font-bold text-center'>Featured Jobs</h1>
                <p className='text-center text-gray-500 text-[13px] mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid grid-cols-1 md:grid-cols-2 md:w-[60vw] md:mx-auto my-10 gap-4'>
                    
                    {
                        seeMore ||
                        jobFeatures.slice(0, 4).map(jobFeature => <JobFeature key={jobFeature.id} jobFeature={jobFeature}  />)
                    }
                    {
                        seeMore &&
                        jobFeatures.map(jobFeature => <JobFeature key={jobFeature.id} jobFeature={jobFeature}  />)
                    }

                </div>
                <div className='text-center'>
                    {
                        seeMore || <button onClick={() => setSeeMore(true)} className='btn p-3'>See All Jobs</button> 
                    }
                </div>
            </section>

        </div>
    );
};

export default Home;