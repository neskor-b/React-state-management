import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

// data
import { appsRoutes } from "routes";

// pages
import App  from "Apps/App";
import Redux from "Apps/Redux";
import Hookstate from "Apps/Hookstate";
import Mobx from "Apps/Mobx";
import Recoil from "Apps/Recoil";
import Jotai from "Apps/Jotai";
import Rematch from "Apps/Rematch";
import Zustand from "Apps/Zustand";
import Placeholder from "shared/components/MainPlaceholder";

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