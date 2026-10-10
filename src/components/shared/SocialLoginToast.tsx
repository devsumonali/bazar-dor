'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const SocialLoginToast = () => {
     const searchParams = useSearchParams();
     const socialLogin = searchParams.get('socialLogin');

     useEffect(() => {
          if (socialLogin === 'success') {
               toast.success('সফলভাবে সাইন ইন হয়েছে!', {
                    id: 'social-login-success',
               });
          }
     }, [socialLogin]);

     return null;
};

export default SocialLoginToast;
