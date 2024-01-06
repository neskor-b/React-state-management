import React, { FC } from "react";
import { Outlet } from "react-router-dom";

// components
import Navigation from "sharedComponents/Navigation";

// UI
import { Box } from "@chakra-ui/react";
import { spacing } from "theme";

const App: FC = () => (
    <Box p={spacing['1']}>
        <Navigation />
        <Box p={spacing['2']}>
            <Outlet />
        </Box>
    </Box>
)

export default App;
