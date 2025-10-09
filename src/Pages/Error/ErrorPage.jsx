import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import ErrorImage from '../../assets/error-404.png';
import { useNavigate } from 'react-router';


const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <>
        <Navbar></Navbar>
        <div className='flex flex-col items-center justify-center'>
            <img className='mt-20' src={ErrorImage}></img>
            <h1 className='text-black text-5xl mt-10 font-bold'>Oops, page not found!</h1>
            <p className='text-gray-500 mt-5'>The page you are looking for is not avaliable.</p>
            <button onClick={()=>navigate('/')} className="px-10 py-2 bg-gradient-to-r from-purple-900 to-purple-500 m-10">Go back!</button>
        </div>
        <Footer></Footer>
        </>
    );
};

export default ErrorPage;