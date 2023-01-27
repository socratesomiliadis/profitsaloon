import Image from 'next/image';

export default function Tools() {
  return (
    <section className="relative bg-[#0f0f0f] w-screen h-[50vh] flex flex-col">
      <div className="flex flex-col items-center gap-4 z-10">
        <span className="text-center text-4xl font-medium text-[#ededed]">
          Create a modern workflow.
        </span>
        <p className="text-center text-xl text-[#818181]">
          Many individuals and businesses have successfully generated six and{' '}
          <br />
          seven-figure income through the use of platforms such as Shopify,
          Google, Notion, and more.
        </p>
      </div>
      <div className="relative flex flex-col items-center z-[4] mt-32 gap-16">
        <div className="flex flex-row items-center gap-28">
          <Image
            src="/static/images/tools/Shopify.svg"
            width={500}
            height={120}
            alt="Shopify Logo"
            className="w-[160px]"
          />
          <Image
            src="/static/images/tools/Google.svg"
            width={500}
            height={120}
            alt="Google Logo"
            className="w-[160px]"
          />
          <Image
            src="/static/images/tools/Linear.svg"
            width={500}
            height={120}
            alt="Linear Logo"
            className="w-[160px]"
          />
          <Image
            src="/static/images/tools/Notion.svg"
            width={500}
            height={120}
            alt="Notion Logo"
            className="w-[160px]"
          />
        </div>
        <div className="flex flex-row items-center gap-28">
          <Image
            src="/static/images/tools/Adobe.svg"
            width={500}
            height={120}
            alt="Adobe Logo"
            className="w-[160px]"
          />
          <Image
            src="/static/images/tools/Discord.svg"
            width={500}
            height={120}
            alt="Discord Logo"
            className="w-[160px]"
          />
          <Image
            src="/static/images/tools/OpenSea.svg"
            width={500}
            height={120}
            alt="OpenSea Logo"
            className="w-[160px]"
          />
        </div>
      </div>
    </section>
  );
}
