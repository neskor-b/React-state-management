import { TNavigationResponsiveTabsData } from "./types";

export const navigationResponsiveTabsData: Record<string, TNavigationResponsiveTabsData> = {
    md: {
        showTabs: true,
        showMenu: false,
        tabsProps: {
            isFitted: true,
            variant: 'enclosed',
            children: null,
            orientation: 'horizontal'
        }
    },
    base: {
        showTabs: false,
        showMenu: true,
        tabsProps: {
            isFitted: true,
            variant: 'unstyled',
            children: null,
            orientation: 'vertical'
        },
        tabStyles: {
            active: { color: 'blue.500', borderBottomWidth: '1px', borderBottomColor: 'blue.500', textAlign: 'left' },
            inactive: { width: '100%', textAlign: 'left' }
        }
    }
}