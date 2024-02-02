import React from 'react';
import { observer } from "mobx-react-lite"
import useStore from 'Apps/Mobx/hooks/useStore';
import Filters from 'shared/components/Filters';

const Filter = () => {
    const { state, actions } = useStore('todos');
    return (
        <Filters onChange={actions.setFilters} filters={{ ...state.filters }} />
    );
};

export default observer(Filter);