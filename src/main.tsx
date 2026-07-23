import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";

import { getRouter } from "./router";

const router = getRouter();

const redirectPath = window.location.search.match(/p=([^&]+)/);
if (redirectPath) {
  const target = decodeURIComponent(redirectPath[1]);
  window.history.replaceState({}, "", target);
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
