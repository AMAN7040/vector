# Visual Pipeline Builder

## 🧭 Overview

This repository demonstrates a robust, scalable, and user-centric approach to building a visual pipeline editor. The work is divided into four progressive parts, each adding significant functionality, modularity, and polish to the system.

---

## ✅ Part 1: Node Abstraction

### 🔨 Objective

Establish a scalable and reusable abstraction to facilitate rapid development and styling of new node types.

### 🛠 Implementation Highlights

- **BaseNode**: A shared layout and logic wrapper for all custom nodes.
- **FieldRenderer**: Renders field components dynamically based on configuration.
- **Reusable Field Components**:
  - `TextField`
  - `TextAreaField`
  - `SelectField`, etc.
- **Node Definitions**:
  - Implemented: `InputNode`, `OutputNode`, `LLMNode`, `TextNode`, `TimerNode`
- **createNode Utility**:
  - Centralized function to create nodes with default config and unique IDs.

---

## 🎨 Part 2: Styling

### 🎯 Objective

Elevate the UI to a professional-grade look and feel.

### 🌐 UI Enhancements

- **TailwindCSS** for responsive, utility-first styling.
- **Features Introduced**:
  - Snap-to-grid alignment
  - Workspace minimap for navigation
  - Unified styling for node components
  - Hover/focus transitions, elevation, and clean shadowing

---

## 🧠 Part 3: Text Node Logic

### 🎯 Objective

Make TextNode smarter and more dynamic for real-world pipeline use cases.

### 💡 Key Features

- **Auto-Resizing TextArea**: Expands with content dynamically.
- **Variable Parsing**:
  - Extracts variables using `{{variable}}` syntax
  - Implements this via `extractVariables.js`
- **Dynamic Handle Injection**:
  - Generates a left-side handle for each detected variable
  - Uses `positionHandles.js` for dynamic layout

---

## 🔗 Part 4: Backend Integration

### 🎯 Objective

Integrate frontend submission with backend DAG analysis and validation.

### 🔁 Integration Workflow

- **Submit Button**:
  - Located in `Submit.jsx`
  - Sends node/edge data via POST to `/pipelines/parse`
- **Backend (FastAPI)**:
  - Endpoint: `main.py > /pipelines/parse`
  - Responds with:
    ```json
    {
      "num_nodes": int,
      "num_edges": int,
      "is_dag": bool
    }
    ```
- **Feedback**:
  - Frontend shows a styled toast alert (via React Toastify)
  - Details include node count, edge count, and DAG validity

---

## ⚙️ Getting Started

### 🖥️ Frontend

```bash
cd frontend
npm install
npm run dev
🧪 Backend
bash
Copy
Edit
cd backend
python3 -m uvicorn main:app --reload
Ensure the backend is running on http://localhost:8000

🧠 Smart Utilities
createNode.js: Centralized node initialization logic.

positionHandles.js: Aligns input handles dynamically based on count.

extractVariables.js: Extracts {{variable}} syntax from text for handle generation.

📁 Project Structure
css
Copy
Edit
src/
├── components/
│   ├── BaseNode.jsx
│   ├── FieldRenderer.jsx
│   └── fields/
│       ├── TextField.jsx
│       ├── TextAreaField.jsx
│       └── SelectField.jsx
├── nodes/
│   ├── InputNode.jsx
│   ├── OutputNode.jsx
│   └── ...
├── utils/
│   ├── createNode.js
│   ├── positionHandles.js
│   └── extractVariables.js
├── store.js
├── Submit.jsx
├── Ui.jsx
└── index.css
🧰 Tech Stack
Frontend: React, TailwindCSS

Backend: FastAPI (Python)

UX Enhancements: React Toastify

🚀 Features at a Glance
🧱 Reusable Node Architecture

🎨 Professional UI Styling

🧠 Smart Variable Detection

🔁 Backend Validation with DAG Check

✅ Real-time Visual Feedback
```
