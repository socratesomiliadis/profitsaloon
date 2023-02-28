import Label from '../Label';
import TeacherIntro from './TeacherIntro';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';

const teacher = {
  role: 'Marketing Teacher',
  name: 'Iman Gadzhi',
  description:
    '“I am teaching a variety of topics related to cryptocurrency and blockchain technology such as basics of how cryptocurrency works, overview of smart contracts, and more.”',
  thumbnail: '/static/images/iman2.jpg',
  link: 'https://www.linkedin.com/in/iman-gadzhi-1b1b3b1b3/'
};

const teachers = [teacher, teacher, teacher, teacher];

export default function TeacherSection({}) {
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
      <div className="w-full px-64 mt-16 relative z-10">
        <Swiper
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
        </Swiper>
      </div>
    </section>
  );
}
