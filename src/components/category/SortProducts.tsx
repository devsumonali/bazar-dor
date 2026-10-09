'use client';

import ProductCards from '@/components/products/ProductCards';
import type { Product } from '@/types/products';
import { useState } from 'react';

interface SortProductsProps {
     products: Product[];
}

const SortProducts = ({ products }: SortProductsProps) => {
     const [sortBy, setSortBy] = useState('default');

     const sortedProducts = [...products].sort((a, b) => {
          if (sortBy === 'low') {
               return a.today - b.today;
          }

          if (sortBy === 'high') {
               return b.today - a.today;
          }

          return 0;
     });

     return (
          <section>
               <div className="flex items-center gap-5 justify-end w-full rounded-2xl border border-base-300 bg-white p-5 ">
                    <span className="text-sm text-base-content">সাজান</span>
                    <select
                         value={sortBy}
                         onChange={(e) => setSortBy(e.target.value)}
                         className="rounded-lg border border-base-300 bg-base-100 px-4 py-2 text-sm text-base-content outline-none focus:border-primary"
                    >
                         <option value="default">ডিফল্ট</option>
                         <option value="low">দাম কম থেকে বেশি</option>
                         <option value="high">দাম বেশি থেকে কম</option>
                    </select>
               </div>

               <p className="my-5 text-sm text-base-content/60">
                    মোট {products.length.toLocaleString('bn-BD')}টি পণ্য দেখানো হচ্ছে
               </p>

               <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {sortedProducts.map((product) => (
                         <ProductCards key={product.id} product={product} />
                    ))}
               </div>
          </section>
     );
};

export default SortProducts;
