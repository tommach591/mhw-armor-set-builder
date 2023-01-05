import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./index.css";
import App from "./components/App";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { HunterProvider } from "./utils/HunterContext";
import { ArmoryProvider } from "./utils/ArmoryContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <HunterProvider>
        <ArmoryProvider>
          <App />
        </ArmoryProvider>
      </HunterProvider>
    </DndProvider>
  </React.StrictMode>
);
