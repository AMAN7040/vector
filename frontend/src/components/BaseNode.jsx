// src/components/BaseNode.jsx

import { Handle, Position } from "reactflow";
import FieldRenderer from "./FieldRenderer";
import PropTypes from "prop-types";

/*
 * BaseNode is a resuable scaffold for visual pipeline Nodes.
 * It renders a title, dynamic handles and also custom fields via children
 */

const BaseNode = ({
  title,
  inputs = [],
  output = [],
  fields = [],
  data = [],
  onChange,
}) => {
  return (
    <div
      style={{
        width: 200,
        height: 80,
        border: "1px solid black",
      }}
    >
      <h3>{title}</h3>
      {inputs.map((id, idx) => (
        <Handle
          key={id}
          id={id}
          type="target"
          position={Position.Left}
          style={{ top: 40 + idx * 24 }}
        />
      ))}

      <FieldRenderer fields={fields} data={data} onChange={onChange} />

      {output.map((id, idx) => (
        <Handle
          key={id}
          id={id}
          type="source"
          position={Position.Right}
          style={{ top: 40 + idx * 24 }}
        />
      ))}
    </div>
  );
};

BaseNode.prototypes = {
  title: PropTypes.string.isRequired,
  inputs: PropTypes.arrayOf(PropTypes.string),
  outputs: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.object,
  fields: PropTypes.array,
  onChange: PropTypes.func,
};

export default BaseNode;
