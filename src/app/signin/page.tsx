'use client';
import { authClient } from '@/libs/auth-client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SignInPage = () => {
     const searchParams = useSearchParams();
     const callbackUrl = searchParams.get('callbackUrl') || '/';
     const reason = searchParams.get('reason');
     const [isLoading, setIsLoading] = useState(false);
     const [socialLoading, setSocialLoading] = useState<'google' | 'github' | null>(null);
     const oauthError = searchParams.get('oauthError');

     useEffect(() => {
          if (reason === 'login-required') {
               toast.error('পণ্যের বিস্তারিত দেখতে আগে সাইন ইন করুন!', {
                    id: 'login-required',
               });
          }

          if (oauthError === 'true') {
               toast.error('Social Login ব্যর্থ হয়েছে! আবার চেষ্টা করুন।', {
                    id: 'oauth-error',
               });
          }
     }, [reason, oauthError]);

     const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
          e.preventDefault();

          const formData = new FormData(e.currentTarget);

          const user = Object.fromEntries(formData.entries()) as {
               email: string;
               password: string;
          };

          setIsLoading(true);

          try {
               const { data, error } = await authClient.signIn.email({
                    ...user,
                    callbackURL: callbackUrl,
               });

               if (error) {
                    toast.error(error.message || 'সাইন ইন করতে সমস্যা হয়েছে!');
                    return;
               }

               if (data) {
                    toast.success('সফলভাবে সাইন ইন হয়েছে!');
               }
          } finally {
               setIsLoading(false);
          }
     };

     const handleGoogleSignIn = async () => {
          setSocialLoading('google');

          try {
               const { error } = await authClient.signIn.social({
                    provider: 'google',
                    callbackURL: `${callbackUrl}${callbackUrl.includes('?') ? '&' : '?'}socialLogin=success`,
                    errorCallbackURL: '/signin?oauthError=true',
               });

               if (error) {
                    toast.error(error.message || 'Google সাইন ইন করতে সমস্যা হয়েছে!');
               }
          } catch {
               toast.error('Google সাইন ইন করতে সমস্যা হয়েছে!');
          } finally {
               setSocialLoading(null);
          }
     };

     const handleGithubSignIn = async () => {
          setSocialLoading('github');

          try {
               const { error } = await authClient.signIn.social({
                    provider: 'github',
                    callbackURL: `${callbackUrl}${callbackUrl.includes('?') ? '&' : '?'}socialLogin=success`,
                    errorCallbackURL: '/signin?oauthError=true',
               });

               if (error) {
                    toast.error(error.message || 'GitHub সাইন ইন করতে সমস্যা হয়েছে!');
               }
          } catch {
               toast.error('GitHub সাইন ইন করতে সমস্যা হয়েছে!');
          } finally {
               setSocialLoading(null);
          }
     };

     return (
          <main className="min-h-screen bg-base-200 px-4 py-10 sm:py-14">
               <div className="mx-auto w-full max-w-md">
                    {/* Header */}
                    <div className="mb-6 text-center">
                         <h1 className="text-2xl font-bold text-base-content">সাইন ইন</h1>

                         <p className="mt-2 text-sm text-base-content/60">
                              নির্ভুল দাম, বাজার তুলনা ও ট্রেন্ড দেখতে অ্যাকাউন্টে ঢুকুন।
                         </p>
                    </div>

                    {/* Login Card */}
                    <div className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm sm:p-7">
                         <form onSubmit={onSubmit} className="space-y-4">
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
                                        autoComplete="current-password"
                                        required
                                        className="w-full rounded-lg border border-base-300 bg-transparent px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                                   />
                              </div>

                              {/* Submit */}
                              <button
                                   type="submit"
                                   disabled={isLoading}
                                   className="w-full cursor-pointer rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-base-100 shadow-sm transition hover:opacity-90 active:scale-[0.99]"
                              >
                                   {isLoading ? 'সাইন ইন হচ্ছে...' : 'সাইন ইন'}
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
                                   disabled={socialLoading !== null}
                                   className="flex items-center cursor-pointer justify-center gap-2 rounded-lg border border-base-300 px-3 py-2.5 text-sm font-medium transition hover:bg-base-200"
                              >
                                   <FcGoogle size={18} />
                                   {socialLoading === 'google'
                                        ? 'অপেক্ষা করুন...'
                                        : 'Google দিয়ে চালিয়ে যান'}
                              </button>

                              <button
                                   onClick={handleGithubSignIn}
                                   type="button"
                                   disabled={socialLoading !== null}
                                   className="flex items-center justify-center cursor-pointer gap-2 rounded-lg border border-base-300 px-3 py-2.5 text-sm font-medium transition hover:bg-base-200"
                              >
                                   <FaGithub size={18} />
                                   {socialLoading === 'github'
                                        ? 'অপেক্ষা করুন...'
                                        : 'GitHub দিয়ে চালিয়ে যান'}
                              </button>
                         </div>
                         {/* Register Link */}
                         <p className="mt-5 text-center text-sm text-base-content/70">
                              অ্যাকাউন্ট নেই?{' '}
                              <Link
                                   href="/signup"
                                   className="font-semibold text-primary hover:underline"
                              >
                                   সাইন আপ করুন
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

export default SignInPage;
