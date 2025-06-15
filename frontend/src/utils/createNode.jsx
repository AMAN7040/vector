// src/utils/createNode.jsx

import { useState, useCallback, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import { useUpdateNodeInternals } from "reactflow";
import BaseNode from "../components/BaseNode";

const createNode = ({
  title,
  fields = [],
  inputs = [],
  outputs = [],
  dynamicInputs = false,
  getInputs,
}) => {
  const Node = ({ id, data }) => {
    const hydratedData = fields.reduce((acc, field) => {
      const defaultValue =
        typeof field.default === "function"
          ? field.default(id, data)
          : field.default ?? "";

      acc[field.name] = data?.[field.name] ?? defaultValue;
      return acc;
    }, {});

    const [nodeData, setNodeData] = useState(hydratedData);
    const updateNodeInternals = useUpdateNodeInternals();

    const handleChange = useCallback((key, value) => {
      setNodeData((prev) => ({ ...prev, [key]: value }));
    }, []);

    const dynamicInputsHandle = useMemo(() => {
      if (dynamicInputs && getInputs) {
        const inputIds = getInputs(nodeData);
        return inputIds.map((input) =>
          typeof input === "string"
            ? { id: `${id}-${input}`, label: input }
            : {
                id: `${id}-${input.id}`,
                label: input.label ?? input.id,
              }
        );
      }
      return inputs.map((i) => ({ id: `${id}-${i}` }));
    }, [nodeData, dynamicInputs, getInputs, id, inputs]);

    useEffect(() => {
      if (dynamicInputs) {
        updateNodeInternals(id);
      }
    }, [nodeData, dynamicInputs, id, updateNodeInternals]);

    return (
      <BaseNode
        id={id}
        title={title}
        inputs={dynamicInputsHandle}
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
