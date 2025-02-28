import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./i18n/i18n.ts";


import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
