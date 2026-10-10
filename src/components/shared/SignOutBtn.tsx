'use client';

import { authClient } from '@/libs/auth-client';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { FiLogOut } from 'react-icons/fi';

const SignOutButton = () => {
     const router = useRouter();

     const handleSignOut = async () => {
          const { error } = await authClient.signOut();

          if (error) {
               toast.error(error.message || 'সাইন আউট করতে সমস্যা হয়েছে!');
               return;
          }

          toast.success('সফলভাবে সাইন আউট হয়েছে!');

          router.replace('/');
          router.refresh();
     };

     return (
          <button
               onClick={handleSignOut}
               type="button"
               className="flex cursor-pointer items-center gap-2 rounded-lg border border-error px-3 py-2 text-sm text-error transition hover:bg-error/5"
          >
               <FiLogOut />
               সাইন আউট
          </button>
     );
};

export default SignOutButton;
