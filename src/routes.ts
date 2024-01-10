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
        name: 'Redux',
        key: 'redux'
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
    rematch: {
        path: "/rematch",
        name: 'Rematch',
        key: 'rematch'
    },
    zustand: {
        path: "/zustand",
        name: 'Zustand',
        key: 'zustand'
    },
    preactSignal: {
        path: "/preact-signal",
        name: 'Preact signal',
        key: 'preact_signal'
    }
};
