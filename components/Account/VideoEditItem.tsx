import { Tooltip } from "@nextui-org/react";
import Image from "next/image";
import TiptapDisplay from "../TiptapDisplay";
import { useAuth } from "@clerk/clerk-react";
import { supabaseClientWithAuth } from "@/utils/helpers";
import { useEffect, useState } from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { toast } from "sonner";
import EditVideo from "./EditVideo";

export default function VideoEditItem({
  video,
  refetch,
}: {
  video: any;
  refetch: any;
}) {
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onOpenChange: onOpenChangeDelete,
  } = useDisclosure();
  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onOpenChange: onOpenChangeEdit,
  } = useDisclosure();
  const { isLoaded: isLoadedClerk, userId, getToken } = useAuth();
  const [isDelete, setIsDelete] = useState<boolean>(false);

  async function deleteVideo() {
    const supabaseAccessToken = await getToken({ template: "supabase" });
    const supabase = await supabaseClientWithAuth(
      supabaseAccessToken as string
    );
    const { error } = await supabase.from("videos").delete().eq("id", video.id);

    if (!!error) {
      console.log(error);
      toast.error("Error deleting video: " + error.message);
    }
    if (!error) {
      toast.success("Video deleted successfully!");
    }
  }

  const deleteFile = async (key: string) => {
    const data = {
      key: key,
    };

    try {
      const response = await fetch("/api/ut-delete", {
        method: "POST",
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.log(err);
      return;
    }
  };

  useEffect(() => {
    if (isDelete) {
      const keyFromURL = video?.video_url.replace("https://utfs.io/f/", "");
      const thumbnailKeyFromURL = video?.thumbnail_url.replace(
        "https://utfs.io/f/",
        ""
      );
      deleteFile(keyFromURL).catch((err) => console.log(err));
      deleteFile(thumbnailKeyFromURL).catch((err) => console.log(err));
      deleteVideo().catch((err) => console.log(err));
    }
  }, [isDelete]);

  const restrictTitle = (title: string) => {
    if (title.length > 40) {
      return title.slice(0, 40) + "...";
    }
    return title;
  };

  const isTitleLong = video?.title.length > 40;

  return (
    <>
      <Modal isOpen={isOpenDelete} onOpenChange={onOpenChangeDelete}>
        <ModalContent className="text-white rounded-md bg-black border-[#818181]/20 border-[1px] bg-gradient-to-r from-[#121212]/20 via-[#232323]/20 to-[#121212]/20">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Delete video?
              </ModalHeader>
              <ModalBody>
                <p>
                  Are you sure you want to delete this video? This action cannot
                  be undone.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="danger"
                  variant="flat"
                  onPress={() => {
                    setIsDelete(true);
                    onClose();
                    refetch();
                  }}
                >
                  I&apos;m sure, delete it.
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal
        scrollBehavior="inside"
        isOpen={isOpenEdit}
        onOpenChange={onOpenChangeEdit}
      >
        <ModalContent className="text-white p-3 max-w-none rounded-md w-[60vw] bg-black border-[#818181]/20 border-[1px] bg-gradient-to-r from-[#121212]/20 via-[#232323]/20 to-[#121212]/20">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit Video
              </ModalHeader>
              <ModalBody className="py-4">
                <EditVideo
                  onClose={() => {
                    onClose();
                    refetch();
                  }}
                  video={video}
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="flex flex-row w-full gap-6 items-center">
        <Image
          src={video?.thumbnail_url}
          width={1280 / 3}
          height={720 / 30}
          alt=""
          className="aspect-video object-cover w-64 rounded-lg"
        />
        <div className="flex flex-col h-fit w-[40%]">
          <Tooltip
            isDisabled={!isTitleLong}
            closeDelay={100}
            content={video?.title}
            placement="top-start"
            className="text-white rounded-md bg-transparent border-[#818181]/20 border-[1px] bg-gradient-to-r from-[#121212]/20 via-[#232323]/20 to-[#121212]/20"
          >
            <span className="text-white font-medium">
              {restrictTitle(video?.title)}
            </span>
          </Tooltip>
          <div className="text-[#818181] mt-2 overflow-hidden text-xs h-[90px]">
            {video?.description && (
              <TiptapDisplay editorContent={video?.description} />
            )}
          </div>
        </div>
        <div className="ml-10 flex flex-col gap-1">
          <button
            onClick={onOpenEdit}
            className="text-white w-fit text-base flex flex-row items-center gap-2 rounded-xl px-8 py-2 hover:bg-[#232323]/30 transition-colors duration-250 ease-out"
          >
            <span className="block w-3">
              <svg
                width="100%"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 4.9997L14.5858 1.91391C15.3668 1.13286 16.6332 1.13286 17.4142 1.91391L19.0858 3.58548C19.8668 4.36653 19.8668 5.63286 19.0858 6.41391L16 9.4997M11.5 4.9997L0.792893 15.7068C0.605357 15.8943 0.5 16.1487 0.5 16.4139V20.4997H4.58579C4.851 20.4997 5.10536 20.3943 5.29289 20.2068L16 9.4997M11.5 4.9997L16 9.4997"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="font-medium">Edit</span>
          </button>
          <button
            onClick={onOpenDelete}
            className="text-red-400 w-fit text-base flex flex-row items-center gap-2 rounded-xl px-8 py-2 hover:bg-[#232323]/30 transition-colors duration-250 ease-out"
          >
            <span className="block w-3">
              <svg
                width="100%"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3.5L3.43945 17.5625C3.47319 18.6422 4.35823 19.5 5.43848 19.5H14.5615C15.6418 19.5 16.5268 18.6422 16.5605 17.5625L17 3.5M3 3.5H17M3 3.5H0.5M17 3.5H19.5M7.5 8.5V14.5M12.5 8.5V14.5M13.874 3.5C13.43 1.77477 11.8639 0.5 10 0.5C8.13618 0.5 6.57008 1.77477 6.12604 3.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="font-medium">Delete</span>
          </button>
        </div>
      </div>
    </>
  );
}
