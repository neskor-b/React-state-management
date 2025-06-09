import React from 'react';
import Filters from 'shared/components/Filters';

import { useStore } from 'apps/Zustand/store';

const Filter = () => {
    const { filters, setFilters } = useStore(state => state.filterState);
    return (
        <Filters onChange={setFilters} filters={filters} />
    );
};

export default Filter;