// src/components/FieldRenderer.jsx

import React from "react";

const FIELD_MAP = {
  
};

const FieldRenderer = (fields = ["Text", "input", "Text"]) => {
  return (
    <div>
      {fields.map((field) => {
        const Component = FIELD_MAP(field.type);

        if (!Component) {
          console.warn(`Unsupported field type : ${field.type}`);
          return null;
        }

        return <Component />;
      })}
    </div>
  );
};

export default FieldRenderer;
