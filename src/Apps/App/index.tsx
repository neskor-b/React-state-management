import React, { FC } from "react";
import { Outlet } from "react-router-dom";

// components
import Navigation from "shared/components/Navigation";

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
