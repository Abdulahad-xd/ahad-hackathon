import React from 'react';
import Link from 'next/link';
//import { urlFor } from '../../sanity/lib/client';

interface ProductProps {
  allproducts: {
    image: string[]; // You can specify the actual type of image if you have it
    name: string;
    slug: {
      current: string;
    };
    tags: string[];
    price: number;
    // Add other properties of the product
  };
}

const AllProducts: React.FC<ProductProps> = ({ allproducts }) => {
  return (
    <div>
      <Link href={`/product/${allproducts.slug.current}`}>
      <div className='Allproduct-card'>
          {allproducts.image && allproducts.image[0]}
           <p className='Allproduct-name'>{allproducts.name}</p>
          <p className='Allproduct-tags'>{allproducts.tags.join(', ')}</p>
          <p className='Allproduct-price'>${allproducts.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default AllProducts;
