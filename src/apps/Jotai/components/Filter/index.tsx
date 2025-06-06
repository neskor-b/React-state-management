import React from 'react';
import Filters from 'shared/components/Filters';

// atoms
import { filtersWithEffectAtom } from 'apps/Jotai/atoms/filters';
import { useAtom } from 'jotai';

const Filter = () => {
    const [filters, setFilters] = useAtom(filtersWithEffectAtom);
    return (
        <Filters onChange={setFilters} filters={filters} />
    );
};

export default Filter;