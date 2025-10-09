import React from 'react';
import { GoDownload } from "react-icons/go";
import { IoMdStar } from "react-icons/io";

const InstalledApps = ({a,onUninstall}) => {
    const { image,title,ratingAvg,downloads,size,id } = a;
    return (
        <div className='flex items-center bg-white rounded-3xl p-4 justify-between mb-4'>
            <div className='flex items-center gap-4'>
                <img className='w-20 h-20 bg-gray-400 p-2 rounded-3xl' src={image}></img>
                <div className='text-black'>
                    <h1 className='text-2xl font-semibold'>{title}</h1>
                    <div className='flex items-center gap-4'>
                        <p className='flex items-center text-amber-500'><IoMdStar />{ratingAvg}</p>
                        <p className='flex items-center text-green-500'><GoDownload />{downloads}</p>
                        <p className='flex items-center'>{size} MB</p>
                    </div>
                </div>
            </div>
            <button onClick={()=> onUninstall(id)} className='btn bg-green-500 border-0'>Uninstall</button>
        </div>
    );
};

export default InstalledApps;