// import './Navbar.css';
import logo from '../../../assets/image-KCATEY2K5GAQ24MXWR2Kk92EJfS8y1.png'
import {Link} from "react-router-dom";
import * as React from 'react';

export function Navbar() {
    return (
        <div className="navbar flex items-center justify-between px-9 bg-[#333] text-white">
            <div className="navbar_logo flex items-center">
                <img src={logo as string} alt="" className='w-16'/>
                <p className="business_name ps-1 tracking-[0.5rem] ">Pine Shop</p>
            </div>
            <div className="navbar_links">
                <nav>
                    <ul className='flex items-center gap-8 '>
                        <li className='hover:text-[#dad7cb]'>
                            <Link to="/">Home</Link>
                        </li>
                        <li className='hover:text-[#dad7cb]'>
                            <Link to="/about">About</Link>
                        </li>
                        <li className='hover:text-[#dad7cb]'>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <button
                className="sign-in-btn bg-[#4a90e2] border-0 rounded-2xl py-2.5 px-5 text-base cursor-pointer ease delay-75 hover:bg-[#357ab8] font-bold">
                <Link to="/login">Sign In</Link>
            </button>
        </div>
    );
}