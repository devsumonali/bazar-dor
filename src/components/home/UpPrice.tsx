import { getProducts } from '@/libs/products';
import { TiArrowSortedUp } from 'react-icons/ti';
import ProductCards from './ProductCards';

const UpPrice = async () => {
     const products = await getProducts();
     return (
          <div className="mt-10 px-4 lg:px-0">
               <div className="container-width">
                    <h2 className="flex gap-2 items-center text-base-content font-bold text-[20px]">
                         <TiArrowSortedUp className="text-error" />
                         আজ দাম বেড়েছে
                    </h2>
                    <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                         {products.map((product) => (
                              <ProductCards key={product.id} product={product} />
                         ))}
                    </div>
               </div>
          </div>
     );
};

export default UpPrice;
