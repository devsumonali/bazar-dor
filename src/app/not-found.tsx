import Link from 'next/link';

const NotFound = () => {
     return (
          <main className="flex min-h-[70vh] items-center justify-center px-4">
               <div className="text-center">
                    <h1 className="text-7xl font-bold text-primary sm:text-8xl">404</h1>

                    <h2 className="mt-3 text-2xl font-bold text-base-content sm:text-3xl">
                         পেজটি খুঁজে পাওয়া যায়নি
                    </h2>

                    <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-base-content/60 sm:text-base">
                         আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি অথবা লিংকটি সঠিক নয়।
                    </p>

                    <Link
                         href="/"
                         className="mt-6 inline-flex rounded-lg bg-primary px-5 py-2.5 font-medium text-white transition hover:bg-primary-strong"
                    >
                         হোম পেজে ফিরে যান
                    </Link>
               </div>
          </main>
     );
};

export default NotFound;
