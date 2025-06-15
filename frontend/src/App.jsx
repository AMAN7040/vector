import { PipelineToolbar } from "./Toolbar";
import { PipelineUI } from "./Ui";
import { SubmitButton } from "./Submit";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        pauseOnHover
        draggable
        theme="dark"
      />
    </div>
  );
}

export default App;
