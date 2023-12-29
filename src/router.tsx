import React from "react";
import { createBrowserRouter } from "react-router-dom";

// pages
import App  from "apps/App";
import ReduxConnect from "apps/ReduxConnect";
import ReduxHooks from "apps/ReduxHooks";
import ReduxToolkit from "apps/ReduxToolkit";

export const appsRoutes = [
    {
        path: "/redux-connect",
        name: 'Redux connect',
        element: <ReduxConnect />
    },
    {
        path: "/redux-hooks",
        name: 'Redux hooks',
        element: <ReduxHooks />
    },
    {
        path: "/redux-toolkit",
        name: 'Redux toolkit',
        element: <ReduxToolkit />
    },
    {
        path: "/Hookstate",
        name: 'Hookstate',
        element: <ReduxToolkit />
    },
    {
        path: "/mobx",
        name: 'Mobx',
        element: <ReduxToolkit />
    },
    {
        path: "/recoil",
        name: 'Recoil',
        element: <ReduxToolkit />
    },
    {
        path: "/jotai",
        name: 'Jotai',
        element: <ReduxToolkit />
    },
    {
        path: "/rematch",
        name: 'Rematch',
        element: <ReduxToolkit />
    },
    {
        path: "/zustand",
        name: 'Zustand',
        element: <ReduxToolkit />
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