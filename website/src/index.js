import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/Root';
import Product from './routes/Product';
import './App.css';
import ErrorPage from "./error-page";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/product/:courseId",
        element: <Product />,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
);