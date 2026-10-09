import { getProducts } from '@/libs/products';
import { TiArrowSortedDown } from 'react-icons/ti';
import ProductCards from '../products/ProductCards';

const LowerPrice = async () => {
     const products = await getProducts();
     const fallers = products
          .filter((product) => product.change.dir === 'down')
          .sort((a, b) => a.change.pct - b.change.pct)
          .slice(0, 6);
     return (
          <section className="mt-10 px-4 lg:px-0">
               <div className="container-width">
                    <h2 className="flex gap-2 items-center text-base-content font-bold text-[20px]">
                         <TiArrowSortedDown className="text-primary" />
                         আজ দাম কমেছে
                    </h2>
                    <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                         {fallers.map((product) => (
                              <ProductCards key={product.id} product={product} />
                         ))}
                    </div>
               </div>
          </section>
     );
};

export default LowerPrice;
