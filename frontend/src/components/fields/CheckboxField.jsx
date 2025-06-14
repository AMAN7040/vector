// src/components/fields/CheckboxField.jsx

import React from "react";
import PropTypes from "prop-types";

const CheckboxField = ({ label, value, onChange }) => (
  <div className="flex items-center gap-2">
    <input
      type="checkbox"
      checked={value}
      onChange={(e) => onChange(e.target.checked)}
      className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
    />
    {label && <label className="text-sm text-gray-700">{label}</label>}
  </div>
);

CheckboxField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CheckboxField;
