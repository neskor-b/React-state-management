import styled, { checkStyles } from "shared/HOC/withChakra";

import { Box as ChackraBox, Center as ChackraCenter } from '@chakra-ui/react'

export const Center = styled(ChackraCenter, {width: '100%', height: '100%', position: 'absolute'});

export const Box = styled<{ isLoading: boolean }>(ChackraBox, ({ isLoading }) => checkStyles({
    pointerEvents: isLoading ? 'none' : 'auto',
    opacity: isLoading ? 0.5 : 1
}));

export const Container = styled(ChackraBox, {
    position: 'relative'
});