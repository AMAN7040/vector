// Submit.jsx
import { useStore } from "./store";
import { shallow } from "zustand/shallow";
import { toast } from "react-toastify";

export const SubmitButton = () => {
  const { nodes, edges } = useStore(
    (state) => ({ nodes: state.nodes, edges: state.edges }),
    shallow
  );

  const handleSubmit = async () => {
    if (!nodes.length || !edges.length) {
      toast.warn("⚠️ Pipeline must contain at least one node and edge.", {
        position: "top-right",
        className: "text-sm font-medium",
      });
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nodes, edges }),
      });

      const result = await response.json();

      if (
        typeof result.total_nodes !== "number" ||
        typeof result.total_edges !== "number" ||
        typeof result.is_DAG !== "boolean"
      ) {
        toast.error("🚨 Malformed server response.", {
          position: "top-right",
          className: "text-sm font-medium",
        });
        return;
      }

      toast.success(
        <div className="text-sm space-y-2 leading-relaxed">
          <div className="text-base font-semibold text-green-400">
            Pipeline Submission
          </div>

          <div className="flex justify-between">
            <span className="text-gray-300">📦 Nodes</span>
            <span className="font-medium text-white">{result.total_nodes}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-300">🔗 Edges</span>
            <span className="font-medium text-white">{result.total_edges}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-300">🧠 DAG</span>
            <span
              className={`font-semibold ${
                result.is_DAG ? "text-green-400" : "text-red-400"
              }`}
            >
              {result.is_DAG ? "Valid ✅" : "Cycle ❌"}
            </span>
          </div>
        </div>,
        {
          icon: false,
          position: "top-right",
          autoClose: 4500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          className:
            "bg-zinc-900 text-white px-5 py-4 rounded-md shadow-lg border border-zinc-700",
        }
      );
    } catch (error) {
      toast.error(`🚨 Submission error: ${error.message}`, {
        position: "top-right",
        className: "text-sm font-medium",
      });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <button
        onClick={handleSubmit}
        type="button"
        className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-purple-700 transition"
      >
        Submit
      </button>
    </div>
  );
};
