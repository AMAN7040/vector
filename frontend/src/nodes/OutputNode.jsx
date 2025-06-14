// src/nodes/OutputNode.jsx

import createNode from "../utils/createNode";

export const OutputNode = createNode({
  type: "customOutput",
  title: "Output",
  inputs: [{ id: "value" }],
  outputs: [],
  fields: [
    {
      type: "text",
      name: "outputName",
      label: "Output Name",
      default: "output_",
    },
    {
      type: "dropdown",
      name: "outputType",
      label: "Output Type",
      options: ["Text", "Image"],
      default: "Text",
    },
  ],
});

