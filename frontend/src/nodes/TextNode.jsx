// src/nodes/TextNode.jsx

import createNode from "../utils/createNode";

export const TextNode = createNode({
  type: "text",
  title: "Text",
  inputs: [],
  outputs: [{ id: "textOutput" }],
  fields: [
    {
      type: "textResize",
      name: "content",
      label: "Text Content",
      default: "",
    },
  ],
});

export default TextNode;
