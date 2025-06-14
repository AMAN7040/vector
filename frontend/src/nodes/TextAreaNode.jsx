// src/nodes/TextAreaNode.jsx

import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import BaseNode from "../components/BaseNode";

const TextAreaNode = ({ id, data }) => {
  const fields = [
    {
      type: "text",
      name: "title",
      label: "Node Title",
      default: "Note",
    },
    {
      type: "textarea",
      name: "noteContent",
      label: "Note Content",
      default: "",
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

  const inputHandles = [{ id: `${id}-input` }];
  const outputHandles = [{ id: `${id}-output` }];

  return (
    <BaseNode
      id={id}
      title={nodeData.title || "Note"}
      inputs={inputHandles}
      outputs={outputHandles}
      fields={fields}
      onChange={handleChange}
      data={nodeData}
    />
  );
};

TextAreaNode.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.object,
};

export default TextAreaNode;
