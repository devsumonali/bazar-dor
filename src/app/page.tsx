import AllProducts from '@/components/home/AllProducts';
import Hero from '@/components/home/Hero';
import LowerPrice from '@/components/home/LowerPrice';
import UpPrice from '@/components/home/UpPrice';

export default function Home() {
     return (
          <main>
               <Hero />
               <UpPrice />
               <LowerPrice />
               <AllProducts />
          </main>
     );
}
