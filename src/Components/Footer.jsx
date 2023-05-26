import React from 'react';
import GroupLogo from '../assets/Icons/Group 9969.png'

const Footer = () => {
    return (
        <div className='bg-[#1A1919] py-10 min-h-[calc(100%-51px)]'>
            <div className='my-container text-gray-300 divide-y-[1px] divide-gray-500'>
                <div className='grid grid-cols-2 md:grid-cols-6 gap-3'>
                    <div className='col-span-2'>
                        <h1 className='text-xl font-semibold mb-2'>CareerHub</h1>
                        <p className='w-[78%] text-xs'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        <img className='mt-4 w-28' src={GroupLogo} alt="" />
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold mb-2'>Company</h1>
                        <ul className='text-[13px] flex flex-col gap-2'>
                            <li>About Us</li>
                            <li>Work</li>
                            <li>Latest News</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold mb-2'>Product</h1>
                        <ul className='text-[13px] flex flex-col gap-2'>
                            <li>Prototype</li>
                            <li>Plans & Pricing</li>
                            <li>Customers</li>
                            <li>Integrations</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold mb-2'>Support</h1>
                        <ul className='text-[13px] flex flex-col gap-2'>
                            <li>Help Desk</li>
                            <li>Sales</li>
                            <li>Become a Partner</li>
                            <li>Developers</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold mb-2'>Contact</h1>
                        <ul className='text-[13px] flex flex-col gap-2'>
                            <li>524 Broadway , NYC</li>
                            <li>+1 777 - 978 - 5570</li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-between mt-12 mb-10 pt-8 text-xs text-gray-500'>
                    <p>@2023 CareerHub. All Rights Reserved</p>
                    <p>Powered by CareerHub</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;