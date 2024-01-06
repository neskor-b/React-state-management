import React, { FC } from "react";
import { NavLink } from "react-router-dom";

// UI
import { 
    Box, 
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton
} from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';
import { fontSizes, spacing } from "theme";

// data
import { appsRoutes } from "routes";

// hooks
import useWindowSize, { SIZES } from "hooks/useWindowSize";

const Navigation: FC = () => {
    const { width } = useWindowSize();
    const tabsArr = Object.values(appsRoutes);

    const showDesktop = (width || 0) > SIZES.sm;

    if (showDesktop) return (
        <Box 
            display='flex' 
            justifyContent="space-between"
            borderColor="gray.500"
            borderBottom='1px'
        >
            {tabsArr.map(link => 
                <NavLink 
                    key={link.key} 
                    to={link.path} 
                    style={{ width: "100%" }}
                >
                    {({ isActive }) => (
                        <Box
                            fontSize={fontSizes['lg']}
                            p={spacing['1']}
                            borderBottom="2px" 
                            borderColor={isActive ? "blue.500" : "transparent"}
                            color={isActive ? "blue.500" : "gray.500"}
                            textAlign="center"
                            _hover={{ color: isActive? "blue.500" : "blue.300" }}
                        >
                            {link.name}
                        </Box>
                    )}
                </NavLink>
            )}
        </Box>
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
                                <MenuItem color={isActive ? "blue.500" : "gray.500"}>
                                    {link.name}
                                </MenuItem>
                            )}
                        </NavLink>

                    ))}
                </MenuList>
            </Menu>
        </Box>
    )
}

export default Navigation;