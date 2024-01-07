/* eslint-disable react/display-name */
import { chakra, ChakraProps } from "@chakra-ui/react";
import React, { ComponentType, ReactNode } from "react";

const withChakra = <P extends object>(
    Component: ComponentType<ChakraProps>,
    styles: ((props: P) => ChakraProps) | ChakraProps
) => {
    const StyledComponent = chakra(Component, { baseStyle: {} });

    return (wrappedComponentProps: P & { children?: ReactNode }) => {
        const dynamicStyles = typeof styles === "function" ? styles(wrappedComponentProps) : styles;
        return <StyledComponent {...wrappedComponentProps} {...dynamicStyles} />;
    };
};

export default withChakra;
