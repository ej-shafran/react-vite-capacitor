import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// fix for an issue with @hilma/auth
process.env = import.meta.env;
process.env.REACT_APP_DOMAIN = import.meta.env.VITE_DOMAIN;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
