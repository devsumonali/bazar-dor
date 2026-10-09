import { BASE_URL } from '@/constants/api';
import { Category } from '@/types/category';
import { Product } from '@/types/products';

export async function getCategories(): Promise<Category[]> {
     const res = await fetch(`${BASE_URL}/categories`);

     if (!res.ok) {
          throw new Error('Fail to fetch categories');
     }

     return res.json();
}

export const getCategoriProducts = async (slug: string): Promise<Product[]> => {
     const res = await fetch(`${BASE_URL}/products?category=${slug}`);

     if (!res.ok) {
          throw new Error('Fail to fecth Category');
     }

     return res.json();
};
