import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { image } from '../assets/index';
import { CartItem } from '../Components/Cartitem';
import { ToastContainer, toast } from 'react-toastify';

//import { loadStripe } from '@stripe/stripe-js';
import StripeCheckout from 'react-stripe-checkout'; // Import StripeCheckout
import axios from 'axios';

const Cart = () => {
    const productData = useSelector((state) => state.bazar.productData);
    const userInfo = useSelector((state) => state.bazar.userInfo);
    const [totalAmount, setTotalAmount] = useState("");
    const [payNow, setPayNow] = useState(false);

    useEffect(() => {
        let price = 0;
        productData.forEach(item => {
            price += item.price * item.quantity;
        });
        setTotalAmount(price.toFixed(2));
    }, [productData]);

    const handleCheckout = () => {
        if (userInfo) {
            setPayNow(true);
        } else {
            toast.error("Please Sign In to Checkout");
        }
    }


    const payment = async (token) => {

        await axios.post("http://localhost:8000/pay", {
            amount: totalAmount * 100,
            token: token,
        });

    }
    return (
        <div>
            <img className='w-full h-60 object-cover' src={image} alt='img' />
            <div className='mx-w-screen-xl mx-auto py-20 flex'>
                <CartItem />
                <div className='w-1/3 bg-white py-6 px-4'>
                    <div className="flex flex-col gap-6 border-b border-gray-400 pb-6">
                        <h2 className='text-2xl font-medium'>
                            Cart Total
                        </h2>
                        <p className='flex items-center gap-4 text-base'>
                            Subtotal
                            <span className='font-titleFont font-bold text-lg'>$ {totalAmount}</span>
                        </p>
                        <p className='flex items-start gap-4 text-base'>
                            Shipping
                            <span>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, Veritatis
                            </span>
                        </p>
                    </div>
                    <p className='font-titleFont font-semibold flex justify-between mt-6'>
                        Total <span className='text-xl font-bold'>$ {totalAmount}</span>
                    </p>
                    <button onClick={handleCheckout} className='text-base text-white w-full py-3 mt-6 hover: bg-gray-800 duration-300'>Proceed to Checkout</button>
                    {payNow && (
                        <div className='w-full mt-6 flex items-center justify-center'>

                            <StripeCheckout
                                stripeKey="pk_test_51OiaaaSCo30NW4uF7AH0CjYvnFvKHXmfhcRJZAWfc6dViKowc3vaZI90QhMYB58qEZxX6HqaA40eWN0OpzmMqZ3i00pFPaoY2J"
                                name="emart"
                                amount={totalAmount * 100}
                                label="pay to Aj Collection"
                                description={`Your Payment amount is ${totalAmount}`}
                                email={userInfo.email}
                                token={payment}

                            />

                        </div>
                    )}
                </div>
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

export default Cart; // Ensure Cart component is properly exported
