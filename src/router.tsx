import React from "react";
import { createBrowserRouter } from "react-router-dom";

// pages
import App  from "apps/App";
import Redux from "apps/Redux";

export const appsRoutes = [
    {
        path: "/redux",
        name: 'Redux',
        element: <Redux />
    },
    {
        path: "/Hookstate",
        name: 'Hookstate',
        element: <Redux />
    },
    {
        path: "/mobx",
        name: 'Mobx',
        element: <Redux />
    },
    {
        path: "/recoil",
        name: 'Recoil',
        element: <Redux />
    },
    {
        path: "/jotai",
        name: 'Jotai',
        element: <Redux />
    },
    {
        path: "/rematch",
        name: 'Rematch',
        element: <Redux />
    },
    {
        path: "/zustand",
        name: 'Zustand',
        element: <Redux />
    }
]

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: appsRoutes
    }
]);

export default router;