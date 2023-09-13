import TiptapDisplay from "@/components/TiptapDisplay";
import Player from "@/components/VideoPlayer/Player";
import SidebarVideoItem from "@/components/Videos/ui/SidebarVideoItem";
import { formatDate } from "@/lib/utils";
import { supabase } from "@/utils/supabase-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function VideoPage({ videoData }: { videoData: any }) {
  const router = useRouter();
  const videoName = router.query.slug as string;

  useEffect(() => {
    console.log(videoData);
  }, [videoData]);

  if (!videoData?.users?.username) return null;
  return (
    <div className="bg-black w-full pl-12 pr-6 pt-12 grid grid-cols-3 gap-8">
      <div className="player-wrapper w-full col-span-2 flex flex-col">
        {/* {videoData?.video_url && ( */}
        <Player url={videoData?.video_url} blurURL={videoData?.video_url} />
        {/* )} */}
        <h1 className="text-white text-4xl font-medium mt-6">
          {videoData?.title}
        </h1>
        <div className="flex flex-row items-center gap-5 mt-5 text-[#818181]">
          <Link
            href={`/videos/${videoData?.users?.username}`}
            className="flex flex-row items-center gap-1"
          >
            <Image
              src={videoData?.users?.avatar_url}
              width={200}
              height={200}
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <span className="ml-2 flex flex-row items-center gap-2">
              {videoData?.users?.name}
              <span className="block w-4">
                <svg
                  width="100%"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.01082 0.886719C3.15072 0.886719 0.0214844 4.01595 0.0214844 7.87605C0.0214844 11.7362 3.15072 14.8654 7.01082 14.8654C10.8709 14.8654 14.0002 11.7362 14.0002 7.87605C14.0002 4.01595 10.8709 0.886719 7.01082 0.886719ZM9.51333 6.46066C9.69666 6.2366 9.66363 5.90634 9.43956 5.72301C9.2155 5.53968 8.88524 5.57271 8.70191 5.79678L5.9235 9.19261L4.93522 8.20432C4.7305 7.99961 4.3986 7.99961 4.19389 8.20432C3.98917 8.40904 3.98917 8.74094 4.19389 8.94565L5.59175 10.3435C5.69648 10.4482 5.84061 10.5038 5.98853 10.4964C6.13645 10.489 6.27434 10.4194 6.36813 10.3048L9.51333 6.46066Z"
                    fill="#818181"
                  />
                </svg>
              </span>
            </span>
          </Link>
          <span className="block w-1">
            <svg
              width="100%"
              viewBox="0 0 3 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="1.5" cy="1.5" r="1.5" fill="#818181" />
            </svg>
          </span>
          <div className="text-[#818181] flex flex-row items-center gap-2">
            <span className="w-5 block">
              <svg
                width="100%"
                viewBox="0 0 12 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.929688 8.53505L0.591819 8.51123L0.566264 8.87376H0.929688V8.53505ZM6.73609 8.53505V8.87376H7.09952L7.07396 8.51123L6.73609 8.53505ZM10.8651 8.53505V8.87376H11.2285L11.203 8.51123L10.8651 8.53505ZM4.99417 2.55123C4.99417 3.17477 4.48869 3.68025 3.86515 3.68025V4.35766C4.86282 4.35766 5.67159 3.54889 5.67159 2.55123H4.99417ZM3.86515 3.68025C3.24161 3.68025 2.73612 3.17477 2.73612 2.55123H2.05871C2.05871 3.54889 2.86748 4.35766 3.86515 4.35766V3.68025ZM2.73612 2.55123C2.73612 1.92768 3.24161 1.4222 3.86515 1.4222V0.744789C2.86748 0.744789 2.05871 1.55356 2.05871 2.55123H2.73612ZM3.86515 1.4222C4.48869 1.4222 4.99417 1.92768 4.99417 2.55123H5.67159C5.67159 1.55356 4.86282 0.744789 3.86515 0.744789V1.4222ZM9.05866 2.55123C9.05866 3.17477 8.55317 3.68025 7.92963 3.68025V4.35766C8.9273 4.35766 9.73607 3.54889 9.73607 2.55123H9.05866ZM7.92963 3.68025C7.30609 3.68025 6.80061 3.17477 6.80061 2.55123H6.1232C6.1232 3.54889 6.93196 4.35766 7.92963 4.35766V3.68025ZM6.80061 2.55123C6.80061 1.92768 7.30609 1.4222 7.92963 1.4222V0.744789C6.93196 0.744789 6.1232 1.55356 6.1232 2.55123H6.80061ZM7.92963 1.4222C8.55317 1.4222 9.05866 1.92768 9.05866 2.55123H9.73607C9.73607 1.55356 8.9273 0.744789 7.92963 0.744789V1.4222ZM0.929688 8.87376H6.73609V8.19634H0.929688V8.87376ZM1.26756 8.55887C1.41703 6.4384 2.67601 5.48669 3.83289 5.48669C4.98977 5.48669 6.24875 6.4384 6.39823 8.55887L7.07396 8.51123C6.90509 6.11561 5.42004 4.80927 3.83289 4.80927C2.24574 4.80927 0.760689 6.11561 0.591819 8.51123L1.26756 8.55887ZM6.84575 5.79287C7.56115 5.37455 8.4216 5.38471 9.13033 5.82436C9.83608 6.26216 10.4281 7.15226 10.5272 8.55887L11.203 8.51123C11.0916 6.93134 10.4123 5.82243 9.48743 5.24871C8.56554 4.67683 7.43609 4.66296 6.50381 5.20809L6.84575 5.79287ZM7.7038 8.87376H10.8651V8.19634H7.7038V8.87376Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span>779,000 views</span>
          </div>
          <span className="block w-1">
            <svg
              width="100%"
              viewBox="0 0 3 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="1.5" cy="1.5" r="1.5" fill="#818181" />
            </svg>
          </span>
          <div className="text-[#818181] flex flex-row items-center gap-2">
            <span className="w-4 block">
              <svg
                width="100%"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 6.35294H13M4 2.52941V1M10 2.52941V1M3.25 14H10.75C11.9926 14 13 12.9729 13 11.7059V4.82353C13 3.55652 11.9926 2.52941 10.75 2.52941H3.25C2.00736 2.52941 1 3.55652 1 4.82353V11.7059C1 12.9729 2.00736 14 3.25 14Z"
                  stroke="#818181"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>{formatDate(videoData?.created_at)}</span>
          </div>
        </div>
        <div className="mt-7 buttons-wrapper flex flex-row items-center gap-4">
          <button className="bg-[#1D1D1D] text-white py-3 px-12 rounded-xl">
            Subscribe
          </button>
          <button className="bg-gradient-to-b from-[#E9FF54] to-[#00FF0A] font-medium text-black py-3 px-12 rounded-xl">
            Buy my Marketing course
          </button>
        </div>
        <div className="w-full h-[1px] bg-[#1D1D1D] my-12"></div>

        <div className="rounded-xl text-white border-[1px] border-[#818181]/10 h-[300px] p-6 bg-gradient-to-r from-[#1E1E1E]/10 to-[#818181]/0 flex flex-col">
          <span className="text-[#818181] text-sm">Description</span>
          {videoData?.description && (
            <TiptapDisplay editorContent={videoData?.description} />
          )}
        </div>
      </div>
      <div className="w-full flex flex-col items-start gap-16">
        <div className="w-full flex flex-col items-start gap-8">
          <div className="bg-[#1D1D1D] text-white py-3 px-10 rounded-xl">
            More from Iman Gadzilovits
          </div>
          <SidebarVideoItem
            duration="15:00"
            views="779,000"
            channelName="Iman Gadzilovits"
            title="7 Productivity Hacks that made me
$1,000,000"
            thumbURL="/static/images/testThumb.png"
          />
          <SidebarVideoItem
            duration="15:00"
            views="779,000"
            channelName="Iman Gadzilovits"
            title="7 Productivity Hacks that made me
$1,000,000"
            thumbURL="/static/images/testThumb.png"
          />
          <SidebarVideoItem
            duration="15:00"
            views="779,000"
            channelName="Iman Gadzilovits"
            title="7 Productivity Hacks that made me
$1,000,000"
            thumbURL="/static/images/testThumb.png"
          />
        </div>
        <div className="w-full h-[1px] bg-[#1d1d1d]"></div>
        <div className="w-full flex flex-col items-start gap-8">
          <div className="bg-[#1D1D1D] text-white py-3 px-10 rounded-xl">
            Recommended
          </div>
          <SidebarVideoItem
            duration="15:00"
            views="779,000"
            channelName="Iman Gadzilovits"
            title="7 Productivity Hacks that made me
$1,000,000"
            thumbURL="/static/images/testThumb.png"
          />
          <SidebarVideoItem
            duration="15:00"
            views="779,000"
            channelName="Iman Gadzilovits"
            title="7 Productivity Hacks that made me
$1,000,000"
            thumbURL="/static/images/testThumb.png"
          />
          <SidebarVideoItem
            duration="15:00"
            views="779,000"
            channelName="Iman Gadzilovits"
            title="7 Productivity Hacks that made me
$1,000,000"
            thumbURL="/static/images/testThumb.png"
          />
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const { data, error } = await supabase.from("videos").select("id");
  const paths = data?.map((post) => ({
    params: { id: JSON.stringify(post.id) },
  }));
  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps = async ({ params }: { params: any }) => {
  const { data, error } = await supabase
    .from("videos")
    .select("*, users(*)")
    .eq("id", params.id)
    .single();
  return { props: { videoData: data } };
};
