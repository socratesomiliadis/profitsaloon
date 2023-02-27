import Image from 'next/image';
import Link from 'next/link';

export default function TeacherIntro({
  role,
  name,
  description,
  thumbnail,
  link
}: {
  role: string;
  name: string;
  description: string;
  thumbnail: string;
  link: string;
}) {
  return (
    <div className="rounded-2xl w-[650px] flex flex-col border-[#2A2A2A]/60 border-[1px]">
      <div className="pt-8 px-10 teacher-intro-vid-wrapper">
        <Link
          href={link}
          target="_blank"
          className="w-full aspect-video h-auto relative"
        >
          <button className="left-6 bottom-6 absolute flex flex-row items-center gap-2">
            <span className="w-12 h-12 flex flex-row items-center justify-center bg-[#C1C1C1] rounded-full">
              <svg
                width="12"
                viewBox="0 0 9 13"
                fill="none"
                className="-mr-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.99985 6.22241C8.99985 6.5868 8.84658 6.91294 8.58988 7.09478L1.22678 12.3087C1.09882 12.3993 0.958664 12.4446 0.818417 12.4446C0.677699 12.4446 0.536972 12.3991 0.40883 12.3079C0.152791 12.1257 0 11.8001 0 11.4364V1.00814C0 0.644439 0.1528 0.31878 0.408733 0.136823C0.664773 -0.0453733 0.97055 -0.0454901 1.22669 0.13577L8.59002 5.34973C8.84672 5.53157 9 5.8577 9 6.22209L8.99985 6.22241Z"
                  fill="#171717"
                />
              </svg>
            </span>
            <span className="text-[#E6E6E6] -mb-1">Watch video</span>
          </button>
          <Image
            src={thumbnail}
            alt={`Profit Saloon introducing ${name}`}
            width={1280}
            height={720}
            className="aspect-video w-full h-auto object-cover rounded-xl"
          />
        </Link>
      </div>
      <p className="pt-6 pb-16 px-10 teacher-intro-desc-wrapper text-white w-[85%]">
        {description}
      </p>
      <span className="w-full h-[1px] bg-[#2A2A2A] opacity-60"></span>
      <span className="py-3 px-10 flex flex-row items-center gap-1">
        <span className="text-white">{role} —</span>
        <span className="text-[#818181]">{name}</span>
      </span>
    </div>
  );
}
