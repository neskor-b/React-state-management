import React, { useState, FC } from 'react';

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

// hooks
import useDebouncedInput from 'shared/hooks/useDebouncedInput';

// types
import TFilters from 'shared/api/models/filters';

// styled
import { Hide } from './styled';

type FiltersProps = {
    filters: TFilters
    onChange: (filters: TFilters) => void
}

const statusOptions: { value: TFilters['status'], label: string }[] = [
    { value: 'active', label: 'Active' },
    { value: 'completed', label: 'Completed' }
];

const Filters: FC<FiltersProps> = ({ filters, onChange }) => {
    const [isHiden, setIsHiden] = useState(true);
    const [TooltipLabel, setTooltipLabel] = useState('Show Filters');
    const { colorMode } = useColorMode();

    const toggleHide = () => {
        setIsHiden(!isHiden);
        const timeout = setTimeout(() => setTooltipLabel(isHiden ? 'Hide and clear Filters' : 'Show Filters'), 500);
        if (!isHiden) {
            onChange({ ...filters, status: '', search: '' });
        }
        return () => clearTimeout(timeout);
    };

    const handleChange = (key: keyof TFilters) => (event: string | React.ChangeEvent<HTMLSelectElement>) => {
        if (typeof event === 'string') {
            onChange({ ...filters, [key]: event });
            return;
        }
        onChange({ ...filters, [key]: event.target.value });
    };

    const changeSearch = handleChange('search');
    const changeStatus = handleChange('status');
    
    const deboundedInput = useDebouncedInput({
        value: filters.search,
        onChange: changeSearch,
        delay: 500
    });

    return (
        <Box mb="10px">
            <Hide
                colorMode={colorMode} 
                isHiden={isHiden}
            >
                <Tooltip 
                    hasArrow
                    placement='right'
                    label={TooltipLabel}
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
                        onClick={toggleHide} 
                    />
                </Tooltip>
                {!isHiden && (
                    <Flex gap={1}>
                        <InputGroup size="sm">
                            <Input 
                                placeholder="Search" 
                                borderRadius={5}
                                {...deboundedInput.inputProps}
                            />
                            {deboundedInput.inputProps.value && (
                                <InputRightElement>
                                    <CloseIcon onClick={deboundedInput.clear} cursor="pointer" />
                                </InputRightElement>
                            )}

                        </InputGroup>
                        <Select 
                            size="sm" 
                            borderRadius={5}
                            value={filters.status}
                            onChange={changeStatus}
                            placeholder='All statuses'
                        >
                            {statusOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </Select>

                    </Flex>
                )}

            </Hide>
        </Box>

    );
};

export default Filters;
