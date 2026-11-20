// dev-mks/src/components/ProductGrid.tsx

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Product } from '../types';
import ProductComponent from './Product';

const ProductGridContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 20px;
`;

const ProductGrid: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/products');
                setProducts(response.data.products);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <ProductGridContainer>
            {products.map((product) => (
                <ProductComponent key={product.id} product={product} />
            ))}
        </ProductGridContainer>
    );
};

export default ProductGrid;
