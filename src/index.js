import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./index.css";
import App from "./components/App";
import { DndProvider } from "react-dnd";
import { MultiBackend } from "react-dnd-multi-backend";
import { HTML5toTouch } from "rdndmb-html5-to-touch"; // or any other pipeline
import { HunterProvider } from "./utils/HunterContext";
import { ArmoryProvider } from "./utils/ArmoryContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <HunterProvider>
        <ArmoryProvider>
          <App />
        </ArmoryProvider>
      </HunterProvider>
    </DndProvider>
  </React.StrictMode>
);
