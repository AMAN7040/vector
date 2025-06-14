// src/nodes/TimerNode.jsx

import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import BaseNode from "../components/BaseNode";

const TimerNode = ({ id, data }) => {
  const fields = [
    {
      type: "text",
      name: "label",
      label: "Timer Label",
      default: `timer_${id.slice(-4)}`,
    },
    {
      type: "number",
      name: "duration",
      label: "Delay (ms)",
      default: 1000,
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

  const inputHandles = [{ id: `${id}-trigger` }];
  const outputHandles = [{ id: `${id}-complete` }];

  return (
    <BaseNode
      id={id}
      title="Timer"
      inputs={inputHandles}
      outputs={outputHandles}
      fields={fields}
      onChange={handleChange}
      data={nodeData}
    />
  );
};

TimerNode.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.object,
};

export default TimerNode;
