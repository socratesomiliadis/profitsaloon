import { PortableText } from '@portabletext/react';
import { assetUrlFor } from 'lib/sanityClient';

export default function CourseSection({
  title,
  text,
  video
}: {
  title: string;
  text: any;
  video?: any;
}) {
  return (
    <div className="flex flex-col w-full relative z-20 gap-4">
      <h3 className="text-white text-2xl font-medium">{title}</h3>
      <div className="text-lg text-[#EDEDED]">
        <PortableText value={text} />
      </div>
      {video && (
        <video
          src={assetUrlFor(video).url}
          width={1920}
          height={1080}
          className="aspect-video w-full h-auto"
        />
      )}
    </div>
  );
}
