export type TRouteItem = {
    path: string;
    name: string;
    key: string;
    isDone?: boolean;
};

type AppsRoutes = {
    [key: string]: TRouteItem;
};

export const appsRoutes: AppsRoutes = {
    redux: {
        path: "/redux",
        name: 'Redux',
        key: 'redux',
        isDone: true
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
        key: 'mobx',
        isDone: true
    },
    recoil: {
        path: "/recoil",
        name: 'Recoil',
        key: 'recoil'
    },
    jotai: {
        path: "/jotai",
        name: 'Jotai',
        key: 'jotai',
        isDone: true
    },
    zustand: {
        path: "/zustand",
        name: 'Zustand',
        key: 'zustand',
        isDone: true
    }
};
