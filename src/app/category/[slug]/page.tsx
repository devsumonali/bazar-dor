import ProductCards from '@/components/products/ProductCards';
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
                    {/* Category Header */}
                    <div className="mb-8 flex items-center gap-4 rounded-2xl border border-base-300 bg-base-100 p-5">
                         <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-base-200 text-4xl">
                              {category.categoryIcon}
                         </div>

                         <div>
                              <h1 className="text-xl font-bold text-base-content sm:text-2xl">
                                   {category.categoryNameBn}
                              </h1>

                              <p className="mt-1 text-sm text-base-content/60">
                                   {products.length.toLocaleString('bn-BD')}টি পণ্যের আজকের দাম ও
                                   পরিবর্তন
                              </p>
                         </div>
                    </div>

                    <p className="mb-3 text-sm text-base-content/60">
                         মোট {products.length.toLocaleString('bn-BD')}টি পণ্য দেখানো হচ্ছে
                    </p>
                    {/* Products */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                         {sortedProducts.map((product) => (
                              <ProductCards key={product.id} product={product} />
                         ))}
                    </div>
               </div>
          </section>
     );
};

export default CategoryPage;
