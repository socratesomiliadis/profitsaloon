import { UploadDropzone } from "@/utils/uploadthing";
import "@uploadthing/react/styles.css";

export default function VideoUpload({
  setActiveStep,
  stepIndex,
  setUploadDone,
  setVideoURL,
}: {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  stepIndex: number;
  setUploadDone: React.Dispatch<React.SetStateAction<boolean>>;
  setVideoURL: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="w-full h-full relative">
      {/* <VideoDrop /> */}

      <UploadDropzone
        content={{
          uploadIcon() {
            return (
              <span className="text-white block w-16">
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
                  <span className="text-white mt-4 text-2xl whitespace-nowrap font-normal">
                    Drag and drop your video to upload
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
        className="w-full h-full ut-button:rounded-full ut-button:font-normal ut-button:bg-gradient-to-r ut-button:from-[#121212] ut-button:via-[#232323] ut-button:to-[#121212] ut-button:ut-uploading:after:bg-[#818181]/20"
        endpoint="videoUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          //@ts-expect-error
          setVideoURL(res[0].url);
          setActiveStep(stepIndex + 1);
          setUploadDone(true);
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
}
