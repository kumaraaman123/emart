import React from 'react'
import { LogoFooter, PaymentLogo } from '../assets/index'
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { BsPerson } from "react-icons/bs";
import { BsPaypal } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
    return (
        <div className='bg-black text-[#949494] py-20 px-7 font-titleFont flex flex-row justify-between'>
            <div className='  gap-8 grid grid-cols-4'>
                <div className='flex flex-col gap-5'>
                    <img className='w-20 h-10' src={LogoFooter} alt='LogoFooter' />
                    <p className='text-white text-sm tracking-wide'>@ AjCollection.com</p>
                    <img className='w-56' src={PaymentLogo} alt='PaymentLogo' />
                    <div className='flex flex-row gap-3'>
                        <GitHubIcon className='hover:text-white duration-300 cursor-pointer' />
                        <GoogleIcon className='hover:text-white duration-300 cursor-pointer' />
                        <YouTubeIcon className='hover:text-white duration-300 cursor-pointer' />
                        <FacebookIcon className='hover:text-white duration-300 cursor-pointer' />
                        <TwitterIcon className='hover:text-white duration-300 cursor-pointer' />
                        <InstagramIcon className='hover:text-white duration-300 cursor-pointer' />
                    </div>
                </div>
                <div>
                    <h2 className='text-2x1 font-semibold text-white mb-4'>About Us</h2>
                    <div className='text-base flex flex-col gap-2'>
                        <p>patna bihar</p>
                        <p>Mobile: +91 00003732</p>
                        <p>Phone: 00788928</p>
                        <p>Email: ajcollection1@gmail.com</p>
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl font-semibold text-white 300 mb-4'>Profile</h2>
                    <div className='flex flex-col gap-2 text-base'>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'> <span><BsPerson /></span>My Account</p>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><BsPaypal /></span>Checkout</p>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><FaHome /></span>Order tracking</p>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><MdLocationOn /></span>help & support</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center'>
                    <input className='bg-transparent border px-4 text-sm placeholder="e-mail"' type='text' placeholder="Enter your email" />
                    <button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>Subscribe</button>
                </div>

            </div>
        </div>
    )
}

export default Footer