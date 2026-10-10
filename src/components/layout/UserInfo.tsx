'use client';

import { authClient } from '@/libs/auth-client';
import Link from 'next/link';
import { useState } from 'react';
import { FaChevronDown, FaRegUser } from 'react-icons/fa6';
import SignOutButton from '../shared/SignOutBtn';

const UserInfo = () => {
     const { data: session } = authClient.useSession();
     const [isOpen, setIsOpen] = useState(false);
     const user = session?.user;

     return (
          <div>
               {user ? (
                    <div className="relative">
                         <button
                              onClick={() => setIsOpen(!isOpen)}
                              aria-expanded={isOpen}
                              className="flex cursor-pointer items-center gap-3"
                         >
                              <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                   <FaRegUser size={22} />
                              </div>

                              <span className="max-w-32 truncate text-lg font-medium text-base-content">
                                   {user.name}
                              </span>

                              <FaChevronDown className="text-xs text-base-content/60" />
                         </button>

                         {isOpen && (
                              <div className="absolute top-full right-0 z-50 mt-3 w-72 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-lg">
                                   <h3 className="font-semibold text-base-content">{user.name}</h3>

                                   <p className="mt-1 truncate text-sm text-base-content/60">
                                        {user.email}
                                   </p>

                                   <div className="mt-5 space-y-4">
                                        <Link
                                             onClick={() => setIsOpen(false)}
                                             href="/profile"
                                             className="flex items-center gap-2 text-sm text-base-content"
                                        >
                                             <FaRegUser />
                                             আমার প্রোফাইল
                                        </Link>

                                        <SignOutButton />
                                   </div>
                              </div>
                         )}
                    </div>
               ) : (
                    <div className="flex gap-3 items-center">
                         <Link
                              href={'/signin/'}
                              className="text-base-content cursor-pointer font-medium text-sm"
                         >
                              সাইন ইন
                         </Link>

                         <Link
                              href={'/signup/'}
                              className="text-base-100 cursor-pointer font-medium text-sm bg-primary rounded-xl p-3"
                         >
                              সাইন আপ
                         </Link>
                    </div>
               )}
          </div>
     );
};

export default UserInfo;
