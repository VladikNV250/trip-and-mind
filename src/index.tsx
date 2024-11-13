import {createRoot} from "react-dom/client"
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
import "@/i18n/i18n";


const root = document.getElementById("root");

if (!root) {
    throw new Error("root container doesn't exist!");
}

const container = createRoot(root);


container.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);