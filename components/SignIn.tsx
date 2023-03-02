import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import Input from './Input';
import { getURL } from '@/utils/helpers';
import { redirect } from 'next/dist/server/api-utils';

function SignUpForm({
  email,
  setEmail,
  password,
  setPassword,
  setFormType
}: {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  setFormType: (
    value:
      | 'sign-in'
      | 'sign-up'
      | 'reset-password'
      | 'reset-password-request'
      | 'none'
  ) => void;
}) {
  const [fullname, setFullname] = useState('');
  const [errorState, setErrorState] = useState<React.ReactNode | null>(null);
  const supabase = useSupabaseClient();
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    {
      // const exisistingEmail = await supabase
      //   .from('users')
      //   .select('email')
      //   .eq('email', email)
      //   .single()
      //   .then();
      // console.log(exisistingEmail.data);
      // if (exisistingEmail.data) {
      //   setErrorState(
      //     <span className="text-red-500">
      //       Email address is already in use!{' '}
      //       <button className="ml-1 underline text-[#818181]">
      //         Sign in instead.
      //       </button>
      //     </span>
      //   );
      // } else
    }
    if (!fullname.match(/^([\w]{2,})+\s+([\w\s]{2,})+$/i)) {
      setErrorState(
        <span className="text-red-500 text-center">
          Please enter a valid full name!
        </span>
      );
    } else {
      setErrorState(null);
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            full_name: fullname
          },
          emailRedirectTo: getURL() + 'test'
        }
      });

      if (error)
        setErrorState(
          <span className="text-red-500 text-center">{error.message}</span>
        );
      else if (data)
        setErrorState(
          <span className="text-[#49ff86] text-center">
            Check your email for the confirmation link.
          </span>
        );
    }
  }

  return (
    <div className="flex flex-col gap-8 items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-8 mt-16"
      >
        <Input
          type="text"
          placeholder="Enter your full name"
          value={fullname}
          setValue={setFullname}
          label="Full Name"
        />
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          setValue={setEmail}
          label="Email Address"
        />
        <Input
          type="password"
          placeholder="Create a password"
          value={password}
          setValue={setPassword}
          label="Password"
        />
        <button
          className={`bg-white text-[#202020] px-24 border-[1px] border-white hover:border-[#5A5A5A] hover:bg-transparent hover:text-[#818181] transition-colors duration-200
         rounded-full py-4 flex flex-row items-center justify-center mt-6`}
        >
          <span className="font-medium text-lg -mb-1">Sign Up</span>
        </button>
      </form>
      <div className="flex flex-col gap-4">
        <span className="text-[#818181]">
          Already have an account?
          <button
            onClick={() => setFormType('sign-in')}
            className="ml-1 underline text-[#818181]"
          >
            Sign in instead.
          </button>
        </span>
        {errorState}
      </div>
    </div>
  );
}

function SignInForm({
  email,
  setEmail,
  password,
  setPassword,
  setFormType
}: {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  setFormType: (
    value:
      | 'sign-in'
      | 'sign-up'
      | 'reset-password'
      | 'reset-password-request'
      | 'none'
  ) => void;
}) {
  const [errorState, setErrorState] = useState<React.ReactNode | null>(null);
  const supabase = useSupabaseClient();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setErrorState(null);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    });

    if (error)
      setErrorState(<span className="text-red-500">{error.message}</span>);
  }

  return (
    <div className="flex flex-col gap-8 items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-8 mt-16"
      >
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          setValue={setEmail}
          label="Email Address"
        />
        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          setValue={setPassword}
          label="Password"
        />
        <button
          className={`bg-white text-[#202020] px-24 border-[1px] border-white hover:border-[#5A5A5A] hover:bg-transparent hover:text-[#818181] transition-colors duration-200
         rounded-full py-4 flex flex-row items-center justify-center mt-6`}
        >
          <span className="font-medium text-lg -mb-1">Sign In</span>
        </button>
      </form>
      <div className="flex flex-col gap-2 items-center">
        <button
          onClick={() => setFormType('reset-password-request')}
          className="ml-1 underline text-[#818181]"
        >
          Forgot your password?
        </button>
        <span className="text-[#818181]">
          Don't have an account?
          <button
            onClick={() => setFormType('sign-up')}
            className="ml-1 underline text-[#818181]"
          >
            Sign up instead.
          </button>
        </span>
      </div>
      {errorState}
    </div>
  );
}

