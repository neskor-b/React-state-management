import React from 'react';
import { observer } from "mobx-react-lite"
import useStore from 'apps/Mobx/hooks/useStore';
import Paginate from 'shared/components/Pagination';

const Pagination = () => {
    const model = useStore('todos');    
    return (
        <Paginate 
            page={model.pagination.page}
            limit={model.pagination.limit}
            onLimitChange={model.updatePagination('limit')} 
            onPageChange={model.updatePagination('page')} 
            hasNext={model.pagination.hasNext}
        />
    );
};

export default observer(Pagination);