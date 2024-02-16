import React from 'react';
import { LogoLight } from '../assets/index';
import { cartimage } from '../assets/index';
import { logo } from '../assets/index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Header = () => {
    const productData = useSelector((state) => state.bazar.productData)
    const UserInfo = useSelector((state) => state.bazar.userInfo)
    console.log(UserInfo);

    return (
        <div className='w-full h-20 bg-white border-b border-gray-800 font-title sticky top-0 z-50'>
            <div className='max-w-screen-x1 h-full mx-auto flex items-center justify-between'>
                <Link to={"/"}><div>
                    <img className='h-20' src={LogoLight} alt='LogoLight' />
                </div>
                </Link>
                <div className='flex items-center gap-8'>
                    <ul className='flex items-center gap-8'>
                        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-{1px} cursor-pointer duration-300'>Home</li>
                        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-{1px} cursor-pointer duration-300'>Products</li>
                        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-{1px} cursor-pointer duration-300'>Contact Us</li>
                        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-{1px} cursor-pointer duration-300'>About</li>
                    </ul>
                    <Link to={"/cart"}>
                        <div className='relative'>
                            <img className='w-10' src={cartimage} alt="cartimage" />
                            <span className='absolute w-10 top-2 left-0 text-sm flex items-center justify-center font-semibold fony-titlefont'>{productData.length}</span>
                        </div>
                    </Link>
                    <Link to={"/Login"}>
                        <img className='w-8 h-8 rounded-full' src={UserInfo ? UserInfo.image : logo} alt='logo' />
                    </Link>
                    {UserInfo && <p className='text-base font-titleFont font-semibold underline underline-offset-2'>{UserInfo.name}</p>}
                </div>
            </div>

        </div>
    );
};

export default Header;
