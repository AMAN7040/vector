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
  outputs = [],
  fields = [],
  data = {},
  onChange,
}) => {
  return (
    <div className="bg-white border-3 border-black shadow-sm rounded-xl px-4 py-3 min-w-[220px] relative">
      <h3 className="text-base font-semibold text-indigo-700 mb-3">{title}</h3>

      {inputs.map((handle, idx) => (
        <Handle
          key={`${title.toLowerCase()}-${handle.id}-${idx}`}
          type="target"
          id={handle.id}
          position={Position.Left}
          topOffset={{ top: 40 + idx * 24 }}
          className="bg-indigo-500 w-3 h-3 rounded-full"
        />
      ))}

      <FieldRenderer fields={fields} data={data} onChange={onChange} />

      {outputs.map((handle, idx) => (
        <Handle
          key={`${title.toLowerCase()}-${handle.id}-${idx}`}
          type="source"
          id={handle.id}
          position={Position.Right}
          topOffset={{ top: 40 + idx * 24 }}
          className="bg-emerald-500 w-3 h-3 rounded-full"
        />
      ))}
    </div>
  );
};

BaseNode.propTypes = {
  title: PropTypes.string.isRequired,
  inputs: PropTypes.arrayOf(PropTypes.object),
  outputs: PropTypes.arrayOf(PropTypes.object),
  fields: PropTypes.array,
  data: PropTypes.object,
  onChange: PropTypes.func,
};

export default BaseNode;
