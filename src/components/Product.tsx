//dev-mks/src/components/Product.tsx

import React from 'react';
import { Product as ProductType } from '../types';

interface ProductProps {
  product: ProductType;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>R$ {product.price.toFixed(2)}</p>
      <img src={product.image} alt={product.name} />
    </div>
  );
};

export default Product;
