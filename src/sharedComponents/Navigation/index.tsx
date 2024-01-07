import React, { FC } from "react";
import { NavLink } from "react-router-dom";

// UI
import { 
    Box, 
    Menu,
    MenuButton,
    MenuList,
    IconButton
} from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';

// styled components
import { Container, TabLink, MenuItemLink } from "./styled";

// data
import { appsRoutes } from "routes";

// hooks
import useWindowSize, { SIZES } from "hooks/useWindowSize";

const Navigation: FC = () => {
    const { width } = useWindowSize();
    const tabsArr = Object.values(appsRoutes);

    const showDesktop = (width || 0) > SIZES.sm;

    if (showDesktop) return (
        <Container>
            {tabsArr.map(link => 
                <NavLink 
                    key={link.key} 
                    to={link.path} 
                    style={{ width: "100%" }}
                >
                    {({ isActive }) => (
                        <TabLink isActive={isActive}>
                            {link.name}
                        </TabLink>
                    )}
                </NavLink>
            )}
        </Container>
    ) 
    return (
        <Box 
            justifyContent="flex-end" 
            width="100%"
            display="flex"
        >
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                />
                <MenuList>
                    {tabsArr.map(link => (
                        <NavLink key={link.key} to={link.path}>
                            {({ isActive }) => (
                                <MenuItemLink isActive={isActive}>
                                    {link.name}
                                </MenuItemLink>
                            )}
                        </NavLink>

                    ))}
                </MenuList>
            </Menu>
        </Box>
    )
}

export default Navigation;