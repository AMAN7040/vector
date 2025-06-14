// File: src/nodes/FileUploaderNode.jsx

import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import BaseNode from "../components/BaseNode";

const FileUploaderNode = ({ id, data }) => {
  const fields = [
    {
      type: "text",
      name: "fileDescription",
      label: "File Description",
      default: "",
    },
    {
      type: "dropdown",
      name: "uploadType",
      label: "Upload Type",
      options: ["Image", "PDF", "Text"],
      default: "Text",
    },
  ];

  const hydratedData = fields.reduce((acc, field) => {
    acc[field.name] = data?.[field.name] ?? field.default ?? "";
    return acc;
  }, {});

  const [nodeData, setNodeData] = useState(hydratedData);

  const handleChange = useCallback((key, value) => {
    setNodeData((prev) => ({ ...prev, [key]: value }));
  }, []);

  const inputHandles = [{ id: `${id}-upload` }];
  const outputHandles = [{ id: `${id}-confirmation` }];

  return (
    <BaseNode
      id={id}
      title="File Uploader"
      inputs={inputHandles}
      outputs={outputHandles}
      fields={fields}
      onChange={handleChange}
      data={nodeData}
    />
  );
};

FileUploaderNode.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.object,
};

export default FileUploaderNode;
