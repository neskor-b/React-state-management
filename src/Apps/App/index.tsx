import React, { FC } from "react";
import { Outlet } from "react-router-dom";

// components
import Navigation from "sharedComponents/Navigation";

// UI
import { Box } from "@chakra-ui/react";

// style
import { OFFSET } from "style/offsets";

const App: FC = () => (
    <Box>
        <Navigation />
        <Box p={OFFSET.medium.xs}>
            <Outlet />
        </Box>
    </Box>
)

export default App;
