const Loading = () => {
     return (
          <main className="px-4 py-6 lg:px-0">
               <div className="container-width animate-pulse">
                    {/* Breadcrumb */}
                    <div className="mb-5 flex gap-2">
                         <div className="h-3 w-10 rounded bg-base-200" />
                         <div className="h-3 w-3 rounded bg-base-200" />
                         <div className="h-3 w-16 rounded bg-base-200" />
                         <div className="h-3 w-3 rounded bg-base-200" />
                         <div className="h-3 w-24 rounded bg-base-200" />
                    </div>

                    {/* Product summary card */}
                    <div className="flex items-center justify-between gap-5 rounded-2xl border border-base-300 bg-white p-5">
                         <div className="flex items-center gap-4">
                              <div className="size-16 rounded-xl bg-base-200" />

                              <div className="space-y-2">
                                   <div className="h-6 w-40 rounded bg-base-300" />

                                   <div className="h-3 w-24 rounded bg-base-200" />

                                   <div className="h-3 w-52 rounded bg-base-200" />
                              </div>
                         </div>

                         <div className="w-24 rounded-xl bg-base-200 p-4">
                              <div className="mx-auto h-3 w-14 rounded bg-base-300" />

                              <div className="mx-auto mt-3 h-8 w-10 rounded bg-base-300" />

                              <div className="mx-auto mt-2 h-3 w-12 rounded bg-base-300" />

                              <div className="mx-auto mt-2 h-4 w-10 rounded bg-base-300" />
                         </div>
                    </div>

                    {/* Details section */}
                    <div className="mt-5 rounded-2xl border border-base-300 bg-white p-5">
                         {/* Price summary */}
                         <div className="mb-5 h-5 w-32 rounded bg-base-300" />

                         <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                              {Array.from({ length: 3 }).map((_, index) => (
                                   <div
                                        key={index}
                                        className="rounded-xl border border-base-300 p-4"
                                   >
                                        <div className="h-3 w-16 rounded bg-base-200" />

                                        <div className="mt-3 h-6 w-20 rounded bg-base-300" />

                                        <div className="mt-2 h-3 w-24 rounded bg-base-200" />
                                   </div>
                              ))}
                         </div>

                         {/* Market table title */}
                         <div className="mt-7 mb-4 h-5 w-44 rounded bg-base-300" />

                         {/* Table */}
                         <div className="overflow-hidden rounded-xl border border-base-300">
                              {/* Table header */}
                              <div className="grid grid-cols-5 gap-4 border-b border-base-300 bg-base-200/50 px-4 py-3">
                                   {Array.from({ length: 5 }).map((_, index) => (
                                        <div key={index} className="h-3 w-16 rounded bg-base-300" />
                                   ))}
                              </div>

                              {/* Table rows */}
                              {Array.from({ length: 10 }).map((_, index) => (
                                   <div
                                        key={index}
                                        className="grid grid-cols-5 gap-4 border-b border-base-300 px-4 py-3 last:border-b-0"
                                   >
                                        <div className="h-3 w-24 rounded bg-base-200" />
                                        <div className="h-3 w-20 rounded bg-base-200" />
                                        <div className="h-3 w-16 rounded bg-base-200" />
                                        <div className="h-3 w-16 rounded bg-base-200" />
                                        <div className="h-3 w-16 rounded bg-base-200" />
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>
          </main>
     );
};

export default Loading;
