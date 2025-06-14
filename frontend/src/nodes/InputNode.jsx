//. src/nodes/InputNode.jsx

import createNode from "../utils/createNode";

/**
 * InputNode.jsx
 * A specialized node for injecting data into the pipeline.
 */

export const InputNode = createNode({
  type: "customInput",
  title: "Input",
  inputs: [],
  outputs: [{ id: "output" }],
  fields: [
    {
      type: "text",
      name: "inputName",
      label: "Input Name",
      default: "input_",
    },
    {
      type: "dropdown",
      name: "inputType",
      label: "Input Type",
      options: ["Text", "File"],
      default: "Text",
    },
  ],
});
