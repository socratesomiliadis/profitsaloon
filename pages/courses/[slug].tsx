import Head from "next/head";
import { motion } from "framer-motion";
import { groq } from "next-sanity";
import { useEffect, useState } from "react";
import { assetUrlFor, sanityClient, urlFor } from "@/lib/sanity/sanityClient";
import gsap from "gsap";
import { ScrollShadow } from "@nextui-org/react";
import { PortableText } from "@portabletext/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Footer from "@/components/Footer/Footer";
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
  }, []);

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
  }, [activeSection]);

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
        className="w-screen flex flex-row"
      >
        <aside className="relative w-[20%] pl-44">
          {/* <ScrollShadow hideScrollBar size={100} className="h-[400px]"> */}
          <div className="flex sticky top-0 py-64 flex-col items-start gap-0 text-lg">
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
        <main className="w-[60%] pt-64 pb-32 flex flex-col gap-16 px-16">
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
      </motion.div>
      <Footer />
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
