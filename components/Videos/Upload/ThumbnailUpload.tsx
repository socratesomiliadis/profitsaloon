import { UploadDropzone } from "@/utils/uploadthing";
import { CircularProgress } from "@nextui-org/react";

import Image from "next/image";
import { useState } from "react";

export default function ThumbUpload({
  thumbURL,
  setThumbURL,
  thumbKey,
  setThumbKey,
}: {
  thumbURL: string;
  setThumbURL: React.Dispatch<React.SetStateAction<string>>;
  thumbKey: string;
  setThumbKey: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [deleteLoading, setDeleteLoading] = useState(false);

  const deleteFile = async (key: string) => {
    const data = {
      key: key,
    };

    setDeleteLoading(true);
    try {
      const response = await fetch("/api/ut-delete", {
        method: "POST",
        body: JSON.stringify(data),
      });
    } catch (err) {
      setDeleteLoading(false);
      console.log(err);
      return;
    }

    setDeleteLoading(false);
  };

  return (
    <div className="mt-4 flex flex-col w-full">
      <span className="text-[#818181]">Thumbnail</span>
      {thumbURL.length <= 0 && (
        <UploadDropzone
          content={{
            uploadIcon() {
              return (
                <span className="text-white block w-10">
                  <svg
                    width="100%"
                    viewBox="0 0 56 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 11.0588C0 4.9512 5.01441 0 11.2 0H17.9045C21.6492 0 25.1462 1.84794 27.2234 4.92449L28.6673 7.06299C29.1866 7.83213 30.0608 8.29412 30.997 8.29412H44.8C50.9856 8.29412 56 13.2453 56 19.3529V35.9412C56 42.0488 50.9856 47 44.8 47H30.8V34.3216L33.0201 36.5138C34.1136 37.5935 35.8864 37.5935 36.9799 36.5138C38.0734 35.4341 38.0734 33.6836 36.9799 32.6039L29.9799 25.6921C28.8864 24.6124 27.1136 24.6124 26.0201 25.6921L19.0201 32.6039C17.9266 33.6836 17.9266 35.4341 19.0201 36.5138C20.1136 37.5935 21.8864 37.5935 22.9799 36.5138L25.2 34.3216V47H11.2C5.01441 47 0 42.0488 0 35.9412V11.0588Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              );
            },
            label({ ready }) {
              if (ready)
                return (
                  <div className="flex flex-col items-center">
                    <span className="text-white text-sm whitespace-nowrap font-normal">
                      Drag and drop your image to upload
                    </span>
                  </div>
                );

              return "Getting ready...";
            },
            allowedContent({ ready, fileTypes, isUploading }) {
              // if (!ready) return "Checking what you allow";
              // if (isUploading) return "Seems like stuff is uploading";
              // return `Stuff you can upload: ${fileTypes.join(", ")}`;
              return " ";
            },
            // button({ isUploading, uploadProgress }) {
            //   return <button className="absolute inset-0"></button>;
            // },
          }}
          className="w-full aspect-video bg-black border-[#282828] border-[1px] ut-button:rounded-full ut-button:font-normal ut-button:bg-gradient-to-r ut-button:from-[#121212] ut-button:via-[#232323] ut-button:to-[#121212] ut-button:ut-uploading:after:bg-[#818181]/20"
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            // Do something with the response

            //@ts-expect-error
            setThumbURL(res[0].url);
            //@ts-expect-error
            setThumbKey(res[0].key);
          }}
          config={{
            mode: "auto",
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
        />
      )}
      {thumbURL.length > 0 && (
        <div
          onClick={async () => {
            await deleteFile(thumbKey);
            setThumbURL("");
            setThumbKey("");
          }}
          className="w-full mt-2 aspect-video h-auto rounded-xl relative flex items-center justify-center"
        >
          <button className="absolute z-[2] bg-black/60 backdrop-blur w-8 h-8 rounded-full left-2 top-2 flex items-center justify-center">
            {!deleteLoading && (
              <svg
                width="50%"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.62928 17.3788L4.37772 17.3305L3.62928 17.3788ZM16.3707 17.3788L15.6223 17.3305L16.3707 17.3788ZM0.75 3C0.335786 3 0 3.33579 0 3.75C0 4.16421 0.335786 4.5 0.75 4.5V3ZM19.25 4.5C19.6642 4.5 20 4.16421 20 3.75C20 3.33579 19.6642 3 19.25 3V4.5ZM8.5 8.75C8.5 8.33579 8.16421 8 7.75 8C7.33579 8 7 8.33579 7 8.75H8.5ZM7 14.25C7 14.6642 7.33579 15 7.75 15C8.16421 15 8.5 14.6642 8.5 14.25H7ZM13 8.75C13 8.33579 12.6642 8 12.25 8C11.8358 8 11.5 8.33579 11.5 8.75H13ZM11.5 14.25C11.5 14.6642 11.8358 15 12.25 15C12.6642 15 13 14.6642 13 14.25H11.5ZM13.1477 3.93694C13.2509 4.33808 13.6598 4.57957 14.0609 4.47633C14.4621 4.37308 14.7036 3.9642 14.6003 3.56306L13.1477 3.93694ZM2.00156 3.79829L2.88083 17.4271L4.37772 17.3305L3.49844 3.70171L2.00156 3.79829ZM5.62513 20H14.3749V18.5H5.62513V20ZM17.1192 17.4271L17.9984 3.79829L16.5016 3.70171L15.6223 17.3305L17.1192 17.4271ZM17.25 3H2.75V4.5H17.25V3ZM0.75 4.5H2.75V3H0.75V4.5ZM17.25 4.5H19.25V3H17.25V4.5ZM14.3749 20C15.8249 20 17.0258 18.8741 17.1192 17.4271L15.6223 17.3305C15.5798 17.9882 15.034 18.5 14.3749 18.5V20ZM2.88083 17.4271C2.97419 18.8741 4.17508 20 5.62513 20V18.5C4.96601 18.5 4.42015 17.9882 4.37772 17.3305L2.88083 17.4271ZM7 8.75V14.25H8.5V8.75H7ZM11.5 8.75V14.25H13V8.75H11.5ZM10 1.5C11.5134 1.5 12.7868 2.53504 13.1477 3.93694L14.6003 3.56306C14.0731 1.51451 12.2144 0 10 0V1.5ZM6.85237 3.93694C7.21319 2.53504 8.48668 1.5 10 1.5V0C7.78568 0 5.92697 1.51451 5.39971 3.56306L6.85237 3.93694Z"
                  fill="white"
                />
              </svg>
            )}
            {!!deleteLoading && (
              <CircularProgress
                size="sm"
                color="default"
                aria-label="Loading..."
                classNames={{
                  svg: "w-4 h-4",
                }}
              />
            )}
          </button>
          <Image
            src={thumbURL}
            width={854}
            height={480}
            alt=""
            priority
            className="w-full aspect-video object-cover h-auto rounded-xl relative z-[1]"
          />
          <CircularProgress
            size="sm"
            color="default"
            aria-label="Loading..."
            className="absolute z-[0]"
            classNames={{
              svg: "w-6 h-6",
            }}
          />
        </div>
      )}
    </div>
  );
}
