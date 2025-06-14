// src/nodes/TextNode.jsx

import createNode from "../utils/createNode";

export const TextNode = createNode({
  type: "text",
  title: "Text Area",
  inputs: [],
  outputs: [{ id: "textOutput" }],
  fields: [
    {
      type: "textarea",
      name: "content",
      label: "Text Content",
      default: "",
    },
  ],
});

export default TextNode;
