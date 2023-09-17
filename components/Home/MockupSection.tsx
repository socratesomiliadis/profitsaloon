import Image from "next/image";
import Link from "next/link";

export default function MockupSection({}) {
  return (
    <section className="relative bg-black w-screen  flex flex-col items-center">
      <div className="flex flex-col items-center gap-2 z-10">
        <span className="text-transparent text-xl font-medium bg-clip-text bg-gradient-to-t from-[#00FF0A] to-[#E9FF54]">
          Only work with professionals
        </span>
        <h3 className="text-center text-5xl font-medium text-[#ededed]">
          Work with people <br />
          that have succeed.
        </h3>
      </div>
      <Image
        src="/static/images/macMockup.png"
        width={1014}
        height={856}
        alt=""
        className="mt-24"
      />
      <div className="mt-96 flex flex-col items-center gap-2 z-10">
        <span className="text-transparent text-xl font-medium bg-clip-text bg-gradient-to-t from-[#00FF0A] to-[#E9FF54]">
          Still not convinced?
        </span>
        <h3 className="text-center text-5xl font-medium text-[#ededed]">
          Take the first step towards building
          <br />
          your successful business.
        </h3>
        <Link
          href="/subscribe"
          className="relative mt-4 w-[200px] group rounded-full p-[1px] bg-gradient-to-t from-white/25 via-[#121212]/25 to-white/25"
        >
          <span className="flex w-full items-center justify-center gap-2 relative overflow-hidden text-lg py-2 rounded-full bg-gradient-to-r from-[#121212] via-[#232323] to-[#121212] text-white">
            <span>Start now</span>
            <span className="w-0 group-hover:w-3 transition-[width] duration-300 ease-out">
              <svg
                width="100%"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.40258 6.89249C6.40258 6.89249 8.90383 4.64 9.87777 3.763C9.95944 3.69 10 3.594 10 3.498C10 3.402 9.95944 3.306 9.87777 3.233C8.90438 2.356 6.40869 0.108501 6.40869 0.108501C6.32868 0.0365007 6.22312 0.000500407 6.11812 2.09406e-07C6.01089 2.14093e-07 5.90366 0.0370009 5.82143 0.110501C5.65865 0.257001 5.65809 0.4935 5.81921 0.639L8.57937 3.123L0.41669 3.123C0.186677 3.123 -1.62126e-07 3.291 -1.53077e-07 3.498C-1.44029e-07 3.705 0.186677 3.873 0.41669 3.873L8.57937 3.873L5.81366 6.3625C5.65309 6.507 5.6542 6.743 5.81699 6.88949C5.89922 6.96349 6.00644 7.00049 6.11367 6.99999C6.21868 6.99999 6.32313 6.96449 6.40258 6.89249Z"
                  fill="#fff"
                />
              </svg>
            </span>
            <span className="absolute w-12 h-2 bg-white left-1/2 -translate-x-1/2 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"></span>
          </span>
        </Link>
      </div>
    </section>
  );
}
