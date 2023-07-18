import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

import router, { hashRouter, queryClient } from "./router";

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={hashRouter} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
