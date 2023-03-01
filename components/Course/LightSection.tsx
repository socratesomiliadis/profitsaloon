export default function LightSection({
  title,
  desc
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="pt-44 w-screen bg-[#0f0f0f] flex flex-col items-center z-[4] relative">
      <div className="flex flex-row items-center justify-center w-full gap-6">
        <div className="border-[1px] z-10 border-[#202020] w-[60%] h-[150px] rounded-2xl bg-gradient-to-r from-[#121212]/50 via-[#232323]/50 to-[#121212]/50 flex items-center justify-center">
          {/* <IconsHover /> */}
        </div>
      </div>
      <div className="light-bar w-[50%] h-[10px]"></div>
      <div className="relative flex w-full h-[50vh] items-center justify-center isolate z-0">
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-[80%] h-fit flex flex-col items-center gap-8 z-50 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
          <span className="text-center text-4xl font-semibold">{title}</span>
          <p className="text-center text-xl font-medium">{desc}</p>
        </div>
        <div className="absolute inset-auto right-1/2 h-full w-1/2 bg-gradient-conic from-[#48FF86] via-[#0F0F0F] to-transparent text-white [--conic-position:from_70deg_at_center_top]"></div>
        <div className="absolute inset-auto left-1/2 h-full w-1/2 bg-gradient-conic from-transparent via-[#0F0F0F] to-[#48FF86] text-white [--conic-position:from_290deg_at_center_top]"></div>
        <div className="absolute top-1/2 h-[20vh] w-full translate-y-[20%] scale-x-150 bg-[#0F0F0F] blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-[20vh] w-full bg-[#0F0F0F] opacity-[0.01] backdrop-blur-md"></div>

        <div className="absolute bottom-0 z-40 h-[10vh] w-full -translate-y-[0] bg-[#0F0F0F]"></div>
      </div>
    </div>
  );
}
