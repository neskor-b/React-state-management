import React, { useState } from 'react';

// compoenents
import { 
    useColorMode, 
    Box, 
    IconButton, 
    Tooltip, 
    Input, 
    InputGroup, 
    InputRightElement, 
    Flex,
    Select
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon, CloseIcon } from '@chakra-ui/icons';

// styled
import { Hide } from './styled';

const Filters = () => {
    const [isHiden, setIsHiden] = useState(true);
    const { colorMode } = useColorMode();
    return (
        <Box mb="10px">
            <Hide
                colorMode={colorMode} 
                isHiden={isHiden}
            >
                <Tooltip 
                    hasArrow
                    placement='right'
                    isDisabled={!isHiden}
                    label={"Show Filters"}
                >
                    <IconButton 
                        borderRadius="0"
                        height="100%"
                        top={0}
                        zIndex={100}
                        width={isHiden ? '100%' : '15px'}
                        position="absolute"
                        right={0}
                        transition="all 0.5s ease-in-out"
                        size="sm"
                        aria-label='toggle light mode'
                        icon={!isHiden ? <ChevronUpIcon /> : <ChevronDownIcon />} 
                        onClick={() => setIsHiden(!isHiden)} 
                    />
                </Tooltip>
                {!isHiden && (
                    <Flex gap={1}>
                        <InputGroup size="sm">
                            <Input 
                                placeholder="Search" 
                                borderRadius={5}
                            />
                            <InputRightElement>
                                <CloseIcon cursor="pointer" />
                            </InputRightElement>
                        </InputGroup>
                        <Select 
                            size="sm" 
                            borderRadius={5}
                            placeholder='All statuses'
                        >
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>

                    </Flex>
                )}

            </Hide>
        </Box>

    );
};

export default Filters;
