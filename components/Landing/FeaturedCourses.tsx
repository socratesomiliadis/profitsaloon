import Image from 'next/image';

export default function FeaturedCourses() {
  return (
    <section className="featured-courses relative w-screen min-h-screen bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A]">
      <div className="left-0 w-full h-[30vh] absolute z-0 top-0 -translate-y-[99%] bg-gradient-to-t from-[#0F0F0F] to-transparent"></div>
      <div className="flex flex-col items-center gap-4 z-50 relative">
        <span className="text-center text-4xl font-medium text-[#ededed]">
          Stop chasing the meta.
          <br />
          Be the meta.
        </span>
        <p className="text-center text-xl text-[#818181]">
          Join a supportive community to enhance your growth as an <br />
          entrepreneur, artist, and more.
        </p>
      </div>
      <div className="mt-24 w-full flex flex-col items-center z-50 relative">
        <div className="border-[1px] z-10 border-[#202020] w-[60%] h-[150px] rounded-2xl bg-gradient-to-r from-[#121212]/50 via-[#232323]/50 to-[#121212]/50"></div>
        <div className="light-bar w-[57%] h-[10px]"></div>
        <div className="w-full relative flex flex-row h-[50vh] blur-[15px]">
          <div className="z-0 absolute left-1/2 -translate-x-1/2 top-0 light-ellipse aspect-[745/275] w-[40%] h-auto rounded-full"></div>
          <div className="left-light-grad basis-1/2 h-full z-10"></div>
          <div className="right-light-grad basis-1/2 z-10"></div>
        </div>
      </div>
      <Image
        src="/static/images/grain.png"
        width={3000}
        height={3000}
        quality={100}
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
        alt=""
        priority={true}
      />
    </section>
  );
}
