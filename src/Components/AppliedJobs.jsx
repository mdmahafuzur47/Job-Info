import React, { useEffect, useState } from 'react';
import AppliedJobsCard from './AppliedJobsCard';
import firstlogo from '../assets/All Images/Vector.png'
import shondlogo from '../assets/All Images/Vector-1.png'
import { getShoppingCart } from '../Utilities/fakedb';

const AppliedJobs = () => {
    const [jobData , setjobData]=useState([]);
    useEffect(()=>{
        fetch('/jobFeatured.json')
            .then(res => res.json())
            .then(data => setjobData(data))
    },[])
    

    useEffect(()=>{
        let getDataId = getShoppingCart()
        const savedCard = [];
        for(const id in getDataId){
            const addedCard = jobData.find(pd => pd.id===id);
            if(addedCard){
                savedCard.push(addedCard)
            }
        }
        setCard(savedCard)
    },[jobData])
    const [card, setCard] = useState([]);
    
    const handleRemote = ()=>{
        const remoteCart = card.filter(cd => cd.remoteOrOutsite === 'Remote')
        setCard(remoteCart)
    }
    const handleOutSide = ()=>{
        const outSideCart = card.filter(cd => cd.remoteOrOutsite === 'Outsite')
        setCard(outSideCart)
    }


    return (
        <>
            <div className='bg-gray-50 text-center pt-10 '>
                <img className='absolute top-0 right-0 w-48' src={shondlogo} alt="" />
                <h1 className='text-3xl font-bold -mb-16'>Applied Job</h1>
                <img className='relative top-0 left-0 w-48' src={firstlogo} alt="" />
            </div>
            <div className='md:w-[50vw] mx-auto flex justify-end mt-5 gap-3'>
                <button onClick={handleRemote} className='p-3 border bg-gray-100 rounded-lg text-[15px] font-bold'>Remote</button>
                <button onClick={handleOutSide} className='p-3 border bg-gray-100 rounded-lg text-[15px] font-bold'>OnSite</button>
            </div>
            <div className='md:w-[50vw] mx-auto  flex flex-col gap-5 my-10'>
                {
                    card.map(jdata => <AppliedJobsCard key={jdata.id} jdata={jdata} />)
                }
            </div>
        </>
    );
};

export default AppliedJobs;