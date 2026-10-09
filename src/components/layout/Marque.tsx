import { getProducts } from '@/libs/products';
import { Product } from '@/types/products';
import { getUnitBn } from '@/utils/getUnitBn';
import { LuMinus } from 'react-icons/lu';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import MarqueeText from 'react-marquee-text';

const Marque = async () => {
     let products: Product[] = [];
     let hassError = false;

     try {
          products = await getProducts();
     } catch (error) {
          console.error('Failed to fetch products:', error);
          hassError = true;
     }

     if (hassError || products.length === 0) {
          return (
               <div className=" container-width  py-2.5 ">
                    <p className="text-sm text-error">
                         বাজারের দাম লোড করা যাচ্ছে না। পরে আবার চেষ্টা করুন।
                    </p>
               </div>
          );
     }

     return (
          <div className="border-b border-base-300 py-2.5">
               <MarqueeText direction="right" duration={25}>
                    {products.map((product) => {
                         const isUp = product.change.dir === 'up';
                         const isDown = product.change.dir === 'down';

                         return (
                              <span
                                   key={product.id}
                                   className="mx-2.5 inline-flex items-center gap-2"
                              >
                                   <span>{product.image}</span>
                                   <span className="text-[16px] font-medium text-base-content">
                                        {product.nameBn}
                                   </span>
                                   <span>
                                        {product.today.toLocaleString('bn-BD')} টাকা/
                                        {getUnitBn(product.unit)}
                                   </span>
                                   <span
                                        className={
                                             isUp
                                                  ? 'inline-flex items-center gap-1 text-error'
                                                  : isDown
                                                    ? 'inline-flex items-center gap-1 text-success'
                                                    : 'inline-flex items-center gap-1 text-base-content/60'
                                        }
                                   >
                                        {isUp ? (
                                             <TiArrowSortedUp />
                                        ) : isDown ? (
                                             <TiArrowSortedDown />
                                        ) : (
                                             <LuMinus />
                                        )}
                                        {Math.abs(product.change.pct).toLocaleString('bn-BD')}%
                                   </span>
                              </span>
                         );
                    })}
               </MarqueeText>
          </div>
     );
};

export default Marque;
