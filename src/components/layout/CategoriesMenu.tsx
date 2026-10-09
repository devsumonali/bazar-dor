'use client';

import type { Category } from '@/types/category';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface CategoriesMenuProps {
     categories: Category[];
}

const CategoriesMenu = ({ categories }: CategoriesMenuProps) => {
     const pathname = usePathname();

     return (
          <div className="container-width flex items-center gap-2 overflow-x-auto py-2">
               {categories.map((category) => {
                    const href = `/category/${category.slug}`;
                    const isActive = pathname === href;

                    return (
                         <Link
                              key={category.id}
                              href={href}
                              className={`flex shrink-0 items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                                   isActive
                                        ? 'bg-primary text-base-100'
                                        : 'text-base-content hover:bg-primary/10 hover:text-primary'
                              }`}
                         >
                              <span>{category.icon}</span>
                              <span>{category.nameBn}</span>
                         </Link>
                    );
               })}
          </div>
     );
};

export default CategoriesMenu;
