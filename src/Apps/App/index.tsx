import React, { FC } from "react";
import { Outlet } from "react-router-dom";

// components
import Navigation from "sharedComponents/Navigation";

// UI
import { Box } from "@chakra-ui/react";

const App: FC = () => (
    <Box p={1}>
        <Navigation />
        <Box p={2}>
            <Outlet />
        </Box>
    </Box>
)

export default App;
