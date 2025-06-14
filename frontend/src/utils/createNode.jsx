// src/utils/createNode.jsx

import { useState, useCallback } from "react";
import PropTypes from "prop-types";
import BaseNode from "../components/BaseNode";

const createNode = ({ title, fields = [], inputs = [], outputs = [] }) => {
  const Node = ({ id, data }) => {
    const hydratedData = fields.reduce((acc, field) => {
      acc[field.name] = data?.[field.name] ?? field.default ?? "";
      return acc;
    }, {});

    const [nodeData, setNodeData] = useState(hydratedData);

    const handleChange = useCallback((key, value) => {
      setNodeData((prev) => ({ ...prev, [key]: value }));
    }, []);

    return (
      <BaseNode
        id={id}
        title={title}
        inputs={inputs.map((i) => ({ id: `${id}-${i}` }))}
        outputs={outputs.map((o) => ({ id: `${id}-${o}` }))}
        fields={fields}
        onChange={handleChange}
        data={nodeData}
      />
    );
  };

  Node.propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.object,
  };

  return Node;
};

export default createNode;
