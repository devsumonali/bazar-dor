'use client';

import { authClient } from '@/libs/auth-client';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const UpdateProfileForm = ({ name }: { name: string }) => {
     const router = useRouter();

     const handleUpdate = async (event: React.SubmitEvent<HTMLFormElement>) => {
          event.preventDefault();

          const formData = new FormData(event.currentTarget);
          const newName = (formData.get('name') as string).trim();

          if (!newName) {
               toast.error('নাম লিখুন!');
               return;
          }

          const { error } = await authClient.updateUser({
               name: newName,
          });

          if (error) {
               toast.error(error.message || 'নাম আপডেট করতে সমস্যা হয়েছে!');
               return;
          }

          toast.success('নাম সফলভাবে আপডেট হয়েছে!');
          router.refresh();
     };

     return (
          <form onSubmit={handleUpdate} className="space-y-4">
               <div>
                    <label
                         htmlFor="name"
                         className="mb-2 block text-sm font-medium text-base-content"
                    >
                         নাম
                    </label>

                    <input
                         id="name"
                         name="name"
                         type="text"
                         defaultValue={name}
                         required
                         className="w-full rounded-lg border border-base-300 bg-transparent px-4 py-3 text-sm text-base-content outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                    />
               </div>

               <button
                    type="submit"
                    className="w-full cursor-pointer rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-base-100"
               >
                    আপডেট
               </button>
          </form>
     );
};

export default UpdateProfileForm;
