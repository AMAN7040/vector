// src/nodes/ApiRequestNode.jsx

import createNode from "../utils/createNode";

const ApiRequestNode = createNode({
  type: "api",
  title: "API",
  inputs: [{ id: "requestPayload" }],
  outputs: [{ id: "responseData" }],
  fields: [
    {
      type: "text",
      name: "url",
      label: "API URL",
      default: "https://api.example.com",
    },
    {
      type: "dropdown",
      name: "method",
      label: "Method",
      options: ["GET", "POST", "PUT", "DELETE"],
      default: "GET",
    },
  ],
});

export default ApiRequestNode;
