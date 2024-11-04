import {createRoot} from "react-dom/client"
import App from "./pages/App";
import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./pages/about";

const root = document.getElementById("root");

if (!root) {
    throw new Error("root container doesn't exist!");
}

const container = createRoot(root);
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: "/about",
            element: <About />
        }
      ]
    },
  ]);


container.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);