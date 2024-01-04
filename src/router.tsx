import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

// data
import { appsRoutes } from "routes";

// pages
import App  from "apps/App";
import Redux from "apps/Redux";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route path={appsRoutes.redux.path} element={<Redux />} />
        <Route path={appsRoutes.hookstate.path} element={<Redux />} />
        <Route path={appsRoutes.mobx.path} element={<Redux />} />
        <Route path={appsRoutes.recoil.path} element={<Redux />} />
        <Route path={appsRoutes.jotai.path} element={<Redux />} />
        <Route path={appsRoutes.rematch.path} element={<Redux />} />
        <Route path={appsRoutes.zustand.path} element={<Redux />} />
    </Route>
));

export default router;