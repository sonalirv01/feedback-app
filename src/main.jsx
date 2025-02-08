import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FeedbackProvider } from "./contexts/FeedbackContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FeedbackProvider>
    <App />
  </FeedbackProvider>
);
