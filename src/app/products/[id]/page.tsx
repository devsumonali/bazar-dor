import Breadcrumb from '@/components/products/Breadcam';
import { getSingleProduct } from '@/libs/products';
import { getUnitBn } from '@/utils/getUnitBn';

interface ProductPageProps {
     params: Promise<{ id: string }>;
}

const SingleProductPage = async ({ params }: ProductPageProps) => {
     const { id } = await params;
     const product = await getSingleProduct(id);

     const mins = product.markets.map((market) => market.min);
     const maxs = product.markets.map((market) => market.max);

     const minimumPrice = Math.min(...mins);
     const maximumPrice = Math.max(...maxs);
     const averagePrice = Math.round(
          product.markets.reduce((sum, market) => sum + (market.min + market.max) / 2, 0) /
               product.markets.length,
     );

     const isUp = product.change.dir === 'up';
     const isDown = product.change.dir === 'down';

     const priceDifference = product.today - product.yesterday;

     return (
          <section className="my-8 px-4 lg:my-12 lg:px-0">
               <div className="container-width">
                    <Breadcrumb productName={product.nameBn} />

                    <div className="flex flex-col gap-5 rounded-2xl border border-base-300 bg-base-100 p-5 sm:flex-row sm:items-center sm:justify-between">
                         <div className="flex items-center gap-4">
                              <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-base-200 text-4xl">
                                   {product.image}
                              </div>

                              <div>
                                   <h1 className="text-xl font-bold text-base-content sm:text-2xl">
                                        {product.nameBn}
                                   </h1>

                                   <p className="mt-1 text-sm text-base-content/60">
                                        প্রতি {getUnitBn(product.unit)}
                                   </p>

                                   <p className="mt-2 text-sm text-base-content/70">
                                        {priceDifference > 0
                                             ? `গতকালের তুলনায় আজ দাম বেড়েছে ${priceDifference.toLocaleString('bn-BD')} টাকা`
                                             : priceDifference < 0
                                               ? `গতকালের তুলনায় আজ দাম কমেছে ${Math.abs(priceDifference).toLocaleString('bn-BD')} টাকা`
                                               : 'গতকালের তুলনায় আজ দামে কোনো পরিবর্তন নেই'}
                                   </p>
                              </div>
                         </div>

                         <div className="min-w-28 rounded-xl bg-base-200 p-4 text-center">
                              <p className="text-xs text-base-content/60">আজকের দাম</p>

                              <h2 className="mt-1 text-3xl font-bold text-base-content">
                                   {product.today.toLocaleString('bn-BD')}
                              </h2>

                              <p className="text-xs text-base-content/60">
                                   টাকা / {getUnitBn(product.unit)}
                              </p>

                              <p
                                   className={`mt-1 text-sm font-semibold ${
                                        isUp
                                             ? 'text-error'
                                             : isDown
                                               ? 'text-success'
                                               : 'text-base-content/50'
                                   }`}
                              >
                                   {isUp ? '▲' : isDown ? '▼' : '—'}{' '}
                                   {Math.abs(product.change.pct).toLocaleString('bn-BD')}%
                              </p>
                         </div>
                    </div>

                    {/* Price Summary + Table */}
                    <div className="mt-5 rounded-2xl border border-base-300 bg-base-100 p-5">
                         <h2 className="text-lg font-bold text-base-content">দামের সারসংক্ষেপ</h2>

                         <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                              <div className="rounded-xl border border-base-300 p-4">
                                   <p className="text-sm text-base-content/60">সর্বনিম্ন দাম</p>

                                   <h3 className="mt-2 text-2xl font-bold text-success">
                                        {minimumPrice.toLocaleString('bn-BD')} টাকা
                                   </h3>

                                   <p className="mt-1 text-xs text-base-content/50">
                                        বাজারের মধ্যে সর্বনিম্ন
                                   </p>
                              </div>

                              <div className="rounded-xl border border-base-300 p-4">
                                   <p className="text-sm text-base-content/60">সর্বাধিক দাম</p>

                                   <h3 className="mt-2 text-2xl font-bold text-error">
                                        {maximumPrice.toLocaleString('bn-BD')} টাকা
                                   </h3>

                                   <p className="mt-1 text-xs text-base-content/50">
                                        বাজারের মধ্যে সর্বাধিক
                                   </p>
                              </div>

                              <div className="rounded-xl border border-base-300 p-4">
                                   <p className="text-sm text-base-content/60">গড় দাম</p>

                                   <h3 className="mt-2 text-2xl font-bold text-success">
                                        {averagePrice.toLocaleString('bn-BD')} টাকা
                                   </h3>

                                   <p className="mt-1 text-xs text-base-content/50">
                                        গড় বাজার মূল্য
                                   </p>
                              </div>
                         </div>

                         <h2 className="mt-8 text-lg font-bold text-base-content">
                              বাজারভিত্তিক আজকের দাম
                         </h2>

                         <div className="mt-4 overflow-x-auto rounded-xl border border-base-300">
                              <table className="w-full min-w-175 border-collapse text-left">
                                   <thead className="bg-base-200">
                                        <tr>
                                             <th className="px-4 py-3 text-sm font-semibold">
                                                  বাজার
                                             </th>

                                             <th className="px-4 py-3 text-sm font-semibold">
                                                  বিভাগ
                                             </th>

                                             <th className="px-4 py-3 text-right text-sm font-semibold">
                                                  সর্বনিম্ন
                                             </th>

                                             <th className="px-4 py-3 text-right text-sm font-semibold">
                                                  সর্বাধিক
                                             </th>

                                             <th className="px-4 py-3 text-right text-sm font-semibold">
                                                  গড়
                                             </th>
                                        </tr>
                                   </thead>

                                   <tbody>
                                        {product.markets.map((market, index) => {
                                             const average = Math.round(
                                                  (market.min + market.max) / 2,
                                             );

                                             return (
                                                  <tr
                                                       key={`${market.market}-${market.division}`}
                                                       className={`border-t border-base-300 ${
                                                            index % 2 === 0
                                                                 ? 'bg-base-100'
                                                                 : 'bg-primary/5'
                                                       }`}
                                                  >
                                                       <td className="px-4 py-3 text-sm">
                                                            {market.market}
                                                       </td>
                                                       <td className="px-4 py-3 text-sm">
                                                            {market.division}
                                                       </td>
                                                       <td className="px-4 py-3 text-right text-sm">
                                                            {market.min.toLocaleString('bn-BD')}{' '}
                                                            টাকা
                                                       </td>
                                                       <td className="px-4 py-3 text-right text-sm">
                                                            {market.max.toLocaleString('bn-BD')}{' '}
                                                            টাকা
                                                       </td>
                                                       <td className="px-4 py-3 text-right text-sm font-semibold">
                                                            {average.toLocaleString('bn-BD')} টাকা
                                                       </td>
                                                  </tr>
                                             );
                                        })}
                                   </tbody>
                              </table>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default SingleProductPage;
