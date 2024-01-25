/* eslint-disable react/display-name */
import { chakra, ChakraProps } from "@chakra-ui/react";
import React, { ComponentType, ReactNode } from "react";

type TStylesWithProps<P> = (props: P) => ChakraProps

const withChakra = <P extends object>(
    Component: ComponentType<ChakraProps>,
    styles: TStylesWithProps<P> | ChakraProps
) => {
    const StyledComponent = chakra(Component, { baseStyle: {} });

    return (wrappedComponentProps: P & { children?: ReactNode }) => {
        const dynamicStyles = (typeof styles === "function" ? styles(wrappedComponentProps) : styles) ;
        return <StyledComponent {...wrappedComponentProps} {...dynamicStyles} />;
    };
};

export const Chakra = chakra;

export default withChakra;
