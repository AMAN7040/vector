import PropTypes from "prop-types";
import React from "react";

const TextField = ({ label, value, onChange, placeholder }) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input
        typeof="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
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
