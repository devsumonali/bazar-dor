import { getProducts } from '@/libs/products';
import { getUnitBn } from '@/utils/getUnitBn';
import { FaArrowDown, FaArrowUp, FaMinus } from 'react-icons/fa';
import MarqueeText from 'react-marquee-text';

const Marque = async () => {
     const products = await getProducts();

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
                                             <FaArrowUp />
                                        ) : isDown ? (
                                             <FaArrowDown />
                                        ) : (
                                             <FaMinus />
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
