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
          <div className="container-width flex gap-5">
               {categories.map((category) => {
                    const href = `/category/${category.slug}`;

                    const isActive = pathname === href;

                    return (
                         <Link
                              key={category.id}
                              href={href}
                              className={
                                   isActive ? 'font-semibold text-primary' : 'text-base-content'
                              }
                         >
                              {category.icon} {category.nameBn}
                         </Link>
                    );
               })}
          </div>
     );
};

export default CategoriesMenu;
