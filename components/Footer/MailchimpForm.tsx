import { useState } from "react";

export default function MailchimpForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEmail("");
  }

  return (
    <div className="rounded-3xl border-[#2A2A2A]/60 border-[1px] bg-gradient-to-r from-black via-black to-[#121212]/50 flex flex-col p-8 md:p-12 gap-6 md:scale-[0.9] md:-translate-x-[5%] w-fit max-w-full">
      <div className="flex flex-col">
        <span className="text-[#EDEDED] font-medium text-xl">Subscribe</span>
        <span className="text-[#818181] text-base">
          Stay updated with all things about us
        </span>
      </div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col md:flex-row gap-6"
      >
        <div className="rounded-full h-fit w-fit p-3 pr-2 md:pr-6 border-[#1b1b1b] border-[1px] flex flex-row items-center gap-4">
          <div className="rounded-full w-8 md:w-10 h-8 md:h-10 bg-[#3A3A3A] flex items-center justify-center">
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
        <button className="rounded-full bg-[#ededed] px-14 py-5 md:py-0 flex flex-row items-center justify-center gap-6">
          <span className="font-medium text-[#202020] text-lg">Subscribe</span>
          <svg
            width="4"
            viewBox="0 0 3 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.163363 0.146447C0.381181 -0.0488155 0.734334 -0.0488155 0.952152 0.146447L2.59159 1.61612C3.13614 2.10427 3.13614 2.89573 2.59159 3.38388L0.952152 4.85355C0.734334 5.04882 0.381181 5.04882 0.163363 4.85355C-0.0544545 4.65829 -0.0544545 4.34171 0.163363 4.14645L1.8028 2.67678C1.91171 2.57915 1.91171 2.42086 1.8028 2.32322L0.163363 0.853553C-0.0544545 0.658291 -0.0544545 0.341709 0.163363 0.146447Z"
              fill="#202020"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
