//. src/nodes/InputNode.jsx

/**
 * InputNode.jsx
 * 
 * A specialized node for injecting data into the pipeline.
 * Uses BaseNode with two configurable fields: inputName and inputType.
 */

import { useCallback, useState } from "react";
import BaseNode from "../components/BaseNode";
import PropTypes from "prop-types";

export const InputNode = ({ id, data }) => {
  const fields = [
    {
      type: "text",
      name: "inputName",
      label: "Input Name",
      default: id.replace("customInput-", "input_"),
    },
    {
      type: "dropdown",
      name: "inputType",
      label: "Type",
      options: ["Text", "File"],
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

  const inputHandles = [];
  const outputHandles = [{ id: `output-${id}` }];

  return (
    <BaseNode
      id={id}
      title="Input"
      inputs={inputHandles}
      outputs={outputHandles}
      fields={fields}
      onChange={handleChange}
      data={nodeData}
    />
  );
};

InputNode.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.object,
};
