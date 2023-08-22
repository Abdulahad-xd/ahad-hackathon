import React, { Key } from 'react';
import Link from 'next/link';
import { urlFor } from '../../sanity/lib/client';


interface Product {
  _id: Key | null | undefined;
  product: {
    image?: string[]; // Change this to match your actual data structure
    name: string;
    slug: {
      current: string;
    };
    price: number;
    // Add other properties of the product
  };
}

const Product: React.FC<Product> = ({ product }) => {
  return (
    <div>
      <Link href={`/product/${product.slug.current}`}>
        <div className='product-card'>
         <p className='product-name'>{product.name}</p>
          <p className='product-price'>${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
