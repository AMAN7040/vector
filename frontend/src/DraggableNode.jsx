// DraggableNode.jsx

export const DraggableNode = ({ type, label, icon }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={`group min-w-24 min-h-24 p-3 flex flex-col items-center justify-center space-y-2 border border-gray-200 bg-white rounded-md cursor-grab shadow-[0px_10px_16px_2px_rgba(0,_0,_0,_0.05)] hover:shadow-md active:scale-[0.97] transition-all duration-150 ${type}`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-full  text-[25px] group-hover:text-purple-400 group-hover:bg-gray-100">
        {icon}
      </div>
      <span className="text-sm text-gray-700 font-medium">{label}</span>
    </div>
  );
};
