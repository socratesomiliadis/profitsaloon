import { useState } from 'react';

export default function MailchimpForm() {
  const [email, setEmail] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEmail('');
  }

  return (
    <div className="rounded-3xl border-[#2A2A2A]/60 border-[1px] bg-gradient-to-r from-[#101010] via-[#1b1b1b] to-[#101010] flex flex-col p-8 md:p-12 gap-6 md:scale-[0.9] md:-translate-x-[5%] w-fit max-w-full">
      <div className="flex flex-col">
        <span className="text-[#EDEDED] font-medium text-2xl">Subscribe</span>
        <span className="text-[#818181] text-xl">
          Stay updated with all things about us
        </span>
      </div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col md:flex-row gap-6"
      >
        <div className="rounded-full h-fit w-fit p-3 pr-2 md:pr-6 border-[#818181] border-[1px] flex flex-row items-center gap-4">
          <div className="rounded-full w-10 md:w-12 h-10 md:h-12 bg-[#3A3A3A] flex items-center justify-center">
            <svg
              width="60%"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 20 14"
              className="-mr-1"
            >
              <path
                d="M15.6,1.6c-0.2-0.1-0.4-0.1-0.6-0.1H3c-0.2,0-0.4,0-0.6,0.1L8,6C8.4,6.3,9,6.3,9.5,6L15.6,1.6z M1.2,2.6 C1.1,2.9,1,3.2,1,3.5v7c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-7c0-0.3-0.1-0.6-0.2-0.9l-6.4,4.6C9.4,7.9,8,7.9,7.1,7.2L1.2,2.6z"
                fill="white"
              ></path>
            </svg>
          </div>
          <input
            className="bg-transparent block focus:outline-none"
            placeholder="Type your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="bg-[#3A3A3A] px-6 py-2 rounded-full text-[#E6E6E6] hidden md:block">
            <span className="-mb-1">Enter</span>
          </span>
        </div>
        <button className="rounded-full bg-[#ededed] px-14 py-5 md:py-0 flex flex-row items-center justify-center gap-4">
          <span className="font-medium text-[#202020] text-xl -mb-1">
            Subscribe
          </span>
          <svg
            width="16"
            viewBox="0 0 10 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.40258 6.89249C6.40258 6.89249 8.90383 4.64 9.87777 3.763C9.95944 3.69 10 3.594 10 3.498C10 3.402 9.95944 3.306 9.87777 3.233C8.90438 2.356 6.40869 0.108501 6.40869 0.108501C6.32868 0.0365007 6.22312 0.000500407 6.11812 2.09406e-07C6.01089 2.14093e-07 5.90366 0.0370009 5.82143 0.110501C5.65865 0.257001 5.65809 0.4935 5.81921 0.639L8.57937 3.123L0.41669 3.123C0.186677 3.123 -1.62126e-07 3.291 -1.53077e-07 3.498C-1.44029e-07 3.705 0.186677 3.873 0.41669 3.873L8.57937 3.873L5.81366 6.3625C5.65309 6.507 5.6542 6.743 5.81699 6.88949C5.89922 6.96349 6.00644 7.00049 6.11367 6.99999C6.21868 6.99999 6.32313 6.96449 6.40258 6.89249Z"
              fill="#818181"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
