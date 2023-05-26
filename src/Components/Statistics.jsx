import React from 'react';
import { useLoaderData } from 'react-router-dom';
import firstlogo from '../assets/All Images/Vector.png'
import shondlogo from '../assets/All Images/Vector-1.png'
import { Pie, PieChart, Tooltip, } from 'recharts';


const Statistics = () => {
    const data = useLoaderData();
    let total = 0;
    for(const mark of data){
        total = total + mark.marks;
    }
    let avgMark = (total/8).toFixed(2);
    return (
        <>
            <div className='bg-gray-50 text-center pt-10'>
                <img className='absolute top-0 right-0 w-48' src={shondlogo} alt="" />
                <h1 className='text-3xl font-bold -mb-16'>My Assignment Chart</h1>
                <img className='relative top-0 left-0 w-48 -z-10' src={firstlogo} alt="" />
            </div>
            <div className='flex flex-col md:flex-row justify-center my-20 items-center'>
                <PieChart width={350} height={250}>
                    <Pie data={data} dataKey="total" nameKey="name" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={data} dataKey="marks" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={90} fill="#82ca9d" label />
                    <Tooltip />
                </PieChart>
                <h1 className='text-center text-2xl text-gray-500 font-bold mb-5'>Average Mark is : {avgMark}</h1>
            </div>
            
        </>
    );
};

export default Statistics;