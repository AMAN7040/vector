// src/nodes/BooleanLogicNode.jsx

import createNode from "../utils/createNode";

const BooleanNode = createNode({
  type: "boolean",
  title: "Boolean",
  inputs: [],
  outputs: [{ id: "value" }],
  fields: [
    {
      type: "checkbox",
      name: "enabled",
      label: "Enable Option",
      default: false,
    },
  ],
});

export default BooleanNode;
