import React from 'react';
import FetchData from "../../../sanity/FetchData";
import { urlForImage } from '@/sanity/lib/image';

export default async function Page() {
    const data = await FetchData();
    console.log("data",data)
    return (
        <div className='flex gap-5 max-w-6xl m-auto text-black'>
            {data.map((product: any, index: number) => (
                <div className='w-1/4 border border-black p-2' key={index}>
                    <img src={urlForImage(product.image).url()} alt="" className='w-full h-60 object-cover object-top'/>
                    <h1 className='text-3xl font-bold mt-2'>{product.title}</h1>
                    <p>{product.description}</p>
                    <p className='text-lg font-semibold'>Category: {product.category}</p>
                    <p className='text-lg font-semibold'>Price: {product.price}</p>
                </div>
            ))}
        </div>
    );
}
