export type TRouteItem = {
    path: string;
    name: string;
    key: string;
};

type AppsRoutes = {
    [key: string]: TRouteItem;
};

export const appsRoutes: AppsRoutes = {
    redux: {
        path: "/redux",
        name: 'Redux (Toolkit)',
        key: 'redux'
    },
    rematch: {
        path: "/rematch",
        name: 'Rematch',
        key: 'rematch'
    },
    hookstate: {
        path: "/hookstate",
        name: 'Hookstate',
        key: 'hookstate'
    },
    mobx: {
        path: "/mobx",
        name: 'Mobx',
        key: 'mobx'
    },
    recoil: {
        path: "/recoil",
        name: 'Recoil',
        key: 'recoil'
    },
    jotai: {
        path: "/jotai",
        name: 'Jotai',
        key: 'jotai'
    },
    zustand: {
        path: "/zustand",
        name: 'Zustand',
        key: 'zustand'
    }
};
