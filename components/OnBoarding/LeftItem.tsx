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
      onClick={() => {
        if (!isDone) setActive(index);
      }}
      style={{
        pointerEvents: isDone ? "none" : "all",
      }}
      className="flex group flex-row items-center justify-between w-full"
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ease-out ${
            isActive
              ? "bg-white text-black"
              : isDone
              ? "bg-[#282828] text-white"
              : "bg-transparent text-white border-[1px] border-white"
          }`}
        >
          <span className="w-1/3 relative flex items-center justify-center">
            {isDone ? (
              <svg
                width="80%"
                viewBox="0 0 8 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.83616 0.0750566C8.01445 0.201874 8.05324 0.445199 7.9228 0.618537L3.24047 6.84073C3.17621 6.92613 3.07892 6.98239 2.97106 6.99652C2.86319 7.01065 2.75406 6.98143 2.66884 6.91561L0.151209 4.97118C-0.0217668 4.83758 -0.0505981 4.59295 0.0868127 4.42478C0.224224 4.25661 0.475842 4.22858 0.648818 4.36217L2.84057 6.05492L7.27715 0.15929C7.40759 -0.0140482 7.65787 -0.051761 7.83616 0.0750566Z"
                  fill="currentColor"
                />
              </svg>
            ) : (
              icon
            )}
          </span>
        </div>
        <div className="text-white flex flex-col items-start">
          <span
            className={`text-sm font-medium ${
              isDone ? "line-through text-[#282828]" : ""
            }`}
          >
            {title}
          </span>
          <span
            className={`text-xs ${
              isDone ? "text-[#282828]" : "text-[#5c5c5c]"
            }`}
          >
            {desc}
          </span>
        </div>
      </div>
      <span
        className={`text-xs w-[0.35rem] group-hover:translate-x-1 transition-transform duration-200 ease-out ${
          isDone ? "text-[#282828]" : "text-white"
        }`}
      >
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
            fill="currentColor"
          />
        </svg>
      </span>
    </button>
  );
}
