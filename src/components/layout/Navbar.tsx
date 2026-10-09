import Image from 'next/image';
import Link from 'next/link';
import CurrentDate from '../shared/CurrentDate';
import CategoriesNav from './CategoriesNav';
import Marque from './Marque';

const Navbar = () => {
     return (
          <header className=" lg:px-0 lg:py-2.5 p-5 bg-white">
               <div className="container-width flex justify-between gap-5">
                    <div className="flex gap-3">
                         <Link href={'/'}>
                              <Image
                                   src={'/images/logo-icon.png'}
                                   alt="log"
                                   width={60}
                                   height={40}
                                   className="bg-primary p-2.5 rounded-xl"
                              />
                         </Link>
                         <div className="space-y-1">
                              <h3 className="font-bold text-[20px] text-base-content">বাজার দর</h3>
                              <p>
                                   <CurrentDate className="text-[16px] text-base-content" />
                              </p>
                         </div>
                    </div>
                    <div className="flex gap-3 items-center">
                         <Link href={'/signin/'}>
                              <button className="text-base-content cursor-pointer font-medium text-sm">
                                   সাইন ইন
                              </button>
                         </Link>
                         <Link href={'/signup/'}>
                              <button className="text-base-100 cursor-pointer font-medium text-sm bg-primary rounded-xl p-3">
                                   সাইন আপ
                              </button>
                         </Link>
                    </div>
               </div>
               <div className="border-y border-base-300 py-3 mt-2.5">
                    <CategoriesNav />
               </div>
               <Marque />
          </header>
     );
};

export default Navbar;
