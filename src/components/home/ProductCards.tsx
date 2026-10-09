import { Product } from '@/types/products';
import { getUnitBn } from '@/utils/getUnitBn';

interface ProductCardsProps {
     product: Product;
}

const ProductCards = ({ product }: ProductCardsProps) => {
     const isUp = product.change.dir === 'up';
     const isDown = product.change.dir === 'down';

     return (
          <div className="rounded-2xl border border-base-300 bg-white p-5">
               <div className="flex items-center gap-4">
                    <div className="flex size-14 items-center justify-center rounded-xl bg-base-200 text-4xl">
                         {product.image}
                    </div>

                    <div>
                         <h3 className="text-[16px] font-bold text-base-content">
                              {product.nameBn}
                         </h3>

                         <p className="text-sm text-base-content font-normal">
                              প্রতি {getUnitBn(product.unit)}
                         </p>
                    </div>
               </div>

               <div className="mt-6">
                    <p className="text-sm text-base-content font-normal">আজকের দাম</p>

                    <div className="mt-1 flex items-end justify-between gap-3">
                         <h4 className="text-[20px] font-bold text-base-content">
                              {product.today.toLocaleString('bn-BD')}{' '}
                              <span className="text-sm text-base-content font-normal">টাকা</span>
                         </h4>

                         <span
                              className={`rounded-full px-3 py-1 text-sm font-semibold ${
                                   isUp
                                        ? 'bg-error/5 text-error'
                                        : isDown
                                          ? 'bg-success/5 text-success'
                                          : 'bg-base-200 text-base-content/60'
                              }`}
                         >
                              {isUp ? '▲' : isDown ? '▼' : '—'}{' '}
                              {Math.abs(product.change.pct).toLocaleString('bn-BD')}%
                         </span>
                    </div>
               </div>
          </div>
     );
};

export default ProductCards;
