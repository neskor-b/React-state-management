import React, { FC } from 'react';
import { Flex, IconButton, Select } from '@chakra-ui/react';
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons';

// types
import TPagination from 'shared/api/models/pagination';

type Props = {
    hasNext: boolean,
    page: number,
    limit: number,
    onLimitChange: (key: keyof TPagination, value: number) => void,
    onPageChange: (key: keyof TPagination, value: number) => void,
}

const Pagination: FC<Props> = ({ hasNext, page, limit, onLimitChange, onPageChange }) => {
    const handlePageChange = (step: 'next' | 'previous') => () => {
        const newValue = step === 'next' ? page + 1 : page - 1;
        onPageChange('page', newValue);
    };

    const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = Number(event.target.value);
        onLimitChange('limit', value);
    }
    return (
        <Flex 
            gap={5} 
            justifyContent="center" 
            padding={5}
        >
            <IconButton
                aria-label="Previous page"
                isDisabled={page === 1}
                onClick={handlePageChange('previous')}
                size="sm"
                icon={<ArrowLeftIcon />}
            />
            <Select 
                size="sm"
                borderRadius={5}
                value={limit}
                onChange={handleLimitChange}
            >
                <option value={2}>
                    2 items per page
                </option>
                <option value={3}>
                    3 items per page
                </option>
                <option value={5}>
                    5 items per page
                </option>
            </Select>
            <IconButton
                aria-label="Next page"
                isDisabled={!hasNext}
                onClick={handlePageChange('next')}
                size="sm"
                icon={<ArrowRightIcon />}
            />
        </Flex>
    )
};

export default Pagination;
