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
  const [isSanityPage, setIsSanityPage] = useState(
    router.asPath.includes('studio')
  );

  const supabase = useSupabaseClient();
  useEffect(() => {
    const HTMLDom = document.querySelector('html') as HTMLElement;
    if (signInOpen) {
      HTMLDom.style.overflow = 'hidden';
    } else {
      HTMLDom.style.overflow = '';
    }
  }, [signInOpen]);

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event) => {
      if (event == 'PASSWORD_RECOVERY') {
        setIsResetPassword(true);
        setSignInOpen(true);
      }
    });
  }, []);

  useEffect(() => {
    if (router.asPath.includes('studio')) setIsSanityPage(true);
    else setIsSanityPage(false);

    console.log(isSanityPage);
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
        {!isSanityPage ? (
          <Navigation
            isResetPassword={isResetPassword}
            setSignInOpen={setSignInOpen}
          />
        ) : null}
        {!isSanityPage ? (
          <Image
            src="/static/images/grain.png"
            width={2000}
            height={2000}
            quality={100}
            className="fixed inset-0 w-full h-full object-cover z-[3] opacity-80 pointer-events-none"
            alt=""
            priority={true}
          />
        ) : null}
        {signInOpen && (
          <SignIn
            isResetPassword={isResetPassword}
            setIsResetPassword={setIsResetPassword}
            setSignInOpen={setSignInOpen}
          />
        )}
        {children}
      </div>
    </>
  );
}