function ResetPasswordRequestForm({
  email,
  setEmail,
  setFormType
}: {
  email: string;
  setEmail: (value: string) => void;
  setFormType: (
    value:
      | 'sign-in'
      | 'sign-up'
      | 'reset-password'
      | 'reset-password-request'
      | 'none'
  ) => void;
}) {
  const [errorState, setErrorState] = useState<React.ReactNode | null>(null);
  const supabase = useSupabaseClient();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setErrorState(null);
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: getURL()
    });

    if (error)
      setErrorState(
        <span className="text-red-500 text-center">{error.message}</span>
      );
    else if (data)
      setErrorState(
        <span className="text-[#49ff86] text-center">
          Check your email for instructions.
        </span>
      );
  }

  return (
    <div className="flex flex-col gap-8 items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-8 mt-16"
      >
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          setValue={setEmail}
          label="Email Address"
        />

        <button
          className={`bg-white text-[#202020] px-24 border-[1px] border-white hover:border-[#5A5A5A] hover:bg-transparent hover:text-[#818181] transition-colors duration-200
         rounded-full py-4 flex flex-row items-center justify-center mt-6`}
        >
          <span className="font-medium text-lg -mb-1">Reset password</span>
        </button>
      </form>
      <div className="flex flex-col gap-2 items-center">
        <button
          onClick={() => setFormType('sign-in')}
          className="ml-1 underline text-[#818181]"
        >
          Go back.
        </button>
      </div>
      {errorState}
    </div>
  );
}

function ResetPasswordForm({
  setFormType
}: {
  setFormType: (
    value:
      | 'sign-in'
      | 'sign-up'
      | 'reset-password'
      | 'reset-password-request'
      | 'none'
  ) => void;
}) {
  const [password, setPassword] = useState('');
  const [errorState, setErrorState] = useState<React.ReactNode | null>(null);
  const supabase = useSupabaseClient();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setErrorState(null);
    const { data, error } = await supabase.auth.updateUser({
      password: password
    });

    if (error)
      setErrorState(
        <span className="text-red-500 text-center">{error.message}</span>
      );
    else if (data) {
      setFormType('sign-in');
      setErrorState(
        <span className="text-[#49ff86] text-center">
          Password reset succesfully
        </span>
      );
    }
  }

  return (
    <div className="flex flex-col gap-6 items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-8 mt-16"
      >
        <Input
          type="password"
          placeholder="Enter your new password"
          value={password}
          setValue={setPassword}
          label="New Password"
        />

        <button
          className={`bg-white text-[#202020] px-24 border-[1px] border-white hover:border-[#5A5A5A] hover:bg-transparent hover:text-[#818181] transition-colors duration-200
         rounded-full py-4 flex flex-row items-center justify-center mt-6`}
        >
          <span className="font-medium text-lg -mb-1">Reset password</span>
        </button>
      </form>
      {errorState}
    </div>
  );
}

