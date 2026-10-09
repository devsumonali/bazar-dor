import SortProducts from '@/components/category/SortProducts';
import { getCategoriProducts } from '@/libs/categories';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
     params: Promise<{
          slug: string;
     }>;
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
     const { slug } = await params;

     const products = await getCategoriProducts(slug);

     if (!products.length) {
          notFound();
     }

     const category = products[0];

     return (
          <section className="my-8 px-4 lg:px-0">
               <div className="container-width">
                    <div className="mb-8 flex items-center gap-4 rounded-2xl border border-base-300 bg-base-100 p-5">
                         <div className="flex size-16 items-center justify-center rounded-xl bg-base-200 text-4xl">
                              {category.categoryIcon}
                         </div>

                         <div>
                              <h1 className="text-xl font-bold sm:text-2xl">
                                   {category.categoryNameBn}
                              </h1>

                              <p className="text-sm text-base-content/60">
                                   মোট {products.length.toLocaleString('bn-BD')}টি পণ্য
                              </p>
                         </div>
                    </div>

                    <SortProducts products={products} />
               </div>
          </section>
     );
};

export default CategoryPage;
