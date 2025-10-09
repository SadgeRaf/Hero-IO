import React from 'react';
import { IoMdStarHalf } from "react-icons/io";
import { PiDownloadSimple } from "react-icons/pi";
import { Link } from 'react-router';

const App = ({d}) => {
    
    const { image, title, id, ratingAvg, downloads } = d;
    
    return (
        <Link to={`/Apps/${id}`}>
         <div className="card bg-white w-full max-w-[22rem] md:w-96 shadow-sm p-4">
            <figure className='bg-[#D9D9D9] p-4 w-3/4 mx-auto'>
                <img className='w-[200px] h-[200px]'
                    src={image}/>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-black">
                    {title}
                </h2>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline bg-amber-200 text-amber-600"><IoMdStarHalf />{ratingAvg}</div>
                    <div className="badge badge-outline bg-green-200 text-green-600"><PiDownloadSimple />{downloads}</div>
                </div>
            </div>
         </div>
        </Link>
    );
};

export default App;