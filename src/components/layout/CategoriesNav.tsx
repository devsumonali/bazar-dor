import { getCategories } from '@/libs/categories';
import { Category } from '@/types/category';
import CategoriesMenu from './CategoriesMenu';

const CategoriesNav = async () => {
     let categories: Category[] = [];

     try {
          categories = await getCategories();
     } catch (error) {
          console.error('Failed to fetch categories:', error);
     }

     return (
          <nav>
               {categories.length > 0 ? (
                    <CategoriesMenu categories={categories} />
               ) : (
                    <div className="container-width py-3">
                         <p className="text-sm text-error">
                              ক্যাটাগরি লোড করা যাচ্ছে না। পরে আবার চেষ্টা করুন।
                         </p>
                    </div>
               )}
          </nav>
     );
};

export default CategoriesNav;
