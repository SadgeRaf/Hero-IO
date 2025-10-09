import React from 'react';
import image from "../../assets/App-Error.png"


const NotFound = () => {
    
    return (
        <div className='flex flex-col items-center'>
            <img src={image}></img>
            <h1 className='mt-8 text-5xl text-black font-bold'>OPPS!! APP NOT FOUND</h1>
            <p className='text-gray-600 mt-5'>The App you are requesting is not found on our system.  please try another apps</p>
            <Link to="/" className="px-6 py-2 bg-gradient-to-r from-purple-900 to-purple-500 text-white rounded-md hover:scale-105 transition">
             Go Back
            </Link>
        </div>
    );
};

export default NotFound;