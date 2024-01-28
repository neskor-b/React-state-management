import React, { useState } from 'react';

// compoenents
import { useColorMode, Box, IconButton, Tooltip } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

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

            </Hide>
        </Box>

    );
};

export default Filters;
