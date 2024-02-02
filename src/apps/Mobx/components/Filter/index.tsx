import React from 'react';
import { observer } from "mobx-react-lite"
import useStore from 'apps/Mobx/hooks/useStore';
import Filters from 'shared/components/Filters';

const Filter = () => {
    const model = useStore('todos');
    return (
        <Filters onChange={model.setFilters} filters={{ ...model.filters }} />
    );
};

export default observer(Filter);