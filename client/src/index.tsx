import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ColorThemeContextProvider } from "./context/ColorThemeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ColorThemeContextProvider>
      <App />
    </ColorThemeContextProvider>
  </React.StrictMode>
);
