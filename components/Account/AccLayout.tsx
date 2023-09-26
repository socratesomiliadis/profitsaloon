import { useUser } from "@/utils/getUser";
import { ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import LeftItem from "./LeftItem";
import { useUser as useClerkUser, useClerk } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function AccLayout({
  children,
  courses,
}: {
  children?: React.ReactNode;
  courses?: any;
}) {
  const { user } = useClerkUser();
  const { signOut } = useClerk();
  const { subscription } = useUser();
  const [ownedCourses, setOwnedCourses] = useState<any>([]);
  const router = useRouter();

  useEffect(() => {
    if (subscription && courses.length > 0) {
      const allOwnedCourses = courses.filter(
        (course: any) => subscription!.metadata![course.courseCode] === "true"
      );
      setOwnedCourses(allOwnedCourses);
    }
  }, [subscription && courses]);

  return (
    <motion.div
      initial={{
        opacity: 1,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.4,
          ease: "easeOut",
        },
      }}
      exit={{
        opacity: 1,
        transition: {
          duration: 0.2,
          ease: "easeOut",
        },
      }}
      className="bg-black overflow-hidden w-screen h-screen account flex items-center justify-center px-64 2xl:px-72"
    >
      <div className="relative w-full h-[83vh] rounded-3xl border-[#2B2B2B] border-[1px] flex flex-row">
        <aside className="z-[1] w-[27%] h-full border-r-[1px] border-[#2b2b2b] relative flex flex-col justify-between p-6">
          <div className="h-full flex flex-col items-start gap-3">
            <div className="flex flex-row items-center gap-3">
              {user?.imageUrl ? (
                <Image
                  src={user?.imageUrl}
                  width={120}
                  height={120}
                  alt=""
                  priority
                  quality={100}
                  className="w-14 h-14 rounded-full"
                />
              ) : (
                <div className="w-14 h-14 rounded-full bg-[#232323]" />
              )}
              <div className="flex flex-col items-start">
                <span className="text-white text-lg">{user?.firstName}</span>
                <span className="text-[#818181] text-sm -mt-1">
                  @{user?.username}
                </span>
              </div>
            </div>
            {/* <User
              name={user?.firstName}
              description={`@${user?.username}`}
              classNames={{
                name: "text-white text-lg",
                description: "text-[#818181] -mt-1 text-sm",
              }}
              avatarProps={{
                size: "lg",
                src: user?.imageUrl,
                className: "mr-1 w-14 h-14",
              }}
            /> */}
            <ScrollShadow className="mt-8 w-full h-full">
              <div className="flex flex-col px-2 w-full gap-1">
                <h3 className="text-lg text-[#818181] font-medium">
                  Dashboard
                </h3>
                <LeftItem
                  icon={
                    <svg
                      width="100%"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.73108 9.78351C3.46979 8.83016 4.61141 8.22222 6 8.22222C7.38859 8.22222 8.53021 8.83016 9.26892 9.78351M2.73108 9.78351C3.6076 10.5415 4.75025 11 6 11C7.24975 11 8.3924 10.5415 9.26892 9.78351M2.73108 9.78351C1.67085 8.86667 1 7.51168 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6C11 7.51168 10.3292 8.86667 9.26892 9.78351M7.66667 4.88889C7.66667 5.80936 6.92047 6.55556 6 6.55556C5.07953 6.55556 4.33333 5.80936 4.33333 4.88889C4.33333 3.96841 5.07953 3.22222 6 3.22222C6.92047 3.22222 7.66667 3.96841 7.66667 4.88889Z"
                        stroke="currentColor"
                        strokeWidth="1.11111"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                  title="Account"
                />
                <LeftItem
                  icon={
                    <svg
                      width="100%"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="7"
                        cy="7"
                        r="5.58824"
                        stroke="currentColor"
                        strokeWidth="1.17647"
                      />
                      <path
                        d="M6.62723 5.0492C6.14859 4.75636 5.53125 5.09741 5.53125 5.65469V8.93498C5.53125 9.49226 6.14859 9.83331 6.62723 9.54047L9.30799 7.90032C9.76253 7.62222 9.76253 6.96745 9.30799 6.68935L6.62723 5.0492Z"
                        fill="currentColor"
                      />
                    </svg>
                  }
                  title="Videos"
                  tab="videos"
                />
                <LeftItem
                  icon={
                    <svg
                      width="100%"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.44954 2.55759L3.38361 2.3116C3.18385 2.2655 2.97444 2.32556 2.82947 2.47053L2.47053 2.82947C2.32556 2.97444 2.2655 3.18385 2.3116 3.38361L2.55759 4.44954C2.6132 4.69053 2.51383 4.94078 2.30804 5.07797L1.26477 5.77348C1.09936 5.88376 1 6.06941 1 6.26822V6.73178C1 6.93059 1.09936 7.11624 1.26477 7.22651L2.30804 7.92203C2.51383 8.05922 2.6132 8.30947 2.55759 8.55046L2.3116 9.61639C2.2655 9.81615 2.32556 10.0256 2.47053 10.1705L2.82947 10.5295C2.97444 10.6744 3.18385 10.7345 3.38361 10.6884L4.44954 10.4424C4.69053 10.3868 4.94078 10.4862 5.07797 10.692L5.77348 11.7352C5.88376 11.9006 6.06941 12 6.26822 12H6.73178C6.93059 12 7.11624 11.9006 7.22651 11.7352L7.92203 10.692C8.05922 10.4862 8.30947 10.3868 8.55046 10.4424L9.61639 10.6884C9.81615 10.7345 10.0256 10.6744 10.1705 10.5295L10.5295 10.1705C10.6744 10.0256 10.7345 9.81615 10.6884 9.61639L10.4424 8.55046C10.3868 8.30947 10.4862 8.05922 10.692 7.92203L11.7352 7.22651C11.9006 7.11624 12 6.93059 12 6.73178V6.26822C12 6.06941 11.9006 5.88376 11.7352 5.77348L10.692 5.07797C10.4862 4.94078 10.3868 4.69053 10.4424 4.44954L10.6884 3.38361C10.7345 3.18385 10.6744 2.97444 10.5295 2.82947L10.1705 2.47053C10.0256 2.32556 9.81615 2.2655 9.61639 2.3116L8.55046 2.55759C8.30947 2.6132 8.05922 2.51383 7.92203 2.30804L7.22651 1.26477C7.11624 1.09936 6.93059 1 6.73178 1H6.26822C6.06941 1 5.88376 1.09936 5.77348 1.26477L5.07797 2.30804C4.94078 2.51383 4.69053 2.6132 4.44954 2.55759Z"
                        stroke="currentColor"
                        strokeWidth="1.22222"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.33333 6.5C8.33333 7.51252 7.51252 8.33333 6.5 8.33333C5.48748 8.33333 4.66667 7.51252 4.66667 6.5C4.66667 5.48748 5.48748 4.66667 6.5 4.66667C7.51252 4.66667 8.33333 5.48748 8.33333 6.5Z"
                        stroke="currentColor"
                        strokeWidth="1.22222"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                  title="Settings"
                  tab="settings"
                />
              </div>
              <div className="flex flex-col mt-8 px-2 w-full gap-1">
                <h3 className="text-lg text-[#818181] font-medium">
                  Information
                </h3>
                <LeftItem
                  icon={<span className="block">$</span>}
                  title="Billing"
                  tab="billing"
                />
              </div>
              <div className="flex flex-col mt-8 px-2 w-full gap-1">
                <h3 className="text-lg text-[#818181] font-medium">
                  Active Courses
                </h3>
                {ownedCourses.map((course: any) => (
                  <LeftItem
                    key={course._id}
                    icon={<span className="block">$</span>}
                    title={course.title}
                    courseHref={`/courses/${course.slug.current}`}
                    colorCode={course.courseColorCode}
                    // href="/account/billing"
                  />
                ))}
              </div>
            </ScrollShadow>
            <div className="w-full bg-black px-4 pb-2 pt-3">
              <button
                onClick={() => {
                  signOut();
                  router.push("/");
                }}
                className="text-[#525252] group flex flex-row items-center gap-4"
              >
                <span className="block w-4 group-hover:-translate-x-1 transition-transform duration-250 ease-out">
                  <svg
                    width="100%"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7.49999L9.86364 7.49999M1 7.49999L4.54545 11.0455M1 7.49999L4.54545 3.95455M8.09091 14H12.4242C13.2945 14 14 13.2945 14 12.4242L14 2.57576C14 1.70549 13.2945 1 12.4242 1L8.09091 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className=" group-hover:scale-105 transition-transform duration-250 ease-out">
                  Log out
                </span>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-5"></div>
        </aside>
        <main className="w-[73%] bg-gradient-to-r from-[#1e1e1e]/20 to-[#818181]/0 z-[1] relative">
          {children}
        </main>
      </div>
    </motion.div>
  );
}
