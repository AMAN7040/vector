// src/components/fields/TextField.jsx

/**
 * TextField.jsx
 * A reusable labeled text input field. Controlled via props.
 */

import PropTypes from "prop-types";

const TextField = ({ label, value, onChange, placeholder }) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="border border-gray-300 px-3 py-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
      />
    </div>
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default TextField;
