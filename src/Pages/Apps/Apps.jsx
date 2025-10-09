import React, { Suspense } from 'react';
import App from '../App/App';
import { useNavigate } from 'react-router';
import AnimLoading from '../../Components/Loading/Loading';

const Apps = ({data}) => {
    
    const navigate = useNavigate();
    
    return (
        <div className='mt-10 max-w-[1440px] mx-auto'>
           <h1 className='text-3xl font-semibold text-black text-center'>Trending Apps</h1>
           <p className='text-gray-500 text-center mt-8 mb-8'>Explore All Trending Apps on the Market developed by us</p>
           
           <div className='grid grid-cols-1 md:grid-cols-4 place-items-center gap-8'>
            <Suspense fallback={<AnimLoading></AnimLoading>}>
            {
              data.map((d)=><App key={d.id} d={d}></App>) 
            }
           </Suspense>
           </div>
           
           <div className='flex justify-center mt-8 mb-8'>
            <button onClick={()=>navigate('/Apps')} className="btn bg-gradient-to-r from-purple-900 to-purple-500 hover:scale-105 transition">Show All</button>
           </div>
        </div>
    );
};

export default Apps;