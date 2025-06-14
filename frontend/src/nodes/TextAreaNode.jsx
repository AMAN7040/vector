// src/nodes/TextAreaNode.jsx

import createNode from "../utils/createNode";

const TextAreaNode = createNode({
  type: "textArea",
  title: "Text Area",
  inputs: [],
  outputs: [{ id: "textOutput" }],
  fields: [
    {
      type: "textarea",
      name: "description",
      label: "Description",
      default: "Enter your long-form text here...",
    },
  ],
});

export default TextAreaNode;
