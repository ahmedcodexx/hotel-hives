import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { ErrorBoundary } from "react-error-boundary";
import {ErrorFullBack} from "./pages/index.js";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary fallbackRender={ErrorFullBack} onReset={()=> window.location.replace('/')}>
      <App />
      <Toaster />
    </ErrorBoundary>
  </StrictMode>,
);
