// import './Footer.css';
import logo from '../../../assets/image-KCATEY2K5GAQ24MXWR2Kk92EJfS8y1.png';

export function Footer() {
    return (
        <div className='footer flex items-center justify-center bg-[#333] py-4 px-2.5 text-center text-[#dad7cb] font-mono  w-full'>
           copyright &copy; 2025 CKAY All rights reserved.
            <img src={logo as string} alt="logo" className='w-10'/>
            <p>Pine Shop</p>
        </div>
    );
}