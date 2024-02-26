import { 
    Box,
    MenuItem
} from "@chakra-ui/react";
import styled from "shared/HOC/withChakra";

export const Container = styled<{ colorMode: 'light' | 'dark' }>(Box,({ colorMode }) => (
    {
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "2px",
        borderBottomColor: "gray.500",
        position: 'fixed',
        top: 0,
        left: '50% - 50vw',
        maxWidth: "2500px",
        width: "100%",
        zIndex: 1000,
        backgroundColor: colorMode === 'dark' ? 'gray.800' : 'white'
    }
))

export const TabLink = styled<{ isActive: boolean, colorMode: 'light' | 'dark' }>(Box, ({ isActive, colorMode }) => (
    { 
        fontSize: "lg",
        p: 1,
        textAlign: "center",
        _hover: {
            color: "blue.500"
        },
        color: isActive ? "blue.500" : colorMode === 'dark' ? "whiteAlpha.700" : "gray.500",
        position: "relative",
        whiteSpace: "nowrap",
        _before: {
            content: "''",
            display: "block",
            height: "5px",
            width: "100%",
            bottom: '-3.5px',
            left: 0,
            position: "absolute",
            borderRadius: "5px",
            backgroundColor: isActive ? "blue.500" : "transparent",
            textAlign: "center",
            _hover: {
                color: "blue.500"
            }
        }
    }
))

export const MenuItemLink = styled<{ isActive: boolean, colorMode: 'light' | 'dark' }>(MenuItem, ({ isActive, colorMode }) => (
    {
        color: isActive ? "blue.500" : colorMode === 'dark' ? "whiteAlpha.700" : "gray.500"
    }
))