'use client';
import { authClient } from '@/libs/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SignUpPage = () => {
     const router = useRouter();
     const onSubmitHandle = async (event: React.SubmitEvent<HTMLFormElement>) => {
          event.preventDefault();

          const formData = new FormData(event.currentTarget);

          const name = formData.get('name') as string;
          const email = formData.get('email') as string;
          const password = formData.get('password') as string;
          const confirmPassword = formData.get('confirmPassword') as string;

          // Password matching
          if (password !== confirmPassword) {
               toast.error('পাসওয়ার্ড দুটি মিলছে না!');
               return;
          }

          // BetterAuth signup
          const { data, error } = await authClient.signUp.email({
               name,
               email,
               password,
          });

          if (error) {
               toast.error(error.message || 'অ্যাকাউন্ট তৈরি করতে সমস্যা হয়েছে!');
               return;
          }

          if (data) {
               toast.success('অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে!');
               router.push('/signin');
          }
     };

     const handleGoogleSignIn = async () => {
          const { error } = await authClient.signIn.social({
               provider: 'google',
          });

          if (error) {
               toast.error(error.message || 'সাইন ইন করতে সমস্যা হয়েছে!');
               return;
          }
     };

     const handleGithubSignIn = async () => {
          const { error } = await authClient.signIn.social({
               provider: 'github',
               callbackURL: '/',
          });

          if (error) {
               toast.error(error.message || 'সাইন ইন করতে সমস্যা হয়েছে!');
               return;
          }
     };

     return (
          <main className="min-h-screen bg-base-200 px-4 py-10 sm:py-14">
               <div className="mx-auto w-full max-w-md">
                    {/* Header */}
                    <div className="mb-6 text-center">
                         <h1 className="text-2xl font-bold text-base-content">
                              অ্যাকাউন্ট তৈরি করুন
                         </h1>

                         <p className="mt-2 text-sm text-base-content/60">
                              বিনা খরচে সহজে অ্যাপ করে সব বিস্তারিত দাম দেখুন।
                         </p>
                    </div>

                    {/* Register Form */}
                    <div className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm sm:p-7">
                         <form onSubmit={onSubmitHandle} className="space-y-4">
                              {/* Name */}
                              <div>
                                   <label
                                        htmlFor="name"
                                        className="mb-1.5 block text-sm font-medium"
                                   >
                                        নাম
                                   </label>

                                   <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="যেমন: রহিম উদ্দিন"
                                        autoComplete="name"
                                        required
                                        className="w-full rounded-lg border border-base-300 bg-transparent px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                                   />
                              </div>

                              {/* Email */}
                              <div>
                                   <label
                                        htmlFor="email"
                                        className="mb-1.5 block text-sm font-medium"
                                   >
                                        ইমেইল
                                   </label>

                                   <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        autoComplete="email"
                                        required
                                        className="w-full rounded-lg border border-base-300 bg-transparent px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                                   />
                              </div>

                              {/* Password */}
                              <div>
                                   <label
                                        htmlFor="password"
                                        className="mb-1.5 block text-sm font-medium"
                                   >
                                        পাসওয়ার্ড
                                   </label>

                                   <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="কমপক্ষে ৮ অক্ষর"
                                        autoComplete="new-password"
                                        minLength={8}
                                        required
                                        className="w-full rounded-lg border border-base-300 bg-transparent px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                                   />
                              </div>

                              {/* Confirm Password */}
                              <div>
                                   <label
                                        htmlFor="confirmPassword"
                                        className="mb-1.5 block text-sm font-medium"
                                   >
                                        পাসওয়ার্ড নিশ্চিত করুন
                                   </label>

                                   <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="আবার লিখুন"
                                        autoComplete="new-password"
                                        minLength={8}
                                        required
                                        className="w-full rounded-lg border border-base-300 bg-transparent px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                                   />
                              </div>

                              {/* Submit Button */}
                              <button
                                   type="submit"
                                   className="w-full cursor-pointer rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-base-100 shadow-sm transition hover:opacity-90 active:scale-[0.99]"
                              >
                                   অ্যাকাউন্ট তৈরি করুন
                              </button>
                         </form>

                         {/* Divider */}
                         <div className="my-5 flex items-center gap-3">
                              <div className="h-px flex-1 bg-base-300" />
                              <span className="text-xs text-base-content/60">অথবা</span>
                              <div className="h-px flex-1 bg-base-300" />
                         </div>

                         {/* Social Login */}
                         <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                              <button
                                   onClick={handleGoogleSignIn}
                                   type="button"
                                   className="flex items-center cursor-pointer justify-center gap-2 rounded-lg border border-base-300 px-3 py-2.5 text-sm font-medium transition hover:bg-base-200"
                              >
                                   <FcGoogle size={18} />
                                   Google দিয়ে চালিয়ে যান
                              </button>

                              <button
                                   onClick={handleGithubSignIn}
                                   type="button"
                                   className="flex items-center justify-center cursor-pointer gap-2 rounded-lg border border-base-300 px-3 py-2.5 text-sm font-medium transition hover:bg-base-200"
                              >
                                   <FaGithub size={18} />
                                   GitHub দিয়ে চালিয়ে যান
                              </button>
                         </div>

                         {/* Login Link */}
                         <p className="mt-5 text-center text-sm text-base-content/70">
                              অ্যাকাউন্ট আছে?{' '}
                              <Link
                                   href="/signin"
                                   className="font-semibold text-primary hover:underline"
                              >
                                   সাইন ইন করুন
                              </Link>
                         </p>
                    </div>

                    {/* Back Home */}
                    <div className="mt-6 text-center">
                         <Link
                              href="/"
                              className="text-sm text-base-content/60 transition hover:text-primary"
                         >
                              ← হোম পেজে ফিরে যান
                         </Link>
                    </div>
               </div>
          </main>
     );
};

export default SignUpPage;
