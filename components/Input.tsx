export default function Input({
  type,
  placeholder,
  value,
  setValue,
  className,
  label
}: {
  type: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  className?: string;
  label?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-[#818181]">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder={placeholder}
        className={`bg-transparent border-[1px] text-white focus:outline-none border-[#5A5A5A] pt-5 pb-4 pl-6 pr-20 rounded-2xl ${className}`}
      />
    </div>
  );
}
