import { BASE_URL } from '@/constants/api';
import { Product } from '@/types/products';

export const getProducts = async (): Promise<Product[]> => {
     const res = await fetch(`${BASE_URL}/products`);

     if (!res.ok) {
          throw new Error('Fail to fetch Products');
     }

     return res.json();
};

export const getSingleProduct = async (id: string): Promise<Product> => {
     const res = await fetch(`${BASE_URL}/products/${id}`);

     if (!res.ok) {
          throw new Error('fail to fetch product');
     }

     return res.json();
};
