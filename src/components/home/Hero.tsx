import Image from 'next/image';
import Link from 'next/link';
import CurrentDate from '../shared/CurrentDate';

const Hero = () => {
     return (
          <section className="mt-5 px-4 lg:px-0">
               <div className="container-width border border-base-300 flex flex-col-reverse items-center justify-between gap-8 rounded-2xl bg-white p-5 md:p-8 lg:flex-row lg:gap-10">
                    <div className="flex w-full flex-col gap-4 text-center lg:w-3/5 lg:gap-5 lg:text-left">
                         <CurrentDate className="self-center rounded-[60px] bg-primary/10 px-4 py-2 text-sm font-medium text-primary lg:self-start" />

                         <h1 className="text-2xl font-bold leading-tight text-base-content sm:text-3xl lg:text-4xl">
                              আজকের বাজারের দাম এক নজরে
                         </h1>

                         <p className="text-sm font-medium leading-7 text-base-content sm:text-base lg:max-w-2xl">
                              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
                              বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                         </p>

                         <Link href="/" className="self-center lg:self-start">
                              <button className="cursor-pointer rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-base-100 sm:text-base">
                                   সব পণ্য দেখুন
                              </button>
                         </Link>
                    </div>

                    <div className="flex w-full items-end justify-end lg:w-2/5">
                         <Image
                              src="/images/bazar-hero.png"
                              alt="hero image"
                              width={300}
                              height={300}
                              className="h-auto w-44 sm:w-52 md:w-60 lg:w-70"
                         />
                    </div>
               </div>
          </section>
     );
};

export default Hero;
