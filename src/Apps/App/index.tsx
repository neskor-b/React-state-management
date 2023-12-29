import React, { FC } from "react";
import { Outlet } from "react-router-dom";

// components
import Navigation from "sharedComponents/Navigation";

// UI
import { Box } from "@chakra-ui/react";

const App: FC = () => (
    <Box>
        <Navigation />
        <Box p={'25px'}>
            <Outlet />
        </Box>
    </Box>
)

export default App;
