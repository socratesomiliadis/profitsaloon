import Image from 'next/image';
import { ReactNode, useState, useEffect } from 'react';
import Navigation from './Navigation';
import SignIn from './SignIn';

export default function Layout({ children }: { children: ReactNode }) {
  const [signInOpen, setSignInOpen] = useState(false);

  useEffect(() => {
    const HTMLDom = document.querySelector('html') as HTMLElement;
    if (signInOpen) {
      HTMLDom.style.overflow = 'hidden';
    } else {
      HTMLDom.style.overflow = '';
    }
  }, [signInOpen]);

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
        <Navigation setSignInOpen={setSignInOpen} />
        <Image
          src="/static/images/grain.png"
          width={2000}
          height={2000}
          quality={100}
          className="fixed inset-0 w-full h-full object-cover z-[3] opacity-80 pointer-events-none"
          alt=""
          priority={true}
        />
        {signInOpen && <SignIn setSignInOpen={setSignInOpen} />}
        {children}
      </div>
    </>
  );
}
