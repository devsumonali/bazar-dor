import { getProducts } from '@/libs/products';
import ProductCards from '../products/ProductCards';

const AllProducts = async () => {
     const products = await getProducts();
     return (
          <section id="allProducts" className="my-12.5 px-4 lg:px-0">
               <div className="container-width">
                    <h2 className="flex gap-2 items-center text-base-content font-bold text-[20px]">
                         সব পণ্য
                    </h2>
                    <p className="mt-2.5 text-sm text-base-content font-normal">
                         মোট {products.length.toLocaleString('bn-BD')} টি পণ্য দেখানো হচ্ছে
                    </p>
                    <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                         {products.map((product) => (
                              <ProductCards key={product.id} product={product} />
                         ))}
                    </div>
               </div>
          </section>
     );
};

export default AllProducts;
