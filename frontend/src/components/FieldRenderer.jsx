// src/components/FieldRenderer.jsx

/**
 * FieldRenderer.jsx
 *
 * A dynamic field rendering utility that maps field definitions to actual React field components.
 * Supports pluggable architecture via COMPONENT_MAP and ensures declarative rendering of form fields.
 */

import PropTypes from "prop-types";
import TextField from "./fields/TextField";
import DropdownField from "./fields/DropdownField";

const COMPONENT_MAP = {
  text: TextField,
  dropdown: DropdownField,
};

const FieldRenderer = ({ fields, data, onChange }) => {
  return (
    <div className="space-y-3">
      {fields.map((field) => {
        const Component = COMPONENT_MAP[field.type];
        if (!Component) {
          console.warn(`Unsupported field type: ${field.type}`);
          return null;
        }

        return (
          <Component
            key={field.name}
            label={field.label}
            value={data?.[field.name] ?? field.default ?? ""}
            onChange={(val) => onChange(field.name, val)}
            {...field}
          />
        );
      })}
    </div>
  );
};

FieldRenderer.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      label: PropTypes.string,
    })
  ).isRequired,
  data: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FieldRenderer;
