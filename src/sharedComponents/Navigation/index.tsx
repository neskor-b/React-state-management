import React, { FC } from "react";
import { useLocation } from "react-router-dom";

// UI
import { Box, Text, useBreakpointValue } from "@chakra-ui/react";

// components
import TabLinks from "./components/TabLinks";
import Menu from "./components/Menu";

// data
import { appsRoutes } from "routes";
import { breakpointNavigation } from "./data";

// types
import { TBreakpointNavigation } from "./types";

const Navigation: FC = () => {
    const { state } = useLocation();
    const responsive = useBreakpointValue<TBreakpointNavigation>(breakpointNavigation);

    const showTip = !state?.pageKey;
    const appsRoutesArray = Object.values(appsRoutes);
    const activeIndex = appsRoutesArray.findIndex(page => page.key === state?.pageKey);

    return (
        <Box p={2}>
            {responsive?.showTabs && (
                <TabLinks 
                    activeIndex={activeIndex} 
                    links={appsRoutesArray}
                    
                />
            )}
            {responsive?.showMenu && (
                <Menu>
                    <TabLinks
                        activeIndex={activeIndex}
                        links={appsRoutesArray} 
                    />
                </Menu>
            )}
            
            {showTip && (
                <Text
                    fontSize="2xl"
                    textAlign="center"
                    p={'20%'}
                >
                    Select state manager
                </Text>
            )}
        </Box>
    );
}

export default Navigation;