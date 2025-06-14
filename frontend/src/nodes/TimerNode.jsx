// src/nodes/TimerNode.jsx

import createNode from "../utils/createNode";

const TimerNode = createNode({
  type: "timer",
  title: "Timer",
  inputs: [],
  outputs: [{ id: "timestamp" }],
  fields: [
    {
      type: "number",
      name: "interval",
      label: "Interval (seconds)",
      default: 5,
    },
  ],
});

export default TimerNode;
