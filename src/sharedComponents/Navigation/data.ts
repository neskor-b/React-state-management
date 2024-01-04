import { TBreakpointTabsProps, TBreakpointNavigation } from "./types";

export const breakpointTabsProps: Record<string, TBreakpointTabsProps> = {
    md: {
        tabsProps: {
            isFitted: true,
            variant: 'enclosed',
            children: null,
            orientation: 'horizontal'
        }
    },
    base: {
        tabsProps: {
            isFitted: true,
            variant: 'unstyled',
            children: null,
            orientation: 'vertical'
        },
        tabStyle: {
            active: { color: 'blue.500', borderBottomWidth: '1px', borderBottomColor: 'blue.500', textAlign: 'left' },
            inactive: { width: '100%', textAlign: 'left' }
        }
    }
}

export const breakpointNavigation: Record<string, TBreakpointNavigation> = {
    md: {
        showTabs: true,
        showMenu: false
    },
    base: {
        showTabs: false,
        showMenu: true
    }
}