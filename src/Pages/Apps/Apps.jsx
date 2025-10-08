import React, { Suspense } from 'react';
import App from '../App/App';

const Apps = () => {
    
    const appsPromise = fetch('./data.json').then(res=>res.json());
    
    return (
        <div className='mt-10 max-w-[1440px] mx-auto'>
           <h1 className='text-3xl font-semibold text-black text-center'>Trending Apps</h1>
           <p className='text-gray-500 text-center mt-8 mb-8'>Explore All Trending Apps on the Market developed by us</p>
           
           <Suspense fallback={<span>loading...</span>}>
            {
              <App appPromise={appsPromise}></App> 
            }
           </Suspense>
           
           <button className="btn bg-gradient-to-r from-purple-900 to-purple-500">Show All</button>
        </div>
    );
};

export default Apps;