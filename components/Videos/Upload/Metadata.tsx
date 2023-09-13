import Tiptap from "@/components/Tiptap";
import { CircularProgress, Input, Select, SelectItem } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import ThumbUpload from "./ThumbnailUpload";
import { useState } from "react";
import { supabaseClientWithAuth } from "@/utils/helpers";
import { useAuth } from "@clerk/clerk-react";
import { set } from "sanity";

export default function Metadata({
  setActiveStep,
  stepIndex,
  setMetadataDone,
  descContent,
  setDescContent,
  videoURL,
  setUploadID,
}: {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  stepIndex: number;
  setMetadataDone: React.Dispatch<React.SetStateAction<boolean>>;
  descContent: string;
  setDescContent: React.Dispatch<React.SetStateAction<string>>;
  videoURL: string;
  setUploadID: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [thumbURL, setThumbURL] = useState<string>("");
  const [thumbKey, setThumbKey] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [categories, setCategories] = useState(new Set(["crypto"]));
  const [errorsOther, setErrorsOther] = useState<string>("");
  const { isLoaded, getToken, userId, isSignedIn } = useAuth();

  const onSubmit = async () => {
    setLoading(true);
    setErrorsOther("");

    if (title.length < 3) {
      setLoading(false);
      return;
    }
    if (!thumbURL) {
      setLoading(false);
      setErrorsOther("Please upload a thumbnail!");
      return;
    }
    if (categories.size === 0) {
      setLoading(false);
      setErrorsOther("Please select at least one category!");
      return;
    }

    const token = await getToken({ template: "supabase" });
    const supabase = await supabaseClientWithAuth(token as string);
    const { data, error } = await supabase
      .from("videos")
      .insert({
        title: title,
        description: descContent,
        thumbnail_url: thumbURL,
        video_url: videoURL,
        views: 0,
        categories: Array.from(categories),
        user_id: userId,
      })
      .select();
    if (error) {
      setLoading(false);
      console.error(error);
      return;
    }
    if (data) {
      setMetadataDone(true);
      setLoading(false);
      setUploadID(data[0].id);
      setActiveStep(stepIndex + 1);
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      }}
      className="w-full h-full relative flex flex-col items-end px-12 pt-20"
    >
      <Input
        type="text"
        label="Title"
        size="lg"
        errorMessage={
          title.length < 3 && "The title must be at least 3 characters long"
        }
        validationState={title.length < 3 ? "invalid" : "valid"}
        classNames={{
          inputWrapper: [
            "bg-transparent bg-gradient-to-r w-full text-white border-[#282828] border-[1px] rounded-xl from-[#0b0c0b] to-[#020202]",
          ],
        }}
        value={title}
        onValueChange={setTitle}
      />
      <Tiptap editorContent={descContent} setEditorContent={setDescContent} />
      <div className="w-full grid grid-cols-2 gap-16">
        <ThumbUpload
          thumbURL={thumbURL}
          setThumbURL={setThumbURL}
          thumbKey={thumbKey}
          setThumbKey={setThumbKey}
        />
        <div className="flex flex-col mt-4">
          <span className="text-[#818181]">Categories</span>
          <Select
            //@ts-expect-error
            size="md"
            className="w-full mt-2 bg-transparent"
            label="Select Categories"
            scrollShadowProps={{
              isEnabled: false,
            }}
            selectionMode="multiple"
            selectedKeys={categories}
            //@ts-expect-error
            onSelectionChange={setCategories}
            classNames={{
              trigger:
                "bg-transparent bg-gradient-to-r w-full text-white border-[#282828] border-[1px] rounded-xl from-[#0b0c0b] to-[#020202]",
              popover:
                "bg-transparent bg-gradient-to-r w-full text-white border-[#282828] border-[1px] rounded-xl from-[#0b0c0b] to-[#020202]",
            }}
          >
            <SelectItem key="crypto" className="text-white">
              Crypto
            </SelectItem>
            <SelectItem key="artificial-intelligence" className="text-white">
              Artificial Intelligence
            </SelectItem>
            <SelectItem key="marketing" className="text-white">
              Marketing
            </SelectItem>
            <SelectItem key="ecommerce" className="text-white">
              Ecommerce
            </SelectItem>
            <SelectItem key="copywriting" className="text-white">
              Copywriting
            </SelectItem>
          </Select>
        </div>
      </div>
      <div className="w-full flex items-center justify-between">
        <button
          onClick={onSubmit}
          className="px-6 py-2 mt-6 rounded-full bg-white text-black text-sm flex flex-row items-center gap-3"
        >
          {loading && (
            <CircularProgress
              size="sm"
              color="default"
              aria-label="Loading..."
              classNames={{
                svg: "w-4 h-4",
              }}
            />
          )}
          <span>Complete</span>
        </button>
        <span className="text-red-400">{errorsOther}</span>
      </div>
    </motion.div>
  );
}
