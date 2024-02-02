import React from 'react';
import { observer } from "mobx-react-lite"
import useStore from 'apps/Mobx/hooks/useStore';
import Paginate from 'shared/components/Pagination';

const Pagination = () => {
    const { state, actions } = useStore('todos');    
    return (
        <Paginate 
            page={state.pagination.page}
            limit={state.pagination.limit}
            hasNext={state.pagination.hasNext}
            onLimitChange={actions.updatePagination} 
            onPageChange={actions.updatePagination} 
        />
    );
};

export default observer(Pagination);