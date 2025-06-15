// src/nodes/TextNode.jsx

import createNode from "../utils/createNode";
import { extractVariables } from "../utils/extractVariables";

export const TextNode = createNode({
  type: "text",
  title: "Text",
  inputs: [],
  dynamicInputs: true,
  outputs: [{ id: "textOutput" }],
  fields: [
    {
      type: "textResize",
      name: "content",
      label: "Text Content",
      default: "",
    },
  ],
  getInputs: (data) => {
    const vars = extractVariables(data.content || "");
    return vars.map((v) => ({ id: v }));
  },
});

export default TextNode;
