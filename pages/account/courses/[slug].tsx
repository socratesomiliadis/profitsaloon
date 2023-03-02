import CenterColumn from '@/components/Course/CenterColumn';
import CourseSection from '@/components/Course/CourseSection';
import LightSection from '@/components/Course/LightSection';
import { sanityClient } from 'lib/sanityClient';
import { groq } from 'next-sanity';
import Head from 'next/head';

const coursesSlugsQuery = groq`*[_type == "course" && defined(slug.current)][].slug.current`;

const coursesQuery = groq`*[_type == 'course' && slug.current == $slug][0]`;

export default function Course({ course }: { course: any }) {
  return (
    <>
      <Head>
        <title>{course.title}</title>
      </Head>
      <main className="w-screen flex flex-col items-center">
        <LightSection
          title={course.title}
          desc="AI, or artificial intelligence, refers to the simulation of human intelligence in machines 
that are programmed to think and learn like humans."
        />
        <CenterColumn>
          {course?.studentSections?.map((section: any, index: number) => (
            <CourseSection
              key={index}
              title={section.title}
              text={section.text}
              //   video={section.video ? section.video : null}
            />
          ))}
        </CenterColumn>
      </main>
    </>
  );
}

export const getStaticPaths = async () => {
  const coursePaths = await sanityClient.fetch(coursesSlugsQuery);

  return {
    paths: coursePaths.map((slug: any) => ({ params: { slug } })),
    fallback: 'blocking'
  };
};

export async function getStaticProps({ params }: { params: any }) {
  const course = await sanityClient.fetch(coursesQuery, {
    slug: params?.slug
  });

  return {
    props: {
      course
    },
    revalidate: 1
  };
}