export default function SignIn({
  formType,
  setFormType
}: {
  formType:
    | 'sign-in'
    | 'sign-up'
    | 'reset-password'
    | 'reset-password-request'
    | 'none';
  setFormType: (
    value:
      | 'sign-in'
      | 'sign-up'
      | 'reset-password'
      | 'reset-password-request'
      | 'none'
  ) => void;
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const user = useUser();
  const supabaseClient = useSupabaseClient();

  if (!user || formType === 'reset-password')
    return (
      <div className="fixed z-[9999] w-full h-full flex items-center justify-center inset-0 ">
        <div className="relative w-full h-full">
          <div
            onClick={() => setFormType('none')}
            className="absolute inset-0 w-full h-full backdrop-blur-xl bg-black/80 z-0 cursor-pointer"
          ></div>
          <div className="max-w-xl absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col h-fit py-16 px-24 rounded-2xl border-[2px] border-[#202020] bg-gradient-to-br from-[#000000] to-[#1A1A1A]">
            <div className="flex justify-center pb-12">
              <svg
                width="220"
                viewBox="0 0 272 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M63.5234 13.9043H74.4458C79.3002 13.9043 82.8023 16.7129 82.8023 21.4979C82.8023 26.3177 79.3002 29.0222 74.4458 29.0222H68.1004V38.1762H63.5234V13.9043ZM73.4749 25.3121C76.3182 25.3121 78.0866 23.8558 78.0866 21.4979C78.0866 19.1401 76.3182 17.6144 73.4749 17.6144H68.1004V25.3121H73.4749Z"
                  fill="#EDEDED"
                />
                <path
                  d="M85.5762 19.1055H89.8758V22.1221H89.9451C90.8467 20.215 92.0602 19.1055 94.5915 19.1055H96.4292V22.6769H93.794C91.1587 22.6769 89.9451 24.0986 89.9451 27.2192V38.1763H85.5762V19.1055Z"
                  fill="#EDEDED"
                />
                <path
                  d="M97.0186 28.641C97.0186 22.1222 101.318 18.5161 106.693 18.5161C112.067 18.5161 116.367 22.1222 116.367 28.641C116.367 35.1597 112.067 38.7658 106.693 38.7658C101.318 38.7658 97.0186 35.1597 97.0186 28.641ZM106.693 35.2984C109.709 35.2984 111.686 33.0446 111.686 28.641C111.686 24.2373 109.709 21.9835 106.693 21.9835C103.676 21.9835 101.7 24.2373 101.7 28.641C101.7 33.0446 103.676 35.2984 106.693 35.2984Z"
                  fill="#EDEDED"
                />
                <path
                  d="M125.659 11.0957H134.154V14.6325H126.664C125.104 14.6325 124.133 15.534 124.133 17.4758V19.1054H132.177C133.218 19.1054 134.015 19.9029 134.015 20.9432V38.1762H129.646V22.6769H124.133V38.1762H119.764V22.6769H117.337V19.1054H119.764V16.9903C119.764 13.2455 121.845 11.0957 125.659 11.0957Z"
                  fill="#EDEDED"
                />
                <path
                  d="M139.841 33.0098V22.6769H136.166V19.1054H139.841V13.9043H144.245V19.1054H150.001V22.6769H144.245V32.351C144.245 33.9806 145.077 34.6048 146.534 34.6048H150.105V38.1762H145.043C141.645 38.1762 139.841 36.4772 139.841 33.0098Z"
                  fill="#EDEDED"
                />
                <path
                  d="M159.189 29.7852H163.975C164.113 33.2526 166.124 35.0556 169.592 35.0556C172.851 35.0556 174.828 33.4606 174.828 30.8947C174.828 29.057 173.787 27.6007 170.528 27.6007H167.442C162.067 27.6007 159.536 24.8614 159.536 20.9779C159.536 16.3663 163.142 13.3149 169.384 13.3149C175.937 13.3149 179.127 16.6783 179.266 21.8101H174.585C174.446 18.6201 172.712 17.0251 169.349 17.0251C166.159 17.0251 164.252 18.412 164.252 20.7352C164.252 22.4689 165.327 23.7519 168.274 23.7519H171.36C177.463 23.7519 179.613 26.9766 179.613 30.652C179.613 35.5758 175.868 38.7658 169.522 38.7658C162.934 38.7658 159.363 35.333 159.189 29.7852Z"
                  fill="#EDEDED"
                />
                <path
                  d="M188.454 38.7658C184.744 38.7658 181.866 36.6507 181.866 32.6632C181.866 28.2942 185.334 26.6299 189.113 26.6299H192.199C194.106 26.6299 194.973 25.867 194.973 24.5494C194.973 22.8157 193.378 21.9835 191.332 21.9835C188.87 21.9835 187.31 23.1625 187.171 25.2776H182.594C182.872 21.186 185.542 18.5161 191.263 18.5161C197.053 18.5161 199.342 21.29 199.342 25.1389V33.322C199.342 34.2582 199.689 34.6049 200.625 34.6049H201.353V38.1763H198.371C196.291 38.1763 195.146 37.1361 195.146 35.3331V34.6049H195.077C193.863 37.4482 191.402 38.7658 188.454 38.7658ZM189.807 35.229C192.407 35.229 194.973 33.5994 194.973 29.6465V27.8781H194.904C194.314 29.0571 193.205 29.6465 191.228 29.7159L189.807 29.7852C187.518 29.8546 186.547 30.9988 186.547 32.4898C186.547 33.9808 187.518 35.229 189.807 35.229Z"
                  fill="#EDEDED"
                />
                <path
                  d="M203.919 11.0957H208.288V38.1762H203.919V11.0957Z"
                  fill="#EDEDED"
                />
                <path
                  d="M211.306 28.641C211.306 22.1222 215.605 18.5161 220.98 18.5161C226.354 18.5161 230.654 22.1222 230.654 28.641C230.654 35.1597 226.354 38.7658 220.98 38.7658C215.605 38.7658 211.306 35.1597 211.306 28.641ZM220.98 35.2984C223.996 35.2984 225.973 33.0446 225.973 28.641C225.973 24.2373 223.996 21.9835 220.98 21.9835C217.963 21.9835 215.987 24.2373 215.987 28.641C215.987 33.0446 217.963 35.2984 220.98 35.2984Z"
                  fill="#EDEDED"
                />
                <path
                  d="M232.803 28.641C232.803 22.1222 237.102 18.5161 242.477 18.5161C247.851 18.5161 252.151 22.1222 252.151 28.641C252.151 35.1597 247.851 38.7658 242.477 38.7658C237.102 38.7658 232.803 35.1597 232.803 28.641ZM242.477 35.2984C245.493 35.2984 247.47 33.0446 247.47 28.641C247.47 24.2373 245.493 21.9835 242.477 21.9835C239.46 21.9835 237.484 24.2373 237.484 28.641C237.484 33.0446 239.46 35.2984 242.477 35.2984Z"
                  fill="#EDEDED"
                />
                <path
                  d="M255.167 19.1056H259.467V22.0182H259.536C260.68 19.7644 262.761 18.5161 265.396 18.5161C269.279 18.5161 271.845 21.1513 271.845 26.2138V38.1763H267.476V26.7339C267.476 23.4052 266.02 22.0182 263.87 22.0182C261.686 22.0182 259.536 23.4398 259.536 27.254V38.1763H255.167V19.1056Z"
                  fill="#EDEDED"
                />
                <path
                  d="M24.9654 49.9308C38.7534 49.9308 49.9308 38.7534 49.9308 24.9654C49.9308 11.1774 38.7534 0 24.9654 0C11.1774 0 0 11.1774 0 24.9654C0 38.7534 11.1774 49.9308 24.9654 49.9308Z"
                  fill="#EDEDED"
                />
                <path
                  d="M20.597 36.1649C16.6095 35.1594 14.4943 32.3508 14.7371 28.3979H20.389C20.0075 30.8598 21.6719 32.3854 24.3418 32.3854C26.769 32.3854 28.2947 31.1025 28.2947 29.1954C28.2947 27.7738 27.4278 26.8029 25.1046 26.8029H23.3709C18.898 26.8029 16.5401 24.5144 16.5401 21.1163C16.5401 16.9901 19.8688 14.2508 24.6886 13.6267L25.1046 10.9568H30.0977L29.3349 13.8001C33.3224 14.5629 35.6109 17.1981 35.3682 21.255H29.7163C30.1324 19.2439 29.1962 17.7182 26.3182 17.7182C23.7523 17.7182 22.4347 18.9319 22.4347 20.5962C22.4347 21.8445 23.2322 22.642 25.3127 22.642H27.0464C31.7621 22.642 34.1893 24.8958 34.1893 28.6059C34.1893 32.8015 31.0339 36.1302 25.2087 36.5116L24.8619 38.9388H19.8688L20.597 36.1649Z"
                  fill="#0F0F0F"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              {formType === 'sign-up' && (
                <SignUpForm
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  setFormType={setFormType}
                />
              )}
              {formType === 'sign-in' && (
                <SignInForm
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  setFormType={setFormType}
                />
              )}
              {formType === 'reset-password-request' && (
                <ResetPasswordRequestForm
                  email={email}
                  setEmail={setEmail}
                  setFormType={setFormType}
                />
              )}
              {formType === 'reset-password' && (
                <ResetPasswordForm setFormType={setFormType} />
              )}
              {/* <Auth
                supabaseClient={supabaseClient}
                providers={['discord']}
                redirectTo={'/'}
                appearance={{
                  theme: ThemeSupa,
                  variables: {
                    default: {
                      colors: {
                        brand: '#202020',
                        brandAccent: '#52525b'
                      },
                      radii: {
                        borderRadiusButton: '999px',
                        buttonBorderRadius: '4px',
                        inputBorderRadius: '4px'
                      },
                      fonts: {
                        bodyFontFamily: `AcidGrotesk`,
                        buttonFontFamily: `AcidGrotesk`,
                        inputFontFamily: `AcidGrotesk`,
                        labelFontFamily: `AcidGrotesk`
                      }
                    }
                  }
                }}
                theme="dark"
              /> */}
            </div>
          </div>
        </div>
      </div>
    );

  return <div className="m-6 hidden">{/* <LoadingDots /> */}</div>;
}
