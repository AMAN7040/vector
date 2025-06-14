// src/nodes/OutputNode.jsx

import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import BaseNode from "../components/BaseNode";

export const OutputNode = ({ id, data }) => {
  const fields = [
    {
      type: "text",
      name: "outputName",
      label: "Output Name",
      default: id.replace("customOutput-", "output_"),
    },
    {
      type: "dropdown",
      name: "outputType",
      label: "Type",
      options: ["Text", "Image"],
      default: "Text",
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

  const inputHandles = [{ id: `${id}-value` }];
  const outputHandles = []; 

  return (
    <BaseNode
      id={id}
      title="Output"
      inputs={inputHandles}
      outputs={outputHandles}
      fields={fields}
      onChange={handleChange}
      data={nodeData}
    />
  );
};

OutputNode.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.object,
};

export default OutputNode;
