import React, { FC } from "react";
import { Outlet } from "react-router-dom";

// components
import Navigation from "shared/components/Navigation";

// UI
import { Box, Flex } from "@chakra-ui/react";

const App: FC = () => (
    <Flex 
        p={1} 
        direction="column" 
        height="100%"
        pt={10}
    >
        <Navigation />
        <Box p={2} flexGrow={1}>
            <Outlet />
        </Box>
    </Flex>
)

export default App;
