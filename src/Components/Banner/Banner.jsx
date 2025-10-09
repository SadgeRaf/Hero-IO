import React from 'react';

import BannerImage from '../../assets/hero.png'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { SiAppstore } from "react-icons/si";

const Banner = () => {
    return (
        <div className=''>
            <div className='flex flex-col items-center mt-10'>
                <h1 className='text-5xl text-black font-bold'>We Build</h1>
                <br />
                <h1 className='text-5xl text-black font-bold'><span className='text-purple-700'>Productive</span> Apps</h1>
                <p className='text-center mt-5 text-gray-500'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                    <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex gap-4 mt-4'>
                    <a href="https://play.google.com/store" target="_blank"
                        className="px-4 py-2 border border-gray-500 flex items-center gap-2 text-black rounded-md hover:bg-gray-100 transition">
                        <IoLogoGooglePlaystore />
                        Google Play
                    </a>
                    <a href="https://www.apple.com/app-store/" target="_blank"
                        className="px-4 py-2 border border-gray-500 flex items-center gap-2 text-black rounded-md hover:bg-gray-100 transition">
                        <SiAppstore />
                        App Store
                    </a>
                </div>
                <img className='mt-10' src={BannerImage}></img>
            </div> 
            <div className='w-full bg-gradient-to-r from-purple-900 to-purple-500 flex flex-col items-center p-10'>
               <h1 className='text-5xl font-bold'>Trusted by Millions, Built for You</h1>
               <div className='flex md:flex-row flex-col items-center justify-around mt-8 w-full'>
                <div className='flex flex-col gap-2 items-center'>
                    <p>Total Downloads</p>
                    <p className='text-5xl font-bold'>29.6M</p>
                    <p>21% more than last month</p>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <p>Total Reviews</p>
                    <p className='text-5xl font-bold'>906K</p>
                    <p>46% more than last month</p>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <p>Active Apps</p>
                    <p className='text-5xl font-bold'>132+</p>
                    <p>31 More Will Launch</p>
                </div>
               </div>
            </div>    
        </div>
    );
};

export default Banner;