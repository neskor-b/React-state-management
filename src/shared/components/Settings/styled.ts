import { Flex} from "@chakra-ui/react";
import styled, { checkStyles } from "shared/HOC/withChakra";


export const Container = styled<{ isDesktop: boolean }>(Flex, ({ isDesktop }) => checkStyles(
    {
        position: "absolute",
        width: "fit-content",
        gap: 2,
        zIndex: 100,
        height: "fit-content",
        right: isDesktop ? 5 : undefined,
        left: isDesktop ? undefined : 2,
        bottom: isDesktop ? 5 : undefined,
        top: isDesktop ? '55px' : 2
    }
));