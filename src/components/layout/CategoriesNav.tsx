import { getCategories } from '@/libs/categories';
import CategoriesMenu from './CategoriesMenu';

const CategoriesNav = async () => {
     const categories = await getCategories();

     return (
          <nav>
               <CategoriesMenu categories={categories} />
          </nav>
     );
};

export default CategoriesNav;
