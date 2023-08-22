export default function LeftItem({
  icon,
  title,
  desc,
  index,
  isActive,
  isDone,
  setActive,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  index: number;
  isActive: boolean;
  isDone?: boolean;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <button
      onClick={() => setActive(index)}
      className="flex group flex-row items-center justify-between w-full"
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ease-out ${
            isActive
              ? "bg-white text-black"
              : "bg-transparent text-white border-[1px] border-white"
          }`}
        >
          <span className="w-1/3 relative block">{icon}</span>
        </div>
        <div className="text-white flex flex-col items-start">
          <span className="text-sm">{title}</span>
          <span className="text-[#5C5C5C] text-xs">{desc}</span>
        </div>
      </div>
      <span className="w-[0.35rem] group-hover:translate-x-1 transition-transform duration-200 ease-out">
        <svg
          width="100%"
          viewBox="0 0 7 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.25 7.01068C5.54806 6.72863 5.54806 6.27135 5.25 5.9893L0.223545 1.23291C-0.074514 0.950866 -0.0745144 0.49358 0.223544 0.211534C0.521603 -0.0705113 1.00485 -0.0705118 1.30291 0.211533L6.32936 4.96792C7.22354 5.81406 7.22355 7.18591 6.32937 8.03205L1.30291 12.7885C1.00485 13.0705 0.521604 13.0705 0.223545 12.7885C-0.0745145 12.5064 -0.0745149 12.0491 0.223544 11.7671L5.25 7.01068Z"
            fill="white"
          />
        </svg>
      </span>
    </button>
  );
}
