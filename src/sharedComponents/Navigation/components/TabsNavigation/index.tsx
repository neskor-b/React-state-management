import React, { FC } from "react";

// data
import { appsRoutes } from "router";

// UI
import { Tabs, Tab, TabList, Box } from "@chakra-ui/react";

type TabsNavigationProps = {
    show?: boolean,
    activeTab: number,
    onChange: (index: number) => void
}

const TabsNavigation: FC<TabsNavigationProps> = ({ show, activeTab, onChange }) => {
    if (!show) {
        return null;
    }
    return (
        <Box p={2}>
            <Tabs
                index={activeTab}
                isFitted
                variant="enclosed"
                onChange={onChange}
            >
                <TabList>
                    {appsRoutes.map(page => (
                        <Tab
                            aria-selected={false}
                            key={page.name}
                        >
                            {page.name}
                        </Tab>
                    ))}
                </TabList>
            </Tabs>
        </Box>
    );
}

export default TabsNavigation;