// src/components/fields/DropdownField.jsx

/**
 * DropdownField.jsx
 * 
 * A reusable labeled select input field.
 * Useful for type selectors or dropdowns in nodes.
 */

import PropTypes from "prop-types";

const DropdownField = ({ label, value, onChange, options = [] }) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 px-3 py-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

DropdownField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default DropdownField;
