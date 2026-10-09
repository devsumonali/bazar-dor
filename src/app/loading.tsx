const Loading = () => {
     return (
          <main className="min-h-screen bg-base-100 px-4 py-8 lg:px-0">
               <div className="container-width animate-pulse">
                    {/* Hero skeleton */}
                    <div className="grid gap-6 rounded-2xl bg-white p-5 lg:grid-cols-[1.4fr_0.6fr] lg:p-8">
                         <div className="space-y-4">
                              <div className="h-9 w-40 rounded-full bg-base-200" />

                              <div className="h-10 w-3/4 rounded-lg bg-base-300" />

                              <div className="space-y-2">
                                   <div className="h-4 w-full rounded bg-base-200" />
                                   <div className="h-4 w-5/6 rounded bg-base-200" />
                                   <div className="h-4 w-2/3 rounded bg-base-200" />
                              </div>

                              <div className="h-11 w-36 rounded-lg bg-base-300" />
                         </div>

                         <div className="flex items-center justify-center">
                              <div className="h-52 w-52 rounded-2xl bg-base-200" />
                         </div>
                    </div>

                    {/* Section title */}
                    <div className="mt-10">
                         <div className="h-7 w-44 rounded bg-base-300" />
                    </div>

                    {/* Product cards */}
                    <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                         {Array.from({ length: 6 }).map((_, index) => (
                              <div
                                   key={index}
                                   className="rounded-2xl border border-base-300 bg-white p-5"
                              >
                                   <div className="flex items-center gap-4">
                                        <div className="size-16 rounded-xl bg-base-200" />

                                        <div className="flex-1 space-y-2">
                                             <div className="h-5 w-2/3 rounded bg-base-300" />
                                             <div className="h-4 w-1/3 rounded bg-base-200" />
                                        </div>
                                   </div>

                                   <div className="mt-6 space-y-2">
                                        <div className="h-4 w-24 rounded bg-base-200" />

                                        <div className="flex items-center justify-between">
                                             <div className="h-7 w-32 rounded bg-base-300" />
                                             <div className="h-7 w-20 rounded-full bg-base-200" />
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          </main>
     );
};

export default Loading;
