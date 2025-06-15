// Toolbar.jsx

import { DraggableNode } from "./DraggableNode";
import { MdInput } from "react-icons/md";
import { MdOutput } from "react-icons/md";
import { SiOpenai } from "react-icons/si";
import { CiText } from "react-icons/ci";
import { FaFileUpload } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { VscSymbolBoolean } from "react-icons/vsc";
import { BsTextareaResize } from "react-icons/bs";
import { MdHttp } from "react-icons/md";

const TOOLBAR_NODES = [
  { type: "customInput", label: "Input", icon: <MdInput /> },
  { type: "llm", label: "LLM", icon: <SiOpenai /> },
  { type: "customOutput", label: "Output", icon: <MdOutput /> },
  { type: "text", label: "Text", icon: <CiText /> },
  { type: "fileUpload", label: "File Upload", icon: <FaFileUpload /> },
  { type: "timer", label: "Timer", icon: <MdOutlineTimer /> },
  { type: "boolean", label: "Boolean", icon: <VscSymbolBoolean /> },
  { type: "textArea", label: "Textarea", icon: <BsTextareaResize /> },
  { type: "api", label: "APIs", icon: <MdHttp /> },
];

export const PipelineToolbar = () => {
  return (
    <div
      className="p-3 border-b border-gray-200 shadow-[0px_4px_6px_0px_rgba(149,_157,_165,_0.2)]">
      <div className="flex mt-3 flex-wrap gap-4">
        {TOOLBAR_NODES.map(({ type, label, icon }) => (
          <DraggableNode key={type} type={type} label={label} icon={icon} />
        ))}
      </div>
    </div>
  );
};
