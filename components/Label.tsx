export default function Label({ text }: { text: string }) {
  return (
    <div className="p-[1px] rounded-full w-fit h-fit label-stroke">
      <div className="px-20 py-2 rounded-full label-inner">
        <span className="uppercase text-white text-sm">{text}</span>
      </div>
    </div>
  );
}
