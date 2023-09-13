import Link from "@tiptap/extension-link";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";

const Tiptap = ({
  editorContent,
  setEditorContent,
}: {
  editorContent: string;
  setEditorContent: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const editor = useEditor({
    extensions: [
      Link.configure({
        openOnClick: false,
      }),
      StarterKit,
    ],
    onUpdate({ editor }) {
      setEditorContent(JSON.stringify(editor.getJSON()));
    },
    content: editorContent.length > 0 ? JSON.parse(editorContent) : "",
    editorProps: {
      attributes: {
        class: "focus:outline-none h-full",
      },
    },
  });

  return (
    <div className="editor-wrapper relative text-white tiptap-editor focus:outline-none px-4 pt-2 pb-4 mt-4 bg-gradient-to-r w-full border-[#282828] border-[1px] rounded-xl from-[#0b0c0b] to-[#020202]">
      <span className="text-foreground-600 text-sm">Description</span>
      <EditorContent className="mt-2 h-[180px] overflow-auto" editor={editor} />
    </div>
  );
};

export default Tiptap;
