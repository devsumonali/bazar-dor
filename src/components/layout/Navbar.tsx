import Image from 'next/image';
import Link from 'next/link';
import CurrentDate from '../shared/CurrentDate';
import CategoriesNav from './CategoriesNav';
import Marque from './Marque';
import UserInfo from './UserInfo';

const Navbar = () => {
     return (
          <header className=" lg:px-0 lg:py-2.5 p-5 bg-white">
               <div className="container-width flex flex-col lg:flex-row justify-between gap-5">
                    <div className="flex gap-3">
                         <Link
                              href="/"
                              className="flex size-14 items-center justify-center rounded-xl bg-primary p-3"
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
                              <h3 className="font-bold text-[20px] text-base-content">বাজার দর</h3>
                              <p>
                                   <CurrentDate className="text-[16px] text-base-content" />
                              </p>
                         </div>
                    </div>
                    <UserInfo />
               </div>
               <div className="border-y border-base-300 py-3 mt-2.5">
                    <CategoriesNav />
               </div>

               <Marque />
          </header>
     );
};

export default Navbar;
