import UpdateProfileForm from '@/components/profile/UpdateProfile';
import SignOutButton from '@/components/shared/SignOutBtn';
import { auth } from '@/libs/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { FaRegUser } from 'react-icons/fa6';

const ProfilePage = async () => {
     const session = await auth.api.getSession({
          headers: await headers(),
     });

     if (!session) {
          redirect('/signin');
     }

     const user = session.user;

     return (
          <main className="min-h-screen bg-base-200 px-4 py-12">
               <div className="mx-auto max-w-2xl">
                    {/* Header */}
                    <div className="mb-6">
                         <h1 className="text-2xl font-bold text-base-content">আমার প্রোফাইল</h1>
                         <p className="mt-1 text-sm text-base-content/60">
                              আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
                         </p>
                    </div>

                    {/* Profile Card */}
                    <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-base-300 bg-base-100 p-5">
                         <div className="flex items-center gap-3">
                              <div className="flex size-16 items-center justify-center rounded-xl bg-base-200 text-base-content">
                                   <FaRegUser size={28} />
                              </div>

                              <div>
                                   <h2 className="font-semibold text-base-content">{user.name}</h2>
                                   <p className="text-sm text-base-content/60">{user.email}</p>
                              </div>
                         </div>

                         <SignOutButton />
                    </div>

                    {/* Information Card */}
                    <div className="mt-5 rounded-2xl border border-base-300 bg-base-100 p-6 sm:p-8">
                         <h2 className="mb-8 text-lg font-semibold text-base-content">তথ্য</h2>

                         <UpdateProfileForm name={user.name} />
                    </div>
               </div>
          </main>
     );
};

export default ProfilePage;
