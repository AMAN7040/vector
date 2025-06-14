// src/nodes/ApiRequestNode.jsx

import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import BaseNode from "../components/BaseNode";

const ApiRequestNode = ({ id, data }) => {
  const fields = [
    {
      type: "dropdown",
      name: "method",
      label: "HTTP Method",
      options: ["GET", "POST", "PUT", "DELETE", "PATCH"],
      default: "GET",
    },
    {
      type: "text",
      name: "endpoint",
      label: "API Endpoint",
      default: "",
    },
    {
      type: "textarea",
      name: "payload",
      label: "Payload (JSON)",
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

  const inputHandles = [{ id: `${id}-trigger` }];
  const outputHandles = [{ id: `${id}-response` }];

  return (
    <BaseNode
      id={id}
      title="API Request"
      inputs={inputHandles}
      outputs={outputHandles}
      fields={fields}
      onChange={handleChange}
      data={nodeData}
    />
  );
};

ApiRequestNode.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.object,
};

export default ApiRequestNode;
