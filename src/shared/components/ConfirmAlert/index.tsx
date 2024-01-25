import React, { FC, useState, useRef } from 'react';

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverFooter,
    PopoverCloseButton,
    Button,
    Box,
    Flex
} from '@chakra-ui/react'

// hooks
import useClickOutside from 'shared/hooks/useClickOutside';

type ConfirmAlertProps = {
    headerText: string;
    text: string;
    cancelText?: string;
    confirmText?: string;
    children: React.ReactNode;
    onConfirm: () => void;
}

const ConfirmAlert: FC<ConfirmAlertProps> = ({ onConfirm, headerText, text, cancelText, confirmText, children }) => {
    const ref = useRef<any>(null);
    const [isOpen, setIsOpen] = useState(false);

    useClickOutside(ref, () => setIsOpen(false));

    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    const confirm = () => {
        onConfirm();
        onClose();
    }

    return (
        <Popover isOpen={isOpen}>
            <PopoverTrigger>
                <Box onClick={onOpen}>
                    {children}
                </Box>
            </PopoverTrigger>
            <PopoverContent ref={ref}>
                <PopoverArrow />
                <PopoverCloseButton onClick={onClose} />
                <PopoverHeader>{headerText}</PopoverHeader>
                <PopoverBody>
                    {text}
                </PopoverBody>
                <PopoverFooter>
                    <Flex gap={3} justifyContent="flex-end">
                        <Button size="sm" onClick={onClose}> {cancelText || 'Cancel'}</Button>
                        <Button 
                            size="sm" 
                            colorScheme='red'
                            onClick={confirm}
                        >
                            {confirmText || 'Confirm'}
                        </Button>
                    </Flex>
                </PopoverFooter>
            </PopoverContent>
        </Popover>
    );
};

export default ConfirmAlert;