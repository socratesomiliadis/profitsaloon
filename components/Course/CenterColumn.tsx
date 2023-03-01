export default function CenterColumn({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#0f0f0f] to-[#060606] pb-64">
      <div className="w-[35%]">{children}</div>
    </div>
  );
}
