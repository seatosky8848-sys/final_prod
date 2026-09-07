import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";

import { SmoothScroll } from "./components/SmoothScroll";
import { getRouter } from "./router";

const router = getRouter();

const redirectPath = window.location.search.match(/p=([^&]+)/);
if (redirectPath) {
  try {
    const target = decodeURIComponent(redirectPath[1]);
    if (target.startsWith("/") && !target.startsWith("//")) {
      window.history.replaceState({}, "", target);
    }
  } catch {
    window.history.replaceState({}, "", "/");
  }
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <SmoothScroll>
      <RouterProvider router={router} />
    </SmoothScroll>
  </StrictMode>,
);
