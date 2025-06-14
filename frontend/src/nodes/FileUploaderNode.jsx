// File: src/nodes/FileUploaderNode.jsx

import createNode from "../utils/createNode";

const FileUploaderNode = createNode({
  type: "fileUploader",
  title: "File Uploader",
  inputs: [],
  outputs: [{ id: "uploadedFile" }],
  fields: [
    {
      type: "text",
      name: "label",
      label: "Label",
      default: "Upload a file",
    },
    {
      type: "dropdown",
      name: "accept",
      label: "File Type",
      options: ["PDF", "Image", "CSV", "DOCX"],
      default: "PDF",
    },
  ],
});

export default FileUploaderNode;
