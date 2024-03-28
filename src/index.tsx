import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Post from "./pages/Post/Post";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/posts/:id",
        element: <Post />,
        loader: async ({ params }) => {
            return params;
        },
    },
]);
root.render(<RouterProvider router={router} />);
