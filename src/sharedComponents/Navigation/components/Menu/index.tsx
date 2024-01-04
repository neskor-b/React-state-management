import React, { FC, useRef } from 'react'
import { useLocation } from 'react-router-dom';

// UI
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    IconButton,
    useDisclosure,
    Box
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

// hooks
import useDebounceEffect from 'hooks/useDebounceEffect';

type MenuNavigationProps = {
    children: React.ReactNode,
}


const MenuNavigation: FC<MenuNavigationProps> = ({ children }) => {
    const btnRef = useRef<HTMLButtonElement | null>(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const location = useLocation();


    useDebounceEffect(() => onClose(), 100, [location.pathname]);

    return (
        <Box position="relative" pb="15px">
            <IconButton 
                position="absolute"
                right={0}
                onClick={onOpen} 
                aria-label='Open Menu'
                variant='outline'
                icon={<HamburgerIcon />} 
            />
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerCloseButton />
                    </DrawerHeader>

                    <DrawerBody>
                        {children}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}

export default MenuNavigation;