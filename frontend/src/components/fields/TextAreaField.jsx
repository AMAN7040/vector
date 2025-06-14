// src/components/fields/TextAreaField.jsx

import React from "react";
import PropTypes from "prop-types";

const TextAreaField = ({ label, value, onChange, placeholder }) => (
  <div className="flex flex-col">
    {label && (
      <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
    )}
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="border border-gray-300 px-3 py-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
    />
  </div>
);

TextAreaField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default TextAreaField;
