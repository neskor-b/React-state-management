import { CSSProperties } from 'react';
import { TabsProps, SystemStyleObject } from "@chakra-ui/react";
export type TNavigationResponsiveTabsData = {
    showTabs: boolean,
    showMenu: boolean,
    tabsProps: TabsProps,
    tabStyles?: {
        active?: SystemStyleObject,
        inactive?: CSSProperties,
    };
}