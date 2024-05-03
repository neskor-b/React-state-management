import React, { useState, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { omit } from 'lodash';

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

const countActiveFilters = (filters: TFilters) => {
    return Object.keys(omit(filters, 'orderby', 'order')).filter(key => filters[key as keyof TFilters]).length
}

const Filters: FC<FiltersProps> = ({ filters, onChange }) => {
    const { t } = useTranslation();
    const [isHiden, setIsHiden] = useState(countActiveFilters(filters) === 0);
    const { colorMode } = useColorMode();

    const toggleHide = () => {
        setIsHiden(!isHiden);
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
    
    const debouncedInput = useDebouncedInput({
        value: filters.search,
        onChange: changeSearch,
        delay: 500,
        deps: [filters.status]
    });

    const statusOptions: { value: TFilters['status'], label: string }[] = [
        { value: 'active', label: t('filters.options.active') },
        { value: 'completed', label: t('filters.options.completed') }
    ];

    return (
        <Box mb="10px">
            <Hide
                colorMode={colorMode} 
                isHiden={isHiden}
            >
                <Tooltip 
                    hasArrow
                    placement="right"
                    label={!isHiden ? t('filters.tooltips.hideFilters') : t('filters.tooltips.showFilters')}
                >
                    <IconButton 
                        borderRadius="0"
                        height="100%"
                        top={0}
                        zIndex={10}
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
                                placeholder={t('filters.search.placeholder')}
                                borderRadius={5}
                                {...debouncedInput.inputProps}
                            />
                            {debouncedInput.inputProps.value && (
                                <InputRightElement>
                                    <CloseIcon onClick={debouncedInput.clear} cursor="pointer" />
                                </InputRightElement>
                            )}

                        </InputGroup>
                        <Select 
                            size="sm" 
                            borderRadius={5}
                            value={filters.status}
                            onChange={changeStatus}
                            placeholder={t('filters.status.placeholder')}
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
