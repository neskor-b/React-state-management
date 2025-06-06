import React from 'react';
import { observer } from "mobx-react-lite"
import useStore from 'apps/Mobx/hooks/useStore';
import Filters from 'shared/components/Filters';

const Filter = () => {
    const { filters, setFilters } = useStore('todos');
    return (
        <Filters onChange={setFilters} filters={filters} />
    );
};

export default observer(Filter);