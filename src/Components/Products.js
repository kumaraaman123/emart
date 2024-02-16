import React from 'react';
import ProductsCard from './ProductsCard';

const Products = ({ products }) => {

    return (
        <div className='py-8'>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>Shopping everyday</h1>
                <span className='w-20 h-3 bg-black'></span>
                <p className="max-w-[700px] text-gray-600 text-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-8'>
                {products.map((item) => (
                    <ProductsCard key={item._id} product={item} />
                ))}
            </div>

        </div>
    );
};

export default Products;
