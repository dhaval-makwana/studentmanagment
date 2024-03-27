import React from "react";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
