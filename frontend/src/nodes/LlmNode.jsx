//src/nodes/LlmNode.jsx

import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import BaseNode from "../components/BaseNode";

export const LLMNode = ({ id, data }) => {
  const fields = [
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
  ];

  const hydratedData = fields.reduce((acc, field) => {
    acc[field.name] = data?.[field.name] ?? field.default ?? "";
    return acc;
  }, {});

  const [nodeData, setNodeData] = useState(hydratedData);

  const handleChange = useCallback((key, value) => {
    setNodeData((prev) => ({ ...prev, [key]: value }));
  }, []);

  const inputHandles = [{ id: `${id}-system` }, { id: `${id}-prompt` }];

  const outputHandles = [{ id: `${id}-response` }];

  return (
    <BaseNode
      id={id}
      title="LLM"
      inputs={inputHandles}
      outputs={outputHandles}
      fields={fields}
      onChange={handleChange}
      data={nodeData}
    />
  );
};

LLMNode.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.object,
};

export default LLMNode;
