import UpdateProfileForm from '@/components/profile/UpdateProfile';
import { auth } from '@/libs/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

const UpdateProfilePage = async () => {
     const session = await auth.api.getSession({
          headers: await headers(),
     });

     if (!session) {
          redirect('/signin');
     }

     return (
          <main className="min-h-screen bg-base-200 px-4 py-12">
               <div className="mx-auto max-w-2xl rounded-2xl border border-base-300 bg-base-100 p-6">
                    <h1 className="mb-6 text-xl font-bold text-base-content">তথ্য আপডেট করুন</h1>

                    <UpdateProfileForm name={session.user.name} />
               </div>
          </main>
     );
};

export default UpdateProfilePage;
