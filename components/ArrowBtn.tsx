export default function ArrowBtn({
  width = 18,
  height = 18,
  className
}: {
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <button
      style={{
        width: width + 'px',
        height: height + 'px'
      }}
      className={`flex items-center justify-center rounded-full bg-[#202020] border-[1px] border-[#282828] ${className}`}
    >
      <svg
        width={width / 3 + 'px'}
        viewBox="0 0 7 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.63982 3.99997L1.67825 -2.08541e-07L0.399821 1.02616L4.08866 4L0.400142 6.97384L1.67857 8L6.00361 4.51296L6.63982 3.99997Z"
          fill="white"
        />
      </svg>
    </button>
  );
}
