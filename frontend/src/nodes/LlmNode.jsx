//src/nodes/LlmNode.jsx

import createNode from "../utils/createNode";

export const LLMNode = createNode({
  type: "llm",
  title: "LLM",
  inputs: [{ id: "system" }, { id: "prompt" }],
  outputs: [{ id: "response" }],
  fields: [
    {
      type: "text",
      name: "system",
      label: "System Prompt",
      default: "",
    },
    {
      type: "text",
      name: "prompt",
      label: "User Prompt",
      default: "",
    },
    {
      type: "dropdown",
      name: "model",
      label: "Model",
      options: ["OpenAI", "Anthropic", "Gemini", "Mistral", "LLaMA"],
      default: "OpenAI",
    },
  ],
});
