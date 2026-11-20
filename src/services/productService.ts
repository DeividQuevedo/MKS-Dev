//dev-mks/src/services/productService.ts

import axios from 'axios';
//
import { Product } from '../types';

const API_URL = 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com';


export const getProducts = async (): Promise<{ products: Product[] }> => {
    try {
        const response = await axios.get(`${API_URL}/api/products`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return { products: [] };
    }
};