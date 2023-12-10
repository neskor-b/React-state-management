import React, { FC, useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

// data
import { appsRoutes } from "router";

// UI
import { Tabs, Tab, TabList, Box } from "@chakra-ui/react";

const App: FC = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [activeIndex, setActiveIndex] = useState(0);

    const onPageChange = (index: number) => {
        navigate(appsRoutes[index].path)
    }

    useEffect(() => {
        appsRoutes.forEach((route, index) => {
            if (route.path === pathname) {
                setActiveIndex(index);
            }
        });
    }, [pathname]);

    return (
        <Box pt={2}>
            <Tabs index={activeIndex} onChange={onPageChange} isFitted variant='enclosed-colored'>
                <TabList mb='1em'>
                    {appsRoutes.map(page =>  <Tab aria-selected={false} key={page.name}>{page.name}</Tab>)}
                </TabList>
            </Tabs>
            <Outlet />
        </Box>
      );
}

export default App;
