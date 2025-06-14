// src/nodes/TextNode.jsx

import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import BaseNode from "../components/BaseNode";

export const TextNode = ({ id, data }) => {
  const fields = [
    {
      type: "text",
      name: "text",
      label: "Text",
      default: "Enter i.e. {{variabe}}",
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

  const inputHandles = [];
  const outputHandles = [{ id: `${id}-output` }];

  return (
    <BaseNode
      id={id}
      title="Text"
      inputs={inputHandles}
      outputs={outputHandles}
      fields={fields}
      onChange={handleChange}
      data={nodeData}
    />
  );
};

TextNode.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.object,
};

export default TextNode;
