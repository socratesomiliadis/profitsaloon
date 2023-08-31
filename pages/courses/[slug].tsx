import Head from "next/head";
import { motion } from "framer-motion";
import { groq } from "next-sanity";
import { useEffect, useState } from "react";
import { assetUrlFor, sanityClient, urlFor } from "@/lib/sanity/sanityClient";
import gsap from "gsap";
import { CircularProgress, ScrollShadow } from "@nextui-org/react";
import { PortableText } from "@portabletext/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Footer from "@/components/Footer/Footer";
import { useUser } from "@/utils/getUser";
gsap.registerPlugin(ScrollTrigger);

const coursesSlugsQuery = groq`*[_type == 'course'] | order(orderRank)`;

const coursesQuery = groq`*[_type == 'course' && slug.current == $slug][0]`;

export default function Course({
  course,
  allCourses,
}: {
  course: any;
  allCourses: any[];
}) {
  const { subscription, isLoading } = useUser();
  const [activeSection, setActiveSection] = useState<string>(
    course?.studentSections
      ? course?.studentSections[0]?.title.replace(/\s/g, "")
      : ""
  );
  const title = `${course?.title} — Profit Saloon`;

  const currentCourseIndex = allCourses.findIndex(
    (c) => c.slug.current === course?.slug.current
  );
  const nextCourseIndex = (currentCourseIndex + 1) % allCourses.length;
  const nextCourse = allCourses[nextCourseIndex];

  useEffect(() => {
    if (!isLoading) {
      course?.studentSections?.forEach((section: any) => {
        ScrollTrigger.create({
          trigger: `#sec${section.title.replace(/\s/g, "")}`,
          start: "top 10%",
          end: "bottom 10%",
          onEnter: () => {
            setActiveSection(section.title.replace(/\s/g, ""));
          },
          onEnterBack: () => {
            setActiveSection(section.title.replace(/\s/g, ""));
          },
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, [isLoading, subscription?.metadata]);

  useEffect(() => {
    const activeBtn = document.getElementById(
      `btn${activeSection}`
    ) as HTMLButtonElement;
    const inactiveBtns = document.querySelectorAll(
      `button:not(#btn${activeSection})`
    ) as NodeListOf<HTMLButtonElement>;
    inactiveBtns.forEach((btn) => {
      btn.style.color = "#818181";
      btn.style.paddingTop = "0rem";
      btn.style.paddingBottom = "0rem";
    });

    if (activeBtn) {
      (activeBtn?.style).color = "#fff";
      (activeBtn?.style).paddingTop = "1rem";
      (activeBtn?.style).paddingBottom = "1rem";
    }
  }, [isLoading, activeSection]);

  useEffect(() => {
    console.log(subscription?.metadata);
  }, [subscription?.metadata]);

  if (isLoading)
    return (
      <div className="h-screen w-screen text-white text-xl flex items-center justify-center">
        <CircularProgress color="primary" />
      </div>
    );

  if (
    subscription?.metadata &&
    subscription!.metadata![course?.courseCode] !== "true"
  )
    return (
      <div className="h-screen w-screen text-white text-xl flex items-center justify-center">
        You don&apos;t have access to this course.
      </div>
    );

  return !!course ? (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={course?.description} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={course?.description} />
        {/* <meta
          property="og:image"
          content={urlFor(course?.featuredImage).url()}
        /> */}
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="900" />
        <meta property="og:image:alt" content={title} />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.4,
            ease: "easeOut",
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.4,
            ease: "easeOut",
          },
        }}
      >
        <div className="pt-64 w-full flex flex-col items-center z-[4] relative">
          <div className="flex flex-row items-center justify-center w-full gap-6">
            <div className="border-[1px] z-10 border-[#202020] w-[60%] h-[110px] rounded-full bg-gradient-to-r from-[#121212]/50 via-[#232323]/50 to-[#121212]/50 flex items-center justify-center"></div>
          </div>
          <div className="light-bar w-[50%] h-[10px]"></div>
          <div className="relative flex w-full h-[60vh] items-center justify-center isolate z-0">
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-[80%] h-fit flex flex-col items-center gap-8 z-50 text-transparent bg-clip-text bg-gradient-to-b from-black to-black/70">
              <span className="text-center text-5xl font-medium">
                {course?.title}
              </span>
              <p className="text-center text-xl font-medium">
                {course?.courseDesc}
              </p>
            </div>
            <div className="absolute top-0 right-1/2 h-full w-1/2 bg-gradient-conic from-white via-[#000] to-transparent text-white [--conic-position:from_70deg_at_center_top]"></div>
            <div className="absolute top-0 left-1/2 h-full w-1/2 bg-gradient-conic from-transparent via-[#000] to-white text-white [--conic-position:from_290deg_at_center_top]"></div>
            <div className="absolute top-1/2 h-[30vh] w-full translate-y-[20%] scale-x-150 bg-[#000] blur-2xl"></div>
            <div className="absolute top-1/2 z-50 h-[30vh] w-full bg-[#000] opacity-[0.01] backdrop-blur-md"></div>
            <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-white opacity-50 blur-3xl"></div>
            <div className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-white blur-2xl"></div>

            <div className="absolute bottom-0 z-40 h-[10vh] w-full -translate-y-[0] bg-[#000]"></div>
          </div>
        </div>
        <div className="w-screen flex flex-row z-[5] relative -mt-32">
          <aside className="relative w-[20%] pl-44">
            {/* <ScrollShadow hideScrollBar size={100} className="h-[400px]"> */}
            <div className="flex sticky top-0 pt-32 pb-64 flex-col items-start gap-0 text-lg">
              {course?.studentSections?.map((section: any) => (
                <button
                  id={`btn${section.title.replace(/\s/g, "")}`}
                  className="text-[#818181] transition-all duration-300 ease-out hover:text-white"
                  onClick={() => {
                    const sectionElement = document.getElementById(
                      `sec${section.title.replace(/\s/g, "")}`
                    );
                    sectionElement?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  key={section.title.replace(/\s/g, "")}
                >
                  {section.title}
                </button>
              ))}
            </div>
            {/* </ScrollShadow> */}
          </aside>
          <main className="w-[60%] py-32 flex flex-col gap-16 px-16">
            {course?.studentSections?.map((section: any) => (
              <div
                id={`sec${section.title.replace(/\s/g, "")}`}
                className="flex flex-col gap-6"
                key={section.title.replace(/\s/g, "")}
              >
                <h2 className="text-3xl text-white font-medium">
                  {section.title}
                </h2>
                <div className="text-[#818181] text-lg">
                  <PortableText value={section.text} />
                </div>
              </div>
            ))}
          </main>
          <aside className="w-[20%] pt-64 pr-8"></aside>
        </div>
        <Footer />
      </motion.div>
    </>
  ) : null;
}

export const getStaticPaths = async () => {
  const coursePaths = await sanityClient.fetch(coursesSlugsQuery);

  const paths = coursePaths.map((coursePath: any) => ({
    params: {
      slug: coursePath.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export async function getStaticProps({ params }: { params: any }) {
  const course = await sanityClient.fetch(coursesQuery, {
    slug: params?.slug,
  });

  const allCourses = await sanityClient.fetch(coursesSlugsQuery);

  return {
    props: {
      course,
      allCourses,
    },
    revalidate: 1,
  };
}
