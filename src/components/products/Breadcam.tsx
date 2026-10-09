import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa6';

interface BreadcrumbProps {
     productName: string;
}

const Breadcrumb = ({ productName }: BreadcrumbProps) => {
     return (
          <nav className="mb-5 flex items-center gap-2 text-sm text-base-content/60">
               <Link href="/" className="transition hover:text-primary">
                    হোম
               </Link>

               <FaChevronRight className="text-xs" />

               <Link href="/#all-products" className="transition hover:text-primary">
                    পণ্য
               </Link>

               <FaChevronRight className="text-xs" />

               <span className="font-medium text-base-content">{productName}</span>
          </nav>
     );
};

export default Breadcrumb;
