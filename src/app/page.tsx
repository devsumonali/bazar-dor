import AllProducts from '@/components/home/AllProducts';
import Hero from '@/components/home/Hero';
import LowerPrice from '@/components/home/LowerPrice';
import UpPrice from '@/components/home/UpPrice';
import SocialLoginToast from '@/components/shared/SocialLoginToast';
import { Suspense } from 'react';

export default function Home() {
     return (
          <main>
               <Suspense fallback={null}>
                    <SocialLoginToast />
               </Suspense>
               <Hero />
               <UpPrice />
               <LowerPrice />
               <AllProducts />
          </main>
     );
}
