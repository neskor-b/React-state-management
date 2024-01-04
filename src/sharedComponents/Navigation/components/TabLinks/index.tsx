import React, { FC } from "react";
import { NavLink } from "react-router-dom";

// UI
import { Tabs, Tab, TabList, Box, TabsProps, SystemStyleObject } from "@chakra-ui/react";

type TabLinksProps = {
    activeIndex: number,
    routes: {
        path: string;
        name: string;
        key: string;
    }[],
    tabsProps?: TabsProps;
    tabStyles?: {
        active?: SystemStyleObject,
        hover?: SystemStyleObject,
        inactive?: React.CSSProperties,
    };
}

const TabLinks: FC<TabLinksProps> = ({ activeIndex, routes, tabsProps, tabStyles }) => {
    return (
        <Box p={2}>
            <Tabs
                index={activeIndex}
                {...tabsProps}
            >
                <TabList width={'100%'}>
                    {routes.map(page => (
                        <Tab
                            key={page.key}
                            _selected={tabStyles?.active}
                            padding={0}
                            style={tabStyles?.inactive}
                        >
                            <NavLink 
                                to={page.path} 
                                key={page.key}
                                style={{ width: '100%', height: '100%', padding: 10 }}
                                state={{ pageKey: page.key }}

                            >
                                {page.name}
                            </NavLink>
                        </Tab>
                    ))}
                </TabList>
            </Tabs>
        </Box>
    );
}

export default TabLinks;