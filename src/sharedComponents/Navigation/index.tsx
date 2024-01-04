import React, { FC } from "react";
import { useLocation } from "react-router-dom";

// UI
import { Box, Text, useBreakpointValue } from "@chakra-ui/react";

// components
import TabLinks from "./components/TabLinks";
import Menu from "./components/Menu";

// data
import { appsRoutes } from "routes";
import { navigationResponsiveTabsData } from "./data";

// types
import { TNavigationResponsiveTabsData } from "./types";

const Navigation: FC = () => {
    const { state } = useLocation();
    const tabsResponsiveData = useBreakpointValue<TNavigationResponsiveTabsData>(navigationResponsiveTabsData);

    const showTip = !state?.pageKey;
    const appsRoutesArray = Object.values(appsRoutes);
    const activeIndex = appsRoutesArray.findIndex(page => page.key === state?.pageKey);

    return (
        <Box p={2}>
            {tabsResponsiveData?.showTabs && (
                <TabLinks 
                    activeIndex={activeIndex} 
                    routes={appsRoutesArray}
                    tabsProps={tabsResponsiveData?.tabsProps}
                    
                />
            )}
            {tabsResponsiveData?.showMenu && (
                <Menu>
                    <TabLinks
                        routes={appsRoutesArray} 
                        activeIndex={activeIndex} 
                        tabsProps={tabsResponsiveData?.tabsProps}
                        tabStyles={tabsResponsiveData?.tabStyles}
                    />
                </Menu>
            )}
            
            {showTip && (
                <Text
                    fontSize="2xl"
                    textAlign="center"
                    p={'20%'}
                >
                    Select state management
                </Text>
            )}
        </Box>
    );
}

export default Navigation;