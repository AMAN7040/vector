import PropTypes from "prop-types";
import { useRef, useEffect } from "react";

const AutoTextAreaField = ({
  label,
  value,
  onChange,
  placeholder,
  minRows = 2,
  maxRows = 10,
}) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.rows = minRows;
      textarea.style.height = "auto";
      const scrollHeight = textarea.scrollHeight;
      const lineHeight = 24;
      const maxHeight = lineHeight * maxRows;
      textarea.style.height = `${Math.min(scrollHeight, maxHeight)}px`;
    }
  }, [value, minRows, maxRows]);

  return (
    <div className="flex flex-col">
      {label && (
        <label className="text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="border border-gray-300 px-3 py-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm resize-none transition-all"
        rows={minRows}
        style={{
          overflow: "hidden",
          lineHeight: "1.5rem",
        }}
      />
    </div>
  );
};

AutoTextAreaField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  minRows: PropTypes.number,
  maxRows: PropTypes.number,
};

export default AutoTextAreaField;
