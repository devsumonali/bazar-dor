'use client';

import { useEffect } from 'react';
import { MdOutlineWifiOff } from 'react-icons/md';

interface ErrorPageProps {
     error: Error & { digest?: string };
     reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
     useEffect(() => {
          console.error(error);
     }, [error]);

     return (
          <main className="flex min-h-[70vh] items-center justify-center px-4">
               <div className="max-w-md text-center">
                    <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-error/10">
                         <MdOutlineWifiOff className="text-4xl text-error" />
                    </div>

                    <h1 className="mt-6 text-2xl font-bold text-base-content">
                         তথ্য লোড করা যাচ্ছে না
                    </h1>

                    <p className="mt-3 text-sm leading-7 text-base-content/60">
                         সার্ভারের সাথে সংযোগ করতে সমস্যা হচ্ছে। অনুগ্রহ করে কিছুক্ষণ পর আবার চেষ্টা
                         করুন।
                    </p>

                    <button
                         onClick={() => reset()}
                         className="mt-6 cursor-pointer rounded-lg bg-primary px-6 py-3 font-medium text-white transition hover:bg-primary-strong"
                    >
                         আবার চেষ্টা করুন
                    </button>
               </div>
          </main>
     );
};

export default ErrorPage;
