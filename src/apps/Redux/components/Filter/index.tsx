import React from 'react';
import Filters from 'shared/components/Filters';

// redux
import { updateFilters } from 'apps/Redux/store/slices/todosSlice';
import { useAppSelector, useAppDispatch } from 'apps/Redux/store';

// types
import TFilters from 'shared/api/models/filters';

const Filter = () => {
    const dispatch = useAppDispatch();
    const { filters, onChange } = {
        ...useAppSelector(state => state.todos),
        onChange: (data: TFilters) => dispatch(updateFilters(data))
    }
    return (
        <Filters onChange={onChange} filters={filters} />
    );
};

export default Filter;