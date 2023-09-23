import Link from "@tiptap/extension-link";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";

const TiptapDisplay = ({ editorContent }: { editorContent: string }) => {
  const editor = useEditor({
    editable: false,
    extensions: [
      Link.configure({
        openOnClick: true,
      }),
      StarterKit,
    ],
    content: editorContent ? JSON.parse(editorContent) : "",
    editorProps: {
      attributes: {
        class: "focus:outline-none h-full",
      },
    },
  });

  return <EditorContent className="h-full overflow-auto" editor={editor} />;
};

export default TiptapDisplay;
