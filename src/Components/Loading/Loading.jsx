import React from 'react';
import image from '../../assets/logo.png'

const AnimLoading = () => {
    return (
        <div className='text-center'>
            <h1 className='text-9xl text-gray-700'>LO<img className='w-24 h-24 animate-spin' src={image} />DING...</h1>
        </div>
    );
};

export default AnimLoading;