import { 
    Box,
    MenuItem
} from "@chakra-ui/react";
import styled from "HOC/withChakra";

export const Container = styled(Box, {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "2px",
    borderBottomColor: "gray.500"
})

export const TabLink = styled<{ isActive: boolean }>(Box, ({ isActive }) => (
    { 
        fontSize: "lg",
        p: 1,
        textAlign: "center",
        _hover: {
            color: isActive ? "blue.500" : "blue.500"
        },
        color: isActive ? "blue.500" : "gray.500",
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
                color: isActive ? "blue.500" : "blue.500"
            }
        }
    }
))

export const MenuItemLink = styled<{ isActive: boolean }>(MenuItem, ({ isActive }) => (
    {
        color: isActive ? "blue.500" : "gray.500"
    }
))