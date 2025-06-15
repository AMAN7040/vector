// src/components/BaseNode.jsx

import { Handle, Position } from "reactflow";
import FieldRenderer from "./FieldRenderer";
import PropTypes from "prop-types";
import { nodeStyles } from "../styles/nodeTheme";
import { getHandleStyle } from "../utils/positionHandles";

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
    <div className={nodeStyles.container}>
      <h3 className={nodeStyles.title}>{title}</h3>

      {inputs.map((handle, idx) => (
        <>
          <Handle
            key={`handle-${handle.id}-${idx}`}
            type="target"
            id={handle.id}
            position={Position.Left}
            style={{
              ...getHandleStyle(inputs.length, idx),
              backgroundColor: nodeStyles.handleColor,
              border: `1px solid ${nodeStyles.handleBorder}`,
              width: nodeStyles.handleSize,
              height: nodeStyles.handleSize,
              borderRadius: "9999px",
            }}
            className={nodeStyles.inputHandle}
          />
          {handle?.label && (
            <div
              key={`label-${handle.id}-${idx}`}
              style={{
                position: "absolute",
                left: "-50px",
                top: `calc(${getHandleStyle(inputs.length, idx).top})`,
              }}
              className="text-xs text-gray-600 whitespace-nowrap"
            >
              {handle.label}
            </div>
          )}
        </>
      ))}

      <FieldRenderer fields={fields} data={data} onChange={onChange} />

      {outputs.map((handle, idx) => (
        <Handle
          key={`${title.toLowerCase()}-${handle.id}-${idx}`}
          type="source"
          id={handle.id}
          position={Position.Right}
          style={{
            ...getHandleStyle(outputs.length, idx),
            backgroundColor: nodeStyles.handleColor,
            border: `1px solid ${nodeStyles.handleBorder}`,
            width: nodeStyles.handleSize,
            height: nodeStyles.handleSize,
            borderRadius: "9999px",
          }}
          className={nodeStyles.outputHandle}
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
