import { Flex} from "@chakra-ui/react";
import styled, { checkStyles } from "shared/HOC/withChakra";


export const Container = styled<{ isDesktop: boolean, colorMode: string }>(Flex, ({ isDesktop, colorMode }) => checkStyles(
    {
        position: "absolute",
        width: "fit-content",
        height: "fit-content",
        gap: 2,
        backgroundColor: colorMode === 'dark' ? 'gray.800' : 'white',
        zIndex: 100,
        right: isDesktop ? 5 : undefined,
        left: isDesktop ? undefined : 2,
        bottom: isDesktop ? 5 : undefined,
        top: isDesktop ? '55px' : 2
    }
));