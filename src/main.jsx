import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Note: Vite usually defaults to index.css instead of styles.css
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);