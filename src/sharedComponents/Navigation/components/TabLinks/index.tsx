import React, { FC } from "react";
import { NavLink } from "react-router-dom";

// UI
import { Tabs, Tab, TabList, Box, useBreakpointValue } from "@chakra-ui/react";

// data
import { breakpointTabsProps } from "sharedComponents/Navigation/data";

// types
import { TBreakpointTabsProps } from "sharedComponents/Navigation/types";

type TabLinksProps = {
    activeIndex: number,
    links: {
        path: string;
        name: string;
        key: string;
    }[],
}

const TabLinks: FC<TabLinksProps> = ({ activeIndex, links }) => {
    const responsive = useBreakpointValue<TBreakpointTabsProps>(breakpointTabsProps);
    return (
        <Box p={2}>
            <Tabs
                index={activeIndex}
                {...responsive?.tabsProps}
            >
                <TabList width={'100%'}>
                    {links.map(link => (
                        <Tab
                            key={link.key}
                            _selected={responsive?.tabStyle?.active}
                            _hover={{ color: 'blue.300' }}
                            padding={0}
                            style={responsive?.tabStyle?.inactive}
                            cursor="pointer"
                        >
                            <NavLink 
                                to={link.path} 
                                key={link.key}
                                style={{ width: '100%', height: '100%', padding: 10 }}
                                state={{ pageKey: link.key }}

                            >
                                {link.name}
                            </NavLink>
                        </Tab>
                    ))}
                </TabList>
            </Tabs>
        </Box>
    );
}

export default TabLinks;