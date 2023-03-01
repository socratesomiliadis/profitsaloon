import Label from '../Label';
import TeacherIntro from './TeacherIntro';
import { urlFor } from 'lib/sanityClient';
import { assetUrlFor } from 'lib/sanityClient';
export default function TeacherSection({ teachers }: { teachers: any[] }) {
  const teachersTriple = [...teachers, ...teachers, ...teachers];
  return (
    <section className="w-screen relative bg-gradient-to-b from-[#0f0f0f] via-[#0f0f0f] to-[#060606] flex flex-col items-center">
      <div className="flex flex-col items-center gap-4 z-10">
        <Label text="Talk with teachers" />
        <span className="text-center text-4xl font-medium text-[#ededed] mt-4">
          Only work with professionals.
        </span>
        <p className="text-center text-xl text-[#818181]">
          Work with teachers that have succeed.
        </p>
      </div>
      <div className="w-full px-44 mt-16 relative z-10 flex flex-row items-center gap-16">
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
        {/* <Swiper
          spaceBetween={120}
          slidesPerView={3}
          initialSlide={1}
          loop={true}
          // allowTouchMove={false}
          modules={[Autoplay]}
          className="w-full teacher-intro-swiper "
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true
          }}
        >
          <SwiperSlide>
            <TeacherIntro
              role={teacher.role}
              name={teacher.name}
              description={teacher.description}
              thumbnail={teacher.thumbnail}
              link={teacher.link}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeacherIntro
              role={teacher.role}
              name={teacher.name}
              description={teacher.description}
              thumbnail={teacher.thumbnail}
              link={teacher.link}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeacherIntro
              role={teacher.role}
              name={teacher.name}
              description={teacher.description}
              thumbnail={teacher.thumbnail}
              link={teacher.link}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeacherIntro
              role={teacher.role}
              name={teacher.name}
              description={teacher.description}
              thumbnail={teacher.thumbnail}
              link={teacher.link}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeacherIntro
              role={teacher.role}
              name={teacher.name}
              description={teacher.description}
              thumbnail={teacher.thumbnail}
              link={teacher.link}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeacherIntro
              role={teacher.role}
              name={teacher.name}
              description={teacher.description}
              thumbnail={teacher.thumbnail}
              link={teacher.link}
            />
          </SwiperSlide>
        </Swiper> */}
      </div>
    </section>
  );
}
