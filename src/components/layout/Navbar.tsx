import Image from 'next/image';
import Link from 'next/link';
import CurrentDate from '../shared/CurrentDate';
import CategoriesNav from './CategoriesNav';
import Marque from './Marque';
import UserInfo from './UserInfo';

const Navbar = () => {
     return (
          <header className="bg-white">
               <div className="container-width flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-0 lg:py-2.5">
                    <div className="flex items-center gap-3">
                         <Link
                              href="/"
                              className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary p-3 sm:size-14"
                         >
                              <Image
                                   src="/images/logo-icon.png"
                                   alt="বাজার দর"
                                   width={40}
                                   height={40}
                                   className="h-auto w-full object-contain"
                              />
                         </Link>

                         <div className="space-y-1">
                              <h3 className="text-lg font-bold text-base-content sm:text-xl">
                                   বাজার দর
                              </h3>

                              <CurrentDate className="text-sm text-base-content sm:text-base" />
                         </div>
                    </div>

                    <div className="flex items-center sm:justify-end">
                         <UserInfo />
                    </div>
               </div>

               <div className="mt-2 border-y border-base-300 py-3">
                    <CategoriesNav />
               </div>

               <Marque />
          </header>
     );
};

export default Navbar;
