import React, { FC } from "react";
import { Outlet } from "react-router-dom";

// components
import Navigation from "shared/components/Navigation";
import Settings from "shared/components/Settings";
import Toast from "shared/components/Toast";
import EnvPlaceholder from "shared/components/EnvPlaceholder";

// hooks
import useWindowSize from "shared/hooks/useWindowSize";
import { useEnvCheck } from "shared/hooks/useEnvCheck";

// UI
import { Box, Flex } from "@chakra-ui/react";

const App: FC = () => {
    const { isDesktop } = useWindowSize();
    const hasMissingEnvVars = useEnvCheck();


    if (hasMissingEnvVars) {
        return <EnvPlaceholder />;
    }

    return (
        <Flex 
            direction="column" 
            height="100%"
            m="auto"
            position="relative"
            maxWidth="2500px"
            pt={isDesktop ? 10 : 2}
        >
            <Navigation />
            <Box p={2} flexGrow={1}>
                <Outlet />
            </Box>
            <Settings/>
            <Toast />
        </Flex>
    )
}

export default App;
