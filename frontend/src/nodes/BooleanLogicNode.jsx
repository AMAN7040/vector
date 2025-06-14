// src/nodes/BooleanLogicNode.jsx

import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import BaseNode from "../components/BaseNode";

const BooleanLogicNode = ({ id, data }) => {
  const fields = [
    {
      type: "text",
      name: "label",
      label: "Logic Label",
      default: `flag_${id.slice(-4)}`,
    },
    {
      type: "checkbox",
      name: "enabled",
      label: "Enable Condition",
      default: false,
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

  const inputHandles = [{ id: `${id}-condition-in` }];
  const outputHandles = [{ id: `${id}-condition-out` }];

  return (
    <BaseNode
      id={id}
      title="Boolean Logic"
      inputs={inputHandles}
      outputs={outputHandles}
      fields={fields}
      onChange={handleChange}
      data={nodeData}
    />
  );
};

BooleanLogicNode.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.object,
};

export default BooleanLogicNode;
