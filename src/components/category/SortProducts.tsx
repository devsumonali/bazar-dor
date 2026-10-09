'use client';

import type { Product } from '@/types/products';
import { useState } from 'react';

interface SortProductsProps {
     products: Product[];
}

const SortProducts = ({ products }: SortProductsProps) => {
     const sortedProducts = [...products].sort((a, b) => {
          if (sortBy === 'low') {
               return a.today - b.today;
          }

          if (sortBy === 'high') {
               return b.today - a.today;
          }

          return 0;
     });
     const [sortBy, setSortBy] = useState('default');
     return (
          <div>
               <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="default">ডিফল্ট</option>
                    <option value="low">দাম কম থেকে বেশি</option>
                    <option value="high">দাম বেশি থেকে কম</option>
               </select>
          </div>
     );
};

export default SortProducts;
