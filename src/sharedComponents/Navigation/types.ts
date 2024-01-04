import { CSSProperties } from 'react';
import { TabsProps, SystemStyleObject } from "@chakra-ui/react";
export type TBreakpointTabsProps = {
    tabsProps: TabsProps,
    tabStyle?: {
        active?: SystemStyleObject,
        inactive?: CSSProperties,
    };
}

export type TBreakpointNavigation = {
    showTabs: boolean, 
    showMenu: boolean,
}