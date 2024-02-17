import React from 'react';
import Filters from 'shared/components/Filters';

// redux
import { updateFilters } from 'apps/Redux/store/slices/todosSlice';
import { useAppSelector, useAppDispatch } from 'apps/Redux/store';

// types
import TFilters from 'shared/api/models/filters';

const Filter = () => {
    const dispatch = useAppDispatch();
    const model = {
        ...useAppSelector(state => state.todos),
        updateFilters: (data: TFilters) => dispatch(updateFilters(data))
    }
    return (
        <Filters onChange={model.updateFilters} filters={model.filters} />
    );
};

export default Filter;