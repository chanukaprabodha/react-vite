import logo from '../../../assets/images/logo.png'
import cart from '../../../assets/images/shop.png';
import {Link} from "react-router-dom";

export function Navbar() {
    return (
        <div className="navbar flex items-center justify-between px-9 bg-gradient-to-br from-green-100 to-green-50">
            <div className="navbar_logo flex items-center">
                <img src={logo as string} alt="" className='w-16'/>
                <p className="business_name ps-1 tracking-[0.2rem] font-semibold ">GreenHarvest</p>
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
                        <li><Link to={"/shoppingCart"}><img src={cart as string} alt=""
                                                            className='w-12 hover:scale-125 ease-in-out duration-300'/></Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <button
                className="sign-in-btn bg-green-200 border-0 rounded-2xl py-2.5 px-5 text-base cursor-pointer ease delay-75 hover:bg-green-300 font-semibold">
                <Link to="/login">Sign In</Link>
            </button>
        </div>
    );
}