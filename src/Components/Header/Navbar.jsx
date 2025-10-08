import React from 'react';
import HeroImg from '../../assets/logo.png';

const Navbar = () => {
    
    const items =<> <ul className="menu menu-horizontal px-1">
                    <li className='text-black'><a>Home</a></li>
                    <li className='text-black'><a>Apps</a></li>
                    <li className='text-black'><a>Installation</a></li>
                 </ul>
                 </>

    return (
        <div className="navbar bg-white shadow-sm max-w-[1600px] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                           items
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl text-purple-500">
                    <img className='w-6 h-6' src={HeroImg}></img>
                    HERO.IO</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                {
                    items
                }
            </div>
            <div className="navbar-end">
                <a className="btn bg-gradient-to-r from-purple-900 to-purple-500">
                    <img className='w-6 h-6' src={HeroImg}></img>
                    Contribute</a>
            </div>
        </div>
    );
};

export default Navbar;