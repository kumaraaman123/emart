import React from 'react'
import { gLogo, githublogo } from '../assets'
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth"
//simport { app } from '../firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../redux/bazarSlice';

const Login = () => {
    const auth = getAuth()
    const Provider = new GoogleAuthProvider();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleGoogleLogin = (e) => {
        e.preventDefault()
        signInWithPopup(auth, Provider).then((result) => {
            const User = result.user;
            dispatch(addUser({
                id: User.uid,
                name: User.displayName,
                email: User.email,
                image: User.photoURL
            }))
            setTimeout(() => {
                navigate('/')
            }, 1500)
        }).catch((error) => {
            console.log(error)
        })
    }

    const handleGoogleSignOut = () => {
        signOut(auth)
            .then(() => {
                toast.success("Log Out Successfully");
                dispatch(removeUser());
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className='w-full flex flex-col items-center justify-center gap-10 py-20'>
            <div className='w-full flex items-center justify-center gap-10'>
                <div className='text-base  w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300'>
                    <img className='w-8' src={gLogo} alt='gLogo' />
                    <span onClick={handleGoogleLogin} className='text-xl text-gray-900 '>Sign In with Google</span>
                </div>
                <button onClick={handleGoogleSignOut} className='bg-black text-white text-base py-3 px-8 tracking-wide 
                    rounded-md hover:bg-gray-800 duration-300'>Sign Out</button>
            </div>
            <div className='w-full flex items-center justify-center gap-10'>
                <div className='text-base  w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300'>
                    <img className='w-8' src={githublogo} alt='githublogo' />
                    <span className='text-xl text-gray-900 '>Sign In with Github</span>
                </div>
                <button className='bg-black text-white text-base py-3 px-8 tracking-wide 
                    rounded-md hover:bg-gray-800 duration-300'>Sign Out</button>
            </div>
            <ToastContainer
                position='top-left'
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='dark'
            />

        </div>
    )
}

export default Login;
