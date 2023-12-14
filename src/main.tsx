import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/styles/global.scss";
import "./assets/styles/themes.scss";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
