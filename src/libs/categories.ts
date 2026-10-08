import { BASE_URL } from '@/constants/api';
import { Category } from '@/types/category';

export async function getCategories(): Promise<Category[]> {
     const res = await fetch(`${BASE_URL}/categories`);

     if (!res.ok) {
          throw new Error('Fail to fetch categories');
     }

     return res.json();
}
