import { TierInfoType } from "@/lib/types";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { postData } from "@/utils/helpers";
import { getStripe } from "@/utils/stripe-client";
import { set } from "sanity";
import { CircularProgress } from "@nextui-org/react";

function CourseItem({ title, register }: { title: string; register: any }) {
  return (
    <div className="px-12 select-none relative cursor-pointer flex flex-row items-center justify-between order-[1] border-b-[1px] border-[#2a2a2a] py-5 w-full gap-4">
      <div className="flex peer-checked:[data-checked='true'] flex-row items-center gap-2  basis-1/2">
        <input
          {...register("courses")}
          type="checkbox"
          value={title}
          className="peer absolute cursor-pointer inset-0 opacity-0"
        />
        <span className="w-4 h-4 transition-all duration-300 ease-out rounded-full outline-[#818181]/50 outline-1 outline bg-[#232323] peer-checked:outline-offset-1 peer-checked:bg-[#01FF57] peer-checked:outline-[#01FF57] "></span>
        <label className="text-white text-lg">{title}</label>
      </div>
      <span>$1000+</span>
    </div>
  );
}

export default function SubPage({
  tier,
  tierInfo,
  allCourses,
}: {
  tier: number;
  tierInfo: TierInfoType[];
  allCourses: any[];
}) {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      courses: selectedCourses,
    },
  });

  useEffect(() => {
    console.log(selectedCourses);
    const subscription = watch((value, { name, type }) =>
      //@ts-expect-error
      setSelectedCourses(value.courses)
    );

    return () => subscription.unsubscribe();
  }, [watch]);

  const handleCheckout = async () => {
    // setPriceIdLoading(price.id);
    setLoading(true);
    const selectedCourseCodes = selectedCourses.map(
      (course) => allCourses.find((c) => c.title === course)?.courseCode
    );

    const metadata = selectedCourseCodes.reduce((acc, courseCode, i) => {
      acc[`${courseCode}`] = true;
      return acc;
    }, {});

    // console.log(metadata);

    try {
      const { sessionId } = await postData({
        url: "/api/create-checkout-session",
        data: {
          quantity: selectedCourses.length,
          metadata,
        },
      });

      const stripe = await getStripe();
      stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      return alert((error as Error)?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen relative bg-gradient-to-r from-[#121212]/50 via-[#232323]/50 to-[#121212]/50 h-screen flex flex-row">
      <div className="basis-[30%] 2xl:basis-[45%] h-screen left-side relative z-[1]">
        <div className="absolute hidden 2xl:block bottom-0 right-[-350px] z-[2]">
          <div className="relative">
            <Image
              src="/static/images/sub/phoneTransp.png"
              width={1600}
              height={1400}
              alt=""
              priority
              quality={100}
              className="h-[100vh] pointer-events-none aspect-[1600/1400] max-w-none object-contain object-bottom w-[1000px] z-[3] relative"
            />
            <div className="bg-gradient-to-b px-8 pt-12 flex flex-col gap-10 from-black to-[#232323] h-[70%] w-[290px] absolute z-[2] bottom-[10%] right-[33%] rounded-3xl">
              <div className="flex flex-col gap-1 w-full text-white">
                <h2 className="text-xl">{tierInfo[tier - 1].name}</h2>
                <span className="w-full h-[1px] bg-[#232323]"></span>
              </div>
              <div className="flex flex-col w-full">
                <span className="text-[#c1c1c1]">From</span>
                <div className="flex flex-row items-end gap-2">
                  <span className="text-white text-3xl font-medium">
                    $28,99
                  </span>
                  <span className="text-[#c1c1c1] text-sm mb-1">per month</span>
                </div>
              </div>
              <div className="flex flex-col w-full gap-2">
                {tierInfo[tier - 1].features.map((feature, i) => (
                  <div key={i} className="flex flex-col w-full gap-2">
                    <span className="text-sm text-[#c1c1c1]">{feature}</span>
                    {i !== tierInfo[tier - 1].features.length - 1 && (
                      <span className="w-full h-[1px] bg-[#232323]"></span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="text-2xl text-[#ededed] left-[10%] absolute top-[15%] z-[2]">
          Transform future revenue <br />
          into up-front{" "}
          <span className="text-[#c1c1c1]">
            capital with the <br />
            click of a button.
          </span>
        </p>
        <div className="text-xl flex flex-col gap-4 items-start text-[#c1c1c1] left-[10%] absolute bottom-[15%] z-[2]">
          <p>
            Need flexible access to capital?
            <br />
            <span className="text-[#ededed]">Get started</span> with Profit
            Saloon now.
          </p>
          <button className="bg-[#8A8A8A]/20 py-2 px-10 text-white rounded-full text-sm outline outline-1 outline-offset-4 outline-white">
            Learn More
          </button>
        </div>
        <Image
          src="/static/images/sub/studentElem.png"
          width={1600}
          height={1627}
          alt=""
          priority
          quality={100}
          className="h-full aspect-[1600/1627] max-w-[45vw] absolute object-bottom w-auto translate-y-[5%] z-[1]"
        />
      </div>
      <div className="basis-[70%] 2xl:basis-[55%] h-screen right-side relative flex items-start pt-16 justify-end pr-16 z-[2]">
        <div className="h-[80%] overflow-hidden rounded-3xl border-[0.5px] text-[#818181] border-[#2b2b2b] w-[80%] flex flex-col">
          <div className="px-12 py-6">
            <div className="flex flex-row items-center gap-3">
              <span className="w-4 block">
                <svg
                  width="100%"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.81533 14.2561C6.41154 14.2629 5.03742 13.8526 3.86705 13.0776C2.69669 12.3025 1.78276 11.1973 1.24122 9.90216C0.699558 8.60709 0.554737 7.18035 0.824988 5.80266C1.09524 4.42497 1.76834 3.15883 2.759 2.16414C3.74976 1.16957 5.01349 0.491565 6.3899 0.215978C7.76631 -0.0594928 9.19366 0.0798526 10.4909 0.616386C11.7881 1.15305 12.8969 2.06258 13.6764 3.23009C14.456 4.39747 14.8715 5.77006 14.8702 7.17379C14.8707 9.04753 14.1283 10.8449 12.806 12.1724C11.4837 13.4998 9.68917 14.2491 7.81533 14.2559V14.2561ZM7.81533 1.45089C6.6825 1.4441 5.57298 1.77389 4.62775 2.39829C3.68235 3.02282 2.94374 3.91392 2.50546 4.95864C2.06707 6.00336 1.9488 7.15464 2.16557 8.26666C2.38233 9.37867 2.92434 10.4013 3.72299 11.2049C4.52152 12.0085 5.54076 12.557 6.65146 12.7808C7.76204 13.0044 8.91418 12.8934 9.96161 12.4617C11.009 12.0299 11.9048 11.297 12.5352 10.3555C13.1655 9.41416 13.5023 8.30681 13.5027 7.1737C13.5058 5.66107 12.9088 4.20905 11.8426 3.13609C10.7763 2.06316 9.328 1.45708 7.81536 1.45077L7.81533 1.45089Z"
                    fill="#5A5A5A"
                  />
                  <path
                    d="M16.8673 17.1587L12.1465 12.4634L13.1128 11.4971L17.8337 16.1905L16.8673 17.1587Z"
                    fill="#5A5A5A"
                  />
                </svg>
              </span>

              <input
                type="text"
                className="w-full bg-transparent outline-none placeholder:text-[#c1c1c1] text-white"
                placeholder="Search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#1e1e1e] to-[#858585]/0 px-12 py-5 flex flex-row items-center justify-between">
            <span className="basis-[50%]">Courses</span>
            <span>Potential In-come</span>
          </div>
          <div className="h-full overflow-y-auto overflow-x-hidden flex flex-col">
            <AnimatePresence>
              {allCourses.map((course) => (
                <motion.div
                  layout
                  className="course-checkbox cursor-pointer"
                  style={{
                    display:
                      course?.title
                        .toUpperCase()
                        .includes(searchValue.toUpperCase()) ||
                      selectedCourses.includes(course.title) ||
                      searchValue === ""
                        ? "flex"
                        : "none",
                    order: selectedCourses.includes(course.title) ? 0 : 1,
                  }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  key={course.title}
                >
                  <CourseItem title={course.title} register={register} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div
        style={{
          transform:
            selectedCourses.length > 0 ? "translateY(0%)" : "translateY(100%)",
        }}
        className="summary flex flex-row items-center justify-between transition-transform duration-300 ease-out px-32 left-0 bottom-0 border-t-[1px] border-[#232323] fixed z-[100] w-screen py-6 bg-gradient-to-r from-black via-[#121212] to-black"
      >
        <div className="flex flex-col gap-1">
          <span className="text-[#c1c1c1] text-sm">Selected</span>
          <span className="text-white text-2xl">
            {selectedCourses.length} courses
          </span>
        </div>
        <div className="flex flex-row items-center gap-16">
          <div className="flex flex-col">
            <span className="text-[#c1c1c1]">Total</span>
            <div className="flex flex-row items-end gap-2">
              <span className="text-white text-3xl font-medium">
                $
                {tierInfo[tier - 1]
                  .calcPrice(selectedCourses.length)
                  .toFixed(2)}
              </span>
              <span className="text-[#c1c1c1] text-sm mb-1">per month</span>
            </div>
          </div>
          <button
            onClick={handleCheckout}
            className="px-10 py-2 rounded-full bg-white text-black flex flex-row items-center justify-center gap-3"
          >
            {loading && (
              <CircularProgress
                size="sm"
                color="default"
                aria-label="Loading..."
                classNames={{
                  svg: "w-4 h-4",
                }}
              />
            )}
            <span>Proceed to checkout</span>
            <span className="block w-1 -mb-[2px]">
              <svg
                width="100%"
                viewBox="0 0 3 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.163363 0.146447C0.381181 -0.0488155 0.734334 -0.0488155 0.952152 0.146447L2.59159 1.61612C3.13614 2.10427 3.13614 2.89573 2.59159 3.38388L0.952152 4.85355C0.734334 5.04882 0.381181 5.04882 0.163363 4.85355C-0.0544545 4.65829 -0.0544545 4.34171 0.163363 4.14645L1.8028 2.67678C1.91171 2.57915 1.91171 2.42086 1.8028 2.32322L0.163363 0.853553C-0.0544545 0.658291 -0.0544545 0.341709 0.163363 0.146447Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
