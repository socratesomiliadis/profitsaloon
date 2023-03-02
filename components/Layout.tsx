import { useSupabaseClient } from '@supabase/auth-helpers-react';
import Image from 'next/image';
import { ReactNode, useState, useEffect } from 'react';
import Navigation from './Navigation';
import SignIn from './SignIn';
import { useRouter } from 'next/router';

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [signInOpen, setSignInOpen] = useState(false);
  const [isResetPassword, setIsResetPassword] = useState(false);
  const [formType, setFormType] = useState<
    'sign-in' | 'sign-up' | 'reset-password' | 'reset-password-request' | 'none'
  >('none');
  const [isSanityPage, setIsSanityPage] = useState(
    router.asPath.includes('studio')
  );

  const supabase = useSupabaseClient();
  useEffect(() => {
    const HTMLDom = document.querySelector('html') as HTMLElement;
    if (formType !== 'none') {
      HTMLDom.style.overflow = 'hidden';
    } else {
      HTMLDom.style.overflow = '';
    }
  }, [formType]);

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event) => {
      if (event == 'PASSWORD_RECOVERY') {
        setFormType('reset-password');
      }
    });
  }, []);

  useEffect(() => {
    if (router.asPath.includes('studio')) setIsSanityPage(true);
    else setIsSanityPage(false);
  }, [router.asPath]);

  return (
    <>
      <div className="layout-wrapper">
        {/* <Image
          src="/static/images/grain.png"
          width={1920}
          height={1080}
          alt="Grain"
          className="pointer-events-none fixed inset-0 z-[9999] h-full w-full object-cover opacity-25"
        ></Image> */}

        {!isSanityPage && (
          <Navigation formType={formType} setFormType={setFormType} />
        )}

        {!isSanityPage && (
          <Image
            src="/static/images/grain.png"
            width={2000}
            height={2000}
            quality={100}
            className="fixed inset-0 w-full h-full object-cover z-[3] opacity-80 pointer-events-none"
            alt=""
            priority={true}
          />
        )}

        {formType !== 'none' && (
          <SignIn formType={formType} setFormType={setFormType} />
        )}
        {children}
      </div>
    </>
  );
}
