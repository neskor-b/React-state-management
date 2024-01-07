import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

// data
import { appsRoutes } from "routes";

// pages
import App  from "apps/App";
import Redux from "apps/Redux";
import Hookstate from "apps/Hookstate";
import Mobx from "apps/Mobx";
import Recoil from "apps/Recoil";
import Jotai from "apps/Jotai";
import Rematch from "apps/Rematch";
import Zustand from "apps/Zustand";
import Placeholder from "sharedComponents/MainPlaceholder";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route path="/" element={<Placeholder />} />
        <Route path={appsRoutes.redux.path} element={<Redux />} />
        <Route path={appsRoutes.hookstate.path} element={<Hookstate />} />
        <Route path={appsRoutes.mobx.path} element={<Mobx />} />
        <Route path={appsRoutes.recoil.path} element={<Recoil />} />
        <Route path={appsRoutes.jotai.path} element={<Jotai />} />
        <Route path={appsRoutes.rematch.path} element={<Rematch />} />
        <Route path={appsRoutes.zustand.path} element={<Zustand />} />
    </Route>
));

export default router;