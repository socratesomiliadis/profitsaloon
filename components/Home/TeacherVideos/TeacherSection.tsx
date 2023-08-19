import TeacherIntro from "./TeacherItem";
import { urlFor } from "@/lib/sanity/sanityClient";
import { assetUrlFor } from "@/lib/sanity/sanityClient";

export default function TeacherSection({ teachers }: { teachers: any[] }) {
  const teachersTriple = [...teachers, ...teachers, ...teachers];

  return (
    <section className="pt-64 pb-32 w-screen relative bg-black flex flex-col items-center">
      <div className="flex flex-col items-center gap-4 z-10">
        <span className="text-center text-4xl font-medium text-[#ededed] mt-4">
          Only work with professionals.
        </span>
        <p className="text-center text-xl text-[#818181]">
          Work with teachers that have succeeded.
        </p>
      </div>
      <div className="w-full px-16 mt-16 relative z-10 flex flex-row items-center gap-10">
        {teachersTriple.map((teacher, index) => {
          return (
            <TeacherIntro
              key={index}
              role={teacher.role}
              name={teacher.name}
              description={teacher.desc}
              thumbnail={urlFor(teacher.thumbnail).url()}
              video={assetUrlFor(teacher.video).url}
            />
          );
        })}
      </div>
    </section>
  );
}
