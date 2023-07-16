import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

import router, { hashRouter } from "./router";

root.render(
  <StrictMode>
    <RouterProvider router={hashRouter} />
  </StrictMode>
);
