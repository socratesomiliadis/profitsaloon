import Link from 'next/link';

export default function Pagida() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-white text-5xl font-medium">
          Molis pesate sthn pagida tou xontrou
        </h1>
        <Link href="/" className="text-lg text-[#818181]">
          Gia na bgeite kaleste ton proxy
        </Link>
      </div>
    </div>
  );
}
