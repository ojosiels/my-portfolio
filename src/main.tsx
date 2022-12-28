import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ColorModesProvider from "./contexts/ColorModesContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ColorModesProvider>
      <App />
    </ColorModesProvider>
  </React.StrictMode>
);
