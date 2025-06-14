//  src/components/fields/NumberField.jsx

import React from "react";
import PropTypes from "prop-types";

const NumberField = ({ label, value, onChange, placeholder }) => (
  <div className="flex flex-col">
    {label && (
      <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
    )}
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      placeholder={placeholder}
      className="border border-gray-300 px-3 py-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
    />
  </div>
);

NumberField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default NumberField;
