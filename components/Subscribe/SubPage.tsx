import Image from "next/image";

export default function SubPage({ tier }: { tier: number }) {
  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="basis-[40%] left-side relative"></div>
    </div>
  );
}
